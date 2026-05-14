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
        },
        /* ----- Additional mapping skills ----- */
        {
            id: "y7g-mcq-25", topic: "mapping-skills",
            q: "Which geographical term best matches this description: The line that frames the mapped area?",
            options: ["border", "legend", "title", "scale"],
            answer: 0,
            explain: "Border is the line that frames the mapped area."
        },
        {
            id: "y7g-mcq-26", topic: "mapping-skills",
            q: "What is the main purpose of border in Year 7 Geography?",
            options: [
                "Identify the topic, place or purpose of the map",
                "Separate the mapped area from the rest of the page",
                "Calculate real-world distance from map measurements",
                "Check where the information originated and how reliable it is"
            ],
            answer: 1,
            explain: "Border is used to separate the mapped area from the rest of the page."
        },
        {
            id: "y7g-mcq-27", topic: "mapping-skills",
            q: "Which situation would most likely require border?",
            options: [
                "Estimating how far a town is from a river by measuring the map",
                "Looking to see whether the map uses data from an atlas, a satellite image or a government website",
                "Drawing a neat line around the mapped section so readers know where the map begins and ends",
                "Using a small aeroplane sign to show an airport"
            ],
            answer: 2,
            explain: "Geographers use border when they need to separate the mapped area from the rest of the page."
        },
        {
            id: "y7g-mcq-28", topic: "mapping-skills",
            q: "Which statement about border is correct?",
            options: [
                "A source improves the credibility of geographical information.",
                "Symbols should be simple, consistent and easy to recognise.",
                "An aerial photograph shows the actual appearance of a place rather than drawn symbols.",
                "A border keeps the map organised and clearly contained."
            ],
            answer: 3,
            explain: "A border keeps the map organised and clearly contained."
        },
        {
            id: "y7g-mcq-29", topic: "mapping-skills",
            q: "If border was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Readers may be less clear about the limits of the mapped area",
                "The map may become cluttered or hard to read",
                "Some patterns in the landscape may be harder to recognise",
                "Important observations may be forgotten or poorly recorded"
            ],
            answer: 0,
            explain: "If border is missing, inaccurate or ignored, readers may be less clear about the limits of the mapped area."
        },
        {
            id: "y7g-mcq-30", topic: "mapping-skills",
            q: "A student is drawing a neat line around the mapped section so readers know where the map begins and ends. Which feature, skill or concept is most useful?",
            options: ["aerial photograph", "border", "field sketch", "grid reference"],
            answer: 1,
            explain: "Border is most useful because it helps geographers separate the mapped area from the rest of the page."
        },
        {
            id: "y7g-mcq-31", topic: "mapping-skills",
            q: "Which feature best helps a geographer separate the mapped area from the rest of the page?",
            options: ["field sketch", "grid reference", "border", "orientation"],
            answer: 2,
            explain: "Border helps geographers separate the mapped area from the rest of the page."
        },
        {
            id: "y7g-mcq-32", topic: "mapping-skills",
            q: "Why does border matter in geography?",
            options: [
                "It improves the accuracy of locating features.",
                "It helps readers compare the map with the real world.",
                "It makes a map readable and easy to interpret.",
                "It improves clarity by setting clear limits around the mapped information."
            ],
            answer: 3,
            explain: "It improves clarity by setting clear limits around the mapped information."
        },
        {
            id: "y7g-mcq-33", topic: "mapping-skills",
            q: "Which geographical term best matches this description: The feature that shows which way north is and how the map is aligned?",
            options: ["orientation", "title", "scale", "source"],
            answer: 0,
            explain: "Orientation is the feature that shows which way north is and how the map is aligned."
        },
        {
            id: "y7g-mcq-34", topic: "mapping-skills",
            q: "What is the main purpose of orientation in Year 7 Geography?",
            options: [
                "Calculate real-world distance from map measurements",
                "Work out directions correctly",
                "Check where the information originated and how reliable it is",
                "Show information quickly without long labels"
            ],
            answer: 1,
            explain: "Orientation is used to work out directions correctly."
        },
        {
            id: "y7g-mcq-35", topic: "mapping-skills",
            q: "Which situation would most likely require orientation?",
            options: [
                "Looking to see whether the map uses data from an atlas, a satellite image or a government website",
                "Using a small aeroplane sign to show an airport",
                "Checking whether the playground is east or west of the oval",
                "Looking from above to compare roads, rivers and buildings"
            ],
            answer: 2,
            explain: "Geographers use orientation when they need to work out directions correctly."
        },
        {
            id: "y7g-mcq-36", topic: "mapping-skills",
            q: "Which statement about orientation is correct?",
            options: [
                "Symbols should be simple, consistent and easy to recognise.",
                "An aerial photograph shows the actual appearance of a place rather than drawn symbols.",
                "Field sketches simplify the view and highlight the most important features.",
                "Orientation is often shown with a north arrow or compass rose."
            ],
            answer: 3,
            explain: "Orientation is often shown with a north arrow or compass rose."
        },
        {
            id: "y7g-mcq-37", topic: "mapping-skills",
            q: "If orientation was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Direction can be misread or confused",
                "Some patterns in the landscape may be harder to recognise",
                "Important observations may be forgotten or poorly recorded",
                "Places are harder to find accurately"
            ],
            answer: 0,
            explain: "If orientation is missing, inaccurate or ignored, direction can be misread or confused."
        },
        {
            id: "y7g-mcq-38", topic: "mapping-skills",
            q: "A student is checking whether the playground is east or west of the oval. Which feature, skill or concept is most useful?",
            options: ["field sketch", "orientation", "grid reference", "border"],
            answer: 1,
            explain: "Orientation is most useful because it helps geographers work out directions correctly."
        },
        {
            id: "y7g-mcq-39", topic: "mapping-skills",
            q: "Which feature best helps a geographer work out directions correctly?",
            options: ["grid reference", "border", "orientation", "legend"],
            answer: 2,
            explain: "Orientation helps geographers work out directions correctly."
        },
        {
            id: "y7g-mcq-40", topic: "mapping-skills",
            q: "Why does orientation matter in geography?",
            options: [
                "It improves clarity by setting clear limits around the mapped information.",
                "It makes a map readable and easy to interpret.",
                "It gives the reader immediate context.",
                "It helps readers compare the map with the real world."
            ],
            answer: 3,
            explain: "It helps readers compare the map with the real world."
        },
        {
            id: "y7g-mcq-41", topic: "mapping-skills",
            q: "Which geographical term best matches this description: The key that explains symbols, colours and patterns on a map?",
            options: ["legend", "scale", "source", "symbol"],
            answer: 0,
            explain: "Legend is the key that explains symbols, colours and patterns on a map."
        },
        {
            id: "y7g-mcq-42", topic: "mapping-skills",
            q: "What is the main purpose of legend in Year 7 Geography?",
            options: [
                "Check where the information originated and how reliable it is",
                "Interpret symbols and colours accurately",
                "Show information quickly without long labels",
                "View spatial patterns and features from a top-down perspective"
            ],
            answer: 1,
            explain: "Legend is used to interpret symbols and colours accurately."
        },
        {
            id: "y7g-mcq-43", topic: "mapping-skills",
            q: "Which situation would most likely require legend?",
            options: [
                "Using a small aeroplane sign to show an airport",
                "Looking from above to compare roads, rivers and buildings",
                "Working out that a blue line stands for a river and a black line stands for a road",
                "Drawing the riverbank and labelling vegetation, erosion and nearby buildings"
            ],
            answer: 2,
            explain: "Geographers use legend when they need to interpret symbols and colours accurately."
        },
        {
            id: "y7g-mcq-44", topic: "mapping-skills",
            q: "Which statement about legend is correct?",
            options: [
                "An aerial photograph shows the actual appearance of a place rather than drawn symbols.",
                "Field sketches simplify the view and highlight the most important features.",
                "Grid references are more precise than broad compass directions alone.",
                "A legend links each symbol or colour to the feature it represents."
            ],
            answer: 3,
            explain: "A legend links each symbol or colour to the feature it represents."
        },
        {
            id: "y7g-mcq-45", topic: "mapping-skills",
            q: "If legend was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Symbols and colours may be misunderstood",
                "Important observations may be forgotten or poorly recorded",
                "Places are harder to find accurately",
                "Readers may be less clear about the limits of the mapped area"
            ],
            answer: 0,
            explain: "If legend is missing, inaccurate or ignored, symbols and colours may be misunderstood."
        },
        {
            id: "y7g-mcq-46", topic: "mapping-skills",
            q: "A student is working out that a blue line stands for a river and a black line stands for a road. Which feature, skill or concept is most useful?",
            options: ["grid reference", "legend", "border", "orientation"],
            answer: 1,
            explain: "Legend is most useful because it helps geographers interpret symbols and colours accurately."
        },
        {
            id: "y7g-mcq-47", topic: "mapping-skills",
            q: "Which feature best helps a geographer interpret symbols and colours accurately?",
            options: ["border", "orientation", "legend", "title"],
            answer: 2,
            explain: "Legend helps geographers interpret symbols and colours accurately."
        },
        {
            id: "y7g-mcq-48", topic: "mapping-skills",
            q: "Why does legend matter in geography?",
            options: [
                "It helps readers compare the map with the real world.",
                "It gives the reader immediate context.",
                "It connects map measurements to real places.",
                "It makes a map readable and easy to interpret."
            ],
            answer: 3,
            explain: "It makes a map readable and easy to interpret."
        },
        {
            id: "y7g-mcq-49", topic: "mapping-skills",
            q: "Which geographical term best matches this description: The heading that tells the reader what the map shows?",
            options: ["title", "source", "symbol", "aerial photograph"],
            answer: 0,
            explain: "Title is the heading that tells the reader what the map shows."
        },
        {
            id: "y7g-mcq-50", topic: "mapping-skills",
            q: "What is the main purpose of title in Year 7 Geography?",
            options: [
                "Show information quickly without long labels",
                "Identify the topic, place or purpose of the map",
                "View spatial patterns and features from a top-down perspective",
                "Record observations clearly from ground level"
            ],
            answer: 1,
            explain: "Title is used to identify the topic, place or purpose of the map."
        },
        {
            id: "y7g-mcq-51", topic: "mapping-skills",
            q: "Which situation would most likely require title?",
            options: [
                "Looking from above to compare roads, rivers and buildings",
                "Drawing the riverbank and labelling vegetation, erosion and nearby buildings",
                "Choosing between a map titled Rainfall in NSW and a map titled Population Density in NSW",
                "Finding the campsite in square B4 on a simple map"
            ],
            answer: 2,
            explain: "Geographers use title when they need to identify the topic, place or purpose of the map."
        },
        {
            id: "y7g-mcq-52", topic: "mapping-skills",
            q: "Which statement about title is correct?",
            options: [
                "Field sketches simplify the view and highlight the most important features.",
                "Grid references are more precise than broad compass directions alone.",
                "A border keeps the map organised and clearly contained.",
                "A good title is specific and relevant to the information shown."
            ],
            answer: 3,
            explain: "A good title is specific and relevant to the information shown."
        },
        {
            id: "y7g-mcq-53", topic: "mapping-skills",
            q: "If title was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Readers may not know what the map is about",
                "Places are harder to find accurately",
                "Readers may be less clear about the limits of the mapped area",
                "Direction can be misread or confused"
            ],
            answer: 0,
            explain: "If title is missing, inaccurate or ignored, readers may not know what the map is about."
        },
        {
            id: "y7g-mcq-54", topic: "mapping-skills",
            q: "A student is choosing between a map titled Rainfall in NSW and a map titled Population Density in NSW. Which feature, skill or concept is most useful?",
            options: ["border", "title", "orientation", "legend"],
            answer: 1,
            explain: "Title is most useful because it helps geographers identify the topic, place or purpose of the map."
        },
        {
            id: "y7g-mcq-55", topic: "mapping-skills",
            q: "Which feature best helps a geographer identify the topic, place or purpose of the map?",
            options: ["orientation", "legend", "title", "scale"],
            answer: 2,
            explain: "Title helps geographers identify the topic, place or purpose of the map."
        },
        {
            id: "y7g-mcq-56", topic: "mapping-skills",
            q: "Why does title matter in geography?",
            options: [
                "It makes a map readable and easy to interpret.",
                "It connects map measurements to real places.",
                "It supports accuracy and reliability.",
                "It gives the reader immediate context."
            ],
            answer: 3,
            explain: "It gives the reader immediate context."
        },
        {
            id: "y7g-mcq-57", topic: "mapping-skills",
            q: "Which geographical term best matches this description: The relationship between a distance on the map and the real distance on the ground?",
            options: ["scale", "symbol", "aerial photograph", "field sketch"],
            answer: 0,
            explain: "Scale is the relationship between a distance on the map and the real distance on the ground."
        },
        {
            id: "y7g-mcq-58", topic: "mapping-skills",
            q: "What is the main purpose of scale in Year 7 Geography?",
            options: [
                "View spatial patterns and features from a top-down perspective",
                "Calculate real-world distance from map measurements",
                "Record observations clearly from ground level",
                "Locate places precisely on a map"
            ],
            answer: 1,
            explain: "Scale is used to calculate real-world distance from map measurements."
        },
        {
            id: "y7g-mcq-59", topic: "mapping-skills",
            q: "Which situation would most likely require scale?",
            options: [
                "Drawing the riverbank and labelling vegetation, erosion and nearby buildings",
                "Finding the campsite in square B4 on a simple map",
                "Estimating how far a town is from a river by measuring the map",
                "Drawing a neat line around the mapped section so readers know where the map begins and ends"
            ],
            answer: 2,
            explain: "Geographers use scale when they need to calculate real-world distance from map measurements."
        },
        {
            id: "y7g-mcq-60", topic: "mapping-skills",
            q: "Which statement about scale is correct?",
            options: [
                "Grid references are more precise than broad compass directions alone.",
                "A border keeps the map organised and clearly contained.",
                "Orientation is often shown with a north arrow or compass rose.",
                "Scale can be shown as a ratio, statement or line scale."
            ],
            answer: 3,
            explain: "Scale can be shown as a ratio, statement or line scale."
        },
        {
            id: "y7g-mcq-61", topic: "mapping-skills",
            q: "If scale was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Distance estimates become unreliable",
                "Readers may be less clear about the limits of the mapped area",
                "Direction can be misread or confused",
                "Symbols and colours may be misunderstood"
            ],
            answer: 0,
            explain: "If scale is missing, inaccurate or ignored, distance estimates become unreliable."
        },
        {
            id: "y7g-mcq-62", topic: "mapping-skills",
            q: "A student is estimating how far a town is from a river by measuring the map. Which feature, skill or concept is most useful?",
            options: ["orientation", "scale", "legend", "title"],
            answer: 1,
            explain: "Scale is most useful because it helps geographers calculate real-world distance from map measurements."
        },
        {
            id: "y7g-mcq-63", topic: "mapping-skills",
            q: "Which feature best helps a geographer calculate real-world distance from map measurements?",
            options: ["legend", "title", "scale", "source"],
            answer: 2,
            explain: "Scale helps geographers calculate real-world distance from map measurements."
        },
        {
            id: "y7g-mcq-64", topic: "mapping-skills",
            q: "Why does scale matter in geography?",
            options: [
                "It gives the reader immediate context.",
                "It supports accuracy and reliability.",
                "It saves space and communicates information efficiently.",
                "It connects map measurements to real places."
            ],
            answer: 3,
            explain: "It connects map measurements to real places."
        },
        {
            id: "y7g-mcq-65", topic: "mapping-skills",
            q: "Which geographical term best matches this description: The note that tells where the information on a map came from?",
            options: ["source", "aerial photograph", "field sketch", "grid reference"],
            answer: 0,
            explain: "Source is the note that tells where the information on a map came from."
        },
        {
            id: "y7g-mcq-66", topic: "mapping-skills",
            q: "What is the main purpose of source in Year 7 Geography?",
            options: [
                "Record observations clearly from ground level",
                "Check where the information originated and how reliable it is",
                "Locate places precisely on a map",
                "Separate the mapped area from the rest of the page"
            ],
            answer: 1,
            explain: "Source is used to check where the information originated and how reliable it is."
        },
        {
            id: "y7g-mcq-67", topic: "mapping-skills",
            q: "Which situation would most likely require source?",
            options: [
                "Finding the campsite in square B4 on a simple map",
                "Drawing a neat line around the mapped section so readers know where the map begins and ends",
                "Looking to see whether the map uses data from an atlas, a satellite image or a government website",
                "Checking whether the playground is east or west of the oval"
            ],
            answer: 2,
            explain: "Geographers use source when they need to check where the information originated and how reliable it is."
        },
        {
            id: "y7g-mcq-68", topic: "mapping-skills",
            q: "Which statement about source is correct?",
            options: [
                "A border keeps the map organised and clearly contained.",
                "Orientation is often shown with a north arrow or compass rose.",
                "A legend links each symbol or colour to the feature it represents.",
                "A source improves the credibility of geographical information."
            ],
            answer: 3,
            explain: "A source improves the credibility of geographical information."
        },
        {
            id: "y7g-mcq-69", topic: "mapping-skills",
            q: "If source was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "People cannot easily judge whether the information is trustworthy or current",
                "Direction can be misread or confused",
                "Symbols and colours may be misunderstood",
                "Readers may not know what the map is about"
            ],
            answer: 0,
            explain: "If source is missing, inaccurate or ignored, people cannot easily judge whether the information is trustworthy or current."
        },
        {
            id: "y7g-mcq-70", topic: "mapping-skills",
            q: "A student is looking to see whether the map uses data from an atlas, a satellite image or a government website. Which feature, skill or concept is most useful?",
            options: ["legend", "source", "title", "scale"],
            answer: 1,
            explain: "Source is most useful because it helps geographers check where the information originated and how reliable it is."
        },
        {
            id: "y7g-mcq-71", topic: "mapping-skills",
            q: "Which feature best helps a geographer check where the information originated and how reliable it is?",
            options: ["title", "scale", "source", "symbol"],
            answer: 2,
            explain: "Source helps geographers check where the information originated and how reliable it is."
        },
        {
            id: "y7g-mcq-72", topic: "mapping-skills",
            q: "Why does source matter in geography?",
            options: [
                "It connects map measurements to real places.",
                "It saves space and communicates information efficiently.",
                "It helps geographers compare real features with mapped information.",
                "It supports accuracy and reliability."
            ],
            answer: 3,
            explain: "It supports accuracy and reliability."
        },
        {
            id: "y7g-mcq-73", topic: "mapping-skills",
            q: "Which geographical term best matches this description: A sign or picture used to represent a real feature on a map?",
            options: ["symbol", "field sketch", "grid reference", "border"],
            answer: 0,
            explain: "Symbol is a sign or picture used to represent a real feature on a map."
        },
        {
            id: "y7g-mcq-74", topic: "mapping-skills",
            q: "What is the main purpose of symbol in Year 7 Geography?",
            options: [
                "Locate places precisely on a map",
                "Show information quickly without long labels",
                "Separate the mapped area from the rest of the page",
                "Work out directions correctly"
            ],
            answer: 1,
            explain: "Symbol is used to show information quickly without long labels."
        },
        {
            id: "y7g-mcq-75", topic: "mapping-skills",
            q: "Which situation would most likely require symbol?",
            options: [
                "Drawing a neat line around the mapped section so readers know where the map begins and ends",
                "Checking whether the playground is east or west of the oval",
                "Using a small aeroplane sign to show an airport",
                "Working out that a blue line stands for a river and a black line stands for a road"
            ],
            answer: 2,
            explain: "Geographers use symbol when they need to show information quickly without long labels."
        },
        {
            id: "y7g-mcq-76", topic: "mapping-skills",
            q: "Which statement about symbol is correct?",
            options: [
                "Orientation is often shown with a north arrow or compass rose.",
                "A legend links each symbol or colour to the feature it represents.",
                "A good title is specific and relevant to the information shown.",
                "Symbols should be simple, consistent and easy to recognise."
            ],
            answer: 3,
            explain: "Symbols should be simple, consistent and easy to recognise."
        },
        {
            id: "y7g-mcq-77", topic: "mapping-skills",
            q: "If symbol was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "The map may become cluttered or hard to read",
                "Symbols and colours may be misunderstood",
                "Readers may not know what the map is about",
                "Distance estimates become unreliable"
            ],
            answer: 0,
            explain: "If symbol is missing, inaccurate or ignored, the map may become cluttered or hard to read."
        },
        {
            id: "y7g-mcq-78", topic: "mapping-skills",
            q: "A student is using a small aeroplane sign to show an airport. Which feature, skill or concept is most useful?",
            options: ["title", "symbol", "scale", "source"],
            answer: 1,
            explain: "Symbol is most useful because it helps geographers show information quickly without long labels."
        },
        {
            id: "y7g-mcq-79", topic: "mapping-skills",
            q: "Which feature best helps a geographer show information quickly without long labels?",
            options: ["scale", "source", "symbol", "aerial photograph"],
            answer: 2,
            explain: "Symbol helps geographers show information quickly without long labels."
        },
        {
            id: "y7g-mcq-80", topic: "mapping-skills",
            q: "Why does symbol matter in geography?",
            options: [
                "It supports accuracy and reliability.",
                "It helps geographers compare real features with mapped information.",
                "It is a useful way to record fieldwork evidence.",
                "It saves space and communicates information efficiently."
            ],
            answer: 3,
            explain: "It saves space and communicates information efficiently."
        },
        {
            id: "y7g-mcq-81", topic: "mapping-skills",
            q: "Which geographical term best matches this description: An image of a place taken from above?",
            options: ["aerial photograph", "grid reference", "border", "orientation"],
            answer: 0,
            explain: "Aerial photograph is an image of a place taken from above."
        },
        {
            id: "y7g-mcq-82", topic: "mapping-skills",
            q: "What is the main purpose of aerial photograph in Year 7 Geography?",
            options: [
                "Separate the mapped area from the rest of the page",
                "View spatial patterns and features from a top-down perspective",
                "Work out directions correctly",
                "Interpret symbols and colours accurately"
            ],
            answer: 1,
            explain: "Aerial photograph is used to view spatial patterns and features from a top-down perspective."
        },
        {
            id: "y7g-mcq-83", topic: "mapping-skills",
            q: "Which situation would most likely require aerial photograph?",
            options: [
                "Checking whether the playground is east or west of the oval",
                "Working out that a blue line stands for a river and a black line stands for a road",
                "Looking from above to compare roads, rivers and buildings",
                "Choosing between a map titled Rainfall in NSW and a map titled Population Density in NSW"
            ],
            answer: 2,
            explain: "Geographers use aerial photograph when they need to view spatial patterns and features from a top-down perspective."
        },
        {
            id: "y7g-mcq-84", topic: "mapping-skills",
            q: "Which statement about aerial photograph is correct?",
            options: [
                "A legend links each symbol or colour to the feature it represents.",
                "A good title is specific and relevant to the information shown.",
                "Scale can be shown as a ratio, statement or line scale.",
                "An aerial photograph shows the actual appearance of a place rather than drawn symbols."
            ],
            answer: 3,
            explain: "An aerial photograph shows the actual appearance of a place rather than drawn symbols."
        },
        {
            id: "y7g-mcq-85", topic: "mapping-skills",
            q: "If aerial photograph was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Some patterns in the landscape may be harder to recognise",
                "Readers may not know what the map is about",
                "Distance estimates become unreliable",
                "People cannot easily judge whether the information is trustworthy or current"
            ],
            answer: 0,
            explain: "If aerial photograph is missing, inaccurate or ignored, some patterns in the landscape may be harder to recognise."
        },
        {
            id: "y7g-mcq-86", topic: "mapping-skills",
            q: "A student is looking from above to compare roads, rivers and buildings. Which feature, skill or concept is most useful?",
            options: ["scale", "aerial photograph", "source", "symbol"],
            answer: 1,
            explain: "Aerial photograph is most useful because it helps geographers view spatial patterns and features from a top-down perspective."
        },
        {
            id: "y7g-mcq-87", topic: "mapping-skills",
            q: "Which feature best helps a geographer view spatial patterns and features from a top-down perspective?",
            options: ["source", "symbol", "aerial photograph", "field sketch"],
            answer: 2,
            explain: "Aerial photograph helps geographers view spatial patterns and features from a top-down perspective."
        },
        {
            id: "y7g-mcq-88", topic: "mapping-skills",
            q: "Why does aerial photograph matter in geography?",
            options: [
                "It saves space and communicates information efficiently.",
                "It is a useful way to record fieldwork evidence.",
                "It improves the accuracy of locating features.",
                "It helps geographers compare real features with mapped information."
            ],
            answer: 3,
            explain: "It helps geographers compare real features with mapped information."
        },
        {
            id: "y7g-mcq-89", topic: "mapping-skills",
            q: "Which geographical term best matches this description: A labelled drawing made to record important features seen during fieldwork?",
            options: ["field sketch", "border", "orientation", "legend"],
            answer: 0,
            explain: "Field sketch is a labelled drawing made to record important features seen during fieldwork."
        },
        {
            id: "y7g-mcq-90", topic: "mapping-skills",
            q: "What is the main purpose of field sketch in Year 7 Geography?",
            options: [
                "Work out directions correctly",
                "Record observations clearly from ground level",
                "Interpret symbols and colours accurately",
                "Identify the topic, place or purpose of the map"
            ],
            answer: 1,
            explain: "Field sketch is used to record observations clearly from ground level."
        },
        {
            id: "y7g-mcq-91", topic: "mapping-skills",
            q: "Which situation would most likely require field sketch?",
            options: [
                "Working out that a blue line stands for a river and a black line stands for a road",
                "Choosing between a map titled Rainfall in NSW and a map titled Population Density in NSW",
                "Drawing the riverbank and labelling vegetation, erosion and nearby buildings",
                "Estimating how far a town is from a river by measuring the map"
            ],
            answer: 2,
            explain: "Geographers use field sketch when they need to record observations clearly from ground level."
        },
        {
            id: "y7g-mcq-92", topic: "mapping-skills",
            q: "Which statement about field sketch is correct?",
            options: [
                "A good title is specific and relevant to the information shown.",
                "Scale can be shown as a ratio, statement or line scale.",
                "A source improves the credibility of geographical information.",
                "Field sketches simplify the view and highlight the most important features."
            ],
            answer: 3,
            explain: "Field sketches simplify the view and highlight the most important features."
        },
        {
            id: "y7g-mcq-93", topic: "mapping-skills",
            q: "If field sketch was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Important observations may be forgotten or poorly recorded",
                "Distance estimates become unreliable",
                "People cannot easily judge whether the information is trustworthy or current",
                "The map may become cluttered or hard to read"
            ],
            answer: 0,
            explain: "If field sketch is missing, inaccurate or ignored, important observations may be forgotten or poorly recorded."
        },
        {
            id: "y7g-mcq-94", topic: "mapping-skills",
            q: "A student is drawing the riverbank and labelling vegetation, erosion and nearby buildings. Which feature, skill or concept is most useful?",
            options: ["source", "field sketch", "symbol", "aerial photograph"],
            answer: 1,
            explain: "Field sketch is most useful because it helps geographers record observations clearly from ground level."
        },
        {
            id: "y7g-mcq-95", topic: "mapping-skills",
            q: "Which feature best helps a geographer record observations clearly from ground level?",
            options: ["symbol", "aerial photograph", "field sketch", "grid reference"],
            answer: 2,
            explain: "Field sketch helps geographers record observations clearly from ground level."
        },
        {
            id: "y7g-mcq-96", topic: "mapping-skills",
            q: "Why does field sketch matter in geography?",
            options: [
                "It helps geographers compare real features with mapped information.",
                "It improves the accuracy of locating features.",
                "It improves clarity by setting clear limits around the mapped information.",
                "It is a useful way to record fieldwork evidence."
            ],
            answer: 3,
            explain: "It is a useful way to record fieldwork evidence."
        },
        {
            id: "y7g-mcq-97", topic: "mapping-skills",
            q: "Which geographical term best matches this description: A location system that uses rows, columns or coordinates to find places accurately?",
            options: ["grid reference", "orientation", "legend", "title"],
            answer: 0,
            explain: "Grid reference is a location system that uses rows, columns or coordinates to find places accurately."
        },
        {
            id: "y7g-mcq-98", topic: "mapping-skills",
            q: "What is the main purpose of grid reference in Year 7 Geography?",
            options: [
                "Interpret symbols and colours accurately",
                "Locate places precisely on a map",
                "Identify the topic, place or purpose of the map",
                "Calculate real-world distance from map measurements"
            ],
            answer: 1,
            explain: "Grid reference is used to locate places precisely on a map."
        },
        {
            id: "y7g-mcq-99", topic: "mapping-skills",
            q: "Which situation would most likely require grid reference?",
            options: [
                "Choosing between a map titled Rainfall in NSW and a map titled Population Density in NSW",
                "Estimating how far a town is from a river by measuring the map",
                "Finding the campsite in square B4 on a simple map",
                "Looking to see whether the map uses data from an atlas, a satellite image or a government website"
            ],
            answer: 2,
            explain: "Geographers use grid reference when they need to locate places precisely on a map."
        },
        {
            id: "y7g-mcq-100", topic: "mapping-skills",
            q: "Which statement about grid reference is correct?",
            options: [
                "Scale can be shown as a ratio, statement or line scale.",
                "A source improves the credibility of geographical information.",
                "Symbols should be simple, consistent and easy to recognise.",
                "Grid references are more precise than broad compass directions alone."
            ],
            answer: 3,
            explain: "Grid references are more precise than broad compass directions alone."
        },
        {
            id: "y7g-mcq-101", topic: "mapping-skills",
            q: "If grid reference was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Places are harder to find accurately",
                "People cannot easily judge whether the information is trustworthy or current",
                "The map may become cluttered or hard to read",
                "Some patterns in the landscape may be harder to recognise"
            ],
            answer: 0,
            explain: "If grid reference is missing, inaccurate or ignored, places are harder to find accurately."
        },
        {
            id: "y7g-mcq-102", topic: "mapping-skills",
            q: "A student is finding the campsite in square B4 on a simple map. Which feature, skill or concept is most useful?",
            options: ["symbol", "grid reference", "aerial photograph", "field sketch"],
            answer: 1,
            explain: "Grid reference is most useful because it helps geographers locate places precisely on a map."
        },
        {
            id: "y7g-mcq-103", topic: "mapping-skills",
            q: "Which feature best helps a geographer locate places precisely on a map?",
            options: ["aerial photograph", "field sketch", "grid reference", "border"],
            answer: 2,
            explain: "Grid reference helps geographers locate places precisely on a map."
        },
        {
            id: "y7g-mcq-104", topic: "mapping-skills",
            q: "Why does grid reference matter in geography?",
            options: [
                "It is a useful way to record fieldwork evidence.",
                "It improves clarity by setting clear limits around the mapped information.",
                "It helps readers compare the map with the real world.",
                "It improves the accuracy of locating features."
            ],
            answer: 3,
            explain: "It improves the accuracy of locating features."
        },

        /* ----- Additional direction, scale & distance ----- */
        {
            id: "y7g-mcq-105", topic: "direction-scale",
            q: "Which geographical term best matches this description: One of the four main compass directions: north, south, east or west?",
            options: ["cardinal direction", "bearing", "compass rose", "linear scale"],
            answer: 0,
            explain: "Cardinal direction is one of the four main compass directions: north, south, east or west."
        },
        {
            id: "y7g-mcq-106", topic: "direction-scale",
            q: "What is the main purpose of cardinal direction in Year 7 Geography?",
            options: [
                "Show direction on a map clearly",
                "Describe broad direction simply",
                "Measure and convert distance directly from a map",
                "Show the relationship between map units and real-world units"
            ],
            answer: 1,
            explain: "Cardinal direction is used to describe broad direction simply."
        },
        {
            id: "y7g-mcq-107", topic: "direction-scale",
            q: "Which situation would most likely require cardinal direction?",
            options: [
                "Placing a ruler against the scale bar to estimate how far two towns are apart",
                "Using 1 centimetre on the map to calculate 500 metres on the ground",
                "Stating that the library is north of the hall",
                "Measuring from the school to the station with a ruler"
            ],
            answer: 2,
            explain: "Geographers use cardinal direction when they need to describe broad direction simply."
        },
        {
            id: "y7g-mcq-108", topic: "direction-scale",
            q: "Which statement about cardinal direction is correct?",
            options: [
                "A ratio scale compares one unit on the map to the same units in reality.",
                "Straight-line distance ignores bends, obstacles and road curves.",
                "Route distance is usually longer than straight-line distance.",
                "Cardinal directions are the starting point for reading map direction."
            ],
            answer: 3,
            explain: "Cardinal directions are the starting point for reading map direction."
        },
        {
            id: "y7g-mcq-109", topic: "direction-scale",
            q: "If cardinal direction was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "A location may be described less clearly",
                "Distance may be confused with the actual travel path",
                "Travel planning may be unrealistic",
                "Important local detail may be missed"
            ],
            answer: 0,
            explain: "If cardinal direction is missing, inaccurate or ignored, a location may be described less clearly."
        },
        {
            id: "y7g-mcq-110", topic: "direction-scale",
            q: "A student is stating that the library is north of the hall. Which feature, skill or concept is most useful?",
            options: ["route distance", "cardinal direction", "large-scale map", "small-scale map"],
            answer: 1,
            explain: "Cardinal direction is most useful because it helps geographers describe broad direction simply."
        },
        {
            id: "y7g-mcq-111", topic: "direction-scale",
            q: "Which feature best helps a geographer describe broad direction simply?",
            options: ["large-scale map", "small-scale map", "cardinal direction", "intercardinal direction"],
            answer: 2,
            explain: "Cardinal direction helps geographers describe broad direction simply."
        },
        {
            id: "y7g-mcq-112", topic: "direction-scale",
            q: "Why does cardinal direction matter in geography?",
            options: [
                "They are useful for seeing broad spatial patterns.",
                "They make location descriptions more precise.",
                "They are useful when precise navigation is needed.",
                "They give a simple and reliable way to communicate direction."
            ],
            answer: 3,
            explain: "They give a simple and reliable way to communicate direction."
        },
        {
            id: "y7g-mcq-113", topic: "direction-scale",
            q: "Which geographical term best matches this description: A direction halfway between two cardinal directions, such as north-east?",
            options: ["intercardinal direction", "compass rose", "linear scale", "ratio scale"],
            answer: 0,
            explain: "Intercardinal direction is a direction halfway between two cardinal directions, such as north-east."
        },
        {
            id: "y7g-mcq-114", topic: "direction-scale",
            q: "What is the main purpose of intercardinal direction in Year 7 Geography?",
            options: [
                "Measure and convert distance directly from a map",
                "Describe direction more precisely than only using north, south, east or west",
                "Show the relationship between map units and real-world units",
                "Estimate the shortest distance between places"
            ],
            answer: 1,
            explain: "Intercardinal direction is used to describe direction more precisely than only using north, south, east or west."
        },
        {
            id: "y7g-mcq-115", topic: "direction-scale",
            q: "Which situation would most likely require intercardinal direction?",
            options: [
                "Using 1 centimetre on the map to calculate 500 metres on the ground",
                "Measuring from the school to the station with a ruler",
                "Stating that the sports field is south-east of the classroom block",
                "Following the curves of a road between two towns"
            ],
            answer: 2,
            explain: "Geographers use intercardinal direction when they need to describe direction more precisely than only using north, south, east or west."
        },
        {
            id: "y7g-mcq-116", topic: "direction-scale",
            q: "Which statement about intercardinal direction is correct?",
            options: [
                "Straight-line distance ignores bends, obstacles and road curves.",
                "Route distance is usually longer than straight-line distance.",
                "Large-scale maps trade broad coverage for greater detail.",
                "Intercardinal directions improve accuracy without needing an exact angle."
            ],
            answer: 3,
            explain: "Intercardinal directions improve accuracy without needing an exact angle."
        },
        {
            id: "y7g-mcq-117", topic: "direction-scale",
            q: "If intercardinal direction was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Direction may be too general to be useful",
                "Travel planning may be unrealistic",
                "Important local detail may be missed",
                "People may expect detail that the map cannot provide"
            ],
            answer: 0,
            explain: "If intercardinal direction is missing, inaccurate or ignored, direction may be too general to be useful."
        },
        {
            id: "y7g-mcq-118", topic: "direction-scale",
            q: "A student is stating that the sports field is south-east of the classroom block. Which feature, skill or concept is most useful?",
            options: ["large-scale map", "intercardinal direction", "small-scale map", "cardinal direction"],
            answer: 1,
            explain: "Intercardinal direction is most useful because it helps geographers describe direction more precisely than only using north, south, east or west."
        },
        {
            id: "y7g-mcq-119", topic: "direction-scale",
            q: "Which feature best helps a geographer describe direction more precisely than only using north, south, east or west?",
            options: ["small-scale map", "cardinal direction", "intercardinal direction", "bearing"],
            answer: 2,
            explain: "Intercardinal direction helps geographers describe direction more precisely than only using north, south, east or west."
        },
        {
            id: "y7g-mcq-120", topic: "direction-scale",
            q: "Why does intercardinal direction matter in geography?",
            options: [
                "They give a simple and reliable way to communicate direction.",
                "They are useful when precise navigation is needed.",
                "It supports accurate directional reading.",
                "They make location descriptions more precise."
            ],
            answer: 3,
            explain: "They make location descriptions more precise."
        },
        {
            id: "y7g-mcq-121", topic: "direction-scale",
            q: "Which geographical term best matches this description: An exact direction measured clockwise from north and written as a three-figure angle?",
            options: ["bearing", "linear scale", "ratio scale", "straight-line distance"],
            answer: 0,
            explain: "Bearing is an exact direction measured clockwise from north and written as a three-figure angle."
        },
        {
            id: "y7g-mcq-122", topic: "direction-scale",
            q: "What is the main purpose of bearing in Year 7 Geography?",
            options: [
                "Show the relationship between map units and real-world units",
                "State direction very accurately",
                "Estimate the shortest distance between places",
                "Calculate how far someone really needs to travel"
            ],
            answer: 1,
            explain: "Bearing is used to state direction very accurately."
        },
        {
            id: "y7g-mcq-123", topic: "direction-scale",
            q: "Which situation would most likely require bearing?",
            options: [
                "Measuring from the school to the station with a ruler",
                "Following the curves of a road between two towns",
                "Recording that a lookout lies on a bearing of 135 degrees",
                "Using a school grounds map to see buildings, paths and gates"
            ],
            answer: 2,
            explain: "Geographers use bearing when they need to state direction very accurately."
        },
        {
            id: "y7g-mcq-124", topic: "direction-scale",
            q: "Which statement about bearing is correct?",
            options: [
                "Route distance is usually longer than straight-line distance.",
                "Large-scale maps trade broad coverage for greater detail.",
                "Small-scale maps cover more area but show fewer local features.",
                "Bearings are always measured clockwise from north."
            ],
            answer: 3,
            explain: "Bearings are always measured clockwise from north."
        },
        {
            id: "y7g-mcq-125", topic: "direction-scale",
            q: "If bearing was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Route directions may be less exact",
                "Important local detail may be missed",
                "People may expect detail that the map cannot provide",
                "A location may be described less clearly"
            ],
            answer: 0,
            explain: "If bearing is missing, inaccurate or ignored, route directions may be less exact."
        },
        {
            id: "y7g-mcq-126", topic: "direction-scale",
            q: "A student is recording that a lookout lies on a bearing of 135 degrees. Which feature, skill or concept is most useful?",
            options: ["small-scale map", "bearing", "cardinal direction", "intercardinal direction"],
            answer: 1,
            explain: "Bearing is most useful because it helps geographers state direction very accurately."
        },
        {
            id: "y7g-mcq-127", topic: "direction-scale",
            q: "Which feature best helps a geographer state direction very accurately?",
            options: ["cardinal direction", "intercardinal direction", "bearing", "compass rose"],
            answer: 2,
            explain: "Bearing helps geographers state direction very accurately."
        },
        {
            id: "y7g-mcq-128", topic: "direction-scale",
            q: "Why does bearing matter in geography?",
            options: [
                "They make location descriptions more precise.",
                "It supports accurate directional reading.",
                "It makes distance measurement practical and visual.",
                "They are useful when precise navigation is needed."
            ],
            answer: 3,
            explain: "They are useful when precise navigation is needed."
        },
        {
            id: "y7g-mcq-129", topic: "direction-scale",
            q: "Which geographical term best matches this description: A map diagram that shows north and the other main directions?",
            options: ["compass rose", "ratio scale", "straight-line distance", "route distance"],
            answer: 0,
            explain: "Compass rose is a map diagram that shows north and the other main directions."
        },
        {
            id: "y7g-mcq-130", topic: "direction-scale",
            q: "What is the main purpose of compass rose in Year 7 Geography?",
            options: [
                "Estimate the shortest distance between places",
                "Show direction on a map clearly",
                "Calculate how far someone really needs to travel",
                "Show detailed information about a smaller place"
            ],
            answer: 1,
            explain: "Compass rose is used to show direction on a map clearly."
        },
        {
            id: "y7g-mcq-131", topic: "direction-scale",
            q: "Which situation would most likely require compass rose?",
            options: [
                "Following the curves of a road between two towns",
                "Using a school grounds map to see buildings, paths and gates",
                "Using the compass rose to check whether a walking track heads west",
                "Using a map of Australia to compare states and capital cities"
            ],
            answer: 2,
            explain: "Geographers use compass rose when they need to show direction on a map clearly."
        },
        {
            id: "y7g-mcq-132", topic: "direction-scale",
            q: "Which statement about compass rose is correct?",
            options: [
                "Large-scale maps trade broad coverage for greater detail.",
                "Small-scale maps cover more area but show fewer local features.",
                "Cardinal directions are the starting point for reading map direction.",
                "A compass rose often includes both cardinal and intercardinal directions."
            ],
            answer: 3,
            explain: "A compass rose often includes both cardinal and intercardinal directions."
        },
        {
            id: "y7g-mcq-133", topic: "direction-scale",
            q: "If compass rose was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Readers may find it harder to interpret direction on the map",
                "People may expect detail that the map cannot provide",
                "A location may be described less clearly",
                "Direction may be too general to be useful"
            ],
            answer: 0,
            explain: "If compass rose is missing, inaccurate or ignored, readers may find it harder to interpret direction on the map."
        },
        {
            id: "y7g-mcq-134", topic: "direction-scale",
            q: "A student is using the compass rose to check whether a walking track heads west. Which feature, skill or concept is most useful?",
            options: ["cardinal direction", "compass rose", "intercardinal direction", "bearing"],
            answer: 1,
            explain: "Compass rose is most useful because it helps geographers show direction on a map clearly."
        },
        {
            id: "y7g-mcq-135", topic: "direction-scale",
            q: "Which feature best helps a geographer show direction on a map clearly?",
            options: ["intercardinal direction", "bearing", "compass rose", "linear scale"],
            answer: 2,
            explain: "Compass rose helps geographers show direction on a map clearly."
        },
        {
            id: "y7g-mcq-136", topic: "direction-scale",
            q: "Why does compass rose matter in geography?",
            options: [
                "They are useful when precise navigation is needed.",
                "It makes distance measurement practical and visual.",
                "It allows accurate numerical distance calculations.",
                "It supports accurate directional reading."
            ],
            answer: 3,
            explain: "It supports accurate directional reading."
        },
        {
            id: "y7g-mcq-137", topic: "direction-scale",
            q: "Which geographical term best matches this description: A bar scale that shows how map distance matches real distance?",
            options: ["linear scale", "straight-line distance", "route distance", "large-scale map"],
            answer: 0,
            explain: "Linear scale is a bar scale that shows how map distance matches real distance."
        },
        {
            id: "y7g-mcq-138", topic: "direction-scale",
            q: "What is the main purpose of linear scale in Year 7 Geography?",
            options: [
                "Calculate how far someone really needs to travel",
                "Measure and convert distance directly from a map",
                "Show detailed information about a smaller place",
                "Show a wider region or larger pattern"
            ],
            answer: 1,
            explain: "Linear scale is used to measure and convert distance directly from a map."
        },
        {
            id: "y7g-mcq-139", topic: "direction-scale",
            q: "Which situation would most likely require linear scale?",
            options: [
                "Using a school grounds map to see buildings, paths and gates",
                "Using a map of Australia to compare states and capital cities",
                "Placing a ruler against the scale bar to estimate how far two towns are apart",
                "Stating that the library is north of the hall"
            ],
            answer: 2,
            explain: "Geographers use linear scale when they need to measure and convert distance directly from a map."
        },
        {
            id: "y7g-mcq-140", topic: "direction-scale",
            q: "Which statement about linear scale is correct?",
            options: [
                "Small-scale maps cover more area but show fewer local features.",
                "Cardinal directions are the starting point for reading map direction.",
                "Intercardinal directions improve accuracy without needing an exact angle.",
                "A linear scale stays useful even if a map is enlarged or reduced."
            ],
            answer: 3,
            explain: "A linear scale stays useful even if a map is enlarged or reduced."
        },
        {
            id: "y7g-mcq-141", topic: "direction-scale",
            q: "If linear scale was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Distance calculations may be more difficult",
                "A location may be described less clearly",
                "Direction may be too general to be useful",
                "Route directions may be less exact"
            ],
            answer: 0,
            explain: "If linear scale is missing, inaccurate or ignored, distance calculations may be more difficult."
        },
        {
            id: "y7g-mcq-142", topic: "direction-scale",
            q: "A student is placing a ruler against the scale bar to estimate how far two towns are apart. Which feature, skill or concept is most useful?",
            options: ["intercardinal direction", "linear scale", "bearing", "compass rose"],
            answer: 1,
            explain: "Linear scale is most useful because it helps geographers measure and convert distance directly from a map."
        },
        {
            id: "y7g-mcq-143", topic: "direction-scale",
            q: "Which feature best helps a geographer measure and convert distance directly from a map?",
            options: ["bearing", "compass rose", "linear scale", "ratio scale"],
            answer: 2,
            explain: "Linear scale helps geographers measure and convert distance directly from a map."
        },
        {
            id: "y7g-mcq-144", topic: "direction-scale",
            q: "Why does linear scale matter in geography?",
            options: [
                "It supports accurate directional reading.",
                "It allows accurate numerical distance calculations.",
                "It provides a quick estimate of how far apart places are.",
                "It makes distance measurement practical and visual."
            ],
            answer: 3,
            explain: "It makes distance measurement practical and visual."
        },
        {
            id: "y7g-mcq-145", topic: "direction-scale",
            q: "Which geographical term best matches this description: A scale written as a ratio such as 1:50000?",
            options: ["ratio scale", "route distance", "large-scale map", "small-scale map"],
            answer: 0,
            explain: "Ratio scale is a scale written as a ratio such as 1:50000."
        },
        {
            id: "y7g-mcq-146", topic: "direction-scale",
            q: "What is the main purpose of ratio scale in Year 7 Geography?",
            options: [
                "Show detailed information about a smaller place",
                "Show the relationship between map units and real-world units",
                "Show a wider region or larger pattern",
                "Describe broad direction simply"
            ],
            answer: 1,
            explain: "Ratio scale is used to show the relationship between map units and real-world units."
        },
        {
            id: "y7g-mcq-147", topic: "direction-scale",
            q: "Which situation would most likely require ratio scale?",
            options: [
                "Using a map of Australia to compare states and capital cities",
                "Stating that the library is north of the hall",
                "Using 1 centimetre on the map to calculate 500 metres on the ground",
                "Stating that the sports field is south-east of the classroom block"
            ],
            answer: 2,
            explain: "Geographers use ratio scale when they need to show the relationship between map units and real-world units."
        },
        {
            id: "y7g-mcq-148", topic: "direction-scale",
            q: "Which statement about ratio scale is correct?",
            options: [
                "Cardinal directions are the starting point for reading map direction.",
                "Intercardinal directions improve accuracy without needing an exact angle.",
                "Bearings are always measured clockwise from north.",
                "A ratio scale compares one unit on the map to the same units in reality."
            ],
            answer: 3,
            explain: "A ratio scale compares one unit on the map to the same units in reality."
        },
        {
            id: "y7g-mcq-149", topic: "direction-scale",
            q: "If ratio scale was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "The relationship between map units and actual distance may be unclear",
                "Direction may be too general to be useful",
                "Route directions may be less exact",
                "Readers may find it harder to interpret direction on the map"
            ],
            answer: 0,
            explain: "If ratio scale is missing, inaccurate or ignored, the relationship between map units and actual distance may be unclear."
        },
        {
            id: "y7g-mcq-150", topic: "direction-scale",
            q: "A student is using 1 centimetre on the map to calculate 500 metres on the ground. Which feature, skill or concept is most useful?",
            options: ["bearing", "ratio scale", "compass rose", "linear scale"],
            answer: 1,
            explain: "Ratio scale is most useful because it helps geographers show the relationship between map units and real-world units."
        },
        {
            id: "y7g-mcq-151", topic: "direction-scale",
            q: "Which feature best helps a geographer show the relationship between map units and real-world units?",
            options: ["compass rose", "linear scale", "ratio scale", "straight-line distance"],
            answer: 2,
            explain: "Ratio scale helps geographers show the relationship between map units and real-world units."
        },
        {
            id: "y7g-mcq-152", topic: "direction-scale",
            q: "Why does ratio scale matter in geography?",
            options: [
                "It makes distance measurement practical and visual.",
                "It provides a quick estimate of how far apart places are.",
                "It is more useful for planning real journeys.",
                "It allows accurate numerical distance calculations."
            ],
            answer: 3,
            explain: "It allows accurate numerical distance calculations."
        },
        {
            id: "y7g-mcq-153", topic: "direction-scale",
            q: "Which geographical term best matches this description: The direct distance between two places measured in a single line?",
            options: ["straight-line distance", "large-scale map", "small-scale map", "cardinal direction"],
            answer: 0,
            explain: "Straight-line distance is the direct distance between two places measured in a single line."
        },
        {
            id: "y7g-mcq-154", topic: "direction-scale",
            q: "What is the main purpose of straight-line distance in Year 7 Geography?",
            options: [
                "Show a wider region or larger pattern",
                "Estimate the shortest distance between places",
                "Describe broad direction simply",
                "Describe direction more precisely than only using north, south, east or west"
            ],
            answer: 1,
            explain: "Straight-line distance is used to estimate the shortest distance between places."
        },
        {
            id: "y7g-mcq-155", topic: "direction-scale",
            q: "Which situation would most likely require straight-line distance?",
            options: [
                "Stating that the library is north of the hall",
                "Stating that the sports field is south-east of the classroom block",
                "Measuring from the school to the station with a ruler",
                "Recording that a lookout lies on a bearing of 135 degrees"
            ],
            answer: 2,
            explain: "Geographers use straight-line distance when they need to estimate the shortest distance between places."
        },
        {
            id: "y7g-mcq-156", topic: "direction-scale",
            q: "Which statement about straight-line distance is correct?",
            options: [
                "Intercardinal directions improve accuracy without needing an exact angle.",
                "Bearings are always measured clockwise from north.",
                "A compass rose often includes both cardinal and intercardinal directions.",
                "Straight-line distance ignores bends, obstacles and road curves."
            ],
            answer: 3,
            explain: "Straight-line distance ignores bends, obstacles and road curves."
        },
        {
            id: "y7g-mcq-157", topic: "direction-scale",
            q: "If straight-line distance was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Distance may be confused with the actual travel path",
                "Route directions may be less exact",
                "Readers may find it harder to interpret direction on the map",
                "Distance calculations may be more difficult"
            ],
            answer: 0,
            explain: "If straight-line distance is missing, inaccurate or ignored, distance may be confused with the actual travel path."
        },
        {
            id: "y7g-mcq-158", topic: "direction-scale",
            q: "A student is measuring from the school to the station with a ruler. Which feature, skill or concept is most useful?",
            options: ["compass rose", "straight-line distance", "linear scale", "ratio scale"],
            answer: 1,
            explain: "Straight-line distance is most useful because it helps geographers estimate the shortest distance between places."
        },
        {
            id: "y7g-mcq-159", topic: "direction-scale",
            q: "Which feature best helps a geographer estimate the shortest distance between places?",
            options: ["linear scale", "ratio scale", "straight-line distance", "route distance"],
            answer: 2,
            explain: "Straight-line distance helps geographers estimate the shortest distance between places."
        },
        {
            id: "y7g-mcq-160", topic: "direction-scale",
            q: "Why does straight-line distance matter in geography?",
            options: [
                "It allows accurate numerical distance calculations.",
                "It is more useful for planning real journeys.",
                "They are helpful for close-up planning and fieldwork.",
                "It provides a quick estimate of how far apart places are."
            ],
            answer: 3,
            explain: "It provides a quick estimate of how far apart places are."
        },
        {
            id: "y7g-mcq-161", topic: "direction-scale",
            q: "Which geographical term best matches this description: The distance travelled along roads, paths or other actual routes?",
            options: ["route distance", "small-scale map", "cardinal direction", "intercardinal direction"],
            answer: 0,
            explain: "Route distance is the distance travelled along roads, paths or other actual routes."
        },
        {
            id: "y7g-mcq-162", topic: "direction-scale",
            q: "What is the main purpose of route distance in Year 7 Geography?",
            options: [
                "Describe broad direction simply",
                "Calculate how far someone really needs to travel",
                "Describe direction more precisely than only using north, south, east or west",
                "State direction very accurately"
            ],
            answer: 1,
            explain: "Route distance is used to calculate how far someone really needs to travel."
        },
        {
            id: "y7g-mcq-163", topic: "direction-scale",
            q: "Which situation would most likely require route distance?",
            options: [
                "Stating that the sports field is south-east of the classroom block",
                "Recording that a lookout lies on a bearing of 135 degrees",
                "Following the curves of a road between two towns",
                "Using the compass rose to check whether a walking track heads west"
            ],
            answer: 2,
            explain: "Geographers use route distance when they need to calculate how far someone really needs to travel."
        },
        {
            id: "y7g-mcq-164", topic: "direction-scale",
            q: "Which statement about route distance is correct?",
            options: [
                "Bearings are always measured clockwise from north.",
                "A compass rose often includes both cardinal and intercardinal directions.",
                "A linear scale stays useful even if a map is enlarged or reduced.",
                "Route distance is usually longer than straight-line distance."
            ],
            answer: 3,
            explain: "Route distance is usually longer than straight-line distance."
        },
        {
            id: "y7g-mcq-165", topic: "direction-scale",
            q: "If route distance was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Travel planning may be unrealistic",
                "Readers may find it harder to interpret direction on the map",
                "Distance calculations may be more difficult",
                "The relationship between map units and actual distance may be unclear"
            ],
            answer: 0,
            explain: "If route distance is missing, inaccurate or ignored, travel planning may be unrealistic."
        },
        {
            id: "y7g-mcq-166", topic: "direction-scale",
            q: "A student is following the curves of a road between two towns. Which feature, skill or concept is most useful?",
            options: ["linear scale", "route distance", "ratio scale", "straight-line distance"],
            answer: 1,
            explain: "Route distance is most useful because it helps geographers calculate how far someone really needs to travel."
        },
        {
            id: "y7g-mcq-167", topic: "direction-scale",
            q: "Which feature best helps a geographer calculate how far someone really needs to travel?",
            options: ["ratio scale", "straight-line distance", "route distance", "large-scale map"],
            answer: 2,
            explain: "Route distance helps geographers calculate how far someone really needs to travel."
        },
        {
            id: "y7g-mcq-168", topic: "direction-scale",
            q: "Why does route distance matter in geography?",
            options: [
                "It provides a quick estimate of how far apart places are.",
                "They are helpful for close-up planning and fieldwork.",
                "They are useful for seeing broad spatial patterns.",
                "It is more useful for planning real journeys."
            ],
            answer: 3,
            explain: "It is more useful for planning real journeys."
        },
        {
            id: "y7g-mcq-169", topic: "direction-scale",
            q: "Which geographical term best matches this description: A map that shows a small area in greater detail?",
            options: ["large-scale map", "cardinal direction", "intercardinal direction", "bearing"],
            answer: 0,
            explain: "Large-scale map is a map that shows a small area in greater detail."
        },
        {
            id: "y7g-mcq-170", topic: "direction-scale",
            q: "What is the main purpose of large-scale map in Year 7 Geography?",
            options: [
                "Describe direction more precisely than only using north, south, east or west",
                "Show detailed information about a smaller place",
                "State direction very accurately",
                "Show direction on a map clearly"
            ],
            answer: 1,
            explain: "Large-scale map is used to show detailed information about a smaller place."
        },
        {
            id: "y7g-mcq-171", topic: "direction-scale",
            q: "Which situation would most likely require large-scale map?",
            options: [
                "Recording that a lookout lies on a bearing of 135 degrees",
                "Using the compass rose to check whether a walking track heads west",
                "Using a school grounds map to see buildings, paths and gates",
                "Placing a ruler against the scale bar to estimate how far two towns are apart"
            ],
            answer: 2,
            explain: "Geographers use large-scale map when they need to show detailed information about a smaller place."
        },
        {
            id: "y7g-mcq-172", topic: "direction-scale",
            q: "Which statement about large-scale map is correct?",
            options: [
                "A compass rose often includes both cardinal and intercardinal directions.",
                "A linear scale stays useful even if a map is enlarged or reduced.",
                "A ratio scale compares one unit on the map to the same units in reality.",
                "Large-scale maps trade broad coverage for greater detail."
            ],
            answer: 3,
            explain: "Large-scale maps trade broad coverage for greater detail."
        },
        {
            id: "y7g-mcq-173", topic: "direction-scale",
            q: "If large-scale map was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Important local detail may be missed",
                "Distance calculations may be more difficult",
                "The relationship between map units and actual distance may be unclear",
                "Distance may be confused with the actual travel path"
            ],
            answer: 0,
            explain: "If large-scale map is missing, inaccurate or ignored, important local detail may be missed."
        },
        {
            id: "y7g-mcq-174", topic: "direction-scale",
            q: "A student is using a school grounds map to see buildings, paths and gates. Which feature, skill or concept is most useful?",
            options: ["ratio scale", "large-scale map", "straight-line distance", "route distance"],
            answer: 1,
            explain: "Large-scale map is most useful because it helps geographers show detailed information about a smaller place."
        },
        {
            id: "y7g-mcq-175", topic: "direction-scale",
            q: "Which feature best helps a geographer show detailed information about a smaller place?",
            options: ["straight-line distance", "route distance", "large-scale map", "small-scale map"],
            answer: 2,
            explain: "Large-scale map helps geographers show detailed information about a smaller place."
        },
        {
            id: "y7g-mcq-176", topic: "direction-scale",
            q: "Why does large-scale map matter in geography?",
            options: [
                "It is more useful for planning real journeys.",
                "They are useful for seeing broad spatial patterns.",
                "They give a simple and reliable way to communicate direction.",
                "They are helpful for close-up planning and fieldwork."
            ],
            answer: 3,
            explain: "They are helpful for close-up planning and fieldwork."
        },
        {
            id: "y7g-mcq-177", topic: "direction-scale",
            q: "Which geographical term best matches this description: A map that shows a large area with less detail?",
            options: ["small-scale map", "intercardinal direction", "bearing", "compass rose"],
            answer: 0,
            explain: "Small-scale map is a map that shows a large area with less detail."
        },
        {
            id: "y7g-mcq-178", topic: "direction-scale",
            q: "What is the main purpose of small-scale map in Year 7 Geography?",
            options: [
                "State direction very accurately",
                "Show a wider region or larger pattern",
                "Show direction on a map clearly",
                "Measure and convert distance directly from a map"
            ],
            answer: 1,
            explain: "Small-scale map is used to show a wider region or larger pattern."
        },
        {
            id: "y7g-mcq-179", topic: "direction-scale",
            q: "Which situation would most likely require small-scale map?",
            options: [
                "Using the compass rose to check whether a walking track heads west",
                "Placing a ruler against the scale bar to estimate how far two towns are apart",
                "Using a map of Australia to compare states and capital cities",
                "Using 1 centimetre on the map to calculate 500 metres on the ground"
            ],
            answer: 2,
            explain: "Geographers use small-scale map when they need to show a wider region or larger pattern."
        },
        {
            id: "y7g-mcq-180", topic: "direction-scale",
            q: "Which statement about small-scale map is correct?",
            options: [
                "A linear scale stays useful even if a map is enlarged or reduced.",
                "A ratio scale compares one unit on the map to the same units in reality.",
                "Straight-line distance ignores bends, obstacles and road curves.",
                "Small-scale maps cover more area but show fewer local features."
            ],
            answer: 3,
            explain: "Small-scale maps cover more area but show fewer local features."
        },
        {
            id: "y7g-mcq-181", topic: "direction-scale",
            q: "If small-scale map was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "People may expect detail that the map cannot provide",
                "The relationship between map units and actual distance may be unclear",
                "Distance may be confused with the actual travel path",
                "Travel planning may be unrealistic"
            ],
            answer: 0,
            explain: "If small-scale map is missing, inaccurate or ignored, people may expect detail that the map cannot provide."
        },
        {
            id: "y7g-mcq-182", topic: "direction-scale",
            q: "A student is using a map of Australia to compare states and capital cities. Which feature, skill or concept is most useful?",
            options: ["straight-line distance", "small-scale map", "route distance", "large-scale map"],
            answer: 1,
            explain: "Small-scale map is most useful because it helps geographers show a wider region or larger pattern."
        },
        {
            id: "y7g-mcq-183", topic: "direction-scale",
            q: "Which feature best helps a geographer show a wider region or larger pattern?",
            options: ["route distance", "large-scale map", "small-scale map", "cardinal direction"],
            answer: 2,
            explain: "Small-scale map helps geographers show a wider region or larger pattern."
        },
        {
            id: "y7g-mcq-184", topic: "direction-scale",
            q: "Why does small-scale map matter in geography?",
            options: [
                "They are helpful for close-up planning and fieldwork.",
                "They give a simple and reliable way to communicate direction.",
                "They make location descriptions more precise.",
                "They are useful for seeing broad spatial patterns."
            ],
            answer: 3,
            explain: "They are useful for seeing broad spatial patterns."
        },

        /* ----- Additional landscapes & landforms ----- */
        {
            id: "y7g-mcq-185", topic: "landscapes-features",
            q: "Which geographical term best matches this description: The visible features of an area, including natural and human elements?",
            options: ["landscape", "human element", "landform", "coastal landscape"],
            answer: 0,
            explain: "Landscape is the visible features of an area, including natural and human elements."
        },
        {
            id: "y7g-mcq-186", topic: "landscapes-features",
            q: "What is the main purpose of landscape in Year 7 Geography?",
            options: [
                "Classify and describe physical features of the land",
                "Describe what a place looks like and how it is used",
                "Identify environments shaped by waves, wind and tides",
                "Recognise highland environments and how they differ from flatter areas"
            ],
            answer: 1,
            explain: "Landscape is used to describe what a place looks like and how it is used."
        },
        {
            id: "y7g-mcq-187", topic: "landscapes-features",
            q: "Which situation would most likely require landscape?",
            options: [
                "Studying beaches, cliffs and dunes near the ocean",
                "Describing steep ridges, valleys and cooler conditions in alpine areas",
                "Observing hills, trees, roads and houses together as part of one place",
                "Describing sand, rocky surfaces and scattered shrubs"
            ],
            answer: 2,
            explain: "Geographers use landscape when they need to describe what a place looks like and how it is used."
        },
        {
            id: "y7g-mcq-188", topic: "landscapes-features",
            q: "Which statement about landscape is correct?",
            options: [
                "Mountain landscapes often affect settlement, transport and land use.",
                "Desert landscapes can include rocky plains, dunes and dry river channels.",
                "Riverine landscapes often include fertile soils and changing channels.",
                "Landscapes include both physical features and human influences."
            ],
            answer: 3,
            explain: "Landscapes include both physical features and human influences."
        },
        {
            id: "y7g-mcq-189", topic: "landscapes-features",
            q: "If landscape was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "A place may be described too narrowly or incompletely",
                "Students may assume all deserts are covered only by sand",
                "The role of flowing water in shaping places may be missed",
                "Wind-shaped landforms may be misidentified"
            ],
            answer: 0,
            explain: "If landscape is missing, inaccurate or ignored, a place may be described too narrowly or incompletely."
        },
        {
            id: "y7g-mcq-190", topic: "landscapes-features",
            q: "A student is observing hills, trees, roads and houses together as part of one place. Which feature, skill or concept is most useful?",
            options: ["riverine landscape", "landscape", "dune", "valley"],
            answer: 1,
            explain: "Landscape is most useful because it helps geographers describe what a place looks like and how it is used."
        },
        {
            id: "y7g-mcq-191", topic: "landscapes-features",
            q: "Which feature best helps a geographer describe what a place looks like and how it is used?",
            options: ["dune", "valley", "landscape", "natural element"],
            answer: 2,
            explain: "Landscape helps geographers describe what a place looks like and how it is used."
        },
        {
            id: "y7g-mcq-192", topic: "landscapes-features",
            q: "Why does landscape matter in geography?",
            options: [
                "They help geographers describe relief and drainage patterns.",
                "They help explain the physical environment of a landscape.",
                "They show how people interact with places.",
                "It is the broad idea geographers use to study places."
            ],
            answer: 3,
            explain: "It is the broad idea geographers use to study places."
        },
        {
            id: "y7g-mcq-193", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A feature in a landscape that is not built by people?",
            options: ["natural element", "landform", "coastal landscape", "mountain landscape"],
            answer: 0,
            explain: "Natural element is a feature in a landscape that is not built by people."
        },
        {
            id: "y7g-mcq-194", topic: "landscapes-features",
            q: "What is the main purpose of natural element in Year 7 Geography?",
            options: [
                "Identify environments shaped by waves, wind and tides",
                "Identify physical features such as land, water, soil or vegetation",
                "Recognise highland environments and how they differ from flatter areas",
                "Recognise environments shaped by aridity and limited water"
            ],
            answer: 1,
            explain: "Natural element is used to identify physical features such as land, water, soil or vegetation."
        },
        {
            id: "y7g-mcq-195", topic: "landscapes-features",
            q: "Which situation would most likely require natural element?",
            options: [
                "Describing steep ridges, valleys and cooler conditions in alpine areas",
                "Describing sand, rocky surfaces and scattered shrubs",
                "Pointing out a river, cliff or patch of bushland",
                "Studying a floodplain, meander or riverbank"
            ],
            answer: 2,
            explain: "Geographers use natural element when they need to identify physical features such as land, water, soil or vegetation."
        },
        {
            id: "y7g-mcq-196", topic: "landscapes-features",
            q: "Which statement about natural element is correct?",
            options: [
                "Desert landscapes can include rocky plains, dunes and dry river channels.",
                "Riverine landscapes often include fertile soils and changing channels.",
                "Dunes can move or change shape over time.",
                "Natural elements shape the character of a place."
            ],
            answer: 3,
            explain: "Natural elements shape the character of a place."
        },
        {
            id: "y7g-mcq-197", topic: "landscapes-features",
            q: "If natural element was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "People may confuse natural features with built features",
                "The role of flowing water in shaping places may be missed",
                "Wind-shaped landforms may be misidentified",
                "The relationship between high land and low land may be unclear"
            ],
            answer: 0,
            explain: "If natural element is missing, inaccurate or ignored, people may confuse natural features with built features."
        },
        {
            id: "y7g-mcq-198", topic: "landscapes-features",
            q: "A student is pointing out a river, cliff or patch of bushland. Which feature, skill or concept is most useful?",
            options: ["dune", "natural element", "valley", "landscape"],
            answer: 1,
            explain: "Natural element is most useful because it helps geographers identify physical features such as land, water, soil or vegetation."
        },
        {
            id: "y7g-mcq-199", topic: "landscapes-features",
            q: "Which feature best helps a geographer identify physical features such as land, water, soil or vegetation?",
            options: ["valley", "landscape", "natural element", "human element"],
            answer: 2,
            explain: "Natural element helps geographers identify physical features such as land, water, soil or vegetation."
        },
        {
            id: "y7g-mcq-200", topic: "landscapes-features",
            q: "Why does natural element matter in geography?",
            options: [
                "It is the broad idea geographers use to study places.",
                "They show how people interact with places.",
                "They are key features in the study of landscapes.",
                "They help explain the physical environment of a landscape."
            ],
            answer: 3,
            explain: "They help explain the physical environment of a landscape."
        },
        {
            id: "y7g-mcq-201", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A feature in a landscape that has been built or changed by people?",
            options: ["human element", "coastal landscape", "mountain landscape", "desert landscape"],
            answer: 0,
            explain: "Human element is a feature in a landscape that has been built or changed by people."
        },
        {
            id: "y7g-mcq-202", topic: "landscapes-features",
            q: "What is the main purpose of human element in Year 7 Geography?",
            options: [
                "Recognise highland environments and how they differ from flatter areas",
                "Identify how people use and modify places",
                "Recognise environments shaped by aridity and limited water",
                "Recognise how rivers influence surrounding places"
            ],
            answer: 1,
            explain: "Human element is used to identify how people use and modify places."
        },
        {
            id: "y7g-mcq-203", topic: "landscapes-features",
            q: "Which situation would most likely require human element?",
            options: [
                "Describing sand, rocky surfaces and scattered shrubs",
                "Studying a floodplain, meander or riverbank",
                "Pointing out roads, houses, fences or farms",
                "Observing long ridges of sand behind a beach"
            ],
            answer: 2,
            explain: "Geographers use human element when they need to identify how people use and modify places."
        },
        {
            id: "y7g-mcq-204", topic: "landscapes-features",
            q: "Which statement about human element is correct?",
            options: [
                "Riverine landscapes often include fertile soils and changing channels.",
                "Dunes can move or change shape over time.",
                "Valleys may be narrow and steep or broad and flat.",
                "Human elements can strongly change the appearance and use of a landscape."
            ],
            answer: 3,
            explain: "Human elements can strongly change the appearance and use of a landscape."
        },
        {
            id: "y7g-mcq-205", topic: "landscapes-features",
            q: "If human element was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "The role of people in shaping places may be overlooked",
                "Wind-shaped landforms may be misidentified",
                "The relationship between high land and low land may be unclear",
                "A place may be described too narrowly or incompletely"
            ],
            answer: 0,
            explain: "If human element is missing, inaccurate or ignored, the role of people in shaping places may be overlooked."
        },
        {
            id: "y7g-mcq-206", topic: "landscapes-features",
            q: "A student is pointing out roads, houses, fences or farms. Which feature, skill or concept is most useful?",
            options: ["valley", "human element", "landscape", "natural element"],
            answer: 1,
            explain: "Human element is most useful because it helps geographers identify how people use and modify places."
        },
        {
            id: "y7g-mcq-207", topic: "landscapes-features",
            q: "Which feature best helps a geographer identify how people use and modify places?",
            options: ["landscape", "natural element", "human element", "landform"],
            answer: 2,
            explain: "Human element helps geographers identify how people use and modify places."
        },
        {
            id: "y7g-mcq-208", topic: "landscapes-features",
            q: "Why does human element matter in geography?",
            options: [
                "They help explain the physical environment of a landscape.",
                "They are key features in the study of landscapes.",
                "They help students understand the interaction between land and sea.",
                "They show how people interact with places."
            ],
            answer: 3,
            explain: "They show how people interact with places."
        },
        {
            id: "y7g-mcq-209", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A natural feature of the Earth's surface?",
            options: ["landform", "mountain landscape", "desert landscape", "riverine landscape"],
            answer: 0,
            explain: "Landform is a natural feature of the Earth's surface."
        },
        {
            id: "y7g-mcq-210", topic: "landscapes-features",
            q: "What is the main purpose of landform in Year 7 Geography?",
            options: [
                "Recognise environments shaped by aridity and limited water",
                "Classify and describe physical features of the land",
                "Recognise how rivers influence surrounding places",
                "Identify a common coastal or desert landform"
            ],
            answer: 1,
            explain: "Landform is used to classify and describe physical features of the land."
        },
        {
            id: "y7g-mcq-211", topic: "landscapes-features",
            q: "Which situation would most likely require landform?",
            options: [
                "Studying a floodplain, meander or riverbank",
                "Observing long ridges of sand behind a beach",
                "Identifying a mountain, dune, valley or plateau",
                "Describing a river flowing through a broad valley floor"
            ],
            answer: 2,
            explain: "Geographers use landform when they need to classify and describe physical features of the land."
        },
        {
            id: "y7g-mcq-212", topic: "landscapes-features",
            q: "Which statement about landform is correct?",
            options: [
                "Dunes can move or change shape over time.",
                "Valleys may be narrow and steep or broad and flat.",
                "Landscapes include both physical features and human influences.",
                "Landforms are shaped over time by natural processes."
            ],
            answer: 3,
            explain: "Landforms are shaped over time by natural processes."
        },
        {
            id: "y7g-mcq-213", topic: "landscapes-features",
            q: "If landform was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Different physical features may be described inaccurately",
                "The relationship between high land and low land may be unclear",
                "A place may be described too narrowly or incompletely",
                "People may confuse natural features with built features"
            ],
            answer: 0,
            explain: "If landform is missing, inaccurate or ignored, different physical features may be described inaccurately."
        },
        {
            id: "y7g-mcq-214", topic: "landscapes-features",
            q: "A student is identifying a mountain, dune, valley or plateau. Which feature, skill or concept is most useful?",
            options: ["landscape", "landform", "natural element", "human element"],
            answer: 1,
            explain: "Landform is most useful because it helps geographers classify and describe physical features of the land."
        },
        {
            id: "y7g-mcq-215", topic: "landscapes-features",
            q: "Which feature best helps a geographer classify and describe physical features of the land?",
            options: ["natural element", "human element", "landform", "coastal landscape"],
            answer: 2,
            explain: "Landform helps geographers classify and describe physical features of the land."
        },
        {
            id: "y7g-mcq-216", topic: "landscapes-features",
            q: "Why does landform matter in geography?",
            options: [
                "They show how people interact with places.",
                "They help students understand the interaction between land and sea.",
                "They show how landform can influence human activity.",
                "They are key features in the study of landscapes."
            ],
            answer: 3,
            explain: "They are key features in the study of landscapes."
        },
        {
            id: "y7g-mcq-217", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A landscape found where the land meets the sea?",
            options: ["coastal landscape", "desert landscape", "riverine landscape", "dune"],
            answer: 0,
            explain: "Coastal landscape is a landscape found where the land meets the sea."
        },
        {
            id: "y7g-mcq-218", topic: "landscapes-features",
            q: "What is the main purpose of coastal landscape in Year 7 Geography?",
            options: [
                "Recognise how rivers influence surrounding places",
                "Identify environments shaped by waves, wind and tides",
                "Identify a common coastal or desert landform",
                "Identify lower land between higher areas"
            ],
            answer: 1,
            explain: "Coastal landscape is used to identify environments shaped by waves, wind and tides."
        },
        {
            id: "y7g-mcq-219", topic: "landscapes-features",
            q: "Which situation would most likely require coastal landscape?",
            options: [
                "Observing long ridges of sand behind a beach",
                "Describing a river flowing through a broad valley floor",
                "Studying beaches, cliffs and dunes near the ocean",
                "Observing hills, trees, roads and houses together as part of one place"
            ],
            answer: 2,
            explain: "Geographers use coastal landscape when they need to identify environments shaped by waves, wind and tides."
        },
        {
            id: "y7g-mcq-220", topic: "landscapes-features",
            q: "Which statement about coastal landscape is correct?",
            options: [
                "Valleys may be narrow and steep or broad and flat.",
                "Landscapes include both physical features and human influences.",
                "Natural elements shape the character of a place.",
                "Coastal landscapes often change because of wave action and wind."
            ],
            answer: 3,
            explain: "Coastal landscapes often change because of wave action and wind."
        },
        {
            id: "y7g-mcq-221", topic: "landscapes-features",
            q: "If coastal landscape was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Coastal features may be misunderstood or grouped with inland ones",
                "A place may be described too narrowly or incompletely",
                "People may confuse natural features with built features",
                "The role of people in shaping places may be overlooked"
            ],
            answer: 0,
            explain: "If coastal landscape is missing, inaccurate or ignored, coastal features may be misunderstood or grouped with inland ones."
        },
        {
            id: "y7g-mcq-222", topic: "landscapes-features",
            q: "A student is studying beaches, cliffs and dunes near the ocean. Which feature, skill or concept is most useful?",
            options: ["natural element", "coastal landscape", "human element", "landform"],
            answer: 1,
            explain: "Coastal landscape is most useful because it helps geographers identify environments shaped by waves, wind and tides."
        },
        {
            id: "y7g-mcq-223", topic: "landscapes-features",
            q: "Which feature best helps a geographer identify environments shaped by waves, wind and tides?",
            options: ["human element", "landform", "coastal landscape", "mountain landscape"],
            answer: 2,
            explain: "Coastal landscape helps geographers identify environments shaped by waves, wind and tides."
        },
        {
            id: "y7g-mcq-224", topic: "landscapes-features",
            q: "Why does coastal landscape matter in geography?",
            options: [
                "They are key features in the study of landscapes.",
                "They show how landform can influence human activity.",
                "They show how climate influences landscapes.",
                "They help students understand the interaction between land and sea."
            ],
            answer: 3,
            explain: "They help students understand the interaction between land and sea."
        },
        {
            id: "y7g-mcq-225", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A landscape with high relief, steep slopes and elevated land?",
            options: ["mountain landscape", "riverine landscape", "dune", "valley"],
            answer: 0,
            explain: "Mountain landscape is a landscape with high relief, steep slopes and elevated land."
        },
        {
            id: "y7g-mcq-226", topic: "landscapes-features",
            q: "What is the main purpose of mountain landscape in Year 7 Geography?",
            options: [
                "Identify a common coastal or desert landform",
                "Recognise highland environments and how they differ from flatter areas",
                "Identify lower land between higher areas",
                "Describe what a place looks like and how it is used"
            ],
            answer: 1,
            explain: "Mountain landscape is used to recognise highland environments and how they differ from flatter areas."
        },
        {
            id: "y7g-mcq-227", topic: "landscapes-features",
            q: "Which situation would most likely require mountain landscape?",
            options: [
                "Describing a river flowing through a broad valley floor",
                "Observing hills, trees, roads and houses together as part of one place",
                "Describing steep ridges, valleys and cooler conditions in alpine areas",
                "Pointing out a river, cliff or patch of bushland"
            ],
            answer: 2,
            explain: "Geographers use mountain landscape when they need to recognise highland environments and how they differ from flatter areas."
        },
        {
            id: "y7g-mcq-228", topic: "landscapes-features",
            q: "Which statement about mountain landscape is correct?",
            options: [
                "Landscapes include both physical features and human influences.",
                "Natural elements shape the character of a place.",
                "Human elements can strongly change the appearance and use of a landscape.",
                "Mountain landscapes often affect settlement, transport and land use."
            ],
            answer: 3,
            explain: "Mountain landscapes often affect settlement, transport and land use."
        },
        {
            id: "y7g-mcq-229", topic: "landscapes-features",
            q: "If mountain landscape was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "The character of high-relief areas may be explained poorly",
                "People may confuse natural features with built features",
                "The role of people in shaping places may be overlooked",
                "Different physical features may be described inaccurately"
            ],
            answer: 0,
            explain: "If mountain landscape is missing, inaccurate or ignored, the character of high-relief areas may be explained poorly."
        },
        {
            id: "y7g-mcq-230", topic: "landscapes-features",
            q: "A student is describing steep ridges, valleys and cooler conditions in alpine areas. Which feature, skill or concept is most useful?",
            options: ["human element", "mountain landscape", "landform", "coastal landscape"],
            answer: 1,
            explain: "Mountain landscape is most useful because it helps geographers recognise highland environments and how they differ from flatter areas."
        },
        {
            id: "y7g-mcq-231", topic: "landscapes-features",
            q: "Which feature best helps a geographer recognise highland environments and how they differ from flatter areas?",
            options: ["landform", "coastal landscape", "mountain landscape", "desert landscape"],
            answer: 2,
            explain: "Mountain landscape helps geographers recognise highland environments and how they differ from flatter areas."
        },
        {
            id: "y7g-mcq-232", topic: "landscapes-features",
            q: "Why does mountain landscape matter in geography?",
            options: [
                "They help students understand the interaction between land and sea.",
                "They show how climate influences landscapes.",
                "They help explain the connection between water and landform.",
                "They show how landform can influence human activity."
            ],
            answer: 3,
            explain: "They show how landform can influence human activity."
        },
        {
            id: "y7g-mcq-233", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A dry landscape with low rainfall and sparse vegetation?",
            options: ["desert landscape", "dune", "valley", "landscape"],
            answer: 0,
            explain: "Desert landscape is a dry landscape with low rainfall and sparse vegetation."
        },
        {
            id: "y7g-mcq-234", topic: "landscapes-features",
            q: "What is the main purpose of desert landscape in Year 7 Geography?",
            options: [
                "Identify lower land between higher areas",
                "Recognise environments shaped by aridity and limited water",
                "Describe what a place looks like and how it is used",
                "Identify physical features such as land, water, soil or vegetation"
            ],
            answer: 1,
            explain: "Desert landscape is used to recognise environments shaped by aridity and limited water."
        },
        {
            id: "y7g-mcq-235", topic: "landscapes-features",
            q: "Which situation would most likely require desert landscape?",
            options: [
                "Observing hills, trees, roads and houses together as part of one place",
                "Pointing out a river, cliff or patch of bushland",
                "Describing sand, rocky surfaces and scattered shrubs",
                "Pointing out roads, houses, fences or farms"
            ],
            answer: 2,
            explain: "Geographers use desert landscape when they need to recognise environments shaped by aridity and limited water."
        },
        {
            id: "y7g-mcq-236", topic: "landscapes-features",
            q: "Which statement about desert landscape is correct?",
            options: [
                "Natural elements shape the character of a place.",
                "Human elements can strongly change the appearance and use of a landscape.",
                "Landforms are shaped over time by natural processes.",
                "Desert landscapes can include rocky plains, dunes and dry river channels."
            ],
            answer: 3,
            explain: "Desert landscapes can include rocky plains, dunes and dry river channels."
        },
        {
            id: "y7g-mcq-237", topic: "landscapes-features",
            q: "If desert landscape was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Students may assume all deserts are covered only by sand",
                "The role of people in shaping places may be overlooked",
                "Different physical features may be described inaccurately",
                "Coastal features may be misunderstood or grouped with inland ones"
            ],
            answer: 0,
            explain: "If desert landscape is missing, inaccurate or ignored, students may assume all deserts are covered only by sand."
        },
        {
            id: "y7g-mcq-238", topic: "landscapes-features",
            q: "A student is describing sand, rocky surfaces and scattered shrubs. Which feature, skill or concept is most useful?",
            options: ["landform", "desert landscape", "coastal landscape", "mountain landscape"],
            answer: 1,
            explain: "Desert landscape is most useful because it helps geographers recognise environments shaped by aridity and limited water."
        },
        {
            id: "y7g-mcq-239", topic: "landscapes-features",
            q: "Which feature best helps a geographer recognise environments shaped by aridity and limited water?",
            options: ["coastal landscape", "mountain landscape", "desert landscape", "riverine landscape"],
            answer: 2,
            explain: "Desert landscape helps geographers recognise environments shaped by aridity and limited water."
        },
        {
            id: "y7g-mcq-240", topic: "landscapes-features",
            q: "Why does desert landscape matter in geography?",
            options: [
                "They show how landform can influence human activity.",
                "They help explain the connection between water and landform.",
                "They show how wind can shape landscapes.",
                "They show how climate influences landscapes."
            ],
            answer: 3,
            explain: "They show how climate influences landscapes."
        },
        {
            id: "y7g-mcq-241", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A landscape shaped by rivers and the land around them?",
            options: ["riverine landscape", "valley", "landscape", "natural element"],
            answer: 0,
            explain: "Riverine landscape is a landscape shaped by rivers and the land around them."
        },
        {
            id: "y7g-mcq-242", topic: "landscapes-features",
            q: "What is the main purpose of riverine landscape in Year 7 Geography?",
            options: [
                "Describe what a place looks like and how it is used",
                "Recognise how rivers influence surrounding places",
                "Identify physical features such as land, water, soil or vegetation",
                "Identify how people use and modify places"
            ],
            answer: 1,
            explain: "Riverine landscape is used to recognise how rivers influence surrounding places."
        },
        {
            id: "y7g-mcq-243", topic: "landscapes-features",
            q: "Which situation would most likely require riverine landscape?",
            options: [
                "Pointing out a river, cliff or patch of bushland",
                "Pointing out roads, houses, fences or farms",
                "Studying a floodplain, meander or riverbank",
                "Identifying a mountain, dune, valley or plateau"
            ],
            answer: 2,
            explain: "Geographers use riverine landscape when they need to recognise how rivers influence surrounding places."
        },
        {
            id: "y7g-mcq-244", topic: "landscapes-features",
            q: "Which statement about riverine landscape is correct?",
            options: [
                "Human elements can strongly change the appearance and use of a landscape.",
                "Landforms are shaped over time by natural processes.",
                "Coastal landscapes often change because of wave action and wind.",
                "Riverine landscapes often include fertile soils and changing channels."
            ],
            answer: 3,
            explain: "Riverine landscapes often include fertile soils and changing channels."
        },
        {
            id: "y7g-mcq-245", topic: "landscapes-features",
            q: "If riverine landscape was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "The role of flowing water in shaping places may be missed",
                "Different physical features may be described inaccurately",
                "Coastal features may be misunderstood or grouped with inland ones",
                "The character of high-relief areas may be explained poorly"
            ],
            answer: 0,
            explain: "If riverine landscape is missing, inaccurate or ignored, the role of flowing water in shaping places may be missed."
        },
        {
            id: "y7g-mcq-246", topic: "landscapes-features",
            q: "A student is studying a floodplain, meander or riverbank. Which feature, skill or concept is most useful?",
            options: ["coastal landscape", "riverine landscape", "mountain landscape", "desert landscape"],
            answer: 1,
            explain: "Riverine landscape is most useful because it helps geographers recognise how rivers influence surrounding places."
        },
        {
            id: "y7g-mcq-247", topic: "landscapes-features",
            q: "Which feature best helps a geographer recognise how rivers influence surrounding places?",
            options: ["mountain landscape", "desert landscape", "riverine landscape", "dune"],
            answer: 2,
            explain: "Riverine landscape helps geographers recognise how rivers influence surrounding places."
        },
        {
            id: "y7g-mcq-248", topic: "landscapes-features",
            q: "Why does riverine landscape matter in geography?",
            options: [
                "They show how climate influences landscapes.",
                "They show how wind can shape landscapes.",
                "They help geographers describe relief and drainage patterns.",
                "They help explain the connection between water and landform."
            ],
            answer: 3,
            explain: "They help explain the connection between water and landform."
        },
        {
            id: "y7g-mcq-249", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A hill or ridge of sand formed and shaped by wind?",
            options: ["dune", "landscape", "natural element", "human element"],
            answer: 0,
            explain: "Dune is a hill or ridge of sand formed and shaped by wind."
        },
        {
            id: "y7g-mcq-250", topic: "landscapes-features",
            q: "What is the main purpose of dune in Year 7 Geography?",
            options: [
                "Identify physical features such as land, water, soil or vegetation",
                "Identify a common coastal or desert landform",
                "Identify how people use and modify places",
                "Classify and describe physical features of the land"
            ],
            answer: 1,
            explain: "Dune is used to identify a common coastal or desert landform."
        },
        {
            id: "y7g-mcq-251", topic: "landscapes-features",
            q: "Which situation would most likely require dune?",
            options: [
                "Pointing out roads, houses, fences or farms",
                "Identifying a mountain, dune, valley or plateau",
                "Observing long ridges of sand behind a beach",
                "Studying beaches, cliffs and dunes near the ocean"
            ],
            answer: 2,
            explain: "Geographers use dune when they need to identify a common coastal or desert landform."
        },
        {
            id: "y7g-mcq-252", topic: "landscapes-features",
            q: "Which statement about dune is correct?",
            options: [
                "Landforms are shaped over time by natural processes.",
                "Coastal landscapes often change because of wave action and wind.",
                "Mountain landscapes often affect settlement, transport and land use.",
                "Dunes can move or change shape over time."
            ],
            answer: 3,
            explain: "Dunes can move or change shape over time."
        },
        {
            id: "y7g-mcq-253", topic: "landscapes-features",
            q: "If dune was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Wind-shaped landforms may be misidentified",
                "Coastal features may be misunderstood or grouped with inland ones",
                "The character of high-relief areas may be explained poorly",
                "Students may assume all deserts are covered only by sand"
            ],
            answer: 0,
            explain: "If dune is missing, inaccurate or ignored, wind-shaped landforms may be misidentified."
        },
        {
            id: "y7g-mcq-254", topic: "landscapes-features",
            q: "A student is observing long ridges of sand behind a beach. Which feature, skill or concept is most useful?",
            options: ["mountain landscape", "dune", "desert landscape", "riverine landscape"],
            answer: 1,
            explain: "Dune is most useful because it helps geographers identify a common coastal or desert landform."
        },
        {
            id: "y7g-mcq-255", topic: "landscapes-features",
            q: "Which feature best helps a geographer identify a common coastal or desert landform?",
            options: ["desert landscape", "riverine landscape", "dune", "valley"],
            answer: 2,
            explain: "Dune helps geographers identify a common coastal or desert landform."
        },
        {
            id: "y7g-mcq-256", topic: "landscapes-features",
            q: "Why does dune matter in geography?",
            options: [
                "They help explain the connection between water and landform.",
                "They help geographers describe relief and drainage patterns.",
                "It is the broad idea geographers use to study places.",
                "They show how wind can shape landscapes."
            ],
            answer: 3,
            explain: "They show how wind can shape landscapes."
        },
        {
            id: "y7g-mcq-257", topic: "landscapes-features",
            q: "Which geographical term best matches this description: A low area between hills or mountains, often formed by rivers?",
            options: ["valley", "natural element", "human element", "landform"],
            answer: 0,
            explain: "Valley is a low area between hills or mountains, often formed by rivers."
        },
        {
            id: "y7g-mcq-258", topic: "landscapes-features",
            q: "What is the main purpose of valley in Year 7 Geography?",
            options: [
                "Identify how people use and modify places",
                "Identify lower land between higher areas",
                "Classify and describe physical features of the land",
                "Identify environments shaped by waves, wind and tides"
            ],
            answer: 1,
            explain: "Valley is used to identify lower land between higher areas."
        },
        {
            id: "y7g-mcq-259", topic: "landscapes-features",
            q: "Which situation would most likely require valley?",
            options: [
                "Identifying a mountain, dune, valley or plateau",
                "Studying beaches, cliffs and dunes near the ocean",
                "Describing a river flowing through a broad valley floor",
                "Describing steep ridges, valleys and cooler conditions in alpine areas"
            ],
            answer: 2,
            explain: "Geographers use valley when they need to identify lower land between higher areas."
        },
        {
            id: "y7g-mcq-260", topic: "landscapes-features",
            q: "Which statement about valley is correct?",
            options: [
                "Coastal landscapes often change because of wave action and wind.",
                "Mountain landscapes often affect settlement, transport and land use.",
                "Desert landscapes can include rocky plains, dunes and dry river channels.",
                "Valleys may be narrow and steep or broad and flat."
            ],
            answer: 3,
            explain: "Valleys may be narrow and steep or broad and flat."
        },
        {
            id: "y7g-mcq-261", topic: "landscapes-features",
            q: "If valley was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "The relationship between high land and low land may be unclear",
                "The character of high-relief areas may be explained poorly",
                "Students may assume all deserts are covered only by sand",
                "The role of flowing water in shaping places may be missed"
            ],
            answer: 0,
            explain: "If valley is missing, inaccurate or ignored, the relationship between high land and low land may be unclear."
        },
        {
            id: "y7g-mcq-262", topic: "landscapes-features",
            q: "A student is describing a river flowing through a broad valley floor. Which feature, skill or concept is most useful?",
            options: ["desert landscape", "valley", "riverine landscape", "dune"],
            answer: 1,
            explain: "Valley is most useful because it helps geographers identify lower land between higher areas."
        },
        {
            id: "y7g-mcq-263", topic: "landscapes-features",
            q: "Which feature best helps a geographer identify lower land between higher areas?",
            options: ["riverine landscape", "dune", "valley", "landscape"],
            answer: 2,
            explain: "Valley helps geographers identify lower land between higher areas."
        },

        /* ----- Additional geomorphic processes ----- */
        {
            id: "y7g-mcq-264", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The breakdown of rock in place?",
            options: ["weathering", "deposition", "river action", "wave action"],
            answer: 0,
            explain: "Weathering is the breakdown of rock in place."
        },
        {
            id: "y7g-mcq-265", topic: "geomorphic-processes",
            q: "What is the main purpose of weathering in Year 7 Geography?",
            options: [
                "Explain how rivers shape valleys, banks and floodplains",
                "Explain how rock is broken down before it is moved",
                "Explain how coasts change over time",
                "Explain how wind shapes landforms such as dunes"
            ],
            answer: 1,
            explain: "Weathering is used to explain how rock is broken down before it is moved."
        },
        {
            id: "y7g-mcq-266", topic: "geomorphic-processes",
            q: "Which situation would most likely require weathering?",
            options: [
                "Seeing waves wear away a cliff and move sand along a beach",
                "Watching sand blow inland and build a dune",
                "Observing a rock crack into smaller pieces on a hillside",
                "Describing tree roots widening cracks in rock"
            ],
            answer: 2,
            explain: "Geographers use weathering when they need to explain how rock is broken down before it is moved."
        },
        {
            id: "y7g-mcq-267", topic: "geomorphic-processes",
            q: "Which statement about weathering is correct?",
            options: [
                "Wind action is especially important where surfaces are dry and exposed.",
                "Physical weathering changes rock size, not rock composition.",
                "Chemical weathering changes the minerals in the rock.",
                "Weathering happens where the rock is found rather than after it has moved."
            ],
            answer: 3,
            explain: "Weathering happens where the rock is found rather than after it has moved."
        },
        {
            id: "y7g-mcq-268", topic: "geomorphic-processes",
            q: "If weathering was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Students may confuse rock breakdown with rock transport",
                "Different forms of weathering may be mixed together",
                "Students may miss that some weathering changes the rock itself",
                "It becomes harder to explain what is being transported or deposited"
            ],
            answer: 0,
            explain: "If weathering is missing, inaccurate or ignored, students may confuse rock breakdown with rock transport."
        },
        {
            id: "y7g-mcq-269", topic: "geomorphic-processes",
            q: "A student is observing a rock crack into smaller pieces on a hillside. Which feature, skill or concept is most useful?",
            options: ["chemical weathering", "weathering", "sediment", "mass movement"],
            answer: 1,
            explain: "Weathering is most useful because it helps geographers explain how rock is broken down before it is moved."
        },
        {
            id: "y7g-mcq-270", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain how rock is broken down before it is moved?",
            options: ["sediment", "mass movement", "weathering", "erosion"],
            answer: 2,
            explain: "Weathering helps geographers explain how rock is broken down before it is moved."
        },
        {
            id: "y7g-mcq-271", topic: "geomorphic-processes",
            q: "Why does weathering matter in geography?",
            options: [
                "It shows that gravity can rapidly reshape a landscape.",
                "It helps explain why landscapes change shape over time.",
                "It creates features such as beaches, floodplains and deltas.",
                "It is a first step in many geomorphic changes."
            ],
            answer: 3,
            explain: "It is a first step in many geomorphic changes."
        },
        {
            id: "y7g-mcq-272", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The wearing away and transport of material by agents such as water, wind or ice?",
            options: ["erosion", "river action", "wave action", "wind action"],
            answer: 0,
            explain: "Erosion is the wearing away and transport of material by agents such as water, wind or ice."
        },
        {
            id: "y7g-mcq-273", topic: "geomorphic-processes",
            q: "What is the main purpose of erosion in Year 7 Geography?",
            options: [
                "Explain how coasts change over time",
                "Explain how material is removed and moved to another place",
                "Explain how wind shapes landforms such as dunes",
                "Explain how rock can break apart because of temperature change, pressure or plant roots"
            ],
            answer: 1,
            explain: "Erosion is used to explain how material is removed and moved to another place."
        },
        {
            id: "y7g-mcq-274", topic: "geomorphic-processes",
            q: "Which situation would most likely require erosion?",
            options: [
                "Watching sand blow inland and build a dune",
                "Describing tree roots widening cracks in rock",
                "Watching a river carry away soil from its bank",
                "Describing acidic rainwater reacting with limestone"
            ],
            answer: 2,
            explain: "Geographers use erosion when they need to explain how material is removed and moved to another place."
        },
        {
            id: "y7g-mcq-275", topic: "geomorphic-processes",
            q: "Which statement about erosion is correct?",
            options: [
                "Physical weathering changes rock size, not rock composition.",
                "Chemical weathering changes the minerals in the rock.",
                "Sediment can vary in size from fine clay to large pebbles.",
                "Erosion both removes material and transports it."
            ],
            answer: 3,
            explain: "Erosion both removes material and transports it."
        },
        {
            id: "y7g-mcq-276", topic: "geomorphic-processes",
            q: "If erosion was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Landform change may be described without explaining movement of material",
                "Students may miss that some weathering changes the rock itself",
                "It becomes harder to explain what is being transported or deposited",
                "Slope change may be explained without naming the cause of the movement"
            ],
            answer: 0,
            explain: "If erosion is missing, inaccurate or ignored, landform change may be described without explaining movement of material."
        },
        {
            id: "y7g-mcq-277", topic: "geomorphic-processes",
            q: "A student is watching a river carry away soil from its bank. Which feature, skill or concept is most useful?",
            options: ["sediment", "erosion", "mass movement", "weathering"],
            answer: 1,
            explain: "Erosion is most useful because it helps geographers explain how material is removed and moved to another place."
        },
        {
            id: "y7g-mcq-278", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain how material is removed and moved to another place?",
            options: ["mass movement", "weathering", "erosion", "deposition"],
            answer: 2,
            explain: "Erosion helps geographers explain how material is removed and moved to another place."
        },
        {
            id: "y7g-mcq-279", topic: "geomorphic-processes",
            q: "Why does erosion matter in geography?",
            options: [
                "It is a first step in many geomorphic changes.",
                "It creates features such as beaches, floodplains and deltas.",
                "It is a major force in shaping many inland landscapes.",
                "It helps explain why landscapes change shape over time."
            ],
            answer: 3,
            explain: "It helps explain why landscapes change shape over time."
        },
        {
            id: "y7g-mcq-280", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The dropping or laying down of sediment after it has been transported?",
            options: ["deposition", "wave action", "wind action", "physical weathering"],
            answer: 0,
            explain: "Deposition is the dropping or laying down of sediment after it has been transported."
        },
        {
            id: "y7g-mcq-281", topic: "geomorphic-processes",
            q: "What is the main purpose of deposition in Year 7 Geography?",
            options: [
                "Explain how wind shapes landforms such as dunes",
                "Explain how new landform material is built up",
                "Explain how rock can break apart because of temperature change, pressure or plant roots",
                "Explain how water and chemicals can alter rock"
            ],
            answer: 1,
            explain: "Deposition is used to explain how new landform material is built up."
        },
        {
            id: "y7g-mcq-282", topic: "geomorphic-processes",
            q: "Which situation would most likely require deposition?",
            options: [
                "Describing tree roots widening cracks in rock",
                "Describing acidic rainwater reacting with limestone",
                "Seeing sand build up on the inside bend of a river",
                "Observing sand, silt and pebbles in a stream"
            ],
            answer: 2,
            explain: "Geographers use deposition when they need to explain how new landform material is built up."
        },
        {
            id: "y7g-mcq-283", topic: "geomorphic-processes",
            q: "Which statement about deposition is correct?",
            options: [
                "Chemical weathering changes the minerals in the rock.",
                "Sediment can vary in size from fine clay to large pebbles.",
                "Mass movement includes landslides, rockfalls and slumps.",
                "Deposition happens when moving water, wind or ice loses energy."
            ],
            answer: 3,
            explain: "Deposition happens when moving water, wind or ice loses energy."
        },
        {
            id: "y7g-mcq-284", topic: "geomorphic-processes",
            q: "If deposition was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Students may overlook where transported material ends up",
                "It becomes harder to explain what is being transported or deposited",
                "Slope change may be explained without naming the cause of the movement",
                "Students may confuse rock breakdown with rock transport"
            ],
            answer: 0,
            explain: "If deposition is missing, inaccurate or ignored, students may overlook where transported material ends up."
        },
        {
            id: "y7g-mcq-285", topic: "geomorphic-processes",
            q: "A student is seeing sand build up on the inside bend of a river. Which feature, skill or concept is most useful?",
            options: ["mass movement", "deposition", "weathering", "erosion"],
            answer: 1,
            explain: "Deposition is most useful because it helps geographers explain how new landform material is built up."
        },
        {
            id: "y7g-mcq-286", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain how new landform material is built up?",
            options: ["weathering", "erosion", "deposition", "river action"],
            answer: 2,
            explain: "Deposition helps geographers explain how new landform material is built up."
        },
        {
            id: "y7g-mcq-287", topic: "geomorphic-processes",
            q: "Why does deposition matter in geography?",
            options: [
                "It helps explain why landscapes change shape over time.",
                "It is a major force in shaping many inland landscapes.",
                "It helps explain why coastal landforms are dynamic.",
                "It creates features such as beaches, floodplains and deltas."
            ],
            answer: 3,
            explain: "It creates features such as beaches, floodplains and deltas."
        },
        {
            id: "y7g-mcq-288", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The work of flowing water in shaping land through erosion, transport and deposition?",
            options: ["river action", "wind action", "physical weathering", "chemical weathering"],
            answer: 0,
            explain: "River action is the work of flowing water in shaping land through erosion, transport and deposition."
        },
        {
            id: "y7g-mcq-289", topic: "geomorphic-processes",
            q: "What is the main purpose of river action in Year 7 Geography?",
            options: [
                "Explain how rock can break apart because of temperature change, pressure or plant roots",
                "Explain how rivers shape valleys, banks and floodplains",
                "Explain how water and chemicals can alter rock",
                "Describe the material carried by geomorphic agents"
            ],
            answer: 1,
            explain: "River action is used to explain how rivers shape valleys, banks and floodplains."
        },
        {
            id: "y7g-mcq-290", topic: "geomorphic-processes",
            q: "Which situation would most likely require river action?",
            options: [
                "Describing acidic rainwater reacting with limestone",
                "Observing sand, silt and pebbles in a stream",
                "Studying a river cutting into its bank and depositing sediment downstream",
                "Describing a landslide after heavy rain"
            ],
            answer: 2,
            explain: "Geographers use river action when they need to explain how rivers shape valleys, banks and floodplains."
        },
        {
            id: "y7g-mcq-291", topic: "geomorphic-processes",
            q: "Which statement about river action is correct?",
            options: [
                "Sediment can vary in size from fine clay to large pebbles.",
                "Mass movement includes landslides, rockfalls and slumps.",
                "Weathering happens where the rock is found rather than after it has moved.",
                "River action can both wear away and build up parts of a landscape."
            ],
            answer: 3,
            explain: "River action can both wear away and build up parts of a landscape."
        },
        {
            id: "y7g-mcq-292", topic: "geomorphic-processes",
            q: "If river action was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "River-shaped landforms may be explained only as static features",
                "Slope change may be explained without naming the cause of the movement",
                "Students may confuse rock breakdown with rock transport",
                "Landform change may be described without explaining movement of material"
            ],
            answer: 0,
            explain: "If river action is missing, inaccurate or ignored, river-shaped landforms may be explained only as static features."
        },
        {
            id: "y7g-mcq-293", topic: "geomorphic-processes",
            q: "A student is studying a river cutting into its bank and depositing sediment downstream. Which feature, skill or concept is most useful?",
            options: ["weathering", "river action", "erosion", "deposition"],
            answer: 1,
            explain: "River action is most useful because it helps geographers explain how rivers shape valleys, banks and floodplains."
        },
        {
            id: "y7g-mcq-294", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain how rivers shape valleys, banks and floodplains?",
            options: ["erosion", "deposition", "river action", "wave action"],
            answer: 2,
            explain: "River action helps geographers explain how rivers shape valleys, banks and floodplains."
        },
        {
            id: "y7g-mcq-295", topic: "geomorphic-processes",
            q: "Why does river action matter in geography?",
            options: [
                "It creates features such as beaches, floodplains and deltas.",
                "It helps explain why coastal landforms are dynamic.",
                "It shows that moving air can shape the Earth's surface.",
                "It is a major force in shaping many inland landscapes."
            ],
            answer: 3,
            explain: "It is a major force in shaping many inland landscapes."
        },
        {
            id: "y7g-mcq-296", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The work of waves in eroding, transporting and depositing material along coasts?",
            options: ["wave action", "physical weathering", "chemical weathering", "sediment"],
            answer: 0,
            explain: "Wave action is the work of waves in eroding, transporting and depositing material along coasts."
        },
        {
            id: "y7g-mcq-297", topic: "geomorphic-processes",
            q: "What is the main purpose of wave action in Year 7 Geography?",
            options: [
                "Explain how water and chemicals can alter rock",
                "Explain how coasts change over time",
                "Describe the material carried by geomorphic agents",
                "Explain why material can suddenly move down a slope"
            ],
            answer: 1,
            explain: "Wave action is used to explain how coasts change over time."
        },
        {
            id: "y7g-mcq-298", topic: "geomorphic-processes",
            q: "Which situation would most likely require wave action?",
            options: [
                "Observing sand, silt and pebbles in a stream",
                "Describing a landslide after heavy rain",
                "Seeing waves wear away a cliff and move sand along a beach",
                "Observing a rock crack into smaller pieces on a hillside"
            ],
            answer: 2,
            explain: "Geographers use wave action when they need to explain how coasts change over time."
        },
        {
            id: "y7g-mcq-299", topic: "geomorphic-processes",
            q: "Which statement about wave action is correct?",
            options: [
                "Mass movement includes landslides, rockfalls and slumps.",
                "Weathering happens where the rock is found rather than after it has moved.",
                "Erosion both removes material and transports it.",
                "Wave action can create cliffs, beaches and other coastal features."
            ],
            answer: 3,
            explain: "Wave action can create cliffs, beaches and other coastal features."
        },
        {
            id: "y7g-mcq-300", topic: "geomorphic-processes",
            q: "If wave action was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Coastal change may be described without naming the process causing it",
                "Students may confuse rock breakdown with rock transport",
                "Landform change may be described without explaining movement of material",
                "Students may overlook where transported material ends up"
            ],
            answer: 0,
            explain: "If wave action is missing, inaccurate or ignored, coastal change may be described without naming the process causing it."
        },
        {
            id: "y7g-mcq-301", topic: "geomorphic-processes",
            q: "A student is seeing waves wear away a cliff and move sand along a beach. Which feature, skill or concept is most useful?",
            options: ["erosion", "wave action", "deposition", "river action"],
            answer: 1,
            explain: "Wave action is most useful because it helps geographers explain how coasts change over time."
        },
        {
            id: "y7g-mcq-302", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain how coasts change over time?",
            options: ["deposition", "river action", "wave action", "wind action"],
            answer: 2,
            explain: "Wave action helps geographers explain how coasts change over time."
        },
        {
            id: "y7g-mcq-303", topic: "geomorphic-processes",
            q: "Why does wave action matter in geography?",
            options: [
                "It is a major force in shaping many inland landscapes.",
                "It shows that moving air can shape the Earth's surface.",
                "It helps explain why large rocks become smaller fragments.",
                "It helps explain why coastal landforms are dynamic."
            ],
            answer: 3,
            explain: "It helps explain why coastal landforms are dynamic."
        },
        {
            id: "y7g-mcq-304", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The movement of material by wind, especially in dry or sandy environments?",
            options: ["wind action", "chemical weathering", "sediment", "mass movement"],
            answer: 0,
            explain: "Wind action is the movement of material by wind, especially in dry or sandy environments."
        },
        {
            id: "y7g-mcq-305", topic: "geomorphic-processes",
            q: "What is the main purpose of wind action in Year 7 Geography?",
            options: [
                "Describe the material carried by geomorphic agents",
                "Explain how wind shapes landforms such as dunes",
                "Explain why material can suddenly move down a slope",
                "Explain how rock is broken down before it is moved"
            ],
            answer: 1,
            explain: "Wind action is used to explain how wind shapes landforms such as dunes."
        },
        {
            id: "y7g-mcq-306", topic: "geomorphic-processes",
            q: "Which situation would most likely require wind action?",
            options: [
                "Describing a landslide after heavy rain",
                "Observing a rock crack into smaller pieces on a hillside",
                "Watching sand blow inland and build a dune",
                "Watching a river carry away soil from its bank"
            ],
            answer: 2,
            explain: "Geographers use wind action when they need to explain how wind shapes landforms such as dunes."
        },
        {
            id: "y7g-mcq-307", topic: "geomorphic-processes",
            q: "Which statement about wind action is correct?",
            options: [
                "Weathering happens where the rock is found rather than after it has moved.",
                "Erosion both removes material and transports it.",
                "Deposition happens when moving water, wind or ice loses energy.",
                "Wind action is especially important where surfaces are dry and exposed."
            ],
            answer: 3,
            explain: "Wind action is especially important where surfaces are dry and exposed."
        },
        {
            id: "y7g-mcq-308", topic: "geomorphic-processes",
            q: "If wind action was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Wind-shaped landforms may be misunderstood",
                "Landform change may be described without explaining movement of material",
                "Students may overlook where transported material ends up",
                "River-shaped landforms may be explained only as static features"
            ],
            answer: 0,
            explain: "If wind action is missing, inaccurate or ignored, wind-shaped landforms may be misunderstood."
        },
        {
            id: "y7g-mcq-309", topic: "geomorphic-processes",
            q: "A student is watching sand blow inland and build a dune. Which feature, skill or concept is most useful?",
            options: ["deposition", "wind action", "river action", "wave action"],
            answer: 1,
            explain: "Wind action is most useful because it helps geographers explain how wind shapes landforms such as dunes."
        },
        {
            id: "y7g-mcq-310", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain how wind shapes landforms such as dunes?",
            options: ["river action", "wave action", "wind action", "physical weathering"],
            answer: 2,
            explain: "Wind action helps geographers explain how wind shapes landforms such as dunes."
        },
        {
            id: "y7g-mcq-311", topic: "geomorphic-processes",
            q: "Why does wind action matter in geography?",
            options: [
                "It helps explain why coastal landforms are dynamic.",
                "It helps explain why large rocks become smaller fragments.",
                "It explains why some rocks dissolve or weaken over time.",
                "It shows that moving air can shape the Earth's surface."
            ],
            answer: 3,
            explain: "It shows that moving air can shape the Earth's surface."
        },
        {
            id: "y7g-mcq-312", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The mechanical breakdown of rock into smaller pieces without changing its chemical makeup?",
            options: ["physical weathering", "sediment", "mass movement", "weathering"],
            answer: 0,
            explain: "Physical weathering is the mechanical breakdown of rock into smaller pieces without changing its chemical makeup."
        },
        {
            id: "y7g-mcq-313", topic: "geomorphic-processes",
            q: "What is the main purpose of physical weathering in Year 7 Geography?",
            options: [
                "Explain why material can suddenly move down a slope",
                "Explain how rock can break apart because of temperature change, pressure or plant roots",
                "Explain how rock is broken down before it is moved",
                "Explain how material is removed and moved to another place"
            ],
            answer: 1,
            explain: "Physical weathering is used to explain how rock can break apart because of temperature change, pressure or plant roots."
        },
        {
            id: "y7g-mcq-314", topic: "geomorphic-processes",
            q: "Which situation would most likely require physical weathering?",
            options: [
                "Observing a rock crack into smaller pieces on a hillside",
                "Watching a river carry away soil from its bank",
                "Describing tree roots widening cracks in rock",
                "Seeing sand build up on the inside bend of a river"
            ],
            answer: 2,
            explain: "Geographers use physical weathering when they need to explain how rock can break apart because of temperature change, pressure or plant roots."
        },
        {
            id: "y7g-mcq-315", topic: "geomorphic-processes",
            q: "Which statement about physical weathering is correct?",
            options: [
                "Erosion both removes material and transports it.",
                "Deposition happens when moving water, wind or ice loses energy.",
                "River action can both wear away and build up parts of a landscape.",
                "Physical weathering changes rock size, not rock composition."
            ],
            answer: 3,
            explain: "Physical weathering changes rock size, not rock composition."
        },
        {
            id: "y7g-mcq-316", topic: "geomorphic-processes",
            q: "If physical weathering was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Different forms of weathering may be mixed together",
                "Students may overlook where transported material ends up",
                "River-shaped landforms may be explained only as static features",
                "Coastal change may be described without naming the process causing it"
            ],
            answer: 0,
            explain: "If physical weathering is missing, inaccurate or ignored, different forms of weathering may be mixed together."
        },
        {
            id: "y7g-mcq-317", topic: "geomorphic-processes",
            q: "A student is describing tree roots widening cracks in rock. Which feature, skill or concept is most useful?",
            options: ["river action", "physical weathering", "wave action", "wind action"],
            answer: 1,
            explain: "Physical weathering is most useful because it helps geographers explain how rock can break apart because of temperature change, pressure or plant roots."
        },
        {
            id: "y7g-mcq-318", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain how rock can break apart because of temperature change, pressure or plant roots?",
            options: ["wave action", "wind action", "physical weathering", "chemical weathering"],
            answer: 2,
            explain: "Physical weathering helps geographers explain how rock can break apart because of temperature change, pressure or plant roots."
        },
        {
            id: "y7g-mcq-319", topic: "geomorphic-processes",
            q: "Why does physical weathering matter in geography?",
            options: [
                "It shows that moving air can shape the Earth's surface.",
                "It explains why some rocks dissolve or weaken over time.",
                "It is the material that geomorphic processes move and deposit.",
                "It helps explain why large rocks become smaller fragments."
            ],
            answer: 3,
            explain: "It helps explain why large rocks become smaller fragments."
        },
        {
            id: "y7g-mcq-320", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The breakdown of rock when minerals change because of chemical reactions?",
            options: ["chemical weathering", "mass movement", "weathering", "erosion"],
            answer: 0,
            explain: "Chemical weathering is the breakdown of rock when minerals change because of chemical reactions."
        },
        {
            id: "y7g-mcq-321", topic: "geomorphic-processes",
            q: "What is the main purpose of chemical weathering in Year 7 Geography?",
            options: [
                "Explain how rock is broken down before it is moved",
                "Explain how water and chemicals can alter rock",
                "Explain how material is removed and moved to another place",
                "Explain how new landform material is built up"
            ],
            answer: 1,
            explain: "Chemical weathering is used to explain how water and chemicals can alter rock."
        },
        {
            id: "y7g-mcq-322", topic: "geomorphic-processes",
            q: "Which situation would most likely require chemical weathering?",
            options: [
                "Watching a river carry away soil from its bank",
                "Seeing sand build up on the inside bend of a river",
                "Describing acidic rainwater reacting with limestone",
                "Studying a river cutting into its bank and depositing sediment downstream"
            ],
            answer: 2,
            explain: "Geographers use chemical weathering when they need to explain how water and chemicals can alter rock."
        },
        {
            id: "y7g-mcq-323", topic: "geomorphic-processes",
            q: "Which statement about chemical weathering is correct?",
            options: [
                "Deposition happens when moving water, wind or ice loses energy.",
                "River action can both wear away and build up parts of a landscape.",
                "Wave action can create cliffs, beaches and other coastal features.",
                "Chemical weathering changes the minerals in the rock."
            ],
            answer: 3,
            explain: "Chemical weathering changes the minerals in the rock."
        },
        {
            id: "y7g-mcq-324", topic: "geomorphic-processes",
            q: "If chemical weathering was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Students may miss that some weathering changes the rock itself",
                "River-shaped landforms may be explained only as static features",
                "Coastal change may be described without naming the process causing it",
                "Wind-shaped landforms may be misunderstood"
            ],
            answer: 0,
            explain: "If chemical weathering is missing, inaccurate or ignored, students may miss that some weathering changes the rock itself."
        },
        {
            id: "y7g-mcq-325", topic: "geomorphic-processes",
            q: "A student is describing acidic rainwater reacting with limestone. Which feature, skill or concept is most useful?",
            options: ["wave action", "chemical weathering", "wind action", "physical weathering"],
            answer: 1,
            explain: "Chemical weathering is most useful because it helps geographers explain how water and chemicals can alter rock."
        },
        {
            id: "y7g-mcq-326", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain how water and chemicals can alter rock?",
            options: ["wind action", "physical weathering", "chemical weathering", "sediment"],
            answer: 2,
            explain: "Chemical weathering helps geographers explain how water and chemicals can alter rock."
        },
        {
            id: "y7g-mcq-327", topic: "geomorphic-processes",
            q: "Why does chemical weathering matter in geography?",
            options: [
                "It helps explain why large rocks become smaller fragments.",
                "It is the material that geomorphic processes move and deposit.",
                "It shows that gravity can rapidly reshape a landscape.",
                "It explains why some rocks dissolve or weaken over time."
            ],
            answer: 3,
            explain: "It explains why some rocks dissolve or weaken over time."
        },
        {
            id: "y7g-mcq-328", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: Small particles of rock, soil or organic matter moved by water, wind or ice?",
            options: ["sediment", "weathering", "erosion", "deposition"],
            answer: 0,
            explain: "Sediment is small particles of rock, soil or organic matter moved by water, wind or ice."
        },
        {
            id: "y7g-mcq-329", topic: "geomorphic-processes",
            q: "What is the main purpose of sediment in Year 7 Geography?",
            options: [
                "Explain how material is removed and moved to another place",
                "Describe the material carried by geomorphic agents",
                "Explain how new landform material is built up",
                "Explain how rivers shape valleys, banks and floodplains"
            ],
            answer: 1,
            explain: "Sediment is used to describe the material carried by geomorphic agents."
        },
        {
            id: "y7g-mcq-330", topic: "geomorphic-processes",
            q: "Which situation would most likely require sediment?",
            options: [
                "Seeing sand build up on the inside bend of a river",
                "Studying a river cutting into its bank and depositing sediment downstream",
                "Observing sand, silt and pebbles in a stream",
                "Seeing waves wear away a cliff and move sand along a beach"
            ],
            answer: 2,
            explain: "Geographers use sediment when they need to describe the material carried by geomorphic agents."
        },
        {
            id: "y7g-mcq-331", topic: "geomorphic-processes",
            q: "Which statement about sediment is correct?",
            options: [
                "River action can both wear away and build up parts of a landscape.",
                "Wave action can create cliffs, beaches and other coastal features.",
                "Wind action is especially important where surfaces are dry and exposed.",
                "Sediment can vary in size from fine clay to large pebbles."
            ],
            answer: 3,
            explain: "Sediment can vary in size from fine clay to large pebbles."
        },
        {
            id: "y7g-mcq-332", topic: "geomorphic-processes",
            q: "If sediment was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "It becomes harder to explain what is being transported or deposited",
                "Coastal change may be described without naming the process causing it",
                "Wind-shaped landforms may be misunderstood",
                "Different forms of weathering may be mixed together"
            ],
            answer: 0,
            explain: "If sediment is missing, inaccurate or ignored, it becomes harder to explain what is being transported or deposited."
        },
        {
            id: "y7g-mcq-333", topic: "geomorphic-processes",
            q: "A student is observing sand, silt and pebbles in a stream. Which feature, skill or concept is most useful?",
            options: ["wind action", "sediment", "physical weathering", "chemical weathering"],
            answer: 1,
            explain: "Sediment is most useful because it helps geographers describe the material carried by geomorphic agents."
        },
        {
            id: "y7g-mcq-334", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer describe the material carried by geomorphic agents?",
            options: ["physical weathering", "chemical weathering", "sediment", "mass movement"],
            answer: 2,
            explain: "Sediment helps geographers describe the material carried by geomorphic agents."
        },
        {
            id: "y7g-mcq-335", topic: "geomorphic-processes",
            q: "Why does sediment matter in geography?",
            options: [
                "It explains why some rocks dissolve or weaken over time.",
                "It shows that gravity can rapidly reshape a landscape.",
                "It is a first step in many geomorphic changes.",
                "It is the material that geomorphic processes move and deposit."
            ],
            answer: 3,
            explain: "It is the material that geomorphic processes move and deposit."
        },
        {
            id: "y7g-mcq-336", topic: "geomorphic-processes",
            q: "Which geographical term best matches this description: The downslope movement of rock or soil caused mainly by gravity?",
            options: ["mass movement", "erosion", "deposition", "river action"],
            answer: 0,
            explain: "Mass movement is the downslope movement of rock or soil caused mainly by gravity."
        },
        {
            id: "y7g-mcq-337", topic: "geomorphic-processes",
            q: "What is the main purpose of mass movement in Year 7 Geography?",
            options: [
                "Explain how new landform material is built up",
                "Explain why material can suddenly move down a slope",
                "Explain how rivers shape valleys, banks and floodplains",
                "Explain how coasts change over time"
            ],
            answer: 1,
            explain: "Mass movement is used to explain why material can suddenly move down a slope."
        },
        {
            id: "y7g-mcq-338", topic: "geomorphic-processes",
            q: "Which situation would most likely require mass movement?",
            options: [
                "Studying a river cutting into its bank and depositing sediment downstream",
                "Seeing waves wear away a cliff and move sand along a beach",
                "Describing a landslide after heavy rain",
                "Watching sand blow inland and build a dune"
            ],
            answer: 2,
            explain: "Geographers use mass movement when they need to explain why material can suddenly move down a slope."
        },
        {
            id: "y7g-mcq-339", topic: "geomorphic-processes",
            q: "Which statement about mass movement is correct?",
            options: [
                "Wave action can create cliffs, beaches and other coastal features.",
                "Wind action is especially important where surfaces are dry and exposed.",
                "Physical weathering changes rock size, not rock composition.",
                "Mass movement includes landslides, rockfalls and slumps."
            ],
            answer: 3,
            explain: "Mass movement includes landslides, rockfalls and slumps."
        },
        {
            id: "y7g-mcq-340", topic: "geomorphic-processes",
            q: "If mass movement was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Slope change may be explained without naming the cause of the movement",
                "Wind-shaped landforms may be misunderstood",
                "Different forms of weathering may be mixed together",
                "Students may miss that some weathering changes the rock itself"
            ],
            answer: 0,
            explain: "If mass movement is missing, inaccurate or ignored, slope change may be explained without naming the cause of the movement."
        },
        {
            id: "y7g-mcq-341", topic: "geomorphic-processes",
            q: "A student is describing a landslide after heavy rain. Which feature, skill or concept is most useful?",
            options: ["physical weathering", "mass movement", "chemical weathering", "sediment"],
            answer: 1,
            explain: "Mass movement is most useful because it helps geographers explain why material can suddenly move down a slope."
        },
        {
            id: "y7g-mcq-342", topic: "geomorphic-processes",
            q: "Which feature best helps a geographer explain why material can suddenly move down a slope?",
            options: ["chemical weathering", "sediment", "mass movement", "weathering"],
            answer: 2,
            explain: "Mass movement helps geographers explain why material can suddenly move down a slope."
        },

        /* ----- Additional water resources ----- */
        {
            id: "y7g-mcq-343", topic: "water-resources",
            q: "Which geographical term best matches this description: Water with very low salt content that can be used by people, plants and animals?",
            options: ["freshwater", "wetland", "dam", "reservoir"],
            answer: 0,
            explain: "Freshwater is water with very low salt content that can be used by people, plants and animals."
        },
        {
            id: "y7g-mcq-344", topic: "water-resources",
            q: "What is the main purpose of freshwater in Year 7 Geography?",
            options: [
                "Explain how people manage water supply and river flow",
                "Identify the types of water most useful for drinking, farming and ecosystems",
                "Identify where water can be stored for later use",
                "Explain one important human use of water"
            ],
            answer: 1,
            explain: "Freshwater is used to identify the types of water most useful for drinking, farming and ecosystems."
        },
        {
            id: "y7g-mcq-345", topic: "water-resources",
            q: "Which situation would most likely require freshwater?",
            options: [
                "Describing a large water storage area supplying a city",
                "Watering crops through channels, pipes or sprinklers",
                "Recognising that rivers and lakes usually provide freshwater rather than saltwater",
                "Testing whether stream water is clean enough for aquatic life"
            ],
            answer: 2,
            explain: "Geographers use freshwater when they need to identify the types of water most useful for drinking, farming and ecosystems."
        },
        {
            id: "y7g-mcq-346", topic: "water-resources",
            q: "Which statement about freshwater is correct?",
            options: [
                "Irrigation increases farming output in dry areas.",
                "Good water quality matters for health, farming and ecosystems.",
                "Drought affects farming, towns, ecosystems and water restrictions.",
                "Only a small share of the world's water is freshwater."
            ],
            answer: 3,
            explain: "Only a small share of the world's water is freshwater."
        },
        {
            id: "y7g-mcq-347", topic: "water-resources",
            q: "If freshwater was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "People may misunderstand which water sources are easiest to use",
                "Pollution or contamination may be overlooked",
                "Water scarcity may be described without naming one major cause",
                "Water use may remain wasteful and unsustainable"
            ],
            answer: 0,
            explain: "If freshwater is missing, inaccurate or ignored, people may misunderstand which water sources are easiest to use."
        },
        {
            id: "y7g-mcq-348", topic: "water-resources",
            q: "A student is recognising that rivers and lakes usually provide freshwater rather than saltwater. Which feature, skill or concept is most useful?",
            options: ["drought", "freshwater", "water conservation", "ecosystem"],
            answer: 1,
            explain: "Freshwater is most useful because it helps geographers identify the types of water most useful for drinking, farming and ecosystems."
        },
        {
            id: "y7g-mcq-349", topic: "water-resources",
            q: "Which feature best helps a geographer identify the types of water most useful for drinking, farming and ecosystems?",
            options: ["water conservation", "ecosystem", "freshwater", "groundwater"],
            answer: 2,
            explain: "Freshwater helps geographers identify the types of water most useful for drinking, farming and ecosystems."
        },
        {
            id: "y7g-mcq-350", topic: "water-resources",
            q: "Why does freshwater matter in geography?",
            options: [
                "It helps students see the environmental value of water resources.",
                "It provides water even when surface water is limited.",
                "They are important for both biodiversity and water quality.",
                "It is one of the most valuable natural resources on Earth."
            ],
            answer: 3,
            explain: "It is one of the most valuable natural resources on Earth."
        },
        {
            id: "y7g-mcq-351", topic: "water-resources",
            q: "Which geographical term best matches this description: Water stored below the ground in soil and rock?",
            options: ["groundwater", "dam", "reservoir", "irrigation"],
            answer: 0,
            explain: "Groundwater is water stored below the ground in soil and rock."
        },
        {
            id: "y7g-mcq-352", topic: "water-resources",
            q: "What is the main purpose of groundwater in Year 7 Geography?",
            options: [
                "Identify where water can be stored for later use",
                "Explain that some water resources are hidden beneath the surface",
                "Explain one important human use of water",
                "Judge whether water is safe for people and ecosystems"
            ],
            answer: 1,
            explain: "Groundwater is used to explain that some water resources are hidden beneath the surface."
        },
        {
            id: "y7g-mcq-353", topic: "water-resources",
            q: "Which situation would most likely require groundwater?",
            options: [
                "Watering crops through channels, pipes or sprinklers",
                "Testing whether stream water is clean enough for aquatic life",
                "Using a bore to access water stored underground",
                "Tracking falling dam levels during a long dry spell"
            ],
            answer: 2,
            explain: "Geographers use groundwater when they need to explain that some water resources are hidden beneath the surface."
        },
        {
            id: "y7g-mcq-354", topic: "water-resources",
            q: "Which statement about groundwater is correct?",
            options: [
                "Good water quality matters for health, farming and ecosystems.",
                "Drought affects farming, towns, ecosystems and water restrictions.",
                "Conservation helps stretch limited supplies further.",
                "Groundwater can supply farms, towns and ecosystems."
            ],
            answer: 3,
            explain: "Groundwater can supply farms, towns and ecosystems."
        },
        {
            id: "y7g-mcq-355", topic: "water-resources",
            q: "If groundwater was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Important underground water stores may be ignored",
                "Water scarcity may be described without naming one major cause",
                "Water use may remain wasteful and unsustainable",
                "Water may be treated as useful only for humans"
            ],
            answer: 0,
            explain: "If groundwater is missing, inaccurate or ignored, important underground water stores may be ignored."
        },
        {
            id: "y7g-mcq-356", topic: "water-resources",
            q: "A student is using a bore to access water stored underground. Which feature, skill or concept is most useful?",
            options: ["water conservation", "groundwater", "ecosystem", "freshwater"],
            answer: 1,
            explain: "Groundwater is most useful because it helps geographers explain that some water resources are hidden beneath the surface."
        },
        {
            id: "y7g-mcq-357", topic: "water-resources",
            q: "Which feature best helps a geographer explain that some water resources are hidden beneath the surface?",
            options: ["ecosystem", "freshwater", "groundwater", "wetland"],
            answer: 2,
            explain: "Groundwater helps geographers explain that some water resources are hidden beneath the surface."
        },
        {
            id: "y7g-mcq-358", topic: "water-resources",
            q: "Why does groundwater matter in geography?",
            options: [
                "It is one of the most valuable natural resources on Earth.",
                "They are important for both biodiversity and water quality.",
                "They are major human modifications of water systems.",
                "It provides water even when surface water is limited."
            ],
            answer: 3,
            explain: "It provides water even when surface water is limited."
        },
        {
            id: "y7g-mcq-359", topic: "water-resources",
            q: "Which geographical term best matches this description: An area of land that is saturated with water for part or all of the year?",
            options: ["wetland", "reservoir", "irrigation", "water quality"],
            answer: 0,
            explain: "Wetland is an area of land that is saturated with water for part or all of the year."
        },
        {
            id: "y7g-mcq-360", topic: "water-resources",
            q: "What is the main purpose of wetland in Year 7 Geography?",
            options: [
                "Explain one important human use of water",
                "Recognise places that store water and support special habitats",
                "Judge whether water is safe for people and ecosystems",
                "Explain why water shortages happen"
            ],
            answer: 1,
            explain: "Wetland is used to recognise places that store water and support special habitats."
        },
        {
            id: "y7g-mcq-361", topic: "water-resources",
            q: "Which situation would most likely require wetland?",
            options: [
                "Testing whether stream water is clean enough for aquatic life",
                "Tracking falling dam levels during a long dry spell",
                "Studying reeds, shallow water and birdlife in a marsh",
                "Fixing leaks, taking shorter showers and watering gardens wisely"
            ],
            answer: 2,
            explain: "Geographers use wetland when they need to recognise places that store water and support special habitats."
        },
        {
            id: "y7g-mcq-362", topic: "water-resources",
            q: "Which statement about wetland is correct?",
            options: [
                "Drought affects farming, towns, ecosystems and water restrictions.",
                "Conservation helps stretch limited supplies further.",
                "Healthy ecosystems depend on reliable, clean water.",
                "Wetlands filter water and provide habitat for many species."
            ],
            answer: 3,
            explain: "Wetlands filter water and provide habitat for many species."
        },
        {
            id: "y7g-mcq-363", topic: "water-resources",
            q: "If wetland was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Valuable watery habitats may be drained or damaged without understanding their role",
                "Water use may remain wasteful and unsustainable",
                "Water may be treated as useful only for humans",
                "People may misunderstand which water sources are easiest to use"
            ],
            answer: 0,
            explain: "If wetland is missing, inaccurate or ignored, valuable watery habitats may be drained or damaged without understanding their role."
        },
        {
            id: "y7g-mcq-364", topic: "water-resources",
            q: "A student is studying reeds, shallow water and birdlife in a marsh. Which feature, skill or concept is most useful?",
            options: ["ecosystem", "wetland", "freshwater", "groundwater"],
            answer: 1,
            explain: "Wetland is most useful because it helps geographers recognise places that store water and support special habitats."
        },
        {
            id: "y7g-mcq-365", topic: "water-resources",
            q: "Which feature best helps a geographer recognise places that store water and support special habitats?",
            options: ["freshwater", "groundwater", "wetland", "dam"],
            answer: 2,
            explain: "Wetland helps geographers recognise places that store water and support special habitats."
        },
        {
            id: "y7g-mcq-366", topic: "water-resources",
            q: "Why does wetland matter in geography?",
            options: [
                "It provides water even when surface water is limited.",
                "They are major human modifications of water systems.",
                "They support a more reliable water supply.",
                "They are important for both biodiversity and water quality."
            ],
            answer: 3,
            explain: "They are important for both biodiversity and water quality."
        },
        {
            id: "y7g-mcq-367", topic: "water-resources",
            q: "Which geographical term best matches this description: A barrier built to store, control or redirect water?",
            options: ["dam", "irrigation", "water quality", "drought"],
            answer: 0,
            explain: "Dam is a barrier built to store, control or redirect water."
        },
        {
            id: "y7g-mcq-368", topic: "water-resources",
            q: "What is the main purpose of dam in Year 7 Geography?",
            options: [
                "Judge whether water is safe for people and ecosystems",
                "Explain how people manage water supply and river flow",
                "Explain why water shortages happen",
                "Suggest ways to reduce pressure on water resources"
            ],
            answer: 1,
            explain: "Dam is used to explain how people manage water supply and river flow."
        },
        {
            id: "y7g-mcq-369", topic: "water-resources",
            q: "Which situation would most likely require dam?",
            options: [
                "Tracking falling dam levels during a long dry spell",
                "Fixing leaks, taking shorter showers and watering gardens wisely",
                "Using a wall across a river to create water storage",
                "Describing plants, fish, insects and birds linked to a river"
            ],
            answer: 2,
            explain: "Geographers use dam when they need to explain how people manage water supply and river flow."
        },
        {
            id: "y7g-mcq-370", topic: "water-resources",
            q: "Which statement about dam is correct?",
            options: [
                "Conservation helps stretch limited supplies further.",
                "Healthy ecosystems depend on reliable, clean water.",
                "Only a small share of the world's water is freshwater.",
                "Dams can help provide water, irrigation and electricity."
            ],
            answer: 3,
            explain: "Dams can help provide water, irrigation and electricity."
        },
        {
            id: "y7g-mcq-371", topic: "water-resources",
            q: "If dam was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Students may not explain how water is captured and controlled",
                "Water may be treated as useful only for humans",
                "People may misunderstand which water sources are easiest to use",
                "Important underground water stores may be ignored"
            ],
            answer: 0,
            explain: "If dam is missing, inaccurate or ignored, students may not explain how water is captured and controlled."
        },
        {
            id: "y7g-mcq-372", topic: "water-resources",
            q: "A student is using a wall across a river to create water storage. Which feature, skill or concept is most useful?",
            options: ["freshwater", "dam", "groundwater", "wetland"],
            answer: 1,
            explain: "Dam is most useful because it helps geographers explain how people manage water supply and river flow."
        },
        {
            id: "y7g-mcq-373", topic: "water-resources",
            q: "Which feature best helps a geographer explain how people manage water supply and river flow?",
            options: ["groundwater", "wetland", "dam", "reservoir"],
            answer: 2,
            explain: "Dam helps geographers explain how people manage water supply and river flow."
        },
        {
            id: "y7g-mcq-374", topic: "water-resources",
            q: "Why does dam matter in geography?",
            options: [
                "They are important for both biodiversity and water quality.",
                "They support a more reliable water supply.",
                "It shows how water supports agriculture and food security.",
                "They are major human modifications of water systems."
            ],
            answer: 3,
            explain: "They are major human modifications of water systems."
        },
        {
            id: "y7g-mcq-375", topic: "water-resources",
            q: "Which geographical term best matches this description: A body of stored water, usually held behind a dam?",
            options: ["reservoir", "water quality", "drought", "water conservation"],
            answer: 0,
            explain: "Reservoir is a body of stored water, usually held behind a dam."
        },
        {
            id: "y7g-mcq-376", topic: "water-resources",
            q: "What is the main purpose of reservoir in Year 7 Geography?",
            options: [
                "Explain why water shortages happen",
                "Identify where water can be stored for later use",
                "Suggest ways to reduce pressure on water resources",
                "Show that water supports habitats as well as people"
            ],
            answer: 1,
            explain: "Reservoir is used to identify where water can be stored for later use."
        },
        {
            id: "y7g-mcq-377", topic: "water-resources",
            q: "Which situation would most likely require reservoir?",
            options: [
                "Fixing leaks, taking shorter showers and watering gardens wisely",
                "Describing plants, fish, insects and birds linked to a river",
                "Describing a large water storage area supplying a city",
                "Recognising that rivers and lakes usually provide freshwater rather than saltwater"
            ],
            answer: 2,
            explain: "Geographers use reservoir when they need to identify where water can be stored for later use."
        },
        {
            id: "y7g-mcq-378", topic: "water-resources",
            q: "Which statement about reservoir is correct?",
            options: [
                "Healthy ecosystems depend on reliable, clean water.",
                "Only a small share of the world's water is freshwater.",
                "Groundwater can supply farms, towns and ecosystems.",
                "Reservoirs help communities manage water through dry periods."
            ],
            answer: 3,
            explain: "Reservoirs help communities manage water through dry periods."
        },
        {
            id: "y7g-mcq-379", topic: "water-resources",
            q: "If reservoir was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "The idea of water storage may remain too vague",
                "People may misunderstand which water sources are easiest to use",
                "Important underground water stores may be ignored",
                "Valuable watery habitats may be drained or damaged without understanding their role"
            ],
            answer: 0,
            explain: "If reservoir is missing, inaccurate or ignored, the idea of water storage may remain too vague."
        },
        {
            id: "y7g-mcq-380", topic: "water-resources",
            q: "A student is describing a large water storage area supplying a city. Which feature, skill or concept is most useful?",
            options: ["groundwater", "reservoir", "wetland", "dam"],
            answer: 1,
            explain: "Reservoir is most useful because it helps geographers identify where water can be stored for later use."
        },
        {
            id: "y7g-mcq-381", topic: "water-resources",
            q: "Which feature best helps a geographer identify where water can be stored for later use?",
            options: ["wetland", "dam", "reservoir", "irrigation"],
            answer: 2,
            explain: "Reservoir helps geographers identify where water can be stored for later use."
        },
        {
            id: "y7g-mcq-382", topic: "water-resources",
            q: "Why does reservoir matter in geography?",
            options: [
                "They are major human modifications of water systems.",
                "It shows how water supports agriculture and food security.",
                "It reminds geographers that water must be both available and clean.",
                "They support a more reliable water supply."
            ],
            answer: 3,
            explain: "They support a more reliable water supply."
        },
        {
            id: "y7g-mcq-383", topic: "water-resources",
            q: "Which geographical term best matches this description: The supply of water to crops or farmland?",
            options: ["irrigation", "drought", "water conservation", "ecosystem"],
            answer: 0,
            explain: "Irrigation is the supply of water to crops or farmland."
        },
        {
            id: "y7g-mcq-384", topic: "water-resources",
            q: "What is the main purpose of irrigation in Year 7 Geography?",
            options: [
                "Suggest ways to reduce pressure on water resources",
                "Explain one important human use of water",
                "Show that water supports habitats as well as people",
                "Identify the types of water most useful for drinking, farming and ecosystems"
            ],
            answer: 1,
            explain: "Irrigation is used to explain one important human use of water."
        },
        {
            id: "y7g-mcq-385", topic: "water-resources",
            q: "Which situation would most likely require irrigation?",
            options: [
                "Describing plants, fish, insects and birds linked to a river",
                "Recognising that rivers and lakes usually provide freshwater rather than saltwater",
                "Watering crops through channels, pipes or sprinklers",
                "Using a bore to access water stored underground"
            ],
            answer: 2,
            explain: "Geographers use irrigation when they need to explain one important human use of water."
        },
        {
            id: "y7g-mcq-386", topic: "water-resources",
            q: "Which statement about irrigation is correct?",
            options: [
                "Only a small share of the world's water is freshwater.",
                "Groundwater can supply farms, towns and ecosystems.",
                "Wetlands filter water and provide habitat for many species.",
                "Irrigation increases farming output in dry areas."
            ],
            answer: 3,
            explain: "Irrigation increases farming output in dry areas."
        },
        {
            id: "y7g-mcq-387", topic: "water-resources",
            q: "If irrigation was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "The link between water and food production may be underexplained",
                "Important underground water stores may be ignored",
                "Valuable watery habitats may be drained or damaged without understanding their role",
                "Students may not explain how water is captured and controlled"
            ],
            answer: 0,
            explain: "If irrigation is missing, inaccurate or ignored, the link between water and food production may be underexplained."
        },
        {
            id: "y7g-mcq-388", topic: "water-resources",
            q: "A student is watering crops through channels, pipes or sprinklers. Which feature, skill or concept is most useful?",
            options: ["wetland", "irrigation", "dam", "reservoir"],
            answer: 1,
            explain: "Irrigation is most useful because it helps geographers explain one important human use of water."
        },
        {
            id: "y7g-mcq-389", topic: "water-resources",
            q: "Which feature best helps a geographer explain one important human use of water?",
            options: ["dam", "reservoir", "irrigation", "water quality"],
            answer: 2,
            explain: "Irrigation helps geographers explain one important human use of water."
        },
        {
            id: "y7g-mcq-390", topic: "water-resources",
            q: "Why does irrigation matter in geography?",
            options: [
                "They support a more reliable water supply.",
                "It reminds geographers that water must be both available and clean.",
                "It shows how climate can place pressure on water resources.",
                "It shows how water supports agriculture and food security."
            ],
            answer: 3,
            explain: "It shows how water supports agriculture and food security."
        },
        {
            id: "y7g-mcq-391", topic: "water-resources",
            q: "Which geographical term best matches this description: The condition of water in terms of cleanliness and suitability for use?",
            options: ["water quality", "water conservation", "ecosystem", "freshwater"],
            answer: 0,
            explain: "Water quality is the condition of water in terms of cleanliness and suitability for use."
        },
        {
            id: "y7g-mcq-392", topic: "water-resources",
            q: "What is the main purpose of water quality in Year 7 Geography?",
            options: [
                "Show that water supports habitats as well as people",
                "Judge whether water is safe for people and ecosystems",
                "Identify the types of water most useful for drinking, farming and ecosystems",
                "Explain that some water resources are hidden beneath the surface"
            ],
            answer: 1,
            explain: "Water quality is used to judge whether water is safe for people and ecosystems."
        },
        {
            id: "y7g-mcq-393", topic: "water-resources",
            q: "Which situation would most likely require water quality?",
            options: [
                "Recognising that rivers and lakes usually provide freshwater rather than saltwater",
                "Using a bore to access water stored underground",
                "Testing whether stream water is clean enough for aquatic life",
                "Studying reeds, shallow water and birdlife in a marsh"
            ],
            answer: 2,
            explain: "Geographers use water quality when they need to judge whether water is safe for people and ecosystems."
        },
        {
            id: "y7g-mcq-394", topic: "water-resources",
            q: "Which statement about water quality is correct?",
            options: [
                "Groundwater can supply farms, towns and ecosystems.",
                "Wetlands filter water and provide habitat for many species.",
                "Dams can help provide water, irrigation and electricity.",
                "Good water quality matters for health, farming and ecosystems."
            ],
            answer: 3,
            explain: "Good water quality matters for health, farming and ecosystems."
        },
        {
            id: "y7g-mcq-395", topic: "water-resources",
            q: "If water quality was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Pollution or contamination may be overlooked",
                "Valuable watery habitats may be drained or damaged without understanding their role",
                "Students may not explain how water is captured and controlled",
                "The idea of water storage may remain too vague"
            ],
            answer: 0,
            explain: "If water quality is missing, inaccurate or ignored, pollution or contamination may be overlooked."
        },
        {
            id: "y7g-mcq-396", topic: "water-resources",
            q: "A student is testing whether stream water is clean enough for aquatic life. Which feature, skill or concept is most useful?",
            options: ["dam", "water quality", "reservoir", "irrigation"],
            answer: 1,
            explain: "Water quality is most useful because it helps geographers judge whether water is safe for people and ecosystems."
        },
        {
            id: "y7g-mcq-397", topic: "water-resources",
            q: "Which feature best helps a geographer judge whether water is safe for people and ecosystems?",
            options: ["reservoir", "irrigation", "water quality", "drought"],
            answer: 2,
            explain: "Water quality helps geographers judge whether water is safe for people and ecosystems."
        },
        {
            id: "y7g-mcq-398", topic: "water-resources",
            q: "Why does water quality matter in geography?",
            options: [
                "It shows how water supports agriculture and food security.",
                "It shows how climate can place pressure on water resources.",
                "It is a practical part of sustainable water management.",
                "It reminds geographers that water must be both available and clean."
            ],
            answer: 3,
            explain: "It reminds geographers that water must be both available and clean."
        },
        {
            id: "y7g-mcq-399", topic: "water-resources",
            q: "Which geographical term best matches this description: A prolonged period of below-average rainfall that reduces water availability?",
            options: ["drought", "ecosystem", "freshwater", "groundwater"],
            answer: 0,
            explain: "Drought is a prolonged period of below-average rainfall that reduces water availability."
        },
        {
            id: "y7g-mcq-400", topic: "water-resources",
            q: "What is the main purpose of drought in Year 7 Geography?",
            options: [
                "Identify the types of water most useful for drinking, farming and ecosystems",
                "Explain why water shortages happen",
                "Explain that some water resources are hidden beneath the surface",
                "Recognise places that store water and support special habitats"
            ],
            answer: 1,
            explain: "Drought is used to explain why water shortages happen."
        },
        {
            id: "y7g-mcq-401", topic: "water-resources",
            q: "Which situation would most likely require drought?",
            options: [
                "Using a bore to access water stored underground",
                "Studying reeds, shallow water and birdlife in a marsh",
                "Tracking falling dam levels during a long dry spell",
                "Using a wall across a river to create water storage"
            ],
            answer: 2,
            explain: "Geographers use drought when they need to explain why water shortages happen."
        },
        {
            id: "y7g-mcq-402", topic: "water-resources",
            q: "Which statement about drought is correct?",
            options: [
                "Wetlands filter water and provide habitat for many species.",
                "Dams can help provide water, irrigation and electricity.",
                "Reservoirs help communities manage water through dry periods.",
                "Drought affects farming, towns, ecosystems and water restrictions."
            ],
            answer: 3,
            explain: "Drought affects farming, towns, ecosystems and water restrictions."
        },
        {
            id: "y7g-mcq-403", topic: "water-resources",
            q: "If drought was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Water scarcity may be described without naming one major cause",
                "Students may not explain how water is captured and controlled",
                "The idea of water storage may remain too vague",
                "The link between water and food production may be underexplained"
            ],
            answer: 0,
            explain: "If drought is missing, inaccurate or ignored, water scarcity may be described without naming one major cause."
        },
        {
            id: "y7g-mcq-404", topic: "water-resources",
            q: "A student is tracking falling dam levels during a long dry spell. Which feature, skill or concept is most useful?",
            options: ["reservoir", "drought", "irrigation", "water quality"],
            answer: 1,
            explain: "Drought is most useful because it helps geographers explain why water shortages happen."
        },
        {
            id: "y7g-mcq-405", topic: "water-resources",
            q: "Which feature best helps a geographer explain why water shortages happen?",
            options: ["irrigation", "water quality", "drought", "water conservation"],
            answer: 2,
            explain: "Drought helps geographers explain why water shortages happen."
        },
        {
            id: "y7g-mcq-406", topic: "water-resources",
            q: "Why does drought matter in geography?",
            options: [
                "It reminds geographers that water must be both available and clean.",
                "It is a practical part of sustainable water management.",
                "It helps students see the environmental value of water resources.",
                "It shows how climate can place pressure on water resources."
            ],
            answer: 3,
            explain: "It shows how climate can place pressure on water resources."
        },
        {
            id: "y7g-mcq-407", topic: "water-resources",
            q: "Which geographical term best matches this description: The careful use and saving of water?",
            options: ["water conservation", "freshwater", "groundwater", "wetland"],
            answer: 0,
            explain: "Water conservation is the careful use and saving of water."
        },
        {
            id: "y7g-mcq-408", topic: "water-resources",
            q: "What is the main purpose of water conservation in Year 7 Geography?",
            options: [
                "Explain that some water resources are hidden beneath the surface",
                "Suggest ways to reduce pressure on water resources",
                "Recognise places that store water and support special habitats",
                "Explain how people manage water supply and river flow"
            ],
            answer: 1,
            explain: "Water conservation is used to suggest ways to reduce pressure on water resources."
        },
        {
            id: "y7g-mcq-409", topic: "water-resources",
            q: "Which situation would most likely require water conservation?",
            options: [
                "Studying reeds, shallow water and birdlife in a marsh",
                "Using a wall across a river to create water storage",
                "Fixing leaks, taking shorter showers and watering gardens wisely",
                "Describing a large water storage area supplying a city"
            ],
            answer: 2,
            explain: "Geographers use water conservation when they need to suggest ways to reduce pressure on water resources."
        },
        {
            id: "y7g-mcq-410", topic: "water-resources",
            q: "Which statement about water conservation is correct?",
            options: [
                "Dams can help provide water, irrigation and electricity.",
                "Reservoirs help communities manage water through dry periods.",
                "Irrigation increases farming output in dry areas.",
                "Conservation helps stretch limited supplies further."
            ],
            answer: 3,
            explain: "Conservation helps stretch limited supplies further."
        },
        {
            id: "y7g-mcq-411", topic: "water-resources",
            q: "If water conservation was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Water use may remain wasteful and unsustainable",
                "The idea of water storage may remain too vague",
                "The link between water and food production may be underexplained",
                "Pollution or contamination may be overlooked"
            ],
            answer: 0,
            explain: "If water conservation is missing, inaccurate or ignored, water use may remain wasteful and unsustainable."
        },
        {
            id: "y7g-mcq-412", topic: "water-resources",
            q: "A student is fixing leaks, taking shorter showers and watering gardens wisely. Which feature, skill or concept is most useful?",
            options: ["irrigation", "water conservation", "water quality", "drought"],
            answer: 1,
            explain: "Water conservation is most useful because it helps geographers suggest ways to reduce pressure on water resources."
        },
        {
            id: "y7g-mcq-413", topic: "water-resources",
            q: "Which feature best helps a geographer suggest ways to reduce pressure on water resources?",
            options: ["water quality", "drought", "water conservation", "ecosystem"],
            answer: 2,
            explain: "Water conservation helps geographers suggest ways to reduce pressure on water resources."
        },
        {
            id: "y7g-mcq-414", topic: "water-resources",
            q: "Why does water conservation matter in geography?",
            options: [
                "It shows how climate can place pressure on water resources.",
                "It helps students see the environmental value of water resources.",
                "It is one of the most valuable natural resources on Earth.",
                "It is a practical part of sustainable water management."
            ],
            answer: 3,
            explain: "It is a practical part of sustainable water management."
        },
        {
            id: "y7g-mcq-415", topic: "water-resources",
            q: "Which geographical term best matches this description: A community of living things interacting with each other and their environment?",
            options: ["ecosystem", "groundwater", "wetland", "dam"],
            answer: 0,
            explain: "Ecosystem is a community of living things interacting with each other and their environment."
        },
        {
            id: "y7g-mcq-416", topic: "water-resources",
            q: "What is the main purpose of ecosystem in Year 7 Geography?",
            options: [
                "Recognise places that store water and support special habitats",
                "Show that water supports habitats as well as people",
                "Explain how people manage water supply and river flow",
                "Identify where water can be stored for later use"
            ],
            answer: 1,
            explain: "Ecosystem is used to show that water supports habitats as well as people."
        },
        {
            id: "y7g-mcq-417", topic: "water-resources",
            q: "Which situation would most likely require ecosystem?",
            options: [
                "Using a wall across a river to create water storage",
                "Describing a large water storage area supplying a city",
                "Describing plants, fish, insects and birds linked to a river",
                "Watering crops through channels, pipes or sprinklers"
            ],
            answer: 2,
            explain: "Geographers use ecosystem when they need to show that water supports habitats as well as people."
        },
        {
            id: "y7g-mcq-418", topic: "water-resources",
            q: "Which statement about ecosystem is correct?",
            options: [
                "Reservoirs help communities manage water through dry periods.",
                "Irrigation increases farming output in dry areas.",
                "Good water quality matters for health, farming and ecosystems.",
                "Healthy ecosystems depend on reliable, clean water."
            ],
            answer: 3,
            explain: "Healthy ecosystems depend on reliable, clean water."
        },
        {
            id: "y7g-mcq-419", topic: "water-resources",
            q: "If ecosystem was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Water may be treated as useful only for humans",
                "The link between water and food production may be underexplained",
                "Pollution or contamination may be overlooked",
                "Water scarcity may be described without naming one major cause"
            ],
            answer: 0,
            explain: "If ecosystem is missing, inaccurate or ignored, water may be treated as useful only for humans."
        },
        {
            id: "y7g-mcq-420", topic: "water-resources",
            q: "A student is describing plants, fish, insects and birds linked to a river. Which feature, skill or concept is most useful?",
            options: ["water quality", "ecosystem", "drought", "water conservation"],
            answer: 1,
            explain: "Ecosystem is most useful because it helps geographers show that water supports habitats as well as people."
        },
        {
            id: "y7g-mcq-421", topic: "water-resources",
            q: "Which feature best helps a geographer show that water supports habitats as well as people?",
            options: ["drought", "water conservation", "ecosystem", "freshwater"],
            answer: 2,
            explain: "Ecosystem helps geographers show that water supports habitats as well as people."
        },

        /* ----- Additional catchments & management ----- */
        {
            id: "y7g-mcq-422", topic: "catchments-management",
            q: "Which geographical term best matches this description: An area of land where water drains to the same creek, river, lake or sea?",
            options: ["catchment", "tributary", "runoff", "infiltration"],
            answer: 0,
            explain: "Catchment is an area of land where water drains to the same creek, river, lake or sea."
        },
        {
            id: "y7g-mcq-423", topic: "catchments-management",
            q: "What is the main purpose of catchment in Year 7 Geography?",
            options: [
                "Explain how water moves downhill after rain",
                "Identify the land area linked to one drainage system",
                "Explain how water enters soil and rock",
                "Explain how water continues to move below the surface"
            ],
            answer: 1,
            explain: "Catchment is used to identify the land area linked to one drainage system."
        },
        {
            id: "y7g-mcq-424", topic: "catchments-management",
            q: "Which situation would most likely require catchment?",
            options: [
                "Seeing rain disappear into a grassy field instead of flowing away",
                "Describing water slowly moving through an aquifer toward a stream",
                "Tracing the hills and streams that all feed one river",
                "Keeping native plants on a riverbank to hold soil in place"
            ],
            answer: 2,
            explain: "Geographers use catchment when they need to identify the land area linked to one drainage system."
        },
        {
            id: "y7g-mcq-425", topic: "catchments-management",
            q: "Which statement about catchment is correct?",
            options: [
                "Groundwater flow can feed springs, wetlands and rivers.",
                "Riparian vegetation helps trap sediment, slow runoff and support habitat.",
                "Stormwater can carry litter, oil, sediment and chemicals.",
                "Catchments connect land use with the health of waterways."
            ],
            answer: 3,
            explain: "Catchments connect land use with the health of waterways."
        },
        {
            id: "y7g-mcq-426", topic: "catchments-management",
            q: "If catchment was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Water movement may be described without linking it to the surrounding land area",
                "Bank erosion and poor water quality may become worse",
                "Urban impacts on waterways may be underestimated",
                "Water quality can decline and ecosystems can be damaged"
            ],
            answer: 0,
            explain: "If catchment is missing, inaccurate or ignored, water movement may be described without linking it to the surrounding land area."
        },
        {
            id: "y7g-mcq-427", topic: "catchments-management",
            q: "A student is tracing the hills and streams that all feed one river. Which feature, skill or concept is most useful?",
            options: ["stormwater", "catchment", "pollution", "stakeholder"],
            answer: 1,
            explain: "Catchment is most useful because it helps geographers identify the land area linked to one drainage system."
        },
        {
            id: "y7g-mcq-428", topic: "catchments-management",
            q: "Which feature best helps a geographer identify the land area linked to one drainage system?",
            options: ["pollution", "stakeholder", "catchment", "watershed"],
            answer: 2,
            explain: "Catchment helps geographers identify the land area linked to one drainage system."
        },
        {
            id: "y7g-mcq-429", topic: "catchments-management",
            q: "Why does catchment matter in geography?",
            options: [
                "It helps explain why catchment management involves different perspectives.",
                "It helps explain why water flow follows relief.",
                "It helps geographers explain drainage networks.",
                "They are a basic unit for understanding water movement and management."
            ],
            answer: 3,
            explain: "They are a basic unit for understanding water movement and management."
        },
        {
            id: "y7g-mcq-430", topic: "catchments-management",
            q: "Which geographical term best matches this description: The high land boundary that separates one catchment from another?",
            options: ["watershed", "runoff", "infiltration", "groundwater flow"],
            answer: 0,
            explain: "Watershed is the high land boundary that separates one catchment from another."
        },
        {
            id: "y7g-mcq-431", topic: "catchments-management",
            q: "What is the main purpose of watershed in Year 7 Geography?",
            options: [
                "Explain how water enters soil and rock",
                "Show where water drains into different systems",
                "Explain how water continues to move below the surface",
                "Explain a key way waterways can be protected"
            ],
            answer: 1,
            explain: "Watershed is used to show where water drains into different systems."
        },
        {
            id: "y7g-mcq-432", topic: "catchments-management",
            q: "Which situation would most likely require watershed?",
            options: [
                "Describing water slowly moving through an aquifer toward a stream",
                "Keeping native plants on a riverbank to hold soil in place",
                "Finding the ridgeline that sends rain to one valley or another",
                "Rain running from a car park into a drain and then into a creek"
            ],
            answer: 2,
            explain: "Geographers use watershed when they need to show where water drains into different systems."
        },
        {
            id: "y7g-mcq-433", topic: "catchments-management",
            q: "Which statement about watershed is correct?",
            options: [
                "Riparian vegetation helps trap sediment, slow runoff and support habitat.",
                "Stormwater can carry litter, oil, sediment and chemicals.",
                "Pollution can come from homes, farms, roads and industry.",
                "A watershed divides drainage basins."
            ],
            answer: 3,
            explain: "A watershed divides drainage basins."
        },
        {
            id: "y7g-mcq-434", topic: "catchments-management",
            q: "If watershed was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "People may not understand why rain on nearby slopes can flow to different rivers",
                "Urban impacts on waterways may be underestimated",
                "Water quality can decline and ecosystems can be damaged",
                "Management decisions may be explained as if everyone has the same priorities"
            ],
            answer: 0,
            explain: "If watershed is missing, inaccurate or ignored, people may not understand why rain on nearby slopes can flow to different rivers."
        },
        {
            id: "y7g-mcq-435", topic: "catchments-management",
            q: "A student is finding the ridgeline that sends rain to one valley or another. Which feature, skill or concept is most useful?",
            options: ["pollution", "watershed", "stakeholder", "catchment"],
            answer: 1,
            explain: "Watershed is most useful because it helps geographers show where water drains into different systems."
        },
        {
            id: "y7g-mcq-436", topic: "catchments-management",
            q: "Which feature best helps a geographer show where water drains into different systems?",
            options: ["stakeholder", "catchment", "watershed", "tributary"],
            answer: 2,
            explain: "Watershed helps geographers show where water drains into different systems."
        },
        {
            id: "y7g-mcq-437", topic: "catchments-management",
            q: "Why does watershed matter in geography?",
            options: [
                "They are a basic unit for understanding water movement and management.",
                "It helps geographers explain drainage networks.",
                "It helps explain how rainfall quickly reaches waterways.",
                "It helps explain why water flow follows relief."
            ],
            answer: 3,
            explain: "It helps explain why water flow follows relief."
        },
        {
            id: "y7g-mcq-438", topic: "catchments-management",
            q: "Which geographical term best matches this description: A smaller stream or river that flows into a larger river?",
            options: ["tributary", "infiltration", "groundwater flow", "riparian vegetation"],
            answer: 0,
            explain: "Tributary is a smaller stream or river that flows into a larger river."
        },
        {
            id: "y7g-mcq-439", topic: "catchments-management",
            q: "What is the main purpose of tributary in Year 7 Geography?",
            options: [
                "Explain how water continues to move below the surface",
                "Describe how smaller waterways connect to larger ones",
                "Explain a key way waterways can be protected",
                "Explain how urban areas quickly send water and pollution into waterways"
            ],
            answer: 1,
            explain: "Tributary is used to describe how smaller waterways connect to larger ones."
        },
        {
            id: "y7g-mcq-440", topic: "catchments-management",
            q: "Which situation would most likely require tributary?",
            options: [
                "Keeping native plants on a riverbank to hold soil in place",
                "Rain running from a car park into a drain and then into a creek",
                "Showing a creek joining the main river downstream",
                "Fertiliser, litter or sewage entering a creek"
            ],
            answer: 2,
            explain: "Geographers use tributary when they need to describe how smaller waterways connect to larger ones."
        },
        {
            id: "y7g-mcq-441", topic: "catchments-management",
            q: "Which statement about tributary is correct?",
            options: [
                "Stormwater can carry litter, oil, sediment and chemicals.",
                "Pollution can come from homes, farms, roads and industry.",
                "Stakeholders often balance social, economic and environmental concerns differently.",
                "Many tributaries combine to feed a main river."
            ],
            answer: 3,
            explain: "Many tributaries combine to feed a main river."
        },
        {
            id: "y7g-mcq-442", topic: "catchments-management",
            q: "If tributary was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "River systems may be described too simply",
                "Water quality can decline and ecosystems can be damaged",
                "Management decisions may be explained as if everyone has the same priorities",
                "Water movement may be described without linking it to the surrounding land area"
            ],
            answer: 0,
            explain: "If tributary is missing, inaccurate or ignored, river systems may be described too simply."
        },
        {
            id: "y7g-mcq-443", topic: "catchments-management",
            q: "A student is showing a creek joining the main river downstream. Which feature, skill or concept is most useful?",
            options: ["stakeholder", "tributary", "catchment", "watershed"],
            answer: 1,
            explain: "Tributary is most useful because it helps geographers describe how smaller waterways connect to larger ones."
        },
        {
            id: "y7g-mcq-444", topic: "catchments-management",
            q: "Which feature best helps a geographer describe how smaller waterways connect to larger ones?",
            options: ["catchment", "watershed", "tributary", "runoff"],
            answer: 2,
            explain: "Tributary helps geographers describe how smaller waterways connect to larger ones."
        },
        {
            id: "y7g-mcq-445", topic: "catchments-management",
            q: "Why does tributary matter in geography?",
            options: [
                "It helps explain why water flow follows relief.",
                "It helps explain how rainfall quickly reaches waterways.",
                "It helps explain why some water is stored underground.",
                "It helps geographers explain drainage networks."
            ],
            answer: 3,
            explain: "It helps geographers explain drainage networks."
        },
        {
            id: "y7g-mcq-446", topic: "catchments-management",
            q: "Which geographical term best matches this description: Water that flows over the land surface instead of soaking into the ground?",
            options: ["runoff", "groundwater flow", "riparian vegetation", "stormwater"],
            answer: 0,
            explain: "Runoff is water that flows over the land surface instead of soaking into the ground."
        },
        {
            id: "y7g-mcq-447", topic: "catchments-management",
            q: "What is the main purpose of runoff in Year 7 Geography?",
            options: [
                "Explain a key way waterways can be protected",
                "Explain how water moves downhill after rain",
                "Explain how urban areas quickly send water and pollution into waterways",
                "Identify one major threat to water quality in a catchment"
            ],
            answer: 1,
            explain: "Runoff is used to explain how water moves downhill after rain."
        },
        {
            id: "y7g-mcq-448", topic: "catchments-management",
            q: "Which situation would most likely require runoff?",
            options: [
                "Rain running from a car park into a drain and then into a creek",
                "Fertiliser, litter or sewage entering a creek",
                "Watching rain flow off a road into a drain and then a creek",
                "Comparing the views of residents, farmers, councils and environmental groups"
            ],
            answer: 2,
            explain: "Geographers use runoff when they need to explain how water moves downhill after rain."
        },
        {
            id: "y7g-mcq-449", topic: "catchments-management",
            q: "Which statement about runoff is correct?",
            options: [
                "Pollution can come from homes, farms, roads and industry.",
                "Stakeholders often balance social, economic and environmental concerns differently.",
                "Catchments connect land use with the health of waterways.",
                "Runoff is often greater on steep slopes or hard surfaces."
            ],
            answer: 3,
            explain: "Runoff is often greater on steep slopes or hard surfaces."
        },
        {
            id: "y7g-mcq-450", topic: "catchments-management",
            q: "If runoff was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Students may skip an important step in the movement of water",
                "Management decisions may be explained as if everyone has the same priorities",
                "Water movement may be described without linking it to the surrounding land area",
                "People may not understand why rain on nearby slopes can flow to different rivers"
            ],
            answer: 0,
            explain: "If runoff is missing, inaccurate or ignored, students may skip an important step in the movement of water."
        },
        {
            id: "y7g-mcq-451", topic: "catchments-management",
            q: "A student is watching rain flow off a road into a drain and then a creek. Which feature, skill or concept is most useful?",
            options: ["catchment", "runoff", "watershed", "tributary"],
            answer: 1,
            explain: "Runoff is most useful because it helps geographers explain how water moves downhill after rain."
        },
        {
            id: "y7g-mcq-452", topic: "catchments-management",
            q: "Which feature best helps a geographer explain how water moves downhill after rain?",
            options: ["watershed", "tributary", "runoff", "infiltration"],
            answer: 2,
            explain: "Runoff helps geographers explain how water moves downhill after rain."
        },
        {
            id: "y7g-mcq-453", topic: "catchments-management",
            q: "Why does runoff matter in geography?",
            options: [
                "It helps geographers explain drainage networks.",
                "It helps explain why some water is stored underground.",
                "It shows that catchments include underground water movement too.",
                "It helps explain how rainfall quickly reaches waterways."
            ],
            answer: 3,
            explain: "It helps explain how rainfall quickly reaches waterways."
        },
        {
            id: "y7g-mcq-454", topic: "catchments-management",
            q: "Which geographical term best matches this description: The process of water soaking into the ground?",
            options: ["infiltration", "riparian vegetation", "stormwater", "pollution"],
            answer: 0,
            explain: "Infiltration is the process of water soaking into the ground."
        },
        {
            id: "y7g-mcq-455", topic: "catchments-management",
            q: "What is the main purpose of infiltration in Year 7 Geography?",
            options: [
                "Explain how urban areas quickly send water and pollution into waterways",
                "Explain how water enters soil and rock",
                "Identify one major threat to water quality in a catchment",
                "Explain why different groups have different perspectives on management"
            ],
            answer: 1,
            explain: "Infiltration is used to explain how water enters soil and rock."
        },
        {
            id: "y7g-mcq-456", topic: "catchments-management",
            q: "Which situation would most likely require infiltration?",
            options: [
                "Fertiliser, litter or sewage entering a creek",
                "Comparing the views of residents, farmers, councils and environmental groups",
                "Seeing rain disappear into a grassy field instead of flowing away",
                "Tracing the hills and streams that all feed one river"
            ],
            answer: 2,
            explain: "Geographers use infiltration when they need to explain how water enters soil and rock."
        },
        {
            id: "y7g-mcq-457", topic: "catchments-management",
            q: "Which statement about infiltration is correct?",
            options: [
                "Stakeholders often balance social, economic and environmental concerns differently.",
                "Catchments connect land use with the health of waterways.",
                "A watershed divides drainage basins.",
                "Infiltration can reduce surface runoff and erosion."
            ],
            answer: 3,
            explain: "Infiltration can reduce surface runoff and erosion."
        },
        {
            id: "y7g-mcq-458", topic: "catchments-management",
            q: "If infiltration was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Water movement below the surface may be ignored",
                "Water movement may be described without linking it to the surrounding land area",
                "People may not understand why rain on nearby slopes can flow to different rivers",
                "River systems may be described too simply"
            ],
            answer: 0,
            explain: "If infiltration is missing, inaccurate or ignored, water movement below the surface may be ignored."
        },
        {
            id: "y7g-mcq-459", topic: "catchments-management",
            q: "A student is seeing rain disappear into a grassy field instead of flowing away. Which feature, skill or concept is most useful?",
            options: ["watershed", "infiltration", "tributary", "runoff"],
            answer: 1,
            explain: "Infiltration is most useful because it helps geographers explain how water enters soil and rock."
        },
        {
            id: "y7g-mcq-460", topic: "catchments-management",
            q: "Which feature best helps a geographer explain how water enters soil and rock?",
            options: ["tributary", "runoff", "infiltration", "groundwater flow"],
            answer: 2,
            explain: "Infiltration helps geographers explain how water enters soil and rock."
        },
        {
            id: "y7g-mcq-461", topic: "catchments-management",
            q: "Why does infiltration matter in geography?",
            options: [
                "It helps explain how rainfall quickly reaches waterways.",
                "It shows that catchments include underground water movement too.",
                "It is an important part of catchment protection.",
                "It helps explain why some water is stored underground."
            ],
            answer: 3,
            explain: "It helps explain why some water is stored underground."
        },
        {
            id: "y7g-mcq-462", topic: "catchments-management",
            q: "Which geographical term best matches this description: The movement of water underground through soil and rock?",
            options: ["groundwater flow", "stormwater", "pollution", "stakeholder"],
            answer: 0,
            explain: "Groundwater flow is the movement of water underground through soil and rock."
        },
        {
            id: "y7g-mcq-463", topic: "catchments-management",
            q: "What is the main purpose of groundwater flow in Year 7 Geography?",
            options: [
                "Identify one major threat to water quality in a catchment",
                "Explain how water continues to move below the surface",
                "Explain why different groups have different perspectives on management",
                "Identify the land area linked to one drainage system"
            ],
            answer: 1,
            explain: "Groundwater flow is used to explain how water continues to move below the surface."
        },
        {
            id: "y7g-mcq-464", topic: "catchments-management",
            q: "Which situation would most likely require groundwater flow?",
            options: [
                "Comparing the views of residents, farmers, councils and environmental groups",
                "Tracing the hills and streams that all feed one river",
                "Describing water slowly moving through an aquifer toward a stream",
                "Finding the ridgeline that sends rain to one valley or another"
            ],
            answer: 2,
            explain: "Geographers use groundwater flow when they need to explain how water continues to move below the surface."
        },
        {
            id: "y7g-mcq-465", topic: "catchments-management",
            q: "Which statement about groundwater flow is correct?",
            options: [
                "Catchments connect land use with the health of waterways.",
                "A watershed divides drainage basins.",
                "Many tributaries combine to feed a main river.",
                "Groundwater flow can feed springs, wetlands and rivers."
            ],
            answer: 3,
            explain: "Groundwater flow can feed springs, wetlands and rivers."
        },
        {
            id: "y7g-mcq-466", topic: "catchments-management",
            q: "If groundwater flow was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Water systems may be seen only as surface features",
                "People may not understand why rain on nearby slopes can flow to different rivers",
                "River systems may be described too simply",
                "Students may skip an important step in the movement of water"
            ],
            answer: 0,
            explain: "If groundwater flow is missing, inaccurate or ignored, water systems may be seen only as surface features."
        },
        {
            id: "y7g-mcq-467", topic: "catchments-management",
            q: "A student is describing water slowly moving through an aquifer toward a stream. Which feature, skill or concept is most useful?",
            options: ["tributary", "groundwater flow", "runoff", "infiltration"],
            answer: 1,
            explain: "Groundwater flow is most useful because it helps geographers explain how water continues to move below the surface."
        },
        {
            id: "y7g-mcq-468", topic: "catchments-management",
            q: "Which feature best helps a geographer explain how water continues to move below the surface?",
            options: ["runoff", "infiltration", "groundwater flow", "riparian vegetation"],
            answer: 2,
            explain: "Groundwater flow helps geographers explain how water continues to move below the surface."
        },
        {
            id: "y7g-mcq-469", topic: "catchments-management",
            q: "Why does groundwater flow matter in geography?",
            options: [
                "It helps explain why some water is stored underground.",
                "It is an important part of catchment protection.",
                "It links towns and cities to catchment health.",
                "It shows that catchments include underground water movement too."
            ],
            answer: 3,
            explain: "It shows that catchments include underground water movement too."
        },
        {
            id: "y7g-mcq-470", topic: "catchments-management",
            q: "Which geographical term best matches this description: Plants growing along the banks of rivers, creeks and other waterways?",
            options: ["riparian vegetation", "pollution", "stakeholder", "catchment"],
            answer: 0,
            explain: "Riparian vegetation is plants growing along the banks of rivers, creeks and other waterways."
        },
        {
            id: "y7g-mcq-471", topic: "catchments-management",
            q: "What is the main purpose of riparian vegetation in Year 7 Geography?",
            options: [
                "Explain why different groups have different perspectives on management",
                "Explain a key way waterways can be protected",
                "Identify the land area linked to one drainage system",
                "Show where water drains into different systems"
            ],
            answer: 1,
            explain: "Riparian vegetation is used to explain a key way waterways can be protected."
        },
        {
            id: "y7g-mcq-472", topic: "catchments-management",
            q: "Which situation would most likely require riparian vegetation?",
            options: [
                "Tracing the hills and streams that all feed one river",
                "Finding the ridgeline that sends rain to one valley or another",
                "Keeping native plants on a riverbank to hold soil in place",
                "Showing a creek joining the main river downstream"
            ],
            answer: 2,
            explain: "Geographers use riparian vegetation when they need to explain a key way waterways can be protected."
        },
        {
            id: "y7g-mcq-473", topic: "catchments-management",
            q: "Which statement about riparian vegetation is correct?",
            options: [
                "A watershed divides drainage basins.",
                "Many tributaries combine to feed a main river.",
                "Runoff is often greater on steep slopes or hard surfaces.",
                "Riparian vegetation helps trap sediment, slow runoff and support habitat."
            ],
            answer: 3,
            explain: "Riparian vegetation helps trap sediment, slow runoff and support habitat."
        },
        {
            id: "y7g-mcq-474", topic: "catchments-management",
            q: "If riparian vegetation was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Bank erosion and poor water quality may become worse",
                "River systems may be described too simply",
                "Students may skip an important step in the movement of water",
                "Water movement below the surface may be ignored"
            ],
            answer: 0,
            explain: "If riparian vegetation is missing, inaccurate or ignored, bank erosion and poor water quality may become worse."
        },
        {
            id: "y7g-mcq-475", topic: "catchments-management",
            q: "A student is keeping native plants on a riverbank to hold soil in place. Which feature, skill or concept is most useful?",
            options: ["runoff", "riparian vegetation", "infiltration", "groundwater flow"],
            answer: 1,
            explain: "Riparian vegetation is most useful because it helps geographers explain a key way waterways can be protected."
        },
        {
            id: "y7g-mcq-476", topic: "catchments-management",
            q: "Which feature best helps a geographer explain a key way waterways can be protected?",
            options: ["infiltration", "groundwater flow", "riparian vegetation", "stormwater"],
            answer: 2,
            explain: "Riparian vegetation helps geographers explain a key way waterways can be protected."
        },
        {
            id: "y7g-mcq-477", topic: "catchments-management",
            q: "Why does riparian vegetation matter in geography?",
            options: [
                "It shows that catchments include underground water movement too.",
                "It links towns and cities to catchment health.",
                "It is a major reason catchments need protection.",
                "It is an important part of catchment protection."
            ],
            answer: 3,
            explain: "It is an important part of catchment protection."
        },
        {
            id: "y7g-mcq-478", topic: "catchments-management",
            q: "Which geographical term best matches this description: Rainwater that drains from roofs, roads and other hard surfaces?",
            options: ["stormwater", "stakeholder", "catchment", "watershed"],
            answer: 0,
            explain: "Stormwater is rainwater that drains from roofs, roads and other hard surfaces."
        },
        {
            id: "y7g-mcq-479", topic: "catchments-management",
            q: "What is the main purpose of stormwater in Year 7 Geography?",
            options: [
                "Identify the land area linked to one drainage system",
                "Explain how urban areas quickly send water and pollution into waterways",
                "Show where water drains into different systems",
                "Describe how smaller waterways connect to larger ones"
            ],
            answer: 1,
            explain: "Stormwater is used to explain how urban areas quickly send water and pollution into waterways."
        },
        {
            id: "y7g-mcq-480", topic: "catchments-management",
            q: "Which situation would most likely require stormwater?",
            options: [
                "Finding the ridgeline that sends rain to one valley or another",
                "Showing a creek joining the main river downstream",
                "Rain running from a car park into a drain and then into a creek",
                "Watching rain flow off a road into a drain and then a creek"
            ],
            answer: 2,
            explain: "Geographers use stormwater when they need to explain how urban areas quickly send water and pollution into waterways."
        },
        {
            id: "y7g-mcq-481", topic: "catchments-management",
            q: "Which statement about stormwater is correct?",
            options: [
                "Many tributaries combine to feed a main river.",
                "Runoff is often greater on steep slopes or hard surfaces.",
                "Infiltration can reduce surface runoff and erosion.",
                "Stormwater can carry litter, oil, sediment and chemicals."
            ],
            answer: 3,
            explain: "Stormwater can carry litter, oil, sediment and chemicals."
        },
        {
            id: "y7g-mcq-482", topic: "catchments-management",
            q: "If stormwater was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Urban impacts on waterways may be underestimated",
                "Students may skip an important step in the movement of water",
                "Water movement below the surface may be ignored",
                "Water systems may be seen only as surface features"
            ],
            answer: 0,
            explain: "If stormwater is missing, inaccurate or ignored, urban impacts on waterways may be underestimated."
        },
        {
            id: "y7g-mcq-483", topic: "catchments-management",
            q: "A student is rain running from a car park into a drain and then into a creek. Which feature, skill or concept is most useful?",
            options: ["infiltration", "stormwater", "groundwater flow", "riparian vegetation"],
            answer: 1,
            explain: "Stormwater is most useful because it helps geographers explain how urban areas quickly send water and pollution into waterways."
        },
        {
            id: "y7g-mcq-484", topic: "catchments-management",
            q: "Which feature best helps a geographer explain how urban areas quickly send water and pollution into waterways?",
            options: ["groundwater flow", "riparian vegetation", "stormwater", "pollution"],
            answer: 2,
            explain: "Stormwater helps geographers explain how urban areas quickly send water and pollution into waterways."
        },
        {
            id: "y7g-mcq-485", topic: "catchments-management",
            q: "Why does stormwater matter in geography?",
            options: [
                "It is an important part of catchment protection.",
                "It is a major reason catchments need protection.",
                "It helps explain why catchment management involves different perspectives.",
                "It links towns and cities to catchment health."
            ],
            answer: 3,
            explain: "It links towns and cities to catchment health."
        },
        {
            id: "y7g-mcq-486", topic: "catchments-management",
            q: "Which geographical term best matches this description: Harmful substances entering land or water?",
            options: ["pollution", "catchment", "watershed", "tributary"],
            answer: 0,
            explain: "Pollution is harmful substances entering land or water."
        },
        {
            id: "y7g-mcq-487", topic: "catchments-management",
            q: "What is the main purpose of pollution in Year 7 Geography?",
            options: [
                "Show where water drains into different systems",
                "Identify one major threat to water quality in a catchment",
                "Describe how smaller waterways connect to larger ones",
                "Explain how water moves downhill after rain"
            ],
            answer: 1,
            explain: "Pollution is used to identify one major threat to water quality in a catchment."
        },
        {
            id: "y7g-mcq-488", topic: "catchments-management",
            q: "Which situation would most likely require pollution?",
            options: [
                "Showing a creek joining the main river downstream",
                "Watching rain flow off a road into a drain and then a creek",
                "Fertiliser, litter or sewage entering a creek",
                "Seeing rain disappear into a grassy field instead of flowing away"
            ],
            answer: 2,
            explain: "Geographers use pollution when they need to identify one major threat to water quality in a catchment."
        },
        {
            id: "y7g-mcq-489", topic: "catchments-management",
            q: "Which statement about pollution is correct?",
            options: [
                "Runoff is often greater on steep slopes or hard surfaces.",
                "Infiltration can reduce surface runoff and erosion.",
                "Groundwater flow can feed springs, wetlands and rivers.",
                "Pollution can come from homes, farms, roads and industry."
            ],
            answer: 3,
            explain: "Pollution can come from homes, farms, roads and industry."
        },
        {
            id: "y7g-mcq-490", topic: "catchments-management",
            q: "If pollution was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Water quality can decline and ecosystems can be damaged",
                "Water movement below the surface may be ignored",
                "Water systems may be seen only as surface features",
                "Bank erosion and poor water quality may become worse"
            ],
            answer: 0,
            explain: "If pollution is missing, inaccurate or ignored, water quality can decline and ecosystems can be damaged."
        },
        {
            id: "y7g-mcq-491", topic: "catchments-management",
            q: "A student is fertiliser, litter or sewage entering a creek. Which feature, skill or concept is most useful?",
            options: ["groundwater flow", "pollution", "riparian vegetation", "stormwater"],
            answer: 1,
            explain: "Pollution is most useful because it helps geographers identify one major threat to water quality in a catchment."
        },
        {
            id: "y7g-mcq-492", topic: "catchments-management",
            q: "Which feature best helps a geographer identify one major threat to water quality in a catchment?",
            options: ["riparian vegetation", "stormwater", "pollution", "stakeholder"],
            answer: 2,
            explain: "Pollution helps geographers identify one major threat to water quality in a catchment."
        },
        {
            id: "y7g-mcq-493", topic: "catchments-management",
            q: "Why does pollution matter in geography?",
            options: [
                "It links towns and cities to catchment health.",
                "It helps explain why catchment management involves different perspectives.",
                "They are a basic unit for understanding water movement and management.",
                "It is a major reason catchments need protection."
            ],
            answer: 3,
            explain: "It is a major reason catchments need protection."
        },
        {
            id: "y7g-mcq-494", topic: "catchments-management",
            q: "Which geographical term best matches this description: A person or group with an interest in how a place or resource is managed?",
            options: ["stakeholder", "watershed", "tributary", "runoff"],
            answer: 0,
            explain: "Stakeholder is a person or group with an interest in how a place or resource is managed."
        },
        {
            id: "y7g-mcq-495", topic: "catchments-management",
            q: "What is the main purpose of stakeholder in Year 7 Geography?",
            options: [
                "Describe how smaller waterways connect to larger ones",
                "Explain why different groups have different perspectives on management",
                "Explain how water moves downhill after rain",
                "Explain how water enters soil and rock"
            ],
            answer: 1,
            explain: "Stakeholder is used to explain why different groups have different perspectives on management."
        },
        {
            id: "y7g-mcq-496", topic: "catchments-management",
            q: "Which situation would most likely require stakeholder?",
            options: [
                "Watching rain flow off a road into a drain and then a creek",
                "Seeing rain disappear into a grassy field instead of flowing away",
                "Comparing the views of residents, farmers, councils and environmental groups",
                "Describing water slowly moving through an aquifer toward a stream"
            ],
            answer: 2,
            explain: "Geographers use stakeholder when they need to explain why different groups have different perspectives on management."
        },
        {
            id: "y7g-mcq-497", topic: "catchments-management",
            q: "Which statement about stakeholder is correct?",
            options: [
                "Infiltration can reduce surface runoff and erosion.",
                "Groundwater flow can feed springs, wetlands and rivers.",
                "Riparian vegetation helps trap sediment, slow runoff and support habitat.",
                "Stakeholders often balance social, economic and environmental concerns differently."
            ],
            answer: 3,
            explain: "Stakeholders often balance social, economic and environmental concerns differently."
        },
        {
            id: "y7g-mcq-498", topic: "catchments-management",
            q: "If stakeholder was missing, inaccurate or ignored, what would be the most likely result?",
            options: [
                "Management decisions may be explained as if everyone has the same priorities",
                "Water systems may be seen only as surface features",
                "Bank erosion and poor water quality may become worse",
                "Urban impacts on waterways may be underestimated"
            ],
            answer: 0,
            explain: "If stakeholder is missing, inaccurate or ignored, management decisions may be explained as if everyone has the same priorities."
        },
        {
            id: "y7g-mcq-499", topic: "catchments-management",
            q: "A student is comparing the views of residents, farmers, councils and environmental groups. Which feature, skill or concept is most useful?",
            options: ["riparian vegetation", "stakeholder", "stormwater", "pollution"],
            answer: 1,
            explain: "Stakeholder is most useful because it helps geographers explain why different groups have different perspectives on management."
        },
        {
            id: "y7g-mcq-500", topic: "catchments-management",
            q: "Which feature best helps a geographer explain why different groups have different perspectives on management?",
            options: ["stormwater", "pollution", "stakeholder", "catchment"],
            answer: 2,
            explain: "Stakeholder helps geographers explain why different groups have different perspectives on management."
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
        },
        {
            id: "y7g-sa-13", topic: "mapping-skills", marks: 4,
            q: "Define border and explain why it is useful in geography.",
            sample: "Border is the line that frames the mapped area. It is useful because it helps geographers separate the mapped area from the rest of the page. It improves clarity by setting clear limits around the mapped information.",
            marks: 4
        },
        {
            id: "y7g-sa-14", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of border being used and explain what it helps a geographer understand.",
            sample: "An example of border being used is drawing a neat line around the mapped section so readers know where the map begins and ends. This helps a geographer separate the mapped area from the rest of the page. A border keeps the map organised and clearly contained.",
            marks: 4
        },
        {
            id: "y7g-sa-15", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if border is missing, inaccurate or ignored.",
            sample: "If border is missing, inaccurate or ignored, readers may be less clear about the limits of the mapped area. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-16", topic: "mapping-skills", marks: 4,
            q: "Define orientation and explain why it is useful in geography.",
            sample: "Orientation is the feature that shows which way north is and how the map is aligned. It is useful because it helps geographers work out directions correctly. It helps readers compare the map with the real world.",
            marks: 4
        },
        {
            id: "y7g-sa-17", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of orientation being used and explain what it helps a geographer understand.",
            sample: "An example of orientation being used is checking whether the playground is east or west of the oval. This helps a geographer work out directions correctly. Orientation is often shown with a north arrow or compass rose.",
            marks: 4
        },
        {
            id: "y7g-sa-18", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if orientation is missing, inaccurate or ignored.",
            sample: "If orientation is missing, inaccurate or ignored, direction can be misread or confused. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-19", topic: "mapping-skills", marks: 4,
            q: "Define legend and explain why it is useful in geography.",
            sample: "Legend is the key that explains symbols, colours and patterns on a map. It is useful because it helps geographers interpret symbols and colours accurately. It makes a map readable and easy to interpret.",
            marks: 4
        },
        {
            id: "y7g-sa-20", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of legend being used and explain what it helps a geographer understand.",
            sample: "An example of legend being used is working out that a blue line stands for a river and a black line stands for a road. This helps a geographer interpret symbols and colours accurately. A legend links each symbol or colour to the feature it represents.",
            marks: 4
        },
        {
            id: "y7g-sa-21", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if legend is missing, inaccurate or ignored.",
            sample: "If legend is missing, inaccurate or ignored, symbols and colours may be misunderstood. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-22", topic: "mapping-skills", marks: 4,
            q: "Define title and explain why it is useful in geography.",
            sample: "Title is the heading that tells the reader what the map shows. It is useful because it helps geographers identify the topic, place or purpose of the map. It gives the reader immediate context.",
            marks: 4
        },
        {
            id: "y7g-sa-23", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of title being used and explain what it helps a geographer understand.",
            sample: "An example of title being used is choosing between a map titled Rainfall in NSW and a map titled Population Density in NSW. This helps a geographer identify the topic, place or purpose of the map. A good title is specific and relevant to the information shown.",
            marks: 4
        },
        {
            id: "y7g-sa-24", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if title is missing, inaccurate or ignored.",
            sample: "If title is missing, inaccurate or ignored, readers may not know what the map is about. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-25", topic: "mapping-skills", marks: 4,
            q: "Define scale and explain why it is useful in geography.",
            sample: "Scale is the relationship between a distance on the map and the real distance on the ground. It is useful because it helps geographers calculate real-world distance from map measurements. It connects map measurements to real places.",
            marks: 4
        },
        {
            id: "y7g-sa-26", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of scale being used and explain what it helps a geographer understand.",
            sample: "An example of scale being used is estimating how far a town is from a river by measuring the map. This helps a geographer calculate real-world distance from map measurements. Scale can be shown as a ratio, statement or line scale.",
            marks: 4
        },
        {
            id: "y7g-sa-27", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if scale is missing, inaccurate or ignored.",
            sample: "If scale is missing, inaccurate or ignored, distance estimates become unreliable. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-28", topic: "mapping-skills", marks: 4,
            q: "Define source and explain why it is useful in geography.",
            sample: "Source is the note that tells where the information on a map came from. It is useful because it helps geographers check where the information originated and how reliable it is. It supports accuracy and reliability.",
            marks: 4
        },
        {
            id: "y7g-sa-29", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of source being used and explain what it helps a geographer understand.",
            sample: "An example of source being used is looking to see whether the map uses data from an atlas, a satellite image or a government website. This helps a geographer check where the information originated and how reliable it is. A source improves the credibility of geographical information.",
            marks: 4
        },
        {
            id: "y7g-sa-30", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if source is missing, inaccurate or ignored.",
            sample: "If source is missing, inaccurate or ignored, people cannot easily judge whether the information is trustworthy or current. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-31", topic: "mapping-skills", marks: 4,
            q: "Define symbol and explain why it is useful in geography.",
            sample: "Symbol is a sign or picture used to represent a real feature on a map. It is useful because it helps geographers show information quickly without long labels. It saves space and communicates information efficiently.",
            marks: 4
        },
        {
            id: "y7g-sa-32", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of symbol being used and explain what it helps a geographer understand.",
            sample: "An example of symbol being used is using a small aeroplane sign to show an airport. This helps a geographer show information quickly without long labels. Symbols should be simple, consistent and easy to recognise.",
            marks: 4
        },
        {
            id: "y7g-sa-33", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if symbol is missing, inaccurate or ignored.",
            sample: "If symbol is missing, inaccurate or ignored, the map may become cluttered or hard to read. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-34", topic: "mapping-skills", marks: 4,
            q: "Define aerial photograph and explain why it is useful in geography.",
            sample: "Aerial photograph is an image of a place taken from above. It is useful because it helps geographers view spatial patterns and features from a top-down perspective. It helps geographers compare real features with mapped information.",
            marks: 4
        },
        {
            id: "y7g-sa-35", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of aerial photograph being used and explain what it helps a geographer understand.",
            sample: "An example of aerial photograph being used is looking from above to compare roads, rivers and buildings. This helps a geographer view spatial patterns and features from a top-down perspective. An aerial photograph shows the actual appearance of a place rather than drawn symbols.",
            marks: 4
        },
        {
            id: "y7g-sa-36", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if aerial photograph is missing, inaccurate or ignored.",
            sample: "If aerial photograph is missing, inaccurate or ignored, some patterns in the landscape may be harder to recognise. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-37", topic: "mapping-skills", marks: 4,
            q: "Define field sketch and explain why it is useful in geography.",
            sample: "Field sketch is a labelled drawing made to record important features seen during fieldwork. It is useful because it helps geographers record observations clearly from ground level. It is a useful way to record fieldwork evidence.",
            marks: 4
        },
        {
            id: "y7g-sa-38", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of field sketch being used and explain what it helps a geographer understand.",
            sample: "An example of field sketch being used is drawing the riverbank and labelling vegetation, erosion and nearby buildings. This helps a geographer record observations clearly from ground level. Field sketches simplify the view and highlight the most important features.",
            marks: 4
        },
        {
            id: "y7g-sa-39", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if field sketch is missing, inaccurate or ignored.",
            sample: "If field sketch is missing, inaccurate or ignored, important observations may be forgotten or poorly recorded. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-40", topic: "mapping-skills", marks: 4,
            q: "Define grid reference and explain why it is useful in geography.",
            sample: "Grid reference is a location system that uses rows, columns or coordinates to find places accurately. It is useful because it helps geographers locate places precisely on a map. It improves the accuracy of locating features.",
            marks: 4
        },
        {
            id: "y7g-sa-41", topic: "mapping-skills", marks: 4,
            q: "Give ONE example of grid reference being used and explain what it helps a geographer understand.",
            sample: "An example of grid reference being used is finding the campsite in square B4 on a simple map. This helps a geographer locate places precisely on a map. Grid references are more precise than broad compass directions alone.",
            marks: 4
        },
        {
            id: "y7g-sa-42", topic: "mapping-skills", marks: 5,
            q: "Explain what could go wrong if grid reference is missing, inaccurate or ignored.",
            sample: "If grid reference is missing, inaccurate or ignored, places are harder to find accurately. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-43", topic: "mapping-skills", marks: 5,
            q: "Compare border and orientation. Explain how both help geographers create and read maps clearly and accurately.",
            sample: "Border is the line that frames the mapped area and helps geographers separate the mapped area from the rest of the page. Orientation is the feature that shows which way north is and how the map is aligned and helps geographers work out directions correctly. Together they help students create and read maps clearly and accurately.",
            marks: 5
        },
        {
            id: "y7g-sa-44", topic: "mapping-skills", marks: 5,
            q: "Compare legend and title. Explain how both help geographers create and read maps clearly and accurately.",
            sample: "Legend is the key that explains symbols, colours and patterns on a map and helps geographers interpret symbols and colours accurately. Title is the heading that tells the reader what the map shows and helps geographers identify the topic, place or purpose of the map. Together they help students create and read maps clearly and accurately.",
            marks: 5
        },
        {
            id: "y7g-sa-45", topic: "direction-scale", marks: 4,
            q: "Define cardinal direction and explain why it is useful in geography.",
            sample: "Cardinal direction is one of the four main compass directions: north, south, east or west. It is useful because it helps geographers describe broad direction simply. They give a simple and reliable way to communicate direction.",
            marks: 4
        },
        {
            id: "y7g-sa-46", topic: "direction-scale", marks: 4,
            q: "Give ONE example of cardinal direction being used and explain what it helps a geographer understand.",
            sample: "An example of cardinal direction being used is stating that the library is north of the hall. This helps a geographer describe broad direction simply. Cardinal directions are the starting point for reading map direction.",
            marks: 4
        },
        {
            id: "y7g-sa-47", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if cardinal direction is missing, inaccurate or ignored.",
            sample: "If cardinal direction is missing, inaccurate or ignored, a location may be described less clearly. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-48", topic: "direction-scale", marks: 4,
            q: "Define intercardinal direction and explain why it is useful in geography.",
            sample: "Intercardinal direction is a direction halfway between two cardinal directions, such as north-east. It is useful because it helps geographers describe direction more precisely than only using north, south, east or west. They make location descriptions more precise.",
            marks: 4
        },
        {
            id: "y7g-sa-49", topic: "direction-scale", marks: 4,
            q: "Give ONE example of intercardinal direction being used and explain what it helps a geographer understand.",
            sample: "An example of intercardinal direction being used is stating that the sports field is south-east of the classroom block. This helps a geographer describe direction more precisely than only using north, south, east or west. Intercardinal directions improve accuracy without needing an exact angle.",
            marks: 4
        },
        {
            id: "y7g-sa-50", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if intercardinal direction is missing, inaccurate or ignored.",
            sample: "If intercardinal direction is missing, inaccurate or ignored, direction may be too general to be useful. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-51", topic: "direction-scale", marks: 4,
            q: "Define bearing and explain why it is useful in geography.",
            sample: "Bearing is an exact direction measured clockwise from north and written as a three-figure angle. It is useful because it helps geographers state direction very accurately. They are useful when precise navigation is needed.",
            marks: 4
        },
        {
            id: "y7g-sa-52", topic: "direction-scale", marks: 4,
            q: "Give ONE example of bearing being used and explain what it helps a geographer understand.",
            sample: "An example of bearing being used is recording that a lookout lies on a bearing of 135 degrees. This helps a geographer state direction very accurately. Bearings are always measured clockwise from north.",
            marks: 4
        },
        {
            id: "y7g-sa-53", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if bearing is missing, inaccurate or ignored.",
            sample: "If bearing is missing, inaccurate or ignored, route directions may be less exact. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-54", topic: "direction-scale", marks: 4,
            q: "Define compass rose and explain why it is useful in geography.",
            sample: "Compass rose is a map diagram that shows north and the other main directions. It is useful because it helps geographers show direction on a map clearly. It supports accurate directional reading.",
            marks: 4
        },
        {
            id: "y7g-sa-55", topic: "direction-scale", marks: 4,
            q: "Give ONE example of compass rose being used and explain what it helps a geographer understand.",
            sample: "An example of compass rose being used is using the compass rose to check whether a walking track heads west. This helps a geographer show direction on a map clearly. A compass rose often includes both cardinal and intercardinal directions.",
            marks: 4
        },
        {
            id: "y7g-sa-56", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if compass rose is missing, inaccurate or ignored.",
            sample: "If compass rose is missing, inaccurate or ignored, readers may find it harder to interpret direction on the map. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-57", topic: "direction-scale", marks: 4,
            q: "Define linear scale and explain why it is useful in geography.",
            sample: "Linear scale is a bar scale that shows how map distance matches real distance. It is useful because it helps geographers measure and convert distance directly from a map. It makes distance measurement practical and visual.",
            marks: 4
        },
        {
            id: "y7g-sa-58", topic: "direction-scale", marks: 4,
            q: "Give ONE example of linear scale being used and explain what it helps a geographer understand.",
            sample: "An example of linear scale being used is placing a ruler against the scale bar to estimate how far two towns are apart. This helps a geographer measure and convert distance directly from a map. A linear scale stays useful even if a map is enlarged or reduced.",
            marks: 4
        },
        {
            id: "y7g-sa-59", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if linear scale is missing, inaccurate or ignored.",
            sample: "If linear scale is missing, inaccurate or ignored, distance calculations may be more difficult. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-60", topic: "direction-scale", marks: 4,
            q: "Define ratio scale and explain why it is useful in geography.",
            sample: "Ratio scale is a scale written as a ratio such as 1:50000. It is useful because it helps geographers show the relationship between map units and real-world units. It allows accurate numerical distance calculations.",
            marks: 4
        },
        {
            id: "y7g-sa-61", topic: "direction-scale", marks: 4,
            q: "Give ONE example of ratio scale being used and explain what it helps a geographer understand.",
            sample: "An example of ratio scale being used is using 1 centimetre on the map to calculate 500 metres on the ground. This helps a geographer show the relationship between map units and real-world units. A ratio scale compares one unit on the map to the same units in reality.",
            marks: 4
        },
        {
            id: "y7g-sa-62", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if ratio scale is missing, inaccurate or ignored.",
            sample: "If ratio scale is missing, inaccurate or ignored, the relationship between map units and actual distance may be unclear. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-63", topic: "direction-scale", marks: 4,
            q: "Define straight-line distance and explain why it is useful in geography.",
            sample: "Straight-line distance is the direct distance between two places measured in a single line. It is useful because it helps geographers estimate the shortest distance between places. It provides a quick estimate of how far apart places are.",
            marks: 4
        },
        {
            id: "y7g-sa-64", topic: "direction-scale", marks: 4,
            q: "Give ONE example of straight-line distance being used and explain what it helps a geographer understand.",
            sample: "An example of straight-line distance being used is measuring from the school to the station with a ruler. This helps a geographer estimate the shortest distance between places. Straight-line distance ignores bends, obstacles and road curves.",
            marks: 4
        },
        {
            id: "y7g-sa-65", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if straight-line distance is missing, inaccurate or ignored.",
            sample: "If straight-line distance is missing, inaccurate or ignored, distance may be confused with the actual travel path. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-66", topic: "direction-scale", marks: 4,
            q: "Define route distance and explain why it is useful in geography.",
            sample: "Route distance is the distance travelled along roads, paths or other actual routes. It is useful because it helps geographers calculate how far someone really needs to travel. It is more useful for planning real journeys.",
            marks: 4
        },
        {
            id: "y7g-sa-67", topic: "direction-scale", marks: 4,
            q: "Give ONE example of route distance being used and explain what it helps a geographer understand.",
            sample: "An example of route distance being used is following the curves of a road between two towns. This helps a geographer calculate how far someone really needs to travel. Route distance is usually longer than straight-line distance.",
            marks: 4
        },
        {
            id: "y7g-sa-68", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if route distance is missing, inaccurate or ignored.",
            sample: "If route distance is missing, inaccurate or ignored, travel planning may be unrealistic. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-69", topic: "direction-scale", marks: 4,
            q: "Define large-scale map and explain why it is useful in geography.",
            sample: "Large-scale map is a map that shows a small area in greater detail. It is useful because it helps geographers show detailed information about a smaller place. They are helpful for close-up planning and fieldwork.",
            marks: 4
        },
        {
            id: "y7g-sa-70", topic: "direction-scale", marks: 4,
            q: "Give ONE example of large-scale map being used and explain what it helps a geographer understand.",
            sample: "An example of large-scale map being used is using a school grounds map to see buildings, paths and gates. This helps a geographer show detailed information about a smaller place. Large-scale maps trade broad coverage for greater detail.",
            marks: 4
        },
        {
            id: "y7g-sa-71", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if large-scale map is missing, inaccurate or ignored.",
            sample: "If large-scale map is missing, inaccurate or ignored, important local detail may be missed. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-72", topic: "direction-scale", marks: 4,
            q: "Define small-scale map and explain why it is useful in geography.",
            sample: "Small-scale map is a map that shows a large area with less detail. It is useful because it helps geographers show a wider region or larger pattern. They are useful for seeing broad spatial patterns.",
            marks: 4
        },
        {
            id: "y7g-sa-73", topic: "direction-scale", marks: 4,
            q: "Give ONE example of small-scale map being used and explain what it helps a geographer understand.",
            sample: "An example of small-scale map being used is using a map of Australia to compare states and capital cities. This helps a geographer show a wider region or larger pattern. Small-scale maps cover more area but show fewer local features.",
            marks: 4
        },
        {
            id: "y7g-sa-74", topic: "direction-scale", marks: 5,
            q: "Explain what could go wrong if small-scale map is missing, inaccurate or ignored.",
            sample: "If small-scale map is missing, inaccurate or ignored, people may expect detail that the map cannot provide. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-75", topic: "direction-scale", marks: 5,
            q: "Compare cardinal direction and intercardinal direction. Explain how both help geographers measure and describe location and movement accurately.",
            sample: "Cardinal direction is one of the four main compass directions: north, south, east or west and helps geographers describe broad direction simply. Intercardinal direction is a direction halfway between two cardinal directions, such as north-east and helps geographers describe direction more precisely than only using north, south, east or west. Together they help students measure and describe location and movement accurately.",
            marks: 5
        },
        {
            id: "y7g-sa-77", topic: "landscapes-features", marks: 4,
            q: "Define landscape and explain why it is useful in geography.",
            sample: "Landscape is the visible features of an area, including natural and human elements. It is useful because it helps geographers describe what a place looks like and how it is used. It is the broad idea geographers use to study places.",
            marks: 4
        },
        {
            id: "y7g-sa-78", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of landscape being used and explain what it helps a geographer understand.",
            sample: "An example of landscape being used is observing hills, trees, roads and houses together as part of one place. This helps a geographer describe what a place looks like and how it is used. Landscapes include both physical features and human influences.",
            marks: 4
        },
        {
            id: "y7g-sa-79", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if landscape is missing, inaccurate or ignored.",
            sample: "If landscape is missing, inaccurate or ignored, a place may be described too narrowly or incompletely. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-80", topic: "landscapes-features", marks: 4,
            q: "Define natural element and explain why it is useful in geography.",
            sample: "Natural element is a feature in a landscape that is not built by people. It is useful because it helps geographers identify physical features such as land, water, soil or vegetation. They help explain the physical environment of a landscape.",
            marks: 4
        },
        {
            id: "y7g-sa-81", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of natural element being used and explain what it helps a geographer understand.",
            sample: "An example of natural element being used is pointing out a river, cliff or patch of bushland. This helps a geographer identify physical features such as land, water, soil or vegetation. Natural elements shape the character of a place.",
            marks: 4
        },
        {
            id: "y7g-sa-82", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if natural element is missing, inaccurate or ignored.",
            sample: "If natural element is missing, inaccurate or ignored, people may confuse natural features with built features. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-83", topic: "landscapes-features", marks: 4,
            q: "Define human element and explain why it is useful in geography.",
            sample: "Human element is a feature in a landscape that has been built or changed by people. It is useful because it helps geographers identify how people use and modify places. They show how people interact with places.",
            marks: 4
        },
        {
            id: "y7g-sa-84", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of human element being used and explain what it helps a geographer understand.",
            sample: "An example of human element being used is pointing out roads, houses, fences or farms. This helps a geographer identify how people use and modify places. Human elements can strongly change the appearance and use of a landscape.",
            marks: 4
        },
        {
            id: "y7g-sa-85", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if human element is missing, inaccurate or ignored.",
            sample: "If human element is missing, inaccurate or ignored, the role of people in shaping places may be overlooked. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-86", topic: "landscapes-features", marks: 4,
            q: "Define landform and explain why it is useful in geography.",
            sample: "Landform is a natural feature of the Earth's surface. It is useful because it helps geographers classify and describe physical features of the land. They are key features in the study of landscapes.",
            marks: 4
        },
        {
            id: "y7g-sa-87", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of landform being used and explain what it helps a geographer understand.",
            sample: "An example of landform being used is identifying a mountain, dune, valley or plateau. This helps a geographer classify and describe physical features of the land. Landforms are shaped over time by natural processes.",
            marks: 4
        },
        {
            id: "y7g-sa-88", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if landform is missing, inaccurate or ignored.",
            sample: "If landform is missing, inaccurate or ignored, different physical features may be described inaccurately. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-89", topic: "landscapes-features", marks: 4,
            q: "Define coastal landscape and explain why it is useful in geography.",
            sample: "Coastal landscape is a landscape found where the land meets the sea. It is useful because it helps geographers identify environments shaped by waves, wind and tides. They help students understand the interaction between land and sea.",
            marks: 4
        },
        {
            id: "y7g-sa-90", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of coastal landscape being used and explain what it helps a geographer understand.",
            sample: "An example of coastal landscape being used is studying beaches, cliffs and dunes near the ocean. This helps a geographer identify environments shaped by waves, wind and tides. Coastal landscapes often change because of wave action and wind.",
            marks: 4
        },
        {
            id: "y7g-sa-91", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if coastal landscape is missing, inaccurate or ignored.",
            sample: "If coastal landscape is missing, inaccurate or ignored, coastal features may be misunderstood or grouped with inland ones. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-92", topic: "landscapes-features", marks: 4,
            q: "Define mountain landscape and explain why it is useful in geography.",
            sample: "Mountain landscape is a landscape with high relief, steep slopes and elevated land. It is useful because it helps geographers recognise highland environments and how they differ from flatter areas. They show how landform can influence human activity.",
            marks: 4
        },
        {
            id: "y7g-sa-93", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of mountain landscape being used and explain what it helps a geographer understand.",
            sample: "An example of mountain landscape being used is describing steep ridges, valleys and cooler conditions in alpine areas. This helps a geographer recognise highland environments and how they differ from flatter areas. Mountain landscapes often affect settlement, transport and land use.",
            marks: 4
        },
        {
            id: "y7g-sa-94", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if mountain landscape is missing, inaccurate or ignored.",
            sample: "If mountain landscape is missing, inaccurate or ignored, the character of high-relief areas may be explained poorly. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-95", topic: "landscapes-features", marks: 4,
            q: "Define desert landscape and explain why it is useful in geography.",
            sample: "Desert landscape is a dry landscape with low rainfall and sparse vegetation. It is useful because it helps geographers recognise environments shaped by aridity and limited water. They show how climate influences landscapes.",
            marks: 4
        },
        {
            id: "y7g-sa-96", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of desert landscape being used and explain what it helps a geographer understand.",
            sample: "An example of desert landscape being used is describing sand, rocky surfaces and scattered shrubs. This helps a geographer recognise environments shaped by aridity and limited water. Desert landscapes can include rocky plains, dunes and dry river channels.",
            marks: 4
        },
        {
            id: "y7g-sa-97", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if desert landscape is missing, inaccurate or ignored.",
            sample: "If desert landscape is missing, inaccurate or ignored, students may assume all deserts are covered only by sand. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-98", topic: "landscapes-features", marks: 4,
            q: "Define riverine landscape and explain why it is useful in geography.",
            sample: "Riverine landscape is a landscape shaped by rivers and the land around them. It is useful because it helps geographers recognise how rivers influence surrounding places. They help explain the connection between water and landform.",
            marks: 4
        },
        {
            id: "y7g-sa-99", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of riverine landscape being used and explain what it helps a geographer understand.",
            sample: "An example of riverine landscape being used is studying a floodplain, meander or riverbank. This helps a geographer recognise how rivers influence surrounding places. Riverine landscapes often include fertile soils and changing channels.",
            marks: 4
        },
        {
            id: "y7g-sa-100", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if riverine landscape is missing, inaccurate or ignored.",
            sample: "If riverine landscape is missing, inaccurate or ignored, the role of flowing water in shaping places may be missed. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-101", topic: "landscapes-features", marks: 4,
            q: "Define dune and explain why it is useful in geography.",
            sample: "Dune is a hill or ridge of sand formed and shaped by wind. It is useful because it helps geographers identify a common coastal or desert landform. They show how wind can shape landscapes.",
            marks: 4
        },
        {
            id: "y7g-sa-102", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of dune being used and explain what it helps a geographer understand.",
            sample: "An example of dune being used is observing long ridges of sand behind a beach. This helps a geographer identify a common coastal or desert landform. Dunes can move or change shape over time.",
            marks: 4
        },
        {
            id: "y7g-sa-103", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if dune is missing, inaccurate or ignored.",
            sample: "If dune is missing, inaccurate or ignored, wind-shaped landforms may be misidentified. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-104", topic: "landscapes-features", marks: 4,
            q: "Define valley and explain why it is useful in geography.",
            sample: "Valley is a low area between hills or mountains, often formed by rivers. It is useful because it helps geographers identify lower land between higher areas. They help geographers describe relief and drainage patterns.",
            marks: 4
        },
        {
            id: "y7g-sa-105", topic: "landscapes-features", marks: 4,
            q: "Give ONE example of valley being used and explain what it helps a geographer understand.",
            sample: "An example of valley being used is describing a river flowing through a broad valley floor. This helps a geographer identify lower land between higher areas. Valleys may be narrow and steep or broad and flat.",
            marks: 4
        },
        {
            id: "y7g-sa-106", topic: "landscapes-features", marks: 5,
            q: "Explain what could go wrong if valley is missing, inaccurate or ignored.",
            sample: "If valley is missing, inaccurate or ignored, the relationship between high land and low land may be unclear. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-107", topic: "landscapes-features", marks: 5,
            q: "Compare landscape and natural element. Explain how both help geographers describe places, landforms and human use of places.",
            sample: "Landscape is the visible features of an area, including natural and human elements and helps geographers describe what a place looks like and how it is used. Natural element is a feature in a landscape that is not built by people and helps geographers identify physical features such as land, water, soil or vegetation. Together they help students describe places, landforms and human use of places.",
            marks: 5
        },
        {
            id: "y7g-sa-109", topic: "geomorphic-processes", marks: 4,
            q: "Define weathering and explain why it is useful in geography.",
            sample: "Weathering is the breakdown of rock in place. It is useful because it helps geographers explain how rock is broken down before it is moved. It is a first step in many geomorphic changes.",
            marks: 4
        },
        {
            id: "y7g-sa-110", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of weathering being used and explain what it helps a geographer understand.",
            sample: "An example of weathering being used is observing a rock crack into smaller pieces on a hillside. This helps a geographer explain how rock is broken down before it is moved. Weathering happens where the rock is found rather than after it has moved.",
            marks: 4
        },
        {
            id: "y7g-sa-111", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if weathering is missing, inaccurate or ignored.",
            sample: "If weathering is missing, inaccurate or ignored, students may confuse rock breakdown with rock transport. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-112", topic: "geomorphic-processes", marks: 4,
            q: "Define erosion and explain why it is useful in geography.",
            sample: "Erosion is the wearing away and transport of material by agents such as water, wind or ice. It is useful because it helps geographers explain how material is removed and moved to another place. It helps explain why landscapes change shape over time.",
            marks: 4
        },
        {
            id: "y7g-sa-113", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of erosion being used and explain what it helps a geographer understand.",
            sample: "An example of erosion being used is watching a river carry away soil from its bank. This helps a geographer explain how material is removed and moved to another place. Erosion both removes material and transports it.",
            marks: 4
        },
        {
            id: "y7g-sa-114", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if erosion is missing, inaccurate or ignored.",
            sample: "If erosion is missing, inaccurate or ignored, landform change may be described without explaining movement of material. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-115", topic: "geomorphic-processes", marks: 4,
            q: "Define deposition and explain why it is useful in geography.",
            sample: "Deposition is the dropping or laying down of sediment after it has been transported. It is useful because it helps geographers explain how new landform material is built up. It creates features such as beaches, floodplains and deltas.",
            marks: 4
        },
        {
            id: "y7g-sa-116", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of deposition being used and explain what it helps a geographer understand.",
            sample: "An example of deposition being used is seeing sand build up on the inside bend of a river. This helps a geographer explain how new landform material is built up. Deposition happens when moving water, wind or ice loses energy.",
            marks: 4
        },
        {
            id: "y7g-sa-117", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if deposition is missing, inaccurate or ignored.",
            sample: "If deposition is missing, inaccurate or ignored, students may overlook where transported material ends up. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-118", topic: "geomorphic-processes", marks: 4,
            q: "Define river action and explain why it is useful in geography.",
            sample: "River action is the work of flowing water in shaping land through erosion, transport and deposition. It is useful because it helps geographers explain how rivers shape valleys, banks and floodplains. It is a major force in shaping many inland landscapes.",
            marks: 4
        },
        {
            id: "y7g-sa-119", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of river action being used and explain what it helps a geographer understand.",
            sample: "An example of river action being used is studying a river cutting into its bank and depositing sediment downstream. This helps a geographer explain how rivers shape valleys, banks and floodplains. River action can both wear away and build up parts of a landscape.",
            marks: 4
        },
        {
            id: "y7g-sa-120", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if river action is missing, inaccurate or ignored.",
            sample: "If river action is missing, inaccurate or ignored, river-shaped landforms may be explained only as static features. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-121", topic: "geomorphic-processes", marks: 4,
            q: "Define wave action and explain why it is useful in geography.",
            sample: "Wave action is the work of waves in eroding, transporting and depositing material along coasts. It is useful because it helps geographers explain how coasts change over time. It helps explain why coastal landforms are dynamic.",
            marks: 4
        },
        {
            id: "y7g-sa-122", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of wave action being used and explain what it helps a geographer understand.",
            sample: "An example of wave action being used is seeing waves wear away a cliff and move sand along a beach. This helps a geographer explain how coasts change over time. Wave action can create cliffs, beaches and other coastal features.",
            marks: 4
        },
        {
            id: "y7g-sa-123", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if wave action is missing, inaccurate or ignored.",
            sample: "If wave action is missing, inaccurate or ignored, coastal change may be described without naming the process causing it. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-124", topic: "geomorphic-processes", marks: 4,
            q: "Define wind action and explain why it is useful in geography.",
            sample: "Wind action is the movement of material by wind, especially in dry or sandy environments. It is useful because it helps geographers explain how wind shapes landforms such as dunes. It shows that moving air can shape the Earth's surface.",
            marks: 4
        },
        {
            id: "y7g-sa-125", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of wind action being used and explain what it helps a geographer understand.",
            sample: "An example of wind action being used is watching sand blow inland and build a dune. This helps a geographer explain how wind shapes landforms such as dunes. Wind action is especially important where surfaces are dry and exposed.",
            marks: 4
        },
        {
            id: "y7g-sa-126", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if wind action is missing, inaccurate or ignored.",
            sample: "If wind action is missing, inaccurate or ignored, wind-shaped landforms may be misunderstood. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-127", topic: "geomorphic-processes", marks: 4,
            q: "Define physical weathering and explain why it is useful in geography.",
            sample: "Physical weathering is the mechanical breakdown of rock into smaller pieces without changing its chemical makeup. It is useful because it helps geographers explain how rock can break apart because of temperature change, pressure or plant roots. It helps explain why large rocks become smaller fragments.",
            marks: 4
        },
        {
            id: "y7g-sa-128", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of physical weathering being used and explain what it helps a geographer understand.",
            sample: "An example of physical weathering being used is describing tree roots widening cracks in rock. This helps a geographer explain how rock can break apart because of temperature change, pressure or plant roots. Physical weathering changes rock size, not rock composition.",
            marks: 4
        },
        {
            id: "y7g-sa-129", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if physical weathering is missing, inaccurate or ignored.",
            sample: "If physical weathering is missing, inaccurate or ignored, different forms of weathering may be mixed together. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-130", topic: "geomorphic-processes", marks: 4,
            q: "Define chemical weathering and explain why it is useful in geography.",
            sample: "Chemical weathering is the breakdown of rock when minerals change because of chemical reactions. It is useful because it helps geographers explain how water and chemicals can alter rock. It explains why some rocks dissolve or weaken over time.",
            marks: 4
        },
        {
            id: "y7g-sa-131", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of chemical weathering being used and explain what it helps a geographer understand.",
            sample: "An example of chemical weathering being used is describing acidic rainwater reacting with limestone. This helps a geographer explain how water and chemicals can alter rock. Chemical weathering changes the minerals in the rock.",
            marks: 4
        },
        {
            id: "y7g-sa-132", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if chemical weathering is missing, inaccurate or ignored.",
            sample: "If chemical weathering is missing, inaccurate or ignored, students may miss that some weathering changes the rock itself. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-133", topic: "geomorphic-processes", marks: 4,
            q: "Define sediment and explain why it is useful in geography.",
            sample: "Sediment is small particles of rock, soil or organic matter moved by water, wind or ice. It is useful because it helps geographers describe the material carried by geomorphic agents. It is the material that geomorphic processes move and deposit.",
            marks: 4
        },
        {
            id: "y7g-sa-134", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of sediment being used and explain what it helps a geographer understand.",
            sample: "An example of sediment being used is observing sand, silt and pebbles in a stream. This helps a geographer describe the material carried by geomorphic agents. Sediment can vary in size from fine clay to large pebbles.",
            marks: 4
        },
        {
            id: "y7g-sa-135", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if sediment is missing, inaccurate or ignored.",
            sample: "If sediment is missing, inaccurate or ignored, it becomes harder to explain what is being transported or deposited. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-136", topic: "geomorphic-processes", marks: 4,
            q: "Define mass movement and explain why it is useful in geography.",
            sample: "Mass movement is the downslope movement of rock or soil caused mainly by gravity. It is useful because it helps geographers explain why material can suddenly move down a slope. It shows that gravity can rapidly reshape a landscape.",
            marks: 4
        },
        {
            id: "y7g-sa-137", topic: "geomorphic-processes", marks: 4,
            q: "Give ONE example of mass movement being used and explain what it helps a geographer understand.",
            sample: "An example of mass movement being used is describing a landslide after heavy rain. This helps a geographer explain why material can suddenly move down a slope. Mass movement includes landslides, rockfalls and slumps.",
            marks: 4
        },
        {
            id: "y7g-sa-138", topic: "geomorphic-processes", marks: 5,
            q: "Explain what could go wrong if mass movement is missing, inaccurate or ignored.",
            sample: "If mass movement is missing, inaccurate or ignored, slope change may be explained without naming the cause of the movement. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-139", topic: "geomorphic-processes", marks: 5,
            q: "Compare weathering and erosion. Explain how both help geographers explain landscape change and the formation of landforms.",
            sample: "Weathering is the breakdown of rock in place and helps geographers explain how rock is broken down before it is moved. Erosion is the wearing away and transport of material by agents such as water, wind or ice and helps geographers explain how material is removed and moved to another place. Together they help students explain landscape change and the formation of landforms.",
            marks: 5
        },
        {
            id: "y7g-sa-141", topic: "water-resources", marks: 4,
            q: "Define freshwater and explain why it is useful in geography.",
            sample: "Freshwater is water with very low salt content that can be used by people, plants and animals. It is useful because it helps geographers identify the types of water most useful for drinking, farming and ecosystems. It is one of the most valuable natural resources on Earth.",
            marks: 4
        },
        {
            id: "y7g-sa-142", topic: "water-resources", marks: 4,
            q: "Give ONE example of freshwater being used and explain what it helps a geographer understand.",
            sample: "An example of freshwater being used is recognising that rivers and lakes usually provide freshwater rather than saltwater. This helps a geographer identify the types of water most useful for drinking, farming and ecosystems. Only a small share of the world's water is freshwater.",
            marks: 4
        },
        {
            id: "y7g-sa-143", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if freshwater is missing, inaccurate or ignored.",
            sample: "If freshwater is missing, inaccurate or ignored, people may misunderstand which water sources are easiest to use. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-144", topic: "water-resources", marks: 4,
            q: "Define groundwater and explain why it is useful in geography.",
            sample: "Groundwater is water stored below the ground in soil and rock. It is useful because it helps geographers explain that some water resources are hidden beneath the surface. It provides water even when surface water is limited.",
            marks: 4
        },
        {
            id: "y7g-sa-145", topic: "water-resources", marks: 4,
            q: "Give ONE example of groundwater being used and explain what it helps a geographer understand.",
            sample: "An example of groundwater being used is using a bore to access water stored underground. This helps a geographer explain that some water resources are hidden beneath the surface. Groundwater can supply farms, towns and ecosystems.",
            marks: 4
        },
        {
            id: "y7g-sa-146", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if groundwater is missing, inaccurate or ignored.",
            sample: "If groundwater is missing, inaccurate or ignored, important underground water stores may be ignored. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-147", topic: "water-resources", marks: 4,
            q: "Define wetland and explain why it is useful in geography.",
            sample: "Wetland is an area of land that is saturated with water for part or all of the year. It is useful because it helps geographers recognise places that store water and support special habitats. They are important for both biodiversity and water quality.",
            marks: 4
        },
        {
            id: "y7g-sa-148", topic: "water-resources", marks: 4,
            q: "Give ONE example of wetland being used and explain what it helps a geographer understand.",
            sample: "An example of wetland being used is studying reeds, shallow water and birdlife in a marsh. This helps a geographer recognise places that store water and support special habitats. Wetlands filter water and provide habitat for many species.",
            marks: 4
        },
        {
            id: "y7g-sa-149", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if wetland is missing, inaccurate or ignored.",
            sample: "If wetland is missing, inaccurate or ignored, valuable watery habitats may be drained or damaged without understanding their role. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-150", topic: "water-resources", marks: 4,
            q: "Define dam and explain why it is useful in geography.",
            sample: "Dam is a barrier built to store, control or redirect water. It is useful because it helps geographers explain how people manage water supply and river flow. They are major human modifications of water systems.",
            marks: 4
        },
        {
            id: "y7g-sa-151", topic: "water-resources", marks: 4,
            q: "Give ONE example of dam being used and explain what it helps a geographer understand.",
            sample: "An example of dam being used is using a wall across a river to create water storage. This helps a geographer explain how people manage water supply and river flow. Dams can help provide water, irrigation and electricity.",
            marks: 4
        },
        {
            id: "y7g-sa-152", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if dam is missing, inaccurate or ignored.",
            sample: "If dam is missing, inaccurate or ignored, students may not explain how water is captured and controlled. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-153", topic: "water-resources", marks: 4,
            q: "Define reservoir and explain why it is useful in geography.",
            sample: "Reservoir is a body of stored water, usually held behind a dam. It is useful because it helps geographers identify where water can be stored for later use. They support a more reliable water supply.",
            marks: 4
        },
        {
            id: "y7g-sa-154", topic: "water-resources", marks: 4,
            q: "Give ONE example of reservoir being used and explain what it helps a geographer understand.",
            sample: "An example of reservoir being used is describing a large water storage area supplying a city. This helps a geographer identify where water can be stored for later use. Reservoirs help communities manage water through dry periods.",
            marks: 4
        },
        {
            id: "y7g-sa-155", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if reservoir is missing, inaccurate or ignored.",
            sample: "If reservoir is missing, inaccurate or ignored, the idea of water storage may remain too vague. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-156", topic: "water-resources", marks: 4,
            q: "Define irrigation and explain why it is useful in geography.",
            sample: "Irrigation is the supply of water to crops or farmland. It is useful because it helps geographers explain one important human use of water. It shows how water supports agriculture and food security.",
            marks: 4
        },
        {
            id: "y7g-sa-157", topic: "water-resources", marks: 4,
            q: "Give ONE example of irrigation being used and explain what it helps a geographer understand.",
            sample: "An example of irrigation being used is watering crops through channels, pipes or sprinklers. This helps a geographer explain one important human use of water. Irrigation increases farming output in dry areas.",
            marks: 4
        },
        {
            id: "y7g-sa-158", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if irrigation is missing, inaccurate or ignored.",
            sample: "If irrigation is missing, inaccurate or ignored, the link between water and food production may be underexplained. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-159", topic: "water-resources", marks: 4,
            q: "Define water quality and explain why it is useful in geography.",
            sample: "Water quality is the condition of water in terms of cleanliness and suitability for use. It is useful because it helps geographers judge whether water is safe for people and ecosystems. It reminds geographers that water must be both available and clean.",
            marks: 4
        },
        {
            id: "y7g-sa-160", topic: "water-resources", marks: 4,
            q: "Give ONE example of water quality being used and explain what it helps a geographer understand.",
            sample: "An example of water quality being used is testing whether stream water is clean enough for aquatic life. This helps a geographer judge whether water is safe for people and ecosystems. Good water quality matters for health, farming and ecosystems.",
            marks: 4
        },
        {
            id: "y7g-sa-161", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if water quality is missing, inaccurate or ignored.",
            sample: "If water quality is missing, inaccurate or ignored, pollution or contamination may be overlooked. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-162", topic: "water-resources", marks: 4,
            q: "Define drought and explain why it is useful in geography.",
            sample: "Drought is a prolonged period of below-average rainfall that reduces water availability. It is useful because it helps geographers explain why water shortages happen. It shows how climate can place pressure on water resources.",
            marks: 4
        },
        {
            id: "y7g-sa-163", topic: "water-resources", marks: 4,
            q: "Give ONE example of drought being used and explain what it helps a geographer understand.",
            sample: "An example of drought being used is tracking falling dam levels during a long dry spell. This helps a geographer explain why water shortages happen. Drought affects farming, towns, ecosystems and water restrictions.",
            marks: 4
        },
        {
            id: "y7g-sa-164", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if drought is missing, inaccurate or ignored.",
            sample: "If drought is missing, inaccurate or ignored, water scarcity may be described without naming one major cause. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-165", topic: "water-resources", marks: 4,
            q: "Define water conservation and explain why it is useful in geography.",
            sample: "Water conservation is the careful use and saving of water. It is useful because it helps geographers suggest ways to reduce pressure on water resources. It is a practical part of sustainable water management.",
            marks: 4
        },
        {
            id: "y7g-sa-166", topic: "water-resources", marks: 4,
            q: "Give ONE example of water conservation being used and explain what it helps a geographer understand.",
            sample: "An example of water conservation being used is fixing leaks, taking shorter showers and watering gardens wisely. This helps a geographer suggest ways to reduce pressure on water resources. Conservation helps stretch limited supplies further.",
            marks: 4
        },
        {
            id: "y7g-sa-167", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if water conservation is missing, inaccurate or ignored.",
            sample: "If water conservation is missing, inaccurate or ignored, water use may remain wasteful and unsustainable. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-168", topic: "water-resources", marks: 4,
            q: "Define ecosystem and explain why it is useful in geography.",
            sample: "Ecosystem is a community of living things interacting with each other and their environment. It is useful because it helps geographers show that water supports habitats as well as people. It helps students see the environmental value of water resources.",
            marks: 4
        },
        {
            id: "y7g-sa-169", topic: "water-resources", marks: 4,
            q: "Give ONE example of ecosystem being used and explain what it helps a geographer understand.",
            sample: "An example of ecosystem being used is describing plants, fish, insects and birds linked to a river. This helps a geographer show that water supports habitats as well as people. Healthy ecosystems depend on reliable, clean water.",
            marks: 4
        },
        {
            id: "y7g-sa-170", topic: "water-resources", marks: 5,
            q: "Explain what could go wrong if ecosystem is missing, inaccurate or ignored.",
            sample: "If ecosystem is missing, inaccurate or ignored, water may be treated as useful only for humans. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-171", topic: "water-resources", marks: 5,
            q: "Compare freshwater and groundwater. Explain how both help geographers investigate how water is used, valued and managed.",
            sample: "Freshwater is water with very low salt content that can be used by people, plants and animals and helps geographers identify the types of water most useful for drinking, farming and ecosystems. Groundwater is water stored below the ground in soil and rock and helps geographers explain that some water resources are hidden beneath the surface. Together they help students investigate how water is used, valued and managed.",
            marks: 5
        },
        {
            id: "y7g-sa-172", topic: "water-resources", marks: 5,
            q: "Compare wetland and dam. Explain how both help geographers investigate how water is used, valued and managed.",
            sample: "Wetland is an area of land that is saturated with water for part or all of the year and helps geographers recognise places that store water and support special habitats. Dam is a barrier built to store, control or redirect water and helps geographers explain how people manage water supply and river flow. Together they help students investigate how water is used, valued and managed.",
            marks: 5
        },
        {
            id: "y7g-sa-173", topic: "catchments-management", marks: 4,
            q: "Define catchment and explain why it is useful in geography.",
            sample: "Catchment is an area of land where water drains to the same creek, river, lake or sea. It is useful because it helps geographers identify the land area linked to one drainage system. They are a basic unit for understanding water movement and management.",
            marks: 4
        },
        {
            id: "y7g-sa-174", topic: "catchments-management", marks: 4,
            q: "Give ONE example of catchment being used and explain what it helps a geographer understand.",
            sample: "An example of catchment being used is tracing the hills and streams that all feed one river. This helps a geographer identify the land area linked to one drainage system. Catchments connect land use with the health of waterways.",
            marks: 4
        },
        {
            id: "y7g-sa-175", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if catchment is missing, inaccurate or ignored.",
            sample: "If catchment is missing, inaccurate or ignored, water movement may be described without linking it to the surrounding land area. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-176", topic: "catchments-management", marks: 4,
            q: "Define watershed and explain why it is useful in geography.",
            sample: "Watershed is the high land boundary that separates one catchment from another. It is useful because it helps geographers show where water drains into different systems. It helps explain why water flow follows relief.",
            marks: 4
        },
        {
            id: "y7g-sa-177", topic: "catchments-management", marks: 4,
            q: "Give ONE example of watershed being used and explain what it helps a geographer understand.",
            sample: "An example of watershed being used is finding the ridgeline that sends rain to one valley or another. This helps a geographer show where water drains into different systems. A watershed divides drainage basins.",
            marks: 4
        },
        {
            id: "y7g-sa-178", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if watershed is missing, inaccurate or ignored.",
            sample: "If watershed is missing, inaccurate or ignored, people may not understand why rain on nearby slopes can flow to different rivers. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-179", topic: "catchments-management", marks: 4,
            q: "Define tributary and explain why it is useful in geography.",
            sample: "Tributary is a smaller stream or river that flows into a larger river. It is useful because it helps geographers describe how smaller waterways connect to larger ones. It helps geographers explain drainage networks.",
            marks: 4
        },
        {
            id: "y7g-sa-180", topic: "catchments-management", marks: 4,
            q: "Give ONE example of tributary being used and explain what it helps a geographer understand.",
            sample: "An example of tributary being used is showing a creek joining the main river downstream. This helps a geographer describe how smaller waterways connect to larger ones. Many tributaries combine to feed a main river.",
            marks: 4
        },
        {
            id: "y7g-sa-181", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if tributary is missing, inaccurate or ignored.",
            sample: "If tributary is missing, inaccurate or ignored, river systems may be described too simply. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-182", topic: "catchments-management", marks: 4,
            q: "Define runoff and explain why it is useful in geography.",
            sample: "Runoff is water that flows over the land surface instead of soaking into the ground. It is useful because it helps geographers explain how water moves downhill after rain. It helps explain how rainfall quickly reaches waterways.",
            marks: 4
        },
        {
            id: "y7g-sa-183", topic: "catchments-management", marks: 4,
            q: "Give ONE example of runoff being used and explain what it helps a geographer understand.",
            sample: "An example of runoff being used is watching rain flow off a road into a drain and then a creek. This helps a geographer explain how water moves downhill after rain. Runoff is often greater on steep slopes or hard surfaces.",
            marks: 4
        },
        {
            id: "y7g-sa-184", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if runoff is missing, inaccurate or ignored.",
            sample: "If runoff is missing, inaccurate or ignored, students may skip an important step in the movement of water. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-185", topic: "catchments-management", marks: 4,
            q: "Define infiltration and explain why it is useful in geography.",
            sample: "Infiltration is the process of water soaking into the ground. It is useful because it helps geographers explain how water enters soil and rock. It helps explain why some water is stored underground.",
            marks: 4
        },
        {
            id: "y7g-sa-186", topic: "catchments-management", marks: 4,
            q: "Give ONE example of infiltration being used and explain what it helps a geographer understand.",
            sample: "An example of infiltration being used is seeing rain disappear into a grassy field instead of flowing away. This helps a geographer explain how water enters soil and rock. Infiltration can reduce surface runoff and erosion.",
            marks: 4
        },
        {
            id: "y7g-sa-187", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if infiltration is missing, inaccurate or ignored.",
            sample: "If infiltration is missing, inaccurate or ignored, water movement below the surface may be ignored. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-188", topic: "catchments-management", marks: 4,
            q: "Define groundwater flow and explain why it is useful in geography.",
            sample: "Groundwater flow is the movement of water underground through soil and rock. It is useful because it helps geographers explain how water continues to move below the surface. It shows that catchments include underground water movement too.",
            marks: 4
        },
        {
            id: "y7g-sa-189", topic: "catchments-management", marks: 4,
            q: "Give ONE example of groundwater flow being used and explain what it helps a geographer understand.",
            sample: "An example of groundwater flow being used is describing water slowly moving through an aquifer toward a stream. This helps a geographer explain how water continues to move below the surface. Groundwater flow can feed springs, wetlands and rivers.",
            marks: 4
        },
        {
            id: "y7g-sa-190", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if groundwater flow is missing, inaccurate or ignored.",
            sample: "If groundwater flow is missing, inaccurate or ignored, water systems may be seen only as surface features. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-191", topic: "catchments-management", marks: 4,
            q: "Define riparian vegetation and explain why it is useful in geography.",
            sample: "Riparian vegetation is plants growing along the banks of rivers, creeks and other waterways. It is useful because it helps geographers explain a key way waterways can be protected. It is an important part of catchment protection.",
            marks: 4
        },
        {
            id: "y7g-sa-192", topic: "catchments-management", marks: 4,
            q: "Give ONE example of riparian vegetation being used and explain what it helps a geographer understand.",
            sample: "An example of riparian vegetation being used is keeping native plants on a riverbank to hold soil in place. This helps a geographer explain a key way waterways can be protected. Riparian vegetation helps trap sediment, slow runoff and support habitat.",
            marks: 4
        },
        {
            id: "y7g-sa-193", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if riparian vegetation is missing, inaccurate or ignored.",
            sample: "If riparian vegetation is missing, inaccurate or ignored, bank erosion and poor water quality may become worse. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-194", topic: "catchments-management", marks: 4,
            q: "Define stormwater and explain why it is useful in geography.",
            sample: "Stormwater is rainwater that drains from roofs, roads and other hard surfaces. It is useful because it helps geographers explain how urban areas quickly send water and pollution into waterways. It links towns and cities to catchment health.",
            marks: 4
        },
        {
            id: "y7g-sa-195", topic: "catchments-management", marks: 4,
            q: "Give ONE example of stormwater being used and explain what it helps a geographer understand.",
            sample: "An example of stormwater being used is rain running from a car park into a drain and then into a creek. This helps a geographer explain how urban areas quickly send water and pollution into waterways. Stormwater can carry litter, oil, sediment and chemicals.",
            marks: 4
        },
        {
            id: "y7g-sa-196", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if stormwater is missing, inaccurate or ignored.",
            sample: "If stormwater is missing, inaccurate or ignored, urban impacts on waterways may be underestimated. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-197", topic: "catchments-management", marks: 4,
            q: "Define pollution and explain why it is useful in geography.",
            sample: "Pollution is harmful substances entering land or water. It is useful because it helps geographers identify one major threat to water quality in a catchment. It is a major reason catchments need protection.",
            marks: 4
        },
        {
            id: "y7g-sa-198", topic: "catchments-management", marks: 4,
            q: "Give ONE example of pollution being used and explain what it helps a geographer understand.",
            sample: "An example of pollution being used is fertiliser, litter or sewage entering a creek. This helps a geographer identify one major threat to water quality in a catchment. Pollution can come from homes, farms, roads and industry.",
            marks: 4
        },
        {
            id: "y7g-sa-199", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if pollution is missing, inaccurate or ignored.",
            sample: "If pollution is missing, inaccurate or ignored, water quality can decline and ecosystems can be damaged. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-200", topic: "catchments-management", marks: 4,
            q: "Define stakeholder and explain why it is useful in geography.",
            sample: "Stakeholder is a person or group with an interest in how a place or resource is managed. It is useful because it helps geographers explain why different groups have different perspectives on management. It helps explain why catchment management involves different perspectives.",
            marks: 4
        },
        {
            id: "y7g-sa-201", topic: "catchments-management", marks: 4,
            q: "Give ONE example of stakeholder being used and explain what it helps a geographer understand.",
            sample: "An example of stakeholder being used is comparing the views of residents, farmers, councils and environmental groups. This helps a geographer explain why different groups have different perspectives on management. Stakeholders often balance social, economic and environmental concerns differently.",
            marks: 4
        },
        {
            id: "y7g-sa-202", topic: "catchments-management", marks: 5,
            q: "Explain what could go wrong if stakeholder is missing, inaccurate or ignored.",
            sample: "If stakeholder is missing, inaccurate or ignored, management decisions may be explained as if everyone has the same priorities. This makes geographical work less clear, less accurate or harder to use.",
            marks: 5
        },
        {
            id: "y7g-sa-203", topic: "catchments-management", marks: 5,
            q: "Compare catchment and watershed. Explain how both help geographers explain water flow and protect waterways.",
            sample: "Catchment is an area of land where water drains to the same creek, river, lake or sea and helps geographers identify the land area linked to one drainage system. Watershed is the high land boundary that separates one catchment from another and helps geographers show where water drains into different systems. Together they help students explain water flow and protect waterways.",
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
        },
        {
            id: "y7g-la-7", topic: "mapping-skills", marks: 8,
            q: "Explain how border, orientation and legend help geographers investigate a local area map. (8 marks)",
            sample: "A strong answer explains that border is the line that frames the mapped area and helps geographers separate the mapped area from the rest of the page. It also explains that orientation is the feature that shows which way north is and how the map is aligned and legend is the key that explains symbols, colours and patterns on a map. Good responses link these ideas to a local area map, use examples such as drawing a neat line around the mapped section so readers know where the map begins and ends, and show how they help students create and read maps clearly and accurately.",
            marks: 8
        },
        {
            id: "y7g-la-8", topic: "mapping-skills", marks: 8,
            q: "A class is completing fieldwork about a local area map. Explain how title, scale and source could be used during the investigation. (8 marks)",
            sample: "A strong response explains that title helps geographers identify the topic, place or purpose of the map, scale helps them calculate real-world distance from map measurements, and source helps them check where the information originated and how reliable it is. Good answers include examples such as choosing between a map titled Rainfall in NSW and a map titled Population Density in NSW and show how these ideas improve fieldwork evidence and interpretation.",
            marks: 8
        },
        {
            id: "y7g-la-9", topic: "mapping-skills", marks: 10,
            q: "Describe why accurate understanding of symbol, aerial photograph and field sketch is important in Year 7 Geography. Refer to examples in your answer. (10 marks)",
            sample: "A strong answer explains that symbol, aerial photograph and field sketch are important because they help geographers show information quickly without long labels, view spatial patterns and features from a top-down perspective, and record observations clearly from ground level. Good responses use examples such as using a small aeroplane sign to show an airport and show that clear understanding leads to more accurate geographical communication and interpretation.",
            marks: 10
        },
        {
            id: "y7g-la-10", topic: "mapping-skills", marks: 8,
            q: "Explain how orientation and grid reference can improve the way geographical information is communicated or interpreted. (8 marks)",
            sample: "A strong response explains that orientation is the feature that shows which way north is and how the map is aligned and helps geographers work out directions correctly. It also explains that grid reference is a location system that uses rows, columns or coordinates to find places accurately and helps geographers locate places precisely on a map. Together they make information clearer, more accurate and easier for an audience to understand.",
            marks: 8
        },
        {
            id: "y7g-la-11", topic: "mapping-skills", marks: 10,
            q: "Discuss what problems could arise if legend, scale or symbol are ignored or misunderstood. Explain how these problems can be reduced. (10 marks)",
            sample: "A strong answer explains that if legend is ignored, symbols and colours may be misunderstood. If scale is misunderstood, distance estimates become unreliable. If symbol is ignored, the map may become cluttered or hard to read. Good responses explain that these problems can be reduced by using the concepts correctly, checking information carefully and applying sound geographical knowledge.",
            marks: 10
        },
        {
            id: "y7g-la-12", topic: "mapping-skills", marks: 8,
            q: "Explain how people can make better decisions when they understand border, source and grid reference. (8 marks)",
            sample: "A strong response explains that understanding border, source and grid reference helps people make better decisions because these ideas support clearer interpretation and stronger reasoning. Good answers explain that border helps geographers separate the mapped area from the rest of the page, source helps them check where the information originated and how reliable it is, and grid reference helps them locate places precisely on a map, which improves communicating spatial information accurately.",
            marks: 8
        },
        {
            id: "y7g-la-13", topic: "mapping-skills", marks: 10,
            q: "Describe how title, aerial photograph and field sketch work together within a local area map. (10 marks)",
            sample: "A strong answer explains the role of each concept and shows their connection. title helps geographers identify the topic, place or purpose of the map, aerial photograph helps them view spatial patterns and features from a top-down perspective, and field sketch helps them record observations clearly from ground level. Good responses link the three ideas together and explain how they improve understanding of a local area map.",
            marks: 10
        },
        {
            id: "y7g-la-14", topic: "mapping-skills", marks: 8,
            q: "Evaluate why legend, symbol and grid reference are important for communicating spatial information accurately. (8 marks)",
            sample: "A strong response evaluates the importance of legend, symbol and grid reference by explaining that they help geographers interpret symbols and colours accurately, show information quickly without long labels, and locate places precisely on a map. Good answers use examples such as finding the campsite in square B4 on a simple map and show how these ideas lead to better judgement, clearer communication and stronger geographical understanding.",
            marks: 8
        },
        {
            id: "y7g-la-15", topic: "direction-scale", marks: 8,
            q: "Explain how cardinal direction, intercardinal direction and bearing help geographers investigate route planning and distance calculations. (8 marks)",
            sample: "A strong answer explains that cardinal direction is one of the four main compass directions: north, south, east or west and helps geographers describe broad direction simply. It also explains that intercardinal direction is a direction halfway between two cardinal directions, such as north-east and bearing is an exact direction measured clockwise from north and written as a three-figure angle. Good responses link these ideas to route planning and distance calculations, use examples such as stating that the library is north of the hall, and show how they help students measure and describe location and movement accurately.",
            marks: 8
        },
        {
            id: "y7g-la-16", topic: "direction-scale", marks: 8,
            q: "A class is completing fieldwork about route planning and distance calculations. Explain how compass rose, linear scale and ratio scale could be used during the investigation. (8 marks)",
            sample: "A strong response explains that compass rose helps geographers show direction on a map clearly, linear scale helps them measure and convert distance directly from a map, and ratio scale helps them show the relationship between map units and real-world units. Good answers include examples such as using the compass rose to check whether a walking track heads west and show how these ideas improve fieldwork evidence and interpretation.",
            marks: 8
        },
        {
            id: "y7g-la-17", topic: "direction-scale", marks: 10,
            q: "Describe why accurate understanding of straight-line distance, route distance and large-scale map is important in Year 7 Geography. Refer to examples in your answer. (10 marks)",
            sample: "A strong answer explains that straight-line distance, route distance and large-scale map are important because they help geographers estimate the shortest distance between places, calculate how far someone really needs to travel, and show detailed information about a smaller place. Good responses use examples such as measuring from the school to the station with a ruler and show that clear understanding leads to more accurate geographical communication and interpretation.",
            marks: 10
        },
        {
            id: "y7g-la-18", topic: "direction-scale", marks: 8,
            q: "Explain how intercardinal direction and small-scale map can improve the way geographical information is communicated or interpreted. (8 marks)",
            sample: "A strong response explains that intercardinal direction is a direction halfway between two cardinal directions, such as north-east and helps geographers describe direction more precisely than only using north, south, east or west. It also explains that small-scale map is a map that shows a large area with less detail and helps geographers show a wider region or larger pattern. Together they make information clearer, more accurate and easier for an audience to understand.",
            marks: 8
        },
        {
            id: "y7g-la-19", topic: "direction-scale", marks: 10,
            q: "Discuss what problems could arise if bearing, linear scale or straight-line distance are ignored or misunderstood. Explain how these problems can be reduced. (10 marks)",
            sample: "A strong answer explains that if bearing is ignored, route directions may be less exact. If linear scale is misunderstood, distance calculations may be more difficult. If straight-line distance is ignored, distance may be confused with the actual travel path. Good responses explain that these problems can be reduced by using the concepts correctly, checking information carefully and applying sound geographical knowledge.",
            marks: 10
        },
        {
            id: "y7g-la-20", topic: "direction-scale", marks: 8,
            q: "Explain how people can make better decisions when they understand cardinal direction, ratio scale and small-scale map. (8 marks)",
            sample: "A strong response explains that understanding cardinal direction, ratio scale and small-scale map helps people make better decisions because these ideas support clearer interpretation and stronger reasoning. Good answers explain that cardinal direction helps geographers describe broad direction simply, ratio scale helps them show the relationship between map units and real-world units, and small-scale map helps them show a wider region or larger pattern, which improves travelling or navigating accurately.",
            marks: 8
        },
        {
            id: "y7g-la-21", topic: "direction-scale", marks: 10,
            q: "Describe how compass rose, route distance and large-scale map work together within route planning and distance calculations. (10 marks)",
            sample: "A strong answer explains the role of each concept and shows their connection. compass rose helps geographers show direction on a map clearly, route distance helps them calculate how far someone really needs to travel, and large-scale map helps them show detailed information about a smaller place. Good responses link the three ideas together and explain how they improve understanding of route planning and distance calculations.",
            marks: 10
        },
        {
            id: "y7g-la-22", topic: "direction-scale", marks: 8,
            q: "Evaluate why bearing, straight-line distance and small-scale map are important for travelling or navigating accurately. (8 marks)",
            sample: "A strong response evaluates the importance of bearing, straight-line distance and small-scale map by explaining that they help geographers state direction very accurately, estimate the shortest distance between places, and show a wider region or larger pattern. Good answers use examples such as using a map of Australia to compare states and capital cities and show how these ideas lead to better judgement, clearer communication and stronger geographical understanding.",
            marks: 8
        },
        {
            id: "y7g-la-23", topic: "landscapes-features", marks: 8,
            q: "Explain how landscape, natural element and human element help geographers investigate different landscapes and landforms. (8 marks)",
            sample: "A strong answer explains that landscape is the visible features of an area, including natural and human elements and helps geographers describe what a place looks like and how it is used. It also explains that natural element is a feature in a landscape that is not built by people and human element is a feature in a landscape that has been built or changed by people. Good responses link these ideas to different landscapes and landforms, use examples such as observing hills, trees, roads and houses together as part of one place, and show how they help students describe places, landforms and human use of places.",
            marks: 8
        },
        {
            id: "y7g-la-24", topic: "landscapes-features", marks: 8,
            q: "A class is completing fieldwork about different landscapes and landforms. Explain how landform, coastal landscape and mountain landscape could be used during the investigation. (8 marks)",
            sample: "A strong response explains that landform helps geographers classify and describe physical features of the land, coastal landscape helps them identify environments shaped by waves, wind and tides, and mountain landscape helps them recognise highland environments and how they differ from flatter areas. Good answers include examples such as identifying a mountain, dune, valley or plateau and show how these ideas improve fieldwork evidence and interpretation.",
            marks: 8
        },
        {
            id: "y7g-la-25", topic: "landscapes-features", marks: 10,
            q: "Describe why accurate understanding of desert landscape, riverine landscape and dune is important in Year 7 Geography. Refer to examples in your answer. (10 marks)",
            sample: "A strong answer explains that desert landscape, riverine landscape and dune are important because they help geographers recognise environments shaped by aridity and limited water, recognise how rivers influence surrounding places, and identify a common coastal or desert landform. Good responses use examples such as describing sand, rocky surfaces and scattered shrubs and show that clear understanding leads to more accurate geographical communication and interpretation.",
            marks: 10
        },
        {
            id: "y7g-la-26", topic: "landscapes-features", marks: 8,
            q: "Explain how natural element and valley can improve the way geographical information is communicated or interpreted. (8 marks)",
            sample: "A strong response explains that natural element is a feature in a landscape that is not built by people and helps geographers identify physical features such as land, water, soil or vegetation. It also explains that valley is a low area between hills or mountains, often formed by rivers and helps geographers identify lower land between higher areas. Together they make information clearer, more accurate and easier for an audience to understand.",
            marks: 8
        },
        {
            id: "y7g-la-27", topic: "landscapes-features", marks: 10,
            q: "Discuss what problems could arise if human element, coastal landscape or desert landscape are ignored or misunderstood. Explain how these problems can be reduced. (10 marks)",
            sample: "A strong answer explains that if human element is ignored, the role of people in shaping places may be overlooked. If coastal landscape is misunderstood, coastal features may be misunderstood or grouped with inland ones. If desert landscape is ignored, students may assume all deserts are covered only by sand. Good responses explain that these problems can be reduced by using the concepts correctly, checking information carefully and applying sound geographical knowledge.",
            marks: 10
        },
        {
            id: "y7g-la-28", topic: "landscapes-features", marks: 8,
            q: "Explain how people can make better decisions when they understand landscape, mountain landscape and valley. (8 marks)",
            sample: "A strong response explains that understanding landscape, mountain landscape and valley helps people make better decisions because these ideas support clearer interpretation and stronger reasoning. Good answers explain that landscape helps geographers describe what a place looks like and how it is used, mountain landscape helps them recognise highland environments and how they differ from flatter areas, and valley helps them identify lower land between higher areas, which improves understanding how places are used and valued.",
            marks: 8
        },
        {
            id: "y7g-la-29", topic: "landscapes-features", marks: 10,
            q: "Describe how landform, riverine landscape and dune work together within different landscapes and landforms. (10 marks)",
            sample: "A strong answer explains the role of each concept and shows their connection. landform helps geographers classify and describe physical features of the land, riverine landscape helps them recognise how rivers influence surrounding places, and dune helps them identify a common coastal or desert landform. Good responses link the three ideas together and explain how they improve understanding of different landscapes and landforms.",
            marks: 10
        },
        {
            id: "y7g-la-30", topic: "geomorphic-processes", marks: 8,
            q: "Explain how weathering, erosion and deposition help geographers investigate how landforms change over time. (8 marks)",
            sample: "A strong answer explains that weathering is the breakdown of rock in place and helps geographers explain how rock is broken down before it is moved. It also explains that erosion is the wearing away and transport of material by agents such as water, wind or ice and deposition is the dropping or laying down of sediment after it has been transported. Good responses link these ideas to how landforms change over time, use examples such as observing a rock crack into smaller pieces on a hillside, and show how they help students explain landscape change and the formation of landforms.",
            marks: 8
        },
        {
            id: "y7g-la-31", topic: "geomorphic-processes", marks: 8,
            q: "A class is completing fieldwork about how landforms change over time. Explain how river action, wave action and wind action could be used during the investigation. (8 marks)",
            sample: "A strong response explains that river action helps geographers explain how rivers shape valleys, banks and floodplains, wave action helps them explain how coasts change over time, and wind action helps them explain how wind shapes landforms such as dunes. Good answers include examples such as studying a river cutting into its bank and depositing sediment downstream and show how these ideas improve fieldwork evidence and interpretation.",
            marks: 8
        },
        {
            id: "y7g-la-32", topic: "geomorphic-processes", marks: 10,
            q: "Describe why accurate understanding of physical weathering, chemical weathering and sediment is important in Year 7 Geography. Refer to examples in your answer. (10 marks)",
            sample: "A strong answer explains that physical weathering, chemical weathering and sediment are important because they help geographers explain how rock can break apart because of temperature change, pressure or plant roots, explain how water and chemicals can alter rock, and describe the material carried by geomorphic agents. Good responses use examples such as describing tree roots widening cracks in rock and show that clear understanding leads to more accurate geographical communication and interpretation.",
            marks: 10
        },
        {
            id: "y7g-la-33", topic: "geomorphic-processes", marks: 8,
            q: "Explain how erosion and mass movement can improve the way geographical information is communicated or interpreted. (8 marks)",
            sample: "A strong response explains that erosion is the wearing away and transport of material by agents such as water, wind or ice and helps geographers explain how material is removed and moved to another place. It also explains that mass movement is the downslope movement of rock or soil caused mainly by gravity and helps geographers explain why material can suddenly move down a slope. Together they make information clearer, more accurate and easier for an audience to understand.",
            marks: 8
        },
        {
            id: "y7g-la-34", topic: "geomorphic-processes", marks: 10,
            q: "Discuss what problems could arise if deposition, wave action or physical weathering are ignored or misunderstood. Explain how these problems can be reduced. (10 marks)",
            sample: "A strong answer explains that if deposition is ignored, students may overlook where transported material ends up. If wave action is misunderstood, coastal change may be described without naming the process causing it. If physical weathering is ignored, different forms of weathering may be mixed together. Good responses explain that these problems can be reduced by using the concepts correctly, checking information carefully and applying sound geographical knowledge.",
            marks: 10
        },
        {
            id: "y7g-la-35", topic: "geomorphic-processes", marks: 8,
            q: "Explain how people can make better decisions when they understand weathering, wind action and mass movement. (8 marks)",
            sample: "A strong response explains that understanding weathering, wind action and mass movement helps people make better decisions because these ideas support clearer interpretation and stronger reasoning. Good answers explain that weathering helps geographers explain how rock is broken down before it is moved, wind action helps them explain how wind shapes landforms such as dunes, and mass movement helps them explain why material can suddenly move down a slope, which improves predicting and responding to landscape processes.",
            marks: 8
        },
        {
            id: "y7g-la-36", topic: "geomorphic-processes", marks: 10,
            q: "Describe how river action, chemical weathering and sediment work together within how landforms change over time. (10 marks)",
            sample: "A strong answer explains the role of each concept and shows their connection. river action helps geographers explain how rivers shape valleys, banks and floodplains, chemical weathering helps them explain how water and chemicals can alter rock, and sediment helps them describe the material carried by geomorphic agents. Good responses link the three ideas together and explain how they improve understanding of how landforms change over time.",
            marks: 10
        },
        {
            id: "y7g-la-37", topic: "water-resources", marks: 8,
            q: "Explain how freshwater, groundwater and wetland help geographers investigate water resources and their value. (8 marks)",
            sample: "A strong answer explains that freshwater is water with very low salt content that can be used by people, plants and animals and helps geographers identify the types of water most useful for drinking, farming and ecosystems. It also explains that groundwater is water stored below the ground in soil and rock and wetland is an area of land that is saturated with water for part or all of the year. Good responses link these ideas to water resources and their value, use examples such as recognising that rivers and lakes usually provide freshwater rather than saltwater, and show how they help students investigate how water is used, valued and managed.",
            marks: 8
        },
        {
            id: "y7g-la-38", topic: "water-resources", marks: 8,
            q: "A class is completing fieldwork about water resources and their value. Explain how dam, reservoir and irrigation could be used during the investigation. (8 marks)",
            sample: "A strong response explains that dam helps geographers explain how people manage water supply and river flow, reservoir helps them identify where water can be stored for later use, and irrigation helps them explain one important human use of water. Good answers include examples such as using a wall across a river to create water storage and show how these ideas improve fieldwork evidence and interpretation.",
            marks: 8
        },
        {
            id: "y7g-la-39", topic: "water-resources", marks: 10,
            q: "Describe why accurate understanding of water quality, drought and water conservation is important in Year 7 Geography. Refer to examples in your answer. (10 marks)",
            sample: "A strong answer explains that water quality, drought and water conservation are important because they help geographers judge whether water is safe for people and ecosystems, explain why water shortages happen, and suggest ways to reduce pressure on water resources. Good responses use examples such as testing whether stream water is clean enough for aquatic life and show that clear understanding leads to more accurate geographical communication and interpretation.",
            marks: 10
        },
        {
            id: "y7g-la-40", topic: "water-resources", marks: 8,
            q: "Explain how groundwater and ecosystem can improve the way geographical information is communicated or interpreted. (8 marks)",
            sample: "A strong response explains that groundwater is water stored below the ground in soil and rock and helps geographers explain that some water resources are hidden beneath the surface. It also explains that ecosystem is a community of living things interacting with each other and their environment and helps geographers show that water supports habitats as well as people. Together they make information clearer, more accurate and easier for an audience to understand.",
            marks: 8
        },
        {
            id: "y7g-la-41", topic: "water-resources", marks: 10,
            q: "Discuss what problems could arise if wetland, reservoir or water quality are ignored or misunderstood. Explain how these problems can be reduced. (10 marks)",
            sample: "A strong answer explains that if wetland is ignored, valuable watery habitats may be drained or damaged without understanding their role. If reservoir is misunderstood, the idea of water storage may remain too vague. If water quality is ignored, pollution or contamination may be overlooked. Good responses explain that these problems can be reduced by using the concepts correctly, checking information carefully and applying sound geographical knowledge.",
            marks: 10
        },
        {
            id: "y7g-la-42", topic: "water-resources", marks: 8,
            q: "Explain how people can make better decisions when they understand freshwater, irrigation and ecosystem. (8 marks)",
            sample: "A strong response explains that understanding freshwater, irrigation and ecosystem helps people make better decisions because these ideas support clearer interpretation and stronger reasoning. Good answers explain that freshwater helps geographers identify the types of water most useful for drinking, farming and ecosystems, irrigation helps them explain one important human use of water, and ecosystem helps them show that water supports habitats as well as people, which improves managing water sustainably.",
            marks: 8
        },
        {
            id: "y7g-la-43", topic: "water-resources", marks: 10,
            q: "Describe how dam, drought and water conservation work together within water resources and their value. (10 marks)",
            sample: "A strong answer explains the role of each concept and shows their connection. dam helps geographers explain how people manage water supply and river flow, drought helps them explain why water shortages happen, and water conservation helps them suggest ways to reduce pressure on water resources. Good responses link the three ideas together and explain how they improve understanding of water resources and their value.",
            marks: 10
        },
        {
            id: "y7g-la-44", topic: "catchments-management", marks: 8,
            q: "Explain how catchment, watershed and tributary help geographers investigate water movement and catchment protection. (8 marks)",
            sample: "A strong answer explains that catchment is an area of land where water drains to the same creek, river, lake or sea and helps geographers identify the land area linked to one drainage system. It also explains that watershed is the high land boundary that separates one catchment from another and tributary is a smaller stream or river that flows into a larger river. Good responses link these ideas to water movement and catchment protection, use examples such as tracing the hills and streams that all feed one river, and show how they help students explain water flow and protect waterways.",
            marks: 8
        },
        {
            id: "y7g-la-45", topic: "catchments-management", marks: 8,
            q: "A class is completing fieldwork about water movement and catchment protection. Explain how runoff, infiltration and groundwater flow could be used during the investigation. (8 marks)",
            sample: "A strong response explains that runoff helps geographers explain how water moves downhill after rain, infiltration helps them explain how water enters soil and rock, and groundwater flow helps them explain how water continues to move below the surface. Good answers include examples such as watching rain flow off a road into a drain and then a creek and show how these ideas improve fieldwork evidence and interpretation.",
            marks: 8
        },
        {
            id: "y7g-la-46", topic: "catchments-management", marks: 10,
            q: "Describe why accurate understanding of riparian vegetation, stormwater and pollution is important in Year 7 Geography. Refer to examples in your answer. (10 marks)",
            sample: "A strong answer explains that riparian vegetation, stormwater and pollution are important because they help geographers explain a key way waterways can be protected, explain how urban areas quickly send water and pollution into waterways, and identify one major threat to water quality in a catchment. Good responses use examples such as keeping native plants on a riverbank to hold soil in place and show that clear understanding leads to more accurate geographical communication and interpretation.",
            marks: 10
        },
        {
            id: "y7g-la-47", topic: "catchments-management", marks: 8,
            q: "Explain how watershed and stakeholder can improve the way geographical information is communicated or interpreted. (8 marks)",
            sample: "A strong response explains that watershed is the high land boundary that separates one catchment from another and helps geographers show where water drains into different systems. It also explains that stakeholder is a person or group with an interest in how a place or resource is managed and helps geographers explain why different groups have different perspectives on management. Together they make information clearer, more accurate and easier for an audience to understand.",
            marks: 8
        },
        {
            id: "y7g-la-48", topic: "catchments-management", marks: 10,
            q: "Discuss what problems could arise if tributary, infiltration or riparian vegetation are ignored or misunderstood. Explain how these problems can be reduced. (10 marks)",
            sample: "A strong answer explains that if tributary is ignored, river systems may be described too simply. If infiltration is misunderstood, water movement below the surface may be ignored. If riparian vegetation is ignored, bank erosion and poor water quality may become worse. Good responses explain that these problems can be reduced by using the concepts correctly, checking information carefully and applying sound geographical knowledge.",
            marks: 10
        },
        {
            id: "y7g-la-49", topic: "catchments-management", marks: 8,
            q: "Explain how people can make better decisions when they understand catchment, groundwater flow and stakeholder. (8 marks)",
            sample: "A strong response explains that understanding catchment, groundwater flow and stakeholder helps people make better decisions because these ideas support clearer interpretation and stronger reasoning. Good answers explain that catchment helps geographers identify the land area linked to one drainage system, groundwater flow helps them explain how water continues to move below the surface, and stakeholder helps them explain why different groups have different perspectives on management, which improves protecting waterways through sensible management.",
            marks: 8
        },
        {
            id: "y7g-la-50", topic: "catchments-management", marks: 10,
            q: "Describe how runoff, stormwater and pollution work together within water movement and catchment protection. (10 marks)",
            sample: "A strong answer explains the role of each concept and shows their connection. runoff helps geographers explain how water moves downhill after rain, stormwater helps them explain how urban areas quickly send water and pollution into waterways, and pollution helps them identify one major threat to water quality in a catchment. Good responses link the three ideas together and explain how they improve understanding of water movement and catchment protection.",
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
            focus: "Half-Yearly simulation — broad balanced mix",
            duration: 70,
            questionIds: [
                "y7g-mcq-3","y7g-mcq-7","y7g-mcq-11","y7g-mcq-15","y7g-mcq-19","y7g-mcq-23","y7g-mcq-28","y7g-mcq-108",
                "y7g-mcq-188","y7g-mcq-267","y7g-mcq-346","y7g-mcq-425","y7g-mcq-33","y7g-mcq-113","y7g-mcq-193","y7g-mcq-272",
                "y7g-mcq-351","y7g-mcq-430","y7g-mcq-38","y7g-mcq-118","y7g-sa-5","y7g-sa-7","y7g-sa-141","y7g-sa-45",
                "y7g-sa-80","y7g-sa-112","y7g-sa-145","y7g-sa-12","y7g-sa-14","y7g-sa-49","y7g-la-45","y7g-la-8"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — balanced topic rotation A",
            duration: 70,
            questionIds: [
                "y7g-mcq-198","y7g-mcq-277","y7g-mcq-357","y7g-mcq-436","y7g-mcq-43","y7g-mcq-123","y7g-mcq-202","y7g-mcq-281",
                "y7g-mcq-362","y7g-mcq-441","y7g-mcq-48","y7g-mcq-128","y7g-mcq-207","y7g-mcq-286","y7g-mcq-367","y7g-mcq-446",
                "y7g-mcq-53","y7g-mcq-133","y7g-mcq-212","y7g-mcq-291","y7g-sa-149","y7g-sa-53","y7g-sa-84","y7g-sa-116",
                "y7g-sa-153","y7g-sa-176","y7g-sa-18","y7g-sa-57","y7g-sa-87","y7g-sa-119","y7g-la-49","y7g-la-12"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — balanced topic rotation B",
            duration: 70,
            questionIds: [
                "y7g-mcq-372","y7g-mcq-451","y7g-mcq-58","y7g-mcq-138","y7g-mcq-217","y7g-mcq-296","y7g-mcq-377","y7g-mcq-456",
                "y7g-mcq-63","y7g-mcq-143","y7g-mcq-222","y7g-mcq-301","y7g-mcq-383","y7g-mcq-462","y7g-mcq-67","y7g-mcq-147",
                "y7g-mcq-227","y7g-mcq-306","y7g-mcq-388","y7g-mcq-467","y7g-sa-22","y7g-sa-91","y7g-sa-123","y7g-sa-180",
                "y7g-sa-26","y7g-sa-61","y7g-sa-95","y7g-sa-127","y7g-sa-158","y7g-sa-184","y7g-la-16","y7g-la-38"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced topic rotation C",
            duration: 70,
            questionIds: [
                "y7g-mcq-72","y7g-mcq-152","y7g-mcq-232","y7g-mcq-311","y7g-mcq-393","y7g-mcq-472","y7g-mcq-77","y7g-mcq-157",
                "y7g-mcq-237","y7g-mcq-316","y7g-mcq-398","y7g-mcq-477","y7g-mcq-82","y7g-mcq-162","y7g-mcq-242","y7g-mcq-321",
                "y7g-mcq-403","y7g-mcq-482","y7g-mcq-87","y7g-mcq-167","y7g-sa-98","y7g-sa-130","y7g-sa-189","y7g-sa-30",
                "y7g-sa-102","y7g-sa-134","y7g-sa-162","y7g-sa-193","y7g-sa-34","y7g-sa-65","y7g-la-42","y7g-la-20"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 75,
            questionIds: [
                "y7g-mcq-246","y7g-mcq-325","y7g-mcq-409","y7g-mcq-488","y7g-mcq-92","y7g-mcq-172","y7g-mcq-251","y7g-mcq-330",
                "y7g-mcq-414","y7g-mcq-493","y7g-mcq-97","y7g-mcq-177","y7g-mcq-256","y7g-mcq-335","y7g-mcq-419","y7g-mcq-498",
                "y7g-mcq-102","y7g-mcq-182","y7g-mcq-261","y7g-mcq-340","y7g-sa-166","y7g-sa-197","y7g-sa-38","y7g-sa-69",
                "y7g-sa-170","y7g-sa-201","y7g-sa-42","y7g-sa-73","y7g-sa-106","y7g-sa-138","y7g-la-26","y7g-la-33"
            ]
        }
    ]
};

const GEOGRAPHY7_LEARNING_GUIDES = [
    {
        id: "geography7-guide-mapping-skills",
        topicId: "mapping-skills",
        title: "Reading maps with BOLTSS and geographical tools",
        intro: "Mapping questions are usually about how map features help a reader understand information clearly, accurately and quickly.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "BOLTSS stands for Border, Orientation, Legend, Title, Scale and Source.",
                    "Each map feature has a job, such as showing direction, explaining symbols or identifying the topic.",
                    "Geographical tools such as symbols, aerial photographs and maps help represent places and patterns."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Name the map feature first, then explain what it helps the reader understand.",
                    "If the question asks what could go wrong, explain how missing information makes the map less clear or less accurate.",
                    "Use the exact language of the feature, such as legend, orientation or source, instead of a vague description."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Legend explains symbols, while title explains what the map is about.",
                    "Orientation shows direction, not distance.",
                    "Source tells where information came from, not what the map measures."
                ]
            }
        ],
        quickChecks: [
            "Have I named the correct BOLTSS feature?",
            "Did I explain how it helps a geographer read the map?"
        ]
    },
    {
        id: "geography7-guide-direction-scale",
        topicId: "direction-scale",
        title: "Direction, bearing, scale and distance",
        intro: "These questions test whether you can use directional language correctly and convert map measurements into real-world distance.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Bearings are measured clockwise from north and written as three-figure numbers.",
                    "Compass directions describe position, while scale connects map distance to actual distance.",
                    "A ruler and the scale are often used together to work out real distance."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Read the direction or scale carefully before doing any calculation.",
                    "If a distance question is asked, convert the map measurement step by step using the scale.",
                    "Check whether the question wants a compass direction, a bearing or a distance."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "A bearing is not measured anticlockwise.",
                    "North-east is halfway between north and east, not north-west.",
                    "Map distance and real distance are not the same unless you use the scale."
                ]
            }
        ],
        quickChecks: [
            "Have I used clockwise from north for a bearing question?",
            "Did I convert the map distance using the stated scale?"
        ]
    },
    {
        id: "geography7-guide-landscapes-features",
        topicId: "landscapes-features",
        title: "Landscapes, landforms and human features",
        intro: "Landscape questions focus on what can be seen in an area and how natural and human elements combine to shape that place.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "A landscape includes the visible features of an area.",
                    "Natural elements include things such as rivers, hills, soil and vegetation.",
                    "Human elements include things such as roads, buildings, farms and tourism facilities."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Define the key term first, then give an example that matches it.",
                    "If the question asks for a comparison, explain how natural and human elements are different but connected.",
                    "Use a named landform or visible feature as evidence when the question asks for description."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "A landscape is not only natural scenery because human features can also be part of it.",
                    "A landform is a natural feature such as a mountain or valley, not a map tool.",
                    "Human elements can change how a landscape looks and how it is used."
                ]
            }
        ],
        quickChecks: [
            "Have I identified whether the feature is natural or human?",
            "Did I explain how the feature shapes the landscape?"
        ]
    },
    {
        id: "geography7-guide-geomorphic-processes",
        topicId: "geomorphic-processes",
        title: "Weathering, erosion and deposition",
        intro: "Geomorphic-process questions are about how Earth's surface changes over time through the breakdown, movement and dropping of material.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Weathering breaks rock down in place.",
                    "Erosion moves material from one place to another.",
                    "Deposition happens when transported material is dropped."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Decide which process the question is really describing before answering.",
                    "If more than one process is mentioned, explain them in the order they happen.",
                    "Use an agent such as water, wind, waves or ice if the question asks how the landform changes."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Weathering does not move the rock away.",
                    "Deposition is not the same as erosion because it is when the material is dropped.",
                    "Different environments may be shaped by different dominant agents."
                ]
            }
        ],
        quickChecks: [
            "Have I matched the definition to the correct geomorphic process?",
            "Did I explain how the process changes the landform over time?"
        ]
    },
    {
        id: "geography7-guide-water-resources",
        topicId: "water-resources",
        title: "Why water resources matter",
        intro: "Water-resource questions ask why water is valuable, where freshwater is found and what happens when people place pressure on it.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "Freshwater resources include rivers, lakes and groundwater.",
                    "Water supports homes, farming, industry, recreation and ecosystems.",
                    "Poor management can lead to shortages, pollution and environmental damage."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Identify the water resource first, then explain why it matters.",
                    "If the question asks for consequences, include both human and environmental impacts.",
                    "Use cause-and-effect language, such as overuse leading to shortages or pollution harming ecosystems."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "Not all water is freshwater because oceans are saltwater.",
                    "Groundwater is stored beneath the ground, not only in clouds or glaciers.",
                    "Water is valuable for more than drinking alone."
                ]
            }
        ],
        quickChecks: [
            "Have I explained why the water resource is important?",
            "Did I show what happens if it is poorly managed?"
        ]
    },
    {
        id: "geography7-guide-catchments-management",
        topicId: "catchments-management",
        title: "Catchments and protecting water systems",
        intro: "Catchment questions focus on how water moves through a system and why protecting that system matters for people and environments.",
        sections: [
            {
                heading: "What to remember",
                points: [
                    "A catchment is an area where water drains to the same river, lake or other water body.",
                    "Water can move through runoff, streams, rivers, infiltration and groundwater flow.",
                    "Healthy catchments provide water and support plants, animals and ecosystems."
                ]
            },
            {
                heading: "How to tackle questions",
                points: [
                    "Describe the movement of water in sequence when the question asks how water travels through a catchment.",
                    "If protection is mentioned, explain both why it matters and how people can help.",
                    "Use terms such as runoff, infiltration and groundwater accurately."
                ]
            },
            {
                heading: "Common mix-ups",
                points: [
                    "A catchment is the whole drainage area, not just the river channel.",
                    "Protecting vegetation and reducing pollution both help protect the catchment.",
                    "Catchments matter for both human needs and environmental health."
                ]
            }
        ],
        quickChecks: [
            "Have I explained how water moves through the catchment?",
            "Did I include why protection matters for both people and environments?"
        ]
    }
];

const GEOGRAPHY7_SUPPORT_HINTS = {
    "mapping-skills": {
        mcq: "Think about the job each map feature does for a reader before choosing your answer.",
        short: "Name the map feature first, then explain how it makes the map clearer or more useful.",
        long: "Organise your response by defining the feature or concept and then explaining why it matters in geography."
    },
    "direction-scale": {
        mcq: "Focus on direction words, clockwise bearings and how scale converts map distance into real distance.",
        short: "State the direction or scale rule first, then apply it to the example in the question.",
        long: "Work through the skill step by step so your explanation shows both the rule and the result."
    },
    "landscapes-features": {
        mcq: "Ask whether the question is about a natural feature, a human feature or the landscape as a whole.",
        short: "Define the landscape term clearly before giving an example that matches it.",
        long: "Compare natural and human elements directly and explain how they shape the appearance and use of a place."
    },
    "geomorphic-processes": {
        mcq: "Decide whether the process breaks material down, moves it or drops it.",
        short: "Name the geomorphic process first, then explain exactly what it does to the landform.",
        long: "Structure your answer around weathering, erosion and deposition so the sequence is clear."
    },
    "water-resources": {
        mcq: "Think about where freshwater is found and why people and ecosystems rely on it.",
        short: "Identify the water resource first, then explain why it is valuable or under pressure.",
        long: "Explain the importance of water with both human and environmental consequences in mind."
    },
    "catchments-management": {
        mcq: "Focus on how water moves through the catchment and what keeps that system healthy.",
        short: "Use the correct catchment term first, then explain the movement or management idea in the question.",
        long: "Describe the path of water through the catchment and then link that to why protection matters."
    }
};

function geography7SupportHintFor(question) {
    const hints = GEOGRAPHY7_SUPPORT_HINTS[question.topic];
    if (!hints) return "Use the key geography idea in this topic to explain the feature, process or management issue.";
    if (question.options) return hints.mcq;
    if ((question.marks || 0) >= 8) return hints.long;
    return hints.short;
}

function applyGeography7Support(subject) {
    const allQuestions = [].concat(subject.mcqs || [], subject.short || [], subject.long || []);
    subject.learningGuides = GEOGRAPHY7_LEARNING_GUIDES.map(function (guide) {
        return Object.assign({}, guide);
    });
    allQuestions.forEach(function (question) {
        question.support = {
            hint: geography7SupportHintFor(question),
            guideId: `geography7-guide-${question.topic}`
        };
    });
}

applyGeography7Support(window.SUBJECT_DATA["geography-7"]);
