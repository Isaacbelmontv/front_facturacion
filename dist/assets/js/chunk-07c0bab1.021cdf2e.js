(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07c0bab1"],{"12fa":function(e,t,n){"use strict";n.r(t);var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",[n("b-colxx",{attrs:{xxs:"12"}},[n("piaf-breadcrumb",{attrs:{heading:e.$t("menu.types")}}),e._v(" "),n("div",{staticClass:"separator mb-5"})],1)],1),e._v(" "),n("b-row",[n("b-colxx",{attrs:{xxs:"12"}},[n("b-button",{staticClass:"mb-1",attrs:{variant:"outline-primary"},on:{click:function(t){return e.changeDefaultMenuType("menu-default")}}},[e._v(e._s(e.$t("menu.default")))]),e._v(" "),n("b-button",{staticClass:"mb-1",attrs:{variant:"outline-primary"},on:{click:function(t){return e.changeDefaultMenuType("menu-sub-hidden")}}},[e._v(e._s(e.$t("menu.subhidden")))]),e._v(" "),n("b-button",{staticClass:"mb-1",attrs:{variant:"outline-primary"},on:{click:function(t){return e.changeDefaultMenuType("menu-hidden")}}},[e._v(e._s(e.$t("menu.hidden")))])],1)],1)],1)},r=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("28a5"),n("bd86")),a=n("2f62"),i=n("2b47");n("1cd6");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,u)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={data:function(){return{}},computed:o({},Object(a["c"])({selectedMenuHasSubItems:"getSelectedMenuHasSubItems"})),methods:o({},Object(a["d"])(["changeSideMenuStatus"]),{changeDefaultMenuType:function(e){var t=this.getMenuClassesForResize(e);this.changeSideMenuStatus({step:0,classNames:t.join(" "),selectedMenuHasSubItems:this.selectedMenuHasSubItems})},getMenuClassesForResize:function(e){var t=e.split(" ").filter((function(e){return""!==e})),n=window.innerWidth;return n<i["l"]?t.push("menu-mobile"):n<i["n"]?(t=t.filter((function(e){return"menu-mobile"!==e})),t.includes("menu-default")&&!t.includes("menu-sub-hidden")&&t.push("menu-sub-hidden")):(t=t.filter((function(e){return"menu-mobile"!==e})),t.includes("menu-default")&&t.includes("menu-sub-hidden")&&(t=t.filter((function(e){return"menu-sub-hidden"!==e})))),t}})},d=l,b=n("2877"),p=Object(b["a"])(d,u,r,!1,null,null,null);t["default"]=p.exports},"1cd6":function(e,t,n){"use strict";var u=[{id:"pages",icon:"iconsminds-digital-drawing",label:"menu.pages",to:"/app/pages",subs:[{id:"pages-product",label:"menu.product",to:"/app/pages/product",subs:[{icon:"simple-icon-credit-card",label:"menu.data-list",to:"/app/pages/product/data-list"}]}]}];t["a"]=u}}]);