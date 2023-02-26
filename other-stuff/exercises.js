//  Sqrt of 37
console.log(Math.sqrt(37));

// Largest numeric number in an array
console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));

// Regex
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, regex) {
  // write a function to display matches of a regex in an array
  let results = [];
  for (let index = 0; index < array.length; index++) {
    if (regex.test(array[index])) {
      results.push(array[index]);
    }
  }

  return results;
}
console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

/// Function to check NaN
function notNan(input) {
  return input !== input;
}
console.log(notNan(NaN));


/// Check 0 or -0
function negativeZero(input) {
  return 1 / input === -Infinity;
}
console.log(negativeZero(-0));
console.log(negativeZero(0));
