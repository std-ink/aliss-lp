(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{338:function(t,e,r){var content=r(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("3a5b4614",content,!0,{sourceMap:!1})},339:function(t,e,r){var content=r(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("54b3e4ba",content,!0,{sourceMap:!1})},341:function(t,e,r){"use strict";var o=r(338);r.n(o).a},342:function(t,e,r){(e=r(11)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},343:function(t,e,r){"use strict";var o=r(339);r.n(o).a},344:function(t,e,r){(e=r(11)(!1)).push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=e},349:function(t,e,r){"use strict";r(343);var o=r(46),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"/vuetify-logo.svg"}})}),[],!1,null,null,null);e.a=component.exports},350:function(t,e,r){"use strict";r(341);var o=r(46),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.a=component.exports},355:function(t,e,r){"use strict";r(140);var o=r(142);e.a=Object(o.a)("layout")},392:function(t,e,r){"use strict";r(140);var o=r(142);e.a=Object(o.a)("flex")},407:function(t,e,r){"use strict";r.r(e);var o=r(350),n=r(349),l={middleware:"authenticated",components:{Logo:o.a,VuetifyLogo:n.a}},f=r(46),c=r(65),d=r.n(c),v=r(149),h=r(132),m=r(57),x=r(392),_=r(355),w=r(334),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("div",{staticClass:"text-center"},[r("logo"),t._v(" "),r("vuetify-logo")],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome to the Vuetify + Nuxt.js template\n      ")]),t._v(" "),r("v-card-text",[r("p",[t._v("Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.")]),t._v(" "),r("p",[t._v("\n          For more information on Vuetify, check out the "),r("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank"}},[t._v("\n            documentation\n          ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          If you have questions, please join the official "),r("a",{attrs:{href:"https://chat.vuetifyjs.com/",target:"_blank",title:"chat"}},[t._v("\n            discord\n          ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          Find a bug? Report it on the github "),r("a",{attrs:{href:"https://github.com/vuetifyjs/vuetify/issues",target:"_blank",title:"contribute"}},[t._v("\n            issue board\n          ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.")]),t._v(" "),r("div",{staticClass:"text-xs-right"},[r("em",[r("small",[t._v("— John Leider")])])]),t._v(" "),r("hr",{staticClass:"my-3"}),t._v(" "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("\n          Nuxt Documentation\n        ")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[t._v("\n          Nuxt GitHub\n        ")])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/inspire"}},[t._v("\n          Continue\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VFlex:x.a,VLayout:_.a,VSpacer:w.a})}}]);