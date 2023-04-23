import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'

import { accountLoginRequest } from '../../service/request/login/login'
import { IAccount } from '../../service/request/login/types'

// Module 必须传入泛型的默认值
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
   return {
    token: '',
    userInfo: ''
   }
  },
  actions: {
    async accountLogin({commit}, payload: IAccount) {
      console.log('执行accountLogin',  payload);
      const res = await accountLoginRequest(payload)
    }
  }
}

export default loginModule
