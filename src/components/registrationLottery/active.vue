<template>
  <div class="active-container">

    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        精选活动
      </div>

      <a class="right" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
        <img class="search" src="../../../static/image/active/kfff.png" alt="">
      </a>
    </header>


    <div class="banner" v-for="item in bannerInfo">
      <img :src="'http://image.meijujingxuan.com/'+item.banner_img" alt="">
    </div>

    <!--<div class="coupon">-->
    <!--<div class="title">-->
    <!--<div class="line-left"></div>-->
    <!--<span>限量发放</span>-->
    <!--<div class="line-right"></div>-->
    <!--</div>-->
    <!--<div class="coupon-list">-->
    <!--<div class="coupon-item">-->
    <!--<img src="../../../static/image/active/coupon.png" alt="">-->
    <!--</div>-->
    <!--<div class="coupon-item">-->
    <!--<img src="../../../static/image/active/coupon.png" alt="">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="phone">-->
    <!--<div class="phone-input">-->
    <!--<input type="text" placeholder="请输入手机号">-->
    <!--</div>-->
    <!--<div class="submit">-->
    <!--<button>-->
    <!--一键领券-->
    <!--</button>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="module">-->
    <!--<div class="title">-->
    <!--<img src="../../../static/image/active/title1.png" alt="">-->
    <!--</div>-->
    <!--<div class="banner">-->
    <!--<img src="../../../static/image/active/module1.png" alt="">-->
    <!--</div>-->
    <!--</div>-->
    <div class="module moduleOne">
      <div class="title">
        <img src="../../../static/image/active/jxsj.png" alt="">
      </div>
      <!--精选商家-->
      <div class="selectMerchants" v-for="item in shopActivesInfo">
        <img class="logo" :src="'http://image.meijujingxuan.com/'+item.shop_actives_img" alt="">
        <div class="selectMerchants-box">
          <div class="selectMerchants-one">
            <div class="selectMerchants-list">
              <img :src="'http://image.meijujingxuan.com/'+item.shop_logo_path" alt="">
            </div>
            <div class="selectMerchants-listO">
              <p>{{item.shop_name}}</p>
              <span>
                <img src="../../../static/image/index/xing.png" alt="">
                <img src="../../../static/image/index/xing.png" alt="">
                <img src="../../../static/image/index/xing.png" alt="">
                <img src="../../../static/image/index/xing.png" alt="">
                <img src="../../../static/image/index/xing.png" alt="">
              </span>
              <p>评分：<span style="color: #E95504">{{item.score}}</span>分</p>
            </div>
          </div>
          <div class="selectMerchants-two">
            <p>已有<span style="color: #E95504">{{item.actives_people_count}}</span>人报名</p>
            <span class="apply">立即报名</span>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="module moduleTwo">-->
    <!--<div class="title">-->
    <!--<img src="../../../static/image/active/jiadian.png" alt="">-->
    <!--</div>-->
    <!--&lt;!&ndash;轮播&ndash;&gt;-->
    <!--<div class="bannerr">-->
    <!--<swiper :options="swiperOption" v-if="this.activesInfo.length>0">-->
    <!--<swiper-slide v-for="item in activesInfo" :key="item.actives_id"><img :src="item.actives_img" alt="">-->
    <!--</swiper-slide>-->
    <!--</swiper>-->
    <!--</div>-->
    <!--</div>-->
    <!--抽奖100%中奖-->
    <img @click="goRegister" class="moduleActive" src="../../../static/image/active/module1.png" alt="">

    <!--新年焕新家-->
    <div class="module">
      <div class="title">
        <img src="../../../static/image/active/xinnian.png" alt="">
      </div>
      <div class="content">
        <div class="content-list" v-for="item in activesInfoL">
          <div class="content-list-box">
            <div class="contentBox">
              <img class="shop_logo_path" :src="'http://image.meijujingxuan.com/'+item.shop_logo_path" alt="">
              <img :src="'http://image.meijujingxuan.com/'+item.actives_img" alt="">
            </div>
            <div class="contentList">
              <p class="active-list">{{item.actives_title}}</p>
              <div class="contentBox">
                <span>促</span>
                <div class="contentBox-list">
                  <p>全屋环保</p>
                  <p>送3D全景效果图</p>
                </div>
              </div>
              <span class="particulars">
                了解详情<img src="../../../static/image/me/you.png" alt="">
              </span>
            </div>
          </div>
        </div>
      </div>
      <!--查看更多-->
      <span class="more">
        查看更多>
      </span>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css' ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper';

  export default {
    components: {
      swiper,
      swiperSlide
    },
    name: "jingxuanhuodong",
    data() {
      return {
        activesInfo: "", //精选活动
        swiperOption: { //swiper3
          speed: 900,
          slidesPerView: "1.2",
          centeredSlides: true,
          spaceBetween: 40,
          resistanceRatio: 0,
          notNextTick: true,
          initialSlide: 1,
          loop: true,
          autoplay: 3000,
          speed: 1000,
          autoplayStopOnLast: false,
        },
        activesInfoL: '',//三级
        bannerInfo: "",//一级
        shopActivesInfo: "",//二级
      }
    },
    methods: {
      //精选活动
      // getAllActives() {
      //   this.$vux.loading.show();
      //   this.$index.GetAllActives().then((res) => {
      //     this.activesInfo = res.data.actives_info.slice(0, 3);
      //     for (let i = 0; i < this.activesInfo.length; i++) {
      //       this.activesInfo[i].actives_img = this.$imgSrc + this.activesInfo[i].actives_img
      //     }
      //     this.$vux.loading.hide();
      //   }).catch((err) => {
      //     console.log(err)
      //   })
      // },
      goBack() {
        this.$router.go(-1);
      },
      //注册抽奖
      goRegister() {
        this.$router.push({
          name: "zhucechoujiang"
        })
      },
      //精选活动列表
      GetActives() {
        this.$vux.loading.show();
        this.$index.GetActives().then((res) => {
          this.activesInfoL = res.data.actives_info;//三
          console.log(this.activesInfoL)
          this.bannerInfo = res.data.banner_info;//一
          this.shopActivesInfo = res.data.shop_actives_info;//二
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.GetActives();
      // this.getAllActives();
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../static/css/var";

  .active-container {
    @extend .baseBox;

    .banner {
      height: (360px/2);

      img {
        width: 100%;
        height: 100%;
      }
    }

    .module {
      margin-top: (40px/2);
      padding: 0 (25px/2);
      box-sizing: border-box;

      .title {
        text-align: center;

        img {
          width: (500px/2);
        }
      }

      /*新年焕新家*/
      .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .content-list {
          width: (340px/2);
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 (5px/2) (15px/2) 0 rgba(0, 0, 0, 0.1);

          .content-list-box {
            width: 100%;

            .contentBox {
              width: 100%;
              position: relative;

              img {
                width: 100%;
                height: (340px/2);
              }

              .shop_logo_path {
                position: absolute;
                width: 40px;
                height: 40px;
              }
            }

            .contentList {
              width: (320px/2);
              padding: 0 5px;

              .active-list {
                font-size: 14px;
                margin: 10px 0;
              }

              .contentBox {
                display: flex;

                span {
                  width: 14px;
                  height: 14px;
                  background: rgba(249, 87, 25, 1);
                  border-radius: 2px;
                  font-size: 12px;
                  color: white;
                  text-align: center;
                  line-height: 14px;
                  margin-right: 5px;
                }

                .contentBox-list {
                  font-size: 12px;
                  color: #F95719;
                  line-height: 16px;
                }
              }

              .particulars {
                display: inline-block;
                width: 160px;
                height: 30px;
                background: rgba(233, 85, 4, 1);
                border-radius: 4px;
                line-height: 30px;
                text-align: center;
                margin-top: 10px;
                margin-bottom: 10px;
                color: white;

                img {
                  width: 6px;
                  height: auto;
                  margin-left: 3px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }

      .more {
        display: inline-block;
        width: 100%;
        height: 40px;
        background: rgba(255, 255, 255, 1);
        font-size: 12px;
        color: #999;
        text-align: center;
        line-height: 40px;
        margin-bottom: 50px;
      }

      /*精选商家*/
      .selectMerchants {
        width: (702px/2);
        margin-bottom: 20px;
        box-shadow: 0 (5px/2) (15px/2) 0 rgba(0, 0, 0, 0.1);

        .selectMerchants-box {
          height: 90px;
          display: flex;
          justify-content: space-between;

          .selectMerchants-one {
            margin: auto 0 auto 10px;
            display: flex;
            justify-content: space-between;

            .selectMerchants-list {
              margin-right: 18px;
              width: 52px;
              height: 52px;
              display: flex;

              img {
                width: 100%;
                height: auto;
                margin: auto;
              }
            }

            .selectMerchants-listO {
              p:first-child {
                font-size: 14px;
                color: #333333;
                margin-bottom: 5px;
              }

              img {
                width: 10px;
                height: 10px;
              }

              p:last-child {
                font-size: 12px;
                color: #666;
                margin-top: 2px;
              }
            }
          }

          .selectMerchants-two {
            margin: auto 10px auto 0;

            p {
              font-size: 12px;
              margin-bottom: 8.5px;
            }

            .apply {
              display: inline-block;
              width: 90px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              color: white;
              background: rgba(233, 85, 4, 1);
              border-radius: 4px;
              font-size: 14px;
            }
          }
        }

        .logo {
          width: 100%;
          height: (334px/2);
          border-radius: 4px 4px 0 0;
        }
      }


      .banner {
        height: (240px/2);
        background: linear-gradient(98deg, rgba(255, 179, 24, 1) 0%, rgba(255, 154, 24, 1) 100%);
        border-radius: 4px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .bannerr {
        width: 100%;
        height: 150px;

        .swiper-container {
          width: 100%;
          height: 100%;

          .swiper-slide {
            display: flex;
            //width: 100%;

            img {
              width: 100%;
              height: 100%;
              border-radius: 4px;
            }
          }
        }
      }
    }

    .moduleOne {
      margin-top: 0;

      .title {
        img {
          width: 100%;
        }
      }
    }

    .coupon {
      height: (464px/2);
      background-image: url("../../../static/image/active/module-banner.png");
      background-size: 100%;
      box-sizing: border-box;
      padding: 0 (25px/2);

      .phone {
        height: (88px/2);
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(219, 219, 219, 1);
        border-radius: 4px;
        display: table;
        table-layout: fixed;
        margin-top: (40px/2);
        width: 100%;

        .phone-input {
          text-align: center;
          display: table-cell;
          vertical-align: middle;

          input {
            width: 90%;
            height: 80%;
            font-size: (28px/2);
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
          }
        }

        .submit {
          display: table-cell;
          width: (220px/2);
          height: (88px/2);
          background: linear-gradient(0deg, rgba(255, 90, 0, 1) 0%, rgba(255, 168, 0, 1) 100%);
          border-radius: 4px;

          button {
            font-size: (28px/2);
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            width: 100%;
            height: 100%;
            background-color: transparent;
          }
        }
      }

      .coupon-list {
        display: table;
        table-layout: fixed;
        width: 100%;
        margin-top: (40px/2);

        .coupon-item {
          display: table-cell;
          text-align: center;

          img {
            width: (342px/2);
            height: (152px/2);
          }
        }
      }

      .title {
        height: (48px/2);
        line-height: (48px/2);
        padding-top: (60px/2);
        text-align: center;
        font-size: (48px/2);
        font-weight: bold;
        color: rgba(68, 79, 113, 1);
        position: relative;

        .line-left {
          width: (44px/2);
          height: (6px/2);
          background: rgba(68, 79, 113, 1);
          position: absolute;
          top: 74%;
          left: 25%;
        }

        .line-right {
          width: (44px/2);
          height: (6px/2);
          background: rgba(68, 79, 113, 1);
          position: absolute;
          top: 74%;
          right: 25%;
        }
      }
    }

    .moduleTwo {
      padding: 0 0 30px;
    }

    .header-container {
      position: fixed;
      top: 0;
      z-index: 1000;
      width: 100%;
      border-bottom: 1px solid #cccccc;
      height: 44px;
      line-height: 44px;
      display: table;
      table-layout: fixed;
      background-color: white;

      .left {
        display: table-cell;
        text-align: left;
        padding-left: 12.5px;

        img {
          margin-top: 15px;
          width: (19px/2);
          height: (32px/2);
        }
      }

      .title {
        display: table-cell;
        text-align: center;
        font-size: (36px/2);
      }

      .right {
        display: table-cell;
        padding-right: 12.5px;
        text-align: right;

        img {
          width: (32px/2);
          height: (36px/2);
        }
      }
    }

    .moduleActive {
      width: 100%;
      height: auto;
    }
  }
</style>
