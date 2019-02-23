<template>
  <div class="orderProcessing">
    <header class="header-container" @touchmove.prevent>
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        订单管理
      </div>

      <div class="right" @click="goOrderSeek">
        <img class="search" src="../../../static/image/choicenessstylist/tousousu.png" alt="">
      </div>
    </header>
    <div class="live-white">

    </div>
    <!--消息 订单管理 问答-->
    <div class="main-center">
      <div class="main-center-list" @click="goNotHouse">
        <div class="main-center-left">
          <img src="../../../static/image/merchant/wei.png" alt="">
          <span>未量房</span>
        </div>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
      <div class="main-center-list" @click="goAlreadyhouse">
        <div class="main-center-left">
          <img src="../../../static/image/merchant/yi.png" alt="">
          <span>已量房</span>
        </div>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
      <div class="main-center-list" @click="goSigningsucceed">
        <div class="main-center-left">
          <img src="../../../static/image/merchant/qiandao.png" alt="">
          <span>签单成功</span>
        </div>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shangjiadingdanguanli",
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      //未量房
      goNotHouse() {
        this.$router.push({
          name: "weiliangfang"
        })
      },
      //已量房
      goAlreadyhouse() {
        this.$router.push({
          name: "yiliangfang"
        })
      },
      //已量房
      goSigningsucceed() {
        this.$router.push({
          name: "qiandanchenggong"
        })
      },
      //搜索
      goOrderSeek(){
        this.$router.push({
          name: "orderSeek"
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .orderProcessing {
    width: 100%;

    .live-white {
      width: 100%;
      background: #F8F8F8;
      height: 10px;
      margin-top: 48px;
    }

    .header-container {
      position: fixed;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 44px;
      line-height: 44px;
      display: table;
      table-layout: fixed;
      background-color: white;

      .left {
        display: table-cell;
        text-align: left;
        padding-left: 12.5px;

        img {
          margin-top: 15px;
          width: (19px/2);
          height: (32px/2);
        }
      }

      .title {
        display: table-cell;
        text-align: center;
        font-size: (36px/2);
      }

      .right {
        display: table-cell;
        padding-right: 12.5px;
        text-align: right;

        img {
          width: 37px/2;
          height: 37px/2;
        }
      }
    }

    .main-center {
      width: 100%;
      background: white;
      font-size: 14px;
      color: #333;

      .main-center-list {
        width: 702px/2;
        margin: auto;
        height: 120px/2;
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        display: flex;
        justify-content: space-between;

        .main-center-left {
          display: flex;
          margin: auto 0;

          img {
            width: 64px/2;
            height: 64px/2;
            margin-right: 19px/2;
          }

          span {
            margin: auto;
          }
        }

        .zuo {
          width: 12px/2;
          height: 22px/2;
          margin: auto 0;
        }
      }
    }
  }
</style>
