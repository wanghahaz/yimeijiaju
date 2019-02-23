<template>
  <div class="index">
    <header class="header-container" @touchmove.prevent>
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        <!--{{this.$route.query.shop_name}}-->
        {{JSON.parse(this.$route.query.obj).shop_name}}
      </div>

      <div class="right" @click="handleHeader">
        <img class="search" src="../../../static/image/choicenessstylist/caidan.png" alt="">
      </div>
    </header>
    <!--头部模态框-->
    <div class="header-mark" @touchmove.prevent v-show="headerMarkBol" @click="handleHeader">
      <div class="header-main">
        <div class="cephalosomeboxlist">
          <img class="xiaoxi" src="../../../static/image/me/xxxx.png"/> 消息
        </div>
        <div class="cephalosomeboxlist" @click="goMeijuSelection">
          <img class="shouye" src="../../../static/image/merchant/dpsy.png"/> 店铺首页
        </div>
        <a class="cephalosomeboxlist" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
          <img class="kefu" src="../../../static/image/selection/kf.png"/> 在线客服
        </a>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--消息 订单管理 问答-->
    <div class="main-center">
      <div class="main-center-list" @click="goInformation">
        <div class="main-center-left">
          <img class="xiaoxih" src="../../../static/image/merchant/xiaoxilan.png" alt="">
          <span class="xiaoxiha">消息</span>
        </div>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
      <div class="main-center-list" @click="goOrderProcessing">
        <div class="main-center-left">
          <img class="dingdanh" src="../../../static/image/merchant/dingdan.png" alt="">
          <span class="dingdanha">订单管理</span>
        </div>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
      <div class="main-center-list" style="border: none">
        <div class="main-center-left">
          <img class="wendah" src="../../../static/image/merchant/wenda.png" alt="">
          <span class="wendaha">问答</span>
        </div>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
    </div>
    <div class="live_white">

    </div>
    <!--美居首页 店铺首页-->
    <div class="meiJuHome">
      <div class="main-center-list" @click="goHome">
        <div class="main-center-left">
          <img class="mjsy" src="../../../static/image/me/syyy.png" alt="">
          <span class="mjsyha">美居首页</span>
        </div>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
      <div class="main-center-list" @click="goMeijuSelection">
        <div class="main-center-left">
          <img class="dpsy" src="../../../static/image/merchant/dpsy.png" alt="">
          <span class="dpsyha">店铺首页</span>
        </div>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shangjiazhongxinshouye",
    data() {
      return {
        headerMarkBol: false,
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      handleHeader() {
        this.headerMarkBol = !this.headerMarkBol;
      },
      //美居首页
      goHome() {
        this.$router.push({
          name: "index"
        })
      },
      //消息
      goInformation() {
        this.$router.push({
          name: "xiaoxi"
        })
      },
      //订单管理
      goOrderProcessing() {
        this.$router.push({
          name: "shangjiadingdanguanli"
        })
      },
      //去公司详情
      goMeijuSelection() {
        this.$router.push({
          name: "zhuangxiugongsixiangqing",
          query: {
            id: JSON.parse(this.$route.query.obj).id
          }
        })
      }
    },
    mounted(){
      console.log(JSON.parse(this.$route.query.obj))
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/overall.less";

  .index {
    width: 100%;
    height: 100vh;
    background: #F8F8F8;

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
          width: (44px/2);
          height: (32px/2);
        }
      }
    }

    /*头部导航*/

    .header-mark {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 11;
      -webkit-tap-highlight-color: transparent;

      .header-main {
        width: (240px/2);
        background: rgba(255, 255, 255, 1);
        position: relative;
        top: (88px/2);
        left: (486px/2);

        .cephalosomeboxlist {
          display: inline-block;
          width: (240px/2);
          height: (88px/2);
          border-bottom: 1px solid #E7E7E7;
          margin: auto;
          line-height: (88px/2);
          font-size: (28px/2);
          color: rgba(51, 51, 51, 1);

          img {
            margin-right: (20px/2);
            margin-left: (22px/2);
            vertical-align: middle;
          }

          .xiaoxi, .shouye, .guanzhu {
            width: (36px/2);
            height: auto;
          }

          .kefu {
            width: (32px/2);
            height: auto;
          }
        }
      }
    }

    .live-white {
      width: 100%;
      height: 10px;
      margin-top: 48px;
    }

    .live_white {
      width: 100%;
      height: 5px;
    }

    /*消息 订单管理 问答*/

    .main-center {
      width: 100%;
      background: white;
      font-size: @size;

      .main-center-list {
        width: 702px/2;
        margin: auto;
        height: 100px/2;
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        display: flex;
        justify-content: space-between;

        .main-center-left {
          display: flex;
          margin: auto 0;

        }

        .zuo {
          width: 12px/2;
          height: 22px/2;
          margin: auto 0;
        }

        .xiaoxiha {
          margin-left: 19px/2;
        }

        .dingdanha {
          margin-left: 25px/2;
        }

        .wendaha {
          margin-left: 21px/2;
        }

        .dingdanh {
          width: 29px/2;
          height: 36px/2;
        }

        .wendah {
          width: 37px/2;
          height: 36px/2;
        }

        .xiaoxih {
          width: 36px/2;
          height: 35px/2;
        }
      }
    }

    /*美居首页 店铺首页*/

    .meiJuHome {
      width: 100%;
      background: white;
      font-size: @size;

      .main-center-list {
        width: 702px/2;
        margin: auto;
        height: 100px/2;
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        display: flex;
        justify-content: space-between;

        .main-center-left {
          display: flex;
          margin: auto 0;
        }

        .zuo {
          width: 12px/2;
          height: 22px/2;
          margin: auto 0;
        }

        .mjsy, .dpsy {
          width: 36px/2;
          height: auto;
        }

        .mjsyha, .dpsyha {
          margin-left: 19px/2;
        }
      }
    }
  }
</style>
