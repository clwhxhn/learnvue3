<template>
  <div>
    我是自组件-{{ info }}
    <button @click="add">子组件+</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const info = inject("info");

    const add = () => {
      info.value++;
    };

    return { info, add };
  },
};
</script>

<style scoped>
</style>