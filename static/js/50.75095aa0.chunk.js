(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[50,72,73,76,77,78,79,80,101,107,113,115,120,121,163],{119:function(t,e,n){"use strict";n.r(e);var a=n(539),r=n.n(a),c=n(6),i=n(540),o=n(7),u=n(46),l=n(0),s=n.n(l),f=n(563),d=n(65),m=n(77),p=n(84),b=n(83),g=n(3),y=n(47),A=n(67),E=n(76);e.default=function(){var t=Object(f.a)("translation").t,e=Object(l.useState)([]),n=Object(u.a)(e,2),a=n[0],h=n[1],v=Object(g.g)(),O=Object(y.b)(),j=Object(y.c)((function(t){return t.products.products})),x=Object(y.c)((function(t){return t.totalRow})),N=Object(y.c)((function(t){return t.filters.filters}));Object(l.useEffect)((function(){O(Object(A.actFetchProductRequest)({_limit:6,_page:1,_sort:"date",_order:"desc"})),O(Object(A.actFetchTotalRowsRequest)())}),[O]),Object(l.useEffect)((function(){j.length>0?h(Object(o.a)(j)):h([])}),[j]);var T=function(){var e=Object(i.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}if(!window.confirm(t("admin.delete?"))){e.next=4;break}return e.next=4,Object(d.default)("products/".concat(n),"delete",null).then(Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(Object(A.actFetchProductRequest)(Object(c.a)({},N))),O(Object(A.actFetchTotalRowsRequest)());case 2:case"end":return t.stop()}}),t)}))));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(t){v.push("/admin/product-management/".concat(t))};return s.a.createElement("div",{className:"user-management"},s.a.createElement("div",{className:"card text-center"},s.a.createElement("h5",{className:"card-header bg-secondary text-light",style:{fontSize:"28px",textTransform:"uppercase"}},s.a.createElement("i",{className:"fas fa-users",style:{marginRight:"10px"}}),t("admin.menu3")),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"card-add",style:{float:"left",width:"30%",margin:" 20px 0"}},s.a.createElement(b.default,null)),s.a.createElement("div",{className:"card-search",style:{float:"right",width:"30%",margin:" 20px 0"}},s.a.createElement(m.default,{onSearch:function(t){O(Object(A.actFetchProductRequest)(Object(c.a)(Object(c.a)({},N),{},{q:t}))),O(Object(A.actFetchTotalRowsRequest)({q:t}))}})),a.length>0?s.a.createElement("table",{className:"table table-bordered table-striped"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"bg-light"},s.a.createElement("th",null,t("admin.code")),s.a.createElement("th",null,t("admin.discount")),s.a.createElement("th",null,t("admin.price")),s.a.createElement("th",null,t("admin.category")),s.a.createElement("th",null,t("admin.species")),s.a.createElement("th",null,t("admin.status")),s.a.createElement("th",null,t("admin.action")))),s.a.createElement("tbody",null,a.map((function(t,e){return s.a.createElement(p.default,{key:e+1,data:t,onDeleteItem:T,onEditItem:k})})))):s.a.createElement("div",{className:"nothing-data"},s.a.createElement("h4",null,t("admin.nothing")))),s.a.createElement(E.default,{totalRows:x})))}},172:function(t,e){t.exports="data:image/png;base64,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"},541:function(t,e,n){var a=n(542),r=n(543),c=n(544),i=n(546);t.exports=function(t,e){return a(t)||r(t,e)||c(t,e)||i()}},542:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},543:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(u){r=!0,c=u}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}}},544:function(t,e,n){var a=n(545);t.exports=function(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}},545:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}},546:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},563:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var a=n(541),r=n.n(a),c=n(48),i=n.n(c),o=n(0),u=n(69);function l(){if(console&&console.warn){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(t=console).warn.apply(t,n)}}var s={};function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];"string"===typeof e[0]&&s[e[0]]||("string"===typeof e[0]&&(s[e[0]]=new Date),l.apply(void 0,e))}function d(t,e,n){t.loadNamespaces(e,(function(){if(t.isInitialized)n();else{t.on("initialized",(function e(){setTimeout((function(){t.off("initialized",e)}),0),n()}))}}))}function m(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return f("i18n.languages were undefined or empty",e.languages),!0;var a=e.languages[0],r=!!e.options&&e.options.fallbackLng,c=e.languages[e.languages.length-1];if("cimode"===a.toLowerCase())return!0;var i=function(t,n){var a=e.services.backendConnector.state["".concat(t,"|").concat(n)];return-1===a||2===a};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!i(e.isLanguageChangingTo,t))&&(!!e.hasResourceBundle(a,t)||(!e.services.backendConnector.backend||!(!i(a,t)||r&&!i(c,t))))}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.i18n,a=Object(o.useContext)(u.a)||{},c=a.i18n,i=a.defaultNS,l=n||c||Object(u.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new u.b),!l){f("You will need to pass in an i18next instance by using initReactI18next");var s=function(t){return Array.isArray(t)?t[t.length-1]:t},p=[s,{},!1];return p.t=s,p.i18n={},p.ready=!1,p}var g=b(b(b({},Object(u.c)()),l.options.react),e),y=g.useSuspense,A=t||i||l.options&&l.options.defaultNS;A="string"===typeof A?[A]:A||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(A);var E=(l.isInitialized||l.initializedStoreOnce)&&A.every((function(t){return m(t,l,g)}));function h(){return{t:l.getFixedT(null,"fallback"===g.nsMode?A:A[0])}}var v=Object(o.useState)(h()),O=r()(v,2),j=O[0],x=O[1],N=Object(o.useRef)(!0);Object(o.useEffect)((function(){var t=g.bindI18n,e=g.bindI18nStore;function n(){N.current&&x(h())}return N.current=!0,E||y||d(l,A,(function(){N.current&&x(h())})),t&&l&&l.on(t,n),e&&l&&l.store.on(e,n),function(){N.current=!1,t&&l&&t.split(" ").forEach((function(t){return l.off(t,n)})),e&&l&&e.split(" ").forEach((function(t){return l.store.off(t,n)}))}}),[A.join()]);var T=[j.t,l,E];if(T.t=j.t,T.i18n=l,T.ready=E,E)return T;if(!E&&!y)return T;throw new Promise((function(t){d(l,A,(function(){t()}))}))}},65:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n(562),r=n.n(a),c=n(66);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2?arguments[2]:void 0;return r()({method:e,url:"".concat(c.host,"/").concat(t),data:n}).catch((function(t){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(t.config)}))}},66:function(t,e,n){"use strict";n.r(e),n.d(e,"host",(function(){return a}));var a="https://data-mandala.herokuapp.com"},67:function(t,e,n){"use strict";n.r(e),n.d(e,"actFetchDataHotTrendRequest",(function(){return u})),n.d(e,"actFetchDataHotTrend",(function(){return l})),n.d(e,"actFetchDataNewRequest",(function(){return s})),n.d(e,"actFetchDataNew",(function(){return f})),n.d(e,"actFetchDataDetailRequest",(function(){return d})),n.d(e,"actFetchDataDetail",(function(){return m})),n.d(e,"actFetchProductRequest",(function(){return p})),n.d(e,"actFetchProduct",(function(){return b})),n.d(e,"actFetchTotalRowsRequest",(function(){return g})),n.d(e,"actFetchTotalRows",(function(){return y})),n.d(e,"actFetchFilters",(function(){return A})),n.d(e,"actFetchFilterTotalRow",(function(){return E})),n.d(e,"actLogin",(function(){return h})),n.d(e,"actLogout",(function(){return v})),n.d(e,"actDelCart",(function(){return O})),n.d(e,"actNumCart",(function(){return j})),n.d(e,"actAddCart",(function(){return x})),n.d(e,"actLoading",(function(){return N}));var a=n(7),r=n(2),c=n(549),i=n.n(c),o=n(65),u=function(t){var e=i.a.stringify(t);return function(t){return Object(o.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(l(Object(a.a)(e.data))):t(l([]))}))}},l=function(t){return{type:r.FETCH_DATAHOTTREND,payload:t}},s=function(t){var e=i.a.stringify(t);return function(t){return Object(o.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(f(Object(a.a)(e.data))):t(f([]))}))}},f=function(t){return{type:r.FETCH_DATANEW,payload:t}},d=function(t){return function(e){return Object(o.default)("products?id=".concat(t),"get",null).then((function(t){t&&t.data&&200===t.status?e(m(Object(a.a)(t.data))):e(m([]))}))}},m=function(t){return{type:r.FETCH_DATADETAIL,payload:t}},p=function(t){var e=i.a.stringify(t);return function(n){return Object(o.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?setTimeout((function(){n(N(!1)),n(b(Object(a.a)(e.data))),n(A(t))}),200):n(b([]))}))}},b=function(t){return{type:r.FETCH_PRODUCT,payload:t}},g=function(t){var e=i.a.stringify(t);return function(n){return Object(o.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?(n(y(Object(a.a)(e.data))),n(E(t))):(n(y([])),n(E({})))}))}},y=function(t){return{type:r.FETCH_TOTALROW,payload:t}},A=function(t){return{type:r.FETCH_FILTERS,payload:t}},E=function(t){return{type:r.FETCH_FILTERTOTALROW,payload:t}},h=function(){return{type:r.LOGIN}},v=function(){return{type:r.LOGOUT}},O=function(t){return{type:r.DEL_CART,payload:t}},j=function(t){return{type:r.NUM_CART,payload:t}},x=function(t){return{type:r.CALL_CART,payload:t}},N=function(t){return{type:r.LOADING,payload:t}}},72:function(t,e,n){"use strict";function a(t){for(var e=[],n=0;n<t;n++)e.push(n);return e}n.r(e),n.d(e,"default",(function(){return a}))},76:function(t,e,n){"use strict";n.r(e);var a=n(6),r=n(46),c=n(0),i=n.n(c),o=n(47),u=n(67),l=n(72);e.default=function(t){var e=t.totalRows,n=Object(o.c)((function(t){return t.filters.filters})),s=Object(o.b)(),f=Object(c.useState)({_limit:6,_page:1}),d=Object(r.a)(f,2),m=d[0],p=d[1],b=m._limit,g=m._page,y=Math.ceil(parseInt(e?e.length:0)/b);function A(t){window.scrollTo(0,100),p(Object(a.a)(Object(a.a)({},m),{},{_page:t})),s(Object(u.actFetchProductRequest)(Object(a.a)(Object(a.a)({},n),{},{_page:t}))),s(Object(u.actLoading)(!0))}var E=Object(l.default)(y).map((function(t){var e="";return g===t+1&&(e="active"),i.a.createElement("li",{className:"paginations__item",key:t},i.a.createElement("button",{className:"paginations__item__link ".concat(e),onClick:function(){return A(t+1)}},t+1))}));return i.a.createElement("section",{className:"paginations"},i.a.createElement("ul",null,i.a.createElement("li",{className:"paginations__item"},i.a.createElement("button",{className:"paginations__item__link",disabled:g<=1,onClick:function(){return A(g-1)}},i.a.createElement("i",{className:"fa fa-angle-left"}))),E,i.a.createElement("li",{className:"paginations__item"},i.a.createElement("button",{className:"paginations__item__link",disabled:g>=y,onClick:function(){return A(g+1)}},i.a.createElement("i",{className:"fa fa-angle-right"})))))}},77:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(563);e.default=function(t){var e=Object(c.a)("translation").t,n=t.onSearch,i=Object(a.useRef)();return r.a.createElement("div",{className:"d-flex"},r.a.createElement("span",{className:"btn",style:{transform:"translate(39px, 0)"}},r.a.createElement("i",{className:"fas fa-search"})),r.a.createElement("input",{className:"form-control pl-5",type:"search",placeholder:e("admin.search"),ref:i,onKeyUp:function(){var t=i.current.value;n(t)}}))}},83:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(563),i=n(3);e.default=function(t){var e=Object(c.a)("translation").t,n=Object(i.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-between mb-3"},r.a.createElement("span",{className:"",onClick:function(){n.push("/admin/product-management/add")},style:{textTransform:"uppercase",cursor:"pointer"}},r.a.createElement("i",{className:"fas fa-plus-square"})," ",e("admin.add"))))}},84:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a);e.default=function(t){var e=t.data,a=t.onDeleteItem,c=t.onEditItem,i="#b7457b";return"inStock"===e.status&&(i="green"),r.a.createElement("tr",null,r.a.createElement("td",{style:{maxWidth:"200px",padding:"10px"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"14px"}},r.a.createElement("img",{src:n(564)("./".concat(e.img)),alt:"",style:{width:"20%",margin:"0 auto"}}),r.a.createElement("span",{style:{textTransform:"uppercase"}},e.id),r.a.createElement("span",null,e.name))),r.a.createElement("td",{style:{color:"blue",fontSize:"14px"}},e.discount),r.a.createElement("td",null,r.a.createElement("span",{className:"price"},e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),r.a.createElement("small",null,"\u0111"))),r.a.createElement("td",{style:{fontSize:"14px",textTransform:"uppercase"}},e.category),r.a.createElement("td",{style:{fontSize:"14px",textTransform:"uppercase"}},e.species),r.a.createElement("td",{style:{fontSize:"14px",textTransform:"uppercase"}},r.a.createElement("span",{style:{backgroundColor:i,color:"#fff",padding:"5px"}},e.status)),r.a.createElement("td",null,r.a.createElement("i",{className:"fas fa-edit",style:{color:"blue",marginRight:"10px"},onClick:function(){return c(e.id)}}),r.a.createElement("i",{className:"fas fa-trash-alt",style:{color:"red"},onClick:function(){return a(e.id)}})))}}}]);
//# sourceMappingURL=50.75095aa0.chunk.js.map