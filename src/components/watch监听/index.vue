<!--
 * @Author: clwhxhn clwhxhn@163.com
 * @Date: 2022-11-06 17:42:02
 * @LastEditors: clwhxhn clwhxhn@163.com
 * @LastEditTime: 2022-11-21 11:00:05
 * @FilePath: /learnvue3/src/components/watch监听/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    我是父000组件- {{ info }}
    <button @click="add">+</button>
    <hr />
    <myChild></myChild>
  </div>
</template>

<script>
import { provide, ref, reactive } from "vue";
import myChild from "./myChild";
import { getCurrentInstance } from 'vue'

export default {
  components: { myChild },
  setup() {


    const instance = getCurrentInstance()
    console.log(instance.appContext.config.globalProperties.name + '----');

    const info = ref(10);

    provide("info", info); // key , value

    const add = () => {
      //注意：真实开发中，不要在子组件中修改父组件传来数据，有这种需求时，向父组件发送一个方法，在父组件中修改（开发思想：单向数据流）
      info.value++;
    };

    return {
      info,
      add,
    };
  },
  mounted() {
    alert(this.name)
  }
};
</script>

<style scoped>
</style>