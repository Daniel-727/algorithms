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

function are_there_duplicates(){

}


let result = are_there_duplicates(1,33,4,'x','1');

result ? console.log('true') : console.log('false');