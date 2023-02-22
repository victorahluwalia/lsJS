let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index +=1;
}

console.log(upperNames);

// Re-write as a for loop
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Naveed") {
    continue;
  }

  let upperCaseIt = names[i].toUpperCase();
  upperNames.push(upperCaseIt);
}
console.log(upperNames);

for (let i=0; i < names.length; i++) {
  if (names[i] !== 'Naveed') {
    let upperCaseTheName = names[i].toUpperCase();
    upperNames.push(upperCaseTheName);
  }
}
console.log(upperNames);