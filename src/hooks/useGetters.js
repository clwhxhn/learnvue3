
import { mapGetters, createNamespacedHelpers } from  'vuex'
import { useMapper } from './useMapper.js'

export function useGetters(moduleName, mapper) {
   // 针对module进行改进
   let mapFun =  mapGetters
   if(typeof moduleName === 'string' && moduleName.length > 0 ){
      mapFun = createNamespacedHelpers(moduleName).mapGetters
   } else {
      mapper = moduleName
   }

   return useMapper(mapper, mapFun)
}