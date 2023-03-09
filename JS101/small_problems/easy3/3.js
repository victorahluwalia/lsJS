stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

function stringy(number) {
  let result = "";

  for (let i = 0; i < number; i ++) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  console.log(result);
}