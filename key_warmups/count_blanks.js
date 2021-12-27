const countBlanks = (arr) => {
  let total = 0;
  arr.forEach((str) => {
    if (str == "") {
      total += 1;
    }
  });
  return total;
};

countBlanks(["cake", "", "pudding", ""]); // => 2
countBlanks(["cake"]); // => 0
