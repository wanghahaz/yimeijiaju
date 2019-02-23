<template>
  <div class="order-container">
    <extends-header></extends-header>
    <div class="order-main">
      <div class="order-list">
        <p>积分换礼订单</p>
        <img src="../../../static/image/index/zuo.png" alt="">
      </div>
      <div class="order-list" style="border: none" @click="goOrderList">
        <p>装修订单</p>
        <img src="../../../static/image/index/zuo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import ExtendsHeader from "./base/header/extendsHeader";

  export default {
    name: "dingdanguanli",
    components: {ExtendsHeader},
    data() {
      return {
				cephalosomeBol: false, //头部菜单模态框
			}
    },
    methods: {
      goOrderList() {
        this.$router.push({
          name: "zhuangxiudingdan"
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .order-container {
    padding-top: 50px;
    height: 100vh;
    box-sizing: border-box;
    background: #F8F8F8;

    .order-main {
      background: white;
    }

    .order-list {
      font-size: 28px/2;
      width: 702px/2;
      height: 99px/2;
      line-height: 99px/2;
      margin: 10px auto 0;
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
