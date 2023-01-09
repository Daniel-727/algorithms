function product_of_array(arr){

    if (arr.length === 1) { //base case is if there is only 1 number left in the array, return the value of that number
        return arr[0];
    }

    let num = arr.pop(); //num will be the last number in the array, I believe pop is a destructive method which will change the array giving us a new one
    

    return num * product_of_array(arr); //I think this should work because arr should be mutated from pop
}

console.log(product_of_array([1,3,5,5]));