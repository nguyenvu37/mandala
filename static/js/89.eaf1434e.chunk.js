(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[89,109],{113:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(539),c=a.n(r),l=a(7),o=a(540),u=a(46),s=a(0),i=a.n(s),m=a(563),p=a(45),d=a(65),f=a(90),y=a(582),b=a(3),E=a(68),g=a(47);t.default=Object(b.i)((function(e){var t=Object(m.a)("translation").t,a=JSON.parse(localStorage.getItem("idCustomer"))||"",r=Object(s.useState)([]),b=Object(u.a)(r,2),h=b[0],v=b[1],O=Object(s.useState)([]),j=Object(u.a)(O,2),_=j[0],N=j[1],x=Object(s.useState)(0),S=Object(u.a)(x,2),w=S[0],k=S[1],I=Object(g.c)((function(e){return e.addCart}));Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===localStorage.getItem("Token")){e.next=5;break}return e.next=3,Object(d.default)("customers?id=".concat(a),"get",null).then((function(e){e&&200===e.status&&e.data?v(Object(l.a)(e.data)):v([])}));case 3:e.next=7;break;case 5:t=JSON.parse(localStorage.getItem("customers"))||{},v([t]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===localStorage.getItem("Token")){e.next=5;break}return e.next=3,Object(d.default)("carts?userId=".concat(JSON.parse(localStorage.getItem("Token")).id),"get",null).then((function(e){if(e&&200===e.status&&e.data){var t=Object(l.a)(e.data),a=t[0].data,n=Object(E.getSummary)(t[0].data);N(Object(l.a)(a)),k(n)}else N([]),k(0)}));case 3:e.next=8;break;case 5:t=Object(E.getSummary)(I),N(Object(l.a)(I)),k(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[a,I]);var C=function(){var t=Object(o.a)(c.a.mark((function t(){var a,r,l,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===localStorage.getItem("Token")){t.next=8;break}return a=[],t.next=4,_.forEach((function(e){var t=Object(n.a)(Object(n.a)({},e),{},{total:Object(E.getTotal)(e,e.quantity),time:Date.now()});a.push(Object(n.a)({},t))}));case 4:r={id:Object(y.a)(),userId:h[0].userId,fullname:h[0].fullname,data:[].concat(a)},localStorage.setItem("order",JSON.stringify(Object(n.a)({},r))),t.next=13;break;case 8:return l=[],t.next=11,I.forEach((function(e){var t=Object(n.a)(Object(n.a)({},e),{},{total:Object(E.getTotal)(e,e.quantity),time:Date.now()});l.push(Object(n.a)({},t))}));case 11:o={id:Object(y.a)(),userId:h[0].id,fullname:h[0].fullname,data:[].concat(l)},localStorage.setItem("order",JSON.stringify(Object(n.a)({},o)));case 13:e.history.push("/credit-card");case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return i.a.createElement("section",null,i.a.createElement("div",{className:"payment-complete"},_.length>0&&h.length>0?i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"payment-complete__content"},i.a.createElement("div",{className:"payment-complete__content__title title-content"},i.a.createElement("h1",null,t("payment.title"))),i.a.createElement("div",{className:"payment-complete__content__info"},i.a.createElement("div",{className:"payment-complete__content__info__customer"},i.a.createElement("h4",null,t("payment.h4")),i.a.createElement("div",{className:"customer-item"},i.a.createElement("p",{className:"customer-receiver"},t("payment.label1"),":",i.a.createElement("span",null,h[0].fullname))),i.a.createElement("div",{className:"customer-item"},i.a.createElement("p",{className:"customer-address"},t("payment.label2"),":",i.a.createElement("span",null,h[0].address))),i.a.createElement("div",{className:"customer-item"},i.a.createElement("p",{className:"customer-email"},t("payment.label3"),":",i.a.createElement("span",null,h[0].email))),i.a.createElement("div",{className:"customer-item"},i.a.createElement("p",{className:"customer-phone"},t("payment.label4"),":",i.a.createElement("span",null,h[0].phone)))),i.a.createElement("div",{className:"payment-complete__content__info__product"},i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,t("payment.th1")),i.a.createElement("th",null,t("payment.th2")),i.a.createElement("th",null,t("payment.th3")),i.a.createElement("th",null,t("payment.th4")),i.a.createElement("th",null,t("payment.th5")))),i.a.createElement("tbody",null,_.map((function(e,t){return i.a.createElement(f.default,{key:t,data:e})})))),i.a.createElement("div",{className:"payment-complete__content__info__product__total"},i.a.createElement("h4",null,t("payment.sum"),":",i.a.createElement("span",{className:"price",style:{fontSize:"22px",marginLeft:"10px"}},w.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),i.a.createElement("small",null,"\u0111"))),i.a.createElement("span",{className:"price"})),i.a.createElement("div",{className:"payment-complete__content__info__product__btn"},i.a.createElement("button",{className:"back-info",type:"button",onClick:function(){e.history.push("/information-customer")}},i.a.createElement("i",{className:"fas fa-hand-point-left"}),t("payment.btn-back")),i.a.createElement("button",{className:"checkout",type:"button",onClick:C},t("payment.btn-payment")," ")))))):i.a.createElement("div",{className:"box",style:{height:"500px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.a.createElement("h4",null,t("nothing-cart")),i.a.createElement(p.b,{className:"buy",to:"/"},t("buy-now")))))}))},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(563),l=a(113);t.default=function(){var e=Object(c.a)("translation").t;return r.a.createElement("main",null,r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"progressbar"},r.a.createElement("div",{className:"page-payment"},r.a.createElement("span",null,"Step 3: ",e("process.step3")))))),r.a.createElement(l.default,null))}},582:function(e,t,a){"use strict";var n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function c(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var o=function(e){return"string"===typeof e&&l.test(e)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!o(a))throw TypeError("Stringified UUID is invalid");return a};t.a=function(e,t,a){var n=(e=e||{}).random||(e.rng||c)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(var r=0;r<16;++r)t[a+r]=n[r];return t}return i(n)}},68:function(e,t,a){"use strict";a.r(t),a.d(t,"getSummary",(function(){return n})),a.d(t,"getTotal",(function(){return r})),a.d(t,"getPrice",(function(){return c})),a.d(t,"getQuantity",(function(){return l})),a.d(t,"getKeywordText",(function(){return o})),a.d(t,"getKeywordId",(function(){return u})),a.d(t,"formCurencyVN",(function(){return s}));var n=function(e){return e.map((function(e){return parseInt(e.quantity)*Math.floor(e.price*((100-e.discount)/100))})).reduce((function(e,t){return e+t}),0)},r=function(e,t){return Math.floor(e.price*((100-e.discount)/100))*parseInt(t)},c=function(e){return Math.floor(e.price*((100-e.discount)/100))},l=function(e){return e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0)},o=function(e){return e.toUpperCase().split(" ").filter((function(e){return""!==e})).join("")},u=function(e){return e.toUpperCase().split("-").filter((function(e){return"-"!==e})).join("")};function s(e){return e.toLocaleString("it-IT",{style:"currency",currency:"VND"})}},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a(68);t.default=Object(c.i)((function(e){var t=e.data;return r.a.createElement("tr",null,r.a.createElement("td",{style:{textTransform:"uppercase"}},r.a.createElement("img",{src:a(564)("./".concat(t.img)),alt:"",style:{width:"60px"}}),r.a.createElement("h4",null,t.code)),r.a.createElement("td",{style:{width:"200px",padding:"0 5px",cursor:"pointer"},onClick:function(){return a=t.code,void e.history.push("/detail/".concat(a));var a}},t.name),r.a.createElement("td",{style:{minWidtd:"65px"}},r.a.createElement("span",{className:"price"},Object(l.getPrice)(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),r.a.createElement("small",null,"\u0111"))),r.a.createElement("td",{style:{width:"90px"}},t.quantity),r.a.createElement("td",{style:{width:"120px"}},r.a.createElement("span",{className:"price"},Object(l.getTotal)(t,t.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),r.a.createElement("small",null,"\u0111"))))}))}}]);
//# sourceMappingURL=89.eaf1434e.chunk.js.map