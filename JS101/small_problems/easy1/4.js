// Ask for input of length and width in meters
// Calculate area in sq meters
// Calculate area in sq feet
// Print the area in sq meters and sq feet

const readlineSync = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

let mLength = parseInt(readlineSync.question('Enter the length of the room in meters: '));
let mWidth = parseInt(readlineSync.question('Enter the width of the room in meters: '));
let unit = readlineSync.question('Are your measurements in meters or ft? (Please enter either of the following: m / f');

let mArea = undefined;
if (unit === 'm') {
  mArea = mLength * mWidth;
} else {
  mArea = (mLength * mWidth) / SQMETERS_TO_SQFEET;
}

let ftArea = mArea * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${mArea.toFixed(2)} square meters (${ftArea.toFixed(2)} square feet).`);