<template>
  <div class="consumermessage">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        用户基本信息
      </div>
    </header>
    <div class="live-white">

    </div>
    <div class="consumermessage-list">
      <div class="consumermessage-box">
        <p>
          <span>城市</span>
          <span>{{userDetailList.province_name}} {{userDetailList.city_name}}</span>
        </p>
        <p>
          <span>位置</span>
          <span>{{userDetailList.district_name}}</span>
        </p>
        <p>
          <span>姓名</span>
          <span>{{userDetailList.customer_name}}</span>
        </p>
        <p>
          <span>建筑面积</span>
          <span>{{userDetailList.acreage}}㎡</span>
        </p>
        <p>
          <span>小区</span>
          <span>{{userDetailList.village}}</span>
        </p>
        <p>
          <span>房屋类型</span>
          <span>{{userDetailList.room_name}}</span>
        </p>
        <p>
          <span>户型</span>
          <span>{{userDetailList.house_name}}</span>
        </p>
        <p>
          <span>装修类型</span>
          <span>{{userDetailList.decorate_type_name}}</span>
        </p>
        <p style="border: none;">
          <span>装修预算</span>
          <span>{{userDetailList.demand_level_name}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "yonghuxinxi",
    data() {
      return {
        userDetailList: "",
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      //个人信息
      getUserDetail() {
        this.$vux.loading.show();
        let data = {
          order_id: this.$route.query.id
        };
        this.$merchant.getUserDetail(data).then((res) => {
          console.log(res)
          this.userDetailList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getUserDetail();
    }
  }
</script>

<style scoped lang="less">
  .consumermessage {
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
            width: 130px/2;
            height: 100%;
            color: #666;
          }

          span:last-child {
            height: 100%;
            color: #333;
            margin-left: 80px/2;
          }
        }
      }
    }
  }

</style>
