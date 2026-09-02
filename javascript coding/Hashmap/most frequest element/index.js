// find the most frequestn element 
const nums = [1, 1, 2, 2, 2, 3, 3];


function findFrequent(nums){
    const map = new Map();
    for(let num  of nums){
        if(map.has(num)){
            map.set(num, map.get(num) + 1);
        }else{
            map.set(num, 1);
        }
    }
    
    let highestKey = 0;
    let highestValue = 0;
    for(let [key, value] of map){
        if(value > highestValue){
            highestValue = value;
            highestKey = key;
        }
    }
    return highestKey;
}


console.log(findFrequent(nums));
