import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50
    },
    "GBP": {
        "USD": 1.21,
        "GBP": 1,
        "PKR": 271.75
    }
};
const inputs = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select the currency to convert from: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select currency to convert to: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount"
    }
]);
const { from, to, amount } = inputs;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`The ${amount} in ${from} to ${to} equals to ${result}`);
}
else {
    console.log("Try Again");
}
