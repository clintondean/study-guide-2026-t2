// Geography — Half Yearly: Human Wellbeing (25%) + Environmental Change & Management (15%)
// Outcomes assessed: GE5-APC-02, GE5-COM-02, GE5-PER-02
//   GE5-APC-02: analyses how Aboriginal Peoples' Custodianship of Country supports environmental management
//   GE5-COM-02: selects and applies concepts and terminology to communicate geographical information
//   GE5-PER-02: accounts for the perspectives of people and organisations on geographical opportunities and challenges
// Harper's class assessment context: WIND POWER (renewable energy) for the EC&M section.

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

window.SUBJECT_DATA.geography = {
    id: "geography",
    name: "Geography",
    tagline: "Human Wellbeing · Environmental Change & Management (Wind Power)",
    color: "#43aa8b",
    accent: "#1d3557",
    icon: "🌏",
    topics: [
        { id: "wellbeing-concepts",  name: "Concepts of human wellbeing" },
        { id: "wellbeing-measures",  name: "Measuring & comparing wellbeing" },
        { id: "wellbeing-spatial",   name: "Spatial variations in wellbeing (global)" },
        { id: "wellbeing-australia", name: "Wellbeing in Australia & Closing the Gap" },
        { id: "wellbeing-strategies",name: "Improving wellbeing — strategies" },
        { id: "wellbeing-perspectives", name: "Stakeholders & perspectives on wellbeing" },
        { id: "wind-tech",           name: "Wind power — how it works" },
        { id: "wind-australia",      name: "Wind power in Australia (case studies)" },
        { id: "wind-environmental",  name: "Wind — environmental impacts & management" },
        { id: "wind-perspectives",   name: "Wind — community & stakeholder perspectives" },
        { id: "wind-custodianship",  name: "Wind & Aboriginal Custodianship of Country (GE5-APC-02)" },
        { id: "wind-policy",         name: "Wind — policy, transition & comparison" },
        { id: "geo-tools",           name: "Geographical tools & communication (GE5-COM-02)" }
    ],
    mcqs: [
        /* ===== Concepts of wellbeing ===== */
        {
            id: "g-mcq-1", topic: "wellbeing-concepts",
            q: "Human wellbeing is best defined as:",
            options: [
                "The amount of money a country produces each year",
                "The quality of life and conditions in which people live, including health, education and freedoms",
                "Only the level of physical health in a population",
                "The size of a country's military"
            ],
            answer: 1,
            explain: "Wellbeing is multi-dimensional — economic, social, political and environmental — not just income or health alone."
        },
        {
            id: "g-mcq-2", topic: "wellbeing-concepts",
            q: "Which is an example of a SOCIAL indicator of wellbeing?",
            options: ["GDP per capita", "Literacy rate", "Inflation rate", "Exchange rate"],
            answer: 1,
            explain: "Social indicators include literacy, education, gender equality, life expectancy."
        },
        {
            id: "g-mcq-3", topic: "wellbeing-concepts",
            q: "Which is an ECONOMIC indicator of wellbeing?",
            options: ["Life expectancy", "GDP per capita (PPP)", "Adult literacy rate", "Doctors per 1,000 people"],
            answer: 1,
            explain: "GDP per capita (PPP) measures average economic output per person, adjusting for cost of living."
        },
        {
            id: "g-mcq-4", topic: "wellbeing-concepts",
            q: "A POLITICAL indicator of wellbeing might be:",
            options: ["The Press Freedom Index", "The unemployment rate", "Average rainfall", "Tourist arrivals"],
            answer: 0,
            explain: "Political wellbeing covers freedoms, governance, voice and accountability — measured through indices like Press Freedom or Freedom House scores."
        },
        {
            id: "g-mcq-5", topic: "wellbeing-concepts",
            q: "Subjective wellbeing is most directly measured by:",
            options: ["GDP", "Self-reported life-satisfaction surveys (e.g. World Happiness Report)", "Census head counts", "Currency strength"],
            answer: 1,
            explain: "Subjective wellbeing captures how people FEEL about their lives — often surveyed annually."
        },
        {
            id: "g-mcq-6", topic: "wellbeing-concepts",
            q: "An ENVIRONMENTAL indicator of wellbeing is:",
            options: ["Mean years of schooling", "Air quality index (PM₂.₅)", "GDP", "Bank cash rate"],
            answer: 1,
            explain: "Environmental wellbeing factors include air/water quality, biodiversity and climate vulnerability."
        },

        /* ===== Measuring wellbeing ===== */
        {
            id: "g-mcq-7", topic: "wellbeing-measures",
            q: "What does HDI stand for?",
            options: ["Health Development Index", "Human Development Index", "Household Density Index", "Higher Direct Income"],
            answer: 1,
            explain: "The HDI is a composite UNDP indicator combining income, education and life expectancy."
        },
        {
            id: "g-mcq-8", topic: "wellbeing-measures",
            q: "Which THREE dimensions are combined to calculate HDI?",
            options: [
                "Income, education and life expectancy",
                "GDP, military strength and pollution",
                "Tourism, exports and rainfall",
                "Religion, language and ethnicity"
            ],
            answer: 0,
            explain: "HDI = geometric mean of GNI per capita (PPP), expected/mean years of schooling, and life expectancy at birth."
        },
        {
            id: "g-mcq-9", topic: "wellbeing-measures",
            q: "An HDI score of 0.95 indicates:",
            options: ["Very low human development", "Low development", "High development", "Very high human development"],
            answer: 3,
            explain: "HDI ranges 0–1. Scores ≥ 0.800 are 'very high'. Australia is around 0.95."
        },
        {
            id: "g-mcq-10", topic: "wellbeing-measures",
            q: "GDP can be a misleading single measure of wellbeing because:",
            options: [
                "It is not measured in dollars",
                "It does not show distribution, unpaid work, environment or happiness",
                "It is the same as HDI",
                "It only counts agricultural output"
            ],
            answer: 1,
            explain: "GDP averages output but ignores inequality, sustainability, unpaid care work and subjective wellbeing."
        },
        {
            id: "g-mcq-11", topic: "wellbeing-measures",
            q: "The Gini coefficient measures:",
            options: [
                "Population growth rate",
                "Income or wealth INEQUALITY within a country",
                "The amount of forest cover",
                "Pollution levels"
            ],
            answer: 1,
            explain: "Gini = 0 (perfect equality) to 1 (one person has everything). Higher = more unequal."
        },
        {
            id: "g-mcq-12", topic: "wellbeing-measures",
            q: "Adult literacy is most directly part of which HDI dimension?",
            options: ["Income", "Education", "Health", "Environment"],
            answer: 1,
            explain: "Education is captured via expected and mean years of schooling; literacy is closely related."
        },
        {
            id: "g-mcq-13", topic: "wellbeing-measures",
            q: "Life expectancy at birth in 2022 globally averaged about:",
            options: ["52 years", "62 years", "72 years", "82 years"],
            answer: 2,
            explain: "Global life expectancy hovers around 72–73 years; Australia and Japan are higher (~82–84), several conflict-affected states are below 60."
        },
        {
            id: "g-mcq-14", topic: "wellbeing-measures",
            q: "GNI per capita is preferred to GDP per capita as a wellbeing measure because:",
            options: [
                "It is faster to calculate",
                "It captures income earned by residents abroad and excludes income earned domestically by foreigners",
                "It includes happiness data",
                "It is always larger"
            ],
            answer: 1,
            explain: "GNI focuses on income FLOWING TO citizens, providing a cleaner picture of household income for small open economies."
        },
        {
            id: "g-mcq-15", topic: "wellbeing-measures",
            q: "The 'Better Life Index' published by the OECD includes which kind of indicators?",
            options: [
                "Economic indicators ONLY",
                "Eleven topics covering material conditions and quality of life (housing, jobs, work-life balance, environment, civic engagement, health…)",
                "Only happiness scores",
                "Stock market data"
            ],
            answer: 1,
            explain: "OECD's Better Life Index is a more holistic alternative to GDP, with 11 dimensions."
        },

        /* ===== Spatial variation — global ===== */
        {
            id: "g-mcq-16", topic: "wellbeing-spatial",
            q: "Globally, the highest concentrations of LOW wellbeing are found in:",
            options: ["Northern Europe", "East Asia", "Sub-Saharan Africa", "North America"],
            answer: 2,
            explain: "Many sub-Saharan countries rank in HDI's lower categories due to poverty, conflict and disease burden."
        },
        {
            id: "g-mcq-17", topic: "wellbeing-spatial",
            q: "Which is a CAUSE of low wellbeing in many low-HDI countries?",
            options: [
                "Strong governance and rule of law",
                "Conflict, fragile states and limited services",
                "High investment in education",
                "Reliable infrastructure"
            ],
            answer: 1,
            explain: "Conflict and weak governance disrupt schooling, healthcare and economic activity."
        },
        {
            id: "g-mcq-18", topic: "wellbeing-spatial",
            q: "Climate change is expected to WIDEN global wellbeing gaps because:",
            options: [
                "Wealthy nations will lose all infrastructure",
                "Lower-income, lower-emitting nations face the worst impacts (drought, sea-level rise) with least capacity to adapt",
                "It will rain more in deserts",
                "It only affects polar regions"
            ],
            answer: 1,
            explain: "Climate justice: those least responsible historically bear disproportionate impacts (heat, food/water insecurity, displacement)."
        },
        {
            id: "g-mcq-19", topic: "wellbeing-spatial",
            q: "Norway, Switzerland and Australia consistently appear in:",
            options: ["The bottom 10 of HDI", "The top 10 of HDI", "The top 10 by population", "The top 10 by area"],
            answer: 1,
            explain: "These OECD members combine high income with strong health, education and political-freedom indicators."
        },
        {
            id: "g-mcq-20", topic: "wellbeing-spatial",
            q: "The 'global development gap' refers to:",
            options: [
                "The distance between continents",
                "The widening difference in wellbeing between high- and low-development countries",
                "The trade balance only",
                "Time-zone differences"
            ],
            answer: 1,
            explain: "The gap reflects historical, economic and political factors and is monitored via SDG indicators."
        },
        {
            id: "g-mcq-21", topic: "wellbeing-spatial",
            q: "A country with HIGH GDP per capita but VERY UNEQUAL distribution might still show:",
            options: [
                "High median wellbeing",
                "Low average life expectancy and limited access to services for many citizens",
                "Perfect equality",
                "No social problems"
            ],
            answer: 1,
            explain: "High average income masks inequality. South Africa, Brazil and the United States illustrate large within-country gaps."
        },
        {
            id: "g-mcq-22", topic: "wellbeing-spatial",
            q: "MIGRATION often improves wellbeing for migrants but can also:",
            options: [
                "Cause 'brain drain' from sending countries, reducing skilled workers",
                "Always reduce remittances",
                "Lower receiving countries' GDP",
                "Stop population growth"
            ],
            answer: 0,
            explain: "Brain drain is a recognised wellbeing cost for sending countries, partly offset by remittances."
        },

        /* ===== Wellbeing in Australia ===== */
        {
            id: "g-mcq-23", topic: "wellbeing-australia",
            q: "In Australia, the LARGEST disparity in wellbeing is observed between:",
            options: [
                "Sydney and Melbourne",
                "Coastal cities and inland farming areas",
                "Non-Indigenous Australians and Aboriginal & Torres Strait Islander Peoples, especially in remote communities",
                "Public schools and private schools"
            ],
            answer: 2,
            explain: "Closing the Gap reports show persistent disparities in life expectancy, education and employment for Indigenous Australians."
        },
        {
            id: "g-mcq-24", topic: "wellbeing-australia",
            q: "'Closing the Gap' is best described as:",
            options: [
                "An infrastructure-only program",
                "A national strategy with targets to address inequalities between Indigenous and non-Indigenous Australians",
                "A school sport carnival",
                "A specific border policy"
            ],
            answer: 1,
            explain: "The 2020 National Agreement on Closing the Gap has 19 targets covering health, education, employment, justice, land and culture."
        },
        {
            id: "g-mcq-25", topic: "wellbeing-australia",
            q: "Remote Australian communities often experience LOWER wellbeing partly because:",
            options: [
                "They have warmer weather",
                "They have reduced access to healthcare, education and transport infrastructure",
                "They are richer than cities",
                "They are mostly underwater"
            ],
            answer: 1,
            explain: "Remoteness amplifies cost-of-services and limits choices; bushfires, drought and flooding compound vulnerability."
        },
        {
            id: "g-mcq-26", topic: "wellbeing-australia",
            q: "SEIFA (Socio-Economic Indexes for Areas) is used in Australia to:",
            options: [
                "Measure the weather",
                "Rank areas by relative socio-economic advantage and disadvantage",
                "Tax businesses",
                "Track tourism"
            ],
            answer: 1,
            explain: "Published by the ABS, SEIFA helps target services and policy to areas of greater need."
        },
        {
            id: "g-mcq-27", topic: "wellbeing-australia",
            q: "Within Sydney, the SEIFA score generally tends to be:",
            options: [
                "Equal across all suburbs",
                "Higher in northern and eastern areas, lower in some western and southwestern areas",
                "Lower in northern beaches",
                "Highest in remote areas only"
            ],
            answer: 1,
            explain: "There is well-documented spatial variation across Sydney's suburbs reflecting employment, housing and education access."
        },
        {
            id: "g-mcq-28", topic: "wellbeing-australia",
            q: "An example of a State strategy to improve wellbeing is:",
            options: [
                "The NSW Premier's Priorities (e.g. healthier kids, better education)",
                "The local council changing bin colours",
                "Sport carnivals only",
                "Nothing — wellbeing is purely federal"
            ],
            answer: 0,
            explain: "States and Territories have their own wellbeing-aligned strategies in housing, transport, health and education."
        },

        /* ===== Strategies to improve wellbeing ===== */
        {
            id: "g-mcq-29", topic: "wellbeing-strategies",
            q: "Which UN initiative explicitly targets global wellbeing?",
            options: ["Sustainable Development Goals (SDGs)", "OPEC quotas", "ASEAN free-trade zone", "G7 communique"],
            answer: 0,
            explain: "The 17 SDGs (2015–2030) cover poverty, health, education, gender, climate, peace and partnerships."
        },
        {
            id: "g-mcq-30", topic: "wellbeing-strategies",
            q: "Microfinance helps wellbeing by:",
            options: [
                "Providing very small loans to people without traditional collateral",
                "Donating food in emergencies",
                "Building national highways",
                "Training armies"
            ],
            answer: 0,
            explain: "Microfinance enables low-income individuals (often women) to start income-generating activities."
        },
        {
            id: "g-mcq-31", topic: "wellbeing-strategies",
            q: "Which is an example of an NGO working on wellbeing?",
            options: ["The World Bank", "Oxfam", "The Reserve Bank", "The OECD"],
            answer: 1,
            explain: "Oxfam, World Vision, MSF and CARE are NGOs. The World Bank and OECD are inter-governmental."
        },
        {
            id: "g-mcq-32", topic: "wellbeing-strategies",
            q: "A 'bottom-up' development strategy works by:",
            options: [
                "Letting national governments alone decide priorities",
                "Working with local communities to identify needs and design responses",
                "Imposing international standards from the top",
                "Relying on the military"
            ],
            answer: 1,
            explain: "Bottom-up approaches build community ownership and tend to be more sustainable than imposed top-down projects."
        },
        {
            id: "g-mcq-33", topic: "wellbeing-strategies",
            q: "The Australian Government's overseas aid program is delivered primarily through:",
            options: [
                "DFAT and partner NGOs",
                "The ATO",
                "Local councils only",
                "The Reserve Bank"
            ],
            answer: 0,
            explain: "DFAT (Department of Foreign Affairs and Trade) coordinates Australia's development assistance, often partnered with NGOs and multilateral bodies."
        },
        {
            id: "g-mcq-34", topic: "wellbeing-strategies",
            q: "Which of these is a HEALTH-focused wellbeing program?",
            options: [
                "Vaccination campaigns by WHO and UNICEF",
                "Currency exchange",
                "Cybersecurity audits",
                "Mining royalties"
            ],
            answer: 0,
            explain: "Immunisation programs deliver some of the highest 'wellbeing per dollar' returns globally."
        },
        {
            id: "g-mcq-35", topic: "wellbeing-strategies",
            q: "An EDUCATION-focused wellbeing strategy is:",
            options: [
                "Building schools, training teachers and supporting girls' enrolment",
                "Cancelling school holidays",
                "Banning books",
                "Reducing literacy targets"
            ],
            answer: 0,
            explain: "Education raises lifetime income, health and civic engagement — a multiplier across other dimensions."
        },

        /* ===== Stakeholders & perspectives on wellbeing ===== */
        {
            id: "g-mcq-36", topic: "wellbeing-perspectives",
            q: "Which stakeholders have a perspective on wellbeing strategies?",
            options: [
                "Only national governments",
                "Governments, NGOs, businesses, communities and individuals all have differing perspectives",
                "Only NGOs",
                "Only the United Nations"
            ],
            answer: 1,
            explain: "GE5-PER-02 explicitly addresses accounting for multiple perspectives — never assume a single voice."
        },
        {
            id: "g-mcq-37", topic: "wellbeing-perspectives",
            q: "A multinational company building a factory in a developing country might:",
            options: [
                "Always improve wellbeing",
                "Both create jobs and infrastructure (positive) AND risk poor labour conditions or environmental harm (negative)",
                "Have no effect",
                "Always reduce wellbeing"
            ],
            answer: 1,
            explain: "Stakeholder analysis must weigh both opportunities and risks rather than declare a single outcome."
        },
        {
            id: "g-mcq-38", topic: "wellbeing-perspectives",
            q: "When evaluating wellbeing strategies, an Aboriginal community's perspective should be:",
            options: [
                "Treated as one stakeholder of many",
                "Recognised as central, with free, prior and informed consent on actions affecting Country",
                "Ignored",
                "Decided by external consultants only"
            ],
            answer: 1,
            explain: "Free, Prior and Informed Consent (FPIC) is an internationally recognised principle reinforced by UNDRIP and increasingly Australian practice."
        },

        /* ===== Wind power — how it works ===== */
        {
            id: "g-mcq-39", topic: "wind-tech",
            q: "Which renewable energy source converts moving air into electricity?",
            options: ["Solar PV", "Wind turbines", "Hydroelectric dams", "Geothermal"],
            answer: 1,
            explain: "Wind turbines convert kinetic energy of moving air to mechanical rotation, then to electricity via a generator."
        },
        {
            id: "g-mcq-40", topic: "wind-tech",
            q: "The blades of a wind turbine spin a:",
            options: ["Solar panel", "Generator (via a gearbox or directly) which produces electricity", "Battery directly", "Petrol engine"],
            answer: 1,
            explain: "Modern turbines spin a generator (often through a gearbox); some 'direct drive' designs eliminate the gearbox."
        },
        {
            id: "g-mcq-41", topic: "wind-tech",
            q: "A typical large onshore wind turbine in Australia today has a tower height of around:",
            options: ["10 m", "30 m", "100–150 m", "1 km"],
            answer: 2,
            explain: "Modern utility-scale onshore turbines are 100–150 m to the hub, with rotor diameters of 130–170+ m. Offshore turbines are even bigger."
        },
        {
            id: "g-mcq-42", topic: "wind-tech",
            q: "'Capacity factor' for wind farms is best defined as:",
            options: [
                "The total height of the turbines",
                "Actual energy produced ÷ maximum theoretical energy if running at full power 100% of the time",
                "The number of turbines",
                "The price of electricity"
            ],
            answer: 1,
            explain: "Australian onshore wind farms typically achieve 30–45% capacity factor, depending on site quality. Offshore is higher."
        },
        {
            id: "g-mcq-43", topic: "wind-tech",
            q: "Wind turbines do NOT produce useful power when wind speeds are:",
            options: [
                "Too low (below cut-in) or too high (above cut-out, when blades feather to protect the machine)",
                "At any speed",
                "Steady at 8–12 m/s",
                "Cool and dry"
            ],
            answer: 0,
            explain: "Cut-in is around 3–4 m/s; rated power around 12 m/s; cut-out around 25 m/s when blades pitch out of the wind."
        },
        {
            id: "g-mcq-44", topic: "wind-tech",
            q: "Wind power is described as INTERMITTENT because:",
            options: [
                "The output varies with wind conditions and is not always available on demand",
                "Turbines work in 5-minute bursts only",
                "Operators turn them off at lunch",
                "They only run on weekends"
            ],
            answer: 0,
            explain: "Intermittency drives the need for storage (batteries, pumped hydro), grid interconnection and complementary generation."
        },
        {
            id: "g-mcq-45", topic: "wind-tech",
            q: "OFFSHORE wind has higher capacity factors than onshore because:",
            options: [
                "There are no fish",
                "Winds at sea are stronger and more consistent",
                "Salt water is more conductive",
                "Turbines are smaller"
            ],
            answer: 1,
            explain: "Offshore winds are stronger and steadier, often delivering 45–55% capacity factors — but installation and maintenance cost more."
        },
        {
            id: "g-mcq-46", topic: "wind-tech",
            q: "Which is a key SUPPORTING technology that makes high-renewable grids viable alongside wind?",
            options: [
                "Battery storage and pumped hydro",
                "Coal-fired baseload only",
                "Wood-fired generators",
                "Nothing — wind alone is enough"
            ],
            answer: 0,
            explain: "Storage shifts wind/solar generation in time. AEMO and ARENA are accelerating storage to firm renewables."
        },

        /* ===== Wind power in Australia ===== */
        {
            id: "g-mcq-47", topic: "wind-australia",
            q: "Approximately what share of Australia's electricity came from wind in recent years (early 2020s)?",
            options: ["Less than 1%", "Around 11–13%", "Around 50%", "Over 90%"],
            answer: 1,
            explain: "Wind contributed about 11–13% of Australia's electricity (varies by year), and renewables together were around 35%+ and rising."
        },
        {
            id: "g-mcq-48", topic: "wind-australia",
            q: "Which Australian state has historically had the highest percentage of wind in its electricity mix?",
            options: ["Queensland", "South Australia", "Western Australia", "Tasmania"],
            answer: 1,
            explain: "South Australia has been the leader, with wind plus solar regularly supplying the majority of state electricity at times — and 100%+ instantaneous renewable share on some days."
        },
        {
            id: "g-mcq-49", topic: "wind-australia",
            q: "The Macarthur Wind Farm is located in:",
            options: ["South-west Victoria", "Northern Territory", "Tasmania", "Sydney CBD"],
            answer: 0,
            explain: "Macarthur Wind Farm (~420 MW) is in south-west Victoria — one of Australia's largest. Other major sites include Snowtown (SA) and Coopers Gap (QLD)."
        },
        {
            id: "g-mcq-50", topic: "wind-australia",
            q: "Hornsdale (SA) is best known for pairing wind generation with:",
            options: [
                "A coal mine",
                "A grid-scale battery (the Hornsdale Power Reserve, originally the world's largest lithium-ion battery)",
                "An aluminium smelter",
                "A water-bottling plant"
            ],
            answer: 1,
            explain: "Hornsdale Power Reserve was originally a 100 MW (later 150 MW) Tesla battery that proved the value of fast frequency response on the grid."
        },
        {
            id: "g-mcq-51", topic: "wind-australia",
            q: "'Star of the South' is a proposed:",
            options: [
                "Solar farm in NSW",
                "Offshore wind project in Bass Strait off Gippsland (Victoria)",
                "Coal-fired power station",
                "Tidal-energy demonstrator in Tasmania"
            ],
            answer: 1,
            explain: "Star of the South is an early-stage offshore wind development in Bass Strait — one of several proposed under Australia's offshore-wind regulatory framework."
        },
        {
            id: "g-mcq-52", topic: "wind-australia",
            q: "Australia's federal Renewable Energy Target (RET) was a policy that:",
            options: [
                "Capped renewable generation",
                "Required electricity retailers to source a minimum amount of generation from renewables",
                "Banned wind farms",
                "Set fuel-efficiency standards for cars"
            ],
            answer: 1,
            explain: "The RET (large-scale and small-scale schemes) drove a wave of wind/solar build-out from the 2010s to 2020. Australia's current goal is 82% renewable electricity by 2030."
        },
        {
            id: "g-mcq-53", topic: "wind-australia",
            q: "A 'Renewable Energy Zone' (REZ) in NSW is:",
            options: [
                "A no-go area for wind",
                "A coordinated area for new transmission, generation and storage to enable cheaper renewable build-out",
                "A national park",
                "A mining lease"
            ],
            answer: 1,
            explain: "Five NSW REZs (Central-West Orana, New England, South-West, Hunter-Central Coast, Illawarra) are central to the state's Electricity Infrastructure Roadmap."
        },
        {
            id: "g-mcq-54", topic: "wind-australia",
            q: "Australia's federal goal for renewable electricity by 2030 (set in 2022) is:",
            options: ["20%", "50%", "82%", "100%"],
            answer: 2,
            explain: "82% renewable electricity by 2030 underpins Australia's emissions-reduction targets (43% by 2030, net zero by 2050)."
        },
        {
            id: "g-mcq-55", topic: "wind-australia",
            q: "Wind farms are typically built where:",
            options: [
                "Wind speed is highest and most consistent — often coastal headlands, ridgelines, and open agricultural land",
                "Wind speeds are lowest",
                "There is no transmission infrastructure",
                "There are no people for thousands of km"
            ],
            answer: 0,
            explain: "Wind resource maps (Bureau of Meteorology / AEMO) inform site selection alongside transmission access and land-use."
        },

        /* ===== Wind — environmental impacts ===== */
        {
            id: "g-mcq-56", topic: "wind-environmental",
            q: "A KEY environmental BENEFIT of wind power is:",
            options: [
                "Greenhouse-gas emissions are very low across the lifecycle vs coal/gas",
                "It uses lots of water for cooling",
                "It increases coal demand",
                "It produces nuclear waste"
            ],
            answer: 0,
            explain: "Wind life-cycle emissions are around 11 g CO₂-e/kWh vs coal at 800–900 g CO₂-e/kWh — a 70–80x reduction."
        },
        {
            id: "g-mcq-57", topic: "wind-environmental",
            q: "Wind farms use NEGLIGIBLE water during operation, while a coal-fired plant of similar capacity may use:",
            options: [
                "About the same",
                "Less water",
                "Far more (cooling and steam)",
                "No water at all"
            ],
            answer: 2,
            explain: "Coal plants are large water consumers; wind avoids this stress on rivers and farmland — a real adaptation benefit in dry Australia."
        },
        {
            id: "g-mcq-58", topic: "wind-environmental",
            q: "A frequently raised environmental CONCERN for wind farms is:",
            options: [
                "Bird and bat collisions, especially with poor siting",
                "Producing acid rain",
                "Increasing greenhouse gas",
                "Heating the atmosphere directly"
            ],
            answer: 0,
            explain: "Bird/bat strikes are real but small in absolute terms compared to building collisions, cats, and habitat loss; impacts are managed via siting (avoiding flyways), micro-siting and seasonal curtailment."
        },
        {
            id: "g-mcq-59", topic: "wind-environmental",
            q: "Compared with road traffic and domestic cats, bird mortality from wind farms in Australia is:",
            options: [
                "Vastly higher",
                "Of similar magnitude",
                "Many orders of magnitude LOWER",
                "Always zero"
            ],
            answer: 2,
            explain: "Cats kill billions of birds globally; wind farms kill thousands. Both matter, but the perspective puts the issue in scale."
        },
        {
            id: "g-mcq-60", topic: "wind-environmental",
            q: "End-of-life wind turbine blades have historically been hard to:",
            options: [
                "Generate energy from",
                "Recycle, due to fibreglass and resin composites",
                "Transport",
                "Make stand upright"
            ],
            answer: 1,
            explain: "Blade recycling is improving (cement co-processing, mechanical reprocessing), but composites remain a challenge as fleets age."
        },
        {
            id: "g-mcq-61", topic: "wind-environmental",
            q: "Wind turbines have a manufacturing carbon footprint mainly due to:",
            options: [
                "Steel, copper and concrete used in towers, generators and foundations",
                "Their LED lights",
                "Birdsong",
                "Nothing — they are zero-emission to make"
            ],
            answer: 0,
            explain: "Material extraction and concrete cure dominate embodied emissions — typically paid back in 6–12 months of operation."
        },
        {
            id: "g-mcq-62", topic: "wind-environmental",
            q: "An ENVIRONMENTAL IMPACT STATEMENT (EIS) for an Australian wind farm typically assesses:",
            options: [
                "Bird/bat strike risk, vegetation clearing, noise, visual impact, cultural heritage and cumulative effects",
                "Only the cost of construction",
                "Whether neighbours like the colour",
                "Stock market response"
            ],
            answer: 0,
            explain: "EIS assessments under the EPBC Act and state planning law cover many overlapping environmental, social and cultural matters."
        },
        {
            id: "g-mcq-63", topic: "wind-environmental",
            q: "'Cumulative impacts' refer to:",
            options: [
                "Adding more snacks to a school canteen",
                "Combined effects of multiple developments (e.g. several wind farms plus transmission lines) on the same region",
                "Counting trees",
                "Total electricity generated"
            ],
            answer: 1,
            explain: "Strategic environmental assessment seeks to evaluate cumulative effects across an REZ rather than project-by-project."
        },

        /* ===== Wind — community & stakeholder perspectives (GE5-PER-02) ===== */
        {
            id: "g-mcq-64", topic: "wind-perspectives",
            q: "Hosting a wind turbine on a farm typically:",
            options: [
                "Stops cropping or grazing on most of the property",
                "Allows continued farming around the turbine, with the farmer earning lease income",
                "Means the farmer cannot use any land",
                "Makes the farm uninhabitable"
            ],
            answer: 1,
            explain: "Turbine pads are small relative to farm size; lease payments per turbine can be tens of thousands of dollars per year — a useful drought-proofing income."
        },
        {
            id: "g-mcq-65", topic: "wind-perspectives",
            q: "A common COMMUNITY concern about wind farms is:",
            options: [
                "Noise, visual impact and changes in landscape character",
                "Excessive sunshine",
                "Reduced internet speeds",
                "Increased cane toad populations"
            ],
            answer: 0,
            explain: "These concerns are addressed through setbacks, sound limits and consultation. Community attitudes generally improve once farms are operating."
        },
        {
            id: "g-mcq-66", topic: "wind-perspectives",
            q: "'NIMBY' stands for:",
            options: [
                "Not In My Back Yard",
                "Nationally Important Major Building Yards",
                "Network Infrastructure Management Body",
                "New Industries Move By Year"
            ],
            answer: 0,
            explain: "NIMBYism describes opposition to local infrastructure that the same residents may support in principle. It is one perspective among many."
        },
        {
            id: "g-mcq-67", topic: "wind-perspectives",
            q: "A 'community benefit fund' from a wind farm is:",
            options: [
                "A pool of money the developer commits to local projects (e.g. sports clubs, halls, scholarships)",
                "A federal tax",
                "A fee paid by residents",
                "Unrelated to the project"
            ],
            answer: 0,
            explain: "Community benefit funds aim to share value with the host region and improve social licence."
        },
        {
            id: "g-mcq-68", topic: "wind-perspectives",
            q: "PERSPECTIVES from environmental NGOs on wind farms tend to:",
            options: [
                "Always oppose them",
                "Generally support well-sited wind power as essential to climate action, while seeking strong safeguards for biodiversity",
                "Be neutral",
                "Insist on coal as a backup"
            ],
            answer: 1,
            explain: "Groups like the Climate Council, ACF and BirdLife Australia broadly support wind with conditions on siting and species protection."
        },
        {
            id: "g-mcq-69", topic: "wind-perspectives",
            q: "Local councils' interests in wind projects typically include:",
            options: [
                "Rates revenue, employment, road impacts and community amenity",
                "Stock market returns only",
                "Tropical fish species",
                "International trade"
            ],
            answer: 0,
            explain: "Councils balance local benefits (rates, jobs, services) with disruptions (heavy haulage, road wear, noise) and may negotiate Voluntary Planning Agreements."
        },
        {
            id: "g-mcq-70", topic: "wind-perspectives",
            q: "Workers and unions' perspectives on wind farms often centre on:",
            options: [
                "Quality jobs, safety, training and a 'just transition' from fossil-fuel work",
                "Holiday allowances only",
                "Banning all renewables",
                "Reducing wages"
            ],
            answer: 0,
            explain: "Just-transition policies support workers moving from coal/gas regions into renewables and grid jobs."
        },
        {
            id: "g-mcq-71", topic: "wind-perspectives",
            q: "Energy retailers and AEMO (the grid operator) are interested in wind farms because they:",
            options: [
                "Provide low-cost generation that can lower wholesale prices but require integration with storage and transmission",
                "Always raise prices",
                "Are unrelated to the grid",
                "Replace the need for transmission entirely"
            ],
            answer: 0,
            explain: "Operationally wind is dispatchable in small windows; AEMO co-ordinates the integration of variable renewables across the NEM."
        },

        /* ===== Wind & Aboriginal Custodianship of Country (GE5-APC-02) ===== */
        {
            id: "g-mcq-72", topic: "wind-custodianship",
            q: "Aboriginal Peoples' Custodianship of Country is grounded in:",
            options: [
                "Tens of thousands of years of intergenerational knowledge, responsibilities and laws relating to specific places",
                "A 1990s law only",
                "International tourism",
                "Modern technology only"
            ],
            answer: 0,
            explain: "Custodianship is reciprocal — Country cares for people; people care for Country — and continues despite colonisation. It informs contemporary land and water management."
        },
        {
            id: "g-mcq-73", topic: "wind-custodianship",
            q: "Free, Prior and Informed Consent (FPIC) means a wind project on Country should:",
            options: [
                "Proceed if the developer wants to",
                "Engage Traditional Owners early, share full information, and obtain consent without coercion",
                "Be decided in court only",
                "Use majority opinion of locals"
            ],
            answer: 1,
            explain: "FPIC is recognised in UNDRIP and increasingly required in Australian project frameworks; it improves both ethics and outcomes."
        },
        {
            id: "g-mcq-74", topic: "wind-custodianship",
            q: "A Cultural Heritage Management Plan (CHMP) for a wind farm typically:",
            options: [
                "Maps known heritage sites, sets protection measures and is developed with Traditional Owners",
                "Lists tourist attractions",
                "Calculates rent only",
                "Is optional after construction"
            ],
            answer: 0,
            explain: "CHMPs are required under state heritage laws and are increasingly co-designed with Registered Aboriginal Parties (RAPs)."
        },
        {
            id: "g-mcq-75", topic: "wind-custodianship",
            q: "Native Title rights and interests can affect wind-farm development by:",
            options: [
                "Requiring consultation, agreement-making and sometimes Indigenous Land Use Agreements (ILUAs)",
                "Always preventing any project",
                "Having no relevance",
                "Being decided unilaterally by the developer"
            ],
            answer: 0,
            explain: "ILUAs negotiated under the Native Title Act 1993 set out access, benefit-sharing and protection arrangements."
        },
        {
            id: "g-mcq-76", topic: "wind-custodianship",
            q: "Indigenous-led renewable projects in Australia (such as the AGL/Yindjibarndi partnership exploring wind/solar in the Pilbara) demonstrate:",
            options: [
                "Custodianship can shape project design, ownership and benefits",
                "Traditional Owners always reject development",
                "Only the federal government can build wind farms",
                "Wind cannot be built on Aboriginal land"
            ],
            answer: 0,
            explain: "Equity partnerships and Indigenous ownership models connect cultural authority with economic opportunity."
        },
        {
            id: "g-mcq-77", topic: "wind-custodianship",
            q: "An example of integrating Indigenous knowledge with environmental management on a wind farm site is:",
            options: [
                "Cultural mapping informs siting away from significant places, and Indigenous rangers monitor revegetation and species",
                "Removing all vegetation",
                "Ignoring biodiversity",
                "Building turbines on rock art"
            ],
            answer: 0,
            explain: "Co-management approaches blend Western science and traditional ecological knowledge — and increasingly employ Indigenous rangers and ecologists."
        },
        {
            id: "g-mcq-78", topic: "wind-custodianship",
            q: "Aboriginal Custodianship of Country contributes to ENVIRONMENTAL MANAGEMENT of a wind site by:",
            options: [
                "Guiding biodiversity care and seasonal land practices, plus protecting culturally significant features",
                "Replacing all construction equipment",
                "Producing electricity directly",
                "Reducing transmission costs only"
            ],
            answer: 0,
            explain: "Custodianship supports stronger environmental outcomes and aligns with GE5-APC-02 — Country and Community wellbeing improve together."
        },

        /* ===== Wind — policy, transition & comparison ===== */
        {
            id: "g-mcq-79", topic: "wind-policy",
            q: "Compared with coal, wind power generally has:",
            options: [
                "Higher emissions, lower water use",
                "Far lower lifecycle emissions and far lower water use",
                "Higher water use, similar emissions",
                "Identical impacts"
            ],
            answer: 1,
            explain: "Lifecycle wind ≈ 11 g CO₂-e/kWh; coal ≈ 800–900 g CO₂-e/kWh. Water use is also dramatically lower."
        },
        {
            id: "g-mcq-80", topic: "wind-policy",
            q: "Compared with rooftop solar, utility-scale wind is:",
            options: [
                "Always preferable",
                "Complementary — wind often peaks at different times (e.g. evenings, winter) than solar (daytime)",
                "Worse in every way",
                "Identical"
            ],
            answer: 1,
            explain: "Diversity of generation profiles is a key strategy for high-renewable systems — wind often complements solar."
        },
        {
            id: "g-mcq-81", topic: "wind-policy",
            q: "AEMO's Integrated System Plan (ISP) describes:",
            options: [
                "A national roadmap for grid investment to deliver an affordable, reliable, low-emissions electricity system",
                "Football fixtures",
                "School curriculum",
                "Telecommunications only"
            ],
            answer: 0,
            explain: "ISP is updated every two years and identifies priority transmission and generation projects, including wind and storage."
        },
        {
            id: "g-mcq-82", topic: "wind-policy",
            q: "A criticism of an OVER-reliance on wind alone is:",
            options: [
                "Variability — without storage and other firming, supply may not match demand",
                "Carbon pricing rises",
                "Excess water consumption",
                "Coal becomes cheaper"
            ],
            answer: 0,
            explain: "Wind is a key enabler of the transition but must be paired with storage, dispatchable generation and demand response."
        },
        {
            id: "g-mcq-83", topic: "wind-policy",
            q: "Australia's offshore wind framework (2021 Offshore Electricity Infrastructure Act) creates:",
            options: [
                "Banned offshore wind",
                "A licensing regime so projects can be assessed in declared offshore areas (e.g. Gippsland, Hunter, Illawarra)",
                "Federal control of all rooftop solar",
                "International airline routes"
            ],
            answer: 1,
            explain: "Declared zones and feasibility licences are unlocking large-scale offshore wind off Victoria and NSW."
        },

        /* ===== Geographical tools & communication ===== */
        {
            id: "g-mcq-84", topic: "geo-tools",
            q: "A choropleth map is BEST for showing:",
            options: [
                "Photos of a place",
                "Spatial variations of a quantity (e.g. HDI by country) using shading",
                "Wind speed at one second",
                "Ocean depths"
            ],
            answer: 1,
            explain: "Choropleths use colour intensity to encode values across regions. Note: classification choices affect the message."
        },
        {
            id: "g-mcq-85", topic: "geo-tools",
            q: "GIS (Geographic Information System) is used to:",
            options: [
                "Print novels",
                "Layer spatial data (terrain, wind speed, biodiversity, settlements) for analysis and decision-making",
                "Schedule sport carnivals",
                "Run banks"
            ],
            answer: 1,
            explain: "GIS is fundamental for siting wind farms, monitoring change and visualising wellbeing data."
        },
        {
            id: "g-mcq-86", topic: "geo-tools",
            q: "When evaluating a media article on wind power, a careful geographer would consider:",
            options: [
                "Author/publisher bias, source data, currency and whether multiple perspectives are represented",
                "Only the photo",
                "The headline only",
                "How many comments it has"
            ],
            answer: 0,
            explain: "GE5-COM-02 and GE5-PER-02 reward careful, multi-perspective evaluation."
        },
        {
            id: "g-mcq-87", topic: "geo-tools",
            q: "An appropriate way to communicate wind farm impacts to a community is:",
            options: [
                "Plain-language fact sheets, public meetings, maps, and Q&A sessions",
                "Locked technical documents only",
                "A glossy ad with no data",
                "A confidential email to one resident"
            ],
            answer: 0,
            explain: "Inclusive, accessible communication is essential for social licence and aligns with COM5-2 / COM5-9 in Commerce too."
        },
        {
            id: "g-mcq-88", topic: "geo-tools",
            q: "When sketching a labelled diagram of a wind turbine in an exam, you should include:",
            options: [
                "Tower, nacelle, hub, blades, generator, gearbox (if any), foundation, and direction of wind",
                "Only the colours",
                "Only the cost",
                "Only the year built"
            ],
            answer: 0,
            explain: "Annotated diagrams are a fast way to demonstrate understanding under exam time pressure."
        },
        {
            id: "g-mcq-89", topic: "geo-tools",
            q: "Which is a STRONG technique for communicating geographical change over time?",
            options: [
                "A line graph or paired before/after maps",
                "A shopping list",
                "A blank page",
                "A political opinion piece"
            ],
            answer: 0,
            explain: "Choose the visualisation that matches the message — change over time → line/time-series; spatial difference → maps."
        },

        /* ===== Expanded Geography question bank ===== */
        /* ===== Concepts of wellbeing ===== */
        {
            id: "g-mcq-90", topic: "wellbeing-concepts",
            q: "Which statement best defines objective indicators?",
            options: [
                "Measures of wellbeing that can be counted or observed, such as life expectancy, literacy or access to safe water",
                "People's own reported feelings about life satisfaction, safety and happiness",
                "The resources people have to meet needs, including income, employment and affordability",
                "The quality of health, education, safety and relationships in a community"
            ],
            answer: 0,
            explain: "Objective indicators means measures of wellbeing that can be counted or observed, such as life expectancy, literacy or access to safe water. It matters because they reveal patterns of advantage and disadvantage that opinion alone can hide."
        },

        {
            id: "g-mcq-91", topic: "wellbeing-concepts",
            q: "Which scenario best shows objective indicators in action?",
            options: [
                "Citizens can vote, speak freely and seek legal protection when treated unfairly",
                "A geographer compares countries using infant mortality, school completion and access to electricity",
                "A town with clean drinking water, low pollution and protected ecosystems supports healthier lives",
                "A family has shelter and food but also needs safety, respect and connection to community"
            ],
            answer: 1,
            explain: "The best example is a geographer compares countries using infant mortality, school completion and access to electricity. Geographers use this idea to compare living conditions between places with consistent measurable data."
        },

        {
            id: "g-mcq-92", topic: "wellbeing-concepts",
            q: "Why do geographers use objective indicators when studying human wellbeing?",
            options: [
                "Explain patterns in income security and material living standards",
                "Judge whether people can influence government and live with security",
                "Compare living conditions between places with consistent measurable data",
                "Avoid reducing wellbeing to income or possessions alone"
            ],
            answer: 2,
            explain: "Geographers use objective indicators to compare living conditions between places with consistent measurable data. They reveal patterns of advantage and disadvantage that opinion alone can hide."
        },

        {
            id: "g-mcq-93", topic: "wellbeing-concepts",
            q: "Which note about objective indicators is MOST accurate?",
            options: [
                "Good geography checks patterns at multiple scales before making a judgement",
                "It complements objective data because strong averages do not always mean people feel well",
                "Strong social wellbeing helps people participate fully in their community",
                "They reveal patterns of advantage and disadvantage that opinion alone can hide"
            ],
            answer: 3,
            explain: "They reveal patterns of advantage and disadvantage that opinion alone can hide. This links to measures of wellbeing that can be counted or observed, such as life expectancy, literacy or access to safe water."
        },

        {
            id: "g-mcq-94", topic: "wellbeing-concepts",
            q: "Which statement best defines subjective wellbeing?",
            options: [
                "The resources people have to meet needs, including income, employment and affordability",
                "People's own reported feelings about life satisfaction, safety and happiness",
                "The quality of health, education, safety and relationships in a community",
                "The freedoms, rights and voice people have in decisions that affect their lives"
            ],
            answer: 1,
            explain: "Subjective wellbeing means people's own reported feelings about life satisfaction, safety and happiness. It matters because it complements objective data because strong averages do not always mean people feel well."
        },

        {
            id: "g-mcq-95", topic: "wellbeing-concepts",
            q: "Which scenario best shows subjective wellbeing in action?",
            options: [
                "A town with clean drinking water, low pollution and protected ecosystems supports healthier lives",
                "A family has shelter and food but also needs safety, respect and connection to community",
                "Survey responses asking residents to rate their quality of life and sense of belonging",
                "A country records high income overall but remote communities still lack doctors and reliable transport"
            ],
            answer: 2,
            explain: "The best example is survey responses asking residents to rate their quality of life and sense of belonging. Geographers use this idea to capture how people experience life rather than relying only on statistics."
        },

        {
            id: "g-mcq-96", topic: "wellbeing-concepts",
            q: "Why do geographers use subjective wellbeing when studying human wellbeing?",
            options: [
                "Show how services and social conditions shape quality of life",
                "Connect living conditions to environmental quality and sustainability",
                "Look beyond national totals to see who benefits and who is left behind",
                "Capture how people experience life rather than relying only on statistics"
            ],
            answer: 3,
            explain: "Geographers use subjective wellbeing to capture how people experience life rather than relying only on statistics. It complements objective data because strong averages do not always mean people feel well."
        },

        {
            id: "g-mcq-97", topic: "wellbeing-concepts",
            q: "Which note about subjective wellbeing is MOST accurate?",
            options: [
                "It complements objective data because strong averages do not always mean people feel well",
                "They reveal patterns of advantage and disadvantage that opinion alone can hide",
                "Money supports choices and access but does not guarantee fairness or happiness",
                "Without rights and accountability other forms of wellbeing can be fragile"
            ],
            answer: 0,
            explain: "It complements objective data because strong averages do not always mean people feel well. This links to people's own reported feelings about life satisfaction, safety and happiness."
        },

        {
            id: "g-mcq-98", topic: "wellbeing-concepts",
            q: "Which statement best defines economic wellbeing?",
            options: [
                "The quality of health, education, safety and relationships in a community",
                "The freedoms, rights and voice people have in decisions that affect their lives",
                "The resources people have to meet needs, including income, employment and affordability",
                "The quality of the natural environment people depend on, including clean air, safe water and climate stability"
            ],
            answer: 2,
            explain: "Economic wellbeing means the resources people have to meet needs, including income, employment and affordability. It matters because money supports choices and access but does not guarantee fairness or happiness."
        },

        {
            id: "g-mcq-99", topic: "wellbeing-concepts",
            q: "Which scenario best shows economic wellbeing in action?",
            options: [
                "A family has shelter and food but also needs safety, respect and connection to community",
                "A country records high income overall but remote communities still lack doctors and reliable transport",
                "A geographer compares countries using infant mortality, school completion and access to electricity",
                "A household can pay rent, buy food and manage transport because stable work covers everyday costs"
            ],
            answer: 3,
            explain: "The best example is a household can pay rent, buy food and manage transport because stable work covers everyday costs. Geographers use this idea to explain patterns in income security and material living standards."
        },

        {
            id: "g-mcq-100", topic: "wellbeing-concepts",
            q: "Why do geographers use economic wellbeing when studying human wellbeing?",
            options: [
                "Explain patterns in income security and material living standards",
                "Judge whether people can influence government and live with security",
                "Avoid reducing wellbeing to income or possessions alone",
                "Compare living conditions between places with consistent measurable data"
            ],
            answer: 0,
            explain: "Geographers use economic wellbeing to explain patterns in income security and material living standards. Money supports choices and access but does not guarantee fairness or happiness."
        },

        {
            id: "g-mcq-101", topic: "wellbeing-concepts",
            q: "Which note about economic wellbeing is MOST accurate?",
            options: [
                "It complements objective data because strong averages do not always mean people feel well",
                "Money supports choices and access but does not guarantee fairness or happiness",
                "Strong social wellbeing helps people participate fully in their community",
                "Damaged environments reduce health, security and future opportunities"
            ],
            answer: 1,
            explain: "Money supports choices and access but does not guarantee fairness or happiness. This links to the resources people have to meet needs, including income, employment and affordability."
        },

        {
            id: "g-mcq-102", topic: "wellbeing-concepts",
            q: "Which statement best defines social wellbeing?",
            options: [
                "The freedoms, rights and voice people have in decisions that affect their lives",
                "The quality of the natural environment people depend on, including clean air, safe water and climate stability",
                "The idea that wellbeing depends on both physical needs being met and people having dignity, identity and belonging",
                "The quality of health, education, safety and relationships in a community"
            ],
            answer: 3,
            explain: "Social wellbeing means the quality of health, education, safety and relationships in a community. It matters because strong social wellbeing helps people participate fully in their community."
        },

        {
            id: "g-mcq-103", topic: "wellbeing-concepts",
            q: "Which scenario best shows social wellbeing in action?",
            options: [
                "High school attendance, reliable health care and low preventable disease improve daily life in a region",
                "A country records high income overall but remote communities still lack doctors and reliable transport",
                "A geographer compares countries using infant mortality, school completion and access to electricity",
                "Survey responses asking residents to rate their quality of life and sense of belonging"
            ],
            answer: 0,
            explain: "The best example is high school attendance, reliable health care and low preventable disease improve daily life in a region. Geographers use this idea to show how services and social conditions shape quality of life."
        },

        {
            id: "g-mcq-104", topic: "wellbeing-concepts",
            q: "Why do geographers use social wellbeing when studying human wellbeing?",
            options: [
                "Connect living conditions to environmental quality and sustainability",
                "Show how services and social conditions shape quality of life",
                "Look beyond national totals to see who benefits and who is left behind",
                "Capture how people experience life rather than relying only on statistics"
            ],
            answer: 1,
            explain: "Geographers use social wellbeing to show how services and social conditions shape quality of life. Strong social wellbeing helps people participate fully in their community."
        },

        {
            id: "g-mcq-105", topic: "wellbeing-concepts",
            q: "Which note about social wellbeing is MOST accurate?",
            options: [
                "Money supports choices and access but does not guarantee fairness or happiness",
                "Without rights and accountability other forms of wellbeing can be fragile",
                "Strong social wellbeing helps people participate fully in their community",
                "People need meaning and social connection as well as goods and services"
            ],
            answer: 2,
            explain: "Strong social wellbeing helps people participate fully in their community. This links to the quality of health, education, safety and relationships in a community."
        },

        {
            id: "g-mcq-106", topic: "wellbeing-concepts",
            q: "Which statement best defines political wellbeing?",
            options: [
                "The freedoms, rights and voice people have in decisions that affect their lives",
                "The quality of the natural environment people depend on, including clean air, safe water and climate stability",
                "The idea that wellbeing depends on both physical needs being met and people having dignity, identity and belonging",
                "The understanding that national averages can hide major differences between regions, groups and households"
            ],
            answer: 0,
            explain: "Political wellbeing means the freedoms, rights and voice people have in decisions that affect their lives. It matters because without rights and accountability other forms of wellbeing can be fragile."
        },

        {
            id: "g-mcq-107", topic: "wellbeing-concepts",
            q: "Which scenario best shows political wellbeing in action?",
            options: [
                "A geographer compares countries using infant mortality, school completion and access to electricity",
                "Citizens can vote, speak freely and seek legal protection when treated unfairly",
                "Survey responses asking residents to rate their quality of life and sense of belonging",
                "A household can pay rent, buy food and manage transport because stable work covers everyday costs"
            ],
            answer: 1,
            explain: "The best example is citizens can vote, speak freely and seek legal protection when treated unfairly. Geographers use this idea to judge whether people can influence government and live with security."
        },

        {
            id: "g-mcq-108", topic: "wellbeing-concepts",
            q: "Why do geographers use political wellbeing when studying human wellbeing?",
            options: [
                "Avoid reducing wellbeing to income or possessions alone",
                "Compare living conditions between places with consistent measurable data",
                "Judge whether people can influence government and live with security",
                "Explain patterns in income security and material living standards"
            ],
            answer: 2,
            explain: "Geographers use political wellbeing to judge whether people can influence government and live with security. Without rights and accountability other forms of wellbeing can be fragile."
        },

        {
            id: "g-mcq-109", topic: "wellbeing-concepts",
            q: "Which note about political wellbeing is MOST accurate?",
            options: [
                "Strong social wellbeing helps people participate fully in their community",
                "Damaged environments reduce health, security and future opportunities",
                "Good geography checks patterns at multiple scales before making a judgement",
                "Without rights and accountability other forms of wellbeing can be fragile"
            ],
            answer: 3,
            explain: "Without rights and accountability other forms of wellbeing can be fragile. This links to the freedoms, rights and voice people have in decisions that affect their lives."
        },

        {
            id: "g-mcq-110", topic: "wellbeing-concepts",
            q: "Which statement best defines environmental wellbeing?",
            options: [
                "The idea that wellbeing depends on both physical needs being met and people having dignity, identity and belonging",
                "The quality of the natural environment people depend on, including clean air, safe water and climate stability",
                "The understanding that national averages can hide major differences between regions, groups and households",
                "Measures of wellbeing that can be counted or observed, such as life expectancy, literacy or access to safe water"
            ],
            answer: 1,
            explain: "Environmental wellbeing means the quality of the natural environment people depend on, including clean air, safe water and climate stability. It matters because damaged environments reduce health, security and future opportunities."
        },

        {
            id: "g-mcq-111", topic: "wellbeing-concepts",
            q: "Which scenario best shows environmental wellbeing in action?",
            options: [
                "Survey responses asking residents to rate their quality of life and sense of belonging",
                "A household can pay rent, buy food and manage transport because stable work covers everyday costs",
                "A town with clean drinking water, low pollution and protected ecosystems supports healthier lives",
                "High school attendance, reliable health care and low preventable disease improve daily life in a region"
            ],
            answer: 2,
            explain: "The best example is a town with clean drinking water, low pollution and protected ecosystems supports healthier lives. Geographers use this idea to connect living conditions to environmental quality and sustainability."
        },

        {
            id: "g-mcq-112", topic: "wellbeing-concepts",
            q: "Why do geographers use environmental wellbeing when studying human wellbeing?",
            options: [
                "Look beyond national totals to see who benefits and who is left behind",
                "Capture how people experience life rather than relying only on statistics",
                "Show how services and social conditions shape quality of life",
                "Connect living conditions to environmental quality and sustainability"
            ],
            answer: 3,
            explain: "Geographers use environmental wellbeing to connect living conditions to environmental quality and sustainability. Damaged environments reduce health, security and future opportunities."
        },

        {
            id: "g-mcq-113", topic: "wellbeing-concepts",
            q: "Which note about environmental wellbeing is MOST accurate?",
            options: [
                "Damaged environments reduce health, security and future opportunities",
                "Without rights and accountability other forms of wellbeing can be fragile",
                "People need meaning and social connection as well as goods and services",
                "They reveal patterns of advantage and disadvantage that opinion alone can hide"
            ],
            answer: 0,
            explain: "Damaged environments reduce health, security and future opportunities. This links to the quality of the natural environment people depend on, including clean air, safe water and climate stability."
        },

        {
            id: "g-mcq-114", topic: "wellbeing-concepts",
            q: "Which statement best defines material and non-material needs?",
            options: [
                "The understanding that national averages can hide major differences between regions, groups and households",
                "Measures of wellbeing that can be counted or observed, such as life expectancy, literacy or access to safe water",
                "The idea that wellbeing depends on both physical needs being met and people having dignity, identity and belonging",
                "People's own reported feelings about life satisfaction, safety and happiness"
            ],
            answer: 2,
            explain: "Material and non-material needs means the idea that wellbeing depends on both physical needs being met and people having dignity, identity and belonging. It matters because people need meaning and social connection as well as goods and services."
        },

        {
            id: "g-mcq-115", topic: "wellbeing-concepts",
            q: "Which scenario best shows material and non-material needs in action?",
            options: [
                "A household can pay rent, buy food and manage transport because stable work covers everyday costs",
                "High school attendance, reliable health care and low preventable disease improve daily life in a region",
                "Citizens can vote, speak freely and seek legal protection when treated unfairly",
                "A family has shelter and food but also needs safety, respect and connection to community"
            ],
            answer: 3,
            explain: "The best example is a family has shelter and food but also needs safety, respect and connection to community. Geographers use this idea to avoid reducing wellbeing to income or possessions alone."
        },

        {
            id: "g-mcq-116", topic: "wellbeing-concepts",
            q: "Why do geographers use material and non-material needs when studying human wellbeing?",
            options: [
                "Avoid reducing wellbeing to income or possessions alone",
                "Compare living conditions between places with consistent measurable data",
                "Explain patterns in income security and material living standards",
                "Judge whether people can influence government and live with security"
            ],
            answer: 0,
            explain: "Geographers use material and non-material needs to avoid reducing wellbeing to income or possessions alone. People need meaning and social connection as well as goods and services."
        },

        {
            id: "g-mcq-117", topic: "wellbeing-concepts",
            q: "Which note about material and non-material needs is MOST accurate?",
            options: [
                "Damaged environments reduce health, security and future opportunities",
                "People need meaning and social connection as well as goods and services",
                "Good geography checks patterns at multiple scales before making a judgement",
                "It complements objective data because strong averages do not always mean people feel well"
            ],
            answer: 1,
            explain: "People need meaning and social connection as well as goods and services. This links to the idea that wellbeing depends on both physical needs being met and people having dignity, identity and belonging."
        },

        {
            id: "g-mcq-118", topic: "wellbeing-concepts",
            q: "Which statement best defines scale and inequality?",
            options: [
                "Measures of wellbeing that can be counted or observed, such as life expectancy, literacy or access to safe water",
                "People's own reported feelings about life satisfaction, safety and happiness",
                "The resources people have to meet needs, including income, employment and affordability",
                "The understanding that national averages can hide major differences between regions, groups and households"
            ],
            answer: 3,
            explain: "Scale and inequality means the understanding that national averages can hide major differences between regions, groups and households. It matters because good geography checks patterns at multiple scales before making a judgement."
        },

        {
            id: "g-mcq-119", topic: "wellbeing-concepts",
            q: "Which scenario best shows scale and inequality in action?",
            options: [
                "A country records high income overall but remote communities still lack doctors and reliable transport",
                "High school attendance, reliable health care and low preventable disease improve daily life in a region",
                "Citizens can vote, speak freely and seek legal protection when treated unfairly",
                "A town with clean drinking water, low pollution and protected ecosystems supports healthier lives"
            ],
            answer: 0,
            explain: "The best example is a country records high income overall but remote communities still lack doctors and reliable transport. Geographers use this idea to look beyond national totals to see who benefits and who is left behind."
        },

        {
            id: "g-mcq-120", topic: "wellbeing-concepts",
            q: "Why do geographers use scale and inequality when studying human wellbeing?",
            options: [
                "Capture how people experience life rather than relying only on statistics",
                "Look beyond national totals to see who benefits and who is left behind",
                "Show how services and social conditions shape quality of life",
                "Connect living conditions to environmental quality and sustainability"
            ],
            answer: 1,
            explain: "Geographers use scale and inequality to look beyond national totals to see who benefits and who is left behind. Good geography checks patterns at multiple scales before making a judgement."
        },

        {
            id: "g-mcq-121", topic: "wellbeing-concepts",
            q: "Which note about scale and inequality is MOST accurate?",
            options: [
                "People need meaning and social connection as well as goods and services",
                "They reveal patterns of advantage and disadvantage that opinion alone can hide",
                "Good geography checks patterns at multiple scales before making a judgement",
                "Money supports choices and access but does not guarantee fairness or happiness"
            ],
            answer: 2,
            explain: "Good geography checks patterns at multiple scales before making a judgement. This links to the understanding that national averages can hide major differences between regions, groups and households."
        },


        /* ===== Measuring & comparing wellbeing ===== */
        {
            id: "g-mcq-122", topic: "wellbeing-measures",
            q: "Which statement best defines HDI?",
            options: [
                "A composite measure combining life expectancy, education and income to compare human development",
                "A measure of inequality showing how evenly income or wealth is shared within a country",
                "The average economic output produced per person in a country",
                "The average income earned by residents, including income from overseas and excluding income sent abroad"
            ],
            answer: 0,
            explain: "HDI means a composite measure combining life expectancy, education and income to compare human development. It matters because it gives a clearer overview than a single economic statistic."
        },

        {
            id: "g-mcq-123", topic: "wellbeing-measures",
            q: "Which scenario best shows HDI in action?",
            options: [
                "A population with low preventable disease and strong health care usually records higher life expectancy",
                "A teacher ranks countries using one score that includes schooling, health and GNI per person",
                "A country with high literacy and long time spent in school usually scores better on education measures",
                "A household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel"
            ],
            answer: 1,
            explain: "The best example is a teacher ranks countries using one score that includes schooling, health and GNI per person. Geographers use this idea to compare development with a broader lens than money alone."
        },

        {
            id: "g-mcq-124", topic: "wellbeing-measures",
            q: "Why do geographers use HDI when studying wellbeing data?",
            options: [
                "Estimate the size of an economy relative to its population",
                "Compare health outcomes between places",
                "Compare development with a broader lens than money alone",
                "Identify poverty that income figures can miss"
            ],
            answer: 2,
            explain: "Geographers use HDI to compare development with a broader lens than money alone. It gives a clearer overview than a single economic statistic."
        },

        {
            id: "g-mcq-125", topic: "wellbeing-measures",
            q: "Which note about HDI is MOST accurate?",
            options: [
                "They remind geographers that wellbeing is broader than production and wages",
                "Inequality changes how useful an average income figure really is",
                "It can be more useful than GDP in open economies with strong income flows",
                "It gives a clearer overview than a single economic statistic"
            ],
            answer: 3,
            explain: "It gives a clearer overview than a single economic statistic. This links to a composite measure combining life expectancy, education and income to compare human development."
        },

        {
            id: "g-mcq-126", topic: "wellbeing-measures",
            q: "Which statement best defines the Gini coefficient?",
            options: [
                "The average economic output produced per person in a country",
                "A measure of inequality showing how evenly income or wealth is shared within a country",
                "The average income earned by residents, including income from overseas and excluding income sent abroad",
                "The average number of years a newborn is expected to live if current health conditions continue"
            ],
            answer: 1,
            explain: "The Gini coefficient means a measure of inequality showing how evenly income or wealth is shared within a country. It matters because inequality changes how useful an average income figure really is."
        },

        {
            id: "g-mcq-127", topic: "wellbeing-measures",
            q: "Which scenario best shows the Gini coefficient in action?",
            options: [
                "A country with high literacy and long time spent in school usually scores better on education measures",
                "A household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel",
                "Two countries have similar average income but one has a much higher Gini because wealth is concentrated",
                "A comparison of countries includes work-life balance, civic engagement and how safe people feel"
            ],
            answer: 2,
            explain: "The best example is two countries have similar average income but one has a much higher Gini because wealth is concentrated. Geographers use this idea to show whether national prosperity is shared fairly."
        },

        {
            id: "g-mcq-128", topic: "wellbeing-measures",
            q: "Why do geographers use the Gini coefficient when studying wellbeing data?",
            options: [
                "Show how much income residents actually receive",
                "Show the depth and reach of education in a society",
                "Bring quality-of-life dimensions into a single discussion",
                "Show whether national prosperity is shared fairly"
            ],
            answer: 3,
            explain: "Geographers use the Gini coefficient to show whether national prosperity is shared fairly. Inequality changes how useful an average income figure really is."
        },

        {
            id: "g-mcq-129", topic: "wellbeing-measures",
            q: "Which note about the Gini coefficient is MOST accurate?",
            options: [
                "Inequality changes how useful an average income figure really is",
                "It gives a clearer overview than a single economic statistic",
                "It is easy to compare but misses distribution, unpaid work and sustainability",
                "It summarises long-term access to nutrition, sanitation and health services"
            ],
            answer: 0,
            explain: "Inequality changes how useful an average income figure really is. This links to a measure of inequality showing how evenly income or wealth is shared within a country."
        },

        {
            id: "g-mcq-130", topic: "wellbeing-measures",
            q: "Which statement best defines GDP per capita?",
            options: [
                "The average income earned by residents, including income from overseas and excluding income sent abroad",
                "The average number of years a newborn is expected to live if current health conditions continue",
                "The average economic output produced per person in a country",
                "Indicators such as literacy, mean years of schooling and expected years of schooling"
            ],
            answer: 2,
            explain: "GDP per capita means the average economic output produced per person in a country. It matters because it is easy to compare but misses distribution, unpaid work and sustainability."
        },

        {
            id: "g-mcq-131", topic: "wellbeing-measures",
            q: "Which scenario best shows GDP per capita in action?",
            options: [
                "A household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel",
                "A comparison of countries includes work-life balance, civic engagement and how safe people feel",
                "A teacher ranks countries using one score that includes schooling, health and GNI per person",
                "A report divides total national production by population to show average output per person"
            ],
            answer: 3,
            explain: "The best example is a report divides total national production by population to show average output per person. Geographers use this idea to estimate the size of an economy relative to its population."
        },

        {
            id: "g-mcq-132", topic: "wellbeing-measures",
            q: "Why do geographers use GDP per capita when studying wellbeing data?",
            options: [
                "Estimate the size of an economy relative to its population",
                "Compare health outcomes between places",
                "Identify poverty that income figures can miss",
                "Compare development with a broader lens than money alone"
            ],
            answer: 0,
            explain: "Geographers use GDP per capita to estimate the size of an economy relative to its population. It is easy to compare but misses distribution, unpaid work and sustainability."
        },

        {
            id: "g-mcq-133", topic: "wellbeing-measures",
            q: "Which note about GDP per capita is MOST accurate?",
            options: [
                "Inequality changes how useful an average income figure really is",
                "It is easy to compare but misses distribution, unpaid work and sustainability",
                "It can be more useful than GDP in open economies with strong income flows",
                "Education affects future income, health and civic participation"
            ],
            answer: 1,
            explain: "It is easy to compare but misses distribution, unpaid work and sustainability. This links to the average economic output produced per person in a country."
        },

        {
            id: "g-mcq-134", topic: "wellbeing-measures",
            q: "Which statement best defines GNI per capita?",
            options: [
                "The average number of years a newborn is expected to live if current health conditions continue",
                "Indicators such as literacy, mean years of schooling and expected years of schooling",
                "A measure that tracks overlapping deprivations in health, education and living standards",
                "The average income earned by residents, including income from overseas and excluding income sent abroad"
            ],
            answer: 3,
            explain: "GNI per capita means the average income earned by residents, including income from overseas and excluding income sent abroad. It matters because it can be more useful than GDP in open economies with strong income flows."
        },

        {
            id: "g-mcq-135", topic: "wellbeing-measures",
            q: "Which scenario best shows GNI per capita in action?",
            options: [
                "A country with many citizens working overseas records income flowing back to residents",
                "A comparison of countries includes work-life balance, civic engagement and how safe people feel",
                "A teacher ranks countries using one score that includes schooling, health and GNI per person",
                "Two countries have similar average income but one has a much higher Gini because wealth is concentrated"
            ],
            answer: 0,
            explain: "The best example is a country with many citizens working overseas records income flowing back to residents. Geographers use this idea to show how much income residents actually receive."
        },

        {
            id: "g-mcq-136", topic: "wellbeing-measures",
            q: "Why do geographers use GNI per capita when studying wellbeing data?",
            options: [
                "Show the depth and reach of education in a society",
                "Show how much income residents actually receive",
                "Bring quality-of-life dimensions into a single discussion",
                "Show whether national prosperity is shared fairly"
            ],
            answer: 1,
            explain: "Geographers use GNI per capita to show how much income residents actually receive. It can be more useful than GDP in open economies with strong income flows."
        },

        {
            id: "g-mcq-137", topic: "wellbeing-measures",
            q: "Which note about GNI per capita is MOST accurate?",
            options: [
                "It is easy to compare but misses distribution, unpaid work and sustainability",
                "It summarises long-term access to nutrition, sanitation and health services",
                "It can be more useful than GDP in open economies with strong income flows",
                "It highlights daily disadvantages that shape quality of life"
            ],
            answer: 2,
            explain: "It can be more useful than GDP in open economies with strong income flows. This links to the average income earned by residents, including income from overseas and excluding income sent abroad."
        },

        {
            id: "g-mcq-138", topic: "wellbeing-measures",
            q: "Which statement best defines life expectancy?",
            options: [
                "The average number of years a newborn is expected to live if current health conditions continue",
                "Indicators such as literacy, mean years of schooling and expected years of schooling",
                "A measure that tracks overlapping deprivations in health, education and living standards",
                "Broader tools that include housing, jobs, environment, safety and self-reported satisfaction"
            ],
            answer: 0,
            explain: "Life expectancy means the average number of years a newborn is expected to live if current health conditions continue. It matters because it summarises long-term access to nutrition, sanitation and health services."
        },

        {
            id: "g-mcq-139", topic: "wellbeing-measures",
            q: "Which scenario best shows life expectancy in action?",
            options: [
                "A teacher ranks countries using one score that includes schooling, health and GNI per person",
                "A population with low preventable disease and strong health care usually records higher life expectancy",
                "Two countries have similar average income but one has a much higher Gini because wealth is concentrated",
                "A report divides total national production by population to show average output per person"
            ],
            answer: 1,
            explain: "The best example is a population with low preventable disease and strong health care usually records higher life expectancy. Geographers use this idea to compare health outcomes between places."
        },

        {
            id: "g-mcq-140", topic: "wellbeing-measures",
            q: "Why do geographers use life expectancy when studying wellbeing data?",
            options: [
                "Identify poverty that income figures can miss",
                "Compare development with a broader lens than money alone",
                "Compare health outcomes between places",
                "Estimate the size of an economy relative to its population"
            ],
            answer: 2,
            explain: "Geographers use life expectancy to compare health outcomes between places. It summarises long-term access to nutrition, sanitation and health services."
        },

        {
            id: "g-mcq-141", topic: "wellbeing-measures",
            q: "Which note about life expectancy is MOST accurate?",
            options: [
                "It can be more useful than GDP in open economies with strong income flows",
                "Education affects future income, health and civic participation",
                "They remind geographers that wellbeing is broader than production and wages",
                "It summarises long-term access to nutrition, sanitation and health services"
            ],
            answer: 3,
            explain: "It summarises long-term access to nutrition, sanitation and health services. This links to the average number of years a newborn is expected to live if current health conditions continue."
        },

        {
            id: "g-mcq-142", topic: "wellbeing-measures",
            q: "Which statement best defines schooling measures?",
            options: [
                "A measure that tracks overlapping deprivations in health, education and living standards",
                "Indicators such as literacy, mean years of schooling and expected years of schooling",
                "Broader tools that include housing, jobs, environment, safety and self-reported satisfaction",
                "A composite measure combining life expectancy, education and income to compare human development"
            ],
            answer: 1,
            explain: "Schooling measures means indicators such as literacy, mean years of schooling and expected years of schooling. It matters because education affects future income, health and civic participation."
        },

        {
            id: "g-mcq-143", topic: "wellbeing-measures",
            q: "Which scenario best shows schooling measures in action?",
            options: [
                "Two countries have similar average income but one has a much higher Gini because wealth is concentrated",
                "A report divides total national production by population to show average output per person",
                "A country with high literacy and long time spent in school usually scores better on education measures",
                "A country with many citizens working overseas records income flowing back to residents"
            ],
            answer: 2,
            explain: "The best example is a country with high literacy and long time spent in school usually scores better on education measures. Geographers use this idea to show the depth and reach of education in a society."
        },

        {
            id: "g-mcq-144", topic: "wellbeing-measures",
            q: "Why do geographers use schooling measures when studying wellbeing data?",
            options: [
                "Bring quality-of-life dimensions into a single discussion",
                "Show whether national prosperity is shared fairly",
                "Show how much income residents actually receive",
                "Show the depth and reach of education in a society"
            ],
            answer: 3,
            explain: "Geographers use schooling measures to show the depth and reach of education in a society. Education affects future income, health and civic participation."
        },

        {
            id: "g-mcq-145", topic: "wellbeing-measures",
            q: "Which note about schooling measures is MOST accurate?",
            options: [
                "Education affects future income, health and civic participation",
                "It summarises long-term access to nutrition, sanitation and health services",
                "It highlights daily disadvantages that shape quality of life",
                "It gives a clearer overview than a single economic statistic"
            ],
            answer: 0,
            explain: "Education affects future income, health and civic participation. This links to indicators such as literacy, mean years of schooling and expected years of schooling."
        },

        {
            id: "g-mcq-146", topic: "wellbeing-measures",
            q: "Which statement best defines the Multidimensional Poverty Index?",
            options: [
                "Broader tools that include housing, jobs, environment, safety and self-reported satisfaction",
                "A composite measure combining life expectancy, education and income to compare human development",
                "A measure that tracks overlapping deprivations in health, education and living standards",
                "A measure of inequality showing how evenly income or wealth is shared within a country"
            ],
            answer: 2,
            explain: "The Multidimensional Poverty Index means a measure that tracks overlapping deprivations in health, education and living standards. It matters because it highlights daily disadvantages that shape quality of life."
        },

        {
            id: "g-mcq-147", topic: "wellbeing-measures",
            q: "Which scenario best shows the Multidimensional Poverty Index in action?",
            options: [
                "A report divides total national production by population to show average output per person",
                "A country with many citizens working overseas records income flowing back to residents",
                "A population with low preventable disease and strong health care usually records higher life expectancy",
                "A household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel"
            ],
            answer: 3,
            explain: "The best example is a household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel. Geographers use this idea to identify poverty that income figures can miss."
        },

        {
            id: "g-mcq-148", topic: "wellbeing-measures",
            q: "Why do geographers use the Multidimensional Poverty Index when studying wellbeing data?",
            options: [
                "Identify poverty that income figures can miss",
                "Compare development with a broader lens than money alone",
                "Estimate the size of an economy relative to its population",
                "Compare health outcomes between places"
            ],
            answer: 0,
            explain: "Geographers use the Multidimensional Poverty Index to identify poverty that income figures can miss. It highlights daily disadvantages that shape quality of life."
        },

        {
            id: "g-mcq-149", topic: "wellbeing-measures",
            q: "Which note about the Multidimensional Poverty Index is MOST accurate?",
            options: [
                "Education affects future income, health and civic participation",
                "It highlights daily disadvantages that shape quality of life",
                "They remind geographers that wellbeing is broader than production and wages",
                "Inequality changes how useful an average income figure really is"
            ],
            answer: 1,
            explain: "It highlights daily disadvantages that shape quality of life. This links to a measure that tracks overlapping deprivations in health, education and living standards."
        },

        {
            id: "g-mcq-150", topic: "wellbeing-measures",
            q: "Which statement best defines the Better Life Index and wellbeing surveys?",
            options: [
                "A composite measure combining life expectancy, education and income to compare human development",
                "A measure of inequality showing how evenly income or wealth is shared within a country",
                "The average economic output produced per person in a country",
                "Broader tools that include housing, jobs, environment, safety and self-reported satisfaction"
            ],
            answer: 3,
            explain: "The Better Life Index and wellbeing surveys means broader tools that include housing, jobs, environment, safety and self-reported satisfaction. It matters because they remind geographers that wellbeing is broader than production and wages."
        },

        {
            id: "g-mcq-151", topic: "wellbeing-measures",
            q: "Which scenario best shows the Better Life Index and wellbeing surveys in action?",
            options: [
                "A comparison of countries includes work-life balance, civic engagement and how safe people feel",
                "A country with many citizens working overseas records income flowing back to residents",
                "A population with low preventable disease and strong health care usually records higher life expectancy",
                "A country with high literacy and long time spent in school usually scores better on education measures"
            ],
            answer: 0,
            explain: "The best example is a comparison of countries includes work-life balance, civic engagement and how safe people feel. Geographers use this idea to bring quality-of-life dimensions into a single discussion."
        },

        {
            id: "g-mcq-152", topic: "wellbeing-measures",
            q: "Why do geographers use the Better Life Index and wellbeing surveys when studying wellbeing data?",
            options: [
                "Show whether national prosperity is shared fairly",
                "Bring quality-of-life dimensions into a single discussion",
                "Show how much income residents actually receive",
                "Show the depth and reach of education in a society"
            ],
            answer: 1,
            explain: "Geographers use the Better Life Index and wellbeing surveys to bring quality-of-life dimensions into a single discussion. They remind geographers that wellbeing is broader than production and wages."
        },


        /* ===== Spatial variations in wellbeing ===== */
        {
            id: "g-mcq-153", topic: "wellbeing-spatial",
            q: "Which statement best defines the global development gap?",
            options: [
                "The uneven distribution of wellbeing between high-development and low-development places",
                "The long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution",
                "Political instability that disrupts services, investment, safety and economic activity",
                "Exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt"
            ],
            answer: 0,
            explain: "The global development gap means the uneven distribution of wellbeing between high-development and low-development places. It matters because it helps geographers compare regions and ask why gaps persist."
        },

        {
            id: "g-mcq-154", topic: "wellbeing-spatial",
            q: "Which scenario best shows the global development gap in action?",
            options: [
                "An isolated settlement without all-weather roads struggles to access health care and markets",
                "Countries in Northern Europe record very high HDI while many conflict-affected states remain much lower",
                "A capital city may have universities and hospitals while distant villages have limited services",
                "A worker moves overseas, sends money home and helps relatives pay school fees and health costs"
            ],
            answer: 1,
            explain: "The best example is countries in Northern Europe record very high HDI while many conflict-affected states remain much lower. Geographers use this idea to describe broad spatial patterns in development."
        },

        {
            id: "g-mcq-155", topic: "wellbeing-spatial",
            q: "Why do geographers use the global development gap when studying global wellbeing patterns?",
            options: [
                "Account for sudden or ongoing declines in wellbeing",
                "Show how basic services influence quality of life",
                "Describe broad spatial patterns in development",
                "Explain how global connections can shift local living standards"
            ],
            answer: 2,
            explain: "Geographers use the global development gap to describe broad spatial patterns in development. It helps geographers compare regions and ask why gaps persist."
        },

        {
            id: "g-mcq-156", topic: "wellbeing-spatial",
            q: "Which note about the global development gap is MOST accurate?",
            options: [
                "Inequality can leave many people excluded even when a country appears wealthy",
                "Historical structures can still shape present-day wellbeing",
                "Climate pressures often hit places with the least resources to respond",
                "It helps geographers compare regions and ask why gaps persist"
            ],
            answer: 3,
            explain: "It helps geographers compare regions and ask why gaps persist. This links to the uneven distribution of wellbeing between high-development and low-development places."
        },

        {
            id: "g-mcq-157", topic: "wellbeing-spatial",
            q: "Which statement best defines colonial legacy?",
            options: [
                "Political instability that disrupts services, investment, safety and economic activity",
                "The long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution",
                "Exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt",
                "The availability of roads, power, clean water, hospitals and schools"
            ],
            answer: 1,
            explain: "Colonial legacy means the long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution. It matters because historical structures can still shape present-day wellbeing."
        },

        {
            id: "g-mcq-158", topic: "wellbeing-spatial",
            q: "Which scenario best shows colonial legacy in action?",
            options: [
                "A capital city may have universities and hospitals while distant villages have limited services",
                "A worker moves overseas, sends money home and helps relatives pay school fees and health costs",
                "Former colonies that exported raw materials often entered independence with weaker industry and infrastructure",
                "A resource-rich country has luxury districts and informal settlements existing side by side"
            ],
            answer: 2,
            explain: "The best example is former colonies that exported raw materials often entered independence with weaker industry and infrastructure. Geographers use this idea to explain why some countries started from an unequal position."
        },

        {
            id: "g-mcq-159", topic: "wellbeing-spatial",
            q: "Why do geographers use colonial legacy when studying global wellbeing patterns?",
            options: [
                "Link environmental risk to human wellbeing patterns",
                "Compare internal patterns rather than only comparing countries",
                "Avoid treating one national average as the whole story",
                "Explain why some countries started from an unequal position"
            ],
            answer: 3,
            explain: "Geographers use colonial legacy to explain why some countries started from an unequal position. Historical structures can still shape present-day wellbeing."
        },

        {
            id: "g-mcq-160", topic: "wellbeing-spatial",
            q: "Which note about colonial legacy is MOST accurate?",
            options: [
                "Historical structures can still shape present-day wellbeing",
                "It helps geographers compare regions and ask why gaps persist",
                "When governance is weak it is harder to deliver health, education and jobs",
                "Infrastructure shapes opportunity, safety and resilience"
            ],
            answer: 0,
            explain: "Historical structures can still shape present-day wellbeing. This links to the long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution."
        },

        {
            id: "g-mcq-161", topic: "wellbeing-spatial",
            q: "Which statement best defines conflict and fragile governance?",
            options: [
                "Exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt",
                "The availability of roads, power, clean water, hospitals and schools",
                "Political instability that disrupts services, investment, safety and economic activity",
                "Differences in wellbeing between cities and remote or rural areas within the same country"
            ],
            answer: 2,
            explain: "Conflict and fragile governance means political instability that disrupts services, investment, safety and economic activity. It matters because when governance is weak it is harder to deliver health, education and jobs."
        },

        {
            id: "g-mcq-162", topic: "wellbeing-spatial",
            q: "Which scenario best shows conflict and fragile governance in action?",
            options: [
                "A worker moves overseas, sends money home and helps relatives pay school fees and health costs",
                "A resource-rich country has luxury districts and informal settlements existing side by side",
                "Countries in Northern Europe record very high HDI while many conflict-affected states remain much lower",
                "War damages clinics, schools, transport and trust in institutions"
            ],
            answer: 3,
            explain: "The best example is war damages clinics, schools, transport and trust in institutions. Geographers use this idea to account for sudden or ongoing declines in wellbeing."
        },

        {
            id: "g-mcq-163", topic: "wellbeing-spatial",
            q: "Why do geographers use conflict and fragile governance when studying global wellbeing patterns?",
            options: [
                "Account for sudden or ongoing declines in wellbeing",
                "Show how basic services influence quality of life",
                "Explain how global connections can shift local living standards",
                "Describe broad spatial patterns in development"
            ],
            answer: 0,
            explain: "Geographers use conflict and fragile governance to account for sudden or ongoing declines in wellbeing. When governance is weak it is harder to deliver health, education and jobs."
        },

        {
            id: "g-mcq-164", topic: "wellbeing-spatial",
            q: "Which note about conflict and fragile governance is MOST accurate?",
            options: [
                "Historical structures can still shape present-day wellbeing",
                "When governance is weak it is harder to deliver health, education and jobs",
                "Climate pressures often hit places with the least resources to respond",
                "Within-country variation can be as important as international variation"
            ],
            answer: 1,
            explain: "When governance is weak it is harder to deliver health, education and jobs. This links to political instability that disrupts services, investment, safety and economic activity."
        },

        {
            id: "g-mcq-165", topic: "wellbeing-spatial",
            q: "Which statement best defines climate vulnerability?",
            options: [
                "The availability of roads, power, clean water, hospitals and schools",
                "Differences in wellbeing between cities and remote or rural areas within the same country",
                "The movement of people and the money they send home, which can change wellbeing in both sending and receiving places",
                "Exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt"
            ],
            answer: 3,
            explain: "Climate vulnerability means exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt. It matters because climate pressures often hit places with the least resources to respond."
        },

        {
            id: "g-mcq-166", topic: "wellbeing-spatial",
            q: "Which scenario best shows climate vulnerability in action?",
            options: [
                "Small island states face rising seas while dry regions struggle with repeated crop failure",
                "A resource-rich country has luxury districts and informal settlements existing side by side",
                "Countries in Northern Europe record very high HDI while many conflict-affected states remain much lower",
                "Former colonies that exported raw materials often entered independence with weaker industry and infrastructure"
            ],
            answer: 0,
            explain: "The best example is small island states face rising seas while dry regions struggle with repeated crop failure. Geographers use this idea to link environmental risk to human wellbeing patterns."
        },

        {
            id: "g-mcq-167", topic: "wellbeing-spatial",
            q: "Why do geographers use climate vulnerability when studying global wellbeing patterns?",
            options: [
                "Compare internal patterns rather than only comparing countries",
                "Link environmental risk to human wellbeing patterns",
                "Avoid treating one national average as the whole story",
                "Explain why some countries started from an unequal position"
            ],
            answer: 1,
            explain: "Geographers use climate vulnerability to link environmental risk to human wellbeing patterns. Climate pressures often hit places with the least resources to respond."
        },

        {
            id: "g-mcq-168", topic: "wellbeing-spatial",
            q: "Which note about climate vulnerability is MOST accurate?",
            options: [
                "When governance is weak it is harder to deliver health, education and jobs",
                "Infrastructure shapes opportunity, safety and resilience",
                "Climate pressures often hit places with the least resources to respond",
                "Migration can lift wellbeing but may also drain skilled workers from poorer regions"
            ],
            answer: 2,
            explain: "Climate pressures often hit places with the least resources to respond. This links to exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt."
        },

        {
            id: "g-mcq-169", topic: "wellbeing-spatial",
            q: "Which statement best defines access to infrastructure and services?",
            options: [
                "The availability of roads, power, clean water, hospitals and schools",
                "Differences in wellbeing between cities and remote or rural areas within the same country",
                "The movement of people and the money they send home, which can change wellbeing in both sending and receiving places",
                "The uneven sharing of wealth, services and opportunity inside a single nation"
            ],
            answer: 0,
            explain: "Access to infrastructure and services means the availability of roads, power, clean water, hospitals and schools. It matters because infrastructure shapes opportunity, safety and resilience."
        },

        {
            id: "g-mcq-170", topic: "wellbeing-spatial",
            q: "Which scenario best shows access to infrastructure and services in action?",
            options: [
                "Countries in Northern Europe record very high HDI while many conflict-affected states remain much lower",
                "An isolated settlement without all-weather roads struggles to access health care and markets",
                "Former colonies that exported raw materials often entered independence with weaker industry and infrastructure",
                "War damages clinics, schools, transport and trust in institutions"
            ],
            answer: 1,
            explain: "The best example is an isolated settlement without all-weather roads struggles to access health care and markets. Geographers use this idea to show how basic services influence quality of life."
        },

        {
            id: "g-mcq-171", topic: "wellbeing-spatial",
            q: "Why do geographers use access to infrastructure and services when studying global wellbeing patterns?",
            options: [
                "Explain how global connections can shift local living standards",
                "Describe broad spatial patterns in development",
                "Show how basic services influence quality of life",
                "Account for sudden or ongoing declines in wellbeing"
            ],
            answer: 2,
            explain: "Geographers use access to infrastructure and services to show how basic services influence quality of life. Infrastructure shapes opportunity, safety and resilience."
        },

        {
            id: "g-mcq-172", topic: "wellbeing-spatial",
            q: "Which note about access to infrastructure and services is MOST accurate?",
            options: [
                "Climate pressures often hit places with the least resources to respond",
                "Within-country variation can be as important as international variation",
                "Inequality can leave many people excluded even when a country appears wealthy",
                "Infrastructure shapes opportunity, safety and resilience"
            ],
            answer: 3,
            explain: "Infrastructure shapes opportunity, safety and resilience. This links to the availability of roads, power, clean water, hospitals and schools."
        },

        {
            id: "g-mcq-173", topic: "wellbeing-spatial",
            q: "Which statement best defines urban-rural variation?",
            options: [
                "The movement of people and the money they send home, which can change wellbeing in both sending and receiving places",
                "Differences in wellbeing between cities and remote or rural areas within the same country",
                "The uneven sharing of wealth, services and opportunity inside a single nation",
                "The uneven distribution of wellbeing between high-development and low-development places"
            ],
            answer: 1,
            explain: "Urban-rural variation means differences in wellbeing between cities and remote or rural areas within the same country. It matters because within-country variation can be as important as international variation."
        },

        {
            id: "g-mcq-174", topic: "wellbeing-spatial",
            q: "Which scenario best shows urban-rural variation in action?",
            options: [
                "Former colonies that exported raw materials often entered independence with weaker industry and infrastructure",
                "War damages clinics, schools, transport and trust in institutions",
                "A capital city may have universities and hospitals while distant villages have limited services",
                "Small island states face rising seas while dry regions struggle with repeated crop failure"
            ],
            answer: 2,
            explain: "The best example is a capital city may have universities and hospitals while distant villages have limited services. Geographers use this idea to compare internal patterns rather than only comparing countries."
        },

        {
            id: "g-mcq-175", topic: "wellbeing-spatial",
            q: "Why do geographers use urban-rural variation when studying global wellbeing patterns?",
            options: [
                "Avoid treating one national average as the whole story",
                "Explain why some countries started from an unequal position",
                "Link environmental risk to human wellbeing patterns",
                "Compare internal patterns rather than only comparing countries"
            ],
            answer: 3,
            explain: "Geographers use urban-rural variation to compare internal patterns rather than only comparing countries. Within-country variation can be as important as international variation."
        },

        {
            id: "g-mcq-176", topic: "wellbeing-spatial",
            q: "Which note about urban-rural variation is MOST accurate?",
            options: [
                "Within-country variation can be as important as international variation",
                "Infrastructure shapes opportunity, safety and resilience",
                "Migration can lift wellbeing but may also drain skilled workers from poorer regions",
                "It helps geographers compare regions and ask why gaps persist"
            ],
            answer: 0,
            explain: "Within-country variation can be as important as international variation. This links to differences in wellbeing between cities and remote or rural areas within the same country."
        },

        {
            id: "g-mcq-177", topic: "wellbeing-spatial",
            q: "Which statement best defines migration and remittances?",
            options: [
                "The uneven sharing of wealth, services and opportunity inside a single nation",
                "The uneven distribution of wellbeing between high-development and low-development places",
                "The movement of people and the money they send home, which can change wellbeing in both sending and receiving places",
                "The long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution"
            ],
            answer: 2,
            explain: "Migration and remittances means the movement of people and the money they send home, which can change wellbeing in both sending and receiving places. It matters because migration can lift wellbeing but may also drain skilled workers from poorer regions."
        },

        {
            id: "g-mcq-178", topic: "wellbeing-spatial",
            q: "Which scenario best shows migration and remittances in action?",
            options: [
                "War damages clinics, schools, transport and trust in institutions",
                "Small island states face rising seas while dry regions struggle with repeated crop failure",
                "An isolated settlement without all-weather roads struggles to access health care and markets",
                "A worker moves overseas, sends money home and helps relatives pay school fees and health costs"
            ],
            answer: 3,
            explain: "The best example is a worker moves overseas, sends money home and helps relatives pay school fees and health costs. Geographers use this idea to explain how global connections can shift local living standards."
        },

        {
            id: "g-mcq-179", topic: "wellbeing-spatial",
            q: "Why do geographers use migration and remittances when studying global wellbeing patterns?",
            options: [
                "Explain how global connections can shift local living standards",
                "Describe broad spatial patterns in development",
                "Account for sudden or ongoing declines in wellbeing",
                "Show how basic services influence quality of life"
            ],
            answer: 0,
            explain: "Geographers use migration and remittances to explain how global connections can shift local living standards. Migration can lift wellbeing but may also drain skilled workers from poorer regions."
        },

        {
            id: "g-mcq-180", topic: "wellbeing-spatial",
            q: "Which note about migration and remittances is MOST accurate?",
            options: [
                "Within-country variation can be as important as international variation",
                "Migration can lift wellbeing but may also drain skilled workers from poorer regions",
                "Inequality can leave many people excluded even when a country appears wealthy",
                "Historical structures can still shape present-day wellbeing"
            ],
            answer: 1,
            explain: "Migration can lift wellbeing but may also drain skilled workers from poorer regions. This links to the movement of people and the money they send home, which can change wellbeing in both sending and receiving places."
        },

        {
            id: "g-mcq-181", topic: "wellbeing-spatial",
            q: "Which statement best defines within-country inequality?",
            options: [
                "The uneven distribution of wellbeing between high-development and low-development places",
                "The long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution",
                "Political instability that disrupts services, investment, safety and economic activity",
                "The uneven sharing of wealth, services and opportunity inside a single nation"
            ],
            answer: 3,
            explain: "Within-country inequality means the uneven sharing of wealth, services and opportunity inside a single nation. It matters because inequality can leave many people excluded even when a country appears wealthy."
        },

        {
            id: "g-mcq-182", topic: "wellbeing-spatial",
            q: "Which scenario best shows within-country inequality in action?",
            options: [
                "A resource-rich country has luxury districts and informal settlements existing side by side",
                "Small island states face rising seas while dry regions struggle with repeated crop failure",
                "An isolated settlement without all-weather roads struggles to access health care and markets",
                "A capital city may have universities and hospitals while distant villages have limited services"
            ],
            answer: 0,
            explain: "The best example is a resource-rich country has luxury districts and informal settlements existing side by side. Geographers use this idea to avoid treating one national average as the whole story."
        },

        {
            id: "g-mcq-183", topic: "wellbeing-spatial",
            q: "Why do geographers use within-country inequality when studying global wellbeing patterns?",
            options: [
                "Explain why some countries started from an unequal position",
                "Avoid treating one national average as the whole story",
                "Link environmental risk to human wellbeing patterns",
                "Compare internal patterns rather than only comparing countries"
            ],
            answer: 1,
            explain: "Geographers use within-country inequality to avoid treating one national average as the whole story. Inequality can leave many people excluded even when a country appears wealthy."
        },

        {
            id: "g-mcq-184", topic: "wellbeing-spatial",
            q: "Which note about within-country inequality is MOST accurate?",
            options: [
                "Migration can lift wellbeing but may also drain skilled workers from poorer regions",
                "It helps geographers compare regions and ask why gaps persist",
                "Inequality can leave many people excluded even when a country appears wealthy",
                "When governance is weak it is harder to deliver health, education and jobs"
            ],
            answer: 2,
            explain: "Inequality can leave many people excluded even when a country appears wealthy. This links to the uneven sharing of wealth, services and opportunity inside a single nation."
        },


        /* ===== Wellbeing in Australia ===== */
        {
            id: "g-mcq-185", topic: "wellbeing-australia",
            q: "Which statement best defines Closing the Gap?",
            options: [
                "The national effort to reduce inequalities between Aboriginal and Torres Strait Islander Peoples and non-Indigenous Australians",
                "Distance from major centres and services that can limit access to care, education, jobs and transport",
                "ABS indexes that rank areas by relative socio-economic advantage and disadvantage",
                "The relationship between housing costs and household income"
            ],
            answer: 0,
            explain: "Closing the Gap means the national effort to reduce inequalities between Aboriginal and Torres Strait Islander Peoples and non-Indigenous Australians. It matters because it recognises that wellbeing includes equality, self-determination and access to services."
        },

        {
            id: "g-mcq-186", topic: "wellbeing-australia",
            q: "Which scenario best shows Closing the Gap in action?",
            options: [
                "Casual hours drop suddenly and a household struggles to meet bills each month",
                "Targets track health, education, justice, housing and employment outcomes across Australia",
                "Students in a regional area travel long distances for specialist courses and medical care",
                "Community-led cultural programs strengthen belonging and support social and emotional wellbeing"
            ],
            answer: 1,
            explain: "The best example is targets track health, education, justice, housing and employment outcomes across Australia. Geographers use this idea to focus attention on long-standing disparities within Australia."
        },

        {
            id: "g-mcq-187", topic: "wellbeing-australia",
            q: "Why do geographers use Closing the Gap when studying Australian wellbeing?",
            options: [
                "Compare wellbeing patterns between local areas",
                "Connect local economies to household wellbeing",
                "Focus attention on long-standing disparities within Australia",
                "Show that wellbeing is not only about income or infrastructure"
            ],
            answer: 2,
            explain: "Geographers use Closing the Gap to focus attention on long-standing disparities within Australia. It recognises that wellbeing includes equality, self-determination and access to services."
        },

        {
            id: "g-mcq-188", topic: "wellbeing-australia",
            q: "Which note about Closing the Gap is MOST accurate?",
            options: [
                "Connectivity now affects education, employment and social inclusion",
                "Distance raises costs and narrows opportunities for many households",
                "Secure affordable housing supports health, safety and participation",
                "It recognises that wellbeing includes equality, self-determination and access to services"
            ],
            answer: 3,
            explain: "It recognises that wellbeing includes equality, self-determination and access to services. This links to the national effort to reduce inequalities between Aboriginal and Torres Strait Islander Peoples and non-Indigenous Australians."
        },

        {
            id: "g-mcq-189", topic: "wellbeing-australia",
            q: "Which statement best defines remoteness?",
            options: [
                "ABS indexes that rank areas by relative socio-economic advantage and disadvantage",
                "Distance from major centres and services that can limit access to care, education, jobs and transport",
                "The relationship between housing costs and household income",
                "The stability and adequacy of work and wages available to people"
            ],
            answer: 1,
            explain: "Remoteness means distance from major centres and services that can limit access to care, education, jobs and transport. It matters because distance raises costs and narrows opportunities for many households."
        },

        {
            id: "g-mcq-190", topic: "wellbeing-australia",
            q: "Which scenario best shows remoteness in action?",
            options: [
                "Students in a regional area travel long distances for specialist courses and medical care",
                "Community-led cultural programs strengthen belonging and support social and emotional wellbeing",
                "A remote community waits longer for specialist health visits and pays more for groceries",
                "Limited public transport and weak internet make it harder to reach study, telehealth and work"
            ],
            answer: 2,
            explain: "The best example is a remote community waits longer for specialist health visits and pays more for groceries. Geographers use this idea to explain why location affects wellbeing in Australia."
        },

        {
            id: "g-mcq-191", topic: "wellbeing-australia",
            q: "Why do geographers use remoteness when studying Australian wellbeing?",
            options: [
                "Show how cost of living shapes daily wellbeing",
                "Explain why service distribution matters across Australia",
                "Investigate modern access to opportunity",
                "Explain why location affects wellbeing in Australia"
            ],
            answer: 3,
            explain: "Geographers use remoteness to explain why location affects wellbeing in Australia. Distance raises costs and narrows opportunities for many households."
        },

        {
            id: "g-mcq-192", topic: "wellbeing-australia",
            q: "Which note about remoteness is MOST accurate?",
            options: [
                "Distance raises costs and narrows opportunities for many households",
                "It recognises that wellbeing includes equality, self-determination and access to services",
                "It helps governments target support to places with higher need",
                "Stable incomes improve choice, confidence and long-term planning"
            ],
            answer: 0,
            explain: "Distance raises costs and narrows opportunities for many households. This links to distance from major centres and services that can limit access to care, education, jobs and transport."
        },

        {
            id: "g-mcq-193", topic: "wellbeing-australia",
            q: "Which statement best defines SEIFA?",
            options: [
                "The relationship between housing costs and household income",
                "The stability and adequacy of work and wages available to people",
                "ABS indexes that rank areas by relative socio-economic advantage and disadvantage",
                "The availability and quality of clinics, hospitals, schools and training"
            ],
            answer: 2,
            explain: "SEIFA means ABS indexes that rank areas by relative socio-economic advantage and disadvantage. It matters because it helps governments target support to places with higher need."
        },

        {
            id: "g-mcq-194", topic: "wellbeing-australia",
            q: "Which scenario best shows SEIFA in action?",
            options: [
                "Community-led cultural programs strengthen belonging and support social and emotional wellbeing",
                "Limited public transport and weak internet make it harder to reach study, telehealth and work",
                "Targets track health, education, justice, housing and employment outcomes across Australia",
                "A planner maps suburbs by SEIFA to identify where disadvantage is concentrated"
            ],
            answer: 3,
            explain: "The best example is a planner maps suburbs by SEIFA to identify where disadvantage is concentrated. Geographers use this idea to compare wellbeing patterns between local areas."
        },

        {
            id: "g-mcq-195", topic: "wellbeing-australia",
            q: "Why do geographers use SEIFA when studying Australian wellbeing?",
            options: [
                "Compare wellbeing patterns between local areas",
                "Connect local economies to household wellbeing",
                "Show that wellbeing is not only about income or infrastructure",
                "Focus attention on long-standing disparities within Australia"
            ],
            answer: 0,
            explain: "Geographers use SEIFA to compare wellbeing patterns between local areas. It helps governments target support to places with higher need."
        },

        {
            id: "g-mcq-196", topic: "wellbeing-australia",
            q: "Which note about SEIFA is MOST accurate?",
            options: [
                "Distance raises costs and narrows opportunities for many households",
                "It helps governments target support to places with higher need",
                "Secure affordable housing supports health, safety and participation",
                "Good services improve health, skills and future opportunity"
            ],
            answer: 1,
            explain: "It helps governments target support to places with higher need. This links to ABS indexes that rank areas by relative socio-economic advantage and disadvantage."
        },

        {
            id: "g-mcq-197", topic: "wellbeing-australia",
            q: "Which statement best defines housing affordability?",
            options: [
                "The stability and adequacy of work and wages available to people",
                "The availability and quality of clinics, hospitals, schools and training",
                "The importance of identity, language, community and connection to Country for Aboriginal wellbeing",
                "The relationship between housing costs and household income"
            ],
            answer: 3,
            explain: "Housing affordability means the relationship between housing costs and household income. It matters because secure affordable housing supports health, safety and participation."
        },

        {
            id: "g-mcq-198", topic: "wellbeing-australia",
            q: "Which scenario best shows housing affordability in action?",
            options: [
                "A family spends so much on rent that it cuts back on food, transport and school activities",
                "Limited public transport and weak internet make it harder to reach study, telehealth and work",
                "Targets track health, education, justice, housing and employment outcomes across Australia",
                "A remote community waits longer for specialist health visits and pays more for groceries"
            ],
            answer: 0,
            explain: "The best example is a family spends so much on rent that it cuts back on food, transport and school activities. Geographers use this idea to show how cost of living shapes daily wellbeing."
        },

        {
            id: "g-mcq-199", topic: "wellbeing-australia",
            q: "Why do geographers use housing affordability when studying Australian wellbeing?",
            options: [
                "Explain why service distribution matters across Australia",
                "Show how cost of living shapes daily wellbeing",
                "Investigate modern access to opportunity",
                "Explain why location affects wellbeing in Australia"
            ],
            answer: 1,
            explain: "Geographers use housing affordability to show how cost of living shapes daily wellbeing. Secure affordable housing supports health, safety and participation."
        },

        {
            id: "g-mcq-200", topic: "wellbeing-australia",
            q: "Which note about housing affordability is MOST accurate?",
            options: [
                "It helps governments target support to places with higher need",
                "Stable incomes improve choice, confidence and long-term planning",
                "Secure affordable housing supports health, safety and participation",
                "Respecting culture and self-determination improves outcomes and dignity"
            ],
            answer: 2,
            explain: "Secure affordable housing supports health, safety and participation. This links to the relationship between housing costs and household income."
        },

        {
            id: "g-mcq-201", topic: "wellbeing-australia",
            q: "Which statement best defines employment and income security?",
            options: [
                "The stability and adequacy of work and wages available to people",
                "The availability and quality of clinics, hospitals, schools and training",
                "The importance of identity, language, community and connection to Country for Aboriginal wellbeing",
                "How easily people can move around and access online services and information"
            ],
            answer: 0,
            explain: "Employment and income security means the stability and adequacy of work and wages available to people. It matters because stable incomes improve choice, confidence and long-term planning."
        },

        {
            id: "g-mcq-202", topic: "wellbeing-australia",
            q: "Which scenario best shows employment and income security in action?",
            options: [
                "Targets track health, education, justice, housing and employment outcomes across Australia",
                "Casual hours drop suddenly and a household struggles to meet bills each month",
                "A remote community waits longer for specialist health visits and pays more for groceries",
                "A planner maps suburbs by SEIFA to identify where disadvantage is concentrated"
            ],
            answer: 1,
            explain: "The best example is casual hours drop suddenly and a household struggles to meet bills each month. Geographers use this idea to connect local economies to household wellbeing."
        },

        {
            id: "g-mcq-203", topic: "wellbeing-australia",
            q: "Why do geographers use employment and income security when studying Australian wellbeing?",
            options: [
                "Show that wellbeing is not only about income or infrastructure",
                "Focus attention on long-standing disparities within Australia",
                "Connect local economies to household wellbeing",
                "Compare wellbeing patterns between local areas"
            ],
            answer: 2,
            explain: "Geographers use employment and income security to connect local economies to household wellbeing. Stable incomes improve choice, confidence and long-term planning."
        },

        {
            id: "g-mcq-204", topic: "wellbeing-australia",
            q: "Which note about employment and income security is MOST accurate?",
            options: [
                "Secure affordable housing supports health, safety and participation",
                "Good services improve health, skills and future opportunity",
                "Connectivity now affects education, employment and social inclusion",
                "Stable incomes improve choice, confidence and long-term planning"
            ],
            answer: 3,
            explain: "Stable incomes improve choice, confidence and long-term planning. This links to the stability and adequacy of work and wages available to people."
        },

        {
            id: "g-mcq-205", topic: "wellbeing-australia",
            q: "Which statement best defines access to health care and education?",
            options: [
                "The importance of identity, language, community and connection to Country for Aboriginal wellbeing",
                "The availability and quality of clinics, hospitals, schools and training",
                "How easily people can move around and access online services and information",
                "The national effort to reduce inequalities between Aboriginal and Torres Strait Islander Peoples and non-Indigenous Australians"
            ],
            answer: 1,
            explain: "Access to health care and education means the availability and quality of clinics, hospitals, schools and training. It matters because good services improve health, skills and future opportunity."
        },

        {
            id: "g-mcq-206", topic: "wellbeing-australia",
            q: "Which scenario best shows access to health care and education in action?",
            options: [
                "A remote community waits longer for specialist health visits and pays more for groceries",
                "A planner maps suburbs by SEIFA to identify where disadvantage is concentrated",
                "Students in a regional area travel long distances for specialist courses and medical care",
                "A family spends so much on rent that it cuts back on food, transport and school activities"
            ],
            answer: 2,
            explain: "The best example is students in a regional area travel long distances for specialist courses and medical care. Geographers use this idea to explain why service distribution matters across Australia."
        },

        {
            id: "g-mcq-207", topic: "wellbeing-australia",
            q: "Why do geographers use access to health care and education when studying Australian wellbeing?",
            options: [
                "Investigate modern access to opportunity",
                "Explain why location affects wellbeing in Australia",
                "Show how cost of living shapes daily wellbeing",
                "Explain why service distribution matters across Australia"
            ],
            answer: 3,
            explain: "Geographers use access to health care and education to explain why service distribution matters across Australia. Good services improve health, skills and future opportunity."
        },

        {
            id: "g-mcq-208", topic: "wellbeing-australia",
            q: "Which note about access to health care and education is MOST accurate?",
            options: [
                "Good services improve health, skills and future opportunity",
                "Stable incomes improve choice, confidence and long-term planning",
                "Respecting culture and self-determination improves outcomes and dignity",
                "It recognises that wellbeing includes equality, self-determination and access to services"
            ],
            answer: 0,
            explain: "Good services improve health, skills and future opportunity. This links to the availability and quality of clinics, hospitals, schools and training."
        },

        {
            id: "g-mcq-209", topic: "wellbeing-australia",
            q: "Which statement best defines cultural connection and Country?",
            options: [
                "How easily people can move around and access online services and information",
                "The national effort to reduce inequalities between Aboriginal and Torres Strait Islander Peoples and non-Indigenous Australians",
                "The importance of identity, language, community and connection to Country for Aboriginal wellbeing",
                "Distance from major centres and services that can limit access to care, education, jobs and transport"
            ],
            answer: 2,
            explain: "Cultural connection and Country means the importance of identity, language, community and connection to Country for Aboriginal wellbeing. It matters because respecting culture and self-determination improves outcomes and dignity."
        },

        {
            id: "g-mcq-210", topic: "wellbeing-australia",
            q: "Which scenario best shows cultural connection and Country in action?",
            options: [
                "A planner maps suburbs by SEIFA to identify where disadvantage is concentrated",
                "A family spends so much on rent that it cuts back on food, transport and school activities",
                "Casual hours drop suddenly and a household struggles to meet bills each month",
                "Community-led cultural programs strengthen belonging and support social and emotional wellbeing"
            ],
            answer: 3,
            explain: "The best example is community-led cultural programs strengthen belonging and support social and emotional wellbeing. Geographers use this idea to show that wellbeing is not only about income or infrastructure."
        },

        {
            id: "g-mcq-211", topic: "wellbeing-australia",
            q: "Why do geographers use cultural connection and Country when studying Australian wellbeing?",
            options: [
                "Show that wellbeing is not only about income or infrastructure",
                "Focus attention on long-standing disparities within Australia",
                "Compare wellbeing patterns between local areas",
                "Connect local economies to household wellbeing"
            ],
            answer: 0,
            explain: "Geographers use cultural connection and Country to show that wellbeing is not only about income or infrastructure. Respecting culture and self-determination improves outcomes and dignity."
        },

        {
            id: "g-mcq-212", topic: "wellbeing-australia",
            q: "Which note about cultural connection and Country is MOST accurate?",
            options: [
                "Good services improve health, skills and future opportunity",
                "Respecting culture and self-determination improves outcomes and dignity",
                "Connectivity now affects education, employment and social inclusion",
                "Distance raises costs and narrows opportunities for many households"
            ],
            answer: 1,
            explain: "Respecting culture and self-determination improves outcomes and dignity. This links to the importance of identity, language, community and connection to Country for Aboriginal wellbeing."
        },

        {
            id: "g-mcq-213", topic: "wellbeing-australia",
            q: "Which statement best defines transport and digital connectivity?",
            options: [
                "The national effort to reduce inequalities between Aboriginal and Torres Strait Islander Peoples and non-Indigenous Australians",
                "Distance from major centres and services that can limit access to care, education, jobs and transport",
                "ABS indexes that rank areas by relative socio-economic advantage and disadvantage",
                "How easily people can move around and access online services and information"
            ],
            answer: 3,
            explain: "Transport and digital connectivity means how easily people can move around and access online services and information. It matters because connectivity now affects education, employment and social inclusion."
        },

        {
            id: "g-mcq-214", topic: "wellbeing-australia",
            q: "Which scenario best shows transport and digital connectivity in action?",
            options: [
                "Limited public transport and weak internet make it harder to reach study, telehealth and work",
                "A family spends so much on rent that it cuts back on food, transport and school activities",
                "Casual hours drop suddenly and a household struggles to meet bills each month",
                "Students in a regional area travel long distances for specialist courses and medical care"
            ],
            answer: 0,
            explain: "The best example is limited public transport and weak internet make it harder to reach study, telehealth and work. Geographers use this idea to investigate modern access to opportunity."
        },

        {
            id: "g-mcq-215", topic: "wellbeing-australia",
            q: "Why do geographers use transport and digital connectivity when studying Australian wellbeing?",
            options: [
                "Explain why location affects wellbeing in Australia",
                "Investigate modern access to opportunity",
                "Show how cost of living shapes daily wellbeing",
                "Explain why service distribution matters across Australia"
            ],
            answer: 1,
            explain: "Geographers use transport and digital connectivity to investigate modern access to opportunity. Connectivity now affects education, employment and social inclusion."
        },

        {
            id: "g-mcq-216", topic: "wellbeing-australia",
            q: "Which note about transport and digital connectivity is MOST accurate?",
            options: [
                "Respecting culture and self-determination improves outcomes and dignity",
                "It recognises that wellbeing includes equality, self-determination and access to services",
                "Connectivity now affects education, employment and social inclusion",
                "It helps governments target support to places with higher need"
            ],
            answer: 2,
            explain: "Connectivity now affects education, employment and social inclusion. This links to how easily people can move around and access online services and information."
        },


        /* ===== Improving wellbeing — strategies ===== */
        {
            id: "g-mcq-217", topic: "wellbeing-strategies",
            q: "Which statement best defines the Sustainable Development Goals?",
            options: [
                "The UN framework of 17 goals linking poverty reduction, health, education, equality and environmental sustainability",
                "Strategies that improve water, sanitation and hygiene in homes, schools and clinics",
                "Programs that prevent disease through immunisation, clinics, education and early treatment",
                "Programs that keep girls in school and remove barriers such as cost, distance or unsafe travel"
            ],
            answer: 0,
            explain: "The Sustainable Development Goals means the UN framework of 17 goals linking poverty reduction, health, education, equality and environmental sustainability. It matters because they connect different dimensions of development instead of treating issues in isolation."
        },

        {
            id: "g-mcq-218", topic: "wellbeing-strategies",
            q: "Which scenario best shows the Sustainable Development Goals in action?",
            options: [
                "A woman starts a small business after receiving a low-value loan and savings support",
                "A country uses SDG targets to guide work on clean water, gender equality and climate action",
                "A family receives regular income support that keeps children in school during drought",
                "Residents help decide where a clinic should be built and how it will operate"
            ],
            answer: 1,
            explain: "The best example is a country uses SDG targets to guide work on clean water, gender equality and climate action. Geographers use this idea to set shared global priorities for improving wellbeing."
        },

        {
            id: "g-mcq-219", topic: "wellbeing-strategies",
            q: "Why do geographers use the Sustainable Development Goals when studying development strategies?",
            options: [
                "Lift wellbeing quickly through better health outcomes",
                "Increase income opportunities at household scale",
                "Set shared global priorities for improving wellbeing",
                "Build ownership and improve long-term success"
            ],
            answer: 2,
            explain: "Geographers use the Sustainable Development Goals to set shared global priorities for improving wellbeing. They connect different dimensions of development instead of treating issues in isolation."
        },

        {
            id: "g-mcq-220", topic: "wellbeing-strategies",
            q: "Which note about the Sustainable Development Goals is MOST accurate?",
            options: [
                "Partnerships are strongest when they support local capacity rather than replace it",
                "Clean water and sanitation create large wellbeing gains for relatively low cost",
                "Education has multiplier effects across families and communities",
                "They connect different dimensions of development instead of treating issues in isolation"
            ],
            answer: 3,
            explain: "They connect different dimensions of development instead of treating issues in isolation. This links to the UN framework of 17 goals linking poverty reduction, health, education, equality and environmental sustainability."
        },

        {
            id: "g-mcq-221", topic: "wellbeing-strategies",
            q: "Which statement best defines WASH programs?",
            options: [
                "Programs that prevent disease through immunisation, clinics, education and early treatment",
                "Strategies that improve water, sanitation and hygiene in homes, schools and clinics",
                "Programs that keep girls in school and remove barriers such as cost, distance or unsafe travel",
                "Small loans and financial services for people who may not have access to formal banking"
            ],
            answer: 1,
            explain: "WASH programs means strategies that improve water, sanitation and hygiene in homes, schools and clinics. It matters because clean water and sanitation create large wellbeing gains for relatively low cost."
        },

        {
            id: "g-mcq-222", topic: "wellbeing-strategies",
            q: "Which scenario best shows WASH programs in action?",
            options: [
                "A family receives regular income support that keeps children in school during drought",
                "Residents help decide where a clinic should be built and how it will operate",
                "A village gains safe water points, toilets and handwashing facilities",
                "DFAT works with a local NGO and community leaders to improve maternal health services"
            ],
            answer: 2,
            explain: "The best example is a village gains safe water points, toilets and handwashing facilities. Geographers use this idea to reduce disease and improve health and attendance at school."
        },

        {
            id: "g-mcq-223", topic: "wellbeing-strategies",
            q: "Why do geographers use WASH programs when studying development strategies?",
            options: [
                "Improve future income, health and gender equality",
                "Protect wellbeing during shocks and reduce extreme poverty",
                "Combine funding, expertise and local knowledge",
                "Reduce disease and improve health and attendance at school"
            ],
            answer: 3,
            explain: "Geographers use WASH programs to reduce disease and improve health and attendance at school. Clean water and sanitation create large wellbeing gains for relatively low cost."
        },

        {
            id: "g-mcq-224", topic: "wellbeing-strategies",
            q: "Which note about WASH programs is MOST accurate?",
            options: [
                "Clean water and sanitation create large wellbeing gains for relatively low cost",
                "They connect different dimensions of development instead of treating issues in isolation",
                "Health improvements support education, work and household stability",
                "It can strengthen independence but works best alongside wider support"
            ],
            answer: 0,
            explain: "Clean water and sanitation create large wellbeing gains for relatively low cost. This links to strategies that improve water, sanitation and hygiene in homes, schools and clinics."
        },

        {
            id: "g-mcq-225", topic: "wellbeing-strategies",
            q: "Which statement best defines vaccination and public-health campaigns?",
            options: [
                "Programs that keep girls in school and remove barriers such as cost, distance or unsafe travel",
                "Small loans and financial services for people who may not have access to formal banking",
                "Programs that prevent disease through immunisation, clinics, education and early treatment",
                "Payments or support programs that help households meet basic needs during hardship"
            ],
            answer: 2,
            explain: "Vaccination and public-health campaigns means programs that prevent disease through immunisation, clinics, education and early treatment. It matters because health improvements support education, work and household stability."
        },

        {
            id: "g-mcq-226", topic: "wellbeing-strategies",
            q: "Which scenario best shows vaccination and public-health campaigns in action?",
            options: [
                "Residents help decide where a clinic should be built and how it will operate",
                "DFAT works with a local NGO and community leaders to improve maternal health services",
                "A country uses SDG targets to guide work on clean water, gender equality and climate action",
                "A measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school"
            ],
            answer: 3,
            explain: "The best example is a measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school. Geographers use this idea to lift wellbeing quickly through better health outcomes."
        },

        {
            id: "g-mcq-227", topic: "wellbeing-strategies",
            q: "Why do geographers use vaccination and public-health campaigns when studying development strategies?",
            options: [
                "Lift wellbeing quickly through better health outcomes",
                "Increase income opportunities at household scale",
                "Build ownership and improve long-term success",
                "Set shared global priorities for improving wellbeing"
            ],
            answer: 0,
            explain: "Geographers use vaccination and public-health campaigns to lift wellbeing quickly through better health outcomes. Health improvements support education, work and household stability."
        },

        {
            id: "g-mcq-228", topic: "wellbeing-strategies",
            q: "Which note about vaccination and public-health campaigns is MOST accurate?",
            options: [
                "Clean water and sanitation create large wellbeing gains for relatively low cost",
                "Health improvements support education, work and household stability",
                "Education has multiplier effects across families and communities",
                "Basic security can stop temporary hardship becoming long-term disadvantage"
            ],
            answer: 1,
            explain: "Health improvements support education, work and household stability. This links to programs that prevent disease through immunisation, clinics, education and early treatment."
        },

        {
            id: "g-mcq-229", topic: "wellbeing-strategies",
            q: "Which statement best defines girls’ education?",
            options: [
                "Small loans and financial services for people who may not have access to formal banking",
                "Payments or support programs that help households meet basic needs during hardship",
                "Projects designed with local people so solutions match local needs and knowledge",
                "Programs that keep girls in school and remove barriers such as cost, distance or unsafe travel"
            ],
            answer: 3,
            explain: "Girls’ education means programs that keep girls in school and remove barriers such as cost, distance or unsafe travel. It matters because education has multiplier effects across families and communities."
        },

        {
            id: "g-mcq-230", topic: "wellbeing-strategies",
            q: "Which scenario best shows girls’ education in action?",
            options: [
                "Scholarships and safe transport help teenage girls complete secondary school",
                "DFAT works with a local NGO and community leaders to improve maternal health services",
                "A country uses SDG targets to guide work on clean water, gender equality and climate action",
                "A village gains safe water points, toilets and handwashing facilities"
            ],
            answer: 0,
            explain: "The best example is scholarships and safe transport help teenage girls complete secondary school. Geographers use this idea to improve future income, health and gender equality."
        },

        {
            id: "g-mcq-231", topic: "wellbeing-strategies",
            q: "Why do geographers use girls’ education when studying development strategies?",
            options: [
                "Protect wellbeing during shocks and reduce extreme poverty",
                "Improve future income, health and gender equality",
                "Combine funding, expertise and local knowledge",
                "Reduce disease and improve health and attendance at school"
            ],
            answer: 1,
            explain: "Geographers use girls’ education to improve future income, health and gender equality. Education has multiplier effects across families and communities."
        },

        {
            id: "g-mcq-232", topic: "wellbeing-strategies",
            q: "Which note about girls’ education is MOST accurate?",
            options: [
                "Health improvements support education, work and household stability",
                "It can strengthen independence but works best alongside wider support",
                "Education has multiplier effects across families and communities",
                "Local participation usually makes programs more relevant and trusted"
            ],
            answer: 2,
            explain: "Education has multiplier effects across families and communities. This links to programs that keep girls in school and remove barriers such as cost, distance or unsafe travel."
        },

        {
            id: "g-mcq-233", topic: "wellbeing-strategies",
            q: "Which statement best defines microfinance?",
            options: [
                "Small loans and financial services for people who may not have access to formal banking",
                "Payments or support programs that help households meet basic needs during hardship",
                "Projects designed with local people so solutions match local needs and knowledge",
                "Co-operation between governments, NGOs, communities and international agencies"
            ],
            answer: 0,
            explain: "Microfinance means small loans and financial services for people who may not have access to formal banking. It matters because it can strengthen independence but works best alongside wider support."
        },

        {
            id: "g-mcq-234", topic: "wellbeing-strategies",
            q: "Which scenario best shows microfinance in action?",
            options: [
                "A country uses SDG targets to guide work on clean water, gender equality and climate action",
                "A woman starts a small business after receiving a low-value loan and savings support",
                "A village gains safe water points, toilets and handwashing facilities",
                "A measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school"
            ],
            answer: 1,
            explain: "The best example is a woman starts a small business after receiving a low-value loan and savings support. Geographers use this idea to increase income opportunities at household scale."
        },

        {
            id: "g-mcq-235", topic: "wellbeing-strategies",
            q: "Why do geographers use microfinance when studying development strategies?",
            options: [
                "Build ownership and improve long-term success",
                "Set shared global priorities for improving wellbeing",
                "Increase income opportunities at household scale",
                "Lift wellbeing quickly through better health outcomes"
            ],
            answer: 2,
            explain: "Geographers use microfinance to increase income opportunities at household scale. It can strengthen independence but works best alongside wider support."
        },

        {
            id: "g-mcq-236", topic: "wellbeing-strategies",
            q: "Which note about microfinance is MOST accurate?",
            options: [
                "Education has multiplier effects across families and communities",
                "Basic security can stop temporary hardship becoming long-term disadvantage",
                "Partnerships are strongest when they support local capacity rather than replace it",
                "It can strengthen independence but works best alongside wider support"
            ],
            answer: 3,
            explain: "It can strengthen independence but works best alongside wider support. This links to small loans and financial services for people who may not have access to formal banking."
        },

        {
            id: "g-mcq-237", topic: "wellbeing-strategies",
            q: "Which statement best defines cash transfers and social protection?",
            options: [
                "Projects designed with local people so solutions match local needs and knowledge",
                "Payments or support programs that help households meet basic needs during hardship",
                "Co-operation between governments, NGOs, communities and international agencies",
                "The UN framework of 17 goals linking poverty reduction, health, education, equality and environmental sustainability"
            ],
            answer: 1,
            explain: "Cash transfers and social protection means payments or support programs that help households meet basic needs during hardship. It matters because basic security can stop temporary hardship becoming long-term disadvantage."
        },

        {
            id: "g-mcq-238", topic: "wellbeing-strategies",
            q: "Which scenario best shows cash transfers and social protection in action?",
            options: [
                "A village gains safe water points, toilets and handwashing facilities",
                "A measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school",
                "A family receives regular income support that keeps children in school during drought",
                "Scholarships and safe transport help teenage girls complete secondary school"
            ],
            answer: 2,
            explain: "The best example is a family receives regular income support that keeps children in school during drought. Geographers use this idea to protect wellbeing during shocks and reduce extreme poverty."
        },

        {
            id: "g-mcq-239", topic: "wellbeing-strategies",
            q: "Why do geographers use cash transfers and social protection when studying development strategies?",
            options: [
                "Combine funding, expertise and local knowledge",
                "Reduce disease and improve health and attendance at school",
                "Improve future income, health and gender equality",
                "Protect wellbeing during shocks and reduce extreme poverty"
            ],
            answer: 3,
            explain: "Geographers use cash transfers and social protection to protect wellbeing during shocks and reduce extreme poverty. Basic security can stop temporary hardship becoming long-term disadvantage."
        },

        {
            id: "g-mcq-240", topic: "wellbeing-strategies",
            q: "Which note about cash transfers and social protection is MOST accurate?",
            options: [
                "Basic security can stop temporary hardship becoming long-term disadvantage",
                "It can strengthen independence but works best alongside wider support",
                "Local participation usually makes programs more relevant and trusted",
                "They connect different dimensions of development instead of treating issues in isolation"
            ],
            answer: 0,
            explain: "Basic security can stop temporary hardship becoming long-term disadvantage. This links to payments or support programs that help households meet basic needs during hardship."
        },

        {
            id: "g-mcq-241", topic: "wellbeing-strategies",
            q: "Which statement best defines community-led development?",
            options: [
                "Co-operation between governments, NGOs, communities and international agencies",
                "The UN framework of 17 goals linking poverty reduction, health, education, equality and environmental sustainability",
                "Projects designed with local people so solutions match local needs and knowledge",
                "Strategies that improve water, sanitation and hygiene in homes, schools and clinics"
            ],
            answer: 2,
            explain: "Community-led development means projects designed with local people so solutions match local needs and knowledge. It matters because local participation usually makes programs more relevant and trusted."
        },

        {
            id: "g-mcq-242", topic: "wellbeing-strategies",
            q: "Which scenario best shows community-led development in action?",
            options: [
                "A measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school",
                "Scholarships and safe transport help teenage girls complete secondary school",
                "A woman starts a small business after receiving a low-value loan and savings support",
                "Residents help decide where a clinic should be built and how it will operate"
            ],
            answer: 3,
            explain: "The best example is residents help decide where a clinic should be built and how it will operate. Geographers use this idea to build ownership and improve long-term success."
        },

        {
            id: "g-mcq-243", topic: "wellbeing-strategies",
            q: "Why do geographers use community-led development when studying development strategies?",
            options: [
                "Build ownership and improve long-term success",
                "Set shared global priorities for improving wellbeing",
                "Lift wellbeing quickly through better health outcomes",
                "Increase income opportunities at household scale"
            ],
            answer: 0,
            explain: "Geographers use community-led development to build ownership and improve long-term success. Local participation usually makes programs more relevant and trusted."
        },

        {
            id: "g-mcq-244", topic: "wellbeing-strategies",
            q: "Which note about community-led development is MOST accurate?",
            options: [
                "Basic security can stop temporary hardship becoming long-term disadvantage",
                "Local participation usually makes programs more relevant and trusted",
                "Partnerships are strongest when they support local capacity rather than replace it",
                "Clean water and sanitation create large wellbeing gains for relatively low cost"
            ],
            answer: 1,
            explain: "Local participation usually makes programs more relevant and trusted. This links to projects designed with local people so solutions match local needs and knowledge."
        },

        {
            id: "g-mcq-245", topic: "wellbeing-strategies",
            q: "Which statement best defines aid partnerships?",
            options: [
                "The UN framework of 17 goals linking poverty reduction, health, education, equality and environmental sustainability",
                "Strategies that improve water, sanitation and hygiene in homes, schools and clinics",
                "Programs that prevent disease through immunisation, clinics, education and early treatment",
                "Co-operation between governments, NGOs, communities and international agencies"
            ],
            answer: 3,
            explain: "Aid partnerships means co-operation between governments, NGOs, communities and international agencies. It matters because partnerships are strongest when they support local capacity rather than replace it."
        },

        {
            id: "g-mcq-246", topic: "wellbeing-strategies",
            q: "Which scenario best shows aid partnerships in action?",
            options: [
                "DFAT works with a local NGO and community leaders to improve maternal health services",
                "Scholarships and safe transport help teenage girls complete secondary school",
                "A woman starts a small business after receiving a low-value loan and savings support",
                "A family receives regular income support that keeps children in school during drought"
            ],
            answer: 0,
            explain: "The best example is DFAT works with a local NGO and community leaders to improve maternal health services. Geographers use this idea to combine funding, expertise and local knowledge."
        },

        {
            id: "g-mcq-247", topic: "wellbeing-strategies",
            q: "Why do geographers use aid partnerships when studying development strategies?",
            options: [
                "Reduce disease and improve health and attendance at school",
                "Combine funding, expertise and local knowledge",
                "Improve future income, health and gender equality",
                "Protect wellbeing during shocks and reduce extreme poverty"
            ],
            answer: 1,
            explain: "Geographers use aid partnerships to combine funding, expertise and local knowledge. Partnerships are strongest when they support local capacity rather than replace it."
        },

        {
            id: "g-mcq-248", topic: "wellbeing-strategies",
            q: "Which note about aid partnerships is MOST accurate?",
            options: [
                "Local participation usually makes programs more relevant and trusted",
                "They connect different dimensions of development instead of treating issues in isolation",
                "Partnerships are strongest when they support local capacity rather than replace it",
                "Health improvements support education, work and household stability"
            ],
            answer: 2,
            explain: "Partnerships are strongest when they support local capacity rather than replace it. This links to co-operation between governments, NGOs, communities and international agencies."
        },


        /* ===== Stakeholders & perspectives on wellbeing ===== */
        {
            id: "g-mcq-249", topic: "wellbeing-perspectives",
            q: "Which statement best defines government priorities?",
            options: [
                "The view that wellbeing programs should improve national indicators, services and stability",
                "The view that equity, dignity and access for vulnerable groups should shape development choices",
                "The lived experience of people directly affected by a project or policy",
                "The view that projects should be efficient, financially viable and create economic opportunity"
            ],
            answer: 0,
            explain: "Government priorities means the view that wellbeing programs should improve national indicators, services and stability. It matters because governments often balance social goals with political and financial constraints."
        },

        {
            id: "g-mcq-250", topic: "wellbeing-perspectives",
            q: "Which scenario best shows government priorities in action?",
            options: [
                "Women spend hours collecting water, limiting education and paid work opportunities",
                "A government funds roads, hospitals and schools because it wants broad improvements across a region",
                "Students ask for safer transport so they can stay in school longer",
                "An Indigenous community asks to co-design a housing program rather than having it imposed from outside"
            ],
            answer: 1,
            explain: "The best example is a government funds roads, hospitals and schools because it wants broad improvements across a region. Geographers use this idea to show how public authorities set scale, targets and budgets."
        },

        {
            id: "g-mcq-251", topic: "wellbeing-perspectives",
            q: "Why do geographers use government priorities when studying stakeholder perspectives on wellbeing?",
            options: [
                "Test whether a strategy matches everyday needs on the ground",
                "Explain why equal access is essential in development planning",
                "Show how public authorities set scale, targets and budgets",
                "Bring self-determination and cultural authority into wellbeing planning"
            ],
            answer: 2,
            explain: "Geographers use government priorities to show how public authorities set scale, targets and budgets. Governments often balance social goals with political and financial constraints."
        },

        {
            id: "g-mcq-252", topic: "wellbeing-perspectives",
            q: "Which note about government priorities is MOST accurate?",
            options: [
                "Good judgements consider immediate benefits alongside future impacts",
                "They can highlight issues that governments or investors overlook",
                "Business support can bring jobs but may also create trade-offs around profit and equity",
                "Governments often balance social goals with political and financial constraints"
            ],
            answer: 3,
            explain: "Governments often balance social goals with political and financial constraints. This links to the view that wellbeing programs should improve national indicators, services and stability."
        },

        {
            id: "g-mcq-253", topic: "wellbeing-perspectives",
            q: "Which statement best defines NGO and human-rights perspectives?",
            options: [
                "The lived experience of people directly affected by a project or policy",
                "The view that equity, dignity and access for vulnerable groups should shape development choices",
                "The view that projects should be efficient, financially viable and create economic opportunity",
                "The understanding that women and men may experience wellbeing challenges differently because of power and access"
            ],
            answer: 1,
            explain: "NGO and human-rights perspectives means the view that equity, dignity and access for vulnerable groups should shape development choices. It matters because they can highlight issues that governments or investors overlook."
        },

        {
            id: "g-mcq-254", topic: "wellbeing-perspectives",
            q: "Which scenario best shows NGO and human-rights perspectives in action?",
            options: [
                "Students ask for safer transport so they can stay in school longer",
                "An Indigenous community asks to co-design a housing program rather than having it imposed from outside",
                "An NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth",
                "A project creates quick jobs but damages water quality that the community depends on later"
            ],
            answer: 2,
            explain: "The best example is an NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth. Geographers use this idea to bring advocacy and community needs into planning."
        },

        {
            id: "g-mcq-255", topic: "wellbeing-perspectives",
            q: "Why do geographers use NGO and human-rights perspectives when studying stakeholder perspectives on wellbeing?",
            options: [
                "Show how private investment can influence wellbeing outcomes",
                "Show that age changes how development is experienced",
                "Help evaluate whether a strategy is sustainable and fair over time",
                "Bring advocacy and community needs into planning"
            ],
            answer: 3,
            explain: "Geographers use NGO and human-rights perspectives to bring advocacy and community needs into planning. They can highlight issues that governments or investors overlook."
        },

        {
            id: "g-mcq-256", topic: "wellbeing-perspectives",
            q: "Which note about NGO and human-rights perspectives is MOST accurate?",
            options: [
                "They can highlight issues that governments or investors overlook",
                "Governments often balance social goals with political and financial constraints",
                "Community voices often reveal practical issues hidden in official plans",
                "Programs can fail if they ignore who carries unpaid work or lacks decision-making power"
            ],
            answer: 0,
            explain: "They can highlight issues that governments or investors overlook. This links to the view that equity, dignity and access for vulnerable groups should shape development choices."
        },

        {
            id: "g-mcq-257", topic: "wellbeing-perspectives",
            q: "Which statement best defines local community perspectives?",
            options: [
                "The view that projects should be efficient, financially viable and create economic opportunity",
                "The understanding that women and men may experience wellbeing challenges differently because of power and access",
                "The lived experience of people directly affected by a project or policy",
                "The view that children and young people need to be heard in decisions about education, safety, work and the future"
            ],
            answer: 2,
            explain: "Local community perspectives means the lived experience of people directly affected by a project or policy. It matters because community voices often reveal practical issues hidden in official plans."
        },

        {
            id: "g-mcq-258", topic: "wellbeing-perspectives",
            q: "Which scenario best shows local community perspectives in action?",
            options: [
                "An Indigenous community asks to co-design a housing program rather than having it imposed from outside",
                "A project creates quick jobs but damages water quality that the community depends on later",
                "A government funds roads, hospitals and schools because it wants broad improvements across a region",
                "Residents support a clinic but want it built closer to the village and staffed in local languages"
            ],
            answer: 3,
            explain: "The best example is residents support a clinic but want it built closer to the village and staffed in local languages. Geographers use this idea to test whether a strategy matches everyday needs on the ground."
        },

        {
            id: "g-mcq-259", topic: "wellbeing-perspectives",
            q: "Why do geographers use local community perspectives when studying stakeholder perspectives on wellbeing?",
            options: [
                "Test whether a strategy matches everyday needs on the ground",
                "Explain why equal access is essential in development planning",
                "Bring self-determination and cultural authority into wellbeing planning",
                "Show how public authorities set scale, targets and budgets"
            ],
            answer: 0,
            explain: "Geographers use local community perspectives to test whether a strategy matches everyday needs on the ground. Community voices often reveal practical issues hidden in official plans."
        },

        {
            id: "g-mcq-260", topic: "wellbeing-perspectives",
            q: "Which note about local community perspectives is MOST accurate?",
            options: [
                "They can highlight issues that governments or investors overlook",
                "Community voices often reveal practical issues hidden in official plans",
                "Business support can bring jobs but may also create trade-offs around profit and equity",
                "Young people live longest with the consequences of today’s decisions"
            ],
            answer: 1,
            explain: "Community voices often reveal practical issues hidden in official plans. This links to the lived experience of people directly affected by a project or policy."
        },

        {
            id: "g-mcq-261", topic: "wellbeing-perspectives",
            q: "Which statement best defines business and investor perspectives?",
            options: [
                "The understanding that women and men may experience wellbeing challenges differently because of power and access",
                "The view that children and young people need to be heard in decisions about education, safety, work and the future",
                "The expectation that Indigenous peoples should shape decisions affecting their communities, land and culture",
                "The view that projects should be efficient, financially viable and create economic opportunity"
            ],
            answer: 3,
            explain: "Business and investor perspectives means the view that projects should be efficient, financially viable and create economic opportunity. It matters because business support can bring jobs but may also create trade-offs around profit and equity."
        },

        {
            id: "g-mcq-262", topic: "wellbeing-perspectives",
            q: "Which scenario best shows business and investor perspectives in action?",
            options: [
                "A company supports a development plan that improves infrastructure and workforce skills",
                "A project creates quick jobs but damages water quality that the community depends on later",
                "A government funds roads, hospitals and schools because it wants broad improvements across a region",
                "An NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth"
            ],
            answer: 0,
            explain: "The best example is a company supports a development plan that improves infrastructure and workforce skills. Geographers use this idea to show how private investment can influence wellbeing outcomes."
        },

        {
            id: "g-mcq-263", topic: "wellbeing-perspectives",
            q: "Why do geographers use business and investor perspectives when studying stakeholder perspectives on wellbeing?",
            options: [
                "Show that age changes how development is experienced",
                "Show how private investment can influence wellbeing outcomes",
                "Help evaluate whether a strategy is sustainable and fair over time",
                "Bring advocacy and community needs into planning"
            ],
            answer: 1,
            explain: "Geographers use business and investor perspectives to show how private investment can influence wellbeing outcomes. Business support can bring jobs but may also create trade-offs around profit and equity."
        },

        {
            id: "g-mcq-264", topic: "wellbeing-perspectives",
            q: "Which note about business and investor perspectives is MOST accurate?",
            options: [
                "Community voices often reveal practical issues hidden in official plans",
                "Programs can fail if they ignore who carries unpaid work or lacks decision-making power",
                "Business support can bring jobs but may also create trade-offs around profit and equity",
                "Participation improves relevance, trust and long-term outcomes"
            ],
            answer: 2,
            explain: "Business support can bring jobs but may also create trade-offs around profit and equity. This links to the view that projects should be efficient, financially viable and create economic opportunity."
        },

        {
            id: "g-mcq-265", topic: "wellbeing-perspectives",
            q: "Which statement best defines gender perspectives?",
            options: [
                "The understanding that women and men may experience wellbeing challenges differently because of power and access",
                "The view that children and young people need to be heard in decisions about education, safety, work and the future",
                "The expectation that Indigenous peoples should shape decisions affecting their communities, land and culture",
                "The tension between fast visible gains and slower but deeper improvements in wellbeing"
            ],
            answer: 0,
            explain: "Gender perspectives means the understanding that women and men may experience wellbeing challenges differently because of power and access. It matters because programs can fail if they ignore who carries unpaid work or lacks decision-making power."
        },

        {
            id: "g-mcq-266", topic: "wellbeing-perspectives",
            q: "Which scenario best shows gender perspectives in action?",
            options: [
                "A government funds roads, hospitals and schools because it wants broad improvements across a region",
                "Women spend hours collecting water, limiting education and paid work opportunities",
                "An NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth",
                "Residents support a clinic but want it built closer to the village and staffed in local languages"
            ],
            answer: 1,
            explain: "The best example is women spend hours collecting water, limiting education and paid work opportunities. Geographers use this idea to explain why equal access is essential in development planning."
        },

        {
            id: "g-mcq-267", topic: "wellbeing-perspectives",
            q: "Why do geographers use gender perspectives when studying stakeholder perspectives on wellbeing?",
            options: [
                "Bring self-determination and cultural authority into wellbeing planning",
                "Show how public authorities set scale, targets and budgets",
                "Explain why equal access is essential in development planning",
                "Test whether a strategy matches everyday needs on the ground"
            ],
            answer: 2,
            explain: "Geographers use gender perspectives to explain why equal access is essential in development planning. Programs can fail if they ignore who carries unpaid work or lacks decision-making power."
        },

        {
            id: "g-mcq-268", topic: "wellbeing-perspectives",
            q: "Which note about gender perspectives is MOST accurate?",
            options: [
                "Business support can bring jobs but may also create trade-offs around profit and equity",
                "Young people live longest with the consequences of today’s decisions",
                "Good judgements consider immediate benefits alongside future impacts",
                "Programs can fail if they ignore who carries unpaid work or lacks decision-making power"
            ],
            answer: 3,
            explain: "Programs can fail if they ignore who carries unpaid work or lacks decision-making power. This links to the understanding that women and men may experience wellbeing challenges differently because of power and access."
        },

        {
            id: "g-mcq-269", topic: "wellbeing-perspectives",
            q: "Which statement best defines youth perspectives?",
            options: [
                "The expectation that Indigenous peoples should shape decisions affecting their communities, land and culture",
                "The view that children and young people need to be heard in decisions about education, safety, work and the future",
                "The tension between fast visible gains and slower but deeper improvements in wellbeing",
                "The view that wellbeing programs should improve national indicators, services and stability"
            ],
            answer: 1,
            explain: "Youth perspectives means the view that children and young people need to be heard in decisions about education, safety, work and the future. It matters because young people live longest with the consequences of today’s decisions."
        },

        {
            id: "g-mcq-270", topic: "wellbeing-perspectives",
            q: "Which scenario best shows youth perspectives in action?",
            options: [
                "An NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth",
                "Residents support a clinic but want it built closer to the village and staffed in local languages",
                "Students ask for safer transport so they can stay in school longer",
                "A company supports a development plan that improves infrastructure and workforce skills"
            ],
            answer: 2,
            explain: "The best example is students ask for safer transport so they can stay in school longer. Geographers use this idea to show that age changes how development is experienced."
        },

        {
            id: "g-mcq-271", topic: "wellbeing-perspectives",
            q: "Why do geographers use youth perspectives when studying stakeholder perspectives on wellbeing?",
            options: [
                "Help evaluate whether a strategy is sustainable and fair over time",
                "Bring advocacy and community needs into planning",
                "Show how private investment can influence wellbeing outcomes",
                "Show that age changes how development is experienced"
            ],
            answer: 3,
            explain: "Geographers use youth perspectives to show that age changes how development is experienced. Young people live longest with the consequences of today’s decisions."
        },

        {
            id: "g-mcq-272", topic: "wellbeing-perspectives",
            q: "Which note about youth perspectives is MOST accurate?",
            options: [
                "Young people live longest with the consequences of today’s decisions",
                "Programs can fail if they ignore who carries unpaid work or lacks decision-making power",
                "Participation improves relevance, trust and long-term outcomes",
                "Governments often balance social goals with political and financial constraints"
            ],
            answer: 0,
            explain: "Young people live longest with the consequences of today’s decisions. This links to the view that children and young people need to be heard in decisions about education, safety, work and the future."
        },

        {
            id: "g-mcq-273", topic: "wellbeing-perspectives",
            q: "Which statement best defines Indigenous participation?",
            options: [
                "The tension between fast visible gains and slower but deeper improvements in wellbeing",
                "The view that wellbeing programs should improve national indicators, services and stability",
                "The expectation that Indigenous peoples should shape decisions affecting their communities, land and culture",
                "The view that equity, dignity and access for vulnerable groups should shape development choices"
            ],
            answer: 2,
            explain: "Indigenous participation means the expectation that Indigenous peoples should shape decisions affecting their communities, land and culture. It matters because participation improves relevance, trust and long-term outcomes."
        },

        {
            id: "g-mcq-274", topic: "wellbeing-perspectives",
            q: "Which scenario best shows Indigenous participation in action?",
            options: [
                "Residents support a clinic but want it built closer to the village and staffed in local languages",
                "A company supports a development plan that improves infrastructure and workforce skills",
                "Women spend hours collecting water, limiting education and paid work opportunities",
                "An Indigenous community asks to co-design a housing program rather than having it imposed from outside"
            ],
            answer: 3,
            explain: "The best example is an Indigenous community asks to co-design a housing program rather than having it imposed from outside. Geographers use this idea to bring self-determination and cultural authority into wellbeing planning."
        },

        {
            id: "g-mcq-275", topic: "wellbeing-perspectives",
            q: "Why do geographers use Indigenous participation when studying stakeholder perspectives on wellbeing?",
            options: [
                "Bring self-determination and cultural authority into wellbeing planning",
                "Show how public authorities set scale, targets and budgets",
                "Test whether a strategy matches everyday needs on the ground",
                "Explain why equal access is essential in development planning"
            ],
            answer: 0,
            explain: "Geographers use Indigenous participation to bring self-determination and cultural authority into wellbeing planning. Participation improves relevance, trust and long-term outcomes."
        },

        {
            id: "g-mcq-276", topic: "wellbeing-perspectives",
            q: "Which note about Indigenous participation is MOST accurate?",
            options: [
                "Young people live longest with the consequences of today’s decisions",
                "Participation improves relevance, trust and long-term outcomes",
                "Good judgements consider immediate benefits alongside future impacts",
                "They can highlight issues that governments or investors overlook"
            ],
            answer: 1,
            explain: "Participation improves relevance, trust and long-term outcomes. This links to the expectation that Indigenous peoples should shape decisions affecting their communities, land and culture."
        },

        {
            id: "g-mcq-277", topic: "wellbeing-perspectives",
            q: "Which statement best defines short-term and long-term trade-offs?",
            options: [
                "The view that wellbeing programs should improve national indicators, services and stability",
                "The view that equity, dignity and access for vulnerable groups should shape development choices",
                "The lived experience of people directly affected by a project or policy",
                "The tension between fast visible gains and slower but deeper improvements in wellbeing"
            ],
            answer: 3,
            explain: "Short-term and long-term trade-offs means the tension between fast visible gains and slower but deeper improvements in wellbeing. It matters because good judgements consider immediate benefits alongside future impacts."
        },

        {
            id: "g-mcq-278", topic: "wellbeing-perspectives",
            q: "Which scenario best shows short-term and long-term trade-offs in action?",
            options: [
                "A project creates quick jobs but damages water quality that the community depends on later",
                "A company supports a development plan that improves infrastructure and workforce skills",
                "Women spend hours collecting water, limiting education and paid work opportunities",
                "Students ask for safer transport so they can stay in school longer"
            ],
            answer: 0,
            explain: "The best example is a project creates quick jobs but damages water quality that the community depends on later. Geographers use this idea to help evaluate whether a strategy is sustainable and fair over time."
        },

        {
            id: "g-mcq-279", topic: "wellbeing-perspectives",
            q: "Why do geographers use short-term and long-term trade-offs when studying stakeholder perspectives on wellbeing?",
            options: [
                "Bring advocacy and community needs into planning",
                "Help evaluate whether a strategy is sustainable and fair over time",
                "Show how private investment can influence wellbeing outcomes",
                "Show that age changes how development is experienced"
            ],
            answer: 1,
            explain: "Geographers use short-term and long-term trade-offs to help evaluate whether a strategy is sustainable and fair over time. Good judgements consider immediate benefits alongside future impacts."
        },

        {
            id: "g-mcq-280", topic: "wellbeing-perspectives",
            q: "Which note about short-term and long-term trade-offs is MOST accurate?",
            options: [
                "Participation improves relevance, trust and long-term outcomes",
                "Governments often balance social goals with political and financial constraints",
                "Good judgements consider immediate benefits alongside future impacts",
                "Community voices often reveal practical issues hidden in official plans"
            ],
            answer: 2,
            explain: "Good judgements consider immediate benefits alongside future impacts. This links to the tension between fast visible gains and slower but deeper improvements in wellbeing."
        },


        /* ===== Wind power — how it works ===== */
        {
            id: "g-mcq-281", topic: "wind-tech",
            q: "Which statement best defines energy conversion in a turbine?",
            options: [
                "The process of turning the kinetic energy of moving air into electrical energy",
                "The share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time",
                "The minimum wind needed for generation and the high wind speed at which turbines shut down for protection",
                "Systems that turn the nacelle into the wind and adjust blade angles to manage power"
            ],
            answer: 0,
            explain: "Energy conversion in a turbine means the process of turning the kinetic energy of moving air into electrical energy. It matters because understanding the conversion chain helps explain why turbine design matters."
        },

        {
            id: "g-mcq-282", topic: "wind-tech",
            q: "Which scenario best shows energy conversion in a turbine in action?",
            options: [
                "Power from several turbines is stepped up at a substation before entering transmission lines",
                "Wind turns the blades, the rotor spins and a generator produces electricity",
                "A battery stores extra energy during windy periods and releases it when demand stays high",
                "An offshore project in Bass Strait aims to use stronger marine winds than many inland sites"
            ],
            answer: 1,
            explain: "The best example is wind turns the blades, the rotor spins and a generator produces electricity. Geographers use this idea to explain the basic operation of wind power."
        },

        {
            id: "g-mcq-283", topic: "wind-tech",
            q: "Why do geographers use energy conversion in a turbine when studying wind power technology?",
            options: [
                "Explain why wind output varies with weather",
                "Link turbine output to the electricity system people actually use",
                "Explain the basic operation of wind power",
                "Compare technological choices for different locations"
            ],
            answer: 2,
            explain: "Geographers use energy conversion in a turbine to explain the basic operation of wind power. Understanding the conversion chain helps explain why turbine design matters."
        },

        {
            id: "g-mcq-284", topic: "wind-tech",
            q: "Which note about energy conversion in a turbine is MOST accurate?",
            options: [
                "Good resource data reduces risk and improves planning",
                "It matters because nameplate capacity alone does not show real output",
                "Control systems increase efficiency and protect the machine",
                "Understanding the conversion chain helps explain why turbine design matters"
            ],
            answer: 3,
            explain: "Understanding the conversion chain helps explain why turbine design matters. This links to the process of turning the kinetic energy of moving air into electrical energy."
        },

        {
            id: "g-mcq-285", topic: "wind-tech",
            q: "Which statement best defines capacity factor?",
            options: [
                "The minimum wind needed for generation and the high wind speed at which turbines shut down for protection",
                "The share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time",
                "Systems that turn the nacelle into the wind and adjust blade angles to manage power",
                "The cables, transformer and substation that move electricity from turbines into the wider network"
            ],
            answer: 1,
            explain: "Capacity factor means the share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time. It matters because it matters because nameplate capacity alone does not show real output."
        },

        {
            id: "g-mcq-286", topic: "wind-tech",
            q: "Which scenario best shows capacity factor in action?",
            options: [
                "A battery stores extra energy during windy periods and releases it when demand stays high",
                "An offshore project in Bass Strait aims to use stronger marine winds than many inland sites",
                "A wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site",
                "Developers use masts, LiDAR and long-term data to test whether a ridge has enough wind"
            ],
            answer: 2,
            explain: "The best example is a wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site. Geographers use this idea to compare the performance of wind projects realistically."
        },

        {
            id: "g-mcq-287", topic: "wind-tech",
            q: "Why do geographers use capacity factor when studying wind power technology?",
            options: [
                "Show how turbines respond to changing conditions",
                "Show how wind can support reliable electricity supply",
                "Select suitable locations for efficient turbines",
                "Compare the performance of wind projects realistically"
            ],
            answer: 3,
            explain: "Geographers use capacity factor to compare the performance of wind projects realistically. It matters because nameplate capacity alone does not show real output."
        },

        {
            id: "g-mcq-288", topic: "wind-tech",
            q: "Which note about capacity factor is MOST accurate?",
            options: [
                "It matters because nameplate capacity alone does not show real output",
                "Understanding the conversion chain helps explain why turbine design matters",
                "Operating limits keep equipment safe and shape generation patterns",
                "Generation is only useful if it can be delivered reliably to the grid"
            ],
            answer: 0,
            explain: "It matters because nameplate capacity alone does not show real output. This links to the share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time."
        },

        {
            id: "g-mcq-289", topic: "wind-tech",
            q: "Which statement best defines cut-in and cut-out speeds?",
            options: [
                "Systems that turn the nacelle into the wind and adjust blade angles to manage power",
                "The cables, transformer and substation that move electricity from turbines into the wider network",
                "The minimum wind needed for generation and the high wind speed at which turbines shut down for protection",
                "Technologies such as batteries or pumped hydro that help balance variable renewable supply"
            ],
            answer: 2,
            explain: "Cut-in and cut-out speeds means the minimum wind needed for generation and the high wind speed at which turbines shut down for protection. It matters because operating limits keep equipment safe and shape generation patterns."
        },

        {
            id: "g-mcq-290", topic: "wind-tech",
            q: "Which scenario best shows cut-in and cut-out speeds in action?",
            options: [
                "An offshore project in Bass Strait aims to use stronger marine winds than many inland sites",
                "Developers use masts, LiDAR and long-term data to test whether a ridge has enough wind",
                "Wind turns the blades, the rotor spins and a generator produces electricity",
                "A turbine starts producing at moderate wind but stops during extreme gusts to avoid damage"
            ],
            answer: 3,
            explain: "The best example is a turbine starts producing at moderate wind but stops during extreme gusts to avoid damage. Geographers use this idea to explain why wind output varies with weather."
        },

        {
            id: "g-mcq-291", topic: "wind-tech",
            q: "Why do geographers use cut-in and cut-out speeds when studying wind power technology?",
            options: [
                "Explain why wind output varies with weather",
                "Link turbine output to the electricity system people actually use",
                "Compare technological choices for different locations",
                "Explain the basic operation of wind power"
            ],
            answer: 0,
            explain: "Geographers use cut-in and cut-out speeds to explain why wind output varies with weather. Operating limits keep equipment safe and shape generation patterns."
        },

        {
            id: "g-mcq-292", topic: "wind-tech",
            q: "Which note about cut-in and cut-out speeds is MOST accurate?",
            options: [
                "It matters because nameplate capacity alone does not show real output",
                "Operating limits keep equipment safe and shape generation patterns",
                "Control systems increase efficiency and protect the machine",
                "Firming helps match variable generation to demand"
            ],
            answer: 1,
            explain: "Operating limits keep equipment safe and shape generation patterns. This links to the minimum wind needed for generation and the high wind speed at which turbines shut down for protection."
        },

        {
            id: "g-mcq-293", topic: "wind-tech",
            q: "Which statement best defines pitch and yaw control?",
            options: [
                "The cables, transformer and substation that move electricity from turbines into the wider network",
                "Technologies such as batteries or pumped hydro that help balance variable renewable supply",
                "The two main settings for wind farms, with offshore sites often having stronger steadier winds",
                "Systems that turn the nacelle into the wind and adjust blade angles to manage power"
            ],
            answer: 3,
            explain: "Pitch and yaw control means systems that turn the nacelle into the wind and adjust blade angles to manage power. It matters because control systems increase efficiency and protect the machine."
        },

        {
            id: "g-mcq-294", topic: "wind-tech",
            q: "Which scenario best shows pitch and yaw control in action?",
            options: [
                "The turbine rotates to face changing wind direction and feathers blades during a storm",
                "Developers use masts, LiDAR and long-term data to test whether a ridge has enough wind",
                "Wind turns the blades, the rotor spins and a generator produces electricity",
                "A wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site"
            ],
            answer: 0,
            explain: "The best example is the turbine rotates to face changing wind direction and feathers blades during a storm. Geographers use this idea to show how turbines respond to changing conditions."
        },

        {
            id: "g-mcq-295", topic: "wind-tech",
            q: "Why do geographers use pitch and yaw control when studying wind power technology?",
            options: [
                "Show how wind can support reliable electricity supply",
                "Show how turbines respond to changing conditions",
                "Select suitable locations for efficient turbines",
                "Compare the performance of wind projects realistically"
            ],
            answer: 1,
            explain: "Geographers use pitch and yaw control to show how turbines respond to changing conditions. Control systems increase efficiency and protect the machine."
        },

        {
            id: "g-mcq-296", topic: "wind-tech",
            q: "Which note about pitch and yaw control is MOST accurate?",
            options: [
                "Operating limits keep equipment safe and shape generation patterns",
                "Generation is only useful if it can be delivered reliably to the grid",
                "Control systems increase efficiency and protect the machine",
                "Site conditions change cost, output and engineering needs"
            ],
            answer: 2,
            explain: "Control systems increase efficiency and protect the machine. This links to systems that turn the nacelle into the wind and adjust blade angles to manage power."
        },

        {
            id: "g-mcq-297", topic: "wind-tech",
            q: "Which statement best defines grid connection?",
            options: [
                "The cables, transformer and substation that move electricity from turbines into the wider network",
                "Technologies such as batteries or pumped hydro that help balance variable renewable supply",
                "The two main settings for wind farms, with offshore sites often having stronger steadier winds",
                "The measurement and modelling of wind speeds before a project is built"
            ],
            answer: 0,
            explain: "Grid connection means the cables, transformer and substation that move electricity from turbines into the wider network. It matters because generation is only useful if it can be delivered reliably to the grid."
        },

        {
            id: "g-mcq-298", topic: "wind-tech",
            q: "Which scenario best shows grid connection in action?",
            options: [
                "Wind turns the blades, the rotor spins and a generator produces electricity",
                "Power from several turbines is stepped up at a substation before entering transmission lines",
                "A wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site",
                "A turbine starts producing at moderate wind but stops during extreme gusts to avoid damage"
            ],
            answer: 1,
            explain: "The best example is power from several turbines is stepped up at a substation before entering transmission lines. Geographers use this idea to link turbine output to the electricity system people actually use."
        },

        {
            id: "g-mcq-299", topic: "wind-tech",
            q: "Why do geographers use grid connection when studying wind power technology?",
            options: [
                "Compare technological choices for different locations",
                "Explain the basic operation of wind power",
                "Link turbine output to the electricity system people actually use",
                "Explain why wind output varies with weather"
            ],
            answer: 2,
            explain: "Geographers use grid connection to link turbine output to the electricity system people actually use. Generation is only useful if it can be delivered reliably to the grid."
        },

        {
            id: "g-mcq-300", topic: "wind-tech",
            q: "Which note about grid connection is MOST accurate?",
            options: [
                "Control systems increase efficiency and protect the machine",
                "Firming helps match variable generation to demand",
                "Good resource data reduces risk and improves planning",
                "Generation is only useful if it can be delivered reliably to the grid"
            ],
            answer: 3,
            explain: "Generation is only useful if it can be delivered reliably to the grid. This links to the cables, transformer and substation that move electricity from turbines into the wider network."
        },

        {
            id: "g-mcq-301", topic: "wind-tech",
            q: "Which statement best defines storage and firming?",
            options: [
                "The two main settings for wind farms, with offshore sites often having stronger steadier winds",
                "Technologies such as batteries or pumped hydro that help balance variable renewable supply",
                "The measurement and modelling of wind speeds before a project is built",
                "The process of turning the kinetic energy of moving air into electrical energy"
            ],
            answer: 1,
            explain: "Storage and firming means technologies such as batteries or pumped hydro that help balance variable renewable supply. It matters because firming helps match variable generation to demand."
        },

        {
            id: "g-mcq-302", topic: "wind-tech",
            q: "Which scenario best shows storage and firming in action?",
            options: [
                "A wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site",
                "A turbine starts producing at moderate wind but stops during extreme gusts to avoid damage",
                "A battery stores extra energy during windy periods and releases it when demand stays high",
                "The turbine rotates to face changing wind direction and feathers blades during a storm"
            ],
            answer: 2,
            explain: "The best example is a battery stores extra energy during windy periods and releases it when demand stays high. Geographers use this idea to show how wind can support reliable electricity supply."
        },

        {
            id: "g-mcq-303", topic: "wind-tech",
            q: "Why do geographers use storage and firming when studying wind power technology?",
            options: [
                "Select suitable locations for efficient turbines",
                "Compare the performance of wind projects realistically",
                "Show how turbines respond to changing conditions",
                "Show how wind can support reliable electricity supply"
            ],
            answer: 3,
            explain: "Geographers use storage and firming to show how wind can support reliable electricity supply. Firming helps match variable generation to demand."
        },

        {
            id: "g-mcq-304", topic: "wind-tech",
            q: "Which note about storage and firming is MOST accurate?",
            options: [
                "Firming helps match variable generation to demand",
                "Generation is only useful if it can be delivered reliably to the grid",
                "Site conditions change cost, output and engineering needs",
                "Understanding the conversion chain helps explain why turbine design matters"
            ],
            answer: 0,
            explain: "Firming helps match variable generation to demand. This links to technologies such as batteries or pumped hydro that help balance variable renewable supply."
        },

        {
            id: "g-mcq-305", topic: "wind-tech",
            q: "Which statement best defines onshore and offshore wind?",
            options: [
                "The measurement and modelling of wind speeds before a project is built",
                "The process of turning the kinetic energy of moving air into electrical energy",
                "The two main settings for wind farms, with offshore sites often having stronger steadier winds",
                "The share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time"
            ],
            answer: 2,
            explain: "Onshore and offshore wind means the two main settings for wind farms, with offshore sites often having stronger steadier winds. It matters because site conditions change cost, output and engineering needs."
        },

        {
            id: "g-mcq-306", topic: "wind-tech",
            q: "Which scenario best shows onshore and offshore wind in action?",
            options: [
                "A turbine starts producing at moderate wind but stops during extreme gusts to avoid damage",
                "The turbine rotates to face changing wind direction and feathers blades during a storm",
                "Power from several turbines is stepped up at a substation before entering transmission lines",
                "An offshore project in Bass Strait aims to use stronger marine winds than many inland sites"
            ],
            answer: 3,
            explain: "The best example is an offshore project in Bass Strait aims to use stronger marine winds than many inland sites. Geographers use this idea to compare technological choices for different locations."
        },

        {
            id: "g-mcq-307", topic: "wind-tech",
            q: "Why do geographers use onshore and offshore wind when studying wind power technology?",
            options: [
                "Compare technological choices for different locations",
                "Explain the basic operation of wind power",
                "Explain why wind output varies with weather",
                "Link turbine output to the electricity system people actually use"
            ],
            answer: 0,
            explain: "Geographers use onshore and offshore wind to compare technological choices for different locations. Site conditions change cost, output and engineering needs."
        },

        {
            id: "g-mcq-308", topic: "wind-tech",
            q: "Which note about onshore and offshore wind is MOST accurate?",
            options: [
                "Firming helps match variable generation to demand",
                "Site conditions change cost, output and engineering needs",
                "Good resource data reduces risk and improves planning",
                "It matters because nameplate capacity alone does not show real output"
            ],
            answer: 1,
            explain: "Site conditions change cost, output and engineering needs. This links to the two main settings for wind farms, with offshore sites often having stronger steadier winds."
        },

        {
            id: "g-mcq-309", topic: "wind-tech",
            q: "Which statement best defines wind resource assessment?",
            options: [
                "The process of turning the kinetic energy of moving air into electrical energy",
                "The share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time",
                "The minimum wind needed for generation and the high wind speed at which turbines shut down for protection",
                "The measurement and modelling of wind speeds before a project is built"
            ],
            answer: 3,
            explain: "Wind resource assessment means the measurement and modelling of wind speeds before a project is built. It matters because good resource data reduces risk and improves planning."
        },

        {
            id: "g-mcq-310", topic: "wind-tech",
            q: "Which scenario best shows wind resource assessment in action?",
            options: [
                "Developers use masts, LiDAR and long-term data to test whether a ridge has enough wind",
                "The turbine rotates to face changing wind direction and feathers blades during a storm",
                "Power from several turbines is stepped up at a substation before entering transmission lines",
                "A battery stores extra energy during windy periods and releases it when demand stays high"
            ],
            answer: 0,
            explain: "The best example is developers use masts, LiDAR and long-term data to test whether a ridge has enough wind. Geographers use this idea to select suitable locations for efficient turbines."
        },

        {
            id: "g-mcq-311", topic: "wind-tech",
            q: "Why do geographers use wind resource assessment when studying wind power technology?",
            options: [
                "Compare the performance of wind projects realistically",
                "Select suitable locations for efficient turbines",
                "Show how turbines respond to changing conditions",
                "Show how wind can support reliable electricity supply"
            ],
            answer: 1,
            explain: "Geographers use wind resource assessment to select suitable locations for efficient turbines. Good resource data reduces risk and improves planning."
        },


        /* ===== Wind power in Australia ===== */
        {
            id: "g-mcq-312", topic: "wind-australia",
            q: "Which statement best defines South Australia’s wind leadership?",
            options: [
                "The strong contribution of wind to South Australia’s electricity mix compared with most other states",
                "Large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill",
                "The pairing of wind generation with grid-scale batteries to improve reliability and fast response",
                "Planned areas where generation, storage and transmission are coordinated for lower-cost build-out"
            ],
            answer: 0,
            explain: "South Australia’s wind leadership means the strong contribution of wind to South Australia’s electricity mix compared with most other states. It matters because it shows that high wind penetration is already possible with the right grid support."
        },

        {
            id: "g-mcq-313", topic: "wind-australia",
            q: "Which scenario best shows South Australia’s wind leadership in action?",
            options: [
                "A proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres",
                "South Australia often records very high renewable shares because wind supplies a major part of demand",
                "Sheep continue grazing between turbines while the landholder receives lease income",
                "A windy region cannot connect more turbines until new transmission lines are built"
            ],
            answer: 1,
            explain: "The best example is South Australia often records very high renewable shares because wind supplies a major part of demand. Geographers use this idea to use a clear Australian case study of rapid renewable uptake."
        },

        {
            id: "g-mcq-314", topic: "wind-australia",
            q: "Why do geographers use South Australia’s wind leadership when studying wind power in Australia?",
            options: [
                "Show how technology is being integrated in Australia",
                "Show how the next phase of wind development may expand",
                "Use a clear Australian case study of rapid renewable uptake",
                "Show why good wind resource alone is not enough"
            ],
            answer: 2,
            explain: "Geographers use South Australia’s wind leadership to use a clear Australian case study of rapid renewable uptake. It shows that high wind penetration is already possible with the right grid support."
        },

        {
            id: "g-mcq-315", topic: "wind-australia",
            q: "Which note about South Australia’s wind leadership is MOST accurate?",
            options: [
                "Jobs and spending often shape community support for projects",
                "Case studies make abstract discussion more specific and convincing",
                "Co-ordinated planning reduces bottlenecks and cost",
                "It shows that high wind penetration is already possible with the right grid support"
            ],
            answer: 3,
            explain: "It shows that high wind penetration is already possible with the right grid support. This links to the strong contribution of wind to South Australia’s electricity mix compared with most other states."
        },

        {
            id: "g-mcq-316", topic: "wind-australia",
            q: "Which statement best defines major onshore case studies?",
            options: [
                "The pairing of wind generation with grid-scale batteries to improve reliability and fast response",
                "Large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill",
                "Planned areas where generation, storage and transmission are coordinated for lower-cost build-out",
                "New Australian projects in declared offshore areas such as Gippsland, Hunter and Illawarra"
            ],
            answer: 1,
            explain: "Major onshore case studies means large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill. It matters because case studies make abstract discussion more specific and convincing."
        },

        {
            id: "g-mcq-317", topic: "wind-australia",
            q: "Which scenario best shows major onshore case studies in action?",
            options: [
                "Sheep continue grazing between turbines while the landholder receives lease income",
                "A windy region cannot connect more turbines until new transmission lines are built",
                "Students compare different operating wind farms across Victoria, South Australia and Queensland",
                "Regional towns gain crane work, road upgrades, accommodation demand and technician roles during a build"
            ],
            answer: 2,
            explain: "The best example is students compare different operating wind farms across Victoria, South Australia and Queensland. Geographers use this idea to ground classwork in named Australian examples."
        },

        {
            id: "g-mcq-318", topic: "wind-australia",
            q: "Why do geographers use major onshore case studies when studying wind power in Australia?",
            options: [
                "Explain how governments organise renewable growth",
                "Explain why land-use conflict is often lower than assumed",
                "Connect wind projects to local economic change",
                "Ground classwork in named Australian examples"
            ],
            answer: 3,
            explain: "Geographers use major onshore case studies to ground classwork in named Australian examples. Case studies make abstract discussion more specific and convincing."
        },

        {
            id: "g-mcq-319", topic: "wind-australia",
            q: "Which note about major onshore case studies is MOST accurate?",
            options: [
                "Case studies make abstract discussion more specific and convincing",
                "It shows that high wind penetration is already possible with the right grid support",
                "The example proves that storage can support higher renewable shares",
                "Offshore wind broadens Australia’s future renewable options"
            ],
            answer: 0,
            explain: "Case studies make abstract discussion more specific and convincing. This links to large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill."
        },

        {
            id: "g-mcq-320", topic: "wind-australia",
            q: "Which statement best defines Hornsdale and battery integration?",
            options: [
                "Planned areas where generation, storage and transmission are coordinated for lower-cost build-out",
                "New Australian projects in declared offshore areas such as Gippsland, Hunter and Illawarra",
                "The pairing of wind generation with grid-scale batteries to improve reliability and fast response",
                "The ability for turbines to operate on agricultural land while grazing or cropping continues around them"
            ],
            answer: 2,
            explain: "Hornsdale and battery integration means the pairing of wind generation with grid-scale batteries to improve reliability and fast response. It matters because the example proves that storage can support higher renewable shares."
        },

        {
            id: "g-mcq-321", topic: "wind-australia",
            q: "Which scenario best shows Hornsdale and battery integration in action?",
            options: [
                "A windy region cannot connect more turbines until new transmission lines are built",
                "Regional towns gain crane work, road upgrades, accommodation demand and technician roles during a build",
                "South Australia often records very high renewable shares because wind supplies a major part of demand",
                "Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity"
            ],
            answer: 3,
            explain: "The best example is Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity. Geographers use this idea to show how technology is being integrated in Australia."
        },

        {
            id: "g-mcq-322", topic: "wind-australia",
            q: "Why do geographers use Hornsdale and battery integration when studying wind power in Australia?",
            options: [
                "Show how technology is being integrated in Australia",
                "Show how the next phase of wind development may expand",
                "Show why good wind resource alone is not enough",
                "Use a clear Australian case study of rapid renewable uptake"
            ],
            answer: 0,
            explain: "Geographers use Hornsdale and battery integration to show how technology is being integrated in Australia. The example proves that storage can support higher renewable shares."
        },

        {
            id: "g-mcq-323", topic: "wind-australia",
            q: "Which note about Hornsdale and battery integration is MOST accurate?",
            options: [
                "Case studies make abstract discussion more specific and convincing",
                "The example proves that storage can support higher renewable shares",
                "Co-ordinated planning reduces bottlenecks and cost",
                "Shared land use can support both farm income and renewable energy"
            ],
            answer: 1,
            explain: "The example proves that storage can support higher renewable shares. This links to the pairing of wind generation with grid-scale batteries to improve reliability and fast response."
        },

        {
            id: "g-mcq-324", topic: "wind-australia",
            q: "Which statement best defines Renewable Energy Zones?",
            options: [
                "New Australian projects in declared offshore areas such as Gippsland, Hunter and Illawarra",
                "The ability for turbines to operate on agricultural land while grazing or cropping continues around them",
                "Limits in the network that can slow new projects or force output to be curtailed",
                "Planned areas where generation, storage and transmission are coordinated for lower-cost build-out"
            ],
            answer: 3,
            explain: "Renewable Energy Zones means planned areas where generation, storage and transmission are coordinated for lower-cost build-out. It matters because co-ordinated planning reduces bottlenecks and cost."
        },

        {
            id: "g-mcq-325", topic: "wind-australia",
            q: "Which scenario best shows Renewable Energy Zones in action?",
            options: [
                "NSW invests in REZs so wind, solar and storage can connect more efficiently",
                "Regional towns gain crane work, road upgrades, accommodation demand and technician roles during a build",
                "South Australia often records very high renewable shares because wind supplies a major part of demand",
                "Students compare different operating wind farms across Victoria, South Australia and Queensland"
            ],
            answer: 0,
            explain: "The best example is NSW invests in REZs so wind, solar and storage can connect more efficiently. Geographers use this idea to explain how governments organise renewable growth."
        },

        {
            id: "g-mcq-326", topic: "wind-australia",
            q: "Why do geographers use Renewable Energy Zones when studying wind power in Australia?",
            options: [
                "Explain why land-use conflict is often lower than assumed",
                "Explain how governments organise renewable growth",
                "Connect wind projects to local economic change",
                "Ground classwork in named Australian examples"
            ],
            answer: 1,
            explain: "Geographers use Renewable Energy Zones to explain how governments organise renewable growth. Co-ordinated planning reduces bottlenecks and cost."
        },

        {
            id: "g-mcq-327", topic: "wind-australia",
            q: "Which note about Renewable Energy Zones is MOST accurate?",
            options: [
                "The example proves that storage can support higher renewable shares",
                "Offshore wind broadens Australia’s future renewable options",
                "Co-ordinated planning reduces bottlenecks and cost",
                "Network capacity is a major factor in project timing and cost"
            ],
            answer: 2,
            explain: "Co-ordinated planning reduces bottlenecks and cost. This links to planned areas where generation, storage and transmission are coordinated for lower-cost build-out."
        },

        {
            id: "g-mcq-328", topic: "wind-australia",
            q: "Which statement best defines offshore wind proposals?",
            options: [
                "New Australian projects in declared offshore areas such as Gippsland, Hunter and Illawarra",
                "The ability for turbines to operate on agricultural land while grazing or cropping continues around them",
                "Limits in the network that can slow new projects or force output to be curtailed",
                "The work created through construction, maintenance, transport and local services linked to wind projects"
            ],
            answer: 0,
            explain: "Offshore wind proposals means new Australian projects in declared offshore areas such as Gippsland, Hunter and Illawarra. It matters because offshore wind broadens Australia’s future renewable options."
        },

        {
            id: "g-mcq-329", topic: "wind-australia",
            q: "Which scenario best shows offshore wind proposals in action?",
            options: [
                "South Australia often records very high renewable shares because wind supplies a major part of demand",
                "A proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres",
                "Students compare different operating wind farms across Victoria, South Australia and Queensland",
                "Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity"
            ],
            answer: 1,
            explain: "The best example is a proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres. Geographers use this idea to show how the next phase of wind development may expand."
        },

        {
            id: "g-mcq-330", topic: "wind-australia",
            q: "Why do geographers use offshore wind proposals when studying wind power in Australia?",
            options: [
                "Show why good wind resource alone is not enough",
                "Use a clear Australian case study of rapid renewable uptake",
                "Show how the next phase of wind development may expand",
                "Show how technology is being integrated in Australia"
            ],
            answer: 2,
            explain: "Geographers use offshore wind proposals to show how the next phase of wind development may expand. Offshore wind broadens Australia’s future renewable options."
        },

        {
            id: "g-mcq-331", topic: "wind-australia",
            q: "Which note about offshore wind proposals is MOST accurate?",
            options: [
                "Co-ordinated planning reduces bottlenecks and cost",
                "Shared land use can support both farm income and renewable energy",
                "Jobs and spending often shape community support for projects",
                "Offshore wind broadens Australia’s future renewable options"
            ],
            answer: 3,
            explain: "Offshore wind broadens Australia’s future renewable options. This links to new Australian projects in declared offshore areas such as Gippsland, Hunter and Illawarra."
        },

        {
            id: "g-mcq-332", topic: "wind-australia",
            q: "Which statement best defines coexistence with farming?",
            options: [
                "Limits in the network that can slow new projects or force output to be curtailed",
                "The ability for turbines to operate on agricultural land while grazing or cropping continues around them",
                "The work created through construction, maintenance, transport and local services linked to wind projects",
                "The strong contribution of wind to South Australia’s electricity mix compared with most other states"
            ],
            answer: 1,
            explain: "Coexistence with farming means the ability for turbines to operate on agricultural land while grazing or cropping continues around them. It matters because shared land use can support both farm income and renewable energy."
        },

        {
            id: "g-mcq-333", topic: "wind-australia",
            q: "Which scenario best shows coexistence with farming in action?",
            options: [
                "Students compare different operating wind farms across Victoria, South Australia and Queensland",
                "Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity",
                "Sheep continue grazing between turbines while the landholder receives lease income",
                "NSW invests in REZs so wind, solar and storage can connect more efficiently"
            ],
            answer: 2,
            explain: "The best example is sheep continue grazing between turbines while the landholder receives lease income. Geographers use this idea to explain why land-use conflict is often lower than assumed."
        },

        {
            id: "g-mcq-334", topic: "wind-australia",
            q: "Why do geographers use coexistence with farming when studying wind power in Australia?",
            options: [
                "Connect wind projects to local economic change",
                "Ground classwork in named Australian examples",
                "Explain how governments organise renewable growth",
                "Explain why land-use conflict is often lower than assumed"
            ],
            answer: 3,
            explain: "Geographers use coexistence with farming to explain why land-use conflict is often lower than assumed. Shared land use can support both farm income and renewable energy."
        },

        {
            id: "g-mcq-335", topic: "wind-australia",
            q: "Which note about coexistence with farming is MOST accurate?",
            options: [
                "Shared land use can support both farm income and renewable energy",
                "Offshore wind broadens Australia’s future renewable options",
                "Network capacity is a major factor in project timing and cost",
                "It shows that high wind penetration is already possible with the right grid support"
            ],
            answer: 0,
            explain: "Shared land use can support both farm income and renewable energy. This links to the ability for turbines to operate on agricultural land while grazing or cropping continues around them."
        },

        {
            id: "g-mcq-336", topic: "wind-australia",
            q: "Which statement best defines transmission constraints?",
            options: [
                "The work created through construction, maintenance, transport and local services linked to wind projects",
                "The strong contribution of wind to South Australia’s electricity mix compared with most other states",
                "Limits in the network that can slow new projects or force output to be curtailed",
                "Large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill"
            ],
            answer: 2,
            explain: "Transmission constraints means limits in the network that can slow new projects or force output to be curtailed. It matters because network capacity is a major factor in project timing and cost."
        },

        {
            id: "g-mcq-337", topic: "wind-australia",
            q: "Which scenario best shows transmission constraints in action?",
            options: [
                "Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity",
                "NSW invests in REZs so wind, solar and storage can connect more efficiently",
                "A proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres",
                "A windy region cannot connect more turbines until new transmission lines are built"
            ],
            answer: 3,
            explain: "The best example is a windy region cannot connect more turbines until new transmission lines are built. Geographers use this idea to show why good wind resource alone is not enough."
        },

        {
            id: "g-mcq-338", topic: "wind-australia",
            q: "Why do geographers use transmission constraints when studying wind power in Australia?",
            options: [
                "Show why good wind resource alone is not enough",
                "Use a clear Australian case study of rapid renewable uptake",
                "Show how technology is being integrated in Australia",
                "Show how the next phase of wind development may expand"
            ],
            answer: 0,
            explain: "Geographers use transmission constraints to show why good wind resource alone is not enough. Network capacity is a major factor in project timing and cost."
        },

        {
            id: "g-mcq-339", topic: "wind-australia",
            q: "Which note about transmission constraints is MOST accurate?",
            options: [
                "Shared land use can support both farm income and renewable energy",
                "Network capacity is a major factor in project timing and cost",
                "Jobs and spending often shape community support for projects",
                "Case studies make abstract discussion more specific and convincing"
            ],
            answer: 1,
            explain: "Network capacity is a major factor in project timing and cost. This links to limits in the network that can slow new projects or force output to be curtailed."
        },

        {
            id: "g-mcq-340", topic: "wind-australia",
            q: "Which statement best defines regional jobs and supply chains?",
            options: [
                "The strong contribution of wind to South Australia’s electricity mix compared with most other states",
                "Large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill",
                "The pairing of wind generation with grid-scale batteries to improve reliability and fast response",
                "The work created through construction, maintenance, transport and local services linked to wind projects"
            ],
            answer: 3,
            explain: "Regional jobs and supply chains means the work created through construction, maintenance, transport and local services linked to wind projects. It matters because jobs and spending often shape community support for projects."
        },

        {
            id: "g-mcq-341", topic: "wind-australia",
            q: "Which scenario best shows regional jobs and supply chains in action?",
            options: [
                "Regional towns gain crane work, road upgrades, accommodation demand and technician roles during a build",
                "NSW invests in REZs so wind, solar and storage can connect more efficiently",
                "A proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres",
                "Sheep continue grazing between turbines while the landholder receives lease income"
            ],
            answer: 0,
            explain: "The best example is regional towns gain crane work, road upgrades, accommodation demand and technician roles during a build. Geographers use this idea to connect wind projects to local economic change."
        },

        {
            id: "g-mcq-342", topic: "wind-australia",
            q: "Why do geographers use regional jobs and supply chains when studying wind power in Australia?",
            options: [
                "Ground classwork in named Australian examples",
                "Connect wind projects to local economic change",
                "Explain how governments organise renewable growth",
                "Explain why land-use conflict is often lower than assumed"
            ],
            answer: 1,
            explain: "Geographers use regional jobs and supply chains to connect wind projects to local economic change. Jobs and spending often shape community support for projects."
        },


        /* ===== Wind — environmental impacts & management ===== */
        {
            id: "g-mcq-343", topic: "wind-environmental",
            q: "Which statement best defines low lifecycle emissions?",
            options: [
                "The very small greenhouse-gas emissions from wind power compared with coal and gas across its full life cycle",
                "The fact that wind turbines use very little water while generating electricity",
                "The monitoring and mitigation of wildlife collisions through siting, curtailment and technology",
                "Careful placement of turbines and roads to minimise habitat loss and disturbance"
            ],
            answer: 0,
            explain: "Low lifecycle emissions means the very small greenhouse-gas emissions from wind power compared with coal and gas across its full life cycle. It matters because climate benefits are the main reason wind is central to environmental change management."
        },

        {
            id: "g-mcq-344", topic: "wind-environmental",
            q: "Which scenario best shows low lifecycle emissions in action?",
            options: [
                "A project uses setback distances and monitoring to keep nearby homes within planning limits",
                "Replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector",
                "Older blades are sent for reuse, reprocessing or cement co-processing instead of simple landfill",
                "An EIS examines threatened species, creek crossings, access roads and nearby projects before approval"
            ],
            answer: 1,
            explain: "The best example is replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector. Geographers use this idea to judge wind as a climate-response strategy."
        },

        {
            id: "g-mcq-345", topic: "wind-environmental",
            q: "Why do geographers use low lifecycle emissions when studying environmental management of wind power?",
            options: [
                "Show that environmental impacts can be managed rather than ignored",
                "Explain how local amenity issues are assessed during planning",
                "Judge wind as a climate-response strategy",
                "Show how environmental decisions are made before construction"
            ],
            answer: 2,
            explain: "Geographers use low lifecycle emissions to judge wind as a climate-response strategy. Climate benefits are the main reason wind is central to environmental change management."
        },

        {
            id: "g-mcq-346", topic: "wind-environmental",
            q: "Which note about low lifecycle emissions is MOST accurate?",
            options: [
                "Long-term planning reduces the legacy of infrastructure on the landscape",
                "Low water use is a major advantage in dry regions such as much of Australia",
                "Small design changes can greatly lower environmental harm",
                "Climate benefits are the main reason wind is central to environmental change management"
            ],
            answer: 3,
            explain: "Climate benefits are the main reason wind is central to environmental change management. This links to the very small greenhouse-gas emissions from wind power compared with coal and gas across its full life cycle."
        },

        {
            id: "g-mcq-347", topic: "wind-environmental",
            q: "Which statement best defines low operational water use?",
            options: [
                "The monitoring and mitigation of wildlife collisions through siting, curtailment and technology",
                "The fact that wind turbines use very little water while generating electricity",
                "Careful placement of turbines and roads to minimise habitat loss and disturbance",
                "Setbacks and design responses that reduce local impacts from sound and moving shadows"
            ],
            answer: 1,
            explain: "Low operational water use means the fact that wind turbines use very little water while generating electricity. It matters because low water use is a major advantage in dry regions such as much of Australia."
        },

        {
            id: "g-mcq-348", topic: "wind-environmental",
            q: "Which scenario best shows low operational water use in action?",
            options: [
                "Older blades are sent for reuse, reprocessing or cement co-processing instead of simple landfill",
                "An EIS examines threatened species, creek crossings, access roads and nearby projects before approval",
                "A wind farm keeps producing during drought without needing cooling water like a thermal power station",
                "Roads are repaired, equipment removed and disturbed areas replanted after a project closes or is upgraded"
            ],
            answer: 2,
            explain: "The best example is a wind farm keeps producing during drought without needing cooling water like a thermal power station. Geographers use this idea to compare wind with water-intensive energy sources."
        },

        {
            id: "g-mcq-349", topic: "wind-environmental",
            q: "Why do geographers use low operational water use when studying environmental management of wind power?",
            options: [
                "Reduce local ecosystem damage during construction",
                "Apply lifecycle thinking to renewable technology",
                "Consider the whole life of a wind project",
                "Compare wind with water-intensive energy sources"
            ],
            answer: 3,
            explain: "Geographers use low operational water use to compare wind with water-intensive energy sources. Low water use is a major advantage in dry regions such as much of Australia."
        },

        {
            id: "g-mcq-350", topic: "wind-environmental",
            q: "Which note about low operational water use is MOST accurate?",
            options: [
                "Low water use is a major advantage in dry regions such as much of Australia",
                "Climate benefits are the main reason wind is central to environmental change management",
                "Biodiversity protection is essential for social licence and ecological health",
                "Managing local impacts helps balance climate benefits with community wellbeing"
            ],
            answer: 0,
            explain: "Low water use is a major advantage in dry regions such as much of Australia. This links to the fact that wind turbines use very little water while generating electricity."
        },

        {
            id: "g-mcq-351", topic: "wind-environmental",
            q: "Which statement best defines bird and bat strike management?",
            options: [
                "Careful placement of turbines and roads to minimise habitat loss and disturbance",
                "Setbacks and design responses that reduce local impacts from sound and moving shadows",
                "The monitoring and mitigation of wildlife collisions through siting, curtailment and technology",
                "The challenge of using steel, concrete and composite blades and managing them at end of life"
            ],
            answer: 2,
            explain: "Bird and bat strike management means the monitoring and mitigation of wildlife collisions through siting, curtailment and technology. It matters because biodiversity protection is essential for social licence and ecological health."
        },

        {
            id: "g-mcq-352", topic: "wind-environmental",
            q: "Which scenario best shows bird and bat strike management in action?",
            options: [
                "An EIS examines threatened species, creek crossings, access roads and nearby projects before approval",
                "Roads are repaired, equipment removed and disturbed areas replanted after a project closes or is upgraded",
                "Replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector",
                "Turbines may be slowed during high-risk migration periods to reduce bat deaths"
            ],
            answer: 3,
            explain: "The best example is turbines may be slowed during high-risk migration periods to reduce bat deaths. Geographers use this idea to show that environmental impacts can be managed rather than ignored."
        },

        {
            id: "g-mcq-353", topic: "wind-environmental",
            q: "Why do geographers use bird and bat strike management when studying environmental management of wind power?",
            options: [
                "Show that environmental impacts can be managed rather than ignored",
                "Explain how local amenity issues are assessed during planning",
                "Show how environmental decisions are made before construction",
                "Judge wind as a climate-response strategy"
            ],
            answer: 0,
            explain: "Geographers use bird and bat strike management to show that environmental impacts can be managed rather than ignored. Biodiversity protection is essential for social licence and ecological health."
        },

        {
            id: "g-mcq-354", topic: "wind-environmental",
            q: "Which note about bird and bat strike management is MOST accurate?",
            options: [
                "Low water use is a major advantage in dry regions such as much of Australia",
                "Biodiversity protection is essential for social licence and ecological health",
                "Small design changes can greatly lower environmental harm",
                "Strong environmental performance includes manufacturing and decommissioning as well as operation"
            ],
            answer: 1,
            explain: "Biodiversity protection is essential for social licence and ecological health. This links to the monitoring and mitigation of wildlife collisions through siting, curtailment and technology."
        },

        {
            id: "g-mcq-355", topic: "wind-environmental",
            q: "Which statement best defines vegetation clearing and micro-siting?",
            options: [
                "Setbacks and design responses that reduce local impacts from sound and moving shadows",
                "The challenge of using steel, concrete and composite blades and managing them at end of life",
                "The formal process of checking likely effects on biodiversity, land, water, heritage and cumulative impacts",
                "Careful placement of turbines and roads to minimise habitat loss and disturbance"
            ],
            answer: 3,
            explain: "Vegetation clearing and micro-siting means careful placement of turbines and roads to minimise habitat loss and disturbance. It matters because small design changes can greatly lower environmental harm."
        },

        {
            id: "g-mcq-356", topic: "wind-environmental",
            q: "Which scenario best shows vegetation clearing and micro-siting in action?",
            options: [
                "Developers shift a turbine a short distance to avoid sensitive native vegetation",
                "Roads are repaired, equipment removed and disturbed areas replanted after a project closes or is upgraded",
                "Replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector",
                "A wind farm keeps producing during drought without needing cooling water like a thermal power station"
            ],
            answer: 0,
            explain: "The best example is developers shift a turbine a short distance to avoid sensitive native vegetation. Geographers use this idea to reduce local ecosystem damage during construction."
        },

        {
            id: "g-mcq-357", topic: "wind-environmental",
            q: "Why do geographers use vegetation clearing and micro-siting when studying environmental management of wind power?",
            options: [
                "Apply lifecycle thinking to renewable technology",
                "Reduce local ecosystem damage during construction",
                "Consider the whole life of a wind project",
                "Compare wind with water-intensive energy sources"
            ],
            answer: 1,
            explain: "Geographers use vegetation clearing and micro-siting to reduce local ecosystem damage during construction. Small design changes can greatly lower environmental harm."
        },

        {
            id: "g-mcq-358", topic: "wind-environmental",
            q: "Which note about vegetation clearing and micro-siting is MOST accurate?",
            options: [
                "Biodiversity protection is essential for social licence and ecological health",
                "Managing local impacts helps balance climate benefits with community wellbeing",
                "Small design changes can greatly lower environmental harm",
                "Good assessment helps avoid or reduce harm before it occurs"
            ],
            answer: 2,
            explain: "Small design changes can greatly lower environmental harm. This links to careful placement of turbines and roads to minimise habitat loss and disturbance."
        },

        {
            id: "g-mcq-359", topic: "wind-environmental",
            q: "Which statement best defines noise and shadow flicker management?",
            options: [
                "Setbacks and design responses that reduce local impacts from sound and moving shadows",
                "The challenge of using steel, concrete and composite blades and managing them at end of life",
                "The formal process of checking likely effects on biodiversity, land, water, heritage and cumulative impacts",
                "The removal, repowering or restoration of sites when turbines reach the end of their life"
            ],
            answer: 0,
            explain: "Noise and shadow flicker management means setbacks and design responses that reduce local impacts from sound and moving shadows. It matters because managing local impacts helps balance climate benefits with community wellbeing."
        },

        {
            id: "g-mcq-360", topic: "wind-environmental",
            q: "Which scenario best shows noise and shadow flicker management in action?",
            options: [
                "Replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector",
                "A project uses setback distances and monitoring to keep nearby homes within planning limits",
                "A wind farm keeps producing during drought without needing cooling water like a thermal power station",
                "Turbines may be slowed during high-risk migration periods to reduce bat deaths"
            ],
            answer: 1,
            explain: "The best example is a project uses setback distances and monitoring to keep nearby homes within planning limits. Geographers use this idea to explain how local amenity issues are assessed during planning."
        },

        {
            id: "g-mcq-361", topic: "wind-environmental",
            q: "Why do geographers use noise and shadow flicker management when studying environmental management of wind power?",
            options: [
                "Show how environmental decisions are made before construction",
                "Judge wind as a climate-response strategy",
                "Explain how local amenity issues are assessed during planning",
                "Show that environmental impacts can be managed rather than ignored"
            ],
            answer: 2,
            explain: "Geographers use noise and shadow flicker management to explain how local amenity issues are assessed during planning. Managing local impacts helps balance climate benefits with community wellbeing."
        },

        {
            id: "g-mcq-362", topic: "wind-environmental",
            q: "Which note about noise and shadow flicker management is MOST accurate?",
            options: [
                "Small design changes can greatly lower environmental harm",
                "Strong environmental performance includes manufacturing and decommissioning as well as operation",
                "Long-term planning reduces the legacy of infrastructure on the landscape",
                "Managing local impacts helps balance climate benefits with community wellbeing"
            ],
            answer: 3,
            explain: "Managing local impacts helps balance climate benefits with community wellbeing. This links to setbacks and design responses that reduce local impacts from sound and moving shadows."
        },

        {
            id: "g-mcq-363", topic: "wind-environmental",
            q: "Which statement best defines materials and blade recycling?",
            options: [
                "The formal process of checking likely effects on biodiversity, land, water, heritage and cumulative impacts",
                "The challenge of using steel, concrete and composite blades and managing them at end of life",
                "The removal, repowering or restoration of sites when turbines reach the end of their life",
                "The very small greenhouse-gas emissions from wind power compared with coal and gas across its full life cycle"
            ],
            answer: 1,
            explain: "Materials and blade recycling means the challenge of using steel, concrete and composite blades and managing them at end of life. It matters because strong environmental performance includes manufacturing and decommissioning as well as operation."
        },

        {
            id: "g-mcq-364", topic: "wind-environmental",
            q: "Which scenario best shows materials and blade recycling in action?",
            options: [
                "A wind farm keeps producing during drought without needing cooling water like a thermal power station",
                "Turbines may be slowed during high-risk migration periods to reduce bat deaths",
                "Older blades are sent for reuse, reprocessing or cement co-processing instead of simple landfill",
                "Developers shift a turbine a short distance to avoid sensitive native vegetation"
            ],
            answer: 2,
            explain: "The best example is older blades are sent for reuse, reprocessing or cement co-processing instead of simple landfill. Geographers use this idea to apply lifecycle thinking to renewable technology."
        },

        {
            id: "g-mcq-365", topic: "wind-environmental",
            q: "Why do geographers use materials and blade recycling when studying environmental management of wind power?",
            options: [
                "Consider the whole life of a wind project",
                "Compare wind with water-intensive energy sources",
                "Reduce local ecosystem damage during construction",
                "Apply lifecycle thinking to renewable technology"
            ],
            answer: 3,
            explain: "Geographers use materials and blade recycling to apply lifecycle thinking to renewable technology. Strong environmental performance includes manufacturing and decommissioning as well as operation."
        },

        {
            id: "g-mcq-366", topic: "wind-environmental",
            q: "Which note about materials and blade recycling is MOST accurate?",
            options: [
                "Strong environmental performance includes manufacturing and decommissioning as well as operation",
                "Managing local impacts helps balance climate benefits with community wellbeing",
                "Good assessment helps avoid or reduce harm before it occurs",
                "Climate benefits are the main reason wind is central to environmental change management"
            ],
            answer: 0,
            explain: "Strong environmental performance includes manufacturing and decommissioning as well as operation. This links to the challenge of using steel, concrete and composite blades and managing them at end of life."
        },

        {
            id: "g-mcq-367", topic: "wind-environmental",
            q: "Which statement best defines environmental impact assessment?",
            options: [
                "The removal, repowering or restoration of sites when turbines reach the end of their life",
                "The very small greenhouse-gas emissions from wind power compared with coal and gas across its full life cycle",
                "The formal process of checking likely effects on biodiversity, land, water, heritage and cumulative impacts",
                "The fact that wind turbines use very little water while generating electricity"
            ],
            answer: 2,
            explain: "Environmental impact assessment means the formal process of checking likely effects on biodiversity, land, water, heritage and cumulative impacts. It matters because good assessment helps avoid or reduce harm before it occurs."
        },

        {
            id: "g-mcq-368", topic: "wind-environmental",
            q: "Which scenario best shows environmental impact assessment in action?",
            options: [
                "Turbines may be slowed during high-risk migration periods to reduce bat deaths",
                "Developers shift a turbine a short distance to avoid sensitive native vegetation",
                "A project uses setback distances and monitoring to keep nearby homes within planning limits",
                "An EIS examines threatened species, creek crossings, access roads and nearby projects before approval"
            ],
            answer: 3,
            explain: "The best example is an EIS examines threatened species, creek crossings, access roads and nearby projects before approval. Geographers use this idea to show how environmental decisions are made before construction."
        },

        {
            id: "g-mcq-369", topic: "wind-environmental",
            q: "Why do geographers use environmental impact assessment when studying environmental management of wind power?",
            options: [
                "Show how environmental decisions are made before construction",
                "Judge wind as a climate-response strategy",
                "Show that environmental impacts can be managed rather than ignored",
                "Explain how local amenity issues are assessed during planning"
            ],
            answer: 0,
            explain: "Geographers use environmental impact assessment to show how environmental decisions are made before construction. Good assessment helps avoid or reduce harm before it occurs."
        },

        {
            id: "g-mcq-370", topic: "wind-environmental",
            q: "Which note about environmental impact assessment is MOST accurate?",
            options: [
                "Strong environmental performance includes manufacturing and decommissioning as well as operation",
                "Good assessment helps avoid or reduce harm before it occurs",
                "Long-term planning reduces the legacy of infrastructure on the landscape",
                "Low water use is a major advantage in dry regions such as much of Australia"
            ],
            answer: 1,
            explain: "Good assessment helps avoid or reduce harm before it occurs. This links to the formal process of checking likely effects on biodiversity, land, water, heritage and cumulative impacts."
        },

        {
            id: "g-mcq-371", topic: "wind-environmental",
            q: "Which statement best defines decommissioning and rehabilitation?",
            options: [
                "The very small greenhouse-gas emissions from wind power compared with coal and gas across its full life cycle",
                "The fact that wind turbines use very little water while generating electricity",
                "The monitoring and mitigation of wildlife collisions through siting, curtailment and technology",
                "The removal, repowering or restoration of sites when turbines reach the end of their life"
            ],
            answer: 3,
            explain: "Decommissioning and rehabilitation means the removal, repowering or restoration of sites when turbines reach the end of their life. It matters because long-term planning reduces the legacy of infrastructure on the landscape."
        },

        {
            id: "g-mcq-372", topic: "wind-environmental",
            q: "Which scenario best shows decommissioning and rehabilitation in action?",
            options: [
                "Roads are repaired, equipment removed and disturbed areas replanted after a project closes or is upgraded",
                "Developers shift a turbine a short distance to avoid sensitive native vegetation",
                "A project uses setback distances and monitoring to keep nearby homes within planning limits",
                "Older blades are sent for reuse, reprocessing or cement co-processing instead of simple landfill"
            ],
            answer: 0,
            explain: "The best example is roads are repaired, equipment removed and disturbed areas replanted after a project closes or is upgraded. Geographers use this idea to consider the whole life of a wind project."
        },

        {
            id: "g-mcq-373", topic: "wind-environmental",
            q: "Why do geographers use decommissioning and rehabilitation when studying environmental management of wind power?",
            options: [
                "Compare wind with water-intensive energy sources",
                "Consider the whole life of a wind project",
                "Reduce local ecosystem damage during construction",
                "Apply lifecycle thinking to renewable technology"
            ],
            answer: 1,
            explain: "Geographers use decommissioning and rehabilitation to consider the whole life of a wind project. Long-term planning reduces the legacy of infrastructure on the landscape."
        },


        /* ===== Wind — community & stakeholder perspectives ===== */
        {
            id: "g-mcq-374", topic: "wind-perspectives",
            q: "Which statement best defines host farmer perspectives?",
            options: [
                "The view that turbines can provide lease income while allowing farming to continue",
                "The perspective that projects may affect views, noise, shadow flicker or local character",
                "The balance councils must strike between jobs, rates, road impacts and community expectations",
                "The view that well-sited wind farms are important for climate action but need strong biodiversity safeguards"
            ],
            answer: 0,
            explain: "Host farmer perspectives means the view that turbines can provide lease income while allowing farming to continue. It matters because host payments can improve resilience in agricultural communities."
        },

        {
            id: "g-mcq-375", topic: "wind-perspectives",
            q: "Which scenario best shows host farmer perspectives in action?",
            options: [
                "Tradespeople support wind projects because they create construction and maintenance work in regional areas",
                "A grazier supports a project because annual payments stabilise income through dry years",
                "Electricity users want more clean power but also expect blackouts to be avoided",
                "A tourism operator worries that a scenic ridgeline will look industrial after a project is built"
            ],
            answer: 1,
            explain: "The best example is a grazier supports a project because annual payments stabilise income through dry years. Geographers use this idea to show why some local landholders welcome wind farms."
        },

        {
            id: "g-mcq-376", topic: "wind-perspectives",
            q: "Why do geographers use host farmer perspectives when studying stakeholder perspectives on wind power?",
            options: [
                "Show how local government weighs benefits against disruption",
                "Connect energy change to employment and skills",
                "Show why some local landholders welcome wind farms",
                "Recognise that landscapes have economic and cultural meanings"
            ],
            answer: 2,
            explain: "Geographers use host farmer perspectives to show why some local landholders welcome wind farms. Host payments can improve resilience in agricultural communities."
        },

        {
            id: "g-mcq-377", topic: "wind-perspectives",
            q: "Which note about host farmer perspectives is MOST accurate?",
            options: [
                "Sharing benefits can improve fairness and long-term acceptance",
                "Social licence depends on taking lived experience seriously",
                "Support for wind is often conditional on good environmental management",
                "Host payments can improve resilience in agricultural communities"
            ],
            answer: 3,
            explain: "Host payments can improve resilience in agricultural communities. This links to the view that turbines can provide lease income while allowing farming to continue."
        },

        {
            id: "g-mcq-378", topic: "wind-perspectives",
            q: "Which statement best defines non-host neighbour concerns?",
            options: [
                "The balance councils must strike between jobs, rates, road impacts and community expectations",
                "The perspective that projects may affect views, noise, shadow flicker or local character",
                "The view that well-sited wind farms are important for climate action but need strong biodiversity safeguards",
                "The focus on safe jobs, training and a just transition from fossil-fuel industries"
            ],
            answer: 1,
            explain: "Non-host neighbour concerns means the perspective that projects may affect views, noise, shadow flicker or local character. It matters because social licence depends on taking lived experience seriously."
        },

        {
            id: "g-mcq-379", topic: "wind-perspectives",
            q: "Which scenario best shows non-host neighbour concerns in action?",
            options: [
                "Electricity users want more clean power but also expect blackouts to be avoided",
                "A tourism operator worries that a scenic ridgeline will look industrial after a project is built",
                "A nearby resident supports renewables in general but worries about several turbines visible from home",
                "A wind farm funds hall upgrades, scholarships and sporting equipment in nearby towns"
            ],
            answer: 2,
            explain: "The best example is a nearby resident supports renewables in general but worries about several turbines visible from home. Geographers use this idea to account for local amenity concerns in planning."
        },

        {
            id: "g-mcq-380", topic: "wind-perspectives",
            q: "Why do geographers use non-host neighbour concerns when studying stakeholder perspectives on wind power?",
            options: [
                "Bring a climate-and-conservation lens to debates",
                "Show why integration and reliability matter politically",
                "Show one way developers build social licence",
                "Account for local amenity concerns in planning"
            ],
            answer: 3,
            explain: "Geographers use non-host neighbour concerns to account for local amenity concerns in planning. Social licence depends on taking lived experience seriously."
        },

        {
            id: "g-mcq-381", topic: "wind-perspectives",
            q: "Which note about non-host neighbour concerns is MOST accurate?",
            options: [
                "Social licence depends on taking lived experience seriously",
                "Host payments can improve resilience in agricultural communities",
                "Councils often mediate between developers and residents",
                "People are more likely to back transition when they can see fair job pathways"
            ],
            answer: 0,
            explain: "Social licence depends on taking lived experience seriously. This links to the perspective that projects may affect views, noise, shadow flicker or local character."
        },

        {
            id: "g-mcq-382", topic: "wind-perspectives",
            q: "Which statement best defines local council perspectives?",
            options: [
                "The view that well-sited wind farms are important for climate action but need strong biodiversity safeguards",
                "The focus on safe jobs, training and a just transition from fossil-fuel industries",
                "The balance councils must strike between jobs, rates, road impacts and community expectations",
                "The interest in reliable supply and affordable prices as renewable shares increase"
            ],
            answer: 2,
            explain: "Local council perspectives means the balance councils must strike between jobs, rates, road impacts and community expectations. It matters because councils often mediate between developers and residents."
        },

        {
            id: "g-mcq-383", topic: "wind-perspectives",
            q: "Which scenario best shows local council perspectives in action?",
            options: [
                "A tourism operator worries that a scenic ridgeline will look industrial after a project is built",
                "A wind farm funds hall upgrades, scholarships and sporting equipment in nearby towns",
                "A grazier supports a project because annual payments stabilise income through dry years",
                "A council wants regional investment but also wants the developer to repair haulage roads"
            ],
            answer: 3,
            explain: "The best example is a council wants regional investment but also wants the developer to repair haulage roads. Geographers use this idea to show how local government weighs benefits against disruption."
        },

        {
            id: "g-mcq-384", topic: "wind-perspectives",
            q: "Why do geographers use local council perspectives when studying stakeholder perspectives on wind power?",
            options: [
                "Show how local government weighs benefits against disruption",
                "Connect energy change to employment and skills",
                "Recognise that landscapes have economic and cultural meanings",
                "Show why some local landholders welcome wind farms"
            ],
            answer: 0,
            explain: "Geographers use local council perspectives to show how local government weighs benefits against disruption. Councils often mediate between developers and residents."
        },

        {
            id: "g-mcq-385", topic: "wind-perspectives",
            q: "Which note about local council perspectives is MOST accurate?",
            options: [
                "Social licence depends on taking lived experience seriously",
                "Councils often mediate between developers and residents",
                "Support for wind is often conditional on good environmental management",
                "People judge projects by both environmental outcomes and energy security"
            ],
            answer: 1,
            explain: "Councils often mediate between developers and residents. This links to the balance councils must strike between jobs, rates, road impacts and community expectations."
        },

        {
            id: "g-mcq-386", topic: "wind-perspectives",
            q: "Which statement best defines environmental NGO perspectives?",
            options: [
                "The focus on safe jobs, training and a just transition from fossil-fuel industries",
                "The interest in reliable supply and affordable prices as renewable shares increase",
                "The view that turbines may change the visual identity of a place for visitors and residents",
                "The view that well-sited wind farms are important for climate action but need strong biodiversity safeguards"
            ],
            answer: 3,
            explain: "Environmental NGO perspectives means the view that well-sited wind farms are important for climate action but need strong biodiversity safeguards. It matters because support for wind is often conditional on good environmental management."
        },

        {
            id: "g-mcq-387", topic: "wind-perspectives",
            q: "Which scenario best shows environmental NGO perspectives in action?",
            options: [
                "An environmental group supports the project if threatened species are protected and monitoring is transparent",
                "A wind farm funds hall upgrades, scholarships and sporting equipment in nearby towns",
                "A grazier supports a project because annual payments stabilise income through dry years",
                "A nearby resident supports renewables in general but worries about several turbines visible from home"
            ],
            answer: 0,
            explain: "The best example is an environmental group supports the project if threatened species are protected and monitoring is transparent. Geographers use this idea to bring a climate-and-conservation lens to debates."
        },

        {
            id: "g-mcq-388", topic: "wind-perspectives",
            q: "Why do geographers use environmental NGO perspectives when studying stakeholder perspectives on wind power?",
            options: [
                "Show why integration and reliability matter politically",
                "Bring a climate-and-conservation lens to debates",
                "Show one way developers build social licence",
                "Account for local amenity concerns in planning"
            ],
            answer: 1,
            explain: "Geographers use environmental NGO perspectives to bring a climate-and-conservation lens to debates. Support for wind is often conditional on good environmental management."
        },

        {
            id: "g-mcq-389", topic: "wind-perspectives",
            q: "Which note about environmental NGO perspectives is MOST accurate?",
            options: [
                "Councils often mediate between developers and residents",
                "People are more likely to back transition when they can see fair job pathways",
                "Support for wind is often conditional on good environmental management",
                "Visual change can shape local attitudes even when broader benefits are accepted"
            ],
            answer: 2,
            explain: "Support for wind is often conditional on good environmental management. This links to the view that well-sited wind farms are important for climate action but need strong biodiversity safeguards."
        },

        {
            id: "g-mcq-390", topic: "wind-perspectives",
            q: "Which statement best defines worker and union perspectives?",
            options: [
                "The focus on safe jobs, training and a just transition from fossil-fuel industries",
                "The interest in reliable supply and affordable prices as renewable shares increase",
                "The view that turbines may change the visual identity of a place for visitors and residents",
                "Local grants or shared-value programs that return some project value to the surrounding community"
            ],
            answer: 0,
            explain: "Worker and union perspectives means the focus on safe jobs, training and a just transition from fossil-fuel industries. It matters because people are more likely to back transition when they can see fair job pathways."
        },

        {
            id: "g-mcq-391", topic: "wind-perspectives",
            q: "Which scenario best shows worker and union perspectives in action?",
            options: [
                "A grazier supports a project because annual payments stabilise income through dry years",
                "Tradespeople support wind projects because they create construction and maintenance work in regional areas",
                "A nearby resident supports renewables in general but worries about several turbines visible from home",
                "A council wants regional investment but also wants the developer to repair haulage roads"
            ],
            answer: 1,
            explain: "The best example is tradespeople support wind projects because they create construction and maintenance work in regional areas. Geographers use this idea to connect energy change to employment and skills."
        },

        {
            id: "g-mcq-392", topic: "wind-perspectives",
            q: "Why do geographers use worker and union perspectives when studying stakeholder perspectives on wind power?",
            options: [
                "Recognise that landscapes have economic and cultural meanings",
                "Show why some local landholders welcome wind farms",
                "Connect energy change to employment and skills",
                "Show how local government weighs benefits against disruption"
            ],
            answer: 2,
            explain: "Geographers use worker and union perspectives to connect energy change to employment and skills. People are more likely to back transition when they can see fair job pathways."
        },

        {
            id: "g-mcq-393", topic: "wind-perspectives",
            q: "Which note about worker and union perspectives is MOST accurate?",
            options: [
                "Support for wind is often conditional on good environmental management",
                "People judge projects by both environmental outcomes and energy security",
                "Sharing benefits can improve fairness and long-term acceptance",
                "People are more likely to back transition when they can see fair job pathways"
            ],
            answer: 3,
            explain: "People are more likely to back transition when they can see fair job pathways. This links to the focus on safe jobs, training and a just transition from fossil-fuel industries."
        },

        {
            id: "g-mcq-394", topic: "wind-perspectives",
            q: "Which statement best defines consumer and grid perspectives?",
            options: [
                "The view that turbines may change the visual identity of a place for visitors and residents",
                "The interest in reliable supply and affordable prices as renewable shares increase",
                "Local grants or shared-value programs that return some project value to the surrounding community",
                "The view that turbines can provide lease income while allowing farming to continue"
            ],
            answer: 1,
            explain: "Consumer and grid perspectives means the interest in reliable supply and affordable prices as renewable shares increase. It matters because people judge projects by both environmental outcomes and energy security."
        },

        {
            id: "g-mcq-395", topic: "wind-perspectives",
            q: "Which scenario best shows consumer and grid perspectives in action?",
            options: [
                "A nearby resident supports renewables in general but worries about several turbines visible from home",
                "A council wants regional investment but also wants the developer to repair haulage roads",
                "Electricity users want more clean power but also expect blackouts to be avoided",
                "An environmental group supports the project if threatened species are protected and monitoring is transparent"
            ],
            answer: 2,
            explain: "The best example is electricity users want more clean power but also expect blackouts to be avoided. Geographers use this idea to show why integration and reliability matter politically."
        },

        {
            id: "g-mcq-396", topic: "wind-perspectives",
            q: "Why do geographers use consumer and grid perspectives when studying stakeholder perspectives on wind power?",
            options: [
                "Show one way developers build social licence",
                "Account for local amenity concerns in planning",
                "Bring a climate-and-conservation lens to debates",
                "Show why integration and reliability matter politically"
            ],
            answer: 3,
            explain: "Geographers use consumer and grid perspectives to show why integration and reliability matter politically. People judge projects by both environmental outcomes and energy security."
        },

        {
            id: "g-mcq-397", topic: "wind-perspectives",
            q: "Which note about consumer and grid perspectives is MOST accurate?",
            options: [
                "People judge projects by both environmental outcomes and energy security",
                "People are more likely to back transition when they can see fair job pathways",
                "Visual change can shape local attitudes even when broader benefits are accepted",
                "Host payments can improve resilience in agricultural communities"
            ],
            answer: 0,
            explain: "People judge projects by both environmental outcomes and energy security. This links to the interest in reliable supply and affordable prices as renewable shares increase."
        },

        {
            id: "g-mcq-398", topic: "wind-perspectives",
            q: "Which statement best defines tourism and landscape perspectives?",
            options: [
                "Local grants or shared-value programs that return some project value to the surrounding community",
                "The view that turbines can provide lease income while allowing farming to continue",
                "The view that turbines may change the visual identity of a place for visitors and residents",
                "The perspective that projects may affect views, noise, shadow flicker or local character"
            ],
            answer: 2,
            explain: "Tourism and landscape perspectives means the view that turbines may change the visual identity of a place for visitors and residents. It matters because visual change can shape local attitudes even when broader benefits are accepted."
        },

        {
            id: "g-mcq-399", topic: "wind-perspectives",
            q: "Which scenario best shows tourism and landscape perspectives in action?",
            options: [
                "A council wants regional investment but also wants the developer to repair haulage roads",
                "An environmental group supports the project if threatened species are protected and monitoring is transparent",
                "Tradespeople support wind projects because they create construction and maintenance work in regional areas",
                "A tourism operator worries that a scenic ridgeline will look industrial after a project is built"
            ],
            answer: 3,
            explain: "The best example is a tourism operator worries that a scenic ridgeline will look industrial after a project is built. Geographers use this idea to recognise that landscapes have economic and cultural meanings."
        },

        {
            id: "g-mcq-400", topic: "wind-perspectives",
            q: "Why do geographers use tourism and landscape perspectives when studying stakeholder perspectives on wind power?",
            options: [
                "Recognise that landscapes have economic and cultural meanings",
                "Show why some local landholders welcome wind farms",
                "Show how local government weighs benefits against disruption",
                "Connect energy change to employment and skills"
            ],
            answer: 0,
            explain: "Geographers use tourism and landscape perspectives to recognise that landscapes have economic and cultural meanings. Visual change can shape local attitudes even when broader benefits are accepted."
        },

        {
            id: "g-mcq-401", topic: "wind-perspectives",
            q: "Which note about tourism and landscape perspectives is MOST accurate?",
            options: [
                "People judge projects by both environmental outcomes and energy security",
                "Visual change can shape local attitudes even when broader benefits are accepted",
                "Sharing benefits can improve fairness and long-term acceptance",
                "Social licence depends on taking lived experience seriously"
            ],
            answer: 1,
            explain: "Visual change can shape local attitudes even when broader benefits are accepted. This links to the view that turbines may change the visual identity of a place for visitors and residents."
        },

        {
            id: "g-mcq-402", topic: "wind-perspectives",
            q: "Which statement best defines community benefit funds?",
            options: [
                "The view that turbines can provide lease income while allowing farming to continue",
                "The perspective that projects may affect views, noise, shadow flicker or local character",
                "The balance councils must strike between jobs, rates, road impacts and community expectations",
                "Local grants or shared-value programs that return some project value to the surrounding community"
            ],
            answer: 3,
            explain: "Community benefit funds means local grants or shared-value programs that return some project value to the surrounding community. It matters because sharing benefits can improve fairness and long-term acceptance."
        },

        {
            id: "g-mcq-403", topic: "wind-perspectives",
            q: "Which scenario best shows community benefit funds in action?",
            options: [
                "A wind farm funds hall upgrades, scholarships and sporting equipment in nearby towns",
                "An environmental group supports the project if threatened species are protected and monitoring is transparent",
                "Tradespeople support wind projects because they create construction and maintenance work in regional areas",
                "Electricity users want more clean power but also expect blackouts to be avoided"
            ],
            answer: 0,
            explain: "The best example is a wind farm funds hall upgrades, scholarships and sporting equipment in nearby towns. Geographers use this idea to show one way developers build social licence."
        },

        {
            id: "g-mcq-404", topic: "wind-perspectives",
            q: "Why do geographers use community benefit funds when studying stakeholder perspectives on wind power?",
            options: [
                "Account for local amenity concerns in planning",
                "Show one way developers build social licence",
                "Bring a climate-and-conservation lens to debates",
                "Show why integration and reliability matter politically"
            ],
            answer: 1,
            explain: "Geographers use community benefit funds to show one way developers build social licence. Sharing benefits can improve fairness and long-term acceptance."
        },


        /* ===== Wind & Aboriginal Custodianship of Country ===== */
        {
            id: "g-mcq-405", topic: "wind-custodianship",
            q: "Which statement best defines Country as a living relationship?",
            options: [
                "The understanding that Country is a living system of people, place, law and responsibility rather than simply land",
                "The principle that Traditional Owners should receive full information early and make decisions without pressure",
                "The process of identifying significant places so project layout can avoid harm",
                "Formal plans that set out how heritage values will be identified, protected and monitored"
            ],
            answer: 0,
            explain: "Country as a living relationship means the understanding that Country is a living system of people, place, law and responsibility rather than simply land. It matters because this perspective changes how a project site is understood and managed."
        },

        {
            id: "g-mcq-406", topic: "wind-custodianship",
            q: "Which scenario best shows Country as a living relationship in action?",
            options: [
                "An Indigenous Land Use Agreement sets out how a renewable project may proceed on Country",
                "Traditional Owners explain that caring for Country involves cultural, spiritual and ecological obligations",
                "Rangers monitor species, erosion and revegetation around turbine pads and access tracks",
                "A renewable partnership includes jobs, contracting opportunities and a shared return over time"
            ],
            answer: 1,
            explain: "The best example is Traditional Owners explain that caring for Country involves cultural, spiritual and ecological obligations. Geographers use this idea to frame environmental management through Aboriginal knowledge and responsibility."
        },

        {
            id: "g-mcq-407", topic: "wind-custodianship",
            q: "Why do geographers use Country as a living relationship when studying Aboriginal Custodianship of Country in wind-power planning?",
            options: [
                "Link cultural heritage knowledge directly to planning choices",
                "Connect cultural authority with Australian law",
                "Frame environmental management through Aboriginal knowledge and responsibility",
                "Show that projects can move beyond simple compensation"
            ],
            answer: 2,
            explain: "Geographers use Country as a living relationship to frame environmental management through Aboriginal knowledge and responsibility. This perspective changes how a project site is understood and managed."
        },

        {
            id: "g-mcq-408", topic: "wind-custodianship",
            q: "Which note about Country as a living relationship is MOST accurate?",
            options: [
                "Ongoing governance helps ensure promises are carried into practice",
                "Genuine consent improves ethics, trust and project outcomes",
                "Good plans reduce risk and support ongoing protection",
                "This perspective changes how a project site is understood and managed"
            ],
            answer: 3,
            explain: "This perspective changes how a project site is understood and managed. This links to the understanding that Country is a living system of people, place, law and responsibility rather than simply land."
        },

        {
            id: "g-mcq-409", topic: "wind-custodianship",
            q: "Which statement best defines free, prior and informed consent?",
            options: [
                "The process of identifying significant places so project layout can avoid harm",
                "The principle that Traditional Owners should receive full information early and make decisions without pressure",
                "Formal plans that set out how heritage values will be identified, protected and monitored",
                "Legal frameworks and agreements that recognise rights and set conditions for access, benefit-sharing and protection"
            ],
            answer: 1,
            explain: "Free, prior and informed consent means the principle that Traditional Owners should receive full information early and make decisions without pressure. It matters because genuine consent improves ethics, trust and project outcomes."
        },

        {
            id: "g-mcq-410", topic: "wind-custodianship",
            q: "Which scenario best shows free, prior and informed consent in action?",
            options: [
                "Rangers monitor species, erosion and revegetation around turbine pads and access tracks",
                "A renewable partnership includes jobs, contracting opportunities and a shared return over time",
                "Consultation begins before project design is finalised and consent is sought before works proceed",
                "Traditional Owners sit on advisory or governance groups throughout the life of a project"
            ],
            answer: 2,
            explain: "The best example is consultation begins before project design is finalised and consent is sought before works proceed. Geographers use this idea to show what respectful decision-making looks like on Country."
        },

        {
            id: "g-mcq-411", topic: "wind-custodianship",
            q: "Why do geographers use free, prior and informed consent when studying Aboriginal Custodianship of Country in wind-power planning?",
            options: [
                "Translate cultural responsibility into clear project rules",
                "Show how Custodianship continues after approvals are granted",
                "Keep cultural authority active instead of limiting it to one-off consultation",
                "Show what respectful decision-making looks like on Country"
            ],
            answer: 3,
            explain: "Geographers use free, prior and informed consent to show what respectful decision-making looks like on Country. Genuine consent improves ethics, trust and project outcomes."
        },

        {
            id: "g-mcq-412", topic: "wind-custodianship",
            q: "Which note about free, prior and informed consent is MOST accurate?",
            options: [
                "Genuine consent improves ethics, trust and project outcomes",
                "This perspective changes how a project site is understood and managed",
                "Early mapping prevents avoidable damage to Country",
                "Agreements can provide clearer expectations for all parties"
            ],
            answer: 0,
            explain: "Genuine consent improves ethics, trust and project outcomes. This links to the principle that Traditional Owners should receive full information early and make decisions without pressure."
        },

        {
            id: "g-mcq-413", topic: "wind-custodianship",
            q: "Which statement best defines cultural mapping and site selection?",
            options: [
                "Formal plans that set out how heritage values will be identified, protected and monitored",
                "Legal frameworks and agreements that recognise rights and set conditions for access, benefit-sharing and protection",
                "The process of identifying significant places so project layout can avoid harm",
                "The involvement of Aboriginal rangers in weed control, biodiversity monitoring and site care"
            ],
            answer: 2,
            explain: "Cultural mapping and site selection means the process of identifying significant places so project layout can avoid harm. It matters because early mapping prevents avoidable damage to Country."
        },

        {
            id: "g-mcq-414", topic: "wind-custodianship",
            q: "Which scenario best shows cultural mapping and site selection in action?",
            options: [
                "A renewable partnership includes jobs, contracting opportunities and a shared return over time",
                "Traditional Owners sit on advisory or governance groups throughout the life of a project",
                "Traditional Owners explain that caring for Country involves cultural, spiritual and ecological obligations",
                "Turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners"
            ],
            answer: 3,
            explain: "The best example is turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners. Geographers use this idea to link cultural heritage knowledge directly to planning choices."
        },

        {
            id: "g-mcq-415", topic: "wind-custodianship",
            q: "Why do geographers use cultural mapping and site selection when studying Aboriginal Custodianship of Country in wind-power planning?",
            options: [
                "Link cultural heritage knowledge directly to planning choices",
                "Connect cultural authority with Australian law",
                "Show that projects can move beyond simple compensation",
                "Frame environmental management through Aboriginal knowledge and responsibility"
            ],
            answer: 0,
            explain: "Geographers use cultural mapping and site selection to link cultural heritage knowledge directly to planning choices. Early mapping prevents avoidable damage to Country."
        },

        {
            id: "g-mcq-416", topic: "wind-custodianship",
            q: "Which note about cultural mapping and site selection is MOST accurate?",
            options: [
                "Genuine consent improves ethics, trust and project outcomes",
                "Early mapping prevents avoidable damage to Country",
                "Good plans reduce risk and support ongoing protection",
                "Ongoing Indigenous management can improve environmental outcomes"
            ],
            answer: 1,
            explain: "Early mapping prevents avoidable damage to Country. This links to the process of identifying significant places so project layout can avoid harm."
        },

        {
            id: "g-mcq-417", topic: "wind-custodianship",
            q: "Which statement best defines Cultural Heritage Management Plans?",
            options: [
                "Legal frameworks and agreements that recognise rights and set conditions for access, benefit-sharing and protection",
                "The involvement of Aboriginal rangers in weed control, biodiversity monitoring and site care",
                "Arrangements that allow Traditional Owners to receive lasting economic value or an ownership stake in projects",
                "Formal plans that set out how heritage values will be identified, protected and monitored"
            ],
            answer: 3,
            explain: "Cultural Heritage Management Plans means formal plans that set out how heritage values will be identified, protected and monitored. It matters because good plans reduce risk and support ongoing protection."
        },

        {
            id: "g-mcq-418", topic: "wind-custodianship",
            q: "Which scenario best shows Cultural Heritage Management Plans in action?",
            options: [
                "Workers follow agreed procedures if cultural material is found during construction",
                "Traditional Owners sit on advisory or governance groups throughout the life of a project",
                "Traditional Owners explain that caring for Country involves cultural, spiritual and ecological obligations",
                "Consultation begins before project design is finalised and consent is sought before works proceed"
            ],
            answer: 0,
            explain: "The best example is workers follow agreed procedures if cultural material is found during construction. Geographers use this idea to translate cultural responsibility into clear project rules."
        },

        {
            id: "g-mcq-419", topic: "wind-custodianship",
            q: "Why do geographers use Cultural Heritage Management Plans when studying Aboriginal Custodianship of Country in wind-power planning?",
            options: [
                "Show how Custodianship continues after approvals are granted",
                "Translate cultural responsibility into clear project rules",
                "Keep cultural authority active instead of limiting it to one-off consultation",
                "Show what respectful decision-making looks like on Country"
            ],
            answer: 1,
            explain: "Geographers use Cultural Heritage Management Plans to translate cultural responsibility into clear project rules. Good plans reduce risk and support ongoing protection."
        },

        {
            id: "g-mcq-420", topic: "wind-custodianship",
            q: "Which note about Cultural Heritage Management Plans is MOST accurate?",
            options: [
                "Early mapping prevents avoidable damage to Country",
                "Agreements can provide clearer expectations for all parties",
                "Good plans reduce risk and support ongoing protection",
                "Fairer benefit-sharing supports long-term community wellbeing"
            ],
            answer: 2,
            explain: "Good plans reduce risk and support ongoing protection. This links to formal plans that set out how heritage values will be identified, protected and monitored."
        },

        {
            id: "g-mcq-421", topic: "wind-custodianship",
            q: "Which statement best defines native title and ILUAs?",
            options: [
                "Legal frameworks and agreements that recognise rights and set conditions for access, benefit-sharing and protection",
                "The involvement of Aboriginal rangers in weed control, biodiversity monitoring and site care",
                "Arrangements that allow Traditional Owners to receive lasting economic value or an ownership stake in projects",
                "Shared decision-making so Traditional Owners remain involved across planning, construction and operation"
            ],
            answer: 0,
            explain: "Native title and ILUAs means legal frameworks and agreements that recognise rights and set conditions for access, benefit-sharing and protection. It matters because agreements can provide clearer expectations for all parties."
        },

        {
            id: "g-mcq-422", topic: "wind-custodianship",
            q: "Which scenario best shows native title and ILUAs in action?",
            options: [
                "Traditional Owners explain that caring for Country involves cultural, spiritual and ecological obligations",
                "An Indigenous Land Use Agreement sets out how a renewable project may proceed on Country",
                "Consultation begins before project design is finalised and consent is sought before works proceed",
                "Turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners"
            ],
            answer: 1,
            explain: "The best example is an Indigenous Land Use Agreement sets out how a renewable project may proceed on Country. Geographers use this idea to connect cultural authority with Australian law."
        },

        {
            id: "g-mcq-423", topic: "wind-custodianship",
            q: "Why do geographers use native title and ILUAs when studying Aboriginal Custodianship of Country in wind-power planning?",
            options: [
                "Show that projects can move beyond simple compensation",
                "Frame environmental management through Aboriginal knowledge and responsibility",
                "Connect cultural authority with Australian law",
                "Link cultural heritage knowledge directly to planning choices"
            ],
            answer: 2,
            explain: "Geographers use native title and ILUAs to connect cultural authority with Australian law. Agreements can provide clearer expectations for all parties."
        },

        {
            id: "g-mcq-424", topic: "wind-custodianship",
            q: "Which note about native title and ILUAs is MOST accurate?",
            options: [
                "Good plans reduce risk and support ongoing protection",
                "Ongoing Indigenous management can improve environmental outcomes",
                "Ongoing governance helps ensure promises are carried into practice",
                "Agreements can provide clearer expectations for all parties"
            ],
            answer: 3,
            explain: "Agreements can provide clearer expectations for all parties. This links to legal frameworks and agreements that recognise rights and set conditions for access, benefit-sharing and protection."
        },

        {
            id: "g-mcq-425", topic: "wind-custodianship",
            q: "Which statement best defines Indigenous ranger monitoring?",
            options: [
                "Arrangements that allow Traditional Owners to receive lasting economic value or an ownership stake in projects",
                "The involvement of Aboriginal rangers in weed control, biodiversity monitoring and site care",
                "Shared decision-making so Traditional Owners remain involved across planning, construction and operation",
                "The understanding that Country is a living system of people, place, law and responsibility rather than simply land"
            ],
            answer: 1,
            explain: "Indigenous ranger monitoring means the involvement of Aboriginal rangers in weed control, biodiversity monitoring and site care. It matters because ongoing Indigenous management can improve environmental outcomes."
        },

        {
            id: "g-mcq-426", topic: "wind-custodianship",
            q: "Which scenario best shows Indigenous ranger monitoring in action?",
            options: [
                "Consultation begins before project design is finalised and consent is sought before works proceed",
                "Turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners",
                "Rangers monitor species, erosion and revegetation around turbine pads and access tracks",
                "Workers follow agreed procedures if cultural material is found during construction"
            ],
            answer: 2,
            explain: "The best example is rangers monitor species, erosion and revegetation around turbine pads and access tracks. Geographers use this idea to show how Custodianship continues after approvals are granted."
        },

        {
            id: "g-mcq-427", topic: "wind-custodianship",
            q: "Why do geographers use Indigenous ranger monitoring when studying Aboriginal Custodianship of Country in wind-power planning?",
            options: [
                "Keep cultural authority active instead of limiting it to one-off consultation",
                "Show what respectful decision-making looks like on Country",
                "Translate cultural responsibility into clear project rules",
                "Show how Custodianship continues after approvals are granted"
            ],
            answer: 3,
            explain: "Geographers use Indigenous ranger monitoring to show how Custodianship continues after approvals are granted. Ongoing Indigenous management can improve environmental outcomes."
        },

        {
            id: "g-mcq-428", topic: "wind-custodianship",
            q: "Which note about Indigenous ranger monitoring is MOST accurate?",
            options: [
                "Ongoing Indigenous management can improve environmental outcomes",
                "Agreements can provide clearer expectations for all parties",
                "Fairer benefit-sharing supports long-term community wellbeing",
                "This perspective changes how a project site is understood and managed"
            ],
            answer: 0,
            explain: "Ongoing Indigenous management can improve environmental outcomes. This links to the involvement of Aboriginal rangers in weed control, biodiversity monitoring and site care."
        },

        {
            id: "g-mcq-429", topic: "wind-custodianship",
            q: "Which statement best defines benefit-sharing and co-ownership?",
            options: [
                "Shared decision-making so Traditional Owners remain involved across planning, construction and operation",
                "The understanding that Country is a living system of people, place, law and responsibility rather than simply land",
                "Arrangements that allow Traditional Owners to receive lasting economic value or an ownership stake in projects",
                "The principle that Traditional Owners should receive full information early and make decisions without pressure"
            ],
            answer: 2,
            explain: "Benefit-sharing and co-ownership means arrangements that allow Traditional Owners to receive lasting economic value or an ownership stake in projects. It matters because fairer benefit-sharing supports long-term community wellbeing."
        },

        {
            id: "g-mcq-430", topic: "wind-custodianship",
            q: "Which scenario best shows benefit-sharing and co-ownership in action?",
            options: [
                "Turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners",
                "Workers follow agreed procedures if cultural material is found during construction",
                "An Indigenous Land Use Agreement sets out how a renewable project may proceed on Country",
                "A renewable partnership includes jobs, contracting opportunities and a shared return over time"
            ],
            answer: 3,
            explain: "The best example is a renewable partnership includes jobs, contracting opportunities and a shared return over time. Geographers use this idea to show that projects can move beyond simple compensation."
        },

        {
            id: "g-mcq-431", topic: "wind-custodianship",
            q: "Why do geographers use benefit-sharing and co-ownership when studying Aboriginal Custodianship of Country in wind-power planning?",
            options: [
                "Show that projects can move beyond simple compensation",
                "Frame environmental management through Aboriginal knowledge and responsibility",
                "Link cultural heritage knowledge directly to planning choices",
                "Connect cultural authority with Australian law"
            ],
            answer: 0,
            explain: "Geographers use benefit-sharing and co-ownership to show that projects can move beyond simple compensation. Fairer benefit-sharing supports long-term community wellbeing."
        },

        {
            id: "g-mcq-432", topic: "wind-custodianship",
            q: "Which note about benefit-sharing and co-ownership is MOST accurate?",
            options: [
                "Ongoing Indigenous management can improve environmental outcomes",
                "Fairer benefit-sharing supports long-term community wellbeing",
                "Ongoing governance helps ensure promises are carried into practice",
                "Genuine consent improves ethics, trust and project outcomes"
            ],
            answer: 1,
            explain: "Fairer benefit-sharing supports long-term community wellbeing. This links to arrangements that allow Traditional Owners to receive lasting economic value or an ownership stake in projects."
        },

        {
            id: "g-mcq-433", topic: "wind-custodianship",
            q: "Which statement best defines co-governance?",
            options: [
                "The understanding that Country is a living system of people, place, law and responsibility rather than simply land",
                "The principle that Traditional Owners should receive full information early and make decisions without pressure",
                "The process of identifying significant places so project layout can avoid harm",
                "Shared decision-making so Traditional Owners remain involved across planning, construction and operation"
            ],
            answer: 3,
            explain: "Co-governance means shared decision-making so Traditional Owners remain involved across planning, construction and operation. It matters because ongoing governance helps ensure promises are carried into practice."
        },

        {
            id: "g-mcq-434", topic: "wind-custodianship",
            q: "Which scenario best shows co-governance in action?",
            options: [
                "Traditional Owners sit on advisory or governance groups throughout the life of a project",
                "Workers follow agreed procedures if cultural material is found during construction",
                "An Indigenous Land Use Agreement sets out how a renewable project may proceed on Country",
                "Rangers monitor species, erosion and revegetation around turbine pads and access tracks"
            ],
            answer: 0,
            explain: "The best example is Traditional Owners sit on advisory or governance groups throughout the life of a project. Geographers use this idea to keep cultural authority active instead of limiting it to one-off consultation."
        },

        {
            id: "g-mcq-435", topic: "wind-custodianship",
            q: "Why do geographers use co-governance when studying Aboriginal Custodianship of Country in wind-power planning?",
            options: [
                "Show what respectful decision-making looks like on Country",
                "Keep cultural authority active instead of limiting it to one-off consultation",
                "Translate cultural responsibility into clear project rules",
                "Show how Custodianship continues after approvals are granted"
            ],
            answer: 1,
            explain: "Geographers use co-governance to keep cultural authority active instead of limiting it to one-off consultation. Ongoing governance helps ensure promises are carried into practice."
        },

        {
            id: "g-mcq-436", topic: "wind-custodianship",
            q: "Which note about co-governance is MOST accurate?",
            options: [
                "Fairer benefit-sharing supports long-term community wellbeing",
                "This perspective changes how a project site is understood and managed",
                "Ongoing governance helps ensure promises are carried into practice",
                "Early mapping prevents avoidable damage to Country"
            ],
            answer: 2,
            explain: "Ongoing governance helps ensure promises are carried into practice. This links to shared decision-making so Traditional Owners remain involved across planning, construction and operation."
        },


        /* ===== Wind — policy, transition & comparison ===== */
        {
            id: "g-mcq-437", topic: "wind-policy",
            q: "Which statement best defines policy certainty?",
            options: [
                "Clear long-term government signals that reduce risk for investors in renewable energy",
                "Australia’s national goal of reaching about 82 percent renewable electricity by 2030",
                "AEMO’s roadmap for transmission and generation investment across the electricity system",
                "The federal framework that allows offshore areas to be declared and licensed for wind projects"
            ],
            answer: 0,
            explain: "Policy certainty means clear long-term government signals that reduce risk for investors in renewable energy. It matters because uncertain policy can slow investment even when the wind resource is strong."
        },

        {
            id: "g-mcq-438", topic: "wind-policy",
            q: "Which scenario best shows policy certainty in action?",
            options: [
                "A developer must address biodiversity, heritage, noise and land-use issues before approval is granted",
                "Developers commit to new projects when they can see stable targets and rules for the next decade",
                "Households, batteries and industries shift energy use to better match windy periods",
                "Training and regional investment are directed to former coal communities as renewable projects expand"
            ],
            answer: 1,
            explain: "The best example is developers commit to new projects when they can see stable targets and rules for the next decade. Geographers use this idea to explain why policy settings influence build rates."
        },

        {
            id: "g-mcq-439", topic: "wind-policy",
            q: "Why do geographers use policy certainty when studying wind-energy policy and transition?",
            options: [
                "Show how system-wide planning supports wind growth",
                "Show how governments manage trade-offs in the transition",
                "Explain why policy settings influence build rates",
                "Connect climate policy to social fairness"
            ],
            answer: 2,
            explain: "Geographers use policy certainty to explain why policy settings influence build rates. Uncertain policy can slow investment even when the wind resource is strong."
        },

        {
            id: "g-mcq-440", topic: "wind-policy",
            q: "Which note about policy certainty is MOST accurate?",
            options: [
                "Diversity improves reliability and reduces over-reliance on a single pattern of generation",
                "Targets shape planning, markets and public debate",
                "Laws matter because they decide where and how projects can proceed",
                "Uncertain policy can slow investment even when the wind resource is strong"
            ],
            answer: 3,
            explain: "Uncertain policy can slow investment even when the wind resource is strong. This links to clear long-term government signals that reduce risk for investors in renewable energy."
        },

        {
            id: "g-mcq-441", topic: "wind-policy",
            q: "Which statement best defines the 82% renewable-electricity target?",
            options: [
                "AEMO’s roadmap for transmission and generation investment across the electricity system",
                "Australia’s national goal of reaching about 82 percent renewable electricity by 2030",
                "The federal framework that allows offshore areas to be declared and licensed for wind projects",
                "The mix of state and federal assessment rules that check whether projects are suitable"
            ],
            answer: 1,
            explain: "The 82% renewable-electricity target means Australia’s national goal of reaching about 82 percent renewable electricity by 2030. It matters because targets shape planning, markets and public debate."
        },

        {
            id: "g-mcq-442", topic: "wind-policy",
            q: "Which scenario best shows the 82% renewable-electricity target in action?",
            options: [
                "Households, batteries and industries shift energy use to better match windy periods",
                "Training and regional investment are directed to former coal communities as renewable projects expand",
                "Wind and solar projects are planned to help meet the 2030 electricity target",
                "Wind produces strongly overnight or in winter while solar peaks in daylight, so the mix is more balanced together"
            ],
            answer: 2,
            explain: "The best example is wind and solar projects are planned to help meet the 2030 electricity target. Geographers use this idea to connect individual projects to national transition goals."
        },

        {
            id: "g-mcq-443", topic: "wind-policy",
            q: "Why do geographers use the 82% renewable-electricity target when studying wind-energy policy and transition?",
            options: [
                "Explain how policy creates new development opportunities",
                "Show that wind policy is also about reliable system operation",
                "Compare wind with other technologies in the overall system",
                "Connect individual projects to national transition goals"
            ],
            answer: 3,
            explain: "Geographers use the 82% renewable-electricity target to connect individual projects to national transition goals. Targets shape planning, markets and public debate."
        },

        {
            id: "g-mcq-444", topic: "wind-policy",
            q: "Which note about the 82% renewable-electricity target is MOST accurate?",
            options: [
                "Targets shape planning, markets and public debate",
                "Uncertain policy can slow investment even when the wind resource is strong",
                "Wind projects need network planning as well as local approvals",
                "Strong approval systems help balance speed with environmental care"
            ],
            answer: 0,
            explain: "Targets shape planning, markets and public debate. This links to Australia’s national goal of reaching about 82 percent renewable electricity by 2030."
        },

        {
            id: "g-mcq-445", topic: "wind-policy",
            q: "Which statement best defines the Integrated System Plan?",
            options: [
                "The federal framework that allows offshore areas to be declared and licensed for wind projects",
                "The mix of state and federal assessment rules that check whether projects are suitable",
                "AEMO’s roadmap for transmission and generation investment across the electricity system",
                "The policy focus on batteries, pumped hydro and flexible demand to support variable renewables"
            ],
            answer: 2,
            explain: "The Integrated System Plan means AEMO’s roadmap for transmission and generation investment across the electricity system. It matters because wind projects need network planning as well as local approvals."
        },

        {
            id: "g-mcq-446", topic: "wind-policy",
            q: "Which scenario best shows the Integrated System Plan in action?",
            options: [
                "Training and regional investment are directed to former coal communities as renewable projects expand",
                "Wind produces strongly overnight or in winter while solar peaks in daylight, so the mix is more balanced together",
                "Developers commit to new projects when they can see stable targets and rules for the next decade",
                "New transmission corridors are identified so renewable zones can connect to demand centres"
            ],
            answer: 3,
            explain: "The best example is new transmission corridors are identified so renewable zones can connect to demand centres. Geographers use this idea to show how system-wide planning supports wind growth."
        },

        {
            id: "g-mcq-447", topic: "wind-policy",
            q: "Why do geographers use the Integrated System Plan when studying wind-energy policy and transition?",
            options: [
                "Show how system-wide planning supports wind growth",
                "Show how governments manage trade-offs in the transition",
                "Connect climate policy to social fairness",
                "Explain why policy settings influence build rates"
            ],
            answer: 0,
            explain: "Geographers use the Integrated System Plan to show how system-wide planning supports wind growth. Wind projects need network planning as well as local approvals."
        },

        {
            id: "g-mcq-448", topic: "wind-policy",
            q: "Which note about the Integrated System Plan is MOST accurate?",
            options: [
                "Targets shape planning, markets and public debate",
                "Wind projects need network planning as well as local approvals",
                "Laws matter because they decide where and how projects can proceed",
                "Firming policies reduce the risks of relying on variable generation alone"
            ],
            answer: 1,
            explain: "Wind projects need network planning as well as local approvals. This links to AEMO’s roadmap for transmission and generation investment across the electricity system."
        },

        {
            id: "g-mcq-449", topic: "wind-policy",
            q: "Which statement best defines offshore wind legislation?",
            options: [
                "The mix of state and federal assessment rules that check whether projects are suitable",
                "The policy focus on batteries, pumped hydro and flexible demand to support variable renewables",
                "The idea that workers and regions affected by fossil-fuel decline should gain fair support and new opportunities",
                "The federal framework that allows offshore areas to be declared and licensed for wind projects"
            ],
            answer: 3,
            explain: "Offshore wind legislation means the federal framework that allows offshore areas to be declared and licensed for wind projects. It matters because laws matter because they decide where and how projects can proceed."
        },

        {
            id: "g-mcq-450", topic: "wind-policy",
            q: "Which scenario best shows offshore wind legislation in action?",
            options: [
                "Declared areas off Gippsland, Hunter and Illawarra open the door to offshore proposals",
                "Wind produces strongly overnight or in winter while solar peaks in daylight, so the mix is more balanced together",
                "Developers commit to new projects when they can see stable targets and rules for the next decade",
                "Wind and solar projects are planned to help meet the 2030 electricity target"
            ],
            answer: 0,
            explain: "The best example is declared areas off Gippsland, Hunter and Illawarra open the door to offshore proposals. Geographers use this idea to explain how policy creates new development opportunities."
        },

        {
            id: "g-mcq-451", topic: "wind-policy",
            q: "Why do geographers use offshore wind legislation when studying wind-energy policy and transition?",
            options: [
                "Show that wind policy is also about reliable system operation",
                "Explain how policy creates new development opportunities",
                "Compare wind with other technologies in the overall system",
                "Connect individual projects to national transition goals"
            ],
            answer: 1,
            explain: "Geographers use offshore wind legislation to explain how policy creates new development opportunities. Laws matter because they decide where and how projects can proceed."
        },

        {
            id: "g-mcq-452", topic: "wind-policy",
            q: "Which note about offshore wind legislation is MOST accurate?",
            options: [
                "Wind projects need network planning as well as local approvals",
                "Strong approval systems help balance speed with environmental care",
                "Laws matter because they decide where and how projects can proceed",
                "Transitions are stronger when benefits and burdens are shared more fairly"
            ],
            answer: 2,
            explain: "Laws matter because they decide where and how projects can proceed. This links to the federal framework that allows offshore areas to be declared and licensed for wind projects."
        },

        {
            id: "g-mcq-453", topic: "wind-policy",
            q: "Which statement best defines planning and environmental approval?",
            options: [
                "The mix of state and federal assessment rules that check whether projects are suitable",
                "The policy focus on batteries, pumped hydro and flexible demand to support variable renewables",
                "The idea that workers and regions affected by fossil-fuel decline should gain fair support and new opportunities",
                "The approach of combining wind with solar, hydro, storage and some flexible backup instead of depending on one source"
            ],
            answer: 0,
            explain: "Planning and environmental approval means the mix of state and federal assessment rules that check whether projects are suitable. It matters because strong approval systems help balance speed with environmental care."
        },

        {
            id: "g-mcq-454", topic: "wind-policy",
            q: "Which scenario best shows planning and environmental approval in action?",
            options: [
                "Developers commit to new projects when they can see stable targets and rules for the next decade",
                "A developer must address biodiversity, heritage, noise and land-use issues before approval is granted",
                "Wind and solar projects are planned to help meet the 2030 electricity target",
                "New transmission corridors are identified so renewable zones can connect to demand centres"
            ],
            answer: 1,
            explain: "The best example is a developer must address biodiversity, heritage, noise and land-use issues before approval is granted. Geographers use this idea to show how governments manage trade-offs in the transition."
        },

        {
            id: "g-mcq-455", topic: "wind-policy",
            q: "Why do geographers use planning and environmental approval when studying wind-energy policy and transition?",
            options: [
                "Connect climate policy to social fairness",
                "Explain why policy settings influence build rates",
                "Show how governments manage trade-offs in the transition",
                "Show how system-wide planning supports wind growth"
            ],
            answer: 2,
            explain: "Geographers use planning and environmental approval to show how governments manage trade-offs in the transition. Strong approval systems help balance speed with environmental care."
        },

        {
            id: "g-mcq-456", topic: "wind-policy",
            q: "Which note about planning and environmental approval is MOST accurate?",
            options: [
                "Laws matter because they decide where and how projects can proceed",
                "Firming policies reduce the risks of relying on variable generation alone",
                "Diversity improves reliability and reduces over-reliance on a single pattern of generation",
                "Strong approval systems help balance speed with environmental care"
            ],
            answer: 3,
            explain: "Strong approval systems help balance speed with environmental care. This links to the mix of state and federal assessment rules that check whether projects are suitable."
        },

        {
            id: "g-mcq-457", topic: "wind-policy",
            q: "Which statement best defines storage and demand-side firming?",
            options: [
                "The idea that workers and regions affected by fossil-fuel decline should gain fair support and new opportunities",
                "The policy focus on batteries, pumped hydro and flexible demand to support variable renewables",
                "The approach of combining wind with solar, hydro, storage and some flexible backup instead of depending on one source",
                "Clear long-term government signals that reduce risk for investors in renewable energy"
            ],
            answer: 1,
            explain: "Storage and demand-side firming means the policy focus on batteries, pumped hydro and flexible demand to support variable renewables. It matters because firming policies reduce the risks of relying on variable generation alone."
        },

        {
            id: "g-mcq-458", topic: "wind-policy",
            q: "Which scenario best shows storage and demand-side firming in action?",
            options: [
                "Wind and solar projects are planned to help meet the 2030 electricity target",
                "New transmission corridors are identified so renewable zones can connect to demand centres",
                "Households, batteries and industries shift energy use to better match windy periods",
                "Declared areas off Gippsland, Hunter and Illawarra open the door to offshore proposals"
            ],
            answer: 2,
            explain: "The best example is households, batteries and industries shift energy use to better match windy periods. Geographers use this idea to show that wind policy is also about reliable system operation."
        },

        {
            id: "g-mcq-459", topic: "wind-policy",
            q: "Why do geographers use storage and demand-side firming when studying wind-energy policy and transition?",
            options: [
                "Compare wind with other technologies in the overall system",
                "Connect individual projects to national transition goals",
                "Explain how policy creates new development opportunities",
                "Show that wind policy is also about reliable system operation"
            ],
            answer: 3,
            explain: "Geographers use storage and demand-side firming to show that wind policy is also about reliable system operation. Firming policies reduce the risks of relying on variable generation alone."
        },

        {
            id: "g-mcq-460", topic: "wind-policy",
            q: "Which note about storage and demand-side firming is MOST accurate?",
            options: [
                "Firming policies reduce the risks of relying on variable generation alone",
                "Strong approval systems help balance speed with environmental care",
                "Transitions are stronger when benefits and burdens are shared more fairly",
                "Uncertain policy can slow investment even when the wind resource is strong"
            ],
            answer: 0,
            explain: "Firming policies reduce the risks of relying on variable generation alone. This links to the policy focus on batteries, pumped hydro and flexible demand to support variable renewables."
        },

        {
            id: "g-mcq-461", topic: "wind-policy",
            q: "Which statement best defines just transition?",
            options: [
                "The approach of combining wind with solar, hydro, storage and some flexible backup instead of depending on one source",
                "Clear long-term government signals that reduce risk for investors in renewable energy",
                "The idea that workers and regions affected by fossil-fuel decline should gain fair support and new opportunities",
                "Australia’s national goal of reaching about 82 percent renewable electricity by 2030"
            ],
            answer: 2,
            explain: "Just transition means the idea that workers and regions affected by fossil-fuel decline should gain fair support and new opportunities. It matters because transitions are stronger when benefits and burdens are shared more fairly."
        },

        {
            id: "g-mcq-462", topic: "wind-policy",
            q: "Which scenario best shows just transition in action?",
            options: [
                "New transmission corridors are identified so renewable zones can connect to demand centres",
                "Declared areas off Gippsland, Hunter and Illawarra open the door to offshore proposals",
                "A developer must address biodiversity, heritage, noise and land-use issues before approval is granted",
                "Training and regional investment are directed to former coal communities as renewable projects expand"
            ],
            answer: 3,
            explain: "The best example is training and regional investment are directed to former coal communities as renewable projects expand. Geographers use this idea to connect climate policy to social fairness."
        },

        {
            id: "g-mcq-463", topic: "wind-policy",
            q: "Why do geographers use just transition when studying wind-energy policy and transition?",
            options: [
                "Connect climate policy to social fairness",
                "Explain why policy settings influence build rates",
                "Show how system-wide planning supports wind growth",
                "Show how governments manage trade-offs in the transition"
            ],
            answer: 0,
            explain: "Geographers use just transition to connect climate policy to social fairness. Transitions are stronger when benefits and burdens are shared more fairly."
        },

        {
            id: "g-mcq-464", topic: "wind-policy",
            q: "Which note about just transition is MOST accurate?",
            options: [
                "Firming policies reduce the risks of relying on variable generation alone",
                "Transitions are stronger when benefits and burdens are shared more fairly",
                "Diversity improves reliability and reduces over-reliance on a single pattern of generation",
                "Targets shape planning, markets and public debate"
            ],
            answer: 1,
            explain: "Transitions are stronger when benefits and burdens are shared more fairly. This links to the idea that workers and regions affected by fossil-fuel decline should gain fair support and new opportunities."
        },

        {
            id: "g-mcq-465", topic: "wind-policy",
            q: "Which statement best defines a diversified energy mix?",
            options: [
                "Clear long-term government signals that reduce risk for investors in renewable energy",
                "Australia’s national goal of reaching about 82 percent renewable electricity by 2030",
                "AEMO’s roadmap for transmission and generation investment across the electricity system",
                "The approach of combining wind with solar, hydro, storage and some flexible backup instead of depending on one source"
            ],
            answer: 3,
            explain: "A diversified energy mix means the approach of combining wind with solar, hydro, storage and some flexible backup instead of depending on one source. It matters because diversity improves reliability and reduces over-reliance on a single pattern of generation."
        },

        {
            id: "g-mcq-466", topic: "wind-policy",
            q: "Which scenario best shows a diversified energy mix in action?",
            options: [
                "Wind produces strongly overnight or in winter while solar peaks in daylight, so the mix is more balanced together",
                "Declared areas off Gippsland, Hunter and Illawarra open the door to offshore proposals",
                "A developer must address biodiversity, heritage, noise and land-use issues before approval is granted",
                "Households, batteries and industries shift energy use to better match windy periods"
            ],
            answer: 0,
            explain: "The best example is wind produces strongly overnight or in winter while solar peaks in daylight, so the mix is more balanced together. Geographers use this idea to compare wind with other technologies in the overall system."
        },

        {
            id: "g-mcq-467", topic: "wind-policy",
            q: "Why do geographers use a diversified energy mix when studying wind-energy policy and transition?",
            options: [
                "Connect individual projects to national transition goals",
                "Compare wind with other technologies in the overall system",
                "Explain how policy creates new development opportunities",
                "Show that wind policy is also about reliable system operation"
            ],
            answer: 1,
            explain: "Geographers use a diversified energy mix to compare wind with other technologies in the overall system. Diversity improves reliability and reduces over-reliance on a single pattern of generation."
        },

        {
            id: "g-mcq-468", topic: "wind-policy",
            q: "Which note about a diversified energy mix is MOST accurate?",
            options: [
                "Transitions are stronger when benefits and burdens are shared more fairly",
                "Uncertain policy can slow investment even when the wind resource is strong",
                "Diversity improves reliability and reduces over-reliance on a single pattern of generation",
                "Wind projects need network planning as well as local approvals"
            ],
            answer: 2,
            explain: "Diversity improves reliability and reduces over-reliance on a single pattern of generation. This links to the approach of combining wind with solar, hydro, storage and some flexible backup instead of depending on one source."
        },


        /* ===== Geographical tools & communication ===== */
        {
            id: "g-mcq-469", topic: "geo-tools",
            q: "Which statement best defines choropleth maps?",
            options: [
                "Maps that use shading to show how a value changes across areas such as countries or local government regions",
                "The use of digital layers such as topography, wind speed, biodiversity and settlements in one system",
                "Maps that show elevation, landform and average wind conditions",
                "The collection of first-hand observations, measurements and stakeholder views in the field"
            ],
            answer: 0,
            explain: "Choropleth maps means maps that use shading to show how a value changes across areas such as countries or local government regions. It matters because good map design can make complex patterns easier to interpret."
        },

        {
            id: "g-mcq-470", topic: "geo-tools",
            q: "Which scenario best shows choropleth maps in action?",
            options: [
                "A line graph shows renewable generation rising over time while a table compares HDI values",
                "An atlas shades countries by HDI so students can quickly see global patterns",
                "Before-and-after images show how a project site changed during construction and rehabilitation",
                "A student compares an industry brochure with CSIRO data and local interview evidence"
            ],
            answer: 1,
            explain: "The best example is an atlas shades countries by HDI so students can quickly see global patterns. Geographers use this idea to communicate spatial variation clearly."
        },

        {
            id: "g-mcq-471", topic: "geo-tools",
            q: "Why do geographers use choropleth maps when studying geographical inquiry and communication?",
            options: [
                "Identify how physical geography affects a project",
                "Show trends, comparisons and relationships clearly",
                "Communicate spatial variation clearly",
                "Judge reliability before accepting claims"
            ],
            answer: 2,
            explain: "Geographers use choropleth maps to communicate spatial variation clearly. Good map design can make complex patterns easier to interpret."
        },

        {
            id: "g-mcq-472", topic: "geo-tools",
            q: "Which note about choropleth maps is MOST accurate?",
            options: [
                "Strong structure helps evidence and judgement make sense",
                "GIS helps compare many variables at once",
                "Field evidence can confirm or challenge desk research",
                "Good map design can make complex patterns easier to interpret"
            ],
            answer: 3,
            explain: "Good map design can make complex patterns easier to interpret. This links to maps that use shading to show how a value changes across areas such as countries or local government regions."
        },

        {
            id: "g-mcq-473", topic: "geo-tools",
            q: "Which statement best defines GIS layered analysis?",
            options: [
                "Maps that show elevation, landform and average wind conditions",
                "The use of digital layers such as topography, wind speed, biodiversity and settlements in one system",
                "The collection of first-hand observations, measurements and stakeholder views in the field",
                "Numerical tools such as line graphs, scatter plots and summary tables"
            ],
            answer: 1,
            explain: "GIS layered analysis means the use of digital layers such as topography, wind speed, biodiversity and settlements in one system. It matters because GIS helps compare many variables at once."
        },

        {
            id: "g-mcq-474", topic: "geo-tools",
            q: "Which scenario best shows GIS layered analysis in action?",
            options: [
                "Before-and-after images show how a project site changed during construction and rehabilitation",
                "A student compares an industry brochure with CSIRO data and local interview evidence",
                "A planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites",
                "A report uses a labelled turbine diagram, a map and a clear conclusion to explain findings"
            ],
            answer: 2,
            explain: "The best example is a planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites. Geographers use this idea to support evidence-based geographical decision-making."
        },

        {
            id: "g-mcq-475", topic: "geo-tools",
            q: "Why do geographers use GIS layered analysis when studying geographical inquiry and communication?",
            options: [
                "Add ground-level evidence to maps and statistics",
                "Observe change across large areas without being on the ground everywhere",
                "Communicate geographical information to different audiences",
                "Support evidence-based geographical decision-making"
            ],
            answer: 3,
            explain: "Geographers use GIS layered analysis to support evidence-based geographical decision-making. GIS helps compare many variables at once."
        },

        {
            id: "g-mcq-476", topic: "geo-tools",
            q: "Which note about GIS layered analysis is MOST accurate?",
            options: [
                "GIS helps compare many variables at once",
                "Good map design can make complex patterns easier to interpret",
                "Wind power and wellbeing studies both depend on location-specific evidence",
                "Quantitative evidence helps support strong geographical arguments"
            ],
            answer: 0,
            explain: "GIS helps compare many variables at once. This links to the use of digital layers such as topography, wind speed, biodiversity and settlements in one system."
        },

        {
            id: "g-mcq-477", topic: "geo-tools",
            q: "Which statement best defines topographic and wind-resource maps?",
            options: [
                "The collection of first-hand observations, measurements and stakeholder views in the field",
                "Numerical tools such as line graphs, scatter plots and summary tables",
                "Maps that show elevation, landform and average wind conditions",
                "Satellite or aerial imagery used to monitor land cover, vegetation and change over time"
            ],
            answer: 2,
            explain: "Topographic and wind-resource maps means maps that show elevation, landform and average wind conditions. It matters because wind power and wellbeing studies both depend on location-specific evidence."
        },

        {
            id: "g-mcq-478", topic: "geo-tools",
            q: "Which scenario best shows topographic and wind-resource maps in action?",
            options: [
                "A student compares an industry brochure with CSIRO data and local interview evidence",
                "A report uses a labelled turbine diagram, a map and a clear conclusion to explain findings",
                "An atlas shades countries by HDI so students can quickly see global patterns",
                "A ridge with stronger winds and suitable access stands out on a site-selection map"
            ],
            answer: 3,
            explain: "The best example is a ridge with stronger winds and suitable access stands out on a site-selection map. Geographers use this idea to identify how physical geography affects a project."
        },

        {
            id: "g-mcq-479", topic: "geo-tools",
            q: "Why do geographers use topographic and wind-resource maps when studying geographical inquiry and communication?",
            options: [
                "Identify how physical geography affects a project",
                "Show trends, comparisons and relationships clearly",
                "Judge reliability before accepting claims",
                "Communicate spatial variation clearly"
            ],
            answer: 0,
            explain: "Geographers use topographic and wind-resource maps to identify how physical geography affects a project. Wind power and wellbeing studies both depend on location-specific evidence."
        },

        {
            id: "g-mcq-480", topic: "geo-tools",
            q: "Which note about topographic and wind-resource maps is MOST accurate?",
            options: [
                "GIS helps compare many variables at once",
                "Wind power and wellbeing studies both depend on location-specific evidence",
                "Field evidence can confirm or challenge desk research",
                "Remote sensing is useful for tracking environmental management over time"
            ],
            answer: 1,
            explain: "Wind power and wellbeing studies both depend on location-specific evidence. This links to maps that show elevation, landform and average wind conditions."
        },

        {
            id: "g-mcq-481", topic: "geo-tools",
            q: "Which statement best defines fieldwork and interviews?",
            options: [
                "Numerical tools such as line graphs, scatter plots and summary tables",
                "Satellite or aerial imagery used to monitor land cover, vegetation and change over time",
                "Checking who produced a source, what evidence it uses, how current it is and whether it shows bias",
                "The collection of first-hand observations, measurements and stakeholder views in the field"
            ],
            answer: 3,
            explain: "Fieldwork and interviews means the collection of first-hand observations, measurements and stakeholder views in the field. It matters because field evidence can confirm or challenge desk research."
        },

        {
            id: "g-mcq-482", topic: "geo-tools",
            q: "Which scenario best shows fieldwork and interviews in action?",
            options: [
                "Students visit a site, take notes and interview local residents about perceived impacts",
                "A report uses a labelled turbine diagram, a map and a clear conclusion to explain findings",
                "An atlas shades countries by HDI so students can quickly see global patterns",
                "A planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites"
            ],
            answer: 0,
            explain: "The best example is students visit a site, take notes and interview local residents about perceived impacts. Geographers use this idea to add ground-level evidence to maps and statistics."
        },

        {
            id: "g-mcq-483", topic: "geo-tools",
            q: "Why do geographers use fieldwork and interviews when studying geographical inquiry and communication?",
            options: [
                "Observe change across large areas without being on the ground everywhere",
                "Add ground-level evidence to maps and statistics",
                "Communicate geographical information to different audiences",
                "Support evidence-based geographical decision-making"
            ],
            answer: 1,
            explain: "Geographers use fieldwork and interviews to add ground-level evidence to maps and statistics. Field evidence can confirm or challenge desk research."
        },

        {
            id: "g-mcq-484", topic: "geo-tools",
            q: "Which note about fieldwork and interviews is MOST accurate?",
            options: [
                "Wind power and wellbeing studies both depend on location-specific evidence",
                "Quantitative evidence helps support strong geographical arguments",
                "Field evidence can confirm or challenge desk research",
                "Good communication depends on trustworthy evidence"
            ],
            answer: 2,
            explain: "Field evidence can confirm or challenge desk research. This links to the collection of first-hand observations, measurements and stakeholder views in the field."
        },

        {
            id: "g-mcq-485", topic: "geo-tools",
            q: "Which statement best defines graphs and statistics?",
            options: [
                "Numerical tools such as line graphs, scatter plots and summary tables",
                "Satellite or aerial imagery used to monitor land cover, vegetation and change over time",
                "Checking who produced a source, what evidence it uses, how current it is and whether it shows bias",
                "Clear labelled visuals and organised writing that explain processes, impacts and judgements"
            ],
            answer: 0,
            explain: "Graphs and statistics means numerical tools such as line graphs, scatter plots and summary tables. It matters because quantitative evidence helps support strong geographical arguments."
        },

        {
            id: "g-mcq-486", topic: "geo-tools",
            q: "Which scenario best shows graphs and statistics in action?",
            options: [
                "An atlas shades countries by HDI so students can quickly see global patterns",
                "A line graph shows renewable generation rising over time while a table compares HDI values",
                "A planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites",
                "A ridge with stronger winds and suitable access stands out on a site-selection map"
            ],
            answer: 1,
            explain: "The best example is a line graph shows renewable generation rising over time while a table compares HDI values. Geographers use this idea to show trends, comparisons and relationships clearly."
        },

        {
            id: "g-mcq-487", topic: "geo-tools",
            q: "Why do geographers use graphs and statistics when studying geographical inquiry and communication?",
            options: [
                "Judge reliability before accepting claims",
                "Communicate spatial variation clearly",
                "Show trends, comparisons and relationships clearly",
                "Identify how physical geography affects a project"
            ],
            answer: 2,
            explain: "Geographers use graphs and statistics to show trends, comparisons and relationships clearly. Quantitative evidence helps support strong geographical arguments."
        },

        {
            id: "g-mcq-488", topic: "geo-tools",
            q: "Which note about graphs and statistics is MOST accurate?",
            options: [
                "Field evidence can confirm or challenge desk research",
                "Remote sensing is useful for tracking environmental management over time",
                "Strong structure helps evidence and judgement make sense",
                "Quantitative evidence helps support strong geographical arguments"
            ],
            answer: 3,
            explain: "Quantitative evidence helps support strong geographical arguments. This links to numerical tools such as line graphs, scatter plots and summary tables."
        },

        {
            id: "g-mcq-489", topic: "geo-tools",
            q: "Which statement best defines remote sensing?",
            options: [
                "Checking who produced a source, what evidence it uses, how current it is and whether it shows bias",
                "Satellite or aerial imagery used to monitor land cover, vegetation and change over time",
                "Clear labelled visuals and organised writing that explain processes, impacts and judgements",
                "Maps that use shading to show how a value changes across areas such as countries or local government regions"
            ],
            answer: 1,
            explain: "Remote sensing means satellite or aerial imagery used to monitor land cover, vegetation and change over time. It matters because remote sensing is useful for tracking environmental management over time."
        },

        {
            id: "g-mcq-490", topic: "geo-tools",
            q: "Which scenario best shows remote sensing in action?",
            options: [
                "A planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites",
                "A ridge with stronger winds and suitable access stands out on a site-selection map",
                "Before-and-after images show how a project site changed during construction and rehabilitation",
                "Students visit a site, take notes and interview local residents about perceived impacts"
            ],
            answer: 2,
            explain: "The best example is before-and-after images show how a project site changed during construction and rehabilitation. Geographers use this idea to observe change across large areas without being on the ground everywhere."
        },

        {
            id: "g-mcq-491", topic: "geo-tools",
            q: "Why do geographers use remote sensing when studying geographical inquiry and communication?",
            options: [
                "Communicate geographical information to different audiences",
                "Support evidence-based geographical decision-making",
                "Add ground-level evidence to maps and statistics",
                "Observe change across large areas without being on the ground everywhere"
            ],
            answer: 3,
            explain: "Geographers use remote sensing to observe change across large areas without being on the ground everywhere. Remote sensing is useful for tracking environmental management over time."
        },

        {
            id: "g-mcq-492", topic: "geo-tools",
            q: "Which note about remote sensing is MOST accurate?",
            options: [
                "Remote sensing is useful for tracking environmental management over time",
                "Quantitative evidence helps support strong geographical arguments",
                "Good communication depends on trustworthy evidence",
                "Good map design can make complex patterns easier to interpret"
            ],
            answer: 0,
            explain: "Remote sensing is useful for tracking environmental management over time. This links to satellite or aerial imagery used to monitor land cover, vegetation and change over time."
        },

        {
            id: "g-mcq-493", topic: "geo-tools",
            q: "Which statement best defines source evaluation?",
            options: [
                "Clear labelled visuals and organised writing that explain processes, impacts and judgements",
                "Maps that use shading to show how a value changes across areas such as countries or local government regions",
                "Checking who produced a source, what evidence it uses, how current it is and whether it shows bias",
                "The use of digital layers such as topography, wind speed, biodiversity and settlements in one system"
            ],
            answer: 2,
            explain: "Source evaluation means checking who produced a source, what evidence it uses, how current it is and whether it shows bias. It matters because good communication depends on trustworthy evidence."
        },

        {
            id: "g-mcq-494", topic: "geo-tools",
            q: "Which scenario best shows source evaluation in action?",
            options: [
                "A ridge with stronger winds and suitable access stands out on a site-selection map",
                "Students visit a site, take notes and interview local residents about perceived impacts",
                "A line graph shows renewable generation rising over time while a table compares HDI values",
                "A student compares an industry brochure with CSIRO data and local interview evidence"
            ],
            answer: 3,
            explain: "The best example is a student compares an industry brochure with CSIRO data and local interview evidence. Geographers use this idea to judge reliability before accepting claims."
        },

        {
            id: "g-mcq-495", topic: "geo-tools",
            q: "Why do geographers use source evaluation when studying geographical inquiry and communication?",
            options: [
                "Judge reliability before accepting claims",
                "Communicate spatial variation clearly",
                "Identify how physical geography affects a project",
                "Show trends, comparisons and relationships clearly"
            ],
            answer: 0,
            explain: "Geographers use source evaluation to judge reliability before accepting claims. Good communication depends on trustworthy evidence."
        },

        {
            id: "g-mcq-496", topic: "geo-tools",
            q: "Which note about source evaluation is MOST accurate?",
            options: [
                "Remote sensing is useful for tracking environmental management over time",
                "Good communication depends on trustworthy evidence",
                "Strong structure helps evidence and judgement make sense",
                "GIS helps compare many variables at once"
            ],
            answer: 1,
            explain: "Good communication depends on trustworthy evidence. This links to checking who produced a source, what evidence it uses, how current it is and whether it shows bias."
        },

        {
            id: "g-mcq-497", topic: "geo-tools",
            q: "Which statement best defines annotated diagrams and structured reports?",
            options: [
                "Maps that use shading to show how a value changes across areas such as countries or local government regions",
                "The use of digital layers such as topography, wind speed, biodiversity and settlements in one system",
                "Maps that show elevation, landform and average wind conditions",
                "Clear labelled visuals and organised writing that explain processes, impacts and judgements"
            ],
            answer: 3,
            explain: "Annotated diagrams and structured reports means clear labelled visuals and organised writing that explain processes, impacts and judgements. It matters because strong structure helps evidence and judgement make sense."
        },

        {
            id: "g-mcq-498", topic: "geo-tools",
            q: "Which scenario best shows annotated diagrams and structured reports in action?",
            options: [
                "A report uses a labelled turbine diagram, a map and a clear conclusion to explain findings",
                "Students visit a site, take notes and interview local residents about perceived impacts",
                "A line graph shows renewable generation rising over time while a table compares HDI values",
                "Before-and-after images show how a project site changed during construction and rehabilitation"
            ],
            answer: 0,
            explain: "The best example is a report uses a labelled turbine diagram, a map and a clear conclusion to explain findings. Geographers use this idea to communicate geographical information to different audiences."
        },

        {
            id: "g-mcq-499", topic: "geo-tools",
            q: "Why do geographers use annotated diagrams and structured reports when studying geographical inquiry and communication?",
            options: [
                "Support evidence-based geographical decision-making",
                "Communicate geographical information to different audiences",
                "Add ground-level evidence to maps and statistics",
                "Observe change across large areas without being on the ground everywhere"
            ],
            answer: 1,
            explain: "Geographers use annotated diagrams and structured reports to communicate geographical information to different audiences. Strong structure helps evidence and judgement make sense."
        },

        {
            id: "g-mcq-500", topic: "geo-tools",
            q: "Which note about annotated diagrams and structured reports is MOST accurate?",
            options: [
                "Good communication depends on trustworthy evidence",
                "Good map design can make complex patterns easier to interpret",
                "Strong structure helps evidence and judgement make sense",
                "Wind power and wellbeing studies both depend on location-specific evidence"
            ],
            answer: 2,
            explain: "Strong structure helps evidence and judgement make sense. This links to clear labelled visuals and organised writing that explain processes, impacts and judgements."
        }

    ],

    short: [
        {
            id: "g-sa-1", topic: "wellbeing-concepts",
            q: "Define HUMAN WELLBEING and outline its main DIMENSIONS.",
            sample: "Human wellbeing is the quality of life experienced by individuals and communities, including their conditions of living and freedoms. Dimensions: economic (income, employment), social (education, health, gender equality), political (freedom, rights, governance) and environmental (clean air, water, climate stability).",
            marks: 4
        },
        {
            id: "g-sa-2", topic: "wellbeing-measures",
            q: "Compare GDP per capita and HDI as measures of wellbeing.",
            sample: "GDP per capita is purely economic — total output divided by population. HDI is composite, combining income (GNI), education and life expectancy. HDI is more holistic but still misses inequality, environment and subjective wellbeing. GDP is widely available and comparable; HDI better reflects living standards.",
            marks: 5
        },
        {
            id: "g-sa-3", topic: "wellbeing-measures",
            q: "Explain TWO limitations of using HDI as a single measure of wellbeing.",
            sample: "1) HDI does not capture inequality WITHIN a country; the IHDI (Inequality-adjusted HDI) was introduced to address this. 2) HDI ignores environmental sustainability — a country could 'develop' while degrading its environment. 3) HDI does not measure political freedoms or subjective wellbeing.",
            marks: 4
        },
        {
            id: "g-sa-4", topic: "wellbeing-spatial",
            q: "Identify and explain TWO causes of GLOBAL spatial variation in wellbeing.",
            sample: "1) ECONOMIC: colonial legacies and trade structures concentrated wealth and capital — countries that industrialised early or specialised in higher-value exports tend to have stronger wellbeing today. 2) POLITICAL: governance, conflict and corruption disrupt service delivery (DRC, Yemen). 3) ENVIRONMENTAL: climate vulnerability, drought and disease burden (Sahel) compound disadvantage. Most variation is multi-causal.",
            marks: 5
        },
        {
            id: "g-sa-5", topic: "wellbeing-australia",
            q: "Identify and explain TWO causes of WITHIN-AUSTRALIA spatial variation in wellbeing.",
            sample: "1) Remoteness — outback and remote Indigenous communities have reduced access to healthcare, education and employment, which lowers wellbeing. 2) Historical inequities — dispossession, the Stolen Generations and ongoing structural disadvantage explain persistent gaps in life expectancy, schooling and income for Aboriginal and Torres Strait Islander Peoples. Other valid causes: socio-economic status, infrastructure, climate-vulnerability of regions.",
            marks: 5
        },
        {
            id: "g-sa-6", topic: "wellbeing-strategies",
            q: "Describe ONE strategy used to improve wellbeing in a developing region. Evaluate its effectiveness.",
            sample: "Microfinance (e.g. Grameen Bank in Bangladesh) provides small loans (often to women) without collateral, enabling micro-enterprise. Effectiveness: lifts household incomes, supports women's empowerment, low default rates. Limitations: high interest in some markets, reliance on social pressure, doesn't fix systemic issues like infrastructure or healthcare.",
            marks: 5
        },
        {
            id: "g-sa-7", topic: "wellbeing-perspectives",
            q: "Outline THREE different stakeholder perspectives on a development project (e.g. a new dam) and explain why they may differ.",
            sample: "Government may emphasise economic growth and infrastructure benefits; environmental NGOs may stress habitat loss and emissions; local communities may worry about displacement, water access and cultural sites. Differences arise from differing values, time horizons, scale and lived experience. Good geography accounts for multiple perspectives (GE5-PER-02).",
            marks: 5
        },
        {
            id: "g-sa-8", topic: "wind-tech",
            q: "Using a labelled sketch (described in words), explain how a modern utility-scale wind turbine converts wind into electricity.",
            sample: "Wind drives the turbine BLADES, which rotate a SHAFT inside the NACELLE. A GEARBOX may step up the rotation speed; the GENERATOR converts mechanical energy to electrical energy. Power is sent through cables down the TOWER to a transformer at the base, then via collector lines to a substation and into the GRID. A YAW MECHANISM points the rotor into the wind; PITCH CONTROL adjusts blade angle to manage power and protect the machine. Cut-in ~3–4 m/s; cut-out ~25 m/s.",
            marks: 6
        },
        {
            id: "g-sa-9", topic: "wind-australia",
            q: "Identify TWO operating wind farms in Australia and ONE proposed offshore project, with brief details.",
            sample: "Operating: Macarthur (south-west VIC, ~420 MW) and Snowtown (SA, ~370 MW). Other major sites: Coopers Gap (QLD), Stockyard Hill (VIC), Sapphire (NSW), Hornsdale (SA, paired with battery). Proposed offshore: Star of the South (Bass Strait off Gippsland, VIC); other declared zones include Hunter (NSW) and Illawarra (NSW).",
            marks: 4
        },
        {
            id: "g-sa-10", topic: "wind-environmental",
            q: "Identify TWO environmental benefits and TWO environmental concerns of wind power, with a sentence on how each concern can be MANAGED.",
            sample: "Benefits: low lifecycle emissions; minimal water use; no fuel inputs. Concerns: 1) Bird/bat strikes — managed by site selection avoiding flyways/significant species and by curtailing during high-risk seasons. 2) End-of-life blades hard to recycle — emerging cement co-processing and mechanical recycling improve outcomes. 3) Visual amenity and noise — managed by setbacks, landscape design and community consultation.",
            marks: 5
        },
        {
            id: "g-sa-11", topic: "wind-perspectives",
            q: "A regional council is debating a proposed wind farm. Outline THREE stakeholder perspectives the council should consider.",
            sample: "1) HOST farmers — reliable lease income, drought-proofing; mostly supportive. 2) NON-HOST neighbours — concerns about visual impact, noise, property values; perspectives often improve once projects operate well. 3) Local Aboriginal Land Council / Traditional Owners — cultural heritage, free prior and informed consent, possible benefit-sharing or co-investment. 4) Environmental NGOs — generally supportive of well-sited wind, but want strong biodiversity safeguards. 5) Workers and tradespeople — interest in construction and ongoing maintenance jobs, training and a 'just transition' from coal/gas regions.",
            marks: 6
        },
        {
            id: "g-sa-12", topic: "wind-custodianship",
            q: "Explain how Aboriginal Peoples' Custodianship of Country can support environmental management on a wind farm site. Use ONE example.",
            sample: "Custodianship is grounded in obligations to care for Country with intergenerational knowledge. On a wind farm: Traditional Owners can co-design site layout to avoid culturally significant features, lead Cultural Heritage Management Plans, and Indigenous rangers can monitor biodiversity, control weeds and conduct cool burning where appropriate. Example: the Yindjibarndi Energy Corporation's renewable partnerships in the Pilbara, where the Yindjibarndi Aboriginal Corporation participates in project ownership and decision-making, embedding Custodianship in operational management. Free, prior and informed consent (FPIC) underpins these arrangements (GE5-APC-02).",
            marks: 6
        },
        {
            id: "g-sa-13", topic: "wind-policy",
            q: "Compare the lifecycle environmental impacts of wind and coal generation in Australia.",
            sample: "Lifecycle CO₂ emissions: coal ~800–900 g/kWh; wind ~11 g/kWh — wind is 70–80x cleaner. Water: coal uses large volumes for steam and cooling; wind uses negligible water. Air pollution (NOx, SOx, fine particulates): substantial for coal; near-zero for wind during operation. Land use: wind requires more dispersed land but most can stay productive (cropping, grazing); coal mining has large concentrated disturbance. End-of-life: coal ash and mine rehabilitation are long-term challenges; turbine blade recycling is the wind sector's main current concern. On most environmental metrics, wind outperforms coal substantially.",
            marks: 6
        },
        {
            id: "g-sa-14", topic: "geo-tools",
            q: "Outline TWO geographical tools you could use to investigate the suitability of a region for wind power, and explain what each contributes.",
            sample: "1) GIS layered analysis — combine wind-speed data (BoM/AEMO), transmission lines, topography, biodiversity zones and cultural-heritage layers to identify candidate areas and exclusion zones. 2) Choropleth or thematic maps — communicate annual wind speeds or capacity factor across a region. 3) Field investigation — site visits and stakeholder interviews to ground-truth maps. 4) Statistical analysis — capacity-factor and yield modelling. Each gives a different lens; combining them is best practice.",
            marks: 5
        },
        {
            id: "g-sa-15", topic: "geo-tools",
            q: "Explain TWO criteria you would use to evaluate a media article about wind power.",
            sample: "1) Author/publisher and bias — is the source independent (e.g. CSIRO, AEMO, Climate Council) or aligned with a sector (lobby group, fossil-fuel-funded site)? 2) Source data and currency — does the article cite primary data and is it recent? 3) Multiple perspectives — does it represent host communities, environmental groups, Traditional Owners and operators? 4) Accuracy — does it confuse capacity (MW) with energy (MWh), or compare peak vs average outputs?",
            marks: 4
        },

        /* ===== Expanded Geography question bank ===== */
        /* ===== Concepts of wellbeing ===== */
        {
            id: "g-sa-16", topic: "wellbeing-concepts",
            q: "Explain objective indicators in the study of human wellbeing.",
            sample: "Objective indicators means measures of wellbeing that can be counted or observed, such as life expectancy, literacy or access to safe water. Example: a geographer compares countries using infant mortality, school completion and access to electricity. Geographers use it to compare living conditions between places with consistent measurable data. It matters because they reveal patterns of advantage and disadvantage that opinion alone can hide.",
            marks: 4
        },

        {
            id: "g-sa-17", topic: "wellbeing-concepts",
            q: "Describe subjective wellbeing and give ONE example linked to human wellbeing.",
            sample: "Subjective wellbeing means people's own reported feelings about life satisfaction, safety and happiness. Example: survey responses asking residents to rate their quality of life and sense of belonging. Geographers use it to capture how people experience life rather than relying only on statistics. It matters because it complements objective data because strong averages do not always mean people feel well.",
            marks: 4
        },

        {
            id: "g-sa-18", topic: "wellbeing-concepts",
            q: "Explain why economic wellbeing is important when geographers investigate human wellbeing.",
            sample: "Economic wellbeing means the resources people have to meet needs, including income, employment and affordability. Example: a household can pay rent, buy food and manage transport because stable work covers everyday costs. Geographers use it to explain patterns in income security and material living standards. It matters because money supports choices and access but does not guarantee fairness or happiness.",
            marks: 5
        },

        {
            id: "g-sa-19", topic: "wellbeing-concepts",
            q: "Compare social wellbeing and political wellbeing as ideas used in human wellbeing.",
            sample: "Social wellbeing means the quality of health, education, safety and relationships in a community, while political wellbeing means the freedoms, rights and voice people have in decisions that affect their lives. For example, high school attendance, reliable health care and low preventable disease improve daily life in a region; meanwhile, citizens can vote, speak freely and seek legal protection when treated unfairly. Together, geographers use these ideas to show how services and social conditions shape quality of life and judge whether people can influence government and live with security. Both matter because strong social wellbeing helps people participate fully in their community and without rights and accountability other forms of wellbeing can be fragile.",
            marks: 5
        },

        {
            id: "g-sa-20", topic: "wellbeing-concepts",
            q: "Identify and explain TWO features of environmental wellbeing.",
            sample: "Environmental wellbeing means the quality of the natural environment people depend on, including clean air, safe water and climate stability. Example: a town with clean drinking water, low pollution and protected ecosystems supports healthier lives. Geographers use it to connect living conditions to environmental quality and sustainability. It matters because damaged environments reduce health, security and future opportunities.",
            marks: 4
        },

        {
            id: "g-sa-21", topic: "wellbeing-concepts",
            q: "Describe how material and non-material needs can influence people or places in human wellbeing.",
            sample: "Material and non-material needs means the idea that wellbeing depends on both physical needs being met and people having dignity, identity and belonging. Example: a family has shelter and food but also needs safety, respect and connection to community. Geographers use it to avoid reducing wellbeing to income or possessions alone. It matters because people need meaning and social connection as well as goods and services.",
            marks: 5
        },

        {
            id: "g-sa-22", topic: "wellbeing-concepts",
            q: "Explain how a geographer could use scale and inequality to investigate human wellbeing.",
            sample: "Scale and inequality means the understanding that national averages can hide major differences between regions, groups and households. Example: a country records high income overall but remote communities still lack doctors and reliable transport. Geographers use it to look beyond national totals to see who benefits and who is left behind. It matters because good geography checks patterns at multiple scales before making a judgement.",
            marks: 4
        },

        {
            id: "g-sa-23", topic: "wellbeing-concepts",
            q: "Outline the relationship between objective indicators and subjective wellbeing.",
            sample: "Objective indicators means measures of wellbeing that can be counted or observed, such as life expectancy, literacy or access to safe water, while subjective wellbeing means people's own reported feelings about life satisfaction, safety and happiness. For example, a geographer compares countries using infant mortality, school completion and access to electricity; meanwhile, survey responses asking residents to rate their quality of life and sense of belonging. Together, geographers use these ideas to compare living conditions between places with consistent measurable data and capture how people experience life rather than relying only on statistics. Both matter because they reveal patterns of advantage and disadvantage that opinion alone can hide and it complements objective data because strong averages do not always mean people feel well.",
            marks: 5
        },

        {
            id: "g-sa-24", topic: "wellbeing-concepts",
            q: "Explain TWO consequences of economic wellbeing for people or places connected to human wellbeing.",
            sample: "Economic wellbeing means the resources people have to meet needs, including income, employment and affordability. Example: a household can pay rent, buy food and manage transport because stable work covers everyday costs. Geographers use it to explain patterns in income security and material living standards. It matters because money supports choices and access but does not guarantee fairness or happiness.",
            marks: 5
        },

        {
            id: "g-sa-25", topic: "wellbeing-concepts",
            q: "Compare the evidence or insight provided by political wellbeing and material and non-material needs.",
            sample: "Political wellbeing means the freedoms, rights and voice people have in decisions that affect their lives, while material and non-material needs means the idea that wellbeing depends on both physical needs being met and people having dignity, identity and belonging. For example, citizens can vote, speak freely and seek legal protection when treated unfairly; meanwhile, a family has shelter and food but also needs safety, respect and connection to community. Together, geographers use these ideas to judge whether people can influence government and live with security and avoid reducing wellbeing to income or possessions alone. Both matter because without rights and accountability other forms of wellbeing can be fragile and people need meaning and social connection as well as goods and services.",
            marks: 4
        },

        {
            id: "g-sa-26", topic: "wellbeing-concepts",
            q: "Describe ONE real-world example that shows social wellbeing.",
            sample: "Social wellbeing means the quality of health, education, safety and relationships in a community. Example: high school attendance, reliable health care and low preventable disease improve daily life in a region. Geographers use it to show how services and social conditions shape quality of life. It matters because strong social wellbeing helps people participate fully in their community.",
            marks: 4
        },

        {
            id: "g-sa-27", topic: "wellbeing-concepts",
            q: "Explain why decision-makers should consider environmental wellbeing.",
            sample: "Environmental wellbeing means the quality of the natural environment people depend on, including clean air, safe water and climate stability. Example: a town with clean drinking water, low pollution and protected ecosystems supports healthier lives. Geographers use it to connect living conditions to environmental quality and sustainability. It matters because damaged environments reduce health, security and future opportunities.",
            marks: 5
        },

        {
            id: "g-sa-28", topic: "wellbeing-concepts",
            q: "Outline how findings about scale and inequality could be communicated to an audience.",
            sample: "Scale and inequality means the understanding that national averages can hide major differences between regions, groups and households. Example: a country records high income overall but remote communities still lack doctors and reliable transport. Geographers use it to look beyond national totals to see who benefits and who is left behind. It matters because good geography checks patterns at multiple scales before making a judgement. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-29", topic: "wellbeing-concepts",
            q: "Explain how subjective wellbeing and economic wellbeing can shape a judgement about human wellbeing.",
            sample: "Subjective wellbeing means people's own reported feelings about life satisfaction, safety and happiness, while economic wellbeing means the resources people have to meet needs, including income, employment and affordability. For example, survey responses asking residents to rate their quality of life and sense of belonging; meanwhile, a household can pay rent, buy food and manage transport because stable work covers everyday costs. Together, geographers use these ideas to capture how people experience life rather than relying only on statistics and explain patterns in income security and material living standards. Both matter because it complements objective data because strong averages do not always mean people feel well and money supports choices and access but does not guarantee fairness or happiness.",
            marks: 5
        },

        {
            id: "g-sa-30", topic: "wellbeing-concepts",
            q: "Justify why geographers should consider social wellbeing, political wellbeing and environmental wellbeing together.",
            sample: "A strong answer would explain that social wellbeing, political wellbeing and environmental wellbeing are linked. Social wellbeing involves the quality of health, education, safety and relationships in a community; political wellbeing involves the freedoms, rights and voice people have in decisions that affect their lives; and environmental wellbeing involves the quality of the natural environment people depend on, including clean air, safe water and climate stability. Relevant examples include high school attendance, reliable health care and low preventable disease improve daily life in a region; citizens can vote, speak freely and seek legal protection when treated unfairly; and a town with clean drinking water, low pollution and protected ecosystems supports healthier lives. Together these ideas help geographers show how services and social conditions shape quality of life, judge whether people can influence government and live with security and connect living conditions to environmental quality and sustainability.",
            marks: 6
        },


        /* ===== Measuring & comparing wellbeing ===== */
        {
            id: "g-sa-31", topic: "wellbeing-measures",
            q: "Explain HDI in the study of wellbeing data.",
            sample: "HDI means a composite measure combining life expectancy, education and income to compare human development. Example: a teacher ranks countries using one score that includes schooling, health and GNI per person. Geographers use it to compare development with a broader lens than money alone. It matters because it gives a clearer overview than a single economic statistic.",
            marks: 4
        },

        {
            id: "g-sa-32", topic: "wellbeing-measures",
            q: "Describe the Gini coefficient and give ONE example linked to wellbeing data.",
            sample: "The Gini coefficient means a measure of inequality showing how evenly income or wealth is shared within a country. Example: two countries have similar average income but one has a much higher Gini because wealth is concentrated. Geographers use it to show whether national prosperity is shared fairly. It matters because inequality changes how useful an average income figure really is.",
            marks: 4
        },

        {
            id: "g-sa-33", topic: "wellbeing-measures",
            q: "Explain why GDP per capita is important when geographers investigate wellbeing data.",
            sample: "GDP per capita means the average economic output produced per person in a country. Example: a report divides total national production by population to show average output per person. Geographers use it to estimate the size of an economy relative to its population. It matters because it is easy to compare but misses distribution, unpaid work and sustainability.",
            marks: 5
        },

        {
            id: "g-sa-34", topic: "wellbeing-measures",
            q: "Compare GNI per capita and life expectancy as ideas used in wellbeing data.",
            sample: "GNI per capita means the average income earned by residents, including income from overseas and excluding income sent abroad, while life expectancy means the average number of years a newborn is expected to live if current health conditions continue. For example, a country with many citizens working overseas records income flowing back to residents; meanwhile, a population with low preventable disease and strong health care usually records higher life expectancy. Together, geographers use these ideas to show how much income residents actually receive and compare health outcomes between places. Both matter because it can be more useful than GDP in open economies with strong income flows and it summarises long-term access to nutrition, sanitation and health services.",
            marks: 5
        },

        {
            id: "g-sa-35", topic: "wellbeing-measures",
            q: "Identify and explain TWO features of schooling measures.",
            sample: "Schooling measures means indicators such as literacy, mean years of schooling and expected years of schooling. Example: a country with high literacy and long time spent in school usually scores better on education measures. Geographers use it to show the depth and reach of education in a society. It matters because education affects future income, health and civic participation.",
            marks: 4
        },

        {
            id: "g-sa-36", topic: "wellbeing-measures",
            q: "Describe how the Multidimensional Poverty Index can influence people or places in wellbeing data.",
            sample: "The Multidimensional Poverty Index means a measure that tracks overlapping deprivations in health, education and living standards. Example: a household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel. Geographers use it to identify poverty that income figures can miss. It matters because it highlights daily disadvantages that shape quality of life.",
            marks: 5
        },

        {
            id: "g-sa-37", topic: "wellbeing-measures",
            q: "Explain how a geographer could use the Better Life Index and wellbeing surveys to investigate wellbeing data.",
            sample: "The Better Life Index and wellbeing surveys means broader tools that include housing, jobs, environment, safety and self-reported satisfaction. Example: a comparison of countries includes work-life balance, civic engagement and how safe people feel. Geographers use it to bring quality-of-life dimensions into a single discussion. It matters because they remind geographers that wellbeing is broader than production and wages.",
            marks: 4
        },

        {
            id: "g-sa-38", topic: "wellbeing-measures",
            q: "Outline the relationship between HDI and the Gini coefficient.",
            sample: "HDI means a composite measure combining life expectancy, education and income to compare human development, while the Gini coefficient means a measure of inequality showing how evenly income or wealth is shared within a country. For example, a teacher ranks countries using one score that includes schooling, health and GNI per person; meanwhile, two countries have similar average income but one has a much higher Gini because wealth is concentrated. Together, geographers use these ideas to compare development with a broader lens than money alone and show whether national prosperity is shared fairly. Both matter because it gives a clearer overview than a single economic statistic and inequality changes how useful an average income figure really is.",
            marks: 5
        },

        {
            id: "g-sa-39", topic: "wellbeing-measures",
            q: "Explain TWO consequences of GDP per capita for people or places connected to wellbeing data.",
            sample: "GDP per capita means the average economic output produced per person in a country. Example: a report divides total national production by population to show average output per person. Geographers use it to estimate the size of an economy relative to its population. It matters because it is easy to compare but misses distribution, unpaid work and sustainability.",
            marks: 5
        },

        {
            id: "g-sa-40", topic: "wellbeing-measures",
            q: "Compare the evidence or insight provided by life expectancy and the Multidimensional Poverty Index.",
            sample: "Life expectancy means the average number of years a newborn is expected to live if current health conditions continue, while the Multidimensional Poverty Index means a measure that tracks overlapping deprivations in health, education and living standards. For example, a population with low preventable disease and strong health care usually records higher life expectancy; meanwhile, a household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel. Together, geographers use these ideas to compare health outcomes between places and identify poverty that income figures can miss. Both matter because it summarises long-term access to nutrition, sanitation and health services and it highlights daily disadvantages that shape quality of life.",
            marks: 4
        },

        {
            id: "g-sa-41", topic: "wellbeing-measures",
            q: "Describe ONE real-world example that shows GNI per capita.",
            sample: "GNI per capita means the average income earned by residents, including income from overseas and excluding income sent abroad. Example: a country with many citizens working overseas records income flowing back to residents. Geographers use it to show how much income residents actually receive. It matters because it can be more useful than GDP in open economies with strong income flows.",
            marks: 4
        },

        {
            id: "g-sa-42", topic: "wellbeing-measures",
            q: "Explain why decision-makers should consider schooling measures.",
            sample: "Schooling measures means indicators such as literacy, mean years of schooling and expected years of schooling. Example: a country with high literacy and long time spent in school usually scores better on education measures. Geographers use it to show the depth and reach of education in a society. It matters because education affects future income, health and civic participation.",
            marks: 5
        },

        {
            id: "g-sa-43", topic: "wellbeing-measures",
            q: "Outline how findings about the Better Life Index and wellbeing surveys could be communicated to an audience.",
            sample: "The Better Life Index and wellbeing surveys means broader tools that include housing, jobs, environment, safety and self-reported satisfaction. Example: a comparison of countries includes work-life balance, civic engagement and how safe people feel. Geographers use it to bring quality-of-life dimensions into a single discussion. It matters because they remind geographers that wellbeing is broader than production and wages. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-44", topic: "wellbeing-measures",
            q: "Explain how the Gini coefficient and GDP per capita can shape a judgement about wellbeing data.",
            sample: "The Gini coefficient means a measure of inequality showing how evenly income or wealth is shared within a country, while GDP per capita means the average economic output produced per person in a country. For example, two countries have similar average income but one has a much higher Gini because wealth is concentrated; meanwhile, a report divides total national production by population to show average output per person. Together, geographers use these ideas to show whether national prosperity is shared fairly and estimate the size of an economy relative to its population. Both matter because inequality changes how useful an average income figure really is and it is easy to compare but misses distribution, unpaid work and sustainability.",
            marks: 5
        },


        /* ===== Spatial variations in wellbeing ===== */
        {
            id: "g-sa-45", topic: "wellbeing-spatial",
            q: "Explain the global development gap in the study of global wellbeing patterns.",
            sample: "The global development gap means the uneven distribution of wellbeing between high-development and low-development places. Example: countries in Northern Europe record very high HDI while many conflict-affected states remain much lower. Geographers use it to describe broad spatial patterns in development. It matters because it helps geographers compare regions and ask why gaps persist.",
            marks: 4
        },

        {
            id: "g-sa-46", topic: "wellbeing-spatial",
            q: "Describe colonial legacy and give ONE example linked to global wellbeing patterns.",
            sample: "Colonial legacy means the long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution. Example: former colonies that exported raw materials often entered independence with weaker industry and infrastructure. Geographers use it to explain why some countries started from an unequal position. It matters because historical structures can still shape present-day wellbeing.",
            marks: 4
        },

        {
            id: "g-sa-47", topic: "wellbeing-spatial",
            q: "Explain why conflict and fragile governance is important when geographers investigate global wellbeing patterns.",
            sample: "Conflict and fragile governance means political instability that disrupts services, investment, safety and economic activity. Example: war damages clinics, schools, transport and trust in institutions. Geographers use it to account for sudden or ongoing declines in wellbeing. It matters because when governance is weak it is harder to deliver health, education and jobs.",
            marks: 5
        },

        {
            id: "g-sa-48", topic: "wellbeing-spatial",
            q: "Compare climate vulnerability and access to infrastructure and services as ideas used in global wellbeing patterns.",
            sample: "Climate vulnerability means exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt, while access to infrastructure and services means the availability of roads, power, clean water, hospitals and schools. For example, small island states face rising seas while dry regions struggle with repeated crop failure; meanwhile, an isolated settlement without all-weather roads struggles to access health care and markets. Together, geographers use these ideas to link environmental risk to human wellbeing patterns and show how basic services influence quality of life. Both matter because climate pressures often hit places with the least resources to respond and infrastructure shapes opportunity, safety and resilience.",
            marks: 5
        },

        {
            id: "g-sa-49", topic: "wellbeing-spatial",
            q: "Identify and explain TWO features of urban-rural variation.",
            sample: "Urban-rural variation means differences in wellbeing between cities and remote or rural areas within the same country. Example: a capital city may have universities and hospitals while distant villages have limited services. Geographers use it to compare internal patterns rather than only comparing countries. It matters because within-country variation can be as important as international variation.",
            marks: 4
        },

        {
            id: "g-sa-50", topic: "wellbeing-spatial",
            q: "Describe how migration and remittances can influence people or places in global wellbeing patterns.",
            sample: "Migration and remittances means the movement of people and the money they send home, which can change wellbeing in both sending and receiving places. Example: a worker moves overseas, sends money home and helps relatives pay school fees and health costs. Geographers use it to explain how global connections can shift local living standards. It matters because migration can lift wellbeing but may also drain skilled workers from poorer regions.",
            marks: 5
        },

        {
            id: "g-sa-51", topic: "wellbeing-spatial",
            q: "Explain how a geographer could use within-country inequality to investigate global wellbeing patterns.",
            sample: "Within-country inequality means the uneven sharing of wealth, services and opportunity inside a single nation. Example: a resource-rich country has luxury districts and informal settlements existing side by side. Geographers use it to avoid treating one national average as the whole story. It matters because inequality can leave many people excluded even when a country appears wealthy.",
            marks: 4
        },

        {
            id: "g-sa-52", topic: "wellbeing-spatial",
            q: "Outline the relationship between the global development gap and colonial legacy.",
            sample: "The global development gap means the uneven distribution of wellbeing between high-development and low-development places, while colonial legacy means the long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution. For example, countries in Northern Europe record very high HDI while many conflict-affected states remain much lower; meanwhile, former colonies that exported raw materials often entered independence with weaker industry and infrastructure. Together, geographers use these ideas to describe broad spatial patterns in development and explain why some countries started from an unequal position. Both matter because it helps geographers compare regions and ask why gaps persist and historical structures can still shape present-day wellbeing.",
            marks: 5
        },

        {
            id: "g-sa-53", topic: "wellbeing-spatial",
            q: "Explain TWO consequences of conflict and fragile governance for people or places connected to global wellbeing patterns.",
            sample: "Conflict and fragile governance means political instability that disrupts services, investment, safety and economic activity. Example: war damages clinics, schools, transport and trust in institutions. Geographers use it to account for sudden or ongoing declines in wellbeing. It matters because when governance is weak it is harder to deliver health, education and jobs.",
            marks: 5
        },

        {
            id: "g-sa-54", topic: "wellbeing-spatial",
            q: "Compare the evidence or insight provided by access to infrastructure and services and migration and remittances.",
            sample: "Access to infrastructure and services means the availability of roads, power, clean water, hospitals and schools, while migration and remittances means the movement of people and the money they send home, which can change wellbeing in both sending and receiving places. For example, an isolated settlement without all-weather roads struggles to access health care and markets; meanwhile, a worker moves overseas, sends money home and helps relatives pay school fees and health costs. Together, geographers use these ideas to show how basic services influence quality of life and explain how global connections can shift local living standards. Both matter because infrastructure shapes opportunity, safety and resilience and migration can lift wellbeing but may also drain skilled workers from poorer regions.",
            marks: 4
        },

        {
            id: "g-sa-55", topic: "wellbeing-spatial",
            q: "Describe ONE real-world example that shows climate vulnerability.",
            sample: "Climate vulnerability means exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt. Example: small island states face rising seas while dry regions struggle with repeated crop failure. Geographers use it to link environmental risk to human wellbeing patterns. It matters because climate pressures often hit places with the least resources to respond.",
            marks: 4
        },

        {
            id: "g-sa-56", topic: "wellbeing-spatial",
            q: "Explain why decision-makers should consider urban-rural variation.",
            sample: "Urban-rural variation means differences in wellbeing between cities and remote or rural areas within the same country. Example: a capital city may have universities and hospitals while distant villages have limited services. Geographers use it to compare internal patterns rather than only comparing countries. It matters because within-country variation can be as important as international variation.",
            marks: 5
        },

        {
            id: "g-sa-57", topic: "wellbeing-spatial",
            q: "Outline how findings about within-country inequality could be communicated to an audience.",
            sample: "Within-country inequality means the uneven sharing of wealth, services and opportunity inside a single nation. Example: a resource-rich country has luxury districts and informal settlements existing side by side. Geographers use it to avoid treating one national average as the whole story. It matters because inequality can leave many people excluded even when a country appears wealthy. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-58", topic: "wellbeing-spatial",
            q: "Explain how colonial legacy and conflict and fragile governance can shape a judgement about global wellbeing patterns.",
            sample: "Colonial legacy means the long-term impact of colonial rule on borders, trade patterns, land control and wealth distribution, while conflict and fragile governance means political instability that disrupts services, investment, safety and economic activity. For example, former colonies that exported raw materials often entered independence with weaker industry and infrastructure; meanwhile, war damages clinics, schools, transport and trust in institutions. Together, geographers use these ideas to explain why some countries started from an unequal position and account for sudden or ongoing declines in wellbeing. Both matter because historical structures can still shape present-day wellbeing and when governance is weak it is harder to deliver health, education and jobs.",
            marks: 5
        },

        {
            id: "g-sa-59", topic: "wellbeing-spatial",
            q: "Justify why geographers should consider climate vulnerability, access to infrastructure and services and urban-rural variation together.",
            sample: "A strong answer would explain that climate vulnerability, access to infrastructure and services and urban-rural variation are linked. Climate vulnerability involves exposure to hazards such as drought, floods, sea-level rise or heat with limited capacity to adapt; access to infrastructure and services involves the availability of roads, power, clean water, hospitals and schools; and urban-rural variation involves differences in wellbeing between cities and remote or rural areas within the same country. Relevant examples include small island states face rising seas while dry regions struggle with repeated crop failure; an isolated settlement without all-weather roads struggles to access health care and markets; and a capital city may have universities and hospitals while distant villages have limited services. Together these ideas help geographers link environmental risk to human wellbeing patterns, show how basic services influence quality of life and compare internal patterns rather than only comparing countries.",
            marks: 6
        },


        /* ===== Wellbeing in Australia ===== */
        {
            id: "g-sa-60", topic: "wellbeing-australia",
            q: "Explain Closing the Gap in the study of Australian wellbeing.",
            sample: "Closing the Gap means the national effort to reduce inequalities between Aboriginal and Torres Strait Islander Peoples and non-Indigenous Australians. Example: targets track health, education, justice, housing and employment outcomes across Australia. Geographers use it to focus attention on long-standing disparities within Australia. It matters because it recognises that wellbeing includes equality, self-determination and access to services.",
            marks: 4
        },

        {
            id: "g-sa-61", topic: "wellbeing-australia",
            q: "Describe remoteness and give ONE example linked to Australian wellbeing.",
            sample: "Remoteness means distance from major centres and services that can limit access to care, education, jobs and transport. Example: a remote community waits longer for specialist health visits and pays more for groceries. Geographers use it to explain why location affects wellbeing in Australia. It matters because distance raises costs and narrows opportunities for many households.",
            marks: 4
        },

        {
            id: "g-sa-62", topic: "wellbeing-australia",
            q: "Explain why SEIFA is important when geographers investigate Australian wellbeing.",
            sample: "SEIFA means ABS indexes that rank areas by relative socio-economic advantage and disadvantage. Example: a planner maps suburbs by SEIFA to identify where disadvantage is concentrated. Geographers use it to compare wellbeing patterns between local areas. It matters because it helps governments target support to places with higher need.",
            marks: 5
        },

        {
            id: "g-sa-63", topic: "wellbeing-australia",
            q: "Compare housing affordability and employment and income security as ideas used in Australian wellbeing.",
            sample: "Housing affordability means the relationship between housing costs and household income, while employment and income security means the stability and adequacy of work and wages available to people. For example, a family spends so much on rent that it cuts back on food, transport and school activities; meanwhile, casual hours drop suddenly and a household struggles to meet bills each month. Together, geographers use these ideas to show how cost of living shapes daily wellbeing and connect local economies to household wellbeing. Both matter because secure affordable housing supports health, safety and participation and stable incomes improve choice, confidence and long-term planning.",
            marks: 5
        },

        {
            id: "g-sa-64", topic: "wellbeing-australia",
            q: "Identify and explain TWO features of access to health care and education.",
            sample: "Access to health care and education means the availability and quality of clinics, hospitals, schools and training. Example: students in a regional area travel long distances for specialist courses and medical care. Geographers use it to explain why service distribution matters across Australia. It matters because good services improve health, skills and future opportunity.",
            marks: 4
        },

        {
            id: "g-sa-65", topic: "wellbeing-australia",
            q: "Describe how cultural connection and Country can influence people or places in Australian wellbeing.",
            sample: "Cultural connection and Country means the importance of identity, language, community and connection to Country for Aboriginal wellbeing. Example: community-led cultural programs strengthen belonging and support social and emotional wellbeing. Geographers use it to show that wellbeing is not only about income or infrastructure. It matters because respecting culture and self-determination improves outcomes and dignity.",
            marks: 5
        },

        {
            id: "g-sa-66", topic: "wellbeing-australia",
            q: "Explain how a geographer could use transport and digital connectivity to investigate Australian wellbeing.",
            sample: "Transport and digital connectivity means how easily people can move around and access online services and information. Example: limited public transport and weak internet make it harder to reach study, telehealth and work. Geographers use it to investigate modern access to opportunity. It matters because connectivity now affects education, employment and social inclusion.",
            marks: 4
        },

        {
            id: "g-sa-67", topic: "wellbeing-australia",
            q: "Outline the relationship between Closing the Gap and remoteness.",
            sample: "Closing the Gap means the national effort to reduce inequalities between Aboriginal and Torres Strait Islander Peoples and non-Indigenous Australians, while remoteness means distance from major centres and services that can limit access to care, education, jobs and transport. For example, targets track health, education, justice, housing and employment outcomes across Australia; meanwhile, a remote community waits longer for specialist health visits and pays more for groceries. Together, geographers use these ideas to focus attention on long-standing disparities within Australia and explain why location affects wellbeing in Australia. Both matter because it recognises that wellbeing includes equality, self-determination and access to services and distance raises costs and narrows opportunities for many households.",
            marks: 5
        },

        {
            id: "g-sa-68", topic: "wellbeing-australia",
            q: "Explain TWO consequences of SEIFA for people or places connected to Australian wellbeing.",
            sample: "SEIFA means ABS indexes that rank areas by relative socio-economic advantage and disadvantage. Example: a planner maps suburbs by SEIFA to identify where disadvantage is concentrated. Geographers use it to compare wellbeing patterns between local areas. It matters because it helps governments target support to places with higher need.",
            marks: 5
        },

        {
            id: "g-sa-69", topic: "wellbeing-australia",
            q: "Compare the evidence or insight provided by employment and income security and cultural connection and Country.",
            sample: "Employment and income security means the stability and adequacy of work and wages available to people, while cultural connection and Country means the importance of identity, language, community and connection to Country for Aboriginal wellbeing. For example, casual hours drop suddenly and a household struggles to meet bills each month; meanwhile, community-led cultural programs strengthen belonging and support social and emotional wellbeing. Together, geographers use these ideas to connect local economies to household wellbeing and show that wellbeing is not only about income or infrastructure. Both matter because stable incomes improve choice, confidence and long-term planning and respecting culture and self-determination improves outcomes and dignity.",
            marks: 4
        },

        {
            id: "g-sa-70", topic: "wellbeing-australia",
            q: "Describe ONE real-world example that shows housing affordability.",
            sample: "Housing affordability means the relationship between housing costs and household income. Example: a family spends so much on rent that it cuts back on food, transport and school activities. Geographers use it to show how cost of living shapes daily wellbeing. It matters because secure affordable housing supports health, safety and participation.",
            marks: 4
        },

        {
            id: "g-sa-71", topic: "wellbeing-australia",
            q: "Explain why decision-makers should consider access to health care and education.",
            sample: "Access to health care and education means the availability and quality of clinics, hospitals, schools and training. Example: students in a regional area travel long distances for specialist courses and medical care. Geographers use it to explain why service distribution matters across Australia. It matters because good services improve health, skills and future opportunity.",
            marks: 5
        },

        {
            id: "g-sa-72", topic: "wellbeing-australia",
            q: "Outline how findings about transport and digital connectivity could be communicated to an audience.",
            sample: "Transport and digital connectivity means how easily people can move around and access online services and information. Example: limited public transport and weak internet make it harder to reach study, telehealth and work. Geographers use it to investigate modern access to opportunity. It matters because connectivity now affects education, employment and social inclusion. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-73", topic: "wellbeing-australia",
            q: "Explain how remoteness and SEIFA can shape a judgement about Australian wellbeing.",
            sample: "Remoteness means distance from major centres and services that can limit access to care, education, jobs and transport, while SEIFA means ABS indexes that rank areas by relative socio-economic advantage and disadvantage. For example, a remote community waits longer for specialist health visits and pays more for groceries; meanwhile, a planner maps suburbs by SEIFA to identify where disadvantage is concentrated. Together, geographers use these ideas to explain why location affects wellbeing in Australia and compare wellbeing patterns between local areas. Both matter because distance raises costs and narrows opportunities for many households and it helps governments target support to places with higher need.",
            marks: 5
        },

        {
            id: "g-sa-74", topic: "wellbeing-australia",
            q: "Justify why geographers should consider housing affordability, employment and income security and access to health care and education together.",
            sample: "A strong answer would explain that housing affordability, employment and income security and access to health care and education are linked. Housing affordability involves the relationship between housing costs and household income; employment and income security involves the stability and adequacy of work and wages available to people; and access to health care and education involves the availability and quality of clinics, hospitals, schools and training. Relevant examples include a family spends so much on rent that it cuts back on food, transport and school activities; casual hours drop suddenly and a household struggles to meet bills each month; and students in a regional area travel long distances for specialist courses and medical care. Together these ideas help geographers show how cost of living shapes daily wellbeing, connect local economies to household wellbeing and explain why service distribution matters across Australia.",
            marks: 6
        },


        /* ===== Improving wellbeing — strategies ===== */
        {
            id: "g-sa-75", topic: "wellbeing-strategies",
            q: "Explain the Sustainable Development Goals in the study of development strategies.",
            sample: "The Sustainable Development Goals means the UN framework of 17 goals linking poverty reduction, health, education, equality and environmental sustainability. Example: a country uses SDG targets to guide work on clean water, gender equality and climate action. Geographers use it to set shared global priorities for improving wellbeing. It matters because they connect different dimensions of development instead of treating issues in isolation.",
            marks: 4
        },

        {
            id: "g-sa-76", topic: "wellbeing-strategies",
            q: "Describe WASH programs and give ONE example linked to development strategies.",
            sample: "WASH programs means strategies that improve water, sanitation and hygiene in homes, schools and clinics. Example: a village gains safe water points, toilets and handwashing facilities. Geographers use it to reduce disease and improve health and attendance at school. It matters because clean water and sanitation create large wellbeing gains for relatively low cost.",
            marks: 4
        },

        {
            id: "g-sa-77", topic: "wellbeing-strategies",
            q: "Explain why vaccination and public-health campaigns is important when geographers investigate development strategies.",
            sample: "Vaccination and public-health campaigns means programs that prevent disease through immunisation, clinics, education and early treatment. Example: a measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school. Geographers use it to lift wellbeing quickly through better health outcomes. It matters because health improvements support education, work and household stability.",
            marks: 5
        },

        {
            id: "g-sa-78", topic: "wellbeing-strategies",
            q: "Compare girls’ education and microfinance as ideas used in development strategies.",
            sample: "Girls’ education means programs that keep girls in school and remove barriers such as cost, distance or unsafe travel, while microfinance means small loans and financial services for people who may not have access to formal banking. For example, scholarships and safe transport help teenage girls complete secondary school; meanwhile, a woman starts a small business after receiving a low-value loan and savings support. Together, geographers use these ideas to improve future income, health and gender equality and increase income opportunities at household scale. Both matter because education has multiplier effects across families and communities and it can strengthen independence but works best alongside wider support.",
            marks: 5
        },

        {
            id: "g-sa-79", topic: "wellbeing-strategies",
            q: "Identify and explain TWO features of cash transfers and social protection.",
            sample: "Cash transfers and social protection means payments or support programs that help households meet basic needs during hardship. Example: a family receives regular income support that keeps children in school during drought. Geographers use it to protect wellbeing during shocks and reduce extreme poverty. It matters because basic security can stop temporary hardship becoming long-term disadvantage.",
            marks: 4
        },

        {
            id: "g-sa-80", topic: "wellbeing-strategies",
            q: "Describe how community-led development can influence people or places in development strategies.",
            sample: "Community-led development means projects designed with local people so solutions match local needs and knowledge. Example: residents help decide where a clinic should be built and how it will operate. Geographers use it to build ownership and improve long-term success. It matters because local participation usually makes programs more relevant and trusted.",
            marks: 5
        },

        {
            id: "g-sa-81", topic: "wellbeing-strategies",
            q: "Explain how a geographer could use aid partnerships to investigate development strategies.",
            sample: "Aid partnerships means co-operation between governments, NGOs, communities and international agencies. Example: DFAT works with a local NGO and community leaders to improve maternal health services. Geographers use it to combine funding, expertise and local knowledge. It matters because partnerships are strongest when they support local capacity rather than replace it.",
            marks: 4
        },

        {
            id: "g-sa-82", topic: "wellbeing-strategies",
            q: "Outline the relationship between the Sustainable Development Goals and WASH programs.",
            sample: "The Sustainable Development Goals means the UN framework of 17 goals linking poverty reduction, health, education, equality and environmental sustainability, while WASH programs means strategies that improve water, sanitation and hygiene in homes, schools and clinics. For example, a country uses SDG targets to guide work on clean water, gender equality and climate action; meanwhile, a village gains safe water points, toilets and handwashing facilities. Together, geographers use these ideas to set shared global priorities for improving wellbeing and reduce disease and improve health and attendance at school. Both matter because they connect different dimensions of development instead of treating issues in isolation and clean water and sanitation create large wellbeing gains for relatively low cost.",
            marks: 5
        },

        {
            id: "g-sa-83", topic: "wellbeing-strategies",
            q: "Explain TWO consequences of vaccination and public-health campaigns for people or places connected to development strategies.",
            sample: "Vaccination and public-health campaigns means programs that prevent disease through immunisation, clinics, education and early treatment. Example: a measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school. Geographers use it to lift wellbeing quickly through better health outcomes. It matters because health improvements support education, work and household stability.",
            marks: 5
        },

        {
            id: "g-sa-84", topic: "wellbeing-strategies",
            q: "Compare the evidence or insight provided by microfinance and community-led development.",
            sample: "Microfinance means small loans and financial services for people who may not have access to formal banking, while community-led development means projects designed with local people so solutions match local needs and knowledge. For example, a woman starts a small business after receiving a low-value loan and savings support; meanwhile, residents help decide where a clinic should be built and how it will operate. Together, geographers use these ideas to increase income opportunities at household scale and build ownership and improve long-term success. Both matter because it can strengthen independence but works best alongside wider support and local participation usually makes programs more relevant and trusted.",
            marks: 4
        },

        {
            id: "g-sa-85", topic: "wellbeing-strategies",
            q: "Describe ONE real-world example that shows girls’ education.",
            sample: "Girls’ education means programs that keep girls in school and remove barriers such as cost, distance or unsafe travel. Example: scholarships and safe transport help teenage girls complete secondary school. Geographers use it to improve future income, health and gender equality. It matters because education has multiplier effects across families and communities.",
            marks: 4
        },

        {
            id: "g-sa-86", topic: "wellbeing-strategies",
            q: "Explain why decision-makers should consider cash transfers and social protection.",
            sample: "Cash transfers and social protection means payments or support programs that help households meet basic needs during hardship. Example: a family receives regular income support that keeps children in school during drought. Geographers use it to protect wellbeing during shocks and reduce extreme poverty. It matters because basic security can stop temporary hardship becoming long-term disadvantage.",
            marks: 5
        },

        {
            id: "g-sa-87", topic: "wellbeing-strategies",
            q: "Outline how findings about aid partnerships could be communicated to an audience.",
            sample: "Aid partnerships means co-operation between governments, NGOs, communities and international agencies. Example: DFAT works with a local NGO and community leaders to improve maternal health services. Geographers use it to combine funding, expertise and local knowledge. It matters because partnerships are strongest when they support local capacity rather than replace it. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-88", topic: "wellbeing-strategies",
            q: "Explain how WASH programs and vaccination and public-health campaigns can shape a judgement about development strategies.",
            sample: "WASH programs means strategies that improve water, sanitation and hygiene in homes, schools and clinics, while vaccination and public-health campaigns means programs that prevent disease through immunisation, clinics, education and early treatment. For example, a village gains safe water points, toilets and handwashing facilities; meanwhile, a measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school. Together, geographers use these ideas to reduce disease and improve health and attendance at school and lift wellbeing quickly through better health outcomes. Both matter because clean water and sanitation create large wellbeing gains for relatively low cost and health improvements support education, work and household stability.",
            marks: 5
        },


        /* ===== Stakeholders & perspectives on wellbeing ===== */
        {
            id: "g-sa-89", topic: "wellbeing-perspectives",
            q: "Explain government priorities in the study of stakeholder perspectives on wellbeing.",
            sample: "Government priorities means the view that wellbeing programs should improve national indicators, services and stability. Example: a government funds roads, hospitals and schools because it wants broad improvements across a region. Geographers use it to show how public authorities set scale, targets and budgets. It matters because governments often balance social goals with political and financial constraints.",
            marks: 4
        },

        {
            id: "g-sa-90", topic: "wellbeing-perspectives",
            q: "Describe NGO and human-rights perspectives and give ONE example linked to stakeholder perspectives on wellbeing.",
            sample: "NGO and human-rights perspectives means the view that equity, dignity and access for vulnerable groups should shape development choices. Example: an NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth. Geographers use it to bring advocacy and community needs into planning. It matters because they can highlight issues that governments or investors overlook.",
            marks: 4
        },

        {
            id: "g-sa-91", topic: "wellbeing-perspectives",
            q: "Explain why local community perspectives is important when geographers investigate stakeholder perspectives on wellbeing.",
            sample: "Local community perspectives means the lived experience of people directly affected by a project or policy. Example: residents support a clinic but want it built closer to the village and staffed in local languages. Geographers use it to test whether a strategy matches everyday needs on the ground. It matters because community voices often reveal practical issues hidden in official plans.",
            marks: 5
        },

        {
            id: "g-sa-92", topic: "wellbeing-perspectives",
            q: "Compare business and investor perspectives and gender perspectives as ideas used in stakeholder perspectives on wellbeing.",
            sample: "Business and investor perspectives means the view that projects should be efficient, financially viable and create economic opportunity, while gender perspectives means the understanding that women and men may experience wellbeing challenges differently because of power and access. For example, a company supports a development plan that improves infrastructure and workforce skills; meanwhile, women spend hours collecting water, limiting education and paid work opportunities. Together, geographers use these ideas to show how private investment can influence wellbeing outcomes and explain why equal access is essential in development planning. Both matter because business support can bring jobs but may also create trade-offs around profit and equity and programs can fail if they ignore who carries unpaid work or lacks decision-making power.",
            marks: 5
        },

        {
            id: "g-sa-93", topic: "wellbeing-perspectives",
            q: "Identify and explain TWO features of youth perspectives.",
            sample: "Youth perspectives means the view that children and young people need to be heard in decisions about education, safety, work and the future. Example: students ask for safer transport so they can stay in school longer. Geographers use it to show that age changes how development is experienced. It matters because young people live longest with the consequences of today’s decisions.",
            marks: 4
        },

        {
            id: "g-sa-94", topic: "wellbeing-perspectives",
            q: "Describe how Indigenous participation can influence people or places in stakeholder perspectives on wellbeing.",
            sample: "Indigenous participation means the expectation that Indigenous peoples should shape decisions affecting their communities, land and culture. Example: an Indigenous community asks to co-design a housing program rather than having it imposed from outside. Geographers use it to bring self-determination and cultural authority into wellbeing planning. It matters because participation improves relevance, trust and long-term outcomes.",
            marks: 5
        },

        {
            id: "g-sa-95", topic: "wellbeing-perspectives",
            q: "Explain how a geographer could use short-term and long-term trade-offs to investigate stakeholder perspectives on wellbeing.",
            sample: "Short-term and long-term trade-offs means the tension between fast visible gains and slower but deeper improvements in wellbeing. Example: a project creates quick jobs but damages water quality that the community depends on later. Geographers use it to help evaluate whether a strategy is sustainable and fair over time. It matters because good judgements consider immediate benefits alongside future impacts.",
            marks: 4
        },

        {
            id: "g-sa-96", topic: "wellbeing-perspectives",
            q: "Outline the relationship between government priorities and NGO and human-rights perspectives.",
            sample: "Government priorities means the view that wellbeing programs should improve national indicators, services and stability, while NGO and human-rights perspectives means the view that equity, dignity and access for vulnerable groups should shape development choices. For example, a government funds roads, hospitals and schools because it wants broad improvements across a region; meanwhile, an NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth. Together, geographers use these ideas to show how public authorities set scale, targets and budgets and bring advocacy and community needs into planning. Both matter because governments often balance social goals with political and financial constraints and they can highlight issues that governments or investors overlook.",
            marks: 5
        },

        {
            id: "g-sa-97", topic: "wellbeing-perspectives",
            q: "Explain TWO consequences of local community perspectives for people or places connected to stakeholder perspectives on wellbeing.",
            sample: "Local community perspectives means the lived experience of people directly affected by a project or policy. Example: residents support a clinic but want it built closer to the village and staffed in local languages. Geographers use it to test whether a strategy matches everyday needs on the ground. It matters because community voices often reveal practical issues hidden in official plans.",
            marks: 5
        },

        {
            id: "g-sa-98", topic: "wellbeing-perspectives",
            q: "Compare the evidence or insight provided by gender perspectives and Indigenous participation.",
            sample: "Gender perspectives means the understanding that women and men may experience wellbeing challenges differently because of power and access, while Indigenous participation means the expectation that Indigenous peoples should shape decisions affecting their communities, land and culture. For example, women spend hours collecting water, limiting education and paid work opportunities; meanwhile, an Indigenous community asks to co-design a housing program rather than having it imposed from outside. Together, geographers use these ideas to explain why equal access is essential in development planning and bring self-determination and cultural authority into wellbeing planning. Both matter because programs can fail if they ignore who carries unpaid work or lacks decision-making power and participation improves relevance, trust and long-term outcomes.",
            marks: 4
        },

        {
            id: "g-sa-99", topic: "wellbeing-perspectives",
            q: "Describe ONE real-world example that shows business and investor perspectives.",
            sample: "Business and investor perspectives means the view that projects should be efficient, financially viable and create economic opportunity. Example: a company supports a development plan that improves infrastructure and workforce skills. Geographers use it to show how private investment can influence wellbeing outcomes. It matters because business support can bring jobs but may also create trade-offs around profit and equity.",
            marks: 4
        },

        {
            id: "g-sa-100", topic: "wellbeing-perspectives",
            q: "Explain why decision-makers should consider youth perspectives.",
            sample: "Youth perspectives means the view that children and young people need to be heard in decisions about education, safety, work and the future. Example: students ask for safer transport so they can stay in school longer. Geographers use it to show that age changes how development is experienced. It matters because young people live longest with the consequences of today’s decisions.",
            marks: 5
        },

        {
            id: "g-sa-101", topic: "wellbeing-perspectives",
            q: "Outline how findings about short-term and long-term trade-offs could be communicated to an audience.",
            sample: "Short-term and long-term trade-offs means the tension between fast visible gains and slower but deeper improvements in wellbeing. Example: a project creates quick jobs but damages water quality that the community depends on later. Geographers use it to help evaluate whether a strategy is sustainable and fair over time. It matters because good judgements consider immediate benefits alongside future impacts. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-102", topic: "wellbeing-perspectives",
            q: "Explain how NGO and human-rights perspectives and local community perspectives can shape a judgement about stakeholder perspectives on wellbeing.",
            sample: "NGO and human-rights perspectives means the view that equity, dignity and access for vulnerable groups should shape development choices, while local community perspectives means the lived experience of people directly affected by a project or policy. For example, an NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth; meanwhile, residents support a clinic but want it built closer to the village and staffed in local languages. Together, geographers use these ideas to bring advocacy and community needs into planning and test whether a strategy matches everyday needs on the ground. Both matter because they can highlight issues that governments or investors overlook and community voices often reveal practical issues hidden in official plans.",
            marks: 5
        },


        /* ===== Wind power — how it works ===== */
        {
            id: "g-sa-103", topic: "wind-tech",
            q: "Explain energy conversion in a turbine in the study of wind power technology.",
            sample: "Energy conversion in a turbine means the process of turning the kinetic energy of moving air into electrical energy. Example: wind turns the blades, the rotor spins and a generator produces electricity. Geographers use it to explain the basic operation of wind power. It matters because understanding the conversion chain helps explain why turbine design matters.",
            marks: 4
        },

        {
            id: "g-sa-104", topic: "wind-tech",
            q: "Describe capacity factor and give ONE example linked to wind power technology.",
            sample: "Capacity factor means the share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time. Example: a wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site. Geographers use it to compare the performance of wind projects realistically. It matters because it matters because nameplate capacity alone does not show real output.",
            marks: 4
        },

        {
            id: "g-sa-105", topic: "wind-tech",
            q: "Explain why cut-in and cut-out speeds is important when geographers investigate wind power technology.",
            sample: "Cut-in and cut-out speeds means the minimum wind needed for generation and the high wind speed at which turbines shut down for protection. Example: a turbine starts producing at moderate wind but stops during extreme gusts to avoid damage. Geographers use it to explain why wind output varies with weather. It matters because operating limits keep equipment safe and shape generation patterns.",
            marks: 5
        },

        {
            id: "g-sa-106", topic: "wind-tech",
            q: "Compare pitch and yaw control and grid connection as ideas used in wind power technology.",
            sample: "Pitch and yaw control means systems that turn the nacelle into the wind and adjust blade angles to manage power, while grid connection means the cables, transformer and substation that move electricity from turbines into the wider network. For example, the turbine rotates to face changing wind direction and feathers blades during a storm; meanwhile, power from several turbines is stepped up at a substation before entering transmission lines. Together, geographers use these ideas to show how turbines respond to changing conditions and link turbine output to the electricity system people actually use. Both matter because control systems increase efficiency and protect the machine and generation is only useful if it can be delivered reliably to the grid.",
            marks: 5
        },

        {
            id: "g-sa-107", topic: "wind-tech",
            q: "Identify and explain TWO features of storage and firming.",
            sample: "Storage and firming means technologies such as batteries or pumped hydro that help balance variable renewable supply. Example: a battery stores extra energy during windy periods and releases it when demand stays high. Geographers use it to show how wind can support reliable electricity supply. It matters because firming helps match variable generation to demand.",
            marks: 4
        },

        {
            id: "g-sa-108", topic: "wind-tech",
            q: "Describe how onshore and offshore wind can influence people or places in wind power technology.",
            sample: "Onshore and offshore wind means the two main settings for wind farms, with offshore sites often having stronger steadier winds. Example: an offshore project in Bass Strait aims to use stronger marine winds than many inland sites. Geographers use it to compare technological choices for different locations. It matters because site conditions change cost, output and engineering needs.",
            marks: 5
        },

        {
            id: "g-sa-109", topic: "wind-tech",
            q: "Explain how a geographer could use wind resource assessment to investigate wind power technology.",
            sample: "Wind resource assessment means the measurement and modelling of wind speeds before a project is built. Example: developers use masts, LiDAR and long-term data to test whether a ridge has enough wind. Geographers use it to select suitable locations for efficient turbines. It matters because good resource data reduces risk and improves planning.",
            marks: 4
        },

        {
            id: "g-sa-110", topic: "wind-tech",
            q: "Outline the relationship between energy conversion in a turbine and capacity factor.",
            sample: "Energy conversion in a turbine means the process of turning the kinetic energy of moving air into electrical energy, while capacity factor means the share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time. For example, wind turns the blades, the rotor spins and a generator produces electricity; meanwhile, a wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site. Together, geographers use these ideas to explain the basic operation of wind power and compare the performance of wind projects realistically. Both matter because understanding the conversion chain helps explain why turbine design matters and it matters because nameplate capacity alone does not show real output.",
            marks: 5
        },

        {
            id: "g-sa-111", topic: "wind-tech",
            q: "Explain TWO consequences of cut-in and cut-out speeds for people or places connected to wind power technology.",
            sample: "Cut-in and cut-out speeds means the minimum wind needed for generation and the high wind speed at which turbines shut down for protection. Example: a turbine starts producing at moderate wind but stops during extreme gusts to avoid damage. Geographers use it to explain why wind output varies with weather. It matters because operating limits keep equipment safe and shape generation patterns.",
            marks: 5
        },

        {
            id: "g-sa-112", topic: "wind-tech",
            q: "Compare the evidence or insight provided by grid connection and onshore and offshore wind.",
            sample: "Grid connection means the cables, transformer and substation that move electricity from turbines into the wider network, while onshore and offshore wind means the two main settings for wind farms, with offshore sites often having stronger steadier winds. For example, power from several turbines is stepped up at a substation before entering transmission lines; meanwhile, an offshore project in Bass Strait aims to use stronger marine winds than many inland sites. Together, geographers use these ideas to link turbine output to the electricity system people actually use and compare technological choices for different locations. Both matter because generation is only useful if it can be delivered reliably to the grid and site conditions change cost, output and engineering needs.",
            marks: 4
        },

        {
            id: "g-sa-113", topic: "wind-tech",
            q: "Describe ONE real-world example that shows pitch and yaw control.",
            sample: "Pitch and yaw control means systems that turn the nacelle into the wind and adjust blade angles to manage power. Example: the turbine rotates to face changing wind direction and feathers blades during a storm. Geographers use it to show how turbines respond to changing conditions. It matters because control systems increase efficiency and protect the machine.",
            marks: 4
        },

        {
            id: "g-sa-114", topic: "wind-tech",
            q: "Explain why decision-makers should consider storage and firming.",
            sample: "Storage and firming means technologies such as batteries or pumped hydro that help balance variable renewable supply. Example: a battery stores extra energy during windy periods and releases it when demand stays high. Geographers use it to show how wind can support reliable electricity supply. It matters because firming helps match variable generation to demand.",
            marks: 5
        },

        {
            id: "g-sa-115", topic: "wind-tech",
            q: "Outline how findings about wind resource assessment could be communicated to an audience.",
            sample: "Wind resource assessment means the measurement and modelling of wind speeds before a project is built. Example: developers use masts, LiDAR and long-term data to test whether a ridge has enough wind. Geographers use it to select suitable locations for efficient turbines. It matters because good resource data reduces risk and improves planning. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-116", topic: "wind-tech",
            q: "Explain how capacity factor and cut-in and cut-out speeds can shape a judgement about wind power technology.",
            sample: "Capacity factor means the share of actual electricity generated compared with the maximum possible if a turbine ran at full power all the time, while cut-in and cut-out speeds means the minimum wind needed for generation and the high wind speed at which turbines shut down for protection. For example, a wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site; meanwhile, a turbine starts producing at moderate wind but stops during extreme gusts to avoid damage. Together, geographers use these ideas to compare the performance of wind projects realistically and explain why wind output varies with weather. Both matter because it matters because nameplate capacity alone does not show real output and operating limits keep equipment safe and shape generation patterns.",
            marks: 5
        },


        /* ===== Wind power in Australia ===== */
        {
            id: "g-sa-117", topic: "wind-australia",
            q: "Explain South Australia’s wind leadership in the study of wind power in Australia.",
            sample: "South Australia’s wind leadership means the strong contribution of wind to South Australia’s electricity mix compared with most other states. Example: South Australia often records very high renewable shares because wind supplies a major part of demand. Geographers use it to use a clear Australian case study of rapid renewable uptake. It matters because it shows that high wind penetration is already possible with the right grid support.",
            marks: 4
        },

        {
            id: "g-sa-118", topic: "wind-australia",
            q: "Describe major onshore case studies and give ONE example linked to wind power in Australia.",
            sample: "Major onshore case studies means large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill. Example: students compare different operating wind farms across Victoria, South Australia and Queensland. Geographers use it to ground classwork in named Australian examples. It matters because case studies make abstract discussion more specific and convincing.",
            marks: 4
        },

        {
            id: "g-sa-119", topic: "wind-australia",
            q: "Explain why Hornsdale and battery integration is important when geographers investigate wind power in Australia.",
            sample: "Hornsdale and battery integration means the pairing of wind generation with grid-scale batteries to improve reliability and fast response. Example: Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity. Geographers use it to show how technology is being integrated in Australia. It matters because the example proves that storage can support higher renewable shares.",
            marks: 5
        },

        {
            id: "g-sa-120", topic: "wind-australia",
            q: "Compare Renewable Energy Zones and offshore wind proposals as ideas used in wind power in Australia.",
            sample: "Renewable Energy Zones means planned areas where generation, storage and transmission are coordinated for lower-cost build-out, while offshore wind proposals means new Australian projects in declared offshore areas such as Gippsland, Hunter and Illawarra. For example, NSW invests in REZs so wind, solar and storage can connect more efficiently; meanwhile, a proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres. Together, geographers use these ideas to explain how governments organise renewable growth and show how the next phase of wind development may expand. Both matter because co-ordinated planning reduces bottlenecks and cost and offshore wind broadens Australia’s future renewable options.",
            marks: 5
        },

        {
            id: "g-sa-121", topic: "wind-australia",
            q: "Identify and explain TWO features of coexistence with farming.",
            sample: "Coexistence with farming means the ability for turbines to operate on agricultural land while grazing or cropping continues around them. Example: sheep continue grazing between turbines while the landholder receives lease income. Geographers use it to explain why land-use conflict is often lower than assumed. It matters because shared land use can support both farm income and renewable energy.",
            marks: 4
        },

        {
            id: "g-sa-122", topic: "wind-australia",
            q: "Describe how transmission constraints can influence people or places in wind power in Australia.",
            sample: "Transmission constraints means limits in the network that can slow new projects or force output to be curtailed. Example: a windy region cannot connect more turbines until new transmission lines are built. Geographers use it to show why good wind resource alone is not enough. It matters because network capacity is a major factor in project timing and cost.",
            marks: 5
        },

        {
            id: "g-sa-123", topic: "wind-australia",
            q: "Explain how a geographer could use regional jobs and supply chains to investigate wind power in Australia.",
            sample: "Regional jobs and supply chains means the work created through construction, maintenance, transport and local services linked to wind projects. Example: regional towns gain crane work, road upgrades, accommodation demand and technician roles during a build. Geographers use it to connect wind projects to local economic change. It matters because jobs and spending often shape community support for projects.",
            marks: 4
        },

        {
            id: "g-sa-124", topic: "wind-australia",
            q: "Outline the relationship between South Australia’s wind leadership and major onshore case studies.",
            sample: "South Australia’s wind leadership means the strong contribution of wind to South Australia’s electricity mix compared with most other states, while major onshore case studies means large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill. For example, South Australia often records very high renewable shares because wind supplies a major part of demand; meanwhile, students compare different operating wind farms across Victoria, South Australia and Queensland. Together, geographers use these ideas to use a clear Australian case study of rapid renewable uptake and ground classwork in named Australian examples. Both matter because it shows that high wind penetration is already possible with the right grid support and case studies make abstract discussion more specific and convincing.",
            marks: 5
        },

        {
            id: "g-sa-125", topic: "wind-australia",
            q: "Explain TWO consequences of Hornsdale and battery integration for people or places connected to wind power in Australia.",
            sample: "Hornsdale and battery integration means the pairing of wind generation with grid-scale batteries to improve reliability and fast response. Example: Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity. Geographers use it to show how technology is being integrated in Australia. It matters because the example proves that storage can support higher renewable shares.",
            marks: 5
        },

        {
            id: "g-sa-126", topic: "wind-australia",
            q: "Compare the evidence or insight provided by offshore wind proposals and transmission constraints.",
            sample: "Offshore wind proposals means new Australian projects in declared offshore areas such as Gippsland, Hunter and Illawarra, while transmission constraints means limits in the network that can slow new projects or force output to be curtailed. For example, a proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres; meanwhile, a windy region cannot connect more turbines until new transmission lines are built. Together, geographers use these ideas to show how the next phase of wind development may expand and show why good wind resource alone is not enough. Both matter because offshore wind broadens Australia’s future renewable options and network capacity is a major factor in project timing and cost.",
            marks: 4
        },

        {
            id: "g-sa-127", topic: "wind-australia",
            q: "Describe ONE real-world example that shows Renewable Energy Zones.",
            sample: "Renewable Energy Zones means planned areas where generation, storage and transmission are coordinated for lower-cost build-out. Example: NSW invests in REZs so wind, solar and storage can connect more efficiently. Geographers use it to explain how governments organise renewable growth. It matters because co-ordinated planning reduces bottlenecks and cost.",
            marks: 4
        },

        {
            id: "g-sa-128", topic: "wind-australia",
            q: "Explain why decision-makers should consider coexistence with farming.",
            sample: "Coexistence with farming means the ability for turbines to operate on agricultural land while grazing or cropping continues around them. Example: sheep continue grazing between turbines while the landholder receives lease income. Geographers use it to explain why land-use conflict is often lower than assumed. It matters because shared land use can support both farm income and renewable energy.",
            marks: 5
        },

        {
            id: "g-sa-129", topic: "wind-australia",
            q: "Outline how findings about regional jobs and supply chains could be communicated to an audience.",
            sample: "Regional jobs and supply chains means the work created through construction, maintenance, transport and local services linked to wind projects. Example: regional towns gain crane work, road upgrades, accommodation demand and technician roles during a build. Geographers use it to connect wind projects to local economic change. It matters because jobs and spending often shape community support for projects. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-130", topic: "wind-australia",
            q: "Explain how major onshore case studies and Hornsdale and battery integration can shape a judgement about wind power in Australia.",
            sample: "Major onshore case studies means large Australian wind farms such as Macarthur, Snowtown, Coopers Gap and Stockyard Hill, while Hornsdale and battery integration means the pairing of wind generation with grid-scale batteries to improve reliability and fast response. For example, students compare different operating wind farms across Victoria, South Australia and Queensland; meanwhile, Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity. Together, geographers use these ideas to ground classwork in named Australian examples and show how technology is being integrated in Australia. Both matter because case studies make abstract discussion more specific and convincing and the example proves that storage can support higher renewable shares.",
            marks: 5
        },


        /* ===== Wind — environmental impacts & management ===== */
        {
            id: "g-sa-131", topic: "wind-environmental",
            q: "Explain low lifecycle emissions in the study of environmental management of wind power.",
            sample: "Low lifecycle emissions means the very small greenhouse-gas emissions from wind power compared with coal and gas across its full life cycle. Example: replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector. Geographers use it to judge wind as a climate-response strategy. It matters because climate benefits are the main reason wind is central to environmental change management.",
            marks: 4
        },

        {
            id: "g-sa-132", topic: "wind-environmental",
            q: "Describe low operational water use and give ONE example linked to environmental management of wind power.",
            sample: "Low operational water use means the fact that wind turbines use very little water while generating electricity. Example: a wind farm keeps producing during drought without needing cooling water like a thermal power station. Geographers use it to compare wind with water-intensive energy sources. It matters because low water use is a major advantage in dry regions such as much of Australia.",
            marks: 4
        },

        {
            id: "g-sa-133", topic: "wind-environmental",
            q: "Explain why bird and bat strike management is important when geographers investigate environmental management of wind power.",
            sample: "Bird and bat strike management means the monitoring and mitigation of wildlife collisions through siting, curtailment and technology. Example: turbines may be slowed during high-risk migration periods to reduce bat deaths. Geographers use it to show that environmental impacts can be managed rather than ignored. It matters because biodiversity protection is essential for social licence and ecological health.",
            marks: 5
        },

        {
            id: "g-sa-134", topic: "wind-environmental",
            q: "Compare vegetation clearing and micro-siting and noise and shadow flicker management as ideas used in environmental management of wind power.",
            sample: "Vegetation clearing and micro-siting means careful placement of turbines and roads to minimise habitat loss and disturbance, while noise and shadow flicker management means setbacks and design responses that reduce local impacts from sound and moving shadows. For example, developers shift a turbine a short distance to avoid sensitive native vegetation; meanwhile, a project uses setback distances and monitoring to keep nearby homes within planning limits. Together, geographers use these ideas to reduce local ecosystem damage during construction and explain how local amenity issues are assessed during planning. Both matter because small design changes can greatly lower environmental harm and managing local impacts helps balance climate benefits with community wellbeing.",
            marks: 5
        },

        {
            id: "g-sa-135", topic: "wind-environmental",
            q: "Identify and explain TWO features of materials and blade recycling.",
            sample: "Materials and blade recycling means the challenge of using steel, concrete and composite blades and managing them at end of life. Example: older blades are sent for reuse, reprocessing or cement co-processing instead of simple landfill. Geographers use it to apply lifecycle thinking to renewable technology. It matters because strong environmental performance includes manufacturing and decommissioning as well as operation.",
            marks: 4
        },

        {
            id: "g-sa-136", topic: "wind-environmental",
            q: "Describe how environmental impact assessment can influence people or places in environmental management of wind power.",
            sample: "Environmental impact assessment means the formal process of checking likely effects on biodiversity, land, water, heritage and cumulative impacts. Example: an EIS examines threatened species, creek crossings, access roads and nearby projects before approval. Geographers use it to show how environmental decisions are made before construction. It matters because good assessment helps avoid or reduce harm before it occurs.",
            marks: 5
        },

        {
            id: "g-sa-137", topic: "wind-environmental",
            q: "Explain how a geographer could use decommissioning and rehabilitation to investigate environmental management of wind power.",
            sample: "Decommissioning and rehabilitation means the removal, repowering or restoration of sites when turbines reach the end of their life. Example: roads are repaired, equipment removed and disturbed areas replanted after a project closes or is upgraded. Geographers use it to consider the whole life of a wind project. It matters because long-term planning reduces the legacy of infrastructure on the landscape.",
            marks: 4
        },

        {
            id: "g-sa-138", topic: "wind-environmental",
            q: "Outline the relationship between low lifecycle emissions and low operational water use.",
            sample: "Low lifecycle emissions means the very small greenhouse-gas emissions from wind power compared with coal and gas across its full life cycle, while low operational water use means the fact that wind turbines use very little water while generating electricity. For example, replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector; meanwhile, a wind farm keeps producing during drought without needing cooling water like a thermal power station. Together, geographers use these ideas to judge wind as a climate-response strategy and compare wind with water-intensive energy sources. Both matter because climate benefits are the main reason wind is central to environmental change management and low water use is a major advantage in dry regions such as much of Australia.",
            marks: 5
        },

        {
            id: "g-sa-139", topic: "wind-environmental",
            q: "Explain TWO consequences of bird and bat strike management for people or places connected to environmental management of wind power.",
            sample: "Bird and bat strike management means the monitoring and mitigation of wildlife collisions through siting, curtailment and technology. Example: turbines may be slowed during high-risk migration periods to reduce bat deaths. Geographers use it to show that environmental impacts can be managed rather than ignored. It matters because biodiversity protection is essential for social licence and ecological health.",
            marks: 5
        },

        {
            id: "g-sa-140", topic: "wind-environmental",
            q: "Compare the evidence or insight provided by noise and shadow flicker management and environmental impact assessment.",
            sample: "Noise and shadow flicker management means setbacks and design responses that reduce local impacts from sound and moving shadows, while environmental impact assessment means the formal process of checking likely effects on biodiversity, land, water, heritage and cumulative impacts. For example, a project uses setback distances and monitoring to keep nearby homes within planning limits; meanwhile, an EIS examines threatened species, creek crossings, access roads and nearby projects before approval. Together, geographers use these ideas to explain how local amenity issues are assessed during planning and show how environmental decisions are made before construction. Both matter because managing local impacts helps balance climate benefits with community wellbeing and good assessment helps avoid or reduce harm before it occurs.",
            marks: 4
        },

        {
            id: "g-sa-141", topic: "wind-environmental",
            q: "Describe ONE real-world example that shows vegetation clearing and micro-siting.",
            sample: "Vegetation clearing and micro-siting means careful placement of turbines and roads to minimise habitat loss and disturbance. Example: developers shift a turbine a short distance to avoid sensitive native vegetation. Geographers use it to reduce local ecosystem damage during construction. It matters because small design changes can greatly lower environmental harm.",
            marks: 4
        },

        {
            id: "g-sa-142", topic: "wind-environmental",
            q: "Explain why decision-makers should consider materials and blade recycling.",
            sample: "Materials and blade recycling means the challenge of using steel, concrete and composite blades and managing them at end of life. Example: older blades are sent for reuse, reprocessing or cement co-processing instead of simple landfill. Geographers use it to apply lifecycle thinking to renewable technology. It matters because strong environmental performance includes manufacturing and decommissioning as well as operation.",
            marks: 5
        },

        {
            id: "g-sa-143", topic: "wind-environmental",
            q: "Outline how findings about decommissioning and rehabilitation could be communicated to an audience.",
            sample: "Decommissioning and rehabilitation means the removal, repowering or restoration of sites when turbines reach the end of their life. Example: roads are repaired, equipment removed and disturbed areas replanted after a project closes or is upgraded. Geographers use it to consider the whole life of a wind project. It matters because long-term planning reduces the legacy of infrastructure on the landscape. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-144", topic: "wind-environmental",
            q: "Explain how low operational water use and bird and bat strike management can shape a judgement about environmental management of wind power.",
            sample: "Low operational water use means the fact that wind turbines use very little water while generating electricity, while bird and bat strike management means the monitoring and mitigation of wildlife collisions through siting, curtailment and technology. For example, a wind farm keeps producing during drought without needing cooling water like a thermal power station; meanwhile, turbines may be slowed during high-risk migration periods to reduce bat deaths. Together, geographers use these ideas to compare wind with water-intensive energy sources and show that environmental impacts can be managed rather than ignored. Both matter because low water use is a major advantage in dry regions such as much of Australia and biodiversity protection is essential for social licence and ecological health.",
            marks: 5
        },


        /* ===== Wind — community & stakeholder perspectives ===== */
        {
            id: "g-sa-145", topic: "wind-perspectives",
            q: "Explain host farmer perspectives in the study of stakeholder perspectives on wind power.",
            sample: "Host farmer perspectives means the view that turbines can provide lease income while allowing farming to continue. Example: a grazier supports a project because annual payments stabilise income through dry years. Geographers use it to show why some local landholders welcome wind farms. It matters because host payments can improve resilience in agricultural communities.",
            marks: 4
        },

        {
            id: "g-sa-146", topic: "wind-perspectives",
            q: "Describe non-host neighbour concerns and give ONE example linked to stakeholder perspectives on wind power.",
            sample: "Non-host neighbour concerns means the perspective that projects may affect views, noise, shadow flicker or local character. Example: a nearby resident supports renewables in general but worries about several turbines visible from home. Geographers use it to account for local amenity concerns in planning. It matters because social licence depends on taking lived experience seriously.",
            marks: 4
        },

        {
            id: "g-sa-147", topic: "wind-perspectives",
            q: "Explain why local council perspectives is important when geographers investigate stakeholder perspectives on wind power.",
            sample: "Local council perspectives means the balance councils must strike between jobs, rates, road impacts and community expectations. Example: a council wants regional investment but also wants the developer to repair haulage roads. Geographers use it to show how local government weighs benefits against disruption. It matters because councils often mediate between developers and residents.",
            marks: 5
        },

        {
            id: "g-sa-148", topic: "wind-perspectives",
            q: "Compare environmental NGO perspectives and worker and union perspectives as ideas used in stakeholder perspectives on wind power.",
            sample: "Environmental NGO perspectives means the view that well-sited wind farms are important for climate action but need strong biodiversity safeguards, while worker and union perspectives means the focus on safe jobs, training and a just transition from fossil-fuel industries. For example, an environmental group supports the project if threatened species are protected and monitoring is transparent; meanwhile, tradespeople support wind projects because they create construction and maintenance work in regional areas. Together, geographers use these ideas to bring a climate-and-conservation lens to debates and connect energy change to employment and skills. Both matter because support for wind is often conditional on good environmental management and people are more likely to back transition when they can see fair job pathways.",
            marks: 5
        },

        {
            id: "g-sa-149", topic: "wind-perspectives",
            q: "Identify and explain TWO features of consumer and grid perspectives.",
            sample: "Consumer and grid perspectives means the interest in reliable supply and affordable prices as renewable shares increase. Example: electricity users want more clean power but also expect blackouts to be avoided. Geographers use it to show why integration and reliability matter politically. It matters because people judge projects by both environmental outcomes and energy security.",
            marks: 4
        },

        {
            id: "g-sa-150", topic: "wind-perspectives",
            q: "Describe how tourism and landscape perspectives can influence people or places in stakeholder perspectives on wind power.",
            sample: "Tourism and landscape perspectives means the view that turbines may change the visual identity of a place for visitors and residents. Example: a tourism operator worries that a scenic ridgeline will look industrial after a project is built. Geographers use it to recognise that landscapes have economic and cultural meanings. It matters because visual change can shape local attitudes even when broader benefits are accepted.",
            marks: 5
        },

        {
            id: "g-sa-151", topic: "wind-perspectives",
            q: "Explain how a geographer could use community benefit funds to investigate stakeholder perspectives on wind power.",
            sample: "Community benefit funds means local grants or shared-value programs that return some project value to the surrounding community. Example: a wind farm funds hall upgrades, scholarships and sporting equipment in nearby towns. Geographers use it to show one way developers build social licence. It matters because sharing benefits can improve fairness and long-term acceptance.",
            marks: 4
        },

        {
            id: "g-sa-152", topic: "wind-perspectives",
            q: "Outline the relationship between host farmer perspectives and non-host neighbour concerns.",
            sample: "Host farmer perspectives means the view that turbines can provide lease income while allowing farming to continue, while non-host neighbour concerns means the perspective that projects may affect views, noise, shadow flicker or local character. For example, a grazier supports a project because annual payments stabilise income through dry years; meanwhile, a nearby resident supports renewables in general but worries about several turbines visible from home. Together, geographers use these ideas to show why some local landholders welcome wind farms and account for local amenity concerns in planning. Both matter because host payments can improve resilience in agricultural communities and social licence depends on taking lived experience seriously.",
            marks: 5
        },

        {
            id: "g-sa-153", topic: "wind-perspectives",
            q: "Explain TWO consequences of local council perspectives for people or places connected to stakeholder perspectives on wind power.",
            sample: "Local council perspectives means the balance councils must strike between jobs, rates, road impacts and community expectations. Example: a council wants regional investment but also wants the developer to repair haulage roads. Geographers use it to show how local government weighs benefits against disruption. It matters because councils often mediate between developers and residents.",
            marks: 5
        },

        {
            id: "g-sa-154", topic: "wind-perspectives",
            q: "Compare the evidence or insight provided by worker and union perspectives and tourism and landscape perspectives.",
            sample: "Worker and union perspectives means the focus on safe jobs, training and a just transition from fossil-fuel industries, while tourism and landscape perspectives means the view that turbines may change the visual identity of a place for visitors and residents. For example, tradespeople support wind projects because they create construction and maintenance work in regional areas; meanwhile, a tourism operator worries that a scenic ridgeline will look industrial after a project is built. Together, geographers use these ideas to connect energy change to employment and skills and recognise that landscapes have economic and cultural meanings. Both matter because people are more likely to back transition when they can see fair job pathways and visual change can shape local attitudes even when broader benefits are accepted.",
            marks: 4
        },

        {
            id: "g-sa-155", topic: "wind-perspectives",
            q: "Describe ONE real-world example that shows environmental NGO perspectives.",
            sample: "Environmental NGO perspectives means the view that well-sited wind farms are important for climate action but need strong biodiversity safeguards. Example: an environmental group supports the project if threatened species are protected and monitoring is transparent. Geographers use it to bring a climate-and-conservation lens to debates. It matters because support for wind is often conditional on good environmental management.",
            marks: 4
        },

        {
            id: "g-sa-156", topic: "wind-perspectives",
            q: "Explain why decision-makers should consider consumer and grid perspectives.",
            sample: "Consumer and grid perspectives means the interest in reliable supply and affordable prices as renewable shares increase. Example: electricity users want more clean power but also expect blackouts to be avoided. Geographers use it to show why integration and reliability matter politically. It matters because people judge projects by both environmental outcomes and energy security.",
            marks: 5
        },

        {
            id: "g-sa-157", topic: "wind-perspectives",
            q: "Outline how findings about community benefit funds could be communicated to an audience.",
            sample: "Community benefit funds means local grants or shared-value programs that return some project value to the surrounding community. Example: a wind farm funds hall upgrades, scholarships and sporting equipment in nearby towns. Geographers use it to show one way developers build social licence. It matters because sharing benefits can improve fairness and long-term acceptance. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-158", topic: "wind-perspectives",
            q: "Explain how non-host neighbour concerns and local council perspectives can shape a judgement about stakeholder perspectives on wind power.",
            sample: "Non-host neighbour concerns means the perspective that projects may affect views, noise, shadow flicker or local character, while local council perspectives means the balance councils must strike between jobs, rates, road impacts and community expectations. For example, a nearby resident supports renewables in general but worries about several turbines visible from home; meanwhile, a council wants regional investment but also wants the developer to repair haulage roads. Together, geographers use these ideas to account for local amenity concerns in planning and show how local government weighs benefits against disruption. Both matter because social licence depends on taking lived experience seriously and councils often mediate between developers and residents.",
            marks: 5
        },


        /* ===== Wind & Aboriginal Custodianship of Country ===== */
        {
            id: "g-sa-159", topic: "wind-custodianship",
            q: "Explain Country as a living relationship in the study of Aboriginal Custodianship of Country in wind-power planning.",
            sample: "Country as a living relationship means the understanding that Country is a living system of people, place, law and responsibility rather than simply land. Example: Traditional Owners explain that caring for Country involves cultural, spiritual and ecological obligations. Geographers use it to frame environmental management through Aboriginal knowledge and responsibility. It matters because this perspective changes how a project site is understood and managed.",
            marks: 4
        },

        {
            id: "g-sa-160", topic: "wind-custodianship",
            q: "Describe free, prior and informed consent and give ONE example linked to Aboriginal Custodianship of Country in wind-power planning.",
            sample: "Free, prior and informed consent means the principle that Traditional Owners should receive full information early and make decisions without pressure. Example: consultation begins before project design is finalised and consent is sought before works proceed. Geographers use it to show what respectful decision-making looks like on Country. It matters because genuine consent improves ethics, trust and project outcomes.",
            marks: 4
        },

        {
            id: "g-sa-161", topic: "wind-custodianship",
            q: "Explain why cultural mapping and site selection is important when geographers investigate Aboriginal Custodianship of Country in wind-power planning.",
            sample: "Cultural mapping and site selection means the process of identifying significant places so project layout can avoid harm. Example: turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners. Geographers use it to link cultural heritage knowledge directly to planning choices. It matters because early mapping prevents avoidable damage to Country.",
            marks: 5
        },

        {
            id: "g-sa-162", topic: "wind-custodianship",
            q: "Compare Cultural Heritage Management Plans and native title and ILUAs as ideas used in Aboriginal Custodianship of Country in wind-power planning.",
            sample: "Cultural Heritage Management Plans means formal plans that set out how heritage values will be identified, protected and monitored, while native title and ILUAs means legal frameworks and agreements that recognise rights and set conditions for access, benefit-sharing and protection. For example, workers follow agreed procedures if cultural material is found during construction; meanwhile, an Indigenous Land Use Agreement sets out how a renewable project may proceed on Country. Together, geographers use these ideas to translate cultural responsibility into clear project rules and connect cultural authority with Australian law. Both matter because good plans reduce risk and support ongoing protection and agreements can provide clearer expectations for all parties.",
            marks: 5
        },

        {
            id: "g-sa-163", topic: "wind-custodianship",
            q: "Identify and explain TWO features of Indigenous ranger monitoring.",
            sample: "Indigenous ranger monitoring means the involvement of Aboriginal rangers in weed control, biodiversity monitoring and site care. Example: rangers monitor species, erosion and revegetation around turbine pads and access tracks. Geographers use it to show how Custodianship continues after approvals are granted. It matters because ongoing Indigenous management can improve environmental outcomes.",
            marks: 4
        },

        {
            id: "g-sa-164", topic: "wind-custodianship",
            q: "Describe how benefit-sharing and co-ownership can influence people or places in Aboriginal Custodianship of Country in wind-power planning.",
            sample: "Benefit-sharing and co-ownership means arrangements that allow Traditional Owners to receive lasting economic value or an ownership stake in projects. Example: a renewable partnership includes jobs, contracting opportunities and a shared return over time. Geographers use it to show that projects can move beyond simple compensation. It matters because fairer benefit-sharing supports long-term community wellbeing.",
            marks: 5
        },

        {
            id: "g-sa-165", topic: "wind-custodianship",
            q: "Explain how a geographer could use co-governance to investigate Aboriginal Custodianship of Country in wind-power planning.",
            sample: "Co-governance means shared decision-making so Traditional Owners remain involved across planning, construction and operation. Example: Traditional Owners sit on advisory or governance groups throughout the life of a project. Geographers use it to keep cultural authority active instead of limiting it to one-off consultation. It matters because ongoing governance helps ensure promises are carried into practice.",
            marks: 4
        },

        {
            id: "g-sa-166", topic: "wind-custodianship",
            q: "Outline the relationship between Country as a living relationship and free, prior and informed consent.",
            sample: "Country as a living relationship means the understanding that Country is a living system of people, place, law and responsibility rather than simply land, while free, prior and informed consent means the principle that Traditional Owners should receive full information early and make decisions without pressure. For example, Traditional Owners explain that caring for Country involves cultural, spiritual and ecological obligations; meanwhile, consultation begins before project design is finalised and consent is sought before works proceed. Together, geographers use these ideas to frame environmental management through Aboriginal knowledge and responsibility and show what respectful decision-making looks like on Country. Both matter because this perspective changes how a project site is understood and managed and genuine consent improves ethics, trust and project outcomes.",
            marks: 5
        },

        {
            id: "g-sa-167", topic: "wind-custodianship",
            q: "Explain TWO consequences of cultural mapping and site selection for people or places connected to Aboriginal Custodianship of Country in wind-power planning.",
            sample: "Cultural mapping and site selection means the process of identifying significant places so project layout can avoid harm. Example: turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners. Geographers use it to link cultural heritage knowledge directly to planning choices. It matters because early mapping prevents avoidable damage to Country.",
            marks: 5
        },

        {
            id: "g-sa-168", topic: "wind-custodianship",
            q: "Compare the evidence or insight provided by native title and ILUAs and benefit-sharing and co-ownership.",
            sample: "Native title and ILUAs means legal frameworks and agreements that recognise rights and set conditions for access, benefit-sharing and protection, while benefit-sharing and co-ownership means arrangements that allow Traditional Owners to receive lasting economic value or an ownership stake in projects. For example, an Indigenous Land Use Agreement sets out how a renewable project may proceed on Country; meanwhile, a renewable partnership includes jobs, contracting opportunities and a shared return over time. Together, geographers use these ideas to connect cultural authority with Australian law and show that projects can move beyond simple compensation. Both matter because agreements can provide clearer expectations for all parties and fairer benefit-sharing supports long-term community wellbeing.",
            marks: 4
        },

        {
            id: "g-sa-169", topic: "wind-custodianship",
            q: "Describe ONE real-world example that shows Cultural Heritage Management Plans.",
            sample: "Cultural Heritage Management Plans means formal plans that set out how heritage values will be identified, protected and monitored. Example: workers follow agreed procedures if cultural material is found during construction. Geographers use it to translate cultural responsibility into clear project rules. It matters because good plans reduce risk and support ongoing protection.",
            marks: 4
        },

        {
            id: "g-sa-170", topic: "wind-custodianship",
            q: "Explain why decision-makers should consider Indigenous ranger monitoring.",
            sample: "Indigenous ranger monitoring means the involvement of Aboriginal rangers in weed control, biodiversity monitoring and site care. Example: rangers monitor species, erosion and revegetation around turbine pads and access tracks. Geographers use it to show how Custodianship continues after approvals are granted. It matters because ongoing Indigenous management can improve environmental outcomes.",
            marks: 5
        },

        {
            id: "g-sa-171", topic: "wind-custodianship",
            q: "Outline how findings about co-governance could be communicated to an audience.",
            sample: "Co-governance means shared decision-making so Traditional Owners remain involved across planning, construction and operation. Example: Traditional Owners sit on advisory or governance groups throughout the life of a project. Geographers use it to keep cultural authority active instead of limiting it to one-off consultation. It matters because ongoing governance helps ensure promises are carried into practice. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-172", topic: "wind-custodianship",
            q: "Explain how free, prior and informed consent and cultural mapping and site selection can shape a judgement about Aboriginal Custodianship of Country in wind-power planning.",
            sample: "Free, prior and informed consent means the principle that Traditional Owners should receive full information early and make decisions without pressure, while cultural mapping and site selection means the process of identifying significant places so project layout can avoid harm. For example, consultation begins before project design is finalised and consent is sought before works proceed; meanwhile, turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners. Together, geographers use these ideas to show what respectful decision-making looks like on Country and link cultural heritage knowledge directly to planning choices. Both matter because genuine consent improves ethics, trust and project outcomes and early mapping prevents avoidable damage to Country.",
            marks: 5
        },


        /* ===== Wind — policy, transition & comparison ===== */
        {
            id: "g-sa-173", topic: "wind-policy",
            q: "Explain policy certainty in the study of wind-energy policy and transition.",
            sample: "Policy certainty means clear long-term government signals that reduce risk for investors in renewable energy. Example: developers commit to new projects when they can see stable targets and rules for the next decade. Geographers use it to explain why policy settings influence build rates. It matters because uncertain policy can slow investment even when the wind resource is strong.",
            marks: 4
        },

        {
            id: "g-sa-174", topic: "wind-policy",
            q: "Describe the 82% renewable-electricity target and give ONE example linked to wind-energy policy and transition.",
            sample: "The 82% renewable-electricity target means Australia’s national goal of reaching about 82 percent renewable electricity by 2030. Example: wind and solar projects are planned to help meet the 2030 electricity target. Geographers use it to connect individual projects to national transition goals. It matters because targets shape planning, markets and public debate.",
            marks: 4
        },

        {
            id: "g-sa-175", topic: "wind-policy",
            q: "Explain why the Integrated System Plan is important when geographers investigate wind-energy policy and transition.",
            sample: "The Integrated System Plan means AEMO’s roadmap for transmission and generation investment across the electricity system. Example: new transmission corridors are identified so renewable zones can connect to demand centres. Geographers use it to show how system-wide planning supports wind growth. It matters because wind projects need network planning as well as local approvals.",
            marks: 5
        },

        {
            id: "g-sa-176", topic: "wind-policy",
            q: "Compare offshore wind legislation and planning and environmental approval as ideas used in wind-energy policy and transition.",
            sample: "Offshore wind legislation means the federal framework that allows offshore areas to be declared and licensed for wind projects, while planning and environmental approval means the mix of state and federal assessment rules that check whether projects are suitable. For example, declared areas off Gippsland, Hunter and Illawarra open the door to offshore proposals; meanwhile, a developer must address biodiversity, heritage, noise and land-use issues before approval is granted. Together, geographers use these ideas to explain how policy creates new development opportunities and show how governments manage trade-offs in the transition. Both matter because laws matter because they decide where and how projects can proceed and strong approval systems help balance speed with environmental care.",
            marks: 5
        },

        {
            id: "g-sa-177", topic: "wind-policy",
            q: "Identify and explain TWO features of storage and demand-side firming.",
            sample: "Storage and demand-side firming means the policy focus on batteries, pumped hydro and flexible demand to support variable renewables. Example: households, batteries and industries shift energy use to better match windy periods. Geographers use it to show that wind policy is also about reliable system operation. It matters because firming policies reduce the risks of relying on variable generation alone.",
            marks: 4
        },

        {
            id: "g-sa-178", topic: "wind-policy",
            q: "Describe how just transition can influence people or places in wind-energy policy and transition.",
            sample: "Just transition means the idea that workers and regions affected by fossil-fuel decline should gain fair support and new opportunities. Example: training and regional investment are directed to former coal communities as renewable projects expand. Geographers use it to connect climate policy to social fairness. It matters because transitions are stronger when benefits and burdens are shared more fairly.",
            marks: 5
        },

        {
            id: "g-sa-179", topic: "wind-policy",
            q: "Explain how a geographer could use a diversified energy mix to investigate wind-energy policy and transition.",
            sample: "A diversified energy mix means the approach of combining wind with solar, hydro, storage and some flexible backup instead of depending on one source. Example: wind produces strongly overnight or in winter while solar peaks in daylight, so the mix is more balanced together. Geographers use it to compare wind with other technologies in the overall system. It matters because diversity improves reliability and reduces over-reliance on a single pattern of generation.",
            marks: 4
        },

        {
            id: "g-sa-180", topic: "wind-policy",
            q: "Outline the relationship between policy certainty and the 82% renewable-electricity target.",
            sample: "Policy certainty means clear long-term government signals that reduce risk for investors in renewable energy, while the 82% renewable-electricity target means Australia’s national goal of reaching about 82 percent renewable electricity by 2030. For example, developers commit to new projects when they can see stable targets and rules for the next decade; meanwhile, wind and solar projects are planned to help meet the 2030 electricity target. Together, geographers use these ideas to explain why policy settings influence build rates and connect individual projects to national transition goals. Both matter because uncertain policy can slow investment even when the wind resource is strong and targets shape planning, markets and public debate.",
            marks: 5
        },

        {
            id: "g-sa-181", topic: "wind-policy",
            q: "Explain TWO consequences of the Integrated System Plan for people or places connected to wind-energy policy and transition.",
            sample: "The Integrated System Plan means AEMO’s roadmap for transmission and generation investment across the electricity system. Example: new transmission corridors are identified so renewable zones can connect to demand centres. Geographers use it to show how system-wide planning supports wind growth. It matters because wind projects need network planning as well as local approvals.",
            marks: 5
        },

        {
            id: "g-sa-182", topic: "wind-policy",
            q: "Compare the evidence or insight provided by planning and environmental approval and just transition.",
            sample: "Planning and environmental approval means the mix of state and federal assessment rules that check whether projects are suitable, while just transition means the idea that workers and regions affected by fossil-fuel decline should gain fair support and new opportunities. For example, a developer must address biodiversity, heritage, noise and land-use issues before approval is granted; meanwhile, training and regional investment are directed to former coal communities as renewable projects expand. Together, geographers use these ideas to show how governments manage trade-offs in the transition and connect climate policy to social fairness. Both matter because strong approval systems help balance speed with environmental care and transitions are stronger when benefits and burdens are shared more fairly.",
            marks: 4
        },

        {
            id: "g-sa-183", topic: "wind-policy",
            q: "Describe ONE real-world example that shows offshore wind legislation.",
            sample: "Offshore wind legislation means the federal framework that allows offshore areas to be declared and licensed for wind projects. Example: declared areas off Gippsland, Hunter and Illawarra open the door to offshore proposals. Geographers use it to explain how policy creates new development opportunities. It matters because laws matter because they decide where and how projects can proceed.",
            marks: 4
        },

        {
            id: "g-sa-184", topic: "wind-policy",
            q: "Explain why decision-makers should consider storage and demand-side firming.",
            sample: "Storage and demand-side firming means the policy focus on batteries, pumped hydro and flexible demand to support variable renewables. Example: households, batteries and industries shift energy use to better match windy periods. Geographers use it to show that wind policy is also about reliable system operation. It matters because firming policies reduce the risks of relying on variable generation alone.",
            marks: 5
        },

        {
            id: "g-sa-185", topic: "wind-policy",
            q: "Outline how findings about a diversified energy mix could be communicated to an audience.",
            sample: "A diversified energy mix means the approach of combining wind with solar, hydro, storage and some flexible backup instead of depending on one source. Example: wind produces strongly overnight or in winter while solar peaks in daylight, so the mix is more balanced together. Geographers use it to compare wind with other technologies in the overall system. It matters because diversity improves reliability and reduces over-reliance on a single pattern of generation. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-186", topic: "wind-policy",
            q: "Explain how the 82% renewable-electricity target and the Integrated System Plan can shape a judgement about wind-energy policy and transition.",
            sample: "The 82% renewable-electricity target means Australia’s national goal of reaching about 82 percent renewable electricity by 2030, while the Integrated System Plan means AEMO’s roadmap for transmission and generation investment across the electricity system. For example, wind and solar projects are planned to help meet the 2030 electricity target; meanwhile, new transmission corridors are identified so renewable zones can connect to demand centres. Together, geographers use these ideas to connect individual projects to national transition goals and show how system-wide planning supports wind growth. Both matter because targets shape planning, markets and public debate and wind projects need network planning as well as local approvals.",
            marks: 5
        },


        /* ===== Geographical tools & communication ===== */
        {
            id: "g-sa-187", topic: "geo-tools",
            q: "Explain choropleth maps in the study of geographical inquiry and communication.",
            sample: "Choropleth maps means maps that use shading to show how a value changes across areas such as countries or local government regions. Example: an atlas shades countries by HDI so students can quickly see global patterns. Geographers use it to communicate spatial variation clearly. It matters because good map design can make complex patterns easier to interpret.",
            marks: 4
        },

        {
            id: "g-sa-188", topic: "geo-tools",
            q: "Describe GIS layered analysis and give ONE example linked to geographical inquiry and communication.",
            sample: "GIS layered analysis means the use of digital layers such as topography, wind speed, biodiversity and settlements in one system. Example: a planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites. Geographers use it to support evidence-based geographical decision-making. It matters because GIS helps compare many variables at once.",
            marks: 4
        },

        {
            id: "g-sa-189", topic: "geo-tools",
            q: "Explain why topographic and wind-resource maps is important when geographers investigate geographical inquiry and communication.",
            sample: "Topographic and wind-resource maps means maps that show elevation, landform and average wind conditions. Example: a ridge with stronger winds and suitable access stands out on a site-selection map. Geographers use it to identify how physical geography affects a project. It matters because wind power and wellbeing studies both depend on location-specific evidence.",
            marks: 5
        },

        {
            id: "g-sa-190", topic: "geo-tools",
            q: "Compare fieldwork and interviews and graphs and statistics as ideas used in geographical inquiry and communication.",
            sample: "Fieldwork and interviews means the collection of first-hand observations, measurements and stakeholder views in the field, while graphs and statistics means numerical tools such as line graphs, scatter plots and summary tables. For example, students visit a site, take notes and interview local residents about perceived impacts; meanwhile, a line graph shows renewable generation rising over time while a table compares HDI values. Together, geographers use these ideas to add ground-level evidence to maps and statistics and show trends, comparisons and relationships clearly. Both matter because field evidence can confirm or challenge desk research and quantitative evidence helps support strong geographical arguments.",
            marks: 5
        },

        {
            id: "g-sa-191", topic: "geo-tools",
            q: "Identify and explain TWO features of remote sensing.",
            sample: "Remote sensing means satellite or aerial imagery used to monitor land cover, vegetation and change over time. Example: before-and-after images show how a project site changed during construction and rehabilitation. Geographers use it to observe change across large areas without being on the ground everywhere. It matters because remote sensing is useful for tracking environmental management over time.",
            marks: 4
        },

        {
            id: "g-sa-192", topic: "geo-tools",
            q: "Describe how source evaluation can influence people or places in geographical inquiry and communication.",
            sample: "Source evaluation means checking who produced a source, what evidence it uses, how current it is and whether it shows bias. Example: a student compares an industry brochure with CSIRO data and local interview evidence. Geographers use it to judge reliability before accepting claims. It matters because good communication depends on trustworthy evidence.",
            marks: 5
        },

        {
            id: "g-sa-193", topic: "geo-tools",
            q: "Explain how a geographer could use annotated diagrams and structured reports to investigate geographical inquiry and communication.",
            sample: "Annotated diagrams and structured reports means clear labelled visuals and organised writing that explain processes, impacts and judgements. Example: a report uses a labelled turbine diagram, a map and a clear conclusion to explain findings. Geographers use it to communicate geographical information to different audiences. It matters because strong structure helps evidence and judgement make sense.",
            marks: 4
        },

        {
            id: "g-sa-194", topic: "geo-tools",
            q: "Outline the relationship between choropleth maps and GIS layered analysis.",
            sample: "Choropleth maps means maps that use shading to show how a value changes across areas such as countries or local government regions, while GIS layered analysis means the use of digital layers such as topography, wind speed, biodiversity and settlements in one system. For example, an atlas shades countries by HDI so students can quickly see global patterns; meanwhile, a planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites. Together, geographers use these ideas to communicate spatial variation clearly and support evidence-based geographical decision-making. Both matter because good map design can make complex patterns easier to interpret and GIS helps compare many variables at once.",
            marks: 5
        },

        {
            id: "g-sa-195", topic: "geo-tools",
            q: "Explain TWO consequences of topographic and wind-resource maps for people or places connected to geographical inquiry and communication.",
            sample: "Topographic and wind-resource maps means maps that show elevation, landform and average wind conditions. Example: a ridge with stronger winds and suitable access stands out on a site-selection map. Geographers use it to identify how physical geography affects a project. It matters because wind power and wellbeing studies both depend on location-specific evidence.",
            marks: 5
        },

        {
            id: "g-sa-196", topic: "geo-tools",
            q: "Compare the evidence or insight provided by graphs and statistics and source evaluation.",
            sample: "Graphs and statistics means numerical tools such as line graphs, scatter plots and summary tables, while source evaluation means checking who produced a source, what evidence it uses, how current it is and whether it shows bias. For example, a line graph shows renewable generation rising over time while a table compares HDI values; meanwhile, a student compares an industry brochure with CSIRO data and local interview evidence. Together, geographers use these ideas to show trends, comparisons and relationships clearly and judge reliability before accepting claims. Both matter because quantitative evidence helps support strong geographical arguments and good communication depends on trustworthy evidence.",
            marks: 4
        },

        {
            id: "g-sa-197", topic: "geo-tools",
            q: "Describe ONE real-world example that shows fieldwork and interviews.",
            sample: "Fieldwork and interviews means the collection of first-hand observations, measurements and stakeholder views in the field. Example: students visit a site, take notes and interview local residents about perceived impacts. Geographers use it to add ground-level evidence to maps and statistics. It matters because field evidence can confirm or challenge desk research.",
            marks: 4
        },

        {
            id: "g-sa-198", topic: "geo-tools",
            q: "Explain why decision-makers should consider remote sensing.",
            sample: "Remote sensing means satellite or aerial imagery used to monitor land cover, vegetation and change over time. Example: before-and-after images show how a project site changed during construction and rehabilitation. Geographers use it to observe change across large areas without being on the ground everywhere. It matters because remote sensing is useful for tracking environmental management over time.",
            marks: 5
        },

        {
            id: "g-sa-199", topic: "geo-tools",
            q: "Outline how findings about annotated diagrams and structured reports could be communicated to an audience.",
            sample: "Annotated diagrams and structured reports means clear labelled visuals and organised writing that explain processes, impacts and judgements. Example: a report uses a labelled turbine diagram, a map and a clear conclusion to explain findings. Geographers use it to communicate geographical information to different audiences. It matters because strong structure helps evidence and judgement make sense. Findings could be communicated through a clear report, map, graph or public explanation suited to the audience.",
            marks: 4
        },

        {
            id: "g-sa-200", topic: "geo-tools",
            q: "Explain how GIS layered analysis and topographic and wind-resource maps can shape a judgement about geographical inquiry and communication.",
            sample: "GIS layered analysis means the use of digital layers such as topography, wind speed, biodiversity and settlements in one system, while topographic and wind-resource maps means maps that show elevation, landform and average wind conditions. For example, a planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites; meanwhile, a ridge with stronger winds and suitable access stands out on a site-selection map. Together, geographers use these ideas to support evidence-based geographical decision-making and identify how physical geography affects a project. Both matter because GIS helps compare many variables at once and wind power and wellbeing studies both depend on location-specific evidence.",
            marks: 5
        }

    ],

    long: [
        {
            id: "g-la-1", topic: "wellbeing-spatial",
            q: "Extended response (10 marks): Analyse the causes of spatial variations in human wellbeing AT A GLOBAL SCALE, supporting your answer with specific examples.",
            sample: "Possible structure: introduction defines wellbeing and notes uneven distribution. Body 1 — economic causes: colonial legacies, trade structures, debt burdens (compare HDI of Norway 0.96 with Niger 0.40). Body 2 — political: governance, conflict, corruption (DRC, Yemen). Body 3 — environmental: drought, disease burden, climate vulnerability (Sahel, Pacific Island states). Body 4 — social: gender inequality, education access (Sub-Saharan Africa). Conclusion: variation is multi-causal, requiring coordinated, scale-appropriate action.",
            marks: 10
        },
        {
            id: "g-la-2", topic: "wind-environmental",
            q: "Extended response (10 marks): Evaluate the effectiveness of wind power as a strategy to manage environmental change in Australia. Refer to environmental impacts, stakeholder perspectives, and at least ONE specific Australian example.",
            sample: "Strong response will: state a clear thesis (e.g. 'Well-sited wind power is one of Australia's most effective tools to manage environmental change, but its benefits are maximised when paired with storage, robust community engagement and Indigenous custodianship'). Body 1 — emissions and water benefits (lifecycle ~11 g/kWh vs coal ~800; minimal water; supports Australia's 82% by 2030 target). Body 2 — local environmental concerns and management (bird/bat strikes — siting, micro-siting, curtailment; blade end-of-life; cumulative impacts in REZs — strategic environmental assessment). Body 3 — stakeholder perspectives (host farmers, neighbours, councils, NGOs, Traditional Owners) and how community benefit funds and CHMPs build social licence. Body 4 — Australian example: Macarthur (VIC) showing scale benefit; Hornsdale (SA) showing wind+battery firming. Conclusion: highly effective, but effectiveness is contingent on integration, equity and Custodianship.",
            marks: 10
        },
        {
            id: "g-la-3", topic: "wind-custodianship",
            q: "Extended response (10 marks): Discuss how Aboriginal Peoples' Custodianship of Country can shape the planning, construction and operation of a wind farm. Reference GE5-APC-02 and at least ONE Australian example.",
            sample: "Possible thesis: 'Custodianship provides a foundation for environmental management of wind sites that improves both ecological and community wellbeing outcomes'. Planning: cultural mapping; FPIC and ILUAs; co-design of site layout to avoid culturally significant features. Construction: Cultural Heritage Management Plans; cultural inductions for workers; Indigenous procurement targets. Operation: Indigenous rangers monitoring biodiversity, weeds and revegetation; cultural burning where suitable; equity ownership models (e.g. Yindjibarndi Energy Corporation in the Pilbara). Outcomes: stronger environmental management, employment, intergenerational knowledge transfer and improved Community wellbeing. Limitations: implementation depends on the developer's commitment, regulatory enforcement and sustained capacity-building. Conclusion: Custodianship transforms wind from an extractive pattern to a partnership-based strategy aligned with both environmental and social goals.",
            marks: 10
        },
        {
            id: "g-la-4", topic: "wind-perspectives",
            q: "Extended response (8 marks): Account for the differing perspectives of FOUR stakeholder groups on a proposed wind farm in regional NSW. Indicate how planners might balance these perspectives.",
            sample: "Identify and explain four perspectives: 1) Host farmers (income, drought-proofing); 2) Non-host neighbours (visual amenity, noise, property values); 3) Traditional Owners (cultural heritage, FPIC, possible co-ownership); 4) Environmental groups (climate benefit, biodiversity safeguards); 5) Local council (rates, employment, infrastructure wear); 6) Workers / unions (just-transition jobs). Explain reasons for differences (values, scale, time-frame, lived experience). Balancing strategies: early and inclusive consultation; rigorous EIS; Cultural Heritage Management Plan with Traditional Owners; setbacks and noise limits; community benefit fund; transparent reporting; periodic post-construction review.",
            marks: 8
        },
        {
            id: "g-la-5", topic: "wellbeing-strategies",
            q: "Extended response (8 marks): Discuss the role of NGOs in improving wellbeing, using a specific case study.",
            sample: "Case: Oxfam's WASH (water, sanitation and hygiene) programs in East Africa. Discuss what NGOs do (advocacy, service delivery, emergency response, data collection); strengths (reach beyond governments, local knowledge, flexible response); weaknesses (donor dependence, sustainability, fragmentation). Evaluate: NGO contributions are vital but most effective when complementing — not replacing — strong public institutions and community ownership.",
            marks: 8
        },
        {
            id: "g-la-6", topic: "wind-policy",
            q: "Extended response (10 marks): To what extent should Australia rely on wind power to meet its emissions-reduction targets? Refer to environmental, social and economic factors.",
            sample: "Possible thesis: 'Wind is essential but not sufficient on its own — it should be a major share of a diversified, well-integrated low-emissions system'. Environmental: low emissions, low water use, biodiversity considerations, end-of-life. Social: regional jobs, community benefit funds, Indigenous partnerships, neighbour amenity. Economic: low LCOE for new build, integration costs (storage, transmission), price volatility, supply chain. Address counter-arguments (intermittency, social licence) with evidence-based responses (storage, REZ planning, FPIC). Conclude with a balanced position.",
            marks: 10
        },

        /* ===== Expanded Geography question bank ===== */
        /* ===== Concepts of wellbeing ===== */
        {
            id: "g-la-7", topic: "wellbeing-concepts",
            q: "Extended response (8 marks): Explain why human wellbeing is multi-dimensional. Refer to economic, social, political and environmental dimensions.",
            sample: "Strong response will define the key ideas in human wellbeing and use economic wellbeing, social wellbeing, political wellbeing and environmental wellbeing. It could refer to examples such as a household can pay rent, buy food and manage transport because stable work covers everyday costs; high school attendance, reliable health care and low preventable disease improve daily life in a region; citizens can vote, speak freely and seek legal protection when treated unfairly. It should explain how geographers use these ideas to explain patterns in income security and material living standards; show how services and social conditions shape quality of life; judge whether people can influence government and live with security. A balanced judgement should note that Money supports choices and access but does not guarantee fairness or happiness; Strong social wellbeing helps people participate fully in their community; Without rights and accountability other forms of wellbeing can be fragile.",
            marks: 8
        },

        {
            id: "g-la-8", topic: "wellbeing-concepts",
            q: "Extended response (10 marks): Evaluate the usefulness of objective and subjective indicators when describing human wellbeing.",
            sample: "Strong response will define the key ideas in human wellbeing and use objective indicators, subjective wellbeing, material and non-material needs and scale and inequality. It could refer to examples such as a geographer compares countries using infant mortality, school completion and access to electricity; survey responses asking residents to rate their quality of life and sense of belonging; a family has shelter and food but also needs safety, respect and connection to community. It should explain how geographers use these ideas to compare living conditions between places with consistent measurable data; capture how people experience life rather than relying only on statistics; avoid reducing wellbeing to income or possessions alone. A balanced judgement should note that They reveal patterns of advantage and disadvantage that opinion alone can hide; It complements objective data because strong averages do not always mean people feel well; People need meaning and social connection as well as goods and services.",
            marks: 10
        },

        {
            id: "g-la-9", topic: "wellbeing-concepts",
            q: "Extended response (8 marks): Discuss how material and non-material needs shape overall wellbeing.",
            sample: "Strong response will define the key ideas in human wellbeing and use material and non-material needs, economic wellbeing, social wellbeing and environmental wellbeing. It could refer to examples such as a family has shelter and food but also needs safety, respect and connection to community; a household can pay rent, buy food and manage transport because stable work covers everyday costs; high school attendance, reliable health care and low preventable disease improve daily life in a region. It should explain how geographers use these ideas to avoid reducing wellbeing to income or possessions alone; explain patterns in income security and material living standards; show how services and social conditions shape quality of life. A balanced judgement should note that People need meaning and social connection as well as goods and services; Money supports choices and access but does not guarantee fairness or happiness; Strong social wellbeing helps people participate fully in their community.",
            marks: 8
        },

        {
            id: "g-la-10", topic: "wellbeing-concepts",
            q: "Extended response (10 marks): Analyse why scale and inequality complicate simple judgements about wellbeing.",
            sample: "Strong response will define the key ideas in human wellbeing and use scale and inequality, objective indicators, subjective wellbeing and economic wellbeing. It could refer to examples such as a country records high income overall but remote communities still lack doctors and reliable transport; a geographer compares countries using infant mortality, school completion and access to electricity; survey responses asking residents to rate their quality of life and sense of belonging. It should explain how geographers use these ideas to look beyond national totals to see who benefits and who is left behind; compare living conditions between places with consistent measurable data; capture how people experience life rather than relying only on statistics. A balanced judgement should note that Good geography checks patterns at multiple scales before making a judgement; They reveal patterns of advantage and disadvantage that opinion alone can hide; It complements objective data because strong averages do not always mean people feel well.",
            marks: 10
        },


        /* ===== Measuring & comparing wellbeing ===== */
        {
            id: "g-la-11", topic: "wellbeing-measures",
            q: "Extended response (10 marks): Evaluate the strengths and limitations of HDI as a measure of wellbeing.",
            sample: "Strong response will define the key ideas in wellbeing data and use HDI, the Gini coefficient, the Multidimensional Poverty Index and the Better Life Index and wellbeing surveys. It could refer to examples such as a teacher ranks countries using one score that includes schooling, health and GNI per person; two countries have similar average income but one has a much higher Gini because wealth is concentrated; a household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel. It should explain how geographers use these ideas to compare development with a broader lens than money alone; show whether national prosperity is shared fairly; identify poverty that income figures can miss. A balanced judgement should note that It gives a clearer overview than a single economic statistic; Inequality changes how useful an average income figure really is; It highlights daily disadvantages that shape quality of life.",
            marks: 10
        },

        {
            id: "g-la-12", topic: "wellbeing-measures",
            q: "Extended response (8 marks): Compare GDP per capita, GNI per capita and HDI as measures of development.",
            sample: "Strong response will define the key ideas in wellbeing data and use GDP per capita, GNI per capita, HDI and the Better Life Index and wellbeing surveys. It could refer to examples such as a report divides total national production by population to show average output per person; a country with many citizens working overseas records income flowing back to residents; a teacher ranks countries using one score that includes schooling, health and GNI per person. It should explain how geographers use these ideas to estimate the size of an economy relative to its population; show how much income residents actually receive; compare development with a broader lens than money alone. A balanced judgement should note that It is easy to compare but misses distribution, unpaid work and sustainability; It can be more useful than GDP in open economies with strong income flows; It gives a clearer overview than a single economic statistic.",
            marks: 8
        },

        {
            id: "g-la-13", topic: "wellbeing-measures",
            q: "Extended response (8 marks): Explain why inequality and poverty measures should sit beside average indicators of wellbeing.",
            sample: "Strong response will define the key ideas in wellbeing data and use the Gini coefficient, the Multidimensional Poverty Index, GDP per capita and life expectancy. It could refer to examples such as two countries have similar average income but one has a much higher Gini because wealth is concentrated; a household may not be income-poor on paper but still lacks sanitation, schooling and clean cooking fuel; a report divides total national production by population to show average output per person. It should explain how geographers use these ideas to show whether national prosperity is shared fairly; identify poverty that income figures can miss; estimate the size of an economy relative to its population. A balanced judgement should note that Inequality changes how useful an average income figure really is; It highlights daily disadvantages that shape quality of life; It is easy to compare but misses distribution, unpaid work and sustainability.",
            marks: 8
        },

        {
            id: "g-la-14", topic: "wellbeing-measures",
            q: "Extended response (10 marks): Discuss how geographers can use multiple indicators to make a balanced judgement about wellbeing.",
            sample: "Strong response will define the key ideas in wellbeing data and use HDI, life expectancy, schooling measures and the Better Life Index and wellbeing surveys. It could refer to examples such as a teacher ranks countries using one score that includes schooling, health and GNI per person; a population with low preventable disease and strong health care usually records higher life expectancy; a country with high literacy and long time spent in school usually scores better on education measures. It should explain how geographers use these ideas to compare development with a broader lens than money alone; compare health outcomes between places; show the depth and reach of education in a society. A balanced judgement should note that It gives a clearer overview than a single economic statistic; It summarises long-term access to nutrition, sanitation and health services; Education affects future income, health and civic participation.",
            marks: 10
        },


        /* ===== Spatial variations in wellbeing ===== */
        {
            id: "g-la-15", topic: "wellbeing-spatial",
            q: "Extended response (10 marks): Analyse the causes of spatial variation in wellbeing at a global scale.",
            sample: "Strong response will define the key ideas in global wellbeing patterns and use the global development gap, colonial legacy, conflict and fragile governance and climate vulnerability. It could refer to examples such as countries in Northern Europe record very high HDI while many conflict-affected states remain much lower; former colonies that exported raw materials often entered independence with weaker industry and infrastructure; war damages clinics, schools, transport and trust in institutions. It should explain how geographers use these ideas to describe broad spatial patterns in development; explain why some countries started from an unequal position; account for sudden or ongoing declines in wellbeing. A balanced judgement should note that It helps geographers compare regions and ask why gaps persist; Historical structures can still shape present-day wellbeing; When governance is weak it is harder to deliver health, education and jobs.",
            marks: 10
        },

        {
            id: "g-la-16", topic: "wellbeing-spatial",
            q: "Extended response (8 marks): Explain how access to infrastructure and services influences wellbeing at different scales.",
            sample: "Strong response will define the key ideas in global wellbeing patterns and use access to infrastructure and services, urban-rural variation, within-country inequality and the global development gap. It could refer to examples such as an isolated settlement without all-weather roads struggles to access health care and markets; a capital city may have universities and hospitals while distant villages have limited services; a resource-rich country has luxury districts and informal settlements existing side by side. It should explain how geographers use these ideas to show how basic services influence quality of life; compare internal patterns rather than only comparing countries; avoid treating one national average as the whole story. A balanced judgement should note that Infrastructure shapes opportunity, safety and resilience; Within-country variation can be as important as international variation; Inequality can leave many people excluded even when a country appears wealthy.",
            marks: 8
        },

        {
            id: "g-la-17", topic: "wellbeing-spatial",
            q: "Extended response (8 marks): Discuss how migration and inequality can both reduce and reinforce wellbeing gaps.",
            sample: "Strong response will define the key ideas in global wellbeing patterns and use migration and remittances, within-country inequality, the global development gap and colonial legacy. It could refer to examples such as a worker moves overseas, sends money home and helps relatives pay school fees and health costs; a resource-rich country has luxury districts and informal settlements existing side by side; countries in Northern Europe record very high HDI while many conflict-affected states remain much lower. It should explain how geographers use these ideas to explain how global connections can shift local living standards; avoid treating one national average as the whole story; describe broad spatial patterns in development. A balanced judgement should note that Migration can lift wellbeing but may also drain skilled workers from poorer regions; Inequality can leave many people excluded even when a country appears wealthy; It helps geographers compare regions and ask why gaps persist.",
            marks: 8
        },


        /* ===== Wellbeing in Australia ===== */
        {
            id: "g-la-18", topic: "wellbeing-australia",
            q: "Extended response (10 marks): Analyse the causes of spatial variation in wellbeing within Australia.",
            sample: "Strong response will define the key ideas in Australian wellbeing and use remoteness, SEIFA, housing affordability and access to health care and education. It could refer to examples such as a remote community waits longer for specialist health visits and pays more for groceries; a planner maps suburbs by SEIFA to identify where disadvantage is concentrated; a family spends so much on rent that it cuts back on food, transport and school activities. It should explain how geographers use these ideas to explain why location affects wellbeing in Australia; compare wellbeing patterns between local areas; show how cost of living shapes daily wellbeing. A balanced judgement should note that Distance raises costs and narrows opportunities for many households; It helps governments target support to places with higher need; Secure affordable housing supports health, safety and participation.",
            marks: 10
        },

        {
            id: "g-la-19", topic: "wellbeing-australia",
            q: "Extended response (8 marks): Evaluate the significance of Closing the Gap for Australian wellbeing.",
            sample: "Strong response will define the key ideas in Australian wellbeing and use Closing the Gap, cultural connection and Country, access to health care and education and remoteness. It could refer to examples such as targets track health, education, justice, housing and employment outcomes across Australia; community-led cultural programs strengthen belonging and support social and emotional wellbeing; students in a regional area travel long distances for specialist courses and medical care. It should explain how geographers use these ideas to focus attention on long-standing disparities within Australia; show that wellbeing is not only about income or infrastructure; explain why service distribution matters across Australia. A balanced judgement should note that It recognises that wellbeing includes equality, self-determination and access to services; Respecting culture and self-determination improves outcomes and dignity; Good services improve health, skills and future opportunity.",
            marks: 8
        },

        {
            id: "g-la-20", topic: "wellbeing-australia",
            q: "Extended response (8 marks): Discuss how housing, work and connectivity shape quality of life in Australian communities.",
            sample: "Strong response will define the key ideas in Australian wellbeing and use housing affordability, employment and income security, transport and digital connectivity and remoteness. It could refer to examples such as a family spends so much on rent that it cuts back on food, transport and school activities; casual hours drop suddenly and a household struggles to meet bills each month; limited public transport and weak internet make it harder to reach study, telehealth and work. It should explain how geographers use these ideas to show how cost of living shapes daily wellbeing; connect local economies to household wellbeing; investigate modern access to opportunity. A balanced judgement should note that Secure affordable housing supports health, safety and participation; Stable incomes improve choice, confidence and long-term planning; Connectivity now affects education, employment and social inclusion.",
            marks: 8
        },

        {
            id: "g-la-21", topic: "wellbeing-australia",
            q: "Extended response (10 marks): Explain how governments could use evidence to improve wellbeing in remote and disadvantaged areas.",
            sample: "Strong response will define the key ideas in Australian wellbeing and use SEIFA, access to health care and education, transport and digital connectivity and Closing the Gap. It could refer to examples such as a planner maps suburbs by SEIFA to identify where disadvantage is concentrated; students in a regional area travel long distances for specialist courses and medical care; limited public transport and weak internet make it harder to reach study, telehealth and work. It should explain how geographers use these ideas to compare wellbeing patterns between local areas; explain why service distribution matters across Australia; investigate modern access to opportunity. A balanced judgement should note that It helps governments target support to places with higher need; Good services improve health, skills and future opportunity; Connectivity now affects education, employment and social inclusion.",
            marks: 10
        },


        /* ===== Improving wellbeing — strategies ===== */
        {
            id: "g-la-22", topic: "wellbeing-strategies",
            q: "Extended response (10 marks): Evaluate the effectiveness of global strategies used to improve wellbeing.",
            sample: "Strong response will define the key ideas in development strategies and use the Sustainable Development Goals, WASH programs, vaccination and public-health campaigns and girls’ education. It could refer to examples such as a country uses SDG targets to guide work on clean water, gender equality and climate action; a village gains safe water points, toilets and handwashing facilities; a measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school. It should explain how geographers use these ideas to set shared global priorities for improving wellbeing; reduce disease and improve health and attendance at school; lift wellbeing quickly through better health outcomes. A balanced judgement should note that They connect different dimensions of development instead of treating issues in isolation; Clean water and sanitation create large wellbeing gains for relatively low cost; Health improvements support education, work and household stability.",
            marks: 10
        },

        {
            id: "g-la-23", topic: "wellbeing-strategies",
            q: "Extended response (8 marks): Explain how local participation can improve development outcomes.",
            sample: "Strong response will define the key ideas in development strategies and use community-led development, aid partnerships, microfinance and cash transfers and social protection. It could refer to examples such as residents help decide where a clinic should be built and how it will operate; DFAT works with a local NGO and community leaders to improve maternal health services; a woman starts a small business after receiving a low-value loan and savings support. It should explain how geographers use these ideas to build ownership and improve long-term success; combine funding, expertise and local knowledge; increase income opportunities at household scale. A balanced judgement should note that Local participation usually makes programs more relevant and trusted; Partnerships are strongest when they support local capacity rather than replace it; It can strengthen independence but works best alongside wider support.",
            marks: 8
        },

        {
            id: "g-la-24", topic: "wellbeing-strategies",
            q: "Extended response (8 marks): Discuss the role of health, education and income programs in lifting wellbeing.",
            sample: "Strong response will define the key ideas in development strategies and use WASH programs, vaccination and public-health campaigns, girls’ education and cash transfers and social protection. It could refer to examples such as a village gains safe water points, toilets and handwashing facilities; a measles vaccination drive lowers child deaths and keeps more children healthy enough to attend school; scholarships and safe transport help teenage girls complete secondary school. It should explain how geographers use these ideas to reduce disease and improve health and attendance at school; lift wellbeing quickly through better health outcomes; improve future income, health and gender equality. A balanced judgement should note that Clean water and sanitation create large wellbeing gains for relatively low cost; Health improvements support education, work and household stability; Education has multiplier effects across families and communities.",
            marks: 8
        },


        /* ===== Stakeholders & perspectives on wellbeing ===== */
        {
            id: "g-la-25", topic: "wellbeing-perspectives",
            q: "Extended response (8 marks): Account for differing stakeholder perspectives on a wellbeing project.",
            sample: "Strong response will define the key ideas in stakeholder perspectives on wellbeing and use government priorities, NGO and human-rights perspectives, local community perspectives and business and investor perspectives. It could refer to examples such as a government funds roads, hospitals and schools because it wants broad improvements across a region; an NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth; residents support a clinic but want it built closer to the village and staffed in local languages. It should explain how geographers use these ideas to show how public authorities set scale, targets and budgets; bring advocacy and community needs into planning; test whether a strategy matches everyday needs on the ground. A balanced judgement should note that Governments often balance social goals with political and financial constraints; They can highlight issues that governments or investors overlook; Community voices often reveal practical issues hidden in official plans.",
            marks: 8
        },

        {
            id: "g-la-26", topic: "wellbeing-perspectives",
            q: "Extended response (10 marks): Evaluate why gender, youth and Indigenous voices should shape wellbeing decisions.",
            sample: "Strong response will define the key ideas in stakeholder perspectives on wellbeing and use gender perspectives, youth perspectives, Indigenous participation and local community perspectives. It could refer to examples such as women spend hours collecting water, limiting education and paid work opportunities; students ask for safer transport so they can stay in school longer; an Indigenous community asks to co-design a housing program rather than having it imposed from outside. It should explain how geographers use these ideas to explain why equal access is essential in development planning; show that age changes how development is experienced; bring self-determination and cultural authority into wellbeing planning. A balanced judgement should note that Programs can fail if they ignore who carries unpaid work or lacks decision-making power; Young people live longest with the consequences of today’s decisions; Participation improves relevance, trust and long-term outcomes.",
            marks: 10
        },

        {
            id: "g-la-27", topic: "wellbeing-perspectives",
            q: "Extended response (8 marks): Discuss how conflicts between short-term gains and long-term wellbeing can be managed.",
            sample: "Strong response will define the key ideas in stakeholder perspectives on wellbeing and use short-term and long-term trade-offs, government priorities, business and investor perspectives and NGO and human-rights perspectives. It could refer to examples such as a project creates quick jobs but damages water quality that the community depends on later; a government funds roads, hospitals and schools because it wants broad improvements across a region; a company supports a development plan that improves infrastructure and workforce skills. It should explain how geographers use these ideas to help evaluate whether a strategy is sustainable and fair over time; show how public authorities set scale, targets and budgets; show how private investment can influence wellbeing outcomes. A balanced judgement should note that Good judgements consider immediate benefits alongside future impacts; Governments often balance social goals with political and financial constraints; Business support can bring jobs but may also create trade-offs around profit and equity.",
            marks: 8
        },

        {
            id: "g-la-28", topic: "wellbeing-perspectives",
            q: "Extended response (10 marks): Explain how geographers can balance multiple perspectives when judging development.",
            sample: "Strong response will define the key ideas in stakeholder perspectives on wellbeing and use NGO and human-rights perspectives, local community perspectives, Indigenous participation and short-term and long-term trade-offs. It could refer to examples such as an NGO argues that a project should prioritise girls’ schooling and safe water rather than just economic growth; residents support a clinic but want it built closer to the village and staffed in local languages; an Indigenous community asks to co-design a housing program rather than having it imposed from outside. It should explain how geographers use these ideas to bring advocacy and community needs into planning; test whether a strategy matches everyday needs on the ground; bring self-determination and cultural authority into wellbeing planning. A balanced judgement should note that They can highlight issues that governments or investors overlook; Community voices often reveal practical issues hidden in official plans; Participation improves relevance, trust and long-term outcomes.",
            marks: 10
        },


        /* ===== Wind power — how it works ===== */
        {
            id: "g-la-29", topic: "wind-tech",
            q: "Extended response (10 marks): Explain how modern wind technology converts wind into electricity and manages changing conditions.",
            sample: "Strong response will define the key ideas in wind power technology and use energy conversion in a turbine, cut-in and cut-out speeds, pitch and yaw control and grid connection. It could refer to examples such as wind turns the blades, the rotor spins and a generator produces electricity; a turbine starts producing at moderate wind but stops during extreme gusts to avoid damage; the turbine rotates to face changing wind direction and feathers blades during a storm. It should explain how geographers use these ideas to explain the basic operation of wind power; explain why wind output varies with weather; show how turbines respond to changing conditions. A balanced judgement should note that Understanding the conversion chain helps explain why turbine design matters; Operating limits keep equipment safe and shape generation patterns; Control systems increase efficiency and protect the machine.",
            marks: 10
        },

        {
            id: "g-la-30", topic: "wind-tech",
            q: "Extended response (8 marks): Evaluate the importance of capacity factor and resource assessment in wind-farm planning.",
            sample: "Strong response will define the key ideas in wind power technology and use capacity factor, wind resource assessment, onshore and offshore wind and grid connection. It could refer to examples such as a wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site; developers use masts, LiDAR and long-term data to test whether a ridge has enough wind; an offshore project in Bass Strait aims to use stronger marine winds than many inland sites. It should explain how geographers use these ideas to compare the performance of wind projects realistically; select suitable locations for efficient turbines; compare technological choices for different locations. A balanced judgement should note that It matters because nameplate capacity alone does not show real output; Good resource data reduces risk and improves planning; Site conditions change cost, output and engineering needs.",
            marks: 8
        },

        {
            id: "g-la-31", topic: "wind-tech",
            q: "Extended response (8 marks): Discuss why storage and firming are important partners for wind generation.",
            sample: "Strong response will define the key ideas in wind power technology and use storage and firming, capacity factor, grid connection and onshore and offshore wind. It could refer to examples such as a battery stores extra energy during windy periods and releases it when demand stays high; a wind farm with strong steady winds produces more energy over a year than a similar-sized farm in a weaker site; power from several turbines is stepped up at a substation before entering transmission lines. It should explain how geographers use these ideas to show how wind can support reliable electricity supply; compare the performance of wind projects realistically; link turbine output to the electricity system people actually use. A balanced judgement should note that Firming helps match variable generation to demand; It matters because nameplate capacity alone does not show real output; Generation is only useful if it can be delivered reliably to the grid.",
            marks: 8
        },


        /* ===== Wind power in Australia ===== */
        {
            id: "g-la-32", topic: "wind-australia",
            q: "Extended response (10 marks): Evaluate the role of wind power in Australia’s electricity transition.",
            sample: "Strong response will define the key ideas in wind power in Australia and use South Australia’s wind leadership, Hornsdale and battery integration, Renewable Energy Zones and transmission constraints. It could refer to examples such as South Australia often records very high renewable shares because wind supplies a major part of demand; Hornsdale Power Reserve helps stabilise the grid while wind farms supply renewable electricity; NSW invests in REZs so wind, solar and storage can connect more efficiently. It should explain how geographers use these ideas to use a clear Australian case study of rapid renewable uptake; show how technology is being integrated in Australia; explain how governments organise renewable growth. A balanced judgement should note that It shows that high wind penetration is already possible with the right grid support; The example proves that storage can support higher renewable shares; Co-ordinated planning reduces bottlenecks and cost.",
            marks: 10
        },

        {
            id: "g-la-33", topic: "wind-australia",
            q: "Extended response (8 marks): Discuss why location matters when planning wind farms in Australia.",
            sample: "Strong response will define the key ideas in wind power in Australia and use major onshore case studies, offshore wind proposals, coexistence with farming and transmission constraints. It could refer to examples such as students compare different operating wind farms across Victoria, South Australia and Queensland; a proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres; sheep continue grazing between turbines while the landholder receives lease income. It should explain how geographers use these ideas to ground classwork in named Australian examples; show how the next phase of wind development may expand; explain why land-use conflict is often lower than assumed. A balanced judgement should note that Case studies make abstract discussion more specific and convincing; Offshore wind broadens Australia’s future renewable options; Shared land use can support both farm income and renewable energy.",
            marks: 8
        },

        {
            id: "g-la-34", topic: "wind-australia",
            q: "Extended response (10 marks): Explain how REZs, offshore proposals and transmission upgrades are shaping the next stage of Australian wind development.",
            sample: "Strong response will define the key ideas in wind power in Australia and use Renewable Energy Zones, offshore wind proposals, transmission constraints and regional jobs and supply chains. It could refer to examples such as NSW invests in REZs so wind, solar and storage can connect more efficiently; a proposal in Bass Strait aims to tap stronger offshore winds close to major demand centres; a windy region cannot connect more turbines until new transmission lines are built. It should explain how geographers use these ideas to explain how governments organise renewable growth; show how the next phase of wind development may expand; show why good wind resource alone is not enough. A balanced judgement should note that Co-ordinated planning reduces bottlenecks and cost; Offshore wind broadens Australia’s future renewable options; Network capacity is a major factor in project timing and cost.",
            marks: 10
        },


        /* ===== Wind — environmental impacts & management ===== */
        {
            id: "g-la-35", topic: "wind-environmental",
            q: "Extended response (10 marks): Evaluate the environmental effectiveness of wind power in Australia.",
            sample: "Strong response will define the key ideas in environmental management of wind power and use low lifecycle emissions, low operational water use, bird and bat strike management and environmental impact assessment. It could refer to examples such as replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector; a wind farm keeps producing during drought without needing cooling water like a thermal power station; turbines may be slowed during high-risk migration periods to reduce bat deaths. It should explain how geographers use these ideas to judge wind as a climate-response strategy; compare wind with water-intensive energy sources; show that environmental impacts can be managed rather than ignored. A balanced judgement should note that Climate benefits are the main reason wind is central to environmental change management; Low water use is a major advantage in dry regions such as much of Australia; Biodiversity protection is essential for social licence and ecological health.",
            marks: 10
        },

        {
            id: "g-la-36", topic: "wind-environmental",
            q: "Extended response (8 marks): Discuss how biodiversity and vegetation impacts of wind farms can be managed.",
            sample: "Strong response will define the key ideas in environmental management of wind power and use bird and bat strike management, vegetation clearing and micro-siting, environmental impact assessment and decommissioning and rehabilitation. It could refer to examples such as turbines may be slowed during high-risk migration periods to reduce bat deaths; developers shift a turbine a short distance to avoid sensitive native vegetation; an EIS examines threatened species, creek crossings, access roads and nearby projects before approval. It should explain how geographers use these ideas to show that environmental impacts can be managed rather than ignored; reduce local ecosystem damage during construction; show how environmental decisions are made before construction. A balanced judgement should note that Biodiversity protection is essential for social licence and ecological health; Small design changes can greatly lower environmental harm; Good assessment helps avoid or reduce harm before it occurs.",
            marks: 8
        },

        {
            id: "g-la-37", topic: "wind-environmental",
            q: "Extended response (8 marks): Explain why lifecycle thinking is important when judging renewable-energy projects.",
            sample: "Strong response will define the key ideas in environmental management of wind power and use low lifecycle emissions, materials and blade recycling, decommissioning and rehabilitation and low operational water use. It could refer to examples such as replacing fossil-fuel generation with wind sharply cuts emissions from the electricity sector; older blades are sent for reuse, reprocessing or cement co-processing instead of simple landfill; roads are repaired, equipment removed and disturbed areas replanted after a project closes or is upgraded. It should explain how geographers use these ideas to judge wind as a climate-response strategy; apply lifecycle thinking to renewable technology; consider the whole life of a wind project. A balanced judgement should note that Climate benefits are the main reason wind is central to environmental change management; Strong environmental performance includes manufacturing and decommissioning as well as operation; Long-term planning reduces the legacy of infrastructure on the landscape.",
            marks: 8
        },


        /* ===== Wind — community & stakeholder perspectives ===== */
        {
            id: "g-la-38", topic: "wind-perspectives",
            q: "Extended response (8 marks): Account for the differing perspectives of stakeholder groups on a proposed wind farm.",
            sample: "Strong response will define the key ideas in stakeholder perspectives on wind power and use host farmer perspectives, non-host neighbour concerns, local council perspectives and environmental NGO perspectives. It could refer to examples such as a grazier supports a project because annual payments stabilise income through dry years; a nearby resident supports renewables in general but worries about several turbines visible from home; a council wants regional investment but also wants the developer to repair haulage roads. It should explain how geographers use these ideas to show why some local landholders welcome wind farms; account for local amenity concerns in planning; show how local government weighs benefits against disruption. A balanced judgement should note that Host payments can improve resilience in agricultural communities; Social licence depends on taking lived experience seriously; Councils often mediate between developers and residents.",
            marks: 8
        },

        {
            id: "g-la-39", topic: "wind-perspectives",
            q: "Extended response (10 marks): Evaluate how social licence can be built for wind developments.",
            sample: "Strong response will define the key ideas in stakeholder perspectives on wind power and use community benefit funds, host farmer perspectives, local council perspectives and non-host neighbour concerns. It could refer to examples such as a wind farm funds hall upgrades, scholarships and sporting equipment in nearby towns; a grazier supports a project because annual payments stabilise income through dry years; a council wants regional investment but also wants the developer to repair haulage roads. It should explain how geographers use these ideas to show one way developers build social licence; show why some local landholders welcome wind farms; show how local government weighs benefits against disruption. A balanced judgement should note that Sharing benefits can improve fairness and long-term acceptance; Host payments can improve resilience in agricultural communities; Councils often mediate between developers and residents.",
            marks: 10
        },

        {
            id: "g-la-40", topic: "wind-perspectives",
            q: "Extended response (8 marks): Discuss the role of jobs, energy prices and reliability in shaping attitudes to wind power.",
            sample: "Strong response will define the key ideas in stakeholder perspectives on wind power and use worker and union perspectives, consumer and grid perspectives, environmental NGO perspectives and host farmer perspectives. It could refer to examples such as tradespeople support wind projects because they create construction and maintenance work in regional areas; electricity users want more clean power but also expect blackouts to be avoided; an environmental group supports the project if threatened species are protected and monitoring is transparent. It should explain how geographers use these ideas to connect energy change to employment and skills; show why integration and reliability matter politically; bring a climate-and-conservation lens to debates. A balanced judgement should note that People are more likely to back transition when they can see fair job pathways; People judge projects by both environmental outcomes and energy security; Support for wind is often conditional on good environmental management.",
            marks: 8
        },


        /* ===== Wind & Aboriginal Custodianship of Country ===== */
        {
            id: "g-la-41", topic: "wind-custodianship",
            q: "Extended response (10 marks): Discuss how Aboriginal Peoples’ Custodianship of Country can shape wind-farm planning and management.",
            sample: "Strong response will define the key ideas in Aboriginal Custodianship of Country in wind-power planning and use Country as a living relationship, free, prior and informed consent, cultural mapping and site selection and Cultural Heritage Management Plans. It could refer to examples such as Traditional Owners explain that caring for Country involves cultural, spiritual and ecological obligations; consultation begins before project design is finalised and consent is sought before works proceed; turbines and access roads are moved away from culturally significant areas after mapping with Traditional Owners. It should explain how geographers use these ideas to frame environmental management through Aboriginal knowledge and responsibility; show what respectful decision-making looks like on Country; link cultural heritage knowledge directly to planning choices. A balanced judgement should note that This perspective changes how a project site is understood and managed; Genuine consent improves ethics, trust and project outcomes; Early mapping prevents avoidable damage to Country.",
            marks: 10
        },

        {
            id: "g-la-42", topic: "wind-custodianship",
            q: "Extended response (8 marks): Explain the role of agreements and legal frameworks in protecting cultural heritage on wind sites.",
            sample: "Strong response will define the key ideas in Aboriginal Custodianship of Country in wind-power planning and use native title and ILUAs, Cultural Heritage Management Plans, free, prior and informed consent and cultural mapping and site selection. It could refer to examples such as an Indigenous Land Use Agreement sets out how a renewable project may proceed on Country; workers follow agreed procedures if cultural material is found during construction; consultation begins before project design is finalised and consent is sought before works proceed. It should explain how geographers use these ideas to connect cultural authority with Australian law; translate cultural responsibility into clear project rules; show what respectful decision-making looks like on Country. A balanced judgement should note that Agreements can provide clearer expectations for all parties; Good plans reduce risk and support ongoing protection; Genuine consent improves ethics, trust and project outcomes.",
            marks: 8
        },

        {
            id: "g-la-43", topic: "wind-custodianship",
            q: "Extended response (8 marks): Evaluate how Indigenous ranger programs and co-governance can improve project outcomes.",
            sample: "Strong response will define the key ideas in Aboriginal Custodianship of Country in wind-power planning and use Indigenous ranger monitoring, benefit-sharing and co-ownership, co-governance and Country as a living relationship. It could refer to examples such as rangers monitor species, erosion and revegetation around turbine pads and access tracks; a renewable partnership includes jobs, contracting opportunities and a shared return over time; Traditional Owners sit on advisory or governance groups throughout the life of a project. It should explain how geographers use these ideas to show how Custodianship continues after approvals are granted; show that projects can move beyond simple compensation; keep cultural authority active instead of limiting it to one-off consultation. A balanced judgement should note that Ongoing Indigenous management can improve environmental outcomes; Fairer benefit-sharing supports long-term community wellbeing; Ongoing governance helps ensure promises are carried into practice.",
            marks: 8
        },


        /* ===== Wind — policy, transition & comparison ===== */
        {
            id: "g-la-44", topic: "wind-policy",
            q: "Extended response (10 marks): Evaluate the importance of policy certainty for wind-energy investment in Australia.",
            sample: "Strong response will define the key ideas in wind-energy policy and transition and use policy certainty, the 82% renewable-electricity target, the Integrated System Plan and planning and environmental approval. It could refer to examples such as developers commit to new projects when they can see stable targets and rules for the next decade; wind and solar projects are planned to help meet the 2030 electricity target; new transmission corridors are identified so renewable zones can connect to demand centres. It should explain how geographers use these ideas to explain why policy settings influence build rates; connect individual projects to national transition goals; show how system-wide planning supports wind growth. A balanced judgement should note that Uncertain policy can slow investment even when the wind resource is strong; Targets shape planning, markets and public debate; Wind projects need network planning as well as local approvals.",
            marks: 10
        },

        {
            id: "g-la-45", topic: "wind-policy",
            q: "Extended response (8 marks): Discuss why transmission, storage and planning reforms are needed for a wind-led transition.",
            sample: "Strong response will define the key ideas in wind-energy policy and transition and use the Integrated System Plan, storage and demand-side firming, planning and environmental approval and a diversified energy mix. It could refer to examples such as new transmission corridors are identified so renewable zones can connect to demand centres; households, batteries and industries shift energy use to better match windy periods; a developer must address biodiversity, heritage, noise and land-use issues before approval is granted. It should explain how geographers use these ideas to show how system-wide planning supports wind growth; show that wind policy is also about reliable system operation; show how governments manage trade-offs in the transition. A balanced judgement should note that Wind projects need network planning as well as local approvals; Firming policies reduce the risks of relying on variable generation alone; Strong approval systems help balance speed with environmental care.",
            marks: 8
        },

        {
            id: "g-la-46", topic: "wind-policy",
            q: "Extended response (8 marks): Explain how offshore wind policy is expanding Australia’s renewable options.",
            sample: "Strong response will define the key ideas in wind-energy policy and transition and use offshore wind legislation, the 82% renewable-electricity target, the Integrated System Plan and a diversified energy mix. It could refer to examples such as declared areas off Gippsland, Hunter and Illawarra open the door to offshore proposals; wind and solar projects are planned to help meet the 2030 electricity target; new transmission corridors are identified so renewable zones can connect to demand centres. It should explain how geographers use these ideas to explain how policy creates new development opportunities; connect individual projects to national transition goals; show how system-wide planning supports wind growth. A balanced judgement should note that Laws matter because they decide where and how projects can proceed; Targets shape planning, markets and public debate; Wind projects need network planning as well as local approvals.",
            marks: 8
        },


        /* ===== Geographical tools & communication ===== */
        {
            id: "g-la-47", topic: "geo-tools",
            q: "Extended response (10 marks): Explain how geographical tools can be used to investigate wind power and wellbeing.",
            sample: "Strong response will define the key ideas in geographical inquiry and communication and use choropleth maps, GIS layered analysis, fieldwork and interviews and remote sensing. It could refer to examples such as an atlas shades countries by HDI so students can quickly see global patterns; a planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites; students visit a site, take notes and interview local residents about perceived impacts. It should explain how geographers use these ideas to communicate spatial variation clearly; support evidence-based geographical decision-making; add ground-level evidence to maps and statistics. A balanced judgement should note that Good map design can make complex patterns easier to interpret; GIS helps compare many variables at once; Field evidence can confirm or challenge desk research.",
            marks: 10
        },

        {
            id: "g-la-48", topic: "geo-tools",
            q: "Extended response (8 marks): Evaluate the strengths and weaknesses of maps, graphs and fieldwork for geographical inquiry.",
            sample: "Strong response will define the key ideas in geographical inquiry and communication and use choropleth maps, graphs and statistics, fieldwork and interviews and source evaluation. It could refer to examples such as an atlas shades countries by HDI so students can quickly see global patterns; a line graph shows renewable generation rising over time while a table compares HDI values; students visit a site, take notes and interview local residents about perceived impacts. It should explain how geographers use these ideas to communicate spatial variation clearly; show trends, comparisons and relationships clearly; add ground-level evidence to maps and statistics. A balanced judgement should note that Good map design can make complex patterns easier to interpret; Quantitative evidence helps support strong geographical arguments; Field evidence can confirm or challenge desk research.",
            marks: 8
        },

        {
            id: "g-la-49", topic: "geo-tools",
            q: "Extended response (8 marks): Discuss how source reliability affects conclusions about environmental and social issues.",
            sample: "Strong response will define the key ideas in geographical inquiry and communication and use source evaluation, GIS layered analysis, remote sensing and graphs and statistics. It could refer to examples such as a student compares an industry brochure with CSIRO data and local interview evidence; a planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites; before-and-after images show how a project site changed during construction and rehabilitation. It should explain how geographers use these ideas to judge reliability before accepting claims; support evidence-based geographical decision-making; observe change across large areas without being on the ground everywhere. A balanced judgement should note that Good communication depends on trustworthy evidence; GIS helps compare many variables at once; Remote sensing is useful for tracking environmental management over time.",
            marks: 8
        },

        {
            id: "g-la-50", topic: "geo-tools",
            q: "Extended response (10 marks): Analyse how geographers should communicate findings to different audiences.",
            sample: "Strong response will define the key ideas in geographical inquiry and communication and use annotated diagrams and structured reports, choropleth maps, GIS layered analysis and source evaluation. It could refer to examples such as a report uses a labelled turbine diagram, a map and a clear conclusion to explain findings; an atlas shades countries by HDI so students can quickly see global patterns; a planner overlays transmission lines, threatened species habitat and wind resource maps to screen sites. It should explain how geographers use these ideas to communicate geographical information to different audiences; communicate spatial variation clearly; support evidence-based geographical decision-making. A balanced judgement should note that Strong structure helps evidence and judgement make sense; Good map design can make complex patterns easier to interpret; GIS helps compare many variables at once.",
            marks: 10
        }

    ],

    /* =========================================================
       PRACTICE QUESTIONS — 4 topic groups × 10 exams × 20 questions.
       Generated at boot from `practiceTopics`. (~60% HW + 40% EC&M
       weighting.)
       ========================================================= */
    practiceTopics: [
        { id: "wellbeing-concepts",  name: "HW · Concepts & Measures",         outcomes: "GE5-COM-02 · GE5-PER-02", sourceTopics: ["wellbeing-concepts", "wellbeing-measures"] },
        { id: "wellbeing-patterns",  name: "HW · Spatial Patterns & Australia",outcomes: "GE5-PER-02",              sourceTopics: ["wellbeing-spatial", "wellbeing-australia", "wellbeing-strategies", "wellbeing-perspectives"] },
        { id: "wind-tech",           name: "EC&M · Wind Power Technology",     outcomes: "GE5-COM-02",              sourceTopics: ["wind-tech", "wind-australia", "wind-policy"] },
        { id: "wind-management",     name: "EC&M · Wind Management & Custodianship", outcomes: "GE5-APC-02 · GE5-PER-02", sourceTopics: ["wind-environmental", "wind-perspectives", "wind-custodianship", "geo-tools"] }
    ],
    practiceExams: [],

    /* =========================================================
       MOCK EXAMS — full-length, mixed across both topic areas.
       Weighted ~60% Human Wellbeing / 40% Wind Power per the
       25%/15% half-yearly split. Lock-in answers; best score
       remembered across retakes. Each mock: 20 MCQ + 10 SA + 2 LA.
       ========================================================= */
                    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad balanced mix",
            duration: 60,
            questionIds: [
                "g-mcq-3","g-mcq-9","g-mcq-18","g-mcq-25","g-mcq-31","g-mcq-38","g-mcq-41","g-mcq-49",
                "g-mcq-58","g-mcq-66","g-mcq-74","g-mcq-81","g-mcq-86","g-mcq-91","g-mcq-14","g-mcq-153",
                "g-mcq-186","g-mcq-217","g-mcq-252","g-mcq-46","g-sa-117","g-sa-131","g-sa-145","g-sa-159",
                "g-sa-174","g-sa-31","g-sa-46","g-sa-61","g-sa-76","g-sa-89","g-la-49","g-la-9"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — balanced topic rotation A",
            duration: 60,
            questionIds: [
                "g-mcq-285","g-mcq-55","g-mcq-343","g-mcq-374","g-mcq-406","g-mcq-438","g-mcq-470","g-mcq-95",
                "g-mcq-125","g-mcq-158","g-mcq-190","g-mcq-222","g-mcq-256","g-mcq-290","g-mcq-317","g-mcq-348",
                "g-mcq-379","g-mcq-411","g-mcq-443","g-mcq-474","g-sa-17","g-sa-50","g-sa-65","g-sa-81",
                "g-sa-93","g-sa-103","g-sa-120","g-sa-135","g-sa-149","g-sa-163","g-la-13","g-la-45"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — balanced topic rotation B",
            duration: 60,
            questionIds: [
                "g-mcq-479","g-mcq-100","g-mcq-130","g-mcq-163","g-mcq-195","g-mcq-227","g-mcq-261","g-mcq-294",
                "g-mcq-323","g-mcq-354","g-mcq-385","g-mcq-417","g-mcq-448","g-mcq-484","g-mcq-105","g-mcq-135",
                "g-mcq-167","g-mcq-200","g-mcq-231","g-mcq-265","g-sa-107","g-sa-123","g-sa-139","g-sa-153",
                "g-sa-179","g-sa-187","g-sa-21","g-sa-35","g-sa-69","g-sa-86","g-la-42","g-la-16"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced topic rotation C",
            duration: 60,
            questionIds: [
                "g-mcq-270","g-mcq-299","g-mcq-328","g-mcq-360","g-mcq-391","g-mcq-423","g-mcq-452","g-mcq-489",
                "g-mcq-110","g-mcq-140","g-mcq-172","g-mcq-205","g-mcq-236","g-mcq-274","g-mcq-304","g-mcq-334",
                "g-mcq-365","g-mcq-396","g-mcq-428","g-mcq-457","g-sa-193","g-sa-25","g-sa-39","g-sa-54",
                "g-sa-73","g-sa-97","g-sa-111","g-sa-126","g-sa-143","g-sa-167","g-la-23","g-la-39"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 75,
            questionIds: [
                "g-mcq-462","g-mcq-493","g-mcq-114","g-mcq-145","g-mcq-177","g-mcq-209","g-mcq-241","g-mcq-278",
                "g-mcq-309","g-mcq-340","g-mcq-371","g-mcq-402","g-mcq-434","g-mcq-466","g-mcq-498","g-mcq-119",
                "g-mcq-150","g-mcq-182","g-mcq-214","g-mcq-246","g-sa-101","g-sa-115","g-sa-129","g-sa-157",
                "g-sa-171","g-sa-184","g-sa-198","g-sa-29","g-sa-43","g-sa-58","g-la-36","g-la-20"
            ]
        }
    ]
};
