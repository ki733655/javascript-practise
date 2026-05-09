function bankAccount(){
    let balance = 0;
    return function add(amount){
        balance = balance + amount;
        console.log("Added " + amount);
        console.log("Updated balance " + balance);
    }
}

const add = bankAccount();

add(20);
add(80);
add(67);
