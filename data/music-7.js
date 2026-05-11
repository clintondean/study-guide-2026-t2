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
            id: "y7mu-la-3", topic: "duration-rhythm", marks: 8,
            q: "Explain how duration is shown in a listening task. Refer to rhythm and time signatures 2/4, 3/4 and 4/4 in your answer. (8 marks)",
            sample: "A strong response explains that duration involves note lengths, rests, pulse and rhythmic patterns. In a listening task, students can identify whether the music feels grouped in two, three or four beats per bar, leading to time signatures such as 2/4, 3/4 and 4/4. Good answers explain how rhythm patterns fit within these beat groupings and how they can be recognised by ear.",
            marks: 8
        },
        {
            id: "y7mu-la-4", topic: "structure-form", marks: 10,
            q: "Compare binary form, ternary form and verse/chorus form. Explain how a listener could identify each in a musical example. (10 marks)",
            sample: "A strong response explains that binary form is AB, ternary form is ABA and verse/chorus form alternates verses with a recurring chorus. A listener identifies binary form by hearing one section followed by a contrasting second section with no return to the first. Ternary form is recognised when the opening section returns after a contrasting middle section. Verse/chorus form is identified through repeated chorus material separated by changing verses. Strong answers use clear musical language and compare the forms directly.",
            marks: 10
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
        }
    ],

    practiceTopics: [
        {
            id: "complete-review",
            name: "Year 7 Music Complete Review",
            outcomes: "MU4-LIS-01",
            sourceTopics: ["pitch-scales", "duration-rhythm", "structure-form", "dynamics-tempo"]
        }
    ],
    practiceExams: [],

    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad listening mix",
            duration: 50,
            questionIds: [
                "y7mu-mcq-1","y7mu-mcq-2","y7mu-mcq-3","y7mu-mcq-4","y7mu-mcq-7","y7mu-mcq-8","y7mu-mcq-9","y7mu-mcq-10",
                "y7mu-mcq-13","y7mu-mcq-14","y7mu-mcq-15","y7mu-mcq-16","y7mu-mcq-19","y7mu-mcq-20","y7mu-mcq-21","y7mu-mcq-22",
                "y7mu-mcq-23","y7mu-mcq-24","y7mu-mcq-5","y7mu-mcq-11",
                "y7mu-sa-1","y7mu-sa-2","y7mu-sa-4","y7mu-sa-5","y7mu-sa-7","y7mu-sa-8","y7mu-sa-10","y7mu-sa-11","y7mu-sa-12","y7mu-sa-9",
                "y7mu-la-1","y7mu-la-4"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Pitch and rhythm focus",
            duration: 50,
            questionIds: [
                "y7mu-mcq-1","y7mu-mcq-2","y7mu-mcq-3","y7mu-mcq-4","y7mu-mcq-5","y7mu-mcq-6","y7mu-mcq-7","y7mu-mcq-8",
                "y7mu-mcq-9","y7mu-mcq-10","y7mu-mcq-11","y7mu-mcq-12","y7mu-mcq-13","y7mu-mcq-14","y7mu-mcq-19","y7mu-mcq-21",
                "y7mu-mcq-22","y7mu-mcq-23","y7mu-mcq-24","y7mu-mcq-15",
                "y7mu-sa-1","y7mu-sa-2","y7mu-sa-3","y7mu-sa-4","y7mu-sa-5","y7mu-sa-6","y7mu-sa-7","y7mu-sa-10","y7mu-sa-11","y7mu-sa-12",
                "y7mu-la-2","y7mu-la-3"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Structure and expression focus",
            duration: 50,
            questionIds: [
                "y7mu-mcq-1","y7mu-mcq-3","y7mu-mcq-5","y7mu-mcq-7","y7mu-mcq-8","y7mu-mcq-10","y7mu-mcq-12","y7mu-mcq-13",
                "y7mu-mcq-14","y7mu-mcq-15","y7mu-mcq-16","y7mu-mcq-17","y7mu-mcq-18","y7mu-mcq-19","y7mu-mcq-20","y7mu-mcq-21",
                "y7mu-mcq-22","y7mu-mcq-23","y7mu-mcq-24","y7mu-mcq-2",
                "y7mu-sa-1","y7mu-sa-3","y7mu-sa-5","y7mu-sa-6","y7mu-sa-7","y7mu-sa-8","y7mu-sa-9","y7mu-sa-10","y7mu-sa-11","y7mu-sa-12",
                "y7mu-la-4","y7mu-la-5"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Listening vocabulary and definitions",
            duration: 50,
            questionIds: [
                "y7mu-mcq-2","y7mu-mcq-4","y7mu-mcq-5","y7mu-mcq-6","y7mu-mcq-7","y7mu-mcq-9","y7mu-mcq-10","y7mu-mcq-11",
                "y7mu-mcq-13","y7mu-mcq-14","y7mu-mcq-16","y7mu-mcq-18","y7mu-mcq-19","y7mu-mcq-20","y7mu-mcq-21","y7mu-mcq-22",
                "y7mu-mcq-23","y7mu-mcq-24","y7mu-mcq-1","y7mu-mcq-17",
                "y7mu-sa-2","y7mu-sa-3","y7mu-sa-4","y7mu-sa-5","y7mu-sa-6","y7mu-sa-7","y7mu-sa-8","y7mu-sa-10","y7mu-sa-11","y7mu-sa-12",
                "y7mu-la-1","y7mu-la-6"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Complete review",
            duration: 50,
            questionIds: [
                "y7mu-mcq-1","y7mu-mcq-2","y7mu-mcq-3","y7mu-mcq-4","y7mu-mcq-5","y7mu-mcq-7","y7mu-mcq-8","y7mu-mcq-9",
                "y7mu-mcq-10","y7mu-mcq-11","y7mu-mcq-13","y7mu-mcq-14","y7mu-mcq-15","y7mu-mcq-17","y7mu-mcq-18","y7mu-mcq-19",
                "y7mu-mcq-20","y7mu-mcq-21","y7mu-mcq-23","y7mu-mcq-24",
                "y7mu-sa-1","y7mu-sa-2","y7mu-sa-4","y7mu-sa-5","y7mu-sa-6","y7mu-sa-7","y7mu-sa-8","y7mu-sa-9","y7mu-sa-10","y7mu-sa-11",
                "y7mu-la-3","y7mu-la-6"
            ]
        }
    ]
};
