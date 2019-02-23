<template>
  <div class="registrationLottery">
    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        注册抽奖
      </div>

      <a class="right" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
        <img class="search" src="../../../static/image/active/kfff.png" alt="">
      </a>
    </header>
    <span class="enroll">已有 <a href="javascript:;" style="color: #FFFF00">1680</a> 人注册</span>
    <div class="img-list">
      <img class="imgOne" src="../../../static/image/registrationLottery/one.png" alt="">
      <img src="../../../static/image/registrationLottery/two.png" alt="">
      <img src="../../../static/image/registrationLottery/three.png" alt="">
      <img class="imgFour" src="../../../static/image/registrationLottery/four.png" alt="">
      <img src="../../../static/image/registrationLottery/five.jpg" alt="">
      <img @click="handleLogin" class="imgTwo" src="../../../static/image/registrationLottery/seven.png" alt="">
      <img class="imgThree" src="../../../static/image/registrationLottery/eight.png" alt="">
    </div>


    <div class="activityWords">
      <p>1.美居积分仅限在美居精选积分换礼频道兑换商品，不支持提现。</p>
      <p>2.从前1万名注册用户中抽10人平分十万美居积分，抽奖结束后会在网站公布中奖结果，积分直接空投至注册账户。</p>
      <p>3.注册即送200积分，每次分享即送30积分，成功邀请好友注册再送600积分。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "zhucechoujiang",
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      handleLogin(){
        this.$router.push({
          name:"login"
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "registrationLottery";
</style>
