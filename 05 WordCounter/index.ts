import inquirer from "inquirer";
const inputs: {
    sentence: string
} = await inquirer.prompt([
    {
        type:"input",
        name:"sentence",
        message:"Enter yor sententce to counts words"
    }
])

  const words = inputs.sentence.trim().split(" ") // trim() removes extra spaces ( from the beginning & end)

  console.log(`your sentences consists of ${words.length} words.`)