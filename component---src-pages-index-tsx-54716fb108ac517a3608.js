(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,n,t){"use strict";t("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},QeBL:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",(function(){return p}));var r=t("q1tI"),i=t.n(r),o=(t("0mN4"),t("vOnD")),a=t("v5mr");function u(){var e=s(["\n        text-align: left;\n        left: 0;\n        right: auto;\n      "]);return u=function(){return e},e}function c(){var e=s(["\n    font-size: 1.35rem;\n  "]);return c=function(){return e},e}function d(){var e=s(["\n    max-width: 100%;\n    font-size: 1.5rem;\n  "]);return d=function(){return e},e}function l(){var e=s(["\n    max-width: 32rem;\n  "]);return l=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),e.raw=n,e}var f=o.e.div.withConfig({displayName:"Intro__TitleWrapper",componentId:"sc-1aexaod-0"})(["pointer-events:none;font-size:1.7rem;max-width:36rem;line-height:1.3em;"," "," "," ",""],(function(e){return e.theme.media.md(l())}),(function(e){return e.theme.media.sm(d())}),(function(e){return e.theme.media.xs(c())}),(function(e){return e.fixed?Object(o.d)(["",";position:absolute;top:0;right:0;text-align:right;",""],Object(a.a)("padding"),(function(e){return e.theme.media.md(u())})):Object(o.d)(["text-align:left;"])})),m=o.e.h1.withConfig({displayName:"Intro__Title",componentId:"sc-1aexaod-1"})(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0px;font-family:inherit;font-size:inherit;span{color:",";text-decoration:line-through;}"],(function(e){return e.theme.colors.secondary})),h=function(e){return i.a.createElement(f,e,i.a.createElement(m,null,"Hi, I am Ramón Morcillo, a Software Engineer based in Madrid, Spain"))},v=t("9u5D"),x=t("soUV"),y=t("T+OK"),p="3159585216";n.default=function(e){var n=e.data.site.siteMetadata.title;return i.a.createElement(x.a,{title:n,transparentNavigation:!0},i.a.createElement(y.a,null),i.a.createElement(v.a,{title:"Home",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),i.a.createElement("section",null,i.a.createElement(h,{fixed:!0})))}},"T+OK":function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),o=t("vOnD"),a=(t("a1Th"),t("Btvt"),function(e,n){return void 0===e&&(e=10),void 0===n&&(n=1),Math.floor(Math.random()*e)+n}),u=function(){for(var e=[],n=0;n<a();n++)e.push("\n      radial-gradient(\n        circle at "+a(100)+"% "+a(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+a(100,60)+"%\n      )\n  ");return e.join(",")};n.a=function(e){var n,t,a=e.containerOpacity,c=void 0===a?1:a,d="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,l=1,s=[],f=!1,m={x:null,y:null},h=!0,v=[],x=-1,y=e.normalVelocity,p=void 0===y?5e-4:y,w={x:0,y:0,tx:0,ty:0,z:p},g=e.addEventListeners,E=void 0===g||g,b=function(e,n){if(h){if("number"==typeof m.x&&"number"==typeof m.y){var t=e-m.x,r=n-m.y;w.tx=w.tx-t/8*l*(f?1:-1),w.ty=w.ty-r/8*l*(f?1:-1)}m={x:e,y:n}}},M=function(e){l=window.devicePixelRatio||1,n=window.innerWidth*l,t=window.innerHeight*l,e.width=n,e.height=t,s.forEach((function(e){e.x=Math.random()*n,e.y=Math.random()*t}))},z=function(e){console.log("accelerates"),m={x:null,y:null},h=!e,w.z=e?.1:p},L=i.a.useRef(null),k=i.a.useState(null),I=k[0],O=k[1];i.a.useEffect((function(){var e=function(e){f=!0,b(e.clientX,e.clientY)},r=function(e){f=!0,b(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},i=function(){f=!1,m={x:null,y:null}},o=function(){f=!1,m={x:null,y:null}},a=function(){M(L.current)},u=function(e){z(e.deltaY<0)},c=function(e){!function(e){v=v.filter((function(n){return n.pointerId!==e.pointerId}))}(e),v.length<2&&(x=-1)};if(L.current){var h=L.current.getContext("2d");if(h){var y=L.current;E&&(y.addEventListener("pointerdown",(function(e){v.push(e)})),y.addEventListener("pointermove",(function(e){for(var n=0;n<v.length;n++)if(e.pointerId===v[n].pointerId){v[n]=e;break}if(2==v.length){var t=Math.abs(v[0].clientX-v[1].clientX);z(x>0&&t>x),x=t}})),y.addEventListener("pointerup",c),y.addEventListener("pointercancel",c),y.addEventListener("pointerout",c),y.addEventListener("pointerleave",c),window.addEventListener("wheel",u),window.addEventListener("resize",a),y.addEventListener("mousemove",e),y.addEventListener("touchmove",r),y.addEventListener("touchend",o),document.addEventListener("mouseleave",i)),O(h)}}if(I){var p=function(){w.tx*=.96,w.ty*=.96,w.x+=.8*(w.tx-w.x),w.y+=.8*(w.ty-w.y),s.forEach((function(e){e.x+=w.x*e.z+(e.x-n/2)*w.z*e.z,e.y+=w.y*e.z+(e.y-t/2)*w.z*e.z,e.z+=w.z,(e.x<-50||e.x>n+50||e.y<-50||e.y>t+50)&&function(e){var r="z",i=Math.abs(w.x),o=Math.abs(w.y);(i>1||o>1)&&(r="h"===(i>o?Math.random()<i/(i+o)?"h":"v":Math.random()<o/(i+o)?"v":"h")?w.x>0?"l":"r":w.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*n,e.y=Math.random()*t,e.z=.1):"l"===r?(e.x=-50,e.y=t*Math.random()):"r"===r?(e.x=n+50,e.y=t*Math.random()):"t"===r?(e.x=n*Math.random(),e.y=-50):"b"===r&&(e.x=n*Math.random(),e.y=t+50)}(e)}))};!function(){for(var e=0;e<d;e++)s.push({x:0,y:0,z:.2+.8*Math.random()})}(),M(L.current),function e(){I.clearRect(0,0,n,t),p(),s.forEach((function(e){I.beginPath(),I.lineCap="round",I.lineWidth=3*e.z*l,I.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",I.beginPath(),I.moveTo(e.x,e.y);var n=2*w.x,t=2*w.y;Math.abs(n)<.1&&(n=.5),Math.abs(t)<.1&&(t=.5),I.lineTo(e.x+n,e.y+t),I.stroke()})),requestAnimationFrame(e)}()}return function(){if(s.length=0,L.current){var n=L.current;n.removeEventListener("mousemove",e),n.removeEventListener("touchmove",r),n.removeEventListener("touchend",o),window.removeEventListener("wheel",u),window.removeEventListener("resize",a),document.removeEventListener("mouseleave",i)}}}),[I]);var T=Object(r.useContext)(o.a);return i.a.createElement("canvas",{id:"canvas",ref:L,style:{backgroundColor:T.colors.black,backgroundImage:u(),opacity:c,position:"fixed",width:"100%",height:"100%"}})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-54716fb108ac517a3608.js.map