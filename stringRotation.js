function StringRotation(str1, str2){
    let len = str1.length - 1;
    let temp;
    let rotation = false;
        
    for (let j = 0; j < len+1; j++) {
        let i = 0;  // <-------------------- notice this
        temp = str1[len]
        while (i < len) {
            //console.log(str1[i]);
            temp += str1[i];
            i++;
        }
        if(temp === str2){
            rotation = true
        }

        str1 = temp;
    }
    return rotation;
}

console.log(StringRotation('amazon', 'azonam'))
console.log(StringRotation('amazon', 'azonma'))


