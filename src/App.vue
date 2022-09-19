<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- 列表动画 -->
    <t-g></t-g>
  </div>
 
</template>

<script>
import HelloWorld from './components/gsap数字动画/HelloWorld.vue'
import TG from './components/transition-group列表动画/index.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TG
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
