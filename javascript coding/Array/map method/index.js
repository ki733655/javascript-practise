const arr=  [1,2,3,4];

let newarr = arr.map((num) => {
     return num * num;
})

for(let value of newarr){
    console.log(value);
}