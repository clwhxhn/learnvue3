<template>
  <div>
    <!-- nfc读卡 -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.initNFC()
  },
  methods: {
    // nfc-插件调用方法
    initNFC() {
      //页面初始化之后
      if (typeof nfc == 'undefined') {
        this.$toast('您的机器没有NFC功能,或者NFC功能没有打开')
      } else {
        //旧系统使用监听
        nfc.addTagDiscoveredListener(
          this.nfccallback,
          this.nfconSuccesscallback,
          this.nfcerrorcallback
        )
        //新系统使用监听
        nfc.addNdefFormatableListener(
          this.nfccallback,
          this.nfconSuccesscallback,
          this.nfcerrorcallback
        )
      }
    },

    nfconSuccesscallback() {
      // success callback
      this.$toast('NFC已经打开')
    },

    nfcerrorcallback(error) {
      // error callback
      this.$toast('NFC功能错误！' + error)
    },

    nfccallback(nfcEvent) {
      var tag = nfcEvent.tag,
        o_rfid = nfc.bytesToHexString(tag.id),
        rfid = o_rfid.toUpperCase()
      this.checkform(rfid)
    },

    dataConvent(hex) {
      var len = hex.length,
        a = new Array(len),
        code
      for (var i = 0; i < len; i++) {
        code = hex.charCodeAt(i)
        if (48 <= code && code < 58) {
          code -= 48
        } else {
          code = (code & 0xdf) - 65 + 10
        }
        a[i] = code
      }
      return a.reduce(function (acc, c) {
        acc = 16 * acc + c
        return acc
      }, 0)
    },

    checkform(ID) {
      //读卡和校验
      const nfcID = this.dataConvent(ID)
      this.nfcId = nfcID
      // alert(`NFC读数是${ID},转为十进制是${nfcID}`)
    },
  },
}
</script>

<style scoped>
</style>