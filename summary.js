// 防抖
function debounce(fn) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500)
  }
}

// 节流
function throttle(fn) {
  let flag = true;
  return function() {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  }
}

// 扁平数据转换tree结构数组
function convert(data, result = [], parentId) {
  for(const item of data) {
    if(item.parentId === parentId) {
      const newItem = { ...item, children: [] };
      result.push(item);
      convert(data, newItem.children, item.id)
    }
  }
  return result;
}

function convert2(data) {
  const result = [];
  const itemMap = {};

  for (const item of data) {
    itemMap[item.id] = { ...item, children: [] };
  }

  for (const item of data) {
    const { id, parentId } = { ...item };
    const newItem = itemMap[id];

    if(parentId === 0) {
      result.push(newItem);
    } else {
      if(!itemMap[parentId] === 0) {
        itemMap[parentId] = { children: [] };
      }
      itemMap[parentId].children.push(newItem)
    }

  }
  return result;
}

// 柯里化
const currying = function(fn, ...args) {
  let _args = args;
  let length = fn.length;

  return function(...rest) {
    let _allArgs = _args.slice(0);
    _allArgs.push(...rest);
    if(_allArgs.length === length) {
      return currying.call(this, fn, ..._allArgs);
    } else {
      return fn.apply(this, _allArgs)
    }
  }
}
function add(a, b, c, d) {
  return a + b + c + d;
}
const curryingIns = currying(add);
const sum = curryingIns(1)(2)(3)(4);

// 实现Promise.all方法
Promise.all = function(promiseArr) {
  return new Promise((resolve, reject) => {
    let arr = [], count++;
    
    function handler(index, data) {
      arr[index] = data;
      count++;
      if(count === promiseArr.length) {
        resolve(arr);
      }
    }

    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i].then((data) => {
        handler(i, data);
      }, reject)
    }
  })
}

// 实现Promise.race方法
Promise.race = function(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(item => {
      item.then(resolve, reject)
    });
  })
}

const currying = function(fn, ...args) {
  let _args = args || [];
  let length = fn.length;

  return function(...rest) {
    let _allArgs = _args.slice();
    _allArgs.push(...rest);
    if(_allArgs.length < length) {
      return currying.call(this, fn, ..._allArgs);
    } else {
      return fn.apply(this, ..._allArgs);
    }
  }
}