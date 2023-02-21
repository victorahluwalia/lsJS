console.log("hello");
console.log("hi");
console.log("how do you do");
console.log("Quite all right");

function say(text) {
  console.log('==> ' + text);
}

say("hello");
say("hi");
say("how do you do");
say("Quite all right");




// Three ways to define a function
//
/* 1.
  // Below is a function declaration.
  // You can invoke a function deceleration
  // before declaring it.
*/
greetPeople();
function greetPeople() {
  console.log("Good Morning!");
}
//
/* 2.
  // Below is a function expression.
  // You cannot invoke a function expression
  // before saving it to a variable.
*/
let greetPeople = function () {
  console.log("Good Morning!");
};
greetPeople();
//
/* 3.
  // Below is an arrow function.
  // Arrow functions are similar to
  // function expressions.
*/
let greetPeople = () => console.log("Good Morning!");
greetPeople();
