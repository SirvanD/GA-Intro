let rowArray = [];
let matrixArray = [];

const makeFakeMap = (column, row) => {
  //   let randNum = Math.floor(Math.random * (Number(column) * Number(row)) - 1);
  //   console.log(randNum);
  for (let i = 0; i < column; i++) {
    matrixArray.push(["A"]);
    // let columnArray = [];
    // columnArray.push("A");
    for (let j = 1; j < row; j++) {
      matrixArray.push(["J"]);
      //   matrixArray.push(columnArray);
      matrixArray[0][0] = "X";
    }
  }
  return console.log(matrixArray);
};

makeFakeMap(5, 3);


const test = (num, letter) => {

}
