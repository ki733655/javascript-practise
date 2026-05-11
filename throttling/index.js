function throttle(func, wait) {
  let shouldwait = false;

  return function () {
    if (shouldwait) {
      return;
    }

    func();
    shouldwait = true;

    // put a setTimout so that no function gets called

    setTimeout(() => {
      shouldwait = false;
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
