<template>
  <div class="information">
    <header class="header-container" @touchmove.prevent>
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        消息
      </div>

      <div class="right">
        <img class="search" src="../../../static/image/choicenessstylist/tousousu.png" alt="">
      </div>
    </header>

    <div class="live_white">

    </div>
    <!--系统消息 新订单 客情更新-->
    <div class="news">
      <div class="news-list" @click="goSystemNews">
        <img src="../../../static/image/merchant/xtxiaoxi.png" alt="">
        <div class="news-main" v-for="item in messageList">
          <div class="news-top">
            <span>系统消息</span>
            <span>{{messageList.create_time}}</span>
          </div>
          <div class="news-bottom">
            {{item.describe}}
          </div>
        </div>
      </div>
      <div class="news-list" @click="goNotHouse">
        <img src="../../../static/image/merchant/xindingdan.png" alt="">
        <div class="news-main">
          <div class="news-top">
            <span>新订单</span>
            <span>14:19</span>
          </div>
          <div class="news-bottom">
            【营销活动】营销活动邀约消息：宜信美居
          </div>
        </div>
      </div>
      <div class="news-list" style="border: none" @click="goClient">
        <img src="../../../static/image/merchant/keqinggengxin.png" alt="">
        <div class="news-main">
          <div class="news-top">
            <span>客情更新</span>
            <span>14:19</span>
          </div>
          <div class="news-bottom">
            【营销活动】营销活动邀约消息：宜信美居
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xiaoxi",
    data() {
      return {
        messageList:""
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      //系统消息列表
      goSystemNews() {
        this.$router.push({
          name: "xitongxiaoxi"
        })
      },
      //客情更新
      goClient() {
        this.$router.push({
          name: "keqinggengxin"
        })
      },
      //新订单=>未量房
      goNotHouse() {
        this.$router.push({
          name: "weiliangfang"
        })
      },
      //  消息列表
      messageGetList() {
        this.$vux.loading.show();
        let data = {
          type: 1
        };
        this.$merchant.messageGetList(data).then((res) => {
          this.messageList = res.data.data.slice(0,1);
          this.messageList.create_time = this.$time.formattingDate(new Date(this.messageList[0].create_time)).slice(11,16);
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.messageGetList()
    }
  }
</script>

<style scoped lang="less">
  .information {
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

    /*系统消息 新订单 客情更新*/

    .news {
      width: 710px/2;
      margin-left: 20px;

      .news-list {
        width: 100%;
        height: 169px/2;
        display: flex;
        border-bottom: 1px solid rgba(242, 242, 242, 1);

        img {
          width: 64px/2;
          height: 64px/2;
          margin: auto 35px/2 auto 0;
        }

        .news-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin: auto 0;

          .news-top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;

            span:first-child {
              font-size: 28px/2;
            }

            span:last-child {
              font-size: 20px/2;
              margin-right: 23px/2;
              color: #999;
            }
          }

          .news-bottom {
            color: #999;
            font-size: 22px/2;
          }
        }
      }
    }
  }

</style>
