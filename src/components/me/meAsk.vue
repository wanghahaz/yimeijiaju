<template>
  <div class="meAsk">
    <meAsk-header></meAsk-header>
    <div class="live-white">

    </div>
    <!--积分与采纳-->
    <div class="accept">
      <span>积分:<a href="javascript:;">{{integral}}</a></span>
      <span>采纳数:<a href="javascript:;">{{optimumCount}}</a></span>
    </div>
    <!--提问问答-->
    <div class="ask">
      <span @click="index=0,indexBol=true" :class="index==0?'active':'ask-main'">{{totalMyQue}}提问</span>
      <span class="wire"></span>
      <span @click="index=1,indexBol=false" :class="index==1?'activeO':'ask-mainO'">{{totalMyReply}}回答</span>
    </div>

    <!--问答列表-->
    <div class="ask-list">
      <!--提问列表-->
      <div class="quiz-list" v-show="indexBol" v-for="item in myQueList" @click="myQueOptions(item.que_id)">
        <p>{{item.que_title}}</p>
        <p v-if="item.inter_status==0">待解决</p>
        <p v-else="item.inter_status==1">已解决</p>
      </div>
      <!--回答列表-->
      <div class="answer-list" v-show="!indexBol" v-for="item in myReplyList" @click="myReplyOptions(item.que_id)">
        <p>{{item.reply_content}}</p>
        <div>
          <span>{{item.username}}</span>
          <span v-show="item.is_optimum==0"></span>
          <span style="color:#E7561E" v-show="item.is_optimum==1">被采纳</span>
        </div>
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
    name: "wodewenda",
    data() {
      return {
        index: 0,
        indexBol: true,
        myQueList: "",
        myReplyList: "",
        totalMyQue: "",
        totalMyReply: "",
        optimumCount: "",
        integral: ""
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      //我的提问
      MyQue() {
        this.$vux.loading.show();
        let data = {
          userid: localStorage.userId,
        };
        this.$index.MyQue(data).then(r => {
          console.log(r)
          if (r.status == "200") {
            this.totalMyQue = r.data.total;
            this.myQueList = r.data.datas
            this.$vux.loading.hide();
          } else {
            this.totalMyQue = 0;
            this.$vux.loading.hide();
          }

        }).catch(e => {
          console.log(e)
        })
      },
      //提问详情
      myQueOptions(id) {
        this.$router.push({
          name: "wodetiwenxiangqing",
          query: {
            id: id
          }
        })
      },
      //我的回复
      MyReply() {
        this.$vux.loading.show();
        let data = {
          userid: localStorage.userId,
        };
        this.$index.MyReply(data).then(r => {
          console.log(r);
          if (r.status == "200") {
            this.totalMyReply = r.data.total;
            this.myReplyList = r.data.datas;
            this.optimumCount = r.optimum_count;
            this.$vux.loading.hide();
          } else {
            this.totalMyReply = 0;
            this.optimumCount = 0;
            this.$vux.loading.hide();
          }
        }).catch(e => {
          console.log(e)
        })
      },
      //回复详情
      myReplyOptions(id) {
        this.$router.push({
          name: "wodehuidaxiangqing",
          query: {
            id: id
          }
        })
      }
    },
    mounted() {
      this.MyQue();
      this.MyReply();
      this.integral = localStorage.integral;
    }
  }
</script>

<style scoped lang="less">
  .meAsk {
    width: 100%;

    .live-white {
      width: 100%;
      height: 10px;
      background: #F8F8F8;
      margin-top: 44px;
    }

    /*积分与采纳*/

    .accept {
      width: 100%;
      height: 94px/2;
      display: flex;
      justify-content: space-around;
      line-height: 94px/2;
      font-size: 15px;
      color: #333;

      a {
        color: #E7561E;
        font-weight: bold;
      }
    }

    /*提问问答*/

    .ask {
      width: 100%;
      height: 96px/2;
      border-bottom: 1px/2 solid rgba(222, 222, 222, 1);
      border-top: 1px/2 solid rgba(222, 222, 222, 1);
      display: flex;
      justify-content: space-around;
      line-height: 96px/2;

      .wire {
        width: 1px/2;
        height: 47px/2;
        background: rgba(222, 222, 222, 1);
        margin: auto 0;
      }

      .ask-main,
      .ask-mainO {
        padding: 0 20px;
        font-size: 28px/2;
      }

      .ask-main {
        margin-left: 150px/2;
      }

      .ask-mainO {
        margin-right: 150px/2;
      }

      .active,
      .activeO {
        padding: 0 20px;
        font-size: 28px/2;
        border-bottom: 2px solid #E7561E;
        color: #E7561E;
      }

      .active {
        margin-left: 150px/2;
      }

      .activeO {
        margin-right: 150px/2;
      }
    }

    /*问答列表*/

    .ask-list {
      width: 702px/2;
      margin: auto;

      .quiz-list {
        width: 100%;
        height: 223px/2;
        border-bottom: 1px solid rgba(242, 242, 242, 1);

        p:first-child {
          color: #333333;
          font-size: 30px/2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          padding-top: 51px/2;
        }

        p:last-child {
          font-size: 24px/2;
          color: #24A0EE;
          padding-top: 20px;
        }
      }

      .answer-list {
        width: 100%;
        height: 270px/2;
        border-bottom: 1px solid rgba(242, 242, 242, 1);

        p {
          color: #333333;
          font-size: 30px/2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          padding-top: 50px/2;
        }

        div {
          display: flex;
          justify-content: space-between;
          padding-top: 20px;
          font-size: 24px/2;

          span:first-child {
            color: #999;
          }

          span:last-child {
            color: #E7561E;
          }
        }
      }
    }
  }
</style>
