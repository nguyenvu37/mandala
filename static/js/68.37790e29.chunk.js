(this.webpackJsonpmandala=this.webpackJsonpmandala||[]).push([[68,109],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(556),o=n(2),c=n(175),l=n.n(c),s=n(177),u=n.n(s),d=n(176),p=n.n(d),m=n(44),f=n(63);t.default=Object(o.i)((function(e){var t=Object(i.a)("translation").t,n=Object(m.b)(),a=Object(m.b)(),o=function(){n(Object(f.actFetchProductRequest)({_limit:6,_page:1})),a(Object(f.actFetchTotalRowsRequest)({})),e.history.push("/grid")};return r.a.createElement("div",{className:"offers"},r.a.createElement("div",{className:"offers__title"},t("offers.title")),r.a.createElement("div",{className:"offers__content"},r.a.createElement("div",{className:"offers__content__item",style:{background:"url(".concat(l.a,")  no-repeat center center"),cursor:"pointer"},onClick:o},r.a.createElement("h2",null,t("offers.discount1")),r.a.createElement("p",null,t("offers.content1"))),r.a.createElement("div",{className:"offers__content__item",style:{background:"url(".concat(u.a,")  no-repeat center center"),cursor:"pointer"},onClick:o},r.a.createElement("h2",null,t("offers.discount2")),r.a.createElement("p",null,t("offers.content2"))),r.a.createElement("div",{className:"offers__content__item",style:{background:"url(".concat(p.a,")  no-repeat center center"),cursor:"pointer"},onClick:o},r.a.createElement("h2",null,t("offers.discount3")),r.a.createElement("p",null,t("offers.content3")))))}))},105:function(e,t,n){"use strict";n.r(t);var a=n(532),r=n.n(a),i=n(6),o=n(533),c=n(0),l=n.n(c),s=n(556),u=n(44),d=n(571),p=n.n(d),m=n(63),f=n(2),b=n(67),v=n(62),h=n(20),y=n(72),g=n(65);t.default=Object(f.i)((function(e){var t=Object(s.a)("translation").t,a=Object(u.b)(),d=e.dataHot;Object(c.useEffect)((function(){a(Object(m.actFetchDataHotTrendRequest)({hot:"hot"}))}),[a]);var f={dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:3e3,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return l.a.createElement("div",{className:"hot-trend"},0!==d.length?l.a.createElement("div",{className:"product"},l.a.createElement("div",{className:"product__title"},l.a.createElement("div",{className:"product__title__name"},t("hotTrend.title"))),l.a.createElement("div",{className:"product__items"},l.a.createElement(p.a,f,d.map((function(t,a){return l.a.createElement("div",{className:"product__items__detail",key:a+1,style:{position:"relative"}},l.a.createElement("img",{src:n(557)("./".concat(t.img)),alt:""}),l.a.createElement("div",{className:"product__items__detail__content detail-content"},l.a.createElement("h4",{style:{textTransform:"uppercase"}},t.manufacturer),l.a.createElement("button",{onClick:function(){return n=t.id,function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.findIndex((function(e){return e.id===n})),e.next=3,Object(v.default)("products/".concat(n),"put",Object(i.a)(Object(i.a)({},d[t]),{},{view:d[t].view+1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),void e.history.push("/detail/".concat(n));var n},style:{border:"0",backgroundColor:"#fff",cursor:"pointer",fontSize:"14px",outline:"none",height:"70px",padding:"0 5px"}},t.name),l.a.createElement("span",{className:"price"},Object(g.getPrice)(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l.a.createElement("small",null,"\u0111")),l.a.createElement("span",{className:"price old",style:{textDecoration:"line-through"}},t.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l.a.createElement("small",null,"\u0111"))),l.a.createElement("div",{className:"discount-item",style:{position:"absolute",top:"5px",right:"0",fontFamily:"Timenewroman",fontSize:"13px",fontWeight:"700",background:"red",padding:"5px 20px",color:"#fff",boxShadow:"3px 3px 5px 0px rgba(0,0,0,0.75)"}},t.discount,"%"),l.a.createElement("div",{className:"product__items__detail__icon"},l.a.createElement(b.default,{rate:t.rating,data:t})))})))),l.a.createElement(y.default,{filter:"hot"})):l.a.createElement("div",{className:"product",style:{width:"100%"}},l.a.createElement("div",{className:"product__title"},l.a.createElement("div",{className:"product__title__name"},t("hotTrend.title"))),l.a.createElement(h.default,{custom:{position:"absolute",left:"50%"}})))}))},106:function(e,t,n){"use strict";n.r(t);var a=n(532),r=n.n(a),i=n(6),o=n(533),c=n(0),l=n.n(c),s=n(556),u=n(44),d=n(571),p=n.n(d),m=n(63),f=n(67),b=n(62),v=n(2),h=n(20),y=n(72),g=n(65);t.default=Object(v.i)((function(e){var t=Object(s.a)("translation").t,a=Object(u.b)(),d=e.dataNewProducts;Object(c.useEffect)((function(){a(Object(m.actFetchDataNewRequest)({new:"new"}))}),[a]);var v={dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:2e3,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return 0!==d.length?l.a.createElement("div",{className:"product"},l.a.createElement("div",{className:"product__title"},l.a.createElement("div",{className:"product__title__name"},t("newProduct.title"))),l.a.createElement("div",{className:"product__items"},l.a.createElement(p.a,v,d&&d.map((function(t,a){return l.a.createElement("div",{className:"product__items__detail",key:a+1,style:{position:"relative"}},l.a.createElement("img",{src:n(557)("./".concat(t.img)),alt:""}),l.a.createElement("div",{className:"product__items__detail__content detail-content"},l.a.createElement("h4",{style:{textTransform:"uppercase"}},t.manufacturer),l.a.createElement("button",{onClick:function(){return n=t.id,function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.findIndex((function(e){return e.id===n})),e.next=3,Object(b.default)("products/".concat(n),"put",Object(i.a)(Object(i.a)({},d[t]),{},{view:d[t].view+1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),void e.history.push("/detail/".concat(n));var n},style:{border:"0",backgroundColor:"#fff",cursor:"pointer",fontSize:"14px",outline:"none",padding:"0 5px",height:"70px"}},t.name),l.a.createElement("span",{className:"price"},Object(g.getPrice)(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l.a.createElement("small",null,"\u0111")),l.a.createElement("span",{className:"price old",style:{textDecoration:"line-through"}},t.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l.a.createElement("small",null,"\u0111"))),l.a.createElement("div",{className:"discount-item",style:{position:"absolute",top:"5px",right:"0",fontFamily:"Timenewroman",fontSize:"13px",fontWeight:"700",background:"red",padding:"5px 20px",color:"#fff",boxShadow:"3px 3px 5px 0px rgba(0,0,0,0.75)"}},t.discount,"%"),l.a.createElement("div",{className:"product__items__detail__icon"},l.a.createElement(f.default,{rate:t.rating,data:t})))})))),l.a.createElement(y.default,{filter:"new"})):l.a.createElement("div",{className:"product",style:{width:"100%"}},l.a.createElement("div",{className:"product__title"},l.a.createElement("div",{className:"product__title__name"},t("newProduct.title"))),l.a.createElement(h.default,{custom:{position:"absolute",left:"50%"}}))}))},107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(581),o=n.n(i),c=n(171),l=n.n(c),s=n(172),u=n.n(s),d=n(173),p=n.n(d),m=n(556),f=n(44),b=n(63),v=n(2);t.default=Object(v.i)((function(e){var t=Object(m.a)("translation").t,n=Object(f.b)(),a=Object(f.b)(),i=[{title:t("banner.titleBanner1"),button:t("banner.shopNow"),image:l.a,color:"#789629",ml:"150px",manufacturer:"green"},{title:t("banner.titleBanner2"),button:t("shopNow"),image:u.a,color:"#fff",left:"13%",top:"-15%",ml:"100px",manufacturer:"enesti"},{title:t("banner.titleBanner3"),button:t("banner.shopNow"),image:p.a,color:"#fff",left:"10%",top:"-30%",ml:"100px",manufacturer:"laneige"}];return r.a.createElement(o.a,{autoplay:5e3},i.map((function(t,i){return r.a.createElement("div",{key:i,style:{background:"url(".concat(t.image,") no-repeat center center"),backgroundSize:"cover"}},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"center showcase",style:{marginLeft:"".concat(t.left),marginTop:"".concat(t.top)}},r.a.createElement("h1",{style:{color:"".concat(t.color)}},t.title),r.a.createElement("button",{style:{marginLeft:"".concat(t.ml)},onClick:function(){return r=t.manufacturer,n(Object(b.actFetchProductRequest)({_limit:6,_page:1,manufacturer:r})),a(Object(b.actFetchTotalRowsRequest)({manufacturer:r})),void e.history.push("/list");var r}},t.button)))))})))}))},108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(556),o=n(174),c=n.n(o);t.default=function(){var e=Object(i.a)("translation").t;return r.a.createElement("div",{className:"visit"},r.a.createElement("div",{className:"visit__title"},e("visit.title")),r.a.createElement("div",{className:"visit__content",style:{width:"80%",margin:"0 auto",borderRadius:"10px",position:"relative"}},r.a.createElement("div",{className:"visit__content__background",style:{background:"url(".concat(c.a,") no-repeat center center"),height:"400px",margin:"0 auto",border:"1px solid #fff",borderRadius:"10px",backgroundSize:"cover"}},r.a.createElement("div",{className:"visit__content__wrapper",style:{position:"absolute",top:"20%",left:"5%",background:"#fff",width:"200px",padding:"20px 10px 40px",borderRadius:"10px",textAlign:"center",fontFamily:"UTMAvoBold"}},r.a.createElement("h3",{style:{fontFamily:"Lobster, cursive",fontSize:"25px"}},e("visit.h3")),r.a.createElement("div",{className:"visit__content__wrapper__schedule",style:{marginTop:"10px"}},r.a.createElement("font",{style:{verticalAlign:"inherit"}},e("visit.mon"),": 10: 00-18: 00"," "),r.a.createElement("br",null),r.a.createElement("font",{style:{verticalAlign:"inherit"}},e("visit.tue"),": 10: 00-18: 00"," "),r.a.createElement("br",null),r.a.createElement("font",{style:{verticalAlign:"inherit"}},e("visit.wed"),": 10: 00-18: 00"," "),r.a.createElement("br",null),r.a.createElement("font",{style:{verticalAlign:"inherit"}},e("visit.thu"),": 10: 00-18: 00"," "),r.a.createElement("br",null),r.a.createElement("font",{style:{verticalAlign:"inherit"}},e("visit.fri"),": 10: 00-18: 00"," "),r.a.createElement("br",null),r.a.createElement("font",{style:{verticalAlign:"inherit"}},e("visit.sat"),": 10: 00-18: 00"," "))))))}},124:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(530),i=n(0),o=n.n(i),c=n(556),l=n(44),s=n(104),u=n(105),d=n(106),p=n(107),m=n(108);t.default=function(){var e=Object(c.a)().t,t=Object(l.c)((function(e){return e.products.hotTrend})),f=Object(l.c)((function(e){return e.products.newProduct})),b=Object(i.useState)([]),v=Object(r.a)(b,2),h=v[0],y=v[1],g=Object(i.useState)([]),E=Object(r.a)(g,2),O=E[0],j=E[1];return Object(i.useEffect)((function(){0!==t.length&&y(Object(a.a)(t)),0!==f.length&&j(Object(a.a)(f))}),[t,f]),o.a.createElement("main",{style:{position:"relative"}},o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"background__img"},o.a.createElement(p.default,null))),o.a.createElement("section",null,o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"policy"},o.a.createElement("div",{className:"policy__transport"},o.a.createElement("img",{src:n(184),alt:""}),o.a.createElement("p",null,e("policy.policy1"))),o.a.createElement("div",{className:"policy__gift"},o.a.createElement("img",{src:n(183),alt:""}),o.a.createElement("p",null,e("policy.policy2"))),o.a.createElement("div",{className:"policy__discount"},o.a.createElement("img",{src:n(185),alt:""}),o.a.createElement("p",null,e("policy.policy3")))))),o.a.createElement(u.default,{dataHot:h}),o.a.createElement(s.default,null),o.a.createElement(d.default,{dataNewProducts:O}),o.a.createElement(m.default,null))}},581:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=n(0)},function(e,t,n){"use strict";n.r(t),n.d(t,"HORIZONTAL",(function(){return b})),n.d(t,"VERTICAL",(function(){return v}));var a=n(0),r=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="previous",f="next",b="horizontal",v="vertical",h={previousButton:"previousButton",nextButton:"nextButton",buttonDisabled:"disabled",track:"track",slide:"slide",hidden:"hidden",previous:"previous",current:"current",next:"next",animateIn:"animateIn",animateOut:"animateOut"},y={up:"rotate(90 10 15)",down:"rotate(270 10 15)",left:"rotate(180 10 15)",right:"rotate(0 10 15)"};function g(e){var t=e.direction,n=void 0===t?"right":t;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"30",viewBox:"0 0 20 30"},r.a.createElement("polygon",{fill:"#000",points:"20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30",transform:y[n]}))}var E=function(e){function t(e){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=s(t).call(this,e),n=!a||"object"!==i(a)&&"function"!=typeof a?u(this):a,p(u(n),"setupAutoplay",(function(){n.props.autoplay&&!n.isMouseOver&&(n.stopAutoplay(),n.autoplayTimerId=setInterval(n.next,parseInt(n.props.autoplay,10)))})),p(u(n),"stopAutoplay",(function(){n.autoplayTimerId&&clearInterval(n.autoplayTimerId)})),p(u(n),"onAnimationEnd",(function(){n.setState({currentSlideIndex:n.nextSlideIndex,animating:!1,animation:void 0}),n.setupAutoplay(),"function"==typeof n.props.onSlideChange&&n.props.onSlideChange({slideIndex:n.nextSlideIndex})})),p(u(n),"isDisabled",(function(){return n.slideCount<2||n.state.animating||n.props.disabled})),p(u(n),"isInfinite",(function(){return n.slideCount>2&&!1!==n.props.infinite})),p(u(n),"canGoPrevious",(function(){return n.isInfinite()||n.state.currentSlideIndex>0})),p(u(n),"canGoNext",(function(){return n.isInfinite()||n.state.currentSlideIndex<n.slideCount-1})),p(u(n),"goTo",(function(e,t){if(!n.isDisabled()){n.nextSlideIndex=e,n.setState({animating:!0,animation:t});var a=n.props.duration||2e3;n.animationTimerId=setTimeout(n.onAnimationEnd,a)}})),p(u(n),"previous",(function(){if(n.canGoPrevious()){var e=n.state.currentSlideIndex-1,t=e>=0?e:n.slideCount-1;n.goTo(t,m)}})),p(u(n),"next",(function(){if(n.canGoNext()){var e=(n.state.currentSlideIndex+1)%n.slideCount;n.goTo(e,f)}})),p(u(n),"getSlideClass",(function(e){var t=n.state,a=t.currentSlideIndex,r=t.animation,i=n.getClassNames(),o=n.slideCount-1;return e===a?r?"".concat(i.animateOut," ").concat(i[r]):i.current:2===n.slideCount?r?"".concat(i.animateIn," ").concat(i[r]):e<a?i.previous:i.next:e===a-1||0===a&&e===o?r===m?"".concat(i.animateIn," ").concat(i.previous):r===f?i.hidden:i.previous:e===a+1||0===e&&a===o?r===f?"".concat(i.animateIn," ").concat(i.next):r===m?i.hidden:i.next:i.hidden})),p(u(n),"isSwiping",!1),p(u(n),"sliderRef",void 0),p(u(n),"pageStartPosition",void 0),p(u(n),"currentElement",void 0),p(u(n),"currentElementStartPosition",void 0),p(u(n),"currentElementPosition",void 0),p(u(n),"previousElement",void 0),p(u(n),"previousElementStartPosition",void 0),p(u(n),"previousElementPosition",void 0),p(u(n),"nextElement",void 0),p(u(n),"nextElementStartPosition",void 0),p(u(n),"nextElementPosition",void 0),p(u(n),"handleTouchStart",(function(e){if(!n.isDisabled()){n.stopAutoplay();var t=n.getClassNames(),a=t.current,r=t.previous,i=t.next,o=e.touches[0];n.isSwiping=!0,n.pageStartPosition=o[n.swipeEventProperty],n.currentElement=n.sliderRef.getElementsByClassName(a)[0],n.previousElement=n.sliderRef.getElementsByClassName(r)[0],n.nextElement=n.sliderRef.getElementsByClassName(i)[0];var c=n.currentElement.getBoundingClientRect()[n.swipeProperty];n.currentElementStartPosition=0,n.currentElementPosition=0,n.currentElement.style.transition="none",n.previousElement&&(n.previousElement.style.transition="none",n.previousElement.style.visibility="visible",n.previousElementStartPosition=n.previousElement.getBoundingClientRect()[n.swipeProperty]-c),n.nextElement&&(n.nextElement.style.visibility="visible",n.nextElement.style.transition="none",n.nextElementStartPosition=n.nextElement.getBoundingClientRect()[n.swipeProperty]-c)}})),p(u(n),"animating",!1),p(u(n),"handleTouchMove",(function(e){e.preventDefault(),n.animating=n.animating||requestAnimationFrame((function(){if(n.isSwiping){var t=e.touches[0][n.swipeEventProperty]-n.pageStartPosition;n.currentElementPosition=n.currentElementStartPosition+t,n.currentElement.style[n.swipeProperty]="".concat(n.currentElementPosition,"px"),n.previousElement&&(n.previousElementPosition=n.previousElementStartPosition+t,n.previousElement.style[n.swipeProperty]="".concat(n.previousElementPosition,"px")),n.nextElement&&(n.nextElementPosition=n.nextElementStartPosition+t,n.nextElement.style[n.swipeProperty]="".concat(n.nextElementPosition,"px")),n.animating=!1}else n.animating=!1}))})),p(u(n),"handleTouchEnd",(function(){n.animating=!1,n.isSwiping=!1,n.currentElement.style.removeProperty(n.swipeProperty),n.currentElement.style.removeProperty("transition"),n.previousElement&&(n.previousElement.style.removeProperty("visibility"),n.previousElement.style.removeProperty("transition"),n.previousElement.style.removeProperty(n.swipeProperty)),n.nextElement&&(n.nextElement.style.removeProperty("visibility"),n.nextElement.style.removeProperty("transition"),n.nextElement.style.removeProperty(n.swipeProperty));var e=n.currentElementStartPosition-n.currentElementPosition,t=n.props.minSwipeOffset||15;Math.abs(e)>t?e<0?n.previous():n.next():n.setupAutoplay()})),p(u(n),"getClassNames",(function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h,{},n.props.classNames)})),p(u(n),"initTouchEvents",(function(e){!n.isDisabled()&&e&&(n.sliderRef=e,n.sliderRef.addEventListener("touchstart",n.handleTouchStart),n.sliderRef.addEventListener("touchmove",n.handleTouchMove,{passive:!1}),n.sliderRef.addEventListener("touchend",n.handleTouchEnd))})),p(u(n),"handleMouseOver",(function(){n.isMouseOver=!0,n.stopAutoplay()})),p(u(n),"handleMouseOut",(function(){n.isMouseOver=!1,n.setupAutoplay()}));var r=n.props,o=r.slideIndex,l=void 0===o?0:o,d=r.direction,v=void 0===d?b:d;return n.state={currentSlideIndex:l,animating:!1},n.direction=v,n.swipeProperty=v===b?"left":"top",n.swipeEventProperty=v===b?"clientX":"clientY",n}var n,a,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,v=[{key:"getDerivedStateFromProps",value:function(e,t){var n=r.a.Children.count(e.children);return t.currentSlideIndex>=n?{currentSlideIndex:0}:null}}],(a=[{key:"componentDidMount",value:function(){this.setupAutoplay()}},{key:"componentWillUnmount",value:function(){this.stopAutoplay(),this.animationTimerId&&clearTimeout(this.animationTimerId)}},{key:"render",value:function(){var e=this;this.slideCount=r.a.Children.count(this.props.children);var t=this.props,n=t.children,a=t.className,i=void 0===a?"slider":a,c=t.previousButton,l=void 0===c?r.a.createElement(g,{direction:this.direction===b?"left":"down"}):c,s=t.nextButton,u=void 0===s?r.a.createElement(g,{direction:this.direction===b?"right":"up"}):s,d=t.touchDisabled,p=t.autoplay,m=this.getClassNames(),f=this.isDisabled();return r.a.createElement("div",o({className:m.slider||i},!d&&{ref:this.initTouchEvents},p&&{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),r.a.createElement("a",{onClick:this.previous,className:"".concat(m.previousButton).concat(f||!this.canGoPrevious()?" ".concat(m.buttonDisabled):"")},l),r.a.createElement("a",{onClick:this.next,className:"".concat(m.nextButton).concat(f||!this.canGoNext()?" ".concat(m.buttonDisabled):"")},u),r.a.createElement("div",{className:m.track},r.a.Children.map(n,(function(t,n){return r.a.cloneElement(t,{key:n,className:[m.slide,e.getSlideClass(n),t.props.className].filter((function(e){return e})).join(" ")})}))))}}])&&l(n.prototype,a),v&&l(n,v),t}(r.a.PureComponent);t.default=E}])},65:function(e,t,n){"use strict";n.r(t),n.d(t,"getSummary",(function(){return a})),n.d(t,"getTotal",(function(){return r})),n.d(t,"getPrice",(function(){return i})),n.d(t,"getQuantity",(function(){return o})),n.d(t,"getKeywordText",(function(){return c})),n.d(t,"getKeywordId",(function(){return l})),n.d(t,"formCurencyVN",(function(){return s}));var a=function(e){return e.map((function(e){return parseInt(e.quantity)*Math.floor(e.price*((100-e.discount)/100))})).reduce((function(e,t){return e+t}),0)},r=function(e,t){return Math.floor(e.price*((100-e.discount)/100))*parseInt(t)},i=function(e){return Math.floor(e.price*((100-e.discount)/100))},o=function(e){return e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0)},c=function(e){return e.toUpperCase().split(" ").filter((function(e){return""!==e})).join("")},l=function(e){return e.toUpperCase().split("-").filter((function(e){return"-"!==e})).join("")};function s(e){return e.toLocaleString("it-IT",{style:"currency",currency:"VND"})}},67:function(e,t,n){"use strict";n.r(t);var a=n(532),r=n.n(a),i=n(7),o=n(533),c=n(6),l=n(530),s=n(0),u=n.n(s),d=n(556),p=n(567),m=n.n(p),f=n(62),b=n(574),v=n(44),h=n(47),y=n.n(h),g=n(63),E=n(65),O=n(565);t.default=function(e){var t=Object(d.a)("translation").t,n=Object(s.useState)(e.rate),a=Object(l.a)(n,2),p=a[0],h=a[1],j=Object(s.useState)(!1),_=Object(l.a)(j,2),x=_[0],w=_[1],N=Object(v.c)((function(e){return e.users.loggedIn})),S=e.quanDetail,P=Object(v.c)((function(e){return e.addCart})),T=Object(v.b)(),k=Object(v.b)(),C=function(){var n=Object(o.a)(r.a.mark((function n(){var a,o,l,s,u,d,p,m;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=e.data,o={id:Object(b.a)(),code:a.id,name:a.name,img:a.img,price:a.price,discount:a.discount,quantity:void 0!==S?parseInt(S):1,status:"unpaid"},y.a.success(t("inCart.success")),!N&&!localStorage.getItem("Token")){n.next=9;break}return n.next=6,Object(f.default)("carts?userId=".concat(JSON.parse(localStorage.getItem("Token")).id),"get",null).then((function(e){if(e&&200===e.status){var t=Object(i.a)(e.data);if(t.length){var n=t[0].data;if(n.length>0){var r=n.findIndex((function(e){return e.code===a.id}));if(-1!==r){n[r]=Object(c.a)(Object(c.a)({},n[r]),{},{quantity:void 0!==S?parseInt(S):n[r].quantity+1});var l=Object(c.a)(Object(c.a)({},t[0]),{},{data:Object(i.a)(n)});Object(f.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",Object(c.a)({},l)).then((function(){k(Object(g.actNumCart)(n[r].quantity++))}))}else{var s=Object(c.a)(Object(c.a)({},t[0]),{},{data:[Object(c.a)({},o)].concat(Object(i.a)(n))});Object(f.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",Object(c.a)({},s)),k(Object(g.actDelCart)(n[0].id))}}else{var u=Object(c.a)(Object(c.a)({},t[0]),{},{data:[Object(c.a)({},o)]});Object(f.default)("carts/".concat(JSON.parse(localStorage.getItem("Token")).id),"put",Object(c.a)({},u)).then((function(){k(Object(g.actNumCart)(u.data[0].quantity))}))}}else{var d={id:JSON.parse(localStorage.getItem("Token")).id,userId:JSON.parse(localStorage.getItem("Token")).id,data:[Object(c.a)({},o)]};Object(f.default)("carts","post",Object(c.a)({},d)).then((function(){k(Object(g.actNumCart)(d.data[0].quantity++))}))}}}));case 6:P.length?-1!==(l=P.findIndex((function(e){return e.code===a.id})))?(P[l]=Object(c.a)(Object(c.a)({},P[l]),{},{quantity:void 0!==S?S:P[l].quantity+1}),T(Object(g.actAddCart)(Object(i.a)(P))),k(Object(g.actNumCart)(Object(E.getQuantity)(Object(i.a)(P))))):(s=Object(c.a)({},o),P.unshift(Object(c.a)({},s)),T(Object(g.actAddCart)(Object(i.a)(P))),k(Object(g.actNumCart)(Object(E.getQuantity)(Object(i.a)(P))))):(u=Object(c.a)({},o),P.push(Object(c.a)({},u)),T(Object(g.actAddCart)(Object(i.a)(P))),k(Object(g.actNumCart)(1))),n.next=10;break;case 9:P.length?-1!==(d=P.findIndex((function(e){return e.code===a.id})))?(P[d]=Object(c.a)(Object(c.a)({},P[d]),{},{quantity:void 0!==S?S:P[d].quantity+1}),T(Object(g.actAddCart)(Object(i.a)(P))),k(Object(g.actNumCart)(Object(E.getQuantity)(Object(i.a)(P))))):(p=Object(c.a)({},o),P.unshift(Object(c.a)({},p)),T(Object(g.actAddCart)(Object(i.a)(P))),k(Object(g.actNumCart)(Object(E.getQuantity)(Object(i.a)(P))))):(m=Object(c.a)({},o),P.push(Object(c.a)({},m)),T(Object(g.actAddCart)(Object(i.a)(P))),k(Object(g.actNumCart)(1)));case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return u.a.createElement("div",{className:"item-buying"},u.a.createElement("button",{type:"button",className:"add-cart",onClick:C},t("addToCart")),u.a.createElement("button",{className:"link-btn",onClick:function(){w(!x)}},u.a.createElement("i",{className:"fas fa-heart"})),u.a.createElement(O.FacebookProvider,{appId:"iTPKQIka"},u.a.createElement("div",{className:"fb-share-button","data-href":"http://localhost:3000","data-layout":"button","data-size":"large"},u.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&src=sdkpreparse",className:"fb-xfbml-parse-ignore"},t("share")))),x?u.a.createElement("div",{className:"rating"},u.a.createElement(m.a,{rating:p,starRatedColor:"#789629",changeRating:function(t){var n=(e.rate+parseInt(t))/2;Object(f.default)("products/".concat(e.data.id),"put",Object(c.a)(Object(c.a)({},e.data),{},{rating:n})),h(t),w(!x)},numberOfStars:5,name:"rating",style:{width:"100%",height:"30px"}})):"")}},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(556),o=n(44),c=n(63),l=n(2);t.default=Object(l.i)((function(e){var t=Object(i.a)("translation").t,n=Object(o.b)();return r.a.createElement("div",{className:"product__view-all"},r.a.createElement("button",{onClick:function(){return t=e.filter,window.scrollTo(0,0),"hot"===t&&(n(Object(c.actFetchProductRequest)({_limit:6,_page:1,hot:t})),n(Object(c.actFetchTotalRowsRequest)({hot:t}))),"new"===t&&(n(Object(c.actFetchProductRequest)({_limit:6,_page:1,new:t})),n(Object(c.actFetchTotalRowsRequest)({new:t}))),t>0&&(n(Object(c.actFetchProductRequest)({_limit:6,_page:1,view_gte:t})),n(Object(c.actFetchTotalRowsRequest)({view_gte:t}))),void e.history.push("/grid");var t}},t("hotTrend.viewAll")))}))}}]);
//# sourceMappingURL=68.37790e29.chunk.js.map