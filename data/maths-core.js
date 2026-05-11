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
            id: "m7c-sa-2", topic: "integers-operations", marks: 4,
            q: "Calculate: -12 + 7 - 5.",
            sample: "-12 + 7 = -5, then -5 - 5 = -10.",
            help: { rule: "Work left to right when only addition and subtraction are present.", steps: ["-12 + 7 = -5.", "Then subtract 5.", "The final answer is -10."] }
        },
        {
            id: "m7c-sa-3", topic: "integers-place-value", marks: 4,
            q: "Explain why subtracting a negative number gives the same result as adding the positive number. Use 6 - (-3) as your example.",
            sample: "Subtracting a negative means removing a debt or moving in the positive direction on a number line. So 6 - (-3) is the same as 6 + 3, which equals 9.",
            help: { rule: "Subtracting a negative changes to addition.", steps: ["Start with 6 - (-3).", "Rewrite as 6 + 3.", "Explain that removing a negative increases the value, so the answer is 9."] }
        },
        {
            id: "m7c-sa-4", topic: "integers-operations", marks: 5,
            q: "A submarine is at -18 m. It rises 11 m, then dives 7 m. What is its final position?",
            sample: "Start at -18. Rise 11: -18 + 11 = -7. Dive 7: -7 - 7 = -14. Final position is -14 m.",
            help: { rule: "Use positive numbers for rises and negative numbers for dives.", steps: ["Start at -18.", "Add 11 to represent rising.", "Subtract 7 to represent diving again.", "The final position is -14 m."] }
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
            id: "m7c-sa-9", topic: "fdp-conversions", marks: 4,
            q: "Complete the conversions for 3/5: decimal = ?, percentage = ?",
            sample: "3/5 = 0.6 = 60%.",
            help: { rule: "Convert fraction to decimal first, then decimal to percentage.", steps: ["3 / 5 = 0.6.", "Multiply 0.6 by 100.", "So the percentage is 60%."] }
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
            id: "m7c-sa-12", topic: "fdp-conversions", marks: 4,
            q: "Write 0.375 as a fraction in simplest form.",
            sample: "0.375 = 375/1000 = 3/8.",
            help: { rule: "Write the decimal as a fraction over a power of 10, then simplify.", steps: ["0.375 = 375/1000.", "Divide numerator and denominator by 125.", "The simplest form is 3/8."] }
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
            id: "m7c-la-2", topic: "integers-operations", marks: 8,
            q: "Explain how the sign rules for multiplying and dividing integers work, and use examples to show the result of positive x negative, negative x positive and negative x negative. (8 marks)",
            sample: "A positive times a negative is negative, and a negative times a positive is also negative because the signs are different. A negative times a negative is positive because two negatives make a positive. The same sign rules apply for division: same signs give a positive answer, different signs give a negative answer. Clear worked examples such as 3 x -4 = -12, -5 x 2 = -10 and -6 x -2 = 12 should be included.",
            help: { rule: "Same signs give positive results; different signs give negative results.", steps: ["State the sign rule clearly.", "Give at least three worked examples.", "Explain that the same rule applies to both multiplication and division."] }
        },
        {
            id: "m7c-la-3", topic: "angle-basics", marks: 8,
            q: "A point is surrounded by four angles: 90 degrees, 47 degrees, 123 degrees and x. Find x and explain which angle relationship you used. Then identify the supplement of x. (8 marks)",
            sample: "Angles around a point add to 360 degrees. Add the known angles: 90 + 47 + 123 = 260 degrees. So x = 360 - 260 = 100 degrees. The supplement of x is 180 - 100 = 80 degrees. A strong answer names the angle relationship and shows clear working.",
            help: { rule: "Use angles around a point first, then use supplementary angles.", steps: ["Add the known angles.", "Subtract from 360 to find x.", "Subtract x from 180 to find its supplement."] }
        },
        {
            id: "m7c-la-4", topic: "angle-parallel", marks: 10,
            q: "Two parallel lines are cut by a transversal. One acute angle is 64 degrees. Analyse the rest of the angle pattern and state the size of all the other acute and obtuse angles formed. Explain your reasoning. (10 marks)",
            sample: "With parallel lines, corresponding and alternate angles are equal, and co-interior angles add to 180 degrees. So every acute angle formed is 64 degrees. The obtuse angles are supplementary to 64 degrees, so they are 180 - 64 = 116 degrees. A strong answer explains that the pattern repeats at both intersections because the lines are parallel and uses correct angle language.",
            help: { rule: "Equal angles repeat through corresponding and alternate positions; supplementary angles fill the remaining spaces.", steps: ["State that all matching acute angles are 64 degrees.", "Calculate the obtuse angle: 180 - 64 = 116 degrees.", "Explain why the same values repeat across both intersections."] }
        },
        {
            id: "m7c-la-5", topic: "fdp-conversions", marks: 8,
            q: "A school sports survey shows that 3/8 of students prefer netball, 0.25 prefer soccer and 37.5% prefer athletics. Convert each result so they can be compared fairly, then decide which sport is most popular and which is least popular. (8 marks)",
            sample: "Convert all three values to the same form. 3/8 = 0.375 = 37.5%, 0.25 = 25%, and athletics is already 37.5%. So netball and athletics are equally most popular at 37.5%, while soccer is least popular at 25%. Strong answers may compare using fractions, decimals or percentages as long as the conversions are correct.",
            help: { rule: "Convert all values to the same form before comparing.", steps: ["Convert 3/8 to 0.375 or 37.5%.", "Convert 0.25 to 25%.", "Compare the three matching values and state the conclusion clearly."] }
        },
        {
            id: "m7c-la-6", topic: "fdp-operations", marks: 10,
            q: "A family budget is split so that 35% goes to rent, 0.2 goes to food and 1/8 goes to transport. The total weekly budget is $960. Work out the amount spent on each category and how much remains for everything else. (10 marks)",
            sample: "Convert each proportion if needed: 35% = 0.35, food = 0.2 = 20%, transport = 1/8 = 0.125 = 12.5%. Rent: 0.35 x 960 = $336. Food: 0.2 x 960 = $192. Transport: 0.125 x 960 = $120. Total spent on these categories is $648. Remaining budget is 960 - 648 = $312. Strong responses show each calculation clearly and may also note the total proportion used is 67.5%.",
            help: { rule: "Convert each proportion to a useful form, find each amount, then subtract from the total.", steps: ["Find 35%, 20% and 1/8 of $960.", "Add the category amounts.", "Subtract from $960 to find what remains."] }
        }
    ],

    practiceTopics: [
        {
            id: "core-review",
            name: "Year 7 Core Review",
            outcomes: "MA3-RN-01 · MA3-AR-01 · MA3-MR-01 · MA4-INT-C-01 · MA4-ANG-C-01 · MA4-FRC-C-01 · MAO-WM-01",
            sourceTopics: ["integers-place-value", "integers-operations", "angle-basics", "angle-parallel", "fdp-conversions", "fdp-operations"]
        }
    ],
    practiceExams: [],

    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad mix",
            duration: 70,
            questionIds: [
                "m7c-mcq-1","m7c-mcq-2","m7c-mcq-3","m7c-mcq-5","m7c-mcq-6","m7c-mcq-7","m7c-mcq-9","m7c-mcq-10",
                "m7c-mcq-11","m7c-mcq-13","m7c-mcq-14","m7c-mcq-16","m7c-mcq-17","m7c-mcq-18","m7c-mcq-19","m7c-mcq-21",
                "m7c-mcq-22","m7c-mcq-23","m7c-mcq-24","m7c-mcq-12",
                "m7c-sa-1","m7c-sa-2","m7c-sa-3","m7c-sa-5","m7c-sa-6","m7c-sa-7","m7c-sa-9","m7c-sa-10","m7c-sa-11","m7c-sa-12",
                "m7c-la-1","m7c-la-4"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — integer and FDP heavy",
            duration: 70,
            questionIds: [
                "m7c-mcq-2","m7c-mcq-3","m7c-mcq-4","m7c-mcq-5","m7c-mcq-6","m7c-mcq-7","m7c-mcq-8","m7c-mcq-9",
                "m7c-mcq-12","m7c-mcq-13","m7c-mcq-15","m7c-mcq-16","m7c-mcq-17","m7c-mcq-18","m7c-mcq-20","m7c-mcq-21",
                "m7c-mcq-22","m7c-mcq-23","m7c-mcq-24","m7c-mcq-1",
                "m7c-sa-1","m7c-sa-2","m7c-sa-4","m7c-sa-5","m7c-sa-7","m7c-sa-8","m7c-sa-9","m7c-sa-10","m7c-sa-11","m7c-sa-12",
                "m7c-la-2","m7c-la-6"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — angle relationships focus",
            duration: 70,
            questionIds: [
                "m7c-mcq-1","m7c-mcq-4","m7c-mcq-5","m7c-mcq-8","m7c-mcq-9","m7c-mcq-10","m7c-mcq-11","m7c-mcq-12",
                "m7c-mcq-13","m7c-mcq-14","m7c-mcq-15","m7c-mcq-16","m7c-mcq-17","m7c-mcq-18","m7c-mcq-19","m7c-mcq-20",
                "m7c-mcq-21","m7c-mcq-22","m7c-mcq-23","m7c-mcq-24",
                "m7c-sa-2","m7c-sa-3","m7c-sa-5","m7c-sa-6","m7c-sa-7","m7c-sa-8","m7c-sa-9","m7c-sa-10","m7c-sa-11","m7c-sa-12",
                "m7c-la-3","m7c-la-4"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — mixed problem solving",
            duration: 70,
            questionIds: [
                "m7c-mcq-2","m7c-mcq-3","m7c-mcq-4","m7c-mcq-6","m7c-mcq-7","m7c-mcq-8","m7c-mcq-9","m7c-mcq-10",
                "m7c-mcq-12","m7c-mcq-13","m7c-mcq-14","m7c-mcq-15","m7c-mcq-17","m7c-mcq-18","m7c-mcq-19","m7c-mcq-20",
                "m7c-mcq-21","m7c-mcq-22","m7c-mcq-23","m7c-mcq-24",
                "m7c-sa-1","m7c-sa-4","m7c-sa-5","m7c-sa-6","m7c-sa-7","m7c-sa-8","m7c-sa-9","m7c-sa-10","m7c-sa-11","m7c-sa-12",
                "m7c-la-1","m7c-la-5"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 70,
            questionIds: [
                "m7c-mcq-1","m7c-mcq-2","m7c-mcq-3","m7c-mcq-4","m7c-mcq-5","m7c-mcq-6","m7c-mcq-7","m7c-mcq-8",
                "m7c-mcq-9","m7c-mcq-10","m7c-mcq-11","m7c-mcq-12","m7c-mcq-13","m7c-mcq-14","m7c-mcq-15","m7c-mcq-16",
                "m7c-mcq-17","m7c-mcq-18","m7c-mcq-21","m7c-mcq-23",
                "m7c-sa-1","m7c-sa-2","m7c-sa-3","m7c-sa-4","m7c-sa-5","m7c-sa-6","m7c-sa-7","m7c-sa-9","m7c-sa-10","m7c-sa-11",
                "m7c-la-2","m7c-la-6"
            ]
        }
    ]
};
