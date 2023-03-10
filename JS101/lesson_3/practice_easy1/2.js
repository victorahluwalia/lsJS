let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function end(string) {
  return string.slice(string.length-1);
}

console.log(end(str1));
console.log(end(str2));

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));