<template>
  <div class="stylist-details">
    <!--<div class="headernavigation">-->
    <!--<img class="back" src="../../../static/image/login/fanhui.png" @click="back" alt="">-->
    <!--{{particulars.shop_name}}-->
    <!--<img class="search" src="../../../static/image/choicenessstylist/iconfenxiang.png" alt="">-->
    <!--</div>-->
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="back">
      </div>
      <div class="title">
        {{particulars.shop_name}}
      </div>
    </header>
    <!--头部展示-->
    <div class="header-show">
      <div class="triangle">
        <p>评分</p>
        <p>{{particulars.comment_sum}}</p>
      </div>
      <img v-lazy="particulars.header_path" alt="">
      <h1>{{particulars.designer_name}}</h1>
      <div class="attention">
        <div>
          <p>被关注</p>
          <a href="javascript:;">190</a>
        </div>
        <div>
          <p>收藏与获赞</p>
          <a href="javascript:;">666</a>
        </div>
      </div>
    </div>
    <!--设计师房屋设计列表-->
    <div class="devise-list" v-for="item in designerSubjectList" @click="goGetCaseInfo(item.id)">
      <img class="image-show" v-lazy="item.case_img" alt="">
      <div class="devise-footer">
        <h1>{{item.subject_name}}</h1>
        <div class="like">
          <div class="like-one">
            <span>{{item.acreage}}㎡</span> / <span>{{item.style_name	}}</span> / <span>全包</span>
          </div>
          <div class="like-two">
            <span>
              <img src="../../../static/image/choicenessstylist/pingluna.png" alt="">
              9
            </span>
            <span>
              <img src="../../../static/image/choicenessstylist/shoucanga.png" alt="">
              9
            </span>
            <span>
              <img src="../../../static/image/choicenessstylist/dianzana.png" alt="">
              9
            </span>
          </div>
        </div>
      </div>
    </div>
    <a class="private" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
      <img src="../../../static/image/selection/sixin.png" alt="">
      <p>私信</p>
    </a>
  </div>
</template>

<script>
  export default {
    name: "shejishixiangqingye",
    data() {
      return {
        particulars: [], //设计师详情
        designerSubjectList: [],//设计师详情 案列列表
      }
    },
    mounted() {
      this.designerDetail();
      this.designerSubject()
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      //设计师详情
      designerDetail() {
        this.$vux.loading.show();
        let data = {
          designer_id: this.$route.query.id
        };
        this.$index.designerDetail(data).then((res) => {
          this.particulars = res.data;
          this.particulars.header_path = this.$imgSrc + this.particulars.header_path;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //设计师详情 案列列表
      designerSubject() {
        this.$vux.loading.show();
        let data = {
          designer_id: this.$route.query.id / 1,
          type: "list"
        };
        this.$index.designerSubject(data).then((res) => {
          this.designerSubjectList = res.data;
          for (let i = 0; i < this.designerSubjectList.length; i++) {
            this.designerSubjectList[i].case_img = this.$imgSrc + this.designerSubjectList[i].case_img
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //去案例详情
      goGetCaseInfo(id) {
        this.$router.push({
          name: "anlixiangqing",
          query: {
            id: id
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "stylistdetails.less";
</style>
