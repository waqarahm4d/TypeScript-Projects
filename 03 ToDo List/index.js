import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const inputs = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "Enter your todo: "
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Want to add more?",
            default: false
        }
    ]);
    const { todo, addMore } = inputs;
    loop = addMore;
    if (todo) {
        todos.push(todo);
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("Try Again");
    }
}
