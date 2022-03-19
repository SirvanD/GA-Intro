//challenge
//codewars
//new challenge
//codewars challenge 18/3/2022
//new challenge
const highAndLow = (numbers) => {
  var array = numbers.split(" ");
  const high = Math.max(...array);
  const low = Math.min(...array);
  return `${high} ${low}`;
};

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
