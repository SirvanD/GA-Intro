let currentYear = new Date().getFullYear();
console.log(`Currently this is year ${currentYear}`);
let year = parseInt(process.argv[2]);
if (year == currentYear) {
    console.log ("I'm in the present time")
}else if (year < currentYear) {
    console.log ("Whoa! Blast from the past!")
}else if (year > currentYear) {
    console.log ("Greeting from the future!")
}
