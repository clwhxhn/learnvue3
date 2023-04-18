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
    this.instance.interceptors.request.use( // 先添加的
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use((config) => { // 后添加的先执行
      console.log('所有实例，请求成功的拦截');
      return config
    },(error) => {
      return error
    })
    this.instance.interceptors.response.use((res) => {
      return res
    },(error) => {
      return error
    })
  }

  requestAction<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if(config.interceptors?.requestInterceptor){
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request(config).then(res => {
        // return res.data
        resolve(res.data)
      })
    })
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.requestAction<T>({...config, method: 'GET'})
  }

  post<T>(config: HYRequestConfig): Promise<T> {
    return this.requestAction<T>({...config, method: 'POST'})
  }

  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.requestAction<T>({...config, method: 'DELETE'})
  }

  patch<T>(config: HYRequestConfig): Promise<T> { // 修改
    return this.requestAction<T>({...config, method: 'PATCH'})
  }
}

export default HYRequest
