<template>
  <div class="choicenessStylist">
    <div class="headernavigation">
      <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      精选设计师
      <img class="search" src="../../../static/image/choicenessstylist/tousousu.png" @click="goSeekSjs" alt="">
    </div>
    <div class="leaveblack">

    </div>
    <!--本期精选-->
    <div class="currentperiod">
      <h1>本期精选</h1>
      <div class="periodlist" v-for="item in designerAdList">
        <div>
          <p>{{item.special_title}}</p>
          <p class="small">快来看看~</p>
        </div>
        <img :src="'http://image.meijujingxuan.com/'+item.special_img" alt="">
      </div>
      <!--<div class="periodlist">-->
        <!--<div>-->
          <!--<p>12月设计师人气作品TOP10</p>-->
          <!--<p class="small">快来看看~</p>-->
        <!--</div>-->
        <!--<img src="../../../static/image/index/jingxuan.jpg" alt="">-->
      <!--</div>-->
    </div>
    <div class="leaveblack">

    </div>
    <!--综合 排序-->
    <div class="synthesize-sort">
      <div class="header-list">
        <div class="zonghe">
          <p>综合</p>
          <img src="../../../static/image/index/dao.png" alt="">
        </div>
        <p>签约数量</p>
        <div class="paixu">
          <p>排序</p>
          <img src="../../../static/image/index/dao.png" alt="">
        </div>
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
    name: "shejishiliebiaoye",
    data() {
      return {
        designerShow: "",
        page: 0,
        designerAdList:""
      }
    },
    mounted() {
      this.DesignerAd();
      this.designerList();
    },
    methods: {
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
          shop_id: "",
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
          console.log(err)
        })
      },
      DesignerAd(){
        this.$vux.loading.show();
        this.$index.DesignerAd().then((res) => {
          console.log(res);
          this.designerAdList = res.data.special_info;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //搜素设计师
      goSeekSjs() {
        this.$router.push({
          name: "seekSjs"
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "choicenessstylist.less";
</style>
