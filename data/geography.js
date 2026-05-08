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
        }
    ],

    /* =========================================================
       PRACTICE EXAMS — 20 themed exams
       ========================================================= */
    practiceExams: [
        { id: "exam-1",  name: "Wellbeing concepts",                   focus: "Defining wellbeing, dimensions, indicators",
          questionIds: ["g-mcq-1","g-mcq-2","g-mcq-3","g-mcq-4","g-mcq-5","g-mcq-6","g-sa-1"] },
        { id: "exam-2",  name: "Measuring wellbeing — HDI & GDP",       focus: "HDI, GDP, GNI, OECD indicators",
          questionIds: ["g-mcq-7","g-mcq-8","g-mcq-9","g-mcq-10","g-mcq-12","g-mcq-13","g-mcq-14","g-mcq-15","g-sa-2"] },
        { id: "exam-3",  name: "Limitations of wellbeing measures",     focus: "Inequality, environment, subjective WB",
          questionIds: ["g-mcq-10","g-mcq-11","g-mcq-13","g-mcq-21","g-sa-3"] },
        { id: "exam-4",  name: "Spatial variation — global",            focus: "Global wellbeing patterns",
          questionIds: ["g-mcq-16","g-mcq-17","g-mcq-18","g-mcq-19","g-mcq-20","g-mcq-21","g-mcq-22","g-sa-4","g-la-1"] },
        { id: "exam-5",  name: "Wellbeing in Australia",                focus: "Closing the Gap, SEIFA, regional disparity",
          questionIds: ["g-mcq-23","g-mcq-24","g-mcq-25","g-mcq-26","g-mcq-27","g-mcq-28","g-sa-5"] },
        { id: "exam-6",  name: "Strategies — global wellbeing",         focus: "SDGs, NGOs, microfinance",
          questionIds: ["g-mcq-29","g-mcq-30","g-mcq-31","g-mcq-32","g-mcq-33","g-mcq-34","g-mcq-35","g-sa-6","g-la-5"] },
        { id: "exam-7",  name: "Stakeholders & perspectives (wellbeing)", focus: "Multiple perspectives on wellbeing",
          questionIds: ["g-mcq-36","g-mcq-37","g-mcq-38","g-sa-7"] },
        { id: "exam-8",  name: "Wind power — how it works",             focus: "Turbine technology, capacity factor",
          questionIds: ["g-mcq-39","g-mcq-40","g-mcq-41","g-mcq-42","g-mcq-43","g-mcq-44","g-mcq-45","g-mcq-46","g-sa-8"] },
        { id: "exam-9",  name: "Wind in Australia",                     focus: "Australian wind farms & policy",
          questionIds: ["g-mcq-47","g-mcq-48","g-mcq-49","g-mcq-50","g-mcq-51","g-mcq-52","g-mcq-53","g-mcq-54","g-mcq-55","g-sa-9"] },
        { id: "exam-10", name: "Wind — environmental impacts",           focus: "Emissions, water, biodiversity, blades",
          questionIds: ["g-mcq-56","g-mcq-57","g-mcq-58","g-mcq-59","g-mcq-60","g-mcq-61","g-mcq-62","g-mcq-63","g-sa-10","g-la-2"] },
        { id: "exam-11", name: "Wind — community perspectives",          focus: "NIMBY, hosts, councils, NGOs, unions",
          questionIds: ["g-mcq-64","g-mcq-65","g-mcq-66","g-mcq-67","g-mcq-68","g-mcq-69","g-mcq-70","g-mcq-71","g-sa-11","g-la-4"] },
        { id: "exam-12", name: "Wind & Custodianship of Country",        focus: "GE5-APC-02 — FPIC, CHMP, Indigenous-led projects",
          questionIds: ["g-mcq-72","g-mcq-73","g-mcq-74","g-mcq-75","g-mcq-76","g-mcq-77","g-mcq-78","g-sa-12","g-la-3"] },
        { id: "exam-13", name: "Wind — policy & comparison",             focus: "Coal vs wind, RET, ISP, offshore",
          questionIds: ["g-mcq-52","g-mcq-54","g-mcq-79","g-mcq-80","g-mcq-81","g-mcq-82","g-mcq-83","g-sa-13","g-la-6"] },
        { id: "exam-14", name: "Geographical tools (GE5-COM-02)",        focus: "Maps, GIS, evaluating sources",
          questionIds: ["g-mcq-84","g-mcq-85","g-mcq-86","g-mcq-87","g-mcq-88","g-mcq-89","g-sa-14","g-sa-15"] },
        { id: "exam-15", name: "Wind farm — siting & EIS",               focus: "Site selection, EIS, cumulative impact",
          questionIds: ["g-mcq-55","g-mcq-62","g-mcq-63","g-mcq-69","g-mcq-74","g-mcq-77","g-mcq-85","g-sa-14"] },
        { id: "exam-16", name: "Renewables transition snapshot",          focus: "Where we are vs where we're going",
          questionIds: ["g-mcq-47","g-mcq-48","g-mcq-52","g-mcq-53","g-mcq-54","g-mcq-81","g-mcq-83","g-la-6"] },
        { id: "exam-17", name: "Comparing perspectives",                  focus: "GE5-PER-02 cross-cutting",
          questionIds: ["g-mcq-36","g-mcq-37","g-mcq-38","g-mcq-66","g-mcq-68","g-mcq-70","g-sa-7","g-sa-11"] },
        { id: "exam-18", name: "Half-Yearly Mock 1 — Human Wellbeing focus", focus: "Mock paper (HW heavy)",
          questionIds: ["g-mcq-1","g-mcq-7","g-mcq-9","g-mcq-16","g-mcq-23","g-mcq-29","g-mcq-39","g-mcq-56","g-mcq-72","g-sa-1","g-sa-5","g-sa-12","g-la-1"] },
        { id: "exam-19", name: "Half-Yearly Mock 2 — Wind Power focus",  focus: "Mock paper (EC&M heavy)",
          questionIds: ["g-mcq-39","g-mcq-44","g-mcq-49","g-mcq-56","g-mcq-58","g-mcq-64","g-mcq-72","g-mcq-77","g-mcq-79","g-mcq-83","g-sa-8","g-sa-10","g-sa-12","g-la-2"] },
        { id: "exam-20", name: "Half-Yearly Mock 3 — Full mix",          focus: "Balanced HW (25%) + EC&M (15%)",
          questionIds: ["g-mcq-2","g-mcq-10","g-mcq-22","g-mcq-25","g-mcq-32","g-mcq-38","g-mcq-42","g-mcq-50","g-mcq-58","g-mcq-66","g-mcq-73","g-mcq-80","g-mcq-86","g-sa-2","g-sa-9","g-sa-13","g-la-2","g-la-4"] }
    ],

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
            focus: "Half-Yearly simulation — broad mix",
            duration: 60,
            questionIds: [
                "g-mcq-1","g-mcq-7","g-mcq-9","g-mcq-16","g-mcq-23","g-mcq-29","g-mcq-36","g-mcq-3",
                "g-mcq-11","g-mcq-25","g-mcq-32",
                "g-mcq-39","g-mcq-44","g-mcq-49","g-mcq-56","g-mcq-64","g-mcq-72","g-mcq-79","g-mcq-83","g-mcq-86",
                "g-sa-1","g-sa-2","g-sa-3","g-sa-5","g-sa-6","g-sa-8","g-sa-10","g-sa-11","g-sa-12","g-sa-14",
                "g-la-1","g-la-2"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Human Wellbeing focus",
            duration: 60,
            questionIds: [
                "g-mcq-1","g-mcq-2","g-mcq-3","g-mcq-4","g-mcq-5","g-mcq-7","g-mcq-8","g-mcq-10","g-mcq-12",
                "g-mcq-14","g-mcq-16","g-mcq-19","g-mcq-22","g-mcq-23","g-mcq-26","g-mcq-30","g-mcq-33",
                "g-mcq-44","g-mcq-72","g-mcq-79",
                "g-sa-1","g-sa-2","g-sa-3","g-sa-4","g-sa-5","g-sa-6","g-sa-7","g-sa-12","g-sa-15","g-sa-14",
                "g-la-1","g-la-5"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Wind Power & EC&M focus",
            duration: 60,
            questionIds: [
                "g-mcq-39","g-mcq-40","g-mcq-41","g-mcq-42","g-mcq-43","g-mcq-44","g-mcq-46","g-mcq-47",
                "g-mcq-49","g-mcq-52","g-mcq-56","g-mcq-58","g-mcq-60","g-mcq-62","g-mcq-64","g-mcq-66",
                "g-mcq-72","g-mcq-77","g-mcq-79","g-mcq-83",
                "g-sa-8","g-sa-9","g-sa-10","g-sa-11","g-sa-12","g-sa-13","g-sa-14","g-sa-15","g-sa-1","g-sa-7",
                "g-la-2","g-la-3"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Custodianship of Country & perspectives",
            duration: 60,
            questionIds: [
                "g-mcq-23","g-mcq-24","g-mcq-25","g-mcq-26","g-mcq-27","g-mcq-28","g-mcq-36","g-mcq-37",
                "g-mcq-38","g-mcq-66","g-mcq-67","g-mcq-68","g-mcq-69","g-mcq-70","g-mcq-71","g-mcq-72",
                "g-mcq-73","g-mcq-74","g-mcq-75","g-mcq-76",
                "g-sa-5","g-sa-7","g-sa-11","g-sa-12","g-sa-3","g-sa-4","g-sa-2","g-sa-6","g-sa-10","g-sa-15",
                "g-la-3","g-la-4"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Complete review (hardest mock)",
            duration: 75,
            questionIds: [
                "g-mcq-15","g-mcq-21","g-mcq-22","g-mcq-28","g-mcq-35","g-mcq-38","g-mcq-45","g-mcq-50",
                "g-mcq-53","g-mcq-58","g-mcq-63","g-mcq-71","g-mcq-77","g-mcq-78","g-mcq-81","g-mcq-82",
                "g-mcq-86","g-mcq-87","g-mcq-88","g-mcq-89",
                "g-sa-2","g-sa-4","g-sa-6","g-sa-7","g-sa-9","g-sa-11","g-sa-12","g-sa-13","g-sa-14","g-sa-15",
                "g-la-2","g-la-6"
            ]
        }
    ]
};
