"use strict";(self.webpackChunkatlascode=self.webpackChunkatlascode||[]).push([[227],{91004:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(58168),a=n(80045),i=n(96540),o=n(20053),s=n(35192);const c=(0,n(95126).A)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var l=i.forwardRef((function(e,t){var n=e.alt,s=e.children,l=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,f=e.imgProps,p=e.sizes,h=e.src,g=e.srcSet,v=e.variant,x=void 0===v?"circular":v,A=(0,a.A)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),b=null,y=function(e){var t=e.src,n=e.srcSet,r=i.useState(!1),a=r[0],o=r[1];return i.useEffect((function(){if(t||n){o(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&o("loaded")},r.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,n]),a}({src:h,srcSet:g}),N=h||g,E=N&&"error"!==y;return b=E?i.createElement("img",(0,r.A)({alt:n,src:h,srcSet:g,sizes:p,className:l.img},f)):null!=s?s:N&&n?n[0]:i.createElement(c,{className:l.fallback}),i.createElement(m,(0,r.A)({className:(0,o.A)(l.root,l.system,l[x],d,!E&&l.colorDefault),ref:t},A),b)}));const d=(0,s.A)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(l)},83182:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(58168),a=n(80045),i=n(96540),o=n(20053),s=n(35192),c=n(67515),l=44,d=i.forwardRef((function(e,t){var n=e.classes,s=e.className,d=e.color,u=void 0===d?"primary":d,m=e.disableShrink,f=void 0!==m&&m,p=e.size,h=void 0===p?40:p,g=e.style,v=e.thickness,x=void 0===v?3.6:v,A=e.value,b=void 0===A?0:A,y=e.variant,N=void 0===y?"indeterminate":y,E=(0,a.A)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),D={},k={},C={};if("determinate"===N||"static"===N){var w=2*Math.PI*((l-x)/2);D.strokeDasharray=w.toFixed(3),C["aria-valuenow"]=Math.round(b),D.strokeDashoffset="".concat(((100-b)/100*w).toFixed(3),"px"),k.transform="rotate(-90deg)"}return i.createElement("div",(0,r.A)({className:(0,o.A)(n.root,s,"inherit"!==u&&n["color".concat((0,c.A)(u))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[N]),style:(0,r.A)({width:h,height:h},k,g),ref:t,role:"progressbar"},C,E),i.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},i.createElement("circle",{className:(0,o.A)(n.circle,f&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[N]),style:D,cx:l,cy:l,r:(l-x)/2,fill:"none",strokeWidth:x})))}));const u=(0,s.A)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},69440:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(58168),a=n(5544),i=n(80045),o=n(96540),s=n(20053),c=n(37353),l=n(35192),d=n(63870),u=n(33173),m=n(26232),f=n(74801),p=o.forwardRef((function(e,t){var n=e.children,l=e.classes,p=e.className,h=e.collapsedHeight,g=e.collapsedSize,v=void 0===g?"0px":g,x=e.component,A=void 0===x?"div":x,b=e.disableStrictModeCompat,y=void 0!==b&&b,N=e.in,E=e.onEnter,D=e.onEntered,k=e.onEntering,C=e.onExit,w=e.onExited,R=e.onExiting,T=e.style,S=e.timeout,M=void 0===S?d.p0.standard:S,z=e.TransitionComponent,I=void 0===z?c.Ay:z,H=(0,i.A)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),$=(0,m.A)(),P=o.useRef(),F=o.useRef(null),B=o.useRef(),U="number"===typeof(h||v)?"".concat(h||v,"px"):h||v;o.useEffect((function(){return function(){clearTimeout(P.current)}}),[]);var L=$.unstable_strictMode&&!y,V=o.useRef(null),Z=(0,f.A)(t,L?V:void 0),q=function(e){return function(t,n){if(e){var r=L?[V.current,t]:[t,n],i=(0,a.A)(r,2),o=i[0],s=i[1];void 0===s?e(o):e(o,s)}}},Y=q((function(e,t){e.style.height=U,E&&E(e,t)})),G=q((function(e,t){var n=F.current?F.current.clientHeight:0,r=(0,u.c)({style:T,timeout:M},{mode:"enter"}).duration;if("auto"===M){var a=$.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),B.current=a}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style.height="".concat(n,"px"),k&&k(e,t)})),j=q((function(e,t){e.style.height="auto",D&&D(e,t)})),O=q((function(e){var t=F.current?F.current.clientHeight:0;e.style.height="".concat(t,"px"),C&&C(e)})),W=q(w),_=q((function(e){var t=F.current?F.current.clientHeight:0,n=(0,u.c)({style:T,timeout:M},{mode:"exit"}).duration;if("auto"===M){var r=$.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(r,"ms"),B.current=r}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=U,R&&R(e)}));return o.createElement(I,(0,r.A)({in:N,onEnter:Y,onEntered:j,onEntering:G,onExit:O,onExited:W,onExiting:_,addEndListener:function(e,t){var n=L?e:t;"auto"===M&&(P.current=setTimeout(n,B.current||0))},nodeRef:L?V:void 0,timeout:"auto"===M?null:M},H),(function(e,t){return o.createElement(A,(0,r.A)({className:(0,s.A)(l.root,l.container,p,{entered:l.entered,exited:!N&&"0px"===U&&l.hidden}[e]),style:(0,r.A)({minHeight:U},T),ref:Z},t),o.createElement("div",{className:l.wrapper,ref:F},o.createElement("div",{className:l.wrapperInner},n)))}))}));p.muiSupportAuto=!0;const h=(0,l.A)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(p)},82782:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(58168),a=n(96369),i=n(73893),o=n(27800),s=n(76562);var c=n(5544),l=n(80045),d=n(96540),u=(n(44363),n(20053)),m=n(69440),f=n(3148),p=n(35192),h=n(61373),g=n(28060),v=d.forwardRef((function(e,t){var n,p=e.children,v=e.classes,x=e.className,A=e.defaultExpanded,b=void 0!==A&&A,y=e.disabled,N=void 0!==y&&y,E=e.expanded,D=e.onChange,k=e.square,C=void 0!==k&&k,w=e.TransitionComponent,R=void 0===w?m.A:w,T=e.TransitionProps,S=(0,l.A)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),M=(0,g.A)({controlled:E,default:b,name:"ExpansionPanel",state:"expanded"}),z=(0,c.A)(M,2),I=z[0],H=z[1],$=d.useCallback((function(e){H(!I),D&&D(e,!I)}),[I,D,H]),P=d.Children.toArray(p),F=(n=P,(0,a.A)(n)||(0,i.A)(n)||(0,o.A)(n)||(0,s.A)()),B=F[0],U=F.slice(1),L=d.useMemo((function(){return{expanded:I,disabled:N,toggle:$}}),[I,N,$]);return d.createElement(f.A,(0,r.A)({className:(0,u.A)(v.root,x,I&&v.expanded,N&&v.disabled,!C&&v.rounded),ref:t,square:C},S),d.createElement(h.A.Provider,{value:L},B),d.createElement(R,(0,r.A)({in:I,timeout:"auto"},T),d.createElement("div",{"aria-labelledby":B.props.id,id:B.props["aria-controls"],role:"region"},U)))}));const x=(0,p.A)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(v)},61373:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(96540).createContext({})},91024:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(58168),a=n(80045),i=n(96540),o=n(20053),s=n(35192),c=i.forwardRef((function(e,t){var n=e.classes,s=e.className,c=(0,a.A)(e,["classes","className"]);return i.createElement("div",(0,r.A)({className:(0,o.A)(n.root,s),ref:t},c))}));const l=(0,s.A)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiExpansionPanelDetails"})(c)},14944:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(58168),a=n(80045),i=n(96540),o=n(20053),s=n(17688),c=n(42460),l=n(35192),d=n(61373),u=i.forwardRef((function(e,t){var n=e.children,l=e.classes,u=e.className,m=e.expandIcon,f=e.IconButtonProps,p=e.onBlur,h=e.onClick,g=e.onFocusVisible,v=(0,a.A)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),x=i.useState(!1),A=x[0],b=x[1],y=i.useContext(d.A),N=y.disabled,E=void 0!==N&&N,D=y.expanded,k=y.toggle;return i.createElement(s.A,(0,r.A)({focusRipple:!1,disableRipple:!0,disabled:E,component:"div","aria-expanded":D,className:(0,o.A)(l.root,u,E&&l.disabled,D&&l.expanded,A&&l.focused),onFocusVisible:function(e){b(!0),g&&g(e)},onBlur:function(e){b(!1),p&&p(e)},onClick:function(e){k&&k(e),h&&h(e)},ref:t},v),i.createElement("div",{className:(0,o.A)(l.content,D&&l.expanded)},n),m&&i.createElement(c.A,(0,r.A)({className:(0,o.A)(l.expandIcon,D&&l.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},f),m))}));const m=(0,l.A)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(u)},35376:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(58168),a=n(80045),i=n(64467),o=n(96540),s=n(20053),c=n(35192),l=o.forwardRef((function(e,t){var n=e.classes,i=e.className,c=e.component,l=void 0===c?"div":c,d=e.disableGutters,u=void 0!==d&&d,m=e.variant,f=void 0===m?"regular":m,p=(0,a.A)(e,["classes","className","component","disableGutters","variant"]);return o.createElement(l,(0,r.A)({className:(0,s.A)(n.root,n[f],i,!u&&n.gutters),ref:t},p))}));const d=(0,c.A)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,i.A)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},9159:(e,t,n)=>{var r=n(24994);t.A=void 0;var a=r(n(96540)),i=(0,r(n(76447)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),a.default.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"AccessTime");t.A=i},31205:(e,t,n)=>{var r=n(24994);t.A=void 0;var a=r(n(96540)),i=(0,r(n(76447)).default)(a.default.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),"CalendarToday");t.A=i},42561:(e,t,n)=>{var r=n(24994);t.A=void 0;var a=r(n(96540)),i=(0,r(n(76447)).default)(a.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.A=i},84929:(e,t,n)=>{n.d(t,{H:()=>a});var r=n(2940);function a(e,t){const n=t?.additionalDigits??2,a=function(e){const t={},n=e.split(i.dateTimeDelimiter);let r;if(n.length>2)return t;/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],i.timeZoneDelimiter.test(t.date)&&(t.date=e.split(i.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length)));if(r){const e=i.timezone.exec(r);e?(t.time=r.replace(e[1],""),t.timezone=e[1]):t.time=r}return t}(e);let f;if(a.date){const e=function(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(a.date,n);f=function(e,t){if(null===t)return new Date(NaN);const n=e.match(o);if(!n)return new Date(NaN);const r=!!n[4],a=l(n[1]),i=l(n[2])-1,s=l(n[3]),c=l(n[4]),d=l(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,c,d)?function(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,c,d):new Date(NaN);{const e=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(u[t]||(m(e)?29:28))}(t,i,s)&&function(e,t){return t>=1&&t<=(m(e)?366:365)}(t,a)?(e.setUTCFullYear(t,i,Math.max(a,s)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!f||isNaN(f.getTime()))return new Date(NaN);const p=f.getTime();let h,g=0;if(a.time&&(g=function(e){const t=e.match(s);if(!t)return NaN;const n=d(t[1]),a=d(t[2]),i=d(t[3]);if(!function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,i))return NaN;return n*r.s0+a*r.Cg+1e3*i}(a.time),isNaN(g)))return new Date(NaN);if(!a.timezone){const e=new Date(p+g),t=new Date(0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return h=function(e){if("Z"===e)return 0;const t=e.match(c);if(!t)return 0;const n="+"===t[1]?-1:1,a=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;if(!function(e,t){return t>=0&&t<=59}(0,i))return NaN;return n*(a*r.s0+i*r.Cg)}(a.timezone),isNaN(h)?new Date(NaN):new Date(p+g+h)}const i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},o=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,s=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function l(e){return e?parseInt(e):1}function d(e){return e&&parseFloat(e.replace(",","."))||0}const u=[31,null,31,30,31,30,31,31,30,31,30,31];function m(e){return e%400===0||e%4===0&&e%100!==0}}}]);