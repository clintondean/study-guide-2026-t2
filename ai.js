// AI marking with Google Gemini.
// Exposes window.AI.{ markAnswer, testKey, isAvailable }.
// Reads the API key from state.settings.geminiApiKey via the supplied getter
// (the app passes one to keep the module decoupled from app state).

(function () {
    "use strict";

    const ENDPOINT_BASE = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

    /**
     * Quick connectivity test.
     * @param {string} apiKey
     * @returns {Promise<boolean>} true if a basic generate call succeeds
     */
    async function testKey(apiKey) {
        if (!apiKey) return false;
        const body = {
            contents: [{ parts: [{ text: "Reply with just OK." }] }],
            generationConfig: { temperature: 0, maxOutputTokens: 10 }
        };
        const res = await fetch(`${ENDPOINT_BASE}?key=${encodeURIComponent(apiKey)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`Gemini ${res.status}: ${text.slice(0, 200) || res.statusText}`);
        }
        const data = await res.json();
        const txt = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        return /OK/i.test(txt);
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
     * @returns {Promise<{assessment, suggestedMark, feedback, missingPoints, raw}>}
     */
    async function markAnswer(opts) {
        const { apiKey } = opts;
        if (!apiKey) throw new Error("No Gemini API key. Add one in Settings.");
        const prompt = buildMarkingPrompt(opts);
        const body = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                temperature: 0.3,
                maxOutputTokens: 600
            }
        };
        const res = await fetch(`${ENDPOINT_BASE}?key=${encodeURIComponent(apiKey)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`Gemini ${res.status}: ${text.slice(0, 200) || res.statusText}`);
        }
        const data = await res.json();
        const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        return parseMarkingResponse(raw, opts.marks || 4);
    }

    function parseMarkingResponse(raw, marks) {
        // Try strict JSON first
        let payload = null;
        try { payload = JSON.parse(raw); }
        catch (_) {
            // Sometimes the model wraps in code fences. Strip.
            const stripped = raw.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
            try { payload = JSON.parse(stripped); }
            catch (_) {
                // Last resort: regex out the JSON-looking block
                const m = raw.match(/\{[\s\S]*\}/);
                if (m) {
                    try { payload = JSON.parse(m[0]); } catch (_) { /* give up */ }
                }
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
            // Couldn't parse — surface the raw text as feedback so it isn't lost.
            out.feedback = raw.slice(0, 600);
        }
        // Normalise assessment values
        if (!["correct", "partial", "incorrect"].includes(out.assessment)) {
            out.assessment = out.suggestedMark >= marks * 0.85 ? "correct"
                : out.suggestedMark >= marks * 0.4 ? "partial"
                : "incorrect";
        }
        return out;
    }

    function isAvailable(apiKey) { return !!apiKey; }

    window.AI = { markAnswer, testKey, isAvailable };
})();
