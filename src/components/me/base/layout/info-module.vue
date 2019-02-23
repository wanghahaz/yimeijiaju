<template>
  <div class="info-module-container">
    <div class="title-container">
      <p class="left">{{title}}</p>
      <p class="right" v-if="isShowMore">查看全部></p>
    </div>

    <div class="custom-view">
      <slot></slot>
    </div>

    <div class="footer-more" v-if="isShowBottomMore">
      <p>查看全部></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "info-module",
    props: {
      title: {
        default: 'title'
      },
      isShowMore: {
        default: false
      },
      isShowBottomMore: {
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .info-module-container {
    padding: 0 (25px/2);
    background-color: white;
    .title-container {
      width: 100%;
      display: table;
      table-layout: fixed;
      padding-top: (50px/2);

      .left {
        font-size: (36px/2);
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        display: table-cell;
      }
      .right {
        width: (200px/2);
        font-size: (28px/2);
        text-align: right;
        display: table-cell;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }

    .custom-view {
      margin-top: (40px/2);
    }

    .footer-more {
      height: (88px/2);
      font-size: (24px/2);
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      text-align: center;
      line-height: (88px/2);
    }
  }
</style>
