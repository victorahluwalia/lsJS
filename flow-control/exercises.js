function evenOrOdd(number) {
  if (Number.isInteger(number)) {
  if (number % 2 === 0) {
    console.log(`even`);
  } else {
    console.log('odd');
  }} else {
    console.log(`The provided number is not an integer.`);
  }
}

let readlineSync = require('readline-sync');
let number = Number(readlineSync.question('Please provide a number: '));

evenOrOdd(number);



let string = readlineSync.question('Please provide a string: ');
let capLongString = function(string) {
  if (string.length > 10) {
    console.log(string.toUpperCase());
  } else {
    console.log(string);
  }
}
capLongString(string);


// Create a function that checks whether a number falls between one of four separate ranges
// Use an if/else statement for logic to check where the number falls within the ranges

// Function
// if less than 0 =>
// if between 0 and 50 => 
// if between 51 and 100 =>
// greater than 100

function numberRange(num) {
  if(num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num >= 0 && num <=50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);