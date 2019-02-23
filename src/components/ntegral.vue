<template>
  <div class="ntegral">
    <div class="box">
      <div v-for="item in day" :class="item.is_sign==1?'qian':''">
        <span v-if="item.is_sign==0" @click="userSign(item.date,item.is_sign)" :class="item.is_sign==1?'qian':''">{{item.sorce}}</span>
        <span v-else :class="item.is_sign==1?'qian':''" @click="userSign(item.date,item.is_sign)">
					<img src="../.././static/image/z/true.png"/>
				</span>
        <span>{{item.date}}</span>
        <div class="day_1">
          <span v-if="item.days&&item.date=='今天'">连续签到{{item.days}}天</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'ntegral',
    data() {
      return {
        day: [],
        isToday: ''
      }
    },
    methods: {
      getSign() {
        let data = {
          userid: localStorage.userId
        };
        this.$index.getSign(data).then(r => {
          this.day = r.data;
        }).catch(e => {
          console.log(e);
        })
      },
      userSign(day, isSign) {
        if (!localStorage.userId) {
          // this.$showToast(true, 'text', '请先登录');
          this.$router.push({
            name: "login"
          });
          return;
        }
        if (day != '今天') {
          return;
        }
        if (isSign == 1) {
          this.$showToast(true, 'text', '您已经签到');
          return;
        }
        let data = {
          userid: localStorage.userId
        };
        this.$index.UserSign(data).then(r => {
          this.$showToast(true, 'text', '签到成功');
          this.getSign();
          this.GetUserInfo();
        }).catch(e => {
          console.log(e);
        })
      },
      //获取用户信息
      GetUserInfo() {
        this.$vux.loading.show();
        let data = {
          userid: localStorage.userId
        };
        this.$index.GetUserInfo(data).then((res) => {
          localStorage.setItem("integral", res.data.integral_balance);
          localStorage.setItem("obj", JSON.stringify(res.data));
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
    },
    mounted() {
      var month = (new Date().getMonth()) + 1 > 9 ? (new Date().getMonth() + 1) : '0' + (new Date().getMonth() + 1);
      var day = new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate();
      this.isToday = month + '-' + day;
      this.getSign();
    }
  }
</script>
<style>
  .ntegral {
    position: relative;
    height: 80px;
    width: calc(680px / 2);
    margin: 0 auto;
    display: flex;
  }

  .box {
    margin: auto;
    display: flex;
    width: 100%;
    height: 11px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 119, 28, 1);
    border-radius: 11px;
    padding: 1px;
  }

  .box span {
    display: flex;
    position: relative;
    top: -9.5px;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    margin: 0 auto;
    justify-content: center;
  }

  .box > div {
    margin: 0 auto;
    flex: 1;
    flex-direction: column;
  }

  .box > div:nth-of-type(1) {
    border-radius: 7px 0 0 7px;
  }

  .box > div:nth-last-of-type(1) {
    border-radius: 0 7px 7px 0;
  }

  .box > .qian {
    background: #E95504;
  }

  .box > div > span:nth-of-type(1) {
    color: #999999;
    width: 25px;
    height: 25px;
    background: rgba(247, 242, 239, 1);
    box-shadow: 0px 0px 0px 0px rgba(206, 201, 190, 1);
    border-radius: 50%;
  }

  .box > div > span:nth-of-type(2) {
    color: #666666;
  }

  .day_1 {
    position: relative;
    top: -85px;
    left: -18px;
  }

  .day_1 > span {
    text-align: center;
    position: absolute;
    top: 0px;
    width: 81px;
    height: 17px;
    border: 1px solid rgba(253, 119, 46, 1);
    border-radius: 6px;
    line-height: 17px;
    font-size: 10px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(253, 119, 46, 1);
  }

  .day_1 > span:after {
    content: " ";
    position: absolute;
    top: 16px;
    left: 35px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-top: 6px solid #fff;
    border-right: 6px solid transparent;
  }

  .day_1 > span:before {
    content: " ";
    position: absolute;
    top: 17px;
    left: 33px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-top: 6px solid rgba(253, 119, 46, 1);
    border-right: 8px solid transparent;
  }

  .box > div > .qian {
    background: rgba(244, 124, 38, 1) !important;
    box-shadow: 0px 0px 0px 0px rgba(238, 205, 134, 1);
  }

  .box > div img {
    width: 15px;
    margin: auto;
  }
</style>
