"use strict";(self.webpackChunkatlascode=self.webpackChunkatlascode||[]).push([[684],{61633:(e,t,r)=>{function s(e){return e&&void 0!==e.errorMessages&&void 0!==e.errors}function a(e){return e&&void 0!==e.errorMessages}r.d(t,{HT:()=>s,Jc:()=>a})},14596:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(69984),a=r(61633),n=r(96540);class o extends n.Component{constructor(e){super(e),this.state={errorDetails:this.props.errorDetails}}componentWillReceiveProps(e){this.setState({errorDetails:e.errorDetails})}render(){let e=[];(0,a.HT)(this.state.errorDetails)?(Object.keys(this.state.errorDetails.errors).forEach((t=>{e.push(n.createElement("p",{className:"force-wrap"},n.createElement("b",null,t,":"),n.createElement("span",{className:"force-wrap",style:{marginLeft:"5px"}},this.state.errorDetails.errors[t])))})),this.state.errorDetails.errorMessages.forEach((t=>{e.push(n.createElement("p",{className:"force-wrap"},n.createElement("span",{className:"force-wrap",style:{marginLeft:"5px"}},t)))}))):(0,a.Jc)(this.state.errorDetails)?this.state.errorDetails.errorMessages.forEach((t=>{e.push(n.createElement("p",{className:"force-wrap"},n.createElement("span",{className:"force-wrap",style:{marginLeft:"5px"}},t)))})):"object"===typeof this.state.errorDetails?Object.keys(this.state.errorDetails).forEach((t=>{e.push(n.createElement("p",{className:"force-wrap"},n.createElement("b",null,t,":"),n.createElement("span",{className:"force-wrap",style:{marginLeft:"5px"}},JSON.stringify(this.state.errorDetails[t]))))})):e.push(n.createElement("p",{className:"force-wrap"},this.state.errorDetails));const t=this.state.errorDetails.title?this.state.errorDetails.title:"Something went wrong";return n.createElement(s.A,{appearance:"warning",title:t,actions:[{text:"Dismiss",onClick:()=>{this.setState({errorDetails:void 0}),this.props.onDismissError()}}]},n.createElement("div",null,e))}}},17660:(e,t,r)=>{r.d(t,{B:()=>n});var s=r(96540);var a=r(79402);class n extends s.Component{constructor(e){super(e),this._api=acquireVsCodeApi();const t=this.onMessageEvent.bind(this);window.addEventListener("message",t),this.initializeColors()}initializeColors(){const e=()=>{const e=document.body,t=getComputedStyle(e),r=e.style;let s=t.getPropertyValue("--vscode-editor-background").trim();r.setProperty("--vscode-editor-background--lighten-05",(0,a.a)(s,5)),r.setProperty("--vscode-editor-background--darken-05",(0,a.e$)(s,5)),r.setProperty("--vscode-editor-background--lighten-075",(0,a.a)(s,7.5)),r.setProperty("--vscode-editor-background--darken-075",(0,a.e$)(s,7.5)),r.setProperty("--vscode-editor-background--lighten-15",(0,a.a)(s,15)),r.setProperty("--vscode-editor-background--darken-15",(0,a.e$)(s,15)),r.setProperty("--vscode-editor-background--lighten-30",(0,a.a)(s,30)),r.setProperty("--vscode-editor-background--darken-30",(0,a.e$)(s,30)),s=t.getPropertyValue("--color").trim(),r.setProperty("--color--75",(0,a.ke)(s,75)),r.setProperty("--color--50",(0,a.ke)(s,50)),s=t.getPropertyValue("--vscode-editor-foreground").trim(),r.setProperty("--vscode-editor-foreground--75",(0,a.ke)(s,75)),r.setProperty("--vscode-editor-foreground--50",(0,a.ke)(s,50)),s=t.getPropertyValue("--vscode-editor-background").trim(),r.setProperty("--vscode-editor-background--lighten-05",(0,a.a)(s,5)),r.setProperty("--vscode-editor-background--darken-05",(0,a.e$)(s,5)),s=t.getPropertyValue("--vscode-button-foreground").trim(),r.setProperty("--vscode-button-foreground--75",(0,a.ke)(s,75)),r.setProperty("--vscode-button-foreground--50",(0,a.ke)(s,50)),s=t.getPropertyValue("--vscode-button-background").trim(),r.setProperty("--vscode-button-background--lighten-05",(0,a.a)(s,5)),r.setProperty("--vscode-button-background--lighten-50",(0,a.a)(s,50)),r.setProperty("--vscode-button-background--lighten-75",(0,a.a)(s,75)),r.setProperty("--vscode-button-background--lighten-80",(0,a.a)(s,80)),r.setProperty("--vscode-button-background--darken-05",(0,a.e$)(s,5)),r.setProperty("--vscode-button-background--50",(0,a.ke)(s,50)),r.setProperty("--vscode-button-background--75",(0,a.ke)(s,75))};new MutationObserver(e).observe(document.body,{attributes:!0,attributeFilter:["class"]}),e()}onPMFLater(){this._api.postMessage({action:"pmfLater"})}onPMFNever(){this._api.postMessage({action:"pmfNever"})}onPMFSubmit(e){this._api.postMessage({action:"pmfSubmit",pmfData:e})}onPMFOpen(){this._api.postMessage({action:"pmfOpen"})}onMessageEvent(e){const t=e.data;this.onMessageReceived(t)}postMessage(e){this._api.postMessage(e)}postMessageWithEventPromise(e,t,r,s){return this._api.postMessage(e),function(e,t,r){return new Promise(((s,a)=>{const n=setTimeout((()=>{window.removeEventListener("message",o),clearTimeout(n),a(`timeout waiting for event ${e}`)}),t),o=t=>{t.data.type!==e||r&&t.data.nonce!==r||(clearTimeout(n),window.removeEventListener("message",o),s(t.data)),"error"===t.data.type&&r&&t.data.nonce===r&&(window.removeEventListener("message",o),clearTimeout(n),a(t.data.reason))};window.addEventListener("message",o)}))}(t,r,s)}}},79402:(e,t,r)=>{r.d(t,{a:()=>l,e$:()=>o,ke:()=>i,zK:()=>n});const s=/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d\.]+%?)?\))$/i;function a(e,t){const r=e+t,s=t<0?r<0?0:r:r>255?255:r;return Math.round(s)}const n={neutral:"default","blue-gray":"default","medium-gray":"default",purple:"new",brown:"new",blue:"inprogress",red:"removed","warm-red":"removed",yellow:"inprogress",green:"success"};function o(e,t){return l(e,-t)}function l(e,t){const r=c(e);if(null===r)return e;const[s,n,o,l]=r;return`rgba(${a(s,t=255*t/100)}, ${a(n,t)}, ${a(o,t)}, ${l})`}function i(e,t){const r=c(e);if(null===r)return e;const[s,a,n,o]=r;return`rgba(${s}, ${a}, ${n}, ${o*(t/100)})`}function c(e){e=e.trim();const t=s.exec(e);if(null===t)return null;if("#"===t[1]){const e=t[2];switch(e.length){case 3:return[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),1];case 6:return[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16),1]}return null}switch(t[3]){case"rgb":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),1];case"rgba":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),parseFloat(t[7])];default:return null}}},49281:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var s=r(46569),a=r(32935),n=r(93420),o=r(72007),l=r(96540),i=r(14596),c=r(17660);class d extends c.B{constructor(e){super(e),this.handleDismissError=()=>{this.setState({isErrorBannerOpen:!1,errorDetails:void 0})},this.state={isErrorBannerOpen:!1,errorDetails:void 0,problems:{},project:o.zU}}onMessageReceived(e){switch(e.type){case"error":this.setState({isErrorBannerOpen:!0,errorDetails:e.reason});break;case"screenRefresh":this.setState({problems:e.problems,project:e.project,isErrorBannerOpen:!1,errorDetails:void 0})}return!0}render(){let e=[];return Object.keys(this.state.problems).forEach((t=>{const r=this.state.problems[t];let s=[];r.nonRenderableFields.forEach((e=>{s.push(l.createElement("tr",null,l.createElement("td",null,e.name),l.createElement("td",null,e.key),l.createElement("td",{style:{textAlign:"center"}},String(e.required)),l.createElement("td",null,e.schema),l.createElement("td",null,e.message)))})),e.push(l.createElement("tr",{className:"issuetype-row"},l.createElement("td",null,l.createElement("div",{className:"ac-icon-with-text"},l.createElement("img",{src:r.issueType.iconUrl}),l.createElement("h3",{style:{marginLeft:"10px"}},r.issueType.name))),l.createElement("td",{style:{textAlign:"center"}},String(r.isRenderable)),l.createElement("td",null,r.message))),e.push(l.createElement("tr",null,l.createElement("td",{colSpan:3},l.createElement("h4",{style:{marginTop:"3px",marginBottom:"5px;"}},"Non-renderable Fields:"),l.createElement("table",{className:"field-problem-table"},l.createElement("tr",null,l.createElement("th",null,"Field Name"),l.createElement("th",null,"Key"),l.createElement("th",null,"Is Required"),l.createElement("th",null,"Schema"),l.createElement("th",null,"Message")),s))))})),l.createElement(s.Ay,null,l.createElement(a.A,null,l.createElement(n.A,{medium:20},l.createElement("div",null,this.state.isErrorBannerOpen&&l.createElement(i.A,{onDismissError:this.handleDismissError,errorDetails:this.state.errorDetails}),l.createElement("h2",null,"Create Issue Problem Report: ",this.state.project.name," (",this.state.project.key,")"),l.createElement("table",{className:"problem-table"},l.createElement("tr",null,l.createElement("th",null,"Issue Type"),l.createElement("th",null,"Is Renderable"),l.createElement("th",null,"Message")),e)))))}}}}]);