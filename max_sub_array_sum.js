
/*--O(n^2) nested loop solution --*/
/*--------------------------------*/

function max_sub_array_sum(array, n){
    if (array.length === 0){ //if there is no element in the array just return null
        return null;
    }

    let max = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++){
        if (i + n - 1 > array.length - 1){ // if our index + numbers we need to add together -1  go over the last valid index which is array.length - 1 p.s. we subtract 1 from index + numbers because we are counting the value at index i
            return max;
        }

        sum = array[i];

        for (j = i + 1; j < i + n; j++){ //this doesn't run when n = 1 because the second expression will always be x < x which is never true
            sum += array[j];
        }
        
        if (sum > max) {
            max = sum;
        }
        
    }

    return max;
    
}


let result = max_sub_array_sum([1,3,4,6,7,2,4,10,12,1,1,1,4,15], 3); 

result ? console.log(result) : console.log('null');