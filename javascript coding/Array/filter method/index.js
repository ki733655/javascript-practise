const arr = [
    {name : "khairul" , "status" : true},
    {name : "Rishi" , "status" : true},
    {name : "basid", status : false}
]

const result = arr.filter((value) => {
    return value.status === true
})

for(let value of result){
    console.log(value.name);
}
