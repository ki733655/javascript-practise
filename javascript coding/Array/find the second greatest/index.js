const arr = [4,6,3,4,9,8];

let greatest = arr[0];
let secondGreatest = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] > greatest){
        secondGreatest = greatest;
        greatest = arr[i];
    }else if(arr[i] > secondGreatest && arr[i] != greatest){
        secondGreatest = arr[i];
    }
}

console.log(secondGreatest);