// AI marking with Google Gemini.
// Exposes window.AI.{ markAnswer, testKey, isAvailable, getDiscoveredModel }.
// The `-latest` model aliases were retired on v1beta in 2024, so we maintain a
// fallback list and discover the first model the caller's key actually has
// access to. The discovered model id is cached for the rest of the session.

(function () {
    "use strict";

    const ENDPOINT = (model) =>
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
    const LIST_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models`;

    // Try newest-and-cheapest first, fall back through older free-tier models.
    // Adjust the order or add new ones here when Google ships more.
    const CANDIDATE_MODELS = [
        "gemini-2.5-flash",
        "gemini-2.5-flash-lite",
        "gemini-2.0-flash",
        "gemini-2.0-flash-001",
        "gemini-1.5-flash",
        "gemini-1.5-flash-002",
        "gemini-1.5-flash-8b"
    ];

    let cachedModel = null;   // discovered model id for this session

    function getDiscoveredModel() { return cachedModel; }

    /**
     * Find the first model id from a candidate list that ListModels confirms
     * exists for this key. Falls back to a hard-coded list if ListModels fails.
     * @param {string} apiKey
     * @returns {Promise<string>} model id
     */
    async function discoverModel(apiKey) {
        if (cachedModel) return cachedModel;
        // First try ListModels to find what's actually available for this key.
        try {
            const res = await fetch(`${LIST_ENDPOINT}?key=${encodeURIComponent(apiKey)}`, {
                method: "GET",
                headers: { "Accept": "application/json" }
            });
            if (res.ok) {
                const data = await res.json();
                const models = (data && data.models) || [];
                // Names look like "models/gemini-2.5-flash"
                const supports = (m) => Array.isArray(m.supportedGenerationMethods) &&
                    m.supportedGenerationMethods.indexOf("generateContent") >= 0;
                const available = models.filter(supports).map(m => (m.name || "").replace(/^models\//, ""));
                // Pick the first candidate that's actually available
                for (const cand of CANDIDATE_MODELS) {
                    if (available.includes(cand)) { cachedModel = cand; return cand; }
                }
                // Otherwise, pick any available "flash" model
                const flash = available.find(n => /flash/i.test(n));
                if (flash) { cachedModel = flash; return flash; }
                // Or the first available model
                if (available.length) { cachedModel = available[0]; return available[0]; }
            }
        } catch (_) { /* fall through to blind try */ }
        // ListModels was blocked or failed — try a direct ping with each candidate.
        for (const cand of CANDIDATE_MODELS) {
            try {
                const ok = await pingModel(apiKey, cand);
                if (ok) { cachedModel = cand; return cand; }
            } catch (_) { /* keep trying */ }
        }
        throw new Error("No supported Gemini model is available for this key.");
    }

    async function pingModel(apiKey, model) {
        const body = {
            contents: [{ parts: [{ text: "Reply with just OK." }] }],
            generationConfig: { temperature: 0, maxOutputTokens: 5 }
        };
        const res = await fetch(`${ENDPOINT(model)}?key=${encodeURIComponent(apiKey)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        return res.ok;
    }

    /**
     * Quick connectivity test. Caches the discovered model on success.
     */
    async function testKey(apiKey) {
        if (!apiKey) return false;
        const model = await discoverModel(apiKey);
        const body = {
            contents: [{ parts: [{ text: "Reply with just OK." }] }],
            generationConfig: { temperature: 0, maxOutputTokens: 5 }
        };
        const res = await fetch(`${ENDPOINT(model)}?key=${encodeURIComponent(apiKey)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            // Cache miss — null it out so the next call re-discovers
            cachedModel = null;
            throw new Error(`Gemini ${res.status} (model ${model}): ${text.slice(0, 200) || res.statusText}`);
        }
        const data = await res.json();
        const txt = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        return /OK/i.test(txt) || txt.length > 0;
    }

    function buildMarkingPrompt(opts) {
        const { question, sample, response, marks, subjectName } = opts;
        return [
            `You are an experienced ${subjectName} teacher marking a Year 9 student's response.`,
            `Australian curriculum (NSW Stage 5).`,
            ``,
            `QUESTION: ${question}`,
            sample ? `SAMPLE / MARKER'S NOTES: ${sample}` : "",
            `MARKS AVAILABLE: ${marks || 4}`,
            `STUDENT'S RESPONSE: ${response || "(no response provided)"}`,
            ``,
            `Mark the response. Be encouraging but accurate. Reply ONLY with valid JSON of this exact shape:`,
            `{`,
            `  "assessment": "correct" | "partial" | "incorrect",`,
            `  "suggestedMark": <integer mark out of ${marks || 4}>,`,
            `  "feedback": "<2-3 sentences of specific, supportive feedback>",`,
            `  "missingPoints": ["<bullet>", ...]`,
            `}`,
            `Do not wrap the JSON in markdown fences.`
        ].filter(Boolean).join("\n");
    }

    /**
     * Mark a single written answer.
     */
    async function markAnswer(opts) {
        const { apiKey } = opts;
        if (!apiKey) throw new Error("No Gemini API key. Add one in Settings.");
        const model = await discoverModel(apiKey);
        const prompt = buildMarkingPrompt(opts);
        const marks = opts.marks || 4;
        const body = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                // Strict schema = the model returns valid JSON instead of free
                // text we have to coax. Cuts truncation problems dramatically.
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        assessment: { type: "STRING", enum: ["correct", "partial", "incorrect"] },
                        suggestedMark: { type: "INTEGER" },
                        feedback: { type: "STRING" },
                        missingPoints: { type: "ARRAY", items: { type: "STRING" } }
                    },
                    required: ["assessment", "suggestedMark", "feedback"]
                },
                temperature: 0.3,
                // Gemini 2.5 spends part of this budget on internal "thinking"
                // before any output is emitted, so 600 was getting truncated.
                // 2048 is comfortable for the structured response we need.
                maxOutputTokens: 2048
            },
            // Disable Gemini-2.5 internal thinking so the entire token budget
            // goes to the structured answer. Older models ignore this field.
            thinkingConfig: { thinkingBudget: 0 }
        };
        const res = await fetch(`${ENDPOINT(model)}?key=${encodeURIComponent(apiKey)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            // 404 → cached model has gone away. Wipe the cache and try once more.
            if (res.status === 404 && cachedModel) {
                cachedModel = null;
                return markAnswer(opts);
            }
            // Some models reject `thinkingConfig` with 400 INVALID_ARGUMENT —
            // retry once without it.
            if (res.status === 400 && /thinkingConfig|thinkingBudget/i.test(text)) {
                delete body.thinkingConfig;
                const res2 = await fetch(`${ENDPOINT(model)}?key=${encodeURIComponent(apiKey)}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                if (!res2.ok) {
                    const t2 = await res2.text().catch(() => "");
                    throw new Error(`Gemini ${res2.status} (model ${model}): ${t2.slice(0, 200) || res2.statusText}`);
                }
                const data2 = await res2.json();
                return extractAndParse(data2, marks);
            }
            throw new Error(`Gemini ${res.status} (model ${model}): ${text.slice(0, 200) || res.statusText}`);
        }
        const data = await res.json();
        return extractAndParse(data, marks);
    }

    function extractAndParse(data, marks) {
        // Pick out every text part and concatenate (some models split across parts)
        const parts = data?.candidates?.[0]?.content?.parts || [];
        const raw = parts.map(p => p.text || "").join("");
        const finishReason = data?.candidates?.[0]?.finishReason || "";
        return parseMarkingResponse(raw, marks, finishReason);
    }

    function parseMarkingResponse(raw, marks, finishReason) {
        const out = {
            assessment: null,        // filled below
            suggestedMark: null,
            feedback: "",
            missingPoints: [],
            raw,
            truncated: finishReason === "MAX_TOKENS"
        };

        // Pass 1 — strict JSON
        let payload = tryParseJson(raw);
        // Pass 2 — strip markdown fences
        if (!payload) {
            const stripped = raw.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
            payload = tryParseJson(stripped);
        }
        // Pass 3 — first {...} block (handles wrapping prose)
        if (!payload) {
            const m = raw.match(/\{[\s\S]*\}/);
            if (m) payload = tryParseJson(m[0]);
        }
        // Pass 4 — partial-JSON repair: append closing braces/quote/etc to a
        // truncated object until it parses (or we give up).
        if (!payload) {
            payload = tryRepairTruncated(raw);
        }

        if (payload && typeof payload === "object") {
            if (payload.assessment) out.assessment = String(payload.assessment).toLowerCase();
            if (typeof payload.suggestedMark === "number") {
                out.suggestedMark = Math.max(0, Math.min(marks, Math.round(payload.suggestedMark)));
            }
            if (payload.feedback) out.feedback = String(payload.feedback);
            if (Array.isArray(payload.missingPoints)) {
                out.missingPoints = payload.missingPoints.map(String).slice(0, 6);
            }
        }

        // Fallback regex extraction — if the JSON is so broken the repair
        // failed, scrape individual fields from the raw text. Better than
        // showing the user a default 0/X with garbled JSON in the feedback.
        if (out.assessment == null) {
            const m = raw.match(/"assessment"\s*:\s*"([^"]+)"/);
            if (m) out.assessment = m[1].toLowerCase();
        }
        if (out.suggestedMark == null) {
            const m = raw.match(/"suggestedMark"\s*:\s*(-?\d+(?:\.\d+)?)/);
            if (m) out.suggestedMark = Math.max(0, Math.min(marks, Math.round(parseFloat(m[1]))));
        }
        if (!out.feedback) {
            // Capture the feedback string even if its closing quote is missing.
            const m = raw.match(/"feedback"\s*:\s*"((?:[^"\\]|\\.)*)/);
            if (m) {
                try { out.feedback = JSON.parse('"' + m[1].replace(/"$/, "") + '"'); }
                catch (_) { out.feedback = m[1]; }
            }
        }

        // Final defaults
        if (out.suggestedMark == null) out.suggestedMark = 0;
        if (!["correct", "partial", "incorrect"].includes(out.assessment)) {
            out.assessment = out.suggestedMark >= marks * 0.85 ? "correct"
                : out.suggestedMark >= marks * 0.4 ? "partial"
                : "incorrect";
        }
        // If we *still* don't have any feedback, surface a polite note rather
        // than the raw JSON soup.
        if (!out.feedback) {
            out.feedback = out.truncated
                ? "AI response was cut off before feedback was written. Try asking for AI feedback again."
                : "AI didn't return readable feedback. Try the Re-mark button.";
        }
        return out;
    }

    function tryParseJson(s) {
        if (!s) return null;
        try { return JSON.parse(s); } catch (_) { return null; }
    }

    // Best-effort repair of a JSON object that got truncated mid-stream.
    function tryRepairTruncated(raw) {
        const start = raw.indexOf("{");
        if (start === -1) return null;
        let s = raw.slice(start);
        // If we end inside an open string, close it.
        const dq = (s.match(/"/g) || []).length;
        if (dq % 2 === 1) s += '"';
        // Trim a trailing colon, comma or open bracket that would invalidate.
        s = s.replace(/[,:\[]\s*$/, "");
        // Balance braces / brackets by appending what's missing.
        const opens = (s.match(/\{/g) || []).length;
        const closes = (s.match(/\}/g) || []).length;
        for (let i = 0; i < opens - closes; i++) s += "}";
        const obrk = (s.match(/\[/g) || []).length;
        const cbrk = (s.match(/\]/g) || []).length;
        for (let i = 0; i < obrk - cbrk; i++) s += "]";
        return tryParseJson(s);
    }

    function isAvailable(apiKey) { return !!apiKey; }

    window.AI = { markAnswer, testKey, isAvailable, getDiscoveredModel };
})();
