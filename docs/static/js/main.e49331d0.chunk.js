(this.webpackJsonpdonations=this.webpackJsonpdonations||[]).push([[0],{20:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(16),r=a.n(n),s=a(4),i=a(12),d=a(3),l=a(10),o=a.n(l),j=a(14),b="[User] user",u="[total] donations",m="[Menor] Sort By",O="[Mayor] Sort By",h="[total] donacion",x=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.text();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("there was an error"),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("https://cors-anywhere.herokuapp.com/https://moadw-challenge.herokuapp.com/api/find-many?skip=24&limit=25&sort=random");case 3:return t=e.sent,e.abrupt("return",JSON.parse(t));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(e){return{type:b,payload:e}},v=function(e){var t=function(e){var t,a=[],c=[],n={};e.map((function(e){return n[e.id]=e.donations})),t=Object.keys(n).map((function(e){return{id:e,valor:n[e]}})).sort((function(e,t){return e.valor-t.valor}));for(var r=function(n){a=e.find((function(e){return e.id===1*t[n].id})),c.push(a)},s=0;s<t.length;s++)r(s);return c}(e);return{type:m,payload:t}},N=function(e){var t=function(e){var t,a=[],c=[],n={};e.map((function(e){return n[e.id]=e.donations})),t=Object.keys(n).map((function(e){return{id:e,valor:n[e]}})).sort((function(e,t){return t.valor-e.valor}));for(var r=function(n){a=e.find((function(e){return e.id===1*t[n].id})),c.push(a)},s=0;s<t.length;s++)r(s);return c}(e);return{type:O,payload:t}},g=(a(20),a(24)),y=a(0),w=function(){var e=Object(s.c)((function(e){return e.nota})).data,t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(c.useState)(e),a=Object(g.a)(t,2),n=a[0],r=a[1];return{counter:n,increment:function(){r(n+1)},decrement:function(){r(n-1)},reset:function(){r(e)}}}(0),a=t.counter,n=t.increment,r=t.decrement;return e.length?Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"card ms-3 centrarCaja2 bg-dark",style:{maxWidth:540},children:Object(y.jsxs)("div",{className:"row no-gutters",children:[Object(y.jsx)("div",{className:"col-md-4",children:Object(y.jsx)("img",{src:"".concat(e[a].image),className:"card-img ",alt:"{ superhero }"})}),Object(y.jsx)("div",{className:"col-md-8",children:Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsxs)("h5",{className:"card-title",children:[" ",e[a].first_name+" "+e[a].last_name]}),Object(y.jsx)("p",{className:"card-text",children:Object(y.jsxs)("small",{className:"text-muted",children:[" TOTAL DONATIONS ",e[a].donations," "]})}),Object(y.jsx)(i.b,{to:"/user/".concat(e[a].id),children:Object(y.jsx)("button",{className:"btn btn-primary fab bg-dark",children:Object(y.jsx)("i",{className:"fas fa-arrow-alt-circle-right"})})})]})})]})}),Object(y.jsx)("div",{className:"card ms-3 centrarCaja2 bg-dark",style:{maxWidth:540},children:Object(y.jsxs)("div",{className:"row no-gutters",children:[Object(y.jsx)("div",{className:"col-md-4",children:Object(y.jsx)("img",{src:"".concat(e[a+1].image),className:"card-img ",alt:"{ superhero }"})}),Object(y.jsx)("div",{className:"col-md-8 ",children:Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsxs)("h5",{className:"card-title",children:[" ",e[a+1].first_name+" "+e[a+1].last_name]}),Object(y.jsx)("p",{className:"card-text",children:Object(y.jsxs)("small",{className:"text-muted",children:[" TOTAL DONATIONS ",e[a+1].donations," "]})}),Object(y.jsx)(i.b,{to:"/user/".concat(e[a+1].id),children:Object(y.jsx)("button",{className:"btn btn-primary fab bg-dark",children:Object(y.jsx)("i",{className:"fas fa-arrow-alt-circle-right"})})})]})})]})}),Object(y.jsx)("div",{className:"card ms-3  centrarCaja2 bg-dark",style:{maxWidth:540},children:Object(y.jsxs)("div",{className:"row no-gutters",children:[Object(y.jsx)("div",{className:"col-md-4",children:Object(y.jsx)("img",{src:"".concat(e[a+2].image),className:"card-img ",alt:"{ superhero }"})}),Object(y.jsx)("div",{className:"col-md-8",children:Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsx)("h5",{className:"card-title",children:e[a+2].first_name+" "+e[a+2].last_name}),Object(y.jsx)("p",{className:"card-text",children:Object(y.jsxs)("small",{className:"text-muted",children:["  TOTAL DONATIONS ",e[a+2].donations," "]})}),Object(y.jsx)(i.b,{to:"/user/".concat(e[a+2].id),children:Object(y.jsx)("button",{className:"btn btn-primary fab bg-dark",children:Object(y.jsx)("i",{className:"fas fa-arrow-alt-circle-right"})})})]})})]})}),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"centrarboton ",children:[Object(y.jsx)("button",{disabled:a<=0,onClick:r,type:"button",className:"btn btn-primary bg-dark ",children:"Prev"}),Object(y.jsx)("button",{disabled:a>=22,onClick:n,type:"button",className:"btn btn-primary bg-dark ms-5",children:"Next"})]})})]}):Object(y.jsx)("h1",{children:"Espere"})},k=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.nota})).data;Object(c.useEffect)((function(){e(function(e){var t=function(e){var t=0;return e.map((function(e){t+=e.total})),t}(e);return{type:h,payload:t}}(t))}),[t]);return Object(y.jsxs)("div",{children:[Object(y.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(y.jsx)("h1",{children:"Donations"}),Object(y.jsx)("div",{className:"navbar-collapse",children:Object(y.jsx)("div",{className:"navbar-nav"})}),Object(y.jsx)("div",{className:"navbar-collapse collapse w-300 order-3 dual-collapse2 ",children:Object(y.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(y.jsxs)("div",{className:"dropdown",children:[Object(y.jsx)("button",{className:"btn btn-primary bg-dark dropdown-toggle ",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Sort By Donations"}),Object(y.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(y.jsx)("li",{children:Object(y.jsx)("button",{onClick:function(){e(N(t))},className:"dropdown-item",children:"Mayor"})}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{onClick:function(){e(v(t))},className:"dropdown-item",children:"Menor"})})]})]})})})]}),Object(y.jsx)("hr",{}),Object(y.jsx)(w,{})]})},T=function(e){var t=e.history,a=Object(s.b)(),c=Object(d.g)().id,n=Object(s.c)((function(e){return e.nota})),r=n.data,i=n.total,l=function(e,t){return t.filter((function(t){return t.id===1*e}))}(c,r);if(!l.length)return Object(y.jsx)(d.a,{to:"/"});return Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{onClick:function(){t.push("/")},className:"btn btn-primary fab bg-dark",children:Object(y.jsx)("i",{className:"fas fa-arrow-alt-circle-left"})}),Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsxs)("h1",{children:[l[0].first_name," ",l[0].last_name]}),Object(y.jsx)("div",{className:"centrarCaja",children:Object(y.jsx)("div",{className:"card bg-dark ",style:{maxWidth:200},children:Object(y.jsx)("img",{src:"".concat(l[0].image),className:"card-img-top",alt:"imagen"})})}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)("h4",{children:Object(y.jsx)("p",{children:l[0].description})})}),Object(y.jsx)("div",{className:"card ms-1 centrarCaja bg-dark ",style:{maxWidth:200},children:Object(y.jsx)("div",{className:"row no-gutters",children:Object(y.jsx)("div",{className:"col-md-8",children:Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsxs)("p",{className:"card-text",children:[" Total Donations: ",Object(y.jsx)("small",{children:l[0].donations})," "]}),Object(y.jsx)("p",{className:"card-text",children:Object(y.jsxs)("small",{className:"text-muted",children:["  TOTAL DONATED: ",i,"  "]})})]})})})}),Object(y.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(y.jsx)("button",{onClick:function(){var e;a((e=l[0].donations,{type:u,payload:e}))},className:"btn btn-primary bg-dark",type:"button",children:"MAKE A DONATION"})})]})]})},_=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.nota})).data;return Object(c.useEffect)((function(){e(function(){var e=Object(j.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:a=e.sent,t(f(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),t?Object(y.jsx)(i.a,{children:Object(y.jsx)("div",{children:Object(y.jsxs)(d.d,{children:[Object(y.jsx)(d.b,{path:"/",exact:!0,component:k}),Object(y.jsx)(d.b,{path:"/user/:id",exact:!0,component:T}),Object(y.jsx)(d.a,{to:"/"})]})})}):Object(y.jsx)("h1",{children:"Espere"})},C=a(15),E=a(23),A=a(9),D={data:[],loading:!1},S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.c,M=Object(C.b)({nota:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(A.a)(Object(A.a)({},e),{},{data:t.payload,loading:!0});case u:return Object(A.a)(Object(A.a)({},e),{},{total:e.total+t.payload});case m:case O:return Object(A.a)(Object(A.a)({},e),{},{data:t.payload});case h:return Object(A.a)(Object(A.a)({},e),{},{total:t.payload});default:return e}}}),B=Object(C.d)(M,S(Object(C.a)(E.a))),I=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(s.a,{store:B,children:Object(y.jsx)(_,{})})})};r.a.render(Object(y.jsx)(I,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e49331d0.chunk.js.map