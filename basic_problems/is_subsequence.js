

function is_subsequence(str1, str2){


    let fp = 0; //pointer for first string
    for (let i = 0; i < str2.length; i++){ //we want to go through the entire 2nd string
       if (str2[i] === str1[fp]){ //if the values in the strings are equal, increment the pointer of the first string by 1
        fp++;
       }
       if (fp === str1.length){ //once the pointer is equal to str1.length it's out of bounds for the array indices meaning that str1 is a subsequence
        return true;
       }
    }

    //if at the end of the loop, true hasn't been returned, that means str1 is not a subsequence of str2
    return false;
    
}

let result = is_subsequence('abc','acb');

result ? console.log('true') : console.log('false');