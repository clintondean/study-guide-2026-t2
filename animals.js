(function () {
    "use strict";

    const PALETTE = {
        meadow: { primary: "#f6b26b", secondary: "#ffe5c2", accent: "#8bc34a", eye: "#2f6f3e", kind: "rabbit" },
        sunset: { primary: "#f28c52", secondary: "#ffd1b8", accent: "#9c6644", eye: "#4b2e2a", kind: "fox" },
        lagoon: { primary: "#8ed1c2", secondary: "#dff8f3", accent: "#4f9da6", eye: "#29545a", kind: "duck" },
        twilight: { primary: "#8b93c9", secondary: "#e7e8ff", accent: "#5a5f9e", eye: "#2b2e4a", kind: "koala" }
    };

    const PHRASES = {
        correct: [
            "Pawsome! That one scampered right in!",
            "Wildly good thinking!",
            "You nailed it, little legend!",
            "Pet-tastic work!",
            "That answer was spot-on!"
        ],
        wrong: [
            "Almost there - let's try another hop.",
            "Good try. One more nibble at it!",
            "Close one. Back for another run!",
            "Not quite yet - you've still got this.",
            "Tiny wobble, big comeback incoming."
        ],
        finish: [
            "What a pawsitively brilliant finish!",
            "You did it - the whole pet crew is cheering!",
            "That was wildly impressive!",
            "Big win for the pet squad!",
            "Snacks and victory all around!"
        ],
        streak: [
            "You're on a roll!",
            "That streak is zooming!",
            "Three in a row - go, go, go!"
        ],
        idle: [
            "Your study pets are rooting for you.",
            "One question at a time - you've got this.",
            "A calm little step still counts."
        ]
    };
    const NO_WHISKER_KINDS = new Set([
        "duck", "cockatiel", "seal", "frog", "axolotl", "turtle",
        "bee", "owl", "penguin", "dolphin", "elephant", "chameleon",
        "bat", "piglet", "sheep", "goat", "sloth", "lemur"
    ]);
    const BEAK_KINDS = new Set(["duck", "cockatiel", "owl", "penguin"]);
    const TALL_FACE_KINDS = new Set(["alpaca", "elephant"]);

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function escapeHtml(s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[c]));
    }

    function pickTheme() {
        const keys = Object.keys(PALETTE);
        return keys[Math.floor(Math.random() * keys.length)];
    }

    function mascotAppearance(theme) {
        return PALETTE[theme] || PALETTE.meadow;
    }

    function svg(expression, theme) {
        return petSvg({ appearance: mascotAppearance(theme) }, expression || "happy", { compact: true });
    }

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
        let removed = false;
        let leaveTimer = null;
        let removeTimer = null;
        const onDone = typeof opts.onDone === "function" ? opts.onDone : null;

        function finish() {
            if (removed) return;
            removed = true;
            if (leaveTimer) clearTimeout(leaveTimer);
            if (removeTimer) clearTimeout(removeTimer);
            if (popDiv.isConnected) popDiv.remove();
            if (onDone) onDone();
        }

        function dismiss(immediate) {
            if (removed) return;
            if (leaveTimer) {
                clearTimeout(leaveTimer);
                leaveTimer = null;
            }
            if (immediate) {
                finish();
                return;
            }
            if (removeTimer) return;
            popDiv.classList.remove("cat-pop-show");
            popDiv.classList.add("cat-pop-leave");
            removeTimer = setTimeout(finish, 500);
        }

        requestAnimationFrame(() => {
            if (!removed) popDiv.classList.add("cat-pop-show");
        });
        leaveTimer = setTimeout(() => {
            dismiss(false);
        }, duration);

        return { dismiss };
    }

    function celebrate(scoreRatio) {
        let expression;
        let message;
        if (scoreRatio >= 0.9) {
            expression = "cheering";
            message = pick(PHRASES.finish);
        } else if (scoreRatio >= 0.7) {
            expression = "proud";
            message = "Lovely work - keep the momentum going!";
        } else if (scoreRatio >= 0.5) {
            expression = "wave";
            message = "Solid effort - one more round will help.";
        } else {
            expression = "thinking";
            message = "Every retry helps your pet crew learn too.";
        }
        return { expression, message, theme: pickTheme() };
    }

    function eyesFor(expression, eyeColor, cx, cy, compact) {
        const size = compact ? 5 : 6;
        if (expression === "napping") {
            return `
                <path d="M ${cx - 14} ${cy} q ${size} -4 ${size * 2} 0" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M ${cx + 2} ${cy} q ${size} -4 ${size * 2} 0" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>
            `;
        }
        if (expression === "thinking") {
            return `
                <circle cx="${cx - 8}" cy="${cy}" r="${size}" fill="${eyeColor}"/>
                <circle cx="${cx + 10}" cy="${cy + 2}" r="${size - 1}" fill="${eyeColor}"/>
                <circle cx="${cx - 6}" cy="${cy - 2}" r="2" fill="#fff"/>
                <circle cx="${cx + 12}" cy="${cy}" r="2" fill="#fff"/>
            `;
        }
        if (expression === "love") {
            return `
                <path d="M ${cx - 18} ${cy - 2} c -4 -6 5 -12 10 -5 c 5 -7 14 -1 10 5 c -4 6 -10 10 -10 10 s -6 -4 -10 -10 z" fill="#ff6fa4"/>
                <path d="M ${cx + 4} ${cy - 2} c -4 -6 5 -12 10 -5 c 5 -7 14 -1 10 5 c -4 6 -10 10 -10 10 s -6 -4 -10 -10 z" fill="#ff6fa4"/>
            `;
        }
        return `
            <circle cx="${cx - 10}" cy="${cy}" r="${size}" fill="${eyeColor}"/>
            <circle cx="${cx + 10}" cy="${cy}" r="${size}" fill="${eyeColor}"/>
            <circle cx="${cx - 8}" cy="${cy - 2}" r="2" fill="#fff"/>
            <circle cx="${cx + 12}" cy="${cy - 2}" r="2" fill="#fff"/>
        `;
    }

    function mouthFor(expression, kind, cx, cy, isBeak) {
        if (isBeak) {
            if (expression === "thinking") {
                return `<path d="M ${cx - 6} ${cy} L ${cx + 8} ${cy + 3} L ${cx - 4} ${cy + 10} z" fill="#f0a500"/>`;
            }
            return `<path d="M ${cx - 8} ${cy} L ${cx + 10} ${cy + 2} L ${cx - 6} ${cy + 12} z" fill="#f0a500"/>`;
        }
        if (kind === "elephant") {
            return `<path d="M ${cx - 10} ${cy + 28} q 10 8 20 0" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        }
        if (kind === "dolphin") {
            return `<path d="M ${cx + 4} ${cy + 10} q 8 6 16 0" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        }
        if (expression === "napping") return "";
        if (expression === "thinking") {
            return `<path d="M ${cx - 7} ${cy + 16} q 7 -4 14 0" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        }
        if (expression === "cheering" || expression === "happy" || expression === "proud") {
            return `<path d="M ${cx - 10} ${cy + 12} q 10 10 20 0" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        }
        if (expression === "love") {
            return `<path d="M ${cx - 8} ${cy + 13} q 8 8 16 0" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        }
        return `
            <path d="M ${cx} ${cy + 8} q -4 6 -8 8" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M ${cx} ${cy + 8} q 4 6 8 8" stroke="#49352a" stroke-width="3" fill="none" stroke-linecap="round"/>
        `;
    }

    function blushFor(expression, cx, cy) {
        if (expression !== "love" && expression !== "happy" && expression !== "cheering") return "";
        return `
            <ellipse cx="${cx - 22}" cy="${cy + 10}" rx="8" ry="5" fill="#ffb6c8" opacity="0.55"/>
            <ellipse cx="${cx + 22}" cy="${cy + 10}" rx="8" ry="5" fill="#ffb6c8" opacity="0.55"/>
        `;
    }

    function whiskersFor(kind, cx, cy) {
        if (NO_WHISKER_KINDS.has(kind)) return "";
        return `
            <path d="M ${cx - 18} ${cy + 10} l -24 -4" stroke="#5b4333" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M ${cx - 18} ${cy + 16} l -22 6" stroke="#5b4333" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M ${cx + 18} ${cy + 10} l 24 -4" stroke="#5b4333" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M ${cx + 18} ${cy + 16} l 22 6" stroke="#5b4333" stroke-width="2.5" stroke-linecap="round"/>
        `;
    }

    function earsFor(kind, a) {
        switch (kind) {
        case "rabbit":
            return `
                <ellipse cx="82" cy="50" rx="18" ry="44" fill="${a.primary}" transform="rotate(-12 82 50)"/>
                <ellipse cx="82" cy="50" rx="8" ry="28" fill="${a.secondary}" transform="rotate(-12 82 50)"/>
                <ellipse cx="158" cy="50" rx="18" ry="44" fill="${a.primary}" transform="rotate(12 158 50)"/>
                <ellipse cx="158" cy="50" rx="8" ry="28" fill="${a.secondary}" transform="rotate(12 158 50)"/>
            `;
        case "fox":
        case "fennec":
            return `
                <path d="M 70 86 L 92 38 L 112 88 Z" fill="${a.primary}"/>
                <path d="M 128 88 L 148 38 L 170 86 Z" fill="${a.primary}"/>
                <path d="M 84 82 L 93 56 L 104 82 Z" fill="${a.secondary}"/>
                <path d="M 136 82 L 147 56 L 156 82 Z" fill="${a.secondary}"/>
            `;
        case "alpaca":
        case "deer":
            return `
                <ellipse cx="86" cy="82" rx="16" ry="20" fill="${a.primary}"/>
                <ellipse cx="154" cy="82" rx="16" ry="20" fill="${a.primary}"/>
                <ellipse cx="88" cy="82" rx="7" ry="9" fill="${a.secondary}"/>
                <ellipse cx="152" cy="82" rx="7" ry="9" fill="${a.secondary}"/>
            `;
        case "koala":
        case "panda":
            return `
                <circle cx="76" cy="90" r="26" fill="${a.primary}"/>
                <circle cx="164" cy="90" r="26" fill="${a.primary}"/>
                <circle cx="76" cy="90" r="15" fill="${a.secondary}"/>
                <circle cx="164" cy="90" r="15" fill="${a.secondary}"/>
            `;
        case "squirrel":
            return `
                <path d="M 72 92 L 88 46 L 112 96 Z" fill="${a.primary}"/>
                <path d="M 128 96 L 152 46 L 168 92 Z" fill="${a.primary}"/>
                <path d="M 88 86 q 2 -22 16 -28" stroke="${a.secondary}" stroke-width="8" fill="none" stroke-linecap="round"/>
                <path d="M 136 58 q 14 6 16 28" stroke="${a.secondary}" stroke-width="8" fill="none" stroke-linecap="round"/>
            `;
        case "mouse":
            return `
                <circle cx="82" cy="86" r="22" fill="${a.primary}"/>
                <circle cx="158" cy="86" r="22" fill="${a.primary}"/>
                <circle cx="82" cy="86" r="12" fill="${a.secondary}"/>
                <circle cx="158" cy="86" r="12" fill="${a.secondary}"/>
            `;
        case "hamster":
            return `
                <circle cx="88" cy="90" r="18" fill="${a.primary}"/>
                <circle cx="152" cy="90" r="18" fill="${a.primary}"/>
                <circle cx="88" cy="90" r="9" fill="${a.secondary}"/>
                <circle cx="152" cy="90" r="9" fill="${a.secondary}"/>
            `;
        case "piglet":
            return `
                <path d="M 74 96 q 12 -36 34 -26 q -8 24 -4 34 q -18 2 -30 -8 z" fill="${a.primary}"/>
                <path d="M 166 96 q -12 -36 -34 -26 q 8 24 4 34 q 18 2 30 -8 z" fill="${a.primary}"/>
                <path d="M 90 98 q 2 -14 12 -18" stroke="${a.secondary}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M 150 80 q -10 4 -12 18" stroke="${a.secondary}" stroke-width="6" fill="none" stroke-linecap="round"/>
            `;
        case "sheep":
            return `
                <circle cx="86" cy="92" r="18" fill="${a.primary}"/>
                <circle cx="154" cy="92" r="18" fill="${a.primary}"/>
                <circle cx="86" cy="92" r="9" fill="${a.secondary}"/>
                <circle cx="154" cy="92" r="9" fill="${a.secondary}"/>
            `;
        case "goat":
            return `
                <ellipse cx="86" cy="92" rx="14" ry="22" fill="${a.primary}" transform="rotate(-12 86 92)"/>
                <ellipse cx="154" cy="92" rx="14" ry="22" fill="${a.primary}" transform="rotate(12 154 92)"/>
                <ellipse cx="88" cy="96" rx="6" ry="10" fill="${a.secondary}" transform="rotate(-12 88 96)"/>
                <ellipse cx="152" cy="96" rx="6" ry="10" fill="${a.secondary}" transform="rotate(12 152 96)"/>
            `;
        case "cockatiel":
            return `
                <path d="M 110 54 q -12 -34 2 -38 q 8 7 8 28 z" fill="${a.accent}"/>
                <path d="M 120 48 q -2 -40 14 -42 q 7 10 0 30 z" fill="${a.accent}"/>
                <path d="M 130 54 q 14 -34 22 -26 q 5 14 -10 28 z" fill="${a.accent}"/>
            `;
        case "owl":
            return `
                <path d="M 90 90 q -8 -28 8 -42 q 12 16 6 38 z" fill="${a.primary}"/>
                <path d="M 150 86 q 6 -24 -6 -38 q -16 14 -8 42 z" fill="${a.primary}"/>
                <path d="M 98 90 q 0 -14 8 -20" stroke="${a.secondary}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M 142 70 q 8 6 8 20" stroke="${a.secondary}" stroke-width="6" fill="none" stroke-linecap="round"/>
            `;
        case "bee":
            return `
                <path d="M 96 84 q -10 -22 -2 -34" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
                <path d="M 144 84 q 10 -22 2 -34" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
                <circle cx="94" cy="48" r="7" fill="${a.accent}"/>
                <circle cx="146" cy="48" r="7" fill="${a.accent}"/>
            `;
        case "bat":
            return `
                <path d="M 70 102 q 10 -42 38 -48 q -2 24 8 44 z" fill="${a.primary}"/>
                <path d="M 170 102 q -10 -42 -38 -48 q 2 24 -8 44 z" fill="${a.primary}"/>
                <path d="M 92 96 q 2 -20 14 -26" stroke="${a.secondary}" stroke-width="5" fill="none" stroke-linecap="round"/>
                <path d="M 148 70 q 12 6 14 26" stroke="${a.secondary}" stroke-width="5" fill="none" stroke-linecap="round"/>
            `;
        case "elephant":
            return `
                <ellipse cx="72" cy="112" rx="28" ry="34" fill="${a.primary}"/>
                <ellipse cx="168" cy="112" rx="28" ry="34" fill="${a.primary}"/>
                <ellipse cx="72" cy="112" rx="18" ry="22" fill="${a.secondary}" opacity="0.82"/>
                <ellipse cx="168" cy="112" rx="18" ry="22" fill="${a.secondary}" opacity="0.82"/>
            `;
        case "sloth":
            return `
                <circle cx="86" cy="94" r="16" fill="${a.primary}"/>
                <circle cx="154" cy="94" r="16" fill="${a.primary}"/>
                <circle cx="86" cy="94" r="8" fill="${a.secondary}" opacity="0.8"/>
                <circle cx="154" cy="94" r="8" fill="${a.secondary}" opacity="0.8"/>
            `;
        case "chameleon":
            return `
                <path d="M 88 90 q 0 -24 18 -28 q 8 20 -4 34 z" fill="${a.primary}"/>
                <path d="M 152 90 q 0 -24 -18 -28 q -8 20 4 34 z" fill="${a.primary}"/>
            `;
        case "lemur":
            return `
                <circle cx="82" cy="90" r="20" fill="${a.primary}"/>
                <circle cx="158" cy="90" r="20" fill="${a.primary}"/>
                <circle cx="82" cy="90" r="10" fill="${a.secondary}"/>
                <circle cx="158" cy="90" r="10" fill="${a.secondary}"/>
            `;
        case "frog":
            return `
                <circle cx="84" cy="84" r="18" fill="${a.primary}"/>
                <circle cx="156" cy="84" r="18" fill="${a.primary}"/>
            `;
        default:
            return `
                <path d="M 74 90 L 94 48 L 116 92 Z" fill="${a.primary}"/>
                <path d="M 124 92 L 146 48 L 166 90 Z" fill="${a.primary}"/>
                <path d="M 88 84 L 96 62 L 106 84 Z" fill="${a.secondary}"/>
                <path d="M 136 84 L 146 62 L 154 84 Z" fill="${a.secondary}"/>
            `;
        }
    }

    function tailFor(kind, a) {
        switch (kind) {
        case "rabbit":
            return `<circle cx="62" cy="206" r="20" fill="${a.secondary}"/>`;
        case "fox":
        case "fennec":
            return `<path d="M 178 214 q 54 10 42 48 q -18 22 -54 0 q 18 -12 12 -48 z" fill="${a.primary}"/><path d="M 204 252 q 12 8 6 20 q -16 12 -30 -4 z" fill="${a.secondary}"/>`;
        case "red-panda":
        case "raccoon":
            return `<path d="M 180 214 q 54 8 42 46 q -18 22 -54 2 q 18 -12 12 -48 z" fill="${a.primary}"/><path d="M 190 224 q 20 4 26 16" stroke="${a.accent}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M 184 244 q 18 4 24 16" stroke="${a.secondary}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
        case "squirrel":
            return `<path d="M 178 220 q 48 -36 34 -80 q -12 -28 -38 -10 q 12 16 4 38 q 24 2 22 30 q -2 18 -22 22 z" fill="${a.primary}"/><path d="M 196 170 q 14 -6 20 -18" stroke="${a.secondary}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
        case "mouse":
            return `<path d="M 178 230 q 54 18 42 48" stroke="${a.primary}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="218" cy="280" r="7" fill="${a.secondary}"/>`;
        case "hamster":
            return `<circle cx="68" cy="222" r="16" fill="${a.secondary}" opacity="0.8"/>`;
        case "beaver":
            return `<path d="M 180 232 q 38 4 46 22 q -8 16 -36 20 q -26 -2 -24 -22 q 0 -16 14 -20 z" fill="${a.accent}"/>`;
        case "piglet":
            return `<path d="M 182 238 q 18 -8 24 8 q -10 10 -4 20" stroke="${a.primary}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
        case "sheep":
            return `<circle cx="64" cy="218" r="16" fill="${a.secondary}"/>`;
        case "goat":
            return `<path d="M 178 236 q 18 -2 26 10 q -10 10 -2 18" stroke="${a.primary}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
        case "seal":
            return `<path d="M 178 234 q 44 10 34 34 q -14 16 -42 -2 q 14 -12 8 -32 z" fill="${a.primary}"/>`;
        case "otter":
        case "ferret":
            return `<path d="M 176 230 q 60 0 48 28 q -10 14 -42 6 q 12 -12 6 -34 z" fill="${a.primary}"/>`;
        case "owl":
            return `<path d="M 168 226 q 18 2 24 18 q -12 6 -22 18 q -8 -12 -8 -22 q 0 -8 6 -14 z" fill="${a.primary}"/>`;
        case "penguin":
            return `<path d="M 176 234 q 18 0 18 14 q 0 10 -18 14 q -6 -12 0 -28 z" fill="${a.primary}"/>`;
        case "bee":
            return `<path d="M 178 236 q 16 -4 18 10 q -2 10 -18 12 q -2 -8 0 -22 z" fill="${a.accent}"/>`;
        case "bat":
            return `<path d="M 176 236 q 18 -4 24 10 q -8 10 -4 20 q -18 0 -26 -14 q 0 -8 6 -16 z" fill="${a.primary}"/>`;
        case "dolphin":
            return `<path d="M 176 230 q 24 -12 38 -2 q -2 18 -18 26 q -8 -8 -20 -6 z" fill="${a.primary}"/><path d="M 214 226 l 14 -10 l -2 18 l 16 6 l -18 4 l -10 14 l -6 -16 l -18 -4 l 18 -4 z" fill="${a.secondary}"/>`;
        case "elephant":
            return `<path d="M 178 236 q 20 0 22 16 q -10 12 -4 22" stroke="${a.primary}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M 180 236 q 18 2 22 16" stroke="${a.secondary}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        case "sloth":
            return `<path d="M 178 236 q 16 4 14 18 q -6 10 -20 6 q -2 -12 6 -24 z" fill="${a.primary}"/>`;
        case "chameleon":
            return `<path d="M 188 236 q 20 0 20 18 q 0 16 -18 16 q 14 -10 6 -20 q -12 0 -8 -14 z" fill="none" stroke="${a.primary}" stroke-width="7" stroke-linecap="round"/>`;
        case "lemur":
            return `<path d="M 180 222 q 50 6 42 42 q -16 16 -46 0 q 16 -10 12 -42 z" fill="${a.primary}"/><path d="M 188 228 q 12 4 18 14" stroke="${a.secondary}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M 184 248 q 12 4 18 14" stroke="${a.accent}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
        default:
            return `<path d="M 176 220 q 48 4 40 32 q -12 16 -44 2 q 14 -10 10 -34 z" fill="${a.primary}"/>`;
        }
    }

    function bodyFor(kind, a) {
        if (kind === "hamster") {
            return `
                <ellipse cx="120" cy="220" rx="64" ry="48" fill="${a.primary}"/>
                <ellipse cx="120" cy="230" rx="34" ry="22" fill="${a.secondary}" opacity="0.92"/>
                <ellipse cx="88" cy="254" rx="12" ry="12" fill="${a.primary}"/>
                <ellipse cx="152" cy="254" rx="12" ry="12" fill="${a.primary}"/>
            `;
        }
        if (kind === "beaver") {
            return `
                <ellipse cx="118" cy="222" rx="66" ry="44" fill="${a.primary}"/>
                <ellipse cx="118" cy="232" rx="34" ry="18" fill="${a.secondary}" opacity="0.9"/>
                <rect x="82" y="248" width="14" height="24" rx="7" fill="${a.primary}"/>
                <rect x="142" y="248" width="14" height="24" rx="7" fill="${a.primary}"/>
            `;
        }
        if (kind === "piglet") {
            return `
                <ellipse cx="120" cy="220" rx="60" ry="44" fill="${a.primary}"/>
                <ellipse cx="120" cy="228" rx="26" ry="14" fill="${a.secondary}" opacity="0.9"/>
                <rect x="86" y="248" width="12" height="28" rx="4" fill="${a.primary}"/>
                <rect x="106" y="248" width="12" height="28" rx="4" fill="${a.primary}"/>
                <rect x="126" y="248" width="12" height="28" rx="4" fill="${a.primary}"/>
                <rect x="146" y="248" width="12" height="28" rx="4" fill="${a.primary}"/>
            `;
        }
        if (kind === "sheep") {
            return `
                <circle cx="90" cy="222" r="28" fill="${a.primary}"/>
                <circle cx="118" cy="210" r="34" fill="${a.primary}"/>
                <circle cx="148" cy="222" r="28" fill="${a.primary}"/>
                <ellipse cx="120" cy="230" rx="30" ry="16" fill="${a.secondary}" opacity="0.86"/>
                <rect x="90" y="252" width="10" height="24" rx="5" fill="${a.accent}"/>
                <rect x="140" y="252" width="10" height="24" rx="5" fill="${a.accent}"/>
            `;
        }
        if (kind === "goat") {
            return `
                <ellipse cx="120" cy="218" rx="60" ry="42" fill="${a.primary}"/>
                <ellipse cx="120" cy="228" rx="28" ry="16" fill="${a.secondary}" opacity="0.88"/>
                <rect x="86" y="246" width="12" height="30" rx="5" fill="${a.primary}"/>
                <rect x="106" y="246" width="12" height="30" rx="5" fill="${a.primary}"/>
                <rect x="126" y="246" width="12" height="30" rx="5" fill="${a.primary}"/>
                <rect x="146" y="246" width="12" height="30" rx="5" fill="${a.primary}"/>
                <path d="M 118 228 q 2 18 16 24" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind === "seal") {
            return `
                <ellipse cx="120" cy="222" rx="66" ry="42" fill="${a.primary}"/>
                <ellipse cx="120" cy="232" rx="34" ry="18" fill="${a.secondary}" opacity="0.85"/>
                <ellipse cx="72" cy="244" rx="16" ry="10" fill="${a.accent}"/>
                <ellipse cx="168" cy="244" rx="16" ry="10" fill="${a.accent}"/>
            `;
        }
        if (kind === "turtle") {
            return `
                <ellipse cx="120" cy="220" rx="64" ry="44" fill="${a.primary}"/>
                <ellipse cx="120" cy="220" rx="44" ry="30" fill="${a.accent}"/>
                <ellipse cx="90" cy="214" rx="10" ry="8" fill="${a.secondary}"/>
                <ellipse cx="120" cy="202" rx="10" ry="8" fill="${a.secondary}"/>
                <ellipse cx="150" cy="214" rx="10" ry="8" fill="${a.secondary}"/>
                <ellipse cx="120" cy="236" rx="10" ry="8" fill="${a.secondary}"/>
                <ellipse cx="68" cy="240" rx="12" ry="9" fill="${a.primary}"/>
                <ellipse cx="172" cy="240" rx="12" ry="9" fill="${a.primary}"/>
            `;
        }
        if (kind === "axolotl") {
            return `
                <ellipse cx="120" cy="222" rx="58" ry="42" fill="${a.primary}"/>
                <ellipse cx="120" cy="230" rx="30" ry="16" fill="${a.secondary}" opacity="0.9"/>
                <ellipse cx="82" cy="246" rx="10" ry="18" fill="${a.primary}"/>
                <ellipse cx="158" cy="246" rx="10" ry="18" fill="${a.primary}"/>
            `;
        }
        if (kind === "alpaca") {
            return `
                <ellipse cx="120" cy="220" rx="60" ry="48" fill="${a.primary}"/>
                <ellipse cx="120" cy="228" rx="34" ry="20" fill="${a.secondary}" opacity="0.9"/>
                <rect x="84" y="252" width="12" height="28" rx="6" fill="${a.primary}"/>
                <rect x="106" y="252" width="12" height="28" rx="6" fill="${a.primary}"/>
                <rect x="126" y="252" width="12" height="28" rx="6" fill="${a.primary}"/>
                <rect x="148" y="252" width="12" height="28" rx="6" fill="${a.primary}"/>
            `;
        }
        if (kind === "duck" || kind === "cockatiel") {
            return `
                <ellipse cx="120" cy="220" rx="54" ry="44" fill="${a.primary}"/>
                <ellipse cx="120" cy="228" rx="24" ry="14" fill="${a.secondary}" opacity="0.9"/>
                <path d="M 86 220 q 18 18 0 34" stroke="${a.accent}" stroke-width="8" fill="none" stroke-linecap="round"/>
                <path d="M 154 220 q -18 18 0 34" stroke="${a.accent}" stroke-width="8" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind === "owl") {
            return `
                <ellipse cx="120" cy="220" rx="54" ry="50" fill="${a.primary}"/>
                <ellipse cx="120" cy="230" rx="26" ry="20" fill="${a.secondary}" opacity="0.9"/>
                <path d="M 84 212 q 18 16 10 38" stroke="${a.accent}" stroke-width="10" fill="none" stroke-linecap="round"/>
                <path d="M 156 212 q -18 16 -10 38" stroke="${a.accent}" stroke-width="10" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind === "penguin") {
            return `
                <ellipse cx="120" cy="220" rx="52" ry="54" fill="${a.primary}"/>
                <ellipse cx="120" cy="228" rx="24" ry="30" fill="${a.secondary}" opacity="0.96"/>
                <path d="M 90 214 q 14 18 8 40" stroke="${a.accent}" stroke-width="9" fill="none" stroke-linecap="round"/>
                <path d="M 150 214 q -14 18 -8 40" stroke="${a.accent}" stroke-width="9" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind === "bee") {
            return `
                <ellipse cx="120" cy="220" rx="48" ry="38" fill="${a.primary}"/>
                <ellipse cx="92" cy="192" rx="18" ry="12" fill="${a.secondary}" opacity="0.45"/>
                <ellipse cx="148" cy="192" rx="18" ry="12" fill="${a.secondary}" opacity="0.45"/>
                <path d="M 82 210 h 76" stroke="${a.accent}" stroke-width="10" stroke-linecap="round"/>
                <path d="M 86 228 h 68" stroke="${a.accent}" stroke-width="10" stroke-linecap="round"/>
                <path d="M 94 246 h 52" stroke="${a.accent}" stroke-width="10" stroke-linecap="round"/>
            `;
        }
        if (kind === "bat") {
            return `
                <ellipse cx="120" cy="228" rx="36" ry="42" fill="${a.primary}"/>
                <path d="M 84 218 q -34 -22 -46 10 q 18 14 26 34 q 22 -10 34 -6 z" fill="${a.accent}" opacity="0.95"/>
                <path d="M 156 218 q 34 -22 46 10 q -18 14 -26 34 q -22 -10 -34 -6 z" fill="${a.accent}" opacity="0.95"/>
                <ellipse cx="120" cy="236" rx="18" ry="12" fill="${a.secondary}" opacity="0.92"/>
            `;
        }
        if (kind === "dolphin") {
            return `
                <ellipse cx="120" cy="220" rx="54" ry="44" fill="${a.primary}"/>
                <ellipse cx="120" cy="228" rx="24" ry="16" fill="${a.secondary}" opacity="0.88"/>
                <path d="M 90 224 q -18 8 -24 26" stroke="${a.accent}" stroke-width="8" fill="none" stroke-linecap="round"/>
                <path d="M 150 224 q 18 8 24 26" stroke="${a.accent}" stroke-width="8" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind === "elephant") {
            return `
                <ellipse cx="120" cy="220" rx="64" ry="46" fill="${a.primary}"/>
                <ellipse cx="120" cy="230" rx="30" ry="18" fill="${a.secondary}" opacity="0.86"/>
                <rect x="84" y="248" width="14" height="30" rx="6" fill="${a.primary}"/>
                <rect x="106" y="248" width="14" height="30" rx="6" fill="${a.primary}"/>
                <rect x="126" y="248" width="14" height="30" rx="6" fill="${a.primary}"/>
                <rect x="148" y="248" width="14" height="30" rx="6" fill="${a.primary}"/>
            `;
        }
        if (kind === "sloth") {
            return `
                <ellipse cx="120" cy="220" rx="52" ry="46" fill="${a.primary}"/>
                <ellipse cx="120" cy="230" rx="26" ry="18" fill="${a.secondary}" opacity="0.88"/>
                <path d="M 86 194 q -18 30 -6 70" stroke="${a.accent}" stroke-width="10" fill="none" stroke-linecap="round"/>
                <path d="M 154 194 q 18 30 6 70" stroke="${a.accent}" stroke-width="10" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind === "chameleon") {
            return `
                <ellipse cx="120" cy="220" rx="56" ry="40" fill="${a.primary}"/>
                <ellipse cx="120" cy="228" rx="24" ry="14" fill="${a.secondary}" opacity="0.86"/>
                <path d="M 92 238 q -14 14 -10 28" stroke="${a.accent}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M 148 238 q 14 14 10 28" stroke="${a.accent}" stroke-width="6" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind === "lemur") {
            return `
                <ellipse cx="120" cy="220" rx="54" ry="42" fill="${a.primary}"/>
                <ellipse cx="120" cy="228" rx="26" ry="16" fill="${a.secondary}" opacity="0.9"/>
                <ellipse cx="92" cy="254" rx="12" ry="14" fill="${a.primary}"/>
                <ellipse cx="148" cy="254" rx="12" ry="14" fill="${a.primary}"/>
            `;
        }
        return `
            <ellipse cx="120" cy="220" rx="58" ry="44" fill="${a.primary}"/>
            <ellipse cx="120" cy="228" rx="30" ry="18" fill="${a.secondary}" opacity="0.9"/>
            <ellipse cx="90" cy="256" rx="12" ry="14" fill="${a.primary}"/>
            <ellipse cx="150" cy="256" rx="12" ry="14" fill="${a.primary}"/>
        `;
    }

    function headFor(kind, a) {
        if (kind === "hamster") {
            return `
                <circle cx="120" cy="138" r="52" fill="${a.primary}"/>
                <ellipse cx="120" cy="156" rx="28" ry="20" fill="${a.secondary}"/>
            `;
        }
        if (kind === "piglet") {
            return `
                <circle cx="120" cy="138" r="50" fill="${a.primary}"/>
                <ellipse cx="120" cy="160" rx="26" ry="18" fill="${a.secondary}"/>
            `;
        }
        if (kind === "sheep") {
            return `
                <circle cx="92" cy="132" r="18" fill="${a.primary}"/>
                <circle cx="120" cy="124" r="24" fill="${a.primary}"/>
                <circle cx="148" cy="132" r="18" fill="${a.primary}"/>
                <ellipse cx="120" cy="154" rx="24" ry="18" fill="${a.secondary}"/>
            `;
        }
        if (kind === "alpaca") {
            return `
                <ellipse cx="120" cy="134" rx="46" ry="40" fill="${a.primary}"/>
                <ellipse cx="120" cy="152" rx="24" ry="18" fill="${a.secondary}"/>
                <ellipse cx="120" cy="92" rx="34" ry="20" fill="${a.secondary}" opacity="0.85"/>
            `;
        }
        if (kind === "owl") {
            return `
                <circle cx="120" cy="136" r="50" fill="${a.primary}"/>
                <ellipse cx="120" cy="146" rx="30" ry="26" fill="${a.secondary}" opacity="0.94"/>
            `;
        }
        if (kind === "penguin") {
            return `
                <ellipse cx="120" cy="138" rx="44" ry="48" fill="${a.primary}"/>
                <ellipse cx="120" cy="146" rx="22" ry="24" fill="${a.secondary}" opacity="0.96"/>
            `;
        }
        if (kind === "bee") {
            return `
                <circle cx="120" cy="138" r="42" fill="${a.primary}"/>
                <ellipse cx="120" cy="152" rx="18" ry="12" fill="${a.secondary}" opacity="0.78"/>
            `;
        }
        if (kind === "frog") {
            return `
                <ellipse cx="120" cy="136" rx="52" ry="38" fill="${a.primary}"/>
                <ellipse cx="120" cy="154" rx="26" ry="16" fill="${a.secondary}" opacity="0.8"/>
            `;
        }
        if (kind === "dolphin") {
            return `
                <ellipse cx="120" cy="138" rx="46" ry="38" fill="${a.primary}"/>
                <path d="M 112 152 q 18 -6 34 8 q -18 8 -36 2 z" fill="${a.secondary}" opacity="0.85"/>
            `;
        }
        if (kind === "elephant") {
            return `
                <circle cx="120" cy="138" r="52" fill="${a.primary}"/>
                <ellipse cx="120" cy="154" rx="24" ry="16" fill="${a.secondary}" opacity="0.84"/>
            `;
        }
        if (kind === "seal") {
            return `
                <ellipse cx="120" cy="138" rx="48" ry="38" fill="${a.primary}"/>
                <ellipse cx="120" cy="156" rx="24" ry="16" fill="${a.secondary}" opacity="0.9"/>
            `;
        }
        if (kind === "sloth") {
            return `
                <circle cx="120" cy="138" r="48" fill="${a.primary}"/>
                <ellipse cx="120" cy="152" rx="28" ry="22" fill="${a.secondary}" opacity="0.9"/>
            `;
        }
        if (kind === "chameleon") {
            return `
                <ellipse cx="120" cy="138" rx="48" ry="34" fill="${a.primary}"/>
                <ellipse cx="124" cy="154" rx="22" ry="14" fill="${a.secondary}" opacity="0.82"/>
            `;
        }
        if (kind === "lemur") {
            return `
                <circle cx="120" cy="136" r="48" fill="${a.primary}"/>
                <ellipse cx="120" cy="152" rx="24" ry="18" fill="${a.secondary}" opacity="0.92"/>
            `;
        }
        return `
            <circle cx="120" cy="136" r="50" fill="${a.primary}"/>
            <ellipse cx="120" cy="154" rx="24" ry="18" fill="${a.secondary}"/>
        `;
    }

    function markingsFor(kind, a) {
        switch (kind) {
        case "red-panda":
            return `
                <path d="M 88 146 q 12 -10 24 0" stroke="${a.accent}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M 130 146 q 12 -10 24 0" stroke="${a.accent}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M 96 172 q 24 12 48 0" stroke="${a.accent}" stroke-width="6" fill="none" stroke-linecap="round"/>
            `;
        case "raccoon":
            return `
                <ellipse cx="120" cy="136" rx="38" ry="22" fill="${a.accent}" opacity="0.75"/>
            `;
        case "panda":
            return `
                <ellipse cx="96" cy="138" rx="14" ry="18" fill="${a.accent}"/>
                <ellipse cx="144" cy="138" rx="14" ry="18" fill="${a.accent}"/>
            `;
        case "deer":
            return `
                <circle cx="102" cy="208" r="6" fill="${a.secondary}"/>
                <circle cx="120" cy="196" r="6" fill="${a.secondary}"/>
                <circle cx="138" cy="208" r="6" fill="${a.secondary}"/>
            `;
        case "hedgehog":
            return `
                <path d="M 62 174 q 58 -70 116 0" fill="${a.accent}"/>
            `;
        case "chipmunk":
            return `
                <path d="M 96 120 q 12 32 0 84" stroke="${a.accent}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M 120 116 q 10 34 0 92" stroke="${a.secondary}" stroke-width="5" fill="none" stroke-linecap="round"/>
                <path d="M 144 120 q -12 32 0 84" stroke="${a.accent}" stroke-width="6" fill="none" stroke-linecap="round"/>
            `;
        case "cow":
            return `
                <path d="M 90 176 q 20 -18 38 4 q -8 18 -26 16 q -16 -4 -12 -20 z" fill="${a.accent}" opacity="0.8"/>
                <path d="M 132 206 q 16 -12 28 6 q -8 18 -24 12 q -12 -6 -4 -18 z" fill="${a.accent}" opacity="0.8"/>
            `;
        case "owl":
            return `
                <path d="M 98 172 q 22 12 44 0" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
                <path d="M 100 190 q 20 8 40 0" stroke="${a.accent}" stroke-width="4" fill="none" stroke-linecap="round"/>
            `;
        case "puffin":
            return `
                <path d="M 104 160 q 16 12 32 0" stroke="${a.accent}" stroke-width="7" fill="none" stroke-linecap="round"/>
                <circle cx="96" cy="148" r="5" fill="${a.secondary}"/>
                <circle cx="144" cy="148" r="5" fill="${a.secondary}"/>
            `;
        case "walrus":
            return `
                <path d="M 112 164 q -4 20 -10 34" stroke="${a.secondary}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M 128 164 q 4 20 10 34" stroke="${a.secondary}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M 102 170 q 18 8 36 0" stroke="${a.accent}" stroke-width="4" fill="none" stroke-linecap="round"/>
            `;
        case "axolotl":
            return `
                <path d="M 70 134 q -18 -10 -22 -28" stroke="${a.accent}" stroke-width="7" fill="none" stroke-linecap="round"/>
                <path d="M 72 144 q -22 0 -30 -12" stroke="${a.accent}" stroke-width="7" fill="none" stroke-linecap="round"/>
                <path d="M 170 134 q 18 -10 22 -28" stroke="${a.accent}" stroke-width="7" fill="none" stroke-linecap="round"/>
                <path d="M 168 144 q 22 0 30 -12" stroke="${a.accent}" stroke-width="7" fill="none" stroke-linecap="round"/>
            `;
        case "cockatiel":
            return `
                <circle cx="104" cy="158" r="7" fill="#ffb5a7"/>
                <circle cx="136" cy="158" r="7" fill="#ffb5a7"/>
                <path d="M 84 206 q 36 16 72 0" stroke="${a.accent}" stroke-width="7" fill="none" stroke-linecap="round"/>
            `;
        case "chameleon":
            return `
                <circle cx="92" cy="186" r="6" fill="${a.secondary}" opacity="0.82"/>
                <circle cx="112" cy="202" r="5" fill="${a.secondary}" opacity="0.76"/>
                <circle cx="140" cy="188" r="6" fill="${a.secondary}" opacity="0.82"/>
            `;
        case "lemur":
            return `
                <ellipse cx="96" cy="140" rx="14" ry="18" fill="${a.accent}" opacity="0.72"/>
                <ellipse cx="144" cy="140" rx="14" ry="18" fill="${a.accent}" opacity="0.72"/>
            `;
        case "monkey":
            return `
                <ellipse cx="120" cy="152" rx="30" ry="18" fill="${a.secondary}" opacity="0.62"/>
            `;
        default:
            return "";
        }
    }

    function hornsFor(kind, a) {
        if (kind === "goat") {
            return `
                <path d="M 94 92 q -10 -24 -2 -38 q -24 8 -18 28" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
                <path d="M 146 92 q 10 -24 2 -38 q 24 8 18 28" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind === "cow") {
            return `
                <path d="M 92 100 q -18 -10 -18 -24 q 16 -2 26 10" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
                <path d="M 148 100 q 18 -10 18 -24 q -16 -2 -26 10" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
            `;
        }
        if (kind !== "deer") return "";
        return `
            <path d="M 96 92 q -8 -24 -18 -26 q 2 16 -8 24" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M 144 92 q 8 -24 18 -26 q -2 16 8 24" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
        `;
    }

    function noseFor(kind, a) {
        if (BEAK_KINDS.has(kind)) return "";
        if (kind === "piglet") {
            return `
                <ellipse cx="120" cy="160" rx="14" ry="10" fill="${a.accent}"/>
                <circle cx="114" cy="160" r="2" fill="#6b3a33"/>
                <circle cx="126" cy="160" r="2" fill="#6b3a33"/>
            `;
        }
        if (kind === "elephant") {
            return `
                <path d="M 120 150 q -6 18 0 38 q 8 20 -2 30" stroke="${a.accent}" stroke-width="12" fill="none" stroke-linecap="round"/>
                <circle cx="116" cy="218" r="2.5" fill="#5b4333"/>
                <circle cx="124" cy="218" r="2.5" fill="#5b4333"/>
            `;
        }
        if (kind === "dolphin") return `<circle cx="142" cy="154" r="3" fill="${a.accent}"/>`;
        if (kind === "frog") return `<ellipse cx="120" cy="154" rx="8" ry="6" fill="${a.accent}"/>`;
        return `<ellipse cx="120" cy="154" rx="8" ry="6" fill="${a.accent}"/>`;
    }

    function petSvg(pet, expression, opts) {
        opts = opts || {};
        expression = expression || "happy";
        const a = Object.assign({
            kind: "rabbit",
            primary: "#f4b183",
            secondary: "#fff2db",
            accent: "#a86b4a",
            eyeColor: "#2f5037"
        }, (pet && pet.appearance) || {});
        const kind = a.kind || "rabbit";
        const bodyKind = a.bodyKind || kind;
        const headKind = a.headKind || kind;
        const earKind = a.earKind || headKind;
        const tailKind = a.tailKind || bodyKind;
        const markingKinds = uniqueKinds(a.markingKinds, a.markingKind || bodyKind);
        const hornKinds = uniqueKinds(a.hornKinds, a.hornKind || headKind);
        const whiskerKind = a.whiskerKind || headKind;
        const noseKind = a.noseKind || headKind;
        const mouthKind = a.mouthKind || noseKind;
        const compact = !!opts.compact;
        const faceY = TALL_FACE_KINDS.has(headKind) ? 142 : 144;
        const isBeak = BEAK_KINDS.has(mouthKind);
        const viewBox = compact ? "0 0 240 280" : "0 0 240 280";
        return `
            <svg viewBox="${viewBox}" class="cat-svg animal-svg animal-${kind}" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                ${tailFor(tailKind, a)}
                ${bodyFor(bodyKind, a)}
                ${earsFor(earKind, a)}
                ${hornKinds.map(kindId => hornsFor(kindId, a)).join("")}
                ${headFor(headKind, a)}
                ${markingKinds.map(kindId => markingsFor(kindId, a)).join("")}
                ${eyesFor(expression, a.eyeColor, 120, faceY, compact)}
                ${noseFor(noseKind, a)}
                ${whiskersFor(whiskerKind, 120, faceY + 6)}
                ${mouthFor(expression, mouthKind, 120, faceY + 6, isBeak)}
                ${blushFor(expression, 120, faceY + 2)}
            </svg>
        `;
    }

    function uniqueKinds(list, fallback) {
        const items = Array.isArray(list) ? list.slice() : [fallback];
        return Array.from(new Set(items.filter(Boolean)));
    }

    const PETS = [
        {
            id: "meadow-rabbit",
            species: "Meadow Rabbit",
            habitat: "Clover Hollow",
            defaultName: "Clover",
            altNames: ["Button", "Hopps", "Mallow", "Pip"],
            rarity: "common",
            appearance: { kind: "rabbit", primary: "#f6d0b1", secondary: "#fff4e8", accent: "#d18766", eyeColor: "#5b4333" },
            archetype: "Bouncy Bookworm",
            traits: ["Gentle", "Quick", "Curious"],
            stats: { cuddliness: 9, playfulness: 8, cleverness: 7, mischief: 4, talk: 5 },
            phrases: {
                pet: ["Soft pats? Yes please!", "Tiny nose boop approved.", "I am now a loaf of happiness.", "*happy little sniff*"],
                play: ["Catch me if you can!", "Zoomies activated!", "Hop-hop-hooray!", "I can absolutely outrun homework."],
                treat: ["Crunchy snacks are my love language.", "A carrot? For me?", "Best day ever.", "*content nibble sounds*"],
                chat: ["I organise clover by size, naturally.", "The garden path is excellent for thinking.", "I heard a page turn from three rooms away.", "I believe in cosy victories."]
            },
            funFact: "Rabbit teeth never stop growing, so they need lots of safe things to chew.",
            backstory: "Found curled up in a basket of library return books and immediately appointed herself reading buddy."
        },
        {
            id: "fennec-fox",
            species: "Fennec Fox",
            habitat: "Golden Dune Camp",
            defaultName: "Ember",
            altNames: ["Dune", "Saffy", "Lumen", "Copper"],
            rarity: "uncommon",
            appearance: { kind: "fennec", primary: "#f0b27a", secondary: "#fff2dc", accent: "#b96e3f", eyeColor: "#4b2f26" },
            archetype: "Sunny Sprinter",
            traits: ["Alert", "Energetic", "Cheeky"],
            stats: { cuddliness: 6, playfulness: 10, cleverness: 8, mischief: 8, talk: 7 },
            phrases: {
                pet: ["Okay, but only if I get praised too.", "Ears first. They're my best feature.", "Warm hands are elite.", "I approve this attention."],
                play: ["I am SPEED.", "Watch me corner like a professional.", "That toy never stood a chance.", "Sand sprint! Sand sprint!"],
                treat: ["Crispy snacks? Say less.", "I accept this delicious offering.", "Treasure unlocked.", "Another one would be wise."],
                chat: ["I can hear wrappers from impossible distances.", "Sunset is my favourite colour and personality trait.", "I have a route planned for absolutely everything.", "My ears are not decorative. They're strategy."]
            },
            funFact: "Fennec foxes have huge ears that help them hear prey underground and stay cool.",
            backstory: "Arrived in a rescue crate lined with star-print blankets and acted like she owned the room by lunchtime."
        },
        {
            id: "red-panda",
            species: "Red Panda",
            habitat: "Lantern Grove",
            defaultName: "Maple",
            altNames: ["Nori", "Sprig", "Pecan", "Roo"],
            rarity: "ultra-rare",
            appearance: { kind: "red-panda", primary: "#d98245", secondary: "#ffe1bf", accent: "#7f4b2a", eyeColor: "#2f241f" },
            archetype: "Tree-Top Dreamer",
            traits: ["Sleepy", "Graceful", "Sweet"],
            stats: { cuddliness: 8, playfulness: 7, cleverness: 7, mischief: 5, talk: 4 },
            phrases: {
                pet: ["Mmm. Approved and cosy.", "I was napping, but this is acceptable.", "You may fluff the tail.", "*sleepy happy chirp*"],
                play: ["Tree tag!", "I like my games vertical.", "I definitely meant to roll like that.", "Branch acrobatics, coming up."],
                treat: ["Bamboo bites are top-tier.", "Snack time is sacred.", "Crunch, pause, contentment.", "Thank you, dear human."],
                chat: ["I believe every tree should have a hammock.", "The high branch is for quiet thoughts.", "I nap artistically.", "Today felt especially leafy."]
            },
            funFact: "Red pandas use their fluffy tails like blankets when they sleep.",
            backstory: "Rescued from a wildlife sanctuary transfer and now insists on napping anywhere with filtered sunlight."
        },
        {
            id: "river-otter",
            species: "River Otter",
            habitat: "Pebble Brook",
            defaultName: "Pebble",
            altNames: ["Skipper", "Ripple", "Miso", "Scout"],
            rarity: "uncommon",
            appearance: { kind: "otter", primary: "#8d6849", secondary: "#f3dcc2", accent: "#5a3e2a", eyeColor: "#2c231d" },
            archetype: "Splash Champion",
            traits: ["Playful", "Friendly", "Inventive"],
            stats: { cuddliness: 7, playfulness: 10, cleverness: 8, mischief: 7, talk: 6 },
            phrases: {
                pet: ["Warm rubs? Delightful.", "I am a very sleek friend.", "Aw, you're nice.", "*happy river chirps*"],
                play: ["Slide race!", "I brought the toy back. You're welcome.", "I make my own fun, actually.", "Again again again!"],
                treat: ["Tiny fish snacks! Incredible.", "Now THIS is luxury.", "I shall remember your generosity.", "*chomp* perfect."],
                chat: ["I stack shiny stones when I'm thinking.", "Water is the answer to most problems.", "My whiskers detect drama.", "I am both adorable and athletic."]
            },
            funFact: "Otters trap air in their fur, which helps them stay warm and float easily.",
            backstory: "Showed up with a smooth blue pebble in each paw and has been trading treasures for snacks ever since."
        },
        {
            id: "duckling",
            species: "Golden Duckling",
            habitat: "Willow Pond",
            defaultName: "Puddle",
            altNames: ["Sunny", "Dabble", "Mop", "Dot"],
            rarity: "common",
            appearance: { kind: "duck", primary: "#ffd866", secondary: "#fff6c9", accent: "#f0a500", eyeColor: "#4a4325" },
            archetype: "Happy Waddler",
            traits: ["Cheery", "Social", "Curious"],
            stats: { cuddliness: 8, playfulness: 8, cleverness: 6, mischief: 4, talk: 8 },
            phrases: {
                pet: ["Peep peep! That feels nice!", "Soft pats for a soft duck.", "I have become maximum cosy.", "I am being adored correctly."],
                play: ["Waddle sprint!", "Tiny feet, huge effort!", "I can absolutely beat that ball.", "Splish-splash-game-time!"],
                treat: ["Snack crumbs! My favourite treasure.", "This is a five-peep meal.", "Outstanding service.", "*very proud nibbling*"],
                chat: ["I discuss pond weather daily.", "I like shiny water and tidy routines.", "My waddles are elegant, thank you.", "I always know where the snacks are stored."]
            },
            funFact: "Ducklings can swim soon after hatching, but they still need rest and warmth from their flock.",
            backstory: "Was hand-raised in a little tub with a yellow towel and now follows kind voices everywhere."
        },
        {
            id: "alpaca",
            species: "Cloud Alpaca",
            habitat: "Misty Hill Farm",
            defaultName: "Mochi",
            altNames: ["Tufty", "Skye", "Daisy", "Puff"],
            rarity: "rare",
            appearance: { kind: "alpaca", primary: "#efe1d0", secondary: "#fff8ef", accent: "#bfa488", eyeColor: "#4a3d33" },
            archetype: "Calm Collector",
            traits: ["Fluffy", "Patient", "Elegant"],
            stats: { cuddliness: 9, playfulness: 5, cleverness: 7, mischief: 3, talk: 4 },
            phrases: {
                pet: ["A gracious moment, thank you.", "Fluff maintenance appreciated.", "You may continue.", "*soft humming sound*"],
                play: ["A gentle frolic is enough for me.", "I do enjoy a dignified bounce.", "Shall we parade?", "I prefer stylish fun."],
                treat: ["This snack has excellent texture.", "I accept your finest offering.", "A lovely chew. Very soothing.", "Refined and delicious."],
                chat: ["I arrange ribbons by colour in my head.", "Breezy afternoons are my favourite.", "I like quiet company and tidy blankets.", "One can be both adorable and composed."]
            },
            funFact: "Alpacas hum to communicate with each other, especially when they feel content.",
            backstory: "Rehomed from a tiny hobby farm where she spent afternoons supervising flower beds like a fluffy manager."
        },
        {
            id: "axolotl",
            species: "Moon Axolotl",
            habitat: "Glowglass Springs",
            defaultName: "Orbit",
            altNames: ["Nova", "Bloop", "Pearl", "Luma"],
            rarity: "ultra-rare",
            appearance: { kind: "axolotl", primary: "#f6c6d6", secondary: "#ffeaf1", accent: "#e06f9f", eyeColor: "#513343" },
            archetype: "Bubble Scholar",
            traits: ["Gentle", "Quirky", "Thoughtful"],
            stats: { cuddliness: 7, playfulness: 6, cleverness: 9, mischief: 3, talk: 5 },
            phrases: {
                pet: ["Careful little pats, please.", "I am thriving in this attention.", "Bloop of approval.", "You are very kind."],
                play: ["A graceful swirl will do.", "I prefer mysterious toy drift.", "Slow and clever wins too.", "Bubble chase engaged."],
                treat: ["Oh! Fancy snack.", "A delicate delight.", "This calls for celebratory floating.", "I shall remember this forever."],
                chat: ["I love soft lights and quiet water.", "People underestimate the power of a tiny smile.", "I am built for peaceful plotting.", "Sometimes I simply hover and think."]
            },
            funFact: "Axolotls can regrow lost body parts, including parts of their heart and spinal cord.",
            backstory: "Moved from a science classroom habitat into a permanent cosy tank and still looks mildly enchanted by everything."
        },
        {
            id: "hedgehog",
            species: "Hazel Hedgehog",
            habitat: "Fern Burrow",
            defaultName: "Thistle",
            altNames: ["Hazel", "Quill", "Acorn", "Pipkin"],
            rarity: "uncommon",
            appearance: { kind: "hedgehog", primary: "#f3d1aa", secondary: "#ffe9cf", accent: "#8a6a4d", eyeColor: "#3d2f26" },
            archetype: "Tiny Night Owl",
            traits: ["Shy", "Sweet", "Determined"],
            stats: { cuddliness: 6, playfulness: 7, cleverness: 8, mischief: 4, talk: 4 },
            phrases: {
                pet: ["Oh! Gentle pats. Nice.", "I was brave for this.", "Tiny sniff of approval.", "You are officially trusted."],
                play: ["I can do little zooms too!", "This is excellent midnight entertainment.", "Observe my heroic scurry.", "The tiny challenge has been accepted."],
                treat: ["Snack secured.", "Crunchy success!", "I shall treasure this nibble.", "This was worth uncurling for."],
                chat: ["I like leaf piles and quiet victories.", "The moonlight is good for thinking.", "I may be small, but I have opinions.", "Blankets are peak architecture."]
            },
            funFact: "A hedgehog's spines are made of keratin, the same material as human fingernails.",
            backstory: "Found snoozing in a donated wool scarf and decided the scarf belonged to her forever."
        },
        {
            id: "raccoon",
            species: "Moonlight Raccoon",
            habitat: "Lantern Lane",
            defaultName: "Juniper",
            altNames: ["Bandit", "Mallow", "Scout", "Pico"],
            rarity: "rare",
            appearance: { kind: "raccoon", primary: "#9aa0aa", secondary: "#f5f7fb", accent: "#4b5363", eyeColor: "#253040" },
            archetype: "Clever Collector",
            traits: ["Inventive", "Playful", "Mischievous"],
            stats: { cuddliness: 6, playfulness: 9, cleverness: 10, mischief: 9, talk: 6 },
            phrases: {
                pet: ["I accept this tiny truce.", "Fine, but only because you're lovely.", "I am definitely not plotting anything.", "That was surprisingly relaxing."],
                play: ["Treasure hunt time!", "I can open that puzzle in six seconds.", "Mission accepted.", "Chaos, but organised chaos."],
                treat: ["Aha! Reward acquired.", "My little paws are ready.", "Crunch confirmed.", "You understand me."],
                chat: ["I sort my shiny things by sparkle level.", "Locks are just invitations.", "I am curious about absolutely everything.", "The best plans start with snacks."]
            },
            funFact: "Raccoons have extremely sensitive front paws and can identify objects by touch very quickly.",
            backstory: "Was rescued from a wildlife rehab and now proudly carries bottle-cap treasures from room to room."
        },
        {
            id: "cockatiel",
            species: "Sunbeam Cockatiel",
            habitat: "Harmony Perch",
            defaultName: "Skye",
            altNames: ["Trill", "Pico", "Sunny", "Melody"],
            rarity: "uncommon",
            appearance: { kind: "cockatiel", primary: "#f6efc7", secondary: "#fff9df", accent: "#f2bf27", eyeColor: "#4d4630" },
            archetype: "Little Soloist",
            traits: ["Bright", "Musical", "Social"],
            stats: { cuddliness: 7, playfulness: 8, cleverness: 8, mischief: 5, talk: 9 },
            phrases: {
                pet: ["Cheek scritches! Elite choice.", "I may sing about this later.", "Soft and lovely.", "*tiny happy whistle*"],
                play: ["Toy toss encore!", "Watch me strut.", "This game deserves a soundtrack.", "Wing wiggles!"],
                treat: ["Seeds! Tiny victory snacks!", "I appreciate this deeply.", "A crunchy masterpiece.", "You get five stars."],
                chat: ["I warm up before speaking.", "Good lighting improves my singing.", "I believe every hallway needs a performance.", "My crest is basically punctuation."]
            },
            funFact: "Cockatiels use their crest feathers to show how they're feeling, from curious to excited.",
            backstory: "Learned a cheerful two-note whistle in foster care and now performs it whenever anyone opens a notebook."
        },
        {
            id: "moss-turtle",
            species: "Moss Turtle",
            habitat: "Fernwater Cove",
            defaultName: "Moss",
            altNames: ["Shellby", "Sprout", "Drift", "Cori"],
            rarity: "uncommon",
            appearance: { kind: "turtle", primary: "#6fa86f", secondary: "#d6f0c4", accent: "#355c3a", eyeColor: "#203626" },
            archetype: "Steady Explorer",
            traits: ["Patient", "Brave", "Grounded"],
            stats: { cuddliness: 6, playfulness: 5, cleverness: 8, mischief: 2, talk: 3 },
            phrases: {
                pet: ["Slow and lovely. Thank you.", "A peaceful little pat.", "That was nice.", "I enjoy kind company."],
                play: ["Adventure at a sustainable pace.", "I can still win this, just watch.", "Tiny steps count too.", "Shell on, let's go."],
                treat: ["Leaf snack accepted.", "Delightfully crunchy.", "I appreciate this greatly.", "A very sensible treat."],
                chat: ["I like paths with lots of interesting stones.", "Calm thinking is one of my strengths.", "I am never in a hurry and rarely wrong.", "A good day has shade and snacks."]
            },
            funFact: "Many turtles can live for decades, and some species live longer than humans.",
            backstory: "Adopted from a rescue pond clean-up and now supervises water bowls like a tiny wise gardener."
        },
        {
            id: "seal-pup",
            species: "Seal Pup",
            habitat: "Silver Shore",
            defaultName: "Bubbles",
            altNames: ["Foam", "Merry", "Glint", "Poppy"],
            rarity: "rare",
            appearance: { kind: "seal", primary: "#c9d4df", secondary: "#eef4fb", accent: "#8b9aaa", eyeColor: "#243547" },
            archetype: "Beach Day Baby",
            traits: ["Snuggly", "Goofy", "Sweet"],
            stats: { cuddliness: 10, playfulness: 7, cleverness: 6, mischief: 3, talk: 5 },
            phrases: {
                pet: ["Blub-blub bliss.", "I am now a puddle of happiness.", "Soft pats for a soft seal.", "That felt lovely."],
                play: ["Slide time!", "Beach zoom!", "I can absolutely chase that.", "A silly flop is still a move."],
                treat: ["Fishy snacks are premium.", "This is excellent beach cuisine.", "Happy chomps only.", "I am very grateful and a little dramatic."],
                chat: ["I dream about sun-warmed rocks.", "Flippers are underrated.", "I like happy splashes and calm naps.", "The breeze was particularly nice today."]
            },
            funFact: "Seal pups rely on a thick layer of blubber and dense fur to stay warm in cold water.",
            backstory: "Nursed back to health by a coastal rescue team and now greets everyone like an old friend."
        },
        {
            id: "tree-frog",
            species: "Tree Frog",
            habitat: "Rainbell Canopy",
            defaultName: "Flick",
            altNames: ["Mint", "Skip", "Peb", "Dart"],
            rarity: "uncommon",
            appearance: { kind: "frog", primary: "#62b36f", secondary: "#dff5bf", accent: "#2f6c3f", eyeColor: "#1b3725" },
            archetype: "Leaf Acrobat",
            traits: ["Springy", "Bright", "Bold"],
            stats: { cuddliness: 5, playfulness: 9, cleverness: 7, mischief: 6, talk: 6 },
            phrases: {
                pet: ["Oh! That's pleasantly warm.", "Tiny frog says hello.", "I like a respectful pat.", "This branch-based creature approves."],
                play: ["Boing!", "I can leap that, easy.", "This is top-tier frog entertainment.", "I have range, actually."],
                treat: ["Snack secured with style.", "Excellent little bite.", "I am thrilled by this.", "A heroic nibble."],
                chat: ["Rain sounds like applause to me.", "Leaves make excellent trampolines.", "I enjoy dramatic entrances.", "I always know the best high-up spots."]
            },
            funFact: "Many tree frogs have sticky toe pads that help them climb smooth leaves and branches.",
            backstory: "Clung to a greenhouse watering can for hours before being lovingly adopted into indoor jungle life."
        },
        {
            id: "fawn",
            species: "Starlight Fawn",
            habitat: "Moonfern Glade",
            defaultName: "Halo",
            altNames: ["Bloom", "Wish", "Nova", "Petal"],
            rarity: "ultra-rare",
            appearance: { kind: "deer", primary: "#c99565", secondary: "#f7dcb8", accent: "#8a5a32", eyeColor: "#433224" },
            archetype: "Gentle Wonder",
            traits: ["Graceful", "Kind", "Dreamy"],
            stats: { cuddliness: 8, playfulness: 6, cleverness: 7, mischief: 2, talk: 4 },
            phrases: {
                pet: ["You are wonderfully gentle.", "That felt like sunshine.", "I like calm kindness best.", "A little sigh of happiness."],
                play: ["A light-footed dash sounds nice.", "Let's run through the flowers.", "I do love a graceful chase.", "I can prance and win."],
                treat: ["Sweet little snack, thank you.", "A lovely choice.", "That was so thoughtful.", "I shall remember this kindness."],
                chat: ["Morning light makes everything shimmer.", "I like quiet paths and soft music.", "I collect peaceful moments.", "Today felt safe and bright."]
            },
            funFact: "Young deer often have white spots that help them blend into dappled forest light.",
            backstory: "Arrived from a sanctuary field trip and quietly won everyone over by following flower patterns."
        },
        {
            id: "sugar-glider",
            species: "Sugar Glider",
            habitat: "Moonbeam Grove",
            defaultName: "Tinker",
            altNames: ["Glint", "Comet", "Nibs", "Mira"],
            rarity: "rare",
            appearance: { kind: "glider", primary: "#bbb3a9", secondary: "#efe8df", accent: "#6a6159", eyeColor: "#1f1f1f" },
            archetype: "Midnight Glider",
            traits: ["Curious", "Tiny", "Nimble"],
            stats: { cuddliness: 7, playfulness: 9, cleverness: 8, mischief: 7, talk: 7 },
            phrases: {
                pet: ["Warm hands are the best launchpad.", "Aww, cosy mode.", "Tiny paws say thank you.", "I trust you enough to stay still. Briefly."],
                play: ["Leap of destiny!", "I am basically moon-powered.", "From here to there? Easy.", "No shelf is too dramatic."],
                treat: ["Sweet snack! Excellent.", "I move fast because I care.", "That was a glorious bite.", "My tiny heart is delighted."],
                chat: ["Nighttime is full of possibilities.", "I like pockets, sleeves and unexpected perches.", "Gliding is mostly confidence.", "I have a very serious bedtime after my adventures."]
            },
            funFact: "Sugar gliders can glide between trees using a stretchy membrane between their limbs.",
            backstory: "Rescued after nesting in a craft room curtain rod and now considers hanging baskets her kingdom."
        },
        {
            id: "koala",
            species: "Silverleaf Koala",
            habitat: "Gumdrop Grove",
            defaultName: "Wattle",
            altNames: ["Gumnut", "Marlow", "Leaf", "Poppy"],
            rarity: "uncommon",
            appearance: { kind: "koala", primary: "#9da9b0", secondary: "#edf3f4", accent: "#5d6670", eyeColor: "#27343a" },
            archetype: "Cosy Nap Captain",
            traits: ["Sleepy", "Cuddly", "Calm"],
            stats: { cuddliness: 10, playfulness: 4, cleverness: 6, mischief: 2, talk: 3 },
            phrases: {
                pet: ["Soft scritches? Lovely.", "I was sleeping, but this is acceptable.", "A very calm thank-you.", "Yes, that is good."],
                play: ["A gentle climb counts as play.", "I prefer slow fun.", "Can the game involve a branch?", "Maybe after a little rest."],
                treat: ["Mmm. Excellent leafy snack.", "I approve of this peaceful treat.", "A nice little chew.", "This suits my energy perfectly."],
                chat: ["I value quiet afternoons very highly.", "A good nap is a skill.", "My ears are fluff, yes, but dignified fluff.", "I keep my thoughts slow and excellent."]
            },
            funFact: "Koalas sleep for most of the day to conserve energy from their low-nutrient eucalyptus diet.",
            backstory: "Came from a wildlife education program and immediately claimed the softest beanbag in sight."
        },
        {
            id: "panda",
            species: "Bamboo Panda",
            habitat: "Jade Ridge",
            defaultName: "Bramble",
            altNames: ["Bao", "Coco", "Nibs", "Wisp"],
            rarity: "legendary",
            appearance: { kind: "panda", primary: "#1d1d22", secondary: "#f7f7fa", accent: "#111216", eyeColor: "#253040" },
            archetype: "Snuggle Boss",
            traits: ["Round", "Soft", "Iconic"],
            stats: { cuddliness: 10, playfulness: 6, cleverness: 7, mischief: 4, talk: 5 },
            phrases: {
                pet: ["This is premium cuddle service.", "I am exactly as cosy as I look.", "You may fluff the cheeks.", "A most excellent cuddle."],
                play: ["I can roll into that game, absolutely.", "Strategic tumbling begins now.", "One playful boop coming up.", "I prefer fun with snack breaks."],
                treat: ["Bamboo crunch! Delightful.", "Yes, more of this please.", "This snack has my full attention.", "Happiness level: enormous."],
                chat: ["I am committed to softness.", "Roundness is a lifestyle.", "My schedule includes snacks, stretching and another snack.", "I think best while lounging."]
            },
            funFact: "Pandas spend much of their day eating bamboo because it provides limited energy.",
            backstory: "Adopted through a zoo conservation partnership and has since become the most adored loaf in the collection."
        },
        {
            id: "ferret",
            species: "Ribbon Ferret",
            habitat: "Playtube Hall",
            defaultName: "Zippy",
            altNames: ["Mallow", "Dash", "Twix", "Pogo"],
            rarity: "rare",
            appearance: { kind: "ferret", primary: "#d4b08d", secondary: "#fff0d8", accent: "#7c5b40", eyeColor: "#2a211c" },
            archetype: "Chaos Noodle",
            traits: ["Flexible", "Playful", "Sneaky"],
            stats: { cuddliness: 7, playfulness: 10, cleverness: 8, mischief: 10, talk: 6 },
            phrases: {
                pet: ["Oh! Soft hands. Nice.", "I have paused zooming for this.", "Tiny ferret hug accepted.", "That was excellent, actually."],
                play: ["Tunnel mode!", "I disappeared on purpose.", "This game needs more chaos.", "Watch this dramatic wiggle."],
                treat: ["A prize for me? Outstanding.", "I am suddenly everyone's favourite.", "Crunch acquired.", "I would do a backflip for another."],
                chat: ["I believe every box has secrets.", "If there's a tunnel, I'm in it.", "My hobbies include mischief and dramatic exits.", "I am built like a question mark and proud of it."]
            },
            funFact: "Ferrets sleep for many hours a day but become very energetic during their active periods.",
            backstory: "Was fostered with a tangle of toy tunnels and still expects every room to contain at least one adventure route."
        }
    ];

    PETS.push(
        {
            id: "acorn-squirrel",
            species: "Acorn Squirrel",
            habitat: "Hazelnut Grove",
            defaultName: "Nibbles",
            altNames: ["Hazel", "Twitch", "Pip", "Nutmeg"],
            rarity: "common",
            appearance: { kind: "squirrel", primary: "#c9874f", secondary: "#ffe2bf", accent: "#7b4d2d", eyeColor: "#342116" },
            archetype: "Twig Acrobat",
            traits: ["Quick", "Chatty", "Bright"],
            stats: { cuddliness: 6, playfulness: 9, cleverness: 8, mischief: 7, talk: 7 },
            phrases: { pet: ["Your hands are nice and warm.", "Tiny squirrel snuggle achieved."], play: ["Branch race!", "I can zig-zag around anything."], treat: ["Acorn snacks are elite.", "I heard the crunch before I saw it."], chat: ["I hide my treasures with precision.", "Every branch has a shortcut if you are brave."] },
            funFact: "Squirrels use their tails for balance, warmth and even quick communication.",
            backstory: "Rescued from a stormy nest fall and now insists every bookshelf is a climbing wall."
        },
        {
            id: "pine-chipmunk",
            species: "Pine Chipmunk",
            habitat: "Pinecone Path",
            defaultName: "Piney",
            altNames: ["Sprig", "Toast", "Miso", "Poppy"],
            rarity: "common",
            appearance: { kind: "squirrel", markingKind: "chipmunk", primary: "#bb8156", secondary: "#f8e2c7", accent: "#6a4026", eyeColor: "#332117" },
            archetype: "Pocket-Sized Planner",
            traits: ["Neat", "Fast", "Curious"],
            stats: { cuddliness: 6, playfulness: 8, cleverness: 8, mischief: 6, talk: 6 },
            phrases: { pet: ["I accept gentle pats and compliments.", "That was a very tidy cuddle."], play: ["I do my best work at top speed.", "Catch me before I vanish behind the pot plant."], treat: ["Cheek pouches ready!", "Excellent snack logistics."], chat: ["I alphabetise my favourite seeds in my head.", "I always know where the good hiding spots are."] },
            funFact: "Chipmunks can carry a surprising number of seeds in their cheek pouches.",
            backstory: "Wandered out of a picnic basket with a crumb trail behind him and never looked back."
        },
        {
            id: "velvet-mouse",
            species: "Velvet Mouse",
            habitat: "Moonseed Pantry",
            defaultName: "Velvet",
            altNames: ["Pico", "Bean", "Mallow", "Dot"],
            rarity: "common",
            appearance: { kind: "mouse", primary: "#b8a3ad", secondary: "#f8edf1", accent: "#7f6871", eyeColor: "#281d22" },
            archetype: "Whisper Scout",
            traits: ["Tiny", "Observant", "Sweet"],
            stats: { cuddliness: 7, playfulness: 7, cleverness: 8, mischief: 4, talk: 5 },
            phrases: { pet: ["Soft pats make me feel brave.", "I am a tiny cloud of approval."], play: ["Ready, set, scurry!", "My little feet are incredibly fast."], treat: ["Seed snacks are perfect every time.", "This nibble was worth the risk."], chat: ["I hear the kettle before anyone else.", "Quiet corners are my favourite thinking spots."] },
            funFact: "Mice use their whiskers to judge spaces and explore in low light.",
            backstory: "Found nesting in a craft basket full of felt scraps and instantly matched the decor."
        },
        {
            id: "honey-hamster",
            species: "Honey Hamster",
            habitat: "Sunflower Nook",
            defaultName: "Toffee",
            altNames: ["Biscuit", "Crumb", "Pudding", "Sunny"],
            rarity: "common",
            appearance: { kind: "hamster", primary: "#d9a96c", secondary: "#fff0d6", accent: "#8f6136", eyeColor: "#2e2117" },
            archetype: "Snack Hoarder",
            traits: ["Round", "Cosy", "Busy"],
            stats: { cuddliness: 9, playfulness: 7, cleverness: 6, mischief: 5, talk: 4 },
            phrases: { pet: ["Warm hands are premium hamster furniture.", "I am now one content little puff."], play: ["Wheel time counts as athletics.", "I can do a surprisingly dramatic sprint."], treat: ["I would store this snack for later, but maybe not.", "Best bite of my tiny life."], chat: ["I respect blankets and quiet routines.", "My cheeks are for snacks and secrets."] },
            funFact: "Hamsters have expandable cheek pouches that help them carry food to storage spots.",
            backstory: "Came home in a sunflower-print carrier and immediately treated the food bowl like treasure."
        },
        {
            id: "dandelion-guinea-pig",
            species: "Dandelion Guinea Pig",
            habitat: "Daisy Burrow",
            defaultName: "Button",
            altNames: ["Peep", "Custard", "Puff", "Lottie"],
            rarity: "common",
            appearance: { kind: "hamster", primary: "#c98d58", secondary: "#fff0d5", accent: "#7c4c2a", eyeColor: "#2e1f15" },
            archetype: "Garden Squeaker",
            traits: ["Friendly", "Round", "Vocal"],
            stats: { cuddliness: 9, playfulness: 6, cleverness: 6, mischief: 3, talk: 8 },
            phrases: { pet: ["Wheek of happiness!", "You found the best cuddly angle."], play: ["I prefer cheerful shuffles to zoomies.", "This game needs more snacks."], treat: ["Leafy greens deserve applause.", "Outstanding service and crunch."], chat: ["I narrate meal times very clearly.", "Soft hay piles are my idea of luxury."] },
            funFact: "Guinea pigs communicate with squeaks, purrs and rumbles to show how they feel.",
            backstory: "Was surrendered with a stack of fleece blankets and still picks the softest one in the room."
        },
        {
            id: "willow-capybara",
            species: "Willow Capybara",
            habitat: "Reedbank Spa",
            defaultName: "Willow",
            altNames: ["Lagoon", "Maple", "Sage", "Mochi"],
            rarity: "rare",
            appearance: { kind: "hamster", primary: "#9e7453", secondary: "#e9d4b9", accent: "#5e412d", eyeColor: "#231913" },
            archetype: "Zen Floater",
            traits: ["Calm", "Social", "Steady"],
            stats: { cuddliness: 8, playfulness: 5, cleverness: 7, mischief: 2, talk: 4 },
            phrases: { pet: ["A peaceful pat is always welcome.", "I radiate tranquil loaf energy."], play: ["A slow splash can still be fun.", "I am not hurrying, and that is the point."], treat: ["Fresh greens are deeply soothing.", "This snack matches my vibe perfectly."], chat: ["Warm water and gentle company fix most things.", "I like making everybody feel calm."] },
            funFact: "Capybaras are highly social and often relax together in warm water.",
            backstory: "Moved from a wildlife sanctuary pond and quickly became the calmest creature in the whole haven."
        },
        {
            id: "sun-quokka",
            species: "Sun Quokka",
            habitat: "Golden Fern Walk",
            defaultName: "Sunny",
            altNames: ["Peb", "Lemon", "Marlow", "Sparrow"],
            rarity: "uncommon",
            appearance: { kind: "hamster", primary: "#c39a6b", secondary: "#f4e5cc", accent: "#7d5d3f", eyeColor: "#2d2118" },
            archetype: "Grin Captain",
            traits: ["Cheerful", "Bouncy", "Sweet"],
            stats: { cuddliness: 8, playfulness: 8, cleverness: 6, mischief: 4, talk: 6 },
            phrases: { pet: ["I was already smiling, but now it is extra.", "You brought the cosy sunshine."], play: ["Happy hops incoming!", "This is a very good day for bouncing."], treat: ["Snack accepted with joy.", "I love a crunchy little celebration."], chat: ["I think every path looks brighter after a nap.", "People say I look friendly because I am."] },
            funFact: "Quokkas are small wallabies famous for their naturally smiley expressions.",
            backstory: "Arrived from a conservation program and charmed absolutely everyone before dinner."
        },
        {
            id: "bramble-wombat",
            species: "Bramble Wombat",
            habitat: "Bramble Burrow",
            defaultName: "Mallow",
            altNames: ["Bram", "Pebble", "Wren", "Plum"],
            rarity: "rare",
            appearance: { kind: "hamster", primary: "#8b7565", secondary: "#dcc9b9", accent: "#5d4a3d", eyeColor: "#241b17" },
            archetype: "Burrow Builder",
            traits: ["Solid", "Patient", "Reliable"],
            stats: { cuddliness: 8, playfulness: 5, cleverness: 7, mischief: 3, talk: 4 },
            phrases: { pet: ["I am sturdy, soft and very pleased.", "That was a lovely grounded little pat."], play: ["Tunnel games suit me best.", "I can still win without rushing."], treat: ["Root veggie snacks feel luxurious.", "You understand wombat priorities."], chat: ["I respect a well-made den.", "A peaceful burrow is basically art."] },
            funFact: "Wombats are powerful diggers with strong claws built for tunnelling.",
            backstory: "Came from a rescue burrow project and still inspects every blanket pile like a construction expert."
        },
        {
            id: "brook-beaver",
            species: "Brook Beaver",
            habitat: "Maple Dam",
            defaultName: "Barkley",
            altNames: ["Chip", "Drift", "Timber", "Scout"],
            rarity: "uncommon",
            appearance: { kind: "beaver", primary: "#95663f", secondary: "#f1d6b5", accent: "#6b4323", eyeColor: "#24170f" },
            archetype: "Pocket Engineer",
            traits: ["Handy", "Focused", "Busy"],
            stats: { cuddliness: 7, playfulness: 7, cleverness: 9, mischief: 4, talk: 5 },
            phrases: { pet: ["Builder break accepted.", "You may pat the head, not the blueprint."], play: ["I can make a game out of sticks and ambition.", "Obstacle course? Perfect."], treat: ["Crunchy bark biscuits are top tier.", "This reward has excellent texture."], chat: ["I fix problems one twig at a time.", "Little projects make my day sparkle."] },
            funFact: "Beavers can shape waterways by building dams and lodges from branches and mud.",
            backstory: "Was found stacking popsicle sticks into tiny bridges and got adopted on the spot."
        },
        {
            id: "moon-platypus",
            species: "Moon Platypus",
            habitat: "Silverbill Creek",
            defaultName: "Nova",
            altNames: ["Paddle", "Bloop", "Dusk", "Piper"],
            rarity: "rare",
            appearance: { kind: "beaver", bodyKind: "beaver", headKind: "mouse", earKind: "mouse", tailKind: "beaver", whiskerKind: "mouse", noseKind: "duck", mouthKind: "duck", primary: "#8b6b50", secondary: "#f2dfc8", accent: "#6d4f36", eyeColor: "#241813" },
            archetype: "Oddball Genius",
            traits: ["Curious", "Quiet", "Unforgettable"],
            stats: { cuddliness: 7, playfulness: 7, cleverness: 10, mischief: 5, talk: 4 },
            phrases: { pet: ["I know I am weird and wonderful.", "Tiny platypus approval granted."], play: ["I like games with mystery and splashing.", "Observe my multi-talented little chaos."], treat: ["River snacks are my favourite prizes.", "This treat has excellent detective energy."], chat: ["I contain several excellent design ideas at once.", "Being unique is very efficient, actually."] },
            funFact: "Platypuses are mammals that lay eggs and can sense tiny electrical signals in water.",
            backstory: "Rescued from a creek education centre and still looks faintly delighted by every puddle."
        },
        {
            id: "puddle-piglet",
            species: "Puddle Piglet",
            habitat: "Apple Orchard Yard",
            defaultName: "Oinkie",
            altNames: ["Apple", "Trotter", "Biscuit", "Bubbles"],
            rarity: "common",
            appearance: { kind: "piglet", primary: "#f4b8c1", secondary: "#ffdce3", accent: "#dd8f9d", eyeColor: "#4a3237" },
            archetype: "Muddy Optimist",
            traits: ["Cheery", "Hungry", "Lively"],
            stats: { cuddliness: 8, playfulness: 8, cleverness: 6, mischief: 6, talk: 8 },
            phrases: { pet: ["Snout boops and pats are both good.", "I am a rosy little bundle of joy."], play: ["Trotting race!", "I can turn anything into a silly adventure."], treat: ["Apple slices deserve fanfare.", "This snack is absolute piglet luxury."], chat: ["Puddles are not accidents. They are invitations.", "I always know when someone opens the pantry."] },
            funFact: "Pigs are highly intelligent and can learn games, puzzles and routines quickly.",
            backstory: "Showed up muddy and proud after escaping a petting paddock and never stopped making friends."
        },
        {
            id: "butter-lamb",
            species: "Butter Lamb",
            habitat: "Buttercup Hill",
            defaultName: "Mimi",
            altNames: ["Floss", "Pudding", "Bun", "Daisy"],
            rarity: "common",
            appearance: { kind: "sheep", primary: "#fff5ea", secondary: "#f2d7b7", accent: "#b58b69", eyeColor: "#38261c" },
            archetype: "Bouncy Blanket",
            traits: ["Gentle", "Soft", "Sunny"],
            stats: { cuddliness: 10, playfulness: 7, cleverness: 5, mischief: 2, talk: 4 },
            phrases: { pet: ["I am basically a walking hug.", "That pat felt like a warm cloud."], play: ["Little jumps count as athletics.", "I can frolic with the best of them."], treat: ["Sweet hay snacks are perfect.", "A tiny chew and a happy sigh."], chat: ["Soft mornings are my favourite kind.", "I like breezes, blankets and kind company."] },
            funFact: "Lambs recognise their mothers by voice and can learn familiar sounds quickly.",
            backstory: "Was bottle-fed in foster care and still leans into every bit of gentle affection."
        },
        {
            id: "marshmallow-sheep",
            species: "Marshmallow Sheep",
            habitat: "Cloudberry Pasture",
            defaultName: "Floss",
            altNames: ["Cloud", "Puffin", "Nori", "Meringue"],
            rarity: "uncommon",
            appearance: { kind: "sheep", primary: "#f8f3ef", secondary: "#ead5c7", accent: "#aa8d79", eyeColor: "#3b2a22" },
            archetype: "Cosy Drifter",
            traits: ["Sleepy", "Calm", "Sweet"],
            stats: { cuddliness: 10, playfulness: 5, cleverness: 5, mischief: 2, talk: 3 },
            phrases: { pet: ["Fluff service appreciated.", "You may absolutely lean on the wool."], play: ["A gentle prance will do nicely.", "I prefer graceful fun to frantic fun."], treat: ["This snack is wonderfully civilised.", "Excellent nibble. No notes."], chat: ["I like naps that feel like weather.", "Blankets and silence are elite."] },
            funFact: "Sheep can remember faces and recognise both sheep and humans for a long time.",
            backstory: "Retired from a tiny hobby farm and now spends afternoons looking like a decorative cloud."
        },
        {
            id: "clover-goat",
            species: "Clover Goat",
            habitat: "Thyme Terrace",
            defaultName: "Clover",
            altNames: ["Skip", "Fern", "Pogo", "Junie"],
            rarity: "uncommon",
            appearance: { kind: "goat", hornKind: "goat", primary: "#e6dcc7", secondary: "#f8f2e4", accent: "#9a815f", eyeColor: "#34271f" },
            archetype: "Fence Jumper",
            traits: ["Plucky", "Smart", "Funny"],
            stats: { cuddliness: 7, playfulness: 9, cleverness: 8, mischief: 7, talk: 6 },
            phrases: { pet: ["That was nice. I will remember you kindly.", "Goat friendship unlocked."], play: ["I was born to bounce.", "If there is a ledge, I will stand on it."], treat: ["Leafy treats are my weakness.", "Crisp snack, crisp mood."], chat: ["I test boundaries because someone has to.", "Curiosity is just another form of cardio."] },
            funFact: "Goats are agile climbers and can balance on surprisingly narrow surfaces.",
            backstory: "Was adopted after escaping every pen at a rescue fair and somehow improving the event."
        },
        {
            id: "meadow-calf",
            species: "Meadow Calf",
            habitat: "Bluebell Barn",
            defaultName: "Poppy",
            altNames: ["Moozi", "Clover", "Bramble", "Oat"],
            rarity: "rare",
            appearance: { kind: "goat", bodyKind: "goat", headKind: "goat", earKind: "goat", tailKind: "goat", hornKind: "cow", markingKind: "cow", primary: "#faf6ef", secondary: "#f1d4bf", accent: "#7c5a43", eyeColor: "#32241c" },
            archetype: "Gentle Grazer",
            traits: ["Kind", "Steady", "Soft"],
            stats: { cuddliness: 9, playfulness: 6, cleverness: 6, mischief: 2, talk: 5 },
            phrases: { pet: ["That was lovely and calm.", "I make an excellent cuddle break."], play: ["A meadow trot is enough excitement for me.", "I can still win with a gentle shuffle."], treat: ["Fresh grass snacks? Delightful.", "This treat tastes like a perfect afternoon."], chat: ["I like slow mornings and sun on the fence.", "Everything feels better after a peaceful chew."] },
            funFact: "Young calves learn social cues quickly and often copy the behaviour of calm herd mates.",
            backstory: "Came from a sanctuary field day and won hearts by politely following the flower cart."
        },
        {
            id: "cloud-llama",
            species: "Cloud Llama",
            habitat: "Silver Saddle Ridge",
            defaultName: "Lulu",
            altNames: ["Skye", "Meringue", "Tufty", "Pico"],
            rarity: "rare",
            appearance: { kind: "alpaca", primary: "#f0e4d7", secondary: "#fff8f0", accent: "#b4977c", eyeColor: "#43352c" },
            archetype: "Drama-Free Darling",
            traits: ["Elegant", "Funny", "Composed"],
            stats: { cuddliness: 8, playfulness: 6, cleverness: 7, mischief: 4, talk: 5 },
            phrases: { pet: ["Very refined. Thank you.", "You may admire the fluff from this angle too."], play: ["A jaunty little parade would be lovely.", "I do enjoy elegant nonsense."], treat: ["This snack has excellent standards.", "Truly a deluxe chew."], chat: ["I like mountain breezes and tidy ribbons.", "One can be graceful and silly at once."] },
            funFact: "Llamas communicate with humming, body posture and expressive ears.",
            backstory: "Rehomed from a travelling petting zoo and immediately claimed the fanciest blanket."
        },
        {
            id: "moon-owl",
            species: "Moon Owl",
            habitat: "Stargazer Pine",
            defaultName: "Hootie",
            altNames: ["Nova", "Cinder", "Echo", "Twila"],
            rarity: "rare",
            appearance: { kind: "owl", noseKind: "owl", mouthKind: "owl", primary: "#8e7c68", secondary: "#efe2ce", accent: "#5c4738", eyeColor: "#2b200f" },
            archetype: "Night Librarian",
            traits: ["Wise", "Quiet", "Precise"],
            stats: { cuddliness: 7, playfulness: 5, cleverness: 10, mischief: 2, talk: 6 },
            phrases: { pet: ["I approve of respectful affection.", "That was a soft little moonbeam of kindness."], play: ["A strategic swoop sounds fun.", "I prefer games with careful timing."], treat: ["This snack is worthy of my perch.", "Delightfully crunchy and very dignified."], chat: ["The night is full of useful information.", "I believe every answer sounds better after a pause."] },
            funFact: "Owls can turn their heads very far to scan their surroundings without moving their bodies.",
            backstory: "Was rescued from a school hall rafters situation and now supervises study time from above."
        },
        {
            id: "snowy-barn-owl",
            species: "Snowy Barn Owl",
            habitat: "Frost Loft",
            defaultName: "Glint",
            altNames: ["Shiver", "Pearl", "Tallow", "Wisp"],
            rarity: "ultra-rare",
            appearance: { kind: "owl", noseKind: "owl", mouthKind: "owl", primary: "#f4f0ea", secondary: "#fffaf5", accent: "#cbb7a2", eyeColor: "#2f261d" },
            archetype: "Silent Snowglider",
            traits: ["Calm", "Rare", "Graceful"],
            stats: { cuddliness: 8, playfulness: 5, cleverness: 10, mischief: 2, talk: 5 },
            phrases: { pet: ["Soft pats suit a snowy owl perfectly.", "I feel pleasantly luminous now."], play: ["I glide rather than rush.", "This game could use more moonlight."], treat: ["A little treat, a little triumph.", "Exquisite and efficient."], chat: ["Silence can feel very golden.", "I notice the things other pets miss."] },
            funFact: "Many owls have feathers shaped to help them fly very quietly.",
            backstory: "Transferred from a wildlife rescue aviary and still gives the room a magical hush."
        },
        {
            id: "pebble-penguin",
            species: "Pebble Penguin",
            habitat: "Icicle Bay",
            defaultName: "Pebble",
            altNames: ["Skipper", "Chill", "Merry", "Tux"],
            rarity: "uncommon",
            appearance: { kind: "penguin", noseKind: "penguin", mouthKind: "penguin", primary: "#20242d", secondary: "#f8fbff", accent: "#f1a833", eyeColor: "#1b2029" },
            archetype: "Tiny Tuxedo",
            traits: ["Brave", "Funny", "Loyal"],
            stats: { cuddliness: 8, playfulness: 8, cleverness: 7, mischief: 4, talk: 6 },
            phrases: { pet: ["Waddle cuddle accepted.", "I am very sleek and very pleased."], play: ["Ice slide champion reporting in!", "Short legs, huge commitment."], treat: ["Fishy snack acquired!", "That bite deserves a victory lap."], chat: ["I like orderly pebbles and dramatic waddles.", "Cold air makes me feel extra energetic."] },
            funFact: "Penguins often use pebbles when building nests and can be very devoted partners.",
            backstory: "Was hand-raised at a coastal rescue and still presents shiny pebbles like tiny gifts."
        },
        {
            id: "starlight-puffin",
            species: "Starlight Puffin",
            habitat: "Aurora Cliffs",
            defaultName: "Skipper",
            altNames: ["Beacon", "Miso", "Flit", "Coral"],
            rarity: "rare",
            appearance: { kind: "penguin", markingKind: "puffin", noseKind: "penguin", mouthKind: "penguin", primary: "#1b1e26", secondary: "#fff8f1", accent: "#f1873a", eyeColor: "#1e232f" },
            archetype: "Cliffside Comedian",
            traits: ["Bright", "Playful", "Bold"],
            stats: { cuddliness: 7, playfulness: 9, cleverness: 7, mischief: 5, talk: 6 },
            phrases: { pet: ["A puffin pat is a premium event.", "I look tiny, but I contain daring."], play: ["Wing wiggle warm-up complete.", "I was made for funny little sprints."], treat: ["Best beakful of the week.", "Snack secured with style."], chat: ["Sea breezes make me feel brave.", "I like dramatic cliffs and even more dramatic entrances."] },
            funFact: "Puffins use their bright beaks to signal during breeding season and can hold several fish at once.",
            backstory: "Arrived from a marine bird rehab and immediately turned every hallway into a catwalk."
        },
        {
            id: "honey-bee",
            species: "Honey Bee",
            habitat: "Lavender Hives",
            defaultName: "Buzzby",
            altNames: ["Pollen", "Amber", "Pip", "Sunny"],
            rarity: "uncommon",
            appearance: { kind: "bee", primary: "#ffd65c", secondary: "#f2fbff", accent: "#3b2e22", eyeColor: "#2f271e" },
            archetype: "Garden Zoomer",
            traits: ["Busy", "Bright", "Helpful"],
            stats: { cuddliness: 5, playfulness: 9, cleverness: 7, mischief: 4, talk: 7 },
            phrases: { pet: ["Tiny buzzing cuddle incoming.", "I feel adored and pollinated with joy."], play: ["Zoomie loop!", "I can absolutely outfly this toy."], treat: ["Flower syrup is my dream snack.", "Sweet reward detected."], chat: ["I like organised gardens and good teamwork.", "There is always another flower to inspect."] },
            funFact: "Honey bees communicate useful food locations with a movement pattern called the waggle dance.",
            backstory: "Nursed through a cold snap in a greenhouse and now treats every blossom like a friend."
        },
        {
            id: "bumble-bee",
            species: "Bumble Bee",
            habitat: "Clover Apiary",
            defaultName: "Bramble",
            altNames: ["Buzz", "Daisy", "Pollen", "Maple"],
            rarity: "rare",
            appearance: { kind: "bee", primary: "#f8d14d", secondary: "#eaf5ff", accent: "#242428", eyeColor: "#211f18" },
            archetype: "Fluffy Flyer",
            traits: ["Round", "Cheery", "Determined"],
            stats: { cuddliness: 6, playfulness: 8, cleverness: 7, mischief: 3, talk: 7 },
            phrases: { pet: ["Soft little bee hug unlocked.", "I hum when I am happy, which is now."], play: ["I may wobble, but I still zoom.", "This game could use more flowers."], treat: ["A sugary sip? Magnificent.", "Tiny bee delight achieved."], chat: ["I like flowers that feel like sunshine.", "Being fluffy and busy is a very good life."] },
            funFact: "Bumble bees can warm their flight muscles by vibrating them before takeoff.",
            backstory: "Rescued from a florist van and still smells faintly like wildflowers and adventure."
        },
        {
            id: "twilight-bat",
            species: "Twilight Bat",
            habitat: "Velvet Cave",
            defaultName: "Echo",
            altNames: ["Dusk", "Pip", "Shade", "Moth"],
            rarity: "rare",
            appearance: { kind: "bat", primary: "#5a5167", secondary: "#d9d0e6", accent: "#2f2936", eyeColor: "#1e1a25" },
            archetype: "Moonbeam Acrobat",
            traits: ["Graceful", "Quick", "Clever"],
            stats: { cuddliness: 6, playfulness: 9, cleverness: 8, mischief: 6, talk: 5 },
            phrases: { pet: ["A bat can enjoy gentle pats too.", "I am a cosy little night flier."], play: ["Loop-de-loop time!", "I was built for upside-down fun."], treat: ["This snack is worthy of the night shift.", "Mmm. Excellent tiny reward."], chat: ["The dark is full of helpful details.", "I am basically moonlight with wings."] },
            funFact: "Many bats use echolocation, sending out sounds and listening for echoes to navigate.",
            backstory: "Recovered from a wildlife rehab and now naps like a tiny velvet lantern behind the curtains."
        },
        {
            id: "rosy-fruit-bat",
            species: "Rosy Fruit Bat",
            habitat: "Orchid Grotto",
            defaultName: "Blush",
            altNames: ["Berry", "Luma", "Peach", "Nova"],
            rarity: "ultra-rare",
            appearance: { kind: "bat", primary: "#7a5d77", secondary: "#f6d8df", accent: "#433245", eyeColor: "#281d2b" },
            archetype: "Orchard Floatie",
            traits: ["Sweet", "Gentle", "Elegant"],
            stats: { cuddliness: 7, playfulness: 7, cleverness: 8, mischief: 3, talk: 5 },
            phrases: { pet: ["That was soft as blossom air.", "I feel very safe in this cuddle."], play: ["A graceful swoop is enough for me.", "I like games with a little sparkle."], treat: ["Fruit snacks are poetry.", "This bite tastes like a moonlit orchard."], chat: ["I think best while hanging quietly.", "Night gardens are my favourite kind of beautiful."] },
            funFact: "Fruit bats help forests by spreading seeds and pollen as they feed.",
            backstory: "Came from a conservation nursery and still looks happiest near anything flowering."
        },
        {
            id: "drift-dolphin",
            species: "Drift Dolphin",
            habitat: "Crystal Tide",
            defaultName: "Drift",
            altNames: ["Wave", "Skipper", "Pearl", "Mira"],
            rarity: "legendary",
            appearance: { kind: "dolphin", noseKind: "dolphin", mouthKind: "dolphin", primary: "#72b7da", secondary: "#dff5ff", accent: "#3d7ea1", eyeColor: "#193247" },
            archetype: "Laughing Wave",
            traits: ["Brilliant", "Playful", "Friendly"],
            stats: { cuddliness: 7, playfulness: 10, cleverness: 10, mischief: 5, talk: 8 },
            phrases: { pet: ["That was fin-tastic. Sorry, I had to.", "I am a very happy little splash."], play: ["Race you to the imaginary surf!", "I turn every game into a water show."], treat: ["Fishy treats are a solid yes.", "Excellent reward. Ten out of ten splashes."], chat: ["I like jokes, teamwork and smooth sea songs.", "Life is better with a little echoing laughter."] },
            funFact: "Dolphins are highly social and can recognise each other using unique whistle calls.",
            backstory: "Transferred from a marine rescue education team and somehow made the whole haven feel brighter."
        },
        {
            id: "ripple-manatee",
            species: "Ripple Manatee",
            habitat: "Lily Lagoon",
            defaultName: "Ripple",
            altNames: ["Lotus", "Drizzle", "Mallow", "Sora"],
            rarity: "rare",
            appearance: { kind: "dolphin", bodyKind: "dolphin", headKind: "dolphin", tailKind: "dolphin", noseKind: "dolphin", mouthKind: "dolphin", primary: "#9fb7ba", secondary: "#dfeeed", accent: "#6c878a", eyeColor: "#243638" },
            archetype: "Marshmallow Mariner",
            traits: ["Gentle", "Sleepy", "Kind"],
            stats: { cuddliness: 9, playfulness: 4, cleverness: 7, mischief: 1, talk: 3 },
            phrases: { pet: ["Soft little sea hug accepted.", "I am all calm and squish."], play: ["Maybe one easy floaty game.", "I prefer peaceful fun."], treat: ["Leafy water snacks are perfect.", "A calm little munch is all I need."], chat: ["Warm shallows are my happy place.", "I like slow thoughts and kind friends."] },
            funFact: "Manatees are gentle herbivores that spend much of their day grazing on aquatic plants.",
            backstory: "Recovered from a rescue lagoon and now treats every quiet corner like a spa retreat."
        },
        {
            id: "marigold-elephant",
            species: "Marigold Elephant",
            habitat: "Sunpath Savannah",
            defaultName: "Goldie",
            altNames: ["Mallow", "Saffron", "Pebble", "Nori"],
            rarity: "legendary",
            appearance: { kind: "elephant", noseKind: "elephant", mouthKind: "elephant", primary: "#a9a6af", secondary: "#e8e6ef", accent: "#6f6977", eyeColor: "#22222a" },
            archetype: "Gentle Giant",
            traits: ["Wise", "Kind", "Steady"],
            stats: { cuddliness: 9, playfulness: 6, cleverness: 10, mischief: 2, talk: 5 },
            phrases: { pet: ["That was wonderfully kind.", "I remember every good cuddle."], play: ["Big steps, big fun.", "I can still be graceful, thank you."], treat: ["This snack deserves a proud little trumpet.", "Excellent choice, dear friend."], chat: ["Patience is one of my best tricks.", "I like remembering happy things in detail."] },
            funFact: "Elephants have excellent memories and use their trunks for touching, smelling and lifting objects.",
            backstory: "Came from a sanctuary storybook program and carries herself like a warm, wise parade."
        },
        {
            id: "blossom-sloth",
            species: "Blossom Sloth",
            habitat: "Rainflower Canopy",
            defaultName: "Blossom",
            altNames: ["Petal", "Cloud", "Miso", "Fern"],
            rarity: "uncommon",
            appearance: { kind: "sloth", primary: "#8e735d", secondary: "#e6d4bf", accent: "#5f4738", eyeColor: "#2a1f17" },
            archetype: "Slow Bloom",
            traits: ["Calm", "Tender", "Thoughtful"],
            stats: { cuddliness: 9, playfulness: 3, cleverness: 7, mischief: 1, talk: 4 },
            phrases: { pet: ["That was worth waking up for.", "I feel softly delighted."], play: ["We can play slowly and still have fun.", "My best move is a thoughtful reach."], treat: ["A snack this nice deserves a pause.", "Slow chewing is part of the joy."], chat: ["I like taking my time with everything lovely.", "Hanging out is my speciality in every sense."] },
            funFact: "Sloths move slowly to conserve energy and can spend much of their lives hanging in trees.",
            backstory: "Was hand-reared after a storm rescue and now treats every blanket edge like a branch."
        },
        {
            id: "coral-chameleon",
            species: "Coral Chameleon",
            habitat: "Coral Fernhouse",
            defaultName: "Coral",
            altNames: ["Prism", "Tint", "Lumi", "Minty"],
            rarity: "ultra-rare",
            appearance: { kind: "chameleon", primary: "#68c2a7", secondary: "#dff7df", accent: "#ff7f7f", eyeColor: "#21493f" },
            archetype: "Colour Wizard",
            traits: ["Observant", "Quirky", "Artful"],
            stats: { cuddliness: 6, playfulness: 6, cleverness: 9, mischief: 4, talk: 6 },
            phrases: { pet: ["I may change colour, but I always enjoy kindness.", "That pat felt very pastel."], play: ["Camouflage tag is my game.", "I can disappear and win at the same time."], treat: ["Bright little snacks suit me.", "A delicious bite and an excellent mood."], chat: ["Colour is a language if you pay attention.", "I like feeling like a walking mood ring."] },
            funFact: "Chameleons can shift their colours to signal mood, temperature and communication.",
            backstory: "Came from a reptile rescue greenhouse and now treats every plant stand like a stage."
        },
        {
            id: "sunny-gecko",
            species: "Sunny Gecko",
            habitat: "Warmstone Wall",
            defaultName: "Sunny",
            altNames: ["Peb", "Toast", "Roo", "Tika"],
            rarity: "uncommon",
            appearance: { kind: "chameleon", primary: "#f0c45b", secondary: "#fff0b8", accent: "#cf8b3d", eyeColor: "#533c1a" },
            archetype: "Wall Walker",
            traits: ["Nimble", "Bright", "Curious"],
            stats: { cuddliness: 6, playfulness: 8, cleverness: 7, mischief: 5, talk: 5 },
            phrases: { pet: ["Warm hands? Excellent gecko weather.", "I approve of this tiny attention break."], play: ["Watch me stick the landing.", "Climbing counts as showing off, right?"], treat: ["A snack this good deserves a tail wiggle.", "Perfect little bite."], chat: ["Sun-warmed rocks solve many problems.", "I always look for the highest good perch."] },
            funFact: "Many geckos have specialised toe pads that help them cling to smooth surfaces.",
            backstory: "Was found exploring a nursery window and promptly decided warm ledges were the best invention."
        },
        {
            id: "mint-iguana",
            species: "Mint Iguana",
            habitat: "Mango Terrace",
            defaultName: "Mint",
            altNames: ["Leaf", "Jade", "Sora", "Kiwi"],
            rarity: "ultra-rare",
            appearance: { kind: "chameleon", primary: "#7cb36a", secondary: "#dff0c7", accent: "#4b7a3f", eyeColor: "#20351f" },
            archetype: "Sunbathing Sage",
            traits: ["Relaxed", "Sharp", "Cool"],
            stats: { cuddliness: 6, playfulness: 5, cleverness: 8, mischief: 2, talk: 4 },
            phrases: { pet: ["I am a fan of calm, warm affection.", "That was surprisingly lovely."], play: ["Only if there is a sunny rock involved.", "I prefer elegant movement to chaos."], treat: ["Fresh greens? Excellent decision.", "A nice crisp snack makes everything better."], chat: ["I think well when the sun is just right.", "Confidence is mostly posture and good lighting."] },
            funFact: "Iguanas use their tails for balance and defence and spend lots of time basking for warmth.",
            backstory: "Retired from a reptile classroom display and now lives like a tiny leafy philosopher."
        },
        {
            id: "lantern-lemur",
            species: "Lantern Lemur",
            habitat: "Lantern Fig Grove",
            defaultName: "Luma",
            altNames: ["Fig", "Orbit", "Twix", "Mina"],
            rarity: "ultra-rare",
            appearance: { kind: "lemur", markingKind: "lemur", primary: "#8f9aa6", secondary: "#f4f0e8", accent: "#38424d", eyeColor: "#1f252b" },
            archetype: "Moonlight Jumper",
            traits: ["Curious", "Lively", "Social"],
            stats: { cuddliness: 7, playfulness: 9, cleverness: 8, mischief: 6, talk: 7 },
            phrases: { pet: ["I like gentle pats and dramatic moonlight.", "That felt safely wonderful."], play: ["Long tail, big energy!", "Branch-hop challenge accepted."], treat: ["Fig snacks are elite.", "This bite is worthy of a celebratory bounce."], chat: ["Night gardens are full of interesting rumours.", "I like travelling by leap whenever possible."] },
            funFact: "Lemurs use their long tails for balance while moving through trees.",
            backstory: "Arrived from a conservation nursery and instantly made the hanging baskets feel like home."
        },
        {
            id: "desert-meerkat",
            species: "Desert Meerkat",
            habitat: "Sandglass Lookout",
            defaultName: "Pico",
            altNames: ["Scout", "Dune", "Roo", "Bram"],
            rarity: "uncommon",
            appearance: { kind: "mouse", bodyKind: "lemur", headKind: "mouse", earKind: "mouse", tailKind: "ferret", whiskerKind: "mouse", primary: "#d1a273", secondary: "#f4dec4", accent: "#7f5938", eyeColor: "#2e1d12" },
            archetype: "Tiny Sentinel",
            traits: ["Alert", "Brave", "Funny"],
            stats: { cuddliness: 6, playfulness: 8, cleverness: 8, mischief: 5, talk: 7 },
            phrases: { pet: ["One eye on the horizon, one on the cuddles.", "I can be vigilant and adorable together."], play: ["Watch post first, zoomies second.", "I take games very seriously for a tiny creature."], treat: ["Crunchy snacks keep morale high.", "Reward received. Perimeter secure."], chat: ["I like knowing who is coming and why.", "Sunny lookout spots make me feel heroic."] },
            funFact: "Meerkats often take turns acting as lookouts while the rest of the group searches for food.",
            backstory: "Was fostered with a little sand pit and still climbs the highest cushion to inspect the room."
        },
        {
            id: "cocoa-monkey",
            species: "Cocoa Monkey",
            habitat: "Cinnamon Canopy",
            defaultName: "Coco",
            altNames: ["Bean", "Miso", "Swing", "Dart"],
            rarity: "rare",
            appearance: { kind: "lemur", markingKind: "monkey", tailKind: "ferret", primary: "#8a5f42", secondary: "#f1d4b7", accent: "#5d3d2a", eyeColor: "#281912" },
            archetype: "Mischief Swinger",
            traits: ["Playful", "Clever", "Bold"],
            stats: { cuddliness: 7, playfulness: 10, cleverness: 8, mischief: 8, talk: 7 },
            phrases: { pet: ["I can pause climbing for this cuddle.", "That was a very good monkey moment."], play: ["Swing first, ask questions later.", "I was born for dramatic leaps."], treat: ["Banana chips? Say no more.", "That snack had excellent bounce energy."], chat: ["I think better while hanging upside down a little.", "Every curtain looks like a challenge."] },
            funFact: "Many monkeys use long tails and strong limbs to balance as they move through trees.",
            backstory: "Was rehomed from a sanctuary enrichment program and immediately befriended every hanging blanket."
        },
        {
            id: "arctic-fox",
            species: "Arctic Fox",
            habitat: "Snowglow Tundra",
            defaultName: "Frost",
            altNames: ["Glacier", "Mallow", "Skim", "Lark"],
            rarity: "uncommon",
            appearance: { kind: "fox", primary: "#f2f4f8", secondary: "#ffffff", accent: "#c9d4df", eyeColor: "#243548" },
            archetype: "Snow Sprint",
            traits: ["Quick", "Bright", "Resilient"],
            stats: { cuddliness: 7, playfulness: 9, cleverness: 8, mischief: 5, talk: 6 },
            phrases: { pet: ["Cold paws, warm heart.", "You make snowy days feel cosy."], play: ["Tundra zoomies are the best zoomies.", "I can vanish into fluff and still win."], treat: ["A crisp treat for a crisp fox.", "Outstanding snack strategy."], chat: ["I like quiet snow and clever routes.", "My tail solves at least three problems a day."] },
            funFact: "Arctic foxes grow thick seasonal fur and use their tails like warm scarves.",
            backstory: "Joined the haven after a sanctuary transfer and immediately upgraded every blanket fort."
        },
        {
            id: "snow-hare",
            species: "Snow Hare",
            habitat: "Winterberry Hollow",
            defaultName: "Flurry",
            altNames: ["Frosty", "Drift", "Mallow", "Skye"],
            rarity: "common",
            appearance: { kind: "rabbit", primary: "#f7f8fb", secondary: "#fffefe", accent: "#d7dbe7", eyeColor: "#2a3143" },
            archetype: "Powder Puff Runner",
            traits: ["Swift", "Gentle", "Light"],
            stats: { cuddliness: 8, playfulness: 9, cleverness: 7, mischief: 4, talk: 4 },
            phrases: { pet: ["I feel like a little snowball of joy.", "That was beautifully gentle."], play: ["Snowy hop sprint!", "I leave tiny tracks and big excitement."], treat: ["Crunchy winter treats are perfect.", "Best nibble in the burrow."], chat: ["Fresh snow makes everything feel sparkly.", "I like quiet starts and speedy finishes."] },
            funFact: "Many hares have strong hind legs built for fast escapes and long leaps.",
            backstory: "Was found resting in a frosty garden bed and now treats pillows like fresh snowdrifts."
        },
        {
            id: "tide-walrus",
            species: "Tide Walrus",
            habitat: "Northlight Wharf",
            defaultName: "Tide",
            altNames: ["Harbor", "Fog", "Merry", "Brine"],
            rarity: "rare",
            appearance: { kind: "seal", markingKind: "walrus", primary: "#8f827c", secondary: "#d9cfc8", accent: "#6a5d57", eyeColor: "#2a2523" },
            archetype: "Wharf Grandad",
            traits: ["Calm", "Goofy", "Warm"],
            stats: { cuddliness: 9, playfulness: 5, cleverness: 6, mischief: 2, talk: 5 },
            phrases: { pet: ["That pat had excellent harbour energy.", "I am a very content sea potato."], play: ["One big flop and I am in the game.", "I like fun with a side of lounging."], treat: ["Fishy snacks? A wonderful idea.", "This reward deserves a happy snort."], chat: ["I respect cold air and warm naps equally.", "A good day includes a dock, a snack and no rush."] },
            funFact: "Walruses use their whiskers to help detect food on the seafloor.",
            backstory: "Retired from a marine rescue outreach team and now acts like every cushion is a personal wharf."
        },
        {
            id: "river-swan",
            species: "River Swan",
            habitat: "Mirrorlake Reach",
            defaultName: "Pearl",
            altNames: ["Glide", "Ivory", "Lune", "Mist"],
            rarity: "common",
            appearance: { kind: "duck", primary: "#f8fbff", secondary: "#ffffff", accent: "#f4aa42", eyeColor: "#2b3140" },
            archetype: "Grace Paddle",
            traits: ["Elegant", "Calm", "Proud"],
            stats: { cuddliness: 7, playfulness: 5, cleverness: 7, mischief: 2, talk: 6 },
            phrases: { pet: ["A graceful thank-you to you.", "I do enjoy a poised little cuddle."], play: ["Perhaps a refined splash race.", "I can be elegant and competitive."], treat: ["This snack suits my standards.", "Lovely choice. Very swan approved."], chat: ["Still water makes excellent thinking space.", "I like quiet company and good posture."] },
            funFact: "Swans are strong swimmers and can communicate with posture, sound and wing movements.",
            backstory: "Was hand-reared after a riverbank rescue and still glides through every room in spirit."
        },
        {
            id: "sun-parakeet",
            species: "Sun Parakeet",
            habitat: "Sunbeam Aviary",
            defaultName: "Tango",
            altNames: ["Mango", "Blaze", "Pico", "Jive"],
            rarity: "uncommon",
            appearance: { kind: "cockatiel", primary: "#ffd15b", secondary: "#fff5bf", accent: "#ff7f32", eyeColor: "#4c391d" },
            archetype: "Hallway Soloist",
            traits: ["Loud", "Cheerful", "Bright"],
            stats: { cuddliness: 6, playfulness: 9, cleverness: 7, mischief: 6, talk: 10 },
            phrases: { pet: ["Scritches and compliments please.", "I might sing about this later."], play: ["This game needs a soundtrack.", "Wing wiggles are ready."], treat: ["Seed snacks? Encore!", "That bite deserved a happy chirp."], chat: ["I believe every room sounds better with me in it.", "My favourite hobby is cheerful interruption."] },
            funFact: "Many parakeets are social, vocal birds that quickly learn household routines and sounds.",
            backstory: "Was surrendered with a tiny bell toy and now performs whenever anyone opens a notebook."
        },
        {
            id: "misty-reindeer",
            species: "Misty Reindeer",
            habitat: "Frostbell Vale",
            defaultName: "Misty",
            altNames: ["Bell", "Glint", "Pine", "Marlow"],
            rarity: "ultra-rare",
            appearance: { kind: "deer", hornKind: "deer", markingKind: "deer", primary: "#b18965", secondary: "#f2d7b6", accent: "#7a5637", eyeColor: "#3d2b1f" },
            archetype: "Winter Wonder",
            traits: ["Graceful", "Kind", "Brave"],
            stats: { cuddliness: 8, playfulness: 7, cleverness: 7, mischief: 2, talk: 4 },
            phrases: { pet: ["That felt like warm light in cold weather.", "I treasure gentle kindness."], play: ["A crisp little dash sounds lovely.", "I can prance through winter just fine."], treat: ["This snack tastes like a bright day.", "A lovely little reward, thank you."], chat: ["Snow makes every hoofstep feel musical.", "I like paths that glitter a little."] },
            funFact: "Reindeer have wide hooves that help them travel over snow and soft ground.",
            backstory: "Joined the haven from a winter wildlife program and still makes every room feel a bit magical."
        }
    );

    function findPet(id) {
        return PETS.find(p => p.id === id);
    }

    const CLAIM_CANDIDATE_COUNT = 6;
    const RARITY_WEIGHTS = {
        common: 12,
        uncommon: 8,
        rare: 4,
        "ultra-rare": 2,
        legendary: 1
    };

    function weightedPickIndex(pool) {
        const total = pool.reduce((sum, pet) => sum + (RARITY_WEIGHTS[pet.rarity] || 1), 0);
        let roll = Math.random() * total;
        for (let i = 0; i < pool.length; i++) {
            roll -= (RARITY_WEIGHTS[pool[i].rarity] || 1);
            if (roll <= 0) return i;
        }
        return pool.length - 1;
    }

    function pickCandidates(unlockedIds) {
        const available = PETS.filter(p => !unlockedIds.includes(p.id));
        if (!available.length) return [];
        const pool = available.slice();
        const picks = [];
        while (pool.length && picks.length < Math.min(CLAIM_CANDIDATE_COUNT, available.length)) {
            const idx = weightedPickIndex(pool);
            picks.push(pool[idx]);
            pool.splice(idx, 1);
        }
        return picks.sort(() => Math.random() - 0.5);
    }

    function totalPets() {
        return PETS.length;
    }

    function reactionPhrase(petId, kind) {
        const pet = findPet(petId);
        if (!pet) return "Tiny happy squeaks.";
        const list = (pet.phrases && pet.phrases[kind]) || ["Tiny happy squeaks."];
        return pick(list);
    }

    function currentHappiness(pet) {
        if (pet.happiness == null) pet.happiness = 70;
        if (!pet.lastInteractedISO) return pet.happiness;
        const last = new Date(pet.lastInteractedISO).getTime();
        const now = Date.now();
        const days = Math.max(0, (now - last) / (1000 * 60 * 60 * 24));
        const decay = Math.floor(days * 10);
        return Math.max(0, pet.happiness - decay);
    }

    function moodFor(happy) {
        if (happy >= 85) return { label: "Thrilled", expression: "love" };
        if (happy >= 65) return { label: "Happy", expression: "happy" };
        if (happy >= 40) return { label: "Content", expression: "wave" };
        if (happy >= 20) return { label: "Restless", expression: "thinking" };
        return { label: "Sleepy", expression: "napping" };
    }

    window.Animals = {
        PETS,
        svg,
        petSvg,
        popIn,
        celebrate,
        phrases: PHRASES,
        pickTheme,
        themes: Object.keys(PALETTE),
        findPet,
        pickCandidates,
        totalPets,
        reactionPhrase,
        currentHappiness,
        moodFor
    };
})();
