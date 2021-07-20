(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-col/u-col"],{"1a95":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,Number(t.gutter));t.$mp.data=Object.assign({},{$root:{m0:n}})},a=[]},"30a3":function(t,e,n){"use strict";var u=n("9b4d"),i=n.n(u);i.a},"9b4d":function(t,e,n){},a873:function(t,e,n){"use strict";n.r(e);var u=n("1a95"),i=n("adbc");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("30a3");var r,f=n("f0c5"),c=Object(f["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=c.exports},adbc:function(t,e,n){"use strict";n.r(e);var u=n("eac9"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=i.a},eac9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"}},inject:["gutter"],computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(){this.$emit("click")}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-col/u-col-create-component',
    {
        'uview-ui/components/u-col/u-col-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a873"))
        })
    },
    [['uview-ui/components/u-col/u-col-create-component']]
]);
