function binary_search(arr,val){
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (right >= left){ //once right is less than left that means the value is not in this array
        if (arr[mid] === val){// we are trying to find if val is in the array, we will do that by looking if the middle index contains the value we're looking for
            return mid; //if we found the value then return the index which is mid
        } else if (arr[mid] > val){ //if the value is less than the value at the middle index, we can cut off all the indices at mid and above and just focus on the rest of the indices
            right = mid - 1;
        } else{
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    //at this point if mid hasn't been returned then we can assume that the value isn't in this array
    return -1;
}





console.log(binary_search([1,3,5,6,7,8,9,9,10,11,12],9));