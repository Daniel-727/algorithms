
/*--O(n^2) nested loop solution --*/
/*--------------------------------*/

/* function max_sub_array_sum(array, n){
    if (array.length === 0){ //if there is no element in the array just return null
        return null;
    }

    let max = -Infinity; //we might have negative numbers

    for (let i = 0; i < array.length; i++){
        if (i + n - 1 > array.length - 1){ // if our index + numbers we need to add together -1  go over the last valid index which is array.length - 1 p.s. we subtract 1 from index + numbers because we are counting the value at index i
            return max;
        }

        let sum = array[i];

        for (j = i + 1; j < i + n; j++){ //this doesn't run when n = 1 because the second expression will always be x < x which is never true
            sum += array[j];
        }
        
        if (sum > max) {
            max = sum;
        }
        
    }

    return max;
    
} */





/*---O(n) solution sliding window---*/
/*----------------------------------*/

function max_sub_array_sum(array,n){ //assuming we are passed in a sorted array

    let maxSum = 0;
    let tempSum = 0;

    if (n > array.length){
        return null;
    }
    for (let i = 0; i < n; i++){ //get the sum of the first n numbers
        maxSum += array[i];
        
    }
    
    tempSum = maxSum;

    for (let i = n; i < array.length; i++){

        
        tempSum = tempSum - array[i - n] + array[i]; //as we go through the loop, we subtract the smallest (leftmost number), and add the next larger number (rightmost number)
        
        if (tempSum > maxSum){ //if tempSum is greater than our current maxSum, then make that the new max
            
            maxSum = tempSum;
            
        }

    }

    //after going through the loops we should have the maxSum
    return maxSum;

}


let result = max_sub_array_sum([1,2,5,2,8,1,5],4);

result ? console.log(result) : console.log('null');