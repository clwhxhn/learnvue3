import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

// 定义接口
interface HYRequestInterceptors {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}

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
