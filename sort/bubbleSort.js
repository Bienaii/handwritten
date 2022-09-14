/**
 * 冒泡排序
 * 1. 比较相邻的两个元素。如果第一个比第二个大，则交换位置；
 * 2. 对每一对相邻元素重复第一个步骤，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 * 3. 针对所有的元素重复以上的步骤，除了最后一个；
 * 4. 重复步骤1~3，直到排序完成。
 */
function bubbleSort(arr) {
  const length = arr.length;
  if (!length) {
    return
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

let array = [3,44,15,36,26,27,2,46,4,19,50,48];
console.log('排序前：', ...array)
let res = bubbleSort(array)
console.log('排序后：', ...res)