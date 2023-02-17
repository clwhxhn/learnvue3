/*
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-02-03 09:11:41
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-03 10:03:31
 * @FilePath: \learnvue3\src\hooks\useState.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { mapState, useStore } from  'vuex'
import { computed } from 'vue';

export function useState(mapper) {
    const storeState = {}
    const storeStateFns = mapState(mapper) //返回的数据结构 {age: function(){}, name: function(){}}

    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({
            $store: useStore()
        }) // vue内部读取数据: this.$store.state[fnKey] -> 解决：bind绑定this
        storeState[fnKey] = computed(fn)
    })
    
    return storeState
}