let park = [
  { name: "Wizard Whitebeard" },
  { name: "Woof" },
  { name: "Wenda" },
  { name: "Wally" },
];

let station = [
  { name: "Wizard Whitebeard" },
  { name: "Woof" },
  { name: "Wally" },
  { name: "Welma" },
  { name: "Odlaw" },
  { name: "Wenda" },
];

const wheresWally = (inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i]["name"] == "Wally") {
      return inputArray.indexOf(inputArray[i]);
    }
  }
};

console.log(wheresWally(park)); // => 3
console.log(wheresWally(station)); // => 2
