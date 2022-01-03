console.log('This is warmup range')

function range(num1,num2) {
   
    if (num1 > num2) {
        return "First argument must be less than second"    
    } else {
        let array = []; // new Array[];
        for (let counter = num1; counter < num2 ; counter++) {
            array.push(counter);
            //console.log(array);    
        }
        return array;
    }
   
   
   
    // //while (num1 < num2) {
    // //let array = [Number(num1),Number(num2)] 
    // for (let counter=num1; counter < num2; counter++) {
            
    // let array = [num1,counter,(num2 -1)]; 
    // console.log(array)      
        
    // }//return array

//      num1++;   
//     } 
//     return "First argument must be less than second"
}

