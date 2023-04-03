
//RECURSION BUBBLESORT (not solved)
/* function bubble_sort(arr){

    if (arr.length === 1){ // base case, once the length of array reaches 1
        return arr;
    }

    for(let i = 0; i < arr.length; i ++){
        let current = i;
        let next = i + 1;

        if (arr[current] > arr[next]){ //if current value is greater the the next value
            let temp = arr[current]; //temp variable to store current value
            arr[current] = arr[next];
            arr[next] = temp;
        }
    }

    let new_arr = arr.slice(0, arr.length - 1);
    bubble_sort(new_arr);
    console.log(arr);
} */

//ITERATIVE BUBBLESORT

/* function bubble_sort(arr){

    for(let i = arr.length - 1; i > 0; i--){
        for (let j = 0; j < i; j++) {

            let current = j;
            let next = j + 1;

            if (arr[current] > arr[next]){ //if current value is greater the the next value
                let temp = arr[current]; //temp variable to store current value
                arr[current] = arr[next];
                arr[next] = temp;
            }
        }
    }

    console.log(arr);
} */


//ITERATIVE CONTEMPORARY BUBBLESORT
function bubble_sort(arr){

    

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2] ,arr[idx1]];
    }

    for(let i = arr.length - 1; i > 0; i--){

        let swap_num = 0;

        for (let j = 0; j < i; j++) {
            
            let current = j;
            let next = j + 1;

            if (arr[current] > arr[next]){ //if current value is greater the the next value
                swap(arr, current, next);
                swap_num++;
            }

        }

        if (swap_num === 0){
            return arr;
        }
    }

    //console.log(arr);
}



bubble_sort([50,1,2,3,4,5,6]);