(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/patrol-detail/checked"],{"13a3":function(t,e,n){"use strict";(function(t){n("5d15");a(n("66fd"));var e=a(n("af5c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"3b1c":function(t,e,n){"use strict";n.r(e);var a=n("3f4c"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=u.a},"3f4c":function(t,e,n){"use strict";(function(t){function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"checked",data:function(){var t;return t={loading:!1,showBtn2:!0,background:{background:"#f2f2f8"}},n(t,"loading",!1),n(t,"empty",!1),n(t,"detail",{seqNo:"",status:"",createTime:"",updateTime:"",statusText:"",receiveStaffName:"",patrolStaffName:""}),n(t,"searchParams",{id:"",type:"",status:""}),n(t,"numList",[{name:"新建"},{name:"委派"},{name:"维修"},{name:"检定"}]),n(t,"current",3),t},computed:{PREMISS:function(){return this.$store.state.PREMISS}},onLoad:function(t){this.searchParams.id=t.taskId,this.searchParams.status=t.status,this.searchParams.type=t.type},onReady:function(){this.getDetail()},methods:{back:function(){t.navigateBack({delta:1})},getDetail:function(){var e=this;this.$u.post("/maint/getPatrolDetail",this.searchParams).then((function(n){if(n.data){var a=t.getStorageSync("user"),u=t.getStorageSync("premissObj");if(e.detail=n.data,e.detail){e.showBtn2=!(!u||!u[e.PREMISS.viewMaintRecord]);var i=[{"表单状态":e.detail.status,"表单 mstaffId":e.detail.maintStaffId,"用户 staffId":a.staffId,"表单类型":e.detail.type,"查看记录权限":u[e.PREMISS.viewMaintRecord]}];console.table(i)}}else e.empty=!0})).catch((function(t){}))},foMaintProcess:function(){var e=this.$u.queryParams({taskId:this.searchParams.id});t.navigateTo({url:"/pages/maint-process/index"+e})},forPatrolView:function(){var e=this.$u.queryParams({taskId:this.searchParams.id});t.navigateTo({url:"/pages/make-patrol-record/patrol-record-view"+e})}}};e.default=a}).call(this,n("543d")["default"])},af5c:function(t,e,n){"use strict";n.r(e);var a=n("c48a"),u=n("3b1c");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);var r,o=n("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"1a2dadde",null,!1,a["a"],r);e["default"]=c.exports},c48a:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"11b1"))},uSteps:function(){return n.e("uview-ui/components/u-steps/u-steps").then(n.bind(null,"73d2"))},nnkjcDetailGroup:function(){return n.e("components/nnkjc-detail-group/nnkjc-detail-group").then(n.bind(null,"138a"))},nnkjcDetailItem:function(){return n.e("components/nnkjc-detail-item/nnkjc-detail-item").then(n.bind(null,"560a"))},uButton:function(){return n.e("uview-ui/components/u-button/u-button").then(n.bind(null,"5231"))},uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"0f55"))}},u=function(){var t=this,e=t.$createElement;t._self._c},i=[]}},[["13a3","common/runtime","common/vendor"]]]);