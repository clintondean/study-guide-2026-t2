// Maths Core — Year 7 Half Yearly
// Outcomes assessed:
//   MA3-RN-01 applies an understanding of place value and the role of zero
//             to represent the properties of numbers
//   MA3-AR-01 selects and applies appropriate strategies to solve addition
//             and subtraction problems
//   MA3-MR-01 selects and applies appropriate strategies to solve
//             multiplication and division problems
//   MA4-INT-C-01 compares, orders and calculates with integers to solve
//                problems
//   MA4-ANG-C-01 applies angle relationships to solve problems, including
//                those related to transversals on sets of parallel lines
//   MA4-FRC-C-01 represents and operates with fractions, decimals and
//                percentages to solve problems
//   MAO-WM-01 develops understanding and fluency in mathematics through
//             exploring and connecting concepts, solving problems, and
//             communicating reasoning clearly

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

window.SUBJECT_DATA["maths-core"] = {
    id: "maths-core",
    name: "Maths Core",
    tagline: "Year 7 Half Yearly — Integers, Angle Relationships & Fractions/Decimals/Percentages",
    color: "#f77f00",
    accent: "#d45d00",
    icon: "📐",
    topics: [
        { id: "integers-place-value", name: "Integers, ordering & place value" },
        { id: "integers-operations", name: "Integer operations" },
        { id: "angle-basics", name: "Basic angle relationships" },
        { id: "angle-parallel", name: "Parallel lines & transversals" },
        { id: "fdp-conversions", name: "Fractions, decimals & percentages" },
        { id: "fdp-operations", name: "Operating with fractions, decimals & percentages" }
    ],
    cheatSheet: {
        title: "Maths Core Cheat Sheet",
        subtitle: "Year 7 Half Yearly — Papers 1 & 2",
        intro: "A sample one-page A4 cheat sheet for the Year 7 half-yearly. Pack the page with rules, mini-conversions, and angle facts so you can scan it quickly while revising.",
        note: "Keep this to one A4 page. Use short rules, tiny worked examples, and common conversions. In the real exam, read carefully, label diagrams, and always write the unit or symbol the question asks for.",
        sections: [
            {
                heading: "Integers, ordering and place value",
                points: [
                    "On a number line, numbers further left are smaller.",
                    "Negative numbers with larger absolute value are smaller: -12 < -5.",
                    "Opposites are the same distance from 0 with opposite signs: opposite of -9 is 9.",
                    "Absolute value means distance from 0: |-7| = 7.",
                    "Place value chart: ten-thousands | thousands | hundreds | tens | ones.",
                    "Zero is a place holder, so 5,040 means 5 thousands, 0 hundreds, 4 tens, 0 ones."
                ]
            },
            {
                heading: "Integer operations and order of operations",
                points: [
                    "BODMAS/BIDMAS: brackets, orders, divide/multiply, add/subtract.",
                    "Add same signs: add and keep the sign. Example: -4 + -3 = -7.",
                    "Add different signs: subtract and keep the sign of the larger absolute value.",
                    "Subtracting a negative turns into addition: 6 - (-2) = 8.",
                    "For multiplication/division: + with + gives +, + with - gives -, - with - gives +."
                ]
            },
            {
                heading: "Angle facts to remember",
                points: [
                    "Angles on a straight line add to 180°.",
                    "Angles around a point add to 360°.",
                    "Vertically opposite angles are equal.",
                    "Complementary angles add to 90°.",
                    "Supplementary angles add to 180°.",
                    "If algebra is used, turn the angle fact into an equation first, then solve."
                ]
            },
            {
                heading: "Parallel lines and transversals",
                points: [
                    "Corresponding angles are equal.",
                    "Alternate angles are equal.",
                    "Co-interior angles add to 180°.",
                    "Look for a Z, F, or C pattern before solving.",
                    "Write the reason beside the step: corresponding, alternate, co-interior, straight line, around a point."
                ]
            },
            {
                heading: "Fractions, decimals and percentages",
                points: [
                    "Fraction -> decimal: numerator ÷ denominator.",
                    "Decimal -> percent: multiply by 100%.",
                    "Percent -> decimal: divide by 100.",
                    "Percent of an amount = decimal form x amount.",
                    "Common conversions: 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 3/4 = 0.75 = 75%, 1/5 = 0.2 = 20%, 1/10 = 0.1 = 10%."
                ]
            },
            {
                heading: "Operating with fractions, decimals and percentages",
                points: [
                    "Add/subtract decimals by lining up decimal points.",
                    "Multiply decimals normally, then place the decimal at the end.",
                    "To divide by a decimal, scale both numbers so the divisor becomes whole.",
                    "Add/subtract fractions using a common denominator.",
                    "Multiply fractions: top x top, bottom x bottom.",
                    "Divide fractions: keep, change, flip.",
                    "Simplify final answers fully."
                ]
            },
            {
                heading: "Final reminders",
                points: [
                    "Estimate first so you notice impossible answers.",
                    "If the question asks for degrees, include the degree symbol.",
                    "If the answer is a fraction, leave it in simplest form unless told otherwise.",
                    "Check whether the question wants an exact answer, a decimal, or a percentage."
                ]
            }
        ]
    },

    mcqs: [
        /* ----- Integers, ordering & place value ----- */
        {
            id: "m7c-mcq-1", topic: "integers-place-value",
            q: "Which list is in ascending order?",
            options: ["4, 0, -3, -8", "-8, -3, 0, 4", "-3, -8, 0, 4", "0, -3, 4, -8"],
            answer: 1,
            explain: "Ascending order means smallest to largest. Negative numbers with greater magnitude are smaller.",
            help: { rule: "On a number line, numbers further left are smaller.", steps: ["Find the smallest integer first.", "Then order numbers as you move right.", "Correct order: -8, -3, 0, 4."] }
        },
        {
            id: "m7c-mcq-2", topic: "integers-place-value",
            q: "Which number has the greatest value?",
            options: ["-12", "-4", "0", "-1"],
            answer: 2,
            explain: "Zero is greater than every negative number.",
            help: { rule: "Any positive number is greater than zero, and zero is greater than any negative number.", steps: ["Compare signs first.", "Only one number is not negative.", "So 0 is the greatest."] }
        },
        {
            id: "m7c-mcq-3", topic: "integers-place-value",
            q: "What is the opposite of -9?",
            options: ["9", "-9", "0", "-18"],
            answer: 0,
            explain: "Opposites are the same distance from zero on a number line, but on opposite sides.",
            help: { rule: "The opposite of a number has the same size but the opposite sign.", steps: ["Start at -9 on the number line.", "Move to the matching point on the other side of zero.", "The opposite is 9."] }
        },
        {
            id: "m7c-mcq-4", topic: "integers-place-value",
            q: "Which statement about 5,040 is correct?",
            options: ["The 4 is worth 4 tens", "The 5 is worth 5 thousands", "The 0 in the tens place has no role", "The 4 is worth 4 hundreds"],
            answer: 1,
            explain: "In 5,040, the digit 5 is in the thousands place, so it represents 5,000.",
            help: { rule: "A digit's value depends on its place.", steps: ["Read the number by place value.", "5 is in the thousands place.", "So the 5 is worth 5,000."] }
        },
        {
            id: "m7c-mcq-25", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: -5, -2, -1, 3 | 3, -2, -1, -5 | -1, -5, -2, 3 | -2, -1, -5, 3. Select the best answer.",
            options: ["-5, -2, -1, 3", "3, -2, -1, -5", "-1, -5, -2, 3", "-2, -1, -5, 3"],
            answer: 0,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -5, -2, -1, 3."] }
        },
        {
            id: "m7c-mcq-26", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -7 | 6 | -4 | -9. Select the best answer.",
            options: ["-7", "6", "-4", "-9"],
            answer: 1,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "6 is the greatest value."] }
        },
        {
            id: "m7c-mcq-27", topic: "integers-place-value",
            q: "What is the opposite of -10?",
            options: ["-10", "0", "10", "-12"],
            answer: 2,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -10 is 10."] }
        },
        {
            id: "m7c-mcq-28", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 86,420?",
            options: ["20,000", "2,000", "200", "20"],
            answer: 3,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the tens place.", "That place is worth 10.", "So the digit is worth 20."] }
        },
        {
            id: "m7c-mcq-29", topic: "integers-place-value",
            q: "Which inequality is true?",
            options: ["-17 < -12", "-12 < -17", "6 < 4", "4 < -17"],
            answer: 0,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-17 < -12 is the true statement."] }
        },
        {
            id: "m7c-mcq-30", topic: "integers-place-value",
            q: "Which digit is in the hundreds place of 42,086?",
            options: ["4", "0", "2", "8"],
            answer: 1,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the hundreds place is 0."] }
        },
        {
            id: "m7c-mcq-31", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: 16, 0, -13, -11 | -11, 0, -13, 16 | -13, -11, 0, 16 | 0, -13, -11, 16. Choose the correct option.",
            options: ["16, 0, -13, -11", "-11, 0, -13, 16", "-13, -11, 0, 16", "0, -13, -11, 16"],
            answer: 2,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -13, -11, 0, 16."] }
        },
        {
            id: "m7c-mcq-32", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -13 | -5 | -6 | 12. Choose the correct option.",
            options: ["-13", "-5", "-6", "12"],
            answer: 3,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "12 is the greatest value."] }
        },
        {
            id: "m7c-mcq-33", topic: "integers-place-value",
            q: "What is the opposite of -7?",
            options: ["7", "-7", "0", "-9"],
            answer: 0,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -7 is 7."] }
        },
        {
            id: "m7c-mcq-34", topic: "integers-place-value",
            q: "What is the value of the digit 5 in 31,975?",
            options: ["50,000", "5", "5,000", "500"],
            answer: 1,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 5 is in the ones place.", "That place is worth 1.", "So the digit is worth 5."] }
        },
        {
            id: "m7c-mcq-35", topic: "integers-place-value",
            q: "Which inequality is true? Options: -10 < -15 | 20 < 16 | -15 < -10 | 16 < -15. Select the best answer.",
            options: ["-10 < -15", "20 < 16", "-15 < -10", "16 < -15"],
            answer: 2,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-15 < -10 is the true statement."] }
        },
        {
            id: "m7c-mcq-36", topic: "integers-place-value",
            q: "Which digit is in the tens place of 64,208?",
            options: ["6", "4", "2", "0"],
            answer: 3,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the tens place is 0."] }
        },
        {
            id: "m7c-mcq-37", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: -17, -7, 2, 12 | 12, 2, -7, -17 | -7, -17, 2, 12 | -17, 2, -7, 12. Use the rule that fits this question.",
            options: ["-17, -7, 2, 12", "12, 2, -7, -17", "-7, -17, 2, 12", "-17, 2, -7, 12"],
            answer: 0,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -17, -7, 2, 12."] }
        },
        {
            id: "m7c-mcq-38", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -19 | 6 | -6 | -3. Use the rule that fits this question.",
            options: ["-19", "6", "-6", "-3"],
            answer: 1,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "6 is the greatest value."] }
        },
        {
            id: "m7c-mcq-39", topic: "integers-place-value",
            q: "What is the opposite of -4?",
            options: ["-4", "0", "4", "-6"],
            answer: 2,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -4 is 4."] }
        },
        {
            id: "m7c-mcq-40", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 20,864?",
            options: ["2,000", "200", "20", "20,000"],
            answer: 3,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the ten-thousands place.", "That place is worth 10,000.", "So the digit is worth 20,000."] }
        },
        {
            id: "m7c-mcq-41", topic: "integers-place-value",
            q: "Which inequality is true? Options: -13 < -8 | -8 < -13 | 12 < 10 | 10 < -13. Choose the correct option.",
            options: ["-13 < -8", "-8 < -13", "12 < 10", "10 < -13"],
            answer: 0,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-13 < -8 is the true statement."] }
        },
        {
            id: "m7c-mcq-42", topic: "integers-place-value",
            q: "Which digit is in the ones place of 86,420?",
            options: ["8", "0", "6", "4"],
            answer: 1,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the ones place is 0."] }
        },
        {
            id: "m7c-mcq-43", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: 8, 4, -1, -23 | -1, -23, 4, 8 | -23, -1, 4, 8 | -23, 4, -1, 8. Check each choice before deciding.",
            options: ["8, 4, -1, -23", "-1, -23, 4, 8", "-23, -1, 4, 8", "-23, 4, -1, 8"],
            answer: 2,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -23, -1, 4, 8."] }
        },
        {
            id: "m7c-mcq-44", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -25 | -7 | -9 | 12. Check each choice before deciding.",
            options: ["-25", "-7", "-9", "12"],
            answer: 3,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "12 is the greatest value."] }
        },
        {
            id: "m7c-mcq-45", topic: "integers-place-value",
            q: "What is the opposite of -28?",
            options: ["28", "-28", "0", "-30"],
            answer: 0,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -28 is 28."] }
        },
        {
            id: "m7c-mcq-46", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 42,086?",
            options: ["20,000", "2,000", "200", "20"],
            answer: 1,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the thousands place.", "That place is worth 1,000.", "So the digit is worth 2,000."] }
        },
        {
            id: "m7c-mcq-47", topic: "integers-place-value",
            q: "Which inequality is true? Options: -6 < -11 | 8 < 4 | -11 < -6 | 4 < -11. Use the rule that fits this question.",
            options: ["-6 < -11", "8 < 4", "-11 < -6", "4 < -11"],
            answer: 2,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-11 < -6 is the true statement."] }
        },
        {
            id: "m7c-mcq-48", topic: "integers-place-value",
            q: "Which digit is in the ten-thousands place of 31,975?",
            options: ["1", "9", "7", "3"],
            answer: 3,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the ten-thousands place is 3."] }
        },
        {
            id: "m7c-mcq-49", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: -29, -13, -2, 4 | 4, -2, -13, -29 | -13, -29, -2, 4 | -29, -2, -13, 4. Work it out first, then pick an option.",
            options: ["-29, -13, -2, 4", "4, -2, -13, -29", "-13, -29, -2, 4", "-29, -2, -13, 4"],
            answer: 0,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -29, -13, -2, 4."] }
        },
        {
            id: "m7c-mcq-50", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -7 | 6 | -8 | -6. Work it out first, then pick an option.",
            options: ["-7", "6", "-8", "-6"],
            answer: 1,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "6 is the greatest value."] }
        },
        {
            id: "m7c-mcq-51", topic: "integers-place-value",
            q: "What is the opposite of -25?",
            options: ["-25", "0", "25", "-27"],
            answer: 2,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -25 is 25."] }
        },
        {
            id: "m7c-mcq-52", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 64,208?",
            options: ["20,000", "2,000", "20", "200"],
            answer: 3,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the hundreds place.", "That place is worth 100.", "So the digit is worth 200."] }
        },
        {
            id: "m7c-mcq-53", topic: "integers-place-value",
            q: "Which inequality is true? Options: -9 < -4 | -4 < -9 | 18 < 16 | 16 < -9. Check each choice before deciding.",
            options: ["-9 < -4", "-4 < -9", "18 < 16", "16 < -9"],
            answer: 0,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-9 < -4 is the true statement."] }
        },
        {
            id: "m7c-mcq-54", topic: "integers-place-value",
            q: "Which digit is in the thousands place of 20,864?",
            options: ["2", "0", "8", "6"],
            answer: 1,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the thousands place is 0."] }
        },
        {
            id: "m7c-mcq-55", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: 17, 0, -7, -5 | -5, 0, -7, 17 | -7, -5, 0, 17 | 0, -7, -5, 17. Think about the key fact involved.",
            options: ["17, 0, -7, -5", "-5, 0, -7, 17", "-7, -5, 0, 17", "0, -7, -5, 17"],
            answer: 2,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -7, -5, 0, 17."] }
        },
        {
            id: "m7c-mcq-56", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -13 | -9 | -3 | 12. Think about the key fact involved.",
            options: ["-13", "-9", "-3", "12"],
            answer: 3,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "12 is the greatest value."] }
        },
        {
            id: "m7c-mcq-57", topic: "integers-place-value",
            q: "What is the opposite of -22?",
            options: ["22", "-22", "0", "-24"],
            answer: 0,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -22 is 22."] }
        },
        {
            id: "m7c-mcq-58", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 86,420? Options: 20,000 | 20 | 2,000 | 200. Select the best answer.",
            options: ["20,000", "20", "2,000", "200"],
            answer: 1,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the tens place.", "That place is worth 10.", "So the digit is worth 20."] }
        },
        {
            id: "m7c-mcq-59", topic: "integers-place-value",
            q: "Which inequality is true? Options: -2 < -7 | 14 < 10 | -7 < -2 | 10 < -7. Work it out first, then pick an option.",
            options: ["-2 < -7", "14 < 10", "-7 < -2", "10 < -7"],
            answer: 2,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-7 < -2 is the true statement."] }
        },
        {
            id: "m7c-mcq-60", topic: "integers-place-value",
            q: "Which digit is in the hundreds place of 42,086? Options: 4 | 2 | 8 | 0. Select the best answer.",
            options: ["4", "2", "8", "0"],
            answer: 3,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the hundreds place is 0."] }
        },
        {
            id: "m7c-mcq-61", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: -11, -1, 2, 13 | 13, 2, -1, -11 | -1, -11, 2, 13 | -11, 2, -1, 13. Use the numbers or angles shown to decide.",
            options: ["-11, -1, 2, 13", "13, 2, -1, -11", "-1, -11, 2, 13", "-11, 2, -1, 13"],
            answer: 0,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -11, -1, 2, 13."] }
        },
        {
            id: "m7c-mcq-62", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -19 | 6 | -10 | -9. Use the numbers or angles shown to decide.",
            options: ["-19", "6", "-10", "-9"],
            answer: 1,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "6 is the greatest value."] }
        },
        {
            id: "m7c-mcq-63", topic: "integers-place-value",
            q: "What is the opposite of -19?",
            options: ["-19", "0", "19", "-21"],
            answer: 2,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -19 is 19."] }
        },
        {
            id: "m7c-mcq-64", topic: "integers-place-value",
            q: "What is the value of the digit 5 in 31,975? Options: 50,000 | 5,000 | 500 | 5. Select the best answer.",
            options: ["50,000", "5,000", "500", "5"],
            answer: 3,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 5 is in the ones place.", "That place is worth 1.", "So the digit is worth 5."] }
        },
        {
            id: "m7c-mcq-65", topic: "integers-place-value",
            q: "Which inequality is true? Options: -5 < 0 | 0 < -5 | 6 < 4 | 4 < -5. Think about the key fact involved.",
            options: ["-5 < 0", "0 < -5", "6 < 4", "4 < -5"],
            answer: 0,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-5 < 0 is the true statement."] }
        },
        {
            id: "m7c-mcq-66", topic: "integers-place-value",
            q: "Which digit is in the tens place of 64,208? Options: 6 | 0 | 4 | 2. Select the best answer.",
            options: ["6", "0", "4", "2"],
            answer: 1,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the tens place is 0."] }
        },
        {
            id: "m7c-mcq-67", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: 9, 4, -13, -17 | -13, -17, 4, 9 | -17, -13, 4, 9 | -17, 4, -13, 9. Pick the option that must be true.",
            options: ["9, 4, -13, -17", "-13, -17, 4, 9", "-17, -13, 4, 9", "-17, 4, -13, 9"],
            answer: 2,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -17, -13, 4, 9."] }
        },
        {
            id: "m7c-mcq-68", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -25 | -11 | -6 | 12. Pick the option that must be true.",
            options: ["-25", "-11", "-6", "12"],
            answer: 3,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "12 is the greatest value."] }
        },
        {
            id: "m7c-mcq-69", topic: "integers-place-value",
            q: "What is the opposite of -16?",
            options: ["16", "-16", "0", "-18"],
            answer: 0,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -16 is 16."] }
        },
        {
            id: "m7c-mcq-70", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 20,864? Options: 2,000 | 20,000 | 200 | 20. Select the best answer.",
            options: ["2,000", "20,000", "200", "20"],
            answer: 1,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the ten-thousands place.", "That place is worth 10,000.", "So the digit is worth 20,000."] }
        },
        {
            id: "m7c-mcq-71", topic: "integers-place-value",
            q: "Which inequality is true? Options: -18 < -23 | 20 < 16 | -23 < -18 | 16 < -23. Use the numbers or angles shown to decide.",
            options: ["-18 < -23", "20 < 16", "-23 < -18", "16 < -23"],
            answer: 2,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-23 < -18 is the true statement."] }
        },
        {
            id: "m7c-mcq-72", topic: "integers-place-value",
            q: "Which digit is in the ones place of 86,420? Options: 8 | 6 | 4 | 0. Select the best answer.",
            options: ["8", "6", "4", "0"],
            answer: 3,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the ones place is 0."] }
        },
        {
            id: "m7c-mcq-73", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: -23, -7, -2, 5 | 5, -2, -7, -23 | -7, -23, -2, 5 | -23, -2, -7, 5. Choose the answer that matches the rule.",
            options: ["-23, -7, -2, 5", "5, -2, -7, -23", "-7, -23, -2, 5", "-23, -2, -7, 5"],
            answer: 0,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -23, -7, -2, 5."] }
        },
        {
            id: "m7c-mcq-74", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -7 | 6 | -12 | -3. Choose the answer that matches the rule.",
            options: ["-7", "6", "-12", "-3"],
            answer: 1,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "6 is the greatest value."] }
        },
        {
            id: "m7c-mcq-75", topic: "integers-place-value",
            q: "What is the opposite of -13?",
            options: ["-13", "0", "13", "-15"],
            answer: 2,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -13 is 13."] }
        },
        {
            id: "m7c-mcq-76", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 42,086? Options: 20,000 | 200 | 20 | 2,000. Select the best answer.",
            options: ["20,000", "200", "20", "2,000"],
            answer: 3,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the thousands place.", "That place is worth 1,000.", "So the digit is worth 2,000."] }
        },
        {
            id: "m7c-mcq-77", topic: "integers-place-value",
            q: "Which inequality is true? Options: -21 < -16 | -16 < -21 | 12 < 10 | 10 < -21. Pick the option that must be true.",
            options: ["-21 < -16", "-16 < -21", "12 < 10", "10 < -21"],
            answer: 0,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-21 < -16 is the true statement."] }
        },
        {
            id: "m7c-mcq-78", topic: "integers-place-value",
            q: "Which digit is in the ten-thousands place of 31,975? Options: 1 | 3 | 9 | 7. Select the best answer.",
            options: ["1", "3", "9", "7"],
            answer: 1,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the ten-thousands place is 3."] }
        },
        {
            id: "m7c-mcq-79", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: 18, 0, -1, -29 | -1, -29, 0, 18 | -29, -1, 0, 18 | -29, 0, -1, 18. Compare the choices carefully.",
            options: ["18, 0, -1, -29", "-1, -29, 0, 18", "-29, -1, 0, 18", "-29, 0, -1, 18"],
            answer: 2,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -29, -1, 0, 18."] }
        },
        {
            id: "m7c-mcq-80", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -13 | -12 | -9 | 12. Compare the choices carefully.",
            options: ["-13", "-12", "-9", "12"],
            answer: 3,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "12 is the greatest value."] }
        },
        {
            id: "m7c-mcq-81", topic: "integers-place-value",
            q: "What is the opposite of -10? Options: 10 | -10 | 0 | -12. Select the best answer.",
            options: ["10", "-10", "0", "-12"],
            answer: 0,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -10 is 10."] }
        },
        {
            id: "m7c-mcq-82", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 64,208? Options: 20,000 | 200 | 2,000 | 20. Select the best answer.",
            options: ["20,000", "200", "2,000", "20"],
            answer: 1,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the hundreds place.", "That place is worth 100.", "So the digit is worth 200."] }
        },
        {
            id: "m7c-mcq-83", topic: "integers-place-value",
            q: "Which inequality is true? Options: -14 < -19 | 8 < 4 | -19 < -14 | 4 < -19. Choose the answer that matches the rule.",
            options: ["-14 < -19", "8 < 4", "-19 < -14", "4 < -19"],
            answer: 2,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-19 < -14 is the true statement."] }
        },
        {
            id: "m7c-mcq-84", topic: "integers-place-value",
            q: "Which digit is in the thousands place of 20,864? Options: 2 | 8 | 6 | 0. Select the best answer.",
            options: ["2", "8", "6", "0"],
            answer: 3,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the thousands place is 0."] }
        },
        {
            id: "m7c-mcq-85", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: -13, -5, 2, 14 | 14, 2, -13, -5 | -5, 2, -13, 14 | 2, -13, -5, 14. Reason it out before selecting.",
            options: ["-13, -5, 2, 14", "14, 2, -13, -5", "-5, 2, -13, 14", "2, -13, -5, 14"],
            answer: 0,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -13, -5, 2, 14."] }
        },
        {
            id: "m7c-mcq-86", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -19 | 6 | -14 | -6. Reason it out before selecting.",
            options: ["-19", "6", "-14", "-6"],
            answer: 1,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "6 is the greatest value."] }
        },
        {
            id: "m7c-mcq-87", topic: "integers-place-value",
            q: "What is the opposite of -7? Options: -7 | 0 | 7 | -9. Select the best answer.",
            options: ["-7", "0", "7", "-9"],
            answer: 2,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -7 is 7."] }
        },
        {
            id: "m7c-mcq-88", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 86,420? Options: 20,000 | 2,000 | 200 | 20. Choose the correct option.",
            options: ["20,000", "2,000", "200", "20"],
            answer: 3,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the tens place.", "That place is worth 10.", "So the digit is worth 20."] }
        },
        {
            id: "m7c-mcq-89", topic: "integers-place-value",
            q: "Which inequality is true? Options: -17 < -12 | -12 < -17 | 18 < 16 | 16 < -17. Compare the choices carefully.",
            options: ["-17 < -12", "-12 < -17", "18 < 16", "16 < -17"],
            answer: 0,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-17 < -12 is the true statement."] }
        },
        {
            id: "m7c-mcq-90", topic: "integers-place-value",
            q: "Which digit is in the hundreds place of 42,086? Options: 4 | 0 | 2 | 8. Choose the correct option.",
            options: ["4", "0", "2", "8"],
            answer: 1,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the hundreds place is 0."] }
        },
        {
            id: "m7c-mcq-91", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: 10, 4, -7, -11 | -7, -11, 4, 10 | -11, -7, 4, 10 | -11, 4, -7, 10. Use the relevant number, angle or fraction fact.",
            options: ["10, 4, -7, -11", "-7, -11, 4, 10", "-11, -7, 4, 10", "-11, 4, -7, 10"],
            answer: 2,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -11, -7, 4, 10."] }
        },
        {
            id: "m7c-mcq-92", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -25 | -15 | -3 | 12. Use the relevant number, angle or fraction fact.",
            options: ["-25", "-15", "-3", "12"],
            answer: 3,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "12 is the greatest value."] }
        },
        {
            id: "m7c-mcq-93", topic: "integers-place-value",
            q: "What is the opposite of -4? Options: 4 | -4 | 0 | -6. Select the best answer.",
            options: ["4", "-4", "0", "-6"],
            answer: 0,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -4 is 4."] }
        },
        {
            id: "m7c-mcq-94", topic: "integers-place-value",
            q: "What is the value of the digit 5 in 31,975? Options: 50,000 | 5 | 5,000 | 500. Choose the correct option.",
            options: ["50,000", "5", "5,000", "500"],
            answer: 1,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 5 is in the ones place.", "That place is worth 1.", "So the digit is worth 5."] }
        },
        {
            id: "m7c-mcq-95", topic: "integers-place-value",
            q: "Which inequality is true? Options: -10 < -15 | 14 < 10 | -15 < -10 | 10 < -15. Reason it out before selecting.",
            options: ["-10 < -15", "14 < 10", "-15 < -10", "10 < -15"],
            answer: 2,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-15 < -10 is the true statement."] }
        },
        {
            id: "m7c-mcq-96", topic: "integers-place-value",
            q: "Which digit is in the tens place of 64,208? Options: 6 | 4 | 2 | 0. Choose the correct option.",
            options: ["6", "4", "2", "0"],
            answer: 3,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the tens place is 0."] }
        },
        {
            id: "m7c-mcq-97", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: -17, -2, -1, 6 | 6, -2, -1, -17 | -1, -17, -2, 6 | -2, -1, -17, 6. Pick the choice that is mathematically correct.",
            options: ["-17, -2, -1, 6", "6, -2, -1, -17", "-1, -17, -2, 6", "-2, -1, -17, 6"],
            answer: 0,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -17, -2, -1, 6."] }
        },
        {
            id: "m7c-mcq-98", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -7 | 6 | -16 | -9. Pick the choice that is mathematically correct.",
            options: ["-7", "6", "-16", "-9"],
            answer: 1,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "6 is the greatest value."] }
        },
        {
            id: "m7c-mcq-99", topic: "integers-place-value",
            q: "What is the opposite of -28? Options: -28 | 0 | 28 | -30. Select the best answer.",
            options: ["-28", "0", "28", "-30"],
            answer: 2,
            explain: "Opposite numbers are the same distance from zero but on different sides of the number line.",
            help: { rule: "Flip the sign to find the opposite.", steps: ["Start with the given integer.", "Move to the matching point on the other side of zero.", "The opposite of -28 is 28."] }
        },
        {
            id: "m7c-mcq-100", topic: "integers-place-value",
            q: "What is the value of the digit 2 in 20,864? Options: 2,000 | 200 | 20 | 20,000. Choose the correct option.",
            options: ["2,000", "200", "20", "20,000"],
            answer: 3,
            explain: "A digit's value depends on its place. Multiply the digit by the value of its place.",
            help: { rule: "Read the place of the digit before giving its value.", steps: ["The digit 2 is in the ten-thousands place.", "That place is worth 10,000.", "So the digit is worth 20,000."] }
        },
        {
            id: "m7c-mcq-101", topic: "integers-place-value",
            q: "Which inequality is true? Options: -13 < -8 | -8 < -13 | 6 < 4 | 4 < -13. Use the relevant number, angle or fraction fact.",
            options: ["-13 < -8", "-8 < -13", "6 < 4", "4 < -13"],
            answer: 0,
            explain: "The correct inequality places the smaller integer on the left of the less-than sign.",
            help: { rule: "Use the number line to compare integers.", steps: ["Check which number is further left.", "A more negative integer is smaller.", "-13 < -8 is the true statement."] }
        },
        {
            id: "m7c-mcq-102", topic: "integers-place-value",
            q: "Which digit is in the ones place of 86,420? Options: 8 | 0 | 6 | 4. Choose the correct option.",
            options: ["8", "0", "6", "4"],
            answer: 1,
            explain: "Read the number from left to right and match each digit to its place.",
            help: { rule: "Place values tell you where each digit belongs.", steps: ["Name the places from left to right.", "Match the requested place to the correct digit.", "The digit in the ones place is 0."] }
        },
        {
            id: "m7c-mcq-103", topic: "integers-place-value",
            q: "Which list is in ascending order? Options: 19, 0, -13, -23 | -13, -23, 0, 19 | -23, -13, 0, 19 | -23, 0, -13, 19. Check that your choice is sensible.",
            options: ["19, 0, -13, -23", "-13, -23, 0, 19", "-23, -13, 0, 19", "-23, 0, -13, 19"],
            answer: 2,
            explain: "Ascending order means smallest to largest. The integers should be read from left to right as they would appear on a number line.",
            help: { rule: "Numbers further left on a number line are smaller.", steps: ["Look for the most negative integer first.", "Move from smaller integers to larger ones.", "The correct order is -23, -13, 0, 19."] }
        },
        {
            id: "m7c-mcq-104", topic: "integers-place-value",
            q: "Which number has the greatest value? Options: -13 | -17 | -6 | 12. Check that your choice is sensible.",
            options: ["-13", "-17", "-6", "12"],
            answer: 3,
            explain: "Compare the signs first. Positive numbers are greater than zero, and zero is greater than any negative number.",
            help: { rule: "Compare signs before comparing size.", steps: ["Look for any positive number or zero.", "If all numbers are negative, choose the one closest to zero.", "12 is the greatest value."] }
        },

        /* ----- Integer operations ----- */
        {
            id: "m7c-mcq-5", topic: "integers-operations",
            q: "Evaluate: -6 + 11",
            options: ["-17", "5", "-5", "17"],
            answer: 1,
            explain: "Adding 11 to -6 moves 11 places right on the number line, landing at 5.",
            help: { rule: "When adding integers with different signs, subtract and keep the sign of the larger absolute value.", steps: ["11 - 6 = 5.", "11 has the larger absolute value and is positive.", "So the answer is 5."] }
        },
        {
            id: "m7c-mcq-6", topic: "integers-operations",
            q: "Evaluate: 7 - (-4)",
            options: ["3", "-3", "11", "-11"],
            answer: 2,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Subtracting a negative turns into addition.", steps: ["7 - (-4) becomes 7 + 4.", "Add the two positive numbers.", "The result is 11."] }
        },
        {
            id: "m7c-mcq-7", topic: "integers-operations",
            q: "Evaluate: (-3) x 8",
            options: ["24", "-24", "5", "-11"],
            answer: 1,
            explain: "A negative multiplied by a positive gives a negative result.",
            help: { rule: "Different signs multiply to a negative.", steps: ["3 x 8 = 24.", "The signs are different.", "So the result is -24."] }
        },
        {
            id: "m7c-mcq-8", topic: "integers-operations",
            q: "Evaluate: -24 / 6",
            options: ["4", "-4", "18", "-18"],
            answer: 1,
            explain: "A negative divided by a positive is negative.",
            help: { rule: "Different signs divide to a negative.", steps: ["24 / 6 = 4.", "The signs are different.", "So the result is -4."] }
        },
        {
            id: "m7c-mcq-105", topic: "integers-operations",
            q: "Evaluate: -4 + 6",
            options: ["2", "-10", "10", "-2"],
            answer: 0,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 4 and 6.", "Find the difference: 6 - 4 = 2.", "The result is 2."] }
        },
        {
            id: "m7c-mcq-106", topic: "integers-operations",
            q: "Evaluate: 7 - (-5)",
            options: ["2", "12", "-12", "-2"],
            answer: 1,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 7 - (-5) as 7 + 5.", "Add the positive integers.", "The result is 12."] }
        },
        {
            id: "m7c-mcq-107", topic: "integers-operations",
            q: "Evaluate: (-6) x -4",
            options: ["-24", "25", "24", "10"],
            answer: 2,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 6 x 4 = 24.", "The signs are the same, so the answer is positive.", "The product is 24."] }
        },
        {
            id: "m7c-mcq-108", topic: "integers-operations",
            q: "Evaluate: 21 / -5",
            options: ["4.2", "6.2", "3.2", "-4.2"],
            answer: 3,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 21 / 5 = 4.2.", "Check the signs of the dividend and divisor.", "So the quotient is -4.2."] }
        },
        {
            id: "m7c-mcq-109", topic: "integers-operations",
            q: "Evaluate: -22 + 13 - 6",
            options: ["-15", "-3", "-41", "29"],
            answer: 0,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -22 + 13 = -9.", "Then subtract 6.", "The result is -15."] }
        },
        {
            id: "m7c-mcq-110", topic: "integers-operations",
            q: "The temperature starts at -19 degrees, rises 4 degrees, then falls 7 degrees. What is the final temperature?",
            options: ["-8 degrees", "-22 degrees", "-30 degrees", "-16 degrees"],
            answer: 1,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -19 degrees.", "Add 4 degrees, then subtract 7 degrees.", "The final temperature is -22 degrees."] }
        },
        {
            id: "m7c-mcq-111", topic: "integers-operations",
            q: "Evaluate: -22 + 18",
            options: ["-40", "40", "-4", "4"],
            answer: 2,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 22 and 18.", "Find the difference: 18 - 22 = 4.", "The result is -4."] }
        },
        {
            id: "m7c-mcq-112", topic: "integers-operations",
            q: "Evaluate: 11 - (-11)",
            options: ["0", "-22", "22 (1)", "22"],
            answer: 3,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 11 - (-11) as 11 + 11.", "Add the positive integers.", "The result is 22."] }
        },
        {
            id: "m7c-mcq-113", topic: "integers-operations",
            q: "Evaluate: (-7) x -7",
            options: ["49", "-49", "50", "14"],
            answer: 0,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 7 x 7 = 49.", "The signs are the same, so the answer is positive.", "The product is 49."] }
        },
        {
            id: "m7c-mcq-114", topic: "integers-operations",
            q: "Evaluate: 15 / -6",
            options: ["2.5", "-2.5", "4.5", "1.5"],
            answer: 1,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 15 / 6 = 2.5.", "Check the signs of the dividend and divisor.", "So the quotient is -2.5."] }
        },
        {
            id: "m7c-mcq-115", topic: "integers-operations",
            q: "Evaluate: -10 + 13 - 5",
            options: ["8", "-28", "-2", "18"],
            answer: 2,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -10 + 13 = 3.", "Then subtract 5.", "The result is -2."] }
        },
        {
            id: "m7c-mcq-116", topic: "integers-operations",
            q: "The temperature starts at -5 degrees, rises 10 degrees, then falls 6 degrees. What is the final temperature?",
            options: ["11 degrees", "-21 degrees", "-9 degrees", "-1 degrees"],
            answer: 3,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -5 degrees.", "Add 10 degrees, then subtract 6 degrees.", "The final temperature is -1 degrees."] }
        },
        {
            id: "m7c-mcq-117", topic: "integers-operations",
            q: "Evaluate: -15 + 12",
            options: ["-3", "-27", "27", "3"],
            answer: 0,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 15 and 12.", "Find the difference: 12 - 15 = 3.", "The result is -3."] }
        },
        {
            id: "m7c-mcq-118", topic: "integers-operations",
            q: "Evaluate: 15 - (-5)",
            options: ["10", "20", "-20", "-10"],
            answer: 1,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 15 - (-5) as 15 + 5.", "Add the positive integers.", "The result is 20."] }
        },
        {
            id: "m7c-mcq-119", topic: "integers-operations",
            q: "Evaluate: (-8) x -10",
            options: ["-80", "81", "80", "18"],
            answer: 2,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 8 x 10 = 80.", "The signs are the same, so the answer is positive.", "The product is 80."] }
        },
        {
            id: "m7c-mcq-120", topic: "integers-operations",
            q: "Evaluate: 21 / -2",
            options: ["10.5", "12.5", "9.5", "-10.5"],
            answer: 3,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 21 / 2 = 10.5.", "Check the signs of the dividend and divisor.", "So the quotient is -10.5."] }
        },
        {
            id: "m7c-mcq-121", topic: "integers-operations",
            q: "Evaluate: -16 + 13 - 4",
            options: ["-7", "1", "-33", "25"],
            answer: 0,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -16 + 13 = -3.", "Then subtract 4.", "The result is -7."] }
        },
        {
            id: "m7c-mcq-122", topic: "integers-operations",
            q: "The temperature starts at -7 degrees, rises 4 degrees, then falls 5 degrees. What is the final temperature?",
            options: ["2 degrees", "-8 degrees", "-16 degrees", "-6 degrees"],
            answer: 1,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -7 degrees.", "Add 4 degrees, then subtract 5 degrees.", "The final temperature is -8 degrees."] }
        },
        {
            id: "m7c-mcq-123", topic: "integers-operations",
            q: "Evaluate: -8 + 6",
            options: ["-14", "14", "-2", "2"],
            answer: 2,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 8 and 6.", "Find the difference: 6 - 8 = 2.", "The result is -2."] }
        },
        {
            id: "m7c-mcq-124", topic: "integers-operations",
            q: "Evaluate: 19 - (-11)",
            options: ["8", "-30", "-8", "30"],
            answer: 3,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 19 - (-11) as 19 + 11.", "Add the positive integers.", "The result is 30."] }
        },
        {
            id: "m7c-mcq-125", topic: "integers-operations",
            q: "Evaluate: (-9) x -4",
            options: ["36", "-36", "37", "13"],
            answer: 0,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 9 x 4 = 36.", "The signs are the same, so the answer is positive.", "The product is 36."] }
        },
        {
            id: "m7c-mcq-126", topic: "integers-operations",
            q: "Evaluate: 15 / -3",
            options: ["5", "-5", "7", "4"],
            answer: 1,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 15 / 3 = 5.", "Check the signs of the dividend and divisor.", "So the quotient is -5."] }
        },
        {
            id: "m7c-mcq-127", topic: "integers-operations",
            q: "Evaluate: -22 + 13 - 3",
            options: ["-6", "-38", "-12", "32"],
            answer: 2,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -22 + 13 = -9.", "Then subtract 3.", "The result is -12."] }
        },
        {
            id: "m7c-mcq-128", topic: "integers-operations",
            q: "The temperature starts at -9 degrees, rises 10 degrees, then falls 4 degrees. What is the final temperature?",
            options: ["5 degrees", "-23 degrees", "-15 degrees", "-3 degrees"],
            answer: 3,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -9 degrees.", "Add 10 degrees, then subtract 4 degrees.", "The final temperature is -3 degrees."] }
        },
        {
            id: "m7c-mcq-129", topic: "integers-operations",
            q: "Evaluate: -26 + 18",
            options: ["-8", "-44", "44", "8"],
            answer: 0,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 26 and 18.", "Find the difference: 18 - 26 = 8.", "The result is -8."] }
        },
        {
            id: "m7c-mcq-130", topic: "integers-operations",
            q: "Evaluate: 3 - (-5)",
            options: ["-2", "8", "-8", "2"],
            answer: 1,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 3 - (-5) as 3 + 5.", "Add the positive integers.", "The result is 8."] }
        },
        {
            id: "m7c-mcq-131", topic: "integers-operations",
            q: "Evaluate: (-10) x -7",
            options: ["-70", "71", "70", "17"],
            answer: 2,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 10 x 7 = 70.", "The signs are the same, so the answer is positive.", "The product is 70."] }
        },
        {
            id: "m7c-mcq-132", topic: "integers-operations",
            q: "Evaluate: 21 / -4",
            options: ["5.25", "7.25", "4.25", "-5.25"],
            answer: 3,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 21 / 4 = 5.25.", "Check the signs of the dividend and divisor.", "So the quotient is -5.25."] }
        },
        {
            id: "m7c-mcq-133", topic: "integers-operations",
            q: "Evaluate: -10 + 13 - 2",
            options: ["1", "5", "-25", "21"],
            answer: 0,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -10 + 13 = 3.", "Then subtract 2.", "The result is 1."] }
        },
        {
            id: "m7c-mcq-134", topic: "integers-operations",
            q: "The temperature starts at -11 degrees, rises 4 degrees, then falls 3 degrees. What is the final temperature?",
            options: ["-4 degrees", "-10 degrees", "-18 degrees", "-12 degrees"],
            answer: 1,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -11 degrees.", "Add 4 degrees, then subtract 3 degrees.", "The final temperature is -10 degrees."] }
        },
        {
            id: "m7c-mcq-135", topic: "integers-operations",
            q: "Evaluate: -19 + 12",
            options: ["-31", "31", "-7", "7"],
            answer: 2,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 19 and 12.", "Find the difference: 12 - 19 = 7.", "The result is -7."] }
        },
        {
            id: "m7c-mcq-136", topic: "integers-operations",
            q: "Evaluate: 7 - (-11)",
            options: ["-4", "-18", "4", "18"],
            answer: 3,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 7 - (-11) as 7 + 11.", "Add the positive integers.", "The result is 18."] }
        },
        {
            id: "m7c-mcq-137", topic: "integers-operations",
            q: "Evaluate: (-11) x -10",
            options: ["110", "-110", "111", "21"],
            answer: 0,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 11 x 10 = 110.", "The signs are the same, so the answer is positive.", "The product is 110."] }
        },
        {
            id: "m7c-mcq-138", topic: "integers-operations",
            q: "Evaluate: 15 / -5",
            options: ["3", "-3", "5", "2"],
            answer: 1,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 15 / 5 = 3.", "Check the signs of the dividend and divisor.", "So the quotient is -3."] }
        },
        {
            id: "m7c-mcq-139", topic: "integers-operations",
            q: "Evaluate: -16 + 13 - 8",
            options: ["5", "-37", "-11", "21"],
            answer: 2,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -16 + 13 = -3.", "Then subtract 8.", "The result is -11."] }
        },
        {
            id: "m7c-mcq-140", topic: "integers-operations",
            q: "The temperature starts at -13 degrees, rises 10 degrees, then falls 2 degrees. What is the final temperature?",
            options: ["-1 degrees", "-25 degrees", "-21 degrees", "-5 degrees"],
            answer: 3,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -13 degrees.", "Add 10 degrees, then subtract 2 degrees.", "The final temperature is -5 degrees."] }
        },
        {
            id: "m7c-mcq-141", topic: "integers-operations",
            q: "Evaluate: -12 + 6",
            options: ["-6", "-18", "18", "6"],
            answer: 0,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 12 and 6.", "Find the difference: 6 - 12 = 6.", "The result is -6."] }
        },
        {
            id: "m7c-mcq-142", topic: "integers-operations",
            q: "Evaluate: 11 - (-5)",
            options: ["6", "16", "-16", "-6"],
            answer: 1,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 11 - (-5) as 11 + 5.", "Add the positive integers.", "The result is 16."] }
        },
        {
            id: "m7c-mcq-143", topic: "integers-operations",
            q: "Evaluate: (-12) x -4",
            options: ["-48", "49", "48", "16"],
            answer: 2,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 12 x 4 = 48.", "The signs are the same, so the answer is positive.", "The product is 48."] }
        },
        {
            id: "m7c-mcq-144", topic: "integers-operations",
            q: "Evaluate: 21 / -6",
            options: ["3.5", "5.5", "2.5", "-3.5"],
            answer: 3,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 21 / 6 = 3.5.", "Check the signs of the dividend and divisor.", "So the quotient is -3.5."] }
        },
        {
            id: "m7c-mcq-145", topic: "integers-operations",
            q: "Evaluate: -22 + 13 - 7",
            options: ["-16", "-2", "-42", "28"],
            answer: 0,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -22 + 13 = -9.", "Then subtract 7.", "The result is -16."] }
        },
        {
            id: "m7c-mcq-146", topic: "integers-operations",
            q: "The temperature starts at -15 degrees, rises 4 degrees, then falls 8 degrees. What is the final temperature?",
            options: ["-3 degrees", "-19 degrees", "-27 degrees", "-11 degrees"],
            answer: 1,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -15 degrees.", "Add 4 degrees, then subtract 8 degrees.", "The final temperature is -19 degrees."] }
        },
        {
            id: "m7c-mcq-147", topic: "integers-operations",
            q: "Evaluate: -5 + 18",
            options: ["-23", "23", "13", "-13"],
            answer: 2,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 5 and 18.", "Find the difference: 18 - 5 = 13.", "The result is 13."] }
        },
        {
            id: "m7c-mcq-148", topic: "integers-operations",
            q: "Evaluate: 15 - (-11)",
            options: ["4", "-26", "-4", "26"],
            answer: 3,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 15 - (-11) as 15 + 11.", "Add the positive integers.", "The result is 26."] }
        },
        {
            id: "m7c-mcq-149", topic: "integers-operations",
            q: "Evaluate: (-2) x -7",
            options: ["14", "-14", "15", "9"],
            answer: 0,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 2 x 7 = 14.", "The signs are the same, so the answer is positive.", "The product is 14."] }
        },
        {
            id: "m7c-mcq-150", topic: "integers-operations",
            q: "Evaluate: 15 / -2",
            options: ["7.5", "-7.5", "9.5", "6.5"],
            answer: 1,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 15 / 2 = 7.5.", "Check the signs of the dividend and divisor.", "So the quotient is -7.5."] }
        },
        {
            id: "m7c-mcq-151", topic: "integers-operations",
            q: "Evaluate: -10 + 13 - 6",
            options: ["9", "-29", "-3", "17"],
            answer: 2,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -10 + 13 = 3.", "Then subtract 6.", "The result is -3."] }
        },
        {
            id: "m7c-mcq-152", topic: "integers-operations",
            q: "The temperature starts at -17 degrees, rises 10 degrees, then falls 7 degrees. What is the final temperature?",
            options: ["0 degrees", "-34 degrees", "-20 degrees", "-14 degrees"],
            answer: 3,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -17 degrees.", "Add 10 degrees, then subtract 7 degrees.", "The final temperature is -14 degrees."] }
        },
        {
            id: "m7c-mcq-153", topic: "integers-operations",
            q: "Evaluate: -23 + 12",
            options: ["-11", "-35", "35", "11"],
            answer: 0,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 23 and 12.", "Find the difference: 12 - 23 = 11.", "The result is -11."] }
        },
        {
            id: "m7c-mcq-154", topic: "integers-operations",
            q: "Evaluate: 19 - (-5)",
            options: ["14", "24", "-24", "-14"],
            answer: 1,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 19 - (-5) as 19 + 5.", "Add the positive integers.", "The result is 24."] }
        },
        {
            id: "m7c-mcq-155", topic: "integers-operations",
            q: "Evaluate: (-3) x -10",
            options: ["-30", "31", "30", "13"],
            answer: 2,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 3 x 10 = 30.", "The signs are the same, so the answer is positive.", "The product is 30."] }
        },
        {
            id: "m7c-mcq-156", topic: "integers-operations",
            q: "Evaluate: 21 / -3",
            options: ["7", "9", "6", "-7"],
            answer: 3,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 21 / 3 = 7.", "Check the signs of the dividend and divisor.", "So the quotient is -7."] }
        },
        {
            id: "m7c-mcq-157", topic: "integers-operations",
            q: "Evaluate: -16 + 13 - 5",
            options: ["-8", "2", "-34", "24"],
            answer: 0,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -16 + 13 = -3.", "Then subtract 5.", "The result is -8."] }
        },
        {
            id: "m7c-mcq-158", topic: "integers-operations",
            q: "The temperature starts at -19 degrees, rises 4 degrees, then falls 6 degrees. What is the final temperature?",
            options: ["-9 degrees", "-21 degrees", "-29 degrees", "-17 degrees"],
            answer: 1,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -19 degrees.", "Add 4 degrees, then subtract 6 degrees.", "The final temperature is -21 degrees."] }
        },
        {
            id: "m7c-mcq-159", topic: "integers-operations",
            q: "Evaluate: -16 + 6",
            options: ["-22", "22", "-10", "10"],
            answer: 2,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 16 and 6.", "Find the difference: 6 - 16 = 10.", "The result is -10."] }
        },
        {
            id: "m7c-mcq-160", topic: "integers-operations",
            q: "Evaluate: 3 - (-11)",
            options: ["-8", "-14", "8", "14"],
            answer: 3,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 3 - (-11) as 3 + 11.", "Add the positive integers.", "The result is 14."] }
        },
        {
            id: "m7c-mcq-161", topic: "integers-operations",
            q: "Evaluate: (-4) x -4",
            options: ["16", "-16", "17", "8"],
            answer: 0,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 4 x 4 = 16.", "The signs are the same, so the answer is positive.", "The product is 16."] }
        },
        {
            id: "m7c-mcq-162", topic: "integers-operations",
            q: "Evaluate: 15 / -4",
            options: ["3.75", "-3.75", "5.75", "2.75"],
            answer: 1,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 15 / 4 = 3.75.", "Check the signs of the dividend and divisor.", "So the quotient is -3.75."] }
        },
        {
            id: "m7c-mcq-163", topic: "integers-operations",
            q: "Evaluate: -22 + 13 - 4",
            options: ["-5", "-39", "-13", "31"],
            answer: 2,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -22 + 13 = -9.", "Then subtract 4.", "The result is -13."] }
        },
        {
            id: "m7c-mcq-164", topic: "integers-operations",
            q: "The temperature starts at -5 degrees, rises 10 degrees, then falls 5 degrees. What is the final temperature?",
            options: ["10 degrees", "-20 degrees", "-10 degrees", "0 degrees"],
            answer: 3,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -5 degrees.", "Add 10 degrees, then subtract 5 degrees.", "The final temperature is 0 degrees."] }
        },
        {
            id: "m7c-mcq-165", topic: "integers-operations",
            q: "Evaluate: -9 + 18",
            options: ["9", "-27", "27", "-9"],
            answer: 0,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 9 and 18.", "Find the difference: 18 - 9 = 9.", "The result is 9."] }
        },
        {
            id: "m7c-mcq-166", topic: "integers-operations",
            q: "Evaluate: 7 - (-5) Options: 2 | 12 | -12 | -2. Select the best answer.",
            options: ["2", "12", "-12", "-2"],
            answer: 1,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 7 - (-5) as 7 + 5.", "Add the positive integers.", "The result is 12."] }
        },
        {
            id: "m7c-mcq-167", topic: "integers-operations",
            q: "Evaluate: (-5) x -7",
            options: ["-35", "36", "35", "12"],
            answer: 2,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 5 x 7 = 35.", "The signs are the same, so the answer is positive.", "The product is 35."] }
        },
        {
            id: "m7c-mcq-168", topic: "integers-operations",
            q: "Evaluate: 21 / -5 Options: 4.2 | 6.2 | 3.2 | -4.2. Select the best answer.",
            options: ["4.2", "6.2", "3.2", "-4.2"],
            answer: 3,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 21 / 5 = 4.2.", "Check the signs of the dividend and divisor.", "So the quotient is -4.2."] }
        },
        {
            id: "m7c-mcq-169", topic: "integers-operations",
            q: "Evaluate: -10 + 13 - 3",
            options: ["0", "6", "-26", "20"],
            answer: 0,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -10 + 13 = 3.", "Then subtract 3.", "The result is 0."] }
        },
        {
            id: "m7c-mcq-170", topic: "integers-operations",
            q: "The temperature starts at -7 degrees, rises 4 degrees, then falls 4 degrees. What is the final temperature?",
            options: ["1 degrees", "-7 degrees", "-15 degrees", "-7 degrees (1)"],
            answer: 1,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -7 degrees.", "Add 4 degrees, then subtract 4 degrees.", "The final temperature is -7 degrees."] }
        },
        {
            id: "m7c-mcq-171", topic: "integers-operations",
            q: "Evaluate: -27 + 12",
            options: ["-39", "39", "-15", "15"],
            answer: 2,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 27 and 12.", "Find the difference: 12 - 27 = 15.", "The result is -15."] }
        },
        {
            id: "m7c-mcq-172", topic: "integers-operations",
            q: "Evaluate: 11 - (-11) Options: 0 | -22 | 22 (1) | 22. Select the best answer.",
            options: ["0", "-22", "22 (1)", "22"],
            answer: 3,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 11 - (-11) as 11 + 11.", "Add the positive integers.", "The result is 22."] }
        },
        {
            id: "m7c-mcq-173", topic: "integers-operations",
            q: "Evaluate: (-6) x -10",
            options: ["60", "-60", "61", "16"],
            answer: 0,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 6 x 10 = 60.", "The signs are the same, so the answer is positive.", "The product is 60."] }
        },
        {
            id: "m7c-mcq-174", topic: "integers-operations",
            q: "Evaluate: 15 / -6 Options: 2.5 | -2.5 | 4.5 | 1.5. Select the best answer.",
            options: ["2.5", "-2.5", "4.5", "1.5"],
            answer: 1,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 15 / 6 = 2.5.", "Check the signs of the dividend and divisor.", "So the quotient is -2.5."] }
        },
        {
            id: "m7c-mcq-175", topic: "integers-operations",
            q: "Evaluate: -16 + 13 - 2",
            options: ["-1", "-31", "-5", "27"],
            answer: 2,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -16 + 13 = -3.", "Then subtract 2.", "The result is -5."] }
        },
        {
            id: "m7c-mcq-176", topic: "integers-operations",
            q: "The temperature starts at -9 degrees, rises 10 degrees, then falls 3 degrees. What is the final temperature?",
            options: ["4 degrees", "-22 degrees", "-16 degrees", "-2 degrees"],
            answer: 3,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -9 degrees.", "Add 10 degrees, then subtract 3 degrees.", "The final temperature is -2 degrees."] }
        },
        {
            id: "m7c-mcq-177", topic: "integers-operations",
            q: "Evaluate: -20 + 6",
            options: ["-14", "-26", "26", "14"],
            answer: 0,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 20 and 6.", "Find the difference: 6 - 20 = 14.", "The result is -14."] }
        },
        {
            id: "m7c-mcq-178", topic: "integers-operations",
            q: "Evaluate: 15 - (-5) Options: 10 | 20 | -20 | -10. Select the best answer.",
            options: ["10", "20", "-20", "-10"],
            answer: 1,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 15 - (-5) as 15 + 5.", "Add the positive integers.", "The result is 20."] }
        },
        {
            id: "m7c-mcq-179", topic: "integers-operations",
            q: "Evaluate: (-7) x -4",
            options: ["-28", "29", "28", "11"],
            answer: 2,
            explain: "Two negative factors multiply to give a positive result.",
            help: { rule: "Same signs give a positive product; different signs give a negative product.", steps: ["Multiply the absolute values: 7 x 4 = 28.", "The signs are the same, so the answer is positive.", "The product is 28."] }
        },
        {
            id: "m7c-mcq-180", topic: "integers-operations",
            q: "Evaluate: 21 / -2 Options: 10.5 | 12.5 | 9.5 | -10.5. Select the best answer.",
            options: ["10.5", "12.5", "9.5", "-10.5"],
            answer: 3,
            explain: "Integers divide to a negative result when the signs are different.",
            help: { rule: "Different signs divide to a negative answer.", steps: ["Divide the absolute values: 21 / 2 = 10.5.", "Check the signs of the dividend and divisor.", "So the quotient is -10.5."] }
        },
        {
            id: "m7c-mcq-181", topic: "integers-operations",
            q: "Evaluate: -22 + 13 - 8",
            options: ["-17", "-1", "-43", "27"],
            answer: 0,
            explain: "Work from left to right because the expression only uses addition and subtraction.",
            help: { rule: "Solve addition and subtraction in order from left to right.", steps: ["First calculate -22 + 13 = -9.", "Then subtract 8.", "The result is -17."] }
        },
        {
            id: "m7c-mcq-182", topic: "integers-operations",
            q: "The temperature starts at -11 degrees, rises 4 degrees, then falls 2 degrees. What is the final temperature?",
            options: ["-5 degrees", "-9 degrees", "-17 degrees", "-13 degrees"],
            answer: 1,
            explain: "Use positive integers for rises and negative integers for falls, then calculate the total change.",
            help: { rule: "Represent increases with positive values and decreases with negative values.", steps: ["Start at -11 degrees.", "Add 4 degrees, then subtract 2 degrees.", "The final temperature is -9 degrees."] }
        },
        {
            id: "m7c-mcq-183", topic: "integers-operations",
            q: "Evaluate: -13 + 18",
            options: ["-31", "31", "5", "-5"],
            answer: 2,
            explain: "When adding integers with different signs, subtract the absolute values and keep the sign of the larger absolute value.",
            help: { rule: "Different signs mean subtract, then keep the stronger sign.", steps: ["Compare 13 and 18.", "Find the difference: 18 - 13 = 5.", "The result is 5."] }
        },
        {
            id: "m7c-mcq-184", topic: "integers-operations",
            q: "Evaluate: 19 - (-11) Options: 8 | -30 | -8 | 30. Select the best answer.",
            options: ["8", "-30", "-8", "30"],
            answer: 3,
            explain: "Subtracting a negative is the same as adding the positive.",
            help: { rule: "Change subtraction of a negative to addition.", steps: ["Rewrite 19 - (-11) as 19 + 11.", "Add the positive integers.", "The result is 30."] }
        },

        /* ----- Basic angle relationships ----- */
        {
            id: "m7c-mcq-9", topic: "angle-basics",
            q: "What is the complement of 35 degrees?",
            options: ["55 degrees", "65 degrees", "145 degrees", "325 degrees"],
            answer: 0,
            explain: "Complementary angles add to 90 degrees, so 90 - 35 = 55.",
            help: { rule: "Complementary angles add to 90 degrees.", steps: ["Start with 90 degrees.", "Subtract the known angle: 90 - 35.", "The complement is 55 degrees."] }
        },
        {
            id: "m7c-mcq-10", topic: "angle-basics",
            q: "An angle supplementary to 128 degrees measures:",
            options: ["52 degrees", "62 degrees", "128 degrees", "308 degrees"],
            answer: 0,
            explain: "Supplementary angles add to 180 degrees, so 180 - 128 = 52.",
            help: { rule: "Supplementary angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract the known angle.", "180 - 128 = 52 degrees."] }
        },
        {
            id: "m7c-mcq-11", topic: "angle-basics",
            q: "Two vertically opposite angles are formed when lines cross. If one is 74 degrees, the vertically opposite angle is:",
            options: ["16 degrees", "74 degrees", "106 degrees", "148 degrees"],
            answer: 1,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Vertically opposite angles are equal.", steps: ["Identify the angle directly opposite the given angle.", "Opposite angles have the same size.", "So the angle is 74 degrees."] }
        },
        {
            id: "m7c-mcq-12", topic: "angle-basics",
            q: "Angles around a point add to:",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: 3,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "Angles around a point make a full turn.", steps: ["A half turn is 180 degrees.", "A full turn is double that.", "So the total is 360 degrees."] }
        },
        {
            id: "m7c-mcq-185", topic: "angle-basics",
            q: "What is the complement of 18 degrees?",
            options: ["72 degrees", "82 degrees", "162 degrees", "342 degrees"],
            answer: 0,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 18 degrees.", "The complement is 72 degrees."] }
        },
        {
            id: "m7c-mcq-186", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures:",
            options: ["86 degrees", "76 degrees", "104 degrees", "256 degrees"],
            answer: 1,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-187", topic: "angle-basics",
            q: "Two lines cross. If one angle is 60 degrees, what is the vertically opposite angle?",
            options: ["120 degrees", "80 degrees", "60 degrees", "300 degrees"],
            answer: 2,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 60 degrees."] }
        },
        {
            id: "m7c-mcq-188", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 180 degrees | 270 degrees | 360 degrees. Select the best answer.",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: 3,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-189", topic: "angle-basics",
            q: "One angle on a straight line is 75 degrees. What is the adjacent angle?",
            options: ["105 degrees", "85 degrees", "75 degrees", "285 degrees"],
            answer: 0,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 75 from 180.", "The adjacent angle is 105 degrees."] }
        },
        {
            id: "m7c-mcq-190", topic: "angle-basics",
            q: "Angles around a point are 90 degrees, 55 degrees, 59 degrees and x. Find x.",
            options: ["176 degrees", "156 degrees", "24 degrees", "86 degrees"],
            answer: 1,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 55 + 59 = 204.", "Subtract from 360 degrees.", "So x = 156 degrees."] }
        },
        {
            id: "m7c-mcq-191", topic: "angle-basics",
            q: "What is the complement of 60 degrees?",
            options: ["40 degrees", "120 degrees", "30 degrees", "300 degrees"],
            answer: 2,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 60 degrees.", "The complement is 30 degrees."] }
        },
        {
            id: "m7c-mcq-192", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 104 degrees | 256 degrees | 76 degrees. Select the best answer.",
            options: ["86 degrees", "104 degrees", "256 degrees", "76 degrees"],
            answer: 3,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-193", topic: "angle-basics",
            q: "Two lines cross. If one angle is 42 degrees, what is the vertically opposite angle?",
            options: ["42 degrees", "138 degrees", "62 degrees", "318 degrees"],
            answer: 0,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 42 degrees."] }
        },
        {
            id: "m7c-mcq-194", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 360 degrees | 180 degrees | 270 degrees. Choose the correct option.",
            options: ["90 degrees", "360 degrees", "180 degrees", "270 degrees"],
            answer: 1,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-195", topic: "angle-basics",
            q: "One angle on a straight line is 42 degrees. What is the adjacent angle?",
            options: ["118 degrees", "42 degrees", "138 degrees", "318 degrees"],
            answer: 2,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 42 from 180.", "The adjacent angle is 138 degrees."] }
        },
        {
            id: "m7c-mcq-196", topic: "angle-basics",
            q: "Angles around a point are 110 degrees, 64 degrees, 59 degrees and x. Find x.",
            options: ["147 degrees", "53 degrees", "115 degrees", "127 degrees"],
            answer: 3,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 110 + 64 + 59 = 233.", "Subtract from 360 degrees.", "So x = 127 degrees."] }
        },
        {
            id: "m7c-mcq-197", topic: "angle-basics",
            q: "What is the complement of 53 degrees?",
            options: ["37 degrees", "47 degrees", "127 degrees", "307 degrees"],
            answer: 0,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 53 degrees.", "The complement is 37 degrees."] }
        },
        {
            id: "m7c-mcq-198", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 76 degrees | 104 degrees | 256 degrees. Choose the correct option.",
            options: ["86 degrees", "76 degrees", "104 degrees", "256 degrees"],
            answer: 1,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-199", topic: "angle-basics",
            q: "Two lines cross. If one angle is 96 degrees, what is the vertically opposite angle?",
            options: ["84 degrees", "116 degrees", "96 degrees", "264 degrees"],
            answer: 2,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 96 degrees."] }
        },
        {
            id: "m7c-mcq-200", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 180 degrees | 270 degrees | 360 degrees. Use the rule that fits this question.",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: 3,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-201", topic: "angle-basics",
            q: "One angle on a straight line is 108 degrees. What is the adjacent angle?",
            options: ["72 degrees", "52 degrees", "108 degrees", "252 degrees"],
            answer: 0,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 108 from 180.", "The adjacent angle is 72 degrees."] }
        },
        {
            id: "m7c-mcq-202", topic: "angle-basics",
            q: "Angles around a point are 90 degrees, 73 degrees, 59 degrees and x. Find x.",
            options: ["158 degrees", "138 degrees", "42 degrees", "104 degrees"],
            answer: 1,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 73 + 59 = 222.", "Subtract from 360 degrees.", "So x = 138 degrees."] }
        },
        {
            id: "m7c-mcq-203", topic: "angle-basics",
            q: "What is the complement of 46 degrees?",
            options: ["54 degrees", "134 degrees", "44 degrees", "314 degrees"],
            answer: 2,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 46 degrees.", "The complement is 44 degrees."] }
        },
        {
            id: "m7c-mcq-204", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 104 degrees | 256 degrees | 76 degrees. Use the rule that fits this question.",
            options: ["86 degrees", "104 degrees", "256 degrees", "76 degrees"],
            answer: 3,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-205", topic: "angle-basics",
            q: "Two lines cross. If one angle is 78 degrees, what is the vertically opposite angle?",
            options: ["78 degrees", "102 degrees", "98 degrees", "282 degrees"],
            answer: 0,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 78 degrees."] }
        },
        {
            id: "m7c-mcq-206", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 360 degrees | 180 degrees | 270 degrees. Check each choice before deciding.",
            options: ["90 degrees", "360 degrees", "180 degrees", "270 degrees"],
            answer: 1,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-207", topic: "angle-basics",
            q: "One angle on a straight line is 75 degrees. What is the adjacent angle? Options: 85 degrees | 75 degrees | 105 degrees | 285 degrees. Select the best answer.",
            options: ["85 degrees", "75 degrees", "105 degrees", "285 degrees"],
            answer: 2,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 75 from 180.", "The adjacent angle is 105 degrees."] }
        },
        {
            id: "m7c-mcq-208", topic: "angle-basics",
            q: "Angles around a point are 110 degrees, 82 degrees, 59 degrees and x. Find x.",
            options: ["129 degrees", "71 degrees", "133 degrees", "109 degrees"],
            answer: 3,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 110 + 82 + 59 = 251.", "Subtract from 360 degrees.", "So x = 109 degrees."] }
        },
        {
            id: "m7c-mcq-209", topic: "angle-basics",
            q: "What is the complement of 39 degrees?",
            options: ["51 degrees", "61 degrees", "141 degrees", "321 degrees"],
            answer: 0,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 39 degrees.", "The complement is 51 degrees."] }
        },
        {
            id: "m7c-mcq-210", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 76 degrees | 104 degrees | 256 degrees. Check each choice before deciding.",
            options: ["86 degrees", "76 degrees", "104 degrees", "256 degrees"],
            answer: 1,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-211", topic: "angle-basics",
            q: "Two lines cross. If one angle is 60 degrees, what is the vertically opposite angle? Options: 120 degrees | 80 degrees | 60 degrees | 300 degrees. Select the best answer.",
            options: ["120 degrees", "80 degrees", "60 degrees", "300 degrees"],
            answer: 2,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 60 degrees."] }
        },
        {
            id: "m7c-mcq-212", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 180 degrees | 270 degrees | 360 degrees. Work it out first, then pick an option.",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: 3,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-213", topic: "angle-basics",
            q: "One angle on a straight line is 42 degrees. What is the adjacent angle? Options: 138 degrees | 118 degrees | 42 degrees | 318 degrees. Select the best answer.",
            options: ["138 degrees", "118 degrees", "42 degrees", "318 degrees"],
            answer: 0,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 42 from 180.", "The adjacent angle is 138 degrees."] }
        },
        {
            id: "m7c-mcq-214", topic: "angle-basics",
            q: "Angles around a point are 90 degrees, 91 degrees, 59 degrees and x. Find x.",
            options: ["140 degrees", "120 degrees", "60 degrees", "122 degrees"],
            answer: 1,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 91 + 59 = 240.", "Subtract from 360 degrees.", "So x = 120 degrees."] }
        },
        {
            id: "m7c-mcq-215", topic: "angle-basics",
            q: "What is the complement of 32 degrees?",
            options: ["68 degrees", "148 degrees", "58 degrees", "328 degrees"],
            answer: 2,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 32 degrees.", "The complement is 58 degrees."] }
        },
        {
            id: "m7c-mcq-216", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 104 degrees | 256 degrees | 76 degrees. Work it out first, then pick an option.",
            options: ["86 degrees", "104 degrees", "256 degrees", "76 degrees"],
            answer: 3,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-217", topic: "angle-basics",
            q: "Two lines cross. If one angle is 42 degrees, what is the vertically opposite angle? Options: 42 degrees | 138 degrees | 62 degrees | 318 degrees. Select the best answer.",
            options: ["42 degrees", "138 degrees", "62 degrees", "318 degrees"],
            answer: 0,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 42 degrees."] }
        },
        {
            id: "m7c-mcq-218", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 360 degrees | 180 degrees | 270 degrees. Think about the key fact involved.",
            options: ["90 degrees", "360 degrees", "180 degrees", "270 degrees"],
            answer: 1,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-219", topic: "angle-basics",
            q: "One angle on a straight line is 108 degrees. What is the adjacent angle? Options: 52 degrees | 108 degrees | 72 degrees | 252 degrees. Select the best answer.",
            options: ["52 degrees", "108 degrees", "72 degrees", "252 degrees"],
            answer: 2,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 108 from 180.", "The adjacent angle is 72 degrees."] }
        },
        {
            id: "m7c-mcq-220", topic: "angle-basics",
            q: "Angles around a point are 110 degrees, 55 degrees, 59 degrees and x. Find x.",
            options: ["156 degrees", "44 degrees", "106 degrees", "136 degrees"],
            answer: 3,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 110 + 55 + 59 = 224.", "Subtract from 360 degrees.", "So x = 136 degrees."] }
        },
        {
            id: "m7c-mcq-221", topic: "angle-basics",
            q: "What is the complement of 25 degrees?",
            options: ["65 degrees", "75 degrees", "155 degrees", "335 degrees"],
            answer: 0,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 25 degrees.", "The complement is 65 degrees."] }
        },
        {
            id: "m7c-mcq-222", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 76 degrees | 104 degrees | 256 degrees. Think about the key fact involved.",
            options: ["86 degrees", "76 degrees", "104 degrees", "256 degrees"],
            answer: 1,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-223", topic: "angle-basics",
            q: "Two lines cross. If one angle is 96 degrees, what is the vertically opposite angle? Options: 84 degrees | 116 degrees | 96 degrees | 264 degrees. Select the best answer.",
            options: ["84 degrees", "116 degrees", "96 degrees", "264 degrees"],
            answer: 2,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 96 degrees."] }
        },
        {
            id: "m7c-mcq-224", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 180 degrees | 270 degrees | 360 degrees. Use the numbers or angles shown to decide.",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: 3,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-225", topic: "angle-basics",
            q: "One angle on a straight line is 75 degrees. What is the adjacent angle? Options: 105 degrees | 85 degrees | 75 degrees | 285 degrees. Choose the correct option.",
            options: ["105 degrees", "85 degrees", "75 degrees", "285 degrees"],
            answer: 0,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 75 from 180.", "The adjacent angle is 105 degrees."] }
        },
        {
            id: "m7c-mcq-226", topic: "angle-basics",
            q: "Angles around a point are 90 degrees, 64 degrees, 59 degrees and x. Find x.",
            options: ["167 degrees", "147 degrees", "33 degrees", "95 degrees"],
            answer: 1,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 64 + 59 = 213.", "Subtract from 360 degrees.", "So x = 147 degrees."] }
        },
        {
            id: "m7c-mcq-227", topic: "angle-basics",
            q: "What is the complement of 18 degrees? Options: 82 degrees | 162 degrees | 72 degrees | 342 degrees. Select the best answer.",
            options: ["82 degrees", "162 degrees", "72 degrees", "342 degrees"],
            answer: 2,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 18 degrees.", "The complement is 72 degrees."] }
        },
        {
            id: "m7c-mcq-228", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 104 degrees | 256 degrees | 76 degrees. Use the numbers or angles shown to decide.",
            options: ["86 degrees", "104 degrees", "256 degrees", "76 degrees"],
            answer: 3,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-229", topic: "angle-basics",
            q: "Two lines cross. If one angle is 78 degrees, what is the vertically opposite angle? Options: 78 degrees | 102 degrees | 98 degrees | 282 degrees. Select the best answer.",
            options: ["78 degrees", "102 degrees", "98 degrees", "282 degrees"],
            answer: 0,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 78 degrees."] }
        },
        {
            id: "m7c-mcq-230", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 360 degrees | 180 degrees | 270 degrees. Pick the option that must be true.",
            options: ["90 degrees", "360 degrees", "180 degrees", "270 degrees"],
            answer: 1,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-231", topic: "angle-basics",
            q: "One angle on a straight line is 42 degrees. What is the adjacent angle? Options: 118 degrees | 42 degrees | 138 degrees | 318 degrees. Choose the correct option.",
            options: ["118 degrees", "42 degrees", "138 degrees", "318 degrees"],
            answer: 2,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 42 from 180.", "The adjacent angle is 138 degrees."] }
        },
        {
            id: "m7c-mcq-232", topic: "angle-basics",
            q: "Angles around a point are 110 degrees, 73 degrees, 59 degrees and x. Find x.",
            options: ["138 degrees", "62 degrees", "124 degrees", "118 degrees"],
            answer: 3,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 110 + 73 + 59 = 242.", "Subtract from 360 degrees.", "So x = 118 degrees."] }
        },
        {
            id: "m7c-mcq-233", topic: "angle-basics",
            q: "What is the complement of 60 degrees? Options: 30 degrees | 40 degrees | 120 degrees | 300 degrees. Select the best answer.",
            options: ["30 degrees", "40 degrees", "120 degrees", "300 degrees"],
            answer: 0,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 60 degrees.", "The complement is 30 degrees."] }
        },
        {
            id: "m7c-mcq-234", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 76 degrees | 104 degrees | 256 degrees. Pick the option that must be true.",
            options: ["86 degrees", "76 degrees", "104 degrees", "256 degrees"],
            answer: 1,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-235", topic: "angle-basics",
            q: "Two lines cross. If one angle is 60 degrees, what is the vertically opposite angle? Options: 120 degrees | 80 degrees | 60 degrees | 300 degrees. Choose the correct option.",
            options: ["120 degrees", "80 degrees", "60 degrees", "300 degrees"],
            answer: 2,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 60 degrees."] }
        },
        {
            id: "m7c-mcq-236", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 180 degrees | 270 degrees | 360 degrees. Choose the answer that matches the rule.",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: 3,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-237", topic: "angle-basics",
            q: "One angle on a straight line is 108 degrees. What is the adjacent angle? Options: 72 degrees | 52 degrees | 108 degrees | 252 degrees. Choose the correct option.",
            options: ["72 degrees", "52 degrees", "108 degrees", "252 degrees"],
            answer: 0,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 108 from 180.", "The adjacent angle is 72 degrees."] }
        },
        {
            id: "m7c-mcq-238", topic: "angle-basics",
            q: "Angles around a point are 90 degrees, 82 degrees, 59 degrees and x. Find x.",
            options: ["149 degrees", "129 degrees", "51 degrees", "113 degrees"],
            answer: 1,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 82 + 59 = 231.", "Subtract from 360 degrees.", "So x = 129 degrees."] }
        },
        {
            id: "m7c-mcq-239", topic: "angle-basics",
            q: "What is the complement of 53 degrees? Options: 47 degrees | 127 degrees | 37 degrees | 307 degrees. Select the best answer.",
            options: ["47 degrees", "127 degrees", "37 degrees", "307 degrees"],
            answer: 2,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 53 degrees.", "The complement is 37 degrees."] }
        },
        {
            id: "m7c-mcq-240", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 104 degrees | 256 degrees | 76 degrees. Choose the answer that matches the rule.",
            options: ["86 degrees", "104 degrees", "256 degrees", "76 degrees"],
            answer: 3,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-241", topic: "angle-basics",
            q: "Two lines cross. If one angle is 42 degrees, what is the vertically opposite angle? Options: 42 degrees | 138 degrees | 62 degrees | 318 degrees. Choose the correct option.",
            options: ["42 degrees", "138 degrees", "62 degrees", "318 degrees"],
            answer: 0,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 42 degrees."] }
        },
        {
            id: "m7c-mcq-242", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 360 degrees | 180 degrees | 270 degrees. Compare the choices carefully.",
            options: ["90 degrees", "360 degrees", "180 degrees", "270 degrees"],
            answer: 1,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-243", topic: "angle-basics",
            q: "One angle on a straight line is 75 degrees. What is the adjacent angle? Options: 85 degrees | 75 degrees | 105 degrees | 285 degrees. Use the rule that fits this question.",
            options: ["85 degrees", "75 degrees", "105 degrees", "285 degrees"],
            answer: 2,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 75 from 180.", "The adjacent angle is 105 degrees."] }
        },
        {
            id: "m7c-mcq-244", topic: "angle-basics",
            q: "Angles around a point are 110 degrees, 91 degrees, 59 degrees and x. Find x.",
            options: ["120 degrees", "80 degrees", "142 degrees", "100 degrees"],
            answer: 3,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 110 + 91 + 59 = 260.", "Subtract from 360 degrees.", "So x = 100 degrees."] }
        },
        {
            id: "m7c-mcq-245", topic: "angle-basics",
            q: "What is the complement of 46 degrees? Options: 44 degrees | 54 degrees | 134 degrees | 314 degrees. Select the best answer.",
            options: ["44 degrees", "54 degrees", "134 degrees", "314 degrees"],
            answer: 0,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 46 degrees.", "The complement is 44 degrees."] }
        },
        {
            id: "m7c-mcq-246", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 76 degrees | 104 degrees | 256 degrees. Compare the choices carefully.",
            options: ["86 degrees", "76 degrees", "104 degrees", "256 degrees"],
            answer: 1,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-247", topic: "angle-basics",
            q: "Two lines cross. If one angle is 96 degrees, what is the vertically opposite angle? Options: 84 degrees | 116 degrees | 96 degrees | 264 degrees. Choose the correct option.",
            options: ["84 degrees", "116 degrees", "96 degrees", "264 degrees"],
            answer: 2,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 96 degrees."] }
        },
        {
            id: "m7c-mcq-248", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 180 degrees | 270 degrees | 360 degrees. Reason it out before selecting.",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: 3,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-249", topic: "angle-basics",
            q: "One angle on a straight line is 42 degrees. What is the adjacent angle? Options: 138 degrees | 118 degrees | 42 degrees | 318 degrees. Use the rule that fits this question.",
            options: ["138 degrees", "118 degrees", "42 degrees", "318 degrees"],
            answer: 0,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 42 from 180.", "The adjacent angle is 138 degrees."] }
        },
        {
            id: "m7c-mcq-250", topic: "angle-basics",
            q: "Angles around a point are 90 degrees, 55 degrees, 59 degrees and x. Find x. Options: 176 degrees | 156 degrees | 24 degrees | 86 degrees. Select the best answer.",
            options: ["176 degrees", "156 degrees", "24 degrees", "86 degrees"],
            answer: 1,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 55 + 59 = 204.", "Subtract from 360 degrees.", "So x = 156 degrees."] }
        },
        {
            id: "m7c-mcq-251", topic: "angle-basics",
            q: "What is the complement of 39 degrees? Options: 61 degrees | 141 degrees | 51 degrees | 321 degrees. Select the best answer.",
            options: ["61 degrees", "141 degrees", "51 degrees", "321 degrees"],
            answer: 2,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 39 degrees.", "The complement is 51 degrees."] }
        },
        {
            id: "m7c-mcq-252", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 104 degrees | 256 degrees | 76 degrees. Reason it out before selecting.",
            options: ["86 degrees", "104 degrees", "256 degrees", "76 degrees"],
            answer: 3,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-253", topic: "angle-basics",
            q: "Two lines cross. If one angle is 78 degrees, what is the vertically opposite angle? Options: 78 degrees | 102 degrees | 98 degrees | 282 degrees. Choose the correct option.",
            options: ["78 degrees", "102 degrees", "98 degrees", "282 degrees"],
            answer: 0,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 78 degrees."] }
        },
        {
            id: "m7c-mcq-254", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 360 degrees | 180 degrees | 270 degrees. Use the relevant number, angle or fraction fact.",
            options: ["90 degrees", "360 degrees", "180 degrees", "270 degrees"],
            answer: 1,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-255", topic: "angle-basics",
            q: "One angle on a straight line is 108 degrees. What is the adjacent angle? Options: 52 degrees | 108 degrees | 72 degrees | 252 degrees. Use the rule that fits this question.",
            options: ["52 degrees", "108 degrees", "72 degrees", "252 degrees"],
            answer: 2,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 108 from 180.", "The adjacent angle is 72 degrees."] }
        },
        {
            id: "m7c-mcq-256", topic: "angle-basics",
            q: "Angles around a point are 110 degrees, 64 degrees, 59 degrees and x. Find x. Options: 147 degrees | 53 degrees | 115 degrees | 127 degrees. Select the best answer.",
            options: ["147 degrees", "53 degrees", "115 degrees", "127 degrees"],
            answer: 3,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 110 + 64 + 59 = 233.", "Subtract from 360 degrees.", "So x = 127 degrees."] }
        },
        {
            id: "m7c-mcq-257", topic: "angle-basics",
            q: "What is the complement of 32 degrees? Options: 58 degrees | 68 degrees | 148 degrees | 328 degrees. Select the best answer.",
            options: ["58 degrees", "68 degrees", "148 degrees", "328 degrees"],
            answer: 0,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 32 degrees.", "The complement is 58 degrees."] }
        },
        {
            id: "m7c-mcq-258", topic: "angle-basics",
            q: "An angle supplementary to 104 degrees measures: 86 degrees | 76 degrees | 104 degrees | 256 degrees. Use the relevant number, angle or fraction fact.",
            options: ["86 degrees", "76 degrees", "104 degrees", "256 degrees"],
            answer: 1,
            explain: "Supplementary angles add to 180 degrees.",
            help: { rule: "Use 180 degrees for supplementary angles.", steps: ["Start with 180 degrees.", "Subtract 104 degrees.", "The supplement is 76 degrees."] }
        },
        {
            id: "m7c-mcq-259", topic: "angle-basics",
            q: "Two lines cross. If one angle is 60 degrees, what is the vertically opposite angle? Options: 120 degrees | 80 degrees | 60 degrees | 300 degrees. Use the rule that fits this question.",
            options: ["120 degrees", "80 degrees", "60 degrees", "300 degrees"],
            answer: 2,
            explain: "Vertically opposite angles are equal.",
            help: { rule: "Angles directly opposite each other are equal.", steps: ["Find the angle opposite the given angle.", "Use the vertically opposite angle rule.", "The angle is 60 degrees."] }
        },
        {
            id: "m7c-mcq-260", topic: "angle-basics",
            q: "Angles around a point add to: 90 degrees | 180 degrees | 270 degrees | 360 degrees. Pick the choice that is mathematically correct.",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            answer: 3,
            explain: "A full turn around a point is 360 degrees.",
            help: { rule: "A complete turn equals 360 degrees.", steps: ["Imagine turning all the way around a point.", "A full turn is made of four right angles.", "So angles around a point add to 360 degrees."] }
        },
        {
            id: "m7c-mcq-261", topic: "angle-basics",
            q: "One angle on a straight line is 75 degrees. What is the adjacent angle? Options: 105 degrees | 85 degrees | 75 degrees | 285 degrees. Check each choice before deciding.",
            options: ["105 degrees", "85 degrees", "75 degrees", "285 degrees"],
            answer: 0,
            explain: "Angles on a straight line add to 180 degrees.",
            help: { rule: "Use 180 degrees for a straight line.", steps: ["Write angle + adjacent angle = 180 degrees.", "Subtract 75 from 180.", "The adjacent angle is 105 degrees."] }
        },
        {
            id: "m7c-mcq-262", topic: "angle-basics",
            q: "Angles around a point are 90 degrees, 73 degrees, 59 degrees and x. Find x. Options: 158 degrees | 138 degrees | 42 degrees | 104 degrees. Select the best answer.",
            options: ["158 degrees", "138 degrees", "42 degrees", "104 degrees"],
            answer: 1,
            explain: "Add the known angles and subtract from 360 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 73 + 59 = 222.", "Subtract from 360 degrees.", "So x = 138 degrees."] }
        },
        {
            id: "m7c-mcq-263", topic: "angle-basics",
            q: "What is the complement of 25 degrees? Options: 75 degrees | 155 degrees | 65 degrees | 335 degrees. Select the best answer.",
            options: ["75 degrees", "155 degrees", "65 degrees", "335 degrees"],
            answer: 2,
            explain: "Complementary angles add to 90 degrees.",
            help: { rule: "Use 90 degrees for complementary angles.", steps: ["Start with 90 degrees.", "Subtract 25 degrees.", "The complement is 65 degrees."] }
        },

        /* ----- Parallel lines & transversals ----- */
        {
            id: "m7c-mcq-13", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are:",
            options: ["always equal", "always supplementary", "always reflex", "always 90 degrees"],
            answer: 0,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "With parallel lines, corresponding angles match.", steps: ["Look for angles in the same relative position.", "Parallel lines keep those positions equal.", "So corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-14", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 118 degrees, the matching corresponding angle is:",
            options: ["62 degrees", "72 degrees", "118 degrees", "180 degrees"],
            answer: 2,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles in parallel lines are equal.", steps: ["Find the angle in the same position.", "Use the parallel-line rule.", "The angle is 118 degrees."] }
        },
        {
            id: "m7c-mcq-15", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 109 degrees, the other is:",
            options: ["71 degrees", "81 degrees", "109 degrees", "289 degrees"],
            answer: 0,
            explain: "Co-interior angles on parallel lines are supplementary, so 180 - 109 = 71.",
            help: { rule: "Co-interior angles on parallel lines add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 109 degrees.", "The other angle is 71 degrees."] }
        },
        {
            id: "m7c-mcq-16", topic: "angle-parallel",
            q: "A straight line is cut by another line. One angle is 63 degrees. The adjacent angle on the straight line is:",
            options: ["27 degrees", "63 degrees", "117 degrees", "243 degrees"],
            answer: 2,
            explain: "Angles on a straight line add to 180 degrees, so 180 - 63 = 117.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract the known angle.", "180 - 63 = 117 degrees."] }
        },
        {
            id: "m7c-mcq-264", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always equal | always supplementary | always reflex | always 90 degrees. Select the best answer.",
            options: ["always equal", "always supplementary", "always reflex", "always 90 degrees"],
            answer: 0,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-265", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 60 degrees, what is the matching corresponding angle?",
            options: ["120 degrees", "60 degrees", "50 degrees", "80 degrees"],
            answer: 1,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 60 degrees."] }
        },
        {
            id: "m7c-mcq-266", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 58 degrees, what is the matching alternate angle?",
            options: ["122 degrees", "76 degrees", "58 degrees", "46 degrees"],
            answer: 2,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 58 degrees."] }
        },
        {
            id: "m7c-mcq-267", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 122 degrees, the other angle is:",
            options: ["122 degrees", "78 degrees", "238 degrees", "58 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 122 degrees.", "The other angle is 58 degrees."] }
        },
        {
            id: "m7c-mcq-268", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern?",
            options: ["109 degrees", "71 degrees", "89 degrees", "91 degrees"],
            answer: 0,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-269", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true?",
            options: ["alternate angles add to 180 degrees", "co-interior angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-270", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always supplementary | always reflex | always equal | always 90 degrees. Choose the correct option.",
            options: ["always supplementary", "always reflex", "always equal", "always 90 degrees"],
            answer: 2,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-271", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 52 degrees, what is the matching corresponding angle?",
            options: ["128 degrees", "42 degrees", "72 degrees", "52 degrees"],
            answer: 3,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 52 degrees."] }
        },
        {
            id: "m7c-mcq-272", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 40 degrees, what is the matching alternate angle?",
            options: ["40 degrees", "140 degrees", "58 degrees", "28 degrees"],
            answer: 0,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 40 degrees."] }
        },
        {
            id: "m7c-mcq-273", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 115 degrees, the other angle is:",
            options: ["115 degrees", "65 degrees", "85 degrees", "245 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 115 degrees.", "The other angle is 65 degrees."] }
        },
        {
            id: "m7c-mcq-274", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 71 degrees | 89 degrees | 109 degrees | 91 degrees. Select the best answer.",
            options: ["71 degrees", "89 degrees", "109 degrees", "91 degrees"],
            answer: 2,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-275", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees | co-interior angles add to 180 degrees. Select the best answer.",
            options: ["alternate angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees", "co-interior angles add to 180 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-276", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always equal | always supplementary | always reflex | always 90 degrees. Use the rule that fits this question.",
            options: ["always equal", "always supplementary", "always reflex", "always 90 degrees"],
            answer: 0,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-277", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 100 degrees, what is the matching corresponding angle?",
            options: ["80 degrees", "100 degrees", "90 degrees", "120 degrees"],
            answer: 1,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 100 degrees."] }
        },
        {
            id: "m7c-mcq-278", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 94 degrees, what is the matching alternate angle?",
            options: ["86 degrees", "112 degrees", "94 degrees", "82 degrees"],
            answer: 2,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 94 degrees."] }
        },
        {
            id: "m7c-mcq-279", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 108 degrees, the other angle is:",
            options: ["108 degrees", "92 degrees", "252 degrees", "72 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 108 degrees.", "The other angle is 72 degrees."] }
        },
        {
            id: "m7c-mcq-280", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 109 degrees | 71 degrees | 89 degrees | 91 degrees. Choose the correct option.",
            options: ["109 degrees", "71 degrees", "89 degrees", "91 degrees"],
            answer: 0,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-281", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | co-interior angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees. Choose the correct option.",
            options: ["alternate angles add to 180 degrees", "co-interior angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-282", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always supplementary | always reflex | always equal | always 90 degrees. Check each choice before deciding.",
            options: ["always supplementary", "always reflex", "always equal", "always 90 degrees"],
            answer: 2,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-283", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 92 degrees, what is the matching corresponding angle?",
            options: ["88 degrees", "82 degrees", "112 degrees", "92 degrees"],
            answer: 3,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 92 degrees."] }
        },
        {
            id: "m7c-mcq-284", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 76 degrees, what is the matching alternate angle?",
            options: ["76 degrees", "104 degrees", "94 degrees", "64 degrees"],
            answer: 0,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 76 degrees."] }
        },
        {
            id: "m7c-mcq-285", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 101 degrees, the other angle is:",
            options: ["101 degrees", "79 degrees", "99 degrees", "259 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 101 degrees.", "The other angle is 79 degrees."] }
        },
        {
            id: "m7c-mcq-286", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 71 degrees | 89 degrees | 109 degrees | 91 degrees. Use the rule that fits this question.",
            options: ["71 degrees", "89 degrees", "109 degrees", "91 degrees"],
            answer: 2,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-287", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees | co-interior angles add to 180 degrees. Use the rule that fits this question.",
            options: ["alternate angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees", "co-interior angles add to 180 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-288", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always equal | always supplementary | always reflex | always 90 degrees. Work it out first, then pick an option.",
            options: ["always equal", "always supplementary", "always reflex", "always 90 degrees"],
            answer: 0,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-289", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 84 degrees, what is the matching corresponding angle?",
            options: ["96 degrees", "84 degrees", "74 degrees", "104 degrees"],
            answer: 1,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 84 degrees."] }
        },
        {
            id: "m7c-mcq-290", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 58 degrees, what is the matching alternate angle? Options: 122 degrees | 76 degrees | 58 degrees | 46 degrees. Select the best answer.",
            options: ["122 degrees", "76 degrees", "58 degrees", "46 degrees"],
            answer: 2,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 58 degrees."] }
        },
        {
            id: "m7c-mcq-291", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 143 degrees, the other angle is:",
            options: ["143 degrees", "57 degrees", "217 degrees", "37 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 143 degrees.", "The other angle is 37 degrees."] }
        },
        {
            id: "m7c-mcq-292", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 109 degrees | 71 degrees | 89 degrees | 91 degrees. Check each choice before deciding.",
            options: ["109 degrees", "71 degrees", "89 degrees", "91 degrees"],
            answer: 0,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-293", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | co-interior angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees. Check each choice before deciding.",
            options: ["alternate angles add to 180 degrees", "co-interior angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-294", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always supplementary | always reflex | always equal | always 90 degrees. Think about the key fact involved.",
            options: ["always supplementary", "always reflex", "always equal", "always 90 degrees"],
            answer: 2,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-295", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 76 degrees, what is the matching corresponding angle?",
            options: ["104 degrees", "66 degrees", "96 degrees", "76 degrees"],
            answer: 3,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 76 degrees."] }
        },
        {
            id: "m7c-mcq-296", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 40 degrees, what is the matching alternate angle? Options: 40 degrees | 140 degrees | 58 degrees | 28 degrees. Select the best answer.",
            options: ["40 degrees", "140 degrees", "58 degrees", "28 degrees"],
            answer: 0,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 40 degrees."] }
        },
        {
            id: "m7c-mcq-297", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 136 degrees, the other angle is:",
            options: ["136 degrees", "44 degrees", "64 degrees", "224 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 136 degrees.", "The other angle is 44 degrees."] }
        },
        {
            id: "m7c-mcq-298", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 71 degrees | 89 degrees | 109 degrees | 91 degrees. Work it out first, then pick an option.",
            options: ["71 degrees", "89 degrees", "109 degrees", "91 degrees"],
            answer: 2,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-299", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees | co-interior angles add to 180 degrees. Work it out first, then pick an option.",
            options: ["alternate angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees", "co-interior angles add to 180 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-300", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always equal | always supplementary | always reflex | always 90 degrees. Use the numbers or angles shown to decide.",
            options: ["always equal", "always supplementary", "always reflex", "always 90 degrees"],
            answer: 0,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-301", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 68 degrees, what is the matching corresponding angle?",
            options: ["112 degrees", "68 degrees", "58 degrees", "88 degrees"],
            answer: 1,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 68 degrees."] }
        },
        {
            id: "m7c-mcq-302", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 94 degrees, what is the matching alternate angle? Options: 86 degrees | 112 degrees | 94 degrees | 82 degrees. Select the best answer.",
            options: ["86 degrees", "112 degrees", "94 degrees", "82 degrees"],
            answer: 2,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 94 degrees."] }
        },
        {
            id: "m7c-mcq-303", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 129 degrees, the other angle is:",
            options: ["129 degrees", "71 degrees", "231 degrees", "51 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 129 degrees.", "The other angle is 51 degrees."] }
        },
        {
            id: "m7c-mcq-304", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 109 degrees | 71 degrees | 89 degrees | 91 degrees. Think about the key fact involved.",
            options: ["109 degrees", "71 degrees", "89 degrees", "91 degrees"],
            answer: 0,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-305", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | co-interior angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees. Think about the key fact involved.",
            options: ["alternate angles add to 180 degrees", "co-interior angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-306", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always supplementary | always reflex | always equal | always 90 degrees. Pick the option that must be true.",
            options: ["always supplementary", "always reflex", "always equal", "always 90 degrees"],
            answer: 2,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-307", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 60 degrees, what is the matching corresponding angle? Options: 120 degrees | 50 degrees | 80 degrees | 60 degrees. Select the best answer.",
            options: ["120 degrees", "50 degrees", "80 degrees", "60 degrees"],
            answer: 3,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 60 degrees."] }
        },
        {
            id: "m7c-mcq-308", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 76 degrees, what is the matching alternate angle? Options: 76 degrees | 104 degrees | 94 degrees | 64 degrees. Select the best answer.",
            options: ["76 degrees", "104 degrees", "94 degrees", "64 degrees"],
            answer: 0,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 76 degrees."] }
        },
        {
            id: "m7c-mcq-309", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 122 degrees, the other angle is: 122 degrees | 58 degrees | 78 degrees | 238 degrees. Select the best answer.",
            options: ["122 degrees", "58 degrees", "78 degrees", "238 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 122 degrees.", "The other angle is 58 degrees."] }
        },
        {
            id: "m7c-mcq-310", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 71 degrees | 89 degrees | 109 degrees | 91 degrees. Use the numbers or angles shown to decide.",
            options: ["71 degrees", "89 degrees", "109 degrees", "91 degrees"],
            answer: 2,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-311", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees | co-interior angles add to 180 degrees. Use the numbers or angles shown to decide.",
            options: ["alternate angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees", "co-interior angles add to 180 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-312", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always equal | always supplementary | always reflex | always 90 degrees. Choose the answer that matches the rule.",
            options: ["always equal", "always supplementary", "always reflex", "always 90 degrees"],
            answer: 0,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-313", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 52 degrees, what is the matching corresponding angle? Options: 128 degrees | 52 degrees | 42 degrees | 72 degrees. Select the best answer.",
            options: ["128 degrees", "52 degrees", "42 degrees", "72 degrees"],
            answer: 1,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 52 degrees."] }
        },
        {
            id: "m7c-mcq-314", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 58 degrees, what is the matching alternate angle? Options: 122 degrees | 76 degrees | 58 degrees | 46 degrees. Choose the correct option.",
            options: ["122 degrees", "76 degrees", "58 degrees", "46 degrees"],
            answer: 2,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 58 degrees."] }
        },
        {
            id: "m7c-mcq-315", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 115 degrees, the other angle is: 115 degrees | 85 degrees | 245 degrees | 65 degrees. Select the best answer.",
            options: ["115 degrees", "85 degrees", "245 degrees", "65 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 115 degrees.", "The other angle is 65 degrees."] }
        },
        {
            id: "m7c-mcq-316", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 109 degrees | 71 degrees | 89 degrees | 91 degrees. Pick the option that must be true.",
            options: ["109 degrees", "71 degrees", "89 degrees", "91 degrees"],
            answer: 0,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-317", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | co-interior angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees. Pick the option that must be true.",
            options: ["alternate angles add to 180 degrees", "co-interior angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-318", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always supplementary | always reflex | always equal | always 90 degrees. Compare the choices carefully.",
            options: ["always supplementary", "always reflex", "always equal", "always 90 degrees"],
            answer: 2,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-319", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 100 degrees, what is the matching corresponding angle? Options: 80 degrees | 90 degrees | 120 degrees | 100 degrees. Select the best answer.",
            options: ["80 degrees", "90 degrees", "120 degrees", "100 degrees"],
            answer: 3,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 100 degrees."] }
        },
        {
            id: "m7c-mcq-320", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 40 degrees, what is the matching alternate angle? Options: 40 degrees | 140 degrees | 58 degrees | 28 degrees. Choose the correct option.",
            options: ["40 degrees", "140 degrees", "58 degrees", "28 degrees"],
            answer: 0,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 40 degrees."] }
        },
        {
            id: "m7c-mcq-321", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 108 degrees, the other angle is: 108 degrees | 72 degrees | 92 degrees | 252 degrees. Select the best answer.",
            options: ["108 degrees", "72 degrees", "92 degrees", "252 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 108 degrees.", "The other angle is 72 degrees."] }
        },
        {
            id: "m7c-mcq-322", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 71 degrees | 89 degrees | 109 degrees | 91 degrees. Choose the answer that matches the rule.",
            options: ["71 degrees", "89 degrees", "109 degrees", "91 degrees"],
            answer: 2,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-323", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees | co-interior angles add to 180 degrees. Choose the answer that matches the rule.",
            options: ["alternate angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees", "co-interior angles add to 180 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-324", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always equal | always supplementary | always reflex | always 90 degrees. Reason it out before selecting.",
            options: ["always equal", "always supplementary", "always reflex", "always 90 degrees"],
            answer: 0,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-325", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 92 degrees, what is the matching corresponding angle? Options: 88 degrees | 92 degrees | 82 degrees | 112 degrees. Select the best answer.",
            options: ["88 degrees", "92 degrees", "82 degrees", "112 degrees"],
            answer: 1,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 92 degrees."] }
        },
        {
            id: "m7c-mcq-326", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 94 degrees, what is the matching alternate angle? Options: 86 degrees | 112 degrees | 94 degrees | 82 degrees. Choose the correct option.",
            options: ["86 degrees", "112 degrees", "94 degrees", "82 degrees"],
            answer: 2,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 94 degrees."] }
        },
        {
            id: "m7c-mcq-327", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 101 degrees, the other angle is: 101 degrees | 99 degrees | 259 degrees | 79 degrees. Select the best answer.",
            options: ["101 degrees", "99 degrees", "259 degrees", "79 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 101 degrees.", "The other angle is 79 degrees."] }
        },
        {
            id: "m7c-mcq-328", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 109 degrees | 71 degrees | 89 degrees | 91 degrees. Compare the choices carefully.",
            options: ["109 degrees", "71 degrees", "89 degrees", "91 degrees"],
            answer: 0,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-329", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | co-interior angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees. Compare the choices carefully.",
            options: ["alternate angles add to 180 degrees", "co-interior angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-330", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always supplementary | always reflex | always equal | always 90 degrees. Use the relevant number, angle or fraction fact.",
            options: ["always supplementary", "always reflex", "always equal", "always 90 degrees"],
            answer: 2,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-331", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 84 degrees, what is the matching corresponding angle? Options: 96 degrees | 74 degrees | 104 degrees | 84 degrees. Select the best answer.",
            options: ["96 degrees", "74 degrees", "104 degrees", "84 degrees"],
            answer: 3,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 84 degrees."] }
        },
        {
            id: "m7c-mcq-332", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 76 degrees, what is the matching alternate angle? Options: 76 degrees | 104 degrees | 94 degrees | 64 degrees. Choose the correct option.",
            options: ["76 degrees", "104 degrees", "94 degrees", "64 degrees"],
            answer: 0,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 76 degrees."] }
        },
        {
            id: "m7c-mcq-333", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 143 degrees, the other angle is: 143 degrees | 37 degrees | 57 degrees | 217 degrees. Select the best answer.",
            options: ["143 degrees", "37 degrees", "57 degrees", "217 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 143 degrees.", "The other angle is 37 degrees."] }
        },
        {
            id: "m7c-mcq-334", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 71 degrees | 89 degrees | 109 degrees | 91 degrees. Reason it out before selecting.",
            options: ["71 degrees", "89 degrees", "109 degrees", "91 degrees"],
            answer: 2,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-335", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees | co-interior angles add to 180 degrees. Reason it out before selecting.",
            options: ["alternate angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees", "co-interior angles add to 180 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-336", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always equal | always supplementary | always reflex | always 90 degrees. Pick the choice that is mathematically correct.",
            options: ["always equal", "always supplementary", "always reflex", "always 90 degrees"],
            answer: 0,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },
        {
            id: "m7c-mcq-337", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one corresponding angle is 76 degrees, what is the matching corresponding angle? Options: 104 degrees | 76 degrees | 66 degrees | 96 degrees. Select the best answer.",
            options: ["104 degrees", "76 degrees", "66 degrees", "96 degrees"],
            answer: 1,
            explain: "Corresponding angles are equal when lines are parallel.",
            help: { rule: "Corresponding angles match on parallel lines.", steps: ["Locate the angle in the same position.", "Use the parallel-line rule.", "The corresponding angle is 76 degrees."] }
        },
        {
            id: "m7c-mcq-338", topic: "angle-parallel",
            q: "Parallel lines are cut by a transversal. If one alternate angle is 58 degrees, what is the matching alternate angle? Options: 122 degrees | 76 degrees | 58 degrees | 46 degrees. Use the rule that fits this question.",
            options: ["122 degrees", "76 degrees", "58 degrees", "46 degrees"],
            answer: 2,
            explain: "Alternate angles are equal on parallel lines.",
            help: { rule: "Alternate angles on parallel lines are equal.", steps: ["Find the angle on the opposite side of the transversal.", "Stay between the parallel lines.", "The alternate angle is 58 degrees."] }
        },
        {
            id: "m7c-mcq-339", topic: "angle-parallel",
            q: "If co-interior angles on parallel lines add to 180 degrees and one angle is 136 degrees, the other angle is: 136 degrees | 64 degrees | 224 degrees | 44 degrees. Select the best answer.",
            options: ["136 degrees", "64 degrees", "224 degrees", "44 degrees"],
            answer: 3,
            explain: "Co-interior angles on parallel lines are supplementary.",
            help: { rule: "Co-interior angles add to 180 degrees.", steps: ["Start with 180 degrees.", "Subtract 136 degrees.", "The other angle is 44 degrees."] }
        },
        {
            id: "m7c-mcq-340", topic: "angle-parallel",
            q: "Two parallel lines are cut by a transversal. If one acute angle is 71 degrees, what is an obtuse angle in the same pattern? Options: 109 degrees | 71 degrees | 89 degrees | 91 degrees. Use the relevant number, angle or fraction fact.",
            options: ["109 degrees", "71 degrees", "89 degrees", "91 degrees"],
            answer: 0,
            explain: "The obtuse angles are supplementary to the acute angles.",
            help: { rule: "Use 180 degrees to move from an acute angle to its obtuse partner.", steps: ["Identify the acute angle value.", "Calculate 180 - 71.", "So each obtuse angle is 109 degrees."] }
        },
        {
            id: "m7c-mcq-341", topic: "angle-parallel",
            q: "Which statement about parallel lines and a transversal is true? Options: alternate angles add to 180 degrees | co-interior angles add to 180 degrees | corresponding angles are always supplementary | vertical angles on parallel lines add to 360 degrees. Use the relevant number, angle or fraction fact.",
            options: ["alternate angles add to 180 degrees", "co-interior angles add to 180 degrees", "corresponding angles are always supplementary", "vertical angles on parallel lines add to 360 degrees"],
            answer: 1,
            explain: "Co-interior angles on parallel lines are supplementary, while corresponding and alternate angles are equal.",
            help: { rule: "Know which angle pairs are equal and which add to 180 degrees.", steps: ["Corresponding angles are equal.", "Alternate angles are equal.", "Co-interior angles add to 180 degrees."] }
        },
        {
            id: "m7c-mcq-342", topic: "angle-parallel",
            q: "When a transversal crosses parallel lines, corresponding angles are: always supplementary | always reflex | always equal | always 90 degrees. Check that your choice is sensible.",
            options: ["always supplementary", "always reflex", "always equal", "always 90 degrees"],
            answer: 2,
            explain: "Corresponding angles in parallel lines are equal.",
            help: { rule: "Look for angles in the same relative position.", steps: ["Identify the two parallel lines.", "Find the matching positions made by the transversal.", "Corresponding angles are equal."] }
        },

        /* ----- Fractions, decimals & percentages ----- */
        {
            id: "m7c-mcq-17", topic: "fdp-conversions",
            q: "What is 3/4 written as a decimal?",
            options: ["0.34", "0.4", "0.75", "1.25"],
            answer: 2,
            explain: "3 divided by 4 equals 0.75.",
            help: { rule: "A fraction becomes a decimal by dividing numerator by denominator.", steps: ["Divide 3 by 4.", "3 / 4 = 0.75.", "So 3/4 = 0.75."] }
        },
        {
            id: "m7c-mcq-18", topic: "fdp-conversions",
            q: "What is 0.6 written as a percentage?",
            options: ["0.6%", "6%", "60%", "600%"],
            answer: 2,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage: multiply by 100.", steps: ["0.6 x 100 = 60.", "Add the percent sign.", "So the answer is 60%."] }
        },
        {
            id: "m7c-mcq-19", topic: "fdp-conversions",
            q: "Simplify 12/20.",
            options: ["6/10", "3/5", "2/3", "5/3"],
            answer: 1,
            explain: "Divide the numerator and denominator by 4 to get 3/5.",
            help: { rule: "Simplify by dividing top and bottom by the same factor.", steps: ["Both 12 and 20 are divisible by 4.", "12 / 4 = 3 and 20 / 4 = 5.", "So the simplified fraction is 3/5."] }
        },
        {
            id: "m7c-mcq-20", topic: "fdp-conversions",
            q: "Which statement is true?",
            options: ["0.45 is greater than 45%", "0.45 is equal to 45%", "45% is equal to 4.5", "45% is less than 0.04"],
            answer: 1,
            explain: "45% means 45/100, which is 0.45.",
            help: { rule: "Percent means 'out of 100'.", steps: ["45% = 45/100.", "45/100 = 0.45.", "So 0.45 and 45% are equal."] }
        },
        {
            id: "m7c-mcq-343", topic: "fdp-conversions",
            q: "What is 1/4 written as a decimal?",
            options: ["0.25", "0.75", "0.6", "0.125"],
            answer: 0,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 1 by 4.", "The decimal is 0.25.", "So 1/4 = 0.25."] }
        },
        {
            id: "m7c-mcq-344", topic: "fdp-conversions",
            q: "What is 0.6 written as a percentage? Options: 6% | 60% | 600% | 65%. Select the best answer.",
            options: ["6%", "60%", "600%", "65%"],
            answer: 1,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.6 by 100.", "You get 60.", "So the percentage is 60%."] }
        },
        {
            id: "m7c-mcq-345", topic: "fdp-conversions",
            q: "What is 37.5% written as a decimal?",
            options: ["0.00375", "3.75", "0.375", "0.47"],
            answer: 2,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 37.5% as 37.5/100.", "That gives 0.375.", "So the decimal is 0.375."] }
        },
        {
            id: "m7c-mcq-346", topic: "fdp-conversions",
            q: "Simplify 9/24.",
            options: ["4.5/12", "8/3", "9/24", "3/8"],
            answer: 3,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 9 and 24.", "Divide both by 3.", "The simplest form is 3/8."] }
        },
        {
            id: "m7c-mcq-347", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.3 is equal to 30% | 0.3 is equal to 40% | 30% is equal to 1.3 | 3/10 is equal to 0.7. Select the best answer.",
            options: ["0.3 is equal to 30%", "0.3 is equal to 40%", "30% is equal to 1.3", "3/10 is equal to 0.7"],
            answer: 0,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.3 and 30%.", "0.3 is equal to 30% is the true statement."] }
        },
        {
            id: "m7c-mcq-348", topic: "fdp-conversions",
            q: "What is 1/20 written as a percentage?",
            options: ["2.5%", "5%", "25%", "-5%"],
            answer: 1,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 1/20 to 0.05.", "Multiply 0.05 by 100.", "The percentage is 5%."] }
        },
        {
            id: "m7c-mcq-349", topic: "fdp-conversions",
            q: "What is 1/8 written as a decimal?",
            options: ["0.375", "0.1", "0.125", "0.7"],
            answer: 2,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 1 by 8.", "The decimal is 0.125.", "So 1/8 = 0.125."] }
        },
        {
            id: "m7c-mcq-350", topic: "fdp-conversions",
            q: "What is 0.1 written as a percentage?",
            options: ["1%", "100%", "15%", "10%"],
            answer: 3,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.1 by 100.", "You get 10.", "So the percentage is 10%."] }
        },
        {
            id: "m7c-mcq-351", topic: "fdp-conversions",
            q: "What is 90% written as a decimal?",
            options: ["0.9", "0.009000000000000001", "9", "1"],
            answer: 0,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 90% as 90/100.", "That gives 0.9.", "So the decimal is 0.9."] }
        },
        {
            id: "m7c-mcq-352", topic: "fdp-conversions",
            q: "Simplify 45/50.",
            options: ["22.5/25", "9/10", "10/9", "45/50"],
            answer: 1,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 45 and 50.", "Divide both by 5.", "The simplest form is 9/10."] }
        },
        {
            id: "m7c-mcq-353", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.45 is equal to 55% | 45% is equal to 1.45 | 0.45 is equal to 45% | 9/20 is equal to 0.65. Choose the correct option.",
            options: ["0.45 is equal to 55%", "45% is equal to 1.45", "0.45 is equal to 45%", "9/20 is equal to 0.65"],
            answer: 2,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.45 and 45%.", "0.45 is equal to 45% is the true statement."] }
        },
        {
            id: "m7c-mcq-354", topic: "fdp-conversions",
            q: "What is 1/25 written as a percentage?",
            options: ["2%", "24%", "-6%", "4%"],
            answer: 3,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 1/25 to 0.04.", "Multiply 0.04 by 100.", "The percentage is 4%."] }
        },
        {
            id: "m7c-mcq-355", topic: "fdp-conversions",
            q: "What is 7/10 written as a decimal?",
            options: ["0.7", "0.9", "0.35", "0.65"],
            answer: 0,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 7 by 10.", "The decimal is 0.7.", "So 7/10 = 0.7."] }
        },
        {
            id: "m7c-mcq-356", topic: "fdp-conversions",
            q: "What is 0.35 written as a percentage?",
            options: ["3.5%", "35%", "350%", "40%"],
            answer: 1,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.35 by 100.", "You get 35.", "So the percentage is 35%."] }
        },
        {
            id: "m7c-mcq-357", topic: "fdp-conversions",
            q: "What is 85% written as a decimal?",
            options: ["0.0085", "8.5", "0.85", "0.95"],
            answer: 2,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 85% as 85/100.", "That gives 0.85.", "So the decimal is 0.85."] }
        },
        {
            id: "m7c-mcq-358", topic: "fdp-conversions",
            q: "Simplify 51/60.",
            options: ["25.5/30", "20/17", "51/60", "17/20"],
            answer: 3,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 51 and 60.", "Divide both by 3.", "The simplest form is 17/20."] }
        },
        {
            id: "m7c-mcq-359", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.44 is equal to 44% | 0.44 is equal to 54% | 44% is equal to 1.44 | 11/25 is equal to 0.68. Use the rule that fits this question.",
            options: ["0.44 is equal to 44%", "0.44 is equal to 54%", "44% is equal to 1.44", "11/25 is equal to 0.68"],
            answer: 0,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.44 and 44%.", "0.44 is equal to 44% is the true statement."] }
        },
        {
            id: "m7c-mcq-360", topic: "fdp-conversions",
            q: "What is 1/4 written as a percentage?",
            options: ["12.5%", "25%", "45%", "15%"],
            answer: 1,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 1/4 to 0.25.", "Multiply 0.25 by 100.", "The percentage is 25%."] }
        },
        {
            id: "m7c-mcq-361", topic: "fdp-conversions",
            q: "What is 13/20 written as a decimal?",
            options: ["0.85", "0.24", "0.65", "0.68"],
            answer: 2,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 13 by 20.", "The decimal is 0.65.", "So 13/20 = 0.65."] }
        },
        {
            id: "m7c-mcq-362", topic: "fdp-conversions",
            q: "What is 0.24 written as a percentage?",
            options: ["2.4%", "240%", "29%", "24%"],
            answer: 3,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.24 by 100.", "You get 24.", "So the percentage is 24%."] }
        },
        {
            id: "m7c-mcq-363", topic: "fdp-conversions",
            q: "What is 50% written as a decimal?",
            options: ["0.5", "0.005", "5", "0.6"],
            answer: 0,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 50% as 50/100.", "That gives 0.5.", "So the decimal is 0.5."] }
        },
        {
            id: "m7c-mcq-364", topic: "fdp-conversions",
            q: "Simplify 5/10.",
            options: ["2.5/5", "1/2", "2/1", "5/10"],
            answer: 1,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 5 and 10.", "Divide both by 5.", "The simplest form is 1/2."] }
        },
        {
            id: "m7c-mcq-365", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.4 is equal to 50% | 40% is equal to 1.4 | 0.4 is equal to 40% | 2/5 is equal to 0.6. Check each choice before deciding.",
            options: ["0.4 is equal to 50%", "40% is equal to 1.4", "0.4 is equal to 40%", "2/5 is equal to 0.6"],
            answer: 2,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.4 and 40%.", "0.4 is equal to 40% is the true statement."] }
        },
        {
            id: "m7c-mcq-366", topic: "fdp-conversions",
            q: "What is 1/8 written as a percentage?",
            options: ["6.25%", "32.5%", "2.5%", "12.5%"],
            answer: 3,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 1/8 to 0.125.", "Multiply 0.125 by 100.", "The percentage is 12.5%."] }
        },
        {
            id: "m7c-mcq-367", topic: "fdp-conversions",
            q: "What is 17/25 written as a decimal?",
            options: ["0.68", "0.5", "0.2", "0.6"],
            answer: 0,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 17 by 25.", "The decimal is 0.68.", "So 17/25 = 0.68."] }
        },
        {
            id: "m7c-mcq-368", topic: "fdp-conversions",
            q: "What is 0.2 written as a percentage?",
            options: ["2%", "20%", "200%", "25%"],
            answer: 1,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.2 by 100.", "You get 20.", "So the percentage is 20%."] }
        },
        {
            id: "m7c-mcq-369", topic: "fdp-conversions",
            q: "What is 80% written as a decimal?",
            options: ["0.008", "8", "0.8", "0.9"],
            answer: 2,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 80% as 80/100.", "That gives 0.8.", "So the decimal is 0.8."] }
        },
        {
            id: "m7c-mcq-370", topic: "fdp-conversions",
            q: "Simplify 12/15.",
            options: ["6/7.5", "5/4", "12/15", "4/5"],
            answer: 3,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 12 and 15.", "Divide both by 3.", "The simplest form is 4/5."] }
        },
        {
            id: "m7c-mcq-371", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.875 is equal to 87.5% | 0.875 is equal to 97.5% | 87.5% is equal to 1.875 | 7/8 is equal to 0.1. Work it out first, then pick an option.",
            options: ["0.875 is equal to 87.5%", "0.875 is equal to 97.5%", "87.5% is equal to 1.875", "7/8 is equal to 0.1"],
            answer: 0,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.875 and 87.5%.", "0.875 is equal to 87.5% is the true statement."] }
        },
        {
            id: "m7c-mcq-372", topic: "fdp-conversions",
            q: "What is 7/10 written as a percentage?",
            options: ["35%", "70%", "90%", "60%"],
            answer: 1,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 7/10 to 0.7.", "Multiply 0.7 by 100.", "The percentage is 70%."] }
        },
        {
            id: "m7c-mcq-373", topic: "fdp-conversions",
            q: "What is 3/5 written as a decimal?",
            options: ["0.8", "0.625", "0.6", "0.1"],
            answer: 2,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 3 by 5.", "The decimal is 0.6.", "So 3/5 = 0.6."] }
        },
        {
            id: "m7c-mcq-374", topic: "fdp-conversions",
            q: "What is 0.625 written as a percentage?",
            options: ["6.25%", "625%", "67.5%", "62.5%"],
            answer: 3,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.625 by 100.", "You get 62.5.", "So the percentage is 62.5%."] }
        },
        {
            id: "m7c-mcq-375", topic: "fdp-conversions",
            q: "What is 30% written as a decimal?",
            options: ["0.3", "0.003", "3", "0.4"],
            answer: 0,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 30% as 30/100.", "That gives 0.3.", "So the decimal is 0.3."] }
        },
        {
            id: "m7c-mcq-376", topic: "fdp-conversions",
            q: "Simplify 15/50.",
            options: ["7.5/25", "3/10", "10/3", "15/50"],
            answer: 1,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 15 and 50.", "Divide both by 5.", "The simplest form is 3/10."] }
        },
        {
            id: "m7c-mcq-377", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.15 is equal to 25% | 15% is equal to 1.15 | 0.15 is equal to 15% | 3/20 is equal to 0.35. Think about the key fact involved.",
            options: ["0.15 is equal to 25%", "15% is equal to 1.15", "0.15 is equal to 15%", "3/20 is equal to 0.35"],
            answer: 2,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.15 and 15%.", "0.15 is equal to 15% is the true statement."] }
        },
        {
            id: "m7c-mcq-378", topic: "fdp-conversions",
            q: "What is 13/20 written as a percentage?",
            options: ["32.5%", "85%", "55%", "65%"],
            answer: 3,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 13/20 to 0.65.", "Multiply 0.65 by 100.", "The percentage is 65%."] }
        },
        {
            id: "m7c-mcq-379", topic: "fdp-conversions",
            q: "What is 1/10 written as a decimal?",
            options: ["0.1", "0.3", "0.05", "0.35"],
            answer: 0,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 1 by 10.", "The decimal is 0.1.", "So 1/10 = 0.1."] }
        },
        {
            id: "m7c-mcq-380", topic: "fdp-conversions",
            q: "What is 0.05 written as a percentage?",
            options: ["0.5%", "5%", "50%", "10%"],
            answer: 1,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.05 by 100.", "You get 5.", "So the percentage is 5%."] }
        },
        {
            id: "m7c-mcq-381", topic: "fdp-conversions",
            q: "What is 45% written as a decimal?",
            options: ["0.0045000000000000005", "4.5", "0.45", "0.55"],
            answer: 2,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 45% as 45/100.", "That gives 0.45.", "So the decimal is 0.45."] }
        },
        {
            id: "m7c-mcq-382", topic: "fdp-conversions",
            q: "Simplify 27/60.",
            options: ["13.5/30", "20/9", "27/60", "9/20"],
            answer: 3,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 27 and 60.", "Divide both by 3.", "The simplest form is 9/20."] }
        },
        {
            id: "m7c-mcq-383", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.12 is equal to 12% | 0.12 is equal to 22% | 12% is equal to 1.12 | 3/25 is equal to 0.24. Use the numbers or angles shown to decide.",
            options: ["0.12 is equal to 12%", "0.12 is equal to 22%", "12% is equal to 1.12", "3/25 is equal to 0.24"],
            answer: 0,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.12 and 12%.", "0.12 is equal to 12% is the true statement."] }
        },
        {
            id: "m7c-mcq-384", topic: "fdp-conversions",
            q: "What is 17/25 written as a percentage?",
            options: ["34%", "68%", "88%", "58%"],
            answer: 1,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 17/25 to 0.68.", "Multiply 0.68 by 100.", "The percentage is 68%."] }
        },
        {
            id: "m7c-mcq-385", topic: "fdp-conversions",
            q: "What is 7/20 written as a decimal?",
            options: ["0.45", "0.04", "0.35", "0.24"],
            answer: 2,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 7 by 20.", "The decimal is 0.35.", "So 7/20 = 0.35."] }
        },
        {
            id: "m7c-mcq-386", topic: "fdp-conversions",
            q: "What is 0.04 written as a percentage?",
            options: ["0.4%", "40%", "9%", "4%"],
            answer: 3,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.04 by 100.", "You get 4.", "So the percentage is 4%."] }
        },
        {
            id: "m7c-mcq-387", topic: "fdp-conversions",
            q: "What is 44% written as a decimal?",
            options: ["0.44", "0.0044", "4.4", "0.54"],
            answer: 0,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 44% as 44/100.", "That gives 0.44.", "So the decimal is 0.44."] }
        },
        {
            id: "m7c-mcq-388", topic: "fdp-conversions",
            q: "Simplify 55/125.",
            options: ["27.5/62.5", "11/25", "25/11", "55/125"],
            answer: 1,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 55 and 125.", "Divide both by 5.", "The simplest form is 11/25."] }
        },
        {
            id: "m7c-mcq-389", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.75 is equal to 85% | 75% is equal to 1.75 | 0.75 is equal to 75% | 3/4 is equal to 0.2. Pick the option that must be true.",
            options: ["0.75 is equal to 85%", "75% is equal to 1.75", "0.75 is equal to 75%", "3/4 is equal to 0.2"],
            answer: 2,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.75 and 75%.", "0.75 is equal to 75% is the true statement."] }
        },
        {
            id: "m7c-mcq-390", topic: "fdp-conversions",
            q: "What is 3/5 written as a percentage?",
            options: ["30%", "80%", "50%", "60%"],
            answer: 3,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 3/5 to 0.6.", "Multiply 0.6 by 100.", "The percentage is 60%."] }
        },
        {
            id: "m7c-mcq-391", topic: "fdp-conversions",
            q: "What is 6/25 written as a decimal?",
            options: ["0.24", "0.44", "0.25", "0.2"],
            answer: 0,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 6 by 25.", "The decimal is 0.24.", "So 6/25 = 0.24."] }
        },
        {
            id: "m7c-mcq-392", topic: "fdp-conversions",
            q: "What is 0.25 written as a percentage?",
            options: ["2.5%", "25%", "250%", "30%"],
            answer: 1,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.25 by 100.", "You get 25.", "So the percentage is 25%."] }
        },
        {
            id: "m7c-mcq-393", topic: "fdp-conversions",
            q: "What is 40% written as a decimal?",
            options: ["0.004", "4", "0.4", "0.5"],
            answer: 2,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 40% as 40/100.", "That gives 0.4.", "So the decimal is 0.4."] }
        },
        {
            id: "m7c-mcq-394", topic: "fdp-conversions",
            q: "Simplify 6/15.",
            options: ["3/7.5", "5/2", "6/15", "2/5"],
            answer: 3,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 6 and 15.", "Divide both by 3.", "The simplest form is 2/5."] }
        },
        {
            id: "m7c-mcq-395", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.375 is equal to 37.5% | 0.375 is equal to 47.5% | 37.5% is equal to 1.375 | 3/8 is equal to 0.625. Choose the answer that matches the rule.",
            options: ["0.375 is equal to 37.5%", "0.375 is equal to 47.5%", "37.5% is equal to 1.375", "3/8 is equal to 0.625"],
            answer: 0,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.375 and 37.5%.", "0.375 is equal to 37.5% is the true statement."] }
        },
        {
            id: "m7c-mcq-396", topic: "fdp-conversions",
            q: "What is 1/10 written as a percentage?",
            options: ["5%", "10%", "30%", "0%"],
            answer: 1,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 1/10 to 0.1.", "Multiply 0.1 by 100.", "The percentage is 10%."] }
        },
        {
            id: "m7c-mcq-397", topic: "fdp-conversions",
            q: "What is 1/5 written as a decimal?",
            options: ["0.4", "0.125", "0.2", "0.625"],
            answer: 2,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 1 by 5.", "The decimal is 0.2.", "So 1/5 = 0.2."] }
        },
        {
            id: "m7c-mcq-398", topic: "fdp-conversions",
            q: "What is 0.125 written as a percentage?",
            options: ["1.25%", "125%", "17.5%", "12.5%"],
            answer: 3,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.125 by 100.", "You get 12.5.", "So the percentage is 12.5%."] }
        },
        {
            id: "m7c-mcq-399", topic: "fdp-conversions",
            q: "What is 87.5% written as a decimal?",
            options: ["0.875", "0.00875", "8.75", "0.97"],
            answer: 0,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 87.5% as 87.5/100.", "That gives 0.875.", "So the decimal is 0.875."] }
        },
        {
            id: "m7c-mcq-400", topic: "fdp-conversions",
            q: "Simplify 35/40.",
            options: ["17.5/20", "7/8", "8/7", "35/40"],
            answer: 1,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 35 and 40.", "Divide both by 5.", "The simplest form is 7/8."] }
        },
        {
            id: "m7c-mcq-401", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.9 is equal to 100% | 90% is equal to 1.9 | 0.9 is equal to 90% | 9/10 is equal to 0.05. Compare the choices carefully.",
            options: ["0.9 is equal to 100%", "90% is equal to 1.9", "0.9 is equal to 90%", "9/10 is equal to 0.05"],
            answer: 2,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.9 and 90%.", "0.9 is equal to 90% is the true statement."] }
        },
        {
            id: "m7c-mcq-402", topic: "fdp-conversions",
            q: "What is 7/20 written as a percentage?",
            options: ["17.5%", "55%", "25%", "35%"],
            answer: 3,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 7/20 to 0.35.", "Multiply 0.35 by 100.", "The percentage is 35%."] }
        },
        {
            id: "m7c-mcq-403", topic: "fdp-conversions",
            q: "What is 5/8 written as a decimal?",
            options: ["0.625", "0.875", "0.7", "0.05"],
            answer: 0,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 5 by 8.", "The decimal is 0.625.", "So 5/8 = 0.625."] }
        },
        {
            id: "m7c-mcq-404", topic: "fdp-conversions",
            q: "What is 0.7 written as a percentage?",
            options: ["7%", "70%", "700%", "75%"],
            answer: 1,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.7 by 100.", "You get 70.", "So the percentage is 70%."] }
        },
        {
            id: "m7c-mcq-405", topic: "fdp-conversions",
            q: "What is 15% written as a decimal?",
            options: ["0.0015", "1.5", "0.15", "0.25"],
            answer: 2,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 15% as 15/100.", "That gives 0.15.", "So the decimal is 0.15."] }
        },
        {
            id: "m7c-mcq-406", topic: "fdp-conversions",
            q: "Simplify 9/60.",
            options: ["4.5/30", "20/3", "9/60", "3/20"],
            answer: 3,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 9 and 60.", "Divide both by 3.", "The simplest form is 3/20."] }
        },
        {
            id: "m7c-mcq-407", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.85 is equal to 85% | 0.85 is equal to 95% | 85% is equal to 1.85 | 17/20 is equal to 0.04. Reason it out before selecting.",
            options: ["0.85 is equal to 85%", "0.85 is equal to 95%", "85% is equal to 1.85", "17/20 is equal to 0.04"],
            answer: 0,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.85 and 85%.", "0.85 is equal to 85% is the true statement."] }
        },
        {
            id: "m7c-mcq-408", topic: "fdp-conversions",
            q: "What is 6/25 written as a percentage?",
            options: ["12%", "24%", "44%", "14%"],
            answer: 1,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 6/25 to 0.24.", "Multiply 0.24 by 100.", "The percentage is 24%."] }
        },
        {
            id: "m7c-mcq-409", topic: "fdp-conversions",
            q: "What is 1/20 written as a decimal?",
            options: ["0.15", "0.65", "0.05", "0.04"],
            answer: 2,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 1 by 20.", "The decimal is 0.05.", "So 1/20 = 0.05."] }
        },
        {
            id: "m7c-mcq-410", topic: "fdp-conversions",
            q: "What is 0.65 written as a percentage?",
            options: ["6.5%", "650%", "70%", "65%"],
            answer: 3,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.65 by 100.", "You get 65.", "So the percentage is 65%."] }
        },
        {
            id: "m7c-mcq-411", topic: "fdp-conversions",
            q: "What is 12% written as a decimal?",
            options: ["0.12", "0.0012", "1.2", "0.22"],
            answer: 0,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 12% as 12/100.", "That gives 0.12.", "So the decimal is 0.12."] }
        },
        {
            id: "m7c-mcq-412", topic: "fdp-conversions",
            q: "Simplify 15/125.",
            options: ["7.5/62.5", "3/25", "25/3", "15/125"],
            answer: 1,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 15 and 125.", "Divide both by 5.", "The simplest form is 3/25."] }
        },
        {
            id: "m7c-mcq-413", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.5 is equal to 60% | 50% is equal to 1.5 | 0.5 is equal to 50% | 1/2 is equal to 0.25. Use the relevant number, angle or fraction fact.",
            options: ["0.5 is equal to 60%", "50% is equal to 1.5", "0.5 is equal to 50%", "1/2 is equal to 0.25"],
            answer: 2,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.5 and 50%.", "0.5 is equal to 50% is the true statement."] }
        },
        {
            id: "m7c-mcq-414", topic: "fdp-conversions",
            q: "What is 1/5 written as a percentage?",
            options: ["10%", "40%", "20% (1)", "20%"],
            answer: 3,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 1/5 to 0.2.", "Multiply 0.2 by 100.", "The percentage is 20%."] }
        },
        {
            id: "m7c-mcq-415", topic: "fdp-conversions",
            q: "What is 1/25 written as a decimal?",
            options: ["0.04", "0.12", "0.68", "0.25"],
            answer: 0,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 1 by 25.", "The decimal is 0.04.", "So 1/25 = 0.04."] }
        },
        {
            id: "m7c-mcq-416", topic: "fdp-conversions",
            q: "What is 0.68 written as a percentage?",
            options: ["6.8%", "68%", "680%", "73%"],
            answer: 1,
            explain: "Multiply a decimal by 100 to convert it to a percentage.",
            help: { rule: "Decimal to percentage means multiply by 100.", steps: ["Multiply 0.68 by 100.", "You get 68.", "So the percentage is 68%."] }
        },
        {
            id: "m7c-mcq-417", topic: "fdp-conversions",
            q: "What is 75% written as a decimal?",
            options: ["0.0075", "7.5", "0.75", "0.85"],
            answer: 2,
            explain: "To convert a percentage to a decimal, divide by 100.",
            help: { rule: "Percentage to decimal means divide by 100.", steps: ["Write 75% as 75/100.", "That gives 0.75.", "So the decimal is 0.75."] }
        },
        {
            id: "m7c-mcq-418", topic: "fdp-conversions",
            q: "Simplify 9/12.",
            options: ["4.5/6", "4/3", "9/12", "3/4"],
            answer: 3,
            explain: "Simplify by dividing the numerator and denominator by the same common factor.",
            help: { rule: "Divide the top and bottom by the greatest common factor.", steps: ["Find a common factor of 9 and 12.", "Divide both by 3.", "The simplest form is 3/4."] }
        },
        {
            id: "m7c-mcq-419", topic: "fdp-conversions",
            q: "Which statement is true? Options: 0.8 is equal to 80% | 0.8 is equal to 90% | 80% is equal to 1.8 | 4/5 is equal to 0.125. Pick the choice that is mathematically correct.",
            options: ["0.8 is equal to 80%", "0.8 is equal to 90%", "80% is equal to 1.8", "4/5 is equal to 0.125"],
            answer: 0,
            explain: "Equivalent fractions, decimals and percentages represent the same part of a whole.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Change the percentage to a decimal or the decimal to a percentage.", "Check which statement matches 0.8 and 80%.", "0.8 is equal to 80% is the true statement."] }
        },
        {
            id: "m7c-mcq-420", topic: "fdp-conversions",
            q: "What is 5/8 written as a percentage?",
            options: ["31.25%", "62.5%", "82.5%", "52.5%"],
            answer: 1,
            explain: "Convert the fraction to a decimal, then multiply by 100 to get a percentage.",
            help: { rule: "Fraction to percentage can be done through a decimal.", steps: ["Convert 5/8 to 0.625.", "Multiply 0.625 by 100.", "The percentage is 62.5%."] }
        },
        {
            id: "m7c-mcq-421", topic: "fdp-conversions",
            q: "What is 1/4 written as a decimal? Options: 0.75 | 0.6 | 0.25 | 0.125. Select the best answer.",
            options: ["0.75", "0.6", "0.25", "0.125"],
            answer: 2,
            explain: "Divide the numerator by the denominator to convert a fraction to a decimal.",
            help: { rule: "Fraction to decimal means numerator divided by denominator.", steps: ["Divide 1 by 4.", "The decimal is 0.25.", "So 1/4 = 0.25."] }
        },

        /* ----- Operating with fractions, decimals & percentages ----- */
        {
            id: "m7c-mcq-21", topic: "fdp-operations",
            q: "Evaluate: 1/3 + 1/6",
            options: ["2/9", "1/2", "2/6", "1/9"],
            answer: 1,
            explain: "Use a common denominator of 6: 1/3 = 2/6, so 2/6 + 1/6 = 3/6 = 1/2.",
            help: { rule: "Find a common denominator before adding fractions.", steps: ["Convert 1/3 to 2/6.", "Add 2/6 + 1/6 = 3/6.", "Simplify 3/6 to 1/2."] }
        },
        {
            id: "m7c-mcq-22", topic: "fdp-operations",
            q: "Evaluate: 3.5 - 1.27",
            options: ["2.23", "2.33", "1.87", "4.77"],
            answer: 0,
            explain: "Line up the decimal points and subtract: 3.50 - 1.27 = 2.23.",
            help: { rule: "Line up decimal points when adding or subtracting decimals.", steps: ["Write 3.50 - 1.27.", "Subtract hundredths, tenths, then ones.", "The answer is 2.23."] }
        },
        {
            id: "m7c-mcq-23", topic: "fdp-operations",
            q: "What is 25% of 80?",
            options: ["20", "25", "32", "60"],
            answer: 0,
            explain: "25% is one quarter, and one quarter of 80 is 20.",
            help: { rule: "A percentage of an amount means the fraction of that amount.", steps: ["25% = 1/4.", "Find 1/4 of 80.", "80 / 4 = 20."] }
        },
        {
            id: "m7c-mcq-24", topic: "fdp-operations",
            q: "Which value is largest?",
            options: ["0.7", "2/3", "68%", "0.65"],
            answer: 0,
            explain: "0.7 = 70%, 2/3 is about 66.7%, 68% = 0.68 and 0.65 = 65%.",
            help: { rule: "Convert values to the same form before comparing.", steps: ["0.7 = 70%.", "2/3 is about 66.7%.", "68% = 0.68 and 0.65 = 65%.", "So 0.7 is the largest."] }
        },
        {
            id: "m7c-mcq-422", topic: "fdp-operations",
            q: "Evaluate: 1/4 + 1/4",
            options: ["1/2", "2/6", "3/4", "1/4"],
            answer: 0,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-mcq-423", topic: "fdp-operations",
            q: "Evaluate: 3.1 - 2.27",
            options: ["5.37", "0.83", "-0.83", "0.93"],
            answer: 1,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 3.1 and 2.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 0.83."] }
        },
        {
            id: "m7c-mcq-424", topic: "fdp-operations",
            q: "What is 25% of 120?",
            options: ["35", "40", "30", "90"],
            answer: 2,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 25% to a decimal or fraction.", "Multiply by 120.", "The answer is 30."] }
        },
        {
            id: "m7c-mcq-425", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.4 | 1/8 | 87.5% | 7/10. Select the best answer.",
            options: ["0.4", "1/8", "87.5%", "7/10"],
            answer: 2,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "87.5% is the largest value."] }
        },
        {
            id: "m7c-mcq-426", topic: "fdp-operations",
            q: "What is 1/2 of 20?",
            options: ["10", "12", "10 (1)", "10 (2)"],
            answer: 0,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 20 by 2.", "Multiply by 1.", "The result is 10."] }
        },
        {
            id: "m7c-mcq-427", topic: "fdp-operations",
            q: "A price of $36 is reduced by 10%. What is the sale price?",
            options: ["39.6", "32.4", "3.6", "38.4"],
            answer: 1,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 10% of $36.", "Subtract the discount from $36.", "The sale price is $32.4."] }
        },
        {
            id: "m7c-mcq-428", topic: "fdp-operations",
            q: "Evaluate: 1/8 + 1/8",
            options: ["2/10", "3/8", "1/4", "1/8"],
            answer: 2,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 8.", "Simplify to 1/4."] }
        },
        {
            id: "m7c-mcq-429", topic: "fdp-operations",
            q: "Evaluate: 2.1 - 4.27",
            options: ["6.37", "2.17", "-2.07", "-2.17"],
            answer: 3,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 2.1 and 4.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is -2.17."] }
        },
        {
            id: "m7c-mcq-430", topic: "fdp-operations",
            q: "What is 40% of 140?",
            options: ["56", "61", "66", "84"],
            answer: 0,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 40% to a decimal or fraction.", "Multiply by 140.", "The answer is 56."] }
        },
        {
            id: "m7c-mcq-431", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.875 | 7/10 | 15% | 13/20. Choose the correct option.",
            options: ["0.875", "7/10", "15%", "13/20"],
            answer: 0,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "0.875 is the largest value."] }
        },
        {
            id: "m7c-mcq-432", topic: "fdp-operations",
            q: "What is 2/5 of 50?",
            options: ["10", "25", "20", "30"],
            answer: 2,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 50 by 5.", "Multiply by 2.", "The result is 20."] }
        },
        {
            id: "m7c-mcq-433", topic: "fdp-operations",
            q: "A price of $48 is reduced by 20%. What is the sale price?",
            options: ["57.6", "9.6", "44.4", "38.4"],
            answer: 3,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 20% of $48.", "Subtract the discount from $48.", "The sale price is $38.4."] }
        },
        {
            id: "m7c-mcq-434", topic: "fdp-operations",
            q: "Evaluate: 1/4 + 1/4 Options: 1/2 | 2/6 | 3/4 | 1/4. Select the best answer.",
            options: ["1/2", "2/6", "3/4", "1/4"],
            answer: 0,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-mcq-435", topic: "fdp-operations",
            q: "Evaluate: 8.1 - 1.27",
            options: ["9.37", "6.83", "-6.83", "6.93"],
            answer: 1,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 8.1 and 1.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 6.83."] }
        },
        {
            id: "m7c-mcq-436", topic: "fdp-operations",
            q: "What is 50% of 200?",
            options: ["105", "110", "100", "100 (1)"],
            answer: 2,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 50% to a decimal or fraction.", "Multiply by 200.", "The answer is 100."] }
        },
        {
            id: "m7c-mcq-437", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.15 | 13/20 | 12% | 17/25. Use the rule that fits this question.",
            options: ["0.15", "13/20", "12%", "17/25"],
            answer: 3,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "17/25 is the largest value."] }
        },
        {
            id: "m7c-mcq-438", topic: "fdp-operations",
            q: "What is 1/2 of 20? Options: 10 | 12 | 10 (1) | 10 (2). Select the best answer.",
            options: ["10", "12", "10 (1)", "10 (2)"],
            answer: 0,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 20 by 2.", "Multiply by 1.", "The result is 10."] }
        },
        {
            id: "m7c-mcq-439", topic: "fdp-operations",
            q: "A price of $60 is reduced by 25%. What is the sale price?",
            options: ["75", "45", "15", "51"],
            answer: 1,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 25% of $60.", "Subtract the discount from $60.", "The sale price is $45."] }
        },
        {
            id: "m7c-mcq-440", topic: "fdp-operations",
            q: "Evaluate: 1/8 + 1/8 Options: 2/10 | 3/8 | 1/4 | 1/8. Select the best answer.",
            options: ["2/10", "3/8", "1/4", "1/8"],
            answer: 2,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 8.", "Simplify to 1/4."] }
        },
        {
            id: "m7c-mcq-441", topic: "fdp-operations",
            q: "Evaluate: 7.1 - 3.27",
            options: ["10.37", "-3.83", "3.93", "3.83"],
            answer: 3,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 7.1 and 3.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 3.83."] }
        },
        {
            id: "m7c-mcq-442", topic: "fdp-operations",
            q: "What is 10% of 60?",
            options: ["6", "11", "16", "54"],
            answer: 0,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 10% to a decimal or fraction.", "Multiply by 60.", "The answer is 6."] }
        },
        {
            id: "m7c-mcq-443", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.12 | 17/25 | 75% | 3/5. Check each choice before deciding.",
            options: ["0.12", "17/25", "75%", "3/5"],
            answer: 2,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "75% is the largest value."] }
        },
        {
            id: "m7c-mcq-444", topic: "fdp-operations",
            q: "What is 2/5 of 50? Options: 10 | 25 | 20 | 30. Select the best answer.",
            options: ["10", "25", "20", "30"],
            answer: 2,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 50 by 5.", "Multiply by 2.", "The result is 20."] }
        },
        {
            id: "m7c-mcq-445", topic: "fdp-operations",
            q: "A price of $72 is reduced by 30%. What is the sale price?",
            options: ["93.6", "21.6", "56.4", "50.4"],
            answer: 3,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 30% of $72.", "Subtract the discount from $72.", "The sale price is $50.4."] }
        },
        {
            id: "m7c-mcq-446", topic: "fdp-operations",
            q: "Evaluate: 1/4 + 1/4 Options: 1/2 | 2/6 | 3/4 | 1/4. Choose the correct option.",
            options: ["1/2", "2/6", "3/4", "1/4"],
            answer: 0,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-mcq-447", topic: "fdp-operations",
            q: "Evaluate: 6.1 - 0.27",
            options: ["6.37", "5.83", "-5.83", "5.93"],
            answer: 1,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 6.1 and 0.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 5.83."] }
        },
        {
            id: "m7c-mcq-448", topic: "fdp-operations",
            q: "What is 20% of 80?",
            options: ["21", "26", "16", "64"],
            answer: 2,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 20% to a decimal or fraction.", "Multiply by 80.", "The answer is 16."] }
        },
        {
            id: "m7c-mcq-449", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.75 | 3/5 | 37.5% | 1/10. Work it out first, then pick an option.",
            options: ["0.75", "3/5", "37.5%", "1/10"],
            answer: 0,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "0.75 is the largest value."] }
        },
        {
            id: "m7c-mcq-450", topic: "fdp-operations",
            q: "What is 1/2 of 20? Options: 10 | 12 | 10 (1) | 10 (2). Choose the correct option.",
            options: ["10", "12", "10 (1)", "10 (2)"],
            answer: 0,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 20 by 2.", "Multiply by 1.", "The result is 10."] }
        },
        {
            id: "m7c-mcq-451", topic: "fdp-operations",
            q: "A price of $84 is reduced by 40%. What is the sale price?",
            options: ["117.6", "50.4", "33.6", "56.4"],
            answer: 1,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 40% of $84.", "Subtract the discount from $84.", "The sale price is $50.4."] }
        },
        {
            id: "m7c-mcq-452", topic: "fdp-operations",
            q: "Evaluate: 1/8 + 1/8 Options: 2/10 | 3/8 | 1/4 | 1/8. Choose the correct option.",
            options: ["2/10", "3/8", "1/4", "1/8"],
            answer: 2,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 8.", "Simplify to 1/4."] }
        },
        {
            id: "m7c-mcq-453", topic: "fdp-operations",
            q: "Evaluate: 5.1 - 2.27",
            options: ["7.37", "-2.83", "2.93", "2.83"],
            answer: 3,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 5.1 and 2.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 2.83."] }
        },
        {
            id: "m7c-mcq-454", topic: "fdp-operations",
            q: "What is 25% of 120? Options: 30 | 35 | 40 | 90. Select the best answer.",
            options: ["30", "35", "40", "90"],
            answer: 0,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 25% to a decimal or fraction.", "Multiply by 120.", "The answer is 30."] }
        },
        {
            id: "m7c-mcq-455", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.375 | 1/10 | 90% | 7/20. Think about the key fact involved.",
            options: ["0.375", "1/10", "90%", "7/20"],
            answer: 2,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "90% is the largest value."] }
        },
        {
            id: "m7c-mcq-456", topic: "fdp-operations",
            q: "What is 2/5 of 50? Options: 10 | 25 | 20 | 30. Choose the correct option.",
            options: ["10", "25", "20", "30"],
            answer: 2,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 50 by 5.", "Multiply by 2.", "The result is 20."] }
        },
        {
            id: "m7c-mcq-457", topic: "fdp-operations",
            q: "A price of $36 is reduced by 10%. What is the sale price? Options: 39.6 | 3.6 | 38.4 | 32.4. Select the best answer.",
            options: ["39.6", "3.6", "38.4", "32.4"],
            answer: 3,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 10% of $36.", "Subtract the discount from $36.", "The sale price is $32.4."] }
        },
        {
            id: "m7c-mcq-458", topic: "fdp-operations",
            q: "Evaluate: 1/4 + 1/4 Options: 1/2 | 2/6 | 3/4 | 1/4. Use the rule that fits this question.",
            options: ["1/2", "2/6", "3/4", "1/4"],
            answer: 0,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-mcq-459", topic: "fdp-operations",
            q: "Evaluate: 4.1 - 4.27",
            options: ["8.37", "-0.17", "0.17", "-0.07"],
            answer: 1,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 4.1 and 4.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is -0.17."] }
        },
        {
            id: "m7c-mcq-460", topic: "fdp-operations",
            q: "What is 40% of 140? Options: 61 | 66 | 56 | 84. Select the best answer.",
            options: ["61", "66", "56", "84"],
            answer: 2,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 40% to a decimal or fraction.", "Multiply by 140.", "The answer is 56."] }
        },
        {
            id: "m7c-mcq-461", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.9 | 7/20 | 85% | 6/25. Use the numbers or angles shown to decide.",
            options: ["0.9", "7/20", "85%", "6/25"],
            answer: 0,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "0.9 is the largest value."] }
        },
        {
            id: "m7c-mcq-462", topic: "fdp-operations",
            q: "What is 1/2 of 20? Options: 10 | 12 | 10 (1) | 10 (2). Use the rule that fits this question.",
            options: ["10", "12", "10 (1)", "10 (2)"],
            answer: 0,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 20 by 2.", "Multiply by 1.", "The result is 10."] }
        },
        {
            id: "m7c-mcq-463", topic: "fdp-operations",
            q: "A price of $48 is reduced by 20%. What is the sale price? Options: 57.6 | 38.4 | 9.6 | 44.4. Select the best answer.",
            options: ["57.6", "38.4", "9.6", "44.4"],
            answer: 1,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 20% of $48.", "Subtract the discount from $48.", "The sale price is $38.4."] }
        },
        {
            id: "m7c-mcq-464", topic: "fdp-operations",
            q: "Evaluate: 1/8 + 1/8 Options: 2/10 | 3/8 | 1/4 | 1/8. Use the rule that fits this question.",
            options: ["2/10", "3/8", "1/4", "1/8"],
            answer: 2,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 8.", "Simplify to 1/4."] }
        },
        {
            id: "m7c-mcq-465", topic: "fdp-operations",
            q: "Evaluate: 3.1 - 1.27",
            options: ["4.37", "-1.83", "1.93", "1.83"],
            answer: 3,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 3.1 and 1.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 1.83."] }
        },
        {
            id: "m7c-mcq-466", topic: "fdp-operations",
            q: "What is 50% of 200? Options: 100 | 105 | 110 | 100 (1). Select the best answer.",
            options: ["100", "105", "110", "100 (1)"],
            answer: 0,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 50% to a decimal or fraction.", "Multiply by 200.", "The answer is 100."] }
        },
        {
            id: "m7c-mcq-467", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.85 | 6/25 | 50% | 1/5. Pick the option that must be true.",
            options: ["0.85", "6/25", "50%", "1/5"],
            answer: 0,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "0.85 is the largest value."] }
        },
        {
            id: "m7c-mcq-468", topic: "fdp-operations",
            q: "What is 2/5 of 50? Options: 10 | 25 | 20 | 30. Use the rule that fits this question.",
            options: ["10", "25", "20", "30"],
            answer: 2,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 50 by 5.", "Multiply by 2.", "The result is 20."] }
        },
        {
            id: "m7c-mcq-469", topic: "fdp-operations",
            q: "A price of $60 is reduced by 25%. What is the sale price? Options: 75 | 15 | 51 | 45. Select the best answer.",
            options: ["75", "15", "51", "45"],
            answer: 3,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 25% of $60.", "Subtract the discount from $60.", "The sale price is $45."] }
        },
        {
            id: "m7c-mcq-470", topic: "fdp-operations",
            q: "Evaluate: 1/4 + 1/4 Options: 1/2 | 2/6 | 3/4 | 1/4. Check each choice before deciding.",
            options: ["1/2", "2/6", "3/4", "1/4"],
            answer: 0,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-mcq-471", topic: "fdp-operations",
            q: "Evaluate: 2.1 - 3.27",
            options: ["5.37", "-1.17", "1.17", "-1.07"],
            answer: 1,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 2.1 and 3.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is -1.17."] }
        },
        {
            id: "m7c-mcq-472", topic: "fdp-operations",
            q: "What is 10% of 60? Options: 11 | 16 | 6 | 54. Select the best answer.",
            options: ["11", "16", "6", "54"],
            answer: 2,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 10% to a decimal or fraction.", "Multiply by 60.", "The answer is 6."] }
        },
        {
            id: "m7c-mcq-473", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.5 | 1/5 | 80% | 5/8. Choose the answer that matches the rule.",
            options: ["0.5", "1/5", "80%", "5/8"],
            answer: 2,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "80% is the largest value."] }
        },
        {
            id: "m7c-mcq-474", topic: "fdp-operations",
            q: "What is 1/2 of 20? Options: 10 | 12 | 10 (1) | 10 (2). Check each choice before deciding.",
            options: ["10", "12", "10 (1)", "10 (2)"],
            answer: 0,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 20 by 2.", "Multiply by 1.", "The result is 10."] }
        },
        {
            id: "m7c-mcq-475", topic: "fdp-operations",
            q: "A price of $72 is reduced by 30%. What is the sale price? Options: 93.6 | 50.4 | 21.6 | 56.4. Select the best answer.",
            options: ["93.6", "50.4", "21.6", "56.4"],
            answer: 1,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 30% of $72.", "Subtract the discount from $72.", "The sale price is $50.4."] }
        },
        {
            id: "m7c-mcq-476", topic: "fdp-operations",
            q: "Evaluate: 1/8 + 1/8 Options: 2/10 | 3/8 | 1/4 | 1/8. Check each choice before deciding.",
            options: ["2/10", "3/8", "1/4", "1/8"],
            answer: 2,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 8.", "Simplify to 1/4."] }
        },
        {
            id: "m7c-mcq-477", topic: "fdp-operations",
            q: "Evaluate: 8.1 - 0.27",
            options: ["8.37", "-7.83", "7.93", "7.83"],
            answer: 3,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 8.1 and 0.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 7.83."] }
        },
        {
            id: "m7c-mcq-478", topic: "fdp-operations",
            q: "What is 20% of 80? Options: 16 | 21 | 26 | 64. Select the best answer.",
            options: ["16", "21", "26", "64"],
            answer: 0,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 20% to a decimal or fraction.", "Multiply by 80.", "The answer is 16."] }
        },
        {
            id: "m7c-mcq-479", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.8 | 5/8 | 30% | 1/20. Compare the choices carefully.",
            options: ["0.8", "5/8", "30%", "1/20"],
            answer: 0,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "0.8 is the largest value."] }
        },
        {
            id: "m7c-mcq-480", topic: "fdp-operations",
            q: "What is 2/5 of 50? Options: 10 | 25 | 20 | 30. Check each choice before deciding.",
            options: ["10", "25", "20", "30"],
            answer: 2,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 50 by 5.", "Multiply by 2.", "The result is 20."] }
        },
        {
            id: "m7c-mcq-481", topic: "fdp-operations",
            q: "A price of $84 is reduced by 40%. What is the sale price? Options: 117.6 | 33.6 | 56.4 | 50.4. Select the best answer.",
            options: ["117.6", "33.6", "56.4", "50.4"],
            answer: 3,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 40% of $84.", "Subtract the discount from $84.", "The sale price is $50.4."] }
        },
        {
            id: "m7c-mcq-482", topic: "fdp-operations",
            q: "Evaluate: 1/4 + 1/4 Options: 1/2 | 2/6 | 3/4 | 1/4. Work it out first, then pick an option.",
            options: ["1/2", "2/6", "3/4", "1/4"],
            answer: 0,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-mcq-483", topic: "fdp-operations",
            q: "Evaluate: 7.1 - 2.27",
            options: ["9.37", "4.83", "-4.83", "4.93"],
            answer: 1,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 7.1 and 2.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 4.83."] }
        },
        {
            id: "m7c-mcq-484", topic: "fdp-operations",
            q: "What is 25% of 120? Options: 35 | 40 | 30 | 90. Choose the correct option.",
            options: ["35", "40", "30", "90"],
            answer: 2,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 25% to a decimal or fraction.", "Multiply by 120.", "The answer is 30."] }
        },
        {
            id: "m7c-mcq-485", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.3 | 1/20 | 45% | 1/25. Reason it out before selecting.",
            options: ["0.3", "1/20", "45%", "1/25"],
            answer: 2,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "45% is the largest value."] }
        },
        {
            id: "m7c-mcq-486", topic: "fdp-operations",
            q: "What is 1/2 of 20? Options: 10 | 12 | 10 (1) | 10 (2). Work it out first, then pick an option.",
            options: ["10", "12", "10 (1)", "10 (2)"],
            answer: 0,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 20 by 2.", "Multiply by 1.", "The result is 10."] }
        },
        {
            id: "m7c-mcq-487", topic: "fdp-operations",
            q: "A price of $36 is reduced by 10%. What is the sale price? Options: 39.6 | 32.4 | 3.6 | 38.4. Choose the correct option.",
            options: ["39.6", "32.4", "3.6", "38.4"],
            answer: 1,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 10% of $36.", "Subtract the discount from $36.", "The sale price is $32.4."] }
        },
        {
            id: "m7c-mcq-488", topic: "fdp-operations",
            q: "Evaluate: 1/8 + 1/8 Options: 2/10 | 3/8 | 1/4 | 1/8. Work it out first, then pick an option.",
            options: ["2/10", "3/8", "1/4", "1/8"],
            answer: 2,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 8.", "Simplify to 1/4."] }
        },
        {
            id: "m7c-mcq-489", topic: "fdp-operations",
            q: "Evaluate: 6.1 - 4.27",
            options: ["10.37", "-1.83", "1.93", "1.83"],
            answer: 3,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 6.1 and 4.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 1.83."] }
        },
        {
            id: "m7c-mcq-490", topic: "fdp-operations",
            q: "What is 40% of 140? Options: 56 | 61 | 66 | 84. Choose the correct option.",
            options: ["56", "61", "66", "84"],
            answer: 0,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 40% to a decimal or fraction.", "Multiply by 140.", "The answer is 56."] }
        },
        {
            id: "m7c-mcq-491", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.45 | 1/25 | 44% | 1/4. Use the relevant number, angle or fraction fact.",
            options: ["0.45", "1/25", "44%", "1/4"],
            answer: 0,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "0.45 is the largest value."] }
        },
        {
            id: "m7c-mcq-492", topic: "fdp-operations",
            q: "What is 2/5 of 50? Options: 10 | 25 | 20 | 30. Work it out first, then pick an option.",
            options: ["10", "25", "20", "30"],
            answer: 2,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 50 by 5.", "Multiply by 2.", "The result is 20."] }
        },
        {
            id: "m7c-mcq-493", topic: "fdp-operations",
            q: "A price of $48 is reduced by 20%. What is the sale price? Options: 57.6 | 9.6 | 44.4 | 38.4. Choose the correct option.",
            options: ["57.6", "9.6", "44.4", "38.4"],
            answer: 3,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 20% of $48.", "Subtract the discount from $48.", "The sale price is $38.4."] }
        },
        {
            id: "m7c-mcq-494", topic: "fdp-operations",
            q: "Evaluate: 1/4 + 1/4 Options: 1/2 | 2/6 | 3/4 | 1/4. Think about the key fact involved.",
            options: ["1/2", "2/6", "3/4", "1/4"],
            answer: 0,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-mcq-495", topic: "fdp-operations",
            q: "Evaluate: 5.1 - 1.27",
            options: ["6.37", "3.83", "-3.83", "3.93"],
            answer: 1,
            explain: "Line up the decimal points before subtracting.",
            help: { rule: "Decimals must be aligned by place value.", steps: ["Write 5.1 and 1.27 with aligned decimal points.", "Subtract hundredths, tenths and ones in order.", "The answer is 3.83."] }
        },
        {
            id: "m7c-mcq-496", topic: "fdp-operations",
            q: "What is 50% of 200? Options: 105 | 110 | 100 | 100 (1). Choose the correct option.",
            options: ["105", "110", "100", "100 (1)"],
            answer: 2,
            explain: "Find the fraction or decimal form of the percentage, then multiply by the total.",
            help: { rule: "A percentage of an amount means that fraction of the whole.", steps: ["Convert 50% to a decimal or fraction.", "Multiply by 200.", "The answer is 100."] }
        },
        {
            id: "m7c-mcq-497", topic: "fdp-operations",
            q: "Which value is largest? Options: 0.44 | 1/4 | 40% | 1/8. Pick the choice that is mathematically correct.",
            options: ["0.44", "1/4", "40%", "1/8"],
            answer: 0,
            explain: "Convert each value to the same form before comparing.",
            help: { rule: "Fractions, decimals and percentages must be converted to a common form to compare them fairly.", steps: ["Change each option to a decimal or percentage.", "Compare the values after conversion.", "0.44 is the largest value."] }
        },
        {
            id: "m7c-mcq-498", topic: "fdp-operations",
            q: "What is 1/2 of 20? Options: 10 | 12 | 10 (1) | 10 (2). Think about the key fact involved.",
            options: ["10", "12", "10 (1)", "10 (2)"],
            answer: 0,
            explain: "Find one part first if helpful, then multiply by the numerator.",
            help: { rule: "A fraction of an amount means divide by the denominator, then multiply by the numerator.", steps: ["Divide 20 by 2.", "Multiply by 1.", "The result is 10."] }
        },
        {
            id: "m7c-mcq-499", topic: "fdp-operations",
            q: "A price of $60 is reduced by 25%. What is the sale price? Options: 75 | 45 | 15 | 51. Choose the correct option.",
            options: ["75", "45", "15", "51"],
            answer: 1,
            explain: "Find the discount first, then subtract it from the original price.",
            help: { rule: "Percentage discount means subtract that percentage of the original amount.", steps: ["Find 25% of $60.", "Subtract the discount from $60.", "The sale price is $45."] }
        },
        {
            id: "m7c-mcq-500", topic: "fdp-operations",
            q: "Evaluate: 1/8 + 1/8 Options: 2/10 | 3/8 | 1/4 | 1/8. Think about the key fact involved.",
            options: ["2/10", "3/8", "1/4", "1/8"],
            answer: 2,
            explain: "Add the numerators because the denominators are the same, then simplify if needed.",
            help: { rule: "Fractions with the same denominator can be added directly.", steps: ["Add the numerators: 1 + 1 = 2.", "Keep the denominator 8.", "Simplify to 1/4."] }
        }
    ],

    short: [
        {
            id: "m7c-sa-1", topic: "integers-place-value", marks: 3,
            q: "Order these integers from smallest to largest: -5, 3, -1, 0, 8.",
            sample: "-5, -1, 0, 3, 8.",
            help: { rule: "Use a number line order from left to right.", steps: ["Negative numbers come before zero.", "Among negatives, the one with greater magnitude is smaller.", "Ordered list: -5, -1, 0, 3, 8."] }
        },
        {
            id: "m7c-sa-3", topic: "integers-place-value", marks: 4,
            q: "Explain why subtracting a negative number gives the same result as adding the positive number. Use 6 - (-3) as your example.",
            sample: "Subtracting a negative means removing a debt or moving in the positive direction on a number line. So 6 - (-3) is the same as 6 + 3, which equals 9.",
            help: { rule: "Subtracting a negative changes to addition.", steps: ["Start with 6 - (-3).", "Rewrite as 6 + 3.", "Explain that removing a negative increases the value, so the answer is 9."] }
        },
        {
            id: "m7c-sa-13", topic: "integers-place-value", marks: 3,
            q: "Order these integers from smallest to largest: -6, -1, 2, 6, 5.",
            sample: "In order from smallest to largest: -6, -1, 2, 5, 6.",
            help: { rule: "Read integers from left to right on the number line.", steps: ["Place the most negative integer first.", "Move toward zero and then positive values.", "The ordered list is -6, -1, 2, 5, 6."] }
        },
        {
            id: "m7c-sa-14", topic: "integers-place-value", marks: 3,
            q: "Which integer is greatest: -9, -5, 6, -2? Explain briefly.",
            sample: "6 is the greatest because it is furthest to the right on the number line.",
            help: { rule: "Compare signs first, then compare size.", steps: ["Any positive number is greater than zero.", "Zero is greater than any negative number.", "6 is the greatest integer."] }
        },
        {
            id: "m7c-sa-15", topic: "integers-place-value", marks: 4,
            q: "Find the opposite of -11. Then state whether the opposite is greater or smaller than the original number.",
            sample: "The opposite of -11 is 11. It is greater than -11 because it is on the other side of zero on the number line.",
            help: { rule: "Opposites have the same distance from zero but opposite signs.", steps: ["Change the sign to find the opposite.", "Compare the original integer and its opposite on the number line.", "11 is the opposite of -11."] }
        },
        {
            id: "m7c-sa-16", topic: "integers-place-value", marks: 4,
            q: "In 86,420, what is the value of the digit 2? Explain using place value.",
            sample: "The digit 2 is in the tens place, so its value is 20.",
            help: { rule: "A digit's value depends on its place.", steps: ["Identify the place of the digit.", "The tens place is worth 10.", "So the digit 2 has value 20."] }
        },
        {
            id: "m7c-sa-17", topic: "integers-place-value", marks: 4,
            q: "Explain the role of the 0 in 64,028.",
            sample: "The 0 is a placeholder in the hundreds place. It shows there are no hundreds in the number, while the other digits keep their correct place values.",
            help: { rule: "A zero can act as a placeholder in a whole number.", steps: ["Find where the 0 sits in the number.", "Name that position as the hundreds place.", "Explain that the 0 keeps the other digits in the correct places."] }
        },
        {
            id: "m7c-sa-18", topic: "integers-place-value", marks: 3,
            q: "Order these integers from smallest to largest: -11, -9, 0, 9, 12.",
            sample: "In order from smallest to largest: -11, -9, 0, 9, 12.",
            help: { rule: "Read integers from left to right on the number line.", steps: ["Place the most negative integer first.", "Move toward zero and then positive values.", "The ordered list is -11, -9, 0, 9, 12."] }
        },
        {
            id: "m7c-sa-19", topic: "integers-place-value", marks: 3,
            q: "Which integer is greatest: -14, -9, 0, -4? Explain briefly.",
            sample: "0 is the greatest because it is furthest to the right on the number line.",
            help: { rule: "Compare signs first, then compare size.", steps: ["Any positive number is greater than zero.", "Zero is greater than any negative number.", "0 is the greatest integer."] }
        },
        {
            id: "m7c-sa-20", topic: "integers-place-value", marks: 4,
            q: "Find the opposite of 12. Then state whether the opposite is greater or smaller than the original number.",
            sample: "The opposite of 12 is -12. It is smaller than 12 because it is on the other side of zero on the number line.",
            help: { rule: "Opposites have the same distance from zero but opposite signs.", steps: ["Change the sign to find the opposite.", "Compare the original integer and its opposite on the number line.", "-12 is the opposite of 12."] }
        },
        {
            id: "m7c-sa-21", topic: "integers-place-value", marks: 4,
            q: "In 31,975, what is the value of the digit 7? Explain using place value.",
            sample: "The digit 7 is in the tens place, so its value is 70.",
            help: { rule: "A digit's value depends on its place.", steps: ["Identify the place of the digit.", "The tens place is worth 10.", "So the digit 7 has value 70."] }
        },
        {
            id: "m7c-sa-22", topic: "integers-place-value", marks: 4,
            q: "Explain the role of the 0 in 10,975.",
            sample: "The 0 is a placeholder in the thousands place. It shows there are no thousands in the number, while the other digits keep their correct place values.",
            help: { rule: "A zero can act as a placeholder in a whole number.", steps: ["Find where the 0 sits in the number.", "Name that position as the thousands place.", "Explain that the 0 keeps the other digits in the correct places."] }
        },
        {
            id: "m7c-sa-23", topic: "integers-place-value", marks: 3,
            q: "Order these integers from smallest to largest: -16, -5, 1, 3, 19.",
            sample: "In order from smallest to largest: -16, -5, 1, 3, 19.",
            help: { rule: "Read integers from left to right on the number line.", steps: ["Place the most negative integer first.", "Move toward zero and then positive values.", "The ordered list is -16, -5, 1, 3, 19."] }
        },
        {
            id: "m7c-sa-24", topic: "integers-place-value", marks: 3,
            q: "Which integer is greatest: -19, -2, 2, -3? Explain briefly.",
            sample: "2 is the greatest because it is furthest to the right on the number line.",
            help: { rule: "Compare signs first, then compare size.", steps: ["Any positive number is greater than zero.", "Zero is greater than any negative number.", "2 is the greatest integer."] }
        },
        {
            id: "m7c-sa-25", topic: "integers-place-value", marks: 4,
            q: "Find the opposite of -13. Then state whether the opposite is greater or smaller than the original number.",
            sample: "The opposite of -13 is 13. It is greater than -13 because it is on the other side of zero on the number line.",
            help: { rule: "Opposites have the same distance from zero but opposite signs.", steps: ["Change the sign to find the opposite.", "Compare the original integer and its opposite on the number line.", "13 is the opposite of -13."] }
        },
        {
            id: "m7c-sa-26", topic: "integers-place-value", marks: 4,
            q: "In 86,420, what is the value of the digit 2? Explain using place value. Show your working.",
            sample: "The digit 2 is in the tens place, so its value is 20.",
            help: { rule: "A digit's value depends on its place.", steps: ["Identify the place of the digit.", "The tens place is worth 10.", "So the digit 2 has value 20."] }
        },
        {
            id: "m7c-sa-27", topic: "integers-place-value", marks: 4,
            q: "Explain the role of the 0 in 64,208.",
            sample: "The 0 is a placeholder in the tens place. It shows there are no tens in the number, while the other digits keep their correct place values.",
            help: { rule: "A zero can act as a placeholder in a whole number.", steps: ["Find where the 0 sits in the number.", "Name that position as the tens place.", "Explain that the 0 keeps the other digits in the correct places."] }
        },
        {
            id: "m7c-sa-28", topic: "integers-place-value", marks: 3,
            q: "Order these integers from smallest to largest: -21, -15, 2, 10, 8.",
            sample: "In order from smallest to largest: -21, -15, 2, 8, 10.",
            help: { rule: "Read integers from left to right on the number line.", steps: ["Place the most negative integer first.", "Move toward zero and then positive values.", "The ordered list is -21, -15, 2, 8, 10."] }
        },
        {
            id: "m7c-sa-29", topic: "integers-place-value", marks: 3,
            q: "Which integer is greatest: -24, -6, 0, -2? Explain briefly.",
            sample: "0 is the greatest because it is furthest to the right on the number line.",
            help: { rule: "Compare signs first, then compare size.", steps: ["Any positive number is greater than zero.", "Zero is greater than any negative number.", "0 is the greatest integer."] }
        },
        {
            id: "m7c-sa-30", topic: "integers-place-value", marks: 4,
            q: "Find the opposite of 14. Then state whether the opposite is greater or smaller than the original number.",
            sample: "The opposite of 14 is -14. It is smaller than 14 because it is on the other side of zero on the number line.",
            help: { rule: "Opposites have the same distance from zero but opposite signs.", steps: ["Change the sign to find the opposite.", "Compare the original integer and its opposite on the number line.", "-14 is the opposite of 14."] }
        },
        {
            id: "m7c-sa-31", topic: "integers-place-value", marks: 4,
            q: "In 31,975, what is the value of the digit 7? Explain using place value. Show your working.",
            sample: "The digit 7 is in the tens place, so its value is 70.",
            help: { rule: "A digit's value depends on its place.", steps: ["Identify the place of the digit.", "The tens place is worth 10.", "So the digit 7 has value 70."] }
        },
        {
            id: "m7c-sa-32", topic: "integers-place-value", marks: 4,
            q: "Explain the role of the 0 in 19,075.",
            sample: "The 0 is a placeholder in the hundreds place. It shows there are no hundreds in the number, while the other digits keep their correct place values.",
            help: { rule: "A zero can act as a placeholder in a whole number.", steps: ["Find where the 0 sits in the number.", "Name that position as the hundreds place.", "Explain that the 0 keeps the other digits in the correct places."] }
        },
        {
            id: "m7c-sa-33", topic: "integers-place-value", marks: 3,
            q: "Order these integers from smallest to largest: -26, -9, 3, 4, 15.",
            sample: "In order from smallest to largest: -26, -9, 3, 4, 15.",
            help: { rule: "Read integers from left to right on the number line.", steps: ["Place the most negative integer first.", "Move toward zero and then positive values.", "The ordered list is -26, -9, 3, 4, 15."] }
        },
        {
            id: "m7c-sa-34", topic: "integers-place-value", marks: 3,
            q: "Which integer is greatest: -11, -10, 7, -1? Explain briefly.",
            sample: "7 is the greatest because it is furthest to the right on the number line.",
            help: { rule: "Compare signs first, then compare size.", steps: ["Any positive number is greater than zero.", "Zero is greater than any negative number.", "7 is the greatest integer."] }
        },
        {
            id: "m7c-sa-35", topic: "integers-place-value", marks: 4,
            q: "Find the opposite of -15. Then state whether the opposite is greater or smaller than the original number.",
            sample: "The opposite of -15 is 15. It is greater than -15 because it is on the other side of zero on the number line.",
            help: { rule: "Opposites have the same distance from zero but opposite signs.", steps: ["Change the sign to find the opposite.", "Compare the original integer and its opposite on the number line.", "15 is the opposite of -15."] }
        },
        {
            id: "m7c-sa-36", topic: "integers-place-value", marks: 4,
            q: "In 86,420, what is the value of the digit 2? Explain using place value. Give the final answer clearly.",
            sample: "The digit 2 is in the tens place, so its value is 20.",
            help: { rule: "A digit's value depends on its place.", steps: ["Identify the place of the digit.", "The tens place is worth 10.", "So the digit 2 has value 20."] }
        },
        {
            id: "m7c-sa-37", topic: "integers-place-value", marks: 4,
            q: "Explain the role of the 0 in 60,428.",
            sample: "The 0 is a placeholder in the thousands place. It shows there are no thousands in the number, while the other digits keep their correct place values.",
            help: { rule: "A zero can act as a placeholder in a whole number.", steps: ["Find where the 0 sits in the number.", "Name that position as the thousands place.", "Explain that the 0 keeps the other digits in the correct places."] }
        },
        {
            id: "m7c-sa-38", topic: "integers-place-value", marks: 3,
            q: "Order these integers from smallest to largest: -6, -3, 4, 11, 22.",
            sample: "In order from smallest to largest: -6, -3, 4, 11, 22.",
            help: { rule: "Read integers from left to right on the number line.", steps: ["Place the most negative integer first.", "Move toward zero and then positive values.", "The ordered list is -6, -3, 4, 11, 22."] }
        },
        {
            id: "m7c-sa-39", topic: "integers-place-value", marks: 3,
            q: "Which integer is greatest: -16, -3, 0, -7? Explain briefly.",
            sample: "0 is the greatest because it is furthest to the right on the number line.",
            help: { rule: "Compare signs first, then compare size.", steps: ["Any positive number is greater than zero.", "Zero is greater than any negative number.", "0 is the greatest integer."] }
        },
        {
            id: "m7c-sa-40", topic: "integers-place-value", marks: 4,
            q: "Find the opposite of 16. Then state whether the opposite is greater or smaller than the original number.",
            sample: "The opposite of 16 is -16. It is smaller than 16 because it is on the other side of zero on the number line.",
            help: { rule: "Opposites have the same distance from zero but opposite signs.", steps: ["Change the sign to find the opposite.", "Compare the original integer and its opposite on the number line.", "-16 is the opposite of 16."] }
        },
        {
            id: "m7c-sa-41", topic: "integers-place-value", marks: 4,
            q: "In 31,975, what is the value of the digit 7? Explain using place value. Give the final answer clearly.",
            sample: "The digit 7 is in the tens place, so its value is 70.",
            help: { rule: "A digit's value depends on its place.", steps: ["Identify the place of the digit.", "The tens place is worth 10.", "So the digit 7 has value 70."] }
        },
        {
            id: "m7c-sa-42", topic: "integers-place-value", marks: 4,
            q: "Explain the role of the 0 in 19,705.",
            sample: "The 0 is a placeholder in the tens place. It shows there are no tens in the number, while the other digits keep their correct place values.",
            help: { rule: "A zero can act as a placeholder in a whole number.", steps: ["Find where the 0 sits in the number.", "Name that position as the tens place.", "Explain that the 0 keeps the other digits in the correct places."] }
        },
        {
            id: "m7c-sa-43", topic: "integers-place-value", marks: 3,
            q: "Order these integers from smallest to largest: -11, -13, 5, 9, 11.",
            sample: "In order from smallest to largest: -13, -11, 5, 9, 11.",
            help: { rule: "Read integers from left to right on the number line.", steps: ["Place the most negative integer first.", "Move toward zero and then positive values.", "The ordered list is -13, -11, 5, 9, 11."] }
        },

        {
            id: "m7c-sa-2", topic: "integers-operations", marks: 4,
            q: "Calculate: -12 + 7 - 5.",
            sample: "-12 + 7 = -5, then -5 - 5 = -10.",
            help: { rule: "Work left to right when only addition and subtraction are present.", steps: ["-12 + 7 = -5.", "Then subtract 5.", "The final answer is -10."] }
        },
        {
            id: "m7c-sa-4", topic: "integers-operations", marks: 5,
            q: "A submarine is at -18 m. It rises 11 m, then dives 7 m. What is its final position?",
            sample: "Start at -18. Rise 11: -18 + 11 = -7. Dive 7: -7 - 7 = -14. Final position is -14 m.",
            help: { rule: "Use positive numbers for rises and negative numbers for dives.", steps: ["Start at -18.", "Add 11 to represent rising.", "Subtract 7 to represent diving again.", "The final position is -14 m."] }
        },
        {
            id: "m7c-sa-44", topic: "integers-operations", marks: 4,
            q: "Calculate: -6 + 7 - 2.",
            sample: "-6 + 7 = 1, then 1 - 2 = -1.",
            help: { rule: "Work from left to right when only addition and subtraction are present.", steps: ["First add -6 and 7.", "Then subtract 2.", "The final answer is -1."] }
        },
        {
            id: "m7c-sa-45", topic: "integers-operations", marks: 5,
            q: "A diver is at -7 m. The diver rises 9 m, then dives 4 m. What is the final position?",
            sample: "Start at -7 m. Rising 9 m gives 2 m. Diving 4 m gives -2 m. The final position is -2 m.",
            help: { rule: "Use positive integers for rises and negative integers for dives.", steps: ["Start at -7.", "Add 9 for the rise, then subtract 4 for the dive.", "The final position is -2 m."] }
        },
        {
            id: "m7c-sa-46", topic: "integers-operations", marks: 4,
            q: "Explain why 6 - (-8) gives the same result as 6 + 8.",
            sample: "Subtracting a negative means removing a loss, so it changes to addition. 6 - (-8) = 6 + 8 = 14.",
            help: { rule: "Subtracting a negative changes to addition.", steps: ["Rewrite 6 - (-8) as 6 + 8.", "Add the positive integers.", "The result is 14."] }
        },
        {
            id: "m7c-sa-47", topic: "integers-operations", marks: 5,
            q: "Calculate (-6) x 8 and -21 / 5. Then state the sign rule you used.",
            sample: "(-6) x 8 = -48 and -21 / 5 = -4.2. In both cases the signs are different, so the answers are negative.",
            help: { rule: "Different signs give a negative result for multiplication and division.", steps: ["Multiply or divide the absolute values first.", "Check whether the signs are the same or different.", "Both answers are negative because the signs are different."] }
        },
        {
            id: "m7c-sa-48", topic: "integers-operations", marks: 5,
            q: "A game score starts at -10. The player loses 8 points, then gains 12 points. What is the final score?",
            sample: "Start at -10. Losing 8 gives -18. Gaining 12 gives -6. The final score is -6.",
            help: { rule: "Treat losses as negative changes and gains as positive changes.", steps: ["Start with -10.", "Subtract 8, then add 12.", "The final score is -6."] }
        },
        {
            id: "m7c-sa-49", topic: "integers-operations", marks: 4,
            q: "Calculate: -21 + 12 - 7.",
            sample: "-21 + 12 = -9, then -9 - 7 = -16.",
            help: { rule: "Work from left to right when only addition and subtraction are present.", steps: ["First add -21 and 12.", "Then subtract 7.", "The final answer is -16."] }
        },
        {
            id: "m7c-sa-50", topic: "integers-operations", marks: 5,
            q: "A diver is at -17 m. The diver rises 8 m, then dives 3 m. What is the final position?",
            sample: "Start at -17 m. Rising 8 m gives -9 m. Diving 3 m gives -12 m. The final position is -12 m.",
            help: { rule: "Use positive integers for rises and negative integers for dives.", steps: ["Start at -17.", "Add 8 for the rise, then subtract 3 for the dive.", "The final position is -12 m."] }
        },
        {
            id: "m7c-sa-51", topic: "integers-operations", marks: 4,
            q: "Explain why 11 - (-7) gives the same result as 11 + 7.",
            sample: "Subtracting a negative means removing a loss, so it changes to addition. 11 - (-7) = 11 + 7 = 18.",
            help: { rule: "Subtracting a negative changes to addition.", steps: ["Rewrite 11 - (-7) as 11 + 7.", "Add the positive integers.", "The result is 18."] }
        },
        {
            id: "m7c-sa-52", topic: "integers-operations", marks: 5,
            q: "Calculate (-3) x 4 and -18 / 2. Then state the sign rule you used.",
            sample: "(-3) x 4 = -12 and -18 / 2 = -9. In both cases the signs are different, so the answers are negative.",
            help: { rule: "Different signs give a negative result for multiplication and division.", steps: ["Multiply or divide the absolute values first.", "Check whether the signs are the same or different.", "Both answers are negative because the signs are different."] }
        },
        {
            id: "m7c-sa-53", topic: "integers-operations", marks: 5,
            q: "A game score starts at 16. The player loses 7 points, then gains 4 points. What is the final score?",
            sample: "Start at 16. Losing 7 gives 9. Gaining 4 gives 13. The final score is 13.",
            help: { rule: "Treat losses as negative changes and gains as positive changes.", steps: ["Start with 16.", "Subtract 7, then add 4.", "The final score is 13."] }
        },
        {
            id: "m7c-sa-54", topic: "integers-operations", marks: 4,
            q: "Calculate: -16 + 17 - 4.",
            sample: "-16 + 17 = 1, then 1 - 4 = -3.",
            help: { rule: "Work from left to right when only addition and subtraction are present.", steps: ["First add -16 and 17.", "Then subtract 4.", "The final answer is -3."] }
        },
        {
            id: "m7c-sa-55", topic: "integers-operations", marks: 5,
            q: "A diver is at -9 m. The diver rises 7 m, then dives 8 m. What is the final position?",
            sample: "Start at -9 m. Rising 7 m gives -2 m. Diving 8 m gives -10 m. The final position is -10 m.",
            help: { rule: "Use positive integers for rises and negative integers for dives.", steps: ["Start at -9.", "Add 7 for the rise, then subtract 8 for the dive.", "The final position is -10 m."] }
        },
        {
            id: "m7c-sa-56", topic: "integers-operations", marks: 4,
            q: "Explain why 7 - (-6) gives the same result as 7 + 6.",
            sample: "Subtracting a negative means removing a loss, so it changes to addition. 7 - (-6) = 7 + 6 = 13.",
            help: { rule: "Subtracting a negative changes to addition.", steps: ["Rewrite 7 - (-6) as 7 + 6.", "Add the positive integers.", "The result is 13."] }
        },
        {
            id: "m7c-sa-57", topic: "integers-operations", marks: 5,
            q: "Calculate (-8) x 7 and -15 / 3. Then state the sign rule you used.",
            sample: "(-8) x 7 = -56 and -15 / 3 = -5. In both cases the signs are different, so the answers are negative.",
            help: { rule: "Different signs give a negative result for multiplication and division.", steps: ["Multiply or divide the absolute values first.", "Check whether the signs are the same or different.", "Both answers are negative because the signs are different."] }
        },
        {
            id: "m7c-sa-58", topic: "integers-operations", marks: 5,
            q: "A game score starts at -8. The player loses 6 points, then gains 7 points. What is the final score?",
            sample: "Start at -8. Losing 6 gives -14. Gaining 7 gives -7. The final score is -7.",
            help: { rule: "Treat losses as negative changes and gains as positive changes.", steps: ["Start with -8.", "Subtract 6, then add 7.", "The final score is -7."] }
        },
        {
            id: "m7c-sa-59", topic: "integers-operations", marks: 4,
            q: "Calculate: -11 + 7 - 9.",
            sample: "-11 + 7 = -4, then -4 - 9 = -13.",
            help: { rule: "Work from left to right when only addition and subtraction are present.", steps: ["First add -11 and 7.", "Then subtract 9.", "The final answer is -13."] }
        },
        {
            id: "m7c-sa-60", topic: "integers-operations", marks: 5,
            q: "A diver is at -19 m. The diver rises 6 m, then dives 7 m. What is the final position?",
            sample: "Start at -19 m. Rising 6 m gives -13 m. Diving 7 m gives -20 m. The final position is -20 m.",
            help: { rule: "Use positive integers for rises and negative integers for dives.", steps: ["Start at -19.", "Add 6 for the rise, then subtract 7 for the dive.", "The final position is -20 m."] }
        },
        {
            id: "m7c-sa-61", topic: "integers-operations", marks: 4,
            q: "Explain why 12 - (-5) gives the same result as 12 + 5.",
            sample: "Subtracting a negative means removing a loss, so it changes to addition. 12 - (-5) = 12 + 5 = 17.",
            help: { rule: "Subtracting a negative changes to addition.", steps: ["Rewrite 12 - (-5) as 12 + 5.", "Add the positive integers.", "The result is 17."] }
        },
        {
            id: "m7c-sa-62", topic: "integers-operations", marks: 5,
            q: "Calculate (-5) x 3 and -12 / 4. Then state the sign rule you used.",
            sample: "(-5) x 3 = -15 and -12 / 4 = -3. In both cases the signs are different, so the answers are negative.",
            help: { rule: "Different signs give a negative result for multiplication and division.", steps: ["Multiply or divide the absolute values first.", "Check whether the signs are the same or different.", "Both answers are negative because the signs are different."] }
        },
        {
            id: "m7c-sa-63", topic: "integers-operations", marks: 5,
            q: "A game score starts at 14. The player loses 5 points, then gains 10 points. What is the final score?",
            sample: "Start at 14. Losing 5 gives 9. Gaining 10 gives 19. The final score is 19.",
            help: { rule: "Treat losses as negative changes and gains as positive changes.", steps: ["Start with 14.", "Subtract 5, then add 10.", "The final score is 19."] }
        },
        {
            id: "m7c-sa-64", topic: "integers-operations", marks: 4,
            q: "Calculate: -6 + 12 - 6.",
            sample: "-6 + 12 = 6, then 6 - 6 = 0.",
            help: { rule: "Work from left to right when only addition and subtraction are present.", steps: ["First add -6 and 12.", "Then subtract 6.", "The final answer is 0."] }
        },
        {
            id: "m7c-sa-65", topic: "integers-operations", marks: 5,
            q: "A diver is at -11 m. The diver rises 5 m, then dives 6 m. What is the final position?",
            sample: "Start at -11 m. Rising 5 m gives -6 m. Diving 6 m gives -12 m. The final position is -12 m.",
            help: { rule: "Use positive integers for rises and negative integers for dives.", steps: ["Start at -11.", "Add 5 for the rise, then subtract 6 for the dive.", "The final position is -12 m."] }
        },
        {
            id: "m7c-sa-66", topic: "integers-operations", marks: 4,
            q: "Explain why 8 - (-4) gives the same result as 8 + 4.",
            sample: "Subtracting a negative means removing a loss, so it changes to addition. 8 - (-4) = 8 + 4 = 12.",
            help: { rule: "Subtracting a negative changes to addition.", steps: ["Rewrite 8 - (-4) as 8 + 4.", "Add the positive integers.", "The result is 12."] }
        },
        {
            id: "m7c-sa-67", topic: "integers-operations", marks: 5,
            q: "Calculate (-10) x 6 and -27 / 5. Then state the sign rule you used.",
            sample: "(-10) x 6 = -60 and -27 / 5 = -5.4. In both cases the signs are different, so the answers are negative.",
            help: { rule: "Different signs give a negative result for multiplication and division.", steps: ["Multiply or divide the absolute values first.", "Check whether the signs are the same or different.", "Both answers are negative because the signs are different."] }
        },
        {
            id: "m7c-sa-68", topic: "integers-operations", marks: 5,
            q: "A game score starts at -20. The player loses 4 points, then gains 13 points. What is the final score?",
            sample: "Start at -20. Losing 4 gives -24. Gaining 13 gives -11. The final score is -11.",
            help: { rule: "Treat losses as negative changes and gains as positive changes.", steps: ["Start with -20.", "Subtract 4, then add 13.", "The final score is -11."] }
        },
        {
            id: "m7c-sa-69", topic: "integers-operations", marks: 4,
            q: "Calculate: -21 + 17 - 3.",
            sample: "-21 + 17 = -4, then -4 - 3 = -7.",
            help: { rule: "Work from left to right when only addition and subtraction are present.", steps: ["First add -21 and 17.", "Then subtract 3.", "The final answer is -7."] }
        },
        {
            id: "m7c-sa-70", topic: "integers-operations", marks: 5,
            q: "A diver is at -21 m. The diver rises 4 m, then dives 5 m. What is the final position?",
            sample: "Start at -21 m. Rising 4 m gives -17 m. Diving 5 m gives -22 m. The final position is -22 m.",
            help: { rule: "Use positive integers for rises and negative integers for dives.", steps: ["Start at -21.", "Add 4 for the rise, then subtract 5 for the dive.", "The final position is -22 m."] }
        },
        {
            id: "m7c-sa-71", topic: "integers-operations", marks: 4,
            q: "Explain why 4 - (-3) gives the same result as 4 + 3.",
            sample: "Subtracting a negative means removing a loss, so it changes to addition. 4 - (-3) = 4 + 3 = 7.",
            help: { rule: "Subtracting a negative changes to addition.", steps: ["Rewrite 4 - (-3) as 4 + 3.", "Add the positive integers.", "The result is 7."] }
        },
        {
            id: "m7c-sa-72", topic: "integers-operations", marks: 5,
            q: "Calculate (-7) x 2 and -24 / 2. Then state the sign rule you used.",
            sample: "(-7) x 2 = -14 and -24 / 2 = -12. In both cases the signs are different, so the answers are negative.",
            help: { rule: "Different signs give a negative result for multiplication and division.", steps: ["Multiply or divide the absolute values first.", "Check whether the signs are the same or different.", "Both answers are negative because the signs are different."] }
        },
        {
            id: "m7c-sa-73", topic: "integers-operations", marks: 5,
            q: "A game score starts at 12. The player loses 9 points, then gains 5 points. What is the final score?",
            sample: "Start at 12. Losing 9 gives 3. Gaining 5 gives 8. The final score is 8.",
            help: { rule: "Treat losses as negative changes and gains as positive changes.", steps: ["Start with 12.", "Subtract 9, then add 5.", "The final score is 8."] }
        },
        {
            id: "m7c-sa-74", topic: "integers-operations", marks: 4,
            q: "Calculate: -16 + 7 - 8.",
            sample: "-16 + 7 = -9, then -9 - 8 = -17.",
            help: { rule: "Work from left to right when only addition and subtraction are present.", steps: ["First add -16 and 7.", "Then subtract 8.", "The final answer is -17."] }
        },

        {
            id: "m7c-sa-5", topic: "angle-basics", marks: 4,
            q: "Find the missing angle on a straight line if the other angle is 58 degrees.",
            sample: "Angles on a straight line add to 180 degrees, so 180 - 58 = 122 degrees.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Write 58 + x = 180.", "Subtract 58 from 180.", "The missing angle is 122 degrees."] }
        },
        {
            id: "m7c-sa-6", topic: "angle-basics", marks: 4,
            q: "Three angles around a point are 90 degrees, 135 degrees and x. Find x.",
            sample: "Angles around a point add to 360 degrees, so x = 360 - 90 - 135 = 135 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 135 = 225.", "Subtract from 360.", "The missing angle is 135 degrees."] }
        },
        {
            id: "m7c-sa-75", topic: "angle-basics", marks: 4,
            q: "Find the missing angle on a straight line if the other angle is 42 degrees.",
            sample: "Angles on a straight line add to 180 degrees, so 180 - 42 = 138 degrees.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Write 42 + x = 180.", "Subtract 42 from 180.", "The missing angle is 138 degrees."] }
        },
        {
            id: "m7c-sa-76", topic: "angle-basics", marks: 4,
            q: "Three angles around a point are 90 degrees, 72 degrees and x. Find x.",
            sample: "Angles around a point add to 360 degrees, so x = 360 - 90 - 72 = 198 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 72 = 162.", "Subtract from 360 degrees.", "The missing angle is 198 degrees."] }
        },
        {
            id: "m7c-sa-77", topic: "angle-basics", marks: 4,
            q: "Two lines cross. One angle is 64 degrees. Find the vertically opposite angle and one adjacent angle.",
            sample: "The vertically opposite angle is 64 degrees because opposite angles are equal. The adjacent angle is 116 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use vertically opposite angles first, then use the straight-line rule.", steps: ["Copy the angle to the opposite position.", "Calculate 180 - 64.", "The adjacent angle is 116 degrees."] }
        },
        {
            id: "m7c-sa-78", topic: "angle-basics", marks: 4,
            q: "Explain the difference between complementary and supplementary angles. Then find the complement of 46 degrees.",
            sample: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The complement of 46 degrees is 44 degrees because 90 - 46 = 44.",
            help: { rule: "Complementary angles total 90 degrees and supplementary angles total 180 degrees.", steps: ["State the total for each angle pair.", "Use 90 - 46 to find the complement.", "The complement is 44 degrees."] }
        },
        {
            id: "m7c-sa-79", topic: "angle-basics", marks: 5,
            q: "Angles around a point are 95 degrees, 94 degrees and x. Find x, then find the supplement of x.",
            sample: "x = 360 - 95 - 94 = 171 degrees. The supplement of x is 180 - 171 = 9 degrees.",
            help: { rule: "Use angles around a point first, then supplementary angles.", steps: ["Subtract 95 and 94 from 360 to find x.", "Use 180 - x to find the supplement.", "The supplement is 9 degrees."] }
        },
        {
            id: "m7c-sa-80", topic: "angle-basics", marks: 4,
            q: "Find the missing angle on a straight line if the other angle is 87 degrees.",
            sample: "Angles on a straight line add to 180 degrees, so 180 - 87 = 93 degrees.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Write 87 + x = 180.", "Subtract 87 from 180.", "The missing angle is 93 degrees."] }
        },
        {
            id: "m7c-sa-81", topic: "angle-basics", marks: 4,
            q: "Three angles around a point are 100 degrees, 72 degrees and x. Find x.",
            sample: "Angles around a point add to 360 degrees, so x = 360 - 100 - 72 = 188 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 100 + 72 = 172.", "Subtract from 360 degrees.", "The missing angle is 188 degrees."] }
        },
        {
            id: "m7c-sa-82", topic: "angle-basics", marks: 4,
            q: "Two lines cross. One angle is 48 degrees. Find the vertically opposite angle and one adjacent angle.",
            sample: "The vertically opposite angle is 48 degrees because opposite angles are equal. The adjacent angle is 132 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use vertically opposite angles first, then use the straight-line rule.", steps: ["Copy the angle to the opposite position.", "Calculate 180 - 48.", "The adjacent angle is 132 degrees."] }
        },
        {
            id: "m7c-sa-83", topic: "angle-basics", marks: 4,
            q: "Explain the difference between complementary and supplementary angles. Then find the complement of 38 degrees.",
            sample: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The complement of 38 degrees is 52 degrees because 90 - 38 = 52.",
            help: { rule: "Complementary angles total 90 degrees and supplementary angles total 180 degrees.", steps: ["State the total for each angle pair.", "Use 90 - 38 to find the complement.", "The complement is 52 degrees."] }
        },
        {
            id: "m7c-sa-84", topic: "angle-basics", marks: 5,
            q: "Angles around a point are 105 degrees, 94 degrees and x. Find x, then find the supplement of x.",
            sample: "x = 360 - 105 - 94 = 161 degrees. The supplement of x is 180 - 161 = 19 degrees.",
            help: { rule: "Use angles around a point first, then supplementary angles.", steps: ["Subtract 105 and 94 from 360 to find x.", "Use 180 - x to find the supplement.", "The supplement is 19 degrees."] }
        },
        {
            id: "m7c-sa-85", topic: "angle-basics", marks: 4,
            q: "Find the missing angle on a straight line if the other angle is 60 degrees.",
            sample: "Angles on a straight line add to 180 degrees, so 180 - 60 = 120 degrees.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Write 60 + x = 180.", "Subtract 60 from 180.", "The missing angle is 120 degrees."] }
        },
        {
            id: "m7c-sa-86", topic: "angle-basics", marks: 4,
            q: "Three angles around a point are 110 degrees, 72 degrees and x. Find x.",
            sample: "Angles around a point add to 360 degrees, so x = 360 - 110 - 72 = 178 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 110 + 72 = 182.", "Subtract from 360 degrees.", "The missing angle is 178 degrees."] }
        },
        {
            id: "m7c-sa-87", topic: "angle-basics", marks: 4,
            q: "Two lines cross. One angle is 88 degrees. Find the vertically opposite angle and one adjacent angle.",
            sample: "The vertically opposite angle is 88 degrees because opposite angles are equal. The adjacent angle is 92 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use vertically opposite angles first, then use the straight-line rule.", steps: ["Copy the angle to the opposite position.", "Calculate 180 - 88.", "The adjacent angle is 92 degrees."] }
        },
        {
            id: "m7c-sa-88", topic: "angle-basics", marks: 4,
            q: "Explain the difference between complementary and supplementary angles. Then find the complement of 30 degrees.",
            sample: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The complement of 30 degrees is 60 degrees because 90 - 30 = 60.",
            help: { rule: "Complementary angles total 90 degrees and supplementary angles total 180 degrees.", steps: ["State the total for each angle pair.", "Use 90 - 30 to find the complement.", "The complement is 60 degrees."] }
        },
        {
            id: "m7c-sa-89", topic: "angle-basics", marks: 5,
            q: "Angles around a point are 115 degrees, 94 degrees and x. Find x, then find the supplement of x.",
            sample: "x = 360 - 115 - 94 = 151 degrees. The supplement of x is 180 - 151 = 29 degrees.",
            help: { rule: "Use angles around a point first, then supplementary angles.", steps: ["Subtract 115 and 94 from 360 to find x.", "Use 180 - x to find the supplement.", "The supplement is 29 degrees."] }
        },
        {
            id: "m7c-sa-90", topic: "angle-basics", marks: 4,
            q: "Find the missing angle on a straight line if the other angle is 105 degrees.",
            sample: "Angles on a straight line add to 180 degrees, so 180 - 105 = 75 degrees.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Write 105 + x = 180.", "Subtract 105 from 180.", "The missing angle is 75 degrees."] }
        },
        {
            id: "m7c-sa-91", topic: "angle-basics", marks: 4,
            q: "Three angles around a point are 80 degrees, 72 degrees and x. Find x.",
            sample: "Angles around a point add to 360 degrees, so x = 360 - 80 - 72 = 208 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 80 + 72 = 152.", "Subtract from 360 degrees.", "The missing angle is 208 degrees."] }
        },
        {
            id: "m7c-sa-92", topic: "angle-basics", marks: 4,
            q: "Two lines cross. One angle is 72 degrees. Find the vertically opposite angle and one adjacent angle.",
            sample: "The vertically opposite angle is 72 degrees because opposite angles are equal. The adjacent angle is 108 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use vertically opposite angles first, then use the straight-line rule.", steps: ["Copy the angle to the opposite position.", "Calculate 180 - 72.", "The adjacent angle is 108 degrees."] }
        },
        {
            id: "m7c-sa-93", topic: "angle-basics", marks: 4,
            q: "Explain the difference between complementary and supplementary angles. Then find the complement of 22 degrees.",
            sample: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The complement of 22 degrees is 68 degrees because 90 - 22 = 68.",
            help: { rule: "Complementary angles total 90 degrees and supplementary angles total 180 degrees.", steps: ["State the total for each angle pair.", "Use 90 - 22 to find the complement.", "The complement is 68 degrees."] }
        },
        {
            id: "m7c-sa-94", topic: "angle-basics", marks: 5,
            q: "Angles around a point are 125 degrees, 94 degrees and x. Find x, then find the supplement of x.",
            sample: "x = 360 - 125 - 94 = 141 degrees. The supplement of x is 180 - 141 = 39 degrees.",
            help: { rule: "Use angles around a point first, then supplementary angles.", steps: ["Subtract 125 and 94 from 360 to find x.", "Use 180 - x to find the supplement.", "The supplement is 39 degrees."] }
        },
        {
            id: "m7c-sa-95", topic: "angle-basics", marks: 4,
            q: "Find the missing angle on a straight line if the other angle is 78 degrees.",
            sample: "Angles on a straight line add to 180 degrees, so 180 - 78 = 102 degrees.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Write 78 + x = 180.", "Subtract 78 from 180.", "The missing angle is 102 degrees."] }
        },
        {
            id: "m7c-sa-96", topic: "angle-basics", marks: 4,
            q: "Three angles around a point are 90 degrees, 72 degrees and x. Find x. Show your working.",
            sample: "Angles around a point add to 360 degrees, so x = 360 - 90 - 72 = 198 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 90 + 72 = 162.", "Subtract from 360 degrees.", "The missing angle is 198 degrees."] }
        },
        {
            id: "m7c-sa-97", topic: "angle-basics", marks: 4,
            q: "Two lines cross. One angle is 56 degrees. Find the vertically opposite angle and one adjacent angle.",
            sample: "The vertically opposite angle is 56 degrees because opposite angles are equal. The adjacent angle is 124 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use vertically opposite angles first, then use the straight-line rule.", steps: ["Copy the angle to the opposite position.", "Calculate 180 - 56.", "The adjacent angle is 124 degrees."] }
        },
        {
            id: "m7c-sa-98", topic: "angle-basics", marks: 4,
            q: "Explain the difference between complementary and supplementary angles. Then find the complement of 62 degrees.",
            sample: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The complement of 62 degrees is 28 degrees because 90 - 62 = 28.",
            help: { rule: "Complementary angles total 90 degrees and supplementary angles total 180 degrees.", steps: ["State the total for each angle pair.", "Use 90 - 62 to find the complement.", "The complement is 28 degrees."] }
        },
        {
            id: "m7c-sa-99", topic: "angle-basics", marks: 5,
            q: "Angles around a point are 95 degrees, 94 degrees and x. Find x, then find the supplement of x. Show your working.",
            sample: "x = 360 - 95 - 94 = 171 degrees. The supplement of x is 180 - 171 = 9 degrees.",
            help: { rule: "Use angles around a point first, then supplementary angles.", steps: ["Subtract 95 and 94 from 360 to find x.", "Use 180 - x to find the supplement.", "The supplement is 9 degrees."] }
        },
        {
            id: "m7c-sa-100", topic: "angle-basics", marks: 4,
            q: "Find the missing angle on a straight line if the other angle is 51 degrees.",
            sample: "Angles on a straight line add to 180 degrees, so 180 - 51 = 129 degrees.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Write 51 + x = 180.", "Subtract 51 from 180.", "The missing angle is 129 degrees."] }
        },
        {
            id: "m7c-sa-101", topic: "angle-basics", marks: 4,
            q: "Three angles around a point are 100 degrees, 72 degrees and x. Find x. Show your working.",
            sample: "Angles around a point add to 360 degrees, so x = 360 - 100 - 72 = 188 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 100 + 72 = 172.", "Subtract from 360 degrees.", "The missing angle is 188 degrees."] }
        },
        {
            id: "m7c-sa-102", topic: "angle-basics", marks: 4,
            q: "Two lines cross. One angle is 96 degrees. Find the vertically opposite angle and one adjacent angle.",
            sample: "The vertically opposite angle is 96 degrees because opposite angles are equal. The adjacent angle is 84 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use vertically opposite angles first, then use the straight-line rule.", steps: ["Copy the angle to the opposite position.", "Calculate 180 - 96.", "The adjacent angle is 84 degrees."] }
        },
        {
            id: "m7c-sa-103", topic: "angle-basics", marks: 4,
            q: "Explain the difference between complementary and supplementary angles. Then find the complement of 54 degrees.",
            sample: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The complement of 54 degrees is 36 degrees because 90 - 54 = 36.",
            help: { rule: "Complementary angles total 90 degrees and supplementary angles total 180 degrees.", steps: ["State the total for each angle pair.", "Use 90 - 54 to find the complement.", "The complement is 36 degrees."] }
        },
        {
            id: "m7c-sa-104", topic: "angle-basics", marks: 5,
            q: "Angles around a point are 105 degrees, 94 degrees and x. Find x, then find the supplement of x. Show your working.",
            sample: "x = 360 - 105 - 94 = 161 degrees. The supplement of x is 180 - 161 = 19 degrees.",
            help: { rule: "Use angles around a point first, then supplementary angles.", steps: ["Subtract 105 and 94 from 360 to find x.", "Use 180 - x to find the supplement.", "The supplement is 19 degrees."] }
        },
        {
            id: "m7c-sa-105", topic: "angle-basics", marks: 4,
            q: "Find the missing angle on a straight line if the other angle is 96 degrees.",
            sample: "Angles on a straight line add to 180 degrees, so 180 - 96 = 84 degrees.",
            help: { rule: "Angles on a straight line add to 180 degrees.", steps: ["Write 96 + x = 180.", "Subtract 96 from 180.", "The missing angle is 84 degrees."] }
        },
        {
            id: "m7c-sa-106", topic: "angle-basics", marks: 4,
            q: "Three angles around a point are 110 degrees, 72 degrees and x. Find x. Show your working.",
            sample: "Angles around a point add to 360 degrees, so x = 360 - 110 - 72 = 178 degrees.",
            help: { rule: "Angles around a point add to 360 degrees.", steps: ["Add the known angles: 110 + 72 = 182.", "Subtract from 360 degrees.", "The missing angle is 178 degrees."] }
        },

        {
            id: "m7c-sa-7", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One corresponding angle is 112 degrees. Find a co-interior angle on the same side of the transversal.",
            sample: "Corresponding angles are equal, so the matching angle is 112 degrees. Co-interior angles add to 180 degrees, so the co-interior angle is 180 - 112 = 68 degrees.",
            help: { rule: "Use equal corresponding angles, then supplementary co-interior angles.", steps: ["Copy 112 degrees to the corresponding position.", "Set 112 + x = 180.", "Solve to get x = 68 degrees."] }
        },
        {
            id: "m7c-sa-8", topic: "angle-parallel", marks: 5,
            q: "Explain how you know that two alternate angles formed by a transversal on parallel lines are equal.",
            sample: "When two lines are parallel, the matching geometry created by the transversal repeats. Alternate angles are in equal positions on opposite sides of the transversal inside the parallel lines, so they are equal. This is one of the standard angle rules for parallel lines.",
            help: { rule: "State the parallel-line rule clearly and connect it to the angle positions.", steps: ["Identify the angles as alternate angles.", "Mention that the lines are parallel.", "State that alternate angles on parallel lines are equal."] }
        },
        {
            id: "m7c-sa-107", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One corresponding angle is 98 degrees. Find a co-interior angle on the same side of the transversal.",
            sample: "The matching corresponding angle is 98 degrees. Co-interior angles add to 180 degrees, so the co-interior angle is 82 degrees.",
            help: { rule: "Use equal corresponding angles, then use the co-interior angle sum.", steps: ["Copy the given angle to the corresponding position.", "Write angle + co-interior angle = 180 degrees.", "The co-interior angle is 82 degrees."] }
        },
        {
            id: "m7c-sa-108", topic: "angle-parallel", marks: 5,
            q: "Explain how you know that alternate angles formed by a transversal on parallel lines are equal.",
            sample: "When two lines are parallel, the same angle pattern repeats at each intersection. Alternate angles sit between the parallel lines on opposite sides of the transversal, so they match in size. This is one of the standard angle rules for parallel lines.",
            help: { rule: "State the position of alternate angles and the fact that the lines are parallel.", steps: ["Identify the pair as alternate angles.", "Mention that the lines are parallel.", "State that alternate angles on parallel lines are equal."] }
        },
        {
            id: "m7c-sa-109", topic: "angle-parallel", marks: 5,
            q: "Parallel lines are cut by a transversal and one acute angle is 50 degrees. Find an obtuse angle in the pattern and explain why.",
            sample: "An obtuse angle is supplementary to the acute angle, so it measures 180 - 50 = 130 degrees. The same acute and obtuse values repeat because the lines are parallel.",
            help: { rule: "Acute and obtuse partner angles on a line add to 180 degrees.", steps: ["Identify the acute angle.", "Calculate 180 - 50.", "The obtuse angle is 130 degrees."] }
        },
        {
            id: "m7c-sa-110", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One angle is 67 degrees. Find the alternate angle and one adjacent angle.",
            sample: "The alternate angle is 67 degrees because alternate angles are equal. The adjacent angle is 113 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use the alternate-angle rule and the straight-line rule together.", steps: ["Copy the given angle to the alternate position.", "Calculate 180 - 67 for the adjacent angle.", "So the adjacent angle is 113 degrees."] }
        },
        {
            id: "m7c-sa-111", topic: "angle-parallel", marks: 5,
            q: "Explain why co-interior angles formed by a transversal on parallel lines are supplementary.",
            sample: "When the lines are parallel, corresponding and alternate angles repeat in matching positions. The two co-interior angles sit on the same side of the transversal inside the parallel lines, and together they make a straight angle. That is why they add to 180 degrees.",
            help: { rule: "Connect co-interior angles to the straight-line total of 180 degrees.", steps: ["State that the lines are parallel.", "Note that the angles sit inside the lines on the same side of the transversal.", "Explain that they add to 180 degrees because they form a straight angle."] }
        },
        {
            id: "m7c-sa-112", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One corresponding angle is 133 degrees. Find a co-interior angle on the same side of the transversal.",
            sample: "The matching corresponding angle is 133 degrees. Co-interior angles add to 180 degrees, so the co-interior angle is 47 degrees.",
            help: { rule: "Use equal corresponding angles, then use the co-interior angle sum.", steps: ["Copy the given angle to the corresponding position.", "Write angle + co-interior angle = 180 degrees.", "The co-interior angle is 47 degrees."] }
        },
        {
            id: "m7c-sa-113", topic: "angle-parallel", marks: 5,
            q: "Explain how you know that alternate angles formed by a transversal on parallel lines are equal. Show your working.",
            sample: "When two lines are parallel, the same angle pattern repeats at each intersection. Alternate angles sit between the parallel lines on opposite sides of the transversal, so they match in size. This is one of the standard angle rules for parallel lines.",
            help: { rule: "State the position of alternate angles and the fact that the lines are parallel.", steps: ["Identify the pair as alternate angles.", "Mention that the lines are parallel.", "State that alternate angles on parallel lines are equal."] }
        },
        {
            id: "m7c-sa-114", topic: "angle-parallel", marks: 5,
            q: "Parallel lines are cut by a transversal and one acute angle is 34 degrees. Find an obtuse angle in the pattern and explain why.",
            sample: "An obtuse angle is supplementary to the acute angle, so it measures 180 - 34 = 146 degrees. The same acute and obtuse values repeat because the lines are parallel.",
            help: { rule: "Acute and obtuse partner angles on a line add to 180 degrees.", steps: ["Identify the acute angle.", "Calculate 180 - 34.", "The obtuse angle is 146 degrees."] }
        },
        {
            id: "m7c-sa-115", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One angle is 40 degrees. Find the alternate angle and one adjacent angle.",
            sample: "The alternate angle is 40 degrees because alternate angles are equal. The adjacent angle is 140 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use the alternate-angle rule and the straight-line rule together.", steps: ["Copy the given angle to the alternate position.", "Calculate 180 - 40 for the adjacent angle.", "So the adjacent angle is 140 degrees."] }
        },
        {
            id: "m7c-sa-116", topic: "angle-parallel", marks: 5,
            q: "Explain why co-interior angles formed by a transversal on parallel lines are supplementary. Show your working.",
            sample: "When the lines are parallel, corresponding and alternate angles repeat in matching positions. The two co-interior angles sit on the same side of the transversal inside the parallel lines, and together they make a straight angle. That is why they add to 180 degrees.",
            help: { rule: "Connect co-interior angles to the straight-line total of 180 degrees.", steps: ["State that the lines are parallel.", "Note that the angles sit inside the lines on the same side of the transversal.", "Explain that they add to 180 degrees because they form a straight angle."] }
        },
        {
            id: "m7c-sa-117", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One corresponding angle is 126 degrees. Find a co-interior angle on the same side of the transversal.",
            sample: "The matching corresponding angle is 126 degrees. Co-interior angles add to 180 degrees, so the co-interior angle is 54 degrees.",
            help: { rule: "Use equal corresponding angles, then use the co-interior angle sum.", steps: ["Copy the given angle to the corresponding position.", "Write angle + co-interior angle = 180 degrees.", "The co-interior angle is 54 degrees."] }
        },
        {
            id: "m7c-sa-118", topic: "angle-parallel", marks: 5,
            q: "Explain how you know that alternate angles formed by a transversal on parallel lines are equal. Give the final answer clearly.",
            sample: "When two lines are parallel, the same angle pattern repeats at each intersection. Alternate angles sit between the parallel lines on opposite sides of the transversal, so they match in size. This is one of the standard angle rules for parallel lines.",
            help: { rule: "State the position of alternate angles and the fact that the lines are parallel.", steps: ["Identify the pair as alternate angles.", "Mention that the lines are parallel.", "State that alternate angles on parallel lines are equal."] }
        },
        {
            id: "m7c-sa-119", topic: "angle-parallel", marks: 5,
            q: "Parallel lines are cut by a transversal and one acute angle is 74 degrees. Find an obtuse angle in the pattern and explain why.",
            sample: "An obtuse angle is supplementary to the acute angle, so it measures 180 - 74 = 106 degrees. The same acute and obtuse values repeat because the lines are parallel.",
            help: { rule: "Acute and obtuse partner angles on a line add to 180 degrees.", steps: ["Identify the acute angle.", "Calculate 180 - 74.", "The obtuse angle is 106 degrees."] }
        },
        {
            id: "m7c-sa-120", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One angle is 85 degrees. Find the alternate angle and one adjacent angle.",
            sample: "The alternate angle is 85 degrees because alternate angles are equal. The adjacent angle is 95 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use the alternate-angle rule and the straight-line rule together.", steps: ["Copy the given angle to the alternate position.", "Calculate 180 - 85 for the adjacent angle.", "So the adjacent angle is 95 degrees."] }
        },
        {
            id: "m7c-sa-121", topic: "angle-parallel", marks: 5,
            q: "Explain why co-interior angles formed by a transversal on parallel lines are supplementary. Give the final answer clearly.",
            sample: "When the lines are parallel, corresponding and alternate angles repeat in matching positions. The two co-interior angles sit on the same side of the transversal inside the parallel lines, and together they make a straight angle. That is why they add to 180 degrees.",
            help: { rule: "Connect co-interior angles to the straight-line total of 180 degrees.", steps: ["State that the lines are parallel.", "Note that the angles sit inside the lines on the same side of the transversal.", "Explain that they add to 180 degrees because they form a straight angle."] }
        },
        {
            id: "m7c-sa-122", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One corresponding angle is 119 degrees. Find a co-interior angle on the same side of the transversal.",
            sample: "The matching corresponding angle is 119 degrees. Co-interior angles add to 180 degrees, so the co-interior angle is 61 degrees.",
            help: { rule: "Use equal corresponding angles, then use the co-interior angle sum.", steps: ["Copy the given angle to the corresponding position.", "Write angle + co-interior angle = 180 degrees.", "The co-interior angle is 61 degrees."] }
        },
        {
            id: "m7c-sa-123", topic: "angle-parallel", marks: 5,
            q: "Explain how you know that alternate angles formed by a transversal on parallel lines are equal. Use a clear method.",
            sample: "When two lines are parallel, the same angle pattern repeats at each intersection. Alternate angles sit between the parallel lines on opposite sides of the transversal, so they match in size. This is one of the standard angle rules for parallel lines.",
            help: { rule: "State the position of alternate angles and the fact that the lines are parallel.", steps: ["Identify the pair as alternate angles.", "Mention that the lines are parallel.", "State that alternate angles on parallel lines are equal."] }
        },
        {
            id: "m7c-sa-124", topic: "angle-parallel", marks: 5,
            q: "Parallel lines are cut by a transversal and one acute angle is 58 degrees. Find an obtuse angle in the pattern and explain why.",
            sample: "An obtuse angle is supplementary to the acute angle, so it measures 180 - 58 = 122 degrees. The same acute and obtuse values repeat because the lines are parallel.",
            help: { rule: "Acute and obtuse partner angles on a line add to 180 degrees.", steps: ["Identify the acute angle.", "Calculate 180 - 58.", "The obtuse angle is 122 degrees."] }
        },
        {
            id: "m7c-sa-125", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One angle is 58 degrees. Find the alternate angle and one adjacent angle.",
            sample: "The alternate angle is 58 degrees because alternate angles are equal. The adjacent angle is 122 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use the alternate-angle rule and the straight-line rule together.", steps: ["Copy the given angle to the alternate position.", "Calculate 180 - 58 for the adjacent angle.", "So the adjacent angle is 122 degrees."] }
        },
        {
            id: "m7c-sa-126", topic: "angle-parallel", marks: 5,
            q: "Explain why co-interior angles formed by a transversal on parallel lines are supplementary. Use a clear method.",
            sample: "When the lines are parallel, corresponding and alternate angles repeat in matching positions. The two co-interior angles sit on the same side of the transversal inside the parallel lines, and together they make a straight angle. That is why they add to 180 degrees.",
            help: { rule: "Connect co-interior angles to the straight-line total of 180 degrees.", steps: ["State that the lines are parallel.", "Note that the angles sit inside the lines on the same side of the transversal.", "Explain that they add to 180 degrees because they form a straight angle."] }
        },
        {
            id: "m7c-sa-127", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One corresponding angle is 112 degrees. Find a co-interior angle on the same side of the transversal. Show your working.",
            sample: "The matching corresponding angle is 112 degrees. Co-interior angles add to 180 degrees, so the co-interior angle is 68 degrees.",
            help: { rule: "Use equal corresponding angles, then use the co-interior angle sum.", steps: ["Copy the given angle to the corresponding position.", "Write angle + co-interior angle = 180 degrees.", "The co-interior angle is 68 degrees."] }
        },
        {
            id: "m7c-sa-128", topic: "angle-parallel", marks: 5,
            q: "Explain how you know that alternate angles formed by a transversal on parallel lines are equal. Explain each step.",
            sample: "When two lines are parallel, the same angle pattern repeats at each intersection. Alternate angles sit between the parallel lines on opposite sides of the transversal, so they match in size. This is one of the standard angle rules for parallel lines.",
            help: { rule: "State the position of alternate angles and the fact that the lines are parallel.", steps: ["Identify the pair as alternate angles.", "Mention that the lines are parallel.", "State that alternate angles on parallel lines are equal."] }
        },
        {
            id: "m7c-sa-129", topic: "angle-parallel", marks: 5,
            q: "Parallel lines are cut by a transversal and one acute angle is 42 degrees. Find an obtuse angle in the pattern and explain why.",
            sample: "An obtuse angle is supplementary to the acute angle, so it measures 180 - 42 = 138 degrees. The same acute and obtuse values repeat because the lines are parallel.",
            help: { rule: "Acute and obtuse partner angles on a line add to 180 degrees.", steps: ["Identify the acute angle.", "Calculate 180 - 42.", "The obtuse angle is 138 degrees."] }
        },
        {
            id: "m7c-sa-130", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One angle is 103 degrees. Find the alternate angle and one adjacent angle.",
            sample: "The alternate angle is 103 degrees because alternate angles are equal. The adjacent angle is 77 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use the alternate-angle rule and the straight-line rule together.", steps: ["Copy the given angle to the alternate position.", "Calculate 180 - 103 for the adjacent angle.", "So the adjacent angle is 77 degrees."] }
        },
        {
            id: "m7c-sa-131", topic: "angle-parallel", marks: 5,
            q: "Explain why co-interior angles formed by a transversal on parallel lines are supplementary. Explain each step.",
            sample: "When the lines are parallel, corresponding and alternate angles repeat in matching positions. The two co-interior angles sit on the same side of the transversal inside the parallel lines, and together they make a straight angle. That is why they add to 180 degrees.",
            help: { rule: "Connect co-interior angles to the straight-line total of 180 degrees.", steps: ["State that the lines are parallel.", "Note that the angles sit inside the lines on the same side of the transversal.", "Explain that they add to 180 degrees because they form a straight angle."] }
        },
        {
            id: "m7c-sa-132", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One corresponding angle is 105 degrees. Find a co-interior angle on the same side of the transversal.",
            sample: "The matching corresponding angle is 105 degrees. Co-interior angles add to 180 degrees, so the co-interior angle is 75 degrees.",
            help: { rule: "Use equal corresponding angles, then use the co-interior angle sum.", steps: ["Copy the given angle to the corresponding position.", "Write angle + co-interior angle = 180 degrees.", "The co-interior angle is 75 degrees."] }
        },
        {
            id: "m7c-sa-133", topic: "angle-parallel", marks: 5,
            q: "Explain how you know that alternate angles formed by a transversal on parallel lines are equal. Check that your result is sensible.",
            sample: "When two lines are parallel, the same angle pattern repeats at each intersection. Alternate angles sit between the parallel lines on opposite sides of the transversal, so they match in size. This is one of the standard angle rules for parallel lines.",
            help: { rule: "State the position of alternate angles and the fact that the lines are parallel.", steps: ["Identify the pair as alternate angles.", "Mention that the lines are parallel.", "State that alternate angles on parallel lines are equal."] }
        },
        {
            id: "m7c-sa-134", topic: "angle-parallel", marks: 5,
            q: "Parallel lines are cut by a transversal and one acute angle is 82 degrees. Find an obtuse angle in the pattern and explain why.",
            sample: "An obtuse angle is supplementary to the acute angle, so it measures 180 - 82 = 98 degrees. The same acute and obtuse values repeat because the lines are parallel.",
            help: { rule: "Acute and obtuse partner angles on a line add to 180 degrees.", steps: ["Identify the acute angle.", "Calculate 180 - 82.", "The obtuse angle is 98 degrees."] }
        },
        {
            id: "m7c-sa-135", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One angle is 76 degrees. Find the alternate angle and one adjacent angle.",
            sample: "The alternate angle is 76 degrees because alternate angles are equal. The adjacent angle is 104 degrees because angles on a straight line add to 180 degrees.",
            help: { rule: "Use the alternate-angle rule and the straight-line rule together.", steps: ["Copy the given angle to the alternate position.", "Calculate 180 - 76 for the adjacent angle.", "So the adjacent angle is 104 degrees."] }
        },
        {
            id: "m7c-sa-136", topic: "angle-parallel", marks: 5,
            q: "Explain why co-interior angles formed by a transversal on parallel lines are supplementary. Check that your result is sensible.",
            sample: "When the lines are parallel, corresponding and alternate angles repeat in matching positions. The two co-interior angles sit on the same side of the transversal inside the parallel lines, and together they make a straight angle. That is why they add to 180 degrees.",
            help: { rule: "Connect co-interior angles to the straight-line total of 180 degrees.", steps: ["State that the lines are parallel.", "Note that the angles sit inside the lines on the same side of the transversal.", "Explain that they add to 180 degrees because they form a straight angle."] }
        },
        {
            id: "m7c-sa-137", topic: "angle-parallel", marks: 5,
            q: "Two parallel lines are cut by a transversal. One corresponding angle is 98 degrees. Find a co-interior angle on the same side of the transversal. Show your working.",
            sample: "The matching corresponding angle is 98 degrees. Co-interior angles add to 180 degrees, so the co-interior angle is 82 degrees.",
            help: { rule: "Use equal corresponding angles, then use the co-interior angle sum.", steps: ["Copy the given angle to the corresponding position.", "Write angle + co-interior angle = 180 degrees.", "The co-interior angle is 82 degrees."] }
        },
        {
            id: "m7c-sa-138", topic: "angle-parallel", marks: 5,
            q: "Explain how you know that alternate angles formed by a transversal on parallel lines are equal. Write the answer in simplest form if needed.",
            sample: "When two lines are parallel, the same angle pattern repeats at each intersection. Alternate angles sit between the parallel lines on opposite sides of the transversal, so they match in size. This is one of the standard angle rules for parallel lines.",
            help: { rule: "State the position of alternate angles and the fact that the lines are parallel.", steps: ["Identify the pair as alternate angles.", "Mention that the lines are parallel.", "State that alternate angles on parallel lines are equal."] }
        },

        {
            id: "m7c-sa-9", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 3/5: decimal = ?, percentage = ?",
            sample: "3/5 = 0.6 = 60%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["3 / 5 = 0.6.", "Multiply 0.6 by 100.", "So the percentage is 60%."] }
        },
        {
            id: "m7c-sa-12", topic: "fdp-conversions", marks: 4,
            q: "Write 0.375 as a fraction in simplest form.",
            sample: "0.375 = 375/1000 = 3/8.",
            help: { rule: "Write the decimal as a fraction over a power of 10, then simplify.", steps: ["0.375 = 375/1000.", "Divide numerator and denominator by 125.", "The simplest form is 3/8."] }
        },
        {
            id: "m7c-sa-139", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 3/4: decimal = ?, percentage = ?",
            sample: "3/4 = 0.75 = 75%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["Divide 3 by 4 to get 0.75.", "Multiply 0.75 by 100.", "So the percentage is 75%."] }
        },
        {
            id: "m7c-sa-140", topic: "fdp-conversions", marks: 4,
            q: "Write 0.8 as a fraction in simplest form.",
            sample: "0.8 = 40/50 = 4/5. In simplest form it is 4/5.",
            help: { rule: "Write the decimal as a fraction over a power of 10, then simplify.", steps: ["Place the decimal over 10, 100 or 1000.", "Simplify the fraction by dividing by a common factor.", "The simplest form is 4/5."] }
        },
        {
            id: "m7c-sa-141", topic: "fdp-conversions", marks: 4,
            q: "Write 87.5% as a decimal and as a fraction in simplest form.",
            sample: "87.5% = 0.875 = 7/8.",
            help: { rule: "Percent means out of 100.", steps: ["Write 87.5% as 87.5/100.", "Convert that to 0.875.", "Simplify the fraction to 7/8."] }
        },
        {
            id: "m7c-sa-142", topic: "fdp-conversions", marks: 4,
            q: "Which is greater: 4/5 or 30%? Show how you know.",
            sample: "4/5 = 80%. Compare 80% and 30%. 4/5 is greater.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Convert 4/5 to 80%.", "Compare 80% and 30%.", "State which value is greater."] }
        },
        {
            id: "m7c-sa-143", topic: "fdp-conversions", marks: 4,
            q: "Simplify 2/20 and give its decimal form.",
            sample: "2/20 simplifies to 1/10. As a decimal, 1/10 = 0.1.",
            help: { rule: "Simplify first, then convert if needed.", steps: ["Divide numerator and denominator by the greatest common factor.", "Write the simplified fraction as 1/10.", "Convert 1/10 to 0.1."] }
        },
        {
            id: "m7c-sa-144", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 1/8: decimal = ?, percentage = ?",
            sample: "1/8 = 0.125 = 12.5%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["Divide 1 by 8 to get 0.125.", "Multiply 0.125 by 100.", "So the percentage is 12.5%."] }
        },
        {
            id: "m7c-sa-145", topic: "fdp-conversions", marks: 4,
            q: "Write 0.1 as a fraction in simplest form.",
            sample: "0.1 = 1/10 = 1/10. In simplest form it is 1/10.",
            help: { rule: "Write the decimal as a fraction over a power of 10, then simplify.", steps: ["Place the decimal over 10, 100 or 1000.", "Simplify the fraction by dividing by a common factor.", "The simplest form is 1/10."] }
        },
        {
            id: "m7c-sa-146", topic: "fdp-conversions", marks: 4,
            q: "Write 5% as a decimal and as a fraction in simplest form.",
            sample: "5% = 0.05 = 1/20.",
            help: { rule: "Percent means out of 100.", steps: ["Write 5% as 5/100.", "Convert that to 0.05.", "Simplify the fraction to 1/20."] }
        },
        {
            id: "m7c-sa-147", topic: "fdp-conversions", marks: 4,
            q: "Which is greater: 1/10 or 35%? Show how you know.",
            sample: "1/10 = 10%. Compare 10% and 35%. 35% is greater.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Convert 1/10 to 10%.", "Compare 10% and 35%.", "State which value is greater."] }
        },
        {
            id: "m7c-sa-148", topic: "fdp-conversions", marks: 4,
            q: "Simplify 9/60 and give its decimal form.",
            sample: "9/60 simplifies to 3/20. As a decimal, 3/20 = 0.15.",
            help: { rule: "Simplify first, then convert if needed.", steps: ["Divide numerator and denominator by the greatest common factor.", "Write the simplified fraction as 3/20.", "Convert 3/20 to 0.15."] }
        },
        {
            id: "m7c-sa-149", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 3/10: decimal = ?, percentage = ?",
            sample: "3/10 = 0.3 = 30%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["Divide 3 by 10 to get 0.3.", "Multiply 0.3 by 100.", "So the percentage is 30%."] }
        },
        {
            id: "m7c-sa-150", topic: "fdp-conversions", marks: 4,
            q: "Write 0.15 as a fraction in simplest form.",
            sample: "0.15 = 3/20 = 3/20. In simplest form it is 3/20.",
            help: { rule: "Write the decimal as a fraction over a power of 10, then simplify.", steps: ["Place the decimal over 10, 100 or 1000.", "Simplify the fraction by dividing by a common factor.", "The simplest form is 3/20."] }
        },
        {
            id: "m7c-sa-151", topic: "fdp-conversions", marks: 4,
            q: "Write 85% as a decimal and as a fraction in simplest form.",
            sample: "85% = 0.85 = 17/20.",
            help: { rule: "Percent means out of 100.", steps: ["Write 85% as 85/100.", "Convert that to 0.85.", "Simplify the fraction to 17/20."] }
        },
        {
            id: "m7c-sa-152", topic: "fdp-conversions", marks: 4,
            q: "Which is greater: 3/20 or 12%? Show how you know.",
            sample: "3/20 = 15%. Compare 15% and 12%. 3/20 is greater.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Convert 3/20 to 15%.", "Compare 15% and 12%.", "State which value is greater."] }
        },
        {
            id: "m7c-sa-153", topic: "fdp-conversions", marks: 4,
            q: "Simplify 4/100 and give its decimal form.",
            sample: "4/100 simplifies to 1/25. As a decimal, 1/25 = 0.04.",
            help: { rule: "Simplify first, then convert if needed.", steps: ["Divide numerator and denominator by the greatest common factor.", "Write the simplified fraction as 1/25.", "Convert 1/25 to 0.04."] }
        },
        {
            id: "m7c-sa-154", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 7/20: decimal = ?, percentage = ?",
            sample: "7/20 = 0.35 = 35%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["Divide 7 by 20 to get 0.35.", "Multiply 0.35 by 100.", "So the percentage is 35%."] }
        },
        {
            id: "m7c-sa-155", topic: "fdp-conversions", marks: 4,
            q: "Write 0.04 as a fraction in simplest form.",
            sample: "0.04 = 1/25 = 1/25. In simplest form it is 1/25.",
            help: { rule: "Write the decimal as a fraction over a power of 10, then simplify.", steps: ["Place the decimal over 10, 100 or 1000.", "Simplify the fraction by dividing by a common factor.", "The simplest form is 1/25."] }
        },
        {
            id: "m7c-sa-156", topic: "fdp-conversions", marks: 4,
            q: "Write 68% as a decimal and as a fraction in simplest form.",
            sample: "68% = 0.68 = 17/25.",
            help: { rule: "Percent means out of 100.", steps: ["Write 68% as 68/100.", "Convert that to 0.68.", "Simplify the fraction to 17/25."] }
        },
        {
            id: "m7c-sa-157", topic: "fdp-conversions", marks: 4,
            q: "Which is greater: 1/25 or 25%? Show how you know.",
            sample: "1/25 = 4%. Compare 4% and 25%. 25% is greater.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Convert 1/25 to 4%.", "Compare 4% and 25%.", "State which value is greater."] }
        },
        {
            id: "m7c-sa-158", topic: "fdp-conversions", marks: 4,
            q: "Simplify 5/10 and give its decimal form.",
            sample: "5/10 simplifies to 1/2. As a decimal, 1/2 = 0.5.",
            help: { rule: "Simplify first, then convert if needed.", steps: ["Divide numerator and denominator by the greatest common factor.", "Write the simplified fraction as 1/2.", "Convert 1/2 to 0.5."] }
        },
        {
            id: "m7c-sa-159", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 3/25: decimal = ?, percentage = ?",
            sample: "3/25 = 0.12 = 12%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["Divide 3 by 25 to get 0.12.", "Multiply 0.12 by 100.", "So the percentage is 12%."] }
        },
        {
            id: "m7c-sa-160", topic: "fdp-conversions", marks: 4,
            q: "Write 0.5 as a fraction in simplest form.",
            sample: "0.5 = 10/20 = 1/2. In simplest form it is 1/2.",
            help: { rule: "Write the decimal as a fraction over a power of 10, then simplify.", steps: ["Place the decimal over 10, 100 or 1000.", "Simplify the fraction by dividing by a common factor.", "The simplest form is 1/2."] }
        },
        {
            id: "m7c-sa-161", topic: "fdp-conversions", marks: 4,
            q: "Write 40% as a decimal and as a fraction in simplest form.",
            sample: "40% = 0.4 = 2/5.",
            help: { rule: "Percent means out of 100.", steps: ["Write 40% as 40/100.", "Convert that to 0.4.", "Simplify the fraction to 2/5."] }
        },
        {
            id: "m7c-sa-162", topic: "fdp-conversions", marks: 4,
            q: "Which is greater: 1/2 or 80%? Show how you know.",
            sample: "1/2 = 50%. Compare 50% and 80%. 80% is greater.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Convert 1/2 to 50%.", "Compare 50% and 80%.", "State which value is greater."] }
        },
        {
            id: "m7c-sa-163", topic: "fdp-conversions", marks: 4,
            q: "Simplify 6/10 and give its decimal form.",
            sample: "6/10 simplifies to 3/5. As a decimal, 3/5 = 0.6.",
            help: { rule: "Simplify first, then convert if needed.", steps: ["Divide numerator and denominator by the greatest common factor.", "Write the simplified fraction as 3/5.", "Convert 3/5 to 0.6."] }
        },
        {
            id: "m7c-sa-164", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 1/4: decimal = ?, percentage = ?",
            sample: "1/4 = 0.25 = 25%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["Divide 1 by 4 to get 0.25.", "Multiply 0.25 by 100.", "So the percentage is 25%."] }
        },
        {
            id: "m7c-sa-165", topic: "fdp-conversions", marks: 4,
            q: "Write 0.6 as a fraction in simplest form.",
            sample: "0.6 = 30/50 = 3/5. In simplest form it is 3/5.",
            help: { rule: "Write the decimal as a fraction over a power of 10, then simplify.", steps: ["Place the decimal over 10, 100 or 1000.", "Simplify the fraction by dividing by a common factor.", "The simplest form is 3/5."] }
        },
        {
            id: "m7c-sa-166", topic: "fdp-conversions", marks: 4,
            q: "Write 62.5% as a decimal and as a fraction in simplest form.",
            sample: "62.5% = 0.625 = 5/8.",
            help: { rule: "Percent means out of 100.", steps: ["Write 62.5% as 62.5/100.", "Convert that to 0.625.", "Simplify the fraction to 5/8."] }
        },
        {
            id: "m7c-sa-167", topic: "fdp-conversions", marks: 4,
            q: "Which is greater: 3/5 or 10%? Show how you know.",
            sample: "3/5 = 60%. Compare 60% and 10%. 3/5 is greater.",
            help: { rule: "Convert both values to the same form before comparing.", steps: ["Convert 3/5 to 60%.", "Compare 60% and 10%.", "State which value is greater."] }
        },
        {
            id: "m7c-sa-168", topic: "fdp-conversions", marks: 4,
            q: "Simplify 21/24 and give its decimal form.",
            sample: "21/24 simplifies to 7/8. As a decimal, 7/8 = 0.875.",
            help: { rule: "Simplify first, then convert if needed.", steps: ["Divide numerator and denominator by the greatest common factor.", "Write the simplified fraction as 7/8.", "Convert 7/8 to 0.875."] }
        },
        {
            id: "m7c-sa-169", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 4/5: decimal = ?, percentage = ?",
            sample: "4/5 = 0.8 = 80%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["Divide 4 by 5 to get 0.8.", "Multiply 0.8 by 100.", "So the percentage is 80%."] }
        },

        {
            id: "m7c-sa-10", topic: "fdp-operations", marks: 4,
            q: "Calculate: 5/8 + 1/4.",
            sample: "Convert 1/4 to 2/8. Then 5/8 + 2/8 = 7/8.",
            help: { rule: "Fractions need a common denominator before adding.", steps: ["Rewrite 1/4 as 2/8.", "Add the numerators: 5 + 2.", "The answer is 7/8."] }
        },
        {
            id: "m7c-sa-11", topic: "fdp-operations", marks: 5,
            q: "A shirt costs $48 and is reduced by 25%. Find the discount and the sale price.",
            sample: "25% of 48 is 12, so the discount is $12. The sale price is 48 - 12 = $36.",
            help: { rule: "Find the percentage amount first, then subtract from the original price.", steps: ["25% = 1/4.", "Find 1/4 of $48 = $12.", "Subtract: $48 - $12 = $36."] }
        },
        {
            id: "m7c-sa-170", topic: "fdp-operations", marks: 4,
            q: "Calculate: 1/4 + 1/4.",
            sample: "1/4 + 1/4 = 2/4 = 1/2.",
            help: { rule: "Find a common denominator before adding fractions.", steps: ["The denominators are already the same.", "Add the numerators to get 2/4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-sa-171", topic: "fdp-operations", marks: 4,
            q: "Calculate: 4.5 - 3.27.",
            sample: "Line up the decimals: 4.5 - 3.27 = 1.23.",
            help: { rule: "Line up decimal points when subtracting decimals.", steps: ["Write the decimals in columns.", "Subtract hundredths, tenths and ones.", "The answer is 1.23."] }
        },
        {
            id: "m7c-sa-172", topic: "fdp-operations", marks: 4,
            q: "Find 25% of 72.",
            sample: "25% of 72 is 18.",
            help: { rule: "A percentage of an amount can be found by multiplying by the decimal or fraction form.", steps: ["Convert 25% to a useful form.", "Multiply by 72.", "The answer is 18."] }
        },
        {
            id: "m7c-sa-173", topic: "fdp-operations", marks: 5,
            q: "A bag costs $88 and is reduced by 30%. Find the discount and the sale price.",
            sample: "30% of 88 is 26.4, so the discount is $26.4. The sale price is 88 - 26.4 = $61.6.",
            help: { rule: "Find the percentage amount first, then subtract it from the original price.", steps: ["Find 30% of $88.", "That amount is the discount.", "Subtract it from $88 to get $61.6."] }
        },
        {
            id: "m7c-sa-174", topic: "fdp-operations", marks: 5,
            q: "Which value is largest: 4/5, 0.875, 90%? Show how you know.",
            sample: "Convert each value to a decimal or percentage. 90% has the greatest value, so it is the largest.",
            help: { rule: "Convert mixed forms to one common form before comparing.", steps: ["Rewrite each fraction, decimal or percentage in the same form.", "Compare the converted values.", "State that 90% is the largest."] }
        },
        {
            id: "m7c-sa-175", topic: "fdp-operations", marks: 5,
            q: "A container holds 32 L of juice. If 3/4 of it is used, how much is used and how much remains?",
            sample: "3/4 of 32 L is 24 L. The amount remaining is 32 - 24 = 8 L.",
            help: { rule: "Find the fractional amount first, then subtract from the total.", steps: ["Calculate 3/4 of 32.", "That gives 24 L used.", "Subtract from 32 to get 8 L remaining."] }
        },
        {
            id: "m7c-sa-176", topic: "fdp-operations", marks: 4,
            q: "Calculate: 1/8 + 1/8.",
            sample: "1/8 + 1/8 = 2/8 = 1/4.",
            help: { rule: "Find a common denominator before adding fractions.", steps: ["The denominators are already the same.", "Add the numerators to get 2/8.", "Simplify to 1/4."] }
        },
        {
            id: "m7c-sa-177", topic: "fdp-operations", marks: 4,
            q: "Calculate: 3.5 - 3.27.",
            sample: "Line up the decimals: 3.5 - 3.27 = 0.23.",
            help: { rule: "Line up decimal points when subtracting decimals.", steps: ["Write the decimals in columns.", "Subtract hundredths, tenths and ones.", "The answer is 0.23."] }
        },
        {
            id: "m7c-sa-178", topic: "fdp-operations", marks: 4,
            q: "Find 40% of 96.",
            sample: "40% of 96 is 38.400000000000006.",
            help: { rule: "A percentage of an amount can be found by multiplying by the decimal or fraction form.", steps: ["Convert 40% to a useful form.", "Multiply by 96.", "The answer is 38.400000000000006."] }
        },
        {
            id: "m7c-sa-179", topic: "fdp-operations", marks: 5,
            q: "A bag costs $120 and is reduced by 40%. Find the discount and the sale price.",
            sample: "40% of 120 is 48, so the discount is $48. The sale price is 120 - 48 = $72.",
            help: { rule: "Find the percentage amount first, then subtract it from the original price.", steps: ["Find 40% of $120.", "That amount is the discount.", "Subtract it from $120 to get $72."] }
        },
        {
            id: "m7c-sa-180", topic: "fdp-operations", marks: 5,
            q: "Which value is largest: 3/10, 0.15, 85%? Show how you know.",
            sample: "Convert each value to a decimal or percentage. 85% has the greatest value, so it is the largest.",
            help: { rule: "Convert mixed forms to one common form before comparing.", steps: ["Rewrite each fraction, decimal or percentage in the same form.", "Compare the converted values.", "State that 85% is the largest."] }
        },
        {
            id: "m7c-sa-181", topic: "fdp-operations", marks: 5,
            q: "A container holds 72 L of juice. If 5/8 of it is used, how much is used and how much remains?",
            sample: "5/8 of 72 L is 45 L. The amount remaining is 72 - 45 = 27 L.",
            help: { rule: "Find the fractional amount first, then subtract from the total.", steps: ["Calculate 5/8 of 72.", "That gives 45 L used.", "Subtract from 72 to get 27 L remaining."] }
        },
        {
            id: "m7c-sa-182", topic: "fdp-operations", marks: 4,
            q: "Calculate: 1/4 + 1/4. Show your working.",
            sample: "1/4 + 1/4 = 2/4 = 1/2.",
            help: { rule: "Find a common denominator before adding fractions.", steps: ["The denominators are already the same.", "Add the numerators to get 2/4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-sa-183", topic: "fdp-operations", marks: 4,
            q: "Calculate: 9.5 - 3.27.",
            sample: "Line up the decimals: 9.5 - 3.27 = 6.23.",
            help: { rule: "Line up decimal points when subtracting decimals.", steps: ["Write the decimals in columns.", "Subtract hundredths, tenths and ones.", "The answer is 6.23."] }
        },
        {
            id: "m7c-sa-184", topic: "fdp-operations", marks: 4,
            q: "Find 50% of 120.",
            sample: "50% of 120 is 60.",
            help: { rule: "A percentage of an amount can be found by multiplying by the decimal or fraction form.", steps: ["Convert 50% to a useful form.", "Multiply by 120.", "The answer is 60."] }
        },
        {
            id: "m7c-sa-185", topic: "fdp-operations", marks: 5,
            q: "A bag costs $42 and is reduced by 10%. Find the discount and the sale price.",
            sample: "10% of 42 is 4.2, so the discount is $4.2. The sale price is 42 - 4.2 = $37.8.",
            help: { rule: "Find the percentage amount first, then subtract it from the original price.", steps: ["Find 10% of $42.", "That amount is the discount.", "Subtract it from $42 to get $37.8."] }
        },
        {
            id: "m7c-sa-186", topic: "fdp-operations", marks: 5,
            q: "Which value is largest: 9/20, 0.12, 50%? Show how you know.",
            sample: "Convert each value to a decimal or percentage. 50% has the greatest value, so it is the largest.",
            help: { rule: "Convert mixed forms to one common form before comparing.", steps: ["Rewrite each fraction, decimal or percentage in the same form.", "Compare the converted values.", "State that 50% is the largest."] }
        },
        {
            id: "m7c-sa-187", topic: "fdp-operations", marks: 5,
            q: "A container holds 40 L of juice. If 3/4 of it is used, how much is used and how much remains?",
            sample: "3/4 of 40 L is 30 L. The amount remaining is 40 - 30 = 10 L.",
            help: { rule: "Find the fractional amount first, then subtract from the total.", steps: ["Calculate 3/4 of 40.", "That gives 30 L used.", "Subtract from 40 to get 10 L remaining."] }
        },
        {
            id: "m7c-sa-188", topic: "fdp-operations", marks: 4,
            q: "Calculate: 1/8 + 1/8. Show your working.",
            sample: "1/8 + 1/8 = 2/8 = 1/4.",
            help: { rule: "Find a common denominator before adding fractions.", steps: ["The denominators are already the same.", "Add the numerators to get 2/8.", "Simplify to 1/4."] }
        },
        {
            id: "m7c-sa-189", topic: "fdp-operations", marks: 4,
            q: "Calculate: 8.5 - 3.27.",
            sample: "Line up the decimals: 8.5 - 3.27 = 5.23.",
            help: { rule: "Line up decimal points when subtracting decimals.", steps: ["Write the decimals in columns.", "Subtract hundredths, tenths and ones.", "The answer is 5.23."] }
        },
        {
            id: "m7c-sa-190", topic: "fdp-operations", marks: 4,
            q: "Find 10% of 48.",
            sample: "10% of 48 is 4.800000000000001.",
            help: { rule: "A percentage of an amount can be found by multiplying by the decimal or fraction form.", steps: ["Convert 10% to a useful form.", "Multiply by 48.", "The answer is 4.800000000000001."] }
        },
        {
            id: "m7c-sa-191", topic: "fdp-operations", marks: 5,
            q: "A bag costs $56 and is reduced by 20%. Find the discount and the sale price.",
            sample: "20% of 56 is 11.200000000000001, so the discount is $11.2. The sale price is 56 - 11.200000000000001 = $44.8.",
            help: { rule: "Find the percentage amount first, then subtract it from the original price.", steps: ["Find 20% of $56.", "That amount is the discount.", "Subtract it from $56 to get $44.8."] }
        },
        {
            id: "m7c-sa-192", topic: "fdp-operations", marks: 5,
            q: "Which value is largest: 11/25, 0.75, 80%? Show how you know.",
            sample: "Convert each value to a decimal or percentage. 80% has the greatest value, so it is the largest.",
            help: { rule: "Convert mixed forms to one common form before comparing.", steps: ["Rewrite each fraction, decimal or percentage in the same form.", "Compare the converted values.", "State that 80% is the largest."] }
        },
        {
            id: "m7c-sa-193", topic: "fdp-operations", marks: 5,
            q: "A container holds 88 L of juice. If 5/8 of it is used, how much is used and how much remains?",
            sample: "5/8 of 88 L is 55 L. The amount remaining is 88 - 55 = 33 L.",
            help: { rule: "Find the fractional amount first, then subtract from the total.", steps: ["Calculate 5/8 of 88.", "That gives 55 L used.", "Subtract from 88 to get 33 L remaining."] }
        },
        {
            id: "m7c-sa-194", topic: "fdp-operations", marks: 4,
            q: "Calculate: 1/4 + 1/4. Give the final answer clearly.",
            sample: "1/4 + 1/4 = 2/4 = 1/2.",
            help: { rule: "Find a common denominator before adding fractions.", steps: ["The denominators are already the same.", "Add the numerators to get 2/4.", "Simplify to 1/2."] }
        },
        {
            id: "m7c-sa-195", topic: "fdp-operations", marks: 4,
            q: "Calculate: 7.5 - 3.27.",
            sample: "Line up the decimals: 7.5 - 3.27 = 4.23.",
            help: { rule: "Line up decimal points when subtracting decimals.", steps: ["Write the decimals in columns.", "Subtract hundredths, tenths and ones.", "The answer is 4.23."] }
        },
        {
            id: "m7c-sa-196", topic: "fdp-operations", marks: 4,
            q: "Find 20% of 60.",
            sample: "20% of 60 is 12.",
            help: { rule: "A percentage of an amount can be found by multiplying by the decimal or fraction form.", steps: ["Convert 20% to a useful form.", "Multiply by 60.", "The answer is 12."] }
        },
        {
            id: "m7c-sa-197", topic: "fdp-operations", marks: 5,
            q: "A bag costs $64 and is reduced by 25%. Find the discount and the sale price.",
            sample: "25% of 64 is 16, so the discount is $16. The sale price is 64 - 16 = $48.",
            help: { rule: "Find the percentage amount first, then subtract it from the original price.", steps: ["Find 25% of $64.", "That amount is the discount.", "Subtract it from $64 to get $48."] }
        },
        {
            id: "m7c-sa-198", topic: "fdp-operations", marks: 5,
            q: "Which value is largest: 2/5, 0.375, 30%? Show how you know.",
            sample: "Convert each value to a decimal or percentage. 2/5 has the greatest value, so it is the largest.",
            help: { rule: "Convert mixed forms to one common form before comparing.", steps: ["Rewrite each fraction, decimal or percentage in the same form.", "Compare the converted values.", "State that 2/5 is the largest."] }
        },
        {
            id: "m7c-sa-199", topic: "fdp-operations", marks: 5,
            q: "A container holds 48 L of juice. If 3/4 of it is used, how much is used and how much remains?",
            sample: "3/4 of 48 L is 36 L. The amount remaining is 48 - 36 = 12 L.",
            help: { rule: "Find the fractional amount first, then subtract from the total.", steps: ["Calculate 3/4 of 48.", "That gives 36 L used.", "Subtract from 48 to get 12 L remaining."] }
        },
        {
            id: "m7c-sa-200", topic: "fdp-operations", marks: 4,
            q: "Calculate: 1/8 + 1/8. Give the final answer clearly.",
            sample: "1/8 + 1/8 = 2/8 = 1/4.",
            help: { rule: "Find a common denominator before adding fractions.", steps: ["The denominators are already the same.", "Add the numerators to get 2/8.", "Simplify to 1/4."] }
        }
    ],

    long: [
        {
            id: "m7c-la-1", topic: "integers-place-value", marks: 8,
            q: "A mountain trail starts at 240 m above sea level, drops 315 m into a valley, then rises 180 m to a lookout. What is the lookout's final elevation? Show how integers help solve the problem. (8 marks)",
            sample: "Use signed numbers for changes in height. Start at 240 m. Dropping 315 m gives 240 - 315 = -75 m, meaning the trail is 75 m below sea level. Rising 180 m gives -75 + 180 = 105 m. The lookout is 105 m above sea level. A strong answer uses correct integer notation and explains what the negative value means.",
            help: { rule: "Represent decreases with negative integers and increases with positive integers.", steps: ["Start at 240.", "Subtract 315 to model the drop.", "Add 180 to model the rise.", "State that the final elevation is 105 m above sea level."] }
        },
        {
            id: "m7c-la-7", topic: "integers-place-value", marks: 8,
            q: "A hiking path starts at 180 m above sea level, drops 210 m into a valley, then rises 140 m to a lookout. What is the lookout's final elevation? Show how integers help solve the problem. (8 marks)",
            sample: "Use signed numbers for the changes in height. Start at 180 m. Dropping 210 m gives 180 - 210 = -30 m. Rising 140 m gives -30 + 140 = 110 m. The lookout is 110 m above sea level. A strong answer uses correct integer notation and explains what any negative value means.",
            help: { rule: "Represent decreases with negative integers and increases with positive integers.", steps: ["Start at 180.", "Subtract 210 to model the drop, then add 140.", "State that the final elevation is 110 m."] }
        },
        {
            id: "m7c-la-8", topic: "integers-place-value", marks: 8,
            q: "Five towns record temperatures of -10, -3, 3, 7, 13 degrees. Order the temperatures from coldest to warmest, then state the opposite of the coldest temperature and explain what that opposite means on a number line. (8 marks)",
            sample: "From coldest to warmest the temperatures are -10, -3, 3, 7, 13 degrees. The coldest temperature is -10 degrees, so its opposite is 10 degrees. The opposite is the same distance from zero but on the positive side of the number line. A strong answer orders the integers correctly and explains the opposite clearly.",
            help: { rule: "Use the number line to order integers, then change the sign to find the opposite.", steps: ["List the temperatures from smallest to largest.", "Identify the coldest temperature as -10 degrees.", "Its opposite is 10 degrees because it is the same distance from zero on the other side."] }
        },
        {
            id: "m7c-la-9", topic: "integers-place-value", marks: 8,
            q: "A school records 42,086 library loans in one year and 19,753 in the next year. Identify the value of the digit 0 in 42,086, then decide which year had more loans and explain how place value helps you compare the numbers. (8 marks)",
            sample: "In 42,086, the digit 0 is in the hundreds place, so its value is 0. Comparing the numbers from left to right shows that 42,086 is greater, so that year had more library loans. A strong answer names the place value correctly and explains the comparison by looking at the highest-value places first.",
            help: { rule: "Use place value to read digits and compare large numbers.", steps: ["State that the digit 0 is in the hundreds place.", "Its value is 0.", "Compare the two numbers from the highest-value place to decide which is larger."] }
        },
        {
            id: "m7c-la-10", topic: "integers-place-value", marks: 8,
            q: "A hiking path starts at 285 m above sea level, drops 294 m into a valley, then rises 215 m to a lookout. What is the lookout's final elevation? Show how integers help solve the problem. (8 marks)",
            sample: "Use signed numbers for the changes in height. Start at 285 m. Dropping 294 m gives 285 - 294 = -9 m. Rising 215 m gives -9 + 215 = 206 m. The lookout is 206 m above sea level. A strong answer uses correct integer notation and explains what any negative value means.",
            help: { rule: "Represent decreases with negative integers and increases with positive integers.", steps: ["Start at 285.", "Subtract 294 to model the drop, then add 215.", "State that the final elevation is 206 m."] }
        },
        {
            id: "m7c-la-11", topic: "integers-place-value", marks: 8,
            q: "Five towns record temperatures of -13, -1, 2, 10, 16 degrees. Order the temperatures from coldest to warmest, then state the opposite of the coldest temperature and explain what that opposite means on a number line. (8 marks)",
            sample: "From coldest to warmest the temperatures are -13, -1, 2, 10, 16 degrees. The coldest temperature is -13 degrees, so its opposite is 13 degrees. The opposite is the same distance from zero but on the positive side of the number line. A strong answer orders the integers correctly and explains the opposite clearly.",
            help: { rule: "Use the number line to order integers, then change the sign to find the opposite.", steps: ["List the temperatures from smallest to largest.", "Identify the coldest temperature as -13 degrees.", "Its opposite is 13 degrees because it is the same distance from zero on the other side."] }
        },
        {
            id: "m7c-la-12", topic: "integers-place-value", marks: 8,
            q: "A school records 53,197 library loans in one year and 20,864 in the next year. Identify the value of the digit 5 in 53,197, then decide which year had more loans and explain how place value helps you compare the numbers. (8 marks)",
            sample: "In 53,197, the digit 5 is in the ten-thousands place, so its value is 50,000. Comparing the numbers from left to right shows that 53,197 is greater, so that year had more library loans. A strong answer names the place value correctly and explains the comparison by looking at the highest-value places first.",
            help: { rule: "Use place value to read digits and compare large numbers.", steps: ["State that the digit 5 is in the ten-thousands place.", "Its value is 50,000.", "Compare the two numbers from the highest-value place to decide which is larger."] }
        },
        {
            id: "m7c-la-13", topic: "integers-place-value", marks: 8,
            q: "A hiking path starts at 180 m above sea level, drops 238 m into a valley, then rises 190 m to a lookout. What is the lookout's final elevation? Show how integers help solve the problem. (8 marks)",
            sample: "Use signed numbers for the changes in height. Start at 180 m. Dropping 238 m gives 180 - 238 = -58 m. Rising 190 m gives -58 + 190 = 132 m. The lookout is 132 m above sea level. A strong answer uses correct integer notation and explains what any negative value means.",
            help: { rule: "Represent decreases with negative integers and increases with positive integers.", steps: ["Start at 180.", "Subtract 238 to model the drop, then add 190.", "State that the final elevation is 132 m."] }
        },

        {
            id: "m7c-la-2", topic: "integers-operations", marks: 8,
            q: "Explain how the sign rules for multiplying and dividing integers work, and use examples to show the result of positive x negative, negative x positive and negative x negative. (8 marks)",
            sample: "A positive times a negative is negative, and a negative times a positive is also negative because the signs are different. A negative times a negative is positive because two negatives make a positive. The same sign rules apply for division: same signs give a positive answer, different signs give a negative answer. Clear worked examples such as 3 x -4 = -12, -5 x 2 = -10 and -6 x -2 = 12 should be included.",
            help: { rule: "Same signs give positive results; different signs give negative results.", steps: ["State the sign rule clearly.", "Give at least three worked examples.", "Explain that the same rule applies to both multiplication and division."] }
        },
        {
            id: "m7c-la-14", topic: "integers-operations", marks: 8,
            q: "Explain how the sign rules for multiplying and dividing integers work, and use examples to show the result of 3 x -2, -3 x 2 and -4 x -2. (8 marks)",
            sample: "A positive multiplied by a negative is negative, and a negative multiplied by a positive is also negative because the signs are different. A negative multiplied by a negative is positive because the signs are the same. For example, 3 x -2 = -6, -3 x 2 = -6 and -4 x -2 = 8. The same sign rules apply to division: same signs give a positive answer and different signs give a negative answer.",
            help: { rule: "Same signs give positive results; different signs give negative results.", steps: ["State the sign rule clearly.", "Use each example to show the rule in action.", "Explain that division follows the same sign pattern."] }
        },
        {
            id: "m7c-la-15", topic: "integers-operations", marks: 8,
            q: "A submarine is at -13 m. It rises 12 m, then dives 10 m. What is its final position? Explain each integer step in your working. (8 marks)",
            sample: "Start at -13 m. Rising 12 m means add 12, so -13 + 12 = -1 m. Diving 10 m means subtract 10, so -1 - 10 = -11 m. The submarine finishes at -11 m. A strong answer explains why the rise is positive and the dive is negative.",
            help: { rule: "Translate the context into positive and negative integer changes.", steps: ["Write the starting position.", "Add 12 for the rise and subtract 10 for the dive.", "State that the final position is -11 m."] }
        },
        {
            id: "m7c-la-16", topic: "integers-operations", marks: 8,
            q: "A game score starts at -18. The player loses 8 points, gains 17 points and then receives a bonus of 10 points. Work out the final score and explain your integer calculations. (8 marks)",
            sample: "Start at -18. Losing 8 points gives -26. Gaining 17 points gives -9. Adding the bonus 10 points gives 1. The final score is 1. A strong answer shows each step and explains why losses are negative changes and gains are positive changes.",
            help: { rule: "Keep track of each positive and negative change in order.", steps: ["Write the starting score.", "Apply the loss, then the gains, one step at a time.", "The final score is 1."] }
        },
        {
            id: "m7c-la-17", topic: "integers-operations", marks: 8,
            q: "Explain how the sign rules for multiplying and dividing integers work, and use examples to show the result of 6 x -8, -6 x 8 and -7 x -8. (8 marks)",
            sample: "A positive multiplied by a negative is negative, and a negative multiplied by a positive is also negative because the signs are different. A negative multiplied by a negative is positive because the signs are the same. For example, 6 x -8 = -48, -6 x 8 = -48 and -7 x -8 = 56. The same sign rules apply to division: same signs give a positive answer and different signs give a negative answer.",
            help: { rule: "Same signs give positive results; different signs give negative results.", steps: ["State the sign rule clearly.", "Use each example to show the rule in action.", "Explain that division follows the same sign pattern."] }
        },
        {
            id: "m7c-la-18", topic: "integers-operations", marks: 8,
            q: "A submarine is at -16 m. It rises 21 m, then dives 12 m. What is its final position? Explain each integer step in your working. (8 marks)",
            sample: "Start at -16 m. Rising 21 m means add 21, so -16 + 21 = 5 m. Diving 12 m means subtract 12, so 5 - 12 = -7 m. The submarine finishes at -7 m. A strong answer explains why the rise is positive and the dive is negative.",
            help: { rule: "Translate the context into positive and negative integer changes.", steps: ["Write the starting position.", "Add 21 for the rise and subtract 12 for the dive.", "State that the final position is -7 m."] }
        },
        {
            id: "m7c-la-19", topic: "integers-operations", marks: 8,
            q: "A game score starts at 10. The player loses 11 points, gains 14 points and then receives a bonus of 10 points. Work out the final score and explain your integer calculations. (8 marks)",
            sample: "Start at 10. Losing 11 points gives -1. Gaining 14 points gives 13. Adding the bonus 10 points gives 23. The final score is 23. A strong answer shows each step and explains why losses are negative changes and gains are positive changes.",
            help: { rule: "Keep track of each positive and negative change in order.", steps: ["Write the starting score.", "Apply the loss, then the gains, one step at a time.", "The final score is 23."] }
        },
        {
            id: "m7c-la-20", topic: "integers-operations", marks: 8,
            q: "Explain how the sign rules for multiplying and dividing integers work, and use examples to show the result of 9 x -6, -9 x 6 and -4 x -6. (8 marks)",
            sample: "A positive multiplied by a negative is negative, and a negative multiplied by a positive is also negative because the signs are different. A negative multiplied by a negative is positive because the signs are the same. For example, 9 x -6 = -54, -9 x 6 = -54 and -4 x -6 = 24. The same sign rules apply to division: same signs give a positive answer and different signs give a negative answer.",
            help: { rule: "Same signs give positive results; different signs give negative results.", steps: ["State the sign rule clearly.", "Use each example to show the rule in action.", "Explain that division follows the same sign pattern."] }
        },

        {
            id: "m7c-la-3", topic: "angle-basics", marks: 8,
            q: "A point is surrounded by four angles: 90 degrees, 47 degrees, 123 degrees and x. Find x and explain which angle relationship you used. Then identify the supplement of x. (8 marks)",
            sample: "Angles around a point add to 360 degrees. Add the known angles: 90 + 47 + 123 = 260 degrees. So x = 360 - 260 = 100 degrees. The supplement of x is 180 - 100 = 80 degrees. A strong answer names the angle relationship and shows clear working.",
            help: { rule: "Use angles around a point first, then use supplementary angles.", steps: ["Add the known angles.", "Subtract from 360 to find x.", "Subtract x from 180 to find its supplement."] }
        },
        {
            id: "m7c-la-21", topic: "angle-basics", marks: 8,
            q: "A point is surrounded by four angles: 90 degrees, 46 degrees, 118 degrees and x. Find x and explain which angle relationship you used. Then identify the supplement of x. (8 marks)",
            sample: "Angles around a point add to 360 degrees. Add the known angles: 90 + 46 + 118 = 254 degrees. So x = 360 - 254 = 106 degrees. The supplement of x is 180 - 106 = 74 degrees. A strong answer names the angle relationship and shows clear working.",
            help: { rule: "Use angles around a point first, then use supplementary angles.", steps: ["Add the known angles.", "Subtract from 360 to find x.", "Subtract x from 180 to find the supplement 74 degrees."] }
        },
        {
            id: "m7c-la-22", topic: "angle-basics", marks: 8,
            q: "Two straight lines cross and one angle is 53 degrees. Find the vertically opposite angle and the two adjacent angles. Explain the angle rules you used. (8 marks)",
            sample: "The vertically opposite angle is 53 degrees because vertically opposite angles are equal. Each adjacent angle is 127 degrees because angles on a straight line add to 180 degrees. So the four angles are 53 degrees, 127 degrees, 53 degrees and 127 degrees. A strong answer names both rules clearly.",
            help: { rule: "Use vertically opposite angles and straight-line angles together.", steps: ["Copy the given angle to the opposite position.", "Calculate 180 - 53 for the adjacent angles.", "State that both adjacent angles are 127 degrees."] }
        },
        {
            id: "m7c-la-23", topic: "angle-basics", marks: 8,
            q: "Explain the difference between complementary and supplementary angles. Then find both the complement and the supplement of 34 degrees. (8 marks)",
            sample: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The complement of 34 degrees is 56 degrees because 90 - 34 = 56. The supplement is 146 degrees because 180 - 34 = 146. A strong answer states both definitions and shows both calculations.",
            help: { rule: "Use 90 degrees for complements and 180 degrees for supplements.", steps: ["State the total for complementary angles and for supplementary angles.", "Calculate 90 - 34 and 180 - 34.", "Give the complement 56 degrees and supplement 146 degrees."] }
        },
        {
            id: "m7c-la-24", topic: "angle-basics", marks: 8,
            q: "A point is surrounded by four angles: 120 degrees, 73 degrees, 118 degrees and x. Find x and explain which angle relationship you used. Then identify the supplement of x. (8 marks)",
            sample: "Angles around a point add to 360 degrees. Add the known angles: 120 + 73 + 118 = 311 degrees. So x = 360 - 311 = 49 degrees. The supplement of x is 180 - 49 = 131 degrees. A strong answer names the angle relationship and shows clear working.",
            help: { rule: "Use angles around a point first, then use supplementary angles.", steps: ["Add the known angles.", "Subtract from 360 to find x.", "Subtract x from 180 to find the supplement 131 degrees."] }
        },
        {
            id: "m7c-la-25", topic: "angle-basics", marks: 8,
            q: "Two straight lines cross and one angle is 86 degrees. Find the vertically opposite angle and the two adjacent angles. Explain the angle rules you used. (8 marks)",
            sample: "The vertically opposite angle is 86 degrees because vertically opposite angles are equal. Each adjacent angle is 94 degrees because angles on a straight line add to 180 degrees. So the four angles are 86 degrees, 94 degrees, 86 degrees and 94 degrees. A strong answer names both rules clearly.",
            help: { rule: "Use vertically opposite angles and straight-line angles together.", steps: ["Copy the given angle to the opposite position.", "Calculate 180 - 86 for the adjacent angles.", "State that both adjacent angles are 94 degrees."] }
        },
        {
            id: "m7c-la-26", topic: "angle-basics", marks: 8,
            q: "Explain the difference between complementary and supplementary angles. Then find both the complement and the supplement of 58 degrees. (8 marks)",
            sample: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The complement of 58 degrees is 32 degrees because 90 - 58 = 32. The supplement is 122 degrees because 180 - 58 = 122. A strong answer states both definitions and shows both calculations.",
            help: { rule: "Use 90 degrees for complements and 180 degrees for supplements.", steps: ["State the total for complementary angles and for supplementary angles.", "Calculate 90 - 58 and 180 - 58.", "Give the complement 32 degrees and supplement 122 degrees."] }
        },
        {
            id: "m7c-la-27", topic: "angle-basics", marks: 8,
            q: "A point is surrounded by four angles: 110 degrees, 55 degrees, 118 degrees and x. Find x and explain which angle relationship you used. Then identify the supplement of x. (8 marks)",
            sample: "Angles around a point add to 360 degrees. Add the known angles: 110 + 55 + 118 = 283 degrees. So x = 360 - 283 = 77 degrees. The supplement of x is 180 - 77 = 103 degrees. A strong answer names the angle relationship and shows clear working.",
            help: { rule: "Use angles around a point first, then use supplementary angles.", steps: ["Add the known angles.", "Subtract from 360 to find x.", "Subtract x from 180 to find the supplement 103 degrees."] }
        },

        {
            id: "m7c-la-4", topic: "angle-parallel", marks: 10,
            q: "Two parallel lines are cut by a transversal. One acute angle is 64 degrees. Analyse the rest of the angle pattern and state the size of all the other acute and obtuse angles formed. Explain your reasoning. (10 marks)",
            sample: "With parallel lines, corresponding and alternate angles are equal, and co-interior angles add to 180 degrees. So every acute angle formed is 64 degrees. The obtuse angles are supplementary to 64 degrees, so they are 180 - 64 = 116 degrees. A strong answer explains that the pattern repeats at both intersections because the lines are parallel and uses correct angle language.",
            help: { rule: "Equal angles repeat through corresponding and alternate positions; supplementary angles fill the remaining spaces.", steps: ["State that all matching acute angles are 64 degrees.", "Calculate the obtuse angle: 180 - 64 = 116 degrees.", "Explain why the same values repeat across both intersections."] }
        },
        {
            id: "m7c-la-28", topic: "angle-parallel", marks: 10,
            q: "Two parallel lines are cut by a transversal. One acute angle is 48 degrees. Analyse the rest of the angle pattern and state the size of all the other acute and obtuse angles formed. Explain your reasoning. (10 marks)",
            sample: "With parallel lines, corresponding and alternate angles are equal, and co-interior angles add to 180 degrees. So every acute angle formed is 48 degrees. The obtuse angles are supplementary to 48 degrees, so they are 180 - 48 = 132 degrees. A strong answer explains that the pattern repeats at both intersections because the lines are parallel and uses correct angle language.",
            help: { rule: "Equal angles repeat through corresponding and alternate positions; supplementary angles fill the remaining spaces.", steps: ["State that all matching acute angles are equal to the given acute angle.", "Calculate the obtuse angle: 180 - 48 = 132.", "Explain why the same values repeat across both intersections."] }
        },
        {
            id: "m7c-la-29", topic: "angle-parallel", marks: 10,
            q: "Parallel lines are cut by a transversal and one obtuse angle is 109 degrees. Find a corresponding angle, an alternate angle and a co-interior angle. Explain why each answer is correct. (10 marks)",
            sample: "The corresponding angle is 109 degrees because corresponding angles on parallel lines are equal. The alternate angle is also 109 degrees because alternate angles are equal. The co-interior angle is 71 degrees because co-interior angles add to 180 degrees, so 180 - 109 = 71. A strong answer identifies each angle pair correctly and justifies each step.",
            help: { rule: "Use equal-angle rules first, then use the 180-degree co-interior rule.", steps: ["Copy the given angle to corresponding and alternate positions.", "Calculate 180 - 109 for the co-interior angle.", "Match each result to the correct angle relationship."] }
        },
        {
            id: "m7c-la-30", topic: "angle-parallel", marks: 10,
            q: "A diagram with parallel lines and a transversal shows one acute angle of 52 degrees. Explain how you would use corresponding, alternate and co-interior angle rules to describe the full angle pattern in the diagram. (10 marks)",
            sample: "The corresponding angles are all 52 degrees because they sit in matching positions. The alternate angles are also 52 degrees because alternate angles on parallel lines are equal. The co-interior angles are supplementary to the acute angle, so they are 128 degrees because 180 - 52 = 128. A strong response explains which rule matches each part of the pattern and shows that only two angle sizes appear.",
            help: { rule: "Describe which angles stay equal and which angles add to 180 degrees.", steps: ["State that corresponding angles are equal.", "State that alternate angles are equal.", "Use 180 - 52 = 128 for the co-interior angles."] }
        },
        {
            id: "m7c-la-31", topic: "angle-parallel", marks: 10,
            q: "Two parallel lines are cut by a transversal. One acute angle is 72 degrees. Analyse the rest of the angle pattern and state the size of all the other acute and obtuse angles formed. Explain your reasoning. (10 marks)",
            sample: "With parallel lines, corresponding and alternate angles are equal, and co-interior angles add to 180 degrees. So every acute angle formed is 72 degrees. The obtuse angles are supplementary to 72 degrees, so they are 180 - 72 = 108 degrees. A strong answer explains that the pattern repeats at both intersections because the lines are parallel and uses correct angle language.",
            help: { rule: "Equal angles repeat through corresponding and alternate positions; supplementary angles fill the remaining spaces.", steps: ["State that all matching acute angles are equal to the given acute angle.", "Calculate the obtuse angle: 180 - 72 = 108.", "Explain why the same values repeat across both intersections."] }
        },
        {
            id: "m7c-la-32", topic: "angle-parallel", marks: 10,
            q: "Parallel lines are cut by a transversal and one obtuse angle is 130 degrees. Find a corresponding angle, an alternate angle and a co-interior angle. Explain why each answer is correct. (10 marks)",
            sample: "The corresponding angle is 130 degrees because corresponding angles on parallel lines are equal. The alternate angle is also 130 degrees because alternate angles are equal. The co-interior angle is 50 degrees because co-interior angles add to 180 degrees, so 180 - 130 = 50. A strong answer identifies each angle pair correctly and justifies each step.",
            help: { rule: "Use equal-angle rules first, then use the 180-degree co-interior rule.", steps: ["Copy the given angle to corresponding and alternate positions.", "Calculate 180 - 130 for the co-interior angle.", "Match each result to the correct angle relationship."] }
        },
        {
            id: "m7c-la-33", topic: "angle-parallel", marks: 10,
            q: "A diagram with parallel lines and a transversal shows one acute angle of 79 degrees. Explain how you would use corresponding, alternate and co-interior angle rules to describe the full angle pattern in the diagram. (10 marks)",
            sample: "The corresponding angles are all 79 degrees because they sit in matching positions. The alternate angles are also 79 degrees because alternate angles on parallel lines are equal. The co-interior angles are supplementary to the acute angle, so they are 101 degrees because 180 - 79 = 101. A strong response explains which rule matches each part of the pattern and shows that only two angle sizes appear.",
            help: { rule: "Describe which angles stay equal and which angles add to 180 degrees.", steps: ["State that corresponding angles are equal.", "State that alternate angles are equal.", "Use 180 - 79 = 101 for the co-interior angles."] }
        },
        {
            id: "m7c-la-34", topic: "angle-parallel", marks: 10,
            q: "Two parallel lines are cut by a transversal. One acute angle is 56 degrees. Analyse the rest of the angle pattern and state the size of all the other acute and obtuse angles formed. Explain your reasoning. (10 marks)",
            sample: "With parallel lines, corresponding and alternate angles are equal, and co-interior angles add to 180 degrees. So every acute angle formed is 56 degrees. The obtuse angles are supplementary to 56 degrees, so they are 180 - 56 = 124 degrees. A strong answer explains that the pattern repeats at both intersections because the lines are parallel and uses correct angle language.",
            help: { rule: "Equal angles repeat through corresponding and alternate positions; supplementary angles fill the remaining spaces.", steps: ["State that all matching acute angles are equal to the given acute angle.", "Calculate the obtuse angle: 180 - 56 = 124.", "Explain why the same values repeat across both intersections."] }
        },

        {
            id: "m7c-la-5", topic: "fdp-conversions", marks: 8,
            q: "A school sports survey shows that 3/8 of students prefer netball, 0.25 prefer soccer and 37.5% prefer athletics. Convert each result so they can be compared fairly, then decide which sport is most popular and which is least popular. (8 marks)",
            sample: "Convert all three values to the same form. 3/8 = 0.375 = 37.5%, 0.25 = 25%, and athletics is already 37.5%. So netball and athletics are equally most popular at 37.5%, while soccer is least popular at 25%. Strong answers may compare using fractions, decimals or percentages as long as the conversions are correct.",
            help: { rule: "Convert all values to the same form before comparing.", steps: ["Convert 3/8 to 0.375 or 37.5%.", "Convert 0.25 to 25%.", "Compare the three matching values and state the conclusion clearly."] }
        },
        {
            id: "m7c-la-35", topic: "fdp-conversions", marks: 8,
            q: "A survey shows that 1/4 of students prefer art, 0.6 prefer music and 62.5% prefer drama. Convert each result so they can be compared fairly, then decide which option is most popular and which is least popular. (8 marks)",
            sample: "Convert all three values to the same form. 1/4 = 0.25 = 25%, music is 60%, and drama is 0.625. Comparing the percentages shows that drama is most popular and art is least popular. A strong answer compares equivalent values, not the original mixed forms.",
            help: { rule: "Convert all values to the same form before comparing.", steps: ["Write each value as a percentage or decimal.", "Compare the converted values carefully.", "State that the largest value is 62.5% and the smallest value is 25%."] }
        },
        {
            id: "m7c-la-36", topic: "fdp-conversions", marks: 8,
            q: "Order these values from smallest to largest by converting them to a common form: 20/25, 0.375, 30%. (8 marks)",
            sample: "20/25 = 80%, 0.375 = 37.5%, and 30% stays as 30%. In order from smallest to largest the values are 30%, 0.375, 20/25. A strong answer shows the conversions before giving the final order.",
            help: { rule: "Use a common form such as percentages or decimals before ordering.", steps: ["Convert each value to a matching form.", "Compare the three converted values.", "Write the ordered list as 30%, 0.375, 20/25."] }
        },
        {
            id: "m7c-la-37", topic: "fdp-conversions", marks: 8,
            q: "A scoreboard shows one team scoring 20/32 of the possible points and another team scoring 0.3. Convert both values and decide which team scored the greater share. (8 marks)",
            sample: "20/32 simplifies to 5/8 and equals 0.625 or 62.5%. The other team scored 0.3, which is 30%. Comparing 0.625 and 0.3 shows that 20/32 represents the greater share. A strong answer converts both values and compares like with like.",
            help: { rule: "Simplify fractions and convert mixed forms before comparing.", steps: ["Simplify the fraction if needed.", "Convert both values to decimals or percentages.", "State which share is greater after the comparison."] }
        },
        {
            id: "m7c-la-38", topic: "fdp-conversions", marks: 8,
            q: "A survey shows that 2/5 of students prefer art, 0.375 prefer music and 30% prefer drama. Convert each result so they can be compared fairly, then decide which option is most popular and which is least popular. (8 marks)",
            sample: "Convert all three values to the same form. 2/5 = 0.4 = 40%, music is 37.5%, and drama is 0.3. Comparing the percentages shows that art is most popular and drama is least popular. A strong answer compares equivalent values, not the original mixed forms.",
            help: { rule: "Convert all values to the same form before comparing.", steps: ["Write each value as a percentage or decimal.", "Compare the converted values carefully.", "State that the largest value is 40% and the smallest value is 30%."] }
        },
        {
            id: "m7c-la-39", topic: "fdp-conversions", marks: 8,
            q: "Order these values from smallest to largest by converting them to a common form: 20/32, 0.1, 5%. (8 marks)",
            sample: "20/32 = 62.5%, 0.1 = 10%, and 5% stays as 5%. In order from smallest to largest the values are 5%, 0.1, 20/32. A strong answer shows the conversions before giving the final order.",
            help: { rule: "Use a common form such as percentages or decimals before ordering.", steps: ["Convert each value to a matching form.", "Compare the three converted values.", "Write the ordered list as 5%, 0.1, 20/32."] }
        },
        {
            id: "m7c-la-40", topic: "fdp-conversions", marks: 8,
            q: "A scoreboard shows one team scoring 9/30 of the possible points and another team scoring 0.05. Convert both values and decide which team scored the greater share. (8 marks)",
            sample: "9/30 simplifies to 3/10 and equals 0.3 or 30%. The other team scored 0.05, which is 5%. Comparing 0.3 and 0.05 shows that 9/30 represents the greater share. A strong answer converts both values and compares like with like.",
            help: { rule: "Simplify fractions and convert mixed forms before comparing.", steps: ["Simplify the fraction if needed.", "Convert both values to decimals or percentages.", "State which share is greater after the comparison."] }
        },
        {
            id: "m7c-la-41", topic: "fdp-conversions", marks: 8,
            q: "A survey shows that 1/8 of students prefer art, 0.1 prefer music and 5% prefer drama. Convert each result so they can be compared fairly, then decide which option is most popular and which is least popular. (8 marks)",
            sample: "Convert all three values to the same form. 1/8 = 0.125 = 12.5%, music is 10%, and drama is 0.05. Comparing the percentages shows that art is most popular and drama is least popular. A strong answer compares equivalent values, not the original mixed forms.",
            help: { rule: "Convert all values to the same form before comparing.", steps: ["Write each value as a percentage or decimal.", "Compare the converted values carefully.", "State that the largest value is 12.5% and the smallest value is 5%."] }
        },
        {
            id: "m7c-la-42", topic: "fdp-conversions", marks: 8,
            q: "Order these values from smallest to largest by converting them to a common form: 9/30, 0.9, 45%. (8 marks)",
            sample: "9/30 = 30%, 0.9 = 90%, and 45% stays as 45%. In order from smallest to largest the values are 9/30, 45%, 0.9. A strong answer shows the conversions before giving the final order.",
            help: { rule: "Use a common form such as percentages or decimals before ordering.", steps: ["Convert each value to a matching form.", "Compare the three converted values.", "Write the ordered list as 9/30, 45%, 0.9."] }
        },

        {
            id: "m7c-la-6", topic: "fdp-operations", marks: 10,
            q: "A family budget is split so that 35% goes to rent, 0.2 goes to food and 1/8 goes to transport. The total weekly budget is $960. Work out the amount spent on each category and how much remains for everything else. (10 marks)",
            sample: "Convert each proportion if needed: 35% = 0.35, food = 0.2 = 20%, transport = 1/8 = 0.125 = 12.5%. Rent: 0.35 x 960 = $336. Food: 0.2 x 960 = $192. Transport: 0.125 x 960 = $120. Total spent on these categories is $648. Remaining budget is 960 - 648 = $312. Strong responses show each calculation clearly and may also note the total proportion used is 67.5%.",
            help: { rule: "Convert each proportion to a useful form, find each amount, then subtract from the total.", steps: ["Find 35%, 20% and 1/8 of $960.", "Add the category amounts.", "Subtract from $960 to find what remains."] }
        },
        {
            id: "m7c-la-43", topic: "fdp-operations", marks: 10,
            q: "A weekly budget is split so that 25% goes to rent, 0.15 goes to food and 1/5 goes to transport. The total budget is $720. Work out the amount spent on each category and how much remains for everything else. (10 marks)",
            sample: "Convert each proportion if needed: 25% = 0.25, food is already 0.15, and 1/5 = 0.2 = 20%. Rent is $180, food is $108 and transport is $144. The total spent is $432, so the amount remaining is $288. Strong responses show each calculation clearly and may also note the total proportion used.",
            help: { rule: "Convert each proportion to a useful form, find each amount, then subtract from the total.", steps: ["Find each category amount from the total budget.", "Add the category amounts together.", "Subtract from $720 to find the remaining $288."] }
        },
        {
            id: "m7c-la-44", topic: "fdp-operations", marks: 10,
            q: "A jacket costs $64 and is reduced by 20%. After the discount, an extra charge of 1/8 of the sale price is added for custom printing. Find the sale price, the extra charge and the final price. (10 marks)",
            sample: "The discount is 20% of $64, so the sale price is $51.2. The custom printing charge is 1/8 of $51.2, which is $6.4. Adding the charge gives a final price of $57.6. A strong answer shows the percentage reduction first and then finds the fractional extra from the reduced price.",
            help: { rule: "Apply each percentage or fraction in the correct order.", steps: ["Find the discounted sale price first.", "Calculate 1/8 of the sale price.", "Add the extra charge to get the final price $57.6."] }
        },
        {
            id: "m7c-la-45", topic: "fdp-operations", marks: 10,
            q: "A community group raises $400. It spends 2/5 of the money on equipment and 87.5% on prizes. How much is spent on each category and how much is left? (10 marks)",
            sample: "2/5 of $400 is $160. 87.5% of $400 is $350. The total spent is $510, so the amount left is $-110. Strong answers convert each proportion correctly and keep the calculations organised.",
            help: { rule: "Find each part of the whole, then subtract from the total.", steps: ["Calculate the equipment amount.", "Calculate the prizes amount.", "Subtract the total spent from $400 to get $-110 left."] }
        },
        {
            id: "m7c-la-46", topic: "fdp-operations", marks: 10,
            q: "A weekly budget is split so that 40% goes to rent, 0.3 goes to food and 4/5 goes to transport. The total budget is $1,120. Work out the amount spent on each category and how much remains for everything else. (10 marks)",
            sample: "Convert each proportion if needed: 40% = 0.4, food is already 0.3, and 4/5 = 0.8 = 80%. Rent is $448, food is $336 and transport is $896. The total spent is $1,680, so the amount remaining is $-560. Strong responses show each calculation clearly and may also note the total proportion used.",
            help: { rule: "Convert each proportion to a useful form, find each amount, then subtract from the total.", steps: ["Find each category amount from the total budget.", "Add the category amounts together.", "Subtract from $1,120 to find the remaining $-560."] }
        },
        {
            id: "m7c-la-47", topic: "fdp-operations", marks: 10,
            q: "A jacket costs $48 and is reduced by 15%. After the discount, an extra charge of 7/8 of the sale price is added for custom printing. Find the sale price, the extra charge and the final price. (10 marks)",
            sample: "The discount is 15% of $48, so the sale price is $40.8. The custom printing charge is 7/8 of $40.8, which is $35.7. Adding the charge gives a final price of $76.5. A strong answer shows the percentage reduction first and then finds the fractional extra from the reduced price.",
            help: { rule: "Apply each percentage or fraction in the correct order.", steps: ["Find the discounted sale price first.", "Calculate 7/8 of the sale price.", "Add the extra charge to get the final price $76.5."] }
        },
        {
            id: "m7c-la-48", topic: "fdp-operations", marks: 10,
            q: "A community group raises $320. It spends 1/8 of the money on equipment and 70% on prizes. How much is spent on each category and how much is left? (10 marks)",
            sample: "1/8 of $320 is $40. 70% of $320 is $224. The total spent is $264, so the amount left is $56. Strong answers convert each proportion correctly and keep the calculations organised.",
            help: { rule: "Find each part of the whole, then subtract from the total.", steps: ["Calculate the equipment amount.", "Calculate the prizes amount.", "Subtract the total spent from $320 to get $56 left."] }
        },
        {
            id: "m7c-la-49", topic: "fdp-operations", marks: 10,
            q: "A weekly budget is split so that 35% goes to rent, 0.25 goes to food and 5/8 goes to transport. The total budget is $960. Work out the amount spent on each category and how much remains for everything else. (10 marks)",
            sample: "Convert each proportion if needed: 35% = 0.35, food is already 0.25, and 5/8 = 0.625 = 62.5%. Rent is $336, food is $240 and transport is $600. The total spent is $1,176, so the amount remaining is $-216. Strong responses show each calculation clearly and may also note the total proportion used.",
            help: { rule: "Convert each proportion to a useful form, find each amount, then subtract from the total.", steps: ["Find each category amount from the total budget.", "Add the category amounts together.", "Subtract from $960 to find the remaining $-216."] }
        },
        {
            id: "m7c-la-50", topic: "fdp-operations", marks: 10,
            q: "A jacket costs $96 and is reduced by 30%. After the discount, an extra charge of 7/10 of the sale price is added for custom printing. Find the sale price, the extra charge and the final price. (10 marks)",
            sample: "The discount is 30% of $96, so the sale price is $67.2. The custom printing charge is 7/10 of $67.2, which is $47.04. Adding the charge gives a final price of $114.24. A strong answer shows the percentage reduction first and then finds the fractional extra from the reduced price.",
            help: { rule: "Apply each percentage or fraction in the correct order.", steps: ["Find the discounted sale price first.", "Calculate 7/10 of the sale price.", "Add the extra charge to get the final price $114.24."] }
        }
    ],

    practiceTopics: [
        {
            id: "core-review",
            name: "Year 7 Core Review",
            outcomes: "MA3-RN-01 · MA3-AR-01 · MA3-MR-01 · MA4-INT-C-01 · MA4-ANG-C-01 · MA4-FRC-C-01 · MAO-WM-01",
            sourceTopics: ["integers-place-value", "integers-operations", "angle-basics", "angle-parallel", "fdp-conversions", "fdp-operations"],
            setCount: 30
        }
    ],
    practiceExams: [],

                    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad balanced mix",
            duration: 70,
            questionIds: [
                "m7c-mcq-3","m7c-mcq-7","m7c-mcq-11","m7c-mcq-15","m7c-mcq-19","m7c-mcq-23","m7c-mcq-28","m7c-mcq-108",
                "m7c-mcq-188","m7c-mcq-267","m7c-mcq-346","m7c-mcq-425","m7c-mcq-33","m7c-mcq-113","m7c-mcq-193","m7c-mcq-272",
                "m7c-mcq-351","m7c-mcq-430","m7c-mcq-38","m7c-mcq-118","m7c-sa-6","m7c-sa-8","m7c-sa-139","m7c-sa-44",
                "m7c-sa-78","m7c-sa-110","m7c-sa-143","m7c-sa-170","m7c-sa-13","m7c-sa-48","m7c-la-44","m7c-la-8"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — balanced topic rotation A",
            duration: 70,
            questionIds: [
                "m7c-mcq-198","m7c-mcq-277","m7c-mcq-357","m7c-mcq-436","m7c-mcq-43","m7c-mcq-123","m7c-mcq-202","m7c-mcq-281",
                "m7c-mcq-362","m7c-mcq-441","m7c-mcq-48","m7c-mcq-128","m7c-mcq-207","m7c-mcq-286","m7c-mcq-367","m7c-mcq-446",
                "m7c-mcq-53","m7c-mcq-133","m7c-mcq-212","m7c-mcq-291","m7c-sa-147","m7c-sa-52","m7c-sa-82","m7c-sa-114",
                "m7c-sa-151","m7c-sa-174","m7c-sa-17","m7c-sa-56","m7c-sa-86","m7c-sa-118","m7c-la-48","m7c-la-12"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — balanced topic rotation B",
            duration: 70,
            questionIds: [
                "m7c-mcq-372","m7c-mcq-451","m7c-mcq-58","m7c-mcq-138","m7c-mcq-217","m7c-mcq-296","m7c-mcq-377","m7c-mcq-456",
                "m7c-mcq-63","m7c-mcq-143","m7c-mcq-222","m7c-mcq-301","m7c-mcq-383","m7c-mcq-462","m7c-mcq-67","m7c-mcq-147",
                "m7c-mcq-227","m7c-mcq-306","m7c-mcq-388","m7c-mcq-467","m7c-sa-21","m7c-sa-90","m7c-sa-122","m7c-sa-178",
                "m7c-sa-25","m7c-sa-60","m7c-sa-93","m7c-sa-125","m7c-sa-155","m7c-sa-182","m7c-la-15","m7c-la-36"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced topic rotation C",
            duration: 70,
            questionIds: [
                "m7c-mcq-72","m7c-mcq-152","m7c-mcq-232","m7c-mcq-311","m7c-mcq-393","m7c-mcq-472","m7c-mcq-77","m7c-mcq-157",
                "m7c-mcq-237","m7c-mcq-316","m7c-mcq-398","m7c-mcq-477","m7c-mcq-82","m7c-mcq-162","m7c-mcq-242","m7c-mcq-321",
                "m7c-mcq-403","m7c-mcq-482","m7c-mcq-87","m7c-mcq-167","m7c-sa-97","m7c-sa-129","m7c-sa-186","m7c-sa-29",
                "m7c-sa-101","m7c-sa-133","m7c-sa-159","m7c-sa-190","m7c-sa-33","m7c-sa-64","m7c-la-40","m7c-la-19"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 70,
            questionIds: [
                "m7c-mcq-246","m7c-mcq-325","m7c-mcq-409","m7c-mcq-488","m7c-mcq-92","m7c-mcq-172","m7c-mcq-251","m7c-mcq-330",
                "m7c-mcq-414","m7c-mcq-493","m7c-mcq-97","m7c-mcq-177","m7c-mcq-256","m7c-mcq-335","m7c-mcq-419","m7c-mcq-498",
                "m7c-mcq-102","m7c-mcq-182","m7c-mcq-261","m7c-mcq-340","m7c-sa-163","m7c-sa-194","m7c-sa-37","m7c-sa-68",
                "m7c-sa-167","m7c-sa-198","m7c-sa-41","m7c-sa-72","m7c-sa-105","m7c-sa-137","m7c-la-24","m7c-la-31"
            ]
        }
    ]
};
