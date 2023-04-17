/*
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-03-10 17:44:58
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-04-17 11:35:50
 * @FilePath: \vue3-ts-cms\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
