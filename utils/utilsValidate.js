/*
 * @Author: Bienaii
 * @Date: 2021-06-09
 * @Description: 判断类方法
*/
// 判断是否为空对象
// Tips: []--> false; {a:1}--> false; {} --> true
export function isObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
    return false
  return !Object.keys(obj).length
}

// 判断是否空字符串（纯空格也为空）
export function isEmptyString(string) {
  if (
    string == undefined ||
    typeof string == 'undefined' ||
    !string ||
    string == null ||
    string == '' ||
    /^\s+$/gi.test(string)
  ) {
    return true;
  } else {
    return false;
  }
}

// 验证手机格式是否合规
export function isPhone(phone) {
  let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (!reg.test(phone)) {
    return false;
  } else {
    return true;
  }
}

// 验证身份证号是否合规
export function isIdCard(idCard) {
  let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  if (reg.test(idCard)) {
    return true;
  } else {
    return false;
  }
}

// 输入为非负数（浮点数）保留二位小数
export function checkNumNotPosFloat(rule, value, callback) {
  if (value) {
    var flag = /^(?:[0-9]\d*|0)(?:\.\d{1,1})?$/.exec(value);
    if (!flag) {
        return callback(new Error('请输入有效数值,最多保留二位小数'));
    } else {
        callback();
    }

  } else {
      callback();
  }
}

// 输入为正数（浮点数） 保留两位小数
export function checkNumPosFloat(rule, value, callback) {
  if (value) {
    var flag = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.exec(value);
    if (!flag) {
        return callback(new Error('请输入有效数值,最多保留二位小数'));
    } else {
        callback();
    }

  } else {
      callback();
  }
}