function reverse(str){

    if(str.length === 1){//base case, if there is only 1 character left in the string, just return it
        return str;
    }

    let last = str.slice(-1); //we're trying to reverse the string so we need to always take the last character and put it at the front
    let start = str.slice(0,-1); //take the remaining string and pass it through reverse()
    

    return last.concat(reverse(start));// can also write "last + reverse(start);"
}

console.log(reverse('awesome'));