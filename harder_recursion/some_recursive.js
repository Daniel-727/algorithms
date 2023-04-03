function some_recursive(arr, isOdd) {

    let odd = false;

    if (isOdd(arr)){
        console.log('hi');
        return true;
    } else {
        return false;
    }

}



function isOdd(arr) { //a function that checks if there is a value that's odd in an array

    if (arr[0] % 2 ===1){
        console.log('jhi');
    }

    arr.splice(0,1); //after testing to see if the first value is true, get rid of the first value
    isOdd(arr);

}


some_recursive([2,4,6,8,11], isOdd) ? console.log('true') : console.log('false');