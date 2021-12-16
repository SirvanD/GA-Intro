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

//   let foundX = map[i].find((element) => element == "X");

const treasureFinder = (map) => {
  let treasureLocation = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == "X") {
        treasureLocation.push(j, i);
        return treasureLocation;
      }
    }
  }
};

// another way of doing it, also can do without if statement

// let userArray = map1;

// const treasureFinder = (map) => {
//   let treasureLocation = [];
//   for (let i = 0; i < map.length; i++) {
//     if (map[i].includes("X")) {
//       treasureLocation.push(map[i].indexOf("X"));
//       treasureLocation.push(i);
//       return treasureLocation;
//     }
//   }
// };

console.log(treasureFinder(map1));
console.log(treasureFinder(map2));
console.log(treasureFinder(map3));
console.log(treasureFinder(map4));
