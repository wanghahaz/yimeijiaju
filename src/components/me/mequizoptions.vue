<template>
  <div class="mequizoptions">
    <meAsk-header></meAsk-header>
    <div class="live-white">

    </div>
    <!--问题-->
    <div class="header-Ask">
      <p class="title">{{queOptions.inter_title}}</p>
      <span class="reward"><img src="../../../static/image/me/moneya.png" alt="">50</span>
      <div class="main">
        <p class="name">{{queOptions.username}}</p>
        <p class="main-one">展开 <img src="../../../static/image/choicenessstylist/xialaxiala.png" alt=""></p>
      </div>
    </div>
    <!--修改描述 提高悬赏-->
    <div class="modify">
      <div class="modify-list modify-one">
        <img src="../../../static/image/index/huida.png" alt="">
        修改描述
      </div>
      <div class="modify-list modify-two">
        <img src="../../../static/image/index/xs.png" alt="">
        提高悬赏
      </div>
    </div>
    <!--收到的回答-->
    <div class="receive">
      <p class="receive-header">收到{{replyCounts}}条回答</p>
      <div v-for="item in getReplyList">
        <div class="receive-main">
          <img :src="item.head_img" alt="">
          <div class="receive-main-one">
            <p>{{item.username}}</p>
            <p>{{item.reply_time}}</p>
          </div>
        </div>
        <p class="solution">{{item.reply_content}}</p>
        <div class="adopt">
        <span class="adopt-one" @click="onClickAsked">
          <img src="../../../static/image/me/zw.png" alt="">
          <p>追问</p>
          <img class="xiala" src="../../../static/image/selection/xiala.png" alt="">
        </span>
          <span class="adopt-two" @click="SetOptimum(item.id)" v-if="item.is_optimum==0">
          <img src="../../../static/image/me/cn.png" alt="">
          <p>采纳</p>
        </span>
          <span class="adopt-three" v-else>
          <img src="../../../static/image/me/cn.png" alt="">
          <p>已采纳</p>
        </span>
        </div>
      </div>
      <!--采纳框-->
      <div class="adoptFrame" v-show="clickAsked">
        <span @click="onClickAsked">发送</span>
        <textarea>

        </textarea>
      </div>
    </div>
    <!--相关问题-->
    <div class="relatedIssues">
      <h1>相关问题</h1>
      <div v-for="item in 5">
        <p class="p_one">自己动手简单旧房翻新都自己动手简单旧房翻新都翻新翻新都翻新都翻新都翻新都翻新自己动手简单旧房翻新都自己动手简单旧房翻新都翻新翻新都翻新都翻新都翻新都翻新</p>
        <p class="p_two">自己动手简单旧房翻新都.自己自己动手自己动手动手</p>
      </div>
    </div>
  </div>
</template>

<script>
  import meAskHeader from './base/header/meAskHeader'

  export default {
    components: {
      "meAsk-header": meAskHeader
    },
    name: "wodetiwenxiangqing",
    data() {
      return {
        clickAsked: false,
        queOptions: [],
        replyCounts: "",
        getReplyList: [],
      }
    },
    methods: {
      onClickAsked() {
        this.clickAsked = !this.clickAsked;
      },
      //问题详情
      GetQueInfo() {
        this.$vux.loading.show();
        let data = {
          que_id: this.$route.query.id
        };
        this.$index.GetQueInfo(data).then((res) => {
          this.queOptions = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
      //回复列表
      GetReply() {
        this.$vux.loading.show();
        let data = {
          que_id: this.$route.query.id,
          user_id: localStorage.userId,
        };
        this.$index.GetReply(data).then((res) => {
          this.replyCounts = res.data.reply_counts;
          delete res.data.reply_counts;
          for (let i in res.data) {
            this.getReplyList.push(res.data[i]);
          }
          for (let i = 0; i < this.getReplyList.length; i++) {
            this.getReplyList[i].head_img = this.$imgSrc + this.getReplyList[i].head_img
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
      //采纳
      SetOptimum(id) {
        let that = this;
        that.$vux.loading.show();
        let data = {
          userid: localStorage.userId,
          que_id: that.$route.query.id,
          reply_id: id
        };
        that.$index.SetOptimum(data).then((res) => {
          this.GetReply();
          that.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
          that.$vux.loading.hide();
        })
      }
    },
    mounted() {
      this.GetQueInfo();
      this.GetReply();
    }
  }
</script>

<style scoped lang="less">
  @import "./mequizoptions";
</style>
