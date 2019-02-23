<template>
  <div class="lookContract">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        查看合同
      </div>
    </header>
    <div class="image-container">
      <img class="previewer-demo-img" v-for="(item, index) in imgList" :src="'http://image.meijujingxuan.com/'+item.contract_img" @click="previewImage">
    </div>
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer"></previewer>
    </div>
  </div>
</template>

<script>
  import {Previewer, TransferDom} from 'vux';

  export default {
    name: "lookContract",
    directives: {
      TransferDom
    },
    components: {Previewer},
    data() {
      return {
        imgList:[],
        list: [],
      }
    },
    methods: {
      //图片点击放大
      previewImage(e) {
        if (e.target.nodeName == 'IMG') {
          let url = e.target.currentSrc;
          let item = {
            src: url
          };
          this.list.length = 0;
          this.list.push(item);
          console.log(this.imgList)
          this.$refs.previewer.show(0);
        } else {
          return;
        }
      },
      goBack() {
        this.$router.go(-1)
      },
      //合同图片
      OrderContractgetList() {
        this.$vux.loading.show();
        let data = {
          order_id: this.$route.query.id
        };
        this.$merchant.OrderContractgetList(data).then((res) => {
          console.log(res)
          this.imgList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.OrderContractgetList()
    }
  }
</script>

<style scoped lang="less">
  .lookContract {
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
      border-bottom: 1px solid rgba(231, 231, 231, 1);

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

    .image-container {
      margin: 48px auto 0;
      width: 702px/2;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      img {
        width: 226px/2;
        height: 226px/2;
        margin-top: 6px;
      }
    }
  }
</style>
