// finally 方法不管是调用了 then 还是 catch，最终都会执行到 finally 的 callback
Promise.prototype.finally = function (callback) {
  // this 是 Promise.prototype， this.constructor 返回 Promise 构造函数
  let P = this.constructor; // 让P可以调用resolve()\reject() 等静态方法
  return this.then(
    // 注意：P.then将返回undefined， （Promise实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的）
    (value) => P.resolve(callback()).then(() => value), //同理：this.resolve, this.reject将返回undefined
    (reason) =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

// Promise  // 构造函数
// Promise.prototype.then
// Promise.prototype.catch
// Promise.prototype.finally

// // 静态方法
// Promise.resolve()
// Promise.reject()
// Promise.race()
// Promise.all()
// Promise.allSettled() 
// Promise.any() 
