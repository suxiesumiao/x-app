/**
 *   作用描述: 封装通用JS
 *   作者: liyang
 *   创建时间: 2019-06-28 17:56
 *   更新时间: 2019-06-28 17:56
 **/

export default class common {

  /**
   * 显示toast
   * @param title
   */
  showToast(title) {
    uni.showToast({
      title: title,
      icon: 'none',
      duration: 3500
    })
  }

  /**
   * 根据后台返回 跳页面
   * @param key
   */
  goPathForTaskDefKey(key) {
    this.showToast("操作成功");
    if (key) {
      let menuList = uni.getStorageSync('menuList');

      for (let item in menuList) {

        // 判断返回key
        if (menuList[item].taskDefKey === key) {

          setTimeout(() => {

            uni.redirectTo({
              url: '/pages' + menuList[item].path
            });

          }, 500);

          break;
        }
      }
    } else {

      // 没有key 跳转上级页面
      setTimeout(() => {

        uni.navigateBack({
          delta: 1
        });

      }, 500);

    }

  }

  /**
   * 判断是否是手机号
   * @param tel
   * @returns {boolean}
   */
  isPhoneNumber(tel) {

    var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
    return reg.test(tel);

  }

  /**
   * 判断是否是邮箱
   * @param email
   * @returns {boolean}
   */
  isEmail(email) {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg.test(email)
  }

  dateFormat(fmt, date) {
    let ret;
    let opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
      ;
    }
    ;
    return fmt;
  }

  toTree(data) {
    var map = {} // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    data.forEach(function (item) {
      map[item.id] = item
    })
    var val = []
    data.forEach(function (item) {
      var parent = map[item.pid] // 以当前遍历项，的pid,去map对象中找到索引的id
      if (parent) {
        (parent.children || (parent.children = [])).push(item) // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
      } else {
        val.push(item) // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      }
    })
    return val
  }

  queryStringToObj(str) {
    if (typeof str !== "string") {
      return null
          ;
      let s1 = str.split("?")[1];
      if (!s1) {
        return null
      }
      let arr = s1.split("&");
      let res = {};
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let inner = item.split("=");
        res[inner[0]] = inner[1]
      }
      return res;
    }
  }
}









