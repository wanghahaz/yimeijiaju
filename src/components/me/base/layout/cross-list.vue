<template>
  <div class="cross-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "cross-list"
  }
</script>

<style scoped lang="scss">
  .cross-container {
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    padding-bottom: (30px/2);
  }
</style>
