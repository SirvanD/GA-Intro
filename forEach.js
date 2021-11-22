let scores = [90, 60, 30];
scores.forEach(gradeAssigner)
function gradeAssigner (score) {
    if (score >= 85) {
        console.log ('Distinction')
    } else if (score >= 55) {
        console.log ('Credit or Pass')
    } else {
        console.log ('Fail')
    }
}   
