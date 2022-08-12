// 防抖 一定时间内
function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function() {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments); // 加上 apply 确保 在 sayHi 函数里的 this 指向的是 input对象(不然就指向 window 了，不是我们想要的)。
                                //这里的箭头函数依旧是指向 input 对象。
    }, 500)
  }
}

function sayHi() {
  console.log('debounce');
}

const input = document.getElementById('input');
input.addEventListener('input', debounce(sayHi));