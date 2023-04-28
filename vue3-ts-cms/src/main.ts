import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import 'normalize.css'
import './service/axios_demo'
import { registerApp } from './global'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupStore } from '@/store/index'

const pinia = createPinia()

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

app.use(Antd)
app.use(router)
app.use(store)
app.use(pinia)

// 初始化store中的数据
setupStore()

// app.use(ElementPlus)
app.mount('#app')

// createApp(App).use(router).mount('#app')
