function filterUnder(array, filter){
    let filtered = [];
    for(i = 0; i <= array.length; i++){
        if(array[i] >= filter){
            filtered.push(array[i])
        }
    }
    return filtered
}

console.log(filterUnder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))