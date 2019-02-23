<template>
   
  <div class="home">
    <transition name="fade">
      <div class="menu-mask" v-show="isRellyShow" @click="hideSide" @touchmove.prevent></div>
    </transition>
     
    <transition name="slide-fade">
      <div class="side-content" v-show="isRellyShow">
        <div class="citychoice">
          <img src="../../../../static/image/login/fanhui.png" @click="hideSide" alt="">
          选择设计师
        </div>
        <mt-index-list :show-indicator="false">
          <mt-index-section index="A">
            <mt-cell title="Aaron"></mt-cell>
            <mt-cell title="Alden"></mt-cell>
            <mt-cell title="Austin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="Baldwin"></mt-cell>
            <mt-cell title="Braden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="Caldwin"></mt-cell>
            <mt-cell title="Craden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="D">
            <mt-cell title="Daldwin"></mt-cell>
            <mt-cell title="Draden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="E">
            <mt-cell title="Ealdwin"></mt-cell>
            <mt-cell title="Eraden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="F">
            <mt-cell title="Faldwin"></mt-cell>
            <mt-cell title="Fraden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="G">
            <mt-cell title="Galdwin"></mt-cell>
            <mt-cell title="Graden"></mt-cell>
          </mt-index-section>

          <mt-index-section index="Z">
            <mt-cell title="Zack"></mt-cell>
            <mt-cell title="Zane"></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </transition>
  </div>
</template>

<script>
  import {IndexList, IndexSection} from 'mint-ui';

  export default {
    components: {},
    data() {
      return {
        dataList: []
      }
    },
    methods: {
      hideSide() {
        this.$store.dispatch('hideStylistBar');
      },
      getList() {
        this.$vux.loading.show();
        // let data = {
        //   city_name: this.cityValue
        // };
        this.$merchant.getList().then((res) => {
          // console.log(res)
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    computed: {
      isRellyShow() {
        return this.$store.getters.isShowStylist;
      }
    },
    mounted() {
      this.getList()
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
    -webkit-tap-highlight-color: transparent;
  }

  .side-content {
    z-index: 88;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    width: 215px;
    background: rgba(255, 255, 255, 1);
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
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

  /* 城市选择 */
  .citychoice {
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

  .citychoice img {
    position: absolute;
    width: 9.5px;
    height: 16px;
    top: 17px;
    left: 15px;
  }



</style>
