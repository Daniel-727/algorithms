

function is_subsequence(str1, str2){

    let i = 0;
    let check = '';

    for (const char of str1){
        
        while(char !== str2[i]){
            if (str2[i] === undefined){ //reach the end of the string and char doesn't equal str2[i] then break out
                break;
            }
            i += 1;//can't just increment here i++, because I want the value of i to 
        }

        
        check += char;
        i += 1;
        console.log(i);
    }
    console.log(check);
    
}

is_subsequence('hello','aohnellppppp');