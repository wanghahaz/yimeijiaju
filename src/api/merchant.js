import {
  fetchPost
} from './http-service'
import {
  fetchGet
} from './http-service'

export default {
  /**
   * 设计师列表
   */
  getList(params) {
    return fetchGet('shop/Designer/getList', params)
  },
  /**
   * 消息列表
   */
  messageGetList(params) {
    return fetchGet('shop/Message/getList', params)
  },
  /**
   * 消息详情
   */
  messageGetDetail(params) {
    return fetchGet('shop/Message/getDetail', params)
  },
  /**
   * 订单列表
   */
  orderGetList(params) {
    return fetchGet('shop/Order/getList', params)
  },
  /**
   * 合同上传
   */
  OrderContractImg(params) {
    return fetchPost('shop/OrderContract/upload', params)
  },
  /**
   * 合同添加
   */
  OrderContract(params) {
    return fetchPost('shop/OrderContract/add', params)
  },
  /**
   * 订单详情
   */
  getDetail(params) {
    return fetchGet('shop/Order/getDetail', params)
  },
  /**
   * 用户基本信息
   */
  getUserDetail(params) {
    return fetchGet('shop/Order/getUserDetail', params)
  },
  /**
   * 补充信息详情
   */
  getSupplementDetail(params) {
    return fetchGet('shop/Order/getSupplementDetail', params)
  },
  /**
   * 客情角色列表
   */
  getRoleList() {
    return fetchGet('shop/OrderFollow/getRoleList')
  },
  /**
   * 客情列表
   */
  OrderFollowList(params) {
    return fetchGet('shop/OrderFollow/getList', params)
  },
  /**
   * 添加客情记录
   */
  addFollow(params) {
    return fetchPost('shop/OrderFollow/add', params)
  },
  /**
   * 合同图片列表
   */
  OrderContractgetList(params) {
    return fetchGet('shop/OrderContract/getList', params)
  }
}

