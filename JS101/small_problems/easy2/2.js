const readlineSync = require("readline-sync");

let userName = readlineSync.question('What is your name? ');

function answer(name) {
  if (name[name.length - 1] !== "!") {
    console.log(`Hello ${name}.`);
  } else {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
  }
}

answer(userName);