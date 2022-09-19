<template>
  <div>
    <input type="text" v-model="keyword" />
    <transition-group
      tag="ul"
      name="why"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <li v-for="(item, index) in myNames" :key="index" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gasp from 'gsap'
export default {
  data() {
    return {
      names: ['james', 'hmm', 'lilei', 'kobe', 'abc', 'cba', 'nba'],
      keyword: '',
    }
  },
  computed: {
    myNames() {
      return this.names.filter((item) => item.indexOf(this.keyword) !== -1)
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      gasp.to(el, {
        height: '1.5em',
        opacity: 1,
        delay: el.setdata * 0.5,
        onComplete: done,
      })
    },
    leave(el, done) {
      gasp.to(el, {
        height: 0,
        opacity: 0,
        delay: el.setdata * 0.5,
        onComplete: done,
      })
    },
  },
}
</script>

<style scoped>
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: all 1s ease;
}
</style>