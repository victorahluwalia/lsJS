const rlSync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function validAnswerKeepGoing(answer) {
  return (answer === "y" || answer === "n");
}

prompt('Hi! Welcome to the calculator.');

while (true) {

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

prompt(`The result of the calculation is: ${result}`);

prompt('Would you like to perform another calculation ? (y/n)')
let keepGoing = rlSync.question().toLowerCase();

while (!validAnswerKeepGoing(keepGoing)) {
  prompt('You seem to have entered an invalid choice. Please enter either of the following: y / n')
  keepGoing = rlSync.question().toLowerCase();
}

if (keepGoing === "n") {
  prompt('Thank you for using the calculator today.')
  break;
}

}




