const arr = [1, 2, 3, 4, 5];

let i=0;
let j=arr.length -1;

while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
    i++;
    j--;
}

// print the arr
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

