/*
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-03-15 10:28:12
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-04-24 10:54:07
 * @FilePath: \vue3-ts-cms\src\service\axios_demo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// import axios from 'axios' // 导入的其实就是axios的实例对象

// axios.request({
//   method: 'get'
// })

// // 等同于

// axios.get('xxx')

// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

// axios.post('http://httpbin.org/post').then((res) => {
//   console.log(res)
// })

// axios 的配置项



// ==============================================================

// 调用封装的方法
import hyRequest  from './index'

// hyRequest.requestAction({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//         console.log('单独请求的拦截');
//         return config
//     }
//   }
// }).then(res => {
//   console.log('🚀🚀🚀🚀🚀🚀🚀🚀');
//   console.log(res);
// })


function loge(messag){
  console.log(messag);
}

var message:string;

message = "Hi";

console.log(message);
