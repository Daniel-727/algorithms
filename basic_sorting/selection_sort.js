function selection_sort(arr){
    
    function swap(arr, idx1, idx2){
       return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = 0; i < arr.length; i++){

        let min_index = i;
        //console.log(`starting min: ${arr[min_index]}`);

        for(let j = i + 1; j < arr.length; j++){
            if(arr[min_index] > arr[j]){ //we want to compare min with every element and if any element is smaller than min, then we want that element to become the new min
                min_index = j;
                //console.log(`swapped min: ${arr[min_index]}`);
            }
        }

        //at the end of every inner loop we want to swap value at index i with the min value we found
        if (i !== min_index){ //if i and min_index are the same then it's redundant to swap
            swap(arr, i, min_index);
        }

    }

    console.log(arr);

}


selection_sort([0,2,34,22,10,19,17]);