

/*----O(n) go through all elements at most once solution----*/
/*--------------------------------------------------*/

function sumzero(array) {

    let start = 0; //get the first array index
    let end = array.length - 1; //get the last array index

    

    while(end !== start){//keep comparing numbers until the beginning and end indices are equal
        
        let first = array[start]; //get value in first index
        let last = array[end]; //get value in last index
        let sum = first + last; //get the sum

        if(sum === 0){ //if the values equal zero return the array indices
            return [first,last]; 
        } else if (sum > 0) { //if the sum is greater than 0, decrease the index to get a smaller value
            end--;
        } else {
            start++;
        }
        console.log(sum);
        console.log(`this is the value of first ${first}`);
        console.log(`this is the value of last ${last}`);
    }
    // if it reaches this point and hasn't returned an array, then there is no pair that will equal 0, therefore return undefined
    return undefined;
}

let result = sumzero([-4,-3,-2,-1,0,5,10]);

result ? console.log(result) : console.log('undefined');