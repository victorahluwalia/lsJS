logInBox('To boldly go where no one has gone before.');

function logInBox(string) {
  let width = string.length;
  console.log(`+--${"-".repeat(width)}+`);
  console.log(`|${" ".repeat(width + 2)}|`);
  console.log(`| ${string} |`);
  console.log(`|${" ".repeat(width + 2)}|`);
  console.log(`+--${"-".repeat(width)}+`);
}
