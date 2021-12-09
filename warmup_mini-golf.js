const Bob = [
  (Hole1 = 3),
  (Hole2 = 2),
  (Hole3 = 6),
  (Hole4 = 11),
  (Hole5 = 9),
  (Hole6 = 2),
  (Hole7 = 6),
  (Hole8 = 9),
  (Hole9 = 10),
];
const Jimbo = [
  (Hole1 = 5),
  (Hole2 = 12),
  (Hole3 = 9),
  (Hole4 = 22),
  (Hole5 = 13),
  (Hole6 = 7),
  (Hole7 = 16),
  (Hole8 = 10),
  (Hole9 = 11),
];
const Fish = [
  (Hole1 = 2),
  (Hole2 = 2),
  (Hole3 = 4),
  (Hole4 = 5),
  (Hole5 = 4),
  (Hole6 = 3),
  (Hole7 = 6),
  (Hole8 = 4),
  (Hole9 = 1),
];
// var test = Bob.length
let totalScore = (arr) => {
  let scores = 0;
  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    scores = scores + arr[i];
  }
  console.log(scores);
};

totalScore(Bob);
totalScore(Jimbo);
totalScore(Fish);
