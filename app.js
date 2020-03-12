const Array = require('./array')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    console.log(arr);

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);

    arr.pop();
    arr.pop();
    arr.pop();

    console.log(arr);
    console.log(arr.get(0));

    arr.pop();
    arr.pop();
    arr.pop();

    console.log(arr);

    arr.push("tauhida");
    console.log(arr);

}

main()


//2. Explore the push() method
//What is the length, capacity and memory address of your array?
//length: 1, capacity: 3, ptr: 0

//What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
//length: 6, _capacity: 12, ptr: 3; 
//length = 6 because we have added in 6 items into the array
//capacity = 12 because length 1 = 3 then we have to expand that so we have to increase it by a ration of 3 so 3X3 is the expansion
// and is then added to the original memory, when we fill that up and we need to go beyond 12, it will be 3x12 + 3 to get 39.
//ptr = 3 because this points to the last memory allocation.

//3. Exploring the pop() method
//What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
//length: 3, _capacity: 12, ptr: 3; 
//length = 3 because we have deleted 3 items into the array
//capacity = 12 because the memory stays as is until it is asked to resize itself.
//ptr = 3 because this points to the last memory allocation.

//4. Understanding more about how arrays work
//Print this 1 item that you just added. What is the result? Can you explain your result?
//length: 1, _capacity: 12, ptr: 3; 
//length = 1 because is only one item in the array
//capacity = 12 because the memory stays as is until it is asked to resize itself.
//ptr = 3 because this points to the last memory allocation.

//What is the purpose of the _resize() function in your Array class?
//To decrease the memory size of the array. since it is not being called in this, the array does noe decrease in memory size.
