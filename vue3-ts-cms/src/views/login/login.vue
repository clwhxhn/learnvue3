<template>
  <div class="login">
    <login-account />
  </div>
</template>

<script lang="ts">
import LoginAccount from './components/login-account.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    LoginAccount
  },
  setup() {
    return {}
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
