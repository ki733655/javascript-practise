// closure basic prgram 

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Start small. Ship something.");

function outer(){
    count = 1;
    function inner(){
        console.log(count);
    }
    inner();
}

outer();