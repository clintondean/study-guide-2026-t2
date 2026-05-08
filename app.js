// Harper's Study Guide — single-page app shell, router, quiz engine, state.
// All data is read from window.SUBJECT_DATA which is populated by data/*.js.

(function () {
    "use strict";

    const STORAGE_KEY = "harper-studyguide-v1";
    const SUBJECTS = ["commerce", "english", "geography", "maths"];
    const PRACTICE_EXAMS_PER_TOPIC = 10;
    const PRACTICE_QS_PER_EXAM = 20;
    const PRACTICE_MCQ = 14;
    const PRACTICE_SA = 5;
    const PRACTICE_LA = 1;

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
        SUBJECTS.forEach(subjectId => {
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
                t.examIds = [];
                for (let n = 1; n <= PRACTICE_EXAMS_PER_TOPIC; n++) {
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
            return Object.assign(defaultState(), parsed);
        } catch (_) {
            return defaultState();
        }
    }

    function defaultState() {
        const subjects = {};
        SUBJECTS.forEach(s => {
            subjects[s] = {
                attempts: {},        // questionId -> { answer, correct, attempts }
                quizSessions: [],    // [{ mode, score, total, date, topicId }]
                bestScores: {}       // mode key -> best ratio
            };
        });
        return {
            subjects,
            settings: { reducedMotion: false },
            stats: { totalAnswered: 0, totalCorrect: 0, currentStreak: 0, bestStreak: 0 },
            clan: {
                cats: [],            // [{ breedId, name, dateISO, lastInteractedISO, happiness }]
                claimTickets: 0,     // tokens to spend on a new cat
                perfectExams: {}     // mode -> true once a 100% has been scored (one ticket per exam)
            },
            breaks: {
                lastBreakStartISO: null,  // when the most recent break STARTED
                catrisHighScore: 0,       // best Catris score
                invadersHighScore: 0,     // best Cat Invaders score
                catanoidHighScore: 0      // best Catanoid score
            }
        };
    }

    const BREAK_COOLDOWN_MS = 30 * 60 * 1000; // 30 minutes between breaks

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

    function saveState() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
        catch (_) { /* quota or private mode — non-fatal */ }
    }

    let state = loadState();

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
        const root = $("#app");
        // Stop any park timers if we're leaving the park-play view
        const goingToParkPlay = route[0] === "clan" && route[1] === "park" && route[2] === "play";
        if (!goingToParkPlay && window.Park && window.Park.stop) window.Park.stop();
        // Going into the break section?
        const goingToBreak = route[0] === "break";
        const goingToBreakGame = goingToBreak && route[1];
        // Stop the currently-running break game (if any) when the route changes —
        // each game's stop() is idempotent.
        if (window.CatTetris && window.CatTetris.stop) window.CatTetris.stop();
        if (window.CatInvaders && window.CatInvaders.stop) window.CatInvaders.stop();
        if (window.Catanoid && window.Catanoid.stop) window.Catanoid.stop();
        // If leaving the break section entirely, end the shared session.
        if (!goingToBreak && window.BreakSession) window.BreakSession.end();
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
        if (route.length === 0) return renderHome(root);
        if (route[0] === "progress") return renderProgress(root);
        if (route[0] === "break") {
            if (route[1] === "catris") return renderBreakGame(root, "catris");
            if (route[1] === "invaders") return renderBreakGame(root, "invaders");
            if (route[1] === "catanoid") return renderBreakGame(root, "catanoid");
            return renderBreakHub(root);
        }
        if (route[0] === "clan") {
            if (route[1] === "claim") return renderClaim(root);
            if (route[1] === "park") {
                if (route[2] === "play") return renderParkPlay(root);
                return renderParkSelect(root);
            }
            if (route[1] === "cat" && route[2]) return renderCatDetail(root, route[2]);
            return renderClan(root);
        }
        if (route[0] === "subject" && route[1]) {
            const subjectId = route[1];
            if (route[2] === "quiz" && route[3]) return renderQuiz(root, subjectId, route[3], route[4] || null);
            return renderSubject(root, subjectId);
        }
        renderHome(root);
    }

    function updateClanBadge() {
        const badge = document.getElementById("clan-badge");
        if (!badge) return;
        const tickets = (state.clan && state.clan.claimTickets) || 0;
        if (tickets > 0) {
            badge.textContent = tickets;
            badge.hidden = false;
        } else {
            badge.hidden = true;
        }
    }

    /* ---------- Home view ---------- */

    function renderHome(root) {
        const greetings = [
            "Hi Harper! What shall we study?",
            "Hi Harper! Pick a subject — your study cats are ready 🐱",
            "Welcome back, Harper. One question at a time.",
            "Hi Harper! You've got this."
        ];
        const greeting = greetings[Math.floor(Math.random() * greetings.length)];

        const cards = SUBJECTS.map(id => {
            const subj = window.SUBJECT_DATA[id];
            if (!subj) return "";
            const stats = subjectSummary(id);
            return `
                <a class="subject-card" href="#/subject/${id}" style="--accent:${subj.color}">
                    <div class="subject-card-icon" aria-hidden="true">${subj.icon}</div>
                    <h3>${escapeHtml(subj.name)}</h3>
                    <p class="subject-tagline">${escapeHtml(subj.tagline)}</p>
                    <div class="subject-card-stats">
                        <span>${stats.attempted}/${stats.total} answered</span>
                        <span>${stats.correct}% correct</span>
                    </div>
                    <div class="progress-bar"><span style="width:${stats.attemptedPct}%"></span></div>
                </a>
            `;
        }).join("");

        const totalAnswered = state.stats.totalAnswered;
        const totalCorrect = state.stats.totalCorrect;
        const overallPct = pct(totalCorrect, totalAnswered);
        const totalQuestions = SUBJECTS.reduce((acc, id) => acc + countAllQuestions(id), 0);

        root.innerHTML = `
            <section class="hero">
                <div class="hero-text">
                    <h1>${escapeHtml(greeting)}</h1>
                    <p>Half-Yearly exams are coming up. Pick a subject below to start practising — your progress saves automatically.</p>
                    <div class="hero-stats">
                        <div><strong>${totalAnswered}</strong><span>answered</span></div>
                        <div><strong>${overallPct}%</strong><span>correct overall</span></div>
                        <div><strong>${state.stats.bestStreak}</strong><span>best streak 🔥</span></div>
                        <div><strong>${totalQuestions}</strong><span>questions total</span></div>
                    </div>
                </div>
                <div class="hero-cat">${window.Cats.svg("wave", "ginger")}</div>
            </section>
            <section class="subject-grid">${cards}</section>
        `;
    }

    /* ---------- Subject view ---------- */

    function renderSubject(root, subjectId) {
        const subj = window.SUBJECT_DATA[subjectId];
        if (!subj) { navigate("/"); return; }
        const stats = subjectSummary(subjectId);
        const isMaths = subjectId === "maths";

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
                Every Maths Practice question has a <em>Help</em> button — tap it for step-by-step working. (Help is hidden during Mock Exams to mirror real exam conditions.)
            </aside>` : ""}
        `;
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
                <h2>🎯 Practice Questions <span class="section-tag">${subj.practiceExams.length} sets · 20 questions each</span></h2>
                <p class="section-blurb">Each set is a focused, topic-themed bundle of 20 questions. Answers lock once placed, and you can re-attempt as many times as you like. Help is available on every question. Score 100% to unlock a new cat for your clan!</p>
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
        // Lock-in applies to BOTH Practice Questions and Mock Exams.
        const isLockMode = !!exam;
        // Tag each position with a unique key so duplicate question IDs in an
        // exam (allowed when pools are small) get independent session state.
        const tagged = ordered.map((q, i) => Object.assign({}, q, { _sessionKey: `${i}-${q.id}` }));
        session = {
            subjectId, mode, exam,
            isMock,
            isLockMode,
            questions: tagged,
            index: 0,
            correct: 0,
            attempted: 0,
            answers: {}, // sessionKey -> { user, userText, correct, locked, revealed }
            sessionStreak: 0
        };
        renderCurrentQuestion(root);
    }

    // Per-position key used for session.answers (so duplicate q.id's stay separate)
    function keyOf(q) { return q._sessionKey || q.id; }

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

        root.innerHTML = `
            <a class="back-link" href="#/subject/${session.subjectId}">← Back${session.isLockMode ? " (exits attempt)" : ""}</a>
            <div class="quiz-shell ${session.isMock ? "is-mock" : (session.isLockMode ? "is-practice" : "")}" style="--accent:${subj.color}">
                ${session.isMock ? `
                    <div class="mock-banner mock-banner-mock">
                        🔒 <strong>Mock Exam</strong> — once you press Next, your answer is locked. Help is hidden.
                    </div>
                ` : (session.isLockMode ? `
                    <div class="mock-banner mock-banner-practice">
                        🔒 <strong>Practice Questions</strong> — answers lock once you press Next. Use 💡 Help anytime, and re-attempt to improve.
                    </div>
                ` : "")}
                <div class="quiz-progress">
                    <div class="quiz-meta">
                        <span class="quiz-subject">${subj.icon} ${escapeHtml(subj.name)}</span>
                        ${session.exam ? `<span class="${session.isMock ? 'mock-pill' : 'exam-pill'}">${session.isMock ? '📝 Mock' : '🎯 Practice'} · ${escapeHtml(session.exam.name)}</span>` : ""}
                        <span class="quiz-topic">${topic ? escapeHtml(topic.name) : ""}</span>
                    </div>
                    <div class="quiz-counter">Question ${num} / ${total}</div>
                    <div class="quiz-bar"><span style="width:${pct(num - 1, total)}%"></span></div>
                </div>
                <article class="question-card ${isLocked ? "is-locked" : ""}">
                    <div class="qtype-badge">${type === "mcq" ? "Multiple choice" : type === "long" ? "Extended response" : "Short answer"}</div>
                    <div class="question-prompt">${renderText(q.q)}</div>
                    ${q.marks ? `<div class="marks">[${q.marks} mark${q.marks === 1 ? "" : "s"}]</div>` : ""}
                    ${isLocked ? `<div class="locked-indicator">🔒 Answer locked — review only</div>` : ""}
                    <div class="answer-area" id="answer-area"></div>
                    ${q.help && !session.isMock ? `<button type="button" class="help-btn" id="help-btn">💡 Need help?</button>
                        <div class="help-panel" id="help-panel" hidden></div>` : ""}
                    <div class="feedback" id="feedback" aria-live="polite"></div>
                    <div class="quiz-controls">
                        <button type="button" class="ghost-btn" id="prev-btn" ${session.index === 0 ? "disabled" : ""}>← Prev</button>
                        <button type="button" class="primary-btn" id="next-btn">${isLastQuestion ? (session.isMock ? "Submit Exam 🏁" : "Finish") : "Next →"}</button>
                    </div>
                </article>
            </div>
        `;

        renderAnswerArea(q, previous, isLocked);

        if (q.help && !session.isMock) {
            $("#help-btn").addEventListener("click", () => toggleHelp(q));
        }
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
            const showSample = previous && previous.revealed;
            const ro = isLocked ? "readonly" : "";
            area.innerHTML = `
                <textarea id="written-answer" rows="${type === "long" ? 12 : 6}" ${ro} placeholder="${session.isMock ? "Type your response. Once you press Next it will be locked." : "Plan and write your response here. (Saved automatically.)"}">${escapeHtml(value)}</textarea>
                ${session.isMock ? `` : `
                    <div class="written-actions">
                        <button type="button" class="ghost-btn" id="reveal-sample">${showSample ? "Hide" : "Show"} sample answer</button>
                        <button type="button" class="ghost-btn" id="self-correct">${previous && previous.correct ? "Marked correct ✓" : "I got this right"}</button>
                    </div>
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
                ta.addEventListener("input", e => {
                    if (!session.answers[k]) session.answers[k] = { userText: "", correct: false };
                    session.answers[k].userText = e.target.value;
                });
            }
            const revealBtn = $("#reveal-sample");
            if (revealBtn) {
                revealBtn.addEventListener("click", () => {
                    if (!session.answers[k]) session.answers[k] = { userText: "", correct: false };
                    session.answers[k].revealed = !session.answers[k].revealed;
                    renderAnswerArea(q, session.answers[k], isLocked);
                });
            }
            const selfBtn = $("#self-correct");
            if (selfBtn) {
                selfBtn.addEventListener("click", () => {
                    if (!session.answers[k]) session.answers[k] = { userText: ($("#written-answer") || {}).value || "", correct: false };
                    session.answers[k].correct = !session.answers[k].correct;
                    if (session.answers[k].correct) {
                        window.Cats.popIn({ expression: "cheering", message: pickPhrase("correct") });
                    }
                    renderAnswerArea(q, session.answers[k], isLocked);
                });
            }
        }
    }

    function pickPhrase(kind) {
        const list = window.Cats.phrases[kind] || [""];
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

        session.answers[k] = { user: idx, correct, locked: nowLocked };

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
                window.Cats.popIn({
                    expression: "cheering",
                    message: session.sessionStreak >= 3 ? pickPhrase("streak") : pickPhrase("correct")
                });
            } else {
                session.sessionStreak = 0;
                window.Cats.popIn({
                    expression: "thinking",
                    message: pickPhrase("wrong")
                });
            }
        }
    }

    function toggleHelp(q) {
        const panel = $("#help-panel");
        if (!panel) return;
        if (!panel.hidden) { panel.hidden = true; return; }
        const help = q.help || {};
        const stepsHtml = (help.steps || []).map(s => `<li>${renderText(s)}</li>`).join("");
        panel.innerHTML = `
            ${help.rule ? `<p class="help-rule"><strong>Rule:</strong> ${renderText(help.rule)}</p>` : ""}
            ${stepsHtml ? `<ol class="help-steps">${stepsHtml}</ol>` : ""}
        `;
        panel.hidden = false;
    }

    function commitAnswer(q) {
        const subjState = state.subjects[session.subjectId];
        const k = keyOf(q);
        const ans = session.answers[k];
        if (!ans) {
            // In any lock-mode (practice OR mock), an unanswered question gets locked on Next.
            if (session.isLockMode) {
                session.answers[k] = { locked: true, correct: false };
            }
            return;
        }
        // Lock answers in any lock-mode (practice OR mock).
        if (session.isLockMode) ans.locked = true;

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

    function finishQuiz(root) {
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

        // 🐾 Cat clan: scoring 100% on an exam grants a claim ticket (one per exam ID).
        const isPerfect = total > 0 && correct === total;
        let grantedTicket = false;
        if (isPerfect) {
            state.clan = state.clan || { cats: [], claimTickets: 0, perfectExams: {} };
            if (!state.clan.perfectExams[session.mode]) {
                state.clan.perfectExams[session.mode] = true;
                state.clan.claimTickets = (state.clan.claimTickets || 0) + 1;
                grantedTicket = true;
            }
        }
        saveState();

        const cat = window.Cats.celebrate(ratio);
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
                    <div class="results-cat">${window.Cats.svg(cat.expression, cat.theme)}</div>
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

                ${grantedTicket ? `
                    <div class="ticket-banner">
                        <div class="ticket-icon">🎟️</div>
                        <div>
                            <strong>Cat ticket earned!</strong>
                            <p>You scored 100% — pick a new cat for your clan.</p>
                        </div>
                        <a class="primary-btn pulse-btn" href="#/clan/claim">Claim cat 🐾</a>
                    </div>
                ` : ""}

                <div class="results-actions">
                    <a class="primary-btn pulse-btn" href="#/subject/${session.subjectId}/quiz/${session.mode}">🔁 Retake ${isMock ? "Mock" : "Practice"}</a>
                    <a class="ghost-btn" href="#/subject/${session.subjectId}">← Back to ${escapeHtml(subj.name)}</a>
                    <a class="ghost-btn" href="#/">🏠 Home</a>
                    <a class="ghost-btn" href="#/clan">🐾 My Clan</a>
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
        setTimeout(() => window.Cats.popIn({
            expression: cat.expression, theme: cat.theme, message: cat.message,
            duration: 3500, side: "left"
        }), 400);
        if (ratio >= 0.7) {
            setTimeout(() => window.Cats.popIn({
                expression: ratio >= 0.9 ? "cheering" : "proud",
                theme: window.Cats.pickTheme(),
                message: isNewBest ? "New record! 🏆" : pickPhrase("finish"),
                duration: 3200, side: "right"
            }), 1100);
        }
        if (isNewBest) {
            setTimeout(() => window.Cats.popIn({
                expression: "cheering",
                theme: window.Cats.pickTheme(),
                message: "Personal best smashed!",
                duration: 3000, side: "left"
            }), 2200);
        }
    }

    function gradeFor(ratio) {
        if (ratio >= 0.9) return { letter: "A", color: "#2a9d8f" };
        if (ratio >= 0.75) return { letter: "B", color: "#43aa8b" };
        if (ratio >= 0.6) return { letter: "C", color: "#e9c46a" };
        if (ratio >= 0.4) return { letter: "D", color: "#f4a261" };
        return { letter: "E", color: "#e76f51" };
    }

    function ceremonyTitleFor(ratio, isMock, isNewBest) {
        if (isNewBest && ratio >= 0.9) return "🏆 PURR-FECTION!";
        if (isNewBest) return "🏆 New personal best!";
        if (ratio >= 0.95) return "Pawsome — virtually flawless!";
        if (ratio >= 0.85) return "Meow-velous work!";
        if (ratio >= 0.7) return "Cat-tastic effort!";
        if (ratio >= 0.5) return "You're getting there!";
        if (ratio > 0) return "Don't fur-get — every retry is progress.";
        return "Take a cat-nap, then go again.";
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

    function renderProgress(root) {
        const rows = SUBJECTS.map(id => {
            const subj = window.SUBJECT_DATA[id];
            if (!subj) return "";
            const stats = subjectSummary(id);
            const subjState = state.subjects[id];
            const recent = subjState.quizSessions.slice(-3).reverse();
            const recentHtml = recent.length
                ? recent.map(s => `<li>${escapeHtml(s.mode)} — ${s.score}/${s.total} · ${new Date(s.date).toLocaleString()}</li>`).join("")
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

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            <h1>My progress</h1>
            <p>${state.stats.totalAnswered} questions answered · ${pct(state.stats.totalCorrect, state.stats.totalAnswered)}% correct overall · best streak ${state.stats.bestStreak} 🔥</p>
            <div class="progress-grid">${rows}</div>
        `;
    }

    /* ---------- Cat Clan ---------- */

    function clanState() {
        if (!state.clan) state.clan = { cats: [], claimTickets: 0, perfectExams: {} };
        if (!Array.isArray(state.clan.cats)) state.clan.cats = [];
        if (!state.clan.perfectExams) state.clan.perfectExams = {};
        return state.clan;
    }

    function renderClan(root) {
        const cs = clanState();
        const total = window.Clan.totalBreeds();
        const own = cs.cats.length;
        const tickets = cs.claimTickets || 0;

        if (own === 0 && tickets === 0) {
            root.innerHTML = `
                <a class="back-link" href="#/">← Home</a>
                <section class="clan-empty">
                    <div class="clan-empty-cat">${window.Cats.svg("wave", "ginger")}</div>
                    <h1>Your cat clan is waiting!</h1>
                    <p>Score <strong>100%</strong> on any practice set or mock exam to earn a 🎟️ <strong>Cat Ticket</strong>. Spend the ticket to choose a new cat for your clan.</p>
                    <p>There are <strong>${total}</strong> different breeds to collect — each with its own personality, traits, and signature phrases.</p>
                    <a class="primary-btn" href="#/">Start a quiz →</a>
                </section>
            `;
            return;
        }

        const catCards = cs.cats.map(cat => {
            const breed = window.Clan.findBreed(cat.breedId);
            if (!breed) return "";
            const happy = window.Clan.currentHappiness(cat);
            const mood = window.Clan.moodFor(happy);
            return `
                <a class="clan-card mood-${mood.label.toLowerCase()}" href="#/clan/cat/${cat.breedId}">
                    <div class="clan-card-svg">${window.Cats.breedSvg(breed.appearance, mood.expression)}</div>
                    <h3>${escapeHtml(cat.name)}</h3>
                    <p class="clan-card-breed">${escapeHtml(breed.breed)}</p>
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

        const visitParkBtn = own > 0 ? `
            <a class="park-cta" href="#/clan/park">🌿 Visit the Park <span class="park-cta-sub">(take up to 5 cats)</span></a>
        ` : "";

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            <header class="clan-header">
                <h1>🐾 Harper's Cat Clan</h1>
                <p>${own} / ${total} cats collected</p>
                <div class="clan-progress-bar"><span style="width:${pct(own, total)}%"></span></div>
            </header>
            ${ticketsBlock}
            ${visitParkBtn}
            <section class="clan-grid">${catCards}</section>
        `;
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
        }
    ];

    function highScoreFor(gameId) {
        const game = BREAK_GAMES.find(g => g.id === gameId);
        if (!game) return 0;
        return (state.breaks && state.breaks[game.highKey]) || 0;
    }

    function setHighScoreFor(gameId, score) {
        const game = BREAK_GAMES.find(g => g.id === gameId);
        if (!game) return;
        state.breaks = state.breaks || {};
        if (score > (state.breaks[game.highKey] || 0)) {
            state.breaks[game.highKey] = score;
            saveState();
            window.Cats.popIn({
                expression: "cheering",
                message: "New high score! 🏆",
                duration: 3000, side: "right"
            });
        }
    }

    function renderBreakHub(root) {
        // Cooldown still applies to entering the break section
        const remaining = breakCooldownRemaining();
        if (remaining > 0 && !window.BreakSession.isActive()) {
            renderBreakLockout(root, remaining);
            return;
        }
        // Lazy-start the shared session timer when first arriving at the hub
        if (!window.BreakSession.isActive()) {
            recordBreakStart();
            window.BreakSession.start();
        }
        const cards = BREAK_GAMES.map(g => `
            <a class="break-game-card" href="#/break/${g.id}" style="--accent:${g.color}">
                <div class="break-game-icon">${g.icon}</div>
                <h3>${escapeHtml(g.name)}</h3>
                <p>${escapeHtml(g.blurb)}</p>
                <div class="break-game-high">🏆 Best: <strong>${highScoreFor(g.id)}</strong></div>
            </a>
        `).join("");

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            <header class="break-hub-header">
                <div>
                    <h1>☕ Take a break</h1>
                    <p>Pick a game. The 5-minute timer is shared across all three — switch games freely.</p>
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="break-hub-label">Time left</div>
                    <div class="tetris-timer" id="break-hub-timer">5:00</div>
                </div>
            </header>
            <section class="break-hub-grid">${cards}</section>
            <div class="break-hub-actions">
                <a class="ghost-btn" href="#/" id="break-hub-end">🚪 End break early</a>
            </div>
        `;
        // Live shared-timer ticker
        if (window._breakHubTimer) clearInterval(window._breakHubTimer);
        const tick = () => {
            const r = window.BreakSession.BREAK_MS - window.BreakSession.elapsed();
            const elem = document.getElementById("break-hub-timer");
            const label = document.getElementById("break-hub-label");
            if (!elem) return;
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
        window._breakHubTimer = setInterval(tick, 500);
    }

    function renderBreakGame(root, gameId) {
        // Cooldown enforcement (only when arriving fresh — if a session is
        // already active, we're switching games and should let through).
        if (!window.BreakSession.isActive()) {
            const remaining = breakCooldownRemaining();
            if (remaining > 0) {
                renderBreakLockout(root, remaining);
                return;
            }
            recordBreakStart();
            window.BreakSession.start();
        }
        const game = BREAK_GAMES.find(g => g.id === gameId);
        if (!game) { navigate("/break"); return; }
        const opts = {
            onExit: () => navigate("/"),
            getHighScore: () => highScoreFor(gameId),
            onHighScore: (score) => setHighScoreFor(gameId, score)
        };
        if (gameId === "catris") return window.CatTetris.start(root, opts);
        if (gameId === "invaders") return window.CatInvaders.start(root, opts);
        if (gameId === "catanoid") return window.Catanoid.start(root, opts);
    }

    function renderBreakLockout(root, remainingMs) {
        const m = Math.floor(remainingMs / 60000);
        const s = Math.floor((remainingMs % 60000) / 1000);
        const lastDate = state.breaks && state.breaks.lastBreakStartISO ? new Date(state.breaks.lastBreakStartISO) : null;
        const lastStr = lastDate ? lastDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—";

        root.innerHTML = `
            <a class="back-link" href="#/">← Home</a>
            <section class="break-lockout">
                <div class="break-lockout-cat">${window.Cats.svg("napping", "cream")}</div>
                <h1>Studying first ✏️</h1>
                <p class="break-blurb">Breaks are limited to <strong>one every 30 minutes</strong> so they actually feel like a break.</p>
                <div class="break-countdown">
                    <div class="break-countdown-num" id="break-cooldown" data-target="${remainingMs}">${m}:${String(s).padStart(2, "0")}</div>
                    <div class="break-countdown-sub">until your next break</div>
                </div>
                <p class="break-meta">Last break started at <strong>${escapeHtml(lastStr)}</strong>.</p>
                <div class="break-lockout-actions">
                    <a class="primary-btn" href="#/">Pick a quiz</a>
                    <a class="ghost-btn" href="#/clan">🐾 Visit my clan instead</a>
                </div>
            </section>
        `;
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
        if (!cs.cats.length) { navigate("/clan"); return; }
        cs.parkSelection = cs.parkSelection || [];

        const selected = new Set(cs.parkSelection);

        const catCards = cs.cats.map(cat => {
            const breed = window.Clan.findBreed(cat.breedId);
            if (!breed) return "";
            const isSel = selected.has(cat.breedId);
            return `
                <button type="button" class="park-pick ${isSel ? "is-picked" : ""}" data-id="${cat.breedId}">
                    <div class="park-pick-svg">${window.Cats.breedSvg(breed.appearance, "wave")}</div>
                    <div class="park-pick-name">${escapeHtml(cat.name)}</div>
                    <div class="park-pick-breed">${escapeHtml(breed.breed)}</div>
                    ${isSel ? `<div class="park-pick-check">✓</div>` : ""}
                </button>
            `;
        }).join("");

        root.innerHTML = `
            <a class="back-link" href="#/clan">← Back to Clan</a>
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
    }

    /* ---------- Park: play view ---------- */

    function renderParkPlay(root) {
        const cs = clanState();
        const ids = cs.parkSelection || [];
        if (!ids.length) { navigate("/clan/park"); return; }
        const selectedCats = ids
            .map(id => cs.cats.find(c => c.breedId === id))
            .filter(Boolean);
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
            }
        });
    }

    function renderClaim(root) {
        const cs = clanState();
        if ((cs.claimTickets || 0) <= 0) {
            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Clan</a>
                <section class="empty">
                    <p>No tickets yet! Score 100% on any quiz to earn one.</p>
                </section>
            `;
            return;
        }

        const ownedIds = cs.cats.map(c => c.breedId);
        const candidates = window.Clan.pickCandidates(ownedIds);

        if (!candidates.length) {
            root.innerHTML = `
                <a class="back-link" href="#/clan">← Back to Clan</a>
                <section class="empty">
                    <p>You've collected every breed! Legendary work, Harper. 🌟</p>
                </section>
            `;
            return;
        }

        const choices = candidates.map(b => {
            const stats = b.stats;
            const traitChips = b.traits.map(t => `<span class="trait-chip">${escapeHtml(t)}</span>`).join("");
            return `
                <article class="claim-choice" data-breed="${b.id}">
                    <div class="claim-svg">${window.Cats.breedSvg(b.appearance, "happy")}</div>
                    <h3>${escapeHtml(b.breed)}</h3>
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
            <header class="claim-header">
                <h1>🎟️ Choose your new cat!</h1>
                <p>Three cats wandered into your clan. Pick one — the others will scamper off.</p>
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
        const cs = clanState();
        const cat = cs.cats.find(c => c.breedId === breedId);
        const breed = window.Clan.findBreed(breedId);
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
            <section class="cat-detail">
                <div class="cat-detail-art">
                    <div class="cat-detail-svg" id="cat-stage">${window.Cats.breedSvg(breed.appearance, mood.expression)}</div>
                    <div class="cat-mood-tag mood-${mood.label.toLowerCase()}">${mood.label}</div>
                </div>
                <div class="cat-detail-info">
                    <h1>
                        <span class="cat-name" id="cat-name">${escapeHtml(cat.name)}</span>
                        <button type="button" class="link-btn" id="rename-btn">✏️ rename</button>
                    </h1>
                    <p class="cat-archetype">${escapeHtml(breed.breed)} · ${escapeHtml(breed.archetype)}</p>
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
    }

    function doInteraction(kind, breedId, root) {
        const cs = clanState();
        const cat = cs.cats.find(c => c.breedId === breedId);
        if (!cat) return;
        const breed = window.Clan.findBreed(breedId);

        // Apply the boost
        const boost = { pet: 5, play: 10, treat: 15, chat: 3 }[kind] || 0;
        cat.happiness = Math.min(100, window.Clan.currentHappiness(cat) + boost);
        cat.lastInteractedISO = new Date().toISOString();
        saveState();

        // Pick a phrase
        const phrase = window.Clan.reactionPhrase(breedId, kind);
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
            stage.innerHTML = window.Cats.breedSvg(breed.appearance, expression);

            // Drift a heart/sparkle up from the cat
            spawnFloater(stage, kind);

            // Restore mood after a bit
            setTimeout(() => {
                const mood = window.Clan.moodFor(window.Clan.currentHappiness(cat));
                stage.innerHTML = window.Cats.breedSvg(breed.appearance, mood.expression);
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

    /* ---------- Stats ---------- */

    function countAllQuestions(subjectId) {
        const s = window.SUBJECT_DATA[subjectId];
        if (!s) return 0;
        return s.mcqs.length + s.short.length + s.long.length;
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
        $("#reset-progress").addEventListener("click", showResetWarning);
        window.addEventListener("hashchange", render);
        window.addEventListener("DOMContentLoaded", render);
    }

    function showResetWarning() {
        // Build a snapshot of what's about to be deleted, so the warning is concrete.
        const cs = state.clan || { cats: [], claimTickets: 0 };
        const totalAnswered = state.stats.totalAnswered;
        const catCount = (cs.cats || []).length;
        const tickets = cs.claimTickets || 0;
        const catrisHigh = (state.breaks && state.breaks.catrisHighScore) || 0;
        const invadersHigh = (state.breaks && state.breaks.invadersHighScore) || 0;
        const catanoidHigh = (state.breaks && state.breaks.catanoidHighScore) || 0;
        const highScore = Math.max(catrisHigh, invadersHigh, catanoidHigh);
        const sessions = SUBJECTS.reduce((n, id) => n + (state.subjects[id].quizSessions || []).length, 0);
        const namedCats = (cs.cats || []).filter(c => {
            const breed = window.Clan && window.Clan.findBreed(c.breedId);
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
                    <li><span>🐾</span> Your <strong>${catCount}</strong> cat${catCount === 1 ? "" : "s"}${namedCats ? ` (including <strong>${namedCats}</strong> custom-named ${namedCats === 1 ? "cat" : "cats"})` : ""} and all their happiness</li>
                    <li><span>🎟️</span> ${tickets} unspent Cat Ticket${tickets === 1 ? "" : "s"}</li>
                    <li><span>🐱</span> All Catris/Invaders/Catanoid high scores (best: <strong>${highScore}</strong>)</li>
                    <li><span>🔥</span> Your current and best streaks</li>
                    <li><span>⏱️</span> Break cooldown timer</li>
                </ul>
                <p class="reset-modal-warn">You will need to rebuild your clan from scratch — even cats you adopted weeks ago will be gone forever.</p>
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
            if (!confirm("Last chance — really delete every cat, every score, and start over?")) return;
            state = defaultState();
            saveState();
            closeResetModal();
            render();
            window.Cats.popIn({ expression: "wave", message: "Fresh start — let's go!", duration: 3000 });
        });
        // Focus the cancel button for safety
        setTimeout(() => document.getElementById("reset-modal-cancel").focus(), 50);
    }

    function closeResetModal() {
        const m = document.getElementById("reset-modal");
        if (m) m.remove();
    }

    generatePracticeExams();
    bindGlobalEvents();
    if (document.readyState !== "loading") render();
})();
