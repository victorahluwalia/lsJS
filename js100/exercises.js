let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...


for (let i = 0; i < vocabulary.length; i++) {
    let newArr = vocabulary[i];

    for ( let x = 0; x < newArr.length; x++) {
      console.log(newArr[x]);
    }

  
}