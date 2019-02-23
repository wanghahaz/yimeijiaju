<template>
  <div class="choicenesscase" v-swipeup="vueTouch" v-swipedown="vueTouch">
    <div class="headernavigation">
      <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack"> 精选案例
      <img class="search" src="../../../static/image/choicenessstylist/tousousu.png" @click="goSeekAl" alt="">
    </div>
    <!--筛选结果-->
    <div class="consequence" v-show="searchBarFixed">
      <div class="consequencelist" @click="show()">
        <span v-show="screenBol">筛选</span>
        <span class="spanBlock" v-show="!screenBol">
					<span v-if="houseTypeNow>0">{{houseTypeItem}} <a href="javascript:;" class="spanBlockone">/</a></span>
					<span v-if="styleNow>0">{{styleItem}} <a href="javascript:;" class="spanBlockone">/</a></span>
					<span v-if="interspaceNow>0">{{interspaceItem}} <a href="javascript:;" class="spanBlockone">/</a></span>
					<span v-if="sourceNow>0">{{sourceItem}} <a href="javascript:;" class="spanBlockone">/</a></span>
					<span v-if="sortNow>0">{{sortItem}} <a href="javascript:;" class="spanBlockone">/</a></span>
				</span>
        <img src="../../../static/image/choicenessstylist/xialaxiala.png" alt="">
      </div>
      <div class="filtratebox farm" v-show="isShow">
        <div class="filtrate">
          <!--户型-->
          <div class="filtrate-one">
            <div class="filtrateonelist" ref="team_2">
              <div @click="onHouseType(item)" :class="item.house_id==houseTypeNow?'active':'spanClass'"
                    v-for="item in houseTypeList">{{item.house_name}}</div>
            </div>
          </div>
          <!--风格-->
          <div class="filtrate-two">
            <div class="filtratetwolist">
              <div @click="onStyle(item)" :class="item.style_id==styleNow?'active':'spanClass'"
                    v-for="item in styleList">{{item.style_name}}</div>
            </div>
          </div>
          <!--空间-->
          <div class="filtrate-three">
            <div class="filtratethreelist">
              <div @click="onInterspace(item)" :class="item.space_id==interspaceNow?'active':'spanClass'"
                    v-for="item in interspaceList">{{item.space_name}}</div>
            </div>
          </div>
          <!--来源-->
          <div class="filtrate-four">
            <div @click="onSource(item,index)" :class="index==sourceNow?'active':'spanClass'"
                  v-for="(item,index) in sourceList">{{item}}</div>
          </div>
          <!--排序-->
          <div class="filtrate-five">
            <div class="filtratefivelist">
              <div @click="onSort(item,index)" :class="index==sortNow?'active':'spanClass'"
                    v-for="(item,index) in sortList">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--筛选-->
    <div class="filtratebox" ref="ele">
      <div class="filtrate">
        <!--户型-->
        <div class="filtrate-one">
          <div class="filtrateonelist">
            <div @click="onHouseType(item)" :class="item.house_id==houseTypeNow?'active':'spanClass'"
                  v-for="item in houseTypeList">{{item.house_name}}</div>
          </div>
        </div>
        <!--风格-->
        <div class="filtrate-two">
          <div class="filtratetwolist">
            <div @click="onStyle(item)" :class="item.style_id==styleNow?'active':'spanClass'"
                  v-for="item in styleList">{{item.style_name}}</div>
          </div>
        </div>
        <!--空间-->
        <div class="filtrate-three">
          <div class="filtratethreelist">
            <div @click="onInterspace(item)" :class="item.space_id==interspaceNow?'active':'spanClass'"
                  v-for="item in interspaceList">{{item.space_name}}</div>
          </div>
        </div>
        <!--来源-->
        <div class="filtrate-four">
          <div @click="onSource(item,index)" :class="index==sourceNow?'active':'spanClass'"
                v-for="(item,index) in sourceList">{{item}}</div>
        </div>
        <!--排序-->
        <div class="filtrate-five">
          <div class="filtratefivelist">
            <div @click="onSort(item,index)" :class="index==sortNow?'active':'spanClass'"
                  v-for="(item,index) in sortList">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--策划专题-->
    <div class="scheme">
      <div class="scheme-list">
        <div class="scheme-box">
          <img src="../../../static/image/index/zhuanti.png" alt="">
          <p>编辑策划专题</p>
        </div>
        <div class="scheme-box">
          <img src="../../../static/image/index/zhuanti.png" alt="">
          <p>编辑策划专题</p>
        </div>
        <div class="scheme-box">
          <img src="../../../static/image/index/zhuanti.png" alt="">
          <p>编辑策划专题</p>
        </div>
      </div>
    </div>
    <!--设计师房屋设计列表-->
    <div class="devise-list" v-for="item in caseList" @click="goGetCaseInfo(item.sub_id)">
      <img class="image-show" v-lazy="item.case_img" alt="">
      <div class="devise-footer">
        <h1>{{item.subject_name}}</h1>
        <div class="like">
          <div class="like-one">
            <span>{{item.acreage}}㎡</span> / <span>{{item.style_name}}</span> / <span>全包</span>
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
    <infinite-loading :on-infinite="getCaseList" ref="infiniteLoading">
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
    name: "jingxuananliliebiaoye",
    components: {
      InfiniteLoading
    },
    data() {
      return {
        //户型
        houseTypeList: [],
        //风格
        styleList: [],
        //空间
        interspaceList: [],
        //来源
        sourceList: ['来源', '屋主', '设计师'],
        //排序
        sortList: ['排序', '编辑精选', '评论', '收藏', '点赞', '发布时间'],
        searchBarFixed: false,
        houseTypeNow: 0, //户型状态
        styleNow: 0, //风格状态
        interspaceNow: 0, //空间状态
        sourceNow: 0, //来源状态
        sortNow: 0, //排序状态
        houseTypeItem: "户型", //户型值
        styleItem: "风格", //风格值
        interspaceItem: "空间", //空间值
        sourceItem: "来源", //来源值
        sortItem: "排序", //排序值
        houseTypeBol: true,
        styleBol: true,
        interspaceBol: true,
        sourceBol: true,
        sortBol: true,
        screenBol: false, //筛选文字判断
        isShow: false,
        caseList: [], //案例列表
        styleId: "",
        spaceId: "",
        houseId: "",
        page: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.getCaseList();
      this.getCaseType();
      if (this.$route.query.type == 0) {
        this.styleId = this.$route.query.id
        this.styleNow = this.$route.query.id
      } else if (this.$route.query.type == 1) {
        this.houseId = this.$route.query.id
        this.houseTypeNow = this.$route.query.id
      } else if (this.$route.query.type == 2) {
        this.spaceId = this.$route.query.id
        this.interspaceNow = this.$route.query.id
      }


    },
    methods: {
      vueTouch() {
        this.isShow = false;
      },
      show() {
        this.isShow = !this.isShow;
      },
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let scrollHight = this.$refs.ele.offsetHeight;
        if (scrollTop > scrollHight) {
          if (this.houseTypeItem == "户型" && this.styleItem == "风格" && this.interspaceItem == "空间" && this.sourceItem == "来源" &&
            this.sortItem == "排序") {
            this.screenBol = true;
            this.searchBarFixed = true;
          } else {
            this.searchBarFixed = true;
            this.screenBol = false;
          }
        } else {
          this.isShow = false
          this.searchBarFixed = false
        }
      },
      onHouseType(item) {
        this.page = 0;
        this.caseList = [];
        this.houseTypeItem = item.house_name;
        this.houseTypeNow = item.house_id;
        this.houseId = item.house_id;
        this.getCaseList();
      },
      onStyle(item) {
        this.page = 0;
        this.caseList = [];
        this.styleItem = item.style_name;
        this.styleNow = item.style_id;
        this.styleId = item.style_id;
        this.getCaseList();
      },
      onInterspace(item) {
        this.page = 0;
        this.caseList = [];
        this.interspaceItem = item.space_name;
        this.interspaceNow = item.space_id;
        this.spaceId = item.space_id;
        this.getCaseList();
      },
      onSource(item, index) {
        this.page = 0;
        this.caseList = [];
        this.sourceItem = item;
        this.sourceNow = index;
      },
      onSort(item, index) {
        this.page = 0;
        this.caseList = [];
        this.sortItem = item;
        this.sortNow = index;
      },
      //返回上一级
      goBack() {
        this.$router.go(-1);
      },
      //装修案例列表展示

      //装修案例列表展示
      getCaseList() {
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
          style_id: this.styleId,
          space_id: this.spaceId,
          house_id: this.houseId
        };
        this.$index.GetCaseList(data).then((res) => {
          if (res.status == "200") {
            if (res.data.data.length) {
              var data = res.data.data;
              for (let i = 0; i < data.length; i++) {
                data[i].case_img = this.$imgSrc + data[i].case_img
              }
              this.caseList = [...this.caseList, ...data];
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            } else {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            }
            this.$vux.loading.hide();
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            this.$vux.loading.hide();
          }
          console.log(this.caseList)
        }).catch((err) => {
          console.log(err)
        })
      },
      // getCaseList($state) {
      //   this.$vux.loading.show();
      //   let data = {
      //     page: 1,
      //     style_id: this.styleId,
      //     space_id: this.spaceId,
      //     house_id: this.houseId
      //   };
      //   this.$index.GetCaseList(data).then((res) => {
      //     if (res.status == "200") {
      //       this.caseList = res.data.data;
      //       for (let i = 0; i < this.caseList.length; i++) {
      //         this.caseList[i].case_img = this.$imgSrc + this.caseList[i].case_img
      //       }
      //       this.$vux.loading.hide();
      //     } else {
      //       this.$vux.loading.hide();
      //     }
      //   }).catch((err) => {
      //     console.log(err)
      //   })
      // },
      // getCaseList($state) {
      //   this.$vux.loading.show();
      //   this.page++;
      //   let data = {
      //     page: this.page,
      //     style_id: this.styleId,
      //     space_id: this.spaceId,
      //     house_id: this.houseId
      //   };
      //   this.$index.GetCaseList(data).then((res) => {
      //     if (res.status == "200") {
      //       if (res.data.data.length) {
      //         var data = res.data.data;
      //         for (let i = 0; i < data.length; i++) {
      //           data[i].case_img = this.$imgSrc + data[i].case_img
      //         }
      //         this.caseList = [...this.caseList, ...data];
      //         $state.loaded();
      //       } else {
      //         $state.complete();
      //       }
      //       this.$vux.loading.hide();
      //     } else {
      //       this.$vux.loading.hide();
      //       $state.complete();
      //
      //     }
      //   }).catch((err) => {
      //     this.caseList = [];
      //     console.log(err)
      //   })
      // },
      //装修案例更多列表页装修类型
      getCaseType() {
        this.$vux.loading.show();
        this.$index.GetCaseType().then((res) => {
          this.houseTypeList = res.data.case_house;
          this.houseTypeList.unshift({
            house_id: "",
            house_name: "户型"
          });
          this.styleList = res.data.case_style;
          this.styleList.unshift({
            style_id: "",
            style_name: "风格"
          });
          this.interspaceList = res.data.case_space;
          this.interspaceList.unshift({
            space_id: "",
            space_name: "空间"
          });
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
      },
      //去搜素案例
      goSeekAl() {
        this.$router.push({
          name: "seekAl"
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "choicenesscase.less";
</style>
