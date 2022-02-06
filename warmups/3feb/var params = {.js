var params = {
  t: "jaws",
  apikey: "123456",
  page: "5",
};
// write a function to convert it to a query string

const toQuery = (obj) => {
  var newStr = [];

  const keysArr = Object.keys(obj)
  const valArr = Object.values(obj)
  console.log(keysArr);
  console.log(valArr);


  const output = `?keysArr[0]=valArr[0]$keysArr[1]=valArr[1]&keyArr[2]=valArr[2]`
  return console.log(output);

};

toQuery(params);
//example:
//"?t=jaws&apikey=123456&page=5"