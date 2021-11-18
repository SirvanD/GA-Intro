// - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
//     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
//     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
//     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."



// var tempt = prompt("What is the current temperature? ");
// var aircond = prompt("is the air conditioner on/off? ");
// var desiredTempt = prompt("What is the current temperature? ");

// console.log (temp);
// function () {

// }


let tempt = Number(process.argv[2]);
let aircond = String(process.argv[3]);
let desiredTempt = Number(process.argv[4]);
if (aircond.toLowerCase() == 'on' && tempt > desiredTempt) {
    console.log("Turn on the A/C please")
} else if (aircond.toLowerCase() == 'off' && tempt > desiredTempt) {
    console.log("Fix the A/C Now")
} else if (aircond.toLowerCase() == 'off' && tempt < desiredTempt) {
    console.log("Fix the A/C Now When you're free")
} else {
    console.log ('Please check your entries and try again !')
}


