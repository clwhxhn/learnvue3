<template>
  <div>
    <!-- 在template模板中使用ref对象，它会自动进行解包 -->
    counter: {{counter}}
    <br>  
    <button @click="increment">+</button>
    <br>
    {{info.counter.value}}
    {{info.counter}}
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      // counter变成一个ref的可响应式的引用
      let counter = ref(100)
      console.log('counter: ', counter); // ref对象

      const info = {
        counter
      }

      const increment = () => {
        // 在js代码中，ref不会自动解包
        counter.value++
        console.log('counter.value: ', counter.value);
      }

      return {
        counter,
        info,
        increment
      }
    }
  }
</script>

<style scoped>

</style>