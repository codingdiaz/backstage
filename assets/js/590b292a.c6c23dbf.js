/*! For license information please see 590b292a.c6c23dbf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[264637],{806359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(824246),o=r(511151);const i={id:"plugin-ilert.ispluginapplicabletoentity",title:"isPluginApplicableToEntity",description:"API reference for isPluginApplicableToEntity"},u=void 0,c={unversionedId:"reference/plugin-ilert.ispluginapplicabletoentity",id:"reference/plugin-ilert.ispluginapplicabletoentity",title:"isPluginApplicableToEntity",description:"API reference for isPluginApplicableToEntity",source:"@site/../docs/reference/plugin-ilert.ispluginapplicabletoentity.md",sourceDirName:"reference",slug:"/reference/plugin-ilert.ispluginapplicabletoentity",permalink:"/docs/reference/plugin-ilert.ispluginapplicabletoentity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-ilert.ispluginapplicabletoentity.md",tags:[],version:"current",frontMatter:{id:"plugin-ilert.ispluginapplicabletoentity",title:"isPluginApplicableToEntity",description:"API reference for isPluginApplicableToEntity"}},a={},l=[];function s(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-ilert",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-ilert"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-ilert.ispluginapplicabletoentity",children:(0,n.jsx)(t.code,{children:"isPluginApplicableToEntity"})})]}),"\n",(0,n.jsx)(t.p,{children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"isPluginApplicableToEntity: (entity: Entity) => boolean\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,u,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in i=Object(arguments[a]))r.call(i,l)&&(c[l]=i[l]);if(t){u=t(i);for(var s=0;s<u.length;s++)n.call(i,u[s])&&(c[u[s]]=i[u[s]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,s=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:s,props:i,_owner:u.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,c=60110,a=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),u=f("react.provider"),c=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var m=v.prototype=new b;m.constructor=v,n(m,g.prototype),m.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,i={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,n)&&!E.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(1===a)i.children=r;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:_.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return u=u(a=e),e=""===n?"."+P(a,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),S(u,t,r,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),t.push(u)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=n+P(c=e[l],l);a+=S(c,t,r,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(c=e.next()).done;)a+=S(c=c.value,t,r,s=n+P(c,l++),u);else if("object"===c)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function C(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(y(321));return e}var A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(y(143));return e}},t.Component=g,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var i=n({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=_.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)j.call(t,s)&&!E.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:u,ref:c,props:i,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||u:i(e),n.createElement(o.Provider,{value:c},t)}}}]);