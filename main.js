import Vue from 'vue'
import App from './App'
import uView from "uview-ui";//  ui
import common from './libs/common'
import * as filters from './libs/filters' // 全局过滤器
import './libs/dateformate'
import store from './store'
Vue.use(uView);

// 网络请求
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor)

Vue.prototype.$common = new common();
Vue.config.productionTip = false;

/**
 *  注册全局过滤器
 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
App.mpType = 'app';

const app = new Vue({
    ...App,
  store
})
app.$mount()
