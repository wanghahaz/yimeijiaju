<template>
  <div class="seek">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        在线问答
      </div>
    </header>
    <!--搜索-->
    <div class="seekH">
      <input type="text" placeholder="请输入关键字" v-model="antistop" @input="getQueList">
      <p @click="goBack">取消</p>
      <img class="search" src="../../../static/image/choicenessstylist/suoxiaobai.png" alt="">
    </div>
    <!--向网友提问-->
    <p class="banquet">
      <img src="../../../static/image/choicenessstylist/wenhao.png" alt="">
      <span>向网友提问</span>
    </p>


    <!--热门提问-->
    <div class="mentoringbox" v-show="hotBol">
      <div class="mentoringlist" @click="goIssueDetails(item.que_id)" v-for="item in queList">
        <div :class="item.head_img==null?'active':'mentoringone'">
          <h1><span v-show="item.integral_num>0"><img src="../../../static/image/index/qian.png"/>{{item.integral_num}}</span>
            {{item.inter_title}}
          </h1>
          <p class="twolines">{{item.inter_content}}</p>
          <p class="threelines"></p>
          <p class="fourlines">{{item.browse_times}}人看过</p>
        </div>
        <img :src="'http://image.meijujingxuan.com/'+item.head_img" v-show="item.head_img!=null"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "seek",
    data() {
      return {
        antistop: "",
        hotBol: false,
        queList: "",
      }
    },
    mounted() {
      if (localStorage.userId == undefined) {
        localStorage.setItem('userId', "")
      }
    },
    methods: {
      //问题列表
      getQueList() {
        this.$vux.loading.show();
        if (this.antistop == "") {
          this.hotBol = false;
          this.$vux.loading.hide();
          return;
        }
        let data = {
          order_condition: 2,
          type_id: "",
          inter_status: 2,
          inter_title: this.antistop,
          user_id: localStorage.userId
        };
        this.$index.GetQueList(data).then((res) => {
          this.queList = res.data;
          if (this.queList.length > 0) {
            this.hotBol = true;
          } else {
            this.hotBol = false;
          }
          for (let i = 0; i < this.queList.length; i++) {
            if (this.queList.head_img == null) {
              this.imgBol = false;
            }
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
      //问题详情
      goIssueDetails(id) {
        this.$router.push({
          name: "woyaohuidaxiangqingye",
          query: {
            id: id
          }
        })
      },
      //返回上一级
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/overall.less";

  .seek {
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

    .seekH {
      width: 702px/2;
      display: flex;
      justify-content: space-between;
      margin: 128px/2 auto 41px/2;
      position: relative;

      input {
        font-size: 28px/2;
        width: 560px/2;
        height: 60px/2;
        background: rgba(243, 243, 243, 1);
        border-radius: 30px/2;
        text-indent: 56px/2;
      }

      p {
        height: 60px/2;
        line-height: 60px/2;
        font-size: 32px/2;
      }

      .search {
        position: absolute;
        left: 17px/2;
        top: 14px/2;
        width: 31px/2;
        height: 32px/2;
      }
    }

    .banquet {
      width: 190px/2;
      margin: auto;
      display: flex;
      justify-content: space-between;
      font-size: @size;
      color: #666666;

      img {
        width: 32px/2;
        height: 32px/2;
        margin-top: 3px/2;
      }
    }

    /*热门提问*/

    .mentoringbox {
      width: 700px/2;
      margin: auto;

      .mentoringlist {
        width: 100%;
        padding: 48px/2 0 25px/2;
        border-bottom: 1px solid rgba(248, 248, 248, 1);
        display: flex;
        justify-content: space-between;

        img {
          width: 188px/2;
          height: 188px/2;
          border-radius: 10px/2;
        }

        .mentoringone {
          width: 450px/2;

          h1 {
            font-size: 32px/2;
            color: rgba(51, 51, 51, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            span {
              width: 70px/2;
              height: 30px/2;
              background: rgba(233, 85, 4, 1);
              border-radius: 14px/2;
              display: inline-block;
              vertical-align: middle;
              font-size: 20px/2;
              color: rgba(255, 255, 255, 1);
              text-indent: 36px/2;
              position: relative;

              img {
                width: 33px/2;
                height: 26px/2;
                position: absolute;
                left: 0;
              }
            }
          }

          .twolines {
            width: 100%;
            font-size: @small-size;
            color: rgba(102, 102, 102, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin-top: 40px/2;
          }

          .threelines {
            width: 44px/2;
            height: 2px/2;
            background: rgba(153, 153, 153, 0.8);
            margin-top: 35px/2;
          }

          .fourlines {
            font-size: 24px/2;
            color: rgba(153, 153, 153, 1);
            margin-top: 24px/2;
          }
        }


        .active {
          width: 100%;

          h1 {
            font-size: 32px/2;
            color: rgba(51, 51, 51, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            span {
              width: 70px/2;
              height: 30px/2;
              background: rgba(233, 85, 4, 1);
              border-radius: 14px/2;
              display: inline-block;
              vertical-align: middle;
              font-size: 20px/2;
              color: rgba(255, 255, 255, 1);
              text-indent: 36px/2;
              position: relative;

              img {
                width: 33px/2;
                height: 26px/2;
                position: absolute;
                left: 0;
              }
            }
          }

          .twolines {
            width: 100%;
            font-size: @small-size;
            color: rgba(102, 102, 102, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin-top: 40px/2;
          }

          .threelines {
            width: 44px/2;
            height: 2px/2;
            background: rgba(153, 153, 153, 0.8);
            margin-top: 35px/2;
          }

          .fourlines {
            font-size: 24px/2;
            color: rgba(153, 153, 153, 1);
            margin-top: 24px/2;
          }
        }
      }
    }
  }
</style>
