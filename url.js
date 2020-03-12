function urlify(string){
    const arr = string.split('')
    
    const urlArr = arr.map(item => {
        if (item === ' ') {
            return item = '%20'
        }
        return item
    })
    return urlArr.join('')
}


console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));


function replace(string){
    let newStr = []
    let final = ''
    for(let i = 0; i<string.length;i++){
        if(string[i] === ' '){
            newStr[newStr.length] = '%20';
        } else {
            newStr[newStr.length] = string[i]
        }
    } 
    for(let i = 0; i<newStr.length;i++){
        final += newStr[i];
    }
    return final;
}
let str = 'you got what i neeeeed'
console.log(replace(str))