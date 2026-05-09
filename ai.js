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
        const body = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                temperature: 0.3,
                maxOutputTokens: 600
            }
        };
        const res = await fetch(`${ENDPOINT(model)}?key=${encodeURIComponent(apiKey)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            // 404 → the cached model has gone away. Wipe the cache and try once more.
            if (res.status === 404 && cachedModel) {
                cachedModel = null;
                return markAnswer(opts);
            }
            throw new Error(`Gemini ${res.status} (model ${model}): ${text.slice(0, 200) || res.statusText}`);
        }
        const data = await res.json();
        const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        return parseMarkingResponse(raw, opts.marks || 4);
    }

    function parseMarkingResponse(raw, marks) {
        let payload = null;
        try { payload = JSON.parse(raw); }
        catch (_) {
            const stripped = raw.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
            try { payload = JSON.parse(stripped); }
            catch (_) {
                const m = raw.match(/\{[\s\S]*\}/);
                if (m) { try { payload = JSON.parse(m[0]); } catch (_) {} }
            }
        }
        const out = {
            assessment: "partial",
            suggestedMark: 0,
            feedback: "",
            missingPoints: [],
            raw
        };
        if (payload && typeof payload === "object") {
            if (payload.assessment) out.assessment = String(payload.assessment).toLowerCase();
            if (typeof payload.suggestedMark === "number") {
                out.suggestedMark = Math.max(0, Math.min(marks, Math.round(payload.suggestedMark)));
            }
            if (payload.feedback) out.feedback = String(payload.feedback);
            if (Array.isArray(payload.missingPoints)) {
                out.missingPoints = payload.missingPoints.map(String).slice(0, 6);
            }
        } else {
            out.feedback = raw.slice(0, 600);
        }
        if (!["correct", "partial", "incorrect"].includes(out.assessment)) {
            out.assessment = out.suggestedMark >= marks * 0.85 ? "correct"
                : out.suggestedMark >= marks * 0.4 ? "partial"
                : "incorrect";
        }
        return out;
    }

    function isAvailable(apiKey) { return !!apiKey; }

    window.AI = { markAnswer, testKey, isAvailable, getDiscoveredModel };
})();
