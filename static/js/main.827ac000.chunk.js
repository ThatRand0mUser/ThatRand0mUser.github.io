(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[0],{155:function(e,t){},221:function(e,t,r){},223:function(e,t,r){},225:function(e,t){},246:function(e,t){},248:function(e,t){},259:function(e,t){},261:function(e,t){},307:function(e,t){},309:function(e,t){},310:function(e,t){},315:function(e,t){},317:function(e,t){},336:function(e,t){},348:function(e,t){},351:function(e,t){},357:function(e,t){},395:function(e,t){},442:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),s=r.n(a),c=r(26),i=r.n(c),o=(r(221),r(4)),d=r.n(o),u=r(215),l=r(15),p=r(13),f=(r(223),r(212)),b=r(61),_=r(20).fromUtf8,j=function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={create_viewing_key:{entropy:"1321313123"}},e.next=3,t.execute(r,n);case 3:if(a=e.sent,!(s=JSON.parse(_(a.data))).create_viewing_key){e.next=9;break}return e.abrupt("return",s.create_viewing_key.key);case 9:if(!s.viewing_key){e.next=11;break}return e.abrupt("return",s.viewing_key.key);case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=r(213),O=r(447),h=function(e){var t=e.ORDERS_FACTORY_ADDRESS,r=e.client,s=e.viewKey,c=e.setViewKey,i=Object(a.useState)(!1),o=Object(p.a)(i,2),u=o[0],f=o[1];return Object(a.useEffect)((function(){if(r.ready&&!s.ready){var e=localStorage.getItem("vk");e&&JSON.parse(e)[t]&&JSON.parse(e)[t][r.accountData.address]?c({ready:!0,value:JSON.parse(e)[t][r.accountData.address]}):c({ready:!0,value:null})}}),[r,c,s.ready]),s.ready&&!s.value?Object(n.jsx)(m.a,{variant:"primary",onClick:Object(l.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,j(r.execute,t);case 4:n=e.sent,localStorage.setItem("vk",JSON.stringify(Object(b.a)({},t,Object(b.a)({},r.accountData.address,n)))),c({ready:!0,value:n}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:f(!1);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),children:u?Object(n.jsx)(O.a,{animation:"border"}):"Create View Key"}):null},x=r(48),y=r(448),k=function(e){var t=e.ORDERS_FACTORY_ADDRESS,r=e.tokensData,s=e.client,c=e.viewKey,i=Object(a.useState)(null),o=Object(p.a)(i,2),u=o[0],f=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,s.execute.queryContractSmart(t,{user_secret_order_books:{address:s.accountData.address,viewing_key:c}});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Creation Date"}),Object(n.jsx)("th",{children:"Pair"}),Object(n.jsx)("th",{children:"Status"}),Object(n.jsx)("th",{children:"Limit Order"}),Object(n.jsx)("th",{children:"Triggered Price"}),Object(n.jsx)("th",{children:"Current Price"}),Object(n.jsx)("th",{children:"Withdraw"})]})}),Object(n.jsxs)("tbody",{children:[!u&&Object(n.jsx)(O.a,{animation:"border"}),u&&u.user_secret_order_books.user_secret_order_book&&u.user_secret_order_books.user_secret_order_book.map((function(e){return Object(n.jsx)(w,{orderBookAddress:e,tokensData:r,client:s,viewKey:c,myLimitOrders:u,setMyLimitOrders:f})}))]})]})},w=function(e){var t=e.orderBookAddress,r=e.tokensData,s=e.client,c=e.viewKey,i=e.myLimitOrders,o=e.setMyLimitOrders,u=Object(a.useState)(null),f=Object(p.a)(u,2),b=f[0],_=f[1],j=Object(a.useState)(null),O=Object(p.a)(j,2),h=O[0],y=O[1],k=Object(a.useState)(null),w=Object(p.a)(k,2),v=w[0],S=w[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var r,n,a,i,o,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.execute.queryContractSmart(t,{get_limit_order:{user_address:s.accountData.address,user_viewkey:c}}),n=s.execute.queryContractSmart(t,{order_book_pair_info:{}}),e.next=4,Promise.all([r,n]);case 4:return a=e.sent,i=Object(p.a)(a,2),o=i[0],u=i[1],_(o),y(u),e.t0=S,e.next=13,g(o.is_bid?1:0,u);case 13:e.t1=e.sent,(0,e.t0)(e.t1),setInterval(Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=_,e.next=3,s.execute.queryContractSmart(t,{get_limit_order:{user_address:s.accountData.address,user_viewkey:c}});case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=S,e.next=8,g(o.is_bid?1:0,u);case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)}))),6e3);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g=function(){var e=Object(l.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.execute.queryContractSmart(n.amm_pair_address,{simulation:{offer_asset:{info:{token:Object(x.a)(Object(x.a)({},n.assets_info[t].token),{},{viewing_key:""})},amount:""+Math.pow(10,r.find((function(e){return e.dst_address===n.assets_info[t].token.contract_addr})).decimals)}}}));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),C=function(e){var t=r.find((function(t){return t.dst_address===h.assets_info[e].token.contract_addr}));return Math.round(b.balances[e]/Math.pow(10,h.assets_info[e].decimal_places)*1e5)/1e5+" "+t.display_props.symbol},D=function(e){var t=r.find((function(e){return e.dst_address===h.assets_info[0].token.contract_addr})),n=r.find((function(e){return e.dst_address===h.assets_info[1].token.contract_addr}));if(b.is_bid){if("order"===e)return Math.round(b.price/Math.pow(10,h.assets_info[0].decimal_places)*1e5)/1e5+" "+t.display_props.symbol+" per "+n.display_props.symbol;if("amm"===e)return Math.round(v.return_amount/Math.pow(10,h.assets_info[0].decimal_places)*1e5)/1e5+" "+t.display_props.symbol+" per "+n.display_props.symbol;if("triggered"===e)return Math.round(b.balances[0]/Math.pow(10,h.assets_info[0].decimal_places)*1e5)/1e5/(Math.round(b.order_token_init_quant/Math.pow(10,h.assets_info[1].decimal_places)*1e5)/1e5)+" "+t.display_props.symbol+" per "+n.display_props.symbol}else{if("order"===e)return Math.round(b.price/Math.pow(10,h.assets_info[1].decimal_places)*1e5)/1e5+" "+n.display_props.symbol+" per "+t.display_props.symbol;if("amm"===e)return Math.round(v.return_amount/Math.pow(10,h.assets_info[1].decimal_places)*1e5)/1e5+" "+n.display_props.symbol+" per "+t.display_props.symbol;if("triggered"===e)return Math.round(b.balances[1]/Math.pow(10,h.assets_info[1].decimal_places)*1e5)/1e5/(Math.round(b.order_token_init_quant/Math.pow(10,h.assets_info[0].decimal_places)*1e5)/1e5)+" "+n.display_props.symbol+" per "+t.display_props.symbol}},M=b?{backgroundColor:"Filled"===b.status?"#Cfffbc":"#Fff4ad"}:void 0;return Object(n.jsxs)("tr",{style:M,children:[b&&Object(n.jsx)("td",{children:new Date(1e3*b.timestamp).toLocaleString()}),b&&h&&Object(n.jsx)("td",{children:function(){var e=r.find((function(e){return e.dst_address===h.assets_info[0].token.contract_addr})),t=r.find((function(e){return e.dst_address===h.assets_info[1].token.contract_addr}));return e.display_props.symbol+" / "+t.display_props.symbol}()}),b&&Object(n.jsx)("td",{children:b.status}),b&&h&&Object(n.jsxs)("div",{children:[D("order")," ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),function(){var e="",t="";if(b.is_bid){var n=r.find((function(e){return e.dst_address===h.assets_info[0].token.contract_addr})),a=r.find((function(e){return e.dst_address===h.assets_info[1].token.contract_addr}));e=e+Math.round(b.price/Math.pow(10,h.assets_info[0].decimal_places)*1e5)/1e5*Math.round(b.order_token_init_quant/Math.pow(10,h.assets_info[1].decimal_places)*1e5)/1e5+" "+n.display_props.symbol,t=t+Math.round(b.order_token_init_quant/Math.pow(10,h.assets_info[1].decimal_places)*1e5)/1e5+" "+a.display_props.symbol}else{var s=r.find((function(e){return e.dst_address===h.assets_info[1].token.contract_addr})),c=r.find((function(e){return e.dst_address===h.assets_info[0].token.contract_addr}));e=e+Math.round(b.price/Math.pow(10,h.assets_info[1].decimal_places)*1e5)/1e5*Math.round(b.order_token_init_quant/Math.pow(10,h.assets_info[0].decimal_places)*1e5)/1e5+" "+s.display_props.symbol,t=t+Math.round(b.order_token_init_quant/Math.pow(10,h.assets_info[0].decimal_places)*1e5)/1e5+" "+c.display_props.symbol}return"Selling "+t+" for aprox. "+e}()]}),b&&v&&Object(n.jsx)("td",{children:Object(n.jsx)("div",{children:"Filled"===b.status?D("triggered"):" - "})}),b&&v&&Object(n.jsx)("td",{children:D("amm")}),b&&Object(n.jsx)("td",{children:Object(n.jsxs)(m.a,{onClick:Object(l.a)(d.a.mark((function e(){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.execute.execute(t,{withdraw_limit_order:{}});case 3:r=Object(x.a)({},i),n=r.user_secret_order_books.user_secret_order_book.filter((function(e){return e!==t})),r.user_secret_order_books.user_secret_order_book=n,o(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("error on widthdraw: "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),children:["Widthdraw ",Object(n.jsx)("br",{}),b&&h&&C(0)+"  and  "+C(1)]})})]},t)},v=(r(438),r(450)),S=r(449),g=r(214),C=function(e){var t=e.AMM_FACTORY_ADDRESS,r=e.ORDERS_FACTORY_ADDRESS,s=e.tokensData,c=e.client,i=(e.viewKey,e.remountMyLimitOrders),o=Object(a.useState)(!1),u=Object(p.a)(o,2),f=u[0],b=u[1],_=Object(a.useState)(null),j=Object(p.a)(_,2),h=j[0],y=j[1],k=Object(a.useState)(null),w=Object(p.a)(k,2),C=w[0],D=w[1],M=Object(a.useState)(!1),R=Object(p.a)(M,2),A=R[0],E=R[1],P=Object(a.useState)(!1),T=Object(p.a)(P,2),q=T[0],I=T[1],L=Object(a.useState)(null),F=Object(p.a)(L,2),K=F[0],B=F[1],N=Object(a.useState)({isInstanciated:null,data:null}),J=Object(p.a)(N,2),Y=J[0],z=J[1],V=Object(a.useState)(!0),H=Object(p.a)(V,2),U=H[0],W=H[1],G=Object(a.useState)(null),Q=Object(p.a)(G,2),X=Q[0],Z=Q[1],$=Object(a.useState)(null),ee=Object(p.a)($,2),te=ee[0],re=ee[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=y,e.next=3,c.execute.queryContractSmart(t,{pairs:{}});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t,r,n,a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===C){e.next=18;break}return e.prev=1,t=ne(1),r=ae(),e.next=6,Promise.all([t,r]);case 6:n=e.sent,a=Object(p.a)(n,2),s=a[0],c=a[1],B(s),I(!1),z({isInstanciated:!!c.secret_order_books.secret_order_book,data:c.secret_order_books.secret_order_book}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[C]),Object(a.useEffect)((function(){if(null!==C){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=null,!0!==U){e.next=8;break}return e.next=5,ne(1);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,ne(0);case 10:t=e.sent;case 11:I(!1),B(t),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}}),[C,U]);var ne=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.execute.queryContractSmart(h.pairs[C].contract_addr,{simulation:{offer_asset:{info:Object(x.a)({},h.pairs[C].asset_infos[t]),amount:""+Math.pow(10,s.find((function(e){return e.dst_address===h.pairs[C].asset_infos[t].token.contract_addr})).decimals)}}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.execute.queryContractSmart(r,{secret_order_books:{contract_address:h.pairs[C].contract_addr}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(e){var t=s.find((function(t){return t.dst_address===e}));return t?t.display_props.symbol:e},ce=function(e){var t=e.asset_infos[0].token?e.asset_infos[0].token.contract_addr:e.asset_infos[0].native_token.denom,r=s.find((function(e){return e.dst_address===t})),n=e.asset_infos[1].token?e.asset_infos[1].token.contract_addr:e.asset_infos[1].native_token.denom,a=s.find((function(e){return e.dst_address===n}));return U?(r?r.display_props.symbol:t)+" / "+(a?a.display_props.symbol:n):(a?a.display_props.symbol:n)+" / "+(r?r.display_props.symbol:t)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{onClick:function(){return b(!0)},children:"Create New Limit Order"}),Object(n.jsxs)(v.a,{show:f,onHide:function(){return b(!1)},children:[Object(n.jsx)(v.a.Header,{closeButton:!0,children:Object(n.jsx)(v.a.Title,{children:"Create Limit Order"})}),Object(n.jsxs)(v.a.Body,{children:[h&&Object(n.jsx)(S.a,{id:"dropdown-basic-button",title:"Dropdown button",children:h.pairs.map((function(e,t){return Object(n.jsx)(g.a.Item,{onClick:function(){I(!0),D(t)},children:ce(e)},e.contract_addr)}))}),null!==C&&Object(n.jsxs)("div",{children:[ce(h.pairs[C]),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{disabled:q,onClick:function(){I(!0),W(!U)},children:" Switch "}),Object(n.jsx)("br",{}),q&&Object(n.jsx)(O.a,{animation:"border"}),!q&&K&&function(){if(K){var e=s.find((function(e){return e.dst_address===h.pairs[C].asset_infos[U?0:1].token.contract_addr})),t=s.find((function(e){return e.dst_address===h.pairs[C].asset_infos[U?1:0].token.contract_addr}));return K.return_amount/Math.pow(10,e.decimals)+" "+e.display_props.symbol+" per "+t.display_props.symbol}}(),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:U?"Price of Limit Order ("+se(h.pairs[C].asset_infos[0].token.contract_addr)+")":"Price of Limit Order ("+se(h.pairs[C].asset_infos[1].token.contract_addr)+")"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{onChange:function(e){return re(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:U?"Amount to swap ("+se(h.pairs[C].asset_infos[1].token.contract_addr)+")":"Amount to swap ("+se(h.pairs[C].asset_infos[0].token.contract_addr)+")"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{onChange:function(e){return Z(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),null===Y.isInstanciated&&Object(n.jsx)(O.a,{animation:"border"}),!0===Y.isInstanciated&&Object(n.jsx)(m.a,{onClick:Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==X&&""!==X&&"0"!==X&&null!==te&&""!==te&&"0"!==te){e.next=3;break}throw Error("Bad Inputs");case 3:return E(!0),e.next=6,c.execute.execute(h.pairs[C].asset_infos[U?1:0].token.contract_addr,{send:{recipient:Y.data.contract_addr,amount:""+X*Math.pow(10,s.find((function(e){return e.dst_address===h.pairs[C].asset_infos[U?1:0].token.contract_addr})).decimals),msg:btoa(JSON.stringify({create_limit_order:{is_bid:U,price:""+te*Math.pow(10,s.find((function(e){return e.dst_address===h.pairs[C].asset_infos[U?0:1].token.contract_addr})).decimals)}}))}});case 6:E(!1),b(!1),i(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0),E(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),children:A?Object(n.jsx)(O.a,{animation:"border"}):"Create Create Limit Order"}),!1===Y.isInstanciated&&Object(n.jsx)(m.a,{onClick:Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z({isInstanciated:null,data:null}),e.next=4,c.execute.getCodeHashByContractAddr(h.pairs[C].contract_addr);case 4:return t=e.sent,e.next=7,c.execute.execute(r,{new_secret_order_book_instanciate:{amm_pair_address:h.pairs[C].contract_addr,amm_pair_hash:t}});case 7:return e.next=9,ae();case 9:n=e.sent,z({isInstanciated:!!n.secret_order_books.secret_order_book,data:n.secret_order_books.secret_order_book}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0),z({isInstanciated:!1,data:null});case 17:case"end":return e.stop()}}),e,null,[[0,13]])}))),children:"Instanciate Order Book Pair"})]})]}),Object(n.jsx)(v.a.Footer,{children:Object(n.jsx)(m.a,{variant:"secondary",onClick:function(){return b(!1)},children:"Close"})})]})]})},D=r(81),M=r.n(D),R="secret1y4q9mzx6mfaq4hv4ge3dfex7h0l4ta0u67cufe",A="secret1s7c6xp9wltthk5r6mmavql4xld5me3g37guhsx";var E=function(){var e=Object(a.useState)({ready:!1,execute:null,accountData:{address:""}}),t=Object(p.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)({ready:!1,value:null}),i=Object(p.a)(c,2),o=i[0],f=i[1],b=Object(a.useState)(null),_=Object(p.a)(b,2),j=_[0],m=_[1],O=Object(a.useState)(0),x=Object(p.a)(O,2),y=x[0],w=x[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(s),e.next=3,M.a.get("https://scrt-bridge-api.azurewebsites.net/tokens/?page=0&size=1000");case 3:t=e.sent,m([].concat(Object(u.a)(t.data.tokens),[{dst_address:A,decimals:6,display_props:{symbol:"sSCRT"}},{dst_address:"secret1ha79qdkjsq7nyy8hagsggfq6zzlwshfmgfv3k0",decimals:18,display_props:{symbol:"sTST"}}]));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.ready?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{ORDERS_FACTORY_ADDRESS:R,client:r,viewKey:o,setViewKey:f}),o.value&&Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{ORDERS_FACTORY_ADDRESS:R,AMM_FACTORY_ADDRESS:"secret1ypfxpp4ev2sd9vj9ygmsmfxul25xt9cfadrxxy",tokensData:j,client:r,viewKey:o.value,remountMyLimitOrders:function(){return w(y+1)}}),Object(n.jsx)(k,{ORDERS_FACTORY_ADDRESS:R,tokensData:j,client:r,viewKey:o.value},y)]})]}):Object(n.jsx)("div",{children:"Loading..."})},P=function(){var e=Object(l.a)(d.a.mark((function e(t){var r,n,a,s,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="holodeck-2",n=function(e){return new Promise((function(t){return setTimeout(t,e)}))};case 2:if(window.keplr||window.getOfflineSigner||window.getEnigmaUtils){e.next=7;break}return e.next=5,n(10);case 5:e.next=2;break;case 7:return e.next=9,window.keplr.experimentalSuggestChain({chainId:r,chainName:"Local Secret Chain",rpc:"http://bootstrap.secrettestnet.io:26657",rest:"https://bootstrap.secrettestnet.io",bip44:{coinType:529},coinType:529,stakeCurrency:{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6},bech32Config:{bech32PrefixAccAddr:"secret",bech32PrefixAccPub:"secretpub",bech32PrefixValAddr:"secretvaloper",bech32PrefixValPub:"secretvaloperpub",bech32PrefixConsAddr:"secretvalcons",bech32PrefixConsPub:"secretvalconspub"},currencies:[{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6}],feeCurrencies:[{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6}],gasPriceStep:{low:.3,average:.45,high:.6},features:["secretwasm"]});case 9:return e.next=11,window.keplr.enable(r);case 11:return a=window.getOfflineSigner(r),e.next=14,a.getAccounts();case 14:return s=e.sent,e.next=17,new f.SigningCosmWasmClient("https://bootstrap.secrettestnet.io",s[0].address,window.getOfflineSigner(r),window.getEnigmaUtils(r),{init:{amount:[{amount:"500000",denom:"uscrt"}],gas:"500000"},exec:{amount:[{amount:"500000",denom:"uscrt"}],gas:"500000"}});case 17:return c=e.sent,e.next=20,c.getAccount(s[0].address);case 20:i=e.sent,t({ready:!0,execute:c,accountData:i});case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,451)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),T()}},[[442,1,2]]]);
//# sourceMappingURL=main.827ac000.chunk.js.map