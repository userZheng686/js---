let debounce = (func, wait = 1000, immediate = false) => {
  let timer = null;

  const later = () => {
    timer = setTimeout(() => {
      func();
    }, wait);
  };

  return function () {
    if (!timer) {
      clearTimeout(timer);
      later();
      if(immediate) func()
    } else {
      clearTimeout(timer);
      later();
    }
  };
};

let sum = 0;

let calls = () => console.log(sum++);

let test = debounce(calls,1000,true);

let startFiveTimes = () => {
  test();
  test();
  test();
  test();
  test();
};

startFiveTimes();

