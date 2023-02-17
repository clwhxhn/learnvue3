/*
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-02-03 09:11:41
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-13 16:39:42
 * @FilePath: \learnvue3\src\hooks\useState.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { mapState, createNamespacedHelpers } from  'vuex'
import { useMapper } from './useMapper.js'

export function useState(moduleName, mapper) {
   // 针对module进行改进
   let mapFun =  mapState
   if(typeof moduleName === 'string' && moduleName.length > 0 ){
      mapFun = createNamespacedHelpers(moduleName).mapState
   } else {
      mapper = moduleName 
   }

   // return useMapper(mapper, mapState)
   return useMapper(mapper, mapFun)
}