<template>
  <header class="header-container">
    <div class="left">
      <img class="back" src="../../../../../static/image/login/fanhui.png" alt="" @click="goBack">
    </div>
    <div class="title">
      我的关注
    </div>
  </header>
</template>

<script>
  export default {
    name: "onlyBackHeader",
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .header-container {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid #cccccc;
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
      font-size:(36px/2);
    }
  }
</style>
