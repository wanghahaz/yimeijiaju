import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: resolve => require(['@/components/index/index'], resolve)
  }, {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/login/login'], resolve)
  }, {
    path: '/merchantLogin',
    name: 'merchantLogin',
    component: resolve => require(['@/components/login/merchantLogin'], resolve)//商家登录
  }, {
    path: '/yonghuxieyi',
    name: 'yonghuxieyi',
    component: resolve => require(['@/components/login/agreement'], resolve)
  }, {
    path: '/weChatLogin',
    name: 'weChatLogin',
    component: resolve => require(['@/components/login/weChatLogin'], resolve)
  }, {
    path: '/accountBinding',
    name: 'accountBinding',
    component: resolve => require(['@/components/login/accountBinding'], resolve)
  }, {
    path: '/setPassword',
    name: 'setPassword',
    component: resolve => require(['@/components/login/setPassword'], resolve)
  }, {
    path: '/comparison',
    name: 'comparison',
    component: resolve => require(['@/components/index/comparison'], resolve)//对比结果
  }, {
    path: '/cityBar',
    name: 'cityBar',
    component: resolve => require(['@/components/index/cityBar'], resolve)
  }, {
    path: '/change',
    name: 'change',
    component: resolve => require(['@/components/index/change'], resolve)
  }, {
    path: '/falls',
    name: 'falls',
    component: resolve => require(['@/components/index/falls'], resolve)
  }, {
    path: '/shejishiliebiaoye',
    name: 'shejishiliebiaoye',
    component: resolve => require(['@/components/choicenessstylist/choicenessstylist'], resolve) //精选设计师
  }, {
    path: '/companyStylist',
    name: 'companyStylist',
    component: resolve => require(['@/components/choicenessstylist/companyStylist'], resolve) //公司旗下设计师列表
  }, {
    path: '/seekSjs',
    name: 'seekSjs',
    component: resolve => require(['@/components/choicenessstylist/seekSjs'], resolve) //精选设计师搜素
  }, {
    path: '/shejishixiangqingye',
    name: 'shejishixiangqingye',
    component: resolve => require(['@/components/choicenessstylist/stylistdetails'], resolve) //精选设计师详情
  }, {
    path: '/jingxuananliliebiaoye',
    name: 'jingxuananliliebiaoye',
    component: resolve => require(['@/components/choicenesscase/choicenesscase'], resolve) //精选案例
  }, {
    path: '/seekAl',
    name: 'seekAl',
    component: resolve => require(['@/components/choicenesscase/seekAl'], resolve) //精选案例搜素
  }, {
    path: '/zaixianwendadajiadouzaikan',
    name: 'zaixianwendadajiadouzaikan',
    component: resolve => require(['@/components/onlineask/onlineask'], resolve) //在线问答大家都在看
  }, {
    path: '/zaixianwendawoyaohuida',
    name: 'zaixianwendawoyaohuida',
    component: resolve => require(['@/components/onlineask/answer'], resolve) //在线问答我要回答
  }, {
    path: '/zaixianwendawoyaotiwen',
    name: 'zaixianwendawoyaotiwen',
    component: resolve => require(['@/components/onlineask/question'], resolve)//在线问答我要提问
  }, {
    path: '/seek',
    name: 'seek',
    component: resolve => require(['@/components/onlineask/seek'], resolve) //在线问答
  }, {
    path: '/choiceclassify',
    name: 'choiceclassify',
    component: resolve => require(['@/components/onlineask/choiceclassify'], resolve) //选择分类
  }, {
    path: '/classify',
    name: 'classify',
    component: resolve => require(['@/components/onlineask/classify'], resolve) //选择二级分类
  }, {
    path: '/zhuangxiuketang',
    name: 'zhuangxiuketang',
    component: resolve => require(['@/components/decoratelesson/decoratelesson'], resolve) //装修课堂
  }, {
    path: '/anlixiangqing',
    name: 'anlixiangqing',
    component: resolve => require(['@/components/caseDetails/caseDetails'], resolve) //案例详情
  }, {
    path: '/woyaohuidaxiangqingye',
    name: 'woyaohuidaxiangqingye',
    component: resolve => require(['@/components/onlineask/issueDetails'], resolve) //我要回答详情页
  }, {
    path: '/zhuangxiugongsixiangqing',
    name: 'zhuangxiugongsixiangqing',
    component: resolve => require(['@/components/meijuSelection/meijuSelection'], resolve) //装修公司详情
  }, {
    path: '/zhuangxiugongsiliebiaoye',
    name: 'zhuangxiugongsiliebiaoye',
    component: resolve => require(['@/components/meijuSelection/score'], resolve), // 装修公司列表页
  }, {
    path: '/gerenzhongxin',
    name: 'gerenzhongxin',
    component: resolve => require(['@/components/me/me'], resolve), //个人中心
    meta: {
      type: "login"
    }
  }, {
    path: '/gerenzhongxinguanzhu',
    name: 'gerenzhongxinguanzhu',
    component: resolve => require(['@/components/me/attention'], resolve), //个人中心关注
    meta: {
      type: "login"
    }
  }, {
    path: '/dingdanguanli',
    name: 'dingdanguanli',
    component: resolve => require(['@/components/me/order'], resolve), // 订单管理
    meta: {
      type: "login"
    }
  }, {
    path: '/zhuangxiudingdan',
    name: 'zhuangxiudingdan',
    component: resolve => require(['@/components/me/list/orderlist'], resolve), // 装修订单
    meta: {
      type: "login"
    }
  }, {
    path: '/dingdanxiangqing',
    name: 'dingdanxiangqing',
    component: resolve => require(['@/components/me/orderDetails'], resolve), // 订单详情
    meta: {
      type: "login"
    }
  }, {
    path: '/hetongshangchuan',
    name: 'hetongshangchuan',
    component: resolve => require(['@/components/me/uploadOrder'], resolve), // 合同上传
    meta: {
      type: "login"
    }
  }, {
    path: '/chakanhetong',
    name: 'chakanhetong',
    component: resolve => require(['@/components/me/contract'], resolve), // 查看合同
    meta: {
      type: "login"
    }
  }, {
    path: '/wodeshoucang',
    name: 'wodeshoucang',
    component: resolve => require(['@/components/me/collect'], resolve), // 我的收藏
    meta: {
      type: "login"
    }
  }, {
    path: '/wodedianzan',
    name: 'wodedianzan',
    component: resolve => require(['@/components/me/myLike'], resolve), // 我的点赞
    meta: {
      type: "login"
    }
  }, {
    path: '/jifenmingxi',
    name: 'jifenmingxi',
    component: resolve => require(['@/components/me/integralDetail'], resolve), // 积分明细
  }, {
    path: '/wodezhanghu',
    name: 'wodezhanghu',
    component: resolve => require(['@/components/me/meAccount'], resolve), // 我的账户
    meta: {
      type: "login"
    }
  }, {
    path: '/zhanghuyuanquan',
    name: 'zhanghuyuanquan',
    component: resolve => require(['@/components/me/accountSecurity'], resolve), // 账户与安全
    meta: {
      type: "login"
    }
  }, {
    path: '/mimashezhi',
    name: 'mimashezhi',
    component: resolve => require(['@/components/me/password'], resolve), // 密码设置/修改
    meta: {
      type: "login"
    }
  }, {
    path: '/wodewenda',
    name: 'wodewenda',
    component: resolve => require(['@/components/me/meAsk'], resolve), // 我的问答
    meta: {
      type: "login"
    }
  }, {
    path: '/wodetiwenxiangqing',
    name: 'wodetiwenxiangqing',
    component: resolve => require(['@/components/me/mequizoptions'], resolve), // 我的提问详情
    meta: {
      type: "login"
    }
  }, {
    path: '/wodehuidaxiangqing',
    name: 'wodehuidaxiangqing',
    component: resolve => require(['@/components/me/meansweroptions'], resolve), // 我的回答详情
    meta: {
      type: "login"
    }
  }, {
    path: '/jifenhuanli',
    name: 'jifenhuanli',
    component: resolve => require(['@/components/registrationLottery/store'], resolve), // 积分换礼
  }, {
    path: '/jingxuanhuodong',
    name: 'jingxuanhuodong',
    component: resolve => require(['@/components/registrationLottery/active'], resolve), // 精选活动
  }, {
    path: '/zhucechoujiang',
    name: 'zhucechoujiang',
    component: resolve => require(['@/components/registrationLottery/registrationLottery'], resolve), // 注册抽奖
  }, {
    path: '/renwuzhongxin',
    name: 'renwuzhongxin',
    component: resolve => require(['@/components/registrationLottery/renwuzhongxin'], resolve), // 注册抽奖
  }, {
    path: '/pinglun',
    name: 'pinglun',
    component: resolve => require(['@/components/comment/comment'], resolve), //更多评论
  }, {
    path: '/changezhanghu',
    name: 'changezhanghu',
    component: resolve => require(['@/components/me/changeAccount'], resolve), // 我的账户
  }, {
    path: '/choujiang',
    name: 'choujiang',
    component: resolve => require(['@/components/choujiang/index'], resolve), // 抽奖
  }, {
    path: '/jifenguize',
    name: 'jifenguize',
    component: resolve => require(['@/components/rules/index'], resolve), // 积分规则
  }, {
    path: '/dianpuzizhi',
    name: 'dianpuzizhi',
    component: resolve => require(['@/components/meijuSelection/aptitude'], resolve), // 店铺资质
  }, {
    path: '/shangjiazhongxinshouye',
    name: 'shangjiazhongxinshouye',
    component: resolve => require(['@/components/merchantCentre/index'], resolve) //商家中心首页
  }, {
    path: '/xiaoxi',
    name: 'xiaoxi',
    component: resolve => require(['@/components/merchantCentre/information'], resolve) //消息通知
  }, {
    path: '/xitongxiaoxi',
    name: 'xitongxiaoxi',
    component: resolve => require(['@/components/merchantCentre/systemNews/systemNews'], resolve) //系统消息列表
  }, {
    path: '/xitongxiaoxixiangqing',
    name: 'xitongxiaoxixiangqing',
    component: resolve => require(['@/components/merchantCentre/systemNews/systemNewsDetails'], resolve) //系统消息列表
  }, {
    path: '/keqinggengxin',
    name: 'keqinggengxin',
    component: resolve => require(['@/components/merchantCentre/client'], resolve) //客情更新列表
  }, {
    path: '/shangjiadingdanguanli',
    name: 'shangjiadingdanguanli',
    component: resolve => require(['@/components/merchantCentre/orderProcessing'], resolve) //客情更新列表
  }, {
    path: '/weiliangfang',
    name: 'weiliangfang',
    component: resolve => require(['@/components/merchantCentre/orderManagement/nothouse'], resolve) //未量房
  }, {
    path: '/yiliangfang',
    name: 'yiliangfang',
    component: resolve => require(['@/components/merchantCentre/orderManagement/alreadyhouse'], resolve) //已量房
  }, {
    path: '/qiandanchenggong',
    name: 'qiandanchenggong',
    component: resolve => require(['@/components/merchantCentre/orderManagement/signingsucceed'], resolve) //签单成功
  }, {
    path: '/orderSeek',
    name: 'orderSeek',
    component: resolve => require(['@/components/merchantCentre/orderManagement/orderSeek'], resolve) //订单搜索
  }, {
    path: '/weiliangfangxiangqing',
    name: 'weiliangfangxiangqing',
    component: resolve => require(['@/components/merchantCentre/orderdetails/nothousedetails'], resolve) //未量房详情
  }, {
    path: '/yiliangfangxiangqing',
    name: 'yiliangfangxiangqing',
    component: resolve => require(['@/components/merchantCentre/orderdetails/alreadyhousedetails'], resolve) //已量房详情
  }, {
    path: '/qiandanchenggongxiangqing',
    name: 'qiandanchenggongxiangqing',
    component: resolve => require(['@/components/merchantCentre/orderdetails/signingsucceeddetails'], resolve) //签单成功详情
  }, {
    path: '/merchantUpload',
    name: 'merchantUpload',
    component: resolve => require(['@/components/merchantCentre/merchantUpload'], resolve) //签单成功上传合同
  }, {
    path: '/lookContract',
    name: 'lookContract',
    component: resolve => require(['@/components/merchantCentre/lookContract'], resolve) //查看合同
  }, {
    path: '/yonghuxinxi',
    name: 'yonghuxinxi',
    component: resolve => require(['@/components/merchantCentre/consumermessage'], resolve) //用户基本信息
  }, {
    path: '/buchongxinxi',
    name: 'buchongxinxi',
    component: resolve => require(['@/components/merchantCentre/supplementmessage'], resolve) //补充信息
  }, {
    path: '/keqingguanli',
    name: 'keqingguanli',
    component: resolve => require(['@/components/merchantCentre/kqManagement'], resolve) //客情管理
  }, {
    path: '/beizhu',
    name: 'beizhu',
    component: resolve => require(['@/components/merchantCentre/remark'], resolve) //客情管理
  }, {
    path: '/addOrderFollow',
    name: 'addOrderFollow',
    component: resolve => require(['@/components/merchantCentre/addOrderFollow'], resolve) //添加客情记录
  }, {
    path: '/ceshi',
    name: 'ceshi',
    component: resolve => require(['@/components/ceshi'], resolve) //测试组件
  }],

  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next(() => {
//     window.location.reload()
//   })
// });
// export default router
