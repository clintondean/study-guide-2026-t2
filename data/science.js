// Science — Year 7 Half Yearly
// Outcomes assessed:
//   SC4-OTU-01 explains how observations are used by scientists to increase
//              knowledge and understanding of the Universe
//   SC4-FOR-01 describes the effects of forces in everyday contexts
//   SC4-WS-05 uses a variety of ways to process and represent data
//   SC4-WS-08 communicates scientific concepts and ideas using a range of
//             communication forms

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

window.SUBJECT_DATA.science = {
    id: "science",
    name: "Science",
    tagline: "Year 7 Half Yearly — Observing the Universe, Forces & Science Skills",
    color: "#3a86ff",
    accent: "#1d4ed8",
    icon: "🔬",
    topics: [
        { id: "telescope-tools", name: "Observing tools & models" },
        { id: "sky-patterns", name: "Patterns in the sky" },
        { id: "earth-moon-sun", name: "Earth, Moon & Sun observations" },
        { id: "stars-galaxies", name: "Stars, planets & galaxies" },
        { id: "forces-basics", name: "Pushes, pulls & effects of forces" },
        { id: "contact-noncontact", name: "Contact & non-contact forces" },
        { id: "balanced-unbalanced", name: "Balanced & unbalanced forces" },
        { id: "graphing-data", name: "Graphing & processing data" },
        { id: "interpreting-graphs", name: "Interpreting data & communicating findings" }
    ],

    mcqs: [
        /* ----- Observing tools & models ----- */
        {
            id: "s-mcq-1", topic: "telescope-tools",
            q: "Why is a telescope more useful than the unaided eye for studying distant objects in space?",
            options: [
                "It changes the weather so the sky becomes clearer",
                "It collects more light and allows faint objects to be seen in more detail",
                "It makes objects in space move more slowly",
                "It sends astronauts to inspect the object"
            ],
            answer: 1,
            explain: "Telescopes collect much more light than the eye and can reveal faint, distant objects and finer detail."
        },
        {
            id: "s-mcq-2", topic: "telescope-tools",
            q: "Why might scientists use a radio telescope instead of only an optical telescope?",
            options: [
                "Radio telescopes can detect radio waves that are not visible to human eyes",
                "Radio telescopes can only be used in daylight",
                "Radio telescopes show colour better than optical telescopes",
                "Radio telescopes make stars appear closer"
            ],
            answer: 0,
            explain: "Different telescopes detect different parts of the electromagnetic spectrum, so radio telescopes reveal information optical telescopes cannot."
        },
        {
            id: "s-mcq-3", topic: "telescope-tools",
            q: "A model of the Solar System is most useful because it:",
            options: [
                "is exactly the same size as the real Solar System",
                "lets scientists move planets around to change their orbits",
                "helps represent objects and relationships that are too large to view directly",
                "proves every idea scientists have is correct"
            ],
            answer: 2,
            explain: "Scientific models help explain and represent systems that are too large, small, distant or complex to examine directly."
        },
        {
            id: "s-mcq-4", topic: "telescope-tools",
            q: "A student records Jupiter's position in the sky every night for two weeks. This is an example of:",
            options: ["a single guess", "repeated observation", "changing a variable", "writing a conclusion first"],
            answer: 1,
            explain: "Repeated observation over time helps scientists identify patterns and build stronger explanations."
        },

        /* ----- Patterns in the sky ----- */
        {
            id: "s-mcq-5", topic: "sky-patterns",
            q: "The Sun appears to move across the sky each day mainly because:",
            options: [
                "the Sun travels around Earth every 24 hours",
                "Earth rotates on its axis",
                "the Moon pulls the Sun across the sky",
                "clouds push the Sun westward"
            ],
            answer: 1,
            explain: "Earth's rotation makes the Sun, Moon and stars appear to move across the sky from east to west."
        },
        {
            id: "s-mcq-6", topic: "sky-patterns",
            q: "A constellation is best described as:",
            options: [
                "a group of planets orbiting one star",
                "a pattern of stars as seen from Earth",
                "a cluster of galaxies",
                "a type of telescope"
            ],
            answer: 1,
            explain: "Constellations are patterns people identify in the night sky from Earth's viewpoint."
        },
        {
            id: "s-mcq-7", topic: "sky-patterns",
            q: "Which observation best suggests that a bright object in the night sky is a planet rather than a star?",
            options: [
                "It changes position compared with nearby background stars over time",
                "It can only be seen with a telescope",
                "It is always part of the same constellation",
                "It never rises or sets"
            ],
            answer: 0,
            explain: "Planets appear to wander against the background stars because they orbit the Sun."
        },
        {
            id: "s-mcq-8", topic: "sky-patterns",
            q: "Why is the Southern Cross useful in the Southern Hemisphere?",
            options: [
                "It points exactly to the Moon",
                "It helps observers estimate the direction of south",
                "It shows when a solar eclipse will happen",
                "It is the closest constellation to Earth"
            ],
            answer: 1,
            explain: "The Southern Cross can be used as a guide to locate south in the night sky."
        },

        /* ----- Earth, Moon & Sun ----- */
        {
            id: "s-mcq-9", topic: "earth-moon-sun",
            q: "Why does the Moon appear to change shape over about a month?",
            options: [
                "Earth's shadow covers different parts of the Moon every night",
                "The Moon changes shape as it cools",
                "We see different amounts of the Moon's lit half as it orbits Earth",
                "Clouds hide different parts of the Moon"
            ],
            answer: 2,
            explain: "Moon phases happen because the Moon orbits Earth and we see different portions of its sunlit half."
        },
        {
            id: "s-mcq-10", topic: "earth-moon-sun",
            q: "Day and night are caused by:",
            options: [
                "Earth spinning on its axis",
                "the Moon orbiting Earth",
                "the Sun orbiting Earth once each day",
                "changes in the weather"
            ],
            answer: 0,
            explain: "As Earth rotates, different parts of the planet face the Sun, creating day and night."
        },
        {
            id: "s-mcq-11", topic: "earth-moon-sun",
            q: "One year on Earth is the time it takes for Earth to:",
            options: [
                "rotate once on its axis",
                "orbit the Sun once",
                "orbit the Moon once",
                "complete one day-night cycle"
            ],
            answer: 1,
            explain: "Earth takes about 365 days to revolve around the Sun once."
        },
        {
            id: "s-mcq-12", topic: "earth-moon-sun",
            q: "Which statement about the Moon is correct?",
            options: [
                "The Moon makes its own light",
                "The Moon is only visible at night",
                "The Moon reflects sunlight",
                "The Moon is larger than Earth"
            ],
            answer: 2,
            explain: "The Moon does not produce its own light; it reflects sunlight."
        },

        /* ----- Stars, planets & galaxies ----- */
        {
            id: "s-mcq-13", topic: "stars-galaxies",
            q: "The Sun is best described as a:",
            options: ["planet", "moon", "star", "galaxy"],
            answer: 2,
            explain: "The Sun is a star at the centre of our Solar System."
        },
        {
            id: "s-mcq-14", topic: "stars-galaxies",
            q: "Which statement correctly describes the Solar System?",
            options: [
                "All stars in the Milky Way",
                "The Sun and the objects that orbit it",
                "Every galaxy in the Universe",
                "Earth, the Moon and the Sun only"
            ],
            answer: 1,
            explain: "The Solar System includes the Sun and all planets, moons and smaller objects orbiting it."
        },
        {
            id: "s-mcq-15", topic: "stars-galaxies",
            q: "The Milky Way is a:",
            options: ["constellation", "planetary system", "galaxy", "cloud pattern"],
            answer: 2,
            explain: "The Milky Way is the galaxy that contains our Solar System."
        },
        {
            id: "s-mcq-16", topic: "stars-galaxies",
            q: "Which statement shows how observations can change scientific ideas?",
            options: [
                "Scientists ignore new evidence if it disagrees with old ideas",
                "New observations can support, refine or replace current models",
                "A model never changes once it is published",
                "Only astronauts can collect scientific evidence"
            ],
            answer: 1,
            explain: "Scientific explanations change when new evidence or better observations become available."
        },

        /* ----- Pushes, pulls & effects of forces ----- */
        {
            id: "s-mcq-17", topic: "forces-basics",
            q: "A force is best defined as:",
            options: ["a kind of energy", "a push or a pull", "the same as speed", "a type of material"],
            answer: 1,
            explain: "Forces are pushes or pulls that can affect how an object moves or changes shape."
        },
        {
            id: "s-mcq-18", topic: "forces-basics",
            q: "Which is NOT an effect a force can have on an object?",
            options: [
                "change its speed",
                "change its direction",
                "change its shape",
                "change its chemical formula"
            ],
            answer: 3,
            explain: "Forces can change motion or shape, but they do not automatically change an object's chemical formula."
        },
        {
            id: "s-mcq-19", topic: "forces-basics",
            q: "The standard unit used to measure force is the:",
            options: ["joule", "metre", "newton", "watt"],
            answer: 2,
            explain: "Force is measured in newtons (N)."
        },
        {
            id: "s-mcq-20", topic: "forces-basics",
            q: "Weight is a force caused by:",
            options: ["friction", "gravity", "magnetism", "air resistance"],
            answer: 1,
            explain: "Weight is the force of gravity acting on an object."
        },

        /* ----- Contact & non-contact forces ----- */
        {
            id: "s-mcq-21", topic: "contact-noncontact",
            q: "Friction is a force that:",
            options: [
                "pulls all objects toward Earth",
                "opposes motion between touching surfaces",
                "acts only in outer space",
                "can only speed objects up"
            ],
            answer: 1,
            explain: "Friction acts between surfaces in contact and opposes their motion."
        },
        {
            id: "s-mcq-22", topic: "contact-noncontact",
            q: "Air resistance is:",
            options: [
                "a contact force caused by air pushing against motion",
                "a force that only acts under water",
                "a magnetic force",
                "not a real force"
            ],
            answer: 0,
            explain: "Air resistance is a type of friction caused by air particles colliding with a moving object."
        },
        {
            id: "s-mcq-23", topic: "contact-noncontact",
            q: "Which is a non-contact force?",
            options: ["friction", "push from a hand", "gravity", "tension in a rope"],
            answer: 2,
            explain: "Gravity acts at a distance, so it is a non-contact force."
        },
        {
            id: "s-mcq-24", topic: "contact-noncontact",
            q: "Magnets can attract some objects without touching them, so magnetic force is:",
            options: ["balanced", "non-contact", "always upward", "the same as friction"],
            answer: 1,
            explain: "Magnetic force can act over a distance, so it is non-contact."
        },
        {
            id: "s-mcq-25", topic: "contact-noncontact",
            q: "Which situation best shows a contact force?",
            options: [
                "A dropped pen falling toward the floor",
                "A magnet attracting a paper clip",
                "A shoe gripping the ground while walking",
                "Earth orbiting the Sun"
            ],
            answer: 2,
            explain: "Grip between the shoe and the ground is caused by contact forces, especially friction."
        },

        /* ----- Balanced & unbalanced forces ----- */
        {
            id: "s-mcq-26", topic: "balanced-unbalanced",
            q: "If forces on an object are balanced, the object:",
            options: [
                "must start moving faster",
                "must change direction",
                "has no overall force acting on it",
                "must stop moving"
            ],
            answer: 2,
            explain: "Balanced forces mean the net force is zero."
        },
        {
            id: "s-mcq-27", topic: "balanced-unbalanced",
            q: "Unbalanced forces cause an object to:",
            options: [
                "change its motion",
                "become invisible",
                "lose all mass",
                "always move upward"
            ],
            answer: 0,
            explain: "A non-zero net force causes a change in speed and/or direction."
        },
        {
            id: "s-mcq-28", topic: "balanced-unbalanced",
            q: "In tug-of-war, each team pulls with 200 N in opposite directions. The rope will most likely:",
            options: [
                "move left",
                "move right",
                "stay still or keep moving at the same speed",
                "break because the forces cancel"
            ],
            answer: 2,
            explain: "Equal forces in opposite directions are balanced, so there is no change in motion."
        },
        {
            id: "s-mcq-29", topic: "balanced-unbalanced",
            q: "A trolley is pushed forward with 12 N while friction acts backward with 4 N. The net force is:",
            options: ["16 N backward", "8 N forward", "8 N backward", "12 N forward"],
            answer: 1,
            explain: "Net force = 12 N forward − 4 N backward = 8 N forward."
        },
        {
            id: "s-mcq-30", topic: "balanced-unbalanced",
            q: "When a bicycle brakes, friction provides a force that is mainly:",
            options: [
                "in the same direction as the motion",
                "opposite the direction of motion",
                "directly upward",
                "a non-contact force"
            ],
            answer: 1,
            explain: "Braking friction acts opposite the motion and slows the bicycle."
        },

        /* ----- Graphing & processing data ----- */
        {
            id: "s-mcq-31", topic: "graphing-data",
            q: "In most scientific graphs, the dependent variable is plotted on the:",
            options: ["x-axis", "title", "y-axis", "scale bar"],
            answer: 2,
            explain: "The dependent variable is usually placed on the y-axis because it changes in response to the independent variable."
        },
        {
            id: "s-mcq-32", topic: "graphing-data",
            q: "Which graph is usually best for showing how a measurement changes over time?",
            options: ["line graph", "pie chart", "Venn diagram", "map"],
            answer: 0,
            explain: "Line graphs are useful for showing continuous change, especially over time."
        },
        {
            id: "s-mcq-33", topic: "graphing-data",
            q: "A fair test changes only one variable so that:",
            options: [
                "results become more colourful",
                "the effect of that variable can be identified",
                "graphs are no longer needed",
                "all results become identical"
            ],
            answer: 1,
            explain: "Changing one variable at a time helps identify which factor caused the change in results."
        },
        {
            id: "s-mcq-34", topic: "graphing-data",
            q: "Why should axis labels include units?",
            options: [
                "Units show what was measured and the scale used",
                "Units are only needed for mathematics",
                "Units make any result correct",
                "Units replace the need for a title"
            ],
            answer: 0,
            explain: "Units help readers understand exactly what quantity was measured and in what scale."
        },
        {
            id: "s-mcq-35", topic: "graphing-data",
            q: "Repeating a measurement three times mainly helps scientists to:",
            options: [
                "increase reliability and identify unusual results",
                "change the independent variable",
                "avoid writing a conclusion",
                "turn a line graph into a bar graph"
            ],
            answer: 0,
            explain: "Repeated trials make results more reliable and help identify anomalies."
        },

        /* ----- Interpreting data & communicating findings ----- */
        {
            id: "s-mcq-36", topic: "interpreting-graphs",
            q: "On a line graph, a section that slopes upward from left to right shows that the dependent variable is:",
            options: ["decreasing", "staying constant", "increasing", "missing"],
            answer: 2,
            explain: "An upward trend shows the measured value is increasing."
        },
        {
            id: "s-mcq-37", topic: "interpreting-graphs",
            q: "An anomaly in a set of results is:",
            options: [
                "the average of all results",
                "a result that does not fit the general pattern",
                "the independent variable",
                "the title of a graph"
            ],
            answer: 1,
            explain: "An anomaly is an unusual data point that differs from the overall trend."
        },
        {
            id: "s-mcq-38", topic: "interpreting-graphs",
            q: "Which statement is the best scientific conclusion?",
            options: [
                "I liked the experiment",
                "The graph proves everything perfectly",
                "The data show that increasing ramp height increased the car's travel distance",
                "The teacher probably wanted answer C"
            ],
            answer: 2,
            explain: "Scientific conclusions should be based directly on the evidence collected."
        },
        {
            id: "s-mcq-39", topic: "interpreting-graphs",
            q: "Which graph is usually best for comparing separate categories, such as different surfaces?",
            options: ["bar graph", "line graph", "scatter plot", "flow chart"],
            answer: 0,
            explain: "Bar graphs are useful for comparing categories or groups."
        },
        {
            id: "s-mcq-40", topic: "interpreting-graphs",
            q: "If one group in a class investigation gets a different result from everyone else, the first sensible step is to:",
            options: [
                "delete the result immediately",
                "check the method, measurements and graph for possible error",
                "change the conclusion to match that result only",
                "ignore the rest of the data"
            ],
            answer: 1,
            explain: "Unusual results should be checked against the method and measurements before being accepted or rejected."
        }
    ],

    short: [
        {
            id: "s-sa-1", topic: "telescope-tools",
            q: "Describe TWO ways a telescope helps scientists study the Universe.",
            sample: "A telescope collects more light than the human eye, so faint and distant objects can be seen. It also provides more detail or clearer images, allowing scientists to observe features that cannot be seen easily with the naked eye. Some telescopes can record images and data for later analysis.",
            marks: 4
        },
        {
            id: "s-sa-2", topic: "telescope-tools",
            q: "Explain why scientists use different telescopes, such as optical and radio telescopes, when studying space.",
            sample: "Different objects in space give off different types of electromagnetic radiation. Optical telescopes detect visible light, while radio telescopes detect radio waves. Using different telescopes allows scientists to gather different kinds of evidence and build a more complete understanding of an object or event.",
            marks: 4
        },
        {
            id: "s-sa-3", topic: "earth-moon-sun",
            q: "Use a labelled diagram in words to explain why the Moon appears to change shape over a month.",
            sample: "The Sun always lights half of the Moon. As the Moon orbits Earth, we see different amounts of that lit half from our position on Earth. This creates the phases, such as crescent, quarter, gibbous and full Moon. The Moon itself is not changing shape.",
            marks: 5
        },
        {
            id: "s-sa-4", topic: "sky-patterns",
            q: "Explain why the Sun and stars appear to move across the sky each day.",
            sample: "The apparent movement is caused by Earth rotating on its axis. As Earth spins from west to east, the Sun and stars appear to move from east to west across the sky. The objects are not actually travelling around Earth each day.",
            marks: 4
        },
        {
            id: "s-sa-5", topic: "stars-galaxies",
            q: "Explain how repeated observations have helped scientists improve models of the Universe. Use ONE example.",
            sample: "Repeated observations allow scientists to compare patterns, test ideas and check whether evidence is reliable. For example, improved telescope observations of planets, moons and stars provided evidence that helped refine models of the Solar System and the wider Universe. New evidence can support or change older ideas.",
            marks: 5
        },
        {
            id: "s-sa-6", topic: "forces-basics",
            q: "Define FORCE and describe TWO effects a force can have on an object.",
            sample: "A force is a push or pull. A force can change an object's speed, change its direction, start it moving, stop it moving or change its shape. Any two effects described clearly would earn marks.",
            marks: 4
        },
        {
            id: "s-sa-7", topic: "contact-noncontact",
            q: "Compare contact and non-contact forces using ONE example of each.",
            sample: "Contact forces act when objects touch, such as friction between shoes and the ground. Non-contact forces act over a distance, such as gravity pulling a dropped ball downward or magnetism attracting a paper clip. The key difference is whether physical contact is needed.",
            marks: 4
        },
        {
            id: "s-sa-8", topic: "balanced-unbalanced",
            q: "A box is pushed to the right with 10 N while friction acts to the left with 6 N. State the net force and describe what will happen.",
            sample: "The net force is 4 N to the right. Because the forces are unbalanced, the box will accelerate or speed up to the right (or start moving to the right if it was still).",
            marks: 4
        },
        {
            id: "s-sa-9", topic: "contact-noncontact",
            q: "Explain how friction can be both useful and unwanted in everyday life.",
            sample: "Friction is useful because it helps people walk without slipping and allows brakes to slow bikes or cars. Friction can also be unwanted because it causes wear and tear, produces heat and can make moving objects harder. Strong answers give clear everyday examples of both.",
            marks: 5
        },
        {
            id: "s-sa-10", topic: "balanced-unbalanced",
            q: "Describe what happens to a moving object when the forces acting on it become balanced.",
            sample: "If the forces become balanced, the net force is zero. The object will keep moving at the same speed in the same direction, or it will remain at rest if it was not moving. Balanced forces do not cause a change in motion.",
            marks: 4
        },
        {
            id: "s-sa-11", topic: "graphing-data",
            q: "State THREE features of a good scientific graph.",
            sample: "A good scientific graph should have a clear title, labelled axes with units, and an appropriate scale. Other acceptable features include plotting points accurately, choosing a suitable graph type and drawing a neat line or bars.",
            marks: 4
        },
        {
            id: "s-sa-12", topic: "graphing-data",
            q: "A student tests how ramp height affects the distance a toy car travels. Identify the independent variable, the dependent variable and ONE controlled variable.",
            sample: "The independent variable is ramp height because it is the factor changed. The dependent variable is the distance travelled by the toy car because it is measured. A controlled variable could be the same toy car, same ramp surface, same release point or same measuring method.",
            marks: 5
        },
        {
            id: "s-sa-13", topic: "interpreting-graphs",
            q: "A line graph shows that as observation time increases, the number of stars seen also increases. Describe the trend and give ONE scientific reason for it.",
            sample: "The trend is positive: the longer the observation time, the more stars are recorded. One scientific reason is that longer observing time allows eyes or instruments to detect more faint objects, or it gives the observer more time to carefully scan the sky.",
            marks: 4
        },
        {
            id: "s-sa-14", topic: "interpreting-graphs",
            q: "A class graph contains one result that is far from the others. Explain TWO reasons this might happen and what should be done next.",
            sample: "The unusual result may have happened because of a measurement error, recording error, equipment problem or because the method was not followed consistently. The class should check the raw data, review the method, and if appropriate repeat the trial rather than ignore the result straight away.",
            marks: 5
        },
        {
            id: "s-sa-15", topic: "graphing-data",
            q: "Why do scientists repeat measurements and calculate an average when processing data?",
            sample: "Repeating measurements improves reliability because it reduces the effect of random error. Calculating an average gives a typical result and makes it easier to see the overall pattern in the data. Repeated trials can also help identify anomalies.",
            marks: 4
        }
    ],

    long: [
        {
            id: "s-la-1", topic: "stars-galaxies",
            q: "Explain how observations and technologies help scientists increase knowledge and understanding of the Universe. Refer to at least TWO examples. (8 marks)",
            sample: "Strong responses should explain that scientists gather evidence through observations and that improved technology makes those observations more detailed and reliable. Examples may include optical telescopes collecting visible light, radio telescopes detecting radio waves, cameras or satellites gathering data above Earth's atmosphere, or repeated observations showing patterns in the motions of planets and the Moon. Good answers link evidence to improved models and explain that scientific ideas can be refined when new observations are made.",
            marks: 8
        },
        {
            id: "s-la-2", topic: "earth-moon-sun",
            q: "Using scientific ideas and observations, explain how the motions of Earth and the Moon create patterns such as day and night, Moon phases and changing positions of objects in the sky. (10 marks)",
            sample: "A strong answer explains that Earth rotates on its axis once every 24 hours, causing day and night and the apparent daily movement of the Sun and stars. Earth also orbits the Sun once each year. The Moon orbits Earth, and because half of the Moon is always lit by the Sun, we see different portions of the lit half as it moves around Earth, creating the phases. Good answers refer to observations, such as the Moon changing appearance over a month or the Sun appearing to rise in the east and set in the west, and use clear scientific language throughout.",
            marks: 10
        },
        {
            id: "s-la-3", topic: "balanced-unbalanced",
            q: "Analyse the forces acting on a bicycle when it starts moving, travels at a steady speed and then brakes to stop. Include balanced and unbalanced forces in your response. (8 marks)",
            sample: "At the start, the rider pushes on the pedals, creating a forward force greater than the opposing forces, so the bicycle accelerates. While travelling at a steady speed, forward driving forces and backward forces such as air resistance and friction are balanced, so there is no change in motion. When braking, friction from the brakes and tyres acts opposite the motion, creating an unbalanced backward force that slows and stops the bike. Strong answers mention contact forces and use the idea of net force clearly.",
            marks: 8
        },
        {
            id: "s-la-4", topic: "forces-basics",
            q: "A class investigates how different surfaces affect the distance a toy car travels. Explain how forces help account for the results and describe how the investigation could be made fair and reliable. (10 marks)",
            sample: "A strong answer explains that different surfaces create different amounts of friction. More friction reduces the distance the car travels, while less friction allows it to keep moving further. To make the test fair, students should keep the car, ramp height, release point and measuring method the same while only changing the surface. Reliability is improved by repeating trials, recording results carefully, identifying anomalies and calculating an average. Strong answers may suggest presenting the results in a table and bar graph.",
            marks: 10
        },
        {
            id: "s-la-5", topic: "graphing-data",
            q: "Design a simple investigation to test how ramp height affects the distance travelled by a toy car. Identify variables, describe how the data would be recorded and explain how the results should be graphed and interpreted. (8 marks)",
            sample: "A strong answer identifies ramp height as the independent variable and distance travelled as the dependent variable, with controls such as the same car, same surface and same release point. The method should describe repeated trials for each height, recording data in a results table and calculating averages. A line graph or column graph could then be used, with labelled axes and units. The interpretation should describe the trend, note any anomalies and explain the conclusion using the data.",
            marks: 8
        },
        {
            id: "s-la-6", topic: "interpreting-graphs",
            q: "A class collected data on the number of stars visible at different times after sunset. Explain how the data should be processed and represented, describe the trend, identify how an anomaly would be handled and communicate an evidence-based conclusion. (10 marks)",
            sample: "A strong answer explains that the results should be organised in a table, checked for errors and graphed with time after sunset on the x-axis and number of stars visible on the y-axis. The student should describe the overall trend, such as more stars becoming visible as time passes after sunset. An anomaly should be identified as a result that does not fit the pattern, then checked against the method or repeated if needed. The conclusion should be based on the data, not opinion, and communicate that observation conditions or time affect the number of stars recorded.",
            marks: 10
        }
    ],

    /* =========================================================
       PRACTICE QUESTIONS — 3 topic groups × 10 exams × 20 questions.
       Generated at boot from `practiceTopics`.
       ========================================================= */
    practiceTopics: [
        {
            id: "universe-skills",
            name: "Observing the Universe & Science Skills",
            outcomes: "SC4-OTU-01 · SC4-WS-05 · SC4-WS-08",
            sourceTopics: ["telescope-tools", "sky-patterns", "earth-moon-sun", "stars-galaxies", "graphing-data", "interpreting-graphs"]
        },
        {
            id: "forces",
            name: "Forces in Everyday Contexts",
            outcomes: "SC4-FOR-01 · SC4-WS-08",
            sourceTopics: ["forces-basics", "contact-noncontact", "balanced-unbalanced"]
        }
    ],
    practiceExams: [],

    /* =========================================================
       MOCK EXAMS — full-length, mixed across the examined topics.
       Each mock: 20 MCQ + 10 short + 2 long.
       ========================================================= */
    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad mix across observing, forces and skills",
            duration: 70,
            questionIds: [
                "s-mcq-1","s-mcq-2","s-mcq-3","s-mcq-5","s-mcq-6","s-mcq-8","s-mcq-9","s-mcq-10",
                "s-mcq-12","s-mcq-13","s-mcq-17","s-mcq-18","s-mcq-21","s-mcq-23","s-mcq-24","s-mcq-26",
                "s-mcq-29","s-mcq-30","s-mcq-31","s-mcq-36",
                "s-sa-1","s-sa-2","s-sa-3","s-sa-6","s-sa-7","s-sa-8","s-sa-11","s-sa-12","s-sa-13","s-sa-14",
                "s-la-1","s-la-3"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — observation and data heavy",
            duration: 70,
            questionIds: [
                "s-mcq-4","s-mcq-5","s-mcq-7","s-mcq-8","s-mcq-10","s-mcq-11","s-mcq-14","s-mcq-15",
                "s-mcq-17","s-mcq-20","s-mcq-22","s-mcq-24","s-mcq-25","s-mcq-27","s-mcq-28","s-mcq-32",
                "s-mcq-33","s-mcq-34","s-mcq-37","s-mcq-39",
                "s-sa-4","s-sa-5","s-sa-6","s-sa-7","s-sa-9","s-sa-10","s-sa-11","s-sa-13","s-sa-14","s-sa-15",
                "s-la-2","s-la-4"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — forces and skills heavy",
            duration: 70,
            questionIds: [
                "s-mcq-1","s-mcq-3","s-mcq-4","s-mcq-6","s-mcq-7","s-mcq-9","s-mcq-11","s-mcq-12",
                "s-mcq-13","s-mcq-16","s-mcq-18","s-mcq-19","s-mcq-20","s-mcq-22","s-mcq-25","s-mcq-27",
                "s-mcq-33","s-mcq-35","s-mcq-38","s-mcq-40",
                "s-sa-1","s-sa-3","s-sa-4","s-sa-5","s-sa-7","s-sa-8","s-sa-10","s-sa-12","s-sa-14","s-sa-15",
                "s-la-1","s-la-5"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced review with graph interpretation",
            duration: 70,
            questionIds: [
                "s-mcq-2","s-mcq-4","s-mcq-5","s-mcq-8","s-mcq-9","s-mcq-10","s-mcq-11","s-mcq-12",
                "s-mcq-15","s-mcq-17","s-mcq-21","s-mcq-23","s-mcq-24","s-mcq-26","s-mcq-28","s-mcq-31",
                "s-mcq-34","s-mcq-35","s-mcq-36","s-mcq-40",
                "s-sa-2","s-sa-4","s-sa-5","s-sa-6","s-sa-8","s-sa-9","s-sa-10","s-sa-11","s-sa-13","s-sa-15",
                "s-la-3","s-la-6"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 70,
            questionIds: [
                "s-mcq-1","s-mcq-2","s-mcq-6","s-mcq-7","s-mcq-10","s-mcq-13","s-mcq-14","s-mcq-16",
                "s-mcq-18","s-mcq-20","s-mcq-22","s-mcq-25","s-mcq-27","s-mcq-28","s-mcq-30","s-mcq-32",
                "s-mcq-33","s-mcq-37","s-mcq-39","s-mcq-40",
                "s-sa-1","s-sa-2","s-sa-3","s-sa-5","s-sa-6","s-sa-7","s-sa-9","s-sa-12","s-sa-14","s-sa-15",
                "s-la-2","s-la-5"
            ]
        }
    ]
};
