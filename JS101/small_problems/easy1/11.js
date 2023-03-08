function utf16Value(string) {
  let sum = 0;
  for(index = 0; index < string.length; index ++) {
    sum += string.charCodeAt(index);
  }
  console.log(sum);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
