<template>
  <div class="weChatLogin-box">
    <!-- 微信图标 -->
    <div class="weChatImg">
      <img src="../../../static/image/login/weixin.png"/>
      <p class="weChatP">微信</p>
      <p>亿万用户已选择微信登录应用</p>
    </div>
    <!-- 一键登录 -->
    <div class="onekey" @click="goAccountBinding">一键登录</div>
    <!-- 获取权限 -->
    <div class="jurisdiction">
      <h1>美居精选将获得以下权限：</h1>
      <div class="visit">
        <img src="../../../static/image/login/hei.png" v-show="bol" @click="switchover"/>
        <img src="../../../static/image/login/duigou.png" v-show="!bol" @click="switchover"/>
        <span>访问你的详细资料（必选）</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "weChatLogin",
    data() {
      return {
        bol: true,//勾选图片切换
      };
    },
    methods: {
      //切换图片
      switchover() {
        this.bol = !this.bol
      },
      //跳转账号绑定
      goAccountBinding() {
        this.$router.push({
          name: "accountBinding"
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .weChatLogin-box {
    width: 100%;

    // 微信图标
    .weChatImg {
      display: flex;
      text-align: center;
      flex-direction: column;
      font-size: 24px/2;
      font-weight: 400;
      margin-top: 60px/2;
      color: rgba(153, 153, 153, 1);

      img {
        width: 108px/2;
        height: 108px/2;
        margin: auto;
      }

      .weChatP {
        font-size: 28px/2;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin: 26px/2 0 20px/2 0;
      }
    }

    // 一键登录
    .onekey {
      width: 702px/2;
      height: 88px/2;
      background: rgba(60, 176, 52, 1);
      border-radius: 8px/2;
      font-size: 28px/2;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      margin: 60px/2 auto 0;
      line-height: 88px/2;
      text-align: center;
    }

    //获取权限
    .jurisdiction {
      width: 702px/2;
      margin: 260px/2 auto 0;

      h1 {
        font-size: 28px/2;
        color: rgba(51, 51, 51, 1);
        font-weight: bold;
        margin-bottom: 20px/2;
      }

      .visit {
        width: 100%;
        height: 88px/2;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(219, 219, 219, 1);
        border-radius: 8px/2;
        font-size: 28px/2;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        display: flex;
        justify-content: flex-start;
        line-height: 88px/2;

        img {
          width: 23px/2;
          height: 16px/2;
          margin: auto 20px/2 auto 20px/2;
        }

        span {
          flex: 4;
        }
      }
    }
  }
</style>
