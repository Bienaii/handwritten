// Promise.race() 函数返回一个 Promise(注意是返回一个promise, 而非数组），它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的 promise 的状态。
Promise._race = function (promiseArrs) {
  return new Promise((resolve, reject) => {
    promiseArrs.forEach((item) => {
      item.then(resolve, reject);
    });
  });
};

const p1 = Promise.reject(1);
const p2 = Promise.reject(2);
const p3 = Promise.resolve(3);
// const p3 = Promise.reject(3);

Promise._race([p1, p2, p3])
  .then((values) => {
    console.log("resolve: ", values);
  })
  .catch((err) => {
    console.log("reject: ", err);
  });
