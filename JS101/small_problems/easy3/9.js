// create a new empty array
// iterate with a for loop through the given string
// if special character and repeated
    // replace with empty string
  // if special
    // replace with space
  // otherwise
    // copy the existing character
// return array

cleanUp("---what's my +*& line?");    // " what s my line "

function alphabetic(character) {
  if (character.toLowerCase() !== character.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

function cleanUp(sentence) {
  let result = "";

  for (let i = 0; i < sentence.length; i ++) {
    if (!alphabetic(sentence[i]) && sentence[i] === sentence[i+1]) {
      result += "";
    } else if (!alphabetic(sentence[i])) {
      result += " ";
    } else {
      result += sentence[i];
    }
  }

  console.log(result);
}