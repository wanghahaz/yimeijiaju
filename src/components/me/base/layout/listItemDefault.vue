<template>
  <div class="default-item-container">
    <div class="item">
      <div class="label">{{label}}</div>
      <div class="value">{{value}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "listItemDefault",
    props: {
      label: {
        type: String,
        default: 'label'
      },
      value: {
        default: 'value'
      }
    }
  }
</script>

<style scoped lang="scss">
  .default-item-container {
    width: 100%;
    padding: 0 (20px/2);
    display: table;
    table-layout: fixed;
    box-sizing: border-box;
    height: (80px/2);

    font-size: (28px/2);
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: (80px/2);

    .item {
      border-bottom:1px solid #f2f2f2;
      .label {
        display: table-cell;
        color: rgba(102, 102, 102, 1);
        width: (210px/2);
        vertical-align: middle;
        text-align: left;
      }
      .value {
        display: table-cell;
        vertical-align: middle;
        text-align: left;
      }
    }
  }
</style>
