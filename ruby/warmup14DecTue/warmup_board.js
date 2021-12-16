//not the most efficient way
// also do this in ruby

let strFirstLine = "# # # # # # # #";
let strSecondLine = "# # # # # # # #";
strOutput = `${strFirstLine} \n ${strSecondLine}`;
for (i = 0; i < 4; i++) {
  console.log(strOutput);
}

// another way, every second character is a space so can use this logic

// Hugh way

// var board = ``

// for (let i = 0; i < 8; i++){
//     if (i % 2 == 0){
//         board += "# # # # # # # #\n"
//     }else {
//         board += " # # # # # # # # \n"
//     }
// }

// console.log(board)

// ruby

// board = “”
// chars = ‘# ’ * 8
// 8.times do
//     board = board + chars + “\n”
//     chars = chars.reverse
// end
// puts board

// another way :

// var row = 16
// var col = 16
// let hash = ""

// for(let i=0; i<row; i++) {
//     if(i % 2 == 0){
//         for(let j=0; j < col; j++) {
//             if (j % 2 == 0) {
//             hash = hash + "#"
//             } else {
//                 hash = hash + " "
//             }
//         }
//     } else {
//         for(let j=0; j < col; j++) {
//             if (j % 2 == 0) {
//             hash = hash + " "
//             } else {
//                 hash = hash + "#"
//             }
//         }
//     }
//     hash = hash + "\n"
// }
// console.log(hash)

// Dave

// function drawBoard(rows, columns, char){
//     let str = '';
//     for(row=0; row<rows; row++){
//         row%2 == 0 ? str+='' : str+=' '
//         for(col = 0; col<columns; col++){
//             col%2 == 0 ? str += char : str+=' '
//         }
//         str+='\n'
//     }
//     return str
// }
// console.log(drawBoard(8,15,'o'));
