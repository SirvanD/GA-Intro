// Write a function called mumble that accepts a single string argument.
// The function should return a string that has each character repeated the number of times according to its position within the string arg. In addition, each repeated section of characters should be separated by a hyphen (-).
// Examples describe it best..

const mumble = (strInput) => {
  outputArray = [];
  strArray = strInput.split("");

  for (let i = 0; i < strArray.length; i++) {
    outputArray.push(strArray[i].repeat(i + 1));
  }
  console.log(outputArray.join("-"));
  return outputArray.join("-");
};

// Prompt: Examples:
mumble("X"); //=> 'X'
mumble("abc"); //=> 'a-bb-ccc'
mumble("121"); //=> '1-22-111'
mumble("!A 2"); //=> '!-AA-   -2222'
