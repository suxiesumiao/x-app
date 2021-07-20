<template>
  <view class="common-header">
    <view class="header">
      <text>{{ title }}</text>
    </view>
    <view class="content">
      <slot name="operation"></slot>
    </view>
  </view>
</template>

<script>
  export default {
    name: "common-header",
    data() {
      return {}
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .common-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .header {
      flex-grow: 1;
      height: 26px;
      font-size: 18px;
      font-weight: bold;
      line-height: 26px;
      color: #333333;
    }
    & > .content {

    }
  }
</style>