<template>
  <div class="question">
    <div class="headernavigation">
      <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      我要回答
      <img class="search caidan" src="../../../static/image/choicenessstylist/caidan.png" @click="cephalosome" alt="">
    </div>
    <div class="remain">

    </div>
    <!--tebbar切换-->
    <div class="grabble">
      <div class="grabble-one">
        <p @click="hotindex=0" :class="hotindex==0?'nohot':'hot'">热门提问</p>
        <p @click="hotindex=1" :class="hotindex==1?'nohot':'hot'">高悬赏</p>
      </div>
      <div class="grabble-two">
        <input type="text" placeholder="按关键词筛选" v-model="antistop">
        <img class="search" src="../../../static/image/choicenessstylist/suoxiaobai.png" alt="" @click="getQueList">
      </div>
    </div>
    <!--热门提问-->
    <div class="mentoringbox">
      <div class="mentoringlist" @click="goIssueDetails(item.que_id)" v-for="item in queList">
        <div :class="item.inter_img==''?'active':'mentoringone'">
          <h1><span v-show="item.inter_status==0&&item.reward_points>0"><img
            src="../../../static/image/index/qian.png"/>{{item.reward_points}}</span>
            {{item.inter_title}}
          </h1>
          <p class="twolines">{{item.inter_content}}</p>
          <p class="threelines"></p>
          <p class="fourlines">{{item.browse_times}}人看过</p>
        </div>
        <img v-lazy="'http://image.meijujingxuan.com/'+item.inter_img" v-show="item.inter_img!=''"/>
      </div>
    </div>
    <!--头部模态框-->
    <div class="cephalosome" v-show="cephalosomeBol" @click="closecephalosome" @touchmove.prevent>
      <div class="cephalosomebox">
        <div class="cephalosomeboxlist" @click="goMe">
          <img src="../../../static/image/index/denglu.png" class="geren"/> 个人中心
        </div>
        <a class="cephalosomeboxlist" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
          <img src="../../../static/image/index/zaixian.png" class="kefu"/> 在线客服
        </a>
        <div class="cephalosomeboxlist" @click="goIndex">
          <img src="../../../static/image/me/syyy.png" class="shouye"/> 首页
        </div>
      </div>
    </div>
    <infinite-loading :on-infinite="getQueList" ref="infiniteLoading">
			<span slot="no-more" class="no-more">
				已无数据
			</span>
      <span slot="no-results" class="no-more">
    		已无数据
      </span>
    </infinite-loading>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    name: "zaixianwendawoyaohuida",
    components: {
      InfiniteLoading
    },
    watch: {
      antistop(newVal, oldVal) {
        if (newVal != oldVal) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
          this.queList = [];
          this.page = 0;
          this.getQueList()
        }
      }
    },
    data() {
      return {
        hotindex: 0,
        queList: "",
        imgBol: true,
        antistop: "",
        cephalosomeBol: false, //头部菜单模态框
        page: 0,
        calculusBol: false,
      }
    },
    mounted() {
      if (localStorage.userId == undefined) {
        localStorage.setItem('userId', "")
      }
      this.getQueList(2);
    },
    methods: {
      closecephalosome() {
        this.cephalosomeBol = false;
      },
      cephalosome() {
        if (localStorage.userId == "" || localStorage.userId == undefined) {
          this.cephalosomeBol = false;
          this.$router.push({
            name: "login"
          })
        } else {
          this.cephalosomeBol = true;
        }
      },
      //返回
      goBack() {
        this.$router.go(-1)
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
      //去往首页
      goIndex() {
        this.$router.push({
          name: "index"
        })
      },
      //去往个人中心
      goMe() {
        this.$router.push({
          name: "gerenzhongxin"
        })
      },
      //问题列表
      getQueList() {
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
          order_condition: 2,
          type_id: "",
          inter_status: 0,
          inter_title: this.antistop,
          user_id: localStorage.userId
        };
        this.$index.GetQueList(data).then((res) => {
          // this.queList = res.data.data;
          // for (let i = 0; i < this.queList.length; i++) {
          //   if (this.queList.head_img == null) {
          //     this.imgBol = false;
          //   }
          // }
          if (res.data.data.length) {
            var data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i].logo_path = this.$imgSrc + data[i].logo_path
            }
            this.queList = [...this.queList, ...data];

            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/overall.less";
  @import "../../../static/css/header.less";

  .question {
    width: 100%;

    .caidan {
      width: 22px;
      height: auto;
    }

    .remain {
      width: 100%;
      height: 10px/2;
      margin-top: 88px/2;
      background: rgba(248, 248, 248, 1);
    }

    /*tebbar切换*/

    .grabble {
      width: 702px/2;
      height: 83px/2;
      margin: auto;
      display: flex;
      justify-content: space-between;

      .grabble-one {
        display: flex;
        justify-content: space-between;
        flex: 1;
        font-size: 32px/2;
        line-height: 83px/2;

        .hot {
          padding: 0 20px/2;
          color: #333333;
          font-weight: @font-weight;
        }

        .nohot {
          padding: 0 20px/2;
          border-bottom: 1px solid #E95504;
          color: #E95504;
        }
      }

      .grabble-two {
        position: relative;
        width: 335px/2;
        height: 50px/2;
        margin-left: 50px/2;
        margin-top: 15px/2;

        input {
          text-indent: 15px/2;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(222, 222, 222, 1);
          border-radius: 25px/2;
          font-size: @small-size;
        }

        img {
          position: absolute;
          width: 26px/2;
          height: 27px/2;
          bottom: 11px/2;
          right: 12px/2;
        }
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
              line-height: 15px;

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

    // 头部模态框
    .cephalosome {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-tap-highlight-color: transparent;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 99;

      .cephalosomebox {
        width: (240px/2);
        background: rgba(255, 255, 255, 1);
        position: relative;
        top: (98px/2);
        left: (486px/2);

        .cephalosomeboxlist {
          display: inline-block;
          width: (240px/2);
          height: (88px/2);
          border-bottom: 1px solid #E7E7E7;
          margin: auto;
          line-height: (88px/2);
          font-size: (28px/2);
          color: rgba(51, 51, 51, 1);

          img {
            width: (32px/2);
            height: (36px/2);
            margin-right: (20px/2);
            margin-left: (22px/2);
            vertical-align: middle;
          }

          .xiaoxi, .shouye {
            width: (36px/2);
            height: auto;
          }

          .kefu, .geren {
            width: (32px/2);
            height: auto;
          }
        }
      }
    }
  }
</style>
