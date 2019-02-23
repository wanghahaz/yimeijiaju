<template>
  <div class="orderDetails">
    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        订单详情
      </div>

      <div class="right" @click="cephalosome">
        <img class="search" src="../../../static/image/choicenessstylist/caidan.png" alt="">
      </div>
    </header>
    <!--留白-->
    <div class="leaveWhite">

    </div>
    <!--订单详情列表-->
    <div class="orderDetailsList">
      <div class="orderDetailsList-box">
        <span class="label">订单号</span>
        <span class="value">656568624645</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">创建时间</span>
        <span class="value">2018-01-01</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">姓名</span>
        <span class="value">李某某</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">性别</span>
        <span class="value">男</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">电话</span>
        <span class="value">183 6568 6866</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">建筑面积</span>
        <span class="value">103 ㎡</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">装修类型</span>
        <span class="value">全包装修</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">设计师</span>
        <span class="value">江小白</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">工长</span>
        <span class="value">老李头</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">装修合同金额</span>
        <span class="value">99999</span>
      </div>
      <div class="orderDetailsList-box">
        <span class="label">地址</span>
        <span class="value">北京市朝阳区康家园12号楼</span>
      </div>
    </div>
		<div class="cephalosome" v-show="cephalosomeBol" @click="closecephalosome" @touchmove.prevent>
			<div class="cephalosomebox">
				<div class="cephalosomeboxlist" @click="goIndex">
					<img src="../../../static/image/me/syyy.png"/> 首页
				</div>
				<div class="cephalosomeboxlist" @click="goStore">
					<img src="../../../static/image/me/hlll.png"/> 积分换礼
				</div>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: "dingdanxiangqing",
    data() {
      return {
				cephalosomeBol: false, //头部菜单模态框
			}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
			// 关闭头部菜单登录模态框
			closecephalosome() {
				this.cephalosomeBol = false;
			},
			//去往积分换礼
			goStore() {
				this.$router.push({
					name: "jifenhuanli"
				})
			},
			cephalosome() {
				this.cephalosomeBol = true;
			},
			//去往首页
			goIndex() {
				this.$router.push({
					name: "index"
				})
			},
    }
  }
</script>

<style scoped lang="less">
  .orderDetails {
    width: 100%;
    height: 100vh;
    background: #F8F8F8;

    .header-container {
      position: fixed;
      top: 0;
      z-index: 10;
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
          width: 19px/2;
          height: 32px/2;
        }
      }

      .title {
        display: table-cell;
        text-align: center;
        font-size: 36px/2;
      }

      .right {
        display: table-cell;
        padding-right: 12.5px;
        text-align: right;

        img {
          width: 44px/2;
          height: 32px/2;
        }
      }
    }

    .leaveWhite {
      width: 100%;
      height: 10px;
      background: #F8F8F8;
      margin-top: 50px;
    }

    .orderDetailsList {
      background: white;

      .orderDetailsList-box {
        width: 702px/2;
        margin: auto;
        font-size: 28px/2;
        display: flex;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(238, 238, 238, 1);

        .label {
          width: 169px/2;
          color: #666;
          margin-right: 39px/2;
        }

        .value {
          color: #333;
        }
      }
    }
		// 头部模态框
		    .cephalosome {
		      overflow: hidden;
		      position: fixed;
		      top: 0;
		      left: 0;
		      width: 100%;
		      height: 100%;
		      background-color: rgba(0, 0, 0, 0.1);
		      z-index: 99;
          -webkit-tap-highlight-color:transparent;
		
		      .cephalosomebox {
		        width: 240px/2;
		        background: rgba(255, 255, 255, 1);
		        position: relative;
		        top: 98px/2;
		        left: 486px/2;
		
		        .cephalosomeboxlist {
		          width: 240px/2;
		          height: 88px/2;
		          border-bottom: 1px solid #E7E7E7;
		          margin: auto;
		          line-height: 88px/2;
		          font-size: 28px/2;
		          color: rgba(51, 51, 51, 1);
		
		          img {
		            width: 32px/2;
		            height: 36px/2;
		            margin-right: 20px/2;
		            margin-left: 22px/2;
		            vertical-align: middle;
		          }
		        }
		      }
		    }
  }
</style>
