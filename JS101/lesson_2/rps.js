const readlineSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function decision(userChoice, computerChoice) {
  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt(`You chose ${userChoice}, the computer chose ${computerChoice}. You win!`);
  } else if (((userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'rock'))) {
    prompt(`You chose ${userChoice}, the computer chose ${computerChoice}. The computer wins!`);
  } else {
    prompt(`You chose ${userChoice}, the computer chose ${computerChoice}. It's a draw!`);
  }
}

prompt(`Welcome to the ${VALID_CHOICES.join(', ')} game!`);

while (true) {
  prompt(`Please choose one of the following: ${VALID_CHOICES}`);
  let userChoice = readlineSync.question().toLocaleLowerCase();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(`Hmm.. that seems like an invalid choice. Please enter a valid choice from: ${VALID_CHOICES}.join(', ')`);
    userChoice = readlineSync.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  decision(userChoice, computerChoice);

  prompt('Do you want to play again ? (y/n)');
  let continueGame = readlineSync.question();

  while (continueGame !== 'y' && continueGame !== 'n') {
    prompt('Please enter a valid choice : y / n');
    continueGame = readlineSync.question();
  }

  if (continueGame === 'n') {
    prompt('Thank you for playing.');
    break;
  }
}

