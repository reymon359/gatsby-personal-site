(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1GPU":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return I}));var r=n("q1tI"),i=n.n(r),a=n("soUV"),o=n("9u5D"),u=n("vOnD");function c(){var e=m(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return c=function(){return e},e}function l(){var e=m(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return l=function(){return e},e}function d(){var e=m(["\n    width: 1.45rem;\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return d=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var s=u.e.div.withConfig({displayName:"Content__ContentContainer",componentId:"sc-1q50de9-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;position:fixed;height:100%;top:0;left:0;right:0;bottom:0;"," "," ",""],(function(e){return e.theme.media.lg(d())}),(function(e){return e.theme.media.md(l())}),(function(e){return e.theme.media.sm(c())})),f=function(e){var t=e.children;return i.a.createElement(s,null,t)},h=n("T+OK"),v=n("Wbzz");function p(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      &:hover {\n        > header {\n          transform: translateX(-.75rem);\n        }\n      }\n    "]);return p=function(){return e},e}var g=u.e.article.withConfig({displayName:"PostsListItem__Wrapper",componentId:"hqhtfb-0"})(["padding:1.3rem 0;border-bottom:1px dotted #2f3743;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;position:relative;> header{transform:translateX(0);transition:transform 0.5s cubic-bezier(0.5,0.1,0,1.15);backface-visibility:hidden;will-change:transform;}&:last-child{border-bottom:0;}> a{position:absolute;top:0;right:0;bottom:0;left:0;font-size:0;line-height:0;}",""],(function(e){return e.hasLink&&Object(u.d)(["",""],(function(e){return e.theme.media.hover(p())}))})),y=u.e.h3.withConfig({displayName:"PostsListItem__WorkTitle",componentId:"hqhtfb-1"})(["font-size:1.1rem;color:#fff;font-weight:400;"]),w=u.e.div.withConfig({displayName:"PostsListItem__WorkInfos",componentId:"hqhtfb-2"})(["margin-top:0.5rem;font-family:",";font-size:0.9rem;color:",";"],(function(e){return e.theme.mono}),(function(e){return e.theme.mediumDark})),E=u.e.span.withConfig({displayName:"PostsListItem__WorkYear",componentId:"hqhtfb-3"})(["color:#fff;&::before{content:'';display:inline-block;vertical-align:middle;height:1px;width:1rem;background:",";margin-right:0.5rem;}"],(function(e){return e.theme.secondary})),x=function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,r=t.frontmatter.tags;return i.a.createElement(v.Link,{to:t.fields.slug},i.a.createElement(g,{hasLink:null!==t.fields.slug},i.a.createElement("header",null,i.a.createElement(y,null,n),i.a.createElement(w,null,r&&i.a.createElement("span",null," ",r.map((function(e){return e})).join(", ")))),i.a.createElement(w,null,i.a.createElement(E,null,t.frontmatter.date))))};function b(){var e=z(["\n    margin: 4rem auto 0;\n  "]);return b=function(){return e},e}function L(){var e=z(["\n    max-width: 100%;\n  "]);return L=function(){return e},e}function z(e,t){return t||(t=e.slice(0)),e.raw=t,e}var M=u.e.section.withConfig({displayName:"PostsList__PostsListContainer",componentId:"sc-1fsbild-0"})(["max-width:80%;margin:8rem auto 0;"," ",""],(function(e){return e.theme.media.lg(L())}),(function(e){return e.theme.media.sm(b())})),k=function(e){var t=e.posts;return i.a.createElement(M,null,t.map((function(e){var t=e.node;return i.a.createElement(x,{key:t.fields.slug,node:t})})))},I="580570839";t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return i.a.createElement(a.a,{title:n},i.a.createElement(o.a,{title:"Blog",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),i.a.createElement(h.a,{normalVelocity:1e-4,containerOpacity:.15,addEventListeners:!1}),i.a.createElement(f,null,i.a.createElement("div",{className:"page-content"},i.a.createElement("h1",null,"Things I do and write about to be useful to others"),i.a.createElement("p",null,"Search"),i.a.createElement("p",null,"Tags"),i.a.createElement(k,{posts:r}))))}},"T+OK":function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("vOnD"),o=(n("a1Th"),n("Btvt"),function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),Math.floor(Math.random()*e)+t}),u=function(){for(var e=[],t=0;t<o();t++)e.push("\n      radial-gradient(\n        circle at "+o(100)+"% "+o(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+o(100,60)+"%\n      )\n  ");return e.join(",")},c=a.e.div.withConfig({displayName:"Stars__StarsContainer",componentId:"sc-17xzq84-0"})(["width:100%;height:100vh;background-color:",";"],(function(e){return e.theme.colors.black}));t.a=function(e){var t,n,r=e.containerOpacity,a=void 0===r?1:r,o="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,l=1,d=[],m=!1,s={x:null,y:null},f=!0,h=[],v=-1,p=e.normalVelocity,g=void 0===p?5e-4:p,y={x:0,y:0,tx:0,ty:0,z:g},w=e.addEventListeners,E=void 0===w||w,x=function(e,t){if(f){if("number"==typeof s.x&&"number"==typeof s.y){var n=e-s.x,r=t-s.y;y.tx=y.tx-n/8*l*(m?1:-1),y.ty=y.ty-r/8*l*(m?1:-1)}s={x:e,y:t}}},b=function(e){l=window.devicePixelRatio||1,t=window.innerWidth*l,n=window.innerHeight*l,e.width=t,e.height=n,d.forEach((function(e){e.x=Math.random()*t,e.y=Math.random()*n}))},L=function(e){console.log("accelerates"),s={x:null,y:null},f=!e,y.z=e?.1:g},z=i.a.useRef(null),M=i.a.useState(null),k=M[0],I=M[1];return i.a.useEffect((function(){var e=function(e){m=!0,x(e.clientX,e.clientY)},r=function(e){m=!0,x(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},i=function(){m=!1,s={x:null,y:null}},a=function(){m=!1,s={x:null,y:null}},u=function(){b(z.current)},c=function(e){L(e.deltaY<0)},f=function(e){!function(e){h=h.filter((function(t){return t.pointerId!==e.pointerId}))}(e),h.length<2&&(v=-1)};if(z.current){var p=z.current.getContext("2d");if(p){var g=z.current;E&&(g.addEventListener("pointerdown",(function(e){h.push(e)})),g.addEventListener("pointermove",(function(e){for(var t=0;t<h.length;t++)if(e.pointerId===h[t].pointerId){h[t]=e;break}if(2==h.length){var n=Math.abs(h[0].clientX-h[1].clientX);L(v>0&&n>v),v=n}})),g.addEventListener("pointerup",f),g.addEventListener("pointercancel",f),g.addEventListener("pointerout",f),g.addEventListener("pointerleave",f),window.addEventListener("wheel",c),window.addEventListener("resize",u),g.addEventListener("mousemove",e),g.addEventListener("touchmove",r),g.addEventListener("touchend",a),document.addEventListener("mouseleave",i)),I(p)}}if(k){var w=function(){y.tx*=.96,y.ty*=.96,y.x+=.8*(y.tx-y.x),y.y+=.8*(y.ty-y.y),d.forEach((function(e){e.x+=y.x*e.z+(e.x-t/2)*y.z*e.z,e.y+=y.y*e.z+(e.y-n/2)*y.z*e.z,e.z+=y.z,(e.x<-50||e.x>t+50||e.y<-50||e.y>n+50)&&function(e){var r="z",i=Math.abs(y.x),a=Math.abs(y.y);(i>1||a>1)&&(r="h"===(i>a?Math.random()<i/(i+a)?"h":"v":Math.random()<a/(i+a)?"v":"h")?y.x>0?"l":"r":y.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*t,e.y=Math.random()*n,e.z=.1):"l"===r?(e.x=-50,e.y=n*Math.random()):"r"===r?(e.x=t+50,e.y=n*Math.random()):"t"===r?(e.x=t*Math.random(),e.y=-50):"b"===r&&(e.x=t*Math.random(),e.y=n+50)}(e)}))};!function(){for(var e=0;e<o;e++)d.push({x:0,y:0,z:.2+.8*Math.random()})}(),b(z.current),function e(){k.clearRect(0,0,t,n),w(),d.forEach((function(e){k.beginPath(),k.lineCap="round",k.lineWidth=3*e.z*l,k.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",k.beginPath(),k.moveTo(e.x,e.y);var t=2*y.x,n=2*y.y;Math.abs(t)<.1&&(t=.5),Math.abs(n)<.1&&(n=.5),k.lineTo(e.x+t,e.y+n),k.stroke()})),requestAnimationFrame(e)}()}return function(){if(d.length=0,z.current){var t=z.current;t.removeEventListener("mousemove",e),t.removeEventListener("touchmove",r),t.removeEventListener("touchend",a),window.removeEventListener("wheel",c),window.removeEventListener("resize",u),document.removeEventListener("mouseleave",i)}}}),[k]),i.a.createElement(c,{style:{backgroundImage:u()}},i.a.createElement("canvas",{id:"canvas",ref:z,style:{opacity:a,position:"fixed",width:"100%",height:"100%"}}))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-d6bcd213af907d200242.js.map