<template>
  <div class="collect">
    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        我的点赞
      </div>

      <div class="right">
        <img class="search" src="../../../static/image/me/sy.png" alt="">
      </div>
    </header>

    <div class="live_white">

    </div>

    <!--收藏列表-->
    <div class="collectList" v-for="item in 3">
      <div class="collectList-top">
        <div class="collectList-top-left">
          <img src="../../../static/image/login/mao.jpg" alt="">
          <div>
            <p>搬砖的猪</p>
            <p>2018-11-27</p>
          </div>
        </div>
        <img class="arrows" src="../../../static/image/choicenessstylist/xialaxiala.png" alt="">
      </div>
      <div class="collectList-center">
        <span>打开即融合，小户型也能轻松实现工业风</span>
        <span>设计师案例偏干货个人用户偏生活气息次作品巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉简介</span>
      </div>
      <img class="logo" src="../../../static/image/index/logintwo.png" alt="">
      <div class="collectList-bottom">
        <div class="collectList-bottom-main">
          <img src="../../../static/image/selection/pl.png" alt="">
          <p>评论 8</p>
        </div>
        <div class="collectList-bottom-main">
          <img src="../../../static/image/selection/sc.png" alt="">
          <p>收藏 8</p>
        </div>
        <div class="collectList-bottom-main">
          <img src="../../../static/image/selection/dz.png" alt="">
          <p>点赞 8</p>
        </div>
        <div class="collectList-bottom-main">
          <img src="../../../static/image/selection/fx.png" alt="">
          <p>分享 8</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "wodeshoucang",
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .collect {
    width: 100%;
    background: #F8F8F8;

    .header-container {
      position: fixed;
      top: 0;
      z-index: 1000;
      width: 100%;
      border-bottom: 1px/2 solid #cccccc;
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
          width: 19px/2;
          height: 32px/2;
        }
      }

      .title {
        display: table-cell;
        text-align: center;
        font-size: 36px/2;
      }

      .right {
        display: table-cell;
        padding-right: 12.5px;
        text-align: right;

        img {
          width: 36px/2;
          height: 35px/2;
        }
      }
    }

    /*收藏列表*/

    .collectList {
      width: 351px;
      padding: 20px 12px 11px;
      background: white;
      margin-top: 10px;

      .logo {
        width: 100%;
        height: 395px/2;
        margin-top: 12px;
      }

      .collectList-top {
        display: flex;
        justify-content: space-between;

        .arrows {
          width: 10px;
          height: 6px;
          margin: auto 0;
        }

        .collectList-top-left {
          display: flex;
          justify-content: space-between;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: auto 10px auto 0;
          }

          div p:first-child {
            font-size: 14px;
            color: #333;
            padding-bottom: 5px;
          }

          div p:last-child {
            font-size: 12px;
            color: #999;
          }
        }
      }

      .collectList-center {
        line-height: 24px;
        font-size: 14px;
        span{
          display: inline-block;
        }

        span:first-child {
          margin-top: 37px/2;
          font-weight: bold;
          color: #333;
        }

        span:last-child {
          font-weight: bold;
          color: #666;
        }
      }

      .collectList-bottom {
        display: flex;
        justify-content: space-around;
        padding: 16px 0 0;
        text-align: center;

        img {
          width: 35px/2;
          height: 34px/2;
        }

        p {
          margin-top: 10px;
          color: #666;
          font-size: 12px;
        }
      }
    }

    .live_white {
      width: 100%;
      background: #F8F8F8;
      height: 10px;
      margin-bottom: 48px;

    }
  }
</style>
