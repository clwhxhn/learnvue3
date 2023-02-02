<!--
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-01-31 10:13:59
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-02 16:05:49
 * @FilePath: \learnvue3\src\views\HomeMessage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h2>消息组件</h2>
        home-message
        <br/>
        {{ myAge }}

        {{ height }}
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    console.log(mapState(["age"]));

    export default {
        data() {
            return {
            }
        },
        computed: {
            height() {
                return 'xxx'
            },
            /*
                mapState(["age"]) 返回的数据：{age: funxtion(){...}}
            */ 
            // 数组写法
            // ...mapState(["age"]),

            // 对象写法，
            ...mapState({
                myAge: state => state.age 
            })
        }
    }
</script>

<style scoped>

</style>