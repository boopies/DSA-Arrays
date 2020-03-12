function removeChar(string, letters) {
    let letterArr = [];
    let stringArr = [];
    let vowel;
    let final = '';
    let output = [];

    for(let i=0; i<letters.length; i++) {
        letterArr.push(letters.charAt(i))
    }
    for(let i=0; i<string.length; i++) {
        stringArr.push(string.charAt(i))
    }

    for(let i = 0; i <= stringArr.length; i++){
        vowel = false;
        for(let j = 0; j <= letterArr.length; j++){
                if(stringArr[i] === letterArr[j]){
                vowel = true;
                }
            }
        if (vowel === false){
            output.push(stringArr[i])
        }
    }

    for(let i = 0; i<output.length;i++){
        final += output[i];
    }
    return final;
}


console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiouAEIOU'))