let name = "Jane";
console.log(`Good morning, ${name}!`);


let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}
let fName = getName('Please provide your first name: ');
let lName = getName('Please provide your last name: ');
console.log(`Thanks, ${fName} ${lName}.`);