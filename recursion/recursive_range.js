function recursive_range(num){
    if(num === 1){ //basecase, basically same as factorial except instead of multiplying, you add the previous numbers
        return 1;
    }

    return num + recursive_range(num - 1);
}

console.log(recursive_range(10));