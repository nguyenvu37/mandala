(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[11,101,103,109,113,115,119],{144:function(t,e,n){"use strict";n.r(e);var r=n(539),a=n.n(r),o=n(6),i=n(7),c=n(540),u=n(46),l=n(0),s=n.n(l),f=n(563),d=n(68),h=n(65),m=n(77),p=n(99),g=n(78);e.default=function(){var t=Object(f.a)("translation").t,e=Object(l.useState)([]),n=Object(u.a)(e,2),r=n[0],v=n[1],y=Object(l.useState)([]),b=Object(u.a)(y,2),E=b[0],w=b[1],x=Object(l.useState)([]),j=Object(u.a)(x,2),O=j[0],_=j[1],N=Object(l.useState)([]),L=Object(u.a)(N,2),k=L[0],S=L[1],I=Object(l.useState)(0),T=Object(u.a)(I,2),C=T[0],P=T[1],R=Object(l.useState)({_limit:6,_page:1}),K=Object(u.a)(R,2),G=K[0],F=K[1];Object(l.useEffect)((function(){(function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.default)("order","get",null).then((function(t){if(t&&200===t.status&&t.data){var e=[];Object(i.a)(t.data).map((function(t){return t.data.forEach((function(n){n=Object(o.a)(Object(o.a)({},n),{},{username:t.fullname,userId:t.userId}),e.unshift(Object(o.a)({},n))}))})),v([].concat(e)),w(Object(i.a)(t.data)),_([].concat(e))}else v([]),w([]),_([])}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(l.useEffect)((function(){r.length<=0&&S([]);var t=[],e=C+G._limit>=r.length?r.length:C+G._limit;1===r.length&&S(Object(i.a)(r));for(var n=C;n<e;n++)t.push(r[n]);S([].concat(t))}),[r,C,G]);var z=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e){t.next=8;break}n=[],O.forEach((function(t){var r=Object(d.getKeywordId)(t.id),a=Object(d.getKeywordText)(t.username),o=Object(d.getKeywordText)(t.name),i=Object(d.getKeywordText)(t.status),c=Object(d.getKeywordText)(e),u=Object(d.getKeywordId)(e);a.includes(c)&&n.push(t),o.includes(c)&&n.push(t),r.includes(u)&&n.push(t),i.includes(c)&&n.push(t)})),v([].concat(n)),F({_limit:6,_page:1}),P(0),t.next=10;break;case 8:return t.next=10,Object(h.default)("order","get",null).then((function(t){if(t&&200===t.status&&t.data){var e=[];Object(i.a)(t.data).map((function(t){return t.data.forEach((function(n){n=Object(o.a)(Object(o.a)({},n),{},{username:t.fullname,userId:t.userId}),e.push(Object(o.a)({},n))}))})),v([].concat(e)),F({_limit:6,_page:1}),P(0)}else v([]),F({_limit:6,_page:1}),P(0)}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(a.a.mark((function e(n){var c,u,l,s,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=9;break}if(!window.confirm(t("admin.delete?"))){e.next=9;break}return c=r.findIndex((function(t){return t.id===n})),u=r[c].userId,l=E.filter((function(t){return t.userId===u})),s=l[0].data.filter((function(t){return t.id!==n})),f=Object(o.a)(Object(o.a)({},l[0]),{},{data:Object(i.a)(s)}),e.next=9,Object(h.default)("order/".concat(l[0].id),"put",Object(o.a)({},f)).then((function(){var t=r.filter((function(t){return t.id!==n}));v(Object(i.a)(t))}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"order-management"},s.a.createElement("div",{className:"card text-center"},s.a.createElement("h5",{className:"card-header bg-secondary text-light",style:{fontSize:"28px",textTransform:"uppercase"}},s.a.createElement("i",{className:"fas fa-users",style:{marginRight:"10px"}}),t("admin.menu4")),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"card-search",style:{float:"right",width:"30%",margin:" 20px 0"}},s.a.createElement(m.default,{onSearch:z})),k.length>0?s.a.createElement("table",{className:"table table-bordered table-striped"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"bg-light"},s.a.createElement("th",null,t("admin.code")),s.a.createElement("th",null,t("admin.username")),s.a.createElement("th",null,t("admin.quantity")),s.a.createElement("th",null,t("admin.status")),s.a.createElement("th",null,t("admin.total")),s.a.createElement("th",null,t("admin.action")))),s.a.createElement("tbody",null,k.map((function(t,e){return s.a.createElement(p.default,{key:e+1,data:t,onDeleteItem:D})})))):s.a.createElement("div",{className:"nothing-data"},s.a.createElement("h4",null,t("admin.nothing")))),s.a.createElement(g.default,{totalRows:r,pagination:G,onChangePage:function(t){F(Object(o.a)(Object(o.a)({},G),{},{_page:t})),P((t-1)*G._limit)}})))}},539:function(t,e,n){t.exports=n(548)},540:function(t,e,n){"use strict";function r(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,u,"next",t)}function u(t){r(i,a,o,c,u,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return a}))},548:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var s={};function f(){}function d(){}function h(){}var m={};m[a]=function(){return this};var p=Object.getPrototypeOf,g=p&&p(p(O([])));g&&g!==e&&n.call(g,a)&&(m=g);var v=h.prototype=f.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v.constructor=h,h.constructor=d,d.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(b.prototype),b.prototype[o]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),c(v,i,"Generator"),v[a]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},65:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n(562),a=n.n(r),o=n(66);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2?arguments[2]:void 0;return a()({method:e,url:"".concat(o.host,"/").concat(t),data:n}).catch((function(t){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(t.config)}))}},66:function(t,e,n){"use strict";n.r(e),n.d(e,"host",(function(){return r}));var r="https://data-mandala.herokuapp.com"},68:function(t,e,n){"use strict";n.r(e),n.d(e,"getSummary",(function(){return r})),n.d(e,"getTotal",(function(){return a})),n.d(e,"getPrice",(function(){return o})),n.d(e,"getQuantity",(function(){return i})),n.d(e,"getKeywordText",(function(){return c})),n.d(e,"getKeywordId",(function(){return u})),n.d(e,"formCurencyVN",(function(){return l}));var r=function(t){return t.map((function(t){return parseInt(t.quantity)*Math.floor(t.price*((100-t.discount)/100))})).reduce((function(t,e){return t+e}),0)},a=function(t,e){return Math.floor(t.price*((100-t.discount)/100))*parseInt(e)},o=function(t){return Math.floor(t.price*((100-t.discount)/100))},i=function(t){return t.map((function(t){return t.quantity})).reduce((function(t,e){return t+e}),0)},c=function(t){return t.toUpperCase().split(" ").filter((function(t){return""!==t})).join("")},u=function(t){return t.toUpperCase().split("-").filter((function(t){return"-"!==t})).join("")};function l(t){return t.toLocaleString("it-IT",{style:"currency",currency:"VND"})}},72:function(t,e,n){"use strict";function r(t){for(var e=[],n=0;n<t;n++)e.push(n);return e}n.r(e),n.d(e,"default",(function(){return r}))},77:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(563);e.default=function(t){var e=Object(o.a)("translation").t,n=t.onSearch,i=Object(r.useRef)();return a.a.createElement("div",{className:"d-flex"},a.a.createElement("span",{className:"btn",style:{transform:"translate(39px, 0)"}},a.a.createElement("i",{className:"fas fa-search"})),a.a.createElement("input",{className:"form-control pl-5",type:"search",placeholder:e("admin.search"),ref:i,onKeyUp:function(){var t=i.current.value;n(t)}}))}},78:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(563),i=n(72);e.default=function(t){var e=t.totalRows,n=t.pagination,r=t.onChangePage,c=n._limit,u=n._page,l=Math.ceil(parseInt(e?e.length:0)/c),s=Object(i.default)(l),f=Object(o.a)().t;function d(t){window.scrollTo(0,100),r(t)}var h=s.map((function(t){var e="";return u===t+1&&(e="active"),a.a.createElement("li",{className:"paginations__item",key:t},a.a.createElement("button",{className:"paginations__item__link ".concat(e),onClick:function(){return d(t+1)}},t+1))}));return a.a.createElement("section",{className:"paginations"},a.a.createElement("ul",null,a.a.createElement("li",{className:"paginations__item"},a.a.createElement("button",{className:"paginations__item__link",disabled:u<=1,onClick:function(){return d(u-1)}},a.a.createElement("i",{className:"fa fa-angle-left"}),f("prev"))),h,a.a.createElement("li",{className:"paginations__item"},a.a.createElement("button",{className:"paginations__item__link",disabled:u>=l,onClick:function(){return d(u+1)}},f("next"),a.a.createElement("i",{className:"fa fa-angle-right"})))))}},99:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r);e.default=function(t){var e=t.data,r=t.onDeleteItem,o="#b7457b";return"paid"===e.status&&(o="green"),a.a.createElement("tr",null,a.a.createElement("td",{style:{maxWidth:"200px",padding:"10px"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"14px"}},a.a.createElement("img",{src:n(564)("./".concat(e.img)),alt:"",style:{width:"20%",margin:"0 auto"}}),a.a.createElement("span",{style:{color:"#b7457b"}},a.a.createElement("label",null,"ID: "),e.id),a.a.createElement("span",null,e.name))),a.a.createElement("td",{style:{textTransform:"uppercase",fontSize:"14px"}},e.username),a.a.createElement("td",{style:{color:"blue",fontSize:"14px"}},e.quantity),a.a.createElement("td",{style:{fontSize:"14px",textTransform:"uppercase"}},a.a.createElement("span",{style:{color:"#fff",padding:"5px",backgroundColor:o}},e.status)),a.a.createElement("td",{style:{fontSize:"14px"}},a.a.createElement("span",{className:"price"},e.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),a.a.createElement("small",null,"\u0111"))),a.a.createElement("td",null,a.a.createElement("i",{className:"fas fa-trash-alt",style:{color:"red"},onClick:function(){return r(e.id)}})))}}}]);
//# sourceMappingURL=11.c57a8b75.chunk.js.map