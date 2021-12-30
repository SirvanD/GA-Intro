const countBlanks = (arr) => {
  let total = 0;
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let strArray = [];
  arr.forEach((str) => {
    strArray = str.split("");
    if (alphabet.includes(strArray[0])) {
    } else total += 1;
  });
  return total;
};

countBlanks(["cake", " ", "pudding", ""]); // => 2
countBlanks(["cake"]); // => 0
countBlanks(["", " ", "   "]); // => 3
