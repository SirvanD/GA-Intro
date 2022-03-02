const highAndLow = (numbers) => {
  var result = [];
  var high = 0;
  var low = 1;
  var array = numbers.split(" ");
  high = Math.max(...array);
  low = Math.min(...array);
  result.push(high, low);
  return result.join(" ");
};

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
