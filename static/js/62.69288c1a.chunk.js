(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[62,78,79,80,100,101,108,115],{122:function(e,r,t){"use strict";t.r(r);var n=t(49),a=t(6),o=t(530),s=t(0),i=t.n(s),c=t(556),l=t(71),u=t(48),f=t(62),m=t(2);r.default=Object(m.i)((function(e){var r=Object(c.a)("translation").t,t=Object(s.useState)({firstname:{errorMessage:""},lastname:{errorMessage:""},email:{errorMessage:""},phone:{errorMessage:""},password:{errorMessage:""},confirmPass:{errorMessage:""}}),m=Object(o.a)(t,2),p=m[0],g=m[1],d=Object(s.useRef)(),b=Object(s.useRef)(),v=Object(s.useRef)(),y=Object(s.useRef)(),h=Object(s.useRef)(),E=Object(s.useRef)();Object(s.useEffect)((function(){if(null!==localStorage.getItem("Token")){var e=JSON.parse(localStorage.getItem("Token"));d.current.value=e.firstName,v.current.value=e.lastName,b.current.value=e.email,y.current.value=e.phone}}),[]);var O=function(e){var t=e.target.name,o=function(e,t){if(""===t)return{errorMessage:r("validate.require")};if("email"===e){return null!==/\S+@\S+\.\S+/.exec(t)?{errorMessage:""}:{errorMessage:r("validate.email")}}if("firstname"===e){return null!==/^[a-zA-Z]+$/.exec(t)?{errorMessage:""}:{errorMessage:r("validate.firstname")}}if("lastname"===e){return null!==/^[a-zA-Z]+$/.exec(t)?{errorMessage:""}:{errorMessage:r("validate.lastname")}}if("phone"===e){return null!==/^\d{10}$/.exec(t)?{errorMessage:""}:{errorMessage:r("validate.phone")}}if("password"===e){return null!==/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.exec(t)?{errorMessage:""}:{errorMessage:r("validate.password")}}return"confirmPass"===e?t===h.current.value?{errorMessage:""}:{errorMessage:r("validate.confirm")}:void 0}(t,function(e){switch(e){case"email":return b.current.value;case"firstname":return d.current.value;case"lastname":return v.current.value;case"phone":return y.current.value;case"password":return h.current.value;case"confirmPass":return E.current.value}}(t)).errorMessage,s=Object(a.a)({},p[t]);s.errorMessage=o,g(Object(a.a)(Object(a.a)({},p),{},Object(n.a)({},t,s)))},x=function(){var t={id:JSON.parse(localStorage.getItem("Token")).id,email:b.current.value,firstName:d.current.value,lastName:v.current.value,password:h.current.value,phone:y.current.value,role:"menber"};Object(f.default)("users/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",t).then((function(t){t&&200===t.status?(localStorage.setItem("Token",JSON.stringify(Object(a.a)(Object(a.a)({},t.data),{},{password:"******",role:"***"}))),u.NotificationManager.success(r("profile.success")),e.history.push("/")):u.NotificationManager.error(r("profile.err"))}))};return i.a.createElement("main",null,i.a.createElement("section",{className:"register"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"register__content"},i.a.createElement("div",{className:"register__content__title title-content"},i.a.createElement("h1",{style:{textShadow:"-2px 2px 2px rgba(229,229,229,0.74)",textTransform:"uppercase"}},r("edit-profile"))),i.a.createElement("div",{className:"register__content__form form"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=d.current.value,n=v.current.value,a=b.current.value,o=y.current.value,s=h.current.value,i=E.current.value;if(""!==t&&""!==n&&""!==a&&""!==o&&""!==s&&""!==i){if(s!==i)return u.NotificationManager.warning("Warning message",r("register.pass-again")),!1;x()}else u.NotificationManager.warning(r("register.require"))}},i.a.createElement("div",{className:"register__content__form__title1"},i.a.createElement("h3",{style:{textShadow:"-2px 2px 2px rgba(229,229,229,0.74)"}},r("register.h3"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,r("register.first-name")," ",i.a.createElement("span",null,"*")),i.a.createElement("input",{type:"text",ref:d,name:"firstname",onKeyUp:O}),i.a.createElement(l.default,{errorMessage:p.firstname.errorMessage})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,r("register.last-name")," ",i.a.createElement("span",null,"*")),i.a.createElement("input",{type:"text",ref:v,name:"lastname",onKeyUp:O}),i.a.createElement(l.default,{errorMessage:p.lastname.errorMessage})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,r("register.email")," ",i.a.createElement("span",null,"*")),i.a.createElement("input",{type:"email",ref:b,name:"email",onKeyUp:O,disabled:!0,style:{background:"#b9b9b9c7"}}),i.a.createElement(l.default,{errorMessage:p.email.errorMessage})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,r("register.phone")," ",i.a.createElement("span",null,"*")),i.a.createElement("input",{type:"phone",ref:y,name:"phone",onKeyUp:O}),i.a.createElement(l.default,{errorMessage:p.phone.errorMessage})),i.a.createElement("div",{className:"register__content__form__title2"},i.a.createElement("h3",{style:{textShadow:"-2px 2px 2px rgba(229,229,229,0.74)"}},r("register.info-login"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,r("register.password")," ",i.a.createElement("span",null,"*")),i.a.createElement("input",{type:"password",ref:h,name:"password",onKeyUp:O}),i.a.createElement(l.default,{errorMessage:p.password.errorMessage})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,r("register.confirm")),i.a.createElement("input",{type:"password",ref:E,name:"confirmPass",onKeyUp:O}),i.a.createElement(l.default,{errorMessage:p.confirmPass.errorMessage})),i.a.createElement("div",{className:"register__content__form__btn btn-form"},i.a.createElement("button",{type:"submit",style:{boxShadow:"3px 4px 5px 0px rgba(0,0,0,0.75)"}},r("profile.btn")),i.a.createElement("button",{type:"button",style:{boxShadow:"3px 4px 5px 0px rgba(0,0,0,0.75)"},onClick:function(){return e.history.goBack()}},i.a.createElement("i",{className:"fas fa-reply"}),r("register.btn-back")))))))))}))},530:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var n=t(46);function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return t}}(e,r)||Object(n.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},534:function(e,r,t){var n=t(535),a=t(536),o=t(537),s=t(539);e.exports=function(e,r){return n(e)||a(e,r)||o(e,r)||s()}},535:function(e,r){e.exports=function(e){if(Array.isArray(e))return e}},536:function(e,r){e.exports=function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return t}}},537:function(e,r,t){var n=t(538);e.exports=function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},538:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},539:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},556:function(e,r,t){"use strict";t.d(r,"a",(function(){return b}));var n=t(534),a=t.n(n),o=t(45),s=t.n(o),i=t(0),c=t(66);function l(){if(console&&console.warn){for(var e,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function f(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];"string"===typeof r[0]&&u[r[0]]||("string"===typeof r[0]&&(u[r[0]]=new Date),l.apply(void 0,r))}function m(e,r,t){e.loadNamespaces(r,(function(){if(e.isInitialized)t();else{e.on("initialized",(function r(){setTimeout((function(){e.off("initialized",r)}),0),t()}))}}))}function p(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r.languages||!r.languages.length)return f("i18n.languages were undefined or empty",r.languages),!0;var n=r.languages[0],a=!!r.options&&r.options.fallbackLng,o=r.languages[r.languages.length-1];if("cimode"===n.toLowerCase())return!0;var s=function(e,t){var n=r.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===n||2===n};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!s(r.isLanguageChangingTo,e))&&(!!r.hasResourceBundle(n,e)||(!r.services.backendConnector.backend||!(!s(n,e)||a&&!s(o,e))))}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){s()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.i18n,n=Object(i.useContext)(c.a)||{},o=n.i18n,s=n.defaultNS,l=t||o||Object(c.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new c.b),!l){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[u,{},!1];return g.t=u,g.i18n={},g.ready=!1,g}var b=d(d(d({},Object(c.c)()),l.options.react),r),v=b.useSuspense,y=e||s||l.options&&l.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(y);var h=(l.isInitialized||l.initializedStoreOnce)&&y.every((function(e){return p(e,l,b)}));function E(){return{t:l.getFixedT(null,"fallback"===b.nsMode?y:y[0])}}var O=Object(i.useState)(E()),x=a()(O,2),w=x[0],j=x[1],M=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=b.bindI18n,r=b.bindI18nStore;function t(){M.current&&j(E())}return M.current=!0,h||v||m(l,y,(function(){M.current&&j(E())})),e&&l&&l.on(e,t),r&&l&&l.store.on(r,t),function(){M.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,t)})),r&&l&&r.split(" ").forEach((function(e){return l.store.off(e,t)}))}}),[y.join()]);var N=[w.t,l,h];if(N.t=w.t,N.i18n=l,N.ready=h,h)return N;if(!h&&!v)return N;throw new Promise((function(e){m(l,y,(function(){e()}))}))}},62:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return s}));var n=t(555),a=t.n(n),o=t(63);function s(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",t=arguments.length>2?arguments[2]:void 0;return a()({method:r,url:"".concat(o.host,"/").concat(e),data:t}).catch((function(e){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(e.config)}))}},63:function(e,r,t){"use strict";t.r(r),t.d(r,"host",(function(){return n}));var n="https://data-mandala.herokuapp.com"},71:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n);r.default=function(e){return a.a.createElement("div",{className:"text-left text-danger font-italic"},e.errorMessage)}}}]);
//# sourceMappingURL=62.69288c1a.chunk.js.map