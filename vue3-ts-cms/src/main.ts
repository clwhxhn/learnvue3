import { createApp } from 'vue'
import App from './App.vue'

import './service/axios_demo'

import { registerApp } from './global'

import router from './router'
import store from './store'

// 全局引入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 按需引入
// import { ElButton, ElForm } from 'element-plus'
// const components = [ElButton, ElForm]

const app = createApp(App)

// for (const component of components) {
//   app.component(component.name, component)
// }
registerApp(app)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

// createApp(App).use(router).mount('#app')
