/*
 * @Author: clwhxhn clwhxhn@163.com
 * @Date: 2022-11-21 10:17:11
 * @LastEditors: clwhxhn clwhxhn@163.com
 * @LastEditTime: 2022-11-21 10:54:27
 * @FilePath: /learnvue3/src/components/plugins/对象写法/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    install(app) {
        console.log(app); // 可以拿袋 app对象
        console.log('执行install方法');

        //使用：
        //添加全局属性
        app.config.globalProperties.name = 'wxh'
    }
}