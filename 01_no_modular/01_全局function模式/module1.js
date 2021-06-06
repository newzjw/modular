/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:55
 * @LastEditTime: 2021-06-06 10:10:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\01_no_modular\01_全局function模式\module1.js
 */
/**
 * 全局函数模式: 将不同的功能封装成不同的全局函数
 * 问题: 全局被污染了, 很容易引起命名冲突
 */

let data = 'atguigu'

function demo() {
  console.log(data)
}
