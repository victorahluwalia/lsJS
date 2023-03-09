
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0


function negative(number) {
  console.log(Math.abs(number) * -1);
}


/*
function negative(number) {
  console.log((number === Math.abs(number)) ? number * -1 : number);
}
*/