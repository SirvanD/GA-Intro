var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);

if (num1 > num2) {
    console.log(`The bigger number is ${num1}`)
} else if (num2 > num1) {
    console.log(`The bigger number is ${num2}`)
} else {
    console.log(`The numbers are equal !`)
}


