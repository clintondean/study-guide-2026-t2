// Science - Year 9 Half Yearly
// Outcomes assessed:
//   SC5-EGY-01 explains how energy is conserved, transferred and transformed
//   SC5-DIS-01 explains how body systems and responses maintain health
//   SC5-WS-05 uses a variety of ways to process and represent data
//   SC5-WS-06 analyses data from investigations and secondary sources
//   SC5-WS-07 evaluates data, claims and solutions using evidence
//   SC5-WS-08 communicates scientific understanding clearly

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

function science9Figure(inner, viewBox) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox || "0 0 320 180"}" aria-hidden="true">
        <rect x="8" y="8" width="304" height="164" rx="18" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        ${inner}
    </svg>`;
}

function energyFlowFigure() {
    return science9Figure(`
        <rect x="24" y="60" width="76" height="56" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="62" y="82" text-anchor="middle" font-size="13" font-family="Arial" fill="#1e3a8a">Electrical</text>
        <text x="62" y="98" text-anchor="middle" font-size="13" font-family="Arial" fill="#1e3a8a">energy in</text>
        <path d="M104 88 H146" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
        <polygon points="146,88 132,80 132,96" fill="#f59e0b"/>
        <rect x="150" y="60" width="76" height="56" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="188" y="82" text-anchor="middle" font-size="13" font-family="Arial" fill="#14532d">Thermal</text>
        <text x="188" y="98" text-anchor="middle" font-size="13" font-family="Arial" fill="#14532d">output</text>
        <path d="M228 88 H270" stroke="#ef4444" stroke-width="6" stroke-linecap="round"/>
        <polygon points="270,88 256,80 256,96" fill="#ef4444"/>
        <rect x="226" y="28" width="66" height="38" rx="12" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="259" y="51" text-anchor="middle" font-size="12" font-family="Arial" fill="#7f1d1d">Useful</text>
        <rect x="226" y="112" width="66" height="38" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="259" y="135" text-anchor="middle" font-size="12" font-family="Arial" fill="#92400e">Wasted</text>
    `);
}

function openCircuitFigure() {
    return science9Figure(`
        <path d="M44 136 V54 H110" stroke="#334155" stroke-width="4" fill="none"/>
        <path d="M134 54 H238 V136 H44" stroke="#334155" stroke-width="4" fill="none"/>
        <line x1="110" y1="54" x2="126" y2="42" stroke="#334155" stroke-width="4"/>
        <circle cx="130" cy="54" r="4" fill="#334155"/>
        <circle cx="246" cy="94" r="20" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
        <path d="M238 94 h16 M246 86 v16" stroke="#d97706" stroke-width="3"/>
        <line x1="72" y1="136" x2="72" y2="112" stroke="#334155" stroke-width="4"/>
        <line x1="88" y1="136" x2="88" y2="104" stroke="#334155" stroke-width="8"/>
        <text x="122" y="32" text-anchor="middle" font-size="12" font-family="Arial" fill="#475569">Open switch</text>
        <text x="246" y="128" text-anchor="middle" font-size="12" font-family="Arial" fill="#475569">Lamp</text>
        <text x="80" y="154" text-anchor="middle" font-size="12" font-family="Arial" fill="#475569">Cell</text>
    `);
}

function parallelCircuitFigure() {
    return science9Figure(`
        <path d="M48 28 V150 H272 V28 H48" stroke="#334155" stroke-width="4" fill="none"/>
        <line x1="80" y1="150" x2="80" y2="122" stroke="#334155" stroke-width="4"/>
        <line x1="96" y1="150" x2="96" y2="114" stroke="#334155" stroke-width="8"/>
        <path d="M136 28 V150" stroke="#334155" stroke-width="4"/>
        <path d="M208 28 V150" stroke="#334155" stroke-width="4"/>
        <circle cx="136" cy="66" r="18" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
        <circle cx="208" cy="110" r="18" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
        <path d="M128 66 h16 M136 58 v16" stroke="#d97706" stroke-width="3"/>
        <path d="M200 110 h16 M208 102 v16" stroke="#d97706" stroke-width="3"/>
        <text x="172" y="20" text-anchor="middle" font-size="12" font-family="Arial" fill="#475569">Parallel branches</text>
    `);
}

function ohmsLawGraphFigure() {
    return science9Figure(`
        <path d="M52 24 V142 H280" stroke="#334155" stroke-width="4" fill="none"/>
        <text x="166" y="165" text-anchor="middle" font-size="12" font-family="Arial" fill="#475569">Voltage (V)</text>
        <text x="24" y="88" text-anchor="middle" font-size="12" font-family="Arial" fill="#475569" transform="rotate(-90 24 88)">Current (A)</text>
        <path d="M60 132 L92 114 L124 96 L156 78 L188 60 L220 42" stroke="#2563eb" stroke-width="5" fill="none"/>
        <circle cx="60" cy="132" r="4" fill="#2563eb"/>
        <circle cx="92" cy="114" r="4" fill="#2563eb"/>
        <circle cx="124" cy="96" r="4" fill="#2563eb"/>
        <circle cx="156" cy="78" r="4" fill="#2563eb"/>
        <circle cx="188" cy="60" r="4" fill="#2563eb"/>
        <circle cx="220" cy="42" r="4" fill="#2563eb"/>
        <text x="228" y="38" font-size="12" font-family="Arial" fill="#1e3a8a">straight line</text>
    `);
}

function homeostasisLoopFigure() {
    return science9Figure(`
        <rect x="120" y="20" width="84" height="34" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="162" y="41" text-anchor="middle" font-size="12" font-family="Arial" fill="#1e3a8a">Body too hot</text>
        <rect x="28" y="72" width="92" height="34" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="74" y="93" text-anchor="middle" font-size="12" font-family="Arial" fill="#14532d">Receptors detect</text>
        <rect x="116" y="126" width="96" height="34" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="164" y="147" text-anchor="middle" font-size="12" font-family="Arial" fill="#5b21b6">Effectors act</text>
        <rect x="214" y="72" width="78" height="34" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="253" y="93" text-anchor="middle" font-size="12" font-family="Arial" fill="#92400e">Cooling</text>
        <path d="M120 37 H82 V72" stroke="#334155" stroke-width="4" fill="none"/>
        <polygon points="82,72 74,58 90,58" fill="#334155"/>
        <path d="M120 143 H96 V106" stroke="#334155" stroke-width="4" fill="none"/>
        <polygon points="96,106 88,120 104,120" fill="#334155"/>
        <path d="M212 143 H253 V106" stroke="#334155" stroke-width="4" fill="none"/>
        <polygon points="253,106 245,120 261,120" fill="#334155"/>
        <path d="M253 72 V37 H204" stroke="#334155" stroke-width="4" fill="none"/>
        <polygon points="204,37 218,29 218,45" fill="#334155"/>
    `);
}

function transmissionChainFigure() {
    return science9Figure(`
        <circle cx="54" cy="90" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="3"/>
        <text x="54" y="95" text-anchor="middle" font-size="11" font-family="Arial" fill="#7f1d1d">Sick</text>
        <rect x="118" y="66" width="44" height="48" rx="10" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
        <text x="140" y="94" text-anchor="middle" font-size="11" font-family="Arial" fill="#334155">Handle</text>
        <circle cx="226" cy="90" r="22" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
        <text x="226" y="95" text-anchor="middle" font-size="11" font-family="Arial" fill="#1e3a8a">Student</text>
        <path d="M76 90 H112" stroke="#ef4444" stroke-width="5" stroke-dasharray="8 6"/>
        <polygon points="112,90 98,82 98,98" fill="#ef4444"/>
        <path d="M162 90 H198" stroke="#ef4444" stroke-width="5" stroke-dasharray="8 6"/>
        <polygon points="198,90 184,82 184,98" fill="#ef4444"/>
        <rect x="108" y="18" width="64" height="28" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="140" y="36" text-anchor="middle" font-size="11" font-family="Arial" fill="#14532d">Wash hands</text>
    `);
}

function energyUseBarFigure() {
    return science9Figure(`
        <path d="M44 24 V144 H286" stroke="#334155" stroke-width="4" fill="none"/>
        <rect x="72" y="82" width="36" height="62" fill="#60a5fa"/>
        <rect x="132" y="56" width="36" height="88" fill="#f97316"/>
        <rect x="192" y="100" width="36" height="44" fill="#34d399"/>
        <rect x="252" y="120" width="36" height="24" fill="#a78bfa"/>
        <text x="90" y="160" text-anchor="middle" font-size="11" font-family="Arial" fill="#475569">TV</text>
        <text x="150" y="160" text-anchor="middle" font-size="11" font-family="Arial" fill="#475569">Heater</text>
        <text x="210" y="160" text-anchor="middle" font-size="11" font-family="Arial" fill="#475569">Fan</text>
        <text x="270" y="160" text-anchor="middle" font-size="11" font-family="Arial" fill="#475569">LEDs</text>
        <text x="24" y="92" text-anchor="middle" font-size="11" font-family="Arial" fill="#475569" transform="rotate(-90 24 92)">kWh per week</text>
    `);
}

window.SUBJECT_DATA["science-9"] = {
    id: "science-9",
    name: "Science",
    tagline: "Year 9 Half Yearly - Energy, Diseases & Science Skills",
    color: "#3a86ff",
    accent: "#2563eb",
    icon: "🔬",
    topics: [
        { id: "energy-conservation", name: "Energy conservation, transfers and efficiency" },
        { id: "energy-sources", name: "Renewable, non-renewable and new energy sources" },
        { id: "electrical-circuits", name: "Electrical circuits and components" },
        { id: "ohms-law", name: "Ohm's law and resistance" },
        { id: "homeostasis", name: "Homeostasis and maintaining balance" },
        { id: "infectious-disease", name: "Infectious disease and prevention" },
        { id: "noninfectious-disease", name: "Non-infectious disease and risk factors" },
        { id: "science-skills", name: "Science skills, graphing and evidence" }
    ],

    mcqs: [
        /* ----- Energy conservation ----- */
        {
            id: "s9-mcq-1", topic: "energy-conservation",
            q: "Which statement best matches the law of conservation of energy?",
            options: [
                "Energy can be created when a machine is switched on",
                "Energy disappears when a device becomes less efficient",
                "Energy cannot be created or destroyed, only transferred or transformed",
                "Only electrical energy is always conserved"
            ],
            answer: 2,
            explain: "Energy is conserved overall. It changes form or is transferred between objects and systems."
        },
        {
            id: "s9-mcq-2", topic: "energy-conservation",
            q: "In a toaster, the main useful energy transfer is from electrical energy to:",
            options: ["chemical energy", "thermal energy", "gravitational potential energy", "nuclear energy"],
            answer: 1,
            explain: "A toaster uses electrical energy to produce thermal energy that heats the bread."
        },
        {
            id: "s9-mcq-3", topic: "energy-conservation",
            q: "A machine uses 500 J of input energy and provides 350 J as useful output. What is its efficiency?",
            options: ["35%", "50%", "70%", "85%"],
            answer: 2,
            explain: "Efficiency = useful output / input x 100 = 350 / 500 x 100 = 70%."
        },
        {
            id: "s9-mcq-4", topic: "energy-conservation",
            q: "The diagram shows energy transfers in a device. Which box is the useful output for a heater?",
            diagram: {
                alt: "Energy transfer diagram showing electrical energy in, thermal output, and useful and wasted branches.",
                caption: "Energy transfer diagram",
                svg: energyFlowFigure()
            },
            options: ["Electrical energy in", "Thermal output", "Useful box only if the device is a speaker", "Wasted box"],
            answer: 1,
            explain: "For a heater, thermal energy is the intended useful output."
        },
        {
            id: "s9-mcq-5", topic: "energy-conservation",
            q: "As a skateboarder rolls down a hill, which energy change happens most directly?",
            options: [
                "Kinetic energy changes into gravitational potential energy",
                "Gravitational potential energy changes into kinetic energy",
                "Chemical energy changes into nuclear energy",
                "Thermal energy changes into elastic energy only"
            ],
            answer: 1,
            explain: "As height decreases, gravitational potential energy decreases and kinetic energy increases."
        },
        {
            id: "s9-mcq-6", topic: "energy-conservation",
            q: "Which action most directly reduces wasted thermal energy from a house in winter?",
            options: [
                "Opening windows wider",
                "Adding ceiling insulation",
                "Leaving lights on all day",
                "Using larger speakers"
            ],
            answer: 1,
            explain: "Insulation slows unwanted energy transfer by heating to the surroundings."
        },

        /* ----- Energy sources ----- */
        {
            id: "s9-mcq-7", topic: "energy-sources",
            q: "Which energy source is renewable?",
            options: ["Coal", "Natural gas", "Wind", "Diesel"],
            answer: 2,
            explain: "Wind is continually replenished by natural processes, so it is renewable."
        },
        {
            id: "s9-mcq-8", topic: "energy-sources",
            q: "Why might a community use more than one type of energy source?",
            options: [
                "Different sources can improve reliability because some work better in different conditions",
                "All energy sources produce exactly the same amount of pollution",
                "Only one source can ever be used in a grid",
                "Using more sources means efficiency no longer matters"
            ],
            answer: 0,
            explain: "A mix of sources can make supply more reliable and reduce dependence on one condition or fuel."
        },
        {
            id: "s9-mcq-9", topic: "energy-sources",
            q: "A major concern with non-renewable energy sources is that they:",
            options: [
                "cannot produce large amounts of energy",
                "are always safe for the environment",
                "are finite and may also produce greenhouse gas emissions",
                "only work during daylight"
            ],
            answer: 2,
            explain: "Non-renewable fuels are limited and often release greenhouse gases when used."
        },
        {
            id: "s9-mcq-10", topic: "energy-sources",
            q: "Which statement about hydrogen used as an energy carrier is most accurate?",
            options: [
                "Hydrogen is a renewable energy source in every situation",
                "Hydrogen can store energy, but its environmental benefit depends on how it is produced",
                "Hydrogen can only be used in solid form",
                "Hydrogen creates no safety considerations"
            ],
            answer: 1,
            explain: "Hydrogen can be useful, but it must be produced first, so the source energy matters."
        },
        {
            id: "s9-mcq-11", topic: "energy-sources",
            q: "When comparing new energy technologies, which factor is most useful for a fair evaluation?",
            options: [
                "Only the colour of the equipment",
                "Cost, reliability, environmental impact and energy output",
                "How complicated the device name sounds",
                "Whether the technology is the newest idea"
            ],
            answer: 1,
            explain: "Scientific evaluation should consider several evidence-based criteria, not a single superficial feature."
        },
        {
            id: "s9-mcq-12", topic: "energy-sources",
            q: "Solar panels may produce less electrical energy on some days mainly because:",
            options: [
                "they stop conserving energy",
                "the amount of sunlight reaching them changes",
                "their resistance becomes zero",
                "renewable sources cannot power homes"
            ],
            answer: 1,
            explain: "Solar output depends on the intensity and duration of sunlight."
        },

        /* ----- Electrical circuits ----- */
        {
            id: "s9-mcq-13", topic: "electrical-circuits",
            q: "Current can flow in a circuit only when the circuit is:",
            options: ["open", "closed", "insulated", "parallel only"],
            answer: 1,
            explain: "A closed circuit provides a complete path for charge to move."
        },
        {
            id: "s9-mcq-14", topic: "electrical-circuits",
            q: "The diagram shows a simple circuit. What happens to the lamp in the circuit shown?",
            diagram: {
                alt: "Simple circuit with one cell, one open switch and one lamp.",
                caption: "Simple circuit with an open switch",
                svg: openCircuitFigure()
            },
            options: [
                "The lamp lights because the cell is present",
                "The lamp does not light because the path is broken",
                "The lamp becomes brighter because the switch is open",
                "The lamp flashes because current moves both ways"
            ],
            answer: 1,
            explain: "An open switch breaks the circuit, so current does not flow."
        },
        {
            id: "s9-mcq-15", topic: "electrical-circuits",
            q: "What usually happens if a second identical lamp is added in series with the first lamp?",
            options: [
                "Both lamps get brighter",
                "Both lamps usually become dimmer",
                "Only the first lamp lights",
                "The current always doubles"
            ],
            answer: 1,
            explain: "Adding components in series increases total resistance and reduces current, so identical lamps are usually dimmer."
        },
        {
            id: "s9-mcq-16", topic: "electrical-circuits",
            q: "Two lamps are connected as shown. If one lamp breaks, what is most likely to happen to the other lamp?",
            diagram: {
                alt: "Parallel circuit with two lamps in separate branches connected to one cell.",
                caption: "Parallel circuit",
                svg: parallelCircuitFigure()
            },
            options: [
                "The other lamp stays on because it has its own branch",
                "The other lamp must go off because every circuit behaves like series",
                "The cell stops supplying voltage",
                "The broken lamp becomes brighter"
            ],
            answer: 0,
            explain: "In a parallel circuit, each branch has its own path, so one broken lamp does not usually stop the other."
        },
        {
            id: "s9-mcq-17", topic: "electrical-circuits",
            q: "How is an ammeter connected when measuring current in a branch?",
            options: [
                "In series with the component",
                "Across the component in parallel",
                "Outside the circuit only",
                "It does not need any connection"
            ],
            answer: 0,
            explain: "An ammeter is placed in series so the current flows through it."
        },
        {
            id: "s9-mcq-18", topic: "electrical-circuits",
            q: "Which material is the best electrical conductor?",
            options: ["Rubber", "Plastic", "Copper", "Glass"],
            answer: 2,
            explain: "Copper is a good conductor and is commonly used in wires."
        },
        {
            id: "s9-mcq-19", topic: "electrical-circuits",
            q: "Two 1.5 V cells are connected in series. What is the total voltage supplied?",
            options: ["0.75 V", "1.5 V", "3.0 V", "15 V"],
            answer: 2,
            explain: "Voltages from cells in series add together."
        },
        {
            id: "s9-mcq-20", topic: "electrical-circuits",
            q: "What is the main job of a fuse in a household circuit?",
            options: [
                "To increase current to every appliance",
                "To stop the flow if the current becomes dangerously high",
                "To store extra electrical energy",
                "To make all lamps brighter"
            ],
            answer: 1,
            explain: "A fuse is a safety device that breaks the circuit if too much current flows."
        },

        /* ----- Ohm's law ----- */
        {
            id: "s9-mcq-21", topic: "ohms-law",
            q: "A resistor has a voltage of 6 V across it and a current of 2 A through it. What is its resistance?",
            options: ["0.33 ohms", "3 ohms", "8 ohms", "12 ohms"],
            answer: 1,
            explain: "Using V = IR, resistance R = V / I = 6 / 2 = 3 ohms."
        },
        {
            id: "s9-mcq-22", topic: "ohms-law",
            q: "If the voltage across a resistor stays the same but the resistance doubles, the current will:",
            options: ["double", "halve", "stay the same", "become zero immediately"],
            answer: 1,
            explain: "From I = V / R, current decreases when resistance increases if voltage is unchanged."
        },
        {
            id: "s9-mcq-23", topic: "ohms-law",
            q: "The unit of electrical resistance is:",
            options: ["ampere", "volt", "joule", "ohm"],
            answer: 3,
            explain: "Resistance is measured in ohms."
        },
        {
            id: "s9-mcq-24", topic: "ohms-law",
            q: "What does the graph suggest about the component shown?",
            diagram: {
                alt: "Current-voltage graph showing a straight line through the origin.",
                caption: "Current-voltage graph",
                svg: ohmsLawGraphFigure()
            },
            options: [
                "Current decreases as voltage increases",
                "The component has constant resistance and follows Ohm's law",
                "The component can store chemical energy",
                "Resistance is changing randomly"
            ],
            answer: 1,
            explain: "A straight line through the origin shows current is directly proportional to voltage for an ohmic component."
        },
        {
            id: "s9-mcq-25", topic: "ohms-law",
            q: "A circuit draws 4 A from a 12 V supply. What is the total resistance?",
            options: ["3 ohms", "8 ohms", "16 ohms", "48 ohms"],
            answer: 0,
            explain: "R = V / I = 12 / 4 = 3 ohms."
        },
        {
            id: "s9-mcq-26", topic: "ohms-law",
            q: "A wire with greater resistance in the same circuit will usually cause the current to:",
            options: ["increase", "decrease", "stay exactly the same", "reverse direction"],
            answer: 1,
            explain: "Higher resistance opposes current more strongly, so current decreases if voltage is unchanged."
        },

        /* ----- Homeostasis ----- */
        {
            id: "s9-mcq-27", topic: "homeostasis",
            q: "Homeostasis is best described as the body's ability to:",
            options: [
                "keep internal conditions within a stable range",
                "avoid using energy during exercise",
                "destroy every microbe that enters the body",
                "stop all changes in the environment"
            ],
            answer: 0,
            explain: "Homeostasis maintains relatively stable internal conditions despite internal and external changes."
        },
        {
            id: "s9-mcq-28", topic: "homeostasis",
            q: "Why does sweating help cool the body?",
            options: [
                "Sweat makes extra heat inside the body",
                "Evaporation of sweat removes thermal energy from the skin",
                "Sweat increases blood glucose",
                "Sweating stops circulation"
            ],
            answer: 1,
            explain: "As sweat evaporates, it transfers energy away from the body and cools the skin."
        },
        {
            id: "s9-mcq-29", topic: "homeostasis",
            q: "Shivering helps maintain body temperature because it:",
            options: [
                "reduces energy transfer by radiation only",
                "makes muscles contract, producing extra thermal energy",
                "stops blood flow to the skin permanently",
                "removes water from the body"
            ],
            answer: 1,
            explain: "Rapid muscle contractions during shivering release thermal energy."
        },
        {
            id: "s9-mcq-30", topic: "homeostasis",
            q: "In the feedback loop shown, which part acts as the effectors?",
            diagram: {
                alt: "Homeostasis feedback loop showing body too hot, receptors detect change, effectors act, and cooling.",
                caption: "Body temperature feedback loop",
                svg: homeostasisLoopFigure()
            },
            options: ["Body too hot", "Receptors detect", "Effectors act", "Cooling only"],
            answer: 2,
            explain: "Effectors are the body parts that respond, such as sweat glands and blood vessels."
        },
        {
            id: "s9-mcq-31", topic: "homeostasis",
            q: "Why is keeping blood glucose within a narrow range important?",
            options: [
                "Cells need a reliable supply of glucose for respiration",
                "It prevents all infectious diseases",
                "It stops resistance in nerves",
                "It means the body no longer needs hormones"
            ],
            answer: 0,
            explain: "Cells require a stable supply of glucose for respiration and normal body function."
        },

        /* ----- Infectious disease ----- */
        {
            id: "s9-mcq-32", topic: "infectious-disease",
            q: "An infectious disease is one that:",
            options: [
                "can spread between organisms and is caused by a pathogen",
                "is always caused by poor diet",
                "cannot be prevented",
                "only affects the lungs"
            ],
            answer: 0,
            explain: "Infectious diseases are caused by pathogens and can be transmitted between hosts."
        },
        {
            id: "s9-mcq-33", topic: "infectious-disease",
            q: "Why are antibiotics not effective against viral diseases such as influenza?",
            options: [
                "Viruses do not contain bacterial cell structures targeted by antibiotics",
                "Viruses are too large for antibiotics",
                "Antibiotics only work at night",
                "Viruses have no genetic material"
            ],
            answer: 0,
            explain: "Antibiotics target bacteria, not viruses."
        },
        {
            id: "s9-mcq-34", topic: "infectious-disease",
            q: "Based on the transmission chain shown, which action most directly breaks the spread before the healthy student becomes infected?",
            diagram: {
                alt: "Transmission chain from a sick person to a door handle to a student, with wash hands highlighted above.",
                caption: "Possible disease transmission pathway",
                svg: transmissionChainFigure()
            },
            options: [
                "Touching the handle more often",
                "Washing hands before eating or touching the face",
                "Turning off the lights",
                "Using a lower voltage power supply"
            ],
            answer: 1,
            explain: "Handwashing interrupts the transfer of pathogens from surfaces to the body."
        },
        {
            id: "s9-mcq-35", topic: "infectious-disease",
            q: "Vaccination helps protect a population because it:",
            options: [
                "makes every pathogen harmless instantly",
                "prepares the immune system and can reduce transmission through community protection",
                "removes all need for hygiene",
                "only protects people already sick"
            ],
            answer: 1,
            explain: "Vaccines help the immune system respond faster and can reduce spread through the population."
        },
        {
            id: "s9-mcq-36", topic: "infectious-disease",
            q: "Which action is most appropriate when a person has symptoms of a contagious illness?",
            options: [
                "Share drink bottles so immunity increases",
                "Ignore symptoms and attend crowded events",
                "Follow health advice, reduce close contact and practise good hygiene",
                "Stop drinking water"
            ],
            answer: 2,
            explain: "Reducing contact and using hygiene measures helps limit spread."
        },

        /* ----- Non-infectious disease ----- */
        {
            id: "s9-mcq-37", topic: "noninfectious-disease",
            q: "Which statement is true of a non-infectious disease?",
            options: [
                "It is always caused by bacteria",
                "It cannot spread directly from one person to another",
                "It is never influenced by lifestyle",
                "It is always short term"
            ],
            answer: 1,
            explain: "Non-infectious diseases do not spread directly between people."
        },
        {
            id: "s9-mcq-38", topic: "noninfectious-disease",
            q: "A risk factor for disease is best described as:",
            options: [
                "something that increases the chance of developing a disease",
                "proof that a person definitely has a disease",
                "a device that measures current",
                "any symptom that cannot be treated"
            ],
            answer: 0,
            explain: "Risk factors increase likelihood but do not guarantee disease."
        },
        {
            id: "s9-mcq-39", topic: "noninfectious-disease",
            q: "Which change would most help lower the risk of developing type 2 diabetes?",
            options: [
                "Less sleep and less exercise",
                "Regular physical activity and a balanced diet",
                "Avoiding all vaccinations",
                "Sharing towels at the gym"
            ],
            answer: 1,
            explain: "Regular exercise and healthy eating can reduce risk factors linked to type 2 diabetes."
        },
        {
            id: "s9-mcq-40", topic: "noninfectious-disease",
            q: "A deficiency disease can occur when a person:",
            options: [
                "does not get enough of an essential nutrient",
                "has been infected by a virus",
                "uses too much electrical energy",
                "measures a graph incorrectly"
            ],
            answer: 0,
            explain: "Deficiency diseases result from lacking key nutrients, such as vitamins or minerals."
        },

        /* ----- Science skills ----- */
        {
            id: "s9-mcq-41", topic: "science-skills",
            q: "A student tests how different insulators affect the temperature drop of hot water. What is the independent variable?",
            options: [
                "The type of insulator used",
                "The starting volume of water",
                "The thermometer used",
                "The room temperature only"
            ],
            answer: 0,
            explain: "The independent variable is the factor the student deliberately changes."
        },
        {
            id: "s9-mcq-42", topic: "science-skills",
            q: "Why should repeated trials be carried out in an investigation?",
            options: [
                "To make the experiment look longer",
                "To improve reliability and help identify anomalies",
                "To guarantee the hypothesis is correct",
                "To remove the need for a conclusion"
            ],
            answer: 1,
            explain: "Repeated trials improve reliability and show whether results are consistent."
        },
        {
            id: "s9-mcq-43", topic: "science-skills",
            q: "According to the graph, which appliance uses the most energy each week?",
            diagram: {
                alt: "Bar graph comparing weekly energy use of a TV, heater, fan and LED lights, with the heater bar highest.",
                caption: "Weekly appliance energy use",
                svg: energyUseBarFigure()
            },
            options: ["TV", "Heater", "Fan", "LED lights"],
            answer: 1,
            explain: "The heater bar is the tallest, so it has the highest weekly energy use."
        },
        {
            id: "s9-mcq-44", topic: "science-skills",
            q: "A class result is very different from the other trials. What should happen first?",
            options: [
                "Delete it immediately",
                "Check the method and measurements, then repeat if needed",
                "Change the hypothesis to match it",
                "Average it with only one other result"
            ],
            answer: 1,
            explain: "An unusual result should be checked carefully rather than accepted or discarded without evidence."
        },
        /* ----- Additional Energy conservation ----- */
        {
            id: "s9-mcq-45", topic: "energy-conservation",
            q: "In a kettle, the main useful output is:",
            options: [
                "thermal energy",
                "sound energy",
                "nuclear energy",
                "gravitational potential energy"
            ],
            answer: 0,
            explain: "The useful output is the intended energy form produced by the device."
        },
        {
            id: "s9-mcq-46", topic: "energy-conservation",
            q: "A device uses 260 J of input energy and gives 200 J as useful output. What is its efficiency?",
            options: [
                "59%",
                "77%",
                "92%",
                "23%"
            ],
            answer: 1,
            explain: "Efficiency equals useful output divided by input multiplied by 100."
        },
        {
            id: "s9-mcq-47", topic: "energy-conservation",
            q: "A machine has an input of 320 J and a useful output of 240 J. How much energy is wasted?",
            options: [
                "240 J",
                "320 J",
                "80 J",
                "75 J"
            ],
            answer: 2,
            explain: "Wasted energy equals input energy minus useful output energy."
        },
        {
            id: "s9-mcq-48", topic: "energy-conservation",
            q: "In a home-energy audit, which statement best matches the law of conservation of energy in a classroom experiment?",
            options: [
                "Energy disappears whenever friction is present.",
                "Only electrical energy is conserved in school laboratories.",
                "Useful energy can be created if a machine is efficient enough.",
                "Energy is not lost overall; it is transferred or transformed into different forms."
            ],
            answer: 3,
            explain: "Energy is conserved overall even when some of it becomes sound or thermal energy."
        },
        {
            id: "s9-mcq-49", topic: "energy-conservation",
            q: "In a home-energy audit, in a falling book, the main energy change is from:",
            options: [
                "gravitational potential energy to kinetic energy",
                "kinetic energy to gravitational potential energy",
                "thermal energy to nuclear energy",
                "sound energy to electrical energy"
            ],
            answer: 0,
            explain: "The scenario describes a common energy transformation linked to motion or height."
        },
        {
            id: "s9-mcq-50", topic: "energy-conservation",
            q: "In a home-energy audit, which action would most directly reduce unwanted thermal energy transfer in a refrigerator?",
            options: [
                "painting it a brighter colour only",
                "keeping the door shut",
                "adding more sound speakers",
                "opening more gaps for air to move through"
            ],
            answer: 1,
            explain: "It reduces heat transfer from the room into the fridge."
        },
        {
            id: "s9-mcq-51", topic: "energy-conservation",
            q: "Device A is 89% efficient and Device B is 81% efficient. Which statement is correct?",
            options: [
                "Both devices must waste exactly the same amount of energy.",
                "The less efficient device always creates energy.",
                "Device A transfers a greater fraction of input energy into useful output.",
                "Efficiency does not matter if the inputs are different."
            ],
            answer: 2,
            explain: "The more efficient device gives a larger useful fraction of its input energy."
        },
        {
            id: "s9-mcq-52", topic: "energy-conservation",
            q: "Why might a phone charger feel warm even when it is working normally?",
            options: [
                "It stops conserving energy while switched on.",
                "It creates extra energy inside the device.",
                "Thermal energy cannot be produced by electrical devices.",
                "Some input energy is transferred as unwanted thermal energy to the surroundings."
            ],
            answer: 3,
            explain: "No device is perfectly efficient, so some energy is usually transferred as heat."
        },
        {
            id: "s9-mcq-53", topic: "energy-conservation",
            q: "In a home-energy audit, which change would most likely improve the efficiency of a school heating system?",
            options: [
                "Reducing thermal energy loss through insulation and sealing drafts",
                "Adding more decorative lights",
                "Keeping doors open during winter",
                "Running fans with windows fully open"
            ],
            answer: 0,
            explain: "Efficiency improves when less energy is wasted to the surroundings."
        },
        {
            id: "s9-mcq-54", topic: "energy-conservation",
            q: "In a toaster, the main useful output is:",
            options: [
                "light energy",
                "thermal energy",
                "nuclear energy",
                "gravitational potential energy"
            ],
            answer: 1,
            explain: "The useful output is the intended energy form produced by the device."
        },
        {
            id: "s9-mcq-55", topic: "energy-conservation",
            q: "A device uses 380 J of input energy and gives 340 J as useful output. What is its efficiency?",
            options: [
                "74%",
                "82%",
                "89%",
                "11%"
            ],
            answer: 2,
            explain: "Efficiency equals useful output divided by input multiplied by 100."
        },
        {
            id: "s9-mcq-56", topic: "energy-conservation",
            q: "A machine has an input of 440 J and a useful output of 380 J. How much energy is wasted?",
            options: [
                "380 J",
                "440 J",
                "86 J",
                "60 J"
            ],
            answer: 3,
            explain: "Wasted energy equals input energy minus useful output energy."
        },
        {
            id: "s9-mcq-57", topic: "energy-conservation",
            q: "During a toy-car ramp test, which statement best matches the law of conservation of energy in a classroom experiment?",
            options: [
                "Energy is not lost overall; it is transferred or transformed into different forms.",
                "Energy disappears whenever friction is present.",
                "Only electrical energy is conserved in school laboratories.",
                "Useful energy can be created if a machine is efficient enough."
            ],
            answer: 0,
            explain: "Energy is conserved overall even when some of it becomes sound or thermal energy."
        },
        {
            id: "s9-mcq-58", topic: "energy-conservation",
            q: "In a home-energy audit, in a cyclist braking at the end of a race, the main energy change is from:",
            options: [
                "thermal energy to kinetic energy",
                "kinetic energy to thermal energy",
                "thermal energy to nuclear energy",
                "sound energy to electrical energy"
            ],
            answer: 1,
            explain: "The scenario describes a common energy transformation linked to motion or height."
        },
        {
            id: "s9-mcq-59", topic: "energy-conservation",
            q: "In a home-energy audit, which action would most directly reduce unwanted thermal energy transfer in a lunchbox?",
            options: [
                "painting it a brighter colour only",
                "adding more sound speakers",
                "using a thick insulating liner",
                "opening more gaps for air to move through"
            ],
            answer: 2,
            explain: "It slows conduction and convection."
        },
        {
            id: "s9-mcq-60", topic: "energy-conservation",
            q: "Device A is 85% efficient and Device B is 59% efficient. Which statement is correct?",
            options: [
                "Both devices must waste exactly the same amount of energy.",
                "The less efficient device always creates energy.",
                "Efficiency does not matter if the inputs are different.",
                "Device A transfers a greater fraction of input energy into useful output."
            ],
            answer: 3,
            explain: "The more efficient device gives a larger useful fraction of its input energy."
        },
        {
            id: "s9-mcq-61", topic: "energy-conservation",
            q: "Why might a kettle feel warm even when it is working normally?",
            options: [
                "Some input energy is transferred as unwanted thermal energy to the surroundings.",
                "It stops conserving energy while switched on.",
                "It creates extra energy inside the device.",
                "Thermal energy cannot be produced by electrical devices."
            ],
            answer: 0,
            explain: "No device is perfectly efficient, so some energy is usually transferred as heat."
        },
        {
            id: "s9-mcq-62", topic: "energy-conservation",
            q: "During a toy-car ramp test, which change would most likely improve the efficiency of a school heating system?",
            options: [
                "Adding more decorative lights",
                "Reducing thermal energy loss through insulation and sealing drafts",
                "Keeping doors open during winter",
                "Running fans with windows fully open"
            ],
            answer: 1,
            explain: "Efficiency improves when less energy is wasted to the surroundings."
        },
        {
            id: "s9-mcq-63", topic: "energy-conservation",
            q: "In a torch, the main useful output is:",
            options: [
                "thermal energy",
                "nuclear energy",
                "light energy",
                "gravitational potential energy"
            ],
            answer: 2,
            explain: "The useful output is the intended energy form produced by the device."
        },
        {
            id: "s9-mcq-64", topic: "energy-conservation",
            q: "A device uses 500 J of input energy and gives 380 J as useful output. What is its efficiency?",
            options: [
                "66%",
                "88%",
                "24%",
                "76%"
            ],
            answer: 3,
            explain: "Efficiency equals useful output divided by input multiplied by 100."
        },
        {
            id: "s9-mcq-65", topic: "energy-conservation",
            q: "A machine has an input of 560 J and a useful output of 520 J. How much energy is wasted?",
            options: [
                "40 J",
                "520 J",
                "560 J",
                "93 J"
            ],
            answer: 0,
            explain: "Wasted energy equals input energy minus useful output energy."
        },
        {
            id: "s9-mcq-66", topic: "energy-conservation",
            q: "For a lunchbox design task, which statement best matches the law of conservation of energy in a classroom experiment?",
            options: [
                "Energy disappears whenever friction is present.",
                "Energy is not lost overall; it is transferred or transformed into different forms.",
                "Only electrical energy is conserved in school laboratories.",
                "Useful energy can be created if a machine is efficient enough."
            ],
            answer: 1,
            explain: "Energy is conserved overall even when some of it becomes sound or thermal energy."
        },
        {
            id: "s9-mcq-67", topic: "energy-conservation",
            q: "During a toy-car ramp test, in a falling book, the main energy change is from:",
            options: [
                "kinetic energy to gravitational potential energy",
                "thermal energy to nuclear energy",
                "gravitational potential energy to kinetic energy",
                "sound energy to electrical energy"
            ],
            answer: 2,
            explain: "The scenario describes a common energy transformation linked to motion or height."
        },
        {
            id: "s9-mcq-68", topic: "energy-conservation",
            q: "During a toy-car ramp test, which action would most directly reduce unwanted thermal energy transfer in a refrigerator?",
            options: [
                "painting it a brighter colour only",
                "adding more sound speakers",
                "opening more gaps for air to move through",
                "keeping the door shut"
            ],
            answer: 3,
            explain: "It reduces heat transfer from the room into the fridge."
        },
        {
            id: "s9-mcq-69", topic: "energy-conservation",
            q: "Device A is 68% efficient and Device B is 83% efficient. Which statement is correct?",
            options: [
                "Device B transfers a greater fraction of input energy into useful output.",
                "Both devices must waste exactly the same amount of energy.",
                "The less efficient device always creates energy.",
                "Efficiency does not matter if the inputs are different."
            ],
            answer: 0,
            explain: "The more efficient device gives a larger useful fraction of its input energy."
        },
        {
            id: "s9-mcq-70", topic: "energy-conservation",
            q: "Why might a toaster feel warm even when it is working normally?",
            options: [
                "It stops conserving energy while switched on.",
                "Some input energy is transferred as unwanted thermal energy to the surroundings.",
                "It creates extra energy inside the device.",
                "Thermal energy cannot be produced by electrical devices."
            ],
            answer: 1,
            explain: "No device is perfectly efficient, so some energy is usually transferred as heat."
        },
        {
            id: "s9-mcq-71", topic: "energy-conservation",
            q: "For a lunchbox design task, which change would most likely improve the efficiency of a school heating system?",
            options: [
                "Adding more decorative lights",
                "Keeping doors open during winter",
                "Reducing thermal energy loss through insulation and sealing drafts",
                "Running fans with windows fully open"
            ],
            answer: 2,
            explain: "Efficiency improves when less energy is wasted to the surroundings."
        },
        {
            id: "s9-mcq-72", topic: "energy-conservation",
            q: "In a speaker, the main useful output is:",
            options: [
                "thermal energy",
                "nuclear energy",
                "gravitational potential energy",
                "sound energy"
            ],
            answer: 3,
            explain: "The useful output is the intended energy form produced by the device."
        },
        {
            id: "s9-mcq-73", topic: "energy-conservation",
            q: "A device uses 200 J of input energy and gives 100 J as useful output. What is its efficiency?",
            options: [
                "50%",
                "36%",
                "100%",
                "25%"
            ],
            answer: 0,
            explain: "Efficiency equals useful output divided by input multiplied by 100."
        },
        {
            id: "s9-mcq-74", topic: "energy-conservation",
            q: "A machine has an input of 260 J and a useful output of 140 J. How much energy is wasted?",
            options: [
                "140 J",
                "120 J",
                "260 J",
                "54 J"
            ],
            answer: 1,
            explain: "Wasted energy equals input energy minus useful output energy."
        },
        {
            id: "s9-mcq-75", topic: "energy-conservation",
            q: "In a school heating review, which statement best matches the law of conservation of energy in a classroom experiment?",
            options: [
                "Energy disappears whenever friction is present.",
                "Only electrical energy is conserved in school laboratories.",
                "Energy is not lost overall; it is transferred or transformed into different forms.",
                "Useful energy can be created if a machine is efficient enough."
            ],
            answer: 2,
            explain: "Energy is conserved overall even when some of it becomes sound or thermal energy."
        },
        {
            id: "s9-mcq-76", topic: "energy-conservation",
            q: "During a toy-car ramp test, in a cyclist braking at the end of a race, the main energy change is from:",
            options: [
                "thermal energy to kinetic energy",
                "thermal energy to nuclear energy",
                "sound energy to electrical energy",
                "kinetic energy to thermal energy"
            ],
            answer: 3,
            explain: "The scenario describes a common energy transformation linked to motion or height."
        },
        {
            id: "s9-mcq-77", topic: "energy-conservation",
            q: "During a toy-car ramp test, which action would most directly reduce unwanted thermal energy transfer in a lunchbox?",
            options: [
                "using a thick insulating liner",
                "painting it a brighter colour only",
                "adding more sound speakers",
                "opening more gaps for air to move through"
            ],
            answer: 0,
            explain: "It slows conduction and convection."
        },
        {
            id: "s9-mcq-78", topic: "energy-conservation",
            q: "Device A is 80% efficient and Device B is 83% efficient. Which statement is correct?",
            options: [
                "Both devices must waste exactly the same amount of energy.",
                "Device B transfers a greater fraction of input energy into useful output.",
                "The less efficient device always creates energy.",
                "Efficiency does not matter if the inputs are different."
            ],
            answer: 1,
            explain: "The more efficient device gives a larger useful fraction of its input energy."
        },
        {
            id: "s9-mcq-79", topic: "energy-conservation",
            q: "Why might a torch feel warm even when it is working normally?",
            options: [
                "It stops conserving energy while switched on.",
                "It creates extra energy inside the device.",
                "Some input energy is transferred as unwanted thermal energy to the surroundings.",
                "Thermal energy cannot be produced by electrical devices."
            ],
            answer: 2,
            explain: "No device is perfectly efficient, so some energy is usually transferred as heat."
        },
        {
            id: "s9-mcq-80", topic: "energy-conservation",
            q: "In a school heating review, which change would most likely improve the efficiency of a school heating system?",
            options: [
                "Adding more decorative lights",
                "Keeping doors open during winter",
                "Running fans with windows fully open",
                "Reducing thermal energy loss through insulation and sealing drafts"
            ],
            answer: 3,
            explain: "Efficiency improves when less energy is wasted to the surroundings."
        },
        {
            id: "s9-mcq-81", topic: "energy-conservation",
            q: "In an electric drill, the main useful output is:",
            options: [
                "kinetic energy",
                "sound energy",
                "nuclear energy",
                "gravitational potential energy"
            ],
            answer: 0,
            explain: "The useful output is the intended energy form produced by the device."
        },
        {
            id: "s9-mcq-82", topic: "energy-conservation",
            q: "A device uses 320 J of input energy and gives 240 J as useful output. What is its efficiency?",
            options: [
                "60%",
                "75%",
                "94%",
                "25%"
            ],
            answer: 1,
            explain: "Efficiency equals useful output divided by input multiplied by 100."
        },
        {
            id: "s9-mcq-83", topic: "energy-conservation",
            q: "A machine has an input of 380 J and a useful output of 280 J. How much energy is wasted?",
            options: [
                "280 J",
                "380 J",
                "100 J",
                "74 J"
            ],
            answer: 2,
            explain: "Wasted energy equals input energy minus useful output energy."
        },
        {
            id: "s9-mcq-84", topic: "energy-conservation",
            q: "For a phone-charger check, which statement best matches the law of conservation of energy in a classroom experiment?",
            options: [
                "Energy disappears whenever friction is present.",
                "Only electrical energy is conserved in school laboratories.",
                "Useful energy can be created if a machine is efficient enough.",
                "Energy is not lost overall; it is transferred or transformed into different forms."
            ],
            answer: 3,
            explain: "Energy is conserved overall even when some of it becomes sound or thermal energy."
        },
        {
            id: "s9-mcq-85", topic: "energy-conservation",
            q: "For a lunchbox design task, in a falling book, the main energy change is from:",
            options: [
                "gravitational potential energy to kinetic energy",
                "kinetic energy to gravitational potential energy",
                "thermal energy to nuclear energy",
                "sound energy to electrical energy"
            ],
            answer: 0,
            explain: "The scenario describes a common energy transformation linked to motion or height."
        },
        {
            id: "s9-mcq-86", topic: "energy-conservation",
            q: "For a lunchbox design task, which action would most directly reduce unwanted thermal energy transfer in a refrigerator?",
            options: [
                "painting it a brighter colour only",
                "keeping the door shut",
                "adding more sound speakers",
                "opening more gaps for air to move through"
            ],
            answer: 1,
            explain: "It reduces heat transfer from the room into the fridge."
        },
        {
            id: "s9-mcq-87", topic: "energy-conservation",
            q: "Device A is 60% efficient and Device B is 57% efficient. Which statement is correct?",
            options: [
                "Both devices must waste exactly the same amount of energy.",
                "The less efficient device always creates energy.",
                "Device A transfers a greater fraction of input energy into useful output.",
                "Efficiency does not matter if the inputs are different."
            ],
            answer: 2,
            explain: "The more efficient device gives a larger useful fraction of its input energy."
        },
        {
            id: "s9-mcq-88", topic: "energy-conservation",
            q: "Why might a speaker feel warm even when it is working normally?",
            options: [
                "It stops conserving energy while switched on.",
                "It creates extra energy inside the device.",
                "Thermal energy cannot be produced by electrical devices.",
                "Some input energy is transferred as unwanted thermal energy to the surroundings."
            ],
            answer: 3,
            explain: "No device is perfectly efficient, so some energy is usually transferred as heat."
        },
        {
            id: "s9-mcq-89", topic: "energy-conservation",
            q: "For a phone-charger check, which change would most likely improve the efficiency of a school heating system?",
            options: [
                "Reducing thermal energy loss through insulation and sealing drafts",
                "Adding more decorative lights",
                "Keeping doors open during winter",
                "Running fans with windows fully open"
            ],
            answer: 0,
            explain: "Efficiency improves when less energy is wasted to the surroundings."
        },
        {
            id: "s9-mcq-90", topic: "energy-conservation",
            q: "In a blender, the main useful output is:",
            options: [
                "thermal energy",
                "kinetic energy",
                "nuclear energy",
                "gravitational potential energy"
            ],
            answer: 1,
            explain: "The useful output is the intended energy form produced by the device."
        },
        {
            id: "s9-mcq-91", topic: "energy-conservation",
            q: "A device uses 440 J of input energy and gives 380 J as useful output. What is its efficiency?",
            options: [
                "73%",
                "91%",
                "86%",
                "14%"
            ],
            answer: 2,
            explain: "Efficiency equals useful output divided by input multiplied by 100."
        },
        {
            id: "s9-mcq-92", topic: "energy-conservation",
            q: "A machine has an input of 500 J and a useful output of 420 J. How much energy is wasted?",
            options: [
                "420 J",
                "500 J",
                "84 J",
                "80 J"
            ],
            answer: 3,
            explain: "Wasted energy equals input energy minus useful output energy."
        },
        {
            id: "s9-mcq-93", topic: "energy-conservation",
            q: "In a kitchen appliance test, which statement best matches the law of conservation of energy in a classroom experiment?",
            options: [
                "Energy is not lost overall; it is transferred or transformed into different forms.",
                "Energy disappears whenever friction is present.",
                "Only electrical energy is conserved in school laboratories.",
                "Useful energy can be created if a machine is efficient enough."
            ],
            answer: 0,
            explain: "Energy is conserved overall even when some of it becomes sound or thermal energy."
        },
        {
            id: "s9-mcq-94", topic: "energy-conservation",
            q: "For a lunchbox design task, in a cyclist braking at the end of a race, the main energy change is from:",
            options: [
                "thermal energy to kinetic energy",
                "kinetic energy to thermal energy",
                "thermal energy to nuclear energy",
                "sound energy to electrical energy"
            ],
            answer: 1,
            explain: "The scenario describes a common energy transformation linked to motion or height."
        },
        {
            id: "s9-mcq-95", topic: "energy-conservation",
            q: "For a lunchbox design task, which action would most directly reduce unwanted thermal energy transfer in a lunchbox?",
            options: [
                "painting it a brighter colour only",
                "adding more sound speakers",
                "using a thick insulating liner",
                "opening more gaps for air to move through"
            ],
            answer: 2,
            explain: "It slows conduction and convection."
        },
        {
            id: "s9-mcq-96", topic: "energy-conservation",
            q: "Device A is 81% efficient and Device B is 65% efficient. Which statement is correct?",
            options: [
                "Both devices must waste exactly the same amount of energy.",
                "The less efficient device always creates energy.",
                "Efficiency does not matter if the inputs are different.",
                "Device A transfers a greater fraction of input energy into useful output."
            ],
            answer: 3,
            explain: "The more efficient device gives a larger useful fraction of its input energy."
        },
        {
            id: "s9-mcq-97", topic: "energy-conservation",
            q: "Why might an electric drill feel warm even when it is working normally?",
            options: [
                "Some input energy is transferred as unwanted thermal energy to the surroundings.",
                "It stops conserving energy while switched on.",
                "It creates extra energy inside the device.",
                "Thermal energy cannot be produced by electrical devices."
            ],
            answer: 0,
            explain: "No device is perfectly efficient, so some energy is usually transferred as heat."
        },
        {
            id: "s9-mcq-98", topic: "energy-conservation",
            q: "In a kitchen appliance test, which change would most likely improve the efficiency of a school heating system?",
            options: [
                "Adding more decorative lights",
                "Reducing thermal energy loss through insulation and sealing drafts",
                "Keeping doors open during winter",
                "Running fans with windows fully open"
            ],
            answer: 1,
            explain: "Efficiency improves when less energy is wasted to the surroundings."
        },
        {
            id: "s9-mcq-99", topic: "energy-conservation",
            q: "In a fan heater, the main useful output is:",
            options: [
                "sound energy",
                "nuclear energy",
                "thermal energy",
                "gravitational potential energy"
            ],
            answer: 2,
            explain: "The useful output is the intended energy form produced by the device."
        },
        {
            id: "s9-mcq-100", topic: "energy-conservation",
            q: "A device uses 560 J of input energy and gives 520 J as useful output. What is its efficiency?",
            options: [
                "81%",
                "89%",
                "7%",
                "93%"
            ],
            answer: 3,
            explain: "Efficiency equals useful output divided by input multiplied by 100."
        },
        {
            id: "s9-mcq-101", topic: "energy-conservation",
            q: "A machine has an input of 200 J and a useful output of 140 J. How much energy is wasted?",
            options: [
                "60 J",
                "140 J",
                "200 J",
                "70 J"
            ],
            answer: 0,
            explain: "Wasted energy equals input energy minus useful output energy."
        },
        /* ----- Additional Energy sources ----- */
        {
            id: "s9-mcq-102", topic: "energy-sources",
            q: "On a sunny school roof, which energy source is renewable?",
            options: [
                "Solar",
                "Coal",
                "Diesel",
                "Petrol"
            ],
            answer: 0,
            explain: "Sunlight is replenished naturally."
        },
        {
            id: "s9-mcq-103", topic: "energy-sources",
            q: "On a sunny school roof, a major limitation of using oil for electricity generation is that:",
            options: [
                "it can only work on windy days",
                "it is finite and burning it adds greenhouse gases to the atmosphere",
                "it cannot be transported or stored",
                "it is automatically renewable if demand is high"
            ],
            answer: 1,
            explain: "Non-renewable sources are finite and often create environmental problems when used."
        },
        {
            id: "s9-mcq-104", topic: "energy-sources",
            q: "On a sunny school roof, which option is the best match for a mountain region with large rivers?",
            options: [
                "coal generators with no storage planning",
                "a single diesel generator only",
                "Hydroelectricity",
                "a source chosen only because the equipment looks modern"
            ],
            answer: 2,
            explain: "Flowing water can spin turbines continuously."
        },
        {
            id: "s9-mcq-105", topic: "energy-sources",
            q: "On a sunny school roof, why might a state electricity grid use a mix of energy sources?",
            options: [
                "A mix means efficiency no longer matters.",
                "Every source makes exactly the same environmental impact.",
                "Using one source only is always safer.",
                "Different sources can improve reliability because they work best under different conditions."
            ],
            answer: 3,
            explain: "A mix can balance changing weather, demand and environmental goals."
        },
        {
            id: "s9-mcq-106", topic: "energy-sources",
            q: "On a sunny school roof, why is hydrogen often described as an energy carrier rather than a primary energy source?",
            options: [
                "It has to be produced using energy from another source before it can store or deliver energy.",
                "It can never be used for fuel cells.",
                "It only exists as a solid.",
                "It is always renewable in every situation."
            ],
            answer: 0,
            explain: "Hydrogen stores energy, but another energy source is needed to make it first."
        },
        {
            id: "s9-mcq-107", topic: "energy-sources",
            q: "On a sunny school roof, why can output from solar change from day to day?",
            options: [
                "It breaks the law of conservation of energy.",
                "Output drops when sunlight is weak.",
                "It becomes non-renewable during school hours.",
                "Its voltage is always exactly the same."
            ],
            answer: 1,
            explain: "Many renewable sources depend on natural conditions that vary."
        },
        {
            id: "s9-mcq-108", topic: "energy-sources",
            q: "On a sunny school roof, what is one main benefit of battery storage in a renewable energy system?",
            options: [
                "It makes every renewable source run all night without energy input.",
                "It guarantees that no energy will ever be wasted.",
                "It can store energy when production is high and release it later when needed.",
                "It turns a non-renewable source into a renewable one."
            ],
            answer: 2,
            explain: "Storage helps match supply to demand over time."
        },
        {
            id: "s9-mcq-109", topic: "energy-sources",
            q: "On a sunny school roof, which criterion is most useful when fairly comparing a new energy technology with an older one?",
            options: [
                "The colour of the equipment only",
                "The age of the company logo",
                "Whether the device name sounds scientific",
                "Cost, reliability, environmental impact and energy output"
            ],
            answer: 3,
            explain: "Scientific evaluation should use multiple evidence-based criteria."
        },
        {
            id: "s9-mcq-110", topic: "energy-sources",
            q: "On a sunny school roof, why are renewable sources important in plans to reduce greenhouse gas emissions?",
            options: [
                "Many of them produce electricity with much lower emissions during operation than fossil fuels.",
                "They never need maintenance or storage planning.",
                "They can create energy from nothing.",
                "They always work equally well in all locations."
            ],
            answer: 0,
            explain: "Renewable sources can help lower emissions, although each source still has practical limits."
        },
        {
            id: "s9-mcq-111", topic: "energy-sources",
            q: "In a windy coastal town, which energy source is renewable?",
            options: [
                "Oil",
                "Biomass",
                "Diesel",
                "Petrol"
            ],
            answer: 1,
            explain: "Organic material can be regrown."
        },
        {
            id: "s9-mcq-112", topic: "energy-sources",
            q: "On a sunny school roof, a major limitation of using natural gas for electricity generation is that:",
            options: [
                "it can only work on windy days",
                "it cannot be transported or stored",
                "it is finite and methane leaks can worsen climate change",
                "it is automatically renewable if demand is high"
            ],
            answer: 2,
            explain: "Non-renewable sources are finite and often create environmental problems when used."
        },
        {
            id: "s9-mcq-113", topic: "energy-sources",
            q: "On a sunny school roof, which option is the best match for a windy coastal community?",
            options: [
                "coal generators with no storage planning",
                "a single diesel generator only",
                "a source chosen only because the equipment looks modern",
                "Wind turbines"
            ],
            answer: 3,
            explain: "Regular coastal winds can provide a reliable input."
        },
        {
            id: "s9-mcq-114", topic: "energy-sources",
            q: "In a windy coastal town, why might a state electricity grid use a mix of energy sources?",
            options: [
                "Different sources can improve reliability because they work best under different conditions.",
                "A mix means efficiency no longer matters.",
                "Every source makes exactly the same environmental impact.",
                "Using one source only is always safer."
            ],
            answer: 0,
            explain: "A mix can balance changing weather, demand and environmental goals."
        },
        {
            id: "s9-mcq-115", topic: "energy-sources",
            q: "In a windy coastal town, why is hydrogen often described as an energy carrier rather than a primary energy source?",
            options: [
                "It can never be used for fuel cells.",
                "It has to be produced using energy from another source before it can store or deliver energy.",
                "It only exists as a solid.",
                "It is always renewable in every situation."
            ],
            answer: 1,
            explain: "Hydrogen stores energy, but another energy source is needed to make it first."
        },
        {
            id: "s9-mcq-116", topic: "energy-sources",
            q: "Why can output from biomass change from day to day?",
            options: [
                "It breaks the law of conservation of energy.",
                "It becomes non-renewable during school hours.",
                "It still needs careful land use and air-quality management.",
                "Its voltage is always exactly the same."
            ],
            answer: 2,
            explain: "Many renewable sources depend on natural conditions that vary."
        },
        {
            id: "s9-mcq-117", topic: "energy-sources",
            q: "In a windy coastal town, what is one main benefit of battery storage in a renewable energy system?",
            options: [
                "It makes every renewable source run all night without energy input.",
                "It guarantees that no energy will ever be wasted.",
                "It turns a non-renewable source into a renewable one.",
                "It can store energy when production is high and release it later when needed."
            ],
            answer: 3,
            explain: "Storage helps match supply to demand over time."
        },
        {
            id: "s9-mcq-118", topic: "energy-sources",
            q: "In a windy coastal town, which criterion is most useful when fairly comparing a new energy technology with an older one?",
            options: [
                "Cost, reliability, environmental impact and energy output",
                "The colour of the equipment only",
                "The age of the company logo",
                "Whether the device name sounds scientific"
            ],
            answer: 0,
            explain: "Scientific evaluation should use multiple evidence-based criteria."
        },
        {
            id: "s9-mcq-119", topic: "energy-sources",
            q: "In a windy coastal town, why are renewable sources important in plans to reduce greenhouse gas emissions?",
            options: [
                "They never need maintenance or storage planning.",
                "Many of them produce electricity with much lower emissions during operation than fossil fuels.",
                "They can create energy from nothing.",
                "They always work equally well in all locations."
            ],
            answer: 1,
            explain: "Renewable sources can help lower emissions, although each source still has practical limits."
        },
        {
            id: "s9-mcq-120", topic: "energy-sources",
            q: "For a remote cattle station, which energy source is renewable?",
            options: [
                "Natural gas",
                "Diesel",
                "Geothermal",
                "Petrol"
            ],
            answer: 2,
            explain: "Heat from inside Earth can be used."
        },
        {
            id: "s9-mcq-121", topic: "energy-sources",
            q: "On a sunny school roof, a major limitation of using diesel for electricity generation is that:",
            options: [
                "it can only work on windy days",
                "it cannot be transported or stored",
                "it is automatically renewable if demand is high",
                "it is finite and produces air pollution when used"
            ],
            answer: 3,
            explain: "Non-renewable sources are finite and often create environmental problems when used."
        },
        {
            id: "s9-mcq-122", topic: "energy-sources",
            q: "Which option is the best match for a remote sunny town?",
            options: [
                "Solar with battery storage",
                "coal generators with no storage planning",
                "a single diesel generator only",
                "a source chosen only because the equipment looks modern"
            ],
            answer: 0,
            explain: "Sunlight is strong and batteries can store energy for night-time use."
        },
        {
            id: "s9-mcq-123", topic: "energy-sources",
            q: "For a remote cattle station, why might a state electricity grid use a mix of energy sources?",
            options: [
                "A mix means efficiency no longer matters.",
                "Different sources can improve reliability because they work best under different conditions.",
                "Every source makes exactly the same environmental impact.",
                "Using one source only is always safer."
            ],
            answer: 1,
            explain: "A mix can balance changing weather, demand and environmental goals."
        },
        {
            id: "s9-mcq-124", topic: "energy-sources",
            q: "For a remote cattle station, why is hydrogen often described as an energy carrier rather than a primary energy source?",
            options: [
                "It can never be used for fuel cells.",
                "It only exists as a solid.",
                "It has to be produced using energy from another source before it can store or deliver energy.",
                "It is always renewable in every situation."
            ],
            answer: 2,
            explain: "Hydrogen stores energy, but another energy source is needed to make it first."
        },
        {
            id: "s9-mcq-125", topic: "energy-sources",
            q: "Why can output from geothermal change from day to day?",
            options: [
                "It breaks the law of conservation of energy.",
                "It becomes non-renewable during school hours.",
                "Its voltage is always exactly the same.",
                "It suits only some locations."
            ],
            answer: 3,
            explain: "Many renewable sources depend on natural conditions that vary."
        },
        {
            id: "s9-mcq-126", topic: "energy-sources",
            q: "For a remote cattle station, what is one main benefit of battery storage in a renewable energy system?",
            options: [
                "It can store energy when production is high and release it later when needed.",
                "It makes every renewable source run all night without energy input.",
                "It guarantees that no energy will ever be wasted.",
                "It turns a non-renewable source into a renewable one."
            ],
            answer: 0,
            explain: "Storage helps match supply to demand over time."
        },
        {
            id: "s9-mcq-127", topic: "energy-sources",
            q: "For a remote cattle station, which criterion is most useful when fairly comparing a new energy technology with an older one?",
            options: [
                "The colour of the equipment only",
                "Cost, reliability, environmental impact and energy output",
                "The age of the company logo",
                "Whether the device name sounds scientific"
            ],
            answer: 1,
            explain: "Scientific evaluation should use multiple evidence-based criteria."
        },
        {
            id: "s9-mcq-128", topic: "energy-sources",
            q: "For a remote cattle station, why are renewable sources important in plans to reduce greenhouse gas emissions?",
            options: [
                "They never need maintenance or storage planning.",
                "They can create energy from nothing.",
                "Many of them produce electricity with much lower emissions during operation than fossil fuels.",
                "They always work equally well in all locations."
            ],
            answer: 2,
            explain: "Renewable sources can help lower emissions, although each source still has practical limits."
        },
        {
            id: "s9-mcq-129", topic: "energy-sources",
            q: "In a mountain valley community, which energy source is renewable?",
            options: [
                "Diesel",
                "Coal",
                "Petrol",
                "Hydroelectricity"
            ],
            answer: 3,
            explain: "Flowing water can keep spinning turbines."
        },
        {
            id: "s9-mcq-130", topic: "energy-sources",
            q: "A major limitation of using coal for electricity generation is that:",
            options: [
                "it is finite and releases greenhouse gases when burned",
                "it can only work on windy days",
                "it cannot be transported or stored",
                "it is automatically renewable if demand is high"
            ],
            answer: 0,
            explain: "Non-renewable sources are finite and often create environmental problems when used."
        },
        {
            id: "s9-mcq-131", topic: "energy-sources",
            q: "Which option is the best match for an area with volcanic heat near the surface?",
            options: [
                "coal generators with no storage planning",
                "Geothermal energy",
                "a single diesel generator only",
                "a source chosen only because the equipment looks modern"
            ],
            answer: 1,
            explain: "Earth's heat can be used more directly there."
        },
        {
            id: "s9-mcq-132", topic: "energy-sources",
            q: "In a mountain valley community, why might a state electricity grid use a mix of energy sources?",
            options: [
                "A mix means efficiency no longer matters.",
                "Every source makes exactly the same environmental impact.",
                "Different sources can improve reliability because they work best under different conditions.",
                "Using one source only is always safer."
            ],
            answer: 2,
            explain: "A mix can balance changing weather, demand and environmental goals."
        },
        {
            id: "s9-mcq-133", topic: "energy-sources",
            q: "In a mountain valley community, why is hydrogen often described as an energy carrier rather than a primary energy source?",
            options: [
                "It can never be used for fuel cells.",
                "It only exists as a solid.",
                "It is always renewable in every situation.",
                "It has to be produced using energy from another source before it can store or deliver energy."
            ],
            answer: 3,
            explain: "Hydrogen stores energy, but another energy source is needed to make it first."
        },
        {
            id: "s9-mcq-134", topic: "energy-sources",
            q: "Why can output from hydroelectricity change from day to day?",
            options: [
                "It depends on suitable water flow and dams.",
                "It breaks the law of conservation of energy.",
                "It becomes non-renewable during school hours.",
                "Its voltage is always exactly the same."
            ],
            answer: 0,
            explain: "Many renewable sources depend on natural conditions that vary."
        },
        {
            id: "s9-mcq-135", topic: "energy-sources",
            q: "In a mountain valley community, what is one main benefit of battery storage in a renewable energy system?",
            options: [
                "It makes every renewable source run all night without energy input.",
                "It can store energy when production is high and release it later when needed.",
                "It guarantees that no energy will ever be wasted.",
                "It turns a non-renewable source into a renewable one."
            ],
            answer: 1,
            explain: "Storage helps match supply to demand over time."
        },
        {
            id: "s9-mcq-136", topic: "energy-sources",
            q: "In a mountain valley community, which criterion is most useful when fairly comparing a new energy technology with an older one?",
            options: [
                "The colour of the equipment only",
                "The age of the company logo",
                "Cost, reliability, environmental impact and energy output",
                "Whether the device name sounds scientific"
            ],
            answer: 2,
            explain: "Scientific evaluation should use multiple evidence-based criteria."
        },
        {
            id: "s9-mcq-137", topic: "energy-sources",
            q: "In a mountain valley community, why are renewable sources important in plans to reduce greenhouse gas emissions?",
            options: [
                "They never need maintenance or storage planning.",
                "They can create energy from nothing.",
                "They always work equally well in all locations.",
                "Many of them produce electricity with much lower emissions during operation than fossil fuels."
            ],
            answer: 3,
            explain: "Renewable sources can help lower emissions, although each source still has practical limits."
        },
        {
            id: "s9-mcq-138", topic: "energy-sources",
            q: "On an island microgrid, which energy source is renewable?",
            options: [
                "Wind",
                "Coal",
                "Diesel",
                "Petrol"
            ],
            answer: 0,
            explain: "Moving air can keep turning turbines."
        },
        {
            id: "s9-mcq-139", topic: "energy-sources",
            q: "In a windy coastal town, a major limitation of using oil for electricity generation is that:",
            options: [
                "it can only work on windy days",
                "it is finite and burning it adds greenhouse gases to the atmosphere",
                "it cannot be transported or stored",
                "it is automatically renewable if demand is high"
            ],
            answer: 1,
            explain: "Non-renewable sources are finite and often create environmental problems when used."
        },
        {
            id: "s9-mcq-140", topic: "energy-sources",
            q: "Which option is the best match for a city trying to lower peak demand?",
            options: [
                "coal generators with no storage planning",
                "a single diesel generator only",
                "Battery storage paired with renewables",
                "a source chosen only because the equipment looks modern"
            ],
            answer: 2,
            explain: "Stored energy can be released when demand is high."
        },
        {
            id: "s9-mcq-141", topic: "energy-sources",
            q: "On an island microgrid, why might a state electricity grid use a mix of energy sources?",
            options: [
                "A mix means efficiency no longer matters.",
                "Every source makes exactly the same environmental impact.",
                "Using one source only is always safer.",
                "Different sources can improve reliability because they work best under different conditions."
            ],
            answer: 3,
            explain: "A mix can balance changing weather, demand and environmental goals."
        },
        {
            id: "s9-mcq-142", topic: "energy-sources",
            q: "On an island microgrid, why is hydrogen often described as an energy carrier rather than a primary energy source?",
            options: [
                "It has to be produced using energy from another source before it can store or deliver energy.",
                "It can never be used for fuel cells.",
                "It only exists as a solid.",
                "It is always renewable in every situation."
            ],
            answer: 0,
            explain: "Hydrogen stores energy, but another energy source is needed to make it first."
        },
        {
            id: "s9-mcq-143", topic: "energy-sources",
            q: "Why can output from wind change from day to day?",
            options: [
                "It breaks the law of conservation of energy.",
                "Output depends on wind speed.",
                "It becomes non-renewable during school hours.",
                "Its voltage is always exactly the same."
            ],
            answer: 1,
            explain: "Many renewable sources depend on natural conditions that vary."
        },
        {
            id: "s9-mcq-144", topic: "energy-sources",
            q: "On an island microgrid, what is one main benefit of battery storage in a renewable energy system?",
            options: [
                "It makes every renewable source run all night without energy input.",
                "It guarantees that no energy will ever be wasted.",
                "It can store energy when production is high and release it later when needed.",
                "It turns a non-renewable source into a renewable one."
            ],
            answer: 2,
            explain: "Storage helps match supply to demand over time."
        },
        {
            id: "s9-mcq-145", topic: "energy-sources",
            q: "On an island microgrid, which criterion is most useful when fairly comparing a new energy technology with an older one?",
            options: [
                "The colour of the equipment only",
                "The age of the company logo",
                "Whether the device name sounds scientific",
                "Cost, reliability, environmental impact and energy output"
            ],
            answer: 3,
            explain: "Scientific evaluation should use multiple evidence-based criteria."
        },
        {
            id: "s9-mcq-146", topic: "energy-sources",
            q: "On an island microgrid, why are renewable sources important in plans to reduce greenhouse gas emissions?",
            options: [
                "Many of them produce electricity with much lower emissions during operation than fossil fuels.",
                "They never need maintenance or storage planning.",
                "They can create energy from nothing.",
                "They always work equally well in all locations."
            ],
            answer: 0,
            explain: "Renewable sources can help lower emissions, although each source still has practical limits."
        },
        {
            id: "s9-mcq-147", topic: "energy-sources",
            q: "For a suburban battery project, which energy source is renewable?",
            options: [
                "Oil",
                "Solar",
                "Diesel",
                "Petrol"
            ],
            answer: 1,
            explain: "Sunlight is replenished naturally."
        },
        {
            id: "s9-mcq-148", topic: "energy-sources",
            q: "In a windy coastal town, a major limitation of using natural gas for electricity generation is that:",
            options: [
                "it can only work on windy days",
                "it cannot be transported or stored",
                "it is finite and methane leaks can worsen climate change",
                "it is automatically renewable if demand is high"
            ],
            answer: 2,
            explain: "Non-renewable sources are finite and often create environmental problems when used."
        },
        {
            id: "s9-mcq-149", topic: "energy-sources",
            q: "In a windy coastal town, which option is the best match for a mountain region with large rivers?",
            options: [
                "coal generators with no storage planning",
                "a single diesel generator only",
                "a source chosen only because the equipment looks modern",
                "Hydroelectricity"
            ],
            answer: 3,
            explain: "Flowing water can spin turbines continuously."
        },
        {
            id: "s9-mcq-150", topic: "energy-sources",
            q: "For a suburban battery project, why might a state electricity grid use a mix of energy sources?",
            options: [
                "Different sources can improve reliability because they work best under different conditions.",
                "A mix means efficiency no longer matters.",
                "Every source makes exactly the same environmental impact.",
                "Using one source only is always safer."
            ],
            answer: 0,
            explain: "A mix can balance changing weather, demand and environmental goals."
        },
        {
            id: "s9-mcq-151", topic: "energy-sources",
            q: "For a suburban battery project, why is hydrogen often described as an energy carrier rather than a primary energy source?",
            options: [
                "It can never be used for fuel cells.",
                "It has to be produced using energy from another source before it can store or deliver energy.",
                "It only exists as a solid.",
                "It is always renewable in every situation."
            ],
            answer: 1,
            explain: "Hydrogen stores energy, but another energy source is needed to make it first."
        },
        {
            id: "s9-mcq-152", topic: "energy-sources",
            q: "In a windy coastal town, why can output from solar change from day to day?",
            options: [
                "It breaks the law of conservation of energy.",
                "It becomes non-renewable during school hours.",
                "Output drops when sunlight is weak.",
                "Its voltage is always exactly the same."
            ],
            answer: 2,
            explain: "Many renewable sources depend on natural conditions that vary."
        },
        {
            id: "s9-mcq-153", topic: "energy-sources",
            q: "For a suburban battery project, what is one main benefit of battery storage in a renewable energy system?",
            options: [
                "It makes every renewable source run all night without energy input.",
                "It guarantees that no energy will ever be wasted.",
                "It turns a non-renewable source into a renewable one.",
                "It can store energy when production is high and release it later when needed."
            ],
            answer: 3,
            explain: "Storage helps match supply to demand over time."
        },
        {
            id: "s9-mcq-154", topic: "energy-sources",
            q: "For a suburban battery project, which criterion is most useful when fairly comparing a new energy technology with an older one?",
            options: [
                "Cost, reliability, environmental impact and energy output",
                "The colour of the equipment only",
                "The age of the company logo",
                "Whether the device name sounds scientific"
            ],
            answer: 0,
            explain: "Scientific evaluation should use multiple evidence-based criteria."
        },
        {
            id: "s9-mcq-155", topic: "energy-sources",
            q: "For a suburban battery project, why are renewable sources important in plans to reduce greenhouse gas emissions?",
            options: [
                "They never need maintenance or storage planning.",
                "Many of them produce electricity with much lower emissions during operation than fossil fuels.",
                "They can create energy from nothing.",
                "They always work equally well in all locations."
            ],
            answer: 1,
            explain: "Renewable sources can help lower emissions, although each source still has practical limits."
        },
        {
            id: "s9-mcq-156", topic: "energy-sources",
            q: "At a desert research base, which energy source is renewable?",
            options: [
                "Natural gas",
                "Diesel",
                "Biomass",
                "Petrol"
            ],
            answer: 2,
            explain: "Organic material can be regrown."
        },
        {
            id: "s9-mcq-157", topic: "energy-sources",
            q: "In a windy coastal town, a major limitation of using diesel for electricity generation is that:",
            options: [
                "it can only work on windy days",
                "it cannot be transported or stored",
                "it is automatically renewable if demand is high",
                "it is finite and produces air pollution when used"
            ],
            answer: 3,
            explain: "Non-renewable sources are finite and often create environmental problems when used."
        },
        {
            id: "s9-mcq-158", topic: "energy-sources",
            q: "In a windy coastal town, which option is the best match for a windy coastal community?",
            options: [
                "Wind turbines",
                "coal generators with no storage planning",
                "a single diesel generator only",
                "a source chosen only because the equipment looks modern"
            ],
            answer: 0,
            explain: "Regular coastal winds can provide a reliable input."
        },
        /* ----- Additional Electrical circuits ----- */
        {
            id: "s9-mcq-159", topic: "electrical-circuits",
            q: "In a torch circuit, current flows in a simple circuit only when the circuit is:",
            options: [
                "closed",
                "open",
                "insulated only",
                "parallel only"
            ],
            answer: 0,
            explain: "A closed circuit gives charge a complete path to move through."
        },
        {
            id: "s9-mcq-160", topic: "electrical-circuits",
            q: "In a torch circuit, if a second identical lamp is added in parallel, what is the most likely result?",
            options: [
                "The supply voltage is automatically doubled.",
                "Each lamp can still receive the supply voltage in its own branch",
                "The circuit creates charge inside the lamp.",
                "Resistance becomes zero in every part of the circuit."
            ],
            answer: 1,
            explain: "The result depends on whether there is still a complete path and how components are arranged."
        },
        {
            id: "s9-mcq-161", topic: "electrical-circuits",
            q: "In a torch circuit, how is an ammeter connected when measuring current through a lamp?",
            options: [
                "Across the lamp in parallel",
                "Outside the circuit with no wires",
                "In series with the lamp",
                "Between the lamp and the bench"
            ],
            answer: 2,
            explain: "An ammeter must be in series so the current being measured flows through it."
        },
        {
            id: "s9-mcq-162", topic: "electrical-circuits",
            q: "In a torch circuit, which pair correctly matches a conductor and an insulator?",
            options: [
                "dry wood and graphite",
                "plastic and copper",
                "glass and aluminium",
                "graphite and dry wood"
            ],
            answer: 3,
            explain: "Conductors allow current to flow more easily, while insulators resist current flow."
        },
        {
            id: "s9-mcq-163", topic: "electrical-circuits",
            q: "In a torch circuit, 3 cells of 1.5 V each are connected in series. What total voltage do they supply?",
            options: [
                "4.5 V",
                "1.5 V",
                "4.0 V",
                "9.0 V"
            ],
            answer: 0,
            explain: "Voltages add when cells are connected in series."
        },
        {
            id: "s9-mcq-164", topic: "electrical-circuits",
            q: "In a torch circuit, what is the main job of a fuse or circuit breaker in a household circuit?",
            options: [
                "To make lamps brighter",
                "To stop the current if it becomes dangerously high",
                "To store extra electrical energy",
                "To increase voltage to every appliance"
            ],
            answer: 1,
            explain: "These devices improve safety by breaking the circuit during dangerous current levels."
        },
        {
            id: "s9-mcq-165", topic: "electrical-circuits",
            q: "In a torch circuit, why are household lights usually connected in parallel?",
            options: [
                "Parallel circuits remove the need for switches.",
                "Parallel circuits always use no energy.",
                "Each light can work independently and receive the supply voltage across its branch.",
                "A broken lamp then makes every other lamp brighter."
            ],
            answer: 2,
            explain: "Parallel branches let other lamps keep working if one lamp fails."
        },
        {
            id: "s9-mcq-166", topic: "electrical-circuits",
            q: "In a torch circuit, a voltmeter is usually connected:",
            options: [
                "in series with the component",
                "next to the battery without wires",
                "outside the circuit only",
                "across the component in parallel"
            ],
            answer: 3,
            explain: "A voltmeter measures potential difference across a component, so it is connected in parallel."
        },
        {
            id: "s9-mcq-167", topic: "electrical-circuits",
            q: "In a torch circuit, which statement about switches in a circuit is correct?",
            options: [
                "Opening a switch breaks the circuit path and stops current.",
                "Opening a switch doubles the current.",
                "A switch can only be used in a parallel circuit.",
                "A switch stores charge like a battery."
            ],
            answer: 0,
            explain: "A switch controls whether the path is complete or broken."
        },
        {
            id: "s9-mcq-168", topic: "electrical-circuits",
            q: "For caravan fairy lights, current flows in a simple circuit only when the circuit is:",
            options: [
                "open",
                "closed",
                "insulated only",
                "parallel only"
            ],
            answer: 1,
            explain: "A closed circuit gives charge a complete path to move through."
        },
        {
            id: "s9-mcq-169", topic: "electrical-circuits",
            q: "In a torch circuit, if a switch is opened, what is the most likely result?",
            options: [
                "The supply voltage is automatically doubled.",
                "The circuit creates charge inside the lamp.",
                "Current stops because the circuit path is broken",
                "Resistance becomes zero in every part of the circuit."
            ],
            answer: 2,
            explain: "The result depends on whether there is still a complete path and how components are arranged."
        },
        {
            id: "s9-mcq-170", topic: "electrical-circuits",
            q: "For caravan fairy lights, how is an ammeter connected when measuring current through a lamp?",
            options: [
                "Across the lamp in parallel",
                "Outside the circuit with no wires",
                "Between the lamp and the bench",
                "In series with the lamp"
            ],
            answer: 3,
            explain: "An ammeter must be in series so the current being measured flows through it."
        },
        {
            id: "s9-mcq-171", topic: "electrical-circuits",
            q: "For caravan fairy lights, which pair correctly matches a conductor and an insulator?",
            options: [
                "copper and rubber",
                "rubber and copper",
                "plastic and copper",
                "glass and aluminium"
            ],
            answer: 0,
            explain: "Conductors allow current to flow more easily, while insulators resist current flow."
        },
        {
            id: "s9-mcq-172", topic: "electrical-circuits",
            q: "For caravan fairy lights, 3 cells of 1.5 V each are connected in series. What total voltage do they supply?",
            options: [
                "1.5 V",
                "4.5 V",
                "4.0 V",
                "9.0 V"
            ],
            answer: 1,
            explain: "Voltages add when cells are connected in series."
        },
        {
            id: "s9-mcq-173", topic: "electrical-circuits",
            q: "For caravan fairy lights, what is the main job of a fuse or circuit breaker in a household circuit?",
            options: [
                "To make lamps brighter",
                "To store extra electrical energy",
                "To stop the current if it becomes dangerously high",
                "To increase voltage to every appliance"
            ],
            answer: 2,
            explain: "These devices improve safety by breaking the circuit during dangerous current levels."
        },
        {
            id: "s9-mcq-174", topic: "electrical-circuits",
            q: "For caravan fairy lights, why are household lights usually connected in parallel?",
            options: [
                "Parallel circuits remove the need for switches.",
                "Parallel circuits always use no energy.",
                "A broken lamp then makes every other lamp brighter.",
                "Each light can work independently and receive the supply voltage across its branch."
            ],
            answer: 3,
            explain: "Parallel branches let other lamps keep working if one lamp fails."
        },
        {
            id: "s9-mcq-175", topic: "electrical-circuits",
            q: "For caravan fairy lights, a voltmeter is usually connected:",
            options: [
                "across the component in parallel",
                "in series with the component",
                "next to the battery without wires",
                "outside the circuit only"
            ],
            answer: 0,
            explain: "A voltmeter measures potential difference across a component, so it is connected in parallel."
        },
        {
            id: "s9-mcq-176", topic: "electrical-circuits",
            q: "For caravan fairy lights, which statement about switches in a circuit is correct?",
            options: [
                "Opening a switch doubles the current.",
                "Opening a switch breaks the circuit path and stops current.",
                "A switch can only be used in a parallel circuit.",
                "A switch stores charge like a battery."
            ],
            answer: 1,
            explain: "A switch controls whether the path is complete or broken."
        },
        {
            id: "s9-mcq-177", topic: "electrical-circuits",
            q: "In a classroom lamp test, current flows in a simple circuit only when the circuit is:",
            options: [
                "open",
                "insulated only",
                "closed",
                "parallel only"
            ],
            answer: 2,
            explain: "A closed circuit gives charge a complete path to move through."
        },
        {
            id: "s9-mcq-178", topic: "electrical-circuits",
            q: "In a torch circuit, if one parallel lamp breaks, what is the most likely result?",
            options: [
                "The supply voltage is automatically doubled.",
                "The circuit creates charge inside the lamp.",
                "Resistance becomes zero in every part of the circuit.",
                "The other branch can still work because it has a separate path"
            ],
            answer: 3,
            explain: "The result depends on whether there is still a complete path and how components are arranged."
        },
        {
            id: "s9-mcq-179", topic: "electrical-circuits",
            q: "In a classroom lamp test, how is an ammeter connected when measuring current through a lamp?",
            options: [
                "In series with the lamp",
                "Across the lamp in parallel",
                "Outside the circuit with no wires",
                "Between the lamp and the bench"
            ],
            answer: 0,
            explain: "An ammeter must be in series so the current being measured flows through it."
        },
        {
            id: "s9-mcq-180", topic: "electrical-circuits",
            q: "In a classroom lamp test, which pair correctly matches a conductor and an insulator?",
            options: [
                "plastic and aluminium",
                "aluminium and plastic",
                "plastic and copper",
                "glass and aluminium"
            ],
            answer: 1,
            explain: "Conductors allow current to flow more easily, while insulators resist current flow."
        },
        {
            id: "s9-mcq-181", topic: "electrical-circuits",
            q: "In a classroom lamp test, 3 cells of 1.5 V each are connected in series. What total voltage do they supply?",
            options: [
                "1.5 V",
                "4.0 V",
                "4.5 V",
                "9.0 V"
            ],
            answer: 2,
            explain: "Voltages add when cells are connected in series."
        },
        {
            id: "s9-mcq-182", topic: "electrical-circuits",
            q: "In a classroom lamp test, what is the main job of a fuse or circuit breaker in a household circuit?",
            options: [
                "To make lamps brighter",
                "To store extra electrical energy",
                "To increase voltage to every appliance",
                "To stop the current if it becomes dangerously high"
            ],
            answer: 3,
            explain: "These devices improve safety by breaking the circuit during dangerous current levels."
        },
        {
            id: "s9-mcq-183", topic: "electrical-circuits",
            q: "In a classroom lamp test, why are household lights usually connected in parallel?",
            options: [
                "Each light can work independently and receive the supply voltage across its branch.",
                "Parallel circuits remove the need for switches.",
                "Parallel circuits always use no energy.",
                "A broken lamp then makes every other lamp brighter."
            ],
            answer: 0,
            explain: "Parallel branches let other lamps keep working if one lamp fails."
        },
        {
            id: "s9-mcq-184", topic: "electrical-circuits",
            q: "In a classroom lamp test, a voltmeter is usually connected:",
            options: [
                "in series with the component",
                "across the component in parallel",
                "next to the battery without wires",
                "outside the circuit only"
            ],
            answer: 1,
            explain: "A voltmeter measures potential difference across a component, so it is connected in parallel."
        },
        {
            id: "s9-mcq-185", topic: "electrical-circuits",
            q: "In a classroom lamp test, which statement about switches in a circuit is correct?",
            options: [
                "Opening a switch doubles the current.",
                "A switch can only be used in a parallel circuit.",
                "Opening a switch breaks the circuit path and stops current.",
                "A switch stores charge like a battery."
            ],
            answer: 2,
            explain: "A switch controls whether the path is complete or broken."
        },
        {
            id: "s9-mcq-186", topic: "electrical-circuits",
            q: "For a bike-light repair, current flows in a simple circuit only when the circuit is:",
            options: [
                "open",
                "insulated only",
                "parallel only",
                "closed"
            ],
            answer: 3,
            explain: "A closed circuit gives charge a complete path to move through."
        },
        {
            id: "s9-mcq-187", topic: "electrical-circuits",
            q: "If a second identical lamp is added in series, what is the most likely result?",
            options: [
                "Both lamps usually become dimmer because total resistance increases",
                "The supply voltage is automatically doubled.",
                "The circuit creates charge inside the lamp.",
                "Resistance becomes zero in every part of the circuit."
            ],
            answer: 0,
            explain: "The result depends on whether there is still a complete path and how components are arranged."
        },
        {
            id: "s9-mcq-188", topic: "electrical-circuits",
            q: "For a bike-light repair, how is an ammeter connected when measuring current through a lamp?",
            options: [
                "Across the lamp in parallel",
                "In series with the lamp",
                "Outside the circuit with no wires",
                "Between the lamp and the bench"
            ],
            answer: 1,
            explain: "An ammeter must be in series so the current being measured flows through it."
        },
        {
            id: "s9-mcq-189", topic: "electrical-circuits",
            q: "For a bike-light repair, which pair correctly matches a conductor and an insulator?",
            options: [
                "glass and steel",
                "plastic and copper",
                "steel and glass",
                "glass and aluminium"
            ],
            answer: 2,
            explain: "Conductors allow current to flow more easily, while insulators resist current flow."
        },
        {
            id: "s9-mcq-190", topic: "electrical-circuits",
            q: "For a bike-light repair, 3 cells of 1.5 V each are connected in series. What total voltage do they supply?",
            options: [
                "1.5 V",
                "4.0 V",
                "9.0 V",
                "4.5 V"
            ],
            answer: 3,
            explain: "Voltages add when cells are connected in series."
        },
        {
            id: "s9-mcq-191", topic: "electrical-circuits",
            q: "For a bike-light repair, what is the main job of a fuse or circuit breaker in a household circuit?",
            options: [
                "To stop the current if it becomes dangerously high",
                "To make lamps brighter",
                "To store extra electrical energy",
                "To increase voltage to every appliance"
            ],
            answer: 0,
            explain: "These devices improve safety by breaking the circuit during dangerous current levels."
        },
        {
            id: "s9-mcq-192", topic: "electrical-circuits",
            q: "For a bike-light repair, why are household lights usually connected in parallel?",
            options: [
                "Parallel circuits remove the need for switches.",
                "Each light can work independently and receive the supply voltage across its branch.",
                "Parallel circuits always use no energy.",
                "A broken lamp then makes every other lamp brighter."
            ],
            answer: 1,
            explain: "Parallel branches let other lamps keep working if one lamp fails."
        },
        {
            id: "s9-mcq-193", topic: "electrical-circuits",
            q: "For a bike-light repair, a voltmeter is usually connected:",
            options: [
                "in series with the component",
                "next to the battery without wires",
                "across the component in parallel",
                "outside the circuit only"
            ],
            answer: 2,
            explain: "A voltmeter measures potential difference across a component, so it is connected in parallel."
        },
        {
            id: "s9-mcq-194", topic: "electrical-circuits",
            q: "For a bike-light repair, which statement about switches in a circuit is correct?",
            options: [
                "Opening a switch doubles the current.",
                "A switch can only be used in a parallel circuit.",
                "A switch stores charge like a battery.",
                "Opening a switch breaks the circuit path and stops current."
            ],
            answer: 3,
            explain: "A switch controls whether the path is complete or broken."
        },
        {
            id: "s9-mcq-195", topic: "electrical-circuits",
            q: "In a model-house wiring task, current flows in a simple circuit only when the circuit is:",
            options: [
                "closed",
                "open",
                "insulated only",
                "parallel only"
            ],
            answer: 0,
            explain: "A closed circuit gives charge a complete path to move through."
        },
        {
            id: "s9-mcq-196", topic: "electrical-circuits",
            q: "For caravan fairy lights, if a second identical lamp is added in parallel, what is the most likely result?",
            options: [
                "The supply voltage is automatically doubled.",
                "Each lamp can still receive the supply voltage in its own branch",
                "The circuit creates charge inside the lamp.",
                "Resistance becomes zero in every part of the circuit."
            ],
            answer: 1,
            explain: "The result depends on whether there is still a complete path and how components are arranged."
        },
        {
            id: "s9-mcq-197", topic: "electrical-circuits",
            q: "In a model-house wiring task, how is an ammeter connected when measuring current through a lamp?",
            options: [
                "Across the lamp in parallel",
                "Outside the circuit with no wires",
                "In series with the lamp",
                "Between the lamp and the bench"
            ],
            answer: 2,
            explain: "An ammeter must be in series so the current being measured flows through it."
        },
        {
            id: "s9-mcq-198", topic: "electrical-circuits",
            q: "In a model-house wiring task, which pair correctly matches a conductor and an insulator?",
            options: [
                "dry wood and graphite",
                "plastic and copper",
                "glass and aluminium",
                "graphite and dry wood"
            ],
            answer: 3,
            explain: "Conductors allow current to flow more easily, while insulators resist current flow."
        },
        {
            id: "s9-mcq-199", topic: "electrical-circuits",
            q: "In a model-house wiring task, 3 cells of 1.5 V each are connected in series. What total voltage do they supply?",
            options: [
                "4.5 V",
                "1.5 V",
                "4.0 V",
                "9.0 V"
            ],
            answer: 0,
            explain: "Voltages add when cells are connected in series."
        },
        {
            id: "s9-mcq-200", topic: "electrical-circuits",
            q: "In a model-house wiring task, what is the main job of a fuse or circuit breaker in a household circuit?",
            options: [
                "To make lamps brighter",
                "To stop the current if it becomes dangerously high",
                "To store extra electrical energy",
                "To increase voltage to every appliance"
            ],
            answer: 1,
            explain: "These devices improve safety by breaking the circuit during dangerous current levels."
        },
        {
            id: "s9-mcq-201", topic: "electrical-circuits",
            q: "In a model-house wiring task, why are household lights usually connected in parallel?",
            options: [
                "Parallel circuits remove the need for switches.",
                "Parallel circuits always use no energy.",
                "Each light can work independently and receive the supply voltage across its branch.",
                "A broken lamp then makes every other lamp brighter."
            ],
            answer: 2,
            explain: "Parallel branches let other lamps keep working if one lamp fails."
        },
        {
            id: "s9-mcq-202", topic: "electrical-circuits",
            q: "In a model-house wiring task, a voltmeter is usually connected:",
            options: [
                "in series with the component",
                "next to the battery without wires",
                "outside the circuit only",
                "across the component in parallel"
            ],
            answer: 3,
            explain: "A voltmeter measures potential difference across a component, so it is connected in parallel."
        },
        {
            id: "s9-mcq-203", topic: "electrical-circuits",
            q: "In a model-house wiring task, which statement about switches in a circuit is correct?",
            options: [
                "Opening a switch breaks the circuit path and stops current.",
                "Opening a switch doubles the current.",
                "A switch can only be used in a parallel circuit.",
                "A switch stores charge like a battery."
            ],
            answer: 0,
            explain: "A switch controls whether the path is complete or broken."
        },
        {
            id: "s9-mcq-204", topic: "electrical-circuits",
            q: "For a series-and-parallel lab, current flows in a simple circuit only when the circuit is:",
            options: [
                "open",
                "closed",
                "insulated only",
                "parallel only"
            ],
            answer: 1,
            explain: "A closed circuit gives charge a complete path to move through."
        },
        {
            id: "s9-mcq-205", topic: "electrical-circuits",
            q: "For caravan fairy lights, if a switch is opened, what is the most likely result?",
            options: [
                "The supply voltage is automatically doubled.",
                "The circuit creates charge inside the lamp.",
                "Current stops because the circuit path is broken",
                "Resistance becomes zero in every part of the circuit."
            ],
            answer: 2,
            explain: "The result depends on whether there is still a complete path and how components are arranged."
        },
        {
            id: "s9-mcq-206", topic: "electrical-circuits",
            q: "For a series-and-parallel lab, how is an ammeter connected when measuring current through a lamp?",
            options: [
                "Across the lamp in parallel",
                "Outside the circuit with no wires",
                "Between the lamp and the bench",
                "In series with the lamp"
            ],
            answer: 3,
            explain: "An ammeter must be in series so the current being measured flows through it."
        },
        {
            id: "s9-mcq-207", topic: "electrical-circuits",
            q: "For a series-and-parallel lab, which pair correctly matches a conductor and an insulator?",
            options: [
                "copper and rubber",
                "rubber and copper",
                "plastic and copper",
                "glass and aluminium"
            ],
            answer: 0,
            explain: "Conductors allow current to flow more easily, while insulators resist current flow."
        },
        {
            id: "s9-mcq-208", topic: "electrical-circuits",
            q: "For a series-and-parallel lab, 3 cells of 1.5 V each are connected in series. What total voltage do they supply?",
            options: [
                "1.5 V",
                "4.5 V",
                "4.0 V",
                "9.0 V"
            ],
            answer: 1,
            explain: "Voltages add when cells are connected in series."
        },
        {
            id: "s9-mcq-209", topic: "electrical-circuits",
            q: "For a series-and-parallel lab, what is the main job of a fuse or circuit breaker in a household circuit?",
            options: [
                "To make lamps brighter",
                "To store extra electrical energy",
                "To stop the current if it becomes dangerously high",
                "To increase voltage to every appliance"
            ],
            answer: 2,
            explain: "These devices improve safety by breaking the circuit during dangerous current levels."
        },
        {
            id: "s9-mcq-210", topic: "electrical-circuits",
            q: "For a series-and-parallel lab, why are household lights usually connected in parallel?",
            options: [
                "Parallel circuits remove the need for switches.",
                "Parallel circuits always use no energy.",
                "A broken lamp then makes every other lamp brighter.",
                "Each light can work independently and receive the supply voltage across its branch."
            ],
            answer: 3,
            explain: "Parallel branches let other lamps keep working if one lamp fails."
        },
        {
            id: "s9-mcq-211", topic: "electrical-circuits",
            q: "For a series-and-parallel lab, a voltmeter is usually connected:",
            options: [
                "across the component in parallel",
                "in series with the component",
                "next to the battery without wires",
                "outside the circuit only"
            ],
            answer: 0,
            explain: "A voltmeter measures potential difference across a component, so it is connected in parallel."
        },
        {
            id: "s9-mcq-212", topic: "electrical-circuits",
            q: "For a series-and-parallel lab, which statement about switches in a circuit is correct?",
            options: [
                "Opening a switch doubles the current.",
                "Opening a switch breaks the circuit path and stops current.",
                "A switch can only be used in a parallel circuit.",
                "A switch stores charge like a battery."
            ],
            answer: 1,
            explain: "A switch controls whether the path is complete or broken."
        },
        {
            id: "s9-mcq-213", topic: "electrical-circuits",
            q: "In a school safety audit, current flows in a simple circuit only when the circuit is:",
            options: [
                "open",
                "insulated only",
                "closed",
                "parallel only"
            ],
            answer: 2,
            explain: "A closed circuit gives charge a complete path to move through."
        },
        {
            id: "s9-mcq-214", topic: "electrical-circuits",
            q: "For caravan fairy lights, if one parallel lamp breaks, what is the most likely result?",
            options: [
                "The supply voltage is automatically doubled.",
                "The circuit creates charge inside the lamp.",
                "Resistance becomes zero in every part of the circuit.",
                "The other branch can still work because it has a separate path"
            ],
            answer: 3,
            explain: "The result depends on whether there is still a complete path and how components are arranged."
        },
        {
            id: "s9-mcq-215", topic: "electrical-circuits",
            q: "In a school safety audit, how is an ammeter connected when measuring current through a lamp?",
            options: [
                "In series with the lamp",
                "Across the lamp in parallel",
                "Outside the circuit with no wires",
                "Between the lamp and the bench"
            ],
            answer: 0,
            explain: "An ammeter must be in series so the current being measured flows through it."
        },
        /* ----- Additional Ohm's law ----- */
        {
            id: "s9-mcq-216", topic: "ohms-law",
            q: "In a resistor lab, a resistor has 6 V across it and a current of 2 A. What is its resistance?",
            options: [
                "3 ohms",
                "2 ohms",
                "6 ohms",
                "8 ohms"
            ],
            answer: 0,
            explain: "Using V = IR, resistance equals voltage divided by current."
        },
        {
            id: "s9-mcq-217", topic: "ohms-law",
            q: "In a resistor lab, a resistor has a resistance of 3 ohms and a voltage of 9 V. What current flows?",
            options: [
                "2 A",
                "3 A",
                "9 A",
                "4 A"
            ],
            answer: 1,
            explain: "Using I = V / R gives the current."
        },
        {
            id: "s9-mcq-218", topic: "ohms-law",
            q: "In a resistor lab, a current of 4 A passes through a resistor of 3 ohms. What voltage is across it?",
            options: [
                "4 V",
                "3 V",
                "12 V",
                "8 V"
            ],
            answer: 2,
            explain: "Voltage equals current multiplied by resistance."
        },
        {
            id: "s9-mcq-219", topic: "ohms-law",
            q: "In a resistor lab, if voltage stays the same but resistance doubles, the current will:",
            options: [
                "double",
                "stay the same",
                "become an ohm",
                "halve"
            ],
            answer: 3,
            explain: "Current is inversely proportional to resistance when voltage is constant."
        },
        {
            id: "s9-mcq-220", topic: "ohms-law",
            q: "In a resistor lab, if resistance stays the same and voltage increases, the current in an ohmic resistor will:",
            options: [
                "increase",
                "decrease",
                "stay exactly the same",
                "reverse direction"
            ],
            answer: 0,
            explain: "For an ohmic resistor, higher voltage leads to higher current when resistance is constant."
        },
        {
            id: "s9-mcq-221", topic: "ohms-law",
            q: "In a resistor lab, the unit of electrical resistance is:",
            options: [
                "ampere",
                "ohm",
                "volt",
                "joule"
            ],
            answer: 1,
            explain: "Resistance is measured in ohms."
        },
        {
            id: "s9-mcq-222", topic: "ohms-law",
            q: "In a resistor lab, which observation suggests a component follows Ohm's law?",
            options: [
                "Its current stays at zero for every voltage.",
                "Its resistance changes randomly at each reading.",
                "Its current-voltage graph is a straight line through the origin.",
                "Its graph is a circle."
            ],
            answer: 2,
            explain: "A straight line through the origin shows current is directly proportional to voltage."
        },
        {
            id: "s9-mcq-223", topic: "ohms-law",
            q: "In a resistor lab, two resistors are connected one at a time to the same supply. The resistor with the greater resistance will usually have:",
            options: [
                "the larger current",
                "exactly the same current whatever its value",
                "a negative current automatically",
                "the smaller current"
            ],
            answer: 3,
            explain: "At the same voltage, higher resistance means lower current."
        },
        {
            id: "s9-mcq-224", topic: "ohms-law",
            q: "In a resistor lab, why does a longer thin wire usually have a greater resistance than a shorter thick wire of the same material?",
            options: [
                "Charge has a longer path and less cross-sectional area to move through easily.",
                "It contains more voltage.",
                "It becomes a better conductor automatically.",
                "Ohm's law stops applying to wires."
            ],
            answer: 0,
            explain: "Resistance depends on material, length and thickness."
        },
        {
            id: "s9-mcq-225", topic: "ohms-law",
            q: "In a resistor lab, a resistor has 15 V across it and a current of 3 A. What is its resistance?",
            options: [
                "3 ohms",
                "5 ohms",
                "15 ohms",
                "18 ohms"
            ],
            answer: 1,
            explain: "Using V = IR, resistance equals voltage divided by current."
        },
        {
            id: "s9-mcq-226", topic: "ohms-law",
            q: "In a resistor lab, a resistor has a resistance of 4 ohms and a voltage of 20 V. What current flows?",
            options: [
                "4 A",
                "20 A",
                "5 A",
                "6 A"
            ],
            answer: 2,
            explain: "Using I = V / R gives the current."
        },
        {
            id: "s9-mcq-227", topic: "ohms-law",
            q: "In a resistor lab, a current of 6 A passes through a resistor of 4 ohms. What voltage is across it?",
            options: [
                "6 V",
                "4 V",
                "18 V",
                "24 V"
            ],
            answer: 3,
            explain: "Voltage equals current multiplied by resistance."
        },
        {
            id: "s9-mcq-228", topic: "ohms-law",
            q: "For a phone-charger circuit, if voltage stays the same but resistance doubles, the current will:",
            options: [
                "halve",
                "double",
                "stay the same",
                "become an ohm"
            ],
            answer: 0,
            explain: "Current is inversely proportional to resistance when voltage is constant."
        },
        {
            id: "s9-mcq-229", topic: "ohms-law",
            q: "For a phone-charger circuit, if resistance stays the same and voltage increases, the current in an ohmic resistor will:",
            options: [
                "decrease",
                "increase",
                "stay exactly the same",
                "reverse direction"
            ],
            answer: 1,
            explain: "For an ohmic resistor, higher voltage leads to higher current when resistance is constant."
        },
        {
            id: "s9-mcq-230", topic: "ohms-law",
            q: "For a phone-charger circuit, the unit of electrical resistance is:",
            options: [
                "ampere",
                "volt",
                "ohm",
                "joule"
            ],
            answer: 2,
            explain: "Resistance is measured in ohms."
        },
        {
            id: "s9-mcq-231", topic: "ohms-law",
            q: "For a phone-charger circuit, which observation suggests a component follows Ohm's law?",
            options: [
                "Its current stays at zero for every voltage.",
                "Its resistance changes randomly at each reading.",
                "Its graph is a circle.",
                "Its current-voltage graph is a straight line through the origin."
            ],
            answer: 3,
            explain: "A straight line through the origin shows current is directly proportional to voltage."
        },
        {
            id: "s9-mcq-232", topic: "ohms-law",
            q: "For a phone-charger circuit, two resistors are connected one at a time to the same supply. The resistor with the greater resistance will usually have:",
            options: [
                "the smaller current",
                "the larger current",
                "exactly the same current whatever its value",
                "a negative current automatically"
            ],
            answer: 0,
            explain: "At the same voltage, higher resistance means lower current."
        },
        {
            id: "s9-mcq-233", topic: "ohms-law",
            q: "For a phone-charger circuit, why does a longer thin wire usually have a greater resistance than a shorter thick wire of the same material?",
            options: [
                "It contains more voltage.",
                "Charge has a longer path and less cross-sectional area to move through easily.",
                "It becomes a better conductor automatically.",
                "Ohm's law stops applying to wires."
            ],
            answer: 1,
            explain: "Resistance depends on material, length and thickness."
        },
        {
            id: "s9-mcq-234", topic: "ohms-law",
            q: "For a phone-charger circuit, a resistor has 6 V across it and a current of 2 A. What is its resistance?",
            options: [
                "2 ohms",
                "6 ohms",
                "3 ohms",
                "8 ohms"
            ],
            answer: 2,
            explain: "Using V = IR, resistance equals voltage divided by current."
        },
        {
            id: "s9-mcq-235", topic: "ohms-law",
            q: "For a phone-charger circuit, a resistor has a resistance of 3 ohms and a voltage of 9 V. What current flows?",
            options: [
                "2 A",
                "9 A",
                "4 A",
                "3 A"
            ],
            answer: 3,
            explain: "Using I = V / R gives the current."
        },
        {
            id: "s9-mcq-236", topic: "ohms-law",
            q: "For a phone-charger circuit, a current of 4 A passes through a resistor of 3 ohms. What voltage is across it?",
            options: [
                "12 V",
                "4 V",
                "3 V",
                "8 V"
            ],
            answer: 0,
            explain: "Voltage equals current multiplied by resistance."
        },
        {
            id: "s9-mcq-237", topic: "ohms-law",
            q: "In a torch experiment, if voltage stays the same but resistance doubles, the current will:",
            options: [
                "double",
                "halve",
                "stay the same",
                "become an ohm"
            ],
            answer: 1,
            explain: "Current is inversely proportional to resistance when voltage is constant."
        },
        {
            id: "s9-mcq-238", topic: "ohms-law",
            q: "In a torch experiment, if resistance stays the same and voltage increases, the current in an ohmic resistor will:",
            options: [
                "decrease",
                "stay exactly the same",
                "increase",
                "reverse direction"
            ],
            answer: 2,
            explain: "For an ohmic resistor, higher voltage leads to higher current when resistance is constant."
        },
        {
            id: "s9-mcq-239", topic: "ohms-law",
            q: "In a torch experiment, the unit of electrical resistance is:",
            options: [
                "ampere",
                "volt",
                "joule",
                "ohm"
            ],
            answer: 3,
            explain: "Resistance is measured in ohms."
        },
        {
            id: "s9-mcq-240", topic: "ohms-law",
            q: "In a torch experiment, which observation suggests a component follows Ohm's law?",
            options: [
                "Its current-voltage graph is a straight line through the origin.",
                "Its current stays at zero for every voltage.",
                "Its resistance changes randomly at each reading.",
                "Its graph is a circle."
            ],
            answer: 0,
            explain: "A straight line through the origin shows current is directly proportional to voltage."
        },
        {
            id: "s9-mcq-241", topic: "ohms-law",
            q: "In a torch experiment, two resistors are connected one at a time to the same supply. The resistor with the greater resistance will usually have:",
            options: [
                "the larger current",
                "the smaller current",
                "exactly the same current whatever its value",
                "a negative current automatically"
            ],
            answer: 1,
            explain: "At the same voltage, higher resistance means lower current."
        },
        {
            id: "s9-mcq-242", topic: "ohms-law",
            q: "In a torch experiment, why does a longer thin wire usually have a greater resistance than a shorter thick wire of the same material?",
            options: [
                "It contains more voltage.",
                "It becomes a better conductor automatically.",
                "Charge has a longer path and less cross-sectional area to move through easily.",
                "Ohm's law stops applying to wires."
            ],
            answer: 2,
            explain: "Resistance depends on material, length and thickness."
        },
        {
            id: "s9-mcq-243", topic: "ohms-law",
            q: "For a phone-charger circuit, a resistor has 15 V across it and a current of 3 A. What is its resistance?",
            options: [
                "3 ohms",
                "15 ohms",
                "18 ohms",
                "5 ohms"
            ],
            answer: 3,
            explain: "Using V = IR, resistance equals voltage divided by current."
        },
        {
            id: "s9-mcq-244", topic: "ohms-law",
            q: "For a phone-charger circuit, a resistor has a resistance of 4 ohms and a voltage of 20 V. What current flows?",
            options: [
                "5 A",
                "4 A",
                "20 A",
                "6 A"
            ],
            answer: 0,
            explain: "Using I = V / R gives the current."
        },
        {
            id: "s9-mcq-245", topic: "ohms-law",
            q: "For a phone-charger circuit, a current of 6 A passes through a resistor of 4 ohms. What voltage is across it?",
            options: [
                "6 V",
                "24 V",
                "4 V",
                "18 V"
            ],
            answer: 1,
            explain: "Voltage equals current multiplied by resistance."
        },
        {
            id: "s9-mcq-246", topic: "ohms-law",
            q: "For a model-train motor, if voltage stays the same but resistance doubles, the current will:",
            options: [
                "double",
                "stay the same",
                "halve",
                "become an ohm"
            ],
            answer: 2,
            explain: "Current is inversely proportional to resistance when voltage is constant."
        },
        {
            id: "s9-mcq-247", topic: "ohms-law",
            q: "For a model-train motor, if resistance stays the same and voltage increases, the current in an ohmic resistor will:",
            options: [
                "decrease",
                "stay exactly the same",
                "reverse direction",
                "increase"
            ],
            answer: 3,
            explain: "For an ohmic resistor, higher voltage leads to higher current when resistance is constant."
        },
        {
            id: "s9-mcq-248", topic: "ohms-law",
            q: "For a model-train motor, the unit of electrical resistance is:",
            options: [
                "ohm",
                "ampere",
                "volt",
                "joule"
            ],
            answer: 0,
            explain: "Resistance is measured in ohms."
        },
        {
            id: "s9-mcq-249", topic: "ohms-law",
            q: "For a model-train motor, which observation suggests a component follows Ohm's law?",
            options: [
                "Its current stays at zero for every voltage.",
                "Its current-voltage graph is a straight line through the origin.",
                "Its resistance changes randomly at each reading.",
                "Its graph is a circle."
            ],
            answer: 1,
            explain: "A straight line through the origin shows current is directly proportional to voltage."
        },
        {
            id: "s9-mcq-250", topic: "ohms-law",
            q: "For a model-train motor, two resistors are connected one at a time to the same supply. The resistor with the greater resistance will usually have:",
            options: [
                "the larger current",
                "exactly the same current whatever its value",
                "the smaller current",
                "a negative current automatically"
            ],
            answer: 2,
            explain: "At the same voltage, higher resistance means lower current."
        },
        {
            id: "s9-mcq-251", topic: "ohms-law",
            q: "For a model-train motor, why does a longer thin wire usually have a greater resistance than a shorter thick wire of the same material?",
            options: [
                "It contains more voltage.",
                "It becomes a better conductor automatically.",
                "Ohm's law stops applying to wires.",
                "Charge has a longer path and less cross-sectional area to move through easily."
            ],
            answer: 3,
            explain: "Resistance depends on material, length and thickness."
        },
        {
            id: "s9-mcq-252", topic: "ohms-law",
            q: "In a torch experiment, a resistor has 6 V across it and a current of 2 A. What is its resistance?",
            options: [
                "3 ohms",
                "2 ohms",
                "6 ohms",
                "8 ohms"
            ],
            answer: 0,
            explain: "Using V = IR, resistance equals voltage divided by current."
        },
        {
            id: "s9-mcq-253", topic: "ohms-law",
            q: "In a torch experiment, a resistor has a resistance of 3 ohms and a voltage of 9 V. What current flows?",
            options: [
                "1 A",
                "3 A",
                "9 A",
                "4 A"
            ],
            answer: 1,
            explain: "Using I = V / R gives the current."
        },
        {
            id: "s9-mcq-254", topic: "ohms-law",
            q: "In a torch experiment, a current of 4 A passes through a resistor of 3 ohms. What voltage is across it?",
            options: [
                "4 V",
                "3 V",
                "12 V",
                "8 V"
            ],
            answer: 2,
            explain: "Voltage equals current multiplied by resistance."
        },
        {
            id: "s9-mcq-255", topic: "ohms-law",
            q: "In a solar-kit circuit, if voltage stays the same but resistance doubles, the current will:",
            options: [
                "double",
                "stay the same",
                "become an ohm",
                "halve"
            ],
            answer: 3,
            explain: "Current is inversely proportional to resistance when voltage is constant."
        },
        {
            id: "s9-mcq-256", topic: "ohms-law",
            q: "In a solar-kit circuit, if resistance stays the same and voltage increases, the current in an ohmic resistor will:",
            options: [
                "increase",
                "decrease",
                "stay exactly the same",
                "reverse direction"
            ],
            answer: 0,
            explain: "For an ohmic resistor, higher voltage leads to higher current when resistance is constant."
        },
        {
            id: "s9-mcq-257", topic: "ohms-law",
            q: "In a solar-kit circuit, the unit of electrical resistance is:",
            options: [
                "ampere",
                "ohm",
                "volt",
                "joule"
            ],
            answer: 1,
            explain: "Resistance is measured in ohms."
        },
        {
            id: "s9-mcq-258", topic: "ohms-law",
            q: "In a solar-kit circuit, which observation suggests a component follows Ohm's law?",
            options: [
                "Its current stays at zero for every voltage.",
                "Its resistance changes randomly at each reading.",
                "Its current-voltage graph is a straight line through the origin.",
                "Its graph is a circle."
            ],
            answer: 2,
            explain: "A straight line through the origin shows current is directly proportional to voltage."
        },
        {
            id: "s9-mcq-259", topic: "ohms-law",
            q: "In a solar-kit circuit, two resistors are connected one at a time to the same supply. The resistor with the greater resistance will usually have:",
            options: [
                "the larger current",
                "exactly the same current whatever its value",
                "a negative current automatically",
                "the smaller current"
            ],
            answer: 3,
            explain: "At the same voltage, higher resistance means lower current."
        },
        {
            id: "s9-mcq-260", topic: "ohms-law",
            q: "In a solar-kit circuit, why does a longer thin wire usually have a greater resistance than a shorter thick wire of the same material?",
            options: [
                "Charge has a longer path and less cross-sectional area to move through easily.",
                "It contains more voltage.",
                "It becomes a better conductor automatically.",
                "Ohm's law stops applying to wires."
            ],
            answer: 0,
            explain: "Resistance depends on material, length and thickness."
        },
        {
            id: "s9-mcq-261", topic: "ohms-law",
            q: "In a torch experiment, a resistor has 15 V across it and a current of 3 A. What is its resistance?",
            options: [
                "3 ohms",
                "5 ohms",
                "15 ohms",
                "18 ohms"
            ],
            answer: 1,
            explain: "Using V = IR, resistance equals voltage divided by current."
        },
        {
            id: "s9-mcq-262", topic: "ohms-law",
            q: "In a torch experiment, a resistor has a resistance of 4 ohms and a voltage of 20 V. What current flows?",
            options: [
                "4 A",
                "20 A",
                "5 A",
                "6 A"
            ],
            answer: 2,
            explain: "Using I = V / R gives the current."
        },
        {
            id: "s9-mcq-263", topic: "ohms-law",
            q: "In a torch experiment, a current of 6 A passes through a resistor of 4 ohms. What voltage is across it?",
            options: [
                "6 V",
                "4 V",
                "18 V",
                "24 V"
            ],
            answer: 3,
            explain: "Voltage equals current multiplied by resistance."
        },
        {
            id: "s9-mcq-264", topic: "ohms-law",
            q: "For a school electronics project, if voltage stays the same but resistance doubles, the current will:",
            options: [
                "halve",
                "double",
                "stay the same",
                "become an ohm"
            ],
            answer: 0,
            explain: "Current is inversely proportional to resistance when voltage is constant."
        },
        {
            id: "s9-mcq-265", topic: "ohms-law",
            q: "For a school electronics project, if resistance stays the same and voltage increases, the current in an ohmic resistor will:",
            options: [
                "decrease",
                "increase",
                "stay exactly the same",
                "reverse direction"
            ],
            answer: 1,
            explain: "For an ohmic resistor, higher voltage leads to higher current when resistance is constant."
        },
        {
            id: "s9-mcq-266", topic: "ohms-law",
            q: "For a school electronics project, the unit of electrical resistance is:",
            options: [
                "ampere",
                "volt",
                "ohm",
                "joule"
            ],
            answer: 2,
            explain: "Resistance is measured in ohms."
        },
        {
            id: "s9-mcq-267", topic: "ohms-law",
            q: "For a school electronics project, which observation suggests a component follows Ohm's law?",
            options: [
                "Its current stays at zero for every voltage.",
                "Its resistance changes randomly at each reading.",
                "Its graph is a circle.",
                "Its current-voltage graph is a straight line through the origin."
            ],
            answer: 3,
            explain: "A straight line through the origin shows current is directly proportional to voltage."
        },
        {
            id: "s9-mcq-268", topic: "ohms-law",
            q: "For a school electronics project, two resistors are connected one at a time to the same supply. The resistor with the greater resistance will usually have:",
            options: [
                "the smaller current",
                "the larger current",
                "exactly the same current whatever its value",
                "a negative current automatically"
            ],
            answer: 0,
            explain: "At the same voltage, higher resistance means lower current."
        },
        {
            id: "s9-mcq-269", topic: "ohms-law",
            q: "For a school electronics project, why does a longer thin wire usually have a greater resistance than a shorter thick wire of the same material?",
            options: [
                "It contains more voltage.",
                "Charge has a longer path and less cross-sectional area to move through easily.",
                "It becomes a better conductor automatically.",
                "Ohm's law stops applying to wires."
            ],
            answer: 1,
            explain: "Resistance depends on material, length and thickness."
        },
        {
            id: "s9-mcq-270", topic: "ohms-law",
            q: "For a model-train motor, a resistor has 6 V across it and a current of 2 A. What is its resistance?",
            options: [
                "2 ohms",
                "6 ohms",
                "3 ohms",
                "8 ohms"
            ],
            answer: 2,
            explain: "Using V = IR, resistance equals voltage divided by current."
        },
        {
            id: "s9-mcq-271", topic: "ohms-law",
            q: "For a model-train motor, a resistor has a resistance of 3 ohms and a voltage of 9 V. What current flows?",
            options: [
                "2 A",
                "9 A",
                "4 A",
                "3 A"
            ],
            answer: 3,
            explain: "Using I = V / R gives the current."
        },
        {
            id: "s9-mcq-272", topic: "ohms-law",
            q: "For a model-train motor, a current of 4 A passes through a resistor of 3 ohms. What voltage is across it?",
            options: [
                "12 V",
                "4 V",
                "3 V",
                "8 V"
            ],
            answer: 0,
            explain: "Voltage equals current multiplied by resistance."
        },
        /* ----- Additional Homeostasis ----- */
        {
            id: "s9-mcq-273", topic: "homeostasis",
            q: "During a PE lesson, homeostasis is best described as the body's ability to:",
            options: [
                "keep internal conditions within a stable range",
                "avoid all change in the outside environment",
                "remove every pathogen instantly",
                "stop using energy during exercise"
            ],
            answer: 0,
            explain: "Homeostasis keeps important internal conditions within limits needed for normal function."
        },
        {
            id: "s9-mcq-274", topic: "homeostasis",
            q: "During a PE lesson, why does sweating help cool the body?",
            options: [
                "Sweat creates extra heat inside the body.",
                "Evaporation of sweat removes thermal energy from the skin.",
                "Sweating stops circulation.",
                "Sweat changes blood into glucose."
            ],
            answer: 1,
            explain: "Evaporation transfers energy away from the skin surface."
        },
        {
            id: "s9-mcq-275", topic: "homeostasis",
            q: "During a PE lesson, when body temperature falls, shivering helps because it:",
            options: [
                "stops all blood flow permanently",
                "removes heat from the body faster",
                "makes muscles contract and release extra thermal energy",
                "prevents any movement of molecules"
            ],
            answer: 2,
            explain: "Muscle activity releases energy that helps warm the body."
        },
        {
            id: "s9-mcq-276", topic: "homeostasis",
            q: "During a PE lesson, during blood glucose drops between meals, which part is acting as the effectors?",
            options: [
                "cells in the pancreas",
                "the outside weather only",
                "the food that was eaten earlier",
                "the liver"
            ],
            answer: 3,
            explain: "Effectors are the body parts that carry out the response."
        },
        {
            id: "s9-mcq-277", topic: "homeostasis",
            q: "During a PE lesson, why is it important to keep blood glucose within a narrow range?",
            options: [
                "Cells need a reliable glucose supply for respiration and normal function.",
                "It prevents every infectious disease.",
                "It keeps resistance in wires constant.",
                "It removes the need for hormones."
            ],
            answer: 0,
            explain: "Very high or very low glucose levels can disrupt body function."
        },
        {
            id: "s9-mcq-278", topic: "homeostasis",
            q: "During a PE lesson, negative feedback in homeostasis means that the body response:",
            options: [
                "makes the change larger each time",
                "acts to reduce the original change and bring conditions back toward normal",
                "removes all receptors from the body",
                "only happens during sleep"
            ],
            answer: 1,
            explain: "Negative feedback counters a change rather than increasing it."
        },
        {
            id: "s9-mcq-279", topic: "homeostasis",
            q: "During a PE lesson, which response most directly reduces heat loss from the skin on a cold day?",
            options: [
                "Sweating more",
                "Widening skin blood vessels",
                "Narrowing of blood vessels near the skin",
                "Increasing water loss in urine"
            ],
            answer: 2,
            explain: "Vasoconstriction reduces blood flow near the skin and lowers heat transfer."
        },
        {
            id: "s9-mcq-280", topic: "homeostasis",
            q: "During a PE lesson, the kidneys help maintain homeostasis by:",
            options: [
                "producing all body heat during rest",
                "destroying every pathogen in the blood",
                "changing oxygen into glucose",
                "adjusting how much water and dissolved substances are kept in the body"
            ],
            answer: 3,
            explain: "Kidneys help control water balance and remove wastes."
        },
        {
            id: "s9-mcq-281", topic: "homeostasis",
            q: "During a PE lesson, which statement correctly describes a homeostatic response?",
            options: [
                "Glucagon helps release stored glucose.",
                "The body allows the change to continue without any feedback.",
                "Effectors only observe the change and never respond.",
                "Homeostasis is only important during illness."
            ],
            answer: 0,
            explain: "Receptors detect change and effectors respond to move conditions back toward normal."
        },
        {
            id: "s9-mcq-282", topic: "homeostasis",
            q: "On a cold camp morning, homeostasis is best described as the body's ability to:",
            options: [
                "avoid all change in the outside environment",
                "keep internal conditions within a stable range",
                "remove every pathogen instantly",
                "stop using energy during exercise"
            ],
            answer: 1,
            explain: "Homeostasis keeps important internal conditions within limits needed for normal function."
        },
        {
            id: "s9-mcq-283", topic: "homeostasis",
            q: "On a cold camp morning, why does sweating help cool the body?",
            options: [
                "Sweat creates extra heat inside the body.",
                "Sweating stops circulation.",
                "Evaporation of sweat removes thermal energy from the skin.",
                "Sweat changes blood into glucose."
            ],
            answer: 2,
            explain: "Evaporation transfers energy away from the skin surface."
        },
        {
            id: "s9-mcq-284", topic: "homeostasis",
            q: "On a cold camp morning, when body temperature falls, shivering helps because it:",
            options: [
                "stops all blood flow permanently",
                "removes heat from the body faster",
                "prevents any movement of molecules",
                "makes muscles contract and release extra thermal energy"
            ],
            answer: 3,
            explain: "Muscle activity releases energy that helps warm the body."
        },
        {
            id: "s9-mcq-285", topic: "homeostasis",
            q: "During blood glucose rises after a meal, which part is acting as the effectors?",
            options: [
                "body cells and the liver",
                "cells in the pancreas",
                "the outside weather only",
                "the food that was eaten earlier"
            ],
            answer: 0,
            explain: "Effectors are the body parts that carry out the response."
        },
        {
            id: "s9-mcq-286", topic: "homeostasis",
            q: "On a cold camp morning, why is it important to keep blood glucose within a narrow range?",
            options: [
                "It prevents every infectious disease.",
                "Cells need a reliable glucose supply for respiration and normal function.",
                "It keeps resistance in wires constant.",
                "It removes the need for hormones."
            ],
            answer: 1,
            explain: "Very high or very low glucose levels can disrupt body function."
        },
        {
            id: "s9-mcq-287", topic: "homeostasis",
            q: "On a cold camp morning, negative feedback in homeostasis means that the body response:",
            options: [
                "makes the change larger each time",
                "removes all receptors from the body",
                "acts to reduce the original change and bring conditions back toward normal",
                "only happens during sleep"
            ],
            answer: 2,
            explain: "Negative feedback counters a change rather than increasing it."
        },
        {
            id: "s9-mcq-288", topic: "homeostasis",
            q: "On a cold camp morning, which response most directly reduces heat loss from the skin on a cold day?",
            options: [
                "Sweating more",
                "Widening skin blood vessels",
                "Increasing water loss in urine",
                "Narrowing of blood vessels near the skin"
            ],
            answer: 3,
            explain: "Vasoconstriction reduces blood flow near the skin and lowers heat transfer."
        },
        {
            id: "s9-mcq-289", topic: "homeostasis",
            q: "On a cold camp morning, the kidneys help maintain homeostasis by:",
            options: [
                "adjusting how much water and dissolved substances are kept in the body",
                "producing all body heat during rest",
                "destroying every pathogen in the blood",
                "changing oxygen into glucose"
            ],
            answer: 0,
            explain: "Kidneys help control water balance and remove wastes."
        },
        {
            id: "s9-mcq-290", topic: "homeostasis",
            q: "On a cold camp morning, which statement correctly describes a homeostatic response?",
            options: [
                "The body allows the change to continue without any feedback.",
                "Insulin helps cells take in and store glucose.",
                "Effectors only observe the change and never respond.",
                "Homeostasis is only important during illness."
            ],
            answer: 1,
            explain: "Receptors detect change and effectors respond to move conditions back toward normal."
        },
        {
            id: "s9-mcq-291", topic: "homeostasis",
            q: "After skipping lunch, homeostasis is best described as the body's ability to:",
            options: [
                "avoid all change in the outside environment",
                "remove every pathogen instantly",
                "keep internal conditions within a stable range",
                "stop using energy during exercise"
            ],
            answer: 2,
            explain: "Homeostasis keeps important internal conditions within limits needed for normal function."
        },
        {
            id: "s9-mcq-292", topic: "homeostasis",
            q: "After skipping lunch, why does sweating help cool the body?",
            options: [
                "Sweat creates extra heat inside the body.",
                "Sweating stops circulation.",
                "Sweat changes blood into glucose.",
                "Evaporation of sweat removes thermal energy from the skin."
            ],
            answer: 3,
            explain: "Evaporation transfers energy away from the skin surface."
        },
        {
            id: "s9-mcq-293", topic: "homeostasis",
            q: "After skipping lunch, when body temperature falls, shivering helps because it:",
            options: [
                "makes muscles contract and release extra thermal energy",
                "stops all blood flow permanently",
                "removes heat from the body faster",
                "prevents any movement of molecules"
            ],
            answer: 0,
            explain: "Muscle activity releases energy that helps warm the body."
        },
        {
            id: "s9-mcq-294", topic: "homeostasis",
            q: "During body temperature falls on a cold morning, which part is acting as the effectors?",
            options: [
                "temperature receptors",
                "muscles and skin blood vessels",
                "the outside weather only",
                "the food that was eaten earlier"
            ],
            answer: 1,
            explain: "Effectors are the body parts that carry out the response."
        },
        {
            id: "s9-mcq-295", topic: "homeostasis",
            q: "After skipping lunch, why is it important to keep blood glucose within a narrow range?",
            options: [
                "It prevents every infectious disease.",
                "It keeps resistance in wires constant.",
                "Cells need a reliable glucose supply for respiration and normal function.",
                "It removes the need for hormones."
            ],
            answer: 2,
            explain: "Very high or very low glucose levels can disrupt body function."
        },
        {
            id: "s9-mcq-296", topic: "homeostasis",
            q: "After skipping lunch, negative feedback in homeostasis means that the body response:",
            options: [
                "makes the change larger each time",
                "removes all receptors from the body",
                "only happens during sleep",
                "acts to reduce the original change and bring conditions back toward normal"
            ],
            answer: 3,
            explain: "Negative feedback counters a change rather than increasing it."
        },
        {
            id: "s9-mcq-297", topic: "homeostasis",
            q: "After skipping lunch, which response most directly reduces heat loss from the skin on a cold day?",
            options: [
                "Narrowing of blood vessels near the skin",
                "Sweating more",
                "Widening skin blood vessels",
                "Increasing water loss in urine"
            ],
            answer: 0,
            explain: "Vasoconstriction reduces blood flow near the skin and lowers heat transfer."
        },
        {
            id: "s9-mcq-298", topic: "homeostasis",
            q: "After skipping lunch, the kidneys help maintain homeostasis by:",
            options: [
                "producing all body heat during rest",
                "adjusting how much water and dissolved substances are kept in the body",
                "destroying every pathogen in the blood",
                "changing oxygen into glucose"
            ],
            answer: 1,
            explain: "Kidneys help control water balance and remove wastes."
        },
        {
            id: "s9-mcq-299", topic: "homeostasis",
            q: "After skipping lunch, which statement correctly describes a homeostatic response?",
            options: [
                "The body allows the change to continue without any feedback.",
                "Effectors only observe the change and never respond.",
                "Shivering and vasoconstriction reduce heat loss and increase heat production.",
                "Homeostasis is only important during illness."
            ],
            answer: 2,
            explain: "Receptors detect change and effectors respond to move conditions back toward normal."
        },
        {
            id: "s9-mcq-300", topic: "homeostasis",
            q: "In a summer heatwave, homeostasis is best described as the body's ability to:",
            options: [
                "avoid all change in the outside environment",
                "remove every pathogen instantly",
                "stop using energy during exercise",
                "keep internal conditions within a stable range"
            ],
            answer: 3,
            explain: "Homeostasis keeps important internal conditions within limits needed for normal function."
        },
        {
            id: "s9-mcq-301", topic: "homeostasis",
            q: "In a summer heatwave, why does sweating help cool the body?",
            options: [
                "Evaporation of sweat removes thermal energy from the skin.",
                "Sweat creates extra heat inside the body.",
                "Sweating stops circulation.",
                "Sweat changes blood into glucose."
            ],
            answer: 0,
            explain: "Evaporation transfers energy away from the skin surface."
        },
        {
            id: "s9-mcq-302", topic: "homeostasis",
            q: "In a summer heatwave, when body temperature falls, shivering helps because it:",
            options: [
                "stops all blood flow permanently",
                "makes muscles contract and release extra thermal energy",
                "removes heat from the body faster",
                "prevents any movement of molecules"
            ],
            answer: 1,
            explain: "Muscle activity releases energy that helps warm the body."
        },
        {
            id: "s9-mcq-303", topic: "homeostasis",
            q: "During body temperature rises during a hot run, which part is acting as the effectors?",
            options: [
                "temperature receptors in the skin and brain",
                "the outside weather only",
                "sweat glands and blood vessels near the skin",
                "the food that was eaten earlier"
            ],
            answer: 2,
            explain: "Effectors are the body parts that carry out the response."
        },
        {
            id: "s9-mcq-304", topic: "homeostasis",
            q: "In a summer heatwave, why is it important to keep blood glucose within a narrow range?",
            options: [
                "It prevents every infectious disease.",
                "It keeps resistance in wires constant.",
                "It removes the need for hormones.",
                "Cells need a reliable glucose supply for respiration and normal function."
            ],
            answer: 3,
            explain: "Very high or very low glucose levels can disrupt body function."
        },
        {
            id: "s9-mcq-305", topic: "homeostasis",
            q: "In a summer heatwave, negative feedback in homeostasis means that the body response:",
            options: [
                "acts to reduce the original change and bring conditions back toward normal",
                "makes the change larger each time",
                "removes all receptors from the body",
                "only happens during sleep"
            ],
            answer: 0,
            explain: "Negative feedback counters a change rather than increasing it."
        },
        {
            id: "s9-mcq-306", topic: "homeostasis",
            q: "In a summer heatwave, which response most directly reduces heat loss from the skin on a cold day?",
            options: [
                "Sweating more",
                "Narrowing of blood vessels near the skin",
                "Widening skin blood vessels",
                "Increasing water loss in urine"
            ],
            answer: 1,
            explain: "Vasoconstriction reduces blood flow near the skin and lowers heat transfer."
        },
        {
            id: "s9-mcq-307", topic: "homeostasis",
            q: "In a summer heatwave, the kidneys help maintain homeostasis by:",
            options: [
                "producing all body heat during rest",
                "destroying every pathogen in the blood",
                "adjusting how much water and dissolved substances are kept in the body",
                "changing oxygen into glucose"
            ],
            answer: 2,
            explain: "Kidneys help control water balance and remove wastes."
        },
        {
            id: "s9-mcq-308", topic: "homeostasis",
            q: "In a summer heatwave, which statement correctly describes a homeostatic response?",
            options: [
                "The body allows the change to continue without any feedback.",
                "Effectors only observe the change and never respond.",
                "Homeostasis is only important during illness.",
                "Sweating and vasodilation increase heat loss."
            ],
            answer: 3,
            explain: "Receptors detect change and effectors respond to move conditions back toward normal."
        },
        {
            id: "s9-mcq-309", topic: "homeostasis",
            q: "During a long run, homeostasis is best described as the body's ability to:",
            options: [
                "keep internal conditions within a stable range",
                "avoid all change in the outside environment",
                "remove every pathogen instantly",
                "stop using energy during exercise"
            ],
            answer: 0,
            explain: "Homeostasis keeps important internal conditions within limits needed for normal function."
        },
        {
            id: "s9-mcq-310", topic: "homeostasis",
            q: "During a long run, why does sweating help cool the body?",
            options: [
                "Sweat creates extra heat inside the body.",
                "Evaporation of sweat removes thermal energy from the skin.",
                "Sweating stops circulation.",
                "Sweat changes blood into glucose."
            ],
            answer: 1,
            explain: "Evaporation transfers energy away from the skin surface."
        },
        {
            id: "s9-mcq-311", topic: "homeostasis",
            q: "During a long run, when body temperature falls, shivering helps because it:",
            options: [
                "stops all blood flow permanently",
                "removes heat from the body faster",
                "makes muscles contract and release extra thermal energy",
                "prevents any movement of molecules"
            ],
            answer: 2,
            explain: "Muscle activity releases energy that helps warm the body."
        },
        {
            id: "s9-mcq-312", topic: "homeostasis",
            q: "During the body loses water during exercise, which part is acting as the effectors?",
            options: [
                "receptors monitoring water balance",
                "the outside weather only",
                "the food that was eaten earlier",
                "the kidneys"
            ],
            answer: 3,
            explain: "Effectors are the body parts that carry out the response."
        },
        {
            id: "s9-mcq-313", topic: "homeostasis",
            q: "During a long run, why is it important to keep blood glucose within a narrow range?",
            options: [
                "Cells need a reliable glucose supply for respiration and normal function.",
                "It prevents every infectious disease.",
                "It keeps resistance in wires constant.",
                "It removes the need for hormones."
            ],
            answer: 0,
            explain: "Very high or very low glucose levels can disrupt body function."
        },
        {
            id: "s9-mcq-314", topic: "homeostasis",
            q: "During a long run, negative feedback in homeostasis means that the body response:",
            options: [
                "makes the change larger each time",
                "acts to reduce the original change and bring conditions back toward normal",
                "removes all receptors from the body",
                "only happens during sleep"
            ],
            answer: 1,
            explain: "Negative feedback counters a change rather than increasing it."
        },
        {
            id: "s9-mcq-315", topic: "homeostasis",
            q: "During a long run, which response most directly reduces heat loss from the skin on a cold day?",
            options: [
                "Sweating more",
                "Widening skin blood vessels",
                "Narrowing of blood vessels near the skin",
                "Increasing water loss in urine"
            ],
            answer: 2,
            explain: "Vasoconstriction reduces blood flow near the skin and lowers heat transfer."
        },
        {
            id: "s9-mcq-316", topic: "homeostasis",
            q: "During a long run, the kidneys help maintain homeostasis by:",
            options: [
                "producing all body heat during rest",
                "destroying every pathogen in the blood",
                "changing oxygen into glucose",
                "adjusting how much water and dissolved substances are kept in the body"
            ],
            answer: 3,
            explain: "Kidneys help control water balance and remove wastes."
        },
        {
            id: "s9-mcq-317", topic: "homeostasis",
            q: "During a long run, which statement correctly describes a homeostatic response?",
            options: [
                "The kidneys conserve more water in urine.",
                "The body allows the change to continue without any feedback.",
                "Effectors only observe the change and never respond.",
                "Homeostasis is only important during illness."
            ],
            answer: 0,
            explain: "Receptors detect change and effectors respond to move conditions back toward normal."
        },
        {
            id: "s9-mcq-318", topic: "homeostasis",
            q: "After drinking very little water, homeostasis is best described as the body's ability to:",
            options: [
                "avoid all change in the outside environment",
                "keep internal conditions within a stable range",
                "remove every pathogen instantly",
                "stop using energy during exercise"
            ],
            answer: 1,
            explain: "Homeostasis keeps important internal conditions within limits needed for normal function."
        },
        {
            id: "s9-mcq-319", topic: "homeostasis",
            q: "After drinking very little water, why does sweating help cool the body?",
            options: [
                "Sweat creates extra heat inside the body.",
                "Sweating stops circulation.",
                "Evaporation of sweat removes thermal energy from the skin.",
                "Sweat changes blood into glucose."
            ],
            answer: 2,
            explain: "Evaporation transfers energy away from the skin surface."
        },
        {
            id: "s9-mcq-320", topic: "homeostasis",
            q: "After drinking very little water, when body temperature falls, shivering helps because it:",
            options: [
                "stops all blood flow permanently",
                "removes heat from the body faster",
                "prevents any movement of molecules",
                "makes muscles contract and release extra thermal energy"
            ],
            answer: 3,
            explain: "Muscle activity releases energy that helps warm the body."
        },
        {
            id: "s9-mcq-321", topic: "homeostasis",
            q: "On a cold camp morning, during blood glucose drops between meals, which part is acting as the effectors?",
            options: [
                "the liver",
                "cells in the pancreas",
                "the outside weather only",
                "the food that was eaten earlier"
            ],
            answer: 0,
            explain: "Effectors are the body parts that carry out the response."
        },
        {
            id: "s9-mcq-322", topic: "homeostasis",
            q: "After drinking very little water, why is it important to keep blood glucose within a narrow range?",
            options: [
                "It prevents every infectious disease.",
                "Cells need a reliable glucose supply for respiration and normal function.",
                "It keeps resistance in wires constant.",
                "It removes the need for hormones."
            ],
            answer: 1,
            explain: "Very high or very low glucose levels can disrupt body function."
        },
        {
            id: "s9-mcq-323", topic: "homeostasis",
            q: "After drinking very little water, negative feedback in homeostasis means that the body response:",
            options: [
                "makes the change larger each time",
                "removes all receptors from the body",
                "acts to reduce the original change and bring conditions back toward normal",
                "only happens during sleep"
            ],
            answer: 2,
            explain: "Negative feedback counters a change rather than increasing it."
        },
        {
            id: "s9-mcq-324", topic: "homeostasis",
            q: "After drinking very little water, which response most directly reduces heat loss from the skin on a cold day?",
            options: [
                "Sweating more",
                "Widening skin blood vessels",
                "Increasing water loss in urine",
                "Narrowing of blood vessels near the skin"
            ],
            answer: 3,
            explain: "Vasoconstriction reduces blood flow near the skin and lowers heat transfer."
        },
        {
            id: "s9-mcq-325", topic: "homeostasis",
            q: "After drinking very little water, the kidneys help maintain homeostasis by:",
            options: [
                "adjusting how much water and dissolved substances are kept in the body",
                "producing all body heat during rest",
                "destroying every pathogen in the blood",
                "changing oxygen into glucose"
            ],
            answer: 0,
            explain: "Kidneys help control water balance and remove wastes."
        },
        {
            id: "s9-mcq-326", topic: "homeostasis",
            q: "After drinking very little water, which statement correctly describes a homeostatic response?",
            options: [
                "The body allows the change to continue without any feedback.",
                "Glucagon helps release stored glucose.",
                "Effectors only observe the change and never respond.",
                "Homeostasis is only important during illness."
            ],
            answer: 1,
            explain: "Receptors detect change and effectors respond to move conditions back toward normal."
        },
        {
            id: "s9-mcq-327", topic: "homeostasis",
            q: "On a frosty bus-stop wait, homeostasis is best described as the body's ability to:",
            options: [
                "avoid all change in the outside environment",
                "remove every pathogen instantly",
                "keep internal conditions within a stable range",
                "stop using energy during exercise"
            ],
            answer: 2,
            explain: "Homeostasis keeps important internal conditions within limits needed for normal function."
        },
        {
            id: "s9-mcq-328", topic: "homeostasis",
            q: "On a frosty bus-stop wait, why does sweating help cool the body?",
            options: [
                "Sweat creates extra heat inside the body.",
                "Sweating stops circulation.",
                "Sweat changes blood into glucose.",
                "Evaporation of sweat removes thermal energy from the skin."
            ],
            answer: 3,
            explain: "Evaporation transfers energy away from the skin surface."
        },
        {
            id: "s9-mcq-329", topic: "homeostasis",
            q: "On a frosty bus-stop wait, when body temperature falls, shivering helps because it:",
            options: [
                "makes muscles contract and release extra thermal energy",
                "stops all blood flow permanently",
                "removes heat from the body faster",
                "prevents any movement of molecules"
            ],
            answer: 0,
            explain: "Muscle activity releases energy that helps warm the body."
        },
        /* ----- Additional Infectious disease ----- */
        {
            id: "s9-mcq-330", topic: "infectious-disease",
            q: "During a flu outbreak at school, an infectious disease is one that:",
            options: [
                "is caused by a pathogen and can spread between organisms",
                "is always caused by poor diet",
                "cannot be prevented",
                "only affects the lungs"
            ],
            answer: 0,
            explain: "Infectious diseases involve pathogens and transmission between hosts."
        },
        {
            id: "s9-mcq-331", topic: "infectious-disease",
            q: "During a flu outbreak at school, why are antibiotics not effective against most viral diseases?",
            options: [
                "Viruses are too large for antibiotics.",
                "Viruses do not have the bacterial structures that antibiotics target.",
                "Antibiotics only work in summer.",
                "Viruses contain no genetic material."
            ],
            answer: 1,
            explain: "Antibiotics act on bacteria, not on viruses."
        },
        {
            id: "s9-mcq-332", topic: "infectious-disease",
            q: "During a flu outbreak at school, which action most directly reduces the spread of athlete's foot in a school community?",
            options: [
                "Ignoring symptoms until the end of term",
                "Sharing drink bottles to build immunity",
                "Using prevention steps that interrupt shared damp surfaces",
                "Taking antibiotics for every illness"
            ],
            answer: 2,
            explain: "Prevention works by breaking the pathway of transmission."
        },
        {
            id: "s9-mcq-333", topic: "infectious-disease",
            q: "During a flu outbreak at school, vaccination helps protect a community because it:",
            options: [
                "kills all pathogens on every surface instantly",
                "works only for bacterial diseases",
                "removes the need for hygiene",
                "reduces the number of people who are likely to become infected and spread the pathogen"
            ],
            answer: 3,
            explain: "Vaccination can reduce transmission and protect vulnerable people."
        },
        {
            id: "s9-mcq-334", topic: "infectious-disease",
            q: "During a flu outbreak at school, what type of pathogen causes COVID-19 in this example?",
            options: [
                "virus",
                "mineral",
                "insulator",
                "fuel"
            ],
            answer: 0,
            explain: "Different infectious diseases are caused by different types of pathogens."
        },
        {
            id: "s9-mcq-335", topic: "infectious-disease",
            q: "During a flu outbreak at school, why is handwashing effective against many infectious diseases?",
            options: [
                "It turns viruses into bacteria.",
                "It removes or kills pathogens before they can be transferred to a new host.",
                "It guarantees that nobody will ever get sick.",
                "It replaces the body's immune system."
            ],
            answer: 1,
            explain: "Hand hygiene can interrupt transmission from surfaces and hands."
        },
        {
            id: "s9-mcq-336", topic: "infectious-disease",
            q: "During a flu outbreak at school, what is the main purpose of isolating a person with a contagious disease?",
            options: [
                "To increase the mutation rate of the pathogen",
                "To make the disease non-infectious instantly",
                "To reduce the chance of the pathogen spreading to other people",
                "To replace all medical treatment"
            ],
            answer: 2,
            explain: "Isolation helps break the chain of transmission."
        },
        {
            id: "s9-mcq-337", topic: "infectious-disease",
            q: "During a flu outbreak at school, which example describes vector transmission?",
            options: [
                "A person inheriting a gene from a parent",
                "Heat moving through a metal spoon",
                "A battery supplying a lamp",
                "A mosquito carrying a pathogen from one person to another"
            ],
            answer: 3,
            explain: "A vector is an organism that carries a pathogen between hosts."
        },
        {
            id: "s9-mcq-338", topic: "infectious-disease",
            q: "During a flu outbreak at school, why should food be cooked and stored safely when preventing infectious disease?",
            options: [
                "Unsafe food can allow pathogens to survive, grow or be transferred to people.",
                "Food safety only matters for non-infectious disease.",
                "Cold food cannot ever contain pathogens.",
                "Cooking creates all infectious diseases."
            ],
            answer: 0,
            explain: "Food hygiene is important because some pathogens spread through contaminated food."
        },
        {
            id: "s9-mcq-339", topic: "infectious-disease",
            q: "At a community vaccination clinic, an infectious disease is one that:",
            options: [
                "is always caused by poor diet",
                "is caused by a pathogen and can spread between organisms",
                "cannot be prevented",
                "only affects the lungs"
            ],
            answer: 1,
            explain: "Infectious diseases involve pathogens and transmission between hosts."
        },
        {
            id: "s9-mcq-340", topic: "infectious-disease",
            q: "At a community vaccination clinic, why are antibiotics not effective against most viral diseases?",
            options: [
                "Viruses are too large for antibiotics.",
                "Antibiotics only work in summer.",
                "Viruses do not have the bacterial structures that antibiotics target.",
                "Viruses contain no genetic material."
            ],
            answer: 2,
            explain: "Antibiotics act on bacteria, not on viruses."
        },
        {
            id: "s9-mcq-341", topic: "infectious-disease",
            q: "During a flu outbreak at school, which action most directly reduces the spread of gastroenteritis in a school community?",
            options: [
                "Ignoring symptoms until the end of term",
                "Sharing drink bottles to build immunity",
                "Taking antibiotics for every illness",
                "Using prevention steps that interrupt contaminated hands, food or water"
            ],
            answer: 3,
            explain: "Prevention works by breaking the pathway of transmission."
        },
        {
            id: "s9-mcq-342", topic: "infectious-disease",
            q: "At a community vaccination clinic, vaccination helps protect a community because it:",
            options: [
                "reduces the number of people who are likely to become infected and spread the pathogen",
                "kills all pathogens on every surface instantly",
                "works only for bacterial diseases",
                "removes the need for hygiene"
            ],
            answer: 0,
            explain: "Vaccination can reduce transmission and protect vulnerable people."
        },
        {
            id: "s9-mcq-343", topic: "infectious-disease",
            q: "During a flu outbreak at school, what type of pathogen causes salmonella food poisoning in this example?",
            options: [
                "mineral",
                "bacterium",
                "insulator",
                "fuel"
            ],
            answer: 1,
            explain: "Different infectious diseases are caused by different types of pathogens."
        },
        {
            id: "s9-mcq-344", topic: "infectious-disease",
            q: "At a community vaccination clinic, why is handwashing effective against many infectious diseases?",
            options: [
                "It turns viruses into bacteria.",
                "It guarantees that nobody will ever get sick.",
                "It removes or kills pathogens before they can be transferred to a new host.",
                "It replaces the body's immune system."
            ],
            answer: 2,
            explain: "Hand hygiene can interrupt transmission from surfaces and hands."
        },
        {
            id: "s9-mcq-345", topic: "infectious-disease",
            q: "At a community vaccination clinic, what is the main purpose of isolating a person with a contagious disease?",
            options: [
                "To increase the mutation rate of the pathogen",
                "To make the disease non-infectious instantly",
                "To replace all medical treatment",
                "To reduce the chance of the pathogen spreading to other people"
            ],
            answer: 3,
            explain: "Isolation helps break the chain of transmission."
        },
        {
            id: "s9-mcq-346", topic: "infectious-disease",
            q: "At a community vaccination clinic, which example describes vector transmission?",
            options: [
                "A mosquito carrying a pathogen from one person to another",
                "A person inheriting a gene from a parent",
                "Heat moving through a metal spoon",
                "A battery supplying a lamp"
            ],
            answer: 0,
            explain: "A vector is an organism that carries a pathogen between hosts."
        },
        {
            id: "s9-mcq-347", topic: "infectious-disease",
            q: "At a community vaccination clinic, why should food be cooked and stored safely when preventing infectious disease?",
            options: [
                "Food safety only matters for non-infectious disease.",
                "Unsafe food can allow pathogens to survive, grow or be transferred to people.",
                "Cold food cannot ever contain pathogens.",
                "Cooking creates all infectious diseases."
            ],
            answer: 1,
            explain: "Food hygiene is important because some pathogens spread through contaminated food."
        },
        {
            id: "s9-mcq-348", topic: "infectious-disease",
            q: "On a school camp, an infectious disease is one that:",
            options: [
                "is always caused by poor diet",
                "cannot be prevented",
                "is caused by a pathogen and can spread between organisms",
                "only affects the lungs"
            ],
            answer: 2,
            explain: "Infectious diseases involve pathogens and transmission between hosts."
        },
        {
            id: "s9-mcq-349", topic: "infectious-disease",
            q: "On a school camp, why are antibiotics not effective against most viral diseases?",
            options: [
                "Viruses are too large for antibiotics.",
                "Antibiotics only work in summer.",
                "Viruses contain no genetic material.",
                "Viruses do not have the bacterial structures that antibiotics target."
            ],
            answer: 3,
            explain: "Antibiotics act on bacteria, not on viruses."
        },
        {
            id: "s9-mcq-350", topic: "infectious-disease",
            q: "At a community vaccination clinic, which action most directly reduces the spread of athlete's foot in a school community?",
            options: [
                "Using prevention steps that interrupt shared damp surfaces",
                "Ignoring symptoms until the end of term",
                "Sharing drink bottles to build immunity",
                "Taking antibiotics for every illness"
            ],
            answer: 0,
            explain: "Prevention works by breaking the pathway of transmission."
        },
        {
            id: "s9-mcq-351", topic: "infectious-disease",
            q: "On a school camp, vaccination helps protect a community because it:",
            options: [
                "kills all pathogens on every surface instantly",
                "reduces the number of people who are likely to become infected and spread the pathogen",
                "works only for bacterial diseases",
                "removes the need for hygiene"
            ],
            answer: 1,
            explain: "Vaccination can reduce transmission and protect vulnerable people."
        },
        {
            id: "s9-mcq-352", topic: "infectious-disease",
            q: "At a community vaccination clinic, what type of pathogen causes COVID-19 in this example?",
            options: [
                "mineral",
                "insulator",
                "virus",
                "fuel"
            ],
            answer: 2,
            explain: "Different infectious diseases are caused by different types of pathogens."
        },
        {
            id: "s9-mcq-353", topic: "infectious-disease",
            q: "On a school camp, why is handwashing effective against many infectious diseases?",
            options: [
                "It turns viruses into bacteria.",
                "It guarantees that nobody will ever get sick.",
                "It replaces the body's immune system.",
                "It removes or kills pathogens before they can be transferred to a new host."
            ],
            answer: 3,
            explain: "Hand hygiene can interrupt transmission from surfaces and hands."
        },
        {
            id: "s9-mcq-354", topic: "infectious-disease",
            q: "On a school camp, what is the main purpose of isolating a person with a contagious disease?",
            options: [
                "To reduce the chance of the pathogen spreading to other people",
                "To increase the mutation rate of the pathogen",
                "To make the disease non-infectious instantly",
                "To replace all medical treatment"
            ],
            answer: 0,
            explain: "Isolation helps break the chain of transmission."
        },
        {
            id: "s9-mcq-355", topic: "infectious-disease",
            q: "On a school camp, which example describes vector transmission?",
            options: [
                "A person inheriting a gene from a parent",
                "A mosquito carrying a pathogen from one person to another",
                "Heat moving through a metal spoon",
                "A battery supplying a lamp"
            ],
            answer: 1,
            explain: "A vector is an organism that carries a pathogen between hosts."
        },
        {
            id: "s9-mcq-356", topic: "infectious-disease",
            q: "On a school camp, why should food be cooked and stored safely when preventing infectious disease?",
            options: [
                "Food safety only matters for non-infectious disease.",
                "Cold food cannot ever contain pathogens.",
                "Unsafe food can allow pathogens to survive, grow or be transferred to people.",
                "Cooking creates all infectious diseases."
            ],
            answer: 2,
            explain: "Food hygiene is important because some pathogens spread through contaminated food."
        },
        {
            id: "s9-mcq-357", topic: "infectious-disease",
            q: "In a tropical holiday setting, an infectious disease is one that:",
            options: [
                "is always caused by poor diet",
                "cannot be prevented",
                "only affects the lungs",
                "is caused by a pathogen and can spread between organisms"
            ],
            answer: 3,
            explain: "Infectious diseases involve pathogens and transmission between hosts."
        },
        {
            id: "s9-mcq-358", topic: "infectious-disease",
            q: "In a tropical holiday setting, why are antibiotics not effective against most viral diseases?",
            options: [
                "Viruses do not have the bacterial structures that antibiotics target.",
                "Viruses are too large for antibiotics.",
                "Antibiotics only work in summer.",
                "Viruses contain no genetic material."
            ],
            answer: 0,
            explain: "Antibiotics act on bacteria, not on viruses."
        },
        {
            id: "s9-mcq-359", topic: "infectious-disease",
            q: "At a community vaccination clinic, which action most directly reduces the spread of gastroenteritis in a school community?",
            options: [
                "Ignoring symptoms until the end of term",
                "Using prevention steps that interrupt contaminated hands, food or water",
                "Sharing drink bottles to build immunity",
                "Taking antibiotics for every illness"
            ],
            answer: 1,
            explain: "Prevention works by breaking the pathway of transmission."
        },
        {
            id: "s9-mcq-360", topic: "infectious-disease",
            q: "In a tropical holiday setting, vaccination helps protect a community because it:",
            options: [
                "kills all pathogens on every surface instantly",
                "works only for bacterial diseases",
                "reduces the number of people who are likely to become infected and spread the pathogen",
                "removes the need for hygiene"
            ],
            answer: 2,
            explain: "Vaccination can reduce transmission and protect vulnerable people."
        },
        {
            id: "s9-mcq-361", topic: "infectious-disease",
            q: "At a community vaccination clinic, what type of pathogen causes salmonella food poisoning in this example?",
            options: [
                "mineral",
                "insulator",
                "fuel",
                "bacterium"
            ],
            answer: 3,
            explain: "Different infectious diseases are caused by different types of pathogens."
        },
        {
            id: "s9-mcq-362", topic: "infectious-disease",
            q: "In a tropical holiday setting, why is handwashing effective against many infectious diseases?",
            options: [
                "It removes or kills pathogens before they can be transferred to a new host.",
                "It turns viruses into bacteria.",
                "It guarantees that nobody will ever get sick.",
                "It replaces the body's immune system."
            ],
            answer: 0,
            explain: "Hand hygiene can interrupt transmission from surfaces and hands."
        },
        {
            id: "s9-mcq-363", topic: "infectious-disease",
            q: "In a tropical holiday setting, what is the main purpose of isolating a person with a contagious disease?",
            options: [
                "To increase the mutation rate of the pathogen",
                "To reduce the chance of the pathogen spreading to other people",
                "To make the disease non-infectious instantly",
                "To replace all medical treatment"
            ],
            answer: 1,
            explain: "Isolation helps break the chain of transmission."
        },
        {
            id: "s9-mcq-364", topic: "infectious-disease",
            q: "In a tropical holiday setting, which example describes vector transmission?",
            options: [
                "A person inheriting a gene from a parent",
                "Heat moving through a metal spoon",
                "A mosquito carrying a pathogen from one person to another",
                "A battery supplying a lamp"
            ],
            answer: 2,
            explain: "A vector is an organism that carries a pathogen between hosts."
        },
        {
            id: "s9-mcq-365", topic: "infectious-disease",
            q: "In a tropical holiday setting, why should food be cooked and stored safely when preventing infectious disease?",
            options: [
                "Food safety only matters for non-infectious disease.",
                "Cold food cannot ever contain pathogens.",
                "Cooking creates all infectious diseases.",
                "Unsafe food can allow pathogens to survive, grow or be transferred to people."
            ],
            answer: 3,
            explain: "Food hygiene is important because some pathogens spread through contaminated food."
        },
        {
            id: "s9-mcq-366", topic: "infectious-disease",
            q: "At the canteen, an infectious disease is one that:",
            options: [
                "is caused by a pathogen and can spread between organisms",
                "is always caused by poor diet",
                "cannot be prevented",
                "only affects the lungs"
            ],
            answer: 0,
            explain: "Infectious diseases involve pathogens and transmission between hosts."
        },
        {
            id: "s9-mcq-367", topic: "infectious-disease",
            q: "At the canteen, why are antibiotics not effective against most viral diseases?",
            options: [
                "Viruses are too large for antibiotics.",
                "Viruses do not have the bacterial structures that antibiotics target.",
                "Antibiotics only work in summer.",
                "Viruses contain no genetic material."
            ],
            answer: 1,
            explain: "Antibiotics act on bacteria, not on viruses."
        },
        {
            id: "s9-mcq-368", topic: "infectious-disease",
            q: "On a school camp, which action most directly reduces the spread of athlete's foot in a school community?",
            options: [
                "Ignoring symptoms until the end of term",
                "Sharing drink bottles to build immunity",
                "Using prevention steps that interrupt shared damp surfaces",
                "Taking antibiotics for every illness"
            ],
            answer: 2,
            explain: "Prevention works by breaking the pathway of transmission."
        },
        {
            id: "s9-mcq-369", topic: "infectious-disease",
            q: "At the canteen, vaccination helps protect a community because it:",
            options: [
                "kills all pathogens on every surface instantly",
                "works only for bacterial diseases",
                "removes the need for hygiene",
                "reduces the number of people who are likely to become infected and spread the pathogen"
            ],
            answer: 3,
            explain: "Vaccination can reduce transmission and protect vulnerable people."
        },
        {
            id: "s9-mcq-370", topic: "infectious-disease",
            q: "On a school camp, what type of pathogen causes COVID-19 in this example?",
            options: [
                "virus",
                "mineral",
                "insulator",
                "fuel"
            ],
            answer: 0,
            explain: "Different infectious diseases are caused by different types of pathogens."
        },
        {
            id: "s9-mcq-371", topic: "infectious-disease",
            q: "At the canteen, why is handwashing effective against many infectious diseases?",
            options: [
                "It turns viruses into bacteria.",
                "It removes or kills pathogens before they can be transferred to a new host.",
                "It guarantees that nobody will ever get sick.",
                "It replaces the body's immune system."
            ],
            answer: 1,
            explain: "Hand hygiene can interrupt transmission from surfaces and hands."
        },
        {
            id: "s9-mcq-372", topic: "infectious-disease",
            q: "At the canteen, what is the main purpose of isolating a person with a contagious disease?",
            options: [
                "To increase the mutation rate of the pathogen",
                "To make the disease non-infectious instantly",
                "To reduce the chance of the pathogen spreading to other people",
                "To replace all medical treatment"
            ],
            answer: 2,
            explain: "Isolation helps break the chain of transmission."
        },
        {
            id: "s9-mcq-373", topic: "infectious-disease",
            q: "At the canteen, which example describes vector transmission?",
            options: [
                "A person inheriting a gene from a parent",
                "Heat moving through a metal spoon",
                "A battery supplying a lamp",
                "A mosquito carrying a pathogen from one person to another"
            ],
            answer: 3,
            explain: "A vector is an organism that carries a pathogen between hosts."
        },
        {
            id: "s9-mcq-374", topic: "infectious-disease",
            q: "At the canteen, why should food be cooked and stored safely when preventing infectious disease?",
            options: [
                "Unsafe food can allow pathogens to survive, grow or be transferred to people.",
                "Food safety only matters for non-infectious disease.",
                "Cold food cannot ever contain pathogens.",
                "Cooking creates all infectious diseases."
            ],
            answer: 0,
            explain: "Food hygiene is important because some pathogens spread through contaminated food."
        },
        {
            id: "s9-mcq-375", topic: "infectious-disease",
            q: "During a public-health poster task, an infectious disease is one that:",
            options: [
                "is always caused by poor diet",
                "is caused by a pathogen and can spread between organisms",
                "cannot be prevented",
                "only affects the lungs"
            ],
            answer: 1,
            explain: "Infectious diseases involve pathogens and transmission between hosts."
        },
        {
            id: "s9-mcq-376", topic: "infectious-disease",
            q: "During a public-health poster task, why are antibiotics not effective against most viral diseases?",
            options: [
                "Viruses are too large for antibiotics.",
                "Antibiotics only work in summer.",
                "Viruses do not have the bacterial structures that antibiotics target.",
                "Viruses contain no genetic material."
            ],
            answer: 2,
            explain: "Antibiotics act on bacteria, not on viruses."
        },
        {
            id: "s9-mcq-377", topic: "infectious-disease",
            q: "On a school camp, which action most directly reduces the spread of gastroenteritis in a school community?",
            options: [
                "Ignoring symptoms until the end of term",
                "Sharing drink bottles to build immunity",
                "Taking antibiotics for every illness",
                "Using prevention steps that interrupt contaminated hands, food or water"
            ],
            answer: 3,
            explain: "Prevention works by breaking the pathway of transmission."
        },
        {
            id: "s9-mcq-378", topic: "infectious-disease",
            q: "During a public-health poster task, vaccination helps protect a community because it:",
            options: [
                "reduces the number of people who are likely to become infected and spread the pathogen",
                "kills all pathogens on every surface instantly",
                "works only for bacterial diseases",
                "removes the need for hygiene"
            ],
            answer: 0,
            explain: "Vaccination can reduce transmission and protect vulnerable people."
        },
        {
            id: "s9-mcq-379", topic: "infectious-disease",
            q: "On a school camp, what type of pathogen causes salmonella food poisoning in this example?",
            options: [
                "mineral",
                "bacterium",
                "insulator",
                "fuel"
            ],
            answer: 1,
            explain: "Different infectious diseases are caused by different types of pathogens."
        },
        {
            id: "s9-mcq-380", topic: "infectious-disease",
            q: "During a public-health poster task, why is handwashing effective against many infectious diseases?",
            options: [
                "It turns viruses into bacteria.",
                "It guarantees that nobody will ever get sick.",
                "It removes or kills pathogens before they can be transferred to a new host.",
                "It replaces the body's immune system."
            ],
            answer: 2,
            explain: "Hand hygiene can interrupt transmission from surfaces and hands."
        },
        {
            id: "s9-mcq-381", topic: "infectious-disease",
            q: "During a public-health poster task, what is the main purpose of isolating a person with a contagious disease?",
            options: [
                "To increase the mutation rate of the pathogen",
                "To make the disease non-infectious instantly",
                "To replace all medical treatment",
                "To reduce the chance of the pathogen spreading to other people"
            ],
            answer: 3,
            explain: "Isolation helps break the chain of transmission."
        },
        {
            id: "s9-mcq-382", topic: "infectious-disease",
            q: "During a public-health poster task, which example describes vector transmission?",
            options: [
                "A mosquito carrying a pathogen from one person to another",
                "A person inheriting a gene from a parent",
                "Heat moving through a metal spoon",
                "A battery supplying a lamp"
            ],
            answer: 0,
            explain: "A vector is an organism that carries a pathogen between hosts."
        },
        {
            id: "s9-mcq-383", topic: "infectious-disease",
            q: "During a public-health poster task, why should food be cooked and stored safely when preventing infectious disease?",
            options: [
                "Food safety only matters for non-infectious disease.",
                "Unsafe food can allow pathogens to survive, grow or be transferred to people.",
                "Cold food cannot ever contain pathogens.",
                "Cooking creates all infectious diseases."
            ],
            answer: 1,
            explain: "Food hygiene is important because some pathogens spread through contaminated food."
        },
        {
            id: "s9-mcq-384", topic: "infectious-disease",
            q: "In a sports-team changeroom, an infectious disease is one that:",
            options: [
                "is always caused by poor diet",
                "cannot be prevented",
                "is caused by a pathogen and can spread between organisms",
                "only affects the lungs"
            ],
            answer: 2,
            explain: "Infectious diseases involve pathogens and transmission between hosts."
        },
        {
            id: "s9-mcq-385", topic: "infectious-disease",
            q: "In a sports-team changeroom, why are antibiotics not effective against most viral diseases?",
            options: [
                "Viruses are too large for antibiotics.",
                "Antibiotics only work in summer.",
                "Viruses contain no genetic material.",
                "Viruses do not have the bacterial structures that antibiotics target."
            ],
            answer: 3,
            explain: "Antibiotics act on bacteria, not on viruses."
        },
        {
            id: "s9-mcq-386", topic: "infectious-disease",
            q: "In a tropical holiday setting, which action most directly reduces the spread of athlete's foot in a school community?",
            options: [
                "Using prevention steps that interrupt shared damp surfaces",
                "Ignoring symptoms until the end of term",
                "Sharing drink bottles to build immunity",
                "Taking antibiotics for every illness"
            ],
            answer: 0,
            explain: "Prevention works by breaking the pathway of transmission."
        },
        /* ----- Additional Non-infectious disease ----- */
        {
            id: "s9-mcq-387", topic: "noninfectious-disease",
            q: "In a community health lesson, a non-infectious disease is one that:",
            options: [
                "does not spread from person to person as a pathogen-based infection",
                "is always caused by a virus",
                "can only affect adults",
                "cannot be influenced by lifestyle"
            ],
            answer: 0,
            explain: "Non-infectious diseases are not transmitted between people like infectious diseases."
        },
        {
            id: "s9-mcq-388", topic: "noninfectious-disease",
            q: "In a community health lesson, which is a risk factor linked to skin cancer?",
            options: [
                "sharing a desk with a sick friend",
                "too much UV exposure",
                "using soap before lunch",
                "receiving a vaccine"
            ],
            answer: 1,
            explain: "Risk factors can include lifestyle, environment or inherited influences."
        },
        {
            id: "s9-mcq-389", topic: "noninfectious-disease",
            q: "In a community health lesson, which action would most likely reduce the risk of some non-infectious diseases?",
            options: [
                "Ignoring sleep and diet",
                "Taking antibiotics for every illness",
                "Maintaining healthy food choices, regular exercise and avoiding harmful substances",
                "Sharing water bottles at school"
            ],
            answer: 2,
            explain: "Many non-infectious diseases are linked to lifestyle choices that can be improved."
        },
        {
            id: "s9-mcq-390", topic: "noninfectious-disease",
            q: "In a community health lesson, why are diseases such as asthma described as non-infectious?",
            options: [
                "They cannot affect body systems.",
                "They always have a single cause only.",
                "They disappear without treatment every time.",
                "They are not transmitted by pathogens from one person to another."
            ],
            answer: 3,
            explain: "Non-infectious diseases may have complex causes but are not contagious."
        },
        {
            id: "s9-mcq-391", topic: "noninfectious-disease",
            q: "In a community health lesson, which statement about genetics and lifestyle is most accurate?",
            options: [
                "Both inherited factors and lifestyle choices can influence the risk of non-infectious disease.",
                "Only genes matter.",
                "Only lifestyle matters.",
                "Neither has any effect on disease risk."
            ],
            answer: 0,
            explain: "Many non-infectious diseases are influenced by several interacting factors."
        },
        {
            id: "s9-mcq-392", topic: "noninfectious-disease",
            q: "In a community health lesson, why is regular physical activity recommended for good health?",
            options: [
                "It makes infectious diseases impossible.",
                "It can lower the risk of several non-infectious diseases and improve body function.",
                "It removes the need for balanced nutrition.",
                "It turns all stored fat into muscle instantly."
            ],
            answer: 1,
            explain: "Exercise supports cardiovascular, metabolic and skeletal health."
        },
        {
            id: "s9-mcq-393", topic: "noninfectious-disease",
            q: "In a community health lesson, which example is most clearly a non-infectious disease risk?",
            options: [
                "A sneeze spreading droplets",
                "A bacterium growing on food",
                "Long-term UV exposure damaging skin cells",
                "A mosquito carrying a pathogen"
            ],
            answer: 2,
            explain: "UV radiation can increase the risk of skin cancer, which is non-infectious."
        },
        {
            id: "s9-mcq-394", topic: "noninfectious-disease",
            q: "In a community health lesson, why are screening and check-ups useful for some non-infectious diseases?",
            options: [
                "They make vaccines unnecessary.",
                "They guarantee that every disease can be cured.",
                "They only work for infectious diseases.",
                "They can help detect problems early and support earlier treatment or lifestyle changes."
            ],
            answer: 3,
            explain: "Early detection can improve health outcomes."
        },
        {
            id: "s9-mcq-395", topic: "noninfectious-disease",
            q: "In a community health lesson, which prevention idea is most evidence-based for heart disease?",
            options: [
                "Not smoking and maintaining a healthy lifestyle reduce risk.",
                "Ignore long-term habits because genes decide everything.",
                "Wait until symptoms are severe before changing anything.",
                "Use antibiotics whenever you feel tired."
            ],
            answer: 0,
            explain: "Reducing known risk factors can help lower disease risk."
        },
        {
            id: "s9-mcq-396", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, a non-infectious disease is one that:",
            options: [
                "is always caused by a virus",
                "does not spread from person to person as a pathogen-based infection",
                "can only affect adults",
                "cannot be influenced by lifestyle"
            ],
            answer: 1,
            explain: "Non-infectious diseases are not transmitted between people like infectious diseases."
        },
        {
            id: "s9-mcq-397", topic: "noninfectious-disease",
            q: "In a community health lesson, which is a risk factor linked to osteoporosis?",
            options: [
                "sharing a desk with a sick friend",
                "using soap before lunch",
                "low calcium intake and lack of weight-bearing exercise",
                "receiving a vaccine"
            ],
            answer: 2,
            explain: "Risk factors can include lifestyle, environment or inherited influences."
        },
        {
            id: "s9-mcq-398", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, which action would most likely reduce the risk of some non-infectious diseases?",
            options: [
                "Ignoring sleep and diet",
                "Taking antibiotics for every illness",
                "Sharing water bottles at school",
                "Maintaining healthy food choices, regular exercise and avoiding harmful substances"
            ],
            answer: 3,
            explain: "Many non-infectious diseases are linked to lifestyle choices that can be improved."
        },
        {
            id: "s9-mcq-399", topic: "noninfectious-disease",
            q: "In a community health lesson, why are diseases such as type 2 diabetes described as non-infectious?",
            options: [
                "They are not transmitted by pathogens from one person to another.",
                "They cannot affect body systems.",
                "They always have a single cause only.",
                "They disappear without treatment every time."
            ],
            answer: 0,
            explain: "Non-infectious diseases may have complex causes but are not contagious."
        },
        {
            id: "s9-mcq-400", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, which statement about genetics and lifestyle is most accurate?",
            options: [
                "Only genes matter.",
                "Both inherited factors and lifestyle choices can influence the risk of non-infectious disease.",
                "Only lifestyle matters.",
                "Neither has any effect on disease risk."
            ],
            answer: 1,
            explain: "Many non-infectious diseases are influenced by several interacting factors."
        },
        {
            id: "s9-mcq-401", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, why is regular physical activity recommended for good health?",
            options: [
                "It makes infectious diseases impossible.",
                "It removes the need for balanced nutrition.",
                "It can lower the risk of several non-infectious diseases and improve body function.",
                "It turns all stored fat into muscle instantly."
            ],
            answer: 2,
            explain: "Exercise supports cardiovascular, metabolic and skeletal health."
        },
        {
            id: "s9-mcq-402", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, which example is most clearly a non-infectious disease risk?",
            options: [
                "A sneeze spreading droplets",
                "A bacterium growing on food",
                "A mosquito carrying a pathogen",
                "Long-term UV exposure damaging skin cells"
            ],
            answer: 3,
            explain: "UV radiation can increase the risk of skin cancer, which is non-infectious."
        },
        {
            id: "s9-mcq-403", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, why are screening and check-ups useful for some non-infectious diseases?",
            options: [
                "They can help detect problems early and support earlier treatment or lifestyle changes.",
                "They make vaccines unnecessary.",
                "They guarantee that every disease can be cured.",
                "They only work for infectious diseases."
            ],
            answer: 0,
            explain: "Early detection can improve health outcomes."
        },
        {
            id: "s9-mcq-404", topic: "noninfectious-disease",
            q: "In a community health lesson, which prevention idea is most evidence-based for lung disease?",
            options: [
                "Ignore long-term habits because genes decide everything.",
                "Avoiding smoking and reducing exposure lowers risk.",
                "Wait until symptoms are severe before changing anything.",
                "Use antibiotics whenever you feel tired."
            ],
            answer: 1,
            explain: "Reducing known risk factors can help lower disease risk."
        },
        {
            id: "s9-mcq-405", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, a non-infectious disease is one that:",
            options: [
                "is always caused by a virus",
                "can only affect adults",
                "does not spread from person to person as a pathogen-based infection",
                "cannot be influenced by lifestyle"
            ],
            answer: 2,
            explain: "Non-infectious diseases are not transmitted between people like infectious diseases."
        },
        {
            id: "s9-mcq-406", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, which is a risk factor linked to skin cancer?",
            options: [
                "sharing a desk with a sick friend",
                "using soap before lunch",
                "receiving a vaccine",
                "too much UV exposure"
            ],
            answer: 3,
            explain: "Risk factors can include lifestyle, environment or inherited influences."
        },
        {
            id: "s9-mcq-407", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, which action would most likely reduce the risk of some non-infectious diseases?",
            options: [
                "Maintaining healthy food choices, regular exercise and avoiding harmful substances",
                "Ignoring sleep and diet",
                "Taking antibiotics for every illness",
                "Sharing water bottles at school"
            ],
            answer: 0,
            explain: "Many non-infectious diseases are linked to lifestyle choices that can be improved."
        },
        {
            id: "s9-mcq-408", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, why are diseases such as asthma described as non-infectious?",
            options: [
                "They cannot affect body systems.",
                "They are not transmitted by pathogens from one person to another.",
                "They always have a single cause only.",
                "They disappear without treatment every time."
            ],
            answer: 1,
            explain: "Non-infectious diseases may have complex causes but are not contagious."
        },
        {
            id: "s9-mcq-409", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, which statement about genetics and lifestyle is most accurate?",
            options: [
                "Only genes matter.",
                "Only lifestyle matters.",
                "Both inherited factors and lifestyle choices can influence the risk of non-infectious disease.",
                "Neither has any effect on disease risk."
            ],
            answer: 2,
            explain: "Many non-infectious diseases are influenced by several interacting factors."
        },
        {
            id: "s9-mcq-410", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, why is regular physical activity recommended for good health?",
            options: [
                "It makes infectious diseases impossible.",
                "It removes the need for balanced nutrition.",
                "It turns all stored fat into muscle instantly.",
                "It can lower the risk of several non-infectious diseases and improve body function."
            ],
            answer: 3,
            explain: "Exercise supports cardiovascular, metabolic and skeletal health."
        },
        {
            id: "s9-mcq-411", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, which example is most clearly a non-infectious disease risk?",
            options: [
                "Long-term UV exposure damaging skin cells",
                "A sneeze spreading droplets",
                "A bacterium growing on food",
                "A mosquito carrying a pathogen"
            ],
            answer: 0,
            explain: "UV radiation can increase the risk of skin cancer, which is non-infectious."
        },
        {
            id: "s9-mcq-412", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, why are screening and check-ups useful for some non-infectious diseases?",
            options: [
                "They make vaccines unnecessary.",
                "They can help detect problems early and support earlier treatment or lifestyle changes.",
                "They guarantee that every disease can be cured.",
                "They only work for infectious diseases."
            ],
            answer: 1,
            explain: "Early detection can improve health outcomes."
        },
        {
            id: "s9-mcq-413", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, which prevention idea is most evidence-based for heart disease?",
            options: [
                "Ignore long-term habits because genes decide everything.",
                "Wait until symptoms are severe before changing anything.",
                "Not smoking and maintaining a healthy lifestyle reduce risk.",
                "Use antibiotics whenever you feel tired."
            ],
            answer: 2,
            explain: "Reducing known risk factors can help lower disease risk."
        },
        {
            id: "s9-mcq-414", topic: "noninfectious-disease",
            q: "At a family health check, a non-infectious disease is one that:",
            options: [
                "is always caused by a virus",
                "can only affect adults",
                "cannot be influenced by lifestyle",
                "does not spread from person to person as a pathogen-based infection"
            ],
            answer: 3,
            explain: "Non-infectious diseases are not transmitted between people like infectious diseases."
        },
        {
            id: "s9-mcq-415", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, which is a risk factor linked to osteoporosis?",
            options: [
                "low calcium intake and lack of weight-bearing exercise",
                "sharing a desk with a sick friend",
                "using soap before lunch",
                "receiving a vaccine"
            ],
            answer: 0,
            explain: "Risk factors can include lifestyle, environment or inherited influences."
        },
        {
            id: "s9-mcq-416", topic: "noninfectious-disease",
            q: "At a family health check, which action would most likely reduce the risk of some non-infectious diseases?",
            options: [
                "Ignoring sleep and diet",
                "Maintaining healthy food choices, regular exercise and avoiding harmful substances",
                "Taking antibiotics for every illness",
                "Sharing water bottles at school"
            ],
            answer: 1,
            explain: "Many non-infectious diseases are linked to lifestyle choices that can be improved."
        },
        {
            id: "s9-mcq-417", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, why are diseases such as type 2 diabetes described as non-infectious?",
            options: [
                "They cannot affect body systems.",
                "They always have a single cause only.",
                "They are not transmitted by pathogens from one person to another.",
                "They disappear without treatment every time."
            ],
            answer: 2,
            explain: "Non-infectious diseases may have complex causes but are not contagious."
        },
        {
            id: "s9-mcq-418", topic: "noninfectious-disease",
            q: "At a family health check, which statement about genetics and lifestyle is most accurate?",
            options: [
                "Only genes matter.",
                "Only lifestyle matters.",
                "Neither has any effect on disease risk.",
                "Both inherited factors and lifestyle choices can influence the risk of non-infectious disease."
            ],
            answer: 3,
            explain: "Many non-infectious diseases are influenced by several interacting factors."
        },
        {
            id: "s9-mcq-419", topic: "noninfectious-disease",
            q: "At a family health check, why is regular physical activity recommended for good health?",
            options: [
                "It can lower the risk of several non-infectious diseases and improve body function.",
                "It makes infectious diseases impossible.",
                "It removes the need for balanced nutrition.",
                "It turns all stored fat into muscle instantly."
            ],
            answer: 0,
            explain: "Exercise supports cardiovascular, metabolic and skeletal health."
        },
        {
            id: "s9-mcq-420", topic: "noninfectious-disease",
            q: "At a family health check, which example is most clearly a non-infectious disease risk?",
            options: [
                "A sneeze spreading droplets",
                "Long-term UV exposure damaging skin cells",
                "A bacterium growing on food",
                "A mosquito carrying a pathogen"
            ],
            answer: 1,
            explain: "UV radiation can increase the risk of skin cancer, which is non-infectious."
        },
        {
            id: "s9-mcq-421", topic: "noninfectious-disease",
            q: "At a family health check, why are screening and check-ups useful for some non-infectious diseases?",
            options: [
                "They make vaccines unnecessary.",
                "They guarantee that every disease can be cured.",
                "They can help detect problems early and support earlier treatment or lifestyle changes.",
                "They only work for infectious diseases."
            ],
            answer: 2,
            explain: "Early detection can improve health outcomes."
        },
        {
            id: "s9-mcq-422", topic: "noninfectious-disease",
            q: "For a beach-safety campaign, which prevention idea is most evidence-based for lung disease?",
            options: [
                "Ignore long-term habits because genes decide everything.",
                "Wait until symptoms are severe before changing anything.",
                "Use antibiotics whenever you feel tired.",
                "Avoiding smoking and reducing exposure lowers risk."
            ],
            answer: 3,
            explain: "Reducing known risk factors can help lower disease risk."
        },
        {
            id: "s9-mcq-423", topic: "noninfectious-disease",
            q: "In a skin-cancer awareness poster, a non-infectious disease is one that:",
            options: [
                "does not spread from person to person as a pathogen-based infection",
                "is always caused by a virus",
                "can only affect adults",
                "cannot be influenced by lifestyle"
            ],
            answer: 0,
            explain: "Non-infectious diseases are not transmitted between people like infectious diseases."
        },
        {
            id: "s9-mcq-424", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, which is a risk factor linked to skin cancer?",
            options: [
                "sharing a desk with a sick friend",
                "too much UV exposure",
                "using soap before lunch",
                "receiving a vaccine"
            ],
            answer: 1,
            explain: "Risk factors can include lifestyle, environment or inherited influences."
        },
        {
            id: "s9-mcq-425", topic: "noninfectious-disease",
            q: "In a skin-cancer awareness poster, which action would most likely reduce the risk of some non-infectious diseases?",
            options: [
                "Ignoring sleep and diet",
                "Taking antibiotics for every illness",
                "Maintaining healthy food choices, regular exercise and avoiding harmful substances",
                "Sharing water bottles at school"
            ],
            answer: 2,
            explain: "Many non-infectious diseases are linked to lifestyle choices that can be improved."
        },
        {
            id: "s9-mcq-426", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, why are diseases such as asthma described as non-infectious?",
            options: [
                "They cannot affect body systems.",
                "They always have a single cause only.",
                "They disappear without treatment every time.",
                "They are not transmitted by pathogens from one person to another."
            ],
            answer: 3,
            explain: "Non-infectious diseases may have complex causes but are not contagious."
        },
        {
            id: "s9-mcq-427", topic: "noninfectious-disease",
            q: "In a skin-cancer awareness poster, which statement about genetics and lifestyle is most accurate?",
            options: [
                "Both inherited factors and lifestyle choices can influence the risk of non-infectious disease.",
                "Only genes matter.",
                "Only lifestyle matters.",
                "Neither has any effect on disease risk."
            ],
            answer: 0,
            explain: "Many non-infectious diseases are influenced by several interacting factors."
        },
        {
            id: "s9-mcq-428", topic: "noninfectious-disease",
            q: "In a skin-cancer awareness poster, why is regular physical activity recommended for good health?",
            options: [
                "It makes infectious diseases impossible.",
                "It can lower the risk of several non-infectious diseases and improve body function.",
                "It removes the need for balanced nutrition.",
                "It turns all stored fat into muscle instantly."
            ],
            answer: 1,
            explain: "Exercise supports cardiovascular, metabolic and skeletal health."
        },
        {
            id: "s9-mcq-429", topic: "noninfectious-disease",
            q: "In a skin-cancer awareness poster, which example is most clearly a non-infectious disease risk?",
            options: [
                "A sneeze spreading droplets",
                "A bacterium growing on food",
                "Long-term UV exposure damaging skin cells",
                "A mosquito carrying a pathogen"
            ],
            answer: 2,
            explain: "UV radiation can increase the risk of skin cancer, which is non-infectious."
        },
        {
            id: "s9-mcq-430", topic: "noninfectious-disease",
            q: "In a skin-cancer awareness poster, why are screening and check-ups useful for some non-infectious diseases?",
            options: [
                "They make vaccines unnecessary.",
                "They guarantee that every disease can be cured.",
                "They only work for infectious diseases.",
                "They can help detect problems early and support earlier treatment or lifestyle changes."
            ],
            answer: 3,
            explain: "Early detection can improve health outcomes."
        },
        {
            id: "s9-mcq-431", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, which prevention idea is most evidence-based for heart disease?",
            options: [
                "Not smoking and maintaining a healthy lifestyle reduce risk.",
                "Ignore long-term habits because genes decide everything.",
                "Wait until symptoms are severe before changing anything.",
                "Use antibiotics whenever you feel tired."
            ],
            answer: 0,
            explain: "Reducing known risk factors can help lower disease risk."
        },
        {
            id: "s9-mcq-432", topic: "noninfectious-disease",
            q: "For a heart-health program, a non-infectious disease is one that:",
            options: [
                "is always caused by a virus",
                "does not spread from person to person as a pathogen-based infection",
                "can only affect adults",
                "cannot be influenced by lifestyle"
            ],
            answer: 1,
            explain: "Non-infectious diseases are not transmitted between people like infectious diseases."
        },
        {
            id: "s9-mcq-433", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, which is a risk factor linked to osteoporosis?",
            options: [
                "sharing a desk with a sick friend",
                "using soap before lunch",
                "low calcium intake and lack of weight-bearing exercise",
                "receiving a vaccine"
            ],
            answer: 2,
            explain: "Risk factors can include lifestyle, environment or inherited influences."
        },
        {
            id: "s9-mcq-434", topic: "noninfectious-disease",
            q: "For a heart-health program, which action would most likely reduce the risk of some non-infectious diseases?",
            options: [
                "Ignoring sleep and diet",
                "Taking antibiotics for every illness",
                "Sharing water bottles at school",
                "Maintaining healthy food choices, regular exercise and avoiding harmful substances"
            ],
            answer: 3,
            explain: "Many non-infectious diseases are linked to lifestyle choices that can be improved."
        },
        {
            id: "s9-mcq-435", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, why are diseases such as type 2 diabetes described as non-infectious?",
            options: [
                "They are not transmitted by pathogens from one person to another.",
                "They cannot affect body systems.",
                "They always have a single cause only.",
                "They disappear without treatment every time."
            ],
            answer: 0,
            explain: "Non-infectious diseases may have complex causes but are not contagious."
        },
        {
            id: "s9-mcq-436", topic: "noninfectious-disease",
            q: "For a heart-health program, which statement about genetics and lifestyle is most accurate?",
            options: [
                "Only genes matter.",
                "Both inherited factors and lifestyle choices can influence the risk of non-infectious disease.",
                "Only lifestyle matters.",
                "Neither has any effect on disease risk."
            ],
            answer: 1,
            explain: "Many non-infectious diseases are influenced by several interacting factors."
        },
        {
            id: "s9-mcq-437", topic: "noninfectious-disease",
            q: "For a heart-health program, why is regular physical activity recommended for good health?",
            options: [
                "It makes infectious diseases impossible.",
                "It removes the need for balanced nutrition.",
                "It can lower the risk of several non-infectious diseases and improve body function.",
                "It turns all stored fat into muscle instantly."
            ],
            answer: 2,
            explain: "Exercise supports cardiovascular, metabolic and skeletal health."
        },
        {
            id: "s9-mcq-438", topic: "noninfectious-disease",
            q: "For a heart-health program, which example is most clearly a non-infectious disease risk?",
            options: [
                "A sneeze spreading droplets",
                "A bacterium growing on food",
                "A mosquito carrying a pathogen",
                "Long-term UV exposure damaging skin cells"
            ],
            answer: 3,
            explain: "UV radiation can increase the risk of skin cancer, which is non-infectious."
        },
        {
            id: "s9-mcq-439", topic: "noninfectious-disease",
            q: "For a heart-health program, why are screening and check-ups useful for some non-infectious diseases?",
            options: [
                "They can help detect problems early and support earlier treatment or lifestyle changes.",
                "They make vaccines unnecessary.",
                "They guarantee that every disease can be cured.",
                "They only work for infectious diseases."
            ],
            answer: 0,
            explain: "Early detection can improve health outcomes."
        },
        {
            id: "s9-mcq-440", topic: "noninfectious-disease",
            q: "During a sports-medicine unit, which prevention idea is most evidence-based for lung disease?",
            options: [
                "Ignore long-term habits because genes decide everything.",
                "Avoiding smoking and reducing exposure lowers risk.",
                "Wait until symptoms are severe before changing anything.",
                "Use antibiotics whenever you feel tired."
            ],
            answer: 1,
            explain: "Reducing known risk factors can help lower disease risk."
        },
        {
            id: "s9-mcq-441", topic: "noninfectious-disease",
            q: "In a bones-and-diet discussion, a non-infectious disease is one that:",
            options: [
                "is always caused by a virus",
                "can only affect adults",
                "does not spread from person to person as a pathogen-based infection",
                "cannot be influenced by lifestyle"
            ],
            answer: 2,
            explain: "Non-infectious diseases are not transmitted between people like infectious diseases."
        },
        {
            id: "s9-mcq-442", topic: "noninfectious-disease",
            q: "At a family health check, which is a risk factor linked to skin cancer?",
            options: [
                "sharing a desk with a sick friend",
                "using soap before lunch",
                "receiving a vaccine",
                "too much UV exposure"
            ],
            answer: 3,
            explain: "Risk factors can include lifestyle, environment or inherited influences."
        },
        {
            id: "s9-mcq-443", topic: "noninfectious-disease",
            q: "In a bones-and-diet discussion, which action would most likely reduce the risk of some non-infectious diseases?",
            options: [
                "Maintaining healthy food choices, regular exercise and avoiding harmful substances",
                "Ignoring sleep and diet",
                "Taking antibiotics for every illness",
                "Sharing water bottles at school"
            ],
            answer: 0,
            explain: "Many non-infectious diseases are linked to lifestyle choices that can be improved."
        },
        /* ----- Additional Science skills ----- */
        {
            id: "s9-mcq-444", topic: "science-skills",
            q: "In a hot-water cup investigation, in an investigation about comparing insulating materials around hot-water cups, what is the independent variable?",
            options: [
                "type of insulating material",
                "temperature change of the water",
                "starting water temperature",
                "the conclusion"
            ],
            answer: 0,
            explain: "The independent variable is the factor deliberately changed by the scientist."
        },
        {
            id: "s9-mcq-445", topic: "science-skills",
            q: "When testing how wire length changes the current or resistance in a circuit, what is the dependent variable?",
            options: [
                "wire length",
                "current or resistance",
                "wire material",
                "the hypothesis"
            ],
            answer: 1,
            explain: "The dependent variable is the measurement that changes in response to the independent variable."
        },
        {
            id: "s9-mcq-446", topic: "science-skills",
            q: "In a hot-water cup investigation, which action would most improve the reliability of data in a fair test?",
            options: [
                "Change several variables at once",
                "Ignore unusual data without checking it",
                "Repeat trials and compare the results",
                "Choose the result that best matches the hypothesis"
            ],
            answer: 2,
            explain: "Repeated trials help show whether a pattern is consistent."
        },
        {
            id: "s9-mcq-447", topic: "science-skills",
            q: "In a hot-water cup investigation, what should be done first when one result is very different from the rest?",
            options: [
                "Delete it immediately",
                "Change the hypothesis to fit it",
                "Use it as proof that the experiment is finished",
                "Check the method and measurements, then repeat the trial if needed"
            ],
            answer: 3,
            explain: "An unusual result should be investigated before any decision is made."
        },
        {
            id: "s9-mcq-448", topic: "science-skills",
            q: "In a hot-water cup investigation, which graph is usually most suitable for showing how one continuous variable changes with another?",
            options: [
                "A line graph",
                "A random picture",
                "A pie chart of labels only",
                "A paragraph without numbers"
            ],
            answer: 0,
            explain: "Line graphs are useful when both variables are continuous."
        },
        {
            id: "s9-mcq-449", topic: "science-skills",
            q: "In a hot-water cup investigation, why is it important to keep controlled variables the same?",
            options: [
                "So the data always matches the hypothesis",
                "So changes in the dependent variable are more likely to be caused by the independent variable",
                "So results become larger",
                "So no calculations are needed"
            ],
            answer: 1,
            explain: "Controlling variables improves the validity of the test."
        },
        {
            id: "s9-mcq-450", topic: "science-skills",
            q: "In a hot-water cup investigation, which conclusion is the most scientific?",
            options: [
                "A conclusion based only on personal opinion",
                "A conclusion that ignores results that do not fit",
                "A conclusion that refers to the data and acknowledges any limitations",
                "A conclusion written before the experiment"
            ],
            answer: 2,
            explain: "Scientific conclusions should use evidence and recognise uncertainty."
        },
        {
            id: "s9-mcq-451", topic: "science-skills",
            q: "In a hot-water cup investigation, what does calculating an average from repeated trials help with?",
            options: [
                "It removes the need to control variables",
                "It proves every result is correct",
                "It turns an anomaly into the right answer",
                "It gives a better estimate of the typical result"
            ],
            answer: 3,
            explain: "Averages can reduce the effect of random variation."
        },
        {
            id: "s9-mcq-452", topic: "science-skills",
            q: "In a hot-water cup investigation, why should tables and graphs include units?",
            options: [
                "Units show what was measured and make the data easier to interpret correctly.",
                "Units are only decoration.",
                "Units are needed only for biology.",
                "Units change the results after the experiment."
            ],
            answer: 0,
            explain: "Clear communication of scientific data includes units and labels."
        },
        {
            id: "s9-mcq-453", topic: "science-skills",
            q: "In a hot-water cup investigation, in an investigation about seeing how exercise affects pulse rate, what is the independent variable?",
            options: [
                "pulse rate",
                "exercise duration or intensity",
                "rest time before each trial",
                "the conclusion"
            ],
            answer: 1,
            explain: "The independent variable is the factor deliberately changed by the scientist."
        },
        {
            id: "s9-mcq-454", topic: "science-skills",
            q: "When comparing insulating materials on hot-water cups over time, what is the dependent variable?",
            options: [
                "type of insulating material",
                "starting water temperature",
                "temperature change of the water",
                "the hypothesis"
            ],
            answer: 2,
            explain: "The dependent variable is the measurement that changes in response to the independent variable."
        },
        {
            id: "s9-mcq-455", topic: "science-skills",
            q: "In a wire-length circuit test, which action would most improve the reliability of data in a fair test?",
            options: [
                "Change several variables at once",
                "Ignore unusual data without checking it",
                "Choose the result that best matches the hypothesis",
                "Repeat trials and compare the results"
            ],
            answer: 3,
            explain: "Repeated trials help show whether a pattern is consistent."
        },
        {
            id: "s9-mcq-456", topic: "science-skills",
            q: "In a wire-length circuit test, what should be done first when one result is very different from the rest?",
            options: [
                "Check the method and measurements, then repeat the trial if needed",
                "Delete it immediately",
                "Change the hypothesis to fit it",
                "Use it as proof that the experiment is finished"
            ],
            answer: 0,
            explain: "An unusual result should be investigated before any decision is made."
        },
        {
            id: "s9-mcq-457", topic: "science-skills",
            q: "In a wire-length circuit test, which graph is usually most suitable for showing how one continuous variable changes with another?",
            options: [
                "A random picture",
                "A line graph",
                "A pie chart of labels only",
                "A paragraph without numbers"
            ],
            answer: 1,
            explain: "Line graphs are useful when both variables are continuous."
        },
        {
            id: "s9-mcq-458", topic: "science-skills",
            q: "In a wire-length circuit test, why is it important to keep controlled variables the same?",
            options: [
                "So the data always matches the hypothesis",
                "So results become larger",
                "So changes in the dependent variable are more likely to be caused by the independent variable",
                "So no calculations are needed"
            ],
            answer: 2,
            explain: "Controlling variables improves the validity of the test."
        },
        {
            id: "s9-mcq-459", topic: "science-skills",
            q: "In a wire-length circuit test, which conclusion is the most scientific?",
            options: [
                "A conclusion based only on personal opinion",
                "A conclusion that ignores results that do not fit",
                "A conclusion written before the experiment",
                "A conclusion that refers to the data and acknowledges any limitations"
            ],
            answer: 3,
            explain: "Scientific conclusions should use evidence and recognise uncertainty."
        },
        {
            id: "s9-mcq-460", topic: "science-skills",
            q: "In a wire-length circuit test, what does calculating an average from repeated trials help with?",
            options: [
                "It gives a better estimate of the typical result",
                "It removes the need to control variables",
                "It proves every result is correct",
                "It turns an anomaly into the right answer"
            ],
            answer: 0,
            explain: "Averages can reduce the effect of random variation."
        },
        {
            id: "s9-mcq-461", topic: "science-skills",
            q: "In a wire-length circuit test, why should tables and graphs include units?",
            options: [
                "Units are only decoration.",
                "Units show what was measured and make the data easier to interpret correctly.",
                "Units are needed only for biology.",
                "Units change the results after the experiment."
            ],
            answer: 1,
            explain: "Clear communication of scientific data includes units and labels."
        },
        {
            id: "s9-mcq-462", topic: "science-skills",
            q: "In an investigation about checking how different handwashing times affect bacterial growth, what is the independent variable?",
            options: [
                "bacterial growth",
                "type of surface sampled",
                "washing time",
                "the conclusion"
            ],
            answer: 2,
            explain: "The independent variable is the factor deliberately changed by the scientist."
        },
        {
            id: "s9-mcq-463", topic: "science-skills",
            q: "In an exercise and pulse-rate investigation, what is the dependent variable?",
            options: [
                "exercise duration or intensity",
                "rest time before each trial",
                "the hypothesis",
                "pulse rate"
            ],
            answer: 3,
            explain: "The dependent variable is the measurement that changes in response to the independent variable."
        },
        {
            id: "s9-mcq-464", topic: "science-skills",
            q: "In an exercise and pulse-rate study, which action would most improve the reliability of data in a fair test?",
            options: [
                "Repeat trials and compare the results",
                "Change several variables at once",
                "Ignore unusual data without checking it",
                "Choose the result that best matches the hypothesis"
            ],
            answer: 0,
            explain: "Repeated trials help show whether a pattern is consistent."
        },
        {
            id: "s9-mcq-465", topic: "science-skills",
            q: "In an exercise and pulse-rate study, what should be done first when one result is very different from the rest?",
            options: [
                "Delete it immediately",
                "Check the method and measurements, then repeat the trial if needed",
                "Change the hypothesis to fit it",
                "Use it as proof that the experiment is finished"
            ],
            answer: 1,
            explain: "An unusual result should be investigated before any decision is made."
        },
        {
            id: "s9-mcq-466", topic: "science-skills",
            q: "In an exercise and pulse-rate study, which graph is usually most suitable for showing how one continuous variable changes with another?",
            options: [
                "A random picture",
                "A pie chart of labels only",
                "A line graph",
                "A paragraph without numbers"
            ],
            answer: 2,
            explain: "Line graphs are useful when both variables are continuous."
        },
        {
            id: "s9-mcq-467", topic: "science-skills",
            q: "In an exercise and pulse-rate study, why is it important to keep controlled variables the same?",
            options: [
                "So the data always matches the hypothesis",
                "So results become larger",
                "So no calculations are needed",
                "So changes in the dependent variable are more likely to be caused by the independent variable"
            ],
            answer: 3,
            explain: "Controlling variables improves the validity of the test."
        },
        {
            id: "s9-mcq-468", topic: "science-skills",
            q: "In an exercise and pulse-rate study, which conclusion is the most scientific?",
            options: [
                "A conclusion that refers to the data and acknowledges any limitations",
                "A conclusion based only on personal opinion",
                "A conclusion that ignores results that do not fit",
                "A conclusion written before the experiment"
            ],
            answer: 0,
            explain: "Scientific conclusions should use evidence and recognise uncertainty."
        },
        {
            id: "s9-mcq-469", topic: "science-skills",
            q: "In an exercise and pulse-rate study, what does calculating an average from repeated trials help with?",
            options: [
                "It removes the need to control variables",
                "It gives a better estimate of the typical result",
                "It proves every result is correct",
                "It turns an anomaly into the right answer"
            ],
            answer: 1,
            explain: "Averages can reduce the effect of random variation."
        },
        {
            id: "s9-mcq-470", topic: "science-skills",
            q: "In an exercise and pulse-rate study, why should tables and graphs include units?",
            options: [
                "Units are only decoration.",
                "Units are needed only for biology.",
                "Units show what was measured and make the data easier to interpret correctly.",
                "Units change the results after the experiment."
            ],
            answer: 2,
            explain: "Clear communication of scientific data includes units and labels."
        },
        {
            id: "s9-mcq-471", topic: "science-skills",
            q: "In an investigation about measuring how light intensity changes solar-panel output, what is the independent variable?",
            options: [
                "voltage or current produced",
                "panel area",
                "the conclusion",
                "light intensity"
            ],
            answer: 3,
            explain: "The independent variable is the factor deliberately changed by the scientist."
        },
        {
            id: "s9-mcq-472", topic: "science-skills",
            q: "In a plant-growth experiment, what is the dependent variable being measured?",
            options: [
                "bacterial growth",
                "washing time",
                "type of surface sampled",
                "the hypothesis"
            ],
            answer: 0,
            explain: "The dependent variable is the measurement that changes in response to the independent variable."
        },
        {
            id: "s9-mcq-473", topic: "science-skills",
            q: "In a plant-growth experiment, which action would most improve the reliability of data in a fair test?",
            options: [
                "Change several variables at once",
                "Repeat trials and compare the results",
                "Ignore unusual data without checking it",
                "Choose the result that best matches the hypothesis"
            ],
            answer: 1,
            explain: "Repeated trials help show whether a pattern is consistent."
        },
        {
            id: "s9-mcq-474", topic: "science-skills",
            q: "In a plant-growth experiment, what should be done first when one result is very different from the rest?",
            options: [
                "Delete it immediately",
                "Change the hypothesis to fit it",
                "Check the method and measurements, then repeat the trial if needed",
                "Use it as proof that the experiment is finished"
            ],
            answer: 2,
            explain: "An unusual result should be investigated before any decision is made."
        },
        {
            id: "s9-mcq-475", topic: "science-skills",
            q: "In a plant-growth experiment, which graph is usually most suitable for showing how one continuous variable changes with another?",
            options: [
                "A random picture",
                "A pie chart of labels only",
                "A paragraph without numbers",
                "A line graph"
            ],
            answer: 3,
            explain: "Line graphs are useful when both variables are continuous."
        },
        {
            id: "s9-mcq-476", topic: "science-skills",
            q: "In a plant-growth experiment, why is it important to keep controlled variables the same?",
            options: [
                "So changes in the dependent variable are more likely to be caused by the independent variable",
                "So the data always matches the hypothesis",
                "So results become larger",
                "So no calculations are needed"
            ],
            answer: 0,
            explain: "Controlling variables improves the validity of the test."
        },
        {
            id: "s9-mcq-477", topic: "science-skills",
            q: "In a plant-growth experiment, which conclusion is the most scientific?",
            options: [
                "A conclusion based only on personal opinion",
                "A conclusion that refers to the data and acknowledges any limitations",
                "A conclusion that ignores results that do not fit",
                "A conclusion written before the experiment"
            ],
            answer: 1,
            explain: "Scientific conclusions should use evidence and recognise uncertainty."
        },
        {
            id: "s9-mcq-478", topic: "science-skills",
            q: "In a plant-growth experiment, what does calculating an average from repeated trials help with?",
            options: [
                "It removes the need to control variables",
                "It proves every result is correct",
                "It gives a better estimate of the typical result",
                "It turns an anomaly into the right answer"
            ],
            answer: 2,
            explain: "Averages can reduce the effect of random variation."
        },
        {
            id: "s9-mcq-479", topic: "science-skills",
            q: "In a plant-growth experiment, why should tables and graphs include units?",
            options: [
                "Units are only decoration.",
                "Units are needed only for biology.",
                "Units change the results after the experiment.",
                "Units show what was measured and make the data easier to interpret correctly."
            ],
            answer: 3,
            explain: "Clear communication of scientific data includes units and labels."
        },
        {
            id: "s9-mcq-480", topic: "science-skills",
            q: "In an investigation about testing how wire length affects resistance, what is the independent variable?",
            options: [
                "wire length",
                "current or resistance",
                "wire material",
                "the conclusion"
            ],
            answer: 0,
            explain: "The independent variable is the factor deliberately changed by the scientist."
        },
        {
            id: "s9-mcq-481", topic: "science-skills",
            q: "In a dissolving-tablet test, what is the dependent variable being measured?",
            options: [
                "light intensity",
                "voltage or current produced",
                "panel area",
                "the hypothesis"
            ],
            answer: 1,
            explain: "The dependent variable is the measurement that changes in response to the independent variable."
        },
        {
            id: "s9-mcq-482", topic: "science-skills",
            q: "In a dissolving-tablet test, which action would most improve the reliability of data in a fair test?",
            options: [
                "Change several variables at once",
                "Ignore unusual data without checking it",
                "Repeat trials and compare the results",
                "Choose the result that best matches the hypothesis"
            ],
            answer: 2,
            explain: "Repeated trials help show whether a pattern is consistent."
        },
        {
            id: "s9-mcq-483", topic: "science-skills",
            q: "In a dissolving-tablet test, what should be done first when one result is very different from the rest?",
            options: [
                "Delete it immediately",
                "Change the hypothesis to fit it",
                "Use it as proof that the experiment is finished",
                "Check the method and measurements, then repeat the trial if needed"
            ],
            answer: 3,
            explain: "An unusual result should be investigated before any decision is made."
        },
        {
            id: "s9-mcq-484", topic: "science-skills",
            q: "In a dissolving-tablet test, which graph is usually most suitable for showing how one continuous variable changes with another?",
            options: [
                "A line graph",
                "A random picture",
                "A pie chart of labels only",
                "A paragraph without numbers"
            ],
            answer: 0,
            explain: "Line graphs are useful when both variables are continuous."
        },
        {
            id: "s9-mcq-485", topic: "science-skills",
            q: "In a dissolving-tablet test, why is it important to keep controlled variables the same?",
            options: [
                "So the data always matches the hypothesis",
                "So changes in the dependent variable are more likely to be caused by the independent variable",
                "So results become larger",
                "So no calculations are needed"
            ],
            answer: 1,
            explain: "Controlling variables improves the validity of the test."
        },
        {
            id: "s9-mcq-486", topic: "science-skills",
            q: "In a dissolving-tablet test, which conclusion is the most scientific?",
            options: [
                "A conclusion based only on personal opinion",
                "A conclusion that ignores results that do not fit",
                "A conclusion that refers to the data and acknowledges any limitations",
                "A conclusion written before the experiment"
            ],
            answer: 2,
            explain: "Scientific conclusions should use evidence and recognise uncertainty."
        },
        {
            id: "s9-mcq-487", topic: "science-skills",
            q: "In a dissolving-tablet test, what does calculating an average from repeated trials help with?",
            options: [
                "It removes the need to control variables",
                "It proves every result is correct",
                "It turns an anomaly into the right answer",
                "It gives a better estimate of the typical result"
            ],
            answer: 3,
            explain: "Averages can reduce the effect of random variation."
        },
        {
            id: "s9-mcq-488", topic: "science-skills",
            q: "In a dissolving-tablet test, why should tables and graphs include units?",
            options: [
                "Units show what was measured and make the data easier to interpret correctly.",
                "Units are only decoration.",
                "Units are needed only for biology.",
                "Units change the results after the experiment."
            ],
            answer: 0,
            explain: "Clear communication of scientific data includes units and labels."
        },
        {
            id: "s9-mcq-489", topic: "science-skills",
            q: "In a wire-length circuit test, in an investigation about comparing insulating materials around hot-water cups, what is the independent variable?",
            options: [
                "temperature change of the water",
                "type of insulating material",
                "starting water temperature",
                "the conclusion"
            ],
            answer: 1,
            explain: "The independent variable is the factor deliberately changed by the scientist."
        },
        {
            id: "s9-mcq-490", topic: "science-skills",
            q: "When testing how wire length affects a circuit, what is the dependent variable?",
            options: [
                "wire length",
                "wire material",
                "current or resistance",
                "the hypothesis"
            ],
            answer: 2,
            explain: "The dependent variable is the measurement that changes in response to the independent variable."
        },
        {
            id: "s9-mcq-491", topic: "science-skills",
            q: "In a pendulum investigation, which action would most improve the reliability of data in a fair test?",
            options: [
                "Change several variables at once",
                "Ignore unusual data without checking it",
                "Choose the result that best matches the hypothesis",
                "Repeat trials and compare the results"
            ],
            answer: 3,
            explain: "Repeated trials help show whether a pattern is consistent."
        },
        {
            id: "s9-mcq-492", topic: "science-skills",
            q: "In a pendulum investigation, what should be done first when one result is very different from the rest?",
            options: [
                "Check the method and measurements, then repeat the trial if needed",
                "Delete it immediately",
                "Change the hypothesis to fit it",
                "Use it as proof that the experiment is finished"
            ],
            answer: 0,
            explain: "An unusual result should be investigated before any decision is made."
        },
        {
            id: "s9-mcq-493", topic: "science-skills",
            q: "In a pendulum investigation, which graph is usually most suitable for showing how one continuous variable changes with another?",
            options: [
                "A random picture",
                "A line graph",
                "A pie chart of labels only",
                "A paragraph without numbers"
            ],
            answer: 1,
            explain: "Line graphs are useful when both variables are continuous."
        },
        {
            id: "s9-mcq-494", topic: "science-skills",
            q: "In a pendulum investigation, why is it important to keep controlled variables the same?",
            options: [
                "So the data always matches the hypothesis",
                "So results become larger",
                "So changes in the dependent variable are more likely to be caused by the independent variable",
                "So no calculations are needed"
            ],
            answer: 2,
            explain: "Controlling variables improves the validity of the test."
        },
        {
            id: "s9-mcq-495", topic: "science-skills",
            q: "In a pendulum investigation, which conclusion is the most scientific?",
            options: [
                "A conclusion based only on personal opinion",
                "A conclusion that ignores results that do not fit",
                "A conclusion written before the experiment",
                "A conclusion that refers to the data and acknowledges any limitations"
            ],
            answer: 3,
            explain: "Scientific conclusions should use evidence and recognise uncertainty."
        },
        {
            id: "s9-mcq-496", topic: "science-skills",
            q: "In a pendulum investigation, what does calculating an average from repeated trials help with?",
            options: [
                "It gives a better estimate of the typical result",
                "It removes the need to control variables",
                "It proves every result is correct",
                "It turns an anomaly into the right answer"
            ],
            answer: 0,
            explain: "Averages can reduce the effect of random variation."
        },
        {
            id: "s9-mcq-497", topic: "science-skills",
            q: "In a pendulum investigation, why should tables and graphs include units?",
            options: [
                "Units are only decoration.",
                "Units show what was measured and make the data easier to interpret correctly.",
                "Units are needed only for biology.",
                "Units change the results after the experiment."
            ],
            answer: 1,
            explain: "Clear communication of scientific data includes units and labels."
        },
        {
            id: "s9-mcq-498", topic: "science-skills",
            q: "In a wire-length circuit test, in an investigation about seeing how exercise affects pulse rate, what is the independent variable?",
            options: [
                "pulse rate",
                "rest time before each trial",
                "exercise duration or intensity",
                "the conclusion"
            ],
            answer: 2,
            explain: "The independent variable is the factor deliberately changed by the scientist."
        },
        {
            id: "s9-mcq-499", topic: "science-skills",
            q: "When comparing insulating materials around hot-water cups, what is the dependent variable?",
            options: [
                "type of insulating material",
                "starting water temperature",
                "the hypothesis",
                "temperature change of the water"
            ],
            answer: 3,
            explain: "The dependent variable is the measurement that changes in response to the independent variable."
        },
        {
            id: "s9-mcq-500", topic: "science-skills",
            q: "In a school survey with repeated trials, which action would most improve the reliability of data in a fair test?",
            options: [
                "Repeat trials and compare the results",
                "Change several variables at once",
                "Ignore unusual data without checking it",
                "Choose the result that best matches the hypothesis"
            ],
            answer: 0,
            explain: "Repeated trials help show whether a pattern is consistent."
        }
    ],

    short: [
        {
            id: "s9-sa-1", topic: "energy-conservation",
            q: "Explain the law of conservation of energy using a roller coaster as your example.",
            sample: "At the top of the track the roller coaster has a large amount of gravitational potential energy. As it moves down, that energy is transformed mainly into kinetic energy. Some energy is also transferred to the surroundings as sound and thermal energy because of friction. The total amount of energy is conserved even though the forms change.",
            marks: 4
        },
        {
            id: "s9-sa-2", topic: "energy-conservation",
            q: "Use the diagram to explain the useful and wasted energy transfers in a toaster.",
            diagram: {
                alt: "Energy transfer diagram showing electrical energy in, thermal output, and useful and wasted branches.",
                caption: "Energy transfers in a device",
                svg: energyFlowFigure()
            },
            sample: "A toaster takes in electrical energy. The useful output is thermal energy because that heats the bread. Some energy is also transferred as light and sound, and these are usually considered wasted outputs because they are not the main purpose of the toaster.",
            marks: 4
        },
        {
            id: "s9-sa-3", topic: "energy-sources",
            q: "Compare ONE renewable energy source with ONE non-renewable energy source. Include one advantage and one limitation of each.",
            sample: "A renewable source such as wind is replenished naturally and can produce electricity with very low greenhouse gas emissions during operation, but it is intermittent because wind speed changes. A non-renewable source such as coal can provide large amounts of power when needed, but it is finite and releases greenhouse gases and other pollutants when burned.",
            marks: 5
        },
        {
            id: "s9-sa-4", topic: "electrical-circuits",
            q: "The circuit shown has an open switch. Explain what happens when the switch is closed and describe the path of current.",
            diagram: {
                alt: "Simple circuit with one cell, one open switch and one lamp.",
                caption: "Simple circuit",
                svg: openCircuitFigure()
            },
            sample: "When the switch is closed, the circuit becomes complete so current can flow from the cell, through the wires, through the lamp and back to the cell. The lamp lights because charge now has a closed path through the circuit. Before the switch was closed, the open gap stopped current flow.",
            marks: 5
        },
        {
            id: "s9-sa-5", topic: "ohms-law",
            q: "A resistor has 9 V across it and a current of 3 A through it. Calculate the resistance and state ONE way to reduce the current.",
            sample: "Using V = IR, resistance equals V / I = 9 / 3 = 3 ohms. One way to reduce the current is to increase the resistance, for example by adding another resistor or using a resistor with a higher value. Reducing the voltage would also reduce the current.",
            marks: 4
        },
        {
            id: "s9-sa-6", topic: "ohms-law",
            q: "Explain why adding more resistance to a circuit usually changes the brightness of a lamp.",
            sample: "Greater resistance opposes the flow of current. If the supply voltage stays the same, increasing resistance reduces current. Many lamps become dimmer when the current decreases because less electrical energy is transferred each second to light and thermal energy in the lamp.",
            marks: 4
        },
        {
            id: "s9-sa-7", topic: "homeostasis",
            q: "Use the diagram to explain how the body responds when body temperature rises above normal.",
            diagram: {
                alt: "Homeostasis feedback loop showing body too hot, receptors detect change, effectors act, and cooling.",
                caption: "Temperature homeostasis",
                svg: homeostasisLoopFigure()
            },
            sample: "Receptors detect that body temperature is too high and send information to the control system, such as the brain. Effectors then respond, for example sweat glands produce sweat and blood vessels near the skin widen. These changes increase energy transfer to the surroundings and cool the body, helping temperature return to its normal range.",
            marks: 5
        },
        {
            id: "s9-sa-8", topic: "infectious-disease",
            q: "Compare an infectious disease with a non-infectious disease using ONE example of each.",
            sample: "An infectious disease is caused by a pathogen and can spread between organisms, such as influenza caused by a virus. A non-infectious disease does not spread person to person, such as asthma or type 2 diabetes. The key difference is whether a pathogen causes it and whether it is transmissible.",
            marks: 4
        },
        {
            id: "s9-sa-9", topic: "infectious-disease",
            q: "Explain TWO actions a school could use to reduce the spread of infectious disease.",
            sample: "A school can improve hand hygiene by providing soap or sanitiser and encouraging students to wash their hands regularly, which reduces transfer of pathogens. It can also encourage sick students to stay home and improve ventilation in crowded indoor spaces, which lowers the chance of transmission from one person to another.",
            marks: 5
        },
        {
            id: "s9-sa-10", topic: "homeostasis",
            q: "Describe TWO responses the body uses when it is too cold and explain how each helps maintain homeostasis.",
            sample: "The body may shiver, and muscle contractions release extra thermal energy that warms the body. Blood vessels near the skin may narrow, which reduces energy transfer to the surroundings. Both responses help return body temperature toward its normal range.",
            marks: 4
        },
        {
            id: "s9-sa-11", topic: "science-skills",
            q: "Study the graph and identify which appliance uses the most energy. Suggest ONE evidence-based strategy to reduce a household's energy use.",
            diagram: {
                alt: "Bar graph comparing weekly energy use of a TV, heater, fan and LED lights, with the heater bar highest.",
                caption: "Weekly appliance energy use",
                svg: energyUseBarFigure()
            },
            sample: "The heater uses the most energy because it has the tallest bar. One evidence-based strategy is to reduce heater use by improving insulation, sealing drafts or lowering the thermostat slightly. This targets the appliance with the largest energy use, so it is likely to make the biggest difference.",
            marks: 4
        },
        {
            id: "s9-sa-12", topic: "science-skills",
            q: "A student compares different insulating materials wrapped around identical cups of hot water. Identify the independent variable, dependent variable and ONE controlled variable, then explain why repeated trials are needed.",
            sample: "The independent variable is the type of insulating material. The dependent variable is the temperature change of the water after a set time. A controlled variable could be the starting water temperature, the amount of water, the cup size or the time interval. Repeated trials are needed to improve reliability and help identify any anomalies.",
            marks: 5
        },
        {
            id: "s9-sa-13", topic: "science-skills",
            q: "Use the graph to describe the relationship between voltage and current, then state whether the component appears to obey Ohm's law.",
            diagram: {
                alt: "Current-voltage graph showing a straight line through the origin.",
                caption: "Current-voltage graph",
                svg: ohmsLawGraphFigure()
            },
            sample: "The graph shows that current increases in a straight-line pattern as voltage increases, and the line goes through the origin. This means current is directly proportional to voltage. The component therefore appears to obey Ohm's law and has a constant resistance.",
            marks: 4
        },
        {
            id: "s9-sa-14", topic: "science-skills",
            q: "A class disease-spread investigation includes one result that is much higher than the other trials. Give TWO reasons this might happen and explain what should happen next.",
            sample: "The result might be due to a measurement or recording error, contamination, or the method not being followed consistently. The next step is to check the raw data and method, then repeat the trial if needed. The result should not be ignored automatically without investigation.",
            marks: 4
        },
        {
            id: "s9-sa-15", topic: "science-skills",
            q: "A remote town trials a new energy system. The trial shows lower fuel use, but high setup costs. Write an evidence-based conclusion about whether the town should consider adopting it.",
            sample: "A strong conclusion would recognise both pieces of evidence. The lower fuel use suggests the system could reduce ongoing running costs and environmental impact over time. However, the high setup cost may make it difficult to adopt immediately. A justified conclusion would suggest the town should consider adoption if long-term savings, reliability and maintenance data show the benefits outweigh the initial cost.",
            marks: 5
        },
        /* ----- Additional Energy conservation ----- */
        {
            id: "s9-sa-16", topic: "energy-conservation",
            q: "Explain the useful and wasted energy transfers in a kettle.",
            sample: "A clear answer identifies thermal energy as the main useful output in a kettle. It also explains that some input energy is transferred as sound energy or other unwanted outputs. The total energy is still conserved because the energy has changed form rather than disappeared.",
            marks: 4
        },
        {
            id: "s9-sa-17", topic: "energy-conservation",
            q: "A device takes in 300 J of energy and gives 220 J of useful output. Calculate the efficiency and explain what happens to the rest of the energy.",
            sample: "Efficiency = useful output divided by input multiplied by 100, so the efficiency is 73%. The remaining 80 J is wasted, usually as thermal energy or sound. The energy is conserved overall because it has been transferred to the surroundings.",
            marks: 5
        },
        {
            id: "s9-sa-18", topic: "energy-conservation",
            q: "Use a stretched elastic band being released to explain how energy can change form while still being conserved.",
            sample: "In this situation, energy changes mainly from elastic potential energy to kinetic energy. Some energy may also be transferred to the surroundings as sound or thermal energy because of friction. Even so, the total amount of energy is conserved because it is only transformed or transferred.",
            marks: 4
        },
        {
            id: "s9-sa-19", topic: "energy-conservation",
            q: "Describe ONE practical way to reduce wasted thermal energy in a hot drink and explain why it works.",
            sample: "One effective action is putting on a lid. This works because it reduces thermal energy transfer to the air. Reducing energy transfer means less energy is wasted and the system becomes more efficient.",
            marks: 4
        },
        {
            id: "s9-sa-20", topic: "energy-conservation",
            q: "Two appliances do the same job, but one uses less electrical energy for the same useful output. Explain which appliance is more efficient and why.",
            sample: "The appliance using less input energy for the same useful output is more efficient. It wastes a smaller proportion of its input energy, so a larger fraction is transferred into the useful output. This means it gives the same result with less wasted energy.",
            marks: 4
        },
        {
            id: "s9-sa-21", topic: "energy-conservation",
            q: "Students say energy is 'lost' when a machine makes heat and sound. Explain why this wording is not scientifically accurate.",
            sample: "Scientifically, energy is not lost overall. When a machine makes heat and sound, some energy has been transferred to the surroundings in forms that are not useful for the task. The total energy is still conserved, but more of it is wasted.",
            marks: 4
        },
        {
            id: "s9-sa-22", topic: "energy-conservation",
            q: "Explain the useful and wasted energy transfers in a fan heater.",
            sample: "A clear answer identifies thermal energy as the main useful output in a fan heater. It also explains that some input energy is transferred as sound energy or other unwanted outputs. The total energy is still conserved because the energy has changed form rather than disappeared.",
            marks: 4
        },
        {
            id: "s9-sa-23", topic: "energy-conservation",
            q: "A device takes in 300 J of energy and gives 180 J of useful output. Calculate the efficiency and explain what happens to the rest of the energy.",
            sample: "Efficiency = useful output divided by input multiplied by 100, so the efficiency is 60%. The remaining 120 J is wasted, usually as thermal energy or sound. The energy is conserved overall because it has been transferred to the surroundings.",
            marks: 5
        },
        {
            id: "s9-sa-24", topic: "energy-conservation",
            q: "Use a stretched elastic band being released to explain how energy can change form while still being conserved. Use a different real-world example in your answer.",
            sample: "In this situation, energy changes mainly from elastic potential energy to kinetic energy. Some energy may also be transferred to the surroundings as sound or thermal energy because of friction. Even so, the total amount of energy is conserved because it is only transformed or transferred.",
            marks: 4
        },
        {
            id: "s9-sa-25", topic: "energy-conservation",
            q: "Describe ONE practical way to reduce wasted thermal energy in a hot drink and explain why it works. Use a different real-world example in your answer.",
            sample: "One effective action is putting on a lid. This works because it reduces thermal energy transfer to the air. Reducing energy transfer means less energy is wasted and the system becomes more efficient.",
            marks: 4
        },
        {
            id: "s9-sa-26", topic: "energy-conservation",
            q: "Two appliances do the same job, but one uses less electrical energy for the same useful output. Explain which appliance is more efficient and why. Use a different real-world example in your answer.",
            sample: "The appliance using less input energy for the same useful output is more efficient. It wastes a smaller proportion of its input energy, so a larger fraction is transferred into the useful output. This means it gives the same result with less wasted energy.",
            marks: 4
        },
        {
            id: "s9-sa-27", topic: "energy-conservation",
            q: "Students say energy is 'lost' when a machine makes heat and sound. Explain why this wording is not scientifically accurate. Use a different real-world example in your answer.",
            sample: "Scientifically, energy is not lost overall. When a machine makes heat and sound, some energy has been transferred to the surroundings in forms that are not useful for the task. The total energy is still conserved, but more of it is wasted.",
            marks: 4
        },
        {
            id: "s9-sa-28", topic: "energy-conservation",
            q: "Explain the useful and wasted energy transfers in an electric drill.",
            sample: "A clear answer identifies kinetic energy as the main useful output in an electric drill. It also explains that some input energy is transferred as sound energy or other unwanted outputs. The total energy is still conserved because the energy has changed form rather than disappeared.",
            marks: 4
        },
        {
            id: "s9-sa-29", topic: "energy-conservation",
            q: "A device takes in 300 J of energy and gives 220 J of useful output. Calculate the efficiency and explain what happens to the rest of the energy. Use a different real-world example in your answer.",
            sample: "Efficiency = useful output divided by input multiplied by 100, so the efficiency is 73%. The remaining 80 J is wasted, usually as thermal energy or sound. The energy is conserved overall because it has been transferred to the surroundings.",
            marks: 5
        },
        {
            id: "s9-sa-30", topic: "energy-conservation",
            q: "Use a stretched elastic band being released to explain how energy can change form while still being conserved. Refer to an everyday situation where helpful.",
            sample: "In this situation, energy changes mainly from elastic potential energy to kinetic energy. Some energy may also be transferred to the surroundings as sound or thermal energy because of friction. Even so, the total amount of energy is conserved because it is only transformed or transferred.",
            marks: 4
        },
        {
            id: "s9-sa-31", topic: "energy-conservation",
            q: "Describe ONE practical way to reduce wasted thermal energy in a hot drink and explain why it works. Refer to an everyday situation where helpful.",
            sample: "One effective action is putting on a lid. This works because it reduces thermal energy transfer to the air. Reducing energy transfer means less energy is wasted and the system becomes more efficient.",
            marks: 4
        },
        {
            id: "s9-sa-32", topic: "energy-conservation",
            q: "Two appliances do the same job, but one uses less electrical energy for the same useful output. Explain which appliance is more efficient and why. Refer to an everyday situation where helpful.",
            sample: "The appliance using less input energy for the same useful output is more efficient. It wastes a smaller proportion of its input energy, so a larger fraction is transferred into the useful output. This means it gives the same result with less wasted energy.",
            marks: 4
        },
        {
            id: "s9-sa-33", topic: "energy-conservation",
            q: "Students say energy is 'lost' when a machine makes heat and sound. Explain why this wording is not scientifically accurate. Refer to an everyday situation where helpful.",
            sample: "Scientifically, energy is not lost overall. When a machine makes heat and sound, some energy has been transferred to the surroundings in forms that are not useful for the task. The total energy is still conserved, but more of it is wasted.",
            marks: 4
        },
        {
            id: "s9-sa-34", topic: "energy-conservation",
            q: "Explain the useful and wasted energy transfers in a torch.",
            sample: "A clear answer identifies light energy as the main useful output in a torch. It also explains that some input energy is transferred as thermal energy or other unwanted outputs. The total energy is still conserved because the energy has changed form rather than disappeared.",
            marks: 4
        },
        {
            id: "s9-sa-35", topic: "energy-conservation",
            q: "A device takes in 300 J of energy and gives 180 J of useful output. Calculate the efficiency and explain what happens to the rest of the energy. Use a different real-world example in your answer.",
            sample: "Efficiency = useful output divided by input multiplied by 100, so the efficiency is 60%. The remaining 120 J is wasted, usually as thermal energy or sound. The energy is conserved overall because it has been transferred to the surroundings.",
            marks: 5
        },
        {
            id: "s9-sa-36", topic: "energy-conservation",
            q: "Use a stretched elastic band being released to explain how energy can change form while still being conserved. Link your answer to efficiency or wasted energy where relevant.",
            sample: "In this situation, energy changes mainly from elastic potential energy to kinetic energy. Some energy may also be transferred to the surroundings as sound or thermal energy because of friction. Even so, the total amount of energy is conserved because it is only transformed or transferred.",
            marks: 4
        },
        {
            id: "s9-sa-37", topic: "energy-conservation",
            q: "Describe ONE practical way to reduce wasted thermal energy in a hot drink and explain why it works. Link your answer to efficiency or wasted energy where relevant.",
            sample: "One effective action is putting on a lid. This works because it reduces thermal energy transfer to the air. Reducing energy transfer means less energy is wasted and the system becomes more efficient.",
            marks: 4
        },
        {
            id: "s9-sa-38", topic: "energy-conservation",
            q: "Two appliances do the same job, but one uses less electrical energy for the same useful output. Explain which appliance is more efficient and why. Link your answer to efficiency or wasted energy where relevant.",
            sample: "The appliance using less input energy for the same useful output is more efficient. It wastes a smaller proportion of its input energy, so a larger fraction is transferred into the useful output. This means it gives the same result with less wasted energy.",
            marks: 4
        },
        /* ----- Additional Energy sources ----- */
        {
            id: "s9-sa-39", topic: "energy-sources",
            q: "Compare solar with coal as energy sources. Include one advantage and one limitation of each.",
            sample: "Solar is renewable because sunlight is replenished naturally. One limitation is that output drops when sunlight is weak. Coal can provide energy when needed, but it is finite and releases greenhouse gases when burned. A strong comparison uses evidence rather than opinion.",
            marks: 5
        },
        {
            id: "s9-sa-40", topic: "energy-sources",
            q: "A council is planning energy for a windy coastal community. Recommend ONE suitable option and justify your choice.",
            sample: "A suitable choice is wind turbines because regular coastal winds can provide a reliable input. The recommendation should also consider reliability, cost and environmental impact. A justified answer explains why the source matches the local conditions.",
            marks: 4
        },
        {
            id: "s9-sa-41", topic: "energy-sources",
            q: "Explain why battery storage can be important in a renewable energy system.",
            sample: "Battery storage can keep energy when renewable production is high and release it later when demand is higher or conditions change. This helps make the supply more reliable. It is especially useful when sunlight or wind is not constant.",
            marks: 4
        },
        {
            id: "s9-sa-42", topic: "energy-sources",
            q: "Explain why hydrogen may be useful in future energy systems, but why its environmental impact depends on production.",
            sample: "Hydrogen can store and transport energy and can be used in fuel cells, so it may help where batteries are less suitable. However, hydrogen is not a primary source of energy. If it is produced using fossil fuels, the environmental benefit is lower than if it is produced using low-emission electricity.",
            marks: 5
        },
        {
            id: "s9-sa-43", topic: "energy-sources",
            q: "Describe TWO criteria that should be used when evaluating a new energy technology.",
            sample: "Useful criteria include reliability, environmental impact, cost, energy output and suitability for the location. A strong answer explains that no technology should be judged on one feature alone. Several pieces of evidence should be compared fairly.",
            marks: 4
        },
        {
            id: "s9-sa-44", topic: "energy-sources",
            q: "Explain why many regions use a mix of renewable and non-renewable energy sources during the transition to lower emissions.",
            sample: "A mix can help keep electricity reliable while cleaner technologies and storage are expanded. Renewable sources can lower emissions, but some depend on changing weather. Using more than one source can help meet demand while systems are upgraded.",
            marks: 4
        },
        {
            id: "s9-sa-45", topic: "energy-sources",
            q: "Compare wind with natural gas as energy sources. Include one advantage and one limitation of each.",
            sample: "Wind is renewable because moving air can keep turning turbines. One limitation is that output depends on wind speed. Natural gas can provide energy when needed, but it is finite and methane leaks can worsen climate change. A strong comparison uses evidence rather than opinion.",
            marks: 5
        },
        {
            id: "s9-sa-46", topic: "energy-sources",
            q: "A council is planning energy for a mountain region with large rivers. Recommend ONE suitable option and justify your choice.",
            sample: "A suitable choice is hydroelectricity because flowing water can spin turbines continuously. The recommendation should also consider reliability, cost and environmental impact. A justified answer explains why the source matches the local conditions.",
            marks: 4
        },
        {
            id: "s9-sa-47", topic: "energy-sources",
            q: "Explain why battery storage can be important in a renewable energy system. Use a real community-energy example where helpful.",
            sample: "Battery storage can keep energy when renewable production is high and release it later when demand is higher or conditions change. This helps make the supply more reliable. It is especially useful when sunlight or wind is not constant.",
            marks: 4
        },
        {
            id: "s9-sa-48", topic: "energy-sources",
            q: "Explain why hydrogen may be useful in future energy systems, but why its environmental impact depends on production. Use a real community-energy example where helpful.",
            sample: "Hydrogen can store and transport energy and can be used in fuel cells, so it may help where batteries are less suitable. However, hydrogen is not a primary source of energy. If it is produced using fossil fuels, the environmental benefit is lower than if it is produced using low-emission electricity.",
            marks: 5
        },
        {
            id: "s9-sa-49", topic: "energy-sources",
            q: "Describe TWO criteria that should be used when evaluating a new energy technology. Use a real community-energy example where helpful.",
            sample: "Useful criteria include reliability, environmental impact, cost, energy output and suitability for the location. A strong answer explains that no technology should be judged on one feature alone. Several pieces of evidence should be compared fairly.",
            marks: 4
        },
        {
            id: "s9-sa-50", topic: "energy-sources",
            q: "Explain why many regions use a mix of renewable and non-renewable energy sources during the transition to lower emissions. Use a real community-energy example where helpful.",
            sample: "A mix can help keep electricity reliable while cleaner technologies and storage are expanded. Renewable sources can lower emissions, but some depend on changing weather. Using more than one source can help meet demand while systems are upgraded.",
            marks: 4
        },
        {
            id: "s9-sa-51", topic: "energy-sources",
            q: "Compare hydroelectricity with coal as energy sources. Include one advantage and one limitation of each.",
            sample: "Hydroelectricity is renewable because flowing water can keep spinning turbines. One limitation is that it depends on suitable water flow and dams. Coal can provide energy when needed, but it is finite and releases greenhouse gases when burned. A strong comparison uses evidence rather than opinion.",
            marks: 5
        },
        {
            id: "s9-sa-52", topic: "energy-sources",
            q: "A council is planning energy for a city trying to lower peak demand. Recommend ONE suitable option and justify your choice.",
            sample: "A suitable choice is battery storage paired with renewables because stored energy can be released when demand is high. The recommendation should also consider reliability, cost and environmental impact. A justified answer explains why the source matches the local conditions.",
            marks: 4
        },
        {
            id: "s9-sa-53", topic: "energy-sources",
            q: "Explain why battery storage can be important in a renewable energy system. Refer to supply reliability or storage where relevant.",
            sample: "Battery storage can keep energy when renewable production is high and release it later when demand is higher or conditions change. This helps make the supply more reliable. It is especially useful when sunlight or wind is not constant.",
            marks: 4
        },
        {
            id: "s9-sa-54", topic: "energy-sources",
            q: "Explain why hydrogen may be useful in future energy systems, but why its environmental impact depends on production. Refer to supply reliability or storage where relevant.",
            sample: "Hydrogen can store and transport energy and can be used in fuel cells, so it may help where batteries are less suitable. However, hydrogen is not a primary source of energy. If it is produced using fossil fuels, the environmental benefit is lower than if it is produced using low-emission electricity.",
            marks: 5
        },
        {
            id: "s9-sa-55", topic: "energy-sources",
            q: "Describe TWO criteria that should be used when evaluating a new energy technology. Refer to supply reliability or storage where relevant.",
            sample: "Useful criteria include reliability, environmental impact, cost, energy output and suitability for the location. A strong answer explains that no technology should be judged on one feature alone. Several pieces of evidence should be compared fairly.",
            marks: 4
        },
        {
            id: "s9-sa-56", topic: "energy-sources",
            q: "Explain why many regions use a mix of renewable and non-renewable energy sources during the transition to lower emissions. Refer to supply reliability or storage where relevant.",
            sample: "A mix can help keep electricity reliable while cleaner technologies and storage are expanded. Renewable sources can lower emissions, but some depend on changing weather. Using more than one source can help meet demand while systems are upgraded.",
            marks: 4
        },
        {
            id: "s9-sa-57", topic: "energy-sources",
            q: "Compare geothermal with natural gas as energy sources. Include one advantage and one limitation of each.",
            sample: "Geothermal is renewable because heat from inside Earth can be used. One limitation is that it suits only some locations. Natural gas can provide energy when needed, but it is finite and methane leaks can worsen climate change. A strong comparison uses evidence rather than opinion.",
            marks: 5
        },
        {
            id: "s9-sa-58", topic: "energy-sources",
            q: "A council is planning energy for an area with volcanic heat near the surface. Recommend ONE suitable option and justify your choice.",
            sample: "A suitable choice is geothermal energy because Earth's heat can be used more directly there. The recommendation should also consider reliability, cost and environmental impact. A justified answer explains why the source matches the local conditions.",
            marks: 4
        },
        {
            id: "s9-sa-59", topic: "energy-sources",
            q: "Explain why battery storage can be important in a renewable energy system. Mention one environmental or economic consideration.",
            sample: "Battery storage can keep energy when renewable production is high and release it later when demand is higher or conditions change. This helps make the supply more reliable. It is especially useful when sunlight or wind is not constant.",
            marks: 4
        },
        {
            id: "s9-sa-60", topic: "energy-sources",
            q: "Explain why hydrogen may be useful in future energy systems, but why its environmental impact depends on production. Mention one environmental or economic consideration.",
            sample: "Hydrogen can store and transport energy and can be used in fuel cells, so it may help where batteries are less suitable. However, hydrogen is not a primary source of energy. If it is produced using fossil fuels, the environmental benefit is lower than if it is produced using low-emission electricity.",
            marks: 5
        },
        {
            id: "s9-sa-61", topic: "energy-sources",
            q: "Describe TWO criteria that should be used when evaluating a new energy technology. Mention one environmental or economic consideration.",
            sample: "Useful criteria include reliability, environmental impact, cost, energy output and suitability for the location. A strong answer explains that no technology should be judged on one feature alone. Several pieces of evidence should be compared fairly.",
            marks: 4
        },
        /* ----- Additional Electrical circuits ----- */
        {
            id: "s9-sa-62", topic: "electrical-circuits",
            q: "Explain why a lamp does not light in an open circuit and what changes when the switch is closed.",
            sample: "In an open circuit the path is broken, so charge cannot flow all the way around the circuit. When the switch is closed, the path becomes complete and current can flow from the cell, through the lamp and back to the cell. The lamp lights because the circuit is closed.",
            marks: 4
        },
        {
            id: "s9-sa-63", topic: "electrical-circuits",
            q: "Compare a series circuit with a parallel circuit for two lamps.",
            sample: "A series circuit has one path, so both lamps are in the same loop. If one lamp breaks, both usually go off, and adding more lamps usually reduces current so they become dimmer. A parallel circuit has separate branches, so one lamp can stay on if the other breaks and each branch can receive the supply voltage.",
            marks: 5
        },
        {
            id: "s9-sa-64", topic: "electrical-circuits",
            q: "4 cells of 1.5 V are connected in series. Calculate the total voltage and explain why series cells are used.",
            sample: "The total voltage is 6.0 V because the voltages add in series. Cells are connected in series when a larger potential difference is needed to drive current through the circuit. A higher voltage can make some devices work more effectively.",
            marks: 4
        },
        {
            id: "s9-sa-65", topic: "electrical-circuits",
            q: "State whether graphite or dry wood is better for a wire core and explain why.",
            sample: "Graphite is better for the wire core because it is a conductor and allows current to flow easily. Dry wood is more suitable for covering the wire because it resists current and helps keep the user safe.",
            marks: 4
        },
        {
            id: "s9-sa-66", topic: "electrical-circuits",
            q: "Explain the difference between how an ammeter and a voltmeter are connected in a circuit.",
            sample: "An ammeter is connected in series so the current being measured flows through it. A voltmeter is connected in parallel across the component because it measures potential difference between two points. The different connections match the quantity each device measures.",
            marks: 4
        },
        {
            id: "s9-sa-67", topic: "electrical-circuits",
            q: "Describe the role of a fuse or circuit breaker in a household circuit.",
            sample: "A fuse or circuit breaker is a safety device. If the current becomes too high, it breaks the circuit so wires and appliances are less likely to overheat or catch fire. Its purpose is to protect people and equipment from dangerous currents.",
            marks: 4
        },
        {
            id: "s9-sa-68", topic: "electrical-circuits",
            q: "Explain why a lamp does not light in an open circuit and what changes when the switch is closed. Use a simple circuit example where helpful.",
            sample: "In an open circuit the path is broken, so charge cannot flow all the way around the circuit. When the switch is closed, the path becomes complete and current can flow from the cell, through the lamp and back to the cell. The lamp lights because the circuit is closed.",
            marks: 4
        },
        {
            id: "s9-sa-69", topic: "electrical-circuits",
            q: "Compare a series circuit with a parallel circuit for two lamps. Use a simple circuit example where helpful.",
            sample: "A series circuit has one path, so both lamps are in the same loop. If one lamp breaks, both usually go off, and adding more lamps usually reduces current so they become dimmer. A parallel circuit has separate branches, so one lamp can stay on if the other breaks and each branch can receive the supply voltage.",
            marks: 5
        },
        {
            id: "s9-sa-70", topic: "electrical-circuits",
            q: "4 cells of 1.5 V are connected in series. Calculate the total voltage and explain why series cells are used. Use a simple circuit example where helpful.",
            sample: "The total voltage is 6.0 V because the voltages add in series. Cells are connected in series when a larger potential difference is needed to drive current through the circuit. A higher voltage can make some devices work more effectively.",
            marks: 4
        },
        {
            id: "s9-sa-71", topic: "electrical-circuits",
            q: "State whether aluminium or plastic is better for a wire core and explain why.",
            sample: "Aluminium is better for the wire core because it is a conductor and allows current to flow easily. Plastic is more suitable for covering the wire because it resists current and helps keep the user safe.",
            marks: 4
        },
        {
            id: "s9-sa-72", topic: "electrical-circuits",
            q: "Explain the difference between how an ammeter and a voltmeter are connected in a circuit. Use a simple circuit example where helpful.",
            sample: "An ammeter is connected in series so the current being measured flows through it. A voltmeter is connected in parallel across the component because it measures potential difference between two points. The different connections match the quantity each device measures.",
            marks: 4
        },
        {
            id: "s9-sa-73", topic: "electrical-circuits",
            q: "Describe the role of a fuse or circuit breaker in a household circuit. Use a simple circuit example where helpful.",
            sample: "A fuse or circuit breaker is a safety device. If the current becomes too high, it breaks the circuit so wires and appliances are less likely to overheat or catch fire. Its purpose is to protect people and equipment from dangerous currents.",
            marks: 4
        },
        {
            id: "s9-sa-74", topic: "electrical-circuits",
            q: "Explain why a lamp does not light in an open circuit and what changes when the switch is closed. Refer to a household or school circuit where relevant.",
            sample: "In an open circuit the path is broken, so charge cannot flow all the way around the circuit. When the switch is closed, the path becomes complete and current can flow from the cell, through the lamp and back to the cell. The lamp lights because the circuit is closed.",
            marks: 4
        },
        {
            id: "s9-sa-75", topic: "electrical-circuits",
            q: "Compare a series circuit with a parallel circuit for two lamps. Refer to a household or school circuit where relevant.",
            sample: "A series circuit has one path, so both lamps are in the same loop. If one lamp breaks, both usually go off, and adding more lamps usually reduces current so they become dimmer. A parallel circuit has separate branches, so one lamp can stay on if the other breaks and each branch can receive the supply voltage.",
            marks: 5
        },
        {
            id: "s9-sa-76", topic: "electrical-circuits",
            q: "4 cells of 1.5 V are connected in series. Calculate the total voltage and explain why series cells are used. Refer to a household or school circuit where relevant.",
            sample: "The total voltage is 6.0 V because the voltages add in series. Cells are connected in series when a larger potential difference is needed to drive current through the circuit. A higher voltage can make some devices work more effectively.",
            marks: 4
        },
        {
            id: "s9-sa-77", topic: "electrical-circuits",
            q: "State whether graphite or dry wood is better for a wire core and explain why. Use a simple circuit example where helpful.",
            sample: "Graphite is better for the wire core because it is a conductor and allows current to flow easily. Dry wood is more suitable for covering the wire because it resists current and helps keep the user safe.",
            marks: 4
        },
        {
            id: "s9-sa-78", topic: "electrical-circuits",
            q: "Explain the difference between how an ammeter and a voltmeter are connected in a circuit. Refer to a household or school circuit where relevant.",
            sample: "An ammeter is connected in series so the current being measured flows through it. A voltmeter is connected in parallel across the component because it measures potential difference between two points. The different connections match the quantity each device measures.",
            marks: 4
        },
        {
            id: "s9-sa-79", topic: "electrical-circuits",
            q: "Describe the role of a fuse or circuit breaker in a household circuit. Refer to a household or school circuit where relevant.",
            sample: "A fuse or circuit breaker is a safety device. If the current becomes too high, it breaks the circuit so wires and appliances are less likely to overheat or catch fire. Its purpose is to protect people and equipment from dangerous currents.",
            marks: 4
        },
        {
            id: "s9-sa-80", topic: "electrical-circuits",
            q: "Explain why a lamp does not light in an open circuit and what changes when the switch is closed. Link your answer to how the circuit works in practice.",
            sample: "In an open circuit the path is broken, so charge cannot flow all the way around the circuit. When the switch is closed, the path becomes complete and current can flow from the cell, through the lamp and back to the cell. The lamp lights because the circuit is closed.",
            marks: 4
        },
        {
            id: "s9-sa-81", topic: "electrical-circuits",
            q: "Compare a series circuit with a parallel circuit for two lamps. Link your answer to how the circuit works in practice.",
            sample: "A series circuit has one path, so both lamps are in the same loop. If one lamp breaks, both usually go off, and adding more lamps usually reduces current so they become dimmer. A parallel circuit has separate branches, so one lamp can stay on if the other breaks and each branch can receive the supply voltage.",
            marks: 5
        },
        {
            id: "s9-sa-82", topic: "electrical-circuits",
            q: "4 cells of 1.5 V are connected in series. Calculate the total voltage and explain why series cells are used. Link your answer to how the circuit works in practice.",
            sample: "The total voltage is 6.0 V because the voltages add in series. Cells are connected in series when a larger potential difference is needed to drive current through the circuit. A higher voltage can make some devices work more effectively.",
            marks: 4
        },
        {
            id: "s9-sa-83", topic: "electrical-circuits",
            q: "State whether aluminium or plastic is better for a wire core and explain why. Use a simple circuit example where helpful.",
            sample: "Aluminium is better for the wire core because it is a conductor and allows current to flow easily. Plastic is more suitable for covering the wire because it resists current and helps keep the user safe.",
            marks: 4
        },
        {
            id: "s9-sa-84", topic: "electrical-circuits",
            q: "Explain the difference between how an ammeter and a voltmeter are connected in a circuit. Link your answer to how the circuit works in practice.",
            sample: "An ammeter is connected in series so the current being measured flows through it. A voltmeter is connected in parallel across the component because it measures potential difference between two points. The different connections match the quantity each device measures.",
            marks: 4
        },
        /* ----- Additional Ohm's law ----- */
        {
            id: "s9-sa-85", topic: "ohms-law",
            q: "A resistor has 6 V across it and a current of 2 A. Calculate the resistance.",
            sample: "Using V = IR, resistance equals V divided by I. So R = 6 / 2 = 3 ohms. The resistor therefore has a resistance of 3 ohms.",
            marks: 4
        },
        {
            id: "s9-sa-86", topic: "ohms-law",
            q: "Explain what happens to current if the voltage across an ohmic resistor increases while resistance stays the same.",
            sample: "If resistance stays the same, increasing the voltage increases the current. This follows I = V / R, so current is directly proportional to voltage for an ohmic resistor. A graph of current against voltage would still be a straight line through the origin.",
            marks: 4
        },
        {
            id: "s9-sa-87", topic: "ohms-law",
            q: "Explain what happens to current if the resistance in a circuit increases while voltage stays the same.",
            sample: "Current decreases when resistance increases and the voltage is unchanged. This is because resistance opposes the flow of charge. Using I = V / R, a larger value of R gives a smaller value of I.",
            marks: 4
        },
        {
            id: "s9-sa-88", topic: "ohms-law",
            q: "A student measures voltage and current for a resistor and gets a straight-line graph through the origin. Explain what this shows.",
            sample: "A straight-line graph through the origin shows that current is directly proportional to voltage. This means the resistor behaves as an ohmic component and its resistance stays constant over the measured range. The gradient shows how quickly current changes with voltage.",
            marks: 5
        },
        {
            id: "s9-sa-89", topic: "ohms-law",
            q: "Compare two resistors connected to the same voltage source if one has a larger resistance than the other.",
            sample: "The resistor with the larger resistance will have the smaller current if the voltage is the same. This follows from Ohm's law because current equals voltage divided by resistance. The smaller-resistance resistor allows charge to flow more easily.",
            marks: 4
        },
        {
            id: "s9-sa-90", topic: "ohms-law",
            q: "Describe ONE fair-test rule for investigating how wire length affects resistance and explain why it matters.",
            sample: "A fair test should keep the wire material and thickness the same while changing only the length. This matters because resistance depends on more than one factor. Controlling the other variables helps show whether any change in current or resistance is really due to length.",
            marks: 4
        },
        {
            id: "s9-sa-91", topic: "ohms-law",
            q: "A resistor has 6 V across it and a current of 2 A. Calculate the resistance. Use V = IR to support your reasoning where helpful.",
            sample: "Using V = IR, resistance equals V divided by I. So R = 6 / 2 = 3 ohms. The resistor therefore has a resistance of 3 ohms.",
            marks: 4
        },
        {
            id: "s9-sa-92", topic: "ohms-law",
            q: "Explain what happens to current if the voltage across an ohmic resistor increases while resistance stays the same. Use V = IR to support your reasoning where helpful.",
            sample: "If resistance stays the same, increasing the voltage increases the current. This follows I = V / R, so current is directly proportional to voltage for an ohmic resistor. A graph of current against voltage would still be a straight line through the origin.",
            marks: 4
        },
        {
            id: "s9-sa-93", topic: "ohms-law",
            q: "Explain what happens to current if the resistance in a circuit increases while voltage stays the same. Use V = IR to support your reasoning where helpful.",
            sample: "Current decreases when resistance increases and the voltage is unchanged. This is because resistance opposes the flow of charge. Using I = V / R, a larger value of R gives a smaller value of I.",
            marks: 4
        },
        {
            id: "s9-sa-94", topic: "ohms-law",
            q: "A student measures voltage and current for a resistor and gets a straight-line graph through the origin. Explain what this shows. Use V = IR to support your reasoning where helpful.",
            sample: "A straight-line graph through the origin shows that current is directly proportional to voltage. This means the resistor behaves as an ohmic component and its resistance stays constant over the measured range. The gradient shows how quickly current changes with voltage.",
            marks: 5
        },
        {
            id: "s9-sa-95", topic: "ohms-law",
            q: "Compare two resistors connected to the same voltage source if one has a larger resistance than the other. Use V = IR to support your reasoning where helpful.",
            sample: "The resistor with the larger resistance will have the smaller current if the voltage is the same. This follows from Ohm's law because current equals voltage divided by resistance. The smaller-resistance resistor allows charge to flow more easily.",
            marks: 4
        },
        {
            id: "s9-sa-96", topic: "ohms-law",
            q: "Describe ONE fair-test rule for investigating how wire length affects resistance and explain why it matters. Use V = IR to support your reasoning where helpful.",
            sample: "A fair test should keep the wire material and thickness the same while changing only the length. This matters because resistance depends on more than one factor. Controlling the other variables helps show whether any change in current or resistance is really due to length.",
            marks: 4
        },
        {
            id: "s9-sa-97", topic: "ohms-law",
            q: "A resistor has 6 V across it and a current of 2 A. Calculate the resistance. Refer to a resistor investigation where relevant.",
            sample: "Using V = IR, resistance equals V divided by I. So R = 6 / 2 = 3 ohms. The resistor therefore has a resistance of 3 ohms.",
            marks: 4
        },
        {
            id: "s9-sa-98", topic: "ohms-law",
            q: "Explain what happens to current if the voltage across an ohmic resistor increases while resistance stays the same. Refer to a resistor investigation where relevant.",
            sample: "If resistance stays the same, increasing the voltage increases the current. This follows I = V / R, so current is directly proportional to voltage for an ohmic resistor. A graph of current against voltage would still be a straight line through the origin.",
            marks: 4
        },
        {
            id: "s9-sa-99", topic: "ohms-law",
            q: "Explain what happens to current if the resistance in a circuit increases while voltage stays the same. Refer to a resistor investigation where relevant.",
            sample: "Current decreases when resistance increases and the voltage is unchanged. This is because resistance opposes the flow of charge. Using I = V / R, a larger value of R gives a smaller value of I.",
            marks: 4
        },
        {
            id: "s9-sa-100", topic: "ohms-law",
            q: "A student measures voltage and current for a resistor and gets a straight-line graph through the origin. Explain what this shows. Refer to a resistor investigation where relevant.",
            sample: "A straight-line graph through the origin shows that current is directly proportional to voltage. This means the resistor behaves as an ohmic component and its resistance stays constant over the measured range. The gradient shows how quickly current changes with voltage.",
            marks: 5
        },
        {
            id: "s9-sa-101", topic: "ohms-law",
            q: "Compare two resistors connected to the same voltage source if one has a larger resistance than the other. Refer to a resistor investigation where relevant.",
            sample: "The resistor with the larger resistance will have the smaller current if the voltage is the same. This follows from Ohm's law because current equals voltage divided by resistance. The smaller-resistance resistor allows charge to flow more easily.",
            marks: 4
        },
        {
            id: "s9-sa-102", topic: "ohms-law",
            q: "Describe ONE fair-test rule for investigating how wire length affects resistance and explain why it matters. Refer to a resistor investigation where relevant.",
            sample: "A fair test should keep the wire material and thickness the same while changing only the length. This matters because resistance depends on more than one factor. Controlling the other variables helps show whether any change in current or resistance is really due to length.",
            marks: 4
        },
        {
            id: "s9-sa-103", topic: "ohms-law",
            q: "A resistor has 6 V across it and a current of 2 A. Calculate the resistance. Link your answer to the relationship between voltage, current and resistance.",
            sample: "Using V = IR, resistance equals V divided by I. So R = 6 / 2 = 3 ohms. The resistor therefore has a resistance of 3 ohms.",
            marks: 4
        },
        {
            id: "s9-sa-104", topic: "ohms-law",
            q: "Explain what happens to current if the voltage across an ohmic resistor increases while resistance stays the same. Link your answer to the relationship between voltage, current and resistance.",
            sample: "If resistance stays the same, increasing the voltage increases the current. This follows I = V / R, so current is directly proportional to voltage for an ohmic resistor. A graph of current against voltage would still be a straight line through the origin.",
            marks: 4
        },
        {
            id: "s9-sa-105", topic: "ohms-law",
            q: "Explain what happens to current if the resistance in a circuit increases while voltage stays the same. Link your answer to the relationship between voltage, current and resistance.",
            sample: "Current decreases when resistance increases and the voltage is unchanged. This is because resistance opposes the flow of charge. Using I = V / R, a larger value of R gives a smaller value of I.",
            marks: 4
        },
        {
            id: "s9-sa-106", topic: "ohms-law",
            q: "A student measures voltage and current for a resistor and gets a straight-line graph through the origin. Explain what this shows. Link your answer to the relationship between voltage, current and resistance.",
            sample: "A straight-line graph through the origin shows that current is directly proportional to voltage. This means the resistor behaves as an ohmic component and its resistance stays constant over the measured range. The gradient shows how quickly current changes with voltage.",
            marks: 5
        },
        {
            id: "s9-sa-107", topic: "ohms-law",
            q: "Compare two resistors connected to the same voltage source if one has a larger resistance than the other. Link your answer to the relationship between voltage, current and resistance.",
            sample: "The resistor with the larger resistance will have the smaller current if the voltage is the same. This follows from Ohm's law because current equals voltage divided by resistance. The smaller-resistance resistor allows charge to flow more easily.",
            marks: 4
        },
        /* ----- Additional Homeostasis ----- */
        {
            id: "s9-sa-108", topic: "homeostasis",
            q: "Explain how the body responds when body temperature rises above normal.",
            sample: "Receptors detect that body temperature is too high and send information to the control centre. Effectors such as sweat glands and blood vessels near the skin respond. Sweating and vasodilation increase heat loss and help return body temperature toward its normal range.",
            marks: 5
        },
        {
            id: "s9-sa-109", topic: "homeostasis",
            q: "Describe TWO responses the body uses when it becomes too cold.",
            sample: "The body may shiver, and the muscle contractions release extra thermal energy. Blood vessels near the skin may narrow, which reduces heat loss to the surroundings. Both responses help bring temperature back toward normal.",
            marks: 4
        },
        {
            id: "s9-sa-110", topic: "homeostasis",
            q: "Using the example 'blood glucose rises after a meal', identify the receptors and effectors involved.",
            sample: "In this case, the receptors are cells in the pancreas. The effectors are body cells and the liver. The effectors carry out the response that helps move the body back toward its normal internal conditions.",
            marks: 4
        },
        {
            id: "s9-sa-111", topic: "homeostasis",
            q: "Explain why keeping blood glucose within a narrow range is important.",
            sample: "Cells need a reliable supply of glucose for respiration, so very high or very low blood glucose can disrupt normal body function. Hormones help keep glucose within a healthy range. This is an example of homeostasis because the body is regulating an internal condition.",
            marks: 4
        },
        {
            id: "s9-sa-112", topic: "homeostasis",
            q: "Explain how the kidneys help maintain water balance in the body.",
            sample: "The kidneys filter the blood and adjust how much water is kept or removed in urine. If the body is dehydrated, more water can be reabsorbed so less is lost. This helps keep the internal environment stable.",
            marks: 4
        },
        {
            id: "s9-sa-113", topic: "homeostasis",
            q: "Describe what is meant by negative feedback and give ONE body example.",
            sample: "Negative feedback is when a body response reduces the original change and moves the condition back toward normal. For example, if body temperature rises, sweating helps cool the body. The response opposes the change rather than increasing it.",
            marks: 4
        },
        {
            id: "s9-sa-114", topic: "homeostasis",
            q: "Explain how the body responds when body temperature rises above normal. Use a body-control example where helpful.",
            sample: "Receptors detect that body temperature is too high and send information to the control centre. Effectors such as sweat glands and blood vessels near the skin respond. Sweating and vasodilation increase heat loss and help return body temperature toward its normal range.",
            marks: 5
        },
        {
            id: "s9-sa-115", topic: "homeostasis",
            q: "Describe TWO responses the body uses when it becomes too cold. Use a body-control example where helpful.",
            sample: "The body may shiver, and the muscle contractions release extra thermal energy. Blood vessels near the skin may narrow, which reduces heat loss to the surroundings. Both responses help bring temperature back toward normal.",
            marks: 4
        },
        {
            id: "s9-sa-116", topic: "homeostasis",
            q: "Using the example 'blood glucose drops between meals', identify the receptors and effectors involved.",
            sample: "In this case, the receptors are cells in the pancreas. The effectors are the liver. The effectors carry out the response that helps move the body back toward its normal internal conditions.",
            marks: 4
        },
        {
            id: "s9-sa-117", topic: "homeostasis",
            q: "Explain why keeping blood glucose within a narrow range is important. Use a body-control example where helpful.",
            sample: "Cells need a reliable supply of glucose for respiration, so very high or very low blood glucose can disrupt normal body function. Hormones help keep glucose within a healthy range. This is an example of homeostasis because the body is regulating an internal condition.",
            marks: 4
        },
        {
            id: "s9-sa-118", topic: "homeostasis",
            q: "Explain how the kidneys help maintain water balance in the body. Use a body-control example where helpful.",
            sample: "The kidneys filter the blood and adjust how much water is kept or removed in urine. If the body is dehydrated, more water can be reabsorbed so less is lost. This helps keep the internal environment stable.",
            marks: 4
        },
        {
            id: "s9-sa-119", topic: "homeostasis",
            q: "Describe what is meant by negative feedback and give ONE body example. Use a body-control example where helpful.",
            sample: "Negative feedback is when a body response reduces the original change and moves the condition back toward normal. For example, if body temperature rises, sweating helps cool the body. The response opposes the change rather than increasing it.",
            marks: 4
        },
        {
            id: "s9-sa-120", topic: "homeostasis",
            q: "Explain how the body responds when body temperature rises above normal. Refer to everyday conditions such as exercise, meals or weather where relevant.",
            sample: "Receptors detect that body temperature is too high and send information to the control centre. Effectors such as sweat glands and blood vessels near the skin respond. Sweating and vasodilation increase heat loss and help return body temperature toward its normal range.",
            marks: 5
        },
        {
            id: "s9-sa-121", topic: "homeostasis",
            q: "Describe TWO responses the body uses when it becomes too cold. Refer to everyday conditions such as exercise, meals or weather where relevant.",
            sample: "The body may shiver, and the muscle contractions release extra thermal energy. Blood vessels near the skin may narrow, which reduces heat loss to the surroundings. Both responses help bring temperature back toward normal.",
            marks: 4
        },
        {
            id: "s9-sa-122", topic: "homeostasis",
            q: "Using the example 'the body loses water during exercise', identify the receptors and effectors involved.",
            sample: "In this case, the receptors are receptors monitoring water balance. The effectors are the kidneys. The effectors carry out the response that helps move the body back toward its normal internal conditions.",
            marks: 4
        },
        {
            id: "s9-sa-123", topic: "homeostasis",
            q: "Explain why keeping blood glucose within a narrow range is important. Refer to everyday conditions such as exercise, meals or weather where relevant.",
            sample: "Cells need a reliable supply of glucose for respiration, so very high or very low blood glucose can disrupt normal body function. Hormones help keep glucose within a healthy range. This is an example of homeostasis because the body is regulating an internal condition.",
            marks: 4
        },
        {
            id: "s9-sa-124", topic: "homeostasis",
            q: "Explain how the kidneys help maintain water balance in the body. Refer to everyday conditions such as exercise, meals or weather where relevant.",
            sample: "The kidneys filter the blood and adjust how much water is kept or removed in urine. If the body is dehydrated, more water can be reabsorbed so less is lost. This helps keep the internal environment stable.",
            marks: 4
        },
        {
            id: "s9-sa-125", topic: "homeostasis",
            q: "Describe what is meant by negative feedback and give ONE body example. Refer to everyday conditions such as exercise, meals or weather where relevant.",
            sample: "Negative feedback is when a body response reduces the original change and moves the condition back toward normal. For example, if body temperature rises, sweating helps cool the body. The response opposes the change rather than increasing it.",
            marks: 4
        },
        {
            id: "s9-sa-126", topic: "homeostasis",
            q: "Explain how the body responds when body temperature rises above normal. Link your answer to keeping internal conditions stable.",
            sample: "Receptors detect that body temperature is too high and send information to the control centre. Effectors such as sweat glands and blood vessels near the skin respond. Sweating and vasodilation increase heat loss and help return body temperature toward its normal range.",
            marks: 5
        },
        {
            id: "s9-sa-127", topic: "homeostasis",
            q: "Describe TWO responses the body uses when it becomes too cold. Link your answer to keeping internal conditions stable.",
            sample: "The body may shiver, and the muscle contractions release extra thermal energy. Blood vessels near the skin may narrow, which reduces heat loss to the surroundings. Both responses help bring temperature back toward normal.",
            marks: 4
        },
        {
            id: "s9-sa-128", topic: "homeostasis",
            q: "Using the example 'body temperature rises during a hot run', identify the receptors and effectors involved.",
            sample: "In this case, the receptors are temperature receptors in the skin and brain. The effectors are sweat glands and blood vessels near the skin. The effectors carry out the response that helps move the body back toward its normal internal conditions.",
            marks: 4
        },
        {
            id: "s9-sa-129", topic: "homeostasis",
            q: "Explain why keeping blood glucose within a narrow range is important. Link your answer to keeping internal conditions stable.",
            sample: "Cells need a reliable supply of glucose for respiration, so very high or very low blood glucose can disrupt normal body function. Hormones help keep glucose within a healthy range. This is an example of homeostasis because the body is regulating an internal condition.",
            marks: 4
        },
        {
            id: "s9-sa-130", topic: "homeostasis",
            q: "Explain how the kidneys help maintain water balance in the body. Link your answer to keeping internal conditions stable.",
            sample: "The kidneys filter the blood and adjust how much water is kept or removed in urine. If the body is dehydrated, more water can be reabsorbed so less is lost. This helps keep the internal environment stable.",
            marks: 4
        },
        /* ----- Additional Infectious disease ----- */
        {
            id: "s9-sa-131", topic: "infectious-disease",
            q: "Explain the difference between an infectious disease and a non-infectious disease using one example of each.",
            sample: "An infectious disease is caused by a pathogen and can spread between organisms, such as influenza. A non-infectious disease does not spread by transmission, for example heart disease or asthma. The key difference is whether a pathogen is involved and whether the disease is contagious.",
            marks: 4
        },
        {
            id: "s9-sa-132", topic: "infectious-disease",
            q: "Explain why antibiotics should not be used to treat viral diseases such as influenza.",
            sample: "Antibiotics target structures or processes in bacteria, not viruses. Viruses use host cells differently, so antibiotics do not stop them. Using antibiotics when they are not needed can also contribute to antibiotic resistance in bacteria.",
            marks: 4
        },
        {
            id: "s9-sa-133", topic: "infectious-disease",
            q: "Describe TWO actions a school could take to reduce the spread of infectious disease.",
            sample: "A school can improve hand hygiene and cleaning so pathogens are less likely to be transferred between students. It can also encourage sick students to stay home and improve ventilation in indoor spaces. Each action helps break part of the transmission pathway.",
            marks: 5
        },
        {
            id: "s9-sa-134", topic: "infectious-disease",
            q: "Explain how vaccination can protect both individuals and the wider community.",
            sample: "Vaccination helps an individual's immune system respond more quickly to a pathogen. If many people are vaccinated, fewer people become infected and spread the pathogen, so the whole community gains protection. This is especially helpful for people who are more vulnerable to disease.",
            marks: 4
        },
        {
            id: "s9-sa-135", topic: "infectious-disease",
            q: "State the type of pathogen that causes COVID-19 and describe one way it spreads.",
            sample: "COVID-19 in this example is caused by a virus. It spreads by droplets and aerosols. Understanding the transmission route helps scientists and communities plan prevention strategies.",
            marks: 4
        },
        {
            id: "s9-sa-136", topic: "infectious-disease",
            q: "Explain why isolation or quarantine may be used during an outbreak.",
            sample: "Isolation or quarantine separates people who are infected, or may have been exposed, from those who are not. This reduces opportunities for the pathogen to spread. It is one way of breaking the chain of transmission during an outbreak.",
            marks: 4
        },
        {
            id: "s9-sa-137", topic: "infectious-disease",
            q: "Explain the difference between an infectious disease and a non-infectious disease using one example of each. Use a school or community-health example where helpful.",
            sample: "An infectious disease is caused by a pathogen and can spread between organisms, such as influenza. A non-infectious disease does not spread by transmission, for example heart disease or asthma. The key difference is whether a pathogen is involved and whether the disease is contagious.",
            marks: 4
        },
        {
            id: "s9-sa-138", topic: "infectious-disease",
            q: "Explain why antibiotics should not be used to treat viral diseases such as influenza. Use a school or community-health example where helpful.",
            sample: "Antibiotics target structures or processes in bacteria, not viruses. Viruses use host cells differently, so antibiotics do not stop them. Using antibiotics when they are not needed can also contribute to antibiotic resistance in bacteria.",
            marks: 4
        },
        {
            id: "s9-sa-139", topic: "infectious-disease",
            q: "Describe TWO actions a school could take to reduce the spread of infectious disease. Use a school or community-health example where helpful.",
            sample: "A school can improve hand hygiene and cleaning so pathogens are less likely to be transferred between students. It can also encourage sick students to stay home and improve ventilation in indoor spaces. Each action helps break part of the transmission pathway.",
            marks: 5
        },
        {
            id: "s9-sa-140", topic: "infectious-disease",
            q: "Explain how vaccination can protect both individuals and the wider community. Use a school or community-health example where helpful.",
            sample: "Vaccination helps an individual's immune system respond more quickly to a pathogen. If many people are vaccinated, fewer people become infected and spread the pathogen, so the whole community gains protection. This is especially helpful for people who are more vulnerable to disease.",
            marks: 4
        },
        {
            id: "s9-sa-141", topic: "infectious-disease",
            q: "State the type of pathogen that causes COVID-19 and describe one way it spreads. Use a school or community-health example where helpful.",
            sample: "COVID-19 in this example is caused by a virus. It spreads by droplets and aerosols. Understanding the transmission route helps scientists and communities plan prevention strategies.",
            marks: 4
        },
        {
            id: "s9-sa-142", topic: "infectious-disease",
            q: "Explain why isolation or quarantine may be used during an outbreak. Use a school or community-health example where helpful.",
            sample: "Isolation or quarantine separates people who are infected, or may have been exposed, from those who are not. This reduces opportunities for the pathogen to spread. It is one way of breaking the chain of transmission during an outbreak.",
            marks: 4
        },
        {
            id: "s9-sa-143", topic: "infectious-disease",
            q: "Explain the difference between an infectious disease and a non-infectious disease using one example of each. Refer to how transmission can be reduced where relevant.",
            sample: "An infectious disease is caused by a pathogen and can spread between organisms, such as influenza. A non-infectious disease does not spread by transmission, for example heart disease or asthma. The key difference is whether a pathogen is involved and whether the disease is contagious.",
            marks: 4
        },
        {
            id: "s9-sa-144", topic: "infectious-disease",
            q: "Explain why antibiotics should not be used to treat viral diseases such as influenza. Refer to how transmission can be reduced where relevant.",
            sample: "Antibiotics target structures or processes in bacteria, not viruses. Viruses use host cells differently, so antibiotics do not stop them. Using antibiotics when they are not needed can also contribute to antibiotic resistance in bacteria.",
            marks: 4
        },
        {
            id: "s9-sa-145", topic: "infectious-disease",
            q: "Describe TWO actions a school could take to reduce the spread of infectious disease. Refer to how transmission can be reduced where relevant.",
            sample: "A school can improve hand hygiene and cleaning so pathogens are less likely to be transferred between students. It can also encourage sick students to stay home and improve ventilation in indoor spaces. Each action helps break part of the transmission pathway.",
            marks: 5
        },
        {
            id: "s9-sa-146", topic: "infectious-disease",
            q: "Explain how vaccination can protect both individuals and the wider community. Refer to how transmission can be reduced where relevant.",
            sample: "Vaccination helps an individual's immune system respond more quickly to a pathogen. If many people are vaccinated, fewer people become infected and spread the pathogen, so the whole community gains protection. This is especially helpful for people who are more vulnerable to disease.",
            marks: 4
        },
        {
            id: "s9-sa-147", topic: "infectious-disease",
            q: "State the type of pathogen that causes COVID-19 and describe one way it spreads. Refer to how transmission can be reduced where relevant.",
            sample: "COVID-19 in this example is caused by a virus. It spreads by droplets and aerosols. Understanding the transmission route helps scientists and communities plan prevention strategies.",
            marks: 4
        },
        {
            id: "s9-sa-148", topic: "infectious-disease",
            q: "Explain why isolation or quarantine may be used during an outbreak. Refer to how transmission can be reduced where relevant.",
            sample: "Isolation or quarantine separates people who are infected, or may have been exposed, from those who are not. This reduces opportunities for the pathogen to spread. It is one way of breaking the chain of transmission during an outbreak.",
            marks: 4
        },
        {
            id: "s9-sa-149", topic: "infectious-disease",
            q: "Explain the difference between an infectious disease and a non-infectious disease using one example of each. Link your answer to preventing spread in a population.",
            sample: "An infectious disease is caused by a pathogen and can spread between organisms, such as influenza. A non-infectious disease does not spread by transmission, for example heart disease or asthma. The key difference is whether a pathogen is involved and whether the disease is contagious.",
            marks: 4
        },
        {
            id: "s9-sa-150", topic: "infectious-disease",
            q: "Explain why antibiotics should not be used to treat viral diseases such as influenza. Link your answer to preventing spread in a population.",
            sample: "Antibiotics target structures or processes in bacteria, not viruses. Viruses use host cells differently, so antibiotics do not stop them. Using antibiotics when they are not needed can also contribute to antibiotic resistance in bacteria.",
            marks: 4
        },
        {
            id: "s9-sa-151", topic: "infectious-disease",
            q: "Describe TWO actions a school could take to reduce the spread of infectious disease. Link your answer to preventing spread in a population.",
            sample: "A school can improve hand hygiene and cleaning so pathogens are less likely to be transferred between students. It can also encourage sick students to stay home and improve ventilation in indoor spaces. Each action helps break part of the transmission pathway.",
            marks: 5
        },
        {
            id: "s9-sa-152", topic: "infectious-disease",
            q: "Explain how vaccination can protect both individuals and the wider community. Link your answer to preventing spread in a population.",
            sample: "Vaccination helps an individual's immune system respond more quickly to a pathogen. If many people are vaccinated, fewer people become infected and spread the pathogen, so the whole community gains protection. This is especially helpful for people who are more vulnerable to disease.",
            marks: 4
        },
        {
            id: "s9-sa-153", topic: "infectious-disease",
            q: "State the type of pathogen that causes COVID-19 and describe one way it spreads. Link your answer to preventing spread in a population.",
            sample: "COVID-19 in this example is caused by a virus. It spreads by droplets and aerosols. Understanding the transmission route helps scientists and communities plan prevention strategies.",
            marks: 4
        },
        /* ----- Additional Non-infectious disease ----- */
        {
            id: "s9-sa-154", topic: "noninfectious-disease",
            q: "Describe TWO risk factors linked to non-infectious disease.",
            sample: "Risk factors can include lifestyle factors such as poor diet, smoking, low physical activity or too much UV exposure. Some diseases are also influenced by genetics or environmental triggers. A good answer explains that risk factors increase the chance of disease but do not guarantee it.",
            marks: 4
        },
        {
            id: "s9-sa-155", topic: "noninfectious-disease",
            q: "Explain why skin cancer is considered non-infectious.",
            sample: "Skin cancer is considered non-infectious because it is not caused by a pathogen being passed from person to person. It may be influenced by too much UV exposure. This means prevention focuses on risk factors rather than stopping transmission.",
            marks: 4
        },
        {
            id: "s9-sa-156", topic: "noninfectious-disease",
            q: "Describe ONE evidence-based action that could reduce the risk of heart disease.",
            sample: "Not smoking and maintaining a healthy lifestyle reduce risk. This is evidence-based because it targets a known risk factor rather than relying on guesswork. Lowering risk factors can improve long-term health outcomes.",
            marks: 4
        },
        {
            id: "s9-sa-157", topic: "noninfectious-disease",
            q: "Explain how both genetics and lifestyle can affect the development of non-infectious disease.",
            sample: "Genes can increase or decrease a person's risk of some conditions, but lifestyle factors such as diet, exercise, smoking and sun exposure can also play a major role. Many non-infectious diseases are influenced by both sets of factors. This means prevention may involve healthy choices even when genetic risk exists.",
            marks: 5
        },
        {
            id: "s9-sa-158", topic: "noninfectious-disease",
            q: "Explain why regular check-ups or screening can be useful for some non-infectious diseases.",
            sample: "Screening and check-ups can detect changes or disease signs earlier, sometimes before severe symptoms appear. Early detection may allow earlier treatment or lifestyle changes. This can improve outcomes and help manage long-term health more effectively.",
            marks: 4
        },
        {
            id: "s9-sa-159", topic: "noninfectious-disease",
            q: "Compare one infectious disease prevention strategy with one non-infectious disease prevention strategy.",
            sample: "An infectious disease prevention strategy might involve handwashing, vaccination or isolation to stop pathogen transmission. A non-infectious disease prevention strategy might involve exercise, healthy food choices or sun protection to reduce risk factors. The difference is whether the strategy aims to stop transmission or reduce longer-term health risks.",
            marks: 5
        },
        {
            id: "s9-sa-160", topic: "noninfectious-disease",
            q: "Describe TWO risk factors linked to non-infectious disease. Use a familiar health example where helpful.",
            sample: "Risk factors can include lifestyle factors such as poor diet, smoking, low physical activity or too much UV exposure. Some diseases are also influenced by genetics or environmental triggers. A good answer explains that risk factors increase the chance of disease but do not guarantee it.",
            marks: 4
        },
        {
            id: "s9-sa-161", topic: "noninfectious-disease",
            q: "Explain why skin cancer is considered non-infectious. Use a familiar health example where helpful.",
            sample: "Skin cancer is considered non-infectious because it is not caused by a pathogen being passed from person to person. It may be influenced by too much UV exposure. This means prevention focuses on risk factors rather than stopping transmission.",
            marks: 4
        },
        {
            id: "s9-sa-162", topic: "noninfectious-disease",
            q: "Describe ONE evidence-based action that could reduce the risk of heart disease. Use a familiar health example where helpful.",
            sample: "Not smoking and maintaining a healthy lifestyle reduce risk. This is evidence-based because it targets a known risk factor rather than relying on guesswork. Lowering risk factors can improve long-term health outcomes.",
            marks: 4
        },
        {
            id: "s9-sa-163", topic: "noninfectious-disease",
            q: "Explain how both genetics and lifestyle can affect the development of non-infectious disease. Use a familiar health example where helpful.",
            sample: "Genes can increase or decrease a person's risk of some conditions, but lifestyle factors such as diet, exercise, smoking and sun exposure can also play a major role. Many non-infectious diseases are influenced by both sets of factors. This means prevention may involve healthy choices even when genetic risk exists.",
            marks: 5
        },
        {
            id: "s9-sa-164", topic: "noninfectious-disease",
            q: "Explain why regular check-ups or screening can be useful for some non-infectious diseases. Use a familiar health example where helpful.",
            sample: "Screening and check-ups can detect changes or disease signs earlier, sometimes before severe symptoms appear. Early detection may allow earlier treatment or lifestyle changes. This can improve outcomes and help manage long-term health more effectively.",
            marks: 4
        },
        {
            id: "s9-sa-165", topic: "noninfectious-disease",
            q: "Compare one infectious disease prevention strategy with one non-infectious disease prevention strategy. Use a familiar health example where helpful.",
            sample: "An infectious disease prevention strategy might involve handwashing, vaccination or isolation to stop pathogen transmission. A non-infectious disease prevention strategy might involve exercise, healthy food choices or sun protection to reduce risk factors. The difference is whether the strategy aims to stop transmission or reduce longer-term health risks.",
            marks: 5
        },
        {
            id: "s9-sa-166", topic: "noninfectious-disease",
            q: "Describe TWO risk factors linked to non-infectious disease. Refer to risk factors or healthy choices where relevant.",
            sample: "Risk factors can include lifestyle factors such as poor diet, smoking, low physical activity or too much UV exposure. Some diseases are also influenced by genetics or environmental triggers. A good answer explains that risk factors increase the chance of disease but do not guarantee it.",
            marks: 4
        },
        {
            id: "s9-sa-167", topic: "noninfectious-disease",
            q: "Explain why skin cancer is considered non-infectious. Refer to risk factors or healthy choices where relevant.",
            sample: "Skin cancer is considered non-infectious because it is not caused by a pathogen being passed from person to person. It may be influenced by too much UV exposure. This means prevention focuses on risk factors rather than stopping transmission.",
            marks: 4
        },
        {
            id: "s9-sa-168", topic: "noninfectious-disease",
            q: "Describe ONE evidence-based action that could reduce the risk of heart disease. Refer to risk factors or healthy choices where relevant.",
            sample: "Not smoking and maintaining a healthy lifestyle reduce risk. This is evidence-based because it targets a known risk factor rather than relying on guesswork. Lowering risk factors can improve long-term health outcomes.",
            marks: 4
        },
        {
            id: "s9-sa-169", topic: "noninfectious-disease",
            q: "Explain how both genetics and lifestyle can affect the development of non-infectious disease. Refer to risk factors or healthy choices where relevant.",
            sample: "Genes can increase or decrease a person's risk of some conditions, but lifestyle factors such as diet, exercise, smoking and sun exposure can also play a major role. Many non-infectious diseases are influenced by both sets of factors. This means prevention may involve healthy choices even when genetic risk exists.",
            marks: 5
        },
        {
            id: "s9-sa-170", topic: "noninfectious-disease",
            q: "Explain why regular check-ups or screening can be useful for some non-infectious diseases. Refer to risk factors or healthy choices where relevant.",
            sample: "Screening and check-ups can detect changes or disease signs earlier, sometimes before severe symptoms appear. Early detection may allow earlier treatment or lifestyle changes. This can improve outcomes and help manage long-term health more effectively.",
            marks: 4
        },
        {
            id: "s9-sa-171", topic: "noninfectious-disease",
            q: "Compare one infectious disease prevention strategy with one non-infectious disease prevention strategy. Refer to risk factors or healthy choices where relevant.",
            sample: "An infectious disease prevention strategy might involve handwashing, vaccination or isolation to stop pathogen transmission. A non-infectious disease prevention strategy might involve exercise, healthy food choices or sun protection to reduce risk factors. The difference is whether the strategy aims to stop transmission or reduce longer-term health risks.",
            marks: 5
        },
        {
            id: "s9-sa-172", topic: "noninfectious-disease",
            q: "Describe TWO risk factors linked to non-infectious disease. Link your answer to prevention, screening or long-term health.",
            sample: "Risk factors can include lifestyle factors such as poor diet, smoking, low physical activity or too much UV exposure. Some diseases are also influenced by genetics or environmental triggers. A good answer explains that risk factors increase the chance of disease but do not guarantee it.",
            marks: 4
        },
        {
            id: "s9-sa-173", topic: "noninfectious-disease",
            q: "Explain why skin cancer is considered non-infectious. Link your answer to prevention, screening or long-term health.",
            sample: "Skin cancer is considered non-infectious because it is not caused by a pathogen being passed from person to person. It may be influenced by too much UV exposure. This means prevention focuses on risk factors rather than stopping transmission.",
            marks: 4
        },
        {
            id: "s9-sa-174", topic: "noninfectious-disease",
            q: "Describe ONE evidence-based action that could reduce the risk of heart disease. Link your answer to prevention, screening or long-term health.",
            sample: "Not smoking and maintaining a healthy lifestyle reduce risk. This is evidence-based because it targets a known risk factor rather than relying on guesswork. Lowering risk factors can improve long-term health outcomes.",
            marks: 4
        },
        {
            id: "s9-sa-175", topic: "noninfectious-disease",
            q: "Explain how both genetics and lifestyle can affect the development of non-infectious disease. Link your answer to prevention, screening or long-term health.",
            sample: "Genes can increase or decrease a person's risk of some conditions, but lifestyle factors such as diet, exercise, smoking and sun exposure can also play a major role. Many non-infectious diseases are influenced by both sets of factors. This means prevention may involve healthy choices even when genetic risk exists.",
            marks: 5
        },
        {
            id: "s9-sa-176", topic: "noninfectious-disease",
            q: "Explain why regular check-ups or screening can be useful for some non-infectious diseases. Link your answer to prevention, screening or long-term health.",
            sample: "Screening and check-ups can detect changes or disease signs earlier, sometimes before severe symptoms appear. Early detection may allow earlier treatment or lifestyle changes. This can improve outcomes and help manage long-term health more effectively.",
            marks: 4
        },
        {
            id: "s9-sa-177", topic: "noninfectious-disease",
            q: "Compare one infectious disease prevention strategy with one non-infectious disease prevention strategy. Link your answer to prevention, screening or long-term health.",
            sample: "An infectious disease prevention strategy might involve handwashing, vaccination or isolation to stop pathogen transmission. A non-infectious disease prevention strategy might involve exercise, healthy food choices or sun protection to reduce risk factors. The difference is whether the strategy aims to stop transmission or reduce longer-term health risks.",
            marks: 5
        },
        /* ----- Additional Science skills ----- */
        {
            id: "s9-sa-178", topic: "science-skills",
            q: "For an investigation on comparing insulating materials around hot-water cups, identify the independent variable, dependent variable and one controlled variable.",
            sample: "The independent variable is type of insulating material. The dependent variable is temperature change of the water. One controlled variable is starting water temperature. Naming the variables clearly helps show whether the test is fair.",
            marks: 4
        },
        {
            id: "s9-sa-179", topic: "science-skills",
            q: "Explain why repeated trials are important in scientific investigations.",
            sample: "Repeated trials improve reliability because they show whether a pattern happens consistently. They also help scientists identify anomalous results and calculate an average. This gives a better estimate of the typical result than relying on one trial.",
            marks: 4
        },
        {
            id: "s9-sa-180", topic: "science-skills",
            q: "A class result is much higher than the other trials. Explain what should happen next.",
            sample: "The first step is to check the method, raw data and measurements to look for mistakes or contamination. The trial may need to be repeated. The result should not be accepted or removed automatically without investigation.",
            marks: 4
        },
        {
            id: "s9-sa-181", topic: "science-skills",
            q: "Explain how to write an evidence-based conclusion after an experiment.",
            sample: "An evidence-based conclusion refers directly to the data collected and states whether the results support the question or hypothesis. It also recognises any limitations or uncertainty. A strong conclusion is based on observed evidence, not on what the student hoped would happen.",
            marks: 4
        },
        {
            id: "s9-sa-182", topic: "science-skills",
            q: "Describe the difference between reliability and validity in an investigation.",
            sample: "Reliability is about whether repeated trials give similar results. Validity is about whether the method actually tests what it is supposed to test fairly. A method can be reliable but still invalid if key variables are not controlled properly.",
            marks: 5
        },
        {
            id: "s9-sa-183", topic: "science-skills",
            q: "Suggest a suitable way to present data from comparing insulating materials around hot-water cups and explain why it is appropriate.",
            sample: "A table should be used to record raw data clearly with headings and units. If both variables are continuous, a line graph can then show the relationship more clearly. This makes patterns easier to identify and communicate.",
            marks: 4
        },
        {
            id: "s9-sa-184", topic: "science-skills",
            q: "For an investigation on testing how wire length affects resistance, identify the independent variable, dependent variable and one controlled variable.",
            sample: "The independent variable is wire length. The dependent variable is current or resistance. One controlled variable is wire material. Naming the variables clearly helps show whether the test is fair.",
            marks: 4
        },
        {
            id: "s9-sa-185", topic: "science-skills",
            q: "Explain why repeated trials are important in scientific investigations. Use a practical investigation example where helpful.",
            sample: "Repeated trials improve reliability because they show whether a pattern happens consistently. They also help scientists identify anomalous results and calculate an average. This gives a better estimate of the typical result than relying on one trial.",
            marks: 4
        },
        {
            id: "s9-sa-186", topic: "science-skills",
            q: "A class result is much higher than the other trials. Explain what should happen next. Use a practical investigation example where helpful.",
            sample: "The first step is to check the method, raw data and measurements to look for mistakes or contamination. The trial may need to be repeated. The result should not be accepted or removed automatically without investigation.",
            marks: 4
        },
        {
            id: "s9-sa-187", topic: "science-skills",
            q: "Explain how to write an evidence-based conclusion after an experiment. Use a practical investigation example where helpful.",
            sample: "An evidence-based conclusion refers directly to the data collected and states whether the results support the question or hypothesis. It also recognises any limitations or uncertainty. A strong conclusion is based on observed evidence, not on what the student hoped would happen.",
            marks: 4
        },
        {
            id: "s9-sa-188", topic: "science-skills",
            q: "Describe the difference between reliability and validity in an investigation. Use a practical investigation example where helpful.",
            sample: "Reliability is about whether repeated trials give similar results. Validity is about whether the method actually tests what it is supposed to test fairly. A method can be reliable but still invalid if key variables are not controlled properly.",
            marks: 5
        },
        {
            id: "s9-sa-189", topic: "science-skills",
            q: "Suggest a suitable way to present data from testing how wire length affects resistance and explain why it is appropriate.",
            sample: "A table should be used to record raw data clearly with headings and units. If both variables are continuous, a line graph can then show the relationship more clearly. This makes patterns easier to identify and communicate.",
            marks: 4
        },
        {
            id: "s9-sa-190", topic: "science-skills",
            q: "For an investigation on measuring how light intensity changes solar-panel output, identify the independent variable, dependent variable and one controlled variable.",
            sample: "The independent variable is light intensity. The dependent variable is voltage or current produced. One controlled variable is panel area. Naming the variables clearly helps show whether the test is fair.",
            marks: 4
        },
        {
            id: "s9-sa-191", topic: "science-skills",
            q: "Explain why repeated trials are important in scientific investigations. Refer to reliability, validity or anomalies where relevant.",
            sample: "Repeated trials improve reliability because they show whether a pattern happens consistently. They also help scientists identify anomalous results and calculate an average. This gives a better estimate of the typical result than relying on one trial.",
            marks: 4
        },
        {
            id: "s9-sa-192", topic: "science-skills",
            q: "A class result is much higher than the other trials. Explain what should happen next. Refer to reliability, validity or anomalies where relevant.",
            sample: "The first step is to check the method, raw data and measurements to look for mistakes or contamination. The trial may need to be repeated. The result should not be accepted or removed automatically without investigation.",
            marks: 4
        },
        {
            id: "s9-sa-193", topic: "science-skills",
            q: "Explain how to write an evidence-based conclusion after an experiment. Refer to reliability, validity or anomalies where relevant.",
            sample: "An evidence-based conclusion refers directly to the data collected and states whether the results support the question or hypothesis. It also recognises any limitations or uncertainty. A strong conclusion is based on observed evidence, not on what the student hoped would happen.",
            marks: 4
        },
        {
            id: "s9-sa-194", topic: "science-skills",
            q: "Describe the difference between reliability and validity in an investigation. Refer to reliability, validity or anomalies where relevant.",
            sample: "Reliability is about whether repeated trials give similar results. Validity is about whether the method actually tests what it is supposed to test fairly. A method can be reliable but still invalid if key variables are not controlled properly.",
            marks: 5
        },
        {
            id: "s9-sa-195", topic: "science-skills",
            q: "Suggest a suitable way to present data from measuring how light intensity changes solar-panel output and explain why it is appropriate.",
            sample: "A table should be used to record raw data clearly with headings and units. If both variables are continuous, a line graph can then show the relationship more clearly. This makes patterns easier to identify and communicate.",
            marks: 4
        },
        {
            id: "s9-sa-196", topic: "science-skills",
            q: "For an investigation on checking how different handwashing times affect bacterial growth, identify the independent variable, dependent variable and one controlled variable.",
            sample: "The independent variable is washing time. The dependent variable is bacterial growth. One controlled variable is type of surface sampled. Naming the variables clearly helps show whether the test is fair.",
            marks: 4
        },
        {
            id: "s9-sa-197", topic: "science-skills",
            q: "Explain why repeated trials are important in scientific investigations. Link your answer to using evidence to justify conclusions.",
            sample: "Repeated trials improve reliability because they show whether a pattern happens consistently. They also help scientists identify anomalous results and calculate an average. This gives a better estimate of the typical result than relying on one trial.",
            marks: 4
        },
        {
            id: "s9-sa-198", topic: "science-skills",
            q: "A class result is much higher than the other trials. Explain what should happen next. Link your answer to using evidence to justify conclusions.",
            sample: "The first step is to check the method, raw data and measurements to look for mistakes or contamination. The trial may need to be repeated. The result should not be accepted or removed automatically without investigation.",
            marks: 4
        },
        {
            id: "s9-sa-199", topic: "science-skills",
            q: "Explain how to write an evidence-based conclusion after an experiment. Link your answer to using evidence to justify conclusions.",
            sample: "An evidence-based conclusion refers directly to the data collected and states whether the results support the question or hypothesis. It also recognises any limitations or uncertainty. A strong conclusion is based on observed evidence, not on what the student hoped would happen.",
            marks: 4
        },
        {
            id: "s9-sa-200", topic: "science-skills",
            q: "Describe the difference between reliability and validity in an investigation. Link your answer to using evidence to justify conclusions.",
            sample: "Reliability is about whether repeated trials give similar results. Validity is about whether the method actually tests what it is supposed to test fairly. A method can be reliable but still invalid if key variables are not controlled properly.",
            marks: 5
        }
    ],

    long: [
        {
            id: "s9-la-1", topic: "energy-conservation",
            q: "Explain how energy is conserved in household devices and assess TWO strategies that could improve energy efficiency at home. (8 marks)",
            sample: "A strong response explains that devices transfer and transform energy, but the total amount of energy is conserved. For example, a heater changes electrical energy mainly into thermal energy, while some energy may also be transferred as sound. Good answers then assess two efficiency strategies, such as insulation, LED lighting, switching off standby devices, or choosing efficient appliances. The response should link each strategy to reduced wasted energy and use clear scientific reasoning.",
            marks: 8
        },
        {
            id: "s9-la-2", topic: "energy-sources",
            q: "Analyse the benefits and limitations of renewable and emerging energy sources for an Australian community. Support your judgement with scientific reasoning. (10 marks)",
            sample: "A strong answer compares renewable and emerging sources such as wind, solar, hydro, batteries or hydrogen with alternatives such as fossil fuels. It should discuss reliability, environmental impact, cost, storage, local geography and community needs. Better responses explain that no source is perfect and make a justified judgement about a sensible mix or priority based on evidence rather than opinion alone.",
            marks: 10
        },
        {
            id: "s9-la-3", topic: "electrical-circuits",
            q: "Compare series and parallel circuits and use Ohm's law to justify which arrangement is more suitable for household lighting. (8 marks)",
            sample: "A strong response explains that series circuits have one path so current is the same through each component, while parallel circuits have separate branches. In a series circuit, adding lamps increases total resistance and can reduce current, making lamps dimmer, and if one lamp fails the whole circuit can stop. Parallel circuits allow each lamp to receive the supply voltage and keep working if another branch fails. Good responses use Ohm's law ideas to explain how resistance and current change and why parallel circuits are more suitable for household lighting.",
            marks: 8
        },
        {
            id: "s9-la-4", topic: "homeostasis",
            q: "Explain how homeostasis helps maintain a stable internal environment and why this matters when disease or lifestyle factors disrupt normal body function. (10 marks)",
            sample: "A strong response explains that homeostasis keeps conditions such as temperature, water balance and blood glucose within a stable range using feedback systems involving receptors, control centres and effectors. It should describe examples such as sweating, shivering or hormone control of blood glucose. Better responses then explain why this stability matters and how disease or lifestyle factors can disrupt the balance, leading to poor body function or increased health risks.",
            marks: 10
        },
        {
            id: "s9-la-5", topic: "science-skills",
            q: "Design an investigation to compare different insulating materials for reducing energy transfer from a cup of hot water. Include variables, data collection, processing and ways to improve reliability. (8 marks)",
            sample: "A strong answer identifies the independent variable as the insulating material and the dependent variable as the change in temperature of the water over time. It keeps important controls the same, such as cup size, water volume, starting temperature and time intervals. The method should include repeated trials, a results table, calculation of averages and a suitable graph. Strong responses also explain how anomalies would be checked and how reliability could be improved.",
            marks: 8
        },
        {
            id: "s9-la-6", topic: "science-skills",
            q: "A council is comparing a vaccination campaign with household energy-efficiency upgrades. Explain how data from both proposals should be processed, analysed and used to justify a recommendation. (10 marks)",
            sample: "A strong response explains that data from each proposal should be organised clearly in tables and graphs, checked for anomalies and compared using fair criteria such as cost, reliability, likely benefit and long-term impact. The answer should explain how trends and limitations in the data would be analysed, and then provide a justified recommendation based on evidence. Better responses recognise that uncertainty should be acknowledged rather than ignored.",
            marks: 10
        },
        /* ----- Additional Energy conservation ----- */
        {
            id: "s9-la-7", topic: "energy-conservation",
            q: "A family wants to cut electricity use at home. Explain how energy is conserved in household devices and evaluate strategies that would improve energy efficiency. (8 marks)",
            sample: "A strong response explains that household devices transfer and transform energy while conserving the total amount of energy overall. Better answers identify useful and wasted outputs in several devices, then evaluate strategies such as insulation, draft sealing, efficient appliances and sensible heating use. The judgement should link each strategy to reduced wasted energy and lower electricity use.",
            marks: 8
        },
        {
            id: "s9-la-8", topic: "energy-conservation",
            q: "Analyse how useful and wasted energy transfers affect the efficiency of transport, heating and lighting systems. (10 marks)",
            sample: "A strong response compares how different systems transform energy and identifies where energy is wasted, often as heat or sound. Better responses use examples such as vehicles, heaters and lamps to explain why some systems are more efficient than others. The answer should analyse how reducing wasted transfers can improve performance and save energy.",
            marks: 10
        },
        {
            id: "s9-la-9", topic: "energy-conservation",
            q: "A school is choosing between several energy-saving upgrades. Explain how the law of conservation of energy helps the school judge which upgrade is most effective. (8 marks)",
            sample: "A strong response explains that energy is never destroyed, so the key question is how much of the input is being transferred into useful output and how much is being wasted. It should assess upgrades such as insulation, LED lighting or improved heating controls using that idea. Better answers make a justified recommendation based on which option reduces wasted energy most effectively.",
            marks: 8
        },
        {
            id: "s9-la-10", topic: "energy-conservation",
            q: "Explain how energy changes during motion and collisions, and assess why friction can be both useful and wasteful. (10 marks)",
            sample: "A strong answer explains that kinetic, gravitational and elastic potential energy can change from one form to another during motion and collisions. It should also explain that friction can waste energy as heat and sound, but can also be useful for braking, grip and safety. Better responses assess both sides and use clear examples.",
            marks: 10
        },
        {
            id: "s9-la-11", topic: "energy-conservation",
            q: "Describe how energy efficiency data could be used to help households make better choices about appliances and insulation. (8 marks)",
            sample: "A strong response explains how data such as input energy, useful output, efficiency ratings and running costs can be compared. It should show how households can use this evidence to choose efficient appliances and insulation strategies that reduce wasted energy. Better answers explain why evidence-based decisions are more reliable than choosing based only on price or appearance.",
            marks: 8
        },
        {
            id: "s9-la-12", topic: "energy-conservation",
            q: "Evaluate how scientists and engineers can improve the efficiency of everyday devices without breaking the law of conservation of energy. (10 marks)",
            sample: "A strong response explains that engineers cannot create extra energy, but they can reduce the fraction wasted in unwanted forms. Better answers discuss design changes such as improved insulation, low-friction parts, better materials and control systems. The evaluation should connect each improvement to more useful output from the same input energy.",
            marks: 10
        },
        /* ----- Additional Energy sources ----- */
        {
            id: "s9-la-13", topic: "energy-sources",
            q: "Analyse the benefits and limitations of renewable energy sources for one Australian community. (8 marks)",
            sample: "A strong response compares relevant renewable sources for the chosen community and explains how local conditions affect suitability. Better answers discuss reliability, environmental impact, cost and storage needs before making a justified judgement.",
            marks: 8
        },
        {
            id: "s9-la-14", topic: "energy-sources",
            q: "Evaluate why many communities use a mix of renewable, storage and non-renewable systems instead of relying on only one source. (10 marks)",
            sample: "A strong response explains that no energy source is perfect in every condition. Better answers evaluate reliability, changing demand, environmental impact and cost, then justify why a balanced mix may be the most practical choice during a transition.",
            marks: 10
        },
        {
            id: "s9-la-15", topic: "energy-sources",
            q: "A remote town is deciding whether to invest in solar, wind, batteries or diesel backup. Recommend a plan and justify it with evidence. (10 marks)",
            sample: "A strong response considers the local conditions, likely reliability of wind and sunlight, the role of storage and the limitations of diesel backup. Better answers compare the options fairly and justify a recommendation using evidence rather than opinion.",
            marks: 8
        },
        {
            id: "s9-la-16", topic: "energy-sources",
            q: "Explain the role that battery storage and hydrogen could play in future energy systems, including key limitations. (8 marks)",
            sample: "A strong answer explains that batteries and hydrogen can help store or move energy from other sources. It should also discuss limitations such as cost, efficiency losses and how hydrogen is produced. Better responses show that these technologies can be useful but are not simple stand-alone solutions.",
            marks: 10
        },
        {
            id: "s9-la-17", topic: "energy-sources",
            q: "Assess how scientists should compare new energy technologies before recommending them for wide use. (10 marks)",
            sample: "A strong response explains that scientists should compare cost, reliability, energy output, environmental impact and suitability for the location. Better answers recognise that evidence may include trade-offs and that a justified recommendation should acknowledge both benefits and limitations.",
            marks: 8
        },
        /* ----- Additional Electrical circuits ----- */
        {
            id: "s9-la-18", topic: "electrical-circuits",
            q: "Compare series and parallel circuits and explain why one arrangement is more suitable for household lighting. (8 marks)",
            sample: "A strong response explains that series circuits have one path and parallel circuits have separate branches. Better responses discuss brightness, reliability when one lamp fails and the voltage across each lamp, then justify why household lighting is normally connected in parallel.",
            marks: 8
        },
        {
            id: "s9-la-19", topic: "electrical-circuits",
            q: "Explain how cells, switches, lamps and safety devices work together in a simple household circuit. (10 marks)",
            sample: "A strong answer explains the role of each component and how they interact in a complete circuit. Better responses describe the need for a power source, a complete path, control by switches and protection by fuses or circuit breakers.",
            marks: 10
        },
        {
            id: "s9-la-20", topic: "electrical-circuits",
            q: "Design and justify an investigation that compares the brightness of lamps in series and parallel circuits. (8 marks)",
            sample: "A strong response outlines a safe method, identifies variables and explains how observations or measurements would be collected fairly. Better answers explain how the results would be used to compare the two circuit arrangements and improve reliability.",
            marks: 8
        },
        {
            id: "s9-la-21", topic: "electrical-circuits",
            q: "Analyse how changing the arrangement of components in a circuit affects current, brightness and reliability. (10 marks)",
            sample: "A strong answer explains the effect of changing from one path to multiple branches, as well as adding cells or extra lamps. Better responses link the arrangement to current flow, lamp brightness and what happens if one component fails.",
            marks: 10
        },
        {
            id: "s9-la-22", topic: "electrical-circuits",
            q: "Explain why choosing suitable conductors, insulators and safety devices is important when designing electrical circuits. (8 marks)",
            sample: "A strong response explains that wires need good conductors for current flow and suitable insulators to reduce electric shock risk. Better answers also explain how fuses or circuit breakers protect the circuit and why material choice affects both performance and safety.",
            marks: 8
        },
        /* ----- Additional Ohm's law ----- */
        {
            id: "s9-la-23", topic: "ohms-law",
            q: "Explain Ohm's law and show how it can be used to analyse simple circuits. (8 marks)",
            sample: "A strong response defines the relationship between voltage, current and resistance and applies V = IR correctly. Better answers use calculations and clear explanations to show how changing one quantity affects the others in simple circuits.",
            marks: 8
        },
        {
            id: "s9-la-24", topic: "ohms-law",
            q: "Design an investigation to test whether a resistor obeys Ohm's law. Include apparatus, variables and how the data would be analysed. (10 marks)",
            sample: "A strong answer outlines a safe method for measuring current and voltage while changing one variable fairly. Better responses identify independent, dependent and controlled variables, explain repeated trials and describe using a current-voltage graph to judge whether the resistor is ohmic.",
            marks: 10
        },
        {
            id: "s9-la-25", topic: "ohms-law",
            q: "Analyse how resistance affects the performance of electrical devices in everyday circuits. (8 marks)",
            sample: "A strong response explains that greater resistance usually reduces current for a given voltage. Better answers apply this idea to lamps, heaters or long wires and explain how resistance affects brightness, heating and energy transfer.",
            marks: 8
        },
        {
            id: "s9-la-26", topic: "ohms-law",
            q: "Compare two components with different current-voltage behaviour and explain how graphs can be used to judge whether each one obeys Ohm's law. (10 marks)",
            sample: "A strong answer explains that an ohmic component gives a straight-line current-voltage graph through the origin, while a non-ohmic component may not. Better responses compare the graphs carefully and link the shapes to changing or constant resistance.",
            marks: 10
        },
        {
            id: "s9-la-27", topic: "ohms-law",
            q: "A student keeps making errors when calculating resistance, current and voltage. Explain a reliable method for solving Ohm's law problems and checking the answers. (8 marks)",
            sample: "A strong response explains how to identify the known values, choose the correct rearranged formula and substitute units carefully. Better answers also describe checking whether the final value is reasonable for the circuit and whether the units match the quantity calculated.",
            marks: 8
        },
        {
            id: "s9-la-28", topic: "ohms-law",
            q: "Evaluate why understanding resistance matters when designing safe and efficient electrical systems. (10 marks)",
            sample: "A strong response explains that resistance influences current, heating and energy transfer in circuits. Better answers evaluate why designers must balance performance, safety and energy use when choosing wires, resistors and other components.",
            marks: 10
        },
        /* ----- Additional Homeostasis ----- */
        {
            id: "s9-la-29", topic: "homeostasis",
            q: "Explain how homeostasis keeps the internal environment stable when body temperature changes. (8 marks)",
            sample: "A strong response explains the roles of receptors, control centres and effectors in temperature regulation. Better answers describe sweating, vasodilation, shivering and vasoconstriction and show how these responses help return body temperature toward normal.",
            marks: 8
        },
        {
            id: "s9-la-30", topic: "homeostasis",
            q: "Analyse why maintaining stable internal conditions is essential for body cells and organ systems. (10 marks)",
            sample: "A strong answer explains that cells work best within limited ranges of temperature, water balance and glucose concentration. Better responses analyse what can happen when those conditions move too far from normal and why homeostatic control is so important.",
            marks: 10
        },
        {
            id: "s9-la-31", topic: "homeostasis",
            q: "Compare the regulation of body temperature with the regulation of blood glucose. (8 marks)",
            sample: "A strong response identifies the common homeostatic pattern of receptors, control systems and effectors. Better answers compare the effectors and signals used in each case and explain how both systems rely on negative feedback.",
            marks: 8
        },
        {
            id: "s9-la-32", topic: "homeostasis",
            q: "Evaluate how illness, dehydration or lifestyle factors can disrupt homeostasis. (10 marks)",
            sample: "A strong response explains that illness, lack of water, poor diet or other stresses can push internal conditions away from their normal ranges. Better answers evaluate the effects on body function and explain how the body tries to restore balance.",
            marks: 10
        },
        {
            id: "s9-la-33", topic: "homeostasis",
            q: "Design an explanation for younger students showing how negative feedback works in the human body. (8 marks)",
            sample: "A strong answer presents negative feedback clearly, using a body example such as temperature or glucose control. Better responses show that the response opposes the original change and use accurate scientific language that remains easy to understand.",
            marks: 8
        },
        /* ----- Additional Infectious disease ----- */
        {
            id: "s9-la-34", topic: "infectious-disease",
            q: "Explain how pathogens spread and evaluate strategies that reduce the spread of infectious disease in a school. (8 marks)",
            sample: "A strong response explains several transmission pathways such as droplets, contact, contaminated food or vectors. Better answers evaluate strategies such as handwashing, ventilation, cleaning, vaccination and staying home when sick, and justify which are most effective in a school setting.",
            marks: 8
        },
        {
            id: "s9-la-35", topic: "infectious-disease",
            q: "Analyse why understanding transmission pathways is essential for controlling outbreaks. (10 marks)",
            sample: "A strong response explains that prevention depends on knowing how a pathogen moves from one host to another. Better answers analyse how breaking the chain of transmission can lower case numbers and why different diseases may need different control measures.",
            marks: 10
        },
        {
            id: "s9-la-36", topic: "infectious-disease",
            q: "Compare bacterial and viral diseases and explain why treatments and prevention strategies differ. (8 marks)",
            sample: "A strong answer compares bacteria and viruses as pathogens and explains why antibiotics can work on bacterial diseases but not viral diseases. Better responses also compare prevention strategies such as hygiene, vaccination and isolation.",
            marks: 8
        },
        {
            id: "s9-la-37", topic: "infectious-disease",
            q: "A community is debating whether to run a vaccination campaign during an outbreak. Evaluate the scientific reasons for and against the plan. (10 marks)",
            sample: "A strong response explains how vaccination can lower infection and transmission risk in many diseases. Better answers evaluate practical issues such as timing, access, public confidence and whether the vaccine matches the disease, while still making an evidence-based judgement.",
            marks: 10
        },
        {
            id: "s9-la-38", topic: "infectious-disease",
            q: "Describe how public health actions can work together to manage an infectious disease outbreak. (8 marks)",
            sample: "A strong answer explains that public health actions often need to be combined, such as testing, isolation, hygiene, clear communication and vaccination where appropriate. Better responses show how these actions reinforce each other by interrupting transmission in several ways.",
            marks: 8
        },
        {
            id: "s9-la-39", topic: "infectious-disease",
            q: "Explain why food safety, clean water and vector control remain important parts of infectious disease prevention. (10 marks)",
            sample: "A strong response explains that not all infectious diseases spread the same way. Better answers discuss how contaminated food and water, or organisms such as mosquitoes, can spread pathogens and why prevention must match the transmission route.",
            marks: 10
        },
        /* ----- Additional Non-infectious disease ----- */
        {
            id: "s9-la-40", topic: "noninfectious-disease",
            q: "Analyse how lifestyle choices can influence the risk of non-infectious disease over time. (8 marks)",
            sample: "A strong response explains how factors such as diet, exercise, smoking, alcohol use or UV exposure can affect long-term health. Better answers use clear examples and show how reducing risk factors can lower the chance of disease.",
            marks: 8
        },
        {
            id: "s9-la-41", topic: "noninfectious-disease",
            q: "Evaluate the claim that non-infectious diseases are caused only by personal choice. (10 marks)",
            sample: "A strong answer explains that personal choices can matter, but genetics, environment, access to health care and social factors can also influence risk. Better responses evaluate the claim critically and present a balanced judgement based on evidence.",
            marks: 10
        },
        {
            id: "s9-la-42", topic: "noninfectious-disease",
            q: "Compare the causes, prevention and management of two non-infectious diseases. (8 marks)",
            sample: "A strong response compares two suitable examples and explains how their causes can include different combinations of lifestyle, genetics and environment. Better answers also compare prevention and management strategies clearly.",
            marks: 8
        },
        {
            id: "s9-la-43", topic: "noninfectious-disease",
            q: "Explain why early detection and health education are important for reducing the impact of non-infectious disease. (10 marks)",
            sample: "A strong answer explains that screening, check-ups and health education can lead to earlier action and better long-term outcomes. Better responses evaluate why prevention and early management can reduce harm even when a disease cannot be completely prevented.",
            marks: 10
        },
        {
            id: "s9-la-44", topic: "noninfectious-disease",
            q: "A local council wants to improve community health. Assess which actions would most likely reduce non-infectious disease risk. (8 marks)",
            sample: "A strong response assesses practical actions such as promoting physical activity, supporting healthy food choices, reducing smoking and improving sun safety. Better answers justify which actions would likely have the biggest impact using evidence about common risk factors.",
            marks: 8
        },
        {
            id: "s9-la-45", topic: "noninfectious-disease",
            q: "Explain how genetics and environmental factors can interact in the development of non-infectious disease. (10 marks)",
            sample: "A strong answer explains that inherited traits can alter risk, but environmental exposures and lifestyle can also increase or reduce that risk. Better responses show that many diseases develop through an interaction of several factors rather than one simple cause.",
            marks: 10
        },
        /* ----- Additional Science skills ----- */
        {
            id: "s9-la-46", topic: "science-skills",
            q: "Design an investigation to test one Year 9 Science question, including variables, data collection and ways to improve reliability. (8 marks)",
            sample: "A strong response identifies a clear question, names the independent, dependent and controlled variables, and outlines a safe method. Better answers explain how data would be collected, repeated, processed and checked for anomalies to improve reliability.",
            marks: 8
        },
        {
            id: "s9-la-47", topic: "science-skills",
            q: "Explain how tables, graphs and averages can help scientists communicate and analyse results more effectively. (10 marks)",
            sample: "A strong response explains the role of organised tables, suitable graphs and averages in showing patterns clearly. Better answers also explain how these tools support interpretation, comparison and communication while still requiring scientists to note limitations.",
            marks: 10
        },
        {
            id: "s9-la-48", topic: "science-skills",
            q: "Analyse how scientists should respond to anomalies and limitations when drawing conclusions from data. (8 marks)",
            sample: "A strong answer explains that anomalies should be checked rather than ignored automatically and that limitations should be acknowledged honestly. Better responses analyse how scientists balance evidence, uncertainty and repeated trials before reaching a conclusion.",
            marks: 8
        },
        {
            id: "s9-la-49", topic: "science-skills",
            q: "A community project has data about vaccination, energy efficiency and costs. Explain how the evidence should be processed and used to make a recommendation. (10 marks)",
            sample: "A strong response explains that the data should be organised in clear tables or graphs, checked for patterns and compared using fair criteria. Better answers justify a recommendation using evidence and recognise uncertainty rather than pretending the data is perfect.",
            marks: 10
        },
        {
            id: "s9-la-50", topic: "science-skills",
            q: "Evaluate the importance of fair testing, reliability and validity in school science investigations. (8 marks)",
            sample: "A strong response explains each idea clearly and shows how they work together in good scientific practice. Better answers evaluate why an investigation can be unreliable, invalid or both, and explain how careful planning improves the quality of evidence.",
            marks: 8
        }
    ],

    practiceTopics: [
        {
            id: "energy-and-circuits",
            name: "Energy, Circuits & Efficiency",
            outcomes: "SC5-EGY-01 · SC5-WS-05 · SC5-WS-06",
            sourceTopics: ["energy-conservation", "energy-sources", "electrical-circuits", "ohms-law", "science-skills"]
        },
        {
            id: "diseases-and-homeostasis",
            name: "Diseases, Homeostasis & Health",
            outcomes: "SC5-DIS-01 · SC5-WS-07 · SC5-WS-08",
            sourceTopics: ["homeostasis", "infectious-disease", "noninfectious-disease", "science-skills"]
        },
        {
            id: "complete-review",
            name: "Complete Half-Yearly Review",
            outcomes: "SC5-EGY-01 · SC5-DIS-01 · SC5-WS-05 · SC5-WS-06 · SC5-WS-07 · SC5-WS-08",
            sourceTopics: ["energy-conservation", "energy-sources", "electrical-circuits", "ohms-law", "homeostasis", "infectious-disease", "noninfectious-disease", "science-skills"]
        }
    ],
    practiceExams: [],

                    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad balanced mix",
            duration: 90,
            questionIds: [
                "s9-mcq-3","s9-mcq-9","s9-mcq-15","s9-mcq-23","s9-mcq-30","s9-mcq-35","s9-mcq-40","s9-mcq-44",
                "s9-mcq-45","s9-mcq-102","s9-mcq-19","s9-mcq-216","s9-mcq-277","s9-mcq-334","s9-mcq-392","s9-mcq-449",
                "s9-mcq-49","s9-mcq-106","s9-mcq-161","s9-mcq-220","s9-sa-10","s9-sa-12","s9-sa-17","s9-sa-41",
                "s9-sa-64","s9-sa-86","s9-sa-110","s9-sa-9","s9-sa-155","s9-sa-15","s9-la-35","s9-la-41"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — balanced topic rotation A",
            duration: 90,
            questionIds: [
                "s9-mcq-53","s9-mcq-110","s9-mcq-166","s9-mcq-224","s9-mcq-283","s9-mcq-340","s9-mcq-398","s9-mcq-455",
                "s9-mcq-57","s9-mcq-114","s9-mcq-170","s9-mcq-228","s9-mcq-289","s9-mcq-346","s9-mcq-404","s9-mcq-461",
                "s9-mcq-62","s9-mcq-119","s9-mcq-174","s9-mcq-233","s9-sa-112","s9-sa-180","s9-sa-23","s9-sa-47",
                "s9-sa-70","s9-sa-92","s9-sa-115","s9-sa-133","s9-sa-158","s9-sa-183","s9-la-38","s9-la-44"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — balanced topic rotation B",
            duration: 90,
            questionIds: [
                "s9-mcq-66","s9-mcq-123","s9-mcq-179","s9-mcq-237","s9-mcq-295","s9-mcq-352","s9-mcq-410","s9-mcq-467",
                "s9-mcq-70","s9-mcq-127","s9-mcq-183","s9-mcq-241","s9-mcq-302","s9-mcq-359","s9-mcq-416","s9-mcq-473",
                "s9-mcq-74","s9-mcq-131","s9-mcq-187","s9-mcq-245","s9-sa-118","s9-sa-136","s9-sa-161","s9-sa-53",
                "s9-sa-76","s9-sa-98","s9-sa-121","s9-sa-139","s9-sa-164","s9-sa-187","s9-la-47","s9-la-9"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced topic rotation C",
            duration: 90,
            questionIds: [
                "s9-mcq-78","s9-mcq-135","s9-mcq-192","s9-mcq-249","s9-mcq-308","s9-mcq-365","s9-mcq-422","s9-mcq-479",
                "s9-mcq-83","s9-mcq-140","s9-mcq-196","s9-mcq-254","s9-mcq-314","s9-mcq-371","s9-mcq-428","s9-mcq-485",
                "s9-mcq-87","s9-mcq-144","s9-mcq-200","s9-mcq-258","s9-sa-143","s9-sa-167","s9-sa-190","s9-sa-29",
                "s9-sa-82","s9-sa-104","s9-sa-124","s9-sa-146","s9-sa-170","s9-sa-193","s9-la-31","s9-la-15"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 90,
            questionIds: [
                "s9-mcq-91","s9-mcq-148","s9-mcq-205","s9-mcq-262","s9-mcq-320","s9-mcq-377","s9-mcq-434","s9-mcq-491",
                "s9-mcq-95","s9-mcq-152","s9-mcq-209","s9-mcq-266","s9-mcq-326","s9-mcq-383","s9-mcq-440","s9-mcq-497",
                "s9-mcq-99","s9-mcq-156","s9-mcq-213","s9-mcq-270","s9-sa-126","s9-sa-149","s9-sa-173","s9-sa-196",
                "s9-sa-35","s9-sa-59","s9-sa-129","s9-sa-152","s9-sa-176","s9-sa-199","s9-la-20","s9-la-26"
            ]
        }
    ]
};
