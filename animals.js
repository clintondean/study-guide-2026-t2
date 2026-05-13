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
        requestAnimationFrame(() => popDiv.classList.add("cat-pop-show"));
        setTimeout(() => {
            popDiv.classList.remove("cat-pop-show");
            popDiv.classList.add("cat-pop-leave");
            setTimeout(() => popDiv.remove(), 500);
        }, duration);
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

    function mouthFor(expression, cx, cy, isBeak) {
        if (isBeak) {
            if (expression === "thinking") {
                return `<path d="M ${cx - 6} ${cy} L ${cx + 8} ${cy + 3} L ${cx - 4} ${cy + 10} z" fill="#f0a500"/>`;
            }
            return `<path d="M ${cx - 8} ${cy} L ${cx + 10} ${cy + 2} L ${cx - 6} ${cy + 12} z" fill="#f0a500"/>`;
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
        if (kind === "duck" || kind === "cockatiel" || kind === "seal" || kind === "frog" || kind === "axolotl" || kind === "turtle") return "";
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
        case "cockatiel":
            return `
                <path d="M 110 54 q -12 -34 2 -38 q 8 7 8 28 z" fill="${a.accent}"/>
                <path d="M 120 48 q -2 -40 14 -42 q 7 10 0 30 z" fill="${a.accent}"/>
                <path d="M 130 54 q 14 -34 22 -26 q 5 14 -10 28 z" fill="${a.accent}"/>
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
        case "seal":
            return `<path d="M 178 234 q 44 10 34 34 q -14 16 -42 -2 q 14 -12 8 -32 z" fill="${a.primary}"/>`;
        case "otter":
        case "ferret":
            return `<path d="M 176 230 q 60 0 48 28 q -10 14 -42 6 q 12 -12 6 -34 z" fill="${a.primary}"/>`;
        default:
            return `<path d="M 176 220 q 48 4 40 32 q -12 16 -44 2 q 14 -10 10 -34 z" fill="${a.primary}"/>`;
        }
    }

    function bodyFor(kind, a) {
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
        return `
            <ellipse cx="120" cy="220" rx="58" ry="44" fill="${a.primary}"/>
            <ellipse cx="120" cy="228" rx="30" ry="18" fill="${a.secondary}" opacity="0.9"/>
            <ellipse cx="90" cy="256" rx="12" ry="14" fill="${a.primary}"/>
            <ellipse cx="150" cy="256" rx="12" ry="14" fill="${a.primary}"/>
        `;
    }

    function headFor(kind, a) {
        if (kind === "alpaca") {
            return `
                <ellipse cx="120" cy="134" rx="46" ry="40" fill="${a.primary}"/>
                <ellipse cx="120" cy="152" rx="24" ry="18" fill="${a.secondary}"/>
                <ellipse cx="120" cy="92" rx="34" ry="20" fill="${a.secondary}" opacity="0.85"/>
            `;
        }
        if (kind === "frog") {
            return `
                <ellipse cx="120" cy="136" rx="52" ry="38" fill="${a.primary}"/>
                <ellipse cx="120" cy="154" rx="26" ry="16" fill="${a.secondary}" opacity="0.8"/>
            `;
        }
        if (kind === "seal") {
            return `
                <ellipse cx="120" cy="138" rx="48" ry="38" fill="${a.primary}"/>
                <ellipse cx="120" cy="156" rx="24" ry="16" fill="${a.secondary}" opacity="0.9"/>
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
        default:
            return "";
        }
    }

    function hornsFor(kind, a) {
        if (kind !== "deer") return "";
        return `
            <path d="M 96 92 q -8 -24 -18 -26 q 2 16 -8 24" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M 144 92 q 8 -24 18 -26 q -2 16 8 24" stroke="${a.accent}" stroke-width="5" fill="none" stroke-linecap="round"/>
        `;
    }

    function noseFor(kind, a) {
        if (kind === "duck" || kind === "cockatiel") return "";
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
        const faceY = headKind === "alpaca" ? 142 : 144;
        const isBeak = mouthKind === "duck" || mouthKind === "cockatiel";
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
                ${mouthFor(expression, 120, faceY + 6, isBeak)}
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
