<template>
	<div class="change">
		<div class="title" @click="framChangei">
			<span style="margin: 0;">{{shi}}</span><span>{{ting}}</span><span>{{wei}}</span><span>{{chu}}</span>
			<img src="../../../static/image/index/dao.png" v-show="imgBol" />
			<img src="../../../static/image/index/zheng.png" v-show="!imgBol" />
		</div>
		<div class="framChange" v-show="framChange">
			<ul>
				<li :class="{'check':item.isCheck}" @click="isTure(item.name,item.id)" v-for="item in shiList">{{item.name}}</li>
			</ul>
			<ul>
				<li :class="{'check':item.isCheck}" @click="isTure(item.name,item.id)" v-for="item in tingList">{{item.name}}</li>
			</ul>
			<ul>
				<li :class="{'check':item.isCheck}" @click="isTure(item.name,item.id)" v-for="item in weiList">{{item.name}}</li>
			</ul>
			<ul>
				<li :class="{'check':item.isCheck}" @click="isTure(item.name,item.id)" v-for="item in chuList">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				imgBol:true,
				framChange:false,
				shi: '1室',
				ting: '1厅',
				wei: '1卫',
				chu: '1厨',
				shiList: [{
					id: 1,
					isCheck: true,
					name: '1室'
				}, {
					id: 2,
					isCheck: false,
					name: '2室'
				}, {
					id: 3,
					isCheck: false,
					name: '3室'
				}, {
					id: 4,
					isCheck: false,
					name: '4室'
				}, {
					id: 5,
					isCheck: false,
					name: '5室'
				}, {
					id: 6,
					isCheck: false,
					name: '6室'
				}],
				tingList: [{
					id: 1,
					isCheck: true,
					name: '1厅'
				}, {
					id: 2,
					isCheck: false,
					name: '2厅'
				}, {
					id: 3,
					isCheck: false,
					name: '3厅'
				}, {
					id: 4,
					isCheck: false,
					name: '4厅'
				}, {
					id: 5,
					isCheck: false,
					name: '5厅'
				}, {
					id: 6,
					isCheck: false,
					name: '6厅'
				}],
				weiList: [{
					id: 1,
					isCheck: true,
					name: '1卫'
				}, {
					id: 2,
					isCheck: false,
					name: '2卫'
				}, {
					id: 3,
					isCheck: false,
					name: '3卫'
				}, {
					id: 4,
					isCheck: false,
					name: '4卫'
				}, {
					id: 5,
					isCheck: false,
					name: '5卫'
				}, {
					id: 6,
					isCheck: false,
					name: '6卫'
				}],
				chuList: [{
					id: 1,
					isCheck: true,
					name: '1厨'
				}, {
					id: 2,
					isCheck: false,
					name: '2厨'
				}, {
					id: 3,
					isCheck: false,
					name: '3厨'
				}, {
					id: 4,
					isCheck: false,
					name: '4厨'
				}, {
					id: 5,
					isCheck: false,
					name: '5厨'
				}, {
					id: 6,
					isCheck: false,
					name: '6厨'
				}]
			}
		},
		methods: {
			isTure(name, id) {
				var that = this;
				if (name.indexOf('室') == 1) {
					that.shiList.forEach(function(item) {
						if (id == item.id) {
							if (item.isCheck) {
								item.isCheck = false
								that.shi = '1室'
							} else {
								item.isCheck = true;
								that.shi = name
							}
						} else {
							item.isCheck = false
						}
					})
				} else if (name.indexOf('厅') == 1) {
					that.tingList.forEach(function(item) {
						if (id == item.id) {
							if (item.isCheck) {
								item.isCheck = false
								that.ting = '1厅'
							} else {
								item.isCheck = true;
								that.ting = name
							}
						} else {
							item.isCheck = false
						}
					})
				} else if (name.indexOf('卫') == 1) {
					that.weiList.forEach(function(item) {
						if (id == item.id) {
							if (item.isCheck) {
								item.isCheck = false
								that.wei = '1卫'
							} else {
								item.isCheck = true;
								that.wei = name
							}
						} else {
							item.isCheck = false
						}
					})
				} else {
					that.chuList.forEach(function(item) {
						if (id == item.id) {
							if (item.isCheck) {
								item.isCheck = false
								that.chu = '1厨'
							} else {
								item.isCheck = true;
								that.chu = name
							}
						} else {
							item.isCheck = false
						}
					})
				}
			},
			framChangei(){
				this.framChange = !this.framChange;
				this.imgBol = !this.imgBol;
			}
		},
		mounted() {

		}
	}
</script>
<style scoped="scoped" lang="less">
	.change {
		width: 100%;

		.title {
			position: relative;
      width:662px/2;
      height:88px/2;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(204, 204, 204, 1);
      border-radius:8px/2;
			margin: 20px/2 auto;
			text-indent: 13px/2;
			line-height: 88px/2;
			font-size: 28px/2;

			img {
				position: absolute;
				right: 21px/2;
				bottom: 37px/2;
        width:27px/2;
        height:17px/2;
			}


			span {
				display: inline-block;
				margin-left: 30px/2;
			}
		}

		.framChange {
			width: 662px/2;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			height: 500px/2;
			border: 1px solid rgba(202, 202, 202, 1);
			border-radius: 0 0 8px/2 8px/2;
			border-top: 0;
			position: absolute;
      top: 510px/2;
      left: 19px/2;
			background: white;
			z-index: 99;

			ul {
				width: 662px/2;
				list-style: none;
				margin: auto 0 auto 10px/2;
        font-size:28px/2;

				li {
					margin: 20px/2 0;
					text-align: center;
					line-height: 60px/2;
          width:140px/2;
          height:60px/2;
					background: rgba(238, 238, 238, 1);
					border-radius: 8px/2;
				}
			}

			.check {
				background: rgba(255, 90, 0, 1);
				color: white;
			}
		}
	}
</style>
