/// find()
const users = [
   {name: "A", age: 15},
   {name: "B", age: 22},
   {name: "C", age: 30}
];

const result = users.find((val) => val.age >= 18 );
console.log(result);// give the b name object 
// why not c object because find()  just looks for the first value when the condition meets

// some() code

const users2 = [
   {name: "A", blocked: false},
   {name: "B", blocked: false},
   {name: "C", blocked: true}
];

// Goal:
// Check if ANY user is blocked.

const result2 = users2.some((user) => user.blocked )
console.log(result2) // true because one exist

// every() code

const nums = [78, 98, 9, 4, 6];

const result3 = nums.every((val ) =>  val >= 5);
console.log(result3); // false because 4 exist smaller thatn 5