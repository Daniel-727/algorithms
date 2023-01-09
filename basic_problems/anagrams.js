
function anagrams(str1,str2){ //function takes in two strings
    if (str1.length != str2.length){ //if strings aren't the same length, then they cannot be anagrams
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (const character of str1){
        if (obj1[character] === undefined){ //if there is no key of character in obj1 then create a key of character for obj1 and set it to 0
            obj1[character] = 1;
        } else {
            obj1[character] += 1;
        }
    }

    for (const character of str2){
        if (obj2[character] === undefined){ //if there is no key of character in obj1 then create a key of character for obj1 and set it to 0
            obj2[character] = 1;
        } else {
            obj2[character] += 1;
        }
    }

    console.log(obj1, obj2);

    for (const key in obj1){//go through every key in obj1
        if (!(key in obj2)){//if a key in obj1 is not in obj2 then they can't be anagrams
            return false;
        }
        if (obj1[key] !== obj2[key]){//if the value of obj1[key] is not the same as the value of obj2[key] then they can't be anagrams
            return false;
        }
        
    }
    
    //if false hasn't been returned yet, then the conditions for an anagram have been fulfilled
    return true;
}


let result = anagrams('anagram', 'nagaram');

result ? console.log('true') : console.log('false');