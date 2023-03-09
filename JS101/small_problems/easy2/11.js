
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"


function centerOf(string) {
  let returnCharacter = "";

  if (string.length % 2 !== 0) {
    returnCharacter = string[Math.floor((string.length - 1) / 2)];
  } else {
    returnCharacter = string.substring((string.length-1) / 2, (string.length - 1) / 2 + 2);
  }
  console.log(returnCharacter);
}