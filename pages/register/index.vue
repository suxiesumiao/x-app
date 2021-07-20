<template>
  <view id="register" class="bg-white">
    <u-navbar
      :borderBottom="false"
      backIconName="arrow-leftward"
      titleSize="34"
      title=""
    >
    </u-navbar>

    <view class="login-inner">
      <view class="margin-normal">
        <u-form label-width="200" :model="registerForm" ref="uForm">
          <!-- <u-form-item label="头像" prop="photo">
            <u-upload
              max-count="1"
              width="100"
              height="100"
              uploadText=""
              :action="action"
              customBtn
              @on-success="onSuccess"
              @on-remove="onRemove"
              :header="header"
              :form-data="{}"
              :file-list="fileList"
            >
              <view class="add-btn" slot="addBtn" v-if="!fileList.length">
                <u-icon name="camera-fill"></u-icon>
              </view>
            </u-upload>
          </u-form-item> -->

          <u-form-item required label="邀请码" prop="code">
            <u-input v-model="registerForm.code" placeholder="请输入邀请码" />
          </u-form-item>

          <!-- <u-form-item required label="姓名" prop="name">
            <u-input v-model="registerForm.name" placeholder="请输入姓名" />
          </u-form-item> -->

          <u-form-item required label="登录名" prop="loginName">
            <u-input
              v-model="registerForm.loginName"
              placeholder="请输入登录名"
            />
          </u-form-item>

          <u-form-item required label="密码" prop="password">
            <u-input
              v-model="registerForm.password"
              type="password"
              placeholder="请输入密码"
            />
          </u-form-item>

          <u-form-item label="确认密码">
            <u-input
              v-model="password2"
              type="password"
              placeholder="请再次输入密码"
            />
          </u-form-item>

          <u-form-item required label="验证码">
            <u-input
              v-model="identifyCodeSelf"
              placeholder="请输入右侧验证码"
            />
            <view @click="resetCodeFn">
              <sIdentify :identifyCode="identifyCode"></sIdentify>
            </view>
          </u-form-item>
          <!-- <u-form-item required label="手机号" prop="mobile">
            <u-input v-model="registerForm.mobile" placeholder="请输入手机号" />
          </u-form-item>

          <u-form-item label="性别" prop="sex">
            <u-input
              disabled
              :select-open="actionSheetShowSex"
              v-model="registerFormName.sex"
              placeholder="请选择性别"
              @click="actionSheetShowSex = true"
            ></u-input>
          </u-form-item>

          <u-form-item label="政治面貌" prop="politicalStatus">
            <u-input
              disabled
              :select-open="actionSheetShowPolitical"
              v-model="registerFormName.politicalStatus"
              placeholder="请选择政治面貌"
              @click="actionSheetShowPolitical = true"
            ></u-input>
          </u-form-item>

          <u-form-item label="户籍地址" prop="domicileAddress">
            <u-input
              v-model="registerForm.domicileAddress"
              placeholder="请输入户籍地址"
            />
          </u-form-item>

          <u-form-item label="出生日期" prop="birthDate">
            <u-input
              disabled
              v-model="registerFormName.birthDate"
              placeholder="请选择出生日期"
              @click="showTimePicker = true"
            ></u-input>
          </u-form-item>

          <u-form-item label="学校" prop="school">
            <u-input v-model="registerForm.school" placeholder="请输入学校" />
          </u-form-item>

          <u-form-item label="学历" prop="education">
            <u-input
              disabled
              :select-open="actionSheetShowEducation"
              v-model="registerFormName.education"
              placeholder="请选择学历"
              @click="actionSheetShowEducation = true"
            ></u-input>
          </u-form-item>

          <u-form-item label="紧急联系人电话" prop="urgentPhone">
            <u-input
              v-model="registerForm.urgentPhone"
              placeholder="请输入紧急联系人电话"
            />
          </u-form-item>

          <u-form-item label="备注" prop="remarks">
            <u-input
              v-model="registerForm.remarks"
              placeholder="请输入备注信息"
            />
          </u-form-item>

          <u-form-item label="邮箱" prop="email">
            <u-input v-model="registerForm.email" placeholder="请输入邮箱" />
          </u-form-item>

          <u-form-item label="工龄" prop="workAge">
            <u-input
              type="number"
              v-model="registerForm.workAge"
              placeholder="请输入工龄"
            />
          </u-form-item>

          <u-form-item label="籍贯" prop="domicile">
            <u-input v-model="registerForm.domicile" placeholder="请输入籍贯" />
          </u-form-item>

          <u-form-item label="婚姻状况" prop="maritalStatus">
            <u-input
              disabled
              :select-open="actionSheetShowMari"
              v-model="registerFormName.maritalStatus"
              placeholder="请选择婚姻状况"
              @click="actionSheetShowMari = true"
            ></u-input>
          </u-form-item>

          <u-form-item label="现住址" prop="nowAddress">
            <u-input
              v-model="registerForm.nowAddress"
              placeholder="请输入现住址"
            />
          </u-form-item>

          <u-form-item label="证件号码" prop="cardNum">
            <u-input
              :type="'idcard'"
              v-model="registerForm.cardNum"
              placeholder="请输入证件号码"
            />
          </u-form-item>

          <u-form-item label="专业" prop="profession">
            <u-input
              v-model="registerForm.profession"
              placeholder="请输入专业"
            />
          </u-form-item>

          <u-form-item label="紧急联系人" prop="urgentPeople">
            <u-input
              v-model="registerForm.urgentPeople"
              placeholder="请输入紧急联系人"
            />
          </u-form-item>

          <u-form-item label="病史" prop="medicalHistory">
            <u-input
              v-model="registerForm.medicalHistory"
              placeholder="请输入病史"
            />
          </u-form-item> -->
        </u-form>
        <view style="margin: 30px 0" class="radius-normal">
          <u-button
            ripple
            type="success"
            @click="saveFormRegister"
            :loading="loading"
            >注册</u-button
          >

          <!-- <u-action-sheet
            :list="actionSheetListSex"
            v-model="actionSheetShowSex"
            @click="actionSheetCallbackSex"
          ></u-action-sheet>
          <u-action-sheet
            :list="actionSheetListPolitical"
            v-model="actionSheetShowPolitical"
            @click="actionSheetCallbackPolitical"
          ></u-action-sheet>
          <u-action-sheet
            :list="actionSheetListEducation"
            v-model="actionSheetShowEducation"
            @click="actionSheetCallbackEducation"
          ></u-action-sheet>
          <u-action-sheet
            :list="actionSheetListMari"
            v-model="actionSheetShowMari"
            @click="actionSheetCallbackMari"
          ></u-action-sheet>

          <u-picker
            :mode="'time'"
            :defaultTime="'2000-01-01 00:00:00'"
            v-model="showTimePicker"
            :params="params"
            end-year="2030"
            @confirm="confirmTime"
            :range-key="'name'"
          ></u-picker> -->
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import CONFIG from "../../config";
import sIdentify from "./sidentify";
export default {
  components: {
    sIdentify,
  },
  data() {
    return {
      identifyCodeSelf: "",
      identifyCodes: "1234567890abcdefghijklmnopqrstuvwxyz", //验证码的数字库
      identifyCode: "",
      dictMap: {},
      fileList: [],
      action: CONFIG.baseUrl + "sys/file/webupload/upload?uploadPath=photo",
      header: {
        token: uni.getStorageSync("token"),
      },
      showTimePicker: false,

      actionSheetShowSex: false,
      actionSheetShowPolitical: false,
      actionSheetShowEducation: false,
      actionSheetShowMari: false,

      actionSheetListSex: [],
      actionSheetListPolitical: [],
      actionSheetListEducation: [],
      actionSheetListMari: [],
      placeholderStyle: "color: rgba(186,186,186,1);",
      form: {
        userName: "",
        password: "",
      },
      password2: "",
      identifyCode: "",
      rules: {
        code: [
          {
            required: true,
            message: "请输入邀请码",
            trigger: ["change"],
          },
        ],
        // name: [
        //   {
        //     required: true,
        //     message: "请输入姓名",
        //     trigger: ["change"],
        //   },
        // ],
        loginName: [
          {
            required: true,
            message: "请输入登录名",
            trigger: ["change"],
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["change"],
          },
        ],
        // mobile: [
        //   {
        //     required: true,
        //     message: "请输入手机号",
        //     trigger: ["change"],
        //   },
        // ],
      },
      registerFormName: {
        sex: "",
        politicalStatus: "",
        education: "",
        maritalStatus: "",
      },
      registerForm: {
        //photo: "", //  头像
        code: "", // 邀请码
        //name: "", // 姓名
        loginName: "", // 登录名
        password: "", //  密码
        mobile: "", //  手机号
        // sex: "", //  性别
        // politicalStatus: "", //  政治面貌
        // domicileAddress: "", //  户籍地址
        // birthDate: "", //  生日
        // school: "", //  学校
        // education: "", //  学历
        // urgentPhone: "", //  紧急联系人电话
        // remarks: "", //  备注
        // email: "", //  邮箱
        // workAge: "", //  工龄
        // domicile: "", //  籍贯
        // maritalStatus: "", //  婚姻
        // nowAddress: "", //  现住址
        // cardNum: "", //  证件号码
        // profession: "", //  专业
        // urgentPeople: "", //  紧急联系人
        // medicalHistory: "", //  病史
      },
      loading: false,
      timer: null,
      params: {
        year: true,
        month: true,
        day: true,
        hour: false,
        minute: false,
        second: false,
      },
    };
  },
  computed: {
    dictMapPart() {
      return this.$store.state.dictMapPart;
    },
  },
  watch: {},
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
  onLoad() {
    this.getSelectData();
  },
  onShow() {
    this.refreshCode(); //初始化验证码

    const token = uni.getStorageSync("token");
    if (token) {
      uni.reLaunch({
        url: "/pages/home/index",
      });
    }
  },
  methods: {
    resetCodeFn() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    onSuccess(data, index, lists, name) {
      if (data && data.url) {
        this.registerForm.photo = data.url;
      }
    },
    onRemove(index, lists, name) {
      this.registerForm.photo = "";
    },
    confirmTime(e) {
      if (e) {
        const date_ = `${e.year}-${e.month}-${e.day}`;
        this.registerForm.birthDate = date_ + " 00:00:00";
        this.registerFormName.birthDate = date_;
      }
    },
    getSelectData() {
      this.actionSheetListSex = this.dictMapPart["sex"];
      this.actionSheetListPolitical = this.dictMapPart["politicalStatus"];
      this.actionSheetListEducation = this.dictMapPart["education"];
      this.actionSheetListMari = this.dictMapPart["maritalStatus"];
    },
    actionSheetCallbackSex(index) {
      uni.hideKeyboard();
      this.registerForm.sex = this.actionSheetListSex[index].value;
      this.registerFormName.sex = this.actionSheetListSex[index].text;
    },
    actionSheetCallbackPolitical(index) {
      uni.hideKeyboard();
      this.registerForm.politicalStatus = this.actionSheetListPolitical[
        index
      ].value;
      this.registerFormName.politicalStatus = this.actionSheetListPolitical[
        index
      ].text;
    },
    actionSheetCallbackEducation(index) {
      uni.hideKeyboard();
      this.registerForm.education = this.actionSheetListEducation[index].value;
      this.registerFormName.education = this.actionSheetListEducation[
        index
      ].text;
    },
    actionSheetCallbackMari(index) {
      uni.hideKeyboard();
      this.registerForm.maritalStatus = this.actionSheetListMari[index].value;
      this.registerFormName.maritalStatus = this.actionSheetListMari[
        index
      ].text;
    },
    saveFormRegister() {
      const this_ = this;
      if (this.identifyCode !== this.identifyCodeSelf) {
        uni.showToast({
          title: "请输入正确的验证码",
          duration: 2000,
          icon: "none",
        });
        this.resetCodeFn();
        return false;
      }

      if (this.registerForm.password && this.registerForm.password.length < 6) {
        uni.showToast({
          title: "密码不得少于 6 位",
          duration: 2000,
          icon: "none",
        });
        return false;
      }

      const reg0 = /((?=.*[0-9])(?=.*[a-zA-Z]))^[^\s]{3,12}$/g;
      if (!reg0.test(this.registerForm.loginName)) {
        uni.showToast({
          title: "登录名必须为 3 - 12 位数字以及字母的组合",
          duration: 2000,
          icon: "none",
        });
        return false;
      }

      // const reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      // if (this.registerForm.cardNum && !reg1.test(this.registerForm.cardNum)) {
      //   uni.showToast({
      //     title: "身份证输入不合法",
      //     duration: 2000,
      //     icon: "none",
      //   });
      //   return false;
      // }

      // const reg2 = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
      // if (this.registerForm.email && !reg2.test(this.registerForm.email)) {
      //   uni.showToast({
      //     title: "邮箱输入不合法",
      //     duration: 2000,
      //     icon: "none",
      //   });
      //   return false;
      // }

      if (this.password2 !== this.registerForm.password) {
        uni.showToast({
          title: "两次输入密码不一致",
          duration: 2000,
          icon: "none",
        });
        return false;
      }
      this.$refs.uForm.validate((valid) => {
        this.loading = true;
        if (valid) {
          uni.request({
            url: CONFIG.baseUrl + "/hayner/hr/roster/registerSave", // 请求接口
            data: this_.registerForm, // 发送参数
            method: "POST", // 参数类型
            header: {
              "Content-Type": "application/x-www-form-urlencoded",
            }, // 请求头
            dataType: "json", // 返回数据格式
            success(response) {
              console.log(response.data)
              uni.showToast({
                title: response.data.msg,
                duration: 1000,
                icon: "none",
              });
              setTimeout(() => {
                if (response.data.success) {
                  uni.navigateTo({
                    url: "/pages/login/index",
                  });
                }
              }, 1000);
            },
            fail(error) {},
            complete(com) {
              this_.loading = false;
            },
          });
        } else {
          console.error("验证失败");
          this.loading = false;
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.u-navbar-inner {
  background-color: initial;
}
#register {
  /*background-image: url("https://mp-1257924899.cos.ap-nanjing.myqcloud.com/nndt/login-main.png");*/
  // background-image: url("../../static/image/login/backgroup@2x.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  height: 100%;
}
.login-inner {
  padding-bottom: 10px;
  background-color: #ffffff;
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
  background-color: #f5f5f8;
  overflow: hidden;
  border-radius: 16px;
  margin-top: 10px;
  padding: 0 10px;
}
.logo-area {
  display: flex;
  align-items: center;
  & > .title-area {
    color: rgba(42, 42, 47, 1);
    & > .main {
      height: 44px;
      font-size: 30px;
      font-weight: 800;
    }
    & > .sub {
      height: 34px;
      font-size: 23px;
      font-weight: 400;
    }
  }
}
</style>
