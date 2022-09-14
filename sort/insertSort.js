/**
 * 插入排序
 * 1. 从第一个元素开始，该元素可以认为已经被排序；
 * 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * 4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 5. 将新元素插入到该位置后；
 * 6. 重复步骤2~5。
 */
 function insertSort(arr) {
  const length = arr.length;
  for (var i = 1; i < length; i++) {
    var current = arr[i],
      j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr
}

let array = [3,44,15,36,26,27,2,46,4,19,50,48];
console.log('排序前：', ...array)
let res = insertSort(array)
console.log('排序后：', ...res)