(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[72,101,113,115,120,121],{119:function(t,e,a){"use strict";a.r(e);var n=a(539),c=a.n(n),r=a(6),u=a(540),l=a(7),i=a(46),o=a(0),s=a.n(o),d=a(563),f=a(65),m=a(77),p=a(84),E=a(83),h=a(3),b=a(47),g=a(67),O=a(76);e.default=function(){var t=Object(d.a)("translation").t,e=Object(o.useState)([]),a=Object(i.a)(e,2),n=a[0],y=a[1],j=Object(h.g)(),T=Object(b.b)(),N=Object(b.c)((function(t){return t.products.products})),_=Object(b.c)((function(t){return t.totalRow})),v=Object(b.c)((function(t){return t.filters.filters}));Object(o.useEffect)((function(){T(Object(g.actFetchProductRequest)({_limit:6,_page:1,_sort:"date",_order:"desc"})),T(Object(g.actFetchTotalRowsRequest)())}),[T]),Object(o.useEffect)((function(){N.length>0?y(Object(l.a)(N)):y([])}),[N]);var R=function(){var e=Object(u.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}if(!window.confirm(t("admin.delete?"))){e.next=4;break}return e.next=4,Object(f.default)("products/".concat(a),"delete",null).then(Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(Object(g.actFetchProductRequest)(Object(r.a)({},v))),T(Object(g.actFetchTotalRowsRequest)());case 2:case"end":return t.stop()}}),t)}))));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(t){j.push("/admin/product-management/".concat(t))};return s.a.createElement("div",{className:"user-management"},s.a.createElement("div",{className:"card text-center"},s.a.createElement("h5",{className:"card-header bg-secondary text-light",style:{fontSize:"28px",textTransform:"uppercase"}},s.a.createElement("i",{className:"fas fa-users",style:{marginRight:"10px"}}),t("admin.menu3")),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"card-add",style:{float:"left",width:"30%",margin:" 20px 0"}},s.a.createElement(E.default,null)),s.a.createElement("div",{className:"card-search",style:{float:"right",width:"30%",margin:" 20px 0"}},s.a.createElement(m.default,{onSearch:function(t){T(Object(g.actFetchProductRequest)(Object(r.a)(Object(r.a)({},v),{},{q:t}))),T(Object(g.actFetchTotalRowsRequest)({q:t}))}})),n.length>0?s.a.createElement("table",{className:"table table-bordered table-striped"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"bg-light"},s.a.createElement("th",null,t("admin.code")),s.a.createElement("th",null,t("admin.discount")),s.a.createElement("th",null,t("admin.price")),s.a.createElement("th",null,t("admin.category")),s.a.createElement("th",null,t("admin.species")),s.a.createElement("th",null,t("admin.status")),s.a.createElement("th",null,t("admin.action")))),s.a.createElement("tbody",null,n.map((function(t,e){return s.a.createElement(p.default,{key:e+1,data:t,onDeleteItem:R,onEditItem:x})})))):s.a.createElement("div",{className:"nothing-data"},s.a.createElement("h4",null,t("admin.nothing")))),s.a.createElement(O.default,{totalRows:_})))}},65:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u}));var n=a(562),c=a.n(n),r=a(66);function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",a=arguments.length>2?arguments[2]:void 0;return c()({method:e,url:"".concat(r.host,"/").concat(t),data:a}).catch((function(t){alert("Error: ERR_CONNECTION_REFUSED Please: Reload Page"),console.log(t.config)}))}},66:function(t,e,a){"use strict";a.r(e),a.d(e,"host",(function(){return n}));var n="https://data-mandala.herokuapp.com"},67:function(t,e,a){"use strict";a.r(e),a.d(e,"actFetchDataHotTrendRequest",(function(){return i})),a.d(e,"actFetchDataHotTrend",(function(){return o})),a.d(e,"actFetchDataNewRequest",(function(){return s})),a.d(e,"actFetchDataNew",(function(){return d})),a.d(e,"actFetchDataDetailRequest",(function(){return f})),a.d(e,"actFetchDataDetail",(function(){return m})),a.d(e,"actFetchProductRequest",(function(){return p})),a.d(e,"actFetchProduct",(function(){return E})),a.d(e,"actFetchTotalRowsRequest",(function(){return h})),a.d(e,"actFetchTotalRows",(function(){return b})),a.d(e,"actFetchFilters",(function(){return g})),a.d(e,"actFetchFilterTotalRow",(function(){return O})),a.d(e,"actLogin",(function(){return y})),a.d(e,"actLogout",(function(){return j})),a.d(e,"actDelCart",(function(){return T})),a.d(e,"actNumCart",(function(){return N})),a.d(e,"actAddCart",(function(){return _})),a.d(e,"actLoading",(function(){return v}));var n=a(7),c=a(2),r=a(549),u=a.n(r),l=a(65),i=function(t){var e=u.a.stringify(t);return function(t){return Object(l.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(o(Object(n.a)(e.data))):t(o([]))}))}},o=function(t){return{type:c.FETCH_DATAHOTTREND,payload:t}},s=function(t){var e=u.a.stringify(t);return function(t){return Object(l.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?t(d(Object(n.a)(e.data))):t(d([]))}))}},d=function(t){return{type:c.FETCH_DATANEW,payload:t}},f=function(t){return function(e){return Object(l.default)("products?id=".concat(t),"get",null).then((function(t){t&&t.data&&200===t.status?e(m(Object(n.a)(t.data))):e(m([]))}))}},m=function(t){return{type:c.FETCH_DATADETAIL,payload:t}},p=function(t){var e=u.a.stringify(t);return function(a){return Object(l.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?setTimeout((function(){a(v(!1)),a(E(Object(n.a)(e.data))),a(g(t))}),200):a(E([]))}))}},E=function(t){return{type:c.FETCH_PRODUCT,payload:t}},h=function(t){var e=u.a.stringify(t);return function(a){return Object(l.default)("products?".concat(e),"get",null).then((function(e){e&&e.data&&200===e.status?(a(b(Object(n.a)(e.data))),a(O(t))):(a(b([])),a(O({})))}))}},b=function(t){return{type:c.FETCH_TOTALROW,payload:t}},g=function(t){return{type:c.FETCH_FILTERS,payload:t}},O=function(t){return{type:c.FETCH_FILTERTOTALROW,payload:t}},y=function(){return{type:c.LOGIN}},j=function(){return{type:c.LOGOUT}},T=function(t){return{type:c.DEL_CART,payload:t}},N=function(t){return{type:c.NUM_CART,payload:t}},_=function(t){return{type:c.CALL_CART,payload:t}},v=function(t){return{type:c.LOADING,payload:t}}},72:function(t,e,a){"use strict";function n(t){for(var e=[],a=0;a<t;a++)e.push(a);return e}a.r(e),a.d(e,"default",(function(){return n}))},76:function(t,e,a){"use strict";a.r(e);var n=a(6),c=a(46),r=a(0),u=a.n(r),l=a(47),i=a(67),o=a(72);e.default=function(t){var e=t.totalRows,a=Object(l.c)((function(t){return t.filters.filters})),s=Object(l.b)(),d=Object(r.useState)({_limit:6,_page:1}),f=Object(c.a)(d,2),m=f[0],p=f[1],E=m._limit,h=m._page,b=Math.ceil(parseInt(e?e.length:0)/E);function g(t){window.scrollTo(0,100),p(Object(n.a)(Object(n.a)({},m),{},{_page:t})),s(Object(i.actFetchProductRequest)(Object(n.a)(Object(n.a)({},a),{},{_page:t}))),s(Object(i.actLoading)(!0))}var O=Object(o.default)(b).map((function(t){var e="";return h===t+1&&(e="active"),u.a.createElement("li",{className:"paginations__item",key:t},u.a.createElement("button",{className:"paginations__item__link ".concat(e),onClick:function(){return g(t+1)}},t+1))}));return u.a.createElement("section",{className:"paginations"},u.a.createElement("ul",null,u.a.createElement("li",{className:"paginations__item"},u.a.createElement("button",{className:"paginations__item__link",disabled:h<=1,onClick:function(){return g(h-1)}},u.a.createElement("i",{className:"fa fa-angle-left"}))),O,u.a.createElement("li",{className:"paginations__item"},u.a.createElement("button",{className:"paginations__item__link",disabled:h>=b,onClick:function(){return g(h+1)}},u.a.createElement("i",{className:"fa fa-angle-right"})))))}},77:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(563);e.default=function(t){var e=Object(r.a)("translation").t,a=t.onSearch,u=Object(n.useRef)();return c.a.createElement("div",{className:"d-flex"},c.a.createElement("span",{className:"btn",style:{transform:"translate(39px, 0)"}},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("input",{className:"form-control pl-5",type:"search",placeholder:e("admin.search"),ref:u,onKeyUp:function(){var t=u.current.value;a(t)}}))}},83:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(563),u=a(3);e.default=function(t){var e=Object(r.a)("translation").t,a=Object(u.g)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex justify-content-between mb-3"},c.a.createElement("span",{className:"",onClick:function(){a.push("/admin/product-management/add")},style:{textTransform:"uppercase",cursor:"pointer"}},c.a.createElement("i",{className:"fas fa-plus-square"})," ",e("admin.add"))))}},84:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n);e.default=function(t){var e=t.data,n=t.onDeleteItem,r=t.onEditItem,u="#b7457b";return"inStock"===e.status&&(u="green"),c.a.createElement("tr",null,c.a.createElement("td",{style:{maxWidth:"200px",padding:"10px"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"14px"}},c.a.createElement("img",{src:a(564)("./".concat(e.img)),alt:"",style:{width:"20%",margin:"0 auto"}}),c.a.createElement("span",{style:{textTransform:"uppercase"}},e.id),c.a.createElement("span",null,e.name))),c.a.createElement("td",{style:{color:"blue",fontSize:"14px"}},e.discount),c.a.createElement("td",null,c.a.createElement("span",{className:"price"},e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),c.a.createElement("small",null,"\u0111"))),c.a.createElement("td",{style:{fontSize:"14px",textTransform:"uppercase"}},e.category),c.a.createElement("td",{style:{fontSize:"14px",textTransform:"uppercase"}},e.species),c.a.createElement("td",{style:{fontSize:"14px",textTransform:"uppercase"}},c.a.createElement("span",{style:{backgroundColor:u,color:"#fff",padding:"5px"}},e.status)),c.a.createElement("td",null,c.a.createElement("i",{className:"fas fa-edit",style:{color:"blue",marginRight:"10px"},onClick:function(){return r(e.id)}}),c.a.createElement("i",{className:"fas fa-trash-alt",style:{color:"red"},onClick:function(){return n(e.id)}})))}}}]);
//# sourceMappingURL=72.88448237.chunk.js.map