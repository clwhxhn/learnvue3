<template>
  <div>
    不是响应式的：
    {{counter.num}}
    <br> 
    <button @click="increment">修改counter</button>
    <br>
    

    子组件
    <com :info2="info2"></com>
  </div>
</template>

<script>
  import com from './com.vue'

  import { reactive, ref, readonly } from 'vue'
import Com from './com.vue'
  export default {
    components: { com, Com },
    setup() {
      // 普通对象(不是响应式的)
      let counter = {num : 1}
      const conter2 = readonly(counter)

      //改为响应式
      const info = reactive({
        name: "why"
      })
      const info2 = readonly(info)

      const increment = () => {
        // counter.num = 2
        // conter2.num = 2

        info2.name = '454545'
      }

      return {
        counter,
        increment,
        conter2,
        info2
      }
    }
  }
</script>

<style scoped>

</style>