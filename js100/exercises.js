/*
// Primitive data types
console.log(Number.MAX_VALUE);

console.log(Date.now());

let today = new Date();
console.log(today.getYear());
console.log(today.getFullYear());

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
*/




let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}