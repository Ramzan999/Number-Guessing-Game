#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations you have guess right number");
}
else {
    console.log("you have guess wrong number");
}
;
