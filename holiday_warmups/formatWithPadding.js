const formatWithPadding = (numInput, char, numLength) => {
  numInputStr = numInput.toString();
  numInputArray = numInputStr.split("");
  outputArray = [];
  if (numInputStr.length >= Number(numLength)) {
    for (let i = 0; i < numInputStr.length; i++) {
      outputArray.push(numInputStr[i]);
    }
    return outputArray.join("");
  } else {
    for (let j = numInputArray.length; j <= Number(numLength - 1); j++) {
      numInputArray.unshift(char);
    }
    outputArray = numInputArray.join("");
    return outputArray;
  }
};

console.log(formatWithPadding(1234, "*", 3));
console.log(formatWithPadding(123, "0", 5)); //=> "00123"
console.log(formatWithPadding(42, "*", 10)); //=> "********42"
