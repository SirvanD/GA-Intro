var horses = [
  {
    name: "maythehorsebewithu",
    active: true,
    country: "AUS",
    yearOfBirth: 2000,
    hourlyRate: 85,
    daysWorked: 400,
  },
  {
    name: "my wife knows everthing",
    active: true,
    country: "USA",
    yearOfBirth: 2007,
    hourlyRate: 50,
    daysWorked: 250,
  },
  {
    name: "better loosen up",
    active: false,
    country: "AUS",
    yearOfBirth: 1985,
    hourlyRate: 15,
    daysWorked: 200,
  },
  {
    name: "hoof hearted",
    active: false,
    country: "AUS",
    yearOfBirth: 1981,
    hourlyRate: 150,
    daysWorked: 100,
  },
  {
    name: "pony",
    active: false,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 30,
    daysWorked: 700,
  },
  {
    name: "sunny boy",
    active: true,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 110,
    daysWorked: 515,
  },
];

// calculate total lifetime earning of all australian horses who earned more than 30,000
// facts
// your can calculate the lifetime earning of a horse by mutiplying number of hours work with hourly rate
// all horses work 8 hours per day

// const earnings = (horsesArray) => {
//   var hours = 0;
//   var total = 0;
//   for (let i = 0; i < horsesArray.length; i++) {
//     hours = horsesArray[i]["daysWorked"] * 8;
//     rate = hours * horsesArray[i]["hourlyRate"];

//     if (horsesArray[i]["country"] == "AUS" && rate > 30000) {
//       //   console.log(rate);
//       total = total + rate;
//       console.log(total);
//     }
//   }
//   return total;
// };

// earnings(horses);

// correct answer : 1013200

// total earnings all aus horses

// concept below
// sql is an example of delrative language you tell it what you want and it does it
// horses
//     .filter(byAussueHorses)
//     .map(calcearning)
//     .reduce(sum)

// programming styles
// imperative code -- step by step commands - how
// better approach is:
// declarative - what

//functional mindset
// step by step transformations

//arr.filter() filter in
//arr.map()
//arr.reduce

//var numbers = [3, 4, 5, 6, 7, 8, 9, 10];

// let even = numbers.filter(function (num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }); //=> new array of the filtered numbers

// rewrite

// var even = numbers.filter((num) => num % 2 == 0);
// console.log(even);

//map

console.log(
  horses
    .filter((horse) => horse.country === "AUS")
    .map((horse) => horse.hourlyRate * 8 * horse.daysWorked)
    .reduce((total, earning) => total + earning)
);

// 1 to 1 mapping transformation

var numbers = [3, 4, 5, 6, 7, 8, 9, 10]; // [6,8,10,12,14,16]

// console.log(numbers.map((num) => num * 2));

function mumble(word) {
  return word
    .split("") // ['a','b','c']
    .map((char, idx) => char.repeat(idx + 1)) // [a,bb,ccc]
    .join("-");
}
console.log(mumble("abc")); //=>a-bb-ccc

// reduce : loops each elem, to apply a function, memo/accum

var numbers2 = [1, 2, 3, 4];

var total = numbers2.reduce((accum, num) => {
  return accum + num;
}, 0);

console.log(total);

// 0 is the initial value of accum
