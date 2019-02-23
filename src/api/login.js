import {fetchPost} from './http-service'
import {fetchGet} from './http-service'

export default {
  /**
   * 发送验证码
   */
  sendSms(params) {
    return fetchPost('home/users/sendSms', params)
  },
  /**
   * 登录
   */
  UserLogin(params) {
    return fetchPost('home/users/UserLogin', params)
  },
  /**
   * 商家登录
   */
  login(params){
    return fetchPost('shop/Login/login', params)
  }
}

