function throttle(func, wait) {
  let shouldwait = false; //  this variable holds the pwer to decide should we allow or not

  return function () {
    if (shouldwait) { // if true out of the fucntion not execution
      return;
    }

    func();
    shouldwait = true; // making it true so function get called 

    // put a setTimout so that no function gets called

    setTimeout(() => {
      shouldwait = false; // finally making it false because time has passed
    }, wait);
  };
}

function print() {
  console.log("I love javascript");
}

const result = throttle(print, 2000);
result();
result(); // doesnt matter complete ignored because after 2 sec only next fucntion call would happen

// let see if after 3sec doesnt it prints
setTimeout(() =>{
    result();
}, 3000) //  yes it prints so its wokring perfectly
