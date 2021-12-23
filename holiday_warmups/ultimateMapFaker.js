const makeFakeMap = (columnInput, rowInput, regionChar, area, char) => {
  let innerArray = [];
  let outerArray = [];
  let columns = Number(columnInput);
  let rows = Number(rowInput);

  let randomArray = randomIndex(columns, rows);
  let yRandom = randomArray[0];
  let xRandom = randomArray[1];
  //   console.log(yRandom, xRandom);
  let columnBox = Number(area);
  let rowBox = Number(area);

  for (let i = 0; i < columns; i++) {
    innerArray.push([]);

    for (var j = 0; j < rows; j++) {
      innerArray[i].push("A");
    }
  }

  //   if (i == yRandom && j == xRandom) {
  //     for (let k = 0; k < columnBox; k++) {
  //       //   console.log("this is working");
  //       innerArray[k] = regionChar;
  //       //   console.log(innerArray[yRandom][xRandom]);
  //       for (let p = 0; p < rowBox; p++) {
  //         // console.log("this is working");
  //         innerArray[p] = regionChar;
  //       }
  //     }
  //     // innerArray[i][j] = char;
  //   }

  //   innerArray[yRandom][xRandom] = char;
  //   console.log(innerArray);
  return innerArray;
};

const randomIndex = (yInput, xInput) => {
  var randomArray = [];

  //   var randomY = Math.floor(Math.random() * yInput);
  //   var randomX = Math.floor(Math.random() * xInput);
  randomArray.push(2, 2); // delete after test
  //   randomArray.push(randomY, randomX);
  return randomArray;
};

console.log(makeFakeMap(5, 5, "F", 3, "X"));
