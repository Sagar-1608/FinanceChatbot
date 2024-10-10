const express = require('express');
const bodyParser = require('body-parser');

const chatbotRoutes = require('./routes/chatbotRoutes');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(express.static('public'));

// List of finance-related prompts to be passed to the template
const prompts = [
    "What is a stock?", "How does the stock market work?", "What is a bond?", "What is inflation?", 
    "What is a savings account?", "What is compound interest?", "What is a credit score?", 
    "What is the difference between a loan and a mortgage?", "What is a mutual fund?", "What is an ETF?",
    "What is a dividend?", "How does a 401(k) work?", "What is a Roth IRA?", "What is the Federal Reserve?", 
    "How does a recession affect the economy?", "What are capital gains?", "What is an IPO?", 
    "How do interest rates affect borrowing?", "What is the role of a financial advisor?", 
    "What are the types of insurance?", "What is a budget?", "What is an emergency fund?", 
    "How do credit cards work?", "What is personal finance?", "What is financial planning?", 
    "What is retirement planning?", "What is risk management?", "What is an asset?", "What is a liability?", 
    "How does debt consolidation work?", "What is a hedge fund?", "What is a pension?", 
    "What is social security?", "What are the types of investment strategies?", 
    "How does cryptocurrency work?", "What is blockchain?", "What are the benefits of investing early?", 
    "What is a financial statement?", "What is cash flow?", "How do taxes work?", "What are the types of taxes?",
    "What is the difference between a debit card and a credit card?", "What is bankruptcy?", 
    "What is liquidity in finance?", "What is diversification in investing?", "What is portfolio management?",
    "What is financial literacy?", "What is a tax deduction?", "What is a tax credit?", "What is passive income?"
];

app.get('/', (req, res) => {
    res.render('index', { prompts });
});

app.use('/api/chatbot', chatbotRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
