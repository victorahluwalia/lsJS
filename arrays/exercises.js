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

/*
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
 





// Use map and filter to first determine the lengths of all the elements in an array of string values, 
// then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let arrLengths = array.map( (phrase) => phrase.length)
  let oddLengths = arrLengths.filter( (length) => length % 2 !== 0);
  return oddLengths;
}
console.log(oddLengths(arr));


////// 
//////

function sumOfSquares(arr) {
  return arr.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue * currentValue;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83



function oddLengths(array) {
  return array.reduce(function(filteredArray, string) {
    let length = string.length;

    if (length % 2 === 1) {
      filteredArray.push(length);
    }

    return filteredArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]



let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

*/

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;