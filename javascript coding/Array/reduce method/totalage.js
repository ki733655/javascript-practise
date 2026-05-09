const users = [
   {age: 20},
   {age: 25},
   {age: 30}
];

let totalAge  = users.reduce((acc , current) => {
    return acc + current.age;
},0)

console.log(totalAge);