<template>
  <div class="supplementmessage">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        补充信息
      </div>
    </header>
    <div class="live-white">

    </div>
    <div class="consumermessage-list">
      <div class="consumermessage-box">
        <p>
          <span>是否交房</span>
          <span v-if="supplementDetailList.is_house==1">是</span>
          <span v-else>否</span>
        </p>
        <p>
          <span>交房时间</span>
          <span>{{supplementDetailList.house_time}}</span>
        </p>
        <p>
          <span>预约量房时间</span>
          <span>{{supplementDetailList.measure_time}}</span>
        </p>
        <p class="address" style="border: none;">
          <span>装修具体地址</span>
          <span>{{supplementDetailList.house_detail}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "buchongxinxi",
    data() {
      return {
        supplementDetailList: ""
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      //补充信息
      getSupplementDetail() {
        this.$vux.loading.show();
        let data = {
          order_id: this.$route.query.id
        };
        this.$merchant.getSupplementDetail(data).then((res) => {
          console.log(res.data)
          this.supplementDetailList = res.data;
          this.supplementDetailList.house_time = this.$time.formattingDate(new Date(this.supplementDetailList.house_time)).slice(0, 10);
          this.supplementDetailList.measure_time = this.$time.formattingDate(new Date(this.supplementDetailList.measure_time)).slice(0, 16);
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getSupplementDetail();
    }
  }
</script>

<style scoped lang="less">
  .supplementmessage {
    width: 100%;
    height: 100vh;
    background: #F8F8F8;

    .live-white {
      width: 100%;
      height: 10px;
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

    /*用户信息*/

    .consumermessage-list {
      width: 100%;
      background: white;

      .consumermessage-box {
        width: 702px/2;
        margin: auto;

        p {
          width: 100%;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          display: flex;

          span:first-child {
            width: 200px/2;
            height: 100%;
            color: #666;
          }

          span:last-child {
            height: 100%;
            color: #333;
            margin-left: 30px/2;
          }
        }

        /**
        .address {
          width: 100%;
          height: 123px/2;

          span:first-child {
            width: 230px/2;
            height: 100%;
            color: #666;
          }

          span:last-child {
            height: 100%;
            color: #333;
            line-height: 1.5;
            margin-left: 30px/2;
            margin-top: 10px;
          }
        }
        **/
      }
    }
  }

</style>

