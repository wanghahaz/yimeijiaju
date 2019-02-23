<template>
  <div class="order-container">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        问题分类
      </div>
    </header>
    <div class="order-main">
      <div class="order-list" v-for="item in homeDecorationList" @click="goClassify(item.id)">
        <p>{{item.type_name}}</p>
        <img src="../../../static/image/index/zuo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "choiceclassify",
    data() {
      return {
        homeDecorationList: ""
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      //去二级
      goClassify(id) {
        if (id == "") {
          this.$showToast(true, 'text', '请选择分类');
          return;
        }
        this.$router.push({
          name: "classify",
          query: {
            id: id,
            describe: this.$route.query.describe,
            supplement: this.$route.query.supplement,
            integralNum:this.$route.query.integralNum,
            imgList:this.$route.query.imgList
          }
        })
      },
      getQueType() {
        this.$vux.loading.show();
        let data = {
          pid: 0,
        };
        this.$index.getQueType(data).then((res) => {
          console.log(res.data);
          this.homeDecorationList = res.data;
          this.$vux.loading.hide();
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
  .order-container {
    padding-top: 50px;
    height: 100vh;
    box-sizing: border-box;
    background: #F8F8F8;

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
        width: 12px/2;
        height: 22px/2;
        margin: auto 0;
      }
    }
  }
</style>
