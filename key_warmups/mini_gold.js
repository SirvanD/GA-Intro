let bob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
let jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11];
let fish = [2, 2, 4, 5, 4, 3, 6, 4, 1];

const scoreCalculator = (arr) => {
  let scores = 0;
  arr.forEach((score) => {
    scores += score;
  });
  console.log(`Total Score is ${scores}`);
};

scoreCalculator(bob);
scoreCalculator(jimbo);
scoreCalculator(fish);
