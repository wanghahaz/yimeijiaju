<template>
  <div class="comment-list-container">
    <div class="comment-list-item" v-for="item in 3">
      <div class="header">
        <div class="left">
          <img src="http://img5.imgtn.bdimg.com/it/u=3574511492,2028302893&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="center">
          <p class="name">
            张三
          </p>
          <p class="desc">
            2018-11-27 | 华润长安中心 | 90
          </p>
        </div>
        <div class="right">
          <p>{i}私信</p>
        </div>
      </div>

      <div class="content">
        <p>装修工人素质很高，设计师也是很负责的，尊重个人意见
          的同时从专业角度进行完善。</p>
      </div>

      <div class="action-container">
        <button>评论</button>
        <button>5</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "comment-list"
  }
</script>

<style scoped lang="scss">
  .comment-list-container {
    .comment-list-item {
      border-bottom: 1px solid #F8F8F8;
      padding-bottom: 20px;
      .header {
        width: 100%;
        display: table;
        table-layout: fixed;
        .left {
          display: table-cell;
          vertical-align: middle;
          width: (60px/2);
          img {
            width: (60px/2);
            height: (60px/2);
            border-radius: 50%;
          }
        }
        .center {
          display: table-cell;
          padding: 0 (20px/2);
          vertical-align: top;
          box-sizing: border-box;
          .name {
            font-size: (28px/2);
            font-family: MicrosoftYaHei;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
          .desc {
            font-size: (24px/2);
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            margin-top: (16px/2);
          }
        }
        .right {
          width: (100px/2);
          display: table-cell;
          font-size: (24px/2);
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(233, 85, 4, 1);
        }
      }
      .content {
        font-size: (28px/2);
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        padding: (30px/2) 0;
        line-height: (48px/2);
      }
      .action-container {
        width: 100%;
        text-align: right;
        button {
          width: (120px/2);
          height: (50px/2);
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(219, 219, 219, 1);
          border-radius: (25px/2);

          font-size: (24px/2);
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
</style>
