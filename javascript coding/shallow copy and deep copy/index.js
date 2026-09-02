
const data = {
    name : "Khairul",
    address : {
        city : "Dibrugarh"
    }
}

console.log("Original object", data);

const shallow = {...data}; // this is knows as shallow copy
shallow.address.city = "change"
console.log("shallow expample", shallow);
// here the original object is changed because it is copied by reference not actual value
console.log("deep copy example")
const deep = JSON.parse(JSON.stringify(data));
deep.name = "Aiyan"
console.log("deep exmaple" , deep) 
// it doest not chnages the original array because it copied by value and its independent object
