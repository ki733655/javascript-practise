// fetch user

console.log("Prgram starts")

function fetchUser(){
    let err = "no data"
    
    const data = {
        name : "john",
        age : 22
    }
    
    return new Promise((resolve, reject) => {
        
        // db operation get data
        let result = true;
        
        setTimeout(() => {
            if(result){
                resolve(data);
            }else{
                reject(err)
            }
        }, 2000)
        
    })
}


fetchUser()
.then((data) => {
    return console.log(`name is ${data.name} age is ${data.age}`)
})
.catch((err) => {
    return console.log(err)
})