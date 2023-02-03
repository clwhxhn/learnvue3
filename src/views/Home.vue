<!--
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-01-29 15:42:56
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-03 10:09:27
 * @FilePath: \learnvue3\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
            HOME
            <br/>
            <!-- 嵌套路由 -->
            <router-link to="/home/message">home/message</router-link>
            <br/>
            <router-link to="/home/shops">home/shops</router-link>

            <br/>
            嵌套路由- 需要写占位标签 {{ name }} {{ age }} {{ sname }} {{ sage }}
            <router-view></router-view>
    </div>
</template>

<script>
import { useState } from '../hooks/useState.js'
export default {
    setup() {
        const storeState = useState(['name','age'])
        const storeState2 = useState({
            sname: (state) => state.name,
            sage: (state) => state.age
        })
        return {
            ...storeState,
            ...storeState2
        }
    }
}
</script>

<style lang="scss" scoped>

</style>