<template>
  <view class="detail-item" :class="{'gap': gap}">
    <view class="detail-title" :style="{
      'min-width': labelWidth + 'px'
    }">
      {{ detailTitle }}
      <slot name="title"></slot>
    </view>
    <view class="detail-content" :style="{
      'text-align': align
    }">
      {{ detailContent }}
      <slot name="content"></slot>
    </view>
  </view>
</template>

<script>
  export default {
    name: "nnkjc-detail-item",
    props: {
      detailTitle: {
        type: String,
        required: false
      },
      detailContent: {
        type: String,
        required: false
      },
      align: {
        type: String,
        default: "right"
      },
      gap: {
        type: Boolean,
        default: true
      },
      labelWidth: {
        type: Number,
        default: 70
      }
    },
    onLoad() {
    }
  }
</script>

<style scoped lang="scss">
.detail-item {
  font-size:14px;
  font-weight:400;
  line-height:36px;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  &.gap {
    border-bottom: 1px solid #f1f1f1;
  }
  & > .detail-title {
    /*min-width: 70px;*/
    color:rgba(138,138,142,1);
  }
  & > .detail-content {
    flex-grow: 1;
    margin-left: 10px;
    text-align: right;
  }
}
</style>