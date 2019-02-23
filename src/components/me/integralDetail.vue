<template>
	<div class="integralDetail">
		<div class="mark" v-show="isMark" @click="isMark=false"></div>
		<header class="header-container">
			<div class="left">
				<img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
			</div>
			<div class="title">
				积分明细
			</div>
		</header>
		<div class="hold"></div>
		<!--留白-->
		<div class="live-white" v-show="!isMark">

		</div>
		<!--记录-->
		<div class="record">
			<div class="top">
				<div class="left" :class="type==1?'active':''" @click="showMark(1)">
					所有记录 <img v-if="isMark&&(type==1)" src="../../../static/image/z/下拉2.png" />
					<img v-else src="../../../static/image/selection/xiala.png" alt="">
				</div>
				<div class="center">

				</div>
				<div class="right" :class="type==2?'active':''" @click="showMark(2)">
					近3个月<img v-if="isMark&&(type==2)" src="../../../static/image/z/下拉2.png" />
					<img v-else src="../../../static/image/selection/xiala.png" alt="">
				</div>
			</div>
			<div class="bottom" v-show="isMark&&type==1">
				<div v-for="item in chageType" :key="item.id" @click="changeTrue(item.id)">
					<span>{{item.name}}</span><img v-show="id_1==item.id" src="../../../static/image/z/icon选中.png" />
				</div>
			</div>
			<div class="bottom" v-show="isMark&&type==2">
				<div v-for="item in chageType" :key="item.id" @click="changeTrue(item.id)">
					<span>{{item.name}}</span><img v-show="id_2==item.id" src="../../../static/image/z/icon选中.png" />
				</div>
			</div>

		</div>
		<!--积分规则-->
		<div class="live-black">
			<p>本月</p>
			<span @click="goDetail">积分规则 <img src="../../../static/image/selection/wh.png" alt=""></span>
		</div>

		<div class="particulars">
			<div class="particulars-list" v-for="item in dataArr">
				<div class="particulars-main">
					<span>{{item.handle_time.slice(0,11)}}</span>
					<div class="particulars-one">
						<!--<img src="../../../static/image/selection/deng.png" alt="">-->
						<p>{{item.integral_type}}</p>
					</div>
				</div>
				<span class="integral">+{{item.integral_num}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "jifenmingxi",
		data() {
			return {
				dataArr:[],
				chageType: [{
						id: 1,
						name: '所有记录'
					},
					{
						id: 2,
						name: '获取记录'
					},
					{
						id: 3,
						name: '使用记录'
					}
				],//下来选项
				isMark: false,//模态框
				type: 0,//类型
				id_1: '0',//所有id
				id_2: '0'//近三月id
			}
		},
		mounted(){
			this.getIntegralDetails()
		},
		methods: {
			//选择数据
			changeTrue(id) {
				if(this.type == 1) {
					this.id_2 = 0;
					this.id_1 = id
				} else {
					this.id_1 = 0;
					this.id_2 = id
				}
			},
			goBack() {
				this.$router.go(-1)
			},
      goDetail(){
			  this.$router.push({
          name:"jifenguize"
        })
      },
			//切换下拉选项
			showMark(type) {
				this.type = type
				if(type == 1) {
					this.chageType = [{
							id: 1,
							name: '所有记录'
						},
						{
							id: 2,
							name: '获取记录'
						},
						{
							id: 3,
							name: '使用记录'
						}
					]
				} else {
					this.chageType = [{
							id: 1,
							name: '近三个月'
						},
						{
							id: 2,
							name: '本月'
						},
						{
							id: 3,
							name: '2018年11月'
						}
					]
				}
				this.isMark = true;
			},
			getIntegralDetails(){
				let data = {
					"userid": localStorage.userId
				}
				this.$index.getIntegralDetails(data).then(r => {
					console.log(r)
					this.dataArr=r.data
				}).catch(e => {

				})
			}
		}
	}
</script>

<style scoped lang="less">
	.mark {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
    -webkit-tap-highlight-color:transparent;
		position: fixed;
		background: rgba(0, 0, 0, .5);
	}
	
	.integralDetail {
		.hold {
			height: 44px;
			width: 100%;
		}
		width: 100%;
		.header-container {
			position: fixed;
			top: 0;
			z-index: 1000;
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
		.live-white {
			width: 100%;
			height: 10px;
			background: #F8F8F8;
		}
		/*记录*/
		.record {
			position: relative;
			z-index: 5;
			width: 100%;
			height: 88px/2;
			text-align: center;
			line-height: 44px;
			font-size: 14px;
			color: #333;
			background: #FFFFFF;
			img {
				width: 10px;
				height: 6px;
				margin: auto 0 auto 5px;
				vertical-align: middle;
			}
			.top {
				width: 100%;
				display: flex;
				.left,
				.right {
					flex: 2;
				}
				.active {
					color: #E95504;
				}
				.center {
					width: 1px/2;
					height: 68px/2;
					margin: auto 0;
					background: rgba(204, 204, 204, 1);
				}
			}
			.bottom>div:nth-of-type(1) {
				border: none;
			}
			.bottom {
				position: absolute;
				width: 100%;
				background: #FFFFFF;
				border-top: 1px solid #F8F8F8;
				div {
					text-align: left;
					box-sizing: border-box;
					padding: 0 10px;
					display: flex;
					justify-content: space-between;
					width: calc( 702px/2);
					margin: 0 auto;
					border-top: 1px solid #F8F8F8;
					img {
						width: 13px;
						height: 9px;
					}
				}
			}
		}
		/*积分规则*/
		.live-black {
			width: 100%;
			height: 30px;
			background: rgba(238, 238, 238, 1);
			display: flex;
			justify-content: space-between;
			line-height: 30px;
			font-size: 12px;
			p {
				color: #333;
				margin-left: 12px;
			}
			span {
				margin-right: 12px;
				color: #999;
				display: flex;
				img {
					width: 14px;
					height: 14px;
					margin: auto;
					margin-left: 5px;
				}
			}
		}
		.particulars {
			width: 702px/2;
			margin: auto;
			.particulars-list {
				width: 100%;
				height: 55px;
				border-bottom: 1px solid rgba(248, 248, 248, 1);
				display: flex;
				justify-content: space-between;
				font-size: 32px/2;
				line-height: 55px;
				color: #999;
				.integral {
					color: #E95504;
				}
				.particulars-main {
					display: flex;
					justify-content: space-between;
          span{
            width: 200px/2;
          }
					.particulars-one {
						display: flex;
						justify-content: space-between;
						color: #333;
						img {
							width: 50px/2;
							height: 50px/2;
							margin: auto 19px/2 auto 72px/2;
						}
            p{
              margin: auto 19px/2 auto 72px/2;
            }
					}
				}
			}
		}
	}
</style>
