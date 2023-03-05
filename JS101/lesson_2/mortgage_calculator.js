const readlineSync = require("readline-sync");
const MESSAGES = {
  welcome: 'Welcome to the mortgage calculator!',
  askForLoanAmount: 'What is your required loan amount for the mortgage?',
  invalidAmount: 'Please enter a valid loan amount. (Must be a number greater than zero)',
  askForLoanDuration: 'How many years will be the mortgage?',
  invalidDuration: 'Please enter a valid loan duration in years. (Must be a number greater than zero)',
  askForApr: 'What is your APR? (For example: please input 6 for a 6% APR rate; for a 3.5% APR rate please input 3.5)',
  invalidApr: 'Please enter a valid APR rate. (Must be a number greater than zero)',
  giveMonthlyPayment: 'Your monthly payment will be : ',
  newCalculation: 'Do you want to perform another calculation? (y/n)',
  goodbye: 'Thank you for using the mortgage calculator.'
};

function messageKey(key) {
  return MESSAGES[key];
}

function prompt(message) {
  let text = messageKey(message);
  console.log(`=> ${text}`);
}

function invalidNumber(amount) {
  return (amount.trimStart() === "" ||
          Number.isNaN(Number(amount)) ||
          Number(amount) <= 0);
}

prompt('welcome');

while (true) {
  prompt('askForLoanAmount');
  let loanAmount = readlineSync.question();

  while (invalidNumber(loanAmount)) {
    prompt('invalidAmount');
    loanAmount = readlineSync.question();
  }

  prompt('askForLoanDuration');
  let loanYears = readlineSync.question();

  while (invalidNumber(loanYears)) {
    prompt('invalidDuration');
    loanYears = readlineSync.question();
  }

  prompt('askForApr');
  let annualRate = readlineSync.question();

  while (invalidNumber(annualRate)) {
    prompt('invalidApr');
    annualRate = readlineSync.question();
  }

  let loanMonths = loanYears * 12;
  let monthlyRate = annualRate / (12 * 100);

  let monthlyPayment = loanAmount *
                      (monthlyRate /
                      (1 - Math.pow((1 + monthlyRate), (-loanMonths)))
                      );

  prompt('giveMonthlyPayment');
  console.log(`$ ${monthlyPayment.toFixed(2)}`);

  prompt('newCalculation');
  let keepCalculating = readlineSync.question();

  if (keepCalculating === "n") {
    prompt('goodbye');
    break;
  }
}