function isLeapYear(number) {
  if (number < 1752) {
    if (number % 4 === 0) {
      console.log("true");
    } else {
      console.log('false');
    }
  } else {
    if ((number % 100 === 0) && (number % 400 !== 0)) {
      console.log('false');
    } else if (number % 4 === 0) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true