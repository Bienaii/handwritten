/*
 * @Author: Bienaii
 * @Date: 2021-06-09
 * @Description：获取类方法
*/
// 获取 URL 参数
// Tips: s1 = Visit W3School!;escape(s1) --> Visit%20W3School%21;unescape(s2) --> Visit W3School!
export function getUrlParam(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let res = window.location.search.substr(1).match(reg);
  if (res != null) {
    // 对编码的字符串进行解码
    return unescape(res[2]);
  }
  return null;
},

// 获取文件后缀
// Tips: test.pdf --> pdf   test.PDF --> pdf
export function getFileType(fileName) {
  let index1 = fileName.lastIndexOf(".");
  let index2 = fileName.length;
  let suffix = fileName.substring(index1 + 1, index2).toLowerCase();
  return suffix;
},

// 获取距离现在的已过时间
// Tips: startTime -- 1623233876000  时间戳
export function getPassTime(startTime) {
  let currentTime = Date.parse(new Date()),
      time = currentTime - startTime,
      day = parseInt(time / (1000 * 60 * 60 *24)),
      hour = parseInt(time/ (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
      if(year) return year + "年前";
      if (month) return month + "个月前"
      if (day) return day + "天前"
      if (hour) return hour + "小时前"
      if (min) return min + "分钟前"
      else return '刚刚'
}

// 获取距离将来的剩余时间
// Tips: endTime -- 1623233876000  时间戳
export function getRemainTime(endTime) {
  let startDate = new Date();
  let endDate = new Date(endTime);
  let t = endDate.getTime() - startDate.getTime();
  let d = 0,
      h = 0,
      m = 0,
      s = 0;
  if(t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return "剩余 " + d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

