function insertion_sort(arr){

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(let i = 1; i < arr.length; i++){

        for(let j = i - 1; j > -1; j--){ //go backwards through the sorted indices
            let temp_i = i; //temp i so I can change it without messing up the loop
            if (arr[temp_i] < arr[j]){
                swap(arr,j,i);
                temp_i--;
            }
        }

    }


    return arr;
}



let result = insertion_sort([5,80,2,6,35,10,9]);

console.log(result);