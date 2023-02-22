readlineSync = require('readline-sync');

let age = parseInt(readlineSync.question('How old are you? '));
console.log(`You are ${age} years old.`)
/*
console.log(`In 10 years, you will be ${age+10} years old.`);
console.log(`In 20 years, you will be ${age+20} years old.`);
console.log(`In 30 years, you will be ${age+30} years old.`);
console.log(`In 40 years, you will be ${age+40} years old.`);
*/
console.log(`The results below are generated using a for loop: `);
// Use a for loop to print age in a 10 year interval till the value for 40 years from today is reached
for (let i = 10; i <= 40; i += 10) {
    console.log(`In ${i} years, you will be ${age + i} years old.`);
}