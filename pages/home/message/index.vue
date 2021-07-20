<template>
  <view class="message-wrapper">
    <u-navbar
      isFixed
      :borderBottom="false"
      backIconName="arrow-leftward"
      titleSize="34"
      :background="background"
      title="消息详情"
    ></u-navbar>
    <view class="margin-normal padding-normal radius-normal bg-white">
      <view class="message" v-for="(message, index) in messages" :key="index">
        <view class="title">
          <text class="type">{{ typeMap[message.type] }}</text>
          <text class="date-str">{{ message.createDateStr }}</text>
        </view>
        <view class="content">
          <view class="content-title">{{ message.title }}</view>
          <view class="content-inner">
            {{ message.content }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "message",
  onLoad(options) {
    this.messages.push({
      type: options.type,
      content: options.content,
      type: options.type,
      title: options.title,
      createDateStr: options.createDateStr,
    });
  },
  data() {
    return {
      typeMap: {
        1: "会议",
        2: "奖惩",
        3: "活动",
        4: "审批",
      },
      background: {
        background: "#f2f2f8",
      },
      messages: [],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.date-str {
  font-size: 12px;
  color: #666666;
}
.content-title {
  font-size: 18px;
}
.content-inner {
  color: #666666;
  font-size: 16px;
}
.title > .type {
  font-size: 18px;
}
.message-wrapper {
  & .message {
    font-size: 14px;
    &:not(:first-child) {
      margin-top: 20px;
    }
    & > .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 30px;
      height: 20px;
      margin-bottom: 10px;
      & > .type {
        color: gold;
      }
    }
    & > .content {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>