import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age:10
    }
  },
  mutations: {

  },
  modules: {
    login
  }
})

// 对store中的数据进行初始化
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

// 自定义方法：解决vuex ts兼容问题
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
