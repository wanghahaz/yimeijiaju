<template>
  <div class="nothouse">
    <header class="header-container" @touchmove.prevent>
      <div class="left" @click="goBack">
        <img class="back" src="../../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        未量房
      </div>

      <div class="right" @click="goOrderSeek">
        <img class="search" src="../../../../static/image/choicenessstylist/tousousu.png" alt="">
      </div>
    </header>
    <div class="live-white">

    </div>
    <div class="nothouse-list" v-for="item in orderList">
      <span class="examine" @click="goNotHouseDetails(item.order_id)">查看订单</span>
      <div class="nothouse-top">
        <span>订单号：{{item.sh_order_num}}</span>
        <span>{{item.create_time}}</span>
      </div>
      <div class="nothouse-bottom">
        <img :src="item.head_img" alt="">
        <div class="nothouse-bottom-main">
          <div class="nothouse-bottom-one">
            <span>{{item.name}}</span>
            <span>电话：{{item.tel}}</span>
          </div>
          <div class="nothouse-bottom-two">
            <span>{{item.village}}</span>
            <span>{{item.acreage}}㎡</span>
            <span>{{item.house_name}}</span>
            <span>{{item.style_name}}</span>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading :on-infinite="orderGetList" ref="infiniteLoading">
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
    name: "weiliangfang",
    components: {
      InfiniteLoading
    },
    data() {
      return {
        orderList: "",
        page: 0
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      //搜索
      goOrderSeek() {
        this.$router.push({
          name: "orderSeek"
        })
      },
      //未量房详情
      goNotHouseDetails(id) {
        this.$router.push({
          name: "weiliangfangxiangqing",
          query: {
            id: id
          }
        })
      },
      //未量房列表
      orderGetList() {
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
          status: 3
        };
        this.$merchant.orderGetList(data).then((res) => {
          if (res.data.data.length) {
            var data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i].create_time = this.$time.formattingDate(new Date(data[i].create_time)).slice(0, 16);
              data[i].head_img = this.$imgSrc + data[i].head_img
            }
            this.orderList = [...this.orderList, ...data];
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
      this.orderGetList()
    }
  }
</script>

<style scoped lang="less">
  .nothouse {
    width: 100%;
    height: 100%;
    background: #F8F8F8;

    .live-white {
      width: 100%;
      background: #F8F8F8;
      height: 5px;
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

    /*未量房列表*/

    .nothouse-list {
      margin-top: 5px;
      background: white;
      width: 100%;
      height: 308px/2;
      position: relative;

      .nothouse-top {
        padding: 15px 0 10px;
        display: flex;
        justify-content: space-between;

        span:first-child {
          margin-left: 12px;
          font-size: 14px;
        }

        span:last-child {
          margin-right: 12px;
          margin-top: 5px;
          font-size: 12px;
          color: #999;
        }
      }

      .nothouse-bottom {
        width: 100%;
        height: 60px;
        background: rgba(250, 250, 250, 1);
        display: flex;

        img {
          width: 90px/2;
          height: 90px/2;
          border-radius: 50%;
          margin: auto 10px auto 12px;
        }

        .nothouse-bottom-main {
          margin: auto 0;
          display: flex;
          flex-direction: column;

          .nothouse-bottom-one {
            margin-bottom: 9px;
            font-size: 14px;
            color: #333;

            span:first-child {
              margin-right: 8px;
            }
          }

          .nothouse-bottom-two {
            display: flex;
            font-size: 12px;
            color: #999;

            span {
              margin-left: 8px;
            }

            span:first-child {
              margin: 0;
            }
          }
        }
      }

      .examine {
        position: absolute;
        bottom: 10px;
        right: 12px;
        width: 170px/2;
        height: 60px/2;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(233, 85, 4, 1);
        border-radius: 30px/2;
        text-align: center;
        line-height: 30px;
        color: #E95504;
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
