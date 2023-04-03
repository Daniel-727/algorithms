function number_sort(arr){
    arr.sort((a,b) => a-b);
    console.log(arr);
}

function string_sort(arr){
    arr.sort();
    console.log(arr);
}

function length_sort(arr){
    arr.sort((a,b) => a.length - b.length);
    console.log(arr);
}


number_sort([100,5,30,0,1,52,3,7]);

string_sort(['brittany', 'daniel', 'devin', 'mia', 'alejandro']);

length_sort(['brittany', 'daniel', 'devin', 'mia', 'alejandro']);
