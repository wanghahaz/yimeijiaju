<template>
  <div class="comment">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        评论
      </div>
    </header>
    <!--留白-->
    <div class="live-white">

    </div>
    <!--筛选-->
    <div class="filtrate">
      <span @click="index=0" :class="index==0?'active':''">全部</span>
      <span @click="index=1" :class="index==1?'active':''">好评（50）</span>
      <span @click="index=2" :class="index==2?'active':''">中评（50）</span>
      <span @click="index=3" :class="index==3?'active':''">差评（0）</span>
      <span @click="index=4" :class="index==4?'active':''">有图（50）</span>
      <span @click="index=5" :class="index==5?'active':''">视频（1）</span>
    </div>
    <!--评论列表-->
    <div class="container-box">
      <div class="container" v-for="item in 2">
        <div class="container_1">
          <div class="container_list">
            <img src="../../../static/image/login/mao.jpg" alt="">
            <div>
              <p>搬砖的猪</p>
              <p>2018-11-27 | 华润长安中心 | 90㎡</p>
            </div>
          </div>
          <div class="container_two">
            <img src="../../../static/image/selection/sixin.png" alt="">
            私信
          </div>
        </div>
        <p class="container_2">装修工人素质很高，设计师也是很负责的，尊重个人意见的同时从专业角度进行完善。</p>
        <!--图片展示-->
        <div class="img-show">
          <img src="../../../static/image/login/mao.jpg" alt="">
          <img src="../../../static/image/login/mao.jpg" alt="">
          <img src="../../../static/image/login/mao.jpg" alt="">
        </div>
        <!--设计师  工长-->
        <div class="foreman">
          <div class="foreman-stylist">
            <img src="../../../static/image/login/mao.jpg" alt="">
            <div>
              <p>王志钧</p>
              <p>设计师</p>
            </div>
          </div>
          <div class="line">

          </div>
          <div class="foreman-list">
            <img src="../../../static/image/login/mao.jpg" alt="">
            <div>
              <p>李天成</p>
              <p>工长</p>
            </div>
          </div>
        </div>

        <div class="container_3">
          <p>
            <img src="../../../static/image/selection/pinglun.png" alt="">
            <span>评论</span>
          </p>
          <p>
            <img src="../../../static/image/selection/dianzan.png" alt="">
            <span>5</span>
          </p>
        </div>
      </div>
    </div>


    <!--footer-->

    <!--免费预约  在线咨询-->
    <div class="free_subscribe">
      <div class="free_list">
        <div class="free_1">
          <a class="free_div1" href="tel:4001888687">
            <img src="../../../static/image/me/dh.png" alt="">
            <p>电话</p>
          </a>
        </div>
        <div class="free_2">
          <span class="free_span1" @click="promptlyapply(0)">免费预约量房</span>
          <span class="free_span2"><img src="../../../static/image/selection/kf.png" alt=""><span>在线咨询</span></span>
        </div>
      </div>
    </div>

    <!--免费预约模态框-->
    <div class="immediatelyapply" v-show="promptly">
      <div class="mark">
        <div class="markapply">
          <img src="../../../static/image/index/close.png" @click="closePromptlyapply()" class="close"/>
          <h1>在线报名</h1>
          <input type="tel" maxlength="11" placeholder="请输入您的称呼" v-model="lessonName"/>
          <input type="tel" maxlength="11" placeholder="请输入手机号码" v-model="lessonPhone"/>
          <span @click="promptlyapply(1)">立即提交</span>
        </div>
      </div>
    </div>
    <!--提交成功-->
    <div class="immediatelyapply" v-show="successBol">
      <div class="mark">
        <div class="markapply">
          <img src="../../../static/image/index/close.png" class="close" @click="closePromptlyapply()"/>
          <p class="p_one"></p>
          <div>
            <img src="../../../static/image/index/dg.png"/>
            <h2>提交成功</h2>
          </div>
          <span @click="closePromptlyapply()">确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pinglun",
    data() {
      return {
        index: 0,
        promptly: false,//免费预约模态框
        successBol: false, //提交成功
        lessonPhone: "", //免费预约电话
        lessonName: "", //免费预约姓名
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      //打开立即报名模态框   已经立即申请模态框
      promptlyapply(dome) {
        switch (dome) {
          case 0:
            this.promptly = true;
            break;
          case 1:
            let data = {
              enroll_page: 15,
              enroll_entrance: "线下课堂报名- 头部立即报名",
              userid: localStorage.userId,
              customer_name: this.lessonName,
              mobile_phone: this.lessonPhone,
            };
            this.$index.Enroll(data).then((res) => {
              if (res.status == "200") {
                this.successBol = true;
              } else {
                this.$showToast(true, 'text', res.message);
              }
            }).catch((err) => {
              console.log(err)
            });
            break;
        }
      },
      //关闭立即报名模态框
      closePromptlyapply() {
        this.promptly = false;
        this.successBol = false;
        this.lessonPhone = "";
        this.lessonName = "";
      },

    }
  }
</script>

<style scoped lang="less">
  @import "comment";
</style>

