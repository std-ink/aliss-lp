(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{342:function(t,e,n){"use strict";n(141);var r=n(142);e.a=Object(r.a)("layout")},346:function(t,e,n){"use strict";n(11),n(9),n(59),n(26),n(31);var r=n(2),o=(n(39),n(340),n(47),n(7),n(4),n(10),n(14),n(198),n(1)),c=n(58),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=m.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),k=m.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(k)};function I(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=O.get(l);return f||function(){var t,e;for(e in f=[],h)h[e].forEach((function(t){var r=n[t],o=I(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),O.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},347:function(t,e,n){"use strict";n(11),n(9);var r=n(2),o=(n(39),n(340),n(47),n(7),n(4),n(10),n(26),n(31),n(198),n(1)),c=n(58),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=["start","end","center"];function y(t,e){return m.reduce((function(n,r){return n[t+Object(l.D)(r)]=e(),n}),{})}var k=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},h=y("align",(function(){return{type:String,default:null,validator:k}})),I=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:I}})),x=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=y("alignContent",(function(){return{type:String,default:null,validator:x}})),w={align:Object.keys(h),justify:Object.keys(O),alignContent:Object.keys(j)},S={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:k}},h),{},{justify:{type:String,default:null,validator:I}},O),{},{alignContent:{type:String,default:null,validator:x}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=C.get(l);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},351:function(t,e,n){"use strict";n(43);var r=n(8),o={data:function(){return{year:null,month:null,day:null,bank:null,bankDropDown:[]}},props:["readOnly","hideBank","notInit","defBank"],computed:{banks:function(){return this.$store.getters["fa/Banks"]},input:{get:function(){return this.$store.getters["fa/BaseCondInput"]},set:function(t){this.$store.dispatch("fa/SetBaseCondInput",t)}}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.notInit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$store.dispatch("fa/GetBanks");case 4:if(t.bankDropDown=t.banks.slice(),t.bankDropDown.unshift({name:"",bank:null}),n=new Date,t.year=n.getFullYear(),t.month=n.getMonth()+1,t.day=n.getDate(),!t.defBank){e.next=19;break}i=0;case 12:if(!(i<t.banks.length)){e.next=19;break}if(!t.banks[i].default){e.next=16;break}return t.bank=t.banks[i].bank,e.abrupt("break",19);case 16:i++,e.next=12;break;case 19:t.input={year:t.year,month:t.month,day:t.day,bank:t.bank};case 20:case"end":return e.stop()}}),e)})))()},methods:{onEnter:function(){this.$emit("onEnter")},onChange:function(){this.input={year:this.year,month:this.month,day:this.day,bank:this.bank}}}},c=n(38),l=n(65),d=n.n(l),f=n(346),m=n(333),v=n(347),y=n(377),k=n(430),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-text-field",{attrs:{label:"年","hide-details":"",color:"accent",type:"number",readonly:t.readOnly},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)},change:t.onChange},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),t._v(" "),n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-text-field",{attrs:{label:"月","hide-details":"",color:"accent",type:"number",readonly:t.readOnly},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)},change:t.onChange},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1),t._v(" "),n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-text-field",{attrs:{label:"日","hide-details":"",color:"accent",type:"number",readonly:t.readOnly},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)},change:t.onChange},model:{value:t.day,callback:function(e){t.day=e},expression:"day"}})],1),t._v(" "),n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[t.hideBank?t._e():n("v-select",{attrs:{items:t.bankDropDown,"item-text":"name","item-value":"bank",label:"Bank",color:"accent",readonly:t.readOnly},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)},change:t.onChange},model:{value:t.bank,callback:function(e){t.bank=e},expression:"bank"}})],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VCol:f.a,VContainer:m.a,VRow:v.a,VSelect:y.a,VTextField:k.a})},442:function(t,e,n){"use strict";n.r(e);n(43);var r=n(8),o=(n(14),{middleware:"authenticated",data:function(){return{tranVal:0,sInput:{bank:null,accId:null,comment:""},dInput:{bank:null,accId:null,comment:""}}},computed:{accounts:function(){return this.$store.getters["fa/Accounts"]},banks:function(){return this.$store.getters["fa/Banks"]},sBalance:function(){for(var i=0;i<this.banks.length;i++)if(this.banks[i].bid==this.sInput.bank)return this.banks[i].balance;return 0},sAfterBalance:function(){return Number(this.sBalance)-Number(this.tranVal)},dBalance:function(){for(var i=0;i<this.banks.length;i++)if(this.banks[i].bid==this.dInput.bank)return this.banks[i].balance;return 0},dAfterBalance:function(){return Number(this.dBalance)+Number(this.tranVal)},baseCondInput:function(){return this.$store.getters["fa/BaseCondInput"]}},components:{FaBaseCond:n(351).a},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("SetTitle","家計簿BANK間振替"),t.$store.dispatch("fa/GetBanks"),e.next=4,t.$store.dispatch("fa/GetAccounts",2);case 4:return e.next=6,t.$store.dispatch("GetConfig",{no:2001,detail:1});case 6:return n=e.sent,t.sInput.accId=n.configStr,e.next=10,t.$store.dispatch("GetConfig",{no:2001,detail:2});case 10:r=e.sent,t.dInput.accId=r.configStr;case 12:case"end":return e.stop()}}),e)})))()},methods:{onRegister:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t.sInput.bank){e.next=3;break}return t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Info",body:"振替元のBankを指定してください"}),e.abrupt("return");case 3:if(null!=t.dInput.bank){e.next=6;break}return t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Info",body:"振替先のBankを指定してください"}),e.abrupt("return");case 6:if(t.sInput.bank!=t.dInput.bank){e.next=9;break}return t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Info",body:"振替元と振替先のBankが同一です"}),e.abrupt("return");case 9:if(null!=t.sInput.accId){e.next=12;break}return t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Info",body:"振替元の科目を指定してください"}),e.abrupt("return");case 12:if(null!=t.dInput.accId){e.next=15;break}return t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Info",body:"振替先の科目を指定してください"}),e.abrupt("return");case 15:if(!(t.tranVal<=0)){e.next=18;break}return t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Info",body:"振替金額には0より大きい値を指定してください"}),e.abrupt("return");case 18:if(null!=t.baseCondInput.year&&""!=t.baseCondInput.year&&null!=t.baseCondInput.month&&""!=t.baseCondInput.month&&null!=t.baseCondInput.day&&""!=t.baseCondInput.day){e.next=21;break}return t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Info",body:"転記日を指定してください"}),e.abrupt("return");case 21:return n={header:{year:t.baseCondInput.year,month:t.baseCondInput.month,day:t.baseCondInput.day,value:t.tranVal},source:t.sInput,dest:t.dInput},console.log(JSON.stringify(n)),e.next=25,t.$store.dispatch("fa/PostTransfer",n);case 25:null!=(r=e.sent)?(t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Info",body:"振替転記しました。<br>振替伝票番号："+r}),t.sInput.bank=null,t.sInput.comment="",t.dInput.bank=null,t.dInput.comment="",t.tranVal=0):t.$store.dispatch("widget/SetModalMsg",{enabled:!0,title:"Error",body:"振替転記に失敗しました。"});case 27:case"end":return e.stop()}}),e)})))()}}}),c=n(38),l=n(65),d=n.n(l),f=n(153),m=n(346),v=n(333),y=n(342),k=n(347),h=n(377),I=n(430),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-container",[n("h3",{staticClass:"primary--text"},[t._v("伝票ヘッダ")]),t._v(" "),n("FaBaseCond",{staticStyle:{"margin-top":"-10px","margin-bottom":"30px"},attrs:{readOnly:!1,hideBank:!0}}),t._v(" "),n("v-container",{staticStyle:{"margin-top":"-60px","margin-bottom":"20px"}},[n("v-row",[n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-text-field",{attrs:{label:"振替金額*",color:"accent",type:"number"},model:{value:t.tranVal,callback:function(e){t.tranVal=e},expression:"tranVal"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.onRegister}},[t._v("\n                    登録\n                    ")])],1)],1)],1),t._v(" "),n("h3",{staticClass:"primary--text"},[t._v("振替元")]),t._v(" "),n("v-container",{staticStyle:{"margin-top":"-10px","margin-bottom":"20px"}},[n("v-row",[n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-select",{attrs:{items:t.banks,"item-text":"name","item-value":"bid",label:"Bank*",color:"accent"},model:{value:t.sInput.bank,callback:function(e){t.$set(t.sInput,"bank",e)},expression:"sInput.bank"}})],1),t._v(" "),n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-select",{attrs:{items:t.accounts,"item-text":"label","item-value":"accid",label:"科目*",color:"accent"},model:{value:t.sInput.accId,callback:function(e){t.$set(t.sInput,"accId",e)},expression:"sInput.accId"}})],1),t._v(" "),n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-text-field",{attrs:{label:"摘要コメント",color:"accent",type:"text"},model:{value:t.sInput.comment,callback:function(e){t.$set(t.sInput,"comment",e)},expression:"sInput.comment"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{lg:"2",md:"2",sm:"6",cols:"6"}},[t._v("\n                    現残高\n                ")]),t._v(" "),n("v-col",{attrs:{lg:"1",md:"1",sm:"6",cols:"6"}},[t._v("\n                    "+t._s(t.sBalance.toLocaleString("ja-JP"))+"\n                ")]),t._v(" "),n("v-col",{attrs:{lg:"2",md:"2",sm:"6",cols:"6"}},[t._v("\n                    登録後残高\n                ")]),t._v(" "),n("v-col",{attrs:{lg:"1",md:"1",sm:"6",cols:"6"}},[t._v("\n                    "+t._s(t.sAfterBalance.toLocaleString("ja-JP"))+"\n                ")])],1)],1),t._v(" "),n("h3",{staticClass:"primary--text"},[t._v("振替先")]),t._v(" "),n("v-container",{staticStyle:{"margin-top":"-10px","margin-bottom":"20px"}},[n("v-row",[n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-select",{attrs:{items:t.banks,"item-text":"name","item-value":"bid",label:"Bank*",color:"accent"},model:{value:t.dInput.bank,callback:function(e){t.$set(t.dInput,"bank",e)},expression:"dInput.bank"}})],1),t._v(" "),n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-select",{attrs:{items:t.accounts,"item-text":"label","item-value":"accid",label:"科目*",color:"accent"},model:{value:t.dInput.accId,callback:function(e){t.$set(t.dInput,"accId",e)},expression:"dInput.accId"}})],1),t._v(" "),n("v-col",{attrs:{lg:"3",md:"3",sm:"6",cols:"12"}},[n("v-text-field",{attrs:{label:"摘要コメント",color:"accent",type:"text"},model:{value:t.dInput.comment,callback:function(e){t.$set(t.dInput,"comment",e)},expression:"dInput.comment"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{lg:"2",md:"2",sm:"6",cols:"6"}},[t._v("\n                    現残高\n                ")]),t._v(" "),n("v-col",{attrs:{lg:"1",md:"1",sm:"6",cols:"6"}},[t._v("\n                    "+t._s(t.dBalance.toLocaleString("ja-JP"))+"\n                ")]),t._v(" "),n("v-col",{attrs:{lg:"2",md:"2",sm:"6",cols:"6"}},[t._v("\n                    登録後残高\n                ")]),t._v(" "),n("v-col",{attrs:{lg:"1",md:"1",sm:"6",cols:"6"}},[t._v("\n                    "+t._s(t.dAfterBalance.toLocaleString("ja-JP"))+"\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VCol:m.a,VContainer:v.a,VLayout:y.a,VRow:k.a,VSelect:h.a,VTextField:I.a})}}]);