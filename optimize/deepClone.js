function deepClone(obj) {
  // 数据类型为引用数据类型
  if (typeof obj === "object") {
    // 初始化返回结果
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      // 避免相互引用出现死循环导致爆栈
      if (obj === obj[key]) {
        continue;
      }
      // 使用hasOwnProperty()方法来忽略继承属性
      if (obj.hasOwnProperty(key)) {
        // 递归调用
        result[key] = deepClone(obj[key]);
      }
    }
    return result;
  } else {
    // 基本数据类型，直接返回
    return obj;
  }
}

let obj1 = { a: 1, b: ["2", "3"] };
let obj2 = deepClone(obj1);
console.log(obj2);
console.log(obj2 === obj1);
