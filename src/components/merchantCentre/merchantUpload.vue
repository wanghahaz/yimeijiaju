<template>
  <div class="upload-order-container">
    <header class="header-container">
      <div class="left" @click="goBack">
        取消
      </div>

      <div class="title">
        合同上传
      </div>

      <div class="right" @click="OrderContract">
        提交
      </div>
    </header>
    <div class="upload-from">
      <div class="image-container">
        <img class="previewer-demo-img" v-for="item in imgList" :src="'http://image.meijujingxuan.com/'+item"
             @click="previewImage">
      </div>
      <div v-transfer-dom>
        <previewer :list="list" ref="previewer"></previewer>
      </div>

      <div class="upload-button-container">
        <div class="upload-button">
          <input type="file" accept="image/jpg,image/png" @change="OrderContractImg">
          <img class="search" src="../../../static/image/me/jiahao.png" alt="">
        </div>
      </div>

      <div class="price-container">
        <div class="price-item">
          <span>定金金额</span>
          <div>
            <input type="text" v-model="alreadyAmount">
            <p>元</p>
          </div>
        </div>
        <div class="price-item">
          <span>合同金额</span>
          <div>
            <input type="text" v-model="contractAmount">
            <p>元</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Previewer, TransferDom} from 'vux';

  export default {
    name: "merchantUpload",
    directives: {
      TransferDom
    },
    components: {Previewer},
    data() {
      return {
        imgList: [],
        list: [],
        alreadyAmount: "",
        contractAmount: "",
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
      //合同上传
      OrderContractImg(e) {
        this.$vux.loading.show();
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('file', file);//通过append向form对象添加数据
        this.$merchant.OrderContractImg(param).then((res) => {
          this.imgList.push(res.data);
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //提交
      OrderContract() {
        this.$vux.loading.show();
        let data = {
          order_id: this.$route.query.id,
          contract_path: this.imgList,
          already_amount: this.alreadyAmount,
          contract_amount: this.contractAmount
        };
        this.$merchant.OrderContract(data).then((res) => {
          console.log(res);
          if (res.code === 200) {
            this.$router.push({
              name: "qiandanchenggong"
            })
          } else {
            this.$showToast(true, 'text', res.msg);
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
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
        height: auto;

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
        position: relative;
        margin-top: (20px/2);

        img {
          width: 25%;
          height: auto;
        }

        input {
          opacity: 0;
          position: absolute;
          width: (175px/2);
          height: (175px/2);
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

          input {
            width: 95%;
            font-size: (30px/2);
            text-indent: 3rem;
          }

          div {
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
        font-size: 16px;
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
        font-size: 16px;
      }
    }
  }
</style>
