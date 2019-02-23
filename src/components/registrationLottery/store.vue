<template>
  <div class="score-container">
    <div class="headernavigation">
      <img class="back" src="../../../static/image/login/fanhui.png" @click="goBack" alt="">
      积分换礼
      <div class="caidan">
        <!--<img class="search" src="../../../static/image/choicenessstylist/iconfenxiang.png" alt="">-->
        <img class="search" src="../../../static/image/choicenessstylist/caidan.png" alt="" @click="cephalosome">
      </div>
    </div>

    <div class="banner" @click="goRules">
      <img src="../../../static/image/me/gfjf.png" alt="">
    </div>

    <div class="user-info" v-show="!userInfoBol">
      <p>{{getUserInfoObj.username}}<span class="score-count">已有<span style="color: #E95504">{{getUserInfoObj.integral_balance}}</span>积分</span>
      </p>
    </div>
    <div class="user-info" v-show="userInfoBol">
      <p>登录查看已有加分</p>
    </div>

    <div class="registration">
      <ntegral></ntegral>
    </div>

    <div class="active-block">
      <div class="left" @click="goRegistrationLottery">
        <img src="../../../static/image/me/gffff.png" alt="">
      </div>
      <div class="right">
        <img @click="goMission" src="../../../static/image/me/money.png" alt="">
        <img @click="goLottery" src="../../../static/image/me/choujiang.png" alt="">
      </div>
    </div>

    <div class="product-list">
      <!--排序  搜素-->
      <div class="sort">
        <div class="sort-box-mark">
          <div class="sort-box">
            <span @click="index=0,synthesizeBol=true" :class="index==0?'active':''">全部商品</span>
            <span @click="handleSynthesize" :class="index==1?'active':''">排序

            <img src="../../../static/image/me/xl.png" alt="" v-show="synthesizeBol">
            <img src="../../../static/image/me/xll.png" alt="" v-show="!synthesizeBol">
              </span>
          </div>
          <div class="synthesize" v-show="!synthesizeBol" @touchmove.prevent>
            <p v-for="(item,index) in synthesizeList" @click="handleSynthesizeBol(item.id)">
              {{item.name}}
              <img src="../../../static/image/me/dg.png" alt="" v-show="synthesizeId==index">
            </p>
          </div>
        </div>

        <img src="../../../static/image/choicenessstylist/suoxiaobai.png" alt="" class="sousu"/>
        <input type="text" placeholder="搜索">
      </div>
      <!--排序模态框-->


      <div class="mark" v-show="!synthesizeBol" @touchmove.prevent @click="closeSynthesize">
      </div>


      <div class="list">
        <div class="list-line">
          <div class="item" v-for="item in list">
            <img :src="item.img" alt="">
            <div class="title">
              {{item.title}}
            </div>
            <div class="price">
              原价 ¥{{item.price}}
            </div>
            <div class="score-price">
              美居 {{item.scorePrice}}积分
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--头部模态框-->
    <div class="cephalosome" v-show="cephalosomeBol" @click="closecephalosome" @touchmove.prevent>
      <div class="cephalosomebox">
        <div class="cephalosomeboxlist">
          <img src="../../../static/image/me/xxxx.png" class="xiaoxi"/> 消息
        </div>
        <a class="cephalosomeboxlist" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
          <img src="../../../static/image/index/zaixian.png" class="kefu"/> 在线客服
        </a>
        <div class="cephalosomeboxlist" @click="goMe">
          <img src="../../../static/image/index/denglu.png" class="geren"/> 个人中心
        </div>
        <div class="cephalosomeboxlist" @click="goIndex">
          <img src="../../../static/image/me/syyy.png" class="shouye"/> 首页
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import GrayLine from "../../base/componts/gray-line";
  import ntegral from '@/components/ntegral.vue'

  export default {
    name: "index",
    // components: {GrayLine},
    components: {
      ntegral
    },
    data() {
      return {
        userInfoBol: false,
        getUserInfoObj: [],
        cephalosomeBol: false, //头部菜单模态框
        index: 0,
        list: [{
          img: "../../../../../static/image/index/xsmax.jpg",
          title: "iPhone XS 256G 深空灰",
          price: "10099",
          scorePrice: "1009900"
        }, {
          img: "../../../../../static/image/index/zhentou.jpg",
          title: "乳胶U型枕",
          price: "79.9",
          scorePrice: "7900"
        }, {
          img: "../../../../../static/image/index/taideng.jpg",
          title: "灰色充电式小夜灯",
          price: "99.9",
          scorePrice: "9990"
        }, {
          img: "../../../../../static/image/index/xiangzi.jpg",
          title: "黑色24寸铝框拉杆箱",
          price: "459.9",
          scorePrice: "45990"
        }, {
          img: "../../../../../static/image/index/beizi.jpg",
          title: "单手开随身杯",
          price: "49.9",
          scorePrice: "4990"
        }, {
          img: "../../../../../static/image/index/wazi.jpg",
          title: "姜黄色精梳棉高筒袜",
          price: "9.9",
          scorePrice: "990"
        }],
        synthesizeBol: true,
        synthesizeList: [{
          id: 0,
          name: '默认'
        }, {
          id: 1,
          name: '兑换次数降序'
        }, {
          id: 2,
          name: '积分降序'
        }, {
          id: 3,
          name: '积分升序'
        }],
        synthesizeId: null
      }
    },
    methods: {
      closeSynthesize() {
        this.index = 0;
        this.synthesizeBol = true;
      },
      handleSynthesize() {
        this.index = 1;
        this.synthesizeBol = !this.synthesizeBol;
      },
      handleSynthesizeBol(id) {
        this.synthesizeId = id;
      },
      goBack() {
        this.$router.go(-1)
      },
      // 关闭头部菜单登录模态框
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
      //去注册抽奖
      goRegistrationLottery() {
        this.$router.push({
          name: "zhucechoujiang"
        })
      },
      //今日任务
      goMission() {
        this.$router.push({
          name: "renwuzhongxin"
        })
      },
      //抽奖
      goLottery() {
        this.$router.push({
          name: "choujiang"
        })
      },
      //积分规则
      goRules() {
        this.$router.push({
          name: "jifenguize"
        })
      },
      GetUserInfo() {
        this.$vux.loading.show();
        let data = {
          userid: localStorage.userId
        };
        this.$index.GetUserInfo(data).then((res) => {
          this.getUserInfoObj = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      if (localStorage.userId != "" && localStorage.userId != undefined) {
        this.GetUserInfo();
        this.userInfoBol = this.userInfoBol;
      } else {
        this.userInfoBol = !this.userInfoBol;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../static/css/var";

  .score-container {
    @extend .baseBox;

    .product-list {
      margin-top: (20px/2);
      padding-top: 15px;
      background-color: white;

      .list {
        margin-top: 20px;
        width: 100%;

        .list-line {
          width: 100%;
          padding: 0 (15px/2);
          box-sizing: border-box;

          .item {
            display: inline-block;
            width: 50%;
            box-sizing: border-box;
            padding: 0 5px;
            margin-top: (10px/2);

            img {
              width: 100%;
              height: (340px/2);
              border-radius: 4px;
              border: 1px solid rgba(222, 222, 222, 1);
            }

            .title {
              font-size: (24px/2);
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
              margin-top: (27px/2);
            }

            .price {
              font-size: (24px/2);
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              margin-top: (24px/2);
            }

            .score-price {
              font-size: (24px/2);
              font-weight: bold;
              color: #FF0028;
              line-height: (36px/2);
              margin-top: (20px/2);
            }
          }
        }
      }

      /*排序*/
      .sort {
        z-index: 99;
        position: relative;
        width: (702px/2);
        padding: 0 12px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        background: white;
        font-size: 18px;
        line-height: 30px;
        color: #333333;

        .sousu {
          position: absolute;
          width: 15px;
          height: 16px;
          right: 19px;
          top: 8px;
        }

        input {
          width: (379px/2);
          height: 30px;
          border: 1px solid rgba(222, 222, 222, 1);
          border-radius: 15px;
          font-size: 12px;
          text-indent: 12px;
        }

        .sort-box {
          flex: 1;
          display: flex;
          justify-content: space-between;

          span:last-child {
            display: flex;

            img {
              width: 10px;
              height: 6px;
              margin: auto 8px auto 5px;
            }
          }

          .active {
            font-weight: bold;
            color: #E95504;
            border-bottom: 2px solid #E95504;
          }
        }
      }
    }

    .banner {
      width: 100%;
      margin-top: (20px/2);
      height: (300px/2);

      img {
        width: 100%;
        height: 100%;
      }
    }

    .user-info {
      padding: (51px/2) (25px/2) 0;
      font-size: (36px/2);
      background-color: white;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);

      .score-count {
        margin-left: 30px;
        font-size: 15px;
      }
    }

    .active-block {
      height: (322px/2);
      width: 100%;
      display: table;
      table-layout: fixed;
      background-color: white;
      padding: 0 (25px/2);
      box-sizing: border-box;

      img {
        border-radius: 4px;
      }

      .left {
        display: table-cell;
        padding-right: 5px;

        img {
          width: 100%;
          height: (322px/2);
        }
      }

      .right {
        display: table-cell;
        padding-left: 5px;
        vertical-align: top;

        img {
          width: 100%;
          height: (150px/2);
          margin-bottom: (19px/2);
        }
      }
    }

    .registration {
      width: 100%;
      height: (190px/2);
      background: white;
    }

    .headernavigation {
      width: 100%;
      height: 44px;
      display: flex;
      justify-content: space-between;
      line-height: 44px;
      font-size: 18px;
      text-align: center;
      background: white;
      border-bottom: 1px solid #F8F8F8;
      position: fixed;
      top: 0;

      .back {
        width: (19px/2);
        height: (32px/2);
        margin: auto 0 auto (25px/2);
      }

      .caidan {
        display: flex;

        img:first-child {
          width: (34px/2);
          height: (33px/2);
        }

        img:last-child {
          width: 22px;
          height: 16px;
        }
      }

      .search {
        width: (37px/2);
        height: (37px/2);
        margin: auto (27px/2) auto 0;
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
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 99;
      -webkit-tap-highlight-color:transparent;

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

    .synthesizeP {
      color: #E95504;
    }

    .sort-box-mark {
      z-index: 99;
      position: relative;
      width: 150px;

      .synthesize {
        position: absolute;
        z-index: 11;
        height: (320px/2);
        background: white;
        left: -12px;
        box-shadow: 0 2px 5px #eee;

        p {
          width: (702px/2);
          padding: 0 12px;
          height: (79px/2);
          line-height: (79px/2);
          font-size: 14px;
          text-indent: 10px;
          border-bottom: (1px/2) solid rgba(240, 240, 240, 1);
          display: flex;
          justify-content: space-between;

          img {
            width: (26px/2);
            height: (17px/2);
            margin: auto 8px;
          }
        }
      }
    }

    .mark {
      overflow: hidden;
      position: fixed;
      -webkit-tap-highlight-color:transparent;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 11;
    }
  }
</style>
