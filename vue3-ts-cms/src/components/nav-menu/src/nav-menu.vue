<template>
  <div class="nav-menu">
    <div class="logo" @click="toggleCollapsed">clear</div>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div>
          <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            theme="dark"
          >
            <template v-for="item in userMenus" :key="item.id">
              <template v-if="item.type === 1"> </template>
              <template v-if="item.type === 2">
                <a-menu-item :key="item.id">
                  <span>{{ item.name }}</span>
                </a-menu-item>
              </template>
            </template>

            <a-menu-item key="2">
              <template #icon>
                <DesktopOutlined />
              </template>
              <span>Option 2</span>
            </a-menu-item>

            <a-menu-item key="3">
              <template #icon>
                <InboxOutlined />
              </template>
              <span>Option 3</span>
            </a-menu-item>

            <a-sub-menu key="sub1">
              <template #icon>
                <MailOutlined />
              </template>
              <template #title>Navigation One</template>
              <a-menu-item key="5">Option 5</a-menu-item>
              <a-menu-item key="6">Option 6</a-menu-item>
              <a-menu-item key="7">Option 7</a-menu-item>
              <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub2">
              <template #icon>
                <AppstoreOutlined />
              </template>
              <template #title>Navigation Two</template>
              <a-menu-item key="9">Option 9</a-menu-item>
              <a-menu-item key="10">Option 10</a-menu-item>
              <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, watch, computed } from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue'

// import { useStore } from 'vuex';
import { useStore } from '@/store/index' // 使用二次封装的useStore

import ls from '@/utils/storage'

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus) // 计算属性
    console.log('userMenus11: ', userMenus.value)

    const clear = () => {
      alert('clear')
      ls.clear()
    }

    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    })

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal
      }
    )

    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed
      state.openKeys = state.collapsed ? [] : state.preOpenKeys
    }
    return {
      ...toRefs(state),
      toggleCollapsed,
      userMenus,
      clear,
    }
  },
})
</script>

<style lang = "less" scoped>
.logo {
  height: 60px;
}
</style>
