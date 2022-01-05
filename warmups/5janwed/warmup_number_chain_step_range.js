// Write a function named numberChain that accepts 2 integers as arguments and returns an string of integers wrapped in rounded brackets (also called parentheses) starting with the first argument up to the second argument .
// The range function must be called with the first argument less than or equal to the second argument, otherwise return the an empty string.

// add an optional third argument for the increment size for each step of the number range
// defaults to 1 if the third argument is not provided

const numberChain = (numStart, numEnd, step = 1) => {
  //default value for step if not given
  outputArray = [];
  if (numStart > numEnd) {
    return "";
  } else {
    for (let i = numStart; i <= numEnd; i += step) {
      outputArray.push(`(${i})`);
    }
    return outputArray.join("-");
  }
};

console.log(numberChain(10, 30, 5)); //=> "(10)-(15)-(20)-(25)-(30)"
console.log(numberChain(11, 25, 3)); //=> "(11)-(14)-(17)-(20)-(23)"
console.log(numberChain(20, 40, 10)); //=> "(20)-(30)-(40)"
console.log(numberChain(1, 3)); //=> "(1)-(2)-(3)"
console.log(numberChain(2, 10, 5)); //=> "(1)-(2)-(3)"
console.log(numberChain(3, 30, 2)); //=> "(1)-(2)-(3)"

console.log(numberChain(1, 4)); //=> "(1)-(2)-(3)-(4)"
console.log(numberChain(-2, 3)); //=> "(-2)-(-1)-(0)-(1)-(2)-(3)"
console.log(numberChain(1, 1)); //=> "(1)"
console.log(numberChain(5, 2)); //=> ""
