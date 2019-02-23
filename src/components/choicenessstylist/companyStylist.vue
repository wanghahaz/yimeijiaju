<template>
  <div class="choicenessStylist">
    <div class="headernavigation" @touchmove.prevent>
      <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      设计师团队
      <!--<img class="search" src="../../../static/image/choicenessstylist/tousousu.png" @click="goSeekSjs" alt="">-->
      <div></div>
    </div>
    <div class="search" @touchmove.prevent>
      <input type="text" placeholder="请输入设计师姓名" v-model="designerName">
      <img src="../../../static/image/me/ss.png" alt="">
    </div>
    <!--综合 排序-->
    <div class="synthesize-sort">
      <div class="header-list" @touchmove.prevent>
        <div class="zonghe" @click="handleSynthesize">
          <p :class="synthesizeBol==false?'synthesizeP':''">综合</p>
          <img src="../../../static/image/me/xl.png" alt="" v-show="synthesizeBol">
          <img src="../../../static/image/me/xll.png" alt="" v-show="!synthesizeBol">
        </div>
        <p @touchmove.prevent>签约数量</p>
        <div class="paixu" @click="handleSort" @touchmove.prevent>
          <p :class="sortBol==false?'synthesizeP':''">排序</p>
          <img src="../../../static/image/me/xl.png" alt="" v-show="sortBol">
          <img src="../../../static/image/me/xll.png" alt="" v-show="!sortBol">
        </div>
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
      <!--排序模态框-->

      <div class="synthesize paixusynthesize" v-show="!sortBol" @touchmove.prevent>
        <p v-for="(item,index) in sortList" @click="handleSortBol(item.id)">
          {{item.name}}
          <img src="../../../static/image/me/dg.png" alt="" v-show="sortId==index">
        </p>
      </div>
      <div class="mark paixuMark" v-show="!sortBol" @touchmove.prevent @click="closeSort">

      </div>


      <!--综合 排序设计师列表-->
      <div class="synthesize-list" @click="stylistdetails(item.id)" v-for="item in designerShow">
        <div class="synthesize-header">
          <div class="triangle">
            <p>评分</p>
            <p>{{item.comment_sum}}</p>
          </div>
          <img class="tuxiang" v-lazy="item.header_path" alt="">
          <div class="textt">
            <p class="font-text">{{item.designer_name}} <span v-show="item.is_quality==1">精</span></p>
            <p>被关注 <a href="javascript:;" style="color: #E95504">190</a></p>
            <p>{{item.shop_name}}</p>
          </div>
        </div>
        <img class="exhibition" v-lazy="item.cover_img" alt="">
      </div>
      <infinite-loading :on-infinite="designerList" ref="infiniteLoading">
			<span slot="no-more" class="no-more">
				已无数据
			</span>
        <span slot="no-results" class="no-more">
    		    已无数据
      </span>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    components: {
      InfiniteLoading
    },
    name: "companyStylist",
    data() {
      return {
        designerShow: "",
        page: 0,
        designerName: "",
        //综合模态框start
        synthesizeBol: true,
        synthesizeList: [{
          id: 0,
          name: '综合'
        }, {
          id: 1,
          name: '评分'
        }],
        synthesizeId: null,
        //综合模态框end
        //排序start
        sortBol: true,
        sortList: [{
          id: 0,
          name: '评论最多'
        }, {
          id: 1,
          name: '关注最多'
        }, {
          id: 2,
          name: '收藏与点赞最多'
        }],
        sortId: null,
        //排序end
      }
    },
    mounted() {
      this.designerList();
    },
    methods: {
      //点击综合start
      //关闭综合
      closeSynthesize() {
        this.synthesizeBol = true;
      },
      handleSynthesize() {
        this.sortBol = true;
        this.sortId = null;
        this.synthesizeBol = !this.synthesizeBol;
      },
      handleSynthesizeBol(id) {
        this.synthesizeId = id;
      },
      //点击综合end
      //点击排序start
      //关闭排序
      closeSort() {
        this.sortBol = true;
      },
      handleSort() {
        this.synthesizeBol = true;
        this.synthesizeId = null;
        this.sortBol = !this.sortBol;
      },
      handleSortBol(id) {
        this.sortId = id;
      },
      //点击排序end


      //跳转到详情
      stylistdetails(id) {
        this.$router.push({
          name: "shejishixiangqingye",
          query: {
            id: id
          }
        })
      },
      goBack() {
        this.$router.go(-1)
      },
      //设计师列表展示
      designerList($state) {
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
          shop_id: this.$route.query.id,
          is_quality: "",
          level_id: ""
        };
        this.$index.designerList(data).then((res) => {
          if (res.data.data.length) {
            var data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i].header_path = this.$imgSrc + data[i].header_path;
              data[i].cover_img = this.$imgSrc + data[i].cover_img;
            }
            this.designerShow = [...this.designerShow, ...data];
            $state.loaded();
          } else {
            $state.complete();
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          $state.complete();
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/overall.less";
  @import "../../../static/css/header.less";

  .choicenessStylist {
    width: 100%;
    background: @background;

    .leaveblack {
      width: 100%;
      height: 20px/2;
      background: #F8F8F8;
      margin-top: 88px/2;
    }

    //  综合排序
    .synthesize-sort {
      width: 100%;


      /*综合模态框*/

      .mark {
        overflow: hidden;
        position: fixed;
        top: (477px/2);
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 11;
        -webkit-tap-highlight-color: transparent;
      }

      .paixuMark {
        top: (557px/2);
      }

      .synthesizeP {
        color: #E95504;
      }


      .synthesize {
        position: fixed;
        top: (317px/2);
        z-index: 11;
        width: 100%;
        height: (160px/2);
        background: white;
        -webkit-tap-highlight-color: transparent;

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

      .paixusynthesize {
        position: fixed;
        top: (317px/2);
        z-index: 11;
        width: 100%;
        height: (240px/2);
        background: white;
        -webkit-tap-highlight-color: transparent;

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


      /*综合模态框end*/

      .header-list {
        width: 100%;
        height: 88px/2;
        border-bottom: 1px solid #F8F8F8;
        display: flex;
        justify-content: space-between;
        font-size: @size;
        text-align: center;
        line-height: 88px/2;

        div {
          display: flex;
          justify-content: space-between;

          img {
            width: 20px/2;
            height: 12px/2;
            margin: auto 0 auto 13px/2;
          }
        }

        .zonghe {
          margin-left: 22px;
        }

        .paixu {
          margin-right: 22px;
        }
      }

      //  综合排序列表
      .synthesize-list {
        width: 702px/2;
        height: 576px/2;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 5px/2 15px/2 0 rgba(0, 0, 0, 0.15);
        border-radius: 10px/2;
        margin: 40px/2 auto;

        .synthesize-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: relative;

          .triangle {
            width: 68px/2;
            height: 79px/2;
            position: absolute;
            right: 60px/2;
            background-image: url("../../../static/image/login/dao.png");
            background-size: 100% 100%;
            text-align: center;
            color: #fff;

            p:first-child {
              font-size: @small-size;
            }

            p:last-child {
              font-size: 32px/2;
              font-weight: @font-weight;
            }
          }

          .tuxiang {
            width: 120px/2;
            height: 120px/2;
            border-radius: 50%;
            margin: 30px/2 27px/2 32px/2 17px/2;
          }

          .textt {
            flex: 1;
            font-size: @small-size;
            color: rgba(153, 153, 153, 1);

            p:nth-child(2) {
              margin-top: 9px/2;
            }

            p:nth-child(3) {
              margin-top: 5px/2;
            }

            .font-text {
              font-size: 32px/2;
              font-weight: @font-weight;
              color: rgba(51, 51, 51, 1);
              margin: 35px/2 0 0 0;

              span {
                display: inline-block;
                width: 30px/2;
                height: 30px/2;
                background: rgba(63, 149, 255, 1);
                opacity: 0.8;
                border-radius: 4px/2;
                font-size: @small-size;
                text-align: center;
                line-height: 30px/2;
                color: white;
              }
            }
          }
        }

        .exhibition {
          width: 100%;
          height: 394px/2;
          border-radius: 8px/2;
        }
      }
    }

    .no-more {
      color: #666;
      display: block;
      font-size: 14px;
      margin: 10px 0;
    }

    .search {
      position: relative;
      width: 702px/2;
      height: 80px/2;
      background: rgba(248, 248, 248, 1);
      border-radius: 40px/2;
      margin: 54px auto 10px;

      input {
        width: 100%;
        height: 100%;
        font-size: 14px;
        text-indent: 44px;
        background: rgba(248, 248, 248, 1);
        border-radius: 40px/2;
      }

      img {
        position: absolute;
        width: 37px/2;
        height: 37px/2;
        top: 11px;
        left: 15px;
      }
    }

  }

</style>
