/**
 * 用于生成uuid
 * @param{null}
 */

export const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
export const guid = () => {
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}

/**
 * trim 去掉字符串前后空格
 * @param {string} str
 * @return object
 */
export const trim = (obj = {}) => {
  let temp = obj
  for (let i in temp) {
    if (typeof temp[i] === 'string') {
      temp[i] = temp[i].replace(/(^\s*)|(\s*$)/g, '')
    }
  }
  return temp
}

/**
 * isEmptyObj 判断对象是否为空对象
 * @param {object} obj
 * @return boolean
 */
export const isEmptyObj = (obj = {}) => {
  return (Object.keys(obj).length === 0 && obj.constructor === Object)
}
