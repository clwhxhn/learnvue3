<template>
  <div class="hello">
    <input type="number" step="100" v-model="couter">
    <div>
      计数器： {{ myCounter }}
    </div>
    <div>
      计数器： {{ showCounter }}
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'HelloWorld',
  data() {
    return {
      couter: 0,
      myCounter: 0
    }
  },
  computed: {
    showCounter() {
      return this.myCounter.toFixed(0)
    }
  },
  watch: {
    couter(newVal) {
      gsap.to(this, {
        duration: 1,
        myCounter: newVal
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
