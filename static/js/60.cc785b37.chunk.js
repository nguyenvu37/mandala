(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[60,75,77,78,79,80,105,117,118,163],{114:function(e,t,n){"use strict";n.r(t);var a=n(46),r=n(0),i=n.n(r),o=n(91),c=n(92),s=n(93),l=n(94),u=n(3),f=n(563),m={width:"300px",height:"100%",transition:"".concat(.8,"s all")},d={width:"0",height:"0%",transition:"".concat(.8,"s all")},p={position:"fixed",let:0,top:0,height:"100%",width:"250px",backgroundColor:"#88d8da",transition:"".concat(.8,"s all"),transform:"translate(0, 0)",zIndex:3},A={position:"fixed",let:0,top:0,height:"100%",width:"300px",backgroundColor:" #495057",transition:"".concat(.8,"s all"),transform:"translate(-300px, 0)"};t.default=Object(u.i)((function(e){var t=Object(f.a)("translation").t,n=Object(r.useState)(!0),u=Object(a.a)(n,2),g=u[0],b=u[1],v=[{to:"/admin/dashboard",text:t("admin.menu1"),icon:"fa-fw fa-tachometer-alt"},{to:"/admin/user-management",text:t("admin.menu2"),icon:"fa-users"},{to:"/admin/product-management",text:t("admin.menu3"),icon:"fa-globe-africa"},{to:"/admin/order-management",text:t("admin.menu4"),icon:"fa-calendar-check"},{to:"/admin/categories-management",text:t("admin.menu5"),icon:"fas fa-tasks"}],y=JSON.parse(localStorage.getItem("TokenAdmin"));return"/admin/loginAdmin"!==e.location.pathname&&y?i.a.createElement(i.a.Fragment,null,i.a.createElement(o.default,{isShowMenu:g,handerClickShowOffMenu:function(){b(!g)}}),i.a.createElement("div",{style:g?m:d}),i.a.createElement("div",{style:g?p:A},i.a.createElement("div",{style:{width:"100%",padding:"10px"}},i.a.createElement("div",{className:"w-100 text-center"},i.a.createElement(s.default,{adminUser:y}),i.a.createElement("hr",{style:{height:"5px",borderRadius:"3px"},className:"bg-white"})),v.map((function(e,t){return i.a.createElement(c.default,{id:"dataItemMenu"+t,key:"dataItemMenu"+t,data:e})}))),i.a.createElement(l.default,null))):""}))},172:function(e,t){e.exports="data:image/png;base64,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"},541:function(e,t,n){var a=n(542),r=n(543),i=n(544),o=n(546);e.exports=function(e,t){return a(e)||r(e,t)||i(e,t)||o()}},542:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},543:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}}},544:function(e,t,n){var a=n(545);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},545:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},546:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(541),r=n.n(a),i=n(48),o=n.n(i),c=n(0),s=n(69);function l(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var u={};function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),l.apply(void 0,t))}function m(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return f("i18n.languages were undefined or empty",t.languages),!0;var a=t.languages[0],r=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var o=function(e,n){var a=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===a||2===a};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||(!t.services.backendConnector.backend||!(!o(a,e)||r&&!o(i,e))))}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,a=Object(c.useContext)(s.a)||{},i=a.i18n,o=a.defaultNS,l=n||i||Object(s.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new s.b),!l){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[u,{},!1];return p.t=u,p.i18n={},p.ready=!1,p}var g=A(A(A({},Object(s.c)()),l.options.react),t),b=g.useSuspense,v=e||o||l.options&&l.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(v);var y=(l.isInitialized||l.initializedStoreOnce)&&v.every((function(e){return d(e,l,g)}));function h(){return{t:l.getFixedT(null,"fallback"===g.nsMode?v:v[0])}}var x=Object(c.useState)(h()),E=r()(x,2),k=E[0],j=E[1],S=Object(c.useRef)(!0);Object(c.useEffect)((function(){var e=g.bindI18n,t=g.bindI18nStore;function n(){S.current&&j(h())}return S.current=!0,y||b||m(l,v,(function(){S.current&&j(h())})),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){S.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[v.join()]);var O=[k.t,l,y];if(O.t=k.t,O.i18n=l,O.ready=y,y)return O;if(!y&&!b)return O;throw new Promise((function(e){m(l,v,(function(){e()}))}))}},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i={position:"fixed",left:"180px",top:0,transition:"0.8s all",transform:"translate(37px, 0)",zIndex:4},o={position:"fixed",left:"10px",top:0,transition:"0.8s all",zIndex:4};t.default=function(e){var t=e.isShowMenu,n=e.handerClickShowOffMenu;return r.a.createElement("label",{style:t?i:o,onClick:n,className:"btn float-right",id:"btnClicktoggerMenu"},t?r.a.createElement("i",{className:"fa fa-times icon-torate-hover","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-bars icon-torate-hover","aria-hidden":"true"}))}},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(45);t.default=function(e){var t=e.data,n=t.to,a=t.text,o=t.icon,c=e.id;return r.a.createElement("div",{className:"link-iteam-menu",style:{margin:"20px 0"}},r.a.createElement(i.b,{to:n,className:"link-iteam-menu",id:c},r.a.createElement("i",{className:"fa ".concat(o," d-inline ")}),r.a.createElement("label",{style:{textTransform:"capitalize",cursor:"pointer"},htmlFor:c}," ",a)))}},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i={fontSize:"1rem",fontWeight:800,textAlign:"center",textTransform:"uppercase",letterSpacing:".05rem",color:"#fff"};t.default=function(e){var t=e.adminUser,a=t.firstName,o=t.lastName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"avata",src:n(172),style:{width:"100%",marginTop:"20px"}}),r.a.createElement("h5",{style:i},a+" "+o))}},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n(50),c=n(563);t.default=Object(i.i)((function(e){var t=Object(c.a)("translation").t;return r.a.createElement("div",{className:"link-iteam-btn",style:{textAlign:"center"}},r.a.createElement("button",{onClick:function(){window.confirm(t("admin.logout?"))&&(localStorage.removeItem("TokenAdmin"),o.NotificationManager.success(t("admin.success-logout")),e.history.push("/admin"))},className:"btn link-iteam-btn",id:"btnLogout"},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("label",{style:{marginLeft:"0.5rem",cursor:"inherit"},htmlFor:"btnLogout"},t("admin.logout"))))}))}}]);
//# sourceMappingURL=60.cc785b37.chunk.js.map