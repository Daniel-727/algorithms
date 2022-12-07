function sameFrequency(num1,num2){
    // probably have to turn these numbers into strings first so we can interate through them
    
    /* this isn't a part of the problem but what if num1 and num2 aren't provided 
    if (num1 && num2 === undefined){

    } */

    let stringNum1 = num1.toString();
    let stringNum2 = num2.toString();
    

    let obj1 = {};
    let obj2 = {};
    
    if (stringNum1.length !== stringNum2.length){
        return false;
    }
    
    //everything after this assumes that the numbers have the same number of digits
    for(const num of stringNum1){ //get every number in num1
      if (obj1[num] === undefined){ //if there is no value for key of num in the result object
            obj1[num] = 1; //add the value 1 in the result object with the key of num
      } else { //if there already is a value for the key of num in the result object then
            obj1[num]++; //increment the count of result[num]
      }
    }

    for(const num of stringNum2){
      if (obj2[num] === undefined){
            obj2[num] = 1;
      } else {
            obj2[num]++;
      }
    }

    for(const key in obj1){ //for every key in obj1
      //console.log(`obj1 key: ${key} obj2 key: ${obj2[key]}`);
      if (!(key in obj2)){ // if a key for object 1 isn't a key for object 2, then they don't have the same frequency, also the in operator is a key lookup operation which should have O(1) or constant time
            return false;
      }
      if (obj1.key !== obj2.key){ //if the keys are the same but the values are different then the frequency is also different
            return false;
      }
    }

    //at the end of all these loops, if false hasn't been returned yet, then it must be true
    return true;
    
  }

  let end = sameFrequency();
  
  end ? console.log('true') : console.log('false');