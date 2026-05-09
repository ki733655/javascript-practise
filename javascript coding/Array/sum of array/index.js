const arr= [3,5,6,7,8];

// sum of the array elements

let sum = 0;

for(let value of arr){
    sum += value;
}

console.log(sum);


// average of array

let average = sum / arr.length;


console.log(Math.ceil(average));
