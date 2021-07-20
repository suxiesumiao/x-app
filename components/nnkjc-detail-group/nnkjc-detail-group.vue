<template>
  <view class="padding-normal margin-normal radius-normal detail-gruop">
    <slot></slot>
  </view>
</template>

<script>
  export default {
    name: "nnkjc-detail-group"
  }
</script>

<style scoped lang="scss">
.detail-gruop {
  background-color: #ffffff;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>