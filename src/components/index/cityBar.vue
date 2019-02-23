<template>
   
  <div class="home">
    <transition name="fade">
      <div class="menu-mask" v-show="isRellyShow" @click="hideSide" @touchmove.prevent></div>
    </transition>
     
    <transition name="slide-fade">
      <div class="side-content" v-show="isRellyShow" @touchmove.prevent>
        <div class="citychoice">
          <img src="../../../static/image/login/fanhui.png" @click="hideSide" alt="">
          选择城市
        </div>
        <div class='citychoicelist'>
          <div class="citychoicelistone" v-for="item in dataList" @click="handleCityClick(item.value)">
            {{item.value}}
          </div>
        </div>
        <p class="more">更多城市 陆续上线</p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        dataList: [{
          key: 0,
          value: "北京"
        }, {
          key: 1,
          value: "成都"
        }, {
          key: 2,
          value: "武汉"
        }, {
          key: 3,
          value: "重庆"
        }, {
          key: 4,
          value: "西安"
        }, {
          key: 5,
          value: "石家庄"
        }, {
          key: 6,
          value: "天津"
        }, {
          key: 7,
          value: "全国"
        }]
      }
    },

    methods: {
      hideSide() {
        this.$store.dispatch('hideSideBar');
      },
      handleCityClick(city) {
        this.hideSide();
        this.$emit('cityChoice', city);
      },
    },
    computed: {
      isRellyShow() {
        return this.$store.getters.isShowMethod;
      }
    },
    mounted() {
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
    z-index: 88;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    width: 177px;
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
    -webkit-transform: translate(177px, 0px);
    transform: translate(177px, 0px);
    -webkit-transition: opacity 0.3s ease-in-out 0.3s, -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
  }

  /* 城市选择 */
  .citychoice {
    width: 177px;
    height: 50px;
    background: rgba(248, 248, 248, 1);
    position: relative;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .citychoice img {
    position: absolute;
    width: 9.5px;
    height: 16px;
    top: 17px;
    left: 15px;
  }

  .citychoicelist {
    width: 145px;
    height: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;

  }

  .citychoicelistone {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E7E7E7;
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    line-height: 50px;
  }

  .more {
    font-size: 14px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    margin-top: 50px;
  }
</style>
