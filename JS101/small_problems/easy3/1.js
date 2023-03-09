
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""


// Function taking a string as an argument
// All consecutive duplicate characters collapsed into a single character

function crunch(string) {
  let result = "";

  for (let index = 0; index < string.length; index += 1) {
    if (string[index+1] !== string[index]) {
      result += string[index];
    }
  }

  console.log(result);
}
