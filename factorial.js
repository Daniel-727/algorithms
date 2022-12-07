function factorial(num) {
    if (num === 1){ //base case, num is 1 return 1
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(10));