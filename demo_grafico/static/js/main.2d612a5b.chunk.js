(this.webpackJsonptest_grafico=this.webpackJsonptest_grafico||[]).push([[0],{167:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c.n(a),l=c(23),n=c.n(l),r=(c(63),c(64),c(34)),d=c(179),j=c(180),O=c(181),b=c(182),h=c(36),x=c.n(h),o=c(16),m=c.n(o),p=c(37),T=c.n(p),A=c(53),N=c.n(A),y=c(55),E=c.n(y);var C=function(){var e=[{MERCADO:"Primario Privado",CODIGO_MERCADO:"p",TIPO_RENTA:"F",TIPO_TITULO:"P",MONTO:"6000000",MONTO_ANTERIOR:"1949387.82",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"pP1"},{MERCADO:"Registro Operaciu00f3n Intl. Pu00fablico",CODIGO_MERCADO:"i",TIPO_RENTA:"F",TIPO_TITULO:"PC",MONTO:"3120000",MONTO_ANTERIOR:"0",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"iPC1"},{MERCADO:"Registro Operaciu00f3n Intl. Renta Variable",CODIGO_MERCADO:"i",TIPO_RENTA:"V",TIPO_TITULO:"P",MONTO:"1134700",MONTO_ANTERIOR:"51955.16",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"iP5"},{MERCADO:"Reportos Privado",CODIGO_MERCADO:"r",TIPO_RENTA:"F",TIPO_TITULO:"P",MONTO:"538636.04",MONTO_ANTERIOR:"29840.32",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"rP1"},{MERCADO:"Reportos Pu00fablico",CODIGO_MERCADO:"r",TIPO_RENTA:"F",TIPO_TITULO:"PC",MONTO:"1991400.07",MONTO_ANTERIOR:"383203.47",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"rPC1"},{MERCADO:"Secundario Privado",CODIGO_MERCADO:"s",TIPO_RENTA:"F",TIPO_TITULO:"P",MONTO:"8396170.83",MONTO_ANTERIOR:"1230994",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"sP1"}],t=e.map((function(e){return e.MONTO}));console.log(t);var c=function(){return{labels:e.map((function(e){return e.FECHAACTUAL})),datasets:[{type:"line",label:"Variaci\xf3n",borderColor:"#129048",borderWidth:2,fill:!1,data:t},{type:"bar",label:"Por d\xeda en Millones de USD",backgroundColor:"#012b99",data:t,borderColor:"white",borderWidth:2}]}},a={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",style:{paddingLeft:"5%",paddingRight:"5%"},children:[Object(s.jsx)("h1",{children:"Demo Gr\xe1fico ChartJS"}),Object(s.jsx)("div",{style:{border:"1px solid darkgray",width:"65%",height:"100%",padding:15},children:Object(s.jsxs)(d.a,{children:[Object(s.jsxs)(j.a,{children:[Object(s.jsx)(O.a,{xs:3,md:3,lg:3,children:Object(s.jsx)("span",{style:{fontSize:12,color:"red"},children:"Sesi\xf3n cerrada"})}),Object(s.jsx)(O.a,{xs:6,md:6,lg:6,children:Object(s.jsx)("span",{style:{fontSize:10},children:"Falta 1 d\xedas 7 horas 1 minutos para abrir la sesi\xf3n|Hora actual 01:29am"})}),Object(s.jsx)(O.a,{xs:3,md:3,lg:3,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"success",children:"VER TABLA COMPLETA"})})})]}),Object(s.jsxs)(j.a,{children:[Object(s.jsx)(O.a,{id:"grafico1",children:Object(s.jsx)(r.Bar,{data:c,options:a})}),Object(s.jsxs)(O.a,{id:"grafico2",style:{display:"none"},children:["*****",Object(s.jsx)(r.Bar,{data:c,options:a,style:{display:"none"}}),"  "]})]})]})}),Object(s.jsx)("hr",{}),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(d.a,{style:{border:"1px solid darkgray",width:"65%",height:"100%",padding:15},children:[Object(s.jsx)("div",{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(O.a,{xs:2,md:2,lg:2,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"success",onClick:function(){document.getElementById("tabla1").style.display="",document.getElementById("tabla2").style.display="none",document.getElementById("grafico1").style.display="",document.getElementById("grafico2").style.display="none"},children:"Del dia"})})}),Object(s.jsx)(O.a,{xs:2,md:2,lg:2,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"success",onClick:function(){document.getElementById("tabla1").style.display="none",document.getElementById("tabla2").style.display="",document.getElementById("grafico1").style.display="none",document.getElementById("grafico2").style.display=""},children:"Acumulado"})})}),Object(s.jsx)(O.a,{xs:2,md:2,lg:2,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"light",children:"Mas negociados"})})}),Object(s.jsx)(O.a,{xs:2,md:2,lg:2,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"light",children:"Reajustes de tasas"})})}),Object(s.jsx)(O.a,{xs:4,md:4,lg:4,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"light",children:Object(s.jsxs)("spam",{children:[Object(s.jsx)(N.a,{}),Object(s.jsx)(E.a,{})]})})})})]})}),Object(s.jsx)("div",{className:"table-responsive",id:"tabla1",children:Object(s.jsxs)("table",{className:"table table-hover",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{}),Object(s.jsx)("th",{children:"Julio 24(USD $)"}),Object(s.jsx)("th",{children:"Julio 25(USD $)"}),Object(s.jsx)("th",{children:"Variacion"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(s.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(s.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(s.jsxs)("td",{className:"table-success",children:["5% ",Object(s.jsx)("spam",{children:Object(s.jsx)(m.a,{})})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(s.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(s.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(s.jsxs)("td",{className:"table-danger",children:["-5% ",Object(s.jsx)("spam",{children:Object(s.jsx)(x.a,{})})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(s.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(s.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(s.jsxs)("td",{className:"table-primary",children:["0%",Object(s.jsx)("spam",{children:Object(s.jsx)(T.a,{})})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(s.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(s.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(s.jsxs)("td",{className:"table-success",children:["5% ",Object(s.jsx)("spam",{children:Object(s.jsx)(m.a,{})})]})]})]})]})}),Object(s.jsx)("div",{className:"table-responsive",id:"tabla2",style:{display:"none"},children:Object(s.jsxs)("table",{className:"table table-hover",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{}),Object(s.jsx)("th",{children:"Julio 25(USD $)"}),Object(s.jsx)("th",{children:"Julio 26(USD $)"}),Object(s.jsx)("th",{children:"Variacion"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(s.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(s.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(s.jsxs)("td",{className:"table-success",children:["5% ",Object(s.jsx)("spam",{children:Object(s.jsx)(m.a,{})})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(s.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(s.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(s.jsxs)("td",{className:"table-danger",children:["-5% ",Object(s.jsx)("spam",{children:Object(s.jsx)(x.a,{})})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(s.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(s.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(s.jsxs)("td",{className:"table-primary",children:["0%",Object(s.jsx)("spam",{children:Object(s.jsx)(T.a,{})})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(s.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(s.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(s.jsxs)("td",{className:"table-success",children:["5% ",Object(s.jsx)("spam",{children:Object(s.jsx)(m.a,{})})]})]})]})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(O.a,{xs:4,md:4,lg:4,children:Object(s.jsx)("spam",{children:"Total"})}),Object(s.jsx)(O.a,{xs:2,md:2,lg:2,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"light",children:"000 000 000"})})}),Object(s.jsx)(O.a,{xs:2,md:2,lg:2,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"light",children:"000 000 000"})})}),Object(s.jsx)(O.a,{xs:4,md:4,lg:4,children:Object(s.jsx)("span",{children:Object(s.jsx)(b.a,{style:{fontSize:10,whiteSpace:"initial"},variant:"primary",children:"15%"})})})]})})]})})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,183)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),i(e),l(e)}))};n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),g()},63:function(e,t,c){},64:function(e,t,c){}},[[167,1,2]]]);
//# sourceMappingURL=main.2d612a5b.chunk.js.map