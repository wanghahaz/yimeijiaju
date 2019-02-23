<template>
  <div class="login-box">
    <!--头部动态切换-->
    <div class="header-box">
      <div @click="index=1,bol=false" :class="index==1?'active':'account'">
        账号密码登录
      </div>
      <div class="vertical">

      </div>
      <div @click="index=0,bol=true" :class="index==0?'active':'account'">
        手机动态密码登录
      </div>
    </div>
    <div v-show="!bol">
      <div class="tel-phone-box">
        <img src="../../../static/image/login/shouji.png" class="tel-img"/>
        <input type="text" class="tel-phone" placeholder="手机号/邮箱/用户名" v-model="shopUsername"/>
      </div>
      <div class="tel-code-box">
        <img src="../../../static/image/login/mima.png" class="codema-img"/>
        <input type="password" class="tel-phone" placeholder="请输入密码" v-model="password"/>
      </div>
      <!--记住密码-->
      <div class="remember">
        <div class="remember-Img">
          <img src="../../../static/image/login/xuanzhong.png" v-show="imgBol" @click="showImgBol"/>
          <img src="../../../static/image/login/wei.png" v-show="!imgBol" @click="showImgBol"/>
          <span>下次自动登录</span>
        </div>
        <span>忘记密码？</span>
      </div>
      <!--底部登录-->
      <div class="login" @click="login">登录</div>
    </div>
    <div v-show="bol">
      <!--中间登录-->
      <div class="tel-phone-box">
        <img src="../../../static/image/login/shouji.png" class="tel-img"/>
        <input type="tel" class="tel-phone" placeholder="请输入手机号" maxlength="11" v-model="mobile_phone"/>
      </div>
      <div class="tel-code-box">
        <img src="../../../static/image/login/yanzhengma.png" class="codema-img"/>
        <input type="tel" class="tel-code" placeholder="请输入验证码" v-model="mobile_code"/>
        <span class="verification" v-show="sendAuthCode" @click="sendSms">发送验证码</span>
        <span class="verification" v-show="!sendAuthCode">{{auth_time}}s</span>
      </div>
      <!--底部登录-->
      <div class="login">登录</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "merchantLogin",
    data() {
      return {
        bol: false,//登录切换
        index: 1,
        imgBol: true,//记住密码切换j
        sendAuthCode: true,//验证码倒计时显示隐藏
        auth_time: 0,//初始秒数
        mobile_phone: "",//手机号
        mobile_code: "",//验证码
        shopUsername: "",
        password: ""
      }
    },
    mounted() {

    },
    methods: {
      showImgBol() {
        this.imgBol = !this.imgBol
      },
      //获取验证码
      sendSms() {
        if (this.mobile_phone == "") {
          this.$showToast(true, 'text', '请输入手机号');
          return;
        }
        this.sendAuthCode = false;
        this.auth_time = 60;
        var auth_timetimer = setInterval(() => {
          this.auth_time--;
          if (this.auth_time <= 0) {
            this.sendAuthCode = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);
      },
      //登录
      login() {
        this.$vux.loading.show();
        let data = {
          shop_username: this.shopUsername,
          password: this.password
        };
        this.$login.login(data).then((res) => {
          console.log(res)
          if (res.code === 200) {
            this.$showToast(true, 'text', res.msg);
            // this.$router.push({
            //   name: 'shangjiazhongxinshouye',
            //   query: {
            //     id: res.data.id,
            //     shop_name: res.data.shop_name
            //   }
            // });
            this.$router.push({
              name: 'shangjiazhongxinshouye',
              query: {
                obj:JSON.stringify(res.data)
              }
            });
            this.$vux.loading.hide();
          } else {
            this.$showToast(true, 'text', res.msg);
            this.$vux.loading.hide();
          }
        }).catch((err) => {
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped lang="less">
  @import "login";
</style>
