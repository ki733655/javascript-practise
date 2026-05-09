
//  promise code 

function checkNumber(num){
     return  new Promise((resolve, reject) => {
         if(num > 10){
             resolve("its greater")
         }else{
             reject("Its not ")
         }
     })
     
}

checkNumber(9)
.then((data) => console.log(data))
.catch((err) => console.log(err))

