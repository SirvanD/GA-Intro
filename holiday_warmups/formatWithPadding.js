const formatWithPadding = (numInput, char, numLength) => {
  numInputStr = numInput.toString();
  numInputArray = numInputStr.split("");
  //   console.log(numInputStr);
  //   console.log(numInputArray);
  //   console.log(numInputArray.length);

  //   console.log(numInputStr.length);
  outputArray = [];
  if (numInputStr.length >= Number(numLength)) {
    for (let i = 0; i < numInputStr.length; i++) {
      outputArray.push(numInputStr[i]);
      //   console.log(outputArray);
    }
    return outputArray.join("");
  } else {
    for (let j = numInputArray.length; j <= Number(numLength - 1); j++) {
      numInputArray.unshift(char);
    }
    return numInputArray.join("");
  }
};

console.log(formatWithPadding(1234, "*", 3));
console.log(formatWithPadding(123, "0", 5)); //=> "00123"
console.log(formatWithPadding(42, "*", 10)); //=> "********42"
