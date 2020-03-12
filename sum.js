    function highestSum(arr){
        //loop through adding 2 integers
        //then loop through 3 integers...etc
        //each time compare the sum with the existing max sum. replace if higher
        let max = 0;
        for(let i  = 2; i < arr.length-1; i++){
            //i denotes how many items will be added together in this pass
            for(let j = 0; j <arr.length; j++){
                //loop through each item, the inner loop does the summation according to which i we are at
                let sum = 0
                for(let k = 0; k< i; k++){
                    //j+0, j+1 ...etc
                    if(j+k<arr.length){
                        sum += arr[j+k]
                    }
                }
                if(sum > max){
                    max = sum
                }
            }
        }
        return max;
}


console.log(highestSum([4, 6, -3, 5, -2, 1]));