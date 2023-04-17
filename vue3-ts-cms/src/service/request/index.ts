import axios from "axios"
import type { AxiosInstance  } from "axios"
import type { HYRequestInterceptors, HYRequestConfig } from './type'


// 类的封装性比函数强
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 拦截器（实现不同实例对应不同的拦截器）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  requestAction(config: HYRequestConfig): void {
    this.instance.request(config).then(res => {
      // return res.data
    })
  }
}

export default HYRequest
