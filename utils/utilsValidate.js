/*
 * @Author: Bienaii
 * @Date: 2021-06-09
 * @Description: 判断类方法
*/
// 判断是否为空对象
// Tips: []--> false; {a:1}--> false; {} --> true
export const isObject = (obj) => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
    return false
  return !Object.keys(obj).length
}

// 判断是否空字符串（纯空格也为空）
export const isEmptyString = (string) => {
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
export const isPhone = (phone) => {
  let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (!reg.test(phone)) {
    return false;
  } else {
    return true;
  }
}

// 验证身份证号是否合规
export const isIdCard = (idCard) => {
  let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  if (reg.test(idCard)) {
    return true;
  } else {
    return false;
  }
}

// 判断是否邮箱格式
export const isEmail = (email) => {
  let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!reg.test(email)) {
    return false;
  } else {
    return true;
  }
}

// 输入为非负数（浮点数）保留二位小数
export const checkNumNotPosFloat = (rule, value, callback) => {
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
export const checkNumPosFloat = (rule, value, callback) => {
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

// 判断是否为 非undefined&&非null
export const isDefined = (value) => {
  return value !== undefined && value !== null
}

// 判断是否JSON字符串
export const isJSON = (str) => {
  if (typeof str == 'string') {
    try {
      var obj = JSON.parse(str)
      if (typeof obj == 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  return false
}

// 判断由8~16位数字+字母组成
export const isPassWord = (str) => {
  return str ? /^(?=.*?[a-z)(?=.*>[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,16}$/.test(str) : false
}

// 只能输入是数字或字母
export const isCardNo = (val) => {
  return /^[\da-z]+$/i.test(val)
}

// 密码必须是6位数，且不重复、不连续
export const isCardPassword = (val) => {
  return !(val.length !== 6 || /^(\d)\1{5}$/.test(val) || '0123456789_9876543210'.indexOf(val) > -1)
}

// 第一位不能是0，必须是数字
export const isNum = (val) => {
  let reg = /^[1-9]{1}\d*$/
  if (reg.test(val) || val === '') {
    return true
  }
  return false
}

// 校验金额规则： 第一位不为0，且只能有一位 小数点，并且保留2位小数
export const checkPrice = (val) => {
  let reg = /^(?:0|[1-9]\d*)(\.\d{0,2})?$/
  if (reg.test(val) || val === '') {
    return true
  }
  return false
}
// 仅输入英文
export const checkEng = (val) => {
  let reg = /^[A-Za-z]+$/
  if (reg.test(val)) {
    return true
  }
  return false
}
// 仅支持输入数字英文字母或 ().,/?+:'-
export const checkSpecifiedCharacter = (val) => {
  let reg = /^[A-Za-z0-9\s\(\)\.\,\/\?\+\:\'\'\-]+$/
  if (reg.test(val)) {
    return true
  }
  return false
}

// 中文名校验 规则： 2-16位汉字及·，·不能在首尾
export const checkZhName = (val) => {
  let reg = /^[\u4E00-\u9FA5]{1,16}([\u25CF\u00B7][\u4E00-\u9FA5]{1,16})*$/gi
  if (reg.test(val)) {
    return true
  }
  return false
}

/**
 * 判断url是否是http或https
 * @param {string} path
 * @returns {Boolean}
 */
export const isHttp = (url) => {
  if (!url) {
    return false
  }
  return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
}

// 是否1个点号开头结尾
export const isStartOrEndWithDot = (val) => {
  return /^\.[0-9]|[0-9]\.$/.test(val)
}
