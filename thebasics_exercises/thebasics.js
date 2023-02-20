console.log('John'+' '+'Doe');

const fourDigitNumber = 1664;
const onesPlace = fourDigitNumber % 10;
const tensPlace = ((fourDigitNumber % 100) - onesPlace) / 10;
const hundredsPlace = ((fourDigitNumber % 1000) - tensPlace * 10 - onesPlace ) / 100;
const thousandsPlace = ((fourDigitNumber % 10000) - hundredsPlace * 100 - tensPlace * 10 - onesPlace) / 1000;
console.log(`
  1. thousand's place is ${thousandsPlace}
  2. hundred's place is ${hundredsPlace}
  3. ten's place is ${tensPlace}
  4. one's place is ${onesPlace}`
);

let a = '5';
let b = 10;
console.log(a+b);
let c = Number(a);
console.log(c+b);

console.log(`The value of 5 + 10 = ${Number('5') + 10}.`);

let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];
console.log(names);

let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
}
console.log(pets);