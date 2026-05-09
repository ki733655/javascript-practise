const users = [
   {name: "A", active: true, salary: 1000},
   {name: "B", active: false, salary: 2000},
   {name: "C", active: true, salary: 3000}
];

// GOAL

// Get only active users
// Extract their salaries
// Find total salary

const result = users.filter((user) => {
    return user.active;
}).reduce((prev, current) => {
    return prev + current.salary;
}, 0)

console.log(result);

