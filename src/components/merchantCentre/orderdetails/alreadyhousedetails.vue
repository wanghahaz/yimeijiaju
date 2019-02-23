<template>
  <div class="alreadyhousedetails">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        订单详情
      </div>
    </header>
    <div class="live-white">

    </div>
    <div class="nothousedetails-list">
      <div class="nothousedetails-main">
        <div class="nothouse-details">
          <span>客情管理</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
        <div class="nothouse-details">
          <span>设计师</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
        <div class="nothouse-details">
          <span>工长</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
        <div class="nothouse-details">
          <span>量房时间</span>
          <span style="color: #999">2018-12-08 11:00</span>
        </div>
        <div class="nothouse-details">
          <span>备注</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
        <div class="nothouse-details">
          <span>用户基础信息</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
        <div class="nothouse-details" style="border: none;">
          <span>补充信息</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
      </div>
    </div>
    <div class="live_white">

    </div>
    <!--订单展示-->
    <div class="orderContent">
      <div class="orderContentList">
        <p>
          <span>订单号</span>
          <span>652656565</span>
        </p>
        <p>
          <span>创建时间</span>
          <span>2018-11-20 10:00</span>
        </p>
        <p>
          <span>姓名</span>
          <span>王小二</span>
        </p>
        <p>
          <span>电话</span>
          <span>15066668888</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "yiliangfangxiangqing",
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped lang="less">
  .alreadyhousedetails {
    width: 100%;
    height: 100vh;
    background: #F8F8F8;

    .live-white {
      width: 100%;
      background: #F8F8F8;
      height: 10px;
      margin-top: 44px;
    }

    .live_white {
      width: 100%;
      background: #F8F8F8;
      height: 5px;
    }

    .header-container {
      position: fixed;
      top: 0;
      z-index: 10;
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

    /*详情内容*/

    .nothousedetails-list {
      width: 100%;
      background: white;

      .nothousedetails-main {
        width: 702px/2;
        margin: auto;

        .nothouse-details {
          color: #333;
          font-size: 14px;
          width: 100%;
          height: 100px/2;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
          display: flex;
          justify-content: space-between;
          line-height: 50px;

          img {
            width: 12px/2;
            height: 22px/2;
            margin: auto 0;
          }
        }
      }
    }

    /*订单展示*/

    .orderContent {
      width: 100%;
      height: 248px/2;
      background: white;

      .orderContentList {
        padding-left: 12px;
        line-height: 25px;
        padding-top: 13px;

        p {
          span {
            font-size: 12px;
            display: inline-block;
          }

          span:first-child {
            color: #666;
            width: 130px/2;
          }

          span:last-child {
            color: #333;
          }
        }
      }
    }
  }
</style>
