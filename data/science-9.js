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
            focus: "Broad half-yearly mix across energy, circuits, diseases and data",
            duration: 90,
            questionIds: [
                "s9-mcq-1","s9-mcq-2","s9-mcq-4","s9-mcq-6","s9-mcq-7","s9-mcq-9","s9-mcq-10","s9-mcq-12",
                "s9-mcq-13","s9-mcq-14","s9-mcq-16","s9-mcq-18","s9-mcq-21","s9-mcq-24","s9-mcq-27","s9-mcq-28",
                "s9-mcq-32","s9-mcq-34","s9-mcq-37","s9-mcq-43",
                "s9-sa-1","s9-sa-2","s9-sa-4","s9-sa-5","s9-sa-7","s9-sa-8","s9-sa-9","s9-sa-11","s9-sa-12","s9-sa-13",
                "s9-la-2","s9-la-4"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Energy-heavy paper with graphing and evidence questions",
            duration: 90,
            questionIds: [
                "s9-mcq-1","s9-mcq-3","s9-mcq-5","s9-mcq-6","s9-mcq-7","s9-mcq-8","s9-mcq-11","s9-mcq-12",
                "s9-mcq-13","s9-mcq-15","s9-mcq-17","s9-mcq-19","s9-mcq-22","s9-mcq-24","s9-mcq-25","s9-mcq-26",
                "s9-mcq-41","s9-mcq-42","s9-mcq-43","s9-mcq-44",
                "s9-sa-1","s9-sa-2","s9-sa-3","s9-sa-4","s9-sa-5","s9-sa-6","s9-sa-11","s9-sa-12","s9-sa-13","s9-sa-15",
                "s9-la-1","s9-la-5"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Homeostasis and disease focus with science-skills support",
            duration: 90,
            questionIds: [
                "s9-mcq-2","s9-mcq-4","s9-mcq-7","s9-mcq-10","s9-mcq-14","s9-mcq-20","s9-mcq-23","s9-mcq-27",
                "s9-mcq-28","s9-mcq-29","s9-mcq-30","s9-mcq-31","s9-mcq-32","s9-mcq-33","s9-mcq-34","s9-mcq-35",
                "s9-mcq-36","s9-mcq-37","s9-mcq-38","s9-mcq-44",
                "s9-sa-2","s9-sa-7","s9-sa-8","s9-sa-9","s9-sa-10","s9-sa-12","s9-sa-13","s9-sa-14","s9-sa-15","s9-sa-3",
                "s9-la-4","s9-la-6"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Circuits, Ohm's law and applied problem solving",
            duration: 90,
            questionIds: [
                "s9-mcq-1","s9-mcq-5","s9-mcq-8","s9-mcq-9","s9-mcq-13","s9-mcq-14","s9-mcq-15","s9-mcq-16",
                "s9-mcq-17","s9-mcq-18","s9-mcq-19","s9-mcq-20","s9-mcq-21","s9-mcq-22","s9-mcq-23","s9-mcq-24",
                "s9-mcq-25","s9-mcq-26","s9-mcq-41","s9-mcq-43",
                "s9-sa-1","s9-sa-4","s9-sa-5","s9-sa-6","s9-sa-7","s9-sa-9","s9-sa-11","s9-sa-12","s9-sa-13","s9-sa-14",
                "s9-la-3","s9-la-5"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Complete review across all handbook units",
            duration: 90,
            questionIds: [
                "s9-mcq-2","s9-mcq-3","s9-mcq-4","s9-mcq-6","s9-mcq-8","s9-mcq-10","s9-mcq-11","s9-mcq-14",
                "s9-mcq-16","s9-mcq-18","s9-mcq-21","s9-mcq-24","s9-mcq-27","s9-mcq-30","s9-mcq-31","s9-mcq-33",
                "s9-mcq-35","s9-mcq-39","s9-mcq-40","s9-mcq-42",
                "s9-sa-2","s9-sa-3","s9-sa-4","s9-sa-5","s9-sa-7","s9-sa-8","s9-sa-10","s9-sa-11","s9-sa-14","s9-sa-15",
                "s9-la-2","s9-la-6"
            ]
        }
    ]
};
