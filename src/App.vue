<!--
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2022-09-24 20:12:48
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2022-12-15 16:01:29
 * @FilePath: /learnvue3/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- 列表动画0000 -->
    <!-- <t-g></t-g> -->

    <!-- 列表加交错动画 -->
    <!-- <t-g2></t-g2> -->
  
    <!-- reactive API 的使用 -->
    <!-- <s-t></s-t> -->

    <!-- refApi的使用 -->
    <!-- <r-e-f></r-e-f> -->

    <!-- readonlyApi的使用 -->
    <!-- <read-only></read-only> -->

    <!-- toref和toRefs的使用 -->
    <!-- <to-ref></to-ref> -->

    <!-- hls视频播放 -->
    <!-- <hls></hls> -->

    <!-- composition API 之 watch -->
    <m-watch></m-watch>
  </div>
 
</template>

<script>
import HelloWorld from './components/gsap数字动画/HelloWorld.vue'
import TG from './components/transition-group列表动画/index.vue'
import TG2 from './components/列表的交错过度案例/index.vue'
import ST from './components/setup使用/index.vue'
import REF from './components/refApi的使用/index.vue'
import ReadOnly from './components/readonlyApi的使用/index.vue'
import ToRef from './components/toRef和toRefs的使用/index.vue'
import Hls from './components/HLS播放视频/index.vue'
import mWatch from './components/watch监听/index.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    TG,
    TG2,
    ST,
    REF,
    ReadOnly,
    ToRef,
    Hls,
    mWatch
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
