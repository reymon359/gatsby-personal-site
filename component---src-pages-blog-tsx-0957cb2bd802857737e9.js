(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1GPU":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var r=n("q1tI"),i=n.n(r),o=n("soUV"),a=n("9u5D"),l=n("Cqiw"),u=n("T+OK"),c=n("s1X6"),d="1650380636";t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return i.a.createElement(o.a,{title:n},i.a.createElement(a.a,{title:"Blog",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),i.a.createElement(u.a,{normalVelocity:1e-4,containerOpacity:.3,addEventListeners:!1}),i.a.createElement(l.a,null,i.a.createElement("h1",null,"Blog"),i.a.createElement("h4",null,"Things I do and write about to be useful to others"),i.a.createElement("p",null,"Tags"),i.a.createElement(c.a,{posts:r})))}},Cqiw:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r);function o(){var e=u(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return o=function(){return e},e}function a(){var e=u(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return a=function(){return e},e}function l(){var e=u(["\n    width: 1.45rem;\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return l=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),e.raw=t,e}var c=n("vOnD").e.div.withConfig({displayName:"Content__ContentContainer",componentId:"sc-1q50de9-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;position:absolute;height:100%;top:0;left:0;right:0;bottom:0;"," "," ",""],(function(e){return e.theme.media.lg(l())}),(function(e){return e.theme.media.md(a())}),(function(e){return e.theme.media.sm(o())}));t.a=function(e){var t=e.children;return i.a.createElement(c,null,t)}},"T+OK":function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=(n("a1Th"),n("Btvt"),function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),Math.floor(Math.random()*e)+t}),l=function(){for(var e=[],t=0;t<a();t++)e.push("\n      radial-gradient(\n        circle at "+a(100)+"% "+a(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+a(100,60)+"%\n      )\n  ");return e.join(",")};t.a=function(e){var t,n,a=e.containerOpacity,u=void 0===a?1:a,c="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,d=1,s=[],m=!1,f={x:null,y:null},h=!0,v=[],p=-1,g=e.normalVelocity,y=void 0===g?5e-4:g,w={x:0,y:0,tx:0,ty:0,z:y},E=e.addEventListeners,x=void 0===E||E,b=function(e,t){if(h){if("number"==typeof f.x&&"number"==typeof f.y){var n=e-f.x,r=t-f.y;w.tx=w.tx-n/8*d*(m?1:-1),w.ty=w.ty-r/8*d*(m?1:-1)}f={x:e,y:t}}},L=function(e){d=window.devicePixelRatio||1,t=window.innerWidth*d,n=window.innerHeight*d,e.width=t,e.height=n,s.forEach((function(e){e.x=Math.random()*t,e.y=Math.random()*n}))},I=function(e){console.log("accelerates"),f={x:null,y:null},h=!e,w.z=e?.1:y},z=i.a.useRef(null),M=i.a.useState(null),k=M[0],C=M[1];i.a.useEffect((function(){var e=function(e){m=!0,b(e.clientX,e.clientY)},r=function(e){m=!0,b(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},i=function(){m=!1,f={x:null,y:null}},o=function(){m=!1,f={x:null,y:null}},a=function(){L(z.current)},l=function(e){I(e.deltaY<0)},u=function(e){!function(e){v=v.filter((function(t){return t.pointerId!==e.pointerId}))}(e),v.length<2&&(p=-1)};if(z.current){var h=z.current.getContext("2d");if(h){var g=z.current;x&&(g.addEventListener("pointerdown",(function(e){v.push(e)})),g.addEventListener("pointermove",(function(e){for(var t=0;t<v.length;t++)if(e.pointerId===v[t].pointerId){v[t]=e;break}if(2==v.length){var n=Math.abs(v[0].clientX-v[1].clientX);I(p>0&&n>p),p=n}})),g.addEventListener("pointerup",u),g.addEventListener("pointercancel",u),g.addEventListener("pointerout",u),g.addEventListener("pointerleave",u),window.addEventListener("wheel",l),window.addEventListener("resize",a),g.addEventListener("mousemove",e),g.addEventListener("touchmove",r),g.addEventListener("touchend",o),document.addEventListener("mouseleave",i)),C(h)}}if(k){var y=function(){w.tx*=.96,w.ty*=.96,w.x+=.8*(w.tx-w.x),w.y+=.8*(w.ty-w.y),s.forEach((function(e){e.x+=w.x*e.z+(e.x-t/2)*w.z*e.z,e.y+=w.y*e.z+(e.y-n/2)*w.z*e.z,e.z+=w.z,(e.x<-50||e.x>t+50||e.y<-50||e.y>n+50)&&function(e){var r="z",i=Math.abs(w.x),o=Math.abs(w.y);(i>1||o>1)&&(r="h"===(i>o?Math.random()<i/(i+o)?"h":"v":Math.random()<o/(i+o)?"v":"h")?w.x>0?"l":"r":w.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*t,e.y=Math.random()*n,e.z=.1):"l"===r?(e.x=-50,e.y=n*Math.random()):"r"===r?(e.x=t+50,e.y=n*Math.random()):"t"===r?(e.x=t*Math.random(),e.y=-50):"b"===r&&(e.x=t*Math.random(),e.y=n+50)}(e)}))};!function(){for(var e=0;e<c;e++)s.push({x:0,y:0,z:.2+.8*Math.random()})}(),L(z.current),function e(){k.clearRect(0,0,t,n),y(),s.forEach((function(e){k.beginPath(),k.lineCap="round",k.lineWidth=3*e.z*d,k.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",k.beginPath(),k.moveTo(e.x,e.y);var t=2*w.x,n=2*w.y;Math.abs(t)<.1&&(t=.5),Math.abs(n)<.1&&(n=.5),k.lineTo(e.x+t,e.y+n),k.stroke()})),requestAnimationFrame(e)}()}return function(){if(s.length=0,z.current){var t=z.current;t.removeEventListener("mousemove",e),t.removeEventListener("touchmove",r),t.removeEventListener("touchend",o),window.removeEventListener("wheel",l),window.removeEventListener("resize",a),document.removeEventListener("mouseleave",i)}}}),[k]);var _=Object(r.useContext)(o.a);return i.a.createElement("canvas",{id:"canvas",ref:z,style:{backgroundColor:_.colors.black,backgroundImage:l(),opacity:u,position:"fixed",width:"100%",height:"100%"}})}},s1X6:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=n("Wbzz"),l=o.e.article.withConfig({displayName:"PostsListItem__ItemContainer",componentId:"hqhtfb-0"})(["padding:1rem;border-radius:5px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;position:relative;&:hover{background-color:",";}> a{position:absolute;top:0;right:0;bottom:0;left:0;font-size:0;line-height:0;}"],(function(e){return e.theme.colors.light+"40"})),u=o.e.div.withConfig({displayName:"PostsListItem__ItemHeader",componentId:"hqhtfb-1"})([""]),c=o.e.h3.withConfig({displayName:"PostsListItem__ItemTitle",componentId:"hqhtfb-2"})(["font-size:1.1rem;color:#fff;font-weight:400;"]),d=o.e.div.withConfig({displayName:"PostsListItem__ItemInfo",componentId:"hqhtfb-3"})(["margin-top:0.5rem;font-family:",";font-size:0.9rem;color:",";"],(function(e){return e.theme.mono}),(function(e){return e.theme.colors.mediumDark})),s=o.e.span.withConfig({displayName:"PostsListItem__ItemYear",componentId:"hqhtfb-4"})(["color:#fff;&::before{content:'';display:inline-block;vertical-align:middle;height:1px;width:1rem;background:",";margin-right:0.5rem;}"],(function(e){return e.theme.secondary})),m=function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,r=t.frontmatter.tags;return i.a.createElement(a.Link,{to:t.fields.slug},i.a.createElement(l,{hasLink:null!==t.fields.slug},i.a.createElement(u,null,i.a.createElement(c,null,n),i.a.createElement(d,null,r&&i.a.createElement("span",null," ",r.map((function(e){return e})).join(", ")))),i.a.createElement(d,null,i.a.createElement(s,null,t.frontmatter.date))))},f=o.e.section.withConfig({displayName:"PostsList__PostsListContainer",componentId:"sc-1fsbild-0"})(["margin:1.5rem auto 0;"]),h=function(e){var t=e.posts;return i.a.createElement(f,null,t.map((function(e){var t=e.node;return i.a.createElement(m,{key:t.fields.slug,node:t})})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-0957cb2bd802857737e9.js.map