// Write a function named countBlanks that counts the number of blank strings in an array.

// the function should expect an array of strings to be passed in and should return the number of blanks.



function blankDetect(array) {
    console.log(...array)
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].trim() ===''){
            counter++;
        }
    } 
    return counter;
}

blankDetect(["cake", " ", "", "pudding"])
blankDetect(["cake", " ", "", "pudding"])
blankDetect(["cake", " ", "", "pudding"])
blankDetect(["cake  ", "   ", "",'', "pudding"])


// let array1 = ["cake", " ", "", "pudding"]
// blankDetect (array1)
//let array1 = ["cake", " ", "", "pudding"]

//This is another way, most efficient
function countBlanks(strArr) {
    var numOfBlanks = strArr.filter(
        word => word.trim() == ''
    ).length
    return numOfBlanks;
}

