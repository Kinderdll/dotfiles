(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return c}));const s=/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d\.]+%?)?\))$/i;function n(e,t){const a=e+t,s=t<0?a<0?0:a:a>255?255:a;return Math.round(s)}const r={neutral:"default","blue-gray":"default","medium-gray":"default",purple:"new",brown:"new",blue:"inprogress",red:"removed","warm-red":"removed",yellow:"inprogress",green:"success"};function i(e,t){return o(e,-t)}function o(e,t){const a=l(e);if(null===a)return e;const[s,r,i,o]=a;return`rgba(${n(s,t=255*t/100)}, ${n(r,t)}, ${n(i,t)}, ${o})`}function c(e,t){const a=l(e);if(null===a)return e;const[s,n,r,i]=a;return`rgba(${s}, ${n}, ${r}, ${i*(t/100)})`}function l(e){e=e.trim();const t=s.exec(e);if(null===t)return null;if("#"===t[1]){const e=t[2];switch(e.length){case 3:return[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),1];case 6:return[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16),1]}return null}switch(t[3]){case"rgb":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),1];case"rgba":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),parseFloat(t[7])];default:return null}}},136:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return u}));var s=a(96);const n={details:s.g,ownerSlug:"",repoSlug:""},r={accountId:"",displayName:"",url:"",avatarUrl:"",mention:""},i={id:"",scm:void 0,name:"",displayName:"",fullName:"",parentFullName:void 0,url:"",avatarUrl:"",mainbranch:void 0,developmentBranch:void 0,branchingModel:void 0,issueTrackerEnabled:!1},o={id:"",deletable:!1,editable:!1,user:r,htmlContent:"",rawContent:"",ts:"",updatedTs:"",deleted:!1,children:[],tasks:[]};var c;!function(e){e.ADDED="A",e.DELETED="D",e.COPIED="C",e.MODIFIED="M",e.RENAMED="R",e.CONFLICT="CONFLICT",e.UNKNOWN="X"}(c||(c={}));const l={siteDetails:s.g,id:"",version:0,url:"",author:r,participants:[],source:{repo:i,branchName:"",commitHash:""},destination:{repo:i,branchName:"",commitHash:""},title:"",htmlSummary:"",rawSummary:"",ts:"",updatedTs:"",state:"OPEN",closeSourceBranch:!1,taskCount:0},u={site:n,data:l}},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"k",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"l",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"h",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"m",(function(){return u})),a.d(t,"f",(function(){return d})),a.d(t,"i",(function(){return p})),a.d(t,"c",(function(){return m})),a.d(t,"j",(function(){return h})),a.d(t,"d",(function(){return b}));const s=(...e)=>(...t)=>e.forEach(e=>e(...t));function n(e,t){return void 0!==e?void 0:"EMPTY"}function r(e,t){}function i(e,t){return void 0===e||e.trim().length<1?"EMPTY":void 0}function o(e){return void 0===i(e)}function c(e,t){let a=void 0;if(void 0!==e&&e.length>0){let t=NaN;t="number"===typeof e?e:parseFloat(e),a=isNaN(t)?"NOT_NUMBER":void 0}return a}function l(e){return void 0===c(e)}function u(e,t){let a=void 0;try{""===new URL(e).hostname&&(a="NOT_URL")}catch(e){a="NOT_URL"}return a}function d(e){return void 0===u(e)}function p(e,t){let a=i(e);return void 0===a&&(a=c(e)),a}function m(e){return void 0===p(e)}function h(e,t){let a=i(e);return void 0===a&&(a=u(e)),a}function b(e){return void 0===h(e)}},185:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"e",(function(){return p})),a.d(t,"f",(function(){return m}));var s=a(495),n=a(237),r=a(173),i=a(145),o=a(96);const c=Object.assign(Object.assign({type:""},Object(s.a)(o.g)),{currentUser:n.g,workInProgress:!1,recentPullRequests:[]}),l=Object.assign(Object.assign({type:""},Object(i.c)(o.g)),{currentUser:n.g,transformerProblems:{}});function u(e){return void 0!==e.fieldValues}function d(e){return void 0!==e.issueData}function p(e){return void 0!==e.issue&&Object(r.d)(e.issue)}function m(e){return"startWorkOnIssueResult"===e.type}},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a(833),n=a(566),r=a(0);class i extends r.Component{constructor(e){super(e),this.state={errorDetails:this.props.errorDetails}}componentWillReceiveProps(e){this.setState({errorDetails:e.errorDetails})}render(){let e=[];Object(n.a)(this.state.errorDetails)?(Object.keys(this.state.errorDetails.errors).forEach(t=>{e.push(r.createElement("p",{className:"force-wrap"},r.createElement("b",null,t,":"),r.createElement("span",{className:"force-wrap",style:{marginLeft:"5px"}},this.state.errorDetails.errors[t])))}),this.state.errorDetails.errorMessages.forEach(t=>{e.push(r.createElement("p",{className:"force-wrap"},r.createElement("span",{className:"force-wrap",style:{marginLeft:"5px"}},t)))})):Object(n.b)(this.state.errorDetails)?this.state.errorDetails.errorMessages.forEach(t=>{e.push(r.createElement("p",{className:"force-wrap"},r.createElement("span",{className:"force-wrap",style:{marginLeft:"5px"}},t)))}):"object"===typeof this.state.errorDetails?Object.keys(this.state.errorDetails).forEach(t=>{e.push(r.createElement("p",{className:"force-wrap"},r.createElement("b",null,t,":"),r.createElement("span",{className:"force-wrap",style:{marginLeft:"5px"}},JSON.stringify(this.state.errorDetails[t]))))}):e.push(r.createElement("p",{className:"force-wrap"},this.state.errorDetails));const t=this.state.errorDetails.title?this.state.errorDetails.title:"Something went wrong";return r.createElement(s.a,{appearance:"warning",title:t,actions:[{text:"Dismiss",onClick:()=>{this.setState({errorDetails:void 0}),this.props.onDismissError()}}]},r.createElement("div",null,e))}}},208:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(0);var n=a(131);class r extends s.Component{constructor(e){super(e),this._api=acquireVsCodeApi();const t=this.onMessageEvent.bind(this);window.addEventListener("message",t),this.initializeColors()}initializeColors(){const e=()=>{const e=document.body,t=getComputedStyle(e),a=e.style;let s=t.getPropertyValue("--vscode-editor-background").trim();a.setProperty("--vscode-editor-background--lighten-05",Object(n.c)(s,5)),a.setProperty("--vscode-editor-background--darken-05",Object(n.b)(s,5)),a.setProperty("--vscode-editor-background--lighten-075",Object(n.c)(s,7.5)),a.setProperty("--vscode-editor-background--darken-075",Object(n.b)(s,7.5)),a.setProperty("--vscode-editor-background--lighten-15",Object(n.c)(s,15)),a.setProperty("--vscode-editor-background--darken-15",Object(n.b)(s,15)),a.setProperty("--vscode-editor-background--lighten-30",Object(n.c)(s,30)),a.setProperty("--vscode-editor-background--darken-30",Object(n.b)(s,30)),s=t.getPropertyValue("--color").trim(),a.setProperty("--color--75",Object(n.d)(s,75)),a.setProperty("--color--50",Object(n.d)(s,50)),s=t.getPropertyValue("--vscode-editor-foreground").trim(),a.setProperty("--vscode-editor-foreground--75",Object(n.d)(s,75)),a.setProperty("--vscode-editor-foreground--50",Object(n.d)(s,50)),s=t.getPropertyValue("--vscode-editor-background").trim(),a.setProperty("--vscode-editor-background--lighten-05",Object(n.c)(s,5)),a.setProperty("--vscode-editor-background--darken-05",Object(n.b)(s,5)),s=t.getPropertyValue("--vscode-button-foreground").trim(),a.setProperty("--vscode-button-foreground--75",Object(n.d)(s,75)),a.setProperty("--vscode-button-foreground--50",Object(n.d)(s,50)),s=t.getPropertyValue("--vscode-button-background").trim(),a.setProperty("--vscode-button-background--lighten-05",Object(n.c)(s,5)),a.setProperty("--vscode-button-background--lighten-50",Object(n.c)(s,50)),a.setProperty("--vscode-button-background--lighten-75",Object(n.c)(s,75)),a.setProperty("--vscode-button-background--lighten-80",Object(n.c)(s,80)),a.setProperty("--vscode-button-background--darken-05",Object(n.b)(s,5)),a.setProperty("--vscode-button-background--50",Object(n.d)(s,50)),a.setProperty("--vscode-button-background--75",Object(n.d)(s,75))};new MutationObserver(e).observe(document.body,{attributes:!0,attributeFilter:["class"]}),e()}onPMFLater(){this._api.postMessage({action:"pmfLater"})}onPMFNever(){this._api.postMessage({action:"pmfNever"})}onPMFSubmit(e){this._api.postMessage({action:"pmfSubmit",pmfData:e})}onPMFOpen(){this._api.postMessage({action:"pmfOpen"})}onMessageEvent(e){const t=e.data;this.onMessageReceived(t)}postMessage(e){this._api.postMessage(e)}postMessageWithEventPromise(e,t,a,s){return this._api.postMessage(e),function(e,t,a){return new Promise((s,n)=>{const r=setTimeout(()=>{window.removeEventListener("message",i),clearTimeout(r),n("timeout waiting for event "+e)},t),i=t=>{t.data.type!==e||a&&t.data.nonce!==a||(clearTimeout(r),window.removeEventListener("message",i),s(t.data)),"error"===t.data.type&&a&&t.data.nonce===a&&(window.removeEventListener("message",i),clearTimeout(r),n(t.data.reason))};window.addEventListener("message",i)})}(t,a,s)}}},238:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(0),n=a.n(s);const r=()=>n.a.createElement("div",{className:"ac-atl-loader-container"},n.a.createElement("img",{className:"ac-atl-loader",src:"images/atlassian-icon.svg"}),n.a.createElement("div",null,"Loading data..."))},240:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a(0),n=a(778),r=a(812);class i extends s.Component{constructor(e){super(e)}render(){return s.createElement(n.a,null,s.createElement(r.a,{heading:"Looks like you've gone offline",shouldCloseOnEscapePress:!1,shouldCloseOnOverlayClick:!1},s.createElement("p",{style:{color:"var(--vscode-foreground)!important"}},"This page will be available when you're back online.")))}}},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0),n=a(624),r=a(564),i=a(400),o=a.n(i);class c extends s.Component{render(){return s.createElement("div",{className:"ac-icon-with-text"},this.props.iconUrl&&s.createElement("img",{style:{paddingRight:"5px"},src:this.props.iconUrl}),s.createElement("div",{className:"jira-issue-key"},s.createElement(n.a,{className:"ac-link-button",appearance:"link",spacing:"none",href:this.props.href,onClick:this.props.onItemClick},this.props.text),this.props.onCopy&&s.createElement("div",{className:"jira-issue-copy-icon",onClick:this.props.onCopy},s.createElement(r.a,{content:"Copy the web link to clipboard"},s.createElement(o.a,{label:"copy issue link",size:"small"})))))}}},401:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var s=a(780),n=a(158),r=a(783),i=a(237),o=a(0),c=a(131);const{Option:l}=n.m,u=e=>o.createElement(l,Object.assign({},e),o.createElement(s.a,{appearance:c.a[e.data.to.statusCategory.colorName]},e.data.to.name)),d=e=>o.createElement(l,Object.assign({},e),e.data.name+" \u2192 ",o.createElement(s.a,{appearance:c.a[e.data.to.statusCategory.colorName]},e.data.to.name)),p=e=>o.createElement(n.m.SingleValue,Object.assign({},e),o.createElement(s.a,{appearance:c.a[e.data.to.statusCategory.colorName]},e.data.to.name));class m extends o.Component{constructor(e){super(e),this.handleStatusChange=e=>{this.props.onStatusChange(e)};const t=this.getCurrentTransition(e.currentStatus,e.transitions);this.state={selectedTransition:t,showTransitionName:this.shouldShowTransitionName(e.transitions)}}componentWillReceiveProps(e){const t=this.getCurrentTransition(e.currentStatus,e.transitions);this.setState({selectedTransition:t,showTransitionName:this.shouldShowTransitionName(e.transitions)})}getCurrentTransition(e,t){const a=t.find(t=>t.to.id===e.id);return void 0!==a?a:Object.assign(Object.assign({},i.f),{to:e})}shouldShowTransitionName(e){return e.some(e=>e.name!==e.to.name)}render(){return!Array.isArray(this.props.transitions)||this.props.transitions.length<1?o.createElement("div",null):o.createElement(r.a,{name:"status",id:"status",className:"ac-select-container",classNamePrefix:"ac-select",options:this.props.transitions,value:this.state.selectedTransition,components:{Option:this.state.showTransitionName?d:u,SingleValue:p},getOptionLabel:e=>e.to.name,getOptionValue:e=>e.id,isDisabled:this.props.isStatusButtonLoading,isLoading:this.props.isStatusButtonLoading,onChange:this.handleStatusChange})}}},64:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var s=a(831),n=a(813),r=a(624),i=a(785),o=a(822),c=a(403),l=a(303),u=a(567),d=a(835),p=a(833),m=a(783),h=a(784),b=a(237),g=a(173),f=a(405),E=a(0),v=a(246),y=a(96),k=a(136);var O=a(185),S=a(238),N=a(186),C=a(149),w=a(240),B=a(208),j=a(399),I=a(401);const T={workspaceRepo:{rootUri:"",mainSiteRemote:{site:k.b,remote:{name:"",isReadOnly:!0}},siteRemotes:[]},localBranches:[],remoteBranches:[],branchTypes:[],isCloud:!0},x={data:{type:"update",issue:Object(b.a)(y.g),repoData:[]},issueType:"jiraIssue",jiraSetupEnabled:!0,bitbucketSetupEnabled:!0,transition:b.f,repo:T,localBranch:void 0,existingBranchOptions:[],isStartButtonLoading:!1,result:{type:"startWorkOnIssueResult",successMessage:void 0,error:void 0},isErrorBannerOpen:!1,errorDetails:void 0,isOnline:!0};class L extends B.a{constructor(e){super(e),this.isEmptyRepo=e=>e===T,this.handleStatusChange=e=>{Object(O.e)(this.state.data)&&this.setState({data:Object.assign(Object.assign({},this.state.data),{issue:Object.assign(Object.assign({},this.state.data.issue),{status:Object.assign(Object.assign({},this.state.data.issue.status),{id:e.to.id,name:e.to.name})})}),transition:e})},this.handleRepoChange=e=>{const t=Object(O.e)(this.state.data)?this.state.data.issue.key:"issue-#"+this.state.data.issue.data.id,a=e.localBranches.find(t=>void 0!==t.name&&-1!==t.name.indexOf(e.developmentBranch));this.setState({repo:e,sourceBranch:a,branchType:e.branchTypes.length>0?e.branchTypes[0]:void 0,existingBranchOptions:this.getExistingBranchOptions(e,t)})},this.handleSourceBranchChange=e=>{this.setState({sourceBranch:e})},this.handleBranchNameChange=e=>{this.setState({localBranch:e})},this.handleSelectExistingBranch=e=>{const t=this.state.repo.branchTypes.find(t=>e.startsWith(t.prefix));this.setState({branchType:t,localBranch:t?e.substring(t.prefix.length):e})},this.toggleJiraSetupEnabled=e=>{this.setState({jiraSetupEnabled:e.target.checked})},this.toggleBitbucketSetupEnabled=e=>{this.setState({bitbucketSetupEnabled:e.target.checked})},this.handleSiteRemoteChange=e=>{this.setState({siteRemote:e})},this.handleStart=()=>{this.setState({isStartButtonLoading:!0});let e="";if(this.state.localBranch){e=(this.state.branchType?this.state.branchType.prefix:"")+this.state.localBranch}this.postMessage({action:"startWork",repoUri:this.state.repo.workspaceRepo.rootUri,targetBranchName:e,sourceBranch:this.state.sourceBranch,remoteName:this.state.siteRemote?this.state.siteRemote.remote.name:"",transition:this.state.transition,setupJira:this.state.jiraSetupEnabled,setupBitbucket:!this.isEmptyRepo(this.state.repo)&&this.state.bitbucketSetupEnabled})},this.handleDismissError=()=>{this.setState({isErrorBannerOpen:!1,errorDetails:void 0})},this.state=x}onMessageReceived(e){switch(e.type){case"error":this.setState({isStartButtonLoading:!1,isErrorBannerOpen:!0,errorDetails:e.reason});break;case"update":if(Object(O.e)(e)&&e.issue.key.length>0){const t=this.isEmptyRepo(this.state.repo)&&e.repoData.length>0?e.repoData[0]:this.state.repo,a=this.state.transition===b.f&&e.issue.transitions.find(t=>t.to.id===e.issue.status.id)||this.state.transition,s="jiraIssue",n=e.issue.key,r=e.issue.summary;this.updateState(e,s,t,n,r,a)}else this.setState(x);break;case"startWorkOnBitbucketIssueData":if("startWorkOnBitbucketIssueData"===e.type){let t=this.state.repo;if(this.isEmptyRepo(this.state.repo)&&e.repoData.length>0){t=e.repoData.find(t=>t.href===e.issue.data.repository.links.html.href)||e.repoData[0]}const a="bitbucketIssue",s="issue-#"+e.issue.data.id.toString(),n=e.issue.data.title;this.updateState(e,a,t,s,n,b.f)}else this.setState(x);break;case"startWorkOnIssueResult":Object(O.f)(e)&&this.setState({isStartButtonLoading:!1,result:e,isErrorBannerOpen:!1,errorDetails:void 0});break;case"onlineStatus":this.setState({isOnline:e.isOnline}),e.isOnline&&this.postMessage({action:"refreshIssue"})}return!0}getExistingBranchOptions(e,t){return[...e.localBranches.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())).map(e=>e.name),...e.remoteBranches.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())).filter(t=>!e.localBranches.some(e=>t.name.endsWith(e.name))).map(e=>e.name.replace(e.remote+"/",""))]}updateState(e,t,a,s,n,r){const i=this.state.existingBranchOptions.length>0?this.state.existingBranchOptions:this.getExistingBranchOptions(a,s),o=this.state.localBranch||`${s}-${n.substring(0,50).trim().toLowerCase().replace(/\W+/g,"-")}`,c=this.state.sourceBranch||a.localBranches.find(e=>void 0!==e.name&&-1!==e.name.indexOf(a.developmentBranch))||a.localBranches[0];let l=this.state.siteRemote;this.state.siteRemote||(l=a.workspaceRepo.mainSiteRemote),this.setState({data:e,issueType:t,repo:a,sourceBranch:c,transition:r,existingBranchOptions:i,localBranch:o,branchType:a.branchTypes.length>0?a.branchTypes[0]:void 0,siteRemote:l,bitbucketSetupEnabled:!this.isEmptyRepo(a)&&this.state.bitbucketSetupEnabled,isErrorBannerOpen:!1,errorDetails:void 0})}render(){if(Object(O.e)(this.state.data)&&""===this.state.data.issue.key&&!this.state.isErrorBannerOpen&&this.state.isOnline)return this.postMessage({action:"refreshIssue"}),E.createElement(S.a,null);const e=this.state.data.issue,t=this.state.repo,a=E.createElement("div",{className:"ac-vpadding"},E.createElement("p",null,E.createElement("strong",null,"Tip:")," You can have issue keys auto-added to your commit messages using"," ",E.createElement("a",{type:"button",className:"ac-link-button",href:"https://bitbucket.org/snippets/atlassian/qedp7d"},E.createElement("span",null,"our prepare-commit-msg hook"))));let b=E.createElement(c.b,{medium:8},E.createElement("em",null,E.createElement("p",null,"Start work on:")));if("jiraIssue"===this.state.issueType&&Object(g.d)(e))b=E.createElement(c.b,{medium:8},E.createElement("em",null,E.createElement("p",null,"Start work on:")),E.createElement(d.a,{actions:void 0,breadcrumbs:E.createElement(s.a,null,e.parentKey&&E.createElement(n.a,{component:()=>E.createElement(j.a,{text:""+e.parentKey,onItemClick:()=>this.postMessage({action:"openJiraIssue",issueOrKey:{siteDetails:e.siteDetails,key:e.parentKey}})})}),E.createElement(n.a,{component:()=>E.createElement(j.a,{text:""+e.key,iconUrl:e.issuetype.iconUrl,onItemClick:()=>this.postMessage({action:"openJiraIssue",issueOrKey:e}),onCopy:()=>this.postMessage({action:"copyJiraIssueLink"})})}))},E.createElement("p",null,e.summary)),E.createElement("p",{dangerouslySetInnerHTML:{__html:e.descriptionHtml}}));else if("bitbucketIssue"===this.state.issueType){const t=e;b=E.createElement(c.b,{medium:8},E.createElement("em",null,E.createElement("p",null,"Start work on:")),E.createElement(d.a,{actions:void 0,breadcrumbs:E.createElement(s.a,null,E.createElement(n.a,{component:()=>E.createElement(j.a,{text:t.data.repository.name,href:t.data.repository.links.html.href})}),E.createElement(n.a,{component:()=>E.createElement(j.a,{text:"Issues",href:t.data.repository.links.html.href+"/issues"})}),E.createElement(n.a,{component:()=>E.createElement(j.a,{text:"Issue #"+t.data.id,onItemClick:()=>this.postMessage({action:"openBitbucketIssue",issue:t}),onCopy:()=>this.postMessage({action:"copyBitbucketIssueLink"})})}))},E.createElement("p",null,t.data.title)),E.createElement("p",{dangerouslySetInnerHTML:{__html:t.data.content.html}}))}return E.createElement(l.a,null,E.createElement(u.a,null,E.createElement(c.b,{medium:8},!this.state.isOnline&&E.createElement(w.a,null),this.state.result.successMessage&&E.createElement(p.a,{appearance:"confirmation",title:"Work Started"},E.createElement("div",{className:"start-work-success"},E.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.result.successMessage}}))),this.state.isErrorBannerOpen&&E.createElement(N.a,{onDismissError:this.handleDismissError,errorDetails:this.state.errorDetails})),b,"jiraIssue"===this.state.issueType&&E.createElement(c.b,{medium:6},E.createElement("div",{style:{display:"flex",alignItems:"center"}},E.createElement(o.a,{isChecked:this.state.jiraSetupEnabled,onChange:this.toggleJiraSetupEnabled,name:"setup-jira-checkbox"}),E.createElement("h4",null,"Transition issue")),this.state.jiraSetupEnabled&&E.createElement("div",{style:{margin:10,borderLeftWidth:"initial",borderLeftStyle:"solid",borderLeftColor:"var(--vscode-settings-modifiedItemIndicator)"}},E.createElement("div",{style:{margin:10}},E.createElement("label",null,"Select new status"),E.createElement(I.a,{transitions:e.transitions,currentStatus:e.status,isStatusButtonLoading:!1,onStatusChange:this.handleStatusChange})))),E.createElement(c.b,{medium:12}),E.createElement(c.b,{medium:8},E.createElement("div",{style:{display:"flex",alignItems:"center"}},E.createElement(o.a,{isChecked:this.state.bitbucketSetupEnabled,onChange:this.toggleBitbucketSetupEnabled,name:"setup-bitbucket-checkbox"}),E.createElement("h4",null,"Set up git branch")),this.isEmptyRepo(t)&&E.createElement("div",{style:{margin:10,borderLeftWidth:"initial",borderLeftStyle:"solid",borderLeftColor:"var(--vscode-settings-modifiedItemIndicator)"}},E.createElement("div",{style:{margin:10}},E.createElement("div",{className:"ac-vpadding"},E.createElement("label",null,"Repository"),E.createElement(m.a,{className:"ac-select-container",classNamePrefix:"ac-select",placeholder:"No repositories found...",value:t})))),this.state.bitbucketSetupEnabled&&!this.isEmptyRepo(this.state.repo)&&E.createElement("div",{style:{margin:10,borderLeftWidth:"initial",borderLeftStyle:"solid",borderLeftColor:"var(--vscode-settings-modifiedItemIndicator)"}},E.createElement("div",{style:{margin:10}},this.state.data.repoData.length>1&&E.createElement("div",{className:"ac-vpadding"},E.createElement("label",null,"Repository"),E.createElement(m.a,{className:"ac-select-container",classNamePrefix:"ac-select",options:this.state.data.repoData,getOptionLabel:e=>this.isEmptyRepo(e)?"No repositories found...":f.basename(e.workspaceRepo.rootUri),getOptionValue:e=>e,onChange:this.handleRepoChange,placeholder:"Loading...",value:t})),t.branchTypes.length>0&&E.createElement("div",{className:"ac-vpadding",style:{textTransform:"capitalize"}},E.createElement("label",null,"Type"),E.createElement(h.a,{className:"ac-select-container",classNamePrefix:"ac-select",options:t.branchTypes,getOptionLabel:e=>e.kind,getOptionValue:e=>e.prefix,onChange:e=>{this.setState({branchType:e})},value:this.state.branchType})),E.createElement("div",{className:"ac-vpadding"},E.createElement("label",null,"Source branch (this will be the start point for the new branch)"),E.createElement(m.a,{className:"ac-select-container",classNamePrefix:"ac-select",options:[...t.localBranches,...t.remoteBranches],getOptionLabel:e=>e.name,getOptionValue:e=>e,onChange:this.handleSourceBranchChange,value:this.state.sourceBranch})),E.createElement("div",{className:"ac-vpadding"},E.createElement("label",null,"Local branch"),E.createElement("div",{className:"branch-container"},this.state.branchType&&this.state.branchType.prefix&&E.createElement("div",{className:"prefix-container"},E.createElement("label",null,this.state.branchType.prefix)),E.createElement("div",{className:"branch-name"},E.createElement(v.a,{type:"text",value:this.state.localBranch||"",onSave:this.handleBranchNameChange,validation:C.e,validationMessage:"Branch name is required",inputProps:{className:"ac-inputField"},viewProps:{id:"start-work-branch-name",className:"ac-inline-input-view-p"},editButtonClassName:"ac-inline-edit-button",cancelButtonClassName:"ac-inline-cancel-button",saveButtonClassName:"ac-inline-save-button",editOnViewClick:!0}))),this.state.existingBranchOptions.length>0&&E.createElement(p.a,{appearance:"change",title:"Use an existing branch?"},E.createElement("div",null,E.createElement("p",null,"Click to use an existing branch for this issue: (",E.createElement("em",null,"source branch selection is ignored for existing branches"),")"),E.createElement("ul",null,this.state.existingBranchOptions.map(e=>E.createElement("li",null,E.createElement(r.a,{className:"ac-link-button",appearance:"link",onClick:()=>this.handleSelectExistingBranch(e)},e))))))),t.workspaceRepo.siteRemotes.length>1&&E.createElement("div",null,E.createElement("label",null,"Set upstream to"),E.createElement(m.a,{className:"ac-select-container",classNamePrefix:"ac-select",options:t.workspaceRepo.siteRemotes,getOptionLabel:e=>e.remote.name,getOptionValue:e=>e,onChange:this.handleSiteRemoteChange,value:this.state.siteRemote}))))),E.createElement(c.b,{medium:12},E.createElement("div",{className:"ac-vpadding"},!this.state.result.successMessage&&E.createElement(i.a,{className:"ac-button",isLoading:this.state.isStartButtonLoading,onClick:this.handleStart},"Start")),a)))}}},96:function(e,t,a){"use strict";var s;a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"h",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return p})),function(e){e.Update="update",e.Remove="remove"}(s||(s={}));const n={name:"Jira",key:"jira"},r={name:"Bitbucket",key:"bitbucket"};var i,o;!function(e){e.BitbucketCloud="bbcloud",e.BitbucketCloudStaging="bbcloudstaging",e.JiraCloud="jiracloud",e.JiraCloudStaging="jiracloudstaging"}(i||(i={})),function(e){e[e.Valid=0]="Valid",e[e.Invalid=1]="Invalid"}(o||(o={}));const c={id:"",displayName:"",email:"",avatarUrl:""},l={id:"",name:"",avatarUrl:"",host:"",baseLinkUrl:"",baseApiUrl:"",product:{name:"",key:""},isCloud:!0,userId:"",credentialId:""},u={id:"",name:"",avatarUrl:"",scopes:[],baseUrlSuffix:"atlassian.net"},d={user:c,state:o.Valid},p={user:c,username:"",password:"",state:o.Valid};o.Valid}}]);