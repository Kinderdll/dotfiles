"use strict";(self.webpackChunkatlascode=self.webpackChunkatlascode||[]).push([[733],{30240:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(58168),n=r(96540),a=r(35192),i=r(54392),l=n.forwardRef((function(e,t){return n.createElement(i.A,(0,o.A)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));const c=(0,a.A)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(l)},67264:(e,t,r)=>{r.d(t,{A:()=>f});var o=r(80045),n=r(64467),a=r(58168),i=r(96540),l=r(20053),c=r(35192),s=r(17688),d=r(67515),u=i.forwardRef((function(e,t){var r=e.classes,n=e.className,c=e.disabled,u=void 0!==c&&c,f=e.disableFocusRipple,p=void 0!==f&&f,v=e.fullWidth,h=e.icon,m=e.indicator,b=e.label,g=e.onChange,A=e.onClick,y=e.onFocus,w=e.selected,x=e.selectionFollowsFocus,C=e.textColor,k=void 0===C?"inherit":C,E=e.value,S=e.wrapped,R=void 0!==S&&S,z=(0,o.A)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return i.createElement(s.A,(0,a.A)({focusRipple:!p,className:(0,l.A)(r.root,r["textColor".concat((0,d.A)(k))],n,u&&r.disabled,w&&r.selected,b&&h&&r.labelIcon,v&&r.fullWidth,R&&r.wrapped),ref:t,role:"tab","aria-selected":w,disabled:u,onClick:function(e){g&&g(e,E),A&&A(e)},onFocus:function(e){x&&!w&&g&&g(e,E),y&&y(e)},tabIndex:w?0:-1},z),i.createElement("span",{className:r.wrapper},h,b),m)}));const f=(0,c.A)((function(e){var t;return{root:(0,a.A)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},(0,n.A)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),(0,n.A)(t,"overflow","hidden"),(0,n.A)(t,"whiteSpace","normal"),(0,n.A)(t,"textAlign","center"),(0,n.A)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(u)},74139:(e,t,r)=>{r.d(t,{A:()=>B});var o,n=r(58168),a=r(80045),i=r(64467),l=r(96540),c=(r(44363),r(20053)),s=r(31198),d=r(76182);function u(){if(o)return o;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),o="reverse",e.scrollLeft>0?o="default":(e.scrollLeft=1,0===e.scrollLeft&&(o="negative")),document.body.removeChild(e),o}function f(e,t){var r=e.scrollLeft;if("rtl"!==t)return r;switch(u()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function p(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var v={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function h(e){var t=e.onChange,r=(0,a.A)(e,["onChange"]),o=l.useRef(),i=l.useRef(null),c=function(){o.current=i.current.offsetHeight-i.current.clientHeight};return l.useEffect((function(){var e=(0,s.A)((function(){var e=o.current;c(),e!==o.current&&t(o.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),l.useEffect((function(){c(),t(o.current)}),[t]),l.createElement("div",(0,n.A)({style:v,ref:i},r))}var m=r(35192),b=r(67515),g=l.forwardRef((function(e,t){var r=e.classes,o=e.className,i=e.color,s=e.orientation,d=(0,a.A)(e,["classes","className","color","orientation"]);return l.createElement("span",(0,n.A)({className:(0,c.A)(r.root,r["color".concat((0,b.A)(i))],o,"vertical"===s&&r.vertical),ref:t},d))}));const A=(0,m.A)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(g);var y=r(77604),w=r(71071),x=r(17688),C=l.createElement(y.A,{fontSize:"small"}),k=l.createElement(w.A,{fontSize:"small"}),E=l.forwardRef((function(e,t){var r=e.classes,o=e.className,i=e.direction,s=e.orientation,d=e.disabled,u=(0,a.A)(e,["classes","className","direction","orientation","disabled"]);return l.createElement(x.A,(0,n.A)({component:"div",className:(0,c.A)(r.root,o,d&&r.disabled,"vertical"===s&&r.vertical),ref:t,role:null,tabIndex:null},u),"left"===i?C:k)}));const S=(0,m.A)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(E);var R=r(22319),z=r(26232),N=l.forwardRef((function(e,t){var r=e["aria-label"],o=e["aria-labelledby"],v=e.action,m=e.centered,b=void 0!==m&&m,g=e.children,y=e.classes,w=e.className,x=e.component,C=void 0===x?"div":x,k=e.indicatorColor,E=void 0===k?"secondary":k,N=e.onChange,B=e.orientation,M=void 0===B?"horizontal":B,L=e.ScrollButtonComponent,W=void 0===L?S:L,O=e.scrollButtons,F=void 0===O?"auto":O,T=e.selectionFollowsFocus,j=e.TabIndicatorProps,I=void 0===j?{}:j,$=e.TabScrollButtonProps,D=e.textColor,P=void 0===D?"inherit":D,H=e.value,V=e.variant,X=void 0===V?"standard":V,q=(0,a.A)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),K=(0,z.A)(),G="scrollable"===X,U="rtl"===K.direction,J="vertical"===M,Q=J?"scrollTop":"scrollLeft",Y=J?"top":"left",Z=J?"bottom":"right",_=J?"clientHeight":"clientWidth",ee=J?"height":"width";var te=l.useState(!1),re=te[0],oe=te[1],ne=l.useState({}),ae=ne[0],ie=ne[1],le=l.useState({start:!1,end:!1}),ce=le[0],se=le[1],de=l.useState({overflow:"hidden",marginBottom:null}),ue=de[0],fe=de[1],pe=new Map,ve=l.useRef(null),he=l.useRef(null),me=function(){var e,t,r=ve.current;if(r){var o=r.getBoundingClientRect();e={clientWidth:r.clientWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollLeftNormalized:f(r,K.direction),scrollWidth:r.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(r&&!1!==H){var n=he.current.children;if(n.length>0){var a=n[pe.get(H)];0,t=a?a.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},be=(0,R.A)((function(){var e,t=me(),r=t.tabsMeta,o=t.tabMeta,n=0;if(o&&r)if(J)n=o.top-r.top+r.scrollTop;else{var a=U?r.scrollLeftNormalized+r.clientWidth-r.scrollWidth:r.scrollLeft;n=o.left-r.left+a}var l=(e={},(0,i.A)(e,Y,n),(0,i.A)(e,ee,o?o[ee]:0),e);if(isNaN(ae[Y])||isNaN(ae[ee]))ie(l);else{var c=Math.abs(ae[Y]-l[Y]),s=Math.abs(ae[ee]-l[ee]);(c>=1||s>=1)&&ie(l)}})),ge=function(e){!function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},a=o.ease,i=void 0===a?p:a,l=o.duration,c=void 0===l?300:l,s=null,d=t[e],u=!1,f=function(){u=!0};d===r?n(new Error("Element already at target position")):requestAnimationFrame((function o(a){if(u)n(new Error("Animation cancelled"));else{null===s&&(s=a);var l=Math.min(1,(a-s)/c);t[e]=i(l)*(r-d)+d,l>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(o)}}))}(Q,ve.current,e)},Ae=function(e){var t=ve.current[Q];J?t+=e:(t+=e*(U?-1:1),t*=U&&"reverse"===u()?-1:1),ge(t)},ye=function(){Ae(-ve.current[_])},we=function(){Ae(ve.current[_])},xe=l.useCallback((function(e){fe({overflow:null,marginBottom:-e})}),[]),Ce=(0,R.A)((function(){var e=me(),t=e.tabsMeta,r=e.tabMeta;if(r&&t)if(r[Y]<t[Y]){var o=t[Q]+(r[Y]-t[Y]);ge(o)}else if(r[Z]>t[Z]){var n=t[Q]+(r[Z]-t[Z]);ge(n)}})),ke=(0,R.A)((function(){if(G&&"off"!==F){var e,t,r=ve.current,o=r.scrollTop,n=r.scrollHeight,a=r.clientHeight,i=r.scrollWidth,l=r.clientWidth;if(J)e=o>1,t=o<n-a-1;else{var c=f(ve.current,K.direction);e=U?c<i-l-1:c>1,t=U?c>1:c<i-l-1}e===ce.start&&t===ce.end||se({start:e,end:t})}}));l.useEffect((function(){var e=(0,s.A)((function(){be(),ke()})),t=(0,d.A)(ve.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[be,ke]);var Ee=l.useCallback((0,s.A)((function(){ke()})));l.useEffect((function(){return function(){Ee.clear()}}),[Ee]),l.useEffect((function(){oe(!0)}),[]),l.useEffect((function(){be(),ke()})),l.useEffect((function(){Ce()}),[Ce,ae]),l.useImperativeHandle(v,(function(){return{updateIndicator:be,updateScrollButtons:ke}}),[be,ke]);var Se=l.createElement(A,(0,n.A)({className:y.indicator,orientation:M,color:E},I,{style:(0,n.A)({},ae,I.style)})),Re=0,ze=l.Children.map(g,(function(e){if(!l.isValidElement(e))return null;var t=void 0===e.props.value?Re:e.props.value;pe.set(t,Re);var r=t===H;return Re+=1,l.cloneElement(e,{fullWidth:"fullWidth"===X,indicator:r&&!re&&Se,selected:r,selectionFollowsFocus:T,onChange:N,textColor:P,value:t})})),Ne=function(){var e={};e.scrollbarSizeListener=G?l.createElement(h,{className:y.scrollable,onChange:xe}):null;var t=ce.start||ce.end,r=G&&("auto"===F&&t||"desktop"===F||"on"===F);return e.scrollButtonStart=r?l.createElement(W,(0,n.A)({orientation:M,direction:U?"right":"left",onClick:ye,disabled:!ce.start,className:(0,c.A)(y.scrollButtons,"on"!==F&&y.scrollButtonsDesktop)},$)):null,e.scrollButtonEnd=r?l.createElement(W,(0,n.A)({orientation:M,direction:U?"left":"right",onClick:we,disabled:!ce.end,className:(0,c.A)(y.scrollButtons,"on"!==F&&y.scrollButtonsDesktop)},$)):null,e}();return l.createElement(C,(0,n.A)({className:(0,c.A)(y.root,w,J&&y.vertical),ref:t},q),Ne.scrollButtonStart,Ne.scrollbarSizeListener,l.createElement("div",{className:(0,c.A)(y.scroller,G?y.scrollable:y.fixed),style:ue,ref:ve,onScroll:Ee},l.createElement("div",{"aria-label":r,"aria-labelledby":o,className:(0,c.A)(y.flexContainer,J&&y.flexContainerVertical,b&&!G&&y.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var r=null,o="vertical"!==M?"ArrowLeft":"ArrowUp",n="vertical"!==M?"ArrowRight":"ArrowDown";switch("vertical"!==M&&"rtl"===K.direction&&(o="ArrowRight",n="ArrowLeft"),e.key){case o:r=t.previousElementSibling||he.current.lastChild;break;case n:r=t.nextElementSibling||he.current.firstChild;break;case"Home":r=he.current.firstChild;break;case"End":r=he.current.lastChild}null!==r&&(r.focus(),e.preventDefault())}},ref:he,role:"tablist"},ze),re&&Se),Ne.scrollButtonEnd)}));const B=(0,m.A)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:(0,i.A)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(N)},77604:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(96540);const n=(0,r(95126).A)(o.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},71071:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(96540);const n=(0,r(95126).A)(o.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},29287:(e,t,r)=>{var o=r(24994);t.A=void 0;var n=o(r(96540)),a=(0,o(r(76447)).default)(n.default.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"}),"Cloud");t.A=a},82788:(e,t,r)=>{var o=r(24994);t.A=void 0;var n=o(r(96540)),a=(0,o(r(76447)).default)(n.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.A=a},16923:(e,t,r)=>{var o=r(24994);t.A=void 0;var n=o(r(96540)),a=(0,o(r(76447)).default)(n.default.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.A=a},22488:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(58168),n=r(80045),a=r(96540),i=r(20053),l=r(35192),c=a.forwardRef((function(e,t){var r=e.animation,l=void 0===r?"pulse":r,c=e.classes,s=e.className,d=e.component,u=void 0===d?"span":d,f=e.height,p=e.variant,v=void 0===p?"text":p,h=e.width,m=(0,n.A)(e,["animation","classes","className","component","height","variant","width"]);return a.createElement(u,(0,o.A)({ref:t,className:(0,i.A)(c.root,c[v],s,!1!==l&&c[l])},m,{style:(0,o.A)({width:h,height:f},m.style)}))}));const s=(0,l.A)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(c)},23078:(e,t,r)=>{r.d(t,{A:()=>f});var o=r(80045),n=r(58168),a=r(96540),i=r(20053),l=r(19773),c=r(35192),s=r(17688),d=r(67515),u=a.forwardRef((function(e,t){var r=e.children,l=e.classes,c=e.className,u=e.disabled,f=void 0!==u&&u,p=e.disableFocusRipple,v=void 0!==p&&p,h=e.onChange,m=e.onClick,b=e.selected,g=e.size,A=void 0===g?"medium":g,y=e.value,w=(0,o.A)(e,["children","classes","className","disabled","disableFocusRipple","onChange","onClick","selected","size","value"]);return a.createElement(s.A,(0,n.A)({className:(0,i.A)(l.root,c,f&&l.disabled,b&&l.selected,"medium"!==A&&l["size".concat((0,d.A)(A))]),disabled:f,focusRipple:!v,ref:t,onClick:function(e){m&&(m(e,y),e.isDefaultPrevented())||h&&h(e,y)},onChange:h,value:y,"aria-pressed":b},w),a.createElement("span",{className:l.label},r))}));const f=(0,c.A)((function(e){return{root:(0,n.A)((0,n.A)({},e.typography.button),{},{boxSizing:"border-box",borderRadius:e.shape.borderRadius,height:48,padding:"0px 12px",border:"1px solid ".concat((0,l.Rv)(e.palette.action.active,.12)),color:(0,l.Rv)(e.palette.action.active,.38),"&$selected":{color:e.palette.action.active,backgroundColor:(0,l.Rv)(e.palette.action.active,.12),"&:hover":{backgroundColor:(0,l.Rv)(e.palette.action.active,.15)},"& + &":{borderLeft:0,marginLeft:0}},"&$disabled":{color:(0,l.Rv)(e.palette.action.disabled,.12)},"&:hover":{textDecoration:"none",backgroundColor:(0,l.Rv)(e.palette.text.primary,.05),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}}}),disabled:{},selected:{},label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},sizeSmall:{height:40,padding:"0px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{height:56,padding:"0px 16px",fontSize:e.typography.pxToRem(15)}}}),{name:"MuiToggleButton"})(u)},29252:e=>{e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var o,n,a;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(n=o;0!==n--;)if(!e(t[n],r[n]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;for(n of t.entries())if(!e(n[1],r.get(n[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((o=t.length)!=r.length)return!1;for(n=o;0!==n--;)if(t[n]!==r[n])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(n=o;0!==n--;)if(!Object.prototype.hasOwnProperty.call(r,a[n]))return!1;for(n=o;0!==n--;){var i=a[n];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}},19861:(e,t,r)=>{function o(e){return Object.prototype.toString.call(e).slice(8,-1)}function n(e){return"Object"===o(e)&&(e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype)}function a(e){return"Array"===o(e)}function i(e){return"Number"===o(e)&&!isNaN(e)}r.d(t,{Bq:()=>f});function l(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i}function c(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}function s(e,t,r,o){return n(e)&&Object.keys(e).length&&"FieldValue.serverTimestamp"!==e.methodName?(i(o)&&o--,Object.keys(e).reduce((function(n,a){var i,l=(t?t+".":"")+a,c=-1===o?((i={})[l]=e[a],i):s(e[a],l,r,o);return Object.assign(n,c)}),{})):t?(r[t]=e,r):e}function d(e,t){return s(e,null,{},t)}function u(e){return e.reduce((function(e,t){return a(t)?c(e,u(t)):c(e,[t])}),[])}function f(e,t){return a(e)?u(e):d(e,t)}}}]);