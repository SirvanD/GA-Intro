const removeSpaces = (strInput) => {
  //   strInputArray = [];
  var strInputArray = strInput.split(" ");
  //   console.log(strInputArray);
  //   strInputArray.forEach((str) => {
  //     // console.log(str);
  //     if (str == " ") {
  //       console.log("this is working");

  //       strInputArray.pop(" ");
  //       console.log(strInputArray);
  //     }
  //   });
  return strInputArray.join("");
};

console.log(removeSpaces("cake pudding"));
console.log(removeSpaces(" cake pudding "));
console.log(removeSpaces("cake     pudding    "));
console.log(removeSpaces("p u d d i n g"));
