const arr = [3, 7, 2, 9, 1];

let greatest = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i] > greatest){
        greatest = arr[i];
    }
}

console.log(greatest);