const vowelCount = (strInput) => {
  let total = 0;
  let strArray = strInput.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  strArray.forEach((str) => {
    if (vowels.includes(str)) {
      total += 1;
    }
  });
  return total;
};

vowelCount("Spaghettification");
