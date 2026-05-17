// Cat-man — Pac-Man-inspired maze chase with cats.
// Shared 5-minute break-session timer (window.BreakSession).
// Exposes window.CatMan with start(rootEl, opts) and stop().

(function () {
    "use strict";

    const MAZE_TEMPLATE = [
        "#################",
        "#o....#...#....o#",
        "#.##.#.#.#.#.##.#",
        "#...............#",
        "#.##.#.###.#.##.#",
        "#....#.....#....#",
        "###.#.##.##.#.###",
        "#...#..A.B..#...#",
        "#.###.#.F.#.#.###",
        "#...#..C.D..#...#",
        "#.......P.......#",
        "#.##.#.###.#.##.#",
        "#....#.....#....#",
        "#.######.#.######",
        "#........#......#",
        "#o...#.....#...o#",
        "#################"
    ];

    const TILE = 28;
    const PLAYER_LIVES = 3;
    const BASE_PLAYER_STEP_MS = 152;
    const BASE_GHOST_STEP_MS = 188;
    const FRIGHTENED_GHOST_STEP_MS = 228;
    const EATEN_RELEASE_MS = 1100;
    const POWER_PELLET_MS = 7000;
    const BONUS_FRUIT_MS = 9000;
    const BONUS_FRUIT_THRESHOLDS = [0.72, 0.34];
    const GHOST_WAKE_DELAYS_MS = [1200, 2600, 4200, 5800];

    const DIRS = {
        left: { row: 0, col: -1, angle: Math.PI },
        up: { row: -1, col: 0, angle: -Math.PI / 2 },
        right: { row: 0, col: 1, angle: 0 },
        down: { row: 1, col: 0, angle: Math.PI / 2 }
    };
    const DIR_ORDER = ["left", "up", "right", "down"];
    const OPPOSITE = { left: "right", right: "left", up: "down", down: "up" };

    const GHOST_META = [
        {
            id: "mittens",
            label: "Mittens",
            startChar: "A",
            startDir: "left",
            primary: "#ff7f51",
            accent: "#ce4257",
            eyeColor: "#fff5ec",
            ears: "big",
            scatter: { row: 1, col: 1 },
            ai: "shadow"
        },
        {
            id: "pepper",
            label: "Pepper",
            startChar: "B",
            startDir: "right",
            primary: "#3da9fc",
            accent: "#1d4ed8",
            eyeColor: "#fff",
            ears: "normal",
            scatter: { row: 1, col: 15 },
            ai: "ambush"
        },
        {
            id: "marbles",
            label: "Marbles",
            startChar: "C",
            startDir: "left",
            primary: "#9b5de5",
            accent: "#5a189a",
            eyeColor: "#fff",
            ears: "big",
            scatter: { row: 15, col: 1 },
            ai: "sneaky"
        },
        {
            id: "socks",
            label: "Socks",
            startChar: "D",
            startDir: "right",
            primary: "#5fcfbf",
            accent: "#1d7a6f",
            eyeColor: "#fff",
            ears: "normal",
            scatter: { row: 15, col: 15 },
            ai: "scout"
        }
    ];

    const BONUS_FRUIT_META = [
        { name: "Yarn ball", points: 100, color: "#ff9f1c", accent: "#ffe0b2" },
        { name: "Tuna tin", points: 200, color: "#ffd166", accent: "#fff4bf" },
        { name: "Catnip leaf", points: 300, color: "#70c36d", accent: "#d6f5cd" },
        { name: "Salmon snack", points: 500, color: "#ff7f51", accent: "#ffd7cf" }
    ];

    const SESSION = (typeof window !== "undefined" && window.BreakSession) || {
        BREAK_MS: 5 * 60 * 1000,
        start() {},
        elapsed: function () { return 0; }
    };

    const BASE_LAYOUT = parseMazeTemplate(MAZE_TEMPLATE);
    const ROWS = BASE_LAYOUT.rows;
    const COLS = BASE_LAYOUT.cols;
    const W = COLS * TILE;
    const H = ROWS * TILE;

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
        touchCleanups.forEach(function (fn) { fn(); });
        touchCleanups = [];
    }

    function beginGame() {
        if (timerInterval) clearInterval(timerInterval);
        const now = performance.now();
        state = {
            score: 0,
            level: 1,
            lives: PLAYER_LIVES,
            paused: false,
            gameOver: false,
            frightenedUntil: 0,
            frightenedChain: 0,
            fruit: null,
            fruitStage: 0,
            playerAccumulator: 0,
            ghostAccumulator: 0,
            lastFrameAt: now,
            popups: [],
            previousHigh: getHighScore() || 0,
            _highSaved: false
        };
        loadLevel();
        primeRound("Ready to pounce?", "Press an arrow key or tap a button to launch Cat-man.");
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

    function loadLevel() {
        state.pellets = cloneSet(BASE_LAYOUT.pellets);
        state.powerPellets = cloneSet(BASE_LAYOUT.powerPellets);
        state.totalTreats = state.pellets.size + state.powerPellets.size;
        state.fruitThresholds = BONUS_FRUIT_THRESHOLDS.map(function (ratio) {
            return Math.max(1, Math.floor(state.totalTreats * ratio));
        });
        state.fruit = null;
        state.fruitStage = 0;
        state.frightenedUntil = 0;
        state.frightenedChain = 0;
        state.playerAccumulator = 0;
        state.ghostAccumulator = 0;
        resetEntities();
    }

    function primeRound(title, message) {
        state.awaitingLaunch = true;
        state.playerAccumulator = 0;
        state.ghostAccumulator = 0;
        state.lastFrameAt = performance.now();
        showInfoOverlay(title, message);
    }

    function launchRound() {
        if (!state || !state.awaitingLaunch) return;
        const now = performance.now();
        state.awaitingLaunch = false;
        state.playerAccumulator = 0;
        state.ghostAccumulator = 0;
        state.lastFrameAt = now;
        state.ghosts.forEach(function (ghost) {
            ghost.wakeAt = now + ghost.wakeDelayMs;
        });
        hideOverlay();
    }

    function resetEntities() {
        state.player = {
            row: BASE_LAYOUT.playerStart.row,
            col: BASE_LAYOUT.playerStart.col,
            dir: "left",
            pendingDir: "left",
            mouthPhase: 0
        };
        state.ghosts = GHOST_META.map(function (meta, i) {
            const start = BASE_LAYOUT.ghostStarts[meta.startChar];
            return {
                id: meta.id,
                label: meta.label,
                row: start.row,
                col: start.col,
                startRow: start.row,
                startCol: start.col,
                dir: meta.startDir,
                startDir: meta.startDir,
                primary: meta.primary,
                accent: meta.accent,
                eyeColor: meta.eyeColor,
                ears: meta.ears,
                scatter: meta.scatter,
                ai: meta.ai,
                eaten: false,
                respawnAt: 0,
                wakeAt: 0,
                wakeDelayMs: GHOST_WAKE_DELAYS_MS[Math.min(i, GHOST_WAKE_DELAYS_MS.length - 1)]
            };
        });
    }

    function renderShell() {
        rootEl.innerHTML = `
            <a class="back-link" href="#/break">← Switch game</a>
            <header class="break-game-header">
                <div>
                    <h1>🐾 Cat-man</h1>
                    <p class="break-game-blurb">Chomp treats, out-paw rival cats, and pounce on bonus snacks in a maze full of cattitude.</p>
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="catman-timer-label">Time left</div>
                    <div class="tetris-timer" id="catman-timer">5:00</div>
                </div>
            </header>
            <div class="break-game-stats">
                <div class="tetris-stat tetris-highscore"><span>🏆 High</span><strong id="catman-high">${getHighScore() || 0}</strong></div>
                <div class="tetris-stat"><span>Score</span><strong id="catman-score">0</strong></div>
                <div class="tetris-stat"><span>Level</span><strong id="catman-level">1</strong></div>
                <div class="tetris-stat"><span>Lives</span><strong id="catman-lives">${PLAYER_LIVES}</strong></div>
            </div>
            <div class="cat-man-layout">
                <div class="break-canvas-wrap">
                    <canvas id="catman-canvas" width="${W}" height="${H}" tabindex="0" aria-label="Cat-man game board"></canvas>
                    <div class="break-overlay" id="catman-overlay" hidden></div>
                </div>
                <aside class="cat-man-panel">
                    <h3>Treat tray</h3>
                    <p class="cat-man-panel-copy">Nibble every treat, grab power pellets to fur-righten rival cats, and snag bonus snacks before they vanish.</p>
                    <div class="cat-man-status" id="catman-status"></div>
                    <div class="cat-man-legend">
                        ${legendItem("treat", "Treat", "10 points")}
                        ${legendItem("power", "Power treat", "Fur-rightens rivals for a short burst")}
                        ${legendItem("fruit", "Bonus snack", "Big score for a quick pounce")}
                        ${legendItem("fright", "Fur-rightened cats", "Blue cats can be bonked for combo points")}
                    </div>
                </aside>
            </div>
            <div class="danger-noodle-touch cat-man-touch">
                <button type="button" class="danger-noodle-touch-spacer" disabled aria-hidden="true"></button>
                <button type="button" data-dir="up">↑</button>
                <button type="button" data-act="pause">⏯ Pause</button>
                <button type="button" data-dir="left">←</button>
                <button type="button" data-dir="down">↓</button>
                <button type="button" data-dir="right">→</button>
            </div>
            <p class="break-help">Arrow keys or touch buttons to steer. Queue turns early at corners, tap <kbd>P</kbd> to pause, and dive on bonus snacks before they disappear.</p>
        `;
        canvas = document.getElementById("catman-canvas");
        ctx = canvas.getContext("2d");
    }

    function legendItem(type, label, description) {
        return `
            <div class="cat-man-legend-item is-${type}">
                <span class="cat-man-swatch"></span>
                <div>
                    <strong>${label}</strong>
                    <span>${description}</span>
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
            if (key === "arrowup" || key === "w") {
                queueDirection("up");
                e.preventDefault();
            } else if (key === "arrowdown" || key === "s") {
                queueDirection("down");
                e.preventDefault();
            } else if (key === "arrowleft" || key === "a") {
                queueDirection("left");
                e.preventDefault();
            } else if (key === "arrowright" || key === "d") {
                queueDirection("right");
                e.preventDefault();
            }
        };
        window.addEventListener("keydown", keyHandler);

        cleanupTouch();
        rootEl.querySelectorAll(".cat-man-touch [data-dir], .cat-man-touch [data-act]").forEach(function (button) {
            const handler = function (e) {
                e.preventDefault();
                if (button.dataset.dir) queueDirection(button.dataset.dir);
                if (button.dataset.act === "pause") togglePause();
            };
            button.addEventListener("pointerdown", handler);
            touchCleanups.push(function () { button.removeEventListener("pointerdown", handler); });
        });
    }

    function queueDirection(dir) {
        if (!state || state.gameOver) return;
        state.player.pendingDir = dir;
        if (state.awaitingLaunch) launchRound();
    }

    function loop(now) {
        if (!state) return;
        const dt = Math.min(80, Math.max(0, now - state.lastFrameAt));
        state.lastFrameAt = now;

        if (!state.paused && !state.gameOver) {
            if (state.fruit && now >= state.fruit.expiresAt) state.fruit = null;

            if (!state.awaitingLaunch) {
                state.playerAccumulator += dt;
                while (state.playerAccumulator >= playerStepMs()) {
                    state.playerAccumulator -= playerStepMs();
                    stepPlayer(now);
                    if (state.gameOver) break;
                }

                state.ghostAccumulator += dt;
                while (!state.gameOver && state.ghostAccumulator >= ghostStepMs(now)) {
                    state.ghostAccumulator -= ghostStepMs(now);
                    stepGhosts(now);
                }
            }

            updatePopups(dt);
            updateStatus(now);
        }

        draw(now);
        rafId = requestAnimationFrame(loop);
    }

    function playerStepMs() {
        return Math.max(88, BASE_PLAYER_STEP_MS - (state.level - 1) * 6);
    }

    function ghostStepMs(now) {
        if (isFrightened(now)) return Math.max(116, FRIGHTENED_GHOST_STEP_MS - (state.level - 1) * 4);
        return Math.max(96, BASE_GHOST_STEP_MS - (state.level - 1) * 4);
    }

    function isFrightened(now) {
        return !!state.frightenedUntil && now < state.frightenedUntil;
    }

    function stepPlayer(now) {
        const player = state.player;
        if (player.pendingDir && canMove(player.row, player.col, player.pendingDir)) {
            player.dir = player.pendingDir;
        }
        if (!canMove(player.row, player.col, player.dir)) return;
        moveEntity(player, player.dir);
        player.mouthPhase = (player.mouthPhase + 1) % 2;
        collectCell(player.row, player.col, now);
        handleCollisions(now);
    }

    function stepGhosts(now) {
        for (let i = 0; i < state.ghosts.length; i++) {
            const ghost = state.ghosts[i];
            if (ghost.respawnAt && now < ghost.respawnAt) continue;
            if (ghost.respawnAt && now >= ghost.respawnAt) {
                ghost.eaten = false;
                ghost.respawnAt = 0;
            }
            if (ghost.wakeAt && now < ghost.wakeAt) continue;
            if (ghost.wakeAt && now >= ghost.wakeAt) ghost.wakeAt = 0;
            const nextDir = chooseGhostDirection(ghost, now);
            if (nextDir) ghost.dir = nextDir;
            if (canMove(ghost.row, ghost.col, ghost.dir)) {
                moveEntity(ghost, ghost.dir);
            }
        }
        handleCollisions(now);
    }

    function chooseGhostDirection(ghost, now) {
        const choices = availableDirections(ghost.row, ghost.col, ghost.dir);
        if (!choices.length) return OPPOSITE[ghost.dir] || "left";
        if (ghost.eaten) return bestDirectionToward(choices, ghost, { row: ghost.startRow, col: ghost.startCol });
        if (isFrightened(now)) return choices[Math.floor(Math.random() * choices.length)];
        return bestDirectionToward(choices, ghost, ghostTarget(ghost));
    }

    function ghostTarget(ghost) {
        const player = state.player;
        if (ghost.ai === "shadow") return { row: player.row, col: player.col };
        if (ghost.ai === "ambush") return projectTarget(player, player.dir, 3);
        if (ghost.ai === "sneaky") {
            return distanceBetween(ghost, player) < 4 ? ghost.scatter : projectTarget(player, player.dir, 2);
        }
        if (ghost.ai === "scout") {
            if (state.fruit) return { row: state.fruit.row, col: state.fruit.col };
            return distanceBetween(ghost, player) > 6 ? ghost.scatter : { row: player.row, col: player.col };
        }
        return { row: player.row, col: player.col };
    }

    function projectTarget(entity, dir, distance) {
        const vector = DIRS[dir] || DIRS.left;
        return {
            row: clamp(entity.row + vector.row * distance, 0, ROWS - 1),
            col: clamp(entity.col + vector.col * distance, 0, COLS - 1)
        };
    }

    function bestDirectionToward(directions, entity, target) {
        let best = directions[0];
        let bestScore = Infinity;
        for (let i = 0; i < directions.length; i++) {
            const dir = directions[i];
            const next = nextCell(entity.row, entity.col, dir);
            const score = Math.abs(next.row - target.row) + Math.abs(next.col - target.col);
            if (score < bestScore) {
                bestScore = score;
                best = dir;
            }
        }
        return best;
    }

    function availableDirections(row, col, currentDir) {
        const dirs = DIR_ORDER.filter(function (dir) { return canMove(row, col, dir); });
        if (dirs.length <= 1 || !currentDir) return dirs;
        const nonReverse = dirs.filter(function (dir) { return dir !== OPPOSITE[currentDir]; });
        return nonReverse.length ? nonReverse : dirs;
    }

    function canMove(row, col, dir) {
        const next = nextCell(row, col, dir);
        return isWalkable(next.row, next.col);
    }

    function nextCell(row, col, dir) {
        const vector = DIRS[dir] || DIRS.left;
        return { row: row + vector.row, col: col + vector.col };
    }

    function moveEntity(entity, dir) {
        const next = nextCell(entity.row, entity.col, dir);
        entity.row = next.row;
        entity.col = next.col;
    }

    function isWalkable(row, col) {
        return row >= 0 && row < ROWS && col >= 0 && col < COLS && !BASE_LAYOUT.walls[row][col];
    }

    function collectCell(row, col, now) {
        const key = cellKey(row, col);
        let changed = false;
        if (state.pellets.delete(key)) {
            state.score += 10;
            changed = true;
        }
        if (state.powerPellets.delete(key)) {
            state.score += 60;
            state.frightenedUntil = now + POWER_PELLET_MS;
            state.frightenedChain = 0;
            addPopup(row, col, "Fur-rightened!", "#bfe7ff");
            changed = true;
        }
        if (state.fruit && state.fruit.row === row && state.fruit.col === col) {
            state.score += state.fruit.points;
            addPopup(row, col, "+" + state.fruit.points, state.fruit.color);
            state.fruit = null;
            changed = true;
        }
        if (changed) updateHud();
        maybeSpawnFruit(now);
        if (state.pellets.size === 0 && state.powerPellets.size === 0) {
            state.level++;
            loadLevel();
            primeRound("Level " + state.level, "Press a direction to prowl through the next maze.");
            updateHud();
        }
    }

    function maybeSpawnFruit(now) {
        if (state.fruit || state.fruitStage >= state.fruitThresholds.length) return;
        const remaining = state.pellets.size + state.powerPellets.size;
        if (remaining <= state.fruitThresholds[state.fruitStage]) {
            const fruit = fruitMetaForLevel(state.level);
            state.fruit = {
                row: BASE_LAYOUT.fruitSpawn.row,
                col: BASE_LAYOUT.fruitSpawn.col,
                name: fruit.name,
                points: fruit.points,
                color: fruit.color,
                accent: fruit.accent,
                expiresAt: now + BONUS_FRUIT_MS
            };
            state.fruitStage++;
            addPopup(state.fruit.row, state.fruit.col, fruit.name + "!", fruit.color);
        }
    }

    function fruitMetaForLevel(level) {
        return BONUS_FRUIT_META[Math.min(BONUS_FRUIT_META.length - 1, Math.max(0, level - 1))];
    }

    function handleCollisions(now) {
        for (let i = 0; i < state.ghosts.length; i++) {
            const ghost = state.ghosts[i];
            if (ghost.row !== state.player.row || ghost.col !== state.player.col) continue;
            if (ghost.eaten) continue;
            if (isFrightened(now)) {
                state.frightenedChain++;
                const points = 200 * Math.pow(2, Math.min(3, state.frightenedChain - 1));
                state.score += points;
                updateHud();
                addPopup(ghost.row, ghost.col, "+" + points, "#d6fffb");
                ghost.row = ghost.startRow;
                ghost.col = ghost.startCol;
                ghost.dir = ghost.startDir;
                ghost.eaten = true;
                ghost.respawnAt = now + EATEN_RELEASE_MS;
                ghost.wakeAt = 0;
            } else {
                loseLife();
                return;
            }
        }
    }

    function loseLife() {
        state.lives--;
        updateHud();
        if (state.lives <= 0) {
            endGame();
            return;
        }
        state.fruit = null;
        state.frightenedUntil = 0;
        state.frightenedChain = 0;
        state.playerAccumulator = 0;
        state.ghostAccumulator = 0;
        resetEntities();
        primeRound("Still in the hunt", "Press an arrow key or tap a button to use your next life.");
    }

    function updatePopups(dt) {
        for (let i = 0; i < state.popups.length; i++) {
            state.popups[i].age += dt;
        }
        state.popups = state.popups.filter(function (popup) { return popup.age < popup.ttl; });
    }

    function addPopup(row, col, text, color) {
        state.popups.push({
            x: col * TILE + TILE / 2,
            y: row * TILE + TILE / 2,
            text: text,
            color: color,
            age: 0,
            ttl: 900
        });
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
        const overlay = document.getElementById("catman-overlay");
        if (!overlay) return;
        const previousHigh = getHighScore() || 0;
        const isNewHigh = state.score > previousHigh;
        overlay.hidden = false;
        overlay.innerHTML = `
            <div class="overlay-card ${isNewHigh ? "is-new-high" : ""}">
                <h2>${isNewHigh ? "🏆 NEW HIGH SCORE!" : "Game over!"}</h2>
                <p>Score: <strong>${state.score}</strong> · Level <strong>${state.level}</strong></p>
                <p class="tetris-prev-high">Previous best: ${previousHigh}</p>
                <div class="overlay-actions">
                    <button type="button" id="catman-again" class="primary-btn pulse-btn">🔁 Play again</button>
                    <a class="ghost-btn" href="#/break">← Switch game</a>
                </div>
            </div>
        `;
        const again = document.getElementById("catman-again");
        if (again) {
            again.addEventListener("click", function () {
                overlay.hidden = true;
                beginGame();
            });
        }
        const high = document.getElementById("catman-high");
        if (high) high.textContent = Math.max(previousHigh, state.score);
    }

    function hideOverlay() {
        const overlay = document.getElementById("catman-overlay");
        if (!overlay) return;
        overlay.hidden = true;
        overlay.innerHTML = "";
    }

    function togglePause() {
        if (!state || state.gameOver) return;
        state.paused = !state.paused;
        const overlay = document.getElementById("catman-overlay");
        if (!overlay) return;
        if (state.paused) {
            overlay.hidden = false;
            overlay.innerHTML = `<div class="overlay-card"><h2>Paused</h2><p>Press <kbd>P</kbd> to resume the pounce.</p></div>`;
        } else {
            hideOverlay();
        }
    }

    function showInfoOverlay(title, message) {
        const overlay = document.getElementById("catman-overlay");
        if (!overlay) return;
        overlay.hidden = false;
        overlay.innerHTML = `<div class="overlay-card"><h2>${title}</h2><p>${message}</p></div>`;
    }

    function updateHud() {
        const high = document.getElementById("catman-high");
        const score = document.getElementById("catman-score");
        const level = document.getElementById("catman-level");
        const lives = document.getElementById("catman-lives");
        if (high) high.textContent = Math.max(getHighScore() || 0, state.score);
        if (score) score.textContent = state.score;
        if (level) level.textContent = state.level;
        if (lives) lives.textContent = state.lives;
    }

    function updateStatus(now) {
        const host = document.getElementById("catman-status");
        if (!host || !state) return;
        const chips = [];
        chips.push(chipHtml("cat-man-chip is-neutral", remainingTreats() + " treats left"));
        if (state.awaitingLaunch) {
            chips.push(chipHtml("cat-man-chip is-level", "Pick a direction to start"));
        }
        if (isFrightened(now)) {
            chips.push(chipHtml("cat-man-chip is-fright", "Fur-rightened " + formatSecondsLeft(state.frightenedUntil, now)));
        }
        if (state.fruit) {
            chips.push(chipHtml("cat-man-chip is-fruit", state.fruit.name + " " + formatSecondsLeft(state.fruit.expiresAt, now)));
        }
        chips.push(chipHtml("cat-man-chip is-level", "Pounce pace " + (Math.round(1000 / playerStepMs())) + "/s"));
        host.innerHTML = chips.join("");
    }

    function remainingTreats() {
        return state.pellets.size + state.powerPellets.size;
    }

    function chipHtml(className, text) {
        return `<span class="${className}">${text}</span>`;
    }

    function formatSecondsLeft(endsAt, now) {
        return Math.max(0, Math.ceil((endsAt - now) / 1000)) + "s";
    }

    function renderTimer() {
        if (!state) return;
        const remaining = SESSION.BREAK_MS - SESSION.elapsed();
        const elem = document.getElementById("catman-timer");
        const label = document.getElementById("catman-timer-label");
        if (!elem) return;
        if (remaining > 0) {
            const mins = Math.floor(remaining / 60000);
            const secs = Math.floor((remaining % 60000) / 1000);
            elem.textContent = mins + ":" + String(secs).padStart(2, "0");
            elem.classList.remove("overtime");
            if (label) label.textContent = "Time left";
        } else {
            const overtime = -remaining;
            const mins = Math.floor(overtime / 60000);
            const secs = Math.floor((overtime % 60000) / 1000);
            elem.textContent = "+" + mins + ":" + String(secs).padStart(2, "0");
            elem.classList.add("overtime");
            if (label) label.textContent = "Overtime 🔥";
        }
    }

    function draw(now) {
        if (!ctx || !state) return;

        const bg = ctx.createLinearGradient(0, 0, 0, H);
        bg.addColorStop(0, "#100b1e");
        bg.addColorStop(1, "#1f1636");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        ctx.fillStyle = "rgba(255,255,255,0.03)";
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (!BASE_LAYOUT.walls[row][col]) {
                    ctx.fillRect(col * TILE + 3, row * TILE + 3, TILE - 6, TILE - 6);
                }
            }
        }

        drawWalls();
        drawTreats(now);
        if (state.fruit) drawFruit(state.fruit);
        drawPlayer(now);
        drawGhosts(now);
        drawPopups();
    }

    function drawWalls() {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (!BASE_LAYOUT.walls[row][col]) continue;
                const x = col * TILE;
                const y = row * TILE;
                ctx.fillStyle = "#234372";
                roundRect(ctx, x + 1, y + 1, TILE - 2, TILE - 2, 8);
                ctx.fill();
                ctx.fillStyle = "rgba(191, 231, 255, 0.25)";
                roundRect(ctx, x + 4, y + 4, TILE - 8, 5, 3);
                ctx.fill();
            }
        }
    }

    function drawTreats(now) {
        state.pellets.forEach(function (key) {
            const cell = keyToCell(key);
            ctx.fillStyle = "#f8f2c6";
            ctx.beginPath();
            ctx.arc(cell.col * TILE + TILE / 2, cell.row * TILE + TILE / 2, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        const pulse = 0.75 + Math.sin(now / 160) * 0.25;
        state.powerPellets.forEach(function (key) {
            const cell = keyToCell(key);
            ctx.fillStyle = "rgba(255, 209, 102, 0.22)";
            ctx.beginPath();
            ctx.arc(cell.col * TILE + TILE / 2, cell.row * TILE + TILE / 2, 9 * pulse, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#ffd166";
            ctx.beginPath();
            ctx.arc(cell.col * TILE + TILE / 2, cell.row * TILE + TILE / 2, 6 * pulse, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function drawPlayer(now) {
        const player = state.player;
        const x = player.col * TILE + TILE / 2;
        const y = player.row * TILE + TILE / 2;
        const mouthOpen = player.mouthPhase ? 0.34 : 0.12;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((DIRS[player.dir] || DIRS.left).angle);
        window.drawCanvasCat(ctx, 0, 0, TILE * 0.95, {
            primary: "#ffd166",
            accent: "#f4a261",
            eyeColor: "#1a1a1d",
            ears: "big",
            stripes: true
        });
        ctx.fillStyle = "#140d24";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, TILE * 0.42, -mouthOpen, mouthOpen, false);
        ctx.closePath();
        ctx.fill();
        if (isFrightened(now)) {
            ctx.strokeStyle = "rgba(255, 209, 102, 0.45)";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(0, 0, TILE * 0.46, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.restore();
    }

    function drawGhosts(now) {
        for (let i = 0; i < state.ghosts.length; i++) {
            const ghost = state.ghosts[i];
            const x = ghost.col * TILE + TILE / 2;
            const y = ghost.row * TILE + TILE / 2;
            const frightened = isFrightened(now) && !ghost.eaten;
            const opts = frightened
                ? { primary: "#4c6ef5", accent: "#9bbcff", eyeColor: "#fff", ears: "normal" }
                : ghost.eaten
                    ? { primary: "#d3d9e6", accent: "#95a3bf", eyeColor: "#1d3557", ears: "normal" }
                    : { primary: ghost.primary, accent: ghost.accent, eyeColor: ghost.eyeColor, ears: ghost.ears };
            window.drawCanvasCat(ctx, x, y, TILE * 0.9, opts);
            if (ghost.eaten) {
                ctx.strokeStyle = "#7f8da8";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(x, y, TILE * 0.36, 0, Math.PI * 2);
                ctx.stroke();
            }
        }
    }

    function drawFruit(fruit) {
        const x = fruit.col * TILE + TILE / 2;
        const y = fruit.row * TILE + TILE / 2;
        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = fruit.color;
        ctx.beginPath();
        ctx.ellipse(-2, 0, 9, 7, 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(6, 0, 7, 6, -0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = fruit.accent;
        ctx.beginPath();
        ctx.arc(-3, -1, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#5f9d63";
        ctx.beginPath();
        ctx.moveTo(-1, -8);
        ctx.lineTo(3, -14);
        ctx.lineTo(6, -7);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function drawPopups() {
        for (let i = 0; i < state.popups.length; i++) {
            const popup = state.popups[i];
            const t = popup.age / popup.ttl;
            ctx.save();
            ctx.globalAlpha = 1 - t;
            ctx.fillStyle = popup.color;
            ctx.font = "bold 14px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(popup.text, popup.x, popup.y - t * 18);
            ctx.restore();
        }
    }

    function distanceBetween(a, b) {
        return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
    }

    function cloneSet(source) {
        return new Set(Array.from(source));
    }

    function cellKey(row, col) {
        return row + "," + col;
    }

    function keyToCell(key) {
        const parts = key.split(",").map(Number);
        return { row: parts[0], col: parts[1] };
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function parseMazeTemplate(template) {
        const rows = template.length;
        const cols = template[0].length;
        const walls = [];
        const pellets = new Set();
        const powerPellets = new Set();
        const ghostStarts = {};
        let playerStart = null;
        let fruitSpawn = null;

        for (let row = 0; row < rows; row++) {
            const line = template[row];
            if (line.length !== cols) throw new Error("Cat-man maze rows must be equal width.");
            walls[row] = [];
            for (let col = 0; col < cols; col++) {
                const ch = line.charAt(col);
                walls[row][col] = ch === "#";
                if (ch === ".") pellets.add(cellKey(row, col));
                else if (ch === "o") powerPellets.add(cellKey(row, col));
                else if (ch === "P") playerStart = { row: row, col: col };
                else if (ch === "F") fruitSpawn = { row: row, col: col };
                else if ("ABCD".indexOf(ch) !== -1) ghostStarts[ch] = { row: row, col: col };
            }
        }

        if (!playerStart) throw new Error("Cat-man maze needs a player start.");
        if (!fruitSpawn) throw new Error("Cat-man maze needs a fruit spawn.");

        return {
            rows: rows,
            cols: cols,
            walls: walls,
            pellets: pellets,
            powerPellets: powerPellets,
            ghostStarts: ghostStarts,
            playerStart: playerStart,
            fruitSpawn: fruitSpawn
        };
    }

    function roundRect(ctx2, x, y, w, h, r) {
        const rr = Math.min(r, w / 2, h / 2);
        ctx2.beginPath();
        ctx2.moveTo(x + rr, y);
        ctx2.arcTo(x + w, y, x + w, y + h, rr);
        ctx2.arcTo(x + w, y + h, x, y + h, rr);
        ctx2.arcTo(x, y + h, x, y, rr);
        ctx2.arcTo(x, y, x + w, y, rr);
        ctx2.closePath();
    }

    window.CatMan = { start: start, stop: stop };
})();
