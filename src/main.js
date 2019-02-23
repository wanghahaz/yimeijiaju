// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
//px转rem
import 'lib-flexible/flexible'
//引入swiper
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css';
//引入瀑布流组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const type = to.meta.type;
// 判断该路由是否需要登录权限
  if (type === 'login') {
    if (localStorage.getItem('userId') && localStorage.getItem('userId') != undefined) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()  // 确保一定要有next()被调用
  }
});
//修改touch事件
import vueTouch from 'kim-vue-touch'

Vue.use(vueTouch);

//toast提示
import {ToastPlugin} from 'vux'

Vue.use(ToastPlugin);
//图片懒加载
// import Vuelazyload from 'vue-lazyload'
// Vue.use(Vuelazyload, {
//   loading: require('assets/default.png')
// });

//Loading
import {LoadingPlugin} from 'vux'

Vue.use(LoadingPlugin);

//公用的弹窗(全局变量)
Vue.prototype.$showToast = function (showPositionValue, type, text,) {
  this.$vux.toast.show({
    showPositionValue: false,
    type: type,
    text: text,
    position: 'middle',
    time: 3000
  })
};
//全局url域名
let imgSrc = "http://image.meijujingxuan.com/";
Vue.prototype.$imgSrc = imgSrc;
//登录模块 并且挂载到原型
import login from './api/login'
//首页模块
import index from './api/index'
import merchant from './api/merchant'
import time from '../static/js/time'
//config配置
// import {requireConfig} from '../static/js/wxShare'

// requireConfig();
Vue.prototype.$login = login;
Vue.prototype.$index = index;
Vue.prototype.$merchant = merchant;
Vue.prototype.$time = time;

//图片懒加载
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad, {
  error: './static/image/me/pdlb_12.png',
  loading: './static/image/me/pdlb_12.png'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store
});
