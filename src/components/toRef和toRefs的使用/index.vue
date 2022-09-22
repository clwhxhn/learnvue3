<template>
  <div>
    name: {{ name }}
    <br />
    age: {{ age }}
    <br>  
    <button @click="update1">修改值-写法一</button><button @click="update2">修改值-toRefs</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: '张三',
      age: '14',
    })

    //解构获取name和age，并修改这两个值，使用toRefs改为响应式
    let { name , age} = toRefs(info)

    // 这种写法不是响应式的
    // name = '哈哈哈'
    // age = 0

    //相应式写法一：
    const update1 = () => {
      info.name = '嘻嘻嘻'
      info.age = 22
    }
    

    //响应式写法二：使用toRefs改为响应式，在js代码中需要.value继续获取和修改
    const update2 = () => {
      name.value =  '哈哈哈'
      age.value = 0
    }


    return {
      name,
      age,
      update1,
      update2
    }
  },
}
</script>

<style scoped>
</style>