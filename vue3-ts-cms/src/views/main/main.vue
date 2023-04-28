<template>
  <div class="main">
    <a-layout>
      <a-layout-sider style="height: 100vh">
        <NavMenu></NavMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content style="height: 100%">Content</a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavMenu from '@/components/nav-menu'

export default defineComponent({
  components: {
    NavMenu
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
}
</style>
