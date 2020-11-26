(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[93,109],{120:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(556),l=a(99);e.default=function(){var t=Object(c.a)("translation").t;return r.a.createElement("main",null,r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"progressbar"},r.a.createElement("div",{className:"page-cart"},r.a.createElement("span",null,"Step 1: ",t("process.step1")))))),r.a.createElement(l.default,null))}},65:function(t,e,a){"use strict";a.r(e),a.d(e,"getSummary",(function(){return n})),a.d(e,"getTotal",(function(){return r})),a.d(e,"getPrice",(function(){return c})),a.d(e,"getQuantity",(function(){return l})),a.d(e,"getKeywordText",(function(){return u})),a.d(e,"getKeywordId",(function(){return i})),a.d(e,"formCurencyVN",(function(){return o}));var n=function(t){return t.map((function(t){return parseInt(t.quantity)*Math.floor(t.price*((100-t.discount)/100))})).reduce((function(t,e){return t+e}),0)},r=function(t,e){return Math.floor(t.price*((100-t.discount)/100))*parseInt(e)},c=function(t){return Math.floor(t.price*((100-t.discount)/100))},l=function(t){return t.map((function(t){return t.quantity})).reduce((function(t,e){return t+e}),0)},u=function(t){return t.toUpperCase().split(" ").filter((function(t){return""!==t})).join("")},i=function(t){return t.toUpperCase().split("-").filter((function(t){return"-"!==t})).join("")};function o(t){return t.toLocaleString("it-IT",{style:"currency",currency:"VND"})}},83:function(t,e,a){"use strict";a.r(e);var n=a(532),r=a.n(n),c=a(7),l=a(6),u=a(533),i=a(530),o=a(0),s=a.n(o),m=a(556),d=a(44),f=a(64),b=a(2),p=a(65);e.default=Object(b.i)((function(t){var e=Object(m.a)("translation").t,n=t.data,b=t.onChangeQuantity,O=t.onDeleteElement,j=Object(o.useRef)(),g=Object(o.useState)(0),h=Object(i.a)(g,2),y=h[0],E=h[1],v=Object(d.c)((function(t){return t.addCart})),x=Object(d.b)();Object(o.useEffect)((function(){j.current.value=parseInt(n.quantity),E(Object(p.getTotal)(n,n.quantity))}),[n]);var N=function(){var t=Object(u.a)(r.a.mark((function t(e){var a,u,i,o,s,m;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.current.value>0?(a=Object(p.getTotal)(n,j.current.value),null!==localStorage.getItem("Token")?(u=Object(l.a)(Object(l.a)({},n),{},{quantity:parseInt(j.current.value)}),b(Object(l.a)({},u))):(i=v.findIndex((function(t){return t.id===e})),v[i]=Object(l.a)(Object(l.a)({},v[i]),{},{quantity:parseInt(j.current.value)}),x(Object(f.actAddCart)(Object(c.a)(v))),x(Object(f.actNumCart)(j.current.value))),E(a)):(o=Object(p.getTotal)(n,1),j.current.value=1,null!==localStorage.getItem("Token")?(s=Object(l.a)(Object(l.a)({},n),{},{quantity:parseInt(j.current.value)}),b(Object(l.a)({},s))):(m=v.findIndex((function(t){return t.id===e})),v[m]=Object(l.a)(Object(l.a)({},v[m]),{},{quantity:parseInt(j.current.value)}),x(Object(f.actAddCart)(Object(c.a)(v))),x(Object(f.actNumCart)(j.current.value))),E(o));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(u.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!==localStorage.getItem("Token")?window.confirm(e("want-del"))&&O(a):window.confirm(e("want-del"))&&(n=v.filter((function(t){return t.id!==a})),x(Object(f.actAddCart)(Object(c.a)(n))),x(Object(f.actDelCart)(a)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{style:{textTransform:"uppercase"}},s.a.createElement("img",{src:a(557)("./".concat(n.img)),alt:"",style:{width:"60px"}}),s.a.createElement("h4",null,n.code)),s.a.createElement("td",{style:{width:"200px",padding:"0 5px",cursor:"pointer"},onClick:function(){return e=n.code,void t.history.push("/detail/".concat(e));var e}},n.name),s.a.createElement("td",{style:{minWidtd:"65px"}},s.a.createElement("span",{className:"price"},Object(p.getPrice)(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),s.a.createElement("small",null,"\u0111"))),s.a.createElement("td",{style:{width:"90px"}},s.a.createElement("input",{type:"number",id:n.id,ref:j,style:{width:"50px",padding:"2px"},onChange:function(){return N(n.id)}})),s.a.createElement("td",{style:{width:"120px"}},s.a.createElement("span",{className:"price"},y.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),s.a.createElement("small",null,"\u0111"))),s.a.createElement("td",null,s.a.createElement("i",{className:"fas fa-trash-alt",onClick:function(){return S(n.id)},style:{cursor:"pointer"}}))))}))},99:function(t,e,a){"use strict";a.r(e);var n=a(6),r=a(532),c=a.n(r),l=a(7),u=a(533),i=a(530),o=a(0),s=a.n(o),m=a(556),d=a(44),f=a(43),b=a(62),p=a(83),O=a(2),j=a(64),g=a(65);e.default=Object(O.i)((function(t){var e=Object(m.a)("translation").t,a=Object(o.useState)([]),r=Object(i.a)(a,2),O=r[0],h=r[1],y=Object(o.useState)(0),E=Object(i.a)(y,2),v=E[0],x=E[1],N=Object(o.useState)([]),S=Object(i.a)(N,2),w=S[0],C=S[1],k=Object(d.c)((function(t){return t.numCart.num})),I=Object(d.c)((function(t){return t.delCart.id})),T=Object(d.c)((function(t){return t.addCart})),_=Object(d.b)();Object(o.useEffect)((function(){if(null!==localStorage.getItem("Token")){(function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.default)("carts?userId=".concat(JSON.parse(localStorage.getItem("Token")).id),"get",null).then((function(t){if(t&&200===t.status)if(t.data.length>0){var e=Object(l.a)(t.data)[0].data,a=Object(g.getSummary)(e);h(Object(l.a)(e)),x(a),C(Object(l.a)(t.data))}else h([]),x(0),C([])}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}else{var t=Object(g.getSummary)(T);x(t),h(Object(l.a)(T))}}),[k,I,T]);var q=function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm(e("del-all"))){t.next=8;break}if(null===localStorage.getItem("Token")){t.next=6;break}return t.next=4,Object(b.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"delete",null).then((function(){_(Object(j.actDelCart)(JSON.parse(localStorage.getItem("Token")).id))}));case 4:t.next=8;break;case 6:_(Object(j.actAddCart)([])),_(Object(j.actDelCart)(1));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(t){var e=O.findIndex((function(e){return e.id===t.id}));O[e]=Object(n.a)(Object(n.a)({},O[e]),{},{quantity:parseInt(t.quantity)});var a=Object(n.a)(Object(n.a)({},w[0]),{},{data:Object(l.a)(O)});Object(b.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",Object(n.a)({},a)).then((function(){_(Object(j.actNumCart)(O[e].quantity))}))},J=function(t){var e=O.filter((function(e){return e.id!==t})),a=Object(n.a)(Object(n.a)({},w[0]),{},{data:Object(l.a)(e)});Object(b.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",Object(n.a)({},a)).then((function(){_(Object(j.actDelCart)(t))}))};return s.a.createElement("section",{className:"cart",style:{minHeight:"500px"}},O.length>0?s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"cart__content"},s.a.createElement("div",{className:"cart__content__title"},s.a.createElement("h1",null,e("cart.title"))),s.a.createElement("div",{className:"cart__content__table"},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,e("cart.th1")),s.a.createElement("th",null,e("cart.th2")),s.a.createElement("th",null,e("cart.th3")),s.a.createElement("th",null,e("cart.th4")),s.a.createElement("th",null,e("cart.th5")),s.a.createElement("th",null,e("cart.th6")))),O.map((function(t,e){return s.a.createElement(p.default,{key:e,data:t,onChangeQuantity:D,onDeleteElement:J})})))),s.a.createElement("div",{className:"cart__content__total",style:{marginTop:"20px"}},s.a.createElement("h4",null,e("cart.h4"),":"," ",s.a.createElement("span",{className:"price",style:{fontSize:"22px",marginLeft:"10px"}},v.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),s.a.createElement("small",null,"\u0111"))),s.a.createElement("span",{className:"price"})),s.a.createElement("div",{className:"cart__content__btn"},s.a.createElement("button",{className:"buying",type:"button",onClick:function(){t.history.push("/")}},e("cart.btn-goon")),s.a.createElement("button",{className:"delete",type:"button",onClick:q},e("cart.btn-del")),s.a.createElement("button",{className:"payment",type:"button",onClick:function(){t.history.push("/information-customer")}},e("cart.btn-payment"))))):s.a.createElement("div",{className:"box",style:{height:"500px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},s.a.createElement("h4",null,e("nothing-cart")),s.a.createElement(f.c,{className:"buy",to:"/"},e("buy-now"))))}))}}]);
//# sourceMappingURL=93.4435c9cb.chunk.js.map