/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:55
 * @LastEditTime: 2021-06-06 10:10:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\01_no_modular\02_namespace模式\module2.js
 */
/**
 * namespace模式: 简单对象封装
 * 作用: 减少了全局变量
 * 问题: 不安全(数据不是私有的)
 */

let module2 = {
  data:'other data',
  test() {
    console.log(this.data)
  }
}


