// MeowtorBike — Excitebike-inspired cat motocross racer.
// Shared 5-minute break-session timer (window.BreakSession).
// Exposes window.Meowterbike with start(rootEl, opts) and stop().

(function () {
    "use strict";

    const W = 900;
    const H = 520;
    const TRACK_X = 34;
    const TRACK_Y = 170;
    const TRACK_W = 832;
    const TRACK_H = 248;
    const LANES = 5;
    const LANE_H = TRACK_H / LANES;
    const TOTAL_RIDERS = 5;
    const LAPS_PER_TRACK = 5;
    const PLAYER_START_LANE = 2;
    const CPU_START_LANES = [0, 1, 3, 4];
    const TRACK_LENGTH_SCALE = 10;
    const TIGHT_BARRIER_LENGTH = 30 * TRACK_LENGTH_SCALE;
    const SPEED_SCALE = 37.5;
    const TRACK_TIME_SCALE = TRACK_LENGTH_SCALE / SPEED_SCALE;
    const COUNTDOWN_MS = 3000;
    const GO_MS = 600;
    const VIEW_DISTANCE = 3800;
    const PLAYER_VIEW_FRACTION = 0.16;
    const ROAD_NEAR_LEFT = { x: 80, y: 212 };
    const ROAD_NEAR_RIGHT = { x: 80, y: 468 };
    const ROAD_FAR_LEFT = { x: 828, y: 212 };
    const ROAD_FAR_RIGHT = { x: 828, y: 468 };
    const ROAD_SHOULDER_FRAC = 0.05;
    const PLAYER_SCREEN_X = 190;
    const PX_PER_UNIT = 0.78;
    const PLAYER_BASE_ACCEL = 28;
    const PLAYER_TURBO_ACCEL = 56;
    const PLAYER_DRAG = 18;
    const PLAYER_MAX_SPEED = 52;
    const PLAYER_TURBO_SPEED = 80;
    const CPU_BASE_ACCEL = 20;
    const CPU_TURBO_ACCEL = 36;
    const CPU_DRAG = 14;
    const CPU_MAX_SPEED = 50;
    const CPU_TURBO_SPEED = 58;
    const MAX_HEAT = 100;
    const HEAT_GAIN_PER_SEC = 34;
    const HEAT_COOL_PER_SEC = 16;
    const HEAT_STALL_MS = 2600;
    const COOL_ARROW_RESTORE = 58;
    const CRASH_MS = 1750;
    const PILEUP_INVINCIBLE_MS = 2000;
    const LANE_SHIFT_PER_SEC = 7.5;
    const AIR_PITCH_RATE = 2.6;
    const PITCH_SAFE_MIN = -0.5;
    const PITCH_SAFE_MAX = 1.22;
    const COLLISION_DISTANCE = 150;
    const HAZARD_LOOKAHEAD = 1800;
    const BONUS_TARGET_DELTA_MS = 8000;
    const TRACK_POINTS = [300, 450, 650, 900, 1200];
    const HUMP_POWER = 0.001;
    const BUMP_POWER = 0.30;
    const RAMP_POWER = 2.00;
    const SPEED_CLASSES = [
        { id: "50cc", label: "50cc", speedMultiplier: 1, topSpeedKmh: 200 },
        { id: "100cc", label: "100cc", speedMultiplier: 1.5, topSpeedKmh: 300 },
        { id: "150cc", label: "150cc", speedMultiplier: 2, topSpeedKmh: 400 }
    ];

    const RIDERS = [
        { id: "player", name: "Meowter", primary: "#f4a261", accent: "#e07a3a", eyeColor: "#2a8a3a", bike: "#ffd166", stripes: true, turboCapacity: 1.0 },
        { id: "miso", name: "Miso", primary: "#ff7f51", accent: "#ce4257", eyeColor: "#fff", bike: "#ffb4a2", turboBias: 0.52, laneBias: 0.08, turboCapacity: 0.9 },
        { id: "pepper", name: "Pepper", primary: "#3da9fc", accent: "#1d4ed8", eyeColor: "#fff", bike: "#bfe7ff", turboBias: 0.44, laneBias: 0.28, turboCapacity: 0.8 },
        { id: "mittens", name: "Mittens", primary: "#9b5de5", accent: "#5a189a", eyeColor: "#fff", bike: "#e1d0ff", turboBias: 0.36, laneBias: 0.72, turboCapacity: 0.7 },
        { id: "biscuit", name: "Biscuit", primary: "#5fcfbf", accent: "#1d7a6f", eyeColor: "#fff", bike: "#d6fffb", turboBias: 0.48, laneBias: 0.92, turboCapacity: 0.6 },
        { id: "pudding", name: "Pudding", primary: "#ffd166", accent: "#c8950b", eyeColor: "#1a1a1d", bike: "#fff4bf", turboBias: 0.4, laneBias: 0.5, turboCapacity: 0.5 }
    ];

    const TRACKS = buildTracks();

    const SESSION = (typeof window !== "undefined" && window.BreakSession) || {
        BREAK_MS: 5 * 60 * 1000,
        start() {},
        elapsed: function () { return 0; }
    };

    let rootEl = null;
    let canvas = null;
    let ctx = null;
    let state = null;
    let rafId = 0;
    let timerInterval = 0;
    let keyHandler = null;
    let keyUpHandler = null;
    let touchCleanups = [];
    let onHighScore = null;
    let getHighScore = function () { return null; };
    let getLeaderboards = function () { return null; };
    let selectedClassId = "50cc";

    function start(root, opts) {
        stop();
        opts = opts || {};
        rootEl = root;
        onHighScore = opts.onHighScore || null;
        getHighScore = opts.getHighScore || function () { return null; };
        getLeaderboards = opts.getLeaderboards || function () { return null; };
        selectedClassId = "50cc";
        SESSION.start();
        renderShell();
        bindInput();
        renderClassBoard();
        syncClassHud();
        showClassPrompt();
    }

    function stop() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = 0;
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = 0;
        if (keyHandler) window.removeEventListener("keydown", keyHandler);
        if (keyUpHandler) window.removeEventListener("keyup", keyUpHandler);
        keyHandler = null;
        keyUpHandler = null;
        cleanupTouch();
        state = null;
        canvas = null;
        ctx = null;
        rootEl = null;
    }

    function cleanupTouch() {
        touchCleanups.forEach(function (fn) { fn(); });
        touchCleanups = [];
    }

    function beginTour() {
        const now = performance.now();
        state = {
            input: { accel: false, turbo: false, leanLeft: false, leanRight: false },
            speedClass: speedClassForId(selectedClassId),
            tourStartAt: now,
            cumulativeTimeMs: 0,
            trackIndex: 0,
            paused: false,
            finishedTour: false,
            popups: [],
            result: null,
            previousBest: getHighScore(selectedClassId)
        };
        startTrack(0, now, 0);
        if (!rafId) rafId = requestAnimationFrame(loop);
        if (canvas) canvas.focus();
    }

    function startTrack(index, now, baseTimeMs) {
        const track = buildRaceTrack(TRACKS[index]);
        state.trackIndex = index;
        state.track = track;
        state.trackBaseTimeMs = typeof baseTimeMs === "number" ? baseTimeMs : (state.trackBaseTimeMs || 0);
        state.cumulativeTimeMs = state.trackBaseTimeMs;
        state.trackStartAt = now;
        state.trackTimeMs = 0;
        state.result = null;
        state.finishedTour = false;
        state.player = freshBike(RIDERS[0], PLAYER_START_LANE, true);
        state.player.maxSpeed = PLAYER_MAX_SPEED * state.speedClass.speedMultiplier;
        state.player.turboSpeed = PLAYER_TURBO_SPEED * state.speedClass.speedMultiplier;
        state.rivals = RIDERS.slice(1, TOTAL_RIDERS).map(function (rider, riderIndex) {
            const bike = freshBike(rider, CPU_START_LANES[riderIndex], false);
            bike.distance = (-18 - riderIndex * 11) * TRACK_LENGTH_SCALE;
            bike.aiTurboBias = rider.turboBias;
            bike.aiLaneBias = rider.laneBias;
            bike.maxSpeed = (CPU_MAX_SPEED + track.cpuSpeedBias * 0.5 + riderIndex * 0.35) * state.speedClass.speedMultiplier;
            bike.turboSpeed = bike.maxSpeed + 4 * state.speedClass.speedMultiplier;
            return bike;
        });
        state.player.distance = 0;
        state.cameraDistance = 0;
        state.trackEventHits = Object.create(null);
        state.lastFrameAt = now;
        state.countdownStartedAt = now;
        state.countdownEndsAt = now + COUNTDOWN_MS + GO_MS;
        state.countdownLabel = "";
        state.overlayLocked = false;
        renderCountdownOverlay(now);
        updateHud();
        updateStatus(now);
        renderTimer();
    }

    function buildRaceTrack(baseTrack) {
        const lapLength = baseTrack.length;
        const obstacles = [];
        for (let lap = 0; lap < LAPS_PER_TRACK; lap++) {
            const offset = lap * lapLength;
            for (let i = 0; i < baseTrack.obstacles.length; i++) {
                const obstacle = baseTrack.obstacles[i];
                const clone = Object.assign({}, obstacle, {
                    id: `${obstacle.id}-lap-${lap + 1}`,
                    start: obstacle.start + offset
                });
                if (Array.isArray(obstacle.lanes)) clone.lanes = obstacle.lanes.slice();
                if (Array.isArray(obstacle.openLanes)) clone.openLanes = obstacle.openLanes.slice();
                obstacles.push(clone);
            }
        }
        return Object.assign({}, baseTrack, {
            lapLength: lapLength,
            laps: LAPS_PER_TRACK,
            length: lapLength * LAPS_PER_TRACK,
            bronzeTimeMs: baseTrack.bronzeTimeMs * LAPS_PER_TRACK,
            silverTimeMs: baseTrack.silverTimeMs * LAPS_PER_TRACK,
            goldTimeMs: baseTrack.goldTimeMs * LAPS_PER_TRACK,
            obstacles: obstacles
        });
    }

    function speedClassForId(classId) {
        return SPEED_CLASSES.find(function (item) { return item.id === classId; }) || SPEED_CLASSES[0];
    }

    function normalizeObstaclePower(obstacle) {
        if (!obstacle) return 0;
        if (obstacle.type === "hump") return HUMP_POWER;
        if (obstacle.type === "bump") return BUMP_POWER;
        if (obstacle.type === "ramp") return RAMP_POWER;
        return obstacle.power;
    }

    function displaySpeedKmh(speed) {
        const topSpeed = state && state.player ? state.player.turboSpeed : PLAYER_TURBO_SPEED;
        const classTopKmh = state && state.speedClass ? state.speedClass.topSpeedKmh : speedClassForId(selectedClassId).topSpeedKmh;
        return Math.round(clamp(speed / Math.max(1, topSpeed), 0, 1) * classTopKmh);
    }

    function freshBike(rider, lane, isPlayer) {
        return {
            id: rider.id,
            name: rider.name,
            primary: rider.primary,
            accent: rider.accent,
            eyeColor: rider.eyeColor,
            bikeColor: rider.bike,
            stripes: !!rider.stripes,
            lane: lane,
            lanePos: lane,
            targetLane: lane,
            distance: 0,
            lap: 1,
            speed: 0,
            heat: 0,
            airborne: false,
            airElapsed: 0,
            airDuration: 0,
            pitch: 0.18,
            wheelieAmount: 0,
            launchPrep: 0,
            launchBoost: 1,
            launchSpeed: 0,
            crashedUntil: 0,
            stalledUntil: 0,
            finished: false,
            finishTimeMs: 0,
            maxSpeed: isPlayer ? PLAYER_MAX_SPEED : CPU_MAX_SPEED,
            turboSpeed: isPlayer ? PLAYER_TURBO_SPEED : CPU_TURBO_SPEED,
            turboCapacity: rider.turboCapacity == null ? 1 : rider.turboCapacity,
            aiTurboUntil: 0,
            invincibleUntil: 0,
            obstacleHits: Object.create(null)
        };
    }

    function renderShell() {
        rootEl.innerHTML = `
            <a class="back-link" href="#/break">← Switch game</a>
            <header class="break-game-header">
                <div>
                    <h1>🏍️ MeowtorBike</h1>
                    <p class="break-game-blurb">Race cat-cross tracks, preload wheelies, carry your launch momentum, and keep your turbo cool enough to chase the podium.</p>
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="meowterbike-timer-label">Time left</div>
                    <div class="tetris-timer" id="meowterbike-timer">5:00</div>
                </div>
            </header>
            <div class="break-game-stats">
                <div class="tetris-stat tetris-highscore"><span>🏁 Class best</span><strong id="meowterbike-best">${formatRaceTime(getHighScore(selectedClassId))}</strong></div>
                <div class="tetris-stat"><span>Class</span><strong id="meowterbike-class">${escapeHtml(speedClassForId(selectedClassId).label)}</strong></div>
                <div class="tetris-stat"><span>Track</span><strong id="meowterbike-track">1 / ${TRACKS.length}</strong></div>
                <div class="tetris-stat"><span>Lap</span><strong id="meowterbike-lap">1 / ${LAPS_PER_TRACK}</strong></div>
                <div class="tetris-stat"><span>Place</span><strong id="meowterbike-place">${ordinal(TOTAL_RIDERS)}</strong></div>
                <div class="tetris-stat"><span>Track time</span><strong id="meowterbike-track-time">0:00.000</strong></div>
                <div class="tetris-stat"><span>Tour time</span><strong id="meowterbike-tour-time">0:00.000</strong></div>
                <div class="tetris-stat"><span>Heat</span><strong id="meowterbike-heat">0%</strong></div>
            </div>
            <div class="meowterbike-layout">
                <div class="break-canvas-wrap">
                    <canvas id="meowterbike-canvas" width="${W}" height="${H}" tabindex="0" aria-label="MeowtorBike race track"></canvas>
                    <div class="break-overlay" id="meowterbike-overlay" hidden></div>
                </div>
                <aside class="meowterbike-panel">
                    <h3>Rider guide</h3>
                    <p class="meowterbike-panel-copy">Finish on the podium to move on. Lean back on the ground, then punch forward off ramps for longer jumps while dodging five-lane pile-ups.</p>
                    <div class="meowterbike-status" id="meowterbike-status"></div>
                    <div class="meowterbike-class-board" id="meowterbike-class-board"></div>
                    <div class="meowterbike-track-board" id="meowterbike-track-board"></div>
                    <div class="meowterbike-legend">
                        ${legendItem("hump", "Speed humps", "Wheelie over them, or take a tiny jump with a small speed loss")}
                        ${legendItem("bump", "Small jumps", "Always pop the bike up — wheelies will not flatten them")}
                        ${legendItem("ramp", "Large ramps", "Launch huge jumps — land with the right pitch")}
                        ${legendItem("mud", "Mud patches", "Drag you down hard unless you avoid them")}
                        ${legendItem("cool", "Cooling arrows", "Instantly dump heat from the engine")}
                        ${legendItem("tight", "Tight lane", "Forces a snap lane change before the squeeze")}
                    </div>
                </aside>
            </div>
            <div class="meowterbike-touch">
                <button type="button" data-act="lane-up">Lane ↑</button>
                <button type="button" data-act="accel">1 · Go</button>
                <button type="button" data-act="turbo">2 · Turbo</button>
                <button type="button" data-act="lean-left">Tilt ←</button>
                <button type="button" data-act="lane-down">Lane ↓</button>
                <button type="button" data-act="lean-right">Tilt →</button>
            </div>
            <p class="break-help">Keyboard: <kbd>Z</kbd> accelerate, <kbd>X</kbd> turbo, ↑/↓ switch lanes, hold ← to preload a wheelie, tap → on a jump for extra distance, <kbd>P</kbd> pause.</p>
        `;
        canvas = document.getElementById("meowterbike-canvas");
        ctx = canvas.getContext("2d");
    }

    function legendItem(type, label, description) {
        return `
            <div class="meowterbike-legend-item is-${type}">
                <span class="meowterbike-swatch"></span>
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
            if (key === "arrowup") {
                shiftLane(-1);
                e.preventDefault();
                return;
            }
            if (key === "arrowdown") {
                shiftLane(1);
                e.preventDefault();
                return;
            }
            if (key === "z") {
                state.input.accel = true;
                e.preventDefault();
                return;
            }
            if (key === "x") {
                state.input.turbo = true;
                e.preventDefault();
                return;
            }
            if (key === "arrowleft") {
                state.input.leanLeft = true;
                e.preventDefault();
                return;
            }
            if (key === "arrowright") {
                state.input.leanRight = true;
                e.preventDefault();
            }
        };
        keyUpHandler = function (e) {
            if (!state) return;
            const key = (e.key || "").toLowerCase();
            if (key === "z") state.input.accel = false;
            else if (key === "x") state.input.turbo = false;
            else if (key === "arrowleft") state.input.leanLeft = false;
            else if (key === "arrowright") state.input.leanRight = false;
        };
        window.addEventListener("keydown", keyHandler);
        window.addEventListener("keyup", keyUpHandler);

        cleanupTouch();
        rootEl.querySelectorAll(".meowterbike-touch [data-act]").forEach(function (button) {
            const act = button.dataset.act;
            const down = function (e) {
                e.preventDefault();
                handleTouchAction(act, true);
            };
            const up = function (e) {
                e.preventDefault();
                handleTouchAction(act, false);
            };
            button.addEventListener("pointerdown", down);
            button.addEventListener("pointerup", up);
            button.addEventListener("pointerleave", up);
            button.addEventListener("pointercancel", up);
            touchCleanups.push(function () {
                button.removeEventListener("pointerdown", down);
                button.removeEventListener("pointerup", up);
                button.removeEventListener("pointerleave", up);
                button.removeEventListener("pointercancel", up);
            });
        });
    }

    function handleTouchAction(act, down) {
        if (!state) return;
        if (act === "lane-up" && down) shiftLane(-1);
        else if (act === "lane-down" && down) shiftLane(1);
        else if (act === "accel") state.input.accel = down;
        else if (act === "turbo") state.input.turbo = down;
        else if (act === "lean-left") state.input.leanLeft = down;
        else if (act === "lean-right") state.input.leanRight = down;
    }

    function shiftLane(delta) {
        if (!state || state.player.airborne || state.player.finished) return;
        state.player.targetLane = clamp(state.player.targetLane + delta, 0, LANES - 1);
    }

    function loop(now) {
        if (!state) return;
        const dt = Math.min(48, Math.max(0, now - state.lastFrameAt));
        state.lastFrameAt = now;

        if (!state.paused && !state.result) {
            if (isCountdownActive(now)) {
                renderCountdownOverlay(now);
                updateHud();
                updateStatus(now);
            } else {
                if (state.countdownEndsAt) {
                    state.countdownEndsAt = 0;
                    state.countdownStartedAt = 0;
                    state.countdownLabel = "";
                    hideOverlay();
                }
                state.trackTimeMs += dt;
                updateBike(state.player, dt, now, true);
                state.rivals.forEach(function (rival) {
                    planRival(rival, now);
                    updateBike(rival, dt, now, false);
                });
                handleCollisions(now);
                updateCamera();
                updatePopups(dt);
                updateHud();
                updateStatus(now);
                maybeFinishTrack(now);
            }
        }

        draw(now);
        rafId = requestAnimationFrame(loop);
    }

    function updateBike(bike, dt, now, isPlayer) {
        if (bike.finished) return;

        if (bike.crashedUntil > now) {
            bike.speed = approach(bike.speed, 0, dt * 0.05);
            bike.wheelieAmount = approach(bike.wheelieAmount || 0, 0, dt * 0.005);
            bike.launchPrep = approach(bike.launchPrep || 0, 0, dt * 0.005);
            coolBike(bike, dt * 0.024);
            bike.targetLane = 0;
            smoothLane(bike, dt * 2.6);
            return;
        }

        if (bike.stalledUntil > now) {
            bike.speed = approach(bike.speed, 0, dt * 0.06);
            bike.wheelieAmount = approach(bike.wheelieAmount || 0, 0, dt * 0.005);
            bike.launchPrep = approach(bike.launchPrep || 0, 0, dt * 0.005);
            coolBike(bike, dt * 0.05);
            bike.targetLane = 0;
            smoothLane(bike, dt * 2.6);
            return;
        }

        const controls = isPlayer ? state.input : bike.aiControls;
        const classScale = state.speedClass ? state.speedClass.speedMultiplier : 1;
        const turboLimit = MAX_HEAT * (bike.turboCapacity || 1);
        const turboOn = !!controls.turbo && bike.heat < turboLimit;
        const accelOn = !!controls.accel || turboOn;
        const accel = turboOn ? PLAYER_TURBO_ACCEL : PLAYER_BASE_ACCEL;
        const maxSpeed = turboOn ? bike.turboSpeed : bike.maxSpeed;
        const actualAccel = (isPlayer ? accel : (turboOn ? CPU_TURBO_ACCEL : CPU_BASE_ACCEL)) * classScale;
        const wantsWheelie = isPlayer && !bike.airborne && !!controls.leanLeft && bike.speed > 14;
        bike.wheelieAmount = approach(bike.wheelieAmount || 0, wantsWheelie ? 1 : 0, dt * 0.0045);
        bike.launchPrep = approach(bike.launchPrep || 0, wantsWheelie ? 1 : 0, dt * 0.0038);

        if (!bike.airborne) {
            if (accelOn) bike.speed += actualAccel * dt / 1000;
            else bike.speed -= (isPlayer ? PLAYER_DRAG : CPU_DRAG) * classScale * dt / 1000;
            bike.speed = clamp(bike.speed, 0, maxSpeed);

            if (turboOn) {
                bike.heat += HEAT_GAIN_PER_SEC * dt / 1000;
                if (bike.heat >= turboLimit) {
                    bike.heat = turboLimit;
                    bike.stalledUntil = now + HEAT_STALL_MS;
                    bike.speed = Math.min(bike.speed, 10 * classScale);
                    if (isPlayer) addPopup(state.player.distance + 12, state.player.lanePos, "OVERHEAT!", "#ff7f51");
                }
            } else {
                coolBike(bike, HEAT_COOL_PER_SEC * dt / 1000);
            }
        } else {
            coolBike(bike, HEAT_COOL_PER_SEC * 0.45 * dt / 1000);
        }

        const previousDistance = bike.distance;
        if (bike.airborne) {
            updateAirPitch(bike, controls, dt, isPlayer);
            const pitchBonus = 1 + Math.max(0, bike.pitch) * 0.16 - Math.max(0, -bike.pitch) * 0.08;
            const travelSpeed = (bike.launchSpeed || bike.speed) * (bike.launchBoost || 1);
            bike.distance += travelSpeed * dt / 1000 * pitchBonus * SPEED_SCALE;
            bike.airElapsed += dt;
            if (bike.airElapsed >= bike.airDuration) landBike(bike, now, isPlayer);
        } else {
            bike.distance += bike.speed * dt / 1000 * SPEED_SCALE;
        }

        if (!isPlayer && blockingTightBarrier(bike)) forceBarrierEscape(bike, dt);
        else smoothLane(bike, dt);
        applyTrackEffects(bike, previousDistance, now, isPlayer, dt, controls);
        updateLapProgress(bike, previousDistance, isPlayer);

        if (bike.distance >= state.track.length && !bike.finished) {
            bike.finished = true;
            bike.finishTimeMs = state.trackTimeMs;
            bike.distance = state.track.length;
        }
    }

    function coolBike(bike, amount) {
        bike.heat = clamp(bike.heat - amount, 0, MAX_HEAT);
    }

    function updateAirPitch(bike, controls, dt, isPlayer) {
        if (isPlayer) {
            if (controls.leanRight) bike.pitch += AIR_PITCH_RATE * dt / 1000;
            if (controls.leanLeft) bike.pitch -= AIR_PITCH_RATE * dt / 1000;
        } else {
            const target = 0.28;
            bike.pitch = approach(bike.pitch, target, dt * 0.0018);
        }
        bike.pitch = clamp(bike.pitch, -1.15, 1.2);
    }

    function landBike(bike, now, isPlayer) {
        bike.airborne = false;
        bike.airElapsed = 0;
        bike.airDuration = 0;
        if (bike.pitch < PITCH_SAFE_MIN || bike.pitch > PITCH_SAFE_MAX) {
            crashBike(bike, now, isPlayer, "Bad landing!");
            bike.pitch = 0.15;
            return;
        }
        const carriedSpeed = bike.launchSpeed || bike.speed;
        if (bike.pitch > 0.3 && bike.pitch < 0.75) bike.speed = Math.min(bike.turboSpeed, carriedSpeed + 4);
        else bike.speed = Math.max(14 * (state.speedClass ? state.speedClass.speedMultiplier : 1), carriedSpeed * 0.97);
        bike.launchBoost = 1;
        bike.launchSpeed = 0;
        bike.pitch = 0.12;
    }

    function applyTrackEffects(bike, previousDistance, now, isPlayer, dt, controls) {
        const currentLane = Math.round(bike.lanePos);
        const active = state.track.obstacles;

        for (let i = 0; i < active.length; i++) {
            const obstacle = active[i];
            if (!hazardAffectsLane(obstacle, currentLane)) continue;
            const inZone = bike.distance >= obstacle.start && bike.distance <= obstacle.start + obstacle.length;
            const entered = !bike.obstacleHits[obstacle.id] && previousDistance < obstacle.start && bike.distance >= obstacle.start;

            if (obstacle.type === "mud" && inZone && !bike.airborne) {
                bike.speed = Math.max(8, bike.speed - obstacle.drag * dt / 1000);
            } else if (obstacle.type === "tight" && inZone && !bike.airborne && bike.invincibleUntil <= now && bike.speed > 0) {
                if (!isPlayer) bike.targetLane = bestOpenLaneForObstacle(obstacle, bike.lanePos);
                crashBike(bike, now, isPlayer, "Barriers!");
                bike.obstacleHits[obstacle.id] = true;
            } else if (entered) {
                bike.obstacleHits[obstacle.id] = true;
                if (obstacle.type === "hump" && !bike.airborne) {
                    if (isPlayer && bike.wheelieAmount > 0.45) {
                        bike.speed = Math.max(18, bike.speed * 0.985);
                        addPopup(bike.distance, bike.lanePos, "Wheelie!", "#bfe7ff");
                    } else {
                        bike.speed = Math.max(14, bike.speed * 0.94);
                        if (bike.speed > 22) launchBike(bike, normalizeObstaclePower(obstacle), isPlayer, controls);
                        if (isPlayer) addPopup(bike.distance, bike.lanePos, "Speed hump!", "#ffd166");
                    }
                } else if (obstacle.type === "bump" && !bike.airborne) {
                    bike.speed = Math.max(12, bike.speed * 0.9);
                    if (bike.speed > 24) launchBike(bike, normalizeObstaclePower(obstacle), isPlayer, controls);
                    if (isPlayer) addPopup(bike.distance, bike.lanePos, "Jump!", "#ffd166");
                } else if (obstacle.type === "ramp" && !bike.airborne) {
                    launchBike(bike, normalizeObstaclePower(obstacle), isPlayer, controls);
                    if (isPlayer) addPopup(bike.distance, bike.lanePos, "Launch!", "#bfe7ff");
                } else if (obstacle.type === "cool") {
                    bike.heat = clamp(bike.heat - COOL_ARROW_RESTORE, 0, MAX_HEAT);
                    if (isPlayer) addPopup(bike.distance, bike.lanePos, "Cool down!", "#5fcfbf");
                }
            }
        }
    }

    function launchBike(bike, power, isPlayer, controls) {
        const launchStrength = clamp(bike.speed / Math.max(bike.maxSpeed, 1), 0.35, 1.35);
        let launchBoost = 1;
        if (isPlayer && controls && controls.leanRight && (bike.launchPrep || 0) > 0.15) {
            launchBoost += Math.min(0.5, (bike.launchPrep || 0) * 0.5);
            addPopup(bike.distance + 10, bike.lanePos, "Boost jump!", "#ffd166");
        }
        bike.airborne = true;
        bike.airElapsed = 0;
        bike.launchBoost = launchBoost;
        bike.launchSpeed = bike.speed;
        bike.airDuration = 380 + power * 250 + launchStrength * 330 * launchBoost;
        bike.pitch = clamp(0.14 - (bike.launchPrep || 0) * 0.14 + (controls && controls.leanRight ? 0.04 : 0), -0.18, 0.42);
        bike.launchPrep = 0;
        bike.wheelieAmount = 0;
    }

    function crashBike(bike, now, isPlayer, text) {
        bike.crashedUntil = now + CRASH_MS;
        bike.stalledUntil = 0;
        bike.airborne = false;
        bike.airElapsed = 0;
        bike.airDuration = 0;
        bike.speed = 0;
        bike.pitch = 0.1;
        bike.wheelieAmount = 0;
        bike.launchPrep = 0;
        bike.launchBoost = 1;
        bike.launchSpeed = 0;
        bike.targetLane = 0;
        bike.invincibleUntil = now + CRASH_MS + PILEUP_INVINCIBLE_MS;
        if (isPlayer) addPopup(bike.distance, bike.lanePos, text || "Crash!", "#ff7f51");
    }

    function smoothLane(bike, dt) {
        bike.lanePos = approach(bike.lanePos, bike.targetLane, LANE_SHIFT_PER_SEC * dt / 1000);
        bike.lane = Math.round(bike.lanePos);
    }

    function planRival(rival, now) {
        const controls = rival.aiControls || (rival.aiControls = { accel: true, turbo: false });
        controls.accel = true;
        controls.turbo = false;

        if (rival.airborne) return;

        const stuckBarrier = blockingTightBarrier(rival);
        if (stuckBarrier) {
            rival.targetLane = bestOpenLaneForObstacle(stuckBarrier, rival.lanePos);
            rival.aiTurboUntil = 0;
            return;
        }

        const laneScores = [];
        for (let lane = 0; lane < LANES; lane++) {
            let score = Math.abs(lane - rival.lanePos) * 4 + Math.abs(lane - rival.aiLaneBias * (LANES - 1));
            score += laneHazardScore(lane, rival.distance);
            const nearby = nearestBikeInLane(lane, rival.distance, rival.id);
            if (nearby && Math.abs(nearby.delta) < COLLISION_DISTANCE * 1.2) score += 44;
            else if (nearby && nearby.delta > 0 && nearby.delta < 220) score += 18;
            laneScores.push({ lane: lane, score: score });
        }
        laneScores.sort(function (a, b) { return a.score - b.score; });
        rival.targetLane = laneScores[0].lane;

        const tightAhead = nextTightBarrier(rival.distance);
        if (tightAhead && tightAhead.delta < 720) {
            const openScores = laneScores.filter(function (entry) {
                return tightAhead.obstacle.openLanes.indexOf(entry.lane) !== -1;
            });
            if (openScores.length) rival.targetLane = openScores[0].lane;
        }

        const upcoming = nextObstacleForLane(rival.targetLane, rival.distance);
        if (upcoming && upcoming.type === "cool" && rival.heat > 62) {
            rival.targetLane = upcomingLane(upcoming);
        }
        const targetNearby = nearestBikeInLane(rival.targetLane, rival.distance, rival.id);
        const turboLimit = MAX_HEAT * (rival.turboCapacity || 1);
        const clearRun = !upcoming || upcoming.type === "cool" || (upcoming.start - rival.distance) > 420;
        const safeGap = !targetNearby || Math.abs(targetNearby.delta) > 220;
        const chaseGap = state.player.distance - rival.distance;
        const barrierSoon = tightAhead && tightAhead.delta < 860;
        const canTurbo = clearRun
            && safeGap
            && !barrierSoon
            && rival.speed > 20
            && rival.heat < turboLimit - 10
            && chaseGap > -140;
        if (!canTurbo) {
            rival.aiTurboUntil = 0;
        } else if (rival.aiTurboUntil <= now) {
            rival.aiTurboUntil = now + 700 + rival.aiTurboBias * 700;
        }
        controls.turbo = rival.aiTurboUntil > now;
    }

    function laneHazardScore(lane, distance) {
        let score = 0;
        for (let i = 0; i < state.track.obstacles.length; i++) {
            const obstacle = state.track.obstacles[i];
            if (!hazardAffectsLane(obstacle, lane)) continue;
            const delta = obstacle.start - distance;
            if (delta < 0 || delta > HAZARD_LOOKAHEAD) continue;
            if (obstacle.type === "mud") score += 16;
            else if (obstacle.type === "tight") score += 34 + Math.max(0, 72 - delta / 12);
            else if (obstacle.type === "hump") score += 5;
            else if (obstacle.type === "bump") score += 8;
            else if (obstacle.type === "ramp") score += 6;
            else if (obstacle.type === "cool") score -= 10;
        }
        return score;
    }

    function nearestBikeInLane(lane, distance, selfId) {
        let best = null;
        const bikes = [state.player].concat(state.rivals);
        for (let i = 0; i < bikes.length; i++) {
            const bike = bikes[i];
            if (bike.id === selfId || bike.finished) continue;
            if (Math.round(bike.lanePos) !== lane) continue;
            const delta = bike.distance - distance;
            if (!best || Math.abs(delta) < Math.abs(best.delta)) best = { bike: bike, delta: delta };
        }
        return best;
    }

    function nextObstacleForLane(lane, distance) {
        let best = null;
        for (let i = 0; i < state.track.obstacles.length; i++) {
            const obstacle = state.track.obstacles[i];
            if (!hazardAffectsLane(obstacle, lane)) continue;
            const delta = obstacle.start - distance;
            if (delta < 0) continue;
            if (!best || delta < best.delta) best = { obstacle: obstacle, delta: delta, start: obstacle.start, type: obstacle.type };
        }
        return best && best.obstacle;
    }

    function nextTightBarrier(distance) {
        let best = null;
        for (let i = 0; i < state.track.obstacles.length; i++) {
            const obstacle = state.track.obstacles[i];
            if (obstacle.type !== "tight") continue;
            const delta = obstacle.start - distance;
            if (delta < 0) continue;
            if (!best || delta < best.delta) best = { obstacle: obstacle, delta: delta };
        }
        return best;
    }

    function blockingTightBarrier(bike) {
        const lane = Math.round(bike.lanePos);
        for (let i = 0; i < state.track.obstacles.length; i++) {
            const obstacle = state.track.obstacles[i];
            if (obstacle.type !== "tight") continue;
            if (!hazardAffectsLane(obstacle, lane)) continue;
            if (bike.distance < obstacle.start - 180) continue;
            if (bike.distance > obstacle.start + obstacle.length + 140) continue;
            return obstacle;
        }
        return null;
    }

    function bestOpenLaneForObstacle(obstacle, lanePos) {
        if (!obstacle || !Array.isArray(obstacle.openLanes) || !obstacle.openLanes.length) return 0;
        const sorted = obstacle.openLanes.slice().sort(function (a, b) {
            return Math.abs(a - lanePos) - Math.abs(b - lanePos);
        });
        return sorted[0];
    }

    function forceBarrierEscape(bike, dt) {
        const stuckBarrier = blockingTightBarrier(bike);
        if (!stuckBarrier) {
            smoothLane(bike, dt);
            return;
        }
        bike.targetLane = bestOpenLaneForObstacle(stuckBarrier, bike.lanePos);
        smoothLane(bike, dt * 3.2);
    }

    function upcomingLane(obstacle) {
        if (typeof obstacle.lane === "number") return obstacle.lane;
        if (Array.isArray(obstacle.lanes) && obstacle.lanes.length) return obstacle.lanes[0];
        if (Array.isArray(obstacle.openLanes) && obstacle.openLanes.length) return obstacle.openLanes[0];
        return 0;
    }

    function hazardAffectsLane(obstacle, lane) {
        if (obstacle.type === "tight") return obstacle.openLanes.indexOf(lane) === -1;
        if (Array.isArray(obstacle.lanes)) return obstacle.lanes.indexOf(lane) !== -1;
        return obstacle.lane === lane;
    }

    function handleCollisions(now) {
        state.rivals.forEach(function (rival) {
            if (rival.finished || state.player.finished) return;
            if (state.player.airborne || rival.airborne) return;
            if (state.player.crashedUntil > now || rival.crashedUntil > now) return;
            if (state.player.invincibleUntil > now || rival.invincibleUntil > now) return;
            if (Math.abs(state.player.lanePos - rival.lanePos) > 0.35) return;
            if (Math.abs(state.player.distance - rival.distance) > COLLISION_DISTANCE) return;
            crashBike(state.player, now, true, "Pile-up!");
            crashBike(rival, now, false, "Pile-up!");
        });
    }

    function updateCamera() {
        const desired = Math.max(0, state.player.distance - VIEW_DISTANCE * PLAYER_VIEW_FRACTION);
        state.cameraDistance = approach(state.cameraDistance, desired, 190);
    }

    function maybeFinishTrack(now) {
        if (state.result || !state.player.finished) return;
        const place = 1 + state.rivals.filter(function (rival) {
            return rival.finished && rival.finishTimeMs < state.player.finishTimeMs;
        }).length;
        const trackTimeMs = state.player.finishTimeMs;
        const targetTimeMs = Math.max(15000, state.track.bronzeTimeMs - BONUS_TARGET_DELTA_MS);
        const podium = place <= 3;
        const beatTarget = trackTimeMs <= targetTimeMs;
        state.result = {
            place: place,
            podium: podium,
            beatTarget: beatTarget,
            trackTimeMs: trackTimeMs,
            targetTimeMs: targetTimeMs,
            totalTimeMs: state.cumulativeTimeMs + trackTimeMs,
            completedTour: podium && state.trackIndex === TRACKS.length - 1
        };

        if (state.result.completedTour && typeof onHighScore === "function") {
            onHighScore(state.result.totalTimeMs, state.speedClass.id);
        }

        showResultOverlay();
        updateHud();
        updateStatus(now);
    }

    function showResultOverlay() {
        const result = state.result;
        const overlay = document.getElementById("meowterbike-overlay");
        if (!overlay || !result) return;
        overlay.hidden = false;
        const title = result.completedTour
            ? "🏁 Tour complete!"
            : result.podium
                ? "🥉 Podium secured!"
                : "😿 Missed the podium";
        const copy = result.completedTour
            ? `Meow-velous! You cleared all ${TRACKS.length} tracks in ${formatRaceTime(result.totalTimeMs)}.`
            : result.podium
                ? `Track cleared in ${formatRaceTime(result.trackTimeMs)}. Ready for the next course?`
                : `Retry ${escapeHtml(state.track.name)} and chase a top-three finish.`;
        const previousBest = getHighScore(state.speedClass.id);
        overlay.innerHTML = `
            <div class="overlay-card ${result.completedTour ? "is-new-high" : ""}">
                <h2>${title}</h2>
                <p>${copy}</p>
                <p>Place: <strong>${ordinal(result.place)}</strong> · Track time: <strong>${formatRaceTime(result.trackTimeMs)}</strong></p>
                <p>Bronze: ${formatRaceTime(state.track.bronzeTimeMs)} · Coach target: ${formatRaceTime(result.targetTimeMs)}${result.beatTarget ? " · <strong>Target beaten!</strong>" : ""}</p>
                ${result.completedTour ? `<p class="tetris-prev-high">Saved best: ${formatRaceTime(previousBest)}</p>` : ""}
                <div class="overlay-actions">
                    ${result.completedTour
                        ? `<button type="button" class="primary-btn pulse-btn" id="meowterbike-new-tour">🔁 Start new tour</button>`
                        : result.podium
                            ? `<button type="button" class="primary-btn pulse-btn" id="meowterbike-next-track">▶ Next track</button>`
                            : `<button type="button" class="primary-btn pulse-btn" id="meowterbike-retry-track">🔁 Retry track</button>`}
                    ${!result.completedTour ? `<button type="button" class="ghost-btn" id="meowterbike-restart-tour">↺ Restart tour</button>` : ""}
                    <a class="ghost-btn" href="#/break">← Switch game</a>
                </div>
            </div>
        `;

        const retry = document.getElementById("meowterbike-retry-track");
        if (retry) retry.addEventListener("click", function () {
            startTrack(state.trackIndex, performance.now(), state.trackBaseTimeMs);
        });
        const restart = document.getElementById("meowterbike-restart-tour");
        if (restart) restart.addEventListener("click", function () {
            showClassPrompt();
        });
        const next = document.getElementById("meowterbike-next-track");
        if (next) next.addEventListener("click", function () {
            startTrack(state.trackIndex + 1, performance.now(), state.trackBaseTimeMs + state.result.trackTimeMs);
        });
        const newTour = document.getElementById("meowterbike-new-tour");
        if (newTour) newTour.addEventListener("click", showClassPrompt);
    }

    function hideOverlay() {
        const overlay = document.getElementById("meowterbike-overlay");
        if (!overlay) return;
        overlay.hidden = true;
        overlay.innerHTML = "";
    }

    function showClassPrompt() {
        const overlay = document.getElementById("meowterbike-overlay");
        if (!overlay) return;
        syncClassHud();
        renderClassBoard();
        overlay.hidden = false;
        overlay.innerHTML = `
            <div class="overlay-card">
                <h2>Choose your class</h2>
                <p>Pick a Gran Prix class before the countdown starts.</p>
                <div class="overlay-actions">
                    ${SPEED_CLASSES.map(function (speedClass) {
                        return `<button type="button" class="${speedClass.id === selectedClassId ? "primary-btn" : "ghost-btn"}" data-class-start="${escapeHtml(speedClass.id)}">${escapeHtml(speedClass.label)} · ${escapeHtml(String(speedClass.topSpeedKmh))} km/h</button>`;
                    }).join("")}
                </div>
            </div>
        `;
        overlay.querySelectorAll("[data-class-start]").forEach(function (button) {
            button.addEventListener("click", function () {
                selectedClassId = button.dataset.classStart || "50cc";
                beginTour();
            });
        });
    }

    function isCountdownActive(now) {
        return !!state && !!state.countdownEndsAt && now < state.countdownEndsAt;
    }

    function countdownText(now) {
        const elapsed = Math.max(0, now - state.countdownStartedAt);
        if (elapsed < 1000) return "3...";
        if (elapsed < 2000) return "2...";
        if (elapsed < 3000) return "1...";
        return "Go!";
    }

    function renderCountdownOverlay(now) {
        const overlay = document.getElementById("meowterbike-overlay");
        if (!overlay || !state) return;
        const label = countdownText(now);
        if (!overlay.hidden && state.countdownLabel === label) return;
        state.countdownLabel = label;
        overlay.hidden = false;
        overlay.innerHTML = `
            <div class="overlay-card">
                <h2>${label}</h2>
                <p>${escapeHtml(state.track.name)}</p>
            </div>
        `;
    }

    function togglePause() {
        if (!state || state.result) return;
        state.paused = !state.paused;
        const overlay = document.getElementById("meowterbike-overlay");
        if (!overlay) return;
        if (state.paused) {
            overlay.hidden = false;
            overlay.innerHTML = `<div class="overlay-card"><h2>Paused</h2><p>Press <kbd>P</kbd> to get the bike purring again.</p></div>`;
        } else {
            if (isCountdownActive(performance.now())) renderCountdownOverlay(performance.now());
            else hideOverlay();
        }
    }

    function updateHud() {
        if (!state) return;
        const place = document.getElementById("meowterbike-place");
        const trackTime = document.getElementById("meowterbike-track-time");
        const tourTime = document.getElementById("meowterbike-tour-time");
        const heat = document.getElementById("meowterbike-heat");
        const track = document.getElementById("meowterbike-track");
        const lap = document.getElementById("meowterbike-lap");
        const speedClass = document.getElementById("meowterbike-class");
        const best = document.getElementById("meowterbike-best");
        if (place) place.textContent = ordinal(currentPlace());
        if (trackTime) trackTime.textContent = formatRaceTime(state.trackTimeMs);
        if (tourTime) tourTime.textContent = formatRaceTime(state.cumulativeTimeMs + state.trackTimeMs);
        if (heat) heat.textContent = Math.round(state.player.heat) + "%";
        if (track) track.textContent = (state.trackIndex + 1) + " / " + TRACKS.length;
        if (lap) lap.textContent = currentLap(state.player) + " / " + state.track.laps;
        if (speedClass) speedClass.textContent = state.speedClass.label;
        if (best) best.textContent = formatRaceTime(getHighScore(state.speedClass.id));
        syncClassHud();
        renderClassBoard();
        renderTrackBoard();
    }

    function renderTrackBoard() {
        const host = document.getElementById("meowterbike-track-board");
        if (!host || !state) return;
        const target = Math.max(15000, state.track.bronzeTimeMs - BONUS_TARGET_DELTA_MS);
        host.innerHTML = `
            <div class="meowterbike-board-header">
                <strong>${escapeHtml(state.track.name)}</strong>
                <span>${escapeHtml(state.track.blurb)} ${state.track.laps} laps per race.</span>
            </div>
            <div class="meowterbike-board-grid">
                <span>🥇 Gold</span><strong>${formatRaceTime(state.track.goldTimeMs)}</strong>
                <span>🥈 Silver</span><strong>${formatRaceTime(state.track.silverTimeMs)}</strong>
                <span>🥉 Bronze</span><strong>${formatRaceTime(state.track.bronzeTimeMs)}</strong>
                <span>🎯 Coach</span><strong>${formatRaceTime(target)}</strong>
            </div>
        `;
    }

    function updateStatus(now) {
        const host = document.getElementById("meowterbike-status");
        if (!host || !state) return;
        const chips = [];
        chips.push(chipHtml("meowterbike-chip is-speed", displaySpeedKmh(state.player.speed) + " km/h"));
        chips.push(chipHtml("meowterbike-chip is-place", "Lap " + currentLap(state.player) + " / " + state.track.laps));
        chips.push(chipHtml("meowterbike-chip is-place", ordinal(currentPlace()) + " place"));
        if (state.player.stalledUntil > now) chips.push(chipHtml("meowterbike-chip is-danger", "Engine cooling " + formatSecondsLeft(state.player.stalledUntil, now)));
        else if (state.player.heat > 75) chips.push(chipHtml("meowterbike-chip is-danger", "Heat " + Math.round(state.player.heat) + "%"));
        if (!state.player.airborne && state.player.wheelieAmount > 0.35) chips.push(chipHtml("meowterbike-chip is-air", "Wheelie"));
        if (!state.player.airborne && state.player.launchPrep > 0.35) chips.push(chipHtml("meowterbike-chip is-air", "Jump loaded"));
        if (state.player.airborne) chips.push(chipHtml("meowterbike-chip is-air", "Pitch " + state.player.pitch.toFixed(2)));
        const nextCool = nextCoolingArrow(state.player.distance, Math.round(state.player.lanePos));
        if (nextCool) chips.push(chipHtml("meowterbike-chip is-cool", "Cool arrow in " + Math.max(0, Math.round(nextCool.start - state.player.distance)) + "u"));
        host.innerHTML = chips.join("");
    }

    function chipHtml(className, text) {
        return `<span class="${className}">${escapeHtml(text)}</span>`;
    }

    function renderClassBoard() {
        const host = document.getElementById("meowterbike-class-board");
        if (!host) return;
        const board = getLeaderboards() || {};
        host.innerHTML = `
            <div class="meowterbike-board-header">
                <strong>Leaderboards</strong>
                <span>Each class keeps its own best completed-all-tracks time and top-speed feel.</span>
            </div>
            <div class="meowterbike-board-grid">
                ${SPEED_CLASSES.map(function (speedClass) {
                    return `<span>${escapeHtml(speedClass.label)} · ${escapeHtml(String(speedClass.topSpeedKmh))} km/h</span><strong>${formatRaceTime(board[speedClass.id])}</strong>`;
                }).join("")}
            </div>
        `;
    }

    function syncClassHud() {
        const classLabel = document.getElementById("meowterbike-class");
        const best = document.getElementById("meowterbike-best");
        if (classLabel) classLabel.textContent = speedClassForId(selectedClassId).label;
        if (best) best.textContent = formatRaceTime(getHighScore(selectedClassId));
    }

    function nextCoolingArrow(distance, lane) {
        for (let i = 0; i < state.track.obstacles.length; i++) {
            const obstacle = state.track.obstacles[i];
            if (obstacle.type !== "cool") continue;
            if (!hazardAffectsLane(obstacle, lane)) continue;
            if (obstacle.start >= distance) return obstacle;
        }
        return null;
    }

    function currentPlace() {
        const all = [state.player].concat(state.rivals);
        const sorted = all.slice().sort(function (a, b) {
            if (a.finished && b.finished) return a.finishTimeMs - b.finishTimeMs;
            if (a.finished) return -1;
            if (b.finished) return 1;
            return b.distance - a.distance;
        });
        return 1 + sorted.findIndex(function (bike) { return bike.id === state.player.id; });
    }

    function currentLap(bike) {
        if (!state || !state.track || !state.track.lapLength) return 1;
        return Math.min(state.track.laps || 1, Math.floor(Math.max(0, bike.distance) / state.track.lapLength) + 1);
    }

    function updateLapProgress(bike, previousDistance, isPlayer) {
        if (!state || !state.track || !state.track.lapLength) return;
        const previousLap = Math.min(state.track.laps || 1, Math.floor(Math.max(0, previousDistance) / state.track.lapLength) + 1);
        const nextLap = currentLap(bike);
        bike.lap = nextLap;
        if (isPlayer && nextLap > previousLap && nextLap <= state.track.laps) {
            addPopup(bike.distance, bike.lanePos, "Lap " + nextLap + "!", "#ffd166");
        }
    }

    function updatePopups(dt) {
        state.popups.forEach(function (popup) { popup.age += dt; });
        state.popups = state.popups.filter(function (popup) { return popup.age < popup.ttl; });
    }

    function addPopup(distance, lanePos, text, color) {
        state.popups.push({
            distance: distance,
            lanePos: lanePos,
            text: text,
            color: color,
            age: 0,
            ttl: 1000
        });
    }

    function draw(now) {
        if (!ctx || !state) return;
        drawBackground();
        drawTrackSurface();
        drawObstacles();
        drawRiders();
        drawHudOverlays(now);
    }

    function drawBackground() {
        const grass = ctx.createLinearGradient(0, 0, 0, H);
        grass.addColorStop(0, "#79b35f");
        grass.addColorStop(1, "#5f954a");
        ctx.fillStyle = grass;
        ctx.fillRect(0, 0, W, H);

        const stripeOffset = (state.cameraDistance * 0.18) % 160;
        for (let x = -160 + stripeOffset; x < W + 160; x += 160) {
            ctx.fillStyle = "rgba(255,255,255,0.06)";
            ctx.fillRect(x, 0, 78, H);
        }

        ctx.fillStyle = "rgba(44, 82, 36, 0.14)";
        for (let i = 0; i < 5; i++) {
            const y = 54 + i * 88;
            const shift = (state.cameraDistance * (0.08 + i * 0.01)) % 220;
            ctx.beginPath();
            ctx.moveTo(-80, y + 18);
            for (let x = -80; x <= W + 100; x += 110) {
                ctx.quadraticCurveTo(x + 44 - shift * 0.1, y - 16, x + 110, y + 18);
            }
            ctx.lineTo(W + 100, y + 40);
            ctx.lineTo(-80, y + 40);
            ctx.closePath();
            ctx.fill();
        }
    }

    function drawTrackSurface() {
        const nearDistance = state.cameraDistance;
        const farDistance = state.cameraDistance + VIEW_DISTANCE;

        fillQuad(roadQuad(nearDistance, farDistance, -ROAD_SHOULDER_FRAC, 0), "#77995d");
        fillQuad(roadQuad(nearDistance, farDistance, 1, 1 + ROAD_SHOULDER_FRAC), "#769a60");

        const shadowQuad = [
            offsetPoint(roadPoint(nearDistance, 0, 0), 14, 14),
            offsetPoint(roadPoint(nearDistance, 1, 0), 20, 20),
            offsetPoint(roadPoint(farDistance, 1, 0), 10, 10),
            offsetPoint(roadPoint(farDistance, 0, 0), 8, 8)
        ];
        fillPolygon(shadowQuad, "rgba(0,0,0,0.16)");

        for (let lane = 0; lane < LANES; lane++) {
            const laneQuad = roadQuad(nearDistance, farDistance, lane / LANES, (lane + 1) / LANES);
            fillQuad(laneQuad, lane % 2 ? "#85715d" : "#937b63");
        }

        drawRoadGuide(0, "#d8c4a8", 4);
        drawRoadGuide(1, "#d6c3a6", 4);
        for (let lane = 1; lane < LANES; lane++) {
            drawRoadGuide(lane / LANES, "rgba(255,255,255,0.18)", 2);
        }

        const markerStep = 240;
        for (let dist = Math.ceil(nearDistance / markerStep) * markerStep; dist <= farDistance; dist += markerStep) {
            const dash = roadQuad(dist, dist + 38, 0.485, 0.515);
            fillQuad(dash, "rgba(255,255,255,0.16)");
        }
    }

    function drawObstacles() {
        const visible = state.track.obstacles.filter(function (obstacle) {
            return obstacle.start + obstacle.length >= state.cameraDistance - 120
                && obstacle.start <= state.cameraDistance + VIEW_DISTANCE + 240;
        }).sort(function (a, b) {
            return b.start - a.start;
        });

        visible.forEach(function (obstacle) {
            if (obstacle.type === "tight") {
                for (let lane = 0; lane < LANES; lane++) {
                    if (obstacle.openLanes.indexOf(lane) !== -1) continue;
                    drawTightBarrier(obstacle, lane);
                }
                return;
            }

            const lanes = Array.isArray(obstacle.lanes) ? obstacle.lanes : [obstacle.lane];
            lanes.forEach(function (lane) {
                if (obstacle.type === "mud") drawMud(obstacle, lane);
                else if (obstacle.type === "cool") drawCoolingArrows(obstacle, lane);
                else if (obstacle.type === "hump") drawSpeedHump(obstacle, lane);
                else if (obstacle.type === "bump") drawBump(obstacle, lane);
                else if (obstacle.type === "ramp") drawRamp(obstacle, lane, normalizeObstaclePower(obstacle));
            });
        });
    }

    function drawMud(obstacle, lane) {
        const quad = laneQuad(obstacle.start, obstacle.start + obstacle.length, lane);
        fillQuad(quad, "#5b3a29");
        strokePolygon(quad, "rgba(255,255,255,0.08)", 1.2);

        const splatCount = Math.max(2, Math.floor(obstacle.length / 160));
        for (let i = 0; i < splatCount; i++) {
            const dist = obstacle.start + obstacle.length * (i + 0.5) / splatCount;
            const point = projectTrackPoint(dist, lane, 0);
            if (point.t < -0.08 || point.t > 1.04) continue;
            const radius = 6 * point.scale;
            ctx.fillStyle = "rgba(255,255,255,0.14)";
            ctx.beginPath();
            ctx.arc(point.x, point.y - 2 * point.scale, radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function drawCoolingArrows(obstacle, lane) {
        const quad = laneQuad(obstacle.start, obstacle.start + obstacle.length, lane);
        fillQuad(quad, "#3da9fc");
        strokePolygon(quad, "rgba(214,245,255,0.35)", 1.4);
        const arrowCount = Math.max(2, Math.floor(obstacle.length / 170));
        for (let i = 0; i < arrowCount; i++) {
            const dist = obstacle.start + obstacle.length * (i + 0.5) / arrowCount;
            const point = projectTrackPoint(dist, lane, 6);
            if (point.t < -0.08 || point.t > 1.04) continue;
            ctx.save();
            ctx.translate(point.x, point.y);
            ctx.scale(point.scale, point.scale);
            ctx.fillStyle = "#d6f5ff";
            ctx.beginPath();
            ctx.moveTo(-8, 2);
            ctx.lineTo(0, -8);
            ctx.lineTo(0, -2);
            ctx.lineTo(10, -2);
            ctx.lineTo(10, 4);
            ctx.lineTo(0, 4);
            ctx.lineTo(0, 10);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    function drawBump(obstacle, lane) {
        const height = 11 + normalizeObstaclePower(obstacle) * 10;
        const mid = obstacle.start + obstacle.length / 2;
        const lead = laneQuad(obstacle.start, mid, lane, 0, height);
        const tail = laneQuad(mid, obstacle.start + obstacle.length, lane, height, 0);
        fillQuad(lead, "#c49a6c");
        fillQuad(tail, "#b7895a");
        strokePolygon(lead, "rgba(255,255,255,0.18)", 1);
        strokePolygon(tail, "rgba(0,0,0,0.12)", 1);
    }

    function drawSpeedHump(obstacle, lane) {
        const visualStart = obstacle.start + obstacle.length * 0.18;
        const visualEnd = obstacle.start + obstacle.length * 0.82;
        const height = 3 + normalizeObstaclePower(obstacle) * 4;
        const mid = visualStart + (visualEnd - visualStart) / 2;
        const lead = laneQuad(visualStart, mid, lane, 0, height);
        const tail = laneQuad(mid, visualEnd, lane, height, 0);
        fillQuad(lead, "#b88d62");
        fillQuad(tail, "#aa7c50");
        strokePolygon(lead, "rgba(255,255,255,0.1)", 0.8);
        strokePolygon(tail, "rgba(0,0,0,0.08)", 0.8);
    }

    function drawRamp(obstacle, lane, power) {
        power = typeof power === "number" ? power : normalizeObstaclePower(obstacle);
        const height = 18 + power * 18;
        const top = laneQuad(obstacle.start, obstacle.start + obstacle.length, lane, 0, height);
        fillQuad(top, "#ffd166");
        strokePolygon(top, "rgba(255,255,255,0.32)", 1.4);
        const lip = laneFace(obstacle.start + obstacle.length, lane, height, "#e2a93a");
        fillQuad(lip, "#e2a93a");
        strokePolygon(lip, "rgba(255,255,255,0.22)", 1);
    }

    function drawTightBarrier(obstacle, lane) {
        const height = 15;
        const top = laneQuad(obstacle.start, obstacle.start + obstacle.length, lane, height, height);
        const frontFace = laneFace(obstacle.start, lane, height);
        const backFace = laneFace(obstacle.start + obstacle.length, lane, height);
        const shadow = top.map(function (point, index) {
            return offsetPoint(point, index < 2 ? 9 : 7, index < 2 ? 10 : 8);
        });

        fillQuad(shadow, "rgba(0,0,0,0.22)");
        fillQuad(frontFace, "#5d5148");
        fillQuad(backFace, "#40362f");
        fillQuad(top, "#8e8071");
        strokePolygon(frontFace, "rgba(255,255,255,0.08)", 1);
        strokePolygon(backFace, "rgba(0,0,0,0.24)", 1);
        strokePolygon(top, "rgba(255,255,255,0.2)", 1.3);

        const seamCount = Math.max(2, Math.floor(obstacle.length / 32));
        for (let i = 1; i < seamCount; i++) {
            const dist = obstacle.start + obstacle.length * i / seamCount;
            const left = roadPoint(dist, lane / LANES, height);
            const right = roadPoint(dist, (lane + 1) / LANES, height);
            ctx.save();
            ctx.strokeStyle = "rgba(58, 50, 43, 0.34)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(left.x, left.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
            ctx.restore();
        }

        const capInsetA = roadQuad(obstacle.start + 6, obstacle.start + obstacle.length - 6, lane / LANES + 0.012, (lane + 1) / LANES - 0.012, height - 4, height - 4);
        strokePolygon(capInsetA, "rgba(235,228,214,0.2)", 1);
    }

    function drawRiders() {
        const bikes = state.rivals.concat([state.player]).slice().sort(function (a, b) {
            return b.distance - a.distance;
        });
        bikes.forEach(function (bike) {
            const ground = projectTrackPoint(bike.distance, bike.lanePos, 0);
            if (ground.t < -0.15 || ground.t > 1.08) return;
            const lift = bike.airborne ? jumpHeight(bike) : 0;
            const body = projectTrackPoint(bike.distance, bike.lanePos, lift);
            drawBike(bike, ground, body);
        });
    }

    function drawBike(bike, ground, body) {
        const scale = body.scale;
        const wheelie = !bike.airborne ? (bike.wheelieAmount || 0) : 0;
        const frontLift = wheelie * 9;
        ctx.save();
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.beginPath();
        ctx.ellipse(ground.x, ground.y + 4 * scale, 18 * scale, 8 * scale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        const angle = bike.airborne ? bike.pitch * 0.1 : -wheelie * 0.12;
        ctx.save();
        ctx.translate(body.x, body.y);
        ctx.scale(scale, scale);
        ctx.rotate(angle);

        ctx.fillStyle = "#2a2a2a";
        ctx.beginPath();
        ctx.ellipse(-18, 0, 6, 10, 0, 0, Math.PI * 2);
        ctx.ellipse(18, -frontLift, 6, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = bike.accent;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-18, 0);
        ctx.lineTo(-6, -6);
        ctx.lineTo(12, -6 - frontLift * 0.5);
        ctx.lineTo(18, -frontLift);
        ctx.lineTo(6, 6);
        ctx.lineTo(-12, 6);
        ctx.lineTo(-18, 0);
        ctx.stroke();

        ctx.fillStyle = bike.bikeColor;
        roundRect(ctx, -18, -7 - frontLift * 0.2, 36, 14, 6);
        ctx.fill();

        ctx.fillStyle = "rgba(255,255,255,0.28)";
        roundRect(ctx, -11, -4 - frontLift * 0.15, 22, 5, 3);
        ctx.fill();

        ctx.strokeStyle = bike.accent;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(12, -4 - frontLift * 0.25);
        ctx.lineTo(24, -8 - frontLift * 0.8);
        ctx.lineTo(26, -frontLift * 0.45);
        ctx.lineTo(24, 8 - frontLift * 0.35);
        ctx.stroke();

        window.drawCanvasCat(ctx, -1, -16 - frontLift * 0.15, 23, {
            primary: bike.primary,
            accent: bike.accent,
            eyeColor: bike.eyeColor,
            ears: bike.id === "player" ? "big" : "normal",
            stripes: bike.stripes
        });

        if (bike.stalledUntil > performance.now()) {
            ctx.fillStyle = "#ff7f51";
            ctx.beginPath();
            ctx.arc(24, -10, 6, 0, Math.PI * 2);
            ctx.fill();
        } else if (bike.heat > 76) {
            ctx.fillStyle = "#ffd166";
            ctx.beginPath();
            ctx.arc(24, -10, 5, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    function drawHudOverlays(now) {
        drawFinishLine();
        drawSpeedMeter();
        drawHeatMeter();
        drawPopups();
        drawProgressBar();
    }

    function drawFinishLine() {
        for (let lap = 1; lap <= state.track.laps; lap++) {
            const lineDistance = state.track.lapLength * lap;
            if (lineDistance < state.cameraDistance - 40 || lineDistance > state.cameraDistance + VIEW_DISTANCE + 120) continue;
            const stripeDepth = 44;
            const rowDepth = stripeDepth / 2;
            for (let row = 0; row < 2; row++) {
                for (let col = 0; col < 8; col++) {
                    if ((row + col) % 2 === 0) {
                        const quad = roadQuad(
                            lineDistance - stripeDepth + row * rowDepth,
                            lineDistance - stripeDepth + (row + 1) * rowDepth,
                            col / 8,
                            (col + 1) / 8
                        );
                        fillQuad(quad, lap === state.track.laps ? "#1a1a1d" : "rgba(26,26,29,0.42)");
                    }
                }
            }
            strokePolygon(
                roadQuad(lineDistance - stripeDepth, lineDistance, 0, 1),
                lap === state.track.laps ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.18)",
                lap === state.track.laps ? 2 : 1.4
            );
        }
    }

    function drawHeatMeter() {
        const x = TRACK_X + TRACK_W - 180;
        const y = 26;
        ctx.fillStyle = "rgba(0,0,0,0.18)";
        roundRect(ctx, x, y, 154, 18, 9);
        ctx.fill();
        const pct = clamp(state.player.heat / MAX_HEAT, 0, 1);
        ctx.fillStyle = pct > 0.82 ? "#ff7f51" : pct > 0.6 ? "#ffd166" : "#5fcfbf";
        roundRect(ctx, x + 2, y + 2, 150 * pct, 14, 7);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText("Heat", x - 44, y + 13);
    }

    function drawSpeedMeter() {
        const x = TRACK_X + 248;
        const y = 26;
        ctx.fillStyle = "rgba(0,0,0,0.18)";
        roundRect(ctx, x, y, 170, 18, 9);
        ctx.fill();
        const kmh = displaySpeedKmh(state.player.speed);
        const topKmh = state.speedClass.topSpeedKmh;
        const pct = clamp(kmh / topKmh, 0, 1);
        ctx.fillStyle = pct > 0.82 ? "#ff7f51" : pct > 0.56 ? "#ffd166" : "#5fcfbf";
        roundRect(ctx, x + 2, y + 2, 166 * pct, 14, 7);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(`Speed ${kmh} km/h`, x + 8, y + 13);
        ctx.textAlign = "right";
        ctx.fillText(`${state.speedClass.label} / ${topKmh}`, x + 162, y + 13);
    }

    function drawProgressBar() {
        const x = TRACK_X;
        const y = 28;
        ctx.fillStyle = "rgba(0,0,0,0.18)";
        roundRect(ctx, x, y, 220, 14, 7);
        ctx.fill();
        const pct = clamp(state.player.distance / state.track.length, 0, 1);
        ctx.fillStyle = "#f4a261";
        roundRect(ctx, x + 2, y + 2, 216 * pct, 10, 5);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(state.track.name, x, y - 6);
    }

    function drawPopups() {
        state.popups.forEach(function (popup) {
            const progress = popup.age / popup.ttl;
            const point = projectTrackPoint(popup.distance, popup.lanePos, 34 + progress * 20);
            if (point.t < -0.12 || point.t > 1.06) return;
            ctx.save();
            ctx.globalAlpha = 1 - progress;
            ctx.fillStyle = popup.color;
            ctx.font = "bold " + Math.max(12, Math.round(16 * point.scale + 4)) + "px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(popup.text, point.x, point.y);
            ctx.restore();
        });
    }

    function roadQuad(startDistance, endDistance, leftFraction, rightFraction, nearLift, farLift) {
        return [
            roadPoint(startDistance, leftFraction, nearLift || 0),
            roadPoint(startDistance, rightFraction, nearLift || 0),
            roadPoint(endDistance, rightFraction, farLift || 0),
            roadPoint(endDistance, leftFraction, farLift || 0)
        ];
    }

    function laneQuad(startDistance, endDistance, lane, nearLift, farLift) {
        return roadQuad(startDistance, endDistance, lane / LANES, (lane + 1) / LANES, nearLift, farLift);
    }

    function laneFace(distance, lane, height) {
        return [
            roadPoint(distance, lane / LANES, 0),
            roadPoint(distance, (lane + 1) / LANES, 0),
            roadPoint(distance, (lane + 1) / LANES, height),
            roadPoint(distance, lane / LANES, height)
        ];
    }

    function drawRoadGuide(fraction, color, width) {
        const near = roadPoint(state.cameraDistance, fraction, 0);
        const far = roadPoint(state.cameraDistance + VIEW_DISTANCE, fraction, 0);
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.setLineDash([12, 10]);
        ctx.beginPath();
        ctx.moveTo(near.x, near.y);
        ctx.lineTo(far.x, far.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
    }

    function roadPoint(distance, fraction, lift) {
        const slice = roadSlice(distance);
        const point = lerpPoint(slice.left, slice.right, clamp(fraction, -0.25, 1.25));
        return {
            x: point.x,
            y: point.y - (lift || 0) * slice.heightScale,
            scale: slice.scale,
            t: slice.raw
        };
    }

    function roadSlice(distance) {
        const raw = (distance - state.cameraDistance) / VIEW_DISTANCE;
        const t = clamp(raw, 0, 1);
        return {
            raw: raw,
            left: lerpPoint(ROAD_NEAR_LEFT, ROAD_FAR_LEFT, t),
            right: lerpPoint(ROAD_NEAR_RIGHT, ROAD_FAR_RIGHT, t),
            scale: 0.94,
            heightScale: 0.72
        };
    }

    function projectTrackPoint(distance, lanePos, lift) {
        const fraction = clamp((lanePos + 0.5) / LANES, 0, 1);
        return roadPoint(distance, fraction, lift || 0);
    }

    function fillQuad(points, color) {
        fillPolygon(points, color);
    }

    function fillPolygon(points, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();
        ctx.fill();
    }

    function strokePolygon(points, color, width) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();
        ctx.stroke();
    }

    function offsetPoint(point, dx, dy) {
        return { x: point.x + dx, y: point.y + dy };
    }

    function jumpHeight(bike) {
        if (!bike.airborne || !bike.airDuration) return 0;
        const t = clamp(bike.airElapsed / bike.airDuration, 0, 1);
        const curve = 4 * t * (1 - t);
        return 18 + curve * (44 + bike.speed * 0.8);
    }

    function renderTimer() {
        if (!state) return;
        const remaining = SESSION.BREAK_MS - SESSION.elapsed();
        const elem = document.getElementById("meowterbike-timer");
        const label = document.getElementById("meowterbike-timer-label");
        if (!elem) return;
        if (remaining > 0) {
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            elem.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
            elem.classList.remove("overtime");
            if (label) label.textContent = "Time left";
        } else {
            const overtime = -remaining;
            const minutes = Math.floor(overtime / 60000);
            const seconds = Math.floor((overtime % 60000) / 1000);
            elem.textContent = `+${minutes}:${String(seconds).padStart(2, "0")}`;
            elem.classList.add("overtime");
            if (label) label.textContent = "Overtime 🔥";
        }
    }

    function formatRaceTime(ms) {
        if (typeof ms !== "number" || !Number.isFinite(ms) || ms <= 0) return "--:--.---";
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const millis = Math.floor(ms % 1000);
        return `${minutes}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(3, "0")}`;
    }

    function formatSecondsLeft(endsAt, now) {
        return `${Math.max(0, Math.ceil((endsAt - now) / 1000))}s`;
    }

    function ordinal(n) {
        if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;
        if (n % 10 === 1) return `${n}st`;
        if (n % 10 === 2) return `${n}nd`;
        if (n % 10 === 3) return `${n}rd`;
        return `${n}th`;
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function approach(value, target, maxDelta) {
        if (value < target) return Math.min(target, value + maxDelta);
        if (value > target) return Math.max(target, value - maxDelta);
        return value;
    }

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function lerpPoint(a, b, t) {
        return {
            x: lerp(a.x, b.x, t),
            y: lerp(a.y, b.y, t)
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

    function buildTracks() {
        return [
            makeTrack("track-1", "Purrside Prairie", "Warm-up jumps, roomy lanes, and kind cooling lines.", 1750, 76000, 69000, 62000, 0, [
                obstacle("bump", 180, 28, { lanes: [1, 2], power: 0.34 }),
                obstacle("cool", 260, 34, { lane: 0 }),
                obstacle("mud", 420, 60, { lane: 3, drag: 22 }),
                obstacle("ramp", 640, 44, { lane: 1, power: 0.68 }),
                obstacle("bump", 870, 26, { lane: 2, power: 0.42 }),
                obstacle("tight", 1080, 80, { openLanes: [1, 2] }),
                obstacle("cool", 1260, 34, { lane: 2 }),
                obstacle("mud", 1440, 56, { lane: 0, drag: 24 }),
                obstacle("ramp", 1570, 48, { lane: 3, power: 0.82 })
            ]),
            makeTrack("track-2", "Whisker Washout", "Mud starts to bite and the squeezes arrive faster.", 2050, 86000, 78000, 71000, 3, [
                obstacle("mud", 210, 70, { lane: 1, drag: 28 }),
                obstacle("cool", 300, 34, { lane: 3 }),
                obstacle("bump", 430, 30, { lanes: [0, 2], power: 0.45 }),
                obstacle("tight", 590, 88, { openLanes: [0, 3] }),
                obstacle("ramp", 810, 46, { lane: 2, power: 0.74 }),
                obstacle("mud", 1010, 64, { lane: 0, drag: 30 }),
                obstacle("cool", 1170, 34, { lane: 1 }),
                obstacle("ramp", 1350, 50, { lane: 1, power: 0.88 }),
                obstacle("tight", 1580, 72, { openLanes: [2, 3] }),
                obstacle("bump", 1760, 30, { lanes: [1, 2], power: 0.4 })
            ]),
            makeTrack("track-3", "Mudball Mile", "Dense muck, chained ramps, and rivals fighting for lane space.", 2320, 96000, 88000, 80000, 6, [
                obstacle("mud", 180, 74, { lane: 2, drag: 34 }),
                obstacle("bump", 310, 26, { lane: 1, power: 0.38 }),
                obstacle("cool", 380, 34, { lane: 0 }),
                obstacle("tight", 560, 96, { openLanes: [1] }),
                obstacle("ramp", 760, 52, { lane: 1, power: 0.92 }),
                obstacle("ramp", 920, 48, { lane: 2, power: 0.84 }),
                obstacle("mud", 1110, 70, { lane: 3, drag: 36 }),
                obstacle("cool", 1260, 34, { lane: 2 }),
                obstacle("tight", 1450, 84, { openLanes: [0, 2] }),
                obstacle("bump", 1670, 30, { lanes: [0, 3], power: 0.46 }),
                obstacle("ramp", 1890, 54, { lane: 0, power: 0.96 }),
                obstacle("mud", 2080, 72, { lane: 1, drag: 38 })
            ]),
            makeTrack("track-4", "Catnip Canyon", "Long jumps, hotter turbo windows, and meaner barrier squeezes.", 2640, 108000, 99000, 90500, 10, [
                obstacle("ramp", 200, 50, { lane: 0, power: 0.94 }),
                obstacle("mud", 360, 74, { lane: 1, drag: 34 }),
                obstacle("tight", 520, 96, { openLanes: [2] }),
                obstacle("cool", 690, 34, { lane: 2 }),
                obstacle("bump", 820, 28, { lanes: [1, 2], power: 0.52 }),
                obstacle("ramp", 980, 56, { lane: 3, power: 1.02 }),
                obstacle("mud", 1160, 82, { lane: 0, drag: 36 }),
                obstacle("tight", 1370, 88, { openLanes: [0, 3] }),
                obstacle("cool", 1530, 34, { lane: 1 }),
                obstacle("ramp", 1710, 52, { lane: 1, power: 0.98 }),
                obstacle("bump", 1920, 28, { lanes: [2, 3], power: 0.48 }),
                obstacle("mud", 2100, 76, { lane: 2, drag: 38 }),
                obstacle("tight", 2320, 92, { openLanes: [1] })
            ]),
            makeTrack("track-5", "Purr Prix Peaks", "Everything at once: chained jumps, cooking engines, and ruthless rivals.", 3010, 121000, 111000, 102000, 14, [
                obstacle("cool", 150, 34, { lane: 0 }),
                obstacle("ramp", 240, 54, { lane: 2, power: 1.0 }),
                obstacle("tight", 430, 102, { openLanes: [1, 2] }),
                obstacle("mud", 620, 86, { lane: 3, drag: 40 }),
                obstacle("bump", 810, 30, { lanes: [0, 2], power: 0.54 }),
                obstacle("ramp", 980, 58, { lane: 1, power: 1.08 }),
                obstacle("cool", 1170, 34, { lane: 3 }),
                obstacle("tight", 1320, 94, { openLanes: [0] }),
                obstacle("mud", 1490, 82, { lane: 1, drag: 40 }),
                obstacle("ramp", 1670, 56, { lane: 3, power: 1.04 }),
                obstacle("bump", 1860, 32, { lanes: [1, 3], power: 0.5 }),
                obstacle("tight", 2040, 98, { openLanes: [2, 3] }),
                obstacle("cool", 2240, 34, { lane: 2 }),
                obstacle("mud", 2420, 88, { lane: 0, drag: 42 }),
                obstacle("ramp", 2610, 60, { lane: 2, power: 1.1 }),
                obstacle("tight", 2810, 96, { openLanes: [1] })
            ])
        ];
    }

    function extraObstaclesForTrack(id) {
        const extras = {
            "track-1": [
                humpSet(320, 3, { lanes: [0, 2] }),
                obstacle("mud", 560, 62, { lane: 4, drag: 24 }),
                humpSet(1180, 2, { lanes: [1, 3] }),
                obstacle("cool", 980, 34, { lane: 4 }),
                obstacle("bump", 1490, 32, { lane: 4, power: 0.44 })
            ],
            "track-2": [
                humpSet(220, 4, { lanes: [2, 4] }),
                obstacle("bump", 360, 28, { lane: 4, power: 0.42 }),
                obstacle("mud", 940, 70, { lane: 4, drag: 28 }),
                humpSet(1420, 1, { lanes: [0, 1] }),
                obstacle("cool", 1650, 34, { lane: 4 })
            ],
            "track-3": [
                humpSet(120, 5, { lanes: [1, 3] }),
                obstacle("cool", 520, 34, { lane: 4 }),
                obstacle("ramp", 1320, 48, { lane: 4, power: 0.82 }),
                humpSet(1730, 2, { lanes: [0, 2, 4] }),
                obstacle("mud", 1760, 76, { lane: 4, drag: 36 })
            ],
            "track-4": [
                humpSet(280, 3, { lanes: [0, 4] }),
                obstacle("bump", 420, 30, { lane: 4, power: 0.48 }),
                obstacle("cool", 1080, 34, { lane: 4 }),
                humpSet(1772, 4, { lanes: [1, 2] }),
                obstacle("tight", 2460, 86, { openLanes: [1, 3, 4] })
            ],
            "track-5": [
                humpSet(300, 2, { lanes: [0, 2] }),
                obstacle("ramp", 520, 54, { lane: 4, power: 1.02 }),
                obstacle("mud", 1210, 82, { lane: 4, drag: 40 }),
                humpSet(1896, 4, { lanes: [1, 3] }),
                obstacle("tight", 2300, 96, { openLanes: [1, 4] }),
                obstacle("cool", 2870, 34, { lane: 4 })
            ]
        };
        return extras[id] ? extras[id].reduce(function (all, item) {
            if (Array.isArray(item)) return all.concat(item);
            all.push(item);
            return all;
        }, []) : [];
    }

    function humpSet(start, count, opts) {
        const items = [];
        const gap = 36;
        for (let i = 0; i < count; i++) {
            items.push(obstacle("hump", start + i * gap, 30, opts));
        }
        return items;
    }

    function makeTrack(id, name, blurb, length, bronzeTimeMs, silverTimeMs, goldTimeMs, cpuSpeedBias, obstacles) {
        obstacles = obstacles.concat(extraObstaclesForTrack(id)).map(function (item, index) {
            return Object.assign(
                {
                    id: `${id}-${index}`,
                },
                item,
                {
                    start: item.start * TRACK_LENGTH_SCALE,
                    length: item.type === "tight" ? TIGHT_BARRIER_LENGTH : item.length * TRACK_LENGTH_SCALE,
                    power: normalizeObstaclePower(item)
                }
            );
        });
        return {
            id: id,
            name: name,
            blurb: blurb,
            length: length * TRACK_LENGTH_SCALE,
            bronzeTimeMs: bronzeTimeMs * TRACK_TIME_SCALE,
            silverTimeMs: silverTimeMs * TRACK_TIME_SCALE,
            goldTimeMs: goldTimeMs * TRACK_TIME_SCALE,
            cpuSpeedBias: cpuSpeedBias,
            obstacles: obstacles
        };
    }

    function obstacle(type, start, length, opts) {
        return Object.assign({ type: type, start: start, length: length }, opts || {});
    }

    window.Meowterbike = {
        start: start,
        stop: stop
    };
})();
