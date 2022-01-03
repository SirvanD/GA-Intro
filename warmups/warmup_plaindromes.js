
//prompt("Enter a word/sentence to test against PlainDromes condition: ");

//alert (userPD);
// let userInput = "a toyota"
// let reverseString = userString => {
    
//     let userPD = userInput.split("").reverse().join(" ");
//     console.log (userPD)
//     if (userString == userPD) {
//         return true;
//     } else return false;
// }
// reverseString (userInput);


function plaindromecheck (userEntry){
    let userEntryNoSpaces = userEntry.replaceAll(' ', '').toLowerCase(); 

    return userEntryNoSpaces == userEntryNoSpaces.split('').reverse().join('');
}


