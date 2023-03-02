// Import readline-sync
const rlSync = require("readline-sync");

// Greet the user
console.log('Hi! Welcome to the calculator.');

// Ask the user for the first number
let firstNumber = Number(rlSync.question("Please enter the first number: "));

// Ask the user for the second number
let secondNumber = Number(rlSync.question("Please enter the second number: "));

// Ask the user for the operation to be performed
let operation = Number(rlSync.question("What operation would you like to perform:\n 1: Add 2: Subtract 3: Multiply 4: Divide : "));

// Calculate the result of the operation
let result; 
if (operation === 1) {
  // Add
  result = firstNumber + secondNumber;
} else if (operation === 2) {
  // Subtract
  result = firstNumber - secondNumber;
} else if (operation === 3) {
  // Multiply
  result = firstNumber * secondNumber;
} else if (operation === 4) {
  // Divide
  result = firstNumber / secondNumber;
}

// Return the result to the user
console.log(`The result of the calculation is: ${result}`);