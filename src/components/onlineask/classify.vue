<template>
  <div class="order-container">
    <!--<header class="header-container">-->
    <!--<div class="left">-->
    <!--<img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">-->
    <!--</div>-->
    <!--<div class="title">-->
    <!--问题分类-->
    <!--</div>-->
    <!--</header>-->
    <div class="headernavigation">
      <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      问题分类
      <div class="right" @click="addQues">
        提交
      </div>
    </div>
    <div class="order-main">
      <div class="order-list" v-for="item in homeDecorationList" @click="handleImg(item)">
        <p>{{item.type_name}}</p>
        <img src="../../../static/image/me/dg.png" alt="" v-show="imgId==item.id">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "classify",
    data() {
      return {
        homeDecorationList: "",
        imgId: ""
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      getQueType() {
        this.$vux.loading.show();
        let data = {
          pid: this.$route.query.id,
        };
        this.$index.getQueType(data).then((res) => {
          console.log(res.data);
          this.homeDecorationList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      handleImg(item) {
        this.imgId = item.id;
      },
      //提问
      addQues(e) {
        if (this.imgId == "") {
          this.$showToast(true, 'text', '请选择分类');
          return;
        }
        this.$vux.loading.show();
        let data = {
          inter_title: this.$route.query.describe,
          inter_content: this.$route.query.supplement,
          type_id: this.imgId,
          integral_num: this.$route.query.integralNum,
          inter_imgs: this.$route.query.imgList,
          user_id: localStorage.userId,
          shop_id: ""
        };
        this.$index.addQues(data).then((res) => {
          if (res.status == "200") {
            this.$showToast(true, 'text', res.message);
            this.$router.push({
              name: "zaixianwendadajiadouzaikan"
            });
            this.$vux.loading.hide();
          } else {
            this.$showToast(true, 'text', res.message);
            this.$vux.loading.hide();
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getQueType()
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/header.less";

  .order-container {
    padding-top: 50px;
    height: 100vh;
    box-sizing: border-box;
    background: #F8F8F8;

    .right {
      margin-right: 12px;
      color: #666;
    }

    .order-main {
      background: white;
      margin-top: 5px;
    }

    .order-list {
      font-size: 28px/2;
      width: 702px/2;
      height: 99px/2;
      line-height: 99px/2;
      margin: auto;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(238, 238, 238, 1);

      img {
        width: 26px/2;
        height: 17px/2;
        margin: auto 0;
      }
    }
  }
</style>
