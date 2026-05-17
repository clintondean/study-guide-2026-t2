(function () {
    "use strict";

    const W = 640;
    const H = 640;
    const COLS = 20;
    const ROWS = 20;
    const CELL = W / COLS;
    const START_LENGTH = 5;
    const MIN_LENGTH = 3;
    const FRUIT_SLOTS = 2;
    const BONUS_FRUIT_MS = 15000;
    const EFFECT_MS = 15000;
    const CRAZY_BURST_MS = 6000;
    const CRAZY_BURST_COUNT = 20;
    const BASE_STEP_MS = 175;
    const MIN_STEP_MS = 88;
    const MAX_TURN_QUEUE = 2;
    const BONUS_TYPES = ["super", "turbo", "poison", "sloMo", "crazy"];
    const DIRS = {
        up: { x: 0, y: -1, name: "up" },
        right: { x: 1, y: 0, name: "right" },
        down: { x: 0, y: 1, name: "down" },
        left: { x: -1, y: 0, name: "left" }
    };
    const FRUIT_META = {
        normal: {
            short: "Normal",
            label: "Normal fruit",
            description: "+1 segment",
            points: 10,
            grow: 1,
            body: "#ff6b6b",
            leaf: "#64c27b",
            accent: "#ffd7d7"
        },
        super: {
            short: "Super",
            label: "Super fruit",
            description: "+2 segments",
            points: 24,
            grow: 2,
            bonus: true,
            body: "#ffd166",
            leaf: "#6abf69",
            accent: "#fff4bf"
        },
        turbo: {
            short: "Turbo",
            label: "Turbo fruit",
            description: "2x speed for 15s",
            points: 18,
            speedMul: 2,
            bonus: true,
            body: "#ff8c42",
            leaf: "#4caf50",
            accent: "#ffe0bf"
        },
        poison: {
            short: "Poison",
            label: "Poison fruit",
            description: "-2 segments",
            points: 8,
            shrink: 2,
            bonus: true,
            body: "#9b5de5",
            leaf: "#5fcfbf",
            accent: "#e1d0ff"
        },
        sloMo: {
            short: "Slo-mo",
            label: "Slo-mo fruit",
            description: "0.5x speed for 15s",
            points: 18,
            speedMul: 0.5,
            bonus: true,
            body: "#4ecdc4",
            leaf: "#9be7a1",
            accent: "#d6fffb"
        },
        crazy: {
            short: "Crazy",
            label: "Crazy fruit",
            description: "Burst into 20 fruit for 6s",
            points: 22,
            crazy: true,
            bonus: true,
            body: "#3da9fc",
            leaf: "#8be1ff",
            accent: "#d5efff"
        },
        burst: {
            short: "Burst",
            label: "Burst fruit",
            description: "+1 segment",
            points: 6,
            grow: 1,
            body: "#ff9f1c",
            leaf: "#70c36d",
            accent: "#ffe3b2",
            burst: true
        }
    };
    const SESSION = (typeof window !== "undefined" && window.BreakSession) || {
        BREAK_MS: 5 * 60 * 1000,
        start() {},
        elapsed: function () { return 0; }
    };

    let rootEl;
    let canvas;
    let ctx;
    let state = null;
    let rafId = 0;
    let timerInterval = 0;
    let keyHandler = null;
    let touchCleanups = [];
    let onHighScore = null;
    let getHighScore = function () { return 0; };

    function start(root, opts) {
        stop();
        opts = opts || {};
        rootEl = root;
        onHighScore = opts.onHighScore || null;
        getHighScore = opts.getHighScore || function () { return 0; };
        SESSION.start();
        renderShell();
        bindInput();
        beginGame();
    }

    function stop() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = 0;
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = 0;
        if (keyHandler) {
            window.removeEventListener("keydown", keyHandler);
            keyHandler = null;
        }
        cleanupTouch();
        state = null;
        canvas = null;
        ctx = null;
    }

    function cleanupTouch() {
        touchCleanups.forEach(fn => fn());
        touchCleanups = [];
    }

    function beginGame() {
        if (timerInterval) clearInterval(timerInterval);
        const now = performance.now();
        state = freshState(now);
        ensureFruitSlots(now);
        hideOverlay();
        updateHud();
        updateStatus(now);
        renderTimer();
        draw(now);
        timerInterval = setInterval(function () {
            renderTimer();
            if (state) updateStatus(performance.now());
        }, 250);
        if (!rafId) rafId = requestAnimationFrame(loop);
        if (canvas) canvas.focus();
    }

    function freshState(now) {
        const startX = Math.floor(COLS / 2);
        const startY = Math.floor(ROWS / 2);
        const snake = [];
        for (let i = 0; i < START_LENGTH; i++) {
            snake.push({ x: startX - i, y: startY });
        }
        return {
            snake,
            dir: DIRS.right,
            turnQueue: [],
            fruits: [],
            burstFruits: [],
            score: 0,
            fruitCount: 0,
            pendingGrowth: 0,
            pendingShrink: 0,
            paused: false,
            gameOver: false,
            accumulator: 0,
            lastFrameAt: now,
            nextBonusAt: now + randBetween(4500, 8500),
            activeSpeed: null,
            previousHigh: 0,
            _highSaved: false
        };
    }

    function renderShell() {
        rootEl.innerHTML = `
            <a class="back-link" href="#/break">← Switch game</a>
            <header class="break-game-header">
                <div>
                    <h1>🐍 Danger Noodle</h1>
                    <p class="break-game-blurb">Classic Snake, but extra spicy: keep nibbling, juggle two fruit slots, and survive the wild bonus basket.</p>
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="danger-noodle-timer-label">Time left</div>
                    <div class="tetris-timer" id="danger-noodle-timer">5:00</div>
                </div>
            </header>
            <div class="break-game-stats">
                <div class="tetris-stat tetris-highscore"><span>🏆 High</span><strong id="danger-noodle-high">${getHighScore() || 0}</strong></div>
                <div class="tetris-stat"><span>Score</span><strong id="danger-noodle-score">0</strong></div>
                <div class="tetris-stat"><span>Length</span><strong id="danger-noodle-length">${START_LENGTH}</strong></div>
                <div class="tetris-stat"><span>Fruit eaten</span><strong id="danger-noodle-fruit-count">0</strong></div>
            </div>
            <div class="danger-noodle-layout">
                <div class="break-canvas-wrap">
                    <canvas id="danger-noodle-canvas" width="${W}" height="${H}" tabindex="0" aria-label="Danger Noodle game board"></canvas>
                    <div class="break-overlay" id="danger-noodle-overlay" hidden></div>
                </div>
                <aside class="danger-noodle-panel">
                    <h3>Fruit basket</h3>
                    <p class="danger-noodle-panel-copy">Exactly <strong>two fruit slots</strong> stay live on the board. Bonus fruit can take over a slot for about 15 seconds before it vanishes.</p>
                    <div class="danger-noodle-status" id="danger-noodle-status"></div>
                    <div class="danger-noodle-legend">
                        ${legendItem("normal")}
                        ${legendItem("super")}
                        ${legendItem("turbo")}
                        ${legendItem("poison")}
                        ${legendItem("sloMo")}
                        ${legendItem("crazy")}
                    </div>
                </aside>
            </div>
            <div class="danger-noodle-touch">
                <button type="button" class="danger-noodle-touch-spacer" disabled aria-hidden="true"></button>
                <button type="button" data-dir="up">↑</button>
                <button type="button" data-act="pause">⏯ Pause</button>
                <button type="button" data-dir="left">←</button>
                <button type="button" data-dir="down">↓</button>
                <button type="button" data-dir="right">→</button>
            </div>
            <p class="break-help">Arrow keys or touch buttons to steer. Quick two-turn combos buffer cleanly, and <kbd>P</kbd> pauses the noodle.</p>
        `;
        canvas = document.getElementById("danger-noodle-canvas");
        ctx = canvas.getContext("2d");
    }

    function legendItem(type) {
        const meta = FRUIT_META[type];
        return `
            <div class="danger-noodle-legend-item danger-noodle-${type}">
                <span class="danger-noodle-swatch"></span>
                <div>
                    <strong>${meta.label}</strong>
                    <span>${meta.description}</span>
                </div>
            </div>
        `;
    }

    function bindInput() {
        keyHandler = function (e) {
            if (!state) return;
            const key = (e.key || "").toLowerCase();
            if (key === "p") {
                togglePause();
                e.preventDefault();
                return;
            }
            if (state.gameOver) {
                if (key === "enter" || key === " ") {
                    beginGame();
                    e.preventDefault();
                }
                return;
            }
            if (state.paused) return;
            if (e.key === "ArrowUp" || key === "w") {
                queueDirection("up");
                e.preventDefault();
            } else if (e.key === "ArrowDown" || key === "s") {
                queueDirection("down");
                e.preventDefault();
            } else if (e.key === "ArrowLeft" || key === "a") {
                queueDirection("left");
                e.preventDefault();
            } else if (e.key === "ArrowRight" || key === "d") {
                queueDirection("right");
                e.preventDefault();
            }
        };
        window.addEventListener("keydown", keyHandler);

        rootEl.querySelectorAll(".danger-noodle-touch [data-dir]").forEach(button => {
            const handler = function (e) {
                if (e && e.preventDefault) e.preventDefault();
                queueDirection(button.dataset.dir);
            };
            button.addEventListener("pointerdown", handler);
            touchCleanups.push(function () { button.removeEventListener("pointerdown", handler); });
        });
        rootEl.querySelectorAll(".danger-noodle-touch [data-act='pause']").forEach(button => {
            const handler = function (e) {
                if (e && e.preventDefault) e.preventDefault();
                togglePause();
            };
            button.addEventListener("pointerdown", handler);
            touchCleanups.push(function () { button.removeEventListener("pointerdown", handler); });
        });
    }

    function queueDirection(dirName) {
        if (!state || state.paused || state.gameOver) return;
        const dir = DIRS[dirName];
        if (!dir || state.turnQueue.length >= MAX_TURN_QUEUE) return;
        const plannedDir = state.turnQueue.length ? state.turnQueue[state.turnQueue.length - 1] : state.dir;
        if (dir.name === plannedDir.name) return;
        if (isOpposite(dir, plannedDir)) return;
        state.turnQueue.push(dir);
    }

    function isOpposite(a, b) {
        return a.x === -b.x && a.y === -b.y;
    }

    function loop(timestamp) {
        rafId = requestAnimationFrame(loop);
        if (!state) return;
        const dt = Math.min(80, Math.max(0, timestamp - state.lastFrameAt));
        state.lastFrameAt = timestamp;

        expireTimedState(timestamp);
        if (!state.gameOver) ensureFruitSlots(timestamp);

        if (!state.paused && !state.gameOver) {
            state.accumulator += dt;
            let safety = 0;
            while (state.accumulator >= currentStepMs() && !state.gameOver && safety < 6) {
                state.accumulator -= currentStepMs();
                advanceSnake(timestamp);
                safety++;
            }
        }

        updateStatus(timestamp);
        draw(timestamp);
    }

    function currentStepMs() {
        const ramp = Math.min(58, Math.floor(state.fruitCount / 3) * 4);
        const base = Math.max(MIN_STEP_MS, BASE_STEP_MS - ramp);
        const speedMul = state.activeSpeed ? state.activeSpeed.multiplier : 1;
        return base / speedMul;
    }

    function expireTimedState(now) {
        if (!state) return;
        if (state.activeSpeed && now >= state.activeSpeed.endsAt) {
            state.activeSpeed = null;
            state.accumulator = 0;
        }
        state.fruits = state.fruits.filter(fruit => !fruit.expiresAt || now < fruit.expiresAt);
        state.burstFruits = state.burstFruits.filter(fruit => now < fruit.expiresAt);
    }

    function advanceSnake(now) {
        if (state.turnQueue.length) {
            state.dir = state.turnQueue.shift();
        }
        const head = state.snake[0];
        const next = { x: head.x + state.dir.x, y: head.y + state.dir.y };
        const fruit = findFruit(state.fruits, next.x, next.y);
        const burstFruit = fruit ? null : findFruit(state.burstFruits, next.x, next.y);
        const incomingGrowth = fruit ? (FRUIT_META[fruit.type].grow || 0) : (burstFruit ? 1 : 0);
        const tailStays = state.pendingGrowth + incomingGrowth > 0;

        if (outOfBounds(next) || hitsSnake(next, tailStays)) {
            endGame();
            return;
        }

        state.snake.unshift(next);
        let ateFruit = false;

        if (fruit) {
            eatFruit(fruit, now);
            ateFruit = true;
        } else if (burstFruit) {
            eatBurstFruit(burstFruit);
            ateFruit = true;
        }

        if (state.pendingGrowth > 0) {
            state.pendingGrowth--;
        } else {
            state.snake.pop();
        }
        if (state.pendingShrink > 0) {
            trimSnake(state.pendingShrink);
            state.pendingShrink = 0;
        }

        if (ateFruit) state.fruitCount++;
        ensureFruitSlots(now);
        updateHud();
    }

    function outOfBounds(pos) {
        return pos.x < 0 || pos.x >= COLS || pos.y < 0 || pos.y >= ROWS;
    }

    function hitsSnake(pos, tailStays) {
        const checkLength = tailStays ? state.snake.length : state.snake.length - 1;
        for (let i = 0; i < checkLength; i++) {
            if (state.snake[i].x === pos.x && state.snake[i].y === pos.y) return true;
        }
        return false;
    }

    function eatFruit(fruit, now) {
        const index = state.fruits.indexOf(fruit);
        if (index !== -1) state.fruits.splice(index, 1);

        const meta = FRUIT_META[fruit.type];
        state.score += meta.points || 0;
        state.pendingGrowth += meta.grow || 0;
        state.pendingShrink += meta.shrink || 0;

        if (meta.speedMul) {
            state.activeSpeed = {
                type: fruit.type,
                label: meta.short,
                multiplier: meta.speedMul,
                endsAt: now + EFFECT_MS
            };
            state.accumulator = 0;
        }
        if (meta.crazy) {
            spawnCrazyBurst(now);
        }
    }

    function eatBurstFruit(fruit) {
        const index = state.burstFruits.indexOf(fruit);
        if (index !== -1) state.burstFruits.splice(index, 1);
        state.score += FRUIT_META.burst.points;
        state.pendingGrowth += 1;
    }

    function trimSnake(count) {
        if (!count) return;
        const removable = Math.max(0, state.snake.length - MIN_LENGTH);
        const trimBy = Math.min(count, removable);
        if (trimBy > 0) state.snake.splice(state.snake.length - trimBy, trimBy);
    }

    function ensureFruitSlots(now) {
        if (!state || state.gameOver) return;
        while (state.fruits.length < FRUIT_SLOTS) {
            const type = shouldSpawnBonus(now) ? pickBonusType() : "normal";
            const fruit = createFruit(type, now);
            if (!fruit) break;
            state.fruits.push(fruit);
            if (type !== "normal") state.nextBonusAt = now + randBetween(8500, 14000);
        }
    }

    function shouldSpawnBonus(now) {
        if (now < state.nextBonusAt) return false;
        return !state.fruits.some(fruit => FRUIT_META[fruit.type] && FRUIT_META[fruit.type].bonus);
    }

    function pickBonusType() {
        return BONUS_TYPES[Math.floor(Math.random() * BONUS_TYPES.length)];
    }

    function createFruit(type, now) {
        const cell = pickOpenCell();
        if (!cell) return null;
        return {
            x: cell.x,
            y: cell.y,
            type,
            expiresAt: FRUIT_META[type].bonus ? now + BONUS_FRUIT_MS : 0
        };
    }

    function spawnCrazyBurst(now) {
        const cells = pickOpenCells(CRAZY_BURST_COUNT);
        state.burstFruits = cells.map(cell => ({
            x: cell.x,
            y: cell.y,
            type: "burst",
            expiresAt: now + CRAZY_BURST_MS
        }));
    }

    function findFruit(list, x, y) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].x === x && list[i].y === y) return list[i];
        }
        return null;
    }

    function pickOpenCell() {
        const cells = pickOpenCells(1);
        return cells[0] || null;
    }

    function pickOpenCells(count) {
        const blocked = new Set();
        state.snake.forEach(seg => blocked.add(cellKey(seg.x, seg.y)));
        state.fruits.forEach(fruit => blocked.add(cellKey(fruit.x, fruit.y)));
        state.burstFruits.forEach(fruit => blocked.add(cellKey(fruit.x, fruit.y)));

        const open = [];
        for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                const key = cellKey(x, y);
                if (!blocked.has(key)) open.push({ x, y });
            }
        }
        shuffle(open);
        return open.slice(0, count);
    }

    function cellKey(x, y) {
        return x + "," + y;
    }

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        return arr;
    }

    function updateHud() {
        const high = document.getElementById("danger-noodle-high");
        const score = document.getElementById("danger-noodle-score");
        const length = document.getElementById("danger-noodle-length");
        const fruitCount = document.getElementById("danger-noodle-fruit-count");
        if (high) high.textContent = Math.max(getHighScore() || 0, state.score);
        if (score) score.textContent = state.score;
        if (length) length.textContent = state.snake.length;
        if (fruitCount) fruitCount.textContent = state.fruitCount;
    }

    function updateStatus(now) {
        const host = document.getElementById("danger-noodle-status");
        if (!host || !state) return;
        const chips = [];
        chips.push(chipHtml("danger-noodle-chip is-neutral", state.fruits.length + " / 2 fruit slots live"));
        const bonusFruit = state.fruits.filter(fruit => FRUIT_META[fruit.type] && FRUIT_META[fruit.type].bonus);
        bonusFruit.forEach(fruit => {
            chips.push(chipHtml("danger-noodle-chip is-" + fruit.type, FRUIT_META[fruit.type].short + " " + formatSecondsLeft(fruit.expiresAt, now)));
        });
        if (state.activeSpeed) {
            const speedText = state.activeSpeed.multiplier > 1 ? "x2 speed" : "0.5x speed";
            chips.push(chipHtml("danger-noodle-chip is-" + state.activeSpeed.type, state.activeSpeed.label + " " + speedText + " · " + formatSecondsLeft(state.activeSpeed.endsAt, now)));
        }
        if (state.burstFruits.length) {
            const burstLeft = state.burstFruits.reduce((latest, fruit) => Math.max(latest, fruit.expiresAt || 0), 0);
            chips.push(chipHtml("danger-noodle-chip is-crazy", "Burst storm " + state.burstFruits.length + " fruit · " + formatSecondsLeft(burstLeft, now)));
        }
        if (!bonusFruit.length && !state.activeSpeed && !state.burstFruits.length) {
            chips.push(chipHtml("danger-noodle-chip is-quiet", "Only normal fruit on deck"));
        }
        host.innerHTML = chips.join("");
    }

    function chipHtml(className, text) {
        return `<span class="${className}">${text}</span>`;
    }

    function formatSecondsLeft(endsAt, now) {
        const seconds = Math.max(0, Math.ceil((endsAt - now) / 1000));
        return seconds + "s";
    }

    function renderTimer() {
        if (!state) return;
        const r = SESSION.BREAK_MS - SESSION.elapsed();
        const elem = document.getElementById("danger-noodle-timer");
        const labelEl = document.getElementById("danger-noodle-timer-label");
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

    function togglePause() {
        if (!state || state.gameOver) return;
        state.paused = !state.paused;
        const ov = document.getElementById("danger-noodle-overlay");
        if (!ov) return;
        if (state.paused) {
            ov.hidden = false;
            ov.innerHTML = `<div class="overlay-card"><h2>Paused</h2><p>Press <kbd>P</kbd> or tap Pause again to uncoil.</p></div>`;
        } else {
            ov.hidden = true;
        }
    }

    function hideOverlay() {
        const ov = document.getElementById("danger-noodle-overlay");
        if (ov) {
            ov.hidden = true;
            ov.innerHTML = "";
        }
    }

    function endGame() {
        state.gameOver = true;
        state.paused = false;
        const previousHigh = getHighScore() || 0;
        state.previousHigh = previousHigh;
        if (state.score > previousHigh && typeof onHighScore === "function" && !state._highSaved) {
            state._highSaved = true;
            onHighScore(state.score);
        }
        showOverlay();
    }

    function showOverlay() {
        const ov = document.getElementById("danger-noodle-overlay");
        if (!ov || !state) return;
        const previousHigh = state.previousHigh || 0;
        const isNewHigh = state.score > previousHigh;
        ov.hidden = false;
        ov.innerHTML = `
            <div class="overlay-card ${isNewHigh ? "is-new-high" : ""}">
                <h2>${isNewHigh ? "🏆 NEW HIGH SCORE!" : "Danger noodle down!"}</h2>
                <p>Score: <strong>${state.score}</strong> · Length: <strong>${state.snake.length}</strong></p>
                <p>Fruit eaten: <strong>${state.fruitCount}</strong></p>
                <p class="tetris-prev-high">Previous best: ${previousHigh}</p>
                <div class="overlay-actions">
                    <button type="button" id="danger-noodle-again" class="primary-btn pulse-btn">🔁 Play again</button>
                    <a class="ghost-btn" href="#/break">← Switch game</a>
                </div>
            </div>
        `;
        const again = document.getElementById("danger-noodle-again");
        if (again) {
            again.addEventListener("click", function () {
                beginGame();
            });
        }
        updateHud();
    }

    function draw(now) {
        if (!ctx || !state) return;
        ctx.clearRect(0, 0, W, H);

        const bg = ctx.createLinearGradient(0, 0, 0, H);
        bg.addColorStop(0, "#09131d");
        bg.addColorStop(1, "#122433");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 1;
        for (let x = 0; x <= COLS; x++) {
            ctx.beginPath();
            ctx.moveTo(x * CELL, 0);
            ctx.lineTo(x * CELL, H);
            ctx.stroke();
        }
        for (let y = 0; y <= ROWS; y++) {
            ctx.beginPath();
            ctx.moveTo(0, y * CELL);
            ctx.lineTo(W, y * CELL);
            ctx.stroke();
        }

        state.burstFruits.forEach(fruit => drawFruit(fruit, now));
        state.fruits.forEach(fruit => drawFruit(fruit, now));
        drawSnake();
    }

    function drawSnake() {
        for (let i = state.snake.length - 1; i >= 1; i--) {
            const seg = state.snake[i];
            const inset = i === state.snake.length - 1 ? 7 : 4;
            const body = i % 2 === 0 ? "#70c44f" : "#62b142";
            const accent = "#356b24";
            drawRoundedCell(seg.x, seg.y, inset, body, accent);
            if (i % 3 === 0) drawSegmentStripe(seg.x, seg.y, inset, accent);
        }

        const head = state.snake[0];
        drawRoundedCell(head.x, head.y, 3, "#87d95f", "#2f6a1d");
        if (window.drawCanvasCat) {
            window.drawCanvasCat(
                ctx,
                head.x * CELL + CELL / 2,
                head.y * CELL + CELL / 2 + 1,
                CELL * 0.94,
                { primary: "#87d95f", accent: "#2f6a1d", eyeColor: "#ffd166", stripes: true, ears: "big" }
            );
        } else {
            drawFallbackHead(head.x, head.y);
        }
    }

    function drawRoundedCell(x, y, inset, fill, stroke) {
        const left = x * CELL + inset;
        const top = y * CELL + inset;
        const size = CELL - inset * 2;
        const radius = Math.max(6, size * 0.28);
        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 2;
        roundRect(left, top, size, size, radius);
        ctx.fill();
        ctx.stroke();
    }

    function drawSegmentStripe(x, y, inset, color) {
        const left = x * CELL + inset + 4;
        const top = y * CELL + inset + 6;
        const size = CELL - inset * 2 - 8;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(left, top + size * 0.2);
        ctx.lineTo(left + size, top + size * 0.2);
        ctx.moveTo(left, top + size * 0.55);
        ctx.lineTo(left + size, top + size * 0.55);
        ctx.stroke();
    }

    function drawFallbackHead(x, y) {
        const cx = x * CELL + CELL / 2;
        const cy = y * CELL + CELL / 2;
        ctx.fillStyle = "#1d2a15";
        ctx.beginPath();
        ctx.arc(cx - 5, cy - 2, 2.5, 0, Math.PI * 2);
        ctx.arc(cx + 5, cy - 2, 2.5, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawFruit(fruit, now) {
        const meta = FRUIT_META[fruit.type];
        if (!meta) return;
        const cx = fruit.x * CELL + CELL / 2;
        const cy = fruit.y * CELL + CELL / 2;
        const isBurst = fruit.type === "burst";
        const radius = isBurst ? CELL * 0.18 : CELL * 0.28;
        const ttl = fruit.expiresAt ? fruit.expiresAt - now : 99999;
        ctx.save();
        if (fruit.expiresAt && ttl < 4000) {
            ctx.globalAlpha = 0.42 + (Math.sin(now / 90) + 1) * 0.29;
        }

        if (isBurst) {
            drawBurstFruit(cx, cy, radius, meta);
            ctx.restore();
            return;
        }

        ctx.fillStyle = meta.body;
        ctx.beginPath();
        ctx.arc(cx, cy + 1, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = meta.accent;
        ctx.beginPath();
        ctx.arc(cx - radius * 0.35, cy - radius * 0.2, radius * 0.38, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#6c4525";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - radius - 1);
        ctx.lineTo(cx + 2, cy - radius - 8);
        ctx.stroke();

        ctx.fillStyle = meta.leaf;
        ctx.beginPath();
        ctx.ellipse(cx + radius * 0.35, cy - radius - 4, radius * 0.45, radius * 0.2, -0.6, 0, Math.PI * 2);
        ctx.fill();

        if (fruit.type === "super") {
            drawSparkle(cx, cy, radius * 1.2, "#fff6b0");
        } else if (fruit.type === "turbo") {
            drawBolt(cx, cy, radius * 1.1, "#fff8eb");
        } else if (fruit.type === "poison") {
            drawCross(cx, cy, radius * 0.95, "#fff8ff");
        } else if (fruit.type === "sloMo") {
            drawClock(cx, cy, radius * 0.95, "#f2ffff");
        } else if (fruit.type === "crazy") {
            drawStarburst(cx, cy, radius * 1.35, "#d6efff");
        }
        ctx.restore();
    }

    function drawBurstFruit(cx, cy, radius, meta) {
        ctx.fillStyle = meta.body;
        ctx.beginPath();
        ctx.arc(cx - radius * 0.6, cy + radius * 0.2, radius, 0, Math.PI * 2);
        ctx.arc(cx + radius * 0.6, cy + radius * 0.2, radius, 0, Math.PI * 2);
        ctx.arc(cx, cy - radius * 0.5, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = meta.leaf;
        ctx.beginPath();
        ctx.ellipse(cx + radius * 0.8, cy - radius * 1.2, radius * 0.8, radius * 0.3, -0.3, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawSparkle(cx, cy, size, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.5, cy);
        ctx.lineTo(cx + size * 0.5, cy);
        ctx.moveTo(cx, cy - size * 0.5);
        ctx.lineTo(cx, cy + size * 0.5);
        ctx.stroke();
    }

    function drawBolt(cx, cy, size, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.18, cy - size * 0.5);
        ctx.lineTo(cx + size * 0.08, cy - size * 0.1);
        ctx.lineTo(cx - size * 0.04, cy - size * 0.1);
        ctx.lineTo(cx + size * 0.18, cy + size * 0.5);
        ctx.lineTo(cx - size * 0.08, cy + size * 0.1);
        ctx.lineTo(cx + size * 0.04, cy + size * 0.1);
        ctx.closePath();
        ctx.fill();
    }

    function drawCross(cx, cy, size, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.5, cy - size * 0.5);
        ctx.lineTo(cx + size * 0.5, cy + size * 0.5);
        ctx.moveTo(cx + size * 0.5, cy - size * 0.5);
        ctx.lineTo(cx - size * 0.5, cy + size * 0.5);
        ctx.stroke();
    }

    function drawClock(cx, cy, size, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.55, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx, cy - size * 0.32);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + size * 0.24, cy);
        ctx.stroke();
    }

    function drawStarburst(cx, cy, size, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 * i) / 8;
            const inner = size * 0.55;
            ctx.moveTo(cx + Math.cos(angle) * inner, cy + Math.sin(angle) * inner);
            ctx.lineTo(cx + Math.cos(angle) * size, cy + Math.sin(angle) * size);
        }
        ctx.stroke();
    }

    function roundRect(x, y, w, h, r) {
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

    function randBetween(min, max) {
        return min + Math.random() * (max - min);
    }

    window.DangerNoodle = { start, stop };
})();
