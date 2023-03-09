/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const readlineSync = require('readline-sync');

let age = Number(readlineSync.question('What is your age? '));
let retirement = Number(readlineSync.question('At what age would you like to retire? '));
let workingYearsLeft = retirement - age;
let today = new Date();
let currentYear = today.getFullYear();
let retirementYear = currentYear + workingYearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);