triangle(5);
triangle(9);

function triangle(number) {
  for ( let iterator = 0; iterator < number; iterator ++) {
    console.log(`${" ".repeat(number - (iterator - 1))}${"*" + ("*".repeat(iterator))}`);
  }
}