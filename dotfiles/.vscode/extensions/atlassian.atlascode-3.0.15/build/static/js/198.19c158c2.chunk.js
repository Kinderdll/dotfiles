"use strict";(self.webpackChunkatlascode=self.webpackChunkatlascode||[]).push([[198],{61434:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(58168),r=n(80045),i=n(96540),a=n(20053),c=n(35192),s=n(67515),l=n(3148),u=i.forwardRef((function(e,t){var n=e.classes,c=e.className,u=e.color,d=void 0===u?"primary":u,p=e.position,m=void 0===p?"fixed":p,f=(0,r.A)(e,["classes","className","color","position"]);return i.createElement(l.A,(0,o.A)({square:!0,component:"header",elevation:4,className:(0,a.A)(n.root,n["position".concat((0,s.A)(m))],n["color".concat((0,s.A)(d))],c,"fixed"===m&&"mui-fixed"),ref:t},f))}));const d=(0,c.A)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(u)},69440:(e,t,n)=>{n.d(t,{A:()=>g});var o=n(58168),r=n(5544),i=n(80045),a=n(96540),c=n(20053),s=n(37353),l=n(35192),u=n(63870),d=n(33173),p=n(26232),m=n(74801),f=a.forwardRef((function(e,t){var n=e.children,l=e.classes,f=e.className,g=e.collapsedHeight,v=e.collapsedSize,h=void 0===v?"0px":v,A=e.component,E=void 0===A?"div":A,x=e.disableStrictModeCompat,y=void 0!==x&&x,b=e.in,C=e.onEnter,w=e.onEntered,k=e.onEntering,L=e.onExit,M=e.onExited,R=e.onExiting,N=e.style,T=e.timeout,S=void 0===T?u.p0.standard:T,z=e.TransitionComponent,H=void 0===z?s.Ay:z,W=(0,i.A)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),I=(0,p.A)(),D=a.useRef(),O=a.useRef(null),P=a.useRef(),$="number"===typeof(g||h)?"".concat(g||h,"px"):g||h;a.useEffect((function(){return function(){clearTimeout(D.current)}}),[]);var B=I.unstable_strictMode&&!y,G=a.useRef(null),j=(0,m.A)(t,B?G:void 0),q=function(e){return function(t,n){if(e){var o=B?[G.current,t]:[t,n],i=(0,r.A)(o,2),a=i[0],c=i[1];void 0===c?e(a):e(a,c)}}},V=q((function(e,t){e.style.height=$,C&&C(e,t)})),F=q((function(e,t){var n=O.current?O.current.clientHeight:0,o=(0,d.c)({style:N,timeout:S},{mode:"enter"}).duration;if("auto"===S){var r=I.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(r,"ms"),P.current=r}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style.height="".concat(n,"px"),k&&k(e,t)})),X=q((function(e,t){e.style.height="auto",w&&w(e,t)})),Z=q((function(e){var t=O.current?O.current.clientHeight:0;e.style.height="".concat(t,"px"),L&&L(e)})),Y=q(M),_=q((function(e){var t=O.current?O.current.clientHeight:0,n=(0,d.c)({style:N,timeout:S},{mode:"exit"}).duration;if("auto"===S){var o=I.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),P.current=o}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=$,R&&R(e)}));return a.createElement(H,(0,o.A)({in:b,onEnter:V,onEntered:X,onEntering:F,onExit:Z,onExited:Y,onExiting:_,addEndListener:function(e,t){var n=B?e:t;"auto"===S&&(D.current=setTimeout(n,P.current||0))},nodeRef:B?G:void 0,timeout:"auto"===S?null:S},W),(function(e,t){return a.createElement(E,(0,o.A)({className:(0,c.A)(l.root,l.container,f,{entered:l.entered,exited:!b&&"0px"===$&&l.hidden}[e]),style:(0,o.A)({minHeight:$},N),ref:j},t),a.createElement("div",{className:l.wrapper,ref:O},a.createElement("div",{className:l.wrapperInner},n)))}))}));f.muiSupportAuto=!0;const g=(0,l.A)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(f)},82290:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(80045),r=n(64467),i=n(58168),a=n(96540),c=n(20053),s=n(35192),l=n(63870),u=n(40961),d=n(61475),p=n(74801),m=n(22319);function f(e){return e.substring(2).toLowerCase()}const g=function(e){var t=e.children,n=e.disableReactTree,o=void 0!==n&&n,r=e.mouseEvent,i=void 0===r?"onClick":r,c=e.onClickAway,s=e.touchEvent,l=void 0===s?"onTouchEnd":s,g=a.useRef(!1),v=a.useRef(null),h=a.useRef(!1),A=a.useRef(!1);a.useEffect((function(){return setTimeout((function(){h.current=!0}),0),function(){h.current=!1}}),[]);var E=a.useCallback((function(e){v.current=u.findDOMNode(e)}),[]),x=(0,p.A)(t.ref,E),y=(0,m.A)((function(e){var t=A.current;if(A.current=!1,h.current&&v.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(g.current)g.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(v.current)>-1;else n=!(0,d.A)(v.current).documentElement.contains(e.target)||v.current.contains(e.target);n||!o&&t||c(e)}})),b=function(e){return function(n){A.current=!0;var o=t.props[e];o&&o(n)}},C={ref:x};return!1!==l&&(C[l]=b(l)),a.useEffect((function(){if(!1!==l){var e=f(l),t=(0,d.A)(v.current),n=function(){g.current=!0};return t.addEventListener(e,y),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,y),t.removeEventListener("touchmove",n)}}}),[y,l]),!1!==i&&(C[i]=b(i)),a.useEffect((function(){if(!1!==i){var e=f(i),t=(0,d.A)(v.current);return t.addEventListener(e,y),function(){t.removeEventListener(e,y)}}}),[y,i]),a.createElement(a.Fragment,null,a.cloneElement(t,C))};var v=n(67515),h=n(8521),A=n(78896),E=n(3148),x=n(19773),y=a.forwardRef((function(e,t){var n=e.action,r=e.classes,s=e.className,l=e.message,u=e.role,d=void 0===u?"alert":u,p=(0,o.A)(e,["action","classes","className","message","role"]);return a.createElement(E.A,(0,i.A)({role:d,square:!0,elevation:6,className:(0,c.A)(r.root,s),ref:t},p),a.createElement("div",{className:r.message},l),n?a.createElement("div",{className:r.action},n):null)}));const b=(0,s.A)((function(e){var t="light"===e.palette.type?.8:.98,n=(0,x.tL)(e.palette.background.default,t);return{root:(0,i.A)({},e.typography.body2,(0,r.A)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(y);var C=a.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,s=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,u=r.horizontal,d=e.autoHideDuration,p=void 0===d?null:d,f=e.children,E=e.classes,x=e.className,y=e.ClickAwayListenerProps,C=e.ContentProps,w=e.disableWindowBlurListener,k=void 0!==w&&w,L=e.message,M=e.onClose,R=e.onEnter,N=e.onEntered,T=e.onEntering,S=e.onExit,z=e.onExited,H=e.onExiting,W=e.onMouseEnter,I=e.onMouseLeave,D=e.open,O=e.resumeHideDuration,P=e.TransitionComponent,$=void 0===P?A.A:P,B=e.transitionDuration,G=void 0===B?{enter:l.p0.enteringScreen,exit:l.p0.leavingScreen}:B,j=e.TransitionProps,q=(0,o.A)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),V=a.useRef(),F=a.useState(!0),X=F[0],Z=F[1],Y=(0,m.A)((function(){M&&M.apply(void 0,arguments)})),_=(0,m.A)((function(e){M&&null!=e&&(clearTimeout(V.current),V.current=setTimeout((function(){Y(null,"timeout")}),e))}));a.useEffect((function(){return D&&_(p),function(){clearTimeout(V.current)}}),[D,p,_]);var J=function(){clearTimeout(V.current)},K=a.useCallback((function(){null!=p&&_(null!=O?O:.5*p)}),[p,O,_]);return a.useEffect((function(){if(!k&&D)return window.addEventListener("focus",K),window.addEventListener("blur",J),function(){window.removeEventListener("focus",K),window.removeEventListener("blur",J)}}),[k,K,D]),!D&&X?null:a.createElement(g,(0,i.A)({onClickAway:function(e){M&&M(e,"clickaway")}},y),a.createElement("div",(0,i.A)({className:(0,c.A)(E.root,E["anchorOrigin".concat((0,v.A)(s)).concat((0,v.A)(u))],x),onMouseEnter:function(e){W&&W(e),J()},onMouseLeave:function(e){I&&I(e),K()},ref:t},q),a.createElement($,(0,i.A)({appear:!0,in:D,onEnter:(0,h.A)((function(){Z(!1)}),R),onEntered:N,onEntering:T,onExit:S,onExited:(0,h.A)((function(){Z(!0)}),z),onExiting:H,timeout:G,direction:"top"===s?"down":"up"},j),f||a.createElement(b,(0,i.A)({message:L,action:n},C)))))}));const w=(0,s.A)((function(e){var t={top:8},n={bottom:8},o={justifyContent:"flex-end"},a={justifyContent:"flex-start"},c={top:24},s={bottom:24},l={right:24},u={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:(0,i.A)({},t,(0,r.A)({},e.breakpoints.up("sm"),(0,i.A)({},c,d))),anchorOriginBottomCenter:(0,i.A)({},n,(0,r.A)({},e.breakpoints.up("sm"),(0,i.A)({},s,d))),anchorOriginTopRight:(0,i.A)({},t,o,(0,r.A)({},e.breakpoints.up("sm"),(0,i.A)({left:"auto"},c,l))),anchorOriginBottomRight:(0,i.A)({},n,o,(0,r.A)({},e.breakpoints.up("sm"),(0,i.A)({left:"auto"},s,l))),anchorOriginTopLeft:(0,i.A)({},t,a,(0,r.A)({},e.breakpoints.up("sm"),(0,i.A)({right:"auto"},c,u))),anchorOriginBottomLeft:(0,i.A)({},n,a,(0,r.A)({},e.breakpoints.up("sm"),(0,i.A)({right:"auto"},s,u)))}}),{flip:!1,name:"MuiSnackbar"})(C)},35376:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(58168),r=n(80045),i=n(64467),a=n(96540),c=n(20053),s=n(35192),l=a.forwardRef((function(e,t){var n=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,u=e.disableGutters,d=void 0!==u&&u,p=e.variant,m=void 0===p?"regular":p,f=(0,r.A)(e,["classes","className","component","disableGutters","variant"]);return a.createElement(l,(0,o.A)({className:(0,c.A)(n.root,n[m],i,!d&&n.gutters),ref:t},f))}));const u=(0,s.A)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,i.A)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},73546:(e,t,n)=>{var o=n(24994);t.A=void 0;var r=o(n(96540)),i=(0,o(n(76447)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.A=i},13118:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(80045),r=n(58168),i=n(96540),a=n(20053),c=n(19773),s=n(35192),l=n(3148),u=n(95126);const d=(0,u.A)(i.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),p=(0,u.A)(i.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),m=(0,u.A)(i.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),f=(0,u.A)(i.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var g=n(81863),v=n(42460),h=n(67515),A={success:i.createElement(d,{fontSize:"inherit"}),warning:i.createElement(p,{fontSize:"inherit"}),error:i.createElement(m,{fontSize:"inherit"}),info:i.createElement(f,{fontSize:"inherit"})},E=i.createElement(g.A,{fontSize:"small"}),x=i.forwardRef((function(e,t){var n=e.action,c=e.children,s=e.classes,u=e.className,d=e.closeText,p=void 0===d?"Close":d,m=e.color,f=e.icon,g=e.iconMapping,x=void 0===g?A:g,y=e.onClose,b=e.role,C=void 0===b?"alert":b,w=e.severity,k=void 0===w?"success":w,L=e.variant,M=void 0===L?"standard":L,R=(0,o.A)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return i.createElement(l.A,(0,r.A)({role:C,square:!0,elevation:0,className:(0,a.A)(s.root,s["".concat(M).concat((0,h.A)(m||k))],u),ref:t},R),!1!==f?i.createElement("div",{className:s.icon},f||x[k]||A[k]):null,i.createElement("div",{className:s.message},c),null!=n?i.createElement("div",{className:s.action},n):null,null==n&&y?i.createElement("div",{className:s.action},i.createElement(v.A,{size:"small","aria-label":p,title:p,color:"inherit",onClick:y},E)):null)}));const y=(0,s.A)((function(e){var t="light"===e.palette.type?c.e$:c.a,n="light"===e.palette.type?c.a:c.e$;return{root:(0,r.A)((0,r.A)({},e.typography.body2),{},{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:n(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:n(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:n(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:n(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(x)},44866:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(58168),r=n(80045),i=n(96540),a=n(35192),c=n(54392),s=n(20053),l=i.forwardRef((function(e,t){var n=e.classes,a=e.className,l=(0,r.A)(e,["classes","className"]);return i.createElement(c.A,(0,o.A)({gutterBottom:!0,component:"div",ref:t,className:(0,s.A)(n.root,a)},l))}));const u=(0,a.A)((function(e){return{root:{fontWeight:e.typography.fontWeightMedium,marginTop:-2}}}),{name:"MuiAlertTitle"})(l)}}]);