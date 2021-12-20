const removeEnds = (strInput) => {
  strArrayInput = [];
  strArrayOutput = [];
  strArrayInput = strInput.split("");

  if (strArrayInput.length < 3) {
    strArrayOutput = [""];
    return strArrayOutput.join("");
  } else {
    for (let i = 1; i < strArrayInput.length - 1; i++) {
      strArrayOutput.push(strArrayInput[i]);
    }
    return strArrayOutput.join("");
  }
};

console.log(removeEnds("SEI Rocks!"));
console.log(removeEnds("a"));
console.log(removeEnds("This is a test"));
console.log(removeEnds("Fin"));
