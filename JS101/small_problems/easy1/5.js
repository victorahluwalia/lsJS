// Tip calculator
// Prompt for a bill and tip rate
// Compute the tip
// Log tip and total amount of the bull to the console

const readlineSync = require('readline-sync');

let bill = readlineSync.question('What is the bill? ');
bill = parseInt(bill, 10);
let tipPercentage = readlineSync.question('What is the tip percentage? ');
tipPercentage = parseInt(tipPercentage, 10) / 100;

let tip = bill * tipPercentage;
let total = bill + tip;

console.log(`The tip is ${tip.toFixed(2)}`);
console.log(`The total is ${total.toFixed(2)}`);