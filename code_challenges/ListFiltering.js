const filter_list = (l) => {
  const filtered = l.filter((item) => typeof item == "number");
  console.log(filtered);
};

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
