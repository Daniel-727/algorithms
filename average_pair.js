
/*-----O(n) two pointers at the end solution-----*/
/*-----------------------------------------------*/

function average_pair(array1, target_average){

    let start = 0;
    let end = array1.length - 1;

    if (start >= end){//if there's only 1 item in the array or no items then there is no pair
        return false;
    }

    /* console.log(start);
    console.log(end); */

    while (start !== end){ //continue the loop as long as the pointers aren't pointing to the same index
        let temp_average = (array1[start] + array1[end]) / 2;

        if (target_average > temp_average){
            start++;
        } else if (target_average < temp_average){
            end--;
        } else { //if target_average === temp_average, then we found a pair that matches the target_average so return true
            return true;
        }
    }

    //if after finishing the loop we haven't found the target_average, return false
    return false;
}

let result = average_pair([-1,0,3,4,5,6],1.5);


result ? console.log('true') : console.log('false');