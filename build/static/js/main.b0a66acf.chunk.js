(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(68),r=a.n(o),l=(a(74),a(75),a(37)),i=a(22),s=(a(76),function(){return c.a.createElement("div",{className:"container-fluid head"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("header",{className:"titlesHeader"},c.a.createElement("p",{className:"ptitles"}," BURGER QUEEN "),c.a.createElement("p",{className:"ptitles"}," Reina las 24 horas"))))}),d=(a(52),function(e){var t=e.data,a=e.orders,n=e.addingItem;return c.a.createElement("div",{"data-testid":"container-breakfast"},t.map(function(e){return"Desayuno"===e.categor\u00eda?c.a.createElement("div",{key:e.id},c.a.createElement("button",{type:"button",className:"btn","data-testid":"".concat(e.id,"-breakfast"),onClick:function(){return n(e,a)}},e.nombre)):null}))}),m=function(e){var t=e.data,a=e.orders,n=e.addingItem;return c.a.createElement("div",{"data-testid":"container-restoftheday"},t.map(function(e){return"Resto del d\xeda"===e.categor\u00eda?c.a.createElement("button",{key:e.id,type:"button",className:"btn",onClick:function(){return n(e,a)},"data-testid":"".concat(e.id,"-restday")},e.nombre):null}))},u=a(21),f=(a(77),function(e){var t=e.orders,a=e.trashOrder,n=e.setOrder;return c.a.createElement("div",{"data-testid":"orders-container",className:"all"},t.map(function(e){return c.a.createElement("div",{key:e.id,className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4 col-sm-5 col-md-5 col-lg-5 col-xl-5 common","data-testid":"name-order"},e.nombre),c.a.createElement("div",{className:"col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5 common"},c.a.createElement("button",{type:"button",className:"selection","data-testid":"".concat(e.id,"-plus"),onClick:function(){return function(e){var a=t.map(function(t){if(t.id===e){var a=Object(u.a)({},t);return a.cantidad+=1,a}return t});n(a)}(e.id)}},c.a.createElement("i",{className:"fas fa-plus-circle"})),c.a.createElement("span",{className:"common"},e.cantidad),c.a.createElement("button",{type:"button",className:"selection","data-testid":"".concat(e.id,"-minus"),onClick:function(){return function(e){var a=t.map(function(t){if(t.id===e){var a=Object(u.a)({},t);return a.cantidad-=1,a}return t});n(a)}(e.id)}},c.a.createElement("i",{className:"fas fa-minus-circle"})),c.a.createElement("button",{type:"button",className:"selection","data-testid":"".concat(e.id,"-trash"),onClick:function(){return a(e.id)}},c.a.createElement("i",{className:"fas fa-trash-alt"}))),c.a.createElement("div",{className:"col-1 col-sm-2 col-md-2 col-lg-2 col-xl-2 common"},e.cantidad*e.precio)))}))}),v=(a(78),function(e){var t=e.nameInitial,a=e.setName;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"title"},"Pedidos")),c.a.createElement("form",null,c.a.createElement("div",{className:"name customer common"},"Cliente:"),c.a.createElement("input",{className:"col-12 col-lg-8 col-xl-6 common",value:t.name,onChange:function(e){return a(Object(u.a)({},t,{name:e.currentTarget.value}))},"data-testid":"name-customer"})),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-4 col-sm-4 col-md-5 col-lg-5 col-xl-5 common"},"Descripci\xf3n"),c.a.createElement("div",{className:"col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5 common"},"Cantidad"),c.a.createElement("div",{className:"col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 common"},"Precio")))}),E=(a(79),a(50)),b=a.n(E);b.a.initializeApp({apiKey:"AIzaSyCZujptJoGOy65deGnZS26ZgOkSsj9GNzA",authDomain:"burger-queen-reactive.firebaseapp.com",databaseURL:"https://burger-queen-reactive.firebaseio.com",projectId:"burger-queen-reactive",storageBucket:"burger-queen-reactive.appspot.com",messagingSenderId:"299451856705"});var p=b.a.firestore(),N=function(){var e=Object(n.useState)({name:""}),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),u=Object(i.a)(r,2),E=u[0],b=u[1],N=Object(n.useState)(!1),g=Object(i.a)(N,2),h=g[0],w=g[1],y=Object(n.useState)([]),k=Object(i.a)(y,2),j=k[0],O=k[1];Object(n.useEffect)(function(){p.collection("Men\xfa").get().then(function(e){var t=[];e.forEach(function(e){t.push(e.data())}),O(t)})},[]);var C=function(e,t){var a=t.find(function(t){return t.id===e.id});return b(a?Object(l.a)(t):[e].concat(Object(l.a)(t)))},x=function(e){return e.map(function(e){return e.cantidad*e.precio}).reduce(function(e,t){return e+t},0)};return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"first block portrait"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"title"},"Men\xfa")),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("button",{type:"button",className:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 selection",onClick:function(){return w(!h)},"data-testid":"render-breakfast"},"Desayuno"),c.a.createElement("button",{type:"button",className:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 selection",onClick:function(){return w(!h)},"data-testid":"render-restday"},"Resto del d\xeda")),c.a.createElement("div",null,h?c.a.createElement(d,{data:j,addingItem:C,orders:E}):c.a.createElement(m,{data:j,addingItem:C,orders:E}))),c.a.createElement("div",{className:"second block"},c.a.createElement(v,{nameInitial:a,setName:o}),c.a.createElement(f,{orders:E,setOrder:b,trashOrder:function(e){var t=E.filter(function(t){return t.id!==e});return b(Object(l.a)(t))}}),c.a.createElement("div",{className:"common selection"},c.a.createElement("div",{className:"common"},"Total:"),c.a.createElement("div",{className:"common","data-testid":"total-id"},x(E))),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("button",{type:"button",className:"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 selection",onClick:function(){return b([])},"data-testid":"delete-order"},"Anular orden"),c.a.createElement("button",{type:"button",className:"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 selection",onClick:function(){return p.collection("Orders").add({Nombre:a,Productos:E,Precio:x(E),Fecha:Date()})},"data-testid":"save-order"},"Enviar a cocina"))))))},g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"image"},c.a.createElement(N,null)))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(c.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/sw.js");h?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(t,e)})}}()},52:function(e,t,a){},69:function(e,t,a){e.exports=a(159)},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.b0a66acf.chunk.js.map