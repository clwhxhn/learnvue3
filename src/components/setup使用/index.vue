<template>
  <div>
    counter: {{state.counter}}
    <button @click="increment">+</button>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      // let counter = 100

      const state = reactive({
        counter: 100
      })

      // 不是响应式的
      const increment = () => {
        state.counter++
      }

      return {
        state,
        increment
      }
    }
  }
</script>

<style scoped>

</style>