const rlSync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt('Hi! Welcome to the calculator.');

prompt('Please enter the first number: ');
let firstNumber = rlSync.question();

while (invalidNumber(firstNumber)) {
  prompt(`Hmm.. that doesn't look like a number. Please try entering again: `);
  firstNumber = rlSync.question();
}

prompt('Please enter the second number: ');
let secondNumber = rlSync.question();

while (invalidNumber(secondNumber)) {
  prompt(`Hmm.. that doesn't look like a number. Please try entering again: `);
  secondNumber = rlSync.question();
}

prompt('What operation would you like to perform:\n 1: Add 2: Subtract 3: Multiply 4: Divide : ');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('You must chose 1, 2, 3 or 4. Please try again: ');
  operation = rlSync.question();
}

let result;
switch (operation) {
  case '1':
    result = Number(firstNumber) + Number(secondNumber);
    break;
  case '2':
    result = Number(firstNumber) - Number(secondNumber);
    break;
  case '3':
    result = Number(firstNumber) * Number(secondNumber);
    break;
  case '4':
    result = Number(firstNumber) / Number(secondNumber);
    break;
  default:
    break;
}

console.log(`The result of the calculation is: ${result}`);