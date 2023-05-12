<template>
  <div class="header">
    <span @click="handleFoldClick">缩放面板</span>
    header
  </div>
</template>

<script lang='ts'>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  emits: ['foldChange'],
  setup (props, {emit}) {

    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      handleFoldClick
    }
  }
})
</script>

<style lang = "less" scoped>
  .header {
    color: #fff;
  }
</style>
