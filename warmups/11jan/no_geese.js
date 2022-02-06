// The geese are any strings in the following array, which you can pre-populated in your solution: let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if I have an array of birds: let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Can you write a function that when passed in an array of birds will returns an new array with all the geese removed?

// example returned array:
//
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.

let birds = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];

const birds_only = (inputArray) => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let birdsOnly = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (!geese.includes(inputArray[i])) {
      birdsOnly.push(inputArray[i]);
    }
  }

  //   birdsOnly.forEach((goose) => inputArray.splice(inputArray.indexOf(goose), 1));
  return birdsOnly;
};

birds_only(birds); //=> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
