/*-----O(n) Object solution-----*/
/*------------------------------*/
/* function are_there_duplicates(){ //we can access whatever number of arguments using the arguments object

    //console.log(arguments);

    let obj1 = {};

    for (const item in arguments){//for every item in arguments
        let key = arguments[item]; //making the value the key for our new object
        if (obj1[key] === undefined){ 
            obj1[key] = 1;
        } else {
            obj1[key]++;
        }
    }

    console.log(obj1);
    
    for (const key in obj1){//for every key in obj1
        if (obj1[key] > 1){ //if any value is greater than 1, that means there's a duplicate so return true
            return true;
        }
    }

    //after the loops if the code gets to here, then there must be no duplicates
    return false;
} */



/*-----O(n) Multiple pointers solution-----*/

function are_there_duplicates(...args){// we use the ...spread operator to create an array of the values inside the arguments object

    console.log(args);

    //we need to sort the args or we won't be able to implement an efficient multiple pointers solution, sort mutates the original array so if you console log before and after this args.sort() line. the array will be different.
    args.sort();
    
    if (args.length < 2){ //if there is only 1 value in the array, then there are no duplicates
        return false;
    }
    let start = args[0];
    let next = args[1];


    //since args is sorted, if there are any duplicate values, they should be right next to eachother
    for (let i = 1; i < args.length; i++){
        if (start === next) { //if the value at index 0 is equal to the value at index 1 then there are duplicates
            return true;
        }
        start = args[i];
        next = args[i+1];
    }

    //after the loop if true hasn't been returned yet, then there are no duplicates
    return false;

}

let result = are_there_duplicates('a','b','b','c');

result ? console.log('true') : console.log('false');