(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-make-keepup-record-keepup-record-view"],{"0d02":function(t,e,n){"use strict";n.r(e);var i=n("2e73"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"0f55":function(t,e,n){"use strict";n.r(e);var i=n("739c"),a=n("7283");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("47ff");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"20659286",null,!1,i["a"],r);e["default"]=s.exports},1775:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.margin-normal[data-v-20659286]{margin:20px}.padding-normal[data-v-20659286]{padding:16px}.padding-bottom-normal[data-v-20659286]{padding-bottom:20px}.radius-normal[data-v-20659286]{border-radius:16px;overflow:hidden}.u-navbar-inner[data-v-20659286]{background-color:#f2f2f8}.u-navbar-inner > .u-navbar-content-title[data-v-20659286]{font-weight:700}.u-image__image > div[data-v-20659286]{background-size:contain!important}\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-toast[data-v-20659286]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:0 %?40?%}.u-toast.u-show[data-v-20659286]{opacity:1}.u-text[data-v-20659286]{word-break:keep-all;white-space:nowrap;line-height:normal}.u-icon[data-v-20659286]{margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-20659286]{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-top[data-v-20659286]{left:50%;top:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-bottom[data-v-20659286]{left:50%;bottom:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-type-primary[data-v-20659286]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-20659286]{color:#24a27c;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-20659286]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-20659286]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-20659286]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-20659286]{color:#fff;background-color:#585858}',""]),t.exports=e},"2e73":function(t,e,n){"use strict";var i=n("4ea4");n("4de4"),n("d81d"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c8f6")),o={name:"make-patrol-record",data:function(){return{taskId:"",keepupRecord:[],keepuped:!1,loading:!1,imageUrl:[],action:a.default.baseUrl+"/maint/uploadFile",header:{Authorization:uni.getStorageSync("token")},formData:{fileKey:"keepup-record"},fileList:[],valueResult:"",resultList:[{title:"未完成",name:"0"},{title:"维修完成",name:"1"}],resultMap:{0:"未完成",1:"维修完成"},form:{taskId:"",sendId:"",statusFlag:"",remarks:"",maintPic:"",content:""},normalOrNotList:[{title:"正常",name:"0"},{title:"异常",name:"1"}],normalOrNotMap:{0:"正常",1:"异常"},background:{background:"#f2f2f8"}}},computed:{detailContent:function(){return this.form.content?this.form.content.split("\n"):[]}},watch:{},onLoad:function(t){this.taskId=t.taskId},onShow:function(){this.getMaintList()},onReady:function(){},methods:{resultChange:function(){},back:function(){uni.navigateBack({delta:1})},getMaintList:function(){var t=this;this.$u.post("/maint/getWeihuList",{taskId:this.taskId}).then((function(e){200===e.code&&e.data?(t.form=e.data,t.keepuped=!0,t.form.maintPic&&(t.keepupRecord=t.form.maintPic.split(",").filter((function(t){return!!t})).map((function(t){return a.default.baseUrl+"/"+t})))):t.keepuped=!1}))},doPreviewImage:function(t){uni.previewImage({urls:this.keepupRecord,current:t,success:function(){},fail:function(){uni.showToast({title:"预览图片失败",icon:"none"})}})}}};e.default=o},"31b3":function(t,e,n){"use strict";n("c975"),n("a9e3"),n("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.config.type)>=0&&this.config.icon){var t=this.$u.type2icon(this.config.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.config=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.config.callback&&e.config.callback(),e.timeEnd()}),this.config.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.config.url){if("/"!=this.config.url[0]&&(this.config.url="/"+this.config.url),Object.keys(this.config.params).length){var t="";/.*\/.*\?.*=.*/.test(this.config.url)?(t=this.$u.queryParams(this.config.params,!1),this.config.url=this.config.url+"&"+t):(t=this.$u.queryParams(this.config.params),this.config.url+=t)}this.config.isTab?uni.switchTab({url:this.config.url}):uni.navigateTo({url:this.config.url})}else this.config.back&&this.$u.route({type:"back"})}}};e.default=i},3952:function(t,e,n){var i=n("4010");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("04ddc150",i,!0,{sourceMap:!1,shadowMode:!1})},4010:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.margin-normal[data-v-63ece025]{margin:20px}.padding-normal[data-v-63ece025]{padding:16px}.padding-bottom-normal[data-v-63ece025]{padding-bottom:20px}.radius-normal[data-v-63ece025]{border-radius:16px;overflow:hidden}.u-navbar-inner[data-v-63ece025]{background-color:#f2f2f8}.u-navbar-inner > .u-navbar-content-title[data-v-63ece025]{font-weight:700}.u-image__image > div[data-v-63ece025]{background-size:contain!important}\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.add-btn[data-v-63ece025]{margin-top:10px;width:50px;height:50px;border-radius:5px;border:1px dashed #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.add-new[data-v-63ece025]{height:20px;font-size:14px;font-weight:400;line-height:12px;color:#409eff}.u-btn--error--plain[data-v-63ece025]{background-color:#fff!important}.check-all[data-v-63ece025]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.check-all > .select-item[data-v-63ece025]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:20px;height:20px;border-radius:50%;border:1px solid #ebeef5}.check-all > .select-item.checked[data-v-63ece025]{background-color:#24a27c}',""]),t.exports=e},"47ff":function(t,e,n){"use strict";var i=n("f89e"),a=n.n(i);a.a},"5ba9":function(t,e,n){"use strict";var i=n("3952"),a=n.n(i);a.a},7283:function(t,e,n){"use strict";n.r(e);var i=n("31b3"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"739c":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("2bd4").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.config.type,"u-position-"+t.config.position],style:{zIndex:t.uZIndex}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[t.config.icon?n("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.config.type}}):t._e()],1),n("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.config.title))])],1)},o=[]},bb98:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("11b1").default,nnkjcDetailGroup:n("138a").default,nnkjcDetailItem:n("560a").default,uRow:n("5dc7").default,uCol:n("a8730").default,uImage:n("8342").default,uToast:n("0f55").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"make-maint-record padding-bottom-normal"},[n("u-navbar",{attrs:{isFixed:!0,borderBottom:!1,backIconName:"arrow-leftward",titleSize:"34",customBack:t.back,background:t.background,title:"保养记录表"}}),n("v-uni-view",[n("nnkjc-detail-group",[n("nnkjc-detail-item",{attrs:{detailTitle:"巡查地点",align:"left",gap:!1}},[n("v-uni-view",{attrs:{slot:"content"},slot:"content"},[n("v-uni-text",[t._v("配电机房")])],1)],1)],1),n("v-uni-view",[n("nnkjc-detail-group",[t.keepuped?n("v-uni-view",[n("nnkjc-detail-item",{attrs:{detailTitle:"保养内容",align:"left","label-width":70}},[n("v-uni-view",{staticStyle:{"line-height":"1.5"},attrs:{slot:"content"},slot:"content"},t._l(t.detailContent,(function(e,i){return n("v-uni-view",{key:i},[t._v(t._s(e))])})),1)],1),n("nnkjc-detail-item",{attrs:{detailTitle:"保养人员",align:"left","label-width":70}},[n("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.form.maintStaffName))])],1)],1):t._e(),n("nnkjc-detail-item",{attrs:{align:"left",gap:!1}},[n("v-uni-view",{attrs:{slot:"title"},slot:"title"},[t._v("试运情况")]),n("v-uni-view",{attrs:{slot:"content"},slot:"content"},[n("v-uni-view",[n("v-uni-text",[t._v(t._s(t.normalOrNotMap[t.form.statusFlag]))])],1)],1)],1)],1)],1),t.keepuped?n("v-uni-view",[n("nnkjc-detail-group",[n("nnkjc-detail-item",{attrs:{detailTitle:"备注",align:"left",gap:!1}},[n("v-uni-view",{attrs:{slot:"content"},slot:"content"},[n("v-uni-text",[t._v(t._s(t.form.remarks))])],1)],1),n("v-uni-view",{staticStyle:{"padding-bottom":"10px"}},[n("u-row",{attrs:{gutter:"12"}},t._l(t.keepupRecord,(function(e,i){return n("u-col",{key:e,attrs:{span:"2"}},[n("u-image",{attrs:{width:"50px",height:"50px","border-radius":"6",src:e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doPreviewImage(i)}}})],1)})),1)],1)],1)],1):t._e()],1),n("u-toast",{ref:"uToast"})],1)},o=[]},e9f8:function(t,e,n){"use strict";n.r(e);var i=n("bb98"),a=n("0d02");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("5ba9");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"63ece025",null,!1,i["a"],r);e["default"]=s.exports},f89e:function(t,e,n){var i=n("1775");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("732278a6",i,!0,{sourceMap:!1,shadowMode:!1})}}]);