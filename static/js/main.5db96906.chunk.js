(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports={h1:"OrderList_h1__1529-",outer:"OrderList_outer__2AKRN",inner:"OrderList_inner__2bu_V",header:"OrderList_header__3ZLqn",user:"OrderList_user__H6i4l",totalPrice:"OrderList_totalPrice__29aM5",middle:"OrderList_middle__3Qdpp",item:"OrderList_item__2Jp34",left:"OrderList_left__UluI3",title:"OrderList_title__3cziJ",orderDetail:"OrderList_orderDetail__3VZDW",right:"OrderList_right__3bdiW",footer:"OrderList_footer__H07wl",keepBuying:"OrderList_keepBuying__4OjV2",checkout:"OrderList_checkout__2Q3uZ"}},16:function(e,t,a){e.exports={main:"Main_main__23tKO",topSide:"Main_topSide__3T_Qe",errorMessage:"Main_errorMessage__1rLgx",title:"Main_title__3uoCo",detail:"Main_detail__3D8sJ",time:"Main_time__1etss",phone:"Main_phone__3UrVx",address:"Main_address__1mGaH",downSide:"Main_downSide__8MN22",store:"Main_store__2v70R"}},22:function(e,t,a){e.exports={main:"Home_main__Ugy63",theme:"Home_theme__StcS2",target1:"Home_target1___DDmn",target2:"Home_target2__3rKQP"}},29:function(e,t,a){e.exports={navbar:"App_navbar__BoB5D",logo:"App_logo__2qPv-"}},45:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a(4),c=a(37),n=a.n(c),r=(a(45),a(14)),o=a(29),l=a.n(o),d=a(17),u=a(8),j=a(21);a(46),a(47);j.a.initializeApp({apiKey:"AIzaSyBnIZz9XKePiURWd1lArnKnZqgcHDk0xkQ",authDomain:"order-7cbbf.firebaseapp.com",databaseURL:"https://order-7cbbf.firebaseio.com",projectId:"order-7cbbf",storageBucket:"order-7cbbf.appspot.com",messagingSenderId:"700424911597",appId:"1:700424911597:web:eca4d134324ce1b59b6ae4"});var b=j.a.firestore(),h=new j.a.auth.FacebookAuthProvider;function m(){j.a.auth().signInWithPopup(h).then((function(e){e.credential.accessToken;var t=e.additionalUserInfo.profile.name,a=e.additionalUserInfo.profile.email,s=e.user.uid;console.log("\u60a8\u88ab\u9078\u4e2d\u5165\u5bae\u7576\u79c0\u5973\u56c9",e),b.collection("users").doc(s).set({userName:t,userEmail:a,userHistoryOrder:""}).then((function(){console.log("Add successful")}))})).catch((function(e){console.log("\u767b\u5165\u5931\u6557",e)}))}function O(){j.a.auth().signOut().then((function(){localStorage.removeItem("accessToken"),console.log("\u60a8\u88ab\u9010\u51fa\u7d2b\u7981\u57ce\u4e86")}))}var _=a(22),p=a.n(_);var v=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(u.f)();return Object(s.jsx)("div",{className:p.a.main,children:Object(s.jsxs)("div",{className:p.a.theme,children:[Object(s.jsxs)("div",{className:p.a.target1,children:[Object(s.jsx)("h2",{children:"\u4eca\u5929\u4f86\u9ede...\uff1f"}),Object(s.jsx)("form",{onSubmit:function(){c(""),n.push("/main?search=".concat(encodeURI(a)))},children:Object(s.jsx)("input",{type:"text",value:a,placeholder:"\u60f3\u5403...",onChange:function(e){c(e.target.value)}})})]}),Object(s.jsxs)("div",{className:p.a.target2,children:[Object(s.jsx)("h2",{className:p.a.h2,children:"\u662f\u4e0d\u662f\u7336\u8c6b\u4e0d\u6c7a?"}),Object(s.jsx)("button",{children:"\u5927\u5bb6\u66ff\u6211\u505a\u6c7a\u5b9a"})]})]})})},g=a(16),x=a.n(g),f=a(39),N=a.p+"static/media/time.3ad02d15.svg",M=a.p+"static/media/phone.c3d2611c.svg",S=a.p+"static/media/location.ce465ffc.svg";function y(e){var t,a,i,c,n=e.showRestaurant,r=e.showRestaurantDetail,o=Object(s.jsxs)("div",{children:[" ",null===r||void 0===r||null===(t=r.businessHour)||void 0===t?void 0:t[0]]}),l=Object(s.jsxs)("div",{children:[null===r||void 0===r||null===(a=r.businessHour)||void 0===a?void 0:a[0],"\xa0&\xa0",null===r||void 0===r||null===(i=r.businessHour)||void 0===i?void 0:i[1]]});return Object(s.jsx)("div",{className:x.a.topSide,children:0===n.length?Object(s.jsxs)("h1",{className:x.a.errorMessage,children:["Sorry !",Object(s.jsx)("br",{}),"Not Found"]}):Object(s.jsxs)(s.Fragment,{children:[n.length>0?Object(s.jsx)("div",{className:x.a.title,children:null===r||void 0===r?void 0:r.title}):null,Object(s.jsxs)("div",{className:x.a.detail,children:[Object(s.jsxs)("div",{className:x.a.time,children:[n.length>0?Object(s.jsx)("img",{src:N,alt:"time"}):null,(null===r||void 0===r||null===(c=r.businessHour)||void 0===c?void 0:c[1])?l:o]}),Object(s.jsxs)("div",{className:x.a.phone,children:[n.length>0?Object(s.jsx)("img",{src:M,alt:"phone"}):null,null===r||void 0===r?void 0:r.phoneNumber]}),Object(s.jsxs)("div",{className:x.a.address,children:[n.length>0?Object(s.jsx)("img",{src:S,alt:"location"}):null,null===r||void 0===r?void 0:r.address]})]})]})})}function L(e){var t=e.showRestaurant,a=e.setShowRestaurantDetail;if(0===t.length)document.getElementsByClassName(x.a.topSide);return Object(s.jsx)("div",{className:x.a.downSide,children:t.map((function(e){return Object(s.jsx)(D,{title:e.title,category:e.category,businessHour:e.businessHour,phoneNumber:e.phoneNumber,address:e.address,id:e.id,setShowRestaurantDetail:a},e.id)}))})}function D(e){var t=Object(u.f)();return Object(s.jsx)("div",{className:x.a.store,onClick:function(a){t.push("./menu?restaurantID=".concat(e.id))},onMouseEnter:function(t){e.setShowRestaurantDetail({title:e.title,category:e.category,businessHour:e.businessHour,phoneNumber:e.phoneNumber,address:e.address,id:e.id,key:e.id})},children:Object(s.jsx)("p",{children:e.title})})}var H=function(e){f.a.auth().onAuthStateChanged((function(e){}));var t=window.location.search.slice(8),a=decodeURI(t),c=b.collection("restaurant"),n=Object(i.useState)([]),o=Object(r.a)(n,2),l=o[0],d=o[1],u=Object(i.useState)({}),j=Object(r.a)(u,2),h=j[0],m=j[1];return Object(i.useEffect)((function(){c.orderBy("title").startAt(a).endAt(a+"\uf8ff").get().then((function(e){var t=[];e.forEach((function(e){t.push({address:e.data().address,businessHour:[e.data().businessHour[0],e.data().businessHour[1]],category:e.data().category,phoneNumber:e.data().phoneNumber,title:e.data().title,id:e.id})})),d([].concat(t))}))}),[]),console.log(l),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:x.a.main,children:[Object(s.jsx)(y,{showRestaurant:l,showRestaurantDetail:h}),Object(s.jsx)(L,{showRestaurant:l,setShowRestaurantDetail:m})]})})},w=a(32),k=a(7),I=a.n(k),C=a(20),P=(a.p,a.p+"static/media/menu_wastern.4082f34e.jpeg"),B=(a.p,a.p,a.p+"static/media/cart.0415469d.svg");function R(e){var t=e.setMealPopupSwitch,a=e.setMealPopupDetail,i=e.name,c=e.price;return Object(s.jsxs)("div",{className:I.a.meal,onClick:function(){t(!0),a({name:i,price:c,qty:1})},children:[Object(s.jsx)("div",{className:I.a.name,children:i}),Object(s.jsxs)("div",{className:I.a.price,children:[" ",c]})]})}var q=1;function A(e){var t=e.setMealPopupSwitch,a=e.setMealPopupDetail,i=e.mealPopupDetail,c=e.setCartList,n=e.cartList;function r(e){var t=Number(e.currentTarget.getAttribute("data"));1===q&&-1==t?q=1:q+=t,a({name:i.name,price:i.price,qty:q})}return Object(s.jsx)("div",{className:I.a.outer,id:"outer",onClick:function(e){"outer"===e.target.id&&(t(!1),q=1)},children:Object(s.jsxs)("div",{className:I.a.inner,children:[Object(s.jsx)("div",{className:I.a.name,children:i.name}),Object(s.jsxs)("div",{className:I.a.qty,children:[Object(s.jsx)("div",{className:I.a.minus,data:-1,onClick:r,children:"-"}),Object(s.jsx)("div",{className:I.a.number,children:i.qty}),Object(s.jsx)("div",{className:I.a.add,data:1,onClick:r,children:"+"})]}),Object(s.jsxs)("div",{className:I.a.subTotal,children:["\u7e3d\u91d1\u984d\uff1a",i.price*i.qty]}),Object(s.jsx)("button",{className:I.a.addCartBtn,onClick:function(){var e={name:i.name,price:i.price,qty:i.qty,id:Object(C.a)()};c([].concat(Object(w.a)(n),[e])),t(!1),null===localStorage.getItem("cartList")?localStorage.setItem("cartList",JSON.stringify([e])):localStorage.setItem("cartList",JSON.stringify([].concat(Object(w.a)(JSON.parse(localStorage.getItem("cartList"))),[e]))),q=1},children:"\u52a0\u5165\u8cfc\u7269\u8eca"})]})})}var E=function(e){var t,a,c,n,o,l,d,u,j=Object(i.useState)({}),h=Object(r.a)(j,2),m=h[0],O=h[1],_=Object(i.useState)(!1),p=Object(r.a)(_,2),v=p[0],g=p[1],x=Object(i.useState)({}),f=Object(r.a)(x,2),y=f[0],L=f[1],D=Object(i.useState)([]),H=Object(r.a)(D,2),w=H[0],k=H[1],q=window.location.search.slice(14),E=decodeURI(q),F=e.data,J={};console.log("List=",w),F.forEach((function(e){e.id===E&&(J={address:e.address,businessHour:[e.businessHour[0],e.businessHour[1]],category:e.category,phoneNumber:e.phoneNumber,title:e.title,id:e.id})})),Object(i.useEffect)((function(){b.collection("restaurant").doc(E).collection("menu").get().then((function(e){e.forEach((function(e){O(e.data())}))}))}),[]);var T=[];for(var U in m)T.push({name:U,price:m[U]});var K,Z=Object(s.jsxs)("div",{children:[" ",null===(t=J)||void 0===t||null===(a=t.businessHour)||void 0===a?void 0:a[0]]}),Q=Object(s.jsxs)("div",{children:[null===(c=J)||void 0===c||null===(n=c.businessHour)||void 0===n?void 0:n[0],"\xa0&\xa0",null===(o=J)||void 0===o||null===(l=o.businessHour)||void 0===l?void 0:l[1]]});return null===localStorage.getItem("cartList")?K=0:(K=0,JSON.parse(localStorage.getItem("cartList")).forEach((function(e){return K+=e.price*e.qty})),Object(s.jsx)(s.Fragment,{children:!0===v?Object(s.jsx)(A,{setMealPopupSwitch:g,setMealPopupDetail:L,setCartList:k,cartList:w,mealPopupDetail:y}):Object(s.jsxs)("div",{className:I.a.main,children:[Object(s.jsxs)("header",{children:[Object(s.jsxs)("div",{className:I.a.detail,children:[Object(s.jsxs)("div",{className:I.a.title,children:[" ",J.title]}),Object(s.jsx)("div",{className:I.a.miniDetail,children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:I.a.time,children:[Object(s.jsx)("img",{src:N,alt:"time"}),(null===(d=J)||void 0===d||null===(u=d.businessHour)||void 0===u?void 0:u[1])?Q:Z]}),Object(s.jsxs)("div",{className:I.a.phone,children:[Object(s.jsx)("img",{src:M,alt:"phone"}),J.phoneNumber]}),Object(s.jsxs)("div",{className:I.a.address,children:[Object(s.jsx)("img",{src:S,alt:"location"}),J.address]}),Object(s.jsx)("div",{children:J.category})]})})]}),Object(s.jsx)("div",{className:I.a.image,children:Object(s.jsx)("img",{src:P,alt:"photo"})})]}),Object(s.jsxs)("div",{className:I.a.selectSpace,children:[T.map((function(e){return Object(s.jsx)(R,{name:e.name,price:e.price,setMealPopupSwitch:g,setMealPopupDetail:L},Object(C.a)())})),Object(s.jsxs)("div",{className:I.a.cartBtn,onClick:function(){console.log("a")},children:[Object(s.jsx)("span",{children:null!==localStorage.getItem("cartList")?JSON.parse(localStorage.getItem("cartList")).length:0}),Object(s.jsxs)("div",{className:I.a.cart,children:[Object(s.jsx)("img",{src:B,alt:"cart"}),"\u8cfc\u7269\u8eca"]}),Object(s.jsx)("div",{className:I.a.totalPrice,children:K})]})]})]})}))},F=a(11),J=a.n(F),T=a.p+"static/media/head.12287176.jpg",U=a.p+"static/media/dollarSign.d0273390.png",K=a.p+"static/media/trash.ba384e2f.svg",Z=JSON.parse(localStorage.getItem("cartList"));function Q(e){var t=e.name,a=e.price,i=e.qty,c=e.id;return console.log(c),Object(s.jsxs)("div",{className:J.a.item,onClick:function(e){console.log(e.currentTarget.id),"trash"===e.target.id&&(console.log(t,a,i),Z.filter((function(e){console.log(e)})))},children:[Object(s.jsxs)("div",{className:J.a.left,children:[Object(s.jsx)("div",{className:J.a.title,children:t}),Object(s.jsxs)("div",{className:J.a.orderDetail,children:["$",a," / ",i," \u4efd / ?? / ?? /"]})]}),Object(s.jsx)("div",{className:J.a.right,children:Object(s.jsx)("img",{src:K,id:"trash",alt:"trash can"})})]})}console.log(Z);var V=function(){return Object(s.jsx)("div",{className:J.a.outer,children:Object(s.jsxs)("div",{className:J.a.inner,children:[Object(s.jsxs)("div",{className:J.a.header,children:[Object(s.jsxs)("div",{className:J.a.user,children:[Object(s.jsx)("img",{src:T,alt:"head photo"}),Object(s.jsx)("p",{children:"\u8a31\u5bb6\u744b"})]}),Object(s.jsxs)("div",{className:J.a.totalPrice,children:[Object(s.jsx)("img",{src:U,alt:"money icon"}),Object(s.jsx)("p",{children:"230"})]})]}),Object(s.jsx)("div",{className:J.a.middle,children:Z.map((function(e){return Object(s.jsx)(Q,{name:e.name,price:e.price,qty:e.qty,id:Object(C.a)()},Object(C.a)())}))}),Object(s.jsxs)("div",{className:J.a.footer,children:[Object(s.jsx)("button",{className:J.a.keepBuying,children:"\u7e7c\u7e8c\u8cfc\u8cb7"}),Object(s.jsx)("button",{className:J.a.checkout,children:"\u4f86\u53bb\u7d50\u5e33"})]})]})})};a(54);var z=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:m,children:"FB Log in"}),Object(s.jsx)("button",{onClick:O,children:"FB Log out"})]})},G=a.p+"static/media/Logo.c81f7424.svg";var W=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(i.useEffect)((function(){!function(e){var t=[];b.collection("restaurant").get().then((function(e){return e.forEach((function(e){t.push({address:e.data().address,businessHour:[e.data().businessHour[0],e.data().businessHour[1]],category:e.data().category,phoneNumber:e.data().phoneNumber,title:e.data().title,id:e.id})})),t})).then((function(t){e(t)}))}(c)}),[]),Object(s.jsxs)(d.a,{children:[Object(s.jsxs)("nav",{className:l.a.navbar,children:[Object(s.jsx)("div",{className:l.a.logo,children:Object(s.jsx)(d.b,{to:"/",children:Object(s.jsx)("img",{src:G,alt:"logo"})})}),Object(s.jsx)(d.b,{to:"/main",children:"Main"}),Object(s.jsx)(d.b,{to:"/menu",children:"Menu"}),Object(s.jsx)(d.b,{to:"/orderList",children:"OrderList"}),Object(s.jsx)(d.b,{to:"/login",children:"Login"})]}),Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/",children:Object(s.jsx)(v,{})}),Object(s.jsx)(u.a,{path:"/main",children:Object(s.jsx)(H,{data:a})}),Object(s.jsx)(u.a,{path:"/menu",children:Object(s.jsx)(E,{data:a})}),Object(s.jsx)(u.a,{path:"/orderList",children:Object(s.jsx)(V,{})}),Object(s.jsx)(u.a,{path:"/login",children:Object(s.jsx)(z,{})})]})]})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),c(e),n(e)}))};n.a.render(Object(s.jsx)(W,{}),document.getElementById("root")),Y()},7:function(e,t,a){e.exports={main:"Menu_main__2JNa6",detail:"Menu_detail__BEIoC",title:"Menu_title__37OM8",miniDetail:"Menu_miniDetail__MoQLB",time:"Menu_time__1d7Ts",phone:"Menu_phone__1hpDw",address:"Menu_address__hsFqA",image:"Menu_image__384RC",selectSpace:"Menu_selectSpace__lEGA6",cartBtn:"Menu_cartBtn__BK2x_",cart:"Menu_cart__1rFM7",totalPrice:"Menu_totalPrice__UDYFZ",meal:"Menu_meal__16Gol",outer:"Menu_outer__3sDMK",inner:"Menu_inner__t6fNr",name:"Menu_name__2ZDyf",qty:"Menu_qty__2AV13",number:"Menu_number__1x4kR",minus:"Menu_minus__3bUgY",add:"Menu_add__oxn_F",subTotal:"Menu_subTotal__2Nx5m",addCartBtn:"Menu_addCartBtn__3KTGV"}}},[[55,1,2]]]);
//# sourceMappingURL=main.5db96906.chunk.js.map