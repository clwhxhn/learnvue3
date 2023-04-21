import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'

// Module 必须传入泛型的默认值
const loginModule: Module<ILoginState, IRootState> = {
  state: {

  }
}

export default loginModule
