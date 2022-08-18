// 实现一个new方法
// new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：
//  1. 创建一个空的javascript对象就比如（即{}）；
//  2. 链接该对象（即设置该对象的构造函数）到另一个对象;
//  3. 将步骤1新创建的对象作为this的上下文；
//  4. 如果该函数有没有返回对象，没有则返回this；

function _new(constructer, ...arg) {
  //1、创建一个空对象
  let obj = {};
  //2、链接到原型，这样新对象就可以访问原型上的属性和方法
  obj.__proto__ = constructer.prototype;
  //3、将步骤1新创建的对象作为this的上下文，这样obj有了constructer构造函数中的属性或方法
  let result = constructer.call(obj, ...arg); // 调用的方法的返回值就是call的返回值了,如果调用的方法里没有return,则返回undefined；此处Person函数没有return,所以返回undefined；
  //4、如果该函数没有返回对象（即result不是一个对象），则返回this（即obj）
  console.log(result, typeof result === "object");
  return typeof result === "object" ? result : obj;
}

function Persion(name, age) {
  this.name = name;
  this.age = age;
}
let Persion1 = _new(Persion, "Alice", "18");
let Persion2 = _new(Persion, "Bob", "20");
console.log(Persion1.name); // 'lucy'
console.log(Persion2.name); // 'chuan'
