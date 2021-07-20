<template>
  <view id="login" class="bg-white">
    <view class="login-inner">
      <view class="logo-area">
        <view class="com-logo">
          <!-- <image style="width: 45px; height: 64px;" :src="'../../static/image/login/logo@2x.png'" /> -->
        </view>
        <view class="title-area">
          <image style="width: 160px; height: 160px" src="./images/logo@3x.png" />
          <view class="main"> 海纳电商集团 </view>
          <view class="sub"> HAINA E-COMMERCE GROUP </view>
        </view>
      </view>
      <view class="margin-normal">
        <u-form :model="form" ref="uForm">
          <view class="form-radius-wrapper">
            <u-form-item leftIconSelf :border-bottom="false" label-width="auto">
              <view class="left-icon-self" slot="left-icon-self">
                <image style="width: 16px; height: 16px" src="./images/user@3x.png" />
              </view>
              <u-input
                :placeholderStyle="placeholderStyle"
                placeholder="用户名"
                confirm-type="确定"
                v-model="form.userName"
              />
            </u-form-item>
          </view>

          <view class="form-radius-wrapper">
            <u-form-item leftIconSelf :border-bottom="false" label-width="auto">
              <view class="left-icon-self" slot="left-icon-self">
                <image style="width: 16px; height: 16px" src="./images/password@3x.png" />
              </view>
              <u-input
                :placeholderStyle="placeholderStyle"
                type="password"
                placeholder="密码"
                confirm-type="确定"
                password-icon
                @confirm="saveFormLogin"
                v-model="form.password"
              />
            </u-form-item>
          </view>
        </u-form>
        <view class="react-wrapper" @click="doRemberFn">
          <view class="react" :class="{
            'selected': remember
          }">
          </view>
          <uni-text class="password-about"
              >记住密码</uni-text>
        </view>
        <view style="margin-top: 16px" class="radius-max">
          <u-button
            ripple
            class="login-btn"
            @click="saveFormLogin"
            :loading="loading"
            :disabled="disabled"
            >登录</u-button
          >
        </view>
        <view
          
          class="text-right"
          style="margin-top: 10px"
        >
          <view class="link-about" style="color: rgb(255, 255, 255,1)">
            <uni-text class="font-size-small"
              >忘记密码？</uni-text>
              
            <uni-text @click="gotoRegisterFn"  class="font-size-small"
              >没有账号？点击注册</uni-text>
            </view>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="company">
        <uni-text>山东海纳电子商务集团有限公司</uni-text>
      </view>
      <view class="company-eng">
        <uni-text>Shandong Haina e-commerce Group Co., Ltd</uni-text>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      remember: false,
      placeholderStyle: "color: rgba(186,186,186,1);",
      form: {
        userName: "",
        password: "",
      },
      loading: false,
      disabled: false,
      timer: null,
    };
  },
  watch: {
    "form.userName": function (nV, oV) {
      this.disabled = !Boolean(this.form.password && nV);
    },
    "form.password": function (nV, oV) {
      this.disabled = !Boolean(
        this.form.userName && nV.length >= 6 && nV.length <= 12
      );
    },
  },
  onLoad() {},
  onShow() {
    const token = uni.getStorageSync("token");
    if (token) {
      uni.reLaunch({
        url: "/pages/home/index",
      });
    }

    const userName = uni.getStorageSync("userName");
    const password = uni.getStorageSync("password");

    if(userName || password) {
      this.form.userName = userName;
      this.form.password = password;
      this.remember = true;
    } else {
      this.remember = false;
    }
    // var sand = uni.requireNativePlugin("sand-plugin-wifi");
    // sand.getWIFIInfo({}, (res) => {
    //   console.log(JSON.parse(JSON.stringify(res)));
    // });
  },
  methods: {
    doRemberFn() {
      this.remember = !this.remember;
    },
    gotoRegisterFn() {
      uni.navigateTo({
        url: "/pages/register/index",
      });
    },
    saveFormLogin() {
      this.loading = this.disabled = true;
      this.$u
        .post("/app/sys/login" + this.$u.queryParams(this.form), {})
        .then((res) => {
          this.loading = this.disabled = false;
          if(res.success) {
            uni.setStorageSync("token", res.token);
            uni.setStorageSync("userId", res.userId);
            uni.setStorageSync("userNameStr", res.userName);
            uni.setStorageSync("photo", res.photo);
            if(this.remember) {
              uni.setStorageSync("userName", this.form.userName);
              uni.setStorageSync("password", this.form.password);
            } else {
              uni.setStorageSync("userName", "");
              uni.setStorageSync("password", "");
            }
            uni.reLaunch({
              url: "/pages/home/index",
            });
          } else {
            uni.showToast({
              title: res.msg,
              duration: 2000,
              icon: "none",
            });
          }
        })
        .catch((err) => {
          this.loading = this.disabled = false;
        });
    },
  },
};
</script>
<style lang="scss">
#login {
  background-color: #378BFF;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  height: 100%;
}
.login-btn {
  background-color: #00C7FF!important;
  color: #ffffff!important;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16);
}
.login-inner {
  padding-top: 74px;
}
.left-icon-self {
  display: flex;
  justify-content: center;
  align-items: center;
}
.com-logo {
  display: flex;
  align-items: center;
  & > image {
    width: 45px;
    height: 64px;
    margin-right: 10px;
  }
}
open-data {
  display: block;
  width: 200upx;
  height: 200upx;
  overflow: hidden;
  border-radius: 100upx;
  margin: 0 auto;
}
.form-radius-wrapper {
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 10px;
}
.link-about {
  display: flex;
  justify-content: space-between;
}
.logo-area {
  display: flex;
  align-items: center;
  & > .title-area {
    text-align: center;
    margin: 0 auto;
    color: rgba(255, 255, 255, 1);
    & > .main {
      height: 44px;
      font-size: 30px;
      font-weight: bold;
    }
    & > .sub {
      height: 34px;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
.footer {
  width: 100%;
  text-align: center;
  color: #ffffff;
  position: fixed;
  bottom: 10px;
  & > .company {
    font-size: 10px;
  }
  & > .company-eng {
    font-size: 8px;
  }
}
.react-wrapper {
  margin-top: 10px;
  display: flex;
  align-items: center;
  & > .password-about {
    margin-left: 10px;
    color: #ffffff;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
}
.react {
  margin-left: 10px;
  width: 18px;  
  height: 18px;
  border-radius: 100%;
  border: 1px solid #ffffff;
  &.selected {
    background-image: url("./images/selected@3x.png");
    background-repeat: no-repeat;
    background-position: top left;
  }
}
</style>
