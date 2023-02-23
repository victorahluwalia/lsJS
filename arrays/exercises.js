/*
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.forEach(function(number){
  if (number % 2 === 0) {
    console.log(number);
  }
})
*/
/*
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let newArray = [];

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}

myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  })
})
*/

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let mapArray = myArray.map(function(x) {
  if(x % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(mapArray);

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = [];
function findIntegers(array) {
  return array.filter( function(element) {
    return Number.isInteger(element);
  })
}

console.log(findIntegers(things)); // => [1, 3, -4]
 