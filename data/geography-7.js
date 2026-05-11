// Geography — Year 7 Half Yearly
// Outcomes assessed:
//   GE4-COM-01 uses concepts and terminology to communicate geographical
//              information for a range of purposes, audiences and contexts
//   GE4-PER-01 examines and describes the perspectives of people and
//              organisations on a range of geographical issues
//   GE4-MAN-01 explains the management and protection of places and
//              environments
//   GE4-DFC-01 locates the diverse features and describes the characteristics
//              of a range of places and environments

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

window.SUBJECT_DATA["geography-7"] = {
    id: "geography-7",
    name: "Geography",
    tagline: "Year 7 Half Yearly — Introduction to Geography, Landscapes & Water in the World",
    color: "#4caf50",
    accent: "#2d6a4f",
    icon: "🌏",
    topics: [
        { id: "mapping-skills", name: "BOLTSS, maps & geographical tools" },
        { id: "direction-scale", name: "Direction, bearing, scale & distance" },
        { id: "landscapes-features", name: "Landscapes, elements & landforms" },
        { id: "geomorphic-processes", name: "How landscapes are shaped" },
        { id: "water-resources", name: "Water resources & their value" },
        { id: "catchments-management", name: "Catchments, movement of water & protection" }
    ],

    mcqs: [
        /* ----- Mapping skills ----- */
        {
            id: "y7g-mcq-1", topic: "mapping-skills",
            q: "In BOLTSS, the letter B stands for:",
            options: ["Bearing", "Border", "Background", "Base map"],
            answer: 1,
            explain: "BOLTSS stands for Border, Orientation, Legend, Title, Scale and Source."
        },
        {
            id: "y7g-mcq-2", topic: "mapping-skills",
            q: "Why is a legend important on a map?",
            options: [
                "It makes the map larger",
                "It explains the meaning of symbols and colours",
                "It replaces the title",
                "It shows only the map border"
            ],
            answer: 1,
            explain: "A legend helps readers interpret the symbols, colours and patterns used on a map."
        },
        {
            id: "y7g-mcq-3", topic: "mapping-skills",
            q: "Which map feature shows where the information came from?",
            options: ["Orientation", "Source", "Scale", "Border"],
            answer: 1,
            explain: "The source tells readers where the map's information or data was obtained."
        },
        {
            id: "y7g-mcq-4", topic: "mapping-skills",
            q: "Which statement best describes BOLTSS?",
            options: [
                "A method for measuring rainfall",
                "A checklist of features needed for a useful map",
                "A type of landform",
                "A way of naming rivers"
            ],
            answer: 1,
            explain: "BOLTSS is a checklist used to make maps clear, complete and easy to interpret."
        },

        /* ----- Direction, bearing, scale & distance ----- */
        {
            id: "y7g-mcq-5", topic: "direction-scale",
            q: "A bearing is measured:",
            options: [
                "anticlockwise from south",
                "clockwise from north",
                "anticlockwise from east",
                "clockwise from west"
            ],
            answer: 1,
            explain: "Bearings are measured clockwise from north and written as three-figure numbers."
        },
        {
            id: "y7g-mcq-6", topic: "direction-scale",
            q: "Which direction is exactly halfway between north and east?",
            options: ["North-west", "South-east", "North-east", "South-west"],
            answer: 2,
            explain: "Halfway between north and east is north-east."
        },
        {
            id: "y7g-mcq-7", topic: "direction-scale",
            q: "A map has a scale of 1 cm : 2 km. A distance of 4 cm on the map represents:",
            options: ["2 km", "4 km", "6 km", "8 km"],
            answer: 3,
            explain: "If 1 cm represents 2 km, then 4 cm represents 8 km."
        },
        {
            id: "y7g-mcq-8", topic: "direction-scale",
            q: "Which tool is most useful for measuring a straight-line distance on a paper map?",
            options: ["Thermometer", "Ruler", "Compass rose", "Bar graph"],
            answer: 1,
            explain: "A ruler helps measure straight-line distances, which can then be converted using the scale."
        },

        /* ----- Landscapes, elements & landforms ----- */
        {
            id: "y7g-mcq-9", topic: "landscapes-features",
            q: "A landscape is best described as:",
            options: [
                "only natural scenery with no people",
                "the visible features of an area, including natural and human elements",
                "a weather map",
                "a list of place names"
            ],
            answer: 1,
            explain: "Landscapes include both natural features and human influences visible in an area."
        },
        {
            id: "y7g-mcq-10", topic: "landscapes-features",
            q: "Which is an example of a landform?",
            options: ["Mountain", "Scale bar", "Compass rose", "Suburb name"],
            answer: 0,
            explain: "A mountain is a natural landform."
        },
        {
            id: "y7g-mcq-11", topic: "landscapes-features",
            q: "Which statement best distinguishes natural elements from human elements in a landscape?",
            options: [
                "Natural elements are built by people",
                "Human elements are features created or changed by people",
                "Natural elements are always bigger than human elements",
                "Human elements cannot appear on maps"
            ],
            answer: 1,
            explain: "Human elements include roads, buildings and farms; natural elements include rivers, hills and vegetation."
        },
        {
            id: "y7g-mcq-12", topic: "landscapes-features",
            q: "Which is a coastal landform?",
            options: ["Dune", "Plateau", "Valley", "Volcano"],
            answer: 0,
            explain: "Dunes are common coastal landforms formed by wind moving sand."
        },

        /* ----- Geomorphic processes ----- */
        {
            id: "y7g-mcq-13", topic: "geomorphic-processes",
            q: "A geomorphic process is:",
            options: [
                "a process that shapes the Earth's surface",
                "a way to label a map",
                "a type of compass direction",
                "a rule for writing bearings"
            ],
            answer: 0,
            explain: "Geomorphic processes such as weathering, erosion and deposition shape landscapes over time."
        },
        {
            id: "y7g-mcq-14", topic: "geomorphic-processes",
            q: "Weathering is:",
            options: [
                "the movement of rock by water or wind",
                "the breakdown of rock in place",
                "the dropping of sediment",
                "the building of dams"
            ],
            answer: 1,
            explain: "Weathering breaks rock down where it is, while erosion moves the material away."
        },
        {
            id: "y7g-mcq-15", topic: "geomorphic-processes",
            q: "Deposition occurs when:",
            options: [
                "rock is melted by the Sun",
                "sediment is dropped after being transported",
                "maps are updated",
                "a river starts flowing uphill"
            ],
            answer: 1,
            explain: "Deposition happens when moving sediment is laid down."
        },
        {
            id: "y7g-mcq-16", topic: "geomorphic-processes",
            q: "Which agent can cause erosion?",
            options: ["Water", "Wind", "Ice", "All of the above"],
            answer: 3,
            explain: "Water, wind and ice can all erode and transport material."
        },

        /* ----- Water resources ----- */
        {
            id: "y7g-mcq-17", topic: "water-resources",
            q: "Which is an example of a freshwater resource?",
            options: ["Ocean", "River", "Coral reef", "Estuary mouth"],
            answer: 1,
            explain: "Rivers are freshwater resources, unlike oceans which are saltwater."
        },
        {
            id: "y7g-mcq-18", topic: "water-resources",
            q: "Water is valuable because it:",
            options: [
                "is only useful for drinking",
                "supports people, farming, industry and ecosystems",
                "can be replaced by sand",
                "is never limited"
            ],
            answer: 1,
            explain: "Water is essential for homes, food production, industry and natural environments."
        },
        {
            id: "y7g-mcq-19", topic: "water-resources",
            q: "Groundwater is water stored:",
            options: ["in clouds", "beneath the ground", "only in oceans", "in glaciers only"],
            answer: 1,
            explain: "Groundwater is stored below the Earth's surface in soil and rock."
        },
        {
            id: "y7g-mcq-20", topic: "water-resources",
            q: "Which human activity can increase pressure on water resources?",
            options: ["Overuse of water", "Pollution", "Population growth", "All of the above"],
            answer: 3,
            explain: "Growing demand and pollution both place pressure on water resources."
        },

        /* ----- Catchments & management ----- */
        {
            id: "y7g-mcq-21", topic: "catchments-management",
            q: "A catchment is best described as:",
            options: [
                "a map key",
                "an area where water drains to the same river or water body",
                "a single puddle after rain",
                "a kind of weather front"
            ],
            answer: 1,
            explain: "A catchment is the area of land from which rainfall drains into the same creek, river or lake."
        },
        {
            id: "y7g-mcq-22", topic: "catchments-management",
            q: "Water generally moves through a catchment from:",
            options: [
                "higher land to lower land",
                "sea level to mountaintops",
                "cities to forests only",
                "west to east only"
            ],
            answer: 0,
            explain: "Gravity causes water to move downhill from higher areas to lower areas."
        },
        {
            id: "y7g-mcq-23", topic: "catchments-management",
            q: "Which action helps protect a catchment?",
            options: [
                "Dumping rubbish into streams",
                "Removing all vegetation from riverbanks",
                "Reducing pollution and protecting riparian vegetation",
                "Wasting water during drought"
            ],
            answer: 2,
            explain: "Healthy vegetation and reduced pollution help keep catchments and waterways healthy."
        },
        {
            id: "y7g-mcq-24", topic: "catchments-management",
            q: "Which group is most likely to have a perspective on how water in a catchment should be managed?",
            options: ["Farmers", "Local council", "Residents", "All of the above"],
            answer: 3,
            explain: "Different people and organisations may have different perspectives on catchment management."
        }
    ],

    short: [
        {
            id: "y7g-sa-1", topic: "mapping-skills", marks: 4,
            q: "State what each letter in BOLTSS stands for.",
            sample: "Border, Orientation, Legend, Title, Scale, Source.",
            marks: 4
        },
        {
            id: "y7g-sa-2", topic: "direction-scale", marks: 4,
            q: "A map scale is 1 cm : 3 km. Two towns are 5 cm apart on the map. Calculate the actual distance.",
            sample: "5 x 3 km = 15 km, so the actual distance is 15 km.",
            marks: 4
        },
        {
            id: "y7g-sa-3", topic: "direction-scale", marks: 4,
            q: "Explain the difference between a direction such as north-east and a bearing such as 045 degrees.",
            sample: "North-east is a compass direction. A bearing is a more exact direction measured clockwise from north and written as a three-figure angle, such as 045 degrees.",
            marks: 4
        },
        {
            id: "y7g-sa-4", topic: "landscapes-features", marks: 5,
            q: "Describe a landscape using at least TWO natural elements and TWO human elements.",
            sample: "A landscape might include natural elements such as hills, a river, vegetation and soil. Human elements could include roads, houses, bridges or farms. A strong answer clearly distinguishes natural features from features built or changed by people.",
            marks: 5
        },
        {
            id: "y7g-sa-5", topic: "landscapes-features", marks: 4,
            q: "Identify TWO types of landscapes or landforms and give ONE characteristic of each.",
            sample: "For example: coastal landscape — shaped by waves and often includes beaches or cliffs; mountain landscape — high relief with steep slopes. Other valid examples could include desert, riverine or volcanic landscapes.",
            marks: 4
        },
        {
            id: "y7g-sa-6", topic: "geomorphic-processes", marks: 5,
            q: "Explain the difference between weathering, erosion and deposition.",
            sample: "Weathering is the breakdown of rock in place. Erosion is the removal and transport of material by agents such as water, wind or ice. Deposition is when that transported material is dropped or laid down somewhere else.",
            marks: 5
        },
        {
            id: "y7g-sa-7", topic: "geomorphic-processes", marks: 4,
            q: "Describe ONE way a river can shape a landscape.",
            sample: "A river can erode its banks and bed, cutting valleys or channels over time. It can also transport sediment and deposit it elsewhere, creating features such as floodplains or deltas.",
            marks: 4
        },
        {
            id: "y7g-sa-8", topic: "water-resources", marks: 4,
            q: "Identify THREE types of water resources.",
            sample: "Examples include rivers, lakes, groundwater, wetlands, reservoirs and glaciers. Any three valid types earn marks.",
            marks: 4
        },
        {
            id: "y7g-sa-9", topic: "water-resources", marks: 5,
            q: "Explain why water is a valuable resource for people and the environment.",
            sample: "Water is needed for drinking, sanitation, farming, industry and energy production. It is also essential for ecosystems because plants, animals and aquatic habitats depend on it. Strong answers show that water supports both human life and environmental health.",
            marks: 5
        },
        {
            id: "y7g-sa-10", topic: "catchments-management", marks: 5,
            q: "Describe how water moves through a catchment after heavy rain.",
            sample: "Water falls as precipitation, then may soak into the ground or flow over the land as runoff. It moves downhill into creeks and rivers and eventually into larger waterways, lakes or the sea. Some water is stored in groundwater or taken up by plants.",
            marks: 5
        },
        {
            id: "y7g-sa-11", topic: "catchments-management", marks: 4,
            q: "Suggest TWO ways people can protect water quality in a catchment.",
            sample: "Possible actions include reducing litter and chemical runoff, planting or protecting vegetation along waterways, using water carefully, improving stormwater management, and treating sewage properly. Any two sensible strategies with explanation earn marks.",
            marks: 4
        },
        {
            id: "y7g-sa-12", topic: "catchments-management", marks: 5,
            q: "Explain why different groups may have different perspectives on managing a landscape or water resource.",
            sample: "Different groups such as residents, farmers, businesses, councils and environmental organisations have different needs and values. Some may focus on jobs or land use, while others prioritise conservation, recreation or water quality. These different interests lead to different perspectives on management.",
            marks: 5
        }
    ],

    long: [
        {
            id: "y7g-la-1", topic: "mapping-skills", marks: 8,
            q: "Explain how geographical tools such as BOLTSS, scale and bearings help geographers communicate information accurately. (8 marks)",
            sample: "A strong answer explains that BOLTSS helps maps include the features needed to be clear and useful: border, orientation, legend, title, scale and source. Scale allows real distances to be estimated from a map. Bearings give exact directions measured clockwise from north, which is more precise than using only compass points. Together these tools help geographers communicate location, direction and spatial information accurately to different audiences.",
            marks: 8
        },
        {
            id: "y7g-la-2", topic: "direction-scale", marks: 8,
            q: "A student is planning a fieldwork walk using a school map. Explain how direction, bearing, scale and distance would be used to plan the route safely and accurately. (8 marks)",
            sample: "A strong response explains that the student would use orientation and compass directions to understand the map layout, bearings for exact route directions, and the scale to convert map measurements into real distances. Distance calculations help estimate how far the group must travel and how long it may take. Accurate use of these tools makes route planning clearer and safer.",
            marks: 8
        },
        {
            id: "y7g-la-3", topic: "landscapes-features", marks: 8,
            q: "Describe the characteristics of a landscape and explain how natural and human elements combine to shape its appearance and use. (8 marks)",
            sample: "A strong answer defines a landscape as the visible features of an area and explains that it includes both natural elements such as hills, rivers, vegetation and soil, and human elements such as roads, buildings, farms and tourism facilities. Good responses explain that these elements interact to shape what the landscape looks like and how people use it. Specific examples strengthen the response.",
            marks: 8
        },
        {
            id: "y7g-la-4", topic: "geomorphic-processes", marks: 10,
            q: "Explain how geomorphic processes shape landforms over time. Refer to weathering, erosion and deposition in your answer. (10 marks)",
            sample: "A strong response explains that weathering breaks down rock in place, erosion moves the broken material, and deposition drops that material in a new location. These processes work together over long periods to shape landscapes such as valleys, cliffs, beaches and floodplains. Good answers may refer to agents such as rivers, wind, waves or ice and explain that different processes can dominate in different environments.",
            marks: 10
        },
        {
            id: "y7g-la-5", topic: "water-resources", marks: 8,
            q: "Explain why water is one of the world's most important resources and describe the consequences if it is not managed carefully. (8 marks)",
            sample: "Strong answers explain that water is essential for drinking, sanitation, farming, industry, ecosystems and recreation. If water is polluted, overused or poorly managed, communities may face shortages, poorer health, damage to ecosystems and conflict over access. Good responses show both human and environmental consequences clearly.",
            marks: 8
        },
        {
            id: "y7g-la-6", topic: "catchments-management", marks: 10,
            q: "Describe how water moves through a catchment and explain why protecting catchments is important for people and environments. (10 marks)",
            sample: "A strong response describes water entering a catchment as precipitation, then moving through runoff, streams, rivers, infiltration and groundwater flow before reaching larger water bodies. Protecting catchments is important because they provide water for homes, farming and industry, and they also support plants, animals and healthy ecosystems. Good answers include ways catchments can be protected, such as reducing pollution and maintaining vegetation along waterways.",
            marks: 10
        }
    ],

    practiceTopics: [
        {
            id: "complete-review",
            name: "Year 7 Geography Complete Review",
            outcomes: "GE4-COM-01 · GE4-PER-01 · GE4-MAN-01 · GE4-DFC-01",
            sourceTopics: ["mapping-skills", "direction-scale", "landscapes-features", "geomorphic-processes", "water-resources", "catchments-management"]
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
                "y7g-mcq-1","y7g-mcq-2","y7g-mcq-3","y7g-mcq-5","y7g-mcq-6","y7g-mcq-7","y7g-mcq-9","y7g-mcq-10",
                "y7g-mcq-11","y7g-mcq-13","y7g-mcq-14","y7g-mcq-15","y7g-mcq-17","y7g-mcq-18","y7g-mcq-19","y7g-mcq-21",
                "y7g-mcq-22","y7g-mcq-23","y7g-mcq-24","y7g-mcq-12",
                "y7g-sa-1","y7g-sa-2","y7g-sa-4","y7g-sa-6","y7g-sa-7","y7g-sa-8","y7g-sa-9","y7g-sa-10","y7g-sa-11","y7g-sa-12",
                "y7g-la-1","y7g-la-6"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Introduction to Geography focus",
            duration: 70,
            questionIds: [
                "y7g-mcq-1","y7g-mcq-2","y7g-mcq-3","y7g-mcq-4","y7g-mcq-5","y7g-mcq-6","y7g-mcq-7","y7g-mcq-8",
                "y7g-mcq-9","y7g-mcq-10","y7g-mcq-11","y7g-mcq-12","y7g-mcq-13","y7g-mcq-14","y7g-mcq-17","y7g-mcq-18",
                "y7g-mcq-20","y7g-mcq-21","y7g-mcq-22","y7g-mcq-24",
                "y7g-sa-1","y7g-sa-2","y7g-sa-3","y7g-sa-4","y7g-sa-5","y7g-sa-6","y7g-sa-8","y7g-sa-9","y7g-sa-10","y7g-sa-12",
                "y7g-la-1","y7g-la-2"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Landscapes and landforms focus",
            duration: 70,
            questionIds: [
                "y7g-mcq-1","y7g-mcq-4","y7g-mcq-5","y7g-mcq-8","y7g-mcq-9","y7g-mcq-10","y7g-mcq-11","y7g-mcq-12",
                "y7g-mcq-13","y7g-mcq-14","y7g-mcq-15","y7g-mcq-16","y7g-mcq-17","y7g-mcq-18","y7g-mcq-21","y7g-mcq-22",
                "y7g-mcq-23","y7g-mcq-24","y7g-mcq-6","y7g-mcq-7",
                "y7g-sa-2","y7g-sa-3","y7g-sa-4","y7g-sa-5","y7g-sa-6","y7g-sa-7","y7g-sa-8","y7g-sa-9","y7g-sa-11","y7g-sa-12",
                "y7g-la-3","y7g-la-4"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Water in the World focus",
            duration: 70,
            questionIds: [
                "y7g-mcq-2","y7g-mcq-3","y7g-mcq-4","y7g-mcq-5","y7g-mcq-7","y7g-mcq-8","y7g-mcq-9","y7g-mcq-12",
                "y7g-mcq-13","y7g-mcq-15","y7g-mcq-16","y7g-mcq-17","y7g-mcq-18","y7g-mcq-19","y7g-mcq-20","y7g-mcq-21",
                "y7g-mcq-22","y7g-mcq-23","y7g-mcq-24","y7g-mcq-1",
                "y7g-sa-1","y7g-sa-3","y7g-sa-5","y7g-sa-6","y7g-sa-8","y7g-sa-9","y7g-sa-10","y7g-sa-11","y7g-sa-12","y7g-sa-2",
                "y7g-la-5","y7g-la-6"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Complete review",
            duration: 75,
            questionIds: [
                "y7g-mcq-1","y7g-mcq-2","y7g-mcq-4","y7g-mcq-5","y7g-mcq-6","y7g-mcq-7","y7g-mcq-9","y7g-mcq-10",
                "y7g-mcq-12","y7g-mcq-13","y7g-mcq-14","y7g-mcq-16","y7g-mcq-17","y7g-mcq-18","y7g-mcq-19","y7g-mcq-20",
                "y7g-mcq-21","y7g-mcq-22","y7g-mcq-23","y7g-mcq-24",
                "y7g-sa-1","y7g-sa-2","y7g-sa-4","y7g-sa-5","y7g-sa-6","y7g-sa-7","y7g-sa-8","y7g-sa-10","y7g-sa-11","y7g-sa-12",
                "y7g-la-4","y7g-la-6"
            ]
        }
    ]
};
