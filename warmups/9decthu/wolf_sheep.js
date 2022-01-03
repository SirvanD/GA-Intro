animals = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep"];
animals2 = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep"];
animals3 = ["wolf", "sheep", "sheep", "sheep"];
animals4 = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf"];
animals5 = ["sheep", "wolf", "sheep", "sheep"];
animalsFunc = (animalsArr) => {
  if (animalsArr.at(-1) == "sheep") {
    lastAnimalIndex = animalsArr.length - 1;
    let sheepInDanger = animalsArr.indexOf("wolf") + 1;
    reversedArray = animalsArr.split().reverse(); //sheepInDanger = animalsArr.length - (wolfIndex +1)
    sheepInDanger = reversedArray.indexOf("wolf");
    return console.log(
      `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf at step number ${animalsArr.indexOf(
        "wolf"
      )}`
    );
  } else {
    return console.log("Pls go away and stop eating my sheep");
  }
};

animalsFunc(animals);
animalsFunc(animals2);
animalsFunc(animals3);
animalsFunc(animals4);
animalsFunc(animals5);
