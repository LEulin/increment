(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={"app~d0ae3f07":0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors~14b916ce","chunk-vendors~ac0f77ce","chunk-vendors~82b88a00","chunk-vendors~4dff01e7","chunk-vendors~f0dd280a","chunk-vendors~987e6011","chunk-vendors~00cb062a","chunk-vendors~4b106089","chunk-vendors~fdc6512a","chunk-vendors~6ff199a4"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0af0":function(t,e,n){},"254b":function(t,e,n){"use strict";var a=n("bec9"),o=n.n(a);o.a},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.fc597045.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",[n("router-view")],1)],1)},r=[],s={name:"App",components:{}},i=s,c=(n("5c0b"),n("2877")),l=Object(c["a"])(i,o,r,!1,null,null,null),u=l.exports,d=n("a18c"),f=(n("4989"),n("ab8b"),n("ecee")),p=n("c074"),h=n("f2d1"),m=n("ad3d"),b=n("b9ad"),v=n.n(b);f["c"].add(p["a"]),f["c"].add(h["b"]),a["a"].use(v.a),a["a"].analytics.fbq.init("123506056390246",{em:"kennettecanales@gmail.com"}),a["a"].component("font-awesome-icon",m["a"]),a["a"].config.productionTip=!1,new a["a"]({router:d["a"],render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"6aab":function(t,e,n){"use strict";n.r(e);var a=n("fb9c");e["default"]={routes:[{path:"/",name:"Home",component:a["default"]}]}},"79e9":function(t,e,n){},"9c0c":function(t,e,n){},a18c:function(t,e,n){"use strict";var a=n("2b0e"),o=n("8c4f"),r=(n("99af"),function(t,e,n){n()}),s=[],i=n("6aab");s=s.concat(i.default.routes);for(var c=0;c<s.length;c++)s[c]["beforeEnter"]=r;var l=[{path:"/",name:"home",component:function(t){return Promise.resolve().then(function(){var e=[n("fb9c")];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:r}];l=l.concat(s);var u={routes:l};a["a"].use(o["a"]);e["a"]=new o["a"]({mode:"history",routes:u.routes})},b98a:function(t,e,n){"use strict";var a=n("0af0"),o=n.n(a);o.a},bec9:function(t,e,n){},d4f8:function(t,e,n){"use strict";var a=n("fe01"),o=n.n(a);o.a},f370:function(t,e,n){"use strict";var a=n("79e9"),o=n.n(a);o.a},fb9c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("LandingHeader"),n("LandingBanner"),n("span",{staticClass:"return-to-top",on:{click:function(e){return t.scrollTo()}}},[n("i",{staticClass:"fas fa-angle-up",staticStyle:{"font-size":"35px"}})]),n("LandingFooter")],1)},o=[],r=n("a18c"),s=n("1157"),i=n.n(s),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"incre-row"},[n("div",{staticClass:"cw-banner bg-primary"})])}],u={mounted:function(){},data:function(){return{}},methods:{redirect:function(t){r["a"].push(t)},externalLink:function(t){window.open(t,"_blank")}}},d=u,f=(n("b98a"),n("2877")),p=Object(f["a"])(d,c,l,!1,null,"1e7747f4",null),h=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-light bg-light"},[a("span",[a("a",{staticClass:"navbar-brand",on:{click:function(e){return t.redirect("/")}}},[a("img",{staticStyle:{"margin-bottom":"5px"},attrs:{src:n("4ffd")}})]),t._v(" INCREMENT TECHNOLOGIES ")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("form",{staticClass:"form-inline my-2 my-lg-0 ml-auto"},["/"===this.$route.path?a("ul",{staticClass:"navbar-nav"},t._l(t.menu,(function(e,n){return a("li",{key:n,staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",href:"javascript: return false"},on:{click:function(n){return t.scrollTo(e.redirect)}}},[t._v(t._s(e.title)+" "),a("i",{staticClass:"fas fa-caret-down"})])])})),0):t._e()])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"fa fa-bars"})])}],v=(n("d81d"),n("ac1f"),n("1276"),n("f2d1")),g={APP_NAME:"Increment Technologies",APP_TAGLINE:"We want you to Succeed!",APP_EMAIL:"support@increment.ltd",APP_COPYRIGHT:"Increment Technologies "+(new Date).getFullYear(),APP_DEVELOPER:"Increment Technologies",APP_DEVELOPER_URL:"http://increment.ltd",APP_PHONE_NUMBER:"+639171837855",address:"Cebu City, Philippines",api:"https://mezzohotel.com/img/",host:"https://mezzohotel.com/",booking_link:"https://mezzohotel.com/managebooking.php",socialMedia:{facebook:"https://www.facebook.com/mezzohotelcebu"},socialIcons:[{icon:v["a"],url:"https://www.facebook.com/mezzohotelcebu"},{icon:v["d"],url:"https://twitter.com/hashtag/mezzohotel"},{icon:v["c"],url:"https://www.instagram.com/mezzohotelcebu"}],delay:15e3,menus:[],packages:null,testimonials:[],rooms:[],restaurants:[],faq:[],gallery:[],addOns:[],announcements:[],blogs:[],activeMenu:"#top-view",load:{rooms:!1,inquire:!1,restaurants:!1,testimonials:!1,gallery:!1,faq:!1,footer:!1},setLoad:function(t){switch(t){case"#faq":this.load.faq=!0,this.load.gallery=!0,this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#gallery":this.load.gallery=!0,this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#testimonials":this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#restaurants":this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#packages":this.load.inquire=!0,this.load.rooms=!0;break;case"#rooms":this.load.rooms=!0;break}},getBlog:function(){var t=this;this.blogs=[],i.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/11/public/values?alt=json",(function(e){for(var n=e.feed.entry,a=0;a<n.length;a+=7)if(a>6){var o={type:n[a].content.$t,title:n[a+1].content.$t,image:"internal_video"===n[a].content.$t?n[a+2].content.$t:t.host+"img/"+n[a+2].content.$t,date:n[a+3].content.$t,author:n[a+4].content.$t,introduction:n[a+5].content.$t,content:n[a+6].content.$t};t.blogs.push(o)}}))},getBasic:function(){var t=this;i.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/3/public/values?alt=json",(function(e){for(var n=e.feed.entry,a=0;a<n.length;a+=2)if(a>1)switch(n[a].content.$t){case"app_name":t.APP_NAME=n[a+1].content.$t;break;case"app_tagline":t.APP_TAGLINE=n[a+1].content.$t;break;case"app_email":t.APP_EMAIL=n[a+1].content.$t;break;case"app_phone_number":t.APP_PHONE_NUMBER=n[a+1].content.$t;break;case"address":t.address=n[a+1].content.$t;break;case"app_header_background":var o=n[a+1].content.$t,r=null!==o?o.split(","):null,s=r.map((function(e){return{url:t.host+"img/"+e}}));t.APP_HEADER_BACKGROUND=s;break;case"app_header_mobile_background":var i=n[a+1].content.$t,c=null!==i?i.split(","):null,l=c.map((function(e){return{url:t.host+"img/"+e}}));t.APP_HEADER_MOBILE_BACKGROUND=l;break}}))}},_={mounted:function(){},data:function(){return{common:g,menu:[{title:"Who We Are",redirect:"#banner"},{title:"Our Services",redirect:"#features"},{title:"Case Studies",redirect:"#faqs"},{title:"Technologies",redirect:"#about-us"},{title:"Send Request",redirect:"#request"}]}},methods:{redirect:function(t){r["a"].push(t)},scrollTo:function(t){var e=i()(window).height();i()("html, body").animate({scrollTop:i()(t).offset().top-parseInt(.1*e)},500)}}},k=_,P=(n("f370"),Object(f["a"])(k,m,b,!1,null,"e46c18b0",null)),y=P.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer"},[n("ul",{staticClass:"footer-widget contact-us"},[n("li",{staticClass:"title"},[n("b",[t._v(t._s(t.common.APP_NAME))])]),n("li",{staticClass:"link"},[n("a",{on:{click:function(e){return t.redirect("/")}}},[t._v("Home")])])]),n("ul",{staticClass:"footer-widget"},[t._m(0),n("li",{staticClass:"link"},[n("a",{on:{click:function(e){return t.openModal("#termsAndConditionsModal")}}},[t._v("Terms & Conditions")])]),n("li",{staticClass:"link"},[n("a",{on:{click:function(e){return t.openModal("#privacyModal")}}},[t._v("Privacy Policy")])])]),n("span",{staticClass:"copyright"},[n("label",[t._v("Copyright @ "+t._s(t.common.APP_COPYRIGHT)+".")])])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"title"},[n("b",[t._v("Privacy and Terms")])])}],E={mounted:function(){},data:function(){return{common:g}},methods:{redirect:function(t){r["a"].push(t)},external:function(t){window.open(t,"_BLANK")},openModal:function(t){i()(t).modal("show")}}},O=E,A=(n("254b"),Object(f["a"])(O,w,C,!1,null,"3cdfff78",null)),$=A.exports,T={components:{LandingBanner:h,LandingHeader:y,LandingFooter:$},mounted:function(){},data:function(){return{}},methods:{redirect:function(t){r["a"].push(t)},scrollTo:function(){i()("html, body").animate({scrollTop:i()("#header").offset().top},500)}}},x=T,M=(n("d4f8"),Object(f["a"])(x,a,o,!1,null,"8960e614",null));e["default"]=M.exports},fe01:function(t,e,n){}});
//# sourceMappingURL=app~d0ae3f07.997d332d.js.map