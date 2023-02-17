
const homeModule = {
    namespaced: true, // 在单个模块中通过添加namespaced：true的方式使其成为带命名空间的模块
    state() {
        return {
            homeCounter: 20 
        }
    },
    getters: {
        doubleHomeCounter(state) {
            return state.homeCounter * 2
        }
    },
    actions: {

    },
    mutations: {
        
    }
}

export default homeModule