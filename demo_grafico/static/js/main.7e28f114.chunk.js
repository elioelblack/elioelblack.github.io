(this.webpackJsonptest_grafico=this.webpackJsonptest_grafico||[]).push([[0],{167:function(e,s,c){"use strict";c.r(s);var t=c(0),a=c(1),l=c.n(a),i=c(23),d=c.n(i),j=(c(63),c(64),c(34)),n=c(179),r=c(180),b=c(181),O=c(182),h=c(36),x=c.n(h),o=c(16),m=c.n(o),N=c(37),T=c.n(N),A=c(53),p=c.n(A),u=c(55),g=c.n(u);var E=function(){var e=[{MERCADO:"Primario Privado",CODIGO_MERCADO:"p",TIPO_RENTA:"F",TIPO_TITULO:"P",MONTO:"6000000",MONTO_ANTERIOR:"1949387.82",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"pP1"},{MERCADO:"Registro Operaciu00f3n Intl. Pu00fablico",CODIGO_MERCADO:"i",TIPO_RENTA:"F",TIPO_TITULO:"PC",MONTO:"3120000",MONTO_ANTERIOR:"0",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"iPC1"},{MERCADO:"Registro Operaciu00f3n Intl. Renta Variable",CODIGO_MERCADO:"i",TIPO_RENTA:"V",TIPO_TITULO:"P",MONTO:"1134700",MONTO_ANTERIOR:"51955.16",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"iP5"},{MERCADO:"Reportos Privado",CODIGO_MERCADO:"r",TIPO_RENTA:"F",TIPO_TITULO:"P",MONTO:"538636.04",MONTO_ANTERIOR:"29840.32",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"rP1"},{MERCADO:"Reportos Pu00fablico",CODIGO_MERCADO:"r",TIPO_RENTA:"F",TIPO_TITULO:"PC",MONTO:"1991400.07",MONTO_ANTERIOR:"383203.47",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"rPC1"},{MERCADO:"Secundario Privado",CODIGO_MERCADO:"s",TIPO_RENTA:"F",TIPO_TITULO:"P",MONTO:"8396170.83",MONTO_ANTERIOR:"1230994",FECHAANTERIOR:"11/11/2020",FECHAACTUAL:"03 Diciembre",TIP_MERCA:"sP1"}],s=e.map((function(e){return e.MONTO}));console.log(s);var c=function(){return{labels:e.map((function(e){return e.FECHAACTUAL})),datasets:[{type:"line",label:"Variaci\xf3n",borderColor:"#129048",borderWidth:2,fill:!1,data:s},{type:"bar",label:"Por d\xeda en Millones de USD",backgroundColor:"#012b99",data:s,borderColor:"white",borderWidth:2}]}},a={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};return Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)("header",{className:"App-header",style:{paddingLeft:"5%",paddingRight:"5%"},children:[Object(t.jsx)("h1",{}),Object(t.jsx)("div",{style:{border:"1px solid darkgray",width:"65%",height:"100%",padding:15},children:Object(t.jsxs)(n.a,{children:[Object(t.jsxs)(r.a,{children:[Object(t.jsx)(b.a,{xs:3,md:3,lg:3,children:Object(t.jsx)("span",{style:{fontSize:12,color:"red"},children:"Sesi\xf3n cerrada"})}),Object(t.jsx)(b.a,{xs:6,md:6,lg:6,children:Object(t.jsx)("span",{style:{fontSize:10},children:"Falta 1 d\xedas 7 horas 1 minutos para abrir la sesi\xf3n|Hora actual 01:29am"})}),Object(t.jsx)(b.a,{xs:3,md:3,lg:3,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{style:{fontSize:10,width:"100%"},variant:"success",children:"VER TABLA COMPLETA"})})})]}),Object(t.jsxs)(r.a,{style:{background:"#fbfbfb"},children:[Object(t.jsx)(b.a,{id:"grafico1",children:Object(t.jsx)(j.Bar,{data:c,options:a})}),Object(t.jsxs)(b.a,{id:"grafico2",style:{display:"none"},children:["*****",Object(t.jsx)(j.Bar,{data:c,options:a,style:{display:"none"}}),"  "]})]})]})}),Object(t.jsx)("hr",{}),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(n.a,{style:{border:"1px solid darkgray",width:"65%",height:"100%",padding:15},children:[Object(t.jsx)("div",{children:Object(t.jsxs)(r.a,{children:[Object(t.jsx)("div",{className:"btn-group",children:Object(t.jsx)(b.a,{xs:12,md:12,lg:12,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{className:"button-enable",onClick:function(){document.getElementById("tabla1").style.display="",document.getElementById("tabla2").style.display="none",document.getElementById("grafico1").style.display="",document.getElementById("grafico2").style.display="none"},children:"Del dia"})})})}),Object(t.jsx)("div",{className:"btn-group",children:Object(t.jsx)(b.a,{xs:12,md:12,lg:12,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{className:"button-enable",onClick:function(){document.getElementById("tabla1").style.display="none",document.getElementById("tabla2").style.display="",document.getElementById("grafico1").style.display="none",document.getElementById("grafico2").style.display=""},children:"Acumulado"})})})}),Object(t.jsx)("div",{className:"btn-group",children:Object(t.jsx)(b.a,{xs:12,md:12,lg:12,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{className:"button-enable",children:"Mas negociados"})})})}),Object(t.jsx)("div",{className:"btn-group",children:Object(t.jsx)(b.a,{xs:12,md:12,lg:12,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{className:"button-enable",children:"Mercado integrado"})})})}),Object(t.jsx)("div",{className:"btn-group",children:Object(t.jsx)(b.a,{xs:12,md:12,lg:12,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{className:"button-enable",children:"Reajustes de tasas"})})})}),Object(t.jsx)("div",{className:"btn-group",children:Object(t.jsx)(b.a,{xs:12,md:12,lg:12,children:Object(t.jsx)("spam",{children:Object(t.jsxs)(O.a,{className:"button-enable",children:[Object(t.jsx)(p.a,{}),Object(t.jsx)(g.a,{})]})})})})]})}),Object(t.jsx)("div",{className:"table-responsive",id:"tabla1",children:Object(t.jsxs)("table",{className:"table table-hover table-sm",children:[Object(t.jsx)("thead",{children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{}),Object(t.jsx)("th",{children:"Julio 24(USD $)"}),Object(t.jsx)("th",{children:"Julio 25(USD $)"}),Object(t.jsx)("th",{children:"Variacion"})]})}),Object(t.jsxs)("tbody",{children:[Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(t.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(t.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(t.jsxs)("td",{className:"table-success",children:["5% ",Object(t.jsx)("spam",{children:Object(t.jsx)(m.a,{})})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(t.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(t.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(t.jsxs)("td",{className:"table-danger",children:["-5% ",Object(t.jsx)("spam",{children:Object(t.jsx)(x.a,{})})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(t.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(t.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(t.jsxs)("td",{className:"table-primary",children:["0%",Object(t.jsx)("spam",{children:Object(t.jsx)(T.a,{})})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(t.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(t.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(t.jsxs)("td",{className:"table-success",children:["5% ",Object(t.jsx)("spam",{children:Object(t.jsx)(m.a,{})})]})]})]})]})}),Object(t.jsx)("div",{className:"table-responsive",id:"tabla2",style:{display:"none"},children:Object(t.jsxs)("table",{className:"table table-hover table-sm",children:[Object(t.jsx)("thead",{children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{}),Object(t.jsx)("th",{children:"Julio 25(USD $)"}),Object(t.jsx)("th",{children:"Julio 26(USD $)"}),Object(t.jsx)("th",{children:"Variacion"})]})}),Object(t.jsxs)("tbody",{children:[Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(t.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(t.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(t.jsxs)("td",{className:"table-success",children:["5% ",Object(t.jsx)("spam",{children:Object(t.jsx)(m.a,{})})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(t.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(t.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(t.jsxs)("td",{className:"table-danger",children:["-5% ",Object(t.jsx)("spam",{children:Object(t.jsx)(x.a,{})})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(t.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(t.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(t.jsxs)("td",{className:"table-primary",children:["0%",Object(t.jsx)("spam",{children:Object(t.jsx)(T.a,{})})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"table-active",children:"Primario Privado"}),Object(t.jsx)("td",{className:"table-active",children:"$15,000,000"}),Object(t.jsx)("td",{className:"table-secondary",children:"$15,000,000"}),Object(t.jsxs)("td",{className:"table-success",children:["5% ",Object(t.jsx)("spam",{children:Object(t.jsx)(m.a,{})})]})]})]})]})}),Object(t.jsx)("div",{children:Object(t.jsxs)(r.a,{children:[Object(t.jsx)(b.a,{xs:4,md:4,lg:4,children:Object(t.jsx)("strong",{children:"Total"})}),Object(t.jsx)(b.a,{xs:2,md:2,lg:2,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{className:"button-enable",children:"000 000 000"})})}),Object(t.jsx)(b.a,{xs:2,md:2,lg:2,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{className:"button-enable",children:"000 000 000"})})}),Object(t.jsx)(b.a,{xs:4,md:4,lg:4,children:Object(t.jsx)("span",{children:Object(t.jsx)(O.a,{className:"button-prt",children:"15%"})})})]})})]}),Object(t.jsx)("hr",{})]})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,183)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,l=s.getLCP,i=s.getTTFB;c(e),t(e),a(e),l(e),i(e)}))};d.a.render(Object(t.jsx)(l.a.StrictMode,{children:Object(t.jsx)(E,{})}),document.getElementById("root")),C()},63:function(e,s,c){},64:function(e,s,c){}},[[167,1,2]]]);
//# sourceMappingURL=main.7e28f114.chunk.js.map