//1，请实现如下的函数，可以批量请求数据，所有的URL地址在urls参数中，同时可
//以通过max参数 控制请求的并发度。当所有的请求结束后，需要执行callback回调。发请求的函数可以直接使用fetch。

function sendRequest(max = 2, urls = [], callback = () => {}) {
  return new Promise((resolve) => {
    let allRequest = [],
      nowRequest = [],
      length = urls.length,
      i = 0;

    const runtime = () => {
      let arr = urls.splice(0, max);

      arr.forEach((item) => {
        nowRequest.push(Promise.resolve().then(() => callback(item)));
      });

      Promise.allSettled(nowRequest).then((val) => {
        i += max;
        nowRequest = [];
        allRequest = allRequest.concat(val);

        if (i < length) {
          runtime();
        } else if (i >= length) {
          resolve(allRequest);
        }
      });
    };

    runtime()
  });
}

const timeout = (i) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i);
      if (i === 2000) {
        reject({ error: i });
      } else {
        resolve({ success: i });
      }
    }, i);
  });

sendRequest(3, [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], timeout).then(
  (res) => {
    console.log(res);
  }
);
