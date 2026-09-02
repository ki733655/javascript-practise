const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alex", age: 30 },
    { id: 3, name: "Sam", age: 22 },
    { id: 4, name: "David", age: 28 }
];


const result = users.find((val) => {
    return val.id === 3
})

console.log(result.name); 

const result2 = users.filter((val) => {
    return val.age > 25;
})

// print the users that has age greater than 25
result2.forEach((item) => {
    console.log(item.name)
})

//using map to tranform the array to contain only the name
const mapResult = users.map((item) => {
    return item.name;
})

console.log(mapResult);


// using some method to get atleast age greater than 29

const someResult = users.some((item) => {
    return item.age > 30
})

console.log(someResult);

// using the every method to check whether every one is older thatn 25

const everyResult = users.every((item) => {
    return item.age > 20
})

console.log(everyResult); //  true because everyones age is greater that 20

// reduce to get the total salary of the employees
const employees = [
    { id: 1, name: "John", salary: 40000 },
    { id: 2, name: "Alex", salary: 60000 },
    { id: 3, name: "Sam", salary: 50000 },
    { id: 4, name: "David", salary: 45000 }
];

const reduceResult = employees.reduce((acc, curr) => {
    return acc + curr.salary;
},0)

console.log(reduceResult);

//lets calculate the average salary 

const averageResult = reduceResult / employees.length;
console.log(averageResult);