

import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    EUR: 0.9,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from Currency",
        type: 'list',
        choices: ['USD', 'EURO', 'GBP', 'IND', 'PKR']
    },
    {
        name: 'to',
        message: "Enter to Currency",
        type: 'list',
        choices: ['USD', 'EURO', 'GBP', 'IND', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter your amount",
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
