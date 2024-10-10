const express = require('express');
const router = express.Router();

router.post('/message', (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ message: 'Message cannot be empty' });
    }

    // Predefined responses for finance-related queries
    let botResponse = "Sorry, I didn't understand that.";
    const predefinedReplies = {
        "hello": "Hello! How can I assist you with your finance-related queries today?",
        "bye": "Goodbye! Feel free to reach out if you have more finance questions.",
        "how are you": "I'm doing well! How can I help you with your finances?",
        "what is a stock": "A stock represents ownership in a company. When you buy a stock, you're buying a share of that company.",
        "how does the stock market work": "The stock market allows investors to buy and sell shares of publicly traded companies. Prices fluctuate based on supply and demand.",
        "what is a bond": "A bond is a fixed-income investment where an investor loans money to an entity (government or corporate) for a defined period at a fixed interest rate.",
        "what is inflation": "Inflation is the rate at which the general level of prices for goods and services is rising, decreasing purchasing power.",
        "what is a savings account": "A savings account is a deposit account that earns interest, helping you save money over time.",
        "what is compound interest": "Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods.",
        "what is a credit score": "A credit score is a numerical representation of your creditworthiness, which lenders use to determine if you're eligible for loans or credit cards.",
        "what is the difference between a loan and a mortgage": "A loan is borrowed money that you repay with interest. A mortgage is a type of loan specifically for purchasing property.",
        "what is a mutual fund": "A mutual fund pools money from many investors to buy a diversified portfolio of stocks, bonds, or other securities.",
        "what is an ETF": "An ETF (Exchange-Traded Fund) is a type of security that tracks an index, commodity, or sector and is traded like a stock on an exchange.",
        "what is a dividend": "A dividend is a distribution of a portion of a company's earnings to its shareholders.",
        "how does a 401(k) work": "A 401(k) is a retirement savings plan sponsored by an employer. It allows employees to invest part of their salary before taxes.",
        "what is a roth ira": "A Roth IRA is an individual retirement account where contributions are made with after-tax income, and withdrawals in retirement are tax-free.",
        "what is the federal reserve": "The Federal Reserve is the central bank of the United States, regulating the U.S. monetary system and financial institutions.",
        "how does a recession affect the economy": "In a recession, economic activity slows down, leading to higher unemployment, reduced consumer spending, and lower production.",
        "what are capital gains": "Capital gains are the profit you make from selling an asset like stocks, bonds, or real estate for more than you paid for it.",
        "what is an ipo": "An IPO (Initial Public Offering) is when a company first sells its stock to the public.",
        "how do interest rates affect borrowing": "Higher interest rates increase the cost of borrowing, while lower rates make borrowing cheaper, encouraging spending and investment.",
        "what is the role of a financial advisor": "A financial advisor helps you manage your finances, plan for retirement, invest, and achieve financial goals.",
        "what are the types of insurance": "Common types of insurance include health, life, auto, homeowners, and disability insurance.",
        "what is a budget": "A budget is a plan for how you will spend your money, helping you manage income and expenses effectively.",
        "what is an emergency fund": "An emergency fund is savings set aside to cover unexpected expenses like medical bills or car repairs.",
        "how do credit cards work": "Credit cards allow you to borrow money up to a limit to make purchases, which you then repay, often with interest.",
        "what is personal finance": "Personal finance involves managing your money, including saving, investing, and planning for retirement.",
        "what is financial planning": "Financial planning is the process of creating a roadmap for your financial future, including budgeting, saving, and investing.",
        "what is retirement planning": "Retirement planning involves determining your retirement income goals and the actions necessary to achieve them, like saving in 401(k) or IRA accounts.",
        "what is risk management": "Risk management is identifying and minimizing financial risks, such as those from investments, loans, or unexpected expenses.",
        "what is an asset": "An asset is something you own that has value, such as cash, stocks, or real estate.",
        "what is a liability": "A liability is something you owe, such as a loan, mortgage, or credit card debt.",
        "how does debt consolidation work": "Debt consolidation combines multiple debts into one loan with a lower interest rate or more favorable terms.",
        "what is a hedge fund": "A hedge fund is an investment fund that employs various strategies to earn active returns for its investors.",
        "what is a pension": "A pension is a retirement plan where an employer makes contributions to a pool of funds set aside for an employee's future benefit.",
        "what is social security": "Social Security is a U.S. government program that provides retirement, disability, and survivor benefits to eligible individuals.",
        "what are the types of investment strategies": "Common investment strategies include growth investing, value investing, income investing, and passive investing.",
        "how does cryptocurrency work": "Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates independently of a central bank.",
        "what is blockchain": "Blockchain is a decentralized ledger of all transactions across a peer-to-peer network, enabling secure, transparent, and tamper-proof transactions.",
        "what is liquidity in finance": "Liquidity refers to how easily an asset can be converted into cash without affecting its price.",
        "what is diversification in investing": "Diversification involves spreading investments across different assets to reduce risk.",
        "what is portfolio management": "Portfolio management involves selecting and overseeing a collection of investments to meet long-term financial objectives.",
        "what is financial literacy": "Financial literacy is the knowledge and understanding of financial concepts like budgeting, investing, and managing debt."
    };

    // Check if the message matches a predefined response
    for (const key in predefinedReplies) {
        if (userMessage.toLowerCase().includes(key)) {
            botResponse = predefinedReplies[key];
            break;
        }
    }

    res.json({ message: botResponse });
});

module.exports = router;
