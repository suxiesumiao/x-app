(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"104b":function(e,t,n){"use strict";n.r(t);var r=n("1dc4");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("7b4e");var u,c,f,a,i=n("f0c5"),l=Object(i["a"])(r["default"],u,c,!1,null,null,null,!1,f,a);t["default"]=l.exports},"1dc4":function(e,t,n){"use strict";n.r(t);var r=n("a541"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=o.a},6219:function(e,t,n){},"7b4e":function(e,t,n){"use strict";var r=n("6219"),o=n.n(r);o.a},a541:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){var t=e.getStorageSync("token");t||e.redirectTo({url:"/pages/login/index"})},onShow:function(){},onHide:function(){}};t.default=n}).call(this,n("543d")["default"])},ff7e:function(e,t,n){"use strict";(function(e){n("5d15");var t=p(n("66fd")),r=p(n("104b")),o=p(n("5578")),u=p(n("4eee")),c=l(n("12c1"));n("df48");var f=p(n("3c33")),a=p(n("ec52"));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.use(o.default),t.default.use(a.default),t.default.prototype.$common=new u.default,t.default.config.productionTip=!1,Object.keys(c).forEach((function(e){t.default.filter(e,c[e])})),r.default.mpType="app";var O=new t.default(s(s({},r.default),{},{store:f.default}));e(O).$mount()}).call(this,n("543d")["createApp"])}},[["ff7e","common/runtime","common/vendor"]]]);