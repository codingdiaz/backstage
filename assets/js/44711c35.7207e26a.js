/*! For license information please see 44711c35.7207e26a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[515184],{922556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(824246),o=r(511151);const a={id:"config-loader.readconfigdataoptions.signal",title:"ReadConfigDataOptions.signal",description:"API reference for ReadConfigDataOptions.signal"},c=void 0,i={id:"reference/config-loader.readconfigdataoptions.signal",title:"ReadConfigDataOptions.signal",description:"API reference for ReadConfigDataOptions.signal",source:"@site/../docs/reference/config-loader.readconfigdataoptions.signal.md",sourceDirName:"reference",slug:"/reference/config-loader.readconfigdataoptions.signal",permalink:"/docs/reference/config-loader.readconfigdataoptions.signal",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config-loader.readconfigdataoptions.signal.md",tags:[],version:"current",frontMatter:{id:"config-loader.readconfigdataoptions.signal",title:"ReadConfigDataOptions.signal",description:"API reference for ReadConfigDataOptions.signal"}},u={},s=[];function f(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/config-loader",children:(0,n.jsx)(t.code,{children:"@backstage/config-loader"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/config-loader.readconfigdataoptions",children:(0,n.jsx)(t.code,{children:"ReadConfigDataOptions"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/config-loader.readconfigdataoptions.signal",children:(0,n.jsx)(t.code,{children:"signal"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"signal?: AbortSignal;\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,a={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:f,props:a,_owner:i.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function _(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var v=b.prototype=new _;v.constructor=b,g(v,m.prototype),v.isPureReactComponent=!0;var S=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,a={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,o)&&!R.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];a.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:r,type:e,key:c,ref:i,props:a,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,a,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return c=c(u=e),e=""===a?"."+w(u,0):a,S(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),O(c,t,o,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),t.push(c)),1;if(u=0,a=""===a?".":a+":",S(e))for(var s=0;s<e.length;s++){var f=a+w(i=e[s],s);u+=O(i,t,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(i=e.next()).done;)u+=O(i=i.value,t,o,f=a+w(i,s++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},A={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=c,t.PureComponent=b,t.StrictMode=a,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)k.call(t,s)&&!R.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:r,type:e.type,key:a,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,r){return D.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,r){return D.current.useReducer(e,t,r)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return D.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var n=r(667294);const o={},a=n.createContext(o);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);