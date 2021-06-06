/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:54
 * @LastEditTime: 2021-06-06 10:12:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\04_AMD-RequireJS\js\modules\module1.js
 */
/*
* 定义一个没有依赖的module1
* */

define(function () {
  //数据-----私有数据（只读）
  let data = 'atguigu'
  //获取数据的方法
  function getDataL() {
    return data.toLowerCase()
  }
  function getDataU() {
    return data.toUpperCase()
  }
  return {getDataL,getDataU}
})

