<!--
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-01-29 15:42:56
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-13 09:35:37
 * @FilePath: \learnvue3\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
            User
            <br/>
            {{ $store.getters.totalPrice }}
            <br/>
            {{ $store.getters.totalPrice2(0.8) }}

            <hr/>
            <!-- module取值-state：先找state 再找module名 再取变量 -->
            homeModule: {{ $store.state.home.homeCounter }}

            <hr/>
           mapGetters: {{ totalPrice }} {{ totalPrice2() }}
           <br/>
           mapGetters: {{ mtotalPrice }} {{ mtotalPrice2() }} 


           <br/>
            <!-- module取值-getter -->
            doubleHomeCounter: {{ $store.getters.doubleHomeCounter }}

            <br/>

            <!-- 添加命名空间后，取值方式： -->
            添加命名空间后，取值方式 - doubleHomeCounter: {{ $store.getters["home/doubleHomeCounter"] }}

           <hr/>
           sstotalPrice: {{  totalPrice }}

           <hr/>
           mutation：{{ num }} <button @click="mutationClick">mutation click</button>
           <br/>
           辅助函数 mapMutations：{{ num }} <button @click="increment({n: 10})">mapMutations click</button>

           <hr/>
           <button @click="incrementA({n: 10})">action click</button>

           <br/>
            辅助函数mapActions的使用：<button @click="incrementBB({n: 100})">辅助函数mapActions的使用：</button>

            <br/>
            <button @click="getList ">actions 返回 promise</button>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore, mapGetters, mapState, mapMutations, mapActions } from 'vuex'
import { computed, onMounted } from 'vue' 

import { useMapper } from '../hooks/useMapper.js'

export default {
    created() {
        console.log(this.$route.params.userId);
    },
    computed: {
        ...mapState(['num']),
        // 数组写法
        ...mapGetters(['totalPrice', 'totalPrice2']),
        // 对象写法
        ...mapGetters({
            mtotalPrice: 'totalPrice',
            mtotalPrice2: 'totalPrice2'
        })
    },
    setup() {
        // setup中没有绑定this

        //vue-router 4版本以上，会提供一个hook -> userRoute
        // userRoute() 会返回当前独对象
        const route = useRoute()
        console.log(route.params.userId);


        // 在setup中使用mapGetters

        const stateGetters = useMapper({
            sstotalPrice: 'totalPrice'
        }, mapGetters )

        const storeMutations = mapMutations(['increment']) //返回的数据格式： {increment: funxtion(){} , xxx: funxtion() {}}

        // 在setup中使用mapActions
        const store = useStore()
        // onMounted(() => {
        //     console.log('-----');
        //     const promise = store.dispatch('incrementAction')
        //     promise.then(() => {
        //         console.log('=============');
        //     }).catch(err => {
        //         console.log(err);
        //     })
        // }) 

        return {
            ...stateGetters,
            ...storeMutations,
        }
        
    },
    methods: {
        mutationClick() {
            //通过mutation修改store
            this.$store.commit('increment', {
                n: 100
            })
            
            //另一种提交风格
            this.$store.commit({
                type: "increment",
                n: 100
            })
        },

        //辅助函数 mapMutations
        // ...mapMutations(['increment'])

        incrementA(payload) {
            //使用dispatch分发action
            this.$store.dispatch('incrementAction',payload)

            //另一种写法
            this.$store.dispatch({
                type: 'incrementAction',
                //...
                ...payload
            })
        },


        //辅助函数mapActions的使用
        // ...mapActions(['incrementAction']), // 数组用法
        ...mapActions({ // 对象用法
            incrementBB: 'incrementAction',
        }),

        getList() {
           const promise = this.$store.dispatch('getMultiData')
            promise.then(() => {
                console.log('=============');
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>