<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true;
        })
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: MicrosoftYaHei, serif;
    border: none;
    outline: none;
  }

  .my-bullet-active {
    background: white !important;
    opacity: 1 !important;
  }

  .side-content .mint-indexlist .mint-indexlist-content {
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
  }
</style>
