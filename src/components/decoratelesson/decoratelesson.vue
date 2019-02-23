<template>
  <div class="decoratelesson">
    <!--<div class="headernavigation">-->
    <!--<img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">-->
    <!--装修课堂-->
    <!--<img class="search" src="../../../static/image/choicenessstylist/iconfenxiang.png" alt="">-->
    <!--</div>-->
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        装修课堂
      </div>
    </header>


    <img class="logo" src="../../../static/image/choicenessstylist/logo.png" alt="">
    <!--<h1>上期投票结果公示</h1>-->
    <!--<div class="vote">-->
    <!--<p class="voteP">-->
    <!--<span>主题</span>-->
    <!--<span>得票数</span>-->
    <!--</p>-->
    <!--<div class="votediv">-->
    <!--<div class="voteD">-->
    <!--<p>-->
    <!--<span></span>-->
    <!--<span>主题主题主题主题主题主题主题</span>-->
    <!--</p>-->
    <!--<p style="color: #E95504">165票</p>-->
    <!--</div>-->
    <!--<div class="voteD">-->
    <!--<p>-->
    <!--<span></span>-->
    <!--<span>主题主题主题主题主题主题主题</span>-->
    <!--</p>-->
    <!--<p style="color: #E95504">165票</p>-->
    <!--</div>-->
    <!--<div class="voteD">-->
    <!--<p>-->
    <!--<span></span>-->
    <!--<span>主题主题主题主题主题主题主题</span>-->
    <!--</p>-->
    <!--<p style="color: #E95504">165票</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <h2>本期装修课堂报名</h2>
    <div class="decorationlesson">
      <img :src="currentActivesInfo.current_actives_img" class="img_logo"/>
      <div class="finish">
        <div class="finishLeft">
          <p>{{currentActivesInfo.current_actives_title}}</p>
          <p>已有<span style="color: #E95504">{{currentActivesInfo.actives_people_count}}</span>人报名</p>
        </div>
        <span class="enroll">立即报名</span>
      </div>
    </div>
    <div class="leave">

    </div>
    <h2>下期装修课堂投票</h2>
    <div class="decorationlesson" v-for="item in nextActivity">
      <img :src="item.activity_img" class="img_logo"/>
      <div class="finish">
        <div class="finishLeft">
          <p>{{item.activity_title}}</p>
          <p>已有<span style="color: #E95504">{{item.activity_people_count}}</span>人报名</p>
        </div>
        <span class="enroll">立即投票</span>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "zhuangxiuketang",
    data() {
      return {
        currentActivesInfo: "",
        nextActivity: "",
      }
    },
    methods: {
      //返回上一级
      goBack() {
        this.$router.go(-1)
      },
      //列表
      OfflineShopActives() {
        this.$vux.loading.show();
        this.$index.OfflineShopActives().then((res) => {
          console.log(res.data.next_activity);
          this.currentActivesInfo = res.data.current_actives_info;
          this.currentActivesInfo.current_actives_img = this.$imgSrc + this.currentActivesInfo.current_actives_img;
          this.nextActivity = res.data.next_activity;
          for (let i = 0; i < this.nextActivity.length; i++) {
            this.nextActivity[i].activity_img = this.$imgSrc + this.nextActivity[i].activity_img
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.OfflineShopActives()
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/overall.less";
  @import "../../../static/css/header.less";

  .decoratelesson {
    width: 100%;
    background: white;

    .logo {
      width: 100%;
      height: auto;
      margin-top: 55px/2;
    }

    h1, h2 {
      color: #333333;
      font-size: @bag-size;
      font-weight: @font-weight;
      padding-bottom: 39px/2;
      margin-left: 26px/2;
    }

    h2 {
      padding-top: 49px/2;
    }

    /*装修课堂*/

    .decorationlesson {
      width: 750px/2;
      margin: auto;

      .img_logo {
        width: 702px/2;
        height: 300px/2;
        border-radius: 8px/2;
        margin: 0 24px/2 24px/2 24px/2;
      }

      .finish {
        width: 702px/2;
        margin: 0 auto 20px;
        display: flex;
        justify-content: space-between;

        .finishLeft {
          display: flex;
          flex-direction: column;

          p:first-child {
            font-size: 14px;
            color: #333;
            font-weight: bold;
            margin-bottom: 19px/2;
          }

          p:last-child {
            color: #666;
            font-size: 12px;
          }
        }

        .enroll {
          margin: auto 0;
          width: 180px/2;
          height: 60px/2;
          background: rgba(233, 85, 4, 1);
          border-radius: 8px/2;
          color: #fff;
          font-size: 14px;
          line-height: 30px;
          text-align: center;
        }
      }
    }

    .leave {
      width: 100%;
      height: 20px/2;
      background: #F8F8F8;
    }

    //投票
    .vote {
      width: 701px/2;
      margin: auto;

      .voteP {
        display: flex;
        font-size: @size;
        justify-content: space-between;
      }

      .votediv {
        width: 701px/2;
        background: rgba(245, 245, 245, 1);
        display: flex;
        margin-top: 21px/2;
        flex-direction: column;
        padding-bottom: 26px/2;

        .voteD {
          display: flex;
          justify-content: space-between;
          font-size: 24px/2;
          color: #666666;
          margin-top: 26px/2;

          p:nth-child(1) {
            display: flex;
            justify-content: space-between;

            span:nth-child(1) {
              width: 18px/2;
              height: 18px/2;
              background: #EC6941;
              margin: auto 13px/2 auto 13px/2;
            }
          }

          p:nth-child(2) {
            margin-right: 15px/2;
          }
        }
      }
    }

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
          width: 19px/2;
          margin-top: 15px;
          height: 32px/2;
        }
      }

      .title {
        width: 90%;
        text-align: center;
        font-size: 36px/2;
      }
    }
  }
</style>
