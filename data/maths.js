// Mathematics — Year 9 Pathway to Advanced — Half Yearly
// Outcomes assessed (per Harper's class):
//   MA5-IND-C-01, MA5-IND-P-01, MA5-IND-P-02
//   MA5-MAG-C-01
//   MA5-ALG-C-01
//   MA5-EQU-C-01, MA5-EQU-P-01, MA5-EQU-P-02
//   MA5-LIN-C-01, MA5-LIN-C-02, MA5-LIN-P-01
//   MA5-TRG-C-01, MA5-TRG-C-02
// (No financial maths — that comes later.)

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

window.SUBJECT_DATA.maths = {
    id: "maths",
    name: "Mathematics",
    tagline: "Year 9 Pathway to Advanced — Half Yearly",
    color: "#ff7f51",
    accent: "#ce4257",
    icon: "📐",
    topics: [
        { id: "indices-basic",     name: "Indices — positive & zero" },
        { id: "indices-negative",  name: "Indices — negative & algebraic" },
        { id: "surds",             name: "Surds & fractional indices" },
        { id: "scientific",        name: "Scientific notation & sig figs" },
        { id: "expansion",         name: "Algebraic expansion" },
        { id: "alg-fractions",     name: "Algebraic fractions" },
        { id: "linear-eq",         name: "Linear equations" },
        { id: "linear-eq-multi",   name: "Multi-step / fractional equations" },
        { id: "quadratic-monic",   name: "Quadratics (monic) & cubics" },
        { id: "quadratic-nonmonic",name: "Quadratics (non-monic)" },
        { id: "inequalities",      name: "Linear inequalities" },
        { id: "simultaneous",      name: "Simultaneous equations" },
        { id: "midpoint-gradient", name: "Midpoint, gradient & distance" },
        { id: "slope-intercept",   name: "Slope-intercept form" },
        { id: "lines-perp",        name: "Parallel & perpendicular lines" },
        { id: "trig-sides",        name: "Trig — finding sides" },
        { id: "trig-angles",       name: "Trig — finding angles" },
        { id: "trig-elev",         name: "Elevation & depression" },
        { id: "trig-bearings",     name: "Bearings" }
    ],
    mcqs: [
        /* ----- Indices basic (MA5-IND-C-01) ----- */
        {
            id: "m-mcq-1", topic: "indices-basic",
            q: "Simplify: x⁵ × x³",
            options: ["x²", "x⁸", "x¹⁵", "2x⁸"], answer: 1,
            explain: "Multiplying same base → ADD indices: 5 + 3 = 8.",
            help: { rule: "aᵐ × aⁿ = aᵐ⁺ⁿ", steps: ["Same base x.", "Add indices: 5 + 3 = 8.", "Result: x⁸."] }
        },
        {
            id: "m-mcq-2", topic: "indices-basic",
            q: "Simplify: y⁹ ÷ y⁴",
            options: ["y¹³", "y⁵", "y³⁶", "y⁻⁵"], answer: 1,
            explain: "Dividing same base → SUBTRACT indices: 9 − 4 = 5.",
            help: { rule: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", steps: ["Subtract indices: 9 − 4 = 5.", "Result: y⁵."] }
        },
        {
            id: "m-mcq-3", topic: "indices-basic",
            q: "Simplify: (a³)⁴",
            options: ["a⁷", "a¹²", "a¹", "4a³"], answer: 1,
            explain: "Power of a power → MULTIPLY indices: 3 × 4 = 12.",
            help: { rule: "(aᵐ)ⁿ = aᵐⁿ", steps: ["Multiply: 3 × 4 = 12.", "Result: a¹²."] }
        },
        {
            id: "m-mcq-4", topic: "indices-basic",
            q: "Evaluate: 7⁰",
            options: ["0", "1", "7", "Undefined"], answer: 1,
            explain: "Any non-zero base raised to 0 equals 1.",
            help: { rule: "a⁰ = 1 (a ≠ 0)", steps: ["Apply zero-index rule.", "7⁰ = 1."] }
        },
        {
            id: "m-mcq-5", topic: "indices-basic",
            q: "Simplify: (2x³)²",
            options: ["2x⁶", "4x⁵", "4x⁶", "2x⁵"], answer: 2,
            explain: "Square BOTH factors: 2² = 4 and (x³)² = x⁶.",
            help: { rule: "(ab)ⁿ = aⁿ bⁿ", steps: ["2² = 4.", "(x³)² = x⁶.", "Combine: 4x⁶."] }
        },
        {
            id: "m-mcq-6", topic: "indices-basic",
            q: "Simplify: (3a²b)³",
            options: ["27a⁶b³", "9a⁶b³", "27a⁵b⁴", "3a⁶b³"], answer: 0,
            explain: "Cube each factor: 3³=27, (a²)³=a⁶, b³=b³.",
            help: { rule: "(ab)ⁿ = aⁿbⁿ and (aᵐ)ⁿ = aᵐⁿ", steps: ["3³ = 27.", "(a²)³ = a⁶.", "b³ = b³.", "Combine: 27a⁶b³."] }
        },
        {
            id: "m-mcq-7", topic: "indices-basic",
            q: "Simplify: 4x³ × 5x²",
            options: ["9x⁵", "20x⁵", "20x⁶", "9x⁶"], answer: 1,
            explain: "Multiply coefficients (4×5=20) and add indices (3+2=5).",
            help: { rule: "Multiply numbers, add indices.", steps: ["4 × 5 = 20.", "x³ × x² = x⁵.", "Result: 20x⁵."] }
        },
        {
            id: "m-mcq-8", topic: "indices-basic",
            q: "Simplify: (12a⁵)/(3a²)",
            options: ["4a³", "9a³", "4a²·⁵", "4a⁷"], answer: 0,
            explain: "Divide coefficients (12/3=4) and subtract indices (5−2=3).",
            help: { rule: "Divide numbers, subtract indices.", steps: ["12 ÷ 3 = 4.", "a⁵ ÷ a² = a³.", "Result: 4a³."] }
        },

        /* ----- Indices negative & algebraic (MA5-IND-P-01) ----- */
        {
            id: "m-mcq-9", topic: "indices-negative",
            q: "Express 5⁻² as a fraction.",
            options: ["−25", "1/25", "−1/25", "25"], answer: 1,
            explain: "a⁻ⁿ = 1/aⁿ → 5⁻² = 1/25.",
            help: { rule: "a⁻ⁿ = 1/aⁿ", steps: ["5⁻² = 1/5².", "5² = 25.", "Result: 1/25."] }
        },
        {
            id: "m-mcq-10", topic: "indices-negative",
            q: "Evaluate: 2⁻³",
            options: ["−8", "1/8", "−6", "1/6"], answer: 1,
            explain: "2⁻³ = 1/2³ = 1/8.",
            help: { rule: "Negative index → reciprocal.", steps: ["2⁻³ = 1/2³.", "2³ = 8.", "Result: 1/8."] }
        },
        {
            id: "m-mcq-11", topic: "indices-negative",
            q: "Evaluate: (1/3)⁻¹",
            options: ["1/3", "−1/3", "3", "−3"], answer: 2,
            explain: "(a/b)⁻¹ = b/a → (1/3)⁻¹ = 3.",
            help: { rule: "(p/q)⁻¹ = q/p — flip the fraction.", steps: ["Flip: 1/3 → 3/1.", "Result: 3."] }
        },
        {
            id: "m-mcq-12", topic: "indices-negative",
            q: "Express x⁻³ with a positive index.",
            options: ["1/x³", "−x³", "−1/x³", "x³"], answer: 0,
            explain: "x⁻³ = 1/x³.",
            help: { rule: "x⁻ⁿ = 1/xⁿ", steps: ["Move x to the denominator and make the index positive.", "Result: 1/x³."] }
        },
        {
            id: "m-mcq-13", topic: "indices-negative",
            q: "Simplify: x⁵ ÷ x⁸ as a positive index.",
            options: ["x³", "1/x³", "x⁻³ only", "x¹³"], answer: 1,
            explain: "x⁵⁻⁸ = x⁻³ = 1/x³.",
            help: { rule: "Subtract indices, then convert any negative result.", steps: ["5 − 8 = −3.", "x⁻³ = 1/x³."] }
        },
        {
            id: "m-mcq-14", topic: "indices-negative",
            q: "Simplify: (2x)⁻²",
            options: ["1/(4x²)", "−4x²", "1/(2x²)", "4/x²"], answer: 0,
            explain: "(2x)⁻² = 1/(2x)² = 1/(4x²).",
            help: { rule: "Negative index applies to the WHOLE bracket.", steps: ["Apply negative index: 1/(2x)².", "Square inside: (2x)² = 4x².", "Result: 1/(4x²)."] }
        },
        {
            id: "m-mcq-15", topic: "indices-negative",
            q: "Simplify: (a²)⁻³",
            options: ["a⁻⁵", "a⁻⁶", "1/a⁶", "Both b and c"], answer: 3,
            explain: "(a²)⁻³ = a⁻⁶ = 1/a⁶.",
            help: { rule: "(aᵐ)ⁿ = aᵐⁿ — multiply indices.", steps: ["2 × −3 = −6.", "a⁻⁶ = 1/a⁶."] }
        },

        /* ----- Surds & fractional indices (MA5-IND-P-02) ----- */
        {
            id: "m-mcq-16", topic: "surds",
            q: "Simplify √50.",
            options: ["5√10", "25√2", "5√2", "10√5"], answer: 2,
            explain: "50 = 25 × 2 → √50 = √25 × √2 = 5√2.",
            help: { rule: "Pull out the largest perfect square factor.", steps: ["50 = 25 × 2.", "√50 = √25 × √2 = 5√2."] }
        },
        {
            id: "m-mcq-17", topic: "surds",
            q: "Simplify: √8 + √18",
            options: ["√26", "5√2", "2√26", "26√2"], answer: 1,
            explain: "√8 = 2√2 and √18 = 3√2; add like surds: 2√2 + 3√2 = 5√2.",
            help: { rule: "Simplify each surd, then add 'like surds'.", steps: ["√8 = √(4×2) = 2√2.", "√18 = √(9×2) = 3√2.", "Add: 2√2 + 3√2 = 5√2."] }
        },
        {
            id: "m-mcq-18", topic: "surds",
            q: "Evaluate: √3 × √12",
            options: ["6", "√36 only", "12", "6√2"], answer: 0,
            explain: "√a × √b = √(ab) → √3 × √12 = √36 = 6.",
            help: { rule: "√a × √b = √(ab)", steps: ["√3 × √12 = √(3×12) = √36.", "√36 = 6."] }
        },
        {
            id: "m-mcq-19", topic: "surds",
            q: "Evaluate: (2√3)²",
            options: ["6", "12", "2√6", "4√3"], answer: 1,
            explain: "(2√3)² = 2² × (√3)² = 4 × 3 = 12.",
            help: { rule: "(a√b)² = a² × b", steps: ["Square coefficient: 2² = 4.", "(√3)² = 3.", "Multiply: 4 × 3 = 12."] }
        },
        {
            id: "m-mcq-20", topic: "surds",
            q: "Rationalise the denominator: 1/√2",
            options: ["√2/2", "2/√2", "1/2", "1"], answer: 0,
            explain: "Multiply numerator and denominator by √2: (1×√2)/(√2×√2) = √2/2.",
            help: { rule: "Multiply top and bottom by the same surd to remove it from the denominator.", steps: ["1/√2 × √2/√2.", "Numerator: 1 × √2 = √2.", "Denominator: √2 × √2 = 2.", "Result: √2/2."] }
        },
        {
            id: "m-mcq-21", topic: "surds",
            q: "Evaluate: 9^(1/2)",
            options: ["4.5", "3", "81", "1/3"], answer: 1,
            explain: "a^(1/2) = √a → 9^(1/2) = √9 = 3.",
            help: { rule: "a^(1/n) is the nth root of a.", steps: ["9^(1/2) = √9.", "√9 = 3."] }
        },
        {
            id: "m-mcq-22", topic: "surds",
            q: "Evaluate: 8^(1/3)",
            options: ["2", "2√2", "4", "1/2"], answer: 0,
            explain: "8^(1/3) = ∛8 = 2.",
            help: { rule: "a^(1/3) = ∛a (cube root).", steps: ["Need a number whose cube is 8.", "2³ = 8.", "Result: 2."] }
        },
        {
            id: "m-mcq-23", topic: "surds",
            q: "Evaluate: 16^(3/4)",
            options: ["8", "12", "64", "4"], answer: 0,
            explain: "16^(3/4) = (16^(1/4))³ = 2³ = 8.",
            help: { rule: "a^(m/n) = (a^(1/n))^m — take the root first, then the power.", steps: ["16^(1/4) = 2 (since 2⁴ = 16).", "Then 2³ = 8."] }
        },
        {
            id: "m-mcq-24", topic: "surds",
            q: "Simplify: √75",
            options: ["3√5", "5√3", "25√3", "15"], answer: 1,
            explain: "75 = 25 × 3 → √75 = 5√3.",
            help: { rule: "Find largest perfect-square factor.", steps: ["75 = 25 × 3.", "√75 = √25 × √3 = 5√3."] }
        },
        {
            id: "m-mcq-25", topic: "surds",
            q: "Evaluate: (√5)⁴",
            options: ["10", "20", "25", "5"], answer: 2,
            explain: "(√5)⁴ = ((√5)²)² = 5² = 25.",
            help: { rule: "(√a)² = a, so (√a)⁴ = a².", steps: ["(√5)² = 5.", "5² = 25."] }
        },

        /* ----- Scientific notation & sig figs (MA5-MAG-C-01) ----- */
        {
            id: "m-mcq-26", topic: "scientific",
            q: "Write 4 230 000 in scientific notation.",
            options: ["4.23 × 10⁶", "42.3 × 10⁵", "4.23 × 10⁵", "423 × 10⁴"], answer: 0,
            explain: "Place decimal so one non-zero digit is before it: 4.23. Decimal moved 6 places, so × 10⁶.",
            help: { rule: "a × 10ⁿ where 1 ≤ |a| < 10.", steps: ["Place decimal: 4.230000.", "Count places moved: 6 (left).", "Drop trailing zeros: 4.23 × 10⁶."] }
        },
        {
            id: "m-mcq-27", topic: "scientific",
            q: "Write 0.000 058 in scientific notation.",
            options: ["5.8 × 10⁻⁵", "5.8 × 10⁵", "58 × 10⁻⁶", "0.58 × 10⁻⁴"], answer: 0,
            explain: "Decimal moves 5 places to the right → exponent is negative.",
            help: { rule: "Small numbers → negative exponent.", steps: ["Place decimal at 5.8.", "Decimal moved 5 places to the RIGHT.", "Result: 5.8 × 10⁻⁵."] }
        },
        {
            id: "m-mcq-28", topic: "scientific",
            q: "Compute (3 × 10⁴) × (2 × 10⁵).",
            options: ["6 × 10⁹", "5 × 10⁹", "6 × 10²⁰", "6 × 10⁴⁵"], answer: 0,
            explain: "Multiply 3 × 2 = 6; add powers 4 + 5 = 9.",
            help: { rule: "Multiply coefficients, ADD exponents.", steps: ["3 × 2 = 6.", "10⁴ × 10⁵ = 10⁹.", "Combine: 6 × 10⁹."] }
        },
        {
            id: "m-mcq-29", topic: "scientific",
            q: "Compute (8 × 10⁶) ÷ (2 × 10²).",
            options: ["4 × 10³", "4 × 10⁴", "4 × 10⁸", "16 × 10⁴"], answer: 1,
            explain: "Divide 8/2 = 4; subtract powers 6 − 2 = 4.",
            help: { rule: "Divide coefficients, SUBTRACT exponents.", steps: ["8 ÷ 2 = 4.", "10⁶ ÷ 10² = 10⁴.", "Combine: 4 × 10⁴."] }
        },
        {
            id: "m-mcq-30", topic: "scientific",
            q: "Round 0.00468 to 2 significant figures.",
            options: ["0.00", "0.0047", "0.005", "0.0046"], answer: 1,
            explain: "Sig figs start at the first non-zero digit; 4, 6, then 8 rounds 6 up to 7 → 0.0047.",
            help: { rule: "Significant figures begin at the first non-zero digit.", steps: ["First sig fig: 4.", "Second sig fig: 6.", "Next digit 8 ≥ 5 → round 6 up.", "Result: 0.0047."] }
        },
        {
            id: "m-mcq-31", topic: "scientific",
            q: "Round 23 456 to 3 significant figures.",
            options: ["23 000", "23 500", "23 400", "23 460"], answer: 1,
            explain: "Three sig figs are 2, 3, 4. The next digit (5) rounds 4 up to 5 → 23 500.",
            help: { rule: "Identify first 3 sig figs, then look at the next digit.", steps: ["First three: 2, 3, 4.", "Next digit 5 → round up.", "234 becomes 235.", "Result: 23 500."] }
        },
        {
            id: "m-mcq-32", topic: "scientific",
            q: "Speed of light is approximately 299 792 458 m/s. Express to 3 sig figs in scientific notation.",
            options: ["3.00 × 10⁸ m/s", "2.99 × 10⁸ m/s", "3.00 × 10⁹ m/s", "2.99 × 10⁹ m/s"], answer: 0,
            explain: "First 3 sig figs are 2, 9, 9; next digit 7 rounds 299 up to 300, written 3.00. Decimal moves 8 places.",
            help: { rule: "Round THEN express in scientific notation (or vice versa).", steps: ["First 3 sig figs: 2,9,9 — next digit 7 rounds up to 300.", "Express as 3.00 × 10⁸.", "Note we keep the trailing zeros to show 3 sig figs."] }
        },

        /* ----- Algebraic expansion (MA5-ALG-C-01) ----- */
        {
            id: "m-mcq-33", topic: "expansion",
            q: "Expand: 3(2x − 5)",
            options: ["6x − 5", "6x − 15", "5x − 15", "6x + 15"], answer: 1,
            explain: "Multiply each term inside by 3.",
            help: { rule: "a(b + c) = ab + ac", steps: ["3 × 2x = 6x.", "3 × (−5) = −15.", "Combine: 6x − 15."] }
        },
        {
            id: "m-mcq-34", topic: "expansion",
            q: "Expand: (x + 4)(x − 2)",
            options: ["x² + 2x − 8", "x² − 2x − 8", "x² + 6x − 8", "x² + 2x + 8"], answer: 0,
            explain: "FOIL: x² + (−2x + 4x) + (−8) = x² + 2x − 8.",
            help: { rule: "FOIL: First, Outer, Inner, Last.", steps: ["F: x × x = x².", "O: x × (−2) = −2x.", "I: 4 × x = 4x.", "L: 4 × (−2) = −8.", "Combine: x² + 2x − 8."] }
        },
        {
            id: "m-mcq-35", topic: "expansion",
            q: "Expand: (2x − 3)²",
            options: ["4x² − 9", "4x² + 9", "4x² − 12x + 9", "4x² + 12x − 9"], answer: 2,
            explain: "(a − b)² = a² − 2ab + b² → (2x)² − 2(2x)(3) + 3² = 4x² − 12x + 9.",
            help: { rule: "Perfect-square: (a − b)² = a² − 2ab + b².", steps: ["a = 2x, b = 3.", "a² = 4x²; 2ab = 12x; b² = 9.", "Result: 4x² − 12x + 9."] }
        },
        {
            id: "m-mcq-36", topic: "expansion",
            q: "Expand: (x + 5)(x − 5)",
            options: ["x² + 25", "x² − 25", "x² + 10x − 25", "x² − 10x + 25"], answer: 1,
            explain: "Difference of two squares: (a + b)(a − b) = a² − b² → x² − 25.",
            help: { rule: "Difference of squares: (a+b)(a−b) = a² − b².", steps: ["a = x, b = 5.", "a² − b² = x² − 25."] }
        },
        {
            id: "m-mcq-37", topic: "expansion",
            q: "Expand: (3x − 2)(x + 5)",
            options: ["3x² + 15x − 10", "3x² + 13x − 10", "3x² − 13x + 10", "3x² + 17x − 10"], answer: 1,
            explain: "FOIL: 3x² + 15x − 2x − 10 = 3x² + 13x − 10.",
            help: { rule: "FOIL.", steps: ["F: 3x × x = 3x².", "O: 3x × 5 = 15x.", "I: −2 × x = −2x.", "L: −2 × 5 = −10.", "Combine middle terms: 15x − 2x = 13x.", "Result: 3x² + 13x − 10."] }
        },
        {
            id: "m-mcq-38", topic: "expansion",
            q: "Expand and simplify: 2(x + 3) − (x − 1)",
            options: ["x + 5", "x + 7", "3x + 5", "3x + 7"], answer: 1,
            explain: "2x + 6 − x + 1 = x + 7. Watch the negative distributing!",
            help: { rule: "Mind the sign when distributing a negative.", steps: ["2(x + 3) = 2x + 6.", "−(x − 1) = −x + 1.", "Combine: 2x + 6 − x + 1 = x + 7."] }
        },

        /* ----- Algebraic fractions (MA5-ALG-C-01) ----- */
        {
            id: "m-mcq-39", topic: "alg-fractions",
            q: "Simplify: (4x + 8)/4",
            options: ["x + 2", "x + 8", "4x + 2", "x + 4"], answer: 0,
            explain: "Factor numerator: 4(x + 2). Cancel the 4.",
            help: { rule: "Factor before cancelling.", steps: ["4x + 8 = 4(x + 2).", "Cancel 4/4: x + 2."] }
        },
        {
            id: "m-mcq-40", topic: "alg-fractions",
            q: "Simplify: x/2 + x/3",
            options: ["2x/5", "x/5", "5x/6", "x"], answer: 2,
            explain: "Common denominator 6: 3x/6 + 2x/6 = 5x/6.",
            help: { rule: "Find a common denominator before adding.", steps: ["LCD of 2 and 3 is 6.", "x/2 = 3x/6; x/3 = 2x/6.", "Add: 3x/6 + 2x/6 = 5x/6."] }
        },
        {
            id: "m-mcq-41", topic: "alg-fractions",
            q: "Simplify: (x + 1)/2 + (x − 2)/3",
            options: ["(2x − 1)/5", "(5x − 1)/6", "(5x + 1)/6", "(2x + 1)/6"], answer: 1,
            explain: "LCD 6 → 3(x+1)/6 + 2(x−2)/6 = (3x+3+2x−4)/6 = (5x−1)/6.",
            help: { rule: "Find LCD, expand each numerator, combine.", steps: ["LCD = 6.", "Numerator: 3(x+1) + 2(x−2) = 3x + 3 + 2x − 4 = 5x − 1.", "Result: (5x − 1)/6."] }
        },
        {
            id: "m-mcq-42", topic: "alg-fractions",
            q: "Simplify: (3x)/(x²) (assuming x ≠ 0)",
            options: ["3x", "3/x", "3", "1/3x"], answer: 1,
            explain: "Cancel one factor of x: 3x/x² = 3/x.",
            help: { rule: "Cancel common factors.", steps: ["3x/x² = 3 × x / (x × x).", "Cancel one x: 3/x."] }
        },

        /* ----- Linear equations 3-step (MA5-EQU-C-01) ----- */
        {
            id: "m-mcq-43", topic: "linear-eq",
            q: "Solve for x: 3x − 7 = 11",
            options: ["x = 6", "x = 4", "x = 18", "x = 9"], answer: 0,
            explain: "Add 7 → 3x = 18 → x = 6.",
            help: { rule: "Undo additions/subtractions first, then multiplications/divisions.", steps: ["Add 7: 3x = 18.", "Divide by 3: x = 6.", "CHECK: 3(6) − 7 = 11 ✓"] }
        },
        {
            id: "m-mcq-44", topic: "linear-eq",
            q: "Solve: 5x − 9 = 16",
            options: ["x = 5", "x = 1.4", "x = 7", "x = 25"], answer: 0,
            explain: "Add 9: 5x = 25; divide by 5: x = 5.",
            help: { rule: "Inverse operations.", steps: ["+9 both sides: 5x = 25.", "÷5: x = 5."] }
        },
        {
            id: "m-mcq-45", topic: "linear-eq",
            q: "Solve: 2(x + 3) = x + 11",
            options: ["x = 5", "x = 8", "x = 4", "x = 14"], answer: 0,
            explain: "Expand 2x + 6 = x + 11; subtract x: x + 6 = 11; x = 5.",
            help: { rule: "Expand first; gather variable terms on one side.", steps: ["Expand: 2x + 6 = x + 11.", "Subtract x: x + 6 = 11.", "Subtract 6: x = 5."] }
        },
        {
            id: "m-mcq-46", topic: "linear-eq",
            q: "Solve: x/4 + 2 = 5",
            options: ["x = 12", "x = 28", "x = 3", "x = 8"], answer: 0,
            explain: "Subtract 2: x/4 = 3; multiply by 4: x = 12.",
            help: { rule: "Multiply both sides by the denominator to clear a fraction.", steps: ["Subtract 2: x/4 = 3.", "Multiply by 4: x = 12."] }
        },
        {
            id: "m-mcq-47", topic: "linear-eq",
            q: "Solve: (x + 1)/3 = 4",
            options: ["x = 13", "x = 11", "x = 12", "x = 9"], answer: 1,
            explain: "Multiply by 3: x + 1 = 12; subtract 1: x = 11.",
            help: { rule: "Clear the fraction first.", steps: ["× 3 both sides: x + 1 = 12.", "− 1: x = 11."] }
        },

        /* ----- Multi-step / fractional linear (MA5-EQU-P-02) ----- */
        {
            id: "m-mcq-48", topic: "linear-eq-multi",
            q: "Solve: (x − 1)/3 = (x + 5)/4",
            options: ["x = 11", "x = 19", "x = 7", "x = −19"], answer: 1,
            explain: "Cross-multiply: 4(x − 1) = 3(x + 5) → 4x − 4 = 3x + 15 → x = 19.",
            help: { rule: "Cross-multiply when both sides are single fractions.", steps: ["Cross multiply: 4(x−1) = 3(x+5).", "Expand: 4x − 4 = 3x + 15.", "−3x: x − 4 = 15.", "+4: x = 19."] }
        },
        {
            id: "m-mcq-49", topic: "linear-eq-multi",
            q: "Solve: 3(x − 1) − 2(x + 4) = 5",
            options: ["x = 10", "x = 16", "x = 4", "x = −2"], answer: 1,
            explain: "3x − 3 − 2x − 8 = 5 → x − 11 = 5 → x = 16.",
            help: { rule: "Expand both brackets, then collect.", steps: ["3(x−1) = 3x − 3.", "−2(x+4) = −2x − 8.", "Combine: x − 11 = 5.", "x = 16."] }
        },
        {
            id: "m-mcq-50", topic: "linear-eq-multi",
            q: "Solve: (2x + 1)/3 − x/2 = 1",
            options: ["x = 4", "x = −4", "x = 2", "x = 6"], answer: 0,
            explain: "Multiply through by 6: 2(2x+1) − 3x = 6 → 4x + 2 − 3x = 6 → x = 4.",
            help: { rule: "Multiply BOTH sides by the LCD to clear fractions.", steps: ["LCD = 6.", "× 6: 2(2x+1) − 3x = 6.", "Expand: 4x + 2 − 3x = 6.", "x = 4."] }
        },

        /* ----- Quadratic monic & cubics (MA5-EQU-P-01) ----- */
        {
            id: "m-mcq-51", topic: "quadratic-monic",
            q: "Solve: x² − 5x + 6 = 0",
            options: ["x = 2 or 3", "x = −2 or −3", "x = 1 or 6", "x = 0 or 5"], answer: 0,
            explain: "Factorise (x−2)(x−3)=0 → x = 2 or 3.",
            help: { rule: "Find p,q with p+q = b and pq = c → (x−p)(x−q).", steps: ["Need product +6, sum −5: −2 and −3.", "(x − 2)(x − 3) = 0.", "Null factor law: x = 2 or x = 3."] }
        },
        {
            id: "m-mcq-52", topic: "quadratic-monic",
            q: "Solve: x² + 2x − 15 = 0",
            options: ["x = −5 or 3", "x = 5 or −3", "x = 5 or 3", "x = −5 or −3"], answer: 0,
            explain: "Factorise (x+5)(x−3)=0 → x = −5 or 3.",
            help: { rule: "Need pq = c, p+q = b.", steps: ["Product −15, sum +2: 5 and −3.", "(x + 5)(x − 3) = 0.", "x = −5 or x = 3."] }
        },
        {
            id: "m-mcq-53", topic: "quadratic-monic",
            q: "Solve: x² = 49",
            options: ["x = 7", "x = ±7", "x = 49", "x = 24.5"], answer: 1,
            explain: "Square root both sides — both signs!",
            help: { rule: "If x² = k (k ≥ 0) then x = ±√k.", steps: ["√49 = 7.", "Include negative: x = ±7."] }
        },
        {
            id: "m-mcq-54", topic: "quadratic-monic",
            q: "Solve: x² − 9 = 0",
            options: ["x = ±3", "x = 3 only", "x = ±9", "x = 0"], answer: 0,
            explain: "x² = 9 → x = ±3 (or factor as (x−3)(x+3) = 0).",
            help: { rule: "Difference of squares OR direct square root.", steps: ["Add 9: x² = 9.", "Square root both sides: x = ±3."] }
        },
        {
            id: "m-mcq-55", topic: "quadratic-monic",
            q: "Solve: x² + 6x + 9 = 0",
            options: ["x = 3 only", "x = −3 only", "x = ±3", "No real solution"], answer: 1,
            explain: "Perfect square: (x + 3)² = 0 → repeated root x = −3.",
            help: { rule: "Spot perfect-square: a² + 2ab + b² = (a+b)².", steps: ["x² + 6x + 9 = (x + 3)².", "(x + 3)² = 0 → x + 3 = 0.", "x = −3 (repeated)."] }
        },
        {
            id: "m-mcq-56", topic: "quadratic-monic",
            q: "Solve: x³ = 27",
            options: ["x = 3", "x = ±3", "x = 9", "x = −3"], answer: 0,
            explain: "Cube root both sides → x = 3 (cube roots have a single real value).",
            help: { rule: "x³ = k → x = ∛k (only one real solution).", steps: ["∛27 = 3.", "x = 3."] }
        },
        {
            id: "m-mcq-57", topic: "quadratic-monic",
            q: "Solve: x³ = −8",
            options: ["x = 2", "x = −2", "x = ±2", "No real solution"], answer: 1,
            explain: "(−2)³ = −8 → x = −2.",
            help: { rule: "Cube root preserves sign.", steps: ["∛(−8) = −2 (since (−2)³ = −8).", "x = −2."] }
        },

        /* ----- Linear inequalities (MA5-EQU-P-01) ----- */
        {
            id: "m-mcq-58", topic: "inequalities",
            q: "Solve: 2x + 5 ≥ 11",
            options: ["x ≥ 3", "x ≤ 3", "x ≥ 8", "x ≤ 8"], answer: 0,
            explain: "Subtract 5: 2x ≥ 6; divide by 2: x ≥ 3.",
            help: { rule: "Treat like an equation; if you multiply or divide by a NEGATIVE, flip the sign.", steps: ["−5: 2x ≥ 6.", "÷2 (positive): x ≥ 3."] }
        },
        {
            id: "m-mcq-59", topic: "inequalities",
            q: "Solve: −3x + 1 < 7",
            options: ["x < −2", "x > −2", "x > 2", "x < 2"], answer: 1,
            explain: "−1: −3x < 6; ÷ (−3) AND flip: x > −2.",
            help: { rule: "Dividing by a negative FLIPS the inequality.", steps: ["−1: −3x < 6.", "÷ (−3) and flip: x > −2."] }
        },
        {
            id: "m-mcq-60", topic: "inequalities",
            q: "Solve: 5 − 2x ≤ 1",
            options: ["x ≤ 2", "x ≥ 2", "x ≥ 3", "x ≤ 3"], answer: 1,
            explain: "−5: −2x ≤ −4; ÷(−2) AND flip: x ≥ 2.",
            help: { rule: "Flip when dividing/multiplying by a negative.", steps: ["−5 both sides: −2x ≤ −4.", "÷(−2), flip: x ≥ 2."] }
        },

        /* ----- Quadratics non-monic (MA5-EQU-P-02) ----- */
        {
            id: "m-mcq-61", topic: "quadratic-nonmonic",
            q: "Solve: 2x² + 7x + 3 = 0",
            options: ["x = −1/2 or −3", "x = 1/2 or 3", "x = −2 or −3", "x = 1/2 or −3"], answer: 0,
            explain: "Factorise (2x + 1)(x + 3) = 0 → x = −1/2 or x = −3.",
            help: { rule: "For ax² + bx + c, find two numbers that multiply to ac and add to b.", steps: ["a = 2, c = 3 → ac = 6. Need pair summing to 7: 6 and 1.", "Split middle: 2x² + 6x + x + 3 = 0.", "Factor pairs: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3) = 0.", "x = −1/2 or −3."] }
        },
        {
            id: "m-mcq-62", topic: "quadratic-nonmonic",
            q: "Solve: 3x² − 11x − 4 = 0",
            options: ["x = 4 or −1/3", "x = −4 or 1/3", "x = 4 or 1/3", "No real solution"], answer: 0,
            explain: "Factorise (3x + 1)(x − 4) = 0 → x = −1/3 or 4.",
            help: { rule: "ac = −12; find pair summing to −11: −12 and 1.", steps: ["Split: 3x² − 12x + x − 4 = 0.", "Group: 3x(x − 4) + 1(x − 4).", "(3x + 1)(x − 4) = 0.", "x = −1/3 or x = 4."] }
        },
        {
            id: "m-mcq-63", topic: "quadratic-nonmonic",
            q: "Solve x² − 4x + 1 = 0 using the quadratic formula. (Exact form)",
            options: ["x = 2 ± √3", "x = 2 ± √5", "x = 1 ± √3", "x = 4 ± √3"], answer: 0,
            explain: "x = (4 ± √(16 − 4))/2 = (4 ± √12)/2 = 2 ± √3.",
            help: { rule: "x = (−b ± √(b² − 4ac))/(2a)", steps: ["a=1, b=−4, c=1.", "Discriminant: 16 − 4 = 12. √12 = 2√3.", "x = (4 ± 2√3)/2 = 2 ± √3."] }
        },

        /* ----- Simultaneous equations (MA5-EQU-P-02) ----- */
        {
            id: "m-mcq-64", topic: "simultaneous",
            q: "Solve: x + y = 7,  x − y = 3.",
            options: ["x = 5, y = 2", "x = 4, y = 3", "x = 3, y = 4", "x = 2, y = 5"], answer: 0,
            explain: "Add: 2x = 10 → x = 5. Sub back: y = 2.",
            help: { rule: "Elimination — add or subtract equations to remove a variable.", steps: ["Add: (x+y) + (x−y) = 7 + 3.", "2x = 10 → x = 5.", "Sub into x + y = 7: y = 2."] }
        },
        {
            id: "m-mcq-65", topic: "simultaneous",
            q: "Solve: 2x + y = 8,  x + y = 5.",
            options: ["x = 3, y = 2", "x = 2, y = 3", "x = 1, y = 6", "x = 4, y = 1"], answer: 0,
            explain: "Subtract eqn 2 from eqn 1: x = 3 → y = 2.",
            help: { rule: "Subtract to eliminate y when its coefficients match.", steps: ["(2x + y) − (x + y) = 8 − 5.", "x = 3.", "Sub: 3 + y = 5 → y = 2."] }
        },
        {
            id: "m-mcq-66", topic: "simultaneous",
            q: "Solve: y = x + 2 and y = 3x − 4.",
            options: ["x = 3, y = 5", "x = 5, y = 3", "x = 1, y = 3", "x = 2, y = 2"], answer: 0,
            explain: "Substitute: x + 2 = 3x − 4 → 6 = 2x → x = 3, y = 5.",
            help: { rule: "Substitute one expression for y into the other.", steps: ["x + 2 = 3x − 4.", "Subtract x: 2 = 2x − 4.", "Add 4: 6 = 2x → x = 3.", "Then y = 3 + 2 = 5."] }
        },

        /* ----- Midpoint, gradient, distance (MA5-LIN-C-01) ----- */
        {
            id: "m-mcq-67", topic: "midpoint-gradient",
            q: "Find the gradient of the line through (1, 2) and (4, 8).",
            options: ["1/2", "2", "3", "6"], answer: 1,
            explain: "m = (8 − 2)/(4 − 1) = 6/3 = 2.",
            help: { rule: "m = (y₂ − y₁)/(x₂ − x₁) — rise over run.", steps: ["Δy = 8 − 2 = 6.", "Δx = 4 − 1 = 3.", "m = 6/3 = 2."] }
        },
        {
            id: "m-mcq-68", topic: "midpoint-gradient",
            q: "Gradient of the line through (−2, 5) and (3, −5).",
            options: ["−2", "2", "−1/2", "1/2"], answer: 0,
            explain: "(−5 − 5)/(3 − (−2)) = −10/5 = −2.",
            help: { rule: "m = (y₂ − y₁)/(x₂ − x₁).", steps: ["Δy = −5 − 5 = −10.", "Δx = 3 − (−2) = 5.", "m = −10/5 = −2."] }
        },
        {
            id: "m-mcq-69", topic: "midpoint-gradient",
            q: "Midpoint of A(2, 3) and B(6, 11).",
            options: ["(4, 7)", "(8, 14)", "(2, 4)", "(3, 7)"], answer: 0,
            explain: "((2+6)/2, (3+11)/2) = (4, 7).",
            help: { rule: "M = ((x₁+x₂)/2, (y₁+y₂)/2).", steps: ["Average x: (2 + 6)/2 = 4.", "Average y: (3 + 11)/2 = 7.", "M = (4, 7)."] }
        },
        {
            id: "m-mcq-70", topic: "midpoint-gradient",
            q: "Midpoint of (−3, 4) and (5, −2).",
            options: ["(1, 1)", "(2, 1)", "(1, 2)", "(8, −6)"], answer: 0,
            explain: "((−3+5)/2, (4+(−2))/2) = (1, 1).",
            help: { rule: "Average each coordinate.", steps: ["x: (−3 + 5)/2 = 1.", "y: (4 + (−2))/2 = 1.", "M = (1, 1)."] }
        },
        {
            id: "m-mcq-71", topic: "midpoint-gradient",
            q: "Distance between (0, 0) and (3, 4).",
            options: ["5", "7", "12", "√7"], answer: 0,
            explain: "√(9 + 16) = √25 = 5.",
            help: { rule: "d = √((x₂−x₁)² + (y₂−y₁)²).", steps: ["Δx² = 9, Δy² = 16.", "Sum: 25.", "√25 = 5."] }
        },
        {
            id: "m-mcq-72", topic: "midpoint-gradient",
            q: "Distance between (−1, 3) and (2, −1).",
            options: ["3", "4", "5", "√7"], answer: 2,
            explain: "Δx = 3, Δy = −4 → d = √(9 + 16) = √25 = 5.",
            help: { rule: "d = √(Δx² + Δy²).", steps: ["Δx = 2 − (−1) = 3.", "Δy = −1 − 3 = −4.", "d = √(9 + 16) = √25 = 5."] }
        },

        /* ----- Slope-intercept form (MA5-LIN-C-02) ----- */
        {
            id: "m-mcq-73", topic: "slope-intercept",
            q: "What is the y-intercept of y = 3x − 7?",
            options: ["3", "−7", "7", "0"], answer: 1,
            explain: "In y = mx + c, c = −7.",
            help: { rule: "y = mx + c → m = gradient, c = y-intercept.", steps: ["Compare with y = mx + c.", "c = −7."] }
        },
        {
            id: "m-mcq-74", topic: "slope-intercept",
            q: "Gradient of y = −2x + 4.",
            options: ["−2", "2", "4", "−4"], answer: 0,
            explain: "Coefficient of x is −2.",
            help: { rule: "Gradient is the coefficient of x.", steps: ["y = −2x + 4 → m = −2."] }
        },
        {
            id: "m-mcq-75", topic: "slope-intercept",
            q: "Which point lies on y = 2x + 1?",
            options: ["(0, 1)", "(1, 0)", "(2, 3)", "Both (0, 1) and (1, 3)"], answer: 3,
            explain: "(0, 1): 2(0)+1 = 1 ✓; (1, 3): 2(1)+1 = 3 ✓; (1, 0): 2(1)+1 = 3 ✗; (2, 3): 2(2)+1 = 5 ✗.",
            help: { rule: "Substitute the x value and check whether the y value matches.", steps: ["Test (0,1): 2(0)+1 = 1 → y matches.", "Test (1,3): 2(1)+1 = 3 → matches.", "Both correct."] }
        },
        {
            id: "m-mcq-76", topic: "slope-intercept",
            q: "Find the x-intercept of y = 4x − 8.",
            options: ["x = 2", "x = −2", "x = 8", "x = 0"], answer: 0,
            explain: "Set y = 0: 4x − 8 = 0 → x = 2.",
            help: { rule: "At the x-intercept, y = 0.", steps: ["0 = 4x − 8.", "Add 8: 4x = 8.", "Divide: x = 2."] }
        },

        /* ----- Lines: parallel & perpendicular (MA5-LIN-P-01) ----- */
        {
            id: "m-mcq-77", topic: "lines-perp",
            q: "Are y = 2x + 3 and y = 2x − 5 parallel, perpendicular, or neither?",
            options: ["Parallel", "Perpendicular", "Neither", "The same line"], answer: 0,
            explain: "Same gradient (2), different y-intercepts → parallel.",
            help: { rule: "Parallel ↔ equal gradients; perpendicular ↔ product of gradients = −1.", steps: ["m₁ = 2, m₂ = 2.", "Same gradient → parallel."] }
        },
        {
            id: "m-mcq-78", topic: "lines-perp",
            q: "Are y = (1/2)x + 1 and y = −2x + 3 parallel, perpendicular, or neither?",
            options: ["Parallel", "Perpendicular", "Neither", "Coincident"], answer: 1,
            explain: "(1/2) × (−2) = −1 → perpendicular.",
            help: { rule: "m₁m₂ = −1 ⇒ perpendicular.", steps: ["Product: (1/2) × (−2) = −1.", "Therefore perpendicular."] }
        },
        {
            id: "m-mcq-79", topic: "lines-perp",
            q: "Find the equation of the line through (2, 5) with gradient 3.",
            options: ["y = 3x − 1", "y = 3x + 5", "y = 3x + 1", "y = 3x − 6"], answer: 0,
            explain: "y − 5 = 3(x − 2) → y = 3x − 6 + 5 = 3x − 1.",
            help: { rule: "Point-gradient form: y − y₁ = m(x − x₁).", steps: ["y − 5 = 3(x − 2).", "Expand: y − 5 = 3x − 6.", "Add 5: y = 3x − 1."] }
        },
        {
            id: "m-mcq-80", topic: "lines-perp",
            q: "Equation of line parallel to y = 4x − 2 passing through (1, 3).",
            options: ["y = 4x − 1", "y = 4x + 3", "y = 4x − 7", "y = −(1/4)x + 3"], answer: 0,
            explain: "Same gradient 4 → y − 3 = 4(x − 1) → y = 4x − 1.",
            help: { rule: "Parallel lines share gradient.", steps: ["m = 4 (same as the given line).", "y − 3 = 4(x − 1).", "y = 4x − 4 + 3 = 4x − 1."] }
        },
        {
            id: "m-mcq-81", topic: "lines-perp",
            q: "Equation of line perpendicular to y = (1/3)x + 2 passing through the origin.",
            options: ["y = −3x", "y = 3x", "y = −x/3", "y = (1/3)x"], answer: 0,
            explain: "Perpendicular gradient = −3. Through (0,0): y = −3x.",
            help: { rule: "Perpendicular gradient = negative reciprocal.", steps: ["Original m = 1/3.", "Perpendicular m = −3.", "Through origin: y = −3x."] }
        },

        /* ----- Trig — find a side (MA5-TRG-C-01) ----- */
        {
            id: "m-mcq-82", topic: "trig-sides",
            q: "Right triangle with 30°: hypotenuse = 10. Find the OPPOSITE side.",
            options: ["5", "5√3", "10/√3", "8.66"], answer: 0,
            explain: "sin(30°) = opp/10 → opp = 10 × 0.5 = 5.",
            help: { rule: "SOH: sin θ = opposite/hypotenuse.", steps: ["sin(30°) = 0.5.", "opp = 10 × 0.5 = 5."] }
        },
        {
            id: "m-mcq-83", topic: "trig-sides",
            q: "40° angle, hypotenuse 12 cm. Find the OPPOSITE side (1 dp).",
            options: ["7.7 cm", "9.2 cm", "10.1 cm", "5.0 cm"], answer: 0,
            explain: "12 × sin(40°) ≈ 12 × 0.6428 ≈ 7.7.",
            help: { rule: "opp = hyp × sin θ.", steps: ["sin(40°) ≈ 0.6428.", "12 × 0.6428 ≈ 7.71 cm."] }
        },
        {
            id: "m-mcq-84", topic: "trig-sides",
            q: "Right triangle: 35° angle, opposite = 6 cm. Find the HYPOTENUSE (1 dp).",
            options: ["10.5 cm", "8.6 cm", "5.0 cm", "12.0 cm"], answer: 0,
            explain: "sin(35°) = 6/h → h = 6/sin(35°) ≈ 6/0.5736 ≈ 10.5 cm.",
            help: { rule: "Rearrange: hyp = opp / sin θ.", steps: ["sin(35°) ≈ 0.5736.", "h = 6/0.5736 ≈ 10.46 cm.", "Round: 10.5 cm."] }
        },
        {
            id: "m-mcq-85", topic: "trig-sides",
            q: "50° angle, adjacent = 8 cm. Find the OPPOSITE side (1 dp).",
            options: ["9.5 cm", "12.4 cm", "5.1 cm", "6.7 cm"], answer: 0,
            explain: "tan(50°) = opp/8 → opp = 8 × tan(50°) ≈ 8 × 1.1918 ≈ 9.5.",
            help: { rule: "TOA: tan θ = opp/adj → opp = adj × tan θ.", steps: ["tan(50°) ≈ 1.1918.", "opp = 8 × 1.1918 ≈ 9.53 cm.", "Round: 9.5 cm."] }
        },

        /* ----- Trig — find an angle (MA5-TRG-C-01) ----- */
        {
            id: "m-mcq-86", topic: "trig-angles",
            q: "If tan(θ) = 0.75, find θ to the nearest degree.",
            options: ["37°", "45°", "53°", "60°"], answer: 0,
            explain: "θ = tan⁻¹(0.75) ≈ 36.87° → 37°.",
            help: { rule: "Use inverse tan to find the angle.", steps: ["θ = tan⁻¹(0.75).", "Calculator: ≈ 36.87°.", "Round: 37°."] }
        },
        {
            id: "m-mcq-87", topic: "trig-angles",
            q: "If cos(θ) = 0.5, find θ.",
            options: ["30°", "45°", "60°", "90°"], answer: 2,
            explain: "θ = cos⁻¹(0.5) = 60°.",
            help: { rule: "Memorise: cos(60°) = 0.5.", steps: ["cos(60°) = 1/2.", "θ = 60°."] }
        },
        {
            id: "m-mcq-88", topic: "trig-angles",
            q: "Right triangle: opposite = 5, adjacent = 12. Find θ (1 dp).",
            options: ["22.6°", "21.8°", "67.4°", "45.0°"], answer: 0,
            explain: "tan(θ) = 5/12 → θ = tan⁻¹(0.4167) ≈ 22.6°.",
            help: { rule: "Use TOA: tan θ = opp/adj.", steps: ["tan(θ) = 5/12 ≈ 0.4167.", "θ = tan⁻¹(0.4167) ≈ 22.62°.", "Round: 22.6°."] }
        },
        {
            id: "m-mcq-89", topic: "trig-angles",
            q: "Right triangle: opposite = 9, hypotenuse = 15. Find θ (1 dp).",
            options: ["36.9°", "53.1°", "30.0°", "60.0°"], answer: 0,
            explain: "sin(θ) = 9/15 = 0.6 → θ = sin⁻¹(0.6) ≈ 36.87°.",
            help: { rule: "SOH: sin θ = opp/hyp.", steps: ["sin(θ) = 9/15 = 0.6.", "sin⁻¹(0.6) ≈ 36.87°.", "Round: 36.9°."] }
        },

        /* ----- Trig — elevation/depression (MA5-TRG-C-02) ----- */
        {
            id: "m-mcq-90", topic: "trig-elev",
            q: "From the top of a 30 m cliff, the angle of depression to a boat is 22°. Distance from cliff base to boat (nearest m)?",
            options: ["12 m", "27 m", "74 m", "81 m"], answer: 2,
            explain: "tan(22°) = 30/d → d = 30/tan(22°) ≈ 30/0.4040 ≈ 74 m.",
            help: { rule: "Angle of depression = angle of elevation from the boat (alternate angles).", steps: ["Triangle: opp = 30 (cliff), adj = d (boat distance).", "tan(22°) = 30/d.", "d = 30/tan(22°) ≈ 74.25 m.", "Round: 74 m."] }
        },
        {
            id: "m-mcq-91", topic: "trig-elev",
            q: "A tree casts an 8 m shadow when the sun's elevation is 35°. Tree height (1 dp)?",
            options: ["3.5 m", "5.6 m", "7.0 m", "11.4 m"], answer: 1,
            explain: "tan(35°) = h/8 → h = 8 × tan(35°) ≈ 8 × 0.7002 ≈ 5.6 m.",
            help: { rule: "tan(elevation) = height/horizontal.", steps: ["tan(35°) ≈ 0.7002.", "h = 8 × 0.7002 ≈ 5.60 m.", "Round: 5.6 m."] }
        },
        {
            id: "m-mcq-92", topic: "trig-elev",
            q: "From a 60 m lighthouse, the angle of depression to a ship is 12°. Horizontal distance to the ship (nearest m)?",
            options: ["12 m", "57 m", "282 m", "300 m"], answer: 2,
            explain: "tan(12°) = 60/d → d = 60/tan(12°) ≈ 60/0.2126 ≈ 282 m.",
            help: { rule: "tan(depression) = vertical drop / horizontal.", steps: ["tan(12°) ≈ 0.2126.", "d = 60/0.2126 ≈ 282.3 m.", "Round: 282 m."] }
        },

        /* ----- Trig — bearings (MA5-TRG-C-02) ----- */
        {
            id: "m-mcq-93", topic: "trig-bearings",
            q: "A bearing of 045° points:",
            options: ["Due north", "Northeast", "Southwest", "Due east"], answer: 1,
            explain: "Bearings measured clockwise from north: 045° is exactly NE.",
            help: { rule: "Bearings are 3-figure clockwise from north (000°).", steps: ["000° = N, 090° = E, 180° = S, 270° = W.", "045° is halfway between N and E → NE."] }
        },
        {
            id: "m-mcq-94", topic: "trig-bearings",
            q: "If the bearing of P from O is 120°, what is the bearing of O from P?",
            options: ["060°", "240°", "300°", "330°"], answer: 2,
            explain: "Add 180° (and subtract 360 if necessary): 120 + 180 = 300°.",
            help: { rule: "Reverse bearing = original ± 180° (whichever stays in 000°–360°).", steps: ["120° + 180° = 300°.", "Within range, so answer is 300°."] }
        },
        {
            id: "m-mcq-95", topic: "trig-bearings",
            q: "A ship sails 30 km on a bearing of 030°. How far NORTH has it travelled (1 dp)?",
            options: ["15.0 km", "26.0 km", "30.0 km", "10.5 km"], answer: 1,
            explain: "North component = 30 × cos(30°) ≈ 30 × 0.866 ≈ 26.0 km.",
            help: { rule: "Bearing measured from NORTH → the angle from north determines the cosine component for north.", steps: ["North component = 30 × cos(30°).", "cos(30°) ≈ 0.866.", "30 × 0.866 ≈ 25.98.", "Round: 26.0 km."] }
        },
        {
            id: "m-mcq-96", topic: "trig-bearings",
            q: "Harper walks 5 km on bearing 060°, then 4 km on bearing 150°. The two legs are PERPENDICULAR. Distance from start (1 dp)?",
            options: ["6.4 km", "9.0 km", "3.0 km", "1.0 km"], answer: 0,
            explain: "Bearings differ by 90° → right angle. Distance = √(5² + 4²) = √41 ≈ 6.4 km.",
            help: { rule: "If two legs meet at a right angle, use Pythagoras.", steps: ["150° − 60° = 90° → perpendicular.", "Distance² = 5² + 4² = 25 + 16 = 41.", "Distance = √41 ≈ 6.40 km."] }
        },

        /* ===== Expanded MCQs (m-mcq-97 onwards) ===== */

        /* indices-basic */
        {
            id: "m-mcq-97", topic: "indices-basic",
            q: "Simplify: (5x²)³",
            options: ["5x⁶", "125x⁵", "125x⁶", "15x⁶"], answer: 2,
            explain: "Cube each factor: 5³ = 125; (x²)³ = x⁶.",
            help: { rule: "(ab)ⁿ = aⁿbⁿ", steps: ["5³ = 125.", "(x²)³ = x⁶.", "Combine: 125x⁶."] }
        },
        {
            id: "m-mcq-98", topic: "indices-basic",
            q: "Evaluate: 2⁵ × 2³",
            options: ["2⁸ = 256", "2¹⁵", "2², 4", "64"], answer: 0,
            explain: "Add indices: 5 + 3 = 8 → 2⁸ = 256.",
            help: { rule: "Same base → add indices.", steps: ["5 + 3 = 8.", "2⁸ = 256."] }
        },
        {
            id: "m-mcq-99", topic: "indices-basic",
            q: "Simplify: (ab²)⁴ × ab",
            options: ["a⁵b⁹", "a⁴b⁹", "a⁵b⁸", "a⁵b¹⁰"], answer: 0,
            explain: "(ab²)⁴ = a⁴b⁸; multiply by ab → a⁵b⁹.",
            help: { rule: "Apply (ab)ⁿ then add indices.", steps: ["(ab²)⁴ = a⁴b⁸.", "× ab: a^(4+1) b^(8+1) = a⁵b⁹."] }
        },
        {
            id: "m-mcq-100", topic: "indices-basic",
            q: "Simplify: (6x⁴y²)(2x³y) ÷ (3x²y)",
            options: ["4x⁵y²", "4x⁵y", "4x⁹y²", "12x⁵y²"], answer: 0,
            explain: "Coefficients: 6×2/3 = 4. x: 4+3-2 = 5. y: 2+1-1 = 2 → 4x⁵y².",
            help: { rule: "Multiply numerators, then divide.", steps: ["Coefficients: (6×2)/3 = 4.", "x: 4 + 3 − 2 = 5.", "y: 2 + 1 − 1 = 2.", "Result: 4x⁵y²."] }
        },

        /* indices-negative */
        {
            id: "m-mcq-101", topic: "indices-negative",
            q: "Evaluate: 4⁻²",
            options: ["−16", "1/16", "−1/16", "16"], answer: 1,
            explain: "4⁻² = 1/4² = 1/16.",
            help: { rule: "a⁻ⁿ = 1/aⁿ.", steps: ["4⁻² = 1/4² = 1/16."] }
        },
        {
            id: "m-mcq-102", topic: "indices-negative",
            q: "Simplify: (3x)⁻³",
            options: ["1/(27x³)", "−27x³", "1/(3x³)", "−1/(27x³)"], answer: 0,
            explain: "(3x)⁻³ = 1/(3x)³ = 1/(27x³).",
            help: { rule: "Negative index applies to the whole bracket.", steps: ["(3x)³ = 27x³.", "Reciprocal: 1/(27x³)."] }
        },
        {
            id: "m-mcq-103", topic: "indices-negative",
            q: "Simplify: 2⁻¹ × 2⁻²",
            options: ["2⁻³ = 1/8", "2⁻²", "1/2", "1/16"], answer: 0,
            explain: "Add indices: −1 + (−2) = −3 → 2⁻³ = 1/8.",
            help: { rule: "Same base → add indices (works with negatives too).", steps: ["−1 + −2 = −3.", "2⁻³ = 1/2³ = 1/8."] }
        },
        {
            id: "m-mcq-104", topic: "indices-negative",
            q: "Simplify: (a/b)⁻²",
            options: ["a²/b²", "b²/a²", "−a²/b²", "1/(a²b²)"], answer: 1,
            explain: "Negative power of a fraction → flip and apply: (a/b)⁻² = (b/a)² = b²/a².",
            help: { rule: "(p/q)⁻ⁿ = (q/p)ⁿ.", steps: ["Flip the fraction: b/a.", "Square: b²/a²."] }
        },

        /* surds */
        {
            id: "m-mcq-105", topic: "surds",
            q: "Simplify: √45",
            options: ["3√5", "5√3", "9√5", "15"], answer: 0,
            explain: "45 = 9 × 5 → √45 = 3√5.",
            help: { rule: "Pull out the largest perfect-square factor.", steps: ["45 = 9 × 5.", "√45 = 3√5."] }
        },
        {
            id: "m-mcq-106", topic: "surds",
            q: "Simplify: 2√3 + 5√3",
            options: ["7√3", "7√6", "10√3", "7√9"], answer: 0,
            explain: "Like surds add directly: (2 + 5)√3 = 7√3.",
            help: { rule: "Add coefficients of like surds.", steps: ["2 + 5 = 7.", "Result: 7√3."] }
        },
        {
            id: "m-mcq-107", topic: "surds",
            q: "Simplify: √27 − √12",
            options: ["√15", "√3", "5√3", "3√3 − 2√3 = √3 ✓"], answer: 3,
            explain: "√27 = 3√3 and √12 = 2√3. Subtract: 3√3 − 2√3 = √3.",
            help: { rule: "Simplify each surd, then combine like surds.", steps: ["√27 = √(9×3) = 3√3.", "√12 = √(4×3) = 2√3.", "3√3 − 2√3 = √3."] }
        },
        {
            id: "m-mcq-108", topic: "surds",
            q: "Evaluate: (√6)²",
            options: ["√12", "6", "12", "36"], answer: 1,
            explain: "(√a)² = a → (√6)² = 6.",
            help: { rule: "Squaring undoes a square root.", steps: ["(√6)² = 6."] }
        },
        {
            id: "m-mcq-109", topic: "surds",
            q: "Evaluate: 27^(2/3)",
            options: ["18", "9", "12", "6"], answer: 1,
            explain: "27^(1/3) = 3; 3² = 9.",
            help: { rule: "a^(m/n) = (ⁿ√a)ᵐ.", steps: ["27^(1/3) = 3 (cube root).", "Then 3² = 9."] }
        },

        /* scientific */
        {
            id: "m-mcq-110", topic: "scientific",
            q: "Compute: (4 × 10⁻³) × (2 × 10⁵)",
            options: ["8 × 10²", "8 × 10⁻¹⁵", "6 × 10²", "8 × 10⁸"], answer: 0,
            explain: "4×2 = 8; add powers: −3 + 5 = 2 → 8 × 10².",
            help: { rule: "Multiply coefficients, ADD exponents.", steps: ["4 × 2 = 8.", "10⁻³ × 10⁵ = 10².", "Result: 8 × 10²."] }
        },
        {
            id: "m-mcq-111", topic: "scientific",
            q: "Express 0.0042 in scientific notation.",
            options: ["4.2 × 10⁻²", "4.2 × 10⁻³", "42 × 10⁻⁴", "0.42 × 10⁻²"], answer: 1,
            explain: "Decimal moves 3 places to the right → exponent −3.",
            help: { rule: "Small numbers → negative exponent.", steps: ["Place decimal at 4.2.", "Decimal moved 3 places right.", "Result: 4.2 × 10⁻³."] }
        },
        {
            id: "m-mcq-112", topic: "scientific",
            q: "Round 8.45 to 2 significant figures.",
            options: ["8.4", "8.45", "8.5", "9"], answer: 2,
            explain: "Next digit is 5 → round up. 8.4 becomes 8.5.",
            help: { rule: "Half-up rounding for 5 with no following digits (or with following non-zero).", steps: ["First 2 sig figs: 8 and 4.", "Next digit 5 → round up.", "Result: 8.5."] }
        },
        {
            id: "m-mcq-113", topic: "scientific",
            q: "(8 × 10⁻⁴) ÷ (4 × 10⁻²)",
            options: ["2 × 10⁻²", "2 × 10⁻⁶", "0.5 × 10⁻²", "32 × 10⁻⁶"], answer: 0,
            explain: "8/4 = 2; subtract powers: −4 − (−2) = −2 → 2 × 10⁻².",
            help: { rule: "Divide coefficients, SUBTRACT exponents.", steps: ["8 ÷ 4 = 2.", "10⁻⁴ ÷ 10⁻² = 10⁻⁴⁺² = 10⁻².", "Result: 2 × 10⁻²."] }
        },

        /* expansion */
        {
            id: "m-mcq-114", topic: "expansion",
            q: "Expand: (a − b)²",
            options: ["a² − b²", "a² + b²", "a² − 2ab + b²", "a² + 2ab + b²"], answer: 2,
            explain: "(a − b)² = a² − 2ab + b² (perfect square).",
            help: { rule: "(a − b)² = a² − 2ab + b².", steps: ["Square first: a².", "Cross: −2ab.", "Square last: b².", "Combine: a² − 2ab + b²."] }
        },
        {
            id: "m-mcq-115", topic: "expansion",
            q: "Expand: (3x + 1)(2x − 5)",
            options: ["6x² − 13x − 5", "6x² − 17x − 5", "6x² + 13x − 5", "6x² − 5"], answer: 0,
            explain: "FOIL: 6x² − 15x + 2x − 5 = 6x² − 13x − 5.",
            help: { rule: "FOIL.", steps: ["F: 3x × 2x = 6x².", "O: 3x × −5 = −15x.", "I: 1 × 2x = 2x.", "L: 1 × −5 = −5.", "Combine: 6x² − 13x − 5."] }
        },
        {
            id: "m-mcq-116", topic: "expansion",
            q: "Expand and simplify: 5(x + 2) − 3(x − 1)",
            options: ["2x + 13", "2x + 7", "8x + 7", "2x − 7"], answer: 0,
            explain: "5x + 10 − 3x + 3 = 2x + 13.",
            help: { rule: "Distribute then combine.", steps: ["5(x + 2) = 5x + 10.", "−3(x − 1) = −3x + 3.", "Sum: (5x − 3x) + (10 + 3) = 2x + 13."] }
        },
        {
            id: "m-mcq-117", topic: "expansion",
            q: "Simplify: (x + 3)² − x²",
            options: ["6x + 9", "6x − 9", "9", "2x + 9"], answer: 0,
            explain: "(x+3)² = x² + 6x + 9. Subtract x²: 6x + 9.",
            help: { rule: "Expand the square first, then simplify.", steps: ["(x + 3)² = x² + 6x + 9.", "− x² → 6x + 9."] }
        },
        {
            id: "m-mcq-118", topic: "expansion",
            q: "Expand: x(x² + 2x + 1)",
            options: ["x³ + 2x² + x", "x³ + 2x + x", "x² + 2x + 1", "x³ + 2x²"], answer: 0,
            explain: "Multiply each term by x.",
            help: { rule: "Distribute.", steps: ["x · x² = x³.", "x · 2x = 2x².", "x · 1 = x.", "Combine: x³ + 2x² + x."] }
        },

        /* alg-fractions */
        {
            id: "m-mcq-119", topic: "alg-fractions",
            q: "Simplify: (3x + 6)/(x + 2)",
            options: ["3", "3x + 4", "x + 6", "3 + 6/x"], answer: 0,
            explain: "Factor: 3(x + 2)/(x + 2) = 3 (x ≠ −2).",
            help: { rule: "Factor numerator and cancel.", steps: ["3x + 6 = 3(x + 2).", "Cancel (x + 2): result = 3."] }
        },
        {
            id: "m-mcq-120", topic: "alg-fractions",
            q: "Simplify: (x² − 9)/(x + 3) (assuming x ≠ −3)",
            options: ["x − 3", "x + 3", "x² − 3", "(x − 3)/x"], answer: 0,
            explain: "x² − 9 = (x − 3)(x + 3); cancel (x + 3) → x − 3.",
            help: { rule: "Difference of squares: a² − b² = (a − b)(a + b).", steps: ["x² − 9 = (x − 3)(x + 3).", "Cancel (x + 3): result = x − 3."] }
        },
        {
            id: "m-mcq-121", topic: "alg-fractions",
            q: "Simplify: 2x/3 − x/4",
            options: ["x/12", "5x/12", "11x/12", "x"], answer: 1,
            explain: "LCD 12: 8x/12 − 3x/12 = 5x/12.",
            help: { rule: "Find LCD; rewrite each fraction.", steps: ["LCD = 12.", "2x/3 = 8x/12; x/4 = 3x/12.", "Subtract: 5x/12."] }
        },
        {
            id: "m-mcq-122", topic: "alg-fractions",
            q: "Simplify: x/(x + 1) + 1/(x + 1)",
            options: ["1", "x + 1", "x", "(x + 1)²"], answer: 0,
            explain: "Same denominator: (x + 1)/(x + 1) = 1.",
            help: { rule: "Same denominator → add numerators.", steps: ["x + 1 over x + 1 = 1."] }
        },

        /* linear-eq */
        {
            id: "m-mcq-123", topic: "linear-eq",
            q: "Solve: 4 − 2x = 10",
            options: ["x = −3", "x = 3", "x = 7", "x = −7"], answer: 0,
            explain: "Subtract 4: −2x = 6; divide by −2: x = −3.",
            help: { rule: "Beware of negatives.", steps: ["−4: −2x = 6.", "÷ (−2): x = −3."] }
        },
        {
            id: "m-mcq-124", topic: "linear-eq",
            q: "Solve: 3(2x − 1) = 9",
            options: ["x = 2", "x = 1", "x = 3", "x = 5/3"], answer: 0,
            explain: "Expand 6x − 3 = 9; +3 → 6x = 12; ÷6 → x = 2.",
            help: { rule: "Expand first.", steps: ["6x − 3 = 9.", "+3: 6x = 12.", "÷6: x = 2."] }
        },
        {
            id: "m-mcq-125", topic: "linear-eq",
            q: "Solve: x/5 = −3",
            options: ["x = −15", "x = −2/5", "x = 15", "x = 5/3"], answer: 0,
            explain: "Multiply by 5: x = −15.",
            help: { rule: "× denominator on both sides.", steps: ["× 5: x = −15."] }
        },
        {
            id: "m-mcq-126", topic: "linear-eq",
            q: "Solve: 2x + 7 = 3x",
            options: ["x = 7", "x = −7", "x = 7/5", "x = 0"], answer: 0,
            explain: "Subtract 2x: 7 = x.",
            help: { rule: "Move variable terms to one side.", steps: ["−2x: 7 = x.", "x = 7."] }
        },

        /* linear-eq-multi */
        {
            id: "m-mcq-127", topic: "linear-eq-multi",
            q: "Solve: 4(x + 2) − 3(x − 1) = 12",
            options: ["x = 1", "x = −1", "x = 23", "x = 5"], answer: 0,
            explain: "4x + 8 − 3x + 3 = 12; x + 11 = 12; x = 1.",
            help: { rule: "Expand both brackets, simplify, isolate x.", steps: ["4(x+2) = 4x + 8.", "−3(x−1) = −3x + 3.", "Sum: x + 11 = 12.", "x = 1."] }
        },
        {
            id: "m-mcq-128", topic: "linear-eq-multi",
            q: "Solve: (x + 3)/2 − (x − 1)/3 = 1",
            options: ["x = −5", "x = 5", "x = −1", "x = 1"], answer: 0,
            explain: "× 6: 3(x + 3) − 2(x − 1) = 6 → 3x + 9 − 2x + 2 = 6 → x = −5.",
            help: { rule: "Multiply both sides by the LCD to clear fractions.", steps: ["LCD = 6; multiply: 3(x+3) − 2(x−1) = 6.", "Expand: 3x + 9 − 2x + 2 = 6.", "x + 11 = 6 → x = −5."] }
        },
        {
            id: "m-mcq-129", topic: "linear-eq-multi",
            q: "Solve: 2(3x − 1) = 4(x + 3)",
            options: ["x = 7", "x = −7", "x = 5", "x = 14"], answer: 0,
            explain: "6x − 2 = 4x + 12; 2x = 14; x = 7.",
            help: { rule: "Expand both sides; collect x.", steps: ["6x − 2 = 4x + 12.", "−4x: 2x − 2 = 12.", "+2: 2x = 14.", "÷2: x = 7."] }
        },
        {
            id: "m-mcq-130", topic: "linear-eq-multi",
            q: "Solve: 3x + 4 = 5x − 6",
            options: ["x = 5", "x = −5", "x = 1", "x = 10"], answer: 0,
            explain: "−3x: 4 = 2x − 6; +6: 10 = 2x; x = 5.",
            help: { rule: "Variables on one side, numbers on the other.", steps: ["−3x both sides: 4 = 2x − 6.", "+6: 10 = 2x.", "÷2: x = 5."] }
        },

        /* quadratic-monic */
        {
            id: "m-mcq-131", topic: "quadratic-monic",
            q: "Solve: x² − 7x + 12 = 0",
            options: ["x = 3 or 4", "x = −3 or −4", "x = 2 or 6", "x = 1 or 12"], answer: 0,
            explain: "Factor (x − 3)(x − 4) = 0 → x = 3 or 4.",
            help: { rule: "p,q with pq = 12, p+q = 7: 3 and 4.", steps: ["Find pair → 3 and 4.", "(x − 3)(x − 4) = 0.", "x = 3 or 4."] }
        },
        {
            id: "m-mcq-132", topic: "quadratic-monic",
            q: "Solve: x² − x − 12 = 0",
            options: ["x = 4 or −3", "x = −4 or 3", "x = 4 or 3", "x = −4 or −3"], answer: 0,
            explain: "(x − 4)(x + 3) = 0 → x = 4 or −3.",
            help: { rule: "pq = −12, p+q = −1: −4 and 3.", steps: ["Pair: −4 and 3.", "(x − 4)(x + 3) = 0.", "x = 4 or x = −3."] }
        },
        {
            id: "m-mcq-133", topic: "quadratic-monic",
            q: "Solve: x² − 16 = 0",
            options: ["x = ±4", "x = 4 only", "x = ±16", "x = 0 or 16"], answer: 0,
            explain: "x² = 16 → x = ±4.",
            help: { rule: "Difference of squares OR direct root.", steps: ["x² = 16.", "x = ±4."] }
        },
        {
            id: "m-mcq-134", topic: "quadratic-monic",
            q: "Solve: x² + 4x = 0",
            options: ["x = 0 or −4", "x = 0 or 4", "x = ±2", "x = −4 only"], answer: 0,
            explain: "Factor x(x + 4) = 0 → x = 0 or x = −4.",
            help: { rule: "Always factor common x first.", steps: ["x(x + 4) = 0.", "x = 0 or x = −4."] }
        },

        /* inequalities */
        {
            id: "m-mcq-135", topic: "inequalities",
            q: "Solve: 4 − x > 1",
            options: ["x < 3", "x > 3", "x < −3", "x > −3"], answer: 0,
            explain: "−4: −x > −3; ÷(−1) AND flip: x < 3.",
            help: { rule: "Flip when ÷ by negative.", steps: ["−4: −x > −3.", "× (−1) flip: x < 3."] }
        },
        {
            id: "m-mcq-136", topic: "inequalities",
            q: "Solve: 2x − 7 ≤ 5",
            options: ["x ≤ 6", "x ≥ 6", "x ≤ 1", "x ≥ −1"], answer: 0,
            explain: "+7: 2x ≤ 12; ÷2: x ≤ 6.",
            help: { rule: "Inequalities solve like equations (no flip when × positive).", steps: ["+7: 2x ≤ 12.", "÷2: x ≤ 6."] }
        },
        {
            id: "m-mcq-137", topic: "inequalities",
            q: "Solve: −x ≥ 4",
            options: ["x ≤ −4", "x ≥ −4", "x ≤ 4", "x ≥ 4"], answer: 0,
            explain: "× (−1) flips: x ≤ −4.",
            help: { rule: "Multiplying by −1 flips the inequality.", steps: ["× (−1) and flip: x ≤ −4."] }
        },

        /* quadratic-nonmonic */
        {
            id: "m-mcq-138", topic: "quadratic-nonmonic",
            q: "Solve: 6x² + x − 1 = 0",
            options: ["x = 1/3 or −1/2", "x = −1/3 or 1/2", "x = 1 or −1", "x = 6 or 1"], answer: 0,
            explain: "(3x − 1)(2x + 1) = 0 → x = 1/3 or −1/2.",
            help: { rule: "ac = −6; pair summing to 1: 3 and −2.", steps: ["Split: 6x² + 3x − 2x − 1.", "Group: 3x(2x + 1) − 1(2x + 1).", "(3x − 1)(2x + 1) = 0.", "x = 1/3 or −1/2."] }
        },
        {
            id: "m-mcq-139", topic: "quadratic-nonmonic",
            q: "Solve: 2x² − 8x = 0",
            options: ["x = 0 or 4", "x = 0 or 2", "x = ±4", "x = 8 or 0"], answer: 0,
            explain: "Factor 2x(x − 4) = 0 → x = 0 or 4.",
            help: { rule: "Always factor common terms first.", steps: ["2x(x − 4) = 0.", "x = 0 or x = 4."] }
        },
        {
            id: "m-mcq-140", topic: "quadratic-nonmonic",
            q: "Solve x² + 5x + 2 = 0 using the quadratic formula. (Exact form)",
            options: ["x = (−5 ± √17)/2", "x = (−5 ± √33)/2", "x = (5 ± √17)/2", "No real solution"], answer: 0,
            explain: "Discriminant = 25 − 8 = 17 → x = (−5 ± √17)/2.",
            help: { rule: "x = (−b ± √(b²−4ac))/(2a).", steps: ["a=1, b=5, c=2.", "Disc = 25 − 8 = 17.", "x = (−5 ± √17)/2."] }
        },
        {
            id: "m-mcq-141", topic: "quadratic-nonmonic",
            q: "Solve: 4x² = 25",
            options: ["x = ±5/2", "x = 5/2 only", "x = ±25/4", "x = ±5"], answer: 0,
            explain: "x² = 25/4 → x = ±5/2.",
            help: { rule: "Divide both sides by 4 first.", steps: ["x² = 25/4.", "x = ±√(25/4) = ±5/2."] }
        },

        /* simultaneous */
        {
            id: "m-mcq-142", topic: "simultaneous",
            q: "Solve: 3x + y = 10, x − y = 2",
            options: ["x = 3, y = 1", "x = 1, y = 3", "x = 2, y = 4", "x = 4, y = −2"], answer: 0,
            explain: "Add equations: 4x = 12 → x = 3; sub → y = 1.",
            help: { rule: "Elimination — add to remove y.", steps: ["(3x + y) + (x − y) = 10 + 2.", "4x = 12 → x = 3.", "Sub into x − y = 2: 3 − y = 2 → y = 1."] }
        },
        {
            id: "m-mcq-143", topic: "simultaneous",
            q: "Solve: 2x + 3y = 13, x + y = 5",
            options: ["x = 2, y = 3", "x = 3, y = 2", "x = 1, y = 4", "x = 4, y = 1"], answer: 0,
            explain: "From eq 2: x = 5 − y. Sub: 2(5 − y) + 3y = 13 → 10 + y = 13 → y = 3, x = 2.",
            help: { rule: "Substitution.", steps: ["x = 5 − y.", "2(5 − y) + 3y = 13.", "10 − 2y + 3y = 13 → y = 3.", "x = 5 − 3 = 2."] }
        },
        {
            id: "m-mcq-144", topic: "simultaneous",
            q: "Solve: y = 2x and x + y = 9",
            options: ["x = 3, y = 6", "x = 6, y = 3", "x = 9, y = 18", "x = 2, y = 4"], answer: 0,
            explain: "Sub y = 2x: x + 2x = 9 → 3x = 9 → x = 3, y = 6.",
            help: { rule: "Substitution.", steps: ["x + 2x = 9.", "3x = 9 → x = 3.", "y = 2(3) = 6."] }
        },
        {
            id: "m-mcq-145", topic: "simultaneous",
            q: "Solve: 5x − 2y = 4, 3x + 2y = 12",
            options: ["x = 2, y = 3", "x = 1, y = 1/2", "x = 4, y = 8", "x = 0, y = 6"], answer: 0,
            explain: "Add equations: 8x = 16 → x = 2. Sub: 6 + 2y = 12 → y = 3.",
            help: { rule: "Elimination removes y when coefficients are opposite.", steps: ["(5x − 2y) + (3x + 2y) = 4 + 12.", "8x = 16 → x = 2.", "Sub: 3(2) + 2y = 12 → 2y = 6 → y = 3."] }
        },

        /* midpoint-gradient */
        {
            id: "m-mcq-146", topic: "midpoint-gradient",
            q: "Gradient of the line through (0, 0) and (5, −10).",
            options: ["−2", "2", "−1/2", "−5"], answer: 0,
            explain: "(−10 − 0)/(5 − 0) = −10/5 = −2.",
            help: { rule: "m = Δy/Δx.", steps: ["Δy = −10.", "Δx = 5.", "m = −2."] }
        },
        {
            id: "m-mcq-147", topic: "midpoint-gradient",
            q: "Distance between (2, 3) and (5, 7).",
            options: ["3", "4", "5", "7"], answer: 2,
            explain: "Δx = 3, Δy = 4 → √(9 + 16) = √25 = 5.",
            help: { rule: "d = √(Δx² + Δy²).", steps: ["Δx = 3, Δy = 4.", "9 + 16 = 25.", "√25 = 5."] }
        },
        {
            id: "m-mcq-148", topic: "midpoint-gradient",
            q: "Midpoint of (−2, −3) and (4, 5).",
            options: ["(1, 1)", "(2, 2)", "(1, 2)", "(3, 4)"], answer: 0,
            explain: "((−2 + 4)/2, (−3 + 5)/2) = (1, 1).",
            help: { rule: "Average each coordinate.", steps: ["x: (−2 + 4)/2 = 1.", "y: (−3 + 5)/2 = 1."] }
        },
        {
            id: "m-mcq-149", topic: "midpoint-gradient",
            q: "Gradient of the line through (3, 4) and (3, 7).",
            options: ["0", "Undefined (vertical line)", "3", "1"], answer: 1,
            explain: "Δx = 0 → division by zero — gradient is undefined for vertical lines.",
            help: { rule: "Vertical lines: gradient undefined; horizontal lines: gradient 0.", steps: ["Δx = 0.", "m undefined (vertical line x = 3)."] }
        },

        /* slope-intercept */
        {
            id: "m-mcq-150", topic: "slope-intercept",
            q: "Rewrite 2y = 6x − 8 in slope-intercept form and state its gradient.",
            options: ["y = 3x − 4; m = 3", "y = 6x − 8; m = 6", "y = 3x − 8; m = 3", "y = 2x − 4; m = 2"], answer: 0,
            explain: "Divide both sides by 2 → y = 3x − 4.",
            help: { rule: "Make y the subject, then read m and c.", steps: ["÷2: y = 3x − 4.", "m = 3, c = −4."] }
        },
        {
            id: "m-mcq-151", topic: "slope-intercept",
            q: "Which point lies on y = −x + 2?",
            options: ["(0, 2)", "(2, 0) and (0, 2)", "(0, 2) only — the others are different", "(0, 2) — and any (a, 2 − a)"], answer: 3,
            explain: "Both (0,2) and (2,0) satisfy y = −x + 2. In fact infinitely many points (a, 2 − a) lie on the line.",
            help: { rule: "Test by substitution.", steps: ["(0, 2): 2 = −0 + 2 ✓.", "(2, 0): 0 = −2 + 2 ✓.", "Both lie on the line."] }
        },
        {
            id: "m-mcq-152", topic: "slope-intercept",
            q: "Gradient of the horizontal line y = 4.",
            options: ["0", "4", "Undefined", "1"], answer: 0,
            explain: "Horizontal lines have gradient 0 (no rise).",
            help: { rule: "y = c has m = 0.", steps: ["No rise → 0/Δx = 0."] }
        },
        {
            id: "m-mcq-153", topic: "slope-intercept",
            q: "Gradient of the vertical line x = 2.",
            options: ["0", "Undefined", "2", "1"], answer: 1,
            explain: "Vertical lines have undefined gradient (Δx = 0).",
            help: { rule: "x = k → vertical → m undefined.", steps: ["Δx = 0 → division by zero → undefined."] }
        },

        /* lines-perp */
        {
            id: "m-mcq-154", topic: "lines-perp",
            q: "What gradient is perpendicular to y = −3x + 1?",
            options: ["1/3", "−1/3", "3", "−3"], answer: 0,
            explain: "Negative reciprocal of −3 is 1/3.",
            help: { rule: "Perpendicular = negative reciprocal.", steps: ["−3 → reciprocal 1/(−3) = −1/3 → negate → 1/3."] }
        },
        {
            id: "m-mcq-155", topic: "lines-perp",
            q: "Equation through (0, 5) parallel to y = 2x.",
            options: ["y = 2x + 5", "y = 2x − 5", "y = −2x + 5", "y = (1/2)x + 5"], answer: 0,
            explain: "Same gradient 2; y-intercept 5 → y = 2x + 5.",
            help: { rule: "Parallel ⇒ same gradient.", steps: ["m = 2, c = 5.", "y = 2x + 5."] }
        },
        {
            id: "m-mcq-156", topic: "lines-perp",
            q: "Two lines are PERPENDICULAR if their gradients:",
            options: [
                "Are equal",
                "Multiply to −1",
                "Add to 0",
                "Are both 0"
            ],
            answer: 1,
            explain: "m₁ × m₂ = −1 ⇔ perpendicular.",
            help: { rule: "Memorise the product test.", steps: ["m₁ × m₂ = −1 → perpendicular."] }
        },
        {
            id: "m-mcq-157", topic: "lines-perp",
            q: "Equation perpendicular to y = (2/5)x − 1, passing through (0, 0).",
            options: ["y = −5x/2", "y = 5x/2", "y = −2x/5", "y = (5/2)x − 1"], answer: 0,
            explain: "Perpendicular gradient = −5/2; through origin → y = (−5/2)x.",
            help: { rule: "Perpendicular gradient = negative reciprocal.", steps: ["Original m = 2/5.", "Perp m = −5/2.", "Through origin: y = −(5/2)x."] }
        },

        /* trig-sides */
        {
            id: "m-mcq-158", topic: "trig-sides",
            q: "Exact value of sin(60°).",
            options: ["1/2", "√2/2", "√3/2", "1"], answer: 2,
            explain: "30-60-90 triangle: sin(60°) = √3/2.",
            help: { rule: "Memorise: sin(30°)=1/2, sin(45°)=√2/2, sin(60°)=√3/2.", steps: ["sin(60°) = √3/2 ≈ 0.866."] }
        },
        {
            id: "m-mcq-159", topic: "trig-sides",
            q: "25° angle, opposite = 4. Find adjacent (1 dp).",
            options: ["8.6", "1.9", "11.3", "2.2"], answer: 0,
            explain: "tan(25°) = 4/adj → adj = 4/tan(25°) ≈ 4/0.4663 ≈ 8.58.",
            help: { rule: "tan = opp/adj → adj = opp / tan θ.", steps: ["tan(25°) ≈ 0.4663.", "adj ≈ 4/0.4663 ≈ 8.58.", "Round: 8.6."] }
        },
        {
            id: "m-mcq-160", topic: "trig-sides",
            q: "45° angle, hypotenuse = 10. Find opposite (1 dp).",
            options: ["7.1", "5.0", "10.0", "14.1"], answer: 0,
            explain: "10 × sin(45°) = 10 × √2/2 ≈ 7.07.",
            help: { rule: "opp = hyp × sin θ.", steps: ["sin(45°) = √2/2 ≈ 0.7071.", "10 × 0.7071 ≈ 7.07.", "Round: 7.1."] }
        },
        {
            id: "m-mcq-161", topic: "trig-sides",
            q: "Right triangle with both legs 6 cm. Find hypotenuse (exact).",
            options: ["6√2", "12", "6", "√12"], answer: 0,
            explain: "h = √(36 + 36) = √72 = 6√2.",
            help: { rule: "Pythagoras: h² = a² + b².", steps: ["6² + 6² = 72.", "√72 = √(36 × 2) = 6√2."] }
        },

        /* trig-angles */
        {
            id: "m-mcq-162", topic: "trig-angles",
            q: "If sin θ = 1/2, find θ (acute).",
            options: ["30°", "45°", "60°", "90°"], answer: 0,
            explain: "sin(30°) = 1/2.",
            help: { rule: "Memorise standard angles.", steps: ["sin(30°) = 1/2.", "θ = 30°."] }
        },
        {
            id: "m-mcq-163", topic: "trig-angles",
            q: "Evaluate tan(45°).",
            options: ["0", "1", "√2", "√3"], answer: 1,
            explain: "Equal opposite and adjacent → tan(45°) = 1.",
            help: { rule: "tan(45°) = 1.", steps: ["At 45° the legs are equal.", "tan = opp/adj = 1."] }
        },
        {
            id: "m-mcq-164", topic: "trig-angles",
            q: "Triangle with opp = 7, hyp = 14. Find θ.",
            options: ["30°", "45°", "60°", "90°"], answer: 0,
            explain: "sin θ = 7/14 = 1/2 → θ = 30°.",
            help: { rule: "Use SOH.", steps: ["sin θ = 1/2.", "θ = 30°."] }
        },
        {
            id: "m-mcq-165", topic: "trig-angles",
            q: "Triangle with adj = 4, hyp = 8. Find θ.",
            options: ["30°", "45°", "60°", "90°"], answer: 2,
            explain: "cos θ = 4/8 = 1/2 → θ = 60°.",
            help: { rule: "Use CAH.", steps: ["cos θ = 1/2.", "θ = 60°."] }
        },

        /* trig-elev */
        {
            id: "m-mcq-166", topic: "trig-elev",
            q: "A building 50 m tall is observed from 100 m away. Find the angle of elevation (1 dp).",
            options: ["26.6°", "30.0°", "45.0°", "63.4°"], answer: 0,
            explain: "tan θ = 50/100 = 0.5 → θ = tan⁻¹(0.5) ≈ 26.57°.",
            help: { rule: "tan(elevation) = vertical / horizontal.", steps: ["tan θ = 50/100 = 0.5.", "tan⁻¹(0.5) ≈ 26.57°.", "Round: 26.6°."] }
        },
        {
            id: "m-mcq-167", topic: "trig-elev",
            q: "A plane at 1 km altitude has a 15° angle of depression to a runway. Distance to the runway (nearest m)?",
            options: ["3 732 m", "1 035 m", "268 m", "4 000 m"], answer: 0,
            explain: "tan(15°) = 1000/d → d = 1000/tan(15°) ≈ 3 732 m.",
            help: { rule: "tan(depression) = vertical / horizontal.", steps: ["tan(15°) ≈ 0.2679.", "d = 1000/0.2679 ≈ 3 732 m."] }
        },
        {
            id: "m-mcq-168", topic: "trig-elev",
            q: "Top of a tree is at 30° elevation from 25 m away. Tree height (1 dp)?",
            options: ["12.5 m", "14.4 m", "21.7 m", "43.3 m"], answer: 1,
            explain: "h = 25 × tan(30°) ≈ 25 × 0.5774 ≈ 14.43 m.",
            help: { rule: "h = horizontal × tan(elevation).", steps: ["tan(30°) = 1/√3 ≈ 0.5774.", "25 × 0.5774 ≈ 14.43.", "Round: 14.4 m."] }
        },
        {
            id: "m-mcq-169", topic: "trig-elev",
            q: "Eye level 1.6 m, 30 m from a tower, top at 40° elevation. Tower height (1 dp)?",
            options: ["19.6 m", "26.8 m", "23.0 m", "30.0 m"], answer: 1,
            explain: "Top above eye = 30 × tan(40°) ≈ 25.17. Add eye level: 25.17 + 1.6 ≈ 26.77.",
            help: { rule: "Add observer eye-level for absolute height.", steps: ["Vertical above eye: 30 × tan(40°) ≈ 25.17.", "Add 1.6 (eye height).", "Total ≈ 26.77 m → 26.8 m."] }
        },

        /* trig-bearings */
        {
            id: "m-mcq-170", topic: "trig-bearings",
            q: "A bearing of 270° corresponds to:",
            options: ["North", "East", "South", "West"], answer: 3,
            explain: "Bearings clockwise from N: 000=N, 090=E, 180=S, 270=W.",
            help: { rule: "Compass bearings clockwise from north.", steps: ["270° = West."] }
        },
        {
            id: "m-mcq-171", topic: "trig-bearings",
            q: "If the bearing of B from A is 200°, what is the bearing of A from B?",
            options: ["020°", "200°", "160°", "340°"], answer: 0,
            explain: "Reverse bearing = 200 − 180 = 020°.",
            help: { rule: "Reverse bearing = original ± 180° (keep within 000°–360°).", steps: ["200 − 180 = 20.", "Bearing 020°."] }
        },
        {
            id: "m-mcq-172", topic: "trig-bearings",
            q: "Harper sails 10 km on bearing 090° then 6 km on bearing 180°. Distance from start (1 dp)?",
            options: ["11.7 km", "16.0 km", "8.0 km", "13.0 km"], answer: 0,
            explain: "East then south = right angle. Distance = √(100 + 36) = √136 ≈ 11.66 km.",
            help: { rule: "Perpendicular legs → Pythagoras.", steps: ["Δ = 90° (E to S).", "d² = 10² + 6² = 136.", "d = √136 ≈ 11.66 km."] }
        }
    ],

    short: [
        {
            id: "m-sa-1", topic: "indices-basic",
            q: "Simplify: (2a²b³)³",
            sample: "= 2³ × (a²)³ × (b³)³ = 8a⁶b⁹.", marks: 2,
            help: { rule: "(ab)ⁿ = aⁿbⁿ; (aᵐ)ⁿ = aᵐⁿ.", steps: ["2³ = 8.", "(a²)³ = a⁶.", "(b³)³ = b⁹.", "Combine: 8a⁶b⁹."] }
        },
        {
            id: "m-sa-2", topic: "surds",
            q: "Rationalise the denominator and simplify: 6/√3.",
            sample: "Multiply by √3/√3: (6√3)/3 = 2√3.", marks: 2,
            help: { rule: "Multiply numerator and denominator by the surd in the denominator.", steps: ["6/√3 × √3/√3.", "Top: 6√3.", "Bottom: 3.", "Result: 6√3/3 = 2√3."] }
        },
        {
            id: "m-sa-3", topic: "expansion",
            q: "Expand and simplify: (2x − 3)² + 4x.",
            sample: "(2x − 3)² = 4x² − 12x + 9. Add 4x: 4x² − 8x + 9.", marks: 3,
            help: { rule: "(a − b)² = a² − 2ab + b².", steps: ["(2x)² − 2(2x)(3) + 3² = 4x² − 12x + 9.", "Add 4x: 4x² − 12x + 9 + 4x.", "Combine like terms: 4x² − 8x + 9."] }
        },
        {
            id: "m-sa-4", topic: "linear-eq-multi",
            q: "Solve: (x − 1)/3 = (x + 5)/4.",
            sample: "Cross-multiply: 4(x − 1) = 3(x + 5) → 4x − 4 = 3x + 15 → x = 19.", marks: 3,
            help: { rule: "Cross-multiply.", steps: ["4(x−1) = 3(x+5).", "4x − 4 = 3x + 15.", "x − 4 = 15.", "x = 19."] }
        },
        {
            id: "m-sa-5", topic: "quadratic-monic",
            q: "Solve x² + 2x − 15 = 0 by factorising.",
            sample: "Need product −15, sum +2: 5 and −3. (x + 5)(x − 3) = 0 → x = −5 or 3.", marks: 3,
            help: { rule: "Find p, q with pq = c, p+q = b.", steps: ["pq = −15, p + q = 2 → 5 and −3.", "(x + 5)(x − 3) = 0.", "x = −5 or x = 3."] }
        },
        {
            id: "m-sa-6", topic: "simultaneous",
            q: "Solve simultaneously: 3x + 2y = 12 and x − y = 1.",
            sample: "From eqn 2: x = y + 1. Sub: 3(y+1) + 2y = 12 → 5y + 3 = 12 → y = 9/5 = 1.8; x = 2.8.", marks: 4,
            help: { rule: "Substitution method.", steps: ["From x − y = 1: x = y + 1.", "Sub into 3x + 2y = 12: 3(y+1) + 2y = 12.", "3y + 3 + 2y = 12 → 5y = 9 → y = 1.8.", "x = 1.8 + 1 = 2.8."] }
        },
        {
            id: "m-sa-7", topic: "lines-perp",
            q: "Find the equation of the line through (2, 5) with gradient 3.",
            sample: "y − 5 = 3(x − 2) → y = 3x − 1.", marks: 3,
            help: { rule: "Point-gradient form.", steps: ["Substitute: y − 5 = 3(x − 2).", "Expand: y − 5 = 3x − 6.", "Add 5: y = 3x − 1."] }
        },
        {
            id: "m-sa-8", topic: "trig-sides",
            q: "A 6 m ladder leans against a wall, base 2 m from the wall. Find the angle the ladder makes with the ground (1 dp).",
            sample: "cos θ = 2/6 = 1/3. θ = cos⁻¹(1/3) ≈ 70.5°.", marks: 3,
            help: { rule: "CAH: cos θ = adj/hyp.", steps: ["cos θ = 2/6 = 1/3.", "θ = cos⁻¹(1/3) ≈ 70.53°.", "Round: 70.5°."] }
        },
        {
            id: "m-sa-9", topic: "scientific",
            q: "The mass of a hydrogen atom is about 1.67 × 10⁻²⁷ kg. Express in ordinary form to 3 sig figs.",
            sample: "0.000 000 000 000 000 000 000 000 001 67 kg (move the decimal 27 places left from 1.67).", marks: 2,
            help: { rule: "Negative exponent → small number; move decimal LEFT.", steps: ["Start with 1.67.", "Move decimal 27 places left.", "Result: 1.67 × 10⁻²⁷ = 0.000…00167 (1.67 preceded by 26 zeros after the decimal)."] }
        },
        {
            id: "m-sa-10", topic: "trig-bearings",
            q: "A walker travels 4 km north, then 3 km east. Find their bearing from the start (nearest degree) and distance.",
            sample: "Distance = √(16+9) = 5 km. Bearing = arctan(3/4) ≈ 36.87° → bearing 037°.", marks: 4,
            help: { rule: "Bearings are measured clockwise from north. Use tan = east/north.", steps: ["Distance: √(4² + 3²) = √25 = 5 km.", "Angle from north: tan⁻¹(3/4) ≈ 36.87°.", "Bearing = 037° (rounded)."] }
        },

        /* ===== Expanded SAs ===== */
        { id: "m-sa-11", topic: "indices-basic", marks: 3,
          q: "Simplify: (3x²y)² × (xy²)",
          sample: "(3x²y)² = 9x⁴y². × (xy²) = 9x⁵y⁴.",
          help: { rule: "Square first, then multiply.", steps: ["(3x²y)² = 9 × x⁴ × y².", "Multiply by xy²: 9x⁵y⁴."] } },
        { id: "m-sa-12", topic: "surds", marks: 3,
          q: "Simplify: √20 + √45",
          sample: "√20 = 2√5; √45 = 3√5. Sum = 5√5.",
          help: { rule: "Simplify each surd, then add like surds.", steps: ["√20 = 2√5.", "√45 = 3√5.", "Sum: 5√5."] } },
        { id: "m-sa-13", topic: "surds", marks: 2,
          q: "Rationalise the denominator: 4/√5",
          sample: "× √5/√5: (4√5)/5.",
          help: { rule: "Multiply numerator and denominator by the surd.", steps: ["4/√5 × √5/√5.", "= 4√5/5."] } },
        { id: "m-sa-14", topic: "scientific", marks: 2,
          q: "The Earth–Sun distance is approximately 150,000,000 km. Express in scientific notation.",
          sample: "1.5 × 10⁸ km.",
          help: { rule: "Place decimal so one non-zero digit precedes it.", steps: ["1.5 × 10⁸."] } },
        { id: "m-sa-15", topic: "scientific", marks: 3,
          q: "Compute (3 × 10⁻²) × (6 × 10⁴), giving the answer in standard form.",
          sample: "3×6 = 18. Powers: −2 + 4 = 2 → 18 × 10² → standard: 1.8 × 10³.",
          help: { rule: "After multiplying, normalise so the coefficient is between 1 and 10.", steps: ["18 × 10² = 1.8 × 10³."] } },
        { id: "m-sa-16", topic: "expansion", marks: 4,
          q: "Expand and simplify: (2x − 1)(3x² + 5x − 2).",
          sample: "= 2x(3x² + 5x − 2) − (3x² + 5x − 2) = 6x³ + 10x² − 4x − 3x² − 5x + 2 = 6x³ + 7x² − 9x + 2.",
          help: { rule: "Distribute each term across all the others, then combine.", steps: ["2x(3x² + 5x − 2) = 6x³ + 10x² − 4x.", "−1(3x² + 5x − 2) = −3x² − 5x + 2.", "Combine: 6x³ + 7x² − 9x + 2."] } },
        { id: "m-sa-17", topic: "alg-fractions", marks: 2,
          q: "Simplify: (x² − 1)/(x − 1)",
          sample: "Factor: (x − 1)(x + 1)/(x − 1) = x + 1 (x ≠ 1).",
          help: { rule: "Difference of squares.", steps: ["x² − 1 = (x − 1)(x + 1).", "Cancel: x + 1."] } },
        { id: "m-sa-18", topic: "linear-eq", marks: 3,
          q: "Solve: 5(x − 3) = 2(x + 6)",
          sample: "5x − 15 = 2x + 12 → 3x = 27 → x = 9.",
          help: { rule: "Expand both sides, collect like terms.", steps: ["5x − 15 = 2x + 12.", "3x = 27.", "x = 9."] } },
        { id: "m-sa-19", topic: "linear-eq-multi", marks: 3,
          q: "Solve: x/2 − x/3 = 1",
          sample: "× 6: 3x − 2x = 6 → x = 6.",
          help: { rule: "Multiply by LCD to clear fractions.", steps: ["LCD = 6.", "3x − 2x = 6.", "x = 6."] } },
        { id: "m-sa-20", topic: "linear-eq-multi", marks: 3,
          q: "Solve: (2x − 1)/3 = (x + 1)/2",
          sample: "Cross-multiply: 2(2x − 1) = 3(x + 1) → 4x − 2 = 3x + 3 → x = 5.",
          help: { rule: "Cross-multiply.", steps: ["2(2x−1) = 3(x+1).", "4x − 2 = 3x + 3.", "x = 5."] } },
        { id: "m-sa-21", topic: "quadratic-monic", marks: 3,
          q: "Solve x² + 9x + 14 = 0 by factorising.",
          sample: "Pair: 7 and 2. (x + 7)(x + 2) = 0 → x = −7 or x = −2.",
          help: { rule: "p+q = b, pq = c.", steps: ["Pair: 7 and 2.", "(x + 7)(x + 2) = 0.", "x = −7 or x = −2."] } },
        { id: "m-sa-22", topic: "quadratic-nonmonic", marks: 4,
          q: "Solve 3x² − 7x + 2 = 0 by factorising.",
          sample: "ac = 6; pair −6 and −1. Split: 3x² − 6x − x + 2 = (3x − 1)(x − 2). x = 1/3 or 2.",
          help: { rule: "Split the middle term using ac.", steps: ["a×c = 6.", "Pair: −6 and −1.", "(3x − 1)(x − 2) = 0.", "x = 1/3 or 2."] } },
        { id: "m-sa-23", topic: "quadratic-monic", marks: 2,
          q: "Solve: 2x³ = 16",
          sample: "x³ = 8 → x = ∛8 = 2.",
          help: { rule: "Divide first to isolate x³.", steps: ["÷2: x³ = 8.", "Cube root: x = 2."] } },
        { id: "m-sa-24", topic: "inequalities", marks: 3,
          q: "Solve and graph on a number line: −2x + 5 ≥ 11.",
          sample: "−2x ≥ 6 → ÷ (−2) flip: x ≤ −3. Closed dot at −3, arrow pointing left.",
          help: { rule: "Flip when ÷ by negative.", steps: ["−5: −2x ≥ 6.", "÷ (−2) flip: x ≤ −3."] } },
        { id: "m-sa-25", topic: "simultaneous", marks: 4,
          q: "Solve: 2x + 3y = 7 and x − y = 1.",
          sample: "x = y + 1; sub: 2(y + 1) + 3y = 7 → 5y + 2 = 7 → y = 1, x = 2.",
          help: { rule: "Substitution.", steps: ["x = y + 1.", "2(y+1) + 3y = 7.", "5y + 2 = 7 → y = 1.", "x = 2."] } },
        { id: "m-sa-26", topic: "midpoint-gradient", marks: 3,
          q: "Find the equation of the line through (1, 3) and (4, 9).",
          sample: "m = (9 − 3)/(4 − 1) = 2. y − 3 = 2(x − 1) → y = 2x + 1.",
          help: { rule: "Find m, then use point-gradient.", steps: ["m = 6/3 = 2.", "y − 3 = 2(x − 1).", "y = 2x + 1."] } },
        { id: "m-sa-27", topic: "lines-perp", marks: 3,
          q: "Find the equation parallel to y = −2x + 1 passing through (3, −1).",
          sample: "Same gradient −2: y + 1 = −2(x − 3) → y = −2x + 5.",
          help: { rule: "Parallel ⇒ same gradient.", steps: ["m = −2.", "y + 1 = −2(x − 3).", "y = −2x + 5."] } },
        { id: "m-sa-28", topic: "lines-perp", marks: 3,
          q: "Find the equation perpendicular to y = (1/2)x + 3 passing through (4, 0).",
          sample: "Perp gradient = −2. y = −2(x − 4) → y = −2x + 8.",
          help: { rule: "Perpendicular gradient = negative reciprocal.", steps: ["m perp = −2.", "y − 0 = −2(x − 4).", "y = −2x + 8."] } },
        { id: "m-sa-29", topic: "trig-elev", marks: 3,
          q: "From a boat 200 m offshore, the angle of elevation to the top of a lighthouse is 8°. Find the lighthouse height (1 dp).",
          sample: "h = 200 × tan(8°) ≈ 200 × 0.1405 ≈ 28.1 m.",
          help: { rule: "h = horizontal × tan(elevation).", steps: ["tan(8°) ≈ 0.1405.", "200 × 0.1405 ≈ 28.10 m."] } },
        { id: "m-sa-30", topic: "trig-bearings", marks: 4,
          q: "Harper walks 6 km north, then 8 km east. Find her DISTANCE and BEARING from her starting point.",
          sample: "d = √(36 + 64) = 10 km. tan⁻¹(8/6) ≈ 53.13° → bearing 053°.",
          help: { rule: "tan(bearing from N) = east/north.", steps: ["d = √(6²+8²) = √100 = 10 km.", "θ = tan⁻¹(8/6) ≈ 53.13°.", "Bearing 053°."] } }
    ],

    long: [
        {
            id: "m-la-1", topic: "midpoint-gradient",
            q: "Given A(−1, 2) and B(5, 14):\n(a) Find the gradient of AB.\n(b) Find the midpoint M of AB.\n(c) Find the length of AB (exact value).\n(d) Write the equation of the line through A and B.",
            sample: "(a) m = (14 − 2)/(5 − (−1)) = 12/6 = 2. (b) M = ((−1 + 5)/2, (2 + 14)/2) = (2, 8). (c) d = √((5 − (−1))² + (14 − 2)²) = √(36 + 144) = √180 = 6√5. (d) y − 2 = 2(x − (−1)) → y = 2x + 4.", marks: 8,
            help: {
                rule: "Use four formulas: gradient, midpoint, distance, and point-gradient form.",
                steps: [
                    "(a) m = (y₂ − y₁)/(x₂ − x₁) = (14 − 2)/(5 + 1) = 12/6 = 2.",
                    "(b) M = ((−1 + 5)/2, (2 + 14)/2) = (4/2, 16/2) = (2, 8).",
                    "(c) d = √(Δx² + Δy²) = √(6² + 12²) = √(36 + 144) = √180 = √(36 × 5) = 6√5.",
                    "(d) y − 2 = 2(x − (−1)) → y − 2 = 2(x + 1) → y = 2x + 4."
                ]
            }
        },
        {
            id: "m-la-2", topic: "trig-elev",
            q: "From the top of a 30 m cliff, Harper looks down at a boat with an angle of depression of 22°. The boat then sails directly away from the cliff for 100 m. Find the new angle of depression to the nearest degree.",
            sample: "Step 1 — initial distance: tan(22°) = 30/d₁ → d₁ ≈ 74.25 m. Step 2 — new distance: d₂ = 74.25 + 100 = 174.25 m. Step 3 — new angle: tan(θ) = 30/174.25 ≈ 0.1722 → θ ≈ 9.78° → 10°.", marks: 7,
            help: {
                rule: "Form two right-angled triangles sharing the cliff side.",
                steps: [
                    "Triangle 1: tan(22°) = 30/d₁ → d₁ = 30/tan(22°) ≈ 74.25 m.",
                    "After sailing: d₂ = 74.25 + 100 = 174.25 m.",
                    "Triangle 2: tan(θ) = 30/174.25 ≈ 0.1722.",
                    "θ = tan⁻¹(0.1722) ≈ 9.78°.",
                    "Round to nearest degree: 10°."
                ]
            }
        },
        {
            id: "m-la-3", topic: "quadratic-nonmonic",
            q: "Solve 2x² − 5x − 3 = 0 by factorising. Then verify your solutions by substituting back.",
            sample: "ac = 2 × (−3) = −6; pair summing to −5: −6 and 1. Split: 2x² − 6x + x − 3 = 2x(x − 3) + 1(x − 3) = (2x + 1)(x − 3) = 0 → x = −1/2 or x = 3. CHECK: 2(−1/2)² − 5(−1/2) − 3 = 0.5 + 2.5 − 3 = 0 ✓. 2(3)² − 5(3) − 3 = 18 − 15 − 3 = 0 ✓.", marks: 6,
            help: {
                rule: "Non-monic factorising: split the middle term using ac.",
                steps: [
                    "a × c = 2 × (−3) = −6.",
                    "Find pair p,q with pq = −6, p + q = −5: −6 and 1.",
                    "Rewrite: 2x² − 6x + x − 3 = 0.",
                    "Group: 2x(x − 3) + 1(x − 3).",
                    "Factor: (2x + 1)(x − 3) = 0.",
                    "Set each factor to zero: x = −1/2 or x = 3.",
                    "Check both solutions in the original equation."
                ]
            }
        },
        {
            id: "m-la-4", topic: "lines-perp",
            q: "The line ℓ has equation 2x + y = 5.\n(a) Write ℓ in slope-intercept form and state its gradient and y-intercept.\n(b) Find the equation of the line through (4, 1) that is PERPENDICULAR to ℓ.\n(c) Find the point of intersection of the two lines.",
            sample: "(a) y = −2x + 5 → m = −2, c = 5. (b) Perpendicular gradient = 1/2; y − 1 = (1/2)(x − 4) → y = x/2 − 1. (c) Set −2x + 5 = x/2 − 1 → multiply by 2: −4x + 10 = x − 2 → 12 = 5x → x = 12/5 = 2.4 → y = −2(2.4) + 5 = 0.2. Intersection (2.4, 0.2).", marks: 9,
            help: {
                rule: "Convert to y = mx + c, use perpendicular gradient = negative reciprocal, then solve simultaneously.",
                steps: [
                    "(a) Subtract 2x: y = −2x + 5. m = −2, c = 5.",
                    "(b) Perpendicular m = 1/2 (negative reciprocal of −2).",
                    "Use point-gradient: y − 1 = (1/2)(x − 4) → y = x/2 − 2 + 1 = x/2 − 1.",
                    "(c) Set lines equal: −2x + 5 = x/2 − 1.",
                    "× 2 both sides: −4x + 10 = x − 2.",
                    "Move x: 12 = 5x → x = 2.4.",
                    "Sub into y = x/2 − 1: y = 1.2 − 1 = 0.2.",
                    "Intersection: (2.4, 0.2)."
                ]
            }
        },
        {
            id: "m-la-5", topic: "simultaneous",
            q: "Two numbers add to 23 and differ by 7. Set up and solve simultaneous equations to find them.",
            sample: "Let the numbers be x and y with x > y. Equations: x + y = 23 and x − y = 7. Add: 2x = 30 → x = 15. Subtract: 2y = 16 → y = 8. Numbers: 15 and 8. Check: 15 + 8 = 23 ✓, 15 − 8 = 7 ✓.", marks: 5,
            help: {
                rule: "Translate the words into equations, then use elimination.",
                steps: [
                    "Let x = larger number, y = smaller.",
                    "Sum: x + y = 23.",
                    "Difference: x − y = 7.",
                    "Add equations: 2x = 30 → x = 15.",
                    "Subtract: 2y = 16 → y = 8.",
                    "Verify: 15 + 8 = 23 and 15 − 8 = 7."
                ]
            }
        },
        {
            id: "m-la-6", topic: "quadratic-monic",
            q: "A ball is thrown so its height in metres is h(t) = 20t − 5t², where t is seconds.\n(a) When does the ball hit the ground?\n(b) What is the height after 1 second?\n(c) Find the time at which the ball reaches its maximum height.",
            sample: "(a) h = 0 when 20t − 5t² = 0 → 5t(4 − t) = 0 → t = 0 or 4. Hits ground at t = 4 s. (b) h(1) = 20 − 5 = 15 m. (c) Vertex at t = −b/(2a) = −20/(2 × −5) = 2 s.", marks: 7,
            help: {
                rule: "Quadratic h(t) = at² + bt + c. Roots → ground; vertex → max height (for negative leading coefficient).",
                steps: [
                    "(a) Factor: 5t(4 − t) = 0 → t = 0 or t = 4. Discard t = 0 (start). Hits ground at t = 4 s.",
                    "(b) Substitute: h(1) = 20 − 5 = 15 m.",
                    "(c) Vertex t = −b/(2a) = −20/(−10) = 2 s.",
                    "Optional: max height = 20(2) − 5(2²) = 40 − 20 = 20 m."
                ]
            }
        },
        {
            id: "m-la-7", topic: "trig-bearings",
            q: "A ship sails 30 km on a bearing of 060°, then 40 km on a bearing of 150°.\n(a) Show that the two legs are perpendicular.\n(b) Find the ship's distance from its starting point (1 dp).\n(c) Find the bearing of the starting point from the ship's final position (nearest degree).",
            sample: "(a) 150° − 60° = 90° → perpendicular. (b) Pythag: √(30² + 40²) = √2500 = 50 km. (c) Final position is 30 km on bearing 060° + 40 km on bearing 150° from start. Net: east = 30 sin60° + 40 sin150° = 25.98 + 20 = 45.98; north = 30 cos60° + 40 cos150° = 15 − 34.64 = −19.64. Bearing FROM ship TO start = bearing of (−45.98, +19.64) east/north → arctan(45.98/19.64) ≈ 66.86° west of north → bearing 360° − 66.86° = 293°.", marks: 9,
            help: {
                rule: "Use compass components (north and east) to track displacement.",
                steps: [
                    "(a) Bearings differ by 90° → right angle.",
                    "(b) Right-triangle distance: √(30² + 40²) = √2500 = 50 km.",
                    "(c) Compute east/north components from start to final: (45.98, −19.64).",
                    "Reverse to get bearing from final back to start: (−45.98, +19.64).",
                    "Magnitude: arctan(45.98/19.64) ≈ 66.9° west of north.",
                    "Bearing = 360° − 66.9° ≈ 293°."
                ]
            }
        },
        {
            id: "m-la-8", topic: "midpoint-gradient",
            q: "Triangle ABC has vertices A(−2, 1), B(4, 3), C(2, 7).\n(a) Find the gradient of each side.\n(b) Show that AB is perpendicular to AC (or state which sides are perpendicular).\n(c) Find the length of the longest side (exact form).",
            sample: "(a) AB: (3−1)/(4−(−2)) = 2/6 = 1/3. AC: (7−1)/(2−(−2)) = 6/4 = 3/2. BC: (7−3)/(2−4) = 4/−2 = −2. (b) AB × BC = (1/3)(−2) = −2/3 (no). AC × BC = (3/2)(−2) = −3 (no). AB × AC = (1/3)(3/2) = 1/2 (no). None of the sides are perpendicular — this is a scalene non-right triangle. (c) Lengths: AB = √(36 + 4) = √40 = 2√10; AC = √(16 + 36) = √52 = 2√13; BC = √(4 + 16) = √20 = 2√5. Longest = AC = 2√13.", marks: 8,
            help: {
                rule: "Use the gradient formula three times, the perpendicularity test (m₁m₂ = −1), and the distance formula three times.",
                steps: [
                    "(a) m_AB = 2/6 = 1/3. m_AC = 6/4 = 3/2. m_BC = 4/−2 = −2.",
                    "(b) Test pairs: m_AB·m_BC = −2/3; m_AC·m_BC = −3; m_AB·m_AC = 1/2 — none equals −1, so no right angle.",
                    "(c) Lengths: AB = 2√10, AC = 2√13, BC = 2√5. Largest is 2√13 (AC)."
                ]
            }
        },
        {
            id: "m-la-9", topic: "expansion",
            q: "(a) Expand and simplify (2x + 3)² − (x − 4)(x + 4).\n(b) Use your result from (a) to find the value when x = 5.",
            sample: "(a) (2x + 3)² = 4x² + 12x + 9. (x − 4)(x + 4) = x² − 16. Subtract: 4x² + 12x + 9 − (x² − 16) = 3x² + 12x + 25. (b) x = 5: 3(25) + 60 + 25 = 75 + 60 + 25 = 160.", marks: 6,
            help: {
                rule: "Apply perfect-square and difference-of-squares identities, then substitute.",
                steps: [
                    "(2x + 3)² = 4x² + 12x + 9.",
                    "(x − 4)(x + 4) = x² − 16.",
                    "Difference: 4x² + 12x + 9 − x² + 16 = 3x² + 12x + 25.",
                    "Substitute x = 5: 3(25) + 60 + 25 = 160."
                ]
            }
        },
        {
            id: "m-la-10", topic: "trig-elev",
            q: "From a point on the ground, the angle of elevation to the top of a tall tree is 35°. Walking 20 m closer to the tree, the angle of elevation rises to 55°. Find the height of the tree (1 dp).",
            sample: "Let h = tree height, x = distance from closer point. Then tan 55° = h/x and tan 35° = h/(x + 20). So h = x tan 55° = (x + 20) tan 35°. x tan 55° = x tan 35° + 20 tan 35° → x(tan 55° − tan 35°) = 20 tan 35° → x = 20 tan 35° / (tan 55° − tan 35°) ≈ 20 × 0.7002 / (1.4281 − 0.7002) ≈ 14.004 / 0.7279 ≈ 19.24 m. Then h = x tan 55° ≈ 19.24 × 1.4281 ≈ 27.5 m.", marks: 8,
            help: {
                rule: "Form two right-angled triangles sharing the vertical side. Solve simultaneously.",
                steps: [
                    "Let x = distance from closer point to base of tree, h = tree height.",
                    "tan 55° = h/x → h = x tan 55°.",
                    "tan 35° = h/(x + 20) → h = (x + 20) tan 35°.",
                    "Set equal: x tan 55° = (x + 20) tan 35°.",
                    "x(tan 55° − tan 35°) = 20 tan 35°.",
                    "Solve for x ≈ 19.24 m, then h ≈ 27.5 m."
                ]
            }
        }
    ],

    /* =========================================================
       PRACTICE QUESTIONS — organised into 10 topic groups, each
       with 10 exam sets of 20 questions. Generated at boot from
       `practiceTopics` below.
       ========================================================= */
    practiceTopics: [
        { id: "indices",       name: "Indices & Index Laws",          outcomes: "MA5-IND-C-01 · MA5-IND-P-01", sourceTopics: ["indices-basic", "indices-negative"] },
        { id: "surds",         name: "Surds & Fractional Indices",    outcomes: "MA5-IND-P-02",                sourceTopics: ["surds"] },
        { id: "scientific",    name: "Scientific Notation & Sig Figs",outcomes: "MA5-MAG-C-01",                sourceTopics: ["scientific"] },
        { id: "algebra",       name: "Algebraic Expansion & Fractions",outcomes:"MA5-ALG-C-01",                sourceTopics: ["expansion", "alg-fractions"] },
        { id: "linear-eq",     name: "Linear Equations",              outcomes: "MA5-EQU-C-01 · MA5-EQU-P-02", sourceTopics: ["linear-eq", "linear-eq-multi"] },
        { id: "quadratic",     name: "Quadratic Equations",           outcomes: "MA5-EQU-P-01 · MA5-EQU-P-02", sourceTopics: ["quadratic-monic", "quadratic-nonmonic"] },
        { id: "ineq-cubic",    name: "Inequalities & Cubics",         outcomes: "MA5-EQU-P-01",                sourceTopics: ["inequalities", "quadratic-monic"] },
        { id: "simultaneous",  name: "Simultaneous Equations",        outcomes: "MA5-EQU-P-02",                sourceTopics: ["simultaneous", "linear-eq-multi"] },
        { id: "linear-graphs", name: "Linear Graphs",                 outcomes: "MA5-LIN-C-01 · LIN-C-02 · LIN-P-01", sourceTopics: ["midpoint-gradient", "slope-intercept", "lines-perp"] },
        { id: "trigonometry",  name: "Trigonometry",                  outcomes: "MA5-TRG-C-01 · MA5-TRG-C-02", sourceTopics: ["trig-sides", "trig-angles", "trig-elev", "trig-bearings"] }
    ],
    practiceExams: [],

    /* =========================================================
       MOCK EXAMS — full-length, mixed across all outcomes.
       Lock-in answers (no changing once you press Next) and
       best score is remembered across retakes.
       Each mock: 20 MCQ + 10 short + 2 long.
       ========================================================= */
    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad mix",
            duration: 60,
            questionIds: [
                "m-mcq-1","m-mcq-9","m-mcq-16","m-mcq-26","m-mcq-33","m-mcq-39","m-mcq-43","m-mcq-51",
                "m-mcq-58","m-mcq-64","m-mcq-67","m-mcq-73","m-mcq-77","m-mcq-82","m-mcq-86","m-mcq-90",
                "m-mcq-93","m-mcq-100","m-mcq-114","m-mcq-131",
                "m-sa-1","m-sa-2","m-sa-5","m-sa-7","m-sa-13","m-sa-15","m-sa-17","m-sa-22","m-sa-26","m-sa-29",
                "m-la-1","m-la-3"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — algebra & equations heavy",
            duration: 60,
            questionIds: [
                "m-mcq-5","m-mcq-12","m-mcq-22","m-mcq-29","m-mcq-35","m-mcq-41","m-mcq-44","m-mcq-52",
                "m-mcq-59","m-mcq-66","m-mcq-69","m-mcq-74","m-mcq-78","m-mcq-83","m-mcq-87","m-mcq-91",
                "m-mcq-95","m-mcq-115","m-mcq-127","m-mcq-138",
                "m-sa-3","m-sa-4","m-sa-6","m-sa-9","m-sa-12","m-sa-18","m-sa-20","m-sa-21","m-sa-25","m-sa-28",
                "m-la-4","m-la-9"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — graphs, lines & trig heavy",
            duration: 60,
            questionIds: [
                "m-mcq-3","m-mcq-11","m-mcq-19","m-mcq-30","m-mcq-37","m-mcq-42","m-mcq-46","m-mcq-54",
                "m-mcq-61","m-mcq-65","m-mcq-71","m-mcq-75","m-mcq-79","m-mcq-84","m-mcq-88","m-mcq-92",
                "m-mcq-96","m-mcq-149","m-mcq-156","m-mcq-166",
                "m-sa-5","m-sa-8","m-sa-10","m-sa-14","m-sa-19","m-sa-23","m-sa-26","m-sa-27","m-sa-29","m-sa-30",
                "m-la-1","m-la-2"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — indices, surds & quadratics focus",
            duration: 60,
            questionIds: [
                "m-mcq-2","m-mcq-10","m-mcq-17","m-mcq-25","m-mcq-31","m-mcq-40","m-mcq-47","m-mcq-53",
                "m-mcq-62","m-mcq-70","m-mcq-72","m-mcq-76","m-mcq-80","m-mcq-85","m-mcq-89","m-mcq-105",
                "m-mcq-109","m-mcq-118","m-mcq-133","m-mcq-141",
                "m-sa-2","m-sa-11","m-sa-12","m-sa-13","m-sa-16","m-sa-17","m-sa-21","m-sa-22","m-sa-23","m-sa-24",
                "m-la-3","m-la-6"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review (hardest mock)",
            duration: 75,
            questionIds: [
                "m-mcq-7","m-mcq-14","m-mcq-23","m-mcq-32","m-mcq-38","m-mcq-50","m-mcq-55","m-mcq-63",
                "m-mcq-68","m-mcq-81","m-mcq-94","m-mcq-101","m-mcq-117","m-mcq-128","m-mcq-140","m-mcq-145",
                "m-mcq-157","m-mcq-160","m-mcq-167","m-mcq-172",
                "m-sa-6","m-sa-15","m-sa-16","m-sa-19","m-sa-20","m-sa-22","m-sa-25","m-sa-27","m-sa-28","m-sa-30",
                "m-la-7","m-la-10"
            ]
        }
    ]
};
