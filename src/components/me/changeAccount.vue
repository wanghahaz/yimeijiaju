<template>
  <div class="me-account">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        我的账户
      </div>
    </header>
    <div class="live-white">

    </div>
    <!--个人信息-->
    <div class="personal-details">
      <!--头像-->
      <div class="personal-details-list headerimg">
        <p>头像</p>
        <img class="head" v-lazy="this.$imgSrc+this.imgUrl" alt="">
        <input type="file" value="" class="imgFile" @change="UploadImg" accept="image/*"/>
      </div>
      <!--用户名-->
      <div class="personal-details-list">
        <p>用户名</p>
        <p class="alone">
          <input type="text" v-model="obj.username" :placeholder="obj.username?obj.name:'请输入用户名'"/>
        </p>
      </div>
      <!--性别-->
      <!-- <div class="personal-details-list">
                <p>性别</p>
                <p>女<img class="arrows" src="../../../static/image/selection/youjiantou.png" alt=""></p>
            </div> -->

      <group>
        <popup-radio title="性别" :options="options2" v-model="option2" :placeholder="placeholder"
                     @on-hide="hah"></popup-radio>
      </group>
      <!--邮箱-->
      <div class="personal-details-list">
        <p>邮箱</p>
        <p class="alone">
          <input type="text" v-model="obj.eamil" :placeholder="obj.eamil?obj.name:'请输入邮箱'"/>
        </p>
      </div>
      <!--所在城市-->
      <div class="personal-details-list">
        <p>所在城市</p>
        <p class="alone">
          <input type="text" v-model="obj.city" :placeholder="obj.city?obj.name:'请输入城市'"/>
        </p>
      </div>
      <!--&lt;!&ndash;收货地址&ndash;&gt;-->
      <!--<div class="personal-details-list personal-details-one">-->
      <!--<p>收货地址</p>-->
      <!--<img class="alonea" src="../../../static/image/selection/youjiantou.png" alt="">-->
      <!--</div>-->
      <!--微信绑定-->
      <!--<div class="personal-details-list personal-details-one">
        <p>微信绑定</p>
        <img class="alonea" src="../../../static/image/selection/youjiantou.png" alt="">
      </div>-->
      <!--账户与安全-->
      <!--<div class="personal-details-list personal-details-one" @click="goAccountSecurity">
        <p>账户与安全</p>
        <img class="alonea" src="../../../static/image/selection/youjiantou.png" alt="">
      </div>-->
    </div>
    <span class="out-login" @click="setUserInfo">保存</span>
  </div>
</template>

<script>
  import {
    Group,
    PopupRadio
  } from 'vux'

  export default {
    name: "wodezhanghu",
    components: {
      PopupRadio,
      Group
    },
    data() {
      return {
        placeholder: "",
        obj: {},
        option: '请选择',
        options: ['男', '女'],
        option2: '',
        options2: [{
          key: '1',
          value: '男'
        }, {
          key: '2',
          value: '女'
        }],
        imgUrl: "",
      }
    },
    mounted() {
      this.getUserInfo();
    },
    methods: {
      hah() {
        console.log(this.option2)
      },
      //获取信息
      getUserInfo() {
        let data = {
          "userid": localStorage.userId
        };
        this.$index.GetUserInfo(data).then(r => {
          console.log(r.data);
          this.obj = r.data;
          this.imgUrl = this.obj.head_img;
          if (this.obj.sex == 1) {
            this.placeholder = "男"
          } else if (this.obj.sex == 2) {
            this.placeholder = "女"
          } else {
            this.placeholder = "请选择您的性别"
          }
        })
      },
      //修改信息
      setUserInfo() {
        this.$vux.loading.show();
        let data = {
          userid: localStorage.userId,
          username: this.obj.username,
          head_img: this.imgUrl,
          sex: this.option2
        };
        this.$index.setUserInfo(data).then(r => {
          if (r.status == "200") {
            this.$showToast(true, 'text', r.message);
            this.$router.push({
              name: "wodezhanghu"
            })
            this.$vux.loading.hide();
          } else {
            this.$vux.loading.hide();
            this.$showToast(true, 'text', r.message);
          }
        })
      },
      goBack() {
        this.$router.go(-1)
      },
      //  去往账户与安全
      goAccountSecurity() {
        this.$router.push({
          name: "zhanghuyuanquan"
        })
      },
      //上传图片
      UploadImg(e) {
        this.$vux.loading.show();
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('img_path', file); //通过append向form对象添加数据
        this.$index.UploadImg(param).then((res) => {
          if (res.code == "200") {
            this.imgUrl = res.img_path;
            this.$showToast(true, 'text', res.message);
            this.$vux.loading.hide();
          } else {
            this.$showToast(true, 'text', res.message);
            this.$vux.loading.hide();
          }
        }).catch((err) => {
          console.log(err);
          this.$vux.loading.hide();
        })
      },
    }
  }
</script>

<style scoped lang="less">
  input {
    font-size: 15px;
    text-align: right;
  }

  .me-account {
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
      height: 5px;
      background: rgba(248, 248, 248, 1);
      margin-top: 44px;
    }

    /*个人信息*/

    .personal-details {
      width: 720px/2;
      margin-left: 12px;
      margin-top: 10px;

      .personal-details-list {
        width: 100%;
        height: 130px/2;
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        display: flex;
        justify-content: space-between;
        line-height: 130px/2;
        font-size: 30px/2;
        color: rgba(102, 102, 102, 1);

        .head {
          width: 90px/2;
          height: 90px/2;
          border-radius: 50%;
          margin: auto 13px;
        }

        .arrows {
          width: 15px/2;
          height: 26px/2;
          vertical-align: middle;
          margin: 0 14px 0 9px;
        }

        .alone {
          margin-right: 12px;
        }

        .alonea {
          width: 15px/2;
          height: 26px/2;
          margin: auto 14px auto 0;
        }
      }

      .personal-details-one {
        border-bottom: 10px solid rgba(242, 242, 242, 1);
      }
    }

    .out-login {
      display: block;
      width: 701px/2;
      height: 94px/2;
      background: #e95504;
      border-radius: 6px/2;
      font-size: 30px/2;
      color: #fff;
      line-height: 94px/2;
      margin: 150px/2 auto 0;
      text-align: center;
    }

    .headerimg {
      position: relative;
    }

    .imgFile {
      position: absolute;
      width: 90px/2;
      height: 90px/2;
      border-radius: 50%;
      right: 13px;
      top: 10px;
      opacity: 0;
    }

    /deep/ .weui-cell {
      padding: 0;
      height: 130px/2;
      line-height: 130px/2;
    }

    /deep/ .vux-label {
      color: #666;
    }

    /deep/ .weui-cells {
      margin-top: 0;
    }

    /deep/ .weui-cells:before {
      border-top: 0;
    }

    /deep/ .vux-cell-value {
      color: #333;
      font-size: 30px/2;
    }

    /deep/ .vux-cell-placeholder {
      font-size: 30px/2;
    }
  }
</style>
