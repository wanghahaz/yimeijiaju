<template>
   
  <div class="home">
    <transition name="fade">
      <div class="menu-mask" v-show="isShowCompany" @click="hideSide" @touchmove.prevent></div>
    </transition>
     
    <transition name="slide-fade">
      <div class="side-content" v-show="isShowCompany" @touchmove.prevent>
        <div class="companychoice">
          <img src="../../../static/image/login/fanhui.png" @click="hideSide" alt="">
          选择对比公司
        </div>
        <div class="companychoicelist" v-for="item in dataList">
          <div class="companychoicelistone" @click="change(item.shop_name,item.id)">
            <img v-lazy="item.logo_path" alt="">
            <div class="companyname">
              {{item.shop_name}}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      event: {
        type: Array
      }
    },
    data() {
      return {
        toArr: [],
        dataList: ""
      }
    },
    methods: {
      change(value, id) {
        var title = this.toArr.filter(item => item.id == id)
        if (title.length == 0) {
          this.toArr.unshift({
            value: value,
            id: id
          });
          this.$emit('selet', this.toArr);
        } else {
          this.$showToast(true, 'text', '您已添加了该公司');
        }
        this.$store.dispatch('hideCompanyBar');
      },
      hideSide() {
        this.$store.dispatch('hideCompanyBar');
      },
      //装修公司列表
      shopList() {
        this.$vux.loading.show();
        let data = {
          page: 1,
          decorate_type: "",
          room_id: "",
          district_id: "",
          is_quality: ""
        };
        this.$index.shopList(data).then((res) => {
          this.dataList = res.data.data;
          for (let i = 0; i < this.dataList.length; i++) {
            this.dataList[i].logo_path = this.$imgSrc + this.dataList[i].logo_path
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
    },
    computed: {
      isShowCompany() {
        return this.$store.getters.isShowCompany;
      }
    },
    mounted() {
      this.shopList();
    }
  }
</script>

<style scoped>
  .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10 !important;
    background: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color:transparent;
  }

  .side-content {
    z-index: 10;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    width: 215px;
    background: rgba(255, 255, 255, 1);
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color:transparent;
  }

  .fade-enter-to,
  .fade-leave-to {
    transition: opacity 0.3s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }


  .slide-fade-enter-to,
  .slide-fade-leave-to {
    transition: transform 0.3s;
    transform: translate(0px, 0px);
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    -webkit-transform: translate(215px, 0px);
    transform: translate(215px, 0px);
    -webkit-transition: opacity 0.3s ease-in-out 0.3s, -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
  }

  /* 公司对比选择 */
  .companychoice {
    width: 215px;
    height: 50px;
    background: rgba(248, 248, 248, 1);
    position: relative;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .companychoice img {
    position: absolute;
    top: 17px;
    left: 15px;
    width: 9.5px;
    height: 16px;
  }

  .companychoicelist {
    width: 190px;
    margin: auto;
  }

  .companychoicelistone {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }

  .companychoicelistone img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: auto 15px auto 0;
  }

  .companyname {
    width: 185px;
    height: 100%;
    border-bottom: 1px solid #E7E7E7;
    font-size: 14px;
    line-height: 50px;
  }
</style>
