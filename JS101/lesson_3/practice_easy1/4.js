let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function format(string) {
  console.log(`${string[0].toUpperCase()+string.slice(1).toLowerCase()}`);
}

format(munstersDescription);