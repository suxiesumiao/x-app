import Vue from 'vue'
import Vuex from 'vuex'

import dictMapPart from './dict'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    appVersion: "1",
    appSubVersion: "1.0.0",
    freshTask: false,
    allTaskCount: {
      weixiuCounts: 0,
      weihuCounts: 0,
      xunchaCounts: 0
    },
    PREMISS: {
      createForm: "A010001",  //  建单
      modifyreason: "A010002",  //  修改故障原因
      delitem: "A010003",  //  取消工单
      sendForm: "A020000",  // 派单
      delegate: "A020001",  // 委派
      reDelegate: "A020002",  // 重新委派
      maintCheck: "A020003",  // 维修检定
      reveive: "A030001",  //  接单
      maintRecord: "A030003", //  查看维修记录
      refuse: "A030002",  // 拒单
      saveMaintRecord: "A030005",  // 填写维修记录
      trans: "A030007",  // 转单
      viewMaintRecord: "A030008",  // 维修记录查询
    },
    dictMapPart: dictMapPart
  },
  mutations: {
    freshTaskFunc(state, payload) {
      state.freshTask = payload;
    },
    logout() {
      try {
        uni.removeStorageSync('token')
        uni.removeStorageSync('userId')
        uni.removeStorageSync('userNameStr')
        uni.removeStorageSync('photo')

        uni.reLaunch({
          url: "/pages/login/index"
        })
      } catch (e) {
        // error
      }
    },
    getTaskCounts(state) {
      Vue.prototype.$u
          .post("myTask/getTaskCounts", {}).then(res => {
        if (res.code === 200) {
          if(res.data && Object.keys(res.data).length) {
            state.allTaskCount = res.data;
          }
        }
      }).catch(e => {
      }).finally(_ => {
      })
    }
  },
  actions: {}
})
export default store