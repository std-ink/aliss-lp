(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(t,e,n){"use strict";var strong=n(353),r=n(350);t.exports=n(354)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},342:function(t,e,n){"use strict";n(141);var r=n(142);e.a=Object(r.a)("layout")},346:function(t,e,n){"use strict";n(11),n(9),n(59),n(26),n(31);var r=n(2),o=(n(39),n(340),n(47),n(7),n(4),n(10),n(14),n(198),n(1)),c=n(58),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),_=v.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(_)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var j=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=j.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var r=n[t],o=O(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),j.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},347:function(t,e,n){"use strict";n(11),n(9);var r=n(2),o=(n(39),n(340),n(47),n(7),n(4),n(10),n(26),n(31),n(198),n(1)),c=n(58),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.D)(r)]=e(),n}),{})}var _=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},m=y("align",(function(){return{type:String,default:null,validator:_}})),O=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},j=y("justify",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:w}})),k={align:Object.keys(m),justify:Object.keys(j),alignContent:Object.keys(S)},x={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=x[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var A=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},m),{},{justify:{type:String,default:null,validator:O}},j),{},{alignContent:{type:String,default:null,validator:w}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=A.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),A.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},350:function(t,e,n){var r=n(27);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},353:function(t,e,n){"use strict";var r=n(34).f,o=n(95),c=n(201),l=n(60),f=n(199),d=n(200),v=n(148),h=n(202),y=n(149),_=n(28),m=n(145).fastKey,O=n(350),j=_?"_s":"size",w=function(t,e){var n,r=m(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[j]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=O(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[j]=0},delete:function(t){var n=O(this,e),r=w(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[j]--}return!!r},forEach:function(t){O(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!w(O(this,e),t)}}),_&&r(h.prototype,"size",{get:function(){return O(this,e)[j]}}),h},def:function(t,e,n){var r,o,c=w(t,e);return c?c.v=n:(t._l=c={i:o=m(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[j]++,"F"!==o&&(t._i[o]=c)),t},getEntry:w,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=O(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),y(e)}}},354:function(t,e,n){"use strict";var r=n(24),o=n(19),c=n(35),l=n(201),meta=n(145),f=n(200),d=n(199),v=n(27),h=n(29),y=n(147),_=n(94),m=n(150);t.exports=function(t,e,n,O,j,w){var S=r[t],k=S,x=j?"set":"add",C=k&&k.prototype,A={},D=function(t){var e=C[t];c(C,t,"delete"==t||"has"==t?function(a){return!(w&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return w&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(w||C.forEach&&!h((function(){(new k).entries().next()})))){var F=new k,P=F[x](w?{}:-0,1)!=F,E=h((function(){F.has(1)})),H=y((function(t){new k(t)})),M=!w&&h((function(){for(var t=new k,e=5;e--;)t[x](e,e);return!t.has(-0)}));H||((k=e((function(e,n){d(e,k,t);var r=m(new S,e,k);return null!=n&&f(n,j,r[x],r),r}))).prototype=C,C.constructor=k),(E||M)&&(D("delete"),D("has"),j&&D("get")),(M||P)&&D(x),w&&C.clear&&delete C.clear}else k=O.getConstructor(e,t,j,x),l(k.prototype,n),meta.NEED=!0;return _(k,t),A[t]=k,o(o.G+o.W+o.F*(k!=S),A),w||O.setStrong(k,t,j),k}},383:function(t,e,n){"use strict";var r=n(152),o=n(30),c=n(5),l=n(6);e.a=Object(c.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},438:function(t,e,n){"use strict";n.r(e);var r={middleware:"authenticated",data:function(){return{menu:[{module:"HFA",title:"Register Accountings Doc",desc:"家計簿登録",path:"/hfa/regDoc",mode:"lp"},{module:"HFA",title:"Refer Accountings Doc",desc:"伝票照会",path:"/hfa/farefer",mode:"lp"},{module:"HFA",title:"Transfer Posting",desc:"振替転記",path:"/hfa/transfer",mode:"lp"},{module:"HFA",title:"Monthly Closing",desc:"月次締め処理",path:"/hfa/close",mode:"lp"},{module:"HFA",title:"Expenditure Report by Period",desc:"期間別総支出",path:"/hfa/fasummary",mode:"lp"},{module:"HFA",title:"Financial Report by Account",desc:"グループ科目別集計",path:"/hfa/accReport",mode:"lp"}],cmenu:[{module:"HFA",title:"FA01 Register Accountings Doc",desc:"家計簿登録（旧画面）",path:"https://std-ink.github.io/aliss/?pId=fa01",mode:"ext"},{module:"HFA",title:"FA02 Transfer Posting",desc:"振替転記（旧画面）",path:"https://std-ink.github.io/aliss/?pId=fa02",mode:"ext"},{module:"HFA",title:"FA03 Monthly Closing",desc:"月次締め処理（旧画面）",path:"https://std-ink.github.io/aliss/?pId=fa03",mode:"ext"},{module:"HFA",title:"FA05 Refer Accountings Doc ",desc:"伝票照会（旧画面）",path:"https://std-ink.github.io/aliss/?pId=fa05",mode:"ext"}]}},mounted:function(){this.$store.dispatch("SetTitle","Home Finantial Accountings")}},o=n(38),c=n(65),l=n.n(c),f=n(134),d=n(57),v=n(346),h=n(333),y=n(383),_=n(342),m=n(347),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-container",[n("h2",{staticClass:"primary--text"},[t._v("Menu")]),t._v(" "),n("v-row",{staticStyle:{"margin-bottom":"30px"},attrs:{align:"center"}},t._l(t.menu,(function(e,r){return n("v-col",{key:r,attrs:{lg:"4",md:"6",sm:"12",cols:"12"}},["ext"==e.mode?n("a",{staticClass:"card",attrs:{href:e.path,target:"_blank"}},[n("v-hover",{attrs:{"open-delay":"1","close-delay":"1"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{attrs:{color:"tilebg",elevation:o?8:2}},[n("v-card-title",{staticClass:"title-txt"},[t._v(t._s(e.title))]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(e.desc))])])],1)]}}],null,!0)})],1):t._e(),t._v(" "),"lp"==e.mode?n("nuxt-link",{staticClass:"card",attrs:{to:e.path}},[n("v-hover",{attrs:{"open-delay":"1","close-delay":"1"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{attrs:{color:"tilebg",elevation:o?8:2}},[n("v-card-title",{staticClass:"title-txt"},[t._v(t._s(e.title))]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(e.desc))])])],1)]}}],null,!0)})],1):t._e()],1)})),1),t._v(" "),n("h2",{staticClass:"primary--text"},[t._v("Classic WEB Suite")]),t._v(" "),n("v-row",{attrs:{align:"center"}},t._l(t.cmenu,(function(e,r){return n("v-col",{key:r,attrs:{lg:"4",md:"6",sm:"12",cols:"12"}},["ext"==e.mode?n("a",{staticClass:"card",attrs:{href:e.path,target:"_blank"}},[n("v-hover",{attrs:{"open-delay":"1","close-delay":"1"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{attrs:{color:"tilebg",elevation:o?8:2}},[n("v-card-title",{staticClass:"title-txt"},[t._v(t._s(e.title))]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(e.desc))])])],1)]}}],null,!0)})],1):t._e(),t._v(" "),"lp"==e.mode?n("nuxt-link",{staticClass:"card",attrs:{to:e.path}},[n("v-hover",{attrs:{"open-delay":"1","close-delay":"1"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{attrs:{color:"tilebg",elevation:o?8:2}},[n("v-card-title",{staticClass:"title-txt"},[t._v(t._s(e.title))]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(e.desc))])])],1)]}}],null,!0)})],1):t._e()],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:f.a,VCardText:d.b,VCardTitle:d.c,VCol:v.a,VContainer:h.a,VHover:y.a,VLayout:_.a,VRow:m.a})}}]);