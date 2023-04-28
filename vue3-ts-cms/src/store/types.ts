
import { ILoginState } from './login/types'

//  放类型
export interface IRootState {
  name: string
  age: number
}


export interface IRootWithModule {
  login: ILoginState
}


export type IStoreType = IRootState & IRootWithModule // 交叉类型（可以把两个接口结合在一起）
