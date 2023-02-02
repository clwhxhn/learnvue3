<!--
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-01-29 15:42:56
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-01-31 09:09:16
 * @FilePath: \learnvue3\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
            User
            <br/>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    created() {
        console.log(this.$route.params.userId);
    },
    setup() {
        // setup中没有绑定this

        //vue-router 4版本以上，会提供一个hook -> userRoute
        // userRoute() 会返回当前独对象
        const route = useRoute()
        console.log(route.params.userId);
    }
}
</script>

<style lang="scss" scoped>

</style>