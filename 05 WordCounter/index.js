import inquirer from "inquirer";
const inputs = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter yor sententce to counts words"
    }
]);
const words = inputs.sentence.trim().split(" ");
console.log(`your sentences consists of ${words.length} words.`);
