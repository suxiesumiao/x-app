<template>
  <view class="user-center">
    <u-navbar
        isFixed
        :borderBottom="false"
        :customBack="back"
        backIconName="''"
        titleSize="34"
        :background="background"
        title="个人中心"></u-navbar>
    <view class="margin-normal padding-normal bg-white radius-normal">
      <view class="user-desc">
        <view class="user-header">
          <u-image
              style="width: 66px; height: 66px"
              mode="widthFix"
              :src="headerAvatar" />
        </view>
        <view class="name">
          <text style="font-weight: bolder;">{{ userData.staffName }}</text>
        </view>
        <view class="sub">
          <text>{{ userData.comName }}</text>
        </view>
      </view>
<!-- 
      <view class="items-wrapper">
        <view class="items-inner">
          <view class="item-value">{{ allTaskCount.xunchaCounts }}</view>
          <view class="item-name">巡查</view>
        </view>

        <view class="items-inner">
          <view class="item-value">{{ allTaskCount.weihuCounts }}</view>
          <view class="item-name">保养</view>
        </view>

        <view class="items-inner">
          <view class="item-value">{{ allTaskCount.weixiuCounts }}</view>
          <view class="item-name">维修</view>
        </view>
      </view> -->
    </view>

    <view class="margin-normal radius-normal">
      <view class="list-wrap">
        <u-cell-group :border="false" title-bg-color="rgb(243, 244, 246)">
          <!-- <u-cell-item :borderTop="false" :titleStyle="{fontWeight: 500}" :arrow="false" :index="0" @click="next">
            <view slot="title">
              <u-icon name="lock" color="#F4516C" size="36"></u-icon>
              <text class="list-title">密码修改</text>
            </view>
            <view slot="right-icon">
              <u-icon name="arrow-right" color="#8a8a8e" size="18"></u-icon>
            </view>
          </u-cell-item> -->

          <u-cell-item :borderBottom="false" :titleStyle="{fontWeight: 500}" :arrow="false" :value="'V1.0.0'" :index="1" @click="next">
            <view slot="title">
              <u-icon name="info" color="#4869FE" size="36"></u-icon>
              <text class="list-title">版本信息</text>
            </view>
            <view slot="right-icon">
              <u-icon name="arrow-right" color="#8a8a8e" size="18"></u-icon>
            </view>
          </u-cell-item>
        </u-cell-group>
      </view>
    </view>

    <view class="save-tasks-inner-wrapper margin-normal radius-normal">
      <u-button ripple :loading="loading" plain :custom-style="customBtn" @click="logout">
        <text style="color: #ff3534;">登出</text>
      </u-button>
    </view>

    <u-toast ref="uToast"/>

    <u-modal v-model="showModal" @confirm="confirm" show-cancel-button content="确认登出？"></u-modal>
  </view>
</template>

<script>
  import CONFIG from "../../config"

  export default {
    name: "user",
    data() {
      return {
        loading: false,
        customBtn: {
          'background': '#ffffff'
        },
        showModal: false,
        userData: {
          staffName: "",
          comName: ""
        },
        staffDetail: {},
        headerAvatar: "../../static/image/home/head.png",
        background: {
          'background': '#f2f2f8'
        }
      }
    },
    computed: {
      allTaskCount() {
        return this.$store.state.allTaskCount;
      }
    },
    onLoad(options) {
      // this.getUserData();
      // this.$store.commit('getTaskCounts')

      this.headerAvatar = CONFIG.baseUrl + uni.getStorageSync("photo");
    },
    onShow() {
      // this.getStaffDetail();
    },
    methods: {
      next(v) {
        switch(v) {
          case 0:
            uni.navigateTo({
              url: "./mod-password/index"
            });
            break;
          case 1:
            uni.navigateTo({
              url: "./version/index"
            });
            break;
        }
      },
      confirm() {
        this.$u
        .get("/app/sys/logout?t" + (new Date()).getTime().toString(), {})
        .then(res => {
          this.$store.commit('logout');
        })
        .catch(err => {
        });
      },
      logout() {
        this.showModal = true;
      },
      getStaffDetail() {
        const userData = uni.getStorageSync("user");
        const staffDetail = uni.getStorageSync("staffDetail");
        if(staffDetail) {
          this.staffDetail = staffDetail;
        } else {
          this.$u.post("sys/staff/getStaffDetail", {
            id: userData.staffId
          }).then(res => {
            // uni.setStorageSync("staffDetail", res);
          });
        }
      },
      getUserData() {
        const userData = uni.getStorageSync("user");
        if (userData) {
          this.userData = userData;
          // this.headerAvatar = CONFIG.baseUrl + this.userData.photo;
        }
      },
      back() {
      }
    }
  }
</script>

<style scoped lang="scss">
  $header-width: 66px;
  .user-center {
    padding-bottom: 20px;
  }
  .user-desc {
    text-align: center;
    & > .user-header {
      width: $header-width;
      height: $header-width;
      min-width: $header-width;
      min-height: $header-width;
      flex-basis: $header-width;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #2358a2;
      & img {
        border-radius: 50%;
        width: $header-width;
        height: 100%;
        will-change: transform;
      }
    }
    & > .name {
      margin-top: 10px;
      & > text {
        font-size:20px;
        font-weight:bold;
        line-height:29px;
        color:rgba(42,42,47,1);
      }
    }
    & > .sub {
      height:20px;
      font-size:14px;
      font-weight:400;
      line-height:20px;
      color:rgba(138,138,142,1);
    }
  }

  .items-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    & > .items-inner {
      flex-grow: 1;
      text-align: center;
      & > .item-value {
        font-size:20px;
        font-weight:500;
        line-height:29px;
      }
      & > .item-name {
        font-size:12px;
        font-weight:400;
        line-height:17px;
        color:rgba(138,138,142,1);
      }
    }
  }

  .list-title {
    margin-left: 10px;
    font-size:14px;
    font-weight:400;
    line-height:26px;
  }



</style>
