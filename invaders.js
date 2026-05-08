// Cat Invaders — Space Invaders, with cats.
// 5-minute shared break-session timer (window.BreakSession).
// Player saucer at the bottom shoots upward; alien-cats descend in waves.
// Exposes window.CatInvaders with start(rootEl, opts) and stop().

(function () {
    "use strict";

    const W = 720;
    const H = 540;
    const PLAYER_W = 56, PLAYER_H = 36;
    const PLAYER_Y = H - 60;
    const PLAYER_SPEED = 5;
    const BULLET_W = 4, BULLET_H = 14;
    const BULLET_SPEED = 8;
    const ALIEN_BULLET_SPEED = 4;
    const ALIEN_W = 38, ALIEN_H = 32;
    const ALIEN_PADX = 18, ALIEN_PADY = 14;
    const ROWS = 4;
    const COLS = 8;

    const ROW_BREEDS = [
        // Top row (highest score)
        { primary: "#9b5de5", accent: "#5a189a", eyeColor: "#ffd166", points: 40, ears: "big" },
        { primary: "#5fcfbf", accent: "#1d7a6f", eyeColor: "#fff", points: 30, ears: "normal" },
        { primary: "#ff7f51", accent: "#ce4257", eyeColor: "#fff", points: 20, ears: "normal" },
        { primary: "#3da9fc", accent: "#1d4ed8", eyeColor: "#fff", points: 10, ears: "big" }
    ];

    let canvas, ctx, rootEl;
    let onExit, onHighScore, getHighScore = () => 0;

    let state, rafId, keys;

    const SESSION = (typeof window !== "undefined" && window.BreakSession) || {
        BREAK_MS: 5 * 60 * 1000, start() {}, end() {}, elapsed: () => 0
    };

    function start(root, opts) {
        opts = opts || {};
        rootEl = root;
        onExit = opts.onExit || null;
        onHighScore = opts.onHighScore || null;
        getHighScore = opts.getHighScore || (() => 0);
        SESSION.start();
        renderShell();
        bindInput();
        beginGame();
        loop();
    }

    function stop() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        if (state && state.timerInterval) clearInterval(state.timerInterval);
        if (state && state.keyHandler) {
            window.removeEventListener("keydown", state.keyHandler);
            window.removeEventListener("keyup", state.keyUpHandler);
        }
        state = null;
    }

    function renderShell() {
        rootEl.innerHTML = `
            <a class="back-link" href="#/break">← Switch game</a>
            <header class="break-game-header">
                <div>
                    <h1>👾 Cat Invaders</h1>
                    <p class="break-game-blurb">Defend the homeworld. ←/→ to move, Space to shoot.</p>
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="invaders-timer-label">Time left</div>
                    <div class="tetris-timer" id="invaders-timer">5:00</div>
                </div>
            </header>
            <div class="break-game-stats">
                <div class="tetris-stat tetris-highscore"><span>🏆 High</span><strong id="invaders-high">${getHighScore() || 0}</strong></div>
                <div class="tetris-stat"><span>Score</span><strong id="invaders-score">0</strong></div>
                <div class="tetris-stat"><span>Wave</span><strong id="invaders-wave">1</strong></div>
                <div class="tetris-stat"><span>Lives</span><strong id="invaders-lives">3</strong></div>
            </div>
            <div class="break-canvas-wrap">
                <canvas id="invaders-canvas" width="${W}" height="${H}" tabindex="0"></canvas>
                <div class="break-overlay" id="invaders-overlay" hidden></div>
            </div>
            <div class="tetris-touch break-touch">
                <div class="tetris-touch-row">
                    <button type="button" data-act="left">←</button>
                    <button type="button" data-act="shoot">🚀 Fire</button>
                    <button type="button" data-act="right">→</button>
                </div>
            </div>
            <p class="break-help">Hit aliens for points. Top rows score the most. Don't let them reach the ground!</p>
        `;
        canvas = document.getElementById("invaders-canvas");
        ctx = canvas.getContext("2d");
        canvas.focus();
        rootEl.querySelectorAll(".break-touch [data-act]").forEach(b => {
            b.addEventListener("pointerdown", () => handleTouch(b.dataset.act, true));
            b.addEventListener("pointerup",   () => handleTouch(b.dataset.act, false));
            b.addEventListener("pointerleave",() => handleTouch(b.dataset.act, false));
        });
    }

    function handleTouch(act, down) {
        if (act === "left")  keys.left = down;
        if (act === "right") keys.right = down;
        if (act === "shoot" && down) state.fireRequest = true;
    }

    function bindInput() {
        keys = { left: false, right: false };
        const down = (e) => {
            if (e.key === "ArrowLeft")  { keys.left = true; e.preventDefault(); }
            else if (e.key === "ArrowRight") { keys.right = true; e.preventDefault(); }
            else if (e.key === " ") { state.fireRequest = true; e.preventDefault(); }
            else if (e.key.toLowerCase() === "p") { togglePause(); e.preventDefault(); }
        };
        const up = (e) => {
            if (e.key === "ArrowLeft") keys.left = false;
            else if (e.key === "ArrowRight") keys.right = false;
        };
        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);
        if (!state) state = {};
        state.keyHandler = down;
        state.keyUpHandler = up;
    }

    function beginGame() {
        state = Object.assign(state || {}, {
            player: { x: W / 2 - PLAYER_W / 2, y: PLAYER_Y },
            bullets: [],
            alienBullets: [],
            aliens: spawnAliens(0),
            alienDir: 1,
            alienSpeed: 0.6,
            descendStep: 14,
            score: 0,
            lives: 3,
            wave: 1,
            gameOver: false,
            paused: false,
            fireCooldown: 0,
            fireRequest: false,
            lastShotAt: 0
        });
        // Re-bind handlers in case beginGame is called without bindInput
        if (!state.keyHandler) bindInput();
        state.timerInterval = setInterval(renderTimer, 250);
        renderTimer();
        updateHud();
    }

    function spawnAliens(waveIndex) {
        const aliens = [];
        const totalW = COLS * ALIEN_W + (COLS - 1) * ALIEN_PADX;
        const startX = (W - totalW) / 2;
        const startY = 60 + waveIndex * 14;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                aliens.push({
                    row: r,
                    x: startX + c * (ALIEN_W + ALIEN_PADX),
                    y: startY + r * (ALIEN_H + ALIEN_PADY),
                    alive: true
                });
            }
        }
        return aliens;
    }

    function loop() {
        rafId = requestAnimationFrame(loop);
        if (!state) return;
        if (!state.paused && !state.gameOver) update();
        draw();
    }

    function update() {
        // Player movement
        if (keys.left) state.player.x -= PLAYER_SPEED;
        if (keys.right) state.player.x += PLAYER_SPEED;
        state.player.x = Math.max(8, Math.min(W - PLAYER_W - 8, state.player.x));

        // Fire
        if (state.fireRequest) {
            const now = performance.now();
            if (now - state.lastShotAt > 280 && state.bullets.length < 3) {
                state.bullets.push({
                    x: state.player.x + PLAYER_W / 2 - BULLET_W / 2,
                    y: state.player.y - BULLET_H
                });
                state.lastShotAt = now;
            }
            state.fireRequest = false;
        }

        // Move bullets
        state.bullets.forEach(b => b.y -= BULLET_SPEED);
        state.bullets = state.bullets.filter(b => b.y + BULLET_H > 0);

        state.alienBullets.forEach(b => b.y += ALIEN_BULLET_SPEED);
        state.alienBullets = state.alienBullets.filter(b => b.y < H);

        // Alien movement
        let edge = false;
        const live = state.aliens.filter(a => a.alive);
        for (const a of live) {
            a.x += state.alienDir * state.alienSpeed;
            if (a.x < 8 || a.x + ALIEN_W > W - 8) edge = true;
        }
        if (edge) {
            state.alienDir *= -1;
            for (const a of state.aliens) if (a.alive) a.y += state.descendStep;
            state.alienSpeed = Math.min(state.alienSpeed + 0.06, 4);
        }

        // Alien shoot (random)
        if (live.length && Math.random() < 0.012 + state.wave * 0.003) {
            const shooter = live[Math.floor(Math.random() * live.length)];
            state.alienBullets.push({
                x: shooter.x + ALIEN_W / 2 - 2,
                y: shooter.y + ALIEN_H
            });
        }

        // Bullet vs aliens
        for (const b of state.bullets) {
            for (const a of state.aliens) {
                if (!a.alive) continue;
                if (b.x + BULLET_W > a.x && b.x < a.x + ALIEN_W &&
                    b.y < a.y + ALIEN_H && b.y + BULLET_H > a.y) {
                    a.alive = false;
                    b.dead = true;
                    state.score += ROW_BREEDS[a.row].points;
                    break;
                }
            }
        }
        state.bullets = state.bullets.filter(b => !b.dead);

        // Alien bullets vs player
        for (const b of state.alienBullets) {
            if (b.x + 4 > state.player.x && b.x < state.player.x + PLAYER_W &&
                b.y + 10 > state.player.y && b.y < state.player.y + PLAYER_H) {
                b.dead = true;
                state.lives--;
                state.player.x = W / 2 - PLAYER_W / 2;
                if (state.lives <= 0) endGame();
            }
        }
        state.alienBullets = state.alienBullets.filter(b => !b.dead);

        // Alien reaches player line
        if (state.aliens.some(a => a.alive && a.y + ALIEN_H >= PLAYER_Y - 8)) {
            endGame();
        }

        // Wave clear
        if (state.aliens.every(a => !a.alive)) {
            state.wave++;
            state.aliens = spawnAliens(state.wave - 1);
            state.alienDir = 1;
            state.alienSpeed = Math.min(0.6 + state.wave * 0.4, 4);
            state.score += 100;
        }

        updateHud();
    }

    function endGame() {
        state.gameOver = true;
        const previousHigh = getHighScore() || 0;
        if (state.score > previousHigh && typeof onHighScore === "function" && !state._highSaved) {
            state._highSaved = true;
            onHighScore(state.score);
        }
        showOverlay();
    }

    function showOverlay() {
        const ov = document.getElementById("invaders-overlay");
        if (!ov) return;
        const previousHigh = getHighScore() || 0;
        const isNewHigh = state.score > previousHigh;
        ov.hidden = false;
        ov.innerHTML = `
            <div class="overlay-card ${isNewHigh ? "is-new-high" : ""}">
                <h2>${isNewHigh ? "🏆 NEW HIGH SCORE!" : "Game over!"}</h2>
                <p>Score: <strong>${state.score}</strong> · Wave: <strong>${state.wave}</strong></p>
                <p class="tetris-prev-high">Previous best: ${previousHigh}</p>
                <div class="overlay-actions">
                    <button type="button" id="invaders-again" class="primary-btn pulse-btn">🔁 Play again</button>
                    <a class="ghost-btn" href="#/break">← Switch game</a>
                </div>
            </div>
        `;
        const again = document.getElementById("invaders-again");
        if (again) again.addEventListener("click", () => {
            ov.hidden = true;
            beginGame();
        });
        const hsEl = document.getElementById("invaders-high");
        if (hsEl) hsEl.textContent = Math.max(previousHigh, state.score);
    }

    function togglePause() {
        if (!state || state.gameOver) return;
        state.paused = !state.paused;
        const ov = document.getElementById("invaders-overlay");
        if (state.paused) {
            ov.hidden = false;
            ov.innerHTML = `<div class="overlay-card"><h2>Paused</h2><p>Press <kbd>P</kbd> to resume.</p></div>`;
        } else {
            ov.hidden = true;
        }
    }

    function updateHud() {
        const s = document.getElementById("invaders-score"); if (s) s.textContent = state.score;
        const w = document.getElementById("invaders-wave"); if (w) w.textContent = state.wave;
        const l = document.getElementById("invaders-lives"); if (l) l.textContent = state.lives;
    }

    function renderTimer() {
        if (!state) return;
        const r = SESSION.BREAK_MS - SESSION.elapsed();
        const elem = document.getElementById("invaders-timer");
        const labelEl = document.getElementById("invaders-timer-label");
        if (!elem) return;
        if (r > 0) {
            const m = Math.floor(r / 60000);
            const s = Math.floor((r % 60000) / 1000);
            elem.textContent = `${m}:${String(s).padStart(2, "0")}`;
            elem.classList.remove("overtime");
            if (labelEl) labelEl.textContent = "Time left";
        } else {
            const overtimeMs = -r;
            const m = Math.floor(overtimeMs / 60000);
            const s = Math.floor((overtimeMs % 60000) / 1000);
            elem.textContent = `+${m}:${String(s).padStart(2, "0")}`;
            elem.classList.add("overtime");
            if (labelEl) labelEl.textContent = "Overtime 🔥";
        }
    }

    /* ---------- Render ---------- */

    function draw() {
        // Background
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, "#0a0820");
        grad.addColorStop(1, "#1a0f3a");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        // Stars
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        for (let i = 0; i < 50; i++) {
            const sx = (i * 73) % W;
            const sy = (i * 41) % H;
            ctx.fillRect(sx, sy, 1, 1);
        }

        // Aliens
        for (const a of state.aliens) {
            if (!a.alive) continue;
            const breed = ROW_BREEDS[a.row];
            window.drawCanvasCat(ctx, a.x + ALIEN_W / 2, a.y + ALIEN_H / 2, ALIEN_H, {
                primary: breed.primary, accent: breed.accent, eyeColor: breed.eyeColor,
                ears: breed.ears
            });
        }

        // Bullets (player)
        ctx.fillStyle = "#ffd166";
        for (const b of state.bullets) {
            ctx.fillRect(b.x, b.y, BULLET_W, BULLET_H);
            // Glow
            ctx.fillStyle = "rgba(255, 209, 102, 0.3)";
            ctx.fillRect(b.x - 2, b.y - 2, BULLET_W + 4, BULLET_H + 4);
            ctx.fillStyle = "#ffd166";
        }

        // Bullets (alien)
        ctx.fillStyle = "#ff7f51";
        for (const b of state.alienBullets) {
            ctx.fillRect(b.x, b.y, 4, 10);
        }

        // Player saucer
        const px = state.player.x + PLAYER_W / 2;
        const py = state.player.y + PLAYER_H / 2;
        ctx.save();
        ctx.translate(px, py);
        // Saucer base
        ctx.fillStyle = "#7a6650";
        ctx.beginPath();
        ctx.ellipse(0, 6, PLAYER_W / 2, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        // Glass dome
        ctx.fillStyle = "rgba(120, 200, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(0, 0, 14, Math.PI, 0);
        ctx.fill();
        // Pilot cat
        ctx.restore();
        window.drawCanvasCat(ctx, px, py - 2, 26, {
            primary: "#f4a261", accent: "#e07a3a", eyeColor: "#2a8a3a",
            ears: "normal", stripes: true
        });

        // Lives strip
        for (let i = 0; i < state.lives; i++) {
            window.drawCanvasCat(ctx, 22 + i * 22, 24, 18, {
                primary: "#f4a261", accent: "#e07a3a", eyeColor: "#2a8a3a", ears: "normal"
            });
        }
    }

    window.CatInvaders = { start, stop };
})();
