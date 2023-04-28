import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import router from '@/router/index'

import { accountLoginRequest, requestUserInfoByUserId, requestUserMenusByRoleId } from '../../service/request/login/login'
import { IAccount } from '../../service/request/login/types'
import ls from '@/utils/storage'

// Module 必须传入泛型的默认值
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
   return {
    token: '',
    userInfo: '',
    userMenus: null
   }
  },
  mutations: {
    changeToken(state, token: string) {
      console.log(token);
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLogin({commit}, payload: IAccount) {
      //  登录
      // const res = await accountLoginRequest(payload)
      // const { id, token } = res.data
      // ls.set('token', token) // 本地存储token

      // 获取用户信息
      // const userInfoResult = await requestUserInfoByUserId(1)
      // const userInfo = userInfoResult.data
      // commit('changeUserInfo', userInfo)
      // ls.set('userInfo', userInfo)

      // 请求用户菜单
      // const userMenuResult = await requestUserMenusByRoleId(userInfo.role.id)
      // const userMenus = userMenuResult.data
      // commit('changeUserMenus', userMenus)
      // ls.set('userMenus', userMenus)

      // 跳转到首页
      ls.set('token', 'chdsjkcdndskjncdkjsnkj') // TODO 注释掉，正常请求接口

      const userMenus = [
        {
          id: 1,
          name: '系统管理',
          sort: 2,
          url: '/main/system',
          type: 2
        }
      ]
      commit('changeUserMenus', userMenus)
      ls.set('userMenus', userMenus)

      router.push('/main') // 跳转到首页
    },

    loadLocalLogin({commit}) {
      const token = ls.get('token')
      console.log('token: ', token);
      if(token){
        commit('changeToken', token)
      }

      const userInfo = ls.get('userInfo')
      console.log('userInfo: ', userInfo);
      if(userInfo){
        commit('changeUserInfo', userInfo)
      }

      const userMenus = ls.get('userMenus')
      console.log('userMenus: ', userMenus);
      if(userMenus){
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
