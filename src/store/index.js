/*
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-02-01 16:02:32
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-03 10:21:39
 * @FilePath: \learnvue3\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            name: 'why',
            age: 19,
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
            ]
        }
    }
})


export default store