"use strict";(self.webpackChunkatlascode=self.webpackChunkatlascode||[]).push([[890],{36936:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(58168),n=a(80045),o=a(96540),i=a(20053),s=a(35192),l=a(67515),c=o.forwardRef((function(e,t){var a=e.anchorOrigin,s=void 0===a?{vertical:"top",horizontal:"right"}:a,c=e.badgeContent,d=e.children,p=e.classes,m=e.className,g=e.color,f=void 0===g?"default":g,u=e.component,h=void 0===u?"span":u,v=e.invisible,b=e.max,A=void 0===b?99:b,x=e.overlap,y=void 0===x?"rectangle":x,C=e.showZero,R=void 0!==C&&C,k=e.variant,O=void 0===k?"standard":k,E=(0,n.A)(e,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),z=v;null==v&&(0===c&&!R||null==c&&"dot"!==O)&&(z=!0);var $="";return"dot"!==O&&($=c>A?"".concat(A,"+"):c),o.createElement(h,(0,r.A)({className:(0,i.A)(p.root,m),ref:t},E),d,o.createElement("span",{className:(0,i.A)(p.badge,p["".concat(s.horizontal).concat((0,l.A)(s.vertical),"}")],p["anchorOrigin".concat((0,l.A)(s.vertical)).concat((0,l.A)(s.horizontal)).concat((0,l.A)(y))],"default"!==f&&p["color".concat((0,l.A)(f))],z&&p.invisible,"dot"===O&&p.dot)},$))}));const d=(0,s.A)((function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginTopRightRectangular:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginBottomRightRectangular:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginTopLeftRectangular:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginBottomLeftRectangular:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginTopRightCircular:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginBottomRightCircular:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginTopLeftCircular:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginBottomLeftCircular:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(c)},19371:(e,t,a)=>{a.d(t,{A:()=>A});var r=a(58168),n=a(80045),o=a(96540),i=a(20053),s=a(21888),l=a(95126);const c=(0,l.A)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=(0,l.A)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");var p=a(19773);const m=(0,l.A)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var g=a(67515),f=a(35192),u=o.createElement(d,null),h=o.createElement(c,null),v=o.createElement(m,null),b=o.forwardRef((function(e,t){var a=e.checkedIcon,l=void 0===a?u:a,c=e.classes,d=e.color,p=void 0===d?"secondary":d,m=e.icon,f=void 0===m?h:m,b=e.indeterminate,A=void 0!==b&&b,x=e.indeterminateIcon,y=void 0===x?v:x,C=e.inputProps,R=e.size,k=void 0===R?"medium":R,O=(0,n.A)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),E=A?y:f,z=A?y:l;return o.createElement(s.A,(0,r.A)({type:"checkbox",classes:{root:(0,i.A)(c.root,c["color".concat((0,g.A)(p))],A&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:p,inputProps:(0,r.A)({"data-indeterminate":A},C),icon:o.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===k?k:E.props.fontSize}),checkedIcon:o.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"small"===k?k:z.props.fontSize}),ref:t},O))}));const A=(0,f.A)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.X4)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.X4)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(b)},82782:(e,t,a)=>{a.d(t,{A:()=>b});var r=a(58168),n=a(96369),o=a(73893),i=a(27800),s=a(76562);var l=a(5544),c=a(80045),d=a(96540),p=(a(44363),a(20053)),m=a(69440),g=a(3148),f=a(35192),u=a(61373),h=a(28060),v=d.forwardRef((function(e,t){var a,f=e.children,v=e.classes,b=e.className,A=e.defaultExpanded,x=void 0!==A&&A,y=e.disabled,C=void 0!==y&&y,R=e.expanded,k=e.onChange,O=e.square,E=void 0!==O&&O,z=e.TransitionComponent,$=void 0===z?m.A:z,N=e.TransitionProps,w=(0,c.A)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),T=(0,h.A)({controlled:R,default:x,name:"ExpansionPanel",state:"expanded"}),B=(0,l.A)(T,2),M=B[0],S=B[1],L=d.useCallback((function(e){S(!M),k&&k(e,!M)}),[M,k,S]),H=d.Children.toArray(f),I=(a=H,(0,n.A)(a)||(0,o.A)(a)||(0,i.A)(a)||(0,s.A)()),P=I[0],V=I.slice(1),W=d.useMemo((function(){return{expanded:M,disabled:C,toggle:L}}),[M,C,L]);return d.createElement(g.A,(0,r.A)({className:(0,p.A)(v.root,b,M&&v.expanded,C&&v.disabled,!E&&v.rounded),ref:t,square:E},w),d.createElement(u.A.Provider,{value:W},P),d.createElement($,(0,r.A)({in:M,timeout:"auto"},N),d.createElement("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region"},V)))}));const b=(0,f.A)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(v)},61373:(e,t,a)=>{a.d(t,{A:()=>r});const r=a(96540).createContext({})},91024:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(58168),n=a(80045),o=a(96540),i=a(20053),s=a(35192),l=o.forwardRef((function(e,t){var a=e.classes,s=e.className,l=(0,n.A)(e,["classes","className"]);return o.createElement("div",(0,r.A)({className:(0,i.A)(a.root,s),ref:t},l))}));const c=(0,s.A)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiExpansionPanelDetails"})(l)},14944:(e,t,a)=>{a.d(t,{A:()=>m});var r=a(58168),n=a(80045),o=a(96540),i=a(20053),s=a(17688),l=a(42460),c=a(35192),d=a(61373),p=o.forwardRef((function(e,t){var a=e.children,c=e.classes,p=e.className,m=e.expandIcon,g=e.IconButtonProps,f=e.onBlur,u=e.onClick,h=e.onFocusVisible,v=(0,n.A)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),b=o.useState(!1),A=b[0],x=b[1],y=o.useContext(d.A),C=y.disabled,R=void 0!==C&&C,k=y.expanded,O=y.toggle;return o.createElement(s.A,(0,r.A)({focusRipple:!1,disableRipple:!0,disabled:R,component:"div","aria-expanded":k,className:(0,i.A)(c.root,p,R&&c.disabled,k&&c.expanded,A&&c.focused),onFocusVisible:function(e){x(!0),h&&h(e)},onBlur:function(e){x(!1),f&&f(e)},onClick:function(e){O&&O(e),u&&u(e)},ref:t},v),o.createElement("div",{className:(0,i.A)(c.content,k&&c.expanded)},a),m&&o.createElement(l.A,(0,r.A)({className:(0,i.A)(c.expandIcon,k&&c.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},g),m))}));const m=(0,c.A)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(p)},79764:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(80045),n=a(58168),o=a(96540),i=a(20053),s=a(35192),l=a(6185),c="table",d=o.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.component,p=void 0===d?c:d,m=e.padding,g=void 0===m?"normal":m,f=e.size,u=void 0===f?"medium":f,h=e.stickyHeader,v=void 0!==h&&h,b=(0,r.A)(e,["classes","className","component","padding","size","stickyHeader"]),A=o.useMemo((function(){return{padding:g,size:u,stickyHeader:v}}),[g,u,v]);return o.createElement(l.A.Provider,{value:A},o.createElement(p,(0,n.A)({role:p===c?null:"table",ref:t,className:(0,i.A)(a.root,s,v&&a.stickyHeader)},b)))}));const p=(0,s.A)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,n.A)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},6185:(e,t,a)=>{a.d(t,{A:()=>r});const r=a(96540).createContext()},44317:(e,t,a)=>{a.d(t,{A:()=>r});const r=a(96540).createContext()},24896:(e,t,a)=>{a.d(t,{A:()=>m});var r=a(58168),n=a(80045),o=a(96540),i=a(20053),s=a(35192),l=a(44317),c={variant:"body"},d="tbody",p=o.forwardRef((function(e,t){var a=e.classes,s=e.className,p=e.component,m=void 0===p?d:p,g=(0,n.A)(e,["classes","className","component"]);return o.createElement(l.A.Provider,{value:c},o.createElement(m,(0,r.A)({className:(0,i.A)(a.root,s),ref:t,role:m===d?null:"rowgroup"},g)))}));const m=(0,s.A)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},90652:(e,t,a)=>{a.d(t,{A:()=>g});var r=a(80045),n=a(58168),o=a(96540),i=a(20053),s=a(35192),l=a(67515),c=a(19773),d=a(6185),p=a(44317),m=o.forwardRef((function(e,t){var a,s,c=e.align,m=void 0===c?"inherit":c,g=e.classes,f=e.className,u=e.component,h=e.padding,v=e.scope,b=e.size,A=e.sortDirection,x=e.variant,y=(0,r.A)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),C=o.useContext(d.A),R=o.useContext(p.A),k=R&&"head"===R.variant;u?(s=u,a=k?"columnheader":"cell"):s=k?"th":"td";var O=v;!O&&k&&(O="col");var E=h||(C&&C.padding?C.padding:"normal"),z=b||(C&&C.size?C.size:"medium"),$=x||R&&R.variant,N=null;return A&&(N="asc"===A?"ascending":"descending"),o.createElement(s,(0,n.A)({ref:t,className:(0,i.A)(g.root,g[$],f,"inherit"!==m&&g["align".concat((0,l.A)(m))],"normal"!==E&&g["padding".concat((0,l.A)(E))],"medium"!==z&&g["size".concat((0,l.A)(z))],"head"===$&&C&&C.stickyHeader&&g.stickyHeader),"aria-sort":N,role:a,scope:O},y))}));const g=(0,s.A)((function(e){return{root:(0,n.A)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,c.a)((0,c.X4)(e.palette.divider,1),.88):(0,c.e$)((0,c.X4)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},90648:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(58168),n=a(80045),o=a(96540),i=a(20053),s=a(35192),l=o.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.component,c=void 0===l?"div":l,d=(0,n.A)(e,["classes","className","component"]);return o.createElement(c,(0,r.A)({ref:t,className:(0,i.A)(a.root,s)},d))}));const c=(0,s.A)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(l)},65594:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(58168),n=a(80045),o=a(96540),i=a(20053),s=a(35192),l=a(44317),c=a(19773),d=o.forwardRef((function(e,t){var a=e.classes,s=e.className,c=e.component,d=void 0===c?"tr":c,p=e.hover,m=void 0!==p&&p,g=e.selected,f=void 0!==g&&g,u=(0,n.A)(e,["classes","className","component","hover","selected"]),h=o.useContext(l.A);return o.createElement(d,(0,r.A)({ref:t,className:(0,i.A)(a.root,s,h&&{head:a.head,footer:a.footer}[h.variant],m&&a.hover,f&&a.selected),role:"tr"===d?null:"row"},u))}));const p=(0,s.A)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,c.X4)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},7756:(e,t,a)=>{var r=a(24994);t.A=void 0;var n=r(a(96540)),o=(0,r(a(76447)).default)(n.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.A=o},16064:(e,t,a)=>{var r=a(24994);t.A=void 0;var n=r(a(96540)),o=(0,r(a(76447)).default)(n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");t.A=o},42561:(e,t,a)=>{var r=a(24994);t.A=void 0;var n=r(a(96540)),o=(0,r(a(76447)).default)(n.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.A=o}}]);