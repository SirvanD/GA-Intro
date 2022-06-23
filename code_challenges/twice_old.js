// Your function takes two arguments:

// 1 - current father's age (years)
// 2 - current age of his son (years)
// Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  // sonYearsOld * 2 > dadYearsOld
  //   ? 2 * sonYearsOld - dadYearsOld
  //   : dadYearsOld - sonYearsOld * 2;

  //version 2
  Math.abs(dadYearsOld - sonYearsOld * 2);

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));
console.log(twiceAsOld(22, 1));
console.log(twiceAsOld(29, 0));
