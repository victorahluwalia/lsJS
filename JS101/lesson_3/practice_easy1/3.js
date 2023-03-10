let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function checkAgesKey(key) {
  if (ages[key] === undefined) {
    console.log('missing');
  }
}

console.log(ages.Spot)
checkAgesKey("Spot");

console.log(`${ages.hasOwnProperty("Spot")}`);