
/*-----O(n) create object solution------*/
/*--------------------------------------*/

/* function countUniqueValues(array){

    let unique = {};

    for (const num of array){ //research the difference between for of and for in loops
        if(unique[num] === undefined){ //if there is no key/value in the unique object
            unique[num] = 1; //create a key in the object and set it to 1
        } else { //if there is a key/value pair in the object then add 1 to it
            unique[num]++;
        }

        // console.log(unique);
    }

    let unique_values = 0;
    for (const key in unique){
        unique_values++;
    }
    console.log(unique_values);
    return unique_values;
}


countUniqueValues([-2,-1,-1,0,1]); */


/*-----O(n) two pointers no mutation solution-----*/
/*------------------------------------------------*/

/* function countUniqueValues(array){

    if (array[0] === undefined){ //if there are no items in the array then return 0
        return 0;
    } else{ //otherwise, if there are elements in the array

        let count = 1;

        for (let i = 0; i + 1 < array.length; i++){

            if (array[i] !== array[i + 1]){ //if value in current index is not the same as the value in the next index, that means there's a new unique value, therefore add 1 to the unique value count
                count++;
            }
            //console.log(count);
        }

        return count;
    }
    //I don't think the code should ever get to this point, something should already have been returned, either 0 or count
}

let result = countUniqueValues([-1,-1,0,1]);

console.log(result); */


/*-----O(n) two pointers mutation solution-----*/
/*---------------------------------------------*/

function countUniqueValues(array){

}