function pubBouncer() {
    let age = Number(process.argv[2]);
    if (age < 18) {
        console.log(`${age} is not old enough for drinking`);
    } else if (age >= 18) {
        console.log (`You don't look like ${age}, grab a drink, cheers!`);
    }
}pubBouncer();