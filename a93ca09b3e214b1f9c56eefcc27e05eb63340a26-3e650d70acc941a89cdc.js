(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var n,i=r(a("v06X")),o=r(a("XEEL")),d=r(a("uDP2")),s=r(a("j8BX")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=c(e),a=h(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),l.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function z(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+l+o+d+a+r+t+i+n+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,d=l.default.createElement(M,(0,s.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,n(r),d):d})),M=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,h=e.ariaHidden,m=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":h,sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));M.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=h(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,d=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,h=e.placeholderClassName,p=e.fluid,g=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,w=e.itemProp,S=e.loading,z=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,s.default)({opacity:I?1:0,transition:C?"opacity "+y+"ms":"none"},d),k="boolean"==typeof v?"lightgray":v,T={transitionDelay:y+"ms"},H=(0,s.default)({opacity:this.state.imgLoaded?0:1},C&&T,d,f),j={title:t,alt:this.state.isVisible?"":a,style:H,className:h,itemProp:w};if(p){var P=p,q=m(p);return l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),k&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&T)}),q.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:j,imageVariants:P,generateSources:L}),q.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:j,imageVariants:P,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(P),l.default.createElement(M,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:z})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:S},q,{imageVariants:P}))}}))}if(g){var W=g,N=m(g),_=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},i);return"inherit"===i.display&&delete _.display,l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},k&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:k,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},C&&T)}),N.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:j,imageVariants:W,generateSources:L}),N.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:j,imageVariants:W,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(W),l.default.createElement(M,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:z})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:S},N,{imageVariants:W}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function T(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}C.propTypes={resolutions:V,sizes:k,fixed:T(u.default.oneOfType([V,u.default.arrayOf(V)])),fluid:T(u.default.oneOfType([k,u.default.arrayOf(k)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var H=C;t.default=H},Cqiw:function(e,t,a){"use strict";var r=a("AcpX"),n=a("q1tI"),i=a.n(n),o=a("vOnD");function d(){var e=Object(r.a)(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return d=function(){return e},e}function s(){var e=Object(r.a)(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n    width: 1.45rem;\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return l=function(){return e},e}var u=o.e.div.withConfig({displayName:"Content__ContentContainer",componentId:"sc-1q50de9-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;position:absolute;height:100%;top:0;left:0;right:0;bottom:0;"," "," ",""],(function(e){return e.theme.media.lg(l())}),(function(e){return e.theme.media.md(s())}),(function(e){return e.theme.media.sm(d())})),c=o.e.div.withConfig({displayName:"Content__ContentBottom",componentId:"sc-1q50de9-1"})(["height:10rem;"]);t.a=function(e){var t=e.children;return i.a.createElement(u,null,t,i.a.createElement(c,null))}},"T+OK":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("vOnD"),o=function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),Math.floor(Math.random()*e)+t},d=function(){for(var e=[],t=0;t<o();t++)e.push("\n      radial-gradient(\n        circle at "+o(100)+"% "+o(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+o(100,60)+"%\n      )\n  ");return e.join(",")};t.a=function(e){var t,a,o=e.containerOpacity,s=void 0===o?1:o,l="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,u=1,c=[],f=!1,h={x:null,y:null},m=!0,p=[],g=-1,v=e.normalVelocity,y=void 0===v?5e-4:v,b={x:0,y:0,tx:0,ty:0,z:y},w=e.addEventListeners,E=void 0===w||w,S=function(e,t){if(m){if("number"==typeof h.x&&"number"==typeof h.y){var a=e-h.x,r=t-h.y;b.tx=b.tx-a/8*u*(f?1:-1),b.ty=b.ty-r/8*u*(f?1:-1)}h={x:e,y:t}}},x=function(e){u=window.devicePixelRatio||1,t=window.innerWidth*u,a=window.innerHeight*u,e.width=t,e.height=a,c.forEach((function(e){e.x=Math.random()*t,e.y=Math.random()*a}))},L=function(e){h={x:null,y:null},m=!e,b.z=e?.05:y},z=n.a.useRef(null),I=n.a.useState(null),R=I[0],O=I[1];n.a.useEffect((function(){var e=function(e){f=!0,S(e.clientX,e.clientY)},r=function(e){f=!0,S(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},n=function(){f=!1,h={x:null,y:null}},i=function(){f=!1,h={x:null,y:null}},o=function(){x(z.current)},d=function(e){L(e.deltaY<0)},s=function(e){!function(e){p=p.filter((function(t){return t.pointerId!==e.pointerId}))}(e),p.length<2&&(g=-1)};if(z.current){var m=z.current.getContext("2d");if(m){var v=z.current;E&&(v.addEventListener("pointerdown",(function(e){p.push(e)})),v.addEventListener("pointermove",(function(e){for(var t=0;t<p.length;t++)if(e.pointerId===p[t].pointerId){p[t]=e;break}if(2==p.length){var a=Math.abs(p[0].clientX-p[1].clientX);L(g>0&&a>g),g=a}})),v.addEventListener("pointerup",s),v.addEventListener("pointercancel",s),v.addEventListener("pointerout",s),v.addEventListener("pointerleave",s),window.addEventListener("wheel",d),window.addEventListener("resize",o),v.addEventListener("mousemove",e),v.addEventListener("touchmove",r),v.addEventListener("touchend",i),document.addEventListener("mouseleave",n)),O(m)}}if(R){var y=function(){b.tx*=.96,b.ty*=.96,b.x+=.8*(b.tx-b.x),b.y+=.8*(b.ty-b.y),c.forEach((function(e){e.x+=b.x*e.z+(e.x-t/2)*b.z*e.z,e.y+=b.y*e.z+(e.y-a/2)*b.z*e.z,e.z+=b.z,(e.x<-50||e.x>t+50||e.y<-50||e.y>a+50)&&function(e){var r="z",n=Math.abs(b.x),i=Math.abs(b.y);(n>1||i>1)&&(r="h"===(n>i?Math.random()<n/(n+i)?"h":"v":Math.random()<i/(n+i)?"v":"h")?b.x>0?"l":"r":b.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*t,e.y=Math.random()*a,e.z=.1):"l"===r?(e.x=-50,e.y=a*Math.random()):"r"===r?(e.x=t+50,e.y=a*Math.random()):"t"===r?(e.x=t*Math.random(),e.y=-50):"b"===r&&(e.x=t*Math.random(),e.y=a+50)}(e)}))};!function(){for(var e=0;e<l;e++)c.push({x:0,y:0,z:.2+.8*Math.random()})}(),x(z.current),function e(){R.clearRect(0,0,t,a),y(),c.forEach((function(e){R.beginPath(),R.lineCap="round",R.lineWidth=3*e.z*u,R.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",R.beginPath(),R.moveTo(e.x,e.y);var t=2*b.x,a=2*b.y;Math.abs(t)<.1&&(t=.5),Math.abs(a)<.1&&(a=.5),R.lineTo(e.x+t,e.y+a),R.stroke()})),requestAnimationFrame(e)}()}return function(){if(c.length=0,z.current){var t=z.current;t.removeEventListener("mousemove",e),t.removeEventListener("touchmove",r),t.removeEventListener("touchend",i),window.removeEventListener("wheel",d),window.removeEventListener("resize",o),document.removeEventListener("mouseleave",n)}}}));var M=Object(r.useContext)(i.a);return n.a.createElement("canvas",{id:"canvas",ref:z,style:{backgroundColor:M.colors.black,backgroundImage:d(),opacity:s,position:"fixed",width:"100%",height:"100%"}})}}}]);
//# sourceMappingURL=a93ca09b3e214b1f9c56eefcc27e05eb63340a26-3e650d70acc941a89cdc.js.map