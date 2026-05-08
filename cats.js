// Cartoon cat mascots — inline SVG, no external assets.
// Exposes window.Cats with builders for each expression and a popIn() encouragement system.

(function () {
    const PALETTE = {
        ginger: { fur: "#f4a261", belly: "#ffd9b3", stripe: "#e07a3a" },
        grey:   { fur: "#9aa5b1", belly: "#dde3ea", stripe: "#6b7785" },
        cream:  { fur: "#f7e2c7", belly: "#fff4e0", stripe: "#d8b48a" },
        black:  { fur: "#2f2f33", belly: "#4a4a52", stripe: "#1a1a1d" }
    };

    function color(theme) {
        return PALETTE[theme] || PALETTE.ginger;
    }

    // Base cat body builder, shared across expressions.
    // expression: "cheering" | "thinking" | "proud" | "peeking" | "napping" | "wave"
    function svg(expression, theme) {
        const c = color(theme || "ginger");
        const eyes = expression === "napping" ? closedEyes() : openEyes(expression);
        const mouth = mouthFor(expression);
        const arms = armsFor(expression, c);
        const accessory = expression === "thinking" ? thinkingBubble() : "";
        const tailWag = expression === "cheering" || expression === "proud";

        return `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="cat-svg ${expression}" aria-hidden="true">
    <defs>
        <radialGradient id="furGrad-${theme}" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="${c.fur}" stop-opacity="1"/>
            <stop offset="100%" stop-color="${c.stripe}" stop-opacity="1"/>
        </radialGradient>
    </defs>
    <!-- Tail -->
    <path d="M 145 150 Q 175 130 170 95 Q 168 80 158 78"
          stroke="${c.stripe}" stroke-width="14" fill="none" stroke-linecap="round"
          class="${tailWag ? 'tail-wag' : ''}"/>
    <!-- Body -->
    <ellipse cx="100" cy="135" rx="55" ry="45" fill="url(#furGrad-${theme})"/>
    <ellipse cx="100" cy="145" rx="35" ry="28" fill="${c.belly}"/>
    <!-- Head -->
    <circle cx="100" cy="80" r="48" fill="url(#furGrad-${theme})"/>
    <!-- Ears -->
    <polygon points="60,55 70,20 88,48" fill="${c.fur}"/>
    <polygon points="140,55 130,20 112,48" fill="${c.fur}"/>
    <polygon points="68,45 73,28 82,45" fill="#ffb3c1"/>
    <polygon points="132,45 127,28 118,45" fill="#ffb3c1"/>
    <!-- Stripes -->
    <path d="M 70 60 Q 75 50 80 60" stroke="${c.stripe}" stroke-width="3" fill="none"/>
    <path d="M 120 60 Q 125 50 130 60" stroke="${c.stripe}" stroke-width="3" fill="none"/>
    <path d="M 95 45 Q 100 35 105 45" stroke="${c.stripe}" stroke-width="3" fill="none"/>
    <!-- Eyes -->
    ${eyes}
    <!-- Nose -->
    <path d="M 95 88 L 105 88 L 100 94 Z" fill="#ff8da1"/>
    <!-- Whiskers -->
    <line x1="55" y1="92" x2="80" y2="93" stroke="#5b5b5b" stroke-width="1.2"/>
    <line x1="55" y1="98" x2="80" y2="97" stroke="#5b5b5b" stroke-width="1.2"/>
    <line x1="120" y1="93" x2="145" y2="92" stroke="#5b5b5b" stroke-width="1.2"/>
    <line x1="120" y1="97" x2="145" y2="98" stroke="#5b5b5b" stroke-width="1.2"/>
    <!-- Mouth -->
    ${mouth}
    <!-- Arms (drawn over body) -->
    ${arms}
    ${accessory}
</svg>`.trim();
    }

    function openEyes(expression) {
        const happy = expression === "cheering" || expression === "proud" || expression === "wave";
        if (happy) {
            return `
        <path d="M 78 78 Q 85 70 92 78" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M 108 78 Q 115 70 122 78" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        }
        // Round eyes for thinking / peeking
        return `
    <circle cx="85" cy="80" r="6" fill="#222"/>
    <circle cx="115" cy="80" r="6" fill="#222"/>
    <circle cx="87" cy="78" r="2" fill="#fff"/>
    <circle cx="117" cy="78" r="2" fill="#fff"/>`;
    }

    function closedEyes() {
        return `
    <path d="M 78 80 Q 85 84 92 80" stroke="#222" stroke-width="2.5" fill="none"/>
    <path d="M 108 80 Q 115 84 122 80" stroke="#222" stroke-width="2.5" fill="none"/>
    <text x="135" y="55" font-family="serif" font-size="22" fill="#888">z</text>
    <text x="148" y="42" font-family="serif" font-size="18" fill="#aaa">z</text>`;
    }

    function mouthFor(expression) {
        if (expression === "cheering" || expression === "wave") {
            return `<path d="M 88 100 Q 100 115 112 100" stroke="#222" stroke-width="2.5" fill="#ff8da1"/>`;
        }
        if (expression === "thinking") {
            return `<path d="M 92 102 Q 100 100 108 102" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
        }
        if (expression === "napping") {
            return `<path d="M 92 102 Q 100 105 108 102" stroke="#222" stroke-width="2" fill="none"/>`;
        }
        // proud / peeking — slight smile
        return `<path d="M 90 100 Q 100 108 110 100" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
    }

    function armsFor(expression, c) {
        if (expression === "cheering") {
            return `
    <ellipse cx="55" cy="105" rx="10" ry="14" fill="${c.fur}" transform="rotate(-30 55 105)" class="arm-cheer-l"/>
    <ellipse cx="145" cy="105" rx="10" ry="14" fill="${c.fur}" transform="rotate(30 145 105)" class="arm-cheer-r"/>`;
        }
        if (expression === "thinking") {
            return `
    <ellipse cx="80" cy="115" rx="9" ry="12" fill="${c.fur}" transform="rotate(20 80 115)"/>
    <ellipse cx="115" cy="92" rx="8" ry="11" fill="${c.fur}"/>`;
        }
        if (expression === "wave") {
            return `
    <ellipse cx="148" cy="92" rx="9" ry="13" fill="${c.fur}" transform="rotate(20 148 92)" class="arm-wave"/>`;
        }
        if (expression === "proud") {
            return `
    <ellipse cx="68" cy="135" rx="11" ry="9" fill="${c.fur}" transform="rotate(-15 68 135)"/>
    <ellipse cx="132" cy="135" rx="11" ry="9" fill="${c.fur}" transform="rotate(15 132 135)"/>`;
        }
        return "";
    }

    function thinkingBubble() {
        return `
    <circle cx="160" cy="50" r="4" fill="#fff" stroke="#888" stroke-width="1"/>
    <circle cx="170" cy="38" r="6" fill="#fff" stroke="#888" stroke-width="1"/>
    <ellipse cx="180" cy="22" rx="14" ry="11" fill="#fff" stroke="#888" stroke-width="1"/>
    <text x="174" y="26" font-family="sans-serif" font-size="11" fill="#444">?</text>`;
    }

    // Encouragement phrases
    const PHRASES = {
        correct: [
            "Pawsome! You got it!",
            "Purr-fect answer!",
            "You're feline good!",
            "Meow-velous!",
            "Cat-tastic work!",
            "Paw-sitively brilliant!",
            "You're the cat's whiskers!",
            "Right on the dot!"
        ],
        wrong: [
            "Don't fur-get — try again!",
            "Even cats slip sometimes. Keep going!",
            "No need to hiss-itate — review and retry!",
            "Almost! Re-paws and try again.",
            "Close one. Take another swipe at it!"
        ],
        finish: [
            "You're un-fur-gettable!",
            "Take a cat-nap — you earned it!",
            "Hiss-toric performance!",
            "Look at you go, study-cat!",
            "I'm so paw-d of you!"
        ],
        streak: [
            "You're on a hot streak!",
            "Three in a row — claw-some!",
            "Unstoppable! Keep going!"
        ],
        idle: [
            "Need a study buddy? I'm here.",
            "You've got this!",
            "One question at a time."
        ]
    };

    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    // Pop-in cat from the side of the screen.
    // opts: { expression, theme, message, duration, side: 'left'|'right' }
    function popIn(opts) {
        opts = opts || {};
        const expression = opts.expression || "cheering";
        const theme = opts.theme || pickTheme();
        const message = opts.message || pick(PHRASES.correct);
        const duration = opts.duration || 2800;
        const side = opts.side || (Math.random() > 0.5 ? "left" : "right");

        const popDiv = document.createElement("div");
        popDiv.className = `cat-pop cat-pop-${side} cat-pop-${expression}`;
        popDiv.innerHTML = `
            <div class="cat-pop-inner">
                ${svg(expression, theme)}
                <div class="cat-bubble">${escapeHtml(message)}</div>
            </div>
        `;
        document.body.appendChild(popDiv);

        // Force layout then add visible class for transition
        requestAnimationFrame(() => popDiv.classList.add("cat-pop-show"));

        setTimeout(() => {
            popDiv.classList.remove("cat-pop-show");
            popDiv.classList.add("cat-pop-leave");
            setTimeout(() => popDiv.remove(), 500);
        }, duration);
    }

    function pickTheme() {
        const themes = Object.keys(PALETTE);
        return themes[Math.floor(Math.random() * themes.length)];
    }

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[c]));
    }

    function celebrate(scoreRatio) {
        // scoreRatio 0..1
        let exp, msg;
        if (scoreRatio >= 0.9) { exp = "cheering"; msg = pick(PHRASES.finish); }
        else if (scoreRatio >= 0.7) { exp = "proud"; msg = "Pawsome work — keep practising!"; }
        else if (scoreRatio >= 0.5) { exp = "wave"; msg = "Solid effort — let's review and try again!"; }
        else { exp = "thinking"; msg = "Don't fur-get, every retry is progress."; }
        return { expression: exp, message: msg, theme: pickTheme() };
    }

    /* =========================================================
       BREED-AWARE SVG — used by the cat clan.
       Appearance schema:
         {
           primary, secondary, accent, eyeColor,
           pattern: 'solid'|'stripes'|'tuxedo'|'calico'|'tortie'|'points'|'spots',
           fluff:   'short'|'medium'|'long'|'hairless',
           earStyle:'normal'|'folded'|'tufted'|'big'|'small'|'curl',
           tail:    'long'|'short'|'none',
           noseColor (optional)
         }
       ========================================================= */

    let _idCounter = 0;
    const _uid = () => "cgrad-" + (++_idCounter);

    function breedSvg(appearance, expression, opts) {
        opts = opts || {};
        expression = expression || "wave";
        const a = Object.assign({
            primary: "#f4a261", secondary: "#ffd9b3", accent: "#e07a3a",
            eyeColor: "#2a8a3a",
            pattern: "stripes", fluff: "medium", earStyle: "normal", tail: "long",
            noseColor: "#ff8da1"
        }, appearance || {});

        const grad = _uid();
        const fluffOutline = renderFluffOutline(a);
        const tail = renderTail(a, expression);
        const body = renderBody(a, grad);
        const head = renderHead(a, grad);
        const ears = renderEars(a);
        const pattern = renderPattern(a);
        const eyes = renderBreedEyes(expression, a.eyeColor);
        const mouth = mouthFor(expression);
        const arms = armsForBreed(expression, a);
        const accessory = expression === "thinking" ? thinkingBubble() : "";
        const blush = expression === "happy" || expression === "love" ? renderBlush() : "";
        const hearts = expression === "love" ? renderHearts() : "";

        return `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="cat-svg breed-cat ${expression}" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    <defs>
        <radialGradient id="${grad}" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="${a.primary}" stop-opacity="1"/>
            <stop offset="100%" stop-color="${a.accent}" stop-opacity="1"/>
        </radialGradient>
    </defs>
    ${fluffOutline}
    ${tail}
    ${body}
    ${head}
    ${ears}
    ${pattern}
    <!-- Nose -->
    <path d="M 95 88 L 105 88 L 100 94 Z" fill="${a.noseColor}"/>
    <!-- Whiskers -->
    <line x1="55" y1="92" x2="80" y2="93" stroke="#5b5b5b" stroke-width="1.2"/>
    <line x1="55" y1="98" x2="80" y2="97" stroke="#5b5b5b" stroke-width="1.2"/>
    <line x1="120" y1="93" x2="145" y2="92" stroke="#5b5b5b" stroke-width="1.2"/>
    <line x1="120" y1="97" x2="145" y2="98" stroke="#5b5b5b" stroke-width="1.2"/>
    ${eyes}
    ${mouth}
    ${arms}
    ${blush}
    ${hearts}
    ${accessory}
</svg>`.trim();
    }

    function renderFluffOutline(a) {
        if (a.fluff !== "long") return "";
        // Bigger fuzzy outline behind the body & head
        return `
        <ellipse cx="100" cy="138" rx="62" ry="52" fill="${a.primary}" opacity="0.55"/>
        <circle cx="100" cy="78" r="56" fill="${a.primary}" opacity="0.55"/>`;
    }

    function renderTail(a, expression) {
        if (a.tail === "none") return "";
        const wag = expression === "cheering" || expression === "proud" || expression === "happy" || expression === "love";
        if (a.tail === "short") {
            return `<path d="M 152 152 Q 164 148 162 138" stroke="${a.accent}" stroke-width="14" fill="none" stroke-linecap="round" class="${wag ? 'tail-wag' : ''}"/>`;
        }
        // Long tail (default)
        const fluffyTail = a.fluff === "long";
        const stroke = fluffyTail ? 18 : 14;
        return `<path d="M 145 150 Q 175 130 170 95 Q 168 80 158 78"
                      stroke="${a.accent}" stroke-width="${stroke}" fill="none" stroke-linecap="round"
                      class="${wag ? 'tail-wag' : ''}"/>`;
    }

    function renderBody(a, grad) {
        const fillRef = a.fluff === "hairless" ? a.primary : `url(#${grad})`;
        return `
        <ellipse cx="100" cy="135" rx="55" ry="45" fill="${fillRef}"/>
        <ellipse cx="100" cy="145" rx="35" ry="28" fill="${a.secondary}"/>`;
    }

    function renderHead(a, grad) {
        const fillRef = a.fluff === "hairless" ? a.primary : `url(#${grad})`;
        return `<circle cx="100" cy="80" r="48" fill="${fillRef}"/>`;
    }

    function renderEars(a) {
        const inner = "#ffb3c1";
        if (a.earStyle === "folded") {
            return `
        <path d="M 60 55 L 70 35 L 88 50 Q 78 56 60 55 Z" fill="${a.primary}"/>
        <path d="M 140 55 L 130 35 L 112 50 Q 122 56 140 55 Z" fill="${a.primary}"/>
        <path d="M 70 45 Q 76 50 84 50" stroke="${inner}" stroke-width="2" fill="none"/>
        <path d="M 130 45 Q 124 50 116 50" stroke="${inner}" stroke-width="2" fill="none"/>`;
        }
        if (a.earStyle === "tufted") {
            return `
        <polygon points="60,55 70,20 88,48" fill="${a.primary}"/>
        <polygon points="140,55 130,20 112,48" fill="${a.primary}"/>
        <polygon points="68,45 73,28 82,45" fill="${inner}"/>
        <polygon points="132,45 127,28 118,45" fill="${inner}"/>
        <path d="M 70 20 Q 65 12 70 6" stroke="${a.primary}" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M 73 22 Q 76 14 80 10" stroke="${a.primary}" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M 130 20 Q 135 12 130 6" stroke="${a.primary}" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M 127 22 Q 124 14 120 10" stroke="${a.primary}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
        }
        if (a.earStyle === "big") {
            return `
        <polygon points="55,58 65,8 90,50" fill="${a.primary}"/>
        <polygon points="145,58 135,8 110,50" fill="${a.primary}"/>
        <polygon points="65,48 69,18 80,46" fill="${inner}"/>
        <polygon points="135,48 131,18 120,46" fill="${inner}"/>`;
        }
        if (a.earStyle === "small") {
            return `
        <polygon points="68,55 76,38 88,52" fill="${a.primary}"/>
        <polygon points="132,55 124,38 112,52" fill="${a.primary}"/>
        <polygon points="74,49 77,42 82,49" fill="${inner}"/>
        <polygon points="126,49 123,42 118,49" fill="${inner}"/>`;
        }
        if (a.earStyle === "curl") {
            return `
        <path d="M 60 55 Q 60 25 78 30 Q 80 38 88 48 Q 75 60 60 55 Z" fill="${a.primary}"/>
        <path d="M 140 55 Q 140 25 122 30 Q 120 38 112 48 Q 125 60 140 55 Z" fill="${a.primary}"/>
        <path d="M 70 45 Q 75 35 82 45" stroke="${inner}" stroke-width="2" fill="none"/>
        <path d="M 130 45 Q 125 35 118 45" stroke="${inner}" stroke-width="2" fill="none"/>`;
        }
        // normal
        return `
        <polygon points="60,55 70,20 88,48" fill="${a.primary}"/>
        <polygon points="140,55 130,20 112,48" fill="${a.primary}"/>
        <polygon points="68,45 73,28 82,45" fill="${inner}"/>
        <polygon points="132,45 127,28 118,45" fill="${inner}"/>`;
    }

    function renderPattern(a) {
        const accent = a.accent;
        if (a.pattern === "stripes") {
            return `
        <path d="M 70 60 Q 75 50 80 60" stroke="${accent}" stroke-width="3" fill="none"/>
        <path d="M 120 60 Q 125 50 130 60" stroke="${accent}" stroke-width="3" fill="none"/>
        <path d="M 95 45 Q 100 35 105 45" stroke="${accent}" stroke-width="3" fill="none"/>
        <path d="M 60 130 Q 70 125 80 132" stroke="${accent}" stroke-width="3" fill="none" opacity="0.7"/>
        <path d="M 120 132 Q 130 125 140 130" stroke="${accent}" stroke-width="3" fill="none" opacity="0.7"/>`;
        }
        if (a.pattern === "tuxedo") {
            // black base, white chest/chin/paws
            return `
        <ellipse cx="100" cy="105" rx="22" ry="14" fill="#fff"/>
        <path d="M 95 60 Q 100 55 105 60 Q 105 70 100 70 Q 95 70 95 60 Z" fill="#fff"/>
        <ellipse cx="80" cy="170" rx="10" ry="6" fill="#fff"/>
        <ellipse cx="120" cy="170" rx="10" ry="6" fill="#fff"/>`;
        }
        if (a.pattern === "calico") {
            // base white, orange + black patches scattered
            const c1 = a.calicoColors ? a.calicoColors[0] : "#f4a261";
            const c2 = a.calicoColors ? a.calicoColors[1] : "#2f2f33";
            return `
        <path d="M 60 60 Q 75 50 90 60 Q 88 75 70 75 Q 58 70 60 60 Z" fill="${c1}"/>
        <path d="M 105 50 Q 130 50 135 70 Q 120 75 110 70 Q 100 65 105 50 Z" fill="${c2}"/>
        <ellipse cx="75" cy="130" rx="20" ry="14" fill="${c1}" opacity="0.85"/>
        <ellipse cx="130" cy="125" rx="18" ry="12" fill="${c2}" opacity="0.85"/>
        <path d="M 90 105 Q 110 100 115 115 Q 105 120 95 118 Q 88 115 90 105 Z" fill="${c2}" opacity="0.7"/>`;
        }
        if (a.pattern === "tortie") {
            // black with orange streaks
            const orange = "#f4a261";
            return `
        <path d="M 65 70 Q 80 60 90 75 Q 75 80 65 70 Z" fill="${orange}" opacity="0.85"/>
        <path d="M 110 55 Q 130 60 130 75 Q 115 80 110 55 Z" fill="${orange}" opacity="0.85"/>
        <path d="M 70 130 Q 95 120 105 135 Q 80 145 70 130 Z" fill="${orange}" opacity="0.8"/>
        <path d="M 120 130 Q 140 125 145 145 Q 130 150 120 130 Z" fill="${orange}" opacity="0.8"/>`;
        }
        if (a.pattern === "points") {
            // darker face mask, ear tips, paws, tail tip
            const dark = a.accent;
            return `
        <ellipse cx="100" cy="92" rx="22" ry="14" fill="${dark}" opacity="0.55"/>
        <polygon points="60,55 68,30 82,48" fill="${dark}" opacity="0.55"/>
        <polygon points="140,55 132,30 118,48" fill="${dark}" opacity="0.55"/>
        <ellipse cx="80" cy="170" rx="10" ry="6" fill="${dark}" opacity="0.55"/>
        <ellipse cx="120" cy="170" rx="10" ry="6" fill="${dark}" opacity="0.55"/>`;
        }
        if (a.pattern === "spots") {
            const spot = a.accent;
            return `
        <circle cx="78" cy="65" r="3" fill="${spot}"/>
        <circle cx="92" cy="58" r="3" fill="${spot}"/>
        <circle cx="115" cy="62" r="3" fill="${spot}"/>
        <circle cx="125" cy="72" r="3" fill="${spot}"/>
        <circle cx="70" cy="125" r="4" fill="${spot}"/>
        <circle cx="85" cy="120" r="4" fill="${spot}"/>
        <circle cx="120" cy="118" r="4" fill="${spot}"/>
        <circle cx="138" cy="125" r="4" fill="${spot}"/>
        <circle cx="100" cy="155" r="4" fill="${spot}"/>
        <circle cx="80" cy="148" r="3" fill="${spot}"/>
        <circle cx="118" cy="148" r="3" fill="${spot}"/>`;
        }
        return ""; // solid
    }

    function renderBreedEyes(expression, eyeColor) {
        if (expression === "napping") return closedEyes();
        const happy = expression === "cheering" || expression === "proud" || expression === "wave" || expression === "happy" || expression === "love";
        if (happy) {
            return `
        <path d="M 78 78 Q 85 70 92 78" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M 108 78 Q 115 70 122 78" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        }
        // Round eyes with breed-specific iris colour
        return `
    <ellipse cx="85" cy="80" rx="6" ry="7" fill="${eyeColor}"/>
    <ellipse cx="115" cy="80" rx="6" ry="7" fill="${eyeColor}"/>
    <ellipse cx="85" cy="80" rx="2" ry="6" fill="#222"/>
    <ellipse cx="115" cy="80" rx="2" ry="6" fill="#222"/>
    <circle cx="87" cy="78" r="1.5" fill="#fff"/>
    <circle cx="117" cy="78" r="1.5" fill="#fff"/>`;
    }

    function armsForBreed(expression, a) {
        const fur = a.primary;
        if (expression === "cheering") {
            return `
    <ellipse cx="55" cy="105" rx="10" ry="14" fill="${fur}" transform="rotate(-30 55 105)" class="arm-cheer-l"/>
    <ellipse cx="145" cy="105" rx="10" ry="14" fill="${fur}" transform="rotate(30 145 105)" class="arm-cheer-r"/>`;
        }
        if (expression === "thinking") {
            return `
    <ellipse cx="80" cy="115" rx="9" ry="12" fill="${fur}" transform="rotate(20 80 115)"/>
    <ellipse cx="115" cy="92" rx="8" ry="11" fill="${fur}"/>`;
        }
        if (expression === "wave" || expression === "happy" || expression === "love") {
            return `
    <ellipse cx="148" cy="92" rx="9" ry="13" fill="${fur}" transform="rotate(20 148 92)" class="arm-wave"/>`;
        }
        if (expression === "proud") {
            return `
    <ellipse cx="68" cy="135" rx="11" ry="9" fill="${fur}" transform="rotate(-15 68 135)"/>
    <ellipse cx="132" cy="135" rx="11" ry="9" fill="${fur}" transform="rotate(15 132 135)"/>`;
        }
        return "";
    }

    function renderBlush() {
        return `
    <ellipse cx="74" cy="98" rx="6" ry="3" fill="#ff9eb4" opacity="0.7"/>
    <ellipse cx="126" cy="98" rx="6" ry="3" fill="#ff9eb4" opacity="0.7"/>`;
    }

    function renderHearts() {
        return `
    <text x="35" y="55" font-size="22" class="float-heart-l">💗</text>
    <text x="155" y="40" font-size="20" class="float-heart-r">💗</text>`;
    }

    window.Cats = {
        svg,
        breedSvg,
        popIn,
        celebrate,
        phrases: PHRASES,
        pickTheme,
        themes: Object.keys(PALETTE)
    };
})();
