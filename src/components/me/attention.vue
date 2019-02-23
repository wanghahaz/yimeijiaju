<template>
  <div class="attention-container">
    <only-back-header></only-back-header>

    <tab active-color="#E95504" default-color="#333333" custom-bar-height="150px">
      <tab-item selected @on-item-click="onItemClick">推荐</tab-item>
      <tab-item @on-item-click="onItemClick">已关注</tab-item>
      <tab-item @on-item-click="onItemClick">经常访问</tab-item>
    </tab>

    <div class="search-box">
      <img src="../../../static/image/me/ss.png" alt="">
      <input type="text" placeholder="搜全部关注">
      <span>全部</span>
    </div>

    <div class="list-container">
      <ul>
        <li v-for="item in 10">
          <div class="head">
            <img src="../../../static/image/login/mao.jpg" alt="">
          </div>
          <div class="name">
            <span>已经停了一百八</span>
          </div>
          <div class="button">
            <button>关注</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Tab from "vux/src/components/tab/tab";
  import TabItem from "vux/src/components/tab/tab-item";
  import OnlyBackHeader from "./base/header/onlyBackHeader";

  export default {
    name: "gerenzhongxinguanzhu",
    components: {OnlyBackHeader, TabItem, Tab},
    methods: {
      onItemClick(index) {
        console.log(index)
      },
      //我的关注
      myAd() {
        this.$vux.loading.show();
        let data = {
          "userid": localStorage.userId
        };
        this.$index.myAttention(data).then(r => {
          console.log(r);
          this.$vux.loading.hide();
        })
      },
    },
    mounted() {
      this.myAd();
    }
  }
</script>

<style scoped lang="scss">
  .attention-container {
    padding-top: (88px/2);
    background: rgb(248, 248, 248);
  }

  .vux-tab-wrap {
    margin-top: (10px/2);
  }

  .vux-tab-item {
    font-weight: bold;
  }

  .search-box {
    padding: 21px 0 15px 11px;
    background: white;
    font-size: (32px/2);
    display: flex;
    justify-content: space-between;
    position: relative;

    img {
      position: absolute;
      width: 18px;
      height: 18px;
      top: (69px/2);
      left: (55px/2);
    }

    input {
      width: (560px/2);
      height: (90px/2);
      border: 1px solid rgba(222, 222, 222, 1);
      border-radius: (45px);
      text-indent: (93px/2);
      font-size: (32px/2);
    }

    span {
      line-height: (90px/2);
      margin-right: 14px;
      color: #E95504;
    }
  }

  .list-container {
    padding: 0 (25px/2);
    background-color: white;

    ul li {
      height: (160px/2);
      line-height: (160px/2);
      border-bottom: 1px solid #F2F2F2;

      .head {
        display: inline-block;
        margin-left: (21px/2);
        border-radius: 50%;
        border: 1px solid #cccccc;
        vertical-align: middle;
        height: (100px/2);
        width: (100px/2);

        img {
          width: 100%;
          border-radius: 50%;
          height: 100%;
        }
      }

      .name {
        display: inline-block;
        margin-left: (40px/2);
        max-width: (200px/2);
        font-size: (32px/2);
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: (25px/2);
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .button {
        display: inline-block;
        width: (120px/2);
        float: right;

        button {
          width: (120px/2);
          height: (60px/2);
          background: rgba(233, 85, 4, 1);
          border-radius: (30px/2);
          font-size: (28px/2);
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: (25px/2);
        }
      }
    }

  }

</style>
