import { createStore } from 'vuex'

interface IRootState {
  name: string
  age: number
}

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
