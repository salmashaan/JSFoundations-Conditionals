const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.

const firstNum = prompt("Please enter number: ")
const op = prompt("Please enter an operation(+,-,*,/): ")
const secondNum = prompt("Please enter a second number: ")
if (isNaN(firstNum) || isNaN(secondNum)) {
    console.log("Invalid Entry")
}
let answer = 0

if (op == "+"){
    answer = parseInt(firstNum) + parseInt(secondNum)
}
else if (op == "-"){
    answer = parseInt(firstNum) - parseInt(secondNum)
}
else if (op == "*"){
    answer = parseInt(firstNum) * parseInt(secondNum)
}
else if (op == "/"){
    answer = parseInt(firstNum) / parseInt(secondNum)
}

console.log(`${firstNum}${op}${secondNum} = ${answer}`)

