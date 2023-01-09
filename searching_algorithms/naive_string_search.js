function string_search(l_string, s_string){

    let ssp = 0; //index for short string
    let end = s_string.length;
    let count = 0; //count to store how many times the substring appears

    for (let i = 0; i < l_string.length; i ++){

        if (l_string[i] === s_string[ssp]){ //check if the first character in the short string is the same as the first character in the long string
            ssp++; //if the first character in the long string is the same as substring, increment the index for the substring
        } else { //if the characters are different then reset the substring index to 0
            ssp = 0;
        }

        if (ssp === end){
            count++;// if the ssp pointer reaches the end of the substring then update the count of how many times it appears in the long string
            ssp = 0; //also reset the pointer so we can continue to track the substring
        }
    }

    return count;

}



console.log(string_search('hi my name is daniel, i like to dance', 'gun'));