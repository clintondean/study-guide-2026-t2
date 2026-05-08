// Cat Clan — collectible cat breeds Harper unlocks by scoring 100% on exams.
// Exposes window.Clan.

(function () {
    "use strict";

    // 18 distinct breeds. Each has appearance (rendered by Cats.breedSvg)
    // plus personality, stats, and a stash of phrases per interaction.
    const BREEDS = [
        {
            id: "ginger-tabby",
            breed: "Orange Tabby",
            origin: "Worldwide",
            defaultName: "Marmalade",
            altNames: ["Cheddar", "Mango", "Sunny", "Pumpkin"],
            rarity: "common",
            appearance: { primary: "#f4a261", secondary: "#ffd9b3", accent: "#e07a3a", eyeColor: "#2a8a3a", pattern: "stripes", fluff: "medium", earStyle: "normal", tail: "long" },
            archetype: "Adventurer",
            traits: ["Bold", "Curious", "Affectionate"],
            stats: { cuddliness: 7, playfulness: 9, cleverness: 6, mischief: 8, talk: 6 },
            phrases: {
                pet: ["Mrowww... that's the spot!", "Behind the ear, please.", "I'm purring, you can probably hear it.", "Ohhh yes."],
                play: ["GOT IT! Got it got it got it!", "Throw it again throw it again!", "I caught the wiggly thing!", "*pounce*"],
                treat: ["*chomp* More?", "I love you forever.", "Best friend status: confirmed.", "I'd commit a small crime for another."],
                chat: ["I escaped the laundry basket again, can you tell?", "I climbed the curtain. Don't tell anyone.", "Did you know the sun spot moved?", "I have a secret stash of bottle caps."]
            },
            funFact: "About 80% of orange tabbies are male — 'ginger boys' are statistically the rule."
        },
        {
            id: "tuxedo",
            breed: "Tuxedo",
            origin: "Worldwide",
            defaultName: "Mr Whiskers",
            altNames: ["Bowtie", "Domino", "Ringo", "Penguin"],
            rarity: "common",
            appearance: { primary: "#1a1a1d", secondary: "#fff", accent: "#0f0f12", eyeColor: "#2dba5e", pattern: "tuxedo", fluff: "short", earStyle: "normal", tail: "long" },
            archetype: "Dapper Gentleman",
            traits: ["Polite", "Observant", "Quietly mischievous"],
            stats: { cuddliness: 6, playfulness: 7, cleverness: 9, mischief: 7, talk: 5 },
            phrases: {
                pet: ["A thoughtful gesture, thank you.", "Mmhmm.", "Adequate scritches.", "I shall purr now."],
                play: ["A small swat. Refined.", "I prefer ribbon, actually.", "Very well, I shall pursue.", "*precise pounce*"],
                treat: ["Acceptable.", "An excellent vintage.", "Service: efficient. Thank you.", "I shall remember this."],
                chat: ["I have observed the local fauna. Birds remain inscrutable.", "The fridge made a sound. It is suspicious.", "I have been pondering boxes.", "The red dot has returned. I have theories."]
            },
            funFact: "Tuxedos are not a breed — they're a coat pattern. Many breeds can be 'tuxedo'."
        },
        {
            id: "calico",
            breed: "Calico",
            origin: "Japan / worldwide",
            defaultName: "Patches",
            altNames: ["Mosaic", "Confetti", "Ginger Snap", "Pebble"],
            rarity: "uncommon",
            appearance: { primary: "#fff", secondary: "#fff", accent: "#2f2f33", eyeColor: "#f0a500", pattern: "calico", fluff: "medium", earStyle: "normal", tail: "long", calicoColors: ["#f4a261", "#2f2f33"] },
            archetype: "Drama Queen",
            traits: ["Sassy", "Independent", "Emotional"],
            stats: { cuddliness: 5, playfulness: 7, cleverness: 7, mischief: 8, talk: 9 },
            phrases: {
                pet: ["Mmmm — wait, only on MY terms.", "Oh fine. Two pets.", "Don't tell anyone I liked that.", "*loud purr* *suddenly aloof*"],
                play: ["I CAN'T STOP HISSING AT IT", "Got it! Lost it! GOT IT!", "Drama! Action! Intrigue!", "I shall attack from above."],
                treat: ["FINALLY my breakfast is acknowledged.", "Acceptable, peasant.", "*chomp* I deserve this.", "Tastes like winning."],
                chat: ["I have feelings about the curtains. Many feelings.", "Today is a Tuesday. I disapprove.", "Have you considered I am the main character?", "There is an injustice in my food bowl."]
            },
            funFact: "Calicos are almost always female — about 1 in 3,000 calicos is male and almost always sterile."
        },
        {
            id: "siamese",
            breed: "Siamese",
            origin: "Thailand",
            defaultName: "Sapphire",
            altNames: ["Kao", "Mai Tai", "Bangkok", "Lila"],
            rarity: "uncommon",
            appearance: { primary: "#f4ecd8", secondary: "#fff8e7", accent: "#5a3a22", eyeColor: "#3da9fc", pattern: "points", fluff: "short", earStyle: "big", tail: "long" },
            archetype: "Vocal Commentator",
            traits: ["Loud", "Loyal", "Demanding"],
            stats: { cuddliness: 8, playfulness: 7, cleverness: 9, mischief: 6, talk: 10 },
            phrases: {
                pet: ["MROWWW (translation: yes)", "Yes hello hello yes pets continue", "I will narrate this experience.", "MEOW MEOW MEOW"],
                play: ["I WILL TELL YOU EVERYTHING ABOUT THIS BALL", "AND THEN! AND THEN! AND THEN!", "MROW (I caught it.)", "I am hunting and ALSO talking."],
                treat: ["Have I told you about my day? Also food.", "MEOW (delicious.)", "I will explain this taste in detail.", "Compliments to the chef. Now: more."],
                chat: ["So I was walking past the door, and—", "Did I tell you about the time the door was CLOSED?", "I have OPINIONS about the new vacuum.", "Listen. LISTEN. I have something to say."]
            },
            funFact: "Siamese cats are famously chatty — they 'talk' more than almost any breed."
        },
        {
            id: "russian-blue",
            breed: "Russian Blue",
            origin: "Russia",
            defaultName: "Misty",
            altNames: ["Anastasia", "Boris", "Pewter", "Twilight"],
            rarity: "uncommon",
            appearance: { primary: "#8aa1b6", secondary: "#c2cfd9", accent: "#5b6c7c", eyeColor: "#4ed4a3", pattern: "solid", fluff: "short", earStyle: "normal", tail: "long" },
            archetype: "Aloof Scholar",
            traits: ["Reserved", "Gentle", "Loyal to one person"],
            stats: { cuddliness: 6, playfulness: 5, cleverness: 9, mischief: 3, talk: 4 },
            phrases: {
                pet: ["...thank you.", "*quiet purr*", "I accept your offering.", "Mmm."],
                play: ["A reasonable use of my time.", "I shall observe first.", "Calculated pounce.", "I prefer puzzles to chaos."],
                treat: ["Excellent quality. Thank you.", "I shall savour this.", "A fine choice.", "Generous."],
                chat: ["I have been reading the patterns of the sun.", "Silence is also a form of conversation.", "I prefer the company of you specifically.", "The dust motes were illuminating today."]
            },
            funFact: "Russian Blues have a 'double coat' — a soft undercoat and a glossy top coat that gives them their silvery shimmer."
        },
        {
            id: "maine-coon",
            breed: "Maine Coon",
            origin: "USA (Maine)",
            defaultName: "Bear",
            altNames: ["Goose", "Maple", "Atlas", "Moose"],
            rarity: "rare",
            appearance: { primary: "#7d5a3c", secondary: "#d8b48a", accent: "#3a2818", eyeColor: "#f0a500", pattern: "stripes", fluff: "long", earStyle: "tufted", tail: "long" },
            archetype: "Gentle Giant",
            traits: ["Huge", "Friendly", "Goofy"],
            stats: { cuddliness: 9, playfulness: 7, cleverness: 8, mischief: 5, talk: 6 },
            phrases: {
                pet: ["*RUMBLE PURR INTENSIFIES*", "I will lean. Brace yourself.", "I am a large lap-cat. Cope.", "Pets in the floof, please."],
                play: ["I caught it with one (1) giant paw.", "I roll. I conquer. I roll back.", "Boop the fluffy thing.", "I am surprisingly fast for my size."],
                treat: ["*massive chomp*", "Big cat needs big snack.", "Excellent. Encore.", "*purr that shakes the floor*"],
                chat: ["I am a forest animal pretending to be a house cat.", "I caught a moth and was sad about it.", "Did I get bigger overnight? Maybe.", "I dream of catching very large fish."]
            },
            funFact: "Maine Coons can weigh up to 11 kg — one of the largest domestic breeds."
        },
        {
            id: "ragdoll",
            breed: "Ragdoll",
            origin: "USA (California)",
            defaultName: "Cloud",
            altNames: ["Marshmallow", "Vanilla", "Pearl", "Snowdrop"],
            rarity: "rare",
            appearance: { primary: "#f0e5d5", secondary: "#fff8ec", accent: "#5a3a22", eyeColor: "#3da9fc", pattern: "points", fluff: "long", earStyle: "normal", tail: "long" },
            archetype: "Cuddle Bug",
            traits: ["Floppy", "Trusting", "Calm"],
            stats: { cuddliness: 10, playfulness: 5, cleverness: 6, mischief: 3, talk: 5 },
            phrases: {
                pet: ["*goes completely limp* yessss", "I am a noodle now.", "Hold me forever.", "*purr that puts you to sleep*"],
                play: ["I'd play but, um, I'm comfortable.", "Maybe a little swat. Yes. Like that.", "Gentle bonk.", "I'd rather snuggle, honestly."],
                treat: ["*nibble* thank you my person", "Tasty. Thanks. Hugs?", "I love you. Also this.", "*soft chew*"],
                chat: ["I love everyone. Even the vacuum.", "Have I told you you're my favourite?", "I melted into the couch again.", "I love nap. I love you. I love nap."]
            },
            funFact: "Ragdolls are named for going limp like a ragdoll when picked up."
        },
        {
            id: "british-shorthair",
            breed: "British Shorthair",
            origin: "United Kingdom",
            defaultName: "Crumpet",
            altNames: ["Biscuit", "Pip", "Tea", "Custard"],
            rarity: "uncommon",
            appearance: { primary: "#a3b0bd", secondary: "#dde3ea", accent: "#6b7785", eyeColor: "#f0a500", pattern: "solid", fluff: "medium", earStyle: "small", tail: "short" },
            archetype: "Couch Potato",
            traits: ["Round", "Calm", "Stoic"],
            stats: { cuddliness: 6, playfulness: 4, cleverness: 7, mischief: 3, talk: 3 },
            phrases: {
                pet: ["Quite agreeable.", "Yes, that is acceptable.", "*subtle purr*", "Mm. Continue."],
                play: ["I shall observe from a distance.", "One swat. That is sufficient.", "I have considered playing.", "I'm pacing myself."],
                treat: ["A proper biscuit.", "Splendid.", "Civilised, this.", "*polite chomp*"],
                chat: ["The garden is quite green today.", "I have been considering loaf-shape efficiency.", "The window-bird was loud.", "One does enjoy a quiet sit."]
            },
            funFact: "British Shorthairs have a famously round face — they were the original 'Cheshire Cat' inspiration."
        },
        {
            id: "bengal",
            breed: "Bengal",
            origin: "USA (hybrid Asian Leopard)",
            defaultName: "Jaguar",
            altNames: ["Rio", "Panther", "Spotty", "Tiger"],
            rarity: "rare",
            appearance: { primary: "#d6a361", secondary: "#f0d4a4", accent: "#3a2818", eyeColor: "#5fcfbf", pattern: "spots", fluff: "short", earStyle: "normal", tail: "long" },
            archetype: "Athletic Adventurer",
            traits: ["Energetic", "Wild-looking", "Climbs everything"],
            stats: { cuddliness: 5, playfulness: 10, cleverness: 9, mischief: 9, talk: 7 },
            phrases: {
                pet: ["Quick — pet AND I'll bite gently. Deal?", "I'll allow it for 4 seconds.", "I am a tiger. Carry on.", "Pet, then RUN."],
                play: ["I am EVERYWHERE", "FROM ABOVE!", "Did you SEE that pounce?", "I caught the laser. (I lied.)"],
                treat: ["*lightning chomp*", "More! For my hunting!", "Energy. Fuel. NOW.", "*aggressive purr*"],
                chat: ["I climbed the bookshelf. New high score.", "I have plans. Many plans.", "The bird outside is MINE.", "I am part jungle. It's important you know this."]
            },
            funFact: "Bengals descend from the Asian Leopard Cat, giving them their distinctive spotted 'wild' look."
        },
        {
            id: "persian",
            breed: "Persian",
            origin: "Iran (Persia)",
            defaultName: "Princess",
            altNames: ["Cleopatra", "Pearl", "Saffron", "Velvet"],
            rarity: "rare",
            appearance: { primary: "#f0e5d5", secondary: "#fff8ec", accent: "#c8b59a", eyeColor: "#f0a500", pattern: "solid", fluff: "long", earStyle: "small", tail: "long" },
            archetype: "Royalty",
            traits: ["Glamorous", "Calm", "Slightly grumpy"],
            stats: { cuddliness: 7, playfulness: 4, cleverness: 6, mischief: 4, talk: 4 },
            phrases: {
                pet: ["You may continue.", "Mmm. Brushing also acceptable.", "*regal purr*", "I shall allow this for now."],
                play: ["A slow bat. Refined.", "I shall consider chasing.", "One must conserve majesty.", "*decorative pounce*"],
                treat: ["Adequate. More.", "I require salmon.", "Acceptable tribute.", "*delicate nibble*"],
                chat: ["I require grooming. Often.", "The throne (your bed) is mine.", "I have been thinking about my fur.", "We are not amused. (We are.)"]
            },
            funFact: "Persians are one of the oldest cat breeds — recorded in Italy by 1620."
        },
        {
            id: "scottish-fold",
            breed: "Scottish Fold",
            origin: "Scotland",
            defaultName: "Haggis",
            altNames: ["Tartan", "Loch", "Nessie", "Whisky"],
            rarity: "rare",
            appearance: { primary: "#bda58a", secondary: "#e7d8c0", accent: "#7a6650", eyeColor: "#f0a500", pattern: "solid", fluff: "medium", earStyle: "folded", tail: "long" },
            archetype: "Sleepy Philosopher",
            traits: ["Owl-like", "Calm", "Loyal"],
            stats: { cuddliness: 8, playfulness: 5, cleverness: 7, mischief: 4, talk: 4 },
            phrases: {
                pet: ["*owl blink*", "Mmmm yes thank you.", "I have folded ears AND folded into your lap.", "*purr blanket*"],
                play: ["I shall observe philosophically.", "A gentle paw-tap.", "The yarn invites contemplation.", "I shall rotate the toy."],
                treat: ["A worthy snack.", "*satisfied chew*", "Aye, that'll do.", "Mmm. Comfort food."],
                chat: ["The window-bird raises questions.", "I sat in a sunbeam for three hours.", "Folded ears, unfolded thoughts.", "What is a box, really?"]
            },
            funFact: "Scottish Folds are born with straight ears that 'fold' at about 3 weeks — a natural cartilage mutation."
        },
        {
            id: "sphynx",
            breed: "Sphynx",
            origin: "Canada",
            defaultName: "Pebble",
            altNames: ["Wrinkles", "Sphynxie", "Naked", "Goblin"],
            rarity: "rare",
            appearance: { primary: "#f0c8b4", secondary: "#fad7c4", accent: "#c89882", eyeColor: "#3da9fc", pattern: "solid", fluff: "hairless", earStyle: "big", tail: "long" },
            archetype: "Eccentric Genius",
            traits: ["Warm", "Affectionate", "Weird"],
            stats: { cuddliness: 10, playfulness: 7, cleverness: 8, mischief: 7, talk: 8 },
            phrases: {
                pet: ["I'm a heater. Use me.", "*velvety hairless purr*", "I love you with my whole body.", "Yes. Closer."],
                play: ["I will pretzel for the toy.", "I am uniquely shaped for this.", "Caught it! With my entire being!", "Did you see that? I did a flip."],
                treat: ["My belly is your responsibility.", "*satisfied gulp*", "I love this. I love you.", "More fuel for the goblin."],
                chat: ["I am cold. Specifically here, in your lap.", "I look like a wizard's familiar and I'm fine with that.", "I've been thinking about sweaters.", "I am 70% personality, 30% wrinkles."]
            },
            funFact: "Sphynx cats need regular baths — without fur to absorb oils, their skin gets greasy."
        },
        {
            id: "abyssinian",
            breed: "Abyssinian",
            origin: "Ethiopia / Egypt (debated)",
            defaultName: "Nile",
            altNames: ["Pharaoh", "Cleo", "Ra", "Cinnamon"],
            rarity: "rare",
            appearance: { primary: "#c47a4a", secondary: "#f0d4a4", accent: "#7a3a22", eyeColor: "#9bc53d", pattern: "stripes", fluff: "short", earStyle: "big", tail: "long" },
            archetype: "Energetic Athlete",
            traits: ["Lithe", "Curious", "Always moving"],
            stats: { cuddliness: 5, playfulness: 10, cleverness: 9, mischief: 7, talk: 5 },
            phrases: {
                pet: ["Quick pet — I have places to be.", "*rapid purr* OK gotta go.", "Touch! Now run!", "I love you, but the curtain calls."],
                play: ["I AM A ROCKET", "Up! Down! Up again!", "Watch this — wait, watch me!", "I have caught it 47 times."],
                treat: ["*lightning gulp*", "Fuel acquired.", "More! For the climb!", "Done. What's next?"],
                chat: ["I climbed something tall.", "I am descended from pharaohs. Probably.", "The world is mine to explore.", "I have been counting things. There are MANY."]
            },
            funFact: "Abyssinians are believed to descend from cats kept by ancient Egyptians — they appear in tomb paintings."
        },
        {
            id: "norwegian",
            breed: "Norwegian Forest Cat",
            origin: "Norway",
            defaultName: "Loki",
            altNames: ["Freya", "Bjorn", "Saga", "Frost"],
            rarity: "rare",
            appearance: { primary: "#a0876b", secondary: "#e0c8a8", accent: "#5a3a22", eyeColor: "#9bc53d", pattern: "stripes", fluff: "long", earStyle: "tufted", tail: "long" },
            archetype: "Viking Adventurer",
            traits: ["Hardy", "Climbs anything", "Independent"],
            stats: { cuddliness: 6, playfulness: 8, cleverness: 8, mischief: 6, talk: 4 },
            phrases: {
                pet: ["Strong pets only.", "*ancient purr*", "I have travelled far. Pet me.", "Aye, that'll do."],
                play: ["I shall conquer the toy.", "From the high shelf — descend!", "I caught it like a viking.", "*confident pounce*"],
                treat: ["A worthy feast.", "*hearty chomp*", "Skol!", "More fish. Always more fish."],
                chat: ["I am part of Norse mythology, you know.", "I have been considering snow.", "The high shelf is also mine.", "I have walked the perimeter. All clear."]
            },
            funFact: "'Skogkatt' — Norse mythology says they pulled Freya's chariot."
        },
        {
            id: "bombay",
            breed: "Bombay",
            origin: "USA",
            defaultName: "Shadow",
            altNames: ["Onyx", "Midnight", "Soot", "Raven"],
            rarity: "uncommon",
            appearance: { primary: "#1a1a1d", secondary: "#2f2f33", accent: "#0f0f12", eyeColor: "#f0a500", pattern: "solid", fluff: "short", earStyle: "normal", tail: "long" },
            archetype: "Mini Panther",
            traits: ["Sleek", "Affectionate", "Playful"],
            stats: { cuddliness: 8, playfulness: 8, cleverness: 8, mischief: 6, talk: 6 },
            phrases: {
                pet: ["Yes. More. Closer.", "*deep velvet purr*", "I have chosen you.", "Pet. Pet. Pet."],
                play: ["I am a tiny panther.", "*black blur*", "From the shadows!", "Stalk... pounce... GOTCHA."],
                treat: ["*disappears, then returns*", "Acceptable tribute.", "I love you in a regal way.", "*sleek chomp*"],
                chat: ["I am stealth incarnate.", "The shadow IS me.", "I have been everywhere. You did not see me.", "I look mysterious because I am."]
            },
            funFact: "Bombays were bred to look like miniature black panthers — and they kind of nailed it."
        },
        {
            id: "munchkin",
            breed: "Munchkin",
            origin: "USA",
            defaultName: "Dumpling",
            altNames: ["Stubby", "Noodle", "Tot", "Bean"],
            rarity: "rare",
            appearance: { primary: "#e0c8a8", secondary: "#fff4e0", accent: "#a0876b", eyeColor: "#3da9fc", pattern: "stripes", fluff: "medium", earStyle: "normal", tail: "long" },
            archetype: "Tiny Mischief-Maker",
            traits: ["Short legs", "Big personality", "Speedy"],
            stats: { cuddliness: 8, playfulness: 9, cleverness: 7, mischief: 8, talk: 7 },
            phrases: {
                pet: ["I am compact and want pets.", "Smol cat, big purr.", "Yes! Down here!", "*tiny biscuit-making*"],
                play: ["I am low to the ground but FAST.", "Skid! Skid! Pounce!", "Tiny rocket activated.", "I caught it (somehow)."],
                treat: ["I am small but can eat large.", "*tiny chomp, big purr*", "Encore for the small cat?", "Worth it."],
                chat: ["My legs may be short but my heart is GIANT.", "I have a great view of ankles.", "Did you know I can sploot perfectly?", "I'm exactly the right size, thank you."]
            },
            funFact: "Munchkins have a natural genetic short-leg mutation — but they can run as fast as any other cat."
        },
        {
            id: "turkish-van",
            breed: "Turkish Van",
            origin: "Turkey (Lake Van region)",
            defaultName: "Lake",
            altNames: ["Marble", "Pasha", "Anya", "Splash"],
            rarity: "rare",
            appearance: { primary: "#fff", secondary: "#f5f5f5", accent: "#c47a4a", eyeColor: "#f0a500", pattern: "calico", fluff: "long", earStyle: "normal", tail: "long", calicoColors: ["#c47a4a", "#3a2818"] },
            archetype: "Swimmer",
            traits: ["Loves water", "Strong", "Loyal"],
            stats: { cuddliness: 6, playfulness: 9, cleverness: 8, mischief: 7, talk: 6 },
            phrases: {
                pet: ["Yes, but no belly. I have rules.", "*half-purr* (the other half is suspicion)", "Strong pets, please.", "I accept."],
                play: ["Splash! (with the toy.)", "I am an Olympic athlete.", "Watch this leap!", "I will fetch the toy. From water."],
                treat: ["*regal chomp*", "Worthy of my time.", "More fish, please.", "Acceptable."],
                chat: ["Have I told you about water? I love water.", "I once swam in a lake. It was glorious.", "Most cats won't admit it, but bathtubs are great.", "I am from a long line of swimmers."]
            },
            funFact: "Turkish Vans are one of the few breeds that genuinely love swimming — sometimes called 'the swimming cat'."
        },
        {
            id: "devon-rex",
            breed: "Devon Rex",
            origin: "England (Devon)",
            defaultName: "Pixie",
            altNames: ["Elf", "Goblin", "Sprite", "Mochi"],
            rarity: "rare",
            appearance: { primary: "#bda58a", secondary: "#dccaa8", accent: "#7a6650", eyeColor: "#5fcfbf", pattern: "solid", fluff: "short", earStyle: "big", tail: "long" },
            archetype: "Pixie",
            traits: ["Curly fur", "Big ears", "Goofball"],
            stats: { cuddliness: 9, playfulness: 9, cleverness: 8, mischief: 9, talk: 7 },
            phrases: {
                pet: ["*velvety curl-purr*", "I am a wig with paws and I love you.", "Yes! Behind the giant ears!", "Pets. So many pets."],
                play: ["I am an elf cat. Watch this trick.", "I will retrieve! Like a tiny dog!", "Fetch! Wait, I'll bring it back.", "Boop! Boop! Boop!"],
                treat: ["I love food more than air.", "*cheerful chomp*", "Best snack ever (every snack).", "I would cross dimensions for this."],
                chat: ["I look like an elf and I behave like one too.", "My ears are radar. They have detected snacks.", "Did I tell you I think I'm part dog?", "I shall ride your shoulder now."]
            },
            funFact: "Devon Rex coats are wavy and short due to a genetic mutation — they shed very little."
        }
    ];

    /* =========================================================
       BACKSTORIES — every cat in the clan gets a unique story.
       ========================================================= */

    const HAND_BACKSTORIES = {
        "ginger-tabby":      "Adopted from the RSPCA Hills shelter at 8 weeks old, after meowing the loudest of the whole litter.",
        "tuxedo":            "Came home in a small cardboard box from a colleague's farm — the runt who turned out to be the smartest.",
        "calico":            "Found at 4 weeks old behind the bins at the back of school, soaking wet and protesting loudly.",
        "siamese":           "Adopted from a breeder Harper visited on her birthday — chose Harper before Harper chose her.",
        "russian-blue":      "Surrendered when an elderly neighbour moved into a nursing home; she trusts only one human at a time.",
        "maine-coon":        "Driven up from a regional NSW farm; arrived already 4 kg at 12 weeks and never stopped growing.",
        "ragdoll":           "From a registered breeder in Penrith; was the calmest kitten of nine and slept through the car ride home.",
        "british-shorthair": "Came with the new house when Harper's family moved — the previous owners couldn't take him with them.",
        "bengal":            "Adopted from a breed-rescue group after his original owners discovered he could open every door in the house.",
        "persian":           "Inherited from Great-Aunt Margaret, complete with her own velvet cushion.",
        "scottish-fold":     "Found wandering near Castle Hill train station with a tag that just said 'Haggis'.",
        "sphynx":            "From a Sphynx-specific rescue in Sydney — needed a warm home with plenty of jumpers.",
        "abyssinian":        "Bottle-fed orphan from the local vet clinic — Harper visited every day for two weeks before bringing her home.",
        "norwegian":         "Adopted at a market stall fundraising for cat rescue; refused to leave Harper's lap.",
        "bombay":            "Found at 6 months old slinking through the school car park; followed Harper home for three days.",
        "munchkin":          "From a breeder; the only kitten who learned to use the cat door before going to her new home.",
        "turkish-van":       "Rescued from a flooded creek by a council ranger who knew Harper's family was looking.",
        "devon-rex":         "Birthday gift from Grandma Liz, wrapped in a tea-towel with a tiny bowtie."
    };
    BREEDS.forEach(b => { b.backstory = HAND_BACKSTORIES[b.id] || "A mysterious arrival who chose Harper."; });

    /* =========================================================
       Generated cats — bring the catalog up to 100.
       Each generated cat reuses a breed's appearance and archetype
       phrases but has a unique name, backstory, slight colour and
       stat variation, and a unique id.
       ========================================================= */

    // Build a phrase pool keyed by archetype (uses the original cat's
    // phrases — perfect-fidelity reuse for cats sharing an archetype).
    const ARCHETYPE_PHRASES = {};
    BREEDS.forEach(b => { if (!ARCHETYPE_PHRASES[b.archetype]) ARCHETYPE_PHRASES[b.archetype] = b.phrases; });

    const NAMES_POOL = [
        "Apricot","Honey","Jam","Custard","Caramel","Maple","Peach","Cinnamon","Toffee","Saffron",
        "Pip","Beans","Tofu","Mochi","Dumpling","Noodle","Sushi","Tater","Biscuit","Crumpet",
        "Olive","Ivy","Rosie","Daisy","Poppy","Willow","Juniper","Hazel","Fern","Clover",
        "Smudge","Inky","Soot","Cinder","Ash","Coal","Eclipse","Domino","Charlie","Boots",
        "Storm","Cloud","Misty","Frost","Snowy","Pebble","Marble","Granite","Jet","Onyx",
        "Pickle","Waffles","Pancake","Muffin","Brownie","Cookie","Cupcake","Truffle","Fudge","Toast",
        "Luna","Stella","Nova","Echo","Aria","Nala","Mochi","Yoshi","Kiki","Sushi",
        "Theo","Milo","Leo","Oscar","Felix","Archie","Otis","Murphy","Toby","Bandit",
        "Cleo","Sphinx","Pasha","Zara","Akira","Sake","Kuro","Yuki","Hana","Ren",
        "Buttercup","Marigold","Petal","Blossom","Sage","Bramble","Thistle","Birch","Reed","Heather",
        "Mochi","Boba","Latte","Espresso","Mocha","Chai","Cocoa","Vanilla","Truffle","Macaron",
        "Wasabi","Ginger","Pepper","Saffy","Paprika","Basil","Parsley","Curry","Miso","Tofu"
    ];

    const BACKSTORY_POOL = [
        "Adopted from the RSPCA Hills branch on Harper's tenth birthday.",
        "Found wandering near the Norwest train station and refused to leave the platform.",
        "Surrendered when his family moved overseas — packed into a carrier with one toy mouse and a suspicious expression.",
        "A tiny stray who started showing up at the back door asking for breakfast.",
        "Bottle-fed orphan from the local vet — Harper visited every weekend until adoption day.",
        "Came home from Pets Paradise after Harper saw her napping in the window.",
        "Born in the back of the corner cafe in Castle Hill; chose Harper out of seven kittens.",
        "Found behind a school sports shed during a thunderstorm and never went back outside.",
        "A birthday present from Grandma — arrived in a basket with a little pink bow.",
        "Foster-failed: Harper's family was 'just minding her for a weekend'. That was three years ago.",
        "Rescued from a tree on a rainy Tuesday; Mum had to call the SES.",
        "Adopted from a breed-rescue group when his original owners discovered he could open the fridge.",
        "Was the only kitten in his litter who didn't want to leave the carrier.",
        "Came with the new house — the previous owners couldn't take her interstate.",
        "Found in the bushes outside a pet shop on a 38°C day; soaked her in a wet towel and brought her home.",
        "An ex-show cat who decided retirement on Harper's couch is more her speed.",
        "Adopted at a school fundraising market for the local cat rescue.",
        "Inherited from Great-Aunt Margaret along with three crocheted blankets.",
        "Followed Harper home from the bus stop for five days running. Officially moved in on day six.",
        "Rescued from a council pound the day before her time was up.",
        "Found as a tiny ball of fluff under the school music room.",
        "His original owner moved into aged care and asked Harper's mum to take him.",
        "Came home from a registered breeder after a long waitlist; the family met him at six weeks.",
        "Was a kitten on a friend-of-a-friend's farm; arrived smelling faintly of hay.",
        "Surrendered after the family's allergies got worse than expected.",
        "Adopted from a foster-carer in Wahroonga after a Facebook post went viral.",
        "Was the runt of a feral litter — slowly socialised over a year of patient afternoons.",
        "Mum brought him home from work — someone had left him in a basket at reception.",
        "A vet-clinic cat who eventually decided Harper's family was 'her clinic'.",
        "Found wandering on a beach near Manly during a family holiday.",
        "Came home in a hoodie pocket after a Year 6 excursion to a regional shelter.",
        "Originally adopted by Harper's aunt, who realised after a week she was actually a dog person.",
        "His paperwork from the breeder includes a champion great-grandmother and a champion great-uncle.",
        "Bottle-raised by Harper from week three after being abandoned by his mum.",
        "Dad found her in the engine bay of his car on a winter morning.",
        "Adopted from a TAFE veterinary nursing practical class — she'd been in 'placement' for three weeks.",
        "Rescued by a courier who heard meowing inside a parcel return facility.",
        "Came from an interstate transport — driven down by a volunteer driver from Brisbane.",
        "Was the 'photo cat' on the rescue website for almost a year before Harper picked her.",
        "Climbed in through Harper's window during a storm. Climbed out twice. Climbed in again. Stayed.",
        "Refused to be photographed at the shelter; staff were sure he wouldn't be adopted. Wrong.",
        "Found in the long-term car park at Sydney Airport; flyers went up but no one claimed her.",
        "An ex-working-cat from a Sydney warehouse; retired into a much quieter life.",
        "Adopted on 'Adopt a senior cat' month — she's older than Harper.",
        "A kitten from the local animal shelter's 'TwoForOne' weekend; came home with her brother (also in the clan).",
        "Was sitting on top of a recycling bin when Harper walked past. The rest is history.",
        "Originally a pet-shop kitten Harper kept visiting for weeks before saving up to bring home.",
        "Surrendered after escaping his enclosure for the seventh time. Currently rates Harper's house at four stars.",
        "Found with a tiny rope around her neck; the vet said 'someone's been trying to keep her'. Now she stays of her own free will.",
        "Adopted from a regional NSW shelter on a road trip with Dad.",
        "His original family had three small children and one large dog; he arrived needing quiet.",
        "Was caught on the school-camp camera trap and immediately adopted out from there.",
        "Came home from a cat cafe — the staff noticed she only sat with Harper.",
        "Adopted at a Petbarn adoption weekend after Harper shadowed the rescue volunteer for the day.",
        "Mum's coworker's cat had kittens. Now Mum has a cat. Funny how that works.",
        "Joined the family after the local council ran a desexing-and-rehoming program.",
        "Found in the school garden helping (not really helping) the gardening club.",
        "Adopted from a breed-specific rescue after his elderly owner passed away.",
        "Was nicknamed 'Houdini' at the shelter — has since lived up to it.",
        "Came home from the vet's after his original owner couldn't afford his ongoing care; the vet asked Harper.",
        "Spotted from a moving car. Mum did a U-turn. He's been here since.",
        "His first family had a rough year and asked our family to take him in.",
        "Was rescued by a Year 11 student doing community service at the shelter.",
        "Came home in a cab — the driver had been carrying her around for two days trying to find a home.",
        "Found in a school excursion bus's wheel arch; a gentle, lucky kitten.",
        "Adopted as part of a sibling pair from a country shelter.",
        "Was a working-mouse-patrol cat at a suburban warehouse; retired with full honours.",
        "Walked in through the cat flap and never walked back out.",
        "Surrendered after his family's new baby developed allergies.",
        "Adopted from the SPCA after a long stay — staff cried on adoption day.",
        "Saved from a flood in country NSW and rehomed via volunteer transport.",
        "Found pawing at a bakery window on a rainy morning. Now eats on a schedule.",
        "Mum spotted her ad on Gumtree at midnight. She was home by lunchtime.",
        "Adopted from a friend-of-a-friend whose cat had an 'oops' litter.",
        "Was originally fostered for two weeks. Day fifteen, the foster paperwork became adoption paperwork.",
        "Climbed into a removalist's truck and arrived at the new house with the boxes.",
        "Adopted at a community cat day at the local park.",
        "Surrendered with a hand-written note: 'Please give him a quiet life'. He has.",
        "Came home with a fellow rescuer who 'just couldn't pass the cage'.",
        "Was a regular in a school's bushland edge — slowly trapped, vetted and rehomed.",
        "Adopted from a council program tackling backyard breeding.",
        "Was born in a sock drawer at a friend's house. Came home at 9 weeks smelling of clean laundry.",
        "An office cat who 'voted with her feet' to come home with Harper's mum.",
        "Found at a roadside rest stop on a country drive. Microchipped to no-one.",
        "Adopted on a 'Black Cat Friday' event after months on the rescue's adoption page.",
        "Was the inspiration for an entire short story Harper wrote in Year 7."
    ];

    function _hash(s) { let h = 2166136261 >>> 0; for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return h >>> 0; }
    function _rng(seed) { return function () { seed = Math.imul(seed ^ seed >>> 15, seed | 1); seed ^= seed + Math.imul(seed ^ seed >>> 7, seed | 61); return ((seed ^ seed >>> 14) >>> 0) / 4294967296; }; }

    function _hexToHsl(hex) {
        let r = parseInt(hex.slice(1, 3), 16) / 255, g = parseInt(hex.slice(3, 5), 16) / 255, b = parseInt(hex.slice(5, 7), 16) / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) { h = s = 0; }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h *= 60;
        }
        return { h, s, l };
    }
    function _hslToHex(h, s, l) {
        h = ((h % 360) + 360) % 360;
        s = Math.min(1, Math.max(0, s));
        l = Math.min(1, Math.max(0, l));
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const m = l - c / 2;
        let r, g, b;
        if (h < 60) [r, g, b] = [c, x, 0];
        else if (h < 120) [r, g, b] = [x, c, 0];
        else if (h < 180) [r, g, b] = [0, c, x];
        else if (h < 240) [r, g, b] = [0, x, c];
        else if (h < 300) [r, g, b] = [x, 0, c];
        else [r, g, b] = [c, 0, x];
        const toHex = v => Math.round((v + m) * 255).toString(16).padStart(2, "0");
        return "#" + toHex(r) + toHex(g) + toHex(b);
    }
    function _shiftColor(hex, dh, ds, dl) {
        if (!hex || !hex.startsWith("#") || hex.length !== 7) return hex;
        const { h, s, l } = _hexToHsl(hex);
        return _hslToHex(h + dh, s + ds, l + dl);
    }

    function _tweakAppearance(base, rng) {
        // Pure white / pure black palettes — leave alone (avoid weird colour shifts).
        const isMonochrome = (base.primary === "#fff" || base.primary === "#1a1a1d");
        if (isMonochrome) return Object.assign({}, base);
        const hueShift = (rng() - 0.5) * 30;     // ±15° hue
        const lightShift = (rng() - 0.5) * 0.10; // ±5%
        return Object.assign({}, base, {
            primary:   _shiftColor(base.primary, hueShift, 0, lightShift),
            secondary: _shiftColor(base.secondary, hueShift, 0, lightShift),
            accent:    _shiftColor(base.accent, hueShift, 0, lightShift)
        });
    }

    function _clamp(n, lo, hi) { return Math.min(hi, Math.max(lo, n)); }

    function _tweakStats(base, rng) {
        const out = {};
        for (const k of Object.keys(base)) {
            const delta = Math.round((rng() - 0.5) * 4); // ±2
            out[k] = _clamp(base[k] + delta, 1, 10);
        }
        return out;
    }

    function _generateAdditionalCats(targetTotal) {
        const need = targetTotal - BREEDS.length;
        if (need <= 0) return;
        const counters = {};
        BREEDS.forEach(b => { counters[b.id] = 2; });
        const usedNames = new Set(BREEDS.map(b => b.defaultName));
        const usedStories = new Set(BREEDS.map(b => b.backstory));
        let nameIdx = 0, storyIdx = 0;
        for (let i = 0; i < need; i++) {
            const template = BREEDS[i % 18];
            const seed = _hash(`gen-${i}-${template.id}`);
            const rng = _rng(seed);
            // Unique id
            const id = `${template.id}-${counters[template.id]++}`;
            // Unique name (cycle until a fresh one)
            let name = NAMES_POOL[(nameIdx++) % NAMES_POOL.length];
            let guard = 0;
            while (usedNames.has(name) && guard++ < NAMES_POOL.length) {
                name = NAMES_POOL[(nameIdx++) % NAMES_POOL.length];
            }
            usedNames.add(name);
            // Unique-ish backstory (allow up to 2 cats sharing if pool runs out)
            let backstory = BACKSTORY_POOL[(storyIdx++) % BACKSTORY_POOL.length];
            const generated = {
                id,
                breed: template.breed,
                origin: template.origin,
                defaultName: name,
                altNames: [],
                rarity: template.rarity,
                backstory,
                appearance: _tweakAppearance(template.appearance, rng),
                archetype: template.archetype,
                traits: template.traits.slice(),
                stats: _tweakStats(template.stats, rng),
                phrases: ARCHETYPE_PHRASES[template.archetype] || template.phrases,
                funFact: template.funFact
            };
            BREEDS.push(generated);
        }
    }

    _generateAdditionalCats(100);

    /* ---------- State helpers ---------- */

    function pick(arr, rng) {
        rng = rng || Math.random;
        return arr[Math.floor(rng() * arr.length)];
    }

    function shuffle(arr, rng) {
        rng = rng || Math.random;
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function findBreed(id) {
        return BREEDS.find(b => b.id === id);
    }

    // Pick 3 candidates from breeds Harper hasn't unlocked yet (or all if fewer)
    function pickCandidates(unlockedIds) {
        const available = BREEDS.filter(b => !unlockedIds.includes(b.id));
        if (available.length === 0) return [];
        return shuffle(available).slice(0, Math.min(3, available.length));
    }

    function totalBreeds() { return BREEDS.length; }

    function reactionPhrase(breedId, kind) {
        const b = findBreed(breedId);
        if (!b) return "*purr*";
        const list = (b.phrases && b.phrases[kind]) || ["*purr*"];
        return pick(list);
    }

    /* ---------- Daily-decay happiness model ---------- */
    // happiness 0..100. Decays ~10/day if not visited.

    function currentHappiness(cat) {
        if (cat.happiness == null) cat.happiness = 70;
        if (!cat.lastInteractedISO) return cat.happiness;
        const last = new Date(cat.lastInteractedISO).getTime();
        const now = Date.now();
        const days = Math.max(0, (now - last) / (1000 * 60 * 60 * 24));
        const decay = Math.floor(days * 10);
        return Math.max(0, cat.happiness - decay);
    }

    function moodFor(happy) {
        if (happy >= 85) return { label: "Ecstatic", expression: "love" };
        if (happy >= 65) return { label: "Happy", expression: "happy" };
        if (happy >= 40) return { label: "Content", expression: "wave" };
        if (happy >= 20) return { label: "Bored", expression: "thinking" };
        return { label: "Lonely", expression: "napping" };
    }

    window.Clan = {
        BREEDS,
        findBreed,
        pickCandidates,
        totalBreeds,
        reactionPhrase,
        currentHappiness,
        moodFor
    };
})();
