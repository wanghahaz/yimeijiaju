<template>
  <div class="upload-order-container">
    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        合同上传
      </div>

      <div class="right">
        <img class="search" src="../../../static/image/choicenessstylist/caidan.png" alt="">
      </div>
    </header>
    <div class="live-white">

    </div>
    <div class="upload-from">
      <div class="image-container">
        <img class="previewer-demo-img" v-for="(item, index) in list" v-lazy="item.src" @click="show(index)">
      </div>
      <div>
        <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
      </div>


      <div class="upload-button-container">
        <div class="upload-button">
          <img class="search" src="../../../static/image/me/jiahao.png" alt="">
        </div>
      </div>

      <div class="price-container">
        <div class="price-item">
          <span>订单金额</span>
          <div>
            <input type="text">
            <p>元</p>
          </div>
        </div>
        <div class="price-item">
          <span>合同金额</span>
          <div>
            <input type="text">
            <p>元</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Previewer from "vux/src/components/previewer/index";

  export default {
    name: "uploadOrder",
    components: {Previewer},
    data() {
      return {
        list: [{
          msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          w: 800,
          h: 400
        },
          {
            msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
            src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
            w: 1200,
            h: 900
          }, {
            msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
            src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
          },
          {
            msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
            src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
          }
          , {
            msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
            src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
          }],
        options: {
          getThumbBoundsFn(index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }
      }
    },
    methods: {
      logIndexChange(arg) {
        (arg)
      },
      show(index) {
        this.$refs.previewer.show(index)
      },
      goBack() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped lang="scss">

  @import "../../../static/css/var";

  .upload-order-container {
    @extend .baseBox;

    .upload-from {
      margin-top: 10px;
      padding: 15px (25px/2);
      background-color: white;
      min-height: (170px/2);
      height: 100%;

      .image-container {
        box-sizing: border-box;

        img {
          margin-top: (10px/2);
          box-sizing: border-box;
          width: 25%;
          padding: 0 5px;
          height: (170px/2);
          border-radius: 4px;
        }
      }

      .upload-button {
        margin-top: (20px/2);
        img{
          width:25%;
          height: auto;
        }
      }

      .price-container {
        margin-top: (60px/2);

        .price-item {
          border-bottom: 1px solid #f2f2f2;
          height: (125px/2);
          line-height: (125px/2);
          width: 100%;
          font-size: (30px/2);
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          display: flex;
          justify-content: space-between;
          input{
            width: 95%;
            font-size: (30px/2);
            text-indent: 3rem;
          }
          div{
            text-align: right;
            display: flex;
          }
        }
      }
    }

    .header-container {
      position: fixed;
      top: 0;
      z-index: 1000;
      width: 100%;
      border-bottom: 1px solid #cccccc;
      height: 44px;
      line-height: 44px;
      display: table;
      table-layout: fixed;
      background-color: white;

      .left {
        display: table-cell;
        text-align: left;
        padding-left: 12.5px;

        img {
          margin-top: 15px;
          width: (19px/2);
          height: (32px/2);
        }
      }

      .title {
        display: table-cell;
        text-align: center;
        font-size: (36px/2);
      }

      .right {
        display: table-cell;
        padding-right: 12.5px;
        text-align: right;

        img {
          width: (44px/2);
          height: (32px/2);
        }
      }
    }

    .live-white {
      width: 100%;
      height: 5px;
      background: #f8f8f8;
    }
  }
</style>
