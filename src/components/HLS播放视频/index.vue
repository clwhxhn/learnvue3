<template>
  <div>
    <video ref="video" controls></video>
  </div>
</template>

<script>
import Hls from 'hls.js'
export default {
  data() {
    return {
      url: 'https://cmgw-vpc.lechange.com:8890/LCO/3B0315BPBQ736LJ/3/0/20220622T060304/35af389ab1ccc78c9f37af213f767329.m3u8?proto=https',
    }
  },
  mounted() {
    this.initVideo()
  },
  methods: {
    initVideo() {
      if (Hls.isSupported()) {
        this.hls = new Hls()
        this.hls.loadSource(this.url)
        this.hls.attachMedia(this.$refs.video)
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('加载成功')
          this.$refs.video.play()
        })
        this.hls.on(Hls.Events.ERROR, (event, data) => {
          console.log(event)
          console.log(data)
          console.log('加载失败')
        })
      } else if (
        this.$refs.video.canPlayType('application/vnd.apple.mpegurl')
      ) {
        this.$refs.video.src = this.url
        this.$refs.video.addEventListener('loadedmetadata', () => {
          this.$refs.video.play()
        })
      }
    },
  },
}
</script>

<style scoped>
</style>