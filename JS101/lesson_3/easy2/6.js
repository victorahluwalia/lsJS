let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

newArray1 = [].concat(...flintstones);
console.log(newArray1);

newArray2 = flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
console.log(newArray2);

newArray3 = [];
flintstones.forEach(element => {
  newArray3 = newArray3.concat(element);
});
console.log(newArray3);

let newArray4 = flintstones.flat();
console.log(newArray4);