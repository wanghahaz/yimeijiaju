<template>
  <div class="comparison">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        装修公司对比
      </div>
    </header>
    <div class="top">


      <div class="comparisonlist">
        <span class="fixation">公司名称</span>
        <span class="fixationone" style="font-weight: bold" v-for="item in shopNameList">{{item}}</span>
      </div>
      <div class="comparisonlist">
        <span class="fixation">成立时间</span>
        <span class="fixationone" style="background:rgba(255,255,255,1);"
              v-for="item in establishDateList">{{item}}年</span>
      </div>
      <div class="comparisonlist zongbu">
        <span class="fixation">总部地址</span>
        <span class="fixationone" v-for="item in addressList">
				<p>{{item}}</p>
			</span>
      </div>
      <div class="comparisonlist">
        <span class="fixation">公司总人数</span>
        <span class="fixationone" style="background:rgba(255,255,255,1)" v-for="item in totalNumList">
				<p>{{item}}</p>
			</span>
      </div>
      <div class="comparisonlist">
			<span class="fixation">
				<p class="zhucai" style="padding-top: 22px">覆盖城市数量</p>
			</span>
        <span class="fixationone" v-for="item in coverCityList">{{item}}</span>
      </div>
      <div class="comparisonlist">
        <span class="fixation">直营/加盟</span>
        <span class="fixationone" style="background:rgba(255,255,255,1);" v-for="item in shopTypeList">{{item}}</span>
      </div>
      <div class="comparisonlist">
        <span class="fixation">设计师人数</span>
        <span class="fixationone" v-for="item in designerNumList">{{item}}</span>
      </div>
      <div class="comparisonlist">
        <span class="fixation">承接类型</span>
        <span class="fixationone" style="background:rgba(255,255,255,1);"
              v-for="item in UndertakeTypeList">{{item}}</span>
      </div>
      <div class="comparisonlist xiangmu">
        <span class="fixation">包含项目</span>
        <span class="fixationone" v-for="item in ContainProjectList">
				<p>{{item}}</p>
			</span>
      </div>
      <div class="comparisonlist">
        <span class="fixation">合同均价</span>
        <span class="fixationone" style="background:rgba(255,255,255,1);" v-for="item in avgPriceList">{{item}}</span>
      </div>
      <div class="comparisonlist pinpai">
			<span class="fixation">
				<p class="zhucai">
					主材精选品牌
				</p>
			</span>
        <span class="fixationone" v-for="item in selectedBrandsList">
				<!-- <p>地板：爱格</p>
				<p>瓷砖：马可波罗</p>
				<p>卫浴：美标</p>
				<p>灯具：欧普</p> -->
				<p>{{item}}</p>
			</span>
      </div>
      <div class="comparisonlist pingfen">
        <span class="fixation">评分</span>
        <span class="fixationone fixationthree" style="background:rgba(255,255,255,1);" v-for="item in shopScoreList">
				<div>
					<img src="../../../static/image/index/xing.png"/>
					<img src="../../../static/image/index/xing.png"/>
					<img src="../../../static/image/index/xing.png"/>
					<img src="../../../static/image/index/xing.png"/>
					<img src="../../../static/image/index/xing.png"/>
				</div>
				<p>{{item}}</p>
			</span>
      </div>
      <div class="comparisonlist">
        <span class="fixation">咨询电话</span>
        <span class="fixationone" style="color: #00BAFF" v-for="item in shopTelList">{{item}}</span>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name: "comparison",
    data() {
      return {
        shopIdStr: "",
        shopContrastList: "",
        shopNameList: [], //公司名称
        establishDateList: [], //成立时间
        addressList: [], //总部地址
        totalNumList: [], //公司总人数
        coverCityList: [], //覆盖城市
        shopTypeList: [], //直营加盟
        designerNumList: [], //设计师人数
        UndertakeTypeList: [], //承接类型
        ContainProjectList: [], //包含项目
        avgPriceList: [], //合同均价
        selectedBrandsList: [], //主材精选品牌
        shopScoreList: [], //评分
        shopTelList: [], //手机号
      }
    },
    mounted() {
      if (this.$route.query.idOne != '' && this.$route.query.idTwo != '' && this.$route.query.idThree != '') {
        this.shopIdStr = this.$route.query.idOne + ',' + this.$route.query.idTwo + ',' + this.$route.query.idThree;
      } else if (this.$route.query.idOne != '' && this.$route.query.idTwo != '') {
        this.shopIdStr = this.$route.query.idOne + ',' + this.$route.query.idTwo;
      } else {
        this.shopIdStr = this.$route.query.idOne + ',' + this.$route.query.idThree;
      }
      this.shopContrast();
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      shopContrast() {
        this.$vux.loading.show();
        let data = {
          shop_idStr: this.shopIdStr
        };
        this.$index.shopContrast(data).then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            //公司名称
            this.shopNameList.push(res.data[i].shop_name);
            //成立时间
            this.establishDateList.push(res.data[i].establish_date);
            //总部地址
            this.addressList.push(res.data[i].address);
            //公司总人数
            if (res.data[i].total_num.length <= 0) {
              res.data[i].total_num = '—————';
              this.totalNumList.push(res.data[i].total_num);
            } else {
              res.data[i].total_num = res.data[i].total_num + '+';
              this.totalNumList.push(res.data[i].total_num);
            }
            //覆盖城市
            if (res.data[i].cover_city_num.length <= 0) {
              res.data[i].cover_city_num = '—————';
              this.coverCityList.push(res.data[i].cover_city_num);
            } else {
              res.data[i].cover_city_num = res.data[i].cover_city_num + '座城市';
              this.coverCityList.push(res.data[i].cover_city_num);
            }
            //直营加盟
            if (res.data[i].shop_type.length <= 0) {
              res.data[i].shop_type = '—————';
              this.shopTypeList.push(res.data[i].shop_type);
            } else {
              this.shopTypeList.push(res.data[i].shop_type);
            }
            //设计师人数
            if (res.data[i].designer_num.length <= 0) {
              res.data[i].designer_num = '—————';
              this.designerNumList.push(res.data[i].designer_num);
            } else {
              res.data[i].designer_num = res.data[i].designer_num + '+';
              this.designerNumList.push(res.data[i].designer_num);
            }
            //承接类型
            if (res.data[i].Undertake_type.length <= 0) {
              res.data[i].Undertake_type = '—————';
              this.UndertakeTypeList.push(res.data[i].Undertake_type);
            } else {
              this.UndertakeTypeList.push(res.data[i].Undertake_type);
            }
            //包含项目
            if (res.data[i].Contain_project.length <= 0) {
              res.data[i].Contain_project = '—————';
              this.ContainProjectList.push(res.data[i].Contain_project);
            } else {
              this.ContainProjectList.push(res.data[i].Contain_project);
            }
            //合同均价
            if (res.data[i].avg_price.length <= 0) {
              res.data[i].avg_price = '—————';
              this.avgPriceList.push(res.data[i].avg_price);
            } else {
              this.avgPriceList.push(res.data[i].avg_price);
            }
            //主材精选品牌
            if (res.data[i].selected_brands.length <= 0) {
              res.data[i].selected_brands = '—————';
              this.selectedBrandsList.push(res.data[i].selected_brands);
            } else {
              this.selectedBrandsList.push(res.data[i].selected_brands);
            }
            //评分
            if (res.data[i].shop_score.length <= 0) {
              res.data[i].shop_score = '—————';
              this.shopScoreList.push(res.data[i].shop_score);
            } else {
              res.data[i].shop_score = res.data[i].shop_score + '分';
              this.shopScoreList.push(res.data[i].shop_score);
            }
            //手机号
            if (res.data[i].shop_tel.length <= 0) {
              res.data[i].shop_tel = '—————';
              this.shopTelList.push(res.data[i].shop_tel);
            } else {
              this.shopTelList.push(res.data[i].shop_tel);
            }
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .comparison {
    font-size: 24px/2;
    width: 100%;
    border-top: 1px solid rgba(219, 219, 219, 1);

    .comparisonlist {
      width: 100%;
      height: 100px/2;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(219, 219, 219, 1);

      .fixation {
        text-indent: 24px/2;
        /*flex: 1;*/
        width: 151px/2;
        background: rgba(248, 248, 248, 1);
        line-height: 100px/2;
        color: rgba(102, 102, 102, 1);
        border-right: 2px solid rgba(219, 219, 219, 1);

        .zhucai {
          width: 96px/2;
          height: 54px/2;
          line-height: 30px/2;
          text-indent: 0;
          padding-left: 24px/2;
          padding-top: 38px/2;
        }
      }

      .fixationone {
        flex: 1.1;
        line-height: 100px/2;
        height: 100%;
        text-indent: 24px/2;
        background: rgba(232, 247, 255, 1);
        border-right: 1px solid rgba(219, 219, 219, 1);
      }

      .fixationthree {
        div {
          width: 132px/2;
          display: flex;
          justify-content: space-between;
          margin-left: 20px/2;
          margin-top: 26px/2;

          img {
            width: 20px/2;
            height: 20px/2;
          }
        }

        p {
          line-height: 1.5;
        }
      }
    }

    .xiangmu {
      height: 132px/2;

      .fixationone {
        text-indent: 0;

        p {
          width: 168px/2;
          margin-top: 38px/2;
          line-height: 30px/2;
          padding-left: 20px/2;
        }
      }
    }

    .zongbu {
      .fixationone {
        text-indent: 0;

        p {
          width: 2.24rem;
          margin-top: 0.1rem;
          line-height: 0.4rem;
          padding-left: 0.266667rem;
        }
      }
    }

    .pinpai {
      height: 191px/2;

      .fixationone {
        line-height: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        p {
          margin-top: 39px/2;
          text-align: left;
        }
      }
    }

    .header-container {
      position: fixed;
      top: 0;
      z-index: 10;
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
          width: (19px/2);
          margin-top: 15px;
          height: (32px/2);
        }
      }

      .title {
        width: 90%;
        text-align: center;
        font-size: (36px/2);
      }
    }

    .top {
      margin-top: 44px;
    }
  }
</style>
