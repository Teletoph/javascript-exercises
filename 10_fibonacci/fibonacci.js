const fibonacci = function(reps) {
   if (reps == 1 || reps == 2)
   {
    return 1;
   }
   if(reps < 0)
   {
    return "OOPS";
   }
   let arr = [1, 1];
   
   for (let i = 2; i < reps; i++)
   {
        let newNum = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(newNum);
   }
   return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
