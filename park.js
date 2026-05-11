// Park mini-game for the cat clan.
// Pick up to 5 cats; they wander and interact with park items.
// Click an action button to make all cats do something.
// Click-and-drag on a cat to pick it up and reposition.
// Exposes window.Park.

(function () {
    "use strict";

    const PARK_W = 1000;          // logical px
    const PARK_H = 560;
    const CAT_SIZE = 110;
    const TICK_MS = 1500;         // AI tick (each cat picks a new target)
    const MOVE_MS = 2200;         // CSS transition duration for movement

    // Park items (positions, types, behaviour)
    const ITEMS = [
        { id: "tree",   x: 130, y: 120, type: "tree",     icon: "🌳", label: "Big Oak" },
        { id: "tree2",  x: 880, y: 130, type: "tree",     icon: "🌲", label: "Pine" },
        { id: "pond",   x: 770, y: 380, type: "pond",     icon: "💧", label: "Pond" },
        { id: "bench",  x: 480, y: 200, type: "bench",    icon: "🪑", label: "Bench" },
        { id: "flowers",x: 200, y: 410, type: "flowers",  icon: "🌸", label: "Flower bed" },
        { id: "post",   x: 620, y: 110, type: "post",     icon: "🪵", label: "Scratching post" },
        { id: "bowl",   x: 380, y: 440, type: "bowl",     icon: "🥣", label: "Food bowl" },
        { id: "sandbox",x: 90,  y: 320, type: "sandbox",  icon: "🟫", label: "Sandbox" },
        { id: "ball",   x: 540, y: 350, type: "ball",     icon: "⚽", label: "Toy ball" }
    ];

    // Drifting butterflies — simple animation around the park.
    const FLUTTERS = [
        { id: "f1", path: [{x:200,y:200},{x:300,y:170},{x:250,y:260},{x:180,y:230}] },
        { id: "f2", path: [{x:700,y:300},{x:820,y:250},{x:780,y:380},{x:680,y:320}] }
    ];

    let stage;            // root .park-stage element
    let cats = [];        // [{ catId, breed, name, x, y, facing, target, isDragged, el, mood }]
    let tickTimer = null;
    let flutterTimer = null;
    let pointerActive = false;
    let dragRef = null;
    let endsAt = null;    // optional time-limit
    let onExit = null;    // function to call when leaving the park
    let backHref = "#/clan";
    let parkTitle = "🌿 Park Visit";
    let parkBlurb = "Tap a cat to pick them up. Click an action to make all cats react. Have fun!";
    let parkHelp = "Drag a cat by clicking and holding. Each cat has its own personality - watch how they react!";
    let renderPetSvg = null;
    let resolvePet = null;
    let getPetId = null;
    let getPetName = null;
    let reactionPhrase = null;

    /* ---------- Public API ---------- */

    function start(rootEl, selectedCats, opts) {
        opts = opts || {};
        onExit = opts.onExit || null;
        endsAt = opts.endsAt || null;
        backHref = opts.backHref || "#/clan";
        parkTitle = opts.title || "🌿 Park Visit";
        parkBlurb = opts.blurb || "Tap a cat to pick them up. Click an action to make all cats react. Have fun!";
        parkHelp = opts.help || "Drag a cat by clicking and holding. Each cat has its own personality - watch how they react!";
        renderPetSvg = opts.renderPet || function (entry, expression) {
            const breed = window.Clan.findBreed(entry.breedId);
            return breed ? window.Cats.breedSvg(breed.appearance, expression) : "";
        };
        resolvePet = opts.resolvePet || function (entry) { return window.Clan.findBreed(entry.breedId); };
        getPetId = opts.getPetId || function (entry) { return entry.breedId; };
        getPetName = opts.getPetName || function (entry, breed) { return entry.name || (breed && breed.defaultName) || "Cat"; };
        reactionPhrase = opts.reactionPhrase || function (petId, kind) { return window.Clan.reactionPhrase(petId, kind); };
        renderShell(rootEl);
        spawnCats(selectedCats);
        spawnFlutters();
        startTicks();
    }

    function stop() {
        if (tickTimer) clearInterval(tickTimer);
        if (flutterTimer) clearInterval(flutterTimer);
        tickTimer = null;
        flutterTimer = null;
        cats = [];
    }

    /* ---------- Render shell ---------- */

    function renderShell(rootEl) {
        rootEl.innerHTML = `
            <a class="back-link" id="park-exit-link" href="${backHref}">← Back to Pets</a>
            <header class="park-header">
                <h1>${escapeHtml(parkTitle)}</h1>
                <p class="park-blurb">${escapeHtml(parkBlurb)}</p>
            </header>
            <div class="park-actions">
                <button type="button" class="action-btn" data-park="pet">🤚 Pet All</button>
                <button type="button" class="action-btn" data-park="play">🪀 Play Ball</button>
                <button type="button" class="action-btn" data-park="treat">🐟 Treat Time</button>
                <button type="button" class="action-btn" data-park="whistle">📣 Whistle (Come!)</button>
                <button type="button" class="action-btn" data-park="butterfly">🦋 Send a Butterfly</button>
                <button type="button" class="action-btn ghost" data-park="exit">🚪 End Visit</button>
            </div>
            <div class="park-stage-wrap">
                <div class="park-stage" id="park-stage" style="--pw:${PARK_W}px;--ph:${PARK_H}px;">
                    ${renderStaticItems()}
                    ${renderFlutters()}
                </div>
            </div>
            <p class="park-help">${escapeHtml(parkHelp)}</p>
        `;
        stage = document.getElementById("park-stage");

        // Action buttons
        rootEl.querySelectorAll(".action-btn[data-park]").forEach(btn => {
            btn.addEventListener("click", () => parkAction(btn.dataset.park));
        });
    }

    function renderStaticItems() {
        return ITEMS.map(it => `
            <div class="park-item park-item-${it.type}" data-item="${it.id}" style="left:${it.x}px;top:${it.y}px;" title="${it.label}">
                <span class="park-item-icon">${it.icon}</span>
            </div>
        `).join("");
    }

    function renderFlutters() {
        return FLUTTERS.map(f => `
            <div class="park-flutter" id="${f.id}" style="left:${f.path[0].x}px;top:${f.path[0].y}px;">🦋</div>
        `).join("");
    }

    /* ---------- Cats ---------- */

    function spawnCats(selectedCats) {
        // selectedCats: array of { breedId, name, ... } from clan state
        cats = selectedCats.slice(0, 5).map((c, i) => {
            const breed = resolvePet(c);
            if (!breed) return null;
            const startX = 100 + i * 150;
            const startY = PARK_H - 120;
            const obj = {
                catId: getPetId(c),
                name: getPetName(c, breed),
                breed,
                x: startX, y: startY,
                facing: 1,
                target: null,
                isDragged: false,
                action: null,
                mood: "wave"
            };
            const wrap = document.createElement("div");
            wrap.className = "park-cat";
            wrap.style.left = startX + "px";
            wrap.style.top = startY + "px";
            wrap.style.transition = `left ${MOVE_MS}ms ease-in-out, top ${MOVE_MS}ms ease-in-out`;
            wrap.innerHTML = `
                <div class="park-cat-svg">${renderPetSvg(c, "wave")}</div>
                <div class="park-cat-name">${escapeHtml(obj.name)}</div>
            `;
            // Drag handlers
            wrap.addEventListener("pointerdown", e => beginDrag(e, obj, wrap));
            obj.el = wrap;
            stage.appendChild(wrap);
            return obj;
        }).filter(Boolean);
    }

    /* ---------- AI tick ---------- */

    function startTicks() {
        tickTimer = setInterval(tickAll, TICK_MS);
        flutterTimer = setInterval(tickFlutters, 1800);
    }

    function tickAll() {
        cats.forEach(cat => {
            if (cat.isDragged || cat.action === "stay") return;
            // 70% wander to a random spot, 30% target a park item
            let targetX, targetY;
            if (Math.random() < 0.3) {
                const item = ITEMS[Math.floor(Math.random() * ITEMS.length)];
                targetX = item.x + (Math.random() * 60 - 30);
                targetY = item.y + (Math.random() * 40 + 50); // appear near (but below) item
            } else {
                targetX = 60 + Math.random() * (PARK_W - 120);
                targetY = 100 + Math.random() * (PARK_H - 200);
            }
            moveCat(cat, targetX, targetY);
        });
    }

    function tickFlutters() {
        FLUTTERS.forEach((f, idx) => {
            const el = document.getElementById(f.id);
            if (!el) return;
            const next = f.path[(Date.now() / 1800 + idx) % f.path.length | 0];
            el.style.transition = "left 1.6s ease-in-out, top 1.6s ease-in-out";
            el.style.left = next.x + "px";
            el.style.top = next.y + "px";
        });
    }

    function moveCat(cat, x, y, opts) {
        opts = opts || {};
        x = Math.max(20, Math.min(PARK_W - CAT_SIZE - 20, x));
        y = Math.max(40, Math.min(PARK_H - CAT_SIZE - 20, y));
        const dx = x - cat.x;
        cat.facing = dx >= 0 ? 1 : -1;
        cat.x = x;
        cat.y = y;
        cat.el.style.transition = opts.snap ? "none" : `left ${MOVE_MS}ms ease-in-out, top ${MOVE_MS}ms ease-in-out`;
        cat.el.style.left = x + "px";
        cat.el.style.top = y + "px";
        // Flip the cat to face direction of motion
        const inner = cat.el.querySelector(".park-cat-svg");
        if (inner) inner.style.transform = `scaleX(${cat.facing})`;
        // z-index by Y so cats lower on the stage are 'in front'
        cat.el.style.zIndex = String(100 + Math.floor(y));
    }

    /* ---------- Drag ---------- */

    function beginDrag(e, cat, wrap) {
        e.preventDefault();
        cat.isDragged = true;
        wrap.classList.add("is-dragged");
        wrap.style.transition = "none";
        // Disable AI on this cat while dragged
        dragRef = { cat, wrap, startPointerId: e.pointerId };
        wrap.setPointerCapture(e.pointerId);
        // Show happy expression
        const inner = wrap.querySelector(".park-cat-svg");
        if (inner) inner.innerHTML = renderPetSvg({ breedId: cat.catId, petId: cat.catId, name: cat.name, appearance: cat.breed.appearance }, "happy");

        wrap.addEventListener("pointermove", onDragMove);
        wrap.addEventListener("pointerup", onDragEnd);
        wrap.addEventListener("pointercancel", onDragEnd);
    }

    function onDragMove(e) {
        if (!dragRef) return;
        const { cat, wrap } = dragRef;
        if (e.pointerId !== dragRef.startPointerId) return;
        const rect = stage.getBoundingClientRect();
        const sx = (e.clientX - rect.left) / rect.width * PARK_W;
        const sy = (e.clientY - rect.top) / rect.height * PARK_H;
        const x = Math.max(0, Math.min(PARK_W - CAT_SIZE, sx - CAT_SIZE / 2));
        const y = Math.max(0, Math.min(PARK_H - CAT_SIZE, sy - CAT_SIZE / 2));
        cat.x = x;
        cat.y = y;
        wrap.style.left = x + "px";
        wrap.style.top = y + "px";
        wrap.style.zIndex = "9999";
    }

    function onDragEnd(e) {
        if (!dragRef) return;
        const { cat, wrap } = dragRef;
        cat.isDragged = false;
        wrap.classList.remove("is-dragged");
        // Restore AI motion
        wrap.style.transition = `left ${MOVE_MS}ms ease-in-out, top ${MOVE_MS}ms ease-in-out`;
        try { wrap.releasePointerCapture(e.pointerId); } catch (_) {}
        wrap.removeEventListener("pointermove", onDragMove);
        wrap.removeEventListener("pointerup", onDragEnd);
        wrap.removeEventListener("pointercancel", onDragEnd);
        // Restore expression after a beat
        setTimeout(() => {
            const inner = wrap.querySelector(".park-cat-svg");
            if (inner) inner.innerHTML = renderPetSvg({ breedId: cat.catId, petId: cat.catId, name: cat.name, appearance: cat.breed.appearance }, "wave");
        }, 800);
        // Show a quick speech bubble
        showCatSpeech(cat, reactionPhrase(cat.catId, "pet"));
        dragRef = null;
    }

    /* ---------- Park-wide actions ---------- */

    function parkAction(kind) {
        if (kind === "exit") {
            stop();
            if (typeof onExit === "function") onExit();
            return;
        }
        if (kind === "pet") {
            cats.forEach(cat => {
                playExpression(cat, "love", 1500);
                showCatSpeech(cat, reactionPhrase(cat.catId, "pet"));
            });
            return;
        }
        if (kind === "play") {
            // Move ball to a random location, then make all cats target it
            const ballEl = document.querySelector('[data-item="ball"]');
            const newX = 200 + Math.random() * (PARK_W - 400);
            const newY = 200 + Math.random() * (PARK_H - 320);
            if (ballEl) {
                ballEl.style.transition = "left 0.5s, top 0.5s";
                ballEl.style.left = newX + "px";
                ballEl.style.top = newY + "px";
            }
            cats.forEach((cat, i) => {
                moveCat(cat, newX + (i - 2) * 40, newY + 60);
                playExpression(cat, "cheering", 1500);
                showCatSpeech(cat, reactionPhrase(cat.catId, "play"));
            });
            return;
        }
        if (kind === "treat") {
            // All cats run to the food bowl
            const bowl = ITEMS.find(i => i.id === "bowl");
            cats.forEach((cat, i) => {
                moveCat(cat, bowl.x + (i - 2) * 30, bowl.y + 60);
                playExpression(cat, "happy", 1500);
                showCatSpeech(cat, reactionPhrase(cat.catId, "treat"));
            });
            return;
        }
        if (kind === "whistle") {
            // All cats run to the centre-bottom
            cats.forEach((cat, i) => {
                moveCat(cat, PARK_W / 2 + (i - 2) * 80, PARK_H - 130);
                playExpression(cat, "wave", 1200);
                showCatSpeech(cat, reactionPhrase(cat.catId, "chat"));
            });
            return;
        }
        if (kind === "butterfly") {
            // Spawn an extra butterfly near a random cat
            spawnTemporaryFlutter();
            return;
        }
    }

    function playExpression(cat, expr, ms) {
        const inner = cat.el.querySelector(".park-cat-svg");
        if (inner) {
            inner.innerHTML = renderPetSvg({ breedId: cat.catId, petId: cat.catId, name: cat.name, appearance: cat.breed.appearance }, expr);
            inner.classList.add("park-cat-pulse");
        }
        setTimeout(() => {
            if (inner) {
                inner.innerHTML = renderPetSvg({ breedId: cat.catId, petId: cat.catId, name: cat.name, appearance: cat.breed.appearance }, "wave");
                inner.classList.remove("park-cat-pulse");
            }
        }, ms || 1200);
    }

    function showCatSpeech(cat, text) {
        if (!cat || !cat.el) return;
        const old = cat.el.querySelector(".park-speech");
        if (old) old.remove();
        const div = document.createElement("div");
        div.className = "park-speech";
        div.textContent = text;
        cat.el.appendChild(div);
        setTimeout(() => {
            div.classList.add("leaving");
            setTimeout(() => div.remove(), 400);
        }, 1900);
    }

    function spawnFlutters() {
        // existing static flutters are inserted in shell via renderFlutters()
        // their motion is handled by tickFlutters
    }

    function spawnTemporaryFlutter() {
        const id = "tmp-" + Date.now();
        const el = document.createElement("div");
        el.className = "park-flutter park-flutter-temp";
        el.id = id;
        el.textContent = "🦋";
        const sx = 100 + Math.random() * (PARK_W - 200);
        const sy = 100 + Math.random() * (PARK_H - 200);
        el.style.left = sx + "px";
        el.style.top = sy + "px";
        stage.appendChild(el);
        // Make a target cat chase
        if (cats.length) {
            const target = cats[Math.floor(Math.random() * cats.length)];
            // After flutter moves, cat chases
            setTimeout(() => {
                el.style.transition = "left 1s ease, top 1s ease";
                el.style.left = (sx + (Math.random() * 200 - 100)) + "px";
                el.style.top = (sy + (Math.random() * 100 - 50)) + "px";
            }, 100);
            setTimeout(() => moveCat(target, parseFloat(el.style.left), parseFloat(el.style.top)), 200);
            setTimeout(() => playExpression(target, "cheering", 1200), 1500);
        }
        // Remove after 5s
        setTimeout(() => el.remove(), 5000);
    }

    function escapeHtml(s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[c]));
    }

    window.Park = { start, stop };
})();
