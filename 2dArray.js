function convertArray(array){
    let myArray = JSON.parse(JSON.stringify(array));;
    let convert;
    for(var i = 0; i < myArray.length; i++){
        convert = false;
        for(var j = 0; j < myArray[i].length; j++){
            if(myArray[i][j] === 0){
            convert = true;};
            }
        if(convert === true){
            for(var j = 0; j < myArray[i].length; j++){
                myArray[i][j] = 0;
            }
        }
    }
    for(var i = 0; i < array.length; i++){
        convert = false;
        for(var j = 0; j < array.length; j++){
            if(array[j][i] === 0){
            convert = true;};
            }
        if(convert === true){
            for(var j = 0; j < myArray.length; j++){
                myArray[j][i] = 0;
            }
        }
    }
    return myArray
}




console.log(convertArray([[1,0,1,1,0],
                          [0,1,1,1,0],
                          [1,1,1,1,1],
                          [0,1,1,1,1],
                          [1,1,1,1,1]]));