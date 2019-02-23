<template>
  <div class="systemNewsDetails">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        消息详情
      </div>
    </header>
    <div class="live_white">

    </div>
    <div class="systemNews-main">
      <h1>营销活动邀请</h1>
      <p class="sign">报名链接：<a href="#">www.cmoamoc.com</a></p>
      <p class="content">某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口。
        活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详某某某活动报名入口，活动详情活动详</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xitongxiaoxixiangqing",
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      //消息详情
      messageGetDetail() {
        this.$vux.loading.show();
        let data = {
          id: this.$route.query.id
        };
        this.$merchant.messageGetDetail(data).then((res) => {
          console.log(res)
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.messageGetDetail()
    }
  }
</script>

<style scoped lang="less">
  .systemNewsDetails {
    width: 100%;

    .live_white {
      width: 100%;
      height: 5px;
      background: #F8F8F8;
      margin-top: 44px;
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

    /*消息详情*/

    .systemNews-main {
      width: 672px/2;
      margin: auto;
      color: #333;

      h1 {
        font-size: 48px/2;
        display: inline-block;
        margin: 30px 0 5px 0;
      }

      .sign {
        font-size: 28px/2;

        a {
          color: #00B4FF;
          text-decoration: underline;
        }
      }

      .content {
        margin-top: 52px/2;
        font-size: 28px/2;
      }
    }
  }

</style>
