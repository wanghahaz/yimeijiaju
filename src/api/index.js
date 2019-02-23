import {
  fetchPost
} from './http-service'
import {
  fetchGet
} from './http-service'


export default {
  /**
   * 首页精选设计师
   */
  indexDesigner(params) {
    return fetchPost('home/Index/indexDesigner', params)
  },
  /**
   * 首页精选装修公司
   */
  indexQualityShop(params) {
    return fetchPost('home/Index/indexQualityShop', params)
  },
  /**
   * 设计师详情
   */
  designerDetail(params) {
    return fetchPost('home/Designer/designer_detail', params)
  },
  /**
   * 设计师详情 案列列表
   */
  designerSubject(params) {
    return fetchPost('home/Designer/designer_subject', params)
  },
  /**
   * 案例详情
   */
  GetCaseInfo(params) {
    return fetchPost('home/Cases/GetCaseInfo', params)
  },
  /**
   * 首页精选活动
   */
  GetAllActives() {
    return fetchPost('home/Index/GetAllActives')
  },
  /**
   * 在线问答列表
   */
  GetQueList(params) {
    return fetchPost('home/Question/GetQueList', params)
  },
  /**
   * 问题多图上传
   */
  UploadAllImg(params) {
    return fetchPost('home/Question/UploadAllImg', params)
  },
  /**
   * 首页装修课堂
   */
  ClassroomAd() {
    return fetchPost('home/Index/ClassroomAd')
  },
  /**
   * 我要提问
   */
  addQues(params) {
    return fetchPost('home/Question/addQues', params)
  },
  /**
   * 首页10秒估算装修报价   报名
   */
  AllEnroll(params) {
    return fetchPost('home/Users/AllEnroll', params)
  },
  /**
   * 报名简单
   */
  Enroll(params) {
    return fetchPost('home/Index/Enroll', params)
  },
  /**
   * 获取房屋类型
   */
  roomAll() {
    return fetchPost('home/Shop/room_all')
  },
  /**
   * 获取装修类型
   */
  decorateType() {
    return fetchPost('home/Shop/decorate_type')
  },
  /**
   * 装修案例更多列表页
   */
  GetCaseList(params) {
    return fetchPost('home/Cases/GetCaseList', params)
  },
  /**
   * 装修案例更多列表页装修类型
   */
  GetCaseType() {
    return fetchPost('home/Cases/GetCaseType')
  },
  /**
   * 获取用户信息
   */
  GetUserInfo(params) {
    return fetchPost('home/Users/GetUserInfo', params)
  },
  /**
   * 问题详情
   */
  GetQueInfo(params) {
    return fetchPost('home/Question/GetQueInfo', params)
  },
  /**
   * 用户回复问题
   */
  reply(params) {
    return fetchPost('home/Question/reply', params)
  },
  /**
   * 精选设计师更多列表页
   */
  designerList(params) {
    return fetchPost('home/Designer/designer_list', params)
  },
  /**
   * 公司列表
   */
  shopList(params) {
    return fetchPost('home/Shop/shop_list', params)
  },
  /**
   * 装修公司pk
   */
  shopContrast(params) {
    return fetchPost('home/Shop/shop_Contrast', params)
  },
  /**
   * 案例详情的设计师的相关案例
   */
  subDesignerSubject(params) {
    return fetchPost('home/Designer/sub_DesignerSubject', params)
  },
  /**
   * 问题详情页   获取回复列表
   */
  GetReply(params) {
    return fetchPost('home/Question/GetReply', params)
  },
  /**
   * 获取用户签到信息
   */
  getSign(params) {
    return fetchPost('home/Sign/getSign', params)
  },
  /**
   * 签到
   */
  UserSign(params) {
    return fetchPost('home/Sign/UserSign', params)
  },
  /**
   * 装修公司详情
   */
  shopDetail(params) {
    return fetchPost('home/Shop/shop_detail', params)
  },
  /**
   * 装修公司详情  里的案例
   */
  shopSubject(params) {
    return fetchPost('home/Shop/shop_subject', params)
  },
  /**
   * 装修公司详情  里的设计师
   */
  shopDesigner(params) {
    return fetchPost('home/Shop/shop_designer', params)
  },
  /**
   * 商家精选活动
   */
  ShopActives(params) {
    return fetchPost('home/Shop/ShopActives', params)
  },
  /**
   * 案例详情图文混排
   */
  designIdea(params) {
    return fetchPost('home/Subject/design_idea', params)
  },
  /**
   * 我的关注
   */
  myAttention(params) {
    return fetchPost('home/Users/GetFollows', params)
  },
  /**
   * 我的提问
   */
  MyQue(params) {
    return fetchPost('home/Users/MyQue', params)
  },
  /**
   * 我的回复
   */
  MyReply(params) {
    return fetchPost('home/Users/MyReply', params)
  },
  /**
   * 修改用户信息
   */
  setUserInfo(params) {
    return fetchPost('home/Users/SetUserInfo', params)
  },
  /**
   * 积分明细
   */
  getIntegralDetails(params) {
    return fetchPost('home/Users/IntegralDetails', params)
  },
  /**
   * 发送短信
   */
  getCode(params) {
    return fetchPost('home/Users/sendSms', params)
  },
  /**
   * 修改密码
   */
  setPassword(params) {
    return fetchPost('home/Users/setPassword', params)
  },
  /**
   * 我的订单
   */
  OrderInfo(params) {
    return fetchPost('home/Users/OrderInfo', params)
  },
  /**
   * 上传头像
   */
  UploadImg(params) {
    return fetchPost('home/Users/UploadImg', params)
  },
  /**
   * 采纳
   */
  SetOptimum(params) {
    return fetchPost('home/Question/SetOptimum', params)
  },
  /**
   * 获取问题分类
   */
  getQueType(params) {
    return fetchPost('home/Question/getQueType', params)
  },
  /**
   * 相关问题
   */
  RelatedQue(params) {
    return fetchPost('home/Question/RelatedQue', params)
  },
  /**
   * 精选活动列表
   */
  GetActives() {
    return fetchPost('home/ChoiceActive/GetAllActives')
  },
  /**
   * 设计师列表页广告
   */
  DesignerAd() {
    return fetchPost('home/Designer/DesignerAd')
  },
  /**
   * 装修课堂列表
   */
  OfflineShopActives(){
    return fetchPost('home/Offline/ShopActives')
  }


}
