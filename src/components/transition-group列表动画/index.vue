<template>
  <div>
    {{message}}
    <div> 
      <img src="./a.png" alt="">
    </div>

    <button @click="addNum">加</button>
    <button @click="removeNum">减</button>
    <button @click="shuffle">数字洗牌</button>

    <transition-group tag="p" name="why">
      <span v-for="item in numbers" :key="item" class="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash'
import { demoMixin } from '@/mixins/demoMixin'
export default {
  setup(props, context) {
    console.log('context: ', context);
  },
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10
    }
  },
  mixins: [demoMixin],
  methods: {
    addNum() {
      this.numbers.splice(this.randomIndex(), 0 , this.numCounter++)
    },
    removeNum(){
      this.numbers.splice(this.randomIndex(), 1)
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    },
    shuffle() {
      this.numbers = _.shuffle(this.numbers)
    }
  }
}
</script>

<style scoped>
  .item{
    margin-right: 10px;
    display: inline-block;
  }

  .why-enter-from,
  .why-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }

  .why-enter-active,
  .why-leave-active{
    transition: all 1s ease;
  }
  
  .why-leave-active{
    position: absolute;
  }

  .why-move{
    transition: transform 1s ease;
  }
</style>