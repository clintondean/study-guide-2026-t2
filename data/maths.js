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
        },

        /* ----- Added MCQs: indices-basic ----- */

        {
            id: "m-mcq-173", topic: "indices-basic",
            q: "Simplify: x² × x⁴",
            options: ["x⁸", "x⁶", "x²", "6x"], answer: 1,
            explain: "Multiplying same base → add indices: 2 + 4 = 6.",
            help: { rule: "aᵐ × aⁿ = aᵐ⁺ⁿ", steps: ["Same base x.", "Add indices: 2 + 4 = 6.", "Result: x⁶."] }
        },

        {
            id: "m-mcq-174", topic: "indices-basic",
            q: "Simplify: y⁶ ÷ y³",
            options: ["y⁹", "y¹⁸", "y³", "1/y³"], answer: 2,
            explain: "Dividing same base → subtract indices: 6 − 3 = 3.",
            help: { rule: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", steps: ["Subtract indices: 6 − 3 = 3.", "Result: y³."] }
        },

        {
            id: "m-mcq-175", topic: "indices-basic",
            q: "Simplify: (a²)⁴",
            options: ["a⁶", "a²", "4a²", "a⁸"], answer: 3,
            explain: "Power of a power → multiply indices: 2 × 4 = 8.",
            help: { rule: "(aᵐ)ⁿ = aᵐⁿ", steps: ["Multiply: 2 × 4 = 8.", "Result: a⁸."] }
        },

        {
            id: "m-mcq-176", topic: "indices-basic",
            q: "Evaluate: 2⁰",
            options: ["1", "0", "2", "Undefined"], answer: 0,
            explain: "Any non-zero base raised to 0 equals 1.",
            help: { rule: "a⁰ = 1 for a ≠ 0", steps: ["Apply the zero-index rule.", "2⁰ = 1."] }
        },

        {
            id: "m-mcq-177", topic: "indices-basic",
            q: "Simplify: (2x¹)³",
            options: ["6x³", "8x³", "8x⁴", "0"], answer: 1,
            explain: "Raise the coefficient and variable power: 2³ = 8 and 1 × 3 = 3.",
            help: { rule: "(ab)ⁿ = aⁿbⁿ and (aᵐ)ⁿ = aᵐⁿ", steps: ["2³ = 8.", "(x¹)³ = x³.", "Combine: 8x³."] }
        },

        {
            id: "m-mcq-178", topic: "indices-basic",
            q: "Simplify: 2a¹ × 4a⁴",
            options: ["6a⁵", "8a⁴", "8a⁵", "8a³"], answer: 2,
            explain: "Multiply coefficients and add the indices on a.",
            help: { rule: "Multiply the numbers, then add indices on the same base.", steps: ["2 × 4 = 8.", "a¹ × a⁴ = a⁵.", "Result: 8a⁵."] }
        },

        {
            id: "m-mcq-179", topic: "indices-basic",
            q: "Simplify: x³ × x⁵",
            options: ["x¹⁵", "x²", "8x", "x⁸"], answer: 3,
            explain: "Multiplying same base → add indices: 3 + 5 = 8.",
            help: { rule: "aᵐ × aⁿ = aᵐ⁺ⁿ", steps: ["Same base x.", "Add indices: 3 + 5 = 8.", "Result: x⁸."] }
        },

        {
            id: "m-mcq-180", topic: "indices-basic",
            q: "Simplify: y⁷ ÷ y⁴",
            options: ["y³", "y¹¹", "y²⁸", "1/y³"], answer: 0,
            explain: "Dividing same base → subtract indices: 7 − 4 = 3.",
            help: { rule: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", steps: ["Subtract indices: 7 − 4 = 3.", "Result: y³."] }
        },

        {
            id: "m-mcq-181", topic: "indices-basic",
            q: "Simplify: (a³)²",
            options: ["a⁵", "a⁶", "a⁻¹", "2a³"], answer: 1,
            explain: "Power of a power → multiply indices: 3 × 2 = 6.",
            help: { rule: "(aᵐ)ⁿ = aᵐⁿ", steps: ["Multiply: 3 × 2 = 6.", "Result: a⁶."] }
        },

        {
            id: "m-mcq-182", topic: "indices-basic",
            q: "Evaluate: 3⁰",
            options: ["0", "3", "1", "Undefined"], answer: 2,
            explain: "Any non-zero base raised to 0 equals 1.",
            help: { rule: "a⁰ = 1 for a ≠ 0", steps: ["Apply the zero-index rule.", "3⁰ = 1."] }
        },

        {
            id: "m-mcq-183", topic: "indices-basic",
            q: "Simplify: (3x²)⁴",
            options: ["12x⁸", "81x⁶", "81x⁹", "81x⁸"], answer: 3,
            explain: "Raise the coefficient and variable power: 3⁴ = 81 and 2 × 4 = 8.",
            help: { rule: "(ab)ⁿ = aⁿbⁿ and (aᵐ)ⁿ = aᵐⁿ", steps: ["3⁴ = 81.", "(x²)⁴ = x⁸.", "Combine: 81x⁸."] }
        },

        {
            id: "m-mcq-184", topic: "indices-basic",
            q: "Simplify: 3a² × 5a²",
            options: ["15a⁴", "8a⁴", "15a⁰", "0"], answer: 0,
            explain: "Multiply coefficients and add the indices on a.",
            help: { rule: "Multiply the numbers, then add indices on the same base.", steps: ["3 × 5 = 15.", "a² × a² = a⁴.", "Result: 15a⁴."] }
        },

        {
            id: "m-mcq-185", topic: "indices-basic",
            q: "Simplify: x⁴ × x⁶",
            options: ["x²⁴", "x¹⁰", "x²", "10x"], answer: 1,
            explain: "Multiplying same base → add indices: 4 + 6 = 10.",
            help: { rule: "aᵐ × aⁿ = aᵐ⁺ⁿ", steps: ["Same base x.", "Add indices: 4 + 6 = 10.", "Result: x¹⁰."] }
        },

        {
            id: "m-mcq-186", topic: "indices-basic",
            q: "Simplify: y⁸ ÷ y²",
            options: ["y¹⁰", "y¹⁶", "y⁶", "1/y⁶"], answer: 2,
            explain: "Dividing same base → subtract indices: 8 − 2 = 6.",
            help: { rule: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", steps: ["Subtract indices: 8 − 2 = 6.", "Result: y⁶."] }
        },

        {
            id: "m-mcq-187", topic: "indices-basic",
            q: "Simplify: (a⁴)³",
            options: ["a⁷", "a⁻¹", "3a⁴", "a¹²"], answer: 3,
            explain: "Power of a power → multiply indices: 4 × 3 = 12.",
            help: { rule: "(aᵐ)ⁿ = aᵐⁿ", steps: ["Multiply: 4 × 3 = 12.", "Result: a¹²."] }
        },

        {
            id: "m-mcq-188", topic: "indices-basic",
            q: "Evaluate: 5⁰",
            options: ["1", "0", "5", "Undefined"], answer: 0,
            explain: "Any non-zero base raised to 0 equals 1.",
            help: { rule: "a⁰ = 1 for a ≠ 0", steps: ["Apply the zero-index rule.", "5⁰ = 1."] }
        },

        {
            id: "m-mcq-189", topic: "indices-basic",
            q: "Simplify: (4x³)²",
            options: ["8x⁶", "16x⁶", "16x⁵", "16x⁷"], answer: 1,
            explain: "Raise the coefficient and variable power: 4² = 16 and 3 × 2 = 6.",
            help: { rule: "(ab)ⁿ = aⁿbⁿ and (aᵐ)ⁿ = aᵐⁿ", steps: ["4² = 16.", "(x³)² = x⁶.", "Combine: 16x⁶."] }
        },

        /* ----- Added MCQs: indices-negative ----- */

        {
            id: "m-mcq-190", topic: "indices-negative",
            q: "Express 2⁻³ as a fraction.",
            options: ["8", "-1/8", "1/8", "1/6"], answer: 2,
            explain: "Negative index means reciprocal: 2⁻³ = 1/2³ = 1/8.",
            help: { rule: "a⁻ⁿ = 1/aⁿ", steps: ["Move 2³ to the denominator.", "2³ = 8.", "Result: 1/8."] }
        },

        {
            id: "m-mcq-191", topic: "indices-negative",
            q: "Simplify: x² ÷ x⁶ as a positive index.",
            options: ["x⁴", "x⁻⁴", "1/x⁸", "1/x⁴"], answer: 3,
            explain: "Subtract indices: 2 − 6 = −4, so x⁻⁴ = 1/x⁴.",
            help: { rule: "Subtract the indices, then write any negative result as a reciprocal.", steps: ["2 − 6 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-mcq-192", topic: "indices-negative",
            q: "Evaluate: (1/2)⁻²",
            options: ["4", "1/4", "2", "-4"], answer: 0,
            explain: "A negative power on a fraction flips it and makes the power positive.",
            help: { rule: "(p/q)⁻ⁿ = (q/p)ⁿ", steps: ["Flip 1/2 to 2/1.", "Then 2² = 4."] }
        },

        {
            id: "m-mcq-193", topic: "indices-negative",
            q: "Simplify: (2x)⁻³",
            options: ["8x³", "1/(8x³)", "1/(2x³)", "1/(8x⁴)"], answer: 1,
            explain: "A negative power means take the reciprocal of the whole bracket.",
            help: { rule: "Negative powers apply to the whole factor, not just the x.", steps: ["(2x)⁻³ = 1/(2x)³.", "(2x)³ = 8x³.", "Result: 1/(8x³)."] }
        },

        {
            id: "m-mcq-194", topic: "indices-negative",
            q: "Write in simplest form: (a/b)⁻²",
            options: ["a²/b²", "1/(a²b²)", "b²/a²", "b/a²"], answer: 2,
            explain: "Negative power of a fraction → flip it first, then apply the power.",
            help: { rule: "(a/b)⁻ⁿ = (b/a)ⁿ", steps: ["Flip the fraction.", "Apply the power 2 to numerator and denominator.", "Result: b²/a²."] }
        },

        {
            id: "m-mcq-195", topic: "indices-negative",
            q: "Simplify: (y²)⁻⁴ with a positive index.",
            options: ["y⁸", "1/y⁶", "y⁻⁸", "1/y⁸"], answer: 3,
            explain: "Multiply the indices: 2 × (−4) = −8. Then rewrite as a reciprocal.",
            help: { rule: "(aᵐ)ⁿ = aᵐⁿ, then convert a negative index to a reciprocal.", steps: ["2 × −4 = −8.", "y⁻⁸ = 1/y⁸."] }
        },

        {
            id: "m-mcq-196", topic: "indices-negative",
            q: "Express 3⁻⁴ as a fraction.",
            options: ["1/81", "81", "-1/81", "1/12"], answer: 0,
            explain: "Negative index means reciprocal: 3⁻⁴ = 1/3⁴ = 1/81.",
            help: { rule: "a⁻ⁿ = 1/aⁿ", steps: ["Move 3⁴ to the denominator.", "3⁴ = 81.", "Result: 1/81."] }
        },

        {
            id: "m-mcq-197", topic: "indices-negative",
            q: "Simplify: x³ ÷ x⁷ as a positive index.",
            options: ["x⁴", "1/x⁴", "x⁻⁴", "1/x¹⁰"], answer: 1,
            explain: "Subtract indices: 3 − 7 = −4, so x⁻⁴ = 1/x⁴.",
            help: { rule: "Subtract the indices, then write any negative result as a reciprocal.", steps: ["3 − 7 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-mcq-198", topic: "indices-negative",
            q: "Evaluate: (1/3)⁻³",
            options: ["1/27", "3", "27", "-27"], answer: 2,
            explain: "A negative power on a fraction flips it and makes the power positive.",
            help: { rule: "(p/q)⁻ⁿ = (q/p)ⁿ", steps: ["Flip 1/3 to 3/1.", "Then 3³ = 27."] }
        },

        {
            id: "m-mcq-199", topic: "indices-negative",
            q: "Simplify: (3x)⁻⁴",
            options: ["81x⁴", "1/(3x⁴)", "1/(81x⁵)", "1/(81x⁴)"], answer: 3,
            explain: "A negative power means take the reciprocal of the whole bracket.",
            help: { rule: "Negative powers apply to the whole factor, not just the x.", steps: ["(3x)⁻⁴ = 1/(3x)⁴.", "(3x)⁴ = 81x⁴.", "Result: 1/(81x⁴)."] }
        },

        {
            id: "m-mcq-200", topic: "indices-negative",
            q: "Simplify: (a/b)⁻³",
            options: ["b³/a³", "a³/b³", "1/(a³b³)", "b/a³"], answer: 0,
            explain: "Negative power of a fraction → flip it first, then apply the power.",
            help: { rule: "(a/b)⁻ⁿ = (b/a)ⁿ", steps: ["Flip the fraction.", "Apply the power 3 to numerator and denominator.", "Result: b³/a³."] }
        },

        {
            id: "m-mcq-201", topic: "indices-negative",
            q: "Simplify: (y³)⁻² with a positive index.",
            options: ["y⁶", "1/y⁶", "1/y⁵", "y⁻⁶"], answer: 1,
            explain: "Multiply the indices: 3 × (−2) = −6. Then rewrite as a reciprocal.",
            help: { rule: "(aᵐ)ⁿ = aᵐⁿ, then convert a negative index to a reciprocal.", steps: ["3 × −2 = −6.", "y⁻⁶ = 1/y⁶."] }
        },

        {
            id: "m-mcq-202", topic: "indices-negative",
            q: "Express 4⁻² as a fraction.",
            options: ["16", "-1/16", "1/16", "1/8"], answer: 2,
            explain: "Negative index means reciprocal: 4⁻² = 1/4² = 1/16.",
            help: { rule: "a⁻ⁿ = 1/aⁿ", steps: ["Move 4² to the denominator.", "4² = 16.", "Result: 1/16."] }
        },

        {
            id: "m-mcq-203", topic: "indices-negative",
            q: "Simplify: x⁴ ÷ x⁸ as a positive index.",
            options: ["x⁴", "x⁻⁴", "1/x¹²", "1/x⁴"], answer: 3,
            explain: "Subtract indices: 4 − 8 = −4, so x⁻⁴ = 1/x⁴.",
            help: { rule: "Subtract the indices, then write any negative result as a reciprocal.", steps: ["4 − 8 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-mcq-204", topic: "indices-negative",
            q: "Evaluate: (1/4)⁻¹",
            options: ["4", "1/4", "-4", "0"], answer: 0,
            explain: "A negative power on a fraction flips it and makes the power positive.",
            help: { rule: "(p/q)⁻ⁿ = (q/p)ⁿ", steps: ["Flip 1/4 to 4/1.", "Then 4¹ = 4."] }
        },

        {
            id: "m-mcq-205", topic: "indices-negative",
            q: "Simplify: (4x)⁻²",
            options: ["16x²", "1/(16x²)", "1/(4x²)", "1/(16x³)"], answer: 1,
            explain: "A negative power means take the reciprocal of the whole bracket.",
            help: { rule: "Negative powers apply to the whole factor, not just the x.", steps: ["(4x)⁻² = 1/(4x)².", "(4x)² = 16x².", "Result: 1/(16x²)."] }
        },

        {
            id: "m-mcq-206", topic: "indices-negative",
            q: "Simplify: (a/b)⁻⁴",
            options: ["a⁴/b⁴", "1/(a⁴b⁴)", "b⁴/a⁴", "b/a⁴"], answer: 2,
            explain: "Negative power of a fraction → flip it first, then apply the power.",
            help: { rule: "(a/b)⁻ⁿ = (b/a)ⁿ", steps: ["Flip the fraction.", "Apply the power 4 to numerator and denominator.", "Result: b⁴/a⁴."] }
        },

        /* ----- Added MCQs: surds ----- */

        {
            id: "m-mcq-207", topic: "surds",
            q: "Simplify √8.",
            options: ["√4", "4√2", "8", "2√2"], answer: 3,
            explain: "8 = 4 × 2, so √8 = √4 × √2 = 2√2.",
            help: { rule: "Pull out the largest perfect-square factor.", steps: ["8 = 4 × 2.", "√8 = √4 × √2 = 2√2."] }
        },

        {
            id: "m-mcq-208", topic: "surds",
            q: "Simplify: 2√2 + 4√2",
            options: ["6√2", "8√2", "√12", "6√3"], answer: 0,
            explain: "Like surds add by combining their coefficients.",
            help: { rule: "Add the coefficients of like surds.", steps: ["Both terms are multiples of √2.", "2 + 4 = 6.", "Result: 6√2."] }
        },

        {
            id: "m-mcq-209", topic: "surds",
            q: "Simplify: 3√2 − 2√2",
            options: ["5√2", "1√2", "√2", "1√4"], answer: 1,
            explain: "Subtract the coefficients because the surds are like terms.",
            help: { rule: "Like surds combine by adding or subtracting coefficients.", steps: ["3 − 2 = 1.", "Result: 1√2."] }
        },

        {
            id: "m-mcq-210", topic: "surds",
            q: "Evaluate: (2√2)²",
            options: ["4", "2√2", "8", "16"], answer: 2,
            explain: "Square the coefficient and the surd: 2² × (√2)² = 4 × 2 = 8.",
            help: { rule: "(a√b)² = a²b", steps: ["2² = 4.", "(√2)² = 2.", "Multiply: 8."] }
        },

        {
            id: "m-mcq-211", topic: "surds",
            q: "Rationalise the denominator: 2/√2",
            options: ["2/2", "√2/2", "2√2", "1"], answer: 3,
            explain: "Multiply top and bottom by √ of the denominator.",
            help: { rule: "Multiply numerator and denominator by the same surd.", steps: ["2/√2 × √2/√2.", "Numerator: 2√2. Denominator: 2.", "Result: 1."] }
        },

        {
            id: "m-mcq-212", topic: "surds",
            q: "Work out: 9^(1/2)",
            options: ["3", "9", "6", "1/3"], answer: 0,
            explain: "A power of 1/2 means square root: √9 = 3.",
            help: { rule: "a^(1/2) = √a", steps: ["Take the square root of 9.", "Result: 3."] }
        },

        {
            id: "m-mcq-213", topic: "surds",
            q: "Simplify √27.",
            options: ["√9", "3√3", "9√3", "27"], answer: 1,
            explain: "27 = 9 × 3, so √27 = √9 × √3 = 3√3.",
            help: { rule: "Pull out the largest perfect-square factor.", steps: ["27 = 9 × 3.", "√27 = √9 × √3 = 3√3."] }
        },

        {
            id: "m-mcq-214", topic: "surds",
            q: "Simplify: 3√3 + 5√3",
            options: ["15√3", "√24", "8√3", "8√4"], answer: 2,
            explain: "Like surds add by combining their coefficients.",
            help: { rule: "Add the coefficients of like surds.", steps: ["Both terms are multiples of √3.", "3 + 5 = 8.", "Result: 8√3."] }
        },

        {
            id: "m-mcq-215", topic: "surds",
            q: "Simplify: 4√3 − 1√3",
            options: ["5√3", "√27", "3√5", "3√3"], answer: 3,
            explain: "Subtract the coefficients because the surds are like terms.",
            help: { rule: "Like surds combine by adding or subtracting coefficients.", steps: ["4 − 1 = 3.", "Result: 3√3."] }
        },

        {
            id: "m-mcq-216", topic: "surds",
            q: "Evaluate: (3√3)²",
            options: ["27", "9", "3√3", "81"], answer: 0,
            explain: "Square the coefficient and the surd: 3² × (√3)² = 9 × 3 = 27.",
            help: { rule: "(a√b)² = a²b", steps: ["3² = 9.", "(√3)² = 3.", "Multiply: 27."] }
        },

        {
            id: "m-mcq-217", topic: "surds",
            q: "Rationalise the denominator: 3/√3",
            options: ["3/3", "1", "√3/3", "3√3"], answer: 1,
            explain: "Multiply top and bottom by √ of the denominator.",
            help: { rule: "Multiply numerator and denominator by the same surd.", steps: ["3/√3 × √3/√3.", "Numerator: 3√3. Denominator: 3.", "Result: 1."] }
        },

        {
            id: "m-mcq-218", topic: "surds",
            q: "Work out: 8^(1/3)",
            options: ["4", "8", "2", "1/2"], answer: 2,
            explain: "A power of 1/3 means cube root: ∛8 = 2.",
            help: { rule: "a^(1/3) = ∛a", steps: ["Find the number whose cube is 8.", "Result: 2."] }
        },

        {
            id: "m-mcq-219", topic: "surds",
            q: "Simplify √80.",
            options: ["√20", "16√5", "80", "4√5"], answer: 3,
            explain: "80 = 16 × 5, so √80 = √16 × √5 = 4√5.",
            help: { rule: "Pull out the largest perfect-square factor.", steps: ["80 = 16 × 5.", "√80 = √16 × √5 = 4√5."] }
        },

        {
            id: "m-mcq-220", topic: "surds",
            q: "Simplify: 4√5 + 6√5",
            options: ["10√5", "24√5", "√50", "10√6"], answer: 0,
            explain: "Like surds add by combining their coefficients.",
            help: { rule: "Add the coefficients of like surds.", steps: ["Both terms are multiples of √5.", "4 + 6 = 10.", "Result: 10√5."] }
        },

        {
            id: "m-mcq-221", topic: "surds",
            q: "Simplify: 5√5 − 2√5",
            options: ["7√5", "3√5", "√45", "3√7"], answer: 1,
            explain: "Subtract the coefficients because the surds are like terms.",
            help: { rule: "Like surds combine by adding or subtracting coefficients.", steps: ["5 − 2 = 3.", "Result: 3√5."] }
        },

        {
            id: "m-mcq-222", topic: "surds",
            q: "Evaluate: (4√5)²",
            options: ["20", "4√5", "80", "400"], answer: 2,
            explain: "Square the coefficient and the surd: 4² × (√5)² = 16 × 5 = 80.",
            help: { rule: "(a√b)² = a²b", steps: ["4² = 16.", "(√5)² = 5.", "Multiply: 80."] }
        },

        {
            id: "m-mcq-223", topic: "surds",
            q: "Rationalise the denominator: 4/√5",
            options: ["4/5", "√5/4", "4√5", "4√5/5"], answer: 3,
            explain: "Multiply top and bottom by √ of the denominator.",
            help: { rule: "Multiply numerator and denominator by the same surd.", steps: ["4/√5 × √5/√5.", "Numerator: 4√5. Denominator: 5.", "Result: 4√5/5."] }
        },

        /* ----- Added MCQs: scientific ----- */

        {
            id: "m-mcq-224", topic: "scientific",
            q: "Write 12 000 in scientific notation.",
            options: ["1.2 × 10⁴", "12 × 10³", "1.2 × 10³", "0.12 × 10⁵"], answer: 0,
            explain: "Move the decimal so one non-zero digit stays before it, then count places moved.",
            help: { rule: "Scientific notation has the form a × 10ⁿ with 1 ≤ a < 10.", steps: ["Place the decimal at 1.2.", "The decimal moved 4 places left.", "Result: 1.2 × 10⁴."] }
        },

        {
            id: "m-mcq-225", topic: "scientific",
            q: "Write 0.0018 in scientific notation.",
            options: ["1.8 × 10³", "1.8 × 10⁻³", "18 × 10⁻⁴", "0.18 × 10⁻²"], answer: 1,
            explain: "Small numbers use a negative power of 10.",
            help: { rule: "Move the decimal to make the coefficient between 1 and 10.", steps: ["Place the decimal at 1.8.", "The decimal moved 3 places right, so the power is negative.", "Result: 1.8 × 10⁻³."] }
        },

        {
            id: "m-mcq-226", topic: "scientific",
            q: "Compute (2 × 10²) × (4 × 10⁴).",
            options: ["8 × 10⁵", "6 × 10⁶", "8 × 10⁶", "8 × 10⁸"], answer: 2,
            explain: "Multiply the coefficients and add the exponents, then normalise if needed.",
            help: { rule: "(a × 10ᵐ)(b × 10ⁿ) = ab × 10ᵐ⁺ⁿ", steps: ["2 × 4 = 8 and 2 + 4 = 6.", "Normalise to standard form: 8 × 10⁶."] }
        },

        {
            id: "m-mcq-227", topic: "scientific",
            q: "Compute (6 × 10⁵) ÷ (3 × 10²).",
            options: ["2 × 10⁷", "3 × 10³", "2 × 10⁻³", "2 × 10³"], answer: 3,
            explain: "Divide the coefficients and subtract the exponents.",
            help: { rule: "(a × 10ᵐ) ÷ (b × 10ⁿ) = (a/b) × 10ᵐ⁻ⁿ", steps: ["6 ÷ 3 = 2.", "5 − 2 = 3.", "Result: 2 × 10³."] }
        },

        {
            id: "m-mcq-228", topic: "scientific",
            q: "Give 0.00468 rounded to 2 significant figures.",
            options: ["0.00468", "0.0", "0.005", "0"], answer: 0,
            explain: "Count significant figures from the first non-zero digit and round using the next digit.",
            help: { rule: "Significant figures start at the first non-zero digit.", steps: ["Locate the first non-zero digit.", "Keep 2 significant figures and round the next digit.", "Result: 0.00468."] }
        },

        {
            id: "m-mcq-229", topic: "scientific",
            q: "Write 2.3 × 10³ in ordinary form.",
            options: ["2.3", "2 300", "2 3000", "0.2300"], answer: 1,
            explain: "Move the decimal point to the right because the exponent is positive.",
            help: { rule: "A positive power of 10 moves the decimal point to the right.", steps: ["Start with 2.3.", "Move the decimal 3 places right.", "Result: 2 300."] }
        },

        {
            id: "m-mcq-230", topic: "scientific",
            q: "Write 340 000 in scientific notation.",
            options: ["34 × 10⁴", "3.4 × 10⁴", "3.4 × 10⁵", "0.34 × 10⁶"], answer: 2,
            explain: "Move the decimal so one non-zero digit stays before it, then count places moved.",
            help: { rule: "Scientific notation has the form a × 10ⁿ with 1 ≤ a < 10.", steps: ["Place the decimal at 3.4.", "The decimal moved 5 places left.", "Result: 3.4 × 10⁵."] }
        },

        {
            id: "m-mcq-231", topic: "scientific",
            q: "Write 0.00025 in scientific notation.",
            options: ["2.5 × 10⁴", "25 × 10⁻⁵", "0.25 × 10⁻³", "2.5 × 10⁻⁴"], answer: 3,
            explain: "Small numbers use a negative power of 10.",
            help: { rule: "Move the decimal to make the coefficient between 1 and 10.", steps: ["Place the decimal at 2.5.", "The decimal moved 4 places right, so the power is negative.", "Result: 2.5 × 10⁻⁴."] }
        },

        {
            id: "m-mcq-232", topic: "scientific",
            q: "Compute (3 × 10³) × (6 × 10⁵).",
            options: ["1.8 × 10⁹", "18 × 10⁷", "9 × 10⁸", "18 × 10¹⁵"], answer: 0,
            explain: "Multiply the coefficients and add the exponents, then normalise if needed.",
            help: { rule: "(a × 10ᵐ)(b × 10ⁿ) = ab × 10ᵐ⁺ⁿ", steps: ["3 × 6 = 18 and 3 + 5 = 8.", "Normalise to standard form: 1.8 × 10⁹."] }
        },

        {
            id: "m-mcq-233", topic: "scientific",
            q: "Compute (8 × 10⁶) ÷ (5 × 10³).",
            options: ["1.6 × 10⁹", "1.6 × 10³", "3 × 10³", "1.6 × 10⁻³"], answer: 1,
            explain: "Divide the coefficients and subtract the exponents.",
            help: { rule: "(a × 10ᵐ) ÷ (b × 10ⁿ) = (a/b) × 10ᵐ⁻ⁿ", steps: ["8 ÷ 5 = 1.6.", "6 − 3 = 3.", "Result: 1.6 × 10³."] }
        },

        {
            id: "m-mcq-234", topic: "scientific",
            q: "Round 38.52 to 3 significant figures.",
            options: ["39", "0", "38.52", "1"], answer: 2,
            explain: "Count significant figures from the first non-zero digit and round using the next digit.",
            help: { rule: "Significant figures start at the first non-zero digit.", steps: ["Locate the first non-zero digit.", "Keep 3 significant figures and round the next digit.", "Result: 38.52."] }
        },

        {
            id: "m-mcq-235", topic: "scientific",
            q: "Write 4.7 × 10⁴ in ordinary form.",
            options: ["4.7", "47 0000", "0.47000", "47 000"], answer: 3,
            explain: "Move the decimal point to the right because the exponent is positive.",
            help: { rule: "A positive power of 10 moves the decimal point to the right.", steps: ["Start with 4.7.", "Move the decimal 4 places right.", "Result: 47 000."] }
        },

        {
            id: "m-mcq-236", topic: "scientific",
            q: "Write 5 600 000 in scientific notation.",
            options: ["5.6 × 10⁶", "56 × 10⁵", "5.6 × 10⁵", "0.56 × 10⁷"], answer: 0,
            explain: "Move the decimal so one non-zero digit stays before it, then count places moved.",
            help: { rule: "Scientific notation has the form a × 10ⁿ with 1 ≤ a < 10.", steps: ["Place the decimal at 5.6.", "The decimal moved 6 places left.", "Result: 5.6 × 10⁶."] }
        },

        {
            id: "m-mcq-237", topic: "scientific",
            q: "Write 0.000042 in scientific notation.",
            options: ["4.2 × 10⁵", "4.2 × 10⁻⁵", "42 × 10⁻⁶", "0.42 × 10⁻⁴"], answer: 1,
            explain: "Small numbers use a negative power of 10.",
            help: { rule: "Move the decimal to make the coefficient between 1 and 10.", steps: ["Place the decimal at 4.2.", "The decimal moved 5 places right, so the power is negative.", "Result: 4.2 × 10⁻⁵."] }
        },

        {
            id: "m-mcq-238", topic: "scientific",
            q: "Compute (4 × 10⁴) × (8 × 10⁶).",
            options: ["32 × 10⁹", "12 × 10¹⁰", "3.2 × 10¹¹", "32 × 10²⁴"], answer: 2,
            explain: "Multiply the coefficients and add the exponents, then normalise if needed.",
            help: { rule: "(a × 10ᵐ)(b × 10ⁿ) = ab × 10ᵐ⁺ⁿ", steps: ["4 × 8 = 32 and 4 + 6 = 10.", "Normalise to standard form: 3.2 × 10¹¹."] }
        },

        {
            id: "m-mcq-239", topic: "scientific",
            q: "Compute (9 × 10⁷) ÷ (2 × 10¹).",
            options: ["4.5 × 10⁸", "7 × 10⁶", "4.5 × 10⁻⁶", "4.5 × 10⁶"], answer: 3,
            explain: "Divide the coefficients and subtract the exponents.",
            help: { rule: "(a × 10ᵐ) ÷ (b × 10ⁿ) = (a/b) × 10ᵐ⁻ⁿ", steps: ["9 ÷ 2 = 4.5.", "7 − 1 = 6.", "Result: 4.5 × 10⁶."] }
        },

        {
            id: "m-mcq-240", topic: "scientific",
            q: "Round 90450 to 3 significant figures.",
            options: ["90450", "9e+04", "0", "1"], answer: 0,
            explain: "Count significant figures from the first non-zero digit and round using the next digit.",
            help: { rule: "Significant figures start at the first non-zero digit.", steps: ["Locate the first non-zero digit.", "Keep 3 significant figures and round the next digit.", "Result: 90450."] }
        },

        /* ----- Added MCQs: expansion ----- */

        {
            id: "m-mcq-241", topic: "expansion",
            q: "Expand: 2(x + 2)",
            options: ["4x + 4", "2x + 4", "4x + 2", "2x + 2"], answer: 1,
            explain: "Distribute the outside factor to each term inside the bracket.",
            help: { rule: "a(b + c) = ab + ac", steps: ["2 × x = 2x.", "2 × 2 = 4.", "Result: 2x + 4."] }
        },

        {
            id: "m-mcq-242", topic: "expansion",
            q: "Expand: (x - 3)(x + 0)",
            options: ["x² - 3x - 3", "2x² - 3x", "x² - 3x", "0"], answer: 2,
            explain: "Use FOIL and then collect like terms.",
            help: { rule: "(x + a)(x + b) = x² + (a+b)x + ab", steps: ["Middle term coefficient is -3 + 0 = -3.", "Constant term is -3 × 0 = 0.", "Result: x² - 3x."] }
        },

        {
            id: "m-mcq-243", topic: "expansion",
            q: "Expand: (2x - 1)(3x + 0)",
            options: ["6x² + 3x", "6x² - 3x - 3", "3x² - 3x", "6x² - 3x"], answer: 3,
            explain: "Multiply each term in the first bracket by each term in the second bracket.",
            help: { rule: "Use FOIL or the area model, then simplify.", steps: ["First: 2x × 3x = 6x².", "Middle terms combine to -3x.", "Constant term is 0.", "Result: 6x² - 3x."] }
        },

        {
            id: "m-mcq-244", topic: "expansion",
            q: "Expand: (x − 2)²",
            options: ["x² - 4x + 4", "x² + 4x + 4", "x² - 4", "x² - 2x + 4"], answer: 0,
            explain: "Use the perfect-square identity.",
            help: { rule: "(x − a)² = x² − 2ax + a²", steps: ["Square the first term: x².", "Middle term: −2 × x × 2 = -4x.", "Last term: 2² = 4.", "Result: x² - 4x + 4."] }
        },

        {
            id: "m-mcq-245", topic: "expansion",
            q: "Expand and simplify: 3(x + 2) − 4(x − 1)",
            options: ["7x + 10", "-x + 10", "-x + 2", "10"], answer: 1,
            explain: "Distribute both factors, then combine like terms.",
            help: { rule: "Expand each bracket before simplifying.", steps: ["3(x + 2) = 3x + 6.", "−4(x − 1) = -4x + 4.", "Combine to get -x + 10."] }
        },

        {
            id: "m-mcq-246", topic: "expansion",
            q: "Expand: x(x² + 2x - 2)",
            options: ["x³ + 2x² - 2", "x² + 2x - 2", "x³ + 2x² - 2x", "x³"], answer: 2,
            explain: "Multiply x by each term in the bracket.",
            help: { rule: "Use the distributive law.", steps: ["x × x² = x³.", "x × 2x = 2x².", "x × -2 = -2x.", "Result: x³ + 2x² - 2x."] }
        },

        {
            id: "m-mcq-247", topic: "expansion",
            q: "Expand: 3(x + 3)",
            options: ["6x + 9", "9x + 3", "3x + 3", "3x + 9"], answer: 3,
            explain: "Distribute the outside factor to each term inside the bracket.",
            help: { rule: "a(b + c) = ab + ac", steps: ["3 × x = 3x.", "3 × 3 = 9.", "Result: 3x + 9."] }
        },

        {
            id: "m-mcq-248", topic: "expansion",
            q: "Expand: (x - 2)(x + 1)",
            options: ["x² - x - 2", "x² - 3x - 2", "x² - x - 1", "2x² - x - 2"], answer: 0,
            explain: "Use FOIL and then collect like terms.",
            help: { rule: "(x + a)(x + b) = x² + (a+b)x + ab", steps: ["Middle term coefficient is -2 + 1 = -1.", "Constant term is -2 × 1 = -2.", "Result: x² - x - 2."] }
        },

        {
            id: "m-mcq-249", topic: "expansion",
            q: "Expand: (3x + 0)(1x + 1)",
            options: ["3x² + 6x", "3x² + 3x", "3x² + 3x + 3", "6x² + 3x"], answer: 1,
            explain: "Multiply each term in the first bracket by each term in the second bracket.",
            help: { rule: "Use FOIL or the area model, then simplify.", steps: ["First: 3x × 1x = 3x².", "Middle terms combine to 3x.", "Constant term is 0.", "Result: 3x² + 3x."] }
        },

        {
            id: "m-mcq-250", topic: "expansion",
            q: "Expand: (x − 3)²",
            options: ["x² + 6x + 9", "x² - 9", "x² - 6x + 9", "x² - 3x + 9"], answer: 2,
            explain: "Use the perfect-square identity.",
            help: { rule: "(x − a)² = x² − 2ax + a²", steps: ["Square the first term: x².", "Middle term: −2 × x × 3 = -6x.", "Last term: 3² = 9.", "Result: x² - 6x + 9."] }
        },

        {
            id: "m-mcq-251", topic: "expansion",
            q: "Expand and simplify: 4(x + 3) − 5(x − 1)",
            options: ["9x + 17", "-x + 7", "17", "-x + 17"], answer: 3,
            explain: "Distribute both factors, then combine like terms.",
            help: { rule: "Expand each bracket before simplifying.", steps: ["4(x + 3) = 4x + 12.", "−5(x − 1) = -5x + 5.", "Combine to get -x + 17."] }
        },

        {
            id: "m-mcq-252", topic: "expansion",
            q: "Expand: x(x² + 3x - 1)",
            options: ["x³ + 3x² - x", "x³ + 3x² - 1", "x² + 3x - 1", "x³ + 2x²"], answer: 0,
            explain: "Multiply x by each term in the bracket.",
            help: { rule: "Use the distributive law.", steps: ["x × x² = x³.", "x × 3x = 3x².", "x × -1 = -1x.", "Result: x³ + 3x² - x."] }
        },

        {
            id: "m-mcq-253", topic: "expansion",
            q: "Expand: 4(x + 4)",
            options: ["8x + 16", "4x + 16", "16x + 4", "4x + 4"], answer: 1,
            explain: "Distribute the outside factor to each term inside the bracket.",
            help: { rule: "a(b + c) = ab + ac", steps: ["4 × x = 4x.", "4 × 4 = 16.", "Result: 4x + 16."] }
        },

        {
            id: "m-mcq-254", topic: "expansion",
            q: "Expand: (x - 1)(x + 2)",
            options: ["x² - 3x - 2", "x² + x + 1", "x² + x - 2", "2x² + x - 2"], answer: 2,
            explain: "Use FOIL and then collect like terms.",
            help: { rule: "(x + a)(x + b) = x² + (a+b)x + ab", steps: ["Middle term coefficient is -1 + 2 = 1.", "Constant term is -1 × 2 = -2.", "Result: x² + x - 2."] }
        },

        {
            id: "m-mcq-255", topic: "expansion",
            q: "Expand: (4x + 1)(2x + 2)",
            options: ["8x² + 18x + 2", "8x² + 10x + 12", "18x² + 10x + 2", "8x² + 10x + 2"], answer: 3,
            explain: "Multiply each term in the first bracket by each term in the second bracket.",
            help: { rule: "Use FOIL or the area model, then simplify.", steps: ["First: 4x × 2x = 8x².", "Middle terms combine to 10x.", "Constant term is 2.", "Result: 8x² + 10x + 2."] }
        },

        {
            id: "m-mcq-256", topic: "expansion",
            q: "Expand: (x − 4)²",
            options: ["x² - 8x + 16", "x² + 8x + 16", "x² - 16", "x² - 4x + 16"], answer: 0,
            explain: "Use the perfect-square identity.",
            help: { rule: "(x − a)² = x² − 2ax + a²", steps: ["Square the first term: x².", "Middle term: −2 × x × 4 = -8x.", "Last term: 4² = 16.", "Result: x² - 8x + 16."] }
        },

        {
            id: "m-mcq-257", topic: "expansion",
            q: "Expand and simplify: 5(x + 4) − 2(x − 1)",
            options: ["7x + 22", "3x + 22", "3x + 18", "4x + 22"], answer: 1,
            explain: "Distribute both factors, then combine like terms.",
            help: { rule: "Expand each bracket before simplifying.", steps: ["5(x + 4) = 5x + 20.", "−2(x − 1) = -2x + 2.", "Combine to get 3x + 22."] }
        },

        /* ----- Added MCQs: alg-fractions ----- */

        {
            id: "m-mcq-258", topic: "alg-fractions",
            q: "Simplify: (2x + 4)/(x + 2)",
            options: ["4", "x + 2", "2", "2x"], answer: 2,
            explain: "Factor the numerator and cancel the common factor.",
            help: { rule: "Factor first, then cancel any common factor.", steps: ["2x + 4 = 2(x + 2).", "Cancel (x + 2).", "Result: 2."] }
        },

        {
            id: "m-mcq-259", topic: "alg-fractions",
            q: "Simplify: (x² − 4)/(x + 2) assuming x ≠ −2",
            options: ["x + 2", "x² − 2", "(x − 2)/x", "x − 2"], answer: 3,
            explain: "Use difference of squares and cancel the common factor.",
            help: { rule: "a² − b² = (a − b)(a + b)", steps: ["x² − 4 = (x − 2)(x + 2).", "Cancel (x + 2).", "Result: x − 2."] }
        },

        {
            id: "m-mcq-260", topic: "alg-fractions",
            q: "Simplify: 1x/4 + 3x/5",
            options: ["17/20x", "4x/9", "-7/20x", "19/20x"], answer: 0,
            explain: "Use the lowest common denominator, then add the numerators.",
            help: { rule: "Add algebraic fractions by using a common denominator.", steps: ["LCD = 20.", "Add the numerators to get 17/20x."] }
        },

        {
            id: "m-mcq-261", topic: "alg-fractions",
            q: "Write in simplest form: x/(x + 1) + 1/(x + 1)",
            options: ["x + 1", "1", "x", "1/(x + 1)"], answer: 1,
            explain: "The numerators add to the denominator.",
            help: { rule: "When the denominator is the same, add the numerators.", steps: ["x + 1 over x + 1 = 1."] }
        },

        {
            id: "m-mcq-262", topic: "alg-fractions",
            q: "Simplify: (6x³y³)/(3x¹y¹)",
            options: ["2x⁴y⁴", "3x²y²", "2x²y²", "18x²y²"], answer: 2,
            explain: "Divide coefficients and subtract indices on matching variables.",
            help: { rule: "Cancel common factors using index laws.", steps: ["6/3 = 2.", "x³ ÷ x¹ = x² and y³ ÷ y¹ = y².", "Result: 2x²y²."] }
        },

        {
            id: "m-mcq-263", topic: "alg-fractions",
            q: "Simplify: (x² + 2x)/x",
            options: ["x² + 2", "x + 2x", "2", "x + 2"], answer: 3,
            explain: "Factor x from the numerator and cancel it.",
            help: { rule: "Cancel the common factor x after factoring the numerator.", steps: ["x² + 2x = x(x + 2).", "Cancel x.", "Result: x + 2."] }
        },

        {
            id: "m-mcq-264", topic: "alg-fractions",
            q: "Simplify: (3x + 9)/(x + 3)",
            options: ["3", "6", "x + 3", "3x"], answer: 0,
            explain: "Factor the numerator and cancel the common factor.",
            help: { rule: "Factor first, then cancel any common factor.", steps: ["3x + 9 = 3(x + 3).", "Cancel (x + 3).", "Result: 3."] }
        },

        {
            id: "m-mcq-265", topic: "alg-fractions",
            q: "Simplify: (x² − 9)/(x + 3) assuming x ≠ −3",
            options: ["x + 3", "x − 3", "x² − 3", "(x − 3)/x"], answer: 1,
            explain: "Use difference of squares and cancel the common factor.",
            help: { rule: "a² − b² = (a − b)(a + b)", steps: ["x² − 9 = (x − 3)(x + 3).", "Cancel (x + 3).", "Result: x − 3."] }
        },

        {
            id: "m-mcq-266", topic: "alg-fractions",
            q: "Simplify: 2x/5 + 1x/6",
            options: ["3x/11", "7/30x", "17/30x", "8/15x"], answer: 2,
            explain: "Use the lowest common denominator, then add the numerators.",
            help: { rule: "Add algebraic fractions by using a common denominator.", steps: ["LCD = 30.", "Add the numerators to get 17/30x."] }
        },

        {
            id: "m-mcq-267", topic: "alg-fractions",
            q: "Simplify: x/(x + 2) + 2/(x + 2)",
            options: ["x + 2", "x", "1/(x + 2)", "1"], answer: 3,
            explain: "The numerators add to the denominator.",
            help: { rule: "When the denominator is the same, add the numerators.", steps: ["x + 2 over x + 2 = 1."] }
        },

        {
            id: "m-mcq-268", topic: "alg-fractions",
            q: "Simplify: (7x⁴y²)/(4x²y¹)",
            options: ["7/4x²y¹", "7/4x⁶y³", "3x²y¹", "28x²y¹"], answer: 0,
            explain: "Divide coefficients and subtract indices on matching variables.",
            help: { rule: "Cancel common factors using index laws.", steps: ["7/4 = 7/4.", "x⁴ ÷ x² = x² and y² ÷ y¹ = y¹.", "Result: 7/4x²y¹."] }
        },

        {
            id: "m-mcq-269", topic: "alg-fractions",
            q: "Simplify: (x² + 3x)/x",
            options: ["x² + 3", "x + 3", "x + 3x", "3"], answer: 1,
            explain: "Factor x from the numerator and cancel it.",
            help: { rule: "Cancel the common factor x after factoring the numerator.", steps: ["x² + 3x = x(x + 3).", "Cancel x.", "Result: x + 3."] }
        },

        {
            id: "m-mcq-270", topic: "alg-fractions",
            q: "Simplify: (4x + 16)/(x + 4)",
            options: ["8", "x + 4", "4", "4x"], answer: 2,
            explain: "Factor the numerator and cancel the common factor.",
            help: { rule: "Factor first, then cancel any common factor.", steps: ["4x + 16 = 4(x + 4).", "Cancel (x + 4).", "Result: 4."] }
        },

        {
            id: "m-mcq-271", topic: "alg-fractions",
            q: "Simplify: (x² − 16)/(x + 4) assuming x ≠ −4",
            options: ["x + 4", "x² − 4", "(x − 4)/x", "x − 4"], answer: 3,
            explain: "Use difference of squares and cancel the common factor.",
            help: { rule: "a² − b² = (a − b)(a + b)", steps: ["x² − 16 = (x − 4)(x + 4).", "Cancel (x + 4).", "Result: x − 4."] }
        },

        {
            id: "m-mcq-272", topic: "alg-fractions",
            q: "Simplify: 3x/3 + 2x/7",
            options: ["9/7x", "5x/10", "5/7x", "23/21x"], answer: 0,
            explain: "Use the lowest common denominator, then add the numerators.",
            help: { rule: "Add algebraic fractions by using a common denominator.", steps: ["LCD = 21.", "Add the numerators to get 9/7x."] }
        },

        {
            id: "m-mcq-273", topic: "alg-fractions",
            q: "Simplify: x/(x + 3) + 3/(x + 3)",
            options: ["x + 3", "1", "x", "1/(x + 3)"], answer: 1,
            explain: "The numerators add to the denominator.",
            help: { rule: "When the denominator is the same, add the numerators.", steps: ["x + 3 over x + 3 = 1."] }
        },

        {
            id: "m-mcq-274", topic: "alg-fractions",
            q: "Simplify: (8x³y³)/(5x¹y¹)",
            options: ["8/5x⁴y⁴", "3x²y²", "8/5x²y²", "40x²y²"], answer: 2,
            explain: "Divide coefficients and subtract indices on matching variables.",
            help: { rule: "Cancel common factors using index laws.", steps: ["8/5 = 8/5.", "x³ ÷ x¹ = x² and y³ ÷ y¹ = y².", "Result: 8/5x²y²."] }
        },

        /* ----- Added MCQs: linear-eq ----- */

        {
            id: "m-mcq-275", topic: "linear-eq",
            q: "Solve: 2x - 4 = 0",
            options: ["x = -2", "x = 3", "0", "x = 2"], answer: 3,
            explain: "Undo the addition/subtraction, then divide by the coefficient of x.",
            help: { rule: "Solve linear equations by isolating x.", steps: ["Move -4 to the other side, then divide by 2.", "x = 2."] }
        },

        {
            id: "m-mcq-276", topic: "linear-eq",
            q: "Solve: 5 − 2x = 1",
            options: ["x = 2", "x = -2", "x = 4", "0"], answer: 0,
            explain: "Subtract the constant first, then divide by the negative coefficient.",
            help: { rule: "Keep track of the negative sign when isolating x.", steps: ["−2x = -4.", "Divide by −2: x = 2."] }
        },

        {
            id: "m-mcq-277", topic: "linear-eq",
            q: "Solve: 2(x + 2) = 8",
            options: ["x = 6", "x = 2", "x = 4", "x = 1"], answer: 1,
            explain: "Divide both sides by the outside factor, then solve the bracket equation.",
            help: { rule: "Undo operations in reverse order.", steps: ["Divide by 2: x + 2 = 4.", "Subtract 2: x = 2."] }
        },

        {
            id: "m-mcq-278", topic: "linear-eq",
            q: "Solve: x/2 = 1",
            options: ["x = 1", "x = 4", "x = 2", "0"], answer: 2,
            explain: "Multiply both sides by the denominator.",
            help: { rule: "Clear the division by multiplying both sides by the denominator.", steps: ["Multiply by 2.", "x = 2."] }
        },

        {
            id: "m-mcq-279", topic: "linear-eq",
            q: "Solve: 2x - 2 = 1x",
            options: ["x = 5", "x = -2", "0", "x = 2"], answer: 3,
            explain: "Collect the x-terms on one side and the constants on the other.",
            help: { rule: "Move all variable terms to one side before dividing.", steps: ["Subtract 1x from both sides.", "Solve the remaining one-step equation to get x = 2."] }
        },

        {
            id: "m-mcq-280", topic: "linear-eq",
            q: "Find the solution(s) to 2x - 4 = 0",
            options: ["x = 2", "x = -2", "x = 3", "0"], answer: 0,
            explain: "Undo the addition/subtraction, then divide by the coefficient of x.",
            help: { rule: "Solve linear equations by isolating x.", steps: ["Move -4 to the other side, then divide by 2.", "x = 2."] }
        },

        {
            id: "m-mcq-281", topic: "linear-eq",
            q: "Solve: 6 − 3x = -3",
            options: ["x = -3", "x = 3", "x = 9", "x = 5"], answer: 1,
            explain: "Subtract the constant first, then divide by the negative coefficient.",
            help: { rule: "Keep track of the negative sign when isolating x.", steps: ["−3x = -9.", "Divide by −3: x = 3."] }
        },

        {
            id: "m-mcq-282", topic: "linear-eq",
            q: "Solve: 3(x + 3) = 18",
            options: ["x = 15", "x = 6", "x = 3", "x = 2"], answer: 2,
            explain: "Divide both sides by the outside factor, then solve the bracket equation.",
            help: { rule: "Undo operations in reverse order.", steps: ["Divide by 3: x + 3 = 6.", "Subtract 3: x = 3."] }
        },

        {
            id: "m-mcq-283", topic: "linear-eq",
            q: "Solve: x/3 = 1",
            options: ["x = 1", "x = 6", "0", "x = 3"], answer: 3,
            explain: "Multiply both sides by the denominator.",
            help: { rule: "Clear the division by multiplying both sides by the denominator.", steps: ["Multiply by 3.", "x = 3."] }
        },

        {
            id: "m-mcq-284", topic: "linear-eq",
            q: "Solve: 3x - 3 = 2x",
            options: ["x = 3", "x = 6", "x = -3", "0"], answer: 0,
            explain: "Collect the x-terms on one side and the constants on the other.",
            help: { rule: "Move all variable terms to one side before dividing.", steps: ["Subtract 2x from both sides.", "Solve the remaining one-step equation to get x = 3."] }
        },

        {
            id: "m-mcq-285", topic: "linear-eq",
            q: "Solve: 3x - 3 = 6",
            options: ["x = 9", "x = 3", "x = 4", "0"], answer: 1,
            explain: "Undo the addition/subtraction, then divide by the coefficient of x.",
            help: { rule: "Solve linear equations by isolating x.", steps: ["Move -3 to the other side, then divide by 3.", "x = 3."] }
        },

        {
            id: "m-mcq-286", topic: "linear-eq",
            q: "Find the solution(s) to 6 − 3x = -3",
            options: ["x = -3", "x = 9", "x = 3", "x = 5"], answer: 2,
            explain: "Subtract the constant first, then divide by the negative coefficient.",
            help: { rule: "Keep track of the negative sign when isolating x.", steps: ["−3x = -9.", "Divide by −3: x = 3."] }
        },

        {
            id: "m-mcq-287", topic: "linear-eq",
            q: "Solve: 4(x + 4) = 32",
            options: ["x = 28", "x = 8", "x = 3", "x = 4"], answer: 3,
            explain: "Divide both sides by the outside factor, then solve the bracket equation.",
            help: { rule: "Undo operations in reverse order.", steps: ["Divide by 4: x + 4 = 8.", "Subtract 4: x = 4."] }
        },

        {
            id: "m-mcq-288", topic: "linear-eq",
            q: "Solve: x/4 = 1",
            options: ["x = 4", "x = 1", "x = 8", "0"], answer: 0,
            explain: "Multiply both sides by the denominator.",
            help: { rule: "Clear the division by multiplying both sides by the denominator.", steps: ["Multiply by 4.", "x = 4."] }
        },

        {
            id: "m-mcq-289", topic: "linear-eq",
            q: "Solve: 4x - 4 = 3x",
            options: ["x = 7", "x = 4", "x = -4", "0"], answer: 1,
            explain: "Collect the x-terms on one side and the constants on the other.",
            help: { rule: "Move all variable terms to one side before dividing.", steps: ["Subtract 3x from both sides.", "Solve the remaining one-step equation to get x = 4."] }
        },

        {
            id: "m-mcq-290", topic: "linear-eq",
            q: "Solve: 4x - 2 = 14",
            options: ["x = 10", "x = 18", "x = 4", "x = 5"], answer: 2,
            explain: "Undo the addition/subtraction, then divide by the coefficient of x.",
            help: { rule: "Solve linear equations by isolating x.", steps: ["Move -2 to the other side, then divide by 4.", "x = 4."] }
        },

        {
            id: "m-mcq-291", topic: "linear-eq",
            q: "Solve: 7 − 4x = -9",
            options: ["x = -4", "x = 16", "x = 6", "x = 4"], answer: 3,
            explain: "Subtract the constant first, then divide by the negative coefficient.",
            help: { rule: "Keep track of the negative sign when isolating x.", steps: ["−4x = -16.", "Divide by −4: x = 4."] }
        },

        /* ----- Added MCQs: linear-eq-multi ----- */

        {
            id: "m-mcq-292", topic: "linear-eq-multi",
            q: "Solve: 3(x + 2) − 4(x + 2) = 0",
            options: ["x = -2", "x = -1", "x = 2", "x = 0"], answer: 0,
            explain: "Expand both brackets, collect like terms, then isolate x.",
            help: { rule: "Clear the brackets before solving.", steps: ["Expand each bracket.", "Collect x-terms and constants.", "Result: x = -2."] }
        },

        {
            id: "m-mcq-293", topic: "linear-eq-multi",
            q: "Solve: (x + 1)/2 − (x + 0)/4 = 0",
            options: ["x = 0", "x = -2", "x = -4", "x = 2"], answer: 1,
            explain: "Multiply through by the LCD to clear fractions first.",
            help: { rule: "Use the lowest common denominator to remove fractions.", steps: ["LCD = 8.", "Expand and simplify.", "Result: x = -2."] }
        },

        {
            id: "m-mcq-294", topic: "linear-eq-multi",
            q: "Solve: 2(2x + 1) = 3(5x + 1)",
            options: ["x = -2", "x = 1/11", "x = -1/11", "No solution"], answer: 2,
            explain: "Expand both sides and solve the resulting linear equation.",
            help: { rule: "After expanding, bring variable terms together and constants together.", steps: ["Expand both brackets.", "Solve the linear equation to get x = -1/11."] }
        },

        {
            id: "m-mcq-295", topic: "linear-eq-multi",
            q: "Solve: (2x - 2)/2 = (3x - 6)/4",
            options: ["x = -1", "x = -3", "x = 2", "x = -2"], answer: 3,
            explain: "Cross-multiply or multiply both sides by the LCD.",
            help: { rule: "Clear denominators before solving.", steps: ["Cross-multiply the two fractions.", "Solve the resulting linear equation: x = -2."] }
        },

        {
            id: "m-mcq-296", topic: "linear-eq-multi",
            q: "Solve: 2(x + 2) + 3 = 3(x + 5) + -6",
            options: ["x = -2", "x = 1", "x = 2", "x = -6"], answer: 0,
            explain: "Expand the brackets, then move all x-terms to one side.",
            help: { rule: "Simplify both sides first, then isolate x.", steps: ["Expand both sides.", "Collect like terms.", "Result: x = -2."] }
        },

        {
            id: "m-mcq-297", topic: "linear-eq-multi",
            q: "Find the solution(s) to 3(x + 2) − 4(x + 2) = 0",
            options: ["x = -1", "x = -2", "x = 2", "x = 0"], answer: 1,
            explain: "Expand both brackets, collect like terms, then isolate x.",
            help: { rule: "Clear the brackets before solving.", steps: ["Expand each bracket.", "Collect x-terms and constants.", "Result: x = -2."] }
        },

        {
            id: "m-mcq-298", topic: "linear-eq-multi",
            q: "Solve: (x + 2)/3 − (x + 1)/5 = 1/3",
            options: ["x = 1", "x = -3", "x = -1", "0"], answer: 2,
            explain: "Multiply through by the LCD to clear fractions first.",
            help: { rule: "Use the lowest common denominator to remove fractions.", steps: ["LCD = 15.", "Expand and simplify.", "Result: x = -1."] }
        },

        {
            id: "m-mcq-299", topic: "linear-eq-multi",
            q: "Solve: 3(3x + 1) = 1(2x + 1)",
            options: ["x = -1", "x = 2/7", "No solution", "x = -2/7"], answer: 3,
            explain: "Expand both sides and solve the resulting linear equation.",
            help: { rule: "After expanding, bring variable terms together and constants together.", steps: ["Expand both brackets.", "Solve the linear equation to get x = -2/7."] }
        },

        {
            id: "m-mcq-300", topic: "linear-eq-multi",
            q: "Solve: (3x - 1)/3 = (4x - 2)/5",
            options: ["x = -1", "x = 0", "x = -2", "x = 1"], answer: 0,
            explain: "Cross-multiply or multiply both sides by the LCD.",
            help: { rule: "Clear denominators before solving.", steps: ["Cross-multiply the two fractions.", "Solve the resulting linear equation: x = -1."] }
        },

        {
            id: "m-mcq-301", topic: "linear-eq-multi",
            q: "Solve: 3(x + 3) + 3 = 1(x + 2) + 8",
            options: ["x = 2", "x = -1", "x = 1", "x = 8"], answer: 1,
            explain: "Expand the brackets, then move all x-terms to one side.",
            help: { rule: "Simplify both sides first, then isolate x.", steps: ["Expand both sides.", "Collect like terms.", "Result: x = -1."] }
        },

        {
            id: "m-mcq-302", topic: "linear-eq-multi",
            q: "Solve: 4(x + 3) − 2(x - 1) = 12",
            options: ["x = 0", "x = 1", "x = -1", "x = 12"], answer: 2,
            explain: "Expand both brackets, collect like terms, then isolate x.",
            help: { rule: "Clear the brackets before solving.", steps: ["Expand each bracket.", "Collect x-terms and constants.", "Result: x = -1."] }
        },

        {
            id: "m-mcq-303", topic: "linear-eq-multi",
            q: "Find the solution(s) to (x + 2)/3 − (x + 1)/5 = 1/3",
            options: ["x = 1", "x = -3", "0", "x = -1"], answer: 3,
            explain: "Multiply through by the LCD to clear fractions first.",
            help: { rule: "Use the lowest common denominator to remove fractions.", steps: ["LCD = 15.", "Expand and simplify.", "Result: x = -1."] }
        },

        {
            id: "m-mcq-304", topic: "linear-eq-multi",
            q: "Solve: 4(4x + 1) = 2(3x + 1)",
            options: ["x = -1/5", "x = 0", "x = 1/5", "No solution"], answer: 0,
            explain: "Expand both sides and solve the resulting linear equation.",
            help: { rule: "After expanding, bring variable terms together and constants together.", steps: ["Expand both brackets.", "Solve the linear equation to get x = -1/5."] }
        },

        {
            id: "m-mcq-305", topic: "linear-eq-multi",
            q: "Solve: (4x + 0)/4 = (1x + 0)/3",
            options: ["x = 1", "x = 0", "x = -1", "0"], answer: 1,
            explain: "Cross-multiply or multiply both sides by the LCD.",
            help: { rule: "Clear denominators before solving.", steps: ["Cross-multiply the two fractions.", "Solve the resulting linear equation: x = 0."] }
        },

        {
            id: "m-mcq-306", topic: "linear-eq-multi",
            q: "Solve: 4(x + 4) + 3 = 2(x + 3) + 13",
            options: ["x = 3", "x = 13", "x = 0", "0"], answer: 2,
            explain: "Expand the brackets, then move all x-terms to one side.",
            help: { rule: "Simplify both sides first, then isolate x.", steps: ["Expand both sides.", "Collect like terms.", "Result: x = 0."] }
        },

        {
            id: "m-mcq-307", topic: "linear-eq-multi",
            q: "Solve: 5(x + 4) − 3(x + 0) = 20",
            options: ["x = 1", "x = 20", "0", "x = 0"], answer: 3,
            explain: "Expand both brackets, collect like terms, then isolate x.",
            help: { rule: "Clear the brackets before solving.", steps: ["Expand each bracket.", "Collect x-terms and constants.", "Result: x = 0."] }
        },

        {
            id: "m-mcq-308", topic: "linear-eq-multi",
            q: "Solve: (x + 3)/4 − (x + 2)/3 = 1/12",
            options: ["x = 0", "x = 2", "x = -2", "0"], answer: 0,
            explain: "Multiply through by the LCD to clear fractions first.",
            help: { rule: "Use the lowest common denominator to remove fractions.", steps: ["LCD = 12.", "Expand and simplify.", "Result: x = 0."] }
        },

        {
            id: "m-mcq-309", topic: "linear-eq-multi",
            q: "Find the solution(s) to 4(4x + 1) = 2(3x + 1)",
            options: ["x = 0", "x = -1/5", "x = 1/5", "No solution"], answer: 1,
            explain: "Expand both sides and solve the resulting linear equation.",
            help: { rule: "After expanding, bring variable terms together and constants together.", steps: ["Expand both brackets.", "Solve the linear equation to get x = -1/5."] }
        },

        /* ----- Added MCQs: quadratic-monic ----- */

        {
            id: "m-mcq-310", topic: "quadratic-monic",
            q: "Solve: x² - 4x + 3 = 0",
            options: ["x = -3 or -1", "x = -3 or 1", "x = 1 or 3", "0"], answer: 2,
            explain: "Factor the quadratic into two brackets and use the zero-product rule.",
            help: { rule: "For a monic quadratic, find two numbers with sum b and product c.", steps: ["Find two numbers adding to 4 and multiplying to 3: 1 and 3.", "So (x − 1)(x − 3) = 0.", "x = 1 or 3."] }
        },

        {
            id: "m-mcq-311", topic: "quadratic-monic",
            q: "Solve: x² − 4 = 0",
            options: ["x = 2", "x = -4 or 4", "x = 0 or 1", "x = -2 or 2"], answer: 3,
            explain: "Difference of squares gives x² = constant, so take both square roots.",
            help: { rule: "If x² = a², then x = ±a.", steps: ["x² = 4.", "x = ±2."] }
        },

        {
            id: "m-mcq-312", topic: "quadratic-monic",
            q: "Solve: x² + 2x = 0",
            options: ["x = -2 or 0", "x = 0 or 2", "x = 2", "No real solution"], answer: 0,
            explain: "Factor out the common x, then set each factor equal to zero.",
            help: { rule: "A common factor of x gives one root straight away.", steps: ["x(x + 2) = 0.", "So x = 0 or x = -2."] }
        },

        {
            id: "m-mcq-313", topic: "quadratic-monic",
            q: "Solve: x³ = 8",
            options: ["x = 8", "x = 2", "x = 4", "x = -2"], answer: 1,
            explain: "Take the cube root of both sides.",
            help: { rule: "If x³ = a, then x = ∛a.", steps: ["x = ∛8 = 2."] }
        },

        {
            id: "m-mcq-314", topic: "quadratic-monic",
            q: "Solve: x² - 2x - 8 = 0",
            options: ["x = -4 or 2", "x = 2 or 4", "x = -2 or 4", "x = -8 or 0"], answer: 2,
            explain: "Find the factor pair that gives the correct sum and product.",
            help: { rule: "Use factorisation and the zero-product rule.", steps: ["Roots are -2 and 4.", "So x = -2 or 4."] }
        },

        {
            id: "m-mcq-315", topic: "quadratic-monic",
            q: "Find the solution(s) to x² - 4x + 3 = 0",
            options: ["x = -3 or -1", "x = -3 or 1", "0", "x = 1 or 3"], answer: 3,
            explain: "Factor the quadratic into two brackets and use the zero-product rule.",
            help: { rule: "For a monic quadratic, find two numbers with sum b and product c.", steps: ["Find two numbers adding to 4 and multiplying to 3: 1 and 3.", "So (x − 1)(x − 3) = 0.", "x = 1 or 3."] }
        },

        {
            id: "m-mcq-316", topic: "quadratic-monic",
            q: "Find the solution(s) to x² − 9 = 0",
            options: ["x = -3 or 3", "x = 3", "x = -9 or 9", "x = 0 or 1"], answer: 0,
            explain: "Difference of squares gives x² = constant, so take both square roots.",
            help: { rule: "If x² = a², then x = ±a.", steps: ["x² = 9.", "x = ±3."] }
        },

        {
            id: "m-mcq-317", topic: "quadratic-monic",
            q: "Solve: x² + 3x = 0",
            options: ["x = 0 or 3", "x = -3 or 0", "x = 3", "No real solution"], answer: 1,
            explain: "Factor out the common x, then set each factor equal to zero.",
            help: { rule: "A common factor of x gives one root straight away.", steps: ["x(x + 3) = 0.", "So x = 0 or x = -3."] }
        },

        {
            id: "m-mcq-318", topic: "quadratic-monic",
            q: "Find the solution(s) to x³ = 27",
            options: ["x = 27", "x = 9", "x = 3", "x = -3"], answer: 2,
            explain: "Take the cube root of both sides.",
            help: { rule: "If x³ = a, then x = ∛a.", steps: ["x = ∛27 = 3."] }
        },

        {
            id: "m-mcq-319", topic: "quadratic-monic",
            q: "Solve: x² - 2x - 15 = 0",
            options: ["x = -5 or 3", "x = 3 or 5", "x = -15 or 0", "x = -3 or 5"], answer: 3,
            explain: "Find the factor pair that gives the correct sum and product.",
            help: { rule: "Use factorisation and the zero-product rule.", steps: ["Roots are -3 and 5.", "So x = -3 or 5."] }
        },

        {
            id: "m-mcq-320", topic: "quadratic-monic",
            q: "Solve: x² - 6x + 8 = 0",
            options: ["x = 2 or 4", "x = -4 or -2", "x = -4 or 2", "x = 1 or 8"], answer: 0,
            explain: "Factor the quadratic into two brackets and use the zero-product rule.",
            help: { rule: "For a monic quadratic, find two numbers with sum b and product c.", steps: ["Find two numbers adding to 6 and multiplying to 8: 2 and 4.", "So (x − 2)(x − 4) = 0.", "x = 2 or 4."] }
        },

        {
            id: "m-mcq-321", topic: "quadratic-monic",
            q: "Determine the value(s) of x that satisfy x² − 9 = 0",
            options: ["x = 3", "x = -3 or 3", "x = -9 or 9", "x = 0 or 1"], answer: 1,
            explain: "Difference of squares gives x² = constant, so take both square roots.",
            help: { rule: "If x² = a², then x = ±a.", steps: ["x² = 9.", "x = ±3."] }
        },

        {
            id: "m-mcq-322", topic: "quadratic-monic",
            q: "Find the solution(s) to x² + 4x = 0",
            options: ["x = 0 or 4", "x = 4", "x = -4 or 0", "No real solution"], answer: 2,
            explain: "Factor out the common x, then set each factor equal to zero.",
            help: { rule: "A common factor of x gives one root straight away.", steps: ["x(x + 4) = 0.", "So x = 0 or x = -4."] }
        },

        {
            id: "m-mcq-323", topic: "quadratic-monic",
            q: "Solve: x³ = 64",
            options: ["x = 64", "x = 16", "x = -4", "x = 4"], answer: 3,
            explain: "Take the cube root of both sides.",
            help: { rule: "If x³ = a, then x = ∛a.", steps: ["x = ∛64 = 4."] }
        },

        {
            id: "m-mcq-324", topic: "quadratic-monic",
            q: "Solve: x² - 2x - 24 = 0",
            options: ["x = -4 or 6", "x = -6 or 4", "x = 4 or 6", "x = -24 or 0"], answer: 0,
            explain: "Find the factor pair that gives the correct sum and product.",
            help: { rule: "Use factorisation and the zero-product rule.", steps: ["Roots are -4 and 6.", "So x = -4 or 6."] }
        },

        {
            id: "m-mcq-325", topic: "quadratic-monic",
            q: "Solve: x² - 8x + 15 = 0",
            options: ["x = -5 or -3", "x = 3 or 5", "x = -5 or 3", "x = 1 or 15"], answer: 1,
            explain: "Factor the quadratic into two brackets and use the zero-product rule.",
            help: { rule: "For a monic quadratic, find two numbers with sum b and product c.", steps: ["Find two numbers adding to 8 and multiplying to 15: 3 and 5.", "So (x − 3)(x − 5) = 0.", "x = 3 or 5."] }
        },

        {
            id: "m-mcq-326", topic: "quadratic-monic",
            q: "Find the solution(s) to x² − 16 = 0",
            options: ["x = 4", "x = -16 or 16", "x = -4 or 4", "x = 0 or 1"], answer: 2,
            explain: "Difference of squares gives x² = constant, so take both square roots.",
            help: { rule: "If x² = a², then x = ±a.", steps: ["x² = 16.", "x = ±4."] }
        },

        /* ----- Added MCQs: quadratic-nonmonic ----- */

        {
            id: "m-mcq-327", topic: "quadratic-nonmonic",
            q: "Solve: 2x² + 5x - 3 = 0",
            options: ["x = -1/2 or 3", "x = 1/2 or 3", "No real solution", "x = -3 or 1/2"], answer: 3,
            explain: "Factor the non-monic quadratic or solve from its two linear factors.",
            help: { rule: "Non-monic quadratics can still factor into two linear brackets.", steps: ["The solutions are 1/2 and -3."] }
        },

        {
            id: "m-mcq-328", topic: "quadratic-nonmonic",
            q: "Find the solution(s) to 2x² + 5x - 3 = 0",
            options: ["x = -3 or 1/2", "x = -1/2 or 3", "x = 1/2 or 3", "No real solution"], answer: 0,
            explain: "Factor the non-monic quadratic or solve from its two linear factors.",
            help: { rule: "Non-monic quadratics can still factor into two linear brackets.", steps: ["The solutions are 1/2 and -3."] }
        },

        {
            id: "m-mcq-329", topic: "quadratic-nonmonic",
            q: "Solve: 2x² = 32",
            options: ["x = 4", "x = -4 or 4", "x = -32 or 32", "x = -2 or 4"], answer: 1,
            explain: "Divide by the coefficient of x² first, then take square roots.",
            help: { rule: "If ax² = b, first make x² the subject.", steps: ["x² = 32/2 = 16.", "x = ±4."] }
        },

        {
            id: "m-mcq-330", topic: "quadratic-nonmonic",
            q: "Solve x² + 5x + 3 = 0 using the quadratic formula. (Exact form)",
            options: ["x = (5 ± √13)/2", "x = (−5 ± √17)/2", "x = (−5 ± √13)/2", "No real solution"], answer: 2,
            explain: "Substitute a = 1, b and c into the quadratic formula.",
            help: { rule: "x = (−b ± √(b² − 4ac)) / 2a", steps: ["Discriminant = 5² − 4(3) = 13.", "So x = (−5 ± √13)/2."] }
        },

        {
            id: "m-mcq-331", topic: "quadratic-nonmonic",
            q: "Solve: 2x² - 4x = 0",
            options: ["x = -2 or 0", "x = 2", "No real solution", "x = 0 or 2"], answer: 3,
            explain: "Factor out the common x first.",
            help: { rule: "Always look for a common factor before using harder methods.", steps: ["2x(x − 2) = 0.", "So x = 0 or 2."] }
        },

        {
            id: "m-mcq-332", topic: "quadratic-nonmonic",
            q: "Determine the value(s) of x that satisfy 2x² + 5x - 3 = 0",
            options: ["x = -3 or 1/2", "x = -1/2 or 3", "x = 1/2 or 3", "No real solution"], answer: 0,
            explain: "Factor the non-monic quadratic or solve from its two linear factors.",
            help: { rule: "Non-monic quadratics can still factor into two linear brackets.", steps: ["The solutions are 1/2 and -3."] }
        },

        {
            id: "m-mcq-333", topic: "quadratic-nonmonic",
            q: "Solve: 3x² + 10x - 8 = 0",
            options: ["x = -2/3 or 4", "x = -4 or 2/3", "x = 2/3 or 4", "No real solution"], answer: 1,
            explain: "Factor the non-monic quadratic or solve from its two linear factors.",
            help: { rule: "Non-monic quadratics can still factor into two linear brackets.", steps: ["The solutions are 2/3 and -4."] }
        },

        {
            id: "m-mcq-334", topic: "quadratic-nonmonic",
            q: "Solve: 3x² = 75",
            options: ["x = 5", "x = -75 or 75", "x = -5 or 5", "0"], answer: 2,
            explain: "Divide by the coefficient of x² first, then take square roots.",
            help: { rule: "If ax² = b, first make x² the subject.", steps: ["x² = 75/3 = 25.", "x = ±5."] }
        },

        {
            id: "m-mcq-335", topic: "quadratic-nonmonic",
            q: "Solve x² + 6x + 4 = 0 using the quadratic formula. (Exact form)",
            options: ["x = (6 ± √20)/2", "x = (−6 ± √24)/2", "No real solution", "x = (−6 ± √20)/2"], answer: 3,
            explain: "Substitute a = 1, b and c into the quadratic formula.",
            help: { rule: "x = (−b ± √(b² − 4ac)) / 2a", steps: ["Discriminant = 6² − 4(4) = 20.", "So x = (−6 ± √20)/2."] }
        },

        {
            id: "m-mcq-336", topic: "quadratic-nonmonic",
            q: "Solve: 3x² - 9x = 0",
            options: ["x = 0 or 3", "x = -3 or 0", "x = 3", "No real solution"], answer: 0,
            explain: "Factor out the common x first.",
            help: { rule: "Always look for a common factor before using harder methods.", steps: ["3x(x − 3) = 0.", "So x = 0 or 3."] }
        },

        {
            id: "m-mcq-337", topic: "quadratic-nonmonic",
            q: "Find the solution(s) to 3x² + 10x - 8 = 0",
            options: ["x = -2/3 or 4", "x = -4 or 2/3", "x = 2/3 or 4", "No real solution"], answer: 1,
            explain: "Factor the non-monic quadratic or solve from its two linear factors.",
            help: { rule: "Non-monic quadratics can still factor into two linear brackets.", steps: ["The solutions are 2/3 and -4."] }
        },

        {
            id: "m-mcq-338", topic: "quadratic-nonmonic",
            q: "Determine the value(s) of x that satisfy 3x² + 10x - 8 = 0",
            options: ["x = -2/3 or 4", "x = 2/3 or 4", "x = -4 or 2/3", "No real solution"], answer: 2,
            explain: "Factor the non-monic quadratic or solve from its two linear factors.",
            help: { rule: "Non-monic quadratics can still factor into two linear brackets.", steps: ["The solutions are 2/3 and -4."] }
        },

        {
            id: "m-mcq-339", topic: "quadratic-nonmonic",
            q: "Solve: 4x² = 144",
            options: ["x = 6", "x = -144 or 144", "0", "x = -6 or 6"], answer: 3,
            explain: "Divide by the coefficient of x² first, then take square roots.",
            help: { rule: "If ax² = b, first make x² the subject.", steps: ["x² = 144/4 = 36.", "x = ±6."] }
        },

        {
            id: "m-mcq-340", topic: "quadratic-nonmonic",
            q: "Solve x² + 7x + 5 = 0 using the quadratic formula. (Exact form)",
            options: ["x = (−7 ± √29)/2", "x = (7 ± √29)/2", "x = (−7 ± √33)/2", "No real solution"], answer: 0,
            explain: "Substitute a = 1, b and c into the quadratic formula.",
            help: { rule: "x = (−b ± √(b² − 4ac)) / 2a", steps: ["Discriminant = 7² − 4(5) = 29.", "So x = (−7 ± √29)/2."] }
        },

        {
            id: "m-mcq-341", topic: "quadratic-nonmonic",
            q: "Solve: 4x² - 16x = 0",
            options: ["x = -4 or 0", "x = 0 or 4", "x = 4", "No real solution"], answer: 1,
            explain: "Factor out the common x first.",
            help: { rule: "Always look for a common factor before using harder methods.", steps: ["4x(x − 4) = 0.", "So x = 0 or 4."] }
        },

        {
            id: "m-mcq-342", topic: "quadratic-nonmonic",
            q: "Solve: 4x² + 17x - 15 = 0",
            options: ["x = -3/4 or 5", "x = 3/4 or 5", "x = -5 or 3/4", "No real solution"], answer: 2,
            explain: "Factor the non-monic quadratic or solve from its two linear factors.",
            help: { rule: "Non-monic quadratics can still factor into two linear brackets.", steps: ["The solutions are 3/4 and -5."] }
        },

        {
            id: "m-mcq-343", topic: "quadratic-nonmonic",
            q: "Find the solution(s) to 4x² + 17x - 15 = 0",
            options: ["x = -3/4 or 5", "x = 3/4 or 5", "No real solution", "x = -5 or 3/4"], answer: 3,
            explain: "Factor the non-monic quadratic or solve from its two linear factors.",
            help: { rule: "Non-monic quadratics can still factor into two linear brackets.", steps: ["The solutions are 3/4 and -5."] }
        },

        {
            id: "m-mcq-344", topic: "quadratic-nonmonic",
            q: "Find the solution(s) to 4x² = 144",
            options: ["x = -6 or 6", "x = 6", "x = -144 or 144", "0"], answer: 0,
            explain: "Divide by the coefficient of x² first, then take square roots.",
            help: { rule: "If ax² = b, first make x² the subject.", steps: ["x² = 144/4 = 36.", "x = ±6."] }
        },

        /* ----- Added MCQs: inequalities ----- */

        {
            id: "m-mcq-345", topic: "inequalities",
            q: "Solve: 2x - 3 > -9",
            options: ["x < -3", "x > -3", "x ≥ -3", "x ≤ -3"], answer: 1,
            explain: "Solve as an equation first, then keep the same inequality direction because you divide by a positive number.",
            help: { rule: "Only flip the inequality if you multiply or divide by a negative number.", steps: ["2x > -6.", "x > -3."] }
        },

        {
            id: "m-mcq-346", topic: "inequalities",
            q: "Solve: 5 − 2x ≤ 11",
            options: ["x ≤ -3", "x > -3", "x ≥ -3", "x < -3"], answer: 2,
            explain: "After subtracting the constant, divide by a negative number and flip the inequality.",
            help: { rule: "Flip the inequality when dividing by a negative coefficient.", steps: ["−2x ≤ 6.", "Divide by −2 and flip: x ≥ -3."] }
        },

        {
            id: "m-mcq-347", topic: "inequalities",
            q: "Solve: −x ≥ -3",
            options: ["x ≥ 3", "x < 3", "x > -3", "x ≤ 3"], answer: 3,
            explain: "Multiplying by −1 reverses the inequality.",
            help: { rule: "x changes direction when multiplied or divided by −1.", steps: ["Multiply by −1 and flip: x ≤ 3."] }
        },

        {
            id: "m-mcq-348", topic: "inequalities",
            q: "Solve: 2(x + 2) < -2",
            options: ["x < -3", "x > -3", "x ≤ -3", "x ≥ -3"], answer: 0,
            explain: "Divide by the positive coefficient, then isolate x.",
            help: { rule: "Expand or divide first, then solve like an equation.", steps: ["x + 2 < -1.0.", "x < -3."] }
        },

        {
            id: "m-mcq-349", topic: "inequalities",
            q: "Solve: x/2 + 2 ≥ 1/2",
            options: ["x ≤ -3", "x ≥ -3", "x > -3", "x < -3"], answer: 1,
            explain: "Subtract first, then multiply by the positive denominator.",
            help: { rule: "Clear fractions after isolating the fractional term.", steps: ["x/2 ≥ -3/2.", "Multiply by 2: x ≥ -3."] }
        },

        {
            id: "m-mcq-350", topic: "inequalities",
            q: "Find the solution(s) to 2x - 3 > -9",
            options: ["x < -3", "x ≥ -3", "x > -3", "x ≤ -3"], answer: 2,
            explain: "Solve as an equation first, then keep the same inequality direction because you divide by a positive number.",
            help: { rule: "Only flip the inequality if you multiply or divide by a negative number.", steps: ["2x > -6.", "x > -3."] }
        },

        {
            id: "m-mcq-351", topic: "inequalities",
            q: "Solve: 6 − 3x ≤ 12",
            options: ["x ≤ -2", "x > -2", "x < -2", "x ≥ -2"], answer: 3,
            explain: "After subtracting the constant, divide by a negative number and flip the inequality.",
            help: { rule: "Flip the inequality when dividing by a negative coefficient.", steps: ["−3x ≤ 6.", "Divide by −3 and flip: x ≥ -2."] }
        },

        {
            id: "m-mcq-352", topic: "inequalities",
            q: "Solve: −x ≥ -2",
            options: ["x ≤ 2", "x ≥ 2", "x < 2", "x > -2"], answer: 0,
            explain: "Multiplying by −1 reverses the inequality.",
            help: { rule: "x changes direction when multiplied or divided by −1.", steps: ["Multiply by −1 and flip: x ≤ 2."] }
        },

        {
            id: "m-mcq-353", topic: "inequalities",
            q: "Solve: 3(x + 3) < 3",
            options: ["x > -2", "x < -2", "x ≤ -2", "x ≥ -2"], answer: 1,
            explain: "Divide by the positive coefficient, then isolate x.",
            help: { rule: "Expand or divide first, then solve like an equation.", steps: ["x + 3 < 1.0.", "x < -2."] }
        },

        {
            id: "m-mcq-354", topic: "inequalities",
            q: "Solve: x/3 + 3 ≥ 7/3",
            options: ["x ≤ -2", "x > -2", "x ≥ -2", "x < -2"], answer: 2,
            explain: "Subtract first, then multiply by the positive denominator.",
            help: { rule: "Clear fractions after isolating the fractional term.", steps: ["x/3 ≥ -2/3.", "Multiply by 3: x ≥ -2."] }
        },

        {
            id: "m-mcq-355", topic: "inequalities",
            q: "Solve: 3x - 2 > -8",
            options: ["x < -2", "x ≥ -2", "x ≤ -2", "x > -2"], answer: 3,
            explain: "Solve as an equation first, then keep the same inequality direction because you divide by a positive number.",
            help: { rule: "Only flip the inequality if you multiply or divide by a negative number.", steps: ["3x > -6.", "x > -2."] }
        },

        {
            id: "m-mcq-356", topic: "inequalities",
            q: "Find the solution(s) to 6 − 3x ≤ 12",
            options: ["x ≥ -2", "x ≤ -2", "x > -2", "x < -2"], answer: 0,
            explain: "After subtracting the constant, divide by a negative number and flip the inequality.",
            help: { rule: "Flip the inequality when dividing by a negative coefficient.", steps: ["−3x ≤ 6.", "Divide by −3 and flip: x ≥ -2."] }
        },

        {
            id: "m-mcq-357", topic: "inequalities",
            q: "Solve: −x ≥ -1",
            options: ["x ≥ 1", "x ≤ 1", "x < 1", "x > -1"], answer: 1,
            explain: "Multiplying by −1 reverses the inequality.",
            help: { rule: "x changes direction when multiplied or divided by −1.", steps: ["Multiply by −1 and flip: x ≤ 1."] }
        },

        {
            id: "m-mcq-358", topic: "inequalities",
            q: "Solve: 4(x + 4) < 12",
            options: ["x > -1", "x ≤ -1", "x < -1", "x ≥ -1"], answer: 2,
            explain: "Divide by the positive coefficient, then isolate x.",
            help: { rule: "Expand or divide first, then solve like an equation.", steps: ["x + 4 < 3.0.", "x < -1."] }
        },

        {
            id: "m-mcq-359", topic: "inequalities",
            q: "Solve: x/4 + 4 ≥ 15/4",
            options: ["x ≤ -1", "x > -1", "x < -1", "x ≥ -1"], answer: 3,
            explain: "Subtract first, then multiply by the positive denominator.",
            help: { rule: "Clear fractions after isolating the fractional term.", steps: ["x/4 ≥ -1/4.", "Multiply by 4: x ≥ -1."] }
        },

        {
            id: "m-mcq-360", topic: "inequalities",
            q: "Solve: 4x - 1 > -5",
            options: ["x > -1", "x < -1", "x ≥ -1", "x ≤ -1"], answer: 0,
            explain: "Solve as an equation first, then keep the same inequality direction because you divide by a positive number.",
            help: { rule: "Only flip the inequality if you multiply or divide by a negative number.", steps: ["4x > -4.", "x > -1."] }
        },

        {
            id: "m-mcq-361", topic: "inequalities",
            q: "Solve: 7 − 4x ≤ 11",
            options: ["x ≤ -1", "x ≥ -1", "x > -1", "x < -1"], answer: 1,
            explain: "After subtracting the constant, divide by a negative number and flip the inequality.",
            help: { rule: "Flip the inequality when dividing by a negative coefficient.", steps: ["−4x ≤ 4.", "Divide by −4 and flip: x ≥ -1."] }
        },

        {
            id: "m-mcq-362", topic: "inequalities",
            q: "Find the solution(s) to −x ≥ -1",
            options: ["x ≥ 1", "x < 1", "x ≤ 1", "x > -1"], answer: 2,
            explain: "Multiplying by −1 reverses the inequality.",
            help: { rule: "x changes direction when multiplied or divided by −1.", steps: ["Multiply by −1 and flip: x ≤ 1."] }
        },

        /* ----- Added MCQs: simultaneous ----- */

        {
            id: "m-mcq-363", topic: "simultaneous",
            q: "Solve: 2x + 2y = 8, 3x − 2y = -3",
            options: ["x = 3, y = 1", "x = -1, y = 3", "x = 1, y = -3", "x = 1, y = 3"], answer: 3,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 1, y = 3."] }
        },

        {
            id: "m-mcq-364", topic: "simultaneous",
            q: "Solve: x + y = 4, 2x + 4y = 14",
            options: ["x = 1, y = 3", "x = 3, y = 1", "x = -1, y = 3", "x = 1, y = -3"], answer: 0,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 1, y = 3."] }
        },

        {
            id: "m-mcq-365", topic: "simultaneous",
            q: "Solve: y = 2x + 2, x + y = 5",
            options: ["x = 4, y = 1", "x = 1, y = 4", "x = -1, y = 4", "x = 1, y = -4"], answer: 1,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 1, y = 4."] }
        },

        {
            id: "m-mcq-366", topic: "simultaneous",
            q: "Solve: 2x + 2y = 8, 3x + 2y = 9",
            options: ["x = 3, y = 1", "x = -1, y = 3", "x = 1, y = 3", "x = 1, y = -3"], answer: 2,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 1, y = 3."] }
        },

        {
            id: "m-mcq-367", topic: "simultaneous",
            q: "Solve the simultaneous equations: 2x + 2y = 8, 3x − 2y = -3",
            options: ["x = 3, y = 1", "x = -1, y = 3", "x = 1, y = -3", "x = 1, y = 3"], answer: 3,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 1, y = 3."] }
        },

        {
            id: "m-mcq-368", topic: "simultaneous",
            q: "Solve the simultaneous equations: x + y = 4, 2x + 4y = 14",
            options: ["x = 1, y = 3", "x = 3, y = 1", "x = -1, y = 3", "x = 1, y = -3"], answer: 0,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 1, y = 3."] }
        },

        {
            id: "m-mcq-369", topic: "simultaneous",
            q: "Solve: y = 3x + 3, x + y = 11",
            options: ["x = 9, y = 2", "x = 2, y = 9", "x = -2, y = 9", "x = 2, y = -9"], answer: 1,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 2, y = 9."] }
        },

        {
            id: "m-mcq-370", topic: "simultaneous",
            q: "Solve: 3x + 3y = 18, 1x + 3y = 14",
            options: ["x = 4, y = 2", "x = -2, y = 4", "x = 2, y = 4", "x = 2, y = -4"], answer: 2,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 2, y = 4."] }
        },

        {
            id: "m-mcq-371", topic: "simultaneous",
            q: "Solve: 3x + 3y = 18, 1x − 3y = -10",
            options: ["x = 4, y = 2", "x = -2, y = 4", "x = 2, y = -4", "x = 2, y = 4"], answer: 3,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 2, y = 4."] }
        },

        {
            id: "m-mcq-372", topic: "simultaneous",
            q: "Solve: x + y = 6, 3x + 5y = 26",
            options: ["x = 2, y = 4", "x = 4, y = 2", "x = -2, y = 4", "x = 2, y = -4"], answer: 0,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 2, y = 4."] }
        },

        {
            id: "m-mcq-373", topic: "simultaneous",
            q: "Solve the simultaneous equations: y = 3x + 3, x + y = 11",
            options: ["x = 9, y = 2", "x = 2, y = 9", "x = -2, y = 9", "x = 2, y = -9"], answer: 1,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 2, y = 9."] }
        },

        {
            id: "m-mcq-374", topic: "simultaneous",
            q: "Solve the simultaneous equations: 3x + 3y = 18, 1x + 3y = 14",
            options: ["x = 4, y = 2", "x = -2, y = 4", "x = 2, y = 4", "x = 2, y = -4"], answer: 2,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 2, y = 4."] }
        },

        {
            id: "m-mcq-375", topic: "simultaneous",
            q: "Solve: 4x + 1y = 17, 2x − 1y = 1",
            options: ["x = 5, y = 3", "x = -3, y = 5", "x = 3, y = -5", "x = 3, y = 5"], answer: 3,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 3, y = 5."] }
        },

        {
            id: "m-mcq-376", topic: "simultaneous",
            q: "Solve: x + y = 8, 4x + 3y = 27",
            options: ["x = 3, y = 5", "x = 5, y = 3", "x = -3, y = 5", "x = 3, y = -5"], answer: 0,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 3, y = 5."] }
        },

        {
            id: "m-mcq-377", topic: "simultaneous",
            q: "Solve: y = 2x + 1, x + y = 10",
            options: ["x = 7, y = 3", "x = 3, y = 7", "x = -3, y = 7", "x = 3, y = -7"], answer: 1,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 3, y = 7."] }
        },

        {
            id: "m-mcq-378", topic: "simultaneous",
            q: "Solve: 4x + 1y = 17, 2x + 4y = 26",
            options: ["x = 5, y = 3", "x = -3, y = 5", "x = 3, y = 5", "x = 3, y = -5"], answer: 2,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 3, y = 5."] }
        },

        {
            id: "m-mcq-379", topic: "simultaneous",
            q: "Solve the simultaneous equations: 4x + 1y = 17, 2x − 1y = 1",
            options: ["x = 5, y = 3", "x = -3, y = 5", "x = 3, y = -5", "x = 3, y = 5"], answer: 3,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 3, y = 5."] }
        },

        {
            id: "m-mcq-380", topic: "simultaneous",
            q: "Solve the simultaneous equations: x + y = 8, 4x + 3y = 27",
            options: ["x = 3, y = 5", "x = 5, y = 3", "x = -3, y = 5", "x = 3, y = -5"], answer: 0,
            explain: "Use elimination or substitution to find one variable, then substitute back.",
            help: { rule: "Solve one variable first, then find the other.", steps: ["Eliminate or substitute to find x.", "Substitute back to find y.", "Solution: x = 3, y = 5."] }
        },

        /* ----- Added MCQs: midpoint-gradient ----- */

        {
            id: "m-mcq-381", topic: "midpoint-gradient",
            q: "Gradient of the line through (-2, 2) and (2, 2).",
            options: ["4", "0", "1", "2"], answer: 1,
            explain: "Use m = Δy/Δx = 0/4 = 0.",
            help: { rule: "m = (y₂ − y₁)/(x₂ − x₁)", steps: ["Δy = 0 and Δx = 4.", "m = 0."] }
        },

        {
            id: "m-mcq-382", topic: "midpoint-gradient",
            q: "Distance between (1, 3) and (6, 8).",
            options: ["10", "25", "7.1", "8.1"], answer: 2,
            explain: "Use Pythagoras: √(5² + 5²) = 7.1.",
            help: { rule: "d = √(Δx² + Δy²)", steps: ["Δx = 5, Δy = 5.", "d = √(50) = 7.1."] }
        },

        {
            id: "m-mcq-383", topic: "midpoint-gradient",
            q: "Midpoint of (-4, -1) and (-2, 5).",
            options: ["(-6, 4)", "(-2, 2)", "(-3, 3)", "(-3, 2)"], answer: 3,
            explain: "Average the x-coordinates and the y-coordinates separately.",
            help: { rule: "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)", steps: ["x-midpoint = (-4 + -2)/2 = -3.", "y-midpoint = (-1 + 5)/2 = 2."] }
        },

        {
            id: "m-mcq-384", topic: "midpoint-gradient",
            q: "Gradient of the line through (-1, 2) and (-1, 8).",
            options: ["Undefined (vertical line)", "0", "6", "-1"], answer: 0,
            explain: "The x-values are equal, so Δx = 0 and the gradient is undefined.",
            help: { rule: "Vertical lines have undefined gradient.", steps: ["A vertical line has no finite gradient."] }
        },

        {
            id: "m-mcq-385", topic: "midpoint-gradient",
            q: "Point Q has x-coordinate 4. If the gradient from P(1, 3) to Q is 2, what is the y-coordinate of Q?",
            options: ["5", "9", "6", "10"], answer: 1,
            explain: "Use Δy = m × Δx.",
            help: { rule: "Rearrange the gradient formula to find the missing change in y.", steps: ["Δx = 3.", "Δy = 2 × 3 = 6.", "y-coordinate = 9."] }
        },

        {
            id: "m-mcq-386", topic: "midpoint-gradient",
            q: "Find the slope of the line through (-2, 2) and (2, 2).",
            options: ["4", "1", "0", "2"], answer: 2,
            explain: "Use m = Δy/Δx = 0/4 = 0.",
            help: { rule: "m = (y₂ − y₁)/(x₂ − x₁)", steps: ["Δy = 0 and Δx = 4.", "m = 0."] }
        },

        {
            id: "m-mcq-387", topic: "midpoint-gradient",
            q: "Distance between (2, 4) and (5, 8).",
            options: ["7", "12", "6", "5"], answer: 3,
            explain: "Use Pythagoras: √(3² + 4²) = 5.",
            help: { rule: "d = √(Δx² + Δy²)", steps: ["Δx = 3, Δy = 4.", "d = √(25) = 5."] }
        },

        {
            id: "m-mcq-388", topic: "midpoint-gradient",
            q: "Midpoint of (-3, 0) and (1, 8).",
            options: ["(-1, 4)", "(-2, 8)", "(0, 4)", "(-1, 5)"], answer: 0,
            explain: "Average the x-coordinates and the y-coordinates separately.",
            help: { rule: "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)", steps: ["x-midpoint = (-3 + 1)/2 = -1.", "y-midpoint = (0 + 8)/2 = 4."] }
        },

        {
            id: "m-mcq-389", topic: "midpoint-gradient",
            q: "Gradient of the line through (0, 3) and (0, 9).",
            options: ["0", "Undefined (vertical line)", "6", "1"], answer: 1,
            explain: "The x-values are equal, so Δx = 0 and the gradient is undefined.",
            help: { rule: "Vertical lines have undefined gradient.", steps: ["A vertical line has no finite gradient."] }
        },

        {
            id: "m-mcq-390", topic: "midpoint-gradient",
            q: "Point Q has x-coordinate 5. If the gradient from P(2, 4) to Q is 3, what is the y-coordinate of Q?",
            options: ["7", "14", "13", "0"], answer: 2,
            explain: "Use Δy = m × Δx.",
            help: { rule: "Rearrange the gradient formula to find the missing change in y.", steps: ["Δx = 3.", "Δy = 3 × 3 = 9.", "y-coordinate = 13."] }
        },

        {
            id: "m-mcq-391", topic: "midpoint-gradient",
            q: "Gradient of the line through (-1, 3) and (4, 4).",
            options: ["5", "1", "0", "1/5"], answer: 3,
            explain: "Use m = Δy/Δx = 1/5 = 1/5.",
            help: { rule: "m = (y₂ − y₁)/(x₂ − x₁)", steps: ["Δy = 1 and Δx = 5.", "m = 1/5."] }
        },

        {
            id: "m-mcq-392", topic: "midpoint-gradient",
            q: "Find the distance between (2, 4) and (5, 8).",
            options: ["5", "7", "12", "6"], answer: 0,
            explain: "Use Pythagoras: √(3² + 4²) = 5.",
            help: { rule: "d = √(Δx² + Δy²)", steps: ["Δx = 3, Δy = 4.", "d = √(25) = 5."] }
        },

        {
            id: "m-mcq-393", topic: "midpoint-gradient",
            q: "Midpoint of (-2, 1) and (4, 5).",
            options: ["(2, 6)", "(1, 3)", "(2, 3)", "(1, 4)"], answer: 1,
            explain: "Average the x-coordinates and the y-coordinates separately.",
            help: { rule: "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)", steps: ["x-midpoint = (-2 + 4)/2 = 1.", "y-midpoint = (1 + 5)/2 = 3."] }
        },

        {
            id: "m-mcq-394", topic: "midpoint-gradient",
            q: "Gradient of the line through (1, 4) and (1, 6).",
            options: ["0", "2", "Undefined (vertical line)", "1"], answer: 2,
            explain: "The x-values are equal, so Δx = 0 and the gradient is undefined.",
            help: { rule: "Vertical lines have undefined gradient.", steps: ["A vertical line has no finite gradient."] }
        },

        {
            id: "m-mcq-395", topic: "midpoint-gradient",
            q: "Point Q has x-coordinate 6. If the gradient from P(3, 5) to Q is 4, what is the y-coordinate of Q?",
            options: ["9", "8", "18", "17"], answer: 3,
            explain: "Use Δy = m × Δx.",
            help: { rule: "Rearrange the gradient formula to find the missing change in y.", steps: ["Δx = 3.", "Δy = 4 × 3 = 12.", "y-coordinate = 17."] }
        },

        {
            id: "m-mcq-396", topic: "midpoint-gradient",
            q: "Gradient of the line through (0, 4) and (2, 6).",
            options: ["1", "2", "0", "3"], answer: 0,
            explain: "Use m = Δy/Δx = 2/2 = 1.",
            help: { rule: "m = (y₂ − y₁)/(x₂ − x₁)", steps: ["Δy = 2 and Δx = 2.", "m = 1."] }
        },

        {
            id: "m-mcq-397", topic: "midpoint-gradient",
            q: "Distance between (3, 5) and (7, 10).",
            options: ["9", "6.4", "20", "7.4"], answer: 1,
            explain: "Use Pythagoras: √(4² + 5²) = 6.4.",
            help: { rule: "d = √(Δx² + Δy²)", steps: ["Δx = 4, Δy = 5.", "d = √(41) = 6.4."] }
        },

        /* ----- Added MCQs: slope-intercept ----- */

        {
            id: "m-mcq-398", topic: "slope-intercept",
            q: "Rewrite 2y = 4x - 6 in slope-intercept form and state its gradient.",
            options: ["y = 4x - 6; m = 4", "y = 2x - 3; m = -3", "y = 2x - 3; m = 2", "y = 3x - 3; m = 3"], answer: 2,
            explain: "Divide both sides by 2 to make y the subject.",
            help: { rule: "Slope-intercept form is y = mx + c.", steps: ["Divide by 2: y = 2x - 3.", "So the gradient is 2."] }
        },

        {
            id: "m-mcq-399", topic: "slope-intercept",
            q: "State the gradient and y-intercept of y = -3x - 3.",
            options: ["gradient 3, y-intercept -3", "gradient -3, y-intercept 3", "0", "gradient -3, y-intercept -3"], answer: 3,
            explain: "In y = mx + c, m is the gradient and c is the y-intercept.",
            help: { rule: "Read m and c directly from y = mx + c.", steps: ["m = -3 and c = -3."] }
        },

        {
            id: "m-mcq-400", topic: "slope-intercept",
            q: "Which equation has gradient 1 and y-intercept -2?",
            options: ["y = x - 2", "y = -2x + 1", "y = 2x - 2", "y = x - 1"], answer: 0,
            explain: "Use y = mx + c with the given gradient and intercept.",
            help: { rule: "Substitute the given m and c into y = mx + c.", steps: ["m = 1, c = -2.", "Equation: y = x - 2."] }
        },

        {
            id: "m-mcq-401", topic: "slope-intercept",
            q: "Find the equation of the line with gradient 2 through (2, 0).",
            options: ["y = 2x - 3", "y = 2x - 4", "y = 3x - 4", "y = -2x - 4"], answer: 1,
            explain: "Use y = mx + c and substitute the point to find c.",
            help: { rule: "Substitute the point into y = mx + c.", steps: ["0 = 2(2) + c.", "c = -4.", "Equation: y = 2x - 4."] }
        },

        {
            id: "m-mcq-402", topic: "slope-intercept",
            q: "Where does the line y = -2x - 2 cross the y-axis?",
            options: ["(-2, 0)", "(1, -4)", "(0, -2)", "0"], answer: 2,
            explain: "At the y-axis, x = 0.",
            help: { rule: "Set x = 0 to find the y-intercept point.", steps: ["When x = 0, y = -2.", "So the point is (0, -2)."] }
        },

        {
            id: "m-mcq-403", topic: "slope-intercept",
            q: "Express 2y = 4x - 6 in slope-intercept form and give the gradient.",
            options: ["y = 4x - 6; m = 4", "y = 2x - 3; m = -3", "y = 3x - 3; m = 3", "y = 2x - 3; m = 2"], answer: 3,
            explain: "Divide both sides by 2 to make y the subject.",
            help: { rule: "Slope-intercept form is y = mx + c.", steps: ["Divide by 2: y = 2x - 3.", "So the gradient is 2."] }
        },

        {
            id: "m-mcq-404", topic: "slope-intercept",
            q: "State the gradient and y-intercept of y = -2x - 2.",
            options: ["gradient -2, y-intercept -2", "gradient 2, y-intercept -2", "gradient -2, y-intercept 2", "0"], answer: 0,
            explain: "In y = mx + c, m is the gradient and c is the y-intercept.",
            help: { rule: "Read m and c directly from y = mx + c.", steps: ["m = -2 and c = -2."] }
        },

        {
            id: "m-mcq-405", topic: "slope-intercept",
            q: "Which equation has gradient 2 and y-intercept -1?",
            options: ["y = -x + 2", "y = 2x - 1", "y = 3x - 1", "y = 2x"], answer: 1,
            explain: "Use y = mx + c with the given gradient and intercept.",
            help: { rule: "Substitute the given m and c into y = mx + c.", steps: ["m = 2, c = -1.", "Equation: y = 2x - 1."] }
        },

        {
            id: "m-mcq-406", topic: "slope-intercept",
            q: "Find the equation of the line with gradient 3 through (3, 1).",
            options: ["y = 3x - 7", "y = 4x - 8", "y = 3x - 8", "y = -3x - 8"], answer: 2,
            explain: "Use y = mx + c and substitute the point to find c.",
            help: { rule: "Substitute the point into y = mx + c.", steps: ["1 = 3(3) + c.", "c = -8.", "Equation: y = 3x - 8."] }
        },

        {
            id: "m-mcq-407", topic: "slope-intercept",
            q: "Where does the line y = -x - 1 cross the y-axis?",
            options: ["(-1, 0)", "(1, -2)", "0", "(0, -1)"], answer: 3,
            explain: "At the y-axis, x = 0.",
            help: { rule: "Set x = 0 to find the y-intercept point.", steps: ["When x = 0, y = -1.", "So the point is (0, -1)."] }
        },

        {
            id: "m-mcq-408", topic: "slope-intercept",
            q: "Rewrite 2y = 6x - 4 in slope-intercept form and state its gradient.",
            options: ["y = 3x - 2; m = 3", "y = 6x - 4; m = 6", "y = 3x - 2; m = -2", "y = 4x - 2; m = 4"], answer: 0,
            explain: "Divide both sides by 2 to make y the subject.",
            help: { rule: "Slope-intercept form is y = mx + c.", steps: ["Divide by 2: y = 3x - 2.", "So the gradient is 3."] }
        },

        {
            id: "m-mcq-409", topic: "slope-intercept",
            q: "Identify the gradient and y-intercept of y = -2x - 2.",
            options: ["gradient 2, y-intercept -2", "gradient -2, y-intercept -2", "gradient -2, y-intercept 2", "0"], answer: 1,
            explain: "In y = mx + c, m is the gradient and c is the y-intercept.",
            help: { rule: "Read m and c directly from y = mx + c.", steps: ["m = -2 and c = -2."] }
        },

        {
            id: "m-mcq-410", topic: "slope-intercept",
            q: "Which equation has gradient 3 and y-intercept 0?",
            options: ["y = 3", "y = 4x", "y = 3x", "y = 3x + 1"], answer: 2,
            explain: "Use y = mx + c with the given gradient and intercept.",
            help: { rule: "Substitute the given m and c into y = mx + c.", steps: ["m = 3, c = 0.", "Equation: y = 3x."] }
        },

        {
            id: "m-mcq-411", topic: "slope-intercept",
            q: "Find the equation of the line with gradient 4 through (4, 2).",
            options: ["y = 4x - 13", "y = 5x - 14", "y = -4x - 14", "y = 4x - 14"], answer: 3,
            explain: "Use y = mx + c and substitute the point to find c.",
            help: { rule: "Substitute the point into y = mx + c.", steps: ["2 = 4(4) + c.", "c = -14.", "Equation: y = 4x - 14."] }
        },

        {
            id: "m-mcq-412", topic: "slope-intercept",
            q: "Where does the line y = 0 cross the y-axis?",
            options: ["(0, 0)", "(1, 0)", "0", "1"], answer: 0,
            explain: "At the y-axis, x = 0.",
            help: { rule: "Set x = 0 to find the y-intercept point.", steps: ["When x = 0, y = 0.", "So the point is (0, 0)."] }
        },

        {
            id: "m-mcq-413", topic: "slope-intercept",
            q: "Rewrite 2y = 8x - 2 in slope-intercept form and state its gradient.",
            options: ["y = 8x - 2; m = 8", "y = 4x - 1; m = 4", "y = 4x - 1; m = -1", "y = 5x - 1; m = 5"], answer: 1,
            explain: "Divide both sides by 2 to make y the subject.",
            help: { rule: "Slope-intercept form is y = mx + c.", steps: ["Divide by 2: y = 4x - 1.", "So the gradient is 4."] }
        },

        {
            id: "m-mcq-414", topic: "slope-intercept",
            q: "State the gradient and y-intercept of y = -x - 1.",
            options: ["gradient 1, y-intercept -1", "gradient -1, y-intercept 1", "gradient -1, y-intercept -1", "0"], answer: 2,
            explain: "In y = mx + c, m is the gradient and c is the y-intercept.",
            help: { rule: "Read m and c directly from y = mx + c.", steps: ["m = -1 and c = -1."] }
        },

        /* ----- Added MCQs: lines-perp ----- */

        {
            id: "m-mcq-415", topic: "lines-perp",
            q: "Find the line parallel to y = 2x + 1 through (2, -1).",
            options: ["y = (-1/2)x - 5", "y = 2x - 4", "y = 3x - 5", "y = 2x - 5"], answer: 3,
            explain: "Parallel lines have the same gradient.",
            help: { rule: "Same gradient for parallel lines, then use the point to find c.", steps: ["Parallel gradient = 2.", "Substitute (2, -1) to get c = -5.", "Equation: y = 2x - 5."] }
        },

        {
            id: "m-mcq-416", topic: "lines-perp",
            q: "Find the line perpendicular to y = 2x − 2 through (3, 0).",
            options: ["y = (-1/2)x + 3/2", "y = 2x + 3/2", "y = -2x + 3/2", "y = (-1/2)x + 5/2"], answer: 0,
            explain: "A perpendicular line has gradient equal to the negative reciprocal.",
            help: { rule: "Perpendicular gradient = negative reciprocal.", steps: ["Perpendicular gradient = -1/2.", "Use (3, 0) to find the intercept.", "Equation: y = (-1/2)x + 3/2."] }
        },

        {
            id: "m-mcq-417", topic: "lines-perp",
            q: "What is the gradient of a line perpendicular to one with gradient 1/2?",
            options: ["1/2", "-2", "-1/2", "2"], answer: 1,
            explain: "Take the negative reciprocal.",
            help: { rule: "Perpendicular gradients multiply to −1.", steps: ["Negative reciprocal of 1/2 is -2."] }
        },

        {
            id: "m-mcq-418", topic: "lines-perp",
            q: "What is the gradient of a line parallel to y = -3x + 4?",
            options: ["3", "-2", "-3", "0"], answer: 2,
            explain: "Parallel lines have the same gradient.",
            help: { rule: "Parallel lines keep the same m-value.", steps: ["Gradient = -3."] }
        },

        {
            id: "m-mcq-419", topic: "lines-perp",
            q: "Find the equation parallel to 2x + y = 5 through (2, 4).",
            options: ["y = (1/2)x + 8", "y = -2x + 10", "y = 2x + 8", "y = -2x + 8"], answer: 3,
            explain: "First rewrite the given line as y = mx + c, then keep the same gradient.",
            help: { rule: "Convert to slope-intercept form to read the gradient.", steps: ["2x + y = 5 gives y = -2x + 5, so m = -2.", "Using (2, 4) gives y = -2x + 8."] }
        },

        {
            id: "m-mcq-420", topic: "lines-perp",
            q: "Write the equation of the line parallel to y = 2x + 1 through (2, -1).",
            options: ["y = 2x - 5", "y = (-1/2)x - 5", "y = 2x - 4", "y = 3x - 5"], answer: 0,
            explain: "Parallel lines have the same gradient.",
            help: { rule: "Same gradient for parallel lines, then use the point to find c.", steps: ["Parallel gradient = 2.", "Substitute (2, -1) to get c = -5.", "Equation: y = 2x - 5."] }
        },

        {
            id: "m-mcq-421", topic: "lines-perp",
            q: "Find the line perpendicular to y = 3x − 2 through (4, 1).",
            options: ["y = 3x + 7/3", "y = (-1/3)x + 7/3", "y = -3x + 7/3", "y = (-1/3)x + 10/3"], answer: 1,
            explain: "A perpendicular line has gradient equal to the negative reciprocal.",
            help: { rule: "Perpendicular gradient = negative reciprocal.", steps: ["Perpendicular gradient = -1/3.", "Use (4, 1) to find the intercept.", "Equation: y = (-1/3)x + 7/3."] }
        },

        {
            id: "m-mcq-422", topic: "lines-perp",
            q: "What is the gradient of a line perpendicular to one with gradient 1/3?",
            options: ["1/3", "-1/3", "-3", "3"], answer: 2,
            explain: "Take the negative reciprocal.",
            help: { rule: "Perpendicular gradients multiply to −1.", steps: ["Negative reciprocal of 1/3 is -3."] }
        },

        {
            id: "m-mcq-423", topic: "lines-perp",
            q: "What is the gradient of a line parallel to y = -2x + 4?",
            options: ["2", "-1", "0", "-2"], answer: 3,
            explain: "Parallel lines have the same gradient.",
            help: { rule: "Parallel lines keep the same m-value.", steps: ["Gradient = -2."] }
        },

        {
            id: "m-mcq-424", topic: "lines-perp",
            q: "Find the equation parallel to 2x + y = 5 through (3, 5).",
            options: ["y = -3x + 14", "y = (1/2)x + 14", "y = -3x + 16", "y = 3x + 14"], answer: 0,
            explain: "First rewrite the given line as y = mx + c, then keep the same gradient.",
            help: { rule: "Convert to slope-intercept form to read the gradient.", steps: ["2x + y = 5 gives y = -2x + 5, so m = -2.", "Using (3, 5) gives y = -3x + 14."] }
        },

        {
            id: "m-mcq-425", topic: "lines-perp",
            q: "Find the line parallel to y = 3x + 1 through (3, 0).",
            options: ["y = (-1/3)x - 9", "y = 3x - 9", "y = 3x - 8", "y = 4x - 9"], answer: 1,
            explain: "Parallel lines have the same gradient.",
            help: { rule: "Same gradient for parallel lines, then use the point to find c.", steps: ["Parallel gradient = 3.", "Substitute (3, 0) to get c = -9.", "Equation: y = 3x - 9."] }
        },

        {
            id: "m-mcq-426", topic: "lines-perp",
            q: "Write the equation of the line perpendicular to y = 3x − 2 through (4, 1).",
            options: ["y = 3x + 7/3", "y = -3x + 7/3", "y = (-1/3)x + 7/3", "y = (-1/3)x + 10/3"], answer: 2,
            explain: "A perpendicular line has gradient equal to the negative reciprocal.",
            help: { rule: "Perpendicular gradient = negative reciprocal.", steps: ["Perpendicular gradient = -1/3.", "Use (4, 1) to find the intercept.", "Equation: y = (-1/3)x + 7/3."] }
        },

        {
            id: "m-mcq-427", topic: "lines-perp",
            q: "What is the gradient of a line perpendicular to one with gradient 1/4?",
            options: ["1/4", "-1/4", "4", "-4"], answer: 3,
            explain: "Take the negative reciprocal.",
            help: { rule: "Perpendicular gradients multiply to −1.", steps: ["Negative reciprocal of 1/4 is -4."] }
        },

        {
            id: "m-mcq-428", topic: "lines-perp",
            q: "What is the gradient of a line parallel to y = -1x + 4?",
            options: ["-1", "1", "0", "2"], answer: 0,
            explain: "Parallel lines have the same gradient.",
            help: { rule: "Parallel lines keep the same m-value.", steps: ["Gradient = -1."] }
        },

        {
            id: "m-mcq-429", topic: "lines-perp",
            q: "Find the equation parallel to 2x + y = 5 through (4, 2).",
            options: ["y = (1/2)x + 18", "y = -4x + 18", "y = -4x + 20", "y = 4x + 18"], answer: 1,
            explain: "First rewrite the given line as y = mx + c, then keep the same gradient.",
            help: { rule: "Convert to slope-intercept form to read the gradient.", steps: ["2x + y = 5 gives y = -2x + 5, so m = -2.", "Using (4, 2) gives y = -4x + 18."] }
        },

        {
            id: "m-mcq-430", topic: "lines-perp",
            q: "Find the line parallel to y = 4x + 1 through (4, 1).",
            options: ["y = (-1/4)x - 15", "y = 4x - 14", "y = 4x - 15", "y = 5x - 15"], answer: 2,
            explain: "Parallel lines have the same gradient.",
            help: { rule: "Same gradient for parallel lines, then use the point to find c.", steps: ["Parallel gradient = 4.", "Substitute (4, 1) to get c = -15.", "Equation: y = 4x - 15."] }
        },

        {
            id: "m-mcq-431", topic: "lines-perp",
            q: "Find the line perpendicular to y = 4x − 2 through (5, 2).",
            options: ["y = 4x + 13/4", "y = -4x + 13/4", "y = (-1/4)x + 17/4", "y = (-1/4)x + 13/4"], answer: 3,
            explain: "A perpendicular line has gradient equal to the negative reciprocal.",
            help: { rule: "Perpendicular gradient = negative reciprocal.", steps: ["Perpendicular gradient = -1/4.", "Use (5, 2) to find the intercept.", "Equation: y = (-1/4)x + 13/4."] }
        },

        /* ----- Added MCQs: trig-sides ----- */

        {
            id: "m-mcq-432", topic: "trig-sides",
            q: "A right triangle has angle 30° and hypotenuse 8 m. Find the opposite side (1 dp).",
            options: ["4 m", "6.9 m", "5 m", "8 m"], answer: 0,
            explain: "Use SOH: sin θ = opposite/hypotenuse.",
            help: { rule: "Choose the ratio containing opposite and hypotenuse.", steps: ["opposite = 8 × sin(30°).", "Result ≈ 4 m."] }
        },

        {
            id: "m-mcq-433", topic: "trig-sides",
            q: "A right triangle has angle 25° and adjacent side 5 m. Find the opposite side (1 dp).",
            options: ["10.7 m", "2.3 m", "4.5 m", "5 m"], answer: 1,
            explain: "Use TOA: tan θ = opposite/adjacent.",
            help: { rule: "Choose the tangent ratio for opposite and adjacent.", steps: ["opposite = 5 × tan(25°).", "Result ≈ 2.3 m."] }
        },

        {
            id: "m-mcq-434", topic: "trig-sides",
            q: "A right triangle has angle 30° and opposite side 4 m. Find the hypotenuse (1 dp).",
            options: ["2 m", "4.6 m", "8 m", "4 m"], answer: 2,
            explain: "Rearrange SOH: hypotenuse = opposite / sin θ.",
            help: { rule: "When the hypotenuse is unknown, divide by the trig ratio.", steps: ["hypotenuse = 4 / sin(30°).", "Result ≈ 8 m."] }
        },

        {
            id: "m-mcq-435", topic: "trig-sides",
            q: "A right triangle has angle 30° and hypotenuse 10 m. Find the adjacent side (1 dp).",
            options: ["5 m", "11.5 m", "10 m", "8.7 m"], answer: 3,
            explain: "Use CAH: adjacent = hypotenuse × cos θ.",
            help: { rule: "Choose cosine for adjacent and hypotenuse.", steps: ["adjacent = 10 × cos(30°).", "Result ≈ 8.7 m."] }
        },

        {
            id: "m-mcq-436", topic: "trig-sides",
            q: "A ladder makes an angle of 28° with the ground. If the base is 6 m from the wall, how high up the wall does it reach (1 dp)?",
            options: ["3.2 m", "11.3 m", "2.8 m", "6 m"], answer: 0,
            explain: "Treat the wall, ground and ladder as a right triangle and use tan θ = opposite/adjacent.",
            help: { rule: "For height from ground distance, use tangent.", steps: ["height = 6 × tan(28°).", "Result ≈ 3.2 m."] }
        },

        {
            id: "m-mcq-437", topic: "trig-sides",
            q: "In a right triangle, angle 30° and hypotenuse 8 m. Find the opposite side (1 dp).",
            options: ["6.9 m", "4 m", "5 m", "8 m"], answer: 1,
            explain: "Use SOH: sin θ = opposite/hypotenuse.",
            help: { rule: "Choose the ratio containing opposite and hypotenuse.", steps: ["opposite = 8 × sin(30°).", "Result ≈ 4 m."] }
        },

        {
            id: "m-mcq-438", topic: "trig-sides",
            q: "A right triangle has angle 30° and adjacent side 7 m. Find the opposite side (1 dp).",
            options: ["12.1 m", "6.1 m", "4 m", "7 m"], answer: 2,
            explain: "Use TOA: tan θ = opposite/adjacent.",
            help: { rule: "Choose the tangent ratio for opposite and adjacent.", steps: ["opposite = 7 × tan(30°).", "Result ≈ 4 m."] }
        },

        {
            id: "m-mcq-439", topic: "trig-sides",
            q: "A right triangle has angle 35° and opposite side 6 m. Find the hypotenuse (1 dp).",
            options: ["3.4 m", "7.3 m", "6 m", "10.5 m"], answer: 3,
            explain: "Rearrange SOH: hypotenuse = opposite / sin θ.",
            help: { rule: "When the hypotenuse is unknown, divide by the trig ratio.", steps: ["hypotenuse = 6 / sin(35°).", "Result ≈ 10.5 m."] }
        },

        {
            id: "m-mcq-440", topic: "trig-sides",
            q: "A right triangle has angle 35° and hypotenuse 12 m. Find the adjacent side (1 dp).",
            options: ["9.8 m", "6.9 m", "14.6 m", "12 m"], answer: 0,
            explain: "Use CAH: adjacent = hypotenuse × cos θ.",
            help: { rule: "Choose cosine for adjacent and hypotenuse.", steps: ["adjacent = 12 × cos(35°).", "Result ≈ 9.8 m."] }
        },

        {
            id: "m-mcq-441", topic: "trig-sides",
            q: "A ladder makes an angle of 32° with the ground. If the base is 8 m from the wall, how high up the wall does it reach (1 dp)?",
            options: ["12.8 m", "5 m", "4.2 m", "8 m"], answer: 1,
            explain: "Treat the wall, ground and ladder as a right triangle and use tan θ = opposite/adjacent.",
            help: { rule: "For height from ground distance, use tangent.", steps: ["height = 8 × tan(32°).", "Result ≈ 5 m."] }
        },

        {
            id: "m-mcq-442", topic: "trig-sides",
            q: "A right triangle has angle 35° and hypotenuse 10 m. Find the opposite side (1 dp).",
            options: ["8.2 m", "6.7 m", "5.7 m", "10 m"], answer: 2,
            explain: "Use SOH: sin θ = opposite/hypotenuse.",
            help: { rule: "Choose the ratio containing opposite and hypotenuse.", steps: ["opposite = 10 × sin(35°).", "Result ≈ 5.7 m."] }
        },

        {
            id: "m-mcq-443", topic: "trig-sides",
            q: "In a right triangle, angle 30° and adjacent side 7 m. Find the opposite side (1 dp).",
            options: ["12.1 m", "6.1 m", "7 m", "4 m"], answer: 3,
            explain: "Use TOA: tan θ = opposite/adjacent.",
            help: { rule: "Choose the tangent ratio for opposite and adjacent.", steps: ["opposite = 7 × tan(30°).", "Result ≈ 4 m."] }
        },

        {
            id: "m-mcq-444", topic: "trig-sides",
            q: "A right triangle has angle 40° and opposite side 8 m. Find the hypotenuse (1 dp).",
            options: ["12.4 m", "5.1 m", "10.4 m", "8 m"], answer: 0,
            explain: "Rearrange SOH: hypotenuse = opposite / sin θ.",
            help: { rule: "When the hypotenuse is unknown, divide by the trig ratio.", steps: ["hypotenuse = 8 / sin(40°).", "Result ≈ 12.4 m."] }
        },

        {
            id: "m-mcq-445", topic: "trig-sides",
            q: "A right triangle has angle 40° and hypotenuse 14 m. Find the adjacent side (1 dp).",
            options: ["9 m", "10.7 m", "18.3 m", "14 m"], answer: 1,
            explain: "Use CAH: adjacent = hypotenuse × cos θ.",
            help: { rule: "Choose cosine for adjacent and hypotenuse.", steps: ["adjacent = 14 × cos(40°).", "Result ≈ 10.7 m."] }
        },

        {
            id: "m-mcq-446", topic: "trig-sides",
            q: "A ladder makes an angle of 36° with the ground. If the base is 10 m from the wall, how high up the wall does it reach (1 dp)?",
            options: ["13.8 m", "5.9 m", "7.3 m", "10 m"], answer: 2,
            explain: "Treat the wall, ground and ladder as a right triangle and use tan θ = opposite/adjacent.",
            help: { rule: "For height from ground distance, use tangent.", steps: ["height = 10 × tan(36°).", "Result ≈ 7.3 m."] }
        },

        {
            id: "m-mcq-447", topic: "trig-sides",
            q: "A right triangle has angle 40° and hypotenuse 12 m. Find the opposite side (1 dp).",
            options: ["9.2 m", "8.7 m", "12 m", "7.7 m"], answer: 3,
            explain: "Use SOH: sin θ = opposite/hypotenuse.",
            help: { rule: "Choose the ratio containing opposite and hypotenuse.", steps: ["opposite = 12 × sin(40°).", "Result ≈ 7.7 m."] }
        },

        {
            id: "m-mcq-448", topic: "trig-sides",
            q: "A right triangle has angle 35° and adjacent side 9 m. Find the opposite side (1 dp).",
            options: ["6.3 m", "12.9 m", "7.4 m", "9 m"], answer: 0,
            explain: "Use TOA: tan θ = opposite/adjacent.",
            help: { rule: "Choose the tangent ratio for opposite and adjacent.", steps: ["opposite = 9 × tan(35°).", "Result ≈ 6.3 m."] }
        },

        /* ----- Added MCQs: trig-angles ----- */

        {
            id: "m-mcq-449", topic: "trig-angles",
            q: "A right triangle has opposite side 3 and hypotenuse 5. Find θ (nearest degree).",
            options: ["53°", "37°", "42°", "32°"], answer: 1,
            explain: "Use SOH: sin θ = opposite/hypotenuse.",
            help: { rule: "Find the inverse trig value that matches the given ratio.", steps: ["sin θ = 3/5.", "θ ≈ 37°."] }
        },

        {
            id: "m-mcq-450", topic: "trig-angles",
            q: "A right triangle has adjacent side 4 and hypotenuse 5. Find θ (nearest degree).",
            options: ["53°", "41°", "37°", "33°"], answer: 2,
            explain: "Use CAH: cos θ = adjacent/hypotenuse.",
            help: { rule: "Cosine uses adjacent and hypotenuse.", steps: ["cos θ = 4/5.", "θ ≈ 37°."] }
        },

        {
            id: "m-mcq-451", topic: "trig-angles",
            q: "A right triangle has opposite side 3 and adjacent side 4. Find θ (nearest degree).",
            options: ["53°", "43°", "31°", "37°"], answer: 3,
            explain: "Use TOA: tan θ = opposite/adjacent.",
            help: { rule: "Tangent compares opposite and adjacent.", steps: ["tan θ = 3/4.", "θ ≈ 37°."] }
        },

        {
            id: "m-mcq-452", topic: "trig-angles",
            q: "Find θ if sin θ = 1/2.",
            options: ["30°", "45°", "60°", "90°"], answer: 0,
            explain: "Recognise the special-angle trig values.",
            help: { rule: "Memorise the common exact trig values for 30°, 45° and 60°.", steps: ["The matching special angle is 30°."] }
        },

        {
            id: "m-mcq-453", topic: "trig-angles",
            q: "A ramp rises 6 m over a hypotenuse length of 10 m. Find the angle of the ramp to the nearest degree.",
            options: ["40°", "37°", "34°", "53°"], answer: 1,
            explain: "The ramp angle is opposite the vertical rise, so use sine.",
            help: { rule: "Use the ratio that matches the known sides.", steps: ["sin θ = 6/10.", "θ ≈ 37°."] }
        },

        {
            id: "m-mcq-454", topic: "trig-angles",
            q: "In a right triangle, opposite side 3 and hypotenuse 5. Find θ (nearest degree).",
            options: ["53°", "42°", "37°", "32°"], answer: 2,
            explain: "Use SOH: sin θ = opposite/hypotenuse.",
            help: { rule: "Find the inverse trig value that matches the given ratio.", steps: ["sin θ = 3/5.", "θ ≈ 37°."] }
        },

        {
            id: "m-mcq-455", topic: "trig-angles",
            q: "A right triangle has adjacent side 5 and hypotenuse 13. Find θ (nearest degree).",
            options: ["23°", "71°", "63°", "67°"], answer: 3,
            explain: "Use CAH: cos θ = adjacent/hypotenuse.",
            help: { rule: "Cosine uses adjacent and hypotenuse.", steps: ["cos θ = 5/13.", "θ ≈ 67°."] }
        },

        {
            id: "m-mcq-456", topic: "trig-angles",
            q: "A right triangle has opposite side 4 and adjacent side 7. Find θ (nearest degree).",
            options: ["30°", "60°", "36°", "24°"], answer: 0,
            explain: "Use TOA: tan θ = opposite/adjacent.",
            help: { rule: "Tangent compares opposite and adjacent.", steps: ["tan θ = 4/7.", "θ ≈ 30°."] }
        },

        {
            id: "m-mcq-457", topic: "trig-angles",
            q: "Find θ if cos θ = √2/2.",
            options: ["60°", "45°", "90°", "0"], answer: 1,
            explain: "Recognise the special-angle trig values.",
            help: { rule: "Memorise the common exact trig values for 30°, 45° and 60°.", steps: ["The matching special angle is 45°."] }
        },

        {
            id: "m-mcq-458", topic: "trig-angles",
            q: "A ramp rises 12 m over a hypotenuse length of 13 m. Find the angle of the ramp to the nearest degree.",
            options: ["70°", "64°", "67°", "23°"], answer: 2,
            explain: "The ramp angle is opposite the vertical rise, so use sine.",
            help: { rule: "Use the ratio that matches the known sides.", steps: ["sin θ = 12/13.", "θ ≈ 67°."] }
        },

        {
            id: "m-mcq-459", topic: "trig-angles",
            q: "A right triangle has opposite side 5 and hypotenuse 13. Find θ (nearest degree).",
            options: ["67°", "28°", "18°", "23°"], answer: 3,
            explain: "Use SOH: sin θ = opposite/hypotenuse.",
            help: { rule: "Find the inverse trig value that matches the given ratio.", steps: ["sin θ = 5/13.", "θ ≈ 23°."] }
        },

        {
            id: "m-mcq-460", topic: "trig-angles",
            q: "In a right triangle, adjacent side 5 and hypotenuse 13. Find θ (nearest degree).",
            options: ["67°", "23°", "71°", "63°"], answer: 0,
            explain: "Use CAH: cos θ = adjacent/hypotenuse.",
            help: { rule: "Cosine uses adjacent and hypotenuse.", steps: ["cos θ = 5/13.", "θ ≈ 67°."] }
        },

        {
            id: "m-mcq-461", topic: "trig-angles",
            q: "A right triangle has opposite side 5 and adjacent side 6. Find θ (nearest degree).",
            options: ["50°", "40°", "46°", "34°"], answer: 1,
            explain: "Use TOA: tan θ = opposite/adjacent.",
            help: { rule: "Tangent compares opposite and adjacent.", steps: ["tan θ = 5/6.", "θ ≈ 40°."] }
        },

        {
            id: "m-mcq-462", topic: "trig-angles",
            q: "Find θ if sin θ = √3/2.",
            options: ["45°", "90°", "60°", "0"], answer: 2,
            explain: "Recognise the special-angle trig values.",
            help: { rule: "Memorise the common exact trig values for 30°, 45° and 60°.", steps: ["The matching special angle is 60°."] }
        },

        {
            id: "m-mcq-463", topic: "trig-angles",
            q: "A ramp rises 5 m over a hypotenuse length of 8 m. Find the angle of the ramp to the nearest degree.",
            options: ["42°", "36°", "51°", "39°"], answer: 3,
            explain: "The ramp angle is opposite the vertical rise, so use sine.",
            help: { rule: "Use the ratio that matches the known sides.", steps: ["sin θ = 5/8.", "θ ≈ 39°."] }
        },

        {
            id: "m-mcq-464", topic: "trig-angles",
            q: "A right triangle has opposite side 7 and hypotenuse 10. Find θ (nearest degree).",
            options: ["44°", "46°", "49°", "39°"], answer: 0,
            explain: "Use SOH: sin θ = opposite/hypotenuse.",
            help: { rule: "Find the inverse trig value that matches the given ratio.", steps: ["sin θ = 7/10.", "θ ≈ 44°."] }
        },

        {
            id: "m-mcq-465", topic: "trig-angles",
            q: "A right triangle has adjacent side 8 and hypotenuse 10. Find θ (nearest degree).",
            options: ["53°", "37°", "41°", "33°"], answer: 1,
            explain: "Use CAH: cos θ = adjacent/hypotenuse.",
            help: { rule: "Cosine uses adjacent and hypotenuse.", steps: ["cos θ = 8/10.", "θ ≈ 37°."] }
        },

        /* ----- Added MCQs: trig-elev ----- */

        {
            id: "m-mcq-466", topic: "trig-elev",
            q: "From 20 m away, the angle of elevation to the top of a pole is 18°. Find the pole's height (1 dp).",
            options: ["61.6 m", "6.2 m", "6.5 m", "20 m"], answer: 2,
            explain: "Use tan(elevation) = vertical/horizontal.",
            help: { rule: "Height = horizontal distance × tan(angle).", steps: ["height = 20 × tan(18°).", "Result ≈ 6.5 m."] }
        },

        {
            id: "m-mcq-467", topic: "trig-elev",
            q: "A building is 10 m tall. From what horizontal distance is its top seen at an angle of elevation of 20°? (1 dp)",
            options: ["3.6 m", "29.2 m", "10 m", "27.5 m"], answer: 3,
            explain: "Rearrange tan θ = height/distance.",
            help: { rule: "Distance = height ÷ tan(angle).", steps: ["distance = 10 / tan(20°).", "Result ≈ 27.5 m."] }
        },

        {
            id: "m-mcq-468", topic: "trig-elev",
            q: "A lookout is 12 m high and the observer is 20 m away. Find the angle of elevation to the nearest degree.",
            options: ["31°", "36°", "26°", "59°"], answer: 0,
            explain: "Use tan θ = opposite/adjacent.",
            help: { rule: "Angle of elevation uses the vertical height over the horizontal distance.", steps: ["tan θ = 12/20.", "θ ≈ 31°."] }
        },

        {
            id: "m-mcq-469", topic: "trig-elev",
            q: "A person with eye level 1.6 m stands 18 m from a tower. The angle of elevation to the top is 28°. Find the tower's height (1 dp).",
            options: ["9.6 m", "11.2 m", "12.2 m", "18 m"], answer: 1,
            explain: "Find the rise above eye level, then add the eye height.",
            help: { rule: "Total height = rise above eye level + eye level.", steps: ["rise = 18 × tan(28°) ≈ 9.6 m.", "Add 1.6 m to get 11.2 m."] }
        },

        {
            id: "m-mcq-470", topic: "trig-elev",
            q: "A boat is 80 m from a cliff. If the angle of elevation to the top is 10°, how high is the cliff? (1 dp)",
            options: ["453.7 m", "24.1 m", "14.1 m", "80 m"], answer: 2,
            explain: "Use tangent with vertical height over horizontal distance.",
            help: { rule: "Cliff height = horizontal distance × tan(angle).", steps: ["height = 80 × tan(10°).", "Result ≈ 14.1 m."] }
        },

        {
            id: "m-mcq-471", topic: "trig-elev",
            q: "Use trigonometry to solve this: 20 m away, the angle of elevation to the top of a pole is 18°. Find the pole's height (1 dp).",
            options: ["61.6 m", "6.2 m", "20 m", "6.5 m"], answer: 3,
            explain: "Use tan(elevation) = vertical/horizontal.",
            help: { rule: "Height = horizontal distance × tan(angle).", steps: ["height = 20 × tan(18°).", "Result ≈ 6.5 m."] }
        },

        {
            id: "m-mcq-472", topic: "trig-elev",
            q: "A building is 15 m tall. From what horizontal distance is its top seen at an angle of elevation of 25°? (1 dp)",
            options: ["32.2 m", "7 m", "35.5 m", "15 m"], answer: 0,
            explain: "Rearrange tan θ = height/distance.",
            help: { rule: "Distance = height ÷ tan(angle).", steps: ["distance = 15 / tan(25°).", "Result ≈ 32.2 m."] }
        },

        {
            id: "m-mcq-473", topic: "trig-elev",
            q: "A lookout is 16 m high and the observer is 25 m away. Find the angle of elevation to the nearest degree.",
            options: ["38°", "33°", "28°", "57°"], answer: 1,
            explain: "Use tan θ = opposite/adjacent.",
            help: { rule: "Angle of elevation uses the vertical height over the horizontal distance.", steps: ["tan θ = 16/25.", "θ ≈ 33°."] }
        },

        {
            id: "m-mcq-474", topic: "trig-elev",
            q: "A person with eye level 1.6 m stands 22 m from a tower. The angle of elevation to the top is 32°. Find the tower's height (1 dp).",
            options: ["13.7 m", "16.3 m", "15.3 m", "22 m"], answer: 2,
            explain: "Find the rise above eye level, then add the eye height.",
            help: { rule: "Total height = rise above eye level + eye level.", steps: ["rise = 22 × tan(32°) ≈ 13.7 m.", "Add 1.6 m to get 15.3 m."] }
        },

        {
            id: "m-mcq-475", topic: "trig-elev",
            q: "A boat is 100 m from a cliff. If the angle of elevation to the top is 12°, how high is the cliff? (1 dp)",
            options: ["470.5 m", "31.3 m", "100 m", "21.3 m"], answer: 3,
            explain: "Use tangent with vertical height over horizontal distance.",
            help: { rule: "Cliff height = horizontal distance × tan(angle).", steps: ["height = 100 × tan(12°).", "Result ≈ 21.3 m."] }
        },

        {
            id: "m-mcq-476", topic: "trig-elev",
            q: "From 25 m away, the angle of elevation to the top of a pole is 24°. Find the pole's height (1 dp).",
            options: ["11.1 m", "56.2 m", "10.2 m", "25 m"], answer: 0,
            explain: "Use tan(elevation) = vertical/horizontal.",
            help: { rule: "Height = horizontal distance × tan(angle).", steps: ["height = 25 × tan(24°).", "Result ≈ 11.1 m."] }
        },

        {
            id: "m-mcq-477", topic: "trig-elev",
            q: "Use trigonometry for this situation: 15 m tall. From what horizontal distance is its top seen at an angle of elevation of 25°? (1 dp)",
            options: ["7 m", "32.2 m", "35.5 m", "15 m"], answer: 1,
            explain: "Rearrange tan θ = height/distance.",
            help: { rule: "Distance = height ÷ tan(angle).", steps: ["distance = 15 / tan(25°).", "Result ≈ 32.2 m."] }
        },

        {
            id: "m-mcq-478", topic: "trig-elev",
            q: "A lookout is 20 m high and the observer is 30 m away. Find the angle of elevation to the nearest degree.",
            options: ["39°", "29°", "34°", "56°"], answer: 2,
            explain: "Use tan θ = opposite/adjacent.",
            help: { rule: "Angle of elevation uses the vertical height over the horizontal distance.", steps: ["tan θ = 20/30.", "θ ≈ 34°."] }
        },

        {
            id: "m-mcq-479", topic: "trig-elev",
            q: "A person with eye level 1.6 m stands 26 m from a tower. The angle of elevation to the top is 36°. Find the tower's height (1 dp).",
            options: ["18.9 m", "21.5 m", "26 m", "20.5 m"], answer: 3,
            explain: "Find the rise above eye level, then add the eye height.",
            help: { rule: "Total height = rise above eye level + eye level.", steps: ["rise = 26 × tan(36°) ≈ 18.9 m.", "Add 1.6 m to get 20.5 m."] }
        },

        {
            id: "m-mcq-480", topic: "trig-elev",
            q: "A boat is 120 m from a cliff. If the angle of elevation to the top is 15°, how high is the cliff? (1 dp)",
            options: ["32.2 m", "447.8 m", "42.2 m", "120 m"], answer: 0,
            explain: "Use tangent with vertical height over horizontal distance.",
            help: { rule: "Cliff height = horizontal distance × tan(angle).", steps: ["height = 120 × tan(15°).", "Result ≈ 32.2 m."] }
        },

        {
            id: "m-mcq-481", topic: "trig-elev",
            q: "From 30 m away, the angle of elevation to the top of a pole is 30°. Find the pole's height (1 dp).",
            options: ["52 m", "17.3 m", "15 m", "30 m"], answer: 1,
            explain: "Use tan(elevation) = vertical/horizontal.",
            help: { rule: "Height = horizontal distance × tan(angle).", steps: ["height = 30 × tan(30°).", "Result ≈ 17.3 m."] }
        },

        {
            id: "m-mcq-482", topic: "trig-elev",
            q: "A building is 20 m tall. From what horizontal distance is its top seen at an angle of elevation of 35°? (1 dp)",
            options: ["14 m", "34.9 m", "28.6 m", "20 m"], answer: 2,
            explain: "Rearrange tan θ = height/distance.",
            help: { rule: "Distance = height ÷ tan(angle).", steps: ["distance = 20 / tan(35°).", "Result ≈ 28.6 m."] }
        },

        /* ----- Added MCQs: trig-bearings ----- */

        {
            id: "m-mcq-483", topic: "trig-bearings",
            q: "If the bearing of B from A is 035°, what is the bearing of A from B?",
            options: ["125°", "035°", "235°", "215°"], answer: 3,
            explain: "Reverse bearings differ by 180°.",
            help: { rule: "Add or subtract 180° and keep the answer between 000° and 359°.", steps: ["35° + 180° = 215° (mod 360).", "Bearing 215°."] }
        },

        {
            id: "m-mcq-484", topic: "trig-bearings",
            q: "A walker travels 4 km north then 4 km east. Find the bearing from the start (nearest degree).",
            options: ["045°", "135°", "315°", "225°"], answer: 0,
            explain: "Bearings are measured clockwise from north, so use tan θ = east/north.",
            help: { rule: "Angle from north = tan⁻¹(east/north).", steps: ["θ = tan⁻¹(4/4).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-mcq-485", topic: "trig-bearings",
            q: "A boat sails 6 km east then 5 km south. Find its distance from the start (1 dp).",
            options: ["11 km", "7.8 km", "8.8 km", "6 km"], answer: 1,
            explain: "The legs are perpendicular, so use Pythagoras.",
            help: { rule: "Use d² = a² + b² for right-angled displacements.", steps: ["d = √(6² + 5²) ≈ 7.8 km."] }
        },

        {
            id: "m-mcq-486", topic: "trig-bearings",
            q: "A bearing of 000° corresponds to:",
            options: ["East", "South", "North", "West"], answer: 2,
            explain: "Use the compass directions for the quarter-turn bearings.",
            help: { rule: "000° = N, 090° = E, 180° = S, 270° = W.", steps: ["000° means North."] }
        },

        {
            id: "m-mcq-487", topic: "trig-bearings",
            q: "A drone is 5 km north and 3 km west of its launch point. Find its bearing from the launch point (nearest degree).",
            options: ["031°", "149°", "014°", "329°"], answer: 3,
            explain: "Use the north-west displacement and measure clockwise from north.",
            help: { rule: "Bearings are always measured clockwise from north.", steps: ["θ west of north = tan⁻¹(3/5).", "Bearing ≈ 329°."] }
        },

        {
            id: "m-mcq-488", topic: "trig-bearings",
            q: "Find the reverse bearing if B from A is 035°, what is the bearing of A from B?",
            options: ["215°", "125°", "035°", "235°"], answer: 0,
            explain: "Reverse bearings differ by 180°.",
            help: { rule: "Add or subtract 180° and keep the answer between 000° and 359°.", steps: ["35° + 180° = 215° (mod 360).", "Bearing 215°."] }
        },

        {
            id: "m-mcq-489", topic: "trig-bearings",
            q: "A walker travels 5 km north then 5 km east. Find the bearing from the start (nearest degree).",
            options: ["135°", "045°", "315°", "225°"], answer: 1,
            explain: "Bearings are measured clockwise from north, so use tan θ = east/north.",
            help: { rule: "Angle from north = tan⁻¹(east/north).", steps: ["θ = tan⁻¹(5/5).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-mcq-490", topic: "trig-bearings",
            q: "A boat sails 7 km east then 6 km south. Find its distance from the start (1 dp).",
            options: ["13 km", "10.2 km", "9.2 km", "7 km"], answer: 2,
            explain: "The legs are perpendicular, so use Pythagoras.",
            help: { rule: "Use d² = a² + b² for right-angled displacements.", steps: ["d = √(7² + 6²) ≈ 9.2 km."] }
        },

        {
            id: "m-mcq-491", topic: "trig-bearings",
            q: "A bearing of 090° corresponds to:",
            options: ["North", "South", "West", "East"], answer: 3,
            explain: "Use the compass directions for the quarter-turn bearings.",
            help: { rule: "000° = N, 090° = E, 180° = S, 270° = W.", steps: ["090° means East."] }
        },

        {
            id: "m-mcq-492", topic: "trig-bearings",
            q: "A drone is 6 km north and 4 km west of its launch point. Find its bearing from the launch point (nearest degree).",
            options: ["326°", "034°", "146°", "011°"], answer: 0,
            explain: "Use the north-west displacement and measure clockwise from north.",
            help: { rule: "Bearings are always measured clockwise from north.", steps: ["θ west of north = tan⁻¹(4/6).", "Bearing ≈ 326°."] }
        },

        {
            id: "m-mcq-493", topic: "trig-bearings",
            q: "If the bearing of B from A is 120°, what is the bearing of A from B?",
            options: ["210°", "300°", "120°", "320°"], answer: 1,
            explain: "Reverse bearings differ by 180°.",
            help: { rule: "Add or subtract 180° and keep the answer between 000° and 359°.", steps: ["120° + 180° = 300° (mod 360).", "Bearing 300°."] }
        },

        {
            id: "m-mcq-494", topic: "trig-bearings",
            q: "A hiker travels 5 km north then 5 km east. Find the bearing from the start (nearest degree).",
            options: ["135°", "315°", "045°", "225°"], answer: 2,
            explain: "Bearings are measured clockwise from north, so use tan θ = east/north.",
            help: { rule: "Angle from north = tan⁻¹(east/north).", steps: ["θ = tan⁻¹(5/5).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-mcq-495", topic: "trig-bearings",
            q: "A boat sails 8 km east then 7 km south. Find its distance from the start (1 dp).",
            options: ["15 km", "11.6 km", "8 km", "10.6 km"], answer: 3,
            explain: "The legs are perpendicular, so use Pythagoras.",
            help: { rule: "Use d² = a² + b² for right-angled displacements.", steps: ["d = √(8² + 7²) ≈ 10.6 km."] }
        },

        {
            id: "m-mcq-496", topic: "trig-bearings",
            q: "A bearing of 180° corresponds to:",
            options: ["South", "North", "East", "West"], answer: 0,
            explain: "Use the compass directions for the quarter-turn bearings.",
            help: { rule: "000° = N, 090° = E, 180° = S, 270° = W.", steps: ["180° means South."] }
        },

        {
            id: "m-mcq-497", topic: "trig-bearings",
            q: "A drone is 7 km north and 5 km west of its launch point. Find its bearing from the launch point (nearest degree).",
            options: ["036°", "324°", "144°", "009°"], answer: 1,
            explain: "Use the north-west displacement and measure clockwise from north.",
            help: { rule: "Bearings are always measured clockwise from north.", steps: ["θ west of north = tan⁻¹(5/7).", "Bearing ≈ 324°."] }
        },

        {
            id: "m-mcq-498", topic: "trig-bearings",
            q: "If the bearing of B from A is 205°, what is the bearing of A from B?",
            options: ["295°", "205°", "025°", "045°"], answer: 2,
            explain: "Reverse bearings differ by 180°.",
            help: { rule: "Add or subtract 180° and keep the answer between 000° and 359°.", steps: ["205° + 180° = 25° (mod 360).", "Bearing 025°."] }
        },

        {
            id: "m-mcq-499", topic: "trig-bearings",
            q: "A walker travels 6 km north then 6 km east. Find the bearing from the start (nearest degree).",
            options: ["135°", "315°", "225°", "045°"], answer: 3,
            explain: "Bearings are measured clockwise from north, so use tan θ = east/north.",
            help: { rule: "Angle from north = tan⁻¹(east/north).", steps: ["θ = tan⁻¹(6/6).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-mcq-500", topic: "trig-bearings",
            q: "A boat sails 8 km east then 7 km south. Find its distance from the start (1 dp). Show your working.",
            options: ["10.6 km", "15 km", "11.6 km", "8 km"], answer: 0,
            explain: "The legs are perpendicular, so use Pythagoras.",
            help: { rule: "Use d² = a² + b² for right-angled displacements.", steps: ["d = √(8² + 7²) ≈ 10.6 km."] }
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
            q: "Write the equation of the line passing through (2, 5) with gradient 3.",
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
          q: "Rewrite 4/√5 with a rational denominator.",
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
          help: { rule: "tan(bearing from N) = east/north.", steps: ["d = √(6²+8²) = √100 = 10 km.", "θ = tan⁻¹(8/6) ≈ 53.13°.", "Bearing 053°."] } },

        /* ----- Added short-answer: indices-basic ----- */

        {
            id: "m-sa-31", topic: "indices-basic",
            q: "Simplify: (4x²)²",
            sample: "= 4² × x⁴ = 16x⁴.", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["4² = 16.", "(x²)² = x⁴.", "Combine: 16x⁴."] }
        },

        {
            id: "m-sa-32", topic: "indices-basic",
            q: "Simplify: x³ × x³ ÷ x²",
            sample: "= x⁶ ÷ x² = x⁴.", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["Add first: 3 + 3 = 6.", "Then subtract 2: 6 − 2 = 4.", "Result: x⁴."] }
        },

        {
            id: "m-sa-33", topic: "indices-basic",
            q: "Evaluate and simplify: 3⁰ × a⁴",
            sample: "3⁰ = 1, so the expression equals a⁴.", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["Zero index gives 3⁰ = 1.", "1 × a⁴ = a⁴."] }
        },

        {
            id: "m-sa-34", topic: "indices-basic",
            q: "Simplify: (4x⁵)²",
            sample: "= 4² × x¹⁰ = 16x¹⁰.", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["4² = 16.", "(x⁵)² = x¹⁰.", "Combine: 16x¹⁰."] }
        },

        {
            id: "m-sa-35", topic: "indices-basic",
            q: "Simplify: x² × x³ ÷ x⁵",
            sample: "= x⁵ ÷ x⁵ = x⁰.", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["Add first: 2 + 3 = 5.", "Then subtract 5: 5 − 5 = 0.", "Result: x⁰."] }
        },

        {
            id: "m-sa-36", topic: "indices-basic",
            q: "Evaluate and simplify: 6⁰ × a³",
            sample: "6⁰ = 1, so the expression equals a³.", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["Zero index gives 6⁰ = 1.", "1 × a³ = a³."] }
        },

        {
            id: "m-sa-37", topic: "indices-basic",
            q: "Simplify: (4x⁴)²",
            sample: "= 4² × x⁸ = 16x⁸.", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["4² = 16.", "(x⁴)² = x⁸.", "Combine: 16x⁸."] }
        },

        {
            id: "m-sa-38", topic: "indices-basic",
            q: "Simplify: x⁵ × x³ ÷ x⁴",
            sample: "= x⁸ ÷ x⁴ = x⁴.", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["Add first: 5 + 3 = 8.", "Then subtract 4: 8 − 4 = 4.", "Result: x⁴."] }
        },

        {
            id: "m-sa-39", topic: "indices-basic",
            q: "Evaluate and simplify: 4⁰ × a²",
            sample: "4⁰ = 1, so the expression equals a².", marks: 3,
            help: { rule: "Use the index laws one step at a time.", steps: ["Zero index gives 4⁰ = 1.", "1 × a² = a²."] }
        },

        /* ----- Added short-answer: indices-negative ----- */

        {
            id: "m-sa-40", topic: "indices-negative",
            q: "Simplify with positive indices: x² ÷ x⁶",
            sample: "= x⁻⁴ = x⁻⁴ = 1/x⁴.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["2 − 6 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-sa-41", topic: "indices-negative",
            q: "Simplify with positive indices: x³ ÷ x⁷",
            sample: "= x⁻⁴ = x⁻⁴ = 1/x⁴.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["3 − 7 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-sa-42", topic: "indices-negative",
            q: "Simplify with positive indices: x⁴ ÷ x⁸",
            sample: "= x⁻⁴ = x⁻⁴ = 1/x⁴.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["4 − 8 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-sa-43", topic: "indices-negative",
            q: "Simplify with positive indices: x⁵ ÷ x⁵",
            sample: "= x⁰ = x⁰ = 1/x⁰.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["5 − 5 = −0.", "x⁰ = 1/x⁰."] }
        },

        {
            id: "m-sa-44", topic: "indices-negative",
            q: "Write with positive indices: x² ÷ x⁶",
            sample: "= x⁻⁴ = x⁻⁴ = 1/x⁴.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["2 − 6 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-sa-45", topic: "indices-negative",
            q: "Write with positive indices: x³ ÷ x⁷",
            sample: "= x⁻⁴ = x⁻⁴ = 1/x⁴.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["3 − 7 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-sa-46", topic: "indices-negative",
            q: "Write with positive indices: x⁴ ÷ x⁸",
            sample: "= x⁻⁴ = x⁻⁴ = 1/x⁴.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["4 − 8 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        {
            id: "m-sa-47", topic: "indices-negative",
            q: "Write with positive indices: x⁵ ÷ x⁵",
            sample: "= x⁰ = x⁰ = 1/x⁰.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["5 − 5 = −0.", "x⁰ = 1/x⁰."] }
        },

        {
            id: "m-sa-48", topic: "indices-negative",
            q: "Express using only positive indices: x² ÷ x⁶",
            sample: "= x⁻⁴ = x⁻⁴ = 1/x⁴.", marks: 3,
            help: { rule: "Subtract indices, then rewrite any negative result as a reciprocal.", steps: ["2 − 6 = −4.", "x⁻⁴ = 1/x⁴."] }
        },

        /* ----- Added short-answer: surds ----- */

        {
            id: "m-sa-49", topic: "surds",
            q: "Simplify: √8 + √32",
            sample: "√8 = 2√2 and √32 = 4√2, so the sum is 6√2.", marks: 3,
            help: { rule: "Simplify each surd first, or rationalise by multiplying top and bottom by the same surd.", steps: ["√8 = 2√2.", "√32 = 4√2.", "Add like surds: 6√2."] }
        },

        {
            id: "m-sa-50", topic: "surds",
            q: "Rewrite 3/√3 with a rational denominator.",
            sample: "Multiply by √3/√3: 3√3/3.", marks: 3,
            help: { rule: "Simplify each surd first, or rationalise by multiplying top and bottom by the same surd.", steps: ["3/√3 × √3/√3.", "Numerator becomes 3√3; denominator becomes 3."] }
        },

        {
            id: "m-sa-51", topic: "surds",
            q: "Simplify: √80 + √320",
            sample: "√80 = 4√5 and √320 = 8√5, so the sum is 12√5.", marks: 3,
            help: { rule: "Simplify each surd first, or rationalise by multiplying top and bottom by the same surd.", steps: ["√80 = 4√5.", "√320 = 8√5.", "Add like surds: 12√5."] }
        },

        {
            id: "m-sa-52", topic: "surds",
            q: "Rationalise the denominator: 5/√6",
            sample: "Multiply by √6/√6: 5√6/6.", marks: 3,
            help: { rule: "Simplify each surd first, or rationalise by multiplying top and bottom by the same surd.", steps: ["5/√6 × √6/√6.", "Numerator becomes 5√6; denominator becomes 6."] }
        },

        {
            id: "m-sa-53", topic: "surds",
            q: "Simplify: √28 + √112",
            sample: "√28 = 2√7 and √112 = 4√7, so the sum is 6√7.", marks: 3,
            help: { rule: "Simplify each surd first, or rationalise by multiplying top and bottom by the same surd.", steps: ["√28 = 2√7.", "√112 = 4√7.", "Add like surds: 6√7."] }
        },

        {
            id: "m-sa-54", topic: "surds",
            q: "Rationalise the denominator: 2/√3",
            sample: "Multiply by √3/√3: 2√3/3.", marks: 3,
            help: { rule: "Simplify each surd first, or rationalise by multiplying top and bottom by the same surd.", steps: ["2/√3 × √3/√3.", "Numerator becomes 2√3; denominator becomes 3."] }
        },

        {
            id: "m-sa-55", topic: "surds",
            q: "Simplify: √48 + √192",
            sample: "√48 = 4√3 and √192 = 8√3, so the sum is 12√3.", marks: 3,
            help: { rule: "Simplify each surd first, or rationalise by multiplying top and bottom by the same surd.", steps: ["√48 = 4√3.", "√192 = 8√3.", "Add like surds: 12√3."] }
        },

        {
            id: "m-sa-56", topic: "surds",
            q: "Rationalise the denominator: 4/√6",
            sample: "Multiply by √6/√6: 4√6/6.", marks: 3,
            help: { rule: "Simplify each surd first, or rationalise by multiplying top and bottom by the same surd.", steps: ["4/√6 × √6/√6.", "Numerator becomes 4√6; denominator becomes 6."] }
        },

        /* ----- Added short-answer: scientific ----- */

        {
            id: "m-sa-57", topic: "scientific",
            q: "Write 150 000 in scientific notation.",
            sample: "1.5 × 10⁵.", marks: 2,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Place the decimal at 1.5.", "Count 5 places moved."] }
        },

        {
            id: "m-sa-58", topic: "scientific",
            q: "Compute (4 × 10⁴) × (4 × 10⁴) in standard form.",
            sample: "1.6 × 10⁹.", marks: 3,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Multiply coefficients: 16.", "Add powers: 8.", "Normalise to 1.6 × 10⁹."] }
        },

        {
            id: "m-sa-59", topic: "scientific",
            q: "Round 8.295 to 3 significant figures.",
            sample: "8.295.", marks: 3,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Count from the first non-zero digit.", "Keep 3 significant figures and round the next digit."] }
        },

        {
            id: "m-sa-60", topic: "scientific",
            q: "Write 620 000 000 in scientific notation.",
            sample: "6.2 × 10⁸.", marks: 2,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Place the decimal at 6.2.", "Count 8 places moved."] }
        },

        {
            id: "m-sa-61", topic: "scientific",
            q: "Compute (3 × 10⁴) × (3 × 10⁴) in standard form.",
            sample: "9 × 10⁸.", marks: 3,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Multiply coefficients: 9.", "Add powers: 8.", "Normalise to 9 × 10⁸."] }
        },

        {
            id: "m-sa-62", topic: "scientific",
            q: "Give 8.295 rounded to 3 significant figures.",
            sample: "8.295.", marks: 3,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Count from the first non-zero digit.", "Keep 3 significant figures and round the next digit."] }
        },

        {
            id: "m-sa-63", topic: "scientific",
            q: "Write 38 000 000 in scientific notation.",
            sample: "3.8 × 10⁷.", marks: 2,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Place the decimal at 3.8.", "Count 7 places moved."] }
        },

        {
            id: "m-sa-64", topic: "scientific",
            q: "Compute (6 × 10⁴) × (2 × 10⁴) in standard form.",
            sample: "1.2 × 10⁹.", marks: 3,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Multiply coefficients: 12.", "Add powers: 8.", "Normalise to 1.2 × 10⁹."] }
        },

        {
            id: "m-sa-65", topic: "scientific",
            q: "Write 8.295 correct to 3 significant figures.",
            sample: "8.295.", marks: 3,
            help: { rule: "Use scientific notation rules or significant-figure rounding carefully.", steps: ["Count from the first non-zero digit.", "Keep 3 significant figures and round the next digit."] }
        },

        /* ----- Added short-answer: expansion ----- */

        {
            id: "m-sa-66", topic: "expansion",
            q: "Expand and simplify: (2x - 1)(3x + 0)",
            sample: "= 6x² - 3x.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 6x².", "Middle terms combine to -3x.", "Constant term: 0."] }
        },

        {
            id: "m-sa-67", topic: "expansion",
            q: "Expand and simplify: (3x + 0)(1x + 1)",
            sample: "= 3x² + 3x.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 3x².", "Middle terms combine to 3x.", "Constant term: 0."] }
        },

        {
            id: "m-sa-68", topic: "expansion",
            q: "Expand and simplify: (4x + 1)(2x + 2)",
            sample: "= 8x² + 10x + 2.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 8x².", "Middle terms combine to 10x.", "Constant term: 2."] }
        },

        {
            id: "m-sa-69", topic: "expansion",
            q: "Expand and simplify: (2x + 2)(3x + 3)",
            sample: "= 6x² + 12x + 6.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 6x².", "Middle terms combine to 12x.", "Constant term: 6."] }
        },

        {
            id: "m-sa-70", topic: "expansion",
            q: "Expand and simplify: (3x - 2)(1x - 3)",
            sample: "= 3x² - 11x + 6.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 3x².", "Middle terms combine to -11x.", "Constant term: 6."] }
        },

        {
            id: "m-sa-71", topic: "expansion",
            q: "Expand and simplify: (4x - 1)(2x - 2)",
            sample: "= 8x² - 10x + 2.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 8x².", "Middle terms combine to -10x.", "Constant term: 2."] }
        },

        {
            id: "m-sa-72", topic: "expansion",
            q: "Expand and simplify: (2x + 0)(3x - 1)",
            sample: "= 6x² - 2x.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 6x².", "Middle terms combine to -2x.", "Constant term: 0."] }
        },

        {
            id: "m-sa-73", topic: "expansion",
            q: "Expand and simplify: (3x + 1)(1x + 0)",
            sample: "= 3x² + x.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 3x².", "Middle terms combine to 1x.", "Constant term: 0."] }
        },

        {
            id: "m-sa-74", topic: "expansion",
            q: "Expand and simplify: (4x + 2)(2x + 1)",
            sample: "= 8x² + 8x + 2.", marks: 4,
            help: { rule: "Multiply each term in the first bracket by each term in the second bracket, then collect like terms.", steps: ["First term: 8x².", "Middle terms combine to 8x.", "Constant term: 2."] }
        },

        /* ----- Added short-answer: alg-fractions ----- */

        {
            id: "m-sa-75", topic: "alg-fractions",
            q: "Write in simplest form: (2x + 4)/(x + 2)",
            sample: "Factor the numerator: 2(x + 2)/(x + 2) = 2.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["2x + 4 = 2(x + 2).", "Cancel (x + 2)."] }
        },

        {
            id: "m-sa-76", topic: "alg-fractions",
            q: "Simplify: 2x/5 + 1x/5",
            sample: "= 3/5x.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["Use LCD 25.", "Add numerators to get 3/5x."] }
        },

        {
            id: "m-sa-77", topic: "alg-fractions",
            q: "Write in simplest form: (4x + 16)/(x + 4)",
            sample: "Factor the numerator: 4(x + 4)/(x + 4) = 4.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["4x + 16 = 4(x + 4).", "Cancel (x + 4)."] }
        },

        {
            id: "m-sa-78", topic: "alg-fractions",
            q: "Simplify: 1x/4 + 3x/4",
            sample: "= 1x.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["Use LCD 16.", "Add numerators to get 1x."] }
        },

        {
            id: "m-sa-79", topic: "alg-fractions",
            q: "Express in simplest form: (2x + 4)/(x + 2)",
            sample: "Factor the numerator: 2(x + 2)/(x + 2) = 2.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["2x + 4 = 2(x + 2).", "Cancel (x + 2)."] }
        },

        {
            id: "m-sa-80", topic: "alg-fractions",
            q: "Simplify: 3x/3 + 2x/6",
            sample: "= 4/3x.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["Use LCD 18.", "Add numerators to get 4/3x."] }
        },

        {
            id: "m-sa-81", topic: "alg-fractions",
            q: "Express in simplest form: (4x + 16)/(x + 4)",
            sample: "Factor the numerator: 4(x + 4)/(x + 4) = 4.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["4x + 16 = 4(x + 4).", "Cancel (x + 4)."] }
        },

        {
            id: "m-sa-82", topic: "alg-fractions",
            q: "Write in simplest form: 2x/5 + 1x/5",
            sample: "= 3/5x.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["Use LCD 25.", "Add numerators to get 3/5x."] }
        },

        {
            id: "m-sa-83", topic: "alg-fractions",
            q: "Simplify the expression: (2x + 4)/(x + 2)",
            sample: "Factor the numerator: 2(x + 2)/(x + 2) = 2.", marks: 3,
            help: { rule: "Factor before cancelling, or use a common denominator before adding.", steps: ["2x + 4 = 2(x + 2).", "Cancel (x + 2)."] }
        },

        /* ----- Added short-answer: linear-eq ----- */

        {
            id: "m-sa-84", topic: "linear-eq",
            q: "Solve: 2x - 4 = -4",
            sample: "2x = 0 so x = 0.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move -4 to the other side.", "Divide by 2.", "x = 0."] }
        },

        {
            id: "m-sa-85", topic: "linear-eq",
            q: "Solve: 3x - 3 = 0",
            sample: "3x = 3 so x = 1.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move -3 to the other side.", "Divide by 3.", "x = 1."] }
        },

        {
            id: "m-sa-86", topic: "linear-eq",
            q: "Solve: 4x - 2 = 6",
            sample: "4x = 8 so x = 2.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move -2 to the other side.", "Divide by 4.", "x = 2."] }
        },

        {
            id: "m-sa-87", topic: "linear-eq",
            q: "Solve: 5x - 1 = 14",
            sample: "5x = 15 so x = 3.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move -1 to the other side.", "Divide by 5.", "x = 3."] }
        },

        {
            id: "m-sa-88", topic: "linear-eq",
            q: "Solve: 2x + 0 = 8",
            sample: "2x = 8 so x = 4.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move 0 to the other side.", "Divide by 2.", "x = 4."] }
        },

        {
            id: "m-sa-89", topic: "linear-eq",
            q: "Solve: 3x + 1 = 16",
            sample: "3x = 15 so x = 5.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move 1 to the other side.", "Divide by 3.", "x = 5."] }
        },

        {
            id: "m-sa-90", topic: "linear-eq",
            q: "Solve: 4x + 2 = -6",
            sample: "4x = -8 so x = -2.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move 2 to the other side.", "Divide by 4.", "x = -2."] }
        },

        {
            id: "m-sa-91", topic: "linear-eq",
            q: "Solve: 5x + 3 = -2",
            sample: "5x = -5 so x = -1.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move 3 to the other side.", "Divide by 5.", "x = -1."] }
        },

        {
            id: "m-sa-92", topic: "linear-eq",
            q: "Solve: 2x + 4 = 4",
            sample: "2x = 0 so x = 0.", marks: 3,
            help: { rule: "Undo the constant term first, then divide by the coefficient of x.", steps: ["Move 4 to the other side.", "Divide by 2.", "x = 0."] }
        },

        /* ----- Added short-answer: linear-eq-multi ----- */

        {
            id: "m-sa-93", topic: "linear-eq-multi",
            q: "Determine the value(s) of x that satisfy 3(x + 2) − 4(x + 2) = 0",
            sample: "Expand: 3x + 6 − 4x - 8 = 0 → x = -2.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = -2."] }
        },

        {
            id: "m-sa-94", topic: "linear-eq-multi",
            q: "Find the solution(s) to 4(x + 3) − 2(x - 1) = 12",
            sample: "Expand: 4x + 12 − 2x + 2 = 12 → x = -1.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = -1."] }
        },

        {
            id: "m-sa-95", topic: "linear-eq-multi",
            q: "Find the solution(s) to 5(x + 4) − 3(x + 0) = 20",
            sample: "Expand: 5x + 20 − 3x + 0 = 20 → x = 0.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = 0."] }
        },

        {
            id: "m-sa-96", topic: "linear-eq-multi",
            q: "Solve: 3(x + 1) − 4(x + 1) = -2",
            sample: "Expand: 3x + 3 − 4x - 4 = -2 → x = 1.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = 1."] }
        },

        {
            id: "m-sa-97", topic: "linear-eq-multi",
            q: "Solve: 4(x + 2) − 2(x + 2) = 8",
            sample: "Expand: 4x + 8 − 2x - 4 = 8 → x = 2.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = 2."] }
        },

        {
            id: "m-sa-98", topic: "linear-eq-multi",
            q: "Solve: 5(x + 3) − 3(x - 1) = 24",
            sample: "Expand: 5x + 15 − 3x + 3 = 24 → x = 3.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = 3."] }
        },

        {
            id: "m-sa-99", topic: "linear-eq-multi",
            q: "Solve: 3(x + 4) − 4(x + 0) = 8",
            sample: "Expand: 3x + 12 − 4x + 0 = 8 → x = 4.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = 4."] }
        },

        {
            id: "m-sa-100", topic: "linear-eq-multi",
            q: "Solve: 4(x + 1) − 2(x + 1) = 12",
            sample: "Expand: 4x + 4 − 2x - 2 = 12 → x = 5.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = 5."] }
        },

        {
            id: "m-sa-101", topic: "linear-eq-multi",
            q: "Solve: 5(x + 2) − 3(x + 2) = 0",
            sample: "Expand: 5x + 10 − 3x - 6 = 0 → x = -2.", marks: 4,
            help: { rule: "Expand first, then collect like terms and solve.", steps: ["Expand both brackets.", "Collect x-terms on one side and constants on the other.", "Result: x = -2."] }
        },

        /* ----- Added short-answer: quadratic-monic ----- */

        {
            id: "m-sa-102", topic: "quadratic-monic",
            q: "Solve x² + 0x - 9 = 0 by factorising.",
            sample: "(x + 3)(x - 3) = 0, so x = -3 or x = 3.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: -3 and 3.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        {
            id: "m-sa-103", topic: "quadratic-monic",
            q: "Solve x² - 2x - 8 = 0 by factorising.",
            sample: "(x + 2)(x - 4) = 0, so x = -2 or x = 4.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: -2 and 4.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        {
            id: "m-sa-104", topic: "quadratic-monic",
            q: "Solve x² - 4x - 5 = 0 by factorising.",
            sample: "(x + 1)(x - 5) = 0, so x = -1 or x = 5.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: -1 and 5.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        {
            id: "m-sa-105", topic: "quadratic-monic",
            q: "Solve x² - 6x + 0 = 0 by factorising.",
            sample: "(x + 0)(x - 6) = 0, so x = 0 or x = 6.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: 0 and 6.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        {
            id: "m-sa-106", topic: "quadratic-monic",
            q: "Solve x² - 3x + 2 = 0 by factorising.",
            sample: "(x - 1)(x - 2) = 0, so x = 1 or x = 2.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: 1 and 2.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        {
            id: "m-sa-107", topic: "quadratic-monic",
            q: "Solve x² - 5x + 6 = 0 by factorising.",
            sample: "(x - 2)(x - 3) = 0, so x = 2 or x = 3.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: 2 and 3.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        {
            id: "m-sa-108", topic: "quadratic-monic",
            q: "Solve x² - 1x - 12 = 0 by factorising.",
            sample: "(x + 3)(x - 4) = 0, so x = -3 or x = 4.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: -3 and 4.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        {
            id: "m-sa-109", topic: "quadratic-monic",
            q: "Solve x² - 3x - 10 = 0 by factorising.",
            sample: "(x + 2)(x - 5) = 0, so x = -2 or x = 5.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: -2 and 5.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        {
            id: "m-sa-110", topic: "quadratic-monic",
            q: "Solve x² - 5x - 6 = 0 by factorising.",
            sample: "(x + 1)(x - 6) = 0, so x = -1 or x = 6.", marks: 4,
            help: { rule: "Find two numbers that add to the x-coefficient and multiply to the constant.", steps: ["Numbers: -1 and 6.", "Factorise the quadratic.", "Use the zero-product rule."] }
        },

        /* ----- Added short-answer: quadratic-nonmonic ----- */

        {
            id: "m-sa-111", topic: "quadratic-nonmonic",
            q: "Solve 2x² + 5x - 3 = 0.",
            sample: "The roots are x = 1/2 and x = -3.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        {
            id: "m-sa-112", topic: "quadratic-nonmonic",
            q: "Solve 3x² + 10x - 8 = 0.",
            sample: "The roots are x = 2/3 and x = -4.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        {
            id: "m-sa-113", topic: "quadratic-nonmonic",
            q: "Solve 4x² + 17x - 15 = 0.",
            sample: "The roots are x = 3/4 and x = -5.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        {
            id: "m-sa-114", topic: "quadratic-nonmonic",
            q: "Solve 2x² + 3x - 2 = 0.",
            sample: "The roots are x = 1/2 and x = -2.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        {
            id: "m-sa-115", topic: "quadratic-nonmonic",
            q: "Solve 3x² + 7x - 6 = 0.",
            sample: "The roots are x = 2/3 and x = -3.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        {
            id: "m-sa-116", topic: "quadratic-nonmonic",
            q: "Solve 4x² + 13x - 12 = 0.",
            sample: "The roots are x = 3/4 and x = -4.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        {
            id: "m-sa-117", topic: "quadratic-nonmonic",
            q: "Solve 2x² + 9x - 5 = 0.",
            sample: "The roots are x = 1/2 and x = -5.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        {
            id: "m-sa-118", topic: "quadratic-nonmonic",
            q: "Solve 3x² + 4x - 4 = 0.",
            sample: "The roots are x = 2/3 and x = -2.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        {
            id: "m-sa-119", topic: "quadratic-nonmonic",
            q: "Solve 4x² + 9x - 9 = 0.",
            sample: "The roots are x = 3/4 and x = -3.", marks: 4,
            help: { rule: "Factor the quadratic or solve from its linear factors.", steps: ["Find a factorisation into two linear brackets.", "Set each bracket equal to zero."] }
        },

        /* ----- Added short-answer: inequalities ----- */

        {
            id: "m-sa-120", topic: "inequalities",
            q: "Solve and state the solution on a number line: 2x - 3 > -3",
            sample: "2x > 0, so x > 0. Open circle at 0, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > 0.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        {
            id: "m-sa-121", topic: "inequalities",
            q: "Solve and state the solution on a number line: 3x - 2 > 1",
            sample: "3x > 3, so x > 1. Open circle at 1, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > 1.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        {
            id: "m-sa-122", topic: "inequalities",
            q: "Solve and state the solution on a number line: 4x - 1 > 7",
            sample: "4x > 8, so x > 2. Open circle at 2, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > 2.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        {
            id: "m-sa-123", topic: "inequalities",
            q: "Solve and state the solution on a number line: 5x + 0 > 15",
            sample: "5x > 15, so x > 3. Open circle at 3, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > 3.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        {
            id: "m-sa-124", topic: "inequalities",
            q: "Solve and state the solution on a number line: 2x + 1 > 9",
            sample: "2x > 8, so x > 4. Open circle at 4, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > 4.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        {
            id: "m-sa-125", topic: "inequalities",
            q: "Solve and state the solution on a number line: 3x + 2 > -4",
            sample: "3x > -6, so x > -2. Open circle at -2, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > -2.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        {
            id: "m-sa-126", topic: "inequalities",
            q: "Solve and state the solution on a number line: 4x + 3 > -1",
            sample: "4x > -4, so x > -1. Open circle at -1, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > -1.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        {
            id: "m-sa-127", topic: "inequalities",
            q: "Solve and state the solution on a number line: 5x - 4 > -4",
            sample: "5x > 0, so x > 0. Open circle at 0, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > 0.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        {
            id: "m-sa-128", topic: "inequalities",
            q: "Solve and state the solution on a number line: 2x - 3 > -1",
            sample: "2x > 2, so x > 1. Open circle at 1, arrow to the right.", marks: 3,
            help: { rule: "Solve the inequality like an equation, then describe the correct number-line graph.", steps: ["Isolate x.", "Solution: x > 1.", "Use an open circle for > or <, closed for ≥ or ≤."] }
        },

        /* ----- Added short-answer: simultaneous ----- */

        {
            id: "m-sa-129", topic: "simultaneous",
            q: "Solve simultaneously: 2x + 2y = 8 and 3x − 2y = -3.",
            sample: "Add the equations: 5x = 5 so x = 1. Substitute back to get y = 3.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 1.", "Substitute back to get y = 3."] }
        },

        {
            id: "m-sa-130", topic: "simultaneous",
            q: "Solve simultaneously: 3x + 3y = 18 and 1x − 3y = -10.",
            sample: "Add the equations: 4x = 8 so x = 2. Substitute back to get y = 4.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 2.", "Substitute back to get y = 4."] }
        },

        {
            id: "m-sa-131", topic: "simultaneous",
            q: "Solve simultaneously: 4x + 1y = 17 and 2x − 1y = 1.",
            sample: "Add the equations: 6x = 18 so x = 3. Substitute back to get y = 5.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 3.", "Substitute back to get y = 5."] }
        },

        {
            id: "m-sa-132", topic: "simultaneous",
            q: "Solve simultaneously: 2x + 2y = 20 and 3x − 2y = 0.",
            sample: "Add the equations: 5x = 20 so x = 4. Substitute back to get y = 6.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 4.", "Substitute back to get y = 6."] }
        },

        {
            id: "m-sa-133", topic: "simultaneous",
            q: "Solve simultaneously: 3x + 3y = 21 and 1x − 3y = -1.",
            sample: "Add the equations: 4x = 20 so x = 5. Substitute back to get y = 2.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 5.", "Substitute back to get y = 2."] }
        },

        {
            id: "m-sa-134", topic: "simultaneous",
            q: "Solve simultaneously: 4x + 1y = 7 and 2x − 1y = -1.",
            sample: "Add the equations: 6x = 6 so x = 1. Substitute back to get y = 3.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 1.", "Substitute back to get y = 3."] }
        },

        {
            id: "m-sa-135", topic: "simultaneous",
            q: "Solve simultaneously: 2x + 2y = 12 and 3x − 2y = -2.",
            sample: "Add the equations: 5x = 10 so x = 2. Substitute back to get y = 4.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 2.", "Substitute back to get y = 4."] }
        },

        {
            id: "m-sa-136", topic: "simultaneous",
            q: "Solve simultaneously: 3x + 3y = 24 and 1x − 3y = -12.",
            sample: "Add the equations: 4x = 12 so x = 3. Substitute back to get y = 5.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 3.", "Substitute back to get y = 5."] }
        },

        {
            id: "m-sa-137", topic: "simultaneous",
            q: "Solve simultaneously: 4x + 1y = 22 and 2x − 1y = 2.",
            sample: "Add the equations: 6x = 24 so x = 4. Substitute back to get y = 6.", marks: 4,
            help: { rule: "Use elimination when one variable already has opposite coefficients.", steps: ["Add the equations to eliminate y.", "x = 4.", "Substitute back to get y = 6."] }
        },

        /* ----- Added short-answer: midpoint-gradient ----- */

        {
            id: "m-sa-138", topic: "midpoint-gradient",
            q: "Find the equation of the line through (-3, 0) and (1, 6).",
            sample: "m = 6/4 = 3/2. Equation: y = (3/2)x + 9/2.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Gradient = 3/2.", "Substitute a point to find c = 9/2."] }
        },

        {
            id: "m-sa-139", topic: "midpoint-gradient",
            q: "Find the midpoint and distance between (2, 4) and (5, 8).",
            sample: "Midpoint = (3.5, 6.0). Distance = √(3² + 4²) = 5.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Average each coordinate for the midpoint.", "Use the distance formula for the length."] }
        },

        {
            id: "m-sa-140", topic: "midpoint-gradient",
            q: "Find the equation of the line through (-1, 2) and (3, 8).",
            sample: "m = 6/4 = 3/2. Equation: y = (3/2)x + 7/2.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Gradient = 3/2.", "Substitute a point to find c = 7/2."] }
        },

        {
            id: "m-sa-141", topic: "midpoint-gradient",
            q: "Find the midpoint and distance between (4, 2) and (7, 6).",
            sample: "Midpoint = (5.5, 4.0). Distance = √(3² + 4²) = 5.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Average each coordinate for the midpoint.", "Use the distance formula for the length."] }
        },

        {
            id: "m-sa-142", topic: "midpoint-gradient",
            q: "Find the equation of the line through (1, 4) and (5, 10).",
            sample: "m = 6/4 = 3/2. Equation: y = (3/2)x + 5/2.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Gradient = 3/2.", "Substitute a point to find c = 5/2."] }
        },

        {
            id: "m-sa-143", topic: "midpoint-gradient",
            q: "Determine both the midpoint and the distance between (2, 4) and (5, 8).",
            sample: "Midpoint = (3.5, 6.0). Distance = √(3² + 4²) = 5.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Average each coordinate for the midpoint.", "Use the distance formula for the length."] }
        },

        {
            id: "m-sa-144", topic: "midpoint-gradient",
            q: "Write the equation of the line passing through (-3, 0) and (1, 6).",
            sample: "m = 6/4 = 3/2. Equation: y = (3/2)x + 9/2.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Gradient = 3/2.", "Substitute a point to find c = 9/2."] }
        },

        {
            id: "m-sa-145", topic: "midpoint-gradient",
            q: "Determine both the midpoint and the distance between (4, 2) and (7, 6).",
            sample: "Midpoint = (5.5, 4.0). Distance = √(3² + 4²) = 5.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Average each coordinate for the midpoint.", "Use the distance formula for the length."] }
        },

        {
            id: "m-sa-146", topic: "midpoint-gradient",
            q: "Write the equation of the line passing through (-1, 2) and (3, 8).",
            sample: "m = 6/4 = 3/2. Equation: y = (3/2)x + 7/2.", marks: 4,
            help: { rule: "Use the relevant coordinate-geometry formula carefully.", steps: ["Gradient = 3/2.", "Substitute a point to find c = 7/2."] }
        },

        /* ----- Added short-answer: slope-intercept ----- */

        {
            id: "m-sa-147", topic: "slope-intercept",
            q: "Rewrite 3y = 6x - 6 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 2x - 2. Gradient 2, y-intercept -2.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 2x - 2.", "m = 2, c = -2."] }
        },

        {
            id: "m-sa-148", topic: "slope-intercept",
            q: "Rewrite 3y = 9x - 3 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 3x - 1. Gradient 3, y-intercept -1.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 3x - 1.", "m = 3, c = -1."] }
        },

        {
            id: "m-sa-149", topic: "slope-intercept",
            q: "Rewrite 3y = 12x + 0 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 4x. Gradient 4, y-intercept 0.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 4x.", "m = 4, c = 0."] }
        },

        {
            id: "m-sa-150", topic: "slope-intercept",
            q: "Rewrite 3y = 15x + 3 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 5x + 1. Gradient 5, y-intercept 1.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 5x + 1.", "m = 5, c = 1."] }
        },

        {
            id: "m-sa-151", topic: "slope-intercept",
            q: "Rewrite 3y = 6x + 6 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 2x + 2. Gradient 2, y-intercept 2.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 2x + 2.", "m = 2, c = 2."] }
        },

        {
            id: "m-sa-152", topic: "slope-intercept",
            q: "Rewrite 3y = 9x + 9 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 3x + 3. Gradient 3, y-intercept 3.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 3x + 3.", "m = 3, c = 3."] }
        },

        {
            id: "m-sa-153", topic: "slope-intercept",
            q: "Rewrite 3y = 12x - 9 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 4x - 3. Gradient 4, y-intercept -3.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 4x - 3.", "m = 4, c = -3."] }
        },

        {
            id: "m-sa-154", topic: "slope-intercept",
            q: "Rewrite 3y = 15x - 6 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 5x - 2. Gradient 5, y-intercept -2.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 5x - 2.", "m = 5, c = -2."] }
        },

        {
            id: "m-sa-155", topic: "slope-intercept",
            q: "Rewrite 3y = 6x - 3 in slope-intercept form, then state the gradient and y-intercept.",
            sample: "Divide by 3: y = 2x - 1. Gradient 2, y-intercept -1.", marks: 3,
            help: { rule: "Make y the subject first, then read off m and c.", steps: ["Divide every term by 3.", "The line is y = 2x - 1.", "m = 2, c = -1."] }
        },

        /* ----- Added short-answer: lines-perp ----- */

        {
            id: "m-sa-156", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 2x + 3 passing through (3, 0).",
            sample: "Perpendicular gradient = -1/2. Equation: y = (-1/2)x + 3/2.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/2.", "Use (3, 0) to find c.", "Equation: y = (-1/2)x + 3/2."] }
        },

        {
            id: "m-sa-157", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 3x + 3 passing through (4, 1).",
            sample: "Perpendicular gradient = -1/3. Equation: y = (-1/3)x + 7/3.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/3.", "Use (4, 1) to find c.", "Equation: y = (-1/3)x + 7/3."] }
        },

        {
            id: "m-sa-158", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 4x + 3 passing through (5, 2).",
            sample: "Perpendicular gradient = -1/4. Equation: y = (-1/4)x + 13/4.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/4.", "Use (5, 2) to find c.", "Equation: y = (-1/4)x + 13/4."] }
        },

        {
            id: "m-sa-159", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 2x + 3 passing through (2, -2).",
            sample: "Perpendicular gradient = -1/2. Equation: y = (-1/2)x - 1.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/2.", "Use (2, -2) to find c.", "Equation: y = (-1/2)x - 1."] }
        },

        {
            id: "m-sa-160", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 3x + 3 passing through (3, -1).",
            sample: "Perpendicular gradient = -1/3. Equation: y = (-1/3)x.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/3.", "Use (3, -1) to find c.", "Equation: y = (-1/3)x."] }
        },

        {
            id: "m-sa-161", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 4x + 3 passing through (4, 0).",
            sample: "Perpendicular gradient = -1/4. Equation: y = (-1/4)x + 1.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/4.", "Use (4, 0) to find c.", "Equation: y = (-1/4)x + 1."] }
        },

        {
            id: "m-sa-162", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 2x + 3 passing through (5, 1).",
            sample: "Perpendicular gradient = -1/2. Equation: y = (-1/2)x + 7/2.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/2.", "Use (5, 1) to find c.", "Equation: y = (-1/2)x + 7/2."] }
        },

        {
            id: "m-sa-163", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 3x + 3 passing through (2, 2).",
            sample: "Perpendicular gradient = -1/3. Equation: y = (-1/3)x + 8/3.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/3.", "Use (2, 2) to find c.", "Equation: y = (-1/3)x + 8/3."] }
        },

        {
            id: "m-sa-164", topic: "lines-perp",
            q: "Find the equation of the line perpendicular to y = 4x + 3 passing through (3, -2).",
            sample: "Perpendicular gradient = -1/4. Equation: y = (-1/4)x - 5/4.", marks: 4,
            help: { rule: "Use the negative reciprocal for the perpendicular gradient, then substitute the point.", steps: ["Perpendicular gradient = -1/4.", "Use (3, -2) to find c.", "Equation: y = (-1/4)x - 5/4."] }
        },

        /* ----- Added short-answer: trig-sides ----- */

        {
            id: "m-sa-165", topic: "trig-sides",
            q: "A right triangle has angle 30° and hypotenuse 10 m. Find the opposite side to 1 dp.",
            sample: "sin 30° = opposite/10, so opposite = 10 × sin 30° ≈ 5 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 30° = opposite/10.", "Multiply to get opposite ≈ 5 m."] }
        },

        {
            id: "m-sa-166", topic: "trig-sides",
            q: "A right triangle has angle 35° and hypotenuse 12 m. Find the opposite side to 1 dp.",
            sample: "sin 35° = opposite/12, so opposite = 12 × sin 35° ≈ 6.9 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 35° = opposite/12.", "Multiply to get opposite ≈ 6.9 m."] }
        },

        {
            id: "m-sa-167", topic: "trig-sides",
            q: "A right triangle has angle 40° and hypotenuse 14 m. Find the opposite side to 1 dp.",
            sample: "sin 40° = opposite/14, so opposite = 14 × sin 40° ≈ 9 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 40° = opposite/14.", "Multiply to get opposite ≈ 9 m."] }
        },

        {
            id: "m-sa-168", topic: "trig-sides",
            q: "A right triangle has angle 45° and hypotenuse 16 m. Find the opposite side to 1 dp.",
            sample: "sin 45° = opposite/16, so opposite = 16 × sin 45° ≈ 11.3 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 45° = opposite/16.", "Multiply to get opposite ≈ 11.3 m."] }
        },

        {
            id: "m-sa-169", topic: "trig-sides",
            q: "A right triangle has angle 50° and hypotenuse 10 m. Find the opposite side to 1 dp.",
            sample: "sin 50° = opposite/10, so opposite = 10 × sin 50° ≈ 7.7 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 50° = opposite/10.", "Multiply to get opposite ≈ 7.7 m."] }
        },

        {
            id: "m-sa-170", topic: "trig-sides",
            q: "A right triangle has angle 30° and hypotenuse 12 m. Find the opposite side to 1 dp.",
            sample: "sin 30° = opposite/12, so opposite = 12 × sin 30° ≈ 6 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 30° = opposite/12.", "Multiply to get opposite ≈ 6 m."] }
        },

        {
            id: "m-sa-171", topic: "trig-sides",
            q: "A right triangle has angle 35° and hypotenuse 14 m. Find the opposite side to 1 dp.",
            sample: "sin 35° = opposite/14, so opposite = 14 × sin 35° ≈ 8 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 35° = opposite/14.", "Multiply to get opposite ≈ 8 m."] }
        },

        {
            id: "m-sa-172", topic: "trig-sides",
            q: "A right triangle has angle 40° and hypotenuse 16 m. Find the opposite side to 1 dp.",
            sample: "sin 40° = opposite/16, so opposite = 16 × sin 40° ≈ 10.3 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 40° = opposite/16.", "Multiply to get opposite ≈ 10.3 m."] }
        },

        {
            id: "m-sa-173", topic: "trig-sides",
            q: "A right triangle has angle 45° and hypotenuse 10 m. Find the opposite side to 1 dp.",
            sample: "sin 45° = opposite/10, so opposite = 10 × sin 45° ≈ 7.1 m.", marks: 3,
            help: { rule: "Choose the trig ratio that uses opposite and hypotenuse.", steps: ["Use SOH: sin 45° = opposite/10.", "Multiply to get opposite ≈ 7.1 m."] }
        },

        /* ----- Added short-answer: trig-angles ----- */

        {
            id: "m-sa-174", topic: "trig-angles",
            q: "A right triangle has opposite side 3 and adjacent side 4. Find θ to the nearest degree.",
            sample: "tan θ = 3/4. θ = tan⁻¹(3/4) ≈ 37°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 3/4.", "θ ≈ 37°."] }
        },

        {
            id: "m-sa-175", topic: "trig-angles",
            q: "A right triangle has opposite side 5 and adjacent side 7. Find θ to the nearest degree.",
            sample: "tan θ = 5/7. θ = tan⁻¹(5/7) ≈ 36°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 5/7.", "θ ≈ 36°."] }
        },

        {
            id: "m-sa-176", topic: "trig-angles",
            q: "A right triangle has opposite side 6 and adjacent side 8. Find θ to the nearest degree.",
            sample: "tan θ = 6/8. θ = tan⁻¹(6/8) ≈ 37°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 6/8.", "θ ≈ 37°."] }
        },

        {
            id: "m-sa-177", topic: "trig-angles",
            q: "A right triangle has opposite side 7 and adjacent side 9. Find θ to the nearest degree.",
            sample: "tan θ = 7/9. θ = tan⁻¹(7/9) ≈ 38°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 7/9.", "θ ≈ 38°."] }
        },

        {
            id: "m-sa-178", topic: "trig-angles",
            q: "A right triangle has opposite side 8 and adjacent side 11. Find θ to the nearest degree.",
            sample: "tan θ = 8/11. θ = tan⁻¹(8/11) ≈ 36°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 8/11.", "θ ≈ 36°."] }
        },

        {
            id: "m-sa-179", topic: "trig-angles",
            q: "In a right triangle, opposite side 3 and adjacent side 4. Find θ to the nearest degree.",
            sample: "tan θ = 3/4. θ = tan⁻¹(3/4) ≈ 37°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 3/4.", "θ ≈ 37°."] }
        },

        {
            id: "m-sa-180", topic: "trig-angles",
            q: "In a right triangle, opposite side 5 and adjacent side 7. Find θ to the nearest degree.",
            sample: "tan θ = 5/7. θ = tan⁻¹(5/7) ≈ 36°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 5/7.", "θ ≈ 36°."] }
        },

        {
            id: "m-sa-181", topic: "trig-angles",
            q: "In a right triangle, opposite side 6 and adjacent side 8. Find θ to the nearest degree.",
            sample: "tan θ = 6/8. θ = tan⁻¹(6/8) ≈ 37°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 6/8.", "θ ≈ 37°."] }
        },

        {
            id: "m-sa-182", topic: "trig-angles",
            q: "In a right triangle, opposite side 7 and adjacent side 9. Find θ to the nearest degree.",
            sample: "tan θ = 7/9. θ = tan⁻¹(7/9) ≈ 38°.", marks: 3,
            help: { rule: "Use inverse tangent when opposite and adjacent are known.", steps: ["tan θ = 7/9.", "θ ≈ 38°."] }
        },

        /* ----- Added short-answer: trig-elev ----- */

        {
            id: "m-sa-183", topic: "trig-elev",
            q: "From 20 m away, the angle of elevation to the top of a tower is 18°. Find the tower's height to 1 dp.",
            sample: "tan 18° = h/20, so h = 20 × tan 18° ≈ 6.5 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 18° = h/20.", "h ≈ 6.5 m."] }
        },

        {
            id: "m-sa-184", topic: "trig-elev",
            q: "From 25 m away, the angle of elevation to the top of a tower is 24°. Find the tower's height to 1 dp.",
            sample: "tan 24° = h/25, so h = 25 × tan 24° ≈ 11.1 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 24° = h/25.", "h ≈ 11.1 m."] }
        },

        {
            id: "m-sa-185", topic: "trig-elev",
            q: "From 30 m away, the angle of elevation to the top of a tower is 30°. Find the tower's height to 1 dp.",
            sample: "tan 30° = h/30, so h = 30 × tan 30° ≈ 17.3 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 30° = h/30.", "h ≈ 17.3 m."] }
        },

        {
            id: "m-sa-186", topic: "trig-elev",
            q: "From 35 m away, the angle of elevation to the top of a tower is 36°. Find the tower's height to 1 dp.",
            sample: "tan 36° = h/35, so h = 35 × tan 36° ≈ 25.4 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 36° = h/35.", "h ≈ 25.4 m."] }
        },

        {
            id: "m-sa-187", topic: "trig-elev",
            q: "From 40 m away, the angle of elevation to the top of a tower is 42°. Find the tower's height to 1 dp.",
            sample: "tan 42° = h/40, so h = 40 × tan 42° ≈ 36 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 42° = h/40.", "h ≈ 36 m."] }
        },

        {
            id: "m-sa-188", topic: "trig-elev",
            q: "Use trigonometry to solve this: 20 m away, the angle of elevation to the top of a tower is 18°. Find the tower's height to 1 dp.",
            sample: "tan 18° = h/20, so h = 20 × tan 18° ≈ 6.5 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 18° = h/20.", "h ≈ 6.5 m."] }
        },

        {
            id: "m-sa-189", topic: "trig-elev",
            q: "Use trigonometry to solve this: 25 m away, the angle of elevation to the top of a tower is 24°. Find the tower's height to 1 dp.",
            sample: "tan 24° = h/25, so h = 25 × tan 24° ≈ 11.1 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 24° = h/25.", "h ≈ 11.1 m."] }
        },

        {
            id: "m-sa-190", topic: "trig-elev",
            q: "Use trigonometry to solve this: 30 m away, the angle of elevation to the top of a tower is 30°. Find the tower's height to 1 dp.",
            sample: "tan 30° = h/30, so h = 30 × tan 30° ≈ 17.3 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 30° = h/30.", "h ≈ 17.3 m."] }
        },

        {
            id: "m-sa-191", topic: "trig-elev",
            q: "Use trigonometry to solve this: 35 m away, the angle of elevation to the top of a tower is 36°. Find the tower's height to 1 dp.",
            sample: "tan 36° = h/35, so h = 35 × tan 36° ≈ 25.4 m.", marks: 3,
            help: { rule: "Use tangent for angle of elevation problems with horizontal distance and vertical height.", steps: ["tan 36° = h/35.", "h ≈ 25.4 m."] }
        },

        /* ----- Added short-answer: trig-bearings ----- */

        {
            id: "m-sa-192", topic: "trig-bearings",
            q: "A walker travels 4 km north then 4 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(4² + 4²) ≈ 5.7 km. Bearing = 045°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 5.7 km.", "Angle from north = tan⁻¹(4/4).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-sa-193", topic: "trig-bearings",
            q: "A walker travels 5 km north then 5 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(5² + 5²) ≈ 7.1 km. Bearing = 045°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 7.1 km.", "Angle from north = tan⁻¹(5/5).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-sa-194", topic: "trig-bearings",
            q: "A walker travels 6 km north then 6 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(6² + 6²) ≈ 8.5 km. Bearing = 045°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 8.5 km.", "Angle from north = tan⁻¹(6/6).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-sa-195", topic: "trig-bearings",
            q: "A walker travels 7 km north then 7 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(7² + 7²) ≈ 9.9 km. Bearing = 045°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 9.9 km.", "Angle from north = tan⁻¹(7/7).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-sa-196", topic: "trig-bearings",
            q: "A walker travels 8 km north then 3 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(8² + 3²) ≈ 8.5 km. Bearing = 021°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 8.5 km.", "Angle from north = tan⁻¹(3/8).", "Bearing ≈ 021°."] }
        },

        {
            id: "m-sa-197", topic: "trig-bearings",
            q: "A hiker travels 4 km north then 4 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(4² + 4²) ≈ 5.7 km. Bearing = 045°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 5.7 km.", "Angle from north = tan⁻¹(4/4).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-sa-198", topic: "trig-bearings",
            q: "A hiker travels 5 km north then 5 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(5² + 5²) ≈ 7.1 km. Bearing = 045°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 7.1 km.", "Angle from north = tan⁻¹(5/5).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-sa-199", topic: "trig-bearings",
            q: "A hiker travels 6 km north then 6 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(6² + 6²) ≈ 8.5 km. Bearing = 045°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 8.5 km.", "Angle from north = tan⁻¹(6/6).", "Bearing ≈ 045°."] }
        },

        {
            id: "m-sa-200", topic: "trig-bearings",
            q: "A hiker travels 7 km north then 7 km east. Find the distance and bearing from the start.",
            sample: "Distance = √(7² + 7²) ≈ 9.9 km. Bearing = 045°.", marks: 4,
            help: { rule: "Use Pythagoras for the distance and tan = east/north for the bearing.", steps: ["Distance ≈ 9.9 km.", "Angle from north = tan⁻¹(7/7).", "Bearing ≈ 045°."] }
        }
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
        },

        /* ----- Added long-answer: indices-basic ----- */

        {
            id: "m-la-11", topic: "indices-basic",
            q: "Answer the following:\n(a) Simplify x² × x⁴.\n(b) Simplify (y²)⁴.\n(c) Simplify (4a²)².\n(d) State the index law used in each part.",
            sample: "(a) x⁶. (b) y⁸. (c) 16a⁴. (d) Add indices for multiplication, multiply indices for a power of a power, and square each factor in the bracket.", marks: 7,
            help: {
                rule: "Use the multiplication law, power-of-a-power law and power-of-a-product law exactly where they apply.",
                steps: ["(a) 2 + 4 = 6.", "(b) 2 × 4 = 8.", "(c) 4² = 16 and (a²)² = a⁴."]
            }
        },

        {
            id: "m-la-12", topic: "indices-basic",
            q: "Answer the following:\n(a) Simplify x³ × x⁵.\n(b) Simplify (y³)².\n(c) Simplify (2a²)².\n(d) State the index law used in each part.",
            sample: "(a) x⁸. (b) y⁶. (c) 4a⁴. (d) Add indices for multiplication, multiply indices for a power of a power, and square each factor in the bracket.", marks: 7,
            help: {
                rule: "Use the multiplication law, power-of-a-power law and power-of-a-product law exactly where they apply.",
                steps: ["(a) 3 + 5 = 8.", "(b) 3 × 2 = 6.", "(c) 2² = 4 and (a²)² = a⁴."]
            }
        },

        {
            id: "m-la-13", topic: "indices-basic",
            q: "Answer the following:\n(a) Simplify x⁴ × x⁶.\n(b) Simplify (y⁴)³.\n(c) Simplify (3a²)².\n(d) State the index law used in each part.",
            sample: "(a) x¹⁰. (b) y¹². (c) 9a⁴. (d) Add indices for multiplication, multiply indices for a power of a power, and square each factor in the bracket.", marks: 7,
            help: {
                rule: "Use the multiplication law, power-of-a-power law and power-of-a-product law exactly where they apply.",
                steps: ["(a) 4 + 6 = 10.", "(b) 4 × 3 = 12.", "(c) 3² = 9 and (a²)² = a⁴."]
            }
        },

        /* ----- Added long-answer: indices-negative ----- */

        {
            id: "m-la-14", topic: "indices-negative",
            q: "Simplify each expression using positive indices only:\n(a) x² ÷ x⁶\n(b) (2x)⁻²\n(c) (a/b)⁻²",
            sample: "(a) 1/x⁴. (b) 1/(4x²). (c) b²/a².", marks: 7,
            help: {
                rule: "Rewrite every negative index as a reciprocal and every negative power on a fraction by flipping the fraction.",
                steps: ["(a) Subtract indices: 2 − 6 = −4, so 1/x⁴.", "(b) Reciprocal of (2x)² gives 1/(4x²).", "(c) Flip the fraction and make the power positive."]
            }
        },

        {
            id: "m-la-15", topic: "indices-negative",
            q: "Simplify each expression using positive indices only:\n(a) x³ ÷ x⁷\n(b) (3x)⁻²\n(c) (a/b)⁻³",
            sample: "(a) 1/x⁴. (b) 1/(9x²). (c) b³/a³.", marks: 7,
            help: {
                rule: "Rewrite every negative index as a reciprocal and every negative power on a fraction by flipping the fraction.",
                steps: ["(a) Subtract indices: 3 − 7 = −4, so 1/x⁴.", "(b) Reciprocal of (3x)² gives 1/(9x²).", "(c) Flip the fraction and make the power positive."]
            }
        },

        /* ----- Added long-answer: surds ----- */

        {
            id: "m-la-16", topic: "surds",
            q: "Answer the following:\n(a) Simplify √45.\n(b) Simplify 2√5 + 4√5.\n(c) Rationalise the denominator: 3/√5.\n(d) Evaluate 16^(3/4).",
            sample: "(a) 3√5. (b) 6√5. (c) 3√5/5. (d) 8.", marks: 8,
            help: {
                rule: "Simplify surds first, combine like surds only, rationalise any surd denominator, and use fractional-index rules carefully.",
                steps: ["(a) Use the largest perfect-square factor.", "(b) Add the coefficients: 2 + 4 = 6.", "(c) Multiply top and bottom by √5.", "(d) Take the fourth root first, then cube it."]
            }
        },

        {
            id: "m-la-17", topic: "surds",
            q: "Answer the following:\n(a) Simplify √50.\n(b) Simplify 3√5 + 5√5.\n(c) Rationalise the denominator: 4/√5.\n(d) Evaluate 16^(3/4).",
            sample: "(a) 3√5. (b) 8√5. (c) 4√5/5. (d) 8.", marks: 8,
            help: {
                rule: "Simplify surds first, combine like surds only, rationalise any surd denominator, and use fractional-index rules carefully.",
                steps: ["(a) Use the largest perfect-square factor.", "(b) Add the coefficients: 3 + 5 = 8.", "(c) Multiply top and bottom by √5.", "(d) Take the fourth root first, then cube it."]
            }
        },

        {
            id: "m-la-18", topic: "surds",
            q: "Answer the following:\n(a) Simplify √55.\n(b) Simplify 4√5 + 3√5.\n(c) Rationalise the denominator: 5/√5.\n(d) Evaluate 16^(3/4).",
            sample: "(a) 3√5. (b) 7√5. (c) 5√5/5. (d) 8.", marks: 8,
            help: {
                rule: "Simplify surds first, combine like surds only, rationalise any surd denominator, and use fractional-index rules carefully.",
                steps: ["(a) Use the largest perfect-square factor.", "(b) Add the coefficients: 4 + 3 = 7.", "(c) Multiply top and bottom by √5.", "(d) Take the fourth root first, then cube it."]
            }
        },

        /* ----- Added long-answer: scientific ----- */

        {
            id: "m-la-19", topic: "scientific",
            q: "A science worksheet gives these tasks:\n(a) Write 150 000 in scientific notation.\n(b) Compute (3 × 10⁴) × (2 × 10⁵).\n(c) Write 4.68 × 10⁻³ in ordinary form.\n(d) Round 0.00468 to 2 significant figures.",
            sample: "(a) 1.5 × 10⁵. (b) 6 × 10⁹. (c) 0.00468. (d) 0.0047.", marks: 8,
            help: {
                rule: "Use standard scientific-notation rules and careful significant-figure rounding.",
                steps: ["(a) Move the decimal so one non-zero digit stays before it.", "(b) Multiply coefficients and add exponents.", "(c) A negative exponent moves the decimal to the left.", "(d) Count significant figures from the first non-zero digit."]
            }
        },

        {
            id: "m-la-20", topic: "scientific",
            q: "A science worksheet gives these tasks:\n(a) Write 2 400 000 in scientific notation.\n(b) Compute (3 × 10⁴) × (2 × 10⁵).\n(c) Write 4.68 × 10⁻³ in ordinary form.\n(d) Round 0.00468 to 2 significant figures.",
            sample: "(a) 2.4 × 10⁶. (b) 6 × 10⁹. (c) 0.00468. (d) 0.0047.", marks: 8,
            help: {
                rule: "Use standard scientific-notation rules and careful significant-figure rounding.",
                steps: ["(a) Move the decimal so one non-zero digit stays before it.", "(b) Multiply coefficients and add exponents.", "(c) A negative exponent moves the decimal to the left.", "(d) Count significant figures from the first non-zero digit."]
            }
        },

        /* ----- Added long-answer: expansion ----- */

        {
            id: "m-la-21", topic: "expansion",
            q: "Answer the following:\n(a) Expand (2x + 4)(3x − 2).\n(b) Expand and simplify (x − 3)² + 2x.\n(c) Substitute x = 2 into your answer from part (a).",
            sample: "(a) 6x² + 8x - 8. (b) x² - 4x + 9. (c) 32.", marks: 7,
            help: {
                rule: "Expand carefully, collect like terms, and only substitute after you have simplified.",
                steps: ["(a) Use FOIL and combine like terms.", "(b) Use the perfect-square identity, then add the extra linear term.", "(c) Substitute x = 2 into 6x² + 8x - 8."]
            }
        },

        {
            id: "m-la-22", topic: "expansion",
            q: "Answer the following:\n(a) Expand (3x + 5)(4x − 2).\n(b) Expand and simplify (x − 4)² + 3x.\n(c) Substitute x = 2 into your answer from part (a).",
            sample: "(a) 12x² + 14x - 10. (b) x² - 5x + 16. (c) 66.", marks: 7,
            help: {
                rule: "Expand carefully, collect like terms, and only substitute after you have simplified.",
                steps: ["(a) Use FOIL and combine like terms.", "(b) Use the perfect-square identity, then add the extra linear term.", "(c) Substitute x = 2 into 12x² + 14x - 10."]
            }
        },

        /* ----- Added long-answer: alg-fractions ----- */

        {
            id: "m-la-23", topic: "alg-fractions",
            q: "Simplify each algebraic fraction:\n(a) (2x + 4)/(x + 2)\n(b) (x² − 4)/(x + 2)\n(c) x/(x + 2) + 2/(x + 2)",
            sample: "(a) 2. (b) x − 2. (c) 1.", marks: 6,
            help: {
                rule: "Factor wherever possible before cancelling, and use common denominators when adding.",
                steps: ["(a) Factor the numerator and cancel the common factor.", "(b) Use difference of squares, then cancel.", "(c) Add the numerators because the denominators are the same."]
            }
        },

        {
            id: "m-la-24", topic: "alg-fractions",
            q: "Simplify each algebraic fraction:\n(a) (3x + 9)/(x + 3)\n(b) (x² − 9)/(x + 3)\n(c) x/(x + 3) + 3/(x + 3)",
            sample: "(a) 3. (b) x − 3. (c) 1.", marks: 6,
            help: {
                rule: "Factor wherever possible before cancelling, and use common denominators when adding.",
                steps: ["(a) Factor the numerator and cancel the common factor.", "(b) Use difference of squares, then cancel.", "(c) Add the numerators because the denominators are the same."]
            }
        },

        /* ----- Added long-answer: linear-eq ----- */

        {
            id: "m-la-25", topic: "linear-eq",
            q: "Solve the equation 2x - 4 = -8. Then check your answer by substitution.",
            sample: "x = -2. Check: 2(-2) - 4 = -8, so the solution is correct.", marks: 6,
            help: {
                rule: "Isolate x step by step, then always verify by substituting back.",
                steps: ["Undo the constant term.", "Divide by 2.", "Substitute the solution back into the original equation to check."]
            }
        },

        {
            id: "m-la-26", topic: "linear-eq",
            q: "Solve the equation 3x - 3 = -6. Then check your answer by substitution.",
            sample: "x = -1. Check: 3(-1) - 3 = -6, so the solution is correct.", marks: 6,
            help: {
                rule: "Isolate x step by step, then always verify by substituting back.",
                steps: ["Undo the constant term.", "Divide by 3.", "Substitute the solution back into the original equation to check."]
            }
        },

        /* ----- Added long-answer: linear-eq-multi ----- */

        {
            id: "m-la-27", topic: "linear-eq-multi",
            q: "Solve 3(x + 2) − 4(x + 2) = 0. Show your working clearly and check your answer.",
            sample: "Expand: 3x + 6 − 4x - 8 = 0. Solve to get x = -2. Substituting back gives the same number on both sides, so the answer is correct.", marks: 7,
            help: {
                rule: "For multi-step equations, expand first, simplify second, solve third, and check last.",
                steps: ["Expand each bracket.", "Collect like terms.", "Solve the linear equation.", "Substitute back to check."]
            }
        },

        {
            id: "m-la-28", topic: "linear-eq-multi",
            q: "Solve 4(x + 3) − 2(x - 1) = 12. Show your working clearly and check your answer.",
            sample: "Expand: 4x + 12 − 2x + 2 = 12. Solve to get x = -1. Substituting back gives the same number on both sides, so the answer is correct.", marks: 7,
            help: {
                rule: "For multi-step equations, expand first, simplify second, solve third, and check last.",
                steps: ["Expand each bracket.", "Collect like terms.", "Solve the linear equation.", "Substitute back to check."]
            }
        },

        /* ----- Added long-answer: quadratic-monic ----- */

        {
            id: "m-la-29", topic: "quadratic-monic",
            q: "Solve x² + 0x - 9 = 0 by factorising. Then verify each solution by substitution.",
            sample: "Factorise to get (x + 3)(x - 3) = 0. So x = -3 or x = 3. Both values make the original equation equal 0 when substituted.", marks: 7,
            help: {
                rule: "Use factorisation first because the quadratic is monic, then check both roots.",
                steps: ["Find the factor pair that gives the correct sum and product.", "Use the zero-product rule to find both roots.", "Substitute each root back to verify."]
            }
        },

        {
            id: "m-la-30", topic: "quadratic-monic",
            q: "Solve x² - 2x - 8 = 0 by factorising. Then verify each solution by substitution.",
            sample: "Factorise to get (x + 2)(x - 4) = 0. So x = -2 or x = 4. Both values make the original equation equal 0 when substituted.", marks: 7,
            help: {
                rule: "Use factorisation first because the quadratic is monic, then check both roots.",
                steps: ["Find the factor pair that gives the correct sum and product.", "Use the zero-product rule to find both roots.", "Substitute each root back to verify."]
            }
        },

        /* ----- Added long-answer: quadratic-nonmonic ----- */

        {
            id: "m-la-31", topic: "quadratic-nonmonic",
            q: "Solve 2x² + 5x - 3 = 0. Show how the factorisation is formed, then check both solutions.",
            sample: "The factorisation leads to roots x = 1/2 and x = -3. Both satisfy the original equation when substituted back.", marks: 7,
            help: {
                rule: "Non-monic quadratics still solve by factorising into two linear factors when possible.",
                steps: ["Look for two linear factors that multiply to the quadratic.", "Solve each factor = 0.", "Substitute each answer into the original quadratic to check."]
            }
        },

        {
            id: "m-la-32", topic: "quadratic-nonmonic",
            q: "Solve 3x² + 10x - 8 = 0. Show how the factorisation is formed, then check both solutions.",
            sample: "The factorisation leads to roots x = 2/3 and x = -4. Both satisfy the original equation when substituted back.", marks: 7,
            help: {
                rule: "Non-monic quadratics still solve by factorising into two linear factors when possible.",
                steps: ["Look for two linear factors that multiply to the quadratic.", "Solve each factor = 0.", "Substitute each answer into the original quadratic to check."]
            }
        },

        /* ----- Added long-answer: inequalities ----- */

        {
            id: "m-la-33", topic: "inequalities",
            q: "Solve the inequality 2x - 3 > -3. Represent your answer on a number line and explain why the endpoint is open or closed.",
            sample: "x > 0. On the number line, use an open circle at 0 and shade to the right because values greater than 0 are included, but 0 itself is not.", marks: 6,
            help: {
                rule: "Solve the inequality carefully and connect the algebra to the number-line graph.",
                steps: ["Solve the inequality exactly like a linear equation until x is isolated.", "Choose an open circle for > or < and a closed circle for ≥ or ≤.", "Shade in the direction of the valid values."]
            }
        },

        {
            id: "m-la-34", topic: "inequalities",
            q: "Solve the inequality 3x - 2 > 1. Represent your answer on a number line and explain why the endpoint is open or closed.",
            sample: "x > 1. On the number line, use an open circle at 1 and shade to the right because values greater than 1 are included, but 1 itself is not.", marks: 6,
            help: {
                rule: "Solve the inequality carefully and connect the algebra to the number-line graph.",
                steps: ["Solve the inequality exactly like a linear equation until x is isolated.", "Choose an open circle for > or < and a closed circle for ≥ or ≤.", "Shade in the direction of the valid values."]
            }
        },

        /* ----- Added long-answer: simultaneous ----- */

        {
            id: "m-la-35", topic: "simultaneous",
            q: "Solve simultaneously:\n2x + 2y = 8\n3x − 2y = -3\nThen explain why elimination is the most efficient method here.",
            sample: "Add the equations to eliminate y: 5x = 5, so x = 1. Substitute back to get y = 3. Elimination is efficient because the y-coefficients are already opposites.", marks: 7,
            help: {
                rule: "When one variable already has opposite coefficients, elimination is the fastest method.",
                steps: ["Add the equations to remove y immediately.", "Find x = 1.", "Substitute back to get y = 3.", "Comment on the opposite y-coefficients."]
            }
        },

        {
            id: "m-la-36", topic: "simultaneous",
            q: "Solve simultaneously:\n3x + 3y = 18\n1x − 3y = -10\nThen explain why elimination is the most efficient method here.",
            sample: "Add the equations to eliminate y: 4x = 8, so x = 2. Substitute back to get y = 4. Elimination is efficient because the y-coefficients are already opposites.", marks: 7,
            help: {
                rule: "When one variable already has opposite coefficients, elimination is the fastest method.",
                steps: ["Add the equations to remove y immediately.", "Find x = 2.", "Substitute back to get y = 4.", "Comment on the opposite y-coefficients."]
            }
        },

        /* ----- Added long-answer: midpoint-gradient ----- */

        {
            id: "m-la-37", topic: "midpoint-gradient",
            q: "For A(-3, 0) and B(1, 6):\n(a) Find the gradient of AB.\n(b) Find the midpoint of AB.\n(c) Find the length of AB.\n(d) Write the equation of AB.",
            sample: "(a) m = 3/2. (b) Midpoint = (-1.0, 3.0). (c) Length = √52 = 2√13. (d) y = (3/2)x + 9/2.", marks: 8,
            help: {
                rule: "Apply each coordinate-geometry formula to the same pair of points and keep your working organised.",
                steps: ["Use the gradient formula for part (a).", "Average the coordinates for the midpoint.", "Use the distance formula for the length.", "Substitute the gradient and one point into y = mx + c."]
            }
        },

        {
            id: "m-la-38", topic: "midpoint-gradient",
            q: "For A(-2, 1) and B(2, 7):\n(a) Find the gradient of AB.\n(b) Find the midpoint of AB.\n(c) Find the length of AB.\n(d) Write the equation of AB.",
            sample: "(a) m = 3/2. (b) Midpoint = (0.0, 4.0). (c) Length = √52 = 2√13. (d) y = (3/2)x + 4.", marks: 8,
            help: {
                rule: "Apply each coordinate-geometry formula to the same pair of points and keep your working organised.",
                steps: ["Use the gradient formula for part (a).", "Average the coordinates for the midpoint.", "Use the distance formula for the length.", "Substitute the gradient and one point into y = mx + c."]
            }
        },

        /* ----- Added long-answer: slope-intercept ----- */

        {
            id: "m-la-39", topic: "slope-intercept",
            q: "The line ℓ is given by 2y = 4x - 4.\n(a) Rewrite ℓ in slope-intercept form.\n(b) State the gradient and y-intercept.\n(c) Find the point where ℓ crosses the y-axis.",
            sample: "(a) y = 2x - 2. (b) Gradient = 2, y-intercept = -2. (c) The y-axis crossing is (0, -2).", marks: 6,
            help: {
                rule: "Convert to y = mx + c first; all the other information then becomes easy to read.",
                steps: ["Divide all terms by 2.", "Read the gradient and intercept from y = mx + c.", "Set x = 0 to find the y-axis crossing point."]
            }
        },

        {
            id: "m-la-40", topic: "slope-intercept",
            q: "The line ℓ is given by 2y = 6x - 2.\n(a) Rewrite ℓ in slope-intercept form.\n(b) State the gradient and y-intercept.\n(c) Find the point where ℓ crosses the y-axis.",
            sample: "(a) y = 3x - 1. (b) Gradient = 3, y-intercept = -1. (c) The y-axis crossing is (0, -1).", marks: 6,
            help: {
                rule: "Convert to y = mx + c first; all the other information then becomes easy to read.",
                steps: ["Divide all terms by 2.", "Read the gradient and intercept from y = mx + c.", "Set x = 0 to find the y-axis crossing point."]
            }
        },

        /* ----- Added long-answer: lines-perp ----- */

        {
            id: "m-la-41", topic: "lines-perp",
            q: "The line ℓ has equation y = 2x + 3.\n(a) State the gradient of ℓ.\n(b) Find the gradient of a line perpendicular to ℓ.\n(c) Find the equation of the perpendicular line through (3, 0).",
            sample: "(a) 2. (b) -1/2. (c) y = (-1/2)x + 3/2.", marks: 7,
            help: {
                rule: "Use the negative reciprocal for the perpendicular gradient, then use the point to form the equation.",
                steps: ["The gradient of ℓ is 2.", "Perpendicular gradient = -1/2.", "Substitute (3, 0) to find the intercept of the perpendicular line."]
            }
        },

        {
            id: "m-la-42", topic: "lines-perp",
            q: "The line ℓ has equation y = 3x + 3.\n(a) State the gradient of ℓ.\n(b) Find the gradient of a line perpendicular to ℓ.\n(c) Find the equation of the perpendicular line through (4, 1).",
            sample: "(a) 3. (b) -1/3. (c) y = (-1/3)x + 7/3.", marks: 7,
            help: {
                rule: "Use the negative reciprocal for the perpendicular gradient, then use the point to form the equation.",
                steps: ["The gradient of ℓ is 3.", "Perpendicular gradient = -1/3.", "Substitute (4, 1) to find the intercept of the perpendicular line."]
            }
        },

        /* ----- Added long-answer: trig-sides ----- */

        {
            id: "m-la-43", topic: "trig-sides",
            q: "A right triangle has hypotenuse 10 m and one acute angle 30°.\n(a) Find the opposite side.\n(b) Find the adjacent side.\n(c) Check your answers using Pythagoras (1 dp).",
            sample: "(a) opposite ≈ 5 m. (b) adjacent ≈ 8.7 m. (c) 5² + 8.7² ≈ 10², so the values are consistent to rounding.", marks: 7,
            help: {
                rule: "Use SOH and CAH with the same angle, then verify the rounded values with Pythagoras.",
                steps: ["Use sine for the opposite side.", "Use cosine for the adjacent side.", "Check by substituting the rounded values into a² + b² ≈ c²."]
            }
        },

        {
            id: "m-la-44", topic: "trig-sides",
            q: "A right triangle has hypotenuse 12 m and one acute angle 35°.\n(a) Find the opposite side.\n(b) Find the adjacent side.\n(c) Check your answers using Pythagoras (1 dp).",
            sample: "(a) opposite ≈ 6.9 m. (b) adjacent ≈ 9.8 m. (c) 6.9² + 9.8² ≈ 12², so the values are consistent to rounding.", marks: 7,
            help: {
                rule: "Use SOH and CAH with the same angle, then verify the rounded values with Pythagoras.",
                steps: ["Use sine for the opposite side.", "Use cosine for the adjacent side.", "Check by substituting the rounded values into a² + b² ≈ c²."]
            }
        },

        /* ----- Added long-answer: trig-angles ----- */

        {
            id: "m-la-45", topic: "trig-angles",
            q: "A right triangle has opposite side 3 and adjacent side 4.\n(a) Find θ to the nearest degree.\n(b) Find the hypotenuse to 1 dp.\n(c) State the sine ratio for θ.",
            sample: "(a) θ ≈ 37°. (b) Hypotenuse ≈ 5. (c) sin θ = 3/5 (approximately).", marks: 7,
            help: {
                rule: "Link the three trig relationships: inverse tangent for the angle, Pythagoras for the missing side, then sine as a ratio.",
                steps: ["Use inverse tangent for the angle.", "Use Pythagoras for the hypotenuse.", "Sine is opposite/hypotenuse."]
            }
        },

        {
            id: "m-la-46", topic: "trig-angles",
            q: "A right triangle has opposite side 5 and adjacent side 7.\n(a) Find θ to the nearest degree.\n(b) Find the hypotenuse to 1 dp.\n(c) State the sine ratio for θ.",
            sample: "(a) θ ≈ 36°. (b) Hypotenuse ≈ 8.6. (c) sin θ = 5/8.6 (approximately).", marks: 7,
            help: {
                rule: "Link the three trig relationships: inverse tangent for the angle, Pythagoras for the missing side, then sine as a ratio.",
                steps: ["Use inverse tangent for the angle.", "Use Pythagoras for the hypotenuse.", "Sine is opposite/hypotenuse."]
            }
        },

        /* ----- Added long-answer: trig-elev ----- */

        {
            id: "m-la-47", topic: "trig-elev",
            q: "From a point 20 m from a building, the angle of elevation to the top is 18°. The observer's eye level is 1.6 m.\n(a) Find the height above eye level.\n(b) Find the total height of the building.",
            sample: "(a) 6.5 m. (b) 8.1 m.", marks: 6,
            help: {
                rule: "Separate the vertical rise above the observer from the observer's own eye height.",
                steps: ["Use tangent to find the vertical rise above eye level.", "Add 1.6 m to get the total height."]
            }
        },

        {
            id: "m-la-48", topic: "trig-elev",
            q: "From a point 25 m from a building, the angle of elevation to the top is 24°. The observer's eye level is 1.6 m.\n(a) Find the height above eye level.\n(b) Find the total height of the building.",
            sample: "(a) 11.1 m. (b) 12.7 m.", marks: 6,
            help: {
                rule: "Separate the vertical rise above the observer from the observer's own eye height.",
                steps: ["Use tangent to find the vertical rise above eye level.", "Add 1.6 m to get the total height."]
            }
        },

        /* ----- Added long-answer: trig-bearings ----- */

        {
            id: "m-la-49", topic: "trig-bearings",
            q: "A walker travels 4 km north and then 4 km east.\n(a) Find the distance from the starting point.\n(b) Find the bearing from the start to the finish.\n(c) Find the reverse bearing from the finish back to the start.",
            sample: "(a) 5.7 km. (b) 045°. (c) 225°.", marks: 7,
            help: {
                rule: "Treat the movement as a right triangle, then measure the bearing clockwise from north.",
                steps: ["Use Pythagoras for the distance.", "Use tan = east/north for the bearing from the start.", "Add 180° to get the reverse bearing."]
            }
        },

        {
            id: "m-la-50", topic: "trig-bearings",
            q: "A walker travels 5 km north and then 5 km east.\n(a) Find the distance from the starting point.\n(b) Find the bearing from the start to the finish.\n(c) Find the reverse bearing from the finish back to the start.",
            sample: "(a) 7.1 km. (b) 045°. (c) 225°.", marks: 7,
            help: {
                rule: "Treat the movement as a right triangle, then measure the bearing clockwise from north.",
                steps: ["Use Pythagoras for the distance.", "Use tan = east/north for the bearing from the start.", "Add 180° to get the reverse bearing."]
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
            focus: "Half-Yearly simulation — broad balanced mix",
            duration: 60,
            questionIds: [
                "m-mcq-3","m-mcq-11","m-mcq-19","m-mcq-28","m-mcq-35","m-mcq-41","m-mcq-45","m-mcq-50",
                "m-mcq-53","m-mcq-63","m-mcq-60","m-mcq-66","m-mcq-69","m-mcq-75","m-mcq-79","m-mcq-84",
                "m-mcq-88","m-mcq-92","m-mcq-95","m-mcq-8","m-sa-12","m-sa-14","m-sa-16","m-sa-75",
                "m-sa-84","m-sa-20","m-sa-23","m-sa-111","m-sa-120","m-sa-25","m-la-15","m-la-37"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — balanced topic rotation A",
            duration: 60,
            questionIds: [
                "m-mcq-152","m-mcq-155","m-mcq-161","m-mcq-165","m-mcq-466","m-mcq-483","m-mcq-173","m-mcq-101",
                "m-mcq-25","m-mcq-111","m-mcq-116","m-mcq-122","m-mcq-125","m-mcq-130","m-mcq-132","m-mcq-327",
                "m-mcq-346","m-mcq-363","m-mcq-148","m-mcq-400","m-sa-159","m-sa-166","m-sa-176","m-sa-184",
                "m-sa-42","m-sa-51","m-sa-58","m-sa-68","m-sa-77","m-sa-86","m-la-49","m-la-12"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — balanced topic rotation B",
            duration: 60,
            questionIds: [
                "m-mcq-295","m-mcq-313","m-mcq-332","m-mcq-351","m-mcq-368","m-mcq-384","m-mcq-404","m-mcq-416",
                "m-mcq-436","m-mcq-453","m-mcq-471","m-mcq-488","m-mcq-177","m-mcq-190","m-mcq-208","m-mcq-227",
                "m-mcq-244","m-mcq-262","m-mcq-279","m-mcq-299","m-sa-105","m-sa-115","m-sa-124","m-sa-132",
                "m-sa-139","m-sa-151","m-sa-171","m-sa-180","m-sa-192","m-sa-31","m-la-41","m-la-47"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced topic rotation C",
            duration: 60,
            questionIds: [
                "m-mcq-195","m-mcq-214","m-mcq-232","m-mcq-249","m-mcq-267","m-mcq-284","m-mcq-303","m-mcq-318",
                "m-mcq-337","m-mcq-355","m-mcq-373","m-mcq-389","m-mcq-408","m-mcq-421","m-mcq-441","m-mcq-458",
                "m-mcq-475","m-mcq-493","m-mcq-182","m-mcq-200","m-sa-61","m-sa-70","m-sa-80","m-sa-89",
                "m-sa-96","m-sa-109","m-sa-118","m-sa-127","m-sa-136","m-sa-144","m-la-17","m-la-40"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 75,
            questionIds: [
                "m-mcq-425","m-mcq-446","m-mcq-463","m-mcq-480","m-mcq-498","m-mcq-187","m-mcq-204","m-mcq-220",
                "m-mcq-238","m-mcq-255","m-mcq-272","m-mcq-289","m-mcq-307","m-mcq-324","m-mcq-342","m-mcq-360",
                "m-mcq-378","m-mcq-395","m-mcq-412","m-mcq-429","m-sa-189","m-sa-198","m-sa-37","m-sa-46",
                "m-sa-55","m-sa-64","m-sa-73","m-sa-82","m-sa-91","m-sa-100","m-la-44","m-la-46"
            ]
        }
    ]
};
