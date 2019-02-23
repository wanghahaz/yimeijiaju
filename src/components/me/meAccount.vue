<template>
  <div class="me-account">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        我的账户
      </div>
    </header>
    <div class="live-white">

    </div>
    <!--个人信息-->
    <div class="personal-details">
      <!--头像-->
      <div class="personal-details-list" @click="goChange">
        <p>头像</p>
        <img class="head" v-lazy="this.$imgSrc+GetUserInfoList.head_img" alt="">
      </div>
      <!--用户名-->
      <div class="personal-details-list" @click="goChange">
        <p>用户名</p>
        <p class="alone">{{GetUserInfoList.username?GetUserInfoList.username:'暂无'}}</p>
      </div>
      <!--性别-->
      <div class="personal-details-list" @click="goChange">
        <p>性别</p>
        <p v-show="GetUserInfoList.sex==0"><span>暂无</span><img class="arrows"
                                                               src="../../../static/image/selection/youjiantou.png"
                                                               alt=""></p>
        <p v-show="GetUserInfoList.sex==1"><span>男</span><img class="arrows"
                                                              src="../../../static/image/selection/youjiantou.png"
                                                              alt=""></p>
        <p v-show="GetUserInfoList.sex==2"><span>女</span><img class="arrows"
                                                              src="../../../static/image/selection/youjiantou.png"
                                                              alt=""></p>
      </div>
      <!--邮箱-->
      <div class="personal-details-list" @click="goChange">
        <p>邮箱</p>
        <p class="alone">未填写</p>
      </div>
      <!--所在城市-->
      <div class="personal-details-list" @click="goChange">
        <p>所在城市</p>
        <p class="alone">北京</p>
      </div>
      <!--&lt;!&ndash;收货地址&ndash;&gt;-->
      <!--<div class="personal-details-list personal-details-one">-->
      <!--<p>收货地址</p>-->
      <!--<img class="alonea" src="../../../static/image/selection/youjiantou.png" alt="">-->
      <!--</div>-->
      <!--微信绑定-->
      <div class="personal-details-list personal-details-one">
        <p>微信绑定</p>
        <img class="alonea" src="../../../static/image/selection/youjiantou.png" alt="">
      </div>
      <!--账户与安全-->
      <div class="personal-details-list personal-details-one" @click.stop="goAccountSecurity">
        <p>账户与安全</p>
        <img class="alonea" src="../../../static/image/selection/youjiantou.png" alt="">
      </div>
    </div>
    <span class="out-login" @click="handleLogin">退出登录</span>
  </div>
</template>

<script>
  export default {
    name: "wodezhanghu",
    data() {
      return {
        GetUserInfoList: ""
      }
    },
    mounted() {
      this.GetUserInfo()
    },
    methods: {
      //退出登录
      handleLogin() {
        localStorage.removeItem('userId');
        this.$router.push({
          name: "login"
        })
      },
      goBack() {
        this.$router.go(-1)
      },
      //去修改
      goChange() {
        console.log(1)
        this.$router.push({
          name: "changezhanghu"
        })
      },
      //  去往账户与安全
      goAccountSecurity() {
        this.$router.push({
          name: "zhanghuyuanquan"
        })
      },
      //获取用户信息
      GetUserInfo() {
        this.$vux.loading.show();
        let data = {
          userid: localStorage.userId
        };
        this.$index.GetUserInfo(data).then((res) => {
          this.GetUserInfoList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .me-account {
    width: 100%;

    .header-container {
      position: fixed;
      top: 0;
      z-index: 1000;
      width: 100%;
      height: 44px;
      line-height: 44px;
      background-color: white;
      display: flex;

      .left {
        text-align: left;
        padding-left: 12.5px;
        display: inline-block;

        img {
          width: (19px/2);
          margin-top: 15px;
          height: (32px/2);
        }
      }

      .title {
        width: 90%;
        text-align: center;
        font-size: (36px/2);
      }
    }

    .live-white {
      width: 100%;
      height: 5px;
      background: rgba(248, 248, 248, 1);
      margin-top: 44px;
    }

    /*个人信息*/

    .personal-details {
      width: 720px/2;
      margin-left: 12px;
      margin-top: 10px;

      .personal-details-list {
        width: 100%;
        height: 130px/2;
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        display: flex;
        justify-content: space-between;
        line-height: 130px/2;
        font-size: 30px/2;
        color: rgba(102, 102, 102, 1);

        .head {
          width: 90px/2;
          height: 90px/2;
          border-radius: 50%;
          margin: auto 13px;
        }

        .arrows {
          width: 15px/2;
          height: 26px/2;
          vertical-align: middle;
          margin: 0 14px 0 9px;
        }

        .alone {
          margin-right: 12px;
        }

        .alonea {
          width: 15px/2;
          height: 26px/2;
          margin: auto 14px auto 0;
        }
      }

      .personal-details-one {
        border-bottom: 10px solid rgba(242, 242, 242, 1);
      }
    }

    .out-login {
      display: block;
      width: 701px/2;
      height: 94px/2;
      background: rgba(221, 221, 221, 1);
      border-radius: 6px/2;
      font-size: 30px/2;
      color: #666;
      line-height: 94px/2;
      margin: 150px/2 auto 0;
      text-align: center;

    }
  }
</style>
