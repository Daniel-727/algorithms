function fib(num){

    if (num === 1 || num ===2){ //base case, the first 2 numbers in the fibonacci sequence are both 1
        return 1;
    }

    return fib(num - 1) + fib(num - 2);
}

console.log(fib(35));