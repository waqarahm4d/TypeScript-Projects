import inquirer from "inquirer";
const inputs = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter your ID"
    },
    {
        type: "input",
        name: "pwd",
        message: "Password: "
    },
    {
        type: "list",
        name: "accType",
        choices: ["Current", "Saving"],
        message: "Choose Account Type:"
    },
    {
        type: "list",
        name: "tranxnType",
        choices: ["Widthdraw", "Instant Cash", "Balance Inquiry"],
        message: "Choose Transaction Type: ",
        when(inputs) {
            return inputs.accType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "3000", "4000", "5000", "10000"],
        message: "Select Amount: ",
        when(inputs) {
            return inputs.tranxnType == "Instant Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount to widthdraw: ",
        when(inputs) {
            return inputs.tranxnType == "Widthdraw";
        }
    }
]);
const { userId, pwd, accType, tranxnType, amount } = inputs;
if (userId && pwd) {
    const balance = Math.floor(Math.random() * 100000);
    if (tranxnType == "Balance Inquiry") {
        console.log(`Current Balance is ${balance} `);
    }
    else {
        if (amount < balance) {
            const rem = balance - amount;
            console.log(`Remaining Balance is ${rem}`);
        }
        else {
            console.log("Insuffient Balance");
        }
    }
}
