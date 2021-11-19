let scores = {
    hd: 'A',
    distinction: 'B',
    credit: 'C',
    pass: 'D',
    fail: 'F'
} 
function assingGrade(score){
    if (score >= 85) {
        console.log (scores.hd);
    }else if (score >= 75) {
        console.log(scores.distinction);
    }else if (score >= 65) {
        console.log (scores.credit);
    }else if (score >= 50) {
        console.log (scores.pass);
    }else {
        console.log (scores.fail);
    }
}
assingGrade (92);
assingGrade (82);
assingGrade (67);
assingGrade (55);
assingGrade (75);
assingGrade (49);