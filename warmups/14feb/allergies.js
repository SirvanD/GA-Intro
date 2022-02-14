// Given a person's allergy score, determine whether or not they're allergic to a given item.

// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say whether Tom is allergic to any one of those allergens listed above

class Allergies {
  constructor(score) {
    this.score = score;
  }
  // could use a nested array instead
  //object.keys converts obj to array so not necessary
  isAllergicTo(allergen) {
    let inputs = [
      { 128: "cats" },
      { 64: "pollen" },
      { 32: "chocolate" },
      { 16: "tomato" },
      { 8: "strawberries" },
      { 4: "shellfish" },
      { 2: "peanuts" },
      { 1: "eggs" },
    ];
    let output = [];
    inputs.forEach((obj, idx) => {
      // console.log(Object.keys(obj));

      if (this.score >= Object.keys(obj)) {
        output.push(Object.values(obj));
        this.score -= Object.keys(obj);
        // console.log(Object.values(obj));
      }
    });
    // for (let i = 0; i < output.length; i++) {
    //   if (output[i] == allergen) {
    //     return true;
    //   } else return false;
    // }
    console.log(output);
    // console.log(this.score);
  }
}

let allergies = new Allergies(34);
allergies.isAllergicTo("eggs"); // => false
allergies.isAllergicTo("peanuts"); // => true
allergies.isAllergicTo("shellfish"); // => false
allergies.isAllergicTo("chocolate"); // => true
