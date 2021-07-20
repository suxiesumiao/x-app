<template>
  <view
      class="common-select"
      :class="{'active': active, 'selecting': selecting}"
      @tap.stop="toggleSelecting">
    <text class="default-title">{{ defaultTitle }}</text>
    <u-icon class="arrow-icon" name="arrow-up-fill" color="#333" size="10"></u-icon>
    <slot name="selectArea"></slot>
  </view>
</template>

<script>
  export default {
    name: "common-select",
    data() {
      return {
        active: false,
        selecting: false,
      }
    },
    props: {
      defaultTitle: {
        type: String,
        default: ""
      }
    },
    watch: {
      selecting(nV) {
        this.$emit('selecting', nV);
      }
    },
    methods: {
      hideArea() {
        this.active = false;
      },
      toggleSelecting() {
        this.selecting = !this.selecting;
      }
    }
  }
</script>

<style scoped lang="scss">
.common-select {
  display: inline-block;
  & > .default-title {
    font-size:12px;
    font-weight:400;
    line-height:12px;
    margin-right: 6px;
  }
  & > .arrow-icon {
    transition: all .3s;
  }
  &.selecting > .arrow-icon{
    transform: rotate(180deg);
  }
  &.active > .default-title{
    color: #24A27C;
  }
}
</style>