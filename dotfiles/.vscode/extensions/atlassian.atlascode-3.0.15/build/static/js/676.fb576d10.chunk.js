"use strict";(self.webpackChunkatlascode=self.webpackChunkatlascode||[]).push([[676],{5676:(e,t,r)=>{var n;r.d(t,{mN:()=>Ve,xI:()=>Fe});var s=r(96540),c=e=>void 0===e,u=e=>null===e||c(e),i=e=>Array.isArray(e);const a=e=>"object"===typeof e;var o=e=>!u(e)&&!i(e)&&a(e),l=e=>o(e)&&e.nodeType===Node.ELEMENT_NODE;const f={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit"},d="value",g="undefined",m={BLUR:"blur",CHANGE:"change",INPUT:"input"},h="max",v="min",b="maxLength",p="minLength",O="pattern",y="required",j="validate",w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/,S=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V=/\\(\\)?/g;var R=e=>!i(e)&&(E.test(e)||!w.test(e)),B=e=>{const t=[];return e.replace(S,((e,r,n,s)=>{t.push(n?s.replace(V,"$1"):r||e)})),t};function C(e,t,r){let n=-1;const s=R(t)?[t]:B(t),c=s.length,u=c-1;for(;++n<c;){const t=s[n];let c=r;if(n!==u){const r=e[t];c=o(r)||i(r)?r:isNaN(s[n+1])?{}:[]}e[t]=c,e=e[t]}return e}var k=e=>Object.entries(e).reduce(((e,[t,r])=>R(t)?Object.assign(Object.assign({},e),{[t]:r}):(C(e,t,r),e)),{}),N=(e,t,r)=>{const n=t.split(/[,[\].]+?/).filter(Boolean).reduce(((e,t)=>u(e)?e:e[t]),e);return c(n)||n===e?e[t]||r:n},L=(e,t)=>{for(const r in e)if(N(t,r)){const t=e[r];if(t){if(l(t.ref)&&t.ref.focus){t.ref.focus();break}if(t.options){t.options[0].ref.focus();break}}}},x=(e,t)=>{l(e)&&e.removeEventListener&&(e.removeEventListener(m.INPUT,t),e.removeEventListener(m.CHANGE,t),e.removeEventListener(m.BLUR,t))},F=e=>!!e&&"radio"===e.type,P=e=>!!e&&"checkbox"===e.type;function M(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&M(e.parentNode)}var $=e=>o(e)&&!Object.keys(e).length;function A(e){return i(e)?e:B(e)}function W(e,t){return 1==t.length?e:function(e,t){const r=R(t)?[t]:A(t),n=t.length;let s=0;for(;s<n;)e=c(e)?s++:e[r[s++]];return s==n?e:void 0}(e,function(e,t,r){let n=-1,s=e.length;t<0&&(t=-t>s?0:s+t),(r=r>s?s:r)<0&&(r+=s),s=t>r?0:r-t;const c=Array(s);for(;++n<s;)c[n]=e[n+t];return c}(t,0,-1))}function D(e,t){return t.forEach((t=>{!function(e,t){const r=R(t)?[t]:A(t),n=W(e,r),s=r[r.length-1],c=!(null!=n)||delete n[s];let u;for(let t=0;t<r.slice(0,-1).length;t++){let n,s=-1;const c=r.slice(0,-(t+1)),a=c.length-1;for(t>0&&(u=e);++s<c.length;){const t=c[s];n=n?n[t]:e[t],a===s&&(o(n)&&$(n)?u?delete u[t]:delete e[t]:i(n)&&!n.filter((e=>o(e)&&!$(e))).length&&delete u[t]),u=n}}}(e,t)})),e}const T={isValid:!1,value:""};var U=e=>i(e)?e.reduce(((e,{ref:{checked:t,value:r}})=>t?{isValid:!0,value:r}:e),T):T,I=e=>[...e].filter((({selected:e})=>e)).map((({value:e})=>e)),z=e=>!!e&&"file"===e.type,H=e=>!!e&&"select-multiple"===e.type,G=e=>""===e;const q={value:!1,isValid:!1},_={value:!0,isValid:!0};var J=e=>{if(i(e)){if(e.length>1){const t=e.filter((({ref:{checked:e}})=>e)).map((({ref:{value:e}})=>e));return{value:t,isValid:!!t.length}}const{checked:t,value:r,attributes:n}=e[0].ref;return t?n&&!c(n.value)?c(r)||G(r)?_:{value:r,isValid:!0}:_:q}return q};function K(e,t){const{name:r,value:n}=t,s=e[r];return z(t)?t.files:F(t)?s?U(s.options).value:"":H(t)?I(t.options):P(t)?!!s&&J(s.options).value:n}var Q=e=>"string"===typeof e,X=(e,t)=>{const r={},n=Q(t),s=i(t),u=t&&t.nest;for(const i in e)(c(t)||u||n&&i.startsWith(t)||s&&t.find((e=>i.startsWith(e))))&&(r[i]=K(e,e[i].ref));return r},Y=(e,{type:t,types:r,message:n})=>o(e)&&e.type===t&&e.message===n&&((e={},t={})=>Object.entries(e).reduce(((e,[r,n])=>!!e&&t[r]&&t[r]===n),!0))(e.types,r);var Z=e=>e instanceof RegExp,ee=e=>{const t=o(e)&&!Z(e);return{value:t?e.value:e,message:t?e.message:""}},te=e=>"function"===typeof e,re=e=>"boolean"===typeof e;function ne(e,t,r="validate"){const n=Q(e);if(n||re(e)&&!e){return{type:r,message:n?e:"",ref:t}}}var se=(e,t,r,n,s)=>{if(!t)return{};const c=r[e];return Object.assign(Object.assign({},c),{types:Object.assign(Object.assign({},c&&c.types?c.types:{}),{[n]:s||!0})})},ce=async(e,t,{ref:r,ref:{type:n,value:s,name:c},options:i,required:a,maxLength:l,minLength:f,min:d,max:g,pattern:m,validate:w})=>{const E=e.current,S={},V=F(r),R=P(r),B=V||R,C=G(s),k=se.bind(null,c,t,S),N=(e,n,s,u=b,i=p)=>{const a=e?n:s;if(S[c]=Object.assign({type:e?u:i,message:a,ref:r},k(e?u:i,a)),!t)return S};if(a&&(!V&&!R&&(C||u(s))||re(s)&&!s||R&&!J(i).isValid||V&&!U(i).isValid)){const{value:e,message:n}=Q(a)?{value:!!a,message:a}:ee(a);if(e&&(S[c]=Object.assign({type:y,message:n,ref:B?E[c].options[0].ref:r},k(y,n)),!t))return S}if(!u(d)||!u(g)){let e,c;const{value:i,message:a}=ee(g),{value:o,message:l}=ee(d);if("number"===n||!n&&!isNaN(s)){const t=r.valueAsNumber||parseFloat(s);u(i)||(e=t>i),u(o)||(c=t<o)}else{const t=r.valueAsDate||new Date(s);Q(i)&&(e=t>new Date(i)),Q(o)&&(c=t<new Date(o))}if((e||c)&&(N(!!e,a,l,h,v),!t))return S}if(Q(s)&&!C&&(l||f)){const{value:e,message:r}=ee(l),{value:n,message:c}=ee(f),u=s.toString().length,i=l&&u>e;if((i||f&&u<n)&&(N(!!i,r,c),!t))return S}if(m&&!C){const{value:e,message:n}=ee(m);if(Z(e)&&!e.test(s)&&(S[c]=Object.assign({type:O,message:n,ref:r},k(O,n)),!t))return S}if(w){const e=K(E,r),n=B&&i?i[0].ref:r;if(te(w)){const r=ne(await w(e),n);if(r&&(S[c]=Object.assign(Object.assign({},r),k(j,r.message)),!t))return S}else if(o(w)){const r=Object.entries(w),s=await new Promise((s=>{r.reduce((async(u,[i,a],o)=>{if(!$(await u)&&!t||!te(a))return s(u);let l;const f=ne(await a(e),n,i);return f?(l=Object.assign(Object.assign({},f),k(i,f.message)),t&&(S[c]=l)):l=u,r.length-1===o?s(l):l}),{})}));if(!$(s)&&(S[c]=Object.assign({ref:n},s),!t))return S}}return S};const ue=(e,t)=>i(e.inner)?e.inner.reduce(((e,{path:r,message:n,type:s})=>Object.assign(Object.assign({},e),e[r]&&t?{[r]:se(r,t,e,s,n)}:{[r]:e[r]||Object.assign({message:n,type:s},t?{types:{[s]:n||!0}}:{})})),{}):{[e.path]:{message:e.message,type:e.type}};async function ie(e,t,r,n,s){if(n)return n(r,s);try{return{values:await e.validate(r,{abortEarly:!1,context:s}),errors:{}}}catch(e){return{values:{},errors:k(ue(e,t))}}}var ae=(e,t,r)=>c(e[t])?N(e,t,r):e[t];function oe(e){return e.reduce(((e,t)=>e.concat(i(t)?oe(t):t)),[])}var le=e=>u(e)||!a(e);const fe=(e,t)=>{const r=(t,r,n)=>{const s=n?`${e}.${r}`:`${e}[${r}]`;return le(t)?s:fe(s,t)};return i(t)?t.map(((e,t)=>r(e,t))):Object.entries(t).map((([e,t])=>r(t,e,!0)))};var de=(e,t)=>oe(fe(e,t)),ge=(e,t,r,n,s)=>{let u;return r.add(t),$(e)?u=s||void 0:c(e[t])?(u=N(k(e),t),i(s)&&i(u)&&u.length!==s.length&&(u=s),c(u)||de(t,u).forEach((e=>r.add(e)))):(u=e[t],r.add(t)),c(u)?o(n)?ae(n,t):n:u},me=({hasError:e,isBlurEvent:t,isOnSubmit:r,isReValidateOnSubmit:n,isOnBlur:s,isReValidateOnBlur:c,isSubmitted:u})=>r&&n||r&&!u||s&&!t&&!e||c&&!t&&e||n&&u,he=(e,t)=>{const r=k(X(e));return t?N(r,t,r):r};function ve(e,t){let r=!1;if(!i(e)||!i(t)||e.length!==t.length)return!0;for(let n=0;n<e.length&&!r;n++){const s=e[n],u=t[n];if(c(u)||Object.keys(s).length!==Object.keys(u).length){r=!0;break}for(const e in s)if(s[e]!==u[e]){r=!0;break}}return r}const be=(e,t)=>e.startsWith(`${t}[`);var pe=(e,t)=>[...e].reduce(((e,r)=>!!be(t,r)||e),!1),Oe=e=>typeof FileList!==g&&e instanceof FileList;var ye=e=>({isOnSubmit:!e||e===f.onSubmit,isOnBlur:e===f.onBlur,isOnChange:e===f.onChange});const{useRef:je,useState:we,useCallback:Ee,useEffect:Se}=n||(n=r.t(s,2));function Ve({mode:e=f.onSubmit,reValidateMode:t=f.onChange,validationSchema:r,validationResolver:n,validationContext:s,defaultValues:a={},submitFocusError:d=!0,validateCriteriaMode:h}={}){const v=je({}),b="all"===h,p=je({}),O=je({}),y=je({}),j=je(new Set),w=je(new Set),E=je(new Set),S=je(new Set),V=je(!0),B=je({}),A=je(a),W=je(!1),T=je(!1),U=je(!1),I=je(!1),q=je(0),_=je(!1),J=je(),Z=je({}),ee=je(s),ne=je(new Set),[,se]=we(),{isOnBlur:ue,isOnSubmit:oe}=je(ye(e)).current,fe=typeof window===g,de=!(!r&&!n),be=typeof document!==g&&!fe&&!c(window.HTMLElement),Ve=be&&"Proxy"in window,Re=je({dirty:!Ve,dirtyFields:!Ve,isSubmitted:oe,submitCount:!Ve,touched:!Ve,isSubmitting:!Ve,isValid:!Ve}),{isOnBlur:Be,isOnSubmit:Ce}=je(ye(t)).current,ke=Ee((()=>{W.current||se({})}),[]),Ne=Ee(((e,t,r,n)=>{let s=r||function({errors:e,name:t,error:r,validFields:n,fieldsWithValidation:s}){const c=$(r),u=$(e),i=N(r,t),a=N(e,t);return!(c&&n.has(t)||a&&a.isManual)&&(!!(u!==c||!u&&!a||c&&s.has(t)&&!n.has(t))||i&&!Y(a,i))}({errors:p.current,error:t,name:e,validFields:S.current,fieldsWithValidation:E.current});if($(t)?((E.current.has(e)||de)&&(S.current.add(e),s=s||N(p.current,e)),p.current=D(p.current,[e])):(S.current.delete(e),s=s||!N(p.current,e),C(p.current,e,t[e])),s&&!n)return ke(),!0}),[ke,de]),Le=Ee(((e,t)=>{const r=e.ref,n=e.options,{type:s}=r,c=be&&l(r)&&u(t)?"":t;return F(r)&&n?n.forEach((({ref:e})=>e.checked=e.value===c)):z(r)?G(c)||Oe(c)?r.files=c:r.value=c:H(r)?[...r.options].forEach((e=>e.selected=c.includes(e.value))):P(r)&&n?n.length>1?n.forEach((({ref:e})=>e.checked=c.includes(e.value))):n[0].ref.checked=!!c:r.value=c,!!s}),[be]),xe=e=>{if(!v.current[e]||!Re.current.dirty&&!Re.current.dirtyFields)return!1;const t=pe(ne.current,e),r=w.current.size;let n=B.current[e]!==K(v.current,v.current[e].ref);if(t){const t=e.substring(0,e.indexOf("["));n=ve(he(v.current,t),N(A.current,t))}const s=(t?I.current:w.current.has(e))!==n;return n?w.current.add(e):w.current.delete(e),I.current=t?n:!!w.current.size,Re.current.dirty?s:r!==w.current.size},Fe=Ee((e=>{if(xe(e)||!N(O.current,e)&&Re.current.touched)return!!C(O.current,e,!0)}),[]),Pe=Ee(((e,t,r)=>{const n=i(t);for(const s in t){const c=`${r||e}${n?`[${s}]`:`.${s}`}`;o(t[s])&&Pe(e,t[s],c);const u=v.current[c];u&&(Le(u,t[s]),Fe(c))}}),[Le,Fe]),Me=Ee(((e,t)=>{const r=v.current[e];if(r){Le(r,t);const n=Fe(e);if(re(n))return n}else le(t)||Pe(e,t)}),[Fe,Le,Pe]),$e=Ee((async(e,t)=>{const r=v.current[e];if(!r)return!1;const n=await ce(v,b,r);return Ne(e,n,!1,t),$(n)}),[Ne,b]),Ae=Ee((async e=>{const{errors:t}=await ie(r,b,he(v.current),n,ee.current),s=V.current;return V.current=$(t),i(e)?(e.forEach((e=>{const r=N(t,e);r?C(p.current,e,r):D(p.current,[e])})),ke()):Ne(e,N(t,e)?{[e]:N(t,e)}:{},s!==V.current),$(p.current)}),[ke,Ne,b,n,r]),We=Ee((async e=>{const t=e||Object.keys(v.current);if(de)return Ae(t);if(i(t)){const e=await Promise.all(t.map((async e=>await $e(e,!0))));return ke(),e.every(Boolean)}return await $e(t)}),[Ae,$e,ke,de]),De=e=>{const t=(e.match(/\w+/)||[])[0];return T.current||j.current.has(e)||j.current.has(t)&&!R(e)&&ne.current.has(t)};function Te(e,t,r){let n=!1;const s=i(e);(s?e:[e]).forEach((e=>{const r=Q(e);n=!(!Me(r?e:Object.keys(e)[0],r?t:Object.values(e)[0])&&!s)||De(e)})),(n||s)&&ke(),(r||s&&t)&&We(s?void 0:e)}J.current=J.current?J.current:async({type:e,target:t})=>{const s=t?t.name:"",c=v.current,u=p.current,i=c[s],a=N(u,s);let o;if(!i)return;const l=e===m.BLUR,f=me({hasError:!!a,isBlurEvent:l,isOnSubmit:oe,isReValidateOnSubmit:Ce,isOnBlur:ue,isReValidateOnBlur:Be,isSubmitted:U.current}),d=xe(s);let g=De(s)||d;if(l&&!N(O.current,s)&&Re.current.touched&&(C(O.current,s,!0),g=!0),f)return g&&ke();if(de){const{errors:e}=await ie(r,b,he(c),n,ee.current),t=V.current;V.current=$(e),o=N(e,s)?{[s]:N(e,s)}:{},t!==V.current&&(g=!0)}else o=await ce(v,b,i);!Ne(s,o)&&g&&ke()};const Ue=Ee(((e={})=>{const t=$(A.current)?X(v.current):A.current;ie(r,b,k(Object.assign(Object.assign({},t),e)),n,ee.current).then((({errors:e})=>{const t=V.current;V.current=$(e),t!==V.current&&ke()}))}),[ke,b,n]),Ie=(e,t)=>{!c(J.current)&&e&&function(e,t,r,n){if(!r)return;const{ref:s,ref:{name:c,type:u},mutationWatcher:a}=r;if(!u)return void delete e[c];const o=e[c];if((F(s)||P(s))&&o){const{options:r}=o;i(r)&&r.length?(r.forEach((({ref:e,mutationWatcher:s},c)=>{(e&&M(e)||n)&&(x(e,t),s&&s.disconnect(),D(r,[`[${c}]`]))})),r&&!r.filter(Boolean).length&&delete e[c]):delete e[c]}else(M(s)||n)&&(x(s,t),a&&a.disconnect(),delete e[c])}(v.current,J.current,e,t)},ze=Ee(((e,t)=>{if(!e||e&&pe(ne.current,e.ref.name)&&!t)return;Ie(e,t);const{name:r}=e.ref;p.current=D(p.current,[r]),O.current=D(O.current,[r]),B.current=D(B.current,[r]),[w,E,S,j].forEach((e=>e.current.delete(r))),(Re.current.isValid||Re.current.touched)&&(ke(),de&&Ue())}),[ke,de,Ue]);const He=({name:e,type:t,types:r,message:n,preventRender:s})=>{const c=v.current[e];Y(p.current[e],{type:t,message:n,types:r})||(C(p.current,e,{type:t,types:r,message:n,ref:c?c.ref:{},isManual:!0}),s||ke())};function Ge(e){$(v.current)||(i(e)?e:[e]).forEach((e=>ze(v.current[e],!0)))}function qe(e,t={}){if(!e.name)return console.warn("Missing name @",e);const{name:r,type:n,value:s}=e,u=Object.assign({ref:e},t),a=v.current,o=F(e)||P(e);let f,d=a[r],g=!0,h=!1;if(o?d&&i(d.options)&&d.options.find((({ref:e})=>s===e.value)):d)return void(a[r]=Object.assign(Object.assign({},d),t));if(n){const s=function(e,t){const r=new MutationObserver((()=>{M(e)&&(r.disconnect(),t())}));return r.observe(window.document,{childList:!0,subtree:!0}),r}(e,(()=>ze(u)));d=o?Object.assign({options:[...d&&d.options||[],{ref:e,mutationWatcher:s}],ref:{type:n,name:r}},t):Object.assign(Object.assign({},u),{mutationWatcher:s})}else d=u;if(a[r]=d,$(A.current)||(f=ae(A.current,r),g=c(f),h=pe(ne.current,r),g||h||Le(d,f)),de&&!h&&Re.current.isValid?Ue():$(t)||(E.current.add(r),!oe&&Re.current.isValid&&ce(v,b,d).then((e=>{const t=V.current;$(e)?S.current.add(r):V.current=!1,t!==V.current&&ke()}))),B.current[r]||h&&g||(B.current[r]=g?K(a,d.ref):f),!n)return;!function({field:e,handleChange:t,isRadioOrCheckbox:r}){const{ref:n}=e;l(n)&&n.addEventListener&&t&&(n.addEventListener(r?m.CHANGE:m.INPUT,t),n.addEventListener(m.BLUR,t))}({field:o&&d.options?d.options[d.options.length-1]:d,isRadioOrCheckbox:o,handleChange:J.current})}function _e(e,t){if(!fe)if(Q(e))qe({name:e},t);else{if(!o(e)||!("name"in e))return t=>t&&qe(t,e);qe(e,t)}}const Je=Ee((e=>async t=>{let s,c;t&&(t.preventDefault(),t.persist());const u=v.current;Re.current.isSubmitting&&(_.current=!0,ke());try{if(de){c=X(u);const{errors:e,values:t}=await ie(r,b,k(c),n,ee.current);p.current=e,s=e,c=t}else{const{errors:e,values:t}=await Object.values(u).reduce((async(e,t)=>{if(!t)return e;const r=await e,{ref:n,ref:{name:s}}=t;if(!u[s])return Promise.resolve(r);const c=await ce(v,b,t);return c[s]?(C(r.errors,s,c[s]),S.current.delete(s),Promise.resolve(r)):(E.current.has(s)&&S.current.add(s),r.values[s]=K(u,n),Promise.resolve(r))}),Promise.resolve({errors:{},values:{}}));s=e,c=t}$(s)?(p.current={},await e(k(c),t)):(d&&be&&L(u,s),p.current=s)}finally{U.current=!0,_.current=!1,q.current=q.current+1,ke()}}),[be,ke,de,d,b,n,r]),Ke=e=>{const t=X(v.current),r=$(t)?A.current:t;return e&&e.nest?k(r):r};Se((()=>()=>{W.current=!0,v.current&&Object.values(v.current).forEach((e=>ze(e,!0)))}),[ze]),de||(V.current=S.current.size>=E.current.size&&$(p.current));const Qe={dirty:I.current,dirtyFields:w.current,isSubmitted:U.current,submitCount:q.current,touched:O.current,isSubmitting:_.current,isValid:oe?U.current&&$(p.current):V.current};return{watch:function(e,t){const r=c(t)?c(A.current)?{}:A.current:t,n=X(v.current,e),s=j.current;if(Q(e))return ge(n,e,s,r,ne.current.has(e)?y.current[e]:void 0);if(i(e))return e.reduce(((e,t)=>{let c;return c=$(v.current)&&o(r)?ae(r,t):ge(n,t,s,r),Object.assign(Object.assign({},e),{[t]:c})}),{});T.current=!0;const u=!$(n)&&n||t||A.current;return e&&e.nest?k(u):u},control:Object.assign(Object.assign({register:_e,unregister:Ge,removeFieldEventListener:Ie,getValues:Ke,setValue:Te,reRender:ke,triggerValidation:We},de?{validateSchemaIsValid:Ue}:{}),{formState:Qe,mode:{isOnBlur:ue,isOnSubmit:oe},reValidateMode:{isReValidateOnBlur:Be,isReValidateOnSubmit:Ce},errorsRef:p,touchedFieldsRef:O,fieldsRef:v,resetFieldArrayFunctionRef:Z,validFieldsRef:S,fieldsWithValidationRef:E,watchFieldArrayRef:y,fieldArrayNamesRef:ne,isDirtyRef:I,readFormStateRef:Re,defaultValuesRef:A}),handleSubmit:Je,setValue:Ee(Te,[ke,Me,We]),triggerValidation:We,getValues:Ee(Ke,[]),reset:Ee((e=>{if(be)for(const e of Object.values(v.current))if(e&&l(e.ref)&&e.ref.closest)try{e.ref.closest("form").reset();break}catch(e){}e&&(A.current=e),Object.values(Z.current).forEach((e=>te(e)&&e())),p.current={},v.current={},O.current={},S.current=new Set,E.current=new Set,B.current={},j.current=new Set,w.current=new Set,T.current=!1,U.current=!1,I.current=!1,V.current=!0,q.current=0,ke()}),[]),register:Ee(_e,[A.current,B.current,y.current]),unregister:Ee(Ge,[]),clearError:Ee((function(e){c(e)?p.current={}:D(p.current,i(e)?e:[e]),ke()}),[]),setError:Ee((function(e,t="",r){Q(e)?He(Object.assign({name:e},o(t)?{types:t,type:""}:{type:t,message:r})):i(e)&&(e.forEach((e=>He(Object.assign(Object.assign({},e),{preventRender:!0})))),ke())}),[]),errors:p.current,formState:Ve?new Proxy(Qe,{get:(e,t)=>t in e?(Re.current[t]=!0,e[t]):{}}):Qe}}function Re(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r}const Be=(0,s.createContext)(null);function Ce(){const e=(0,s.useContext)(Be);if(!c(e))return e;throw new Error("Missing FormContext")}const{useEffect:ke,useCallback:Ne,useRef:Le,useState:xe}=n||(n=r.t(s,2));const Fe=e=>{var{name:t,rules:r,as:n,onBlur:u,onChange:i,onChangeName:a=f.onChange,onBlurName:l=f.onBlur,valueName:g,defaultValue:m,control:h}=e,v=Re(e,["name","rules","as","onBlur","onChange","onChangeName","onBlurName","valueName","defaultValue","control"]);const b=Ce(),{defaultValuesRef:p,setValue:O,register:y,unregister:j,errorsRef:w,removeFieldEventListener:E,triggerValidation:S,mode:{isOnSubmit:V,isOnBlur:R},reValidateMode:{isReValidateOnBlur:B,isReValidateOnSubmit:C},formState:{isSubmitted:k},fieldsRef:L,fieldArrayNamesRef:x}=h||b.control,[F,P]=(0,s.useState)(c(m)?N(p.current,t):m),M=(0,s.useRef)(F),$=re(F),A=()=>!me({hasError:!!N(w.current,t),isOnBlur:R,isOnSubmit:V,isReValidateOnBlur:B,isReValidateOnSubmit:C,isSubmitted:k}),W=e=>{const t=((e,t)=>le(e)||!o(e.target)||o(e.target)&&!e.type?e:t||c(e.target.value)?e.target.checked:e.target.value)(e,$);return P(t),M.current=t,t},D=()=>{pe(x.current,t)&&L.current[t]&&E(L.current[t],!0),y(Object.defineProperty({name:t},d,{set(e){P(e),M.current=e},get:()=>M.current}),Object.assign({},r))};(0,s.useEffect)((()=>{L.current[t]||(D(),P(c(m)?N(p.current,t):m))})),(0,s.useEffect)((()=>(D(),()=>{pe(x.current,t)||j(t)})),[t]);const T=R||B,U=Object.assign(Object.assign(Object.assign(Object.assign({name:t},v),i?{[a]:(I=i,(...e)=>O(t,W(I(e)),A()))}:{[a]:e=>{const r=W(e);O(t,r,A())}}),u||T?{[l]:(...e)=>{u&&u(e),T&&S(t)}}:{}),{[g||($?"checked":d)]:F});var I;return(0,s.isValidElement)(n)?(0,s.cloneElement)(n,U):(0,s.createElement)(n,U)}}}]);