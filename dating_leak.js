let leaksArray = ['dt','aden','allison','bern','callum','cath','felipe','jian','jimmy','linda','matt','naveen','ned','peter','sam','sannan','sara','stephen','stuart','tom'];
//leaksArray.forEach(printArray);
function printArray() {
    leaksArray[0] = 'Misty Rose';
    let counter = 0;
    while (counter < leaksArray.length && leaksArray[counter][0]!== 'n') {
        console.log(leaksArray[counter]);
        counter ++;
    }
} printArray ();



