// Write function to compute amd return factorial of a number using for loop
// Assume that the argument is always a positive integer

// 1fact = 1
// 2fact = 2 * (2-1)
// 3fact = 3 * (3-1) * (3-2) ... and so on

// if number is less than 2; return number
// for loop to return number times number minus n times number - 2n till n = number

function factorial(number) {
  if( number === 1) {
    return number;
  }

  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320







/*
// Refactor the code as to not call randomNumberBetween from two different locations
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let result;
let tries = 0;


do {
  result = randomNumberBetween(1,6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
*/