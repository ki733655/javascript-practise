const arr = [10,20,30,40];

const total = arr.reduce((acc, current) => {
    return acc + current;
},0)


console.log(total);
