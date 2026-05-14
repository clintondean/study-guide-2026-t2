// Science — Year 7 Half Yearly
// Outcomes assessed:
//   SC4-OTU-01 explains how observations are used by scientists to increase
//              knowledge and understanding of the Universe
//   SC4-FOR-01 describes the effects of forces in everyday contexts
//   SC4-WS-05 uses a variety of ways to process and represent data
//   SC4-WS-08 communicates scientific concepts and ideas using a range of
//             communication forms

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

const SCIENCE_TOPIC_IDS = [
    "telescope-tools",
    "sky-patterns",
    "earth-moon-sun",
    "stars-galaxies",
    "forces-basics",
    "contact-noncontact",
    "balanced-unbalanced",
    "graphing-data",
    "interpreting-graphs"
];

const SCIENCE_VARIATIONS = {
    telescope: {
        targets: ["a faint galaxy", "a nebula", "a distant star cluster", "Saturn's rings", "Jupiter's moons", "a comet"],
        radioTargets: ["a pulsar", "a supernova remnant", "gas around a galaxy", "a distant quasar", "radio emission from the Milky Way"],
        records: ["position", "brightness", "shape", "colour", "apparent size"],
        periods: ["three", "five", "seven", "ten", "fourteen"],
        locations: ["the school oval", "a dark-sky campsite", "a rooftop observatory", "a hill away from city lights"]
    },
    sky: {
        objects: ["the Sun", "the Moon", "the Southern Cross", "Orion", "Venus", "bright stars"],
        seasons: ["summer", "autumn", "winter", "spring"],
        times: ["sunset", "8 pm", "9 pm", "10 pm", "before dawn"],
        directions: ["east", "west", "north", "south"]
    },
    earthMoonSun: {
        phases: ["crescent", "first quarter", "gibbous", "full", "last quarter"],
        observations: ["sunrise and sunset", "the changing Moon", "different shadow lengths", "day and night"],
        intervals: ["one day", "one week", "two weeks", "one month"]
    },
    stars: {
        objects: ["the Sun", "Earth", "Mars", "the Milky Way", "a distant galaxy", "a star cluster"],
        discoveries: ["improved telescope images", "repeated planet observations", "space-based photographs", "radio signals from space"],
        structures: ["the Solar System", "the Milky Way", "a galaxy", "the Universe"]
    },
    forces: {
        objects: ["a soccer ball", "a shopping trolley", "a toy car", "a bicycle", "a door", "a spring"],
        actions: ["pushes", "pulls", "twists", "squeezes", "stretches"],
        changes: ["speed up", "slow down", "start moving", "stop moving", "change direction", "change shape"]
    },
    contact: {
        situations: ["a cyclist riding downhill", "a parachute falling", "a shoe gripping the ground", "a magnet lifting a paper clip", "a boat moving through water", "a box sliding across the floor"],
        surfaces: ["carpet", "tiles", "concrete", "sandpaper", "grass"],
        objects: ["a paper clip", "a dropped ball", "a magnet", "a parachute", "a rope", "a bicycle tyre"]
    },
    balanced: {
        objects: ["a trolley", "a bicycle", "a skateboard", "a rope in tug-of-war", "a toy car", "a box"],
        motions: ["stays still", "moves at steady speed", "speeds up", "slows down", "changes direction"],
        values: [4, 6, 8, 10, 12, 15]
    },
    graphing: {
        investigations: ["ramp height and toy-car distance", "time after sunset and stars seen", "surface type and slide distance", "amount of water and plant height", "temperature and dissolving time"],
        graphTypes: ["line graph", "bar graph", "results table"],
        measures: ["distance", "time", "height", "temperature", "number of stars", "mass"],
        units: ["cm", "m", "s", "min", "°C", "N"]
    },
    interpreting: {
        investigations: ["stars visible after sunset", "toy-car distance on different surfaces", "plant height over days", "cooling water temperature", "force and spring stretch"],
        trends: ["increases", "decreases", "stays constant", "changes sharply"],
        evidence: ["the graph", "the results table", "the repeated trials", "the average values"]
    }
};

function evenDistribution(total, ids) {
    const base = Math.floor(total / ids.length);
    const remainder = total % ids.length;
    return ids.reduce(function (acc, id, index) {
        acc[id] = base + (index < remainder ? 1 : 0);
        return acc;
    }, {});
}

function pick(list, index) {
    return list[index % list.length];
}

function makeMcq(id, topic, parts, variantIndex) {
    const answer = variantIndex % 4;
    const options = parts.wrongs.slice();
    options.splice(answer, 0, parts.correct);
    return {
        id: id,
        topic: topic,
        q: parts.stem,
        options: options,
        answer: answer,
        explain: parts.explain
    };
}

function makeWritten(id, topic, parts) {
    return {
        id: id,
        topic: topic,
        q: parts.q,
        sample: parts.sample,
        marks: parts.marks
    };
}

const SCIENCE_BUILDERS = {
    "telescope-tools": {
        mcq: [
            function (variant) {
                const target = pick(SCIENCE_VARIATIONS.telescope.targets, variant);
                return {
                    stem: `Why is a telescope more useful than the unaided eye for studying ${target}?`,
                    correct: "It collects more light and reveals faint details",
                    wrongs: [
                        "It changes the weather so the sky becomes clearer",
                        "It makes the object stop moving in space",
                        "It sends astronauts directly to the object"
                    ],
                    explain: "Telescopes collect much more light than the eye, so faint and distant objects can be observed in greater detail."
                };
            },
            function (variant) {
                const target = pick(SCIENCE_VARIATIONS.telescope.radioTargets, variant);
                return {
                    stem: `Why might scientists use a radio telescope when studying ${target}?`,
                    correct: "It detects radio waves that human eyes cannot see",
                    wrongs: [
                        "It only works during the middle of the day",
                        "It makes stars appear larger by changing their size",
                        "It proves every scientific idea is correct"
                    ],
                    explain: "Different telescopes collect different kinds of electromagnetic radiation, so radio telescopes reveal evidence invisible to optical telescopes."
                };
            },
            function () {
                return {
                    stem: "What is the main reason some telescopes are placed above Earth's atmosphere?",
                    correct: "They avoid much of the atmosphere, which can blur or block observations",
                    wrongs: [
                        "They work without any power source in space",
                        "They force planets to orbit in straighter paths",
                        "They can only collect sound waves from the Sun"
                    ],
                    explain: "Space telescopes avoid many atmospheric effects, so they can collect clearer and more complete data."
                };
            },
            function (variant) {
                const target = pick(["the Solar System", "the Moon's surface", "a galaxy", "planet orbits", "a crater field"], variant);
                return {
                    stem: `A scientific model of ${target} is most useful because it:`,
                    correct: "represents something too large, distant or complex to study directly",
                    wrongs: [
                        "is always full-size and perfectly realistic",
                        "replaces the need for evidence or observations",
                        "changes the real object it is describing"
                    ],
                    explain: "Scientific models help explain and represent systems that are too large, small, distant or complicated to examine directly."
                };
            },
            function (variant) {
                const target = pick(SCIENCE_VARIATIONS.telescope.targets, variant + 1);
                const record = pick(SCIENCE_VARIATIONS.telescope.records, variant);
                const period = pick(SCIENCE_VARIATIONS.telescope.periods, variant);
                return {
                    stem: `A student records the ${record} of ${target} on ${period} consecutive nights. Why is this useful?`,
                    correct: "Repeated observations help reveal patterns and changes over time",
                    wrongs: [
                        "One measurement is enough to make further observations unnecessary",
                        "It guarantees the student will never make an error",
                        "It changes the object's orbit so predictions become easier"
                    ],
                    explain: "Repeated observations help scientists recognise patterns, compare data and build stronger explanations."
                };
            },
            function () {
                return {
                    stem: "What is one advantage of using a digital detector or camera on a telescope?",
                    correct: "Images can be stored, measured and compared later",
                    wrongs: [
                        "The telescope no longer needs light to work",
                        "The detector changes radio waves into gravity",
                        "Scientists no longer need to label observations"
                    ],
                    explain: "Digital detectors allow scientists to save data, measure brightness and compare images from different times."
                };
            }
        ],
        short: [
            function (variant) {
                const target = pick(SCIENCE_VARIATIONS.telescope.targets, variant);
                return {
                    q: `Describe TWO ways a telescope helps scientists study ${target}.`,
                    sample: `A telescope helps because it collects more light than the human eye, so faint objects such as ${target} can be seen more clearly. It also magnifies or records finer detail, allowing scientists to compare features, take measurements and save data for later analysis.`,
                    marks: 4
                };
            },
            function (variant) {
                const target = pick(SCIENCE_VARIATIONS.telescope.radioTargets, variant);
                return {
                    q: `Explain why scientists might use both optical and radio telescopes when investigating ${target}.`,
                    sample: `Optical telescopes collect visible light, while radio telescopes collect radio waves. Using both allows scientists to gather different kinds of evidence about ${target}, compare the results and build a more complete scientific explanation than either telescope could provide on its own.`,
                    marks: 4
                };
            },
            function (variant) {
                const target = pick(["the Solar System", "the Moon", "a galaxy", "planet motion"], variant);
                return {
                    q: `Explain why a model of ${target} and repeated observations are both useful in science.`,
                    sample: `A model of ${target} helps scientists represent important parts of the system in a simpler way, such as sizes, positions or motions. Repeated observations then provide evidence that can be compared with the model. Together, models and repeated observations help scientists test ideas and improve explanations when new evidence appears.`,
                    marks: 5
                };
            },
            function (variant) {
                const target = pick(SCIENCE_VARIATIONS.telescope.targets, variant + 2);
                const location = pick(SCIENCE_VARIATIONS.telescope.locations, variant);
                const record = pick(SCIENCE_VARIATIONS.telescope.records, variant + 1);
                return {
                    q: `A class plans to observe ${target} from ${location}. Describe a simple observation plan, including what data should be recorded and why.`,
                    sample: `The class should observe ${target} at the same time on several nights from ${location}, using the same telescope settings where possible. They should record the date, time, sky conditions and the ${record} or position of the object. This makes the observations fairer and allows patterns or changes to be identified when the results are compared.`,
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const targetA = pick(SCIENCE_VARIATIONS.telescope.targets, variant);
                const targetB = pick(SCIENCE_VARIATIONS.telescope.radioTargets, variant);
                return {
                    q: `Explain how observing tools and models help scientists increase knowledge and understanding of the Universe. Refer to examples such as ${targetA} and ${targetB}. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong answer explains that scientists use tools to collect evidence and models to organise and explain what that evidence means. For example, an optical telescope can collect light from ${targetA}, revealing details that the unaided eye cannot see. A radio telescope can detect radio waves from ${targetB}, providing different information about the same region of space. Models then help scientists represent distances, motions or structures that are too large or complex to view directly. Repeated observations allow evidence to be checked, compared and used to improve scientific explanations.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const target = pick(SCIENCE_VARIATIONS.telescope.radioTargets, variant + 1);
                return {
                    q: `Compare how optical, radio and space-based observations could be used to study ${target}. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong response explains that optical telescopes gather visible light, radio telescopes collect radio waves and space-based telescopes can work above Earth's atmosphere. When studying ${target}, each tool provides different evidence. Optical observations may show shape or brightness, radio observations may reveal signals or gas, and space telescopes may collect clearer data because there is less atmospheric interference. Good answers explain that scientists compare these observations to build a broader and more reliable understanding.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const target = pick(SCIENCE_VARIATIONS.telescope.targets, variant + 2);
                const location = pick(SCIENCE_VARIATIONS.telescope.locations, variant);
                return {
                    q: `Design an extended observing investigation for ${target}. Describe the equipment, repeated observations, recording methods and how the results would improve a model. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong answer describes using a telescope or binoculars from ${location}, observing ${target} on multiple nights at the same time where possible and recording dates, times, weather conditions and measured observations in a table. The student should explain how repeated observations would reveal patterns or changes and how those data could be compared with a model of the object or its motion. Better responses explain how fair methods, labelled diagrams and stored images improve reliability and communication.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    },
    "sky-patterns": {
        mcq: [
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.sky.objects, variant);
                return {
                    stem: `Why does ${object} appear to move across the sky during the night or day?`,
                    correct: "Earth rotates on its axis",
                    wrongs: [
                        "Clouds push all objects from east to west",
                        "Earth stops spinning every evening",
                        "The object circles Earth once every 24 hours"
                    ],
                    explain: "Earth's rotation makes the Sun, Moon and stars appear to move across the sky."
                };
            },
            function (variant) {
                const object = pick(["the Southern Cross", "Orion", "Scorpius", "the Big Dipper"], variant);
                return {
                    stem: `${object} is best described as:`,
                    correct: "a pattern of stars seen from Earth",
                    wrongs: [
                        "a single bright planet",
                        "a cloud of gas inside Earth's atmosphere",
                        "a type of telescope used by astronomers"
                    ],
                    explain: "Constellations are patterns of stars recognised from Earth's point of view."
                };
            },
            function (variant) {
                const season = pick(SCIENCE_VARIATIONS.sky.seasons, variant);
                return {
                    stem: `Why are some constellations easier to see in ${season} than in another season?`,
                    correct: "Earth's position in its orbit changes which part of space faces the night sky",
                    wrongs: [
                        "Stars only shine in one season each year",
                        "Constellations move into Earth's atmosphere and disappear",
                        "The Moon turns constellations on and off each season"
                    ],
                    explain: "As Earth orbits the Sun, the night side of Earth faces different directions in space during the year."
                };
            },
            function (variant) {
                const object = pick(["Venus", "Mars", "Jupiter", "Saturn"], variant);
                return {
                    stem: `Which observation best suggests that ${object} is a planet rather than a star?`,
                    correct: "It changes position compared with nearby background stars over time",
                    wrongs: [
                        "It is only visible through thick cloud",
                        "It is always the brightest object in the sky",
                        "It never rises or sets"
                    ],
                    explain: "Planets appear to wander compared with the background stars because they orbit the Sun."
                };
            },
            function () {
                return {
                    stem: "Why is the Southern Cross useful to observers in the Southern Hemisphere?",
                    correct: "It can be used to help estimate the direction of south",
                    wrongs: [
                        "It shows exactly when every eclipse will happen",
                        "It points directly to the Moon each night",
                        "It is the closest constellation to Earth"
                    ],
                    explain: "The Southern Cross can be used as a guide when locating south in the night sky."
                };
            },
            function (variant) {
                const time = pick(SCIENCE_VARIATIONS.sky.times, variant);
                return {
                    stem: `A long-exposure photo taken at ${time} shows star trails. What do these trails mainly show?`,
                    correct: "The apparent movement of stars caused by Earth's rotation",
                    wrongs: [
                        "The real paths of stars spiralling around Earth each night",
                        "The wind pushing stars through the atmosphere",
                        "The magnetic force between Earth and the stars"
                    ],
                    explain: "Star trails form because Earth's rotation makes stars appear to move across the sky."
                };
            }
        ],
        short: [
            function (variant) {
                const object = pick(["the Sun", "stars", "the Moon"], variant);
                return {
                    q: `Explain why ${object} appear to move across the sky each day.`,
                    sample: `The apparent movement is caused by Earth rotating on its axis. As Earth spins, observers on Earth face different directions in space, so ${object} seem to rise in the east and move toward the west even though Earth is the object actually turning.`,
                    marks: 4
                };
            },
            function (variant) {
                const object = pick(["the Southern Cross", "Orion", "Scorpius", "constellations"], variant);
                return {
                    q: `Describe what ${object} can tell observers about patterns in the sky.`,
                    sample: `${object} show that stars can be grouped into recognisable patterns as seen from Earth. These patterns help observers identify parts of the sky, compare observations over time and, in some cases, estimate direction. Their positions also remind us that the night sky changes during the night and across the year.`,
                    marks: 4
                };
            },
            function (variant) {
                const object = pick(["Venus", "Mars", "Jupiter", "Saturn"], variant);
                return {
                    q: `Compare how ${object} would appear differently from a background star over several nights of observation.`,
                    sample: `${object} would still appear as a bright point of light, but its position would slowly change relative to nearby background stars. A background star pattern usually keeps the same shape, while the planet appears to wander across it. Repeated observations are needed to notice that difference clearly.`,
                    marks: 5
                };
            },
            function (variant) {
                const season = pick(SCIENCE_VARIATIONS.sky.seasons, variant);
                return {
                    q: `Explain why a constellation seen clearly in ${season} may not be seen in another season.`,
                    sample: `As Earth orbits the Sun, the night side of Earth faces different directions in space during different seasons. This means some constellations are visible in ${season} but are hidden in daylight or below the horizon at other times of the year. The stars themselves have not suddenly disappeared; our viewing position has changed.`,
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const object = pick(["the Sun", "constellations", "planets", "star trails"], variant);
                return {
                    q: `Explain the main patterns observed in the sky and how Earth's motion helps account for those patterns. Refer to ${object} in your response. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong answer explains that Earth's rotation causes the daily apparent movement of the Sun, Moon and stars, while Earth's orbit around the Sun changes which constellations are visible in different seasons. The response should refer to observations such as ${object}, use directional language accurately and explain that the patterns are apparent changes caused by Earth's motion rather than the sky circling Earth every day.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const object = pick(["Venus", "Mars", "the Southern Cross", "Orion"], variant);
                return {
                    q: `Analyse how repeated observations of ${object} across several nights could help a class identify patterns in the sky. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong response describes observing ${object} at the same time on several nights, recording its direction, height and nearby stars, then comparing those records to look for patterns. Answers should explain how repeated observations reveal apparent movement, how fair methods improve reliability and how the evidence can be used to distinguish between a constellation, a planet or a daily sky pattern.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const season = pick(SCIENCE_VARIATIONS.sky.seasons, variant);
                return {
                    q: `Design a class investigation that tracks a constellation across the night sky and across the year, beginning in ${season}. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong answer outlines a method for observing the same constellation at regular times during one evening and at regular dates across the year beginning in ${season}. Students should record time, direction, altitude and sky conditions, then graph or diagram the changes. Better responses explain that Earth rotates daily and orbits yearly, so both timescales affect what is seen and how it should be interpreted.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    },
    "earth-moon-sun": {
        mcq: [
            function (variant) {
                const phase = pick(SCIENCE_VARIATIONS.earthMoonSun.phases, variant);
                return {
                    stem: `Why might the Moon appear ${phase} from Earth?`,
                    correct: "We see different amounts of the Moon's lit half as it orbits Earth",
                    wrongs: [
                        "Earth's shadow covers the Moon every night",
                        "The Moon changes its shape as it cools",
                        "Clouds remove part of the Moon from space"
                    ],
                    explain: "Moon phases happen because the Moon orbits Earth and we see different portions of its sunlit half."
                };
            },
            function () {
                return {
                    stem: "Day and night on Earth are caused by:",
                    correct: "Earth rotating on its axis",
                    wrongs: [
                        "the Moon orbiting Earth",
                        "the Sun travelling around Earth once each day",
                        "changes in cloud cover across the planet"
                    ],
                    explain: "As Earth rotates, different parts of the planet face the Sun and then turn away."
                };
            },
            function () {
                return {
                    stem: "One year on Earth is the time it takes for Earth to:",
                    correct: "orbit the Sun once",
                    wrongs: [
                        "rotate once on its axis",
                        "complete one Moon phase cycle",
                        "move from sunrise to sunset once"
                    ],
                    explain: "Earth takes about 365 days to revolve around the Sun once."
                };
            },
            function () {
                return {
                    stem: "Which statement about the Moon is correct?",
                    correct: "The Moon reflects sunlight",
                    wrongs: [
                        "The Moon makes its own light",
                        "The Moon can only be seen at night",
                        "The Moon is larger than Earth"
                    ],
                    explain: "The Moon is visible because it reflects sunlight."
                };
            },
            function () {
                return {
                    stem: "A solar eclipse can occur when:",
                    correct: "the Moon moves between Earth and the Sun",
                    wrongs: [
                        "Earth moves between the Moon and the Sun every evening",
                        "the Sun passes behind a distant planet",
                        "cloud cover blocks sunlight all day"
                    ],
                    explain: "A solar eclipse happens when the Moon passes between Earth and the Sun and blocks some sunlight."
                };
            },
            function (variant) {
                const interval = pick(SCIENCE_VARIATIONS.earthMoonSun.intervals, variant);
                return {
                    stem: `Why can the Moon sometimes be seen during daylight as well as at night over ${interval}?`,
                    correct: "Its orbit changes where it appears in the sky compared with the Sun",
                    wrongs: [
                        "It only reflects light during school hours",
                        "Earth stops rotating when the Moon is visible",
                        "The Moon glows more strongly in the daytime"
                    ],
                    explain: "Because the Moon orbits Earth, it is not always opposite the Sun in the sky and can be visible during the day."
                };
            }
        ],
        short: [
            function (variant) {
                const phase = pick(SCIENCE_VARIATIONS.earthMoonSun.phases, variant);
                return {
                    q: `Use a labelled diagram in words to explain why the Moon can appear ${phase} from Earth.`,
                    sample: `The Sun always lights half of the Moon. As the Moon orbits Earth, we see different amounts of that lit half from our position on Earth. If the Moon appears ${phase}, it means only part of the illuminated side is facing us. The Moon itself is not changing shape; our viewing angle is changing.`,
                    marks: 5
                };
            },
            function (variant) {
                const observation = pick(SCIENCE_VARIATIONS.earthMoonSun.observations, variant);
                return {
                    q: `Explain how Earth's rotation helps account for ${observation}.`,
                    sample: `Earth rotates on its axis once about every 24 hours. Because of this rotation, different places on Earth face the Sun and then turn away from it. That is why ${observation} occur and why objects in the sky appear to move from east to west during the day and night.`,
                    marks: 4
                };
            },
            function () {
                return {
                    q: "Compare Earth's rotation and Earth's revolution around the Sun.",
                    sample: "Earth's rotation is its spin on its axis and takes about 24 hours, causing day and night. Earth's revolution is its orbit around the Sun and takes about 365 days, creating the length of a year and contributing to seasonal changes in what we see in the sky.",
                    marks: 4
                };
            },
            function (variant) {
                const interval = pick(SCIENCE_VARIATIONS.earthMoonSun.intervals, variant);
                return {
                    q: `Explain why the Moon can be visible at different times of day over about ${interval}.`,
                    sample: `The Moon orbits Earth, so its position in the sky changes from day to day. Sometimes it is on the same side of the sky as the Sun and can be seen in daylight; at other times it is best seen at night. The changing position is linked to the Moon's orbit and the phase cycle.`,
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const observation = pick(SCIENCE_VARIATIONS.earthMoonSun.observations, variant);
                return {
                    q: `Using scientific ideas and observations, explain how the motions of Earth and the Moon create patterns such as ${observation}, Moon phases and changing positions of objects in the sky. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong answer explains that Earth rotates on its axis once every 24 hours, causing day and night and the apparent daily movement of the Sun and stars. Earth also orbits the Sun once each year. The Moon orbits Earth, and because half of the Moon is always lit by the Sun, we see different portions of that lit half over time, creating the phases. Good answers refer to observations such as ${observation}, use clear scientific language and link each pattern to the correct motion.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const phase = pick(SCIENCE_VARIATIONS.earthMoonSun.phases, variant);
                return {
                    q: `Explain how a month of observations of the Moon, including the ${phase} phase, could be used to build and test a model of the Earth-Moon-Sun system. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response describes observing the Moon regularly across a month, recording the date, time, direction and visible phase, including when it appears ${phase}. Those observations can be compared with a model showing the Sun lighting half of the Moon and the Moon orbiting Earth. Better responses explain how repeated data can confirm or refine the model and help communicate why the Moon appears to change shape.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const interval = pick(SCIENCE_VARIATIONS.earthMoonSun.intervals, variant);
                return {
                    q: `Design an investigation that uses observations over ${interval} to distinguish between Earth's rotation, Earth's revolution and the Moon's orbit. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong answer identifies what would be observed on different timescales: daily changes such as sunrise and sunset for Earth's rotation, phase changes for the Moon's orbit and longer-term seasonal sky changes for Earth's revolution. Students should explain what data would be collected over ${interval}, how it would be recorded and how each pattern would be linked to the correct motion in the Earth-Moon-Sun system.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    },
    "stars-galaxies": {
        mcq: [
            function (variant) {
                const object = pick(["Rigel", "Sirius", "Betelgeuse", "a distant red star"], variant);
                return {
                    stem: `${object} is best described as a:`,
                    correct: "star",
                    wrongs: [
                        "planet",
                        "moon",
                        "galaxy"
                    ],
                    explain: "A star produces its own light. The Sun is our closest star, and other bright points in the night sky can also be stars."
                };
            },
            function () {
                return {
                    stem: "Which statement correctly describes the Solar System?",
                    correct: "It is the Sun and the objects that orbit it",
                    wrongs: [
                        "It is every star in the Milky Way",
                        "It is every galaxy in the Universe",
                        "It is Earth, the Moon and the Sun only"
                    ],
                    explain: "The Solar System includes the Sun and all planets, moons and smaller objects orbiting it."
                };
            },
            function () {
                return {
                    stem: "The Milky Way is a:",
                    correct: "galaxy",
                    wrongs: [
                        "constellation",
                        "single star system",
                        "type of telescope"
                    ],
                    explain: "The Milky Way is the galaxy that contains our Solar System."
                };
            },
            function () {
                return {
                    stem: "Which statement best compares a planet with a star?",
                    correct: "A planet reflects light, while a star produces its own light",
                    wrongs: [
                        "A planet produces more light than a star",
                        "A star always orbits a planet",
                        "A planet is always hotter than a star"
                    ],
                    explain: "Stars emit their own light, while planets are seen because they reflect light from a star."
                };
            },
            function () {
                return {
                    stem: "A galaxy is best described as:",
                    correct: "a huge collection of stars, gas and dust held together by gravity",
                    wrongs: [
                        "one planet and its moon",
                        "a pattern of stars only seen from Earth",
                        "the same thing as a telescope image"
                    ],
                    explain: "Galaxies contain enormous numbers of stars as well as gas and dust."
                };
            },
            function (variant) {
                const discovery = pick(SCIENCE_VARIATIONS.stars.discoveries, variant);
                return {
                    stem: `Which statement shows how ${discovery} can change scientific ideas?`,
                    correct: "New observations can support, refine or replace existing models",
                    wrongs: [
                        "Once a model is published it can never change",
                        "Scientists should ignore evidence that disagrees with old ideas",
                        "Only astronauts are allowed to collect useful evidence"
                    ],
                    explain: "Scientific explanations change when improved observations or new evidence become available."
                };
            }
        ],
        short: [
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.stars.objects, variant);
                return {
                    q: `Explain whether ${object} is best classified as a star, planet or galaxy, and justify your answer.`,
                    sample: `${object} should be classified using its scientific features. A star produces its own light, a planet orbits a star and reflects light, and a galaxy is a vast collection of stars, gas and dust. A clear answer would identify the correct group for ${object} and justify it with those features.`,
                    marks: 4
                };
            },
            function (variant) {
                const discovery = pick(SCIENCE_VARIATIONS.stars.discoveries, variant);
                return {
                    q: `Explain how ${discovery} could help scientists improve a model of space.`,
                    sample: `${discovery} provides new evidence that can be compared with current scientific models. If the observation matches predictions, it may support the model. If it does not, scientists may refine the model so it better explains the evidence. This is how knowledge of stars, planets and galaxies improves over time.`,
                    marks: 5
                };
            },
            function (variant) {
                const structure = pick(SCIENCE_VARIATIONS.stars.structures, variant);
                return {
                    q: `Describe how Earth is related to ${structure}.`,
                    sample: `Earth is one planet in the Solar System. The Solar System sits inside the Milky Way galaxy, and the Milky Way is one galaxy within the wider Universe. A good response clearly places Earth in relation to ${structure} using that sequence from smaller systems to larger ones.`,
                    marks: 4
                };
            },
            function () {
                return {
                    q: "Explain why stars in the night sky can appear different in brightness or colour.",
                    sample: "Stars can appear different because they are at different distances from Earth and can have different sizes and temperatures. Colour can give information about temperature, while brightness depends on both how much light the star emits and how far away it is.",
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const structure = pick(SCIENCE_VARIATIONS.stars.structures, variant);
                return {
                    q: `Explain the relationship between Earth, the Solar System, the Milky Way and ${structure}, and show how observations help scientists understand these structures. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response explains that Earth is a planet in the Solar System, the Solar System is part of the Milky Way and the Milky Way is one galaxy within the Universe. The answer should explain that observations from telescopes, cameras and satellites provide evidence about these structures and allow scientists to refine their models. Better answers clearly connect the scale of each structure and explain that knowledge increases as technology improves.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const discovery = pick(SCIENCE_VARIATIONS.stars.discoveries, variant);
                return {
                    q: `Discuss how technologies such as telescopes and improved imaging have changed scientific understanding of stars and galaxies. Refer to ${discovery} in your response. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong answer explains that improved technologies allow scientists to collect clearer images and different types of electromagnetic data. For example, ${discovery} can reveal new detail that was not visible before. This new evidence can support, refine or replace earlier ideas about stars, planets and galaxies. Good responses emphasise that scientific knowledge changes when observations improve.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const object = pick(["the Solar System", "a star cluster", "the Milky Way", "a distant galaxy"], variant);
                return {
                    q: `Compare the kinds of evidence scientists can collect when observing ${object} and explain how that evidence should be interpreted carefully. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response compares evidence such as images, brightness measurements and observations made in different wavelengths. When observing ${object}, scientists must explain what was directly observed and what was inferred from the evidence. Better responses note that scientific conclusions should be based on repeated observations and that models may be revised if new evidence appears.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    },
    "forces-basics": {
        mcq: [
            function () {
                return {
                    stem: "A force is best defined as:",
                    correct: "a push or a pull",
                    wrongs: [
                        "a type of energy only found in batteries",
                        "the same thing as speed",
                        "a kind of material"
                    ],
                    explain: "Forces are pushes or pulls that can change an object's motion or shape."
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.forces.objects, variant);
                return {
                    stem: `Which is one effect a force can have on ${object}?`,
                    correct: "It can change the object's speed or direction",
                    wrongs: [
                        "It changes the object's chemical formula immediately",
                        "It always turns the object into a liquid",
                        "It removes the object's mass completely"
                    ],
                    explain: "Forces can start or stop motion, change speed or direction and sometimes change shape."
                };
            },
            function () {
                return {
                    stem: "The standard unit used to measure force is the:",
                    correct: "newton",
                    wrongs: [
                        "joule",
                        "metre",
                        "watt"
                    ],
                    explain: "Force is measured in newtons (N)."
                };
            },
            function () {
                return {
                    stem: "Weight is a force caused by:",
                    correct: "gravity",
                    wrongs: [
                        "friction",
                        "magnetism only",
                        "air resistance"
                    ],
                    explain: "Weight is the force of gravity acting on an object."
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.forces.objects, variant + 1);
                return {
                    stem: `Which tool is most suitable for measuring the force needed to pull ${object}?`,
                    correct: "a spring balance or Newton meter",
                    wrongs: [
                        "a thermometer",
                        "a stopwatch",
                        "a measuring cylinder"
                    ],
                    explain: "A spring balance, also called a Newton meter, is used to measure force."
                };
            },
            function (variant) {
                const action = pick(SCIENCE_VARIATIONS.forces.actions, variant);
                const object = pick(SCIENCE_VARIATIONS.forces.objects, variant + 2);
                return {
                    stem: `A student ${action} ${object}. Which statement is most correct?`,
                    correct: "The force may change the object's motion or shape",
                    wrongs: [
                        "The force can only make the object move upward",
                        "The force always makes the object disappear",
                        "The force means no measurements are needed"
                    ],
                    explain: "Forces can affect motion in different ways and can also deform some objects."
                };
            }
        ],
        short: [
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.forces.objects, variant);
                return {
                    q: `Define FORCE and describe TWO effects a force can have on ${object}.`,
                    sample: `A force is a push or pull. On ${object}, a force could start the motion, stop it, speed it up, slow it down, change its direction or change its shape. Any two clearly described effects linked to the object would earn marks.`,
                    marks: 4
                };
            },
            function () {
                return {
                    q: "Explain why weight is described as a force.",
                    sample: "Weight is the force of gravity acting on an object. Gravity pulls objects toward Earth, so weight is not just a number showing how heavy something feels; it is an actual force that can be measured in newtons.",
                    marks: 4
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.forces.objects, variant + 1);
                return {
                    q: `Describe how a Newton meter could be used to measure a force acting on ${object}.`,
                    sample: `A Newton meter is attached to ${object} or used to pull it. The spring inside the meter stretches when a force is applied, and the scale shows the size of the force in newtons. To make the measurement fair, the meter should be read carefully at eye level and repeated if needed.`,
                    marks: 5
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.forces.objects, variant + 2);
                const change = pick(SCIENCE_VARIATIONS.forces.changes, variant);
                return {
                    q: `Give an everyday example showing how a force can make ${object} ${change}.`,
                    sample: `One example is ${object} responding to a push or pull. The applied force can make it ${change} by changing its motion. A strong answer states the force clearly, describes the direction of the push or pull and explains the change in motion or shape.`,
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const object = pick(["a bicycle", "a soccer ball", "a trolley", "a swing"], variant);
                return {
                    q: `Analyse the forces acting on ${object} in an everyday situation. Explain how pushes and pulls change its motion. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response identifies the main forces acting on ${object}, such as an applied push or pull, gravity, friction and air resistance if relevant. The answer should explain how these forces can start motion, stop motion, change speed or alter direction. Better responses use correct scientific language and describe how the net effect of the forces changes over time.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.forces.objects, variant);
                return {
                    q: `Explain how forces can change the motion and shape of ${object}. Refer to specific examples in your response. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong answer explains that forces are pushes and pulls that can cause ${object} to start moving, stop, speed up, slow down, change direction or change shape. The response should include a clear example of motion change and, where suitable, a shape change such as stretching or squashing. Better answers may refer to measuring force in newtons and to the role of gravity as a force.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const object = pick(["a trolley", "a toy car", "a spring", "a ball"], variant);
                return {
                    q: `Design an investigation to test how a bigger push or pull affects ${object}. Identify variables, measurements and expected results. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response identifies the size of the push or pull as the independent variable and a measurement such as distance travelled, speed or spring stretch as the dependent variable. Controls should include using the same ${object}, surface and measuring method. Students should repeat trials, record results in a table and explain that a larger force is expected to produce a greater change in motion or shape.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    },
    "contact-noncontact": {
        mcq: [
            function () {
                return {
                    stem: "Friction is a force that:",
                    correct: "opposes motion between surfaces in contact",
                    wrongs: [
                        "pulls all objects toward Earth",
                        "acts only in outer space",
                        "always speeds objects up"
                    ],
                    explain: "Friction acts between touching surfaces and opposes their motion."
                };
            },
            function () {
                return {
                    stem: "Air resistance is best described as:",
                    correct: "a contact force caused by air pushing against motion",
                    wrongs: [
                        "a magnetic force only found near magnets",
                        "a force that only acts underwater",
                        "not a real force"
                    ],
                    explain: "Air resistance is a type of friction caused by air particles colliding with a moving object."
                };
            },
            function () {
                return {
                    stem: "Which is a non-contact force?",
                    correct: "gravity",
                    wrongs: [
                        "friction",
                        "a push from a hand",
                        "tension in a rope"
                    ],
                    explain: "Gravity acts over a distance, so it is a non-contact force."
                };
            },
            function () {
                return {
                    stem: "Magnetic force is described as non-contact because magnets:",
                    correct: "can attract or repel some objects without touching them",
                    wrongs: [
                        "only work when rubbed against a surface",
                        "always need water to create a force",
                        "produce friction instead of attraction"
                    ],
                    explain: "Magnetic forces can act over a distance, so contact is not required."
                };
            },
            function (variant) {
                const surface = pick(SCIENCE_VARIATIONS.contact.surfaces, variant);
                return {
                    stem: `Which situation best shows a contact force acting on ${surface}?`,
                    correct: "A shoe gripping the ground while walking",
                    wrongs: [
                        "A dropped pen falling toward Earth",
                        "A magnet attracting a paper clip from a distance",
                        "Earth orbiting the Sun"
                    ],
                    explain: "Grip between a shoe and the ground is caused by contact forces, especially friction."
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.contact.objects, variant);
                return {
                    stem: `Which force is most directly involved when ${object} slows down while moving through a fluid or gas?`,
                    correct: "air resistance or water resistance",
                    wrongs: [
                        "magnetism only",
                        "light from the Sun",
                        "a chemical reaction in the object"
                    ],
                    explain: "Resistance from a fluid such as air or water is a contact force that opposes motion."
                };
            }
        ],
        short: [
            function (variant) {
                const situation = pick(SCIENCE_VARIATIONS.contact.situations, variant);
                return {
                    q: `Compare contact and non-contact forces using ${situation} as an example.`,
                    sample: `Contact forces act when objects touch, while non-contact forces act over a distance. In ${situation}, contact forces could include friction, air resistance or tension, depending on the situation. A non-contact force such as gravity may also act. A strong response names one clear example of each and explains whether touching is required.`,
                    marks: 4
                };
            },
            function (variant) {
                const surface = pick(SCIENCE_VARIATIONS.contact.surfaces, variant);
                return {
                    q: `Explain how friction can be both useful and unwanted on ${surface}.`,
                    sample: `Friction on ${surface} can be useful because it provides grip for walking, tyres or braking. It can also be unwanted because it causes wear, produces heat and makes objects harder to move. Strong answers give a clear example of both the useful and unwanted effect.`,
                    marks: 5
                };
            },
            function (variant) {
                const object = pick(["a parachute", "a cyclist", "a falling leaf", "a paper plane"], variant);
                return {
                    q: `Describe how air resistance affects ${object} and suggest ONE way to change its effect.`,
                    sample: `Air resistance acts opposite the motion of ${object}. It can slow the object down and change how quickly it falls or moves forward. The effect can be changed by altering shape, surface area or speed. For example, increasing surface area usually increases air resistance.`,
                    marks: 4
                };
            },
            function () {
                return {
                    q: "Compare gravity and magnetism as non-contact forces.",
                    sample: "Gravity and magnetism are both non-contact forces because they can act over a distance. Gravity pulls masses toward one another, while magnetism can attract or repel certain materials and other magnets. A strong response notes that both act without touching but do not act on exactly the same objects.",
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const situation = pick(["a cyclist riding downhill", "a parachute jump", "a boat moving through water", "a box being pulled with a rope"], variant);
                return {
                    q: `Analyse the contact and non-contact forces acting during ${situation}. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response identifies contact forces such as friction, air resistance, water resistance, tension or support forces and non-contact forces such as gravity. The answer should explain the direction of each force and how the combination of forces affects the motion in ${situation}. Better answers clearly separate contact from non-contact forces and use everyday scientific examples.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const surface = pick(SCIENCE_VARIATIONS.contact.surfaces, variant);
                return {
                    q: `Design a fair test to investigate how ${surface} affects friction or resistance. Identify variables, measurements and safety considerations. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong answer identifies the surface as the independent variable and a measurement such as pull force or distance travelled as the dependent variable. Controls should include using the same object, mass, release point and measuring method. Students should repeat trials and explain that ${surface} changes the size of the contact force. Better responses mention safe handling of equipment and accurate data recording.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const object = pick(["bike brakes", "sports shoes", "seat belts", "parachutes"], variant);
                return {
                    q: `Discuss how understanding contact and non-contact forces helps people design or use ${object} safely and effectively. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response explains what forces are important when using ${object}. For example, designers may increase friction for grip or increase air resistance to slow motion safely, while gravity still acts as a non-contact force. Better answers explain how force knowledge helps improve performance, predict movement and reduce risk.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    },
    "balanced-unbalanced": {
        mcq: [
            function () {
                return {
                    stem: "If forces on an object are balanced, the object:",
                    correct: "has no overall force acting on it",
                    wrongs: [
                        "must start moving faster",
                        "must instantly change direction",
                        "must stop moving at once"
                    ],
                    explain: "Balanced forces mean the net force is zero."
                };
            },
            function () {
                return {
                    stem: "Unbalanced forces cause an object to:",
                    correct: "change its motion",
                    wrongs: [
                        "become invisible",
                        "lose all of its mass",
                        "always move upward"
                    ],
                    explain: "A non-zero net force causes a change in speed and/or direction."
                };
            },
            function (variant) {
                const value = pick(SCIENCE_VARIATIONS.balanced.values, variant) * 10;
                return {
                    stem: `In tug-of-war, each team pulls with ${value} N in opposite directions. What will most likely happen to the rope?`,
                    correct: "It will stay still or keep moving at the same speed",
                    wrongs: [
                        "It must move left",
                        "It must move right",
                        "It breaks because balanced forces destroy the rope"
                    ],
                    explain: "Equal forces in opposite directions are balanced, so there is no change in motion."
                };
            },
            function (variant) {
                const forward = pick(SCIENCE_VARIATIONS.balanced.values, variant) + 6;
                const backward = pick(SCIENCE_VARIATIONS.balanced.values, variant);
                return {
                    stem: `A trolley is pushed forward with ${forward} N while friction acts backward with ${backward} N. What is the net force?`,
                    correct: `${forward - backward} N forward`,
                    wrongs: [
                        `${forward + backward} N forward`,
                        `${forward - backward} N backward`,
                        `${backward} N forward`
                    ],
                    explain: `Net force = ${forward} N forward − ${backward} N backward = ${forward - backward} N forward.`
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.balanced.objects, variant);
                return {
                    stem: `If ${object} is moving at a steady speed in a straight line, the forces are most likely:`,
                    correct: "balanced overall",
                    wrongs: [
                        "unbalanced forward only",
                        "unbalanced backward only",
                        "missing because motion needs no forces"
                    ],
                    explain: "Steady speed in a straight line means there is no change in motion, so the forces are balanced overall."
                };
            },
            function (variant) {
                const object = pick(["a bicycle", "a scooter", "a skateboard", "a trolley"], variant);
                return {
                    stem: `When ${object} brakes to slow down, the braking force is mainly:`,
                    correct: "opposite the direction of motion",
                    wrongs: [
                        "in the same direction as the motion",
                        "directly upward only",
                        "a non-contact magnetic force"
                    ],
                    explain: "Braking friction acts opposite the motion and slows the object."
                };
            }
        ],
        short: [
            function (variant) {
                const forward = pick(SCIENCE_VARIATIONS.balanced.values, variant) + 5;
                const backward = pick(SCIENCE_VARIATIONS.balanced.values, variant);
                return {
                    q: `A box is pushed to the right with ${forward} N while friction acts to the left with ${backward} N. State the net force and describe what will happen.`,
                    sample: `The net force is ${forward - backward} N to the right. Because the forces are unbalanced, the box will accelerate or begin moving to the right. The bigger forward force is not fully cancelled by friction.`,
                    marks: 4
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.balanced.objects, variant);
                return {
                    q: `Describe what happens to ${object} when the forces acting on it become balanced.`,
                    sample: `If the forces on ${object} become balanced, the net force is zero. If it is at rest it will stay at rest, and if it is already moving it will continue at the same speed in the same direction. Balanced forces do not cause a change in motion.`,
                    marks: 4
                };
            },
            function (variant) {
                const object = pick(SCIENCE_VARIATIONS.balanced.objects, variant + 1);
                return {
                    q: `Explain the difference between balanced and unbalanced forces using ${object} as an example.`,
                    sample: `Balanced forces on ${object} mean the pushes and pulls cancel so there is no change in motion. Unbalanced forces mean one side is greater, so ${object} speeds up, slows down or changes direction. A strong answer includes a clear example for both situations.`,
                    marks: 5
                };
            },
            function (variant) {
                const object = pick(["a bicycle", "a scooter", "a skateboard", "a trolley"], variant);
                return {
                    q: `Describe the forces on ${object} when it starts moving, travels at steady speed and then stops.`,
                    sample: `When ${object} starts moving, the forward force is greater than opposing forces, so the motion changes. At steady speed, forward and backward forces are balanced. When it stops, a backward force such as friction or braking becomes unbalanced and slows it to rest.`,
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const object = pick(["a bicycle", "a scooter", "a skateboard", "a trolley"], variant);
                return {
                    q: `Analyse the forces acting on ${object} when it starts moving, travels at a steady speed and then brakes to stop. Include balanced and unbalanced forces. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response explains that when ${object} starts moving, the driving force is greater than the opposing forces, so it accelerates. While travelling at a steady speed, forward and backward forces are balanced, so there is no change in motion. When braking, friction acts opposite the motion, creating an unbalanced force that slows the object to a stop. Better answers use the idea of net force clearly.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const value = pick(SCIENCE_VARIATIONS.balanced.values, variant) * 10;
                return {
                    q: `A class investigates balanced and unbalanced forces using a tug-of-war rope and small carts. Explain what evidence would show the difference between balanced forces of ${value} N each and unbalanced forces. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong answer explains that balanced forces of ${value} N each produce no overall force, so the rope or cart would not change its motion. Unbalanced forces would produce a non-zero net force, so the cart would speed up, slow down or change direction. Good responses describe what should be observed, how the forces would be measured and how the evidence would support the conclusion.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const object = pick(["a cart", "a toy car", "a box", "a skateboard"], variant);
                return {
                    q: `Design an investigation that shows how changing the net force affects the motion of ${object}. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response identifies the net force on ${object} as the key factor being changed and a measure of motion such as speed, distance or acceleration as the dependent variable. Controls should include the same object, surface and measuring method. Students should explain how balanced forces would produce no change in motion and how increasing the unbalanced force would produce a bigger change.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    },
    "graphing-data": {
        mcq: [
            function () {
                return {
                    stem: "In most scientific graphs, the dependent variable is plotted on the:",
                    correct: "y-axis",
                    wrongs: [
                        "x-axis",
                        "title",
                        "scale bar"
                    ],
                    explain: "The dependent variable is usually placed on the y-axis because it changes in response to the independent variable."
                };
            },
            function () {
                return {
                    stem: "Which graph is usually best for showing how a measurement changes over time?",
                    correct: "line graph",
                    wrongs: [
                        "pie chart",
                        "Venn diagram",
                        "map"
                    ],
                    explain: "Line graphs are useful for showing continuous change, especially over time."
                };
            },
            function () {
                return {
                    stem: "A fair test changes only one variable so that:",
                    correct: "the effect of that variable can be identified",
                    wrongs: [
                        "results become more colourful",
                        "graphs are no longer needed",
                        "all results become identical"
                    ],
                    explain: "Changing one variable at a time helps identify which factor caused the change in results."
                };
            },
            function () {
                return {
                    stem: "Why should axis labels include units?",
                    correct: "Units show what was measured and the scale used",
                    wrongs: [
                        "Units are only needed in mathematics",
                        "Units make any result automatically correct",
                        "Units replace the need for a graph title"
                    ],
                    explain: "Units help readers understand exactly what quantity was measured and in what scale."
                };
            },
            function () {
                return {
                    stem: "Repeating measurements three times mainly helps scientists to:",
                    correct: "increase reliability and identify unusual results",
                    wrongs: [
                        "change the independent variable",
                        "avoid writing a conclusion",
                        "turn a line graph into a bar graph"
                    ],
                    explain: "Repeated trials make results more reliable and help identify anomalies."
                };
            },
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.graphing.investigations, variant);
                return {
                    stem: `For an investigation about ${investigation}, what should be done before drawing the graph?`,
                    correct: "Organise the results clearly in a table and check labels and units",
                    wrongs: [
                        "Choose random numbers to fill missing values",
                        "Delete any value that does not match the expected pattern",
                        "Swap the independent and dependent variables"
                    ],
                    explain: "Good graphing begins with clearly organised data, correct labels and accurate units."
                };
            }
        ],
        short: [
            function () {
                return {
                    q: "State THREE features of a good scientific graph.",
                    sample: "A good scientific graph should have a clear title, labelled axes with units and an appropriate scale. Other acceptable features include plotting points accurately, choosing a suitable graph type and drawing a neat line or bars.",
                    marks: 4
                };
            },
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.graphing.investigations, variant);
                return {
                    q: `For an investigation about ${investigation}, identify the independent variable, the dependent variable and ONE controlled variable.`,
                    sample: `The independent variable is the factor changed by the student. The dependent variable is the factor measured, and a controlled variable is something kept the same so the test is fair. In an investigation about ${investigation}, a strong answer identifies all three clearly and uses a suitable example of a control.`,
                    marks: 5
                };
            },
            function (variant) {
                const measure = pick(SCIENCE_VARIATIONS.graphing.measures, variant);
                const unit = pick(SCIENCE_VARIATIONS.graphing.units, variant);
                return {
                    q: `Explain why scientists repeat measurements of ${measure} and may calculate an average in ${unit}.`,
                    sample: `Repeating measurements of ${measure} improves reliability because it reduces the effect of random error. Calculating an average gives a typical value in ${unit} and makes the overall pattern easier to see. Repeated trials can also help scientists identify anomalies or mistakes.`,
                    marks: 4
                };
            },
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.graphing.investigations, variant + 1);
                const graphType = pick(["a line graph", "a bar graph"], variant);
                return {
                    q: `Suggest a suitable graph type for ${investigation} and justify your choice.`,
                    sample: `${graphType} would be suitable if it matches the kind of data collected. A line graph is useful for continuous change, especially over time, while a bar graph is useful for comparing categories. A strong answer names the graph type, links it to the variables in ${investigation} and explains why it would communicate the data clearly.`,
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.graphing.investigations, variant);
                return {
                    q: `Design a simple investigation to test ${investigation}. Identify variables, describe how the data would be recorded and explain how the results should be graphed. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong answer identifies the independent variable, dependent variable and key controls for ${investigation}. The method should describe repeated trials, recording the data in a table and using correct units. The response should then explain how the results would be graphed with labelled axes, an appropriate scale and a graph type that suits the data. Better answers explain how the graph would be used to identify patterns or anomalies.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.graphing.investigations, variant + 1);
                return {
                    q: `Explain how a fair test should be planned, recorded and repeated for ${investigation}. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong response explains that only one variable should be changed in ${investigation} while other relevant factors are controlled. Data should be recorded clearly in a table with units, repeated several times and checked for anomalies. Good answers explain that repeating and averaging results improves reliability and that the final graph should communicate the pattern accurately.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const graphType = pick(["line graphs", "bar graphs", "results tables"], variant);
                return {
                    q: `Discuss how ${graphType} help scientists process and communicate data from classroom investigations. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong answer explains that scientists first organise results carefully, then choose a representation such as ${graphType} that suits the data collected. The response should explain the importance of labels, units, scales and repeated trials. Better answers describe how patterns, trends and anomalies become easier to see when data are processed clearly and how this supports evidence-based conclusions.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    },
    "interpreting-graphs": {
        mcq: [
            function () {
                return {
                    stem: "On a line graph, a section that slopes upward from left to right shows that the dependent variable is:",
                    correct: "increasing",
                    wrongs: [
                        "decreasing",
                        "staying constant",
                        "missing"
                    ],
                    explain: "An upward trend shows the measured value is increasing."
                };
            },
            function () {
                return {
                    stem: "An anomaly in a set of results is:",
                    correct: "a result that does not fit the general pattern",
                    wrongs: [
                        "the average of all results",
                        "the independent variable",
                        "the title of a graph"
                    ],
                    explain: "An anomaly is an unusual data point that differs from the overall trend."
                };
            },
            function () {
                return {
                    stem: "Which statement is the best scientific conclusion?",
                    correct: "The data show that increasing ramp height increased the car's travel distance",
                    wrongs: [
                        "I liked the experiment",
                        "The graph proves everything perfectly",
                        "The teacher probably wanted answer C"
                    ],
                    explain: "Scientific conclusions should be based directly on the evidence collected."
                };
            },
            function () {
                return {
                    stem: "Which graph is usually best for comparing separate categories, such as different surfaces?",
                    correct: "bar graph",
                    wrongs: [
                        "line graph",
                        "scatter plot",
                        "flow chart"
                    ],
                    explain: "Bar graphs are useful for comparing categories or groups."
                };
            },
            function () {
                return {
                    stem: "If one group in a class investigation gets a different result from everyone else, the first sensible step is to:",
                    correct: "check the method, measurements and graph for possible error",
                    wrongs: [
                        "delete the result immediately",
                        "change the conclusion to match that result only",
                        "ignore the rest of the data"
                    ],
                    explain: "Unusual results should be checked against the method and measurements before being accepted or rejected."
                };
            },
            function (variant) {
                const trend = pick(SCIENCE_VARIATIONS.interpreting.trends, variant);
                return {
                    stem: `A graph line that becomes horizontal shows the measured value most likely:`,
                    correct: "stays constant for that part of the graph",
                    wrongs: [
                        "is no longer being measured anywhere",
                        "must be increasing faster than before",
                        "proves the investigation was unfair"
                    ],
                    explain: "A horizontal section means the dependent variable is not changing during that interval."
                };
            }
        ],
        short: [
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.interpreting.investigations, variant);
                return {
                    q: `A graph shows results for ${investigation}. Describe ONE clear trend and give ONE scientific reason for it.`,
                    sample: `A strong answer identifies a clear trend from the graph, such as values increasing, decreasing or staying constant. It then gives a scientific reason linked to ${investigation}. The explanation should refer to the evidence shown rather than personal opinion.`,
                    marks: 4
                };
            },
            function (variant) {
                const evidence = pick(SCIENCE_VARIATIONS.interpreting.evidence, variant);
                return {
                    q: `Explain TWO reasons why an anomaly might appear in ${evidence} and what should be done next.`,
                    sample: `An anomaly may appear because of a measurement mistake, a recording error, equipment problems or an unfair trial. The next step is to check ${evidence}, review the method and repeat the trial if needed rather than ignoring the unusual result straight away.`,
                    marks: 5
                };
            },
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.interpreting.investigations, variant + 1);
                return {
                    q: `Write an evidence-based conclusion for a graph about ${investigation}.`,
                    sample: `A good conclusion states what the data show about ${investigation} using words such as increase, decrease or no clear change. It should refer to the trend seen in the graph and avoid opinion or unsupported claims. Better answers may mention the reliability of repeated trials or any anomaly that was considered.`,
                    marks: 4
                };
            },
            function () {
                return {
                    q: "Explain how graphs and tables help scientists communicate findings clearly.",
                    sample: "Graphs and tables organise information so trends, comparisons and anomalies are easier to see. They allow other people to understand what was measured, compare results and check whether the conclusion matches the evidence. Clear labels, units and titles are important for accurate communication.",
                    marks: 5
                };
            }
        ],
        long: [
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.interpreting.investigations, variant);
                return {
                    q: `A class collected data for ${investigation}. Explain how the data should be processed and represented, describe the trend, identify how an anomaly would be handled and communicate an evidence-based conclusion. (${variant % 2 === 0 ? 10 : 8} marks)`,
                    sample: `A strong answer explains that the results should be organised in a table, checked for errors and graphed using a suitable graph type. The response should then describe the overall trend for ${investigation}, identify any anomaly as a value that does not fit the pattern, explain how it should be checked and provide a conclusion based directly on the data. Better answers mention repeated trials and reliability.`,
                    marks: variant % 2 === 0 ? 10 : 8
                };
            },
            function (variant) {
                const evidence = pick(SCIENCE_VARIATIONS.interpreting.evidence, variant);
                return {
                    q: `Discuss how scientists decide whether a conclusion is supported by ${evidence}. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong response explains that scientists compare the conclusion with ${evidence}, looking for trends, repeated results and possible anomalies. The conclusion should describe what the evidence shows, not what someone expected to happen. Better answers explain that errors should be checked and that reliable conclusions come from careful analysis and communication of the data.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            },
            function (variant) {
                const investigation = pick(SCIENCE_VARIATIONS.interpreting.investigations, variant + 1);
                return {
                    q: `Compare two sets of class results for ${investigation} and explain how a scientist should interpret differences between them. (${variant % 2 === 0 ? 8 : 10} marks)`,
                    sample: `A strong answer explains that the scientist should compare the patterns in both sets of results, check whether the same method and scales were used and look for anomalies or inconsistent trials. If the results differ for ${investigation}, the method and measurements should be reviewed before drawing a final conclusion. Better responses explain how evidence, reliability and fair testing affect interpretation.`,
                    marks: variant % 2 === 0 ? 8 : 10
                };
            }
        ]
    }
};

function buildScienceExtraQuestions() {
    const counts = {
        mcq: evenDistribution(460, SCIENCE_TOPIC_IDS),
        short: evenDistribution(185, SCIENCE_TOPIC_IDS),
        long: evenDistribution(44, SCIENCE_TOPIC_IDS)
    };
    const extras = { mcqs: [], short: [], long: [] };
    let mcqId = 41;
    let shortId = 16;
    let longId = 7;

    SCIENCE_TOPIC_IDS.forEach(function (topicId) {
        const builders = SCIENCE_BUILDERS[topicId];

        for (let i = 0; i < counts.mcq[topicId]; i += 1) {
            const template = builders.mcq[i % builders.mcq.length];
            const cycle = Math.floor(i / builders.mcq.length);
            extras.mcqs.push(makeMcq(`s-mcq-${mcqId}`, topicId, template(cycle), i));
            mcqId += 1;
        }

        for (let i = 0; i < counts.short[topicId]; i += 1) {
            const template = builders.short[i % builders.short.length];
            const cycle = Math.floor(i / builders.short.length);
            extras.short.push(makeWritten(`s-sa-${shortId}`, topicId, template(cycle)));
            shortId += 1;
        }

        for (let i = 0; i < counts.long[topicId]; i += 1) {
            const template = builders.long[i % builders.long.length];
            const cycle = Math.floor(i / builders.long.length);
            extras.long.push(makeWritten(`s-la-${longId}`, topicId, template(cycle)));
            longId += 1;
        }
    });

    return extras;
}

const SCIENCE_EXTRA = buildScienceExtraQuestions();

function buildSciencePromptContextSentence(question, occurrenceNumber) {
    const index = occurrenceNumber - 2;
    switch (question.topic) {
    case "telescope-tools":
        return `Focus on ${pick(SCIENCE_VARIATIONS.telescope.targets, index)} from ${pick(SCIENCE_VARIATIONS.telescope.locations, index + occurrenceNumber)} while recording ${pick(SCIENCE_VARIATIONS.telescope.records, index + occurrenceNumber)} in scenario ${occurrenceNumber}.`;
    case "sky-patterns":
        return `Focus on ${pick(SCIENCE_VARIATIONS.sky.objects, index)} in the ${pick(SCIENCE_VARIATIONS.sky.directions, index + occurrenceNumber)} sky during ${pick(SCIENCE_VARIATIONS.sky.seasons, index + occurrenceNumber)} at ${pick(SCIENCE_VARIATIONS.sky.times, index + 1)} in scenario ${occurrenceNumber}.`;
    case "earth-moon-sun":
        return `Focus on ${pick(SCIENCE_VARIATIONS.earthMoonSun.observations, index)} over ${pick(SCIENCE_VARIATIONS.earthMoonSun.intervals, index + occurrenceNumber)} with a ${pick(SCIENCE_VARIATIONS.earthMoonSun.phases, index + 1)} Moon example in scenario ${occurrenceNumber}.`;
    case "stars-galaxies":
        return `Focus on ${pick(SCIENCE_VARIATIONS.stars.objects, index)} within ${pick(SCIENCE_VARIATIONS.stars.structures, index + occurrenceNumber)} using evidence from ${pick(SCIENCE_VARIATIONS.stars.discoveries, index + 1)} in scenario ${occurrenceNumber}.`;
    case "forces-basics":
        return `Focus on ${pick(SCIENCE_VARIATIONS.forces.objects, index)} when a force ${pick(SCIENCE_VARIATIONS.forces.actions, index + occurrenceNumber)} and makes it ${pick(SCIENCE_VARIATIONS.forces.changes, index + 1)} in scenario ${occurrenceNumber}.`;
    case "contact-noncontact":
        return `Focus on ${pick(SCIENCE_VARIATIONS.contact.situations, index)} on ${pick(SCIENCE_VARIATIONS.contact.surfaces, index + occurrenceNumber)} with ${pick(SCIENCE_VARIATIONS.contact.objects, index + 1)} in scenario ${occurrenceNumber}.`;
    case "balanced-unbalanced":
        return `Focus on ${pick(SCIENCE_VARIATIONS.balanced.objects, index)} when it ${pick(SCIENCE_VARIATIONS.balanced.motions, index + 1)} with ${pick(SCIENCE_VARIATIONS.balanced.values, index + occurrenceNumber)} N examples in scenario ${occurrenceNumber}.`;
    case "graphing-data":
        return `Focus on ${pick(SCIENCE_VARIATIONS.graphing.investigations, index)} using a ${pick(SCIENCE_VARIATIONS.graphing.graphTypes, index + occurrenceNumber)} to show ${pick(SCIENCE_VARIATIONS.graphing.measures, index + 1)} in ${pick(SCIENCE_VARIATIONS.graphing.units, index + occurrenceNumber)} for scenario ${occurrenceNumber}.`;
    case "interpreting-graphs":
        return `Focus on ${pick(SCIENCE_VARIATIONS.interpreting.investigations, index)} where the trend ${pick(SCIENCE_VARIATIONS.interpreting.trends, index + 1)} in ${pick(SCIENCE_VARIATIONS.interpreting.evidence, index + occurrenceNumber)} for scenario ${occurrenceNumber}.`;
    default:
        return `Use science scenario ${occurrenceNumber}.`;
    }
}

function makeSciencePromptUnique(basePrompt, question, occurrenceNumber, usedPrompts) {
    let offset = 0;
    while (true) {
        const contextSentence = buildSciencePromptContextSentence(question, occurrenceNumber + offset);
        const candidate = `${basePrompt} ${contextSentence}`;
        if (!usedPrompts.has(candidate)) {
            return candidate;
        }
        offset += 1;
    }
}

function dedupeSciencePromptTexts(subject) {
    const promptCounts = Object.create(null);
    const usedPrompts = new Set();

    ["mcqs", "short", "long"].forEach(function (section) {
        subject[section].forEach(function (question) {
            const basePrompt = question.q.trim();
            const occurrenceNumber = (promptCounts[basePrompt] || 0) + 1;
            promptCounts[basePrompt] = occurrenceNumber;

            if (occurrenceNumber === 1 && !usedPrompts.has(basePrompt)) {
                usedPrompts.add(basePrompt);
                return;
            }

            question.q = makeSciencePromptUnique(basePrompt, question, occurrenceNumber, usedPrompts);
            usedPrompts.add(question.q);
        });
    });

    return subject;
}

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
        },
        ...SCIENCE_EXTRA.mcqs
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
        },
        ...SCIENCE_EXTRA.short
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
        },
        ...SCIENCE_EXTRA.long
    ],

    /* =========================================================
       PRACTICE QUIZZES — 30 quizzes total × 20 questions.
       Generated at boot from `practiceTopics`.
       ========================================================= */
    practiceTopics: [
        {
            id: "universe-skills",
            name: "Observing the Universe & Science Skills",
            outcomes: "SC4-OTU-01 · SC4-WS-05 · SC4-WS-08",
            sourceTopics: ["telescope-tools", "sky-patterns", "earth-moon-sun", "stars-galaxies", "graphing-data", "interpreting-graphs"],
            setCount: 15
        },
        {
            id: "forces",
            name: "Forces in Everyday Contexts",
            outcomes: "SC4-FOR-01 · SC4-WS-08",
            sourceTopics: ["forces-basics", "contact-noncontact", "balanced-unbalanced"],
            setCount: 15
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
            focus: "Half-Yearly simulation — broad balanced mix",
            duration: 70,
            questionIds: [
                "s-mcq-3","s-mcq-7","s-mcq-11","s-mcq-15","s-mcq-19","s-mcq-23","s-mcq-28","s-mcq-33",
                "s-mcq-38","s-mcq-44","s-mcq-95","s-mcq-146","s-mcq-198","s-mcq-250","s-mcq-299","s-mcq-350",
                "s-mcq-401","s-mcq-453","s-mcq-49","s-mcq-100","s-sa-59","s-sa-79","s-sa-100","s-sa-9",
                "s-sa-15","s-sa-14","s-sa-38","s-sa-63","s-sa-83","s-sa-103","s-la-37","s-la-9"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — balanced topic rotation A",
            duration: 70,
            questionIds: [
                "s-mcq-304","s-mcq-354","s-mcq-406","s-mcq-459","s-mcq-54","s-mcq-105","s-mcq-151","s-mcq-203",
                "s-mcq-255","s-mcq-309","s-mcq-359","s-mcq-411","s-mcq-464","s-mcq-59","s-mcq-109","s-mcq-156",
                "s-mcq-208","s-mcq-261","s-mcq-314","s-mcq-364","s-sa-164","s-sa-184","s-sa-2","s-sa-68",
                "s-sa-87","s-sa-106","s-sa-124","s-sa-169","s-sa-188","s-sa-19","s-la-14","s-la-40"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — balanced topic rotation B",
            duration: 70,
            questionIds: [
                "s-mcq-114","s-mcq-160","s-mcq-213","s-mcq-266","s-mcq-320","s-mcq-368","s-mcq-416","s-mcq-470",
                "s-mcq-65","s-mcq-118","s-mcq-165","s-mcq-218","s-mcq-272","s-mcq-325","s-mcq-373","s-mcq-422",
                "s-mcq-475","s-mcq-70","s-mcq-123","s-mcq-169","s-sa-90","s-sa-110","s-sa-128","s-sa-141",
                "s-sa-174","s-sa-23","s-sa-42","s-sa-94","s-sa-113","s-sa-131","s-la-48","s-la-19"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced topic rotation C",
            duration: 70,
            questionIds: [
                "s-mcq-378","s-mcq-427","s-mcq-481","s-mcq-75","s-mcq-127","s-mcq-174","s-mcq-223","s-mcq-277",
                "s-mcq-330","s-mcq-382","s-mcq-432","s-mcq-487","s-mcq-80","s-mcq-132","s-mcq-178","s-mcq-228",
                "s-mcq-283","s-mcq-335","s-mcq-387","s-mcq-437","s-sa-191","s-sa-27","s-sa-47","s-sa-72",
                "s-sa-116","s-sa-135","s-sa-147","s-sa-195","s-sa-31","s-sa-51","s-la-24","s-la-44"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 70,
            questionIds: [
                "s-mcq-183","s-mcq-233","s-mcq-288","s-mcq-340","s-mcq-392","s-mcq-442","s-mcq-492","s-mcq-85",
                "s-mcq-137","s-mcq-188","s-mcq-238","s-mcq-294","s-mcq-345","s-mcq-396","s-mcq-447","s-mcq-498",
                "s-mcq-90","s-mcq-141","s-mcq-192","s-mcq-243","s-sa-152","s-sa-178","s-sa-199","s-sa-35",
                "s-sa-55","s-sa-76","s-sa-98","s-sa-119","s-sa-139","s-sa-158","s-la-29","s-la-34"
            ]
        }
    ]
};

dedupeSciencePromptTexts(window.SUBJECT_DATA.science);

const SCIENCE_LEARNING_GUIDES = [
    {
        id: "science-guide-telescope-tools",
        topicId: "telescope-tools",
        title: "Using tools and models to study space",
        intro: "Scientists use different tools and models because space is too large, too far away and too complex to study with the unaided eye alone.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Optical telescopes collect visible light and help observers see faint objects in more detail.",
                    "Radio telescopes detect radio waves, so they can reveal information an optical telescope cannot show.",
                    "Scientific models help represent systems, patterns and relationships that cannot be viewed directly."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Name the tool or model first, then explain what kind of information it helps scientists collect.",
                    "Link observations to evidence by explaining what the scientist can record, compare or measure.",
                    "If the question mentions repeated observations, explain how patterns over time make conclusions stronger."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "A telescope does not change the object in space - it improves the observation.",
                    "A model is not the real thing - it is a simplified representation used to explain ideas.",
                    "Different telescopes are used because they detect different kinds of information."
                ]
            }
        ],
        quickChecks: [
            "Can I explain what extra evidence the tool gives scientists?",
            "Have I linked the observation to a stronger scientific explanation?"
        ]
    },
    {
        id: "science-guide-sky-patterns",
        topicId: "sky-patterns",
        title: "Recognising patterns in the sky",
        intro: "Many sky questions are about noticing regular patterns and then explaining what those patterns tell us about objects viewed from Earth.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Objects such as the Sun and stars appear to move across the sky because Earth rotates.",
                    "Constellations are patterns of stars as seen from Earth.",
                    "Planets can change position against the background stars over time."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Identify the pattern first, such as daily movement or changing position over time.",
                    "Then explain the scientific reason for the pattern, not just what is seen.",
                    "Use an example observation if the question asks how someone could tell the difference between two objects."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "The apparent motion in the sky is often caused by Earth's movement, not the object travelling around Earth each day.",
                    "A constellation is a pattern of stars, not a group of planets.",
                    "Useful sky guides such as the Southern Cross help with direction, not prediction of every event."
                ]
            }
        ],
        quickChecks: [
            "Have I described both the pattern and the reason for it?",
            "Did I explain the observation from Earth's point of view?"
        ]
    },
    {
        id: "science-guide-earth-moon-sun",
        topicId: "earth-moon-sun",
        title: "Earth, Moon and Sun patterns",
        intro: "This topic connects everyday observations such as day and night, shadows and Moon phases to the motions of Earth and the Moon.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Earth rotating on its axis causes day and night.",
                    "Earth orbiting the Sun takes about one year.",
                    "Moon phases happen because we see different amounts of the Moon's lit half as it orbits Earth."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "State which body is moving first, then explain the pattern that movement creates.",
                    "Use words such as rotate, orbit, lit half and observed from Earth accurately.",
                    "If the question asks for observations, include what a person would actually notice in the sky."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Moon phases are not caused by Earth's shadow each night.",
                    "The Moon does not make its own light - it reflects sunlight.",
                    "Day and night come from Earth's rotation, not the Moon orbiting Earth."
                ]
            }
        ],
        quickChecks: [
            "Have I named the motion that causes the pattern?",
            "Did I explain the pattern using correct Earth-Moon-Sun language?"
        ]
    },
    {
        id: "science-guide-stars-galaxies",
        topicId: "stars-galaxies",
        title: "Stars, planets, galaxies and changing scientific ideas",
        intro: "Questions in this topic often ask students to classify objects in space and explain how better observations can improve scientific models.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "The Sun is a star, and the Solar System is the Sun plus the objects orbiting it.",
                    "The Milky Way is the galaxy that contains our Solar System.",
                    "Scientific ideas can be refined or replaced when new evidence becomes available."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Identify the object or structure clearly before giving details about it.",
                    "If the question is about scientific change, link new observations to improved explanations or models.",
                    "Use the scale words carefully: planet, star, Solar System, galaxy and Universe are not interchangeable."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "A galaxy is much larger than a Solar System.",
                    "Not every object that shines in the sky is a star.",
                    "New evidence strengthens science by testing ideas - it does not mean earlier scientists were simply guessing."
                ]
            }
        ],
        quickChecks: [
            "Have I used the correct space term for the object or system?",
            "If evidence is mentioned, did I explain how it changes understanding?"
        ]
    },
    {
        id: "science-guide-forces-basics",
        topicId: "forces-basics",
        title: "Pushes, pulls and the effects of forces",
        intro: "Force questions focus on what a push or pull does to an object, such as starting motion, stopping motion, changing speed, changing direction or changing shape.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "A force is a push or a pull.",
                    "Forces can change an object's speed, direction or shape.",
                    "Everyday examples help show how forces work in real contexts."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Name the object, then state the force acting on it and the effect of that force.",
                    "Use a clear cause-and-effect sentence such as 'The push causes the object to speed up'.",
                    "If more than one force is involved, explain what each force is doing."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "A force is the action, not the object itself.",
                    "Objects do not need to be touched to always have an effect, but many everyday forces are contact forces.",
                    "Changing shape is also an effect of force, not just changing motion."
                ]
            }
        ],
        quickChecks: [
            "Have I named both the force and the effect?",
            "Would my example make sense in an everyday situation?"
        ]
    },
    {
        id: "science-guide-contact-noncontact",
        topicId: "contact-noncontact",
        title: "Contact and non-contact forces",
        intro: "This topic compares forces that need touching with forces that can act across a distance, while also linking those ideas to friction, air resistance and gravity.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Contact forces need touching, such as friction, air resistance and applied force.",
                    "Non-contact forces act without touching, such as gravity and magnetism.",
                    "The surface or medium can change how large a contact force becomes."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Decide first whether the force needs touching or not.",
                    "If the question compares situations, explain what changes the size or effect of the force.",
                    "Use a concrete example, such as a magnet and paper clip or a parachute and air resistance."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Gravity is non-contact even though objects still fall toward Earth.",
                    "Friction and air resistance are both contact forces because matter interacts with matter.",
                    "A magnetic force does not need direct contact to act."
                ]
            }
        ],
        quickChecks: [
            "Did I classify the force correctly as contact or non-contact?",
            "Have I explained why the force changes the motion or result?"
        ]
    },
    {
        id: "science-guide-balanced-unbalanced",
        topicId: "balanced-unbalanced",
        title: "Balanced and unbalanced forces",
        intro: "Balanced-force questions ask whether forces cancel out, while unbalanced-force questions ask how motion changes when one force is greater than another.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Balanced forces cause no change in motion, so an object stays still or keeps moving at steady speed.",
                    "Unbalanced forces cause a change in motion, such as speeding up, slowing down or changing direction.",
                    "Thinking about the overall or net force helps explain the result."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Compare the forces first and decide whether they cancel out.",
                    "Then describe the motion that would happen because of that force balance.",
                    "If numbers are given, use them to justify whether the forces are equal or unequal."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Balanced does not always mean not moving - it can mean moving at steady speed.",
                    "Unbalanced forces do not have to make an object move faster only; they can also slow or turn it.",
                    "The biggest single force is not enough - compare all forces acting on the object."
                ]
            }
        ],
        quickChecks: [
            "Have I decided whether the net force is zero or not?",
            "Did I describe the correct change in motion?"
        ]
    },
    {
        id: "science-guide-graphing-data",
        topicId: "graphing-data",
        title: "Planning investigations and graphing data",
        intro: "Graphing questions are about choosing variables carefully, recording data clearly and selecting a graph that matches the investigation.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "The independent variable is what is changed and the dependent variable is what is measured.",
                    "Fair tests keep control variables the same.",
                    "Tables and graphs should have labels, units and a clear title."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Start by naming the variables, then explain how the data will be recorded.",
                    "Choose a graph type that matches the data set and describe what goes on each axis.",
                    "Mention repeated trials and averages when the question asks about reliability."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "The dependent variable goes on the y-axis because it depends on what was changed.",
                    "A fair test changes one variable at a time.",
                    "A graph is not complete if the axes or units are missing."
                ]
            }
        ],
        quickChecks: [
            "Have I correctly named the independent and dependent variables?",
            "Did I explain how the graph would help show the pattern?"
        ]
    },
    {
        id: "science-guide-interpreting-graphs",
        topicId: "interpreting-graphs",
        title: "Interpreting data and communicating conclusions",
        intro: "Interpreting-data questions ask students to read patterns carefully, notice anomalies and write conclusions that are supported by evidence instead of opinion.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "A trend describes the overall pattern in the data.",
                    "An anomaly is a result that does not fit the pattern and may need checking or repeating.",
                    "Good conclusions use evidence from the data to answer the question."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Describe the pattern first, then support it with a detail from the table or graph.",
                    "If an anomaly is mentioned, explain how it should be checked or handled.",
                    "Finish with a conclusion that links directly back to the investigation."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "A conclusion should come from the evidence, not a guess.",
                    "An anomaly is not ignored automatically - it should be checked against the method or repeated trials.",
                    "Describing every point one by one is less effective than describing the overall trend clearly."
                ]
            }
        ],
        quickChecks: [
            "Have I described the overall trend clearly?",
            "Did I support my conclusion with evidence from the results?"
        ]
    }
];

const SCIENCE_SUPPORT_HINTS = {
    "telescope-tools": {
        mcq: "Think about what the tool or model helps scientists observe, measure or represent more clearly.",
        short: "Start by naming the observing tool or model, then explain what evidence it helps scientists gather.",
        long: "Build your response around observations, evidence and how better technology improves scientific understanding."
    },
    "sky-patterns": {
        mcq: "Focus on the pattern an observer sees from Earth and what causes that pattern.",
        short: "State the sky pattern first, then explain the Earth-based reason for it.",
        long: "Explain the observed pattern, the movement behind it and one clear example that supports your explanation."
    },
    "earth-moon-sun": {
        mcq: "Ask yourself which motion - rotation, orbit or reflection - creates the pattern in the question.",
        short: "Name the motion involved first, then link it to the observation people make from Earth.",
        long: "Organise your answer by explaining each pattern separately and the motion that causes it."
    },
    "stars-galaxies": {
        mcq: "Check whether the question is asking you to classify an object or explain how evidence changes scientific ideas.",
        short: "Use the correct space term first, then add the detail that proves why it fits.",
        long: "Define the object or system clearly and then connect new observations to improved scientific models."
    },
    "forces-basics": {
        mcq: "Think about the effect the push or pull has on the object's motion or shape.",
        short: "Name the force, then explain the change it causes to the object.",
        long: "Work through the situation by describing each force and the effect it has at each stage."
    },
    "contact-noncontact": {
        mcq: "Decide first whether the force needs touching or can act across a distance.",
        short: "Classify the force and then explain how it affects the object in that situation.",
        long: "Compare the forces by explaining how each one acts and why it changes the result."
    },
    "balanced-unbalanced": {
        mcq: "Compare all the forces before deciding whether the motion will stay the same or change.",
        short: "State whether the forces are balanced, then explain the motion that follows.",
        long: "Use net force thinking to explain each stage of motion in order."
    },
    "graphing-data": {
        mcq: "Focus on variables, fair testing and which graph or table best shows the results.",
        short: "Name the variables clearly before explaining how the data should be recorded or graphed.",
        long: "Structure your answer around variables, fair testing, data recording and graph choice."
    },
    "interpreting-graphs": {
        mcq: "Look for the overall trend and think about what the evidence actually shows.",
        short: "Describe the pattern first, then support it with a detail from the data.",
        long: "Explain the trend, mention any anomaly and finish with a conclusion based on evidence."
    }
};

function scienceSupportHintFor(question) {
    const hints = SCIENCE_SUPPORT_HINTS[question.topic];
    if (!hints) return "Use the key science idea in this topic to explain what the evidence shows.";
    if (question.options) return hints.mcq;
    if ((question.marks || 0) >= 8) return hints.long;
    return hints.short;
}

function applyScienceSupport(subject) {
    const allQuestions = [].concat(subject.mcqs || [], subject.short || [], subject.long || []);
    subject.learningGuides = SCIENCE_LEARNING_GUIDES.map(function (guide) {
        return Object.assign({}, guide);
    });
    allQuestions.forEach(function (question) {
        question.support = {
            hint: scienceSupportHintFor(question),
            guideId: `science-guide-${question.topic}`
        };
    });
}

applyScienceSupport(window.SUBJECT_DATA.science);
