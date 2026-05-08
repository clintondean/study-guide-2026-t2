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

    window.Cats = {
        svg,
        popIn,
        celebrate,
        phrases: PHRASES,
        pickTheme,
        themes: Object.keys(PALETTE)
    };
})();
