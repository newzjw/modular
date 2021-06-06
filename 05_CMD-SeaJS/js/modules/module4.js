/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:54
 * @LastEditTime: 2021-06-06 10:13:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\05_CMD-SeaJS\js\modules\module4.js
 */
/*
* 定义一个有依赖的模块，module4,依赖于module2和module3
* */

define(function (require,exports,module) {
  let data = '--------module4---------'

  //引入module2-----同步引入
  let module2 = require('./module2')
  module2.getData()

  //引入module3-----异步引入
  require.async('./module3',function (m3) {
    m3.getData()
  })

  function getData() {
    console.log(data)
  }

  module.exports = {getData}
})

