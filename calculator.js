const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.

const firstNum = +prompt("Please enter a number: ")
const op = prompt("Please enter an operation(+,-,*,/): ")
const secondNum = +prompt("Please enter a second number: ")
if (isNaN(firstNum) || isNaN(secondNum)) {
    console.log("Invalid Entry")
}
else {
let answer = 0

if (op === "+"){
    answer = firstNum + secondNum
    console.log(`${firstNum}${op}${secondNum} = ${answer}`)
}
else if (op === "-"){
    answer = firstNum - secondNum
    console.log(`${firstNum}${op}${secondNum} = ${answer}`)
}
else if (op === "*"){
    answer = firstNum * secondNum
    console.log(`${firstNum}${op}${secondNum} = ${answer}`)
}
else if (op === "/"){
    answer = firstNum / secondNum
    console.log(`${firstNum}${op}${secondNum} = ${answer}`)
}
else { console.log("Invalid operation")
}
}
