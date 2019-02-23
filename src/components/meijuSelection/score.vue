<template>
  <div class="store-index-container">
    <header class="header-container" @touchmove.prevent>
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        美居精选
      </div>

      <div class="right" @click="handleHeader">
        <img class="search" src="../../../static/image/choicenessstylist/caidan.png" alt="">
      </div>
    </header>
    <!--搜素-->
    <div class="store-search" @touchmove.prevent>
      <img src="../../../static/image/me/ss.png" alt="">
      <input @touchmove.prevent type="text" placeholder="请输入装修公司名称" v-model="shopName">
    </div>
    <!--排序-->
    <div class="store-sort" @touchmove.prevent>
			<span class="spanFirst" @click="handleSynthesize">
				<p :class="synthesizeBol==false?'synthesizeP':''">综合</p>
				<img src="../../../static/image/me/xl.png" alt="" v-show="synthesizeBol">
				<img src="../../../static/image/me/xll.png" alt="" v-show="!synthesizeBol">
			</span>
      <span @click="handleFiltrate">
				<p :class="filtrateBol==false?'synthesizeP':''">筛选</p>
				<img class="sx" src="../../../static/image/me/sxa.png" alt="" v-show="filtrateBol">
				<img class="sx" src="../../../static/image/me/sxl.png" alt="" v-show="!filtrateBol">
			</span>
      <span class="spanLast">
				<p>销量</p>
			</span>
    </div>

    <!--综合模态框-->

    <div class="synthesize" v-show="!synthesizeBol" @touchmove.prevent>
      <p v-for="(item,index) in synthesizeList" @click="handleSynthesizeBol(item.id)">
        {{item.name}}
        <img src="../../../static/image/me/dg.png" alt="" v-show="synthesizeId==index">
      </p>
    </div>
    <div class="mark" v-show="!synthesizeBol" @touchmove.prevent @click="closeSynthesize">

    </div>
    <!--筛选模态框-->
    <div class="filtrate" v-show="!filtrateBol" @touchmove.prevent>
      <div class="filtrate-main">
        <p class="house">房屋类型</p>
        <div class="house-conter">
          <span v-for="(item,index) in roomAllList" :class="index==houseType?'activeSpan':''"
                @click="handleHouse(item.id,index)">{{item.room_name}}</span>
        </div>
        <p class="decoration">装修类型</p>
        <div class="decoration-conter">
          <span v-for="(item,index) in decorateTypeList" :class="index==decorationType?'activeSpan':''"
                @click="handleDecoration(item.id,index)">{{item.decorate_type}}</span>
        </div>
        <p class="feature">特色服务</p>
        <div class="feature-conter">
          <span v-for="(item,index) in featureList" :class="index==featureType?'activeSpan':''"
                @click="handleFeature(index)">{{item}}</span>
        </div>
        <div class="affirm">
          <span @click="reset">重置</span>
          <span style="border: none;background: rgba(233,85,4,1);color: white" @click="sure">确认</span>
        </div>
      </div>
    </div>
    <div class="markFiltrate" v-show="!filtrateBol" @touchmove.prevent @click="closeFiltrate">

    </div>


    <!--公司列表-->
    <div class="store-item-container" v-for="item in shopComponentList" @click="goDecoration(item.id)">
      <img class="pk" src="../../../static/image/me/PK.png" @click.stop="contrast" alt="">
      <div class="consult">
        <img src="../../../static/image/me/dh.png" alt="">
        <!--<span>电话咨询</span>-->
        <a href="tel:4001888687" @click.stop="alertA" style="color: #999">电话咨询</a>
      </div>
      <div class="store-item">
        <div class="left">
          <img v-lazy="item.logo_path" alt="">
        </div>
        <div class="content">
          <div class="title">
            <p>{{item.shop_name}} <span class="icon-container" v-show="item.is_quality">精</span></p>
          </div>

          <div class="score">
            <!--<rater v-model="5"></rater>-->
            <span>
							<img src="../../../static/image/index/xing.png" alt="">
							<img src="../../../static/image/index/xing.png" alt="">
							<img src="../../../static/image/index/xing.png" alt="">
							<img src="../../../static/image/index/xing.png" alt="">
							<img src="../../../static/image/index/xing.png" alt="">
						</span>
            <span>评分{{item.comment_sum}}</span>
          </div>

          <div class="price">
            <p>{{item.address}} 均价:{{item.avg_price}} </p>
          </div>
          <div class="desc">
            <p>{{item.advantage_desc}}</p>
          </div>

          <div class="active">
            <p><img src="../../../static/image/me/cu.png" alt="">送全屋家电</p>
          </div>

          <div class="in-store">
            <p>进店 > </p>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading :on-infinite="shopList" ref="infiniteLoading">
			<span slot="no-more" class="no-more">
				已无数据
			</span>
      <span slot="no-results" class="no-more">
    		    已无数据
      </span>
    </infinite-loading>


    <!--头部模态框-->
    <div class="header-mark" @touchmove.prevent v-show="headerMarkBol" @click="handleHeader">
      <div class="header-main">
        <div class="cephalosomeboxlist">
          <img class="xiaoxi" src="../../../static/image/me/xxxx.png"/> 消息
        </div>
        <div class="cephalosomeboxlist" @click="goHome">
          <img class="shouye" src="../../../static/image/me/syyy.png"/> 首页
        </div>
        <a class="cephalosomeboxlist" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
          <img class="kefu" src="../../../static/image/selection/kf.png"/> 客服
        </a>
        <div class="cephalosomeboxlist" @click="goHeart">
          <img class="guanzhu" src="../../../static/image/me/gzz.png"/> 我的关注
        </div>
      </div>
    </div>


    <!--加入对比弹出框-->
    <div class="mark mark_one" v-show="contrastBol" waterfall @touchmove.prevent>
      <div class="mark_content">
        <img src="../../../static/image/index/close.png" @click="closeContrast" class="close"/>
        <h1>公司对比</h1>
        <div class="choicelist" @click="showCompany(1)">
          <img src="../../../static/image/index/jia.png" v-show="selet_1Bol"/>
          <span class="">{{selet_1}}</span>
        </div>
        <div class="choicelist" @click="showCompany(2)">
          <img src="../../../static/image/index/jia.png" v-show="selet_2Bol"/>
          <span>{{selet_2}}</span>
        </div>
        <div class="choicelist" @click="showCompany(3)">
          <img src="../../../static/image/index/jia.png" v-show="selet_3Bol"/>
          <span>{{selet_3}}</span>
        </div>
        <p style="background:rgba(233,85,4,1);color:rgba(255,255,255,1);" @click="goContrast">开始对比</p>
        <p style="color:rgba(233,85,4,1);background:rgba(255,255,255,1);" @click="empty">清空</p>
      </div>
    </div>
    <company-bar @selet='toSelet'></company-bar>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';
  import companyBar from '@/components/index/companyBar.vue'

  export default {
    components: {
      'company-bar': companyBar,
      InfiniteLoading
    },
    watch: {
      shopName(newVal, oldVal) {
        if (newVal != oldVal) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
          this.shopComponentList = [];
          this.page = 0;
          this.shopList()
        }
      }
    },
    name: "zhuangxiugongsiliebiaoye",
    data() {
      return {
        //加入对比start
        contrastBol: false, //对比模态框
        seletArr: [],
        typeSelet: '0',
        selet_1: '',
        selet_1_id: "",
        selet_2_id: "",
        selet_3_id: "",
        selet_2: '',
        selet_3: '',
        selet_1Bol: true,
        selet_2Bol: true,
        selet_3Bol: true,
        //加入对比结束
        //综合模态框start
        synthesizeBol: true,
        synthesizeList: [{
          id: 0,
          name: '综合'
        }, {
          id: 1,
          name: '评分'
        }, {
          id: 2,
          name: '点评最多'
        }, {
          id: 3,
          name: '关注最多'
        }],
        synthesizeId: null,
        //综合模态框end
        //筛选模态框start
        filtrateHouseList: ['新房', '老房'],
        houseType: null,
        decorationList: ['全包装修', '全案装修', '半包装修', '局部装修'],
        decorationType: null,
        featureList: ['环保检测', '开荒保洁'],
        featureType: null,
        filtrateBol: true,
        //筛选模态框end
        headerMarkBol: false,
        shopComponentList: [],
        roomAllList: "",
        decorateTypeList: "",
        houseId: "",
        decorationId: "",
        shopName: "",
        page: 0
      }
    },
    methods: {
      //装修公司详情
      goDecoration(id) {
        this.$router.push({
          name: "zhuangxiugongsixiangqing",
          query: {
            id: id
          }
        })
      },
      //对比公司值
      toSelet(data) {
        this.seletArr = data;
        if (this.typeSelet == 1) {
          this.selet_1 = this.seletArr[0].value;
          this.selet_1_id = this.seletArr[0].id;
          this.selet_1Bol = false;
        } else if (this.typeSelet == 2) {
          this.selet_2 = this.seletArr[0].value;
          this.selet_2_id = this.seletArr[0].id;
          this.selet_2Bol = false;
        } else {
          this.selet_3 = this.seletArr[0].value;
          this.selet_3_id = this.seletArr[0].id;
          this.selet_3Bol = false;
        }
      },
      alertA() {
        console.log(11)
      },
      //打开对比模态框
      contrast() {
        this.contrastBol = true;
      },
      //关闭对比模态框
      closeContrast() {
        this.contrastBol = false;
      },
      //跳转到对比公司
      goContrast() {
        this.$router.push({
          name: "comparison",
          query: {
            idOne: this.selet_1_id,
            idTwo: this.selet_2_id,
            idThree: this.selet_3_id
          }
        })
      },
      //清空对比公司值
      empty() {
        this.selet_1 = "";
        this.selet_2 = "";
        this.selet_3 = "";
        this.selet_1Bol = true;
        this.selet_2Bol = true;
        this.selet_3Bol = true;
      },
      //确认
      sure() {
        this.page = 0;
        this.shopComponentList = [];
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        this.shopList()
      },
      //对比公司选择
      showCompany(type) {
        this.typeSelet = type;
        this.$store.dispatch('showCompanyBar')
      },
      handleHeader() {
        this.headerMarkBol = !this.headerMarkBol;
      },
      goBack() {
        this.$router.go(-1)
      },
      goHome() {
        this.$router.push({
          name: "index"
        })
      },
      goHeart() {
        this.$router.push({
          name: "gerenzhongxinguanzhu"
        })
      },
      //点击综合start
      handleSynthesize() {
        this.synthesizeBol = !this.synthesizeBol;
        this.filtrateBol = true;
      },
      handleSynthesizeBol(id) {
        this.synthesizeId = id;
        this.houseType = null;
        this.decorationType = null;
        this.featureType = null;
      },
      //点击综合end
      //筛选start
      handleFiltrate() {
        this.filtrateBol = !this.filtrateBol;
        this.synthesizeBol = true;
      },
      handleHouse(id, index) {
        this.houseId = id;
        this.houseType = index;
        this.synthesizeId = null;
      },
      handleDecoration(id, index) {
        this.decorationId = id;
        this.decorationType = index;
        this.synthesizeId = null;
      },
      handleFeature(index) {
        this.featureType = index;
        this.synthesizeId = null;
      },
      //筛选end

      //关闭筛选
      closeFiltrate() {
        this.filtrateBol = true;
      },
      //关闭综合
      closeSynthesize() {
        this.synthesizeBol = true;
      },
      //公司列表
      shopList() {
        this.filtrateBol = true;
        this.page++;
        let data = {
          page: this.page,
          decorate_type: "",
          room_id: this.houseId,
          district_id: this.decorationId,
          is_quality: "",
          shop_name: this.shopName
        };
        this.$vux.loading.show();
        this.$index.shopList(data).then((res) => {
          if (res.data.data.length) {
            var data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i].logo_path = this.$imgSrc + data[i].logo_path
            }
            this.shopComponentList = [...this.shopComponentList, ...data];
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //重置按钮
      reset() {
        this.houseType = null;
        this.decorationType = null;
        this.featureType = null;
        this.houseId = "";
        this.decorationId = "";
        this.shopName = "";
        this.page = 0;
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        this.shopList();
      },
      //获取房屋类型
      roomAll() {
        this.$vux.loading.show();
        this.$index.roomAll().then((res) => {
          this.roomAllList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //获取装修类型
      decorateType() {
        this.$vux.loading.show();
        this.$index.decorateType().then((res) => {
          this.decorateTypeList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
    },
    mounted() {
      this.shopList();
      this.roomAll();
      this.decorateType();
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../static/css/var";

  .store-index-container {
    @extend .baseBox;
    background-color: white;

    .header-container {
      position: fixed;
      top: 0;
      z-index: 10;
      width: 100%;
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
          width: (44px/2);
          height: (32px/2);
        }
      }
    }

    /*搜素*/
    .store-search {
      position: relative;

      img {
        position: absolute;
        width: (37px/2);
        height: (37px/2);
        top: 11px;
        left: 27px;
      }

      input {
        display: block;
        width: (702px/2);
        height: (80px/2);
        background: rgba(248, 248, 248, 1);
        border-radius: (40px/2);
        margin: 10px auto;
        font-size: (28px/2);
        text-indent: 44px;
      }
    }

    /*排序*/
    .store-sort {
      width: 100%;
      height: 44px;
      border-bottom: 1px solid rgba(231, 231, 231, 1);
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      line-height: 44px;

      .spanFirst {
        margin-left: 22px;
      }

      .spanLast {
        margin-right: 22px;
      }

      span {

        display: flex;

        img {
          width: 10px;
          height: 6px;
          margin: auto 0 auto 7px;
        }

        .sx {
          width: 10px;
          height: 10px;
        }
      }
    }

    .store-item-container {
      width: 100%;
      box-sizing: border-box;
      padding: 0 (25px/2);
      position: relative;

      .consult {
        position: absolute;
        bottom: 15px;
        right: 12px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: rgba(153, 153, 153, 1);

        img {
          width: (31px/2);
          height: (30px/2);
          margin-right: 5px;
        }
      }

      .pk {
        position: absolute;
        top: 20px;
        right: 12px;
        width: 30px;
        height: 30px;
      }

      .store-item {
        padding: (40px/2) 0;
        border-bottom: 1px solid #E7E7E7;
        display: table;
        table-layout: fixed;
        width: 100%;

        .left {
          display: table-cell;
          width: (160px/2);

          img {
            width: (160px/2);
            height: (160px/2);
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(231, 231, 231, 1);
            border-radius: 4px;
          }
        }

        .content {
          display: table-cell;
          padding-left: (20px/2);
          vertical-align: top;

          .title {
            font-size: (32px/2);
            font-weight: bold;
            color: rgba(51, 51, 51, 1);

            .icon-container {
              display: inline-block;
              width: (30px/2);
              height: (30px/2);
              background: rgba(63, 149, 255, 0.8);
              border-radius: 4px;
              font-size: 12px;
              color: white;
              text-align: center;
            }
          }

          .score {
            margin-top: (5px/2);
            font-size: (24px/2);
            font-weight: 400;
            color: rgba(51, 51, 51, 1);

            span {
              font-size: 12px;
              color: #333333;

              img {
                width: 10px;
                height: 10px;
              }
            }
          }

          .price,
          .desc {
            font-size: (24px/2);
            margin-top: 5px;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
          }

          .desc {
            p {

              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }

          .active {
            padding: (20px/2) 0;
            font-size: (24px/2);
            font-weight: 400;
            color: rgba(102, 102, 102, 1);

            img {
              width: 15px;
              height: 15px;
              vertical-align: middle;
              margin-right: 5px;
            }
          }

          .in-store {
            font-size: (24px/2);
            font-weight: bold;
            color: rgba(255, 119, 28, 1);
          }
        }
      }
    }

    /*综合模态框*/
    .mark {
      overflow: hidden;
      position: fixed;
      top: (637px/2);
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 11;
    }

    .synthesizeP {
      color: #E95504;
    }


    .synthesize {
      position: fixed;
      top: (317px/2);
      z-index: 11;
      width: 100%;
      height: (320px/2);
      background: white;

      p {
        width: (702px/2);
        margin: auto;
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

    /*筛选模态框*/
    .markFiltrate {
      overflow: hidden;
      position: fixed;
      top: (1106px/2);
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 11;
    }

    .filtrate {
      position: fixed;
      top: (317px/2);
      z-index: 11;
      width: 100%;
      height: (810px/2);
      background: rgba(255, 255, 255, 1);
      font-size: 14px;

      .filtrate-main {
        width: (662px/2);
        margin: auto;

        .house {
          padding: 13px 0 15px 0;
        }

        .house-conter,
        .feature-conter {
          display: flex;

          .activeSpan {
            width: (150px/2);
            height: (60px/2);
            background: rgba(255, 250, 247, 1);
            border: (1px/2) solid rgba(233, 85, 4, 1);
            border-radius: (8px/2);
            color: #E95504;
          }

          span {
            width: (150px/2);
            height: (60px/2);
            background: rgba(245, 245, 245, 1);
            border-radius: 4px;
            color: rgba(102, 102, 102, 1);
            border: (1px/2) solid rgba(245, 245, 245, 1);
            line-height: 30px;
            text-align: center;
          }

          span:last-child {
            margin-left: (21px/2);
          }
        }

        .decoration {
          padding: (59px/2) 0 15px 0;
        }

        .decoration-conter {
          display: flex;
          /*justify-content: space-between;*/
          flex-wrap: wrap;

          .activeSpan {
            width: (140px/2);
            height: (60px/2);
            background: rgba(255, 250, 247, 1);
            border: (1px/2) solid rgba(233, 85, 4, 1);
            border-radius: (8px/2);
            color: #E95504;
          }

          span {
            width: (140px/2);
            height: (60px/2);
            background: rgba(245, 245, 245, 1);
            border-radius: 4px;
            color: rgba(102, 102, 102, 1);
            border: (1px/2) solid rgba(245, 245, 245, 1);
            line-height: 30px;
            text-align: center;
            margin: 10px 10px 0 0;
          }
        }

        .feature {
          padding: (60px/2) 0 15px 0;
        }

        .feature-conter {
          margin-bottom: 15px;
        }

        .affirm {
          display: flex;
          justify-content: space-between;

          span {
            width: (260px/2);
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border: (1px/2) solid rgba(219, 219, 219, 1);
            border-radius: 20px;
            text-align: center;
            line-height: 40px;
            font-weight: bold;
          }

          span:first-child {
            margin-left: 25px;
          }

          span:last-child {
            margin-right: 25px;
          }
        }
      }
    }

    /*头部导航*/
    .header-mark {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 11;
      -webkit-tap-highlight-color:transparent;

      .header-main {
        width: (240px/2);
        background: rgba(255, 255, 255, 1);
        position: relative;
        top: (88px/2);
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
            margin-right: (20px/2);
            margin-left: (22px/2);
            vertical-align: middle;
          }

          .xiaoxi, .shouye, .guanzhu {
            width: (36px/2);
            height: auto;
          }

          .kefu {
            width: (32px/2);
            height: auto;
          }
        }
      }
    }

    /*对比弹出层*/

    .mark_one {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 1;

      .mark_content {
        width: (500px/2);
        height: (676px/2);
        background: rgba(255, 255, 255, 1);
        position: relative;
        top: 50%;
        left: 50%;
        margin-left: (-500px/4);
        margin-top: (-676px/4);

        .close {
          position: absolute;
          top: (34px/2);
          right: (20px/2);
          width: (44px/2);
          height: (44px/2);
        }

        h1 {
          display: inline-block;
          font-size: (32px/2);
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          margin: (40px/2) 0 0 (30px/2);
        }

        .choicelist {
          width: (460px/2);
          height: (80px/2);
          background: rgba(238, 238, 238, 1);
          margin: (24px/2) auto 0;
          position: relative;

          span {
            display: inline-block;
            width: 100%;
            line-height: (80px/2);
            background: rgba(51, 153, 254, 1);
            font-size: (28px/2);
            color: rgba(255, 255, 255, 1);
            font-weight: bold;
            text-indent: (20px/2);
          }

          img {
            position: absolute;
            width: (40px/2);
            height: (40px/2);
            top: 50%;
            margin-top: (-40px/4);
            left: 50%;
            margin-left: (-40px/4);
          }
        }

        p {
          width: (460px/2);
          height: (88px/2);
          border-radius: (8px/2);
          border: 1px solid rgba(233, 85, 4, 1);
          margin: (20px/2) auto;
          text-align: center;
          line-height: (88px/2);
          font-size: (28px/2);
          font-weight: bold;
        }
      }
    }

    .no-more {
      color: #666;
      display: block;
      font-size: 14px;
      margin: 10px 0;
    }
  }
</style>
