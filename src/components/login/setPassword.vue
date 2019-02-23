<template>
  <div class="setPassword-box">
    <p>首次登录设置密码</p>
    <!--文本框-->
    <div>
      <input type="password" placeholder="请输入密码" class="cipher"/>
      <input type="password" placeholder="请再次确认" class="cipher" style="margin-top: 24px"/>
      <span>确定</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "setPassword"
  }
</script>

<style scoped lang="less">
  .setPassword-box {
    width: 100%;
    margin-top: 20px/2;

    p {
      font-size: 28px/2;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 104px/2;
      margin-left: 24px/2;
    }

    /*文本框*/

    div {
      width: 702px/2;
      margin: auto;

      .cipher {
        width: 100%;
        height: 88px/2;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(204, 204, 204, 1);
        border-radius: 8px/2;
        text-indent: 20px/2;
        font-size: 28px/2;
      }

      span {
        display: block;
        width: 100%;
        height: 88px/2;
        background: rgba(255, 90, 0, 1);
        border-radius: 8px/2;
        text-align: center;
        line-height: 88px/2;
        font-size: 28px/2;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        margin-top: 60px/2;
      }
    }
  }
</style>
