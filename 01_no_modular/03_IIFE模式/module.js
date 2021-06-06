/*
 * @Author: your name
 * @Date: 2021-06-06 10:06:54
 * @LastEditTime: 2021-06-06 10:10:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \0719_modular\01_no_modular\03_IIFE模式\module.js
 */
/**
 * IIFE模式: 匿名函数自调用(闭包)
 * IIFE : immediately-invoked function expression(立即调用函数表达式)
 * 作用: 数据是私有的, 外部只能通过暴露的方法操作
 * 问题: 如果当前这个模块依赖另一个模块怎么办?
 */

((w)=>{
   //内的私有数据，不允许别热触碰
   let data = 'atguigu'

   function test() {
     console.log(data)
   }

  function test2() {
    console.log(data.toUpperCase())
  }

  let module1 = {test,test2}
   //将module1暴露出去
  w.module1 = module1

})(window)
