/*! For license information please see 55a26c3b.2af6213f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[59424],{91142:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var t=n(824246),o=n(511151);const c={id:"core-components.dependencygraphtypes.dependencynode",title:"DependencyGraphTypes.DependencyNode",description:"API reference for DependencyGraphTypes.DependencyNode"},u=void 0,s={unversionedId:"reference/core-components.dependencygraphtypes.dependencynode",id:"reference/core-components.dependencygraphtypes.dependencynode",title:"DependencyGraphTypes.DependencyNode",description:"API reference for DependencyGraphTypes.DependencyNode",source:"@site/../docs/reference/core-components.dependencygraphtypes.dependencynode.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraphtypes.dependencynode",permalink:"/docs/reference/core-components.dependencygraphtypes.dependencynode",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraphtypes.dependencynode.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraphtypes.dependencynode",title:"DependencyGraphTypes.DependencyNode",description:"API reference for DependencyGraphTypes.DependencyNode"}},a={},i=[];function p(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components",children:(0,t.jsx)(r.code,{children:"@backstage/core-components"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes",children:(0,t.jsx)(r.code,{children:"DependencyGraphTypes"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes.dependencynode",children:(0,t.jsx)(r.code,{children:"DependencyNode"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Node of ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraph",children:"DependencyGraph()"})]}),"\n",(0,t.jsx)(r.p,{children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"type DependencyNode<T = {}> = T & {\n        id: string;\n    };\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in c=Object(arguments[a]))n.call(c,i)&&(s[i]=c[i]);if(r){u=r(c);for(var p=0;p<u.length;p++)t.call(c,u[p])&&(s[u[p]]=c[u[p]])}}return s}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,c={},i=null,p=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,t)&&!a.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:i,ref:p,props:c,_owner:u.current}}r.jsx=i,r.jsxs=i},541535:(e,r,n)=>{var t=n(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,s=60110,a=60112;r.Suspense=60113;var i=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),u=f("react.provider"),s=f("react.context"),a=f("react.forward_ref"),r.Suspense=f("react.suspense"),i=f("react.memo"),p=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}function v(){}function g(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(l(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var _=g.prototype=new v;_.constructor=g,t(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var t,c={},u=null,s=null;if(null!=r)for(t in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,t)&&!O.hasOwnProperty(t)&&(c[t]=r[t]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var i=Array(a),p=0;p<a;p++)i[p]=arguments[p+2];c.children=i}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===c[t]&&(c[t]=a[t]);return{$$typeof:o,type:e,key:u,ref:s,props:c,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,n,t,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return u=u(a=e),e=""===t?"."+x(a,0):t,Array.isArray(u)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),C(u,r,n,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(S,"$&/")+"/")+e)),r.push(u)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var p=t+x(s=e[i],i);a+=C(s,r,n,p,u)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),i=0;!(s=e.next()).done;)a+=C(s=s.value,r,n,p=t+x(s,i++),u);else if("object"===s)throw r=""+e,Error(l(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function E(e,r,n){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(l(321));return e}var D={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:E,forEach:function(e,r,n){E(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(l(143));return e}},r.Component=m,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,r,n){if(null==e)throw Error(l(267,e));var c=t({},e.props),u=e.key,s=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,a=b.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(p in r)j.call(r,p)&&!O.hasOwnProperty(p)&&(c[p]=void 0===r[p]&&void 0!==i?i[p]:r[p])}var p=arguments.length-2;if(1===p)c.children=n;else if(1<p){i=Array(p);for(var f=0;f<p;f++)i[f]=arguments[f+2];c.children=i}return{$$typeof:o,type:e.type,key:u,ref:s,props:c,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return R().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,n){return R().useReducer(e,r,n)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>s,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function s({components:e,children:r,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||u:c(e),t.createElement(o.Provider,{value:s},r)}}}]);