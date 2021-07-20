<template>
  <view class="mod-password">
    <u-navbar
        isFixed
        :borderBottom="false"
        backIconName="arrow-leftward"
        titleSize="34"
        :background="background"
        title="密码修改"></u-navbar>
    <view class="form-wrapper bg-white margin-normal radius-normal">
      <u-form :model="form" ref="uForm" label-width="160">
        <u-form-item label="原密码" prop="oldPassword" :required="true">
          <u-input type="password" placeholder="输入原密码"
                   v-model="form.oldPassword"/>
        </u-form-item>

        <u-form-item label="新密码" prop="newPassword" :required="true">
          <u-input type="password" placeholder="输入新密码"
                   v-model="form.newPassword"/>
        </u-form-item>

        <u-form-item label="确认密码" prop="newPasswordSec" :required="true" :gap="false" :borderBottom="false">
          <u-input type="password" placeholder="请再次输入新密码"
                   v-model="form.newPasswordSec"/>
        </u-form-item>
      </u-form>
    </view>
    <view class="save-tasks-inner-wrapper margin-normal radius-normal">
      <u-button ripple type="success" :loading="loading" @click="saveTasks">提 交</u-button>
    </view>

    <u-toast ref="uToast"/>

    <u-modal v-model="showModal" @confirm="confirm" show-cancel-button content="确认提交？"></u-modal>
  </view>
</template>

<script>

  export default {
    name: "save-tasks",
    data() {
      return {
        background: {
          'background': '#f2f2f8'
        },
        showModal: false,
        loading: false,
        form: {
          userName: "",

          oldPassword: "",

          newPassword: "",

          newPasswordSec: ""
        },
        rules: {
          oldPassword: [
            {
              required: true,
              message: '请填写原密码',
              trigger: 'change'
            }
          ],
          newPassword: [
            {
              required: true,
              min: 6,
              message: '请填写新密码',
              trigger: 'change'
            },
            {
              pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
              message: '需同时含有字母和数字，长度在6-12之间',
              trigger: ['change','blur'],
            },
            {
              validator: (rule, value, callback) => {
                return value !== this.form.oldPassword;
              },
              message: '新密码不能与原密码相同',
              trigger: ['change','blur'],
            }
          ],
          newPasswordSec: [
            {
              required: true,
              min: 6,
              message: '请填写确认密码',
              trigger: 'change'
            },
            {
              validator: (rule, value, callback) => {
                return value === this.form.newPassword;
              },
              message: '两次输入的新密码不相等',
              trigger: ['change','blur'],
            }
          ]
        }
      }
    },
    onReady() {
      this.$refs.uForm.setRules(this.rules);
      const user = uni.getStorageSync("user");
      if(user) {
        this.form.user = user.loginId;
      }
    },
    methods: {
      confirm() {
        const userData = uni.getStorageSync("user");
        if(!this.form.userName) {
          return;
        }
        this.form.userName = userData.staffName;
        this.loading = true;
        const { userName, oldPassword, newPassword } = this.form;
        this.$u
            .post("/sys/changePwd", { userName, oldPassword, newPassword })
            .then(res => {
              this.$refs.uToast.show({
                title: res.message,
                type: res.code === 200 ? "success" : "warning"
              });
              if(res.code === 200) {
                this.$store.commit('logout');
              }
            })
            .catch(err => {
            }).finally(_ => {
          this.loading = false;
        })
      },
      saveTasks() {
        if (this.loading) {
          return
        }
        this.$refs.uForm.validate(valid => {
          this.showModal = valid;
        });
      },
    }
  }
</script>

<style scoped lang="scss">
  uni-page-body {
    height: 100%;
  }
</style>