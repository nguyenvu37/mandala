(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[59,17,64,78,79,80,86,92,101,109,115],{114:function(t,e,n){"use strict";n.r(e);var r=n(532),a=n.n(r),o=n(533),i=n(7),u=n(530),c=n(0),f=n.n(c),l=n(556),s=n(65),d=n(62),p=n(92),m=n(79);e.default=function(){var t=Object(l.a)("translation").t,e=Object(c.useState)([]),n=Object(u.a)(e,2),r=n[0],g=n[1],b=new Date,y=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime(),v=new Date(b.getFullYear(),b.getMonth(),1).getTime();Object(c.useEffect)((function(){Object(d.default)("order","get",null).then((function(t){if(t&&200===t.status&&t.data){var e=Object(i.a)(t.data),n=[];e.forEach((function(t){return t.data.forEach(function(){var t=Object(o.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.push(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),g([].concat(n))}else g([])}))}),[]);var h=[{color:"#36a156",title:t("admin.order"),value:r&&0!==r.length?r.filter((function(t){return t.time>=y})).length:0},{color:"#36a156",title:t("admin.day"),value:function(){if(!r||0===r.length)return 0;var t=r.filter((function(t){return t.time>=y})).reduce((function(t,e){return t+e.total}),0);return Object(s.formCurencyVN)(t)}()},{color:"#36a156",title:t("admin.month"),value:function(){if(!r||0===r.length)return 0;var t=r.filter((function(t){return t.time>=v})).reduce((function(t,e){return t+e.total}),0);return Object(s.formCurencyVN)(t)}()},{color:"#36a156",title:t("admin.all"),value:function(){if(!r||0===r.length)return 0;var t=r.reduce((function(t,e){return t+e.total}),0);return Object(s.formCurencyVN)(t)}()}];return f.a.createElement("div",null,f.a.createElement(m.default,null),f.a.createElement("div",{className:"d-flex flex-wrap  justify-content-around",style:{marginTop:"3rem"}},h.map((function(t,e){return f.a.createElement(p.default,{key:"dataTag"+e,data:t})}))))}},530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(46);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},534:function(t,e,n){var r=n(535),a=n(536),o=n(537),i=n(539);t.exports=function(t,e){return r(t)||a(t,e)||o(t,e)||i()}},535:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},536:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}},537:function(t,e,n){var r=n(538);t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},538:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},539:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},556:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(534),a=n.n(r),o=n(45),i=n.n(o),u=n(0),c=n(66);function f(){if(console&&console.warn){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(t=console).warn.apply(t,n)}}var l={};function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];"string"===typeof e[0]&&l[e[0]]||("string"===typeof e[0]&&(l[e[0]]=new Date),f.apply(void 0,e))}function d(t,e,n){t.loadNamespaces(e,(function(){if(t.isInitialized)n();else{t.on("initialized",(function e(){setTimeout((function(){t.off("initialized",e)}),0),n()}))}}))}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return s("i18n.languages were undefined or empty",e.languages),!0;var r=e.languages[0],a=!!e.options&&e.options.fallbackLng,o=e.languages[e.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(t,n){var r=e.services.backendConnector.state["".concat(t,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!i(e.isLanguageChangingTo,t))&&(!!e.hasResourceBundle(r,t)||(!e.services.backendConnector.backend||!(!i(r,t)||a&&!i(o,t))))}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.i18n,r=Object(u.useContext)(c.a)||{},o=r.i18n,i=r.defaultNS,f=n||o||Object(c.d)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new c.b),!f){s("You will need to pass in an i18next instance by using initReactI18next");var l=function(t){return Array.isArray(t)?t[t.length-1]:t},m=[l,{},!1];return m.t=l,m.i18n={},m.ready=!1,m}var b=g(g(g({},Object(c.c)()),f.options.react),e),y=b.useSuspense,v=t||i||f.options&&f.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(v);var h=(f.isInitialized||f.initializedStoreOnce)&&v.every((function(t){return p(t,f,b)}));function O(){return{t:f.getFixedT(null,"fallback"===b.nsMode?v:v[0])}}var j=Object(u.useState)(O()),w=a()(j,2),E=w[0],x=w[1],S=Object(u.useRef)(!0);Object(u.useEffect)((function(){var t=b.bindI18n,e=b.bindI18nStore;function n(){S.current&&x(O())}return S.current=!0,h||y||d(f,v,(function(){S.current&&x(O())})),t&&f&&f.on(t,n),e&&f&&f.store.on(e,n),function(){S.current=!1,t&&f&&t.split(" ").forEach((function(t){return f.off(t,n)})),e&&f&&e.split(" ").forEach((function(t){return f.store.off(t,n)}))}}),[v.join()]);var C=[E.t,f,h];if(C.t=E.t,C.i18n=f,C.ready=h,h)return C;if(!h&&!y)return C;throw new Promise((function(t){d(f,v,(function(){t()}))}))}},62:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n(555),a=n.n(r),o=n(64);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2?arguments[2]:void 0;return a()({method:e,url:"".concat(o.host,"/").concat(t),data:n}).catch((function(t){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(t.config)}))}},64:function(t,e,n){"use strict";n.r(e),n.d(e,"host",(function(){return r}));var r="https://data-mandala.herokuapp.com"},65:function(t,e,n){"use strict";n.r(e),n.d(e,"getSummary",(function(){return r})),n.d(e,"getTotal",(function(){return a})),n.d(e,"getPrice",(function(){return o})),n.d(e,"getQuantity",(function(){return i})),n.d(e,"getKeywordText",(function(){return u})),n.d(e,"getKeywordId",(function(){return c})),n.d(e,"formCurencyVN",(function(){return f}));var r=function(t){return t.map((function(t){return parseInt(t.quantity)*Math.floor(t.price*((100-t.discount)/100))})).reduce((function(t,e){return t+e}),0)},a=function(t,e){return Math.floor(t.price*((100-t.discount)/100))*parseInt(e)},o=function(t){return Math.floor(t.price*((100-t.discount)/100))},i=function(t){return t.map((function(t){return t.quantity})).reduce((function(t,e){return t+e}),0)},u=function(t){return t.toUpperCase().split(" ").filter((function(t){return""!==t})).join("")},c=function(t){return t.toUpperCase().split("-").filter((function(t){return"-"!==t})).join("")};function f(t){return t.toLocaleString("it-IT",{style:"currency",currency:"VND"})}},79:function(t,e,n){"use strict";n.r(e);var r=n(532),a=n.n(r),o=n(7),i=n(533),u=n(530),c=n(0),f=n.n(c),l=n(589),s=n(556),d=n(62),p=n(65);e.default=function(){var t=Object(s.a)("translation").t,e=Object(c.useState)([]),n=Object(u.a)(e,2),r=n[0],m=n[1],g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2020;if(!r||0===r.length)return 0;var n=1===t?12:t-1,a=1===t?e-1:e,o=new Date(a,n).getTime(),i=12===n?new Date(a+1,1,1).getTime():new Date(a,n+1,1).getTime(),u=r.filter((function(t){return t.time>=o&&t.time<=i})).reduce((function(t,e){return t+e.total}),0);return u},b={labels:[t("admin.m1"),t("admin.m2"),t("admin.m3"),t("admin.m4"),t("admin.m5"),t("admin.m6"),t("admin.m7"),t("admin.m8"),t("admin.m9"),t("admin.m10"),t("admin.m11"),t("admin.m12")],datasets:[{label:t("admin.label"),data:[g(1),g(2),g(3),g(4),g(5),g(6),g(7),g(8),g(9),g(10),g(11),g(12)],borderColor:["rgba(54,162,86,0.5)"],backgroundColor:["rgba(54,162,86,0.5)"],pointBackgroundColor:["rgba(54,162,86,0.5)"],pointBorderColor:["rgba(54,162,86,0.5)"]}]},y={legend:{display:!0},cornerRadius:20,scales:{area:[{ticks:{callback:function(t){return Object(p.formCurencyVN)(t)}}}],yAxes:[{ticks:{callback:function(t){return Object(p.formCurencyVN)(t)}}}]}};return Object(c.useEffect)((function(){(function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.default)("order","get",null).then((function(t){if(t&&200===t.status&&t.data){var e=Object(o.a)(t.data),n=[];e.forEach((function(t){return t.data.forEach(function(){var t=Object(i.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.push(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),m([].concat(n))}else m([])}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),f.a.createElement("div",null,f.a.createElement(l.Line,{data:b,options:y}))}},92:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r);e.default=function(t){var e=t.data,n=e.color,r=e.title,o=e.value,i={fontSize:".7rem",color:n,fontWeight:700,textTransform:" uppercase"};return a.a.createElement("div",{style:{width:"360px",paddingTop:"1rem"}},a.a.createElement("div",{style:{height:"100px",backgroundColor:"white",borderRadius:"0.5rem",padding:"20px"},className:"shadow"},a.a.createElement("div",{style:{alignItems:"center"},className:"row"},a.a.createElement("div",{className:"text-center"},a.a.createElement("div",{style:i},r),a.a.createElement("div",{style:{fontSize:"2.25rem",fontWeight:600,color:"#5a5c69"}},o)))))}}}]);
//# sourceMappingURL=59.a90d1b34.chunk.js.map