import ls from '@/utils/storage'
// service统一出口
import HYRequest from "./request";
console.log(process.env)
const hyRequest = new HYRequest({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 100000,
  interceptors: {
    requestInterceptor: (config) => {
      console.log(config);
      console.log('请求成功的拦截');
      const token = ls.get('token') // 从缓存中拿token
      if(!token){
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截');
      return res
    }
  }
})

export default hyRequest
