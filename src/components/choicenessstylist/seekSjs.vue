<template>
  <div class="seek">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        精选设计师
      </div>
    </header>
    <!--搜索-->
    <div class="seekH">
      <input type="text" placeholder="设计师搜索" v-model="designerName" @input="designerList">
      <p @click="goBack">取消</p>
      <img class="search" src="../../../static/image/choicenessstylist/suoxiaobai.png" alt="">
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
    <infinite-loading v-if="designerName!=''" :on-infinite="designerList" ref="infiniteLoading">
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
    components: {
      InfiniteLoading
    },
    name: "seekSjs",
    data() {
      return {
        designerShow: "",
        page: 0,
        designerName: "",
      }
    },
    mounted() {
      if (localStorage.userId == undefined) {
        localStorage.setItem('userId', "")
      }
    },
    methods: {
      //返回上一级
      goBack() {
        this.$router.go(-1)
      },
      //设计师列表展示
      designerList($state) {
        if (this.designerName == "") {
          this.page = 0;
          this.designerShow = [];
          return;
        }
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
          shop_id: "",
          is_quality: "",
          level_id: "",
          designer_name: this.designerName
        };
        this.$index.designerList(data).then((res) => {
          if (res.data.data.length > 0) {
            // this.designerShow = res.data.data;
            let data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i].header_path = this.$imgSrc + data[i].header_path;
              data[i].cover_img = this.$imgSrc + data[i].cover_img;
            }
            this.designerShow = [...this.designerShow, ...data];
            $state.loaded();
          } else {
            this.$vux.loading.hide();
            $state.complete();
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //跳转到详情
      stylistdetails(id) {
        this.$router.push({
          name: "shejishixiangqingye",
          query: {
            id: id
          }
        })
      },
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
</style>
