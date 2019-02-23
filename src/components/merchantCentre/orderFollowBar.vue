<template>
  <div class="home">
    <transition name="fade">
      <div class="menu-mask" v-show="isShowFollow" @click="hideSide" @touchmove.prevent></div>
    </transition>
     
    <transition name="slide-fade">
      <div class="side-content" v-show="isShowFollow">
        <div class="citychoice">
          <img src="../../../static/image/login/fanhui.png" @click="hideSide" alt="">
          客情角色
        </div>
        <div class="follow">
          <p v-for="(item,index) in dataList" @click="handleFollowClick(item,index)">
            {{item}}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        dataList: []
      }
    },
    methods: {
      hideSide() {
        this.$store.dispatch('hideFollowBar');
      },
      //客情角色列表
      getRoleList() {
        this.$vux.loading.show();
        this.$merchant.getRoleList().then((res) => {
          this.dataList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      handleFollowClick(follow, index) {
        this.hideSide();
        this.$emit('followChoice', {name:follow, key:index});
      }
    },
    computed: {
      isShowFollow() {
        return this.$store.getters.isShowFollow;
      }
    },
    mounted() {
      this.getRoleList()
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
    width: 177px;
    background: rgba(255, 255, 255, 1);
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  .side-content .follow {
    width: 130px;
    margin: auto;
  }

  .side-content .follow p {
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #E7E7E7;
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


</style>
