let farenheit = Number (process.argv[2]);
let celcius = ((farenheit - 32) * 5) / 9 ; 
console.log (`The Celsius is : ${celcius}`);