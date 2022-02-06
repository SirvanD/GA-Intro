// given the following object

var params = {
  t: "jaws",
  apikey: "123456",
  page: "5",
};
// write a function to convert it to a query string

const toQuery = (obj) => {
  var newArr = Object.entries(obj);
  var output = [];

  newArr.forEach((key, idx) => {
    output.push(`${newArr[idx][0]}=${newArr[idx][1]}`);
  });
  return console.log("?" + output.join("&"));
};

toQuery(params);
//example:
//"?t=jaws&apikey=123456&page=5"
