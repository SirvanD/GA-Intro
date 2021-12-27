var map1 = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "X", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
];

var map2 = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "X", "A", "A", "A"],
];

var map3 = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "V", "A", "A"],
  ["A", "A", "A", "V", "A"],
  ["v", "v", "V", "v", "X"],
  ["A", "V", "A", "A", "A"],
];

var map4 = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "V", "A", "A"],
  ["A", "A", "A", "V", "A"],
  ["v", "v", "V", "v", "A"],
  ["X", "V", "A", "A", "A"],
];

const treasureFinder = (arrInput) => {
  let output = [];
  for (let i = 0; i < arrInput.length; i++) {
    for (let j = 0; j < arrInput[i].length; j++) {
      if (arrInput[i][j] == "X") {
        // output.push(arrInput[i].indexOf("X"));
        // output.push(arrInput[i].indexOf(j));
        output.push(j, i);
      }
    }
  }
  return output;
};

// Sample output:

treasureFinder(map1); // should return [2, 2];
treasureFinder(map2); // should return [1, 4];
treasureFinder(map3); // should return [4, 3];
treasureFinder(map4); // should return [0, 4];
