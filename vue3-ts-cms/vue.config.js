const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  // 方式一
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components',
  //     },
  //   },
  // },

  // 方式二
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components',
    }
  },

  //方式三(链式)
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('components', '@/components')
  // },
})
