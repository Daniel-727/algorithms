function linear_search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i;
        }
    }

    //if an index hasn't been returned already while going through the loop then the value doesn't exist in the array, therefore return -1
    return -1;
}

let result = linear_search([1,2,3,'hi','no',3,'four'], 3);

result ? console.log(result) : console.log('-1');