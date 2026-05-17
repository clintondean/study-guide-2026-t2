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
    const LANES = 4;
    const LANE_H = TRACK_H / LANES;
    const PLAYER_SCREEN_X = 190;
    const PX_PER_UNIT = 0.78;
    const PLAYER_BASE_ACCEL = 28;
    const PLAYER_TURBO_ACCEL = 42;
    const PLAYER_DRAG = 18;
    const PLAYER_MAX_SPEED = 52;
    const PLAYER_TURBO_SPEED = 66;
    const CPU_BASE_ACCEL = 24;
    const CPU_TURBO_ACCEL = 36;
    const CPU_DRAG = 14;
    const CPU_MAX_SPEED = 58;
    const CPU_TURBO_SPEED = 66;
    const MAX_HEAT = 100;
    const HEAT_GAIN_PER_SEC = 34;
    const HEAT_COOL_PER_SEC = 16;
    const HEAT_STALL_MS = 2600;
    const COOL_ARROW_RESTORE = 58;
    const CRASH_MS = 1750;
    const LANE_SHIFT_PER_SEC = 7.5;
    const AIR_PITCH_RATE = 2.6;
    const PITCH_SAFE_MIN = -0.28;
    const PITCH_SAFE_MAX = 0.95;
    const COLLISION_DISTANCE = 12;
    const HAZARD_LOOKAHEAD = 120;
    const BONUS_TARGET_DELTA_MS = 8000;
    const TRACK_POINTS = [300, 450, 650, 900, 1200];

    const RIDERS = [
        { id: "player", name: "Meowter", primary: "#f4a261", accent: "#e07a3a", eyeColor: "#2a8a3a", bike: "#ffd166", stripes: true },
        { id: "miso", name: "Miso", primary: "#ff7f51", accent: "#ce4257", eyeColor: "#fff", bike: "#ffb4a2", turboBias: 0.52, laneBias: 0.2 },
        { id: "pepper", name: "Pepper", primary: "#3da9fc", accent: "#1d4ed8", eyeColor: "#fff", bike: "#bfe7ff", turboBias: 0.44, laneBias: 0.5 },
        { id: "mittens", name: "Mittens", primary: "#9b5de5", accent: "#5a189a", eyeColor: "#fff", bike: "#e1d0ff", turboBias: 0.36, laneBias: 0.8 },
        { id: "biscuit", name: "Biscuit", primary: "#5fcfbf", accent: "#1d7a6f", eyeColor: "#fff", bike: "#d6fffb", turboBias: 0.48, laneBias: 0.35 },
        { id: "pudding", name: "Pudding", primary: "#ffd166", accent: "#c8950b", eyeColor: "#1a1a1d", bike: "#fff4bf", turboBias: 0.4, laneBias: 0.65 }
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

    function start(root, opts) {
        stop();
        opts = opts || {};
        rootEl = root;
        onHighScore = opts.onHighScore || null;
        getHighScore = opts.getHighScore || function () { return null; };
        SESSION.start();
        renderShell();
        bindInput();
        beginTour();
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
            tourStartAt: now,
            cumulativeTimeMs: 0,
            trackIndex: 0,
            paused: false,
            finishedTour: false,
            popups: [],
            result: null,
            previousBest: getHighScore()
        };
        startTrack(0, now);
        if (!rafId) rafId = requestAnimationFrame(loop);
        if (canvas) canvas.focus();
    }

    function startTrack(index, now) {
        const track = TRACKS[index];
        state.trackIndex = index;
        state.track = track;
        state.trackStartAt = now;
        state.trackTimeMs = 0;
        state.result = null;
        state.finishedTour = false;
        state.player = freshBike(RIDERS[0], 1, true);
        state.rivals = RIDERS.slice(1).map(function (rider, riderIndex) {
            const bike = freshBike(rider, riderIndex % LANES, false);
            bike.distance = -18 - riderIndex * 11;
            bike.aiTurboBias = rider.turboBias;
            bike.aiLaneBias = rider.laneBias;
            bike.maxSpeed = CPU_MAX_SPEED + track.cpuSpeedBias + riderIndex * 0.7;
            bike.turboSpeed = bike.maxSpeed + 8;
            return bike;
        });
        state.player.distance = 0;
        state.cameraDistance = 0;
        state.trackEventHits = Object.create(null);
        state.lastFrameAt = now;
        state.overlayLocked = false;
        hideOverlay();
        updateHud();
        updateStatus(now);
        renderTimer();
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
            speed: 0,
            heat: 0,
            airborne: false,
            airElapsed: 0,
            airDuration: 0,
            pitch: 0.18,
            crashedUntil: 0,
            stalledUntil: 0,
            finished: false,
            finishTimeMs: 0,
            maxSpeed: isPlayer ? PLAYER_MAX_SPEED : CPU_MAX_SPEED,
            turboSpeed: isPlayer ? PLAYER_TURBO_SPEED : CPU_TURBO_SPEED,
            obstacleHits: Object.create(null)
        };
    }

    function renderShell() {
        rootEl.innerHTML = `
            <a class="back-link" href="#/break">← Switch game</a>
            <header class="break-game-header">
                <div>
                    <h1>🏍️ MeowtorBike</h1>
                    <p class="break-game-blurb">Race cat-cross tracks, nail your landings, and keep your turbo cool enough to chase the podium.</p>
                </div>
                <div class="tetris-timer-wrap">
                    <div class="tetris-timer-label" id="meowterbike-timer-label">Time left</div>
                    <div class="tetris-timer" id="meowterbike-timer">5:00</div>
                </div>
            </header>
            <div class="break-game-stats">
                <div class="tetris-stat tetris-highscore"><span>🏁 Tour best</span><strong id="meowterbike-best">${formatRaceTime(getHighScore())}</strong></div>
                <div class="tetris-stat"><span>Track</span><strong id="meowterbike-track">1 / ${TRACKS.length}</strong></div>
                <div class="tetris-stat"><span>Place</span><strong id="meowterbike-place">6th</strong></div>
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
                    <p class="meowterbike-panel-copy">Finish on the podium to move on. Coach challenge: beat the bronze time by 8 seconds while dodging rivals, mud, and wild landings.</p>
                    <div class="meowterbike-status" id="meowterbike-status"></div>
                    <div class="meowterbike-track-board" id="meowterbike-track-board"></div>
                    <div class="meowterbike-legend">
                        ${legendItem("bump", "Small bumps", "Rattle your speed and punish lazy timing")}
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
            <p class="break-help">Keyboard: <kbd>Z</kbd> accelerate, <kbd>X</kbd> turbo, ↑/↓ switch lanes, ←/→ pitch the bike in air, <kbd>P</kbd> pause.</p>
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

        draw(now);
        rafId = requestAnimationFrame(loop);
    }

    function updateBike(bike, dt, now, isPlayer) {
        if (bike.finished) return;

        if (bike.crashedUntil > now) {
            bike.speed = approach(bike.speed, 0, dt * 0.05);
            coolBike(bike, dt * 0.024);
            smoothLane(bike, dt);
            return;
        }

        if (bike.stalledUntil > now) {
            bike.speed = approach(bike.speed, 0, dt * 0.06);
            coolBike(bike, dt * 0.05);
            smoothLane(bike, dt);
            return;
        }

        const controls = isPlayer ? state.input : bike.aiControls;
        const turboOn = !!controls.turbo && bike.heat < MAX_HEAT;
        const accelOn = !!controls.accel || turboOn;
        const accel = turboOn ? PLAYER_TURBO_ACCEL : PLAYER_BASE_ACCEL;
        const maxSpeed = turboOn ? bike.turboSpeed : bike.maxSpeed;
        const actualAccel = isPlayer ? accel : (turboOn ? CPU_TURBO_ACCEL : CPU_BASE_ACCEL);

        if (accelOn) bike.speed += actualAccel * dt / 1000;
        else bike.speed -= (isPlayer ? PLAYER_DRAG : CPU_DRAG) * dt / 1000;
        bike.speed = clamp(bike.speed, 0, maxSpeed);

        if (turboOn) {
            bike.heat += HEAT_GAIN_PER_SEC * dt / 1000;
            if (bike.heat >= MAX_HEAT) {
                bike.heat = MAX_HEAT;
                bike.stalledUntil = now + HEAT_STALL_MS;
                bike.speed = Math.min(bike.speed, 10);
                if (isPlayer) addPopup(state.player.distance + 12, state.player.lanePos, "OVERHEAT!", "#ff7f51");
            }
        } else {
            coolBike(bike, HEAT_COOL_PER_SEC * dt / 1000);
        }

        const previousDistance = bike.distance;
        if (bike.airborne) {
            updateAirPitch(bike, controls, dt, isPlayer);
            const pitchBonus = 1 + Math.max(0, bike.pitch) * 0.16 - Math.max(0, -bike.pitch) * 0.08;
            bike.distance += bike.speed * dt / 1000 * pitchBonus;
            bike.airElapsed += dt;
            if (bike.airElapsed >= bike.airDuration) landBike(bike, now, isPlayer);
        } else {
            bike.distance += bike.speed * dt / 1000;
        }

        smoothLane(bike, dt);
        applyTrackEffects(bike, previousDistance, now, isPlayer, dt);

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
        if (bike.pitch > 0.3 && bike.pitch < 0.75) bike.speed = Math.min(bike.turboSpeed, bike.speed + 4);
        else bike.speed = Math.max(14, bike.speed * 0.94);
        bike.pitch = 0.12;
    }

    function applyTrackEffects(bike, previousDistance, now, isPlayer, dt) {
        const currentLane = Math.round(bike.lanePos);
        const active = state.track.obstacles;

        for (let i = 0; i < active.length; i++) {
            const obstacle = active[i];
            if (!hazardAffectsLane(obstacle, currentLane)) continue;
            const inZone = bike.distance >= obstacle.start && bike.distance <= obstacle.start + obstacle.length;
            const entered = !bike.obstacleHits[obstacle.id] && previousDistance < obstacle.start && bike.distance >= obstacle.start;

            if (obstacle.type === "mud" && inZone && !bike.airborne) {
                bike.speed = Math.max(8, bike.speed - obstacle.drag * dt / 1000);
            } else if (obstacle.type === "tight" && inZone && !bike.airborne) {
                crashBike(bike, now, isPlayer, "Barriers!");
                bike.obstacleHits[obstacle.id] = true;
            } else if (entered) {
                bike.obstacleHits[obstacle.id] = true;
                if (obstacle.type === "bump" && !bike.airborne) {
                    bike.speed = Math.max(12, bike.speed * 0.88);
                    if (bike.speed > 26) launchBike(bike, obstacle.power || 0.38);
                    if (isPlayer) addPopup(bike.distance, bike.lanePos, "Bump!", "#ffd166");
                } else if (obstacle.type === "ramp" && !bike.airborne) {
                    launchBike(bike, obstacle.power || 0.7);
                    if (isPlayer) addPopup(bike.distance, bike.lanePos, "Launch!", "#bfe7ff");
                } else if (obstacle.type === "cool") {
                    bike.heat = clamp(bike.heat - COOL_ARROW_RESTORE, 0, MAX_HEAT);
                    if (isPlayer) addPopup(bike.distance, bike.lanePos, "Cool down!", "#5fcfbf");
                }
            }
        }
    }

    function launchBike(bike, power) {
        const launchStrength = clamp(bike.speed / bike.turboSpeed, 0.35, 1);
        bike.airborne = true;
        bike.airElapsed = 0;
        bike.airDuration = 420 + power * 260 + launchStrength * 280;
        bike.pitch = 0.2;
    }

    function crashBike(bike, now, isPlayer, text) {
        bike.crashedUntil = now + CRASH_MS;
        bike.stalledUntil = 0;
        bike.airborne = false;
        bike.airElapsed = 0;
        bike.airDuration = 0;
        bike.speed = 0;
        bike.pitch = 0.1;
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

        const laneScores = [];
        for (let lane = 0; lane < LANES; lane++) {
            let score = Math.abs(lane - rival.lanePos) * 4 + Math.abs(lane - rival.aiLaneBias * (LANES - 1));
            score += laneHazardScore(lane, rival.distance);
            const nearby = nearestBikeInLane(lane, rival.distance, rival.id);
            if (nearby && nearby.delta > 0 && nearby.delta < 24) score += 18;
            laneScores.push({ lane: lane, score: score });
        }
        laneScores.sort(function (a, b) { return a.score - b.score; });
        rival.targetLane = laneScores[0].lane;

        const upcoming = nextObstacleForLane(rival.targetLane, rival.distance);
        if (upcoming && upcoming.type === "cool" && rival.heat > 62) {
            rival.targetLane = upcomingLane(upcoming);
        }

        const clearAhead = !upcoming || upcoming.start - rival.distance > 42;
        if (clearAhead && rival.heat < MAX_HEAT * rival.aiTurboBias && rival.speed > rival.maxSpeed * 0.58) {
            controls.turbo = true;
        }
        if (rival.heat > 88) controls.turbo = false;
        if (rival.stalledUntil > now || rival.crashedUntil > now) controls.turbo = false;
    }

    function laneHazardScore(lane, distance) {
        let score = 0;
        for (let i = 0; i < state.track.obstacles.length; i++) {
            const obstacle = state.track.obstacles[i];
            if (!hazardAffectsLane(obstacle, lane)) continue;
            const delta = obstacle.start - distance;
            if (delta < 0 || delta > HAZARD_LOOKAHEAD) continue;
            if (obstacle.type === "mud") score += 16;
            else if (obstacle.type === "tight") score += 28;
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
            if (Math.abs(state.player.lanePos - rival.lanePos) > 0.35) return;
            if (Math.abs(state.player.distance - rival.distance) > COLLISION_DISTANCE) return;
            if (state.player.speed >= rival.speed - 4) crashBike(state.player, now, true, "Rider collision!");
            else state.player.speed = Math.max(10, state.player.speed * 0.72);
            rival.speed = Math.max(8, rival.speed * 0.78);
        });
    }

    function updateCamera() {
        const desired = Math.max(0, state.player.distance - (PLAYER_SCREEN_X - TRACK_X) / PX_PER_UNIT);
        state.cameraDistance = approach(state.cameraDistance, desired, 140);
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
            onHighScore(state.result.totalTimeMs);
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
        const previousBest = getHighScore();
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
            startTrack(state.trackIndex, performance.now());
        });
        const restart = document.getElementById("meowterbike-restart-tour");
        if (restart) restart.addEventListener("click", function () {
            beginTour();
        });
        const next = document.getElementById("meowterbike-next-track");
        if (next) next.addEventListener("click", function () {
            state.cumulativeTimeMs += state.result.trackTimeMs;
            startTrack(state.trackIndex + 1, performance.now());
        });
        const newTour = document.getElementById("meowterbike-new-tour");
        if (newTour) newTour.addEventListener("click", function () {
            beginTour();
        });
    }

    function hideOverlay() {
        const overlay = document.getElementById("meowterbike-overlay");
        if (!overlay) return;
        overlay.hidden = true;
        overlay.innerHTML = "";
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
            hideOverlay();
        }
    }

    function updateHud() {
        if (!state) return;
        const place = document.getElementById("meowterbike-place");
        const trackTime = document.getElementById("meowterbike-track-time");
        const tourTime = document.getElementById("meowterbike-tour-time");
        const heat = document.getElementById("meowterbike-heat");
        const track = document.getElementById("meowterbike-track");
        const best = document.getElementById("meowterbike-best");
        if (place) place.textContent = ordinal(currentPlace());
        if (trackTime) trackTime.textContent = formatRaceTime(state.trackTimeMs);
        if (tourTime) tourTime.textContent = formatRaceTime(state.cumulativeTimeMs + state.trackTimeMs);
        if (heat) heat.textContent = Math.round(state.player.heat) + "%";
        if (track) track.textContent = (state.trackIndex + 1) + " / " + TRACKS.length;
        if (best) best.textContent = formatRaceTime(getHighScore());
        renderTrackBoard();
    }

    function renderTrackBoard() {
        const host = document.getElementById("meowterbike-track-board");
        if (!host || !state) return;
        const target = Math.max(15000, state.track.bronzeTimeMs - BONUS_TARGET_DELTA_MS);
        host.innerHTML = `
            <div class="meowterbike-board-header">
                <strong>${escapeHtml(state.track.name)}</strong>
                <span>${escapeHtml(state.track.blurb)}</span>
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
        chips.push(chipHtml("meowterbike-chip is-speed", Math.round(state.player.speed) + " mph-ish"));
        chips.push(chipHtml("meowterbike-chip is-place", ordinal(currentPlace()) + " place"));
        if (state.player.stalledUntil > now) chips.push(chipHtml("meowterbike-chip is-danger", "Engine cooling " + formatSecondsLeft(state.player.stalledUntil, now)));
        else if (state.player.heat > 75) chips.push(chipHtml("meowterbike-chip is-danger", "Heat " + Math.round(state.player.heat) + "%"));
        if (state.player.airborne) chips.push(chipHtml("meowterbike-chip is-air", "Pitch " + state.player.pitch.toFixed(2)));
        const nextCool = nextCoolingArrow(state.player.distance, Math.round(state.player.lanePos));
        if (nextCool) chips.push(chipHtml("meowterbike-chip is-cool", "Cool arrow in " + Math.max(0, Math.round(nextCool.start - state.player.distance)) + "u"));
        host.innerHTML = chips.join("");
    }

    function chipHtml(className, text) {
        return `<span class="${className}">${escapeHtml(text)}</span>`;
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
        const sky = ctx.createLinearGradient(0, 0, 0, H);
        sky.addColorStop(0, "#fff0d9");
        sky.addColorStop(1, "#f6b26b");
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, W, H);

        ctx.fillStyle = "rgba(255,255,255,0.25)";
        for (let i = 0; i < 6; i++) {
            const x = ((i * 170) - (state.cameraDistance * 0.18)) % (W + 120) - 60;
            ctx.beginPath();
            ctx.arc(x, 86 + (i % 2) * 8, 34, 0, Math.PI * 2);
            ctx.arc(x + 28, 78, 28, 0, Math.PI * 2);
            ctx.arc(x + 54, 90, 24, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = "#93c47d";
        ctx.fillRect(0, TRACK_Y - 20, W, 18);
        ctx.fillStyle = "#6aa84f";
        ctx.fillRect(0, TRACK_Y + TRACK_H, W, H - (TRACK_Y + TRACK_H));
    }

    function drawTrackSurface() {
        ctx.fillStyle = "#8f7a63";
        roundRect(ctx, TRACK_X, TRACK_Y, TRACK_W, TRACK_H, 18);
        ctx.fill();

        for (let lane = 0; lane < LANES; lane++) {
            const laneY = TRACK_Y + lane * LANE_H;
            ctx.fillStyle = lane % 2 ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.04)";
            ctx.fillRect(TRACK_X, laneY, TRACK_W, LANE_H);
            ctx.fillStyle = "rgba(255,255,255,0.08)";
            ctx.fillRect(TRACK_X + 10, laneY + 6, TRACK_W - 20, 4);
            if (lane > 0) {
                ctx.strokeStyle = "rgba(255,255,255,0.14)";
                ctx.setLineDash([10, 9]);
                ctx.beginPath();
                ctx.moveTo(TRACK_X + 10, laneY);
                ctx.lineTo(TRACK_X + TRACK_W - 10, laneY);
                ctx.stroke();
                ctx.setLineDash([]);
            }
        }
    }

    function drawObstacles() {
        state.track.obstacles.forEach(function (obstacle) {
            const x = worldToScreen(obstacle.start);
            const width = obstacle.length * PX_PER_UNIT;
            if (x + width < TRACK_X - 40 || x > TRACK_X + TRACK_W + 40) return;

            if (obstacle.type === "tight") {
                for (let lane = 0; lane < LANES; lane++) {
                    if (obstacle.openLanes.indexOf(lane) !== -1) continue;
                    const y = laneCenterY(lane) - 18;
                    ctx.fillStyle = "#d2691e";
                    roundRect(ctx, x, y, width, 36, 8);
                    ctx.fill();
                    ctx.fillStyle = "rgba(255,255,255,0.28)";
                    ctx.fillRect(x + 4, y + 5, width - 8, 4);
                }
                return;
            }

            const lanes = Array.isArray(obstacle.lanes) ? obstacle.lanes : [obstacle.lane];
            lanes.forEach(function (lane) {
                const y = laneGroundY(lane);
                if (obstacle.type === "mud") drawMud(x, y, width);
                else if (obstacle.type === "cool") drawCoolingArrows(x, y, width);
                else if (obstacle.type === "bump") drawBump(x, y, width);
                else if (obstacle.type === "ramp") drawRamp(x, y, width, obstacle.power || 0.7);
            });
        });
    }

    function drawMud(x, y, width) {
        ctx.fillStyle = "#5b3a29";
        roundRect(ctx, x, y - 10, width, 20, 8);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.12)";
        for (let i = 0; i < width; i += 18) {
            ctx.beginPath();
            ctx.arc(x + i + 6, y - 2, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function drawCoolingArrows(x, y, width) {
        ctx.fillStyle = "#3da9fc";
        roundRect(ctx, x, y - 11, width, 22, 8);
        ctx.fill();
        ctx.fillStyle = "#d6f5ff";
        for (let i = 0; i < width - 8; i += 18) {
            ctx.beginPath();
            ctx.moveTo(x + i + 5, y);
            ctx.lineTo(x + i + 12, y - 6);
            ctx.lineTo(x + i + 12, y - 2);
            ctx.lineTo(x + i + 19, y - 2);
            ctx.lineTo(x + i + 19, y + 2);
            ctx.lineTo(x + i + 12, y + 2);
            ctx.lineTo(x + i + 12, y + 6);
            ctx.closePath();
            ctx.fill();
        }
    }

    function drawBump(x, y, width) {
        ctx.fillStyle = "#c49a6c";
        ctx.beginPath();
        ctx.moveTo(x, y + 4);
        ctx.quadraticCurveTo(x + width / 2, y - 18, x + width, y + 4);
        ctx.closePath();
        ctx.fill();
    }

    function drawRamp(x, y, width, power) {
        ctx.fillStyle = "#ffd166";
        ctx.beginPath();
        ctx.moveTo(x, y + 8);
        ctx.lineTo(x + width, y + 8);
        ctx.lineTo(x + width, y - 22 - power * 14);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fillRect(x + 4, y - 4, width - 8, 4);
    }

    function drawRiders() {
        const bikes = state.rivals.concat([state.player]).slice().sort(function (a, b) {
            return a.distance - b.distance;
        });
        bikes.forEach(function (bike) {
            const x = worldToScreen(bike.distance);
            if (x < TRACK_X - 50 || x > TRACK_X + TRACK_W + 50) return;
            const groundY = laneGroundY(bike.lanePos);
            const airHeight = bike.airborne ? jumpHeight(bike) : 0;
            drawBike(bike, x, groundY - airHeight);
        });
    }

    function drawBike(bike, x, y) {
        const bodyW = 44;
        const bodyH = 16;
        const wheelR = 10;
        const angle = bike.airborne ? bike.pitch * 0.45 : 0;
        ctx.save();
        ctx.translate(x, y - 10);
        ctx.rotate(angle);

        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.beginPath();
        ctx.arc(-14, 16, wheelR, 0, Math.PI * 2);
        ctx.arc(15, 16, wheelR, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = bike.bikeColor;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-16, 6);
        ctx.lineTo(-2, 0);
        ctx.lineTo(15, 6);
        ctx.lineTo(0, 12);
        ctx.lineTo(-16, 6);
        ctx.stroke();

        ctx.strokeStyle = bike.accent;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-4, 0);
        ctx.lineTo(2, -10);
        ctx.lineTo(14, -10);
        ctx.stroke();

        ctx.fillStyle = bike.bikeColor;
        roundRect(ctx, -12, -1, bodyW, bodyH, 8);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.28)";
        ctx.fillRect(-8, 2, bodyW - 8, 3);

        window.drawCanvasCat(ctx, 2, -18, 24, {
            primary: bike.primary,
            accent: bike.accent,
            eyeColor: bike.eyeColor,
            ears: bike.id === "player" ? "big" : "normal",
            stripes: bike.stripes
        });

        if (bike.stalledUntil > performance.now()) {
            ctx.fillStyle = "#ff7f51";
            ctx.beginPath();
            ctx.arc(18, -6, 6, 0, Math.PI * 2);
            ctx.fill();
        } else if (bike.heat > 76) {
            ctx.fillStyle = "#ffd166";
            ctx.beginPath();
            ctx.arc(18, -6, 5, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    function drawHudOverlays(now) {
        drawFinishLine();
        drawHeatMeter();
        drawPopups();
        drawProgressBar();
    }

    function drawFinishLine() {
        const x = worldToScreen(state.track.length);
        if (x < TRACK_X - 20 || x > TRACK_X + TRACK_W + 20) return;
        ctx.fillStyle = "#fff";
        ctx.fillRect(x - 3, TRACK_Y, 6, TRACK_H);
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 2; col++) {
                if ((row + col) % 2 === 0) {
                    ctx.fillStyle = "#1a1a1d";
                    ctx.fillRect(x - 3 + col * 3, TRACK_Y + row * (TRACK_H / 10), 3, TRACK_H / 10);
                }
            }
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
            const x = worldToScreen(popup.distance);
            const y = laneCenterY(popup.lanePos) - 48 - progress * 18;
            ctx.save();
            ctx.globalAlpha = 1 - progress;
            ctx.fillStyle = popup.color;
            ctx.font = "bold 16px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(popup.text, x, y);
            ctx.restore();
        });
    }

    function worldToScreen(distance) {
        return TRACK_X + PLAYER_SCREEN_X + (distance - state.cameraDistance) * PX_PER_UNIT;
    }

    function laneCenterY(lanePos) {
        return TRACK_Y + LANE_H * lanePos + LANE_H / 2;
    }

    function laneGroundY(lanePos) {
        return laneCenterY(lanePos) + 34;
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

    function makeTrack(id, name, blurb, length, bronzeTimeMs, silverTimeMs, goldTimeMs, cpuSpeedBias, obstacles) {
        obstacles = obstacles.map(function (item, index) {
            return Object.assign({ id: `${id}-${index}` }, item);
        });
        return {
            id: id,
            name: name,
            blurb: blurb,
            length: length,
            bronzeTimeMs: bronzeTimeMs,
            silverTimeMs: silverTimeMs,
            goldTimeMs: goldTimeMs,
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
