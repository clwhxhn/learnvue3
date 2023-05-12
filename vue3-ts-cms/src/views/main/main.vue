<template>
  <div class="main">
    <a-layout>
      <a-layout-sider style="height: 100vh">
        <NavMenu :isFold="isFold"></NavMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <Navheader @foldChange="handleFoldChange"></Navheader>
        </a-layout-header>
        <a-layout-content style="height: 100%">Content</a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavMenu from '@/components/nav-menu'
import Navheader from '@/components/nav-header'

export default defineComponent({
  components: {
    NavMenu,
    Navheader,
  },
  setup() {
    const isFold = ref(false)
    const handleFoldChange = (_isFold: boolean) => {
      console.log('_isFold: ', _isFold)
      isFold.value = _isFold
    }
    return {
      isFold,
      handleFoldChange,
    }
  },
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
}
</style>
