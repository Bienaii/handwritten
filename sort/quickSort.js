/**
 * 快速排序
 * 1. 选择一个参考元素，将列表分割成两个子序列；
 * 2. 对列表重新排序，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值的后面；
 * 3. 分别对较小元素的子序列和较大元素的子序列重复步骤1和2
 */
 function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const left = [], right = [], current = arr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(current, quickSort(right)) // splice改变原数组，基准值被分离出来，因此需要重新合并，left < current < right
}

let array = [3,44,15,36,26,27,2,46,4,19,50,48];
console.log('排序前：', ...array)
let res = quickSort(array)
console.log('排序后：', ...res)