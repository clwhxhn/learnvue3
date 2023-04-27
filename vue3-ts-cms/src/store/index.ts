import { createStore } from 'vuex'
import { IRootState } from './types'

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

export default store
