/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:54
 * @LastEditTime: 2021-06-06 10:12:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\05_CMD-SeaJS\js\modules\main.js
 */
/*
* 主js文件，用于汇总各个模块
* */

define(function (require) {
  let module1 = require('./module1')
  let module4 = require('./module4')
  module1.getData()
  module4.getData()
})