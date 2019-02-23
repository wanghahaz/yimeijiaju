<template>
  <div class="login-box">
    <!--头部动态切换-->
    <div class="header-box">
      <div @click="index=0,bol=true" :class="index==0?'active':'account'">
        手机动态密码登录
      </div>
      <div class="vertical">

      </div>
      <div @click="index=1,bol=false" :class="index==1?'active':'account'">
        账号密码登录
      </div>
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
      <div class="login" @click="UserLogin">登录</div>
      <!--协议-->
      <div class="agreement">
        <p>首次登录将自动为您注册</p>
        <p>注册即同意<span style="color: #25AAFF" @click="goProtocol">《美居精选用户服务使用协议》</span></p>
      </div>
      <!--微信登录-->
      <div class="weChat">
        <img src="../../../static/image/login/weixin.png"/>
        <p>使用微信登录</p>
      </div>
    </div>
    <div v-show="!bol">
      <div class="tel-phone-box">
        <img src="../../../static/image/login/shouji.png" class="tel-img"/>
        <input type="text" class="tel-phone" placeholder="手机号/邮箱/用户名"/>
      </div>
      <div class="tel-code-box">
        <img src="../../../static/image/login/mima.png" class="codema-img"/>
        <input type="password" class="tel-phone" placeholder="请输入密码"/>
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
      <div class="login">登录</div>
      <!--微信登录-->
      <div class="weChat" style="margin-top: 194px" @click="goweChatLogin">
        <img src="../../../static/image/login/weixin.png"/>
        <p>使用微信登录</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "login",
    data() {
      return {
        bol: true,//登录切换
        index: 0,
        imgBol: true,//记住密码切换
        sendAuthCode: true,//验证码倒计时显示隐藏
        auth_time: 0,//初始秒数
        mobile_phone: "",//手机号
        mobile_code: "",//验证码
      }
    },
    mounted() {

    },
    methods: {
      goweChatLogin() {
        this.$router.push({
          name: "weChatLogin"
        })
      },
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
        let data = {
          mobile_phone: this.mobile_phone,
          sms_type: "1"
        };
        this.$login.sendSms(data).then((res) => {
          this.$showToast(true, 'text', res.message);
        }).catch((err) => {
          console.log(err)
        })
      },
      //登录
      UserLogin() {
        this.$vux.loading.show();
        let data = {
          mobile_phone: this.mobile_phone,
          mobile_code: this.mobile_code
        };
        this.$login.UserLogin(data).then((res) => {
          localStorage.setItem('userId', res.data.userid);
          this.$showToast(true, 'text', res.message);
          this.$vux.loading.hide();
          this.$router.push({
            path: '/'
          })
        }).catch((err) => {
          console.log(err)
        })
      },
      //协议
      goProtocol() {
        this.$router.push({
          name: "yonghuxieyi"
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "login";
</style>
