(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/keepup-detail/finished"],{"0807":function(t,e,n){"use strict";(function(t){n("5d15");a(n("66fd"));var e=a(n("2db9"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"2db9":function(t,e,n){"use strict";n.r(e);var a=n("cec6"),i=n("ad82");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);var s,r=n("f0c5"),o=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"f49c59ea",null,!1,a["a"],s);e["default"]=o.exports},ad82:function(t,e,n){"use strict";n.r(e);var a=n("bdb2"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},bdb2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c8f6"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"finished",data:function(){var t;return t={loading:!1,showBtn1:!1,showBtn2:!0,background:{background:"#f2f2f8"}},u(t,"loading",!1),u(t,"empty",!1),u(t,"detail",{seqNo:"",createTime:"",updateTime:"",statusText:"",content:""}),u(t,"searchParams",{id:"",type:"",status:""}),u(t,"numList",[{name:"新建"},{name:"委派"},{name:"维修"},{name:"检定"}]),u(t,"current",2),t},computed:{PREMISS:function(){return this.$store.state.PREMISS},detailContent:function(){return this.detail.content?this.detail.content.split("\n"):[]}},onLoad:function(t){this.searchParams.id=t.taskId,this.searchParams.status=t.status,this.searchParams.type=t.type},onShow:function(){this.getDetail()},methods:{back:function(){t.navigateBack({delta:1})},getDetail:function(){var e=this;this.$u.post("/maint/getBaoyangTaskDetail",this.searchParams).then((function(n){if(n.data){var i=t.getStorageSync("user"),u=t.getStorageSync("premissObj");if(e.detail=n.data,e.detail){e.detail.cycleTypeText=a.default.CYCLE_MAP[e.detail.cycleType],e.showBtn1=!("50"!=e.searchParams.status||!u||!u[e.PREMISS.maintCheck]),e.showBtn2=!("50"!=e.searchParams.status||!u||!u[e.PREMISS.viewMaintRecord]);var s=[{"表单状态":e.detail.status,"表单 mstaffId":e.detail.maintStaffId,"用户 staffId":i.staffId,"表单类型":e.detail.type,"查看记录权限":u[e.PREMISS.viewMaintRecord]}];console.table(s)}}else e.empty=!0})).catch((function(t){}))},foMaintProcess:function(){var e=this.$u.queryParams({taskId:this.searchParams.id});t.navigateTo({url:"/pages/maint-process/index"+e})},forMaintView:function(){var e=this.$u.queryParams({taskId:this.searchParams.id});t.navigateTo({url:"/pages/make-keepup-record/keepup-record-view"+e})},checkPatrolRecord:function(){var e=this;this.$u.post("/maint/verifyTask",{type:this.searchParams.type,id:this.searchParams.id}).then((function(n){200===n.code&&(e.$refs.uToast.show({title:n.message,type:"success"}),setTimeout((function(){t.reLaunch({url:"/pages/home/index"})}),300))})).catch((function(t){})).finally((function(t){e.loading=!1,e.$store.commit("freshTaskFunc",!1)}))}}};e.default=s}).call(this,n("543d")["default"])},cec6:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"11b1"))},uSteps:function(){return n.e("uview-ui/components/u-steps/u-steps").then(n.bind(null,"73d2"))},nnkjcDetailGroup:function(){return n.e("components/nnkjc-detail-group/nnkjc-detail-group").then(n.bind(null,"138a"))},nnkjcDetailItem:function(){return n.e("components/nnkjc-detail-item/nnkjc-detail-item").then(n.bind(null,"560a"))},uButton:function(){return n.e("uview-ui/components/u-button/u-button").then(n.bind(null,"5231"))},uEmpty:function(){return n.e("uview-ui/components/u-empty/u-empty").then(n.bind(null,"2385"))},uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"0f55"))}},i=function(){var t=this,e=t.$createElement;t._self._c},u=[]}},[["0807","common/runtime","common/vendor"]]]);