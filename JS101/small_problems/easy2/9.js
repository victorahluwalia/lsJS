// Build a program that randomly generates Teddy's age, 
// and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).
// Teddy is 69 years old!

let teddyAge = 20 + Math.floor(Math.random()*101);

function age(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let newAge = age(20, 120);

console.log(`Teddy is ${teddyAge} years old!`);
console.log(`Also, Teddy is ${newAge} years old!`);