<template>
  <div class="password">
    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        密码设置/修改
      </div>

      <div class="right" @click="setPassword">
        确定
      </div>
    </header>
    <div class="live-white">

    </div>

    <!--修改/设置密码文本框-->
    <div class="passWordFrame">
      <div class="passWordFrameOne">
        <img src="../../../static/image/login/mima.png" alt="">
        <input v-model="pwd_1" type="password" placeholder="请输入密码"/>
      </div>
      <div class="passWordFrameOne">
        <img src="../../../static/image/login/mima.png" alt="">
        <input v-model="pwd_2" type="password" placeholder="请确认密码"/>
      </div>
      <div class="passWordFrameTwo">
        <img src="../../../static/image/login/yanzhengma.png"/>
        <input v-model="code" type="number" placeholder="请输入验证码"/>
        <span v-if="time==60" @click="getcode">发送验证码</span>
        <span v-else>重新发送({{time}})</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mimashezhi",
    data() {
      return {
				code:'',   
				time:60,
				pwd_2:'',
				pwd_1:''
      }
    },
    methods: {
//  	提交
			setPassword(){
				if(this.pwd_1==''){
					this.$showToast(true, 'text', '密码不能为空');
				}else if(this.pwd_1!=this.pwd_2){
					this.$showToast(true, 'text', '输入密码不一致');
				}else if(this.code==''){
					this.$showToast(true, 'text', '验证码不能为空');
				} else{
					this.$vux.loading.show();
					let data = {
    			userid:localStorage.userId,
    			mobile_phone:JSON.parse(localStorage.obj).mobile_phone,
    			mobile_code:this.code,
    			password:this.pwd_2
    		}
				this.$index.setPassword(data).then(r => {
					this.$showToast(true, 'text', '修改成功');
					this.$vux.loading.hide();
				}).catch(e => {

				})
				}
			
			},
    	//获取验证码
    	getcode(){
    		this.$vux.loading.show();
    		let that=this;
    		var timer=setInterval(function(){
    			that.time--;
    			if(that.time==0){
    				that.time=60;
    				clearInterval(timer)
    			}
    		},1000)
    		let data = {
    			sms_type:'2',
    			mobile_phone:JSON.parse(localStorage.obj).mobile_phone
    		}
				this.$index.getCode(data).then(r => {
//					this.$showToast(true, 'text', res.message);
					this.$vux.loading.hide();
				}).catch(e => {

				})
    	},
      goBack() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped lang="less">
  .password {
    width: 100%;

    .header-container {
      position: fixed;
      top: 0;
      z-index: 1000;
      width: 100%;
      border-bottom: 1px/2 solid #cccccc;
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
        font-size: 32px/2;
        color: #E95504;
      }
    }

    .live-white {
      width: 100%;
      height: 10px;
      background: rgba(248, 248, 248, 1);
      margin-top: 48px;
    }

    .passWordFrame {
      width: 702px/2;
      margin: 25px auto;
      font-size: 28px/2;
      color: #333333;

      .passWordFrameOne {
        width: 100%;
        position: relative;
        margin-bottom: 12px;

        input {
          width: 100%;
          height: 44px;
          border-radius: 4px;
          border: 1px/2 solid rgba(204, 204, 204, 1);
          color: #999999;
          font-size: 28px/2;
          text-indent: 67px/2;
        }

        img {
          width: 26px/2;
          height: 31px/2;
          position: absolute;
          top: 14px;
          left: 10px;
        }
      }

      .passWordFrameTwo {
        width: 100%;
        position: relative;
        display: flex;

        input {
          width: 396px/2;
          height: 44px;
          margin-left: 1px;
          text-indent: 67px/2;
          border-radius: 4px 0 0 4px;
          font-size: 28px/2;
          border: 1px/2 solid rgba(204, 204, 204, 1);
          border-right: none;
        }

        img {
          width: 26px/2;
          height: 26px/2;
          position: absolute;
          top: 31px/2;
          left: 10px;
        }

        span {
          width: 305px/2;
          height: 44px;
          background: rgba(238, 238, 238, 1);
          border-radius: 0 4px 4px 0;
          border: 1px/2 solid rgba(204, 204, 204, 1);
          border-left: none;
          line-height: 44px;
          text-align: center;
        }
      }
    }
  }

</style>
