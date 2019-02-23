<template>
  <div class="item">
    <div class="img-container" v-bind:class=[type] align="center">
      <slot></slot>
    </div>
    <p class="text">
      {{text}}
    </p>
  </div>
</template>

<script>
  export default {
    name: "top-bottom",
    props: {
      text: {
        type: String
      },
      type: {
        type: String,
        default: 'default'
      }
    }
  }
</script>

<style scoped lang="scss">

  .item {
    display: inline-block;
    padding-top: 10px;
    text-align: center;
    .img-container {
      border-radius: 22.5px;
      display: inline-block;

    }

    .default img {
      width: 45px;
      height: 45px;
    }

    .big img {
      width: 60px;
      height: 60px;
    }

    .text {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      margin-top: 5px;
      text-align: center;
      color: rgba(51, 51, 51, 1);
    }
  }


</style>
