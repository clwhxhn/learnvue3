import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

//mixin全局混入
const app = createApp(App)
app.mixin({
    created() {
        console.log('全局混入: ');
    }
})

app.mount('#app')