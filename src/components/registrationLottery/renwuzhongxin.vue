<template>
  <!--任务中心-->
  <div class="renwu_container">
    <!--头部-->
    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        任务中心
      </div>

      <a class="right" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
        <img class="search" src="../../../static/image/active/kfff.png" alt="">
      </a>
    </header>
    <!--任务中心-->
    <h2>任务中心</h2>
    <!--积分-->
    <div class="integral">
      <div class="integral_left">
        <img src="../../../static/image/jifen/首次发布活动.png" alt="">
        <span>首次发布内容</span>
      </div>
      <div class="integral_right">
        <span>+<span>20</span>积分</span>
      </div>
    </div>
    <!--浏览活动赚取金币-->
    <div class="integral">
      <div class="integral_left">
        <img src="../../../static/image/jifen/浏览活动.png" alt="">
        <span>浏览活动赚取金币</span>
      </div>
      <div class="integral_right">
        <span>+<span>20</span>积分</span>
      </div>
    </div>
    <!--首次回答问题-->
    <div class="integral" style="border: none;">
      <div class="integral_left">
        <img src="../../../static/image/jifen/首次回答问题.png" alt="">
        <span>首次回答问题</span>
      </div>
      <div class="integral_right">
        <span>+<span>20</span>积分</span>
      </div>
    </div>
    <!--图片-->
    <img src="../../../static/image/jifen/活动抽奖.png" alt="" class="activity" @click="goLottery">
  </div>
</template>

<script>
  export default {
    name: "renwuzhongxin",
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      //去抽奖
      goLottery() {
        this.$router.push({
          name: "choujiang"
        })
      }
    },
  }
</script>

<style scoped lang="less">
  @import url(./renwuzhongxin.less);
</style>
