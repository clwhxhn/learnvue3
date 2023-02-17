// 统一封装useState和useGetters
import { useStore } from  'vuex'
import { computed } from 'vue';

export function useMapper(mapper, mapFn) {
    const storeState = {}
    const storeStateFns = mapFn(mapper) //返回的数据结构 {age: function(){}, name: function(){}}

    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({
            $store: useStore()
        }) // vue内部读取数据: this.$store.state[fnKey] -> 解决：bind绑定this
        storeState[fnKey] = computed(fn)
    })
    
    return storeState
}