(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(14),a=n.n(i),o=(n(22),n(4)),l=n(17),s=n(2),u={display:"flex",justifyContent:"center",alignItems:"center"},j=Object(s.a)(Object(s.a)({flex:1},u),{},{borderRadius:"5px",backgroundColor:"#F6F7F6",height:"60px"}),d=Object(s.a)(Object(s.a)({},j),{},{boxShadow:"2px 2px 10px #D2D2D2"}),b=Object(s.a)({flex:1},u),x=Object(s.a)(Object(s.a)({height:"100%",flex:7},{display:"flex",justifyContent:"flex-start",alignItems:"center"}),{},{marginLeft:"5px"}),f={width:"90%",border:"none",backgroundColor:"#F6F7F6",fontSize:"18px",outline:"none"},O=Object(s.a)(Object(s.a)({},u),{},{backgroundColor:"#F6F7F6",border:"none",fontSize:"18px"}),p=Object(s.a)(Object(s.a)({},O),{},{cursor:"pointer"}),h=n(0),m=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(h.jsx)("div",{children:Object(h.jsx)("button",{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},onClick:function(){return e.OnClick()},style:r?p:O,children:e.children})})},y=function(e){var t=e.query,n=e.setQuery,r=Object(c.useState)(!1),i=Object(o.a)(r,2),a=i[0],s=i[1];return Object(h.jsxs)("div",{onFocus:function(){return s(!0)},onBlur:function(){return s(!1)},style:a?d:j,children:[Object(h.jsx)("div",{style:b,children:Object(h.jsx)(m,{OnClick:function(){s(!1)},children:Object(h.jsx)(l.a,{style:{fontSize:"25px"}})})}),Object(h.jsx)("div",{style:x,children:Object(h.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",value:t,placeholder:"Search",style:f})})]})},g={flex:1},v=function(e){var t=e.type,n=e.data;e.time;return Object(h.jsx)("div",{style:g,children:n.map((function(e,n){return r.a.createElement(t,{element:e},{key:"timeZones"+n})}))})},S=n(15),C=n.n(S),F=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){var e=new Date;r(e)}),1e3);return function(){return clearInterval(e)}}),[]),{time:n}},D=Object(s.a)(Object(s.a)({},u),{},{height:"160px",boxShadow:"2px 2px 10px #D2D2D2",borderRadius:"5px",marginTop:"20px"}),I=Object(s.a)(Object(s.a)({flex:1,flexDirection:"column"},{display:"flex",justifyContent:"center",alignItems:"flex-start"}),{},{marginLeft:"20px"}),k=Object(s.a)({flex:1,marginRight:"20px"},{display:"flex",justifyContent:"flex-end",alignItems:"center"}),w={fontSize:"18px",fontWeight:"700"},z={fontSize:"14px",color:"#838383"},E=function(e){F().time;var t=e.element.Name.split(" ").pop(),n=e.element.Name.slice(0,e.element.Name.length-t.length),c=C()().add(parseInt(e.element.Hours),"hour").add(parseInt(e.element.Mins),"minute").format("HH:mm:ss");return Object(h.jsxs)("div",{style:D,children:[Object(h.jsxs)("div",{style:I,children:[Object(h.jsx)("div",{style:w,children:n}),Object(h.jsx)("div",{style:z,children:t})]}),Object(h.jsx)("div",{style:k,children:Object(h.jsx)("div",{style:w,children:c})})]})},L=n(16),M=n.n(L),T=function(){return{get:function(e,t,n){M.a.get(e,{params:{query:t}}).then((function(e){n(e.data)})).catch((function(e){return e}))}}},q=Object(s.a)({marginTop:"50px",flexDirection:"column",width:"100%"},u),B=Object(s.a)({width:"700px"},u),H=Object(s.a)({margin:"10px",width:"700px"},u);var N=function(){var e=T().get,t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(""),l=Object(o.a)(a,2),s=l[0],u=l[1];return Object(c.useEffect)((function(){var t=!1;return t||e("http://localhost:8000/data/get",s,(function(e){null!==e&&void 0!==e&&!0!==t&&i(e)})),function(){t=!0}}),[s]),Object(h.jsxs)("div",{style:q,children:[Object(h.jsx)("div",{style:B,children:Object(h.jsx)(y,{query:s,setQuery:u})}),Object(h.jsx)("div",{style:H,children:Object(h.jsx)(v,{type:E,data:r})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),R()}},[[42,1,2]]]);
//# sourceMappingURL=main.1ccd0d78.chunk.js.map