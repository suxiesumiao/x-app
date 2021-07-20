<template>
  <view id="home" class="padding-bottom-normal">
    <view class="home-header margin-normal">
      <view class="header-avatar bg-white">
        <u-image
            style="width: 46px; height: 46px"
            mode="widthFix"
            :src="headerAvatar" />
      </view>
      <view class="header-content">
        <view class="title">
          <text>欢迎，</text>
          <text style="font-weight: bolder;">{{ userNameStr }}</text>
        </view>
        <view class="sub">
          <!-- <text>{{ userData.comName }}</text> -->
        </view>
      </view>
    </view>
    <view class="menus-wrapper">
      <view
        class="menus margin-normal padding-normal radius-normal"
        v-show="menuLists.length"
      >
        <view
          class="item"
          v-for="menu in menuLists"
          @click="forMenuPage(menu)"
          :key="menu.id"
        >
          <view class="item-icon">
            <image style="width: 23px; height: 23px" :src="menu.appIcon" />
          </view>
          <view class="item-name">
            <text>{{ menu.name }}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="task margin-normal">
      <common-header :title="taskTitle">
      </common-header>
      <view
        class="task-lists radius-normal bg-white task-body"
        v-if="!empty && taskLists.length"
      >
        <nnkjc-task-item
          v-for="(task, index) in taskLists"
          :taskTitle="task.title"
          :taskContent="
            '[' + dictMapPart.messageType[task.type] + ']' + task.content
          "
          :iconClass="task.type"
          :taskType="task.type"
          :statusText="task.readFlag"
          :overdueFlag="task.readFlag"
          :statusFlag="task.readFlag"
          :createDate="task.createDateStr"
          @single-click="forDetailPage(task)"
          :key="index"
        >
        </nnkjc-task-item>
      </view>
    </view>
    <u-toast ref="uToast" />
    <u-empty :show="empty" text="暂无待办任务" mode="list"></u-empty>
  </view>
</template>

<script>
import CONFIG from "../../config";
export default {
  data() {
    return {
      userNameStr: "",
      total: 10,
      typeDefaultTitle: "全部类型",
      typeDefaultV: [0],
      selectingType: false, //  是否按照状态选择
      typeList: [
        {
          value: "",
          label: "全部类型",
        },
        {
          value: "weixiu",
          label: "维修单",
        },
        {
          value: "xuncha",
          label: "巡查单",
        },
        {
          value: "weihu",
          label: "保养单",
        },
      ],
      statusTagMap: CONFIG.statusTagMap,
      empty: false,
      taskTitle: "消息",
      staticIcon: "../../static/image/home/makeorder.png",
      taskLists: [],
      searchParams: {
        pageNo: 1,
        pageSize: 10,
        type: "",
      },
      menuListsStatic: [
        {
          id: "1",
          name: " 考勤打卡",
          href: "",
          func: "ring",
          appIcon: "../../static/image/home/ring.png",
        },
      ],
      userData: {
        staffName: "",
        comName: "",
      },
      headerAvatar: "../../static/image/home/head.png",
      menuLists: [],
    };
  },
  computed: {
    dictMapPart() {
      return this.$store.state.dictMapPart;
    },
  },
  onLoad(options) {
    this.userNameStr = uni.getStorageSync("userNameStr");
    this.headerAvatar = CONFIG.baseUrl + uni.getStorageSync("photo");

    this.getAPPMenuList();
    this.taskLists = [];
    this.searchParams.pageNo = 0;
    this.getTaskListForAll();
  },
  onShow() {

  },
  onReady() {},
  onHide() {},
  onUnload() {},
  onResize() {},
  onPageScroll() {},
  onPullDownRefresh() {
    this.searchParams.pageSize = 10;
    this.searchParams.pageNo = 1;
    this.taskLists = [];
    this.getTaskListForAll();
    uni.stopPullDownRefresh();
  },
  onReachBottom() {
    //列表是分页
    this.searchParams.pageNo++;
    this.getTaskListForAll();
  },
  methods: {
    typeCancel(v) {
      this.$refs["type"].selecting = false;
    },
    statusEmit(v) {
      this.selectingType = v;
    },
    //  单个详情页面
    forDetailPage(task) {
      if (!task.id) {
        return;
      }
      this.$u
        .get("notify/oaNotify/viewNotify", {
          id: task.id,
        })
        .then((res) => {
          //  已读取
          task.readFlag = '1';
        })
        .catch((err) => {
          console.log(err);
        });

      if (task.content) {
        const params = this.$u.queryParams({
          content: task.content,
          type: task.type,
          title: task.title,
          createDateStr: task.createDateStr,
        });
        uni.navigateTo({
          url: "/pages/home/message/index" + params,
        });
      }
    },
    //  任务列表
    getTaskListForAll() {
      if (this.taskLists.length === this.total && this.total) {
        this.empty = this.taskLists.length === 0;
        return;
      }
      if (this.searchParams.pageNo === 1) {
        this.taskLists = [];
      }
      this.$u
        .get("notify/oaNotify/getNotifyList", this.searchParams)
        .then((res) => {
          if (this.taskLists.length <= this.total) {
            for (let i = 0; i < res.page.list.length; i++) {}
            this.taskLists.push(...res.page.list);

            this.total = res.page.count;
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //  menu 页面跳转
    forMenuPage(menu) {
      if (menu.func) {
        switch (menu.func) {
          case "ring": //  打卡
            uni.navigateTo({
              url: "./clock-in/index",
            });
            break;
        }
      }
    },
    getUserData() {},
    getAPPMenuList() {
      this.menuLists = this.menuListsStatic;
    },
  },
};
</script>

<style scoped lang="scss">
$header-width: 46px;
#home {
  padding-top: 70px;
}
.home-header {
  display: flex;
  justify-content: space-between;
  > .header-avatar {
    width: $header-width;
    height: $header-width;
    min-width: $header-width;
    min-height: $header-width;
    flex-basis: $header-width;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    > img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      will-change: transform;
    }
  }

  > .header-content {
    flex-grow: 1;
    padding-left: 12px;
    text-align: left;
    > .title {
      font-size: 20px;
    }
    > .sub {
      color: #8a8a8e;
      font-size: 12px;
    }
  }
}

.menus-wrapper {
}

.menus {
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.item {
  width: 25%;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;

  &:nth-of-type(4n + 1) > .item-icon {
    background-color: rgba(72, 105, 254, 0.12);
  }

  &:nth-of-type(4n + 2) > .item-icon {
    background-color: rgba(101, 32, 255, 0.12);
  }

  &:nth-of-type(4n + 3) > .item-icon {
    background-color: rgba(36, 162, 124, 0.12);
  }

  &:nth-of-type(4n) > .item-icon {
    background-color: rgba(244, 81, 108, 0.12);
  }
}

.item-icon {
  margin: 0 auto;
  width: 46px;
  height: 46px;
  box-shadow: 0 0 0 8px #ffffff, 0 0 0 9px #f1f1f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 22px;
    height: 20px;
  }
}

.item-icon image {
  width: 46px;
  height: 46px;
}

.item-name {
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(0, 0, 0, 1);
  opacity: 1;
  margin-top: 20px;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-header .header {
  height: 26px;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  color: rgba(51, 51, 51, 1);
}

.task-opera-icon {
  height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.task-lists {
  margin-top: 8px;
}

.task-list-icon image {
  width: 44px;
  height: 44px;
}

.task-sub text {
  line-height: 25px;
}

.task-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.task-tag image {
  height: 20px;
  width: 40px;
}

.task-tag img {
  height: 20px;
}
</style>

