// Promise.race() 函数返回一个 Promise，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。
Promise.race = function (promiseArrs) {
  return new Promise((resolve, reject) => {
    promiseArrs.forEach((item) => {
      item.then(resolve, reject);
    });
  });
};
