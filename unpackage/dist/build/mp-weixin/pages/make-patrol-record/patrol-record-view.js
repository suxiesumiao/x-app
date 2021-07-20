(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/make-patrol-record/patrol-record-view"],{"27ef":function(n,a,t){"use strict";var e=t("d33d"),i=t.n(e);i.a},c090:function(n,a,t){"use strict";t.r(a);var e=t("e957"),i=t.n(e);for(var o in e)"default"!==o&&function(n){t.d(a,n,(function(){return e[n]}))}(o);a["default"]=i.a},cea5:function(n,a,t){"use strict";t.r(a);var e=t("f6ba"),i=t("c090");for(var o in i)"default"!==o&&function(n){t.d(a,n,(function(){return i[n]}))}(o);t("27ef");var u,r=t("f0c5"),f=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"d9e847ca",null,!1,e["a"],u);a["default"]=f.exports},d33d:function(n,a,t){},e957:function(n,a,t){"use strict";(function(n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(t("c8f6"));function i(n){return n&&n.__esModule?n:{default:n}}var o={name:"patrol-record-view",data:function(){return{patrolRecord:[],maintStaffMap:{},patroled:!1,loading:!1,imageUrl:[],action:e.default.baseUrl+"/maint/uploadFile",header:{Authorization:n.getStorageSync("token")},formData:{fileKey:"patrol-record"},fileList:[],valueResult:"",resultList:[{title:"未完成",name:"0"},{title:"维修完成",name:"1"}],resultMap:{0:"未完成",1:"维修完成"},assetAbout:{assetId:"",name:"",code:"",modelName:"",installPos:""},form:{taskId:"",sendId:"",byqAssetId:"",byqName:"",byqUba:"",byqUac:"",byqUcb:"",byqIa:"",byqIb:"",byqIc:"",byqTempA:"",byqTempB:"",byqTempC:"",byqPosunFlag:"",byqFangdianFlag:"",byqYixiangFlag:"",pdfShengyu1:"",pdfYongdian1:"",pdfShengyu2:"",pdfYongdian2:"",pdfGonglvyinshu:"",pdfDianfangzhaoming:"",pdfYingjizhaoming:"",pdfPaiqifengshan:"",pdfXiaofangqicai:"",pdfWeisheng:"",pdfFangshusheshi:"",pdfTemp:"",patrolStaffSign:"",patrolTime:"",statusFlag:"",remarks:"",patrolPic:""},posunList:[{title:"正常",name:"0"},{title:"有破损",name:"1"}],posunMap:{0:"正常",1:"有破损"},fangdianList:[{title:"正常",name:"0"},{title:"有放电痕迹",name:"1"}],fangdianMap:{0:"正常",1:"有放电痕迹"},yixiangList:[{title:"正常",name:"0"},{title:"有异响",name:"1"}],yixiangMap:{0:"正常",1:"有异响"},normalOrNotList:[{title:"正常",name:"0"},{title:"异常",name:"1"}],normalOrNotMap:{0:"正常",1:"异常"},background:{background:"#f2f2f8"},checkedNormalProps:["byqPosunFlag","byqFangdianFlag","byqYixiangFlag","pdfDianfangzhaoming","pdfYingjizhaoming","pdfPaiqifengshan","pdfXiaofangqicai","pdfWeisheng","pdfFangshusheshi"],checkedVoltageProps:["byqUba","byqUac","byqUcb"],checkedTemProps:["byqTempA","byqTempB","byqTempC"]}},computed:{normalCollec:function(){var n=this.form,a=n.byqPosunFlag,t=n.byqFangdianFlag,e=n.byqYixiangFlag,i=n.pdfDianfangzhaoming,o=n.pdfYingjizhaoming,u=n.pdfPaiqifengshan,r=n.pdfXiaofangqicai,f=n.pdfWeisheng,c=n.pdfFangshusheshi;return{byqPosunFlag:a,byqFangdianFlag:t,byqYixiangFlag:e,pdfDianfangzhaoming:i,pdfYingjizhaoming:o,pdfPaiqifengshan:u,pdfXiaofangqicai:r,pdfWeisheng:f,pdfFangshusheshi:c}}},watch:{normalCollec:function(n){var a=Object.values(n).every((function(n){return"0"===n}));this.form.statusFlag=a?"0":"1"}},onLoad:function(a){this.form.taskId=a.taskId,this.form.sendId=a.sendId;var t=n.getStorageSync("user");t&&(this.form.patrolStaffSign=t.staffName);var e=(new Date).getTime();this.form.patrolTime=this.$u.timeFormat(e,"yyyy-mm-dd hh:MM:ss"),this.getMaintList()},onShow:function(){},onReady:function(){},methods:{statusChange:function(n){var a=this;this.checkedNormalProps.forEach((function(t){a.form[t]=n}))},resultChange:function(){},back:function(){n.navigateBack({delta:1})},onSuccess:function(n,a,t,e){200===n.code&&n.data&&this.imageUrl.push(n.data)},onRemove:function(n,a,t){this.imageUrl.splice(n,1)},getMaintList:function(){var n=this;this.$u.post("/maint/getPatrolList",{taskId:this.form.taskId}).then((function(a){200===a.code&&a.data?(n.patroled=!0,n.form=a.data,n.form.patrolPic&&(n.patrolRecord=n.form.patrolPic.split(",").filter((function(n){return!!n})).map((function(n){return e.default.baseUrl+"/"+n})))):n.patroled=!1}))},doPreviewImage:function(a){n.previewImage({urls:this.patrolRecord,current:a,success:function(){},fail:function(){n.showToast({title:"预览图片失败",icon:"none"})}})}}};a.default=o}).call(this,t("543d")["default"])},f44c:function(n,a,t){"use strict";(function(n){t("5d15");e(t("66fd"));var a=e(t("cea5"));function e(n){return n&&n.__esModule?n:{default:n}}n(a.default)}).call(this,t("543d")["createPage"])},f6ba:function(n,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return e}));var e={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,"11b1"))},nnkjcDetailGroup:function(){return t.e("components/nnkjc-detail-group/nnkjc-detail-group").then(t.bind(null,"138a"))},nnkjcDetailItem:function(){return t.e("components/nnkjc-detail-item/nnkjc-detail-item").then(t.bind(null,"560a"))},uRow:function(){return t.e("uview-ui/components/u-row/u-row").then(t.bind(null,"5dc7"))},uCol:function(){return t.e("uview-ui/components/u-col/u-col").then(t.bind(null,"a873"))},uImage:function(){return t.e("uview-ui/components/u-image/u-image").then(t.bind(null,"8342"))},uToast:function(){return t.e("uview-ui/components/u-toast/u-toast").then(t.bind(null,"0f55"))}},i=function(){var n=this,a=n.$createElement;n._self._c},o=[]}},[["f44c","common/runtime","common/vendor"]]]);