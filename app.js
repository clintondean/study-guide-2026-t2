// Harper's Study Guide — single-page app shell, router, quiz engine, state.
// All data is read from window.SUBJECT_DATA which is populated by data/*.js.

(function () {
    "use strict";

    const STORAGE_KEY = "harper-studyguide-v1";
    const SUBJECTS = ["commerce", "english", "geography", "maths"];

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
            stats: { totalAnswered: 0, totalCorrect: 0, currentStreak: 0, bestStreak: 0 }
        };
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
        root.innerHTML = "";
        root.scrollIntoView({ behavior: "instant", block: "start" });
        window.scrollTo(0, 0);

        if (route.length === 0) return renderHome(root);
        if (route[0] === "progress") return renderProgress(root);
        if (route[0] === "subject" && route[1]) {
            const subjectId = route[1];
            if (route[2] === "quiz" && route[3]) return renderQuiz(root, subjectId, route[3], route[4] || null);
            return renderSubject(root, subjectId);
        }
        renderHome(root);
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

            ${renderMockExamsSection(subjectId, subj)}

            ${renderPracticeExamsSection(subjectId, subj)}

            ${isMaths ? `
            <aside class="maths-tip">
                <strong>💡 Need a hand?</strong>
                Every Maths question has a <em>Help</em> button — tap it for step-by-step working.
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

    function renderPracticeExamsSection(subjectId, subj) {
        if (!Array.isArray(subj.practiceExams) || !subj.practiceExams.length) return "";
        const subjState = state.subjects[subjectId] || { quizSessions: [], bestScores: {} };
        const cards = subj.practiceExams.map((exam, idx) => {
            const best = subjState.bestScores ? subjState.bestScores[exam.id] : null;
            const last = (subjState.quizSessions || []).filter(s => s.mode === exam.id).slice(-1)[0];
            const bestPct = best != null ? Math.round(best * 100) + "%" : "—";
            const lastLine = last ? `${last.score}/${last.total}` : "Not yet attempted";
            const num = String(idx + 1).padStart(2, "0");
            return `
                <a class="exam-card" href="#/subject/${subjectId}/quiz/${exam.id}">
                    <div class="exam-num">Exam ${num}</div>
                    <h4>${escapeHtml(exam.name)}</h4>
                    <p class="exam-focus">${escapeHtml(exam.focus || "")}</p>
                    <div class="exam-meta">
                        <span>${exam.questionIds.length} Q</span>
                        <span>Best: ${bestPct}</span>
                        <span>Last: ${escapeHtml(lastLine)}</span>
                    </div>
                </a>
            `;
        }).join("");
        return `
            <section class="exams-section">
                <h2>Practice exams (${subj.practiceExams.length})</h2>
                <p class="exams-blurb">Pick any exam below — each one is a curated mix of multiple-choice and longer-form questions, themed by topic. Best scores are saved per exam.</p>
                <div class="exam-grid">${cards}</div>
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
        // Practice exams and mocks keep curated order; other modes shuffle.
        const ordered = exam ? questions : shuffle(questions);
        const isMock = !!(exam && exam.isMock);
        session = {
            subjectId, mode, exam,
            isMock,
            questions: ordered,
            index: 0,
            correct: 0,
            attempted: 0,
            answers: {}, // qid -> { user, userText, correct, locked, revealed }
            sessionStreak: 0
        };
        renderCurrentQuestion(root);
    }

    function renderCurrentQuestion(root) {
        const subj = window.SUBJECT_DATA[session.subjectId];
        const q = session.questions[session.index];
        const type = questionType(q, subj);
        const total = session.questions.length;
        const num = session.index + 1;
        const topic = subj.topics.find(t => t.id === q.topic);
        const previous = session.answers[q.id];
        const isLocked = !!(previous && previous.locked);
        const isLastQuestion = session.index === total - 1;

        root.innerHTML = `
            <a class="back-link" href="#/subject/${session.subjectId}">← Back${session.isMock ? " (exits mock)" : ""}</a>
            <div class="quiz-shell ${session.isMock ? "is-mock" : ""}" style="--accent:${subj.color}">
                ${session.isMock ? `
                    <div class="mock-banner">
                        🔒 <strong>Mock Exam mode</strong> — once you press Next, your answer is locked.
                    </div>
                ` : ""}
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
        if (type === "mcq") {
            area.innerHTML = q.options.map((opt, i) => {
                const id = `opt-${q.id}-${i}`;
                const checked = previous && previous.user === i ? "checked" : "";
                const disabled = isLocked ? "disabled" : "";
                return `
                    <label class="option ${isLocked ? "is-locked" : ""}" for="${id}">
                        <input type="radio" name="opt-${q.id}" id="${id}" value="${i}" ${checked} ${disabled}>
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
                    if (!session.answers[q.id]) session.answers[q.id] = { userText: "", correct: false };
                    session.answers[q.id].userText = e.target.value;
                });
            }
            const revealBtn = $("#reveal-sample");
            if (revealBtn) {
                revealBtn.addEventListener("click", () => {
                    if (!session.answers[q.id]) session.answers[q.id] = { userText: "", correct: false };
                    session.answers[q.id].revealed = !session.answers[q.id].revealed;
                    renderAnswerArea(q, session.answers[q.id], isLocked);
                });
            }
            const selfBtn = $("#self-correct");
            if (selfBtn) {
                selfBtn.addEventListener("click", () => {
                    if (!session.answers[q.id]) session.answers[q.id] = { userText: ($("#written-answer") || {}).value || "", correct: false };
                    session.answers[q.id].correct = !session.answers[q.id].correct;
                    if (session.answers[q.id].correct) {
                        window.Cats.popIn({ expression: "cheering", message: pickPhrase("correct") });
                    }
                    renderAnswerArea(q, session.answers[q.id], isLocked);
                });
            }
        }
    }

    function pickPhrase(kind) {
        const list = window.Cats.phrases[kind] || [""];
        return list[Math.floor(Math.random() * list.length)];
    }

    function evaluateMCQ(q, silent, isLocked) {
        const selected = $$('input[name="opt-' + q.id + '"]:checked')[0];
        if (!selected) return;
        const idx = parseInt(selected.value, 10);
        const correct = idx === q.answer;

        // For mocks: only show feedback after the question is locked.
        const showFeedback = !session.isMock || isLocked;

        $$(".option").forEach((label, i) => {
            label.classList.remove("option-correct", "option-incorrect", "option-revealed");
            if (showFeedback) {
                if (i === q.answer) label.classList.add("option-revealed");
                if (i === idx) label.classList.add(correct ? "option-correct" : "option-incorrect");
            } else if (i === idx) {
                // Only mark the user's selection (no correctness reveal yet)
                label.classList.add("option-selected");
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
        } else {
            fb.innerHTML = "";
        }

        // Preserve any existing locked flag.
        const prevLocked = session.answers[q.id] && session.answers[q.id].locked;
        session.answers[q.id] = { user: idx, correct, locked: !!prevLocked };

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
        const ans = session.answers[q.id];
        if (!ans) {
            // In a mock, even an unanswered question gets locked (with no answer) on Next.
            if (session.isMock) {
                session.answers[q.id] = { locked: true, correct: false };
            }
            return;
        }
        // In mock mode: lock the answer permanently for this exam.
        if (session.isMock) ans.locked = true;

        const wasCorrect = !!ans.correct;
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
            const a = session.answers[q.id];
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

                <div class="results-actions">
                    <a class="primary-btn pulse-btn" href="#/subject/${session.subjectId}/quiz/${session.mode}">🔁 Retake ${isMock ? "Mock" : "Practice"}</a>
                    <a class="ghost-btn" href="#/subject/${session.subjectId}">← Back to ${escapeHtml(subj.name)}</a>
                    <a class="ghost-btn" href="#/">🏠 Home</a>
                </div>

                <details class="results-detail">
                    <summary>📋 Review every question</summary>
                    <ol class="results-list">
                        ${session.questions.map((q, i) => {
                            const a = session.answers[q.id] || {};
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
        $("#reset-progress").addEventListener("click", () => {
            if (confirm("Reset all your progress? This cannot be undone.")) {
                state = defaultState();
                saveState();
                render();
                window.Cats.popIn({ expression: "wave", message: "Fresh start — let's go!" });
            }
        });
        window.addEventListener("hashchange", render);
        window.addEventListener("DOMContentLoaded", render);
    }

    bindGlobalEvents();
    if (document.readyState !== "loading") render();
})();
