<template>
  <view class="nnkjc-task-item padding-normal" @click="click">
    <view class="task-icon" :class="'message-' + taskType">
      <text>{{ typeMap[taskType] }}</text>
    </view>
    <view class="task-body">
      <view class="task-tag"> </view>
      <view class="wrapper">
        <view class="task-title">
          <text class="inner">{{ taskTitle }}</text>
        </view>
        <view class="task-tag">
          <view v-if="statusText === '0'" class="status-flag status-text">未读</view>
        </view>
      </view>
      <view class="task-time"> </view>
      <view class="task-content">
        <text>{{ taskContent }}</text>
      </view>
      <view class="date-str">{{ createDate }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "nnkjc-task-item",
  data() {
    return {
      typeMap: {
        1: "会议",
        2: "奖惩",
        3: "活动",
        4: "审批",
      },
    };
  },
  props: {
    createDate: {
      type: String,
      required: false,
      default: "",
    },
    taskTitle: {
      type: String,
      required: false,
      default: "",
    },
    taskTime: {
      type: String,
      required: false,
      default: "",
    },
    taskContent: {
      type: String,
      required: false,
      default: "",
    },
    iconClass: {
      type: String,
      required: false,
      default: "",
    },
    taskType: {
      type: String,
      required: false,
      default: "default",
    },
    statusText: {
      type: String,
      required: false,
      default: "default",
    },
    overdueFlag: {
      type: String,
      required: false,
      default: "0",
    },
    statusFlag: {
      type: String,
      required: false,
      default: "0",
    },
  },
  methods: {
    click() {
      this.$emit("single-click");
    },
  },
};
</script>

<style scoped lang="scss">
.date-str {
  font-size: 12px;
}
.nnkjc-task-item {
  display: flex;
  justify-content: space-between;
}

.task-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  flex-basis: 44px;
  margin-right: 10px;
  border-radius: 50%;
  background-size: 44px 44px;
  background-repeat: no-repeat;

  &.message-1 {
    color: rgba(36, 162, 124, 1);
    background-color: rgba(36, 162, 124, 0.12);
  }

  &.message-2 {
    color: rgba(244, 81, 108, 1);
    background-color: rgba(244, 81, 108, 0.12);
  }

  &.message-3 {
    color: rgba(72, 105, 254, 1);
    background-color: rgba(72, 105, 254, 0.12);
  }

  &.message-4 {
    color: rgba(255, 193, 7, 1);
    background-color: rgba(255, 193, 7, 0.12);
  }
}

.task-body {
  text-align: left;
  flex-grow: 1;
  overflow: hidden;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-title {
  width: 200px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.task-title > .inner {
  font-size: 18px;
}

.task-time {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(138, 138, 142, 1);
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-content {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #666666;
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.task-tag {
  width: 50px;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  display: flex;
  justify-content: flex-end;

  & > .status-flag {
    padding: 4px 6px;
    border-radius: 10px;
  }

  & > .overdue-flag,
  & > .status-flag {
    background-color: rgba(244, 81, 108, 1);
    border-radius: 10px;
    margin-right: 4px;
    color: #ffffff;
  }

  & > .status-text {
    color: #ffffff;
    background-color: tomato;
  }
}
</style>