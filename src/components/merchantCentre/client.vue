<template>
  <div class="client">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        客情更新
      </div>
    </header>
    <div class="live_white">

    </div>
    <div class="client-list">
      <div class="news-list" v-for="item in 3">
        <span class="indent">查看订单</span>
        <img src="../../../static/image/login/mao.jpg" alt="">
        <div class="news-main">
          <div class="news-top">
            <span>【未量房】 订单号：568985688</span>
            <span>14:19</span>
          </div>
          <div class="news-bottom">
            李四预约12月28日量房
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "keqinggengxin",
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
  .client {
    width: 100%;

    .live_white {
      width: 100%;
      height: 5px;
      background: #F8F8F8;
      margin-top: 48px;
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

    /*客情更新列表*/

    .client-list {
      width: 702px/2;
      margin: auto;

      .news-list {
        position: relative;
        width: 100%;
        height: 230px/2;
        display: flex;
        border-bottom: 1px solid rgba(242, 242, 242, 1);

        .indent {
          position: absolute;
          bottom: 10px;
          right: 0;
          width: 160px/2;
          height: 60px/2;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(233, 85, 4, 1);
          border-radius: 30px/2;
          text-align: center;
          line-height: 30px;
          font-size: 24px/2;
          color: #E95504;
        }

        img {
          width: 90px/2;
          height: 90px/2;
          margin: 20px 20px/2 auto 0;
          border-radius: 50%;
        }

        .news-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin: 50px/2 0 0;
          color: #333;

          .news-top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 7px;

            span:first-child {
              font-size: 24px/2;
            }

            span:last-child {
              font-size: 24px/2;
              color: #999;
            }
          }

          .news-bottom {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 465px/2;
            font-size: 24px/2;
          }
        }
      }
    }
  }
</style>
