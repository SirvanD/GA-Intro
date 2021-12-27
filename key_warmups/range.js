const range = (start, end) => {
  let output = [];
  if (start > end) {
    console.log("First argument must be less than second");
  } else {
    for (let i = start; i < end; i++) {
      output.push(i);
    }
    console.log(output);
  }
};

range(1, 4); //=> [1,2,3]
range(-2, 3); //=> [-2,-1,0,1,2]
range(1, 1); //=> []
range(5, 2); //=> "First argument must be less than second"
