// Catris — "I've earned a break". A 5-minute cat-themed Tetris.
// Standard 7-piece Tetris with cat-coloured cells. Each tile shows a tiny
// SVG cat face (works reliably across browsers/OS, unlike emoji).
// Exposes window.CatTetris.

// Each piece type renders as a different cat breed face (rendered via
// Cats.tetrisFace using the same breed-appearance schema as the clan).
const TETRIS_PIECE_BREEDS = {
    // I (teal block): MAINE COON — long fluff, tufted ears, brown stripes
    I: { primary: "#7d5a3c", secondary: "#d8b48a", accent: "#3a2818", eyeColor: "#f0a500",
         pattern: "stripes", fluff: "long", earStyle: "tufted" },
    // O (yellow block): PERSIAN — long fluffy cream, small ears
    O: { primary: "#f0e5d5", secondary: "#fff8ec", accent: "#c8b59a", eyeColor: "#f0a500",
         pattern: "solid", fluff: "long", earStyle: "small" },
    // T (purple block): SIAMESE — points (dark face/ears), big ears
    T: { primary: "#f4ecd8", secondary: "#fff8e7", accent: "#5a3a22", eyeColor: "#3da9fc",
         pattern: "points", fluff: "short", earStyle: "big" },
    // S (mint block): RUSSIAN BLUE — solid grey, normal ears
    S: { primary: "#8aa1b6", secondary: "#c2cfd9", accent: "#5b6c7c", eyeColor: "#4ed4a3",
         pattern: "solid", fluff: "short", earStyle: "normal" },
    // Z (red-orange block): CALICO — patches, normal ears
    Z: { primary: "#fff", secondary: "#fff", accent: "#2f2f33", eyeColor: "#f0a500",
         pattern: "calico", fluff: "medium", earStyle: "normal",
         calicoColors: ["#f4a261", "#2f2f33"] },
    // L (orange block): BENGAL — spots, normal ears
    L: { primary: "#d6a361", secondary: "#f0d4a4", accent: "#3a2818", eyeColor: "#5fcfbf",
         pattern: "spots", fluff: "short", earStyle: "normal" },
    // J (blue block): SPHYNX — hairless pink, big ears
    J: { primary: "#f0c8b4", secondary: "#fad7c4", accent: "#c89882", eyeColor: "#3da9fc",
         pattern: "solid", fluff: "hairless", earStyle: "big" }
};
function getCatFaceSvg(key) {
    const breed = TETRIS_PIECE_BREEDS[key];
    return (window.Cats && window.Cats.tetrisFace)
        ? window.Cats.tetrisFace(breed)
        : "";
}

(function () {
    "use strict";

    const COLS = 10;
    const ROWS = 20;
    // The 5-minute timer is shared across all break games (Catris, Cat
    // Invaders, Catanoid). Switching games keeps the same session timer.
    const SESSION = (typeof window !== "undefined" && window.BreakSession) || {
        BREAK_MS: 5 * 60 * 1000, start() {}, end() {}, elapsed: () => 0
    };
    const BREAK_MS = SESSION.BREAK_MS;

    // Pieces with their 4 rotations (max 4×4 cells each, 1 = filled)
    // Each piece type has a colour theme + cat emoji rendered in cells.
    const PIECES = {
        I: {
            color: "#43aa8b", emoji: "😺",
            rot: [
                [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
                [[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],
                [[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],
                [[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]
            ]
        },
        O: {
            color: "#ffd166", emoji: "😻",
            rot: [
                [[1,1],[1,1]],
                [[1,1],[1,1]],
                [[1,1],[1,1]],
                [[1,1],[1,1]]
            ]
        },
        T: {
            color: "#9b5de5", emoji: "😼",
            rot: [
                [[0,1,0],[1,1,1],[0,0,0]],
                [[0,1,0],[0,1,1],[0,1,0]],
                [[0,0,0],[1,1,1],[0,1,0]],
                [[0,1,0],[1,1,0],[0,1,0]]
            ]
        },
        S: {
            color: "#5fcfbf", emoji: "😸",
            rot: [
                [[0,1,1],[1,1,0],[0,0,0]],
                [[0,1,0],[0,1,1],[0,0,1]],
                [[0,0,0],[0,1,1],[1,1,0]],
                [[1,0,0],[1,1,0],[0,1,0]]
            ]
        },
        Z: {
            color: "#e76f51", emoji: "🙀",
            rot: [
                [[1,1,0],[0,1,1],[0,0,0]],
                [[0,0,1],[0,1,1],[0,1,0]],
                [[0,0,0],[1,1,0],[0,1,1]],
                [[0,1,0],[1,1,0],[1,0,0]]
            ]
        },
        L: {
            color: "#f4a261", emoji: "😺",
            rot: [
                [[0,0,1],[1,1,1],[0,0,0]],
                [[0,1,0],[0,1,0],[0,1,1]],
                [[0,0,0],[1,1,1],[1,0,0]],
                [[1,1,0],[0,1,0],[0,1,0]]
            ]
        },
        J: {
            color: "#3da9fc", emoji: "😽",
            rot: [
                [[1,0,0],[1,1,1],[0,0,0]],
                [[0,1,1],[0,1,0],[0,1,0]],
                [[0,0,0],[1,1,1],[0,0,1]],
                [[0,1,0],[0,1,0],[1,1,0]]
            ]
        }
    };
    const PIECE_KEYS = Object.keys(PIECES);

    let state;       // { grid, current, next, score, lines, level, gameOver, paused, dropTimer, keyHandler, ... }
    let rootEl;
    let onExit = null;
    let onHighScore = null;
    let getHighScore = () => 0;
    /* ---------- Public ---------- */

    function start(root, opts) {
        opts = opts || {};
        rootEl = root;
        onExit = opts.onExit || null;
        onHighScore = opts.onHighScore || null;     // called with new high score when set
        getHighScore = opts.getHighScore || (() => 0);
        // The shared break session is started by the hub, but make sure it's running.
        SESSION.start();
        beginNewGame();
    }

    function beginNewGame() {
        // Tear down any running game without touching sessionStartedAt
        if (state) {
            if (state.dropTimer) clearTimeout(state.dropTimer);
            if (state.timerInterval) clearInterval(state.timerInterval);
            if (state.keyHandler) window.removeEventListener("keydown", state.keyHandler);
        }
        state = freshState();
        renderShell();
        bindKeys();
        spawnNext();
        scheduleDrop();
        renderTimer();
        state.timerInterval = setInterval(renderTimer, 250);
    }

    function stop() {
        if (!state) return;
        if (state.dropTimer) clearTimeout(state.dropTimer);
        if (state.timerInterval) clearInterval(state.timerInterval);
        if (state.keyHandler) window.removeEventListener("keydown", state.keyHandler);
        state = null;
        // NOTE: do NOT end the shared session here — the user might switch to
        // another break game. The hub controls when to end the session.
    }

    /* ---------- State ---------- */

    function freshState() {
        const grid = [];
        for (let r = 0; r < ROWS; r++) grid.push(new Array(COLS).fill(0));
        return {
            grid,
            current: null,
            next: randomPieceKey(),
            score: 0,
            lines: 0,
            level: 1,
            gameOver: false,
            paused: false,
            timeExpired: false
        };
    }

    function randomPieceKey() {
        return PIECE_KEYS[Math.floor(Math.random() * PIECE_KEYS.length)];
    }

    function spawnNext() {
        const key = state.next;
        state.next = randomPieceKey();
        const p = PIECES[key];
        const matrix = p.rot[0];
        const piece = {
            key,
            rotation: 0,
            x: Math.floor((COLS - matrix[0].length) / 2),
            y: 0
        };
        if (collides(piece, piece.x, piece.y, piece.rotation)) {
            // Game over
            state.gameOver = true;
            renderAll();
            return;
        }
        state.current = piece;
        renderAll();
    }

    function dropSpeedMs() {
        const baseLevel = Math.min(state.level, 12);
        return Math.max(110, 700 - (baseLevel - 1) * 50);
    }

    function scheduleDrop() {
        if (state.dropTimer) clearTimeout(state.dropTimer);
        if (state.gameOver || state.paused) return;
        state.dropTimer = setTimeout(() => { tickDrop(); scheduleDrop(); }, dropSpeedMs());
    }

    function tickDrop() {
        if (!state.current || state.gameOver || state.paused) return;
        const c = state.current;
        if (!collides(c, c.x, c.y + 1, c.rotation)) {
            c.y++;
            renderAll();
        } else {
            lockAndClear();
        }
    }

    function moveLeft() {
        if (!state.current) return;
        const c = state.current;
        if (!collides(c, c.x - 1, c.y, c.rotation)) { c.x--; renderAll(); }
    }
    function moveRight() {
        if (!state.current) return;
        const c = state.current;
        if (!collides(c, c.x + 1, c.y, c.rotation)) { c.x++; renderAll(); }
    }
    function softDrop() {
        if (!state.current) return;
        tickDrop();
    }
    function hardDrop() {
        if (!state.current) return;
        const c = state.current;
        let dropped = 0;
        while (!collides(c, c.x, c.y + 1, c.rotation)) { c.y++; dropped++; }
        state.score += dropped * 2;
        lockAndClear();
    }
    function rotate() {
        if (!state.current) return;
        const c = state.current;
        const newRot = (c.rotation + 1) % 4;
        // Wall kicks: try x offsets
        const kicks = [0, -1, 1, -2, 2];
        for (const k of kicks) {
            if (!collides(c, c.x + k, c.y, newRot)) {
                c.x += k;
                c.rotation = newRot;
                renderAll();
                return;
            }
        }
    }

    function collides(piece, nx, ny, nrot) {
        const matrix = PIECES[piece.key].rot[nrot];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (!matrix[i][j]) continue;
                const gx = nx + j;
                const gy = ny + i;
                if (gx < 0 || gx >= COLS || gy >= ROWS) return true;
                if (gy >= 0 && state.grid[gy][gx]) return true;
            }
        }
        return false;
    }

    function lockAndClear() {
        const c = state.current;
        if (!c) return;
        const matrix = PIECES[c.key].rot[c.rotation];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (!matrix[i][j]) continue;
                const gx = c.x + j;
                const gy = c.y + i;
                if (gy >= 0 && gy < ROWS && gx >= 0 && gx < COLS) {
                    state.grid[gy][gx] = c.key;
                }
            }
        }
        // Check & clear lines
        let cleared = 0;
        for (let r = ROWS - 1; r >= 0; r--) {
            if (state.grid[r].every(v => v !== 0)) {
                state.grid.splice(r, 1);
                state.grid.unshift(new Array(COLS).fill(0));
                cleared++;
                r++; // re-check this row index (which now has the row above)
            }
        }
        if (cleared > 0) {
            const points = [0, 100, 300, 500, 800][cleared] * state.level;
            state.score += points;
            state.lines += cleared;
            state.level = 1 + Math.floor(state.lines / 8);
            // Cat celebration on multi-line clear
            if (cleared >= 2 && window.Cats) {
                const phrase = cleared === 4 ? "TETRIS! Pawsome!" : (cleared === 3 ? "Triple meow!" : "Two lines, two paws!");
                window.Cats.popIn({ expression: "cheering", message: phrase, duration: 1800, side: cleared % 2 ? "left" : "right" });
            }
            // brief flash on grid
            flashClear();
        }
        state.current = null;
        spawnNext();
    }

    function flashClear() {
        const grid = document.getElementById("tetris-grid");
        if (!grid) return;
        grid.classList.add("flash");
        setTimeout(() => grid.classList.remove("flash"), 280);
    }

    /* ---------- Time ---------- */

    function elapsedMs() { return SESSION.elapsed(); }
    // Soft target: returns negative when the cap has been exceeded (overtime).
    function remainingMs() { return BREAK_MS - elapsedMs(); }

    /* ---------- Render ---------- */

    function renderShell() {
        rootEl.innerHTML = `
            <a class="back-link" id="tetris-back" href="#/break">← Switch game</a>
            <header class="tetris-header">
                <div>
                    <h1>🐱 Catris</h1>
                    <p class="tetris-blurb">5-minute kitten-stacker. Timer is shared across all break games.</p>
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="tetris-timer-label">Time left</div>
                    <div class="tetris-timer" id="tetris-timer">5:00</div>
                </div>
            </header>
            <div class="tetris-layout">
                <aside class="tetris-side">
                    <div class="tetris-stat tetris-highscore"><span>🏆 High score</span><strong id="tetris-highscore">${getHighScore() || 0}</strong></div>
                    <div class="tetris-stat"><span>Score</span><strong id="tetris-score">0</strong></div>
                    <div class="tetris-stat"><span>Lines</span><strong id="tetris-lines">0</strong></div>
                    <div class="tetris-stat"><span>Level</span><strong id="tetris-level">1</strong></div>
                    <div class="tetris-next">
                        <div class="tetris-next-label">Next</div>
                        <div class="tetris-next-cell" id="tetris-next"></div>
                    </div>
                    <div class="tetris-controls">
                        <button type="button" id="tetris-pause">⏸ Pause</button>
                        <button type="button" id="tetris-quit">🚪 End break</button>
                    </div>
                </aside>
                <div class="tetris-board-wrap">
                    <div class="tetris-grid" id="tetris-grid"></div>
                    <div class="tetris-overlay" id="tetris-overlay" hidden></div>
                </div>
                <aside class="tetris-keys">
                    <h4>Controls</h4>
                    <ul>
                        <li><kbd>←</kbd> <kbd>→</kbd> move</li>
                        <li><kbd>↑</kbd> rotate</li>
                        <li><kbd>↓</kbd> soft drop</li>
                        <li><kbd>Space</kbd> hard drop</li>
                        <li><kbd>P</kbd> pause</li>
                    </ul>
                    <div class="tetris-touch">
                        <div class="tetris-touch-row">
                            <button type="button" data-act="rotate">⟳</button>
                        </div>
                        <div class="tetris-touch-row">
                            <button type="button" data-act="left">←</button>
                            <button type="button" data-act="down">↓</button>
                            <button type="button" data-act="right">→</button>
                        </div>
                        <div class="tetris-touch-row">
                            <button type="button" data-act="drop">⤓ Drop</button>
                        </div>
                    </div>
                </aside>
            </div>
        `;
        const grid = document.getElementById("tetris-grid");
        grid.style.setProperty("--cols", COLS);
        grid.style.setProperty("--rows", ROWS);
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const cell = document.createElement("div");
                cell.className = "tetris-cell";
                cell.dataset.r = r;
                cell.dataset.c = c;
                grid.appendChild(cell);
            }
        }
        document.getElementById("tetris-pause").addEventListener("click", togglePause);
        document.getElementById("tetris-quit").addEventListener("click", () => exit("quit"));
        rootEl.querySelectorAll(".tetris-touch [data-act]").forEach(b => {
            b.addEventListener("click", () => {
                const act = b.dataset.act;
                if (act === "left") moveLeft();
                else if (act === "right") moveRight();
                else if (act === "down") softDrop();
                else if (act === "rotate") rotate();
                else if (act === "drop") hardDrop();
            });
        });
    }

    function renderAll() {
        const grid = document.getElementById("tetris-grid");
        if (!grid) return;
        // Clear all cells
        const cells = grid.querySelectorAll(".tetris-cell");
        cells.forEach(c => {
            c.className = "tetris-cell";
            c.textContent = "";
            c.style.background = "";
        });
        // Render locked grid
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const v = state.grid[r][c];
                if (v) paintCell(grid, r, c, v);
            }
        }
        // Render current piece
        if (state.current) {
            const c = state.current;
            const matrix = PIECES[c.key].rot[c.rotation];
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (!matrix[i][j]) continue;
                    const gx = c.x + j;
                    const gy = c.y + i;
                    if (gy >= 0) paintCell(grid, gy, gx, c.key, true);
                }
            }
        }
        document.getElementById("tetris-score").textContent = state.score;
        document.getElementById("tetris-lines").textContent = state.lines;
        document.getElementById("tetris-level").textContent = state.level;
        renderNextPreview();
        renderOverlay();
    }

    function paintCell(grid, r, c, key, isCurrent) {
        const idx = r * COLS + c;
        const cell = grid.children[idx];
        if (!cell) return;
        const piece = PIECES[key];
        cell.classList.add("filled");
        cell.classList.add(`piece-${key}`);
        if (isCurrent) cell.classList.add("current");
        cell.style.background = piece.color;
        cell.innerHTML = getCatFaceSvg(key);
    }

    function renderNextPreview() {
        const wrap = document.getElementById("tetris-next");
        if (!wrap) return;
        wrap.innerHTML = "";
        const key = state.next;
        const matrix = PIECES[key].rot[0];
        const w = matrix[0].length;
        const h = matrix.length;
        wrap.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                const c = document.createElement("div");
                c.className = "tetris-mini";
                if (matrix[i][j]) {
                    c.classList.add("filled");
                    c.style.background = PIECES[key].color;
                    c.innerHTML = getCatFaceSvg(key);
                }
                wrap.appendChild(c);
            }
        }
    }

    function renderTimer() {
        if (!state) return;
        const r = remainingMs();
        const elem = document.getElementById("tetris-timer");
        const labelEl = document.getElementById("tetris-timer-label");
        if (!elem) return;
        if (r > 0) {
            const m = Math.floor(r / 60000);
            const s = Math.floor((r % 60000) / 1000);
            elem.textContent = `${m}:${String(s).padStart(2, "0")}`;
            elem.classList.remove("overtime");
            if (labelEl) labelEl.textContent = "Time left";
        } else {
            // Overtime — keep playing! The game only ends when Harper tops out.
            if (!state.timeExpired) {
                state.timeExpired = true;
                if (window.Cats && !state.gameOver) {
                    window.Cats.popIn({
                        expression: "cheering",
                        message: "OVERTIME! Keep stacking!",
                        duration: 3000, side: "right"
                    });
                }
            }
            const overtimeMs = -r;
            const m = Math.floor(overtimeMs / 60000);
            const s = Math.floor((overtimeMs % 60000) / 1000);
            elem.textContent = `+${m}:${String(s).padStart(2, "0")}`;
            elem.classList.add("overtime");
            if (labelEl) labelEl.textContent = "Overtime 🔥";
        }
    }

    function renderOverlay() {
        const ov = document.getElementById("tetris-overlay");
        if (!ov) return;
        if (state.paused) {
            ov.hidden = false;
            ov.innerHTML = `<div class="overlay-card"><h2>Paused</h2><p>Press <kbd>P</kbd> or click Pause again to resume.</p></div>`;
            return;
        }
        if (state.gameOver) {
            const isTimeUp = remainingMs() === 0;
            ov.hidden = false;
            const previousHigh = getHighScore() || 0;
            const isNewHigh = state.score > previousHigh;
            // Persist new high score (idempotent — onHighScore can no-op if already saved)
            if (isNewHigh && typeof onHighScore === "function" && !state._highSaved) {
                state._highSaved = true;
                onHighScore(state.score);
            }
            const headline = isNewHigh
                ? "🏆 NEW HIGH SCORE!"
                : (isTimeUp ? "Break time's up!" : "Stack reached the top!");
            ov.innerHTML = `
                <div class="overlay-card ${isNewHigh ? "is-new-high" : ""}">
                    <h2>${headline}</h2>
                    <p>Final score: <strong>${state.score}</strong></p>
                    <p>Lines cleared: <strong>${state.lines}</strong> · Level <strong>${state.level}</strong></p>
                    <p class="tetris-prev-high">Previous best: ${previousHigh}</p>
                    <div class="overlay-actions">
                        <button type="button" id="tetris-again" class="primary-btn pulse-btn">🔁 Play again</button>
                        <a class="ghost-btn" href="#/">← Back to study</a>
                    </div>
                </div>
            `;
            // Update the on-screen high-score chip
            const hsEl = document.getElementById("tetris-highscore");
            if (hsEl) hsEl.textContent = Math.max(previousHigh, state.score);
            const again = document.getElementById("tetris-again");
            if (again) again.addEventListener("click", () => {
                // Reset the GAME but keep the break-session timer running.
                beginNewGame();
            });
            return;
        }
        ov.hidden = true;
    }

    function togglePause() {
        if (!state || state.gameOver) return;
        state.paused = !state.paused;
        if (!state.paused) {
            // Adjust startedAt so the timer is unaffected by pause time
            // (already accounts because we don't pause the timer).
            scheduleDrop();
        } else if (state.dropTimer) {
            clearTimeout(state.dropTimer);
        }
        renderOverlay();
    }

    function exit() {
        stop();
        if (typeof onExit === "function") onExit();
    }

    function bindKeys() {
        const handler = (e) => {
            if (!state) return;
            if (state.gameOver) return;
            if (state.paused && e.key.toLowerCase() !== "p") return;
            if (e.key === "ArrowLeft") { moveLeft(); e.preventDefault(); }
            else if (e.key === "ArrowRight") { moveRight(); e.preventDefault(); }
            else if (e.key === "ArrowDown") { softDrop(); e.preventDefault(); }
            else if (e.key === "ArrowUp") { rotate(); e.preventDefault(); }
            else if (e.key === " ") { hardDrop(); e.preventDefault(); }
            else if (e.key.toLowerCase() === "p") { togglePause(); e.preventDefault(); }
        };
        window.addEventListener("keydown", handler);
        state.keyHandler = handler;
    }

    window.CatTetris = { start, stop };
})();
