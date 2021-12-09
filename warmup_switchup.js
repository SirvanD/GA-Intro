// Switch up
// Write a method switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

function switchUp(strInput) {
  let strArray = strInput.split("");
  let switchedArray = [];
  //   console.log(strArray);
  strArray.forEach((char) => {
    if (char == char.toUpperCase()) {
      switchedArray.push(char.toLowerCase());
    } else {
      switchedArray.push(char.toUpperCase());
    }
  });
  //   console.log(switchedArray);
  return switchedArray.join("");
}

switchUp("Switch caSe FoR eVery letter"); // => "sWITCH CAsE fOr EvERY LETTER"
switchUp("This is Sirvs From Future");

// Dave's way of doing it
// let word = "Switch caSe FoR eVery letter";

// function switchUp(word){
//     let new_word = '';
//     word.split('').forEach(char => {
//         char == char.toUpperCase() ? new_word += char.toLowerCase() : new_word += char.toUpperCase()
//     });
//     return new_word;
// }

// console.log(switchUp(word));
