
// getnmae is a closure that has access to the name variable in the greet function's scope, even after greet has finished executing. This allows getname to remember the value of name and use it when it is called later on.

console.log("Start small. Ship something.");

function greet(name){
    
    return function getname(){
        console.log("Hello " + name);
    }
    
}

let getname = greet("Khairul");
getname();

getname();