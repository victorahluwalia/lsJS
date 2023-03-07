console.clear();

const readlineSync = require('readline-sync');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  l: 'lizard',
  S: 'spock'
};
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

let userScore = 0;
let computerScore = 0;
let roundWinner = undefined;
let gameWinner = undefined;

function prompt(message) {
  console.log(`=> ${message}`);
}

function determineWinner(userChoice, computerChoice) {
  if (WINNING_MOVES[userChoice].includes(computerChoice)) {
    roundWinner = 'User';
  } else if (WINNING_MOVES[computerChoice].includes(userChoice)) {
    roundWinner =  'Computer';
  } else {
    roundWinner = 'tie';
  }
}

function keepScore() {
  if (roundWinner === 'User') {
    userScore += 1;
  } else if (roundWinner === 'Computer') {
    computerScore += 1;
  }
}

function showWinner(userChoice, computerChoice) {
  if (roundWinner === 'User') {
    prompt(`You chose ${userChoice}, the computer chose ${computerChoice}. You win!`);
    prompt(`You: ${userScore}  Computer: ${computerScore}`);
  } else if (roundWinner === 'Computer') {
    prompt(`You chose ${userChoice}, the computer chose ${computerChoice}. The computer wins!`);
    prompt(`You: ${userScore}  Computer: ${computerScore}`);
  } else {
    prompt(`You chose ${userChoice}, the computer chose ${computerChoice}. It's a draw!`);
    prompt(`You: ${userScore}  Computer: ${computerScore}`);
  }
}

function playAgain() {
  if (userScore > computerScore) {
    gameWinner = 'You';
  } else {
    gameWinner = 'Computer';
  }

  prompt(`The winner of the game is : ${gameWinner}!`);
  prompt('Game over. Do you want to play again ? (y/n)');
  let continueGame = readlineSync.question();

  while (continueGame !== 'y' && continueGame !== 'n') {
    prompt('Please enter a valid choice : y / n');
    continueGame = readlineSync.question();
  }

  if (continueGame === 'n') {
    prompt('Thank you for playing.');
    console.clear();
  } else {
    runGame();
  }
}

function runGame() {
  prompt(`Welcome to the ${Object.values(VALID_CHOICES).join(", ")} game!\nEach game session will be a best of 5.`);

  userScore = 0;
  computerScore = 0;

  while (userScore < 3 && computerScore < 3) {
    prompt(`Please choose one of the following: ${Object.keys(VALID_CHOICES).join(", ")}`);
    let userChoice = VALID_CHOICES[readlineSync.question()];

    while (!Object.values(VALID_CHOICES).includes(userChoice)) {
      prompt(`Hmm.. that seems like an invalid choice. Please enter a valid choice from: ${Object.keys(VALID_CHOICES).join(', ')}`);
      userChoice = VALID_CHOICES[readlineSync.question()];
    }

    let randomIndex = Math.floor(Math.random() *
                    Object.values(VALID_CHOICES).length);

    let computerChoice = VALID_CHOICES[Object.keys(VALID_CHOICES)[randomIndex]];

    determineWinner(userChoice, computerChoice);
    keepScore();
    showWinner(userChoice, computerChoice);
  }
  playAgain();
}

runGame();