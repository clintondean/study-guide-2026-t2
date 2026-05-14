(function () {
    "use strict";

    const RARITY_ORDER = ["common", "uncommon", "rare", "ultra-rare", "legendary"];
    const CAT_EAR_PRIORITY = ["normal", "small", "big", "folded", "curl", "tufted"];
    const DISTINCTIVE_EAR_KINDS = new Set(["rabbit", "fox", "fennec", "alpaca", "deer", "koala", "panda", "cockatiel", "frog", "squirrel", "mouse", "hamster", "piglet", "sheep", "goat", "owl", "bee", "bat", "elephant", "sloth", "chameleon", "lemur"]);
    const DISTINCTIVE_TAIL_KINDS = new Set(["rabbit", "fox", "fennec", "red-panda", "raccoon", "seal", "otter", "ferret", "squirrel", "mouse", "hamster", "beaver", "piglet", "sheep", "goat", "owl", "penguin", "bee", "bat", "dolphin", "elephant", "sloth", "chameleon", "lemur"]);
    const MARKING_KINDS = new Set(["red-panda", "raccoon", "panda", "deer", "hedgehog", "axolotl", "cockatiel", "owl", "chameleon", "lemur"]);
    const HORN_KINDS = new Set(["deer", "goat"]);
    const NO_WHISKER_KINDS = new Set(["duck", "cockatiel", "seal", "frog", "axolotl", "turtle", "bee", "owl", "penguin", "dolphin", "elephant", "chameleon", "bat", "piglet", "sheep", "goat", "sloth", "lemur"]);
    const BEAK_KINDS = new Set(["duck", "cockatiel", "owl", "penguin"]);
    let clipCounter = 0;

    function uid(prefix) {
        clipCounter += 1;
        return `${prefix}-${clipCounter}`;
    }

    function sortIds(idA, idB) {
        return [String(idA || ""), String(idB || "")].sort();
    }

    function catId(idA, idB) {
        const pair = sortIds(idA, idB);
        return `hycat--${pair[0]}--${pair[1]}`;
    }

    function animalId(idA, idB, opts) {
        const pair = sortIds(idA, idB);
        const prefix = opts && opts.sparkle ? "hypet-sparkle" : "hypet";
        return `${prefix}--${pair[0]}--${pair[1]}`;
    }

    function clamp(n, min, max) {
        return Math.max(min, Math.min(max, n));
    }

    function pick(arr, fallback) {
        if (!Array.isArray(arr) || !arr.length) return fallback || "";
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function rankFor(rarity) {
        const idx = RARITY_ORDER.indexOf(rarity);
        return idx >= 0 ? idx : 0;
    }

    function rarityFrom(a, b) {
        const avg = Math.round((rankFor(a) + rankFor(b)) / 2);
        return RARITY_ORDER[clamp(avg, 0, RARITY_ORDER.length - 1)];
    }

    function hexToRgb(hex) {
        const clean = String(hex || "").replace("#", "");
        if (!/^[0-9a-fA-F]{6}$/.test(clean)) return { r: 0, g: 0, b: 0 };
        return {
            r: parseInt(clean.slice(0, 2), 16),
            g: parseInt(clean.slice(2, 4), 16),
            b: parseInt(clean.slice(4, 6), 16)
        };
    }

    function rgbToHex(rgb) {
        const parts = [rgb.r, rgb.g, rgb.b].map(v => clamp(Math.round(v), 0, 255).toString(16).padStart(2, "0"));
        return `#${parts.join("")}`;
    }

    function blendHex(a, b, weight) {
        const left = hexToRgb(a);
        const right = hexToRgb(b);
        const t = weight == null ? 0.5 : clamp(weight, 0, 1);
        return rgbToHex({
            r: left.r + (right.r - left.r) * t,
            g: left.g + (right.g - left.g) * t,
            b: left.b + (right.b - left.b) * t
        });
    }

    function cleanWord(text) {
        return String(text || "").replace(/[^a-zA-Z]/g, "");
    }

    function titleCase(text) {
        return String(text || "").replace(/\b([a-z])/g, function (_, c) { return c.toUpperCase(); });
    }

    function blendName(a, b) {
        const left = cleanWord(a);
        const right = cleanWord(b);
        if (!left && !right) return "Whiskerwink";
        if (!left) return titleCase(right);
        if (!right) return titleCase(left);
        const cutA = clamp(Math.ceil(left.length / 2), 2, left.length);
        const cutB = clamp(Math.floor(right.length / 2), 1, right.length - 1 || 1);
        const merged = left.slice(0, cutA) + right.slice(cutB);
        return titleCase(merged || `${left}${right}`);
    }

    function mergeTraits(a, b) {
        return Array.from(new Set([].concat(a || [], b || []))).slice(0, 5);
    }

    function mergeStats(a, b) {
        const keys = ["cuddliness", "playfulness", "cleverness", "mischief", "talk"];
        const out = {};
        keys.forEach(key => {
            out[key] = Math.round((((a && a[key]) || 0) + ((b && b[key]) || 0)) / 2);
        });
        return out;
    }

    function mergePhrases(a, b, intro) {
        const combined = [];
        (a || []).slice(0, 2).forEach(line => combined.push(line));
        (b || []).slice(0, 2).forEach(line => combined.push(line));
        if (intro) combined.unshift(intro);
        return Array.from(new Set(combined)).slice(0, 5);
    }

    function mergeAppearance(a, b) {
        const patternA = (a && a.pattern) || "solid";
        const patternB = (b && b.pattern) || "solid";
        return {
            primary: blendHex(a && a.primary, b && b.primary, 0.35),
            secondary: blendHex(a && a.secondary, b && b.secondary, 0.65),
            accent: blendHex(a && a.accent, b && b.accent, 0.5),
            eyeColor: blendHex(a && a.eyeColor, b && b.eyeColor, 0.5),
            noseColor: blendHex(a && a.noseColor, b && b.noseColor, 0.5),
            pattern: mergeCatPattern(patternA, patternB),
            fluff: mergeCatFluff(a && a.fluff, b && b.fluff),
            earStyle: mergeCatEarStyle(a && a.earStyle, b && b.earStyle),
            tail: mergeCatTail(a && a.tail, b && b.tail),
            calicoColors: patternA === "calico" || patternB === "calico"
                ? [
                    blendHex(a && a.primary, b && b.accent, 0.3),
                    blendHex(a && a.accent, b && b.primary, 0.65)
                ]
                : undefined
        };
    }

    function mergeCatPattern(patternA, patternB) {
        const unique = Array.from(new Set([patternA || "solid", patternB || "solid"]));
        if (unique.length === 1) return unique[0];
        if (unique.includes("calico")) return "calico";
        if (unique.includes("tortie") && unique.includes("stripes")) return "spots";
        if (unique.includes("spots") || (unique.includes("stripes") && unique.includes("points"))) return "spots";
        if (unique.includes("points")) return "points";
        if (unique.includes("tuxedo")) return "tuxedo";
        if (unique.includes("tortie")) return "tortie";
        if (unique.includes("stripes")) return "stripes";
        return unique.find(pattern => pattern !== "solid") || unique[0];
    }

    function mergeCatFluff(fluffA, fluffB) {
        const unique = Array.from(new Set([fluffA || "medium", fluffB || "medium"]));
        if (unique.length === 1) return unique[0];
        if (unique.includes("long")) return "long";
        if (unique.includes("hairless")) return "short";
        if (unique.includes("medium")) return "medium";
        return "short";
    }

    function mergeCatEarStyle(earA, earB) {
        const options = [earA || "normal", earB || "normal"];
        return options.sort((left, right) => CAT_EAR_PRIORITY.indexOf(right) - CAT_EAR_PRIORITY.indexOf(left))[0] || "normal";
    }

    function mergeCatTail(tailA, tailB) {
        const left = tailA || "long";
        const right = tailB || "long";
        if (left === right) return left;
        if (left === "none" && right === "none") return "none";
        if (left === "long" || right === "long") return "long";
        return "short";
    }

    function brightenAppearance(appearance) {
        const a = appearance || {};
        return Object.assign({}, a, {
            primary: blendHex(a.primary, "#fff59d", 0.45),
            secondary: blendHex(a.secondary, "#ffffff", 0.55),
            accent: blendHex(a.accent, "#7df9ff", 0.5),
            eyeColor: blendHex(a.eyeColor, "#fff176", 0.45)
        });
    }

    function buildCatSpec(idA, idB) {
        const pair = sortIds(idA, idB);
        const left = window.Clan && window.Clan.findBreed(pair[0]);
        const right = window.Clan && window.Clan.findBreed(pair[1]);
        if (!left || !right || left.id === right.id) return null;
        const defaultName = blendName(left.defaultName, right.defaultName);
        return {
            id: catId(pair[0], pair[1]),
            kind: "cat",
            hybrid: true,
            parentIds: pair,
            breed: `${left.breed} × ${right.breed}`,
            origin: `${left.origin} + ${right.origin}`,
            defaultName,
            rarity: rarityFrom(left.rarity, right.rarity),
            appearance: mergeAppearance(left.appearance, right.appearance),
            archetype: `${left.archetype} + ${right.archetype}`,
            traits: mergeTraits(left.traits, right.traits),
            stats: mergeStats(left.stats, right.stats),
            phrases: {
                pet: mergePhrases(left.phrases && left.phrases.pet, right.phrases && right.phrases.pet, "Half purr, half mischief, fully delighted."),
                play: mergePhrases(left.phrases && left.phrases.play, right.phrases && right.phrases.play, "Double zoomies engaged."),
                treat: mergePhrases(left.phrases && left.phrases.treat, right.phrases && right.phrases.treat, "Two snack opinions, one happy tummy."),
                chat: mergePhrases(left.phrases && left.phrases.chat, right.phrases && right.phrases.chat, "This hybrid has stories from both sides of the cat tree.")
            },
            funFact: `This hybrid remixes ${left.breed} charm with ${right.breed} chaos into one gloriously over-designed floof.`,
            backstory: `${defaultName} appeared when ${left.defaultName} and ${right.defaultName} shared one especially imaginative afternoon.`
        };
    }

    function buildAnimalSpec(idA, idB, opts) {
        opts = opts || {};
        const pair = sortIds(idA, idB);
        const left = window.Animals && window.Animals.findPet(pair[0]);
        const right = window.Animals && window.Animals.findPet(pair[1]);
        const sparkle = !!opts.sparkle;
        const sameType = left && right && left.id === right.id;
        if (!left || !right || (sameType && !sparkle)) return null;
        const leftKind = left.appearance && left.appearance.kind;
        const rightKind = right.appearance && right.appearance.kind;
        const baseAppearance = sameType
            ? Object.assign({}, left.appearance)
            : {
                kind: chooseAnimalBodyKind(leftKind, rightKind),
                bodyKind: chooseAnimalBodyKind(leftKind, rightKind),
                headKind: chooseAnimalHeadKind(leftKind, rightKind),
                earKind: chooseFeatureKind([leftKind, rightKind], DISTINCTIVE_EAR_KINDS, chooseAnimalHeadKind(leftKind, rightKind)),
                tailKind: chooseFeatureKind([rightKind, leftKind], DISTINCTIVE_TAIL_KINDS, chooseAnimalBodyKind(leftKind, rightKind)),
                markingKinds: Array.from(new Set([leftKind, rightKind].filter(kind => MARKING_KINDS.has(kind)))),
                hornKinds: Array.from(new Set([leftKind, rightKind].filter(kind => HORN_KINDS.has(kind)))),
                whiskerKind: chooseAnimalWhiskerKind(leftKind, rightKind),
                noseKind: chooseAnimalNoseKind(leftKind, rightKind),
                mouthKind: chooseAnimalMouthKind(leftKind, rightKind),
                primary: blendHex(left.appearance && left.appearance.primary, right.appearance && right.appearance.primary, 0.4),
                secondary: blendHex(left.appearance && left.appearance.secondary, right.appearance && right.appearance.secondary, 0.6),
                accent: blendHex(left.appearance && left.appearance.accent, right.appearance && right.appearance.accent, 0.5),
                eyeColor: blendHex(left.appearance && left.appearance.eyeColor, right.appearance && right.appearance.eyeColor, 0.5)
            };
        const appearance = sparkle ? brightenAppearance(baseAppearance) : baseAppearance;
        const baseName = sameType ? left.defaultName : blendName(left.defaultName, right.defaultName);
        const defaultName = sparkle ? blendName("Glimmer", baseName) : baseName;
        const species = sameType
            ? (sparkle ? `Sparkle ${left.species}` : left.species)
            : `${sparkle ? "Sparkle " : ""}${left.species} × ${right.species}`;
        return {
            id: animalId(pair[0], pair[1], { sparkle }),
            kind: "animal",
            hybrid: !sameType,
            sparkle,
            parentIds: pair,
            species,
            habitat: sameType ? left.habitat : `${left.habitat} + ${right.habitat}`,
            defaultName,
            rarity: rarityFrom(left.rarity, right.rarity),
            appearance,
            archetype: sameType ? (sparkle ? `${left.archetype} + Glowbug` : left.archetype) : `${left.archetype} + ${right.archetype}`,
            traits: mergeTraits(left.traits, right.traits),
            stats: mergeStats(left.stats, right.stats),
            phrases: {
                pet: mergePhrases(left.phrases && left.phrases.pet, right.phrases && right.phrases.pet, sparkle ? "A bright little glow-bundle leans in for cuddles." : "A delightfully mismatched cuddle has arrived."),
                play: mergePhrases(left.phrases && left.phrases.play, right.phrases && right.phrases.play, sparkle ? "Every zoomie leaves a sparkle trail." : "Two play styles, one chaotic masterpiece."),
                treat: mergePhrases(left.phrases && left.phrases.treat, right.phrases && right.phrases.treat, sparkle ? "Even the snacks look shinier now." : "Snack diplomacy has been declared a success."),
                chat: mergePhrases(left.phrases && left.phrases.chat, right.phrases && right.phrases.chat, sparkle ? "This pet glows while gossiping." : "This hybrid has gossip from two habitats.")
            },
            funFact: sparkle
                ? (sameType
                    ? `${left.species} plus a Sparkle Potion becomes a bright-glow version that lights up every room.`
                    : `This sparkle hybrid looks like ${left.species} and ${right.species} held a starlit design jam and kept every weirdly brilliant idea.`)
                : `This hybrid borrows the best bits of ${left.species} and ${right.species} to make one delightfully overcommitted creature.`,
            backstory: sparkle
                ? (sameType
                    ? `${defaultName} bubbled into being when ${left.defaultName} met a Sparkle Potion and refused to stop glowing.`
                    : `${defaultName} scampered out of a starlit mash-up where ${left.defaultName} and ${right.defaultName} got a magical glow-up together.`)
                : `${defaultName} scampered out of a daydream where ${left.defaultName} and ${right.defaultName} somehow became one unforgettable bestie.`
        };
    }

    function chooseAnimalBodyKind(kindA, kindB) {
        return chooseFeatureKind([kindA, kindB], DISTINCTIVE_TAIL_KINDS, kindA || kindB || "rabbit");
    }

    function chooseAnimalHeadKind(kindA, kindB) {
        return chooseFeatureKind([kindB, kindA], DISTINCTIVE_EAR_KINDS, kindB || kindA || "rabbit");
    }

    function chooseFeatureKind(candidates, featureSet, fallback) {
        const valid = (candidates || []).filter(Boolean);
        const found = valid.find(kind => featureSet.has(kind));
        return found || valid[0] || fallback || "rabbit";
    }

    function chooseAnimalWhiskerKind(kindA, kindB) {
        const valid = [kindA, kindB].filter(Boolean);
        return valid.find(kind => !NO_WHISKER_KINDS.has(kind)) || valid[0] || "rabbit";
    }

    function chooseAnimalNoseKind(kindA, kindB) {
        const headKind = chooseAnimalHeadKind(kindA, kindB);
        if (BEAK_KINDS.has(headKind)) {
            return chooseAnimalWhiskerKind(kindA, kindB);
        }
        return headKind;
    }

    function chooseAnimalMouthKind(kindA, kindB) {
        const valid = [chooseAnimalHeadKind(kindA, kindB), kindA, kindB].filter(Boolean);
        return valid.find(kind => BEAK_KINDS.has(kind)) || valid[0] || "rabbit";
    }

    function sparkleDecor(seamX, seamBottom, accent) {
        const glowId = uid("sparkle-glow");
        const starColor = blendHex(accent || "#7df9ff", "#ffffff", 0.5);
        return {
            defs: `
        <radialGradient id="${glowId}" cx="50%" cy="44%" r="62%">
            <stop offset="0%" stop-color="#fffdf0" stop-opacity="0.95"></stop>
            <stop offset="52%" stop-color="${starColor}" stop-opacity="0.32"></stop>
            <stop offset="100%" stop-color="${starColor}" stop-opacity="0"></stop>
        </radialGradient>`,
            backdrop: `<ellipse cx="${seamX}" cy="${Math.round(seamBottom * 0.48)}" rx="${Math.round(seamX * 0.72)}" ry="${Math.round(seamBottom * 0.3)}" fill="url(#${glowId})"></ellipse>`,
            front: `
    <g opacity="0.92">
        <circle cx="${seamX - 46}" cy="${Math.round(seamBottom * 0.18)}" r="8" fill="#fffdf0"></circle>
        <path d="M ${seamX + 44} ${Math.round(seamBottom * 0.16)} l 5 12 l 12 5 l -12 5 l -5 12 l -5 -12 l -12 -5 l 12 -5 z" fill="${starColor}"></path>
        <path d="M ${seamX - 18} ${Math.round(seamBottom * 0.1)} l 4 9 l 9 4 l -9 4 l -4 9 l -4 -9 l -9 -4 l 9 -4 z" fill="#fffdf0"></path>
    </g>`
        };
    }

    function decorateSvg(svg, viewBox, opts) {
        opts = opts || {};
        if (!svg) return "";
        const centerX = opts.centerX == null ? Math.round((opts.width || 200) / 2) : opts.centerX;
        const baseY = opts.baseY == null ? (opts.height || 200) : opts.baseY;
        const sparkle = opts.sparkle ? sparkleDecor(centerX, baseY, opts.accent) : { defs: "", backdrop: "", front: "" };
        const extraBack = opts.backdrop || "";
        const extraFront = opts.front || "";
        return String(svg)
            .replace(/<svg\b([^>]*)>/, `<svg$1><defs>${sparkle.defs}</defs>${sparkle.backdrop}${extraBack}`)
            .replace(/<\/svg>\s*$/, `${extraFront}${sparkle.front}</svg>`)
            .replace(/class="([^"]*)"/, 'class="$1 hybrid-svg"');
    }

    function renderCatHybrid(spec, expression) {
        const hybrid = spec && spec.parentIds ? spec : (spec ? buildCatSpec(spec[0], spec[1]) : null);
        if (!hybrid) return "";
        const left = window.Clan && window.Clan.findBreed(hybrid.parentIds[0]);
        const right = window.Clan && window.Clan.findBreed(hybrid.parentIds[1]);
        if (!left || !right) return "";
        return decorateSvg(
            window.Cats.breedSvg(hybrid.appearance, expression || "wave"),
            "0 0 200 200",
            {
                width: 200,
                height: 200,
                backdrop: catHybridBackdrop(left, right),
                front: catHybridFront(left, right)
            }
        );
    }

    function renderAnimalHybrid(spec, expression) {
        const hybrid = spec && spec.parentIds ? spec : (spec ? buildAnimalSpec(spec[0], spec[1], spec[2]) : null);
        if (!hybrid) return "";
        const left = window.Animals && window.Animals.findPet(hybrid.parentIds[0]);
        const right = window.Animals && window.Animals.findPet(hybrid.parentIds[1]);
        if (!left || !right) return "";
        const pet = { appearance: hybrid.appearance };
        return decorateSvg(
            window.Animals.petSvg(pet, expression || "happy"),
            "0 0 240 280",
            {
                width: 240,
                height: 280,
                sparkle: hybrid.sparkle,
                accent: hybrid.appearance && hybrid.appearance.accent,
                backdrop: hybrid.hybrid ? animalHybridBackdrop(left, right) : "",
                front: hybrid.hybrid ? animalHybridFront(left, right) : ""
            }
        );
    }

    function catHybridBackdrop(left, right) {
        return `
    <ellipse cx="72" cy="134" rx="22" ry="12" fill="${blendHex(left.appearance && left.appearance.secondary, right.appearance && right.appearance.secondary, 0.35)}" opacity="0.38"></ellipse>
    <ellipse cx="132" cy="118" rx="18" ry="11" fill="${blendHex(left.appearance && left.appearance.accent, right.appearance && right.appearance.secondary, 0.55)}" opacity="0.28"></ellipse>`;
    }

    function catHybridFront(left, right) {
        return `
    <path d="M 62 92 q 16 -18 34 -8 q -6 18 -24 24 q -16 -2 -10 -16 z" fill="${blendHex(left.appearance && left.appearance.primary, right.appearance && right.appearance.accent, 0.45)}" opacity="0.46"></path>
    <path d="M 116 128 q 24 -12 30 10 q -10 14 -28 10 q -10 -8 -2 -20 z" fill="${blendHex(left.appearance && left.appearance.accent, right.appearance && right.appearance.primary, 0.5)}" opacity="0.4"></path>`;
    }

    function animalHybridBackdrop(left, right) {
        return `
    <ellipse cx="120" cy="218" rx="60" ry="32" fill="${blendHex(left.appearance && left.appearance.secondary, right.appearance && right.appearance.secondary, 0.5)}" opacity="0.18"></ellipse>`;
    }

    function animalHybridFront(left, right) {
        return `
    <path d="M 74 180 q 24 -18 52 -8 q -10 18 -34 24 q -24 0 -18 -16 z" fill="${blendHex(left.appearance && left.appearance.accent, right.appearance && right.appearance.primary, 0.42)}" opacity="0.32"></path>
    <path d="M 132 198 q 26 -12 40 10 q -12 16 -34 14 q -12 -8 -6 -24 z" fill="${blendHex(left.appearance && left.appearance.primary, right.appearance && right.appearance.accent, 0.58)}" opacity="0.26"></path>`;
    }

    function reactionPhrase(spec, kind) {
        const hybrid = spec && spec.phrases ? spec : null;
        const lines = hybrid && hybrid.phrases && hybrid.phrases[kind];
        return pick(lines, "A gloriously goofy hybrid noise happens.");
    }

    window.Hybrids = {
        catId,
        animalId,
        buildCatSpec,
        buildAnimalSpec,
        renderCatHybrid,
        renderAnimalHybrid,
        reactionPhrase
    };
})();
