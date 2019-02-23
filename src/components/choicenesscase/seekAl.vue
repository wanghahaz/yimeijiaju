<template>
  <div class="seek">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        精选案例
      </div>
    </header>
    <!--搜索-->
    <div class="seekH">
      <input type="text" placeholder="案例搜索" v-model="casesName" @input="getCaseList">
      <p @click="goBack">取消</p>
      <img class="search" src="../../../static/image/choicenessstylist/suoxiaobai.png" alt="">
    </div>
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
    <infinite-loading v-if="casesName!=''" :on-infinite="getCaseList" ref="infiniteLoading">
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
    name: "seekAl",
    data() {
      return {
        caseList: [], //案例列表
        casesName: "",
        page: 0
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
      //去案例详情
      goGetCaseInfo(id) {
        this.$router.push({
          name: "anlixiangqing",
          query: {
            id: id
          }
        })
      },
      //装修案例列表展示
      getCaseList($state) {
        if (this.casesName == "") {
          this.page = 0;
          this.caseList = [];
          return;
        }
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
          cases_name: this.casesName
        };
        this.$index.GetCaseList(data).then((res) => {
          if (res.status == "200") {
            if (res.data.data.length) {
              let data = res.data.data;
              for (let i = 0; i < data.length; i++) {
                data[i].case_img = this.$imgSrc + data[i].case_img
              }
              this.caseList = [...this.caseList, ...data];
              $state.loaded();
            } else {
              $state.complete();
            }
            this.$vux.loading.hide();
          } else {
            $state.complete();
            this.$vux.loading.hide();
          }
        }).catch((err) => {
          console.log(err)
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

    //  设计师房屋设计列表
    .devise-list {
      width: 702px/2;
      background: rgba(255, 255, 255, 1);
      margin: 40px/2 auto;
      border-radius: 10px/2;

      img {
        width: 100%;
        border-radius: 10px/2 10px/2 0 0;
        height: 395px/2;
      }

      .devise-footer {
        width: 100%;

        h1 {
          font-size: @size;
          font-weight: @font-weight;
          margin: 40px/2 0 23px/2 15px/2;
        }
      }

      .like {
        width: 672px/2;
        margin: auto;
        display: flex;
        justify-content: space-between;
        font-size: @small-size;
        padding-bottom: 31px/2;
        border-top: 0;

        .like-one {
          color: #333;
        }

        .like-two {
          color: #999;

          img {
            width: 34px/2;
            height: 30px/2;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
