// Promise.all() 执行过个 promise 时，只要其中任何一个promise 失败都会执行 reject ，并且 reject 的是第一个抛出的错误信息，只有所有的 promise 都 resolve 时才会调用 .then 中的成功回调
Promise.all = function (promiseArrs) {
  //在Promise类上添加一个all方法，接受一个传进来的promise数组，如果不是的话，就会调用Promise.resolve将其转化为Promise对象之后再进行处理。
  return new Promise((resolve, reject) => {
    //返回一个新的Promise
    let arr = []; //定义一个空数组存放结果
    let i = 0;
    function handleData(index, data) {
      //处理数据函数
      arr[index] = data;
      i++;
      if (i === promiseArrs.length) {
        //当i等于传递的数组的长度时
        resolve(arr); //执行resolve,并将结果放入
      }
    }
    for (let i = 0; i < promiseArrs.length; i++) {
      //循环遍历数组
      promiseArrs[i].then((data) => {
        console.log(i, "here");
        handleData(i, data); //将结果和索引传入handleData函数
      }, reject);
    }
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
const p3 = Promise.reject(3);
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, "three");
// });

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log("resolve: ", values);
  })
  .catch((err) => {
    console.log("reject: ", err);
  });
