(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{6010:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(a&&(a+=" "),a+=n);else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(n&&(n+=" "),n+=t);return n}},2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return p}});var n=r(7294),a=r(9008),o=r.n(a);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=["keyOverride"],s={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,r){void 0===t&&(t=[]);var a=void 0===r?{}:r,o=a.defaultWidth,i=a.defaultHeight;return t.reduce(function(t,r,a){return t.push(n.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:r.url})),r.alt&&t.push(n.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(n.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(n.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(n.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:r.width.toString()})):o&&t.push(n.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:o.toString()})),r.height?t.push(n.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(n.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t},[])},u=function(e){var t,r,a,o,u,h=[];e.titleTemplate&&(s.templateTitle=e.titleTemplate);var p="";e.title?(p=e.title,s.templateTitle&&(p=s.templateTitle.replace(/%s/g,function(){return p}))):e.defaultTitle&&(p=e.defaultTitle),p&&h.push(n.createElement("title",{key:"title"},p));var f=e.noindex||s.noindex||e.dangerouslySetAllPagesToNoIndex,d=e.nofollow||s.nofollow||e.dangerouslySetAllPagesToNoFollow,g="";if(e.robotsProps){var m=e.robotsProps,b=m.nosnippet,y=m.maxSnippet,v=m.maxImagePreview,_=m.maxVideoPreview,k=m.noarchive,w=m.noimageindex,x=m.notranslate,E=m.unavailableAfter;g=(b?",nosnippet":"")+(y?",max-snippet:"+y:"")+(v?",max-image-preview:"+v:"")+(k?",noarchive":"")+(E?",unavailable_after:"+E:"")+(w?",noimageindex":"")+(_?",max-video-preview:"+_:"")+(x?",notranslate":"")}if(f||d?(e.dangerouslySetAllPagesToNoIndex&&(s.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(s.nofollow=!0),h.push(n.createElement("meta",{key:"robots",name:"robots",content:(f?"noindex":"index")+","+(d?"nofollow":"follow")+g}))):h.push(n.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),e.description&&h.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&h.push(n.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&h.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){h.push(n.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&h.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&h.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&h.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&h.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||p)&&h.push(n.createElement("meta",{key:"og:title",property:"og:title",content:(null==(o=e.openGraph)?void 0:o.title)||p})),(null!=(r=e.openGraph)&&r.description||e.description)&&h.push(n.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&h.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var G=e.openGraph.type.toLowerCase();h.push(n.createElement("meta",{key:"og:type",property:"og:type",content:G})),"profile"===G&&e.openGraph.profile?(e.openGraph.profile.firstName&&h.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&h.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&h.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&h.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===G&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){h.push(n.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&h.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&h.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){h.push(n.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===G&&e.openGraph.article?(e.openGraph.article.publishedTime&&h.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&h.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&h.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){h.push(n.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&h.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){h.push(n.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===G||"video.episode"===G||"video.tv_show"===G||"video.other"===G)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&h.push(n.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&h.push(n.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){h.push(n.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){h.push(n.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&h.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&h.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){h.push(n.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&h.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(s.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(s.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&h.push.apply(h,c("image",e.openGraph.images,{defaultWidth:s.defaultOpenGraphImageWidth,defaultHeight:s.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(s.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(s.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&h.push.apply(h,c("video",e.openGraph.videos,{defaultWidth:s.defaultOpenGraphVideoWidth,defaultHeight:s.defaultOpenGraphVideoHeight})),e.openGraph.audio&&h.push.apply(h,c("audio",e.openGraph.audio)),e.openGraph.locale&&h.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&h.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&h.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,r,a=e.keyOverride,o=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,l);h.push(n.createElement("meta",i({key:"meta:"+(null!=(t=null!=(r=null!=a?a:o.name)?r:o.property)?t:o.httpEquiv)},o)))}),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach(function(e){var t;h.push(n.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),h},h=function(e){return n.createElement(o(),null,u(e))},p=function(e){var t=e.title,r=e.themeColor,a=e.noindex,o=void 0!==a&&a,i=e.nofollow,l=e.robotsProps,s=e.description,c=e.canonical,p=e.openGraph,f=e.facebook,d=e.twitter,g=e.additionalMetaTags,m=e.titleTemplate,b=e.defaultTitle,y=e.mobileAlternate,v=e.languageAlternates,_=e.additionalLinkTags,k=e.useAppDir;return n.createElement(n.Fragment,null,void 0!==k&&k?u({title:t,themeColor:r,noindex:o,nofollow:i,robotsProps:l,description:s,canonical:c,facebook:f,openGraph:p,additionalMetaTags:g,twitter:d,titleTemplate:m,defaultTitle:b,mobileAlternate:y,languageAlternates:v,additionalLinkTags:_}):n.createElement(h,{title:t,themeColor:r,noindex:o,nofollow:i,robotsProps:l,description:s,canonical:c,facebook:f,openGraph:p,additionalMetaTags:g,twitter:d,titleTemplate:m,defaultTitle:b,mobileAlternate:y,languageAlternates:v,additionalLinkTags:_}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,a=r(2648).Z,o=r(1598).Z,i=r(7273).Z,l=o(r(7294)),s=a(r(3121)),c=r(2675),u=r(139),h=r(8730);r(7238);var p=a(r(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function d(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,a,o,i,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&i(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let b=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:h,isLazy:p,fill:f,placeholder:d,loading:g,srcString:b,config:y,unoptimized:v,loader:_,onLoadRef:k,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:E,onLoad:G,onError:M}=e,A=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=p?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},A,r,{width:o,height:a,decoding:"async","data-nimg":f?"fill":"1",className:c,loading:g,style:n({},u,h),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(M&&(e.src=e.src),e.complete&&m(e,b,d,k,w,x,v))},[b,d,k,w,x,M,v,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,d,k,w,x,v)},onError:e=>{E(!0),"blur"===d&&x(!0),M&&M(e)}})))}),y=l.forwardRef((e,t)=>{let r,a;var o,{src:m,sizes:y,unoptimized:v=!1,priority:_=!1,loading:k,className:w,quality:x,width:E,height:G,fill:M,style:A,onLoad:S,onLoadingComplete:O,placeholder:C="empty",blurDataURL:T,layout:R,objectFit:j,objectPosition:I,lazyBoundary:H,lazyRoot:P}=e,N=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let z=l.useContext(h.ImageConfigContext),F=l.useMemo(()=>{let e=f||z||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[z]),L=N,D=L.loader||p.default;delete L.loader;let W="__next_img_default"in D;if(W){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=t=>{let{config:r}=t,n=i(t,["config"]);return e(n)}}if(R){"fill"===R&&(M=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(A=n({},A,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!y&&(y=t)}let q="",V=g(E),B=g(G);if("object"==typeof(o=m)&&(d(o)||void 0!==o.src)){let e=d(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,a=e.blurHeight,T=T||e.blurDataURL,q=e.src,!M){if(V||B){if(V&&!B){let t=V/e.width;B=Math.round(e.height*t)}else if(!V&&B){let t=B/e.height;V=Math.round(e.width*t)}}else V=e.width,B=e.height}}let U=!_&&("lazy"===k||void 0===k);((m="string"==typeof m?m:q).startsWith("data:")||m.startsWith("blob:"))&&(v=!0,U=!1),F.unoptimized&&(v=!0),W&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(v=!0);let[$,Z]=l.useState(!1),[X,J]=l.useState(!1),K=g(x),Q=Object.assign(M?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:I}:{},X?{}:{color:"transparent"},A),Y="blur"===C&&T&&!$?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:B,blurWidth:r,blurHeight:a,blurDataURL:T}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:o,sizes:i,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:o,kind:"x"}}(t,a,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:F,src:m,unoptimized:v,width:V,quality:K,sizes:y,loader:D}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:L.crossOrigin},en=l.useRef(S);l.useEffect(()=>{en.current=S},[S]);let ea=l.useRef(O);l.useEffect(()=>{ea.current=O},[O]);let eo=n({isLazy:U,imgAttributes:ee,heightInt:B,widthInt:V,qualityInt:K,className:w,imgStyle:Q,blurStyle:Y,loading:k,config:F,fill:M,unoptimized:v,placeholder:C,loader:D,srcString:et,onLoadRef:en,onLoadingCompleteRef:ea,setBlurComplete:Z,setShowAltText:J},L);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},eo,{ref:t})),_?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:o}=e,i=n||t,l=a||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function s(e){return function(t){return n.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,a=e.attr,o=e.size,s=e.title,c=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(a)}},2746:function(e,t,r){e.exports.jsxRuntime=r(5893)},3305:function(e,t,r){"use strict";r.d(t,{R:function(){return h}});var n={};r.r(n),r.d(n,{MDXContext:function(){return i},MDXProvider:function(){return u},useMDXComponents:function(){return s},withMDXComponents:function(){return l}});var a=r(7294),o=r(2746);let i=a.createContext({});function l(e){return function(t){let r=s(t.components);return a.createElement(e,{...t,allComponents:r})}}function s(e){let t=a.useContext(i);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let c={};function u({components:e,children:t,disableParentContext:r}){let n;return n=r?"function"==typeof e?e({}):e||c:s(e),a.createElement(i.Provider,{value:n},t)}function h({compiledSource:e,frontmatter:t,scope:r,components:i={},lazy:l}){let[s,c]=(0,a.useState)(!l||"undefined"==typeof window);(0,a.useEffect)(()=>{if(l){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let h=(0,a.useMemo)(()=>{let a=Object.assign({opts:{...n,...o.jsxRuntime}},{frontmatter:t},r),i=Object.keys(a),l=Object.values(a),s=Reflect.construct(Function,i.concat(`${e}`));return s.apply(s,l).default},[r,e]);if(!s)return a.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let p=a.createElement(u,{components:i},a.createElement(h,null));return l?a.createElement("div",null,p):p}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},7234:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,{Z:function(){return c}});var a,o,i,l=/^\s+/,s=/\s+$/;function c(e,t){if(t=t||{},(e=e||"")instanceof c)return e;if(!(this instanceof c))return new c(e,t);var r,a,o,i,u,h,p,f,d,g,m,b,y,v,_,k,w,x,E,G,A=(a={r:0,g:0,b:0},o=1,i=null,u=null,h=null,p=!1,f=!1,"string"==typeof(r=e)&&(r=function(e){e=e.replace(l,"").replace(s,"").toLowerCase();var t,r=!1;if(M[e])e=M[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=H.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=H.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=H.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=H.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=H.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=H.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=H.hex8.exec(e))?{r:T(t[1]),g:T(t[2]),b:T(t[3]),a:T(t[4])/255,format:r?"name":"hex8"}:(t=H.hex6.exec(e))?{r:T(t[1]),g:T(t[2]),b:T(t[3]),format:r?"name":"hex"}:(t=H.hex4.exec(e))?{r:T(t[1]+""+t[1]),g:T(t[2]+""+t[2]),b:T(t[3]+""+t[3]),a:T(t[4]+""+t[4])/255,format:r?"name":"hex8"}:!!(t=H.hex3.exec(e))&&{r:T(t[1]+""+t[1]),g:T(t[2]+""+t[2]),b:T(t[3]+""+t[3]),format:r?"name":"hex"}}(r)),"object"==n(r)&&(P(r.r)&&P(r.g)&&P(r.b)?(d=r.r,g=r.g,m=r.b,a={r:255*O(d,255),g:255*O(g,255),b:255*O(m,255)},p=!0,f="%"===String(r.r).substr(-1)?"prgb":"rgb"):P(r.h)&&P(r.s)&&P(r.v)?(i=j(r.s),u=j(r.v),b=r.h,y=i,v=u,b=6*O(b,360),y=O(y,100),v=O(v,100),_=Math.floor(b),k=b-_,w=v*(1-y),x=v*(1-k*y),E=v*(1-(1-k)*y),a={r:255*[v,x,w,w,E,v][G=_%6],g:255*[E,v,v,x,w,w][G],b:255*[w,w,E,v,v,x][G]},p=!0,f="hsv"):P(r.h)&&P(r.s)&&P(r.l)&&(i=j(r.s),h=j(r.l),a=function(e,t,r){var n,a,o;function i(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=O(e,360),t=O(t,100),r=O(r,100),0===t)n=a=o=r;else{var l=r<.5?r*(1+t):r+t-r*t,s=2*r-l;n=i(s,l,e+1/3),a=i(s,l,e),o=i(s,l,e-1/3)}return{r:255*n,g:255*a,b:255*o}}(r.h,i,h),p=!0,f="hsl"),r.hasOwnProperty("a")&&(o=r.a)),o=S(o),{ok:p,format:r.format||f,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:o});this._originalInput=e,this._r=A.r,this._g=A.g,this._b=A.b,this._a=A.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||A.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=A.ok}function u(e,t,r){var n,a,o=Math.max(e=O(e,255),t=O(t,255),r=O(r,255)),i=Math.min(e,t,r),l=(o+i)/2;if(o==i)n=a=0;else{var s=o-i;switch(a=l>.5?s/(2-o-i):s/(o+i),o){case e:n=(t-r)/s+(t<r?6:0);break;case t:n=(r-e)/s+2;break;case r:n=(e-t)/s+4}n/=6}return{h:n,s:a,l:l}}function h(e,t,r){var n,a=Math.max(e=O(e,255),t=O(t,255),r=O(r,255)),o=Math.min(e,t,r),i=a-o;if(a==o)n=0;else{switch(a){case e:n=(t-r)/i+(t<r?6:0);break;case t:n=(r-e)/i+2;break;case r:n=(e-t)/i+4}n/=6}return{h:n,s:0===a?0:i/a,v:a}}function p(e,t,r,n){var a=[R(Math.round(e).toString(16)),R(Math.round(t).toString(16)),R(Math.round(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(e,t,r,n){return[R(I(n)),R(Math.round(e).toString(16)),R(Math.round(t).toString(16)),R(Math.round(r).toString(16))].join("")}function d(e,t){t=0===t?0:t||10;var r=c(e).toHsl();return r.s-=t/100,r.s=C(r.s),c(r)}function g(e,t){t=0===t?0:t||10;var r=c(e).toHsl();return r.s+=t/100,r.s=C(r.s),c(r)}function m(e){return c(e).desaturate(100)}function b(e,t){t=0===t?0:t||10;var r=c(e).toHsl();return r.l+=t/100,r.l=C(r.l),c(r)}function y(e,t){t=0===t?0:t||10;var r=c(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-(255*(t/100))))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-(255*(t/100))))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-(255*(t/100))))),c(r)}function v(e,t){t=0===t?0:t||10;var r=c(e).toHsl();return r.l-=t/100,r.l=C(r.l),c(r)}function _(e,t){var r=c(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,c(r)}function k(e){var t=c(e).toHsl();return t.h=(t.h+180)%360,c(t)}function w(e,t){if(isNaN(t)||t<=0)throw Error("Argument to polyad must be a positive number");for(var r=c(e).toHsl(),n=[c(e)],a=360/t,o=1;o<t;o++)n.push(c({h:(r.h+o*a)%360,s:r.s,l:r.l}));return n}function x(e){var t=c(e).toHsl(),r=t.h;return[c(e),c({h:(r+72)%360,s:t.s,l:t.l}),c({h:(r+216)%360,s:t.s,l:t.l})]}function E(e,t,r){t=t||6,r=r||30;var n=c(e).toHsl(),a=360/r,o=[c(e)];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,o.push(c(n));return o}function G(e,t){t=t||6;for(var r=c(e).toHsv(),n=r.h,a=r.s,o=r.v,i=[],l=1/t;t--;)i.push(c({h:n,s:a,v:o})),o=(o+l)%1;return i}c.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*((t=n.g/255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((r=n.b/255)<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=S(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=h(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=h(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=u(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return p(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){var t,r,n,a,o;return t=this._r,r=this._g,n=this._b,a=this._a,o=[R(Math.round(t).toString(16)),R(Math.round(r).toString(16)),R(Math.round(n).toString(16)),R(I(a))],e&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*O(this._r,255))+"%",g:Math.round(100*O(this._g,255))+"%",b:Math.round(100*O(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*O(this._r,255))+"%, "+Math.round(100*O(this._g,255))+"%, "+Math.round(100*O(this._b,255))+"%)":"rgba("+Math.round(100*O(this._r,255))+"%, "+Math.round(100*O(this._g,255))+"%, "+Math.round(100*O(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(A[p(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+f(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var a=c(e);r="#"+f(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return!t&&n&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e)?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return c(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(y,arguments)},darken:function(){return this._applyModification(v,arguments)},desaturate:function(){return this._applyModification(d,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(m,arguments)},spin:function(){return this._applyModification(_,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(E,arguments)},complement:function(){return this._applyCombination(k,arguments)},monochromatic:function(){return this._applyCombination(G,arguments)},splitcomplement:function(){return this._applyCombination(x,arguments)},triad:function(){return this._applyCombination(w,[3])},tetrad:function(){return this._applyCombination(w,[4])}},c.fromRatio=function(e,t){if("object"==n(e)){var r={};for(var a in e)e.hasOwnProperty(a)&&("a"===a?r[a]=e[a]:r[a]=j(e[a]));e=r}return c(e,t)},c.equals=function(e,t){return!!e&&!!t&&c(e).toRgbString()==c(t).toRgbString()},c.random=function(){return c.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},c.mix=function(e,t,r){r=0===r?0:r||50;var n=c(e).toRgb(),a=c(t).toRgb(),o=r/100;return c({r:(a.r-n.r)*o+n.r,g:(a.g-n.g)*o+n.g,b:(a.b-n.b)*o+n.b,a:(a.a-n.a)*o+n.a})},c.readability=function(e,t){var r=c(e),n=c(t);return(Math.max(r.getLuminance(),n.getLuminance())+.05)/(Math.min(r.getLuminance(),n.getLuminance())+.05)},c.isReadable=function(e,t,r){var n,a,o,i,l,s=c.readability(e,t);switch(l=!1,(a=((n=(n=r)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),o=(n.size||"small").toLowerCase(),"AA"!==a&&"AAA"!==a&&(a="AA"),"small"!==o&&"large"!==o&&(o="small"),i={level:a,size:o}).level+i.size){case"AAsmall":case"AAAlarge":l=s>=4.5;break;case"AAlarge":l=s>=3;break;case"AAAsmall":l=s>=7}return l},c.mostReadable=function(e,t,r){var n,a,o,i,l=null,s=0;a=(r=r||{}).includeFallbackColors,o=r.level,i=r.size;for(var u=0;u<t.length;u++)(n=c.readability(e,t[u]))>s&&(s=n,l=c(t[u]));return c.isReadable(e,l,{level:o,size:i})||!a?l:(r.includeFallbackColors=!1,c.mostReadable(e,["#fff","#000"],r))};var M=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},A=c.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(M);function S(e){return(isNaN(e=parseFloat(e))||e<0||e>1)&&(e=1),e}function O(e,t){"string"==typeof(r=e)&&-1!=r.indexOf(".")&&1===parseFloat(r)&&(e="100%");var r,n,a="string"==typeof(n=e)&&-1!=n.indexOf("%");return(e=Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),1e-6>Math.abs(e-t))?1:e%t/parseFloat(t)}function C(e){return Math.min(1,Math.max(0,e))}function T(e){return parseInt(e,16)}function R(e){return 1==e.length?"0"+e:""+e}function j(e){return e<=1&&(e=100*e+"%"),e}function I(e){return Math.round(255*parseFloat(e)).toString(16)}var H=(o="[\\s|\\(]+("+(a="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?",i="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?",{CSS_UNIT:RegExp(a),rgb:RegExp("rgb"+o),rgba:RegExp("rgba"+i),hsl:RegExp("hsl"+o),hsla:RegExp("hsla"+i),hsv:RegExp("hsv"+o),hsva:RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function P(e){return!!H.CSS_UNIT.exec(e)}}}]);