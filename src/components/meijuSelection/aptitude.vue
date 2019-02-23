<template>
  <div class="aptitude">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        店铺资质
      </div>
    </header>


    <img :src="aptitudeImg" alt="">
  </div>
</template>

<script>
  export default {
    name: "dianpuzizhi",
    data() {
      return {
        aptitudeImg: ""
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
    },
    mounted() {
      this.aptitudeImg = this.$imgSrc + this.$route.query.img;
      console.log(this.aptitudeImg)
    }
  }
</script>

<style scoped lang="less">
  .aptitude {
    width: 100%;
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
    img{
      width: 100%;
      height: auto;
      margin-top: 44px;
    }
  }
</style>
