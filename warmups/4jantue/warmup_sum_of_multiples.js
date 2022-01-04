const sumOfMultiples = (numInput) => {
  var totalSum = 0;
  for (let i = 0; i <= numInput; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      totalSum += i;
    }
  }
  return totalSum;
};

sumOfMultiples(10); //=> 23
sumOfMultiples(16); //=> 60
