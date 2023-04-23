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

export default store
