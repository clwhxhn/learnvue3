<!--
 * @Author: wangxiaohui clwhxhn@163.com
<<<<<<< Updated upstream
 * @Date: 2022-09-24 20:12:48
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2022-12-15 16:01:29
 * @FilePath: /learnvue3/src/App.vue
=======
 * @Date: 2022-09-19 16:02:33
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-01-31 15:20:37
 * @FilePath: \learnvue3\src\App.vue
>>>>>>> Stashed changes
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    000

    <!-- 
      props: （包含很多信息）
        href: 跳转的地址
        route: 路由对象
        。。。
     -->
    <router-link to="/home" v-slot="props" custom>
      {{ props }}
      <!-- 默认插槽 -->
      <button @click="props.navigate">首页 {{ props.href }}</button>
      111
      <zl></zl>
    </router-link>

    <!-- 对象增强写法 -->
    <router-link to="/home" v-slot="{ navigate, href, route }" custom>
      {{ href }}
      {{ route }}
      <!-- 默认插槽 -->
      <button @click="navigate">首页 {{ href }}</button>
      111
      <zl></zl>
    </router-link>

    <br />
    <router-link to="/user/111/name/zhangsan">user</router-link>

    <!-- 编程式导航 -->
    <button @click="toUser">跳转到user</button>
    <button @click="jumpToUser">跳转到user（setup）</button>

    <!-- 加动画 -->
    
    <router-view v-slot="props">
      <transition name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>

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
    <!-- <m-watch></m-watch> -->

    <!-- 自定义指令 -->
    <!-- <zl></zl> -->
  </div>
</template>

<script>
import HelloWorld from "./components/gsap数字动画/HelloWorld.vue";
import TG from "./components/transition-group列表动画/index.vue";
import TG2 from "./components/列表的交错过度案例/index.vue";
import ST from "./components/setup使用/index.vue";
import REF from "./components/refApi的使用/index.vue";
import ReadOnly from "./components/readonlyApi的使用/index.vue";
import ToRef from "./components/toRef和toRefs的使用/index.vue";
import Hls from "./components/HLS播放视频/index.vue";
import mWatch from "./components/watch监听/index.vue";
import zl from "./components/自定义指令/zl.vue";

import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    HelloWorld,
    TG,
    TG2,
    ST,
    REF,
    ReadOnly,
    ToRef,
    Hls,
    mWatch,
    zl,
  },
  setup() {
    const router = useRouter();

    const jumpToUser = () => {
      router.push({
        path: "/user/111/name/lisi",
        query: {
          aaa: "dxcxdd", // http://localhost:8080/#/user/111/name/lisi?aaa=dxcxdd
          //  对应的取值： this.$route.query.aaa
        },
      });
    };

    return {
      jumpToUser,
    };
  },
  methods: {
    toUser() {
      this.$router.push("/user/111/name/lisi");

      const props = {
        route: {
          fullPath: "/home",
          path: "/home",
          query: {},
          hash: "",
          params: {},
          matched: [
            {
              path: "/home",
              name: "home",
              meta: {},
              props: { default: false },
              children: [
                { path: "", redirect: "/home/message" },
                { path: "message" },
                { path: "shops" },
              ],
              instances: { default: {} },
              leaveGuards: { "Set(0)": [] },
              updateGuards: { "Set(0)": [] },
              enterCallbacks: {},
              components: {
                default: { __file: "src/views/Home.vue", __hmrId: "fae5bece" },
              },
            },
            {
              path: "/home",
              redirect: "/home/message",
              meta: {},
              props: {},
              children: [],
              instances: {},
              leaveGuards: { "Set(0)": [] },
              updateGuards: { "Set(0)": [] },
              enterCallbacks: {},
            },
          ],
          meta: {},
          href: "#/home",
        },
        href: "#/home",
        isActive: true,
        isExactActive: false,
      };
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.why-enter-from,
.why-leave-to{
  opacity: 0;
}
.why-enter-active,
.why-leave-active{
  transition: opacity 1s ease;
}
.why-enter-to,
.why-leave-from{
  opacity: 1;
}
</style>
