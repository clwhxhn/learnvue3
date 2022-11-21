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
export default {
  components: { myChild },
  setup() {
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
};
</script>

<style scoped>
</style>