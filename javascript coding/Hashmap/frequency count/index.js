// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Start small. Ship something.");

const nums = [1, 1, 2, 3, 3, 3];

const map = new Map();

for(num of nums){
    if(map.has(num)){
        let temp = map.get(num);
        map.set(num, temp + 1);
        
    }else{
        map.set(num, 1)
    }
}

for(const [key, value] of map){
    console.log(key, value);
}