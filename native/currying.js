// 公式类型一: 参数数量满足函数参数要求，触发执行
// fn(a,b,c,d) => fn(a)(b)(c)(d); 或 fn(a, b)(c)(d);
function add(a, b, c, d) {
  return a + b + c + d;
}

const createCurry = (fn, ...args) => {
  let _args = args || [];
  let length = fn.length; // fn.length代码函数参数数量

  return (...rest) => {
    let _allArgs = _args.slice(0);
    // 深拷贝闭包共用对象_args，避免后续操作影响（引用类型）
    _allArgs.push(...rest);
    if (_allArgs.length < length) {
      // 参数数量不满足原始函数数量，返回curry函数
      return createCurry.call(this, fn, ..._allArgs);
    } else {
      // 参数数量满足原始函数数量，触发执行
      return fn.apply(this, _allArgs);
    }
  };
};

const curryAdd = createCurry(add);
let sum = curryAdd(2, 3)(4)(5);

console.log(sum);
