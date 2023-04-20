<template>
  <div class="login">
    <login-account ref="accountRef" />

    <button @click="login">0000</button>
  </div>
</template>

<script lang="ts">
import LoginAccount from './components/login-account.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    LoginAccount
  },
  setup() {
    const accountRef = ref<InstanceType<typeof LoginAccount>>() // ()中没有传，accountRe可能是undefined，所以调用方法时使用 ?.

    const login = () => {
      accountRef.value?.ceshiFun()
    }

    return {
      accountRef,
      login
    }
  },
})
</script>

<style scoped lang="less">
.login{
  width: 320px;
  margin: 0 auto;
  padding-top: 300px;
}
</style>
