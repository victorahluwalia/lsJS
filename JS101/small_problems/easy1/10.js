function multisum(integer) {
  let sum = 0;

  for (let index = 1; index <= integer; index++) {
    if ((index % 3 === 0) || (index % 5 === 0)) {
      sum += index;
    }
  }
  console.log(sum);
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168