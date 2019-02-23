<template>
  <div class="order-item-container">
    <div class="item-header">
      <p>装修公司名称 ></p>
      <div class="icon-container">
        <span><img src="../../../../../static/image/selection/kf.png" alt=""></span>
      </div>
    </div>
    <div class="item-content">
      <div class="left">
        <img src="../../../../../static/image/login/mao.jpg" alt="">
      </div>
      <div class="right">
        <p class="title">某某小区</p>
        <p class="desc">
          <span>面积: 108 ㎡</span>
          <span>风格: 现代简约</span>
          <br>
          <span>2018-11-11</span>
        </p>

        <p class="price-container">
          <span class="price-label">合同价格:</span>
          <span class="price">￥68000</span>
        </p>
      </div>
    </div>
    <div class="item-footer">
      <button @click="goOrderDetails()">查看订单</button>
      <button @click="goUploadOrder">上传合同</button>
      <button>评价</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "orderItem",
    methods: {
      //查看订单
      goOrderDetails() {
        this.$router.push({
          name:"dingdanxiangqing"
        })
      },
      //上传合同
      goUploadOrder(){
        this.$router.push({
          name:"hetongshangchuan"
        })
      },
			//我的订单
			OrderInfo(){
				let data = {
					userid: localStorage.userId
				};
				this.$index.OrderInfo(data).then(r => {
					console.log(r)
				})
			}
    },
		mounted(){
			this.OrderInfo()
		}
  }
</script>

<style scoped lang="scss">
  .order-item-container {
    width: 100%;
    background-color: white;
    margin-top: (10px/2);
    padding: 0 (23px/2);
    box-sizing: border-box;
    padding-bottom: (20px/2);

    .item-header {
      font-size: (32px/2);
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: (60px/2);
      padding-top: (30px/2);
      display: table;
      table-layout: fixed;
      width: 100%;

      p {
        display: table-cell;
      }

      .icon-container {
        display: table-cell;
        text-align: right;

        img {
          width: (32px/2);
          height: (36px/2);
        }
      }
    }

    .item-content {
      margin-top: (50px/2);
      display: table;
      table-layout: fixed;
      width: 100%;
      box-sizing: border-box;

      .left {
        width: (240px/2);
        display: table-cell;
        text-align: left;

        img {
          width: (200px/2);
          height: (200px/2);
          border-radius: (8px/2);
        }
      }

      .right {
        display: table-cell;
        vertical-align: top;

        .title {
          font-size: (28px/2);
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: (40px/2);
        }

        .desc {
          font-size: (24px/2);
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: (40px/2);
          margin-top: (10px/2);

          span {
            display: inline-block;
            padding-right: 20px;
          }
        }

        .price-container {
          font-size: (24px/2);
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-top: (30px/2);
          line-height: (45px/2);

          .price {
            font-size: (36px/2);
            font-weight: bold;
            color: rgba(233, 79, 19, 1);
          }
        }
      }
    }

    .item-footer {
      margin-top: (40/2);
      text-align: right;

      button {
        width: (170px/2);
        height: (60px/2);
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(204, 204, 204, 1);
        border-radius: (30px/2);
        margin-top: (30px/2);

        font-size: (24px/2);
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: (15px/2);

        &:hover {
          border: 1px solid #E95504;
          color: #E95504;
        }
      }
    }
  }
</style>
