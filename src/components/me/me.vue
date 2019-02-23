<template>
  <div class="me">
    <!--头部-->
    <div class="headernavigation">
      <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack"> 美居精选
      <img class="search" src="../../../static/image/choicenessstylist/caidan.png" alt="" @click="cephalosome">
    </div>
    <!-- 头部模态框 -->
    <div class="cephalosome" v-show="cephalosomeBol" @click="closecephalosome" @touchmove.prevent>
      <div class="cephalosomebox">
        <div class="cephalosomeboxlist" @click="goIndex">
          <img class="shouye" src="../../../static/image/me/syyy.png"/> 首页
        </div>
        <a class="cephalosomeboxlist" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
          <img src="../../../static/image/index/zaixian.png"/> 在线客服
        </a>
        <div class="cephalosomeboxlist" @click="handleLogin">
          <img class="tuichu" src="../../../static/image/selection/tuichu.png"/> 退出登录
        </div>
      </div>
    </div>
    <div class="me-material">
      <div class="me-material-box" @click="toRouter('/wodezhanghu')">
        <img :src="this.$imgSrc+GetUserInfoList.head_img" class="header" alt="">
        <div>
          <p>{{GetUserInfoList.username}}</p>
          <p>完善个人资料 <img src="../../../static/image/me/you.png" alt=""></p>
        </div>
      </div>
      <div class="me-material-list">
        <div class="me-material-one">
          <p>0</p>
          <p>帖子</p>
        </div>
        <div class="me-material-two"></div>
        <div class="me-material-one" @click="goAttention">
          <p>0</p>
          <p>关注</p>
        </div>
        <div class="me-material-two"></div>
        <div class="me-material-one">
          <p>0</p>
          <p>粉丝</p>
        </div>
      </div>
    </div>

    <!--我的积分-->
    <div class="me-integral">
      <span><img src="../../../static/image/me/jf.png" alt="">我的积分<span
        style="color:#E7561E;">{{integral}}</span></span>
      <span class="exchange" @click="goStore">去兑换</span>
    </div>
    <!--留白-->
    <div class="leave-white">

    </div>
    <!--积分-->
    <div class="signIntegral" style="box-sizing: border-box;">
      <ntegral></ntegral>
    </div>
    <!--留白-->
    <div class="leave-white">

    </div>
    <!--消息中心-->
    <div class="informationCentre">
      <span class="informationCentre_header">消息中心</span>
      <div class="informationCentre-list">
        <div class="informationCentre-box">
          <img src="../../../static/image/me/xx.png" alt="">
          <p>消息</p>
        </div>
        <div class="informationCentre-box">
          <img src="../../../static/image/me/sx.png" alt="">
          <p>私信</p>
        </div>
        <div class="informationCentre-box" @click="goMeAsk">
          <img src="../../../static/image/me/wd.png" alt="">
          <p>问答</p>
        </div>
        <div class="informationCentre-box">
          <img src="../../../static/image/me/xt.png" alt="">
          <p>系统通知</p>
        </div>
      </div>
    </div>
    <!--留白-->
    <div class="leave-white">

    </div>
    <!--积分当钱花-->
    <div class="informationCentre">
      <span class="informationCentre_header">积分当钱花</span>
      <div class="informationCentre-list informationHua">
        <div class="informationCentre-box" @click="goMission">
          <img src="../../../static/image/me/dlq.png" alt="">
          <p>待领取积分</p>
        </div>
        <div class="informationCentre-box" @click="goLottery">
          <img src="../../../static/image/me/yhl.png" alt="">
          <p>积分赢好礼</p>
        </div>
        <div class="informationCentre-box" @click="goRegistrationLottery">
          <img src="../../../static/image/me/gf.png" alt="">
          <p>瓜分10万积分</p>
        </div>
      </div>
      <div class="register" @click="goMission">立即领取</div>
    </div>
    <!--留白-->
    <div class="leave-white">

    </div>
    <!--个人服务-->
    <div class="individual">
      <span class="individual_header">个人服务</span>
      <grid :cols="4" :show-lr-borders="false">
        <grid-item>
					<span class="grid-center" @click="goOrderlist">
          <img class="one" src="../../../static/image/me/dd.png" alt="">
          <p>我的订单</p>
        </span>
        </grid-item>
        <grid-item>
					<span class="grid-center">
          <img class="two" src="../../../static/image/me/tz.png" alt="">
          <p>我的帖子</p>
        </span>
        </grid-item>
        <grid-item>
					<span class="grid-center" @click="goCollect">
          <img class="three" src="../../../static/image/me/sc.png" alt="">
          <p>我的收藏</p>
        </span>
        </grid-item>
        <grid-item>
					<span class="grid-center" @click="goMyLike">
          <img class="four" src="../../../static/image/me/dz.png" alt="">
          <p>我的点赞</p>
        </span>
        </grid-item>
        <grid-item>
					<span class="grid-center">
          <img class="five" src="../../../static/image/me/zjf.png" alt="">
          <p>分享赚积分</p>
        </span>
        </grid-item>
        <grid-item>
					<span class="grid-center" @click="toIntegral">
          <img class="six" src="../../../static/image/me/mx.png" alt="">
          <p>积分明细</p>
        </span>
        </grid-item>
        <grid-item>
					<span class="grid-center">
          <img class="seven" src="../../../static/image/me/cg.png" alt="">
          <p>草稿</p>
        </span>
        </grid-item>
        <grid-item>
					<span class="grid-center">
          <img class="eight" src="../../../static/image/me/rz.png" alt="">
          <p>设计师入驻</p>
        </span>
        </grid-item>
      </grid>
    </div>
    <!--底部热线-->
    <footer>
      美居精选服务热线：<span>110110110</span>
    </footer>
  </div>
</template>

<script>
  import {Grid, GridItem, GroupTitle} from 'vux'
  import ntegral from '@/components/ntegral.vue'

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle,
      ntegral
    },
    name: "gerenzhongxin",
    data() {
      return {
        integral: "",
        userName: "",
        cephalosomeBol: false, //头部菜单模态框
        GetUserInfoList: []
      }
    },
    methods: {
      // 关闭头部菜单登录模态框
      closecephalosome() {
        this.cephalosomeBol = false;
      },
      cephalosome() {
        this.cephalosomeBol = true;
      },
      goBack() {
        this.$router.go(-1)
      },
      //个人信息
      toRouter(path) {
        this.$router.push({
          path: path
        })
      },
      goIndex() {
        this.$router.push({
          name: "index"
        })
      },
      //个人中心
      goMe() {
        this.$router.push({
          name: "gerenzhongxin"
        })
      },
      //跳转到积分商城
      goStore() {
        this.$router.push({
          name: "jifenhuanli"
        })
      },
      //我的问答
      goMeAsk() {
        this.$router.push({
          name: "wodewenda"
        })
      },
      //瓜分10万积分
      goRegistrationLottery() {
        this.$router.push({
          name: "zhucechoujiang"
        })
      },
      //积分明细
      toIntegral() {
        this.$router.push({
          name: 'jifenmingxi'
        })
      },
      //我的订单
      goOrderlist() {
        this.$router.push({
          name: "zhuangxiudingdan"
        })
      },
      //任务中心
      goMission() {
        this.$router.push({
          name: "renwuzhongxin"
        })
      },
      //我的收藏
      goCollect() {
        this.$router.push({
          name: "wodeshoucang"
        })
      },
      //我的点赞
      goMyLike() {
        this.$router.push({
          name: "wodedianzan"
        })
      },
      //我的关注
      goAttention() {
        this.$router.push({
          name: "gerenzhongxinguanzhu"
        })
      },
      //去抽奖
      goLottery() {
        this.$router.push({
          name: "choujiang"
        })
      },
      //获取用户信息
      GetUserInfo() {
        this.$vux.loading.show();
        let data = {
          userid: localStorage.userId
        };
        this.$index.GetUserInfo(data).then((res) => {
          this.GetUserInfoList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //退出登录
      handleLogin() {
        localStorage.removeItem('userId');
        this.$router.push({
          name: "login"
        })
      },
    },
    mounted() {
      this.GetUserInfo();
      this.integral = localStorage.integral;
    }
  }
</script>

<style scoped lang="less">
  @import './me';

  .me {
    /deep/ .weui-grid {
      padding: 0;
      height: 152px/2;
    }
  }
</style>
