// Prompt user to enter an integer over 0
// Ask user to perform sum or product
// Print desired operation between 1 and entered integer inclusive

const readlineSync = require('readline-sync');

let userInteger = readlineSync.question('Please enter an integer greater than zero: ');
userInteger = parseInt(userInteger);

let operation = readlineSync.question('Enter "s" to compute sum, or "p" to compute the product. ');

let result = 0;


function returnSum(number) {
  let total = 0;

  for (let index = 0; index <= number; index++) {
    total += index;
  }

  return total;
}

function returnProduct(number) {
  let total = 1;

  for (let index = 1; index <= number; index++) {
    total *= index;
  }

  return total;
}

if (operation === "s") {
  result = returnSum(userInteger);
  console.log(`The sum of the integers between 1 and ${userInteger} is ${result}.`);
} else {
  result = returnProduct(userInteger);
  console.log(`The product of the integers between 1 and ${userInteger} is ${result}.`);
}