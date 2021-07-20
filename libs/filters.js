/**
 *   作用描述: 过滤器
 *   作者: liyang
 *   创建时间: 2019-08-21 10:53
 **/

/**
 * 数字格式化
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {

  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))

}

/**
 * 时间格式化数据
 *
 * 1. 传入时间字符串，可以根据format转换为对应格式
 * 2. 不传按照当前时间获取
 *
 * yyyy-MM-dd hh:mm:ss
 * yyyy年MM月dd日
 * MM/dd/yyyy
 * yyyyMMdd
 *
 * @param dateStr 非必传
 * @param format  非必传 默认（yyyy-MM-dd hh:mm:ss）
 * @returns {void | string}
 */
export function formatDate(dateStr, format = 'yyyy-MM-dd hh:mm:ss') {
  if(!dateStr) { return "暂无" }
  let date = new Date()

  if (dateStr) {

    let str = dateStr.substring(0, 19).replace(/-/g, '/')
    date = new Date(str)
  }

  var o = {
    'M+': date.getMonth() + 1,       // 月
    'd+': date.getDate(),          // 日
    'h+': date.getHours(),         // 时
    'm+': date.getMinutes(),       // 分
    's+': date.getSeconds()        // 秒
  }

  if (/(y+)/.test(format)) {

    format = format.replace(RegExp.$1, date.getFullYear() + '')

  }

  for (var k in o) {

    if (new RegExp('(' + k + ')').test(format)) {

      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))

    }

  }

  return format
}
