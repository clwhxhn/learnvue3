import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

// 定义接口
export interface HYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => any // ?? AxiosRequestConfig 为什么不能用AxiosRequestConfig类型
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
