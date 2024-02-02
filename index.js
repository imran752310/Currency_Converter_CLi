import inquirer from "inquirer";
let currencies = {
    "PKR": {
        "USD": 0.0023,
        "INR": 4.5,
        "PKR": 290
    },
    "INR": {
        "USD": 0.25,
        "PKR": 4.5,
        "INR": 1
    },
    "USD": {
        "PKR": 290,
        "INR": 110,
        "USD": 1
    }
};
async function currencyConverter() {
    while (true) {
        let answer = await inquirer.prompt([
            {
                type: "list",
                name: "from",
                message: "Convert currency from",
                choices: ["PKR", "USD", "INR"]
            },
            {
                type: "list",
                name: "to",
                message: "Convert currency to",
                choices: ["PKR", "USD", "INR"]
            },
            {
                type: "number",
                name: "amount",
                message: "Enter Your  Amount :"
            }
        ]);
        var { from, to, amount } = answer;
        if (from && to && amount) {
            if (currencies[from] && currencies[from][to]) {
                var result = currencies[from][to] * amount;
                console.log(`Your converted currency is ${from} to ${to} = ${result}`);
            }
            else {
                console.log("Invalid input. Please select valid currencies.");
            }
        }
        else {
            console.log("Invalid input. Please provide all the required information.");
        }
        let continueAnswer = await inquirer.prompt([
            {
                type: "confirm",
                name: "continue",
                message: "Do you want to make another conversion?",
                default: false
            }
        ]);
        if (!continueAnswer.continue) {
            break;
        }
    }
}
currencyConverter();
