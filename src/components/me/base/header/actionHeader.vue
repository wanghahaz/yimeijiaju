<template>
  <header class="header-container">
    <div class="left">
      back
    </div>

    <div class="title">
      Title
    </div>

    <div class="right">
      submit
    </div>
  </header>
</template>

<script>
  export default {
    name: "actionHeader"
  }
</script>

<style scoped lang="scss">
  .header-container {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid #cccccc;
    height: 44px;
    line-height: 44px;
    display: table;
    table-layout: fixed;
    background-color: white;
    .left {
      display: table-cell;
      text-align: left;
      padding-left: 12.5px;
    }

    .title {
      display: table-cell;
      text-align: center;
    }

    .right {
      display: table-cell;
      padding-right: 12.5px;
      text-align: right;
    }
  }
</style>
