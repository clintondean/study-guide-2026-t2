// Catanoid — Brick-breaker (Arkanoid clone) with cats.
// 5-minute shared break-session timer (window.BreakSession).
// Mouse / arrow keys to move the cat-paddle; bounce the ball into brick-cats.
// Exposes window.Catanoid with start(rootEl, opts) and stop().

(function () {
    "use strict";

    const W = 640;
    const H = 540;
    const PADDLE_W = 96, PADDLE_H = 14;
    const PADDLE_Y = H - 30;
    const BALL_R = 8;
    const BRICK_ROWS = 5;
    const BRICK_COLS = 9;
    const BRICK_PADX = 4, BRICK_PADY = 6;
    const BRICK_W = 60, BRICK_H = 22;
    const FIELD_PADX = 22;
    const FIELD_TOP = 60;

    const ROW_BREEDS = [
        { primary: "#9b5de5", accent: "#5a189a", eyeColor: "#ffd166", points: 50, ears: "big" },
        { primary: "#3da9fc", accent: "#1d4ed8", eyeColor: "#fff", points: 40, ears: "normal" },
        { primary: "#5fcfbf", accent: "#1d7a6f", eyeColor: "#fff", points: 30, ears: "normal" },
        { primary: "#ffd166", accent: "#c8950b", eyeColor: "#1a1a1d", points: 20, ears: "normal" },
        { primary: "#ff7f51", accent: "#ce4257", eyeColor: "#fff", points: 10, ears: "normal" }
    ];

    /* Power-up drops. Each brick has POWERUP_DROP_CHANCE chance of spawning one. */
    const POWERUP_DROP_CHANCE = 0.16;
    const POWERUP_FALL_SPEED = 2.4;
    const POWERUP_W = 36, POWERUP_H = 18;

    const POWERUPS = {
        extraBall:  { label: "+1",  emoji: "🐱",  color: "#5fcfbf", text: "Extra ball!",   ms: 0,     good: true },
        growBall:   { label: "B",   emoji: "💪",  color: "#9b5de5", text: "Big ball!",     ms: 12000, good: true },
        growPad:    { label: "GROW",emoji: "↔️",  color: "#43aa8b", text: "Big paddle!",   ms: 15000, good: true },
        shrinkPad:  { label: "SHRK",emoji: "🤏",  color: "#e76f51", text: "Tiny paddle!",  ms: 10000, good: false },
        slowBall:   { label: "SLOW",emoji: "🐌",  color: "#ffd166", text: "Slow-mo!",      ms: 10000, good: true },
        extraLife:  { label: "♥",   emoji: "❤️",  color: "#ff5b8b", text: "Extra life!",   ms: 0,     good: true },
        sticky:     { label: "STKY",emoji: "🪝",  color: "#7d5a3c", text: "Sticky paddle!",ms: 9000,  good: true },
        fastBall:   { label: "FAST",emoji: "⚡",  color: "#ff7f51", text: "Speed up!",     ms: 7000,  good: false }
    };
    const POWERUP_KEYS = Object.keys(POWERUPS);

    const SPEED_BUMP_PER_PADDLE_HIT = 1.025;   // +2.5% each paddle hit
    const SPEED_BUMP_PER_TICK = 1.0008;        // very slight passive ramp per frame
    const MAX_SPEED_MUL = 2.4;                 // cap
    const MOD_BAD_BIAS = 0.35;                 // ~35% of powerup drops are bad ones

    let canvas, ctx, rootEl;
    let onExit, onHighScore, getHighScore = () => 0;
    let state, rafId, keys, mouseX = null;

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
        if (state && state.keyHandler) window.removeEventListener("keydown", state.keyHandler);
        if (state && state.keyUpHandler) window.removeEventListener("keyup", state.keyUpHandler);
        state = null;
    }

    function renderShell() {
        rootEl.innerHTML = `
            <a class="back-link" href="#/break">← Switch game</a>
            <header class="break-game-header">
                <div>
                    <h1>🧱 Catanoid</h1>
                    <p class="break-game-blurb">Smash the brick-cats. Move with mouse OR ←/→. Space to launch. Ball gets faster every paddle bounce!</p>
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="catanoid-timer-label">Time left</div>
                    <div class="tetris-timer" id="catanoid-timer">5:00</div>
                </div>
            </header>
            <div class="break-game-stats">
                <div class="tetris-stat tetris-highscore"><span>🏆 High</span><strong id="catanoid-high">${getHighScore() || 0}</strong></div>
                <div class="tetris-stat"><span>Score</span><strong id="catanoid-score">0</strong></div>
                <div class="tetris-stat"><span>Level</span><strong id="catanoid-level">1</strong></div>
                <div class="tetris-stat"><span>Lives</span><strong id="catanoid-lives">3</strong></div>
            </div>
            <div class="break-canvas-wrap">
                <canvas id="catanoid-canvas" width="${W}" height="${H}" tabindex="0"></canvas>
                <div class="break-overlay" id="catanoid-overlay" hidden></div>
            </div>
            <div class="tetris-touch break-touch">
                <div class="tetris-touch-row">
                    <button type="button" data-act="left">←</button>
                    <button type="button" data-act="launch">🚀 Launch</button>
                    <button type="button" data-act="right">→</button>
                </div>
            </div>
            <p class="break-help">Don't drop the ball! Cleared all bricks? Next level — faster ball.</p>
        `;
        canvas = document.getElementById("catanoid-canvas");
        ctx = canvas.getContext("2d");
        canvas.focus();
        // Mouse aim
        canvas.addEventListener("pointermove", (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = (e.clientX - rect.left) * (W / rect.width);
        });
        canvas.addEventListener("pointerdown", () => { if (state && anyBallOnPaddle()) launchBall(); });
        rootEl.querySelectorAll(".break-touch [data-act]").forEach(b => {
            b.addEventListener("pointerdown", () => handleTouch(b.dataset.act, true));
            b.addEventListener("pointerup",   () => handleTouch(b.dataset.act, false));
            b.addEventListener("pointerleave",() => handleTouch(b.dataset.act, false));
        });
    }

    function handleTouch(act, down) {
        if (act === "left")  keys.left = down;
        if (act === "right") keys.right = down;
        if (act === "launch" && down && state && anyBallOnPaddle()) launchBall();
    }

    function bindInput() {
        keys = { left: false, right: false };
        const down = (e) => {
            if (e.key === "ArrowLeft")  { keys.left = true; e.preventDefault(); }
            else if (e.key === "ArrowRight") { keys.right = true; e.preventDefault(); }
            else if (e.key === " ") { if (state && anyBallOnPaddle()) launchBall(); e.preventDefault(); }
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
            paddle: { x: W / 2 - PADDLE_W / 2, y: PADDLE_Y },
            balls: [makeStartingBall()],
            powerups: [],
            mods: { paddleSizeMul: 1, ballSizeMul: 1, ballSpeedMul: 1, sticky: false },
            modExpiry: {},  // key -> timestamp ms
            popups: [],     // floating text after collecting a powerup
            bricks: spawnBricks(),
            score: 0,
            level: 1,
            lives: 3,
            paused: false,
            gameOver: false,
            baseSpeed: 4
        });
        if (!state.keyHandler) bindInput();
        state.timerInterval = setInterval(renderTimer, 250);
        renderTimer();
        updateHud();
    }

    function makeStartingBall() {
        return { x: W / 2, y: PADDLE_Y - BALL_R - 1, vx: 0, vy: 0, onPaddle: true, stuckOffset: 0 };
    }

    function paddleWidth() {
        return PADDLE_W * (state.mods.paddleSizeMul || 1);
    }

    function ballRadius() {
        return BALL_R * (state.mods.ballSizeMul || 1);
    }

    function spawnBricks() {
        const bricks = [];
        const totalW = BRICK_COLS * BRICK_W + (BRICK_COLS - 1) * BRICK_PADX;
        const startX = (W - totalW) / 2;
        for (let r = 0; r < BRICK_ROWS; r++) {
            for (let c = 0; c < BRICK_COLS; c++) {
                bricks.push({
                    row: r,
                    x: startX + c * (BRICK_W + BRICK_PADX),
                    y: FIELD_TOP + r * (BRICK_H + BRICK_PADY),
                    alive: true
                });
            }
        }
        return bricks;
    }

    function launchBall() {
        // Launch the (first) ball that's still resting on the paddle.
        const ball = state.balls.find(b => b.onPaddle);
        if (!ball) return;
        ball.onPaddle = false;
        const angle = (Math.random() * 0.6 - 0.3) - Math.PI / 2;
        const speed = (state.baseSpeed + state.level * 0.3) * (state.mods.ballSpeedMul || 1);
        ball.vx = Math.cos(angle) * speed;
        ball.vy = Math.sin(angle) * speed;
    }

    function anyBallOnPaddle() {
        return state.balls.some(b => b.onPaddle);
    }

    function loop() {
        rafId = requestAnimationFrame(loop);
        if (!state) return;
        if (!state.paused && !state.gameOver) update();
        draw();
    }

    function update() {
        const now = performance.now();

        // ---- Expire active modifiers ----
        for (const k of Object.keys(state.modExpiry)) {
            if (now >= state.modExpiry[k]) {
                deactivateMod(k);
                delete state.modExpiry[k];
            }
        }

        // ---- Paddle movement ----
        // Both mouse aim AND arrow keys work; whichever was used most recently wins.
        const padW = paddleWidth();
        const usingKeys = keys.left || keys.right;
        if (usingKeys) {
            if (keys.left) state.paddle.x -= 7;
            if (keys.right) state.paddle.x += 7;
        } else if (mouseX != null) {
            state.paddle.x = mouseX - padW / 2;
        }
        state.paddle.x = Math.max(FIELD_PADX, Math.min(W - padW - FIELD_PADX, state.paddle.x));

        // ---- Balls ----
        const r = ballRadius();
        const newBricksToSpawnPowerups = [];

        for (const ball of state.balls) {
            if (ball.onPaddle) {
                ball.x = state.paddle.x + padW / 2 + (ball.stuckOffset || 0);
                ball.y = state.paddle.y - r - 1;
                continue;
            }
            // Passive speed ramp (very slight per frame)
            ball.vx *= SPEED_BUMP_PER_TICK;
            ball.vy *= SPEED_BUMP_PER_TICK;
            // Cap absolute speed
            const sp = Math.hypot(ball.vx, ball.vy);
            const maxSp = (state.baseSpeed + state.level * 0.3) * MAX_SPEED_MUL * (state.mods.ballSpeedMul || 1);
            if (sp > maxSp) {
                const k = maxSp / sp;
                ball.vx *= k; ball.vy *= k;
            }

            ball.x += ball.vx;
            ball.y += ball.vy;

            // Wall collisions
            if (ball.x - r < FIELD_PADX) { ball.x = FIELD_PADX + r; ball.vx *= -1; }
            if (ball.x + r > W - FIELD_PADX) { ball.x = W - FIELD_PADX - r; ball.vx *= -1; }
            if (ball.y - r < 8) { ball.y = 8 + r; ball.vy *= -1; }

            // Paddle collision
            if (ball.y + r >= state.paddle.y &&
                ball.y - r <= state.paddle.y + PADDLE_H &&
                ball.x >= state.paddle.x && ball.x <= state.paddle.x + padW &&
                ball.vy > 0) {
                const rel = (ball.x - (state.paddle.x + padW / 2)) / (padW / 2);
                const angle = rel * (Math.PI / 3);
                let speed = Math.hypot(ball.vx, ball.vy) * SPEED_BUMP_PER_PADDLE_HIT;
                ball.vx = Math.sin(angle) * speed;
                ball.vy = -Math.abs(Math.cos(angle) * speed);
                ball.y = state.paddle.y - r - 1;
                if (state.mods.sticky) {
                    ball.onPaddle = true;
                    ball.stuckOffset = ball.x - (state.paddle.x + padW / 2);
                    ball.vx = 0; ball.vy = 0;
                }
            }

            // Brick collisions
            for (const br of state.bricks) {
                if (!br.alive) continue;
                if (ball.x + r > br.x && ball.x - r < br.x + BRICK_W &&
                    ball.y + r > br.y && ball.y - r < br.y + BRICK_H) {
                    br.alive = false;
                    state.score += ROW_BREEDS[br.row].points;
                    if (Math.random() < POWERUP_DROP_CHANCE) {
                        newBricksToSpawnPowerups.push({ x: br.x + BRICK_W / 2, y: br.y + BRICK_H / 2 });
                    }
                    const overlapX = Math.min(ball.x - br.x, (br.x + BRICK_W) - ball.x);
                    const overlapY = Math.min(ball.y - br.y, (br.y + BRICK_H) - ball.y);
                    if (overlapX < overlapY) ball.vx *= -1; else ball.vy *= -1;
                    break;
                }
            }
        }

        // Spawn powerups for any bricks broken this frame
        for (const p of newBricksToSpawnPowerups) spawnPowerup(p.x, p.y);

        // ---- Power-up movement & catch ----
        for (const pu of state.powerups) {
            pu.y += POWERUP_FALL_SPEED;
        }
        // Catch
        for (const pu of state.powerups) {
            if (pu.caught) continue;
            if (pu.y + POWERUP_H / 2 >= state.paddle.y &&
                pu.y - POWERUP_H / 2 <= state.paddle.y + PADDLE_H &&
                pu.x + POWERUP_W / 2 >= state.paddle.x &&
                pu.x - POWERUP_W / 2 <= state.paddle.x + padW) {
                pu.caught = true;
                applyPowerup(pu.type);
            }
        }
        state.powerups = state.powerups.filter(pu => !pu.caught && pu.y < H + 30);

        // ---- Drop balls that left the screen ----
        state.balls = state.balls.filter(b => b.y - r <= H + 4);
        if (state.balls.length === 0) {
            state.lives--;
            if (state.lives <= 0) { endGame(); return; }
            state.balls = [makeStartingBall()];
            // Reset most modifiers on death (keeps the game manageable)
            state.mods.ballSizeMul = 1;
            state.mods.ballSpeedMul = 1;
            state.mods.sticky = false;
            // Keep paddle size as-is; reset modExpiry for ball ones
            delete state.modExpiry.growBall;
            delete state.modExpiry.slowBall;
            delete state.modExpiry.fastBall;
            delete state.modExpiry.sticky;
        }

        // ---- Floating popups ----
        for (const p of state.popups) p.t -= 16;
        state.popups = state.popups.filter(p => p.t > 0);

        // ---- Level cleared ----
        if (state.bricks.every(b => !b.alive)) {
            state.level++;
            state.bricks = spawnBricks();
            state.balls = [makeStartingBall()];
            state.powerups = [];
            state.score += 100;
            state.baseSpeed += 0.4;
        }

        updateHud();
    }

    /* ---------- Power-ups ---------- */

    function spawnPowerup(x, y) {
        // Bias toward 'good' powerups: ~65% chance of good
        const pickGood = Math.random() > MOD_BAD_BIAS;
        const candidates = POWERUP_KEYS.filter(k => POWERUPS[k].good === pickGood);
        const type = candidates[Math.floor(Math.random() * candidates.length)] || POWERUP_KEYS[0];
        state.powerups.push({ x, y, type, vy: POWERUP_FALL_SPEED });
    }

    function applyPowerup(type) {
        const cfg = POWERUPS[type];
        if (!cfg) return;
        const now = performance.now();
        // Show a floating popup
        state.popups.push({
            x: state.paddle.x + paddleWidth() / 2,
            y: state.paddle.y - 30,
            text: cfg.emoji + " " + cfg.text,
            color: cfg.color,
            t: 1500
        });
        if (type === "extraBall") {
            // Clone an in-flight ball; if none, spawn from paddle
            const r = ballRadius();
            const inFlight = state.balls.find(b => !b.onPaddle);
            if (inFlight) {
                state.balls.push({ x: inFlight.x, y: inFlight.y, vx: -inFlight.vx, vy: inFlight.vy, onPaddle: false });
                // And also one with rotated velocity
                const speed = Math.hypot(inFlight.vx, inFlight.vy);
                const angle = Math.atan2(inFlight.vy, inFlight.vx) + Math.PI / 6;
                state.balls.push({ x: inFlight.x, y: inFlight.y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, onPaddle: false });
            } else {
                state.balls.push({ x: state.paddle.x + paddleWidth() / 2, y: state.paddle.y - r - 1, vx: 0, vy: 0, onPaddle: true });
            }
            return;
        }
        if (type === "extraLife") { state.lives++; return; }
        if (type === "growBall") { state.mods.ballSizeMul = 1.8; state.modExpiry.growBall = now + cfg.ms; return; }
        if (type === "growPad")  { state.mods.paddleSizeMul = 1.6; state.modExpiry.growPad = now + cfg.ms; return; }
        if (type === "shrinkPad"){ state.mods.paddleSizeMul = 0.65; state.modExpiry.shrinkPad = now + cfg.ms; return; }
        if (type === "slowBall") {
            state.mods.ballSpeedMul = 0.6;
            // Apply immediately to live balls
            for (const b of state.balls) { b.vx *= 0.6; b.vy *= 0.6; }
            state.modExpiry.slowBall = now + cfg.ms;
            return;
        }
        if (type === "fastBall") {
            state.mods.ballSpeedMul = 1.5;
            for (const b of state.balls) { b.vx *= 1.5; b.vy *= 1.5; }
            state.modExpiry.fastBall = now + cfg.ms;
            return;
        }
        if (type === "sticky") {
            state.mods.sticky = true;
            state.modExpiry.sticky = now + cfg.ms;
            return;
        }
    }

    function deactivateMod(key) {
        if (key === "growBall") {
            state.mods.ballSizeMul = 1;
        } else if (key === "growPad" || key === "shrinkPad") {
            state.mods.paddleSizeMul = 1;
        } else if (key === "slowBall") {
            // Restore base speed multiplier and re-scale live ball velocities
            const inv = 1 / 0.6;
            state.mods.ballSpeedMul = 1;
            for (const b of state.balls) { b.vx *= inv; b.vy *= inv; }
        } else if (key === "fastBall") {
            const inv = 1 / 1.5;
            state.mods.ballSpeedMul = 1;
            for (const b of state.balls) { b.vx *= inv; b.vy *= inv; }
        } else if (key === "sticky") {
            state.mods.sticky = false;
            // Release any stuck balls
            for (const b of state.balls) {
                if (b.onPaddle && (b.vx !== 0 || b.vy !== 0 || true)) {
                    // Auto-launch any stuck ball when sticky expires
                    if (b.vx === 0 && b.vy === 0) {
                        const angle = (Math.random() * 0.4 - 0.2) - Math.PI / 2;
                        const speed = (state.baseSpeed + state.level * 0.3) * (state.mods.ballSpeedMul || 1);
                        b.vx = Math.cos(angle) * speed;
                        b.vy = Math.sin(angle) * speed;
                        b.onPaddle = false;
                    }
                }
            }
        }
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
        const ov = document.getElementById("catanoid-overlay");
        if (!ov) return;
        const previousHigh = getHighScore() || 0;
        const isNewHigh = state.score > previousHigh;
        ov.hidden = false;
        ov.innerHTML = `
            <div class="overlay-card ${isNewHigh ? "is-new-high" : ""}">
                <h2>${isNewHigh ? "🏆 NEW HIGH SCORE!" : "Game over!"}</h2>
                <p>Score: <strong>${state.score}</strong> · Level <strong>${state.level}</strong></p>
                <p class="tetris-prev-high">Previous best: ${previousHigh}</p>
                <div class="overlay-actions">
                    <button type="button" id="catanoid-again" class="primary-btn pulse-btn">🔁 Play again</button>
                    <a class="ghost-btn" href="#/break">← Switch game</a>
                </div>
            </div>
        `;
        const again = document.getElementById("catanoid-again");
        if (again) again.addEventListener("click", () => {
            ov.hidden = true;
            beginGame();
        });
        const hsEl = document.getElementById("catanoid-high");
        if (hsEl) hsEl.textContent = Math.max(previousHigh, state.score);
    }

    function togglePause() {
        if (!state || state.gameOver) return;
        state.paused = !state.paused;
        const ov = document.getElementById("catanoid-overlay");
        if (state.paused) {
            ov.hidden = false;
            ov.innerHTML = `<div class="overlay-card"><h2>Paused</h2><p>Press <kbd>P</kbd> to resume.</p></div>`;
        } else {
            ov.hidden = true;
        }
    }

    function updateHud() {
        const s = document.getElementById("catanoid-score"); if (s) s.textContent = state.score;
        const lv = document.getElementById("catanoid-level"); if (lv) lv.textContent = state.level;
        const li = document.getElementById("catanoid-lives"); if (li) li.textContent = state.lives;
    }

    function renderTimer() {
        if (!state) return;
        const r = SESSION.BREAK_MS - SESSION.elapsed();
        const elem = document.getElementById("catanoid-timer");
        const labelEl = document.getElementById("catanoid-timer-label");
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
        grad.addColorStop(0, "#fff5ec");
        grad.addColorStop(1, "#ffd9b3");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        // Field walls
        ctx.fillStyle = "rgba(206, 66, 87, 0.18)";
        ctx.fillRect(0, 0, FIELD_PADX, H);
        ctx.fillRect(W - FIELD_PADX, 0, FIELD_PADX, H);
        ctx.fillRect(FIELD_PADX, 0, W - FIELD_PADX * 2, 8);

        // Bricks (cat-faced)
        for (const b of state.bricks) {
            if (!b.alive) continue;
            const breed = ROW_BREEDS[b.row];
            // Brick body
            ctx.fillStyle = breed.primary;
            roundRect(ctx, b.x, b.y, BRICK_W, BRICK_H, 4);
            ctx.fill();
            // Highlight
            ctx.fillStyle = "rgba(255,255,255,0.35)";
            roundRect(ctx, b.x + 2, b.y + 2, BRICK_W - 4, 5, 3);
            ctx.fill();
            // Mini cat face (centred)
            window.drawCanvasCat(ctx, b.x + BRICK_W / 2, b.y + BRICK_H / 2, BRICK_H - 2, {
                primary: breed.primary, accent: breed.accent, eyeColor: breed.eyeColor,
                ears: breed.ears
            });
        }

        // Paddle (cat-themed) — width can be modified by powerups
        const padW = paddleWidth();
        const pX = state.paddle.x, pY = state.paddle.y;
        // Highlight outline if paddle was modified
        if (state.mods.paddleSizeMul > 1) {
            ctx.fillStyle = "rgba(67, 170, 139, 0.45)";
            roundRect(ctx, pX - 4, pY - 4, padW + 8, PADDLE_H + 8, 9);
            ctx.fill();
        } else if (state.mods.paddleSizeMul < 1) {
            ctx.fillStyle = "rgba(231, 111, 81, 0.35)";
            roundRect(ctx, pX - 4, pY - 4, padW + 8, PADDLE_H + 8, 9);
            ctx.fill();
        }
        ctx.fillStyle = state.mods.sticky ? "#7a4f1a" : "#7d5a3c";
        roundRect(ctx, pX, pY, padW, PADDLE_H, 7);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        roundRect(ctx, pX + 4, pY + 2, padW - 8, 4, 2);
        ctx.fill();
        // A cat sitting on the paddle
        window.drawCanvasCat(ctx, pX + padW / 2, pY - 2, 24, {
            primary: "#f4a261", accent: "#e07a3a", eyeColor: "#2a8a3a",
            ears: "normal", stripes: true
        });

        // Balls (cat faces) — multi-ball support
        const r = ballRadius();
        const ballSize = r * 2.4;
        for (const ball of state.balls) {
            // Big-ball glow
            if (state.mods.ballSizeMul > 1) {
                ctx.fillStyle = "rgba(155, 93, 229, 0.35)";
                ctx.beginPath();
                ctx.arc(ball.x, ball.y, r + 6, 0, Math.PI * 2);
                ctx.fill();
            }
            window.drawCanvasCat(ctx, ball.x, ball.y, ballSize, {
                primary: state.mods.ballSizeMul > 1 ? "#e0c8ff" : "#fff5ec",
                accent: "#ce4257", eyeColor: "#1a1a1d",
                ears: "normal"
            });
        }

        // Power-ups (falling)
        for (const pu of state.powerups) {
            const cfg = POWERUPS[pu.type];
            if (!cfg) continue;
            ctx.save();
            ctx.translate(pu.x, pu.y);
            // Capsule
            ctx.fillStyle = cfg.color;
            roundRect(ctx, -POWERUP_W / 2, -POWERUP_H / 2, POWERUP_W, POWERUP_H, 9);
            ctx.fill();
            ctx.fillStyle = "rgba(255,255,255,0.4)";
            roundRect(ctx, -POWERUP_W / 2 + 3, -POWERUP_H / 2 + 2, POWERUP_W - 6, 4, 2);
            ctx.fill();
            // Label
            ctx.fillStyle = "#fff";
            ctx.font = "bold 11px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(cfg.label, 0, 1);
            ctx.restore();
        }

        // Lives
        for (let i = 0; i < state.lives; i++) {
            window.drawCanvasCat(ctx, 30 + i * 22, 30, 18, {
                primary: "#f4a261", accent: "#e07a3a", eyeColor: "#2a8a3a", ears: "normal"
            });
        }

        // Active modifier badges (top-right)
        let badgeX = W - 16;
        for (const k of Object.keys(state.modExpiry).sort()) {
            const cfg = POWERUPS[k];
            if (!cfg) continue;
            const remaining = (state.modExpiry[k] - performance.now()) / 1000;
            if (remaining <= 0) continue;
            const txt = `${cfg.label} ${remaining.toFixed(1)}s`;
            ctx.font = "bold 11px sans-serif";
            const tw = ctx.measureText(txt).width + 12;
            ctx.fillStyle = cfg.color;
            roundRect(ctx, badgeX - tw, 16, tw, 18, 9);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(txt, badgeX - tw / 2, 25);
            badgeX -= tw + 6;
        }

        // Floating popup text after collecting a powerup
        for (const p of state.popups) {
            const alpha = Math.min(1, p.t / 1500);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.font = "bold 16px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(p.text, p.x, p.y - (1500 - p.t) * 0.04);
            ctx.globalAlpha = 1;
        }

        // "Press launch" hint
        if (anyBallOnPaddle() && !state.paused && !state.gameOver) {
            ctx.fillStyle = "#5a3a22";
            ctx.font = "bold 16px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACE / click / 🚀 Launch", W / 2, FIELD_TOP - 24);
        }
    }

    function roundRect(ctx, x, y, w, h, r) {
        if (typeof ctx.roundRect === "function") {
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, r);
            return;
        }
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    window.Catanoid = { start, stop };
})();
