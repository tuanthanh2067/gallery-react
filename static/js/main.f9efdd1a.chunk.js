(this["webpackJsonpyour-gallery"]=this["webpackJsonpyour-gallery"]||[]).push([[0],{44:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),o=t.n(i),c=t(25),a=t.n(c),d=t(11),s=t(4),h=t(3),l=t(5);function u(){var n=Object(s.a)(["\n  width: 50%;\n  font-weight: normal;\n  font-style: italic;\n  padding-left: 0.25rem;\n  @media (max-width: 900px) {\n    width: 80%;\n  }\n"]);return u=function(){return n},n}function m(){var n=Object(s.a)(["\n  margin: 1em auto 0em auto;\n  width: 50%;\n  height: 40px;\n  .input {\n    width: 80%;\n    height: 100%;\n    font-size: 1.125rem;\n    padding-left: 0.5rem;\n    border: 1px solid #d4d4d4;\n    border-right: none;\n  }\n  .submit {\n    width: 20%;\n    height: 100%;\n    background: ",";\n    color: ",";\n    border: ",';\n    font-family: "Montserrat", sans-serif;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  @media (max-width: 900px) {\n    width: 90%;\n  }\n  @media (max-width: 400px) {\n    width: 100%;\n  }\n']);return m=function(){return n},n}var f=h.c.form(m(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return n.theme.buttonBorder})),b=h.c.h5(u()),x=function(){var n="",e=Object(l.f)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(f,{onSubmit:function(t){t.preventDefault(),t.currentTarget.reset(),e.push("/photos/".concat(n,"/1"))},children:[Object(r.jsx)("input",{type:"text",className:"input",placeholder:"Find something...",onChange:function(e){n=e.target.value},required:!0}),Object(r.jsx)("input",{className:"submit",type:"submit",value:"Search"})]}),Object(r.jsx)(b,{children:"For example: Food, Beach, Gaming, Relax,..."})]})};function p(){var n=Object(s.a)(["\n  width: 275px;\n  height: 375px;\n  border-radius: 18px;\n  border: 1px solid #c4c4c4;\n  margin: 1.25em 0em;\n  div {\n    width: 100%;\n    height: 85%;\n    overflow: hidden;\n  }\n  img {\n    border-top-left-radius: 18px;\n    border-top-right-radius: 18px;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: all 0.5s ease;\n    cursor: pointer;\n  }\n  h4 {\n    height: 15%;\n    width: 100%;\n    margin-top: 0.25rem;\n    text-align: center;\n    font-size: 1.25rem;\n  }\n  img:hover {\n    transform: scale(1.25);\n  }\n  @media (max-width: 700px) {\n    width: 240px;\n    height: 290px;\n  }\n"]);return p=function(){return n},n}var j=h.c.div(p()),g=function(n){var e=n.info;return Object(r.jsxs)(j,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:e.src.medium,alt:e.url,onClick:function(){window.location.href=e.url}})}),Object(r.jsx)("h4",{children:e.photographer})]})};function O(){var n=Object(s.a)(["\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #3498db; /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return O=function(){return n},n}var w=h.c.div(O()),v=function(){return Object(r.jsx)(w,{})};function y(){var n=Object(s.a)(["\n  width: 100%;\n  text-align: center;\n  margin-top: 1rem;\n"]);return y=function(){return n},n}var F=h.c.h2(y()),k=function(){return Object(r.jsx)(F,{children:"No Images Found"})};function z(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  min-height: 500px;\n  flex-wrap: wrap;\n  @media (max-width: 540px) {\n    justify-content: center;\n  }\n"]);return z=function(){return n},n}var L=h.c.div(z()),T=function(n){var e=Object(l.g)(),t=e.pathname.split("/")[2],o=e.pathname.split("/")[3];Object(i.useEffect)((function(){n.fetchHandler(o,t)}),[t,o]);var c=null;return c=n.photos.length>0?n.photos.map((function(n){return Object(r.jsx)(g,{info:n},n.id)})):Object(r.jsx)(k,{}),n.isLoading?Object(r.jsx)(v,{}):Object(r.jsx)(L,{children:c})};function I(){var n=Object(s.a)(['\n  margin: 5rem 0rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  h3 {\n    text-transform: capitalize;\n    font-size: 2.5rem;\n  }\n  button {\n    padding: 18px 36px;\n    font-size: 1.25rem;\n    font-family: "Montserrat", sans-serif;\n    margin-top: 2em;\n    cursor: pointer;\n    background: ',";\n    color: ",";\n    border: ",";\n  }\n"]);return I=function(){return n},n}var S=h.c.div(I(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return n.theme.buttonBorder})),B=function(n){var e=Object(l.f)(),t=e.location,i=t.pathname.split("/")[2],o=t.pathname.split("/")[3];return Object(r.jsxs)(S,{children:[Object(r.jsxs)("h3",{children:[i," photos"]}),Object(r.jsx)(T,{photos:n.photos,setPhotos:n.setPhotos,isLoading:n.isLoading,setIsLoading:n.setIsLoading,fetchHandler:n.fetchHandler}),n.photos.length>0?Object(r.jsx)("button",{onClick:function(){o=parseInt(o)+1,e.push("/photos/".concat(i,"/").concat(o))},children:"Load More..."}):null]})};function C(){var n=Object(s.a)(["\n  background: ",";\n  color: ",";\n  border: ",";\n  border-radius: 12px;\n  padding: 12px 26px;\n  font-family: inherit;\n  font-size: 1.005rem;\n  font-weight: bold;\n  margin-bottom: 0.75rem;\n  outline: none;\n  cursor: pointer;\n"]);return C=function(){return n},n}var P=h.c.button(C(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return n.theme.buttonBorder})),A=function(n){var e=n.themeToggler;return Object(r.jsx)(P,{onClick:e,children:"Switch mode"})};function H(){var n=Object(s.a)(["\n  background: ",";\n  color: ",";\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 10rem 20rem 0rem 20rem;\n  align-items: center;\n  transition: all 0.35s linear;\n  h2 {\n    font-size: 2.25rem;\n  }\n\n  @media (max-width: 1300px) {\n    padding: 10rem 5rem;\n  }\n\n  @media (max-width: 700px) {\n    padding: 10rem 2rem;\n    h2 {\n      font-size: 1.75rem;\n    }\n  }\n  @media (max-width: 430px) {\n    h2 {\n      font-size: 1.35rem;\n    }\n  }\n  @media (max-width: 360px) {\n    padding: 10rem 1rem;\n  }\n"]);return H=function(){return n},n}var M=h.c.div(H(),(function(n){return n.theme.body}),(function(n){return n.theme.text})),N=function(n){var e=n.photos,t=n.setPhotos,i=n.isLoading,o=n.setIsLoading,c=n.fetchHandler,a=n.themeToggler,d=Object(l.g)().pathname.split("/")[2];return Object(r.jsxs)(M,{children:[Object(r.jsx)(A,{themeToggler:a}),Object(r.jsx)("h2",{children:"Explore billions of photos"}),Object(r.jsx)(x,{}),d&&Object(r.jsx)(B,{photos:e,setPhotos:t,isLoading:i,setIsLoading:o,fetchHandler:c})]})},E=t(29),q=Object(E.a)("563492ad6f91700001000001ea82e7e8f66f4c2cb1ea1fed9dd08dc7"),D=function(n){var e=n.themeToggler,t=Object(i.useState)([]),o=Object(d.a)(t,2),c=o[0],a=o[1],s=Object(i.useState)(!1),h=Object(d.a)(s,2),l=h[0],u=h[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(N,{photos:c,setPhotos:a,isLoading:l,setIsLoading:u,fetchHandler:function(n,e){u(!0),q.photos.search({query:e,per_page:40,page:n}).then((function(n){var e=n.photos;a(e),u(!1)})).catch((function(n){console.log("error from fetching"),console.log(n)}))},themeToggler:e})})},G=t(10);function J(){var n=Object(s.a)(['\n  top: 0;\n  height: 86px;\n  width: 100%;\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0rem 20rem;\n  background: #282828;\n  z-index: 5;\n\n  a {\n    color: white;\n    text-decoration: none;\n    height: 100%;\n    border-bottom: 4px solid transparent;\n    padding: 36px 0px;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    align-items: center;\n    width: 300px;\n    display: flex;\n    justify-content: space-between;\n    height: 100%;\n    li {\n      display: flex;\n      height: 100%;\n      align-items: center;\n    }\n\n    a:hover,\n    a:active,\n    a.active {\n      border-bottom: 4px solid white;\n    }\n  }\n\n  .logo {\n    font-size: 1.75rem;\n    font-family: "Lobster", sans-serif;\n  }\n  @media (max-width: 1300px) {\n    padding: 0 10rem;\n  }\n  @media (max-width: 900px) {\n    padding: 0 3rem;\n  }\n  @media (max-width: 700px) {\n    padding: 0 2rem;\n    ul {\n      width: 200px;\n    }\n  }\n  @media (max-width: 430px) {\n    padding: 0 2rem;\n    ul {\n      width: 150px;\n    }\n  }\n  @media (max-width: 360px) {\n    padding: 0 1rem;\n    .logo {\n      font-size: 1.5rem;\n    }\n  }\n']);return J=function(){return n},n}var R=h.c.nav(J()),Y=function(){return Object(r.jsxs)(R,{children:[Object(r.jsx)("h1",{children:Object(r.jsx)(G.b,{to:"/",className:"logo",children:"Your Gallery"})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(G.b,{to:"/aboutme",children:"About me"})}),Object(r.jsx)("li",{children:Object(r.jsx)(G.b,{to:"/oops",children:"Oops"})})]})]})},_=t(15),K=t(30),Q=t(17);function U(){var n=Object(s.a)(["\n  display: flex;\n  height: 70px;\n  align-items: center;\n  font-size: 2.125rem;\n  overflow: hidden;\n  h3 {\n    font-size: 1.25rem;\n    margin-left: 0.75rem;\n    font-weight: normal;\n  }\n  @media (max-width: 500px) {\n    font-size: 1.5rem;\n    h3 {\n      font-size: 0.9rem;\n    }\n  }\n"]);return U=function(){return n},n}function V(){var n=Object(s.a)(["\n  background: ",";\n  color: ",";\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 0rem 20rem;\n  justify-content: center;\n  @media (max-width: 1300px) {\n    padding: 0 10rem;\n  }\n  @media (max-width: 900px) {\n    padding: 0 3rem;\n  }\n  @media (max-width: 700px) {\n    padding: 0 2rem;\n  }\n  @media (max-width: 500px) {\n    h2 {\n      font-size: 1.25rem;\n    }\n  }\n"]);return V=function(){return n},n}var W=h.c.div(V(),(function(n){return n.theme.body}),(function(n){return n.theme.text})),X=h.c.div(U()),Z=function(){return Object(r.jsxs)(W,{children:[Object(r.jsx)("h2",{children:"Full name: Tuan Thanh Tan"}),Object(r.jsx)("h2",{children:"Contact me via"}),Object(r.jsxs)(X,{children:[Object(r.jsx)(_.a,{icon:K.a,style:{color:"brown"}}),Object(r.jsx)("h3",{children:"tuanthanh2067@gmail.com"})]}),Object(r.jsxs)(X,{children:[Object(r.jsx)(_.a,{icon:Q.c,style:{color:"#4294FF"}}),Object(r.jsx)("h3",{children:"https://www.linkedin.com/in/tuan-thanh-tan-aa980419a/"})]}),Object(r.jsxs)(X,{children:[Object(r.jsx)(_.a,{icon:Q.a,style:{color:"#4294FF"}}),Object(r.jsx)("h3",{children:"https://www.facebook.com/profile.php?id=100010366298292"})]}),Object(r.jsxs)(X,{children:[Object(r.jsx)(_.a,{icon:Q.b}),Object(r.jsx)("h3",{children:"https://github.com/tuanthanh2067"})]})]})};function $(){var n=Object(s.a)(["\n  background: ",";\n  color: ",";\n  text-align: center;\n  padding: 10rem 0rem 0rem 0rem;\n  width: 100%;\n  height: 100%;\n"]);return $=function(){return n},n}var nn=function(){return Object(r.jsx)(en,{children:Object(r.jsx)("h1",{children:"Page Not Found"})})},en=h.c.div($(),(function(n){return n.theme.body}),(function(n){return n.theme.text})),tn={body:"#FFF",text:"#363537",background:"white",buttonBorder:"1px solid #252525"},rn={body:"#2b2b2b",text:"#FAFAFA",background:"#999",buttonBorder:"1px solid #ffffff"};function on(){var n=Object(s.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    body {\n        font-family: 'Montserrat', sans-serif;\n        height: 100vh;\n    }\n    #root {\n        height: 100vh;\n\n    }\n    .App {\n        height: 100vh;\n    }\n    button, input[type='submit'] {\n        transition: all 0.35s linear;\n    }\n    \n"]);return on=function(){return n},n}var cn=Object(h.b)(on());var an=function(){var n=function(){var n=Object(i.useState)("light"),e=Object(d.a)(n,2),t=e[0],r=e[1],o=function(n){window.localStorage.setItem("theme",n),r(n)};return Object(i.useEffect)((function(){var n=window.localStorage.getItem("theme");r(n?localStorage:"light"),console.log("useModes useEffect")}),[]),[t,function(){o("light"===t?"dark":"light"),console.log("toggle mode")}]}(),e=Object(d.a)(n,2),t=e[0],o=e[1],c="light"===t?tn:rn;return Object(r.jsx)(h.a,{theme:c,children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(cn,{}),Object(r.jsx)(Y,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:["/photos/:pattern/:page","/"],exact:!0,children:Object(r.jsx)(D,{themeToggler:o})}),Object(r.jsx)(l.a,{path:"/aboutme",children:Object(r.jsx)(Z,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(nn,{})})]})]})})},dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),o(n),c(n)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(G.a,{basename:"/gallery-react",children:Object(r.jsx)(an,{})})}),document.getElementById("root")),dn()}},[[44,1,2]]]);
//# sourceMappingURL=main.f9efdd1a.chunk.js.map