(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[35,49,78,79,80,88,101,102,108,111,115],{134:function(e,t,r){"use strict";r.r(t);var n=r(51),a=r(6),o=r(46),c=r(0),u=r.n(c),i=r(563),s=r(74),l=r(50),f=r(65),d=r(582),p=r(47),m=r(67),g=r(3),y=r(73),v=r(20);t.default=Object(g.i)((function(e){var t=Object(i.a)("translation").t,r=Object(p.b)(),g=Object(p.c)((function(e){return e.users.loggedIn})),b=Object(c.useState)({firstname:{errorMessage:""},lastname:{errorMessage:""},email:{errorMessage:""},phone:{errorMessage:""},password:{errorMessage:""},confirmPass:{errorMessage:""}}),h=Object(o.a)(b,2),O=h[0],j=h[1],E=Object(c.useState)(!0),x=Object(o.a)(E,2),w=x[0],S=x[1],N=Object(c.useState)(!1),A=Object(o.a)(N,2),T=A[0],C=A[1];Object(c.useEffect)((function(){var e=setTimeout((function(){S(!1)}),500);return function(){return clearTimeout(e)}}),[]);var M=Object(c.useRef)(),_=Object(c.useRef)(),F=Object(c.useRef)(),R=Object(c.useRef)(),I=Object(c.useRef)(),k=Object(c.useRef)(),U=function(e){var t=e.target.name,r=Object(y.validateInput)(t,Object(y.getValueInput)(t,_,M,F,R,I,k),I.current.value).errorMessage,o=Object(a.a)({},O[t]);o.errorMessage=r,j(Object(a.a)(Object(a.a)({},O),{},Object(n.a)({},t,o)))},D=function(){Object(f.default)("users?email=".concat(_.current.value),"get",null).then((function(e){return 0===e.data.length?(L(),!1):(l.NotificationManager.warning(t("register.email-exist")),!0)}))},L=function(){var e={id:Object(d.a)(),email:_.current.value,firstName:M.current.value,lastName:F.current.value,password:I.current.value,phone:R.current.value,role:"menber"};Object(f.default)("users","Post",e).then((function(e){e&&201===e.status?(localStorage.setItem("Token",JSON.stringify(Object(a.a)(Object(a.a)({},e.data),{},{password:"******",role:"***"}))),l.NotificationManager.success(t("register.success")),setTimeout((function(){C(!1),r(Object(m.actLogin)())}),500)):l.NotificationManager.error(t("resgiter.err"))}))};return g||null!==localStorage.getItem("Token")?(e.history.goBack(),null):u.a.createElement("main",null,w?u.a.createElement("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},u.a.createElement(v.default,null)):u.a.createElement("section",{className:"register"},u.a.createElement("div",{className:"box"},u.a.createElement("div",{className:"register__content"},u.a.createElement("div",{className:"register__content__title title-content"},u.a.createElement("h1",{style:{textShadow:"-2px 2px 2px rgba(229,229,229,0.74)"}},t("register.h1"))),u.a.createElement("div",{className:"register__content__form form"},u.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=M.current.value,n=F.current.value,a=_.current.value,o=R.current.value,c=I.current.value,u=k.current.value;if(""!==r&&""!==n&&""!==a&&""!==o&&""!==c&&""!==u){if(c!==u)return l.NotificationManager.warning(t("register.pass-again")),!1;D(),C(!0)}else l.NotificationManager.warning(t("register.require")),C(!1)}},u.a.createElement("div",{className:"register__content__form__title1"},u.a.createElement("h3",{style:{textShadow:"-2px 2px 2px rgba(229,229,229,0.74)"}},t("register.h3"))),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,t("register.first-name")," ",u.a.createElement("span",null,"*")),u.a.createElement("input",{type:"text",ref:M,name:"firstname",onKeyUp:U}),u.a.createElement(s.default,{errorMessage:O.firstname.errorMessage})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,t("register.last-name")," ",u.a.createElement("span",null,"*")),u.a.createElement("input",{type:"text",ref:F,name:"lastname",onKeyUp:U}),u.a.createElement(s.default,{errorMessage:O.lastname.errorMessage})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,t("register.email")," ",u.a.createElement("span",null,"*")),u.a.createElement("input",{type:"email",ref:_,name:"email",onKeyUp:U}),u.a.createElement(s.default,{errorMessage:O.email.errorMessage})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,t("register.phone")," ",u.a.createElement("span",null,"*")),u.a.createElement("input",{type:"phone",ref:R,name:"phone",onKeyUp:U}),u.a.createElement(s.default,{errorMessage:O.phone.errorMessage})),u.a.createElement("div",{className:"register__content__form__title2"},u.a.createElement("h3",{style:{textShadow:"-2px 2px 2px rgba(229,229,229,0.74)"}},t("register.info-login"))),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,t("register.password")," ",u.a.createElement("span",null,"*")),u.a.createElement("input",{type:"password",ref:I,name:"password",onKeyUp:U}),u.a.createElement(s.default,{errorMessage:O.password.errorMessage})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,t("register.confirm")),u.a.createElement("input",{type:"password",ref:k,name:"confirmPass",onKeyUp:U}),u.a.createElement(s.default,{errorMessage:O.confirmPass.errorMessage})),u.a.createElement("div",{className:"register__content__form__btn btn-form"},u.a.createElement("button",{type:"submit",style:{boxShadow:"3px 4px 5px 0px rgba(0,0,0,0.75)"}},T?u.a.createElement("div",{className:"btn-view"},u.a.createElement(v.default,null)):t("register.btn-register")),u.a.createElement("button",{type:"button",style:{boxShadow:"3px 4px 5px 0px rgba(0,0,0,0.75)"},onClick:function(){return e.history.goBack()}},u.a.createElement("i",{className:"fas fa-reply"}),t("register.btn-back")))))))))}))},538:function(e,t,r){var n=r(547);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},541:function(e,t,r){var n=r(542),a=r(543),o=r(544),c=r(546);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||c()}},542:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},543:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}}},544:function(e,t,r){var n=r(545);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},545:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},546:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},547:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},549:function(e,t,r){"use strict";var n=r(551),a=r(552),o=r(550),c=r(559),u=r(560),i=r(561);function s(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function f(e,t){return t.decode?u(e):e}function d(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){var t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"===typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===r?r:f(r,e);n[t]=a};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var c,u=a(e.split("&"));try{for(u.s();!(c=u.n()).done;){var l=c.value,d=i(t.decode?l.replace(/\+/g," "):l,"="),p=n(d,2),g=p[0],y=p[1];y=void 0===y?null:["comma","separator"].includes(t.arrayFormat)?y:f(y,t),r(f(g,t),y,o)}}catch(w){u.e(w)}finally{u.f()}for(var v=0,b=Object.keys(o);v<b.length;v++){var h=b[v],O=o[h];if("object"===typeof O&&null!==O)for(var j=0,E=Object.keys(O);j<E.length;j++){var x=E[j];O[x]=m(O[x],t)}else o[h]=m(O,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var r=o[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=p,t.parse=g,t.stringify=function(e,t){if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&(null===(n=e[r])||void 0===n)||t.skipEmptyString&&""===e[r];var n},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[l(t,e),"[",a,"]"].join("")]:[[l(t,e),"[",l(a,e),"]=",l(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[l(t,e),"[]"].join("")]:[[l(t,e),"[]=",l(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null===n||void 0===n||0===n.length?r:0===r.length?[[l(t,e),"=",l(n,e)].join("")]:[[r,l(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[l(t,e)]:[[l(t,e),"=",l(n,e)].join("")])}}}}(t),a={},c=0,u=Object.keys(e);c<u.length;c++){var i=u[c];r(i)||(a[i]=e[i])}var f=Object.keys(a);return!1!==t.sort&&f.sort(t.sort),f.map((function(r){var a=e[r];return void 0===a?"":null===a?l(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):l(r,t)+"="+l(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=i(e,"#"),a=n(r,2),o=a[0],c=a[1];return Object.assign({url:o.split("?")[0]||"",query:g(p(e),t)},t&&t.parseFragmentIdentifier&&c?{fragmentIdentifier:f(c,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=d(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),c=Object.assign(o,e.query),u=t.stringify(c,r);u&&(u="?".concat(u));var i=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(i="#".concat(l(e.fragmentIdentifier,r))),"".concat(n).concat(u).concat(i)}},550:function(e,t,r){var n=r(556),a=r(557),o=r(538),c=r(558);e.exports=function(e){return n(e)||a(e)||o(e)||c()}},551:function(e,t,r){var n=r(553),a=r(554),o=r(538),c=r(555);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||c()}},552:function(e,t,r){var n=r(538);e.exports=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,c=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(u)throw o}}}}},553:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},554:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}}},555:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},556:function(e,t,r){var n=r(547);e.exports=function(e){if(Array.isArray(e))return n(e)}},557:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},558:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},559:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},560:function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function c(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=a.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var o=c(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(e)}r["%C2"]="\ufffd";for(var u=Object.keys(r),i=0;i<u.length;i++){var s=u[i];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},561:function(e,t,r){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},563:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(541),a=r.n(n),o=r(48),c=r.n(o),u=r(0),i=r(69);function s(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var l={};function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&l[t[0]]||("string"===typeof t[0]&&(l[t[0]]=new Date),s.apply(void 0,t))}function d(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return f("i18n.languages were undefined or empty",t.languages),!0;var n=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var c=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!t.services.backendConnector.backend||!(!c(n,e)||a&&!c(o,e))))}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,n=Object(u.useContext)(i.a)||{},o=n.i18n,c=n.defaultNS,s=r||o||Object(i.d)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new i.b),!s){f("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},m=[l,{},!1];return m.t=l,m.i18n={},m.ready=!1,m}var y=g(g(g({},Object(i.c)()),s.options.react),t),v=y.useSuspense,b=e||c||s.options&&s.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(b);var h=(s.isInitialized||s.initializedStoreOnce)&&b.every((function(e){return p(e,s,y)}));function O(){return{t:s.getFixedT(null,"fallback"===y.nsMode?b:b[0])}}var j=Object(u.useState)(O()),E=a()(j,2),x=E[0],w=E[1],S=Object(u.useRef)(!0);Object(u.useEffect)((function(){var e=y.bindI18n,t=y.bindI18nStore;function r(){S.current&&w(O())}return S.current=!0,h||v||d(s,b,(function(){S.current&&w(O())})),e&&s&&s.on(e,r),t&&s&&s.store.on(t,r),function(){S.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,r)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,r)}))}}),[b.join()]);var N=[x.t,s,h];if(N.t=x.t,N.i18n=s,N.ready=h,h)return N;if(!h&&!v)return N;throw new Promise((function(e){d(s,b,(function(){e()}))}))}},582:function(e,t,r){"use strict";var n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function o(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"===typeof e&&c.test(e)},i=[],s=0;s<256;++s)i.push((s+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!u(r))throw TypeError("Stringified UUID is invalid");return r};t.a=function(e,t,r){var n=(e=e||{}).random||(e.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return l(n)}},65:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var n=r(562),a=r.n(n),o=r(66);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",r=arguments.length>2?arguments[2]:void 0;return a()({method:t,url:"".concat(o.host,"/").concat(e),data:r}).catch((function(e){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(e.config)}))}},66:function(e,t,r){"use strict";r.r(t),r.d(t,"host",(function(){return n}));var n="https://data-mandala.herokuapp.com"},67:function(e,t,r){"use strict";r.r(t),r.d(t,"actFetchDataHotTrendRequest",(function(){return i})),r.d(t,"actFetchDataHotTrend",(function(){return s})),r.d(t,"actFetchDataNewRequest",(function(){return l})),r.d(t,"actFetchDataNew",(function(){return f})),r.d(t,"actFetchDataDetailRequest",(function(){return d})),r.d(t,"actFetchDataDetail",(function(){return p})),r.d(t,"actFetchProductRequest",(function(){return m})),r.d(t,"actFetchProduct",(function(){return g})),r.d(t,"actFetchTotalRowsRequest",(function(){return y})),r.d(t,"actFetchTotalRows",(function(){return v})),r.d(t,"actFetchFilters",(function(){return b})),r.d(t,"actFetchFilterTotalRow",(function(){return h})),r.d(t,"actLogin",(function(){return O})),r.d(t,"actLogout",(function(){return j})),r.d(t,"actDelCart",(function(){return E})),r.d(t,"actNumCart",(function(){return x})),r.d(t,"actAddCart",(function(){return w})),r.d(t,"actLoading",(function(){return S}));var n=r(7),a=r(2),o=r(549),c=r.n(o),u=r(65),i=function(e){var t=c.a.stringify(e);return function(e){return Object(u.default)("products?".concat(t),"get",null).then((function(t){t&&t.data&&200===t.status?e(s(Object(n.a)(t.data))):e(s([]))}))}},s=function(e){return{type:a.FETCH_DATAHOTTREND,payload:e}},l=function(e){var t=c.a.stringify(e);return function(e){return Object(u.default)("products?".concat(t),"get",null).then((function(t){t&&t.data&&200===t.status?e(f(Object(n.a)(t.data))):e(f([]))}))}},f=function(e){return{type:a.FETCH_DATANEW,payload:e}},d=function(e){return function(t){return Object(u.default)("products?id=".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(p(Object(n.a)(e.data))):t(p([]))}))}},p=function(e){return{type:a.FETCH_DATADETAIL,payload:e}},m=function(e){var t=c.a.stringify(e);return function(r){return Object(u.default)("products?".concat(t),"get",null).then((function(t){t&&t.data&&200===t.status?setTimeout((function(){r(S(!1)),r(g(Object(n.a)(t.data))),r(b(e))}),200):r(g([]))}))}},g=function(e){return{type:a.FETCH_PRODUCT,payload:e}},y=function(e){var t=c.a.stringify(e);return function(r){return Object(u.default)("products?".concat(t),"get",null).then((function(t){t&&t.data&&200===t.status?(r(v(Object(n.a)(t.data))),r(h(e))):(r(v([])),r(h({})))}))}},v=function(e){return{type:a.FETCH_TOTALROW,payload:e}},b=function(e){return{type:a.FETCH_FILTERS,payload:e}},h=function(e){return{type:a.FETCH_FILTERTOTALROW,payload:e}},O=function(){return{type:a.LOGIN}},j=function(){return{type:a.LOGOUT}},E=function(e){return{type:a.DEL_CART,payload:e}},x=function(e){return{type:a.NUM_CART,payload:e}},w=function(e){return{type:a.CALL_CART,payload:e}},S=function(e){return{type:a.LOADING,payload:e}}},71:function(e,t,r){"use strict";r.r(t),r.d(t,"email",(function(){return n})),r.d(t,"firstname",(function(){return a})),r.d(t,"lastname",(function(){return o})),r.d(t,"phone",(function(){return c})),r.d(t,"password",(function(){return u})),r.d(t,"fullname",(function(){return i})),r.d(t,"address",(function(){return s}));var n=/\S+@\S+\.\S+/,a=/^[a-zA-Z]+$/,o=/^[a-zA-Z]+$/,c=/^\d{10}$/,u=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,i=/^[a-zA-Z ]+$/,s=/^[a-zA-Z0-9\s,-]*$/},73:function(e,t,r){"use strict";r.r(t),r.d(t,"validateInput",(function(){return o})),r.d(t,"getValueInput",(function(){return c})),r.d(t,"getTranslationCategory",(function(){return u}));var n=r(38),a=r(71),o=function(e,t,r){return""===t?{errorMessage:n.a.t("validate.require")}:"email"===e?null!==a.email.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.email")}:"firstname"===e?null!==a.firstname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.firstname")}:"lastname"===e?null!==a.lastname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.lastname")}:"phone"===e?null!==a.phone.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.phone")}:"password"===e?null!==a.password.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.password")}:"confirmPass"===e?t===r?{errorMessage:""}:{errorMessage:n.a.t("validate.confirm")}:"fullname"===e?null!==a.fullname.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.fullname")}:"address"===e?null!==a.address.exec(t)?{errorMessage:""}:{errorMessage:n.a.t("validate.address")}:void 0},c=function(e,t,r,n,a,o,c,u,i){switch(e){case"email":return t.current.value;case"firstname":return r.current.value;case"lastname":return n.current.value;case"phone":return a.current.value;case"password":return o.current.value;case"confirmPass":return c.current.value;case"fullname":return u.current.value;case"address":return i.current.value}},u=function(e){switch(e){case"cosmetic":return n.a.t("grid.category1");case"makeup":return n.a.t("grid.category2");case"perfume":return n.a.t("grid.category3");case"lotions":return n.a.t("grid.menu1_1");case"mask":return n.a.t("grid.menu1_2");case"cleanser":return n.a.t("grid.menu1_3");case"lipstick":return n.a.t("grid.menu2_1");case"mascara":return n.a.t("grid.menu2_2");case"blusher":return n.a.t("grid.menu2_3");default:return e}}},74:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n);t.default=function(e){return a.a.createElement("div",{className:"text-left text-danger font-italic"},e.errorMessage)}}}]);
//# sourceMappingURL=35.6e6008d6.chunk.js.map