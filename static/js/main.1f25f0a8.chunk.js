(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{20:function(t,e,c){},21:function(t,e,c){},41:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c.n(n),s=c(14),i=c.n(s),o=(c(20),c(15)),r=c(4),d=(c(21),c(3)),l=c.n(d),j=c.p+"static/media/a.aa1f7ec7.svg",b=c(0);var u=function t(e,c,n,a){Object(o.a)(this,t),this.company=e,this.ticker=c,this.stockPrice=n,this.timeElapsed=a},m=function(){var t=new u("","","",""),e=Object(n.useState)(t),c=Object(r.a)(e,2),a=(c[0],c[1],Object(n.useState)(0)),s=Object(r.a)(a,2),i=(s[0],s[1],Object(n.useState)([])),o=Object(r.a)(i,2),d=o[0],m=o[1];return Object(n.useEffect)((function(){l.a.get("https://nodetest15.herokuapp.com/api/get/").then((function(t){console.log(t.data),m(t.data)}))}),[]),Object(b.jsx)("div",{className:"App-header",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{class:"parent",children:[Object(b.jsx)("div",{class:"div1",children:Object(b.jsx)("h1",{children:"Stock Test"})}),Object(b.jsx)("div",{class:"div2",children:Object(b.jsx)("img",{className:"imageHeader",src:j,width:"60px"})})]}),Object(b.jsx)("hr",{className:"line"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{id:"data1",className:"form-control form-control-sm",type:"text",placeholder:"Empresa"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"data2",className:"form-control form-control-sm",type:"text",placeholder:"ID"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"data3",className:"form-control form-control-sm",type:"text",placeholder:"Pre\xe7o"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("hr",{className:"line"}),Object(b.jsxs)("div",{class:"parent2",children:[Object(b.jsx)("div",{class:"div12",children:Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return function(){var t=(a=new Date).getHours().toString()+":"+a.getMinutes().toString()+":"+a.getSeconds().toString(),e=document.getElementById("data1").value,c=document.getElementById("data2").value,n=document.getElementById("data3").value,a=t;l.a.post("https://nodetest15.herokuapp.com/api/insert",{a:e,b:c,c:n,d:a}).then((function(){l.a.get("https://nodetest15.herokuapp.com/api/get/").then((function(t){console.log(t.data),m(t.data)}))}))}()},children:"Criar"})}),Object(b.jsx)("div",{class:"div22",children:Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return function(){var t=(a=new Date).getHours().toString()+":"+a.getMinutes().toString()+":"+a.getSeconds().toString(),e=document.getElementById("data1").value,c=document.getElementById("data2").value,n=document.getElementById("data3").value,a=t;l.a.post("https://nodetest15.herokuapp.com/api/att",{a:e,b:c,c:n,d:a}).then((function(){l.a.get("https://nodetest15.herokuapp.com/api/get/").then((function(t){console.log(t.data),m(t.data)}))}))}()},children:"Atualizar"})}),Object(b.jsx)("div",{class:"div32",children:Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return function(){var t=document.getElementById("data2").value;l.a.post("https://nodetest15.herokuapp.com/api/deleti",{b:t}).then((function(){l.a.get("https://nodetest15.herokuapp.com/api/get/").then((function(t){console.log(t.data),m(t.data)}))}))}()},children:"Deletar"})})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("table",{className:"table ",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Empresa"},"{item8}"),Object(b.jsx)("th",{scope:"col",children:"ID"},"{item9}"),Object(b.jsx)("th",{scope:"col",children:"Pre\xe7o"},"{item10}"),Object(b.jsx)("th",{scope:"col",children:"\xdaltima Atualiza\xe7\xe3o"},"{item11}")]},"{item7}")},"{item6}"),d.map((function(t){return[Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.company},"{item1}"),Object(b.jsx)("td",{children:t.ticker},"{item2}"),Object(b.jsx)("td",{children:t.stockPrice},"{item3}"),Object(b.jsx)("td",{children:t.timeElapsed},"{item4}")]},"{item12}")})]}))]},"{item5}")]})})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),h()}},[[41,1,2]]]);
//# sourceMappingURL=main.1f25f0a8.chunk.js.map