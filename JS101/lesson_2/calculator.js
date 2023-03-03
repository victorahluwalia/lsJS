const MESSAGES = require("./calculator_messages.json");
const LANGUAGE = "en";
const rlSync = require("readline-sync");

function langMessages(message, lang) {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = langMessages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function validAnswerKeepGoing(answer) {
  return (answer === "y" || answer === "n");
}

prompt('welcome');

while (true) {

prompt('firstNumberPrompt');
let firstNumber = rlSync.question();

while (invalidNumber(firstNumber)) {
  prompt('invalidNumber');
  firstNumber = rlSync.question();
}

prompt('secondNumberPrompt');
let secondNumber = rlSync.question();

while (invalidNumber(secondNumber)) {
  prompt('invalidNumber');
  secondNumber = rlSync.question();
}

prompt('operation');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('invalidOperation');
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

prompt('result') 
console.log(`${result}`);

prompt('newCalculation');
let keepGoing = rlSync.question().toLowerCase();

while (!validAnswerKeepGoing(keepGoing)) {
  prompt('invalidAnswer');
  keepGoing = rlSync.question().toLowerCase();
}

if (keepGoing === "n") {
  prompt('End');
  break;
}

}




