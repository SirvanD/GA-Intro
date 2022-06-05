function even_or_odd(number) {
  let result;
  number % 2 === 0 ? (result = "Even") : (result = "Odd");
  return result;
}
//comment daily challenge
console.log(even_or_odd(25));
console.log(even_or_odd(14));
console.log(even_or_odd(3));
console.log(even_or_odd(4));
