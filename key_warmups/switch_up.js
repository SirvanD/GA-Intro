const switchUp = (strInput) => {
  let strArray = strInput.split("");
  outputArray = [];
  strArray.forEach((str) => {
    if (str == str.toUpperCase()) {
      outputArray.push(str.toLowerCase());
    } else {
      outputArray.push(str.toUpperCase());
    }
  });
  return outputArray.join("");
};

switchUp("Switch caSe FoR eVery letter"); // => "sWITCH CAsE fOr EvERY LETTER"
