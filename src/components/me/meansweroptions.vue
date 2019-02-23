<template>
  <div class="meansweroptions">
    <meAsk-header></meAsk-header>
    <div class="live-white">

    </div>
    <!--问题-->
    <div class="header-Ask">
      <p class="title">{{queOptions.inter_title}}</p>
      <span class="reward"><img src="../../../static/image/me/moneya.png" alt="">50</span>
      <div class="main">
        <p class="name">{{queOptions.username}}</p>
      </div>
    </div>
    <div class="live-white" style="margin: 0">

    </div>
    <!--收到的回答-->
    <div class="receive" v-for="item in getReplyList">
      <div class="receive-main">
        <div class="receive-mainone">
          <img :src="item.head_img" alt="">
          <div class="receive-main-one">
            <p>{{item.username}}</p>
            <p>{{item.reply_time}}</p>
          </div>
        </div>
        <p class="already" v-if="item.is_optimum==1">已采纳</p>
        <p class="already" style="color: #666" v-else>未采纳</p>
      </div>
      <p class="solution">{{item.reply_content}}</p>
      <div class="adopt">
        <div class="btn">
          <div class="comment">
            <img src="../../../static/image/selection/pinglun.png" alt=""> 评论
          </div>
          <div class="like">
            <img src="../../../static/image/selection/dianzan.png" alt="">
            <a>5</a>
          </div>
          <div class="comment">
            <img src="../../../static/image/me/jb.png" alt=""> 举报
          </div>
        </div>
      </div>
    </div>
    <!--相关问题-->
    <div class="relatedIssues">
      <h1>相关问题</h1>
      <div v-for="item in 5">
        <p class="p_one">自己动手简单旧房翻新都自己动手简单旧房翻新都翻新翻新都翻新都翻新都翻新都翻新自己动手简单旧房翻新都自己动手简单旧房翻新都翻新翻新都翻新都翻新都翻新都翻新</p>
        <p class="p_two">自己动手简单旧房翻新都.自己自己动手自己动手动手 </p>
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
    name: "wodehuidaxiangqing",
    data() {
      return {
        queOptions: "",
        getReplyList:[]
      }
    },
    methods: {
      //问题详情
      GetQueInfo() {
        this.$vux.loading.show();
        let data = {
          que_id: this.$route.query.id
        };
        this.$index.GetQueInfo(data).then((res) => {
          console.log(res.data)
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
          console.log(res.data)
          delete res.data.reply_counts;
          for (let i in res.data) {
            this.getReplyList.push(res.data[i]);
          }
          // this.getReplyList = this.getReplyList.slice(0, 3);
          for (let i = 0; i < this.getReplyList.length; i++) {
            this.getReplyList[i].head_img = this.$imgSrc + this.getReplyList[i].head_img
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
    },
    mounted() {
      this.GetQueInfo();
      this.GetReply();
    }
  }
</script>

<style scoped lang="less">
  @import "meansweroptions";
</style>
