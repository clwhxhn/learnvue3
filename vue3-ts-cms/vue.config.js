const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  publicPath: './',
  // 方式一
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: '@/components',
      },
    },
  },

  // 方式二
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components',
  //   }
  // },

  //方式三(链式)
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('components', '@/components')
  // },

  devServer: {
    proxy: {
      '^/api': {
        target: 'http://123.207.32.32:5000',
        pathRewrite: { // 替换请求中匹配的内容
          '^/api': '' //意思是接口以api开头的才用代理。比如/api/xxx,使用代理后的路径为 http://152.136.185.210:5000/api/xx
        },
        changeOrigin: true, //是否跨域
        logLevel: 'debug',
      }
    }
  }

})
