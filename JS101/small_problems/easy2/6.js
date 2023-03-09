// Given a string with at least two words separated by a space
// Starting from the end of the string
 // Iterate through the string and find the value of the first character with an empty space
 // Store that value in a variable
 // Continue iterating till you find the second space value
 // Store that in a separate variable 
// Return the word using the slice method

let spaceIndex;
let spaceArray = [];

function findSpaces(string) {
  for (let i = string.length - 1; i > 0; i --) {

    if (string[i] === " ") {
      spaceIndex = i;
      spaceArray.push(i);
      console.log(spaceArray);
    }
  }
}


function penultimate(string) {
  findSpaces(string);
}


//penultimate("last word");
penultimate("last word of this sentence");


//console.log(penultimate("last word") === "last"); // logs true
//console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
if (string[i] === " ") {
  firstIndex = string[i];
  console.log(firstIndex);
}
*/