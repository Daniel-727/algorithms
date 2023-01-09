function factorial(num) {
    if (num === 1 || num === 0){ //base case, num is 1 return 1, 0! is always 1
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(10));