/*
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2022-09-24 20:12:48
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2022-12-12 15:59:47
 * @FilePath: /learnvue3/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import myPlugin from './components/plugins/对象写法/index.js'
import chalk from 'chalk'


console.log(chalk.blue('Hello world!'));

// createApp(App).mount('#app')

//mixin全局混入
const app = createApp(App)

app.use(myPlugin)

app.mixin({
    created() {
        console.log('全局混入: ');
    }
})

app.mount('#app')