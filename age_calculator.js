function calculateAge(birthYear,currentYear) {
    let ageOne = currentYear - birthYear;
    let ageTwo = ageOne - 1 ;
    console.log (`You are either ${ageTwo} or ${ageOne} `);
}
calculateAge (Number(process.argv[2]), Number(process.argv[3]));

