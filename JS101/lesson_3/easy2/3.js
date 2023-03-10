let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

function inThere(array, number) {
  if (array.includes(number) === true) {
    console.log("true");
  } else {
    console.log("false");
  }
}

inThere(numbers, number1);
inThere(numbers, number2);