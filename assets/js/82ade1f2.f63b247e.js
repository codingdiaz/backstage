/*! For license information please see 82ade1f2.f63b247e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[333085],{234697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(824246),i=t(511151);const o={id:"plugin-scaffolder-backend.createpublishgithubaction",title:"createPublishGithubAction()",description:"API reference for createPublishGithubAction()"},s=void 0,a={unversionedId:"reference/plugin-scaffolder-backend.createpublishgithubaction",id:"reference/plugin-scaffolder-backend.createpublishgithubaction",title:"createPublishGithubAction()",description:"API reference for createPublishGithubAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.createpublishgithubaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createpublishgithubaction",permalink:"/docs/reference/plugin-scaffolder-backend.createpublishgithubaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createpublishgithubaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createpublishgithubaction",title:"createPublishGithubAction()",description:"API reference for createPublishGithubAction()"}},u={},c=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend.createpublishgithubaction",children:(0,r.jsx)(n.code,{children:"createPublishGithubAction"})})]}),"\n",(0,r.jsx)(n.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitHub."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.b,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function createPublishGithubAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n    githubCredentialsProvider?: GithubCredentialsProvider;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    homepage?: string | undefined;\n    access?: string | undefined;\n    defaultBranch?: string | undefined;\n    protectDefaultBranch?: boolean | undefined;\n    protectEnforceAdmins?: boolean | undefined;\n    deleteBranchOnMerge?: boolean | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    allowRebaseMerge?: boolean | undefined;\n    allowSquashMerge?: boolean | undefined;\n    squashMergeCommitTitle?: "PR_TITLE" | "COMMIT_OR_PR_TITLE" | undefined;\n    squashMergeCommitMessage?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK" | undefined;\n    allowMergeCommit?: boolean | undefined;\n    allowAutoMerge?: boolean | undefined;\n    sourcePath?: string | undefined;\n    bypassPullRequestAllowances?: {\n        users?: string[];\n        teams?: string[];\n        apps?: string[];\n    } | undefined;\n    requiredApprovingReviewCount?: number | undefined;\n    restrictions?: {\n        users: string[];\n        teams: string[];\n        apps?: string[];\n    } | undefined;\n    requireCodeOwnerReviews?: boolean | undefined;\n    dismissStaleReviews?: boolean | undefined;\n    requiredStatusCheckContexts?: string[] | undefined;\n    requireBranchesToBeUpToDate?: boolean | undefined;\n    requiredConversationResolution?: boolean | undefined;\n    repoVisibility?: "internal" | "private" | "public" | undefined;\n    collaborators?: ({\n        user: string;\n        access: string;\n    } | {\n        team: string;\n        access: string;\n    } | {\n        username: string;\n        access: \'pull\' | \'push\' | \'admin\' | \'maintain\' | \'triage\';\n    })[] | undefined;\n    hasProjects?: boolean | undefined;\n    hasWiki?: boolean | undefined;\n    hasIssues?: boolean | undefined;\n    token?: string | undefined;\n    topics?: string[] | undefined;\n    requiredCommitSigning?: boolean | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["{ integrations: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,r.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),"; githubCredentialsProvider?: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"}),"; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.b,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description?: string | undefined; homepage?: string | undefined; access?: string | undefined; defaultBranch?: string | undefined; protectDefaultBranch?: boolean | undefined; protectEnforceAdmins?: boolean | undefined; deleteBranchOnMerge?: boolean | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; allowRebaseMerge?: boolean | undefined; allowSquashMerge?: boolean | undefined; squashMergeCommitTitle?: "PR_TITLE" | "COMMIT_OR_PR_TITLE" | undefined; squashMergeCommitMessage?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK" | undefined; allowMergeCommit?: boolean | undefined; allowAutoMerge?: boolean | undefined; sourcePath?: string | undefined; bypassPullRequestAllowances?: { users?: string[]; teams?: string[]; apps?: string[]; } | undefined; requiredApprovingReviewCount?: number | undefined; restrictions?: { users: string[]; teams: string[]; apps?: string[]; } | undefined; requireCodeOwnerReviews?: boolean | undefined; dismissStaleReviews?: boolean | undefined; requiredStatusCheckContexts?: string[] | undefined; requireBranchesToBeUpToDate?: boolean | undefined; requiredConversationResolution?: boolean | undefined; repoVisibility?: "internal" | "private" | "public" | undefined; collaborators?: ({ user: string; access: string; } | { team: string; access: string; } | { username: string; access: \'pull\' | \'push\' | \'admin\' | \'maintain\' | \'triage\'; })[] | undefined; hasProjects?: boolean | undefined; hasWiki?: boolean | undefined; hasIssues?: boolean | undefined; token?: string | undefined; topics?: string[] | undefined; requiredCommitSigning?: boolean | undefined; }, import("@backstage/types").',(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in o=Object(arguments[u]))t.call(o,c)&&(a[c]=o[c]);if(n){s=n(o);for(var l=0;l<s.length;l++)r.call(o,s[l])&&(a[s[l]]=o[s[l]])}}return a}},371426:(e,n,t)=>{t(862525);var r=t(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),n.Fragment=o("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!u.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:s.current}}n.jsx=c,n.jsxs=c},541535:(e,n,t)=>{var r=t(862525),i=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var s=60109,a=60110,u=60112;n.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),o=d("react.portal"),n.Fragment=d("react.fragment"),n.StrictMode=d("react.strict_mode"),n.Profiler=d("react.profiler"),s=d("react.provider"),a=d("react.context"),u=d("react.forward_ref"),n.Suspense=d("react.suspense"),c=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}function m(){}function y(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=y.prototype=new m;v.constructor=y,r(v,b.prototype),v.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,o={},s=null,a=null;if(null!=n)for(r in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)_.call(n,r)&&!C.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:s,ref:a,props:o,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function x(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,t,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case o:u=!0}}if(u)return s=s(u=e),e=""===r?"."+x(u,0):r,Array.isArray(s)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),O(s,n,t,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),n.push(s)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=r+x(a=e[c],c);u+=O(a,n,t,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=O(a=a.value,n,t,l=r+x(a,c++),s);else if("object"===a)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function S(e,n,t){if(null==e)return e;var r=[],i=0;return O(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function R(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function A(){var e=E.current;if(null===e)throw Error(p(321));return e}var M={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:S,forEach:function(e,n,t){S(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},n.Component=b,n.PureComponent=y,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var o=r({},e.props),s=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=j.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)_.call(n,l)&&!C.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}return{$$typeof:i,type:e.type,key:s,ref:a,props:o,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:a,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:R}},n.memo=function(e,n){return{$$typeof:c,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return A().useCallback(e,n)},n.useContext=function(e,n){return A().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return A().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return A().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return A().useLayoutEffect(e,n)},n.useMemo=function(e,n){return A().useMemo(e,n)},n.useReducer=function(e,n,t){return A().useReducer(e,n,t)},n.useRef=function(e){return A().useRef(e)},n.useState=function(e){return A().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>o});var r=t(667294);const i=r.createContext({});function o(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:o(e),r.createElement(i.Provider,{value:a},n)}}}]);