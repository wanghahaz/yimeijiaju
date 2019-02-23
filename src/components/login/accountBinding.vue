<template>
  <div class="accountBinding-box">
    <!-- 头像 -->
    <div class="header">
      <img src="../../../static/image/login/mao.jpg" alt="">
      <div class="fonttext">
        <span>江小黑，欢迎您！</span>
        <div class="fonttextone">
          <p>绑定手机账号，绑定后即可使用手机号</p>
          <p>进行登录，账号安全一步到位！</p>
        </div>
      </div>
    </div>
    <!-- 文本框 -->
    <div class="tel-phone-box">
      <img src="../../../static/image/login/shouji.png" class="tel-img"/>
      <input type="tel" class="tel-phone" placeholder="请输入手机号" maxlength="11"/>
    </div>
    <div class="tel-code-box">
      <img src="../../../static/image/login/yanzhengma.png" class="codema-img"/>
      <input type="tel" class="tel-code" placeholder="请输入验证码"/>
      <span class="verification" v-show="sendAuthCode" @click="findCode">发送验证码</span>
      <span class="verification" v-show="!sendAuthCode">{{auth_time}}s</span>
    </div>
    <!-- 记住密码 -->
    <div class="remember">
      <div class="remember-Img">
        <img src="../../../static/image/login/xuanzhong.png" v-show="imgBol" @click="showImgBol"/>
        <img src="../../../static/image/login/wei.png" v-show="!imgBol" @click="showImgBol"/>
        <span>下次自动登录</span>
      </div>
    </div>
    <!--立即验证-->
    <div class="login" @click="goSetPassword">立即验证</div>
  </div>
</template>

<script>
  export default {
    name: "accountBinding",
    data() {
      return {
        imgBol: true, //记住密码切换
        sendAuthCode: true,//验证码倒计时显示隐藏
        auth_time: 0,//初始秒数
      };
    },
    methods: {
      showImgBol() {
        this.imgBol = !this.imgBol
      },
      //  去设置密码
      goSetPassword() {
        this.$router.push({
          name: "setPassword"
        })
      },
      //获取验证码
      findCode() {
        this.sendAuthCode = false;
        this.auth_time = 60;
        var auth_timetimer = setInterval(() => {
          this.auth_time--;
          if (this.auth_time <= 0) {
            this.sendAuthCode = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);
      }
    }
  }
</script>

<style scoped lang="less">
  .accountBinding-box {
    width: 100%;
    margin-top: 20px/2;
    /*头像*/

    .header {
      display: flex;
      justify-content: space-between;

      img {
        width: 120px/2;
        height: 120px/2;
        border-radius: 50%;
        margin: 40px/2 20px/2 60px/2 44px/2;
      }

      .fonttext {
        display: flex;
        flex-direction: column;
        margin-top: 40px/2;
        flex: 3;

        span {
          font-size: 32px/2;
          font-weight: 900;
        }

        .fonttextone {
          font-size: 24px/2;
          color: #999;
          margin-top: 18px/2;
        }
      }
    }


    /*记住密码*/

    .remember {
      width: 702px/2;
      display: flex;
      margin: 20px/2 auto 0;
      // justify-content: space-between;
      font-size: 24px/2;
      color: rgba(161, 161, 161, 1);

      .remember-Img {
        display: flex;

        img {
          width: 30px/2;
          height: 30px/2;
          margin-right: 12px/2;
        }
      }
    }

    /*立即验证*/

    .login {
      width: 702px/2;
      height: 88px/2;
      background: rgba(255, 90, 0, 1);
      border-radius: 8px/2;
      text-align: center;
      margin: 60px/2 auto 0;
      line-height: 88px/2;
      font-size: 28px/2;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    //  手机动态密码登录
    .tel-phone-box, .tel-code-box {
      width: 702px/2;
      margin: auto;
      display: flex;
      border: 1px solid rgba(204, 204, 204, 1);
      position: relative;
      font-size: 28px/2;
      border-radius: 8px/2;


      .tel-phone {
        width: 100%;
        height: 88px/2;
        background: rgba(255, 255, 255, 1);
        //border: 1px solid rgba(204, 204, 204, 1);
        display: flex;
        border-radius: 8px/2;
        text-indent: 63px/2;
        font-size: 28px/2;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }

      .tel-img {
        position: absolute;
        width: 23px/2;
        height: 32px/2;
        top: 14px;
        left: 10px;
      }

      .tel-code {
        width: 396px/2;
        height: 88px/2;
        border-radius: 8px/2;
        text-indent: 63px/2;
        font-size: 28px/2;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }

      .verification {
        display: block;
        width: 306px/2;
        height: 88px/2;
        background: rgba(238, 238, 238, 1);
        border-radius: 0 8px/2 8px/2 0;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        line-height: 88px/2;
      }

      .codema-img {
        position: absolute;
        width: 26px/2;
        height: 26px/2;
        top: 31px/2;
        left: 10px;
      }
    }
    .tel-code-box{
      margin-top: 12px;
    }
  }
</style>
