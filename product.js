function productArray(array){
    let productArr =[];
    let product = 1;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] !== array[j]){
                product = product * array[j];
            }
        }
        productArr.push(product)
        product = 1;
    }
    return productArr
}

console.log(productArray([1, 3, 9, 4]))