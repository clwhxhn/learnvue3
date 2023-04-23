
import { IAccount } from './types'
import hyRequest from '../../index'

enum LoginApi {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: LoginApi.AccountLogin,
    data: account
  })
}
