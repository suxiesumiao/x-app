(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-make-maint-record-maint-record-view"],{"03f7":function(t,n,a){var e=a("b16e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("280829d2",e,!0,{sourceMap:!1,shadowMode:!1})},"07b4":function(t,n,a){"use strict";var e=a("4ea4");a("4de4"),a("4160"),a("d81d"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("c8f6")),o={name:"maint-record-view",data:function(){return{maintRecord:[],maintStaffMap:{},mainted:!1,loading:!1,imageUrl:[],valueResult:"",resultMap:{0:"未完成",1:"维修完成"},assetAbout:{assetId:"",name:"",code:"",modelName:"",installPos:""},form:{taskId:"",sendId:"",assetFlag:"1",assetId:"",maintType:"in",finishFlag:"0",code:"",content:"",maintPic:""},typeMap:{0:"非资产维修",1:"资产维修"},maintTypeMap:{in:"自理",out:"外委"},background:{background:"#f2f2f8"}}},onLoad:function(t){this.form.taskId=t.taskId,this.form.sendId=t.sendId,this.getMaintList()},methods:{back:function(){uni.navigateBack({delta:1})},getMaintList:function(){var t=this;this.$u.post("/maint/getMaintList",{taskId:this.form.taskId}).then((function(n){200===n.code&&n.data?(t.mainted=!0,n.data.recordList&&(n.data.recordList.forEach((function(t){t.maintPicReal=t.maintPic.split(",").filter((function(t){return!!t})).map((function(t){return i.default.baseUrl+"/"+t}))})),t.maintRecord=n.data.recordList,t.form.assetFlag=n.data.assetFlag,t.form.maintType=n.data.maintType,t.form.finishFlag=n.data.finishFlag),"1"===n.data.assetFlag&&(t.assetAbout.code=n.data.assetCode,t.assetAbout.name=n.data.assetName,t.assetAbout.modelName=n.data.assetModel,t.assetAbout.installPos=n.data.assetPos)):t.mainted=!1})).catch((function(t){}))},doPreviewImage:function(t,n){uni.previewImage({urls:t,current:n,success:function(){},fail:function(){uni.showToast({title:"预览图片失败",icon:"none"})}})}}};n.default=o},"0e2d":function(t,n,a){"use strict";a.r(n);var e=a("07b4"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"0f55":function(t,n,a){"use strict";a.r(n);var e=a("739c"),i=a("7283");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("47ff");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"20659286",null,!1,e["a"],r);n["default"]=c.exports},1775:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.margin-normal[data-v-20659286]{margin:20px}.padding-normal[data-v-20659286]{padding:16px}.padding-bottom-normal[data-v-20659286]{padding-bottom:20px}.radius-normal[data-v-20659286]{border-radius:16px;overflow:hidden}.u-navbar-inner[data-v-20659286]{background-color:#f2f2f8}.u-navbar-inner > .u-navbar-content-title[data-v-20659286]{font-weight:700}.u-image__image > div[data-v-20659286]{background-size:contain!important}\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-toast[data-v-20659286]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:0 %?40?%}.u-toast.u-show[data-v-20659286]{opacity:1}.u-text[data-v-20659286]{word-break:keep-all;white-space:nowrap;line-height:normal}.u-icon[data-v-20659286]{margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-20659286]{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-top[data-v-20659286]{left:50%;top:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-bottom[data-v-20659286]{left:50%;bottom:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-type-primary[data-v-20659286]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-20659286]{color:#24a27c;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-20659286]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-20659286]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-20659286]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-20659286]{color:#fff;background-color:#585858}',""]),t.exports=n},"31b3":function(t,n,a){"use strict";a("c975"),a("a9e3"),a("b64b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.config.type)>=0&&this.config.icon){var t=this.$u.type2icon(this.config.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var n=this;this.config=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){n.isShow=!1,clearTimeout(n.timer),n.timer=null,"function"===typeof n.config.callback&&n.config.callback(),n.timeEnd()}),this.config.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.config.url){if("/"!=this.config.url[0]&&(this.config.url="/"+this.config.url),Object.keys(this.config.params).length){var t="";/.*\/.*\?.*=.*/.test(this.config.url)?(t=this.$u.queryParams(this.config.params,!1),this.config.url=this.config.url+"&"+t):(t=this.$u.queryParams(this.config.params),this.config.url+=t)}this.config.isTab?uni.switchTab({url:this.config.url}):uni.navigateTo({url:this.config.url})}else this.config.back&&this.$u.route({type:"back"})}}};n.default=e},"47ff":function(t,n,a){"use strict";var e=a("f89e"),i=a.n(e);i.a},7283:function(t,n,a){"use strict";a.r(n);var e=a("31b3"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"739c":function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var e={uIcon:a("2bd4").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.config.type,"u-position-"+t.config.position],style:{zIndex:t.uZIndex}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[t.config.icon?a("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.config.type}}):t._e()],1),a("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.config.title))])],1)},o=[]},"80db":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"common-header",data:function(){return{}},props:{title:{type:String,required:!0}}};n.default=e},8257:function(t,n,a){"use strict";a.r(n);var e=a("be28"),i=a("0e2d");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("fc80");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"15b4ca57",null,!1,e["a"],r);n["default"]=c.exports},"8cb7":function(t,n,a){"use strict";a.r(n);var e=a("9e67"),i=a("968f");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("b757");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"34a03b6a",null,!1,e["a"],r);n["default"]=c.exports},"968f":function(t,n,a){"use strict";a.r(n);var e=a("80db"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"9e67":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"common-header"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-text",[t._v(t._s(t.title))])],1),a("v-uni-view",{staticClass:"content"},[t._t("operation")],2)],1)},o=[]},ad6b:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.margin-normal[data-v-15b4ca57]{margin:20px}.padding-normal[data-v-15b4ca57]{padding:16px}.padding-bottom-normal[data-v-15b4ca57]{padding-bottom:20px}.radius-normal[data-v-15b4ca57]{border-radius:16px;overflow:hidden}.u-navbar-inner[data-v-15b4ca57]{background-color:#f2f2f8}.u-navbar-inner > .u-navbar-content-title[data-v-15b4ca57]{font-weight:700}.u-image__image > div[data-v-15b4ca57]{background-size:contain!important}\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.add-btn[data-v-15b4ca57]{margin-top:10px;width:50px;height:50px;border-radius:5px;border:1px dashed #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.add-new[data-v-15b4ca57]{height:20px;font-size:14px;font-weight:400;line-height:12px;color:#409eff}.u-btn--error--plain[data-v-15b4ca57]{background-color:#fff!important}',""]),t.exports=n},b16e:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.margin-normal[data-v-34a03b6a]{margin:20px}.padding-normal[data-v-34a03b6a]{padding:16px}.padding-bottom-normal[data-v-34a03b6a]{padding-bottom:20px}.radius-normal[data-v-34a03b6a]{border-radius:16px;overflow:hidden}.u-navbar-inner[data-v-34a03b6a]{background-color:#f2f2f8}.u-navbar-inner > .u-navbar-content-title[data-v-34a03b6a]{font-weight:700}.u-image__image > div[data-v-34a03b6a]{background-size:contain!important}\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.common-header[data-v-34a03b6a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.common-header > .header[data-v-34a03b6a]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;height:26px;font-size:18px;font-weight:700;line-height:26px;color:#333}',""]),t.exports=n},b757:function(t,n,a){"use strict";var e=a("03f7"),i=a.n(e);i.a},be28:function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var e={uNavbar:a("11b1").default,nnkjcDetailGroup:a("138a").default,nnkjcDetailItem:a("560a").default,commonHeader:a("8cb7").default,uRow:a("5dc7").default,uCol:a("a8730").default,uImage:a("8342").default,uToast:a("0f55").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"make-maint-record padding-bottom-normal"},[a("u-navbar",{attrs:{isFixed:!0,borderBottom:!1,backIconName:"arrow-leftward",titleSize:"34",customBack:t.back,background:t.background,title:"维修记录表"}}),a("v-uni-view",[a("nnkjc-detail-group",[a("nnkjc-detail-item",{attrs:{detailTitle:"维修类型",align:"left",gap:!1}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(t.typeMap[t.form.assetFlag]))])],1)],1)],1),"1"===t.form.assetFlag?a("v-uni-view",[a("nnkjc-detail-group",[a("nnkjc-detail-item",{attrs:{detailTitle:"设备编号",align:"left"}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(t.assetAbout.code))])],1)],1),a("nnkjc-detail-item",{attrs:{detailTitle:"设备名称",align:"left"}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(t.assetAbout.name))])],1)],1),a("nnkjc-detail-item",{attrs:{detailTitle:"规格型号",align:"left"}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(t.assetAbout.modelName))])],1)],1),a("nnkjc-detail-item",{attrs:{detailTitle:"设备房",align:"left",gap:!1}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(t.assetAbout.installPos))])],1)],1)],1)],1):t._e(),a("nnkjc-detail-group",[a("nnkjc-detail-item",{attrs:{detailTitle:"维修处理",align:"left",gap:!1}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(t.maintTypeMap[t.form.maintType]))])],1)],1)],1),a("v-uni-view",{staticClass:"margin-normal"},[a("common-header",{attrs:{title:"维修日志"}})],1),t.mainted&&t.maintRecord.length?a("v-uni-view",t._l(t.maintRecord,(function(n,e){return a("nnkjc-detail-group",{key:n.id},[a("nnkjc-detail-item",{attrs:{detailTitle:"维修日志",align:"left",gap:!1}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(n.content))])],1)],1),a("v-uni-view",{staticStyle:{"padding-bottom":"10px","border-bottom":"1px solid #f1f1f1"}},[a("u-row",{attrs:{gutter:"12"}},t._l(n.maintPicReal,(function(e,i){return a("u-col",{key:i,attrs:{span:"2"}},[a("u-image",{attrs:{width:"50px",height:"50px","border-radius":"6",src:e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.doPreviewImage(n.maintPicReal,i)}}})],1)})),1)],1),a("nnkjc-detail-item",{attrs:{detailTitle:"维修时间",align:"left"}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(n.maintTime))])],1)],1),a("nnkjc-detail-item",{attrs:{detailTitle:"维修人",align:"left",gap:!1}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",[t._v(t._s(n.maintStaffName))])],1)],1)],1)})),1):t._e()],1),a("u-toast",{ref:"uToast"})],1)},o=[]},e5f7:function(t,n,a){var e=a("ad6b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("13fd840c",e,!0,{sourceMap:!1,shadowMode:!1})},f89e:function(t,n,a){var e=a("1775");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("732278a6",e,!0,{sourceMap:!1,shadowMode:!1})},fc80:function(t,n,a){"use strict";var e=a("e5f7"),i=a.n(e);i.a}}]);