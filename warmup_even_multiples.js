// Write a method called even_multiples that takes a list of numbers and returns only numbers that are both even AND multiples of 5.

var evenMultiples = (inputArray) => {
  // function evenMultiples () {}
  var outputArray = []; // without var js defines it as global
  inputArray.forEach((number) => {
    if (number % 2 == 0 && number % 5 == 0) {
      outputArray.push(number);
    }
  });
  return outputArray;
};

console.log(evenMultiples([14, 5, 7, 2, 25, 10, -4, 3, 3, 20, 2, 6, 5])); //=> [10, 20]
console.log(evenMultiples([14, 5, 7, 2])); //=> []
