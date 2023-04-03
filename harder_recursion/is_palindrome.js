function is_palindrome(str){

    let reverse_string = reverse(str);

    if (str === reverse_string){ //when the reverse of the string is the same as the original string then the string must be a palindrome
        return true;
    } else {
        return false;
    }
    
}


function reverse(str){ // our recursive helper function
    if(str.length === 1){//base case, if there is only 1 character left in the string, just return it
        return str;
    }

    let last = str.slice(-1); //we're trying to reverse the string so we need to always take the last character and put it at the front
    let start = str.slice(0,-1); //take the remaining string and pass it through reverse()
    

    return last.concat(reverse(start));// can also write "last + reverse(start);"
}


is_palindrome('tocot') ? console.log('true') : console.log('false');