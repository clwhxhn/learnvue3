<!--
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-01-31 10:14:38
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-02 16:35:43
 * @FilePath: \learnvue3\src\views\HomeShops.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h2>商品组件</h2>
        home-shops
        <br/>

        {{ age }}
    </div>
</template>

<script>
    import { mapState, useStore } from  'vuex'
    import { computed } from 'vue';

    console.log(mapState(['age']));

    export default {
        setup() {
            /*
                问题1：setup中怎么拿到store （setup中没有this-vue实例）
                解决：借助hook：useStore
            */ 

            // 方式1：
            const store = useStore()
            const age = computed(() => store.state.age )
            const name = computed(() => store.state.name )

            // 方式2：
            const storeState = {}
            const storeStateFns = mapState(['age', 'name']) //返回的数据结构 {age: function(){}, age: function(){}}
            Object.keys(storeStateFns).forEach(fnKey => {
                const fn = storeStateFns[fnKey].bind({
                    $store: useStore()
                }) // vue内部读取数据: this.$store.state[fnKey] -> 解决：bind绑定this
                storeState[fnKey] = computed(fn)
            })

            return {
                // age
                ...storeState
            } 
        }
    }
</script>

<style scoped>

</style>