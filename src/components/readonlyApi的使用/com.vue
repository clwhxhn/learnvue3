<template>
  <div>
     我是子组件

     {{ info2.name }}

     <button @click="update()">修改info2</button>
  </div>
</template>

<script>
  export default {
    props: {
      info2: null
    },
    methods:{
      update(){
        this.info2.name = '1212' //不可改
      }
    }
  }
</script>

<style scoped>

</style>