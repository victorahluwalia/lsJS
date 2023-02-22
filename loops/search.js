let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFIve = -1;

for (let i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    indexOfFIve = i;
    break;
  }
}

console.log(indexOfFIve);