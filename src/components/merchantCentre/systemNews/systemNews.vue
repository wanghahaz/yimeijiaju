<template>
  <div class="systemNews">
    <header class="header-container" @touchmove.prevent>
      <div class="left" @click="goBack">
        <img class="back" src="../../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        消息
      </div>

      <div class="right">
        <img class="search" src="../../../../static/image/choicenessstylist/tousousu.png" alt="">
      </div>
    </header>
    <div class="live_white">

    </div>
    <!--系统消息列表-->
    <div class="news">
      <div class="news-list" v-for="item in messageList" @click="goSystemNewsDetails(item.id)">
        <img src="../../../../static/image/merchant/fengche.png" alt="">
        <div class="news-main">
          <div class="news-top">
            <span>营销活动邀请</span>
            <span>{{item.create_time}}</span>
          </div>
          <div class="news-bottom">
            {{item.describe}}
          </div>
        </div>
      </div>
    </div>
    <infinite-loading :on-infinite="messageGetList" ref="infiniteLoading">
    <span slot="no-more" class="no-more">
    已无数据
    </span>
      <span slot="no-results" class="no-more">
    已无数据
    </span>
    </infinite-loading>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    name: "xitongxiaoxi",
    components: {
      InfiniteLoading
    },
    data() {
      return {
        messageList: "",
        page: 0
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      //系统消息详情
      goSystemNewsDetails(id) {
        this.$router.push({
          name: "xitongxiaoxixiangqing",
          query: {
            id: id
          }
        })
      },
      //  消息列表
      messageGetList() {
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
          type: 1
        };
        this.$merchant.messageGetList(data).then((res) => {
          console.log(res.data.data)
          if (res.data.data.length) {
            var data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i].create_time = this.$time.formattingDate(new Date(data[i].create_time)).slice(11, 16);
            }
            this.messageList = [...this.messageList, ...data];
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.messageGetList();
    }
  }
</script>

<style scoped lang="less">
  .systemNews {
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

    /*系统消息列表*/

    .news {
      width: 702px/2;
      margin: auto;

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
              font-size: 24px/2;
              color: #999;
            }
          }

          .news-bottom {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 465px/2;
            color: #999;
            font-size: 24px/2;
          }
        }
      }
    }
    .no-more {
      color: #666;
      display: block;
      font-size: 14px;
      margin: 10px 0;
    }
  }
</style>
