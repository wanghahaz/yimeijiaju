<template>
  <div class="issueDetails">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        在线问答
      </div>
    </header>
    <div class="blackEdging">

    </div>
    <div class="issue">
      <h1><span v-show="queOptions.reward_points>0"><img src="../../../static/image/index/qian.png"/>{{queOptions.reward_points}}</span>
        {{queOptions.inter_title}}
      </h1>
      <p class="interContent">{{queOptions.inter_content}}</p>
      <div class="img_index">
        <div v-for="item in imgList">
          <img v-lazy="'http://image.meijujingxuan.com/'+item" alt="">
        </div>
      </div>
      <div v-show="respondBol">
        <div class="issue_list" v-show="myAnswer" @click="onMyAnswer">
          <img src="../../../static/image/login/huida.png"/>
          <p>我来答</p>
        </div>
      </div>
      <div v-show="!myAnswer">
        <group>
          <x-textarea autosize :max="200" :placeholder="placeholder" :show-counter="false"
                      v-model="replyContent"></x-textarea>
        </group>
        <div class="issue_A">
          <span @click="onMyAnswer">收起 <img src="../../../static/image/me/sqsq.png" alt=""></span>
          <span v-if="this.replyContent.length<=0" class="publish">发布</span>
          <span v-else class="active" @click="reply">发布</span>
        </div>
      </div>
    </div>
    <div class="blackEdging_one">

    </div>
    <!--收到的回答-->
    <div class="obtainAnswer">
      <p class="huida">收到{{replyCounts}}条回答</p>
      <div class="obtainAnswer_list" v-for="item in getReplyList">
        <div class="accept">
          <div class="obtainAnswer_1">
            <img :src="item.head_img"/>
            <div>
              <p>{{item.username}}</p>
              <p>{{item.reply_time}}</p>
            </div>
          </div>
          <div class="accept_one" v-show="item.is_optimum==1">
            已采纳
          </div>
        </div>

        <p class="textOne">{{item.reply_content}}</p>
        <div class="btn">
          <div class="comment">
            <img src="../../../static/image/selection/pinglun.png" alt="">
            评论
          </div>
          <div class="like">
            <img src="../../../static/image/selection/dianzan.png" alt="">
            <a>5</a>
          </div>
          <div class="comment">
            <img src="../../../static/image/me/jb.png" alt="">
            举报
          </div>
        </div>
      </div>
    </div>
    <div class="more_msg" v-show="moreBol">
      <span>更多回答({{replyNum}})</span>
    </div>
    <div class="blackEdging_one">

    </div>

    <!--相关问题-->
    <div class="correlationIssue">
      <h1>相关问题</h1>
      <div v-for="item in relatedQueList" @click="goIssueDetails(item.que_id)">
        <p class="textTwo">{{item.inter_title}}</p>
        <p class="textThree">{{item.inter_content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {XTextarea, Group} from 'vux'

  export default {
    inject: ['reload'],
    components: {
      XTextarea,
      Group
    },
    name: "woyaohuidaxiangqingye",
    data() {
      return {
        placeholder: "这个问题您怎么看？ 期待您的回答......",
        myAnswer: true,
        queOptions: [],
        replyContent: "",
        getReplyList: [],//获取回复列表
        replyCounts: "",//问题数量
        moreBol: false,//显示更多
        replyNum: "",
        imgList: "",
        typeId: "",
        relatedQueList: "",
        respondBol: false,
      }
    },
    mounted() {
      this.GetQueInfo();
      this.GetReply();
    },
    methods: {
      //点击我来答和收起
      onMyAnswer() {
        if (localStorage.userId == "") {
          this.$router.push({
            name: "login"
          });
          return;
        }
        this.myAnswer = !this.myAnswer
      },
      //问题详情
      GetQueInfo() {
        this.$vux.loading.show();
        let data = {
          que_id: this.$route.query.id
        };
        this.$index.GetQueInfo(data).then((res) => {
          this.imgList = res.data.inter_img;
          this.typeId = res.data.type_id;
          this.RelatedQue(this.typeId);
          this.queOptions = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
      //回复问题
      reply() {
        let data = {
          que_id: this.$route.query.id,
          user_id: localStorage.userId,
          reply_content: this.replyContent
        };
        this.$index.reply(data).then((res) => {
          this.replyContent = "";
          this.myAnswer = !this.myAnswer;
          this.GetReply();
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
          if (this.getReplyList.length > 0) {
            for (let i = 0; i < this.getReplyList.length; i++) {
              if (this.getReplyList[i].is_optimum == 1) {
                this.respondBol = false;
              } else {
                this.respondBol = true;
              }
            }
          } else {
            this.respondBol = true;
          }
          this.getReplyList = this.getReplyList.slice(0, 3);
          for (let i = 0; i < this.getReplyList.length; i++) {
            this.getReplyList[i].head_img = this.$imgSrc + this.getReplyList[i].head_img
          }
          if (this.replyCounts > 3) {
            this.moreBol = true;
            this.replyNum = this.replyCounts / 1 - 3
          } else {
            this.moreBol = false;
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
      //相关问题
      RelatedQue(id) {
        this.$vux.loading.show();
        let data = {
          type_id: id
        };
        this.$index.RelatedQue(data).then((res) => {
          this.relatedQueList = res.data;
          console.log(res);
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
      //跳转详情
      goIssueDetails(id) {
        this.$router.push({
          name: "woyaohuidaxiangqingye",
          query: {
            id: id
          }
        });
        this.reload();
      },
      goBack() {
        this.$router.go(-1)
      }
    },
    computed: {},
    $route: {
      handler: function (val, oldVal) {
        this.GetQueInfo();
        this.GetReply();
      },
      immediate: true
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/overall.less";

  .issueDetails {
    width: 100%;

    .headernavigation {
      position: fixed;
      width: 100%;
      top: 0;
      text-align: center;
      height: 88px/2;
      font-size: 34px/2;
      line-height: 88px/2;
      background: white;
      z-index: 99;

      p {
        position: absolute;
        left: @small-size;
      }
    }

    .blackEdging {
      width: 100%;
      height: 20px/2;
      background: #F8F8F8;
      margin-top: 88px/2;
    }

    .issue {
      width: 702px/2;
      margin: auto;
      padding-top: 47px/2;
      padding-bottom: 40px/2;

      .interContent {
        font-size: 12px;
        margin-top: 10px;
        color: #666;
      }

      .img_index {
        width: 702px/2;
        margin: 20px auto 0;
        display: flex;

        div {
          width: 230px/2;
          margin-left: 3px;

          img {
            width: 100%;
            height: 230px/2;
          }
        }

        div:first-child {
          margin: 0;
        }
      }


      /deep/ .weui-cell {
        padding-left: 0;
        height: 302px/2;
        font-size: @small-size;
      }

      .issue_A {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 26px/2;
        font-size: @small-size;
        color: rgba(102, 102, 102, 1);

        span:first-child {
          display: flex;
          line-height: 25px;

          img {
            width: 20px/2;
            height: 12px/2;
            margin: auto 0 auto 18px/2;
          }
        }

        .publish {
          width: 120px/2;
          height: 50px/2;
          background: rgba(231, 86, 30, 0.3);
          border-radius: 4px/2;
          color: rgba(255, 255, 255, 1);
          line-height: 25px;
          text-align: center;
        }

        .active {
          width: 120px/2;
          height: 50px/2;
          background: rgba(231, 86, 30, 1);
          border-radius: 4px/2;
          color: rgba(255, 255, 255, 1);
          line-height: 25px;
          text-align: center;
        }
      }

      h1 {
        font-size: 30px/2;
        color: rgba(51, 51, 51, 1);

        span {
          width: 70px/2;
          height: 30px/2;
          line-height: 30px/2;
          background: rgba(233, 85, 4, 1);
          border-radius: 14px/2;
          display: inline-block;
          vertical-align: middle;
          font-size: 20px/2;
          color: rgba(255, 255, 255, 1);
          text-indent: 32px/2;
          position: relative;

          img {
            width: 33px/2;
            height: 26px/2;
            position: absolute;
            left: 0;
          }
        }
      }

      .issue_list {
        display: flex;
        width: 184px/2;
        height: 64px/2;
        background: rgba(231, 86, 30, 1);
        border-radius: 4px/2;
        color: white;
        font-size: @small-size;
        line-height: 64px/2;
        margin-top: 40px/2;

        img {
          width: 26px/2;
          height: 26px/2;
          margin: auto 12px/2 auto 37px/2;
        }
      }
    }

    .blackEdging_one {
      margin: auto;
      width: 702px/2;
      height: 20px/2;
      background: #F8F8F8;
    }

    .obtainAnswer {
      width: 702px/2;
      margin: auto;

      .huida {
        padding: 30px/2 0;
        font-size: @small-size;
        color: #333333;
      }

      .obtainAnswer_list:last-child {
        border-bottom: 1px solid rgba(222, 222, 222, 1);
      }

      .obtainAnswer_list {
        width: 100%;
        padding: 40px/2 0 70px/2;
        border-top: 1px solid rgba(222, 222, 222, 1);

        .accept {
          display: flex;
          justify-content: space-between;

          .accept_one {
            text-align: right;
            margin: auto 0;
            color: #E7561E;
            font-size: 13px;
          }
        }

        .obtainAnswer_1 {
          display: flex;

          img {
            width: 60px/2;
            height: 60px/2;
            border-radius: 50%;
            margin: auto 16px/2 auto 0;
          }

          div {
            p:first-child {
              font-size: @size;
              font-weight: @font-weight;
              margin-bottom: 10px/2;
            }

            p:last-child {
              font-size: 22px/2;
              color: rgba(153, 153, 153, 1);
            }
          }


        }

        .textOne {
          /*
          width: 456px/2;
          /*overflow: hidden;*/
          /*text-overflow: ellipsis;*/
          /*white-space: nowrap;*/
          font-size: @size;
          color: rgba(51, 51, 51, 1);
          margin: 40px/2 0;
        }

        .btn {
          font-size: 24px/2;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          display: flex;
          width: 430px/2;
          justify-content: space-between;
          float: right;

          .comment, .like {
            width: 120px/2;
            height: 50px/2;
            line-height: 50px/2;
            text-align: center;
            border: 1px solid rgba(219, 219, 219, 1);
            border-radius: 24px/2;
            display: flex;

            img {
              width: 33px/2;
              height: 32px/2;
              margin: auto 6px/2 auto 20px/2;
            }
          }

          .comment img {
            width: 33px/2;
            height: 32px/2;
          }

          .like {

            img {
              width: 30px/2;
              height: 32px/2;
              margin: auto 30px/2 auto 20px/2;
            }
          }
        }
      }
    }

    //查看全部评论
    .more_msg {
      width: 100%;
      height: 90px/2;
      line-height: 90px/2;
      text-align: center;
      font-size: 26px/2;
      color: rgba(51, 51, 51, 1);
    }

    .correlationIssue {
      width: 702px/2;
      margin: auto;

      h1 {
        font-size: 32px/2;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        padding: 30px/2 0;
      }

      .textTwo {
        font-size: @size;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 40px/2;
      }

      .textThree {
        width: 391px/2;
        font-size: 24px/2;
        color: rgba(102, 102, 102, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 57px/2;
      }
    }

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
          width: 19px/2;
          margin-top: 15px;
          height: 32px/2;
        }
      }

      .title {
        width: 90%;
        text-align: center;
        font-size: 36px/2;
      }
    }
  }
</style>
