this.webpackChunk([16],{1763:function(e,t,n){var r=n(402);e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},1934:function(e,t,n){"use strict";(function(e){var r=n(0);function i(t){var n;n="undefined"!==typeof window?window:"undefined"!==typeof self?self:e;var r="undefined"!==typeof document&&document.attachEvent;if(!r){var i=function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)};return function(t){return e(t)}}(),o=function(){var e=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,r=t.lastElementChild,i=n.firstElementChild;r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,i.style.width=n.offsetWidth+1+"px",i.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},l=function(e){if(!(e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&o(this.__resizeRAF__),this.__resizeRAF__=i((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))}},s=!1,c="",u="animationstart",d="Webkit Moz O ms".split(" "),f="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),h=document.createElement("fakeelement");if(void 0!==h.style.animationName&&(s=!0),!1===s)for(var p=0;p<d.length;p++)if(void 0!==h.style[d[p]+"AnimationName"]){c="-"+d[p].toLowerCase()+"-",u=f[p],s=!0;break}var m="resizeanim",g="@"+c+"keyframes "+m+" { from { opacity: 0; } to { opacity: 0; } } ",v=c+"animation: 1ms "+m+"; "}return{addResizeListener:function(e,i){if(r)e.attachEvent("onresize",i);else{if(!e.__resizeTriggers__){var o=e.ownerDocument,s=n.getComputedStyle(e);s&&"static"==s.position&&(e.style.position="relative"),function(e){if(!e.getElementById("detectElementResize")){var n=(g||"")+".resize-triggers { "+(v||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',r=e.head||e.getElementsByTagName("head")[0],i=e.createElement("style");i.id="detectElementResize",i.type="text/css",null!=t&&i.setAttribute("nonce",t),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(e.createTextNode(n)),r.appendChild(i)}}(o),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=o.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),a(e),e.addEventListener("scroll",l,!0),u&&(e.__resizeTriggers__.__animationListener__=function(t){t.animationName==m&&a(e)},e.__resizeTriggers__.addEventListener(u,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(i)}},removeResizeListener:function(e,t){if(r)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(u,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(n){}}}}}var o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},c=function(e){function t(){var e,n,r;o(this,t);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={height:r.props.defaultHeight||0,width:r.props.defaultWidth||0},r._onResize=function(){var e=r.props,t=e.disableHeight,n=e.disableWidth,i=e.onResize;if(r._parentNode){var o=r._parentNode.offsetHeight||0,a=r._parentNode.offsetWidth||0,l=window.getComputedStyle(r._parentNode)||{},s=parseInt(l.paddingLeft,10)||0,c=parseInt(l.paddingRight,10)||0,u=parseInt(l.paddingTop,10)||0,d=parseInt(l.paddingBottom,10)||0,f=o-u-d,h=a-s-c;(!t&&r.state.height!==f||!n&&r.state.width!==h)&&(r.setState({height:o-u-d,width:a-s-c}),i({height:o,width:a}))}},r._setRef=function(e){r._autoSizer=e},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=i(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,i=e.disableHeight,o=e.disableWidth,a=e.style,s=this.state,c=s.height,u=s.width,d={overflow:"visible"},f={},h=!1;return i||(0===c&&(h=!0),d.height=0,f.height=c),o||(0===u&&(h=!0),d.width=0,f.width=u),Object(r.createElement)("div",{className:n,ref:this._setRef,style:l({},d,a)},!h&&t(f))}}]),t}(r.PureComponent);c.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}},t.a=c}).call(this,n(89))},1935:function(e,t,n){"use strict";var r=n(25),i=n(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=(0,r(n(33)).default)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.default=a},1936:function(e,t,n){"use strict";var r=n(25),i=n(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=(0,r(n(33)).default)(o.createElement("path",{d:"M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8m0-6h-2v4h-4V3H8v4h-.01C6.9 6.99 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.51V9c0-1.1-.9-2-2-2V3z"}),"PowerOutlined");t.default=a},2062:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n.n(r),o=n(9),a=n(3),l=n(0),s=n.n(l),c=n(106),u=n(99),d=n(905),f=n(465),h=n(185),p=n(942),m=n(628),g=n(170),v=n(383),_=n(955),b=n(221),y=n.n(b),S=n(214),O=n.n(S),z=n(481),w=n.n(z),I=n(573),C=n.n(I),E=n(575),k=n.n(E),x=n(1935),T=n.n(x),R=n(1936),j=n.n(R),M=n(1934),L=n(139),W=n(7),D=n(4),N=n(16),A=n(696),P=n.n(A),H=n(469),F=n.n(H),B=n(1763),q=n.n(B),U=n(2),V=n(164),K=n(199);function G(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var J=function(e,t){var n;void 0===t&&(t=G);var r,i=[],o=!1;return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return o&&n===this&&t(a,i)||(r=e.apply(this,a),o=!0,n=this,i=a),r}},Q=(n(141),"object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()});function X(e){cancelAnimationFrame(e.id)}function Y(e,t){var n=Q();var r={id:requestAnimationFrame((function i(){Q()-n>=t?e.call(null):r.id=requestAnimationFrame(i)}))};return r}var Z=null;function $(e){if(void 0===e&&(e=!1),null===Z||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),i=r.style;return i.width="100px",i.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?Z="positive-descending":(t.scrollLeft=1,Z=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),Z}return Z}var ee=function(e,t){return e};function te(e){var t,n,r=e.getItemOffset,i=e.getEstimatedTotalSize,o=e.getItemSize,a=e.getOffsetForIndexAndAlignment,s=e.getStartIndexForOffset,c=e.getStopIndexForStartIndex,u=e.initInstanceProps,d=e.shouldResetStyleCacheOnItemSizeChange,f=e.validateProps;return n=t=function(e){function t(t){var n;return(n=e.call(this,t)||this)._instanceProps=u(n.props,Object(K.a)(Object(K.a)(n))),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:Object(K.a)(Object(K.a)(n)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"===typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=J((function(e,t,r,i){return n.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:r,visibleStopIndex:i})})),n._callOnScroll=void 0,n._callOnScroll=J((function(e,t,r){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:r})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,i=n.props,a=i.direction,l=i.itemSize,s=i.layout,c=n._getItemStyleCache(d&&l,d&&s,d&&a);if(c.hasOwnProperty(e))t=c[e];else{var u=r(n.props,e,n._instanceProps),f=o(n.props,e,n._instanceProps),h="horizontal"===a||"horizontal"===s,p="rtl"===a,m=h?u:0;c[e]=t={position:"absolute",left:p?void 0:m,right:p?m:void 0,top:h?0:u,height:h?"100%":f,width:h?f:"100%"}}return t},n._getItemStyleCache=void 0,n._getItemStyleCache=J((function(e,t,n){return{}})),n._onScrollHorizontal=function(e){var t=e.currentTarget,r=t.clientWidth,i=t.scrollLeft,o=t.scrollWidth;n.setState((function(e){if(e.scrollOffset===i)return null;var t=n.props.direction,a=i;if("rtl"===t)switch($()){case"negative":a=-i;break;case"positive-descending":a=o-r-i}return a=Math.max(0,Math.min(a,o-r)),{isScrolling:!0,scrollDirection:e.scrollOffset<i?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(e){var t=e.currentTarget,r=t.clientHeight,i=t.scrollHeight,o=t.scrollTop;n.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,i-r));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"===typeof t?t(e):null!=t&&"object"===typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&X(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=Y(n._resetIsScrolling,150)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}Object(V.a)(t,e),t.getDerivedStateFromProps=function(e,t){return ne(e,t),f(e),null};var n=t.prototype;return n.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},n.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,r=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(a(this.props,e,t,r,this._instanceProps))},n.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,r=e.layout;if("number"===typeof n&&null!=this._outerRef){var i=this._outerRef;"horizontal"===t||"horizontal"===r?i.scrollLeft=n:i.scrollTop=n}this._callPropsCallbacks()},n.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,r=this.state,i=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch($()){case"negative":o.scrollLeft=-i;break;case"positive-ascending":o.scrollLeft=i;break;default:var a=o.clientWidth,l=o.scrollWidth;o.scrollLeft=l-a-i}else o.scrollLeft=i;else o.scrollTop=i}this._callPropsCallbacks()},n.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&X(this._resetIsScrollingTimeoutId)},n.render=function(){var e=this.props,t=e.children,n=e.className,r=e.direction,o=e.height,a=e.innerRef,s=e.innerElementType,c=e.innerTagName,u=e.itemCount,d=e.itemData,f=e.itemKey,h=void 0===f?ee:f,p=e.layout,m=e.outerElementType,g=e.outerTagName,v=e.style,_=e.useIsScrolling,b=e.width,y=this.state.isScrolling,S="horizontal"===r||"horizontal"===p,O=S?this._onScrollHorizontal:this._onScrollVertical,z=this._getRangeToRender(),w=z[0],I=z[1],C=[];if(u>0)for(var E=w;E<=I;E++)C.push(Object(l.createElement)(t,{data:d,key:h(E,d),index:E,isScrolling:_?y:void 0,style:this._getItemStyle(E)}));var k=i(this.props,this._instanceProps);return Object(l.createElement)(m||g||"div",{className:n,onScroll:O,ref:this._outerRefSetter,style:Object(U.a)({position:"relative",height:o,width:b,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:r},v)},Object(l.createElement)(s||c||"div",{children:C,ref:a,style:{height:S?"100%":k,pointerEvents:y?"none":void 0,width:S?k:"100%"}}))},n._callPropsCallbacks=function(){if("function"===typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],r=e[2],i=e[3];this._callOnItemsRendered(t,n,r,i)}if("function"===typeof this.props.onScroll){var o=this.state,a=o.scrollDirection,l=o.scrollOffset,s=o.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},n._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,r=this.state,i=r.isScrolling,o=r.scrollDirection,a=r.scrollOffset;if(0===t)return[0,0,0,0];var l=s(this.props,a,this._instanceProps),u=c(this.props,l,a,this._instanceProps),d=i&&"backward"!==o?1:Math.max(1,n),f=i&&"forward"!==o?1:Math.max(1,n);return[Math.max(0,l-d),Math.max(0,Math.min(t-1,u+f)),l,u]},t}(l.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var ne=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},re=function(e,t,n){var r=e.itemSize,i=n.itemMetadataMap,o=n.lastMeasuredIndex;if(t>o){var a=0;if(o>=0){var l=i[o];a=l.offset+l.size}for(var s=o+1;s<=t;s++){var c=r(s);i[s]={offset:a,size:c},a+=c}n.lastMeasuredIndex=t}return i[t]},ie=function(e,t,n,r,i){for(;r<=n;){var o=r+Math.floor((n-r)/2),a=re(e,o,t).offset;if(a===i)return o;a<i?r=o+1:a>i&&(n=o-1)}return r>0?r-1:0},oe=function(e,t,n,r){for(var i=e.itemCount,o=1;n<i&&re(e,n,t).offset<r;)n+=o,o*=2;return ie(e,t,Math.min(n,i-1),Math.floor(n/2),r)},ae=function(e,t){var n=e.itemCount,r=t.itemMetadataMap,i=t.estimatedItemSize,o=t.lastMeasuredIndex,a=0;if(o>=n&&(o=n-1),o>=0){var l=r[o];a=l.offset+l.size}return a+(n-o-1)*i},le=te({getItemOffset:function(e,t,n){return re(e,t,n).offset},getItemSize:function(e,t,n){return n.itemMetadataMap[t].size},getEstimatedTotalSize:ae,getOffsetForIndexAndAlignment:function(e,t,n,r,i){var o=e.direction,a=e.height,l=e.layout,s=e.width,c="horizontal"===o||"horizontal"===l?s:a,u=re(e,t,i),d=ae(e,i),f=Math.max(0,Math.min(d-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===n&&(n=r>=h-c&&r<=f+c?"auto":"center"),n){case"start":return f;case"end":return h;case"center":return Math.round(h+(f-h)/2);case"auto":default:return r>=h&&r<=f?r:r<h?h:f}},getStartIndexForOffset:function(e,t,n){return function(e,t,n){var r=t.itemMetadataMap,i=t.lastMeasuredIndex;return(i>0?r[i].offset:0)>=n?ie(e,t,i,0,n):oe(e,t,Math.max(0,i),n)}(e,n,t)},getStopIndexForStartIndex:function(e,t,n,r){for(var i=e.direction,o=e.height,a=e.itemCount,l=e.layout,s=e.width,c="horizontal"===i||"horizontal"===l?s:o,u=re(e,t,r),d=n+c,f=u.offset+u.size,h=t;h<a-1&&f<d;)h++,f+=re(e,h,r).size;return h},initInstanceProps:function(e,t){var n={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,r){void 0===r&&(r=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),r&&t.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}});var se=n(392),ce=n.n(se);var ue=function(e){return function(t){e.forEach((function(e){"function"===typeof e?e(t):null!=e&&(e.current=t)}))}},de=function(){},fe=function(e,t){return void 0===t&&(t=null),{child:null,isShown:!t||t.public.isOpen&&t.isShown,parent:t,public:e,sibling:null,visited:!1}},he=function(e,t){return(0,t.getRecordData)(e).data.id},pe=function(e){return function(t,n,r){return r.refresh?function(e,t,n){var r=e.createRecord,i=t.buildingTaskTimeout,o=t.placeholder,a=t.async,l=void 0!==a&&a,s=t.treeWalker,c=l&&void 0!==n.records,u=n.records,d=[],f=new Map,h=i?{timeout:i}:void 0,p=new WeakMap,m=s(),g=m.next().value,v=r(g.data,n,void 0,c?u.get(g.data.id):void 0);f.set(v.public.data.id,v),p.set(v,g);var _=v,b=!0,y=v,S="requestIdleCallback"in window&&void 0!==o&&!(null===o&&!n.order),O=S?function(e){return e.timeRemaining()>0}:function(){return!0},z=function e(t){for(;null!==_;){if(!O(t))return void requestIdleCallback(e,h);if(_.visited)_.visited=!1,_=null!==_.sibling?_.sibling:_.parent,y=_;else{var i=m.next(p.get(_)).value;if(void 0===i){b?b=!1:(_.isShown&&d.push(_.public.data.id),_.visited=null!==_.child,_=null!==_.child?_.child:null!==_.sibling?_.sibling:_.parent),y=_;continue}var o=r(i.data,n,b?void 0:_,c?u.get(i.data.id):void 0);f.set(o.public.data.id,o),p.set(o,i),b||y!==_?y.sibling=o:y.child=o,y=o}}S&&n.setState({order:d,records:f,updateRequest:{}})};return S?requestIdleCallback(z,h):z(),void 0!==o&&l&&n.order?n:{order:d,records:f}}(e,t,n):function(e,t){var n=e.order,r=e.records,i=t.opennessState;if("object"!==typeof i)return null;for(var o in i)if(r.has(o)){var a=i[o],l=r.get(o),s="boolean"===typeof a?{open:a}:a,c=s.open,u=s.subtreeCallback,d=void 0===u?de:u,f=de,h=de;l.isShown&&(c?function(){for(var e=n.indexOf(o),t=l;null!==t;){if(null!==t.sibling){t=t.sibling;break}t=t.parent}var r=null===t?n.length-1-e:n.indexOf(t.public.data.id)-1-e,i=[[e+1,r]],a=0;f=function(t){t.isShown=!t.parent||t.parent.public.isOpen&&t.parent.isShown,t.isShown&&(i[a].push(t.public.data.id),32768===i[a].length&&(a+=1,i.push([e+1+32768*a,0])))},h=function(){for(var e=0;e<i.length;e++){var t;(t=n).splice.apply(t,i[e])}}}():l.public.isOpen&&function(){var e=n.indexOf(o),t=0;f=function(e){e.isShown&&(t+=1),e.isShown=!e.parent||e.parent.public.isOpen&&e.parent.isShown},h=function(){n.splice(e+1,t)}}());for(var p=l;null!==p;)p.visited?(p.visited=!1,p=p===l?null:null!==p.sibling?p.sibling:p.parent):(p.public.isOpen=p===l?c:p.public.isOpen,d(p.public,l.public),p!==l&&f(p),p.visited=null!==p.child,p=null!==p.child?p.child:p===l?null:null!==p.sibling?p.sibling:p.parent);h()}return{order:n,records:r,updateRequest:{}}}(n,r)}},me=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).getRecordData=r.getRecordData.bind(ce()(r)),r.state={list:Object(l.createRef)(),recomputeTree:r.recomputeTree.bind(ce()(r)),setState:r.setState.bind(ce()(r))},r}q()(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.listRef,r=void 0===n?null:n,i=e.treeWalker,o=t.computeTree,a=t.list,l=t.order,s=t.treeWalker;return F()({attachRefs:ue([a,r])},i===s&&l?null:o(e,t,{refresh:!0}),{treeWalker:i})};var n=t.prototype;return n.getItemData=function(){var e=this.props,t=e.children,n=e.itemData;return{component:t,getRecordData:this.getRecordData,treeData:n}},n.getRecordData=function(e){var t=this.state,n=t.order;return t.records.get(n[e]).public},n.recomputeTree=function(e){var t=this;return new Promise((function(n){t.setState((function(n){return n.computeTree(t.props,n,{opennessState:e})}),n)}))},n.scrollTo=function(e){var t;null==(t=this.state.list.current)||t.scrollTo(e)},n.scrollToItem=function(e,t){var n;null==(n=this.state.list.current)||n.scrollToItem(this.state.order.indexOf(e),t)},t}(l.PureComponent);me.defaultProps={rowComponent:function(e){var t=e.index,n=e.data,r=n.component,i=n.getRecordData,o=n.treeData,a=e.style,l=e.isScrolling,c=i(t);return s.a.createElement(r,Object.assign({isScrolling:l,style:a,treeData:o},c))}};var ge=me,ve=(pe({createRecord:function(e,t,n,r){var i=t.recomputeTree;return fe({data:e,isOpen:r?r.public.isOpen:e.isOpenByDefault,setOpen:function(t){var n;return i(((n={})[e.id]=t,n))}},n)}}),pe({createRecord:function(e,t,n,r){var i=t.recomputeTree,o=t.resetAfterId,a=fe({data:e,height:r?r.public.height:e.defaultHeight,isOpen:r?r.public.isOpen:e.isOpenByDefault,resize:function(e,t){a.public.height=e,o(a.public.data.id,t)},setOpen:function(t){var n;return i(((n={})[e.id]=t,n))}},n);return a}})),_e=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).getItemSize=r.getItemSize.bind(ce()(r)),r.state=F()({},r.state,{computeTree:ve,resetAfterId:r.resetAfterId.bind(ce()(r))}),r}q()(t,e);var n=t.prototype;return n.resetAfterId=function(e,t){var n;void 0===t&&(t=!1);var r=this.state,i=r.list,o=r.order;null==(n=i.current)||n.resetAfterIndex(o.indexOf(e),t)},n.recomputeTree=function(t){var n=this;return e.prototype.recomputeTree.call(this,t).then((function(){var e;null==(e=n.state.list.current)||e.resetAfterIndex(0,!0)}))},n.render=function(){var e=this.props,t=(e.children,e.placeholder),n=e.itemSize,r=e.rowComponent,i=(e.treeWalker,P()(e,["children","placeholder","itemSize","rowComponent","treeWalker"])),o=this.state,a=o.attachRefs,l=o.order;return t&&0===l.length?t:s.a.createElement(le,Object.assign({},i,{itemCount:l.length,itemData:this.getItemData(),itemKey:he,itemSize:null!=n?n:this.getItemSize,ref:a}),r)},n.getItemSize=function(e){return this.getRecordData(e).height},t}(ge),be=Object(l.lazy)((function(){return n.e(40).then(n.bind(null,2058))})),ye=Object(l.lazy)((function(){return n.e(41).then(n.bind(null,2059))})),Se=Object(l.lazy)((function(){return n.e(42).then(n.bind(null,2060))})),Oe=Object(l.lazy)((function(){return n.e(43).then(n.bind(null,2061))})),ze=Object(c.a)((function(e){var t,n;return{searchBox:{marginBottom:e.spacing(2)},menuIcon:{marginRight:e.spacing(1),marginBottom:0},fab:{position:"absolute",bottom:e.spacing(6),right:e.spacing(6)},compactCheckbox:{padding:0},checkboxLabel:{marginRight:0,"&:hover":{backgroundColor:"#eee"}},accordionBase:{display:"flex"},accordionCard:{padding:3,cursor:"pointer",display:"flex"},nestingLevelMarker:{position:"absolute",borderLeft:"1.5px solid #555"},accordionColor:{background:null===(t=e.palette.tertiary)||void 0===t?void 0:t.main,color:null===(n=e.palette.tertiary)||void 0===n?void 0:n.contrastText,width:"100%",display:"flex",paddingLeft:5},accordionText:{margin:"auto 0"}}})),we=function(e){var t=e.data,n=e.isOpen,r=e.style,i=e.setOpen,o=t.isLeaf,a=t.nestingLevel,l=t.checked,c=t.id,p=t.name,m=t.onChange,g=t.conf,v=t.onMoreInfo,_=ze(),b=10*a+(o?10:0),y=p&&(p.endsWith("(Unsupported)")||p.endsWith("(Unknown)"));return s.a.createElement("div",{style:r,className:o?void 0:_.accordionBase},new Array(a).fill(0).map((function(e,t){return s.a.createElement("div",{key:"mark-".concat(t),style:{left:10*t+4,height:r.height},className:_.nestingLevelMarker})})),s.a.createElement("div",{className:o?void 0:_.accordionCard,onClick:function(){return i(!n)},style:{marginLeft:b,whiteSpace:"nowrap",width:"100%"}},s.a.createElement("div",{className:o?void 0:_.accordionColor},o?s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:_.checkboxLabel,control:s.a.createElement(f.a,{className:_.compactCheckbox,checked:l,onChange:function(){return m(c)},color:"primary",disabled:y,inputProps:{"data-testid":"htsTrackEntry-".concat(c)}}),label:p}),s.a.createElement(h.a,{onClick:function(e){return v({target:e.currentTarget,id:c,conf:g})},color:"secondary","data-testid":"htsTrackEntryMenu-".concat(c)},s.a.createElement(T.a,null))):s.a.createElement("div",{className:_.accordionText},s.a.createElement(u.a,null,n?s.a.createElement(w.a,null):s.a.createElement(C.a,null),p)))))},Ie=function(e,t,n){var r=!!e.conf;return{data:Object(a.a)(Object(a.a)({defaultHeight:r?22:40,isLeaf:r,isOpenByDefault:!0,nestingLevel:t},e),n),nestingLevel:t,node:e}},Ce=Object(N.observer)((function(e){var t,n=e.height,r=e.tree,a=e.model,c=Object(l.useRef)(null),u=Object(l.useState)(),d=Object(o.a)(u,2),f=d[0],h=d[1],p=Object(W.getSession)(a),m=a.filterText,g=Object(l.useMemo)((function(){return{onChange:function(e){return a.view.toggleTrack(e)},onMoreInfo:h}}),[a.view]),v=Object(l.useCallback)(i.a.mark((function e(){var t,n,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<r.children.length)){e.next=7;break}return e.next=4,Ie(r.children[t],0,g);case 4:t++,e.next=1;break;case 7:return void(e.next=10);case 10:n=e.sent,o=0;case 12:if(!(o<n.node.children.length)){e.next=19;break}return a=n.node.children[o],e.next=16,Ie(a,n.nestingLevel+1,g);case 16:o++,e.next=12;break;case 19:e.next=7;break;case 21:case"end":return e.stop()}}),e)})),[r,g]),_=null===f||void 0===f?void 0:f.conf,b=_&&(null===(t=p.getTrackActionMenuItems)||void 0===t?void 0:t.call(p,_))||[];return Object(l.useEffect)((function(){c.current.recomputeTree({refreshNodes:!0,useDefaultHeight:!0})}),[r,m]),s.a.createElement(s.a.Fragment,null,s.a.createElement(_e,{ref:c,treeWalker:v,height:n},we),s.a.createElement(L.a,{anchorEl:null===f||void 0===f?void 0:f.target,menuItems:b,onMenuItemClick:function(e,t){t(),h(void 0)},open:Boolean(f),onClose:function(){return h(void 0)}}))})),Ee=function(e){var t=e.tree,n=e.model,r=e.offset;return"undefined"===typeof jest?s.a.createElement(M.a,{disableWidth:!0},(function(e){var i=e.height;return s.a.createElement(Ce,{height:i-r,model:n,tree:t})})):s.a.createElement(Ce,{height:9e3,model:n,tree:t})},ke=function(e){var t=e.overrideDimensions,n=e.children;return t?s.a.createElement("div",{style:Object(a.a)({},t)},n):s.a.createElement(s.a.Fragment,null,n)},xe=Object(N.observer)((function(e){var t=e.model,n=e.toolbarHeight,r=e.overrideDimensions,i=ze(),a=Object(W.getSession)(t),c=Object(l.useState)(null),u=Object(o.a)(c,2),d=u[0],f=u[1];function h(){f(null)}return s.a.createElement(ke,{overrideDimensions:r},s.a.createElement(Re,{model:t,toolbarHeight:n,overrideDimensions:r}),s.a.createElement(p.a,{color:"secondary",className:i.fab,onClick:function(e){f(e.currentTarget)}},s.a.createElement(O.a,null)),s.a.createElement(m.a,{anchorEl:d,open:Boolean(d),onClose:function(){return f(null)}},s.a.createElement(g.a,{onClick:function(){h();var e=a.addWidget("AddConnectionWidget","addConnectionWidget");a.showWidget(e)}},"Add connection"),s.a.createElement(g.a,{onClick:function(){h();var e=a.addWidget("AddTrackWidget","addTrackWidget",{view:t.view.id});a.showWidget(e)}},"Add track")))})),Te=Object(N.observer)((function(e){var t=e.model,n=e.setHeaderHeight,r=e.setAssemblyIdx,i=e.assemblyIdx,a=ze(),c=Object(W.getSession)(t),u=Object(l.useState)(),d=Object(o.a)(u,2),f=d[0],p=d[1],m=Object(l.useState)(),g=Object(o.a)(m,2),b=g[0],S=g[1],O=Object(l.useState)(),z=Object(o.a)(O,2),w=z[0],I=z[1],C=Object(l.useState)(),E=Object(o.a)(C,2),x=E[0],T=E[1],R=Object(l.useState)(!1),M=Object(o.a)(R,2),N=M[0],A=M[1],P=Object(l.useState)(!1),H=Object(o.a)(P,2),F=H[0],B=H[1],q=t.assemblyNames,U=q[i];function V(e,t){var n=Object(D.readConfObject)(e,"name"),r=c.prepareToBreakConnection(e);if(r){var i=Object(o.a)(r,2),a=i[0],l=i[1];Object.keys(l).length>0?I({connectionConf:e,safelyBreakConnection:a,dereferenceTypeCount:l,name:n}):a()}t&&T({name:n,connectionConf:e})}var K=[{label:"Turn on/off connections...",onClick:function(){return B(!0)}},{label:"Delete connections...",onClick:function(){return A(!0)}}],G=q.length>1?[{label:"Select assembly...",subMenu:q.map((function(e,t){return{label:e,onClick:function(){r(t)}}}))}]:[],J=[{label:"Add track...",onClick:function(){c.showWidget(c.addWidget("AddTrackWidget","addTrackWidget",{view:t.view.id}))}}].concat(G);return s.a.createElement("div",{ref:function(e){return n((null===e||void 0===e?void 0:e.getBoundingClientRect().height)||0)},"data-testid":"hierarchical_track_selector"},s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(h.a,{className:a.menuIcon,onClick:function(e){S(e.currentTarget)}},s.a.createElement(k.a,null)),s.a.createElement(h.a,{className:a.menuIcon,onClick:function(e){p(e.currentTarget)}},s.a.createElement(j.a,null)),s.a.createElement(v.a,{className:a.searchBox,label:"Filter tracks",value:t.filterText,onChange:function(e){return t.setFilterText(e.target.value)},fullWidth:!0,InputProps:{endAdornment:s.a.createElement(_.a,{position:"end"},s.a.createElement(h.a,{color:"secondary",onClick:t.clearFilterText},s.a.createElement(y.a,null)))}})),s.a.createElement(L.a,{anchorEl:f,open:Boolean(f),onMenuItemClick:function(e,t){t(),p(void 0)},onClose:function(){p(void 0)},menuItems:[{label:"Add connection",onClick:function(){c.showWidget(c.addWidget("AddConnectionWidget","addConnectionWidget"))}}].concat(K)}),s.a.createElement(L.a,{anchorEl:b,open:Boolean(b),onMenuItemClick:function(e,t){t(),S(void 0)},onClose:function(){S(void 0)},menuItems:J}),s.a.createElement(l.Suspense,{fallback:s.a.createElement("div",null)},w?s.a.createElement(be,{modalInfo:w,setModalInfo:I,session:c}):x?s.a.createElement(ye,{handleClose:function(){T(void 0)},deleteDialogDetails:x,session:c}):null,N?s.a.createElement(Se,{handleClose:function(){return A(!1)},breakConnection:V,session:c}):null,F?s.a.createElement(Oe,{handleClose:function(){return B(!1)},session:c,breakConnection:V,assemblyName:U}):null))})),Re=Object(N.observer)((function(e){var t=e.model,n=e.toolbarHeight,r=void 0===n?0:n,i=Object(l.useState)(0),a=Object(o.a)(i,2),c=a[0],u=a[1],d=Object(l.useState)(0),f=Object(o.a)(d,2),h=f[0],p=f[1],m=t.assemblyNames;if(!m[c])return null;var g=t.hierarchy(m[c]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(Te,{model:t,setHeaderHeight:p,setAssemblyIdx:u,assemblyIdx:c}),s.a.createElement(Ee,{tree:g,model:t,offset:r+h}))}));t.default=xe}});
//# sourceMappingURL=16.81539e22f8620ca5f799.worker.js.map