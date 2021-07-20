<template>
  <view class="version-wrapper">
    <u-navbar
        isFixed
        :borderBottom="false"
        backIconName="arrow-leftward"
        titleSize="34"
        :background="background"
        title="消息详情"></u-navbar>
    <view class="margin-normal padding-normal radius-normal bg-white">
      <view class="version" v-for="(version, index) in versions" :key="index">
        <view class="title">
          <text>{{ version.title }}</text>
          <text class="time">{{ version.time }}</text>
        </view>
        <view class="content">{{ version.content }}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "version",
    
    data() {
      return {
        background: {
          'background': '#f2f2f8'
        },
        versions: [
          {
            title: "v1.0.0",
            time: "2021-05-01 00:00",
            content: "版本v1.0.0"
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
.version-wrapper {
  & .version {
    font-size: 14px;
    &:not(:first-child) {
      margin-top: 20px;
    }
    & > .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size:14px;
      font-weight:400;
      line-height:16px;
      height: 20px;
      & > .time {
        color:rgba(138,138,142,1);
      }
    }
    & > .content {
      font-size:16px;
      line-height:24px;
    }
  }
}
</style>