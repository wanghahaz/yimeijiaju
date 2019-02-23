<template>
  <div class="accountSecurity">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        账户与安全
      </div>
    </header>
    <div class="live-white">

    </div>
    <div class="personal-details">
      <!--密码设置/修改-->
      <div class="personal-details-list personal-details-one" @click="goPassword">
        <p>密码设置/修改</p>
        <img class="alonea" src="../../../static/image/selection/youjiantou.png" alt="">
      </div>
      <!--修改手机号-->
      <div class="personal-details-list personal-details-one" style="border: none;">
        <p>修改手机号</p>
        <img class="alonea" src="../../../static/image/selection/youjiantou.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "zhanghuyuanquan",
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      //  去往修改密码
      goPassword() {
        this.$router.push({
          name: "mimashezhi"
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .accountSecurity {
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
    }
  }
</style>

