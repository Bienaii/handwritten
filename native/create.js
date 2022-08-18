// 实现Object.create()
function create(obj) {
  function F() {}
  F.prototype = obj; // 将传入的对象作为原型
  return new F();
}
