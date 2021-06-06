/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:55
 * @LastEditTime: 2021-06-06 10:10:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\01_no_modular\02_namespace模式\module1.js
 */
/**
 * namespace模式: 简单对象封装
 * 作用: 减少了全局变量
 * 问题: 不安全(数据不是私有的, 外部可以直接修改)
 */

let module1 = {
  data:'atguigu',

  test() {
    console.log(this.data)
  }

}

