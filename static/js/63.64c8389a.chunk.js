(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[63,78,79,80,92,101,109,115],{530:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e(46);function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}}(n,t)||Object(r.a)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},534:function(n,t,e){var r=e(535),o=e(536),a=e(537),i=e(539);n.exports=function(n,t){return r(n)||o(n,t)||a(n,t)||i()}},535:function(n,t){n.exports=function(n){if(Array.isArray(n))return n}},536:function(n,t){n.exports=function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}}},537:function(n,t,e){var r=e(538);n.exports=function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}},538:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}},539:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},556:function(n,t,e){"use strict";e.d(t,"a",(function(){return m}));var r=e(534),o=e.n(r),a=e(45),i=e.n(a),u=e(0),c=e(66);function f(){if(console&&console.warn){for(var n,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];"string"===typeof e[0]&&(e[0]="react-i18next:: ".concat(e[0])),(n=console).warn.apply(n,e)}}var s={};function l(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];"string"===typeof t[0]&&s[t[0]]||("string"===typeof t[0]&&(s[t[0]]=new Date),f.apply(void 0,t))}function d(n,t,e){n.loadNamespaces(t,(function(){if(n.isInitialized)e();else{n.on("initialized",(function t(){setTimeout((function(){n.off("initialized",t)}),0),e()}))}}))}function p(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return l("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(n,e){var r=t.services.backendConnector.state["".concat(n,"|").concat(e)];return-1===r||2===r};return!(e.bindI18n&&e.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,n))&&(!!t.hasResourceBundle(r,n)||(!t.services.backendConnector.backend||!(!i(r,n)||o&&!i(a,n))))}function g(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function b(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?g(Object(e),!0).forEach((function(t){i()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function m(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.i18n,r=Object(u.useContext)(c.a)||{},a=r.i18n,i=r.defaultNS,f=e||a||Object(c.d)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new c.b),!f){l("You will need to pass in an i18next instance by using initReactI18next");var s=function(n){return Array.isArray(n)?n[n.length-1]:n},g=[s,{},!1];return g.t=s,g.i18n={},g.ready=!1,g}var m=b(b(b({},Object(c.c)()),f.options.react),t),y=m.useSuspense,v=n||i||f.options&&f.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(v);var h=(f.isInitialized||f.initializedStoreOnce)&&v.every((function(n){return p(n,f,m)}));function O(){return{t:f.getFixedT(null,"fallback"===m.nsMode?v:v[0])}}var j=Object(u.useState)(O()),w=o()(j,2),S=w[0],x=w[1],C=Object(u.useRef)(!0);Object(u.useEffect)((function(){var n=m.bindI18n,t=m.bindI18nStore;function e(){C.current&&x(O())}return C.current=!0,h||y||d(f,v,(function(){C.current&&x(O())})),n&&f&&f.on(n,e),t&&f&&f.store.on(t,e),function(){C.current=!1,n&&f&&n.split(" ").forEach((function(n){return f.off(n,e)})),t&&f&&t.split(" ").forEach((function(n){return f.store.off(n,e)}))}}),[v.join()]);var k=[S.t,f,h];if(k.t=S.t,k.i18n=f,k.ready=h,h)return k;if(!h&&!y)return k;throw new Promise((function(n){d(f,v,(function(){n()}))}))}},62:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return i}));var r=e(555),o=e.n(r),a=e(63);function i(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",e=arguments.length>2?arguments[2]:void 0;return o()({method:t,url:"".concat(a.host,"/").concat(n),data:e}).catch((function(n){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(n.config)}))}},63:function(n,t,e){"use strict";e.r(t),e.d(t,"host",(function(){return r}));var r="https://data-mandala.herokuapp.com"},65:function(n,t,e){"use strict";e.r(t),e.d(t,"getSummary",(function(){return r})),e.d(t,"getTotal",(function(){return o})),e.d(t,"getPrice",(function(){return a})),e.d(t,"getQuantity",(function(){return i})),e.d(t,"getKeywordText",(function(){return u})),e.d(t,"getKeywordId",(function(){return c})),e.d(t,"formCurencyVN",(function(){return f}));var r=function(n){return n.map((function(n){return parseInt(n.quantity)*Math.floor(n.price*((100-n.discount)/100))})).reduce((function(n,t){return n+t}),0)},o=function(n,t){return Math.floor(n.price*((100-n.discount)/100))*parseInt(t)},a=function(n){return Math.floor(n.price*((100-n.discount)/100))},i=function(n){return n.map((function(n){return n.quantity})).reduce((function(n,t){return n+t}),0)},u=function(n){return n.toUpperCase().split(" ").filter((function(n){return""!==n})).join("")},c=function(n){return n.toUpperCase().split("-").filter((function(n){return"-"!==n})).join("")};function f(n){return n.toLocaleString("it-IT",{style:"currency",currency:"VND"})}},79:function(n,t,e){"use strict";e.r(t);var r=e(532),o=e.n(r),a=e(7),i=e(533),u=e(530),c=e(0),f=e.n(c),s=e(589),l=e(556),d=e(62),p=e(65);t.default=function(){var n=Object(l.a)("translation").t,t=Object(c.useState)([]),e=Object(u.a)(t,2),r=e[0],g=e[1],b=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2020;if(!r||0===r.length)return 0;var e=1===n?12:n-1,o=1===n?t-1:t,a=new Date(o,e).getTime(),i=12===e?new Date(o+1,1,1).getTime():new Date(o,e+1,1).getTime(),u=r.filter((function(n){return n.time>=a&&n.time<=i})).reduce((function(n,t){return n+t.total}),0);return u},m={labels:[n("admin.m1"),n("admin.m2"),n("admin.m3"),n("admin.m4"),n("admin.m5"),n("admin.m6"),n("admin.m7"),n("admin.m8"),n("admin.m9"),n("admin.m10"),n("admin.m11"),n("admin.m12")],datasets:[{label:n("admin.label"),data:[b(1),b(2),b(3),b(4),b(5),b(6),b(7),b(8),b(9),b(10),b(11),b(12)],borderColor:["rgba(54,162,86,0.5)"],backgroundColor:["rgba(54,162,86,0.5)"],pointBackgroundColor:["rgba(54,162,86,0.5)"],pointBorderColor:["rgba(54,162,86,0.5)"]}]},y={legend:{display:!0},cornerRadius:20,scales:{area:[{ticks:{callback:function(n){return Object(p.formCurencyVN)(n)}}}],yAxes:[{ticks:{callback:function(n){return Object(p.formCurencyVN)(n)}}}]}};return Object(c.useEffect)((function(){(function(){var n=Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.default)("order","get",null).then((function(n){if(n&&200===n.status&&n.data){var t=Object(a.a)(n.data),e=[];t.forEach((function(n){return n.data.forEach(function(){var n=Object(i.a)(o.a.mark((function n(t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.push(t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())})),g([].concat(e))}else g([])}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),f.a.createElement("div",null,f.a.createElement(s.Line,{data:m,options:y}))}}}]);
//# sourceMappingURL=63.64c8389a.chunk.js.map