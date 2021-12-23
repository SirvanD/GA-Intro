const makeFakeMap = (columnInput, rowInput, regionChar, area, char) => {
  let outputArray = [];
  let columns = Number(columnInput);
  let rows = Number(rowInput);

  outputArray = Array.from(Array(rows), () =>
    Array.from(Array(columns), () => "A")
  );
  // simple way of creating the 2D array
  //   for (let i = 0; i < columns; i++) {
  //     outputArray.push([]);

  //     for (let j = 0; j < rows; j++) {
  //       outputArray[i].push("A");
  //     }
  //   }
  let randomRegion = regionsMaker(columns, rows, area);

  let [a, b] = randomIndex(randomRegion.length, randomRegion.length);

  for (let n = 0; n < randomRegion.length; n++) {
    let [x, y] = randomRegion[n];
    if (n == a) {
      outputArray[x][y] = char;
    } else {
      outputArray[x][y] = regionChar;
    }
  }
  return outputArray;
};

const regionsMaker = (columnsNum, rowsNum, area) => {
  var randomRegions = [];

  // finding a starting spot for the region array
  while (true) {
    var randomY = Math.floor(Math.random() * columnsNum);
    var randomX = Math.floor(Math.random() * rowsNum);

    if (randomY <= columnsNum - area && randomX <= rowsNum - area) {
      break;
    }
  }

  // creating an array of region using the starting point

  for (let m = 0; m < area; m++) {
    for (p = 0; p < area; p++) {
      randomRegions.push([randomY + m, randomX + p]);
    }
  }

  //   randomRegions[randomTreasureY][randomTreasureX] = 'F'
  return randomRegions;
};

const randomIndex = (yInput, xInput) => {
  var randomArray = [];

  var randomY = Math.floor(Math.random() * yInput);
  var randomX = Math.floor(Math.random() * xInput);
  //   randomArray.push(2, 2); // delete after test
  randomArray.push(randomY, randomX);
  return randomArray;
};

console.log(makeFakeMap(7, 7, "O", 3, "X"));
