(this["webpackJsonpweather-local"]=this["webpackJsonpweather-local"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(14),s=n.n(r),i=(n(21),n.p+"static/media/logo.64a68488.svg"),o=(n(22),n(3)),j=n(5),u=n.n(j),d=n(15),l=n(16),h=n.n(l),p="https://fcc-weather-api.glitch.me/api/current?";function b(){return(b=Object(d.a)(u.a.mark((function e(t,n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=p+t+"&"+n,e.abrupt("return",h.a.get(c).then((function(e){var t=e.data;return console.log(t),t})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(42),n(43);var O=n(0);function m(e){var t={drizzle:"rain",clouds:"rain",rain:"rain",snow:"snow",clear:"night",thunderstorm:"storm",sunny:"sunny","sun-shower":"sunny"}[e.type.toLowerCase()]||"";return Object(O.jsx)("div",{className:"card card-"+t,children:Object(O.jsx)("div",{className:t,children:" "})})}function x(){var e=Object(c.useState)("init"),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("C"),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(c.useState)(0),d=Object(o.a)(u,2),l=d[0],h=d[1],p=Object(c.useState)(0),x=Object(o.a)(p,2),f=x[0],g=x[1],v=Object(c.useState)(""),w=Object(o.a)(v,2),y=w[0],N=w[1],S=Object(c.useState)({city:"",country:"",desc:""}),C=Object(o.a)(S,2),k=C[0],A=C[1];return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){a("processing"),function(e,t){return b.apply(this,arguments)}("lat="+e.coords.latitude,"lon="+e.coords.longitude).then((function(e){A({city:e.name,country:e.sys.country,desc:e.weather[0].main});var t=Math.round(10*e.main.temp)/10;g(t),h(t),N(e.weather[0].main),a("done")}))}))}),[]),"init"===n?Object(O.jsx)("p",{children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u0438"}):"processing"===n?Object(O.jsx)("p",{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u0433\u043e\u0434\u0435..."}):Object(O.jsxs)("div",{className:"weather-widget",children:[Object(O.jsxs)("div",{className:"weather-widget__info",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:k.city}),", ",Object(O.jsx)("span",{children:k.country})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{id:"temp",children:l}),Object(O.jsx)("span",{className:"temp",onClick:function(){var e="C"===i?"F":"C";j(e),h("F"===e?Math.round(9*f/5+32):f)},children:i})]}),Object(O.jsx)("p",{children:k.desc})]}),Object(O.jsx)(m,{type:y})]})}var f=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(O.jsx)("p",{children:"\u041f\u043e\u0433\u043e\u0434\u0430 \u043f\u043e \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u0438"})]}),navigator.geolocation?Object(O.jsx)(x,{}):Object(O.jsx)("h4",{children:"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"})]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bccf9050.chunk.js.map