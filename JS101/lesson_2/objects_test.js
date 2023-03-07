console.clear();

const readlineSync = require("readline-sync");

const CHOICES = {
  rock: {abbreviation: 'r',
    beats: ['scissors', 'lizard'],
  },
  paper: {abbreviation: 'p',
    beats: ['rock', 'spock'],
  },
  scissors: {abbreviation: 's',
    beats: ['paper', 'lizard']
  },
  lizard: {abbreviation: 'l',
    beats: ['paper', 'spock']
  },
  spock: {abbreviation: 'S',
    beats: ['rock', 'scissors']
  },
};

function giveAbbreviation(obj) {
  console.log(obj.length);
}

giveAbbreviation(CHOICES);
/*
console.log(CHOICES);
console.log("\n");
console.log(Object.keys(CHOICES));
console.log(Object.values(CHOICES));
console.log(Object.entries(CHOICES));
console.log(CHOICES['rock']['beats']);


function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Welcome to the ${Object.keys(CHOICES).join(', ')} game!`);

while (true) {
  prompt(`Please choose one of the following: ${Object.keys(CHOICES).join(", ")}`);

  prompt('Do you want to continue playing ? ( y / n )');
  let keepPlaying = readlineSync.question();
  if (keepPlaying === 'n') {
    prompt('Thank you for playing!');
    break;
  }
}

*/