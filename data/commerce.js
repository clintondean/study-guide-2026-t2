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
            focus: "Half-Yearly simulation — Topics 1 & 2 broad mix",
            duration: 60,
            questionIds: [
                "c-mcq-1","c-mcq-11","c-mcq-21","c-mcq-29","c-mcq-38","c-mcq-46","c-mcq-54","c-mcq-64",
                "c-mcq-71","c-mcq-77","c-mcq-82","c-mcq-89","c-mcq-95","c-mcq-3","c-mcq-19","c-mcq-31",
                "c-mcq-47","c-mcq-58","c-mcq-83","c-mcq-90",
                "c-sa-1","c-sa-3","c-sa-6","c-sa-9","c-sa-11","c-sa-12","c-sa-14","c-sa-15","c-sa-17","c-sa-2",
                "c-la-1","c-la-3"
            ]
        },
        {
            id: "mock-2",
            name: "Mock Exam 2",
            focus: "Half-Yearly simulation — consumer-decisions heavy",
            duration: 60,
            questionIds: [
                "c-mcq-4","c-mcq-12","c-mcq-13","c-mcq-14","c-mcq-15","c-mcq-22","c-mcq-26","c-mcq-32",
                "c-mcq-33","c-mcq-39","c-mcq-48","c-mcq-50","c-mcq-55","c-mcq-65","c-mcq-72","c-mcq-78",
                "c-mcq-84","c-mcq-91","c-mcq-96","c-mcq-99",
                "c-sa-2","c-sa-4","c-sa-5","c-sa-7","c-sa-8","c-sa-10","c-sa-13","c-sa-16","c-sa-18","c-sa-3",
                "c-la-2","c-la-4"
            ]
        },
        {
            id: "mock-3",
            name: "Mock Exam 3",
            focus: "Half-Yearly simulation — economic environment heavy",
            duration: 60,
            questionIds: [
                "c-mcq-2","c-mcq-16","c-mcq-23","c-mcq-30","c-mcq-40","c-mcq-49","c-mcq-56","c-mcq-66",
                "c-mcq-73","c-mcq-79","c-mcq-85","c-mcq-92","c-mcq-97","c-mcq-57","c-mcq-67","c-mcq-74",
                "c-mcq-80","c-mcq-86","c-mcq-93","c-mcq-100",
                "c-sa-4","c-sa-5","c-sa-7","c-sa-8","c-sa-9","c-sa-11","c-sa-13","c-sa-14","c-sa-16","c-sa-1",
                "c-la-3","c-la-5"
            ]
        },
        {
            id: "mock-4",
            name: "Mock Exam 4",
            focus: "Half-Yearly simulation — business environment heavy",
            duration: 60,
            questionIds: [
                "c-mcq-5","c-mcq-17","c-mcq-24","c-mcq-34","c-mcq-41","c-mcq-51","c-mcq-59","c-mcq-68",
                "c-mcq-75","c-mcq-77","c-mcq-78","c-mcq-79","c-mcq-82","c-mcq-87","c-mcq-88","c-mcq-94",
                "c-mcq-98","c-mcq-101","c-mcq-102","c-mcq-25",
                "c-sa-3","c-sa-5","c-sa-7","c-sa-12","c-sa-14","c-sa-15","c-sa-16","c-sa-17","c-sa-18","c-sa-6",
                "c-la-5","c-la-6"
            ]
        },
        {
            id: "mock-5",
            name: "Mock Exam 5",
            focus: "Half-Yearly simulation — complete review (hardest mock)",
            duration: 75,
            questionIds: [
                "c-mcq-7","c-mcq-18","c-mcq-27","c-mcq-35","c-mcq-42","c-mcq-52","c-mcq-60","c-mcq-69",
                "c-mcq-76","c-mcq-81","c-mcq-88","c-mcq-94","c-mcq-99","c-mcq-37","c-mcq-43","c-mcq-53",
                "c-mcq-62","c-mcq-70","c-mcq-95","c-mcq-101",
                "c-sa-2","c-sa-6","c-sa-8","c-sa-10","c-sa-11","c-sa-13","c-sa-15","c-sa-16","c-sa-17","c-sa-18",
                "c-la-4","c-la-6"
            ]
        }
    ]
};
