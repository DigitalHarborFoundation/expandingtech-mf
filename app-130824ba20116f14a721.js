webpackJsonp([0xd2a57dc1d883],{80:function(n,e){"use strict";function o(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function t(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=t;var r=[]},199:function(n,e,o){"use strict";e.components={"component---src-pages-404-js":o(333),"component---src-pages-about-js":o(334),"component---src-pages-best-practices-js":o(335),"component---src-pages-course-js":o(336),"component---src-pages-design-process-js":o(337),"component---src-pages-document-your-first-project-js":o(338),"component---src-pages-documentation-methods-makers-reflection-js":o(339),"component---src-pages-documentation-methods-photos-video-js":o(340),"component---src-pages-documenting-with-google-drive-js":o(341),"component---src-pages-effective-email-js":o(342),"component---src-pages-get-to-know-your-browser-js":o(343),"component---src-pages-google-drive-google-docs-js":o(344),"component---src-pages-index-js":o(345),"component---src-pages-introduction-js":o(346),"component---src-pages-maker-warm-up-js":o(347),"component---src-pages-page-2-js":o(348),"component---src-pages-project-planning-js":o(349),"component---src-pages-setting-up-gmail-js":o(350),"component---src-pages-why-documentation-is-important-js":o(351)},e.json={"layout-index.json":o(352),"404.json":o(353),"about.json":o(355),"best-practices.json":o(356),"course.json":o(357),"design-process.json":o(358),"document-your-first-project.json":o(359),"documentation-methods-makers-reflection.json":o(360),"documentation-methods-photos-video.json":o(361),"documenting-with-google-drive.json":o(362),"effective-email.json":o(363),"get-to-know-your-browser.json":o(364),"google-drive-google-docs.json":o(365),"index.json":o(366),"introduction.json":o(367),"maker-warm-up.json":o(368),"page-2.json":o(369),"project-planning.json":o(370),"setting-up-gmail.json":o(371),"why-documentation-is-important.json":o(372),"404-html.json":o(354)},e.layouts={"layout---index":o(332)}},200:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),s=t(i),l=o(26),f=t(l),p=o(130),d=t(p),m=o(59),g=t(m),h=o(80),y=o(512),j=t(y),x=function(n){var e=n.children;return s.default.createElement("div",null,e())},v=function(n){function e(o){r(this,e);var t=u(this,n.call(this)),a=o.location;return d.default.getPage(a.pathname)||(a=c({},a,{pathname:"/404.html"})),t.state={location:a,pageResources:d.default.getResourcesForPathname(a.pathname)},t}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=c({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(s.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=v,n.exports=e.default},59:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(404),u=t(r),a=(0,u.default)();n.exports=a},201:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(78),u=o(131),a=t(u),c={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,a.default)(t,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),c[u])return c[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(u,{path:n.path})||(0,r.matchPath)(u,{path:n.matchPath}))return i=n,c[u]=n,!0}else{if((0,r.matchPath)(u,{path:n.path,exact:!0}))return i=n,c[u]=n,!0;if((0,r.matchPath)(u,{path:n.path+"index.html"}))return i=n,c[u]=n,!0}return!1}),i}}},202:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(161),u=t(r),a=o(80),c=(0,a.apiRunner)("replaceHistory"),i=c[0],s=i||(0,u.default)();n.exports=s},354:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(382)})})}},353:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(383)})})}},355:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(384)})})}},356:function(n,e,o){o(2),n.exports=function(n){return o.e(0x64005a25b012,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(385)})})}},357:function(n,e,o){o(2),n.exports=function(n){return o.e(0x774ffef7aba5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(386)})})}},358:function(n,e,o){o(2),n.exports=function(n){return o.e(36249756226191,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(387)})})}},359:function(n,e,o){o(2),n.exports=function(n){return o.e(0xdd25f0a7f2e1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(388)})})}},360:function(n,e,o){o(2),n.exports=function(n){return o.e(0x62175eb5db17,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(389)})})}},361:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6b365efa83c2,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(390)})})}},362:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe8414b011cd3,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(391)})})}},363:function(n,e,o){o(2),n.exports=function(n){return o.e(0xfb9643d3f2e3,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(392)})})}},364:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6543e05d5397,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(393)})})}},365:function(n,e,o){o(2),n.exports=function(n){return o.e(87937314764314,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(394)})})}},366:function(n,e,o){o(2),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(395)})})}},367:function(n,e,o){o(2),n.exports=function(n){return o.e(0x989e9c333148,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(396)})})}},352:function(n,e,o){o(2),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(109)})})}},368:function(n,e,o){o(2),n.exports=function(n){return o.e(46892816061587,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(397)})})}},369:function(n,e,o){o(2),n.exports=function(n){return o.e(0x7b71d9db271c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(398)})})}},370:function(n,e,o){o(2),n.exports=function(n){return o.e(0xbd81445afa21,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(399)})})}},371:function(n,e,o){o(2),n.exports=function(n){return o.e(0x7c4df250fb7f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(400)})})}},372:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf68d8f9f9443,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(401)})})}},332:function(n,e,o){o(2),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(203)})})}},130:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(1),u=(t(r),o(201)),a=t(u),c=o(59),i=t(c),s=o(131),l=t(s),f=void 0,p={},d={},m={},g={},h={},y=[],j=[],x={},v="",b=[],R={},C=function(n){return n&&n.default||n},N=void 0,k=!0,w=[],_={},P={},E=5;N=o(204)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){S(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},L=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},S=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){o(null,g[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){g[e]=t,w.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),w=w.slice(-E),o(n,t)})}},A=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):P[e]?n.nextTick(function(){o(P[e])}):S(e,function(n,t){if(n)o(n);else{var r=C(t());h[e]=r,o(n,r)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},T=function(n,e){console.log(e),_[n]||(_[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],x={},R={},b=[],y=[],v=""},addPagesArray:function(n){y=n,v="",f=(0,a.default)(n,v)},addDevRequires:function(n){p=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var o=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(L);var t=f(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||g[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||g[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return f(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var u=r;u.unregister()}window.location.reload()}})),k=!1;if(_[e])return T(e,'Previously detected load failure for "'+e+'"'),o();var t=f(e);if(!t)return T(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,c=function(){if(r&&u&&(!t.layoutComponentChunkName||a)){m[e]={component:r,json:u,layout:a,page:t};var n={component:r,json:u,layout:a,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return A(t.componentChunkName,function(n,e){n&&T(t.path,"Loading the component for "+t.path+" failed"),r=e,c()}),A(t.jsonName,function(n,e){n&&T(t.path,"Loading the JSON for "+t.path+" failed"),u=e,c()}),void(t.layoutComponentChunkName&&A(t.layout,function(n,e){n&&T(t.path,"Loading the Layout for "+t.path+" failed"),a=e,c()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,o(72))},402:function(n,e){n.exports=[{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-best-practices-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"best-practices.json",path:"/best-practices/"},{componentChunkName:"component---src-pages-course-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"course.json",path:"/course/"},{componentChunkName:"component---src-pages-design-process-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"design-process.json",path:"/design-process/"},{componentChunkName:"component---src-pages-document-your-first-project-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"document-your-first-project.json",path:"/document-your-first-project/"},{componentChunkName:"component---src-pages-documentation-methods-makers-reflection-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"documentation-methods-makers-reflection.json",path:"/documentation-methods-makers-reflection/"},{componentChunkName:"component---src-pages-documentation-methods-photos-video-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"documentation-methods-photos-video.json",path:"/documentation-methods-photos-video/"},{componentChunkName:"component---src-pages-documenting-with-google-drive-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"documenting-with-google-drive.json",path:"/documenting-with-google-drive/"},{componentChunkName:"component---src-pages-effective-email-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"effective-email.json",path:"/effective-email/"},{componentChunkName:"component---src-pages-get-to-know-your-browser-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"get-to-know-your-browser.json",path:"/get-to-know-your-browser/"},{componentChunkName:"component---src-pages-google-drive-google-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"google-drive-google-docs.json",path:"/google-drive-google-docs/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-introduction-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"introduction.json",path:"/introduction/"},{componentChunkName:"component---src-pages-maker-warm-up-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"maker-warm-up.json",path:"/maker-warm-up/"},{componentChunkName:"component---src-pages-page-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-project-planning-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"project-planning.json",path:"/project-planning/"},{componentChunkName:"component---src-pages-setting-up-gmail-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"setting-up-gmail.json",path:"/setting-up-gmail/"},{componentChunkName:"component---src-pages-why-documentation-is-important-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"why-documentation-is-important.json",path:"/why-documentation-is-important/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},204:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],u=function(){var n=e();n&&(r.push(n),o(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=o(80),a=o(1),c=t(a),i=o(165),s=t(i),l=o(78),f=o(376),p=o(317),d=t(p),m=o(22),g=o(202),h=t(g),y=o(59),j=t(y),x=o(402),v=t(x),b=o(403),R=t(b),C=o(200),N=t(C),k=o(199),w=t(k),_=o(130),P=t(_);o(240),window.___history=h.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(205);var t=function(n){function e(n){n.page.path===P.default.getPage(t).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(a),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,h.default.location),t=o.pathname,r=E[t];r&&(t=r.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var a=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(a),window.___history.push(o)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,p=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return c.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,a.createElement)(p?p:g,null,(0,a.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,a.createElement)(N.default,r({page:!0},t)):(0,a.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0],i=(0,u.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return i(c.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},403:function(n,e){n.exports=[]},205:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(59),u=t(r),a="/";a="/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},131:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},317:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},2:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,u=o.s;o.e=function(t,a){var c=!1,i=!0,s=function(n){a&&(a(o,n),a=null)};return!u&&e&&e[t]?void s(!0):(r(t,function(){c||(c=!0,i?setTimeout(function(){s()}):s())}),void(c||(i=!1,n(function(){c||(c=!0,u?u[t]=void 0:(e||(e={}),e[t]=!0),s(!0))}))))}}t()},404:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},512:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},333:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(212)})})}},334:function(n,e,o){o(2),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(213)})})}},335:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc370e8c36964,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(214)})})}},336:function(n,e,o){o(2),n.exports=function(n){return o.e(0xd83025be8dfe,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(215)})})}},337:function(n,e,o){o(2),n.exports=function(n){return o.e(0x669b1c365122,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(216)})})}},338:function(n,e,o){o(2),n.exports=function(n){return o.e(0x5f0fb1e5f21a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(217)})})}},339:function(n,e,o){o(2),n.exports=function(n){return o.e(51781467649084,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(218)})})}},340:function(n,e,o){o(2),n.exports=function(n){return o.e(33949544793634,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(219)})})}},341:function(n,e,o){o(2),n.exports=function(n){return o.e(0xd3b26cc12b5e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(220)})})}},342:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9f3b363fa505,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(221)})})}},343:function(n,e,o){o(2),n.exports=function(n){return o.e(0xaa4fd7172a7b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(222)})})}},344:function(n,e,o){o(2),n.exports=function(n){return o.e(28184800445257,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(223)})})}},345:function(n,e,o){o(2),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(224)})})}},346:function(n,e,o){o(2),n.exports=function(n){return o.e(0x98eee52c5b85,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(225)})})}},347:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe356251fd9ae,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(226)})})}},348:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc6c285f8fd10,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(227)})})}},349:function(n,e,o){o(2),n.exports=function(n){return o.e(0xdac322629182,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(228)})})}},350:function(n,e,o){o(2),n.exports=function(n){return o.e(37902869905637,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(229)})})}},351:function(n,e,o){o(2),n.exports=function(n){return o.e(65763660291834,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(230)})})}}});
//# sourceMappingURL=app-130824ba20116f14a721.js.map