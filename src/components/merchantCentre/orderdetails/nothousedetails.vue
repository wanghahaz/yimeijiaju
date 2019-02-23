<template>
  <div class="nothousedetails">
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
          <span>预约量房时间</span>
          <span style="color: #999">{{getDetailList.measure_time}}</span>
        </div>
        <!--@click="showSide"-->
        <div class="nothouse-details">
          <span>设计师</span>
          <div class="nothouse-box">
            <span>{{getDetailList.designer_name}}</span>
            <img src="../../../../static/image/index/zuo.png" alt="">
          </div>
        </div>
        <div class="nothouse-details">
          <span>工长</span>
          <div class="nothouse-box">
            <span>{{getDetailList.worker_name}}</span>
            <img src="../../../../static/image/index/zuo.png" alt="">
          </div>
        </div>
        <div class="nothouse-details" @click="goKqManagement">
          <span>客情管理</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
        <div class="nothouse-details" @click="goRemark">
          <span>备注</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
        <div class="nothouse-details" @click="goConsumermessage">
          <span>用户基础信息</span>
          <img src="../../../../static/image/index/zuo.png" alt="">
        </div>
        <div class="nothouse-details" style="border: none;" @click="goSupplementmessage">
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
          <span>{{getDetailList.sh_order_num}}</span>
        </p>
        <p>
          <span>创建时间</span>
          <span>{{getDetailList.create_time}}</span>
        </p>
        <p>
          <span>姓名</span>
          <span>{{getDetailList.name}}</span>
        </p>
        <p>
          <span>电话</span>
          <span>{{getDetailList.tel}}</span>
        </p>
      </div>
    </div>
    <!--<stylist-bar></stylist-bar>-->
  </div>
</template>

<script>
  // import stylistBar from '@/components/merchantCentre/orderdetails/stylistBar.vue'

  export default {
    // components: {
    //   'stylist-bar': stylistBar
    // },
    name: "weiliangfangxiangqing",
    data() {
      return {
        getDetailList: "",
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      //用户基础信息
      goConsumermessage() {
        this.$router.push({
          name: "yonghuxinxi",
          query: {
            id: this.$route.query.id
          }
        })
      },
      //补充信息
      goSupplementmessage() {
        this.$router.push({
          name: "buchongxinxi",
          query: {
            id: this.$route.query.id
          }
        })
      },
      //客情管理
      goKqManagement() {
        this.$router.push({
          name: "keqingguanli",
          query: {
            id: this.$route.query.id
          }
        })
      },
      //备注
      goRemark() {
        this.$router.push({
          name: "beizhu"
        })
      },
      //选择设计师
      // showSide() {
      //   this.$store.dispatch('showStylistBar')
      // },
      //详情
      getDetail() {
        this.$vux.loading.show();
        let data = {
          order_id: this.$route.query.id
        };
        this.$merchant.getDetail(data).then((res) => {
          if (res.code === 200) {
            this.getDetailList = res.data;
            this.getDetailList.create_time = this.$time.formattingDate(new Date(this.getDetailList.create_time)).slice(0, 16);
            this.getDetailList.measure_time = this.$time.formattingDate(new Date(this.getDetailList.measure_time)).slice(0, 16);
            console.log(res.data)
          } else {
            this.$showToast(true, 'text', res.msg);
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getDetail();
    }
  }
</script>

<style scoped lang="less">
  .nothousedetails {
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

          .nothouse-box {
            color: #999;
            display: flex;

            img {
              margin: auto 0 auto 8px;
            }
          }

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
