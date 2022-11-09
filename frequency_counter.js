
/*---O(n^2) NESTED LOOP solution---*/
/*---------------------------------*/

/* function same (arr1, arr2){
    if(arr1.length != arr2.length){ //check to see if the arrays are the same length, because if they are not, then the frequency wouldn't match.
        return false;
    }
    for(const num of arr1){ //square each number in array1 and see if that number is in array2 using indexOf, after confirming that the number is also in array2, we will splice the value in array2 so if we loop to the same value in array1, the value in array2 won't be counted twice.
        let squared = num**2;
        let index = arr2.indexOf(squared);
        if (index === -1){
            return false;
        }
        let deleted = arr2.splice(index, 1);
        console.log(deleted);
    }
    return true;
}*/




/*---On solution---*/
/*-----------------*/

function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (const num of arr1){ //first square the numbers in array1 then use them as the keys for obj1
        let squared = num**2;
        if (obj1[squared] === undefined){ //if the key doesn't exist then create the key with a value of 1
            obj1[squared] = 1;
        } else { //if the key exists then add 1 to the existing value
            obj1[squared] += 1;
        }
    }

    for (const num of arr2){
        if (obj2[num] === undefined){
            obj2[num] = 1;
        } else {
            obj2[num] += 1;
        }
    }

    /* console.log(obj1);
    console.log(obj2); */


    for (const num in obj1){//for the keys in obj1 check if the same keys are in obj2
        if (!(num in obj2)){ //if a key in obj1 doesn't exist in obj2 that means the frequency is 0 and therefore false
            return false;
        }
        console.log(`key: ${num} value: ${obj1[num]} for obj 1, key: ${num} value: ${obj2[num]} for obj2`);
        if (obj1[num] !== obj2[num]){//even if the keys are correct, if they don't have the same values, then the frequency is off
            return false;
        }
    }

    return true;
}



let arr1 = [1,2,3,2];
let arr2 = [9,1,4,4];

let result = same(arr1,arr2);

result ? console.log('true') : console.log('false');