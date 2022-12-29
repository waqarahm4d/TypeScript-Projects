import inquirer from "inquirer";
type userType = {
    user: number
}
const userNumber: userType = await inquirer.prompt([
    {
        type:"number",
        name:"user",
        message:"Guess the number..."
    }
])

const sysNumber = Math.floor(Math.random() * 10)
const {user} = userNumber

if(user === sysNumber){
    console.log(`You Won \nComputer Selected ${sysNumber}`)
} else {
    console.log(`You Lost!!! \nComputer Selected ${sysNumber}`)
}