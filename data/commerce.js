// Commerce – Stage 5 (Year 9) — Half Yearly Topics 1 & 2
// Outcomes assessed: COM5-1, COM5-2, COM5-8, COM5-9
//   COM5-1: applies consumer, financial, economic, business, legal, political and employment concepts
//   COM5-2: analyses rights and responsibilities of individuals in those contexts
//   COM5-8: explains information using a variety of forms (Skills — Communication and Research)
//   COM5-9: works independently and collaboratively to meet goals (Skills — Communication and Research)

window.SUBJECT_DATA = window.SUBJECT_DATA || {};

window.SUBJECT_DATA.commerce = {
    id: "commerce",
    name: "Commerce",
    tagline: "Consumer & financial decisions · Economic & business environment",
    color: "#2a9d8f",
    accent: "#264653",
    icon: "💼",
    topics: [
        { id: "consumer-rights",     name: "Consumer rights & responsibilities" },
        { id: "consumer-decisions",  name: "Making informed consumer decisions" },
        { id: "consumer-protection", name: "Consumer protection — ACCC, scams, complaints" },
        { id: "personal-finance",    name: "Personal finance & budgeting" },
        { id: "saving-investing",    name: "Saving, banking & investing" },
        { id: "payment-credit",      name: "Payment options & credit" },
        { id: "economic-environment",name: "The economic environment" },
        { id: "markets-pricing",     name: "Markets, supply & demand, pricing" },
        { id: "money-policy",        name: "Money, RBA & government policy" },
        { id: "business-environment",name: "The business environment" },
        { id: "business-types",      name: "Business ownership types" },
        { id: "business-stakeholders", name: "Stakeholders & corporate responsibility" },
        { id: "communication",       name: "Communicating commerce information (COM5-8/9)" }
    ],
    mcqs: [
        /* ===== Consumer rights & responsibilities ===== */
        {
            id: "c-mcq-1", topic: "consumer-rights",
            q: "Which Australian law gives consumers the right to a refund, repair or replacement when a product is faulty?",
            options: ["Australian Consumer Law (ACL)", "Fair Work Act", "Privacy Act 1988", "Trade Practices Reform Bill"],
            answer: 0,
            explain: "The ACL, contained in the Competition and Consumer Act 2010, sets out consumer guarantees including remedies for faulty goods."
        },
        {
            id: "c-mcq-2", topic: "consumer-rights",
            q: "Since 1 July 2021, the ACL consumer-guarantee threshold for goods is up to:",
            options: ["$500", "$1,000", "$40,000", "$100,000"],
            answer: 3,
            explain: "Goods up to $100,000 are covered by ACL guarantees. Goods above $100,000 are still covered if ordinarily acquired for personal, domestic or household use."
        },
        {
            id: "c-mcq-3", topic: "consumer-rights",
            q: "A 'major' problem with a product gives the consumer the right to choose between which remedies?",
            options: ["Refund only", "Repair only", "Refund or replacement (consumer's choice)", "Store credit only"],
            answer: 2,
            explain: "For a major failure, the consumer chooses refund or replacement. For a minor failure, the business may choose to repair."
        },
        {
            id: "c-mcq-4", topic: "consumer-rights",
            q: "Which is NOT one of the consumer guarantees under the ACL?",
            options: ["Acceptable quality", "Fit for the disclosed purpose", "Match the description", "Lifetime free upgrades"],
            answer: 3,
            explain: "Lifetime upgrades are not a statutory guarantee. The ACL guarantees focus on quality, fitness, description, title and reasonable repair availability."
        },
        {
            id: "c-mcq-5", topic: "consumer-rights",
            q: "An 'unsolicited' sales contract (e.g. door-to-door) gives the consumer a cooling-off period of:",
            options: ["No cooling-off period", "24 hours", "10 business days", "30 days"],
            answer: 2,
            explain: "Under the ACL, unsolicited consumer contracts have a 10 business day cooling-off period to cancel without penalty."
        },
        {
            id: "c-mcq-6", topic: "consumer-rights",
            q: "Which document must a business provide as proof of purchase under ACL when asked?",
            options: ["A handshake agreement", "A receipt or tax invoice", "A LinkedIn message", "A customer survey"],
            answer: 1,
            explain: "Receipts/tax invoices are the standard proof of purchase. Bank statements may also serve where receipts have been lost."
        },
        {
            id: "c-mcq-7", topic: "consumer-rights",
            q: "A consumer's KEY responsibility before making a purchase is to:",
            options: ["Always negotiate the price", "Check terms, warranty, return policy and product suitability", "Trust all advertising", "Avoid researching the product"],
            answer: 1,
            explain: "Informed consumers compare options, read fine print and check refund/return policies before buying."
        },
        {
            id: "c-mcq-8", topic: "consumer-rights",
            q: "An 'express warranty' is:",
            options: [
                "Automatic legal protection",
                "An extra promise made by the seller or manufacturer beyond ACL",
                "Always free",
                "The same as a statutory guarantee"
            ],
            answer: 1,
            explain: "Express warranties are extra promises (often time-limited) made voluntarily — separate from the ACL's statutory guarantees, which always apply."
        },
        {
            id: "c-mcq-9", topic: "consumer-rights",
            q: "Implied terms in a consumer contract include:",
            options: [
                "Conditions about quality and fitness for purpose that apply automatically",
                "Promises made only verbally",
                "Terms only if both parties signed them",
                "Terms made up by the buyer"
            ],
            answer: 0,
            explain: "Implied terms (e.g. acceptable quality, fitness for purpose) apply by law and cannot be excluded for ordinary consumer goods."
        },
        {
            id: "c-mcq-10", topic: "consumer-rights",
            q: "If a product breaks within a few weeks of purchase due to a manufacturing defect, the consumer is entitled to remedy:",
            options: ["Only from the manufacturer", "Only from the retailer", "From the retailer (and may also pursue the manufacturer)", "Neither — buyer beware"],
            answer: 2,
            explain: "ACL allows the consumer to seek remedy from the retailer who sold the goods (and in some cases the manufacturer)."
        },

        /* ===== Consumer decisions ===== */
        {
            id: "c-mcq-11", topic: "consumer-decisions",
            q: "Comparison shopping is best described as:",
            options: [
                "Always choosing the cheapest product",
                "Researching price, quality and features across sellers before buying",
                "Buying the brand most advertised on TV",
                "Asking a friend what they bought last year"
            ],
            answer: 1,
            explain: "Comparison shopping uses multiple criteria — not only price — to identify best value."
        },
        {
            id: "c-mcq-12", topic: "consumer-decisions",
            q: "Which is NOT a typical influence on consumer decisions?",
            options: ["Age and gender", "Income level", "Advertising and social media", "The phase of the moon"],
            answer: 3,
            explain: "Influences include personal factors (age, gender, income), social factors (family, peers, culture) and external factors (ads, technology)."
        },
        {
            id: "c-mcq-13", topic: "consumer-decisions",
            q: "An 'impulse purchase' is best described as:",
            options: [
                "A planned purchase using a budget",
                "A purchase made spontaneously without prior planning",
                "Buying in bulk to save money",
                "A subscription that auto-renews"
            ],
            answer: 1,
            explain: "Impulse purchases are unplanned and emotion-driven — a major budget risk."
        },
        {
            id: "c-mcq-14", topic: "consumer-decisions",
            q: "The five-step decision-making process for a major purchase is best summarised as:",
            options: [
                "Need → Information → Alternatives → Choice → Evaluation",
                "Want → Buy → Hope → Repeat",
                "Brand → Image → Loyalty → Brand",
                "Discount → Bundle → Buy → Refund"
            ],
            answer: 0,
            explain: "Standard decision model: identify need, gather info, evaluate alternatives, choose, post-purchase evaluation."
        },
        {
            id: "c-mcq-15", topic: "consumer-decisions",
            q: "A 'need' differs from a 'want' because needs are:",
            options: [
                "More expensive",
                "Essential for survival or wellbeing (food, shelter, clothing)",
                "Always emotional",
                "Always advertised"
            ],
            answer: 1,
            explain: "Needs (essentials) take priority over wants (desirables) in good budgeting."
        },
        {
            id: "c-mcq-16", topic: "consumer-decisions",
            q: "Reading independent reviews and comparison websites is mainly an example of which step?",
            options: ["Recognising need", "Searching for information", "Post-purchase evaluation", "Negotiation"],
            answer: 1,
            explain: "Information search includes reviews, demos, friends, social media and comparison sites."
        },
        {
            id: "c-mcq-17", topic: "consumer-decisions",
            q: "A common cognitive bias when shopping online is:",
            options: [
                "Confirmation bias — preferring info that confirms existing brand loyalty",
                "Negative feedback only",
                "Always paying more for fewer features",
                "Buyer's remorse only"
            ],
            answer: 0,
            explain: "Confirmation bias and anchoring (relative to a 'was' price) are common online — recognise them to make better choices."
        },
        {
            id: "c-mcq-18", topic: "consumer-decisions",
            q: "When influencer marketing on TikTok or Instagram involves paid promotion, Australian rules require:",
            options: [
                "No disclosure",
                "Clear disclosure of the commercial relationship",
                "Disclosure only if asked",
                "Disclosure on the influencer's grandparents' page"
            ],
            answer: 1,
            explain: "ACCC and ASIC guidelines require clear disclosure of paid posts (#ad, paid partnership). Hidden ads can mislead consumers."
        },
        {
            id: "c-mcq-19", topic: "consumer-decisions",
            q: "Which of these would be GOOD evidence of value-for-money?",
            options: [
                "A product is the cheapest available",
                "A product offers the best balance of features, quality and price for the consumer's needs",
                "The product has the most advertising",
                "The product is sold-out everywhere"
            ],
            answer: 1,
            explain: "Value-for-money is contextual — it depends on the buyer's needs, not absolute price or popularity."
        },
        {
            id: "c-mcq-20", topic: "consumer-decisions",
            q: "Buying a more expensive long-life product to avoid frequent replacement is an example of:",
            options: ["Sustainable consumer choice", "Impulse buying", "Greenwashing", "Bait advertising"],
            answer: 0,
            explain: "Sustainable consumer choices weigh durability, repairability and environmental cost — not just sticker price."
        },

        /* ===== Consumer protection ===== */
        {
            id: "c-mcq-21", topic: "consumer-protection",
            q: "The ACCC stands for:",
            options: [
                "Australian Consumer & Currency Commission",
                "Australian Competition and Consumer Commission",
                "Asia-Pacific Council of Customers",
                "Australian Centre for Cost Control"
            ],
            answer: 1,
            explain: "The ACCC enforces the Competition and Consumer Act 2010 (which contains the ACL)."
        },
        {
            id: "c-mcq-22", topic: "consumer-protection",
            q: "Which is NOT a primary role of the ACCC?",
            options: [
                "Enforcing competition and consumer law",
                "Educating businesses and consumers",
                "Reviewing mergers",
                "Setting interest rates"
            ],
            answer: 3,
            explain: "Interest rates are set by the Reserve Bank of Australia (RBA), not the ACCC."
        },
        {
            id: "c-mcq-23", topic: "consumer-protection",
            q: "If a consumer has a complaint that can't be resolved with the business, they can lodge a complaint with:",
            options: [
                "Their state Fair Trading office (e.g. NSW Fair Trading)",
                "The Bureau of Meteorology",
                "The Department of Defence",
                "The Reserve Bank"
            ],
            answer: 0,
            explain: "State and territory Fair Trading offices handle consumer complaints. Industry-specific complaints can also go to ombudsmen (e.g. AFCA for financial)."
        },
        {
            id: "c-mcq-24", topic: "consumer-protection",
            q: "Bait advertising occurs when a business:",
            options: [
                "Donates products to a charity",
                "Advertises a product at a low price without enough stock to meet reasonable demand",
                "Compares its product fairly to competitors",
                "Offers a free sample"
            ],
            answer: 1,
            explain: "Bait advertising lures customers in with deals they can't fulfil. It is illegal under the ACL."
        },
        {
            id: "c-mcq-25", topic: "consumer-protection",
            q: "A 'phishing' scam typically:",
            options: [
                "Sends fake emails or texts to trick people into revealing passwords or financial info",
                "Throws fishing lines off a boat",
                "Sells expired food cheaply",
                "Refunds purchases automatically"
            ],
            answer: 0,
            explain: "Phishing impersonates trusted brands (banks, ATO, myGov) to steal credentials or money."
        },
        {
            id: "c-mcq-26", topic: "consumer-protection",
            q: "Which is the BEST first step if Harper notices an unauthorised charge on her bank statement?",
            options: [
                "Wait a month and see if it disappears",
                "Contact the bank immediately to report the unauthorised transaction",
                "Post about it on social media",
                "Apply for a new credit card"
            ],
            answer: 1,
            explain: "Banks have processes (and ePayments Code obligations) to investigate unauthorised transactions when reported promptly."
        },
        {
            id: "c-mcq-27", topic: "consumer-protection",
            q: "A 'Telco' (telecommunications) ombudsman handles:",
            options: [
                "Disputes about phone, internet and mobile services that the provider can't resolve",
                "Disputes about retail clothes",
                "Land disputes",
                "Workplace pay disputes"
            ],
            answer: 0,
            explain: "Industry ombudsmen offer free, independent dispute resolution after the customer has tried with the provider."
        },
        {
            id: "c-mcq-28", topic: "consumer-protection",
            q: "Greenwashing is when:",
            options: [
                "A business genuinely improves its environmental performance",
                "A business misleadingly claims products or operations are environmentally friendly",
                "A factory cleans its floor with green soap",
                "Recycled packaging carries an FSC label"
            ],
            answer: 1,
            explain: "Greenwashing is misleading 'eco' marketing. The ACCC has been active prosecuting it under ACL misleading-conduct rules."
        },

        /* ===== Personal finance ===== */
        {
            id: "c-mcq-29", topic: "personal-finance",
            q: "A budget is best defined as:",
            options: [
                "A record of money already spent",
                "A plan that estimates income and expenses over a period of time",
                "A type of bank account",
                "A fixed allowance from a parent"
            ],
            answer: 1,
            explain: "Budgets are forward-looking — they plan to control spending and reach goals."
        },
        {
            id: "c-mcq-30", topic: "personal-finance",
            q: "Which is a 'fixed' expense?",
            options: ["Movie tickets", "Birthday gifts", "Monthly mobile phone plan", "A new pair of headphones"],
            answer: 2,
            explain: "Fixed expenses recur at a regular amount; variable expenses change each period."
        },
        {
            id: "c-mcq-31", topic: "personal-finance",
            q: "Harper earns $40 babysitting and follows a 50/30/20 rule. How much should she SAVE?",
            options: ["$8", "$10", "$12", "$20"],
            answer: 0,
            explain: "20% of $40 = $8 saved (50% needs $20; 30% wants $12)."
        },
        {
            id: "c-mcq-32", topic: "personal-finance",
            q: "An emergency fund is generally recommended to cover:",
            options: ["1 day of expenses", "1 week of expenses", "3–6 months of essential expenses", "10 years of expenses"],
            answer: 2,
            explain: "Most personal-finance guides recommend 3–6 months of essentials as a buffer for unexpected events (job loss, illness)."
        },
        {
            id: "c-mcq-33", topic: "personal-finance",
            q: "SMART financial goals are:",
            options: [
                "Specific, Measurable, Achievable, Relevant, Time-bound",
                "Simple, Modest, Always-on, Real, Tested",
                "Strict, Mandatory, Aggressive, Risk-free, Tax-free",
                "Save Money And Read Tips"
            ],
            answer: 0,
            explain: "SMART converts vague intentions into trackable, actionable plans."
        },
        {
            id: "c-mcq-34", topic: "personal-finance",
            q: "Which is most likely a NEED rather than a WANT?",
            options: ["Designer sneakers", "Streaming-service subscription", "Public transport fare to school", "Concert ticket"],
            answer: 2,
            explain: "Transport to school is essential. Designer brands, entertainment subscriptions and concerts are wants."
        },
        {
            id: "c-mcq-35", topic: "personal-finance",
            q: "If Harper's income is $80/month and her expenses are $95/month, she has:",
            options: ["A surplus of $15", "A deficit of $15", "A balanced budget", "A profit of $175"],
            answer: 1,
            explain: "Expenses > income → deficit of $15. Sustained deficits lead to debt."
        },
        {
            id: "c-mcq-36", topic: "personal-finance",
            q: "'Pay yourself first' means:",
            options: [
                "Spend on yourself first",
                "Set aside savings as soon as you receive income, before discretionary spending",
                "Pay your friends back first",
                "Buy a treat each payday"
            ],
            answer: 1,
            explain: "Automating savings before spending is one of the most reliable ways to grow an emergency fund or savings."
        },
        {
            id: "c-mcq-37", topic: "personal-finance",
            q: "Tracking expenses helps Harper to:",
            options: [
                "Increase her income automatically",
                "Identify spending patterns and adjust her budget",
                "Avoid taxes",
                "Get higher interest on her savings"
            ],
            answer: 1,
            explain: "Tracking is the feedback loop in any budget — without it the budget is just a wish."
        },

        /* ===== Saving, banking & investing ===== */
        {
            id: "c-mcq-38", topic: "saving-investing",
            q: "Compound interest is interest paid on:",
            options: [
                "Only the original principal",
                "The principal plus previously earned interest",
                "The bank's profits",
                "The government's tax"
            ],
            answer: 1,
            explain: "Compound interest grows savings faster because interest itself earns interest."
        },
        {
            id: "c-mcq-39", topic: "saving-investing",
            q: "A 'high-interest savings account' typically:",
            options: [
                "Pays a higher rate than a transaction account",
                "Has no rules at all",
                "Is the same as a credit card",
                "Charges interest to deposit money"
            ],
            answer: 0,
            explain: "Banks offer higher interest on savings accounts (often with bonus rates if you make deposits and no withdrawals)."
        },
        {
            id: "c-mcq-40", topic: "saving-investing",
            q: "Term deposits differ from savings accounts because they:",
            options: [
                "Lock up your money for a set time at a fixed rate",
                "Pay no interest",
                "Are illegal in Australia",
                "Always have variable rates"
            ],
            answer: 0,
            explain: "Term deposits trade access for a fixed, often-higher rate over a set term (e.g. 6 or 12 months)."
        },
        {
            id: "c-mcq-41", topic: "saving-investing",
            q: "Superannuation is best described as:",
            options: [
                "Compulsory long-term retirement savings paid by employers (and supplemented by individuals)",
                "A government welfare cheque",
                "A type of credit card",
                "A bank loan for first homes"
            ],
            answer: 0,
            explain: "Australian super (compulsory employer contributions, currently 11.5%, rising to 12% from July 2025) saves for retirement and is tax-advantaged."
        },
        {
            id: "c-mcq-42", topic: "saving-investing",
            q: "The 'risk vs return' trade-off says that:",
            options: [
                "Higher returns generally come with higher risk of loss",
                "Returns and risk are unrelated",
                "Lower risk means lower fees only",
                "Returns are guaranteed by the government"
            ],
            answer: 0,
            explain: "Cash and term deposits are low-risk/low-return; shares and crypto are higher-risk/higher-potential-return. Diversification helps manage risk."
        },
        {
            id: "c-mcq-43", topic: "saving-investing",
            q: "A 'share' represents:",
            options: [
                "Part-ownership of a company",
                "A loan to the government",
                "A type of bank fee",
                "A type of insurance"
            ],
            answer: 0,
            explain: "Shareholders own a slice of a company and may receive dividends and benefit from capital growth (or loss)."
        },
        {
            id: "c-mcq-44", topic: "saving-investing",
            q: "Diversification means:",
            options: [
                "Putting all money in one investment",
                "Spreading investments across different assets to reduce risk",
                "Investing only in property",
                "Borrowing to invest"
            ],
            answer: 1,
            explain: "Diversification reduces the impact of any single investment failing — 'don't put all eggs in one basket'."
        },
        {
            id: "c-mcq-45", topic: "saving-investing",
            q: "Compare $1,000 saved at 5% p.a. compound for 1 year vs simple interest. Which earns more?",
            options: [
                "Simple interest",
                "They earn the same in the FIRST year only",
                "Compound earns much more in year 1",
                "Neither earns anything"
            ],
            answer: 1,
            explain: "In year 1 there has been no compounding effect yet — both are $50. Compounding overtakes simple interest in subsequent years."
        },

        /* ===== Payment & credit ===== */
        {
            id: "c-mcq-46", topic: "payment-credit",
            q: "Which is the key difference between a debit card and a credit card?",
            options: [
                "Debit cards have logos, credit cards don't",
                "A debit card uses your own money; a credit card borrows from the bank to repay later",
                "Debit cards earn rewards, credit cards never do",
                "Credit cards work overseas, debit cards never do"
            ],
            answer: 1,
            explain: "Debit = your funds. Credit = borrowed funds with interest if not repaid in full each month."
        },
        {
            id: "c-mcq-47", topic: "payment-credit",
            q: "BNPL services like Afterpay can become risky because:",
            options: [
                "They are illegal in Australia",
                "Late fees and easy access can lead to overspending and accumulating debt",
                "They charge over 30% interest by law",
                "They report every purchase to the ATO"
            ],
            answer: 1,
            explain: "BNPL is generally interest-free if paid on time, but late fees and many small purchases can quickly overwhelm a budget."
        },
        {
            id: "c-mcq-48", topic: "payment-credit",
            q: "Which is an example of an electronic funds transfer (EFT)?",
            options: ["Paying with cash", "Bartering goods", "PayID transfer between bank accounts", "Writing on an IOU"],
            answer: 2,
            explain: "EFT moves money electronically — PayID, BPAY, direct debit and Osko are all EFT methods."
        },
        {
            id: "c-mcq-49", topic: "payment-credit",
            q: "Identity theft most commonly involves:",
            options: [
                "Someone copying your homework",
                "Stealing personal info to make unauthorised purchases or open accounts",
                "Buying a product you didn't want",
                "A faulty product not being repaired"
            ],
            answer: 1,
            explain: "Strong passwords, 2FA and shredding old statements help reduce identity-theft risk."
        },
        {
            id: "c-mcq-50", topic: "payment-credit",
            q: "If you only pay the MINIMUM repayment on a credit card each month:",
            options: [
                "You repay the full balance quickly",
                "You pay much more in interest over time and the balance can take years to clear",
                "Interest stops accruing",
                "The bank doubles your credit limit"
            ],
            answer: 1,
            explain: "Minimum repayments are designed to keep the borrower in debt longer; aim to clear the balance each month."
        },
        {
            id: "c-mcq-51", topic: "payment-credit",
            q: "An interest-free period on a credit card normally applies if:",
            options: [
                "You pay the full closing balance by the due date",
                "You only pay the minimum",
                "You always carry a balance",
                "You pay cash for groceries"
            ],
            answer: 0,
            explain: "Pay the closing balance in full and on time → no interest charged on purchases that statement."
        },
        {
            id: "c-mcq-52", topic: "payment-credit",
            q: "A credit score is mainly affected by:",
            options: [
                "Your favourite colour",
                "Your borrowing and repayment history, defaults and applications",
                "How many cats you have",
                "Your music taste"
            ],
            answer: 1,
            explain: "Credit-reporting bodies track repayments, defaults, applications and total credit — affecting future loan offers."
        },
        {
            id: "c-mcq-53", topic: "payment-credit",
            q: "Cryptocurrency differs from cash because it:",
            options: [
                "Is digital and not issued by a central bank or government",
                "Is always backed by gold",
                "Cannot be lost or stolen",
                "Earns guaranteed interest"
            ],
            answer: 0,
            explain: "Cryptocurrencies (Bitcoin, Ethereum) are decentralised digital assets — volatile and not legal tender in Australia."
        },

        /* ===== Economic environment ===== */
        {
            id: "c-mcq-54", topic: "economic-environment",
            q: "The 'economic problem' refers to:",
            options: [
                "Tax being too high",
                "Unlimited human wants but limited resources",
                "Banks charging fees",
                "Rising house prices"
            ],
            answer: 1,
            explain: "Scarcity forces choices and trade-offs in every economy."
        },
        {
            id: "c-mcq-55", topic: "economic-environment",
            q: "An 'opportunity cost' is best described as:",
            options: [
                "A discount at the shops",
                "The next best alternative given up when a choice is made",
                "Total cost of all alternatives",
                "A type of tax"
            ],
            answer: 1,
            explain: "If Harper spends $10 on a movie instead of saving, the saving she gives up is the opportunity cost."
        },
        {
            id: "c-mcq-56", topic: "economic-environment",
            q: "GDP measures:",
            options: [
                "The number of citizens",
                "The total monetary value of goods and services produced in a country in a period",
                "The amount of gold a country owns",
                "The size of the army"
            ],
            answer: 1,
            explain: "Gross Domestic Product is the standard headline measure of economic output."
        },
        {
            id: "c-mcq-57", topic: "economic-environment",
            q: "A 'recession' is commonly defined as:",
            options: [
                "Two consecutive quarters of negative GDP growth",
                "Any month where unemployment rises",
                "The day after Black Friday",
                "When the share market falls 1%"
            ],
            answer: 0,
            explain: "Two consecutive quarters of negative real GDP growth is the conventional technical definition."
        },
        {
            id: "c-mcq-58", topic: "economic-environment",
            q: "Australia's economic system is best described as:",
            options: ["Pure command", "Pure free market", "Mixed market", "Subsistence"],
            answer: 2,
            explain: "Australia has a mixed-market economy: most production via private markets, with significant government involvement (health, education, regulation)."
        },
        {
            id: "c-mcq-59", topic: "economic-environment",
            q: "The four factors of production are:",
            options: [
                "Land, labour, capital, enterprise",
                "Money, gold, oil, water",
                "Buyers, sellers, banks, government",
                "Cash, credit, BNPL, super"
            ],
            answer: 0,
            explain: "These are the resources used to produce goods and services. Enterprise is the entrepreneurial coordination of the others."
        },
        {
            id: "c-mcq-60", topic: "economic-environment",
            q: "GST in Australia is currently:",
            options: ["5%", "8%", "10%", "15%"],
            answer: 2,
            explain: "Goods and Services Tax is a 10% broad-based consumption tax (with some exemptions like fresh food, education, health)."
        },
        {
            id: "c-mcq-61", topic: "economic-environment",
            q: "An income tax system where higher earners pay a higher percentage is called:",
            options: ["Regressive", "Flat", "Progressive", "Random"],
            answer: 2,
            explain: "Australia's income tax is progressive — marginal rates rise as income rises. GST is more regressive in effect."
        },
        {
            id: "c-mcq-62", topic: "economic-environment",
            q: "The 'circular flow of income' shows:",
            options: [
                "How petrol moves around a city",
                "How income, expenditure and resources flow between households, firms, government and the rest of the world",
                "Coastal currents",
                "Internet traffic"
            ],
            answer: 1,
            explain: "Households supply factors → firms produce → firms pay wages → households spend → and so on, with leakages (saving, tax, imports) and injections (investment, gov spending, exports)."
        },
        {
            id: "c-mcq-63", topic: "economic-environment",
            q: "Which is a LEAKAGE from the circular flow?",
            options: ["Investment", "Government spending", "Exports", "Saving"],
            answer: 3,
            explain: "Leakages: savings, taxes, imports. Injections: investment, government spending, exports."
        },

        /* ===== Markets, supply & demand, pricing ===== */
        {
            id: "c-mcq-64", topic: "markets-pricing",
            q: "If demand for a product rises while supply stays the same, the price will most likely:",
            options: ["Stay exactly the same", "Decrease", "Increase", "Become free"],
            answer: 2,
            explain: "Higher demand at constant supply → upward price pressure (basic supply and demand)."
        },
        {
            id: "c-mcq-65", topic: "markets-pricing",
            q: "If supply increases (e.g. better technology) while demand stays the same, price will likely:",
            options: ["Increase", "Stay the same", "Decrease", "Become infinite"],
            answer: 2,
            explain: "More supply at the same demand pushes price down — think falling solar-panel prices over the last decade."
        },
        {
            id: "c-mcq-66", topic: "markets-pricing",
            q: "An 'equilibrium price' is:",
            options: [
                "The legal minimum price",
                "The price at which quantity demanded equals quantity supplied",
                "The price after tax",
                "The price set by government"
            ],
            answer: 1,
            explain: "Equilibrium = the market-clearing price. Surpluses or shortages move the market towards it."
        },
        {
            id: "c-mcq-67", topic: "markets-pricing",
            q: "Which is an example of a SUBSTITUTE good?",
            options: ["Cars and petrol", "Tea and coffee", "Toothbrushes and toothpaste", "Bread and butter"],
            answer: 1,
            explain: "Substitutes can replace one another. Cars/petrol, brushes/toothpaste and bread/butter are complements."
        },
        {
            id: "c-mcq-68", topic: "markets-pricing",
            q: "If the price of petrol rises sharply, demand for electric cars is likely to:",
            options: ["Fall", "Stay the same", "Rise (substitution effect)", "Disappear"],
            answer: 2,
            explain: "Substitutes — when one becomes more expensive, demand for the other typically rises."
        },
        {
            id: "c-mcq-69", topic: "markets-pricing",
            q: "A 'monopoly' market structure has:",
            options: [
                "Many firms and identical products",
                "One dominant firm with significant market power",
                "Two firms only",
                "Many firms and differentiated products"
            ],
            answer: 1,
            explain: "Monopoly = single dominant supplier. Australian competition law restricts monopolistic conduct under the CCA 2010."
        },
        {
            id: "c-mcq-70", topic: "markets-pricing",
            q: "Which is most likely to shift the DEMAND curve for chocolate to the right?",
            options: [
                "Chocolate becoming a status symbol due to advertising",
                "A bumper cocoa harvest",
                "Higher GST",
                "Lower wages"
            ],
            answer: 0,
            explain: "Demand shifts arise from changes in consumer tastes/income/expectations. Bumper harvest shifts SUPPLY."
        },

        /* ===== Money, RBA & policy ===== */
        {
            id: "c-mcq-71", topic: "money-policy",
            q: "Which is a measure of inflation?",
            options: ["GDP", "Unemployment rate", "Consumer Price Index (CPI)", "Exchange rate"],
            answer: 2,
            explain: "CPI tracks the change in price of a basket of household goods and services over time."
        },
        {
            id: "c-mcq-72", topic: "money-policy",
            q: "The Reserve Bank of Australia's main role is to:",
            options: [
                "Sell groceries",
                "Conduct monetary policy and maintain financial stability",
                "Run schools",
                "Set income tax rates"
            ],
            answer: 1,
            explain: "The RBA targets 2–3% inflation over the cycle and oversees the payment system; tax rates are set by Parliament."
        },
        {
            id: "c-mcq-73", topic: "money-policy",
            q: "When the RBA RAISES the cash rate, the most likely short-run effects are:",
            options: [
                "Mortgage and loan rates rise; spending typically slows",
                "Mortgages get cheaper; spending speeds up",
                "Inflation always rises",
                "Wages always rise"
            ],
            answer: 0,
            explain: "Higher cash rate → higher borrowing costs → lower demand → downward pressure on inflation."
        },
        {
            id: "c-mcq-74", topic: "money-policy",
            q: "'Demand-pull' inflation happens when:",
            options: [
                "Consumer demand outpaces supply, pushing prices up",
                "Costs to firms rise",
                "Workers leave their jobs",
                "Imports become cheaper"
            ],
            answer: 0,
            explain: "Demand-pull = too much demand chasing too few goods. Cost-push = costs rising and firms passing on the increase."
        },
        {
            id: "c-mcq-75", topic: "money-policy",
            q: "Australian Government 'fiscal policy' refers to:",
            options: [
                "Use of taxation and government spending to influence the economy",
                "Setting the cash rate",
                "Issuing passports",
                "Changing the GST every quarter"
            ],
            answer: 0,
            explain: "Fiscal policy = government's tax and spending decisions, set in the federal Budget."
        },
        {
            id: "c-mcq-76", topic: "money-policy",
            q: "The 'unemployment rate' measures:",
            options: [
                "Everyone without a job",
                "People in the labour force who are without work and actively looking for it",
                "People not working full time",
                "Retired people"
            ],
            answer: 1,
            explain: "Unemployment rate = unemployed ÷ labour force × 100. People not looking aren't counted."
        },

        /* ===== Business environment ===== */
        {
            id: "c-mcq-77", topic: "business-environment",
            q: "Which is a primary sector business?",
            options: ["A bakery", "A wheat farm", "A clothing retailer", "A web designer"],
            answer: 1,
            explain: "Primary = extracts/produces raw materials. Secondary = manufacturing. Tertiary = services. Quaternary = knowledge/information."
        },
        {
            id: "c-mcq-78", topic: "business-environment",
            q: "Manufacturing belongs to which sector?",
            options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
            answer: 1,
            explain: "Secondary sector transforms raw materials into goods (e.g. car factories, food processing)."
        },
        {
            id: "c-mcq-79", topic: "business-environment",
            q: "A retail bank providing financial services is in which sector?",
            options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
            answer: 2,
            explain: "Tertiary sector = services (banks, retailers, airlines, hospitality). Quaternary = knowledge/research/information."
        },
        {
            id: "c-mcq-80", topic: "business-environment",
            q: "Internal influences on a business include:",
            options: [
                "Government regulation",
                "Management decisions, staff capabilities and culture",
                "Foreign exchange rates",
                "The weather"
            ],
            answer: 1,
            explain: "Internal = within the business (people, culture, resources). External = beyond the business (economy, government, technology, competitors)."
        },
        {
            id: "c-mcq-81", topic: "business-environment",
            q: "Globalisation primarily affects Australian businesses by:",
            options: [
                "Increasing competition from overseas firms and access to overseas markets and supplies",
                "Reducing import options",
                "Reducing internet use",
                "Banning exports"
            ],
            answer: 0,
            explain: "Globalisation cuts across trade, finance, tech and labour — it brings opportunities (exports, supply chains) and pressures (competition, vulnerability)."
        },

        /* ===== Business types ===== */
        {
            id: "c-mcq-82", topic: "business-types",
            q: "Which is NOT one of the four main types of business ownership in Australia?",
            options: ["Sole trader", "Partnership", "Private company", "Royal monopoly"],
            answer: 3,
            explain: "Sole trader, partnership, private company (Pty Ltd) and public company (Ltd) are the main forms."
        },
        {
            id: "c-mcq-83", topic: "business-types",
            q: "An advantage of being a sole trader is:",
            options: [
                "Easy to set up and the owner keeps all profits",
                "Unlimited liability protects personal assets",
                "Profits are split with shareholders",
                "Must follow ASX listing rules"
            ],
            answer: 0,
            explain: "Sole traders are quick and cheap to set up and keep all profits. Major downside: unlimited personal liability."
        },
        {
            id: "c-mcq-84", topic: "business-types",
            q: "A KEY advantage of forming a partnership is:",
            options: [
                "Limited liability for all partners",
                "Shared workload, capital and complementary skills",
                "Profits go to shareholders only",
                "ASX listing"
            ],
            answer: 1,
            explain: "Partnerships pool capital and expertise. Most still have unlimited liability (general partnerships)."
        },
        {
            id: "c-mcq-85", topic: "business-types",
            q: "A 'Pty Ltd' company is best described as:",
            options: [
                "A proprietary (private) limited company with limited shareholder liability",
                "A registered charity",
                "A publicly listed company",
                "A government department"
            ],
            answer: 0,
            explain: "Pty Ltd = proprietary limited company. Limited liability protects shareholders' personal assets up to amount unpaid on shares."
        },
        {
            id: "c-mcq-86", topic: "business-types",
            q: "A public company (Ltd) is required to:",
            options: [
                "List on the ASX",
                "Comply with stricter disclosure rules and may list on the ASX",
                "Have only one shareholder",
                "Avoid taxes"
            ],
            answer: 1,
            explain: "Not all public companies list, but they must publish audited accounts and comply with stricter Corporations Act rules."
        },
        {
            id: "c-mcq-87", topic: "business-types",
            q: "A franchise business model:",
            options: [
                "Lets a franchisee operate using the franchisor's brand and system, paying fees/royalties",
                "Means total independence from a parent brand",
                "Is illegal in Australia",
                "Has no quality control"
            ],
            answer: 0,
            explain: "Franchising trades autonomy for established brand and support — examples: McDonald's, Boost Juice. Regulated under the Franchising Code of Conduct."
        },
        {
            id: "c-mcq-88", topic: "business-types",
            q: "Which is a UNIQUE feature of a co-operative?",
            options: [
                "Owners and customers/members control it democratically (one member, one vote)",
                "Listed on the ASX automatically",
                "Always tax-exempt",
                "Has no members"
            ],
            answer: 0,
            explain: "Examples: CBH Group (WA grain growers), Capricorn Society. Voting power isn't tied to capital invested."
        },

        /* ===== Stakeholders & corporate responsibility ===== */
        {
            id: "c-mcq-89", topic: "business-stakeholders",
            q: "Stakeholders of a business include:",
            options: [
                "Only the owners",
                "Owners, employees, customers, suppliers, government and the community",
                "Only customers",
                "Only the directors"
            ],
            answer: 1,
            explain: "Anyone affected by the business — internal (owners, staff) and external (customers, community)."
        },
        {
            id: "c-mcq-90", topic: "business-stakeholders",
            q: "Corporate Social Responsibility (CSR) means:",
            options: [
                "Cutting wages to lift profit",
                "Voluntary action that goes beyond legal duty to create positive social/environmental outcomes",
                "Hiding faulty products from customers",
                "Avoiding paying tax"
            ],
            answer: 1,
            explain: "CSR includes ethical sourcing, charity giving, employee wellbeing and environmental stewardship."
        },
        {
            id: "c-mcq-91", topic: "business-stakeholders",
            q: "A 'triple bottom line' approach measures:",
            options: [
                "Profit only",
                "Profit, people and planet (financial, social and environmental performance)",
                "Cash, credit and crypto",
                "Past, present and future earnings"
            ],
            answer: 1,
            explain: "Triple bottom line embeds social and environmental outcomes alongside profit."
        },
        {
            id: "c-mcq-92", topic: "business-stakeholders",
            q: "Which is an example of ETHICAL business practice?",
            options: [
                "Misleading advertising to boost sales",
                "Paying suppliers in developing countries fair wages and audit working conditions",
                "Dumping waste in waterways",
                "Bribing officials"
            ],
            answer: 1,
            explain: "Ethical practice considers fairness across the supply chain. Australian businesses are also subject to Modern Slavery Act reporting."
        },
        {
            id: "c-mcq-93", topic: "business-stakeholders",
            q: "Employees as stakeholders are mainly affected by:",
            options: [
                "Pay, conditions, training and job security",
                "Tax rates only",
                "Climate only",
                "Brand colours"
            ],
            answer: 0,
            explain: "Employee interests centre on workplace conditions, pay equity and development."
        },
        {
            id: "c-mcq-94", topic: "business-stakeholders",
            q: "A community might be impacted by a local factory through:",
            options: [
                "Employment and local procurement (positive) AND noise/pollution (negative)",
                "Only positive ways",
                "Only negative ways",
                "No impact at all"
            ],
            answer: 0,
            explain: "Stakeholder impacts are usually mixed — businesses and communities negotiate trade-offs (often via local council or community consultation)."
        },

        /* ===== Communication & research (COM5-8 / COM5-9) ===== */
        {
            id: "c-mcq-95", topic: "communication",
            q: "When writing a research report, a primary source is:",
            options: [
                "A textbook summarising other research",
                "Original data you collected (e.g. survey responses, interviews)",
                "A Wikipedia article",
                "A meme on social media"
            ],
            answer: 1,
            explain: "Primary = first-hand data. Secondary = analyses or summaries by others. COM5-7/8 reward both, used appropriately."
        },
        {
            id: "c-mcq-96", topic: "communication",
            q: "A reliable secondary source for current Australian inflation data is:",
            options: [
                "A friend's TikTok",
                "The Australian Bureau of Statistics (ABS)",
                "A random tweet",
                "An anonymous forum post"
            ],
            answer: 1,
            explain: "ABS, RBA, ACCC and ASIC are authoritative sources — use them, cite them properly."
        },
        {
            id: "c-mcq-97", topic: "communication",
            q: "A bar chart is BEST for:",
            options: [
                "Comparing categorical data (e.g. spending by category)",
                "Showing geographic data on a map",
                "Showing percentage parts of a whole",
                "Showing a story over time only"
            ],
            answer: 0,
            explain: "Bar charts compare categories. Pie charts show proportions; line charts show change over time; choropleths show spatial data."
        },
        {
            id: "c-mcq-98", topic: "communication",
            q: "Acknowledging sources in a report is important because it:",
            options: [
                "Makes the report longer",
                "Avoids plagiarism, lets readers verify claims and gives credit",
                "Looks fancy",
                "Is illegal otherwise"
            ],
            answer: 1,
            explain: "Citing sources is core academic integrity (and a Norwest assessment policy requirement)."
        },
        {
            id: "c-mcq-99", topic: "communication",
            q: "When working in a group on a Commerce task, EFFECTIVE collaboration typically involves:",
            options: [
                "One person doing all the work to keep things consistent",
                "Clear roles, agreed deadlines, shared documents and regular check-ins",
                "Avoiding any disagreements",
                "Splitting the task only by who is online last"
            ],
            answer: 1,
            explain: "COM5-9 explicitly addresses working independently AND collaboratively to meet deadlines — set up structure early."
        },
        {
            id: "c-mcq-100", topic: "communication",
            q: "A 'fact' differs from an 'opinion' because facts are:",
            options: [
                "Verifiable claims supported by evidence",
                "Always longer",
                "Always written in italics",
                "What most people believe"
            ],
            answer: 0,
            explain: "Strong commerce writing distinguishes evidence-based claims from interpretive views — and uses both, transparently."
        },
        {
            id: "c-mcq-101", topic: "communication",
            q: "A graph 'misleads' viewers if:",
            options: [
                "It uses a vertical axis that doesn't start at zero, exaggerating differences",
                "It uses bright colours",
                "It has labelled axes",
                "It shows a clear trend"
            ],
            answer: 0,
            explain: "Truncated y-axes, cherry-picked time ranges and 3-D effects are common ways to mislead — flag them when you spot them."
        },
        {
            id: "c-mcq-102", topic: "communication",
            q: "A 'qualitative' research method is:",
            options: [
                "Statistical survey of 1,000 people",
                "An interview exploring why customers feel a certain way about a brand",
                "Counting daily transactions",
                "Measuring mass in grams"
            ],
            answer: 1,
            explain: "Qualitative explores meaning/experience (interviews, focus groups). Quantitative measures (surveys with numbers, sales data)."
        },

        /* ===== Consumer rights & responsibilities — expansion ===== */
        {
            id: "c-mcq-103", topic: "consumer-rights",
            q: "Which statement best describes acceptable quality?",
            options: [
                "goods must do the job the buyer clearly asked for.",
                "a serious problem that lets the consumer reject the product and choose a refund or replacement.",
                "evidence such as a receipt, invoice or bank statement showing the sale happened.",
                "goods are safe, durable and free from defects for a reasonable time."
            ],
            answer: 3,
            explain: "This describes acceptable quality because goods are safe, durable and free from defects for a reasonable time."
        },
        {
            id: "c-mcq-104", topic: "consumer-rights",
            q: "Which statement best describes fit for purpose?",
            options: [
                "goods must do the job the buyer clearly asked for.",
                "evidence such as a receipt, invoice or bank statement showing the sale happened.",
                "a set time to cancel some unsolicited consumer contracts without penalty.",
                "an extra promise made by a seller or manufacturer in addition to ACL rights."
            ],
            answer: 0,
            explain: "This describes fit for purpose because goods must do the job the buyer clearly asked for."
        },
        {
            id: "c-mcq-105", topic: "consumer-rights",
            q: "Which statement best describes major failure?",
            options: [
                "an extra promise made by a seller or manufacturer in addition to ACL rights.",
                "a serious problem that lets the consumer reject the product and choose a refund or replacement.",
                "the duty to read terms, compare options and use products properly before complaining.",
                "goods are safe, durable and free from defects for a reasonable time."
            ],
            answer: 1,
            explain: "This describes major failure because a serious problem that lets the consumer reject the product and choose a refund or replacement."
        },
        {
            id: "c-mcq-106", topic: "consumer-rights",
            q: "Which statement best describes proof of purchase?",
            options: [
                "goods are safe, durable and free from defects for a reasonable time.",
                "goods must do the job the buyer clearly asked for.",
                "evidence such as a receipt, invoice or bank statement showing the sale happened.",
                "a serious problem that lets the consumer reject the product and choose a refund or replacement."
            ],
            answer: 2,
            explain: "This describes proof of purchase because evidence such as a receipt, invoice or bank statement showing the sale happened."
        },
        {
            id: "c-mcq-107", topic: "consumer-rights",
            q: "Which statement best describes cooling-off period?",
            options: [
                "a serious problem that lets the consumer reject the product and choose a refund or replacement.",
                "evidence such as a receipt, invoice or bank statement showing the sale happened.",
                "an extra promise made by a seller or manufacturer in addition to ACL rights.",
                "a set time to cancel some unsolicited consumer contracts without penalty."
            ],
            answer: 3,
            explain: "This describes cooling-off period because a set time to cancel some unsolicited consumer contracts without penalty."
        },
        {
            id: "c-mcq-108", topic: "consumer-rights",
            q: "Which statement best describes express warranty?",
            options: [
                "an extra promise made by a seller or manufacturer in addition to ACL rights.",
                "a set time to cancel some unsolicited consumer contracts without penalty.",
                "the duty to read terms, compare options and use products properly before complaining.",
                "goods are safe, durable and free from defects for a reasonable time."
            ],
            answer: 0,
            explain: "This describes express warranty because an extra promise made by a seller or manufacturer in addition to ACL rights."
        },
        {
            id: "c-mcq-109", topic: "consumer-rights",
            q: "Which statement best describes consumer responsibility?",
            options: [
                "goods are safe, durable and free from defects for a reasonable time.",
                "the duty to read terms, compare options and use products properly before complaining.",
                "goods must do the job the buyer clearly asked for.",
                "a serious problem that lets the consumer reject the product and choose a refund or replacement."
            ],
            answer: 1,
            explain: "This describes consumer responsibility because the duty to read terms, compare options and use products properly before complaining."
        },
        {
            id: "c-mcq-110", topic: "consumer-rights",
            q: "A new set of earbuds stops working after two weeks of normal use. Which concept is MOST relevant?",
            options: [
                "major failure",
                "proof of purchase",
                "cooling-off period",
                "acceptable quality"
            ],
            answer: 3,
            explain: "The scenario is about acceptable quality because it gives buyers a legal remedy when goods are faulty or unsafe."
        },
        {
            id: "c-mcq-111", topic: "consumer-rights",
            q: "A student asks for running shoes for wet-weather sport, but the shoes become slippery immediately. Which concept is MOST relevant?",
            options: [
                "fit for purpose",
                "cooling-off period",
                "express warranty",
                "consumer responsibility"
            ],
            answer: 0,
            explain: "The scenario is about fit for purpose because it protects buyers who rely on a seller's advice about how a product should work."
        },
        {
            id: "c-mcq-112", topic: "consumer-rights",
            q: "A laptop arrives with the wrong storage size and overheats on the first day. Which concept is MOST relevant?",
            options: [
                "consumer responsibility",
                "major failure",
                "acceptable quality",
                "fit for purpose"
            ],
            answer: 1,
            explain: "The scenario is about major failure because it gives consumers stronger choices when a problem is serious."
        },
        {
            id: "c-mcq-113", topic: "consumer-rights",
            q: "A shop asks for evidence before processing a faulty item complaint. Which concept is MOST relevant?",
            options: [
                "fit for purpose",
                "major failure",
                "proof of purchase",
                "cooling-off period"
            ],
            answer: 2,
            explain: "The scenario is about proof of purchase because it makes it easier to show where and when goods were bought."
        },
        {
            id: "c-mcq-114", topic: "consumer-rights",
            q: "A salesperson signs a family up for a door-to-door deal they regret that night. Which concept is MOST relevant?",
            options: [
                "proof of purchase",
                "express warranty",
                "consumer responsibility",
                "cooling-off period"
            ],
            answer: 3,
            explain: "The scenario is about cooling-off period because it protects people from pressure selling."
        },
        {
            id: "c-mcq-115", topic: "consumer-rights",
            q: "A manufacturer advertises a two-year replacement promise on a gaming headset. Which concept is MOST relevant?",
            options: [
                "express warranty",
                "consumer responsibility",
                "acceptable quality",
                "fit for purpose"
            ],
            answer: 0,
            explain: "The scenario is about express warranty because it can add extra cover on top of the law."
        },
        {
            id: "c-mcq-116", topic: "consumer-rights",
            q: "A buyer ignores sizing, care and return information before buying online. Which concept is MOST relevant?",
            options: [
                "fit for purpose",
                "consumer responsibility",
                "major failure",
                "proof of purchase"
            ],
            answer: 1,
            explain: "The scenario is about consumer responsibility because it reduces avoidable mistakes and supports fair complaint handling."
        },
        {
            id: "c-mcq-117", topic: "consumer-rights",
            q: "Why is acceptable quality important in Commerce?",
            options: [
                "it makes it easier to show where and when goods were bought.",
                "it protects people from pressure selling.",
                "it can add extra cover on top of the law.",
                "it gives buyers a legal remedy when goods are faulty or unsafe."
            ],
            answer: 3,
            explain: "This is correct because it gives buyers a legal remedy when goods are faulty or unsafe."
        },
        {
            id: "c-mcq-118", topic: "consumer-rights",
            q: "Why is fit for purpose important in Commerce?",
            options: [
                "it protects buyers who rely on a seller's advice about how a product should work.",
                "it can add extra cover on top of the law.",
                "it reduces avoidable mistakes and supports fair complaint handling.",
                "it gives buyers a legal remedy when goods are faulty or unsafe."
            ],
            answer: 0,
            explain: "This is correct because it protects buyers who rely on a seller's advice about how a product should work."
        },
        {
            id: "c-mcq-119", topic: "consumer-rights",
            q: "Why is major failure important in Commerce?",
            options: [
                "it gives buyers a legal remedy when goods are faulty or unsafe.",
                "it gives consumers stronger choices when a problem is serious.",
                "it protects buyers who rely on a seller's advice about how a product should work.",
                "it makes it easier to show where and when goods were bought."
            ],
            answer: 1,
            explain: "This is correct because it gives consumers stronger choices when a problem is serious."
        },
        {
            id: "c-mcq-120", topic: "consumer-rights",
            q: "Why is proof of purchase important in Commerce?",
            options: [
                "it gives consumers stronger choices when a problem is serious.",
                "it protects people from pressure selling.",
                "it makes it easier to show where and when goods were bought.",
                "it can add extra cover on top of the law."
            ],
            answer: 2,
            explain: "This is correct because it makes it easier to show where and when goods were bought."
        },
        {
            id: "c-mcq-121", topic: "consumer-rights",
            q: "Why is cooling-off period important in Commerce?",
            options: [
                "it can add extra cover on top of the law.",
                "it reduces avoidable mistakes and supports fair complaint handling.",
                "it gives buyers a legal remedy when goods are faulty or unsafe.",
                "it protects people from pressure selling."
            ],
            answer: 3,
            explain: "This is correct because it protects people from pressure selling."
        },
        {
            id: "c-mcq-122", topic: "consumer-rights",
            q: "Why is express warranty important in Commerce?",
            options: [
                "it can add extra cover on top of the law.",
                "it gives buyers a legal remedy when goods are faulty or unsafe.",
                "it protects buyers who rely on a seller's advice about how a product should work.",
                "it gives consumers stronger choices when a problem is serious."
            ],
            answer: 0,
            explain: "This is correct because it can add extra cover on top of the law."
        },
        {
            id: "c-mcq-123", topic: "consumer-rights",
            q: "Why is consumer responsibility important in Commerce?",
            options: [
                "it gives consumers stronger choices when a problem is serious.",
                "it reduces avoidable mistakes and supports fair complaint handling.",
                "it makes it easier to show where and when goods were bought.",
                "it protects people from pressure selling."
            ],
            answer: 1,
            explain: "This is correct because it reduces avoidable mistakes and supports fair complaint handling."
        },
        {
            id: "c-mcq-124", topic: "consumer-rights",
            q: "A new set of earbuds stops working after two weeks of normal use. What is the BEST next step?",
            options: [
                "cancel the unsolicited contract within the allowed period and keep written records.",
                "read what the warranty promises and remember ACL rights still apply.",
                "check product details, keep records and follow care instructions before and after buying.",
                "take the earbuds back to the seller with proof of purchase and request an ACL remedy."
            ],
            answer: 3,
            explain: "The best response is to take the earbuds back to the seller with proof of purchase and request an ACL remedy. This fits acceptable quality because it gives buyers a legal remedy when goods are faulty or unsafe."
        },
        {
            id: "c-mcq-125", topic: "consumer-rights",
            q: "A student asks for running shoes for wet-weather sport, but the shoes become slippery immediately. What is the BEST next step?",
            options: [
                "remind the retailer of the stated purpose and ask for a remedy because the shoes were not suitable.",
                "check product details, keep records and follow care instructions before and after buying.",
                "take the earbuds back to the seller with proof of purchase and request an ACL remedy.",
                "reject the laptop and choose a refund or replacement rather than accepting only a repair."
            ],
            answer: 0,
            explain: "The best response is to remind the retailer of the stated purpose and ask for a remedy because the shoes were not suitable. This fits fit for purpose because it protects buyers who rely on a seller's advice about how a product should work."
        },
        {
            id: "c-mcq-126", topic: "consumer-rights",
            q: "A laptop arrives with the wrong storage size and overheats on the first day. What is the BEST next step?",
            options: [
                "remind the retailer of the stated purpose and ask for a remedy because the shoes were not suitable.",
                "reject the laptop and choose a refund or replacement rather than accepting only a repair.",
                "show the receipt, emailed invoice or bank record to support the claim.",
                "cancel the unsolicited contract within the allowed period and keep written records."
            ],
            answer: 1,
            explain: "The best response is to reject the laptop and choose a refund or replacement rather than accepting only a repair. This fits major failure because it gives consumers stronger choices when a problem is serious."
        },
        {
            id: "c-mcq-127", topic: "consumer-rights",
            q: "A shop asks for evidence before processing a faulty item complaint. What is the BEST next step?",
            options: [
                "cancel the unsolicited contract within the allowed period and keep written records.",
                "read what the warranty promises and remember ACL rights still apply.",
                "show the receipt, emailed invoice or bank record to support the claim.",
                "check product details, keep records and follow care instructions before and after buying."
            ],
            answer: 2,
            explain: "The best response is to show the receipt, emailed invoice or bank record to support the claim. This fits proof of purchase because it makes it easier to show where and when goods were bought."
        },
        {
            id: "c-mcq-128", topic: "consumer-rights",
            q: "A salesperson signs a family up for a door-to-door deal they regret that night. What is the BEST next step?",
            options: [
                "check product details, keep records and follow care instructions before and after buying.",
                "take the earbuds back to the seller with proof of purchase and request an ACL remedy.",
                "remind the retailer of the stated purpose and ask for a remedy because the shoes were not suitable.",
                "cancel the unsolicited contract within the allowed period and keep written records."
            ],
            answer: 3,
            explain: "The best response is to cancel the unsolicited contract within the allowed period and keep written records. This fits cooling-off period because it protects people from pressure selling."
        },
        {
            id: "c-mcq-129", topic: "consumer-rights",
            q: "A manufacturer advertises a two-year replacement promise on a gaming headset. What is the BEST next step?",
            options: [
                "read what the warranty promises and remember ACL rights still apply.",
                "remind the retailer of the stated purpose and ask for a remedy because the shoes were not suitable.",
                "reject the laptop and choose a refund or replacement rather than accepting only a repair.",
                "show the receipt, emailed invoice or bank record to support the claim."
            ],
            answer: 0,
            explain: "The best response is to read what the warranty promises and remember ACL rights still apply. This fits express warranty because it can add extra cover on top of the law."
        },
        {
            id: "c-mcq-130", topic: "consumer-rights",
            q: "A buyer ignores sizing, care and return information before buying online. What is the BEST next step?",
            options: [
                "show the receipt, emailed invoice or bank record to support the claim.",
                "check product details, keep records and follow care instructions before and after buying.",
                "cancel the unsolicited contract within the allowed period and keep written records.",
                "read what the warranty promises and remember ACL rights still apply."
            ],
            answer: 1,
            explain: "The best response is to check product details, keep records and follow care instructions before and after buying. This fits consumer responsibility because it reduces avoidable mistakes and supports fair complaint handling."
        },
        {
            id: "c-mcq-131", topic: "consumer-rights",
            q: "Which option is the BEST example of acceptable quality?",
            options: [
                "A store promising free battery replacement for two years.",
                "Comparing warranties and reading return conditions before ordering a jacket.",
                "Shoes sold as waterproof that actually keep feet dry on a wet walk.",
                "A school backpack that survives everyday use without broken zips."
            ],
            answer: 3,
            explain: "That option is the clearest example of acceptable quality. goods are safe, durable and free from defects for a reasonable time."
        },
        {
            id: "c-mcq-132", topic: "consumer-rights",
            q: "Which option is the BEST example of fit for purpose?",
            options: [
                "Shoes sold as waterproof that actually keep feet dry on a wet walk.",
                "A school backpack that survives everyday use without broken zips.",
                "A phone sold as 128 GB that arrives as 32 GB and shuts down randomly.",
                "Using an emailed receipt to prove when a pair of shoes was bought."
            ],
            answer: 0,
            explain: "That option is the clearest example of fit for purpose. goods must do the job the buyer clearly asked for."
        },

        /* ===== Making informed consumer decisions — expansion ===== */
        {
            id: "c-mcq-133", topic: "consumer-decisions",
            q: "Which statement best describes needs and wants?",
            options: [
                "checking price, quality and features across different sellers before buying.",
                "separating essentials from non-essential extras before spending.",
                "collecting reliable facts from reviews, websites and trusted people before deciding.",
                "weighing the strengths and weaknesses of each option against clear criteria."
            ],
            answer: 1,
            explain: "This describes needs and wants because separating essentials from non-essential extras before spending."
        },
        {
            id: "c-mcq-134", topic: "consumer-decisions",
            q: "Which statement best describes comparison shopping?",
            options: [
                "weighing the strengths and weaknesses of each option against clear criteria.",
                "making an unplanned purchase based on emotion or pressure.",
                "checking price, quality and features across different sellers before buying.",
                "getting the best mix of quality, usefulness and price for your needs."
            ],
            answer: 2,
            explain: "This describes comparison shopping because checking price, quality and features across different sellers before buying."
        },
        {
            id: "c-mcq-135", topic: "consumer-decisions",
            q: "Which statement best describes information search?",
            options: [
                "getting the best mix of quality, usefulness and price for your needs.",
                "reviewing whether a product met expectations after it was bought.",
                "separating essentials from non-essential extras before spending.",
                "collecting reliable facts from reviews, websites and trusted people before deciding."
            ],
            answer: 3,
            explain: "This describes information search because collecting reliable facts from reviews, websites and trusted people before deciding."
        },
        {
            id: "c-mcq-136", topic: "consumer-decisions",
            q: "Which statement best describes evaluating alternatives?",
            options: [
                "weighing the strengths and weaknesses of each option against clear criteria.",
                "separating essentials from non-essential extras before spending.",
                "checking price, quality and features across different sellers before buying.",
                "collecting reliable facts from reviews, websites and trusted people before deciding."
            ],
            answer: 0,
            explain: "This describes evaluating alternatives because weighing the strengths and weaknesses of each option against clear criteria."
        },
        {
            id: "c-mcq-137", topic: "consumer-decisions",
            q: "Which statement best describes impulse buying?",
            options: [
                "collecting reliable facts from reviews, websites and trusted people before deciding.",
                "making an unplanned purchase based on emotion or pressure.",
                "weighing the strengths and weaknesses of each option against clear criteria.",
                "getting the best mix of quality, usefulness and price for your needs."
            ],
            answer: 1,
            explain: "This describes impulse buying because making an unplanned purchase based on emotion or pressure."
        },
        {
            id: "c-mcq-138", topic: "consumer-decisions",
            q: "Which statement best describes value for money?",
            options: [
                "making an unplanned purchase based on emotion or pressure.",
                "reviewing whether a product met expectations after it was bought.",
                "getting the best mix of quality, usefulness and price for your needs.",
                "separating essentials from non-essential extras before spending."
            ],
            answer: 2,
            explain: "This describes value for money because getting the best mix of quality, usefulness and price for your needs."
        },
        {
            id: "c-mcq-139", topic: "consumer-decisions",
            q: "Which statement best describes post-purchase evaluation?",
            options: [
                "separating essentials from non-essential extras before spending.",
                "checking price, quality and features across different sellers before buying.",
                "collecting reliable facts from reviews, websites and trusted people before deciding.",
                "reviewing whether a product met expectations after it was bought."
            ],
            answer: 3,
            explain: "This describes post-purchase evaluation because reviewing whether a product met expectations after it was bought."
        },
        {
            id: "c-mcq-140", topic: "consumer-decisions",
            q: "A student with limited money must choose between lunch for camp and a new phone case. Which concept is MOST relevant?",
            options: [
                "information search",
                "needs and wants",
                "evaluating alternatives",
                "impulse buying"
            ],
            answer: 1,
            explain: "The scenario is about needs and wants because it helps people prioritise limited income."
        },
        {
            id: "c-mcq-141", topic: "consumer-decisions",
            q: "Harper finds the same calculator at three stores with different prices and warranties. Which concept is MOST relevant?",
            options: [
                "impulse buying",
                "value for money",
                "comparison shopping",
                "post-purchase evaluation"
            ],
            answer: 2,
            explain: "The scenario is about comparison shopping because it helps consumers avoid overpaying and find better value."
        },
        {
            id: "c-mcq-142", topic: "consumer-decisions",
            q: "A buyer reads expert reviews and asks friends about a pair of headphones. Which concept is MOST relevant?",
            options: [
                "post-purchase evaluation",
                "needs and wants",
                "comparison shopping",
                "information search"
            ],
            answer: 3,
            explain: "The scenario is about information search because it reduces guesswork and improves decision quality."
        },
        {
            id: "c-mcq-143", topic: "consumer-decisions",
            q: "A family compares two laptops by price, battery life, storage and repair options. Which concept is MOST relevant?",
            options: [
                "evaluating alternatives",
                "comparison shopping",
                "information search",
                "impulse buying"
            ],
            answer: 0,
            explain: "The scenario is about evaluating alternatives because it turns raw information into a reasoned choice."
        },
        {
            id: "c-mcq-144", topic: "consumer-decisions",
            q: "A countdown timer online pushes a student to buy sneakers without checking the budget. Which concept is MOST relevant?",
            options: [
                "evaluating alternatives",
                "impulse buying",
                "value for money",
                "post-purchase evaluation"
            ],
            answer: 1,
            explain: "The scenario is about impulse buying because understanding it helps shoppers avoid regret and overspending."
        },
        {
            id: "c-mcq-145", topic: "consumer-decisions",
            q: "A cheaper bag breaks quickly while a slightly dearer bag lasts for years. Which concept is MOST relevant?",
            options: [
                "post-purchase evaluation",
                "needs and wants",
                "value for money",
                "comparison shopping"
            ],
            answer: 2,
            explain: "The scenario is about value for money because it focuses on long-term value rather than the lowest price only."
        },
        {
            id: "c-mcq-146", topic: "consumer-decisions",
            q: "After buying a keyboard, a student checks if the keys, battery and comfort are good enough. Which concept is MOST relevant?",
            options: [
                "comparison shopping",
                "information search",
                "evaluating alternatives",
                "post-purchase evaluation"
            ],
            answer: 3,
            explain: "The scenario is about post-purchase evaluation because it improves future choices and shows whether follow-up action is needed."
        },
        {
            id: "c-mcq-147", topic: "consumer-decisions",
            q: "Why is needs and wants important in Commerce?",
            options: [
                "it turns raw information into a reasoned choice.",
                "it helps people prioritise limited income.",
                "understanding it helps shoppers avoid regret and overspending.",
                "it focuses on long-term value rather than the lowest price only."
            ],
            answer: 1,
            explain: "This is correct because it helps people prioritise limited income."
        },
        {
            id: "c-mcq-148", topic: "consumer-decisions",
            q: "Why is comparison shopping important in Commerce?",
            options: [
                "it focuses on long-term value rather than the lowest price only.",
                "it improves future choices and shows whether follow-up action is needed.",
                "it helps consumers avoid overpaying and find better value.",
                "it helps people prioritise limited income."
            ],
            answer: 2,
            explain: "This is correct because it helps consumers avoid overpaying and find better value."
        },
        {
            id: "c-mcq-149", topic: "consumer-decisions",
            q: "Why is information search important in Commerce?",
            options: [
                "it helps people prioritise limited income.",
                "it helps consumers avoid overpaying and find better value.",
                "it turns raw information into a reasoned choice.",
                "it reduces guesswork and improves decision quality."
            ],
            answer: 3,
            explain: "This is correct because it reduces guesswork and improves decision quality."
        },
        {
            id: "c-mcq-150", topic: "consumer-decisions",
            q: "Why is evaluating alternatives important in Commerce?",
            options: [
                "it turns raw information into a reasoned choice.",
                "it reduces guesswork and improves decision quality.",
                "understanding it helps shoppers avoid regret and overspending.",
                "it focuses on long-term value rather than the lowest price only."
            ],
            answer: 0,
            explain: "This is correct because it turns raw information into a reasoned choice."
        },
        {
            id: "c-mcq-151", topic: "consumer-decisions",
            q: "Why is impulse buying important in Commerce?",
            options: [
                "it focuses on long-term value rather than the lowest price only.",
                "understanding it helps shoppers avoid regret and overspending.",
                "it improves future choices and shows whether follow-up action is needed.",
                "it helps people prioritise limited income."
            ],
            answer: 1,
            explain: "This is correct because understanding it helps shoppers avoid regret and overspending."
        },
        {
            id: "c-mcq-152", topic: "consumer-decisions",
            q: "Why is value for money important in Commerce?",
            options: [
                "it helps people prioritise limited income.",
                "it helps consumers avoid overpaying and find better value.",
                "it focuses on long-term value rather than the lowest price only.",
                "it reduces guesswork and improves decision quality."
            ],
            answer: 2,
            explain: "This is correct because it focuses on long-term value rather than the lowest price only."
        },
        {
            id: "c-mcq-153", topic: "consumer-decisions",
            q: "Why is post-purchase evaluation important in Commerce?",
            options: [
                "it reduces guesswork and improves decision quality.",
                "it turns raw information into a reasoned choice.",
                "understanding it helps shoppers avoid regret and overspending.",
                "it improves future choices and shows whether follow-up action is needed."
            ],
            answer: 3,
            explain: "This is correct because it improves future choices and shows whether follow-up action is needed."
        },
        {
            id: "c-mcq-154", topic: "consumer-decisions",
            q: "A student with limited money must choose between lunch for camp and a new phone case. What is the BEST next step?",
            options: [
                "pause, wait, and check the budget before clicking buy.",
                "rank the items by importance and pay for the essential need first.",
                "compare durability, features and total use over time before buying.",
                "reflect on performance, keep records and seek a remedy if the item does not meet expectations."
            ],
            answer: 1,
            explain: "The best response is to rank the items by importance and pay for the essential need first. This fits needs and wants because it helps people prioritise limited income."
        },
        {
            id: "c-mcq-155", topic: "consumer-decisions",
            q: "Harper finds the same calculator at three stores with different prices and warranties. What is the BEST next step?",
            options: [
                "reflect on performance, keep records and seek a remedy if the item does not meet expectations.",
                "rank the items by importance and pay for the essential need first.",
                "compare total cost, features and warranty across stores before choosing.",
                "use reliable reviews, product details and trusted advice before purchasing."
            ],
            answer: 2,
            explain: "The best response is to compare total cost, features and warranty across stores before choosing. This fits comparison shopping because it helps consumers avoid overpaying and find better value."
        },
        {
            id: "c-mcq-156", topic: "consumer-decisions",
            q: "A buyer reads expert reviews and asks friends about a pair of headphones. What is the BEST next step?",
            options: [
                "compare total cost, features and warranty across stores before choosing.",
                "list decision criteria and judge each option against them.",
                "pause, wait, and check the budget before clicking buy.",
                "use reliable reviews, product details and trusted advice before purchasing."
            ],
            answer: 3,
            explain: "The best response is to use reliable reviews, product details and trusted advice before purchasing. This fits information search because it reduces guesswork and improves decision quality."
        },
        {
            id: "c-mcq-157", topic: "consumer-decisions",
            q: "A family compares two laptops by price, battery life, storage and repair options. What is the BEST next step?",
            options: [
                "list decision criteria and judge each option against them.",
                "pause, wait, and check the budget before clicking buy.",
                "compare durability, features and total use over time before buying.",
                "reflect on performance, keep records and seek a remedy if the item does not meet expectations."
            ],
            answer: 0,
            explain: "The best response is to list decision criteria and judge each option against them. This fits evaluating alternatives because it turns raw information into a reasoned choice."
        },
        {
            id: "c-mcq-158", topic: "consumer-decisions",
            q: "A countdown timer online pushes a student to buy sneakers without checking the budget. What is the BEST next step?",
            options: [
                "reflect on performance, keep records and seek a remedy if the item does not meet expectations.",
                "pause, wait, and check the budget before clicking buy.",
                "rank the items by importance and pay for the essential need first.",
                "compare total cost, features and warranty across stores before choosing."
            ],
            answer: 1,
            explain: "The best response is to pause, wait, and check the budget before clicking buy. This fits impulse buying because understanding it helps shoppers avoid regret and overspending."
        },
        {
            id: "c-mcq-159", topic: "consumer-decisions",
            q: "A cheaper bag breaks quickly while a slightly dearer bag lasts for years. What is the BEST next step?",
            options: [
                "compare total cost, features and warranty across stores before choosing.",
                "use reliable reviews, product details and trusted advice before purchasing.",
                "compare durability, features and total use over time before buying.",
                "list decision criteria and judge each option against them."
            ],
            answer: 2,
            explain: "The best response is to compare durability, features and total use over time before buying. This fits value for money because it focuses on long-term value rather than the lowest price only."
        },
        {
            id: "c-mcq-160", topic: "consumer-decisions",
            q: "After buying a keyboard, a student checks if the keys, battery and comfort are good enough. What is the BEST next step?",
            options: [
                "list decision criteria and judge each option against them.",
                "pause, wait, and check the budget before clicking buy.",
                "compare durability, features and total use over time before buying.",
                "reflect on performance, keep records and seek a remedy if the item does not meet expectations."
            ],
            answer: 3,
            explain: "The best response is to reflect on performance, keep records and seek a remedy if the item does not meet expectations. This fits post-purchase evaluation because it improves future choices and shows whether follow-up action is needed."
        },
        {
            id: "c-mcq-161", topic: "consumer-decisions",
            q: "Which option is the BEST example of needs and wants?",
            options: [
                "Buying sturdy school shoes that last longer even if they cost slightly more.",
                "Choosing transport money before buying extra gaming accessories.",
                "Deciding a drink bottle was poor value after it leaked and then choosing a better brand next time.",
                "Using two websites and one catalogue before buying a calculator."
            ],
            answer: 1,
            explain: "That option is the clearest example of needs and wants. separating essentials from non-essential extras before spending."
        },
        {
            id: "c-mcq-162", topic: "consumer-decisions",
            q: "Which option is the BEST example of comparison shopping?",
            options: [
                "Choosing transport money before buying extra gaming accessories.",
                "Reading independent reviews before choosing a phone plan.",
                "Using two websites and one catalogue before buying a calculator.",
                "Scoring three phones against price, camera quality and warranty length."
            ],
            answer: 2,
            explain: "That option is the clearest example of comparison shopping. checking price, quality and features across different sellers before buying."
        },

        /* ===== Consumer protection — ACCC, scams, complaints — expansion ===== */
        {
            id: "c-mcq-163", topic: "consumer-protection",
            q: "Which statement best describes ACCC?",
            options: [
                "the state agency that helps consumers and traders resolve problems and understand their rights.",
                "business behaviour that gives a false impression and causes consumers to be misled.",
                "advertising a bargain item with no reasonable supply to attract customers.",
                "the national regulator that enforces competition and consumer law in Australia."
            ],
            answer: 3,
            explain: "This describes ACCC because the national regulator that enforces competition and consumer law in Australia."
        },
        {
            id: "c-mcq-164", topic: "consumer-protection",
            q: "Which statement best describes NSW Fair Trading?",
            options: [
                "the state agency that helps consumers and traders resolve problems and understand their rights.",
                "advertising a bargain item with no reasonable supply to attract customers.",
                "common clues that a message or website is trying to steal personal information.",
                "a step-by-step way to solve a consumer problem using evidence and clear communication."
            ],
            answer: 0,
            explain: "This describes NSW Fair Trading because the state agency that helps consumers and traders resolve problems and understand their rights."
        },
        {
            id: "c-mcq-165", topic: "consumer-protection",
            q: "Which statement best describes misleading or deceptive conduct?",
            options: [
                "a step-by-step way to solve a consumer problem using evidence and clear communication.",
                "business behaviour that gives a false impression and causes consumers to be misled.",
                "a public notice telling consumers to stop using, return or repair a dangerous product.",
                "the national regulator that enforces competition and consumer law in Australia."
            ],
            answer: 1,
            explain: "This describes misleading or deceptive conduct because business behaviour that gives a false impression and causes consumers to be misled."
        },
        {
            id: "c-mcq-166", topic: "consumer-protection",
            q: "Which statement best describes bait advertising?",
            options: [
                "the national regulator that enforces competition and consumer law in Australia.",
                "the state agency that helps consumers and traders resolve problems and understand their rights.",
                "advertising a bargain item with no reasonable supply to attract customers.",
                "business behaviour that gives a false impression and causes consumers to be misled."
            ],
            answer: 2,
            explain: "This describes bait advertising because advertising a bargain item with no reasonable supply to attract customers."
        },
        {
            id: "c-mcq-167", topic: "consumer-protection",
            q: "Which statement best describes phishing scam warning signs?",
            options: [
                "business behaviour that gives a false impression and causes consumers to be misled.",
                "advertising a bargain item with no reasonable supply to attract customers.",
                "a step-by-step way to solve a consumer problem using evidence and clear communication.",
                "common clues that a message or website is trying to steal personal information."
            ],
            answer: 3,
            explain: "This describes phishing scam warning signs because common clues that a message or website is trying to steal personal information."
        },
        {
            id: "c-mcq-168", topic: "consumer-protection",
            q: "Which statement best describes complaint process?",
            options: [
                "a step-by-step way to solve a consumer problem using evidence and clear communication.",
                "common clues that a message or website is trying to steal personal information.",
                "a public notice telling consumers to stop using, return or repair a dangerous product.",
                "the national regulator that enforces competition and consumer law in Australia."
            ],
            answer: 0,
            explain: "This describes complaint process because a step-by-step way to solve a consumer problem using evidence and clear communication."
        },
        {
            id: "c-mcq-169", topic: "consumer-protection",
            q: "Which statement best describes product safety recall?",
            options: [
                "the national regulator that enforces competition and consumer law in Australia.",
                "a public notice telling consumers to stop using, return or repair a dangerous product.",
                "the state agency that helps consumers and traders resolve problems and understand their rights.",
                "business behaviour that gives a false impression and causes consumers to be misled."
            ],
            answer: 1,
            explain: "This describes product safety recall because a public notice telling consumers to stop using, return or repair a dangerous product."
        },
        {
            id: "c-mcq-170", topic: "consumer-protection",
            q: "A business runs misleading ads across Australia and many consumers complain. Which concept is MOST relevant?",
            options: [
                "misleading or deceptive conduct",
                "bait advertising",
                "phishing scam warning signs",
                "ACCC"
            ],
            answer: 3,
            explain: "The scenario is about ACCC because it can investigate harmful business conduct and educate the public."
        },
        {
            id: "c-mcq-171", topic: "consumer-protection",
            q: "A NSW shopper cannot solve a refund dispute directly with a retailer. Which concept is MOST relevant?",
            options: [
                "NSW Fair Trading",
                "phishing scam warning signs",
                "complaint process",
                "product safety recall"
            ],
            answer: 0,
            explain: "The scenario is about NSW Fair Trading because it gives people a local complaint and information pathway."
        },
        {
            id: "c-mcq-172", topic: "consumer-protection",
            q: "A seller claims a fake gold necklace is real solid gold. Which concept is MOST relevant?",
            options: [
                "product safety recall",
                "misleading or deceptive conduct",
                "ACCC",
                "NSW Fair Trading"
            ],
            answer: 1,
            explain: "The scenario is about misleading or deceptive conduct because it protects buyers from dishonest claims."
        },
        {
            id: "c-mcq-173", topic: "consumer-protection",
            q: "A store heavily promotes a low-priced console but had almost none available. Which concept is MOST relevant?",
            options: [
                "NSW Fair Trading",
                "misleading or deceptive conduct",
                "bait advertising",
                "phishing scam warning signs"
            ],
            answer: 2,
            explain: "The scenario is about bait advertising because it stops businesses luring people in unfairly."
        },
        {
            id: "c-mcq-174", topic: "consumer-protection",
            q: "A text says a parcel is delayed and asks the user to click a strange link and enter bank details. Which concept is MOST relevant?",
            options: [
                "bait advertising",
                "complaint process",
                "product safety recall",
                "phishing scam warning signs"
            ],
            answer: 3,
            explain: "The scenario is about phishing scam warning signs because it helps people spot scams before they lose money or data."
        },
        {
            id: "c-mcq-175", topic: "consumer-protection",
            q: "A buyer has a faulty item and wants a fair outcome from the seller. Which concept is MOST relevant?",
            options: [
                "complaint process",
                "product safety recall",
                "ACCC",
                "NSW Fair Trading"
            ],
            answer: 0,
            explain: "The scenario is about complaint process because it improves the chance of resolving issues quickly and fairly."
        },
        {
            id: "c-mcq-176", topic: "consumer-protection",
            q: "A charger is recalled because it can overheat and start a fire. Which concept is MOST relevant?",
            options: [
                "NSW Fair Trading",
                "product safety recall",
                "misleading or deceptive conduct",
                "bait advertising"
            ],
            answer: 1,
            explain: "The scenario is about product safety recall because it reduces risk of injury or damage."
        },
        {
            id: "c-mcq-177", topic: "consumer-protection",
            q: "Why is ACCC important in Commerce?",
            options: [
                "it stops businesses luring people in unfairly.",
                "it helps people spot scams before they lose money or data.",
                "it improves the chance of resolving issues quickly and fairly.",
                "it can investigate harmful business conduct and educate the public."
            ],
            answer: 3,
            explain: "This is correct because it can investigate harmful business conduct and educate the public."
        },
        {
            id: "c-mcq-178", topic: "consumer-protection",
            q: "Why is NSW Fair Trading important in Commerce?",
            options: [
                "it gives people a local complaint and information pathway.",
                "it improves the chance of resolving issues quickly and fairly.",
                "it reduces risk of injury or damage.",
                "it can investigate harmful business conduct and educate the public."
            ],
            answer: 0,
            explain: "This is correct because it gives people a local complaint and information pathway."
        },
        {
            id: "c-mcq-179", topic: "consumer-protection",
            q: "Why is misleading or deceptive conduct important in Commerce?",
            options: [
                "it can investigate harmful business conduct and educate the public.",
                "it protects buyers from dishonest claims.",
                "it gives people a local complaint and information pathway.",
                "it stops businesses luring people in unfairly."
            ],
            answer: 1,
            explain: "This is correct because it protects buyers from dishonest claims."
        },
        {
            id: "c-mcq-180", topic: "consumer-protection",
            q: "Why is bait advertising important in Commerce?",
            options: [
                "it protects buyers from dishonest claims.",
                "it helps people spot scams before they lose money or data.",
                "it stops businesses luring people in unfairly.",
                "it improves the chance of resolving issues quickly and fairly."
            ],
            answer: 2,
            explain: "This is correct because it stops businesses luring people in unfairly."
        },
        {
            id: "c-mcq-181", topic: "consumer-protection",
            q: "Why is phishing scam warning signs important in Commerce?",
            options: [
                "it improves the chance of resolving issues quickly and fairly.",
                "it reduces risk of injury or damage.",
                "it can investigate harmful business conduct and educate the public.",
                "it helps people spot scams before they lose money or data."
            ],
            answer: 3,
            explain: "This is correct because it helps people spot scams before they lose money or data."
        },
        {
            id: "c-mcq-182", topic: "consumer-protection",
            q: "Why is complaint process important in Commerce?",
            options: [
                "it improves the chance of resolving issues quickly and fairly.",
                "it can investigate harmful business conduct and educate the public.",
                "it gives people a local complaint and information pathway.",
                "it protects buyers from dishonest claims."
            ],
            answer: 0,
            explain: "This is correct because it improves the chance of resolving issues quickly and fairly."
        },
        {
            id: "c-mcq-183", topic: "consumer-protection",
            q: "Why is product safety recall important in Commerce?",
            options: [
                "it protects buyers from dishonest claims.",
                "it reduces risk of injury or damage.",
                "it stops businesses luring people in unfairly.",
                "it helps people spot scams before they lose money or data."
            ],
            answer: 1,
            explain: "This is correct because it reduces risk of injury or damage."
        },
        {
            id: "c-mcq-184", topic: "consumer-protection",
            q: "A business runs misleading ads across Australia and many consumers complain. What is the BEST next step?",
            options: [
                "do not click the link, verify through the real website and report the message.",
                "contact the business first, state the remedy sought, keep records, then escalate if needed.",
                "stop using the item, follow recall instructions and arrange repair, refund or replacement.",
                "check ACCC guidance or report the issue through the correct channel."
            ],
            answer: 3,
            explain: "The best response is to check ACCC guidance or report the issue through the correct channel. This fits ACCC because it can investigate harmful business conduct and educate the public."
        },
        {
            id: "c-mcq-185", topic: "consumer-protection",
            q: "A NSW shopper cannot solve a refund dispute directly with a retailer. What is the BEST next step?",
            options: [
                "contact NSW Fair Trading with clear evidence of the dispute.",
                "stop using the item, follow recall instructions and arrange repair, refund or replacement.",
                "check ACCC guidance or report the issue through the correct channel.",
                "keep screenshots of the claim and complain using the evidence."
            ],
            answer: 0,
            explain: "The best response is to contact NSW Fair Trading with clear evidence of the dispute. This fits NSW Fair Trading because it gives people a local complaint and information pathway."
        },
        {
            id: "c-mcq-186", topic: "consumer-protection",
            q: "A seller claims a fake gold necklace is real solid gold. What is the BEST next step?",
            options: [
                "contact NSW Fair Trading with clear evidence of the dispute.",
                "keep screenshots of the claim and complain using the evidence.",
                "record the ad, ask questions about stock levels and complain if the deal was unrealistic.",
                "do not click the link, verify through the real website and report the message."
            ],
            answer: 1,
            explain: "The best response is to keep screenshots of the claim and complain using the evidence. This fits misleading or deceptive conduct because it protects buyers from dishonest claims."
        },
        {
            id: "c-mcq-187", topic: "consumer-protection",
            q: "A store heavily promotes a low-priced console but had almost none available. What is the BEST next step?",
            options: [
                "do not click the link, verify through the real website and report the message.",
                "contact the business first, state the remedy sought, keep records, then escalate if needed.",
                "record the ad, ask questions about stock levels and complain if the deal was unrealistic.",
                "stop using the item, follow recall instructions and arrange repair, refund or replacement."
            ],
            answer: 2,
            explain: "The best response is to record the ad, ask questions about stock levels and complain if the deal was unrealistic. This fits bait advertising because it stops businesses luring people in unfairly."
        },
        {
            id: "c-mcq-188", topic: "consumer-protection",
            q: "A text says a parcel is delayed and asks the user to click a strange link and enter bank details. What is the BEST next step?",
            options: [
                "stop using the item, follow recall instructions and arrange repair, refund or replacement.",
                "check ACCC guidance or report the issue through the correct channel.",
                "contact NSW Fair Trading with clear evidence of the dispute.",
                "do not click the link, verify through the real website and report the message."
            ],
            answer: 3,
            explain: "The best response is to do not click the link, verify through the real website and report the message. This fits phishing scam warning signs because it helps people spot scams before they lose money or data."
        },
        {
            id: "c-mcq-189", topic: "consumer-protection",
            q: "A buyer has a faulty item and wants a fair outcome from the seller. What is the BEST next step?",
            options: [
                "contact the business first, state the remedy sought, keep records, then escalate if needed.",
                "contact NSW Fair Trading with clear evidence of the dispute.",
                "keep screenshots of the claim and complain using the evidence.",
                "record the ad, ask questions about stock levels and complain if the deal was unrealistic."
            ],
            answer: 0,
            explain: "The best response is to contact the business first, state the remedy sought, keep records, then escalate if needed. This fits complaint process because it improves the chance of resolving issues quickly and fairly."
        },
        {
            id: "c-mcq-190", topic: "consumer-protection",
            q: "A charger is recalled because it can overheat and start a fire. What is the BEST next step?",
            options: [
                "record the ad, ask questions about stock levels and complain if the deal was unrealistic.",
                "stop using the item, follow recall instructions and arrange repair, refund or replacement.",
                "do not click the link, verify through the real website and report the message.",
                "contact the business first, state the remedy sought, keep records, then escalate if needed."
            ],
            answer: 1,
            explain: "The best response is to stop using the item, follow recall instructions and arrange repair, refund or replacement. This fits product safety recall because it reduces risk of injury or damage."
        },
        {
            id: "c-mcq-191", topic: "consumer-protection",
            q: "Which option is the BEST example of ACCC?",
            options: [
                "Emailing a store with a receipt and photos before contacting Fair Trading.",
                "Returning a recalled power bank after seeing the notice on the ACCC website.",
                "Lodging a complaint with NSW Fair Trading after a store ignores repeated messages.",
                "Reading ACCC advice about a scam or misleading promotion."
            ],
            answer: 3,
            explain: "That option is the clearest example of ACCC. the national regulator that enforces competition and consumer law in Australia."
        },
        {
            id: "c-mcq-192", topic: "consumer-protection",
            q: "Which option is the BEST example of NSW Fair Trading?",
            options: [
                "Lodging a complaint with NSW Fair Trading after a store ignores repeated messages.",
                "Reading ACCC advice about a scam or misleading promotion.",
                "Advertising a product as environmentally friendly without proof.",
                "An online ad offering a very low sale price but the item is instantly unavailable."
            ],
            answer: 0,
            explain: "That option is the clearest example of NSW Fair Trading. the state agency that helps consumers and traders resolve problems and understand their rights."
        },
        {
            id: "c-mcq-193", topic: "consumer-protection",
            q: "Which option is the BEST example of misleading or deceptive conduct?",
            options: [
                "An online ad offering a very low sale price but the item is instantly unavailable.",
                "Advertising a product as environmentally friendly without proof.",
                "Checking the official courier app instead of tapping a suspicious SMS link.",
                "Emailing a store with a receipt and photos before contacting Fair Trading."
            ],
            answer: 1,
            explain: "That option is the clearest example of misleading or deceptive conduct. business behaviour that gives a false impression and causes consumers to be misled."
        },

        /* ===== Personal finance & budgeting — expansion ===== */
        {
            id: "c-mcq-194", topic: "personal-finance",
            q: "Which statement best describes income?",
            options: [
                "regular costs that stay similar each period.",
                "costs that change depending on use or choices.",
                "money received from work, gifts, allowances or other sources.",
                "a plan that matches expected income with planned spending and saving."
            ],
            answer: 2,
            explain: "This describes income because money received from work, gifts, allowances or other sources."
        },
        {
            id: "c-mcq-195", topic: "personal-finance",
            q: "Which statement best describes fixed expenses?",
            options: [
                "a plan that matches expected income with planned spending and saving.",
                "a goal that is specific, measurable, achievable, relevant and time-bound.",
                "money set aside for unexpected costs rather than everyday spending.",
                "regular costs that stay similar each period."
            ],
            answer: 3,
            explain: "This describes fixed expenses because regular costs that stay similar each period."
        },
        {
            id: "c-mcq-196", topic: "personal-finance",
            q: "Which statement best describes variable expenses?",
            options: [
                "costs that change depending on use or choices.",
                "money set aside for unexpected costs rather than everyday spending.",
                "the next best thing given up when a choice is made.",
                "money received from work, gifts, allowances or other sources."
            ],
            answer: 0,
            explain: "This describes variable expenses because costs that change depending on use or choices."
        },
        {
            id: "c-mcq-197", topic: "personal-finance",
            q: "Which statement best describes budget?",
            options: [
                "money received from work, gifts, allowances or other sources.",
                "a plan that matches expected income with planned spending and saving.",
                "regular costs that stay similar each period.",
                "costs that change depending on use or choices."
            ],
            answer: 1,
            explain: "This describes budget because a plan that matches expected income with planned spending and saving."
        },
        {
            id: "c-mcq-198", topic: "personal-finance",
            q: "Which statement best describes SMART financial goal?",
            options: [
                "costs that change depending on use or choices.",
                "a plan that matches expected income with planned spending and saving.",
                "a goal that is specific, measurable, achievable, relevant and time-bound.",
                "money set aside for unexpected costs rather than everyday spending."
            ],
            answer: 2,
            explain: "This describes SMART financial goal because a goal that is specific, measurable, achievable, relevant and time-bound."
        },
        {
            id: "c-mcq-199", topic: "personal-finance",
            q: "Which statement best describes emergency fund?",
            options: [
                "a goal that is specific, measurable, achievable, relevant and time-bound.",
                "the next best thing given up when a choice is made.",
                "money received from work, gifts, allowances or other sources.",
                "money set aside for unexpected costs rather than everyday spending."
            ],
            answer: 3,
            explain: "This describes emergency fund because money set aside for unexpected costs rather than everyday spending."
        },
        {
            id: "c-mcq-200", topic: "personal-finance",
            q: "Which statement best describes opportunity cost?",
            options: [
                "the next best thing given up when a choice is made.",
                "money received from work, gifts, allowances or other sources.",
                "regular costs that stay similar each period.",
                "costs that change depending on use or choices."
            ],
            answer: 0,
            explain: "This describes opportunity cost because the next best thing given up when a choice is made."
        },
        {
            id: "c-mcq-201", topic: "personal-finance",
            q: "A student receives pocket money, birthday money and pay from weekend work. Which concept is MOST relevant?",
            options: [
                "variable expenses",
                "budget",
                "income",
                "SMART financial goal"
            ],
            answer: 2,
            explain: "The scenario is about income because it shows how much money is available before spending decisions are made."
        },
        {
            id: "c-mcq-202", topic: "personal-finance",
            q: "A student pays the same phone plan and bus pass amount each month. Which concept is MOST relevant?",
            options: [
                "SMART financial goal",
                "emergency fund",
                "opportunity cost",
                "fixed expenses"
            ],
            answer: 3,
            explain: "The scenario is about fixed expenses because they make budgeting easier because they are predictable."
        },
        {
            id: "c-mcq-203", topic: "personal-finance",
            q: "Snack spending changes each week depending on sport and outings. Which concept is MOST relevant?",
            options: [
                "variable expenses",
                "opportunity cost",
                "income",
                "fixed expenses"
            ],
            answer: 0,
            explain: "The scenario is about variable expenses because tracking them shows where flexible spending can be reduced."
        },
        {
            id: "c-mcq-204", topic: "personal-finance",
            q: "A Year 9 student wants to afford camp, transport and weekend activities. Which concept is MOST relevant?",
            options: [
                "fixed expenses",
                "budget",
                "variable expenses",
                "SMART financial goal"
            ],
            answer: 1,
            explain: "The scenario is about budget because it helps people stay in control of their money."
        },
        {
            id: "c-mcq-205", topic: "personal-finance",
            q: "Harper wants to save for a bike by the end of term. Which concept is MOST relevant?",
            options: [
                "budget",
                "emergency fund",
                "SMART financial goal",
                "opportunity cost"
            ],
            answer: 2,
            explain: "The scenario is about SMART financial goal because it turns a vague idea into a trackable saving plan."
        },
        {
            id: "c-mcq-206", topic: "personal-finance",
            q: "A student suddenly needs to replace a lost Opal card or school item. Which concept is MOST relevant?",
            options: [
                "opportunity cost",
                "income",
                "fixed expenses",
                "emergency fund"
            ],
            answer: 3,
            explain: "The scenario is about emergency fund because it reduces stress and prevents panic borrowing."
        },
        {
            id: "c-mcq-207", topic: "personal-finance",
            q: "Buying concert tickets means less money is left for a school camp deposit. Which concept is MOST relevant?",
            options: [
                "opportunity cost",
                "fixed expenses",
                "variable expenses",
                "budget"
            ],
            answer: 0,
            explain: "The scenario is about opportunity cost because it helps people see the trade-offs behind spending decisions."
        },
        {
            id: "c-mcq-208", topic: "personal-finance",
            q: "Why is income important in Commerce?",
            options: [
                "it helps people stay in control of their money.",
                "it turns a vague idea into a trackable saving plan.",
                "it shows how much money is available before spending decisions are made.",
                "it reduces stress and prevents panic borrowing."
            ],
            answer: 2,
            explain: "This is correct because it shows how much money is available before spending decisions are made."
        },
        {
            id: "c-mcq-209", topic: "personal-finance",
            q: "Why is fixed expenses important in Commerce?",
            options: [
                "it reduces stress and prevents panic borrowing.",
                "it helps people see the trade-offs behind spending decisions.",
                "it shows how much money is available before spending decisions are made.",
                "they make budgeting easier because they are predictable."
            ],
            answer: 3,
            explain: "This is correct because they make budgeting easier because they are predictable."
        },
        {
            id: "c-mcq-210", topic: "personal-finance",
            q: "Why is variable expenses important in Commerce?",
            options: [
                "tracking them shows where flexible spending can be reduced.",
                "it shows how much money is available before spending decisions are made.",
                "they make budgeting easier because they are predictable.",
                "it helps people stay in control of their money."
            ],
            answer: 0,
            explain: "This is correct because tracking them shows where flexible spending can be reduced."
        },
        {
            id: "c-mcq-211", topic: "personal-finance",
            q: "Why is budget important in Commerce?",
            options: [
                "tracking them shows where flexible spending can be reduced.",
                "it helps people stay in control of their money.",
                "it turns a vague idea into a trackable saving plan.",
                "it reduces stress and prevents panic borrowing."
            ],
            answer: 1,
            explain: "This is correct because it helps people stay in control of their money."
        },
        {
            id: "c-mcq-212", topic: "personal-finance",
            q: "Why is SMART financial goal important in Commerce?",
            options: [
                "it reduces stress and prevents panic borrowing.",
                "it helps people see the trade-offs behind spending decisions.",
                "it turns a vague idea into a trackable saving plan.",
                "it shows how much money is available before spending decisions are made."
            ],
            answer: 2,
            explain: "This is correct because it turns a vague idea into a trackable saving plan."
        },
        {
            id: "c-mcq-213", topic: "personal-finance",
            q: "Why is emergency fund important in Commerce?",
            options: [
                "it shows how much money is available before spending decisions are made.",
                "they make budgeting easier because they are predictable.",
                "tracking them shows where flexible spending can be reduced.",
                "it reduces stress and prevents panic borrowing."
            ],
            answer: 3,
            explain: "This is correct because it reduces stress and prevents panic borrowing."
        },
        {
            id: "c-mcq-214", topic: "personal-finance",
            q: "Why is opportunity cost important in Commerce?",
            options: [
                "it helps people see the trade-offs behind spending decisions.",
                "tracking them shows where flexible spending can be reduced.",
                "it helps people stay in control of their money.",
                "it turns a vague idea into a trackable saving plan."
            ],
            answer: 0,
            explain: "This is correct because it helps people see the trade-offs behind spending decisions."
        },
        {
            id: "c-mcq-215", topic: "personal-finance",
            q: "A student receives pocket money, birthday money and pay from weekend work. What is the BEST next step?",
            options: [
                "set the amount, deadline and weekly target, then review progress.",
                "save a small amount regularly in a separate account for surprises.",
                "record each source of income before planning a budget.",
                "compare what is gained with what must be given up before spending."
            ],
            answer: 2,
            explain: "The best response is to record each source of income before planning a budget. This fits income because it shows how much money is available before spending decisions are made."
        },
        {
            id: "c-mcq-216", topic: "personal-finance",
            q: "A student pays the same phone plan and bus pass amount each month. What is the BEST next step?",
            options: [
                "compare what is gained with what must be given up before spending.",
                "record each source of income before planning a budget.",
                "monitor the pattern and set a spending limit for the category.",
                "list them first in the budget because they must usually be paid on time."
            ],
            answer: 3,
            explain: "The best response is to list them first in the budget because they must usually be paid on time. This fits fixed expenses because they make budgeting easier because they are predictable."
        },
        {
            id: "c-mcq-217", topic: "personal-finance",
            q: "Snack spending changes each week depending on sport and outings. What is the BEST next step?",
            options: [
                "monitor the pattern and set a spending limit for the category.",
                "list them first in the budget because they must usually be paid on time.",
                "write expected income and expenses, then adjust spending to match goals.",
                "set the amount, deadline and weekly target, then review progress."
            ],
            answer: 0,
            explain: "The best response is to monitor the pattern and set a spending limit for the category. This fits variable expenses because tracking them shows where flexible spending can be reduced."
        },
        {
            id: "c-mcq-218", topic: "personal-finance",
            q: "A Year 9 student wants to afford camp, transport and weekend activities. What is the BEST next step?",
            options: [
                "set the amount, deadline and weekly target, then review progress.",
                "write expected income and expenses, then adjust spending to match goals.",
                "save a small amount regularly in a separate account for surprises.",
                "compare what is gained with what must be given up before spending."
            ],
            answer: 1,
            explain: "The best response is to write expected income and expenses, then adjust spending to match goals. This fits budget because it helps people stay in control of their money."
        },
        {
            id: "c-mcq-219", topic: "personal-finance",
            q: "Harper wants to save for a bike by the end of term. What is the BEST next step?",
            options: [
                "compare what is gained with what must be given up before spending.",
                "record each source of income before planning a budget.",
                "set the amount, deadline and weekly target, then review progress.",
                "list them first in the budget because they must usually be paid on time."
            ],
            answer: 2,
            explain: "The best response is to set the amount, deadline and weekly target, then review progress. This fits SMART financial goal because it turns a vague idea into a trackable saving plan."
        },
        {
            id: "c-mcq-220", topic: "personal-finance",
            q: "A student suddenly needs to replace a lost Opal card or school item. What is the BEST next step?",
            options: [
                "list them first in the budget because they must usually be paid on time.",
                "monitor the pattern and set a spending limit for the category.",
                "write expected income and expenses, then adjust spending to match goals.",
                "save a small amount regularly in a separate account for surprises."
            ],
            answer: 3,
            explain: "The best response is to save a small amount regularly in a separate account for surprises. This fits emergency fund because it reduces stress and prevents panic borrowing."
        },
        {
            id: "c-mcq-221", topic: "personal-finance",
            q: "Buying concert tickets means less money is left for a school camp deposit. What is the BEST next step?",
            options: [
                "compare what is gained with what must be given up before spending.",
                "write expected income and expenses, then adjust spending to match goals.",
                "set the amount, deadline and weekly target, then review progress.",
                "save a small amount regularly in a separate account for surprises."
            ],
            answer: 0,
            explain: "The best response is to compare what is gained with what must be given up before spending. This fits opportunity cost because it helps people see the trade-offs behind spending decisions."
        },
        {
            id: "c-mcq-222", topic: "personal-finance",
            q: "Which option is the BEST example of income?",
            options: [
                "Keeping some savings aside for replacing broken school headphones.",
                "Choosing to save for a laptop instead of buying many smaller treats.",
                "Adding casual job pay and pocket money to calculate weekly income.",
                "A monthly streaming subscription that costs the same amount each cycle."
            ],
            answer: 2,
            explain: "That option is the clearest example of income. money received from work, gifts, allowances or other sources."
        },
        {
            id: "c-mcq-223", topic: "personal-finance",
            q: "Which option is the BEST example of fixed expenses?",
            options: [
                "Adding casual job pay and pocket money to calculate weekly income.",
                "Different weekly amounts spent on canteen food.",
                "A weekly plan that sets aside money for savings before entertainment.",
                "A monthly streaming subscription that costs the same amount each cycle."
            ],
            answer: 3,
            explain: "That option is the clearest example of fixed expenses. regular costs that stay similar each period."
        },

        /* ===== Saving, banking & investing — expansion ===== */
        {
            id: "c-mcq-224", topic: "saving-investing",
            q: "Which statement best describes high-interest savings account?",
            options: [
                "a bank account that pays interest while keeping money relatively safe and easy to access.",
                "a savings product that locks money away for a set period in return for a fixed interest rate.",
                "small units of ownership in a company that may rise or fall in value.",
                "spreading money across different investments instead of putting it all in one place."
            ],
            answer: 0,
            explain: "This describes high-interest savings account because a bank account that pays interest while keeping money relatively safe and easy to access."
        },
        {
            id: "c-mcq-225", topic: "saving-investing",
            q: "Which statement best describes term deposit?",
            options: [
                "spreading money across different investments instead of putting it all in one place.",
                "a savings product that locks money away for a set period in return for a fixed interest rate.",
                "the idea that higher possible returns usually come with higher chances of loss.",
                "interest earned on both the original amount and the interest already added."
            ],
            answer: 1,
            explain: "This describes term deposit because a savings product that locks money away for a set period in return for a fixed interest rate."
        },
        {
            id: "c-mcq-226", topic: "saving-investing",
            q: "Which statement best describes shares?",
            options: [
                "interest earned on both the original amount and the interest already added.",
                "how quickly an asset can be turned into cash without losing much value.",
                "small units of ownership in a company that may rise or fall in value.",
                "a bank account that pays interest while keeping money relatively safe and easy to access."
            ],
            answer: 2,
            explain: "This describes shares because small units of ownership in a company that may rise or fall in value."
        },
        {
            id: "c-mcq-227", topic: "saving-investing",
            q: "Which statement best describes diversification?",
            options: [
                "a bank account that pays interest while keeping money relatively safe and easy to access.",
                "a savings product that locks money away for a set period in return for a fixed interest rate.",
                "small units of ownership in a company that may rise or fall in value.",
                "spreading money across different investments instead of putting it all in one place."
            ],
            answer: 3,
            explain: "This describes diversification because spreading money across different investments instead of putting it all in one place."
        },
        {
            id: "c-mcq-228", topic: "saving-investing",
            q: "Which statement best describes risk and return?",
            options: [
                "the idea that higher possible returns usually come with higher chances of loss.",
                "small units of ownership in a company that may rise or fall in value.",
                "spreading money across different investments instead of putting it all in one place.",
                "interest earned on both the original amount and the interest already added."
            ],
            answer: 0,
            explain: "This describes risk and return because the idea that higher possible returns usually come with higher chances of loss."
        },
        {
            id: "c-mcq-229", topic: "saving-investing",
            q: "Which statement best describes compound interest?",
            options: [
                "the idea that higher possible returns usually come with higher chances of loss.",
                "interest earned on both the original amount and the interest already added.",
                "how quickly an asset can be turned into cash without losing much value.",
                "a bank account that pays interest while keeping money relatively safe and easy to access."
            ],
            answer: 1,
            explain: "This describes compound interest because interest earned on both the original amount and the interest already added."
        },
        {
            id: "c-mcq-230", topic: "saving-investing",
            q: "Which statement best describes liquidity?",
            options: [
                "a bank account that pays interest while keeping money relatively safe and easy to access.",
                "a savings product that locks money away for a set period in return for a fixed interest rate.",
                "how quickly an asset can be turned into cash without losing much value.",
                "small units of ownership in a company that may rise or fall in value."
            ],
            answer: 2,
            explain: "This describes liquidity because how quickly an asset can be turned into cash without losing much value."
        },
        {
            id: "c-mcq-231", topic: "saving-investing",
            q: "A student wants a low-risk place to keep money for a bike next year. Which concept is MOST relevant?",
            options: [
                "high-interest savings account",
                "shares",
                "diversification",
                "risk and return"
            ],
            answer: 0,
            explain: "The scenario is about high-interest savings account because it helps savings grow while keeping funds available."
        },
        {
            id: "c-mcq-232", topic: "saving-investing",
            q: "A family can leave money untouched for twelve months and wants certainty. Which concept is MOST relevant?",
            options: [
                "risk and return",
                "term deposit",
                "compound interest",
                "liquidity"
            ],
            answer: 1,
            explain: "The scenario is about term deposit because it offers predictable returns with low risk."
        },
        {
            id: "c-mcq-233", topic: "saving-investing",
            q: "A student learns that buying shares can earn dividends but prices can also drop. Which concept is MOST relevant?",
            options: [
                "liquidity",
                "high-interest savings account",
                "shares",
                "term deposit"
            ],
            answer: 2,
            explain: "The scenario is about shares because they can offer higher long-term returns than simple savings, with higher risk."
        },
        {
            id: "c-mcq-234", topic: "saving-investing",
            q: "A saver is deciding whether to invest all money in one company or spread it out. Which concept is MOST relevant?",
            options: [
                "term deposit",
                "shares",
                "risk and return",
                "diversification"
            ],
            answer: 3,
            explain: "The scenario is about diversification because it reduces the impact if one investment performs badly."
        },
        {
            id: "c-mcq-235", topic: "saving-investing",
            q: "A friend promises a very high return from a risky online investment. Which concept is MOST relevant?",
            options: [
                "risk and return",
                "diversification",
                "compound interest",
                "liquidity"
            ],
            answer: 0,
            explain: "The scenario is about risk and return because it helps investors compare choices realistically."
        },
        {
            id: "c-mcq-236", topic: "saving-investing",
            q: "Savings grow faster over time because interest keeps earning more interest. Which concept is MOST relevant?",
            options: [
                "liquidity",
                "compound interest",
                "high-interest savings account",
                "term deposit"
            ],
            answer: 1,
            explain: "The scenario is about compound interest because it rewards people who start saving early and leave money invested."
        },
        {
            id: "c-mcq-237", topic: "saving-investing",
            q: "A student may need quick access to money for camp fees next month. Which concept is MOST relevant?",
            options: [
                "term deposit",
                "shares",
                "liquidity",
                "diversification"
            ],
            answer: 2,
            explain: "The scenario is about liquidity because it helps savers choose products that match when the money will be needed."
        },
        {
            id: "c-mcq-238", topic: "saving-investing",
            q: "Why is high-interest savings account important in Commerce?",
            options: [
                "it helps savings grow while keeping funds available.",
                "it reduces the impact if one investment performs badly.",
                "it helps investors compare choices realistically.",
                "it rewards people who start saving early and leave money invested."
            ],
            answer: 0,
            explain: "This is correct because it helps savings grow while keeping funds available."
        },
        {
            id: "c-mcq-239", topic: "saving-investing",
            q: "Why is term deposit important in Commerce?",
            options: [
                "it rewards people who start saving early and leave money invested.",
                "it offers predictable returns with low risk.",
                "it helps savers choose products that match when the money will be needed.",
                "it helps savings grow while keeping funds available."
            ],
            answer: 1,
            explain: "This is correct because it offers predictable returns with low risk."
        },
        {
            id: "c-mcq-240", topic: "saving-investing",
            q: "Why is shares important in Commerce?",
            options: [
                "it helps savings grow while keeping funds available.",
                "it offers predictable returns with low risk.",
                "they can offer higher long-term returns than simple savings, with higher risk.",
                "it reduces the impact if one investment performs badly."
            ],
            answer: 2,
            explain: "This is correct because they can offer higher long-term returns than simple savings, with higher risk."
        },
        {
            id: "c-mcq-241", topic: "saving-investing",
            q: "Why is diversification important in Commerce?",
            options: [
                "they can offer higher long-term returns than simple savings, with higher risk.",
                "it helps investors compare choices realistically.",
                "it rewards people who start saving early and leave money invested.",
                "it reduces the impact if one investment performs badly."
            ],
            answer: 3,
            explain: "This is correct because it reduces the impact if one investment performs badly."
        },
        {
            id: "c-mcq-242", topic: "saving-investing",
            q: "Why is risk and return important in Commerce?",
            options: [
                "it helps investors compare choices realistically.",
                "it rewards people who start saving early and leave money invested.",
                "it helps savers choose products that match when the money will be needed.",
                "it helps savings grow while keeping funds available."
            ],
            answer: 0,
            explain: "This is correct because it helps investors compare choices realistically."
        },
        {
            id: "c-mcq-243", topic: "saving-investing",
            q: "Why is compound interest important in Commerce?",
            options: [
                "it helps savings grow while keeping funds available.",
                "it rewards people who start saving early and leave money invested.",
                "it offers predictable returns with low risk.",
                "they can offer higher long-term returns than simple savings, with higher risk."
            ],
            answer: 1,
            explain: "This is correct because it rewards people who start saving early and leave money invested."
        },
        {
            id: "c-mcq-244", topic: "saving-investing",
            q: "Why is liquidity important in Commerce?",
            options: [
                "they can offer higher long-term returns than simple savings, with higher risk.",
                "it reduces the impact if one investment performs badly.",
                "it helps savers choose products that match when the money will be needed.",
                "it helps investors compare choices realistically."
            ],
            answer: 2,
            explain: "This is correct because it helps savers choose products that match when the money will be needed."
        },
        {
            id: "c-mcq-245", topic: "saving-investing",
            q: "A student wants a low-risk place to keep money for a bike next year. What is the BEST next step?",
            options: [
                "compare interest rates, bonus conditions and fees before opening the account.",
                "match the level of risk to the goal, timeline and ability to absorb losses.",
                "save regularly and leave the money invested long enough for growth to build.",
                "keep short-term money in liquid options rather than locking it away too long."
            ],
            answer: 0,
            explain: "The best response is to compare interest rates, bonus conditions and fees before opening the account. This fits high-interest savings account because it helps savings grow while keeping funds available."
        },
        {
            id: "c-mcq-246", topic: "saving-investing",
            q: "A family can leave money untouched for twelve months and wants certainty. What is the BEST next step?",
            options: [
                "keep short-term money in liquid options rather than locking it away too long.",
                "check the term, rate and whether the money can stay untouched.",
                "compare interest rates, bonus conditions and fees before opening the account.",
                "invest only money that can stay invested and understand the risks first."
            ],
            answer: 1,
            explain: "The best response is to check the term, rate and whether the money can stay untouched. This fits term deposit because it offers predictable returns with low risk."
        },
        {
            id: "c-mcq-247", topic: "saving-investing",
            q: "A student learns that buying shares can earn dividends but prices can also drop. What is the BEST next step?",
            options: [
                "check the term, rate and whether the money can stay untouched.",
                "mix savings across more than one asset or company where appropriate.",
                "invest only money that can stay invested and understand the risks first.",
                "match the level of risk to the goal, timeline and ability to absorb losses."
            ],
            answer: 2,
            explain: "The best response is to invest only money that can stay invested and understand the risks first. This fits shares because they can offer higher long-term returns than simple savings, with higher risk."
        },
        {
            id: "c-mcq-248", topic: "saving-investing",
            q: "A saver is deciding whether to invest all money in one company or spread it out. What is the BEST next step?",
            options: [
                "match the level of risk to the goal, timeline and ability to absorb losses.",
                "save regularly and leave the money invested long enough for growth to build.",
                "keep short-term money in liquid options rather than locking it away too long.",
                "mix savings across more than one asset or company where appropriate."
            ],
            answer: 3,
            explain: "The best response is to mix savings across more than one asset or company where appropriate. This fits diversification because it reduces the impact if one investment performs badly."
        },
        {
            id: "c-mcq-249", topic: "saving-investing",
            q: "A friend promises a very high return from a risky online investment. What is the BEST next step?",
            options: [
                "match the level of risk to the goal, timeline and ability to absorb losses.",
                "keep short-term money in liquid options rather than locking it away too long.",
                "compare interest rates, bonus conditions and fees before opening the account.",
                "check the term, rate and whether the money can stay untouched."
            ],
            answer: 0,
            explain: "The best response is to match the level of risk to the goal, timeline and ability to absorb losses. This fits risk and return because it helps investors compare choices realistically."
        },
        {
            id: "c-mcq-250", topic: "saving-investing",
            q: "Savings grow faster over time because interest keeps earning more interest. What is the BEST next step?",
            options: [
                "check the term, rate and whether the money can stay untouched.",
                "save regularly and leave the money invested long enough for growth to build.",
                "invest only money that can stay invested and understand the risks first.",
                "mix savings across more than one asset or company where appropriate."
            ],
            answer: 1,
            explain: "The best response is to save regularly and leave the money invested long enough for growth to build. This fits compound interest because it rewards people who start saving early and leave money invested."
        },
        {
            id: "c-mcq-251", topic: "saving-investing",
            q: "A student may need quick access to money for camp fees next month. What is the BEST next step?",
            options: [
                "mix savings across more than one asset or company where appropriate.",
                "match the level of risk to the goal, timeline and ability to absorb losses.",
                "keep short-term money in liquid options rather than locking it away too long.",
                "save regularly and leave the money invested long enough for growth to build."
            ],
            answer: 2,
            explain: "The best response is to keep short-term money in liquid options rather than locking it away too long. This fits liquidity because it helps savers choose products that match when the money will be needed."
        },
        {
            id: "c-mcq-252", topic: "saving-investing",
            q: "Which option is the BEST example of high-interest savings account?",
            options: [
                "Depositing babysitting money into a savings account each week.",
                "A savings balance that grows more quickly in year two than in year one.",
                "Cash in a savings account being easier to use than money locked in a term deposit.",
                "Putting savings in a six-month term deposit instead of everyday spending."
            ],
            answer: 0,
            explain: "That option is the clearest example of high-interest savings account. a bank account that pays interest while keeping money relatively safe and easy to access."
        },
        {
            id: "c-mcq-253", topic: "saving-investing",
            q: "Which option is the BEST example of term deposit?",
            options: [
                "Depositing babysitting money into a savings account each week.",
                "Putting savings in a six-month term deposit instead of everyday spending.",
                "Owning a tiny part of a listed Australian company through shares.",
                "Keeping some money in savings and some in a range of shares."
            ],
            answer: 1,
            explain: "That option is the clearest example of term deposit. a savings product that locks money away for a set period in return for a fixed interest rate."
        },
        {
            id: "c-mcq-254", topic: "saving-investing",
            q: "Which option is the BEST example of shares?",
            options: [
                "Keeping some money in savings and some in a range of shares.",
                "Choosing a savings account for short-term goals and shares for a longer horizon.",
                "Owning a tiny part of a listed Australian company through shares.",
                "A savings balance that grows more quickly in year two than in year one."
            ],
            answer: 2,
            explain: "That option is the clearest example of shares. small units of ownership in a company that may rise or fall in value."
        },

        /* ===== Payment options & credit — expansion ===== */
        {
            id: "c-mcq-255", topic: "payment-credit",
            q: "Which statement best describes debit card?",
            options: [
                "a card that lets the user borrow money and repay it later, usually with interest if not paid in full.",
                "a service that splits a purchase into smaller instalments over time.",
                "an automatic payment taken from a bank account on agreed dates.",
                "a card that spends money directly from the linked bank account."
            ],
            answer: 3,
            explain: "This describes debit card because a card that spends money directly from the linked bank account."
        },
        {
            id: "c-mcq-256", topic: "payment-credit",
            q: "Which statement best describes credit card?",
            options: [
                "a card that lets the user borrow money and repay it later, usually with interest if not paid in full.",
                "an automatic payment taken from a bank account on agreed dates.",
                "extra costs charged when borrowed money is not repaid on time.",
                "steps taken to stop personal or banking details being stolen and misused."
            ],
            answer: 0,
            explain: "This describes credit card because a card that lets the user borrow money and repay it later, usually with interest if not paid in full."
        },
        {
            id: "c-mcq-257", topic: "payment-credit",
            q: "Which statement best describes Buy Now Pay Later?",
            options: [
                "steps taken to stop personal or banking details being stolen and misused.",
                "a service that splits a purchase into smaller instalments over time.",
                "a record of how a person has managed borrowed money and repayments.",
                "a card that spends money directly from the linked bank account."
            ],
            answer: 1,
            explain: "This describes Buy Now Pay Later because a service that splits a purchase into smaller instalments over time."
        },
        {
            id: "c-mcq-258", topic: "payment-credit",
            q: "Which statement best describes direct debit?",
            options: [
                "a card that spends money directly from the linked bank account.",
                "a card that lets the user borrow money and repay it later, usually with interest if not paid in full.",
                "an automatic payment taken from a bank account on agreed dates.",
                "a service that splits a purchase into smaller instalments over time."
            ],
            answer: 2,
            explain: "This describes direct debit because an automatic payment taken from a bank account on agreed dates."
        },
        {
            id: "c-mcq-259", topic: "payment-credit",
            q: "Which statement best describes interest and late fees?",
            options: [
                "a service that splits a purchase into smaller instalments over time.",
                "an automatic payment taken from a bank account on agreed dates.",
                "steps taken to stop personal or banking details being stolen and misused.",
                "extra costs charged when borrowed money is not repaid on time."
            ],
            answer: 3,
            explain: "This describes interest and late fees because extra costs charged when borrowed money is not repaid on time."
        },
        {
            id: "c-mcq-260", topic: "payment-credit",
            q: "Which statement best describes identity theft protection?",
            options: [
                "steps taken to stop personal or banking details being stolen and misused.",
                "extra costs charged when borrowed money is not repaid on time.",
                "a record of how a person has managed borrowed money and repayments.",
                "a card that spends money directly from the linked bank account."
            ],
            answer: 0,
            explain: "This describes identity theft protection because steps taken to stop personal or banking details being stolen and misused."
        },
        {
            id: "c-mcq-261", topic: "payment-credit",
            q: "Which statement best describes credit history?",
            options: [
                "a card that spends money directly from the linked bank account.",
                "a record of how a person has managed borrowed money and repayments.",
                "a card that lets the user borrow money and repay it later, usually with interest if not paid in full.",
                "a service that splits a purchase into smaller instalments over time."
            ],
            answer: 1,
            explain: "This describes credit history because a record of how a person has managed borrowed money and repayments."
        },
        {
            id: "c-mcq-262", topic: "payment-credit",
            q: "A student uses a card at the canteen and the money leaves the account straight away. Which concept is MOST relevant?",
            options: [
                "Buy Now Pay Later",
                "direct debit",
                "interest and late fees",
                "debit card"
            ],
            answer: 3,
            explain: "The scenario is about debit card because it helps people spend money they already have rather than borrowing."
        },
        {
            id: "c-mcq-263", topic: "payment-credit",
            q: "A family uses a credit card for a large purchase and carries part of the balance. Which concept is MOST relevant?",
            options: [
                "credit card",
                "interest and late fees",
                "identity theft protection",
                "credit history"
            ],
            answer: 0,
            explain: "The scenario is about credit card because it can provide convenience and purchase protections, but only if managed carefully."
        },
        {
            id: "c-mcq-264", topic: "payment-credit",
            q: "A teenager is offered four instalments for new clothes at checkout. Which concept is MOST relevant?",
            options: [
                "credit history",
                "Buy Now Pay Later",
                "debit card",
                "credit card"
            ],
            answer: 1,
            explain: "The scenario is about Buy Now Pay Later because it can spread costs, but it also makes overspending easier."
        },
        {
            id: "c-mcq-265", topic: "payment-credit",
            q: "A music subscription keeps charging monthly until the customer cancels it. Which concept is MOST relevant?",
            options: [
                "credit card",
                "Buy Now Pay Later",
                "direct debit",
                "interest and late fees"
            ],
            answer: 2,
            explain: "The scenario is about direct debit because it can prevent missed payments for regular bills."
        },
        {
            id: "c-mcq-266", topic: "payment-credit",
            q: "A person misses a BNPL instalment and extra charges are added. Which concept is MOST relevant?",
            options: [
                "direct debit",
                "identity theft protection",
                "credit history",
                "interest and late fees"
            ],
            answer: 3,
            explain: "The scenario is about interest and late fees because understanding them helps consumers see the true cost of credit."
        },
        {
            id: "c-mcq-267", topic: "payment-credit",
            q: "A fake email asks for card details and passwords after a supposed security problem. Which concept is MOST relevant?",
            options: [
                "identity theft protection",
                "credit history",
                "debit card",
                "credit card"
            ],
            answer: 0,
            explain: "The scenario is about identity theft protection because it reduces the chance of losing money or having accounts abused."
        },
        {
            id: "c-mcq-268", topic: "payment-credit",
            q: "Missed repayments on several accounts are recorded by a lender. Which concept is MOST relevant?",
            options: [
                "credit card",
                "credit history",
                "Buy Now Pay Later",
                "direct debit"
            ],
            answer: 1,
            explain: "The scenario is about credit history because it can affect future access to loans, contracts or other credit products."
        },
        {
            id: "c-mcq-269", topic: "payment-credit",
            q: "Why is debit card important in Commerce?",
            options: [
                "it can prevent missed payments for regular bills.",
                "understanding them helps consumers see the true cost of credit.",
                "it reduces the chance of losing money or having accounts abused.",
                "it helps people spend money they already have rather than borrowing."
            ],
            answer: 3,
            explain: "This is correct because it helps people spend money they already have rather than borrowing."
        },
        {
            id: "c-mcq-270", topic: "payment-credit",
            q: "Why is credit card important in Commerce?",
            options: [
                "it can provide convenience and purchase protections, but only if managed carefully.",
                "it reduces the chance of losing money or having accounts abused.",
                "it can affect future access to loans, contracts or other credit products.",
                "it helps people spend money they already have rather than borrowing."
            ],
            answer: 0,
            explain: "This is correct because it can provide convenience and purchase protections, but only if managed carefully."
        },
        {
            id: "c-mcq-271", topic: "payment-credit",
            q: "Why is Buy Now Pay Later important in Commerce?",
            options: [
                "it helps people spend money they already have rather than borrowing.",
                "it can spread costs, but it also makes overspending easier.",
                "it can provide convenience and purchase protections, but only if managed carefully.",
                "it can prevent missed payments for regular bills."
            ],
            answer: 1,
            explain: "This is correct because it can spread costs, but it also makes overspending easier."
        },
        {
            id: "c-mcq-272", topic: "payment-credit",
            q: "Why is direct debit important in Commerce?",
            options: [
                "it can spread costs, but it also makes overspending easier.",
                "understanding them helps consumers see the true cost of credit.",
                "it can prevent missed payments for regular bills.",
                "it reduces the chance of losing money or having accounts abused."
            ],
            answer: 2,
            explain: "This is correct because it can prevent missed payments for regular bills."
        },
        {
            id: "c-mcq-273", topic: "payment-credit",
            q: "Why is interest and late fees important in Commerce?",
            options: [
                "it reduces the chance of losing money or having accounts abused.",
                "it can affect future access to loans, contracts or other credit products.",
                "it helps people spend money they already have rather than borrowing.",
                "understanding them helps consumers see the true cost of credit."
            ],
            answer: 3,
            explain: "This is correct because understanding them helps consumers see the true cost of credit."
        },
        {
            id: "c-mcq-274", topic: "payment-credit",
            q: "Why is identity theft protection important in Commerce?",
            options: [
                "it reduces the chance of losing money or having accounts abused.",
                "it helps people spend money they already have rather than borrowing.",
                "it can provide convenience and purchase protections, but only if managed carefully.",
                "it can spread costs, but it also makes overspending easier."
            ],
            answer: 0,
            explain: "This is correct because it reduces the chance of losing money or having accounts abused."
        },
        {
            id: "c-mcq-275", topic: "payment-credit",
            q: "Why is credit history important in Commerce?",
            options: [
                "it can spread costs, but it also makes overspending easier.",
                "it can affect future access to loans, contracts or other credit products.",
                "it can prevent missed payments for regular bills.",
                "understanding them helps consumers see the true cost of credit."
            ],
            answer: 1,
            explain: "This is correct because it can affect future access to loans, contracts or other credit products."
        },
        {
            id: "c-mcq-276", topic: "payment-credit",
            q: "A student uses a card at the canteen and the money leaves the account straight away. What is the BEST next step?",
            options: [
                "read the fee schedule and make repayments on time or avoid the credit product.",
                "use strong passwords, turn on 2FA and verify messages through official channels.",
                "pay on time and avoid taking on more credit than can be managed.",
                "check the account balance before buying and use the card within the budget."
            ],
            answer: 3,
            explain: "The best response is to check the account balance before buying and use the card within the budget. This fits debit card because it helps people spend money they already have rather than borrowing."
        },
        {
            id: "c-mcq-277", topic: "payment-credit",
            q: "A family uses a credit card for a large purchase and carries part of the balance. What is the BEST next step?",
            options: [
                "repay as much as possible on time and avoid spending beyond the repayment plan.",
                "pay on time and avoid taking on more credit than can be managed.",
                "check the account balance before buying and use the card within the budget.",
                "check every repayment date and total cost before agreeing to the plan."
            ],
            answer: 0,
            explain: "The best response is to repay as much as possible on time and avoid spending beyond the repayment plan. This fits credit card because it can provide convenience and purchase protections, but only if managed carefully."
        },
        {
            id: "c-mcq-278", topic: "payment-credit",
            q: "A teenager is offered four instalments for new clothes at checkout. What is the BEST next step?",
            options: [
                "repay as much as possible on time and avoid spending beyond the repayment plan.",
                "check every repayment date and total cost before agreeing to the plan.",
                "read the agreement, monitor statements and cancel unwanted services quickly.",
                "read the fee schedule and make repayments on time or avoid the credit product."
            ],
            answer: 1,
            explain: "The best response is to check every repayment date and total cost before agreeing to the plan. This fits Buy Now Pay Later because it can spread costs, but it also makes overspending easier."
        },
        {
            id: "c-mcq-279", topic: "payment-credit",
            q: "A music subscription keeps charging monthly until the customer cancels it. What is the BEST next step?",
            options: [
                "read the fee schedule and make repayments on time or avoid the credit product.",
                "use strong passwords, turn on 2FA and verify messages through official channels.",
                "read the agreement, monitor statements and cancel unwanted services quickly.",
                "pay on time and avoid taking on more credit than can be managed."
            ],
            answer: 2,
            explain: "The best response is to read the agreement, monitor statements and cancel unwanted services quickly. This fits direct debit because it can prevent missed payments for regular bills."
        },
        {
            id: "c-mcq-280", topic: "payment-credit",
            q: "A person misses a BNPL instalment and extra charges are added. What is the BEST next step?",
            options: [
                "pay on time and avoid taking on more credit than can be managed.",
                "check the account balance before buying and use the card within the budget.",
                "repay as much as possible on time and avoid spending beyond the repayment plan.",
                "read the fee schedule and make repayments on time or avoid the credit product."
            ],
            answer: 3,
            explain: "The best response is to read the fee schedule and make repayments on time or avoid the credit product. This fits interest and late fees because understanding them helps consumers see the true cost of credit."
        },
        {
            id: "c-mcq-281", topic: "payment-credit",
            q: "A fake email asks for card details and passwords after a supposed security problem. What is the BEST next step?",
            options: [
                "use strong passwords, turn on 2FA and verify messages through official channels.",
                "repay as much as possible on time and avoid spending beyond the repayment plan.",
                "check every repayment date and total cost before agreeing to the plan.",
                "read the agreement, monitor statements and cancel unwanted services quickly."
            ],
            answer: 0,
            explain: "The best response is to use strong passwords, turn on 2FA and verify messages through official channels. This fits identity theft protection because it reduces the chance of losing money or having accounts abused."
        },
        {
            id: "c-mcq-282", topic: "payment-credit",
            q: "Missed repayments on several accounts are recorded by a lender. What is the BEST next step?",
            options: [
                "read the agreement, monitor statements and cancel unwanted services quickly.",
                "pay on time and avoid taking on more credit than can be managed.",
                "read the fee schedule and make repayments on time or avoid the credit product.",
                "use strong passwords, turn on 2FA and verify messages through official channels."
            ],
            answer: 1,
            explain: "The best response is to pay on time and avoid taking on more credit than can be managed. This fits credit history because it can affect future access to loans, contracts or other credit products."
        },
        {
            id: "c-mcq-283", topic: "payment-credit",
            q: "Which option is the BEST example of debit card?",
            options: [
                "Ignoring a suspicious banking text and logging in through the real app instead.",
                "A late repayment making it harder to be approved for another loan later.",
                "Buying flights on a credit card and paying the statement by the due date.",
                "Paying online with money already saved in an everyday account."
            ],
            answer: 3,
            explain: "That option is the clearest example of debit card. a card that spends money directly from the linked bank account."
        },
        {
            id: "c-mcq-284", topic: "payment-credit",
            q: "Which option is the BEST example of credit card?",
            options: [
                "Buying flights on a credit card and paying the statement by the due date.",
                "Paying online with money already saved in an everyday account.",
                "Paying for shoes in four equal instalments through a BNPL app.",
                "A gym membership fee being automatically deducted each month."
            ],
            answer: 0,
            explain: "That option is the clearest example of credit card. a card that lets the user borrow money and repay it later, usually with interest if not paid in full."
        },
        {
            id: "c-mcq-285", topic: "payment-credit",
            q: "Which option is the BEST example of Buy Now Pay Later?",
            options: [
                "A gym membership fee being automatically deducted each month.",
                "Paying for shoes in four equal instalments through a BNPL app.",
                "Paying more for a purchase because the credit-card balance was left unpaid.",
                "Ignoring a suspicious banking text and logging in through the real app instead."
            ],
            answer: 1,
            explain: "That option is the clearest example of Buy Now Pay Later. a service that splits a purchase into smaller instalments over time."
        },

        /* ===== The economic environment — expansion ===== */
        {
            id: "c-mcq-286", topic: "economic-environment",
            q: "Which statement best describes scarcity?",
            options: [
                "the total value of goods and services produced in a country over a period of time.",
                "the percentage of the labour force that wants work but cannot find it.",
                "the basic economic problem that resources are limited while wants are unlimited.",
                "a sustained rise in the general price level over time."
            ],
            answer: 2,
            explain: "This describes scarcity because the basic economic problem that resources are limited while wants are unlimited."
        },
        {
            id: "c-mcq-287", topic: "economic-environment",
            q: "Which statement best describes GDP?",
            options: [
                "a sustained rise in the general price level over time.",
                "the level of material comfort people can enjoy, such as income, housing and access to goods.",
                "how much output is produced from a given amount of inputs such as time or labour.",
                "the total value of goods and services produced in a country over a period of time."
            ],
            answer: 3,
            explain: "This describes GDP because the total value of goods and services produced in a country over a period of time."
        },
        {
            id: "c-mcq-288", topic: "economic-environment",
            q: "Which statement best describes unemployment?",
            options: [
                "the percentage of the labour force that wants work but cannot find it.",
                "how much output is produced from a given amount of inputs such as time or labour.",
                "the pattern of expansion, slowdown and recovery that economies move through over time.",
                "the basic economic problem that resources are limited while wants are unlimited."
            ],
            answer: 0,
            explain: "This describes unemployment because the percentage of the labour force that wants work but cannot find it."
        },
        {
            id: "c-mcq-289", topic: "economic-environment",
            q: "Which statement best describes inflation?",
            options: [
                "the basic economic problem that resources are limited while wants are unlimited.",
                "a sustained rise in the general price level over time.",
                "the total value of goods and services produced in a country over a period of time.",
                "the percentage of the labour force that wants work but cannot find it."
            ],
            answer: 1,
            explain: "This describes inflation because a sustained rise in the general price level over time."
        },
        {
            id: "c-mcq-290", topic: "economic-environment",
            q: "Which statement best describes standard of living?",
            options: [
                "the percentage of the labour force that wants work but cannot find it.",
                "a sustained rise in the general price level over time.",
                "the level of material comfort people can enjoy, such as income, housing and access to goods.",
                "how much output is produced from a given amount of inputs such as time or labour."
            ],
            answer: 2,
            explain: "This describes standard of living because the level of material comfort people can enjoy, such as income, housing and access to goods."
        },
        {
            id: "c-mcq-291", topic: "economic-environment",
            q: "Which statement best describes productivity?",
            options: [
                "the level of material comfort people can enjoy, such as income, housing and access to goods.",
                "the pattern of expansion, slowdown and recovery that economies move through over time.",
                "the basic economic problem that resources are limited while wants are unlimited.",
                "how much output is produced from a given amount of inputs such as time or labour."
            ],
            answer: 3,
            explain: "This describes productivity because how much output is produced from a given amount of inputs such as time or labour."
        },
        {
            id: "c-mcq-292", topic: "economic-environment",
            q: "Which statement best describes economic cycle?",
            options: [
                "the pattern of expansion, slowdown and recovery that economies move through over time.",
                "the basic economic problem that resources are limited while wants are unlimited.",
                "the total value of goods and services produced in a country over a period of time.",
                "the percentage of the labour force that wants work but cannot find it."
            ],
            answer: 0,
            explain: "This describes economic cycle because the pattern of expansion, slowdown and recovery that economies move through over time."
        },
        {
            id: "c-mcq-293", topic: "economic-environment",
            q: "A family budget cannot cover every item they would like to buy this month. Which concept is MOST relevant?",
            options: [
                "unemployment",
                "inflation",
                "scarcity",
                "standard of living"
            ],
            answer: 2,
            explain: "The scenario is about scarcity because it explains why choices and trade-offs are unavoidable."
        },
        {
            id: "c-mcq-294", topic: "economic-environment",
            q: "News reports say the economy grew because GDP rose this quarter. Which concept is MOST relevant?",
            options: [
                "standard of living",
                "productivity",
                "economic cycle",
                "GDP"
            ],
            answer: 3,
            explain: "The scenario is about GDP because it helps measure overall economic activity."
        },
        {
            id: "c-mcq-295", topic: "economic-environment",
            q: "More people apply for part-time jobs because fewer positions are available. Which concept is MOST relevant?",
            options: [
                "unemployment",
                "economic cycle",
                "scarcity",
                "GDP"
            ],
            answer: 0,
            explain: "The scenario is about unemployment because it shows how healthy the job market is."
        },
        {
            id: "c-mcq-296", topic: "economic-environment",
            q: "Groceries, fuel and rent all become more expensive over several months. Which concept is MOST relevant?",
            options: [
                "GDP",
                "inflation",
                "unemployment",
                "standard of living"
            ],
            answer: 1,
            explain: "The scenario is about inflation because it helps explain changes in purchasing power."
        },
        {
            id: "c-mcq-297", topic: "economic-environment",
            q: "A household can afford safe housing, food, transport and leisure activities. Which concept is MOST relevant?",
            options: [
                "inflation",
                "productivity",
                "standard of living",
                "economic cycle"
            ],
            answer: 2,
            explain: "The scenario is about standard of living because it helps compare economic wellbeing between groups or over time."
        },
        {
            id: "c-mcq-298", topic: "economic-environment",
            q: "A café serves more customers per hour after improving its ordering system. Which concept is MOST relevant?",
            options: [
                "economic cycle",
                "scarcity",
                "GDP",
                "productivity"
            ],
            answer: 3,
            explain: "The scenario is about productivity because higher productivity can support growth and incomes."
        },
        {
            id: "c-mcq-299", topic: "economic-environment",
            q: "Spending and hiring rise in a boom, then slow in a downturn. Which concept is MOST relevant?",
            options: [
                "economic cycle",
                "GDP",
                "unemployment",
                "inflation"
            ],
            answer: 0,
            explain: "The scenario is about economic cycle because it helps explain why jobs, sales and confidence change over time."
        },
        {
            id: "c-mcq-300", topic: "economic-environment",
            q: "Why is scarcity important in Commerce?",
            options: [
                "it helps explain changes in purchasing power.",
                "it helps compare economic wellbeing between groups or over time.",
                "it explains why choices and trade-offs are unavoidable.",
                "higher productivity can support growth and incomes."
            ],
            answer: 2,
            explain: "This is correct because it explains why choices and trade-offs are unavoidable."
        },
        {
            id: "c-mcq-301", topic: "economic-environment",
            q: "Why is GDP important in Commerce?",
            options: [
                "higher productivity can support growth and incomes.",
                "it helps explain why jobs, sales and confidence change over time.",
                "it explains why choices and trade-offs are unavoidable.",
                "it helps measure overall economic activity."
            ],
            answer: 3,
            explain: "This is correct because it helps measure overall economic activity."
        },
        {
            id: "c-mcq-302", topic: "economic-environment",
            q: "Why is unemployment important in Commerce?",
            options: [
                "it shows how healthy the job market is.",
                "it explains why choices and trade-offs are unavoidable.",
                "it helps measure overall economic activity.",
                "it helps explain changes in purchasing power."
            ],
            answer: 0,
            explain: "This is correct because it shows how healthy the job market is."
        },
        {
            id: "c-mcq-303", topic: "economic-environment",
            q: "Why is inflation important in Commerce?",
            options: [
                "it shows how healthy the job market is.",
                "it helps explain changes in purchasing power.",
                "it helps compare economic wellbeing between groups or over time.",
                "higher productivity can support growth and incomes."
            ],
            answer: 1,
            explain: "This is correct because it helps explain changes in purchasing power."
        },
        {
            id: "c-mcq-304", topic: "economic-environment",
            q: "Why is standard of living important in Commerce?",
            options: [
                "higher productivity can support growth and incomes.",
                "it helps explain why jobs, sales and confidence change over time.",
                "it helps compare economic wellbeing between groups or over time.",
                "it explains why choices and trade-offs are unavoidable."
            ],
            answer: 2,
            explain: "This is correct because it helps compare economic wellbeing between groups or over time."
        },
        {
            id: "c-mcq-305", topic: "economic-environment",
            q: "Why is productivity important in Commerce?",
            options: [
                "it explains why choices and trade-offs are unavoidable.",
                "it helps measure overall economic activity.",
                "it shows how healthy the job market is.",
                "higher productivity can support growth and incomes."
            ],
            answer: 3,
            explain: "This is correct because higher productivity can support growth and incomes."
        },
        {
            id: "c-mcq-306", topic: "economic-environment",
            q: "Why is economic cycle important in Commerce?",
            options: [
                "it helps explain why jobs, sales and confidence change over time.",
                "it shows how healthy the job market is.",
                "it helps explain changes in purchasing power.",
                "it helps compare economic wellbeing between groups or over time."
            ],
            answer: 0,
            explain: "This is correct because it helps explain why jobs, sales and confidence change over time."
        },
        {
            id: "c-mcq-307", topic: "economic-environment",
            q: "A family budget cannot cover every item they would like to buy this month. What is the BEST next step?",
            options: [
                "look beyond one statistic and consider several indicators of wellbeing.",
                "use skills, technology and organisation to get more output from resources.",
                "rank priorities and use limited resources on the most important needs first.",
                "adjust spending and business plans when conditions are changing."
            ],
            answer: 2,
            explain: "The best response is to rank priorities and use limited resources on the most important needs first. This fits scarcity because it explains why choices and trade-offs are unavoidable."
        },
        {
            id: "c-mcq-308", topic: "economic-environment",
            q: "News reports say the economy grew because GDP rose this quarter. What is the BEST next step?",
            options: [
                "adjust spending and business plans when conditions are changing.",
                "rank priorities and use limited resources on the most important needs first.",
                "interpret it alongside other data such as inflation and GDP.",
                "use GDP carefully with other indicators because it does not show everything about wellbeing."
            ],
            answer: 3,
            explain: "The best response is to use GDP carefully with other indicators because it does not show everything about wellbeing. This fits GDP because it helps measure overall economic activity."
        },
        {
            id: "c-mcq-309", topic: "economic-environment",
            q: "More people apply for part-time jobs because fewer positions are available. What is the BEST next step?",
            options: [
                "interpret it alongside other data such as inflation and GDP.",
                "use GDP carefully with other indicators because it does not show everything about wellbeing.",
                "plan spending carefully because the same money buys fewer goods.",
                "look beyond one statistic and consider several indicators of wellbeing."
            ],
            answer: 0,
            explain: "The best response is to interpret it alongside other data such as inflation and GDP. This fits unemployment because it shows how healthy the job market is."
        },
        {
            id: "c-mcq-310", topic: "economic-environment",
            q: "Groceries, fuel and rent all become more expensive over several months. What is the BEST next step?",
            options: [
                "look beyond one statistic and consider several indicators of wellbeing.",
                "plan spending carefully because the same money buys fewer goods.",
                "use skills, technology and organisation to get more output from resources.",
                "adjust spending and business plans when conditions are changing."
            ],
            answer: 1,
            explain: "The best response is to plan spending carefully because the same money buys fewer goods. This fits inflation because it helps explain changes in purchasing power."
        },
        {
            id: "c-mcq-311", topic: "economic-environment",
            q: "A household can afford safe housing, food, transport and leisure activities. What is the BEST next step?",
            options: [
                "adjust spending and business plans when conditions are changing.",
                "rank priorities and use limited resources on the most important needs first.",
                "look beyond one statistic and consider several indicators of wellbeing.",
                "use GDP carefully with other indicators because it does not show everything about wellbeing."
            ],
            answer: 2,
            explain: "The best response is to look beyond one statistic and consider several indicators of wellbeing. This fits standard of living because it helps compare economic wellbeing between groups or over time."
        },
        {
            id: "c-mcq-312", topic: "economic-environment",
            q: "A café serves more customers per hour after improving its ordering system. What is the BEST next step?",
            options: [
                "use GDP carefully with other indicators because it does not show everything about wellbeing.",
                "interpret it alongside other data such as inflation and GDP.",
                "plan spending carefully because the same money buys fewer goods.",
                "use skills, technology and organisation to get more output from resources."
            ],
            answer: 3,
            explain: "The best response is to use skills, technology and organisation to get more output from resources. This fits productivity because higher productivity can support growth and incomes."
        },
        {
            id: "c-mcq-313", topic: "economic-environment",
            q: "Spending and hiring rise in a boom, then slow in a downturn. What is the BEST next step?",
            options: [
                "adjust spending and business plans when conditions are changing.",
                "plan spending carefully because the same money buys fewer goods.",
                "look beyond one statistic and consider several indicators of wellbeing.",
                "use skills, technology and organisation to get more output from resources."
            ],
            answer: 0,
            explain: "The best response is to adjust spending and business plans when conditions are changing. This fits economic cycle because it helps explain why jobs, sales and confidence change over time."
        },
        {
            id: "c-mcq-314", topic: "economic-environment",
            q: "Which option is the BEST example of scarcity?",
            options: [
                "Workers using better software to complete tasks faster.",
                "A shop selling more during a strong economy and less during a recession.",
                "Choosing between a holiday and renovating a kitchen because money is limited.",
                "Comparing GDP growth rates from one year to the next."
            ],
            answer: 2,
            explain: "That option is the clearest example of scarcity. the basic economic problem that resources are limited while wants are unlimited."
        },
        {
            id: "c-mcq-315", topic: "economic-environment",
            q: "Which option is the BEST example of GDP?",
            options: [
                "Choosing between a holiday and renovating a kitchen because money is limited.",
                "A town losing jobs after a factory closes.",
                "Pocket money buying fewer snacks than it did last year.",
                "Comparing GDP growth rates from one year to the next."
            ],
            answer: 3,
            explain: "That option is the clearest example of GDP. the total value of goods and services produced in a country over a period of time."
        },

        /* ===== Markets, supply & demand, pricing — expansion ===== */
        {
            id: "c-mcq-316", topic: "markets-pricing",
            q: "Which statement best describes demand?",
            options: [
                "the quantity consumers are willing and able to buy at different prices.",
                "the quantity producers are willing and able to sell at different prices.",
                "the price where quantity demanded equals quantity supplied.",
                "a situation where quantity demanded is greater than quantity supplied."
            ],
            answer: 0,
            explain: "This describes demand because the quantity consumers are willing and able to buy at different prices."
        },
        {
            id: "c-mcq-317", topic: "markets-pricing",
            q: "Which statement best describes supply?",
            options: [
                "a situation where quantity demanded is greater than quantity supplied.",
                "the quantity producers are willing and able to sell at different prices.",
                "a situation where quantity supplied is greater than quantity demanded.",
                "products that can replace each other when consumers switch between them."
            ],
            answer: 1,
            explain: "This describes supply because the quantity producers are willing and able to sell at different prices."
        },
        {
            id: "c-mcq-318", topic: "markets-pricing",
            q: "Which statement best describes equilibrium price?",
            options: [
                "products that can replace each other when consumers switch between them.",
                "products that are often used together so demand for one affects demand for the other.",
                "the price where quantity demanded equals quantity supplied.",
                "the quantity consumers are willing and able to buy at different prices."
            ],
            answer: 2,
            explain: "This describes equilibrium price because the price where quantity demanded equals quantity supplied."
        },
        {
            id: "c-mcq-319", topic: "markets-pricing",
            q: "Which statement best describes shortage?",
            options: [
                "the quantity consumers are willing and able to buy at different prices.",
                "the quantity producers are willing and able to sell at different prices.",
                "the price where quantity demanded equals quantity supplied.",
                "a situation where quantity demanded is greater than quantity supplied."
            ],
            answer: 3,
            explain: "This describes shortage because a situation where quantity demanded is greater than quantity supplied."
        },
        {
            id: "c-mcq-320", topic: "markets-pricing",
            q: "Which statement best describes surplus?",
            options: [
                "a situation where quantity supplied is greater than quantity demanded.",
                "the price where quantity demanded equals quantity supplied.",
                "a situation where quantity demanded is greater than quantity supplied.",
                "products that can replace each other when consumers switch between them."
            ],
            answer: 0,
            explain: "This describes surplus because a situation where quantity supplied is greater than quantity demanded."
        },
        {
            id: "c-mcq-321", topic: "markets-pricing",
            q: "Which statement best describes substitute goods?",
            options: [
                "a situation where quantity supplied is greater than quantity demanded.",
                "products that can replace each other when consumers switch between them.",
                "products that are often used together so demand for one affects demand for the other.",
                "the quantity consumers are willing and able to buy at different prices."
            ],
            answer: 1,
            explain: "This describes substitute goods because products that can replace each other when consumers switch between them."
        },
        {
            id: "c-mcq-322", topic: "markets-pricing",
            q: "Which statement best describes complementary goods?",
            options: [
                "the quantity consumers are willing and able to buy at different prices.",
                "the quantity producers are willing and able to sell at different prices.",
                "products that are often used together so demand for one affects demand for the other.",
                "the price where quantity demanded equals quantity supplied."
            ],
            answer: 2,
            explain: "This describes complementary goods because products that are often used together so demand for one affects demand for the other."
        },
        {
            id: "c-mcq-323", topic: "markets-pricing",
            q: "More students want iced drinks when the weather becomes hotter. Which concept is MOST relevant?",
            options: [
                "demand",
                "equilibrium price",
                "shortage",
                "surplus"
            ],
            answer: 0,
            explain: "The scenario is about demand because it helps explain why buyers push prices and quantities up or down."
        },
        {
            id: "c-mcq-324", topic: "markets-pricing",
            q: "A storm damages crops so farmers have less fruit to sell. Which concept is MOST relevant?",
            options: [
                "surplus",
                "supply",
                "substitute goods",
                "complementary goods"
            ],
            answer: 1,
            explain: "The scenario is about supply because it explains how business costs and conditions affect the market."
        },
        {
            id: "c-mcq-325", topic: "markets-pricing",
            q: "A market settles at the price where the amount buyers want matches the amount sellers offer. Which concept is MOST relevant?",
            options: [
                "complementary goods",
                "demand",
                "equilibrium price",
                "supply"
            ],
            answer: 2,
            explain: "The scenario is about equilibrium price because it helps explain where markets naturally tend to settle."
        },
        {
            id: "c-mcq-326", topic: "markets-pricing",
            q: "A limited-edition shoe release has far more buyers than pairs available. Which concept is MOST relevant?",
            options: [
                "supply",
                "equilibrium price",
                "surplus",
                "shortage"
            ],
            answer: 3,
            explain: "The scenario is about shortage because it explains why prices or waiting lists often rise."
        },
        {
            id: "c-mcq-327", topic: "markets-pricing",
            q: "A store orders too many winter coats and many remain unsold in spring. Which concept is MOST relevant?",
            options: [
                "surplus",
                "shortage",
                "substitute goods",
                "complementary goods"
            ],
            answer: 0,
            explain: "The scenario is about surplus because it explains why businesses discount stock to clear it."
        },
        {
            id: "c-mcq-328", topic: "markets-pricing",
            q: "If orange prices rise, some shoppers buy apples instead. Which concept is MOST relevant?",
            options: [
                "complementary goods",
                "substitute goods",
                "demand",
                "supply"
            ],
            answer: 1,
            explain: "The scenario is about substitute goods because they affect how demand changes when relative prices shift."
        },
        {
            id: "c-mcq-329", topic: "markets-pricing",
            q: "If game-console sales rise, demand for compatible controllers also rises. Which concept is MOST relevant?",
            options: [
                "supply",
                "equilibrium price",
                "complementary goods",
                "shortage"
            ],
            answer: 2,
            explain: "The scenario is about complementary goods because they help explain linked movements across markets."
        },
        {
            id: "c-mcq-330", topic: "markets-pricing",
            q: "Why is demand important in Commerce?",
            options: [
                "it helps explain why buyers push prices and quantities up or down.",
                "it explains why prices or waiting lists often rise.",
                "it explains why businesses discount stock to clear it.",
                "they affect how demand changes when relative prices shift."
            ],
            answer: 0,
            explain: "This is correct because it helps explain why buyers push prices and quantities up or down."
        },
        {
            id: "c-mcq-331", topic: "markets-pricing",
            q: "Why is supply important in Commerce?",
            options: [
                "they affect how demand changes when relative prices shift.",
                "it explains how business costs and conditions affect the market.",
                "they help explain linked movements across markets.",
                "it helps explain why buyers push prices and quantities up or down."
            ],
            answer: 1,
            explain: "This is correct because it explains how business costs and conditions affect the market."
        },
        {
            id: "c-mcq-332", topic: "markets-pricing",
            q: "Why is equilibrium price important in Commerce?",
            options: [
                "it helps explain why buyers push prices and quantities up or down.",
                "it explains how business costs and conditions affect the market.",
                "it helps explain where markets naturally tend to settle.",
                "it explains why prices or waiting lists often rise."
            ],
            answer: 2,
            explain: "This is correct because it helps explain where markets naturally tend to settle."
        },
        {
            id: "c-mcq-333", topic: "markets-pricing",
            q: "Why is shortage important in Commerce?",
            options: [
                "it helps explain where markets naturally tend to settle.",
                "it explains why businesses discount stock to clear it.",
                "they affect how demand changes when relative prices shift.",
                "it explains why prices or waiting lists often rise."
            ],
            answer: 3,
            explain: "This is correct because it explains why prices or waiting lists often rise."
        },
        {
            id: "c-mcq-334", topic: "markets-pricing",
            q: "Why is surplus important in Commerce?",
            options: [
                "it explains why businesses discount stock to clear it.",
                "they affect how demand changes when relative prices shift.",
                "they help explain linked movements across markets.",
                "it helps explain why buyers push prices and quantities up or down."
            ],
            answer: 0,
            explain: "This is correct because it explains why businesses discount stock to clear it."
        },
        {
            id: "c-mcq-335", topic: "markets-pricing",
            q: "Why is substitute goods important in Commerce?",
            options: [
                "it helps explain why buyers push prices and quantities up or down.",
                "they affect how demand changes when relative prices shift.",
                "it explains how business costs and conditions affect the market.",
                "it helps explain where markets naturally tend to settle."
            ],
            answer: 1,
            explain: "This is correct because they affect how demand changes when relative prices shift."
        },
        {
            id: "c-mcq-336", topic: "markets-pricing",
            q: "Why is complementary goods important in Commerce?",
            options: [
                "it helps explain where markets naturally tend to settle.",
                "it explains why prices or waiting lists often rise.",
                "they help explain linked movements across markets.",
                "it explains why businesses discount stock to clear it."
            ],
            answer: 2,
            explain: "This is correct because they help explain linked movements across markets."
        },
        {
            id: "c-mcq-337", topic: "markets-pricing",
            q: "More students want iced drinks when the weather becomes hotter. What is the BEST next step?",
            options: [
                "predict how tastes, income or seasons may change what consumers want.",
                "expect prices to fall or promotions to increase.",
                "consider alternative products when a preferred item becomes expensive.",
                "look at paired products when predicting demand changes."
            ],
            answer: 0,
            explain: "The best response is to predict how tastes, income or seasons may change what consumers want. This fits demand because it helps explain why buyers push prices and quantities up or down."
        },
        {
            id: "c-mcq-338", topic: "markets-pricing",
            q: "A storm damages crops so farmers have less fruit to sell. What is the BEST next step?",
            options: [
                "look at paired products when predicting demand changes.",
                "look for changes in costs, weather or technology that affect production.",
                "predict how tastes, income or seasons may change what consumers want.",
                "compare both demand and supply changes before predicting the new price."
            ],
            answer: 1,
            explain: "The best response is to look for changes in costs, weather or technology that affect production. This fits supply because it explains how business costs and conditions affect the market."
        },
        {
            id: "c-mcq-339", topic: "markets-pricing",
            q: "A market settles at the price where the amount buyers want matches the amount sellers offer. What is the BEST next step?",
            options: [
                "look for changes in costs, weather or technology that affect production.",
                "expect pressure for the price to increase or rationing to occur.",
                "compare both demand and supply changes before predicting the new price.",
                "expect prices to fall or promotions to increase."
            ],
            answer: 2,
            explain: "The best response is to compare both demand and supply changes before predicting the new price. This fits equilibrium price because it helps explain where markets naturally tend to settle."
        },
        {
            id: "c-mcq-340", topic: "markets-pricing",
            q: "A limited-edition shoe release has far more buyers than pairs available. What is the BEST next step?",
            options: [
                "expect prices to fall or promotions to increase.",
                "consider alternative products when a preferred item becomes expensive.",
                "look at paired products when predicting demand changes.",
                "expect pressure for the price to increase or rationing to occur."
            ],
            answer: 3,
            explain: "The best response is to expect pressure for the price to increase or rationing to occur. This fits shortage because it explains why prices or waiting lists often rise."
        },
        {
            id: "c-mcq-341", topic: "markets-pricing",
            q: "A store orders too many winter coats and many remain unsold in spring. What is the BEST next step?",
            options: [
                "expect prices to fall or promotions to increase.",
                "look at paired products when predicting demand changes.",
                "predict how tastes, income or seasons may change what consumers want.",
                "look for changes in costs, weather or technology that affect production."
            ],
            answer: 0,
            explain: "The best response is to expect prices to fall or promotions to increase. This fits surplus because it explains why businesses discount stock to clear it."
        },
        {
            id: "c-mcq-342", topic: "markets-pricing",
            q: "If orange prices rise, some shoppers buy apples instead. What is the BEST next step?",
            options: [
                "look for changes in costs, weather or technology that affect production.",
                "consider alternative products when a preferred item becomes expensive.",
                "compare both demand and supply changes before predicting the new price.",
                "expect pressure for the price to increase or rationing to occur."
            ],
            answer: 1,
            explain: "The best response is to consider alternative products when a preferred item becomes expensive. This fits substitute goods because they affect how demand changes when relative prices shift."
        },
        {
            id: "c-mcq-343", topic: "markets-pricing",
            q: "If game-console sales rise, demand for compatible controllers also rises. What is the BEST next step?",
            options: [
                "expect pressure for the price to increase or rationing to occur.",
                "expect prices to fall or promotions to increase.",
                "look at paired products when predicting demand changes.",
                "consider alternative products when a preferred item becomes expensive."
            ],
            answer: 2,
            explain: "The best response is to look at paired products when predicting demand changes. This fits complementary goods because they help explain linked movements across markets."
        },
        {
            id: "c-mcq-344", topic: "markets-pricing",
            q: "Which option is the BEST example of demand?",
            options: [
                "Higher demand for concert tickets after an artist becomes popular.",
                "Choosing public transport when petrol prices rise.",
                "Higher demand for printers increasing demand for ink.",
                "A bakery selling more loaves when it can hire an extra worker."
            ],
            answer: 0,
            explain: "That option is the clearest example of demand. the quantity consumers are willing and able to buy at different prices."
        },
        {
            id: "c-mcq-345", topic: "markets-pricing",
            q: "Which option is the BEST example of supply?",
            options: [
                "Higher demand for concert tickets after an artist becomes popular.",
                "A bakery selling more loaves when it can hire an extra worker.",
                "Tickets selling out neither too quickly nor too slowly at the balance price.",
                "Long queues forming because a new game console is under-supplied."
            ],
            answer: 1,
            explain: "That option is the clearest example of supply. the quantity producers are willing and able to sell at different prices."
        },
        {
            id: "c-mcq-346", topic: "markets-pricing",
            q: "Which option is the BEST example of equilibrium price?",
            options: [
                "Long queues forming because a new game console is under-supplied.",
                "Clearance sales after too many seasonal items were produced.",
                "Tickets selling out neither too quickly nor too slowly at the balance price.",
                "Choosing public transport when petrol prices rise."
            ],
            answer: 2,
            explain: "That option is the clearest example of equilibrium price. the price where quantity demanded equals quantity supplied."
        },

        /* ===== Money, RBA & government policy — expansion ===== */
        {
            id: "c-mcq-347", topic: "money-policy",
            q: "Which statement best describes cash rate?",
            options: [
                "actions by the RBA to influence interest rates and economic activity.",
                "the RBA aim of keeping inflation within a stable target band over time.",
                "policy that slows spending and borrowing to reduce inflationary pressure.",
                "the interest-rate target set by the RBA that influences other interest rates in the economy."
            ],
            answer: 3,
            explain: "This describes cash rate because the interest-rate target set by the RBA that influences other interest rates in the economy."
        },
        {
            id: "c-mcq-348", topic: "money-policy",
            q: "Which statement best describes monetary policy?",
            options: [
                "actions by the RBA to influence interest rates and economic activity.",
                "policy that slows spending and borrowing to reduce inflationary pressure.",
                "policy that encourages borrowing and spending to support growth and jobs.",
                "the different way interest-rate changes affect people who save money and people who borrow it."
            ],
            answer: 0,
            explain: "This describes monetary policy because actions by the RBA to influence interest rates and economic activity."
        },
        {
            id: "c-mcq-349", topic: "money-policy",
            q: "Which statement best describes inflation target?",
            options: [
                "the different way interest-rate changes affect people who save money and people who borrow it.",
                "the RBA aim of keeping inflation within a stable target band over time.",
                "government decisions about spending and taxation that influence the economy.",
                "the interest-rate target set by the RBA that influences other interest rates in the economy."
            ],
            answer: 1,
            explain: "This describes inflation target because the RBA aim of keeping inflation within a stable target band over time."
        },
        {
            id: "c-mcq-350", topic: "money-policy",
            q: "Which statement best describes contractionary policy?",
            options: [
                "the interest-rate target set by the RBA that influences other interest rates in the economy.",
                "actions by the RBA to influence interest rates and economic activity.",
                "policy that slows spending and borrowing to reduce inflationary pressure.",
                "the RBA aim of keeping inflation within a stable target band over time."
            ],
            answer: 2,
            explain: "This describes contractionary policy because policy that slows spending and borrowing to reduce inflationary pressure."
        },
        {
            id: "c-mcq-351", topic: "money-policy",
            q: "Which statement best describes expansionary policy?",
            options: [
                "the RBA aim of keeping inflation within a stable target band over time.",
                "policy that slows spending and borrowing to reduce inflationary pressure.",
                "the different way interest-rate changes affect people who save money and people who borrow it.",
                "policy that encourages borrowing and spending to support growth and jobs."
            ],
            answer: 3,
            explain: "This describes expansionary policy because policy that encourages borrowing and spending to support growth and jobs."
        },
        {
            id: "c-mcq-352", topic: "money-policy",
            q: "Which statement best describes effects on savers and borrowers?",
            options: [
                "the different way interest-rate changes affect people who save money and people who borrow it.",
                "policy that encourages borrowing and spending to support growth and jobs.",
                "government decisions about spending and taxation that influence the economy.",
                "the interest-rate target set by the RBA that influences other interest rates in the economy."
            ],
            answer: 0,
            explain: "This describes effects on savers and borrowers because the different way interest-rate changes affect people who save money and people who borrow it."
        },
        {
            id: "c-mcq-353", topic: "money-policy",
            q: "Which statement best describes fiscal policy?",
            options: [
                "the interest-rate target set by the RBA that influences other interest rates in the economy.",
                "government decisions about spending and taxation that influence the economy.",
                "actions by the RBA to influence interest rates and economic activity.",
                "the RBA aim of keeping inflation within a stable target band over time."
            ],
            answer: 1,
            explain: "This describes fiscal policy because government decisions about spending and taxation that influence the economy."
        },
        {
            id: "c-mcq-354", topic: "money-policy",
            q: "News reports say the RBA has lifted the cash rate again. Which concept is MOST relevant?",
            options: [
                "inflation target",
                "contractionary policy",
                "expansionary policy",
                "cash rate"
            ],
            answer: 3,
            explain: "The scenario is about cash rate because it is a key tool for influencing borrowing, spending and saving."
        },
        {
            id: "c-mcq-355", topic: "money-policy",
            q: "The RBA changes settings to slow inflation or support growth. Which concept is MOST relevant?",
            options: [
                "monetary policy",
                "expansionary policy",
                "effects on savers and borrowers",
                "fiscal policy"
            ],
            answer: 0,
            explain: "The scenario is about monetary policy because it helps manage inflation and overall demand in the economy."
        },
        {
            id: "c-mcq-356", topic: "money-policy",
            q: "Prices are rising too quickly, so the RBA worries inflation will stay too high. Which concept is MOST relevant?",
            options: [
                "fiscal policy",
                "inflation target",
                "cash rate",
                "monetary policy"
            ],
            answer: 1,
            explain: "The scenario is about inflation target because it guides decisions that support price stability."
        },
        {
            id: "c-mcq-357", topic: "money-policy",
            q: "Interest rates rise because demand in the economy is running too hot. Which concept is MOST relevant?",
            options: [
                "monetary policy",
                "inflation target",
                "contractionary policy",
                "expansionary policy"
            ],
            answer: 2,
            explain: "The scenario is about contractionary policy because it can cool price growth when inflation is high."
        },
        {
            id: "c-mcq-358", topic: "money-policy",
            q: "The economy is weak, so rates are lowered to stimulate demand. Which concept is MOST relevant?",
            options: [
                "contractionary policy",
                "effects on savers and borrowers",
                "fiscal policy",
                "expansionary policy"
            ],
            answer: 3,
            explain: "The scenario is about expansionary policy because it can lift activity when unemployment is high or growth is weak."
        },
        {
            id: "c-mcq-359", topic: "money-policy",
            q: "A family with a mortgage and a teenager with a savings account notice the same rate rise differently. Which concept is MOST relevant?",
            options: [
                "effects on savers and borrowers",
                "fiscal policy",
                "cash rate",
                "monetary policy"
            ],
            answer: 0,
            explain: "The scenario is about effects on savers and borrowers because it shows that one policy change creates winners and losers."
        },
        {
            id: "c-mcq-360", topic: "money-policy",
            q: "The government funds infrastructure projects or changes tax rules to affect demand. Which concept is MOST relevant?",
            options: [
                "monetary policy",
                "fiscal policy",
                "inflation target",
                "contractionary policy"
            ],
            answer: 1,
            explain: "The scenario is about fiscal policy because it can support jobs, services and economic stability alongside monetary policy."
        },
        {
            id: "c-mcq-361", topic: "money-policy",
            q: "Why is cash rate important in Commerce?",
            options: [
                "it can cool price growth when inflation is high.",
                "it can lift activity when unemployment is high or growth is weak.",
                "it shows that one policy change creates winners and losers.",
                "it is a key tool for influencing borrowing, spending and saving."
            ],
            answer: 3,
            explain: "This is correct because it is a key tool for influencing borrowing, spending and saving."
        },
        {
            id: "c-mcq-362", topic: "money-policy",
            q: "Why is monetary policy important in Commerce?",
            options: [
                "it helps manage inflation and overall demand in the economy.",
                "it shows that one policy change creates winners and losers.",
                "it can support jobs, services and economic stability alongside monetary policy.",
                "it is a key tool for influencing borrowing, spending and saving."
            ],
            answer: 0,
            explain: "This is correct because it helps manage inflation and overall demand in the economy."
        },
        {
            id: "c-mcq-363", topic: "money-policy",
            q: "Why is inflation target important in Commerce?",
            options: [
                "it is a key tool for influencing borrowing, spending and saving.",
                "it guides decisions that support price stability.",
                "it helps manage inflation and overall demand in the economy.",
                "it can cool price growth when inflation is high."
            ],
            answer: 1,
            explain: "This is correct because it guides decisions that support price stability."
        },
        {
            id: "c-mcq-364", topic: "money-policy",
            q: "Why is contractionary policy important in Commerce?",
            options: [
                "it guides decisions that support price stability.",
                "it can lift activity when unemployment is high or growth is weak.",
                "it can cool price growth when inflation is high.",
                "it shows that one policy change creates winners and losers."
            ],
            answer: 2,
            explain: "This is correct because it can cool price growth when inflation is high."
        },
        {
            id: "c-mcq-365", topic: "money-policy",
            q: "Why is expansionary policy important in Commerce?",
            options: [
                "it shows that one policy change creates winners and losers.",
                "it can support jobs, services and economic stability alongside monetary policy.",
                "it is a key tool for influencing borrowing, spending and saving.",
                "it can lift activity when unemployment is high or growth is weak."
            ],
            answer: 3,
            explain: "This is correct because it can lift activity when unemployment is high or growth is weak."
        },
        {
            id: "c-mcq-366", topic: "money-policy",
            q: "Why is effects on savers and borrowers important in Commerce?",
            options: [
                "it shows that one policy change creates winners and losers.",
                "it is a key tool for influencing borrowing, spending and saving.",
                "it helps manage inflation and overall demand in the economy.",
                "it guides decisions that support price stability."
            ],
            answer: 0,
            explain: "This is correct because it shows that one policy change creates winners and losers."
        },
        {
            id: "c-mcq-367", topic: "money-policy",
            q: "Why is fiscal policy important in Commerce?",
            options: [
                "it guides decisions that support price stability.",
                "it can support jobs, services and economic stability alongside monetary policy.",
                "it can cool price growth when inflation is high.",
                "it can lift activity when unemployment is high or growth is weak."
            ],
            answer: 1,
            explain: "This is correct because it can support jobs, services and economic stability alongside monetary policy."
        },
        {
            id: "c-mcq-368", topic: "money-policy",
            q: "News reports say the RBA has lifted the cash rate again. What is the BEST next step?",
            options: [
                "recognise that cheaper borrowing may increase spending and investment.",
                "consider both sides before judging whether a rate move is good or bad.",
                "distinguish government budget decisions from RBA interest-rate decisions.",
                "expect banks to adjust loan and savings rates after a cash-rate change."
            ],
            answer: 3,
            explain: "The best response is to expect banks to adjust loan and savings rates after a cash-rate change. This fits cash rate because it is a key tool for influencing borrowing, spending and saving."
        },
        {
            id: "c-mcq-369", topic: "money-policy",
            q: "The RBA changes settings to slow inflation or support growth. What is the BEST next step?",
            options: [
                "link rate moves to likely effects on households and businesses.",
                "distinguish government budget decisions from RBA interest-rate decisions.",
                "expect banks to adjust loan and savings rates after a cash-rate change.",
                "compare current inflation with the target when judging policy choices."
            ],
            answer: 0,
            explain: "The best response is to link rate moves to likely effects on households and businesses. This fits monetary policy because it helps manage inflation and overall demand in the economy."
        },
        {
            id: "c-mcq-370", topic: "money-policy",
            q: "Prices are rising too quickly, so the RBA worries inflation will stay too high. What is the BEST next step?",
            options: [
                "link rate moves to likely effects on households and businesses.",
                "compare current inflation with the target when judging policy choices.",
                "prepare for dearer loans and possibly slower consumer spending.",
                "recognise that cheaper borrowing may increase spending and investment."
            ],
            answer: 1,
            explain: "The best response is to compare current inflation with the target when judging policy choices. This fits inflation target because it guides decisions that support price stability."
        },
        {
            id: "c-mcq-371", topic: "money-policy",
            q: "Interest rates rise because demand in the economy is running too hot. What is the BEST next step?",
            options: [
                "recognise that cheaper borrowing may increase spending and investment.",
                "consider both sides before judging whether a rate move is good or bad.",
                "prepare for dearer loans and possibly slower consumer spending.",
                "distinguish government budget decisions from RBA interest-rate decisions."
            ],
            answer: 2,
            explain: "The best response is to prepare for dearer loans and possibly slower consumer spending. This fits contractionary policy because it can cool price growth when inflation is high."
        },
        {
            id: "c-mcq-372", topic: "money-policy",
            q: "The economy is weak, so rates are lowered to stimulate demand. What is the BEST next step?",
            options: [
                "distinguish government budget decisions from RBA interest-rate decisions.",
                "expect banks to adjust loan and savings rates after a cash-rate change.",
                "link rate moves to likely effects on households and businesses.",
                "recognise that cheaper borrowing may increase spending and investment."
            ],
            answer: 3,
            explain: "The best response is to recognise that cheaper borrowing may increase spending and investment. This fits expansionary policy because it can lift activity when unemployment is high or growth is weak."
        },
        {
            id: "c-mcq-373", topic: "money-policy",
            q: "A family with a mortgage and a teenager with a savings account notice the same rate rise differently. What is the BEST next step?",
            options: [
                "consider both sides before judging whether a rate move is good or bad.",
                "link rate moves to likely effects on households and businesses.",
                "compare current inflation with the target when judging policy choices.",
                "prepare for dearer loans and possibly slower consumer spending."
            ],
            answer: 0,
            explain: "The best response is to consider both sides before judging whether a rate move is good or bad. This fits effects on savers and borrowers because it shows that one policy change creates winners and losers."
        },
        {
            id: "c-mcq-374", topic: "money-policy",
            q: "The government funds infrastructure projects or changes tax rules to affect demand. What is the BEST next step?",
            options: [
                "prepare for dearer loans and possibly slower consumer spending.",
                "distinguish government budget decisions from RBA interest-rate decisions.",
                "recognise that cheaper borrowing may increase spending and investment.",
                "consider both sides before judging whether a rate move is good or bad."
            ],
            answer: 1,
            explain: "The best response is to distinguish government budget decisions from RBA interest-rate decisions. This fits fiscal policy because it can support jobs, services and economic stability alongside monetary policy."
        },
        {
            id: "c-mcq-375", topic: "money-policy",
            q: "Which option is the BEST example of cash rate?",
            options: [
                "A saver earning more interest while a borrower pays more on a loan.",
                "Building transport projects to support employment during weak growth.",
                "Lowering rates to encourage borrowing and spending during a slowdown.",
                "Variable mortgage rates rising after an RBA increase."
            ],
            answer: 3,
            explain: "That option is the clearest example of cash rate. the interest-rate target set by the RBA that influences other interest rates in the economy."
        },
        {
            id: "c-mcq-376", topic: "money-policy",
            q: "Which option is the BEST example of monetary policy?",
            options: [
                "Lowering rates to encourage borrowing and spending during a slowdown.",
                "Variable mortgage rates rising after an RBA increase.",
                "Raising interest rates because inflation is above the target band.",
                "Higher rates making big purchases less attractive."
            ],
            answer: 0,
            explain: "That option is the clearest example of monetary policy. actions by the RBA to influence interest rates and economic activity."
        },
        {
            id: "c-mcq-377", topic: "money-policy",
            q: "Which option is the BEST example of inflation target?",
            options: [
                "Higher rates making big purchases less attractive.",
                "Raising interest rates because inflation is above the target band.",
                "Lower loan rates helping a business afford new equipment.",
                "A saver earning more interest while a borrower pays more on a loan."
            ],
            answer: 1,
            explain: "That option is the clearest example of inflation target. the RBA aim of keeping inflation within a stable target band over time."
        },

        /* ===== The business environment — expansion ===== */
        {
            id: "c-mcq-378", topic: "business-environment",
            q: "Which statement best describes location?",
            options: [
                "rivalry between businesses trying to attract the same customers.",
                "laws and rules businesses must follow, such as safety, tax and employment requirements.",
                "the place a business operates and the advantages or disadvantages that come with it.",
                "digital tools and online selling methods that change how businesses operate."
            ],
            answer: 2,
            explain: "This describes location because the place a business operates and the advantages or disadvantages that come with it."
        },
        {
            id: "c-mcq-379", topic: "business-environment",
            q: "Which statement best describes competition?",
            options: [
                "digital tools and online selling methods that change how businesses operate.",
                "introducing new ideas, products or processes to improve business performance.",
                "the willingness to take initiative and build a business from an idea.",
                "rivalry between businesses trying to attract the same customers."
            ],
            answer: 3,
            explain: "This describes competition because rivalry between businesses trying to attract the same customers."
        },
        {
            id: "c-mcq-380", topic: "business-environment",
            q: "Which statement best describes government regulation?",
            options: [
                "laws and rules businesses must follow, such as safety, tax and employment requirements.",
                "the willingness to take initiative and build a business from an idea.",
                "the growing connection between businesses, markets and ideas across countries.",
                "the place a business operates and the advantages or disadvantages that come with it."
            ],
            answer: 0,
            explain: "This describes government regulation because laws and rules businesses must follow, such as safety, tax and employment requirements."
        },
        {
            id: "c-mcq-381", topic: "business-environment",
            q: "Which statement best describes technology and e-commerce?",
            options: [
                "the place a business operates and the advantages or disadvantages that come with it.",
                "digital tools and online selling methods that change how businesses operate.",
                "rivalry between businesses trying to attract the same customers.",
                "laws and rules businesses must follow, such as safety, tax and employment requirements."
            ],
            answer: 1,
            explain: "This describes technology and e-commerce because digital tools and online selling methods that change how businesses operate."
        },
        {
            id: "c-mcq-382", topic: "business-environment",
            q: "Which statement best describes innovation?",
            options: [
                "laws and rules businesses must follow, such as safety, tax and employment requirements.",
                "digital tools and online selling methods that change how businesses operate.",
                "introducing new ideas, products or processes to improve business performance.",
                "the willingness to take initiative and build a business from an idea."
            ],
            answer: 2,
            explain: "This describes innovation because introducing new ideas, products or processes to improve business performance."
        },
        {
            id: "c-mcq-383", topic: "business-environment",
            q: "Which statement best describes entrepreneurship?",
            options: [
                "introducing new ideas, products or processes to improve business performance.",
                "the growing connection between businesses, markets and ideas across countries.",
                "the place a business operates and the advantages or disadvantages that come with it.",
                "the willingness to take initiative and build a business from an idea."
            ],
            answer: 3,
            explain: "This describes entrepreneurship because the willingness to take initiative and build a business from an idea."
        },
        {
            id: "c-mcq-384", topic: "business-environment",
            q: "Which statement best describes globalisation?",
            options: [
                "the growing connection between businesses, markets and ideas across countries.",
                "the place a business operates and the advantages or disadvantages that come with it.",
                "rivalry between businesses trying to attract the same customers.",
                "laws and rules businesses must follow, such as safety, tax and employment requirements."
            ],
            answer: 0,
            explain: "This describes globalisation because the growing connection between businesses, markets and ideas across countries."
        },
        {
            id: "c-mcq-385", topic: "business-environment",
            q: "A café chooses between a busy station, a shopping strip or an online-only model. Which concept is MOST relevant?",
            options: [
                "government regulation",
                "technology and e-commerce",
                "location",
                "innovation"
            ],
            answer: 2,
            explain: "The scenario is about location because good location can lift sales, convenience and brand visibility."
        },
        {
            id: "c-mcq-386", topic: "business-environment",
            q: "Two bubble-tea shops open on the same street and both want student customers. Which concept is MOST relevant?",
            options: [
                "innovation",
                "entrepreneurship",
                "globalisation",
                "competition"
            ],
            answer: 3,
            explain: "The scenario is about competition because it can improve value, service and innovation."
        },
        {
            id: "c-mcq-387", topic: "business-environment",
            q: "A food business must follow health rules before selling meals. Which concept is MOST relevant?",
            options: [
                "government regulation",
                "globalisation",
                "location",
                "competition"
            ],
            answer: 0,
            explain: "The scenario is about government regulation because regulation protects workers, customers and fair trading."
        },
        {
            id: "c-mcq-388", topic: "business-environment",
            q: "A small shop begins taking online orders and using social-media ads. Which concept is MOST relevant?",
            options: [
                "competition",
                "technology and e-commerce",
                "government regulation",
                "innovation"
            ],
            answer: 1,
            explain: "The scenario is about technology and e-commerce because they can expand reach and improve efficiency."
        },
        {
            id: "c-mcq-389", topic: "business-environment",
            q: "A store tests a refill station to reduce packaging and attract new buyers. Which concept is MOST relevant?",
            options: [
                "technology and e-commerce",
                "entrepreneurship",
                "innovation",
                "globalisation"
            ],
            answer: 2,
            explain: "The scenario is about innovation because it helps businesses stay relevant and competitive."
        },
        {
            id: "c-mcq-390", topic: "business-environment",
            q: "Two students see demand for custom study notes and start a small venture. Which concept is MOST relevant?",
            options: [
                "globalisation",
                "location",
                "competition",
                "entrepreneurship"
            ],
            answer: 3,
            explain: "The scenario is about entrepreneurship because it encourages creativity, problem-solving and calculated risk taking."
        },
        {
            id: "c-mcq-391", topic: "business-environment",
            q: "A local retailer sells imported products and also faces overseas online competitors. Which concept is MOST relevant?",
            options: [
                "globalisation",
                "competition",
                "government regulation",
                "technology and e-commerce"
            ],
            answer: 0,
            explain: "The scenario is about globalisation because it gives businesses bigger markets and more supplier choices."
        },
        {
            id: "c-mcq-392", topic: "business-environment",
            q: "Why is location important in Commerce?",
            options: [
                "they can expand reach and improve efficiency.",
                "it helps businesses stay relevant and competitive.",
                "good location can lift sales, convenience and brand visibility.",
                "it encourages creativity, problem-solving and calculated risk taking."
            ],
            answer: 2,
            explain: "This is correct because good location can lift sales, convenience and brand visibility."
        },
        {
            id: "c-mcq-393", topic: "business-environment",
            q: "Why is competition important in Commerce?",
            options: [
                "it encourages creativity, problem-solving and calculated risk taking.",
                "it gives businesses bigger markets and more supplier choices.",
                "good location can lift sales, convenience and brand visibility.",
                "it can improve value, service and innovation."
            ],
            answer: 3,
            explain: "This is correct because it can improve value, service and innovation."
        },
        {
            id: "c-mcq-394", topic: "business-environment",
            q: "Why is government regulation important in Commerce?",
            options: [
                "regulation protects workers, customers and fair trading.",
                "good location can lift sales, convenience and brand visibility.",
                "it can improve value, service and innovation.",
                "they can expand reach and improve efficiency."
            ],
            answer: 0,
            explain: "This is correct because regulation protects workers, customers and fair trading."
        },
        {
            id: "c-mcq-395", topic: "business-environment",
            q: "Why is technology and e-commerce important in Commerce?",
            options: [
                "regulation protects workers, customers and fair trading.",
                "they can expand reach and improve efficiency.",
                "it helps businesses stay relevant and competitive.",
                "it encourages creativity, problem-solving and calculated risk taking."
            ],
            answer: 1,
            explain: "This is correct because they can expand reach and improve efficiency."
        },
        {
            id: "c-mcq-396", topic: "business-environment",
            q: "Why is innovation important in Commerce?",
            options: [
                "it encourages creativity, problem-solving and calculated risk taking.",
                "it gives businesses bigger markets and more supplier choices.",
                "it helps businesses stay relevant and competitive.",
                "good location can lift sales, convenience and brand visibility."
            ],
            answer: 2,
            explain: "This is correct because it helps businesses stay relevant and competitive."
        },
        {
            id: "c-mcq-397", topic: "business-environment",
            q: "Why is entrepreneurship important in Commerce?",
            options: [
                "good location can lift sales, convenience and brand visibility.",
                "it can improve value, service and innovation.",
                "regulation protects workers, customers and fair trading.",
                "it encourages creativity, problem-solving and calculated risk taking."
            ],
            answer: 3,
            explain: "This is correct because it encourages creativity, problem-solving and calculated risk taking."
        },
        {
            id: "c-mcq-398", topic: "business-environment",
            q: "Why is globalisation important in Commerce?",
            options: [
                "it gives businesses bigger markets and more supplier choices.",
                "regulation protects workers, customers and fair trading.",
                "they can expand reach and improve efficiency.",
                "it helps businesses stay relevant and competitive."
            ],
            answer: 0,
            explain: "This is correct because it gives businesses bigger markets and more supplier choices."
        },
        {
            id: "c-mcq-399", topic: "business-environment",
            q: "A café chooses between a busy station, a shopping strip or an online-only model. What is the BEST next step?",
            options: [
                "trial ideas, gather feedback and refine what works.",
                "research the market, test the idea and plan costs before launching.",
                "compare customer access, rent, competition and nearby services before deciding.",
                "consider exchange rates, shipping, culture and overseas competition in planning."
            ],
            answer: 2,
            explain: "The best response is to compare customer access, rent, competition and nearby services before deciding. This fits location because good location can lift sales, convenience and brand visibility."
        },
        {
            id: "c-mcq-400", topic: "business-environment",
            q: "Two bubble-tea shops open on the same street and both want student customers. What is the BEST next step?",
            options: [
                "consider exchange rates, shipping, culture and overseas competition in planning.",
                "compare customer access, rent, competition and nearby services before deciding.",
                "check the relevant rules before operating and keep records to show compliance.",
                "differentiate the business through price, quality, service or branding."
            ],
            answer: 3,
            explain: "The best response is to differentiate the business through price, quality, service or branding. This fits competition because it can improve value, service and innovation."
        },
        {
            id: "c-mcq-401", topic: "business-environment",
            q: "A food business must follow health rules before selling meals. What is the BEST next step?",
            options: [
                "check the relevant rules before operating and keep records to show compliance.",
                "differentiate the business through price, quality, service or branding.",
                "choose technology that suits customers, budget and business goals.",
                "trial ideas, gather feedback and refine what works."
            ],
            answer: 0,
            explain: "The best response is to check the relevant rules before operating and keep records to show compliance. This fits government regulation because regulation protects workers, customers and fair trading."
        },
        {
            id: "c-mcq-402", topic: "business-environment",
            q: "A small shop begins taking online orders and using social-media ads. What is the BEST next step?",
            options: [
                "trial ideas, gather feedback and refine what works.",
                "choose technology that suits customers, budget and business goals.",
                "research the market, test the idea and plan costs before launching.",
                "consider exchange rates, shipping, culture and overseas competition in planning."
            ],
            answer: 1,
            explain: "The best response is to choose technology that suits customers, budget and business goals. This fits technology and e-commerce because they can expand reach and improve efficiency."
        },
        {
            id: "c-mcq-403", topic: "business-environment",
            q: "A store tests a refill station to reduce packaging and attract new buyers. What is the BEST next step?",
            options: [
                "consider exchange rates, shipping, culture and overseas competition in planning.",
                "compare customer access, rent, competition and nearby services before deciding.",
                "trial ideas, gather feedback and refine what works.",
                "differentiate the business through price, quality, service or branding."
            ],
            answer: 2,
            explain: "The best response is to trial ideas, gather feedback and refine what works. This fits innovation because it helps businesses stay relevant and competitive."
        },
        {
            id: "c-mcq-404", topic: "business-environment",
            q: "Two students see demand for custom study notes and start a small venture. What is the BEST next step?",
            options: [
                "differentiate the business through price, quality, service or branding.",
                "check the relevant rules before operating and keep records to show compliance.",
                "choose technology that suits customers, budget and business goals.",
                "research the market, test the idea and plan costs before launching."
            ],
            answer: 3,
            explain: "The best response is to research the market, test the idea and plan costs before launching. This fits entrepreneurship because it encourages creativity, problem-solving and calculated risk taking."
        },
        {
            id: "c-mcq-405", topic: "business-environment",
            q: "A local retailer sells imported products and also faces overseas online competitors. What is the BEST next step?",
            options: [
                "consider exchange rates, shipping, culture and overseas competition in planning.",
                "choose technology that suits customers, budget and business goals.",
                "trial ideas, gather feedback and refine what works.",
                "research the market, test the idea and plan costs before launching."
            ],
            answer: 0,
            explain: "The best response is to consider exchange rates, shipping, culture and overseas competition in planning. This fits globalisation because it gives businesses bigger markets and more supplier choices."
        },
        {
            id: "c-mcq-406", topic: "business-environment",
            q: "Which option is the BEST example of location?",
            options: [
                "Starting a weekend dog-washing business after noticing local demand.",
                "An Australian store selling products made in another country through its website.",
                "Opening a lunch shop near a school because many customers walk past each day.",
                "A café adding a loyalty card because similar cafés are nearby."
            ],
            answer: 2,
            explain: "That option is the clearest example of location. the place a business operates and the advantages or disadvantages that come with it."
        },
        {
            id: "c-mcq-407", topic: "business-environment",
            q: "Which option is the BEST example of competition?",
            options: [
                "Opening a lunch shop near a school because many customers walk past each day.",
                "A café training staff in food safety before opening.",
                "A florist using an online booking system for local deliveries.",
                "A café adding a loyalty card because similar cafés are nearby."
            ],
            answer: 3,
            explain: "That option is the clearest example of competition. rivalry between businesses trying to attract the same customers."
        },
        {
            id: "c-mcq-408", topic: "business-environment",
            q: "Which option is the BEST example of government regulation?",
            options: [
                "A café training staff in food safety before opening.",
                "A florist using an online booking system for local deliveries.",
                "A café creating a pre-order app for busy morning customers.",
                "Starting a weekend dog-washing business after noticing local demand."
            ],
            answer: 0,
            explain: "That option is the clearest example of government regulation. laws and rules businesses must follow, such as safety, tax and employment requirements."
        },

        /* ===== Business ownership types — expansion ===== */
        {
            id: "c-mcq-409", topic: "business-types",
            q: "Which statement best describes sole trader?",
            options: [
                "a business owned by two or more people who share decisions, profits and risks.",
                "a business owned and run by one person.",
                "a separate legal entity owned by shareholders.",
                "a business using another business brand, systems and support in exchange for fees."
            ],
            answer: 1,
            explain: "This describes sole trader because a business owned and run by one person."
        },
        {
            id: "c-mcq-410", topic: "business-types",
            q: "Which statement best describes partnership?",
            options: [
                "a business using another business brand, systems and support in exchange for fees.",
                "an organisation owned and controlled by members for their shared benefit.",
                "a business owned by two or more people who share decisions, profits and risks.",
                "an organisation that uses surplus funds to support its purpose rather than pay profits to owners."
            ],
            answer: 2,
            explain: "This describes partnership because a business owned by two or more people who share decisions, profits and risks."
        },
        {
            id: "c-mcq-411", topic: "business-types",
            q: "Which statement best describes company?",
            options: [
                "an organisation that uses surplus funds to support its purpose rather than pay profits to owners.",
                "protection that limits how much owners or shareholders can lose personally from business debts.",
                "a business owned and run by one person.",
                "a separate legal entity owned by shareholders."
            ],
            answer: 3,
            explain: "This describes company because a separate legal entity owned by shareholders."
        },
        {
            id: "c-mcq-412", topic: "business-types",
            q: "Which statement best describes franchise?",
            options: [
                "a business using another business brand, systems and support in exchange for fees.",
                "a business owned and run by one person.",
                "a business owned by two or more people who share decisions, profits and risks.",
                "a separate legal entity owned by shareholders."
            ],
            answer: 0,
            explain: "This describes franchise because a business using another business brand, systems and support in exchange for fees."
        },
        {
            id: "c-mcq-413", topic: "business-types",
            q: "Which statement best describes co-operative?",
            options: [
                "a separate legal entity owned by shareholders.",
                "an organisation owned and controlled by members for their shared benefit.",
                "a business using another business brand, systems and support in exchange for fees.",
                "an organisation that uses surplus funds to support its purpose rather than pay profits to owners."
            ],
            answer: 1,
            explain: "This describes co-operative because an organisation owned and controlled by members for their shared benefit."
        },
        {
            id: "c-mcq-414", topic: "business-types",
            q: "Which statement best describes not-for-profit organisation?",
            options: [
                "an organisation owned and controlled by members for their shared benefit.",
                "protection that limits how much owners or shareholders can lose personally from business debts.",
                "an organisation that uses surplus funds to support its purpose rather than pay profits to owners.",
                "a business owned and run by one person."
            ],
            answer: 2,
            explain: "This describes not-for-profit organisation because an organisation that uses surplus funds to support its purpose rather than pay profits to owners."
        },
        {
            id: "c-mcq-415", topic: "business-types",
            q: "Which statement best describes limited liability?",
            options: [
                "a business owned and run by one person.",
                "a business owned by two or more people who share decisions, profits and risks.",
                "a separate legal entity owned by shareholders.",
                "protection that limits how much owners or shareholders can lose personally from business debts."
            ],
            answer: 3,
            explain: "This describes limited liability because protection that limits how much owners or shareholders can lose personally from business debts."
        },
        {
            id: "c-mcq-416", topic: "business-types",
            q: "One student runs a weekend lawn-mowing business alone. Which concept is MOST relevant?",
            options: [
                "company",
                "sole trader",
                "franchise",
                "co-operative"
            ],
            answer: 1,
            explain: "The scenario is about sole trader because it is simple to set up and gives the owner full control."
        },
        {
            id: "c-mcq-417", topic: "business-types",
            q: "Two friends run a market stall together and split the work. Which concept is MOST relevant?",
            options: [
                "co-operative",
                "not-for-profit organisation",
                "partnership",
                "limited liability"
            ],
            answer: 2,
            explain: "The scenario is about partnership because it combines capital, ideas and workload."
        },
        {
            id: "c-mcq-418", topic: "business-types",
            q: "A growing business wants to raise more capital and separate personal assets from business debts. Which concept is MOST relevant?",
            options: [
                "limited liability",
                "sole trader",
                "partnership",
                "company"
            ],
            answer: 3,
            explain: "The scenario is about company because it can continue beyond one owner and offers limited liability to shareholders."
        },
        {
            id: "c-mcq-419", topic: "business-types",
            q: "A buyer wants to open a store using an established fast-food brand. Which concept is MOST relevant?",
            options: [
                "franchise",
                "partnership",
                "company",
                "co-operative"
            ],
            answer: 0,
            explain: "The scenario is about franchise because it provides a known brand and proven systems."
        },
        {
            id: "c-mcq-420", topic: "business-types",
            q: "A group of producers wants equal voting power and shared services. Which concept is MOST relevant?",
            options: [
                "franchise",
                "co-operative",
                "not-for-profit organisation",
                "limited liability"
            ],
            answer: 1,
            explain: "The scenario is about co-operative because it promotes democratic control and member support."
        },
        {
            id: "c-mcq-421", topic: "business-types",
            q: "A community group runs a shop to raise money for youth programs. Which concept is MOST relevant?",
            options: [
                "limited liability",
                "sole trader",
                "not-for-profit organisation",
                "partnership"
            ],
            answer: 2,
            explain: "The scenario is about not-for-profit organisation because it focuses on a social, cultural or community mission."
        },
        {
            id: "c-mcq-422", topic: "business-types",
            q: "A company owes money, but shareholders do not have to sell personal assets beyond their investment. Which concept is MOST relevant?",
            options: [
                "partnership",
                "company",
                "franchise",
                "limited liability"
            ],
            answer: 3,
            explain: "The scenario is about limited liability because it reduces personal risk and can encourage investment."
        },
        {
            id: "c-mcq-423", topic: "business-types",
            q: "Why is sole trader important in Commerce?",
            options: [
                "it provides a known brand and proven systems.",
                "it is simple to set up and gives the owner full control.",
                "it promotes democratic control and member support.",
                "it focuses on a social, cultural or community mission."
            ],
            answer: 1,
            explain: "This is correct because it is simple to set up and gives the owner full control."
        },
        {
            id: "c-mcq-424", topic: "business-types",
            q: "Why is partnership important in Commerce?",
            options: [
                "it focuses on a social, cultural or community mission.",
                "it reduces personal risk and can encourage investment.",
                "it combines capital, ideas and workload.",
                "it is simple to set up and gives the owner full control."
            ],
            answer: 2,
            explain: "This is correct because it combines capital, ideas and workload."
        },
        {
            id: "c-mcq-425", topic: "business-types",
            q: "Why is company important in Commerce?",
            options: [
                "it is simple to set up and gives the owner full control.",
                "it combines capital, ideas and workload.",
                "it provides a known brand and proven systems.",
                "it can continue beyond one owner and offers limited liability to shareholders."
            ],
            answer: 3,
            explain: "This is correct because it can continue beyond one owner and offers limited liability to shareholders."
        },
        {
            id: "c-mcq-426", topic: "business-types",
            q: "Why is franchise important in Commerce?",
            options: [
                "it provides a known brand and proven systems.",
                "it can continue beyond one owner and offers limited liability to shareholders.",
                "it promotes democratic control and member support.",
                "it focuses on a social, cultural or community mission."
            ],
            answer: 0,
            explain: "This is correct because it provides a known brand and proven systems."
        },
        {
            id: "c-mcq-427", topic: "business-types",
            q: "Why is co-operative important in Commerce?",
            options: [
                "it focuses on a social, cultural or community mission.",
                "it promotes democratic control and member support.",
                "it reduces personal risk and can encourage investment.",
                "it is simple to set up and gives the owner full control."
            ],
            answer: 1,
            explain: "This is correct because it promotes democratic control and member support."
        },
        {
            id: "c-mcq-428", topic: "business-types",
            q: "Why is not-for-profit organisation important in Commerce?",
            options: [
                "it is simple to set up and gives the owner full control.",
                "it combines capital, ideas and workload.",
                "it focuses on a social, cultural or community mission.",
                "it can continue beyond one owner and offers limited liability to shareholders."
            ],
            answer: 2,
            explain: "This is correct because it focuses on a social, cultural or community mission."
        },
        {
            id: "c-mcq-429", topic: "business-types",
            q: "Why is limited liability important in Commerce?",
            options: [
                "it can continue beyond one owner and offers limited liability to shareholders.",
                "it provides a known brand and proven systems.",
                "it promotes democratic control and member support.",
                "it reduces personal risk and can encourage investment."
            ],
            answer: 3,
            explain: "This is correct because it reduces personal risk and can encourage investment."
        },
        {
            id: "c-mcq-430", topic: "business-types",
            q: "One student runs a weekend lawn-mowing business alone. What is the BEST next step?",
            options: [
                "join or form it when collective benefits matter more than outside investors.",
                "keep clear records and remember the owner is personally responsible for the business.",
                "manage money carefully so the mission can continue.",
                "understand which business structures offer it and which do not."
            ],
            answer: 1,
            explain: "The best response is to keep clear records and remember the owner is personally responsible for the business. This fits sole trader because it is simple to set up and gives the owner full control."
        },
        {
            id: "c-mcq-431", topic: "business-types",
            q: "Two friends run a market stall together and split the work. What is the BEST next step?",
            options: [
                "understand which business structures offer it and which do not.",
                "keep clear records and remember the owner is personally responsible for the business.",
                "write a partnership agreement before trading.",
                "follow company rules, reporting duties and director responsibilities."
            ],
            answer: 2,
            explain: "The best response is to write a partnership agreement before trading. This fits partnership because it combines capital, ideas and workload."
        },
        {
            id: "c-mcq-432", topic: "business-types",
            q: "A growing business wants to raise more capital and separate personal assets from business debts. What is the BEST next step?",
            options: [
                "write a partnership agreement before trading.",
                "read the franchise agreement carefully before signing.",
                "join or form it when collective benefits matter more than outside investors.",
                "follow company rules, reporting duties and director responsibilities."
            ],
            answer: 3,
            explain: "The best response is to follow company rules, reporting duties and director responsibilities. This fits company because it can continue beyond one owner and offers limited liability to shareholders."
        },
        {
            id: "c-mcq-433", topic: "business-types",
            q: "A buyer wants to open a store using an established fast-food brand. What is the BEST next step?",
            options: [
                "read the franchise agreement carefully before signing.",
                "join or form it when collective benefits matter more than outside investors.",
                "manage money carefully so the mission can continue.",
                "understand which business structures offer it and which do not."
            ],
            answer: 0,
            explain: "The best response is to read the franchise agreement carefully before signing. This fits franchise because it provides a known brand and proven systems."
        },
        {
            id: "c-mcq-434", topic: "business-types",
            q: "A group of producers wants equal voting power and shared services. What is the BEST next step?",
            options: [
                "understand which business structures offer it and which do not.",
                "join or form it when collective benefits matter more than outside investors.",
                "keep clear records and remember the owner is personally responsible for the business.",
                "write a partnership agreement before trading."
            ],
            answer: 1,
            explain: "The best response is to join or form it when collective benefits matter more than outside investors. This fits co-operative because it promotes democratic control and member support."
        },
        {
            id: "c-mcq-435", topic: "business-types",
            q: "A community group runs a shop to raise money for youth programs. What is the BEST next step?",
            options: [
                "write a partnership agreement before trading.",
                "follow company rules, reporting duties and director responsibilities.",
                "manage money carefully so the mission can continue.",
                "read the franchise agreement carefully before signing."
            ],
            answer: 2,
            explain: "The best response is to manage money carefully so the mission can continue. This fits not-for-profit organisation because it focuses on a social, cultural or community mission."
        },
        {
            id: "c-mcq-436", topic: "business-types",
            q: "A company owes money, but shareholders do not have to sell personal assets beyond their investment. What is the BEST next step?",
            options: [
                "read the franchise agreement carefully before signing.",
                "join or form it when collective benefits matter more than outside investors.",
                "manage money carefully so the mission can continue.",
                "understand which business structures offer it and which do not."
            ],
            answer: 3,
            explain: "The best response is to understand which business structures offer it and which do not. This fits limited liability because it reduces personal risk and can encourage investment."
        },
        {
            id: "c-mcq-437", topic: "business-types",
            q: "Which option is the BEST example of sole trader?",
            options: [
                "A charity op shop using sales to fund local services.",
                "A local dog walker operating under one owner name.",
                "Shareholders in a Pty Ltd company losing only the money invested in shares.",
                "Two siblings sharing ownership of a home baking business."
            ],
            answer: 1,
            explain: "That option is the clearest example of sole trader. a business owned and run by one person."
        },
        {
            id: "c-mcq-438", topic: "business-types",
            q: "Which option is the BEST example of partnership?",
            options: [
                "A local dog walker operating under one owner name.",
                "A proprietary limited company running several stores.",
                "Two siblings sharing ownership of a home baking business.",
                "Operating a well-known food outlet under a franchisor."
            ],
            answer: 2,
            explain: "That option is the clearest example of partnership. a business owned by two or more people who share decisions, profits and risks."
        },
        {
            id: "c-mcq-439", topic: "business-types",
            q: "Which option is the BEST example of company?",
            options: [
                "Operating a well-known food outlet under a franchisor.",
                "Farmers working together through a co-operative to market produce.",
                "A charity op shop using sales to fund local services.",
                "A proprietary limited company running several stores."
            ],
            answer: 3,
            explain: "That option is the clearest example of company. a separate legal entity owned by shareholders."
        },

        /* ===== Stakeholders & corporate responsibility — expansion ===== */
        {
            id: "c-mcq-440", topic: "business-stakeholders",
            q: "Which statement best describes owners?",
            options: [
                "the people who invest in and control a business.",
                "workers whose pay, safety and training are affected by business decisions.",
                "the people who buy the goods or services of the business.",
                "businesses or people who provide stock, materials or services."
            ],
            answer: 0,
            explain: "This describes owners because the people who invest in and control a business."
        },
        {
            id: "c-mcq-441", topic: "business-stakeholders",
            q: "Which statement best describes employees?",
            options: [
                "businesses or people who provide stock, materials or services.",
                "workers whose pay, safety and training are affected by business decisions.",
                "the local area and wider society affected by a business.",
                "local, state and federal authorities that collect tax and enforce laws."
            ],
            answer: 1,
            explain: "This describes employees because workers whose pay, safety and training are affected by business decisions."
        },
        {
            id: "c-mcq-442", topic: "business-stakeholders",
            q: "Which statement best describes customers?",
            options: [
                "local, state and federal authorities that collect tax and enforce laws.",
                "measuring success by profit, people and planet, not profit alone.",
                "the people who buy the goods or services of the business.",
                "the people who invest in and control a business."
            ],
            answer: 2,
            explain: "This describes customers because the people who buy the goods or services of the business."
        },
        {
            id: "c-mcq-443", topic: "business-stakeholders",
            q: "Which statement best describes suppliers?",
            options: [
                "the people who invest in and control a business.",
                "workers whose pay, safety and training are affected by business decisions.",
                "the people who buy the goods or services of the business.",
                "businesses or people who provide stock, materials or services."
            ],
            answer: 3,
            explain: "This describes suppliers because businesses or people who provide stock, materials or services."
        },
        {
            id: "c-mcq-444", topic: "business-stakeholders",
            q: "Which statement best describes community?",
            options: [
                "the local area and wider society affected by a business.",
                "the people who buy the goods or services of the business.",
                "businesses or people who provide stock, materials or services.",
                "local, state and federal authorities that collect tax and enforce laws."
            ],
            answer: 0,
            explain: "This describes community because the local area and wider society affected by a business."
        },
        {
            id: "c-mcq-445", topic: "business-stakeholders",
            q: "Which statement best describes government?",
            options: [
                "the local area and wider society affected by a business.",
                "local, state and federal authorities that collect tax and enforce laws.",
                "measuring success by profit, people and planet, not profit alone.",
                "the people who invest in and control a business."
            ],
            answer: 1,
            explain: "This describes government because local, state and federal authorities that collect tax and enforce laws."
        },
        {
            id: "c-mcq-446", topic: "business-stakeholders",
            q: "Which statement best describes triple bottom line?",
            options: [
                "the people who invest in and control a business.",
                "workers whose pay, safety and training are affected by business decisions.",
                "measuring success by profit, people and planet, not profit alone.",
                "the people who buy the goods or services of the business."
            ],
            answer: 2,
            explain: "This describes triple bottom line because measuring success by profit, people and planet, not profit alone."
        },
        {
            id: "c-mcq-447", topic: "business-stakeholders",
            q: "Owners want higher profit while deciding whether to expand. Which concept is MOST relevant?",
            options: [
                "owners",
                "customers",
                "suppliers",
                "community"
            ],
            answer: 0,
            explain: "The scenario is about owners because understanding their goals helps explain many business choices."
        },
        {
            id: "c-mcq-448", topic: "business-stakeholders",
            q: "A business changes rosters and training after introducing new technology. Which concept is MOST relevant?",
            options: [
                "community",
                "employees",
                "government",
                "triple bottom line"
            ],
            answer: 1,
            explain: "The scenario is about employees because considering employees can improve morale and productivity."
        },
        {
            id: "c-mcq-449", topic: "business-stakeholders",
            q: "A shop changes its opening hours after customer feedback. Which concept is MOST relevant?",
            options: [
                "triple bottom line",
                "owners",
                "customers",
                "employees"
            ],
            answer: 2,
            explain: "The scenario is about customers because satisfying customers supports repeat sales and reputation."
        },
        {
            id: "c-mcq-450", topic: "business-stakeholders",
            q: "A café depends on a bakery delivering fresh products on time. Which concept is MOST relevant?",
            options: [
                "employees",
                "customers",
                "community",
                "suppliers"
            ],
            answer: 3,
            explain: "The scenario is about suppliers because strong supplier relationships improve reliability and quality."
        },
        {
            id: "c-mcq-451", topic: "business-stakeholders",
            q: "A new factory creates jobs but also increases traffic and noise. Which concept is MOST relevant?",
            options: [
                "community",
                "suppliers",
                "government",
                "triple bottom line"
            ],
            answer: 0,
            explain: "The scenario is about community because considering community impact helps businesses earn trust and support."
        },
        {
            id: "c-mcq-452", topic: "business-stakeholders",
            q: "A business must obey safety, tax and employment rules. Which concept is MOST relevant?",
            options: [
                "triple bottom line",
                "government",
                "owners",
                "employees"
            ],
            answer: 1,
            explain: "The scenario is about government because government oversight helps keep markets fair and safe."
        },
        {
            id: "c-mcq-453", topic: "business-stakeholders",
            q: "A business chooses reusable packaging even though it costs more at first. Which concept is MOST relevant?",
            options: [
                "employees",
                "customers",
                "triple bottom line",
                "suppliers"
            ],
            answer: 2,
            explain: "The scenario is about triple bottom line because it encourages decisions that are financially, socially and environmentally responsible."
        },
        {
            id: "c-mcq-454", topic: "business-stakeholders",
            q: "Why is owners important in Commerce?",
            options: [
                "understanding their goals helps explain many business choices.",
                "strong supplier relationships improve reliability and quality.",
                "considering community impact helps businesses earn trust and support.",
                "government oversight helps keep markets fair and safe."
            ],
            answer: 0,
            explain: "This is correct because understanding their goals helps explain many business choices."
        },
        {
            id: "c-mcq-455", topic: "business-stakeholders",
            q: "Why is employees important in Commerce?",
            options: [
                "government oversight helps keep markets fair and safe.",
                "considering employees can improve morale and productivity.",
                "it encourages decisions that are financially, socially and environmentally responsible.",
                "understanding their goals helps explain many business choices."
            ],
            answer: 1,
            explain: "This is correct because considering employees can improve morale and productivity."
        },
        {
            id: "c-mcq-456", topic: "business-stakeholders",
            q: "Why is customers important in Commerce?",
            options: [
                "understanding their goals helps explain many business choices.",
                "considering employees can improve morale and productivity.",
                "satisfying customers supports repeat sales and reputation.",
                "strong supplier relationships improve reliability and quality."
            ],
            answer: 2,
            explain: "This is correct because satisfying customers supports repeat sales and reputation."
        },
        {
            id: "c-mcq-457", topic: "business-stakeholders",
            q: "Why is suppliers important in Commerce?",
            options: [
                "satisfying customers supports repeat sales and reputation.",
                "considering community impact helps businesses earn trust and support.",
                "government oversight helps keep markets fair and safe.",
                "strong supplier relationships improve reliability and quality."
            ],
            answer: 3,
            explain: "This is correct because strong supplier relationships improve reliability and quality."
        },
        {
            id: "c-mcq-458", topic: "business-stakeholders",
            q: "Why is community important in Commerce?",
            options: [
                "considering community impact helps businesses earn trust and support.",
                "government oversight helps keep markets fair and safe.",
                "it encourages decisions that are financially, socially and environmentally responsible.",
                "understanding their goals helps explain many business choices."
            ],
            answer: 0,
            explain: "This is correct because considering community impact helps businesses earn trust and support."
        },
        {
            id: "c-mcq-459", topic: "business-stakeholders",
            q: "Why is government important in Commerce?",
            options: [
                "understanding their goals helps explain many business choices.",
                "government oversight helps keep markets fair and safe.",
                "considering employees can improve morale and productivity.",
                "satisfying customers supports repeat sales and reputation."
            ],
            answer: 1,
            explain: "This is correct because government oversight helps keep markets fair and safe."
        },
        {
            id: "c-mcq-460", topic: "business-stakeholders",
            q: "Why is triple bottom line important in Commerce?",
            options: [
                "satisfying customers supports repeat sales and reputation.",
                "strong supplier relationships improve reliability and quality.",
                "it encourages decisions that are financially, socially and environmentally responsible.",
                "considering community impact helps businesses earn trust and support."
            ],
            answer: 2,
            explain: "This is correct because it encourages decisions that are financially, socially and environmentally responsible."
        },
        {
            id: "c-mcq-461", topic: "business-stakeholders",
            q: "Owners want higher profit while deciding whether to expand. What is the BEST next step?",
            options: [
                "balance profit goals with the needs of other stakeholders.",
                "reduce negative impacts and contribute positively where possible.",
                "follow laws and respond properly to inspections or reporting duties.",
                "weigh financial, social and environmental outcomes before making major choices."
            ],
            answer: 0,
            explain: "The best response is to balance profit goals with the needs of other stakeholders. This fits owners because understanding their goals helps explain many business choices."
        },
        {
            id: "c-mcq-462", topic: "business-stakeholders",
            q: "A business changes rosters and training after introducing new technology. What is the BEST next step?",
            options: [
                "weigh financial, social and environmental outcomes before making major choices.",
                "consult staff and provide fair conditions when changes are made.",
                "balance profit goals with the needs of other stakeholders.",
                "listen to complaints, improve quality and communicate honestly."
            ],
            answer: 1,
            explain: "The best response is to consult staff and provide fair conditions when changes are made. This fits employees because considering employees can improve morale and productivity."
        },
        {
            id: "c-mcq-463", topic: "business-stakeholders",
            q: "A shop changes its opening hours after customer feedback. What is the BEST next step?",
            options: [
                "consult staff and provide fair conditions when changes are made.",
                "pay on time and communicate clearly about orders and expectations.",
                "listen to complaints, improve quality and communicate honestly.",
                "reduce negative impacts and contribute positively where possible."
            ],
            answer: 2,
            explain: "The best response is to listen to complaints, improve quality and communicate honestly. This fits customers because satisfying customers supports repeat sales and reputation."
        },
        {
            id: "c-mcq-464", topic: "business-stakeholders",
            q: "A café depends on a bakery delivering fresh products on time. What is the BEST next step?",
            options: [
                "reduce negative impacts and contribute positively where possible.",
                "follow laws and respond properly to inspections or reporting duties.",
                "weigh financial, social and environmental outcomes before making major choices.",
                "pay on time and communicate clearly about orders and expectations."
            ],
            answer: 3,
            explain: "The best response is to pay on time and communicate clearly about orders and expectations. This fits suppliers because strong supplier relationships improve reliability and quality."
        },
        {
            id: "c-mcq-465", topic: "business-stakeholders",
            q: "A new factory creates jobs but also increases traffic and noise. What is the BEST next step?",
            options: [
                "reduce negative impacts and contribute positively where possible.",
                "weigh financial, social and environmental outcomes before making major choices.",
                "balance profit goals with the needs of other stakeholders.",
                "consult staff and provide fair conditions when changes are made."
            ],
            answer: 0,
            explain: "The best response is to reduce negative impacts and contribute positively where possible. This fits community because considering community impact helps businesses earn trust and support."
        },
        {
            id: "c-mcq-466", topic: "business-stakeholders",
            q: "A business must obey safety, tax and employment rules. What is the BEST next step?",
            options: [
                "consult staff and provide fair conditions when changes are made.",
                "follow laws and respond properly to inspections or reporting duties.",
                "listen to complaints, improve quality and communicate honestly.",
                "pay on time and communicate clearly about orders and expectations."
            ],
            answer: 1,
            explain: "The best response is to follow laws and respond properly to inspections or reporting duties. This fits government because government oversight helps keep markets fair and safe."
        },
        {
            id: "c-mcq-467", topic: "business-stakeholders",
            q: "A business chooses reusable packaging even though it costs more at first. What is the BEST next step?",
            options: [
                "pay on time and communicate clearly about orders and expectations.",
                "reduce negative impacts and contribute positively where possible.",
                "weigh financial, social and environmental outcomes before making major choices.",
                "follow laws and respond properly to inspections or reporting duties."
            ],
            answer: 2,
            explain: "The best response is to weigh financial, social and environmental outcomes before making major choices. This fits triple bottom line because it encourages decisions that are financially, socially and environmentally responsible."
        },
        {
            id: "c-mcq-468", topic: "business-stakeholders",
            q: "Which option is the BEST example of owners?",
            options: [
                "A café owner deciding whether sales are strong enough to hire more staff.",
                "Paying tax and meeting food-safety standards.",
                "A café reducing waste while keeping prices fair and staff supported.",
                "Giving baristas training before launching a new coffee machine."
            ],
            answer: 0,
            explain: "That option is the clearest example of owners. the people who invest in and control a business."
        },
        {
            id: "c-mcq-469", topic: "business-stakeholders",
            q: "Which option is the BEST example of employees?",
            options: [
                "A café owner deciding whether sales are strong enough to hire more staff.",
                "Giving baristas training before launching a new coffee machine.",
                "Adding clearer labels because customers want easier comparison.",
                "A shop working closely with a local supplier to avoid stock shortages."
            ],
            answer: 1,
            explain: "That option is the clearest example of employees. workers whose pay, safety and training are affected by business decisions."
        },
        {
            id: "c-mcq-470", topic: "business-stakeholders",
            q: "Which option is the BEST example of customers?",
            options: [
                "A shop working closely with a local supplier to avoid stock shortages.",
                "Sponsoring local sport while also managing waste responsibly.",
                "Adding clearer labels because customers want easier comparison.",
                "Paying tax and meeting food-safety standards."
            ],
            answer: 2,
            explain: "That option is the clearest example of customers. the people who buy the goods or services of the business."
        },

        /* ===== Communicating commerce information (COM5-8/9) — expansion ===== */
        {
            id: "c-mcq-471", topic: "communication",
            q: "Which statement best describes primary research?",
            options: [
                "information gathered by other people and then used in your report.",
                "the trustworthiness of a source based on authority, accuracy and currency.",
                "a one-sided view that can shape how information is presented.",
                "original information collected directly by the student, such as surveys or interviews."
            ],
            answer: 3,
            explain: "This describes primary research because original information collected directly by the student, such as surveys or interviews."
        },
        {
            id: "c-mcq-472", topic: "communication",
            q: "Which statement best describes secondary research?",
            options: [
                "information gathered by other people and then used in your report.",
                "a one-sided view that can shape how information is presented.",
                "showing information clearly using graphs, charts, tables or diagrams.",
                "acknowledging where ideas, quotations and data came from."
            ],
            answer: 0,
            explain: "This describes secondary research because information gathered by other people and then used in your report."
        },
        {
            id: "c-mcq-473", topic: "communication",
            q: "Which statement best describes reliability?",
            options: [
                "acknowledging where ideas, quotations and data came from.",
                "the trustworthiness of a source based on authority, accuracy and currency.",
                "working with others through shared roles, communication and deadlines.",
                "original information collected directly by the student, such as surveys or interviews."
            ],
            answer: 1,
            explain: "This describes reliability because the trustworthiness of a source based on authority, accuracy and currency."
        },
        {
            id: "c-mcq-474", topic: "communication",
            q: "Which statement best describes bias?",
            options: [
                "original information collected directly by the student, such as surveys or interviews.",
                "information gathered by other people and then used in your report.",
                "a one-sided view that can shape how information is presented.",
                "the trustworthiness of a source based on authority, accuracy and currency."
            ],
            answer: 2,
            explain: "This describes bias because a one-sided view that can shape how information is presented."
        },
        {
            id: "c-mcq-475", topic: "communication",
            q: "Which statement best describes data visualisation?",
            options: [
                "the trustworthiness of a source based on authority, accuracy and currency.",
                "a one-sided view that can shape how information is presented.",
                "acknowledging where ideas, quotations and data came from.",
                "showing information clearly using graphs, charts, tables or diagrams."
            ],
            answer: 3,
            explain: "This describes data visualisation because showing information clearly using graphs, charts, tables or diagrams."
        },
        {
            id: "c-mcq-476", topic: "communication",
            q: "Which statement best describes referencing?",
            options: [
                "acknowledging where ideas, quotations and data came from.",
                "showing information clearly using graphs, charts, tables or diagrams.",
                "working with others through shared roles, communication and deadlines.",
                "original information collected directly by the student, such as surveys or interviews."
            ],
            answer: 0,
            explain: "This describes referencing because acknowledging where ideas, quotations and data came from."
        },
        {
            id: "c-mcq-477", topic: "communication",
            q: "Which statement best describes collaboration?",
            options: [
                "original information collected directly by the student, such as surveys or interviews.",
                "working with others through shared roles, communication and deadlines.",
                "information gathered by other people and then used in your report.",
                "the trustworthiness of a source based on authority, accuracy and currency."
            ],
            answer: 1,
            explain: "This describes collaboration because working with others through shared roles, communication and deadlines."
        },
        {
            id: "c-mcq-478", topic: "communication",
            q: "A class surveys Year 9 students about spending habits. Which concept is MOST relevant?",
            options: [
                "reliability",
                "bias",
                "data visualisation",
                "primary research"
            ],
            answer: 3,
            explain: "The scenario is about primary research because it provides first-hand evidence tailored to the research question."
        },
        {
            id: "c-mcq-479", topic: "communication",
            q: "A student reads ABS and ASIC reports before writing about consumer trends. Which concept is MOST relevant?",
            options: [
                "secondary research",
                "data visualisation",
                "referencing",
                "collaboration"
            ],
            answer: 0,
            explain: "The scenario is about secondary research because it gives background information and trusted data from larger studies."
        },
        {
            id: "c-mcq-480", topic: "communication",
            q: "Two websites disagree, but only one cites recent government data. Which concept is MOST relevant?",
            options: [
                "collaboration",
                "reliability",
                "primary research",
                "secondary research"
            ],
            answer: 1,
            explain: "The scenario is about reliability because it helps students choose evidence they can defend."
        },
        {
            id: "c-mcq-481", topic: "communication",
            q: "A company blog praises its own product and hides weaknesses. Which concept is MOST relevant?",
            options: [
                "secondary research",
                "reliability",
                "bias",
                "data visualisation"
            ],
            answer: 2,
            explain: "The scenario is about bias because spotting it helps students judge evidence fairly."
        },
        {
            id: "c-mcq-482", topic: "communication",
            q: "A report uses a line graph to show monthly inflation over a year. Which concept is MOST relevant?",
            options: [
                "bias",
                "referencing",
                "collaboration",
                "data visualisation"
            ],
            answer: 3,
            explain: "The scenario is about data visualisation because it helps audiences understand patterns quickly."
        },
        {
            id: "c-mcq-483", topic: "communication",
            q: "A student quotes a report and includes the source in a bibliography. Which concept is MOST relevant?",
            options: [
                "referencing",
                "collaboration",
                "primary research",
                "secondary research"
            ],
            answer: 0,
            explain: "The scenario is about referencing because it avoids plagiarism and lets readers verify evidence."
        },
        {
            id: "c-mcq-484", topic: "communication",
            q: "A group divides research, writing and editing tasks for a Commerce presentation. Which concept is MOST relevant?",
            options: [
                "secondary research",
                "collaboration",
                "reliability",
                "bias"
            ],
            answer: 1,
            explain: "The scenario is about collaboration because it helps teams use time and skills effectively."
        },
        {
            id: "c-mcq-485", topic: "communication",
            q: "Why is primary research important in Commerce?",
            options: [
                "spotting it helps students judge evidence fairly.",
                "it helps audiences understand patterns quickly.",
                "it avoids plagiarism and lets readers verify evidence.",
                "it provides first-hand evidence tailored to the research question."
            ],
            answer: 3,
            explain: "This is correct because it provides first-hand evidence tailored to the research question."
        },
        {
            id: "c-mcq-486", topic: "communication",
            q: "Why is secondary research important in Commerce?",
            options: [
                "it gives background information and trusted data from larger studies.",
                "it avoids plagiarism and lets readers verify evidence.",
                "it helps teams use time and skills effectively.",
                "it provides first-hand evidence tailored to the research question."
            ],
            answer: 0,
            explain: "This is correct because it gives background information and trusted data from larger studies."
        },
        {
            id: "c-mcq-487", topic: "communication",
            q: "Why is reliability important in Commerce?",
            options: [
                "it provides first-hand evidence tailored to the research question.",
                "it helps students choose evidence they can defend.",
                "it gives background information and trusted data from larger studies.",
                "spotting it helps students judge evidence fairly."
            ],
            answer: 1,
            explain: "This is correct because it helps students choose evidence they can defend."
        },
        {
            id: "c-mcq-488", topic: "communication",
            q: "Why is bias important in Commerce?",
            options: [
                "it helps students choose evidence they can defend.",
                "it helps audiences understand patterns quickly.",
                "spotting it helps students judge evidence fairly.",
                "it avoids plagiarism and lets readers verify evidence."
            ],
            answer: 2,
            explain: "This is correct because spotting it helps students judge evidence fairly."
        },
        {
            id: "c-mcq-489", topic: "communication",
            q: "Why is data visualisation important in Commerce?",
            options: [
                "it avoids plagiarism and lets readers verify evidence.",
                "it helps teams use time and skills effectively.",
                "it provides first-hand evidence tailored to the research question.",
                "it helps audiences understand patterns quickly."
            ],
            answer: 3,
            explain: "This is correct because it helps audiences understand patterns quickly."
        },
        {
            id: "c-mcq-490", topic: "communication",
            q: "Why is referencing important in Commerce?",
            options: [
                "it avoids plagiarism and lets readers verify evidence.",
                "it provides first-hand evidence tailored to the research question.",
                "it gives background information and trusted data from larger studies.",
                "it helps students choose evidence they can defend."
            ],
            answer: 0,
            explain: "This is correct because it avoids plagiarism and lets readers verify evidence."
        },
        {
            id: "c-mcq-491", topic: "communication",
            q: "Why is collaboration important in Commerce?",
            options: [
                "it helps students choose evidence they can defend.",
                "it helps teams use time and skills effectively.",
                "spotting it helps students judge evidence fairly.",
                "it helps audiences understand patterns quickly."
            ],
            answer: 1,
            explain: "This is correct because it helps teams use time and skills effectively."
        },
        {
            id: "c-mcq-492", topic: "communication",
            q: "A class surveys Year 9 students about spending habits. What is the BEST next step?",
            options: [
                "match the visual to the type of data and label it clearly.",
                "record source details as you research and cite them consistently.",
                "set roles, share documents and check progress regularly.",
                "collect the data ethically and organise it clearly."
            ],
            answer: 3,
            explain: "The best response is to collect the data ethically and organise it clearly. This fits primary research because it provides first-hand evidence tailored to the research question."
        },
        {
            id: "c-mcq-493", topic: "communication",
            q: "A student reads ABS and ASIC reports before writing about consumer trends. What is the BEST next step?",
            options: [
                "choose current, reliable sources and record the details for citation.",
                "set roles, share documents and check progress regularly.",
                "collect the data ethically and organise it clearly.",
                "check the author, date, evidence and purpose before using the source."
            ],
            answer: 0,
            explain: "The best response is to choose current, reliable sources and record the details for citation. This fits secondary research because it gives background information and trusted data from larger studies."
        },
        {
            id: "c-mcq-494", topic: "communication",
            q: "Two websites disagree, but only one cites recent government data. What is the BEST next step?",
            options: [
                "choose current, reliable sources and record the details for citation.",
                "check the author, date, evidence and purpose before using the source.",
                "compare the source with others and note any vested interest.",
                "match the visual to the type of data and label it clearly."
            ],
            answer: 1,
            explain: "The best response is to check the author, date, evidence and purpose before using the source. This fits reliability because it helps students choose evidence they can defend."
        },
        {
            id: "c-mcq-495", topic: "communication",
            q: "A company blog praises its own product and hides weaknesses. What is the BEST next step?",
            options: [
                "match the visual to the type of data and label it clearly.",
                "record source details as you research and cite them consistently.",
                "compare the source with others and note any vested interest.",
                "set roles, share documents and check progress regularly."
            ],
            answer: 2,
            explain: "The best response is to compare the source with others and note any vested interest. This fits bias because spotting it helps students judge evidence fairly."
        },
        {
            id: "c-mcq-496", topic: "communication",
            q: "A report uses a line graph to show monthly inflation over a year. What is the BEST next step?",
            options: [
                "set roles, share documents and check progress regularly.",
                "collect the data ethically and organise it clearly.",
                "choose current, reliable sources and record the details for citation.",
                "match the visual to the type of data and label it clearly."
            ],
            answer: 3,
            explain: "The best response is to match the visual to the type of data and label it clearly. This fits data visualisation because it helps audiences understand patterns quickly."
        },
        {
            id: "c-mcq-497", topic: "communication",
            q: "A student quotes a report and includes the source in a bibliography. What is the BEST next step?",
            options: [
                "record source details as you research and cite them consistently.",
                "choose current, reliable sources and record the details for citation.",
                "check the author, date, evidence and purpose before using the source.",
                "compare the source with others and note any vested interest."
            ],
            answer: 0,
            explain: "The best response is to record source details as you research and cite them consistently. This fits referencing because it avoids plagiarism and lets readers verify evidence."
        },
        {
            id: "c-mcq-498", topic: "communication",
            q: "A group divides research, writing and editing tasks for a Commerce presentation. What is the BEST next step?",
            options: [
                "compare the source with others and note any vested interest.",
                "set roles, share documents and check progress regularly.",
                "match the visual to the type of data and label it clearly.",
                "record source details as you research and cite them consistently."
            ],
            answer: 1,
            explain: "The best response is to set roles, share documents and check progress regularly. This fits collaboration because it helps teams use time and skills effectively."
        },
        {
            id: "c-mcq-499", topic: "communication",
            q: "Which option is the BEST example of primary research?",
            options: [
                "Listing the ABS as the source beneath a graph.",
                "One student collecting data while another designs the slides and both review the final work.",
                "Using an RBA chart or ABS table in a research task.",
                "Using survey responses from your own class in a report."
            ],
            answer: 3,
            explain: "That option is the clearest example of primary research. original information collected directly by the student, such as surveys or interviews."
        },
        {
            id: "c-mcq-500", topic: "communication",
            q: "Which option is the BEST example of secondary research?",
            options: [
                "Using an RBA chart or ABS table in a research task.",
                "Using survey responses from your own class in a report.",
                "Preferring ABS data over an anonymous social-media post.",
                "Realising an influencer review is sponsored and may not be fully objective."
            ],
            answer: 0,
            explain: "That option is the clearest example of secondary research. information gathered by other people and then used in your report."
        }
    ],

    short: [
        {
            id: "c-sa-1", topic: "consumer-rights",
            q: "List THREE consumer guarantees that apply to goods under the Australian Consumer Law.",
            sample: "1) Acceptable quality (fit for purpose, free from defects, durable, safe). 2) Fit for the disclosed purpose. 3) Match the description, sample or demonstration model. (Other valid: clear title, undisturbed possession, repair and spare parts available, express warranties honoured.)",
            marks: 3
        },
        {
            id: "c-sa-2", topic: "consumer-rights",
            q: "Distinguish between a MAJOR and a MINOR product failure under the ACL, and explain the consumer's remedy in each case.",
            sample: "Major failure = product is unsafe, very different from description, or significantly defective so a reasonable consumer wouldn't have bought it. Consumer's remedy: choice of refund or replacement (and may also recover compensation for damage). Minor failure = repairable problem. Remedy: business may choose to repair, replace or refund within a reasonable time. If they take too long, the consumer can escalate.",
            marks: 4
        },
        {
            id: "c-sa-3", topic: "consumer-decisions",
            q: "Identify TWO personal and TWO external factors that influence consumer decisions.",
            sample: "Personal: age, gender, income, lifestyle, values. External: advertising, peer/family pressure, technology and media, economic conditions, culture.",
            marks: 4
        },
        {
            id: "c-sa-4", topic: "consumer-decisions",
            q: "Outline the FIVE-STEP consumer decision-making process using a real example (e.g. choosing a phone).",
            sample: "1) Recognise need (current phone broken). 2) Search for information (reviews, comparison sites, ask peers). 3) Evaluate alternatives (price, features, warranty, sustainability). 4) Choose and purchase. 5) Post-purchase evaluation (does it meet expectations? Refund/return if needed). The cycle informs future decisions.",
            marks: 5
        },
        {
            id: "c-sa-5", topic: "consumer-protection",
            q: "Describe TWO common scams targeting young Australians and outline TWO protective behaviours.",
            sample: "Scams: 1) Phishing texts pretending to be from Australia Post or banks asking for clicks; 2) Fake online stores on social media offering deals that never ship; 3) Investment/'get-rich' crypto scams via influencers. Protective behaviours: never click suspicious links — go to the website yourself; enable two-factor authentication; verify retailers via reviews and the ABN lookup; report to ScamWatch.gov.au.",
            marks: 5
        },
        {
            id: "c-sa-6", topic: "personal-finance",
            q: "Outline TWO benefits AND TWO drawbacks of maintaining a personal budget.",
            sample: "Benefits: tracks spending, helps reach savings goals, reduces overspending, prepares for unexpected costs. Drawbacks: requires discipline and time, can feel restrictive, must be updated as income/costs change, doesn't prevent unforeseen events.",
            marks: 4
        },
        {
            id: "c-sa-7", topic: "personal-finance",
            q: "Explain how SETTING SMART FINANCIAL GOALS would help Harper save for a $300 bike. Use the SMART acronym.",
            sample: "S — Specific: 'save $300 to buy a particular bike model.' M — Measurable: $25/week. A — Achievable: based on babysitting income of $40–60/week. R — Relevant: Harper rides to school. T — Time-bound: by 12 weeks (end of term). The acronym converts a vague intention into a trackable plan: she can monitor weekly progress, adjust spending if she falls behind, and feel motivated by visible progress.",
            marks: 5
        },
        {
            id: "c-sa-8", topic: "saving-investing",
            q: "Compare a high-interest savings account, a term deposit and shares in terms of risk and return.",
            sample: "Savings account: very low risk, low return (around the cash rate); deposits up to $250,000 per ADI per person are protected by the Financial Claims Scheme. Term deposit: low risk, slightly higher fixed return for locking the money for a term. Shares: higher risk (price volatility, potential loss), higher long-term expected return (dividends + capital growth), no government guarantee. Diversifying across these three reduces overall risk.",
            marks: 5
        },
        {
            id: "c-sa-9", topic: "payment-credit",
            q: "Compare credit cards and Buy Now Pay Later (BNPL) in terms of cost and risk to a teenage consumer.",
            sample: "Credit cards: charge interest (often 18%+) on unpaid balance but have stronger consumer protections; risk = building debt with high interest. BNPL: usually interest-free if paid on time but charges late fees and easy approval encourages overspending; risk = many small purchases adding up plus credit-history impact.",
            marks: 5
        },
        {
            id: "c-sa-10", topic: "payment-credit",
            q: "Explain THREE strategies a consumer can use to protect themselves from identity theft.",
            sample: "1) Use strong, unique passwords + 2FA on every important account. 2) Do not share TFN, bank or card details by SMS/email; verify the requester via a known channel. 3) Check bank statements regularly and shred or securely delete old documents. 4) Use trusted Wi-Fi (avoid public Wi-Fi for banking) and freeze your credit file with reporting bodies if exposed.",
            marks: 5
        },
        {
            id: "c-sa-11", topic: "economic-environment",
            q: "Define INFLATION and explain ONE way it might affect Harper as a teenage consumer.",
            sample: "Inflation = a sustained rise in the general price level over time, measured by CPI. Effect on Harper: each $1 of pocket money/savings buys fewer items (loss of purchasing power); part-time wages may not keep up so she has less real spending power for snacks, transport, etc.",
            marks: 4
        },
        {
            id: "c-sa-12", topic: "markets-pricing",
            q: "Use a supply and demand diagram (described in words) to explain what happens when extreme heat damages an apple crop.",
            sample: "Supply curve shifts LEFT (less product available at every price). Demand curve unchanged. New equilibrium has a higher price and lower quantity sold. Consumers may switch to substitute fruits (demand for them rises). Long-term, higher prices encourage growers to plant more apples next season — supply drifts back right.",
            marks: 5
        },
        {
            id: "c-sa-13", topic: "money-policy",
            q: "Explain how the RBA RAISING the cash rate by 0.25% may affect: (a) a consumer with a mortgage; (b) a small business owner.",
            sample: "(a) Mortgage repayments rise (variable rate) — less disposable income, fewer discretionary purchases, more incentive to save. (b) Small business borrowing costs rise; consumer demand may slow, hitting sales; for highly indebted businesses, profits drop. RBA's intent is to curb demand-pull inflation. Effects flow through over months.",
            marks: 5
        },
        {
            id: "c-sa-14", topic: "business-types",
            q: "Distinguish between a SOLE TRADER and a PARTNERSHIP, giving ONE advantage of each.",
            sample: "Sole trader: one owner, full control, keeps all profit (advantage = simple/cheap to set up, full control). Partnership: 2–20 people share ownership, profits and decisions (advantage = shared workload, more capital and combined skills). Both have unlimited liability.",
            marks: 4
        },
        {
            id: "c-sa-15", topic: "business-stakeholders",
            q: "Identify FOUR stakeholders of a local café and outline ONE interest each may have.",
            sample: "Owner — profit and growth. Employees — fair pay, safe conditions, hours. Customers — quality coffee, good service, safe food. Suppliers — reliable orders and on-time payment. Local community — noise, traffic, employment, supporting local. Government — tax compliance, food safety. Two of these flesh out 'four stakeholders'.",
            marks: 4
        },
        {
            id: "c-sa-16", topic: "business-stakeholders",
            q: "Explain how a TRIPLE BOTTOM LINE approach can guide business decisions, with one example.",
            sample: "Triple bottom line measures profit, people and planet. A café choosing reusable cups and ethical-trade beans incurs higher cost (small profit hit) but improves environmental outcomes (waste, emissions) and social outcomes (worker conditions in supplier countries). Long term, brand reputation can grow, attracting loyal customers — profit may catch up. Decisions are evaluated across the three dimensions.",
            marks: 5
        },
        {
            id: "c-sa-17", topic: "communication",
            q: "Outline TWO criteria you would use to evaluate the reliability of an online source for a Commerce research report.",
            sample: "1) Authority — who published it? Government agencies (ABS, RBA), peak bodies and reputable news outlets are typically reliable; anonymous social-media posts are not. 2) Currency — when was it published? Economic data goes stale quickly. 3) Accuracy — does it cite primary data, are figures consistent with other sources? 4) Bias/purpose — does the source have a vested interest? Triangulate across multiple sources before quoting.",
            marks: 4
        },
        {
            id: "c-sa-18", topic: "communication",
            q: "Suggest TWO presentation choices that would help an audience UNDERSTAND a 12-month inflation trend, and justify each.",
            sample: "1) Line graph of monthly CPI to show change over time — humans read time-series best as lines. 2) Annotated callouts highlighting peak/trough months and policy events (e.g. cash-rate move) — provides context. Avoid 3-D effects and ensure y-axis starts at 0 (or note breaks). Consistent units; cite source (ABS).",
            marks: 4
        },

        /* ===== Consumer rights & responsibilities — expansion ===== */
        {
            id: "c-sa-19", topic: "consumer-rights",
            q: "Explain acceptable quality and give ONE example linked to Commerce.",
            sample: "In Commerce, acceptable quality means goods are safe, durable and free from defects for a reasonable time. Example: A school backpack that survives everyday use without broken zips. This matters because it gives buyers a legal remedy when goods are faulty or unsafe.",
            marks: 3
        },
        {
            id: "c-sa-20", topic: "consumer-rights",
            q: "Explain fit for purpose and give ONE example linked to Commerce.",
            sample: "In Commerce, fit for purpose means goods must do the job the buyer clearly asked for. Example: Shoes sold as waterproof that actually keep feet dry on a wet walk. This matters because it protects buyers who rely on a seller's advice about how a product should work.",
            marks: 4
        },
        {
            id: "c-sa-21", topic: "consumer-rights",
            q: "Explain major failure and give ONE example linked to Commerce.",
            sample: "In Commerce, major failure means a serious problem that lets the consumer reject the product and choose a refund or replacement. Example: A phone sold as 128 GB that arrives as 32 GB and shuts down randomly. This matters because it gives consumers stronger choices when a problem is serious.",
            marks: 4
        },
        {
            id: "c-sa-22", topic: "consumer-rights",
            q: "Explain proof of purchase and give ONE example linked to Commerce.",
            sample: "In Commerce, proof of purchase means evidence such as a receipt, invoice or bank statement showing the sale happened. Example: Using an emailed receipt to prove when a pair of shoes was bought. This matters because it makes it easier to show where and when goods were bought.",
            marks: 5
        },
        {
            id: "c-sa-23", topic: "consumer-rights",
            q: "Explain cooling-off period and give ONE example linked to Commerce.",
            sample: "In Commerce, cooling-off period means a set time to cancel some unsolicited consumer contracts without penalty. Example: Cancelling a door-to-door vacuum contract within 10 business days. This matters because it protects people from pressure selling.",
            marks: 4
        },
        {
            id: "c-sa-24", topic: "consumer-rights",
            q: "Explain express warranty and give ONE example linked to Commerce.",
            sample: "In Commerce, express warranty means an extra promise made by a seller or manufacturer in addition to ACL rights. Example: A store promising free battery replacement for two years. This matters because it can add extra cover on top of the law.",
            marks: 5
        },
        {
            id: "c-sa-25", topic: "consumer-rights",
            q: "Explain consumer responsibility and give ONE example linked to Commerce.",
            sample: "In Commerce, consumer responsibility means the duty to read terms, compare options and use products properly before complaining. Example: Comparing warranties and reading return conditions before ordering a jacket. This matters because it reduces avoidable mistakes and supports fair complaint handling.",
            marks: 4
        },
        {
            id: "c-sa-26", topic: "consumer-rights",
            q: "Describe how acceptable quality could affect a decision or problem in this kind of situation: A new set of earbuds stops working after two weeks of normal use.",
            sample: "This situation involves acceptable quality because it gives buyers a legal remedy when goods are faulty or unsafe. A strong response would explain that the consumer or business should take the earbuds back to the seller with proof of purchase and request an ACL remedy. and link this back to the idea that goods are safe, durable and free from defects for a reasonable time.",
            marks: 4
        },
        {
            id: "c-sa-27", topic: "consumer-rights",
            q: "Describe how fit for purpose could affect a decision or problem in this kind of situation: A student asks for running shoes for wet-weather sport, but the shoes become slippery immediately.",
            sample: "This situation involves fit for purpose because it protects buyers who rely on a seller's advice about how a product should work. A strong response would explain that the consumer or business should remind the retailer of the stated purpose and ask for a remedy because the shoes were not suitable. and link this back to the idea that goods must do the job the buyer clearly asked for.",
            marks: 5
        },
        {
            id: "c-sa-28", topic: "consumer-rights",
            q: "Describe how major failure could affect a decision or problem in this kind of situation: A laptop arrives with the wrong storage size and overheats on the first day.",
            sample: "This situation involves major failure because it gives consumers stronger choices when a problem is serious. A strong response would explain that the consumer or business should reject the laptop and choose a refund or replacement rather than accepting only a repair. and link this back to the idea that a serious problem that lets the consumer reject the product and choose a refund or replacement.",
            marks: 5
        },
        {
            id: "c-sa-29", topic: "consumer-rights",
            q: "Describe how proof of purchase could affect a decision or problem in this kind of situation: A shop asks for evidence before processing a faulty item complaint.",
            sample: "This situation involves proof of purchase because it makes it easier to show where and when goods were bought. A strong response would explain that the consumer or business should show the receipt, emailed invoice or bank record to support the claim. and link this back to the idea that evidence such as a receipt, invoice or bank statement showing the sale happened.",
            marks: 4
        },
        {
            id: "c-sa-30", topic: "consumer-rights",
            q: "Describe how cooling-off period could affect a decision or problem in this kind of situation: A salesperson signs a family up for a door-to-door deal they regret that night.",
            sample: "This situation involves cooling-off period because it protects people from pressure selling. A strong response would explain that the consumer or business should cancel the unsolicited contract within the allowed period and keep written records. and link this back to the idea that a set time to cancel some unsolicited consumer contracts without penalty.",
            marks: 5
        },
        {
            id: "c-sa-31", topic: "consumer-rights",
            q: "Describe how express warranty could affect a decision or problem in this kind of situation: A manufacturer advertises a two-year replacement promise on a gaming headset.",
            sample: "This situation involves express warranty because it can add extra cover on top of the law. A strong response would explain that the consumer or business should read what the warranty promises and remember ACL rights still apply. and link this back to the idea that an extra promise made by a seller or manufacturer in addition to ACL rights.",
            marks: 4
        },
        {
            id: "c-sa-32", topic: "consumer-rights",
            q: "Describe how consumer responsibility could affect a decision or problem in this kind of situation: A buyer ignores sizing, care and return information before buying online.",
            sample: "This situation involves consumer responsibility because it reduces avoidable mistakes and supports fair complaint handling. A strong response would explain that the consumer or business should check product details, keep records and follow care instructions before and after buying. and link this back to the idea that the duty to read terms, compare options and use products properly before complaining.",
            marks: 5
        },

        /* ===== Making informed consumer decisions — expansion ===== */
        {
            id: "c-sa-33", topic: "consumer-decisions",
            q: "Explain needs and wants and give ONE example linked to Commerce.",
            sample: "In Commerce, needs and wants means separating essentials from non-essential extras before spending. Example: Choosing transport money before buying extra gaming accessories. This matters because it helps people prioritise limited income.",
            marks: 3
        },
        {
            id: "c-sa-34", topic: "consumer-decisions",
            q: "Explain comparison shopping and give ONE example linked to Commerce.",
            sample: "In Commerce, comparison shopping means checking price, quality and features across different sellers before buying. Example: Using two websites and one catalogue before buying a calculator. This matters because it helps consumers avoid overpaying and find better value.",
            marks: 4
        },
        {
            id: "c-sa-35", topic: "consumer-decisions",
            q: "Explain information search and give ONE example linked to Commerce.",
            sample: "In Commerce, information search means collecting reliable facts from reviews, websites and trusted people before deciding. Example: Reading independent reviews before choosing a phone plan. This matters because it reduces guesswork and improves decision quality.",
            marks: 4
        },
        {
            id: "c-sa-36", topic: "consumer-decisions",
            q: "Explain evaluating alternatives and give ONE example linked to Commerce.",
            sample: "In Commerce, evaluating alternatives means weighing the strengths and weaknesses of each option against clear criteria. Example: Scoring three phones against price, camera quality and warranty length. This matters because it turns raw information into a reasoned choice.",
            marks: 5
        },
        {
            id: "c-sa-37", topic: "consumer-decisions",
            q: "Explain impulse buying and give ONE example linked to Commerce.",
            sample: "In Commerce, impulse buying means making an unplanned purchase based on emotion or pressure. Example: Adding snacks at the checkout without planning for them. This matters because understanding it helps shoppers avoid regret and overspending.",
            marks: 4
        },
        {
            id: "c-sa-38", topic: "consumer-decisions",
            q: "Explain value for money and give ONE example linked to Commerce.",
            sample: "In Commerce, value for money means getting the best mix of quality, usefulness and price for your needs. Example: Buying sturdy school shoes that last longer even if they cost slightly more. This matters because it focuses on long-term value rather than the lowest price only.",
            marks: 5
        },
        {
            id: "c-sa-39", topic: "consumer-decisions",
            q: "Explain post-purchase evaluation and give ONE example linked to Commerce.",
            sample: "In Commerce, post-purchase evaluation means reviewing whether a product met expectations after it was bought. Example: Deciding a drink bottle was poor value after it leaked and then choosing a better brand next time. This matters because it improves future choices and shows whether follow-up action is needed.",
            marks: 4
        },
        {
            id: "c-sa-40", topic: "consumer-decisions",
            q: "Describe how needs and wants could affect a decision or problem in this kind of situation: A student with limited money must choose between lunch for camp and a new phone case.",
            sample: "This situation involves needs and wants because it helps people prioritise limited income. A strong response would explain that the consumer or business should rank the items by importance and pay for the essential need first. and link this back to the idea that separating essentials from non-essential extras before spending.",
            marks: 4
        },
        {
            id: "c-sa-41", topic: "consumer-decisions",
            q: "Describe how comparison shopping could affect a decision or problem in this kind of situation: Harper finds the same calculator at three stores with different prices and warranties.",
            sample: "This situation involves comparison shopping because it helps consumers avoid overpaying and find better value. A strong response would explain that the consumer or business should compare total cost, features and warranty across stores before choosing. and link this back to the idea that checking price, quality and features across different sellers before buying.",
            marks: 5
        },
        {
            id: "c-sa-42", topic: "consumer-decisions",
            q: "Describe how information search could affect a decision or problem in this kind of situation: A buyer reads expert reviews and asks friends about a pair of headphones.",
            sample: "This situation involves information search because it reduces guesswork and improves decision quality. A strong response would explain that the consumer or business should use reliable reviews, product details and trusted advice before purchasing. and link this back to the idea that collecting reliable facts from reviews, websites and trusted people before deciding.",
            marks: 5
        },
        {
            id: "c-sa-43", topic: "consumer-decisions",
            q: "Describe how evaluating alternatives could affect a decision or problem in this kind of situation: A family compares two laptops by price, battery life, storage and repair options.",
            sample: "This situation involves evaluating alternatives because it turns raw information into a reasoned choice. A strong response would explain that the consumer or business should list decision criteria and judge each option against them. and link this back to the idea that weighing the strengths and weaknesses of each option against clear criteria.",
            marks: 4
        },
        {
            id: "c-sa-44", topic: "consumer-decisions",
            q: "Describe how impulse buying could affect a decision or problem in this kind of situation: A countdown timer online pushes a student to buy sneakers without checking the budget.",
            sample: "This situation involves impulse buying because understanding it helps shoppers avoid regret and overspending. A strong response would explain that the consumer or business should pause, wait, and check the budget before clicking buy. and link this back to the idea that making an unplanned purchase based on emotion or pressure.",
            marks: 5
        },
        {
            id: "c-sa-45", topic: "consumer-decisions",
            q: "Describe how value for money could affect a decision or problem in this kind of situation: A cheaper bag breaks quickly while a slightly dearer bag lasts for years.",
            sample: "This situation involves value for money because it focuses on long-term value rather than the lowest price only. A strong response would explain that the consumer or business should compare durability, features and total use over time before buying. and link this back to the idea that getting the best mix of quality, usefulness and price for your needs.",
            marks: 4
        },
        {
            id: "c-sa-46", topic: "consumer-decisions",
            q: "Describe how post-purchase evaluation could affect a decision or problem in this kind of situation: After buying a keyboard, a student checks if the keys, battery and comfort are good enough.",
            sample: "This situation involves post-purchase evaluation because it improves future choices and shows whether follow-up action is needed. A strong response would explain that the consumer or business should reflect on performance, keep records and seek a remedy if the item does not meet expectations. and link this back to the idea that reviewing whether a product met expectations after it was bought.",
            marks: 5
        },

        /* ===== Consumer protection — ACCC, scams, complaints — expansion ===== */
        {
            id: "c-sa-47", topic: "consumer-protection",
            q: "Explain ACCC and give ONE example linked to Commerce.",
            sample: "In Commerce, ACCC means the national regulator that enforces competition and consumer law in Australia. Example: Reading ACCC advice about a scam or misleading promotion. This matters because it can investigate harmful business conduct and educate the public.",
            marks: 3
        },
        {
            id: "c-sa-48", topic: "consumer-protection",
            q: "Explain NSW Fair Trading and give ONE example linked to Commerce.",
            sample: "In Commerce, NSW Fair Trading means the state agency that helps consumers and traders resolve problems and understand their rights. Example: Lodging a complaint with NSW Fair Trading after a store ignores repeated messages. This matters because it gives people a local complaint and information pathway.",
            marks: 4
        },
        {
            id: "c-sa-49", topic: "consumer-protection",
            q: "Explain misleading or deceptive conduct and give ONE example linked to Commerce.",
            sample: "In Commerce, misleading or deceptive conduct means business behaviour that gives a false impression and causes consumers to be misled. Example: Advertising a product as environmentally friendly without proof. This matters because it protects buyers from dishonest claims.",
            marks: 4
        },
        {
            id: "c-sa-50", topic: "consumer-protection",
            q: "Explain bait advertising and give ONE example linked to Commerce.",
            sample: "In Commerce, bait advertising means advertising a bargain item with no reasonable supply to attract customers. Example: An online ad offering a very low sale price but the item is instantly unavailable. This matters because it stops businesses luring people in unfairly.",
            marks: 5
        },
        {
            id: "c-sa-51", topic: "consumer-protection",
            q: "Explain phishing scam warning signs and give ONE example linked to Commerce.",
            sample: "In Commerce, phishing scam warning signs means common clues that a message or website is trying to steal personal information. Example: Checking the official courier app instead of tapping a suspicious SMS link. This matters because it helps people spot scams before they lose money or data.",
            marks: 4
        },
        {
            id: "c-sa-52", topic: "consumer-protection",
            q: "Explain complaint process and give ONE example linked to Commerce.",
            sample: "In Commerce, complaint process means a step-by-step way to solve a consumer problem using evidence and clear communication. Example: Emailing a store with a receipt and photos before contacting Fair Trading. This matters because it improves the chance of resolving issues quickly and fairly.",
            marks: 5
        },
        {
            id: "c-sa-53", topic: "consumer-protection",
            q: "Explain product safety recall and give ONE example linked to Commerce.",
            sample: "In Commerce, product safety recall means a public notice telling consumers to stop using, return or repair a dangerous product. Example: Returning a recalled power bank after seeing the notice on the ACCC website. This matters because it reduces risk of injury or damage.",
            marks: 4
        },
        {
            id: "c-sa-54", topic: "consumer-protection",
            q: "Describe how ACCC could affect a decision or problem in this kind of situation: A business runs misleading ads across Australia and many consumers complain.",
            sample: "This situation involves ACCC because it can investigate harmful business conduct and educate the public. A strong response would explain that the consumer or business should check ACCC guidance or report the issue through the correct channel. and link this back to the idea that the national regulator that enforces competition and consumer law in Australia.",
            marks: 4
        },
        {
            id: "c-sa-55", topic: "consumer-protection",
            q: "Describe how NSW Fair Trading could affect a decision or problem in this kind of situation: A NSW shopper cannot solve a refund dispute directly with a retailer.",
            sample: "This situation involves NSW Fair Trading because it gives people a local complaint and information pathway. A strong response would explain that the consumer or business should contact NSW Fair Trading with clear evidence of the dispute. and link this back to the idea that the state agency that helps consumers and traders resolve problems and understand their rights.",
            marks: 5
        },
        {
            id: "c-sa-56", topic: "consumer-protection",
            q: "Describe how misleading or deceptive conduct could affect a decision or problem in this kind of situation: A seller claims a fake gold necklace is real solid gold.",
            sample: "This situation involves misleading or deceptive conduct because it protects buyers from dishonest claims. A strong response would explain that the consumer or business should keep screenshots of the claim and complain using the evidence. and link this back to the idea that business behaviour that gives a false impression and causes consumers to be misled.",
            marks: 5
        },
        {
            id: "c-sa-57", topic: "consumer-protection",
            q: "Describe how bait advertising could affect a decision or problem in this kind of situation: A store heavily promotes a low-priced console but had almost none available.",
            sample: "This situation involves bait advertising because it stops businesses luring people in unfairly. A strong response would explain that the consumer or business should record the ad, ask questions about stock levels and complain if the deal was unrealistic. and link this back to the idea that advertising a bargain item with no reasonable supply to attract customers.",
            marks: 4
        },
        {
            id: "c-sa-58", topic: "consumer-protection",
            q: "Describe how phishing scam warning signs could affect a decision or problem in this kind of situation: A text says a parcel is delayed and asks the user to click a strange link and enter bank details.",
            sample: "This situation involves phishing scam warning signs because it helps people spot scams before they lose money or data. A strong response would explain that the consumer or business should do not click the link, verify through the real website and report the message. and link this back to the idea that common clues that a message or website is trying to steal personal information.",
            marks: 5
        },
        {
            id: "c-sa-59", topic: "consumer-protection",
            q: "Describe how complaint process could affect a decision or problem in this kind of situation: A buyer has a faulty item and wants a fair outcome from the seller.",
            sample: "This situation involves complaint process because it improves the chance of resolving issues quickly and fairly. A strong response would explain that the consumer or business should contact the business first, state the remedy sought, keep records, then escalate if needed. and link this back to the idea that a step-by-step way to solve a consumer problem using evidence and clear communication.",
            marks: 4
        },
        {
            id: "c-sa-60", topic: "consumer-protection",
            q: "Describe how product safety recall could affect a decision or problem in this kind of situation: A charger is recalled because it can overheat and start a fire.",
            sample: "This situation involves product safety recall because it reduces risk of injury or damage. A strong response would explain that the consumer or business should stop using the item, follow recall instructions and arrange repair, refund or replacement. and link this back to the idea that a public notice telling consumers to stop using, return or repair a dangerous product.",
            marks: 5
        },

        /* ===== Personal finance & budgeting — expansion ===== */
        {
            id: "c-sa-61", topic: "personal-finance",
            q: "Explain income and give ONE example linked to Commerce.",
            sample: "In Commerce, income means money received from work, gifts, allowances or other sources. Example: Adding casual job pay and pocket money to calculate weekly income. This matters because it shows how much money is available before spending decisions are made.",
            marks: 3
        },
        {
            id: "c-sa-62", topic: "personal-finance",
            q: "Explain fixed expenses and give ONE example linked to Commerce.",
            sample: "In Commerce, fixed expenses means regular costs that stay similar each period. Example: A monthly streaming subscription that costs the same amount each cycle. This matters because they make budgeting easier because they are predictable.",
            marks: 4
        },
        {
            id: "c-sa-63", topic: "personal-finance",
            q: "Explain variable expenses and give ONE example linked to Commerce.",
            sample: "In Commerce, variable expenses means costs that change depending on use or choices. Example: Different weekly amounts spent on canteen food. This matters because tracking them shows where flexible spending can be reduced.",
            marks: 4
        },
        {
            id: "c-sa-64", topic: "personal-finance",
            q: "Explain budget and give ONE example linked to Commerce.",
            sample: "In Commerce, budget means a plan that matches expected income with planned spending and saving. Example: A weekly plan that sets aside money for savings before entertainment. This matters because it helps people stay in control of their money.",
            marks: 5
        },
        {
            id: "c-sa-65", topic: "personal-finance",
            q: "Explain SMART financial goal and give ONE example linked to Commerce.",
            sample: "In Commerce, SMART financial goal means a goal that is specific, measurable, achievable, relevant and time-bound. Example: Saving $25 each week for 12 weeks to reach $300. This matters because it turns a vague idea into a trackable saving plan.",
            marks: 4
        },
        {
            id: "c-sa-66", topic: "personal-finance",
            q: "Explain emergency fund and give ONE example linked to Commerce.",
            sample: "In Commerce, emergency fund means money set aside for unexpected costs rather than everyday spending. Example: Keeping some savings aside for replacing broken school headphones. This matters because it reduces stress and prevents panic borrowing.",
            marks: 5
        },
        {
            id: "c-sa-67", topic: "personal-finance",
            q: "Explain opportunity cost and give ONE example linked to Commerce.",
            sample: "In Commerce, opportunity cost means the next best thing given up when a choice is made. Example: Choosing to save for a laptop instead of buying many smaller treats. This matters because it helps people see the trade-offs behind spending decisions.",
            marks: 4
        },
        {
            id: "c-sa-68", topic: "personal-finance",
            q: "Describe how income could affect a decision or problem in this kind of situation: A student receives pocket money, birthday money and pay from weekend work.",
            sample: "This situation involves income because it shows how much money is available before spending decisions are made. A strong response would explain that the consumer or business should record each source of income before planning a budget. and link this back to the idea that money received from work, gifts, allowances or other sources.",
            marks: 4
        },
        {
            id: "c-sa-69", topic: "personal-finance",
            q: "Describe how fixed expenses could affect a decision or problem in this kind of situation: A student pays the same phone plan and bus pass amount each month.",
            sample: "This situation involves fixed expenses because they make budgeting easier because they are predictable. A strong response would explain that the consumer or business should list them first in the budget because they must usually be paid on time. and link this back to the idea that regular costs that stay similar each period.",
            marks: 5
        },
        {
            id: "c-sa-70", topic: "personal-finance",
            q: "Describe how variable expenses could affect a decision or problem in this kind of situation: Snack spending changes each week depending on sport and outings.",
            sample: "This situation involves variable expenses because tracking them shows where flexible spending can be reduced. A strong response would explain that the consumer or business should monitor the pattern and set a spending limit for the category. and link this back to the idea that costs that change depending on use or choices.",
            marks: 5
        },
        {
            id: "c-sa-71", topic: "personal-finance",
            q: "Describe how budget could affect a decision or problem in this kind of situation: A Year 9 student wants to afford camp, transport and weekend activities.",
            sample: "This situation involves budget because it helps people stay in control of their money. A strong response would explain that the consumer or business should write expected income and expenses, then adjust spending to match goals. and link this back to the idea that a plan that matches expected income with planned spending and saving.",
            marks: 4
        },
        {
            id: "c-sa-72", topic: "personal-finance",
            q: "Describe how SMART financial goal could affect a decision or problem in this kind of situation: Harper wants to save for a bike by the end of term.",
            sample: "This situation involves SMART financial goal because it turns a vague idea into a trackable saving plan. A strong response would explain that the consumer or business should set the amount, deadline and weekly target, then review progress. and link this back to the idea that a goal that is specific, measurable, achievable, relevant and time-bound.",
            marks: 5
        },
        {
            id: "c-sa-73", topic: "personal-finance",
            q: "Describe how emergency fund could affect a decision or problem in this kind of situation: A student suddenly needs to replace a lost Opal card or school item.",
            sample: "This situation involves emergency fund because it reduces stress and prevents panic borrowing. A strong response would explain that the consumer or business should save a small amount regularly in a separate account for surprises. and link this back to the idea that money set aside for unexpected costs rather than everyday spending.",
            marks: 4
        },
        {
            id: "c-sa-74", topic: "personal-finance",
            q: "Describe how opportunity cost could affect a decision or problem in this kind of situation: Buying concert tickets means less money is left for a school camp deposit.",
            sample: "This situation involves opportunity cost because it helps people see the trade-offs behind spending decisions. A strong response would explain that the consumer or business should compare what is gained with what must be given up before spending. and link this back to the idea that the next best thing given up when a choice is made.",
            marks: 5
        },

        /* ===== Saving, banking & investing — expansion ===== */
        {
            id: "c-sa-75", topic: "saving-investing",
            q: "Explain high-interest savings account and give ONE example linked to Commerce.",
            sample: "In Commerce, high-interest savings account means a bank account that pays interest while keeping money relatively safe and easy to access. Example: Depositing babysitting money into a savings account each week. This matters because it helps savings grow while keeping funds available.",
            marks: 3
        },
        {
            id: "c-sa-76", topic: "saving-investing",
            q: "Explain term deposit and give ONE example linked to Commerce.",
            sample: "In Commerce, term deposit means a savings product that locks money away for a set period in return for a fixed interest rate. Example: Putting savings in a six-month term deposit instead of everyday spending. This matters because it offers predictable returns with low risk.",
            marks: 4
        },
        {
            id: "c-sa-77", topic: "saving-investing",
            q: "Explain shares and give ONE example linked to Commerce.",
            sample: "In Commerce, shares means small units of ownership in a company that may rise or fall in value. Example: Owning a tiny part of a listed Australian company through shares. This matters because they can offer higher long-term returns than simple savings, with higher risk.",
            marks: 4
        },
        {
            id: "c-sa-78", topic: "saving-investing",
            q: "Explain diversification and give ONE example linked to Commerce.",
            sample: "In Commerce, diversification means spreading money across different investments instead of putting it all in one place. Example: Keeping some money in savings and some in a range of shares. This matters because it reduces the impact if one investment performs badly.",
            marks: 5
        },
        {
            id: "c-sa-79", topic: "saving-investing",
            q: "Explain risk and return and give ONE example linked to Commerce.",
            sample: "In Commerce, risk and return means the idea that higher possible returns usually come with higher chances of loss. Example: Choosing a savings account for short-term goals and shares for a longer horizon. This matters because it helps investors compare choices realistically.",
            marks: 4
        },
        {
            id: "c-sa-80", topic: "saving-investing",
            q: "Explain compound interest and give ONE example linked to Commerce.",
            sample: "In Commerce, compound interest means interest earned on both the original amount and the interest already added. Example: A savings balance that grows more quickly in year two than in year one. This matters because it rewards people who start saving early and leave money invested.",
            marks: 5
        },
        {
            id: "c-sa-81", topic: "saving-investing",
            q: "Explain liquidity and give ONE example linked to Commerce.",
            sample: "In Commerce, liquidity means how quickly an asset can be turned into cash without losing much value. Example: Cash in a savings account being easier to use than money locked in a term deposit. This matters because it helps savers choose products that match when the money will be needed.",
            marks: 4
        },
        {
            id: "c-sa-82", topic: "saving-investing",
            q: "Describe how high-interest savings account could affect a decision or problem in this kind of situation: A student wants a low-risk place to keep money for a bike next year.",
            sample: "This situation involves high-interest savings account because it helps savings grow while keeping funds available. A strong response would explain that the consumer or business should compare interest rates, bonus conditions and fees before opening the account. and link this back to the idea that a bank account that pays interest while keeping money relatively safe and easy to access.",
            marks: 4
        },
        {
            id: "c-sa-83", topic: "saving-investing",
            q: "Describe how term deposit could affect a decision or problem in this kind of situation: A family can leave money untouched for twelve months and wants certainty.",
            sample: "This situation involves term deposit because it offers predictable returns with low risk. A strong response would explain that the consumer or business should check the term, rate and whether the money can stay untouched. and link this back to the idea that a savings product that locks money away for a set period in return for a fixed interest rate.",
            marks: 5
        },
        {
            id: "c-sa-84", topic: "saving-investing",
            q: "Describe how shares could affect a decision or problem in this kind of situation: A student learns that buying shares can earn dividends but prices can also drop.",
            sample: "This situation involves shares because they can offer higher long-term returns than simple savings, with higher risk. A strong response would explain that the consumer or business should invest only money that can stay invested and understand the risks first. and link this back to the idea that small units of ownership in a company that may rise or fall in value.",
            marks: 5
        },
        {
            id: "c-sa-85", topic: "saving-investing",
            q: "Describe how diversification could affect a decision or problem in this kind of situation: A saver is deciding whether to invest all money in one company or spread it out.",
            sample: "This situation involves diversification because it reduces the impact if one investment performs badly. A strong response would explain that the consumer or business should mix savings across more than one asset or company where appropriate. and link this back to the idea that spreading money across different investments instead of putting it all in one place.",
            marks: 4
        },
        {
            id: "c-sa-86", topic: "saving-investing",
            q: "Describe how risk and return could affect a decision or problem in this kind of situation: A friend promises a very high return from a risky online investment.",
            sample: "This situation involves risk and return because it helps investors compare choices realistically. A strong response would explain that the consumer or business should match the level of risk to the goal, timeline and ability to absorb losses. and link this back to the idea that the idea that higher possible returns usually come with higher chances of loss.",
            marks: 5
        },
        {
            id: "c-sa-87", topic: "saving-investing",
            q: "Describe how compound interest could affect a decision or problem in this kind of situation: Savings grow faster over time because interest keeps earning more interest.",
            sample: "This situation involves compound interest because it rewards people who start saving early and leave money invested. A strong response would explain that the consumer or business should save regularly and leave the money invested long enough for growth to build. and link this back to the idea that interest earned on both the original amount and the interest already added.",
            marks: 4
        },
        {
            id: "c-sa-88", topic: "saving-investing",
            q: "Describe how liquidity could affect a decision or problem in this kind of situation: A student may need quick access to money for camp fees next month.",
            sample: "This situation involves liquidity because it helps savers choose products that match when the money will be needed. A strong response would explain that the consumer or business should keep short-term money in liquid options rather than locking it away too long. and link this back to the idea that how quickly an asset can be turned into cash without losing much value.",
            marks: 5
        },

        /* ===== Payment options & credit — expansion ===== */
        {
            id: "c-sa-89", topic: "payment-credit",
            q: "Explain debit card and give ONE example linked to Commerce.",
            sample: "In Commerce, debit card means a card that spends money directly from the linked bank account. Example: Paying online with money already saved in an everyday account. This matters because it helps people spend money they already have rather than borrowing.",
            marks: 3
        },
        {
            id: "c-sa-90", topic: "payment-credit",
            q: "Explain credit card and give ONE example linked to Commerce.",
            sample: "In Commerce, credit card means a card that lets the user borrow money and repay it later, usually with interest if not paid in full. Example: Buying flights on a credit card and paying the statement by the due date. This matters because it can provide convenience and purchase protections, but only if managed carefully.",
            marks: 4
        },
        {
            id: "c-sa-91", topic: "payment-credit",
            q: "Explain Buy Now Pay Later and give ONE example linked to Commerce.",
            sample: "In Commerce, Buy Now Pay Later means a service that splits a purchase into smaller instalments over time. Example: Paying for shoes in four equal instalments through a BNPL app. This matters because it can spread costs, but it also makes overspending easier.",
            marks: 4
        },
        {
            id: "c-sa-92", topic: "payment-credit",
            q: "Explain direct debit and give ONE example linked to Commerce.",
            sample: "In Commerce, direct debit means an automatic payment taken from a bank account on agreed dates. Example: A gym membership fee being automatically deducted each month. This matters because it can prevent missed payments for regular bills.",
            marks: 5
        },
        {
            id: "c-sa-93", topic: "payment-credit",
            q: "Explain interest and late fees and give ONE example linked to Commerce.",
            sample: "In Commerce, interest and late fees means extra costs charged when borrowed money is not repaid on time. Example: Paying more for a purchase because the credit-card balance was left unpaid. This matters because understanding them helps consumers see the true cost of credit.",
            marks: 4
        },
        {
            id: "c-sa-94", topic: "payment-credit",
            q: "Explain identity theft protection and give ONE example linked to Commerce.",
            sample: "In Commerce, identity theft protection means steps taken to stop personal or banking details being stolen and misused. Example: Ignoring a suspicious banking text and logging in through the real app instead. This matters because it reduces the chance of losing money or having accounts abused.",
            marks: 5
        },
        {
            id: "c-sa-95", topic: "payment-credit",
            q: "Explain credit history and give ONE example linked to Commerce.",
            sample: "In Commerce, credit history means a record of how a person has managed borrowed money and repayments. Example: A late repayment making it harder to be approved for another loan later. This matters because it can affect future access to loans, contracts or other credit products.",
            marks: 4
        },
        {
            id: "c-sa-96", topic: "payment-credit",
            q: "Describe how debit card could affect a decision or problem in this kind of situation: A student uses a card at the canteen and the money leaves the account straight away.",
            sample: "This situation involves debit card because it helps people spend money they already have rather than borrowing. A strong response would explain that the consumer or business should check the account balance before buying and use the card within the budget. and link this back to the idea that a card that spends money directly from the linked bank account.",
            marks: 4
        },
        {
            id: "c-sa-97", topic: "payment-credit",
            q: "Describe how credit card could affect a decision or problem in this kind of situation: A family uses a credit card for a large purchase and carries part of the balance.",
            sample: "This situation involves credit card because it can provide convenience and purchase protections, but only if managed carefully. A strong response would explain that the consumer or business should repay as much as possible on time and avoid spending beyond the repayment plan. and link this back to the idea that a card that lets the user borrow money and repay it later, usually with interest if not paid in full.",
            marks: 5
        },
        {
            id: "c-sa-98", topic: "payment-credit",
            q: "Describe how Buy Now Pay Later could affect a decision or problem in this kind of situation: A teenager is offered four instalments for new clothes at checkout.",
            sample: "This situation involves Buy Now Pay Later because it can spread costs, but it also makes overspending easier. A strong response would explain that the consumer or business should check every repayment date and total cost before agreeing to the plan. and link this back to the idea that a service that splits a purchase into smaller instalments over time.",
            marks: 5
        },
        {
            id: "c-sa-99", topic: "payment-credit",
            q: "Describe how direct debit could affect a decision or problem in this kind of situation: A music subscription keeps charging monthly until the customer cancels it.",
            sample: "This situation involves direct debit because it can prevent missed payments for regular bills. A strong response would explain that the consumer or business should read the agreement, monitor statements and cancel unwanted services quickly. and link this back to the idea that an automatic payment taken from a bank account on agreed dates.",
            marks: 4
        },
        {
            id: "c-sa-100", topic: "payment-credit",
            q: "Describe how interest and late fees could affect a decision or problem in this kind of situation: A person misses a BNPL instalment and extra charges are added.",
            sample: "This situation involves interest and late fees because understanding them helps consumers see the true cost of credit. A strong response would explain that the consumer or business should read the fee schedule and make repayments on time or avoid the credit product. and link this back to the idea that extra costs charged when borrowed money is not repaid on time.",
            marks: 5
        },
        {
            id: "c-sa-101", topic: "payment-credit",
            q: "Describe how identity theft protection could affect a decision or problem in this kind of situation: A fake email asks for card details and passwords after a supposed security problem.",
            sample: "This situation involves identity theft protection because it reduces the chance of losing money or having accounts abused. A strong response would explain that the consumer or business should use strong passwords, turn on 2FA and verify messages through official channels. and link this back to the idea that steps taken to stop personal or banking details being stolen and misused.",
            marks: 4
        },
        {
            id: "c-sa-102", topic: "payment-credit",
            q: "Describe how credit history could affect a decision or problem in this kind of situation: Missed repayments on several accounts are recorded by a lender.",
            sample: "This situation involves credit history because it can affect future access to loans, contracts or other credit products. A strong response would explain that the consumer or business should pay on time and avoid taking on more credit than can be managed. and link this back to the idea that a record of how a person has managed borrowed money and repayments.",
            marks: 5
        },

        /* ===== The economic environment — expansion ===== */
        {
            id: "c-sa-103", topic: "economic-environment",
            q: "Explain scarcity and give ONE example linked to Commerce.",
            sample: "In Commerce, scarcity means the basic economic problem that resources are limited while wants are unlimited. Example: Choosing between a holiday and renovating a kitchen because money is limited. This matters because it explains why choices and trade-offs are unavoidable.",
            marks: 3
        },
        {
            id: "c-sa-104", topic: "economic-environment",
            q: "Explain GDP and give ONE example linked to Commerce.",
            sample: "In Commerce, GDP means the total value of goods and services produced in a country over a period of time. Example: Comparing GDP growth rates from one year to the next. This matters because it helps measure overall economic activity.",
            marks: 4
        },
        {
            id: "c-sa-105", topic: "economic-environment",
            q: "Explain unemployment and give ONE example linked to Commerce.",
            sample: "In Commerce, unemployment means the percentage of the labour force that wants work but cannot find it. Example: A town losing jobs after a factory closes. This matters because it shows how healthy the job market is.",
            marks: 4
        },
        {
            id: "c-sa-106", topic: "economic-environment",
            q: "Explain inflation and give ONE example linked to Commerce.",
            sample: "In Commerce, inflation means a sustained rise in the general price level over time. Example: Pocket money buying fewer snacks than it did last year. This matters because it helps explain changes in purchasing power.",
            marks: 5
        },
        {
            id: "c-sa-107", topic: "economic-environment",
            q: "Explain standard of living and give ONE example linked to Commerce.",
            sample: "In Commerce, standard of living means the level of material comfort people can enjoy, such as income, housing and access to goods. Example: A family improving its living standard after stable jobs and better housing. This matters because it helps compare economic wellbeing between groups or over time.",
            marks: 4
        },
        {
            id: "c-sa-108", topic: "economic-environment",
            q: "Explain productivity and give ONE example linked to Commerce.",
            sample: "In Commerce, productivity means how much output is produced from a given amount of inputs such as time or labour. Example: Workers using better software to complete tasks faster. This matters because higher productivity can support growth and incomes.",
            marks: 5
        },
        {
            id: "c-sa-109", topic: "economic-environment",
            q: "Explain economic cycle and give ONE example linked to Commerce.",
            sample: "In Commerce, economic cycle means the pattern of expansion, slowdown and recovery that economies move through over time. Example: A shop selling more during a strong economy and less during a recession. This matters because it helps explain why jobs, sales and confidence change over time.",
            marks: 4
        },
        {
            id: "c-sa-110", topic: "economic-environment",
            q: "Describe how scarcity could affect a decision or problem in this kind of situation: A family budget cannot cover every item they would like to buy this month.",
            sample: "This situation involves scarcity because it explains why choices and trade-offs are unavoidable. A strong response would explain that the consumer or business should rank priorities and use limited resources on the most important needs first. and link this back to the idea that the basic economic problem that resources are limited while wants are unlimited.",
            marks: 4
        },
        {
            id: "c-sa-111", topic: "economic-environment",
            q: "Describe how GDP could affect a decision or problem in this kind of situation: News reports say the economy grew because GDP rose this quarter.",
            sample: "This situation involves GDP because it helps measure overall economic activity. A strong response would explain that the consumer or business should use GDP carefully with other indicators because it does not show everything about wellbeing. and link this back to the idea that the total value of goods and services produced in a country over a period of time.",
            marks: 5
        },
        {
            id: "c-sa-112", topic: "economic-environment",
            q: "Describe how unemployment could affect a decision or problem in this kind of situation: More people apply for part-time jobs because fewer positions are available.",
            sample: "This situation involves unemployment because it shows how healthy the job market is. A strong response would explain that the consumer or business should interpret it alongside other data such as inflation and GDP. and link this back to the idea that the percentage of the labour force that wants work but cannot find it.",
            marks: 5
        },
        {
            id: "c-sa-113", topic: "economic-environment",
            q: "Describe how inflation could affect a decision or problem in this kind of situation: Groceries, fuel and rent all become more expensive over several months.",
            sample: "This situation involves inflation because it helps explain changes in purchasing power. A strong response would explain that the consumer or business should plan spending carefully because the same money buys fewer goods. and link this back to the idea that a sustained rise in the general price level over time.",
            marks: 4
        },
        {
            id: "c-sa-114", topic: "economic-environment",
            q: "Describe how standard of living could affect a decision or problem in this kind of situation: A household can afford safe housing, food, transport and leisure activities.",
            sample: "This situation involves standard of living because it helps compare economic wellbeing between groups or over time. A strong response would explain that the consumer or business should look beyond one statistic and consider several indicators of wellbeing. and link this back to the idea that the level of material comfort people can enjoy, such as income, housing and access to goods.",
            marks: 5
        },
        {
            id: "c-sa-115", topic: "economic-environment",
            q: "Describe how productivity could affect a decision or problem in this kind of situation: A café serves more customers per hour after improving its ordering system.",
            sample: "This situation involves productivity because higher productivity can support growth and incomes. A strong response would explain that the consumer or business should use skills, technology and organisation to get more output from resources. and link this back to the idea that how much output is produced from a given amount of inputs such as time or labour.",
            marks: 4
        },
        {
            id: "c-sa-116", topic: "economic-environment",
            q: "Describe how economic cycle could affect a decision or problem in this kind of situation: Spending and hiring rise in a boom, then slow in a downturn.",
            sample: "This situation involves economic cycle because it helps explain why jobs, sales and confidence change over time. A strong response would explain that the consumer or business should adjust spending and business plans when conditions are changing. and link this back to the idea that the pattern of expansion, slowdown and recovery that economies move through over time.",
            marks: 5
        },

        /* ===== Markets, supply & demand, pricing — expansion ===== */
        {
            id: "c-sa-117", topic: "markets-pricing",
            q: "Explain demand and give ONE example linked to Commerce.",
            sample: "In Commerce, demand means the quantity consumers are willing and able to buy at different prices. Example: Higher demand for concert tickets after an artist becomes popular. This matters because it helps explain why buyers push prices and quantities up or down.",
            marks: 3
        },
        {
            id: "c-sa-118", topic: "markets-pricing",
            q: "Explain supply and give ONE example linked to Commerce.",
            sample: "In Commerce, supply means the quantity producers are willing and able to sell at different prices. Example: A bakery selling more loaves when it can hire an extra worker. This matters because it explains how business costs and conditions affect the market.",
            marks: 4
        },
        {
            id: "c-sa-119", topic: "markets-pricing",
            q: "Explain equilibrium price and give ONE example linked to Commerce.",
            sample: "In Commerce, equilibrium price means the price where quantity demanded equals quantity supplied. Example: Tickets selling out neither too quickly nor too slowly at the balance price. This matters because it helps explain where markets naturally tend to settle.",
            marks: 4
        },
        {
            id: "c-sa-120", topic: "markets-pricing",
            q: "Explain shortage and give ONE example linked to Commerce.",
            sample: "In Commerce, shortage means a situation where quantity demanded is greater than quantity supplied. Example: Long queues forming because a new game console is under-supplied. This matters because it explains why prices or waiting lists often rise.",
            marks: 5
        },
        {
            id: "c-sa-121", topic: "markets-pricing",
            q: "Explain surplus and give ONE example linked to Commerce.",
            sample: "In Commerce, surplus means a situation where quantity supplied is greater than quantity demanded. Example: Clearance sales after too many seasonal items were produced. This matters because it explains why businesses discount stock to clear it.",
            marks: 4
        },
        {
            id: "c-sa-122", topic: "markets-pricing",
            q: "Explain substitute goods and give ONE example linked to Commerce.",
            sample: "In Commerce, substitute goods means products that can replace each other when consumers switch between them. Example: Choosing public transport when petrol prices rise. This matters because they affect how demand changes when relative prices shift.",
            marks: 5
        },
        {
            id: "c-sa-123", topic: "markets-pricing",
            q: "Explain complementary goods and give ONE example linked to Commerce.",
            sample: "In Commerce, complementary goods means products that are often used together so demand for one affects demand for the other. Example: Higher demand for printers increasing demand for ink. This matters because they help explain linked movements across markets.",
            marks: 4
        },
        {
            id: "c-sa-124", topic: "markets-pricing",
            q: "Describe how demand could affect a decision or problem in this kind of situation: More students want iced drinks when the weather becomes hotter.",
            sample: "This situation involves demand because it helps explain why buyers push prices and quantities up or down. A strong response would explain that the consumer or business should predict how tastes, income or seasons may change what consumers want. and link this back to the idea that the quantity consumers are willing and able to buy at different prices.",
            marks: 4
        },
        {
            id: "c-sa-125", topic: "markets-pricing",
            q: "Describe how supply could affect a decision or problem in this kind of situation: A storm damages crops so farmers have less fruit to sell.",
            sample: "This situation involves supply because it explains how business costs and conditions affect the market. A strong response would explain that the consumer or business should look for changes in costs, weather or technology that affect production. and link this back to the idea that the quantity producers are willing and able to sell at different prices.",
            marks: 5
        },
        {
            id: "c-sa-126", topic: "markets-pricing",
            q: "Describe how equilibrium price could affect a decision or problem in this kind of situation: A market settles at the price where the amount buyers want matches the amount sellers offer.",
            sample: "This situation involves equilibrium price because it helps explain where markets naturally tend to settle. A strong response would explain that the consumer or business should compare both demand and supply changes before predicting the new price. and link this back to the idea that the price where quantity demanded equals quantity supplied.",
            marks: 5
        },
        {
            id: "c-sa-127", topic: "markets-pricing",
            q: "Describe how shortage could affect a decision or problem in this kind of situation: A limited-edition shoe release has far more buyers than pairs available.",
            sample: "This situation involves shortage because it explains why prices or waiting lists often rise. A strong response would explain that the consumer or business should expect pressure for the price to increase or rationing to occur. and link this back to the idea that a situation where quantity demanded is greater than quantity supplied.",
            marks: 4
        },
        {
            id: "c-sa-128", topic: "markets-pricing",
            q: "Describe how surplus could affect a decision or problem in this kind of situation: A store orders too many winter coats and many remain unsold in spring.",
            sample: "This situation involves surplus because it explains why businesses discount stock to clear it. A strong response would explain that the consumer or business should expect prices to fall or promotions to increase. and link this back to the idea that a situation where quantity supplied is greater than quantity demanded.",
            marks: 5
        },
        {
            id: "c-sa-129", topic: "markets-pricing",
            q: "Describe how substitute goods could affect a decision or problem in this kind of situation: If orange prices rise, some shoppers buy apples instead.",
            sample: "This situation involves substitute goods because they affect how demand changes when relative prices shift. A strong response would explain that the consumer or business should consider alternative products when a preferred item becomes expensive. and link this back to the idea that products that can replace each other when consumers switch between them.",
            marks: 4
        },
        {
            id: "c-sa-130", topic: "markets-pricing",
            q: "Describe how complementary goods could affect a decision or problem in this kind of situation: If game-console sales rise, demand for compatible controllers also rises.",
            sample: "This situation involves complementary goods because they help explain linked movements across markets. A strong response would explain that the consumer or business should look at paired products when predicting demand changes. and link this back to the idea that products that are often used together so demand for one affects demand for the other.",
            marks: 5
        },

        /* ===== Money, RBA & government policy — expansion ===== */
        {
            id: "c-sa-131", topic: "money-policy",
            q: "Explain cash rate and give ONE example linked to Commerce.",
            sample: "In Commerce, cash rate means the interest-rate target set by the RBA that influences other interest rates in the economy. Example: Variable mortgage rates rising after an RBA increase. This matters because it is a key tool for influencing borrowing, spending and saving.",
            marks: 3
        },
        {
            id: "c-sa-132", topic: "money-policy",
            q: "Explain monetary policy and give ONE example linked to Commerce.",
            sample: "In Commerce, monetary policy means actions by the RBA to influence interest rates and economic activity. Example: Lowering rates to encourage borrowing and spending during a slowdown. This matters because it helps manage inflation and overall demand in the economy.",
            marks: 4
        },
        {
            id: "c-sa-133", topic: "money-policy",
            q: "Explain inflation target and give ONE example linked to Commerce.",
            sample: "In Commerce, inflation target means the RBA aim of keeping inflation within a stable target band over time. Example: Raising interest rates because inflation is above the target band. This matters because it guides decisions that support price stability.",
            marks: 4
        },
        {
            id: "c-sa-134", topic: "money-policy",
            q: "Explain contractionary policy and give ONE example linked to Commerce.",
            sample: "In Commerce, contractionary policy means policy that slows spending and borrowing to reduce inflationary pressure. Example: Higher rates making big purchases less attractive. This matters because it can cool price growth when inflation is high.",
            marks: 5
        },
        {
            id: "c-sa-135", topic: "money-policy",
            q: "Explain expansionary policy and give ONE example linked to Commerce.",
            sample: "In Commerce, expansionary policy means policy that encourages borrowing and spending to support growth and jobs. Example: Lower loan rates helping a business afford new equipment. This matters because it can lift activity when unemployment is high or growth is weak.",
            marks: 4
        },
        {
            id: "c-sa-136", topic: "money-policy",
            q: "Explain effects on savers and borrowers and give ONE example linked to Commerce.",
            sample: "In Commerce, effects on savers and borrowers means the different way interest-rate changes affect people who save money and people who borrow it. Example: A saver earning more interest while a borrower pays more on a loan. This matters because it shows that one policy change creates winners and losers.",
            marks: 5
        },
        {
            id: "c-sa-137", topic: "money-policy",
            q: "Explain fiscal policy and give ONE example linked to Commerce.",
            sample: "In Commerce, fiscal policy means government decisions about spending and taxation that influence the economy. Example: Building transport projects to support employment during weak growth. This matters because it can support jobs, services and economic stability alongside monetary policy.",
            marks: 4
        },
        {
            id: "c-sa-138", topic: "money-policy",
            q: "Describe how cash rate could affect a decision or problem in this kind of situation: News reports say the RBA has lifted the cash rate again.",
            sample: "This situation involves cash rate because it is a key tool for influencing borrowing, spending and saving. A strong response would explain that the consumer or business should expect banks to adjust loan and savings rates after a cash-rate change. and link this back to the idea that the interest-rate target set by the RBA that influences other interest rates in the economy.",
            marks: 4
        },
        {
            id: "c-sa-139", topic: "money-policy",
            q: "Describe how monetary policy could affect a decision or problem in this kind of situation: The RBA changes settings to slow inflation or support growth.",
            sample: "This situation involves monetary policy because it helps manage inflation and overall demand in the economy. A strong response would explain that the consumer or business should link rate moves to likely effects on households and businesses. and link this back to the idea that actions by the RBA to influence interest rates and economic activity.",
            marks: 5
        },
        {
            id: "c-sa-140", topic: "money-policy",
            q: "Describe how inflation target could affect a decision or problem in this kind of situation: Prices are rising too quickly, so the RBA worries inflation will stay too high.",
            sample: "This situation involves inflation target because it guides decisions that support price stability. A strong response would explain that the consumer or business should compare current inflation with the target when judging policy choices. and link this back to the idea that the RBA aim of keeping inflation within a stable target band over time.",
            marks: 5
        },
        {
            id: "c-sa-141", topic: "money-policy",
            q: "Describe how contractionary policy could affect a decision or problem in this kind of situation: Interest rates rise because demand in the economy is running too hot.",
            sample: "This situation involves contractionary policy because it can cool price growth when inflation is high. A strong response would explain that the consumer or business should prepare for dearer loans and possibly slower consumer spending. and link this back to the idea that policy that slows spending and borrowing to reduce inflationary pressure.",
            marks: 4
        },
        {
            id: "c-sa-142", topic: "money-policy",
            q: "Describe how expansionary policy could affect a decision or problem in this kind of situation: The economy is weak, so rates are lowered to stimulate demand.",
            sample: "This situation involves expansionary policy because it can lift activity when unemployment is high or growth is weak. A strong response would explain that the consumer or business should recognise that cheaper borrowing may increase spending and investment. and link this back to the idea that policy that encourages borrowing and spending to support growth and jobs.",
            marks: 5
        },
        {
            id: "c-sa-143", topic: "money-policy",
            q: "Describe how effects on savers and borrowers could affect a decision or problem in this kind of situation: A family with a mortgage and a teenager with a savings account notice the same rate rise differently.",
            sample: "This situation involves effects on savers and borrowers because it shows that one policy change creates winners and losers. A strong response would explain that the consumer or business should consider both sides before judging whether a rate move is good or bad. and link this back to the idea that the different way interest-rate changes affect people who save money and people who borrow it.",
            marks: 4
        },
        {
            id: "c-sa-144", topic: "money-policy",
            q: "Describe how fiscal policy could affect a decision or problem in this kind of situation: The government funds infrastructure projects or changes tax rules to affect demand.",
            sample: "This situation involves fiscal policy because it can support jobs, services and economic stability alongside monetary policy. A strong response would explain that the consumer or business should distinguish government budget decisions from RBA interest-rate decisions. and link this back to the idea that government decisions about spending and taxation that influence the economy.",
            marks: 5
        },

        /* ===== The business environment — expansion ===== */
        {
            id: "c-sa-145", topic: "business-environment",
            q: "Explain location and give ONE example linked to Commerce.",
            sample: "In Commerce, location means the place a business operates and the advantages or disadvantages that come with it. Example: Opening a lunch shop near a school because many customers walk past each day. This matters because good location can lift sales, convenience and brand visibility.",
            marks: 3
        },
        {
            id: "c-sa-146", topic: "business-environment",
            q: "Explain competition and give ONE example linked to Commerce.",
            sample: "In Commerce, competition means rivalry between businesses trying to attract the same customers. Example: A café adding a loyalty card because similar cafés are nearby. This matters because it can improve value, service and innovation.",
            marks: 4
        },
        {
            id: "c-sa-147", topic: "business-environment",
            q: "Explain government regulation and give ONE example linked to Commerce.",
            sample: "In Commerce, government regulation means laws and rules businesses must follow, such as safety, tax and employment requirements. Example: A café training staff in food safety before opening. This matters because regulation protects workers, customers and fair trading.",
            marks: 4
        },
        {
            id: "c-sa-148", topic: "business-environment",
            q: "Explain technology and e-commerce and give ONE example linked to Commerce.",
            sample: "In Commerce, technology and e-commerce means digital tools and online selling methods that change how businesses operate. Example: A florist using an online booking system for local deliveries. This matters because they can expand reach and improve efficiency.",
            marks: 5
        },
        {
            id: "c-sa-149", topic: "business-environment",
            q: "Explain innovation and give ONE example linked to Commerce.",
            sample: "In Commerce, innovation means introducing new ideas, products or processes to improve business performance. Example: A café creating a pre-order app for busy morning customers. This matters because it helps businesses stay relevant and competitive.",
            marks: 4
        },
        {
            id: "c-sa-150", topic: "business-environment",
            q: "Explain entrepreneurship and give ONE example linked to Commerce.",
            sample: "In Commerce, entrepreneurship means the willingness to take initiative and build a business from an idea. Example: Starting a weekend dog-washing business after noticing local demand. This matters because it encourages creativity, problem-solving and calculated risk taking.",
            marks: 5
        },
        {
            id: "c-sa-151", topic: "business-environment",
            q: "Explain globalisation and give ONE example linked to Commerce.",
            sample: "In Commerce, globalisation means the growing connection between businesses, markets and ideas across countries. Example: An Australian store selling products made in another country through its website. This matters because it gives businesses bigger markets and more supplier choices.",
            marks: 4
        },
        {
            id: "c-sa-152", topic: "business-environment",
            q: "Describe how location could affect a decision or problem in this kind of situation: A café chooses between a busy station, a shopping strip or an online-only model.",
            sample: "This situation involves location because good location can lift sales, convenience and brand visibility. A strong response would explain that the consumer or business should compare customer access, rent, competition and nearby services before deciding. and link this back to the idea that the place a business operates and the advantages or disadvantages that come with it.",
            marks: 4
        },
        {
            id: "c-sa-153", topic: "business-environment",
            q: "Describe how competition could affect a decision or problem in this kind of situation: Two bubble-tea shops open on the same street and both want student customers.",
            sample: "This situation involves competition because it can improve value, service and innovation. A strong response would explain that the consumer or business should differentiate the business through price, quality, service or branding. and link this back to the idea that rivalry between businesses trying to attract the same customers.",
            marks: 5
        },
        {
            id: "c-sa-154", topic: "business-environment",
            q: "Describe how government regulation could affect a decision or problem in this kind of situation: A food business must follow health rules before selling meals.",
            sample: "This situation involves government regulation because regulation protects workers, customers and fair trading. A strong response would explain that the consumer or business should check the relevant rules before operating and keep records to show compliance. and link this back to the idea that laws and rules businesses must follow, such as safety, tax and employment requirements.",
            marks: 5
        },
        {
            id: "c-sa-155", topic: "business-environment",
            q: "Describe how technology and e-commerce could affect a decision or problem in this kind of situation: A small shop begins taking online orders and using social-media ads.",
            sample: "This situation involves technology and e-commerce because they can expand reach and improve efficiency. A strong response would explain that the consumer or business should choose technology that suits customers, budget and business goals. and link this back to the idea that digital tools and online selling methods that change how businesses operate.",
            marks: 4
        },
        {
            id: "c-sa-156", topic: "business-environment",
            q: "Describe how innovation could affect a decision or problem in this kind of situation: A store tests a refill station to reduce packaging and attract new buyers.",
            sample: "This situation involves innovation because it helps businesses stay relevant and competitive. A strong response would explain that the consumer or business should trial ideas, gather feedback and refine what works. and link this back to the idea that introducing new ideas, products or processes to improve business performance.",
            marks: 5
        },
        {
            id: "c-sa-157", topic: "business-environment",
            q: "Describe how entrepreneurship could affect a decision or problem in this kind of situation: Two students see demand for custom study notes and start a small venture.",
            sample: "This situation involves entrepreneurship because it encourages creativity, problem-solving and calculated risk taking. A strong response would explain that the consumer or business should research the market, test the idea and plan costs before launching. and link this back to the idea that the willingness to take initiative and build a business from an idea.",
            marks: 4
        },
        {
            id: "c-sa-158", topic: "business-environment",
            q: "Describe how globalisation could affect a decision or problem in this kind of situation: A local retailer sells imported products and also faces overseas online competitors.",
            sample: "This situation involves globalisation because it gives businesses bigger markets and more supplier choices. A strong response would explain that the consumer or business should consider exchange rates, shipping, culture and overseas competition in planning. and link this back to the idea that the growing connection between businesses, markets and ideas across countries.",
            marks: 5
        },

        /* ===== Business ownership types — expansion ===== */
        {
            id: "c-sa-159", topic: "business-types",
            q: "Explain sole trader and give ONE example linked to Commerce.",
            sample: "In Commerce, sole trader means a business owned and run by one person. Example: A local dog walker operating under one owner name. This matters because it is simple to set up and gives the owner full control.",
            marks: 3
        },
        {
            id: "c-sa-160", topic: "business-types",
            q: "Explain partnership and give ONE example linked to Commerce.",
            sample: "In Commerce, partnership means a business owned by two or more people who share decisions, profits and risks. Example: Two siblings sharing ownership of a home baking business. This matters because it combines capital, ideas and workload.",
            marks: 4
        },
        {
            id: "c-sa-161", topic: "business-types",
            q: "Explain company and give ONE example linked to Commerce.",
            sample: "In Commerce, company means a separate legal entity owned by shareholders. Example: A proprietary limited company running several stores. This matters because it can continue beyond one owner and offers limited liability to shareholders.",
            marks: 4
        },
        {
            id: "c-sa-162", topic: "business-types",
            q: "Explain franchise and give ONE example linked to Commerce.",
            sample: "In Commerce, franchise means a business using another business brand, systems and support in exchange for fees. Example: Operating a well-known food outlet under a franchisor. This matters because it provides a known brand and proven systems.",
            marks: 5
        },
        {
            id: "c-sa-163", topic: "business-types",
            q: "Explain co-operative and give ONE example linked to Commerce.",
            sample: "In Commerce, co-operative means an organisation owned and controlled by members for their shared benefit. Example: Farmers working together through a co-operative to market produce. This matters because it promotes democratic control and member support.",
            marks: 4
        },
        {
            id: "c-sa-164", topic: "business-types",
            q: "Explain not-for-profit organisation and give ONE example linked to Commerce.",
            sample: "In Commerce, not-for-profit organisation means an organisation that uses surplus funds to support its purpose rather than pay profits to owners. Example: A charity op shop using sales to fund local services. This matters because it focuses on a social, cultural or community mission.",
            marks: 5
        },
        {
            id: "c-sa-165", topic: "business-types",
            q: "Explain limited liability and give ONE example linked to Commerce.",
            sample: "In Commerce, limited liability means protection that limits how much owners or shareholders can lose personally from business debts. Example: Shareholders in a Pty Ltd company losing only the money invested in shares. This matters because it reduces personal risk and can encourage investment.",
            marks: 4
        },
        {
            id: "c-sa-166", topic: "business-types",
            q: "Describe how sole trader could affect a decision or problem in this kind of situation: One student runs a weekend lawn-mowing business alone.",
            sample: "This situation involves sole trader because it is simple to set up and gives the owner full control. A strong response would explain that the consumer or business should keep clear records and remember the owner is personally responsible for the business. and link this back to the idea that a business owned and run by one person.",
            marks: 4
        },
        {
            id: "c-sa-167", topic: "business-types",
            q: "Describe how partnership could affect a decision or problem in this kind of situation: Two friends run a market stall together and split the work.",
            sample: "This situation involves partnership because it combines capital, ideas and workload. A strong response would explain that the consumer or business should write a partnership agreement before trading. and link this back to the idea that a business owned by two or more people who share decisions, profits and risks.",
            marks: 5
        },
        {
            id: "c-sa-168", topic: "business-types",
            q: "Describe how company could affect a decision or problem in this kind of situation: A growing business wants to raise more capital and separate personal assets from business debts.",
            sample: "This situation involves company because it can continue beyond one owner and offers limited liability to shareholders. A strong response would explain that the consumer or business should follow company rules, reporting duties and director responsibilities. and link this back to the idea that a separate legal entity owned by shareholders.",
            marks: 5
        },
        {
            id: "c-sa-169", topic: "business-types",
            q: "Describe how franchise could affect a decision or problem in this kind of situation: A buyer wants to open a store using an established fast-food brand.",
            sample: "This situation involves franchise because it provides a known brand and proven systems. A strong response would explain that the consumer or business should read the franchise agreement carefully before signing. and link this back to the idea that a business using another business brand, systems and support in exchange for fees.",
            marks: 4
        },
        {
            id: "c-sa-170", topic: "business-types",
            q: "Describe how co-operative could affect a decision or problem in this kind of situation: A group of producers wants equal voting power and shared services.",
            sample: "This situation involves co-operative because it promotes democratic control and member support. A strong response would explain that the consumer or business should join or form it when collective benefits matter more than outside investors. and link this back to the idea that an organisation owned and controlled by members for their shared benefit.",
            marks: 5
        },
        {
            id: "c-sa-171", topic: "business-types",
            q: "Describe how not-for-profit organisation could affect a decision or problem in this kind of situation: A community group runs a shop to raise money for youth programs.",
            sample: "This situation involves not-for-profit organisation because it focuses on a social, cultural or community mission. A strong response would explain that the consumer or business should manage money carefully so the mission can continue. and link this back to the idea that an organisation that uses surplus funds to support its purpose rather than pay profits to owners.",
            marks: 4
        },
        {
            id: "c-sa-172", topic: "business-types",
            q: "Describe how limited liability could affect a decision or problem in this kind of situation: A company owes money, but shareholders do not have to sell personal assets beyond their investment.",
            sample: "This situation involves limited liability because it reduces personal risk and can encourage investment. A strong response would explain that the consumer or business should understand which business structures offer it and which do not. and link this back to the idea that protection that limits how much owners or shareholders can lose personally from business debts.",
            marks: 5
        },

        /* ===== Stakeholders & corporate responsibility — expansion ===== */
        {
            id: "c-sa-173", topic: "business-stakeholders",
            q: "Explain owners and give ONE example linked to Commerce.",
            sample: "In Commerce, owners means the people who invest in and control a business. Example: A café owner deciding whether sales are strong enough to hire more staff. This matters because understanding their goals helps explain many business choices.",
            marks: 3
        },
        {
            id: "c-sa-174", topic: "business-stakeholders",
            q: "Explain employees and give ONE example linked to Commerce.",
            sample: "In Commerce, employees means workers whose pay, safety and training are affected by business decisions. Example: Giving baristas training before launching a new coffee machine. This matters because considering employees can improve morale and productivity.",
            marks: 4
        },
        {
            id: "c-sa-175", topic: "business-stakeholders",
            q: "Explain customers and give ONE example linked to Commerce.",
            sample: "In Commerce, customers means the people who buy the goods or services of the business. Example: Adding clearer labels because customers want easier comparison. This matters because satisfying customers supports repeat sales and reputation.",
            marks: 4
        },
        {
            id: "c-sa-176", topic: "business-stakeholders",
            q: "Explain suppliers and give ONE example linked to Commerce.",
            sample: "In Commerce, suppliers means businesses or people who provide stock, materials or services. Example: A shop working closely with a local supplier to avoid stock shortages. This matters because strong supplier relationships improve reliability and quality.",
            marks: 5
        },
        {
            id: "c-sa-177", topic: "business-stakeholders",
            q: "Explain community and give ONE example linked to Commerce.",
            sample: "In Commerce, community means the local area and wider society affected by a business. Example: Sponsoring local sport while also managing waste responsibly. This matters because considering community impact helps businesses earn trust and support.",
            marks: 4
        },
        {
            id: "c-sa-178", topic: "business-stakeholders",
            q: "Explain government and give ONE example linked to Commerce.",
            sample: "In Commerce, government means local, state and federal authorities that collect tax and enforce laws. Example: Paying tax and meeting food-safety standards. This matters because government oversight helps keep markets fair and safe.",
            marks: 5
        },
        {
            id: "c-sa-179", topic: "business-stakeholders",
            q: "Explain triple bottom line and give ONE example linked to Commerce.",
            sample: "In Commerce, triple bottom line means measuring success by profit, people and planet, not profit alone. Example: A café reducing waste while keeping prices fair and staff supported. This matters because it encourages decisions that are financially, socially and environmentally responsible.",
            marks: 4
        },
        {
            id: "c-sa-180", topic: "business-stakeholders",
            q: "Describe how owners could affect a decision or problem in this kind of situation: Owners want higher profit while deciding whether to expand.",
            sample: "This situation involves owners because understanding their goals helps explain many business choices. A strong response would explain that the consumer or business should balance profit goals with the needs of other stakeholders. and link this back to the idea that the people who invest in and control a business.",
            marks: 4
        },
        {
            id: "c-sa-181", topic: "business-stakeholders",
            q: "Describe how employees could affect a decision or problem in this kind of situation: A business changes rosters and training after introducing new technology.",
            sample: "This situation involves employees because considering employees can improve morale and productivity. A strong response would explain that the consumer or business should consult staff and provide fair conditions when changes are made. and link this back to the idea that workers whose pay, safety and training are affected by business decisions.",
            marks: 5
        },
        {
            id: "c-sa-182", topic: "business-stakeholders",
            q: "Describe how customers could affect a decision or problem in this kind of situation: A shop changes its opening hours after customer feedback.",
            sample: "This situation involves customers because satisfying customers supports repeat sales and reputation. A strong response would explain that the consumer or business should listen to complaints, improve quality and communicate honestly. and link this back to the idea that the people who buy the goods or services of the business.",
            marks: 5
        },
        {
            id: "c-sa-183", topic: "business-stakeholders",
            q: "Describe how suppliers could affect a decision or problem in this kind of situation: A café depends on a bakery delivering fresh products on time.",
            sample: "This situation involves suppliers because strong supplier relationships improve reliability and quality. A strong response would explain that the consumer or business should pay on time and communicate clearly about orders and expectations. and link this back to the idea that businesses or people who provide stock, materials or services.",
            marks: 4
        },
        {
            id: "c-sa-184", topic: "business-stakeholders",
            q: "Describe how community could affect a decision or problem in this kind of situation: A new factory creates jobs but also increases traffic and noise.",
            sample: "This situation involves community because considering community impact helps businesses earn trust and support. A strong response would explain that the consumer or business should reduce negative impacts and contribute positively where possible. and link this back to the idea that the local area and wider society affected by a business.",
            marks: 5
        },
        {
            id: "c-sa-185", topic: "business-stakeholders",
            q: "Describe how government could affect a decision or problem in this kind of situation: A business must obey safety, tax and employment rules.",
            sample: "This situation involves government because government oversight helps keep markets fair and safe. A strong response would explain that the consumer or business should follow laws and respond properly to inspections or reporting duties. and link this back to the idea that local, state and federal authorities that collect tax and enforce laws.",
            marks: 4
        },
        {
            id: "c-sa-186", topic: "business-stakeholders",
            q: "Describe how triple bottom line could affect a decision or problem in this kind of situation: A business chooses reusable packaging even though it costs more at first.",
            sample: "This situation involves triple bottom line because it encourages decisions that are financially, socially and environmentally responsible. A strong response would explain that the consumer or business should weigh financial, social and environmental outcomes before making major choices. and link this back to the idea that measuring success by profit, people and planet, not profit alone.",
            marks: 5
        },

        /* ===== Communicating commerce information (COM5-8/9) — expansion ===== */
        {
            id: "c-sa-187", topic: "communication",
            q: "Explain primary research and give ONE example linked to Commerce.",
            sample: "In Commerce, primary research means original information collected directly by the student, such as surveys or interviews. Example: Using survey responses from your own class in a report. This matters because it provides first-hand evidence tailored to the research question.",
            marks: 3
        },
        {
            id: "c-sa-188", topic: "communication",
            q: "Explain secondary research and give ONE example linked to Commerce.",
            sample: "In Commerce, secondary research means information gathered by other people and then used in your report. Example: Using an RBA chart or ABS table in a research task. This matters because it gives background information and trusted data from larger studies.",
            marks: 4
        },
        {
            id: "c-sa-189", topic: "communication",
            q: "Explain reliability and give ONE example linked to Commerce.",
            sample: "In Commerce, reliability means the trustworthiness of a source based on authority, accuracy and currency. Example: Preferring ABS data over an anonymous social-media post. This matters because it helps students choose evidence they can defend.",
            marks: 4
        },
        {
            id: "c-sa-190", topic: "communication",
            q: "Explain bias and give ONE example linked to Commerce.",
            sample: "In Commerce, bias means a one-sided view that can shape how information is presented. Example: Realising an influencer review is sponsored and may not be fully objective. This matters because spotting it helps students judge evidence fairly.",
            marks: 5
        },
        {
            id: "c-sa-191", topic: "communication",
            q: "Explain data visualisation and give ONE example linked to Commerce.",
            sample: "In Commerce, data visualisation means showing information clearly using graphs, charts, tables or diagrams. Example: Using a bar chart to compare spending categories. This matters because it helps audiences understand patterns quickly.",
            marks: 4
        },
        {
            id: "c-sa-192", topic: "communication",
            q: "Explain referencing and give ONE example linked to Commerce.",
            sample: "In Commerce, referencing means acknowledging where ideas, quotations and data came from. Example: Listing the ABS as the source beneath a graph. This matters because it avoids plagiarism and lets readers verify evidence.",
            marks: 5
        },
        {
            id: "c-sa-193", topic: "communication",
            q: "Explain collaboration and give ONE example linked to Commerce.",
            sample: "In Commerce, collaboration means working with others through shared roles, communication and deadlines. Example: One student collecting data while another designs the slides and both review the final work. This matters because it helps teams use time and skills effectively.",
            marks: 4
        },
        {
            id: "c-sa-194", topic: "communication",
            q: "Describe how primary research could affect a decision or problem in this kind of situation: A class surveys Year 9 students about spending habits.",
            sample: "This situation involves primary research because it provides first-hand evidence tailored to the research question. A strong response would explain that the consumer or business should collect the data ethically and organise it clearly. and link this back to the idea that original information collected directly by the student, such as surveys or interviews.",
            marks: 4
        },
        {
            id: "c-sa-195", topic: "communication",
            q: "Describe how secondary research could affect a decision or problem in this kind of situation: A student reads ABS and ASIC reports before writing about consumer trends.",
            sample: "This situation involves secondary research because it gives background information and trusted data from larger studies. A strong response would explain that the consumer or business should choose current, reliable sources and record the details for citation. and link this back to the idea that information gathered by other people and then used in your report.",
            marks: 5
        },
        {
            id: "c-sa-196", topic: "communication",
            q: "Describe how reliability could affect a decision or problem in this kind of situation: Two websites disagree, but only one cites recent government data.",
            sample: "This situation involves reliability because it helps students choose evidence they can defend. A strong response would explain that the consumer or business should check the author, date, evidence and purpose before using the source. and link this back to the idea that the trustworthiness of a source based on authority, accuracy and currency.",
            marks: 5
        },
        {
            id: "c-sa-197", topic: "communication",
            q: "Describe how bias could affect a decision or problem in this kind of situation: A company blog praises its own product and hides weaknesses.",
            sample: "This situation involves bias because spotting it helps students judge evidence fairly. A strong response would explain that the consumer or business should compare the source with others and note any vested interest. and link this back to the idea that a one-sided view that can shape how information is presented.",
            marks: 4
        },
        {
            id: "c-sa-198", topic: "communication",
            q: "Describe how data visualisation could affect a decision or problem in this kind of situation: A report uses a line graph to show monthly inflation over a year.",
            sample: "This situation involves data visualisation because it helps audiences understand patterns quickly. A strong response would explain that the consumer or business should match the visual to the type of data and label it clearly. and link this back to the idea that showing information clearly using graphs, charts, tables or diagrams.",
            marks: 5
        },
        {
            id: "c-sa-199", topic: "communication",
            q: "Describe how referencing could affect a decision or problem in this kind of situation: A student quotes a report and includes the source in a bibliography.",
            sample: "This situation involves referencing because it avoids plagiarism and lets readers verify evidence. A strong response would explain that the consumer or business should record source details as you research and cite them consistently. and link this back to the idea that acknowledging where ideas, quotations and data came from.",
            marks: 4
        },
        {
            id: "c-sa-200", topic: "communication",
            q: "Describe how collaboration could affect a decision or problem in this kind of situation: A group divides research, writing and editing tasks for a Commerce presentation.",
            sample: "This situation involves collaboration because it helps teams use time and skills effectively. A strong response would explain that the consumer or business should set roles, share documents and check progress regularly. and link this back to the idea that working with others through shared roles, communication and deadlines.",
            marks: 5
        }
    ],

    long: [
        {
            id: "c-la-1", topic: "consumer-decisions",
            q: "Harper sees two laptops online: Brand A is $899 with a 12-month warranty; Brand B is $1,299 with a 24-month warranty and better reviews. Discuss the factors Harper should consider before deciding, and recommend which she should buy. (8 marks)",
            sample: "Cover: comparison shopping (price vs total value); needs vs wants; warranty length and cost of replacement; consumer reviews as a quality signal; ACL guarantees apply regardless of warranty so the warranty's value is mainly added cover beyond two-year reasonable life; opportunity cost of the $400 difference (savings, accessories); long-term running cost (battery life, repairability). Recommendation must be supported by reasoning — either is defensible if justified.",
            marks: 8
        },
        {
            id: "c-la-2", topic: "personal-finance",
            q: "Explain how setting SMART financial goals can help a Year 9 student manage their money. Use an example to illustrate. (6 marks)",
            sample: "Define SMART. Convert vague desire ('save up') into actionable plan ('save $300 for a bike by December via $25/week from babysitting'). Discuss benefits: motivation, tracking, ability to adjust budget, sense of progress. Worked example showing weekly saving plan and monitoring.",
            marks: 6
        },
        {
            id: "c-la-3", topic: "money-policy",
            q: "Discuss how RBA interest-rate changes affect both consumers and small businesses. (8 marks)",
            sample: "Outline RBA's role and the cash rate. Effect on consumers: higher rates → mortgage and credit-card interest rises, less disposable income, more incentive to save. Lower rates → cheaper borrowing, more spending, savings earn less. Effect on small businesses: borrowing costs for expansion change; consumer spending demand changes; supplier costs ripple through. Use cause-and-effect chains and recent context (e.g. 2022–24 hikes increasing mortgage stress).",
            marks: 8
        },
        {
            id: "c-la-4", topic: "consumer-rights",
            q: "Critically evaluate the effectiveness of the Australian Consumer Law (ACL) in protecting Australian consumers. Refer to AT LEAST TWO specific provisions. (10 marks)",
            sample: "Strengths: nine consumer guarantees on goods (acceptable quality, fitness for purpose, match description, etc.); enforced by ACCC and state Fair Trading; thresholds raised to $100k from 2021; cooling-off periods on unsolicited sales; misleading-conduct provisions used against greenwashing and bait advertising. Weaknesses: enforcement reliant on consumer awareness and complaint; ACCC resourcing limited; remedies sometimes slow; harder for consumers to act against multinationals selling cross-border; some online platforms remain ambiguous (review-bombing, dark patterns). Reasoned conclusion balancing both — strong framework but uneven enforcement.",
            marks: 10
        },
        {
            id: "c-la-5", topic: "business-stakeholders",
            q: "Discuss the role of CSR and the triple bottom line in modern Australian businesses. Use a specific Australian example. (10 marks)",
            sample: "Define CSR and the triple bottom line. Discuss tensions between profit and stakeholder outcomes. Australian example (e.g. Atlassian's emissions reduction and B-Corp certification, Bega's local sourcing, Bunnings' community grants). Strengths: brand differentiation, employee retention, regulatory pre-empting, long-term resilience. Risks: greenwashing, short-term profit pressure, inconsistent reporting standards. Conclusion: CSR and TBL are increasingly mainstream but credibility depends on independent verification (B-Corp, audited sustainability reports).",
            marks: 10
        },
        {
            id: "c-la-6", topic: "communication",
            q: "Plan a research report titled 'How does Buy Now Pay Later affect Australian teenagers?' Identify TWO primary and TWO secondary sources, outline ethical and reliability considerations, and propose a structure for the final report. (10 marks — COM5-7/8/9)",
            sample: "Primary: 1) Survey of Year 9 peers (anonymous, parental consent) on BNPL use and concerns; 2) Interview with a financial counsellor (e.g. National Debt Helpline) — book in advance, use prepared questions. Secondary: 1) ASIC reports on BNPL (e.g. REP 672, REP 760); 2) ABS data on household debt; 3) ACCC enforcement updates. Ethics: consent, anonymity, age-appropriate, declare bias. Reliability: triangulate, prefer government sources, note publication dates. Structure: title page; executive summary; introduction (research question and scope); methodology; findings (with charts); discussion; recommendations; reference list (Harvard or APA); appendices (survey instrument).",
            marks: 10
        },

        /* ===== Consumer rights & responsibilities — expansion ===== */
        {
            id: "c-la-7", topic: "consumer-rights",
            q: "Discuss how consumer rights and responsibilities can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: acceptable quality, fit for purpose and major failure. (6 marks)",
            sample: "High-quality responses should define acceptable quality, fit for purpose and major failure; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-8", topic: "consumer-rights",
            q: "Harper buys a product online, it arrives faulty, and the seller tries to limit her options. Analyse the situation using fit for purpose and proof of purchase, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply fit for purpose and proof of purchase, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-9", topic: "consumer-rights",
            q: "Evaluate the strengths and possible challenges of consumer rights and responsibilities in Australia. Refer to ideas such as acceptable quality, cooling-off period and express warranty. (10 marks)",
            sample: "High-quality responses should outline the benefits of consumer rights and responsibilities, note possible limits or risks, refer to ideas such as acceptable quality, cooling-off period and express warranty, and reach a balanced conclusion.",
            marks: 10
        },

        /* ===== Making informed consumer decisions — expansion ===== */
        {
            id: "c-la-10", topic: "consumer-decisions",
            q: "Discuss how informed consumer decision-making can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: needs and wants, comparison shopping and information search. (6 marks)",
            sample: "High-quality responses should define needs and wants, comparison shopping and information search; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-11", topic: "consumer-decisions",
            q: "Harper is choosing between several products with different prices, features and reviews. Analyse the situation using comparison shopping and evaluating alternatives, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply comparison shopping and evaluating alternatives, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-12", topic: "consumer-decisions",
            q: "Evaluate the strengths and possible challenges of informed consumer decision-making in Australia. Refer to ideas such as needs and wants, impulse buying and value for money. (10 marks)",
            sample: "High-quality responses should outline the benefits of informed consumer decision-making, note possible limits or risks, refer to ideas such as needs and wants, impulse buying and value for money, and reach a balanced conclusion.",
            marks: 10
        },

        /* ===== Consumer protection — ACCC, scams, complaints — expansion ===== */
        {
            id: "c-la-13", topic: "consumer-protection",
            q: "Discuss how consumer protection can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: ACCC, NSW Fair Trading and misleading or deceptive conduct. (6 marks)",
            sample: "High-quality responses should define ACCC, NSW Fair Trading and misleading or deceptive conduct; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-14", topic: "consumer-protection",
            q: "A student sees a suspicious social-media ad, buys from it, and then struggles to solve the problem. Analyse the situation using NSW Fair Trading and bait advertising, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply NSW Fair Trading and bait advertising, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-15", topic: "consumer-protection",
            q: "Evaluate the strengths and possible challenges of consumer protection in Australia. Refer to ideas such as ACCC, phishing scam warning signs and complaint process. (10 marks)",
            sample: "High-quality responses should outline the benefits of consumer protection, note possible limits or risks, refer to ideas such as ACCC, phishing scam warning signs and complaint process, and reach a balanced conclusion.",
            marks: 10
        },
        {
            id: "c-la-16", topic: "consumer-protection",
            q: "Plan a checklist, report or strategy that uses consumer protection to solve a real-world problem. Refer to misleading or deceptive conduct and at least one other concept such as bait advertising or product safety recall. (8 marks)",
            sample: "High-quality responses should present a clear plan, include steps or criteria, show how misleading or deceptive conduct links with at least one other concept such as bait advertising or product safety recall, and explain why the plan would work.",
            marks: 8
        },

        /* ===== Personal finance & budgeting — expansion ===== */
        {
            id: "c-la-17", topic: "personal-finance",
            q: "Discuss how personal finance and budgeting can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: income, fixed expenses and variable expenses. (6 marks)",
            sample: "High-quality responses should define income, fixed expenses and variable expenses; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-18", topic: "personal-finance",
            q: "A Year 9 student wants to balance pocket money, casual income and regular spending. Analyse the situation using fixed expenses and budget, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply fixed expenses and budget, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-19", topic: "personal-finance",
            q: "Evaluate the strengths and possible challenges of personal finance and budgeting in Australia. Refer to ideas such as income, SMART financial goal and emergency fund. (10 marks)",
            sample: "High-quality responses should outline the benefits of personal finance and budgeting, note possible limits or risks, refer to ideas such as income, SMART financial goal and emergency fund, and reach a balanced conclusion.",
            marks: 10
        },

        /* ===== Saving, banking & investing — expansion ===== */
        {
            id: "c-la-20", topic: "saving-investing",
            q: "Discuss how saving, banking and investing can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: high-interest savings account, term deposit and shares. (6 marks)",
            sample: "High-quality responses should define high-interest savings account, term deposit and shares; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-21", topic: "saving-investing",
            q: "A student has savings and must decide where to keep the money for different goals. Analyse the situation using term deposit and diversification, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply term deposit and diversification, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-22", topic: "saving-investing",
            q: "Evaluate the strengths and possible challenges of saving, banking and investing in Australia. Refer to ideas such as high-interest savings account, risk and return and compound interest. (10 marks)",
            sample: "High-quality responses should outline the benefits of saving, banking and investing, note possible limits or risks, refer to ideas such as high-interest savings account, risk and return and compound interest, and reach a balanced conclusion.",
            marks: 10
        },
        {
            id: "c-la-23", topic: "saving-investing",
            q: "Plan a checklist, report or strategy that uses saving, banking and investing to solve a real-world problem. Refer to shares and at least one other concept such as diversification or liquidity. (8 marks)",
            sample: "High-quality responses should present a clear plan, include steps or criteria, show how shares links with at least one other concept such as diversification or liquidity, and explain why the plan would work.",
            marks: 8
        },

        /* ===== Payment options & credit — expansion ===== */
        {
            id: "c-la-24", topic: "payment-credit",
            q: "Discuss how payment options and credit can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: debit card, credit card and Buy Now Pay Later. (6 marks)",
            sample: "High-quality responses should define debit card, credit card and Buy Now Pay Later; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-25", topic: "payment-credit",
            q: "A teenager is comparing debit, credit and instalment-payment options for everyday and online purchases. Analyse the situation using credit card and direct debit, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply credit card and direct debit, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-26", topic: "payment-credit",
            q: "Evaluate the strengths and possible challenges of payment options and credit in Australia. Refer to ideas such as debit card, interest and late fees and identity theft protection. (10 marks)",
            sample: "High-quality responses should outline the benefits of payment options and credit, note possible limits or risks, refer to ideas such as debit card, interest and late fees and identity theft protection, and reach a balanced conclusion.",
            marks: 10
        },

        /* ===== The economic environment — expansion ===== */
        {
            id: "c-la-27", topic: "economic-environment",
            q: "Discuss how the economic environment can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: scarcity, GDP and unemployment. (6 marks)",
            sample: "High-quality responses should define scarcity, GDP and unemployment; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-28", topic: "economic-environment",
            q: "A family notices higher prices, changing job opportunities and different levels of economic confidence. Analyse the situation using GDP and inflation, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply GDP and inflation, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-29", topic: "economic-environment",
            q: "Evaluate the strengths and possible challenges of the economic environment in Australia. Refer to ideas such as scarcity, standard of living and productivity. (10 marks)",
            sample: "High-quality responses should outline the benefits of the economic environment, note possible limits or risks, refer to ideas such as scarcity, standard of living and productivity, and reach a balanced conclusion.",
            marks: 10
        },

        /* ===== Markets, supply & demand, pricing — expansion ===== */
        {
            id: "c-la-30", topic: "markets-pricing",
            q: "Discuss how markets, supply, demand and pricing can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: demand, supply and equilibrium price. (6 marks)",
            sample: "High-quality responses should define demand, supply and equilibrium price; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-31", topic: "markets-pricing",
            q: "Weather, tastes and competition change the price and quantity of products sold in local markets. Analyse the situation using supply and shortage, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply supply and shortage, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-32", topic: "markets-pricing",
            q: "Evaluate the strengths and possible challenges of markets, supply, demand and pricing in Australia. Refer to ideas such as demand, surplus and substitute goods. (10 marks)",
            sample: "High-quality responses should outline the benefits of markets, supply, demand and pricing, note possible limits or risks, refer to ideas such as demand, surplus and substitute goods, and reach a balanced conclusion.",
            marks: 10
        },
        {
            id: "c-la-33", topic: "markets-pricing",
            q: "Plan a checklist, report or strategy that uses markets, supply, demand and pricing to solve a real-world problem. Refer to equilibrium price and at least one other concept such as shortage or complementary goods. (8 marks)",
            sample: "High-quality responses should present a clear plan, include steps or criteria, show how equilibrium price links with at least one other concept such as shortage or complementary goods, and explain why the plan would work.",
            marks: 8
        },

        /* ===== Money, RBA & government policy — expansion ===== */
        {
            id: "c-la-34", topic: "money-policy",
            q: "Discuss how money and government policy can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: cash rate, monetary policy and inflation target. (6 marks)",
            sample: "High-quality responses should define cash rate, monetary policy and inflation target; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-35", topic: "money-policy",
            q: "The RBA changes interest rates while inflation is above target and households feel the effect. Analyse the situation using monetary policy and contractionary policy, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply monetary policy and contractionary policy, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-36", topic: "money-policy",
            q: "Evaluate the strengths and possible challenges of money and government policy in Australia. Refer to ideas such as cash rate, expansionary policy and effects on savers and borrowers. (10 marks)",
            sample: "High-quality responses should outline the benefits of money and government policy, note possible limits or risks, refer to ideas such as cash rate, expansionary policy and effects on savers and borrowers, and reach a balanced conclusion.",
            marks: 10
        },

        /* ===== The business environment — expansion ===== */
        {
            id: "c-la-37", topic: "business-environment",
            q: "Discuss how the business environment can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: location, competition and government regulation. (6 marks)",
            sample: "High-quality responses should define location, competition and government regulation; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-38", topic: "business-environment",
            q: "A local café is planning to open near the school and must respond to many external factors. Analyse the situation using competition and technology and e-commerce, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply competition and technology and e-commerce, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-39", topic: "business-environment",
            q: "Evaluate the strengths and possible challenges of the business environment in Australia. Refer to ideas such as location, innovation and entrepreneurship. (10 marks)",
            sample: "High-quality responses should outline the benefits of the business environment, note possible limits or risks, refer to ideas such as location, innovation and entrepreneurship, and reach a balanced conclusion.",
            marks: 10
        },
        {
            id: "c-la-40", topic: "business-environment",
            q: "Plan a checklist, report or strategy that uses the business environment to solve a real-world problem. Refer to government regulation and at least one other concept such as technology and e-commerce or globalisation. (8 marks)",
            sample: "High-quality responses should present a clear plan, include steps or criteria, show how government regulation links with at least one other concept such as technology and e-commerce or globalisation, and explain why the plan would work.",
            marks: 8
        },

        /* ===== Business ownership types — expansion ===== */
        {
            id: "c-la-41", topic: "business-types",
            q: "Discuss how business ownership types can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: sole trader, partnership and company. (6 marks)",
            sample: "High-quality responses should define sole trader, partnership and company; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-42", topic: "business-types",
            q: "Two friends want to start a small business and must choose the structure that suits their goals and risks. Analyse the situation using partnership and franchise, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply partnership and franchise, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-43", topic: "business-types",
            q: "Evaluate the strengths and possible challenges of business ownership types in Australia. Refer to ideas such as sole trader, co-operative and not-for-profit organisation. (10 marks)",
            sample: "High-quality responses should outline the benefits of business ownership types, note possible limits or risks, refer to ideas such as sole trader, co-operative and not-for-profit organisation, and reach a balanced conclusion.",
            marks: 10
        },
        {
            id: "c-la-44", topic: "business-types",
            q: "Plan a checklist, report or strategy that uses business ownership types to solve a real-world problem. Refer to company and at least one other concept such as franchise or limited liability. (8 marks)",
            sample: "High-quality responses should present a clear plan, include steps or criteria, show how company links with at least one other concept such as franchise or limited liability, and explain why the plan would work.",
            marks: 8
        },

        /* ===== Stakeholders & corporate responsibility — expansion ===== */
        {
            id: "c-la-45", topic: "business-stakeholders",
            q: "Discuss how stakeholders and corporate responsibility can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: owners, employees and customers. (6 marks)",
            sample: "High-quality responses should define owners, employees and customers; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-46", topic: "business-stakeholders",
            q: "A business decision changes profits, jobs, customer experience and environmental impacts at the same time. Analyse the situation using employees and suppliers, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply employees and suppliers, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-47", topic: "business-stakeholders",
            q: "Evaluate the strengths and possible challenges of stakeholders and corporate responsibility in Australia. Refer to ideas such as owners, community and government. (10 marks)",
            sample: "High-quality responses should outline the benefits of stakeholders and corporate responsibility, note possible limits or risks, refer to ideas such as owners, community and government, and reach a balanced conclusion.",
            marks: 10
        },

        /* ===== Communicating commerce information (COM5-8/9) — expansion ===== */
        {
            id: "c-la-48", topic: "communication",
            q: "Discuss how commerce communication and research can help a Year 9 student make informed decisions. Refer to at least TWO of the following ideas: primary research, secondary research and reliability. (6 marks)",
            sample: "High-quality responses should define primary research, secondary research and reliability; explain how they shape choices; use a relevant Australian example; and reach a justified judgement about the best decision.",
            marks: 6
        },
        {
            id: "c-la-49", topic: "communication",
            q: "A class is preparing a Commerce report on teenage spending and must communicate evidence clearly. Analyse the situation using secondary research and bias, then recommend the best course of action. (8 marks)",
            sample: "High-quality responses should identify the key issue in the scenario, apply secondary research and bias, compare realistic options, explain short-term and long-term effects, and finish with a supported recommendation.",
            marks: 8
        },
        {
            id: "c-la-50", topic: "communication",
            q: "Evaluate the strengths and possible challenges of commerce communication and research in Australia. Refer to ideas such as primary research, data visualisation and referencing. (10 marks)",
            sample: "High-quality responses should outline the benefits of commerce communication and research, note possible limits or risks, refer to ideas such as primary research, data visualisation and referencing, and reach a balanced conclusion.",
            marks: 10
        }
    ],

    /* =========================================================
       PRACTICE QUESTIONS — 4 topic groups × 10 exams × 20 questions.
       Generated at boot from `practiceTopics`. (Topic 1 covers
       Consumer & Financial Decisions; Topic 2 covers Economic &
       Business Environment.)
       ========================================================= */
    practiceTopics: [
        { id: "consumer",   name: "Topic 1 · Consumer Rights & Decisions", outcomes: "COM5-1 · COM5-2", sourceTopics: ["consumer-rights", "consumer-decisions", "consumer-protection"] },
        { id: "finance",    name: "Topic 1 · Personal Finance, Saving & Payments", outcomes: "COM5-1 · COM5-2", sourceTopics: ["personal-finance", "saving-investing", "payment-credit"] },
        { id: "economy",    name: "Topic 2 · The Economic Environment", outcomes: "COM5-1 · COM5-8", sourceTopics: ["economic-environment", "markets-pricing", "money-policy"] },
        { id: "business",   name: "Topic 2 · The Business Environment", outcomes: "COM5-1 · COM5-2 · COM5-9", sourceTopics: ["business-environment", "business-types", "business-stakeholders", "communication"] }
    ],
    practiceExams: [],

    /* =========================================================
       MOCK EXAMS — full-length, mixed across both topics.
       Lock-in answers; best score remembered across retakes.
       Each mock: 20 MCQ + 10 short + 2 long.
       ========================================================= */
                    mockExams: [
        {
            id: "mock-1",
            name: "Mock Exam 1",
            focus: "Half-Yearly simulation — broad balanced mix",
            duration: 60,
            questionIds: [
                "c-mcq-3","c-mcq-13","c-mcq-23","c-mcq-31","c-mcq-40","c-mcq-48","c-mcq-56","c-mcq-66",
                "c-mcq-73","c-mcq-79","c-mcq-84","c-mcq-91","c-mcq-97","c-mcq-8","c-mcq-18","c-mcq-28",
                "c-mcq-36","c-mcq-45","c-mcq-53","c-mcq-61","c-sa-117","c-sa-131","c-sa-146","c-sa-159",
                "c-sa-173","c-sa-33","c-sa-47","c-sa-61","c-sa-76","c-sa-89","c-la-49","c-la-8"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — balanced topic rotation A",
            duration: 60,
            questionIds: [
                "c-mcq-288","c-mcq-317","c-mcq-348","c-mcq-380","c-mcq-410","c-mcq-440","c-mcq-102","c-mcq-105",
                "c-mcq-135","c-mcq-167","c-mcq-197","c-mcq-228","c-mcq-259","c-mcq-293","c-mcq-322","c-mcq-354",
                "c-mcq-385","c-mcq-415","c-mcq-445","c-mcq-474","c-sa-19","c-sa-51","c-sa-65","c-sa-81",
                "c-sa-93","c-sa-103","c-sa-120","c-sa-135","c-sa-150","c-sa-163","c-la-11","c-la-46"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — balanced topic rotation B",
            duration: 60,
            questionIds: [
                "c-mcq-479","c-mcq-110","c-mcq-140","c-mcq-172","c-mcq-202","c-mcq-233","c-mcq-264","c-mcq-298",
                "c-mcq-328","c-mcq-359","c-mcq-391","c-mcq-421","c-mcq-450","c-mcq-484","c-mcq-115","c-mcq-145",
                "c-mcq-176","c-mcq-206","c-mcq-237","c-mcq-268","c-sa-107","c-sa-123","c-sa-139","c-sa-153",
                "c-sa-179","c-sa-187","c-sa-23","c-sa-37","c-sa-69","c-sa-86","c-la-43","c-la-15"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — balanced topic rotation C",
            duration: 60,
            questionIds: [
                "c-mcq-273","c-mcq-303","c-mcq-333","c-mcq-364","c-mcq-396","c-mcq-426","c-mcq-454","c-mcq-489",
                "c-mcq-120","c-mcq-150","c-mcq-181","c-mcq-211","c-mcq-242","c-mcq-278","c-mcq-308","c-mcq-338",
                "c-mcq-370","c-mcq-401","c-mcq-431","c-mcq-459","c-sa-193","c-sa-27","c-sa-41","c-sa-55",
                "c-sa-73","c-sa-97","c-sa-111","c-sa-126","c-sa-143","c-sa-167","c-la-22","c-la-39"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review",
            duration: 75,
            questionIds: [
                "c-mcq-464","c-mcq-493","c-mcq-125","c-mcq-155","c-mcq-186","c-mcq-216","c-mcq-247","c-mcq-283",
                "c-mcq-313","c-mcq-344","c-mcq-375","c-mcq-406","c-mcq-437","c-mcq-468","c-mcq-498","c-mcq-130",
                "c-mcq-160","c-mcq-191","c-mcq-221","c-mcq-252","c-sa-101","c-sa-115","c-sa-129","c-sa-157",
                "c-sa-171","c-sa-184","c-sa-198","c-sa-31","c-sa-45","c-sa-59","c-la-35","c-la-18"
            ]
        }
    ]
};
