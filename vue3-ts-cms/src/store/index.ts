import { createStore } from 'vuex'
import { IRootState } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age:10
    }
  },
  mutations: {

  }
})

export default store
