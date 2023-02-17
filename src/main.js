/*
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2022-09-19 16:02:33
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-13 14:34:21
 * @FilePath: \learnvue3\src\main.js
>>>>>>> Stashed changes
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import registerDirectives from './directives/index.js'
import router from './router'
import store from './store'

// createApp(App).mount('#app')

//mixin全局混入
const app = createApp(App)



registerDirectives(app) // 注册所有的指令

app.mixin({
    created() {
        console.log('全局混入: ');
    }
})

//全局指令
app.directive('myfocus',{
    mounted(el, bindings, vnode, preVnode) {
        console.log('el: ', el);
        el.focus()
      }
})

app.use(router)
app.use(store)

app.mount('#app')