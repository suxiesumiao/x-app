(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/make-patrol-record/index"],{1527:function(n,t,e){},2487:function(n,t,e){"use strict";var a=e("1527"),i=e.n(a);i.a},"53f6":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"11b1"))},nnkjcDetailGroup:function(){return e.e("components/nnkjc-detail-group/nnkjc-detail-group").then(e.bind(null,"138a"))},nnkjcDetailItem:function(){return e.e("components/nnkjc-detail-item/nnkjc-detail-item").then(e.bind(null,"560a"))},uInput:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-input/u-input")]).then(e.bind(null,"8a48"))},uRadioGroup:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-radio-group/u-radio-group")]).then(e.bind(null,"38e1"))},uRadio:function(){return e.e("uview-ui/components/u-radio/u-radio").then(e.bind(null,"8dc7"))},uUpload:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-upload/u-upload")]).then(e.bind(null,"f0a8"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"2bd4"))},uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"5231"))},uToast:function(){return e.e("uview-ui/components/u-toast/u-toast").then(e.bind(null,"0f55"))}},i=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){return n.$u.debounce(n.submitForm,500)})},o=[]},bb95:function(n,t,e){"use strict";e.r(t);var a=e("e8f6"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},db29:function(n,t,e){"use strict";e.r(t);var a=e("53f6"),i=e("bb95");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("2487");var u,r=e("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"57fb3821",null,!1,a["a"],u);t["default"]=s.exports},e8f6:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("c8f6"));function i(n){return n&&n.__esModule?n:{default:n}}var o={name:"make-patrol-record",data:function(){return{maintRecord:[],maintStaffMap:{},patroled:!1,loading:!1,imageUrl:[],action:a.default.baseUrl+"/maint/uploadFile",header:{Authorization:n.getStorageSync("token")},formData:{fileKey:"patrol-record"},fileList:[],valueResult:"",resultList:[{title:"未完成",name:"0"},{title:"维修完成",name:"1"}],resultMap:{0:"未完成",1:"维修完成"},assetAbout:{assetId:"",name:"",code:"",modelName:"",installPos:""},form:{taskId:"",sendId:"",byqName:"",byqUba:"",byqUac:"",byqUcb:"",byqIa:"",byqIb:"",byqIc:"",byqTempA:"",byqTempB:"",byqTempC:"",byqPosunFlag:"",byqFangdianFlag:"",byqYixiangFlag:"",pdfShengyu1:"",pdfYongdian1:"",pdfShengyu2:"",pdfYongdian2:"",pdfGonglvyinshu:"",pdfDianfangzhaoming:"",pdfYingjizhaoming:"",pdfPaiqifengshan:"",pdfXiaofangqicai:"",pdfWeisheng:"",pdfFangshusheshi:"",pdfTemp:"",patrolStaffSign:"",patrolTime:"",statusFlag:"",remarks:"",patrolPic:""},posunList:[{title:"正常",name:"0"},{title:"有破损",name:"1"}],posunMap:{0:"正常",1:"有破损"},fangdianList:[{title:"正常",name:"0"},{title:"有放电痕迹",name:"1"}],fangdianMap:{0:"正常",1:"有放电痕迹"},yixiangList:[{title:"正常",name:"0"},{title:"有异响",name:"1"}],yixiangMap:{0:"正常",1:"有异响"},normalOrNotList:[{title:"正常",name:"0"},{title:"异常",name:"1"}],normalOrNotMap:{0:"正常",1:"异常"},background:{background:"#f2f2f8"},checkedNormalProps:["byqPosunFlag","byqFangdianFlag","byqYixiangFlag","pdfDianfangzhaoming","pdfYingjizhaoming","pdfPaiqifengshan","pdfXiaofangqicai","pdfWeisheng","pdfFangshusheshi"],checkedVoltageProps:["byqUba","byqUac","byqUcb"],checkedTemProps:["byqTempA","byqTempB","byqTempC"]}},computed:{normalCollec:function(){var n=this.form,t=n.byqPosunFlag,e=n.byqFangdianFlag,a=n.byqYixiangFlag,i=n.pdfDianfangzhaoming,o=n.pdfYingjizhaoming,u=n.pdfPaiqifengshan,r=n.pdfXiaofangqicai,s=n.pdfWeisheng,f=n.pdfFangshusheshi;return{byqPosunFlag:t,byqFangdianFlag:e,byqYixiangFlag:a,pdfDianfangzhaoming:i,pdfYingjizhaoming:o,pdfPaiqifengshan:u,pdfXiaofangqicai:r,pdfWeisheng:s,pdfFangshusheshi:f}}},watch:{normalCollec:function(n){var t=Object.values(n).every((function(n){return"0"===n})),e=Object.values(n).some((function(n){return"1"===n}));this.form.statusFlag=t?"0":"",e&&(this.form.statusFlag="1")}},onLoad:function(t){this.form.taskId=t.taskId,this.form.sendId=t.sendId;var e=n.getStorageSync("user");e&&(this.form.patrolStaffSign=e.staffName);var a=(new Date).getTime();this.form.patrolTime=this.$u.timeFormat(a,"yyyy-mm-dd hh:MM:ss")},onShow:function(){this.getMaintList()},onReady:function(){},methods:{statusChange:function(n){var t=this;this.checkedNormalProps.forEach((function(e){("0"===n||"1"===n&&""===t.form[e])&&(t.form[e]=n)}))},resultChange:function(){},back:function(){n.navigateBack({delta:1})},onSuccess:function(n,t,e,a){200===n.code&&n.data&&this.imageUrl.push(n.data)},onRemove:function(n,t,e){this.imageUrl.splice(n,1)},getMaintList:function(){var n=this;this.$u.post("/maint/getPatrolList",{taskId:this.form.taskId}).then((function(t){200===t.code&&t.data?n.patroled=!0:n.patroled=!1}))},submitForm:function(){var t=this;if(this.imageUrl.length&&(this.form.patrolPic=this.imageUrl.join(",")),""!==this.form.statusFlag){for(var e=0;e<this.checkedVoltageProps.length;e++){var a=this.form[this.checkedVoltageProps[e]];if(a&&(a<360||a>400))return void this.$refs.uToast.show({title:"电压应介于 360V 与 400V 之间",type:"warning"})}for(var i=0;i<this.checkedTemProps.length;i++){var o=this.form[this.checkedTemProps[i]];if(o&&o>70)return void this.$refs.uToast.show({title:"温度不得高于 70 ℃",type:"warning"})}var u=(new Date).getTime();this.form.patrolTime=this.$u.timeFormat(u,"yyyy-mm-dd hh:MM:ss");var r=Object.assign({},this.form);this.loading=!0,this.$u.post("/maint/savePatrolRecord",r).then((function(e){console.log(e),200===e.code&&(t.$refs.uToast.show({title:e.message,type:"success"}),setTimeout((function(){n.reLaunch({url:"/pages/home/index"})}),300))})).catch((function(n){})).finally((function(n){t.loading=!1}))}else this.$refs.uToast.show({title:"请选择检查结果",type:"warning"})},doPreviewImage:function(t,e){n.previewImage({urls:t,current:e,success:function(){},fail:function(){n.showToast({title:"预览图片失败",icon:"none"})}})}}};t.default=o}).call(this,e("543d")["default"])},f0dd:function(n,t,e){"use strict";(function(n){e("5d15");a(e("66fd"));var t=a(e("db29"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["f0dd","common/runtime","common/vendor"]]]);