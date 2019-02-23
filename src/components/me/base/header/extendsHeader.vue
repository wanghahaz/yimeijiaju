<template>
	<div>
		<header class="header-container">
			<div class="left" @click="goBack">
				<img class="back" src="../../../../../static/image/login/fanhui.png" alt="">
			</div>

			<div class="title">
				订单管理
			</div>

			<div class="right" @click="cephalosome">
				<img class="search" src="../../../../../static/image/choicenessstylist/caidan.png" alt="">
			</div>
		</header>
		<div class="cephalosome" v-show="cephalosomeBol" @click="closecephalosome" @touchmove.prevent>
			<div class="cephalosomebox">
				<div class="cephalosomeboxlist" @click="goIndex">
					<img src="../../../../../static/image/index/denglu.png" /> 首页
				</div>
				<div class="cephalosomeboxlist" @click="goStore">
					<img src="../../../../../static/image/index/huanli.png" /> 积分换礼
				</div>
				<div class="cephalosomeboxlist">
					<img src="../../../../../static/image/index/zaixian.png" /> 在线客服
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "extendsHeader",
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

<style scoped lang="scss">
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

		.cephalosomebox {
			width: (240px/2);
			background: rgba(255, 255, 255, 1);
			position: relative;
			top: (98px/2);
			left: (486px/2);

			.cephalosomeboxlist {
				width: (240px/2);
				height: (88px/2);
				border-bottom: 1px solid #E7E7E7;
				margin: auto;
				line-height: (88px/2);
				font-size: (28px/2);
				color: rgba(51, 51, 51, 1);

				img {
					width: (32px/2);
					height: (36px/2);
					margin-right: (20px/2);
					margin-left: (22px/2);
					vertical-align: middle;
				}
			}
		}
	}
</style>
