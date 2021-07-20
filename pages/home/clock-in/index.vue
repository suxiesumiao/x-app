<template>
  <view class="records">
    <u-navbar
      isFixed
      :borderBottom="false"
      :customBack="back"
      backIconName="arrow-leftward"
      titleSize="34"
      :background="background"
      title="考勤打卡"
    ></u-navbar>
    <view
      :class="[
        currentHour < centerTime && !clockIn? 'before-work': '',
        currentHour < centerTime && clockIn? 'disabled': '',
        currentHour > centerTime? 'after-work': '',
      ]"
      class="clock-in-circle" @click="getClockStatus">
      <view class="title">
        <text v-if="!clockIn">{{ currentHour > centerTime? "下班打卡": "上班打卡" }}</text>
        <text v-if="clockIn">已上班打卡</text>
      </view>
      <view class="time">{{ dateStr }}</view>
    </view>
    <!-- <view>{{ temp }}</view> -->
    <view class="wifi-wrapper">连接 WIFI 名称: {{ form.wifiMac }}</view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
const sand = uni.requireNativePlugin("sand-plugin-wifi");

console.log(sand, 'sand')

export default {
  name: "clock-in",
  data() {
    return {
      clockIn: false,//  是否已经打了上班卡
      currentHour: 12,
      centerTime: 12,
      empty: false,
      background: {
        background: "#f2f2f8",
      },
      timer: null,
      dateStr: "",
      temp: "",
      form: {
        userId: "",
        wifiMac: "",
        checkinStatus: "0",
      },
    };
  },
  onLoad(options) {
    const userId = uni.getStorageSync("userId");
    this.form.userId = userId;
    this.init();

    this.setCurrDate();

    if(this.currentHour < this.centerTime) {
      this.$u
        .post("/hayner/hr/roster/getClockStatus")
        .then((res) => {
          console.log(res, "res");
          if(res.success) {
            if(res.msg === "1") {
              this.clockIn = true;
            }
          }
        })
        .catch((err) => {});
    }
  },
  onReady() {},
  onUnload() {
    this.timer && clearTimeout(this.timer);
  },
  methods: {
    setCurrDate() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      this.currentHour = hours + minutes / 60 + seconds / 60 / 60;
      this.dateStr = date.dateFormat("hh:mm:ss");
    },
    getClockStatus() {
      this.$u
        .post("/hayner/hr/roster/getClockStatus")
        .then((res) => {
          console.log(res, "res");
          if(res.success) {
            if(res.msg === "1" && this.currentHour < this.centerTime) {
              uni.showToast({
                title: "您已经上班打过卡",
                duration: 2000,
                icon: "none",
              });
              this.clockIn = true;
            } else {
              this.clockIn = false;
              this.doClock();
            }
          }
        })
        .catch((err) => {});
    },
    doClock() {
      if (!this.form.wifiMac) {
        uni.showToast({
          title: "未能获取到 WIFI 信息, 请检查 app 的定位权限",
          duration: 2000,
          icon: "none",
        });
        return false;
      }
      this.form.checkinStatus = this.currentHour > this.centerTime? "1": "0"
      this.$u
        .post("/hayner/hr/roster/clock", this.form)
        .then((res) => {
          console.log(res.msg, "res");
          uni.showToast({
            title: res.msg,
            duration: 1000,
            icon: "none",
            complete() {
              setTimeout(() => {
                if (res.success) {
                  uni.navigateBack();
                }
              }, 1000)
            }
          });
        })
        .catch((err) => {});
    },
    init() {
      this.getTime();
      this.getWIFIInfo();

      this.timer = setTimeout(() => {
        this.getTime();
        this.getWIFIInfo();
        this.init();
      }, 1000);
    },
    getWIFIInfo() {
      sand &&
        sand.getWIFIInfo({}, (res) => {
          this.temp = JSON.stringify(res);
          if (res.status === "2500") {
            this.form.wifiMac = res.ssid;
          } else {
            this.form.wifiMac = '未检测到';
          }
        });
    },
    getTime() {
      this.setCurrDate();
    },
    reachBottom() {},
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.wifi-wrapper {
  padding: 10px;
  margin: 0 10px;
  background-color: #e6e6e6;
  border-radius: 10px;
  color: #333;
}
.clock-in-circle {
  margin: 300upx auto;
  width: 240upx;
  height: 240upx;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  &.before-work {
    background-color: #4cab50;
    box-shadow: 0 2px 10px #8bc34a;
  }
  &.after-work {
    background-color: #03a9f4;
    box-shadow: 0 2px 10px #5fc9f9;
  }
  &.disabled {
    background-color: #999999;
    box-shadow: 0 2px 10px #aaaaaa;
  }
  & > .title {
    font-size: larger;
  }
  & > .time {
    opacity: 0.5;
  }
}
</style>