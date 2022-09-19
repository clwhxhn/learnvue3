<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- 列表动画 -->
    <!-- <t-g></t-g> -->

    <!-- 列表加交错动画 -->
    <t-g2></t-g2>
  </div>
 
</template>

<script>
import HelloWorld from './components/gsap数字动画/HelloWorld.vue'
import TG from './components/transition-group列表动画/index.vue'
import TG2 from './components/列表的交错过度案例/index.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TG,
    TG2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
