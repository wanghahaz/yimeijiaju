<template>
  <div class="remark">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        备注
      </div>
    </header>
    <div class="live-white">

    </div>
    <div class="textarea">
      <x-textarea placeholder="请输入备注内容" autosize></x-textarea>
    </div>
    <footer>
      确认
    </footer>
  </div>
</template>

<script>
  import {XTextarea} from 'vux'

  export default {
    name: "remark",
    components: {
      XTextarea
    },
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped lang="less">
  .remark {
    width: 100%;

    .live-white {
      width: 100%;
      background: #F8F8F8;
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

    .textarea {
      font-size: 14px;
    }

    footer {
      width: 100%;
      height: 100px/2;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.1);
      position: fixed;
      bottom: 0;
      font-size: 14px;
      color: #E95504;
      font-weight: bold;
      line-height: 50px;
      text-align: center;
    }
  }
</style>
