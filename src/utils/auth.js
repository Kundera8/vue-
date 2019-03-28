/**
 * 设置token
 */
export const setToken = (token) => {
  localStorage.setItem('LG_TK', token)
}
/**
 * 获得token
 */
export const getToken = () => {
  return localStorage.getItem('LG_TK')
}
/**
 * 移除token
 */
export const removeToken = () => {
  localStorage.removeItem('LG_TK')
}
