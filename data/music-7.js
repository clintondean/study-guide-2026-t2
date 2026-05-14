// Music — Year 7 Half Yearly
// Outcomes assessed:
//   MU4-LIS-01 uses listening skills to describe music in relation to
//              stylistic, cultural, historical or social contexts and the
//              elements of music

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

window.SUBJECT_DATA["music-7"] = {
    id: "music-7",
    name: "Music",
    tagline: "Year 7 Half Yearly — Listening, structure, rhythm, tempo, pitch & dynamics",
    color: "#8e44ad",
    accent: "#5a189a",
    icon: "🎵",
    topics: [
        { id: "pitch-scales", name: "Pitch, contour, tones & semitones" },
        { id: "duration-rhythm", name: "Duration, rhythm & time signatures" },
        { id: "structure-form", name: "Binary, ternary & verse/chorus form" },
        { id: "dynamics-tempo", name: "Dynamics & tempo markings" }
    ],

    mcqs: [
        /* ----- Pitch, contour, tones & semitones ----- */
        {
            id: "y7mu-mcq-1", topic: "pitch-scales",
            q: "Pitch in music refers to:",
            options: ["how loud or soft a sound is", "how high or low a sound is", "how fast the beat is", "how many instruments are playing"],
            answer: 1,
            explain: "Pitch describes whether a note sounds high or low."
        },
        {
            id: "y7mu-mcq-2", topic: "pitch-scales",
            q: "A melody that generally moves from lower notes to higher notes has:",
            options: ["descending contour", "ascending contour", "static contour", "binary form"],
            answer: 1,
            explain: "An ascending contour moves upward in pitch."
        },
        {
            id: "y7mu-mcq-3", topic: "pitch-scales",
            q: "What is the formula for a major scale?",
            options: ["tone, semitone, tone, semitone", "tone, tone, semitone, tone, tone, tone, semitone", "semitone, tone, tone, tone", "tone, tone, tone, tone"],
            answer: 1,
            explain: "The major scale pattern is tone, tone, semitone, tone, tone, tone, semitone."
        },
        {
            id: "y7mu-mcq-4", topic: "pitch-scales",
            q: "A semitone is best described as:",
            options: ["two tones", "the smallest step commonly used in Western scales", "the same as a scale", "a very loud note"],
            answer: 1,
            explain: "A semitone is the smallest interval step in the standard Western system."
        },
        {
            id: "y7mu-mcq-5", topic: "pitch-scales",
            q: "How many semitones are in one tone?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            explain: "A tone is equal to two semitones."
        },
        {
            id: "y7mu-mcq-6", topic: "pitch-scales",
            q: "If a melody goes up, then down, then stays mostly level, the contour is being described in terms of:",
            options: ["dynamics", "tempo", "pitch shape", "time signature"],
            answer: 2,
            explain: "Contour describes the shape of a melody as it moves through pitches."
        },
        {
            id: "y7mu-mcq-25", topic: "pitch-scales",
            q: "A melody moves from low notes to higher notes through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-26", topic: "pitch-scales",
            q: "A melody moves from low notes to higher notes before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-27", topic: "pitch-scales",
            q: "A melody moves from low notes to higher notes in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-28", topic: "pitch-scales",
            q: "A melody moves from low notes to higher notes over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-29", topic: "pitch-scales",
            q: "A melody moves from low notes to higher notes toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-30", topic: "pitch-scales",
            q: "A melody starts high and gradually moves lower through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-31", topic: "pitch-scales",
            q: "A melody starts high and gradually moves lower before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-32", topic: "pitch-scales",
            q: "A melody starts high and gradually moves lower in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-33", topic: "pitch-scales",
            q: "A melody starts high and gradually moves lower over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-34", topic: "pitch-scales",
            q: "A melody starts high and gradually moves lower toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-35", topic: "pitch-scales",
            q: "A melody repeats almost the same pitch each time through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-36", topic: "pitch-scales",
            q: "A melody repeats almost the same pitch each time before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-37", topic: "pitch-scales",
            q: "A melody repeats almost the same pitch each time in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-38", topic: "pitch-scales",
            q: "A melody repeats almost the same pitch each time over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-39", topic: "pitch-scales",
            q: "A melody repeats almost the same pitch each time toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-40", topic: "pitch-scales",
            q: "A melody rises, falls and rises again through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-41", topic: "pitch-scales",
            q: "A melody rises, falls and rises again before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-42", topic: "pitch-scales",
            q: "A melody rises, falls and rises again in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-43", topic: "pitch-scales",
            q: "A melody rises, falls and rises again over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-44", topic: "pitch-scales",
            q: "A melody rises, falls and rises again toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-45", topic: "pitch-scales",
            q: "A flute line moves from low notes to higher notes through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-46", topic: "pitch-scales",
            q: "A flute line moves from low notes to higher notes before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-47", topic: "pitch-scales",
            q: "A flute line moves from low notes to higher notes in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-48", topic: "pitch-scales",
            q: "A flute line moves from low notes to higher notes over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-49", topic: "pitch-scales",
            q: "A flute line moves from low notes to higher notes toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-50", topic: "pitch-scales",
            q: "A flute line starts high and gradually moves lower through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-51", topic: "pitch-scales",
            q: "A flute line starts high and gradually moves lower before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-52", topic: "pitch-scales",
            q: "A flute line starts high and gradually moves lower in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-53", topic: "pitch-scales",
            q: "A flute line starts high and gradually moves lower over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-54", topic: "pitch-scales",
            q: "A flute line starts high and gradually moves lower toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-55", topic: "pitch-scales",
            q: "A flute line repeats almost the same pitch each time through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-56", topic: "pitch-scales",
            q: "A flute line repeats almost the same pitch each time before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-57", topic: "pitch-scales",
            q: "A flute line repeats almost the same pitch each time in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-58", topic: "pitch-scales",
            q: "A flute line repeats almost the same pitch each time over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-59", topic: "pitch-scales",
            q: "A flute line repeats almost the same pitch each time toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-60", topic: "pitch-scales",
            q: "A flute line rises, falls and rises again through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-61", topic: "pitch-scales",
            q: "A flute line rises, falls and rises again before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-62", topic: "pitch-scales",
            q: "A flute line rises, falls and rises again in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-63", topic: "pitch-scales",
            q: "A flute line rises, falls and rises again over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-64", topic: "pitch-scales",
            q: "A flute line rises, falls and rises again toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-65", topic: "pitch-scales",
            q: "A recorder tune moves from low notes to higher notes through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-66", topic: "pitch-scales",
            q: "A recorder tune moves from low notes to higher notes before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-67", topic: "pitch-scales",
            q: "A recorder tune moves from low notes to higher notes in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-68", topic: "pitch-scales",
            q: "A recorder tune moves from low notes to higher notes over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-69", topic: "pitch-scales",
            q: "A recorder tune moves from low notes to higher notes toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-70", topic: "pitch-scales",
            q: "A recorder tune starts high and gradually moves lower through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-71", topic: "pitch-scales",
            q: "A recorder tune starts high and gradually moves lower before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-72", topic: "pitch-scales",
            q: "A recorder tune starts high and gradually moves lower in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-73", topic: "pitch-scales",
            q: "A recorder tune starts high and gradually moves lower over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-74", topic: "pitch-scales",
            q: "A recorder tune starts high and gradually moves lower toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-75", topic: "pitch-scales",
            q: "A recorder tune repeats almost the same pitch each time through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-76", topic: "pitch-scales",
            q: "A recorder tune repeats almost the same pitch each time before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-77", topic: "pitch-scales",
            q: "A recorder tune repeats almost the same pitch each time in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-78", topic: "pitch-scales",
            q: "A recorder tune repeats almost the same pitch each time over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-79", topic: "pitch-scales",
            q: "A recorder tune repeats almost the same pitch each time toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-80", topic: "pitch-scales",
            q: "A recorder tune rises, falls and rises again through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-81", topic: "pitch-scales",
            q: "A recorder tune rises, falls and rises again before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-82", topic: "pitch-scales",
            q: "A recorder tune rises, falls and rises again in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-83", topic: "pitch-scales",
            q: "A recorder tune rises, falls and rises again over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-84", topic: "pitch-scales",
            q: "A recorder tune rises, falls and rises again toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-85", topic: "pitch-scales",
            q: "A vocal phrase moves from low notes to higher notes through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-86", topic: "pitch-scales",
            q: "A vocal phrase moves from low notes to higher notes before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-87", topic: "pitch-scales",
            q: "A vocal phrase moves from low notes to higher notes in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-88", topic: "pitch-scales",
            q: "A vocal phrase moves from low notes to higher notes over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-89", topic: "pitch-scales",
            q: "A vocal phrase moves from low notes to higher notes toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-90", topic: "pitch-scales",
            q: "A vocal phrase starts high and gradually moves lower through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-91", topic: "pitch-scales",
            q: "A vocal phrase starts high and gradually moves lower before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-92", topic: "pitch-scales",
            q: "A vocal phrase starts high and gradually moves lower in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-93", topic: "pitch-scales",
            q: "A vocal phrase starts high and gradually moves lower over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-94", topic: "pitch-scales",
            q: "A vocal phrase starts high and gradually moves lower toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-95", topic: "pitch-scales",
            q: "A vocal phrase repeats almost the same pitch each time through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-96", topic: "pitch-scales",
            q: "A vocal phrase repeats almost the same pitch each time before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-97", topic: "pitch-scales",
            q: "A vocal phrase repeats almost the same pitch each time in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-98", topic: "pitch-scales",
            q: "A vocal phrase repeats almost the same pitch each time over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-99", topic: "pitch-scales",
            q: "A vocal phrase repeats almost the same pitch each time toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-100", topic: "pitch-scales",
            q: "A vocal phrase rises, falls and rises again through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-101", topic: "pitch-scales",
            q: "A vocal phrase rises, falls and rises again before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-102", topic: "pitch-scales",
            q: "A vocal phrase rises, falls and rises again in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-103", topic: "pitch-scales",
            q: "A vocal phrase rises, falls and rises again over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-104", topic: "pitch-scales",
            q: "A vocal phrase rises, falls and rises again toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-105", topic: "pitch-scales",
            q: "The main theme moves from low notes to higher notes through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-106", topic: "pitch-scales",
            q: "The main theme moves from low notes to higher notes before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-107", topic: "pitch-scales",
            q: "The main theme moves from low notes to higher notes in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-108", topic: "pitch-scales",
            q: "The main theme moves from low notes to higher notes over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-109", topic: "pitch-scales",
            q: "The main theme moves from low notes to higher notes toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-110", topic: "pitch-scales",
            q: "The main theme starts high and gradually moves lower through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-111", topic: "pitch-scales",
            q: "The main theme starts high and gradually moves lower before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-112", topic: "pitch-scales",
            q: "The main theme starts high and gradually moves lower in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-113", topic: "pitch-scales",
            q: "The main theme starts high and gradually moves lower over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-114", topic: "pitch-scales",
            q: "The main theme starts high and gradually moves lower toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-115", topic: "pitch-scales",
            q: "The main theme repeats almost the same pitch each time through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-116", topic: "pitch-scales",
            q: "The main theme repeats almost the same pitch each time before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-117", topic: "pitch-scales",
            q: "The main theme repeats almost the same pitch each time in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-118", topic: "pitch-scales",
            q: "The main theme repeats almost the same pitch each time over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-119", topic: "pitch-scales",
            q: "The main theme repeats almost the same pitch each time toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-120", topic: "pitch-scales",
            q: "The main theme rises, falls and rises again through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-121", topic: "pitch-scales",
            q: "The main theme rises, falls and rises again before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-122", topic: "pitch-scales",
            q: "The main theme rises, falls and rises again in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-123", topic: "pitch-scales",
            q: "The main theme rises, falls and rises again over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-124", topic: "pitch-scales",
            q: "The main theme rises, falls and rises again toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-125", topic: "pitch-scales",
            q: "A listening excerpt moves from low notes to higher notes through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-126", topic: "pitch-scales",
            q: "A listening excerpt moves from low notes to higher notes before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-127", topic: "pitch-scales",
            q: "A listening excerpt moves from low notes to higher notes in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-128", topic: "pitch-scales",
            q: "A listening excerpt moves from low notes to higher notes over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-129", topic: "pitch-scales",
            q: "A listening excerpt moves from low notes to higher notes toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 0,
            explain: "An ascending contour rises in pitch."
        },
        {
            id: "y7mu-mcq-130", topic: "pitch-scales",
            q: "A listening excerpt starts high and gradually moves lower through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-131", topic: "pitch-scales",
            q: "A listening excerpt starts high and gradually moves lower before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-132", topic: "pitch-scales",
            q: "A listening excerpt starts high and gradually moves lower in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-133", topic: "pitch-scales",
            q: "A listening excerpt starts high and gradually moves lower over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-134", topic: "pitch-scales",
            q: "A listening excerpt starts high and gradually moves lower toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 1,
            explain: "A descending contour falls in pitch."
        },
        {
            id: "y7mu-mcq-135", topic: "pitch-scales",
            q: "A listening excerpt repeats almost the same pitch each time through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-136", topic: "pitch-scales",
            q: "A listening excerpt repeats almost the same pitch each time before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-137", topic: "pitch-scales",
            q: "A listening excerpt repeats almost the same pitch each time in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-138", topic: "pitch-scales",
            q: "A listening excerpt repeats almost the same pitch each time over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-139", topic: "pitch-scales",
            q: "A listening excerpt repeats almost the same pitch each time toward the cadence. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 2,
            explain: "A static contour stays mainly on one pitch."
        },
        {
            id: "y7mu-mcq-140", topic: "pitch-scales",
            q: "A listening excerpt rises, falls and rises again through the phrase. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-141", topic: "pitch-scales",
            q: "A listening excerpt rises, falls and rises again before it repeats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-142", topic: "pitch-scales",
            q: "A listening excerpt rises, falls and rises again in the first section. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },
        {
            id: "y7mu-mcq-143", topic: "pitch-scales",
            q: "A listening excerpt rises, falls and rises again over four beats. This contour is best described as:",
            options: ["ascending contour", "descending contour", "static contour", "wave-like contour"],
            answer: 3,
            explain: "A wave-like contour changes direction to create a curved shape."
        },

        /* ----- Duration, rhythm & time signatures ----- */
        {
            id: "y7mu-mcq-7", topic: "duration-rhythm",
            q: "Duration in music refers to:",
            options: ["how long or short sounds and silences are", "how loud the music is", "the style period of the piece", "the tuning of the instrument"],
            answer: 0,
            explain: "Duration is the element of music dealing with time values, note lengths and rests."
        },
        {
            id: "y7mu-mcq-8", topic: "duration-rhythm",
            q: "A time signature of 3/4 means there are:",
            options: ["3 crotchet beats in each bar", "4 crotchet beats in each bar", "3 quavers in each bar", "4 minims in each bar"],
            answer: 0,
            explain: "In 3/4 time, there are three crotchet beats per bar."
        },
        {
            id: "y7mu-mcq-9", topic: "duration-rhythm",
            q: "Which time signature usually feels like a strong march pulse?",
            options: ["2/4", "3/4", "5/4", "6/8"],
            answer: 0,
            explain: "2/4 often has a strong, even duple feel common in marches."
        },
        {
            id: "y7mu-mcq-10", topic: "duration-rhythm",
            q: "Which statement best describes rhythm?",
            options: ["The order of chords only", "The pattern of long and short sounds", "The speed of the music only", "The loudness pattern only"],
            answer: 1,
            explain: "Rhythm is the pattern of note durations and rests."
        },
        {
            id: "y7mu-mcq-11", topic: "duration-rhythm",
            q: "A piece that groups the beat into four crotchet counts in each bar is most likely in:",
            options: ["2/4", "3/4", "4/4", "1/4"],
            answer: 2,
            explain: "4/4 time has four crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-12", topic: "duration-rhythm",
            q: "When aurally identifying a rhythmic pattern, you are mainly listening for:",
            options: ["the shape of the melody only", "the pattern of note lengths and accents", "the key signature only", "the title of the piece"],
            answer: 1,
            explain: "Rhythmic identification focuses on duration patterns and pulse groupings."
        },
        {
            id: "y7mu-mcq-195", topic: "duration-rhythm",
            q: "A listening excerpt is in 2/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 0,
            explain: "2/4 means there are 2 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-196", topic: "duration-rhythm",
            q: "A listening excerpt groups the beat in 2. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 0,
            explain: "Counting 2 beats in each bar points to 2/4."
        },
        {
            id: "y7mu-mcq-197", topic: "duration-rhythm",
            q: "A drum pattern is in 2/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 0,
            explain: "2/4 means there are 2 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-198", topic: "duration-rhythm",
            q: "A drum pattern groups the beat in 2. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 0,
            explain: "Counting 2 beats in each bar points to 2/4."
        },
        {
            id: "y7mu-mcq-199", topic: "duration-rhythm",
            q: "A class clapping task is in 2/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 0,
            explain: "2/4 means there are 2 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-200", topic: "duration-rhythm",
            q: "A class clapping task groups the beat in 2. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 0,
            explain: "Counting 2 beats in each bar points to 2/4."
        },
        {
            id: "y7mu-mcq-201", topic: "duration-rhythm",
            q: "A rhythm example is in 2/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 0,
            explain: "2/4 means there are 2 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-202", topic: "duration-rhythm",
            q: "A rhythm example groups the beat in 2. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 0,
            explain: "Counting 2 beats in each bar points to 2/4."
        },
        {
            id: "y7mu-mcq-203", topic: "duration-rhythm",
            q: "The opening bar is in 2/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 0,
            explain: "2/4 means there are 2 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-204", topic: "duration-rhythm",
            q: "The opening bar groups the beat in 2. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 0,
            explain: "Counting 2 beats in each bar points to 2/4."
        },
        {
            id: "y7mu-mcq-205", topic: "duration-rhythm",
            q: "A short performance is in 2/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 0,
            explain: "2/4 means there are 2 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-206", topic: "duration-rhythm",
            q: "A short performance groups the beat in 2. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 0,
            explain: "Counting 2 beats in each bar points to 2/4."
        },
        {
            id: "y7mu-mcq-207", topic: "duration-rhythm",
            q: "A listening excerpt is in 3/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            explain: "3/4 means there are 3 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-208", topic: "duration-rhythm",
            q: "A listening excerpt groups the beat in 3. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 1,
            explain: "Counting 3 beats in each bar points to 3/4."
        },
        {
            id: "y7mu-mcq-209", topic: "duration-rhythm",
            q: "A drum pattern is in 3/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            explain: "3/4 means there are 3 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-210", topic: "duration-rhythm",
            q: "A drum pattern groups the beat in 3. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 1,
            explain: "Counting 3 beats in each bar points to 3/4."
        },
        {
            id: "y7mu-mcq-211", topic: "duration-rhythm",
            q: "A class clapping task is in 3/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            explain: "3/4 means there are 3 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-212", topic: "duration-rhythm",
            q: "A class clapping task groups the beat in 3. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 1,
            explain: "Counting 3 beats in each bar points to 3/4."
        },
        {
            id: "y7mu-mcq-213", topic: "duration-rhythm",
            q: "A rhythm example is in 3/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            explain: "3/4 means there are 3 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-214", topic: "duration-rhythm",
            q: "A rhythm example groups the beat in 3. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 1,
            explain: "Counting 3 beats in each bar points to 3/4."
        },
        {
            id: "y7mu-mcq-215", topic: "duration-rhythm",
            q: "The opening bar is in 3/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            explain: "3/4 means there are 3 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-216", topic: "duration-rhythm",
            q: "The opening bar groups the beat in 3. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 1,
            explain: "Counting 3 beats in each bar points to 3/4."
        },
        {
            id: "y7mu-mcq-217", topic: "duration-rhythm",
            q: "A short performance is in 3/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            explain: "3/4 means there are 3 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-218", topic: "duration-rhythm",
            q: "A short performance groups the beat in 3. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 1,
            explain: "Counting 3 beats in each bar points to 3/4."
        },
        {
            id: "y7mu-mcq-219", topic: "duration-rhythm",
            q: "A listening excerpt is in 4/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 2,
            explain: "4/4 means there are 4 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-220", topic: "duration-rhythm",
            q: "A listening excerpt groups the beat in 4. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 2,
            explain: "Counting 4 beats in each bar points to 4/4."
        },
        {
            id: "y7mu-mcq-221", topic: "duration-rhythm",
            q: "A drum pattern is in 4/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 2,
            explain: "4/4 means there are 4 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-222", topic: "duration-rhythm",
            q: "A drum pattern groups the beat in 4. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 2,
            explain: "Counting 4 beats in each bar points to 4/4."
        },
        {
            id: "y7mu-mcq-223", topic: "duration-rhythm",
            q: "A class clapping task is in 4/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 2,
            explain: "4/4 means there are 4 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-224", topic: "duration-rhythm",
            q: "A class clapping task groups the beat in 4. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 2,
            explain: "Counting 4 beats in each bar points to 4/4."
        },
        {
            id: "y7mu-mcq-225", topic: "duration-rhythm",
            q: "A rhythm example is in 4/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 2,
            explain: "4/4 means there are 4 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-226", topic: "duration-rhythm",
            q: "A rhythm example groups the beat in 4. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 2,
            explain: "Counting 4 beats in each bar points to 4/4."
        },
        {
            id: "y7mu-mcq-227", topic: "duration-rhythm",
            q: "The opening bar is in 4/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 2,
            explain: "4/4 means there are 4 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-228", topic: "duration-rhythm",
            q: "The opening bar groups the beat in 4. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 2,
            explain: "Counting 4 beats in each bar points to 4/4."
        },
        {
            id: "y7mu-mcq-229", topic: "duration-rhythm",
            q: "A short performance is in 4/4. How many crotchet beats are in each bar?",
            options: ["2", "3", "4", "6"],
            answer: 2,
            explain: "4/4 means there are 4 crotchet beats in each bar."
        },
        {
            id: "y7mu-mcq-230", topic: "duration-rhythm",
            q: "A short performance groups the beat in 4. Which time signature matches that feel?",
            options: ["2/4", "3/4", "4/4", "5/4"],
            answer: 2,
            explain: "Counting 4 beats in each bar points to 4/4."
        },
        {
            id: "y7mu-mcq-231", topic: "duration-rhythm",
            q: "Which set of notes adds up to exactly one bar of 2/4 time?",
            options: ["one semibreve", "two crotchets", "five quavers", "three crotchets"],
            answer: 1,
            explain: "Two crotchets fill one bar of 2/4 time."
        },
        {
            id: "y7mu-mcq-232", topic: "duration-rhythm",
            q: "In 2/4 time, which single note value lasts for the whole bar?",
            options: ["one minim", "three crotchets", "one semibreve", "five quavers"],
            answer: 0,
            explain: "One minim fills one bar of 2/4 time."
        },
        {
            id: "y7mu-mcq-233", topic: "duration-rhythm",
            q: "Which option totals three crotchet beats in 3/4 time?",
            options: ["two crotchets", "three crotchets", "one minim", "one semibreve"],
            answer: 1,
            explain: "Three crotchets fill one bar of 3/4 time."
        },
        {
            id: "y7mu-mcq-234", topic: "duration-rhythm",
            q: "In 3/4 time, which combination fills the bar exactly?",
            options: ["one minim and one crotchet", "one semibreve", "two minims", "seven quavers"],
            answer: 0,
            explain: "One minim and one crotchet fill one bar of 3/4 time."
        },
        {
            id: "y7mu-mcq-235", topic: "duration-rhythm",
            q: "Which set of notes equals four crotchet beats in 4/4 time?",
            options: ["three crotchets", "four crotchets", "one minim", "five crotchets"],
            answer: 1,
            explain: "Four crotchets fill one bar of 4/4 time."
        },
        {
            id: "y7mu-mcq-236", topic: "duration-rhythm",
            q: "In common time (4/4), which single note value lasts for the whole bar?",
            options: ["one minim", "one semibreve", "three crotchets", "two quavers"],
            answer: 1,
            explain: "One semibreve fills one bar of 4/4 time."
        },
        {
            id: "y7mu-mcq-237", topic: "duration-rhythm",
            q: "Which pair of notes fills an entire bar of 4/4 time?",
            options: ["one minim", "two minims", "three crotchets", "one dotted crotchet"],
            answer: 1,
            explain: "Two minims fill one bar of 4/4 time."
        },
        {
            id: "y7mu-mcq-238", topic: "duration-rhythm",
            q: "Rhythm is best defined as:",
            options: ["the pattern of long and short sounds", "how high or low the notes are", "the order of sections only", "the instrument family"],
            answer: 0,
            explain: "Rhythm describes the pattern of note lengths and rests."
        },
        {
            id: "y7mu-mcq-239", topic: "duration-rhythm",
            q: "Pulse in music means:",
            options: ["the steady beat you can tap", "the loudest note only", "the highest pitch", "the title of the piece"],
            answer: 0,
            explain: "Pulse is the regular beat that underpins the rhythm."
        },
        {
            id: "y7mu-mcq-240", topic: "duration-rhythm",
            q: "A rest tells the performer to:",
            options: ["play louder", "stay silent for a set duration", "speed up suddenly", "change key"],
            answer: 1,
            explain: "A rest shows silence for a specific length of time."
        },
        {
            id: "y7mu-mcq-241", topic: "duration-rhythm",
            q: "When you clap the beat evenly while a singer performs a rhythm, you are showing the:",
            options: ["pulse", "pitch contour", "form", "register"],
            answer: 0,
            explain: "Keeping a steady beat demonstrates the pulse."
        },
        {
            id: "y7mu-mcq-242", topic: "duration-rhythm",
            q: "If you hear a strong-weak beat pattern in a percussion excerpt, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 0,
            explain: "Two-beat groupings suggest 2/4."
        },
        {
            id: "y7mu-mcq-243", topic: "duration-rhythm",
            q: "If you hear a strong-weak beat pattern in a clapping example, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 0,
            explain: "Two-beat groupings suggest 2/4."
        },
        {
            id: "y7mu-mcq-244", topic: "duration-rhythm",
            q: "If you hear a strong-weak beat pattern through the opening phrase, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 0,
            explain: "Two-beat groupings suggest 2/4."
        },
        {
            id: "y7mu-mcq-245", topic: "duration-rhythm",
            q: "If you hear a strong-weak beat pattern for the whole bar, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 0,
            explain: "Two-beat groupings suggest 2/4."
        },
        {
            id: "y7mu-mcq-246", topic: "duration-rhythm",
            q: "If you hear a strong-weak beat pattern in a short listening test, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 0,
            explain: "Two-beat groupings suggest 2/4."
        },
        {
            id: "y7mu-mcq-247", topic: "duration-rhythm",
            q: "If you hear a strong-weak beat pattern during rehearsal, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 0,
            explain: "Two-beat groupings suggest 2/4."
        },
        {
            id: "y7mu-mcq-248", topic: "duration-rhythm",
            q: "If you hear a strong-weak-weak beat pattern in a percussion excerpt, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 1,
            explain: "Three-beat groupings suggest 3/4."
        },
        {
            id: "y7mu-mcq-249", topic: "duration-rhythm",
            q: "If you hear a strong-weak-weak beat pattern in a clapping example, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 1,
            explain: "Three-beat groupings suggest 3/4."
        },
        {
            id: "y7mu-mcq-250", topic: "duration-rhythm",
            q: "If you hear a strong-weak-weak beat pattern through the opening phrase, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 1,
            explain: "Three-beat groupings suggest 3/4."
        },
        {
            id: "y7mu-mcq-251", topic: "duration-rhythm",
            q: "If you hear a strong-weak-weak beat pattern for the whole bar, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 1,
            explain: "Three-beat groupings suggest 3/4."
        },
        {
            id: "y7mu-mcq-252", topic: "duration-rhythm",
            q: "If you hear a strong-weak-weak beat pattern in a short listening test, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 1,
            explain: "Three-beat groupings suggest 3/4."
        },
        {
            id: "y7mu-mcq-253", topic: "duration-rhythm",
            q: "If you hear a strong-weak-weak beat pattern during rehearsal, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 1,
            explain: "Three-beat groupings suggest 3/4."
        },
        {
            id: "y7mu-mcq-254", topic: "duration-rhythm",
            q: "If you hear a strong-weak-medium-weak beat pattern in a percussion excerpt, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 2,
            explain: "Four-beat groupings suggest 4/4."
        },
        {
            id: "y7mu-mcq-255", topic: "duration-rhythm",
            q: "If you hear a strong-weak-medium-weak beat pattern in a clapping example, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 2,
            explain: "Four-beat groupings suggest 4/4."
        },
        {
            id: "y7mu-mcq-256", topic: "duration-rhythm",
            q: "If you hear a strong-weak-medium-weak beat pattern through the opening phrase, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 2,
            explain: "Four-beat groupings suggest 4/4."
        },
        {
            id: "y7mu-mcq-257", topic: "duration-rhythm",
            q: "If you hear a strong-weak-medium-weak beat pattern for the whole bar, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 2,
            explain: "Four-beat groupings suggest 4/4."
        },
        {
            id: "y7mu-mcq-258", topic: "duration-rhythm",
            q: "If you hear a strong-weak-medium-weak beat pattern in a short listening test, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 2,
            explain: "Four-beat groupings suggest 4/4."
        },
        {
            id: "y7mu-mcq-259", topic: "duration-rhythm",
            q: "If you hear a strong-weak-medium-weak beat pattern during rehearsal, the time signature is most likely:",
            options: ["2/4", "3/4", "4/4", "7/4"],
            answer: 2,
            explain: "Four-beat groupings suggest 4/4."
        },
        {
            id: "y7mu-mcq-260", topic: "duration-rhythm",
            q: "In simple time, a crotchet usually lasts how many beat?",
            options: ["0", "1", "2", "3"],
            answer: 1,
            explain: "A crotchet usually lasts 1 beat in simple time."
        },
        {
            id: "y7mu-mcq-261", topic: "duration-rhythm",
            q: "In simple time, a minim usually lasts how many beats?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            explain: "A minim usually lasts 2 beats in simple time."
        },
        {
            id: "y7mu-mcq-262", topic: "duration-rhythm",
            q: "In simple time, a semibreve usually lasts how many beats?",
            options: ["3", "4", "5", "6"],
            answer: 1,
            explain: "A semibreve usually lasts 4 beats in simple time."
        },
        {
            id: "y7mu-mcq-263", topic: "duration-rhythm",
            q: "In simple time, a pair of quavers takes how many beat?",
            options: ["0", "1", "2", "3"],
            answer: 1,
            explain: "Two quavers add up to one beat."
        },
        {
            id: "y7mu-mcq-264", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 70. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-265", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 71. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-266", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 72. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-267", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 73. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-268", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 74. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-269", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 75. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-270", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 76. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-271", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 77. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-272", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 78. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-273", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 79. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-274", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 80. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-275", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 81. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-276", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 82. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-277", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 83. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-278", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 84. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-279", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 85. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-280", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 86. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-281", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 87. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-282", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 88. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-283", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 89. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-284", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 90. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-285", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 91. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-286", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 92. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-287", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 93. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-288", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 94. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-289", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 95. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-290", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 96. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-291", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 97. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-292", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 98. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-293", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 99. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-294", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 100. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-295", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 101. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-296", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 102. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-297", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 103. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-298", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 104. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-299", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 105. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-300", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 106. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-301", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 107. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-302", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 108. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-303", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 109. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-304", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 110. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-305", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 111. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-306", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 112. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-307", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 113. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-308", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 114. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-309", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 115. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-310", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 116. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },
        {
            id: "y7mu-mcq-311", topic: "duration-rhythm",
            q: "A student counts 2 steady beats before each bar line in example 117. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 0,
            explain: "Counting 2 beats per bar points to 2/4."
        },
        {
            id: "y7mu-mcq-312", topic: "duration-rhythm",
            q: "A student counts 3 steady beats before each bar line in example 118. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 1,
            explain: "Counting 3 beats per bar points to 3/4."
        },
        {
            id: "y7mu-mcq-313", topic: "duration-rhythm",
            q: "A student counts 4 steady beats before each bar line in example 119. Which time signature is most suitable?",
            options: ["2/4", "3/4", "4/4", "6/4"],
            answer: 2,
            explain: "Counting 4 beats per bar points to 4/4."
        },

        /* ----- Structure & form ----- */
        {
            id: "y7mu-mcq-13", topic: "structure-form",
            q: "Binary form is best shown as:",
            options: ["AB", "ABA", "AABA", "Verse-Chorus only"],
            answer: 0,
            explain: "Binary form has two contrasting sections: A then B."
        },
        {
            id: "y7mu-mcq-14", topic: "structure-form",
            q: "Ternary form is best shown as:",
            options: ["AB", "ABA", "ABAB", "AAAB"],
            answer: 1,
            explain: "Ternary form has three sections where the first returns: ABA."
        },
        {
            id: "y7mu-mcq-15", topic: "structure-form",
            q: "A pop song with repeating verses and a repeated chorus is most likely in:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form only"],
            answer: 2,
            explain: "Verse/chorus form is common in popular music with repeated chorus sections."
        },
        {
            id: "y7mu-mcq-16", topic: "structure-form",
            q: "In a ternary piece, the final section is usually:",
            options: ["completely unrelated to the first", "a return of the first section", "always faster than the first", "always louder than the first"],
            answer: 1,
            explain: "In ABA form, the final A section returns after the contrasting B section."
        },
        {
            id: "y7mu-mcq-17", topic: "structure-form",
            q: "If a listening excerpt follows an A section and then a contrasting B section with no return to A, the structure is most likely:",
            options: ["binary", "ternary", "round", "canon"],
            answer: 0,
            explain: "AB without a return to A is binary form."
        },
        {
            id: "y7mu-mcq-18", topic: "structure-form",
            q: "Recognising formal structure in a listening task mainly helps you describe:",
            options: ["the order of musical sections", "the exact note names only", "instrument maintenance", "stage lighting"],
            answer: 0,
            explain: "Form or structure describes how sections of a piece are organised."
        },
        {
            id: "y7mu-mcq-314", topic: "structure-form",
            q: "A piece organised as AB is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Binary form has two sections: A then B."
        },
        {
            id: "y7mu-mcq-315", topic: "structure-form",
            q: "A listening excerpt shaped as AB is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Binary form has two sections: A then B."
        },
        {
            id: "y7mu-mcq-316", topic: "structure-form",
            q: "A song written in the pattern AB is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Binary form has two sections: A then B."
        },
        {
            id: "y7mu-mcq-317", topic: "structure-form",
            q: "A short example using AB is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Binary form has two sections: A then B."
        },
        {
            id: "y7mu-mcq-318", topic: "structure-form",
            q: "A piece organised as ABA is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Ternary form returns to the opening section after a contrasting middle section."
        },
        {
            id: "y7mu-mcq-319", topic: "structure-form",
            q: "A listening excerpt shaped as ABA is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Ternary form returns to the opening section after a contrasting middle section."
        },
        {
            id: "y7mu-mcq-320", topic: "structure-form",
            q: "A song written in the pattern ABA is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Ternary form returns to the opening section after a contrasting middle section."
        },
        {
            id: "y7mu-mcq-321", topic: "structure-form",
            q: "A short example using ABA is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Ternary form returns to the opening section after a contrasting middle section."
        },
        {
            id: "y7mu-mcq-322", topic: "structure-form",
            q: "A piece organised as verse-chorus is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Verse/chorus form repeats the chorus between changing verses."
        },
        {
            id: "y7mu-mcq-323", topic: "structure-form",
            q: "A listening excerpt shaped as verse-chorus is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Verse/chorus form repeats the chorus between changing verses."
        },
        {
            id: "y7mu-mcq-324", topic: "structure-form",
            q: "A song written in the pattern verse-chorus is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Verse/chorus form repeats the chorus between changing verses."
        },
        {
            id: "y7mu-mcq-325", topic: "structure-form",
            q: "A short example using verse-chorus is best described as:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Verse/chorus form repeats the chorus between changing verses."
        },
        {
            id: "y7mu-mcq-326", topic: "structure-form",
            q: "If section A returns after a contrasting B section, the form is most likely:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "A return to A after B gives an ABA ternary structure."
        },
        {
            id: "y7mu-mcq-327", topic: "structure-form",
            q: "If a piece moves from A to B with no return to A, the form is most likely:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "AB with no return is binary form."
        },
        {
            id: "y7mu-mcq-328", topic: "structure-form",
            q: "If each verse changes but the chorus stays the same, the song is using:",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Changing verses with a repeated chorus create verse/chorus form."
        },
        {
            id: "y7mu-mcq-329", topic: "structure-form",
            q: "The main purpose of identifying form in a listening exam is to describe:",
            options: ["instrument tone", "the exact key signature", "stage directions", "how sections are organised"],
            answer: 3,
            explain: "Form explains how sections are organised and repeated."
        },
        {
            id: "y7mu-mcq-330", topic: "structure-form",
            q: "Which section usually contrasts with the first section in ternary form?",
            options: ["the first A section", "the B section", "the coda only", "the title line"],
            answer: 1,
            explain: "The B section contrasts with the opening A section."
        },
        {
            id: "y7mu-mcq-331", topic: "structure-form",
            q: "A chorus is usually recognised because it:",
            options: ["returns with similar words and music", "contains no beat", "removes all melody", "changes tempo every bar"],
            answer: 0,
            explain: "The chorus repeats recognisable musical material."
        },
        {
            id: "y7mu-mcq-332", topic: "structure-form",
            q: "In binary form, the second section should usually sound:",
            options: ["exactly the same as A", "silent", "different from A", "unrelated to rhythm"],
            answer: 2,
            explain: "The B section contrasts with the A section in binary form."
        },
        {
            id: "y7mu-mcq-333", topic: "structure-form",
            q: "Which form best matches the section pattern A, B, A?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "ABA shows ternary form because the opening section returns."
        },
        {
            id: "y7mu-mcq-334", topic: "structure-form",
            q: "Which form best matches the section pattern A, B?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "AB shows binary form because there are two sections with no return."
        },
        {
            id: "y7mu-mcq-335", topic: "structure-form",
            q: "Which form best matches the section pattern Verse, Chorus, Verse, Chorus?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Alternating verse and chorus sections indicate verse/chorus form."
        },
        {
            id: "y7mu-mcq-336", topic: "structure-form",
            q: "Which form best matches the section pattern Verse, Chorus, Bridge, Chorus?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "A repeated chorus still points to verse/chorus form."
        },
        {
            id: "y7mu-mcq-337", topic: "structure-form",
            q: "Which form best matches the section pattern A, B, A, B?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "A repeated AB pattern is still fundamentally binary because it alternates two contrasting sections."
        },
        {
            id: "y7mu-mcq-338", topic: "structure-form",
            q: "Which form best matches the section pattern A, A, B, A?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "The return of A after B still fits ternary thinking at Year 7 level."
        },
        {
            id: "y7mu-mcq-339", topic: "structure-form",
            q: "If you hear verse material, then a repeated chorus in a concert excerpt, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Repeated chorus material between verses is verse/chorus form."
        },
        {
            id: "y7mu-mcq-340", topic: "structure-form",
            q: "If you hear A, then contrasting B, then the original A in a concert excerpt, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "A return to the opening section gives ABA ternary form."
        },
        {
            id: "y7mu-mcq-341", topic: "structure-form",
            q: "If you hear one section followed by a contrasting second section in a concert excerpt with no return, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Two contrasting sections with no return to A create binary form."
        },
        {
            id: "y7mu-mcq-342", topic: "structure-form",
            q: "If you hear verse material, then a repeated chorus during a listening test, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Repeated chorus material between verses is verse/chorus form."
        },
        {
            id: "y7mu-mcq-343", topic: "structure-form",
            q: "If you hear A, then contrasting B, then the original A during a listening test, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "A return to the opening section gives ABA ternary form."
        },
        {
            id: "y7mu-mcq-344", topic: "structure-form",
            q: "If you hear one section followed by a contrasting second section during a listening test with no return, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Two contrasting sections with no return to A create binary form."
        },
        {
            id: "y7mu-mcq-345", topic: "structure-form",
            q: "If you hear verse material, then a repeated chorus in a pop song, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Repeated chorus material between verses is verse/chorus form."
        },
        {
            id: "y7mu-mcq-346", topic: "structure-form",
            q: "If you hear A, then contrasting B, then the original A in a pop song, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "A return to the opening section gives ABA ternary form."
        },
        {
            id: "y7mu-mcq-347", topic: "structure-form",
            q: "If you hear one section followed by a contrasting second section in a pop song with no return, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Two contrasting sections with no return to A create binary form."
        },
        {
            id: "y7mu-mcq-348", topic: "structure-form",
            q: "If you hear verse material, then a repeated chorus in a classroom example, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Repeated chorus material between verses is verse/chorus form."
        },
        {
            id: "y7mu-mcq-349", topic: "structure-form",
            q: "If you hear A, then contrasting B, then the original A in a classroom example, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "A return to the opening section gives ABA ternary form."
        },
        {
            id: "y7mu-mcq-350", topic: "structure-form",
            q: "If you hear one section followed by a contrasting second section in a classroom example with no return, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Two contrasting sections with no return to A create binary form."
        },
        {
            id: "y7mu-mcq-351", topic: "structure-form",
            q: "If you hear verse material, then a repeated chorus in the opening minute, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Repeated chorus material between verses is verse/chorus form."
        },
        {
            id: "y7mu-mcq-352", topic: "structure-form",
            q: "If you hear A, then contrasting B, then the original A in the opening minute, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "A return to the opening section gives ABA ternary form."
        },
        {
            id: "y7mu-mcq-353", topic: "structure-form",
            q: "If you hear one section followed by a contrasting second section in the opening minute with no return, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Two contrasting sections with no return to A create binary form."
        },
        {
            id: "y7mu-mcq-354", topic: "structure-form",
            q: "If you hear verse material, then a repeated chorus in the final section, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 2,
            explain: "Repeated chorus material between verses is verse/chorus form."
        },
        {
            id: "y7mu-mcq-355", topic: "structure-form",
            q: "If you hear A, then contrasting B, then the original A in the final section, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "A return to the opening section gives ABA ternary form."
        },
        {
            id: "y7mu-mcq-356", topic: "structure-form",
            q: "If you hear one section followed by a contrasting second section in the final section with no return, which form is most likely?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 0,
            explain: "Two contrasting sections with no return to A create binary form."
        },
        {
            id: "y7mu-mcq-357", topic: "structure-form",
            q: "Example 44 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-358", topic: "structure-form",
            q: "Example 45 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-359", topic: "structure-form",
            q: "Example 46 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-360", topic: "structure-form",
            q: "Example 47 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-361", topic: "structure-form",
            q: "Example 48 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-362", topic: "structure-form",
            q: "Example 49 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-363", topic: "structure-form",
            q: "Example 50 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-364", topic: "structure-form",
            q: "Example 51 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-365", topic: "structure-form",
            q: "Example 52 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-366", topic: "structure-form",
            q: "Example 53 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-367", topic: "structure-form",
            q: "Example 54 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-368", topic: "structure-form",
            q: "Example 55 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-369", topic: "structure-form",
            q: "Example 56 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-370", topic: "structure-form",
            q: "Example 57 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-371", topic: "structure-form",
            q: "Example 58 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-372", topic: "structure-form",
            q: "Example 59 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-373", topic: "structure-form",
            q: "Example 60 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-374", topic: "structure-form",
            q: "Example 61 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-375", topic: "structure-form",
            q: "Example 62 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-376", topic: "structure-form",
            q: "Example 63 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-377", topic: "structure-form",
            q: "Example 64 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-378", topic: "structure-form",
            q: "Example 65 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-379", topic: "structure-form",
            q: "Example 66 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-380", topic: "structure-form",
            q: "Example 67 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-381", topic: "structure-form",
            q: "Example 68 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-382", topic: "structure-form",
            q: "Example 69 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-383", topic: "structure-form",
            q: "Example 70 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-384", topic: "structure-form",
            q: "Example 71 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-385", topic: "structure-form",
            q: "Example 72 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-386", topic: "structure-form",
            q: "Example 73 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-387", topic: "structure-form",
            q: "Example 74 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-388", topic: "structure-form",
            q: "Example 75 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-389", topic: "structure-form",
            q: "Example 76 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-390", topic: "structure-form",
            q: "Example 77 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-391", topic: "structure-form",
            q: "Example 78 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-392", topic: "structure-form",
            q: "Example 79 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-393", topic: "structure-form",
            q: "Example 80 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-394", topic: "structure-form",
            q: "Example 81 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-395", topic: "structure-form",
            q: "Example 82 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-396", topic: "structure-form",
            q: "Example 83 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-397", topic: "structure-form",
            q: "Example 84 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-398", topic: "structure-form",
            q: "Example 85 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-399", topic: "structure-form",
            q: "Example 86 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-400", topic: "structure-form",
            q: "Example 87 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-401", topic: "structure-form",
            q: "Example 88 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-402", topic: "structure-form",
            q: "Example 89 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-403", topic: "structure-form",
            q: "Example 90 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-404", topic: "structure-form",
            q: "Example 91 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-405", topic: "structure-form",
            q: "Example 92 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-406", topic: "structure-form",
            q: "Example 93 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-407", topic: "structure-form",
            q: "Example 94 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-408", topic: "structure-form",
            q: "Example 95 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-409", topic: "structure-form",
            q: "Example 96 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-410", topic: "structure-form",
            q: "Example 97 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-411", topic: "structure-form",
            q: "Example 98 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-412", topic: "structure-form",
            q: "Example 99 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-413", topic: "structure-form",
            q: "Example 100 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-414", topic: "structure-form",
            q: "Example 101 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-415", topic: "structure-form",
            q: "Example 102 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-416", topic: "structure-form",
            q: "Example 103 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-417", topic: "structure-form",
            q: "Example 104 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-418", topic: "structure-form",
            q: "Example 105 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-419", topic: "structure-form",
            q: "Example 106 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-420", topic: "structure-form",
            q: "Example 107 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-421", topic: "structure-form",
            q: "Example 108 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-422", topic: "structure-form",
            q: "Example 109 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-423", topic: "structure-form",
            q: "Example 110 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-424", topic: "structure-form",
            q: "Example 111 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-425", topic: "structure-form",
            q: "Example 112 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-426", topic: "structure-form",
            q: "Example 113 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-427", topic: "structure-form",
            q: "Example 114 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-428", topic: "structure-form",
            q: "Example 115 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-429", topic: "structure-form",
            q: "Example 116 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-430", topic: "structure-form",
            q: "Example 117 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-431", topic: "structure-form",
            q: "Example 118 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },
        {
            id: "y7mu-mcq-432", topic: "structure-form",
            q: "Example 119 ends with the same material it began with after a contrasting middle. Which form label fits best?",
            options: ["binary form", "ternary form", "verse/chorus form", "through-composed form"],
            answer: 1,
            explain: "Returning to the opening material after contrast is ternary form."
        },

        /* ----- Dynamics & tempo ----- */
        {
            id: "y7mu-mcq-19", topic: "dynamics-tempo",
            q: "The dynamic marking mf means:",
            options: ["very soft", "moderately loud", "very loud", "moderately soft only"],
            answer: 1,
            explain: "mf stands for mezzo forte, meaning moderately loud."
        },
        {
            id: "y7mu-mcq-20", topic: "dynamics-tempo",
            q: "Which dynamic marking means very soft?",
            options: ["ff", "f", "p", "pp"],
            answer: 3,
            explain: "pp stands for pianissimo, meaning very soft."
        },
        {
            id: "y7mu-mcq-21", topic: "dynamics-tempo",
            q: "Which tempo marking means fast?",
            options: ["Largo", "Adagio", "Andante", "Allegro"],
            answer: 3,
            explain: "Allegro is a fast tempo marking."
        },
        {
            id: "y7mu-mcq-22", topic: "dynamics-tempo",
            q: "Which tempo marking is the slowest?",
            options: ["Presto", "Moderato", "Largo", "Allegro"],
            answer: 2,
            explain: "Largo is very slow."
        },
        {
            id: "y7mu-mcq-23", topic: "dynamics-tempo",
            q: "If a piece becomes gradually louder, you would describe a change in:",
            options: ["tempo", "dynamics", "structure", "pitch contour only"],
            answer: 1,
            explain: "Loudness and softness are part of the element of dynamics."
        },
        {
            id: "y7mu-mcq-24", topic: "dynamics-tempo",
            q: "A piece marked Presto should be performed:",
            options: ["very slowly", "at walking pace", "very quickly", "moderately softly"],
            answer: 2,
            explain: "Presto is a very fast tempo."
        },
        {
            id: "y7mu-mcq-433", topic: "dynamics-tempo",
            q: "The dynamic marking pp means:",
            options: ["very soft", "soft", "moderately loud", "very loud"],
            answer: 0,
            explain: "pp indicates very soft."
        },
        {
            id: "y7mu-mcq-434", topic: "dynamics-tempo",
            q: "The dynamic marking p means:",
            options: ["very soft", "soft", "moderately loud", "very loud"],
            answer: 1,
            explain: "p indicates soft."
        },
        {
            id: "y7mu-mcq-435", topic: "dynamics-tempo",
            q: "The dynamic marking mp means:",
            options: ["very soft", "soft", "moderately soft", "very loud"],
            answer: 2,
            explain: "mp indicates moderately soft."
        },
        {
            id: "y7mu-mcq-436", topic: "dynamics-tempo",
            q: "On a score, mf tells performers to play:",
            options: ["very soft", "soft", "moderately loud", "very loud"],
            answer: 2,
            explain: "mf indicates moderately loud."
        },
        {
            id: "y7mu-mcq-437", topic: "dynamics-tempo",
            q: "The dynamic marking f means:",
            options: ["very soft", "soft", "loud", "very loud"],
            answer: 2,
            explain: "f indicates loud."
        },
        {
            id: "y7mu-mcq-438", topic: "dynamics-tempo",
            q: "The dynamic marking ff means:",
            options: ["very soft", "soft", "moderately loud", "very loud"],
            answer: 3,
            explain: "ff indicates very loud."
        },
        {
            id: "y7mu-mcq-439", topic: "dynamics-tempo",
            q: "Which meaning matches the tempo marking Largo?",
            options: ["very slow", "slow", "walking pace", "moderate speed", "fast", "very fast"],
            answer: 0,
            explain: "Largo means very slow."
        },
        {
            id: "y7mu-mcq-440", topic: "dynamics-tempo",
            q: "Which meaning matches the tempo marking Adagio?",
            options: ["very slow", "slow", "walking pace", "moderate speed", "fast", "very fast"],
            answer: 1,
            explain: "Adagio means slow."
        },
        {
            id: "y7mu-mcq-441", topic: "dynamics-tempo",
            q: "Which meaning matches the tempo marking Andante?",
            options: ["very slow", "slow", "walking pace", "moderate speed", "fast", "very fast"],
            answer: 2,
            explain: "Andante means walking pace."
        },
        {
            id: "y7mu-mcq-442", topic: "dynamics-tempo",
            q: "Which meaning matches the tempo marking Moderato?",
            options: ["very slow", "slow", "walking pace", "moderate speed", "fast", "very fast"],
            answer: 3,
            explain: "Moderato means moderate speed."
        },
        {
            id: "y7mu-mcq-443", topic: "dynamics-tempo",
            q: "Which meaning matches the tempo marking Allegro?",
            options: ["very slow", "slow", "walking pace", "moderate speed", "fast", "very fast"],
            answer: 4,
            explain: "Allegro means fast."
        },
        {
            id: "y7mu-mcq-444", topic: "dynamics-tempo",
            q: "Which meaning matches the tempo marking Presto?",
            options: ["very slow", "slow", "walking pace", "moderate speed", "fast", "very fast"],
            answer: 5,
            explain: "Presto means very fast."
        },
        {
            id: "y7mu-mcq-445", topic: "dynamics-tempo",
            q: "A passage that becomes gradually louder is showing:",
            options: ["crescendo", "diminuendo", "forte", "pianissimo"],
            answer: 0,
            explain: "Growing louder is a crescendo."
        },
        {
            id: "y7mu-mcq-446", topic: "dynamics-tempo",
            q: "A passage that becomes gradually softer is showing:",
            options: ["crescendo", "diminuendo", "forte", "pianissimo"],
            answer: 1,
            explain: "Growing softer is a diminuendo."
        },
        {
            id: "y7mu-mcq-447", topic: "dynamics-tempo",
            q: "A passage that becomes suddenly loud is showing:",
            options: ["crescendo", "diminuendo", "forte", "pianissimo"],
            answer: 2,
            explain: "Forte means loud."
        },
        {
            id: "y7mu-mcq-448", topic: "dynamics-tempo",
            q: "A passage that becomes very quiet throughout is showing:",
            options: ["crescendo", "diminuendo", "forte", "pianissimo"],
            answer: 3,
            explain: "Pianissimo means very soft."
        },
        {
            id: "y7mu-mcq-449", topic: "dynamics-tempo",
            q: "A section that gets faster is best described by:",
            options: ["rallentando", "accelerando", "Andante", "Presto"],
            answer: 1,
            explain: "Getting faster is accelerando."
        },
        {
            id: "y7mu-mcq-450", topic: "dynamics-tempo",
            q: "A section that gets slower is best described by:",
            options: ["rallentando", "accelerando", "Andante", "Presto"],
            answer: 0,
            explain: "Getting slower is rallentando."
        },
        {
            id: "y7mu-mcq-451", topic: "dynamics-tempo",
            q: "A section that stays at a walking pace is best described by:",
            options: ["rallentando", "accelerando", "Andante", "Presto"],
            answer: 2,
            explain: "Andante means at a walking pace."
        },
        {
            id: "y7mu-mcq-452", topic: "dynamics-tempo",
            q: "A section that finishes very quickly is best described by:",
            options: ["rallentando", "accelerando", "Andante", "Presto"],
            answer: 3,
            explain: "Presto means very fast."
        },
        {
            id: "y7mu-mcq-453", topic: "dynamics-tempo",
            q: "Which list orders dynamics from softest to loudest?",
            options: ["pp, p, mp, mf, f, ff", "ff, f, mf, mp, p, pp", "Largo, Adagio, Andante, Moderato, Allegro, Presto", "Presto, Allegro, Moderato, Andante, Adagio, Largo"],
            answer: 0,
            explain: "Dynamic markings move from soft to loud as pp, p, mp, mf, f, ff."
        },
        {
            id: "y7mu-mcq-454", topic: "dynamics-tempo",
            q: "Which list orders common tempo markings from slowest to fastest?",
            options: ["pp, p, mp, mf, f, ff", "ff, f, mf, mp, p, pp", "Largo, Adagio, Andante, Moderato, Allegro, Presto", "Presto, Allegro, Moderato, Andante, Adagio, Largo"],
            answer: 2,
            explain: "A common slow-to-fast order is Largo, Adagio, Andante, Moderato, Allegro, Presto."
        },
        {
            id: "y7mu-mcq-455", topic: "dynamics-tempo",
            q: "If the music begins softly and grows louder in a listening excerpt, the change in dynamics is called:",
            options: ["crescendo", "diminuendo", "accelerando", "binary form"],
            answer: 0,
            explain: "Growing louder is a crescendo."
        },
        {
            id: "y7mu-mcq-456", topic: "dynamics-tempo",
            q: "If the beat speeds up in a listening excerpt, the tempo change is called:",
            options: ["rallentando", "accelerando", "diminuendo", "legato"],
            answer: 1,
            explain: "Getting faster is accelerando."
        },
        {
            id: "y7mu-mcq-457", topic: "dynamics-tempo",
            q: "A section marked Andante in a listening excerpt should be performed:",
            options: ["very slowly", "at walking pace", "very loudly", "extremely fast"],
            answer: 1,
            explain: "Andante means at a walking pace."
        },
        {
            id: "y7mu-mcq-458", topic: "dynamics-tempo",
            q: "A section marked ff in a listening excerpt should sound:",
            options: ["very soft", "moderately soft", "very loud", "moderately fast"],
            answer: 2,
            explain: "ff means fortissimo, or very loud."
        },
        {
            id: "y7mu-mcq-459", topic: "dynamics-tempo",
            q: "If the music begins softly and grows louder during rehearsal, the change in dynamics is called:",
            options: ["crescendo", "diminuendo", "accelerando", "binary form"],
            answer: 0,
            explain: "Growing louder is a crescendo."
        },
        {
            id: "y7mu-mcq-460", topic: "dynamics-tempo",
            q: "If the beat speeds up during rehearsal, the tempo change is called:",
            options: ["rallentando", "accelerando", "diminuendo", "legato"],
            answer: 1,
            explain: "Getting faster is accelerando."
        },
        {
            id: "y7mu-mcq-461", topic: "dynamics-tempo",
            q: "A section marked Andante during rehearsal should be performed:",
            options: ["very slowly", "at walking pace", "very loudly", "extremely fast"],
            answer: 1,
            explain: "Andante means at a walking pace."
        },
        {
            id: "y7mu-mcq-462", topic: "dynamics-tempo",
            q: "A section marked ff during rehearsal should sound:",
            options: ["very soft", "moderately soft", "very loud", "moderately fast"],
            answer: 2,
            explain: "ff means fortissimo, or very loud."
        },
        {
            id: "y7mu-mcq-463", topic: "dynamics-tempo",
            q: "If the music begins softly and grows louder in a film score, the change in dynamics is called:",
            options: ["crescendo", "diminuendo", "accelerando", "binary form"],
            answer: 0,
            explain: "Growing louder is a crescendo."
        },
        {
            id: "y7mu-mcq-464", topic: "dynamics-tempo",
            q: "If the beat speeds up in a film score, the tempo change is called:",
            options: ["rallentando", "accelerando", "diminuendo", "legato"],
            answer: 1,
            explain: "Getting faster is accelerando."
        },
        {
            id: "y7mu-mcq-465", topic: "dynamics-tempo",
            q: "A section marked Andante in a film score should be performed:",
            options: ["very slowly", "at walking pace", "very loudly", "extremely fast"],
            answer: 1,
            explain: "Andante means at a walking pace."
        },
        {
            id: "y7mu-mcq-466", topic: "dynamics-tempo",
            q: "A section marked ff in a film score should sound:",
            options: ["very soft", "moderately soft", "very loud", "moderately fast"],
            answer: 2,
            explain: "ff means fortissimo, or very loud."
        },
        {
            id: "y7mu-mcq-467", topic: "dynamics-tempo",
            q: "If the music begins softly and grows louder in the chorus, the change in dynamics is called:",
            options: ["crescendo", "diminuendo", "accelerando", "binary form"],
            answer: 0,
            explain: "Growing louder is a crescendo."
        },
        {
            id: "y7mu-mcq-468", topic: "dynamics-tempo",
            q: "If the beat speeds up in the chorus, the tempo change is called:",
            options: ["rallentando", "accelerando", "diminuendo", "legato"],
            answer: 1,
            explain: "Getting faster is accelerando."
        },
        {
            id: "y7mu-mcq-469", topic: "dynamics-tempo",
            q: "A section marked Andante in the chorus should be performed:",
            options: ["very slowly", "at walking pace", "very loudly", "extremely fast"],
            answer: 1,
            explain: "Andante means at a walking pace."
        },
        {
            id: "y7mu-mcq-470", topic: "dynamics-tempo",
            q: "A section marked ff in the chorus should sound:",
            options: ["very soft", "moderately soft", "very loud", "moderately fast"],
            answer: 2,
            explain: "ff means fortissimo, or very loud."
        },
        {
            id: "y7mu-mcq-471", topic: "dynamics-tempo",
            q: "If the music begins softly and grows louder near the ending, the change in dynamics is called:",
            options: ["crescendo", "diminuendo", "accelerando", "binary form"],
            answer: 0,
            explain: "Growing louder is a crescendo."
        },
        {
            id: "y7mu-mcq-472", topic: "dynamics-tempo",
            q: "If the beat speeds up near the ending, the tempo change is called:",
            options: ["rallentando", "accelerando", "diminuendo", "legato"],
            answer: 1,
            explain: "Getting faster is accelerando."
        },
        {
            id: "y7mu-mcq-473", topic: "dynamics-tempo",
            q: "A section marked Andante near the ending should be performed:",
            options: ["very slowly", "at walking pace", "very loudly", "extremely fast"],
            answer: 1,
            explain: "Andante means at a walking pace."
        },
        {
            id: "y7mu-mcq-474", topic: "dynamics-tempo",
            q: "A section marked ff near the ending should sound:",
            options: ["very soft", "moderately soft", "very loud", "moderately fast"],
            answer: 2,
            explain: "ff means fortissimo, or very loud."
        },
        {
            id: "y7mu-mcq-475", topic: "dynamics-tempo",
            q: "If the music begins softly and grows louder in the opening phrase, the change in dynamics is called:",
            options: ["crescendo", "diminuendo", "accelerando", "binary form"],
            answer: 0,
            explain: "Growing louder is a crescendo."
        },
        {
            id: "y7mu-mcq-476", topic: "dynamics-tempo",
            q: "If the beat speeds up in the opening phrase, the tempo change is called:",
            options: ["rallentando", "accelerando", "diminuendo", "legato"],
            answer: 1,
            explain: "Getting faster is accelerando."
        },
        {
            id: "y7mu-mcq-477", topic: "dynamics-tempo",
            q: "A section marked Andante in the opening phrase should be performed:",
            options: ["very slowly", "at walking pace", "very loudly", "extremely fast"],
            answer: 1,
            explain: "Andante means at a walking pace."
        },
        {
            id: "y7mu-mcq-478", topic: "dynamics-tempo",
            q: "A section marked ff in the opening phrase should sound:",
            options: ["very soft", "moderately soft", "very loud", "moderately fast"],
            answer: 2,
            explain: "ff means fortissimo, or very loud."
        },
        {
            id: "y7mu-mcq-479", topic: "dynamics-tempo",
            q: "If the music begins softly and grows louder in a class performance, the change in dynamics is called:",
            options: ["crescendo", "diminuendo", "accelerando", "binary form"],
            answer: 0,
            explain: "Growing louder is a crescendo."
        },
        {
            id: "y7mu-mcq-480", topic: "dynamics-tempo",
            q: "If the beat speeds up in a class performance, the tempo change is called:",
            options: ["rallentando", "accelerando", "diminuendo", "legato"],
            answer: 1,
            explain: "Getting faster is accelerando."
        },
        {
            id: "y7mu-mcq-481", topic: "dynamics-tempo",
            q: "A section marked Andante in a class performance should be performed:",
            options: ["very slowly", "at walking pace", "very loudly", "extremely fast"],
            answer: 1,
            explain: "Andante means at a walking pace."
        },
        {
            id: "y7mu-mcq-482", topic: "dynamics-tempo",
            q: "A section marked ff in a class performance should sound:",
            options: ["very soft", "moderately soft", "very loud", "moderately fast"],
            answer: 2,
            explain: "ff means fortissimo, or very loud."
        },
        {
            id: "y7mu-mcq-483", topic: "dynamics-tempo",
            q: "In example 51, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-484", topic: "dynamics-tempo",
            q: "In example 52, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-485", topic: "dynamics-tempo",
            q: "In example 53, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-486", topic: "dynamics-tempo",
            q: "In example 54, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-487", topic: "dynamics-tempo",
            q: "In example 55, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-488", topic: "dynamics-tempo",
            q: "In example 56, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-489", topic: "dynamics-tempo",
            q: "In example 57, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-490", topic: "dynamics-tempo",
            q: "In example 58, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-491", topic: "dynamics-tempo",
            q: "In example 59, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-492", topic: "dynamics-tempo",
            q: "In example 60, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-493", topic: "dynamics-tempo",
            q: "In example 61, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-494", topic: "dynamics-tempo",
            q: "In example 62, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-495", topic: "dynamics-tempo",
            q: "In example 63, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-496", topic: "dynamics-tempo",
            q: "In example 64, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-497", topic: "dynamics-tempo",
            q: "In example 65, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-498", topic: "dynamics-tempo",
            q: "In example 66, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-499", topic: "dynamics-tempo",
            q: "In example 67, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-500", topic: "dynamics-tempo",
            q: "In example 68, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-501", topic: "dynamics-tempo",
            q: "In example 69, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-502", topic: "dynamics-tempo",
            q: "In example 70, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-503", topic: "dynamics-tempo",
            q: "In example 71, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-504", topic: "dynamics-tempo",
            q: "In example 72, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-505", topic: "dynamics-tempo",
            q: "In example 73, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-506", topic: "dynamics-tempo",
            q: "In example 74, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-507", topic: "dynamics-tempo",
            q: "In example 75, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-508", topic: "dynamics-tempo",
            q: "In example 76, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-509", topic: "dynamics-tempo",
            q: "In example 77, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-510", topic: "dynamics-tempo",
            q: "In example 78, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-511", topic: "dynamics-tempo",
            q: "In example 79, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-512", topic: "dynamics-tempo",
            q: "In example 80, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-513", topic: "dynamics-tempo",
            q: "In example 81, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-514", topic: "dynamics-tempo",
            q: "In example 82, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-515", topic: "dynamics-tempo",
            q: "In example 83, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-516", topic: "dynamics-tempo",
            q: "In example 84, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-517", topic: "dynamics-tempo",
            q: "In example 85, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-518", topic: "dynamics-tempo",
            q: "In example 86, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-519", topic: "dynamics-tempo",
            q: "In example 87, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-520", topic: "dynamics-tempo",
            q: "In example 88, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-521", topic: "dynamics-tempo",
            q: "In example 89, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-522", topic: "dynamics-tempo",
            q: "In example 90, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-523", topic: "dynamics-tempo",
            q: "In example 91, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-524", topic: "dynamics-tempo",
            q: "In example 92, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-525", topic: "dynamics-tempo",
            q: "In example 93, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-526", topic: "dynamics-tempo",
            q: "In example 94, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-527", topic: "dynamics-tempo",
            q: "In example 95, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-528", topic: "dynamics-tempo",
            q: "In example 96, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-529", topic: "dynamics-tempo",
            q: "In example 97, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-530", topic: "dynamics-tempo",
            q: "In example 98, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-531", topic: "dynamics-tempo",
            q: "In example 99, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-532", topic: "dynamics-tempo",
            q: "In example 100, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-533", topic: "dynamics-tempo",
            q: "In example 101, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-534", topic: "dynamics-tempo",
            q: "In example 102, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-535", topic: "dynamics-tempo",
            q: "In example 103, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-536", topic: "dynamics-tempo",
            q: "In example 104, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-537", topic: "dynamics-tempo",
            q: "In example 105, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-538", topic: "dynamics-tempo",
            q: "In example 106, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-539", topic: "dynamics-tempo",
            q: "In example 107, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-540", topic: "dynamics-tempo",
            q: "In example 108, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-541", topic: "dynamics-tempo",
            q: "In example 109, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-542", topic: "dynamics-tempo",
            q: "In example 110, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-543", topic: "dynamics-tempo",
            q: "In example 111, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-544", topic: "dynamics-tempo",
            q: "In example 112, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-545", topic: "dynamics-tempo",
            q: "In example 113, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-546", topic: "dynamics-tempo",
            q: "In example 114, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-547", topic: "dynamics-tempo",
            q: "In example 115, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-548", topic: "dynamics-tempo",
            q: "In example 116, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-549", topic: "dynamics-tempo",
            q: "In example 117, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-550", topic: "dynamics-tempo",
            q: "In example 118, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        },
        {
            id: "y7mu-mcq-551", topic: "dynamics-tempo",
            q: "In example 119, the music moves from mp to ff. Which element is changing most clearly?",
            options: ["dynamics", "form", "pitch contour", "time signature"],
            answer: 0,
            explain: "Moving from mp to ff changes the dynamics from moderately soft to very loud."
        }
    ],

    short: [
        {
            id: "y7mu-sa-1", topic: "pitch-scales", marks: 4,
            q: "Define melodic contour and describe what an ascending contour sounds like.",
            sample: "Melodic contour is the shape of a melody as it moves through pitches. An ascending contour sounds like the melody is moving upward from lower notes to higher notes.",
            marks: 4
        },
        {
            id: "y7mu-sa-2", topic: "pitch-scales", marks: 5,
            q: "State the formula for a major scale and explain the difference between a tone and a semitone.",
            sample: "The major scale formula is tone, tone, semitone, tone, tone, tone, semitone. A semitone is the smallest step in the standard Western scale system. A tone is made up of two semitones.",
            marks: 5
        },
        {
            id: "y7mu-sa-3", topic: "pitch-scales", marks: 4,
            q: "A melody moves up, up, down, then stays on the same note. Describe its contour.",
            sample: "The contour begins by ascending, then descends, then becomes static or repeated on the same pitch.",
            marks: 4
        },
        {
            id: "y7mu-sa-13", topic: "pitch-scales", marks: 4,
            q: "Define ascending contour in a Year 7 listening answer.",
            sample: "Ascending contour means the melody moves from lower notes to higher notes. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 4
        },
        {
            id: "y7mu-sa-14", topic: "pitch-scales", marks: 5,
            q: "Explain ascending contour in a Year 7 listening answer.",
            sample: "Ascending contour means the melody moves from lower notes to higher notes. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 5
        },
        {
            id: "y7mu-sa-15", topic: "pitch-scales", marks: 4,
            q: "Describe ascending contour in a Year 7 listening answer.",
            sample: "Ascending contour means the melody moves from lower notes to higher notes. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 4
        },
        {
            id: "y7mu-sa-16", topic: "pitch-scales", marks: 5,
            q: "State what is meant by ascending contour in a Year 7 listening answer.",
            sample: "Ascending contour means the melody moves from lower notes to higher notes. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 5
        },
        {
            id: "y7mu-sa-17", topic: "pitch-scales", marks: 4,
            q: "Define descending contour in a Year 7 listening answer.",
            sample: "Descending contour means the melody moves from higher notes to lower notes. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 4
        },
        {
            id: "y7mu-sa-18", topic: "pitch-scales", marks: 5,
            q: "Explain descending contour in a Year 7 listening answer.",
            sample: "Descending contour means the melody moves from higher notes to lower notes. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 5
        },
        {
            id: "y7mu-sa-19", topic: "pitch-scales", marks: 4,
            q: "Describe descending contour in a Year 7 listening answer.",
            sample: "Descending contour means the melody moves from higher notes to lower notes. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 4
        },
        {
            id: "y7mu-sa-20", topic: "pitch-scales", marks: 5,
            q: "State what is meant by descending contour in a Year 7 listening answer.",
            sample: "Descending contour means the melody moves from higher notes to lower notes. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 5
        },
        {
            id: "y7mu-sa-21", topic: "pitch-scales", marks: 4,
            q: "Define static contour in a Year 7 listening answer.",
            sample: "Static contour means the melody stays mainly on the same pitch. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 4
        },
        {
            id: "y7mu-sa-22", topic: "pitch-scales", marks: 5,
            q: "Explain static contour in a Year 7 listening answer.",
            sample: "Static contour means the melody stays mainly on the same pitch. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 5
        },
        {
            id: "y7mu-sa-23", topic: "pitch-scales", marks: 4,
            q: "Describe static contour in a Year 7 listening answer.",
            sample: "Static contour means the melody stays mainly on the same pitch. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 4
        },
        {
            id: "y7mu-sa-24", topic: "pitch-scales", marks: 5,
            q: "State what is meant by static contour in a Year 7 listening answer.",
            sample: "Static contour means the melody stays mainly on the same pitch. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 5
        },
        {
            id: "y7mu-sa-25", topic: "pitch-scales", marks: 4,
            q: "Define wave-like contour in a Year 7 listening answer.",
            sample: "Wave-like contour means the melody changes direction as it rises and falls. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 4
        },
        {
            id: "y7mu-sa-26", topic: "pitch-scales", marks: 5,
            q: "Explain wave-like contour in a Year 7 listening answer.",
            sample: "Wave-like contour means the melody changes direction as it rises and falls. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 5
        },
        {
            id: "y7mu-sa-27", topic: "pitch-scales", marks: 4,
            q: "Describe wave-like contour in a Year 7 listening answer.",
            sample: "Wave-like contour means the melody changes direction as it rises and falls. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 4
        },
        {
            id: "y7mu-sa-28", topic: "pitch-scales", marks: 5,
            q: "State what is meant by wave-like contour in a Year 7 listening answer.",
            sample: "Wave-like contour means the melody changes direction as it rises and falls. A strong answer would use that term to describe how the melody travels through pitches.",
            marks: 5
        },
        {
            id: "y7mu-sa-29", topic: "pitch-scales", marks: 4,
            q: "Write the major scale formula using tones and semitones.",
            sample: "The major scale formula is tone, tone, semitone, tone, tone, tone, semitone. Knowing this pattern helps a student check that each step in the scale is correct.",
            marks: 4
        },
        {
            id: "y7mu-sa-30", topic: "pitch-scales", marks: 5,
            q: "State the major scale pattern and explain why it matters when building scales.",
            sample: "The major scale formula is tone, tone, semitone, tone, tone, tone, semitone. Knowing this pattern helps a student check that each step in the scale is correct.",
            marks: 5
        },
        {
            id: "y7mu-sa-31", topic: "pitch-scales", marks: 4,
            q: "Explain how the major scale formula helps a student write a correct scale.",
            sample: "The major scale formula is tone, tone, semitone, tone, tone, tone, semitone. Knowing this pattern helps a student check that each step in the scale is correct.",
            marks: 4
        },
        {
            id: "y7mu-sa-32", topic: "pitch-scales", marks: 5,
            q: "Describe the order of tones and semitones in a major scale.",
            sample: "The major scale formula is tone, tone, semitone, tone, tone, tone, semitone. Knowing this pattern helps a student check that each step in the scale is correct.",
            marks: 5
        },
        {
            id: "y7mu-sa-33", topic: "pitch-scales", marks: 5,
            q: "How many semitones are in 1 tone? Explain your answer.",
            sample: "1 tone equal 2 semitones because one tone is made up of two semitones.",
            marks: 5
        },
        {
            id: "y7mu-sa-34", topic: "pitch-scales", marks: 4,
            q: "How many semitones are in 2 tones? Explain your answer.",
            sample: "2 tones equal 4 semitones because one tone is made up of two semitones.",
            marks: 4
        },
        {
            id: "y7mu-sa-35", topic: "pitch-scales", marks: 5,
            q: "How many semitones are in 3 tones? Explain your answer.",
            sample: "3 tones equal 6 semitones because one tone is made up of two semitones.",
            marks: 5
        },
        {
            id: "y7mu-sa-36", topic: "pitch-scales", marks: 4,
            q: "How many semitones are in 4 tones? Explain your answer.",
            sample: "4 tones equal 8 semitones because one tone is made up of two semitones.",
            marks: 4
        },
        {
            id: "y7mu-sa-37", topic: "pitch-scales", marks: 5,
            q: "How many semitones are in 5 tones? Explain your answer.",
            sample: "5 tones equal 10 semitones because one tone is made up of two semitones.",
            marks: 5
        },
        {
            id: "y7mu-sa-38", topic: "pitch-scales", marks: 4,
            q: "How many semitones are in 6 tones? Explain your answer.",
            sample: "6 tones equal 12 semitones because one tone is made up of two semitones.",
            marks: 4
        },
        {
            id: "y7mu-sa-39", topic: "pitch-scales", marks: 5,
            q: "How many semitones are in 7 tones? Explain your answer.",
            sample: "7 tones equal 14 semitones because one tone is made up of two semitones.",
            marks: 5
        },
        {
            id: "y7mu-sa-40", topic: "pitch-scales", marks: 4,
            q: "How many semitones are in 8 tones? Explain your answer.",
            sample: "8 tones equal 16 semitones because one tone is made up of two semitones.",
            marks: 4
        },
        {
            id: "y7mu-sa-41", topic: "pitch-scales", marks: 4,
            q: "A melody rises for two bars, falls for one bar, then repeats its last note. Describe its contour.",
            sample: "A strong response should describe whether the melody ascends, descends, stays static or changes direction. The answer should refer directly to what is heard in the shape of the melody.",
            marks: 4
        },
        {
            id: "y7mu-sa-42", topic: "pitch-scales", marks: 5,
            q: "A tune starts low, climbs steadily, then drops suddenly at the end. Describe its contour.",
            sample: "A strong response should describe whether the melody ascends, descends, stays static or changes direction. The answer should refer directly to what is heard in the shape of the melody.",
            marks: 5
        },
        {
            id: "y7mu-sa-43", topic: "pitch-scales", marks: 4,
            q: "A vocal line stays on one note before jumping higher in the chorus. Describe the contour change.",
            sample: "A strong response should describe whether the melody ascends, descends, stays static or changes direction. The answer should refer directly to what is heard in the shape of the melody.",
            marks: 4
        },
        {
            id: "y7mu-sa-44", topic: "pitch-scales", marks: 5,
            q: "A recorder phrase goes up, down and up again. What contour words could describe it?",
            sample: "A strong response should describe whether the melody ascends, descends, stays static or changes direction. The answer should refer directly to what is heard in the shape of the melody.",
            marks: 5
        },
        {
            id: "y7mu-sa-45", topic: "pitch-scales", marks: 5,
            q: "Describe how pitch can be heard in a listening excerpt. Refer to example 33.",
            sample: "Pitch is heard as how high or low sounds are, and students can describe it through contour and scale movement.",
            marks: 5
        },
        {
            id: "y7mu-sa-46", topic: "pitch-scales", marks: 4,
            q: "State one way a contour can help describe a melody. Refer to example 34.",
            sample: "Contour helps a student explain whether a melody rises, falls, stays level or changes direction.",
            marks: 4
        },
        {
            id: "y7mu-sa-47", topic: "pitch-scales", marks: 5,
            q: "Explain why semitones are important in a major scale. Refer to example 35.",
            sample: "Semitones create the correct spacing in a major scale, especially between the 3rd and 4th notes and the 7th and 8th notes.",
            marks: 5
        },
        {
            id: "y7mu-sa-48", topic: "pitch-scales", marks: 4,
            q: "Explain the difference between a tone and a semitone. Refer to example 36.",
            sample: "A tone is two semitones, while a semitone is the smallest standard step in Western music.",
            marks: 4
        },
        {
            id: "y7mu-sa-49", topic: "pitch-scales", marks: 5,
            q: "Describe how pitch can be heard in a listening excerpt. Refer to example 37.",
            sample: "Pitch is heard as how high or low sounds are, and students can describe it through contour and scale movement.",
            marks: 5
        },
        {
            id: "y7mu-sa-50", topic: "pitch-scales", marks: 4,
            q: "State one way a contour can help describe a melody. Refer to example 38.",
            sample: "Contour helps a student explain whether a melody rises, falls, stays level or changes direction.",
            marks: 4
        },
        {
            id: "y7mu-sa-51", topic: "pitch-scales", marks: 5,
            q: "Explain why semitones are important in a major scale. Refer to example 39.",
            sample: "Semitones create the correct spacing in a major scale, especially between the 3rd and 4th notes and the 7th and 8th notes.",
            marks: 5
        },
        {
            id: "y7mu-sa-52", topic: "pitch-scales", marks: 4,
            q: "Explain the difference between a tone and a semitone. Refer to example 40.",
            sample: "A tone is two semitones, while a semitone is the smallest standard step in Western music.",
            marks: 4
        },
        {
            id: "y7mu-sa-53", topic: "pitch-scales", marks: 5,
            q: "Describe how pitch can be heard in a listening excerpt. Refer to example 41.",
            sample: "Pitch is heard as how high or low sounds are, and students can describe it through contour and scale movement.",
            marks: 5
        },
        {
            id: "y7mu-sa-54", topic: "pitch-scales", marks: 4,
            q: "State one way a contour can help describe a melody. Refer to example 42.",
            sample: "Contour helps a student explain whether a melody rises, falls, stays level or changes direction.",
            marks: 4
        },
        {
            id: "y7mu-sa-55", topic: "pitch-scales", marks: 5,
            q: "Explain why semitones are important in a major scale. Refer to example 43.",
            sample: "Semitones create the correct spacing in a major scale, especially between the 3rd and 4th notes and the 7th and 8th notes.",
            marks: 5
        },
        {
            id: "y7mu-sa-56", topic: "pitch-scales", marks: 4,
            q: "Explain the difference between a tone and a semitone. Refer to example 44.",
            sample: "A tone is two semitones, while a semitone is the smallest standard step in Western music.",
            marks: 4
        },
        {
            id: "y7mu-sa-57", topic: "pitch-scales", marks: 5,
            q: "Describe how pitch can be heard in a listening excerpt. Refer to example 45.",
            sample: "Pitch is heard as how high or low sounds are, and students can describe it through contour and scale movement.",
            marks: 5
        },
        {
            id: "y7mu-sa-58", topic: "pitch-scales", marks: 4,
            q: "State one way a contour can help describe a melody. Refer to example 46.",
            sample: "Contour helps a student explain whether a melody rises, falls, stays level or changes direction.",
            marks: 4
        },
        {
            id: "y7mu-sa-59", topic: "pitch-scales", marks: 5,
            q: "Explain why semitones are important in a major scale. Refer to example 47.",
            sample: "Semitones create the correct spacing in a major scale, especially between the 3rd and 4th notes and the 7th and 8th notes.",
            marks: 5
        },

        {
            id: "y7mu-sa-4", topic: "duration-rhythm", marks: 4,
            q: "Explain what a time signature tells a performer. Use 2/4 as your example.",
            sample: "A time signature tells the performer how many beats are in each bar and what note value receives one beat. In 2/4 time there are two crotchet beats in each bar.",
            marks: 4
        },
        {
            id: "y7mu-sa-5", topic: "duration-rhythm", marks: 5,
            q: "Compare 2/4, 3/4 and 4/4 time signatures.",
            sample: "2/4 has two crotchet beats per bar, giving a strong duple feel. 3/4 has three crotchet beats per bar, often creating a waltz-like triple feel. 4/4 has four crotchet beats per bar and is one of the most common time signatures in popular music.",
            marks: 5
        },
        {
            id: "y7mu-sa-6", topic: "duration-rhythm", marks: 4,
            q: "Describe what you are listening for when asked to aurally identify a rhythmic pattern.",
            sample: "You listen for the pulse, the grouping of beats, the pattern of long and short sounds, rests and any repeated rhythmic ideas. You are focusing on duration rather than pitch.",
            marks: 4
        },
        {
            id: "y7mu-sa-60", topic: "duration-rhythm", marks: 4,
            q: "Explain what a time signature tells a performer.",
            sample: "A time signature shows how many beats are in each bar and which note value receives one beat.",
            marks: 4
        },
        {
            id: "y7mu-sa-61", topic: "duration-rhythm", marks: 5,
            q: "Define rhythm in music.",
            sample: "Rhythm is the pattern of long and short sounds and silences organised around a steady pulse.",
            marks: 5
        },
        {
            id: "y7mu-sa-62", topic: "duration-rhythm", marks: 4,
            q: "Define pulse in music.",
            sample: "Pulse is the steady beat that listeners can tap or clap along with.",
            marks: 4
        },
        {
            id: "y7mu-sa-63", topic: "duration-rhythm", marks: 5,
            q: "Explain what a rest does in notation.",
            sample: "A rest tells the performer to stay silent for a set amount of time.",
            marks: 5
        },
        {
            id: "y7mu-sa-64", topic: "duration-rhythm", marks: 4,
            q: "Describe the feel of 2/4 time.",
            sample: "2/4 has 2 crotchet beats in each bar. It gives the music a duple feel that a listener can count.",
            marks: 4
        },
        {
            id: "y7mu-sa-65", topic: "duration-rhythm", marks: 5,
            q: "Explain how a listener could recognise 2/4 by ear.",
            sample: "A listener can clap the pulse and count groups of 2. Hearing the beats fall into repeated groups of 2 suggests 2/4 time.",
            marks: 5
        },
        {
            id: "y7mu-sa-66", topic: "duration-rhythm", marks: 5,
            q: "Describe the feel of 3/4 time.",
            sample: "3/4 has 3 crotchet beats in each bar. It gives the music a triple feel that a listener can count.",
            marks: 5
        },
        {
            id: "y7mu-sa-67", topic: "duration-rhythm", marks: 4,
            q: "Explain how a listener could recognise 3/4 by ear.",
            sample: "A listener can clap the pulse and count groups of 3. Hearing the beats fall into repeated groups of 3 suggests 3/4 time.",
            marks: 4
        },
        {
            id: "y7mu-sa-68", topic: "duration-rhythm", marks: 4,
            q: "Describe the feel of 4/4 time.",
            sample: "4/4 has 4 crotchet beats in each bar. It gives the music a quadruple feel that a listener can count.",
            marks: 4
        },
        {
            id: "y7mu-sa-69", topic: "duration-rhythm", marks: 5,
            q: "Explain how a listener could recognise 4/4 by ear.",
            sample: "A listener can clap the pulse and count groups of 4. Hearing the beats fall into repeated groups of 4 suggests 4/4 time.",
            marks: 5
        },
        {
            id: "y7mu-sa-70", topic: "duration-rhythm", marks: 5,
            q: "Compare 2/4 and 3/4 time signatures.",
            sample: "2/4 has two crotchet beats per bar and a strong duple feel, while 3/4 has three crotchet beats per bar and a triple feel.",
            marks: 5
        },
        {
            id: "y7mu-sa-71", topic: "duration-rhythm", marks: 4,
            q: "Compare 3/4 and 4/4 time signatures.",
            sample: "3/4 groups the beat in threes, while 4/4 groups the beat in fours. That changes the rhythmic feel of the music.",
            marks: 4
        },
        {
            id: "y7mu-sa-72", topic: "duration-rhythm", marks: 5,
            q: "Compare pulse and rhythm.",
            sample: "Pulse is the steady beat, while rhythm is the pattern of long and short sounds performed over that beat.",
            marks: 5
        },
        {
            id: "y7mu-sa-73", topic: "duration-rhythm", marks: 4,
            q: "Explain why bar lines help performers read rhythm.",
            sample: "Bar lines divide the music into equal groups of beats, helping performers count the rhythm accurately.",
            marks: 4
        },
        {
            id: "y7mu-sa-74", topic: "duration-rhythm", marks: 5,
            q: "Example 15: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-75", topic: "duration-rhythm", marks: 4,
            q: "Example 16: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-76", topic: "duration-rhythm", marks: 5,
            q: "Example 17: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-77", topic: "duration-rhythm", marks: 4,
            q: "Example 18: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-78", topic: "duration-rhythm", marks: 5,
            q: "Example 19: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-79", topic: "duration-rhythm", marks: 4,
            q: "Example 20: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-80", topic: "duration-rhythm", marks: 5,
            q: "Example 21: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-81", topic: "duration-rhythm", marks: 4,
            q: "Example 22: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-82", topic: "duration-rhythm", marks: 5,
            q: "Example 23: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-83", topic: "duration-rhythm", marks: 4,
            q: "Example 24: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-84", topic: "duration-rhythm", marks: 5,
            q: "Example 25: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-85", topic: "duration-rhythm", marks: 4,
            q: "Example 26: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-86", topic: "duration-rhythm", marks: 5,
            q: "Example 27: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-87", topic: "duration-rhythm", marks: 4,
            q: "Example 28: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-88", topic: "duration-rhythm", marks: 5,
            q: "Example 29: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-89", topic: "duration-rhythm", marks: 4,
            q: "Example 30: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-90", topic: "duration-rhythm", marks: 5,
            q: "Example 31: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-91", topic: "duration-rhythm", marks: 4,
            q: "Example 32: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-92", topic: "duration-rhythm", marks: 5,
            q: "Example 33: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-93", topic: "duration-rhythm", marks: 4,
            q: "Example 34: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-94", topic: "duration-rhythm", marks: 5,
            q: "Example 35: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-95", topic: "duration-rhythm", marks: 4,
            q: "Example 36: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-96", topic: "duration-rhythm", marks: 5,
            q: "Example 37: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-97", topic: "duration-rhythm", marks: 4,
            q: "Example 38: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-98", topic: "duration-rhythm", marks: 5,
            q: "Example 39: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-99", topic: "duration-rhythm", marks: 4,
            q: "Example 40: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-100", topic: "duration-rhythm", marks: 5,
            q: "Example 41: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-101", topic: "duration-rhythm", marks: 4,
            q: "Example 42: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-102", topic: "duration-rhythm", marks: 5,
            q: "Example 43: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-103", topic: "duration-rhythm", marks: 4,
            q: "Example 44: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-104", topic: "duration-rhythm", marks: 5,
            q: "Example 45: explain how a performer would count 2/4 time.",
            sample: "In 2/4 time, the performer counts 2 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },
        {
            id: "y7mu-sa-105", topic: "duration-rhythm", marks: 4,
            q: "Example 46: explain how a performer would count 3/4 time.",
            sample: "In 3/4 time, the performer counts 3 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 4
        },
        {
            id: "y7mu-sa-106", topic: "duration-rhythm", marks: 5,
            q: "Example 47: explain how a performer would count 4/4 time.",
            sample: "In 4/4 time, the performer counts 4 steady crotchet beats in each bar before starting the next bar. This helps keep the rhythm accurate.",
            marks: 5
        },

        {
            id: "y7mu-sa-7", topic: "structure-form", marks: 4,
            q: "Define binary form and ternary form.",
            sample: "Binary form has two sections and is shown as AB. Ternary form has three sections with the first section returning at the end and is shown as ABA.",
            marks: 4
        },
        {
            id: "y7mu-sa-8", topic: "structure-form", marks: 5,
            q: "Explain how verse/chorus form differs from ternary form.",
            sample: "Verse/chorus form usually alternates between verses and a repeated chorus, often in patterns such as verse-chorus-verse-chorus. Ternary form is a simpler ABA structure where the first section returns after a contrasting middle section.",
            marks: 5
        },
        {
            id: "y7mu-sa-9", topic: "structure-form", marks: 4,
            q: "Why is recognising structure important in a listening exam?",
            sample: "Recognising structure helps you describe how the music is organised and explain when sections repeat or contrast. This gives evidence-based musical observations instead of vague comments.",
            marks: 4
        },
        {
            id: "y7mu-sa-107", topic: "structure-form", marks: 4,
            q: "Define binary form.",
            sample: "Binary form has two sections and is written as AB.",
            marks: 4
        },
        {
            id: "y7mu-sa-108", topic: "structure-form", marks: 5,
            q: "Define ternary form.",
            sample: "Ternary form has three sections with the first section returning at the end, so it is written as ABA.",
            marks: 5
        },
        {
            id: "y7mu-sa-109", topic: "structure-form", marks: 4,
            q: "Define verse/chorus form.",
            sample: "Verse/chorus form alternates changing verses with a repeated chorus.",
            marks: 4
        },
        {
            id: "y7mu-sa-110", topic: "structure-form", marks: 5,
            q: "Explain why repeated sections matter in form.",
            sample: "Repeated sections help listeners recognise patterns and hear how the music is organised.",
            marks: 5
        },
        {
            id: "y7mu-sa-111", topic: "structure-form", marks: 5,
            q: "Explain how binary form differs from ternary form.",
            sample: "Binary form is AB with two sections only, while ternary form is ABA because the first section returns after the contrasting middle section.",
            marks: 5
        },
        {
            id: "y7mu-sa-112", topic: "structure-form", marks: 4,
            q: "Explain how ternary form differs from verse/chorus form.",
            sample: "Ternary form is a simple ABA pattern, while verse/chorus form repeats a chorus between changing verses.",
            marks: 4
        },
        {
            id: "y7mu-sa-113", topic: "structure-form", marks: 5,
            q: "Describe how a listener could recognise a repeated chorus.",
            sample: "A listener recognises a chorus because the same words and musical material return each time it appears.",
            marks: 5
        },
        {
            id: "y7mu-sa-114", topic: "structure-form", marks: 4,
            q: "Explain why contrast is important in musical form.",
            sample: "Contrast helps sections sound different so a listener can hear where one section ends and another begins.",
            marks: 4
        },
        {
            id: "y7mu-sa-115", topic: "structure-form", marks: 5,
            q: "Example 9: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 5
        },
        {
            id: "y7mu-sa-116", topic: "structure-form", marks: 4,
            q: "Example 10: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 4
        },
        {
            id: "y7mu-sa-117", topic: "structure-form", marks: 5,
            q: "Example 11: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 5
        },
        {
            id: "y7mu-sa-118", topic: "structure-form", marks: 4,
            q: "Example 12: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 4
        },
        {
            id: "y7mu-sa-119", topic: "structure-form", marks: 5,
            q: "Example 13: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 5
        },
        {
            id: "y7mu-sa-120", topic: "structure-form", marks: 4,
            q: "Example 14: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 4
        },
        {
            id: "y7mu-sa-121", topic: "structure-form", marks: 5,
            q: "Example 15: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 5
        },
        {
            id: "y7mu-sa-122", topic: "structure-form", marks: 4,
            q: "Example 16: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 4
        },
        {
            id: "y7mu-sa-123", topic: "structure-form", marks: 5,
            q: "Example 17: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 5
        },
        {
            id: "y7mu-sa-124", topic: "structure-form", marks: 4,
            q: "Example 18: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 4
        },
        {
            id: "y7mu-sa-125", topic: "structure-form", marks: 5,
            q: "Example 19: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 5
        },
        {
            id: "y7mu-sa-126", topic: "structure-form", marks: 4,
            q: "Example 20: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 4
        },
        {
            id: "y7mu-sa-127", topic: "structure-form", marks: 5,
            q: "Example 21: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 5
        },
        {
            id: "y7mu-sa-128", topic: "structure-form", marks: 4,
            q: "Example 22: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 4
        },
        {
            id: "y7mu-sa-129", topic: "structure-form", marks: 5,
            q: "Example 23: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 5
        },
        {
            id: "y7mu-sa-130", topic: "structure-form", marks: 4,
            q: "Example 24: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 4
        },
        {
            id: "y7mu-sa-131", topic: "structure-form", marks: 5,
            q: "Example 25: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 5
        },
        {
            id: "y7mu-sa-132", topic: "structure-form", marks: 4,
            q: "Example 26: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 4
        },
        {
            id: "y7mu-sa-133", topic: "structure-form", marks: 5,
            q: "Example 27: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 5
        },
        {
            id: "y7mu-sa-134", topic: "structure-form", marks: 4,
            q: "Example 28: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 4
        },
        {
            id: "y7mu-sa-135", topic: "structure-form", marks: 5,
            q: "Example 29: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 5
        },
        {
            id: "y7mu-sa-136", topic: "structure-form", marks: 4,
            q: "Example 30: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 4
        },
        {
            id: "y7mu-sa-137", topic: "structure-form", marks: 5,
            q: "Example 31: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 5
        },
        {
            id: "y7mu-sa-138", topic: "structure-form", marks: 4,
            q: "Example 32: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 4
        },
        {
            id: "y7mu-sa-139", topic: "structure-form", marks: 5,
            q: "Example 33: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 5
        },
        {
            id: "y7mu-sa-140", topic: "structure-form", marks: 4,
            q: "Example 34: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 4
        },
        {
            id: "y7mu-sa-141", topic: "structure-form", marks: 5,
            q: "Example 35: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 5
        },
        {
            id: "y7mu-sa-142", topic: "structure-form", marks: 4,
            q: "Example 36: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 4
        },
        {
            id: "y7mu-sa-143", topic: "structure-form", marks: 5,
            q: "Example 37: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 5
        },
        {
            id: "y7mu-sa-144", topic: "structure-form", marks: 4,
            q: "Example 38: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 4
        },
        {
            id: "y7mu-sa-145", topic: "structure-form", marks: 5,
            q: "Example 39: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 5
        },
        {
            id: "y7mu-sa-146", topic: "structure-form", marks: 4,
            q: "Example 40: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 4
        },
        {
            id: "y7mu-sa-147", topic: "structure-form", marks: 5,
            q: "Example 41: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 5
        },
        {
            id: "y7mu-sa-148", topic: "structure-form", marks: 4,
            q: "Example 42: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 4
        },
        {
            id: "y7mu-sa-149", topic: "structure-form", marks: 5,
            q: "Example 43: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 5
        },
        {
            id: "y7mu-sa-150", topic: "structure-form", marks: 4,
            q: "Example 44: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 4
        },
        {
            id: "y7mu-sa-151", topic: "structure-form", marks: 5,
            q: "Example 45: explain what the pattern AB tells you about the form.",
            sample: "AB suggests binary form because there are two different sections with no return to the first.",
            marks: 5
        },
        {
            id: "y7mu-sa-152", topic: "structure-form", marks: 4,
            q: "Example 46: explain what the pattern ABA tells you about the form.",
            sample: "ABA suggests ternary form because the opening section returns after contrast.",
            marks: 4
        },
        {
            id: "y7mu-sa-153", topic: "structure-form", marks: 5,
            q: "Example 47: explain what the pattern verse-chorus tells you about the form.",
            sample: "Verse-chorus patterns show a repeated chorus between changing verses.",
            marks: 5
        },

        {
            id: "y7mu-sa-10", topic: "dynamics-tempo", marks: 4,
            q: "Put these dynamics in order from softest to loudest: mf, pp, f, p, ff, mp.",
            sample: "pp, p, mp, mf, f, ff.",
            marks: 4
        },
        {
            id: "y7mu-sa-11", topic: "dynamics-tempo", marks: 5,
            q: "Define these tempo markings: Largo, Andante and Presto.",
            sample: "Largo means very slow. Andante means at a walking pace. Presto means very fast.",
            marks: 5
        },
        {
            id: "y7mu-sa-12", topic: "dynamics-tempo", marks: 4,
            q: "Explain the difference between tempo and dynamics.",
            sample: "Tempo is the speed of the music. Dynamics are the loudness and softness of the music. They are different elements, though both affect how music feels.",
            marks: 4
        },
        {
            id: "y7mu-sa-154", topic: "dynamics-tempo", marks: 4,
            q: "Define dynamics.",
            sample: "Dynamics describe how loud or soft the music is.",
            marks: 4
        },
        {
            id: "y7mu-sa-155", topic: "dynamics-tempo", marks: 5,
            q: "Define tempo.",
            sample: "Tempo is the speed of the music.",
            marks: 5
        },
        {
            id: "y7mu-sa-156", topic: "dynamics-tempo", marks: 4,
            q: "Explain what crescendo means.",
            sample: "Crescendo means the music gradually becomes louder.",
            marks: 4
        },
        {
            id: "y7mu-sa-157", topic: "dynamics-tempo", marks: 5,
            q: "Explain what rallentando means.",
            sample: "Rallentando means the music gradually becomes slower.",
            marks: 5
        },
        {
            id: "y7mu-sa-158", topic: "dynamics-tempo", marks: 4,
            q: "What does the dynamic marking pp mean?",
            sample: "pp means very soft. A performer uses that marking to judge how loud or soft to play.",
            marks: 4
        },
        {
            id: "y7mu-sa-159", topic: "dynamics-tempo", marks: 5,
            q: "What does the dynamic marking p mean?",
            sample: "p means soft. A performer uses that marking to judge how loud or soft to play.",
            marks: 5
        },
        {
            id: "y7mu-sa-160", topic: "dynamics-tempo", marks: 4,
            q: "What does the dynamic marking mp mean?",
            sample: "mp means moderately soft. A performer uses that marking to judge how loud or soft to play.",
            marks: 4
        },
        {
            id: "y7mu-sa-161", topic: "dynamics-tempo", marks: 5,
            q: "What does the dynamic marking mf mean?",
            sample: "mf means moderately loud. A performer uses that marking to judge how loud or soft to play.",
            marks: 5
        },
        {
            id: "y7mu-sa-162", topic: "dynamics-tempo", marks: 4,
            q: "What does the dynamic marking f mean?",
            sample: "f means loud. A performer uses that marking to judge how loud or soft to play.",
            marks: 4
        },
        {
            id: "y7mu-sa-163", topic: "dynamics-tempo", marks: 5,
            q: "What does the dynamic marking ff mean?",
            sample: "ff means very loud. A performer uses that marking to judge how loud or soft to play.",
            marks: 5
        },
        {
            id: "y7mu-sa-164", topic: "dynamics-tempo", marks: 5,
            q: "Define the tempo marking Largo.",
            sample: "Largo means very slow. It tells the performer how fast the music should go.",
            marks: 5
        },
        {
            id: "y7mu-sa-165", topic: "dynamics-tempo", marks: 4,
            q: "Define the tempo marking Adagio.",
            sample: "Adagio means slow. It tells the performer how fast the music should go.",
            marks: 4
        },
        {
            id: "y7mu-sa-166", topic: "dynamics-tempo", marks: 5,
            q: "Define the tempo marking Andante.",
            sample: "Andante means walking pace. It tells the performer how fast the music should go.",
            marks: 5
        },
        {
            id: "y7mu-sa-167", topic: "dynamics-tempo", marks: 4,
            q: "Define the tempo marking Moderato.",
            sample: "Moderato means moderate speed. It tells the performer how fast the music should go.",
            marks: 4
        },
        {
            id: "y7mu-sa-168", topic: "dynamics-tempo", marks: 5,
            q: "Define the tempo marking Allegro.",
            sample: "Allegro means fast. It tells the performer how fast the music should go.",
            marks: 5
        },
        {
            id: "y7mu-sa-169", topic: "dynamics-tempo", marks: 4,
            q: "Define the tempo marking Presto.",
            sample: "Presto means very fast. It tells the performer how fast the music should go.",
            marks: 4
        },
        {
            id: "y7mu-sa-170", topic: "dynamics-tempo", marks: 5,
            q: "Example 17: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-171", topic: "dynamics-tempo", marks: 4,
            q: "Example 18: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-172", topic: "dynamics-tempo", marks: 5,
            q: "Example 19: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-173", topic: "dynamics-tempo", marks: 4,
            q: "Example 20: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-174", topic: "dynamics-tempo", marks: 5,
            q: "Example 21: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-175", topic: "dynamics-tempo", marks: 4,
            q: "Example 22: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-176", topic: "dynamics-tempo", marks: 5,
            q: "Example 23: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-177", topic: "dynamics-tempo", marks: 4,
            q: "Example 24: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-178", topic: "dynamics-tempo", marks: 5,
            q: "Example 25: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-179", topic: "dynamics-tempo", marks: 4,
            q: "Example 26: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-180", topic: "dynamics-tempo", marks: 5,
            q: "Example 27: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-181", topic: "dynamics-tempo", marks: 4,
            q: "Example 28: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-182", topic: "dynamics-tempo", marks: 5,
            q: "Example 29: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-183", topic: "dynamics-tempo", marks: 4,
            q: "Example 30: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-184", topic: "dynamics-tempo", marks: 5,
            q: "Example 31: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-185", topic: "dynamics-tempo", marks: 4,
            q: "Example 32: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-186", topic: "dynamics-tempo", marks: 5,
            q: "Example 33: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-187", topic: "dynamics-tempo", marks: 4,
            q: "Example 34: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-188", topic: "dynamics-tempo", marks: 5,
            q: "Example 35: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-189", topic: "dynamics-tempo", marks: 4,
            q: "Example 36: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-190", topic: "dynamics-tempo", marks: 5,
            q: "Example 37: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-191", topic: "dynamics-tempo", marks: 4,
            q: "Example 38: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-192", topic: "dynamics-tempo", marks: 5,
            q: "Example 39: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-193", topic: "dynamics-tempo", marks: 4,
            q: "Example 40: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-194", topic: "dynamics-tempo", marks: 5,
            q: "Example 41: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-195", topic: "dynamics-tempo", marks: 4,
            q: "Example 42: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-196", topic: "dynamics-tempo", marks: 5,
            q: "Example 43: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-197", topic: "dynamics-tempo", marks: 4,
            q: "Example 44: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-198", topic: "dynamics-tempo", marks: 5,
            q: "Example 45: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        },
        {
            id: "y7mu-sa-199", topic: "dynamics-tempo", marks: 4,
            q: "Example 46: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 4
        },
        {
            id: "y7mu-sa-200", topic: "dynamics-tempo", marks: 5,
            q: "Example 47: explain how dynamics and tempo can change the mood of a piece.",
            sample: "Dynamics change how loud or soft the music sounds, while tempo changes how fast or slow it feels. Together they shape the mood, energy and expression of the piece.",
            marks: 5
        }
    ],

    long: [
        {
            id: "y7mu-la-1", topic: "pitch-scales", marks: 8,
            q: "Explain how the element of pitch can be described in a listening task. Refer to contour, major scale, tones and semitones in your answer. (8 marks)",
            sample: "A strong answer explains that pitch describes how high or low sounds are. In a listening task, students may comment on contour by describing whether the melody ascends, descends, stays static or moves in waves. They may also refer to the major scale and its formula of tones and semitones, explaining that tones are larger steps than semitones. Strong responses connect these ideas to what can be heard in a melody.",
            marks: 8
        },
        {
            id: "y7mu-la-2", topic: "pitch-scales", marks: 8,
            q: "Describe how a student could write and explain a major scale using the tone and semitone pattern. (8 marks)",
            sample: "A strong response states the major scale pattern as tone, tone, semitone, tone, tone, tone, semitone and explains that it can be used to construct a major scale step by step from a starting note. The answer should define tone and semitone and show that understanding the pattern helps students write scales correctly.",
            marks: 8
        },
        {
            id: "y7mu-la-7", topic: "pitch-scales", marks: 8,
            q: "Explain how pitch can be analysed in a listening task. Refer to high and low sounds, contour, tones and semitones in your answer. (8 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 8
        },
        {
            id: "y7mu-la-8", topic: "pitch-scales", marks: 10,
            q: "Describe how a student could use the major scale formula to build and check a scale in class. (10 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 10
        },
        {
            id: "y7mu-la-9", topic: "pitch-scales", marks: 8,
            q: "A melody rises gradually, falls suddenly, then repeats one pitch. Explain how you would describe this contour in a detailed answer. (8 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 8
        },
        {
            id: "y7mu-la-10", topic: "pitch-scales", marks: 10,
            q: "Compare tones and semitones and explain why both are important when discussing scales. (10 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 10
        },
        {
            id: "y7mu-la-11", topic: "pitch-scales", marks: 8,
            q: "Explain how contour helps a listener follow the shape of a melody. (8 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 8
        },
        {
            id: "y7mu-la-12", topic: "pitch-scales", marks: 10,
            q: "Describe how a listening response could use scale vocabulary to explain pitch movement clearly. (10 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 10
        },
        {
            id: "y7mu-la-13", topic: "pitch-scales", marks: 8,
            q: "Explain why the major scale pattern is useful for Year 7 students learning pitch relationships. (8 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 8
        },
        {
            id: "y7mu-la-14", topic: "pitch-scales", marks: 10,
            q: "A short excerpt moves mostly by small upward steps before ending lower than it started. Analyse the pitch features of the excerpt. (10 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 10
        },
        {
            id: "y7mu-la-15", topic: "pitch-scales", marks: 8,
            q: "Explain how repeated notes, steps and leaps can all affect melodic contour. (8 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 8
        },
        {
            id: "y7mu-la-16", topic: "pitch-scales", marks: 10,
            q: "Describe how you would teach another student the difference between ascending, descending and static contour. (10 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 10
        },
        {
            id: "y7mu-la-17", topic: "pitch-scales", marks: 8,
            q: "Explain how knowledge of tones and semitones helps students write more accurate musical descriptions. (8 marks)",
            sample: "A strong response should explain that pitch describes how high or low sounds are. It should use contour terms such as ascending, descending, static or wave-like, and accurately explain that tones are made of two semitones. Strong answers connect this vocabulary to what can be heard in a melody and show how the major scale pattern helps organise pitch.",
            marks: 8
        },

        {
            id: "y7mu-la-3", topic: "duration-rhythm", marks: 8,
            q: "Explain how duration is shown in a listening task. Refer to rhythm and time signatures 2/4, 3/4 and 4/4 in your answer. (8 marks)",
            sample: "A strong response explains that duration involves note lengths, rests, pulse and rhythmic patterns. In a listening task, students can identify whether the music feels grouped in two, three or four beats per bar, leading to time signatures such as 2/4, 3/4 and 4/4. Good answers explain how rhythm patterns fit within these beat groupings and how they can be recognised by ear.",
            marks: 8
        },
        {
            id: "y7mu-la-18", topic: "duration-rhythm", marks: 8,
            q: "Explain how duration can be described in a listening task. Refer to pulse, rhythm and note lengths in your answer. (8 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 8
        },
        {
            id: "y7mu-la-19", topic: "duration-rhythm", marks: 10,
            q: "Compare 2/4, 3/4 and 4/4 time signatures and explain how a listener could recognise each. (10 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 10
        },
        {
            id: "y7mu-la-20", topic: "duration-rhythm", marks: 8,
            q: "Describe how rhythm and pulse work together in a musical performance. (8 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 8
        },
        {
            id: "y7mu-la-21", topic: "duration-rhythm", marks: 10,
            q: "Explain how bar lines and note values help performers keep accurate time. (10 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 10
        },
        {
            id: "y7mu-la-22", topic: "duration-rhythm", marks: 8,
            q: "A class clapping example moves between 2/4 and 3/4. Explain how the feel of the music changes. (8 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 8
        },
        {
            id: "y7mu-la-23", topic: "duration-rhythm", marks: 10,
            q: "Describe what a student should listen for when identifying a rhythmic pattern by ear. (10 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 10
        },
        {
            id: "y7mu-la-24", topic: "duration-rhythm", marks: 8,
            q: "Explain why rests are just as important as sounded notes in rhythm. (8 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 8
        },
        {
            id: "y7mu-la-25", topic: "duration-rhythm", marks: 10,
            q: "Describe how a performer would count and conduct simple time signatures in Year 7 music. (10 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 10
        },
        {
            id: "y7mu-la-26", topic: "duration-rhythm", marks: 8,
            q: "A short excerpt has clear groups of four beats with repeated rhythm patterns. Analyse the duration features of the excerpt. (8 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 8
        },
        {
            id: "y7mu-la-27", topic: "duration-rhythm", marks: 10,
            q: "Explain how note values such as crotchets, minims and quavers contribute to rhythm. (10 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 10
        },
        {
            id: "y7mu-la-28", topic: "duration-rhythm", marks: 8,
            q: "Describe how strong and weak beats help a listener identify metre and time signature. (8 marks)",
            sample: "A strong response should explain that duration covers pulse, rhythm, note lengths and rests. It should correctly describe how time signatures organise beats into bars and show how listeners can hear beat groupings such as 2/4, 3/4 or 4/4. Better answers connect vocabulary to specific aural clues.",
            marks: 8
        },

        {
            id: "y7mu-la-4", topic: "structure-form", marks: 10,
            q: "Compare binary form, ternary form and verse/chorus form. Explain how a listener could identify each in a musical example. (10 marks)",
            sample: "A strong response explains that binary form is AB, ternary form is ABA and verse/chorus form alternates verses with a recurring chorus. A listener identifies binary form by hearing one section followed by a contrasting second section with no return to the first. Ternary form is recognised when the opening section returns after a contrasting middle section. Verse/chorus form is identified through repeated chorus material separated by changing verses. Strong answers use clear musical language and compare the forms directly.",
            marks: 10
        },
        {
            id: "y7mu-la-29", topic: "structure-form", marks: 8,
            q: "Compare binary form, ternary form and verse/chorus form in a detailed listening response. (8 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 8
        },
        {
            id: "y7mu-la-30", topic: "structure-form", marks: 10,
            q: "Explain how repeated and contrasting sections help create musical form. (10 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 10
        },
        {
            id: "y7mu-la-31", topic: "structure-form", marks: 8,
            q: "Describe how a listener could identify binary form in a short excerpt. (8 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 8
        },
        {
            id: "y7mu-la-32", topic: "structure-form", marks: 10,
            q: "Describe how a listener could identify ternary form in a short excerpt. (10 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 10
        },
        {
            id: "y7mu-la-33", topic: "structure-form", marks: 8,
            q: "Explain why verse/chorus form is common in popular music. (8 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 8
        },
        {
            id: "y7mu-la-34", topic: "structure-form", marks: 10,
            q: "A song repeats the chorus three times between different verses. Analyse the structure of the song. (10 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 10
        },
        {
            id: "y7mu-la-35", topic: "structure-form", marks: 8,
            q: "Explain how form vocabulary helps students write clearer listening answers. (8 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 8
        },
        {
            id: "y7mu-la-36", topic: "structure-form", marks: 10,
            q: "Compare the return of section A in ternary form with the repetition of a chorus in popular music. (10 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 10
        },
        {
            id: "y7mu-la-37", topic: "structure-form", marks: 8,
            q: "Describe how a performer or listener can hear contrast between sections. (8 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 8
        },
        {
            id: "y7mu-la-38", topic: "structure-form", marks: 10,
            q: "A musical example begins with A, moves to B, then returns to A with small changes. Explain how you would describe this form. (10 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 10
        },
        {
            id: "y7mu-la-39", topic: "structure-form", marks: 8,
            q: "Explain why recognising structure is important when discussing how music is organised. (8 marks)",
            sample: "A strong answer should accurately define binary, ternary and verse/chorus forms when relevant. It should describe how repeated and contrasting sections sound to the listener and explain how these sections organise the music. Better answers use clear examples such as AB, ABA or repeated chorus material.",
            marks: 8
        },

        {
            id: "y7mu-la-5", topic: "dynamics-tempo", marks: 8,
            q: "Explain how tempo and dynamics help shape the character of music. Refer to at least THREE Italian terms or dynamic markings. (8 marks)",
            sample: "A strong answer explains that tempo affects how fast or slow music feels, while dynamics affect how loud or soft it sounds. Terms such as Largo, Andante, Allegro and Presto can be used to show different speeds. Dynamic markings such as pp, p, mf, f and ff show different levels of loudness. Together, tempo and dynamics influence mood, energy and expression.",
            marks: 8
        },
        {
            id: "y7mu-la-6", topic: "dynamics-tempo", marks: 10,
            q: "A listening excerpt begins softly at Andante, becomes louder, then ends very fast and loud. Describe how you would analyse this excerpt using the elements of dynamics and tempo. (10 marks)",
            sample: "A strong response would describe the opening as a moderate walking pace (Andante) and soft in dynamic level, perhaps p or mp. As the excerpt becomes louder, the student should comment on the change in dynamics toward f or ff. If the ending becomes very fast, the student could describe the tempo moving toward Allegro or Presto. Strong answers explain how these changes affect the mood and energy of the excerpt, using correct Italian terms and dynamic markings.",
            marks: 10
        },
        {
            id: "y7mu-la-40", topic: "dynamics-tempo", marks: 8,
            q: "Explain how dynamics and tempo shape the character of music. (8 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 8
        },
        {
            id: "y7mu-la-41", topic: "dynamics-tempo", marks: 10,
            q: "Compare soft, moderate and loud dynamic markings and explain how a performer responds to them. (10 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 10
        },
        {
            id: "y7mu-la-42", topic: "dynamics-tempo", marks: 8,
            q: "Describe how common Italian tempo terms help performers understand musical speed. (8 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 8
        },
        {
            id: "y7mu-la-43", topic: "dynamics-tempo", marks: 10,
            q: "A listening excerpt begins pp and Largo, then ends ff and Presto. Analyse the expressive effect of these changes. (10 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 10
        },
        {
            id: "y7mu-la-44", topic: "dynamics-tempo", marks: 8,
            q: "Explain how gradual changes such as crescendo and accelerando can build excitement. (8 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 8
        },
        {
            id: "y7mu-la-45", topic: "dynamics-tempo", marks: 10,
            q: "Describe how tempo and dynamics together can change the mood of the same melody. (10 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 10
        },
        {
            id: "y7mu-la-46", topic: "dynamics-tempo", marks: 8,
            q: "Explain how a student could use dynamic and tempo vocabulary in a detailed listening answer. (8 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 8
        },
        {
            id: "y7mu-la-47", topic: "dynamics-tempo", marks: 10,
            q: "Compare Andante, Moderato, Allegro and Presto in terms of musical energy. (10 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 10
        },
        {
            id: "y7mu-la-48", topic: "dynamics-tempo", marks: 8,
            q: "A performance starts softly at a walking pace, grows louder and becomes much faster. Explain how you would analyse it. (8 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 8
        },
        {
            id: "y7mu-la-49", topic: "dynamics-tempo", marks: 10,
            q: "Explain why both sudden and gradual dynamic changes are important in expressive music-making. (10 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 10
        },
        {
            id: "y7mu-la-50", topic: "dynamics-tempo", marks: 8,
            q: "Describe how dynamic markings and tempo markings guide performers from the score to the stage. (8 marks)",
            sample: "A strong response should explain that dynamics describe loudness and tempo describes speed. It should use correct terms such as pp, mf, ff, Largo, Andante, Allegro or Presto, and explain how gradual changes like crescendo or accelerando affect mood and energy. Better answers connect the terms to what the listener hears.",
            marks: 8
        }
    ],

    practiceTopics: [
        {
            id: "complete-review",
            name: "Year 7 Music Complete Review",
            outcomes: "MU4-LIS-01",
            sourceTopics: ["pitch-scales", "duration-rhythm", "structure-form", "dynamics-tempo"],
            setCount: 30
        }
    ],
    practiceExams: [],

                    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad balanced mix",
            duration: 50,
            questionIds: [
                "y7mu-mcq-3","y7mu-mcq-9","y7mu-mcq-15","y7mu-mcq-21","y7mu-mcq-26","y7mu-mcq-196","y7mu-mcq-315","y7mu-mcq-434",
                "y7mu-mcq-31","y7mu-mcq-201","y7mu-mcq-320","y7mu-mcq-439","y7mu-mcq-36","y7mu-mcq-206","y7mu-mcq-325","y7mu-mcq-444",
                "y7mu-mcq-41","y7mu-mcq-211","y7mu-mcq-330","y7mu-mcq-449","y7mu-sa-2","y7mu-sa-5","y7mu-sa-15","y7mu-sa-62",
                "y7mu-sa-9","y7mu-sa-12","y7mu-sa-19","y7mu-sa-66","y7mu-sa-110","y7mu-sa-157","y7mu-la-30","y7mu-la-40"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — balanced topic rotation A",
            duration: 50,
            questionIds: [
                "y7mu-mcq-46","y7mu-mcq-216","y7mu-mcq-335","y7mu-mcq-454","y7mu-mcq-51","y7mu-mcq-221","y7mu-mcq-340","y7mu-mcq-459",
                "y7mu-mcq-56","y7mu-mcq-226","y7mu-mcq-345","y7mu-mcq-464","y7mu-mcq-61","y7mu-mcq-231","y7mu-mcq-350","y7mu-mcq-469",
                "y7mu-mcq-66","y7mu-mcq-236","y7mu-mcq-355","y7mu-mcq-474","y7mu-sa-23","y7mu-sa-70","y7mu-sa-27","y7mu-sa-74",
                "y7mu-sa-114","y7mu-sa-161","y7mu-sa-31","y7mu-sa-78","y7mu-sa-118","y7mu-sa-165","y7mu-la-34","y7mu-la-44"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — balanced topic rotation B",
            duration: 50,
            questionIds: [
                "y7mu-mcq-71","y7mu-mcq-241","y7mu-mcq-360","y7mu-mcq-479","y7mu-mcq-76","y7mu-mcq-246","y7mu-mcq-365","y7mu-mcq-484",
                "y7mu-mcq-81","y7mu-mcq-251","y7mu-mcq-370","y7mu-mcq-489","y7mu-mcq-86","y7mu-mcq-256","y7mu-mcq-375","y7mu-mcq-494",
                "y7mu-mcq-91","y7mu-mcq-261","y7mu-mcq-380","y7mu-mcq-499","y7mu-sa-35","y7mu-sa-82","y7mu-sa-38","y7mu-sa-85",
                "y7mu-sa-122","y7mu-sa-169","y7mu-sa-42","y7mu-sa-89","y7mu-sa-126","y7mu-sa-173","y7mu-la-38","y7mu-la-48"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced topic rotation C",
            duration: 50,
            questionIds: [
                "y7mu-mcq-96","y7mu-mcq-266","y7mu-mcq-385","y7mu-mcq-504","y7mu-mcq-101","y7mu-mcq-271","y7mu-mcq-390","y7mu-mcq-509",
                "y7mu-mcq-106","y7mu-mcq-276","y7mu-mcq-395","y7mu-mcq-514","y7mu-mcq-111","y7mu-mcq-281","y7mu-mcq-400","y7mu-mcq-519",
                "y7mu-mcq-116","y7mu-mcq-286","y7mu-mcq-405","y7mu-mcq-524","y7mu-sa-131","y7mu-sa-178","y7mu-sa-46","y7mu-sa-93",
                "y7mu-sa-135","y7mu-sa-182","y7mu-sa-50","y7mu-sa-97","y7mu-sa-139","y7mu-sa-186","y7mu-la-8","y7mu-la-20"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 50,
            questionIds: [
                "y7mu-mcq-121","y7mu-mcq-291","y7mu-mcq-410","y7mu-mcq-529","y7mu-mcq-126","y7mu-mcq-296","y7mu-mcq-415","y7mu-mcq-534",
                "y7mu-mcq-131","y7mu-mcq-301","y7mu-mcq-420","y7mu-mcq-539","y7mu-mcq-136","y7mu-mcq-306","y7mu-mcq-425","y7mu-mcq-544",
                "y7mu-mcq-141","y7mu-mcq-311","y7mu-mcq-430","y7mu-mcq-549","y7mu-sa-143","y7mu-sa-190","y7mu-sa-54","y7mu-sa-101",
                "y7mu-sa-147","y7mu-sa-194","y7mu-sa-58","y7mu-sa-105","y7mu-sa-151","y7mu-sa-198","y7mu-la-14","y7mu-la-26"
            ]
        }
    ]
};

const MUSIC7_LEARNING_GUIDES = [
    {
        id: "music7-guide-pitch-scales",
        topicId: "pitch-scales",
        title: "Pitch, contour, tones and semitones",
        intro: "Pitch questions ask students to recognise whether notes move higher or lower and to use basic scale vocabulary correctly.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Pitch describes how high or low a sound is.",
                    "Contour is the shape of a melody as it moves through pitches.",
                    "A semitone is the smallest step commonly used in Western music, and a tone is two semitones."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Identify whether the melody is moving up, down or staying mostly the same.",
                    "If the question is about a scale, recall the major scale pattern carefully before answering.",
                    "Use the correct word, such as ascending, descending, static, tone or semitone, in your explanation."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Pitch is not the same as dynamics because pitch is about high and low, not loud and soft.",
                    "Contour describes shape, not tempo.",
                    "A tone is bigger than a semitone, not the other way around."
                ]
            }
        ],
        quickChecks: [
            "Have I described the pitch movement accurately?",
            "Did I use tone and semitone correctly?"
        ]
    },
    {
        id: "music7-guide-duration-rhythm",
        topicId: "duration-rhythm",
        title: "Duration, rhythm and time signatures",
        intro: "This topic focuses on how long sounds last, how beats are grouped and how rhythmic patterns are described in listening questions.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Duration is about how long sounds and silences last.",
                    "Rhythm is the pattern of long and short sounds.",
                    "A time signature shows how beats are grouped in each bar."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Look at the numbers in the time signature and decide how many beats fit in each bar.",
                    "If the question is about rhythm, focus on note lengths, accents and pulse groupings.",
                    "Use the correct beat value when you explain what the time signature means."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Rhythm is not the same as tempo because rhythm is the pattern while tempo is the speed.",
                    "The top number in a time signature does not tell you the note name by itself.",
                    "A march feel is usually connected to a strong duple pulse."
                ]
            }
        ],
        quickChecks: [
            "Have I explained the beat grouping correctly?",
            "Did I describe the rhythmic pattern rather than the speed?"
        ]
    },
    {
        id: "music7-guide-structure-form",
        topicId: "structure-form",
        title: "Binary, ternary and verse-chorus form",
        intro: "Form questions are about how musical sections are organised and how a listener can recognise recurring or contrasting material.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Binary form is AB.",
                    "Ternary form is ABA.",
                    "Verse-chorus form alternates changing verses with a repeated chorus."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Listen or read for section order first, then name the form.",
                    "If the question asks how a listener could identify the form, explain what repeats and what changes.",
                    "Compare the sections directly using words such as return, contrast and repeat."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "AB is binary, not ternary, because the first section does not return.",
                    "A repeating chorus does not automatically mean ternary form.",
                    "Form describes section order, not just style or mood."
                ]
            }
        ],
        quickChecks: [
            "Have I named the section pattern correctly?",
            "Did I explain what a listener would hear that proves the form?"
        ]
    },
    {
        id: "music7-guide-dynamics-tempo",
        topicId: "dynamics-tempo",
        title: "Dynamics, tempo and expressive change",
        intro: "These questions test whether students can describe loudness, speed and the way musical changes affect the character of a piece.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Dynamics describe loudness, using terms such as pp, p, mf, f and ff.",
                    "Tempo describes speed, using terms such as Largo, Andante, Allegro and Presto.",
                    "Changes such as crescendo or getting faster change the mood and energy of the music."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Identify whether the question is asking about loudness, speed or both.",
                    "Use correct Italian terms or dynamic markings in your answer wherever possible.",
                    "If the music changes, explain both the change itself and the effect it has on the listener."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Tempo is not the same as rhythm because tempo is speed.",
                    "Dynamics are not the same as pitch because dynamics are about loudness.",
                    "A gradual change should be described as a process, not as one fixed level."
                ]
            }
        ],
        quickChecks: [
            "Have I used the correct dynamic or tempo term?",
            "Did I explain how the change affects the music's character?"
        ]
    }
];

const MUSIC7_SUPPORT_HINTS = {
    "pitch-scales": {
        mcq: "Think about whether the question is testing high and low pitch, melodic shape or scale-step vocabulary.",
        short: "Name the pitch idea first, then describe what the listener would hear.",
        long: "Build your answer around the key pitch terms and use them to explain the example clearly."
    },
    "duration-rhythm": {
        mcq: "Focus on beat groupings, note lengths and what the time signature actually tells you.",
        short: "State the rhythm or time-signature rule first, then apply it to the musical example.",
        long: "Structure your answer around pulse, beat grouping and rhythmic pattern so each idea is clear."
    },
    "structure-form": {
        mcq: "Look for the order of sections and whether the opening material returns.",
        short: "Name the form first, then explain what repeats and what contrasts.",
        long: "Compare the sections directly so the listener can see why the form fits."
    },
    "dynamics-tempo": {
        mcq: "Decide whether the clue is about loudness, speed or a change in one of those features.",
        short: "Use the correct dynamic or tempo term and then explain the musical effect.",
        long: "Explain the expressive change step by step using accurate Italian terms or markings."
    }
};

function music7SupportHintFor(question) {
    const hints = MUSIC7_SUPPORT_HINTS[question.topic];
    if (!hints) return "Use the main music concept in this topic to explain what the listener would hear.";
    if (question.options) return hints.mcq;
    if ((question.marks || 0) >= 8) return hints.long;
    return hints.short;
}

function applyMusic7Support(subject) {
    const allQuestions = [].concat(subject.mcqs || [], subject.short || [], subject.long || []);
    subject.learningGuides = MUSIC7_LEARNING_GUIDES.map(function (guide) {
        return Object.assign({}, guide);
    });
    allQuestions.forEach(function (question) {
        question.support = {
            hint: music7SupportHintFor(question),
            guideId: `music7-guide-${question.topic}`
        };
    });
}

applyMusic7Support(window.SUBJECT_DATA["music-7"]);
