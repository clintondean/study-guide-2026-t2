// Study Guide — single-page app shell, router, quiz engine, state.
// All data is read from window.SUBJECT_DATA which is populated by data/*.js.

(function () {
    "use strict";

    const STORAGE_KEY = "harper-studyguide-v1";
    const STATE_SUBJECTS = Object.keys(window.SUBJECT_DATA || {});
    const PRACTICE_EXAMS_PER_TOPIC = 10;
    const PRACTICE_QS_PER_EXAM = 20;
    const PRACTICE_MCQ = 14;
    const PRACTICE_SA = 5;
    const PRACTICE_LA = 1;
    const YEAR_LEVELS = [
        {
            id: "year-7",
            label: "Year 7",
            blurb: "Build your study list for Year 7.",
            subjects: [
                { id: "science" },
                { id: "maths-core" },
                { id: "geography-7" },
                { id: "music-7" }
            ]
        },
        {
            id: "year-9",
            label: "Year 9",
            blurb: "Choose the subjects you want to practise right now.",
            subjects: [
                { id: "commerce" },
                { id: "english" },
                { id: "geography" },
                { id: "maths" },
                { id: "science-9" }
            ]
        }
    ];
    const YEAR_BY_ID = YEAR_LEVELS.reduce((out, year) => {
        out[year.id] = year;
        return out;
    }, Object.create(null));
    // Handbook defaults loaded from:
    // - handbook/Stage-4-Half-Yearly-Exam-Notification-2026-FINAL.pdf
    // - handbook/Stage-5-Half-Yearly-Examination-Notification-Handbook-2026.pdf
    const EXAM_DAY_DEFAULTS = {
        "year-7": {
            "geography-7": { date: "2026-05-25", detail: "P1 & 2 · 70 mins + 5 mins reading" },
            "maths-core": { date: "2026-05-26", detail: "P1 & 2 · 70 mins + 5 mins reading" },
            "science": { date: "2026-05-27", detail: "P1 & 2 · 70 mins + 5 mins reading" },
            "music-7": { date: "2026-05-28", detail: "P2 · 50 mins + 10 mins set-up" }
        },
        "year-9": {
            "geography": { date: "2026-05-25", detail: "P3 & 4 · 90 mins + 5 mins reading" },
            "maths": { date: "2026-05-26", detail: "P3 & 4 · 90 mins + 10 mins reading" },
            "science-9": { date: "2026-05-27", detail: "P3 & 4 · 90 mins + 5 mins reading" },
            "commerce": { date: "2026-05-28", detail: "P3 & 4 · 90 mins + 5 mins reading" }
        }
    };
    const VISUAL_THEMES = [
        {
            id: "sunset",
            emoji: "🌅",
            label: "Sunset",
            blurb: "Warm peach and honey tones.",
            swatches: ["#e07a3a", "#ffd9b3", "#fff5ec"]
        },
        {
            id: "ocean",
            emoji: "🌊",
            label: "Ocean",
            blurb: "Cool blue and sea-glass highlights.",
            swatches: ["#2f8fce", "#bfe7ff", "#e9f7ff"]
        },
        {
            id: "meadow",
            emoji: "🌿",
            label: "Meadow",
            blurb: "Soft mint and grassy greens.",
            swatches: ["#5f9d63", "#cfeccf", "#f2fbf0"]
        },
        {
            id: "berry",
            emoji: "🍓",
            label: "Berry",
            blurb: "Rosy pink with jammy accents.",
            swatches: ["#c45486", "#ffd1e6", "#fff2f8"]
        },
        {
            id: "twilight",
            emoji: "🌙",
            label: "Twilight",
            blurb: "Indigo glow with lilac contrast.",
            swatches: ["#6d5bd0", "#d8d1ff", "#f3f1ff"]
        }
    ];

    /* ---------- Practice exam generator (deterministic) ---------- */

    function _mulberry32(a) {
        return function () {
            let t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }
    function _hashStr(s) {
        let h = 2166136261 >>> 0;
        for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
        return h >>> 0;
    }
    function _shuffle(arr, rng) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    function _pickN(pool, n, rng) {
        if (!pool.length || n <= 0) return [];
        const shuffled = _shuffle(pool, rng);
        const out = shuffled.slice(0, Math.min(n, shuffled.length));
        // Pad with random duplicates if pool was too small (acceptable for practice)
        while (out.length < n) {
            out.push(pool[Math.floor(rng() * pool.length)]);
        }
        return out;
    }

    function generatePracticeExams() {
        STATE_SUBJECTS.forEach(subjectId => {
            const subj = window.SUBJECT_DATA[subjectId];
            if (!subj || !Array.isArray(subj.practiceTopics)) return;
            const mcqsByTopic = groupBy(subj.mcqs || [], q => q.topic);
            const shortByTopic = groupBy(subj.short || [], q => q.topic);
            const longByTopic = groupBy(subj.long || [], q => q.topic);
            const exams = [];
            for (const t of subj.practiceTopics) {
                const mcqPool = (t.sourceTopics || []).flatMap(id => (mcqsByTopic[id] || []).map(q => q.id));
                const shortPool = (t.sourceTopics || []).flatMap(id => (shortByTopic[id] || []).map(q => q.id));
                const longPool = (t.sourceTopics || []).flatMap(id => (longByTopic[id] || []).map(q => q.id));
                // bestScores/examProgress are keyed by examId, so any count increase
                // must be append-only: keep existing 1..N ids stable and add new
                // higher-numbered sets after them.
                const topicExamCount = Math.max(1, Math.floor(t.setCount || PRACTICE_EXAMS_PER_TOPIC));
                t.examIds = [];
                for (let n = 1; n <= topicExamCount; n++) {
                    const examId = `exam-${t.id}-${n}`;
                    const rng = _mulberry32(_hashStr(examId));
                    const long = _pickN(longPool, PRACTICE_LA, rng);
                    const short = _pickN(shortPool, PRACTICE_SA, rng);
                    const mcqs = _pickN(mcqPool, PRACTICE_QS_PER_EXAM - long.length - short.length, rng);
                    exams.push({
                        id: examId,
                        topicId: t.id,
                        topicName: t.name,
                        name: `${t.name} — Set ${String(n).padStart(2, "0")}`,
                        focus: t.outcomes || "",
                        questionIds: mcqs.concat(short, long)
                    });
                    t.examIds.push(examId);
                }
            }
            subj.practiceExams = exams;
        });
    }

    function groupBy(arr, keyFn) {
        const out = {};
        for (const item of arr) {
            const k = keyFn(item);
            (out[k] = out[k] || []).push(item);
        }
        return out;
    }

    /* ---------- State ---------- */

    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return defaultState();
            const parsed = JSON.parse(raw);
            return migrateState(Object.assign(defaultState(), parsed));
        } catch (_) {
            return defaultState();
        }
    }

    function defaultState() {
        const subjects = {};
        STATE_SUBJECTS.forEach(s => {
            subjects[s] = {
                attempts: {},        // questionId -> { answer, correct, attempts }
                quizSessions: [],    // [{ mode, score, total, date, topicId }]
                bestScores: {},      // mode key -> best ratio
                // Per-exam saved attempt: full answer state (so re-launch can preload).
                // examProgress[examId] = { answers, currentIndex, finished, completedAt, timer? }
                examProgress: {}
            };
        });
        return {
            subjects,
            settings: {
                reducedMotion: false,
                customName: "",           // shown in greetings/headers after onboarding
                geminiApiKey: "",         // empty = AI features disabled
                selectedYear: "",
                selectedSubjects: [],
                themePreference: "cats",
                visualTheme: "sunset",
                examSchedule: {}
            },
            stats: { totalAnswered: 0, totalCorrect: 0, currentStreak: 0, bestStreak: 0 },
            clan: {
                cats: [],
                claimTickets: 0,
                perfectExams: {}
            },
            animals: {
                pets: [],
                claimTickets: 0,
                perfectExams: {},
                parkSelection: [],
                sparklePotions: 0
            },
            hybrids: {
                cats: [],
                animals: []
            },
            breaks: {
                lastBreakStartISO: null,
                catrisHighScore: 0,
                invadersHighScore: 0,
                catanoidHighScore: 0,
                dangerNoodleHighScore: 0,
                catManHighScore: 0,
                meowterbikeBestTimeMs: null,
                meowterbikeBestTimes: {
                    "50cc": null,
                    "100cc": null,
                    "150cc": null
                }
            }
        };
    }

    // Shallow-merge any missing keys from defaults into loaded state so older
    // saved JSON gets the new fields without erasing existing data.
    function migrateState(s) {
        const def = defaultState();
        if (!s.settings) s.settings = {};
        for (const k of Object.keys(def.settings)) {
            if (s.settings[k] === undefined) s.settings[k] = def.settings[k];
        }
        s.settings.themePreference = normalizeThemePreference(s.settings.themePreference);
        s.settings.visualTheme = normalizeVisualTheme(s.settings.visualTheme);
        s.settings.examSchedule = normalizeExamSchedule(s.settings.examSchedule);
        if (!s.subjects) s.subjects = def.subjects;
        for (const subjId of STATE_SUBJECTS) {
            if (!s.subjects[subjId]) s.subjects[subjId] = def.subjects[subjId];
            const sub = s.subjects[subjId];
            if (!sub.examProgress) sub.examProgress = {};
            if (!sub.attempts) sub.attempts = {};
            if (!sub.quizSessions) sub.quizSessions = [];
            if (!sub.bestScores) sub.bestScores = {};
        }
        s.settings.selectedYear = normalizeYearId(s.settings.selectedYear);
        s.settings.selectedSubjects = normalizeSelectedSubjects(s.settings.selectedYear, s.settings.selectedSubjects);
        if (!s.clan) s.clan = def.clan;
        if (!s.animals) s.animals = def.animals;
        if (!Array.isArray(s.animals.pets)) s.animals.pets = [];
        if (!s.animals.perfectExams) s.animals.perfectExams = {};
        if (!Array.isArray(s.animals.parkSelection)) s.animals.parkSelection = [];
        if (typeof s.animals.sparklePotions !== "number") s.animals.sparklePotions = 0;
        if (!s.hybrids) s.hybrids = def.hybrids;
        if (!Array.isArray(s.hybrids.cats)) s.hybrids.cats = [];
        if (!Array.isArray(s.hybrids.animals)) s.hybrids.animals = [];
        if (!s.breaks) s.breaks = def.breaks;
        for (const k of Object.keys(def.breaks)) {
            if (s.breaks[k] === undefined) s.breaks[k] = def.breaks[k];
        }
        if (!s.breaks.meowterbikeBestTimes || typeof s.breaks.meowterbikeBestTimes !== "object") {
            s.breaks.meowterbikeBestTimes = Object.assign({}, def.breaks.meowterbikeBestTimes);
        }
        for (const classId of Object.keys(def.breaks.meowterbikeBestTimes)) {
            if (s.breaks.meowterbikeBestTimes[classId] === undefined) s.breaks.meowterbikeBestTimes[classId] = def.breaks.meowterbikeBestTimes[classId];
        }
        if (typeof s.breaks.meowterbikeBestTimeMs === "number" && s.breaks.meowterbikeBestTimeMs > 0 && !s.breaks.meowterbikeBestTimes["50cc"]) {
            s.breaks.meowterbikeBestTimes["50cc"] = s.breaks.meowterbikeBestTimeMs;
        }
        if (!s.stats) s.stats = def.stats;
        return s;
    }

    const BREAK_COOLDOWN_MS = 30 * 60 * 1000; // 30 minutes between breaks
    const DEV_BREAK_RULES_FEATURE = "break-rules-bypass";
    const DEV_MODE_ENABLED = readDevModeFlag();
    let devBreakBypassActive = false;

    function readDevModeFlag() {
        try {
            return new URLSearchParams(window.location.search).get("devmode") === "true";
        } catch (_) {
            return false;
        }
    }

    function hasDevFeature(feature) {
        return DEV_MODE_ENABLED && feature === DEV_BREAK_RULES_FEATURE;
    }

    function isBreakRulesBypassed() {
        return hasDevFeature(DEV_BREAK_RULES_FEATURE) && devBreakBypassActive;
    }

    function enableBreakRulesBypass() {
        devBreakBypassActive = true;
        if (window.BreakSession && window.BreakSession.isActive()) window.BreakSession.end();
    }

    function clearBreakRulesBypass() {
        devBreakBypassActive = false;
    }

    window.DevMode = {
        isEnabled() {
            return DEV_MODE_ENABLED;
        },
        hasFeature(feature) {
            return hasDevFeature(feature);
        }
    };

    function breakCooldownRemaining() {
        const last = state.breaks && state.breaks.lastBreakStartISO;
        if (!last) return 0;
        const elapsed = Date.now() - new Date(last).getTime();
        return Math.max(0, BREAK_COOLDOWN_MS - elapsed);
    }

    function recordBreakStart() {
        state.breaks = state.breaks || {};
        state.breaks.lastBreakStartISO = new Date().toISOString();
        saveState();
    }

    function startBreakSession() {
        if (window.BreakSession.isActive()) return;
        clearBreakRulesBypass();
        recordBreakStart();
        window.BreakSession.start();
    }

    function saveState() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
        catch (_) { /* quota or private mode — non-fatal */ }
    }

    let state = loadState();
    let activeThemeAnnouncement = null;
    let lastRouteKey = null;

    /* ---------- Helpers ---------- */

    const $ = (sel, root) => (root || document).querySelector(sel);
    const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

    function escapeHtml(s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[c]));
    }

    // Render newlines as <br> for question prompts that contain (a) (b) (c) lines
    function renderText(s) {
        return escapeHtml(s).replace(/\n/g, "<br>");
    }

    function normalizeRarity(rarity) {
        const value = String(rarity || "").toLowerCase();
        if (value === "ultra rare") return "ultra-rare";
        return value || "common";
    }

    function rarityLabel(rarity) {
        const value = normalizeRarity(rarity);
        if (value === "ultra-rare") return "Ultra-rare";
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    function renderRarityBadge(rarity) {
        const value = normalizeRarity(rarity);
        return `<span class="rarity-badge rarity-${value}">${escapeHtml(rarityLabel(value))}</span>`;
    }

    function renderQuestionDiagram(diagram) {
        if (!diagram || !diagram.svg) return "";
        const alt = diagram.alt || diagram.caption || "Question diagram";
        return `
            <figure class="question-diagram">
                <div class="question-diagram-art" role="img" aria-label="${escapeHtml(alt)}">${diagram.svg}</div>
                ${(diagram.caption || diagram.alt) ? `<figcaption>${escapeHtml(diagram.caption || diagram.alt)}</figcaption>` : ""}
            </figure>
        `;
    }

    function questionTextForAI(q) {
        if (!q || !q.diagram || !q.diagram.alt) return q ? q.q : "";
        return `${q.q}\n\nDiagram provided: ${q.diagram.alt}`;
    }

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function pct(num, denom) {
        if (!denom) return 0;
        return Math.round((num / denom) * 100);
    }

    function normalizeYearId(yearId) {
        return YEAR_BY_ID[yearId] ? yearId : "";
    }

    function yearConfig(yearId) {
        return YEAR_BY_ID[normalizeYearId(yearId)] || null;
    }

    function yearLabel(yearId) {
        const year = yearConfig(yearId);
        return year ? year.label : "";
    }

    function subjectOptionsForYear(yearId) {
        const year = yearConfig(yearId);
        return year ? year.subjects.slice() : [];
    }

    function defaultSelectedSubjectsForYear(yearId) {
        return subjectOptionsForYear(yearId).map(subject => subject.id);
    }

    function normalizeSelectedSubjectId(yearId, subjectId) {
        if (yearId === "year-7" && subjectId === "maths") return "maths-core";
        return subjectId;
    }

    function normalizeSelectedSubjects(yearId, subjectIds) {
        const valid = new Set(defaultSelectedSubjectsForYear(yearId));
        const seen = new Set();
        return (Array.isArray(subjectIds) ? subjectIds : []).map(id => normalizeSelectedSubjectId(yearId, id)).filter(id => {
            if (!valid.has(id) || seen.has(id)) return false;
            seen.add(id);
            return true;
        });
    }

    function isMathsSubject(subjectId) {
        return subjectId === "maths" || subjectId === "maths-core";
    }

    function currentSelectedYear() {
        return normalizeYearId(state.settings && state.settings.selectedYear);
    }

    function currentSelectedSubjects() {
        return normalizeSelectedSubjects(currentSelectedYear(), state.settings && state.settings.selectedSubjects);
    }

    function sanitizeExamDayEntry(entry) {
        entry = entry || {};
        return {
            date: typeof entry.date === "string" ? entry.date.trim() : "",
            detail: typeof entry.detail === "string" ? entry.detail.trim() : ""
        };
    }

    function normalizeExamSchedule(schedule) {
        const out = {};
        if (!schedule || typeof schedule !== "object") return out;
        Object.keys(schedule).forEach(yearId => {
            const year = normalizeYearId(yearId);
            if (!year) return;
            const yearEntries = schedule[yearId];
            if (!yearEntries || typeof yearEntries !== "object") return;
            const validSubjects = new Set(defaultSelectedSubjectsForYear(year));
            const normalizedYear = {};
            Object.keys(yearEntries).forEach(subjectId => {
                const normalizedSubjectId = normalizeSelectedSubjectId(year, subjectId);
                if (!validSubjects.has(normalizedSubjectId)) return;
                normalizedYear[normalizedSubjectId] = sanitizeExamDayEntry(yearEntries[subjectId]);
            });
            if (Object.keys(normalizedYear).length) out[year] = normalizedYear;
        });
        return out;
    }

    function defaultExamScheduleForYear(yearId) {
        const year = normalizeYearId(yearId);
        const defs = EXAM_DAY_DEFAULTS[year] || {};
        const out = {};
        Object.keys(defs).forEach(subjectId => {
            out[subjectId] = sanitizeExamDayEntry(defs[subjectId]);
        });
        return out;
    }

    function examScheduleForYear(yearId) {
        const year = normalizeYearId(yearId);
        if (!year) return {};
        const merged = defaultExamScheduleForYear(year);
        const overrides = normalizeExamSchedule(state.settings && state.settings.examSchedule)[year] || {};
        Object.keys(overrides).forEach(subjectId => {
            merged[subjectId] = sanitizeExamDayEntry(overrides[subjectId]);
        });
        return merged;
    }

    function examDayEventsForSubjects(yearId, subjectIds) {
        const schedule = examScheduleForYear(yearId);
        return normalizeSelectedSubjects(yearId, subjectIds).map(subjectId => {
            const entry = sanitizeExamDayEntry(schedule[subjectId]);
            if (!entry.date) return null;
            const subj = window.SUBJECT_DATA[subjectId];
            return {
                subjectId,
                subjectName: subj ? subj.name : subjectId,
                date: new Date(entry.date + "T12:00:00"),
                dateKey: entry.date,
                monthKey: entry.date.slice(0, 7),
                detail: entry.detail
            };
        }).filter(Boolean);
    }

    function examChipLabel(event) {
        if (!event || !event.subjectName) return "Exam";
        if (event.subjectId === "maths-core") return "Maths";
        if (event.subjectId === "science-9") return "Science";
        return event.subjectName;
    }

    function formatExamDayDate(dateKey) {
        if (!dateKey) return "";
        const date = new Date(dateKey + "T12:00:00");
        if (Number.isNaN(date.getTime())) return dateKey;
        return date.toLocaleDateString(undefined, {
            weekday: "short",
            day: "numeric",
            month: "short"
        });
    }

    function updateExamScheduleEntries(yearId, entriesBySubject) {
        const year = normalizeYearId(yearId);
        if (!year) return;
        const defaults = defaultExamScheduleForYear(year);
        const nextSchedule = normalizeExamSchedule(state.settings && state.settings.examSchedule);
        const currentOverrides = Object.assign({}, nextSchedule[year] || {});
        normalizeSelectedSubjects(year, Object.keys(entriesBySubject || {})).forEach(subjectId => {
            const nextEntry = sanitizeExamDayEntry(entriesBySubject[subjectId]);
            const defaultEntry = sanitizeExamDayEntry(defaults[subjectId]);
            if (!nextEntry.date && !defaultEntry.date && !nextEntry.detail && !defaultEntry.detail) {
                delete currentOverrides[subjectId];
                return;
            }
            if (!nextEntry.date && (defaultEntry.date || defaultEntry.detail)) {
                currentOverrides[subjectId] = nextEntry;
                return;
            }
            if (nextEntry.date === defaultEntry.date && nextEntry.detail === defaultEntry.detail) {
                delete currentOverrides[subjectId];
                return;
            }
            if (nextEntry.date || nextEntry.detail) currentOverrides[subjectId] = nextEntry;
            else delete currentOverrides[subjectId];
        });
        if (Object.keys(currentOverrides).length) nextSchedule[year] = currentOverrides;
        else delete nextSchedule[year];
        state.settings.examSchedule = nextSchedule;
        saveState();
    }

    function clearExamScheduleOverrides(yearId, subjectIds) {
        const year = normalizeYearId(yearId);
        if (!year) return;
        const nextSchedule = normalizeExamSchedule(state.settings && state.settings.examSchedule);
        const currentOverrides = Object.assign({}, nextSchedule[year] || {});
        normalizeSelectedSubjects(year, subjectIds).forEach(subjectId => {
            delete currentOverrides[subjectId];
        });
        if (Object.keys(currentOverrides).length) nextSchedule[year] = currentOverrides;
        else delete nextSchedule[year];
        state.settings.examSchedule = nextSchedule;
        saveState();
    }

    function renderProgressExamPlanner(yearId, subjectIds) {
        const year = normalizeYearId(yearId);
        if (!year) return "";
        const subjects = normalizeSelectedSubjects(year, subjectIds);
        const schedule = examScheduleForYear(year);
        const upcoming = examDayEventsForSubjects(year, subjects).sort((a, b) => a.date.getTime() - b.date.getTime());
        return `
            <section class="progress-calendar-card progress-calendar-editor-card">
                <div class="progress-calendar-exam-tools">
                    <div class="progress-calendar-upcoming">
                        <h2>Exam day planner</h2>
                        <p>Update the exam days shown on this calendar. This only changes your saved exam schedule, not quiz progress.</p>
                        ${upcoming.length ? `
                            <ul class="progress-calendar-exam-list">
                                ${upcoming.map(event => `
                                    <li class="progress-calendar-exam-item">
                                        <strong>${escapeHtml(event.subjectName)}</strong>
                                        <span>${escapeHtml(formatExamDayDate(event.dateKey))}${event.detail ? ` · ${escapeHtml(event.detail)}` : ""}</span>
                                    </li>
                                `).join("")}
                            </ul>
                        ` : `
                            <p class="muted">No exam days saved for these subjects yet.</p>
                        `}
                    </div>
                    <details class="progress-calendar-editor">
                        <summary>Edit exam days</summary>
                        <p class="settings-help">Blank dates stay hidden from the calendar, and handbook defaults can be restored at any time.</p>
                        <div class="exam-day-grid">
                            ${subjects.map(subjectId => {
                                const subj = window.SUBJECT_DATA[subjectId];
                                const entry = sanitizeExamDayEntry(schedule[subjectId]);
                                return `
                                    <div class="exam-day-row">
                                        <div class="exam-day-subject">
                                            <strong>${subj ? escapeHtml(subj.name) : escapeHtml(subjectId)}</strong>
                                            <span>${entry.detail ? escapeHtml(entry.detail) : "No exam day set yet."}</span>
                                        </div>
                                        <label class="settings-field exam-day-field">
                                            <span>Date</span>
                                            <input type="date" data-progress-exam-date="${subjectId}" value="${escapeHtml(entry.date)}">
                                        </label>
                                        <label class="settings-field exam-day-field exam-day-detail-field">
                                            <span>Time / notes</span>
                                            <input type="text" data-progress-exam-detail="${subjectId}" value="${escapeHtml(entry.detail)}" placeholder="e.g. P3 & 4 · 90 mins">
                                        </label>
                                    </div>
                                `;
                            }).join("")}
                        </div>
                        <div class="settings-actions">
                            <button type="button" class="primary-btn" id="progress-save-exams">Save exam days</button>
                            <button type="button" class="ghost-btn" id="progress-reset-exams">Reset selected subjects</button>
                        </div>
                    </details>
                </div>
            </section>
        `;
    }

    function savedCustomName() {
        return ((state.settings && state.settings.customName) || "").trim().slice(0, 24);
    }

    function hasStudyProfile() {
        return !!currentSelectedYear() && currentSelectedSubjects().length > 0;
    }

    function normalizeThemePreference(themeId) {
        return themeId === "animals" ? "animals" : "cats";
    }

    function normalizeVisualTheme(themeId) {
        return VISUAL_THEMES.some(theme => theme.id === themeId) ? themeId : "sunset";
    }

    function currentThemeId() {
        return normalizeThemePreference(state.settings && state.settings.themePreference);
    }

    function currentVisualTheme() {
        return normalizeVisualTheme(state.settings && state.settings.visualTheme);
    }

    function visualThemeMeta(themeId) {
        return VISUAL_THEMES.find(theme => theme.id === normalizeVisualTheme(themeId)) || VISUAL_THEMES[0];
    }

    function applyVisualTheme() {
        document.documentElement.setAttribute("data-visual-theme", currentVisualTheme());
    }

    function renderVisualThemeSelector(activeId) {
        return `
            <div class="theme-switcher settings-theme-switcher settings-visual-theme-switcher" role="radiogroup" aria-label="Choose colour theme">
                ${VISUAL_THEMES.map(theme => `
                    <button type="button" class="theme-switch-btn ${theme.id === activeId ? "is-active" : ""}" data-visual-theme="${theme.id}" aria-pressed="${theme.id === activeId ? "true" : "false"}">
                        <span class="theme-switch-emoji">${theme.emoji}</span>
                        <span class="theme-switch-copy">
                            <strong>${theme.label}</strong>
                            <span>${theme.blurb}</span>
                            <span class="theme-preview-palette" aria-hidden="true">
                                ${theme.swatches.map(color => `<span class="theme-preview-dot" style="--swatch:${color}"></span>`).join("")}
                            </span>
                        </span>
                    </button>
                `).join("")}
            </div>
        `;
    }

    function themeApi(themeId) {
        return normalizeThemePreference(themeId) === "animals" ? window.Animals : window.Cats;
    }

    function activeMascotApi() {
        return themeApi(currentThemeId());
    }

    function mascotSvgForTheme(themeId, expression, theme) {
        const api = themeApi(themeId);
        const pickedTheme = theme || (api.pickTheme ? api.pickTheme() : null);
        return api.svg(expression, pickedTheme);
    }

    function mascotSvg(expression, theme) {
        return mascotSvgForTheme(currentThemeId(), expression, theme);
    }

    function mascotPopIn(opts) {
        return activeMascotApi().popIn(opts || {});
    }

    function mascotCelebrate(scoreRatio) {
        return activeMascotApi().celebrate(scoreRatio);
    }

    function clearThemeAnnouncement(immediate) {
        if (!activeThemeAnnouncement || !activeThemeAnnouncement.dismiss) return;
        const announcement = activeThemeAnnouncement;
        activeThemeAnnouncement = null;
        announcement.dismiss(!!immediate);
    }

    function announceThemeChange(message) {
        let controller = null;
        clearThemeAnnouncement(true);
        controller = mascotPopIn({
            expression: "proud",
            message,
            duration: 2200,
            onDone: () => {
                if (activeThemeAnnouncement === controller) activeThemeAnnouncement = null;
            }
        }) || null;
        activeThemeAnnouncement = controller;
    }

    function activeThemeConfig() {
        return currentThemeId() === "animals"
            ? {
                id: "animals",
                label: "Animals",
                ticketLabel: "Pet Ticket",
                collectionLabel: "Pet Haven",
                collectionActionLabel: "Claim pet",
                itemSingular: "pet",
                itemPlural: "pets",
                detailRoute: "pet",
                emptyTitle: "Your pet haven is waiting!",
                emptySummary: "Score 100% on any practice set or mock exam to earn a 🎟️ Pet Ticket. Spend the ticket to choose a new pet for your haven.",
                heading: `${customName()}'s Pet Haven`,
                progressLabel: "pets collected",
                parkCta: "🌿 Visit the Meadow",
                parkSub: "(take up to 5 pets)",
                parkTitle: "🌿 Visit the Meadow",
                parkLead: "Pick up to 5 pets to take with you.",
                parkGo: "Off to the Meadow! 🐾",
                claimTitle: "🎟️ Choose your new pet!",
                claimIntro: "Three adorable pets wandered into your haven. Pick one - the others will scamper off for now.",
                claimButton: name => `I choose you, ${name}!`,
                claimWelcome: name => `Welcome to the haven, ${name}!`,
                claimCelebrate: "Your pet haven grows!",
                noTickets: "No tickets yet! Score 100% on any quiz to earn one.",
                allCollected: `You've collected every pet! Legendary work, ${customName()}.`,
                progressCta: "🐾 My Pets"
            }
            : {
                id: "cats",
                label: "Cats",
                ticketLabel: "Cat Ticket",
                collectionLabel: "Cat Clan",
                collectionActionLabel: "Claim cat",
                itemSingular: "cat",
                itemPlural: "cats",
                detailRoute: "cat",
                emptyTitle: "Your cat clan is waiting!",
                emptySummary: "Score 100% on any practice set or mock exam to earn a 🎟️ Cat Ticket. Spend the ticket to choose a new cat for your clan.",
                heading: `${customName()}'s Cat Clan`,
                progressLabel: "cats collected",
                parkCta: "🌿 Visit the Park",
                parkSub: "(take up to 5 cats)",
                parkTitle: "🌿 Visit the Park",
                parkLead: "Pick up to 5 cats to take with you.",
                parkGo: "Off to the Park! 🐾",
                claimTitle: "🎟️ Choose your new cat!",
                claimIntro: "Three cats wandered into your clan. Pick one - the others will scamper off.",
                claimButton: name => `I choose you, ${name}!`,
                claimWelcome: name => `Welcome to the clan, ${name}!`,
                claimCelebrate: "Your clan grows!",
                noTickets: "No tickets yet! Score 100% on any quiz to earn one.",
                allCollected: `You've collected every breed! Legendary work, ${customName()}.`,
                progressCta: "🐾 My Pets"
            };
    }

    function animalsState() {
        if (!state.animals) state.animals = { pets: [], claimTickets: 0, perfectExams: {}, parkSelection: [], sparklePotions: 0 };
        if (!Array.isArray(state.animals.pets)) state.animals.pets = [];
        if (!state.animals.perfectExams) state.animals.perfectExams = {};
        if (!Array.isArray(state.animals.parkSelection)) state.animals.parkSelection = [];
        if (typeof state.animals.sparklePotions !== "number") state.animals.sparklePotions = 0;
        return state.animals;
    }

    function hybridState() {
        if (!state.hybrids) state.hybrids = { cats: [], animals: [] };
        if (!Array.isArray(state.hybrids.cats)) state.hybrids.cats = [];
        if (!Array.isArray(state.hybrids.animals)) state.hybrids.animals = [];
        return state.hybrids;
    }

    function catHybridEntries() {
        return hybridState().cats;
    }

    function animalHybridEntries() {
        return hybridState().animals;
    }

    function totalCatCompanions() {
        return (clanState().cats || []).length + catHybridEntries().length;
    }

    function totalAnimalCompanions() {
        return (animalsState().pets || []).length + animalHybridEntries().length;
    }

    function sparklePotionCount() {
        return (animalsState().sparklePotions || 0);
    }

    function catEntryId(entry) {
        return entry ? (entry.hybridId || entry.breedId) : "";
    }

    function animalEntryId(entry) {
        return entry ? (entry.hybridId || entry.petId) : "";
    }

    function findCatHybridEntry(hybridId) {
        return catHybridEntries().find(entry => entry.hybridId === hybridId) || null;
    }

    function findAnimalHybridEntry(hybridId) {
        return animalHybridEntries().find(entry => entry.hybridId === hybridId) || null;
    }

    function findOwnedCatEntry(id) {
        return clanState().cats.find(entry => entry.breedId === id) || findCatHybridEntry(id);
    }

    function findOwnedAnimalEntry(id) {
        return animalsState().pets.find(entry => entry.petId === id) || findAnimalHybridEntry(id);
    }

    function catCompanionEntries() {
        return (clanState().cats || []).concat(catHybridEntries());
    }

    function animalCompanionEntries() {
        return (animalsState().pets || []).concat(animalHybridEntries());
    }

    function catSpecFor(id) {
        const hybridEntry = findCatHybridEntry(id);
        if (hybridEntry) return window.Hybrids.buildCatSpec(hybridEntry.parentIds[0], hybridEntry.parentIds[1]);
        return window.Clan.findBreed(id);
    }

    function animalSpecFor(id) {
        const hybridEntry = findAnimalHybridEntry(id);
        if (hybridEntry) return window.Hybrids.buildAnimalSpec(hybridEntry.parentIds[0], hybridEntry.parentIds[1], { sparkle: !!hybridEntry.sparkle });
        return window.Animals.findPet(id);
    }

    function renderCatArt(id, expression) {
        const hybridEntry = findCatHybridEntry(id);
        if (hybridEntry) return window.Hybrids.renderCatHybrid(window.Hybrids.buildCatSpec(hybridEntry.parentIds[0], hybridEntry.parentIds[1]), expression);
        const breed = window.Clan.findBreed(id);
        return breed ? window.Cats.breedSvg(breed.appearance, expression) : "";
    }

    function renderAnimalArt(id, expression) {
        const hybridEntry = findAnimalHybridEntry(id);
        if (hybridEntry) return window.Hybrids.renderAnimalHybrid(window.Hybrids.buildAnimalSpec(hybridEntry.parentIds[0], hybridEntry.parentIds[1], { sparkle: !!hybridEntry.sparkle }), expression);
        const pet = window.Animals.findPet(id);
        return pet ? window.Animals.petSvg(pet, expression) : "";
    }

    function catReactionPhraseFor(id, kind) {
        const hybridEntry = findCatHybridEntry(id);
        if (hybridEntry) {
            const spec = window.Hybrids.buildCatSpec(hybridEntry.parentIds[0], hybridEntry.parentIds[1]);
            return window.Hybrids.reactionPhrase(spec, kind);
        }
        return window.Clan.reactionPhrase(id, kind);
    }

    function animalReactionPhraseFor(id, kind) {
        const hybridEntry = findAnimalHybridEntry(id);
        if (hybridEntry) {
            const spec = window.Hybrids.buildAnimalSpec(hybridEntry.parentIds[0], hybridEntry.parentIds[1], { sparkle: !!hybridEntry.sparkle });
            return window.Hybrids.reactionPhrase(spec, kind);
        }
        return window.Animals.reactionPhrase(id, kind);
    }

    function renderAnimalVariantBadges(spec) {
        if (!spec) return "";
        return `${spec.hybrid ? ` <span class="hybrid-label">Hybrid</span>` : ""}${spec.sparkle ? ` <span class="sparkle-label">Sparkle</span>` : ""}`;
    }

    function ensureCatHybrid(idA, idB) {
        const hybridId = window.Hybrids.catId(idA, idB);
        const existing = findCatHybridEntry(hybridId);
        if (existing) return { entry: existing, created: false };
        const spec = window.Hybrids.buildCatSpec(idA, idB);
        if (!spec) return null;
        const now = new Date().toISOString();
        const entry = {
            hybridId,
            parentIds: spec.parentIds.slice(),
            name: spec.defaultName,
            dateISO: now,
            lastInteractedISO: now,
            happiness: 82
        };
        catHybridEntries().push(entry);
        saveState();
        return { entry, created: true };
    }

    function ensureAnimalHybrid(idA, idB, opts) {
        opts = opts || {};
        const sparkle = !!opts.sparkle;
        const progress = animalsState();
        const hybridId = window.Hybrids.animalId(idA, idB, { sparkle });
        const existing = findAnimalHybridEntry(hybridId);
        if (existing) return { entry: existing, created: false };
        if (sparkle && sparklePotionCount() <= 0) return null;
        const spec = window.Hybrids.buildAnimalSpec(idA, idB, { sparkle });
        if (!spec) return null;
        const now = new Date().toISOString();
        const entry = {
            hybridId,
            parentIds: spec.parentIds.slice(),
            name: spec.defaultName,
            dateISO: now,
            lastInteractedISO: now,
            happiness: 82,
            sparkle
        };
        animalHybridEntries().push(entry);
        if (sparkle) progress.sparklePotions = Math.max(0, (progress.sparklePotions || 0) - 1);
        saveState();
        return { entry, created: true };
    }

    function collectionStateForTheme(themeId) {
        return normalizeThemePreference(themeId) === "animals" ? animalsState() : clanState();
    }

    function totalPendingTickets() {
        return (clanState().claimTickets || 0) + (animalsState().claimTickets || 0);
    }

    function setThemePreference(themeId) {
        const nextTheme = normalizeThemePreference(themeId);
        if (state.settings.themePreference === nextTheme) return false;
        state.settings.themePreference = nextTheme;
        saveState();
        applyFooterCaption();
        return true;
    }

    function setVisualTheme(themeId) {
        const nextTheme = normalizeVisualTheme(themeId);
        if (currentVisualTheme() === nextTheme) return false;
        state.settings.visualTheme = nextTheme;
        saveState();
        applyVisualTheme();
        return true;
    }

    function resolveProfileDraft(draft) {
        const explicitYear = draft && draft.yearId;
        const savedYear = currentSelectedYear();
        const yearId = normalizeYearId(explicitYear) || savedYear || "year-9";
        const hasExplicitSubjects = !!(draft && Array.isArray(draft.selectedSubjects));
        const customName = draft && typeof draft.customName === "string"
            ? draft.customName
            : savedCustomName();
        const themePreference = normalizeThemePreference(draft && draft.themePreference ? draft.themePreference : currentThemeId());
        const selectedSubjects = normalizeSelectedSubjects(
            yearId,
            hasExplicitSubjects
                ? draft.selectedSubjects
                : (savedYear ? currentSelectedSubjects() : defaultSelectedSubjectsForYear(yearId))
        );
        return { yearId, selectedSubjects, customName, themePreference };
    }

    function subjectEntryForYear(yearId, subjectId) {
        const option = subjectOptionsForYear(yearId).find(subject => subject.id === subjectId);
        if (!option) return null;
        const data = window.SUBJECT_DATA[subjectId];
        const status = option.status || (data ? "live" : "coming-soon");
        return {
            id: subjectId,
            yearId,
            yearLabel: yearLabel(yearId),
            status,
            data: status === "live" ? data : null,
            name: option.name || (data && data.name) || subjectId,
            tagline: option.tagline || (data && data.tagline) || "",
            icon: option.icon || (data && data.icon) || "📚",
            color: option.color || (data && data.color) || "#7c8aa5",
            accent: option.accent || (data && data.accent) || option.color || "#7c8aa5"
        };
    }

    function selectedSubjectEntries() {
        const yearId = currentSelectedYear();
        return currentSelectedSubjects().map(subjectId => subjectEntryForYear(yearId, subjectId)).filter(Boolean);
    }

    function liveSelectedSubjectEntries() {
        return selectedSubjectEntries().filter(entry => entry.status === "live" && entry.data);
    }

    function liveSelectedSubjectIds() {
        return liveSelectedSubjectEntries().map(entry => entry.id);
    }

    function isSelectedLiveSubject(subjectId) {
        return liveSelectedSubjectIds().includes(subjectId);
    }

    function correctCountForSubject(subjectId) {
        const subjState = state.subjects[subjectId] || { attempts: {} };
        return Object.values(subjState.attempts || {}).filter(a => a.correct).length;
    }

    function selectedStudySummary() {
        return liveSelectedSubjectIds().reduce((summary, subjectId) => {
            const subjSummary = subjectSummary(subjectId);
            summary.totalQuestions += subjSummary.total;
            summary.attempted += subjSummary.attempted;
            summary.correct += correctCountForSubject(subjectId);
            return summary;
        }, { totalQuestions: 0, attempted: 0, correct: 0 });
    }

    function saveStudyProfile(yearId, selectedSubjects) {
        state.settings.selectedYear = normalizeYearId(yearId);
        state.settings.selectedSubjects = normalizeSelectedSubjects(state.settings.selectedYear, selectedSubjects);
        saveState();
        applyCustomName();
        applyFooterCaption();
    }

    /* ---------- Router ---------- */

    function parseRoute() {
        const hash = location.hash || "#/";
        const path = hash.replace(/^#/, "").split("?")[0];
        const parts = path.split("/").filter(Boolean);
        return parts; // [] | ["progress"] | ["subject", "commerce"] | ["subject", "commerce", "quiz", "mcq"] | ...
    }

    function navigate(path) {
        location.hash = "#" + path;
    }

    function render() {
        const route = parseRoute();
        const routeKey = route.join("/");
        const root = $("#app");
        if (lastRouteKey !== null && routeKey !== lastRouteKey) {
            clearThemeAnnouncement(true);
        }
        lastRouteKey = routeKey;
        // Stop any park timers if we're leaving the park-play view
        const goingToParkPlay = route[0] === "clan" && route[1] === "park" && route[2] === "play";
        if (!goingToParkPlay && window.Park && window.Park.stop) window.Park.stop();
        // If we were in a mock quiz and we're navigating away, pause its timer.
        const goingToQuiz = route[0] === "subject" && route[2] === "quiz" && route[3];
        const sameQuiz = goingToQuiz && session && session.subjectId === route[1] && session.mode === route[3];
        if (session && session.isMock && !sameQuiz) {
            pauseMockTimer();
        }

        // Going into the break section?
        const goingToBreak = route[0] === "break";
        const goingToBreakGame = goingToBreak && route[1];
        // Stop the currently-running break game (if any) when the route changes —
        // each game's stop() is idempotent.
        if (window.CatTetris && window.CatTetris.stop) window.CatTetris.stop();
        if (window.CatInvaders && window.CatInvaders.stop) window.CatInvaders.stop();
        if (window.Catanoid && window.Catanoid.stop) window.Catanoid.stop();
        if (window.DangerNoodle && window.DangerNoodle.stop) window.DangerNoodle.stop();
        if (window.CatMan && window.CatMan.stop) window.CatMan.stop();
        if (window.Meowterbike && window.Meowterbike.stop) window.Meowterbike.stop();
        // If leaving the break section entirely, end the shared session.
        if (!goingToBreak && window.BreakSession) window.BreakSession.end();
        if (!goingToBreak) clearBreakRulesBypass();
        if (!goingToBreak && window._breakLockoutTimer) {
            clearTimeout(window._breakLockoutTimer);
            window._breakLockoutTimer = null;
        }
        if (!goingToBreak && window._breakHubTimer) {
            clearInterval(window._breakHubTimer);
            window._breakHubTimer = null;
        }
        root.innerHTML = "";
        root.scrollIntoView({ behavior: "instant", block: "start" });
        window.scrollTo(0, 0);

        updateClanBadge();
        if (!hasStudyProfile() && route[0] !== "settings") return renderProfileSetup(root);
        if (route.length === 0) return renderHome(root);
        if (route[0] === "progress") return renderProgress(root);
        if (route[0] === "settings") return renderSettings(root);
        if (route[0] === "break") {
            if (route[1] === "catris") return renderBreakGame(root, "catris");
            if (route[1] === "invaders") return renderBreakGame(root, "invaders");
            if (route[1] === "catanoid") return renderBreakGame(root, "catanoid");
            if (route[1] === "danger-noodle") return renderBreakGame(root, "danger-noodle");
            if (route[1] === "cat-man") return renderBreakGame(root, "cat-man");
            if (route[1] === "meowterbike") return renderBreakGame(root, "meowterbike");
            return renderBreakHub(root);
        }
        if (route[0] === "clan") {
            if (route[1] === "claim") return renderCollectionClaim(root);
            if (route[1] === "combine") return renderCollectionCombine(root);
            if (route[1] === "park") {
                if (route[2] === "play") return renderCollectionParkPlay(root);
                return renderCollectionParkSelect(root);
            }
            if ((route[1] === "cat" || route[1] === "pet") && route[2]) return renderCollectionDetail(root, route[2], route[1]);
            return renderCollectionHub(root);
        }
        if (route[0] === "subject" && route[1]) {
            const subjectId = route[1];
            if (route[2] === "guide" && route[3]) return renderLearningGuide(root, subjectId, route[3]);
            if (route[2] === "quiz" && route[3]) return renderQuiz(root, subjectId, route[3], route[4] || null);
            return renderSubject(root, subjectId);
        }
        renderHome(root);
    }

    function updateClanBadge() {
        const badge = document.getElementById("clan-badge");
        if (!badge) return;
        const tickets = totalPendingTickets();
        if (tickets > 0) {
            badge.textContent = tickets;
            badge.hidden = false;
        } else {
            badge.hidden = true;
        }
    }

    /* ---------- Home view ---------- */

    function renderProfileSelectionFields(draft, prefix, startStep) {
        const firstStep = startStep || 1;
        const subjects = subjectOptionsForYear(draft.yearId);
        const yearCards = YEAR_LEVELS.map(year => `
            <label class="year-choice ${draft.yearId === year.id ? "is-selected" : ""}">
                <input type="radio" name="${prefix}-year" value="${year.id}" ${draft.yearId === year.id ? "checked" : ""}>
                <span class="year-choice-label">${escapeHtml(year.label)}</span>
                <span class="year-choice-blurb">${escapeHtml(year.blurb || "")}</span>
            </label>
        `).join("");
        const subjectCards = subjects.map(subject => {
            const entry = subjectEntryForYear(draft.yearId, subject.id);
            const checked = draft.selectedSubjects.includes(subject.id);
            return `
                <label class="profile-subject-choice ${checked ? "is-selected" : ""} ${entry.status === "coming-soon" ? "is-coming-soon" : ""}">
                    <input type="checkbox" data-profile-prefix="${prefix}" data-role="subject" value="${subject.id}" ${checked ? "checked" : ""}>
                    <span class="profile-subject-icon" aria-hidden="true">${entry.icon}</span>
                    <span class="profile-subject-copy">
                        <strong>${escapeHtml(entry.name)}</strong>
                        <span>${escapeHtml(entry.tagline || (entry.status === "coming-soon" ? "Coming soon." : ""))}</span>
                    </span>
                    <span class="profile-subject-status">${entry.status === "coming-soon" ? "Coming soon" : "Ready now"}</span>
                </label>
            `;
        }).join("");
        return `
            <div class="profile-form-block">
                <div class="profile-section-heading">
                    <h2>${firstStep}. Pick your year</h2>
                </div>
                <div class="year-choice-grid">${yearCards}</div>
            </div>
            <div class="profile-form-block">
                <div class="profile-section-heading">
                    <h2>${firstStep + 1}. Pick your subjects</h2>
                    <p data-profile-count="${prefix}">${draft.selectedSubjects.length} subject${draft.selectedSubjects.length === 1 ? "" : "s"} selected</p>
                </div>
                <div class="profile-subject-grid">${subjectCards}</div>
            </div>
        `;
    }

    function renderOnboardingThemeFields(themeId) {
        const selectedTheme = normalizeThemePreference(themeId);
        return `
            <div class="profile-form-block">
                <div class="profile-section-heading">
                    <h2>2. Pick your theme</h2>
                    <p>You can still change this later in Settings.</p>
                </div>
                <div class="theme-switcher onboarding-theme-switcher" role="radiogroup" aria-label="Choose theme">
                    <button type="button" class="theme-switch-btn ${selectedTheme === "cats" ? "is-active" : ""}" data-profile-theme="cats" aria-pressed="${selectedTheme === "cats" ? "true" : "false"}">
                        <span class="theme-switch-emoji">🐱</span>
                        <span class="theme-switch-copy">
                            <strong>Cats</strong>
                            <span>Study cats, Cat Clan, and cat-themed mascots</span>
                        </span>
                    </button>
                    <button type="button" class="theme-switch-btn ${selectedTheme === "animals" ? "is-active" : ""}" data-profile-theme="animals" aria-pressed="${selectedTheme === "animals" ? "true" : "false"}">
                        <span class="theme-switch-emoji">🦊</span>
                        <span class="theme-switch-copy">
                            <strong>Pets</strong>
                            <span>Cute animal mascots and collectible pets</span>
                        </span>
                    </button>
                </div>
            </div>
        `;
    }

    function bindProfileSelectionForm(root, draft, prefix, onYearChange, onSave, opts) {
        opts = opts || {};
        const yearSelector = `input[name="${prefix}-year"]`;
        const subjectSelector = `input[data-profile-prefix="${prefix}"][data-role="subject"]`;
        const saveBtn = document.getElementById(`${prefix}-save`);
        const countEl = root.querySelector(`[data-profile-count="${prefix}"]`);
        const nameInput = opts.nameSelector ? root.querySelector(opts.nameSelector) : null;
        const themeButtons = opts.themeSelector ? $$(opts.themeSelector, root) : [];

        function selectedSubjectsFromDom() {
            return $$(subjectSelector, root).filter(input => input.checked).map(input => input.value);
        }

        function normalizedNameFromDom() {
            return nameInput ? (nameInput.value || "").trim().slice(0, 24) : "";
        }

        function normalizedThemeFromDom() {
            const activeButton = themeButtons.find(btn => btn.classList.contains("is-active")) || themeButtons[0];
            return normalizeThemePreference(activeButton ? activeButton.dataset.profileTheme : draft.themePreference);
        }

        function syncSelectionState() {
            const selected = selectedSubjectsFromDom();
            $$(".profile-subject-choice", root).forEach(label => {
                const input = label.querySelector(subjectSelector);
                label.classList.toggle("is-selected", !!(input && input.checked));
            });
            if (countEl) {
                countEl.textContent = selected.length
                    ? `${selected.length} subject${selected.length === 1 ? "" : "s"} selected`
                    : "Pick at least one subject";
            }
            if (saveBtn) {
                const needsName = !!opts.requireName;
                const hasName = !needsName || !!normalizedNameFromDom();
                saveBtn.disabled = !selected.length || !hasName;
            }
        }

        $$(yearSelector, root).forEach(input => {
            input.addEventListener("change", (e) => {
                onYearChange({
                    yearId: e.target.value,
                    selectedSubjects: defaultSelectedSubjectsForYear(e.target.value),
                    customName: normalizedNameFromDom(),
                    themePreference: normalizedThemeFromDom()
                });
            });
        });

        $$(subjectSelector, root).forEach(input => {
            input.addEventListener("change", syncSelectionState);
        });

        if (nameInput) {
            nameInput.addEventListener("input", syncSelectionState);
        }

        if (themeButtons.length) {
            themeButtons.forEach(btn => {
                btn.addEventListener("click", () => {
                    onYearChange({
                        yearId: draft.yearId,
                        selectedSubjects: selectedSubjectsFromDom(),
                        customName: normalizedNameFromDom(),
                        themePreference: btn.dataset.profileTheme
                    });
                });
            });
        }

        if (saveBtn) {
            saveBtn.addEventListener("click", () => {
                const selected = selectedSubjectsFromDom();
                if (!selected.length) return;
                onSave(draft.yearId, selected, {
                    customName: normalizedNameFromDom(),
                    themePreference: normalizedThemeFromDom()
                });
            });
        }

        syncSelectionState();
    }

    function renderProfileSetup(root, draft) {
        const resolved = resolveProfileDraft(draft);
        const setupTheme = normalizeThemePreference(resolved.themePreference);
        const themeLabel = setupTheme === "animals" ? "pets" : "cats";
        root.innerHTML = `
            <section class="profile-setup">
                <div class="profile-setup-copy">
                    <div class="hero-cat">${mascotSvgForTheme(setupTheme, "wave")}</div>
                    <h1>Let's set up your study guide.</h1>
                    <p>Choose your year and the subjects you want on your home screen. You can change them later in Settings, and hidden subjects keep their saved progress. Your study ${themeLabel} will be waiting.</p>
                </div>
                <div class="profile-setup-panel">
                    <div class="profile-form-block">
                        <div class="profile-section-heading">
                            <h2>1. Add your name</h2>
                            <p>We'll use it in greetings and the brand bar.</p>
                        </div>
                        <label class="settings-field onboarding-name-field">
                            <span>Your name</span>
                            <input type="text" id="onboarding-name" value="${escapeHtml(resolved.customName || "")}" maxlength="24" placeholder="Enter your name" autocomplete="name">
                        </label>
                    </div>
                    ${renderOnboardingThemeFields(setupTheme)}
                    ${renderProfileSelectionFields(resolved, "onboarding", 3)}
                    <div class="profile-setup-actions">
                        <button type="button" class="primary-btn" id="onboarding-save">Start studying</button>
                    </div>
                </div>
            </section>
        `;
        bindProfileSelectionForm(
            root,
            resolved,
            "onboarding",
            nextDraft => renderProfileSetup(root, nextDraft),
            (yearId, selectedSubjects, extra) => {
                state.settings.customName = (extra && extra.customName) || "";
                state.settings.themePreference = normalizeThemePreference(extra && extra.themePreference);
                saveStudyProfile(yearId, selectedSubjects);
                applyCustomName();
                location.hash = "#/";
                render();
                mascotPopIn({
                    expression: "cheering",
                    message: currentThemeId() === "animals" ? "Pawsome! Your pet-friendly study space is ready." : "Pawsome! Your study space is ready.",
                    duration: 2600
                });
            },
            { nameSelector: "#onboarding-name", themeSelector: "[data-profile-theme]" }
        );
    }

    function renderHome(root) {
        if (!hasStudyProfile()) return renderProfileSetup(root);
        const name = customName();
        const year = yearLabel(currentSelectedYear());
        const greetings = currentThemeId() === "animals"
            ? [
                `Hi ${name}! What shall we study for ${year}?`,
                `Hi ${name}! Pick a ${year} subject - your study pets are ready.`,
                `Welcome back, ${name}. ${year} study time starts here.`,
                `Hi ${name}! Your pet crew says you've got this.`
            ]
            : [
                `Hi ${name}! What shall we study for ${year}?`,
                `Hi ${name}! Pick a ${year} subject - your study cats are ready.`,
                `Welcome back, ${name}. ${year} study time starts here.`,
                `Hi ${name}! You've got this, ${year} star.`
            ];
        const greeting = greetings[Math.floor(Math.random() * greetings.length)];
        const selectedEntries = selectedSubjectEntries();
        const liveEntries = selectedEntries.filter(entry => entry.status === "live");
        const hasLiveSubjects = !!liveEntries.length;
        const summary = selectedStudySummary();
        const overallPct = pct(summary.correct, summary.attempted);
        const cards = selectedEntries.map(entry => {
            if (entry.status === "live" && entry.data) {
                const stats = subjectSummary(entry.id);
                return `
                    <a class="subject-card" href="#/subject/${entry.id}" style="--accent:${entry.color}">
                        <div class="subject-card-icon" aria-hidden="true">${entry.icon}</div>
                        <h3>${escapeHtml(entry.name)}</h3>
                        <p class="subject-tagline">${escapeHtml(entry.tagline)}</p>
                        <div class="subject-card-stats">
                            <span>${stats.attempted}/${stats.total} answered</span>
                            <span>${stats.correct}% correct</span>
                        </div>
                        <div class="progress-bar"><span style="width:${stats.attemptedPct}%"></span></div>
                    </a>
                `;
            }
            return `
                <article class="subject-card subject-card-disabled" style="--accent:${entry.color}">
                    <div class="subject-card-badge">Coming soon</div>
                    <div class="subject-card-icon" aria-hidden="true">${entry.icon}</div>
                    <h3>${escapeHtml(entry.name)}</h3>
                    <p class="subject-tagline">${escapeHtml(entry.tagline)}</p>
                    <p class="subject-coming-soon">Selected for ${escapeHtml(entry.yearLabel)}, but this study pack is still on its way.</p>
                </article>
            `;
        }).join("");

        root.innerHTML = `
            <section class="hero">
                <div class="hero-text">
                    <h1>${escapeHtml(greeting)}</h1>
                    <p>${hasLiveSubjects
                        ? `${escapeHtml(year)} study packs are ready below. Pick a subject to start practising — your progress saves automatically.`
                        : `${escapeHtml(year)} subjects are saved. Right now your selected study pack is still coming soon, but you can change your choices in Settings any time.`}</p>
                    <div class="hero-stats">
                        <div><strong>${selectedEntries.length}</strong><span>subjects chosen</span></div>
                        <div><strong>${summary.attempted}</strong><span>answered</span></div>
                        <div><strong>${hasLiveSubjects ? `${overallPct}%` : "Soon"}</strong><span>${hasLiveSubjects ? "correct overall" : "study packs"}</span></div>
                        <div><strong>${hasLiveSubjects ? summary.totalQuestions : year}</strong><span>${hasLiveSubjects ? "questions total" : "current year"}</span></div>
                    </div>
                </div>
                <div class="hero-cat">${mascotSvg("wave")}</div>
            </section>
            <section class="subject-grid">${cards}</section>
        `;
    }

    /* ---------- Subject view ---------- */

    function renderSubject(root, subjectId) {
        if (!isSelectedLiveSubject(subjectId)) { navigate("/"); return; }
        const subj = window.SUBJECT_DATA[subjectId];
        if (!subj) { navigate("/"); return; }
        const stats = subjectSummary(subjectId);
        const isMaths = isMathsSubject(subjectId);

        root.innerHTML = `
            <a class="back-link" href="#/">← All subjects</a>
            <header class="subject-header" style="--accent:${subj.color}">
                <div>
                    <p class="overline">${escapeHtml(subj.tagline)}</p>
                    <h1>${subj.icon} ${escapeHtml(subj.name)}</h1>
                </div>
                <div class="subject-progress">
                    <div class="progress-ring" style="--p:${stats.correct}">
                        <div class="progress-ring-num">${stats.correct}%</div>
                        <div class="progress-ring-label">correct</div>
                    </div>
                </div>
            </header>

            ${renderPracticeQuestionsSection(subjectId, subj)}

            ${renderMockExamsSection(subjectId, subj)}

            ${isMaths ? `
            <aside class="maths-tip">
                <strong>💡 Need a hand?</strong>
                Every Maths Practice question has a <em>Hint</em> and <em>Help</em> button. Use the 🧮 calculator any time during practice. (Both are hidden during Mock Exams to mirror real exam conditions.)
                <button type="button" class="primary-btn calc-launch" id="calc-launch-subject">🧮 Open calculator</button>
            </aside>` : ""}
        `;
        if (isMaths) {
            const calcBtn = document.getElementById("calc-launch-subject");
            if (calcBtn) calcBtn.addEventListener("click", () => window.Calc && window.Calc.open());
        }
    }

    function renderMockExamsSection(subjectId, subj) {
        if (!Array.isArray(subj.mockExams) || !subj.mockExams.length) return "";
        const subjState = state.subjects[subjectId] || { quizSessions: [], bestScores: {} };
        const cards = subj.mockExams.map((mock, idx) => {
            const best = subjState.bestScores ? subjState.bestScores[mock.id] : null;
            const attempts = (subjState.quizSessions || []).filter(s => s.mode === mock.id).length;
            const bestPct = best != null ? Math.round(best * 100) + "%" : "—";
            const num = String(idx + 1).padStart(2, "0");
            const composition = countMockComposition(subj, mock);
            return `
                <a class="mock-card" href="#/subject/${subjectId}/quiz/${mock.id}">
                    <div class="mock-badge">📝 Mock ${num}</div>
                    <h4>${escapeHtml(mock.name)}</h4>
                    <p class="mock-focus">${escapeHtml(mock.focus || "")}</p>
                    <div class="mock-stats">
                        <span class="mock-stat-best">🏆 Best: <strong>${bestPct}</strong></span>
                        <span class="mock-stat-attempts">Attempts: ${attempts}</span>
                    </div>
                    <div class="mock-composition">
                        <span>${composition.mcq} MCQ</span>
                        <span>${composition.short} short</span>
                        <span>${composition.long} long</span>
                        ${mock.duration ? `<span>~${mock.duration} min</span>` : ""}
                    </div>
                </a>
            `;
        }).join("");
        return `
            <section class="mocks-section">
                <h2>📝 Mock Exams <span class="section-tag">${subj.mockExams.length} full-length</span></h2>
                <p class="section-blurb">Sit a full-length exam under realistic conditions. <strong>Once you press Next, your answer is locked</strong> — just like the real thing. Your best score is remembered, so retake to beat your record!</p>
                <div class="mock-grid">${cards}</div>
            </section>
        `;
    }

    function countMockComposition(subj, mock) {
        const mcqSet = new Set((subj.mcqs || []).map(q => q.id));
        const shortSet = new Set((subj.short || []).map(q => q.id));
        const longSet = new Set((subj.long || []).map(q => q.id));
        const c = { mcq: 0, short: 0, long: 0 };
        for (const id of mock.questionIds) {
            if (mcqSet.has(id)) c.mcq++;
            else if (shortSet.has(id)) c.short++;
            else if (longSet.has(id)) c.long++;
        }
        return c;
    }

    function renderPracticeQuestionsSection(subjectId, subj) {
        if (!Array.isArray(subj.practiceExams) || !subj.practiceExams.length) return "";
        const subjState = state.subjects[subjectId] || { quizSessions: [], bestScores: {} };

        const examCard = (exam, n) => {
            const best = subjState.bestScores ? subjState.bestScores[exam.id] : null;
            const attempts = (subjState.quizSessions || []).filter(s => s.mode === exam.id).length;
            const bestPct = best != null ? Math.round(best * 100) + "%" : "—";
            const isPerfect = best != null && best >= 0.999;
            return `
                <a class="exam-card ${isPerfect ? "is-perfect" : ""}" href="#/subject/${subjectId}/quiz/${exam.id}">
                    <div class="exam-num">Set ${String(n).padStart(2, "0")} ${isPerfect ? "🌟" : ""}</div>
                    <p class="exam-focus">${exam.questionIds.length} questions · ${attempts} attempt${attempts === 1 ? "" : "s"}</p>
                    <div class="exam-meta">
                        <span class="exam-best">🏆 Best: <strong>${bestPct}</strong></span>
                    </div>
                </a>
            `;
        };

        let body;
        if (Array.isArray(subj.practiceTopics) && subj.practiceTopics.length) {
            const examsById = Object.create(null);
            subj.practiceExams.forEach(e => { examsById[e.id] = e; });
            const groups = subj.practiceTopics.map(t => {
                const cards = (t.examIds || []).map((id, i) => examsById[id] ? examCard(examsById[id], i + 1) : "").join("");
                const topicBest = (t.examIds || []).reduce((b, id) => Math.max(b, (subjState.bestScores || {})[id] || 0), 0);
                return `
                    <div class="practice-topic-group">
                        <header class="practice-topic-header">
                            <div>
                                <h3>${escapeHtml(t.name)}</h3>
                                <p class="practice-topic-focus">${escapeHtml(t.outcomes || "")}</p>
                            </div>
                            <div class="practice-topic-best">🏆 ${Math.round(topicBest * 100)}%</div>
                        </header>
                        <div class="exam-grid">${cards}</div>
                    </div>
                `;
            }).join("");
            body = groups;
        } else {
            const cards = subj.practiceExams.map((e, i) => examCard(e, i + 1)).join("");
            body = `<div class="exam-grid">${cards}</div>`;
        }

        return `
            <section class="exams-section">
                <h2>🎯 Practice Quizzes <span class="section-tag">${subj.practiceExams.length} quizzes · 20 questions each</span></h2>
                <p class="section-blurb">Each set is a focused, topic-themed bundle of 20 questions. Answers lock once placed, and you can re-attempt as many times as you like. Help is available on every question. Score 100% to unlock a new pet for your active theme!</p>
                ${body}
            </section>
        `;
    }

    /* ---------- Quiz engine ---------- */

    // mode: 'mcq' | 'short' | 'long' | 'mixed' | 'topic-<id>'
    let session = null;

    function buildQuestionList(subj, mode) {
        if (mode === "mcq") return subj.mcqs.slice();
        if (mode === "short") return subj.short.slice();
        if (mode === "long") return subj.long.slice();
        if (mode === "mixed") {
            const pool = [].concat(subj.mcqs, subj.short, subj.long);
            return shuffle(pool).slice(0, 10);
        }
        if (mode.startsWith("topic-")) {
            const topicId = mode.slice("topic-".length);
            return [].concat(subj.mcqs, subj.short, subj.long).filter(q => q.topic === topicId);
        }
        if (mode.startsWith("exam-") && Array.isArray(subj.practiceExams)) {
            const exam = subj.practiceExams.find(e => e.id === mode);
            if (exam) {
                const all = [].concat(subj.mcqs, subj.short, subj.long);
                const byId = Object.create(null);
                all.forEach(q => { byId[q.id] = q; });
                return exam.questionIds.map(id => byId[id]).filter(Boolean);
            }
        }
        if (mode.startsWith("mock-") && Array.isArray(subj.mockExams)) {
            const mock = subj.mockExams.find(m => m.id === mode);
            if (mock) {
                const all = [].concat(subj.mcqs, subj.short, subj.long);
                const byId = Object.create(null);
                all.forEach(q => { byId[q.id] = q; });
                return mock.questionIds.map(id => byId[id]).filter(Boolean);
            }
        }
        return subj.mcqs.slice();
    }

    function findExam(subj, mode) {
        if (!mode) return null;
        if (mode.startsWith("exam-") && Array.isArray(subj.practiceExams)) {
            return subj.practiceExams.find(e => e.id === mode) || null;
        }
        if (mode.startsWith("mock-") && Array.isArray(subj.mockExams)) {
            const mock = subj.mockExams.find(m => m.id === mode);
            if (mock) return Object.assign({ isMock: true }, mock);
        }
        return null;
    }

    function questionType(q, subj) {
        if (q.options) return "mcq";
        if (subj && subj.long && subj.long.some(x => x.id === q.id)) return "long";
        if (subj && subj.short && subj.short.some(x => x.id === q.id)) return "short";
        return q.marks && q.marks > 6 ? "long" : "short";
    }

    function renderQuiz(root, subjectId, mode) {
        if (!isSelectedLiveSubject(subjectId)) { navigate("/"); return; }
        const subj = window.SUBJECT_DATA[subjectId];
        if (!subj) { navigate("/"); return; }
        const questions = buildQuestionList(subj, mode);
        if (!questions.length) {
            root.innerHTML = `<p class="empty">No questions for this mode yet.</p>
                <a class="back-link" href="#/subject/${subjectId}">← Back to ${escapeHtml(subj.name)}</a>`;
            return;
        }
        const exam = findExam(subj, mode);
        // Practice and mocks keep curated order; other modes shuffle.
        const ordered = exam ? questions : shuffle(questions);
        const isMock = !!(exam && exam.isMock);
        // Lock-in applies to BOTH Practice Quizzes and Mock Exams.
        const isLockMode = !!exam;
        // Tag each position with a unique key so duplicate question IDs in an
        // exam (allowed when pools are small) get independent session state.
        const tagged = ordered.map((q, i) => Object.assign({}, q, { _sessionKey: `${i}-${q.id}` }));

        // Load previously-saved answers for this exam (per-exam persistence).
        // Practice exams: ALWAYS preload (unlocked), so Harper can see her last attempt.
        // Mocks: preload only if the previous attempt was unfinished (resume).
        const saved = exam ? getExamProgress(subjectId, mode) : null;
        const preloadedAnswers = {};
        if (saved && saved.answers) {
            for (const k of Object.keys(saved.answers)) {
                const src = saved.answers[k];
                // For practice re-attempts, copy answer text/option but unlock and clear
                // any "locked / correct" stale state so Harper can change her answer.
                if (!isMock) {
                    preloadedAnswers[k] = {
                        user: src.user,
                        userText: src.userText,
                        revealed: false,
                        locked: false,
                        correct: false,
                        aiFeedback: src.aiFeedback   // keep AI feedback so it carries across
                    };
                } else if (saved.finished === false) {
                    // Resuming an in-progress mock — keep locks intact.
                    preloadedAnswers[k] = Object.assign({}, src);
                }
            }
        }

        session = {
            subjectId, mode, exam,
            isMock,
            isLockMode,
            questions: tagged,
            index: 0,
            correct: 0,
            attempted: 0,
            answers: preloadedAnswers,
            helpStates: {},
            sessionStreak: 0
        };
        if (isMock) startMockTimer();
        renderCurrentQuestion(root);
    }

    function wireRetakeButton(root) {
        const btn = document.getElementById("retake-quiz-btn");
        if (!btn || !session) return;
        btn.addEventListener("click", () => {
            renderQuiz(root, session.subjectId, session.mode);
        });
    }

    /* ---------- AI marking helpers ---------- */

    function renderAIFeedback(ai, marks) {
        const cls = ai.assessment === "correct" ? "ai-good" :
                    ai.assessment === "incorrect" ? "ai-bad" : "ai-partial";
        const bullets = (ai.missingPoints || []).map(b => `<li>${escapeHtml(b)}</li>`).join("");
        return `
            <div class="ai-feedback-card ${cls}">
                <div class="ai-feedback-head">
                    <strong>🤖 AI assessment: ${escapeHtml(ai.assessment || "—")}</strong>
                    <span class="ai-feedback-mark">Suggested mark: ${ai.suggestedMark}/${marks || "?"}</span>
                </div>
                <p class="ai-feedback-text">${escapeHtml(ai.feedback || "")}</p>
                ${bullets ? `<ul class="ai-feedback-points">${bullets}</ul>` : ""}
                <p class="ai-disclaimer">AI marking can be wrong — check against the sample answer and use the "I got this right" toggle if you disagree.</p>
            </div>
        `;
    }

    async function requestAIFeedback(q, isLocked) {
        const k = keyOf(q);
        const apiKey = (state.settings && state.settings.geminiApiKey) || "";
        if (!apiKey) {
            const go = confirm("AI marking needs a free Google Gemini API key.\n\nGet one at aistudio.google.com/apikey, then paste it into Settings.\n\nOpen Settings now?");
            if (go) navigate("/settings");
            return;
        }
        const userText = (session.answers[k] && session.answers[k].userText) || "";
        if (!userText.trim()) {
            alert("Type a response first, then ask for AI feedback.");
            return;
        }
        const aiBtn = $("#ai-mark-btn");
        if (aiBtn) {
            aiBtn.disabled = true;
            aiBtn.textContent = "🤖 Marking…";
        }
        const subj = window.SUBJECT_DATA[session.subjectId];
        try {
            const result = await window.AI.markAnswer({
                apiKey,
                question: q.q,
                sample: q.sample || "",
                response: userText,
                marks: q.marks || 4,
                subjectName: subj.name
            });
            if (!session.answers[k]) session.answers[k] = { userText, correct: false };
            session.answers[k].aiFeedback = Object.assign({}, result, { markedAt: new Date().toISOString() });
            persistAnswerForExam(q, session.answers[k]);
            // Re-render answer area with the new feedback
            renderAnswerArea(q, session.answers[k], isLocked);
        } catch (e) {
            if (aiBtn) {
                aiBtn.disabled = false;
                aiBtn.textContent = "🤖 Try again";
            }
            alert("AI marking failed: " + (e.message || "unknown error"));
        }
    }

    /* ---------- examProgress helpers ---------- */

    function getExamProgress(subjectId, examId) {
        const sub = state.subjects[subjectId];
        if (!sub.examProgress) sub.examProgress = {};
        return sub.examProgress[examId] || null;
    }

    function ensureExamProgress(subjectId, examId) {
        const sub = state.subjects[subjectId];
        if (!sub.examProgress) sub.examProgress = {};
        if (!sub.examProgress[examId]) {
            sub.examProgress[examId] = { answers: {}, finished: false };
        }
        return sub.examProgress[examId];
    }

    function persistAnswerForExam(q, ansSnapshot) {
        if (!session || !session.exam) return;
        const ep = ensureExamProgress(session.subjectId, session.mode);
        ep.answers[keyOf(q)] = Object.assign({}, ansSnapshot);
        saveState();
    }

    /* ---------- Mock exam timer ---------- */

    let mockTimerInterval = null;

    function ensureMockTimer(ep, mock) {
        if (!ep.timer) {
            const minutes = (mock && mock.duration) || 60;
            ep.timer = {
                durationMs: minutes * 60 * 1000,
                elapsedMs: 0,
                lastResumeAt: null,
                autoSubmitted: false
            };
        }
        return ep.timer;
    }

    function startMockTimer() {
        if (!session || !session.isMock) return;
        const ep = ensureExamProgress(session.subjectId, session.mode);
        const t = ensureMockTimer(ep, session.exam);
        // Resume from saved elapsed
        t.lastResumeAt = new Date().toISOString();
        ep.finished = false;
        saveState();
        if (mockTimerInterval) clearInterval(mockTimerInterval);
        mockTimerInterval = setInterval(tickMockTimer, 1000);
        renderMockTimerChip();
    }

    function pauseMockTimer() {
        if (!session || !session.isMock) return;
        const ep = state.subjects[session.subjectId].examProgress[session.mode];
        if (!ep || !ep.timer) return;
        if (ep.timer.lastResumeAt) {
            const elapsed = Date.now() - new Date(ep.timer.lastResumeAt).getTime();
            ep.timer.elapsedMs += Math.max(0, elapsed);
            ep.timer.lastResumeAt = null;
            saveState();
        }
        if (mockTimerInterval) {
            clearInterval(mockTimerInterval);
            mockTimerInterval = null;
        }
    }

    function tickMockTimer() {
        if (!session || !session.isMock) { stopMockTimerInterval(); return; }
        const ep = state.subjects[session.subjectId].examProgress[session.mode];
        if (!ep || !ep.timer || !ep.timer.lastResumeAt) return;
        const total = mockTotalElapsed(ep.timer);
        if (total >= ep.timer.durationMs) {
            ep.timer.autoSubmitted = true;
            saveState();
            stopMockTimerInterval();
            // Trigger automatic submit
            const root = $("#app");
            finishQuiz(root);
            return;
        }
        renderMockTimerChip();
    }

    function stopMockTimerInterval() {
        if (mockTimerInterval) { clearInterval(mockTimerInterval); mockTimerInterval = null; }
    }

    function mockTotalElapsed(timer) {
        if (!timer) return 0;
        const base = timer.elapsedMs || 0;
        if (!timer.lastResumeAt) return base;
        return base + (Date.now() - new Date(timer.lastResumeAt).getTime());
    }

    function renderMockTimerChip() {
        const chip = document.getElementById("mock-timer-chip");
        if (!chip || !session || !session.isMock) return;
        const ep = state.subjects[session.subjectId].examProgress[session.mode];
        if (!ep || !ep.timer) return;
        const remaining = Math.max(0, ep.timer.durationMs - mockTotalElapsed(ep.timer));
        const m = Math.floor(remaining / 60000);
        const s = Math.floor((remaining % 60000) / 1000);
        chip.textContent = `⏱ ${m}:${String(s).padStart(2, "0")}`;
        chip.classList.toggle("warning", remaining < 5 * 60 * 1000);
        chip.classList.toggle("critical", remaining < 60 * 1000);
    }

    // Per-position key used for session.answers (so duplicate q.id's stay separate)
    function keyOf(q) { return q._sessionKey || q.id; }

    function currentAnswerSnapshot(q) {
        return session ? session.answers[keyOf(q)] : null;
    }

    function ensureAnswerSnapshot(q) {
        const k = keyOf(q);
        if (!session.answers[k]) session.answers[k] = { correct: false };
        return session.answers[k];
    }

    function hasMeaningfulAnswer(ans) {
        if (!ans) return false;
        if (ans.user != null) return true;
        if (typeof ans.userText === "string" && ans.userText.trim()) return true;
        return !!ans.correct;
    }

    function learningGuideById(subjectId, guideId) {
        const subj = window.SUBJECT_DATA[subjectId];
        if (!subj || !Array.isArray(subj.learningGuides)) return null;
        return subj.learningGuides.find(guide => guide.id === guideId) || null;
    }

    function questionAssistFor(q, subjectId) {
        const subj = window.SUBJECT_DATA[subjectId || (session && session.subjectId)];
        if (!subj || !Array.isArray(subj.learningGuides) || !q || !q.support) return null;
        if (!q.support.hint || !q.support.guideId) return null;
        if (!learningGuideById(subj.id, q.support.guideId)) return null;
        return q.support;
    }

    function questionAssistHintShown(q) {
        const ans = currentAnswerSnapshot(q);
        return !!(ans && ans.hintShown);
    }

    function shouldGateSampleBehindHint(q) {
        return !session.isMock && questionType(q, window.SUBJECT_DATA[session.subjectId]) !== "mcq" && !!questionAssistFor(q, session.subjectId);
    }

    function renderQuestionAssistBlock(q) {
        const assist = questionAssistFor(q, session.subjectId);
        if (!assist) return "";
        return `
            <div class="question-assist">
                <button type="button" class="help-btn hint-btn" id="question-hint-btn">💡 Hint</button>
                <a class="help-btn question-assist-link" id="question-guide-link" href="#/subject/${session.subjectId}/guide/${assist.guideId}">📘 Learn about this question</a>
                <div class="hint-panel question-assist-panel" id="question-hint-panel" hidden></div>
            </div>
        `;
    }

    function wireQuestionAssist(q) {
        const hintBtn = $("#question-hint-btn");
        if (hintBtn) hintBtn.addEventListener("click", () => revealQuestionAssistHint(q, false));
    }

    function revealQuestionAssistHint(q, silent) {
        const assist = questionAssistFor(q, session.subjectId);
        if (!assist) return;
        const panel = $("#question-hint-panel");
        if (panel) {
            panel.innerHTML = `<p class="help-rule"><strong>Hint:</strong> ${renderText(assist.hint)}</p>`;
            if (shouldGateSampleBehindHint(q)) {
                panel.innerHTML += `<p class="help-tip">Sample answer unlocked below.</p>`;
            }
            panel.hidden = false;
        }
        const hintBtn = $("#question-hint-btn");
        if (hintBtn) {
            hintBtn.disabled = true;
            hintBtn.textContent = "💡 Hint shown";
        }
        const ans = ensureAnswerSnapshot(q);
        ans.hintShown = true;
        persistAnswerForExam(q, ans);
        if (shouldGateSampleBehindHint(q)) {
            renderAnswerArea(q, ans, !!ans.locked);
        }
    }

    function renderLearningGuide(root, subjectId, guideId) {
        if (!isSelectedLiveSubject(subjectId)) { navigate("/"); return; }
        const subj = window.SUBJECT_DATA[subjectId];
        if (!subj) { navigate("/"); return; }
        const guide = learningGuideById(subjectId, guideId);
        if (!guide) { navigate(`/subject/${subjectId}`); return; }
        const topic = subj.topics.find(t => t.id === guide.topicId);
        const sections = (guide.sections || []).map(section => `
            <section class="guide-section">
                <h3>${escapeHtml(section.heading || "")}</h3>
                ${section.body ? `<p>${renderText(section.body)}</p>` : ""}
                ${Array.isArray(section.points) && section.points.length ? `<ul>${section.points.map(point => `<li>${renderText(point)}</li>`).join("")}</ul>` : ""}
            </section>
        `).join("");
        const quickChecks = Array.isArray(guide.quickChecks) && guide.quickChecks.length
            ? `
                <section class="guide-section guide-quick-checks">
                    <h3>Quick checks</h3>
                    <ul>${guide.quickChecks.map(item => `<li>${renderText(item)}</li>`).join("")}</ul>
                </section>
            `
            : "";
        const showReturnButton = !!(session && session.subjectId === subjectId);

        root.innerHTML = `
            <a class="back-link" href="#/subject/${subjectId}">← Back to ${escapeHtml(subj.name)}</a>
            <section class="guide-page" style="--accent:${subj.color}">
                <header class="guide-header">
                    <div>
                        <p class="overline">${escapeHtml(subj.tagline)}</p>
                        <h1>${subj.icon} ${escapeHtml(guide.title)}</h1>
                        <p class="guide-summary">${renderText(guide.intro || "")}</p>
                    </div>
                    <div class="guide-topic-chip">${topic ? escapeHtml(topic.name) : "Learning guide"}</div>
                </header>
                ${showReturnButton ? `
                    <div class="guide-return-row">
                        <button type="button" class="ghost-btn" id="guide-return-btn">↩ Return to your question</button>
                        <p class="guide-return-note">Use browser back to jump straight into your practice question again.</p>
                    </div>
                ` : ""}
                <div class="guide-body">
                    ${sections}
                    ${quickChecks}
                </div>
            </section>
        `;

        const returnBtn = $("#guide-return-btn");
        if (returnBtn) {
            returnBtn.addEventListener("click", () => window.history.back());
        }
    }

    function renderCurrentQuestion(root) {
        const subj = window.SUBJECT_DATA[session.subjectId];
        const q = session.questions[session.index];
        const type = questionType(q, subj);
        const total = session.questions.length;
        const num = session.index + 1;
        const topic = subj.topics.find(t => t.id === q.topic);
        const previous = session.answers[keyOf(q)];
        const isLocked = !!(previous && previous.locked);
        const isLastQuestion = session.index === total - 1;
        const hasQuestionAssist = !!(!session.isMock && questionAssistFor(q, session.subjectId));

        root.innerHTML = `
            <a class="back-link" href="#/subject/${session.subjectId}">← Back${session.isLockMode ? " (exits attempt)" : ""}</a>
            <div class="quiz-shell ${session.isMock ? "is-mock" : (session.isLockMode ? "is-practice" : "")}" style="--accent:${subj.color}">
                ${session.isMock ? `
                    <div class="mock-banner mock-banner-mock">
                        🔒 <strong>Mock Exam</strong> — once you press Next, your answer is locked. Help is hidden.
                    </div>
                ` : (session.isLockMode ? `
                    <div class="mock-banner mock-banner-practice">
                        🔒 <strong>Practice Quizzes</strong> — answers lock once you press Next. Use 💡 Help anytime, and re-attempt to improve.
                    </div>
                ` : "")}
                <div class="quiz-progress">
                    <div class="quiz-meta">
                        <span class="quiz-subject">${subj.icon} ${escapeHtml(subj.name)}</span>
                        ${session.exam ? `<span class="${session.isMock ? 'mock-pill' : 'exam-pill'}">${session.isMock ? '📝 Mock' : '🎯 Practice'} · ${escapeHtml(session.exam.name)}</span>` : ""}
                        ${session.isMock ? `<span class="mock-timer-chip" id="mock-timer-chip">⏱ —:—</span>` : ""}
                        <span class="quiz-topic">${topic ? escapeHtml(topic.name) : ""}</span>
                    </div>
                    <div class="quiz-counter">Question ${num} / ${total}</div>
                    <div class="quiz-bar"><span style="width:${pct(num - 1, total)}%"></span></div>
                </div>
                <article class="question-card ${isLocked ? "is-locked" : ""}">
                    <div class="qtype-badge">${type === "mcq" ? "Multiple choice" : type === "long" ? "Extended response" : "Short answer"}</div>
                    <div class="question-prompt">${renderText(q.q)}</div>
                    ${renderQuestionDiagram(q.diagram)}
                    ${q.marks && !session.isMock ? `<div class="marks">[${q.marks} mark${q.marks === 1 ? "" : "s"}]</div>` : ""}
                    ${isLocked ? `<div class="locked-indicator">🔒 Answer locked — review only</div>` : ""}
                    <div class="answer-area" id="answer-area"></div>
                    ${hasQuestionAssist ? renderQuestionAssistBlock(q) : (q.help && !session.isMock ? renderHintHelpBlock(q) : "")}
                    <div class="feedback" id="feedback" aria-live="polite"></div>
                    <div class="quiz-controls">
                        <button type="button" class="ghost-btn" id="prev-btn" ${session.index === 0 ? "disabled" : ""}>← Prev</button>
                        <button type="button" class="primary-btn" id="next-btn">${isLastQuestion ? (session.isMock ? "Submit Exam 🏁" : "Finish") : "Next →"}</button>
                    </div>
                </article>
            </div>
            ${isMathsSubject(session.subjectId) && !session.isMock ? `<button type="button" id="calc-fab" class="calc-fab" title="Open calculator (C)">🧮</button>` : ""}
        `;

        renderAnswerArea(q, previous, isLocked);

        if (session.isMock) renderMockTimerChip();

        if (hasQuestionAssist) {
            wireQuestionAssist(q);
            if (questionAssistHintShown(q)) revealQuestionAssistHint(q, true);
        } else if (q.help && !session.isMock) {
            wireHintHelp(q);
            // If this question already has a session-stored reveal, show it
            const helpState = (session.helpStates && session.helpStates[keyOf(q)]) || {};
            if (helpState.hintRevealed) revealHint(q, true);
            if (helpState.helpRevealed) revealHelp(q, true);
            if (helpState.fullRevealed) revealFull(q, true);
        }
        const calcFab = document.getElementById("calc-fab");
        if (calcFab) calcFab.addEventListener("click", () => window.Calc && window.Calc.open());
        $("#prev-btn").addEventListener("click", () => {
            if (session.index > 0) {
                session.index--;
                renderCurrentQuestion(root);
            }
        });
        $("#next-btn").addEventListener("click", () => {
            commitAnswer(q);
            if (isLastQuestion) {
                finishQuiz(root);
            } else {
                session.index++;
                renderCurrentQuestion(root);
            }
        });
    }

    function renderAnswerArea(q, previous, isLocked) {
        const area = $("#answer-area");
        const subj = window.SUBJECT_DATA[session.subjectId];
        const type = questionType(q, subj);
        const k = keyOf(q);
        if (type === "mcq") {
            area.innerHTML = q.options.map((opt, i) => {
                const id = `opt-${k}-${i}`;
                const checked = previous && previous.user === i ? "checked" : "";
                const disabled = isLocked ? "disabled" : "";
                return `
                    <label class="option ${isLocked ? "is-locked" : ""}" for="${id}">
                        <input type="radio" name="opt-${k}" id="${id}" value="${i}" ${checked} ${disabled}>
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${renderText(opt)}</span>
                    </label>
                `;
            }).join("");
            if (!isLocked) {
                area.addEventListener("change", () => evaluateMCQ(q));
            }
            // Show feedback for previously answered questions (incl. locked ones in mocks where we still want answer recorded)
            if (previous && previous.user != null) {
                evaluateMCQ(q, true, isLocked);
            }
        } else {
            const value = previous && previous.userText ? previous.userText : "";
            const sampleGated = shouldGateSampleBehindHint(q);
            const sampleUnlocked = !sampleGated || !!(previous && previous.hintShown);
            const showSample = sampleUnlocked && !!(previous && previous.revealed);
            const ro = isLocked ? "readonly" : "";
            const aiKey = (state.settings && state.settings.geminiApiKey) || "";
            const ai = previous && previous.aiFeedback;
            // Always show the AI button on practice written questions so the
            // user can see at a glance that AI marking is available — clicking
            // it without a saved key sends them to Settings.
            const aiBtnLabel = aiKey
                ? (ai ? "🤖 Re-mark with AI" : "🤖 Get AI feedback")
                : "🤖 Set up AI marking";
            area.innerHTML = `
                <textarea id="written-answer" rows="${type === "long" ? 12 : 6}" ${ro} placeholder="${session.isMock ? "Type your response. Once you press Next it will be locked." : "Plan and write your response here. (Saved automatically.)"}">${escapeHtml(value)}</textarea>
                ${session.isMock ? `` : `
                    <div class="written-actions">
                        ${sampleUnlocked ? `<button type="button" class="ghost-btn" id="reveal-sample">${showSample ? "Hide" : "Show"} sample answer</button>` : ""}
                        <button type="button" class="ghost-btn" id="self-correct">${previous && previous.correct ? "Marked correct ✓" : "I got this right"}</button>
                        <button type="button" class="ai-btn ${aiKey ? "" : "ai-btn-needs-key"}" id="ai-mark-btn">${aiBtnLabel}</button>
                    </div>
                    ${sampleUnlocked ? "" : `<p class="sample-lock-note">💡 Click Hint to unlock the sample answer for this question.</p>`}
                    ${ai ? renderAIFeedback(ai, q.marks) : ""}
                    <div class="sample" id="sample-block" ${showSample ? "" : "hidden"}>
                        <h4>Sample / marker's notes</h4>
                        <p>${renderText(q.sample)}</p>
                    </div>
                `}
                ${session.isMock && isLocked ? `
                    <div class="mock-self-mark">
                        <button type="button" class="ghost-btn" id="self-correct">${previous && previous.correct ? "✓ Marked correct" : "Mark this correct"}</button>
                        <button type="button" class="ghost-btn" id="reveal-sample">${showSample ? "Hide" : "Show"} marker's sample</button>
                    </div>
                    <div class="sample" id="sample-block" ${showSample ? "" : "hidden"}>
                        <h4>Marker's sample answer</h4>
                        <p>${renderText(q.sample)}</p>
                    </div>
                ` : ""}
            `;
            const ta = $("#written-answer");
            if (ta && !isLocked) {
                let saveTimer = null;
                ta.addEventListener("input", e => {
                    const ans = ensureAnswerSnapshot(q);
                    ans.userText = e.target.value;
                    // Debounce persistence so we don't write to localStorage on every keystroke.
                    if (saveTimer) clearTimeout(saveTimer);
                    saveTimer = setTimeout(() => persistAnswerForExam(q, ans), 700);
                });
                ta.addEventListener("blur", () => {
                    if (session.answers[k]) persistAnswerForExam(q, session.answers[k]);
                });
            }
            const revealBtn = $("#reveal-sample");
            if (revealBtn) {
                revealBtn.addEventListener("click", () => {
                    const ans = ensureAnswerSnapshot(q);
                    ans.revealed = !ans.revealed;
                    persistAnswerForExam(q, ans);
                    renderAnswerArea(q, ans, isLocked);
                });
            }
            const selfBtn = $("#self-correct");
            if (selfBtn) {
                selfBtn.addEventListener("click", () => {
                    const ans = ensureAnswerSnapshot(q);
                    if (!ans.userText) ans.userText = ($("#written-answer") || {}).value || "";
                    ans.correct = !ans.correct;
                    if (ans.correct) {
                        mascotPopIn({ expression: "cheering", message: pickPhrase("correct") });
                    }
                    persistAnswerForExam(q, ans);
                    renderAnswerArea(q, ans, isLocked);
                });
            }
            // 🤖 AI feedback button (practice exams only, when API key set)
            const aiBtn = $("#ai-mark-btn");
            if (aiBtn && !session.isMock) {
                aiBtn.addEventListener("click", () => requestAIFeedback(q, isLocked));
            }
        }
    }

    function pickPhrase(kind) {
        const list = (activeMascotApi().phrases && activeMascotApi().phrases[kind]) || [""];
        return list[Math.floor(Math.random() * list.length)];
    }

    function evaluateMCQ(q, silent, isLocked) {
        const k = keyOf(q);
        const selected = $$('input[name="opt-' + k + '"]:checked')[0];
        if (!selected) return;
        const idx = parseInt(selected.value, 10);
        const correct = idx === q.answer;

        // Lock-on-click: in any lock mode (practice or mock), placing the
        // answer locks it for the rest of this attempt.
        const willLock = !silent && session.isLockMode;
        const prevLocked = session.answers[k] && session.answers[k].locked;
        const nowLocked = isLocked || prevLocked || willLock;

        // Mocks suppress feedback until the exam ends; practice shows it on lock.
        const showFeedback = !session.isMock;

        $$(".option").forEach((label, i) => {
            label.classList.remove("option-correct", "option-incorrect", "option-revealed", "option-selected");
            if (showFeedback) {
                if (i === q.answer) label.classList.add("option-revealed");
                if (i === idx) label.classList.add(correct ? "option-correct" : "option-incorrect");
            } else if (i === idx) {
                label.classList.add("option-selected");
            }
            if (nowLocked) {
                label.classList.add("is-locked");
                const inp = label.querySelector('input');
                if (inp) inp.disabled = true;
            }
        });

        const fb = $("#feedback");
        if (showFeedback) {
            fb.innerHTML = `
                <div class="feedback-box ${correct ? "good" : "bad"}">
                    <strong>${correct ? "Correct!" : "Not quite."}</strong>
                    <p>${renderText(q.explain || "")}</p>
                </div>
            `;
        } else if (nowLocked) {
            fb.innerHTML = `<div class="feedback-box neutral"><strong>🔒 Answer locked.</strong><p>You'll see feedback when the mock is finished.</p></div>`;
        } else {
            fb.innerHTML = "";
        }

        session.answers[k] = Object.assign({}, session.answers[k] || {}, { user: idx, correct, locked: nowLocked });

        // Wrong-answer reveal: if the player just locked in a wrong answer on a
        // Maths-style question with help data, show the full solution panel.
        if (willLock && !correct && !session.isMock && q.help) {
            revealFull(q, true);
        }

        // Show the locked indicator dynamically if it wasn't there before.
        if (willLock) {
            const card = document.querySelector(".question-card");
            if (card && !card.classList.contains("is-locked")) {
                card.classList.add("is-locked");
                const indicator = document.createElement("div");
                indicator.className = "locked-indicator";
                indicator.textContent = "🔒 Answer locked — review only";
                const promptEl = card.querySelector(".question-prompt");
                if (promptEl && !card.querySelector(".locked-indicator")) {
                    promptEl.parentNode.insertBefore(indicator, promptEl.nextSibling);
                }
            }
        }

        if (!silent && !session.isMock) {
            if (correct) {
                session.sessionStreak++;
                mascotPopIn({
                    expression: "cheering",
                    message: session.sessionStreak >= 3 ? pickPhrase("streak") : pickPhrase("correct")
                });
            } else {
                session.sessionStreak = 0;
                mascotPopIn({
                    expression: "thinking",
                    message: pickPhrase("wrong")
                });
            }
        }
    }

    /* ---------- Hint / Help / Full reveal (Maths) ---------- */

    function renderHintHelpBlock(q) {
        return `
            <div class="hint-help">
                <button type="button" class="help-btn hint-btn" id="hint-btn">💡 Hint</button>
                <button type="button" class="help-btn help-btn-explain" id="help-btn" disabled>🔍 Help <small>(after Hint)</small></button>
                <div class="hint-panel" id="hint-panel" hidden></div>
                <div class="help-panel help-panel-working" id="help-panel" hidden></div>
                <div class="help-panel reveal-panel" id="reveal-panel" hidden></div>
            </div>
        `;
    }

    function wireHintHelp(q) {
        const k = keyOf(q);
        if (!session.helpStates) session.helpStates = {};
        if (!session.helpStates[k]) session.helpStates[k] = { hintRevealed: false, helpRevealed: false, fullRevealed: false };
        const hintBtn = $("#hint-btn");
        const helpBtn = $("#help-btn");
        if (hintBtn) hintBtn.addEventListener("click", () => revealHint(q, false));
        if (helpBtn) helpBtn.addEventListener("click", () => revealHelp(q, false));
    }

    function helpStateFor(q) {
        if (!session.helpStates) session.helpStates = {};
        const k = keyOf(q);
        if (!session.helpStates[k]) session.helpStates[k] = { hintRevealed: false, helpRevealed: false, fullRevealed: false };
        return session.helpStates[k];
    }

    function revealHint(q, silent) {
        const help = q.help || {};
        const panel = $("#hint-panel");
        if (panel && help.rule) {
            panel.innerHTML = `<p class="help-rule"><strong>Hint:</strong> ${renderText(help.rule)}</p>`;
            panel.hidden = false;
        }
        const helpBtn = $("#help-btn");
        if (helpBtn) helpBtn.disabled = false;
        const hintBtn = $("#hint-btn");
        if (hintBtn) {
            hintBtn.disabled = true;
            hintBtn.textContent = "💡 Hint shown";
        }
        const st = helpStateFor(q);
        st.hintRevealed = true;
    }

    function revealHelp(q, silent) {
        const help = q.help || {};
        const steps = help.steps || [];
        // Working steps = all but the last (the last typically contains the answer)
        const working = steps.length > 1 ? steps.slice(0, -1) : steps.slice();
        const panel = $("#help-panel");
        if (panel && working.length) {
            panel.innerHTML = `
                <p class="help-label"><strong>Working steps:</strong></p>
                <ol class="help-steps">${working.map(s => `<li>${renderText(s)}</li>`).join("")}</ol>
                <p class="help-tip">Try the calculation yourself before peeking at the answer.</p>
            `;
            panel.hidden = false;
        }
        const helpBtn = $("#help-btn");
        if (helpBtn) {
            helpBtn.disabled = true;
            helpBtn.textContent = "🔍 Help shown";
        }
        const st = helpStateFor(q);
        st.helpRevealed = true;
    }

    function revealFull(q, silent) {
        const help = q.help || {};
        const steps = help.steps || [];
        const lastStep = steps.length ? steps[steps.length - 1] : "";
        const panel = $("#reveal-panel");
        if (panel) {
            panel.innerHTML = `
                <p class="help-label"><strong>Full solution:</strong></p>
                ${help.rule ? `<p class="help-rule">${renderText(help.rule)}</p>` : ""}
                ${steps.length ? `<ol class="help-steps">${steps.map(s => `<li>${renderText(s)}</li>`).join("")}</ol>` : ""}
                ${q.explain ? `<p class="help-explain">${renderText(q.explain)}</p>` : ""}
            `;
            panel.hidden = false;
        }
        const st = helpStateFor(q);
        st.fullRevealed = true;
    }

    function commitAnswer(q) {
        const subjState = state.subjects[session.subjectId];
        const k = keyOf(q);
        const ans = session.answers[k];
        if (!ans || !hasMeaningfulAnswer(ans)) {
            // In any lock-mode (practice OR mock), an unanswered question gets locked on Next.
            if (session.isLockMode) {
                session.answers[k] = Object.assign({}, ans || {}, { locked: true, correct: false });
                persistAnswerForExam(q, session.answers[k]);
            }
            return;
        }
        // Lock answers in any lock-mode (practice OR mock).
        if (session.isLockMode) ans.locked = true;
        // Persist to examProgress so re-launch can preload.
        persistAnswerForExam(q, ans);

        const wasCorrect = !!ans.correct;
        // Per-question history (subjState.attempts) is keyed by the canonical q.id
        // so it aggregates across all duplicate positions and exam re-attempts.
        const prior = subjState.attempts[q.id];
        const wasNew = !prior;
        subjState.attempts[q.id] = {
            answer: ans.user != null ? ans.user : (ans.userText || ""),
            correct: wasCorrect,
            attempts: (prior ? prior.attempts : 0) + 1
        };
        if (wasNew) state.stats.totalAnswered++;
        if (wasCorrect && (!prior || !prior.correct)) state.stats.totalCorrect++;
        if (!wasCorrect && prior && prior.correct) state.stats.totalCorrect = Math.max(0, state.stats.totalCorrect - 1);

        if (wasCorrect) {
            state.stats.currentStreak++;
            if (state.stats.currentStreak > state.stats.bestStreak) state.stats.bestStreak = state.stats.currentStreak;
        } else {
            state.stats.currentStreak = 0;
        }
        saveState();
    }

    function grantPerfectThemeTicket(themeId, examId) {
        const normalizedTheme = normalizeThemePreference(themeId);
        const collectionState = collectionStateForTheme(normalizedTheme);
        if (!collectionState.perfectExams[examId]) {
            collectionState.perfectExams[examId] = true;
            collectionState.claimTickets = (collectionState.claimTickets || 0) + 1;
            return true;
        }
        return false;
    }

    function ticketBannerMarkup(themeId) {
        const config = normalizeThemePreference(themeId) === "animals"
            ? {
                label: "Pet ticket earned!",
                message: "You scored 100% - pick a new pet for your haven.",
                cta: "Claim pet 🐾"
            }
            : {
                label: "Cat ticket earned!",
                message: "You scored 100% - pick a new cat for your clan.",
                cta: "Claim cat 🐾"
            };
        return `
            <div class="ticket-banner">
                <div class="ticket-icon">🎟️</div>
                <div>
                    <strong>${config.label}</strong>
                    <p>${config.message}</p>
                </div>
                <a class="primary-btn pulse-btn" href="#/clan/claim">${config.cta}</a>
            </div>
        `;
    }

    function finishQuiz(root) {
        // Stop the timer first so it can't fire again during marking
        stopMockTimerInterval();
        if (session && session.isMock) {
            // Bake current elapsed into elapsedMs
            const ep = state.subjects[session.subjectId].examProgress[session.mode];
            if (ep && ep.timer && ep.timer.lastResumeAt) {
                ep.timer.elapsedMs += Date.now() - new Date(ep.timer.lastResumeAt).getTime();
                ep.timer.lastResumeAt = null;
            }
        }
        // For Mock Exams, take the dedicated Exam Report path (with AI marking).
        if (session && session.isMock) {
            return renderExamReport(root);
        }

        const total = session.questions.length;
        let correct = 0;
        session.questions.forEach(q => {
            const a = session.answers[keyOf(q)];
            if (a && a.correct) correct++;
        });
        const ratio = total ? correct / total : 0;
        const subj = window.SUBJECT_DATA[session.subjectId];
        const subjState = state.subjects[session.subjectId];

        const previousBest = subjState.bestScores[session.mode] || 0;
        const isNewBest = ratio > previousBest;
        const previousAttempts = (subjState.quizSessions || []).filter(s => s.mode === session.mode).length;

        subjState.quizSessions.push({
            mode: session.mode,
            score: correct,
            total,
            date: new Date().toISOString()
        });
        if (isNewBest) subjState.bestScores[session.mode] = ratio;

        // Persist all answers + final state into examProgress so re-launch preloads them.
        if (session.exam) {
            const ep = ensureExamProgress(session.subjectId, session.mode);
            ep.answers = {};
            for (const q of session.questions) {
                const a = session.answers[keyOf(q)];
                if (a) ep.answers[keyOf(q)] = Object.assign({}, a);
            }
            ep.finished = true;
            ep.completedAt = new Date().toISOString();
            ep.lastScore = ratio;
            ep.lastCorrect = correct;
            ep.lastTotal = total;
            // Clear any timer for mocks (they're not in-progress anymore)
            if (ep.timer) ep.timer.lastResumeAt = null;
        }

        // Perfect scores grant a ticket for the currently active theme, tracked
        // separately so switching themes never blocks future rewards.
        const isPerfect = total > 0 && correct === total;
        let grantedTicket = false;
        if (isPerfect) {
            grantedTicket = grantPerfectThemeTicket(currentThemeId(), session.mode);
        }
        saveState();

        const mascot = mascotCelebrate(ratio);
        const examName = session.exam ? session.exam.name : "Quiz";
        const isMock = !!session.isMock;
        const grade = gradeFor(ratio);
        const ceremonyTitle = ceremonyTitleFor(ratio, isMock, isNewBest);
        const ceremonySub = ceremonySubFor(ratio, isMock, isNewBest, previousAttempts, previousBest);

        // Score breakdown by question type
        const breakdown = breakdownByType(session.questions, session.answers, subj);

        root.innerHTML = `
            <section class="results-hero ${isMock ? "is-mock" : ""} grade-${grade.letter.toLowerCase()}">
                ${ratio >= 0.9 ? renderConfetti() : ""}
                <div class="results-cat-wrap">
                    <div class="results-cat">${mascotSvg(mascot.expression, mascot.theme)}</div>
                    ${isNewBest ? `<div class="new-best-badge">🏆 NEW BEST!</div>` : ""}
                </div>
                <div class="results-headline">
                    ${isMock ? `<div class="mock-stamp">📝 ${escapeHtml(examName)}</div>` : `<div class="practice-stamp">🎯 ${escapeHtml(examName)}</div>`}
                    <h1 class="ceremony-title">${escapeHtml(ceremonyTitle)}</h1>
                    <p class="ceremony-sub">${escapeHtml(ceremonySub)}</p>
                </div>

                <div class="score-display">
                    <div class="score-grade" style="--grade-color:${grade.color}">${grade.letter}</div>
                    <div class="score-meta">
                        <div class="score-percent" id="score-counter" data-target="${pct(correct, total)}">0%</div>
                        <div class="score-fraction"><strong>${correct}</strong> / ${total} correct</div>
                        <div class="score-bar"><span style="width:${pct(correct, total)}%"></span></div>
                    </div>
                </div>

                <div class="results-side-by-side">
                    <div class="best-card">
                        <div class="best-card-label">Your best</div>
                        <div class="best-card-num">${Math.round((isNewBest ? ratio : previousBest) * 100)}%</div>
                        <div class="best-card-sub">${isNewBest ? "You just set this!" : (previousBest ? "Beat it next time!" : "First attempt!")}</div>
                    </div>
                    <div class="best-card">
                        <div class="best-card-label">Attempts</div>
                        <div class="best-card-num">${previousAttempts + 1}</div>
                        <div class="best-card-sub">${previousAttempts === 0 ? "First attempt!" : "Keep practising!"}</div>
                    </div>
                    <div class="best-card breakdown-card">
                        <div class="best-card-label">Breakdown</div>
                        <div class="breakdown-rows">
                            ${breakdown.mcq.total ? `<div><span>MCQ</span> <strong>${breakdown.mcq.correct}/${breakdown.mcq.total}</strong></div>` : ""}
                            ${breakdown.short.total ? `<div><span>Short</span> <strong>${breakdown.short.correct}/${breakdown.short.total}</strong></div>` : ""}
                            ${breakdown.long.total ? `<div><span>Long</span> <strong>${breakdown.long.correct}/${breakdown.long.total}</strong></div>` : ""}
                        </div>
                    </div>
                </div>

                ${grantedTicket ? ticketBannerMarkup(currentThemeId()) : ""}

                <div class="results-actions">
                    <button type="button" class="primary-btn pulse-btn" id="retake-quiz-btn">🔁 Retake ${isMock ? "Mock" : "Practice"}</button>
                    <a class="ghost-btn" href="#/subject/${session.subjectId}">← Back to ${escapeHtml(subj.name)}</a>
                    <a class="ghost-btn" href="#/">🏠 Home</a>
                    <a class="ghost-btn" href="#/clan">🐾 My Pets</a>
                </div>

                <details class="results-detail">
                    <summary>📋 Review every question</summary>
                    <ol class="results-list">
                        ${session.questions.map((q, i) => {
                            const a = session.answers[keyOf(q)] || {};
                            const ok = a.correct;
                            const userBlock = a.user != null
                                ? `<div class="review-user">Your answer: ${escapeHtml(q.options[a.user] || "")}</div>`
                                : a.userText
                                    ? `<div class="review-user">Your response: <em>${escapeHtml(a.userText.slice(0, 240))}${a.userText.length > 240 ? "…" : ""}</em></div>`
                                    : `<div class="review-user muted">No response.</div>`;
                            return `<li class="${ok ? "good" : "bad"}">
                                <div class="review-q"><span class="review-num">Q${i + 1}.</span> ${renderText(q.q)}</div>
                                ${renderQuestionDiagram(q.diagram)}
                                ${userBlock}
                                ${q.options ? `<div class="review-correct">Correct: ${escapeHtml(q.options[q.answer])}</div>` : ""}
                                ${q.explain ? `<div class="review-explain">${renderText(q.explain)}</div>` : ""}
                                ${q.sample ? `<div class="review-sample"><strong>Sample:</strong> ${renderText(q.sample)}</div>` : ""}
                            </li>`;
                        }).join("")}
                    </ol>
                </details>
            </section>
        `;

        // Animate score count-up
        animateScoreCounter();

        // Pop in some celebration cats from both sides
        setTimeout(() => mascotPopIn({
            expression: mascot.expression, theme: mascot.theme, message: mascot.message,
            duration: 3500, side: "left"
        }), 400);
        if (ratio >= 0.7) {
            setTimeout(() => mascotPopIn({
                expression: ratio >= 0.9 ? "cheering" : "proud",
                theme: activeMascotApi().pickTheme ? activeMascotApi().pickTheme() : undefined,
                message: isNewBest ? "New record! 🏆" : pickPhrase("finish"),
                duration: 3200, side: "right"
            }), 1100);
        }
        if (isNewBest) {
            setTimeout(() => mascotPopIn({
                expression: "cheering",
                theme: activeMascotApi().pickTheme ? activeMascotApi().pickTheme() : undefined,
                message: "Personal best smashed!",
                duration: 3000, side: "left"
            }), 2200);
        }

        wireRetakeButton(root);
    }

    /* ---------- Mock Exam Report ---------- */

    async function renderExamReport(root) {
        const subj = window.SUBJECT_DATA[session.subjectId];
        const subjState = state.subjects[session.subjectId];
        const ep = ensureExamProgress(session.subjectId, session.mode);
        const apiKey = (state.settings && state.settings.geminiApiKey) || "";

        // Identify written questions (no q.options) and queue AI marking for any
        // that have a response and don't already have AI feedback cached.
        const writtenQs = session.questions.filter(q => !q.options);
        const toMark = apiKey ? writtenQs.filter(q => {
            const a = session.answers[keyOf(q)] || {};
            return (a.userText || "").trim().length > 0 && !a.aiFeedback;
        }) : [];

        // Show interstitial
        root.innerHTML = `
            <section class="results-hero is-mock grade-c">
                <div class="results-cat-wrap">
                    <div class="results-cat">${mascotSvg("thinking")}</div>
                </div>
                <div class="results-headline">
                    <div class="mock-stamp">📝 ${escapeHtml(session.exam ? session.exam.name : "Mock Exam")}</div>
                    <h1 class="ceremony-title">Marking your paper…</h1>
                    <p class="ceremony-sub" id="exam-marking-progress">${apiKey ? `🤖 AI is reviewing your written answers (0 / ${toMark.length})` : "Compiling your results…"}</p>
                </div>
            </section>
        `;

        // Run AI marking in sequence (concurrency 1 to be polite to free tier).
        let done = 0;
        for (const q of toMark) {
            try {
                const result = await window.AI.markAnswer({
                    apiKey,
                    question: questionTextForAI(q),
                    sample: q.sample || "",
                    response: (session.answers[keyOf(q)] || {}).userText || "",
                    marks: q.marks || 4,
                    subjectName: subj.name
                });
                const a = session.answers[keyOf(q)] || {};
                a.aiFeedback = Object.assign({}, result, { markedAt: new Date().toISOString() });
                // The AI's call sets the "correct" flag too — but Harper can override on the report.
                if (result.assessment === "correct") a.correct = true;
                session.answers[keyOf(q)] = a;
                ep.answers[keyOf(q)] = Object.assign({}, a);
                saveState();
            } catch (e) {
                const a = session.answers[keyOf(q)] || {};
                a.aiFeedback = { assessment: "partial", suggestedMark: 0, feedback: "AI marking failed: " + (e.message || ""), missingPoints: [] };
                session.answers[keyOf(q)] = a;
            }
            done++;
            const prog = document.getElementById("exam-marking-progress");
            if (prog) prog.textContent = `🤖 AI is reviewing your written answers (${done} / ${toMark.length})`;
        }

        // Compute per-section scores
        const mcqQs = session.questions.filter(q => q.options);
        const writtenQsAll = session.questions.filter(q => !q.options);
        const mcqCorrect = mcqQs.reduce((n, q) => n + ((session.answers[keyOf(q)] || {}).correct ? 1 : 0), 0);
        const mcqMarks = mcqQs.length;
        let writtenAchieved = 0, writtenMax = 0;
        for (const q of writtenQsAll) {
            const a = session.answers[keyOf(q)] || {};
            const max = q.marks || 4;
            writtenMax += max;
            if (a.correct) {
                writtenAchieved += max;
            } else if (a.aiFeedback && typeof a.aiFeedback.suggestedMark === "number") {
                writtenAchieved += Math.max(0, Math.min(max, a.aiFeedback.suggestedMark));
            }
        }
        const totalAchieved = mcqCorrect + writtenAchieved;
        const totalMarks = mcqMarks + writtenMax;
        const ratio = totalMarks ? totalAchieved / totalMarks : 0;

        // Persist results
        const previousBest = subjState.bestScores[session.mode] || 0;
        const isNewBest = ratio > previousBest;
        if (isNewBest) subjState.bestScores[session.mode] = ratio;
        subjState.quizSessions.push({
            mode: session.mode,
            score: totalAchieved,
            total: totalMarks,
            date: new Date().toISOString()
        });
        ep.finished = true;
        ep.completedAt = new Date().toISOString();
        ep.lastScore = ratio;
        ep.lastCorrect = totalAchieved;
        ep.lastTotal = totalMarks;

        // Time used
        const timeMs = (ep.timer && ep.timer.elapsedMs) || 0;
        const tm = Math.floor(timeMs / 60000);
        const ts = Math.floor((timeMs % 60000) / 1000);
        const durationMin = ep.timer ? Math.floor(ep.timer.durationMs / 60000) : 60;
        const autoSubmitted = ep.timer && ep.timer.autoSubmitted;
        const grantedTicket = totalMarks > 0 && totalAchieved === totalMarks
            ? grantPerfectThemeTicket(currentThemeId(), session.mode)
            : false;
        saveState();

        // Render the report
        const grade = gradeFor(ratio);
        const reviewItems = session.questions.map((q, i) => renderReportItem(q, i, session.answers[keyOf(q)] || {})).join("");
        const reportMascot = mascotCelebrate(ratio);

        root.innerHTML = `
            <section class="exam-report is-mock grade-${grade.letter.toLowerCase()}">
                ${ratio >= 0.9 ? renderConfetti() : ""}
                <div class="results-cat-wrap">
                    <div class="results-cat">${mascotSvg(reportMascot.expression, reportMascot.theme)}</div>
                    ${isNewBest ? `<div class="new-best-badge">🏆 NEW BEST!</div>` : ""}
                </div>
                <div class="results-headline">
                    <div class="mock-stamp">📝 ${escapeHtml(session.exam ? session.exam.name : "Mock Exam")} · Exam Report</div>
                    <h1 class="ceremony-title">${isNewBest ? "🏆 New personal best!" : "Exam complete"}</h1>
                    <p class="ceremony-sub">${autoSubmitted ? "Time ran out — auto-submitted." : "Submitted by you."} You used <strong>${tm}:${String(ts).padStart(2, "0")}</strong> of ${durationMin}:00.</p>
                </div>

                <div class="report-summary">
                    <div class="report-card">
                        <div class="report-card-label">Multiple choice (auto-graded)</div>
                        <div class="report-card-value">${mcqCorrect} / ${mcqMarks}</div>
                    </div>
                    <div class="report-card">
                        <div class="report-card-label">Written (AI-suggested)</div>
                        <div class="report-card-value">${writtenAchieved} / ${writtenMax}</div>
                    </div>
                    <div class="report-card report-card-total">
                        <div class="report-card-label">Estimated total</div>
                        <div class="report-card-value">${totalAchieved} / ${totalMarks}</div>
                        <div class="report-card-pct">${Math.round(ratio * 100)}%</div>
                    </div>
                </div>

                <div class="results-actions">
                    <button type="button" class="primary-btn pulse-btn" id="retake-quiz-btn">🔁 Retake</button>
                    <a class="ghost-btn" href="#/subject/${session.subjectId}">← Back to ${escapeHtml(subj.name)}</a>
                    <a class="ghost-btn" href="#/">🏠 Home</a>
                    <a class="ghost-btn" href="#/clan">🐾 My Pets</a>
                </div>

                ${grantedTicket ? ticketBannerMarkup(currentThemeId()) : ""}

                <details class="results-detail" open>
                    <summary>📋 Detailed report</summary>
                    <ol class="report-list">${reviewItems}</ol>
                </details>
            </section>
        `;

        // Wire override toggles for the per-question "I got this right"
        $$(".report-override-toggle").forEach(btn => {
            btn.addEventListener("click", () => {
                const qkey = btn.dataset.qkey;
                const a = session.answers[qkey];
                if (!a) return;
                a.correct = !a.correct;
                ep.answers[qkey] = Object.assign({}, a);
                saveState();
                // Re-render the report so totals update
                renderExamReport(root);
            });
        });

        wireRetakeButton(root);
    }

    function renderReportItem(q, i, a) {
        const isMcq = !!q.options;
        const correct = !!a.correct;
        const k = keyOf(q);
        if (isMcq) {
            const userIdx = a.user;
            const userTxt = userIdx != null && q.options[userIdx] ? escapeHtml(q.options[userIdx]) : "<em>No answer</em>";
            return `<li class="${correct ? "good" : "bad"}">
                <div class="review-q"><span class="review-num">Q${i + 1}.</span> ${renderText(q.q)}</div>
                ${renderQuestionDiagram(q.diagram)}
                <div class="review-user">Your answer: ${userTxt}</div>
                <div class="review-correct">Correct: ${escapeHtml(q.options[q.answer])}</div>
                ${q.explain ? `<div class="review-explain">${renderText(q.explain)}</div>` : ""}
            </li>`;
        }
        // Written
        const max = q.marks || 4;
        const ai = a.aiFeedback;
        const aiBlock = ai ? renderAIFeedback(ai, max) : `<div class="ai-feedback-card ai-partial"><strong>No AI feedback</strong> — add a Gemini key in Settings to enable AI marking.</div>`;
        return `<li class="${correct ? "good" : "bad"}">
            <div class="review-q"><span class="review-num">Q${i + 1}.</span> ${renderText(q.q)} <span class="review-marks">[${max} marks]</span></div>
            ${renderQuestionDiagram(q.diagram)}
            <div class="review-user">Your response: <em>${escapeHtml((a.userText || "").slice(0, 600))}${(a.userText || "").length > 600 ? "…" : ""}</em></div>
            ${aiBlock}
            <div class="report-override">
                <button type="button" class="ghost-btn report-override-toggle" data-qkey="${k}">${correct ? "✓ Marked correct (override AI)" : "I think I got this right"}</button>
            </div>
            ${q.sample ? `<details class="review-sample-collapsible"><summary>Sample / marker's notes</summary><p>${renderText(q.sample)}</p></details>` : ""}
        </li>`;
    }

    function gradeFor(ratio) {
        if (ratio >= 0.9) return { letter: "A", color: "#2a9d8f" };
        if (ratio >= 0.75) return { letter: "B", color: "#43aa8b" };
        if (ratio >= 0.6) return { letter: "C", color: "#e9c46a" };
        if (ratio >= 0.4) return { letter: "D", color: "#f4a261" };
        return { letter: "E", color: "#e76f51" };
    }

    function ceremonyTitleFor(ratio, isMock, isNewBest) {
        if (isNewBest && ratio >= 0.9) return currentThemeId() === "animals" ? "🏆 Wild perfection!" : "🏆 PURR-FECTION!";
        if (isNewBest) return "🏆 New personal best!";
        if (ratio >= 0.95) return currentThemeId() === "animals" ? "Pawsome - virtually flawless!" : "Pawsome - virtually flawless!";
        if (ratio >= 0.85) return currentThemeId() === "animals" ? "Wildly good work!" : "Meow-velous work!";
        if (ratio >= 0.7) return currentThemeId() === "animals" ? "Pet-tastic effort!" : "Cat-tastic effort!";
        if (ratio >= 0.5) return "You're getting there!";
        if (ratio > 0) return currentThemeId() === "animals" ? "Don't worry - every retry is progress." : "Don't fur-get - every retry is progress.";
        return currentThemeId() === "animals" ? "Take a breather, then go again." : "Take a cat-nap, then go again.";
    }

    function ceremonySubFor(ratio, isMock, isNewBest, previousAttempts, previousBest) {
        if (isMock && previousAttempts === 0) return "First mock done — now you know what to expect on exam day.";
        if (isMock && isNewBest) return `You beat your previous best of ${Math.round(previousBest * 100)}%. Onwards!`;
        if (isMock) return `Best so far: ${Math.round(previousBest * 100)}%. Have another go to beat it.`;
        if (ratio >= 0.9) return "Outstanding — you really know this material.";
        if (ratio >= 0.7) return "Solid grasp — review the misses and try again.";
        if (ratio >= 0.5) return "Good effort — let's tighten up a few topics.";
        return "These are tricky! Open the help on each one and retake when you're ready.";
    }

    function breakdownByType(questions, answers, subj) {
        const longSet = new Set((subj.long || []).map(q => q.id));
        const shortSet = new Set((subj.short || []).map(q => q.id));
        const out = { mcq: { correct: 0, total: 0 }, short: { correct: 0, total: 0 }, long: { correct: 0, total: 0 } };
        for (const q of questions) {
            const a = answers[q.id] || {};
            let bucket = "mcq";
            if (longSet.has(q.id)) bucket = "long";
            else if (shortSet.has(q.id)) bucket = "short";
            else if (!q.options) bucket = q.marks && q.marks > 6 ? "long" : "short";
            out[bucket].total++;
            if (a.correct) out[bucket].correct++;
        }
        return out;
    }

    function renderConfetti() {
        const pieces = [];
        const colors = ["#ff7f51", "#ff9b85", "#ffd166", "#ffe88a", "#9b5de5", "#43aa8b", "#5fcfbf", "#e07a3a"];
        for (let i = 0; i < 50; i++) {
            const left = Math.random() * 100;
            const delay = Math.random() * 1.4;
            const duration = 2 + Math.random() * 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = 6 + Math.random() * 8;
            const rotate = Math.floor(Math.random() * 360);
            pieces.push(`<span class="confetti-piece" style="left:${left}%;animation-delay:${delay}s;animation-duration:${duration}s;background:${color};width:${size}px;height:${size * 1.6}px;transform:rotate(${rotate}deg)"></span>`);
        }
        return `<div class="confetti">${pieces.join("")}</div>`;
    }

    function animateScoreCounter() {
        const el = document.getElementById("score-counter");
        if (!el) return;
        const target = parseInt(el.dataset.target, 10) || 0;
        const startTs = performance.now();
        const duration = 900;
        function step(t) {
            const elapsed = t - startTs;
            const progress = Math.min(1, elapsed / duration);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);
            el.textContent = value + "%";
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    /* ---------- Progress view ---------- */

    let progressCalendarMonthKey = "";

    function pluralize(count, singular, plural) {
        return count === 1 ? singular : (plural || singular + "s");
    }

    function calendarDateKey(date) {
        return [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, "0"),
            String(date.getDate()).padStart(2, "0")
        ].join("-");
    }

    function calendarMonthKey(date) {
        return [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, "0")
        ].join("-");
    }

    function parseCalendarMonthKey(monthKey) {
        const match = /^(\d{4})-(\d{2})$/.exec(String(monthKey || ""));
        if (!match) return null;
        const year = parseInt(match[1], 10);
        const monthIndex = parseInt(match[2], 10) - 1;
        if (monthIndex < 0 || monthIndex > 11) return null;
        return { year, monthIndex };
    }

    function formatCalendarMonthLabel(monthKey) {
        const parsed = parseCalendarMonthKey(monthKey);
        if (!parsed) return "";
        return new Date(parsed.year, parsed.monthIndex, 1).toLocaleDateString(undefined, {
            month: "long",
            year: "numeric"
        });
    }

    function quizSessionDisplay(subj, entry) {
        const mode = entry && entry.mode ? entry.mode : "practice";
        const exam = subj ? findExam(subj, mode) : null;
        if (exam) {
            return {
                kind: exam.isMock ? "Mock exam" : "Practice quiz",
                label: exam.name || mode
            };
        }
        if (mode === "mixed") return { kind: "Quiz", label: "Mixed practice" };
        if (mode === "mcq") return { kind: "Quiz", label: "Multiple choice" };
        if (mode === "short") return { kind: "Quiz", label: "Short answer" };
        if (mode === "long") return { kind: "Quiz", label: "Extended response" };
        if (subj && mode.indexOf("topic-") === 0) {
            const topicId = mode.slice("topic-".length);
            const topic = (subj.topics || []).find(item => item.id === topicId);
            if (topic) return { kind: "Quiz", label: topic.name };
        }
        return { kind: "Quiz", label: mode };
    }

    function buildProgressCalendar(yearId, subjectIds) {
        const sessions = [];
        subjectIds.forEach(subjectId => {
            const subj = window.SUBJECT_DATA[subjectId];
            const subjState = state.subjects[subjectId] || { quizSessions: [] };
            (subjState.quizSessions || []).forEach(entry => {
                if (!entry || typeof entry.mode !== "string") return;
                const isPractice = entry.mode.indexOf("exam-") === 0;
                const isMock = entry.mode.indexOf("mock-") === 0;
                if (!isPractice && !isMock) return;
                const when = new Date(entry.date || "");
                if (Number.isNaN(when.getTime())) return;
                const exam = subj ? findExam(subj, entry.mode) : null;
                sessions.push({
                    kind: isMock ? "mock" : "practice",
                    date: when,
                    dateKey: calendarDateKey(when),
                    monthKey: calendarMonthKey(when),
                    uniqueKey: `${subjectId}:${entry.mode}`,
                    label: exam && exam.name ? exam.name : entry.mode,
                    subjectName: subj ? subj.name : subjectId
                });
            });
        });
        sessions.sort((a, b) => a.date.getTime() - b.date.getTime());
        const examEvents = examDayEventsForSubjects(yearId, subjectIds);

        const currentMonth = calendarMonthKey(new Date());
        const monthKeys = Array.from(new Set(sessions.map(item => item.monthKey).concat(examEvents.map(item => item.monthKey), currentMonth))).sort();
        const countsByDate = Object.create(null);
        const countsByMonth = Object.create(null);
        const examsByDate = Object.create(null);
        const examCountsByMonth = Object.create(null);

        sessions.forEach(item => {
            const dateBucket = countsByDate[item.dateKey] || (countsByDate[item.dateKey] = {
                practice: 0,
                mock: 0,
                total: 0,
                seen: { practice: Object.create(null), mock: Object.create(null) }
            });
            if (!dateBucket.seen[item.kind][item.uniqueKey]) {
                dateBucket.seen[item.kind][item.uniqueKey] = true;
                dateBucket[item.kind]++;
                dateBucket.total++;
            }

            const monthBucket = countsByMonth[item.monthKey] || (countsByMonth[item.monthKey] = {
                practice: 0,
                mock: 0,
                total: 0,
                seen: { practice: Object.create(null), mock: Object.create(null) }
            });
            if (!monthBucket.seen[item.kind][item.uniqueKey]) {
                monthBucket.seen[item.kind][item.uniqueKey] = true;
                monthBucket[item.kind]++;
                monthBucket.total++;
            }
        });

        Object.keys(countsByDate).forEach(dateKey => { delete countsByDate[dateKey].seen; });
        Object.keys(countsByMonth).forEach(monthKey => { delete countsByMonth[monthKey].seen; });
        examEvents.forEach(item => {
            const dateBucket = examsByDate[item.dateKey] || (examsByDate[item.dateKey] = []);
            dateBucket.push(item);
            examCountsByMonth[item.monthKey] = (examCountsByMonth[item.monthKey] || 0) + 1;
        });

        return {
            countsByDate,
            countsByMonth,
            examsByDate,
            examCountsByMonth,
            monthKeys,
            defaultMonthKey: sessions.some(item => item.monthKey === currentMonth) || !sessions.length
                ? currentMonth
                : monthKeys[monthKeys.length - 1]
        };
    }

    function buildCalendarMonthData(calendar, monthKey) {
        const parsed = parseCalendarMonthKey(monthKey);
        if (!parsed) return null;

        const firstDay = new Date(parsed.year, parsed.monthIndex, 1);
        const leadingPads = (firstDay.getDay() + 6) % 7;
        const daysInMonth = new Date(parsed.year, parsed.monthIndex + 1, 0).getDate();
        const todayKey = calendarDateKey(new Date());
        const cells = [];
        const totals = Object.assign({ practice: 0, mock: 0, total: 0 }, calendar.countsByMonth[monthKey] || {});
        totals.exams = calendar.examCountsByMonth[monthKey] || 0;

        for (let i = 0; i < leadingPads; i++) cells.push({ isPad: true });

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(parsed.year, parsed.monthIndex, day);
            const dateKey = calendarDateKey(date);
            const counts = calendar.countsByDate[dateKey] || { practice: 0, mock: 0, total: 0 };
            const exams = calendar.examsByDate[dateKey] || [];
            cells.push({
                day,
                dateKey,
                counts,
                exams,
                isToday: dateKey === todayKey
            });
        }

        while (cells.length % 7) cells.push({ isPad: true });

        return {
            monthKey,
            label: formatCalendarMonthLabel(monthKey),
            totals,
            cells
        };
    }

    function renderProgressCalendar(calendar, monthKey) {
        const month = buildCalendarMonthData(calendar, monthKey);
        if (!month) return "";

        const monthIndex = calendar.monthKeys.indexOf(monthKey);
        const summaryParts = [];
        if (month.totals.practice) summaryParts.push(`${month.totals.practice} unique ${pluralize(month.totals.practice, "practice quiz", "practice quizzes")}`);
        if (month.totals.mock) summaryParts.push(`${month.totals.mock} unique ${pluralize(month.totals.mock, "mock exam")}`);
        if (month.totals.exams) summaryParts.push(`${month.totals.exams} ${pluralize(month.totals.exams, "exam day")}`);
        const summaryText = summaryParts.length
            ? `${summaryParts.join(" and ")} in ${month.label}.`
            : `No unique practice quizzes, mock exams, or exam days in ${month.label} yet.`;

        return `
            <section class="progress-calendar-card">
                <div class="progress-calendar-header">
                    <div>
                        <h2>Study calendar</h2>
                        <p>${escapeHtml(summaryText)}</p>
                    </div>
                    <div class="progress-calendar-nav" aria-label="Calendar month navigation">
                        <button type="button" class="ghost-btn progress-calendar-nav-btn" id="progress-calendar-prev" ${monthIndex <= 0 ? "disabled" : ""} aria-label="Show previous month">←</button>
                        <div class="progress-calendar-month">${escapeHtml(month.label)}</div>
                        <button type="button" class="ghost-btn progress-calendar-nav-btn" id="progress-calendar-next" ${monthIndex >= calendar.monthKeys.length - 1 ? "disabled" : ""} aria-label="Show next month">→</button>
                    </div>
                </div>
                <div class="progress-calendar-legend">
                    <span class="progress-calendar-pill is-practice">🎯 Unique Practice ${month.totals.practice}</span>
                    <span class="progress-calendar-pill is-mock">📝 Unique Mock ${month.totals.mock}</span>
                    <span class="progress-calendar-pill is-exam">📅 Exam Days ${month.totals.exams}</span>
                </div>
                <div class="progress-calendar-weekdays" aria-hidden="true">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
                <div class="progress-calendar-days">
                    ${month.cells.map(cell => {
                        if (cell.isPad) return `<div class="progress-calendar-pad" aria-hidden="true"></div>`;
                        const parts = cell.dateKey.split("-").map(Number);
                        const examSummary = cell.exams.length
                            ? ` Exams: ${cell.exams.map(exam => `${exam.subjectName}${exam.detail ? ` (${exam.detail})` : ""}`).join(", ")}.`
                            : "";
                        const dayTitle = `${new Date(parts[0], parts[1] - 1, parts[2]).toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}: ${cell.counts.practice} unique ${pluralize(cell.counts.practice, "practice quiz", "practice quizzes")}, ${cell.counts.mock} unique ${pluralize(cell.counts.mock, "mock exam")}.${examSummary}`;
                        return `
                            <div class="progress-calendar-day ${cell.counts.total ? "has-activity" : ""} ${cell.exams.length ? "has-exam" : ""} ${cell.isToday ? "is-today" : ""}" title="${escapeHtml(dayTitle)}">
                                <div class="progress-calendar-date">${cell.day}</div>
                                <div class="progress-calendar-counts">
                                    ${cell.counts.practice ? `<span class="progress-calendar-chip is-practice">🎯 ${cell.counts.practice}</span>` : ""}
                                    ${cell.counts.mock ? `<span class="progress-calendar-chip is-mock">📝 ${cell.counts.mock}</span>` : ""}
                                    ${cell.exams.map(exam => `<span class="progress-calendar-chip is-exam">📅 ${escapeHtml(examChipLabel(exam))}</span>`).join("")}
                                </div>
                            </div>
                        `;
                    }).join("")}
                </div>
            </section>
        `;
    }

    function renderProgress(root) {
        const liveIds = liveSelectedSubjectIds();
        if (!liveIds.length) {
            root.innerHTML = `
                <a class="back-link" href="#/">← Home</a>
                <h1>My progress</h1>
                <p>No progress to show yet for ${escapeHtml(yearLabel(currentSelectedYear()) || "your year")} — your selected subjects are still coming soon.</p>
            `;
            return;
        }
        const rows = liveIds.map(id => {
            const subj = window.SUBJECT_DATA[id];
            if (!subj) return "";
            const stats = subjectSummary(id);
            const subjState = state.subjects[id];
            const recent = subjState.quizSessions.slice(-3).reverse();
            const recentHtml = recent.length
                ? recent.map(s => {
                    const display = quizSessionDisplay(subj, s);
                    return `<li>${escapeHtml(display.kind)} — ${escapeHtml(display.label)} · ${s.score}/${s.total} · ${new Date(s.date).toLocaleString()}</li>`;
                }).join("")
                : "<li class='muted'>No sessions yet.</li>";

            return `
                <article class="progress-row" style="--accent:${subj.color}">
                    <header>
                        <h3>${subj.icon} ${escapeHtml(subj.name)}</h3>
                        <a class="ghost-btn" href="#/subject/${id}">Open</a>
                    </header>
                    <div class="progress-stats">
                        <div><strong>${stats.attempted}</strong>/${stats.total}<span>questions</span></div>
                        <div><strong>${stats.correct}%</strong><span>correct</span></div>
                    </div>
                    <div class="progress-bar"><span style="width:${stats.attemptedPct}%"></span></div>
                    <details>
                        <summary>Recent sessions</summary>
                        <ul>${recentHtml}</ul>
                    </details>
                </article>
            `;
        }).join("");
        const summary = selectedStudySummary();
        const calendar = buildProgressCalendar(currentSelectedYear(), liveIds);
        if (!progressCalendarMonthKey || calendar.monthKeys.indexOf(progressCalendarMonthKey) === -1) {
            progressCalendarMonthKey = calendar.defaultMonthKey;
        }

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            <h1>My progress</h1>
            <p>${summary.attempted} questions answered · ${pct(summary.correct, summary.attempted)}% correct overall · best streak ${state.stats.bestStreak} 🔥</p>
            ${renderProgressCalendar(calendar, progressCalendarMonthKey)}
            ${renderProgressExamPlanner(currentSelectedYear(), liveIds)}
            <div class="progress-grid">${rows}</div>
        `;

        const prevBtn = document.getElementById("progress-calendar-prev");
        const nextBtn = document.getElementById("progress-calendar-next");
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                const idx = calendar.monthKeys.indexOf(progressCalendarMonthKey);
                if (idx > 0) {
                    progressCalendarMonthKey = calendar.monthKeys[idx - 1];
                    renderProgress(root);
                }
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                const idx = calendar.monthKeys.indexOf(progressCalendarMonthKey);
                if (idx >= 0 && idx < calendar.monthKeys.length - 1) {
                    progressCalendarMonthKey = calendar.monthKeys[idx + 1];
                    renderProgress(root);
                }
            });
        }
        const saveExamsBtn = document.getElementById("progress-save-exams");
        if (saveExamsBtn) {
            saveExamsBtn.addEventListener("click", () => {
                const entriesBySubject = {};
                liveIds.forEach(subjectId => {
                    const dateInput = root.querySelector(`[data-progress-exam-date="${subjectId}"]`);
                    const detailInput = root.querySelector(`[data-progress-exam-detail="${subjectId}"]`);
                    entriesBySubject[subjectId] = {
                        date: dateInput ? dateInput.value : "",
                        detail: detailInput ? detailInput.value : ""
                    };
                });
                updateExamScheduleEntries(currentSelectedYear(), entriesBySubject);
                renderProgress(root);
                mascotPopIn({ expression: "proud", message: "Exam days updated!", duration: 2200 });
            });
        }
        const resetExamsBtn = document.getElementById("progress-reset-exams");
        if (resetExamsBtn) {
            resetExamsBtn.addEventListener("click", () => {
                clearExamScheduleOverrides(currentSelectedYear(), liveIds);
                renderProgress(root);
                mascotPopIn({ expression: "wave", message: "Calendar exam days reset.", duration: 2200 });
            });
        }
    }

    /* ---------- Cat Clan ---------- */

    function clanState() {
        if (!state.clan) state.clan = { cats: [], claimTickets: 0, perfectExams: {} };
        if (!Array.isArray(state.clan.cats)) state.clan.cats = [];
        if (!state.clan.perfectExams) state.clan.perfectExams = {};
        return state.clan;
    }

    function renderCollectionThemeSwitch(activeId) {
        const catState = clanState();
        const animalProgress = animalsState();
        const items = [
            {
                id: "cats",
                emoji: "🐱",
                label: "Cats",
                count: totalCatCompanions(),
                tickets: catState.claimTickets || 0
            },
            {
                id: "animals",
                emoji: "🦊",
                label: "Animals",
                count: totalAnimalCompanions(),
                tickets: animalProgress.claimTickets || 0
            }
        ];
        return `
            <div class="theme-switcher" role="tablist" aria-label="Choose collection theme">
                ${items.map(item => `
                    <button
                        type="button"
                        class="theme-switch-btn ${item.id === activeId ? "is-active" : ""}"
                        data-theme-switch="${item.id}"
                        role="tab"
                        aria-selected="${item.id === activeId ? "true" : "false"}">
                        <span class="theme-switch-emoji">${item.emoji}</span>
                        <span class="theme-switch-copy">
                            <strong>${item.label}</strong>
                            <span>${item.count} collected · ${item.tickets} ticket${item.tickets === 1 ? "" : "s"}</span>
                        </span>
                    </button>
                `).join("")}
            </div>
        `;
    }

    function wireCollectionThemeSwitch(root, path) {
        $$("[data-theme-switch]", root).forEach(btn => {
            btn.addEventListener("click", () => {
                setThemePreference(btn.dataset.themeSwitch);
                navigate(path || "/clan");
            });
        });
    }

    function renderCollectionHub(root) {
        return currentThemeId() === "animals" ? renderAnimalCollection(root) : renderClan(root);
    }

    function renderCollectionClaim(root) {
        return currentThemeId() === "animals" ? renderAnimalClaim(root) : renderClaim(root);
    }

    function renderCollectionParkSelect(root) {
        return currentThemeId() === "animals" ? renderAnimalParkSelect(root) : renderParkSelect(root);
    }

    function renderCollectionParkPlay(root) {
        return currentThemeId() === "animals" ? renderAnimalParkPlay(root) : renderParkPlay(root);
    }

    function renderCollectionCombine(root) {
        return currentThemeId() === "animals" ? renderAnimalCombine(root) : renderCatCombine(root);
    }

    function renderCollectionDetail(root, itemId, routeKind) {
        if (routeKind === "cat") return renderCatDetail(root, itemId);
        if (routeKind === "pet") return renderAnimalDetail(root, itemId);
        return currentThemeId() === "animals" ? renderAnimalDetail(root, itemId) : renderCatDetail(root, itemId);
    }

    function renderCatCombine(root) {
        const cs = clanState();
        const originals = (cs.cats || []).map(cat => ({ entry: cat, id: cat.breedId, spec: window.Clan.findBreed(cat.breedId) })).filter(item => item.spec);
        const switcher = renderCollectionThemeSwitch("cats");
        if (originals.length < 2) {
            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Clan</a>
                ${switcher}
                <section class="empty">
                    <p>You need at least <strong>two original cats</strong> before you can make a hybrid.</p>
                </section>
            `;
            wireCollectionThemeSwitch(root, "/clan/combine");
            return;
        }

        let selectedIds = [];

        function draw() {
            const selected = new Set(selectedIds);
            const first = selectedIds[0] || "";
            const second = selectedIds[1] || "";
            const hybridSpec = first && second ? window.Hybrids.buildCatSpec(first, second) : null;
            const hybridId = hybridSpec ? window.Hybrids.catId(first, second) : "";
            const existing = hybridId ? findCatHybridEntry(hybridId) : null;
            const chooserCards = originals.map(item => `
                <button type="button" class="park-pick ${selected.has(item.id) ? "is-picked" : ""}" data-combine-id="${item.id}">
                    <div class="park-pick-svg">${renderCatArt(item.id, "wave")}</div>
                    <div class="park-pick-name">${escapeHtml(item.entry.name)}</div>
                    <div class="park-pick-breed">${escapeHtml(item.spec.breed)}</div>
                    ${selected.has(item.id) ? `<div class="park-pick-check">✓</div>` : ""}
                </button>
            `).join("");

            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Clan</a>
                ${switcher}
                <header class="claim-header">
                    <h1>🧬 Combine two cats</h1>
                    <p>Pick two original cats to stitch together into one gloriously silly hybrid. Existing hybrids stay in your collection, but only originals can be parents.</p>
                </header>
                <section class="combine-preview">
                    ${hybridSpec ? `
                        <div class="combine-preview-stage">${window.Hybrids.renderCatHybrid(hybridSpec, "happy")}</div>
                        <div class="combine-preview-copy">
                            <p class="combine-kicker">${escapeHtml(selectedIds.length === 2 ? "Previewing your hybrid cat" : "Choose two cats")}</p>
                            <h2>${escapeHtml(hybridSpec.defaultName)}</h2>
                            <p class="cat-archetype">${escapeHtml(hybridSpec.breed)} ${renderRarityBadge(hybridSpec.rarity)} <span class="hybrid-label">Hybrid</span></p>
                            <p class="combine-summary">${escapeHtml(hybridSpec.backstory)}</p>
                            <div class="claim-traits">
                                ${hybridSpec.traits.map(trait => `<span class="trait-chip">${escapeHtml(trait)}</span>`).join("")}
                            </div>
                            <div class="combine-actions">
                                <button type="button" class="primary-btn pulse-btn" id="combine-create-btn">${existing ? "Visit existing hybrid" : "Create hybrid cat"}</button>
                                <button type="button" class="ghost-btn" id="combine-clear-btn">Clear picks</button>
                            </div>
                        </div>
                    ` : `
                        <div class="combine-empty">
                            <div class="combine-preview-stage">${window.Cats.svg("thinking", "cream")}</div>
                            <div class="combine-preview-copy">
                                <p class="combine-kicker">Pick two originals</p>
                                <h2>Funny new cat incoming</h2>
                                <p class="combine-summary">Choose any two different cats from your clan to preview the stitched-together result.</p>
                            </div>
                        </div>
                    `}
                </section>
                <section class="park-pick-grid">${chooserCards}</section>
            `;

            $$("[data-combine-id]", root).forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.combineId;
                    if (selected.has(id)) {
                        selectedIds = selectedIds.filter(value => value !== id);
                    } else if (selectedIds.length < 2) {
                        selectedIds.push(id);
                    } else {
                        selectedIds = [selectedIds[1], id];
                    }
                    draw();
                });
            });

            const createBtn = $("#combine-create-btn");
            if (createBtn && hybridSpec) {
                createBtn.addEventListener("click", () => {
                    const result = ensureCatHybrid(first, second);
                    if (!result) return;
                    const spec = catSpecFor(result.entry.hybridId);
                    window.Cats.popIn({
                        expression: result.created ? "cheering" : "love",
                        theme: window.Cats.pickTheme(),
                        message: result.created ? `Hybrid unlocked: ${spec.defaultName}!` : `${result.entry.name} is already in your clan!`,
                        duration: 3200,
                        side: "left"
                    });
                    navigate(`/clan/cat/${result.entry.hybridId}`);
                });
            }
            const clearBtn = $("#combine-clear-btn");
            if (clearBtn) {
                clearBtn.addEventListener("click", () => {
                    selectedIds = [];
                    draw();
                });
            }
            wireCollectionThemeSwitch(root, "/clan/combine");
        }

        draw();
    }

    function renderAnimalCombine(root) {
        const progress = animalsState();
        const originals = (progress.pets || []).map(pet => ({ entry: pet, id: pet.petId, spec: window.Animals.findPet(pet.petId) })).filter(item => item.spec);
        const switcher = renderCollectionThemeSwitch("animals");
        let usePotion = false;
        let selectedIds = [];
        const canMakeAnything = originals.length >= 2 || (originals.length >= 1 && sparklePotionCount() > 0);
        if (!canMakeAnything) {
            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Pets</a>
                ${switcher}
                <section class="empty">
                    <p>You need <strong>two original pets</strong>, or <strong>one original pet plus a Sparkle Potion</strong>, before you can make a special result.</p>
                </section>
            `;
            wireCollectionThemeSwitch(root, "/clan/combine");
            return;
        }

        function draw() {
            const potionBalance = sparklePotionCount();
            const selected = new Set(selectedIds);
            const first = selectedIds[0] || "";
            const second = selectedIds[1] || "";
            const hybridSpec = first && second ? window.Hybrids.buildAnimalSpec(first, second, { sparkle: usePotion }) : null;
            const hybridId = hybridSpec ? window.Hybrids.animalId(first, second, { sparkle: usePotion }) : "";
            const existing = hybridId ? findAnimalHybridEntry(hybridId) : null;
            const canDoubleSelectedPet = usePotion && potionBalance > 0 && !!first && selectedIds.length === 1;
            const chooserCards = originals.map(item => `
                <button type="button" class="park-pick ${selected.has(item.id) ? "is-picked" : ""}" data-combine-id="${item.id}">
                    <div class="park-pick-svg">${renderAnimalArt(item.id, "wave")}</div>
                    <div class="park-pick-name">${escapeHtml(item.entry.name)}</div>
                    <div class="park-pick-breed">${escapeHtml(item.spec.species)}</div>
                    ${selected.has(item.id) ? `<div class="park-pick-check">✓</div>` : ""}
                </button>
            `).join("");

            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Pets</a>
                ${switcher}
                <header class="claim-header">
                    <h1>🧬 Combine two pets</h1>
                    <p>Pick two original pets to mash into one delightfully oddball companion. Add a Sparkle Potion if you want the result to glow. Potions in bag: <strong>${potionBalance}</strong>.</p>
                </header>
                <div class="combine-toolbar">
                    <button type="button" class="ghost-btn ${usePotion ? "is-active" : ""}" id="toggle-sparkle-btn" ${potionBalance <= 0 ? "disabled" : ""}>
                        ✨ ${usePotion ? "Sparkle Potion added" : "Add Sparkle Potion"}
                    </button>
                    <span class="combine-toolbar-copy">${usePotion ? "A potion will be consumed only if you create a new sparkle result." : "Combine without a potion for a standard stitched hybrid."}</span>
                </div>
                <section class="combine-preview">
                    ${hybridSpec ? `
                        <div class="combine-preview-stage">${window.Hybrids.renderAnimalHybrid(hybridSpec, "happy")}</div>
                        <div class="combine-preview-copy">
                            <p class="combine-kicker">${escapeHtml(hybridSpec.sparkle ? "Previewing your sparkle result" : "Previewing your hybrid pet")}</p>
                            <h2>${escapeHtml(hybridSpec.defaultName)}</h2>
                            <p class="cat-archetype">${escapeHtml(hybridSpec.species)} ${renderRarityBadge(hybridSpec.rarity)}${renderAnimalVariantBadges(hybridSpec)}</p>
                            <p class="combine-summary">${escapeHtml(hybridSpec.backstory)}</p>
                            <div class="claim-traits">
                                ${hybridSpec.traits.map(trait => `<span class="trait-chip">${escapeHtml(trait)}</span>`).join("")}
                            </div>
                            <div class="combine-actions">
                                <button type="button" class="primary-btn pulse-btn" id="combine-create-btn">${existing ? "Visit existing result" : (hybridSpec.sparkle ? "Create sparkle pet" : "Create hybrid pet")}</button>
                                <button type="button" class="ghost-btn" id="combine-clear-btn">Clear picks</button>
                            </div>
                        </div>
                    ` : `
                        <div class="combine-empty">
                            <div class="combine-preview-stage">${window.Animals.svg("thinking", "meadow")}</div>
                            <div class="combine-preview-copy">
                                <p class="combine-kicker">${usePotion ? "Potion mode is on" : "Pick two originals"}</p>
                                <h2>${usePotion ? "Bright new sparkle pet incoming" : "Funny new pet incoming"}</h2>
                                <p class="combine-summary">${usePotion ? "Choose two originals, or use the same pet twice, to preview the glowing result." : "Choose any two different pets from your haven to preview the stitched-together result."}</p>
                                ${canDoubleSelectedPet ? `<button type="button" class="ghost-btn" id="same-pet-sparkle-btn">Use ${escapeHtml(findOwnedAnimalEntry(first).name)} twice for a sparkle version</button>` : ""}
                            </div>
                        </div>
                    `}
                </section>
                <section class="park-pick-grid">${chooserCards}</section>
            `;

            $$("[data-combine-id]", root).forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.combineId;
                    if (selected.has(id)) {
                        selectedIds = selectedIds.filter(value => value !== id);
                    } else if (selectedIds.length < 2) {
                        selectedIds.push(id);
                    } else {
                        selectedIds = [selectedIds[1], id];
                    }
                    draw();
                });
            });

            const toggleBtn = $("#toggle-sparkle-btn");
            if (toggleBtn) {
                toggleBtn.addEventListener("click", () => {
                    if (potionBalance <= 0) {
                        window.Animals.popIn({
                            expression: "thinking",
                            theme: window.Animals.pickTheme(),
                            message: "No Sparkle Potions left - grab one from the ticket screen first.",
                            duration: 2600,
                            side: "right"
                        });
                        return;
                    }
                    usePotion = !usePotion;
                    if (!usePotion && selectedIds.length === 2 && selectedIds[0] === selectedIds[1]) {
                        selectedIds = [selectedIds[0]];
                    }
                    draw();
                });
            }

            const samePetBtn = $("#same-pet-sparkle-btn");
            if (samePetBtn && first) {
                samePetBtn.addEventListener("click", () => {
                    selectedIds = [first, first];
                    draw();
                });
            }

            const createBtn = $("#combine-create-btn");
            if (createBtn && hybridSpec) {
                createBtn.addEventListener("click", () => {
                    const result = ensureAnimalHybrid(first, second, { sparkle: usePotion });
                    if (!result) {
                        window.Animals.popIn({
                            expression: "thinking",
                            theme: window.Animals.pickTheme(),
                            message: usePotion ? "That sparkle recipe can't be made right now - check your potion stash and try again." : "That pet combo can't be made right now - try another pair.",
                            duration: 2800,
                            side: "right"
                        });
                        draw();
                        return;
                    }
                    const spec = animalSpecFor(result.entry.hybridId);
                    window.Animals.popIn({
                        expression: result.created ? "cheering" : "love",
                        theme: window.Animals.pickTheme(),
                        message: result.created ? `${spec.sparkle ? "Sparkle" : "Hybrid"} unlocked: ${spec.defaultName}!` : `${result.entry.name} is already in your haven!`,
                        duration: 3200,
                        side: "left"
                    });
                    navigate(`/clan/pet/${result.entry.hybridId}`);
                });
            }
            const clearBtn = $("#combine-clear-btn");
            if (clearBtn) {
                clearBtn.addEventListener("click", () => {
                    selectedIds = [];
                    draw();
                });
            }
            wireCollectionThemeSwitch(root, "/clan/combine");
        }

        draw();
    }

    function renderClan(root) {
        const cs = clanState();
        const total = window.Clan.totalBreeds();
        const originals = (cs.cats || []).length;
        const hybrids = catHybridEntries().length;
        const own = originals + hybrids;
        const tickets = cs.claimTickets || 0;
        const switcher = renderCollectionThemeSwitch("cats");

        if (own === 0 && tickets === 0) {
            root.innerHTML = `
                <a class="back-link" href="#/">← Home</a>
                ${switcher}
                <section class="clan-empty">
                    <div class="clan-empty-cat">${window.Cats.svg("wave", "ginger")}</div>
                    <h1>Your cat clan is waiting!</h1>
                    <p>Score <strong>100%</strong> on any practice set or mock exam to earn a 🎟️ <strong>Cat Ticket</strong>. Spend the ticket to choose a new cat for your clan.</p>
                    <p>There are <strong>${total}</strong> different breeds to collect — each with its own personality, traits, and signature phrases.</p>
                    <a class="primary-btn" href="#/">Start a quiz →</a>
                </section>
            `;
            wireCollectionThemeSwitch(root, "/clan");
            return;
        }

        const catCards = catCompanionEntries().map(cat => {
            const id = catEntryId(cat);
            const breed = catSpecFor(id);
            if (!breed) return "";
            const happy = window.Clan.currentHappiness(cat);
            const mood = window.Clan.moodFor(happy);
            return `
                <a class="clan-card mood-${mood.label.toLowerCase()}" href="#/clan/cat/${id}">
                    <div class="clan-card-svg">${renderCatArt(id, mood.expression)}</div>
                    <h3>${escapeHtml(cat.name)}</h3>
                    <p class="clan-card-breed">${escapeHtml(breed.breed)} ${renderRarityBadge(breed.rarity)}${cat.hybridId ? ` <span class="hybrid-label">Hybrid</span>` : ""}</p>
                    <p class="clan-card-mood">${mood.label === "Lonely" ? "😿" : mood.label === "Bored" ? "😼" : mood.label === "Content" ? "😺" : mood.label === "Happy" ? "😸" : "😻"} ${mood.label}</p>
                    <div class="clan-card-bar"><span style="width:${happy}%"></span></div>
                </a>
            `;
        }).join("");

        const ticketsBlock = tickets > 0 ? `
            <div class="clan-tickets-banner">
                <div class="clan-tickets-icon">🎟️</div>
                <div>
                    <strong>${tickets} Cat Ticket${tickets === 1 ? "" : "s"} ready to spend!</strong>
                    <p>Pick your next cat.</p>
                </div>
                <a class="primary-btn pulse-btn" href="#/clan/claim">Claim a cat 🐾</a>
            </div>
        ` : `
            <p class="clan-tip">Score 100% on any quiz to earn a new 🎟️ Cat Ticket.</p>
        `;

        const ctaButtons = [];
        if (originals > 1) {
            ctaButtons.push(`<a class="park-cta" href="#/clan/combine">🧬 Combine two cats <span class="park-cta-sub">(make a funny hybrid)</span></a>`);
        }
        if (own > 0) {
            ctaButtons.push(`<a class="park-cta" href="#/clan/park">🌿 Visit the Park <span class="park-cta-sub">(take up to 5 cats)</span></a>`);
        }
        const collectionCtas = ctaButtons.length ? `<div class="collection-cta-stack">${ctaButtons.join("")}</div>` : "";

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            ${switcher}
            <header class="clan-header">
                <h1>🐾 ${escapeHtml(customName())}'s Cat Clan</h1>
                <p>${originals} / ${total} original cats collected · ${hybrids} hybrid${hybrids === 1 ? "" : "s"} created</p>
                <div class="clan-progress-bar"><span style="width:${pct(originals, total)}%"></span></div>
            </header>
            ${ticketsBlock}
            ${collectionCtas}
            <section class="clan-grid">${catCards}</section>
        `;
        wireCollectionThemeSwitch(root, "/clan");
    }

    /* ---------- Break hub + games ---------- */

    const BREAK_GAMES = [
        {
            id: "catris",
            name: "Catris",
            icon: "🐱",
            blurb: "Stack the kittens. 7 falling tetromino-cats.",
            color: "#9b5de5",
            highKey: "catrisHighScore"
        },
        {
            id: "invaders",
            name: "Cat Invaders",
            icon: "👾",
            blurb: "Defend the homeworld from descending alien-cats.",
            color: "#43aa8b",
            highKey: "invadersHighScore"
        },
        {
            id: "catanoid",
            name: "Catanoid",
            icon: "🧱",
            blurb: "Bounce the ball, smash the brick-cats.",
            color: "#ff7f51",
            highKey: "catanoidHighScore"
        },
        {
            id: "danger-noodle",
            name: "Danger Noodle",
            icon: "🐍",
            blurb: "Classic Snake with two fruit slots and wild bonus fruit.",
            color: "#70c44f",
            highKey: "dangerNoodleHighScore"
        },
        {
            id: "cat-man",
            name: "Cat-man",
            icon: "🐾",
            blurb: "Chomp treats, dodge rival cats, and pounce on bonus snacks.",
            color: "#2f8fce",
            highKey: "catManHighScore"
        },
        {
            id: "meowterbike",
            name: "MeowtorBike",
            icon: "🏍️",
            blurb: "Rip through cat-cross tracks, dodge rivals, and manage turbo heat.",
            color: "#f4a261",
            highKey: "meowterbikeBestTimes",
            bestMode: "min",
            bestLabel: "🏁 Tour best",
            emptyBest: "--:--.---",
            formatBest: value => formatMeowterbikeBestTimes(value),
            newBestMessage: "New best tour time! 🏁"
        }
    ];

    function highScoreFor(gameId) {
        const game = BREAK_GAMES.find(g => g.id === gameId);
        if (!game) return 0;
        if (!state.breaks) return game.bestMode === "min" ? null : 0;
        if (gameId === "meowterbike") return state.breaks.meowterbikeBestTimes || defaultState().breaks.meowterbikeBestTimes;
        return state.breaks[game.highKey];
    }

    function highScoreForMeowterbikeClass(classId) {
        const all = highScoreFor("meowterbike") || {};
        return all[classId] || null;
    }

    function formatRaceTime(ms) {
        if (typeof ms !== "number" || !Number.isFinite(ms) || ms <= 0) return "--:--.---";
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const millis = Math.floor(ms % 1000);
        return `${minutes}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(3, "0")}`;
    }

    function formatMeowterbikeBestTimes(value) {
        const all = value || {};
        return ["50cc", "100cc", "150cc"].map(classId => `${classId}: ${formatRaceTime(all[classId])}`).join(" · ");
    }

    function formatBreakBest(game, value) {
        if (!game) return "0";
        if (typeof game.formatBest === "function") return game.formatBest(value);
        return typeof value === "number" ? String(value) : "0";
    }

    function setMeowterbikeHighScore(classId, score) {
        state.breaks = state.breaks || {};
        if (!state.breaks.meowterbikeBestTimes || typeof state.breaks.meowterbikeBestTimes !== "object") {
            state.breaks.meowterbikeBestTimes = defaultState().breaks.meowterbikeBestTimes;
        }
        const previous = state.breaks.meowterbikeBestTimes[classId];
        const isBetter = typeof score === "number" && score > 0 && (typeof previous !== "number" || previous <= 0 || score < previous);
        if (!isBetter) return;
        state.breaks.meowterbikeBestTimes[classId] = score;
        if (classId === "50cc") state.breaks.meowterbikeBestTimeMs = score;
        saveState();
        mascotPopIn({
            expression: "cheering",
            message: `New ${classId} tour best! 🏁`,
            duration: 3000, side: "right"
        });
    }

    function setHighScoreFor(gameId, score) {
        const game = BREAK_GAMES.find(g => g.id === gameId);
        if (!game) return;
        if (gameId === "meowterbike") {
            setMeowterbikeHighScore("50cc", score);
            return;
        }
        state.breaks = state.breaks || {};
        const previous = state.breaks[game.highKey];
        const isBetter = game.bestMode === "min"
            ? (typeof score === "number" && score > 0 && (typeof previous !== "number" || previous <= 0 || score < previous))
            : score > (previous || 0);
        if (isBetter) {
            state.breaks[game.highKey] = score;
            saveState();
            mascotPopIn({
                expression: "cheering",
                message: game.newBestMessage || "New high score! 🏆",
                duration: 3000, side: "right"
            });
        }
    }

    function renderBreakHub(root) {
        // Cooldown still applies to entering the break section
        const remaining = breakCooldownRemaining();
        if (remaining > 0 && !window.BreakSession.isActive() && !isBreakRulesBypassed()) {
            renderBreakLockout(root, remaining);
            return;
        }
        const breakIsActive = window.BreakSession.isActive();
        const breakBypassActive = isBreakRulesBypassed();
        const cards = BREAK_GAMES.map(g => `
            <a class="break-game-card" href="#/break/${g.id}" style="--accent:${g.color}">
                <div class="break-game-icon">${g.icon}</div>
                <h3>${escapeHtml(g.name)}</h3>
                <p>${escapeHtml(g.blurb)}</p>
                <div class="break-game-high">${escapeHtml(g.bestLabel || "🏆 Best")}: <strong>${escapeHtml(formatBreakBest(g, highScoreFor(g.id)))}</strong></div>
            </a>
        `).join("");
        const hubAction = breakIsActive
            ? `<a class="ghost-btn" href="#/" id="break-hub-end">🚪 End break early</a>`
            : `<a class="ghost-btn" href="#/">← Back to study</a>`;

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            <header class="break-hub-header">
                <div>
                    <h1>☕ Take a break</h1>
                    <p>Pick a game. We'll ask before starting the 5-minute shared break timer, then you can switch freely whenever you like.</p>
                    ${hasDevFeature(DEV_BREAK_RULES_FEATURE) ? `<p class="break-meta">${breakBypassActive ? "Dev mode: break rules are currently bypassed." : "Dev mode: break rules can be bypassed from the game start screen."}</p>` : ""}
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="break-hub-label">${breakIsActive ? "Time left" : (breakBypassActive ? "Dev bypass active" : "Starts when you say yes")}</div>
                    <div class="tetris-timer" id="break-hub-timer">5:00</div>
                </div>
            </header>
            <section class="break-hub-grid">${cards}</section>
            <div class="break-hub-actions">
                ${hubAction}
            </div>
        `;
        // Live shared-timer ticker
        if (window._breakHubTimer) clearInterval(window._breakHubTimer);
        const tick = () => {
            const elem = document.getElementById("break-hub-timer");
            const label = document.getElementById("break-hub-label");
            if (!elem) return;
            if (!window.BreakSession.isActive()) {
                elem.textContent = "5:00";
                elem.classList.remove("overtime");
                if (label) label.textContent = isBreakRulesBypassed() ? "Dev bypass active" : "Starts when you say yes";
                return;
            }
            const r = window.BreakSession.BREAK_MS - window.BreakSession.elapsed();
            if (r > 0) {
                const m = Math.floor(r / 60000);
                const s = Math.floor((r % 60000) / 1000);
                elem.textContent = `${m}:${String(s).padStart(2, "0")}`;
                elem.classList.remove("overtime");
                if (label) label.textContent = "Time left";
            } else {
                const ot = -r;
                const m = Math.floor(ot / 60000);
                const s = Math.floor((ot % 60000) / 1000);
                elem.textContent = `+${m}:${String(s).padStart(2, "0")}`;
                elem.classList.add("overtime");
                if (label) label.textContent = "Overtime 🔥";
            }
        };
        tick();
        if (window.BreakSession.isActive()) {
            window._breakHubTimer = setInterval(tick, 500);
        }
    }

    function renderBreakGame(root, gameId) {
        // Cooldown enforcement (only when arriving fresh — if a session is
        // already active, we're switching games and should let through).
        if (!window.BreakSession.isActive() && !isBreakRulesBypassed()) {
            const remaining = breakCooldownRemaining();
            if (remaining > 0) {
                renderBreakLockout(root, remaining);
                return;
            }
            renderBreakStartPrompt(root, gameId);
            return;
        }
        const game = BREAK_GAMES.find(g => g.id === gameId);
        if (!game) { navigate("/break"); return; }
        const opts = {
            onExit: () => navigate("/"),
            getHighScore: () => highScoreFor(gameId),
            onHighScore: (score) => setHighScoreFor(gameId, score)
        };
        if (gameId === "meowterbike") {
            opts.getHighScore = (classId) => highScoreForMeowterbikeClass(classId || "50cc");
            opts.getLeaderboards = () => highScoreFor("meowterbike");
            opts.onHighScore = (score, classId) => setMeowterbikeHighScore(classId || "50cc", score);
        }
        if (gameId === "catris") return window.CatTetris.start(root, opts);
        if (gameId === "invaders") return window.CatInvaders.start(root, opts);
        if (gameId === "catanoid") return window.Catanoid.start(root, opts);
        if (gameId === "danger-noodle") return window.DangerNoodle.start(root, opts);
        if (gameId === "cat-man") return window.CatMan.start(root, opts);
        if (gameId === "meowterbike") return window.Meowterbike.start(root, opts);
    }

    function renderBreakStartPrompt(root, gameId) {
        const game = BREAK_GAMES.find(g => g.id === gameId);
        if (!game) { navigate("/break"); return; }

        root.innerHTML = `
            <a class="back-link" href="#/break">← Back to games</a>
            <section class="break-start-card" style="--accent:${game.color}">
                <div class="break-start-icon">${game.icon}</div>
                <h1>Start your break?</h1>
                <p class="break-blurb">You're about to play <strong>${escapeHtml(game.name)}</strong>. Your 5-minute break timer will only begin once you choose to start.</p>
                <div class="break-countdown">
                    <div class="break-countdown-num">5:00</div>
                    <div class="break-countdown-sub">shared across every break game</div>
                </div>
                <p class="break-meta">Once it starts, you can swap to another break game any time and keep the same timer running.</p>
                ${hasDevFeature(DEV_BREAK_RULES_FEATURE) ? `<p class="break-meta">Dev mode is on, so you can also bypass the break rules and jump straight into the game without starting the timer.</p>` : ""}
                <div class="break-lockout-actions">
                    <button type="button" class="primary-btn" id="break-start-confirm">▶ Start break and play ${escapeHtml(game.name)}</button>
                    ${hasDevFeature(DEV_BREAK_RULES_FEATURE) ? `<button type="button" class="ghost-btn" id="break-start-bypass">Ignore</button>` : ""}
                    <a class="ghost-btn" href="#/break">Not yet</a>
                </div>
            </section>
        `;

        document.getElementById("break-start-confirm").addEventListener("click", () => {
            startBreakSession();
            render();
        });
        const bypass = document.getElementById("break-start-bypass");
        if (bypass) bypass.addEventListener("click", () => {
            enableBreakRulesBypass();
            render();
        });
    }

    function renderBreakLockout(root, remainingMs) {
        const m = Math.floor(remainingMs / 60000);
        const s = Math.floor((remainingMs % 60000) / 1000);
        const lastDate = state.breaks && state.breaks.lastBreakStartISO ? new Date(state.breaks.lastBreakStartISO) : null;
        const lastStr = lastDate ? lastDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—";

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            <section class="break-lockout">
                <div class="break-lockout-cat">${mascotSvg("napping")}</div>
                <h1>Studying first ✏️</h1>
                <p class="break-blurb">Breaks are limited to <strong>one every 30 minutes</strong> so they actually feel like a break.</p>
                <div class="break-countdown">
                    <div class="break-countdown-num" id="break-cooldown" data-target="${remainingMs}">${m}:${String(s).padStart(2, "0")}</div>
                    <div class="break-countdown-sub">until your next break</div>
                </div>
                <p class="break-meta">Last break started at <strong>${escapeHtml(lastStr)}</strong>.</p>
                <div class="break-lockout-actions">
                    <a class="primary-btn" href="#/">Pick a quiz</a>
                    <a class="ghost-btn" href="#/clan">🐾 Visit my pets instead</a>
                    ${hasDevFeature(DEV_BREAK_RULES_FEATURE) ? `<button type="button" class="ghost-btn" id="break-lockout-bypass">Ignore</button>` : ""}
                </div>
            </section>
        `;
        const bypass = document.getElementById("break-lockout-bypass");
        if (bypass) bypass.addEventListener("click", () => {
            enableBreakRulesBypass();
            render();
        });
        // Live countdown
        const tick = () => {
            const r = breakCooldownRemaining();
            const el = document.getElementById("break-cooldown");
            if (!el) return; // navigated away
            if (r <= 0) {
                navigate("/break"); // auto-redirect once unlocked
                return;
            }
            const mm = Math.floor(r / 60000);
            const ss = Math.floor((r % 60000) / 1000);
            el.textContent = `${mm}:${String(ss).padStart(2, "0")}`;
            window._breakLockoutTimer = setTimeout(tick, 500);
        };
        if (window._breakLockoutTimer) clearTimeout(window._breakLockoutTimer);
        window._breakLockoutTimer = setTimeout(tick, 500);
    }

    /* ---------- Park: cat-selection screen ---------- */

    function renderParkSelect(root) {
        const cs = clanState();
        if (!catCompanionEntries().length) { navigate("/clan"); return; }
        cs.parkSelection = cs.parkSelection || [];
        const switcher = renderCollectionThemeSwitch("cats");

        const selected = new Set(cs.parkSelection);

        const catCards = catCompanionEntries().map(cat => {
            const id = catEntryId(cat);
            const breed = catSpecFor(id);
            if (!breed) return "";
            const isSel = selected.has(id);
            return `
                <button type="button" class="park-pick ${isSel ? "is-picked" : ""}" data-id="${id}">
                    <div class="park-pick-svg">${renderCatArt(id, "wave")}</div>
                    <div class="park-pick-name">${escapeHtml(cat.name)}</div>
                    <div class="park-pick-breed">${escapeHtml(breed.breed)}${cat.hybridId ? " · Hybrid" : ""}</div>
                    ${isSel ? `<div class="park-pick-check">✓</div>` : ""}
                </button>
            `;
        }).join("");

        root.innerHTML = `
            <a class="back-link" href="#/clan">← Back to Clan</a>
            ${switcher}
            <header class="park-header">
                <h1>🌿 Visit the Park</h1>
                <p>Pick up to <strong>5 cats</strong> to take with you.</p>
            </header>
            <div class="park-select-bar">
                <span id="park-select-count">${cs.parkSelection.length} of 5 chosen</span>
                <button type="button" class="primary-btn pulse-btn" id="park-go-btn" ${cs.parkSelection.length === 0 ? "disabled" : ""}>Off to the Park! 🐾</button>
            </div>
            <section class="park-pick-grid">${catCards}</section>
        `;

        $$(".park-pick").forEach(el => {
            el.addEventListener("click", () => {
                const id = el.dataset.id;
                const idx = cs.parkSelection.indexOf(id);
                if (idx >= 0) {
                    cs.parkSelection.splice(idx, 1);
                } else if (cs.parkSelection.length < 5) {
                    cs.parkSelection.push(id);
                } else {
                    return; // max selected
                }
                saveState();
                renderParkSelect(root);
            });
        });
        $("#park-go-btn").addEventListener("click", () => {
            if (cs.parkSelection.length === 0) return;
            navigate("/clan/park/play");
        });
        wireCollectionThemeSwitch(root, "/clan");
    }

    /* ---------- Park: play view ---------- */

    function renderParkPlay(root) {
        const cs = clanState();
        const ids = cs.parkSelection || [];
        if (!ids.length) { navigate("/clan/park"); return; }
        const selectedCats = ids.map(findOwnedCatEntry).filter(Boolean);
        if (!selectedCats.length) { navigate("/clan/park"); return; }

        // park.js takes over the root
        window.Park.start(root, selectedCats, {
            onExit: () => {
                // bump happiness for all visited cats and return to clan
                selectedCats.forEach(c => {
                    c.happiness = Math.min(100, window.Clan.currentHappiness(c) + 12);
                    c.lastInteractedISO = new Date().toISOString();
                });
                saveState();
                navigate("/clan");
            },
            renderPet: (entry, expression) => renderCatArt(catEntryId(entry), expression),
            resolvePet: entry => catSpecFor(catEntryId(entry)),
            getPetId: entry => catEntryId(entry),
            getPetName: (entry, breed) => entry.name || (breed && breed.defaultName) || "Cat",
            reactionPhrase: (petId, kind) => catReactionPhraseFor(petId, kind)
        });
    }

    function renderClaim(root) {
        const cs = clanState();
        const switcher = renderCollectionThemeSwitch("cats");
        if ((cs.claimTickets || 0) <= 0) {
            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Clan</a>
                ${switcher}
                <section class="empty">
                    <p>No tickets yet! Score 100% on any quiz to earn one.</p>
                </section>
            `;
            wireCollectionThemeSwitch(root, "/clan");
            return;
        }

        const ownedIds = cs.cats.map(c => c.breedId);
        const candidates = window.Clan.pickCandidates(ownedIds);

        if (!candidates.length) {
            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Clan</a>
                ${switcher}
                <section class="empty">
                    <p>You've collected every breed! Legendary work, ${escapeHtml(customName())}. 🌟</p>
                </section>
            `;
            wireCollectionThemeSwitch(root, "/clan");
            return;
        }

        const choices = candidates.map(b => {
            const stats = b.stats;
            const traitChips = b.traits.map(t => `<span class="trait-chip">${escapeHtml(t)}</span>`).join("");
            return `
                <article class="claim-choice" data-breed="${b.id}">
                    <div class="claim-svg">${window.Cats.breedSvg(b.appearance, "happy")}</div>
                    <h3>${escapeHtml(b.breed)}</h3>
                    ${renderRarityBadge(b.rarity)}
                    <p class="claim-archetype">${escapeHtml(b.archetype)}</p>
                    <p class="claim-origin">📍 ${escapeHtml(b.origin)}</p>
                    <p class="claim-backstory">${escapeHtml(b.backstory || "")}</p>
                    <div class="claim-traits">${traitChips}</div>
                    <ul class="claim-stats">
                        <li><span>🤗 Cuddly</span> ${renderStatBar(stats.cuddliness)}</li>
                        <li><span>🪶 Playful</span> ${renderStatBar(stats.playfulness)}</li>
                        <li><span>🧠 Clever</span> ${renderStatBar(stats.cleverness)}</li>
                        <li><span>😼 Mischief</span> ${renderStatBar(stats.mischief)}</li>
                        <li><span>💬 Talkative</span> ${renderStatBar(stats.talk)}</li>
                    </ul>
                    <p class="claim-fact">💡 ${escapeHtml(b.funFact)}</p>
                    <button type="button" class="primary-btn pulse-btn pick-cat-btn">I choose you, ${escapeHtml(b.defaultName)}!</button>
                </article>
            `;
        }).join("");

        root.innerHTML = `
            <a class="back-link" href="#/clan">← Back to Clan</a>
            ${switcher}
            <header class="claim-header">
                <h1>🎟️ Choose your new cat!</h1>
                <p>Six cats wandered into your clan. Pick one — common faces show up more often, while legendary visitors are much harder to spot.</p>
            </header>
            <section class="claim-grid">${choices}</section>
        `;

        // Wire pick buttons
        $$(".pick-cat-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const breedId = btn.closest(".claim-choice").dataset.breed;
                claimCat(breedId);
            });
        });
        wireCollectionThemeSwitch(root, "/clan");
    }

    function renderStatBar(value) {
        const pcts = Math.min(100, Math.max(0, value * 10));
        return `<span class="stat-bar"><span style="width:${pcts}%"></span></span>`;
    }

    function claimCat(breedId) {
        const cs = clanState();
        if (cs.claimTickets <= 0) return;
        const breed = window.Clan.findBreed(breedId);
        if (!breed) return;
        // Avoid duplicates
        if (cs.cats.some(c => c.breedId === breedId)) return;

        cs.cats.push({
            breedId,
            name: breed.defaultName,
            dateISO: new Date().toISOString(),
            lastInteractedISO: new Date().toISOString(),
            happiness: 80
        });
        cs.claimTickets--;
        saveState();

        // Celebrate!
        window.Cats.popIn({
            expression: "cheering",
            theme: window.Cats.pickTheme(),
            message: `Welcome to the clan, ${breed.defaultName}!`,
            duration: 4000, side: "left"
        });
        setTimeout(() => window.Cats.popIn({
            expression: "love",
            theme: window.Cats.pickTheme(),
            message: "Your clan grows!",
            duration: 3500, side: "right"
        }), 700);

        // Navigate to the new cat's detail page
        navigate(`/clan/cat/${breedId}`);
    }

    function renderCatDetail(root, breedId) {
        const cat = findOwnedCatEntry(breedId);
        const breed = catSpecFor(breedId);
        if (!cat || !breed) {
            navigate("/clan");
            return;
        }
        const happy = window.Clan.currentHappiness(cat);
        const mood = window.Clan.moodFor(happy);
        const stats = breed.stats;
        const adoptedDate = new Date(cat.dateISO).toLocaleDateString();

        root.innerHTML = `
            <a class="back-link" href="#/clan">← Back to Clan</a>
            ${renderCollectionThemeSwitch("cats")}
            <section class="cat-detail">
                <div class="cat-detail-art">
                    <div class="cat-detail-svg" id="cat-stage">${renderCatArt(breedId, mood.expression)}</div>
                    <div class="cat-mood-tag mood-${mood.label.toLowerCase()}">${mood.label}</div>
                </div>
                <div class="cat-detail-info">
                    <h1>
                        <span class="cat-name" id="cat-name">${escapeHtml(cat.name)}</span>
                        <button type="button" class="link-btn" id="rename-btn">✏️ rename</button>
                    </h1>
                    <p class="cat-archetype">${escapeHtml(breed.breed)} ${renderRarityBadge(breed.rarity)} · ${escapeHtml(breed.archetype)}</p>
                    <p class="cat-origin">📍 From ${escapeHtml(breed.origin)} · adopted ${escapeHtml(adoptedDate)}</p>
                    ${breed.backstory ? `<p class="cat-backstory">📖 ${escapeHtml(breed.backstory)}</p>` : ""}

                    <div class="cat-happiness">
                        <div class="cat-happiness-label">Happiness <strong id="happiness-num">${happy}%</strong></div>
                        <div class="cat-happiness-bar"><span id="happiness-bar" style="width:${happy}%"></span></div>
                    </div>

                    <div class="cat-traits">
                        ${breed.traits.map(t => `<span class="trait-chip">${escapeHtml(t)}</span>`).join("")}
                    </div>

                    <ul class="cat-stats">
                        <li><span>🤗 Cuddly</span> ${renderStatBar(stats.cuddliness)}</li>
                        <li><span>🪶 Playful</span> ${renderStatBar(stats.playfulness)}</li>
                        <li><span>🧠 Clever</span> ${renderStatBar(stats.cleverness)}</li>
                        <li><span>😼 Mischief</span> ${renderStatBar(stats.mischief)}</li>
                        <li><span>💬 Talkative</span> ${renderStatBar(stats.talk)}</li>
                    </ul>

                    <p class="cat-funfact">💡 ${escapeHtml(breed.funFact)}</p>

                    <div class="cat-actions">
                        <button type="button" class="action-btn" data-act="pet">🤚 Pet <span class="boost">+5</span></button>
                        <button type="button" class="action-btn" data-act="play">🪶 Play <span class="boost">+10</span></button>
                        <button type="button" class="action-btn" data-act="treat">🐟 Treat <span class="boost">+15</span></button>
                        <button type="button" class="action-btn" data-act="chat">💬 Chat <span class="boost">+3</span></button>
                    </div>
                    <div class="cat-bubble-area" id="cat-bubble-area" aria-live="polite"></div>
                </div>
            </section>
        `;

        // Rename
        $("#rename-btn").addEventListener("click", () => {
            const name = prompt("What's their new name?", cat.name);
            if (name && name.trim()) {
                cat.name = name.trim().slice(0, 24);
                saveState();
                renderCatDetail(root, breedId);
            }
        });

        // Interaction handlers
        $$(".action-btn").forEach(btn => {
            btn.addEventListener("click", () => doInteraction(btn.dataset.act, breedId, root));
        });
        wireCollectionThemeSwitch(root, "/clan");
    }

    function doInteraction(kind, breedId, root) {
        const cat = findOwnedCatEntry(breedId);
        if (!cat) return;
        const breed = catSpecFor(breedId);
        if (!breed) return;

        // Apply the boost
        const boost = { pet: 5, play: 10, treat: 15, chat: 3 }[kind] || 0;
        cat.happiness = Math.min(100, window.Clan.currentHappiness(cat) + boost);
        cat.lastInteractedISO = new Date().toISOString();
        saveState();

        // Pick a phrase
        const phrase = catReactionPhraseFor(breedId, kind);
        showCatBubble(phrase);

        // Animate the cat
        const stage = $("#cat-stage");
        if (stage) {
            stage.classList.remove("anim-bounce", "anim-wiggle", "anim-spin", "anim-shake");
            // Force reflow
            void stage.offsetWidth;
            const animMap = { pet: "anim-bounce", play: "anim-spin", treat: "anim-wiggle", chat: "anim-shake" };
            stage.classList.add(animMap[kind] || "anim-bounce");

            // Swap to a happier expression
            const expression = kind === "pet" ? "love" : (kind === "play" ? "cheering" : (kind === "treat" ? "happy" : "wave"));
            stage.innerHTML = renderCatArt(breedId, expression);

            // Drift a heart/sparkle up from the cat
            spawnFloater(stage, kind);

            // Restore mood after a bit
            setTimeout(() => {
                const mood = window.Clan.moodFor(window.Clan.currentHappiness(cat));
                stage.innerHTML = renderCatArt(breedId, mood.expression);
            }, 1400);
        }

        // Update happiness display
        const happy = window.Clan.currentHappiness(cat);
        const num = $("#happiness-num");
        const bar = $("#happiness-bar");
        if (num) num.textContent = happy + "%";
        if (bar) bar.style.width = happy + "%";
    }

    function showCatBubble(text) {
        const area = $("#cat-bubble-area");
        if (!area) return;
        const id = "bubble-" + Date.now();
        const div = document.createElement("div");
        div.className = "cat-speech-bubble";
        div.id = id;
        div.textContent = text;
        area.appendChild(div);
        // Remove after a bit
        setTimeout(() => {
            div.classList.add("leaving");
            setTimeout(() => div.remove(), 500);
        }, 2400);
        // Cap to 3 bubbles
        while (area.children.length > 3) area.removeChild(area.firstChild);
    }

    function spawnFloater(stage, kind) {
        const symbols = { pet: ["💗", "✨", "💕"], play: ["🪶", "✨", "🎯"], treat: ["🐟", "🍣", "✨"], chat: ["💬", "✨"] };
        const list = symbols[kind] || ["✨"];
        for (let i = 0; i < 3; i++) {
            const f = document.createElement("span");
            f.className = "cat-floater";
            f.textContent = list[Math.floor(Math.random() * list.length)];
            f.style.left = (30 + Math.random() * 40) + "%";
            f.style.animationDelay = (i * 0.15) + "s";
            stage.appendChild(f);
            setTimeout(() => f.remove(), 1600);
        }
    }

    function animalMoodEmoji(label) {
        if (label === "Sleepy") return "😴";
        if (label === "Restless") return "🫣";
        if (label === "Content") return "🙂";
        if (label === "Happy") return "😄";
        return "😍";
    }

    function renderAnimalCollection(root) {
        const progress = animalsState();
        const total = window.Animals.totalPets();
        const originals = (progress.pets || []).length;
        const hybrids = animalHybridEntries().length;
        const own = originals + hybrids;
        const tickets = progress.claimTickets || 0;
        const potions = sparklePotionCount();
        const switcher = renderCollectionThemeSwitch("animals");

        if (own === 0 && tickets === 0) {
            root.innerHTML = `
                <a class="back-link" href="#/">← Home</a>
                ${switcher}
                <section class="clan-empty">
                    <div class="clan-empty-cat">${window.Animals.svg("wave", "meadow")}</div>
                    <h1>Your pet haven is waiting!</h1>
                    <p>Score <strong>100%</strong> on any practice set or mock exam to earn a 🎟️ <strong>Pet Ticket</strong>. Spend the ticket to choose a new pet for your haven.</p>
                    <p>There are <strong>${total}</strong> original pets to collect — each with its own personality, traits, and little world.</p>
                    <a class="primary-btn" href="#/">Start a quiz →</a>
                </section>
            `;
            wireCollectionThemeSwitch(root, "/clan");
            return;
        }

        const petCards = animalCompanionEntries().map(pet => {
            const id = animalEntryId(pet);
            const spec = animalSpecFor(id);
            if (!spec) return "";
            const happy = window.Animals.currentHappiness(pet);
            const mood = window.Animals.moodFor(happy);
            return `
                <a class="clan-card mood-${mood.label.toLowerCase()}" href="#/clan/pet/${id}">
                    <div class="clan-card-svg">${renderAnimalArt(id, mood.expression)}</div>
                    <h3>${escapeHtml(pet.name)}</h3>
                    <p class="clan-card-breed">${escapeHtml(spec.species)} ${renderRarityBadge(spec.rarity)}${renderAnimalVariantBadges(spec)}</p>
                    <p class="clan-card-mood">${animalMoodEmoji(mood.label)} ${mood.label}</p>
                    <div class="clan-card-bar"><span style="width:${happy}%"></span></div>
                </a>
            `;
        }).join("");

        const ticketsBlock = tickets > 0 ? `
            <div class="clan-tickets-banner">
                <div class="clan-tickets-icon">🎟️</div>
                <div>
                    <strong>${tickets} Pet Ticket${tickets === 1 ? "" : "s"} ready to spend!</strong>
                    <p>Pick your next adorable companion.</p>
                </div>
                <a class="primary-btn pulse-btn" href="#/clan/claim">Claim a pet 🐾</a>
            </div>
        ` : `
            <p class="clan-tip">Score 100% on any quiz to earn a new 🎟️ Pet Ticket.</p>
        `;

        const ctaButtons = [];
        if (originals > 1 || (originals > 0 && potions > 0)) {
            ctaButtons.push(`<a class="park-cta" href="#/clan/combine">🧬 Combine two pets <span class="park-cta-sub">(make a funny hybrid)</span></a>`);
        }
        if (own > 0) {
            ctaButtons.push(`<a class="park-cta" href="#/clan/park">🌿 Visit the Meadow <span class="park-cta-sub">(take up to 5 pets)</span></a>`);
        }
        const collectionCtas = ctaButtons.length ? `<div class="collection-cta-stack">${ctaButtons.join("")}</div>` : "";

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            ${switcher}
            <header class="clan-header">
                <h1>🦊 ${escapeHtml(customName())}'s Pet Haven</h1>
                <p>${originals} / ${total} original pets collected · ${hybrids} special result${hybrids === 1 ? "" : "s"} created · ${potions} sparkle potion${potions === 1 ? "" : "s"} stored</p>
                <div class="clan-progress-bar"><span style="width:${pct(originals, total)}%"></span></div>
            </header>
            ${ticketsBlock}
            ${collectionCtas}
            <section class="clan-grid">${petCards}</section>
        `;
        wireCollectionThemeSwitch(root, "/clan");
    }

    function renderAnimalClaim(root) {
        const progress = animalsState();
        const switcher = renderCollectionThemeSwitch("animals");
        const tickets = progress.claimTickets || 0;
        const potions = sparklePotionCount();
        if ((progress.claimTickets || 0) <= 0) {
            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Pets</a>
                ${switcher}
                <section class="empty">
                    <p>No tickets yet! Score 100% on any quiz to earn one.</p>
                </section>
            `;
            wireCollectionThemeSwitch(root, "/clan");
            return;
        }

        const ownedIds = progress.pets.map(p => p.petId);
        const candidates = window.Animals.pickCandidates(ownedIds);

        const choices = candidates.map(pet => {
            const stats = pet.stats;
            const traitChips = pet.traits.map(t => `<span class="trait-chip">${escapeHtml(t)}</span>`).join("");
            return `
                <article class="claim-choice" data-pet="${pet.id}">
                    <div class="claim-svg">${window.Animals.petSvg(pet, "happy")}</div>
                    <h3>${escapeHtml(pet.species)}</h3>
                    ${renderRarityBadge(pet.rarity)}
                    <p class="claim-archetype">${escapeHtml(pet.archetype)}</p>
                    <p class="claim-origin">📍 ${escapeHtml(pet.habitat)}</p>
                    <p class="claim-backstory">${escapeHtml(pet.backstory || "")}</p>
                    <div class="claim-traits">${traitChips}</div>
                    <ul class="claim-stats">
                        <li><span>🤗 Cuddly</span> ${renderStatBar(stats.cuddliness)}</li>
                        <li><span>🪶 Playful</span> ${renderStatBar(stats.playfulness)}</li>
                        <li><span>🧠 Clever</span> ${renderStatBar(stats.cleverness)}</li>
                        <li><span>😼 Mischief</span> ${renderStatBar(stats.mischief)}</li>
                        <li><span>💬 Talkative</span> ${renderStatBar(stats.talk)}</li>
                    </ul>
                    <p class="claim-fact">💡 ${escapeHtml(pet.funFact)}</p>
                    <button type="button" class="primary-btn pulse-btn pick-animal-btn">I choose you, ${escapeHtml(pet.defaultName)}!</button>
                </article>
            `;
        }).join("") + `
            <article class="claim-choice claim-choice-potion">
                <div class="claim-svg potion-card-art">
                    ${window.Animals.svg("love", "lagoon")}
                    <span class="potion-card-badge">Sparkle Potion</span>
                </div>
                <h3>✨ Sparkle Potion</h3>
                <p class="claim-archetype">Bright-colour upgrade</p>
                <p class="claim-origin">🎟️ Costs 1 Pet Ticket · 🧪 You own ${potions}</p>
                <p class="claim-backstory">Use one in the combine screen with two original pets to make a glowing sparkle result. If both selected pets are the same type, it creates a sparkle version of that pet instead.</p>
                <button type="button" class="primary-btn pulse-btn" id="buy-sparkle-potion-btn">Buy 1 Sparkle Potion</button>
            </article>
        `;

        root.innerHTML = `
            <a class="back-link" href="#/clan">← Back to Pets</a>
            ${switcher}
            <header class="claim-header">
                <h1>🎟️ Spend your Pet Ticket!</h1>
                <p>You have <strong>${tickets}</strong> Pet Ticket${tickets === 1 ? "" : "s"} and <strong>${potions}</strong> Sparkle Potion${potions === 1 ? "" : "s"}. Pick a new pet or stock up on magic glow for the combine screen.</p>
            </header>
            <section class="claim-grid">${choices}</section>
        `;

        $$(".pick-animal-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const petId = btn.closest(".claim-choice").dataset.pet;
                claimAnimalPet(petId);
            });
        });
        const buyPotionBtn = $("#buy-sparkle-potion-btn");
        if (buyPotionBtn) {
            buyPotionBtn.addEventListener("click", buySparklePotion);
        }
        wireCollectionThemeSwitch(root, "/clan");
    }

    function claimAnimalPet(petId) {
        const progress = animalsState();
        if ((progress.claimTickets || 0) <= 0) return;
        const spec = window.Animals.findPet(petId);
        if (!spec) return;
        if (progress.pets.some(p => p.petId === petId)) return;

        progress.pets.push({
            petId,
            name: spec.defaultName,
            dateISO: new Date().toISOString(),
            lastInteractedISO: new Date().toISOString(),
            happiness: 80
        });
        progress.claimTickets--;
        saveState();

        window.Animals.popIn({
            expression: "cheering",
            theme: window.Animals.pickTheme(),
            message: `Welcome to the haven, ${spec.defaultName}!`,
            duration: 4000,
            side: "left"
        });
        setTimeout(() => window.Animals.popIn({
            expression: "love",
            theme: window.Animals.pickTheme(),
            message: "Your pet haven grows!",
            duration: 3500,
            side: "right"
        }), 700);

        navigate(`/clan/pet/${petId}`);
    }

    function buySparklePotion() {
        const progress = animalsState();
        if ((progress.claimTickets || 0) <= 0) return;
        progress.claimTickets--;
        progress.sparklePotions = (progress.sparklePotions || 0) + 1;
        saveState();

        window.Animals.popIn({
            expression: "love",
            theme: window.Animals.pickTheme(),
            message: "Sparkle Potion stocked! ✨",
            duration: 3200,
            side: "right"
        });
        render();
    }

    function renderAnimalDetail(root, petId) {
        const pet = findOwnedAnimalEntry(petId);
        const spec = animalSpecFor(petId);
        if (!pet || !spec) {
            navigate("/clan");
            return;
        }
        const happy = window.Animals.currentHappiness(pet);
        const mood = window.Animals.moodFor(happy);
        const stats = spec.stats;
        const adoptedDate = new Date(pet.dateISO).toLocaleDateString();

        root.innerHTML = `
            <a class="back-link" href="#/clan">← Back to Pets</a>
            ${renderCollectionThemeSwitch("animals")}
            <section class="cat-detail">
                <div class="cat-detail-art">
                    <div class="cat-detail-svg" id="cat-stage">${renderAnimalArt(petId, mood.expression)}</div>
                    <div class="cat-mood-tag mood-${mood.label.toLowerCase()}">${mood.label}</div>
                </div>
                <div class="cat-detail-info">
                    <h1>
                        <span class="cat-name" id="cat-name">${escapeHtml(pet.name)}</span>
                        <button type="button" class="link-btn" id="rename-btn">✏️ rename</button>
                    </h1>
                    <p class="cat-archetype">${escapeHtml(spec.species)} ${renderRarityBadge(spec.rarity)}${renderAnimalVariantBadges(spec)} · ${escapeHtml(spec.archetype)}</p>
                    <p class="cat-origin">📍 From ${escapeHtml(spec.habitat)} · adopted ${escapeHtml(adoptedDate)}</p>
                    ${spec.backstory ? `<p class="cat-backstory">📖 ${escapeHtml(spec.backstory)}</p>` : ""}

                    <div class="cat-happiness">
                        <div class="cat-happiness-label">Happiness <strong id="happiness-num">${happy}%</strong></div>
                        <div class="cat-happiness-bar"><span id="happiness-bar" style="width:${happy}%"></span></div>
                    </div>

                    <div class="cat-traits">
                        ${spec.traits.map(t => `<span class="trait-chip">${escapeHtml(t)}</span>`).join("")}
                    </div>

                    <ul class="cat-stats">
                        <li><span>🤗 Cuddly</span> ${renderStatBar(stats.cuddliness)}</li>
                        <li><span>🪶 Playful</span> ${renderStatBar(stats.playfulness)}</li>
                        <li><span>🧠 Clever</span> ${renderStatBar(stats.cleverness)}</li>
                        <li><span>😼 Mischief</span> ${renderStatBar(stats.mischief)}</li>
                        <li><span>💬 Talkative</span> ${renderStatBar(stats.talk)}</li>
                    </ul>

                    <p class="cat-funfact">💡 ${escapeHtml(spec.funFact)}</p>

                    <div class="cat-actions">
                        <button type="button" class="action-btn" data-act="pet">🤚 Pat <span class="boost">+5</span></button>
                        <button type="button" class="action-btn" data-act="play">🪀 Play <span class="boost">+10</span></button>
                        <button type="button" class="action-btn" data-act="treat">🍓 Snack <span class="boost">+15</span></button>
                        <button type="button" class="action-btn" data-act="chat">💬 Chat <span class="boost">+3</span></button>
                    </div>
                    <div class="cat-bubble-area" id="cat-bubble-area" aria-live="polite"></div>
                </div>
            </section>
        `;

        $("#rename-btn").addEventListener("click", () => {
            const name = prompt("What's their new name?", pet.name);
            if (name && name.trim()) {
                pet.name = name.trim().slice(0, 24);
                saveState();
                renderAnimalDetail(root, petId);
            }
        });

        $$(".action-btn").forEach(btn => {
            btn.addEventListener("click", () => doAnimalInteraction(btn.dataset.act, petId, root));
        });
        wireCollectionThemeSwitch(root, "/clan");
    }

    function doAnimalInteraction(kind, petId, root) {
        const pet = findOwnedAnimalEntry(petId);
        if (!pet) return;
        const spec = animalSpecFor(petId);
        if (!spec) return;

        const boost = { pet: 5, play: 10, treat: 15, chat: 3 }[kind] || 0;
        pet.happiness = Math.min(100, window.Animals.currentHappiness(pet) + boost);
        pet.lastInteractedISO = new Date().toISOString();
        saveState();

        showCatBubble(animalReactionPhraseFor(petId, kind));

        const stage = $("#cat-stage");
        if (stage) {
            stage.classList.remove("anim-bounce", "anim-wiggle", "anim-spin", "anim-shake");
            void stage.offsetWidth;
            const animMap = { pet: "anim-bounce", play: "anim-spin", treat: "anim-wiggle", chat: "anim-shake" };
            stage.classList.add(animMap[kind] || "anim-bounce");
            const expression = kind === "pet" ? "love" : (kind === "play" ? "cheering" : (kind === "treat" ? "happy" : "wave"));
            stage.innerHTML = renderAnimalArt(petId, expression);
            spawnFloater(stage, kind);
            setTimeout(() => {
                const mood = window.Animals.moodFor(window.Animals.currentHappiness(pet));
                stage.innerHTML = renderAnimalArt(petId, mood.expression);
            }, 1400);
        }

        const happy = window.Animals.currentHappiness(pet);
        const num = $("#happiness-num");
        const bar = $("#happiness-bar");
        if (num) num.textContent = happy + "%";
        if (bar) bar.style.width = happy + "%";
    }

    function renderAnimalParkSelect(root) {
        const progress = animalsState();
        if (!animalCompanionEntries().length) { navigate("/clan"); return; }
        progress.parkSelection = progress.parkSelection || [];
        const switcher = renderCollectionThemeSwitch("animals");
        const selected = new Set(progress.parkSelection);

        const petCards = animalCompanionEntries().map(pet => {
            const id = animalEntryId(pet);
            const spec = animalSpecFor(id);
            if (!spec) return "";
            const isSel = selected.has(id);
            return `
                <button type="button" class="park-pick ${isSel ? "is-picked" : ""}" data-id="${id}">
                    <div class="park-pick-svg">${renderAnimalArt(id, "wave")}</div>
                    <div class="park-pick-name">${escapeHtml(pet.name)}</div>
                    <div class="park-pick-breed">${escapeHtml(spec.species)}${spec.hybrid ? " · Hybrid" : ""}${spec.sparkle ? " · Sparkle" : ""}</div>
                    ${isSel ? `<div class="park-pick-check">✓</div>` : ""}
                </button>
            `;
        }).join("");

        root.innerHTML = `
            <a class="back-link" href="#/clan">← Back to Pets</a>
            ${switcher}
            <header class="park-header">
                <h1>🌿 Visit the Meadow</h1>
                <p>Pick up to <strong>5 pets</strong> to take with you.</p>
            </header>
            <div class="park-select-bar">
                <span id="park-select-count">${progress.parkSelection.length} of 5 chosen</span>
                <button type="button" class="primary-btn pulse-btn" id="park-go-btn" ${progress.parkSelection.length === 0 ? "disabled" : ""}>Off to the Meadow! 🐾</button>
            </div>
            <section class="park-pick-grid">${petCards}</section>
        `;

        $$(".park-pick").forEach(el => {
            el.addEventListener("click", () => {
                const id = el.dataset.id;
                const idx = progress.parkSelection.indexOf(id);
                if (idx >= 0) {
                    progress.parkSelection.splice(idx, 1);
                } else if (progress.parkSelection.length < 5) {
                    progress.parkSelection.push(id);
                } else {
                    return;
                }
                saveState();
                renderAnimalParkSelect(root);
            });
        });
        $("#park-go-btn").addEventListener("click", () => {
            if (!progress.parkSelection.length) return;
            navigate("/clan/park/play");
        });
        wireCollectionThemeSwitch(root, "/clan");
    }

    function renderAnimalParkPlay(root) {
        const progress = animalsState();
        const ids = progress.parkSelection || [];
        if (!ids.length) { navigate("/clan/park"); return; }
        const selectedPets = ids.map(findOwnedAnimalEntry).filter(Boolean);
        if (!selectedPets.length) { navigate("/clan/park"); return; }

        window.Park.start(root, selectedPets, {
            onExit: () => {
                selectedPets.forEach(pet => {
                    pet.happiness = Math.min(100, window.Animals.currentHappiness(pet) + 12);
                    pet.lastInteractedISO = new Date().toISOString();
                });
                saveState();
                navigate("/clan");
            },
            backHref: "#/clan",
            title: "🌿 Meadow Visit",
            blurb: "Tap a pet to pick them up. Click an action to make all your pets react. Have fun!",
            help: "Drag a pet by clicking and holding. Each one has its own personality - watch how they react!",
            groupName: "pets",
            renderPet: (entry, expression) => renderAnimalArt(animalEntryId(entry), expression),
            resolvePet: entry => animalSpecFor(animalEntryId(entry)),
            getPetId: entry => animalEntryId(entry),
            getPetName: (entry, spec) => entry.name || (spec && spec.defaultName) || "Pet",
            reactionPhrase: (petId, kind) => animalReactionPhraseFor(petId, kind)
        });
    }

    /* ---------- Stats ---------- */

    function countAllQuestions(subjectId) {
        const s = window.SUBJECT_DATA[subjectId];
        if (!s) return 0;
        return (s.mcqs || []).length + (s.short || []).length + (s.long || []).length;
    }

    function subjectSummary(subjectId) {
        const subj = window.SUBJECT_DATA[subjectId];
        const subjState = state.subjects[subjectId] || { attempts: {} };
        const total = countAllQuestions(subjectId);
        const attempts = Object.values(subjState.attempts);
        const attempted = attempts.length;
        const correct = attempts.filter(a => a.correct).length;
        return {
            total,
            attempted,
            attemptedPct: pct(attempted, total),
            correct: pct(correct, attempted)
        };
    }

    /* ---------- Boot ---------- */

    function bindGlobalEvents() {
        window.addEventListener("hashchange", render);
        window.addEventListener("DOMContentLoaded", render);
    }

    function showResetWarning() {
        // Build a snapshot of what's about to be deleted, so the warning is concrete.
        const cs = state.clan || { cats: [], claimTickets: 0 };
        const animalProgress = animalsState();
        const totalAnswered = state.stats.totalAnswered;
        const catCount = totalCatCompanions();
        const animalCount = totalAnimalCompanions();
        const tickets = cs.claimTickets || 0;
        const animalTickets = animalProgress.claimTickets || 0;
        const sparklePotions = sparklePotionCount();
        const savedBreakBestCount = BREAK_GAMES.filter(game => {
            const value = state.breaks && state.breaks[game.highKey];
            if (game.id === "meowterbike" && value && typeof value === "object") {
                return Object.keys(value).some(key => typeof value[key] === "number" && value[key] > 0);
            }
            return typeof value === "number" && value > 0;
        }).length;
        const sessions = STATE_SUBJECTS.reduce((n, id) => n + (state.subjects[id].quizSessions || []).length, 0);
        const namedCats = catCompanionEntries().filter(c => {
            const breed = catSpecFor(catEntryId(c));
            return breed && c.name && c.name !== breed.defaultName;
        }).length;

        // Remove any existing modal first
        const existing = document.getElementById("reset-modal");
        if (existing) existing.remove();

        const modal = document.createElement("div");
        modal.id = "reset-modal";
        modal.className = "reset-modal-overlay";
        modal.innerHTML = `
            <div class="reset-modal" role="dialog" aria-labelledby="reset-modal-title" aria-modal="true">
                <div class="reset-modal-icon">⚠️</div>
                <h2 id="reset-modal-title">Wait — this wipes EVERYTHING</h2>
                <p class="reset-modal-lead">Resetting progress is <strong>permanent and cannot be undone</strong>. You'll lose all of the following:</p>
                <ul class="reset-modal-list">
                    <li><span>📚</span> <strong>${totalAnswered}</strong> questions answered across ${sessions} quiz session${sessions === 1 ? "" : "s"}</li>
                    <li><span>🏆</span> Every best score on every Practice Set and Mock Exam</li>
                    <li><span>🐾</span> Your <strong>${catCount}</strong> cat companion${catCount === 1 ? "" : "s"}${namedCats ? ` (including <strong>${namedCats}</strong> custom-named ${namedCats === 1 ? "cat" : "cats"})` : ""} and all their happiness</li>
                    <li><span>🎟️</span> ${tickets} unspent Cat Ticket${tickets === 1 ? "" : "s"}</li>
                    <li><span>🦊</span> Your <strong>${animalCount}</strong> animal companion${animalCount === 1 ? "" : "s"} and all their happiness</li>
                    <li><span>🎟️</span> ${animalTickets} unspent Pet Ticket${animalTickets === 1 ? "" : "s"}</li>
                    <li><span>✨</span> ${sparklePotions} Sparkle Potion${sparklePotions === 1 ? "" : "s"}</li>
                    <li><span>🐱</span> <strong>${savedBreakBestCount}</strong> saved break-game best${savedBreakBestCount === 1 ? "" : "s"}, including MeowtorBike tour times</li>
                    <li><span>🔥</span> Your current and best streaks</li>
                    <li><span>⏱️</span> Break cooldown timer</li>
                </ul>
                <p class="reset-modal-warn">You will need to rebuild both collections from scratch - any cats, pets, and hybrids you earned will be gone forever.</p>
                <label class="reset-modal-confirm">
                    <input type="checkbox" id="reset-modal-check">
                    <span>I understand this cannot be undone, and I want to delete everything.</span>
                </label>
                <div class="reset-modal-actions">
                    <button type="button" class="ghost-btn" id="reset-modal-cancel">Cancel — keep my progress</button>
                    <button type="button" class="reset-modal-go" id="reset-modal-confirm" disabled>Yes, reset everything</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const checkBox = document.getElementById("reset-modal-check");
        const goBtn = document.getElementById("reset-modal-confirm");
        checkBox.addEventListener("change", () => {
            goBtn.disabled = !checkBox.checked;
        });
        document.getElementById("reset-modal-cancel").addEventListener("click", closeResetModal);
        modal.addEventListener("click", (e) => { if (e.target === modal) closeResetModal(); });
        goBtn.addEventListener("click", () => {
            // Final native confirm for the rare double-click misclickers
            if (!confirm("Last chance - really delete every cat, every pet, every score, and start over?")) return;
            state = defaultState();
            saveState();
            closeResetModal();
            applyCustomName();
            applyVisualTheme();
            applyFooterCaption();
            render();
            mascotPopIn({ expression: "wave", message: "Fresh start - let's go!", duration: 3000 });
        });
        // Focus the cancel button for safety
        setTimeout(() => document.getElementById("reset-modal-cancel").focus(), 50);
    }

    function closeResetModal() {
        const m = document.getElementById("reset-modal");
        if (m) m.remove();
    }

    /* ---------- Custom name ---------- */

    function customName() {
        return savedCustomName() || "Student";
    }

    function applyCustomName() {
        const name = customName();
        document.querySelectorAll("[data-name]").forEach(el => { el.textContent = name; });
        document.title = `${name}'s Study Guide · Term 2 2026`;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", `${name}'s Study Guide — Term 2 2026`);
    }

    function applyFooterCaption() {
        const footer = document.getElementById("footer-caption");
        if (!footer) return;
        const year = yearLabel(currentSelectedYear());
        footer.textContent = year
            ? `Made with 🐾 for ${customName()} · ${year}`
            : `Made with 🐾 for ${customName()}`;
    }

    /* ---------- Settings page ---------- */

    function renderSettings(root, draft) {
        const s = state.settings || {};
        const hasKey = !!s.geminiApiKey;
        const cs = state.clan || { cats: [] };
        const animalProgress = animalsState();
        const totalAnswered = state.stats.totalAnswered;
        const catCount = totalCatCompanions();
        const petCount = totalAnimalCompanions();
        const potions = sparklePotionCount();
        const lastBackup = s.lastBackupISO ? new Date(s.lastBackupISO).toLocaleString() : "never";
        const profileDraft = resolveProfileDraft(draft);
        const activeTheme = currentThemeId();
        const activeVisualTheme = currentVisualTheme();
        const examYearId = normalizeYearId(profileDraft.yearId) || currentSelectedYear();
        const examSubjects = examYearId ? subjectOptionsForYear(examYearId) : [];
        const examSchedule = examYearId ? examScheduleForYear(examYearId) : {};
        const examRows = examSubjects.map(subject => {
            const subj = window.SUBJECT_DATA[subject.id];
            const entry = sanitizeExamDayEntry(examSchedule[subject.id]);
            return `
                <div class="exam-day-row">
                    <div class="exam-day-subject">
                        <strong>${subj ? escapeHtml(subj.name) : escapeHtml(subject.id)}</strong>
                        <span>${entry.detail ? escapeHtml(entry.detail) : "No exam day set yet."}</span>
                    </div>
                    <label class="settings-field exam-day-field">
                        <span>Date</span>
                        <input type="date" data-exam-date="${subject.id}" value="${escapeHtml(entry.date)}">
                    </label>
                    <label class="settings-field exam-day-field exam-day-detail-field">
                        <span>Time / notes</span>
                        <input type="text" data-exam-detail="${subject.id}" value="${escapeHtml(entry.detail)}" placeholder="e.g. P3 & 4 · 90 mins">
                    </label>
                </div>
            `;
        }).join("");

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            <header class="settings-header">
                <h1>⚙️ Settings</h1>
                <p>Personalise your study guide and back up your progress.</p>
            </header>

            <section class="settings-section">
                <h2>👤 Profile</h2>
                <label class="settings-field">
                    <span>Your name</span>
                    <input type="text" id="settings-name" value="${escapeHtml((s.customName || "").trim())}" maxlength="24" placeholder="Enter your name">
                </label>
                <p class="settings-help">Used in greetings on the home page and the brand bar at the top. Existing pet backstories and bios aren't changed.</p>
                ${renderProfileSelectionFields(profileDraft, "settings-profile")}
                <div class="settings-actions">
                    <button type="button" class="primary-btn" id="settings-profile-save">Save study profile</button>
                </div>
                <p class="settings-help">Changing your year or subjects updates what you see, but hidden subjects keep all their saved progress.</p>
            </section>

            <section class="settings-section">
                <h2>🎨 Theme selector</h2>
                <p class="settings-help">Choose a colour theme for the whole app. This changes the look only — it won't affect your mascots, pets, or progress.</p>
                ${renderVisualThemeSelector(activeVisualTheme)}
            </section>

            <section class="settings-section">
                <h2>🐾 Mascot &amp; collection theme</h2>
                <p class="settings-help">Choose whether the app uses Cats or Animals for general mascots and which collection earns new tickets by default. Switching theme does <strong>not</strong> delete any cats or pets you've already earned.</p>
                <div class="theme-switcher settings-theme-switcher" role="radiogroup" aria-label="Choose app theme">
                    <button type="button" class="theme-switch-btn ${activeTheme === "cats" ? "is-active" : ""}" data-settings-theme="cats" aria-pressed="${activeTheme === "cats" ? "true" : "false"}">
                        <span class="theme-switch-emoji">🐱</span>
                        <span class="theme-switch-copy">
                            <strong>Cats</strong>
                            <span>${catCount} collected · ${(cs.claimTickets || 0)} ticket${(cs.claimTickets || 0) === 1 ? "" : "s"}</span>
                        </span>
                    </button>
                    <button type="button" class="theme-switch-btn ${activeTheme === "animals" ? "is-active" : ""}" data-settings-theme="animals" aria-pressed="${activeTheme === "animals" ? "true" : "false"}">
                        <span class="theme-switch-emoji">🦊</span>
                        <span class="theme-switch-copy">
                            <strong>Animals</strong>
                            <span>${petCount} collected · ${(animalProgress.claimTickets || 0)} ticket${(animalProgress.claimTickets || 0) === 1 ? "" : "s"} · ${potions} potion${potions === 1 ? "" : "s"}</span>
                        </span>
                    </button>
                </div>
            </section>

            <section class="settings-section">
                <h2>🤖 AI assistance (Gemini)</h2>
                <p class="settings-help">A Google Gemini API key enables AI-powered marking and feedback on written answers. The key stays in your browser only — it's never sent anywhere except Google's API.</p>
                <label class="settings-field">
                    <span>Gemini API key</span>
                    <div class="settings-key-row">
                        <input type="password" id="settings-key" value="${escapeHtml(s.geminiApiKey || "")}" placeholder="paste your key here" autocomplete="off">
                        <button type="button" class="ghost-btn" id="settings-key-show">👁 Show</button>
                    </div>
                </label>
                <div class="settings-actions">
                    <button type="button" class="primary-btn" id="settings-save-key">Save key</button>
                    <button type="button" class="ghost-btn" id="settings-test-key" ${hasKey ? "" : "disabled"}>Test connection</button>
                    <button type="button" class="ghost-btn" id="settings-clear-key">Remove key</button>
                </div>
                <p class="settings-key-status" id="settings-key-status" aria-live="polite">${hasKey ? "✅ Key saved." : "No key saved — AI features are disabled."}</p>
                <p class="settings-help">Get a free key at <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a>.</p>
            </section>

            <section class="settings-section">
                <h2>🗓️ Exam days</h2>
                ${examYearId ? `
                    <p class="settings-help">These handbook defaults are loaded from the official exam notification PDFs for <strong>${escapeHtml(yearLabel(examYearId))}</strong>. You can update them here any time. Blank dates are hidden from the Study Calendar.</p>
                    <div class="exam-day-grid">${examRows}</div>
                    <div class="settings-actions">
                        <button type="button" class="primary-btn" id="settings-save-exams">Save exam days</button>
                        <button type="button" class="ghost-btn" id="settings-reset-exams">Reset handbook defaults</button>
                    </div>
                ` : `
                    <p class="settings-help">Choose a study year above to load and edit exam days for that year.</p>
                `}
            </section>

            <section class="settings-section">
                <h2>💾 Backup &amp; restore</h2>
                <p class="settings-help">Save a complete snapshot of your progress (cats, pets, scores, answers, settings) to a JSON file you can keep or move to another device.</p>
                <div class="settings-actions">
                    <button type="button" class="primary-btn" id="settings-save-state">💾 Save state to file</button>
                    <button type="button" class="ghost-btn" id="settings-load-state">📂 Load state from file</button>
                </div>
                <p class="settings-help">Right now you have <strong>${totalAnswered}</strong> questions answered, <strong>${catCount}</strong> cat${catCount === 1 ? "" : "s"}, and <strong>${petCount}</strong> animal pet${petCount === 1 ? "" : "s"}. Last backup: ${escapeHtml(lastBackup)}.</p>
            </section>

            <section class="settings-section settings-danger">
                <h2>⚠️ Danger zone</h2>
                <button type="button" class="reset-modal-go" id="settings-reset">Reset all progress…</button>
            </section>
        `;

        $("#settings-name").addEventListener("blur", (e) => {
            state.settings.customName = (e.target.value || "").trim().slice(0, 24);
            saveState();
            applyCustomName();
            applyFooterCaption();
        });

        bindProfileSelectionForm(
            root,
            profileDraft,
            "settings-profile",
            nextDraft => renderSettings(root, nextDraft),
            (yearId, selectedSubjects) => {
                saveStudyProfile(yearId, selectedSubjects);
                renderSettings(root);
                mascotPopIn({ expression: "proud", message: "Study profile updated!", duration: 2200 });
            }
        );

        $$("[data-settings-theme]", root).forEach(btn => {
            btn.addEventListener("click", () => {
                const nextTheme = normalizeThemePreference(btn.dataset.settingsTheme);
                if (!setThemePreference(nextTheme)) return;
                renderSettings(root);
                announceThemeChange(nextTheme === "animals" ? "Animals theme activated!" : "Cats theme activated!");
            });
        });
        $$("[data-visual-theme]", root).forEach(btn => {
            btn.addEventListener("click", () => {
                const nextTheme = normalizeVisualTheme(btn.dataset.visualTheme);
                if (!setVisualTheme(nextTheme)) return;
                renderSettings(root);
                announceThemeChange(`${visualThemeMeta(nextTheme).label} theme activated!`);
            });
        });
        const saveExamsBtn = $("#settings-save-exams");
        if (saveExamsBtn && examYearId) {
            saveExamsBtn.addEventListener("click", () => {
                const entriesBySubject = {};
                examSubjects.forEach(subject => {
                    const dateInput = root.querySelector(`[data-exam-date="${subject.id}"]`);
                    const detailInput = root.querySelector(`[data-exam-detail="${subject.id}"]`);
                    entriesBySubject[subject.id] = {
                        date: dateInput ? dateInput.value : "",
                        detail: detailInput ? detailInput.value : ""
                    };
                });
                updateExamScheduleEntries(examYearId, entriesBySubject);
                renderSettings(root, profileDraft);
                mascotPopIn({ expression: "proud", message: "Exam days updated!", duration: 2200 });
            });
        }
        const resetExamsBtn = $("#settings-reset-exams");
        if (resetExamsBtn && examYearId) {
            resetExamsBtn.addEventListener("click", () => {
                clearExamScheduleOverrides(examYearId, examSubjects.map(subject => subject.id));
                renderSettings(root, profileDraft);
                mascotPopIn({ expression: "wave", message: "Handbook defaults restored.", duration: 2200 });
            });
        }

        const keyInput = $("#settings-key");
        $("#settings-key-show").addEventListener("click", () => {
            keyInput.type = keyInput.type === "password" ? "text" : "password";
        });
        $("#settings-save-key").addEventListener("click", () => {
            state.settings.geminiApiKey = (keyInput.value || "").trim();
            saveState();
            $("#settings-key-status").textContent = state.settings.geminiApiKey
                ? "✅ Key saved."
                : "No key saved — AI features are disabled.";
            $("#settings-test-key").disabled = !state.settings.geminiApiKey;
        });
        $("#settings-clear-key").addEventListener("click", () => {
            state.settings.geminiApiKey = "";
            keyInput.value = "";
            saveState();
            $("#settings-key-status").textContent = "Key removed — AI features are disabled.";
            $("#settings-test-key").disabled = true;
        });
        $("#settings-test-key").addEventListener("click", async () => {
            const status = $("#settings-key-status");
            status.textContent = "Testing connection… (discovering supported model)";
            try {
                const ok = await window.AI.testKey(state.settings.geminiApiKey);
                const model = window.AI.getDiscoveredModel();
                status.textContent = ok
                    ? `✅ Key works! Using model: ${model || "(unknown)"}`
                    : "❌ Key did not work — double-check it.";
            } catch (e) {
                status.textContent = "❌ " + (e.message || "Network error");
            }
        });

        $("#settings-save-state").addEventListener("click", saveStateToFile);
        $("#settings-load-state").addEventListener("click", loadStateFromFile);
        $("#settings-reset").addEventListener("click", showResetWarning);
    }

    function saveStateToFile() {
        const today = new Date().toISOString().slice(0, 10);
        const filename = `${customName().toLowerCase()}-studyguide-${today}.json`;
        const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        state.settings.lastBackupISO = new Date().toISOString();
        saveState();
        mascotPopIn({ expression: "wave", message: "Backup saved!", duration: 2400 });
    }

    function loadStateFromFile() {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json,.json";
        input.onchange = (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                let parsed;
                try { parsed = JSON.parse(reader.result); }
                catch (err) { alert("That file isn't valid JSON."); return; }
                if (!parsed || typeof parsed !== "object" || !parsed.subjects) {
                    alert("That file doesn't look like a study-guide backup.");
                    return;
                }
                showLoadConfirm(parsed);
            };
            reader.readAsText(file);
        };
        input.click();
    }

    function showLoadConfirm(loaded) {
        const existing = document.getElementById("reset-modal");
        if (existing) existing.remove();
        const modal = document.createElement("div");
        modal.id = "reset-modal";
        modal.className = "reset-modal-overlay";
        modal.innerHTML = `
            <div class="reset-modal" role="dialog" aria-modal="true">
                <div class="reset-modal-icon">📂</div>
                <h2>Replace your progress with this file?</h2>
                <p class="reset-modal-lead">Loading this file will <strong>overwrite all your current progress</strong>: cats, pets, exam scores, settings, the lot. Make sure you've backed up first if you want to keep anything.</p>
                <label class="reset-modal-confirm">
                    <input type="checkbox" id="load-modal-check">
                    <span>I understand this replaces my current progress.</span>
                </label>
                <div class="reset-modal-actions">
                    <button type="button" class="ghost-btn" id="load-modal-cancel">Cancel</button>
                    <button type="button" class="reset-modal-go" id="load-modal-confirm" disabled>Yes, load this file</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        const checkBox = document.getElementById("load-modal-check");
        const goBtn = document.getElementById("load-modal-confirm");
        checkBox.addEventListener("change", () => { goBtn.disabled = !checkBox.checked; });
        document.getElementById("load-modal-cancel").addEventListener("click", closeResetModal);
        modal.addEventListener("click", (e) => { if (e.target === modal) closeResetModal(); });
        goBtn.addEventListener("click", () => {
            state = migrateState(Object.assign(defaultState(), loaded));
            saveState();
            closeResetModal();
            applyCustomName();
            applyVisualTheme();
            applyFooterCaption();
            render();
            mascotPopIn({ expression: "cheering", message: "Progress restored!", duration: 3000 });
        });
        setTimeout(() => document.getElementById("load-modal-cancel").focus(), 50);
    }

    generatePracticeExams();
    bindGlobalEvents();
    applyCustomName();
    applyVisualTheme();
    applyFooterCaption();
    if (document.readyState !== "loading") render();
})();
