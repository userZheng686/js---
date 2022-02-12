let throttle = (func,wait = 100) => {
    let prev = new Date().getTime(),
        timer = null;
    
    const later = () => {
        timer = setTimeout(() => {
            func()
        },wait)
    }

    return function(){
        let now = new Date().getTime()
        if(now-prev < wait) {
            clearTimeout(timer);
            later()
        }
        else {
            later()
        }
    }
} 

// @ts-ignore
let sum = 0;

// @ts-ignore
let calls = () => console.log(sum++);

// @ts-ignore
let test = throttle(calls,2);

// @ts-ignore
let startFiveTimes = () => {
  test();
  test();
  test();
  test();
  test();
};

startFiveTimes();