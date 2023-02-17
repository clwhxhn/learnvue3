
import { createStore } from 'vuex'
import axios from 'axios'

import user from './modules/user' //export default，import 名字可以随便写
import home from './modules/home'

const store = createStore({
    modules: {
        user,
        home
    },
    state () {
        return {
            name: 'why',
            age: 19,
            num: 10,
            books: [
                {
                    name: "book-111",
                    price: 10,
                    count: 2
                },
                {
                    name: "book-222",
                    price: 20,
                    count: 3
                },
                {
                    name: "book-333",
                    price: 30,
                    count: 6
                }
            ],
            discount: 0.9
        }
    }, 
    getters: {
        totalPrice(state, getters) { //参数： state、getters
           const total = state.books.reduce((temp, item, index) => {
                if(!temp){ temp = 0}
                console.log(temp);
                return (Number(temp) + Number(item.price * item.count)) * getters.currentDiscount
           })
            return total
        },
        currentDiscount(state) {
            return state.discount * 0.6
        },
        totalPrice2(state, getters) {
            return function(n = 1) {
                const total = state.books.reduce((temp, item, index) => {
                    if(!temp){ temp = 0}
                    console.log(temp);
                    return (Number(temp) + Number(item.price * item.count)) * n
               })
                return total
            }
        }
    },
    mutations: {
        //参数1-state
        //参数2-传入的参数
        increment(state, payload) {
             console.log(payload);
             state.num += payload.n
        }
    },
    actions: {
        // 放函数
        incrementAction(context, payload) {
            console.log(context);
            // 在action中提交mutation
            setTimeout(() => {
                context.commit('increment',payload)
            },1000)
        },

        getMultiData() {
            return new Promise((resolve, reject) => {
                axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
})


export default store