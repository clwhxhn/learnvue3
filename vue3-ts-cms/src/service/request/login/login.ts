
import { IAccount, IDataType } from './types'
import hyRequest from '../../index'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // get请求
  UserMenus = '/role/' // 用法： /role/id:1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoByUserId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id
  })
}


export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
