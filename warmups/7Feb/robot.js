class Robot {
  constructor(name) {
    this.name = this.randomName();
  }

  randomName() {
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const randomLetter = (letters) => {
      let randomIndex = Math.floor(Math.random() * 25);
      return letters[randomIndex];
    };
    const randomNumber = (numbers) => {
      let randomIndex = Math.floor(Math.random() * 9);
      return numbers[randomIndex];
    };

    return (this.name = `${randomLetter(letters)}${randomLetter(
      letters
    )}${randomNumber(numbers)}${randomNumber(numbers)}${randomNumber(
      numbers
    )}`);
  }

  reset() {
    this.name = this.randomName();
  }
}

console.log("Robot 1: ");
let robot1 = new Robot();
console.log(robot1.name);
console.log(robot1.name);
console.log(robot1.name);

console.log("Robot 2: ");
let robot2 = new Robot();
console.log(robot2.name);
console.log(robot2.name);
console.log(robot2.name);

console.log("Robot 3: ");
let robot3 = new Robot();
console.log(robot3.name);
console.log(robot3.name);
console.log("Resetting to factory settings.");
robot3.reset();
console.log(robot3.name);
console.log(robot3.name);
