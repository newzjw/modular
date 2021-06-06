/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:54
 * @LastEditTime: 2021-06-06 10:13:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\05_CMD-SeaJS\js\modules\module2.js
 */
/*
* 定义一个没有依赖的模块，module2
* */

define(function (require,exports,module) {
  let data = '--------module2---------'

  function getData() {
    console.log(data)
  }

  module.exports = {getData}

})