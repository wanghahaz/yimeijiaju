let util = {};
//日期时间过滤器
util.formattingDate = function (time) {
  const year = time.getFullYear();
  const month = change(time.getMonth() + 1);
  const day = change(time.getDate());
  const hour = change(time.getHours());
  const minute = change(time.getMinutes());
  const second = change(time.getSeconds());

  function change(t) {
    if (t < 10) {
      return "0" + t;
    } else {
      return t;
    }
  }

  const times = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  // console.log(times)
  return times;
};

export default util;
