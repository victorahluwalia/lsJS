console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

// Exactly one of the operands is truthy

function xor(argA , argB) {
  if (argA && !argB) {
    return true;
  } else if (!argA && argB) {
    return true;
  } else {
    return false;
  }
}