let munstersDescription = "The Munsters are creepy and spooky.";
let result = "";

for (let i = 0; i < munstersDescription.length; i ++) {
  if (munstersDescription[i] === munstersDescription[i].toLowerCase()) {
    result += munstersDescription[i].toUpperCase();
  } else {
    result += munstersDescription[i].toLowerCase();
  }
}

console.log(result);

console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));