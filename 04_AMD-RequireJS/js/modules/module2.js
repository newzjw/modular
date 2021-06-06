/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:54
 * @LastEditTime: 2021-06-06 10:12:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\04_AMD-RequireJS\js\modules\module2.js
 */
/*
* 定义一个有依赖的module2,module2依赖于module1，要使用module1中的数据--data
* */

define(['module1'],function (module1) {
  let msg = '0719就业顺利！'

  //获取module1中的data和module2中的msg
  function getDataAndMsg() {
    return module1.getDataL() + msg
  }

  return getDataAndMsg
})
