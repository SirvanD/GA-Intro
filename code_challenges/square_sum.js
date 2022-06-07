// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = (numbers) => {
  return numbers.reduce(
    (prevValue, currentValue) => Math.pow(currentValue, 2) + prevValue,
    0
  );
};

//version 3
// const squareSum = (numbers) => {
//   return numbers.map((num,index)=>{

//   })
// }

console.log(squareSum([1, 2]));
console.log(squareSum([1, 2, 2]));
console.log(squareSum([5, 6, 8]));
console.log(squareSum([3, 7, 9]));
