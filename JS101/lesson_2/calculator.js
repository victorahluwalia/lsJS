const MESSAGES = require("./calculator_messages.json");
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

prompt(MESSAGES['welcome']);

while (true) {

prompt(MESSAGES['firstNumberPrompt']);
let firstNumber = rlSync.question();

while (invalidNumber(firstNumber)) {
  prompt(MESSAGES['invalidNumber']);
  firstNumber = rlSync.question();
}

prompt(MESSAGES['secondNumberPrompt']);
let secondNumber = rlSync.question();

while (invalidNumber(secondNumber)) {
  prompt(MESSAGES['invalidNumber']);
  secondNumber = rlSync.question();
}

prompt(MESSAGES['operation']);
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(MESSAGES['invalidOperation']);
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

prompt(`${MESSAGES['result']} ${result}`);

prompt(MESSAGES['newCalculation']);
let keepGoing = rlSync.question().toLowerCase();

while (!validAnswerKeepGoing(keepGoing)) {
  prompt(MESSAGES['invalidAnswer']);
  keepGoing = rlSync.question().toLowerCase();
}

if (keepGoing === "n") {
  prompt(MESSAGES['End']);
  break;
}

}




