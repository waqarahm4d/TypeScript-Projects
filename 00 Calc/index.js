import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter First Number: "
    },
    {
        type: "number",
        name: "num2",
        message: "Enter Second Number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "x", "/"],
        message: "Choose the operation to perform!"
    }
]);
const { num1, num2, operator } = answers;
if (num1 && num2 && operator) {
    let result = 0;
    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "x") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }
    console.log(`Result is ${result}`);
}
