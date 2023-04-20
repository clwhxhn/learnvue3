<template>
  <div>
    <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="isKeepPassword">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'

interface FormState {
  username: string;
  password: string;
}

export default defineComponent({

  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
    })

    const isKeepPassword = ref(false)

    const onFinish = (values: any) => {
      console.log(values);
      console.log(isKeepPassword.value);
    }

    const ceshiFun = () => {
      alert('ceshiFun')
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log(errorInfo);
    }

    return {
      formState,
      onFinish,
      onFinishFailed,
      isKeepPassword,
      ceshiFun
    }
  },
})
</script>

<style lang = "less" scoped>
</style>
