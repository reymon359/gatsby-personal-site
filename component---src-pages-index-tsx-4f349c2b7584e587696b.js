(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3nLz":function(t,e,n){"use strict";n("t+fG")("fixed",(function(t){return function(){return t(this,"tt","","")}}))},"9u5D":function(t,e,n){"use strict";n("pJf4");var r=n("uj1u"),i=n("q1tI"),o=n.n(i),a=n("qhky"),c=n("Wbzz");e.a=function(t){var e=t.title,n=t.description,i=t.image,u=t.lang,d=t.keywords;return o.a.createElement(c.StaticQuery,{query:"1000709734",render:function(t){var r=n||t.site.siteMetadata.description,c=i||t.site.siteMetadata.image;return u=u||"en",d=d||[],o.a.createElement(a.a,{htmlAttributes:{lang:u},title:e,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:e},{property:"og:description",content:r},{property:"og:image",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author.name},{name:"twitter:title",content:e},{name:"twitter:description",content:r},{name:"twitter:image",content:c},{name:"google-site-verification",content:t.site.siteMetadata.googleSiteVerification}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[])})},data:r})}},QeBL:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return x}));var r=n("q1tI"),i=n.n(r),o=(n("3nLz"),n("vOnD")),a=n("v5mr");function c(){var t=s(["\n        text-align: left;\n        left: 0;\n        right: auto;\n      "]);return c=function(){return t},t}function u(){var t=s(["\n    font-size: 1.35rem;\n  "]);return u=function(){return t},t}function d(){var t=s(["\n    max-width: 100%;\n    font-size: 1.5rem;\n  "]);return d=function(){return t},t}function l(){var t=s(["\n    max-width: 32rem;\n  "]);return l=function(){return t},t}function s(t,e){return e||(e=t.slice(0)),t.raw=e,t}var f=o.e.div.withConfig({displayName:"Intro__TitleWrapper",componentId:"sc-1aexaod-0"})(["font-size:1.7rem;max-width:36rem;line-height:1.3em;"," "," "," ",""],(function(t){return t.theme.media.md(l())}),(function(t){return t.theme.media.sm(d())}),(function(t){return t.theme.media.xs(u())}),(function(t){return t.fixed?Object(o.d)(["",";position:absolute;top:0;right:0;text-align:right;",""],Object(a.a)("padding"),(function(t){return t.theme.media.md(c())})):Object(o.d)(["text-align:left;"])})),m=o.e.h1.withConfig({displayName:"Intro__Title",componentId:"sc-1aexaod-1"})(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0px;font-family:inherit;font-size:inherit;span{color:",";text-decoration:line-through;}"],(function(t){return t.theme.colors.secondary})),h=function(t){return i.a.createElement(f,t,i.a.createElement(m,null,"Hi, I am Ramon Morcillo, a software engineer based in Madrid, Spain"))},v=n("9u5D"),p=n("soUV"),y=(n("q8oJ"),n("8npG"),function(t,e){return void 0===t&&(t=10),void 0===e&&(e=1),Math.floor(Math.random()*t)+e}),g=o.e.div.withConfig({displayName:"Stars__StarsContainer",componentId:"sc-17xzq84-0"})(["width:100%;height:100vh;background-color:",";background-image:",";"],(function(t){return t.theme.colors.black}),function(){for(var t=[],e=0;e<y();e++)t.push("\n      radial-gradient(\n        circle at "+y(100)+"% "+y(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+y(100,60)+"%\n      )\n  ");return t.join(",")}()),w=function(){var t,e,n="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,r=1,o=[],a=!1,c={x:null,y:null},u=!0,d=[],l=-1,s={x:0,y:0,tx:0,ty:0,z:5e-4},f=function(t,e){if(u){if("number"==typeof c.x&&"number"==typeof c.y){var n=t-c.x,i=e-c.y;s.tx=s.tx-n/8*r*(a?1:-1),s.ty=s.ty-i/8*r*(a?1:-1)}c={x:t,y:e}}},m=function(n){r=window.devicePixelRatio||1,t=window.innerWidth*r,e=window.innerHeight*r,n.width=t,n.height=e,o.forEach((function(n){n.x=Math.random()*t,n.y=Math.random()*e}))},h=function(t){console.log("accelerates"),c={x:null,y:null},u=!t,s.z=t?.1:5e-4},v=i.a.useRef(null),p=i.a.useState(null),y=p[0],w=p[1];return i.a.useEffect((function(){var i=function(t){a=!0,f(t.clientX,t.clientY)},u=function(t){a=!0,f(t.touches[0].clientX,t.touches[0].clientY),t.preventDefault()},p=function(){a=!1,c={x:null,y:null}},g=function(){a=!1,c={x:null,y:null}},x=function(){m(v.current)},E=function(t){h(t.deltaY<0)},b=function(t){M(t),d.length<2&&(l=-1)},M=function(t){d=d.filter((function(e){return e.pointerId!==t.pointerId}))};if(v.current){var z=v.current.getContext("2d");if(z){var L=v.current;L.addEventListener("pointerdown",(function(t){d.push(t)})),L.addEventListener("pointermove",(function(t){for(var e=0;e<d.length;e++)if(t.pointerId===d[e].pointerId){d[e]=t;break}if(2==d.length){var n=Math.abs(d[0].clientX-d[1].clientX);h(l>0&&n>l),l=n}})),L.addEventListener("pointerup",b),L.addEventListener("pointercancel",b),L.addEventListener("pointerout",b),L.addEventListener("pointerleave",b),window.addEventListener("wheel",E),window.addEventListener("resize",x),L.addEventListener("mousemove",i),L.addEventListener("touchmove",u),L.addEventListener("touchend",g),document.addEventListener("mouseleave",p),w(z)}}if(y){var k=function(){s.tx*=.96,s.ty*=.96,s.x+=.8*(s.tx-s.x),s.y+=.8*(s.ty-s.y),o.forEach((function(n){n.x+=s.x*n.z+(n.x-t/2)*s.z*n.z,n.y+=s.y*n.z+(n.y-e/2)*s.z*n.z,n.z+=s.z,(n.x<-50||n.x>t+50||n.y<-50||n.y>e+50)&&function(n){var r="z",i=Math.abs(s.x),o=Math.abs(s.y);(i>1||o>1)&&(r="h"===(i>o?Math.random()<i/(i+o)?"h":"v":Math.random()<o/(i+o)?"v":"h")?s.x>0?"l":"r":s.y>0?"t":"b");n.z=.2+.8*Math.random(),"z"===r?(n.x=Math.random()*t,n.y=Math.random()*e,n.z=.1):"l"===r?(n.x=-50,n.y=e*Math.random()):"r"===r?(n.x=t+50,n.y=e*Math.random()):"t"===r?(n.x=t*Math.random(),n.y=-50):"b"===r&&(n.x=t*Math.random(),n.y=e+50)}(n)}))};!function(){for(var t=0;t<n;t++)o.push({x:0,y:0,z:.2+.8*Math.random()})}(),m(v.current),function n(){y.clearRect(0,0,t,e),k(),o.forEach((function(t){y.beginPath(),y.lineCap="round",y.lineWidth=3*t.z*r,y.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",y.beginPath(),y.moveTo(t.x,t.y);var e=2*s.x,n=2*s.y;Math.abs(e)<.1&&(e=.5),Math.abs(n)<.1&&(n=.5),y.lineTo(t.x+e,t.y+n),y.stroke()})),requestAnimationFrame(n)}()}return function(){if(o.length=0,v.current){var t=v.current;t.removeEventListener("mousemove",i),t.removeEventListener("touchmove",u),t.removeEventListener("touchend",g),window.removeEventListener("wheel",E),window.removeEventListener("resize",x),document.removeEventListener("mouseleave",p)}}}),[y]),i.a.createElement(g,null,i.a.createElement("canvas",{id:"canvas",ref:v,style:{position:"fixed",width:"100%",height:"100%"}}))},x="1097489062";e.default=function(t){var e=t.data.site.siteMetadata.title;return i.a.createElement(p.a,{title:e},i.a.createElement(w,null),i.a.createElement(v.a,{title:"Home",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),i.a.createElement("section",null,i.a.createElement(h,{fixed:!0})))}},"t+fG":function(t,e,n){var r=n("P8UN"),i=n("96qb"),o=n("ap2Z"),a=/"/g,c=function(t,e,n,r){var i=String(o(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4f349c2b7584e587696b.js.map