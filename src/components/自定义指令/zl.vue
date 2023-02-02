<!--
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2022-11-17 16:32:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-11-18 10:37:02
 * @FilePath: \learnvue3\src\components\自定义指令\zl.vue
-->
<template>
  <div>
    <!-- <input type="text" ref="input"> -->

    <pre></pre>

    自定义指令：
    <!-- <input type="text" v-focus.aa.bb="'哈哈哈'"> -->

    <pre></pre>
    全局指令
    <!-- <input type="text" v-myfocus> -->

   <h1 v-format-time="'YYYY--MM--DD'">1668738824906</h1>

  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  export default {
    setup() {
      let input = ref(null)

      onMounted(() => {
        // input.value.focus()
      })
      
      return {
        input
      }
    },

    // 局部指令
    directives: {
      focus: {
        mounted(el, bindings, vnode, preVnode) {
          console.log('bindings: ', bindings); 
          console.log('el: ', el);
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>