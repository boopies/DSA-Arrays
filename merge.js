function mergeArray(arr1, arr2){
     arr1.push(...arr2)
     let output = [];
     let inserted;
     
     for (let i = 0; i < arr1.length ; i++){
       inserted = false;
       for (let j = 0; j < output.length ; j++){
         if (arr1[i] < output[j]){
           inserted = true;
           output.splice(j, 0, arr1[i]);
           break;
         }
       }
       
       if (!inserted)
         output.push(arr1[i])
     }
     
    return output
}


console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))