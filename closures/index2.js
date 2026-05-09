// counter implementation to understand the concept of closure
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Start small. Ship something.");

function createCounter(){
    let count = 0
    
    return function increase(){
        count++;
        console.log(count);
    }
    
}

let counter = createCounter();
counter();
counter();