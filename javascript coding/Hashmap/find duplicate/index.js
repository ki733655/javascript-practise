// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Start small. Ship something.");

function containsDuplicate(nums){
    const map = new Map();
    for(let num of nums){
        if(map.has(num)){
            return true;
        }else{
            map.set(num);
        }
    }
    
    return false;
    
}

const data = [2,3,5,5,7];
const result = containsDuplicate(data);
console.log(result);
