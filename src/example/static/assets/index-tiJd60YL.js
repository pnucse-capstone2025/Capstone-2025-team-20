(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function P1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mc={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function W1(){if(A0)return Nl;A0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:n,type:s,key:d,ref:c!==void 0?c:null,props:f}}return Nl.Fragment=l,Nl.jsx=r,Nl.jsxs=r,Nl}var C0;function I1(){return C0||(C0=1,mc.exports=W1()),mc.exports}var v=I1(),gc={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function tb(){if(j0)return ct;j0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function O(E){return E===null||typeof E!="object"?null:(E=S&&E[S]||E["@@iterator"],typeof E=="function"?E:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,D={};function C(E,G,V){this.props=E,this.context=G,this.refs=D,this.updater=V||z}C.prototype.isReactComponent={},C.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},C.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function L(){}L.prototype=C.prototype;function q(E,G,V){this.props=E,this.context=G,this.refs=D,this.updater=V||z}var $=q.prototype=new L;$.constructor=q,A($,C.prototype),$.isPureReactComponent=!0;var J=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function K(E,G,V,F,at,mt){return V=mt.ref,{$$typeof:n,type:E,key:G,ref:V!==void 0?V:null,props:mt}}function P(E,G){return K(E.type,G,void 0,void 0,void 0,E.props)}function tt(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function vt(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(V){return G[V]})}var _t=/\/+/g;function Vt(E,G){return typeof E=="object"&&E!==null&&E.key!=null?vt(""+E.key):G.toString(36)}function sn(){}function un(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(sn,sn):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Zt(E,G,V,F,at){var mt=typeof E;(mt==="undefined"||mt==="boolean")&&(E=null);var rt=!1;if(E===null)rt=!0;else switch(mt){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(E.$$typeof){case n:case l:rt=!0;break;case g:return rt=E._init,Zt(rt(E._payload),G,V,F,at)}}if(rt)return at=at(E),rt=F===""?"."+Vt(E,0):F,J(at)?(V="",rt!=null&&(V=rt.replace(_t,"$&/")+"/"),Zt(at,G,V,"",function(ie){return ie})):at!=null&&(tt(at)&&(at=P(at,V+(at.key==null||E&&E.key===at.key?"":(""+at.key).replace(_t,"$&/")+"/")+rt)),G.push(at)),1;rt=0;var Ft=F===""?".":F+":";if(J(E))for(var wt=0;wt<E.length;wt++)F=E[wt],mt=Ft+Vt(F,wt),rt+=Zt(F,G,V,mt,at);else if(wt=O(E),typeof wt=="function")for(E=wt.call(E),wt=0;!(F=E.next()).done;)F=F.value,mt=Ft+Vt(F,wt++),rt+=Zt(F,G,V,mt,at);else if(mt==="object"){if(typeof E.then=="function")return Zt(un(E),G,V,F,at);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return rt}function H(E,G,V){if(E==null)return E;var F=[],at=0;return Zt(E,F,"","",function(mt){return G.call(V,mt,at++)}),F}function Z(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(V){(E._status===0||E._status===-1)&&(E._status=1,E._result=V)},function(V){(E._status===0||E._status===-1)&&(E._status=2,E._result=V)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var it=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function pt(){}return ct.Children={map:H,forEach:function(E,G,V){H(E,function(){G.apply(this,arguments)},V)},count:function(E){var G=0;return H(E,function(){G++}),G},toArray:function(E){return H(E,function(G){return G})||[]},only:function(E){if(!tt(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ct.Component=C,ct.Fragment=r,ct.Profiler=c,ct.PureComponent=q,ct.StrictMode=s,ct.Suspense=y,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ct.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},ct.cache=function(E){return function(){return E.apply(null,arguments)}},ct.cloneElement=function(E,G,V){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var F=A({},E.props),at=E.key,mt=void 0;if(G!=null)for(rt in G.ref!==void 0&&(mt=void 0),G.key!==void 0&&(at=""+G.key),G)!I.call(G,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&G.ref===void 0||(F[rt]=G[rt]);var rt=arguments.length-2;if(rt===1)F.children=V;else if(1<rt){for(var Ft=Array(rt),wt=0;wt<rt;wt++)Ft[wt]=arguments[wt+2];F.children=Ft}return K(E.type,at,void 0,void 0,mt,F)},ct.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},ct.createElement=function(E,G,V){var F,at={},mt=null;if(G!=null)for(F in G.key!==void 0&&(mt=""+G.key),G)I.call(G,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(at[F]=G[F]);var rt=arguments.length-2;if(rt===1)at.children=V;else if(1<rt){for(var Ft=Array(rt),wt=0;wt<rt;wt++)Ft[wt]=arguments[wt+2];at.children=Ft}if(E&&E.defaultProps)for(F in rt=E.defaultProps,rt)at[F]===void 0&&(at[F]=rt[F]);return K(E,mt,void 0,void 0,null,at)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(E){return{$$typeof:m,render:E}},ct.isValidElement=tt,ct.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:Z}},ct.memo=function(E,G){return{$$typeof:p,type:E,compare:G===void 0?null:G}},ct.startTransition=function(E){var G=X.T,V={};X.T=V;try{var F=E(),at=X.S;at!==null&&at(V,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(pt,it)}catch(mt){it(mt)}finally{X.T=G}},ct.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ct.use=function(E){return X.H.use(E)},ct.useActionState=function(E,G,V){return X.H.useActionState(E,G,V)},ct.useCallback=function(E,G){return X.H.useCallback(E,G)},ct.useContext=function(E){return X.H.useContext(E)},ct.useDebugValue=function(){},ct.useDeferredValue=function(E,G){return X.H.useDeferredValue(E,G)},ct.useEffect=function(E,G,V){var F=X.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(E,G)},ct.useId=function(){return X.H.useId()},ct.useImperativeHandle=function(E,G,V){return X.H.useImperativeHandle(E,G,V)},ct.useInsertionEffect=function(E,G){return X.H.useInsertionEffect(E,G)},ct.useLayoutEffect=function(E,G){return X.H.useLayoutEffect(E,G)},ct.useMemo=function(E,G){return X.H.useMemo(E,G)},ct.useOptimistic=function(E,G){return X.H.useOptimistic(E,G)},ct.useReducer=function(E,G,V){return X.H.useReducer(E,G,V)},ct.useRef=function(E){return X.H.useRef(E)},ct.useState=function(E){return X.H.useState(E)},ct.useSyncExternalStore=function(E,G,V){return X.H.useSyncExternalStore(E,G,V)},ct.useTransition=function(){return X.H.useTransition()},ct.version="19.1.1",ct}var z0;function uf(){return z0||(z0=1,gc.exports=tb()),gc.exports}var w=uf();const rn=P1(w);var yc={exports:{}},Bl={},vc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function eb(){return D0||(D0=1,(function(n){function l(H,Z){var it=H.length;H.push(Z);t:for(;0<it;){var pt=it-1>>>1,E=H[pt];if(0<c(E,Z))H[pt]=Z,H[it]=E,it=pt;else break t}}function r(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var Z=H[0],it=H.pop();if(it!==Z){H[0]=it;t:for(var pt=0,E=H.length,G=E>>>1;pt<G;){var V=2*(pt+1)-1,F=H[V],at=V+1,mt=H[at];if(0>c(F,it))at<E&&0>c(mt,F)?(H[pt]=mt,H[at]=it,pt=at):(H[pt]=F,H[V]=it,pt=V);else if(at<E&&0>c(mt,it))H[pt]=mt,H[at]=it,pt=at;else break t}}return Z}function c(H,Z){var it=H.sortIndex-Z.sortIndex;return it!==0?it:H.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var y=[],p=[],g=1,S=null,O=3,z=!1,A=!1,D=!1,C=!1,L=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function J(H){for(var Z=r(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=H)s(p),Z.sortIndex=Z.expirationTime,l(y,Z);else break;Z=r(p)}}function X(H){if(D=!1,J(H),!A)if(r(y)!==null)A=!0,I||(I=!0,Vt());else{var Z=r(p);Z!==null&&Zt(X,Z.startTime-H)}}var I=!1,K=-1,P=5,tt=-1;function vt(){return C?!0:!(n.unstable_now()-tt<P)}function _t(){if(C=!1,I){var H=n.unstable_now();tt=H;var Z=!0;try{t:{A=!1,D&&(D=!1,q(K),K=-1),z=!0;var it=O;try{e:{for(J(H),S=r(y);S!==null&&!(S.expirationTime>H&&vt());){var pt=S.callback;if(typeof pt=="function"){S.callback=null,O=S.priorityLevel;var E=pt(S.expirationTime<=H);if(H=n.unstable_now(),typeof E=="function"){S.callback=E,J(H),Z=!0;break e}S===r(y)&&s(y),J(H)}else s(y);S=r(y)}if(S!==null)Z=!0;else{var G=r(p);G!==null&&Zt(X,G.startTime-H),Z=!1}}break t}finally{S=null,O=it,z=!1}Z=void 0}}finally{Z?Vt():I=!1}}}var Vt;if(typeof $=="function")Vt=function(){$(_t)};else if(typeof MessageChannel<"u"){var sn=new MessageChannel,un=sn.port2;sn.port1.onmessage=_t,Vt=function(){un.postMessage(null)}}else Vt=function(){L(_t,0)};function Zt(H,Z){K=L(function(){H(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return O},n.unstable_next=function(H){switch(O){case 1:case 2:case 3:var Z=3;break;default:Z=O}var it=O;O=Z;try{return H()}finally{O=it}},n.unstable_requestPaint=function(){C=!0},n.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var it=O;O=H;try{return Z()}finally{O=it}},n.unstable_scheduleCallback=function(H,Z,it){var pt=n.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?pt+it:pt):it=pt,H){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=it+E,H={id:g++,callback:Z,priorityLevel:H,startTime:it,expirationTime:E,sortIndex:-1},it>pt?(H.sortIndex=it,l(p,H),r(y)===null&&H===r(p)&&(D?(q(K),K=-1):D=!0,Zt(X,it-pt))):(H.sortIndex=E,l(y,H),A||z||(A=!0,I||(I=!0,Vt()))),H},n.unstable_shouldYield=vt,n.unstable_wrapCallback=function(H){var Z=O;return function(){var it=O;O=Z;try{return H.apply(this,arguments)}finally{O=it}}}})(bc)),bc}var M0;function nb(){return M0||(M0=1,vc.exports=eb()),vc.exports}var xc={exports:{}},se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function ab(){if(_0)return se;_0=1;var n=uf();function l(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(y,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:y,containerInfo:p,implementation:g}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,se.createPortal=function(y,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return f(y,p,null,g)},se.flushSync=function(y){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,y)return y()}finally{d.T=p,s.p=g,s.d.f()}},se.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},se.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},se.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var g=p.as,S=m(g,p.crossOrigin),O=typeof p.integrity=="string"?p.integrity:void 0,z=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:O,fetchPriority:z}):g==="script"&&s.d.X(y,{crossOrigin:S,integrity:O,fetchPriority:z,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},se.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=m(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},se.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=m(g,p.crossOrigin);s.d.L(y,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},se.preloadModule=function(y,p){if(typeof y=="string")if(p){var g=m(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},se.requestFormReset=function(y){s.d.r(y)},se.unstable_batchedUpdates=function(y,p){return y(p)},se.useFormState=function(y,p,g){return d.H.useFormState(y,p,g)},se.useFormStatus=function(){return d.H.useHostTransitionStatus()},se.version="19.1.1",se}var U0;function ib(){if(U0)return xc.exports;U0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),xc.exports=ab(),xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function lb(){if(N0)return Bl;N0=1;var n=nb(),l=uf(),r=ib();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function y(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,i=e;;){var u=a.return;if(u===null)break;var o=u.alternate;if(o===null){if(i=u.return,i!==null){a=i;continue}break}if(u.child===o.child){for(o=u.child;o;){if(o===a)return m(u),t;if(o===i)return m(u),e;o=o.sibling}throw Error(s(188))}if(a.return!==i.return)a=u,i=o;else{for(var h=!1,b=u.child;b;){if(b===a){h=!0,a=u,i=o;break}if(b===i){h=!0,i=u,a=o;break}b=b.sibling}if(!h){for(b=o.child;b;){if(b===a){h=!0,a=o,i=u;break}if(b===i){h=!0,i=o,a=u;break}b=b.sibling}if(!h)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),$=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),tt=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),_t=Symbol.iterator;function Vt(t){return t===null||typeof t!="object"?null:(t=_t&&t[_t]||t["@@iterator"],typeof t=="function"?t:null)}var sn=Symbol.for("react.client.reference");function un(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===sn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case C:return"Profiler";case D:return"StrictMode";case X:return"Suspense";case I:return"SuspenseList";case tt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case z:return"Portal";case $:return(t.displayName||"Context")+".Provider";case q:return(t._context.displayName||"Context")+".Consumer";case J:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return e=t.displayName||null,e!==null?e:un(t.type)||"Memo";case P:e=t._payload,t=t._init;try{return un(t(e))}catch{}}return null}var Zt=Array.isArray,H=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},pt=[],E=-1;function G(t){return{current:t}}function V(t){0>E||(t.current=pt[E],pt[E]=null,E--)}function F(t,e){E++,pt[E]=t.current,t.current=e}var at=G(null),mt=G(null),rt=G(null),Ft=G(null);function wt(t,e){switch(F(rt,e),F(mt,t),F(at,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?e0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=e0(e),t=n0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(at),F(at,t)}function ie(){V(at),V(mt),V(rt)}function na(t){t.memoizedState!==null&&F(Ft,t);var e=at.current,a=n0(e,t.type);e!==a&&(F(mt,t),F(at,a))}function on(t){mt.current===t&&(V(at),V(mt)),Ft.current===t&&(V(Ft),zl._currentValue=it)}var je=Object.prototype.hasOwnProperty,eu=n.unstable_scheduleCallback,nu=n.unstable_cancelCallback,jy=n.unstable_shouldYield,zy=n.unstable_requestPaint,Pe=n.unstable_now,Dy=n.unstable_getCurrentPriorityLevel,Nf=n.unstable_ImmediatePriority,Bf=n.unstable_UserBlockingPriority,Il=n.unstable_NormalPriority,My=n.unstable_LowPriority,Lf=n.unstable_IdlePriority,_y=n.log,Uy=n.unstable_setDisableYieldValue,qi=null,be=null;function jn(t){if(typeof _y=="function"&&Uy(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(qi,t)}catch{}}var xe=Math.clz32?Math.clz32:Ly,Ny=Math.log,By=Math.LN2;function Ly(t){return t>>>=0,t===0?32:31-(Ny(t)/By|0)|0}var tr=256,er=4194304;function aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function nr(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var u=0,o=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var b=i&134217727;return b!==0?(i=b&~o,i!==0?u=aa(i):(h&=b,h!==0?u=aa(h):a||(a=b&~t,a!==0&&(u=aa(a))))):(b=i&~o,b!==0?u=aa(b):h!==0?u=aa(h):a||(a=i&~t,a!==0&&(u=aa(a)))),u===0?0:e!==0&&e!==u&&(e&o)===0&&(o=u&-u,a=e&-e,o>=a||o===32&&(a&4194048)!==0)?e:u}function Hi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qy(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(){var t=tr;return tr<<=1,(tr&4194048)===0&&(tr=256),t}function Hf(){var t=er;return er<<=1,(er&62914560)===0&&(er=4194304),t}function au(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function ki(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hy(t,e,a,i,u,o){var h=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,x=t.expirationTimes,_=t.hiddenUpdates;for(a=h&~a;0<a;){var k=31-xe(a),Q=1<<k;b[k]=0,x[k]=-1;var U=_[k];if(U!==null)for(_[k]=null,k=0;k<U.length;k++){var N=U[k];N!==null&&(N.lane&=-536870913)}a&=~Q}i!==0&&kf(t,i,0),o!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=o&~(h&~e))}function kf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-xe(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&4194090}function Yf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-xe(a),u=1<<i;u&e|t[i]&e&&(t[i]|=e),a&=~u}}function iu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qf(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:S0(t.type))}function ky(t,e){var a=Z.p;try{return Z.p=t,e()}finally{Z.p=a}}var zn=Math.random().toString(36).slice(2),le="__reactFiber$"+zn,de="__reactProps$"+zn,Ma="__reactContainer$"+zn,ru="__reactEvents$"+zn,Yy="__reactListeners$"+zn,Qy="__reactHandles$"+zn,Gf="__reactResources$"+zn,Yi="__reactMarker$"+zn;function su(t){delete t[le],delete t[de],delete t[ru],delete t[Yy],delete t[Qy]}function _a(t){var e=t[le];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ma]||a[le]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=r0(t);t!==null;){if(a=t[le])return a;t=r0(t)}return e}t=a,a=t.parentNode}return null}function Ua(t){if(t=t[le]||t[Ma]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Qi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Na(t){var e=t[Gf];return e||(e=t[Gf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[Yi]=!0}var $f=new Set,Xf={};function ia(t,e){Ba(t,e),Ba(t+"Capture",e)}function Ba(t,e){for(Xf[t]=e,t=0;t<e.length;t++)$f.add(e[t])}var Gy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kf={},Vf={};function $y(t){return je.call(Vf,t)?!0:je.call(Kf,t)?!1:Gy.test(t)?Vf[t]=!0:(Kf[t]=!0,!1)}function ar(t,e,a){if($y(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function ir(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function cn(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}var uu,Zf;function La(t){if(uu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||"",Zf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uu+t+Zf}var ou=!1;function cu(t,e){if(!t||ou)return"";ou=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(N){var U=N}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(N){U=N}t.call(Q.prototype)}}else{try{throw Error()}catch(N){U=N}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(N){if(N&&U&&typeof N.stack=="string")return[N.stack,U.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),h=o[0],b=o[1];if(h&&b){var x=h.split(`
`),_=b.split(`
`);for(u=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;u<_.length&&!_[u].includes("DetermineComponentFrameRoot");)u++;if(i===x.length||u===_.length)for(i=x.length-1,u=_.length-1;1<=i&&0<=u&&x[i]!==_[u];)u--;for(;1<=i&&0<=u;i--,u--)if(x[i]!==_[u]){if(i!==1||u!==1)do if(i--,u--,0>u||x[i]!==_[u]){var k=`
`+x[i].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=i&&0<=u);break}}}finally{ou=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?La(a):""}function Xy(t){switch(t.tag){case 26:case 27:case 5:return La(t.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return cu(t.type,!1);case 11:return cu(t.type.render,!1);case 1:return cu(t.type,!0);case 31:return La("Activity");default:return""}}function Ff(t){try{var e="";do e+=Xy(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ky(t){var e=Jf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(h){i=""+h,o.call(this,h)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lr(t){t._valueTracker||(t._valueTracker=Ky(t))}function Pf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=Jf(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function rr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vy=/[\n"\\]/g;function De(t){return t.replace(Vy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fu(t,e,a,i,u,o,h,b){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ze(e)):t.value!==""+ze(e)&&(t.value=""+ze(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?du(t,h,ze(e)):a!=null?du(t,h,ze(a)):i!=null&&t.removeAttribute("value"),u==null&&o!=null&&(t.defaultChecked=!!o),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ze(b):t.removeAttribute("name")}function Wf(t,e,a,i,u,o,h,b){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;a=a!=null?""+ze(a):"",e=e!=null?""+ze(e):a,b||e===t.value||(t.value=e),t.defaultValue=e}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=b?t.checked:!!i,t.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function du(t,e,a){e==="number"&&rr(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qa(t,e,a,i){if(t=t.options,e){e={};for(var u=0;u<a.length;u++)e["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=e.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&i&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),e=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,i&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function If(t,e,a){if(e!=null&&(e=""+ze(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ze(a):""}function td(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(s(92));if(Zt(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=ze(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i)}function Ha(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ed(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||Zy.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function nd(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var u in e)i=e[u],e.hasOwnProperty(u)&&a[u]!==i&&ed(t,u,i)}else for(var o in e)e.hasOwnProperty(o)&&ed(t,o,e[o])}function hu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sr(t){return Jy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ka=null,Ya=null;function ad(t){var e=Ua(t);if(e&&(t=e.stateNode)){var a=t[de]||null;t:switch(t=e.stateNode,e.type){case"input":if(fu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+De(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var u=i[de]||null;if(!u)throw Error(s(90));fu(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&Pf(i)}break t;case"textarea":If(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&qa(t,!!a.multiple,e,!1)}}}var gu=!1;function id(t,e,a){if(gu)return t(e,a);gu=!0;try{var i=t(e);return i}finally{if(gu=!1,(ka!==null||Ya!==null)&&(Kr(),ka&&(e=ka,t=Ya,Ya=ka=null,ad(e),t)))for(e=0;e<t.length;e++)ad(t[e])}}function Gi(t,e){var a=t.stateNode;if(a===null)return null;var i=a[de]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(fn)try{var $i={};Object.defineProperty($i,"passive",{get:function(){yu=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{yu=!1}var Dn=null,vu=null,ur=null;function ld(){if(ur)return ur;var t,e=vu,a=e.length,i,u="value"in Dn?Dn.value:Dn.textContent,o=u.length;for(t=0;t<a&&e[t]===u[t];t++);var h=a-t;for(i=1;i<=h&&e[a-i]===u[o-i];i++);return ur=u.slice(t,1<i?1-i:void 0)}function or(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cr(){return!0}function rd(){return!1}function he(t){function e(a,i,u,o,h){this._reactName=a,this._targetInst=u,this.type=i,this.nativeEvent=o,this.target=h,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(o):o[b]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:rd,this.isPropagationStopped=rd,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=he(la),Xi=g({},la,{view:0,detail:0}),Py=he(Xi),bu,xu,Ki,dr=g({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ki&&(Ki&&t.type==="mousemove"?(bu=t.screenX-Ki.screenX,xu=t.screenY-Ki.screenY):xu=bu=0,Ki=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),sd=he(dr),Wy=g({},dr,{dataTransfer:0}),Iy=he(Wy),tv=g({},Xi,{relatedTarget:0}),Su=he(tv),ev=g({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=he(ev),av=g({},la,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=he(av),lv=g({},la,{data:0}),ud=he(lv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uv[t])?!!e[t]:!1}function wu(){return ov}var cv=g({},Xi,{key:function(t){if(t.key){var e=rv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=or(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?or(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?or(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fv=he(cv),dv=g({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=he(dv),hv=g({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),pv=he(hv),mv=g({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=he(mv),yv=g({},dr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=he(yv),bv=g({},la,{newState:0,oldState:0}),xv=he(bv),Sv=[9,13,27,32],Eu=fn&&"CompositionEvent"in window,Vi=null;fn&&"documentMode"in document&&(Vi=document.documentMode);var wv=fn&&"TextEvent"in window&&!Vi,cd=fn&&(!Eu||Vi&&8<Vi&&11>=Vi),fd=" ",dd=!1;function hd(t,e){switch(t){case"keyup":return Sv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qa=!1;function Ev(t,e){switch(t){case"compositionend":return pd(e);case"keypress":return e.which!==32?null:(dd=!0,fd);case"textInput":return t=e.data,t===fd&&dd?null:t;default:return null}}function Rv(t,e){if(Qa)return t==="compositionend"||!Eu&&hd(t,e)?(t=ld(),ur=vu=Dn=null,Qa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cd&&e.locale!=="ko"?null:e.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tv[t.type]:e==="textarea"}function gd(t,e,a,i){ka?Ya?Ya.push(i):Ya=[i]:ka=i,e=Wr(e,"onChange"),0<e.length&&(a=new fr("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Zi=null,Fi=null;function Ov(t){Jp(t,0)}function hr(t){var e=Qi(t);if(Pf(e))return t}function yd(t,e){if(t==="change")return e}var vd=!1;if(fn){var Ru;if(fn){var Tu="oninput"in document;if(!Tu){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Tu=typeof bd.oninput=="function"}Ru=Tu}else Ru=!1;vd=Ru&&(!document.documentMode||9<document.documentMode)}function xd(){Zi&&(Zi.detachEvent("onpropertychange",Sd),Fi=Zi=null)}function Sd(t){if(t.propertyName==="value"&&hr(Fi)){var e=[];gd(e,Fi,t,mu(t)),id(Ov,e)}}function Av(t,e,a){t==="focusin"?(xd(),Zi=e,Fi=a,Zi.attachEvent("onpropertychange",Sd)):t==="focusout"&&xd()}function Cv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hr(Fi)}function jv(t,e){if(t==="click")return hr(e)}function zv(t,e){if(t==="input"||t==="change")return hr(e)}function Dv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Se=typeof Object.is=="function"?Object.is:Dv;function Ji(t,e){if(Se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var u=a[i];if(!je.call(e,u)||!Se(t[u],e[u]))return!1}return!0}function wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ed(t,e){var a=wd(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=wd(a)}}function Rd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Td(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=rr(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=rr(t.document)}return e}function Ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Mv=fn&&"documentMode"in document&&11>=document.documentMode,Ga=null,Au=null,Pi=null,Cu=!1;function Od(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Ga==null||Ga!==rr(i)||(i=Ga,"selectionStart"in i&&Ou(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pi&&Ji(Pi,i)||(Pi=i,i=Wr(Au,"onSelect"),0<i.length&&(e=new fr("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=Ga)))}function ra(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var $a={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},ju={},Ad={};fn&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function sa(t){if(ju[t])return ju[t];if(!$a[t])return t;var e=$a[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Ad)return ju[t]=e[a];return t}var Cd=sa("animationend"),jd=sa("animationiteration"),zd=sa("animationstart"),_v=sa("transitionrun"),Uv=sa("transitionstart"),Nv=sa("transitioncancel"),Dd=sa("transitionend"),Md=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Ge(t,e){Md.set(t,e),ia(e,[t])}var _d=new WeakMap;function Me(t,e){if(typeof t=="object"&&t!==null){var a=_d.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ff(e)},_d.set(t,e),e)}return{value:t,source:e,stack:Ff(e)}}var _e=[],Xa=0,Du=0;function pr(){for(var t=Xa,e=Du=Xa=0;e<t;){var a=_e[e];_e[e++]=null;var i=_e[e];_e[e++]=null;var u=_e[e];_e[e++]=null;var o=_e[e];if(_e[e++]=null,i!==null&&u!==null){var h=i.pending;h===null?u.next=u:(u.next=h.next,h.next=u),i.pending=u}o!==0&&Ud(a,u,o)}}function mr(t,e,a,i){_e[Xa++]=t,_e[Xa++]=e,_e[Xa++]=a,_e[Xa++]=i,Du|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Mu(t,e,a,i){return mr(t,e,a,i),gr(t)}function Ka(t,e){return mr(t,null,null,e),gr(t)}function Ud(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var u=!1,o=t.return;o!==null;)o.childLanes|=a,i=o.alternate,i!==null&&(i.childLanes|=a),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(u=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,u&&e!==null&&(u=31-xe(a),t=o.hiddenUpdates,i=t[u],i===null?t[u]=[e]:i.push(e),e.lane=a|536870912),o):null}function gr(t){if(50<wl)throw wl=0,Ho=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Va={};function Bv(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(t,e,a,i){return new Bv(t,e,a,i)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dn(t,e){var a=t.alternate;return a===null?(a=we(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Nd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function yr(t,e,a,i,u,o){var h=0;if(i=t,typeof t=="function")_u(t)&&(h=1);else if(typeof t=="string")h=q1(t,a,at.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case tt:return t=we(31,a,e,u),t.elementType=tt,t.lanes=o,t;case A:return ua(a.children,u,o,e);case D:h=8,u|=24;break;case C:return t=we(12,a,e,u|2),t.elementType=C,t.lanes=o,t;case X:return t=we(13,a,e,u),t.elementType=X,t.lanes=o,t;case I:return t=we(19,a,e,u),t.elementType=I,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:case $:h=10;break t;case q:h=9;break t;case J:h=11;break t;case K:h=14;break t;case P:h=16,i=null;break t}h=29,a=Error(s(130,t===null?"null":typeof t,"")),i=null}return e=we(h,a,e,u),e.elementType=t,e.type=i,e.lanes=o,e}function ua(t,e,a,i){return t=we(7,t,i,e),t.lanes=a,t}function Uu(t,e,a){return t=we(6,t,null,e),t.lanes=a,t}function Nu(t,e,a){return e=we(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Za=[],Fa=0,vr=null,br=0,Ue=[],Ne=0,oa=null,hn=1,pn="";function ca(t,e){Za[Fa++]=br,Za[Fa++]=vr,vr=t,br=e}function Bd(t,e,a){Ue[Ne++]=hn,Ue[Ne++]=pn,Ue[Ne++]=oa,oa=t;var i=hn;t=pn;var u=32-xe(i)-1;i&=~(1<<u),a+=1;var o=32-xe(e)+u;if(30<o){var h=u-u%5;o=(i&(1<<h)-1).toString(32),i>>=h,u-=h,hn=1<<32-xe(e)+u|a<<u|i,pn=o+t}else hn=1<<o|a<<u|i,pn=t}function Bu(t){t.return!==null&&(ca(t,1),Bd(t,1,0))}function Lu(t){for(;t===vr;)vr=Za[--Fa],Za[Fa]=null,br=Za[--Fa],Za[Fa]=null;for(;t===oa;)oa=Ue[--Ne],Ue[Ne]=null,pn=Ue[--Ne],Ue[Ne]=null,hn=Ue[--Ne],Ue[Ne]=null}var ce=null,Lt=null,St=!1,fa=null,We=!1,qu=Error(s(519));function da(t){var e=Error(s(418,""));throw tl(Me(e,t)),qu}function Ld(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[le]=t,e[de]=i,a){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(a=0;a<Rl.length;a++)yt(Rl[a],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),Wf(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),lr(e);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),td(e,i.value,i.defaultValue,i.children),lr(e)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||t0(e.textContent,a)?(i.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),i.onScroll!=null&&yt("scroll",e),i.onScrollEnd!=null&&yt("scrollend",e),i.onClick!=null&&(e.onclick=Ir),e=!0):e=!1,e||da(t)}function qd(t){for(ce=t.return;ce;)switch(ce.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:ce=ce.return}}function Wi(t){if(t!==ce)return!1;if(!St)return qd(t),St=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ec(t.type,t.memoizedProps)),a=!a),a&&Lt&&da(t),qd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Lt=Xe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Lt=null}}else e===27?(e=Lt,Vn(t.type)?(t=lc,lc=null,Lt=t):Lt=e):Lt=ce?Xe(t.stateNode.nextSibling):null;return!0}function Ii(){Lt=ce=null,St=!1}function Hd(){var t=fa;return t!==null&&(ge===null?ge=t:ge.push.apply(ge,t),fa=null),t}function tl(t){fa===null?fa=[t]:fa.push(t)}var Hu=G(null),ha=null,mn=null;function Mn(t,e,a){F(Hu,e._currentValue),e._currentValue=a}function gn(t){t._currentValue=Hu.current,V(Hu)}function ku(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function Yu(t,e,a,i){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var o=u.dependencies;if(o!==null){var h=u.child;o=o.firstContext;t:for(;o!==null;){var b=o;o=u;for(var x=0;x<e.length;x++)if(b.context===e[x]){o.lanes|=a,b=o.alternate,b!==null&&(b.lanes|=a),ku(o.return,a,t),i||(h=null);break t}o=b.next}}else if(u.tag===18){if(h=u.return,h===null)throw Error(s(341));h.lanes|=a,o=h.alternate,o!==null&&(o.lanes|=a),ku(h,a,t),h=null}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===t){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}}function el(t,e,a,i){t=null;for(var u=e,o=!1;u!==null;){if(!o){if((u.flags&524288)!==0)o=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var h=u.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var b=u.type;Se(u.pendingProps.value,h.value)||(t!==null?t.push(b):t=[b])}}else if(u===Ft.current){if(h=u.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zl):t=[zl])}u=u.return}t!==null&&Yu(e,t,a,i),e.flags|=262144}function xr(t){for(t=t.firstContext;t!==null;){if(!Se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pa(t){ha=t,mn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function re(t){return kd(ha,t)}function Sr(t,e){return ha===null&&pa(t),kd(t,e)}function kd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},mn===null){if(t===null)throw Error(s(308));mn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else mn=mn.next=e;return a}var Lv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},qv=n.unstable_scheduleCallback,Hv=n.unstable_NormalPriority,$t={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new Lv,data:new Map,refCount:0}}function nl(t){t.refCount--,t.refCount===0&&qv(Hv,function(){t.controller.abort()})}var al=null,Gu=0,Ja=0,Pa=null;function kv(t,e){if(al===null){var a=al=[];Gu=0,Ja=Ko(),Pa={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Gu++,e.then(Yd,Yd),e}function Yd(){if(--Gu===0&&al!==null){Pa!==null&&(Pa.status="fulfilled");var t=al;al=null,Ja=0,Pa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Yv(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var u=0;u<a.length;u++)(0,a[u])(e)},function(u){for(i.status="rejected",i.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),i}var Qd=H.S;H.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&kv(t,e),Qd!==null&&Qd(t,e)};var ma=G(null);function $u(){var t=ma.current;return t!==null?t:Dt.pooledCache}function wr(t,e){e===null?F(ma,ma.current):F(ma,e.pool)}function Gd(){var t=$u();return t===null?null:{parent:$t._currentValue,pool:t}}var il=Error(s(460)),$d=Error(s(474)),Er=Error(s(542)),Xu={then:function(){}};function Xd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rr(){}function Kd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Rr,Rr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zd(t),t;default:if(typeof e.status=="string")e.then(Rr,Rr);else{if(t=Dt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=i}},function(i){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zd(t),t}throw ll=e,il}}var ll=null;function Vd(){if(ll===null)throw Error(s(459));var t=ll;return ll=null,t}function Zd(t){if(t===il||t===Er)throw Error(s(483))}var _n=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Un(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Rt&2)!==0){var u=i.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),i.pending=e,e=gr(t),Ud(t,null,a),e}return mr(t,i,e,a),gr(t)}function rl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Yf(t,a)}}function Zu(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var u=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var h={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?u=o=h:o=o.next=h,a=a.next}while(a!==null);o===null?u=o=e:o=o.next=e}else u=o=e;a={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Fu=!1;function sl(){if(Fu){var t=Pa;if(t!==null)throw t}}function ul(t,e,a,i){Fu=!1;var u=t.updateQueue;_n=!1;var o=u.firstBaseUpdate,h=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var x=b,_=x.next;x.next=null,h===null?o=_:h.next=_,h=x;var k=t.alternate;k!==null&&(k=k.updateQueue,b=k.lastBaseUpdate,b!==h&&(b===null?k.firstBaseUpdate=_:b.next=_,k.lastBaseUpdate=x))}if(o!==null){var Q=u.baseState;h=0,k=_=x=null,b=o;do{var U=b.lane&-536870913,N=U!==b.lane;if(N?(bt&U)===U:(i&U)===U){U!==0&&U===Ja&&(Fu=!0),k!==null&&(k=k.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ut=t,lt=b;U=e;var Ct=a;switch(lt.tag){case 1:if(ut=lt.payload,typeof ut=="function"){Q=ut.call(Ct,Q,U);break t}Q=ut;break t;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=lt.payload,U=typeof ut=="function"?ut.call(Ct,Q,U):ut,U==null)break t;Q=g({},Q,U);break t;case 2:_n=!0}}U=b.callback,U!==null&&(t.flags|=64,N&&(t.flags|=8192),N=u.callbacks,N===null?u.callbacks=[U]:N.push(U))}else N={lane:U,tag:b.tag,payload:b.payload,callback:b.callback,next:null},k===null?(_=k=N,x=Q):k=k.next=N,h|=U;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;N=b,b=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);k===null&&(x=Q),u.baseState=x,u.firstBaseUpdate=_,u.lastBaseUpdate=k,o===null&&(u.shared.lanes=0),Gn|=h,t.lanes=h,t.memoizedState=Q}}function Fd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Jd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fd(a[t],e)}var Wa=G(null),Tr=G(0);function Pd(t,e){t=En,F(Tr,t),F(Wa,e),En=t|e.baseLanes}function Ju(){F(Tr,En),F(Wa,Wa.current)}function Pu(){En=Tr.current,V(Wa),V(Tr)}var Bn=0,dt=null,Ot=null,Yt=null,Or=!1,Ia=!1,ga=!1,Ar=0,ol=0,ti=null,Qv=0;function Ht(){throw Error(s(321))}function Wu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Se(t[a],e[a]))return!1;return!0}function Iu(t,e,a,i,u,o){return Bn=o,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,H.H=t===null||t.memoizedState===null?Uh:Nh,ga=!1,o=a(i,u),ga=!1,Ia&&(o=Id(e,a,i,u)),Wd(t),o}function Wd(t){H.H=_r;var e=Ot!==null&&Ot.next!==null;if(Bn=0,Yt=Ot=dt=null,Or=!1,ol=0,ti=null,e)throw Error(s(300));t===null||Pt||(t=t.dependencies,t!==null&&xr(t)&&(Pt=!0))}function Id(t,e,a,i){dt=t;var u=0;do{if(Ia&&(ti=null),ol=0,Ia=!1,25<=u)throw Error(s(301));if(u+=1,Yt=Ot=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H.H=Fv,o=e(a,i)}while(Ia);return o}function Gv(){var t=H.H,e=t.useState()[0];return e=typeof e.then=="function"?cl(e):e,t=t.useState()[0],(Ot!==null?Ot.memoizedState:null)!==t&&(dt.flags|=1024),e}function to(){var t=Ar!==0;return Ar=0,t}function eo(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function no(t){if(Or){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Or=!1}Bn=0,Yt=Ot=dt=null,Ia=!1,ol=Ar=0,ti=null}function pe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?dt.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Qt(){if(Ot===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Yt===null?dt.memoizedState:Yt.next;if(e!==null)Yt=e,Ot=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Yt===null?dt.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(t){var e=ol;return ol+=1,ti===null&&(ti=[]),t=Kd(ti,t,e),e=dt,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,H.H=e===null||e.memoizedState===null?Uh:Nh),t}function Cr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return cl(t);if(t.$$typeof===$)return re(t)}throw Error(s(438,String(t)))}function io(t){var e=null,a=dt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=dt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ao(),dt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=vt;return e.index++,a}function yn(t,e){return typeof e=="function"?e(t):e}function jr(t){var e=Qt();return lo(e,Ot,t)}function lo(t,e,a){var i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var u=t.baseQueue,o=i.pending;if(o!==null){if(u!==null){var h=u.next;u.next=o.next,o.next=h}e.baseQueue=u=o,i.pending=null}if(o=t.baseState,u===null)t.memoizedState=o;else{e=u.next;var b=h=null,x=null,_=e,k=!1;do{var Q=_.lane&-536870913;if(Q!==_.lane?(bt&Q)===Q:(Bn&Q)===Q){var U=_.revertLane;if(U===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),Q===Ja&&(k=!0);else if((Bn&U)===U){_=_.next,U===Ja&&(k=!0);continue}else Q={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},x===null?(b=x=Q,h=o):x=x.next=Q,dt.lanes|=U,Gn|=U;Q=_.action,ga&&a(o,Q),o=_.hasEagerState?_.eagerState:a(o,Q)}else U={lane:Q,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},x===null?(b=x=U,h=o):x=x.next=U,dt.lanes|=Q,Gn|=Q;_=_.next}while(_!==null&&_!==e);if(x===null?h=o:x.next=b,!Se(o,t.memoizedState)&&(Pt=!0,k&&(a=Pa,a!==null)))throw a;t.memoizedState=o,t.baseState=h,t.baseQueue=x,i.lastRenderedState=o}return u===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ro(t){var e=Qt(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var i=a.dispatch,u=a.pending,o=e.memoizedState;if(u!==null){a.pending=null;var h=u=u.next;do o=t(o,h.action),h=h.next;while(h!==u);Se(o,e.memoizedState)||(Pt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),a.lastRenderedState=o}return[o,i]}function th(t,e,a){var i=dt,u=Qt(),o=St;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=e();var h=!Se((Ot||u).memoizedState,a);h&&(u.memoizedState=a,Pt=!0),u=u.queue;var b=ah.bind(null,i,u,t);if(fl(2048,8,b,[t]),u.getSnapshot!==e||h||Yt!==null&&Yt.memoizedState.tag&1){if(i.flags|=2048,ei(9,zr(),nh.bind(null,i,u,a,e),null),Dt===null)throw Error(s(349));o||(Bn&124)!==0||eh(i,e,a)}return a}function eh(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=dt.updateQueue,e===null?(e=ao(),dt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function nh(t,e,a,i){e.value=a,e.getSnapshot=i,ih(e)&&lh(t)}function ah(t,e,a){return a(function(){ih(e)&&lh(t)})}function ih(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Se(t,a)}catch{return!0}}function lh(t){var e=Ka(t,2);e!==null&&Ae(e,t,2)}function so(t){var e=pe();if(typeof t=="function"){var a=t;if(t=a(),ga){jn(!0);try{a()}finally{jn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:t},e}function rh(t,e,a,i){return t.baseState=a,lo(t,Ot,typeof i=="function"?i:yn)}function $v(t,e,a,i,u){if(Mr(t))throw Error(s(485));if(t=e.action,t!==null){var o={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){o.listeners.push(h)}};H.T!==null?a(!0):o.isTransition=!1,i(o),a=e.pending,a===null?(o.next=e.pending=o,sh(e,o)):(o.next=a.next,e.pending=a.next=o)}}function sh(t,e){var a=e.action,i=e.payload,u=t.state;if(e.isTransition){var o=H.T,h={};H.T=h;try{var b=a(u,i),x=H.S;x!==null&&x(h,b),uh(t,e,b)}catch(_){uo(t,e,_)}finally{H.T=o}}else try{o=a(u,i),uh(t,e,o)}catch(_){uo(t,e,_)}}function uh(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){oh(t,e,i)},function(i){return uo(t,e,i)}):oh(t,e,a)}function oh(t,e,a){e.status="fulfilled",e.value=a,ch(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,sh(t,a)))}function uo(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,ch(e),e=e.next;while(e!==i)}t.action=null}function ch(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function fh(t,e){return e}function dh(t,e){if(St){var a=Dt.formState;if(a!==null){t:{var i=dt;if(St){if(Lt){e:{for(var u=Lt,o=We;u.nodeType!==8;){if(!o){u=null;break e}if(u=Xe(u.nextSibling),u===null){u=null;break e}}o=u.data,u=o==="F!"||o==="F"?u:null}if(u){Lt=Xe(u.nextSibling),i=u.data==="F!";break t}}da(i)}i=!1}i&&(e=a[0])}}return a=pe(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fh,lastRenderedState:e},a.queue=i,a=Dh.bind(null,dt,i),i.dispatch=a,i=so(!1),o=po.bind(null,dt,!1,i.queue),i=pe(),u={state:e,dispatch:null,action:t,pending:null},i.queue=u,a=$v.bind(null,dt,u,o,a),u.dispatch=a,i.memoizedState=t,[e,a,!1]}function hh(t){var e=Qt();return ph(e,Ot,t)}function ph(t,e,a){if(e=lo(t,e,fh)[0],t=jr(yn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=cl(e)}catch(h){throw h===il?Er:h}else i=e;e=Qt();var u=e.queue,o=u.dispatch;return a!==e.memoizedState&&(dt.flags|=2048,ei(9,zr(),Xv.bind(null,u,a),null)),[i,o,t]}function Xv(t,e){t.action=e}function mh(t){var e=Qt(),a=Ot;if(a!==null)return ph(e,a,t);Qt(),e=e.memoizedState,a=Qt();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function ei(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=dt.updateQueue,e===null&&(e=ao(),dt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function zr(){return{destroy:void 0,resource:void 0}}function gh(){return Qt().memoizedState}function Dr(t,e,a,i){var u=pe();i=i===void 0?null:i,dt.flags|=t,u.memoizedState=ei(1|e,zr(),a,i)}function fl(t,e,a,i){var u=Qt();i=i===void 0?null:i;var o=u.memoizedState.inst;Ot!==null&&i!==null&&Wu(i,Ot.memoizedState.deps)?u.memoizedState=ei(e,o,a,i):(dt.flags|=t,u.memoizedState=ei(1|e,o,a,i))}function yh(t,e){Dr(8390656,8,t,e)}function vh(t,e){fl(2048,8,t,e)}function bh(t,e){return fl(4,2,t,e)}function xh(t,e){return fl(4,4,t,e)}function Sh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wh(t,e,a){a=a!=null?a.concat([t]):null,fl(4,4,Sh.bind(null,e,t),a)}function oo(){}function Eh(t,e){var a=Qt();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&Wu(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function Rh(t,e){var a=Qt();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&Wu(e,i[1]))return i[0];if(i=t(),ga){jn(!0);try{t()}finally{jn(!1)}}return a.memoizedState=[i,e],i}function co(t,e,a){return a===void 0||(Bn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Ap(),dt.lanes|=t,Gn|=t,a)}function Th(t,e,a,i){return Se(a,e)?a:Wa.current!==null?(t=co(t,a,i),Se(t,e)||(Pt=!0),t):(Bn&42)===0?(Pt=!0,t.memoizedState=a):(t=Ap(),dt.lanes|=t,Gn|=t,e)}function Oh(t,e,a,i,u){var o=Z.p;Z.p=o!==0&&8>o?o:8;var h=H.T,b={};H.T=b,po(t,!1,e,a);try{var x=u(),_=H.S;if(_!==null&&_(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var k=Yv(x,i);dl(t,e,k,Oe(t))}else dl(t,e,i,Oe(t))}catch(Q){dl(t,e,{then:function(){},status:"rejected",reason:Q},Oe())}finally{Z.p=o,H.T=h}}function Kv(){}function fo(t,e,a,i){if(t.tag!==5)throw Error(s(476));var u=Ah(t).queue;Oh(t,u,e,it,a===null?Kv:function(){return Ch(t),a(i)})}function Ah(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:it},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ch(t){var e=Ah(t).next.queue;dl(t,e,{},Oe())}function ho(){return re(zl)}function jh(){return Qt().memoizedState}function zh(){return Qt().memoizedState}function Vv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Oe();t=Un(a);var i=Nn(e,t,a);i!==null&&(Ae(i,e,a),rl(i,e,a)),e={cache:Qu()},t.payload=e;return}e=e.return}}function Zv(t,e,a){var i=Oe();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Mr(t)?Mh(e,a):(a=Mu(t,e,a,i),a!==null&&(Ae(a,t,i),_h(a,e,i)))}function Dh(t,e,a){var i=Oe();dl(t,e,a,i)}function dl(t,e,a,i){var u={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mr(t))Mh(e,u);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var h=e.lastRenderedState,b=o(h,a);if(u.hasEagerState=!0,u.eagerState=b,Se(b,h))return mr(t,e,u,0),Dt===null&&pr(),!1}catch{}finally{}if(a=Mu(t,e,u,i),a!==null)return Ae(a,t,i),_h(a,e,i),!0}return!1}function po(t,e,a,i){if(i={lane:2,revertLane:Ko(),action:i,hasEagerState:!1,eagerState:null,next:null},Mr(t)){if(e)throw Error(s(479))}else e=Mu(t,a,i,2),e!==null&&Ae(e,t,2)}function Mr(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Mh(t,e){Ia=Or=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function _h(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Yf(t,a)}}var _r={readContext:re,use:Cr,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useLayoutEffect:Ht,useInsertionEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useSyncExternalStore:Ht,useId:Ht,useHostTransitionStatus:Ht,useFormState:Ht,useActionState:Ht,useOptimistic:Ht,useMemoCache:Ht,useCacheRefresh:Ht},Uh={readContext:re,use:Cr,useCallback:function(t,e){return pe().memoizedState=[t,e===void 0?null:e],t},useContext:re,useEffect:yh,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Dr(4194308,4,Sh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Dr(4194308,4,t,e)},useInsertionEffect:function(t,e){Dr(4,2,t,e)},useMemo:function(t,e){var a=pe();e=e===void 0?null:e;var i=t();if(ga){jn(!0);try{t()}finally{jn(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=pe();if(a!==void 0){var u=a(e);if(ga){jn(!0);try{a(e)}finally{jn(!1)}}}else u=e;return i.memoizedState=i.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},i.queue=t,t=t.dispatch=Zv.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=pe();return t={current:t},e.memoizedState=t},useState:function(t){t=so(t);var e=t.queue,a=Dh.bind(null,dt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:oo,useDeferredValue:function(t,e){var a=pe();return co(a,t,e)},useTransition:function(){var t=so(!1);return t=Oh.bind(null,dt,t.queue,!0,!1),pe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=dt,u=pe();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),Dt===null)throw Error(s(349));(bt&124)!==0||eh(i,e,a)}u.memoizedState=a;var o={value:a,getSnapshot:e};return u.queue=o,yh(ah.bind(null,i,o,t),[t]),i.flags|=2048,ei(9,zr(),nh.bind(null,i,o,a,e),null),a},useId:function(){var t=pe(),e=Dt.identifierPrefix;if(St){var a=pn,i=hn;a=(i&~(1<<32-xe(i)-1)).toString(32)+a,e="«"+e+"R"+a,a=Ar++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Qv++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ho,useFormState:dh,useActionState:dh,useOptimistic:function(t){var e=pe();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=po.bind(null,dt,!0,a),a.dispatch=e,[t,e]},useMemoCache:io,useCacheRefresh:function(){return pe().memoizedState=Vv.bind(null,dt)}},Nh={readContext:re,use:Cr,useCallback:Eh,useContext:re,useEffect:vh,useImperativeHandle:wh,useInsertionEffect:bh,useLayoutEffect:xh,useMemo:Rh,useReducer:jr,useRef:gh,useState:function(){return jr(yn)},useDebugValue:oo,useDeferredValue:function(t,e){var a=Qt();return Th(a,Ot.memoizedState,t,e)},useTransition:function(){var t=jr(yn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:cl(t),e]},useSyncExternalStore:th,useId:jh,useHostTransitionStatus:ho,useFormState:hh,useActionState:hh,useOptimistic:function(t,e){var a=Qt();return rh(a,Ot,t,e)},useMemoCache:io,useCacheRefresh:zh},Fv={readContext:re,use:Cr,useCallback:Eh,useContext:re,useEffect:vh,useImperativeHandle:wh,useInsertionEffect:bh,useLayoutEffect:xh,useMemo:Rh,useReducer:ro,useRef:gh,useState:function(){return ro(yn)},useDebugValue:oo,useDeferredValue:function(t,e){var a=Qt();return Ot===null?co(a,t,e):Th(a,Ot.memoizedState,t,e)},useTransition:function(){var t=ro(yn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:cl(t),e]},useSyncExternalStore:th,useId:jh,useHostTransitionStatus:ho,useFormState:mh,useActionState:mh,useOptimistic:function(t,e){var a=Qt();return Ot!==null?rh(a,Ot,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:io,useCacheRefresh:zh},ni=null,hl=0;function Ur(t){var e=hl;return hl+=1,ni===null&&(ni=[]),Kd(ni,t,e)}function pl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Nr(t,e){throw e.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Bh(t){var e=t._init;return e(t._payload)}function Lh(t){function e(j,R){if(t){var M=j.deletions;M===null?(j.deletions=[R],j.flags|=16):M.push(R)}}function a(j,R){if(!t)return null;for(;R!==null;)e(j,R),R=R.sibling;return null}function i(j){for(var R=new Map;j!==null;)j.key!==null?R.set(j.key,j):R.set(j.index,j),j=j.sibling;return R}function u(j,R){return j=dn(j,R),j.index=0,j.sibling=null,j}function o(j,R,M){return j.index=M,t?(M=j.alternate,M!==null?(M=M.index,M<R?(j.flags|=67108866,R):M):(j.flags|=67108866,R)):(j.flags|=1048576,R)}function h(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function b(j,R,M,Y){return R===null||R.tag!==6?(R=Uu(M,j.mode,Y),R.return=j,R):(R=u(R,M),R.return=j,R)}function x(j,R,M,Y){var W=M.type;return W===A?k(j,R,M.props.children,Y,M.key):R!==null&&(R.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===P&&Bh(W)===R.type)?(R=u(R,M.props),pl(R,M),R.return=j,R):(R=yr(M.type,M.key,M.props,null,j.mode,Y),pl(R,M),R.return=j,R)}function _(j,R,M,Y){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=Nu(M,j.mode,Y),R.return=j,R):(R=u(R,M.children||[]),R.return=j,R)}function k(j,R,M,Y,W){return R===null||R.tag!==7?(R=ua(M,j.mode,Y,W),R.return=j,R):(R=u(R,M),R.return=j,R)}function Q(j,R,M){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Uu(""+R,j.mode,M),R.return=j,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case O:return M=yr(R.type,R.key,R.props,null,j.mode,M),pl(M,R),M.return=j,M;case z:return R=Nu(R,j.mode,M),R.return=j,R;case P:var Y=R._init;return R=Y(R._payload),Q(j,R,M)}if(Zt(R)||Vt(R))return R=ua(R,j.mode,M,null),R.return=j,R;if(typeof R.then=="function")return Q(j,Ur(R),M);if(R.$$typeof===$)return Q(j,Sr(j,R),M);Nr(j,R)}return null}function U(j,R,M,Y){var W=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return W!==null?null:b(j,R,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case O:return M.key===W?x(j,R,M,Y):null;case z:return M.key===W?_(j,R,M,Y):null;case P:return W=M._init,M=W(M._payload),U(j,R,M,Y)}if(Zt(M)||Vt(M))return W!==null?null:k(j,R,M,Y,null);if(typeof M.then=="function")return U(j,R,Ur(M),Y);if(M.$$typeof===$)return U(j,R,Sr(j,M),Y);Nr(j,M)}return null}function N(j,R,M,Y,W){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return j=j.get(M)||null,b(R,j,""+Y,W);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case O:return j=j.get(Y.key===null?M:Y.key)||null,x(R,j,Y,W);case z:return j=j.get(Y.key===null?M:Y.key)||null,_(R,j,Y,W);case P:var ht=Y._init;return Y=ht(Y._payload),N(j,R,M,Y,W)}if(Zt(Y)||Vt(Y))return j=j.get(M)||null,k(R,j,Y,W,null);if(typeof Y.then=="function")return N(j,R,M,Ur(Y),W);if(Y.$$typeof===$)return N(j,R,M,Sr(R,Y),W);Nr(R,Y)}return null}function ut(j,R,M,Y){for(var W=null,ht=null,et=R,st=R=0,It=null;et!==null&&st<M.length;st++){et.index>st?(It=et,et=null):It=et.sibling;var xt=U(j,et,M[st],Y);if(xt===null){et===null&&(et=It);break}t&&et&&xt.alternate===null&&e(j,et),R=o(xt,R,st),ht===null?W=xt:ht.sibling=xt,ht=xt,et=It}if(st===M.length)return a(j,et),St&&ca(j,st),W;if(et===null){for(;st<M.length;st++)et=Q(j,M[st],Y),et!==null&&(R=o(et,R,st),ht===null?W=et:ht.sibling=et,ht=et);return St&&ca(j,st),W}for(et=i(et);st<M.length;st++)It=N(et,j,st,M[st],Y),It!==null&&(t&&It.alternate!==null&&et.delete(It.key===null?st:It.key),R=o(It,R,st),ht===null?W=It:ht.sibling=It,ht=It);return t&&et.forEach(function(Wn){return e(j,Wn)}),St&&ca(j,st),W}function lt(j,R,M,Y){if(M==null)throw Error(s(151));for(var W=null,ht=null,et=R,st=R=0,It=null,xt=M.next();et!==null&&!xt.done;st++,xt=M.next()){et.index>st?(It=et,et=null):It=et.sibling;var Wn=U(j,et,xt.value,Y);if(Wn===null){et===null&&(et=It);break}t&&et&&Wn.alternate===null&&e(j,et),R=o(Wn,R,st),ht===null?W=Wn:ht.sibling=Wn,ht=Wn,et=It}if(xt.done)return a(j,et),St&&ca(j,st),W;if(et===null){for(;!xt.done;st++,xt=M.next())xt=Q(j,xt.value,Y),xt!==null&&(R=o(xt,R,st),ht===null?W=xt:ht.sibling=xt,ht=xt);return St&&ca(j,st),W}for(et=i(et);!xt.done;st++,xt=M.next())xt=N(et,j,st,xt.value,Y),xt!==null&&(t&&xt.alternate!==null&&et.delete(xt.key===null?st:xt.key),R=o(xt,R,st),ht===null?W=xt:ht.sibling=xt,ht=xt);return t&&et.forEach(function(J1){return e(j,J1)}),St&&ca(j,st),W}function Ct(j,R,M,Y){if(typeof M=="object"&&M!==null&&M.type===A&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case O:t:{for(var W=M.key;R!==null;){if(R.key===W){if(W=M.type,W===A){if(R.tag===7){a(j,R.sibling),Y=u(R,M.props.children),Y.return=j,j=Y;break t}}else if(R.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===P&&Bh(W)===R.type){a(j,R.sibling),Y=u(R,M.props),pl(Y,M),Y.return=j,j=Y;break t}a(j,R);break}else e(j,R);R=R.sibling}M.type===A?(Y=ua(M.props.children,j.mode,Y,M.key),Y.return=j,j=Y):(Y=yr(M.type,M.key,M.props,null,j.mode,Y),pl(Y,M),Y.return=j,j=Y)}return h(j);case z:t:{for(W=M.key;R!==null;){if(R.key===W)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){a(j,R.sibling),Y=u(R,M.children||[]),Y.return=j,j=Y;break t}else{a(j,R);break}else e(j,R);R=R.sibling}Y=Nu(M,j.mode,Y),Y.return=j,j=Y}return h(j);case P:return W=M._init,M=W(M._payload),Ct(j,R,M,Y)}if(Zt(M))return ut(j,R,M,Y);if(Vt(M)){if(W=Vt(M),typeof W!="function")throw Error(s(150));return M=W.call(M),lt(j,R,M,Y)}if(typeof M.then=="function")return Ct(j,R,Ur(M),Y);if(M.$$typeof===$)return Ct(j,R,Sr(j,M),Y);Nr(j,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,R!==null&&R.tag===6?(a(j,R.sibling),Y=u(R,M),Y.return=j,j=Y):(a(j,R),Y=Uu(M,j.mode,Y),Y.return=j,j=Y),h(j)):a(j,R)}return function(j,R,M,Y){try{hl=0;var W=Ct(j,R,M,Y);return ni=null,W}catch(et){if(et===il||et===Er)throw et;var ht=we(29,et,null,j.mode);return ht.lanes=Y,ht.return=j,ht}finally{}}}var ai=Lh(!0),qh=Lh(!1),Be=G(null),Ie=null;function Ln(t){var e=t.alternate;F(Xt,Xt.current&1),F(Be,t),Ie===null&&(e===null||Wa.current!==null||e.memoizedState!==null)&&(Ie=t)}function Hh(t){if(t.tag===22){if(F(Xt,Xt.current),F(Be,t),Ie===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ie=t)}}else qn()}function qn(){F(Xt,Xt.current),F(Be,Be.current)}function vn(t){V(Be),Ie===t&&(Ie=null),V(Xt)}var Xt=G(0);function Br(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ic(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function mo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:g({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var go={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=Oe(),u=Un(i);u.payload=e,a!=null&&(u.callback=a),e=Nn(t,u,i),e!==null&&(Ae(e,t,i),rl(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=Oe(),u=Un(i);u.tag=1,u.payload=e,a!=null&&(u.callback=a),e=Nn(t,u,i),e!==null&&(Ae(e,t,i),rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Oe(),i=Un(a);i.tag=2,e!=null&&(i.callback=e),e=Nn(t,i,a),e!==null&&(Ae(e,t,a),rl(e,t,a))}};function kh(t,e,a,i,u,o,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,h):e.prototype&&e.prototype.isPureReactComponent?!Ji(a,i)||!Ji(u,o):!0}function Yh(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&go.enqueueReplaceState(e,e.state,null)}function ya(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Lr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qh(t){Lr(t)}function Gh(t){console.error(t)}function $h(t){Lr(t)}function qr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Xh(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yo(t,e,a){return a=Un(a),a.tag=3,a.payload={element:null},a.callback=function(){qr(t,e)},a}function Kh(t){return t=Un(t),t.tag=3,t}function Vh(t,e,a,i){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var o=i.value;t.payload=function(){return u(o)},t.callback=function(){Xh(e,a,i)}}var h=a.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){Xh(e,a,i),typeof u!="function"&&($n===null?$n=new Set([this]):$n.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Jv(t,e,a,i,u){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&el(e,a,u,!0),a=Be.current,a!==null){switch(a.tag){case 13:return Ie===null?Yo():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,i===Xu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Go(t,i,u)),!1;case 22:return a.flags|=65536,i===Xu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Go(t,i,u)),!1}throw Error(s(435,a.tag))}return Go(t,i,u),Yo(),!1}if(St)return e=Be.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,i!==qu&&(t=Error(s(422),{cause:i}),tl(Me(t,a)))):(i!==qu&&(e=Error(s(423),{cause:i}),tl(Me(e,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,i=Me(i,a),u=yo(t.stateNode,i,u),Zu(t,u),qt!==4&&(qt=2)),!1;var o=Error(s(520),{cause:i});if(o=Me(o,a),Sl===null?Sl=[o]:Sl.push(o),qt!==4&&(qt=2),e===null)return!0;i=Me(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yo(a.stateNode,i,t),Zu(a,t),!1;case 1:if(e=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&($n===null||!$n.has(o))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Kh(u),Vh(u,t,a,i),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var Zh=Error(s(461)),Pt=!1;function ee(t,e,a,i){e.child=t===null?qh(e,null,a,i):ai(e,t.child,a,i)}function Fh(t,e,a,i,u){a=a.render;var o=e.ref;if("ref"in i){var h={};for(var b in i)b!=="ref"&&(h[b]=i[b])}else h=i;return pa(e),i=Iu(t,e,a,h,o,u),b=to(),t!==null&&!Pt?(eo(t,e,u),bn(t,e,u)):(St&&b&&Bu(e),e.flags|=1,ee(t,e,i,u),e.child)}function Jh(t,e,a,i,u){if(t===null){var o=a.type;return typeof o=="function"&&!_u(o)&&o.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=o,Ph(t,e,o,i,u)):(t=yr(a.type,null,i,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!To(t,u)){var h=o.memoizedProps;if(a=a.compare,a=a!==null?a:Ji,a(h,i)&&t.ref===e.ref)return bn(t,e,u)}return e.flags|=1,t=dn(o,i),t.ref=e.ref,t.return=e,e.child=t}function Ph(t,e,a,i,u){if(t!==null){var o=t.memoizedProps;if(Ji(o,i)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=i=o,To(t,u))(t.flags&131072)!==0&&(Pt=!0);else return e.lanes=t.lanes,bn(t,e,u)}return vo(t,e,a,i,u)}function Wh(t,e,a){var i=e.pendingProps,u=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if((e.flags&128)!==0){if(i=o!==null?o.baseLanes|a:a,t!==null){for(u=e.child=t.child,o=0;u!==null;)o=o|u.lanes|u.childLanes,u=u.sibling;e.childLanes=o&~i}else e.childLanes=0,e.child=null;return Ih(t,e,i,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&wr(e,o!==null?o.cachePool:null),o!==null?Pd(e,o):Ju(),Hh(e);else return e.lanes=e.childLanes=536870912,Ih(t,e,o!==null?o.baseLanes|a:a,a)}else o!==null?(wr(e,o.cachePool),Pd(e,o),qn(),e.memoizedState=null):(t!==null&&wr(e,null),Ju(),qn());return ee(t,e,u,a),e.child}function Ih(t,e,a,i){var u=$u();return u=u===null?null:{parent:$t._currentValue,pool:u},e.memoizedState={baseLanes:a,cachePool:u},t!==null&&wr(e,null),Ju(),Hh(e),t!==null&&el(t,e,i,!0),null}function Hr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function vo(t,e,a,i,u){return pa(e),a=Iu(t,e,a,i,void 0,u),i=to(),t!==null&&!Pt?(eo(t,e,u),bn(t,e,u)):(St&&i&&Bu(e),e.flags|=1,ee(t,e,a,u),e.child)}function tp(t,e,a,i,u,o){return pa(e),e.updateQueue=null,a=Id(e,i,a,u),Wd(t),i=to(),t!==null&&!Pt?(eo(t,e,o),bn(t,e,o)):(St&&i&&Bu(e),e.flags|=1,ee(t,e,a,o),e.child)}function ep(t,e,a,i,u){if(pa(e),e.stateNode===null){var o=Va,h=a.contextType;typeof h=="object"&&h!==null&&(o=re(h)),o=new a(i,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=go,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=i,o.state=e.memoizedState,o.refs={},Ku(e),h=a.contextType,o.context=typeof h=="object"&&h!==null?re(h):Va,o.state=e.memoizedState,h=a.getDerivedStateFromProps,typeof h=="function"&&(mo(e,a,h,i),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(h=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),h!==o.state&&go.enqueueReplaceState(o,o.state,null),ul(e,i,o,u),sl(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){o=e.stateNode;var b=e.memoizedProps,x=ya(a,b);o.props=x;var _=o.context,k=a.contextType;h=Va,typeof k=="object"&&k!==null&&(h=re(k));var Q=a.getDerivedStateFromProps;k=typeof Q=="function"||typeof o.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(b||_!==h)&&Yh(e,o,i,h),_n=!1;var U=e.memoizedState;o.state=U,ul(e,i,o,u),sl(),_=e.memoizedState,b||U!==_||_n?(typeof Q=="function"&&(mo(e,a,Q,i),_=e.memoizedState),(x=_n||kh(e,a,x,i,U,_,h))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=h,i=x):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Vu(t,e),h=e.memoizedProps,k=ya(a,h),o.props=k,Q=e.pendingProps,U=o.context,_=a.contextType,x=Va,typeof _=="object"&&_!==null&&(x=re(_)),b=a.getDerivedStateFromProps,(_=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h!==Q||U!==x)&&Yh(e,o,i,x),_n=!1,U=e.memoizedState,o.state=U,ul(e,i,o,u),sl();var N=e.memoizedState;h!==Q||U!==N||_n||t!==null&&t.dependencies!==null&&xr(t.dependencies)?(typeof b=="function"&&(mo(e,a,b,i),N=e.memoizedState),(k=_n||kh(e,a,k,i,U,N,x)||t!==null&&t.dependencies!==null&&xr(t.dependencies))?(_||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,N,x),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,N,x)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=N),o.props=i,o.state=N,o.context=x,i=k):(typeof o.componentDidUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=1024),i=!1)}return o=i,Hr(t,e),i=(e.flags&128)!==0,o||i?(o=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&i?(e.child=ai(e,t.child,null,u),e.child=ai(e,null,a,u)):ee(t,e,a,u),e.memoizedState=o.state,t=e.child):t=bn(t,e,u),t}function np(t,e,a,i){return Ii(),e.flags|=256,ee(t,e,a,i),e.child}var bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xo(t){return{baseLanes:t,cachePool:Gd()}}function So(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Le),t}function ap(t,e,a){var i=e.pendingProps,u=!1,o=(e.flags&128)!==0,h;if((h=o)||(h=t!==null&&t.memoizedState===null?!1:(Xt.current&2)!==0),h&&(u=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(St){if(u?Ln(e):qn(),St){var b=Lt,x;if(x=b){t:{for(x=b,b=We;x.nodeType!==8;){if(!b){b=null;break t}if(x=Xe(x.nextSibling),x===null){b=null;break t}}b=x}b!==null?(e.memoizedState={dehydrated:b,treeContext:oa!==null?{id:hn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},x=we(18,null,null,0),x.stateNode=b,x.return=e,e.child=x,ce=e,Lt=null,x=!0):x=!1}x||da(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return ic(b)?e.lanes=32:e.lanes=536870912,null;vn(e)}return b=i.children,i=i.fallback,u?(qn(),u=e.mode,b=kr({mode:"hidden",children:b},u),i=ua(i,u,a,null),b.return=e,i.return=e,b.sibling=i,e.child=b,u=e.child,u.memoizedState=xo(a),u.childLanes=So(t,h,a),e.memoizedState=bo,i):(Ln(e),wo(e,b))}if(x=t.memoizedState,x!==null&&(b=x.dehydrated,b!==null)){if(o)e.flags&256?(Ln(e),e.flags&=-257,e=Eo(t,e,a)):e.memoizedState!==null?(qn(),e.child=t.child,e.flags|=128,e=null):(qn(),u=i.fallback,b=e.mode,i=kr({mode:"visible",children:i.children},b),u=ua(u,b,a,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,ai(e,t.child,null,a),i=e.child,i.memoizedState=xo(a),i.childLanes=So(t,h,a),e.memoizedState=bo,e=u);else if(Ln(e),ic(b)){if(h=b.nextSibling&&b.nextSibling.dataset,h)var _=h.dgst;h=_,i=Error(s(419)),i.stack="",i.digest=h,tl({value:i,source:null,stack:null}),e=Eo(t,e,a)}else if(Pt||el(t,e,a,!1),h=(a&t.childLanes)!==0,Pt||h){if(h=Dt,h!==null&&(i=a&-a,i=(i&42)!==0?1:iu(i),i=(i&(h.suspendedLanes|a))!==0?0:i,i!==0&&i!==x.retryLane))throw x.retryLane=i,Ka(t,i),Ae(h,t,i),Zh;b.data==="$?"||Yo(),e=Eo(t,e,a)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=x.treeContext,Lt=Xe(b.nextSibling),ce=e,St=!0,fa=null,We=!1,t!==null&&(Ue[Ne++]=hn,Ue[Ne++]=pn,Ue[Ne++]=oa,hn=t.id,pn=t.overflow,oa=e),e=wo(e,i.children),e.flags|=4096);return e}return u?(qn(),u=i.fallback,b=e.mode,x=t.child,_=x.sibling,i=dn(x,{mode:"hidden",children:i.children}),i.subtreeFlags=x.subtreeFlags&65011712,_!==null?u=dn(_,u):(u=ua(u,b,a,null),u.flags|=2),u.return=e,i.return=e,i.sibling=u,e.child=i,i=u,u=e.child,b=t.child.memoizedState,b===null?b=xo(a):(x=b.cachePool,x!==null?(_=$t._currentValue,x=x.parent!==_?{parent:_,pool:_}:x):x=Gd(),b={baseLanes:b.baseLanes|a,cachePool:x}),u.memoizedState=b,u.childLanes=So(t,h,a),e.memoizedState=bo,i):(Ln(e),a=t.child,t=a.sibling,a=dn(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=a,e.memoizedState=null,a)}function wo(t,e){return e=kr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function kr(t,e){return t=we(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Eo(t,e,a){return ai(e,t.child,null,a),t=wo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ip(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ku(t.return,e,a)}function Ro(t,e,a,i,u){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:u}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=u)}function lp(t,e,a){var i=e.pendingProps,u=i.revealOrder,o=i.tail;if(ee(t,e,i.children,a),i=Xt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,a,e);else if(t.tag===19)ip(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(F(Xt,i),u){case"forwards":for(a=e.child,u=null;a!==null;)t=a.alternate,t!==null&&Br(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=e.child,e.child=null):(u=a.sibling,a.sibling=null),Ro(e,!1,u,a,o);break;case"backwards":for(a=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&Br(t)===null){e.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ro(e,!0,a,null,o);break;case"together":Ro(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(el(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=dn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=dn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function To(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&xr(t)))}function Pv(t,e,a){switch(e.tag){case 3:wt(e,e.stateNode.containerInfo),Mn(e,$t,t.memoizedState.cache),Ii();break;case 27:case 5:na(e);break;case 4:wt(e,e.stateNode.containerInfo);break;case 10:Mn(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ln(e),e.flags|=128,null):(a&e.child.childLanes)!==0?ap(t,e,a):(Ln(e),t=bn(t,e,a),t!==null?t.sibling:null);Ln(e);break;case 19:var u=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(el(t,e,a,!1),i=(a&e.childLanes)!==0),u){if(i)return lp(t,e,a);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),F(Xt,Xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wh(t,e,a);case 24:Mn(e,$t,t.memoizedState.cache)}return bn(t,e,a)}function rp(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Pt=!0;else{if(!To(t,a)&&(e.flags&128)===0)return Pt=!1,Pv(t,e,a);Pt=(t.flags&131072)!==0}else Pt=!1,St&&(e.flags&1048576)!==0&&Bd(e,br,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var i=e.elementType,u=i._init;if(i=u(i._payload),e.type=i,typeof i=="function")_u(i)?(t=ya(i,t),e.tag=1,e=ep(null,e,i,t,a)):(e.tag=0,e=vo(null,e,i,t,a));else{if(i!=null){if(u=i.$$typeof,u===J){e.tag=11,e=Fh(null,e,i,t,a);break t}else if(u===K){e.tag=14,e=Jh(null,e,i,t,a);break t}}throw e=un(i)||i,Error(s(306,e,""))}}return e;case 0:return vo(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,u=ya(i,e.pendingProps),ep(t,e,i,u,a);case 3:t:{if(wt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));i=e.pendingProps;var o=e.memoizedState;u=o.element,Vu(t,e),ul(e,i,null,a);var h=e.memoizedState;if(i=h.cache,Mn(e,$t,i),i!==o.cache&&Yu(e,[$t],a,!0),sl(),i=h.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=np(t,e,i,a);break t}else if(i!==u){u=Me(Error(s(424)),e),tl(u),e=np(t,e,i,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Lt=Xe(t.firstChild),ce=e,St=!0,fa=null,We=!0,a=qh(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ii(),i===u){e=bn(t,e,a);break t}ee(t,e,i,a)}e=e.child}return e;case 26:return Hr(t,e),t===null?(a=c0(e.type,null,e.pendingProps,null))?e.memoizedState=a:St||(a=e.type,t=e.pendingProps,i=ts(rt.current).createElement(a),i[le]=e,i[de]=t,ae(i,a,t),Jt(i),e.stateNode=i):e.memoizedState=c0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return na(e),t===null&&St&&(i=e.stateNode=s0(e.type,e.pendingProps,rt.current),ce=e,We=!0,u=Lt,Vn(e.type)?(lc=u,Lt=Xe(i.firstChild)):Lt=u),ee(t,e,e.pendingProps.children,a),Hr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&St&&((u=i=Lt)&&(i=T1(i,e.type,e.pendingProps,We),i!==null?(e.stateNode=i,ce=e,Lt=Xe(i.firstChild),We=!1,u=!0):u=!1),u||da(e)),na(e),u=e.type,o=e.pendingProps,h=t!==null?t.memoizedProps:null,i=o.children,ec(u,o)?i=null:h!==null&&ec(u,h)&&(e.flags|=32),e.memoizedState!==null&&(u=Iu(t,e,Gv,null,null,a),zl._currentValue=u),Hr(t,e),ee(t,e,i,a),e.child;case 6:return t===null&&St&&((t=a=Lt)&&(a=O1(a,e.pendingProps,We),a!==null?(e.stateNode=a,ce=e,Lt=null,t=!0):t=!1),t||da(e)),null;case 13:return ap(t,e,a);case 4:return wt(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ai(e,null,i,a):ee(t,e,i,a),e.child;case 11:return Fh(t,e,e.type,e.pendingProps,a);case 7:return ee(t,e,e.pendingProps,a),e.child;case 8:return ee(t,e,e.pendingProps.children,a),e.child;case 12:return ee(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,Mn(e,e.type,i.value),ee(t,e,i.children,a),e.child;case 9:return u=e.type._context,i=e.pendingProps.children,pa(e),u=re(u),i=i(u),e.flags|=1,ee(t,e,i,a),e.child;case 14:return Jh(t,e,e.type,e.pendingProps,a);case 15:return Ph(t,e,e.type,e.pendingProps,a);case 19:return lp(t,e,a);case 31:return i=e.pendingProps,a=e.mode,i={mode:i.mode,children:i.children},t===null?(a=kr(i,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=dn(t.child,i),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return Wh(t,e,a);case 24:return pa(e),i=re($t),t===null?(u=$u(),u===null&&(u=Dt,o=Qu(),u.pooledCache=o,o.refCount++,o!==null&&(u.pooledCacheLanes|=a),u=o),e.memoizedState={parent:i,cache:u},Ku(e),Mn(e,$t,u)):((t.lanes&a)!==0&&(Vu(t,e),ul(e,null,null,a),sl()),u=t.memoizedState,o=e.memoizedState,u.parent!==i?(u={parent:i,cache:i},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Mn(e,$t,i)):(i=o.cache,Mn(e,$t,i),i!==u.cache&&Yu(e,[$t],a,!0))),ee(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function xn(t){t.flags|=4}function sp(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!m0(e)){if(e=Be.current,e!==null&&((bt&4194048)===bt?Ie!==null:(bt&62914560)!==bt&&(bt&536870912)===0||e!==Ie))throw ll=Xu,$d;t.flags|=8192}}function Yr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Hf():536870912,t.lanes|=e,si|=e)}function ml(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags&65011712,i|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function Wv(t,e,a){var i=e.pendingProps;switch(Lu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),gn($t),ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wi(e)?xn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hd())),Bt(e),null;case 26:return a=e.memoizedState,t===null?(xn(e),a!==null?(Bt(e),sp(e,a)):(Bt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(xn(e),Bt(e),sp(e,a)):(Bt(e),e.flags&=-16777217):(t.memoizedProps!==i&&xn(e),Bt(e),e.flags&=-16777217),null;case 27:on(e),a=rt.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(!i){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}t=at.current,Wi(e)?Ld(e):(t=s0(u,i,a),e.stateNode=t,xn(e))}return Bt(e),null;case 5:if(on(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(!i){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}if(t=at.current,Wi(e))Ld(e);else{switch(u=ts(rt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?u.createElement(a,{is:i.is}):u.createElement(a)}}t[le]=e,t[de]=i;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(ae(t,a,i),a){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&xn(e)}}return Bt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(s(166));if(t=rt.current,Wi(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,u=ce,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}t[le]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||t0(t.nodeValue,a)),t||da(e)}else t=ts(t).createTextNode(i),t[le]=e,e.stateNode=t}return Bt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Wi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[le]=e}else Ii(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),u=!1}else u=Hd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(vn(e),e):(vn(e),null)}if(vn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=i!==null,t=t!==null&&t.memoizedState!==null,a){i=e.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool);var o=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==u&&(i.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Yr(e,e.updateQueue),Bt(e),null;case 4:return ie(),t===null&&Jo(e.stateNode.containerInfo),Bt(e),null;case 10:return gn(e.type),Bt(e),null;case 19:if(V(Xt),u=e.memoizedState,u===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=u.rendering,o===null)if(i)ml(u,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Br(t),o!==null){for(e.flags|=128,ml(u,!1),t=o.updateQueue,e.updateQueue=t,Yr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Nd(a,t),a=a.sibling;return F(Xt,Xt.current&1|2),e.child}t=t.sibling}u.tail!==null&&Pe()>$r&&(e.flags|=128,i=!0,ml(u,!1),e.lanes=4194304)}else{if(!i)if(t=Br(o),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Yr(e,t),ml(u,!0),u.tail===null&&u.tailMode==="hidden"&&!o.alternate&&!St)return Bt(e),null}else 2*Pe()-u.renderingStartTime>$r&&a!==536870912&&(e.flags|=128,i=!0,ml(u,!1),e.lanes=4194304);u.isBackwards?(o.sibling=e.child,e.child=o):(t=u.last,t!==null?t.sibling=o:e.child=o,u.last=o)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Pe(),e.sibling=null,t=Xt.current,F(Xt,i?t&1|2:t&1),e):(Bt(e),null);case 22:case 23:return vn(e),Pu(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),a=e.updateQueue,a!==null&&Yr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&V(ma),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),gn($t),Bt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Iv(t,e){switch(Lu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gn($t),ie(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return on(e),null;case 13:if(vn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(Xt),null;case 4:return ie(),null;case 10:return gn(e.type),null;case 22:case 23:return vn(e),Pu(),t!==null&&V(ma),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return gn($t),null;case 25:return null;default:return null}}function up(t,e){switch(Lu(e),e.tag){case 3:gn($t),ie();break;case 26:case 27:case 5:on(e);break;case 4:ie();break;case 13:vn(e);break;case 19:V(Xt);break;case 10:gn(e.type);break;case 22:case 23:vn(e),Pu(),t!==null&&V(ma);break;case 24:gn($t)}}function gl(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&t)===t){i=void 0;var o=a.create,h=a.inst;i=o(),h.destroy=i}a=a.next}while(a!==u)}}catch(b){zt(e,e.return,b)}}function Hn(t,e,a){try{var i=e.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var o=u.next;i=o;do{if((i.tag&t)===t){var h=i.inst,b=h.destroy;if(b!==void 0){h.destroy=void 0,u=e;var x=a,_=b;try{_()}catch(k){zt(u,x,k)}}}i=i.next}while(i!==o)}}catch(k){zt(e,e.return,k)}}function op(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Jd(e,a)}catch(i){zt(t,t.return,i)}}}function cp(t,e,a){a.props=ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){zt(t,e,i)}}function yl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(u){zt(t,e,u)}}function tn(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(u){zt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,e,u)}else a.current=null}function fp(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Oo(t,e,a){try{var i=t.stateNode;x1(i,t.type,a,e),i[de]=e}catch(u){zt(t,t.return,u)}}function dp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Vn(t.type)||t.tag===4}function Ao(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Vn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Co(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Ir));else if(i!==4&&(i===27&&Vn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Co(t,e,a),t=t.sibling;t!==null;)Co(t,e,a),t=t.sibling}function Qr(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&Vn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Qr(t,e,a),t=t.sibling;t!==null;)Qr(t,e,a),t=t.sibling}function hp(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);ae(e,i,a),e[le]=t,e[de]=a}catch(o){zt(t,t.return,o)}}var Sn=!1,kt=!1,jo=!1,pp=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function t1(t,e){if(t=t.containerInfo,Io=rs,t=Td(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var u=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break t}var h=0,b=-1,x=-1,_=0,k=0,Q=t,U=null;e:for(;;){for(var N;Q!==a||u!==0&&Q.nodeType!==3||(b=h+u),Q!==o||i!==0&&Q.nodeType!==3||(x=h+i),Q.nodeType===3&&(h+=Q.nodeValue.length),(N=Q.firstChild)!==null;)U=Q,Q=N;for(;;){if(Q===t)break e;if(U===a&&++_===u&&(b=h),U===o&&++k===i&&(x=h),(N=Q.nextSibling)!==null)break;Q=U,U=Q.parentNode}Q=N}a=b===-1||x===-1?null:{start:b,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(tc={focusedElem:t,selectionRange:a},rs=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,a=e,u=o.memoizedProps,o=o.memoizedState,i=a.stateNode;try{var ut=ya(a.type,u,a.elementType===a.type);t=i.getSnapshotBeforeUpdate(ut,o),i.__reactInternalSnapshotBeforeUpdate=t}catch(lt){zt(a,a.return,lt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ac(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ac(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function mp(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:kn(t,a),i&4&&gl(5,a);break;case 1:if(kn(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(h){zt(a,a.return,h)}else{var u=ya(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){zt(a,a.return,h)}}i&64&&op(a),i&512&&yl(a,a.return);break;case 3:if(kn(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Jd(t,e)}catch(h){zt(a,a.return,h)}}break;case 27:e===null&&i&4&&hp(a);case 26:case 5:kn(t,a),e===null&&i&4&&fp(a),i&512&&yl(a,a.return);break;case 12:kn(t,a);break;case 13:kn(t,a),i&4&&vp(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=o1.bind(null,a),A1(t,a))));break;case 22:if(i=a.memoizedState!==null||Sn,!i){e=e!==null&&e.memoizedState!==null||kt,u=Sn;var o=kt;Sn=i,(kt=e)&&!o?Yn(t,a,(a.subtreeFlags&8772)!==0):kn(t,a),Sn=u,kt=o}break;case 30:break;default:kn(t,a)}}function gp(t){var e=t.alternate;e!==null&&(t.alternate=null,gp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&su(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ut=null,me=!1;function wn(t,e,a){for(a=a.child;a!==null;)yp(t,e,a),a=a.sibling}function yp(t,e,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 26:kt||tn(a,e),wn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:kt||tn(a,e);var i=Ut,u=me;Vn(a.type)&&(Ut=a.stateNode,me=!1),wn(t,e,a),Ol(a.stateNode),Ut=i,me=u;break;case 5:kt||tn(a,e);case 6:if(i=Ut,u=me,Ut=null,wn(t,e,a),Ut=i,me=u,Ut!==null)if(me)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(a.stateNode)}catch(o){zt(a,e,o)}else try{Ut.removeChild(a.stateNode)}catch(o){zt(a,e,o)}break;case 18:Ut!==null&&(me?(t=Ut,l0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ul(t)):l0(Ut,a.stateNode));break;case 4:i=Ut,u=me,Ut=a.stateNode.containerInfo,me=!0,wn(t,e,a),Ut=i,me=u;break;case 0:case 11:case 14:case 15:kt||Hn(2,a,e),kt||Hn(4,a,e),wn(t,e,a);break;case 1:kt||(tn(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&cp(a,e,i)),wn(t,e,a);break;case 21:wn(t,e,a);break;case 22:kt=(i=kt)||a.memoizedState!==null,wn(t,e,a),kt=i;break;default:wn(t,e,a)}}function vp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ul(t)}catch(a){zt(e,e.return,a)}}function e1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new pp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new pp),e;default:throw Error(s(435,t.tag))}}function zo(t,e){var a=e1(t);e.forEach(function(i){var u=c1.bind(null,t,i);a.has(i)||(a.add(i),i.then(u,u))})}function Ee(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var u=a[i],o=t,h=e,b=h;t:for(;b!==null;){switch(b.tag){case 27:if(Vn(b.type)){Ut=b.stateNode,me=!1;break t}break;case 5:Ut=b.stateNode,me=!1;break t;case 3:case 4:Ut=b.stateNode.containerInfo,me=!0;break t}b=b.return}if(Ut===null)throw Error(s(160));yp(o,h,u),Ut=null,me=!1,o=u.alternate,o!==null&&(o.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)bp(e,t),e=e.sibling}var $e=null;function bp(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ee(e,t),Re(t),i&4&&(Hn(3,t,t.return),gl(3,t),Hn(5,t,t.return));break;case 1:Ee(e,t),Re(t),i&512&&(kt||a===null||tn(a,a.return)),i&64&&Sn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var u=$e;if(Ee(e,t),Re(t),i&512&&(kt||a===null||tn(a,a.return)),i&4){var o=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(i){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Yi]||o[le]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(i),u.head.insertBefore(o,u.querySelector("head > title"))),ae(o,i,a),o[le]=t,Jt(o),i=o;break t;case"link":var h=h0("link","href",u).get(i+(a.href||""));if(h){for(var b=0;b<h.length;b++)if(o=h[b],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(b,1);break e}}o=u.createElement(i),ae(o,i,a),u.head.appendChild(o);break;case"meta":if(h=h0("meta","content",u).get(i+(a.content||""))){for(b=0;b<h.length;b++)if(o=h[b],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(b,1);break e}}o=u.createElement(i),ae(o,i,a),u.head.appendChild(o);break;default:throw Error(s(468,i))}o[le]=t,Jt(o),i=o}t.stateNode=i}else p0(u,t.type,t.stateNode);else t.stateNode=d0(u,i,t.memoizedProps);else o!==i?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,i===null?p0(u,t.type,t.stateNode):d0(u,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Oo(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ee(e,t),Re(t),i&512&&(kt||a===null||tn(a,a.return)),a!==null&&i&4&&Oo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ee(e,t),Re(t),i&512&&(kt||a===null||tn(a,a.return)),t.flags&32){u=t.stateNode;try{Ha(u,"")}catch(N){zt(t,t.return,N)}}i&4&&t.stateNode!=null&&(u=t.memoizedProps,Oo(t,u,a!==null?a.memoizedProps:u)),i&1024&&(jo=!0);break;case 6:if(Ee(e,t),Re(t),i&4){if(t.stateNode===null)throw Error(s(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(N){zt(t,t.return,N)}}break;case 3:if(as=null,u=$e,$e=es(e.containerInfo),Ee(e,t),$e=u,Re(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Ul(e.containerInfo)}catch(N){zt(t,t.return,N)}jo&&(jo=!1,xp(t));break;case 4:i=$e,$e=es(t.stateNode.containerInfo),Ee(e,t),Re(t),$e=i;break;case 12:Ee(e,t),Re(t);break;case 13:Ee(e,t),Re(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bo=Pe()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,zo(t,i)));break;case 22:u=t.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,_=Sn,k=kt;if(Sn=_||u,kt=k||x,Ee(e,t),kt=k,Sn=_,Re(t),i&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(a===null||x||Sn||kt||va(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){x=a=e;try{if(o=x.stateNode,u)h=o.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=x.stateNode;var Q=x.memoizedProps.style,U=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;b.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(N){zt(x,x.return,N)}}}else if(e.tag===6){if(a===null){x=e;try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(N){zt(x,x.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,zo(t,a))));break;case 19:Ee(e,t),Re(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,zo(t,i)));break;case 30:break;case 21:break;default:Ee(e,t),Re(t)}}function Re(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(dp(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,o=Ao(t);Qr(t,o,u);break;case 5:var h=a.stateNode;a.flags&32&&(Ha(h,""),a.flags&=-33);var b=Ao(t);Qr(t,b,h);break;case 3:case 4:var x=a.stateNode.containerInfo,_=Ao(t);Co(t,_,x);break;default:throw Error(s(161))}}catch(k){zt(t,t.return,k)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;xp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function kn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)mp(t,e.alternate,e),e=e.sibling}function va(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Hn(4,e,e.return),va(e);break;case 1:tn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&cp(e,e.return,a),va(e);break;case 27:Ol(e.stateNode);case 26:case 5:tn(e,e.return),va(e);break;case 22:e.memoizedState===null&&va(e);break;case 30:va(e);break;default:va(e)}t=t.sibling}}function Yn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,u=t,o=e,h=o.flags;switch(o.tag){case 0:case 11:case 15:Yn(u,o,a),gl(4,o);break;case 1:if(Yn(u,o,a),i=o,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(_){zt(i,i.return,_)}if(i=o,u=i.updateQueue,u!==null){var b=i.stateNode;try{var x=u.shared.hiddenCallbacks;if(x!==null)for(u.shared.hiddenCallbacks=null,u=0;u<x.length;u++)Fd(x[u],b)}catch(_){zt(i,i.return,_)}}a&&h&64&&op(o),yl(o,o.return);break;case 27:hp(o);case 26:case 5:Yn(u,o,a),a&&i===null&&h&4&&fp(o),yl(o,o.return);break;case 12:Yn(u,o,a);break;case 13:Yn(u,o,a),a&&h&4&&vp(u,o);break;case 22:o.memoizedState===null&&Yn(u,o,a),yl(o,o.return);break;case 30:break;default:Yn(u,o,a)}e=e.sibling}}function Do(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&nl(a))}function Mo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&nl(t))}function en(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sp(t,e,a,i),e=e.sibling}function Sp(t,e,a,i){var u=e.flags;switch(e.tag){case 0:case 11:case 15:en(t,e,a,i),u&2048&&gl(9,e);break;case 1:en(t,e,a,i);break;case 3:en(t,e,a,i),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&nl(t)));break;case 12:if(u&2048){en(t,e,a,i),t=e.stateNode;try{var o=e.memoizedProps,h=o.id,b=o.onPostCommit;typeof b=="function"&&b(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(x){zt(e,e.return,x)}}else en(t,e,a,i);break;case 13:en(t,e,a,i);break;case 23:break;case 22:o=e.stateNode,h=e.alternate,e.memoizedState!==null?o._visibility&2?en(t,e,a,i):vl(t,e):o._visibility&2?en(t,e,a,i):(o._visibility|=2,ii(t,e,a,i,(e.subtreeFlags&10256)!==0)),u&2048&&Do(h,e);break;case 24:en(t,e,a,i),u&2048&&Mo(e.alternate,e);break;default:en(t,e,a,i)}}function ii(t,e,a,i,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,h=e,b=a,x=i,_=h.flags;switch(h.tag){case 0:case 11:case 15:ii(o,h,b,x,u),gl(8,h);break;case 23:break;case 22:var k=h.stateNode;h.memoizedState!==null?k._visibility&2?ii(o,h,b,x,u):vl(o,h):(k._visibility|=2,ii(o,h,b,x,u)),u&&_&2048&&Do(h.alternate,h);break;case 24:ii(o,h,b,x,u),u&&_&2048&&Mo(h.alternate,h);break;default:ii(o,h,b,x,u)}e=e.sibling}}function vl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,u=i.flags;switch(i.tag){case 22:vl(a,i),u&2048&&Do(i.alternate,i);break;case 24:vl(a,i),u&2048&&Mo(i.alternate,i);break;default:vl(a,i)}e=e.sibling}}var bl=8192;function li(t){if(t.subtreeFlags&bl)for(t=t.child;t!==null;)wp(t),t=t.sibling}function wp(t){switch(t.tag){case 26:li(t),t.flags&bl&&t.memoizedState!==null&&k1($e,t.memoizedState,t.memoizedProps);break;case 5:li(t);break;case 3:case 4:var e=$e;$e=es(t.stateNode.containerInfo),li(t),$e=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=bl,bl=16777216,li(t),bl=e):li(t));break;default:li(t)}}function Ep(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function xl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Wt=i,Tp(i,t)}Ep(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rp(t),t=t.sibling}function Rp(t){switch(t.tag){case 0:case 11:case 15:xl(t),t.flags&2048&&Hn(9,t,t.return);break;case 3:xl(t);break;case 12:xl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Gr(t)):xl(t);break;default:xl(t)}}function Gr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Wt=i,Tp(i,t)}Ep(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Hn(8,e,e.return),Gr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Gr(e));break;default:Gr(e)}t=t.sibling}}function Tp(t,e){for(;Wt!==null;){var a=Wt;switch(a.tag){case 0:case 11:case 15:Hn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:nl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Wt=i;else t:for(a=t;Wt!==null;){i=Wt;var u=i.sibling,o=i.return;if(gp(i),i===a){Wt=null;break t}if(u!==null){u.return=o,Wt=u;break t}Wt=o}}}var n1={getCacheForType:function(t){var e=re($t),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},a1=typeof WeakMap=="function"?WeakMap:Map,Rt=0,Dt=null,gt=null,bt=0,Tt=0,Te=null,Qn=!1,ri=!1,_o=!1,En=0,qt=0,Gn=0,ba=0,Uo=0,Le=0,si=0,Sl=null,ge=null,No=!1,Bo=0,$r=1/0,Xr=null,$n=null,ne=0,Xn=null,ui=null,oi=0,Lo=0,qo=null,Op=null,wl=0,Ho=null;function Oe(){if((Rt&2)!==0&&bt!==0)return bt&-bt;if(H.T!==null){var t=Ja;return t!==0?t:Ko()}return Qf()}function Ap(){Le===0&&(Le=(bt&536870912)===0||St?qf():536870912);var t=Be.current;return t!==null&&(t.flags|=32),Le}function Ae(t,e,a){(t===Dt&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)&&(ci(t,0),Kn(t,bt,Le,!1)),ki(t,a),((Rt&2)===0||t!==Dt)&&(t===Dt&&((Rt&2)===0&&(ba|=a),qt===4&&Kn(t,bt,Le,!1)),nn(t))}function Cp(t,e,a){if((Rt&6)!==0)throw Error(s(327));var i=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Hi(t,e),u=i?r1(t,e):Qo(t,e,!0),o=i;do{if(u===0){ri&&!i&&Kn(t,e,0,!1);break}else{if(a=t.current.alternate,o&&!i1(a)){u=Qo(t,e,!1),o=!1;continue}if(u===2){if(o=e,t.errorRecoveryDisabledLanes&o)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var b=t;u=Sl;var x=b.current.memoizedState.isDehydrated;if(x&&(ci(b,h).flags|=256),h=Qo(b,h,!1),h!==2){if(_o&&!x){b.errorRecoveryDisabledLanes|=o,ba|=o,u=4;break t}o=ge,ge=u,o!==null&&(ge===null?ge=o:ge.push.apply(ge,o))}u=h}if(o=!1,u!==2)continue}}if(u===1){ci(t,0),Kn(t,e,0,!0);break}t:{switch(i=t,o=u,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Kn(i,e,Le,!Qn);break t;case 2:ge=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(u=Bo+300-Pe(),10<u)){if(Kn(i,e,Le,!Qn),nr(i,0,!0)!==0)break t;i.timeoutHandle=a0(jp.bind(null,i,a,ge,Xr,No,e,Le,ba,si,Qn,o,2,-0,0),u);break t}jp(i,a,ge,Xr,No,e,Le,ba,si,Qn,o,0,-0,0)}}break}while(!0);nn(t)}function jp(t,e,a,i,u,o,h,b,x,_,k,Q,U,N){if(t.timeoutHandle=-1,Q=e.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(jl={stylesheets:null,count:0,unsuspend:H1},wp(e),Q=Y1(),Q!==null)){t.cancelPendingCommit=Q(Bp.bind(null,t,e,o,a,i,u,h,b,x,k,1,U,N)),Kn(t,o,h,!_);return}Bp(t,e,o,a,i,u,h,b,x)}function i1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var u=a[i],o=u.getSnapshot;u=u.value;try{if(!Se(o(),u))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e,a,i){e&=~Uo,e&=~ba,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var u=e;0<u;){var o=31-xe(u),h=1<<o;i[o]=-1,u&=~h}a!==0&&kf(t,a,e)}function Kr(){return(Rt&6)===0?(El(0),!1):!0}function ko(){if(gt!==null){if(Tt===0)var t=gt.return;else t=gt,mn=ha=null,no(t),ni=null,hl=0,t=gt;for(;t!==null;)up(t.alternate,t),t=t.return;gt=null}}function ci(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,w1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ko(),Dt=t,gt=a=dn(t.current,null),bt=e,Tt=0,Te=null,Qn=!1,ri=Hi(t,e),_o=!1,si=Le=Uo=ba=Gn=qt=0,ge=Sl=null,No=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var u=31-xe(i),o=1<<u;e|=t[u],i&=~o}return En=e,pr(),a}function zp(t,e){dt=null,H.H=_r,e===il||e===Er?(e=Vd(),Tt=3):e===$d?(e=Vd(),Tt=4):Tt=e===Zh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Te=e,gt===null&&(qt=1,qr(t,Me(e,t.current)))}function Dp(){var t=H.H;return H.H=_r,t===null?_r:t}function Mp(){var t=H.A;return H.A=n1,t}function Yo(){qt=4,Qn||(bt&4194048)!==bt&&Be.current!==null||(ri=!0),(Gn&134217727)===0&&(ba&134217727)===0||Dt===null||Kn(Dt,bt,Le,!1)}function Qo(t,e,a){var i=Rt;Rt|=2;var u=Dp(),o=Mp();(Dt!==t||bt!==e)&&(Xr=null,ci(t,e)),e=!1;var h=qt;t:do try{if(Tt!==0&&gt!==null){var b=gt,x=Te;switch(Tt){case 8:ko(),h=6;break t;case 3:case 2:case 9:case 6:Be.current===null&&(e=!0);var _=Tt;if(Tt=0,Te=null,fi(t,b,x,_),a&&ri){h=0;break t}break;default:_=Tt,Tt=0,Te=null,fi(t,b,x,_)}}l1(),h=qt;break}catch(k){zp(t,k)}while(!0);return e&&t.shellSuspendCounter++,mn=ha=null,Rt=i,H.H=u,H.A=o,gt===null&&(Dt=null,bt=0,pr()),h}function l1(){for(;gt!==null;)_p(gt)}function r1(t,e){var a=Rt;Rt|=2;var i=Dp(),u=Mp();Dt!==t||bt!==e?(Xr=null,$r=Pe()+500,ci(t,e)):ri=Hi(t,e);t:do try{if(Tt!==0&&gt!==null){e=gt;var o=Te;e:switch(Tt){case 1:Tt=0,Te=null,fi(t,e,o,1);break;case 2:case 9:if(Xd(o)){Tt=0,Te=null,Up(e);break}e=function(){Tt!==2&&Tt!==9||Dt!==t||(Tt=7),nn(t)},o.then(e,e);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:Xd(o)?(Tt=0,Te=null,Up(e)):(Tt=0,Te=null,fi(t,e,o,7));break;case 5:var h=null;switch(gt.tag){case 26:h=gt.memoizedState;case 5:case 27:var b=gt;if(!h||m0(h)){Tt=0,Te=null;var x=b.sibling;if(x!==null)gt=x;else{var _=b.return;_!==null?(gt=_,Vr(_)):gt=null}break e}}Tt=0,Te=null,fi(t,e,o,5);break;case 6:Tt=0,Te=null,fi(t,e,o,6);break;case 8:ko(),qt=6;break t;default:throw Error(s(462))}}s1();break}catch(k){zp(t,k)}while(!0);return mn=ha=null,H.H=i,H.A=u,Rt=a,gt!==null?0:(Dt=null,bt=0,pr(),qt)}function s1(){for(;gt!==null&&!jy();)_p(gt)}function _p(t){var e=rp(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?Vr(t):gt=e}function Up(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=tp(a,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=tp(a,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:no(e);default:up(a,e),e=gt=Nd(e,En),e=rp(a,e,En)}t.memoizedProps=t.pendingProps,e===null?Vr(t):gt=e}function fi(t,e,a,i){mn=ha=null,no(e),ni=null,hl=0;var u=e.return;try{if(Jv(t,u,e,a,bt)){qt=1,qr(t,Me(a,t.current)),gt=null;return}}catch(o){if(u!==null)throw gt=u,o;qt=1,qr(t,Me(a,t.current)),gt=null;return}e.flags&32768?(St||i===1?t=!0:ri||(bt&536870912)!==0?t=!1:(Qn=t=!0,(i===2||i===9||i===3||i===6)&&(i=Be.current,i!==null&&i.tag===13&&(i.flags|=16384))),Np(e,t)):Vr(e)}function Vr(t){var e=t;do{if((e.flags&32768)!==0){Np(e,Qn);return}t=e.return;var a=Wv(e.alternate,e,En);if(a!==null){gt=a;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);qt===0&&(qt=5)}function Np(t,e){do{var a=Iv(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);qt=6,gt=null}function Bp(t,e,a,i,u,o,h,b,x){t.cancelPendingCommit=null;do Zr();while(ne!==0);if((Rt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(o=e.lanes|e.childLanes,o|=Du,Hy(t,a,o,h,b,x),t===Dt&&(gt=Dt=null,bt=0),ui=e,Xn=t,oi=a,Lo=o,qo=u,Op=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,f1(Il,function(){return Yp(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=H.T,H.T=null,u=Z.p,Z.p=2,h=Rt,Rt|=4;try{t1(t,e,a)}finally{Rt=h,Z.p=u,H.T=i}}ne=1,Lp(),qp(),Hp()}}function Lp(){if(ne===1){ne=0;var t=Xn,e=ui,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var i=Z.p;Z.p=2;var u=Rt;Rt|=4;try{bp(e,t);var o=tc,h=Td(t.containerInfo),b=o.focusedElem,x=o.selectionRange;if(h!==b&&b&&b.ownerDocument&&Rd(b.ownerDocument.documentElement,b)){if(x!==null&&Ou(b)){var _=x.start,k=x.end;if(k===void 0&&(k=_),"selectionStart"in b)b.selectionStart=_,b.selectionEnd=Math.min(k,b.value.length);else{var Q=b.ownerDocument||document,U=Q&&Q.defaultView||window;if(U.getSelection){var N=U.getSelection(),ut=b.textContent.length,lt=Math.min(x.start,ut),Ct=x.end===void 0?lt:Math.min(x.end,ut);!N.extend&&lt>Ct&&(h=Ct,Ct=lt,lt=h);var j=Ed(b,lt),R=Ed(b,Ct);if(j&&R&&(N.rangeCount!==1||N.anchorNode!==j.node||N.anchorOffset!==j.offset||N.focusNode!==R.node||N.focusOffset!==R.offset)){var M=Q.createRange();M.setStart(j.node,j.offset),N.removeAllRanges(),lt>Ct?(N.addRange(M),N.extend(R.node,R.offset)):(M.setEnd(R.node,R.offset),N.addRange(M))}}}}for(Q=[],N=b;N=N.parentNode;)N.nodeType===1&&Q.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Q.length;b++){var Y=Q[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}rs=!!Io,tc=Io=null}finally{Rt=u,Z.p=i,H.T=a}}t.current=e,ne=2}}function qp(){if(ne===2){ne=0;var t=Xn,e=ui,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var i=Z.p;Z.p=2;var u=Rt;Rt|=4;try{mp(t,e.alternate,e)}finally{Rt=u,Z.p=i,H.T=a}}ne=3}}function Hp(){if(ne===4||ne===3){ne=0,zy();var t=Xn,e=ui,a=oi,i=Op;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ne=5:(ne=0,ui=Xn=null,kp(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&($n=null),lu(a),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=H.T,u=Z.p,Z.p=2,H.T=null;try{for(var o=t.onRecoverableError,h=0;h<i.length;h++){var b=i[h];o(b.value,{componentStack:b.stack})}}finally{H.T=e,Z.p=u}}(oi&3)!==0&&Zr(),nn(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Ho?wl++:(wl=0,Ho=t):wl=0,El(0)}}function kp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,nl(e)))}function Zr(t){return Lp(),qp(),Hp(),Yp()}function Yp(){if(ne!==5)return!1;var t=Xn,e=Lo;Lo=0;var a=lu(oi),i=H.T,u=Z.p;try{Z.p=32>a?32:a,H.T=null,a=qo,qo=null;var o=Xn,h=oi;if(ne=0,ui=Xn=null,oi=0,(Rt&6)!==0)throw Error(s(331));var b=Rt;if(Rt|=4,Rp(o.current),Sp(o,o.current,h,a),Rt=b,El(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(qi,o)}catch{}return!0}finally{Z.p=u,H.T=i,kp(t,e)}}function Qp(t,e,a){e=Me(a,e),e=yo(t.stateNode,e,2),t=Nn(t,e,2),t!==null&&(ki(t,2),nn(t))}function zt(t,e,a){if(t.tag===3)Qp(t,t,a);else for(;e!==null;){if(e.tag===3){Qp(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($n===null||!$n.has(i))){t=Me(a,t),a=Kh(2),i=Nn(e,a,2),i!==null&&(Vh(a,i,e,t),ki(i,2),nn(i));break}}e=e.return}}function Go(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new a1;var u=new Set;i.set(e,u)}else u=i.get(e),u===void 0&&(u=new Set,i.set(e,u));u.has(a)||(_o=!0,u.add(a),t=u1.bind(null,t,e,a),e.then(t,t))}function u1(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Dt===t&&(bt&a)===a&&(qt===4||qt===3&&(bt&62914560)===bt&&300>Pe()-Bo?(Rt&2)===0&&ci(t,0):Uo|=a,si===bt&&(si=0)),nn(t)}function Gp(t,e){e===0&&(e=Hf()),t=Ka(t,e),t!==null&&(ki(t,e),nn(t))}function o1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Gp(t,a)}function c1(t,e){var a=0;switch(t.tag){case 13:var i=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(e),Gp(t,a)}function f1(t,e){return eu(t,e)}var Fr=null,di=null,$o=!1,Jr=!1,Xo=!1,xa=0;function nn(t){t!==di&&t.next===null&&(di===null?Fr=di=t:di=di.next=t),Jr=!0,$o||($o=!0,h1())}function El(t,e){if(!Xo&&Jr){Xo=!0;do for(var a=!1,i=Fr;i!==null;){if(t!==0){var u=i.pendingLanes;if(u===0)var o=0;else{var h=i.suspendedLanes,b=i.pingedLanes;o=(1<<31-xe(42|t)+1)-1,o&=u&~(h&~b),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Vp(i,o))}else o=bt,o=nr(i,i===Dt?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||Hi(i,o)||(a=!0,Vp(i,o));i=i.next}while(a);Xo=!1}}function d1(){$p()}function $p(){Jr=$o=!1;var t=0;xa!==0&&(S1()&&(t=xa),xa=0);for(var e=Pe(),a=null,i=Fr;i!==null;){var u=i.next,o=Xp(i,e);o===0?(i.next=null,a===null?Fr=u:a.next=u,u===null&&(di=a)):(a=i,(t!==0||(o&3)!==0)&&(Jr=!0)),i=u}El(t)}function Xp(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,u=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var h=31-xe(o),b=1<<h,x=u[h];x===-1?((b&a)===0||(b&i)!==0)&&(u[h]=qy(b,e)):x<=e&&(t.expiredLanes|=b),o&=~b}if(e=Dt,a=bt,a=nr(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&nu(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Hi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&nu(i),lu(a)){case 2:case 8:a=Bf;break;case 32:a=Il;break;case 268435456:a=Lf;break;default:a=Il}return i=Kp.bind(null,t),a=eu(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&nu(i),t.callbackPriority=2,t.callbackNode=null,2}function Kp(t,e){if(ne!==0&&ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var i=bt;return i=nr(t,t===Dt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Cp(t,i,e),Xp(t,Pe()),t.callbackNode!=null&&t.callbackNode===a?Kp.bind(null,t):null)}function Vp(t,e){if(Zr())return null;Cp(t,e,!0)}function h1(){E1(function(){(Rt&6)!==0?eu(Nf,d1):$p()})}function Ko(){return xa===0&&(xa=qf()),xa}function Zp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sr(""+t)}function Fp(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function p1(t,e,a,i,u){if(e==="submit"&&a&&a.stateNode===u){var o=Zp((u[de]||null).action),h=i.submitter;h&&(e=(e=h[de]||null)?Zp(e.formAction):h.getAttribute("formAction"),e!==null&&(o=e,h=null));var b=new fr("action","action",null,i,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(xa!==0){var x=h?Fp(u,h):new FormData(u);fo(a,{pending:!0,data:x,method:u.method,action:o},null,x)}}else typeof o=="function"&&(b.preventDefault(),x=h?Fp(u,h):new FormData(u),fo(a,{pending:!0,data:x,method:u.method,action:o},o,x))},currentTarget:u}]})}}for(var Vo=0;Vo<zu.length;Vo++){var Zo=zu[Vo],m1=Zo.toLowerCase(),g1=Zo[0].toUpperCase()+Zo.slice(1);Ge(m1,"on"+g1)}Ge(Cd,"onAnimationEnd"),Ge(jd,"onAnimationIteration"),Ge(zd,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(_v,"onTransitionRun"),Ge(Uv,"onTransitionStart"),Ge(Nv,"onTransitionCancel"),Ge(Dd,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function Jp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],u=i.event;i=i.listeners;t:{var o=void 0;if(e)for(var h=i.length-1;0<=h;h--){var b=i[h],x=b.instance,_=b.currentTarget;if(b=b.listener,x!==o&&u.isPropagationStopped())break t;o=b,u.currentTarget=_;try{o(u)}catch(k){Lr(k)}u.currentTarget=null,o=x}else for(h=0;h<i.length;h++){if(b=i[h],x=b.instance,_=b.currentTarget,b=b.listener,x!==o&&u.isPropagationStopped())break t;o=b,u.currentTarget=_;try{o(u)}catch(k){Lr(k)}u.currentTarget=null,o=x}}}}function yt(t,e){var a=e[ru];a===void 0&&(a=e[ru]=new Set);var i=t+"__bubble";a.has(i)||(Pp(e,t,2,!1),a.add(i))}function Fo(t,e,a){var i=0;e&&(i|=4),Pp(a,t,i,e)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[Pr]){t[Pr]=!0,$f.forEach(function(a){a!=="selectionchange"&&(y1.has(a)||Fo(a,!1,t),Fo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pr]||(e[Pr]=!0,Fo("selectionchange",!1,e))}}function Pp(t,e,a,i){switch(S0(e)){case 2:var u=$1;break;case 8:u=X1;break;default:u=cc}a=u.bind(null,e,a,t),u=void 0,!yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),i?u!==void 0?t.addEventListener(e,a,{capture:!0,passive:u}):t.addEventListener(e,a,!0):u!==void 0?t.addEventListener(e,a,{passive:u}):t.addEventListener(e,a,!1)}function Po(t,e,a,i,u){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var b=i.stateNode.containerInfo;if(b===u)break;if(h===4)for(h=i.return;h!==null;){var x=h.tag;if((x===3||x===4)&&h.stateNode.containerInfo===u)return;h=h.return}for(;b!==null;){if(h=_a(b),h===null)return;if(x=h.tag,x===5||x===6||x===26||x===27){i=o=h;continue t}b=b.parentNode}}i=i.return}id(function(){var _=o,k=mu(a),Q=[];t:{var U=Md.get(t);if(U!==void 0){var N=fr,ut=t;switch(t){case"keypress":if(or(a)===0)break t;case"keydown":case"keyup":N=fv;break;case"focusin":ut="focus",N=Su;break;case"focusout":ut="blur",N=Su;break;case"beforeblur":case"afterblur":N=Su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=pv;break;case Cd:case jd:case zd:N=nv;break;case Dd:N=gv;break;case"scroll":case"scrollend":N=Py;break;case"wheel":N=vv;break;case"copy":case"cut":case"paste":N=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=od;break;case"toggle":case"beforetoggle":N=xv}var lt=(e&4)!==0,Ct=!lt&&(t==="scroll"||t==="scrollend"),j=lt?U!==null?U+"Capture":null:U;lt=[];for(var R=_,M;R!==null;){var Y=R;if(M=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||M===null||j===null||(Y=Gi(R,j),Y!=null&&lt.push(Tl(R,Y,M))),Ct)break;R=R.return}0<lt.length&&(U=new N(U,ut,null,a,k),Q.push({event:U,listeners:lt}))}}if((e&7)===0){t:{if(U=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",U&&a!==pu&&(ut=a.relatedTarget||a.fromElement)&&(_a(ut)||ut[Ma]))break t;if((N||U)&&(U=k.window===k?k:(U=k.ownerDocument)?U.defaultView||U.parentWindow:window,N?(ut=a.relatedTarget||a.toElement,N=_,ut=ut?_a(ut):null,ut!==null&&(Ct=f(ut),lt=ut.tag,ut!==Ct||lt!==5&&lt!==27&&lt!==6)&&(ut=null)):(N=null,ut=_),N!==ut)){if(lt=sd,Y="onMouseLeave",j="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(lt=od,Y="onPointerLeave",j="onPointerEnter",R="pointer"),Ct=N==null?U:Qi(N),M=ut==null?U:Qi(ut),U=new lt(Y,R+"leave",N,a,k),U.target=Ct,U.relatedTarget=M,Y=null,_a(k)===_&&(lt=new lt(j,R+"enter",ut,a,k),lt.target=M,lt.relatedTarget=Ct,Y=lt),Ct=Y,N&&ut)e:{for(lt=N,j=ut,R=0,M=lt;M;M=hi(M))R++;for(M=0,Y=j;Y;Y=hi(Y))M++;for(;0<R-M;)lt=hi(lt),R--;for(;0<M-R;)j=hi(j),M--;for(;R--;){if(lt===j||j!==null&&lt===j.alternate)break e;lt=hi(lt),j=hi(j)}lt=null}else lt=null;N!==null&&Wp(Q,U,N,lt,!1),ut!==null&&Ct!==null&&Wp(Q,Ct,ut,lt,!0)}}t:{if(U=_?Qi(_):window,N=U.nodeName&&U.nodeName.toLowerCase(),N==="select"||N==="input"&&U.type==="file")var W=yd;else if(md(U))if(vd)W=zv;else{W=Cv;var ht=Av}else N=U.nodeName,!N||N.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?_&&hu(_.elementType)&&(W=yd):W=jv;if(W&&(W=W(t,_))){gd(Q,W,a,k);break t}ht&&ht(t,U,_),t==="focusout"&&_&&U.type==="number"&&_.memoizedProps.value!=null&&du(U,"number",U.value)}switch(ht=_?Qi(_):window,t){case"focusin":(md(ht)||ht.contentEditable==="true")&&(Ga=ht,Au=_,Pi=null);break;case"focusout":Pi=Au=Ga=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Od(Q,a,k);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":Od(Q,a,k)}var et;if(Eu)t:{switch(t){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else Qa?hd(t,a)&&(st="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(cd&&a.locale!=="ko"&&(Qa||st!=="onCompositionStart"?st==="onCompositionEnd"&&Qa&&(et=ld()):(Dn=k,vu="value"in Dn?Dn.value:Dn.textContent,Qa=!0)),ht=Wr(_,st),0<ht.length&&(st=new ud(st,t,null,a,k),Q.push({event:st,listeners:ht}),et?st.data=et:(et=pd(a),et!==null&&(st.data=et)))),(et=wv?Ev(t,a):Rv(t,a))&&(st=Wr(_,"onBeforeInput"),0<st.length&&(ht=new ud("onBeforeInput","beforeinput",null,a,k),Q.push({event:ht,listeners:st}),ht.data=et)),p1(Q,t,_,a,k)}Jp(Q,e)})}function Tl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Wr(t,e){for(var a=e+"Capture",i=[];t!==null;){var u=t,o=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||o===null||(u=Gi(t,a),u!=null&&i.unshift(Tl(t,u,o)),u=Gi(t,e),u!=null&&i.push(Tl(t,u,o))),t.tag===3)return i;t=t.return}return[]}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wp(t,e,a,i,u){for(var o=e._reactName,h=[];a!==null&&a!==i;){var b=a,x=b.alternate,_=b.stateNode;if(b=b.tag,x!==null&&x===i)break;b!==5&&b!==26&&b!==27||_===null||(x=_,u?(_=Gi(a,o),_!=null&&h.unshift(Tl(a,_,x))):u||(_=Gi(a,o),_!=null&&h.push(Tl(a,_,x)))),a=a.return}h.length!==0&&t.push({event:e,listeners:h})}var v1=/\r\n?/g,b1=/\u0000|\uFFFD/g;function Ip(t){return(typeof t=="string"?t:""+t).replace(v1,`
`).replace(b1,"")}function t0(t,e){return e=Ip(e),Ip(t)===e}function Ir(){}function At(t,e,a,i,u,o){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Ha(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Ha(t,""+i);break;case"className":ir(t,"class",i);break;case"tabIndex":ir(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ir(t,a,i);break;case"style":nd(t,i,o);break;case"data":if(e!=="object"){ir(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=sr(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(e!=="input"&&At(t,e,"name",u.name,u,null),At(t,e,"formEncType",u.formEncType,u,null),At(t,e,"formMethod",u.formMethod,u,null),At(t,e,"formTarget",u.formTarget,u,null)):(At(t,e,"encType",u.encType,u,null),At(t,e,"method",u.method,u,null),At(t,e,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=sr(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=Ir);break;case"onScroll":i!=null&&yt("scroll",t);break;case"onScrollEnd":i!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=sr(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":yt("beforetoggle",t),yt("toggle",t),ar(t,"popover",i);break;case"xlinkActuate":cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ar(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fy.get(a)||a,ar(t,a,i))}}function Wo(t,e,a,i,u,o){switch(a){case"style":nd(t,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof i=="string"?Ha(t,i):(typeof i=="number"||typeof i=="bigint")&&Ha(t,""+i);break;case"onScroll":i!=null&&yt("scroll",t);break;case"onScrollEnd":i!=null&&yt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),e=a.slice(2,u?a.length-7:void 0),o=t[de]||null,o=o!=null?o[a]:null,typeof o=="function"&&t.removeEventListener(e,o,u),typeof i=="function")){typeof o!="function"&&o!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,u);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):ar(t,a,i)}}}function ae(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var i=!1,u=!1,o;for(o in a)if(a.hasOwnProperty(o)){var h=a[o];if(h!=null)switch(o){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:At(t,e,o,h,a,null)}}u&&At(t,e,"srcSet",a.srcSet,a,null),i&&At(t,e,"src",a.src,a,null);return;case"input":yt("invalid",t);var b=o=h=u=null,x=null,_=null;for(i in a)if(a.hasOwnProperty(i)){var k=a[i];if(k!=null)switch(i){case"name":u=k;break;case"type":h=k;break;case"checked":x=k;break;case"defaultChecked":_=k;break;case"value":o=k;break;case"defaultValue":b=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,e));break;default:At(t,e,i,k,a,null)}}Wf(t,o,b,x,_,h,u,!1),lr(t);return;case"select":yt("invalid",t),i=h=o=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":o=b;break;case"defaultValue":h=b;break;case"multiple":i=b;default:At(t,e,u,b,a,null)}e=o,a=h,t.multiple=!!i,e!=null?qa(t,!!i,e,!1):a!=null&&qa(t,!!i,a,!0);return;case"textarea":yt("invalid",t),o=u=i=null;for(h in a)if(a.hasOwnProperty(h)&&(b=a[h],b!=null))switch(h){case"value":i=b;break;case"defaultValue":u=b;break;case"children":o=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:At(t,e,h,b,a,null)}td(t,i,u,o),lr(t);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(i=a[x],i!=null))switch(x){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:At(t,e,x,i,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(i=0;i<Rl.length;i++)yt(Rl[i],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in a)if(a.hasOwnProperty(_)&&(i=a[_],i!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:At(t,e,_,i,a,null)}return;default:if(hu(e)){for(k in a)a.hasOwnProperty(k)&&(i=a[k],i!==void 0&&Wo(t,e,k,i,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null&&At(t,e,b,i,a,null))}function x1(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,o=null,h=null,b=null,x=null,_=null,k=null;for(N in a){var Q=a[N];if(a.hasOwnProperty(N)&&Q!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":x=Q;default:i.hasOwnProperty(N)||At(t,e,N,null,i,Q)}}for(var U in i){var N=i[U];if(Q=a[U],i.hasOwnProperty(U)&&(N!=null||Q!=null))switch(U){case"type":o=N;break;case"name":u=N;break;case"checked":_=N;break;case"defaultChecked":k=N;break;case"value":h=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:N!==Q&&At(t,e,U,N,i,Q)}}fu(t,h,b,x,_,k,o,u);return;case"select":N=h=b=U=null;for(o in a)if(x=a[o],a.hasOwnProperty(o)&&x!=null)switch(o){case"value":break;case"multiple":N=x;default:i.hasOwnProperty(o)||At(t,e,o,null,i,x)}for(u in i)if(o=i[u],x=a[u],i.hasOwnProperty(u)&&(o!=null||x!=null))switch(u){case"value":U=o;break;case"defaultValue":b=o;break;case"multiple":h=o;default:o!==x&&At(t,e,u,o,i,x)}e=b,a=h,i=N,U!=null?qa(t,!!a,U,!1):!!i!=!!a&&(e!=null?qa(t,!!a,e,!0):qa(t,!!a,a?[]:"",!1));return;case"textarea":N=U=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:At(t,e,b,null,i,u)}for(h in i)if(u=i[h],o=a[h],i.hasOwnProperty(h)&&(u!=null||o!=null))switch(h){case"value":U=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==o&&At(t,e,h,u,i,o)}If(t,U,N);return;case"option":for(var ut in a)if(U=a[ut],a.hasOwnProperty(ut)&&U!=null&&!i.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:At(t,e,ut,null,i,U)}for(x in i)if(U=i[x],N=a[x],i.hasOwnProperty(x)&&U!==N&&(U!=null||N!=null))switch(x){case"selected":t.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:At(t,e,x,U,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in a)U=a[lt],a.hasOwnProperty(lt)&&U!=null&&!i.hasOwnProperty(lt)&&At(t,e,lt,null,i,U);for(_ in i)if(U=i[_],N=a[_],i.hasOwnProperty(_)&&U!==N&&(U!=null||N!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,e));break;default:At(t,e,_,U,i,N)}return;default:if(hu(e)){for(var Ct in a)U=a[Ct],a.hasOwnProperty(Ct)&&U!==void 0&&!i.hasOwnProperty(Ct)&&Wo(t,e,Ct,void 0,i,U);for(k in i)U=i[k],N=a[k],!i.hasOwnProperty(k)||U===N||U===void 0&&N===void 0||Wo(t,e,k,U,i,N);return}}for(var j in a)U=a[j],a.hasOwnProperty(j)&&U!=null&&!i.hasOwnProperty(j)&&At(t,e,j,null,i,U);for(Q in i)U=i[Q],N=a[Q],!i.hasOwnProperty(Q)||U===N||U==null&&N==null||At(t,e,Q,U,i,N)}var Io=null,tc=null;function ts(t){return t.nodeType===9?t:t.ownerDocument}function e0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nc=null;function S1(){var t=window.event;return t&&t.type==="popstate"?t===nc?!1:(nc=t,!0):(nc=null,!1)}var a0=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,E1=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(R1)}:a0;function R1(t){setTimeout(function(){throw t})}function Vn(t){return t==="head"}function l0(t,e){var a=e,i=0,u=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<i&&8>i){a=i;var h=t.ownerDocument;if(a&1&&Ol(h.documentElement),a&2&&Ol(h.body),a&4)for(a=h.head,Ol(a),h=a.firstChild;h;){var b=h.nextSibling,x=h.nodeName;h[Yi]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=b}}if(u===0){t.removeChild(o),Ul(e);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:i=a.charCodeAt(0)-48;else i=0;a=o}while(a);Ul(e)}function ac(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ac(a),su(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function T1(t,e,a,i){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Yi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Xe(t.nextSibling),t===null)break}return null}function O1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Xe(t.nextSibling),t===null))return null;return t}function ic(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function A1(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var lc=null;function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function s0(t,e,a){switch(e=ts(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ol(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);su(t)}var qe=new Map,u0=new Set;function es(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Rn=Z.d;Z.d={f:C1,r:j1,D:z1,C:D1,L:M1,m:_1,X:N1,S:U1,M:B1};function C1(){var t=Rn.f(),e=Kr();return t||e}function j1(t){var e=Ua(t);e!==null&&e.tag===5&&e.type==="form"?Ch(e):Rn.r(t)}var pi=typeof document>"u"?null:document;function o0(t,e,a){var i=pi;if(i&&typeof e=="string"&&e){var u=De(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u0.has(u)||(u0.add(u),t={rel:t,crossOrigin:a,href:e},i.querySelector(u)===null&&(e=i.createElement("link"),ae(e,"link",t),Jt(e),i.head.appendChild(e)))}}function z1(t){Rn.D(t),o0("dns-prefetch",t,null)}function D1(t,e){Rn.C(t,e),o0("preconnect",t,e)}function M1(t,e,a){Rn.L(t,e,a);var i=pi;if(i&&t&&e){var u='link[rel="preload"][as="'+De(e)+'"]';e==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+De(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+De(a.imageSizes)+'"]')):u+='[href="'+De(t)+'"]';var o=u;switch(e){case"style":o=mi(t);break;case"script":o=gi(t)}qe.has(o)||(t=g({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),qe.set(o,t),i.querySelector(u)!==null||e==="style"&&i.querySelector(Al(o))||e==="script"&&i.querySelector(Cl(o))||(e=i.createElement("link"),ae(e,"link",t),Jt(e),i.head.appendChild(e)))}}function _1(t,e){Rn.m(t,e);var a=pi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+De(i)+'"][href="'+De(t)+'"]',o=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=gi(t)}if(!qe.has(o)&&(t=g({rel:"modulepreload",href:t},e),qe.set(o,t),a.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cl(o)))return}i=a.createElement("link"),ae(i,"link",t),Jt(i),a.head.appendChild(i)}}}function U1(t,e,a){Rn.S(t,e,a);var i=pi;if(i&&t){var u=Na(i).hoistableStyles,o=mi(t);e=e||"default";var h=u.get(o);if(!h){var b={loading:0,preload:null};if(h=i.querySelector(Al(o)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":e},a),(a=qe.get(o))&&rc(t,a);var x=h=i.createElement("link");Jt(x),ae(x,"link",t),x._p=new Promise(function(_,k){x.onload=_,x.onerror=k}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ns(h,e,i)}h={type:"stylesheet",instance:h,count:1,state:b},u.set(o,h)}}}function N1(t,e){Rn.X(t,e);var a=pi;if(a&&t){var i=Na(a).hoistableScripts,u=gi(t),o=i.get(u);o||(o=a.querySelector(Cl(u)),o||(t=g({src:t,async:!0},e),(e=qe.get(u))&&sc(t,e),o=a.createElement("script"),Jt(o),ae(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function B1(t,e){Rn.M(t,e);var a=pi;if(a&&t){var i=Na(a).hoistableScripts,u=gi(t),o=i.get(u);o||(o=a.querySelector(Cl(u)),o||(t=g({src:t,async:!0,type:"module"},e),(e=qe.get(u))&&sc(t,e),o=a.createElement("script"),Jt(o),ae(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function c0(t,e,a,i){var u=(u=rt.current)?es(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=mi(a.href),a=Na(u).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mi(a.href);var o=Na(u).hoistableStyles,h=o.get(t);if(h||(u=u.ownerDocument||u,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,h),(o=u.querySelector(Al(t)))&&!o._p&&(h.instance=o,h.state.loading=5),qe.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qe.set(t,a),o||L1(u,t,a,h.state))),e&&i===null)throw Error(s(528,""));return h}if(e&&i!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=gi(a),a=Na(u).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function mi(t){return'href="'+De(t)+'"'}function Al(t){return'link[rel="stylesheet"]['+t+"]"}function f0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function L1(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ae(e,"link",a),Jt(e),t.head.appendChild(e))}function gi(t){return'[src="'+De(t)+'"]'}function Cl(t){return"script[async]"+t}function d0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+De(a.href)+'"]');if(i)return e.instance=i,Jt(i),i;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Jt(i),ae(i,"style",u),ns(i,a.precedence,t),e.instance=i;case"stylesheet":u=mi(a.href);var o=t.querySelector(Al(u));if(o)return e.state.loading|=4,e.instance=o,Jt(o),o;i=f0(a),(u=qe.get(u))&&rc(i,u),o=(t.ownerDocument||t).createElement("link"),Jt(o);var h=o;return h._p=new Promise(function(b,x){h.onload=b,h.onerror=x}),ae(o,"link",i),e.state.loading|=4,ns(o,a.precedence,t),e.instance=o;case"script":return o=gi(a.src),(u=t.querySelector(Cl(o)))?(e.instance=u,Jt(u),u):(i=a,(u=qe.get(o))&&(i=g({},a),sc(i,u)),t=t.ownerDocument||t,u=t.createElement("script"),Jt(u),ae(u,"link",i),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,ns(i,a.precedence,t));return e.instance}function ns(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,o=u,h=0;h<i.length;h++){var b=i[h];if(b.dataset.precedence===e)o=b;else if(o!==u)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function rc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function sc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var as=null;function h0(t,e,a){if(as===null){var i=new Map,u=as=new Map;u.set(a,i)}else u=as,i=u.get(a),i||(i=new Map,u.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var o=a[u];if(!(o[Yi]||o[le]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var h=o.getAttribute(e)||"";h=t+h;var b=i.get(h);b?b.push(o):i.set(h,[o])}}return i}function p0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function q1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function m0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var jl=null;function H1(){}function k1(t,e,a){if(jl===null)throw Error(s(475));var i=jl;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=mi(a.href),o=t.querySelector(Al(u));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=is.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=o,Jt(o);return}o=t.ownerDocument||t,a=f0(a),(u=qe.get(u))&&rc(a,u),o=o.createElement("link"),Jt(o);var h=o;h._p=new Promise(function(b,x){h.onload=b,h.onerror=x}),ae(o,"link",a),e.instance=o}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(i.count++,e=is.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function Y1(){if(jl===null)throw Error(s(475));var t=jl;return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function is(){if(this.count--,this.count===0){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ls=null;function uc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ls=new Map,e.forEach(Q1,t),ls=null,is.call(t))}function Q1(t,e){if(!(e.state.loading&4)){var a=ls.get(t);if(a)var i=a.get(null);else{a=new Map,ls.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<u.length;o++){var h=u[o];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(a.set(h.dataset.precedence,h),i=h)}i&&a.set(null,i)}u=e.instance,h=u.getAttribute("data-precedence"),o=a.get(h)||i,o===i&&a.set(null,u),a.set(h,u),this.count++,i=is.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),o?o.parentNode.insertBefore(u,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var zl={$$typeof:$,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function G1(t,e,a,i,u,o,h,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=o,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function g0(t,e,a,i,u,o,h,b,x,_,k,Q){return t=new G1(t,e,a,h,b,x,_,Q),e=1,o===!0&&(e|=24),o=we(3,null,null,e),t.current=o,o.stateNode=t,e=Qu(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:i,isDehydrated:a,cache:e},Ku(o),t}function y0(t){return t?(t=Va,t):Va}function v0(t,e,a,i,u,o){u=y0(u),i.context===null?i.context=u:i.pendingContext=u,i=Un(e),i.payload={element:a},o=o===void 0?null:o,o!==null&&(i.callback=o),a=Nn(t,i,e),a!==null&&(Ae(a,t,e),rl(a,t,e))}function b0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function oc(t,e){b0(t,e),(t=t.alternate)&&b0(t,e)}function x0(t){if(t.tag===13){var e=Ka(t,67108864);e!==null&&Ae(e,t,67108864),oc(t,67108864)}}var rs=!0;function $1(t,e,a,i){var u=H.T;H.T=null;var o=Z.p;try{Z.p=2,cc(t,e,a,i)}finally{Z.p=o,H.T=u}}function X1(t,e,a,i){var u=H.T;H.T=null;var o=Z.p;try{Z.p=8,cc(t,e,a,i)}finally{Z.p=o,H.T=u}}function cc(t,e,a,i){if(rs){var u=fc(i);if(u===null)Po(t,e,i,ss,a),w0(t,i);else if(V1(u,t,e,a,i))i.stopPropagation();else if(w0(t,i),e&4&&-1<K1.indexOf(t)){for(;u!==null;){var o=Ua(u);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var h=aa(o.pendingLanes);if(h!==0){var b=o;for(b.pendingLanes|=2,b.entangledLanes|=2;h;){var x=1<<31-xe(h);b.entanglements[1]|=x,h&=~x}nn(o),(Rt&6)===0&&($r=Pe()+500,El(0))}}break;case 13:b=Ka(o,2),b!==null&&Ae(b,o,2),Kr(),oc(o,2)}if(o=fc(i),o===null&&Po(t,e,i,ss,a),o===u)break;u=o}u!==null&&i.stopPropagation()}else Po(t,e,i,null,a)}}function fc(t){return t=mu(t),dc(t)}var ss=null;function dc(t){if(ss=null,t=_a(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ss=t,null}function S0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dy()){case Nf:return 2;case Bf:return 8;case Il:case My:return 32;case Lf:return 268435456;default:return 32}default:return 32}}var hc=!1,Zn=null,Fn=null,Jn=null,Dl=new Map,Ml=new Map,Pn=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Dl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(e.pointerId)}}function _l(t,e,a,i,u,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:o,targetContainers:[u]},e!==null&&(e=Ua(e),e!==null&&x0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function V1(t,e,a,i,u){switch(e){case"focusin":return Zn=_l(Zn,t,e,a,i,u),!0;case"dragenter":return Fn=_l(Fn,t,e,a,i,u),!0;case"mouseover":return Jn=_l(Jn,t,e,a,i,u),!0;case"pointerover":var o=u.pointerId;return Dl.set(o,_l(Dl.get(o)||null,t,e,a,i,u)),!0;case"gotpointercapture":return o=u.pointerId,Ml.set(o,_l(Ml.get(o)||null,t,e,a,i,u)),!0}return!1}function E0(t){var e=_a(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,ky(t.priority,function(){if(a.tag===13){var i=Oe();i=iu(i);var u=Ka(a,i);u!==null&&Ae(u,a,i),oc(a,i)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function us(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=fc(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);pu=i,a.target.dispatchEvent(i),pu=null}else return e=Ua(a),e!==null&&x0(e),t.blockedOn=a,!1;e.shift()}return!0}function R0(t,e,a){us(t)&&a.delete(e)}function Z1(){hc=!1,Zn!==null&&us(Zn)&&(Zn=null),Fn!==null&&us(Fn)&&(Fn=null),Jn!==null&&us(Jn)&&(Jn=null),Dl.forEach(R0),Ml.forEach(R0)}function os(t,e){t.blockedOn===e&&(t.blockedOn=null,hc||(hc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Z1)))}var cs=null;function T0(t){cs!==t&&(cs=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){cs===t&&(cs=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],u=t[e+2];if(typeof i!="function"){if(dc(i||a)===null)continue;break}var o=Ua(a);o!==null&&(t.splice(e,3),e-=3,fo(o,{pending:!0,data:u,method:a.method,action:i},i,u))}}))}function Ul(t){function e(x){return os(x,t)}Zn!==null&&os(Zn,t),Fn!==null&&os(Fn,t),Jn!==null&&os(Jn,t),Dl.forEach(e),Ml.forEach(e);for(var a=0;a<Pn.length;a++){var i=Pn[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Pn.length&&(a=Pn[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&Pn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var u=a[i],o=a[i+1],h=u[de]||null;if(typeof o=="function")h||T0(a);else if(h){var b=null;if(o&&o.hasAttribute("formAction")){if(u=o,h=o[de]||null)b=h.formAction;else if(dc(u)!==null)continue}else b=h.action;typeof b=="function"?a[i+1]=b:(a.splice(i,3),i-=3),T0(a)}}}function pc(t){this._internalRoot=t}fs.prototype.render=pc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,i=Oe();v0(a,i,t,e,null,null)},fs.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;v0(t.current,2,null,t,null,null),Kr(),e[Ma]=null}};function fs(t){this._internalRoot=t}fs.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Pn.length&&e!==0&&e<Pn[a].priority;a++);Pn.splice(a,0,t),a===0&&E0(t)}};var O0=l.version;if(O0!=="19.1.1")throw Error(s(527,O0,"19.1.1"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=y(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var F1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{qi=ds.inject(F1),be=ds}catch{}}return Bl.createRoot=function(t,e){if(!c(t))throw Error(s(299));var a=!1,i="",u=Qh,o=Gh,h=$h,b=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=g0(t,1,!1,null,null,a,i,u,o,h,b,null),t[Ma]=e.current,Jo(t),new pc(e)},Bl.hydrateRoot=function(t,e,a){if(!c(t))throw Error(s(299));var i=!1,u="",o=Qh,h=Gh,b=$h,x=null,_=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(_=a.formState)),e=g0(t,1,!0,e,a??null,i,u,o,h,b,x,_),e.context=y0(null),a=e.current,i=Oe(),i=iu(i),u=Un(i),u.callback=null,Nn(a,u,i),a=i,e.current.lanes=a,ki(e,a),nn(e),t[Ma]=e.current,Jo(t),new fs(e)},Bl.version="19.1.1",Bl}var B0;function rb(){if(B0)return yc.exports;B0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),yc.exports=lb(),yc.exports}var sb=rb();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var L0="popstate";function ub(n={}){function l(s,c){let{pathname:f,search:d,hash:m}=s.location;return Lc("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(s,c){return typeof c=="string"?c:Yl(c)}return cb(l,r,null,n)}function Nt(n,l){if(n===!1||n===null||typeof n>"u")throw new Error(l)}function Ve(n,l){if(!n){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function q0(n,l){return{usr:n.state,key:n.key,idx:l}}function Lc(n,l,r=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof l=="string"?Ai(l):l,state:r,key:l&&l.key||s||ob()}}function Yl({pathname:n="/",search:l="",hash:r=""}){return l&&l!=="?"&&(n+=l.charAt(0)==="?"?l:"?"+l),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Ai(n){let l={};if(n){let r=n.indexOf("#");r>=0&&(l.hash=n.substring(r),n=n.substring(0,r));let s=n.indexOf("?");s>=0&&(l.search=n.substring(s),n=n.substring(0,s)),n&&(l.pathname=n)}return l}function cb(n,l,r,s={}){let{window:c=document.defaultView,v5Compat:f=!1}=s,d=c.history,m="POP",y=null,p=g();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function g(){return(d.state||{idx:null}).idx}function S(){m="POP";let C=g(),L=C==null?null:C-p;p=C,y&&y({action:m,location:D.location,delta:L})}function O(C,L){m="PUSH";let q=Lc(D.location,C,L);p=g()+1;let $=q0(q,p),J=D.createHref(q);try{d.pushState($,"",J)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;c.location.assign(J)}f&&y&&y({action:m,location:D.location,delta:1})}function z(C,L){m="REPLACE";let q=Lc(D.location,C,L);p=g();let $=q0(q,p),J=D.createHref(q);d.replaceState($,"",J),f&&y&&y({action:m,location:D.location,delta:0})}function A(C){return fb(C)}let D={get action(){return m},get location(){return n(c,d)},listen(C){if(y)throw new Error("A history only accepts one active listener");return c.addEventListener(L0,S),y=C,()=>{c.removeEventListener(L0,S),y=null}},createHref(C){return l(c,C)},createURL:A,encodeLocation(C){let L=A(C);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:O,replace:z,go(C){return d.go(C)}};return D}function fb(n,l=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Nt(r,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:Yl(n);return s=s.replace(/ $/,"%20"),!l&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function km(n,l,r="/"){return db(n,l,r,!1)}function db(n,l,r,s){let c=typeof l=="string"?Ai(l):l,f=Cn(c.pathname||"/",r);if(f==null)return null;let d=Ym(n);hb(d);let m=null;for(let y=0;m==null&&y<d.length;++y){let p=Rb(f);m=wb(d[y],p,s)}return m}function Ym(n,l=[],r=[],s="",c=!1){let f=(d,m,y=c,p)=>{let g={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&y)return;Nt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let S=An([s,g.relativePath]),O=r.concat(g);d.children&&d.children.length>0&&(Nt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),Ym(d.children,l,O,S,y)),!(d.path==null&&!d.index)&&l.push({path:S,score:xb(S,d.index),routesMeta:O})};return n.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))f(d,m);else for(let y of Qm(d.path))f(d,m,!0,y)}),l}function Qm(n){let l=n.split("/");if(l.length===0)return[];let[r,...s]=l,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(s.length===0)return c?[f,""]:[f];let d=Qm(s.join("/")),m=[];return m.push(...d.map(y=>y===""?f:[f,y].join("/"))),c&&m.push(...d),m.map(y=>n.startsWith("/")&&y===""?"/":y)}function hb(n){n.sort((l,r)=>l.score!==r.score?r.score-l.score:Sb(l.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var pb=/^:[\w-]+$/,mb=3,gb=2,yb=1,vb=10,bb=-2,H0=n=>n==="*";function xb(n,l){let r=n.split("/"),s=r.length;return r.some(H0)&&(s+=bb),l&&(s+=gb),r.filter(c=>!H0(c)).reduce((c,f)=>c+(pb.test(f)?mb:f===""?yb:vb),s)}function Sb(n,l){return n.length===l.length&&n.slice(0,-1).every((s,c)=>s===l[c])?n[n.length-1]-l[l.length-1]:0}function wb(n,l,r=!1){let{routesMeta:s}=n,c={},f="/",d=[];for(let m=0;m<s.length;++m){let y=s[m],p=m===s.length-1,g=f==="/"?l:l.slice(f.length)||"/",S=Cs({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},g),O=y.route;if(!S&&p&&r&&!s[s.length-1].route.index&&(S=Cs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},g)),!S)return null;Object.assign(c,S.params),d.push({params:c,pathname:An([f,S.pathname]),pathnameBase:Cb(An([f,S.pathnameBase])),route:O}),S.pathnameBase!=="/"&&(f=An([f,S.pathnameBase]))}return d}function Cs(n,l){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,s]=Eb(n.path,n.caseSensitive,n.end),c=l.match(r);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:S},O)=>{if(g==="*"){let A=m[O]||"";d=f.slice(0,f.length-A.length).replace(/(.)\/+$/,"$1")}const z=m[O];return S&&!z?p[g]=void 0:p[g]=(z||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:n}}function Eb(n,l=!1,r=!0){Ve(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,y)=>(s.push({paramName:m,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),s]}function Rb(n){try{return n.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Ve(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),n}}function Cn(n,l){if(l==="/")return n;if(!n.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,s=n.charAt(r);return s&&s!=="/"?null:n.slice(r)||"/"}function Tb(n,l="/"){let{pathname:r,search:s="",hash:c=""}=typeof n=="string"?Ai(n):n;return{pathname:r?r.startsWith("/")?r:Ob(r,l):l,search:jb(s),hash:zb(c)}}function Ob(n,l){let r=l.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Sc(n,l,r,s){return`Cannot include a '${n}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ab(n){return n.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function of(n){let l=Ab(n);return l.map((r,s)=>s===l.length-1?r.pathname:r.pathnameBase)}function cf(n,l,r,s=!1){let c;typeof n=="string"?c=Ai(n):(c={...n},Nt(!c.pathname||!c.pathname.includes("?"),Sc("?","pathname","search",c)),Nt(!c.pathname||!c.pathname.includes("#"),Sc("#","pathname","hash",c)),Nt(!c.search||!c.search.includes("#"),Sc("#","search","hash",c)));let f=n===""||c.pathname==="",d=f?"/":c.pathname,m;if(d==null)m=r;else{let S=l.length-1;if(!s&&d.startsWith("..")){let O=d.split("/");for(;O[0]==="..";)O.shift(),S-=1;c.pathname=O.join("/")}m=S>=0?l[S]:"/"}let y=Tb(c,m),p=d&&d!=="/"&&d.endsWith("/"),g=(f||d===".")&&r.endsWith("/");return!y.pathname.endsWith("/")&&(p||g)&&(y.pathname+="/"),y}var An=n=>n.join("/").replace(/\/\/+/g,"/"),Cb=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),jb=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,zb=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Db(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Gm=["POST","PUT","PATCH","DELETE"];new Set(Gm);var Mb=["GET",...Gm];new Set(Mb);var Ci=w.createContext(null);Ci.displayName="DataRouter";var Hs=w.createContext(null);Hs.displayName="DataRouterState";w.createContext(!1);var $m=w.createContext({isTransitioning:!1});$m.displayName="ViewTransition";var _b=w.createContext(new Map);_b.displayName="Fetchers";var Ub=w.createContext(null);Ub.displayName="Await";var Ze=w.createContext(null);Ze.displayName="Navigation";var Xl=w.createContext(null);Xl.displayName="Location";var Fe=w.createContext({outlet:null,matches:[],isDataRoute:!1});Fe.displayName="Route";var ff=w.createContext(null);ff.displayName="RouteError";function Nb(n,{relative:l}={}){Nt(ji(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=w.useContext(Ze),{hash:c,pathname:f,search:d}=Kl(n,{relative:l}),m=f;return r!=="/"&&(m=f==="/"?r:An([r,f])),s.createHref({pathname:m,search:d,hash:c})}function ji(){return w.useContext(Xl)!=null}function Ye(){return Nt(ji(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Xl).location}var Xm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Km(n){w.useContext(Ze).static||w.useLayoutEffect(n)}function Qe(){let{isDataRoute:n}=w.useContext(Fe);return n?Fb():Bb()}function Bb(){Nt(ji(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(Ci),{basename:l,navigator:r}=w.useContext(Ze),{matches:s}=w.useContext(Fe),{pathname:c}=Ye(),f=JSON.stringify(of(s)),d=w.useRef(!1);return Km(()=>{d.current=!0}),w.useCallback((y,p={})=>{if(Ve(d.current,Xm),!d.current)return;if(typeof y=="number"){r.go(y);return}let g=cf(y,JSON.parse(f),c,p.relative==="path");n==null&&l!=="/"&&(g.pathname=g.pathname==="/"?l:An([l,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[l,r,f,c,n])}w.createContext(null);function Lb(){let{matches:n}=w.useContext(Fe),l=n[n.length-1];return l?l.params:{}}function Kl(n,{relative:l}={}){let{matches:r}=w.useContext(Fe),{pathname:s}=Ye(),c=JSON.stringify(of(r));return w.useMemo(()=>cf(n,JSON.parse(c),s,l==="path"),[n,c,s,l])}function qb(n,l){return Vm(n,l)}function Vm(n,l,r,s,c){Nt(ji(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=w.useContext(Ze),{matches:d}=w.useContext(Fe),m=d[d.length-1],y=m?m.params:{},p=m?m.pathname:"/",g=m?m.pathnameBase:"/",S=m&&m.route;{let q=S&&S.path||"";Zm(p,!S||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let O=Ye(),z;if(l){let q=typeof l=="string"?Ai(l):l;Nt(g==="/"||q.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${q.pathname}" was given in the \`location\` prop.`),z=q}else z=O;let A=z.pathname||"/",D=A;if(g!=="/"){let q=g.replace(/^\//,"").split("/");D="/"+A.replace(/^\//,"").split("/").slice(q.length).join("/")}let C=km(n,{pathname:D});Ve(S||C!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),Ve(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Gb(C&&C.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:An([g,f.encodeLocation?f.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?g:An([g,f.encodeLocation?f.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),d,r,s,c);return l&&L?w.createElement(Xl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...z},navigationType:"POP"}},L):L}function Hb(){let n=Zb(),l=Db(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:f},"ErrorBoundary")," or"," ",w.createElement("code",{style:f},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},l),r?w.createElement("pre",{style:c},r):null,d)}var kb=w.createElement(Hb,null),Yb=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,l){return l.location!==n.location||l.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:l.error,location:l.location,revalidation:n.revalidation||l.revalidation}}componentDidCatch(n,l){this.props.unstable_onError?this.props.unstable_onError(n,l):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?w.createElement(Fe.Provider,{value:this.props.routeContext},w.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Qb({routeContext:n,match:l,children:r}){let s=w.useContext(Ci);return s&&s.static&&s.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=l.route.id),w.createElement(Fe.Provider,{value:n},r)}function Gb(n,l=[],r=null,s=null,c=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(l.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let f=n,d=r?.errors;if(d!=null){let p=f.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);Nt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,p+1))}let m=!1,y=-1;if(r)for(let p=0;p<f.length;p++){let g=f[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(y=p),g.route.id){let{loaderData:S,errors:O}=r,z=g.route.loader&&!S.hasOwnProperty(g.route.id)&&(!O||O[g.route.id]===void 0);if(g.route.lazy||z){m=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((p,g,S)=>{let O,z=!1,A=null,D=null;r&&(O=d&&g.route.id?d[g.route.id]:void 0,A=g.route.errorElement||kb,m&&(y<0&&S===0?(Zm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,D=null):y===S&&(z=!0,D=g.route.hydrateFallbackElement||null)));let C=l.concat(f.slice(0,S+1)),L=()=>{let q;return O?q=A:z?q=D:g.route.Component?q=w.createElement(g.route.Component,null):g.route.element?q=g.route.element:q=p,w.createElement(Qb,{match:g,routeContext:{outlet:p,matches:C,isDataRoute:r!=null},children:q})};return r&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?w.createElement(Yb,{location:r.location,revalidation:r.revalidation,component:A,error:O,children:L(),routeContext:{outlet:null,matches:C,isDataRoute:!0},unstable_onError:s}):L()},null)}function df(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $b(n){let l=w.useContext(Ci);return Nt(l,df(n)),l}function Xb(n){let l=w.useContext(Hs);return Nt(l,df(n)),l}function Kb(n){let l=w.useContext(Fe);return Nt(l,df(n)),l}function hf(n){let l=Kb(n),r=l.matches[l.matches.length-1];return Nt(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function Vb(){return hf("useRouteId")}function Zb(){let n=w.useContext(ff),l=Xb("useRouteError"),r=hf("useRouteError");return n!==void 0?n:l.errors?.[r]}function Fb(){let{router:n}=$b("useNavigate"),l=hf("useNavigate"),r=w.useRef(!1);return Km(()=>{r.current=!0}),w.useCallback(async(c,f={})=>{Ve(r.current,Xm),r.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:l,...f}))},[n,l])}var k0={};function Zm(n,l,r){!l&&!k0[n]&&(k0[n]=!0,Ve(!1,r))}w.memo(Jb);function Jb({routes:n,future:l,state:r,unstable_onError:s}){return Vm(n,void 0,r,s,l)}function Pb({to:n,replace:l,state:r,relative:s}){Nt(ji(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=w.useContext(Ze);Ve(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=w.useContext(Fe),{pathname:d}=Ye(),m=Qe(),y=cf(n,of(f),d,s==="path"),p=JSON.stringify(y);return w.useEffect(()=>{m(JSON.parse(p),{replace:l,state:r,relative:s})},[m,p,s,l,r]),null}function Tn(n){Nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wb({basename:n="/",children:l=null,location:r,navigationType:s="POP",navigator:c,static:f=!1}){Nt(!ji(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:d,navigator:c,static:f,future:{}}),[d,c,f]);typeof r=="string"&&(r=Ai(r));let{pathname:y="/",search:p="",hash:g="",state:S=null,key:O="default"}=r,z=w.useMemo(()=>{let A=Cn(y,d);return A==null?null:{location:{pathname:A,search:p,hash:g,state:S,key:O},navigationType:s}},[d,y,p,g,S,O,s]);return Ve(z!=null,`<Router basename="${d}"> is not able to match the URL "${y}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:w.createElement(Ze.Provider,{value:m},w.createElement(Xl.Provider,{children:l,value:z}))}function Ib({children:n,location:l}){return qb(qc(n),l)}function qc(n,l=[]){let r=[];return w.Children.forEach(n,(s,c)=>{if(!w.isValidElement(s))return;let f=[...l,c];if(s.type===w.Fragment){r.push.apply(r,qc(s.props.children,f));return}Nt(s.type===Tn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Nt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=qc(s.props.children,f)),r.push(d)}),r}var vs="get",bs="application/x-www-form-urlencoded";function ks(n){return n!=null&&typeof n.tagName=="string"}function tx(n){return ks(n)&&n.tagName.toLowerCase()==="button"}function ex(n){return ks(n)&&n.tagName.toLowerCase()==="form"}function nx(n){return ks(n)&&n.tagName.toLowerCase()==="input"}function ax(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ix(n,l){return n.button===0&&(!l||l==="_self")&&!ax(n)}var hs=null;function lx(){if(hs===null)try{new FormData(document.createElement("form"),0),hs=!1}catch{hs=!0}return hs}var rx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wc(n){return n!=null&&!rx.has(n)?(Ve(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bs}"`),null):n}function sx(n,l){let r,s,c,f,d;if(ex(n)){let m=n.getAttribute("action");s=m?Cn(m,l):null,r=n.getAttribute("method")||vs,c=wc(n.getAttribute("enctype"))||bs,f=new FormData(n)}else if(tx(n)||nx(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=n.getAttribute("formaction")||m.getAttribute("action");if(s=y?Cn(y,l):null,r=n.getAttribute("formmethod")||m.getAttribute("method")||vs,c=wc(n.getAttribute("formenctype"))||wc(m.getAttribute("enctype"))||bs,f=new FormData(m,n),!lx()){let{name:p,type:g,value:S}=n;if(g==="image"){let O=p?`${p}.`:"";f.append(`${O}x`,"0"),f.append(`${O}y`,"0")}else p&&f.append(p,S)}}else{if(ks(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=vs,s=null,c=bs,d=n}return f&&c==="text/plain"&&(d=f,f=void 0),{action:s,method:r.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pf(n,l){if(n===!1||n===null||typeof n>"u")throw new Error(l)}function ux(n,l,r){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${r}`:l&&Cn(s.pathname,l)==="/"?s.pathname=`${l.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function ox(n,l){if(n.id in l)return l[n.id];try{let r=await import(n.module);return l[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function fx(n,l,r){let s=await Promise.all(n.map(async c=>{let f=l.routes[c.route.id];if(f){let d=await ox(f,r);return d.links?d.links():[]}return[]}));return mx(s.flat(1).filter(cx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Y0(n,l,r,s,c,f){let d=(y,p)=>r[p]?y.route.id!==r[p].route.id:!0,m=(y,p)=>r[p].pathname!==y.pathname||r[p].route.path?.endsWith("*")&&r[p].params["*"]!==y.params["*"];return f==="assets"?l.filter((y,p)=>d(y,p)||m(y,p)):f==="data"?l.filter((y,p)=>{let g=s.routes[y.route.id];if(!g||!g.hasLoader)return!1;if(d(y,p)||m(y,p))return!0;if(y.route.shouldRevalidate){let S=y.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function dx(n,l,{includeHydrateFallback:r}={}){return hx(n.map(s=>{let c=l.routes[s.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function hx(n){return[...new Set(n)]}function px(n){let l={},r=Object.keys(n).sort();for(let s of r)l[s]=n[s];return l}function mx(n,l){let r=new Set;return new Set(l),n.reduce((s,c)=>{let f=JSON.stringify(px(c));return r.has(f)||(r.add(f),s.push({key:f,link:c})),s},[])}function Fm(){let n=w.useContext(Ci);return pf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gx(){let n=w.useContext(Hs);return pf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var mf=w.createContext(void 0);mf.displayName="FrameworkContext";function Jm(){let n=w.useContext(mf);return pf(n,"You must render this element inside a <HydratedRouter> element"),n}function yx(n,l){let r=w.useContext(mf),[s,c]=w.useState(!1),[f,d]=w.useState(!1),{onFocus:m,onBlur:y,onMouseEnter:p,onMouseLeave:g,onTouchStart:S}=l,O=w.useRef(null);w.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let D=L=>{L.forEach(q=>{d(q.isIntersecting)})},C=new IntersectionObserver(D,{threshold:.5});return O.current&&C.observe(O.current),()=>{C.disconnect()}}},[n]),w.useEffect(()=>{if(s){let D=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(D)}}},[s]);let z=()=>{c(!0)},A=()=>{c(!1),d(!1)};return r?n!=="intent"?[f,O,{}]:[f,O,{onFocus:Ll(m,z),onBlur:Ll(y,A),onMouseEnter:Ll(p,z),onMouseLeave:Ll(g,A),onTouchStart:Ll(S,z)}]:[!1,O,{}]}function Ll(n,l){return r=>{n&&n(r),r.defaultPrevented||l(r)}}function vx({page:n,...l}){let{router:r}=Fm(),s=w.useMemo(()=>km(r.routes,n,r.basename),[r.routes,n,r.basename]);return s?w.createElement(xx,{page:n,matches:s,...l}):null}function bx(n){let{manifest:l,routeModules:r}=Jm(),[s,c]=w.useState([]);return w.useEffect(()=>{let f=!1;return fx(n,l,r).then(d=>{f||c(d)}),()=>{f=!0}},[n,l,r]),s}function xx({page:n,matches:l,...r}){let s=Ye(),{manifest:c,routeModules:f}=Jm(),{basename:d}=Fm(),{loaderData:m,matches:y}=gx(),p=w.useMemo(()=>Y0(n,l,y,c,s,"data"),[n,l,y,c,s]),g=w.useMemo(()=>Y0(n,l,y,c,s,"assets"),[n,l,y,c,s]),S=w.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let A=new Set,D=!1;if(l.forEach(L=>{let q=c.routes[L.route.id];!q||!q.hasLoader||(!p.some($=>$.route.id===L.route.id)&&L.route.id in m&&f[L.route.id]?.shouldRevalidate||q.hasClientLoader?D=!0:A.add(L.route.id))}),A.size===0)return[];let C=ux(n,d,"data");return D&&A.size>0&&C.searchParams.set("_routes",l.filter(L=>A.has(L.route.id)).map(L=>L.route.id).join(",")),[C.pathname+C.search]},[d,m,s,c,p,l,n,f]),O=w.useMemo(()=>dx(g,c),[g,c]),z=bx(g);return w.createElement(w.Fragment,null,S.map(A=>w.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...r})),O.map(A=>w.createElement("link",{key:A,rel:"modulepreload",href:A,...r})),z.map(({key:A,link:D})=>w.createElement("link",{key:A,nonce:r.nonce,...D})))}function Sx(...n){return l=>{n.forEach(r=>{typeof r=="function"?r(l):r!=null&&(r.current=l)})}}var Pm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pm&&(window.__reactRouterVersion="7.8.2")}catch{}function wx({basename:n,children:l,window:r}){let s=w.useRef();s.current==null&&(s.current=ub({window:r,v5Compat:!0}));let c=s.current,[f,d]=w.useState({action:c.action,location:c.location}),m=w.useCallback(y=>{w.startTransition(()=>d(y))},[d]);return w.useLayoutEffect(()=>c.listen(m),[c,m]),w.createElement(Wb,{basename:n,children:l,location:f.location,navigationType:f.action,navigator:c})}var Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Im=w.forwardRef(function({onClick:l,discover:r="render",prefetch:s="none",relative:c,reloadDocument:f,replace:d,state:m,target:y,to:p,preventScrollReset:g,viewTransition:S,...O},z){let{basename:A}=w.useContext(Ze),D=typeof p=="string"&&Wm.test(p),C,L=!1;if(typeof p=="string"&&D&&(C=p,Pm))try{let tt=new URL(window.location.href),vt=p.startsWith("//")?new URL(tt.protocol+p):new URL(p),_t=Cn(vt.pathname,A);vt.origin===tt.origin&&_t!=null?p=_t+vt.search+vt.hash:L=!0}catch{Ve(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=Nb(p,{relative:c}),[$,J,X]=yx(s,O),I=Ox(p,{replace:d,state:m,target:y,preventScrollReset:g,relative:c,viewTransition:S});function K(tt){l&&l(tt),tt.defaultPrevented||I(tt)}let P=w.createElement("a",{...O,...X,href:C||q,onClick:L||f?l:K,ref:Sx(z,J),target:y,"data-discover":!D&&r==="render"?"true":void 0});return $&&!D?w.createElement(w.Fragment,null,P,w.createElement(vx,{page:q})):P});Im.displayName="Link";var Ex=w.forwardRef(function({"aria-current":l="page",caseSensitive:r=!1,className:s="",end:c=!1,style:f,to:d,viewTransition:m,children:y,...p},g){let S=Kl(d,{relative:p.relative}),O=Ye(),z=w.useContext(Hs),{navigator:A,basename:D}=w.useContext(Ze),C=z!=null&&Dx(S)&&m===!0,L=A.encodeLocation?A.encodeLocation(S).pathname:S.pathname,q=O.pathname,$=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;r||(q=q.toLowerCase(),$=$?$.toLowerCase():null,L=L.toLowerCase()),$&&D&&($=Cn($,D)||$);const J=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let X=q===L||!c&&q.startsWith(L)&&q.charAt(J)==="/",I=$!=null&&($===L||!c&&$.startsWith(L)&&$.charAt(L.length)==="/"),K={isActive:X,isPending:I,isTransitioning:C},P=X?l:void 0,tt;typeof s=="function"?tt=s(K):tt=[s,X?"active":null,I?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let vt=typeof f=="function"?f(K):f;return w.createElement(Im,{...p,"aria-current":P,className:tt,ref:g,style:vt,to:d,viewTransition:m},typeof y=="function"?y(K):y)});Ex.displayName="NavLink";var Rx=w.forwardRef(({discover:n="render",fetcherKey:l,navigate:r,reloadDocument:s,replace:c,state:f,method:d=vs,action:m,onSubmit:y,relative:p,preventScrollReset:g,viewTransition:S,...O},z)=>{let A=jx(),D=zx(m,{relative:p}),C=d.toLowerCase()==="get"?"get":"post",L=typeof m=="string"&&Wm.test(m),q=$=>{if(y&&y($),$.defaultPrevented)return;$.preventDefault();let J=$.nativeEvent.submitter,X=J?.getAttribute("formmethod")||d;A(J||$.currentTarget,{fetcherKey:l,method:X,navigate:r,replace:c,state:f,relative:p,preventScrollReset:g,viewTransition:S})};return w.createElement("form",{ref:z,method:C,action:D,onSubmit:s?y:q,...O,"data-discover":!L&&n==="render"?"true":void 0})});Rx.displayName="Form";function Tx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tg(n){let l=w.useContext(Ci);return Nt(l,Tx(n)),l}function Ox(n,{target:l,replace:r,state:s,preventScrollReset:c,relative:f,viewTransition:d}={}){let m=Qe(),y=Ye(),p=Kl(n,{relative:f});return w.useCallback(g=>{if(ix(g,l)){g.preventDefault();let S=r!==void 0?r:Yl(y)===Yl(p);m(n,{replace:S,state:s,preventScrollReset:c,relative:f,viewTransition:d})}},[y,m,p,r,s,l,n,c,f,d])}var Ax=0,Cx=()=>`__${String(++Ax)}__`;function jx(){let{router:n}=tg("useSubmit"),{basename:l}=w.useContext(Ze),r=Vb();return w.useCallback(async(s,c={})=>{let{action:f,method:d,encType:m,formData:y,body:p}=sx(s,l);if(c.navigate===!1){let g=c.fetcherKey||Cx();await n.fetch(g,r,c.action||f,{preventScrollReset:c.preventScrollReset,formData:y,body:p,formMethod:c.method||d,formEncType:c.encType||m,flushSync:c.flushSync})}else await n.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:y,body:p,formMethod:c.method||d,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:r,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,l,r])}function zx(n,{relative:l}={}){let{basename:r}=w.useContext(Ze),s=w.useContext(Fe);Nt(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),f={...Kl(n||".",{relative:l})},d=Ye();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),y=m.getAll("index");if(y.some(g=>g==="")){m.delete("index"),y.filter(S=>S).forEach(S=>m.append("index",S));let g=m.toString();f.search=g?`?${g}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:An([r,f.pathname])),Yl(f)}function Dx(n,{relative:l}={}){let r=w.useContext($m);Nt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=tg("useViewTransitionState"),c=Kl(n,{relative:l});if(!r.isTransitioning)return!1;let f=Cn(r.currentLocation.pathname,s)||r.currentLocation.pathname,d=Cn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return Cs(c.pathname,d)!=null||Cs(c.pathname,f)!=null}const Mx="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%239e9e9e'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-search'%3e%3ccircle%20cx='11'%20cy='11'%20r='8'%3e%3c/circle%3e%3cline%20x1='21'%20y1='21'%20x2='16.65'%20y2='16.65'%3e%3c/line%3e%3c/svg%3e",_x="/static/img/user.svg",Ux="/static/img/menu.svg";var oe=function(){return oe=Object.assign||function(l){for(var r,s=1,c=arguments.length;s<c;s++){r=arguments[s];for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&(l[f]=r[f])}return l},oe.apply(this,arguments)};function xi(n,l,r){if(r||arguments.length===2)for(var s=0,c=l.length,f;s<c;s++)(f||!(s in l))&&(f||(f=Array.prototype.slice.call(l,0,s)),f[s]=l[s]);return n.concat(f||Array.prototype.slice.call(l))}var Mt="-ms-",kl="-moz-",Et="-webkit-",eg="comm",Ys="rule",gf="decl",Nx="@import",ng="@keyframes",Bx="@layer",ag=Math.abs,yf=String.fromCharCode,Hc=Object.assign;function Lx(n,l){return te(n,0)^45?(((l<<2^te(n,0))<<2^te(n,1))<<2^te(n,2))<<2^te(n,3):0}function ig(n){return n.trim()}function On(n,l){return(n=l.exec(n))?n[0]:n}function ft(n,l,r){return n.replace(l,r)}function xs(n,l,r){return n.indexOf(l,r)}function te(n,l){return n.charCodeAt(l)|0}function Si(n,l,r){return n.slice(l,r)}function ln(n){return n.length}function lg(n){return n.length}function Hl(n,l){return l.push(n),n}function qx(n,l){return n.map(l).join("")}function Q0(n,l){return n.filter(function(r){return!On(r,l)})}var Qs=1,wi=1,rg=0,ke=0,Gt=0,zi="";function Gs(n,l,r,s,c,f,d,m){return{value:n,root:l,parent:r,type:s,props:c,children:f,line:Qs,column:wi,length:d,return:"",siblings:m}}function In(n,l){return Hc(Gs("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},l)}function yi(n){for(;n.root;)n=In(n.root,{children:[n]});Hl(n,n.siblings)}function Hx(){return Gt}function kx(){return Gt=ke>0?te(zi,--ke):0,wi--,Gt===10&&(wi=1,Qs--),Gt}function Ke(){return Gt=ke<rg?te(zi,ke++):0,wi++,Gt===10&&(wi=1,Qs++),Gt}function Ra(){return te(zi,ke)}function Ss(){return ke}function $s(n,l){return Si(zi,n,l)}function kc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yx(n){return Qs=wi=1,rg=ln(zi=n),ke=0,[]}function Qx(n){return zi="",n}function Ec(n){return ig($s(ke-1,Yc(n===91?n+2:n===40?n+1:n)))}function Gx(n){for(;(Gt=Ra())&&Gt<33;)Ke();return kc(n)>2||kc(Gt)>3?"":" "}function $x(n,l){for(;--l&&Ke()&&!(Gt<48||Gt>102||Gt>57&&Gt<65||Gt>70&&Gt<97););return $s(n,Ss()+(l<6&&Ra()==32&&Ke()==32))}function Yc(n){for(;Ke();)switch(Gt){case n:return ke;case 34:case 39:n!==34&&n!==39&&Yc(Gt);break;case 40:n===41&&Yc(n);break;case 92:Ke();break}return ke}function Xx(n,l){for(;Ke()&&n+Gt!==57;)if(n+Gt===84&&Ra()===47)break;return"/*"+$s(l,ke-1)+"*"+yf(n===47?n:Ke())}function Kx(n){for(;!kc(Ra());)Ke();return $s(n,ke)}function Vx(n){return Qx(ws("",null,null,null,[""],n=Yx(n),0,[0],n))}function ws(n,l,r,s,c,f,d,m,y){for(var p=0,g=0,S=d,O=0,z=0,A=0,D=1,C=1,L=1,q=0,$="",J=c,X=f,I=s,K=$;C;)switch(A=q,q=Ke()){case 40:if(A!=108&&te(K,S-1)==58){xs(K+=ft(Ec(q),"&","&\f"),"&\f",ag(p?m[p-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:K+=Ec(q);break;case 9:case 10:case 13:case 32:K+=Gx(A);break;case 92:K+=$x(Ss()-1,7);continue;case 47:switch(Ra()){case 42:case 47:Hl(Zx(Xx(Ke(),Ss()),l,r,y),y);break;default:K+="/"}break;case 123*D:m[p++]=ln(K)*L;case 125*D:case 59:case 0:switch(q){case 0:case 125:C=0;case 59+g:L==-1&&(K=ft(K,/\f/g,"")),z>0&&ln(K)-S&&Hl(z>32?$0(K+";",s,r,S-1,y):$0(ft(K," ","")+";",s,r,S-2,y),y);break;case 59:K+=";";default:if(Hl(I=G0(K,l,r,p,g,c,m,$,J=[],X=[],S,f),f),q===123)if(g===0)ws(K,l,I,I,J,f,S,m,X);else switch(O===99&&te(K,3)===110?100:O){case 100:case 108:case 109:case 115:ws(n,I,I,s&&Hl(G0(n,I,I,0,0,c,m,$,c,J=[],S,X),X),c,X,S,m,s?J:X);break;default:ws(K,I,I,I,[""],X,0,m,X)}}p=g=z=0,D=L=1,$=K="",S=d;break;case 58:S=1+ln(K),z=A;default:if(D<1){if(q==123)--D;else if(q==125&&D++==0&&kx()==125)continue}switch(K+=yf(q),q*D){case 38:L=g>0?1:(K+="\f",-1);break;case 44:m[p++]=(ln(K)-1)*L,L=1;break;case 64:Ra()===45&&(K+=Ec(Ke())),O=Ra(),g=S=ln($=K+=Kx(Ss())),q++;break;case 45:A===45&&ln(K)==2&&(D=0)}}return f}function G0(n,l,r,s,c,f,d,m,y,p,g,S){for(var O=c-1,z=c===0?f:[""],A=lg(z),D=0,C=0,L=0;D<s;++D)for(var q=0,$=Si(n,O+1,O=ag(C=d[D])),J=n;q<A;++q)(J=ig(C>0?z[q]+" "+$:ft($,/&\f/g,z[q])))&&(y[L++]=J);return Gs(n,l,r,c===0?Ys:m,y,p,g,S)}function Zx(n,l,r,s){return Gs(n,l,r,eg,yf(Hx()),Si(n,2,-2),0,s)}function $0(n,l,r,s,c){return Gs(n,l,r,gf,Si(n,0,s),Si(n,s+1,-1),s,c)}function sg(n,l,r){switch(Lx(n,l)){case 5103:return Et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Et+n+n;case 4789:return kl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Et+n+kl+n+Mt+n+n;case 5936:switch(te(n,l+11)){case 114:return Et+n+Mt+ft(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Et+n+Mt+ft(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Et+n+Mt+ft(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Et+n+Mt+n+n;case 6165:return Et+n+Mt+"flex-"+n+n;case 5187:return Et+n+ft(n,/(\w+).+(:[^]+)/,Et+"box-$1$2"+Mt+"flex-$1$2")+n;case 5443:return Et+n+Mt+"flex-item-"+ft(n,/flex-|-self/g,"")+(On(n,/flex-|baseline/)?"":Mt+"grid-row-"+ft(n,/flex-|-self/g,""))+n;case 4675:return Et+n+Mt+"flex-line-pack"+ft(n,/align-content|flex-|-self/g,"")+n;case 5548:return Et+n+Mt+ft(n,"shrink","negative")+n;case 5292:return Et+n+Mt+ft(n,"basis","preferred-size")+n;case 6060:return Et+"box-"+ft(n,"-grow","")+Et+n+Mt+ft(n,"grow","positive")+n;case 4554:return Et+ft(n,/([^-])(transform)/g,"$1"+Et+"$2")+n;case 6187:return ft(ft(ft(n,/(zoom-|grab)/,Et+"$1"),/(image-set)/,Et+"$1"),n,"")+n;case 5495:case 3959:return ft(n,/(image-set\([^]*)/,Et+"$1$`$1");case 4968:return ft(ft(n,/(.+:)(flex-)?(.*)/,Et+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Et+n+n;case 4200:if(!On(n,/flex-|baseline/))return Mt+"grid-column-align"+Si(n,l)+n;break;case 2592:case 3360:return Mt+ft(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(s,c){return l=c,On(s.props,/grid-\w+-end/)})?~xs(n+(r=r[l].value),"span",0)?n:Mt+ft(n,"-start","")+n+Mt+"grid-row-span:"+(~xs(r,"span",0)?On(r,/\d+/):+On(r,/\d+/)-+On(n,/\d+/))+";":Mt+ft(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(s){return On(s.props,/grid-\w+-start/)})?n:Mt+ft(ft(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ft(n,/(.+)-inline(.+)/,Et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(n)-1-l>6)switch(te(n,l+1)){case 109:if(te(n,l+4)!==45)break;case 102:return ft(n,/(.+:)(.+)-([^]+)/,"$1"+Et+"$2-$3$1"+kl+(te(n,l+3)==108?"$3":"$2-$3"))+n;case 115:return~xs(n,"stretch",0)?sg(ft(n,"stretch","fill-available"),l,r)+n:n}break;case 5152:case 5920:return ft(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,f,d,m,y,p){return Mt+c+":"+f+p+(d?Mt+c+"-span:"+(m?y:+y-+f)+p:"")+n});case 4949:if(te(n,l+6)===121)return ft(n,":",":"+Et)+n;break;case 6444:switch(te(n,te(n,14)===45?18:11)){case 120:return ft(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Et+(te(n,14)===45?"inline-":"")+"box$3$1"+Et+"$2$3$1"+Mt+"$2box$3")+n;case 100:return ft(n,":",":"+Mt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(n,"scroll-","scroll-snap-")+n}return n}function js(n,l){for(var r="",s=0;s<n.length;s++)r+=l(n[s],s,n,l)||"";return r}function Fx(n,l,r,s){switch(n.type){case Bx:if(n.children.length)break;case Nx:case gf:return n.return=n.return||n.value;case eg:return"";case ng:return n.return=n.value+"{"+js(n.children,s)+"}";case Ys:if(!ln(n.value=n.props.join(",")))return""}return ln(r=js(n.children,s))?n.return=n.value+"{"+r+"}":""}function Jx(n){var l=lg(n);return function(r,s,c,f){for(var d="",m=0;m<l;m++)d+=n[m](r,s,c,f)||"";return d}}function Px(n){return function(l){l.root||(l=l.return)&&n(l)}}function Wx(n,l,r,s){if(n.length>-1&&!n.return)switch(n.type){case gf:n.return=sg(n.value,n.length,r);return;case ng:return js([In(n,{value:ft(n.value,"@","@"+Et)})],s);case Ys:if(n.length)return qx(r=n.props,function(c){switch(On(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yi(In(n,{props:[ft(c,/:(read-\w+)/,":"+kl+"$1")]})),yi(In(n,{props:[c]})),Hc(n,{props:Q0(r,s)});break;case"::placeholder":yi(In(n,{props:[ft(c,/:(plac\w+)/,":"+Et+"input-$1")]})),yi(In(n,{props:[ft(c,/:(plac\w+)/,":"+kl+"$1")]})),yi(In(n,{props:[ft(c,/:(plac\w+)/,Mt+"input-$1")]})),yi(In(n,{props:[c]})),Hc(n,{props:Q0(r,s)});break}return""})}}var Ix={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Ei=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",ug="active",og="data-styled-version",Xs="6.1.19",vf=`/*!sc*/
`,zs=typeof window<"u"&&typeof document<"u",tS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),eS={},Ks=Object.freeze([]),Ri=Object.freeze({});function cg(n,l,r){return r===void 0&&(r=Ri),n.theme!==r.theme&&n.theme||l||r.theme}var fg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aS=/(^-|-$)/g;function X0(n){return n.replace(nS,"-").replace(aS,"")}var iS=/(a)(d)/gi,ps=52,K0=function(n){return String.fromCharCode(n+(n>25?39:97))};function Qc(n){var l,r="";for(l=Math.abs(n);l>ps;l=l/ps|0)r=K0(l%ps)+r;return(K0(l%ps)+r).replace(iS,"$1-$2")}var Rc,dg=5381,bi=function(n,l){for(var r=l.length;r;)n=33*n^l.charCodeAt(--r);return n},hg=function(n){return bi(dg,n)};function bf(n){return Qc(hg(n)>>>0)}function lS(n){return n.displayName||n.name||"Component"}function Tc(n){return typeof n=="string"&&!0}var pg=typeof Symbol=="function"&&Symbol.for,mg=pg?Symbol.for("react.memo"):60115,rS=pg?Symbol.for("react.forward_ref"):60112,sS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oS=((Rc={})[rS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rc[mg]=gg,Rc);function V0(n){return("type"in(l=n)&&l.type.$$typeof)===mg?gg:"$$typeof"in n?oS[n.$$typeof]:sS;var l}var cS=Object.defineProperty,fS=Object.getOwnPropertyNames,Z0=Object.getOwnPropertySymbols,dS=Object.getOwnPropertyDescriptor,hS=Object.getPrototypeOf,F0=Object.prototype;function yg(n,l,r){if(typeof l!="string"){if(F0){var s=hS(l);s&&s!==F0&&yg(n,s,r)}var c=fS(l);Z0&&(c=c.concat(Z0(l)));for(var f=V0(n),d=V0(l),m=0;m<c.length;++m){var y=c[m];if(!(y in uS||r&&r[y]||d&&y in d||f&&y in f)){var p=dS(l,y);try{cS(n,y,p)}catch{}}}}return n}function Ti(n){return typeof n=="function"}function xf(n){return typeof n=="object"&&"styledComponentId"in n}function Sa(n,l){return n&&l?"".concat(n," ").concat(l):n||l||""}function Ds(n,l){if(n.length===0)return"";for(var r=n[0],s=1;s<n.length;s++)r+=n[s];return r}function Ql(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Gc(n,l,r){if(r===void 0&&(r=!1),!r&&!Ql(n)&&!Array.isArray(n))return l;if(Array.isArray(l))for(var s=0;s<l.length;s++)n[s]=Gc(n[s],l[s]);else if(Ql(l))for(var s in l)n[s]=Gc(n[s],l[s]);return n}function Sf(n,l){Object.defineProperty(n,"toString",{value:l})}function Vl(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var pS=(function(){function n(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return n.prototype.indexOfGroup=function(l){for(var r=0,s=0;s<l;s++)r+=this.groupSizes[s];return r},n.prototype.insertRules=function(l,r){if(l>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,f=c;l>=f;)if((f<<=1)<0)throw Vl(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var d=c;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(l+1),y=(d=0,r.length);d<y;d++)this.tag.insertRule(m,r[d])&&(this.groupSizes[l]++,m++)},n.prototype.clearGroup=function(l){if(l<this.length){var r=this.groupSizes[l],s=this.indexOfGroup(l),c=s+r;this.groupSizes[l]=0;for(var f=s;f<c;f++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(l){var r="";if(l>=this.length||this.groupSizes[l]===0)return r;for(var s=this.groupSizes[l],c=this.indexOfGroup(l),f=c+s,d=c;d<f;d++)r+="".concat(this.tag.getRule(d)).concat(vf);return r},n})(),Es=new Map,Ms=new Map,Rs=1,ms=function(n){if(Es.has(n))return Es.get(n);for(;Ms.has(Rs);)Rs++;var l=Rs++;return Es.set(n,l),Ms.set(l,n),l},mS=function(n,l){Rs=l+1,Es.set(n,l),Ms.set(l,n)},gS="style[".concat(Ei,"][").concat(og,'="').concat(Xs,'"]'),yS=new RegExp("^".concat(Ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vS=function(n,l,r){for(var s,c=r.split(","),f=0,d=c.length;f<d;f++)(s=c[f])&&n.registerName(l,s)},bS=function(n,l){for(var r,s=((r=l.textContent)!==null&&r!==void 0?r:"").split(vf),c=[],f=0,d=s.length;f<d;f++){var m=s[f].trim();if(m){var y=m.match(yS);if(y){var p=0|parseInt(y[1],10),g=y[2];p!==0&&(mS(g,p),vS(n,g,y[3]),n.getTag().insertRules(p,c)),c.length=0}else c.push(m)}}},J0=function(n){for(var l=document.querySelectorAll(gS),r=0,s=l.length;r<s;r++){var c=l[r];c&&c.getAttribute(Ei)!==ug&&(bS(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function xS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vg=function(n){var l=document.head,r=n||l,s=document.createElement("style"),c=(function(m){var y=Array.from(m.querySelectorAll("style[".concat(Ei,"]")));return y[y.length-1]})(r),f=c!==void 0?c.nextSibling:null;s.setAttribute(Ei,ug),s.setAttribute(og,Xs);var d=xS();return d&&s.setAttribute("nonce",d),r.insertBefore(s,f),s},SS=(function(){function n(l){this.element=vg(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,c=0,f=s.length;c<f;c++){var d=s[c];if(d.ownerNode===r)return d}throw Vl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(l,r){try{return this.sheet.insertRule(r,l),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},n.prototype.getRule=function(l){var r=this.sheet.cssRules[l];return r&&r.cssText?r.cssText:""},n})(),wS=(function(){function n(l){this.element=vg(l),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(l,r){if(l<=this.length&&l>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[l]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},n.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},n})(),ES=(function(){function n(l){this.rules=[],this.length=0}return n.prototype.insertRule=function(l,r){return l<=this.length&&(this.rules.splice(l,0,r),this.length++,!0)},n.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},n.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},n})(),P0=zs,RS={isServer:!zs,useCSSOMInjection:!tS},_s=(function(){function n(l,r,s){l===void 0&&(l=Ri),r===void 0&&(r={});var c=this;this.options=oe(oe({},RS),l),this.gs=r,this.names=new Map(s),this.server=!!l.isServer,!this.server&&zs&&P0&&(P0=!1,J0(this)),Sf(this,function(){return(function(f){for(var d=f.getTag(),m=d.length,y="",p=function(S){var O=(function(L){return Ms.get(L)})(S);if(O===void 0)return"continue";var z=f.names.get(O),A=d.getGroup(S);if(z===void 0||!z.size||A.length===0)return"continue";var D="".concat(Ei,".g").concat(S,'[id="').concat(O,'"]'),C="";z!==void 0&&z.forEach(function(L){L.length>0&&(C+="".concat(L,","))}),y+="".concat(A).concat(D,'{content:"').concat(C,'"}').concat(vf)},g=0;g<m;g++)p(g);return y})(c)})}return n.registerId=function(l){return ms(l)},n.prototype.rehydrate=function(){!this.server&&zs&&J0(this)},n.prototype.reconstructWithOptions=function(l,r){return r===void 0&&(r=!0),new n(oe(oe({},this.options),l),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(r){var s=r.useCSSOMInjection,c=r.target;return r.isServer?new ES(c):s?new SS(c):new wS(c)})(this.options),new pS(l)));var l},n.prototype.hasNameForId=function(l,r){return this.names.has(l)&&this.names.get(l).has(r)},n.prototype.registerName=function(l,r){if(ms(l),this.names.has(l))this.names.get(l).add(r);else{var s=new Set;s.add(r),this.names.set(l,s)}},n.prototype.insertRules=function(l,r,s){this.registerName(l,r),this.getTag().insertRules(ms(l),s)},n.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},n.prototype.clearRules=function(l){this.getTag().clearGroup(ms(l)),this.clearNames(l)},n.prototype.clearTag=function(){this.tag=void 0},n})(),TS=/&/g,OS=/^\s*\/\/.*$/gm;function bg(n,l){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(l," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(l," ")),r.props=r.props.map(function(s){return"".concat(l," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=bg(r.children,l)),r})}function AS(n){var l,r,s,c=Ri,f=c.options,d=f===void 0?Ri:f,m=c.plugins,y=m===void 0?Ks:m,p=function(O,z,A){return A.startsWith(r)&&A.endsWith(r)&&A.replaceAll(r,"").length>0?".".concat(l):O},g=y.slice();g.push(function(O){O.type===Ys&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(TS,r).replace(s,p))}),d.prefix&&g.push(Wx),g.push(Fx);var S=function(O,z,A,D){z===void 0&&(z=""),A===void 0&&(A=""),D===void 0&&(D="&"),l=D,r=z,s=new RegExp("\\".concat(r,"\\b"),"g");var C=O.replace(OS,""),L=Vx(A||z?"".concat(A," ").concat(z," { ").concat(C," }"):C);d.namespace&&(L=bg(L,d.namespace));var q=[];return js(L,Jx(g.concat(Px(function($){return q.push($)})))),q};return S.hash=y.length?y.reduce(function(O,z){return z.name||Vl(15),bi(O,z.name)},dg).toString():"",S}var CS=new _s,$c=AS(),xg=rn.createContext({shouldForwardProp:void 0,styleSheet:CS,stylis:$c});xg.Consumer;rn.createContext(void 0);function Xc(){return w.useContext(xg)}var Sg=(function(){function n(l,r){var s=this;this.inject=function(c,f){f===void 0&&(f=$c);var d=s.name+f.hash;c.hasNameForId(s.id,d)||c.insertRules(s.id,d,f(s.rules,d,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=r,Sf(this,function(){throw Vl(12,String(s.name))})}return n.prototype.getName=function(l){return l===void 0&&(l=$c),this.name+l.hash},n})(),jS=function(n){return n>="A"&&n<="Z"};function W0(n){for(var l="",r=0;r<n.length;r++){var s=n[r];if(r===1&&s==="-"&&n[0]==="-")return n;jS(s)?l+="-"+s.toLowerCase():l+=s}return l.startsWith("ms-")?"-"+l:l}var wg=function(n){return n==null||n===!1||n===""},Eg=function(n){var l,r,s=[];for(var c in n){var f=n[c];n.hasOwnProperty(c)&&!wg(f)&&(Array.isArray(f)&&f.isCss||Ti(f)?s.push("".concat(W0(c),":"),f,";"):Ql(f)?s.push.apply(s,xi(xi(["".concat(c," {")],Eg(f),!1),["}"],!1)):s.push("".concat(W0(c),": ").concat((l=c,(r=f)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||l in Ix||l.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function ta(n,l,r,s){if(wg(n))return[];if(xf(n))return[".".concat(n.styledComponentId)];if(Ti(n)){if(!Ti(f=n)||f.prototype&&f.prototype.isReactComponent||!l)return[n];var c=n(l);return ta(c,l,r,s)}var f;return n instanceof Sg?r?(n.inject(r,s),[n.getName(s)]):[n]:Ql(n)?Eg(n):Array.isArray(n)?Array.prototype.concat.apply(Ks,n.map(function(d){return ta(d,l,r,s)})):[n.toString()]}function Rg(n){for(var l=0;l<n.length;l+=1){var r=n[l];if(Ti(r)&&!xf(r))return!1}return!0}var zS=hg(Xs),DS=(function(){function n(l,r,s){this.rules=l,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Rg(l),this.componentId=r,this.baseHash=bi(zS,r),this.baseStyle=s,_s.registerId(r)}return n.prototype.generateAndInjectStyles=function(l,r,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))c=Sa(c,this.staticRulesId);else{var f=Ds(ta(this.rules,l,r,s)),d=Qc(bi(this.baseHash,f)>>>0);if(!r.hasNameForId(this.componentId,d)){var m=s(f,".".concat(d),void 0,this.componentId);r.insertRules(this.componentId,d,m)}c=Sa(c,d),this.staticRulesId=d}else{for(var y=bi(this.baseHash,s.hash),p="",g=0;g<this.rules.length;g++){var S=this.rules[g];if(typeof S=="string")p+=S;else if(S){var O=Ds(ta(S,l,r,s));y=bi(y,O+g),p+=O}}if(p){var z=Qc(y>>>0);r.hasNameForId(this.componentId,z)||r.insertRules(this.componentId,z,s(p,".".concat(z),void 0,this.componentId)),c=Sa(c,z)}}return c},n})(),wf=rn.createContext(void 0);wf.Consumer;var Oc={};function MS(n,l,r){var s=xf(n),c=n,f=!Tc(n),d=l.attrs,m=d===void 0?Ks:d,y=l.componentId,p=y===void 0?(function(J,X){var I=typeof J!="string"?"sc":X0(J);Oc[I]=(Oc[I]||0)+1;var K="".concat(I,"-").concat(bf(Xs+I+Oc[I]));return X?"".concat(X,"-").concat(K):K})(l.displayName,l.parentComponentId):y,g=l.displayName,S=g===void 0?(function(J){return Tc(J)?"styled.".concat(J):"Styled(".concat(lS(J),")")})(n):g,O=l.displayName&&l.componentId?"".concat(X0(l.displayName),"-").concat(l.componentId):l.componentId||p,z=s&&c.attrs?c.attrs.concat(m).filter(Boolean):m,A=l.shouldForwardProp;if(s&&c.shouldForwardProp){var D=c.shouldForwardProp;if(l.shouldForwardProp){var C=l.shouldForwardProp;A=function(J,X){return D(J,X)&&C(J,X)}}else A=D}var L=new DS(r,O,s?c.componentStyle:void 0);function q(J,X){return(function(I,K,P){var tt=I.attrs,vt=I.componentStyle,_t=I.defaultProps,Vt=I.foldedComponentIds,sn=I.styledComponentId,un=I.target,Zt=rn.useContext(wf),H=Xc(),Z=I.shouldForwardProp||H.shouldForwardProp,it=cg(K,Zt,_t)||Ri,pt=(function(mt,rt,Ft){for(var wt,ie=oe(oe({},rt),{className:void 0,theme:Ft}),na=0;na<mt.length;na+=1){var on=Ti(wt=mt[na])?wt(ie):wt;for(var je in on)ie[je]=je==="className"?Sa(ie[je],on[je]):je==="style"?oe(oe({},ie[je]),on[je]):on[je]}return rt.className&&(ie.className=Sa(ie.className,rt.className)),ie})(tt,K,it),E=pt.as||un,G={};for(var V in pt)pt[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&pt.theme===it||(V==="forwardedAs"?G.as=pt.forwardedAs:Z&&!Z(V,E)||(G[V]=pt[V]));var F=(function(mt,rt){var Ft=Xc(),wt=mt.generateAndInjectStyles(rt,Ft.styleSheet,Ft.stylis);return wt})(vt,pt),at=Sa(Vt,sn);return F&&(at+=" "+F),pt.className&&(at+=" "+pt.className),G[Tc(E)&&!fg.has(E)?"class":"className"]=at,P&&(G.ref=P),w.createElement(E,G)})($,J,X)}q.displayName=S;var $=rn.forwardRef(q);return $.attrs=z,$.componentStyle=L,$.displayName=S,$.shouldForwardProp=A,$.foldedComponentIds=s?Sa(c.foldedComponentIds,c.styledComponentId):"",$.styledComponentId=O,$.target=s?c.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=s?(function(X){for(var I=[],K=1;K<arguments.length;K++)I[K-1]=arguments[K];for(var P=0,tt=I;P<tt.length;P++)Gc(X,tt[P],!0);return X})({},c.defaultProps,J):J}}),Sf($,function(){return".".concat($.styledComponentId)}),f&&yg($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function I0(n,l){for(var r=[n[0]],s=0,c=l.length;s<c;s+=1)r.push(l[s],n[s+1]);return r}var tm=function(n){return Object.assign(n,{isCss:!0})};function Ef(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];if(Ti(n)||Ql(n))return tm(ta(I0(Ks,xi([n],l,!0))));var s=n;return l.length===0&&s.length===1&&typeof s[0]=="string"?ta(s):tm(ta(I0(s,l)))}function Kc(n,l,r){if(r===void 0&&(r=Ri),!l)throw Vl(1,l);var s=function(c){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(l,r,Ef.apply(void 0,xi([c],f,!1)))};return s.attrs=function(c){return Kc(n,l,oe(oe({},r),{attrs:Array.prototype.concat(r.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Kc(n,l,oe(oe({},r),c))},s}var Tg=function(n){return Kc(MS,n)},T=Tg;fg.forEach(function(n){T[n]=Tg(n)});var _S=(function(){function n(l,r){this.rules=l,this.componentId=r,this.isStatic=Rg(l),_s.registerId(this.componentId+1)}return n.prototype.createStyles=function(l,r,s,c){var f=c(Ds(ta(this.rules,r,s,c)),""),d=this.componentId+l;s.insertRules(d,d,f)},n.prototype.removeStyles=function(l,r){r.clearRules(this.componentId+l)},n.prototype.renderStyles=function(l,r,s,c){l>2&&_s.registerId(this.componentId+l),this.removeStyles(l,s),this.createStyles(l,r,s,c)},n})();function US(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];var s=Ef.apply(void 0,xi([n],l,!1)),c="sc-global-".concat(bf(JSON.stringify(s))),f=new _S(s,c),d=function(y){var p=Xc(),g=rn.useContext(wf),S=rn.useRef(p.styleSheet.allocateGSInstance(c)).current;return p.styleSheet.server&&m(S,y,p.styleSheet,g,p.stylis),rn.useLayoutEffect(function(){if(!p.styleSheet.server)return m(S,y,p.styleSheet,g,p.stylis),function(){return f.removeStyles(S,p.styleSheet)}},[S,y,p.styleSheet,g,p.stylis]),null};function m(y,p,g,S,O){if(f.isStatic)f.renderStyles(y,eS,g,O);else{var z=oe(oe({},p),{theme:cg(p,S,d.defaultProps)});f.renderStyles(y,z,g,O)}}return rn.memo(d)}function Di(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];var s=Ds(Ef.apply(void 0,xi([n],l,!1))),c=bf(s);return new Sg(c,s)}const nt={primary:"rgba(28, 118, 207, 1)",secondary:"#fafafa;",accent:"#282828",mainBlue:"rgb(34, 132, 229)",mainDeepBlue:"rgba(28, 118, 207, 1);",mainLightBlue:"#0084ffff"},NS=T.nav`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #fafafaf5;

`,BS=T.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  gap: 12px;
`,LS=T.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  gap: 48px;
`,Ac=T.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,qS=T.p`
  font-size: 28px;
  font-weight: 900;
  color: ${nt.primary};
  margin: 0;
  cursor: pointer;
`,Cc=T.img`
  width: 24px;
  height: 24px;
`,HS=T.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 16px; /* 아이콘과 검색창 사이 간격 */
`,kS=T.input`
  width: ${n=>n.open?"600px":"0"};
  opacity: ${n=>n.open?1:0};
  padding: ${n=>n.open?"0 12px":"0"};
  height: 36px;
  border-radius: 20px;
  border: ${n=>(n.open,"none")};
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
   box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
`,YS=T.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 1000;
  min-width: 180px;
  margin-top: 8px;
  animation: dropdownFadeIn 0.2s ease-out;
  
  @keyframes dropdownFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,em=T.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
    color: ${nt.mainBlue};
  }
  
  &:active {
    background-color: #e9ecef;
  }
`,Mi=T.div`
    margin: 0 auto;
    width: auto;
    display: flex;
    flex-direction: column;
    place-items: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 320px;
    max-width: 1280px;
`,QS=T.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(28, 118, 207, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(28, 118, 207, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(28, 118, 207, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
`,GS=T.div`
    width: 100%;
    padding: 20px;
`;T.div`
    display: flex;
    flex-direction: row;
`;T.div`
    height: 100px;
    width: 10px;
`;const Ta=T.div.withConfig({shouldForwardProp:n=>!["h","w"].includes(n)})`
  height: ${({h:n})=>n?`${n}px`:"0"};
  width: ${({w:n})=>n?`${n}px`:"0"};
`,Vs=T.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
`,_i=T.footer`
  margin-top: 60px;
  padding: 32px 20px;
  color: #666;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  z-index: 1;
`,$S=Di`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;Di`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;const XS=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  animation: ${$S} 0.3s ease-out;
  min-width: 300px;
  max-width: 400px;
  position: relative;
  overflow: hidden;

  ${({$type:n})=>{switch(n){case"success":return`
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          color: white;
          border-left: 4px solid #2E7D32;
        `;case"error":return`
          background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
          color: white;
          border-left: 4px solid #c62828;
        `;case"warning":return`
          background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
          color: white;
          border-left: 4px solid #ef6c00;
        `;case"info":return`
          background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
          color: white;
          border-left: 4px solid #1565C0;
        `;default:return`
          background: linear-gradient(135deg, #666 0%, #555 100%);
          color: white;
          border-left: 4px solid #444;
        `}}}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
  }
`,KS=T.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
`,VS=T.div`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  word-break: break-word;
`,ZS=T.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background: rgba(255, 255, 255, 0.3);
  }
`,FS=T.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,JS=({id:n,message:l,type:r,duration:s=3e3,onClose:c})=>(w.useEffect(()=>{const f=setTimeout(()=>{c(n)},s);return()=>clearTimeout(f)},[n,s,c]),v.jsxs(XS,{$type:r,children:[v.jsxs(KS,{$type:r,children:[r==="success"&&"✓",r==="error"&&"✕",r==="warning"&&"⚠",r==="info"&&"ℹ"]}),v.jsx(VS,{children:l}),v.jsx(ZS,{onClick:()=>c(n),children:"×"})]})),Og=w.createContext(void 0),PS=({children:n})=>{const[l,r]=w.useState([]),s=w.useCallback(g=>{r(S=>S.filter(O=>O.id!==g))},[]),c=w.useCallback((g,S,O)=>{const A={id:Math.random().toString(36).substr(2,9),message:g,type:S,duration:O};r(D=>[...D,A])},[]),f=w.useCallback((g,S)=>{c(g,"success",S)},[c]),d=w.useCallback((g,S)=>{c(g,"error",S)},[c]),m=w.useCallback((g,S)=>{c(g,"warning",S)},[c]),y=w.useCallback((g,S)=>{c(g,"info",S)},[c]),p={showToast:c,showSuccess:f,showError:d,showWarning:m,showInfo:y};return v.jsxs(Og.Provider,{value:p,children:[n,v.jsx(FS,{children:l.map(g=>v.jsx(JS,{id:g.id,message:g.message,type:g.type,duration:g.duration,onClose:s},g.id))})]})},Zl=()=>{const n=w.useContext(Og);if(n===void 0)throw new Error("useToast must be used within a ToastProvider");return n},WS=()=>{const n=Qe(),[l,r]=w.useState(!1),[s,c]=w.useState(""),[f,d]=w.useState(!1),m=w.useRef(null),{showToast:y}=Zl(),p=()=>{s&&(n(`/static/SearchPage/${s}`),c(""),r(!1))},g=A=>{A.key==="Enter"&&p()},S=()=>{d(A=>!A)},O=async()=>{const A="hcan1223@pusan.ac.kr";try{await navigator.clipboard.writeText(A),y("이메일 주소가 클립보드에 복사되었습니다","success")}catch(D){y(`${D}버그 제보 이메일: ${A}`,"info")}d(!1)},z=()=>{window.open("https://github.com/patkrdj/Capstone","_blank"),d(!1)};return w.useEffect(()=>{const A=D=>{m.current&&!m.current.contains(D.target)&&d(!1)};return f&&document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[f]),v.jsx(Mi,{children:v.jsxs(NS,{children:[v.jsx(BS,{children:v.jsx(qS,{onClick:()=>n("/static/"),children:"L.B"})}),v.jsxs(LS,{children:[v.jsxs(HS,{children:[v.jsx(kS,{type:"text",value:s,onChange:A=>c(A.target.value),placeholder:"검색어 입력 후 Enter",onKeyDown:g,open:l}),v.jsx(Ac,{onClick:()=>r(A=>!A),children:v.jsx(Cc,{src:Mx,alt:"search"})})]}),v.jsx(Ac,{onClick:()=>n("/static/My"),children:v.jsx(Cc,{src:_x,alt:"my"})}),v.jsxs(Ac,{ref:m,onClick:S,style:{position:"relative"},children:[v.jsx(Cc,{src:Ux,alt:"menu"}),f&&v.jsxs(YS,{children:[v.jsx(em,{onClick:O,children:"버그 제보하기"}),v.jsx(em,{onClick:z,children:"깃허브 페이지"})]})]})]})]})})},Ag=T.div`
  position: relative;
  width: 100%;
  padding: 10px;
`,Cg=T.div`
  display: flex;               /* 한 줄로 나열 */
  gap: 32px;                   /* 카드 사이 간격 */
  overflow-x: auto;            /* 가로 스크롤 */
  scroll-behavior: smooth;     /* 부드럽게 이동 */
  flex-direction: row; /* 기본값 */
  align-items: center;     /* 세로 가운데 */
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`,Us=T.button.withConfig({shouldForwardProp:n=>!["left","disabled"].includes(n)})`
  position: absolute;
  top: 0;
  bottom: 0;
  ${n=>n.left?"left: 0;":"right: 0;"}
  width: 50px;
  background: linear-gradient(90deg, ${n=>n.left?"rgba(28, 118, 207, 0.1)":"transparent"}, ${n=>n.left?"transparent":"rgba(28, 118, 207, 0.1)"});
  border: none;
  cursor: ${n=>n.disabled?"wait":"pointer"};
  font-size: 20px;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${n=>n.disabled?"0.5":"0"};
  color: ${nt.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${n=>n.disabled?"linear-gradient(90deg, rgba(28, 118, 207, 0.1), transparent)":`linear-gradient(90deg, ${n.left?"rgba(28, 118, 207, 0.2)":"transparent"}, ${n.left?"transparent":"rgba(28, 118, 207, 0.2)"})`};
    opacity: ${n=>n.disabled?"0.5":"1"};
    transform: ${n=>n.disabled?"none":"scale(1.1)"};
    box-shadow: ${n=>n.disabled?"none":"0 4px 12px rgba(28, 118, 207, 0.3)"};
  }

  &:active {
    transform: ${n=>n.disabled?"none":"scale(0.95)"};
  }

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }
`,jg=T.div`
  padding : 0px 5px;

`,zg=T.button`
  background: white;
  color: ${nt.mainBlue};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 18px;
  border: 2.5px solid ${nt.mainBlue};
  border-radius: 25px 30% 24px 52%; 
  cursor: pointer;
  transition: all 0.25s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${nt.mainBlue};
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`,Oi=T.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;    /* 가운데 정렬 */
  gap: 16px;              /* 버튼 사이 간격 */
  justify-content: center;/* 화면 세로 가운데 */
  padding: 30px;
`,Dg=T.div`
  background-color: white;
  margin-bottom: 24px;
  width: 100%;
  height: 332px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {
    height: 432px;
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    transform: translateY(-4px);
    
    &::before {
      left: 100%;
    }
  }
`,Mg=T.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 132, 255, 0.6);
  color: #fff;
  padding: 20px 12px 12px 12px;
  box-sizing: border-box;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;

  mask-image: linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
`,IS=T.div`
  flex: 0 0 220px;            /* 기본 너비 */
  height: 300px;              /* 기본 높이 */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  user-select: none;          /* 드래그 시 텍스트 선택 방지 */

  &:hover {
    flex: 0 0 300px;          /* hover 시 너비 증가 */
    height: 390px;            /* hover 시 높이 증가 */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }

  &:hover ${Mg} {
    transform: translateY(0);
    opacity: 1;
  }

`,t2=T.div`
  width: 100%;
  position: relative;
  padding-top: 150%; /* 1:1 비율 */
  overflow: hidden;
`,e2=T.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease;

`,n2=T.h3`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
`,a2=T.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`,i2=T.span`
  font-size: 12px;
  color: #fff;
`,l2=T.span`
  font-size: 10px;
  font-weight: 700;
  color: #ffd903;
`,r2=T.span`
  font-size: 12px;
  color: #ddd;
`,s2=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;T.span`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;T.div`
  position: fixed;
  background: rgba(255, 255, 255, 0.64);
  color: #333;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  z-index: 10;
  max-width: 250px;
  white-space: normal;
  word-wrap: break-word;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.14);
  pointer-events: none;
`;function _g({product:n,recommendReason:l=null}){const r=Qe(),[s,c]=w.useState(!1),[f,d]=w.useState(!1),m=()=>{r(`/static/DetailPage/${n.movieId}`,{state:{product:n}})},y=p=>{p.stopPropagation(),c(!s)};return v.jsxs(IS,{onClick:m,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),style:{position:"relative"},children:[v.jsx(t2,{children:v.jsx(e2,{src:n.imageLink??"",alt:n.blurayTitle??""})}),v.jsxs(Mg,{children:[v.jsx(n2,{children:n.blurayTitle}),v.jsxs(s2,{children:[v.jsxs(a2,{children:[n.price?.toLocaleString(),"원"]}),v.jsxs(i2,{children:[" 해상도 : ",n.quality]})]}),n.isLimitedEdition&&v.jsx(l2,{children:"한정판!"}),v.jsx(r2,{children:n.siteName})]}),f&&l&&v.jsx("button",{onClick:y,style:{position:"absolute",top:"8px",right:"8px",background:"rgba(255, 215, 0, 0.9)",color:"#000",border:"none",borderRadius:"50%",width:"32px",height:"32px",fontSize:"16px",fontWeight:"bold",cursor:"pointer",zIndex:20,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",transition:"all 0.2s ease",backdropFilter:"blur(4px)"},onMouseEnter:p=>{p.currentTarget.style.background="rgba(255, 215, 0, 1)",p.currentTarget.style.transform="scale(1.1)"},onMouseLeave:p=>{p.currentTarget.style.background="rgba(255, 215, 0, 0.9)",p.currentTarget.style.transform="scale(1)"},children:"💡"}),s&&l&&v.jsxs("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",background:"rgba(0, 0, 0, 0.95)",color:"white",padding:"16px",borderRadius:"12px",fontSize:"13px",fontWeight:"500",zIndex:15,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",lineHeight:"1.4",backdropFilter:"blur(4px)",border:"2px solid rgba(255, 215, 0, 0.3)",animation:"fadeIn 0.2s ease"},children:[v.jsxs("div",{style:{fontWeight:"700",marginBottom:"8px",color:"#ffd700",fontSize:"14px",display:"flex",alignItems:"center",gap:"6px"},children:[v.jsx("span",{children:"💡"}),v.jsx("span",{children:"추천 이유"})]}),v.jsx("div",{style:{fontSize:"12px",lineHeight:"1.3",color:"#f0f0f0"},children:l}),v.jsx("button",{onClick:p=>{p.stopPropagation(),c(!1)},style:{position:"absolute",top:"8px",right:"8px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"none",borderRadius:"50%",width:"24px",height:"24px",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}var Ui=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},u2={setTimeout:(n,l)=>setTimeout(n,l),clearTimeout:n=>clearTimeout(n),setInterval:(n,l)=>setInterval(n,l),clearInterval:n=>clearInterval(n)},o2=class{#t=u2;#e=!1;setTimeoutProvider(n){this.#t=n}setTimeout(n,l){return this.#t.setTimeout(n,l)}clearTimeout(n){this.#t.clearTimeout(n)}setInterval(n,l){return this.#t.setInterval(n,l)}clearInterval(n){this.#t.clearInterval(n)}},wa=new o2;function c2(n){setTimeout(n,0)}var Aa=typeof window>"u"||"Deno"in globalThis;function fe(){}function f2(n,l){return typeof n=="function"?n(l):n}function Vc(n){return typeof n=="number"&&n>=0&&n!==1/0}function Ug(n,l){return Math.max(n+(l||0)-Date.now(),0)}function ea(n,l){return typeof n=="function"?n(l):n}function He(n,l){return typeof n=="function"?n(l):n}function nm(n,l){const{type:r="all",exact:s,fetchStatus:c,predicate:f,queryKey:d,stale:m}=n;if(d){if(s){if(l.queryHash!==Rf(d,l.options))return!1}else if(!Gl(l.queryKey,d))return!1}if(r!=="all"){const y=l.isActive();if(r==="active"&&!y||r==="inactive"&&y)return!1}return!(typeof m=="boolean"&&l.isStale()!==m||c&&c!==l.state.fetchStatus||f&&!f(l))}function am(n,l){const{exact:r,status:s,predicate:c,mutationKey:f}=n;if(f){if(!l.options.mutationKey)return!1;if(r){if(Ca(l.options.mutationKey)!==Ca(f))return!1}else if(!Gl(l.options.mutationKey,f))return!1}return!(s&&l.state.status!==s||c&&!c(l))}function Rf(n,l){return(l?.queryKeyHashFn||Ca)(n)}function Ca(n){return JSON.stringify(n,(l,r)=>Zc(r)?Object.keys(r).sort().reduce((s,c)=>(s[c]=r[c],s),{}):r)}function Gl(n,l){return n===l?!0:typeof n!=typeof l?!1:n&&l&&typeof n=="object"&&typeof l=="object"?Object.keys(l).every(r=>Gl(n[r],l[r])):!1}var d2=Object.prototype.hasOwnProperty;function Ng(n,l){if(n===l)return n;const r=im(n)&&im(l);if(!r&&!(Zc(n)&&Zc(l)))return l;const c=(r?n:Object.keys(n)).length,f=r?l:Object.keys(l),d=f.length,m=r?new Array(d):{};let y=0;for(let p=0;p<d;p++){const g=r?p:f[p],S=n[g],O=l[g];if(S===O){m[g]=S,(r?p<c:d2.call(n,g))&&y++;continue}if(S===null||O===null||typeof S!="object"||typeof O!="object"){m[g]=O;continue}const z=Ng(S,O);m[g]=z,z===S&&y++}return c===d&&y===c?n:m}function Ns(n,l){if(!l||Object.keys(n).length!==Object.keys(l).length)return!1;for(const r in n)if(n[r]!==l[r])return!1;return!0}function im(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Zc(n){if(!lm(n))return!1;const l=n.constructor;if(l===void 0)return!0;const r=l.prototype;return!(!lm(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function lm(n){return Object.prototype.toString.call(n)==="[object Object]"}function h2(n){return new Promise(l=>{wa.setTimeout(l,n)})}function Fc(n,l,r){return typeof r.structuralSharing=="function"?r.structuralSharing(n,l):r.structuralSharing!==!1?Ng(n,l):l}function p2(n,l,r=0){const s=[...n,l];return r&&s.length>r?s.slice(1):s}function m2(n,l,r=0){const s=[l,...n];return r&&s.length>r?s.slice(0,-1):s}var Tf=Symbol();function Bg(n,l){return!n.queryFn&&l?.initialPromise?()=>l.initialPromise:!n.queryFn||n.queryFn===Tf?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}function Lg(n,l){return typeof n=="function"?n(...l):!!n}var g2=class extends Ui{#t;#e;#n;constructor(){super(),this.#n=n=>{if(!Aa&&window.addEventListener){const l=()=>n();return window.addEventListener("visibilitychange",l,!1),()=>{window.removeEventListener("visibilitychange",l)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(n){this.#n=n,this.#e?.(),this.#e=n(l=>{typeof l=="boolean"?this.setFocused(l):this.onFocus()})}setFocused(n){this.#t!==n&&(this.#t=n,this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(l=>{l(n)})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}},Of=new g2;function Jc(){let n,l;const r=new Promise((c,f)=>{n=c,l=f});r.status="pending",r.catch(()=>{});function s(c){Object.assign(r,c),delete r.resolve,delete r.reject}return r.resolve=c=>{s({status:"fulfilled",value:c}),n(c)},r.reject=c=>{s({status:"rejected",reason:c}),l(c)},r}var y2=c2;function v2(){let n=[],l=0,r=m=>{m()},s=m=>{m()},c=y2;const f=m=>{l?n.push(m):c(()=>{r(m)})},d=()=>{const m=n;n=[],m.length&&c(()=>{s(()=>{m.forEach(y=>{r(y)})})})};return{batch:m=>{let y;l++;try{y=m()}finally{l--,l||d()}return y},batchCalls:m=>(...y)=>{f(()=>{m(...y)})},schedule:f,setNotifyFunction:m=>{r=m},setBatchNotifyFunction:m=>{s=m},setScheduler:m=>{c=m}}}var Kt=v2(),b2=class extends Ui{#t=!0;#e;#n;constructor(){super(),this.#n=n=>{if(!Aa&&window.addEventListener){const l=()=>n(!0),r=()=>n(!1);return window.addEventListener("online",l,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(n){this.#n=n,this.#e?.(),this.#e=n(this.setOnline.bind(this))}setOnline(n){this.#t!==n&&(this.#t=n,this.listeners.forEach(r=>{r(n)}))}isOnline(){return this.#t}},Bs=new b2;function x2(n){return Math.min(1e3*2**n,3e4)}function qg(n){return(n??"online")==="online"?Bs.isOnline():!0}var Pc=class extends Error{constructor(n){super("CancelledError"),this.revert=n?.revert,this.silent=n?.silent}};function Hg(n){let l=!1,r=0,s;const c=Jc(),f=()=>c.status!=="pending",d=D=>{if(!f()){const C=new Pc(D);O(C),n.onCancel?.(C)}},m=()=>{l=!0},y=()=>{l=!1},p=()=>Of.isFocused()&&(n.networkMode==="always"||Bs.isOnline())&&n.canRun(),g=()=>qg(n.networkMode)&&n.canRun(),S=D=>{f()||(s?.(),c.resolve(D))},O=D=>{f()||(s?.(),c.reject(D))},z=()=>new Promise(D=>{s=C=>{(f()||p())&&D(C)},n.onPause?.()}).then(()=>{s=void 0,f()||n.onContinue?.()}),A=()=>{if(f())return;let D;const C=r===0?n.initialPromise:void 0;try{D=C??n.fn()}catch(L){D=Promise.reject(L)}Promise.resolve(D).then(S).catch(L=>{if(f())return;const q=n.retry??(Aa?0:3),$=n.retryDelay??x2,J=typeof $=="function"?$(r,L):$,X=q===!0||typeof q=="number"&&r<q||typeof q=="function"&&q(r,L);if(l||!X){O(L);return}r++,n.onFail?.(r,L),h2(J).then(()=>p()?void 0:z()).then(()=>{l?O(L):A()})})};return{promise:c,status:()=>c.status,cancel:d,continue:()=>(s?.(),c),cancelRetry:m,continueRetry:y,canStart:g,start:()=>(g()?A():z().then(A),c)}}var kg=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Vc(this.gcTime)&&(this.#t=wa.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Aa?1/0:300*1e3))}clearGcTimeout(){this.#t&&(wa.clearTimeout(this.#t),this.#t=void 0)}},S2=class extends kg{#t;#e;#n;#a;#i;#r;#s;constructor(n){super(),this.#s=!1,this.#r=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.#a=n.client,this.#n=this.#a.getQueryCache(),this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.#t=rm(this.options),this.state=n.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(n){if(this.options={...this.#r,...n},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const l=rm(this.options);l.data!==void 0&&(this.setData(l.data,{updatedAt:l.dataUpdatedAt,manual:!0}),this.#t=l)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(n,l){const r=Fc(this.state.data,n,this.options);return this.#l({data:r,type:"success",dataUpdatedAt:l?.updatedAt,manual:l?.manual}),r}setState(n,l){this.#l({type:"setState",state:n,setStateOptions:l})}cancel(n){const l=this.#i?.promise;return this.#i?.cancel(n),l?l.then(fe).catch(fe):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(n=>He(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Tf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>ea(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!Ug(this.state.dataUpdatedAt,n)}onFocus(){this.observers.find(l=>l.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(l=>l.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(l=>l!==n),this.observers.length||(this.#i&&(this.#s?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}async fetch(n,l){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&l?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(n&&this.setOptions(n),!this.options.queryFn){const m=this.observers.find(y=>y.options.queryFn);m&&this.setOptions(m.options)}const r=new AbortController,s=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(this.#s=!0,r.signal)})},c=()=>{const m=Bg(this.options,l),p=(()=>{const g={client:this.#a,queryKey:this.queryKey,meta:this.meta};return s(g),g})();return this.#s=!1,this.options.persister?this.options.persister(m,p,this):m(p)},d=(()=>{const m={fetchOptions:l,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:c};return s(m),m})();this.options.behavior?.onFetch(d,this),this.#e=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==d.fetchOptions?.meta)&&this.#l({type:"fetch",meta:d.fetchOptions?.meta}),this.#i=Hg({initialPromise:l?.initialPromise,fn:d.fetchFn,onCancel:m=>{m instanceof Pc&&m.revert&&this.setState({...this.#e,fetchStatus:"idle"}),r.abort()},onFail:(m,y)=>{this.#l({type:"failed",failureCount:m,error:y})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0});try{const m=await this.#i.start();if(m===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(m),this.#n.config.onSuccess?.(m,this),this.#n.config.onSettled?.(m,this.state.error,this),m}catch(m){if(m instanceof Pc){if(m.silent)return this.#i.promise;if(m.revert){if(this.state.data===void 0)throw m;return this.state.data}}throw this.#l({type:"error",error:m}),this.#n.config.onError?.(m,this),this.#n.config.onSettled?.(this.state.data,m,this),m}finally{this.scheduleGc()}}#l(n){const l=r=>{switch(n.type){case"failed":return{...r,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Yg(r.data,this.options),fetchMeta:n.meta??null};case"success":const s={...r,data:n.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#e=n.manual?s:void 0,s;case"error":const c=n.error;return{...r,error:c,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...n.state}}};this.state=l(this.state),Kt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:n})})}};function Yg(n,l){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:qg(l.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function rm(n){const l=typeof n.initialData=="function"?n.initialData():n.initialData,r=l!==void 0,s=r?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:l,dataUpdateCount:0,dataUpdatedAt:r?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var Qg=class extends Ui{constructor(n,l){super(),this.options=l,this.#t=n,this.#l=null,this.#s=Jc(),this.bindMethods(),this.setOptions(l)}#t;#e=void 0;#n=void 0;#a=void 0;#i;#r;#s;#l;#m;#d;#h;#o;#c;#u;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),sm(this.#e,this.options)?this.#f():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Wc(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Wc(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#x(),this.#S(),this.#e.removeObserver(this)}setOptions(n){const l=this.options,r=this.#e;if(this.options=this.#t.defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof He(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#e.setOptions(this.options),l._defaulted&&!Ns(this.options,l)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const s=this.hasListeners();s&&um(this.#e,r,this.options,l)&&this.#f(),this.updateResult(),s&&(this.#e!==r||He(this.options.enabled,this.#e)!==He(l.enabled,this.#e)||ea(this.options.staleTime,this.#e)!==ea(l.staleTime,this.#e))&&this.#g();const c=this.#y();s&&(this.#e!==r||He(this.options.enabled,this.#e)!==He(l.enabled,this.#e)||c!==this.#u)&&this.#v(c)}getOptimisticResult(n){const l=this.#t.getQueryCache().build(this.#t,n),r=this.createResult(l,n);return E2(this,r)&&(this.#a=r,this.#r=this.options,this.#i=this.#e.state),r}getCurrentResult(){return this.#a}trackResult(n,l){return new Proxy(n,{get:(r,s)=>(this.trackProp(s),l?.(s),s==="promise"&&!this.options.experimental_prefetchInRender&&this.#s.status==="pending"&&this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),Reflect.get(r,s))})}trackProp(n){this.#p.add(n)}getCurrentQuery(){return this.#e}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const l=this.#t.defaultQueryOptions(n),r=this.#t.getQueryCache().build(this.#t,l);return r.fetch().then(()=>this.createResult(r,l))}fetch(n){return this.#f({...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#f(n){this.#w();let l=this.#e.fetch(this.options,n);return n?.throwOnError||(l=l.catch(fe)),l}#g(){this.#x();const n=ea(this.options.staleTime,this.#e);if(Aa||this.#a.isStale||!Vc(n))return;const r=Ug(this.#a.dataUpdatedAt,n)+1;this.#o=wa.setTimeout(()=>{this.#a.isStale||this.updateResult()},r)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(n){this.#S(),this.#u=n,!(Aa||He(this.options.enabled,this.#e)===!1||!Vc(this.#u)||this.#u===0)&&(this.#c=wa.setInterval(()=>{(this.options.refetchIntervalInBackground||Of.isFocused())&&this.#f()},this.#u))}#b(){this.#g(),this.#v(this.#y())}#x(){this.#o&&(wa.clearTimeout(this.#o),this.#o=void 0)}#S(){this.#c&&(wa.clearInterval(this.#c),this.#c=void 0)}createResult(n,l){const r=this.#e,s=this.options,c=this.#a,f=this.#i,d=this.#r,y=n!==r?n.state:this.#n,{state:p}=n;let g={...p},S=!1,O;if(l._optimisticResults){const P=this.hasListeners(),tt=!P&&sm(n,l),vt=P&&um(n,r,l,s);(tt||vt)&&(g={...g,...Yg(p.data,n.options)}),l._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:z,errorUpdatedAt:A,status:D}=g;O=g.data;let C=!1;if(l.placeholderData!==void 0&&O===void 0&&D==="pending"){let P;c?.isPlaceholderData&&l.placeholderData===d?.placeholderData?(P=c.data,C=!0):P=typeof l.placeholderData=="function"?l.placeholderData(this.#h?.state.data,this.#h):l.placeholderData,P!==void 0&&(D="success",O=Fc(c?.data,P,l),S=!0)}if(l.select&&O!==void 0&&!C)if(c&&O===f?.data&&l.select===this.#m)O=this.#d;else try{this.#m=l.select,O=l.select(O),O=Fc(c?.data,O,l),this.#d=O,this.#l=null}catch(P){this.#l=P}this.#l&&(z=this.#l,O=this.#d,A=Date.now(),D="error");const L=g.fetchStatus==="fetching",q=D==="pending",$=D==="error",J=q&&L,X=O!==void 0,K={status:D,fetchStatus:g.fetchStatus,isPending:q,isSuccess:D==="success",isError:$,isInitialLoading:J,isLoading:J,data:O,dataUpdatedAt:g.dataUpdatedAt,error:z,errorUpdatedAt:A,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>y.dataUpdateCount||g.errorUpdateCount>y.errorUpdateCount,isFetching:L,isRefetching:L&&!q,isLoadingError:$&&!X,isPaused:g.fetchStatus==="paused",isPlaceholderData:S,isRefetchError:$&&X,isStale:Af(n,l),refetch:this.refetch,promise:this.#s,isEnabled:He(l.enabled,n)!==!1};if(this.options.experimental_prefetchInRender){const P=_t=>{K.status==="error"?_t.reject(K.error):K.data!==void 0&&_t.resolve(K.data)},tt=()=>{const _t=this.#s=K.promise=Jc();P(_t)},vt=this.#s;switch(vt.status){case"pending":n.queryHash===r.queryHash&&P(vt);break;case"fulfilled":(K.status==="error"||K.data!==vt.value)&&tt();break;case"rejected":(K.status!=="error"||K.error!==vt.reason)&&tt();break}}return K}updateResult(){const n=this.#a,l=this.createResult(this.#e,this.options);if(this.#i=this.#e.state,this.#r=this.options,this.#i.data!==void 0&&(this.#h=this.#e),Ns(l,n))return;this.#a=l;const r=()=>{if(!n)return!0;const{notifyOnChangeProps:s}=this.options,c=typeof s=="function"?s():s;if(c==="all"||!c&&!this.#p.size)return!0;const f=new Set(c??this.#p);return this.options.throwOnError&&f.add("error"),Object.keys(this.#a).some(d=>{const m=d;return this.#a[m]!==n[m]&&f.has(m)})};this.#E({listeners:r()})}#w(){const n=this.#t.getQueryCache().build(this.#t,this.options);if(n===this.#e)return;const l=this.#e;this.#e=n,this.#n=n.state,this.hasListeners()&&(l?.removeObserver(this),n.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#E(n){Kt.batch(()=>{n.listeners&&this.listeners.forEach(l=>{l(this.#a)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function w2(n,l){return He(l.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&l.retryOnMount===!1)}function sm(n,l){return w2(n,l)||n.state.data!==void 0&&Wc(n,l,l.refetchOnMount)}function Wc(n,l,r){if(He(l.enabled,n)!==!1&&ea(l.staleTime,n)!=="static"){const s=typeof r=="function"?r(n):r;return s==="always"||s!==!1&&Af(n,l)}return!1}function um(n,l,r,s){return(n!==l||He(s.enabled,n)===!1)&&(!r.suspense||n.state.status!=="error")&&Af(n,r)}function Af(n,l){return He(l.enabled,n)!==!1&&n.isStaleByTime(ea(l.staleTime,n))}function E2(n,l){return!Ns(n.getCurrentResult(),l)}function om(n){return{onFetch:(l,r)=>{const s=l.options,c=l.fetchOptions?.meta?.fetchMore?.direction,f=l.state.data?.pages||[],d=l.state.data?.pageParams||[];let m={pages:[],pageParams:[]},y=0;const p=async()=>{let g=!1;const S=A=>{Object.defineProperty(A,"signal",{enumerable:!0,get:()=>(l.signal.aborted?g=!0:l.signal.addEventListener("abort",()=>{g=!0}),l.signal)})},O=Bg(l.options,l.fetchOptions),z=async(A,D,C)=>{if(g)return Promise.reject();if(D==null&&A.pages.length)return Promise.resolve(A);const q=(()=>{const I={client:l.client,queryKey:l.queryKey,pageParam:D,direction:C?"backward":"forward",meta:l.options.meta};return S(I),I})(),$=await O(q),{maxPages:J}=l.options,X=C?m2:p2;return{pages:X(A.pages,$,J),pageParams:X(A.pageParams,D,J)}};if(c&&f.length){const A=c==="backward",D=A?R2:cm,C={pages:f,pageParams:d},L=D(s,C);m=await z(C,L,A)}else{const A=n??f.length;do{const D=y===0?d[0]??s.initialPageParam:cm(s,m);if(y>0&&D==null)break;m=await z(m,D),y++}while(y<A)}return m};l.options.persister?l.fetchFn=()=>l.options.persister?.(p,{client:l.client,queryKey:l.queryKey,meta:l.options.meta,signal:l.signal},r):l.fetchFn=p}}}function cm(n,{pages:l,pageParams:r}){const s=l.length-1;return l.length>0?n.getNextPageParam(l[s],l,r[s],r):void 0}function R2(n,{pages:l,pageParams:r}){return l.length>0?n.getPreviousPageParam?.(l[0],l,r[0],r):void 0}var T2=class extends kg{#t;#e;#n;constructor(n){super(),this.mutationId=n.mutationId,this.#e=n.mutationCache,this.#t=[],this.state=n.state||Gg(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){this.#t.includes(n)||(this.#t.push(n),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){this.#t=this.#t.filter(l=>l!==n),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#e.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(n){const l=()=>{this.#a({type:"continue"})};this.#n=Hg({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(c,f)=>{this.#a({type:"failed",failureCount:c,error:f})},onPause:()=>{this.#a({type:"pause"})},onContinue:l,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});const r=this.state.status==="pending",s=!this.#n.canStart();try{if(r)l();else{this.#a({type:"pending",variables:n,isPaused:s}),await this.#e.config.onMutate?.(n,this);const f=await this.options.onMutate?.(n);f!==this.state.context&&this.#a({type:"pending",context:f,variables:n,isPaused:s})}const c=await this.#n.start();return await this.#e.config.onSuccess?.(c,n,this.state.context,this),await this.options.onSuccess?.(c,n,this.state.context),await this.#e.config.onSettled?.(c,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(c,null,n,this.state.context),this.#a({type:"success",data:c}),c}catch(c){try{throw await this.#e.config.onError?.(c,n,this.state.context,this),await this.options.onError?.(c,n,this.state.context),await this.#e.config.onSettled?.(void 0,c,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,c,n,this.state.context),c}finally{this.#a({type:"error",error:c})}}finally{this.#e.runNext(this)}}#a(n){const l=r=>{switch(n.type){case"failed":return{...r,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...r,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:n.error,failureCount:r.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=l(this.state),Kt.batch(()=>{this.#t.forEach(r=>{r.onMutationUpdate(n)}),this.#e.notify({mutation:this,type:"updated",action:n})})}};function Gg(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var O2=class extends Ui{constructor(n={}){super(),this.config=n,this.#t=new Set,this.#e=new Map,this.#n=0}#t;#e;#n;build(n,l,r){const s=new T2({mutationCache:this,mutationId:++this.#n,options:n.defaultMutationOptions(l),state:r});return this.add(s),s}add(n){this.#t.add(n);const l=gs(n);if(typeof l=="string"){const r=this.#e.get(l);r?r.push(n):this.#e.set(l,[n])}this.notify({type:"added",mutation:n})}remove(n){if(this.#t.delete(n)){const l=gs(n);if(typeof l=="string"){const r=this.#e.get(l);if(r)if(r.length>1){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}else r[0]===n&&this.#e.delete(l)}}this.notify({type:"removed",mutation:n})}canRun(n){const l=gs(n);if(typeof l=="string"){const s=this.#e.get(l)?.find(c=>c.state.status==="pending");return!s||s===n}else return!0}runNext(n){const l=gs(n);return typeof l=="string"?this.#e.get(l)?.find(s=>s!==n&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Kt.batch(()=>{this.#t.forEach(n=>{this.notify({type:"removed",mutation:n})}),this.#t.clear(),this.#e.clear()})}getAll(){return Array.from(this.#t)}find(n){const l={exact:!0,...n};return this.getAll().find(r=>am(l,r))}findAll(n={}){return this.getAll().filter(l=>am(n,l))}notify(n){Kt.batch(()=>{this.listeners.forEach(l=>{l(n)})})}resumePausedMutations(){const n=this.getAll().filter(l=>l.state.isPaused);return Kt.batch(()=>Promise.all(n.map(l=>l.continue().catch(fe))))}};function gs(n){return n.options.scope?.id}var A2=class extends Ui{#t;#e=void 0;#n;#a;constructor(l,r){super(),this.#t=l,this.setOptions(r),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(l){const r=this.options;this.options=this.#t.defaultMutationOptions(l),Ns(this.options,r)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),r?.mutationKey&&this.options.mutationKey&&Ca(r.mutationKey)!==Ca(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(l){this.#i(),this.#r(l)}getCurrentResult(){return this.#e}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#r()}mutate(l,r){return this.#a=r,this.#n?.removeObserver(this),this.#n=this.#t.getMutationCache().build(this.#t,this.options),this.#n.addObserver(this),this.#n.execute(l)}#i(){const l=this.#n?.state??Gg();this.#e={...l,isPending:l.status==="pending",isSuccess:l.status==="success",isError:l.status==="error",isIdle:l.status==="idle",mutate:this.mutate,reset:this.reset}}#r(l){Kt.batch(()=>{if(this.#a&&this.hasListeners()){const r=this.#e.variables,s=this.#e.context;l?.type==="success"?(this.#a.onSuccess?.(l.data,r,s),this.#a.onSettled?.(l.data,null,r,s)):l?.type==="error"&&(this.#a.onError?.(l.error,r,s),this.#a.onSettled?.(void 0,l.error,r,s))}this.listeners.forEach(r=>{r(this.#e)})})}},C2=class extends Ui{constructor(n={}){super(),this.config=n,this.#t=new Map}#t;build(n,l,r){const s=l.queryKey,c=l.queryHash??Rf(s,l);let f=this.get(c);return f||(f=new S2({client:n,queryKey:s,queryHash:c,options:n.defaultQueryOptions(l),state:r,defaultOptions:n.getQueryDefaults(s)}),this.add(f)),f}add(n){this.#t.has(n.queryHash)||(this.#t.set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const l=this.#t.get(n.queryHash);l&&(n.destroy(),l===n&&this.#t.delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Kt.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return this.#t.get(n)}getAll(){return[...this.#t.values()]}find(n){const l={exact:!0,...n};return this.getAll().find(r=>nm(l,r))}findAll(n={}){const l=this.getAll();return Object.keys(n).length>0?l.filter(r=>nm(n,r)):l}notify(n){Kt.batch(()=>{this.listeners.forEach(l=>{l(n)})})}onFocus(){Kt.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Kt.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},j2=class{#t;#e;#n;#a;#i;#r;#s;#l;constructor(n={}){this.#t=n.queryCache||new C2,this.#e=n.mutationCache||new O2,this.#n=n.defaultOptions||{},this.#a=new Map,this.#i=new Map,this.#r=0}mount(){this.#r++,this.#r===1&&(this.#s=Of.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#t.onFocus())}),this.#l=Bs.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#r--,this.#r===0&&(this.#s?.(),this.#s=void 0,this.#l?.(),this.#l=void 0)}isFetching(n){return this.#t.findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return this.#e.findAll({...n,status:"pending"}).length}getQueryData(n){const l=this.defaultQueryOptions({queryKey:n});return this.#t.get(l.queryHash)?.state.data}ensureQueryData(n){const l=this.defaultQueryOptions(n),r=this.#t.build(this,l),s=r.state.data;return s===void 0?this.fetchQuery(n):(n.revalidateIfStale&&r.isStaleByTime(ea(l.staleTime,r))&&this.prefetchQuery(l),Promise.resolve(s))}getQueriesData(n){return this.#t.findAll(n).map(({queryKey:l,state:r})=>{const s=r.data;return[l,s]})}setQueryData(n,l,r){const s=this.defaultQueryOptions({queryKey:n}),f=this.#t.get(s.queryHash)?.state.data,d=f2(l,f);if(d!==void 0)return this.#t.build(this,s).setData(d,{...r,manual:!0})}setQueriesData(n,l,r){return Kt.batch(()=>this.#t.findAll(n).map(({queryKey:s})=>[s,this.setQueryData(s,l,r)]))}getQueryState(n){const l=this.defaultQueryOptions({queryKey:n});return this.#t.get(l.queryHash)?.state}removeQueries(n){const l=this.#t;Kt.batch(()=>{l.findAll(n).forEach(r=>{l.remove(r)})})}resetQueries(n,l){const r=this.#t;return Kt.batch(()=>(r.findAll(n).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...n},l)))}cancelQueries(n,l={}){const r={revert:!0,...l},s=Kt.batch(()=>this.#t.findAll(n).map(c=>c.cancel(r)));return Promise.all(s).then(fe).catch(fe)}invalidateQueries(n,l={}){return Kt.batch(()=>(this.#t.findAll(n).forEach(r=>{r.invalidate()}),n?.refetchType==="none"?Promise.resolve():this.refetchQueries({...n,type:n?.refetchType??n?.type??"active"},l)))}refetchQueries(n,l={}){const r={...l,cancelRefetch:l.cancelRefetch??!0},s=Kt.batch(()=>this.#t.findAll(n).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let f=c.fetch(void 0,r);return r.throwOnError||(f=f.catch(fe)),c.state.fetchStatus==="paused"?Promise.resolve():f}));return Promise.all(s).then(fe)}fetchQuery(n){const l=this.defaultQueryOptions(n);l.retry===void 0&&(l.retry=!1);const r=this.#t.build(this,l);return r.isStaleByTime(ea(l.staleTime,r))?r.fetch(l):Promise.resolve(r.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(fe).catch(fe)}fetchInfiniteQuery(n){return n.behavior=om(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(fe).catch(fe)}ensureInfiniteQueryData(n){return n.behavior=om(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Bs.isOnline()?this.#e.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#n}setDefaultOptions(n){this.#n=n}setQueryDefaults(n,l){this.#a.set(Ca(n),{queryKey:n,defaultOptions:l})}getQueryDefaults(n){const l=[...this.#a.values()],r={};return l.forEach(s=>{Gl(n,s.queryKey)&&Object.assign(r,s.defaultOptions)}),r}setMutationDefaults(n,l){this.#i.set(Ca(n),{mutationKey:n,defaultOptions:l})}getMutationDefaults(n){const l=[...this.#i.values()],r={};return l.forEach(s=>{Gl(n,s.mutationKey)&&Object.assign(r,s.defaultOptions)}),r}defaultQueryOptions(n){if(n._defaulted)return n;const l={...this.#n.queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return l.queryHash||(l.queryHash=Rf(l.queryKey,l)),l.refetchOnReconnect===void 0&&(l.refetchOnReconnect=l.networkMode!=="always"),l.throwOnError===void 0&&(l.throwOnError=!!l.suspense),!l.networkMode&&l.persister&&(l.networkMode="offlineFirst"),l.queryFn===Tf&&(l.enabled=!1),l}defaultMutationOptions(n){return n?._defaulted?n:{...this.#n.mutations,...n?.mutationKey&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){this.#t.clear(),this.#e.clear()}},$g=w.createContext(void 0),Cf=n=>{const l=w.useContext($g);if(!l)throw new Error("No QueryClient set, use QueryClientProvider to set one");return l},z2=({client:n,children:l})=>(w.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),v.jsx($g.Provider,{value:n,children:l})),Xg=w.createContext(!1),D2=()=>w.useContext(Xg);Xg.Provider;function M2(){let n=!1;return{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n}}var _2=w.createContext(M2()),U2=()=>w.useContext(_2),N2=(n,l)=>{(n.suspense||n.throwOnError||n.experimental_prefetchInRender)&&(l.isReset()||(n.retryOnMount=!1))},B2=n=>{w.useEffect(()=>{n.clearReset()},[n])},L2=({result:n,errorResetBoundary:l,throwOnError:r,query:s,suspense:c})=>n.isError&&!l.isReset()&&!n.isFetching&&s&&(c&&n.data===void 0||Lg(r,[n.error,s])),q2=(n,l)=>l.state.data===void 0,H2=n=>{if(n.suspense){const r=c=>c==="static"?c:Math.max(c??1e3,1e3),s=n.staleTime;n.staleTime=typeof s=="function"?(...c)=>r(s(...c)):r(s),typeof n.gcTime=="number"&&(n.gcTime=Math.max(n.gcTime,1e3))}},k2=(n,l)=>n.isLoading&&n.isFetching&&!l,Y2=(n,l)=>n?.suspense&&l.isPending,fm=(n,l,r)=>l.fetchOptimistic(n).catch(()=>{r.clearReset()});function Kg(n,l,r){const s=D2(),c=U2(),f=Cf(),d=f.defaultQueryOptions(n);f.getDefaultOptions().queries?._experimental_beforeQuery?.(d),d._optimisticResults=s?"isRestoring":"optimistic",H2(d),N2(d,c),B2(c);const m=!f.getQueryCache().get(d.queryHash),[y]=w.useState(()=>new l(f,d)),p=y.getOptimisticResult(d),g=!s&&n.subscribed!==!1;if(w.useSyncExternalStore(w.useCallback(S=>{const O=g?y.subscribe(Kt.batchCalls(S)):fe;return y.updateResult(),O},[y,g]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),w.useEffect(()=>{y.setOptions(d)},[d,y]),Y2(d,p))throw fm(d,y,c);if(L2({result:p,errorResetBoundary:c,throwOnError:d.throwOnError,query:f.getQueryCache().get(d.queryHash),suspense:d.suspense}))throw p.error;return f.getDefaultOptions().queries?._experimental_afterQuery?.(d,p),d.experimental_prefetchInRender&&!Aa&&k2(p,s)&&(m?fm(d,y,c):f.getQueryCache().get(d.queryHash)?.promise)?.catch(fe).finally(()=>{y.updateResult()}),d.notifyOnChangeProps?p:y.trackResult(p)}function Zs(n,l){return Kg(n,Qg)}function jf(n,l){return Kg({...n,enabled:!0,suspense:!0,throwOnError:q2,placeholderData:void 0},Qg)}function Q2(n,l){const r=Cf(),[s]=w.useState(()=>new A2(r,n));w.useEffect(()=>{s.setOptions(n)},[s,n]);const c=w.useSyncExternalStore(w.useCallback(d=>s.subscribe(Kt.batchCalls(d)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),f=w.useCallback((d,m)=>{s.mutate(d,m).catch(fe)},[s]);if(c.error&&Lg(s.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:f,mutateAsync:c.mutate}}async function Ni(n,l){const r=await fetch(`/api${n}`,{headers:{"Content-Type":"application/json"},...l});if(!r.ok)throw new Error(`API 요청 실패: ${r.status}`);return r.json()}async function zf(n){return await Ni(`/sales/${n}`)}async function G2(n){const l=new URLSearchParams({query:n}).toString();return await Ni(`/sales/search?${l}`)}async function Vg(n,l,r=5){try{const s=await fetch("/api/recommendations/run",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({userId:n,topN:r})});if(!s.ok)throw new Error(`추천 API 오류: ${s.status}`);return await s.json()}catch(s){throw console.error("추천 API 호출 실패:",s),s}}async function $2(n){return await Ni(`/movies/${n}`)}async function Zg(n=10){return await Ni(`/movies/popular?limit=${n}`)}function Fg(n){return Zs({queryKey:["SearchSale",n],queryFn:()=>G2(n),enabled:n.trim().length>0,staleTime:300*1e3})}function X2(n){return jf({queryKey:["PopularSales",n],queryFn:async()=>(await Zg(n)).flatMap(s=>s.salesInfo),staleTime:300*1e3})}function K2(n=20){return jf({queryKey:["InfinitePopularSales"],queryFn:async()=>(await Zg(100)).flatMap(s=>s.salesInfo),staleTime:300*1e3})}function V2(){const{data:n}=K2(20),[l,r]=w.useState(20),s=w.useRef(null),c=w.useMemo(()=>n.slice(0,l),[n,l]),f=d=>{if(s.current){const m=s.current.clientWidth,y=s.current.scrollLeft,p=s.current.scrollWidth-s.current.clientWidth;if(d==="right"&&y>=p-10&&l<n.length){r(g=>Math.min(g+10,n.length)),setTimeout(()=>{s.current&&s.current.scrollBy({left:m,behavior:"smooth"})},100);return}s.current.scrollBy({left:d==="right"?m:-m,behavior:"smooth"})}};return v.jsx(Dg,{children:v.jsxs(Ag,{children:[v.jsx(Us,{left:!0,onClick:()=>f("left"),children:"◀"}),v.jsx(jg,{children:v.jsx(Cg,{ref:s,children:c.map(d=>v.jsx(_g,{product:d},d.id))})}),v.jsx(Us,{onClick:()=>f("right"),children:"▶"})]})})}T.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
  gap: 24px; /* 카드 사이 간격 */
  width: 100%;
  max-width: 1200px; /* 가운데 정렬 시 안정감 */
  margin: 0 auto; /* 가운데 정렬 */
  padding: 20px 16px; /* 양 옆 패딩 */

  /* 반응형 간격 조정 */
  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;const dm=T.p`
  font-size: 24px;            /* 메인보다는 살짝 작은 크기 */
  font-weight: 500;            /* 적당히 강조 */
  color: ${nt.mainDeepBlue};                 /* 부드러운 다크 그레이 */
  text-align: left;            /* 왼쪽 정렬 */
  margin: 0 0 16px 0;          /* 아래 여백으로 카드와 분리 */
  line-height: 1.5;            /* 읽기 좋은 줄 높이 */
  letter-spacing: 0.2px;       /* 서브 타이틀 느낌 강조 */
  padding-left : 20px
`;T.section`
  background: linear-gradient(135deg, ${nt.mainBlue} 0%, ${nt.mainDeepBlue} 100%);
  color: white;
  padding: 60px 20px;
  margin: 0 0 40px 0;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;T.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;T.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;T.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 32px 0;
  opacity: 0.9;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;T.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 20px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;T.span`
  font-size: 1.5rem;
`;T.span`
  font-weight: 500;
  font-size: 0.9rem;
`;const hm=T.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${nt.mainBlue}20, transparent);
  margin: 40px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${nt.mainBlue};
    border-radius: 2px;
  }
`;T.div`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;const Z2=T.div`
  position: relative;
  z-index: 10;
  height: 500px;
  width: 100vw;
  background-color: ${nt.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: clip-path 0.2s ease-out;
`,F2=T.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`,J2=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,P2=T.div`
  display: flex;
  align-items: center;
  gap: 48px;
`,jc=T.div`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,W2=T.h1`
  font-size: 28px;
  color: white;
  font-weight: 900;
  margin: 0;
  cursor: pointer;
`,zc=T.img`
  width: 24px;
  height: 24px;
`,I2=T.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 48px;
  margin-top: 24px;
`,tw=T.div`
  width: 100%;
  color: white;
`,ew=T.h2`
  font-size: 40px;
  font-weight: 800;
  margin: 0 0 8px 0;
  line-height: 1.1;
`,nw=T.p`
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin: 0 0 16px 0;
`,aw=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,iw=T.input`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 16px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
`,lw=T.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`,rw=T.img`
  width: 24px;
  height: 24px;
`,sw=T.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 1000;
  min-width: 180px;
  margin-top: 8px;
  animation: dropdownFadeIn 0.2s ease-out;
  
  @keyframes dropdownFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,pm=T.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
    color: ${nt.mainBlue};
  }
  
  &:active {
    background-color: #e9ecef;
  }
`,uw="/static/img/search_w.svg",ow="/static/img/user_w.svg",cw="/static/img/menu_w.svg",fw="/static/img/heart_w.svg",dw=()=>{const n=Qe(),[l,r]=w.useState(""),[s,c]=w.useState(!1),f=w.useRef(null),d=w.useRef(null),{showToast:m}=Zl(),y=w.useRef({x:48,y:0}),p=w.useRef({x:48,y:0});w.useEffect(()=>{const D=q=>{const{innerWidth:$,innerHeight:J}=window,X=40+q.clientX/$*20,I=q.clientY/J*10;p.current={x:X,y:I}};window.addEventListener("mousemove",D);let C;const L=()=>{y.current.x+=(p.current.x-y.current.x)*.08,y.current.y+=(p.current.y-y.current.y)*.08,f.current&&(f.current.style.clipPath=`ellipse(100% 80% at ${y.current.x}% ${y.current.y}%)`),C=requestAnimationFrame(L)};return L(),()=>{cancelAnimationFrame(C),window.removeEventListener("mousemove",D)}},[]);const g=()=>{n(`/static/SearchPage/${l}`)},S=D=>{D.key==="Enter"&&g()},O=()=>{c(D=>!D)},z=async()=>{const D="hcan1223@pusan.ac.kr";try{await navigator.clipboard.writeText(D),m("이메일 주소가 클립보드에 복사되었습니다","success")}catch(C){m(`${C}버그 제보 이메일: ${D}`,"info")}c(!1)},A=()=>{window.open("https://github.com/patkrdj/Capstone","_blank"),c(!1)};return w.useEffect(()=>{const D=C=>{d.current&&!d.current.contains(C.target)&&c(!1)};return s&&document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}},[s]),v.jsx(Z2,{ref:f,children:v.jsxs(Mi,{children:[v.jsxs(F2,{children:[v.jsx(J2,{children:v.jsx(W2,{onClick:()=>n("/static/"),children:"L.B"})}),v.jsxs(P2,{children:[v.jsx(jc,{onClick:()=>n("/static/onboarding"),children:v.jsx(zc,{src:fw,alt:"my"})}),v.jsx(jc,{onClick:()=>n("/static/My"),children:v.jsx(zc,{src:ow,alt:"my"})}),v.jsxs(jc,{ref:d,onClick:O,style:{position:"relative"},children:[v.jsx(zc,{src:cw,alt:"menu"}),s&&v.jsxs(sw,{children:[v.jsx(pm,{onClick:z,children:"버그 제보하기"}),v.jsx(pm,{onClick:A,children:"깃허브 페이지"})]})]})]})]}),v.jsx(I2,{children:v.jsxs(tw,{children:[v.jsx(ew,{children:"블루레이 추천"}),v.jsx(nw,{children:"당신의 인생영화를 찾아보세요!"}),v.jsxs(aw,{children:[v.jsx(iw,{value:l,onChange:D=>r(D.target.value),onKeyDown:S,placeholder:"상품명 검색"}),v.jsx(lw,{onClick:g,children:v.jsx(rw,{src:uw,alt:"search"})})]})]})})]})})},hw=w.createContext(null),Dc={didCatch:!1,error:null};class Ic extends w.Component{constructor(l){super(l),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Dc}static getDerivedStateFromError(l){return{didCatch:!0,error:l}}resetErrorBoundary(){const{error:l}=this.state;if(l!==null){for(var r,s,c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d];(r=(s=this.props).onReset)===null||r===void 0||r.call(s,{args:f,reason:"imperative-api"}),this.setState(Dc)}}componentDidCatch(l,r){var s,c;(s=(c=this.props).onError)===null||s===void 0||s.call(c,l,r)}componentDidUpdate(l,r){const{didCatch:s}=this.state,{resetKeys:c}=this.props;if(s&&r.error!==null&&pw(l.resetKeys,c)){var f,d;(f=(d=this.props).onReset)===null||f===void 0||f.call(d,{next:c,prev:l.resetKeys,reason:"keys"}),this.setState(Dc)}}render(){const{children:l,fallbackRender:r,FallbackComponent:s,fallback:c}=this.props,{didCatch:f,error:d}=this.state;let m=l;if(f){const y={error:d,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")m=r(y);else if(s)m=w.createElement(s,y);else if(c!==void 0)m=c;else throw d}return w.createElement(hw.Provider,{value:{didCatch:f,error:d,resetErrorBoundary:this.resetErrorBoundary}},m)}}function pw(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.length!==l.length||n.some((r,s)=>!Object.is(r,l[s]))}const mm=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  height: 100%;
  gap: 20px;
`,mw=Di`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,gw=Di`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,yw=Di`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`,vw=Di`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;T.div`
  border: 3px solid #f0f0f0;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${mw} 1s linear infinite;
`;const gm=T.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  animation: ${gw} 2s ease-in-out infinite;
`,ym=T.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`,vi=T.div`
  width: 8px;
  height: 8px;
  background-color: ${nt.mainBlue};
  border-radius: 50%;
  animation: ${yw} 1.4s ease-in-out infinite;
  animation-delay: ${n=>n.$delay}s;
`,bw=T.div`
  width: 200px;
  height: 4px;
  background-color: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 10px;
`,xw=T.div`
  height: 100%;
  background: linear-gradient(90deg,${nt.mainBlue},${nt.mainDeepBlue},${nt.mainBlue});
  background-size: 200px 100%;
  animation: ${vw} 5s linear infinite;
  width: ${n=>n.$progress}%;
  transition: width 0.3s ease;
`,ja=({loading:n=!0,message:l="로딩 중...",showProgress:r=!1,type:s="default"})=>{const[c,f]=w.useState(0),[d,m]=w.useState(l);return w.useEffect(()=>{if(n){if(r){const y=setInterval(()=>{f(p=>p>=90?p:p+Math.random()*10)},200);return()=>clearInterval(y)}if(r){const y=["데이터를 분석하고 있어요...","맞춤 추천을 찾고 있어요...","최적의 상품을 선별하고 있어요..."];let p=0;const g=setInterval(()=>{m(y[p%y.length]),p++},3e3);return()=>clearInterval(g)}}},[n,r]),n?s==="enhanced"?v.jsxs(mm,{children:[v.jsx(gm,{children:d}),r&&v.jsx(bw,{children:v.jsx(xw,{$progress:c})}),v.jsxs(ym,{children:[v.jsx(vi,{$delay:0}),v.jsx(vi,{$delay:.2}),v.jsx(vi,{$delay:.4})]})]}):v.jsxs(mm,{children:[v.jsx(gm,{children:l}),v.jsxs(ym,{children:[v.jsx(vi,{$delay:0}),v.jsx(vi,{$delay:.2}),v.jsx(vi,{$delay:.4})]})]}):null};function Jg(n,l){return function(){return n.apply(l,arguments)}}const{toString:Sw}=Object.prototype,{getPrototypeOf:Df}=Object,{iterator:Fs,toStringTag:Pg}=Symbol,Js=(n=>l=>{const r=Sw.call(l);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Je=n=>(n=n.toLowerCase(),l=>Js(l)===n),Ps=n=>l=>typeof l===n,{isArray:Bi}=Array,$l=Ps("undefined");function Fl(n){return n!==null&&!$l(n)&&n.constructor!==null&&!$l(n.constructor)&&ye(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Wg=Je("ArrayBuffer");function ww(n){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(n):l=n&&n.buffer&&Wg(n.buffer),l}const Ew=Ps("string"),ye=Ps("function"),Ig=Ps("number"),Jl=n=>n!==null&&typeof n=="object",Rw=n=>n===!0||n===!1,Ts=n=>{if(Js(n)!=="object")return!1;const l=Df(n);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Pg in n)&&!(Fs in n)},Tw=n=>{if(!Jl(n)||Fl(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},Ow=Je("Date"),Aw=Je("File"),Cw=Je("Blob"),jw=Je("FileList"),zw=n=>Jl(n)&&ye(n.pipe),Dw=n=>{let l;return n&&(typeof FormData=="function"&&n instanceof FormData||ye(n.append)&&((l=Js(n))==="formdata"||l==="object"&&ye(n.toString)&&n.toString()==="[object FormData]"))},Mw=Je("URLSearchParams"),[_w,Uw,Nw,Bw]=["ReadableStream","Request","Response","Headers"].map(Je),Lw=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Pl(n,l,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let s,c;if(typeof n!="object"&&(n=[n]),Bi(n))for(s=0,c=n.length;s<c;s++)l.call(null,n[s],s,n);else{if(Fl(n))return;const f=r?Object.getOwnPropertyNames(n):Object.keys(n),d=f.length;let m;for(s=0;s<d;s++)m=f[s],l.call(null,n[m],m,n)}}function ty(n,l){if(Fl(n))return null;l=l.toLowerCase();const r=Object.keys(n);let s=r.length,c;for(;s-- >0;)if(c=r[s],l===c.toLowerCase())return c;return null}const Ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ey=n=>!$l(n)&&n!==Ea;function tf(){const{caseless:n}=ey(this)&&this||{},l={},r=(s,c)=>{const f=n&&ty(l,c)||c;Ts(l[f])&&Ts(s)?l[f]=tf(l[f],s):Ts(s)?l[f]=tf({},s):Bi(s)?l[f]=s.slice():l[f]=s};for(let s=0,c=arguments.length;s<c;s++)arguments[s]&&Pl(arguments[s],r);return l}const qw=(n,l,r,{allOwnKeys:s}={})=>(Pl(l,(c,f)=>{r&&ye(c)?n[f]=Jg(c,r):n[f]=c},{allOwnKeys:s}),n),Hw=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),kw=(n,l,r,s)=>{n.prototype=Object.create(l.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:l.prototype}),r&&Object.assign(n.prototype,r)},Yw=(n,l,r,s)=>{let c,f,d;const m={};if(l=l||{},n==null)return l;do{for(c=Object.getOwnPropertyNames(n),f=c.length;f-- >0;)d=c[f],(!s||s(d,n,l))&&!m[d]&&(l[d]=n[d],m[d]=!0);n=r!==!1&&Df(n)}while(n&&(!r||r(n,l))&&n!==Object.prototype);return l},Qw=(n,l,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=l.length;const s=n.indexOf(l,r);return s!==-1&&s===r},Gw=n=>{if(!n)return null;if(Bi(n))return n;let l=n.length;if(!Ig(l))return null;const r=new Array(l);for(;l-- >0;)r[l]=n[l];return r},$w=(n=>l=>n&&l instanceof n)(typeof Uint8Array<"u"&&Df(Uint8Array)),Xw=(n,l)=>{const s=(n&&n[Fs]).call(n);let c;for(;(c=s.next())&&!c.done;){const f=c.value;l.call(n,f[0],f[1])}},Kw=(n,l)=>{let r;const s=[];for(;(r=n.exec(l))!==null;)s.push(r);return s},Vw=Je("HTMLFormElement"),Zw=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,c){return s.toUpperCase()+c}),vm=(({hasOwnProperty:n})=>(l,r)=>n.call(l,r))(Object.prototype),Fw=Je("RegExp"),ny=(n,l)=>{const r=Object.getOwnPropertyDescriptors(n),s={};Pl(r,(c,f)=>{let d;(d=l(c,f,n))!==!1&&(s[f]=d||c)}),Object.defineProperties(n,s)},Jw=n=>{ny(n,(l,r)=>{if(ye(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=n[r];if(ye(s)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Pw=(n,l)=>{const r={},s=c=>{c.forEach(f=>{r[f]=!0})};return Bi(n)?s(n):s(String(n).split(l)),r},Ww=()=>{},Iw=(n,l)=>n!=null&&Number.isFinite(n=+n)?n:l;function tE(n){return!!(n&&ye(n.append)&&n[Pg]==="FormData"&&n[Fs])}const eE=n=>{const l=new Array(10),r=(s,c)=>{if(Jl(s)){if(l.indexOf(s)>=0)return;if(Fl(s))return s;if(!("toJSON"in s)){l[c]=s;const f=Bi(s)?[]:{};return Pl(s,(d,m)=>{const y=r(d,c+1);!$l(y)&&(f[m]=y)}),l[c]=void 0,f}}return s};return r(n,0)},nE=Je("AsyncFunction"),aE=n=>n&&(Jl(n)||ye(n))&&ye(n.then)&&ye(n.catch),ay=((n,l)=>n?setImmediate:l?((r,s)=>(Ea.addEventListener("message",({source:c,data:f})=>{c===Ea&&f===r&&s.length&&s.shift()()},!1),c=>{s.push(c),Ea.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",ye(Ea.postMessage)),iE=typeof queueMicrotask<"u"?queueMicrotask.bind(Ea):typeof process<"u"&&process.nextTick||ay,lE=n=>n!=null&&ye(n[Fs]),B={isArray:Bi,isArrayBuffer:Wg,isBuffer:Fl,isFormData:Dw,isArrayBufferView:ww,isString:Ew,isNumber:Ig,isBoolean:Rw,isObject:Jl,isPlainObject:Ts,isEmptyObject:Tw,isReadableStream:_w,isRequest:Uw,isResponse:Nw,isHeaders:Bw,isUndefined:$l,isDate:Ow,isFile:Aw,isBlob:Cw,isRegExp:Fw,isFunction:ye,isStream:zw,isURLSearchParams:Mw,isTypedArray:$w,isFileList:jw,forEach:Pl,merge:tf,extend:qw,trim:Lw,stripBOM:Hw,inherits:kw,toFlatObject:Yw,kindOf:Js,kindOfTest:Je,endsWith:Qw,toArray:Gw,forEachEntry:Xw,matchAll:Kw,isHTMLForm:Vw,hasOwnProperty:vm,hasOwnProp:vm,reduceDescriptors:ny,freezeMethods:Jw,toObjectSet:Pw,toCamelCase:Zw,noop:Ww,toFiniteNumber:Iw,findKey:ty,global:Ea,isContextDefined:ey,isSpecCompliantForm:tE,toJSONObject:eE,isAsyncFn:nE,isThenable:aE,setImmediate:ay,asap:iE,isIterable:lE};function ot(n,l,r,s,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",l&&(this.code=l),r&&(this.config=r),s&&(this.request=s),c&&(this.response=c,this.status=c.status?c.status:null)}B.inherits(ot,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const iy=ot.prototype,ly={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{ly[n]={value:n}});Object.defineProperties(ot,ly);Object.defineProperty(iy,"isAxiosError",{value:!0});ot.from=(n,l,r,s,c,f)=>{const d=Object.create(iy);return B.toFlatObject(n,d,function(y){return y!==Error.prototype},m=>m!=="isAxiosError"),ot.call(d,n.message,l,r,s,c),d.cause=n,d.name=n.name,f&&Object.assign(d,f),d};const rE=null;function ef(n){return B.isPlainObject(n)||B.isArray(n)}function ry(n){return B.endsWith(n,"[]")?n.slice(0,-2):n}function bm(n,l,r){return n?n.concat(l).map(function(c,f){return c=ry(c),!r&&f?"["+c+"]":c}).join(r?".":""):l}function sE(n){return B.isArray(n)&&!n.some(ef)}const uE=B.toFlatObject(B,{},null,function(l){return/^is[A-Z]/.test(l)});function Ws(n,l,r){if(!B.isObject(n))throw new TypeError("target must be an object");l=l||new FormData,r=B.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(D,C){return!B.isUndefined(C[D])});const s=r.metaTokens,c=r.visitor||g,f=r.dots,d=r.indexes,y=(r.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(l);if(!B.isFunction(c))throw new TypeError("visitor must be a function");function p(A){if(A===null)return"";if(B.isDate(A))return A.toISOString();if(B.isBoolean(A))return A.toString();if(!y&&B.isBlob(A))throw new ot("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(A)||B.isTypedArray(A)?y&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function g(A,D,C){let L=A;if(A&&!C&&typeof A=="object"){if(B.endsWith(D,"{}"))D=s?D:D.slice(0,-2),A=JSON.stringify(A);else if(B.isArray(A)&&sE(A)||(B.isFileList(A)||B.endsWith(D,"[]"))&&(L=B.toArray(A)))return D=ry(D),L.forEach(function($,J){!(B.isUndefined($)||$===null)&&l.append(d===!0?bm([D],J,f):d===null?D:D+"[]",p($))}),!1}return ef(A)?!0:(l.append(bm(C,D,f),p(A)),!1)}const S=[],O=Object.assign(uE,{defaultVisitor:g,convertValue:p,isVisitable:ef});function z(A,D){if(!B.isUndefined(A)){if(S.indexOf(A)!==-1)throw Error("Circular reference detected in "+D.join("."));S.push(A),B.forEach(A,function(L,q){(!(B.isUndefined(L)||L===null)&&c.call(l,L,B.isString(q)?q.trim():q,D,O))===!0&&z(L,D?D.concat(q):[q])}),S.pop()}}if(!B.isObject(n))throw new TypeError("data must be an object");return z(n),l}function xm(n){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return l[s]})}function Mf(n,l){this._pairs=[],n&&Ws(n,this,l)}const sy=Mf.prototype;sy.append=function(l,r){this._pairs.push([l,r])};sy.toString=function(l){const r=l?function(s){return l.call(this,s,xm)}:xm;return this._pairs.map(function(c){return r(c[0])+"="+r(c[1])},"").join("&")};function oE(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function uy(n,l,r){if(!l)return n;const s=r&&r.encode||oE;B.isFunction(r)&&(r={serialize:r});const c=r&&r.serialize;let f;if(c?f=c(l,r):f=B.isURLSearchParams(l)?l.toString():new Mf(l,r).toString(s),f){const d=n.indexOf("#");d!==-1&&(n=n.slice(0,d)),n+=(n.indexOf("?")===-1?"?":"&")+f}return n}class Sm{constructor(){this.handlers=[]}use(l,r,s){return this.handlers.push({fulfilled:l,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){B.forEach(this.handlers,function(s){s!==null&&l(s)})}}const oy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cE=typeof URLSearchParams<"u"?URLSearchParams:Mf,fE=typeof FormData<"u"?FormData:null,dE=typeof Blob<"u"?Blob:null,hE={isBrowser:!0,classes:{URLSearchParams:cE,FormData:fE,Blob:dE},protocols:["http","https","file","blob","url","data"]},_f=typeof window<"u"&&typeof document<"u",nf=typeof navigator=="object"&&navigator||void 0,pE=_f&&(!nf||["ReactNative","NativeScript","NS"].indexOf(nf.product)<0),mE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",gE=_f&&window.location.href||"http://localhost",yE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_f,hasStandardBrowserEnv:pE,hasStandardBrowserWebWorkerEnv:mE,navigator:nf,origin:gE},Symbol.toStringTag,{value:"Module"})),ue={...yE,...hE};function vE(n,l){return Ws(n,new ue.classes.URLSearchParams,{visitor:function(r,s,c,f){return ue.isNode&&B.isBuffer(r)?(this.append(s,r.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...l})}function bE(n){return B.matchAll(/\w+|\[(\w*)]/g,n).map(l=>l[0]==="[]"?"":l[1]||l[0])}function xE(n){const l={},r=Object.keys(n);let s;const c=r.length;let f;for(s=0;s<c;s++)f=r[s],l[f]=n[f];return l}function cy(n){function l(r,s,c,f){let d=r[f++];if(d==="__proto__")return!0;const m=Number.isFinite(+d),y=f>=r.length;return d=!d&&B.isArray(c)?c.length:d,y?(B.hasOwnProp(c,d)?c[d]=[c[d],s]:c[d]=s,!m):((!c[d]||!B.isObject(c[d]))&&(c[d]=[]),l(r,s,c[d],f)&&B.isArray(c[d])&&(c[d]=xE(c[d])),!m)}if(B.isFormData(n)&&B.isFunction(n.entries)){const r={};return B.forEachEntry(n,(s,c)=>{l(bE(s),c,r,0)}),r}return null}function SE(n,l,r){if(B.isString(n))try{return(l||JSON.parse)(n),B.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(n)}const Wl={transitional:oy,adapter:["xhr","http","fetch"],transformRequest:[function(l,r){const s=r.getContentType()||"",c=s.indexOf("application/json")>-1,f=B.isObject(l);if(f&&B.isHTMLForm(l)&&(l=new FormData(l)),B.isFormData(l))return c?JSON.stringify(cy(l)):l;if(B.isArrayBuffer(l)||B.isBuffer(l)||B.isStream(l)||B.isFile(l)||B.isBlob(l)||B.isReadableStream(l))return l;if(B.isArrayBufferView(l))return l.buffer;if(B.isURLSearchParams(l))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let m;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return vE(l,this.formSerializer).toString();if((m=B.isFileList(l))||s.indexOf("multipart/form-data")>-1){const y=this.env&&this.env.FormData;return Ws(m?{"files[]":l}:l,y&&new y,this.formSerializer)}}return f||c?(r.setContentType("application/json",!1),SE(l)):l}],transformResponse:[function(l){const r=this.transitional||Wl.transitional,s=r&&r.forcedJSONParsing,c=this.responseType==="json";if(B.isResponse(l)||B.isReadableStream(l))return l;if(l&&B.isString(l)&&(s&&!this.responseType||c)){const d=!(r&&r.silentJSONParsing)&&c;try{return JSON.parse(l)}catch(m){if(d)throw m.name==="SyntaxError"?ot.from(m,ot.ERR_BAD_RESPONSE,this,null,this.response):m}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ue.classes.FormData,Blob:ue.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],n=>{Wl.headers[n]={}});const wE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),EE=n=>{const l={};let r,s,c;return n&&n.split(`
`).forEach(function(d){c=d.indexOf(":"),r=d.substring(0,c).trim().toLowerCase(),s=d.substring(c+1).trim(),!(!r||l[r]&&wE[r])&&(r==="set-cookie"?l[r]?l[r].push(s):l[r]=[s]:l[r]=l[r]?l[r]+", "+s:s)}),l},wm=Symbol("internals");function ql(n){return n&&String(n).trim().toLowerCase()}function Os(n){return n===!1||n==null?n:B.isArray(n)?n.map(Os):String(n)}function RE(n){const l=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(n);)l[s[1]]=s[2];return l}const TE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Mc(n,l,r,s,c){if(B.isFunction(s))return s.call(this,l,r);if(c&&(l=r),!!B.isString(l)){if(B.isString(s))return l.indexOf(s)!==-1;if(B.isRegExp(s))return s.test(l)}}function OE(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,r,s)=>r.toUpperCase()+s)}function AE(n,l){const r=B.toCamelCase(" "+l);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+r,{value:function(c,f,d){return this[s].call(this,l,c,f,d)},configurable:!0})})}let ve=class{constructor(l){l&&this.set(l)}set(l,r,s){const c=this;function f(m,y,p){const g=ql(y);if(!g)throw new Error("header name must be a non-empty string");const S=B.findKey(c,g);(!S||c[S]===void 0||p===!0||p===void 0&&c[S]!==!1)&&(c[S||y]=Os(m))}const d=(m,y)=>B.forEach(m,(p,g)=>f(p,g,y));if(B.isPlainObject(l)||l instanceof this.constructor)d(l,r);else if(B.isString(l)&&(l=l.trim())&&!TE(l))d(EE(l),r);else if(B.isObject(l)&&B.isIterable(l)){let m={},y,p;for(const g of l){if(!B.isArray(g))throw TypeError("Object iterator must return a key-value pair");m[p=g[0]]=(y=m[p])?B.isArray(y)?[...y,g[1]]:[y,g[1]]:g[1]}d(m,r)}else l!=null&&f(r,l,s);return this}get(l,r){if(l=ql(l),l){const s=B.findKey(this,l);if(s){const c=this[s];if(!r)return c;if(r===!0)return RE(c);if(B.isFunction(r))return r.call(this,c,s);if(B.isRegExp(r))return r.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,r){if(l=ql(l),l){const s=B.findKey(this,l);return!!(s&&this[s]!==void 0&&(!r||Mc(this,this[s],s,r)))}return!1}delete(l,r){const s=this;let c=!1;function f(d){if(d=ql(d),d){const m=B.findKey(s,d);m&&(!r||Mc(s,s[m],m,r))&&(delete s[m],c=!0)}}return B.isArray(l)?l.forEach(f):f(l),c}clear(l){const r=Object.keys(this);let s=r.length,c=!1;for(;s--;){const f=r[s];(!l||Mc(this,this[f],f,l,!0))&&(delete this[f],c=!0)}return c}normalize(l){const r=this,s={};return B.forEach(this,(c,f)=>{const d=B.findKey(s,f);if(d){r[d]=Os(c),delete r[f];return}const m=l?OE(f):String(f).trim();m!==f&&delete r[f],r[m]=Os(c),s[m]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const r=Object.create(null);return B.forEach(this,(s,c)=>{s!=null&&s!==!1&&(r[c]=l&&B.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,r])=>l+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...r){const s=new this(l);return r.forEach(c=>s.set(c)),s}static accessor(l){const s=(this[wm]=this[wm]={accessors:{}}).accessors,c=this.prototype;function f(d){const m=ql(d);s[m]||(AE(c,d),s[m]=!0)}return B.isArray(l)?l.forEach(f):f(l),this}};ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(ve.prototype,({value:n},l)=>{let r=l[0].toUpperCase()+l.slice(1);return{get:()=>n,set(s){this[r]=s}}});B.freezeMethods(ve);function _c(n,l){const r=this||Wl,s=l||r,c=ve.from(s.headers);let f=s.data;return B.forEach(n,function(m){f=m.call(r,f,c.normalize(),l?l.status:void 0)}),c.normalize(),f}function fy(n){return!!(n&&n.__CANCEL__)}function Li(n,l,r){ot.call(this,n??"canceled",ot.ERR_CANCELED,l,r),this.name="CanceledError"}B.inherits(Li,ot,{__CANCEL__:!0});function dy(n,l,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?n(r):l(new ot("Request failed with status code "+r.status,[ot.ERR_BAD_REQUEST,ot.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function CE(n){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return l&&l[1]||""}function jE(n,l){n=n||10;const r=new Array(n),s=new Array(n);let c=0,f=0,d;return l=l!==void 0?l:1e3,function(y){const p=Date.now(),g=s[f];d||(d=p),r[c]=y,s[c]=p;let S=f,O=0;for(;S!==c;)O+=r[S++],S=S%n;if(c=(c+1)%n,c===f&&(f=(f+1)%n),p-d<l)return;const z=g&&p-g;return z?Math.round(O*1e3/z):void 0}}function zE(n,l){let r=0,s=1e3/l,c,f;const d=(p,g=Date.now())=>{r=g,c=null,f&&(clearTimeout(f),f=null),n(...p)};return[(...p)=>{const g=Date.now(),S=g-r;S>=s?d(p,g):(c=p,f||(f=setTimeout(()=>{f=null,d(c)},s-S)))},()=>c&&d(c)]}const Ls=(n,l,r=3)=>{let s=0;const c=jE(50,250);return zE(f=>{const d=f.loaded,m=f.lengthComputable?f.total:void 0,y=d-s,p=c(y),g=d<=m;s=d;const S={loaded:d,total:m,progress:m?d/m:void 0,bytes:y,rate:p||void 0,estimated:p&&m&&g?(m-d)/p:void 0,event:f,lengthComputable:m!=null,[l?"download":"upload"]:!0};n(S)},r)},Em=(n,l)=>{const r=n!=null;return[s=>l[0]({lengthComputable:r,total:n,loaded:s}),l[1]]},Rm=n=>(...l)=>B.asap(()=>n(...l)),DE=ue.hasStandardBrowserEnv?((n,l)=>r=>(r=new URL(r,ue.origin),n.protocol===r.protocol&&n.host===r.host&&(l||n.port===r.port)))(new URL(ue.origin),ue.navigator&&/(msie|trident)/i.test(ue.navigator.userAgent)):()=>!0,ME=ue.hasStandardBrowserEnv?{write(n,l,r,s,c,f){const d=[n+"="+encodeURIComponent(l)];B.isNumber(r)&&d.push("expires="+new Date(r).toGMTString()),B.isString(s)&&d.push("path="+s),B.isString(c)&&d.push("domain="+c),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read(n){const l=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function _E(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function UE(n,l){return l?n.replace(/\/?\/$/,"")+"/"+l.replace(/^\/+/,""):n}function hy(n,l,r){let s=!_E(l);return n&&(s||r==!1)?UE(n,l):l}const Tm=n=>n instanceof ve?{...n}:n;function za(n,l){l=l||{};const r={};function s(p,g,S,O){return B.isPlainObject(p)&&B.isPlainObject(g)?B.merge.call({caseless:O},p,g):B.isPlainObject(g)?B.merge({},g):B.isArray(g)?g.slice():g}function c(p,g,S,O){if(B.isUndefined(g)){if(!B.isUndefined(p))return s(void 0,p,S,O)}else return s(p,g,S,O)}function f(p,g){if(!B.isUndefined(g))return s(void 0,g)}function d(p,g){if(B.isUndefined(g)){if(!B.isUndefined(p))return s(void 0,p)}else return s(void 0,g)}function m(p,g,S){if(S in l)return s(p,g);if(S in n)return s(void 0,p)}const y={url:f,method:f,data:f,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:m,headers:(p,g,S)=>c(Tm(p),Tm(g),S,!0)};return B.forEach(Object.keys({...n,...l}),function(g){const S=y[g]||c,O=S(n[g],l[g],g);B.isUndefined(O)&&S!==m||(r[g]=O)}),r}const py=n=>{const l=za({},n);let{data:r,withXSRFToken:s,xsrfHeaderName:c,xsrfCookieName:f,headers:d,auth:m}=l;l.headers=d=ve.from(d),l.url=uy(hy(l.baseURL,l.url,l.allowAbsoluteUrls),n.params,n.paramsSerializer),m&&d.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let y;if(B.isFormData(r)){if(ue.hasStandardBrowserEnv||ue.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((y=d.getContentType())!==!1){const[p,...g]=y?y.split(";").map(S=>S.trim()).filter(Boolean):[];d.setContentType([p||"multipart/form-data",...g].join("; "))}}if(ue.hasStandardBrowserEnv&&(s&&B.isFunction(s)&&(s=s(l)),s||s!==!1&&DE(l.url))){const p=c&&f&&ME.read(f);p&&d.set(c,p)}return l},NE=typeof XMLHttpRequest<"u",BE=NE&&function(n){return new Promise(function(r,s){const c=py(n);let f=c.data;const d=ve.from(c.headers).normalize();let{responseType:m,onUploadProgress:y,onDownloadProgress:p}=c,g,S,O,z,A;function D(){z&&z(),A&&A(),c.cancelToken&&c.cancelToken.unsubscribe(g),c.signal&&c.signal.removeEventListener("abort",g)}let C=new XMLHttpRequest;C.open(c.method.toUpperCase(),c.url,!0),C.timeout=c.timeout;function L(){if(!C)return;const $=ve.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),X={data:!m||m==="text"||m==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:$,config:n,request:C};dy(function(K){r(K),D()},function(K){s(K),D()},X),C=null}"onloadend"in C?C.onloadend=L:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(L)},C.onabort=function(){C&&(s(new ot("Request aborted",ot.ECONNABORTED,n,C)),C=null)},C.onerror=function(){s(new ot("Network Error",ot.ERR_NETWORK,n,C)),C=null},C.ontimeout=function(){let J=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const X=c.transitional||oy;c.timeoutErrorMessage&&(J=c.timeoutErrorMessage),s(new ot(J,X.clarifyTimeoutError?ot.ETIMEDOUT:ot.ECONNABORTED,n,C)),C=null},f===void 0&&d.setContentType(null),"setRequestHeader"in C&&B.forEach(d.toJSON(),function(J,X){C.setRequestHeader(X,J)}),B.isUndefined(c.withCredentials)||(C.withCredentials=!!c.withCredentials),m&&m!=="json"&&(C.responseType=c.responseType),p&&([O,A]=Ls(p,!0),C.addEventListener("progress",O)),y&&C.upload&&([S,z]=Ls(y),C.upload.addEventListener("progress",S),C.upload.addEventListener("loadend",z)),(c.cancelToken||c.signal)&&(g=$=>{C&&(s(!$||$.type?new Li(null,n,C):$),C.abort(),C=null)},c.cancelToken&&c.cancelToken.subscribe(g),c.signal&&(c.signal.aborted?g():c.signal.addEventListener("abort",g)));const q=CE(c.url);if(q&&ue.protocols.indexOf(q)===-1){s(new ot("Unsupported protocol "+q+":",ot.ERR_BAD_REQUEST,n));return}C.send(f||null)})},LE=(n,l)=>{const{length:r}=n=n?n.filter(Boolean):[];if(l||r){let s=new AbortController,c;const f=function(p){if(!c){c=!0,m();const g=p instanceof Error?p:this.reason;s.abort(g instanceof ot?g:new Li(g instanceof Error?g.message:g))}};let d=l&&setTimeout(()=>{d=null,f(new ot(`timeout ${l} of ms exceeded`,ot.ETIMEDOUT))},l);const m=()=>{n&&(d&&clearTimeout(d),d=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(f):p.removeEventListener("abort",f)}),n=null)};n.forEach(p=>p.addEventListener("abort",f));const{signal:y}=s;return y.unsubscribe=()=>B.asap(m),y}},qE=function*(n,l){let r=n.byteLength;if(r<l){yield n;return}let s=0,c;for(;s<r;)c=s+l,yield n.slice(s,c),s=c},HE=async function*(n,l){for await(const r of kE(n))yield*qE(r,l)},kE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const l=n.getReader();try{for(;;){const{done:r,value:s}=await l.read();if(r)break;yield s}}finally{await l.cancel()}},Om=(n,l,r,s)=>{const c=HE(n,l);let f=0,d,m=y=>{d||(d=!0,s&&s(y))};return new ReadableStream({async pull(y){try{const{done:p,value:g}=await c.next();if(p){m(),y.close();return}let S=g.byteLength;if(r){let O=f+=S;r(O)}y.enqueue(new Uint8Array(g))}catch(p){throw m(p),p}},cancel(y){return m(y),c.return()}},{highWaterMark:2})},Is=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",my=Is&&typeof ReadableStream=="function",YE=Is&&(typeof TextEncoder=="function"?(n=>l=>n.encode(l))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),gy=(n,...l)=>{try{return!!n(...l)}catch{return!1}},QE=my&&gy(()=>{let n=!1;const l=new Request(ue.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!l}),Am=64*1024,af=my&&gy(()=>B.isReadableStream(new Response("").body)),qs={stream:af&&(n=>n.body)};Is&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(l=>{!qs[l]&&(qs[l]=B.isFunction(n[l])?r=>r[l]():(r,s)=>{throw new ot(`Response type '${l}' is not supported`,ot.ERR_NOT_SUPPORT,s)})})})(new Response);const GE=async n=>{if(n==null)return 0;if(B.isBlob(n))return n.size;if(B.isSpecCompliantForm(n))return(await new Request(ue.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(B.isArrayBufferView(n)||B.isArrayBuffer(n))return n.byteLength;if(B.isURLSearchParams(n)&&(n=n+""),B.isString(n))return(await YE(n)).byteLength},$E=async(n,l)=>{const r=B.toFiniteNumber(n.getContentLength());return r??GE(l)},XE=Is&&(async n=>{let{url:l,method:r,data:s,signal:c,cancelToken:f,timeout:d,onDownloadProgress:m,onUploadProgress:y,responseType:p,headers:g,withCredentials:S="same-origin",fetchOptions:O}=py(n);p=p?(p+"").toLowerCase():"text";let z=LE([c,f&&f.toAbortSignal()],d),A;const D=z&&z.unsubscribe&&(()=>{z.unsubscribe()});let C;try{if(y&&QE&&r!=="get"&&r!=="head"&&(C=await $E(g,s))!==0){let X=new Request(l,{method:"POST",body:s,duplex:"half"}),I;if(B.isFormData(s)&&(I=X.headers.get("content-type"))&&g.setContentType(I),X.body){const[K,P]=Em(C,Ls(Rm(y)));s=Om(X.body,Am,K,P)}}B.isString(S)||(S=S?"include":"omit");const L="credentials"in Request.prototype;A=new Request(l,{...O,signal:z,method:r.toUpperCase(),headers:g.normalize().toJSON(),body:s,duplex:"half",credentials:L?S:void 0});let q=await fetch(A,O);const $=af&&(p==="stream"||p==="response");if(af&&(m||$&&D)){const X={};["status","statusText","headers"].forEach(tt=>{X[tt]=q[tt]});const I=B.toFiniteNumber(q.headers.get("content-length")),[K,P]=m&&Em(I,Ls(Rm(m),!0))||[];q=new Response(Om(q.body,Am,K,()=>{P&&P(),D&&D()}),X)}p=p||"text";let J=await qs[B.findKey(qs,p)||"text"](q,n);return!$&&D&&D(),await new Promise((X,I)=>{dy(X,I,{data:J,headers:ve.from(q.headers),status:q.status,statusText:q.statusText,config:n,request:A})})}catch(L){throw D&&D(),L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)?Object.assign(new ot("Network Error",ot.ERR_NETWORK,n,A),{cause:L.cause||L}):ot.from(L,L&&L.code,n,A)}}),lf={http:rE,xhr:BE,fetch:XE};B.forEach(lf,(n,l)=>{if(n){try{Object.defineProperty(n,"name",{value:l})}catch{}Object.defineProperty(n,"adapterName",{value:l})}});const Cm=n=>`- ${n}`,KE=n=>B.isFunction(n)||n===null||n===!1,yy={getAdapter:n=>{n=B.isArray(n)?n:[n];const{length:l}=n;let r,s;const c={};for(let f=0;f<l;f++){r=n[f];let d;if(s=r,!KE(r)&&(s=lf[(d=String(r)).toLowerCase()],s===void 0))throw new ot(`Unknown adapter '${d}'`);if(s)break;c[d||"#"+f]=s}if(!s){const f=Object.entries(c).map(([m,y])=>`adapter ${m} `+(y===!1?"is not supported by the environment":"is not available in the build"));let d=l?f.length>1?`since :
`+f.map(Cm).join(`
`):" "+Cm(f[0]):"as no adapter specified";throw new ot("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return s},adapters:lf};function Uc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Li(null,n)}function jm(n){return Uc(n),n.headers=ve.from(n.headers),n.data=_c.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),yy.getAdapter(n.adapter||Wl.adapter)(n).then(function(s){return Uc(n),s.data=_c.call(n,n.transformResponse,s),s.headers=ve.from(s.headers),s},function(s){return fy(s)||(Uc(n),s&&s.response&&(s.response.data=_c.call(n,n.transformResponse,s.response),s.response.headers=ve.from(s.response.headers))),Promise.reject(s)})}const vy="1.11.0",tu={};["object","boolean","number","function","string","symbol"].forEach((n,l)=>{tu[n]=function(s){return typeof s===n||"a"+(l<1?"n ":" ")+n}});const zm={};tu.transitional=function(l,r,s){function c(f,d){return"[Axios v"+vy+"] Transitional option '"+f+"'"+d+(s?". "+s:"")}return(f,d,m)=>{if(l===!1)throw new ot(c(d," has been removed"+(r?" in "+r:"")),ot.ERR_DEPRECATED);return r&&!zm[d]&&(zm[d]=!0,console.warn(c(d," has been deprecated since v"+r+" and will be removed in the near future"))),l?l(f,d,m):!0}};tu.spelling=function(l){return(r,s)=>(console.warn(`${s} is likely a misspelling of ${l}`),!0)};function VE(n,l,r){if(typeof n!="object")throw new ot("options must be an object",ot.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let c=s.length;for(;c-- >0;){const f=s[c],d=l[f];if(d){const m=n[f],y=m===void 0||d(m,f,n);if(y!==!0)throw new ot("option "+f+" must be "+y,ot.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ot("Unknown option "+f,ot.ERR_BAD_OPTION)}}const As={assertOptions:VE,validators:tu},an=As.validators;let Oa=class{constructor(l){this.defaults=l||{},this.interceptors={request:new Sm,response:new Sm}}async request(l,r){try{return await this._request(l,r)}catch(s){if(s instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=c.stack?c.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(l,r){typeof l=="string"?(r=r||{},r.url=l):r=l||{},r=za(this.defaults,r);const{transitional:s,paramsSerializer:c,headers:f}=r;s!==void 0&&As.assertOptions(s,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean)},!1),c!=null&&(B.isFunction(c)?r.paramsSerializer={serialize:c}:As.assertOptions(c,{encode:an.function,serialize:an.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),As.assertOptions(r,{baseUrl:an.spelling("baseURL"),withXsrfToken:an.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let d=f&&B.merge(f.common,f[r.method]);f&&B.forEach(["delete","get","head","post","put","patch","common"],A=>{delete f[A]}),r.headers=ve.concat(d,f);const m=[];let y=!0;this.interceptors.request.forEach(function(D){typeof D.runWhen=="function"&&D.runWhen(r)===!1||(y=y&&D.synchronous,m.unshift(D.fulfilled,D.rejected))});const p=[];this.interceptors.response.forEach(function(D){p.push(D.fulfilled,D.rejected)});let g,S=0,O;if(!y){const A=[jm.bind(this),void 0];for(A.unshift(...m),A.push(...p),O=A.length,g=Promise.resolve(r);S<O;)g=g.then(A[S++],A[S++]);return g}O=m.length;let z=r;for(S=0;S<O;){const A=m[S++],D=m[S++];try{z=A(z)}catch(C){D.call(this,C);break}}try{g=jm.call(this,z)}catch(A){return Promise.reject(A)}for(S=0,O=p.length;S<O;)g=g.then(p[S++],p[S++]);return g}getUri(l){l=za(this.defaults,l);const r=hy(l.baseURL,l.url,l.allowAbsoluteUrls);return uy(r,l.params,l.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(l){Oa.prototype[l]=function(r,s){return this.request(za(s||{},{method:l,url:r,data:(s||{}).data}))}});B.forEach(["post","put","patch"],function(l){function r(s){return function(f,d,m){return this.request(za(m||{},{method:l,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:d}))}}Oa.prototype[l]=r(),Oa.prototype[l+"Form"]=r(!0)});let ZE=class by{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(f){r=f});const s=this;this.promise.then(c=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](c);s._listeners=null}),this.promise.then=c=>{let f;const d=new Promise(m=>{s.subscribe(m),f=m}).then(c);return d.cancel=function(){s.unsubscribe(f)},d},l(function(f,d,m){s.reason||(s.reason=new Li(f,d,m),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const r=this._listeners.indexOf(l);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const l=new AbortController,r=s=>{l.abort(s)};return this.subscribe(r),l.signal.unsubscribe=()=>this.unsubscribe(r),l.signal}static source(){let l;return{token:new by(function(c){l=c}),cancel:l}}};function FE(n){return function(r){return n.apply(null,r)}}function JE(n){return B.isObject(n)&&n.isAxiosError===!0}const rf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rf).forEach(([n,l])=>{rf[l]=n});function xy(n){const l=new Oa(n),r=Jg(Oa.prototype.request,l);return B.extend(r,Oa.prototype,l,{allOwnKeys:!0}),B.extend(r,l,null,{allOwnKeys:!0}),r.create=function(c){return xy(za(n,c))},r}const jt=xy(Wl);jt.Axios=Oa;jt.CanceledError=Li;jt.CancelToken=ZE;jt.isCancel=fy;jt.VERSION=vy;jt.toFormData=Ws;jt.AxiosError=ot;jt.Cancel=jt.CanceledError;jt.all=function(l){return Promise.all(l)};jt.spread=FE;jt.isAxiosError=JE;jt.mergeConfig=za;jt.AxiosHeaders=ve;jt.formToJSON=n=>cy(B.isHTMLForm(n)?new FormData(n):n);jt.getAdapter=yy.getAdapter;jt.HttpStatusCode=rf;jt.default=jt;const{Axios:f4,AxiosError:d4,CanceledError:h4,isCancel:p4,CancelToken:m4,VERSION:g4,all:y4,Cancel:v4,isAxiosError:b4,spread:x4,toFormData:S4,AxiosHeaders:w4,HttpStatusCode:E4,formToJSON:R4,getAdapter:T4,mergeConfig:O4}=jt,PE=jt.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});async function WE(n,l){try{return(await PE.post("/login",{usernameOrEmail:n,password:l})).data}catch(r){throw jt.isAxiosError(r)?new Error(r.response?.data?.message??"로그인 실패"):new Error("알수없는 에러")}}jt.defaults.headers.common.Accept="application/json";const IE=async(n,l,r)=>{try{const{data:s}=await jt.post("/api/signup",{username:n,email:l,password:r},{headers:{"Content-Type":"application/json"}});return s}catch(s){throw jt.isAxiosError(s)?console.error("회원가입 에러:",s.response??s.message):console.error("회원가입 에러:",s),s}},Sy=async n=>{try{const{data:l}=await jt.get("/api/me",{headers:{Authorization:`Bearer ${n}`}});return l}catch(l){throw jt.isAxiosError(l)?console.error("/me 조회 에러:",l.response??l.message):console.error("/me 조회 에러:",l),l}},ys="user";function tR(){const[n,l]=w.useState(null),[r,s]=w.useState(null),[c,f]=w.useState(!1),[d,m]=w.useState(null),y=w.useCallback(async S=>{try{const O=await Sy(S);s(O)}catch(O){console.error("사용자 정보 가져오기 실패:",O),s(null)}},[]);w.useEffect(()=>{const S=localStorage.getItem(ys);if(S)try{const O=JSON.parse(S);l(O),O.accessToken&&y(O.accessToken)}catch{localStorage.removeItem(ys)}},[y]);const p=w.useCallback(async(S,O)=>{f(!0),m(null);try{const z=await WE(S,O);l(z),localStorage.setItem(ys,JSON.stringify(z)),await y(z.accessToken)}catch(z){throw new Error(z.message)}finally{f(!1)}},[y]),g=w.useCallback(()=>{l(null),s(null),localStorage.removeItem(ys)},[]);return{user:n,me:r,token:n?.accessToken||null,logIn:p,logOut:g,loading:c,error:d}}const wy=w.createContext(void 0),Ey=({children:n})=>{const l=tR();return v.jsx(wy.Provider,{value:l,children:n})},Da=()=>{const n=w.useContext(wy);if(!n)throw new Error("useAuth는 <AuthProvider> 안에서 사용되어야 합니다.");return n},eR=async n=>{const l=[];for(const r of n.results)if(r.saleId)try{const s=await zf(r.saleId);l.push({product:s,reason:r.reason||null})}catch(s){console.warn(`Sale ID ${r.saleId}를 가져올 수 없습니다:`,s)}return l};function nR(n,l){return Zs({queryKey:["infiniteRecommendations",n],queryFn:async()=>{if(!n||!l)throw new Error("사용자 ID 또는 토큰이 없습니다");const r=await Vg(n,l,5),s=await eR(r);return{recommendations:r,productsWithReasons:s}},enabled:!!n&&!!l,staleTime:300*1e3,gcTime:600*1e3})}async function aR(n,l){try{const r=await fetch("/api/reviews",{method:"POST",headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){const c=await r.text();throw new Error(`서버 에러 (${r.status}): ${c}`)}const s=r.headers.get("content-type");if(s&&s.includes("application/json")){const c=await r.text();if(c.trim())return JSON.parse(c)}return}catch(r){throw r}}async function iR(n){return await Ni(`/reviews?salesId=${encodeURIComponent(n)}`)}async function lR(n){return await Ni(`/reviews?userId=${encodeURIComponent(n)}`)}const rR=async n=>{const l=await lR(n),r=[];for(const s of l)if(s.salesId)try{const c=await zf(s.salesId);r.push({review:s,product:c})}catch(c){console.warn(`Sale ID ${s.salesId}를 가져올 수 없습니다:`,c)}return r};function Ry(n,l){return Zs({queryKey:["userReviews",n],queryFn:()=>rR(n),staleTime:120*1e3,gcTime:300*1e3,enabled:n>0&&!!l})}const sR=({userId:n,token:l})=>{const{data:r,error:s,isLoading:c}=nR(n,l),[f,d]=w.useState([]),[m,y]=w.useState(!1),p=w.useRef(null);w.useEffect(()=>{r?.productsWithReasons&&f.length===0&&d(r.productsWithReasons)},[r?.productsWithReasons,f.length]);const g=w.useMemo(()=>f.map(z=>({product:z.product,recommendReason:z.reason})),[f]),S=w.useCallback(async()=>{if(!m){y(!0);try{const z=f.length+5,D=(await Vg(n,l,z)).results.slice(f.length),L=(await Promise.all(D.map(async q=>{if(q.saleId)try{return{product:await zf(q.saleId),reason:q.reason||null}}catch($){return console.warn(`Sale ID ${q.saleId}를 가져올 수 없습니다:`,$),null}return null}))).filter(Boolean);d(q=>[...q,...L])}catch(z){console.error("추가 상품 로딩 실패:",z)}finally{y(!1)}}},[f.length,m,n,l]),O=z=>{if(p.current){const A=p.current.clientWidth,D=p.current.scrollLeft,C=p.current.scrollWidth-p.current.clientWidth;if(z==="right"&&D>=C-10){S();return}p.current.scrollBy({left:z==="right"?A:-A,behavior:"smooth"})}};if(c)return v.jsx("div",{style:{width:"100%"},children:v.jsx(Oi,{children:v.jsx(ja,{type:"enhanced",message:"추천 상품을 불러오는 중..."})})});if(s)throw s instanceof Error?s:new Error("추천 데이터를 불러오는 중 오류가 발생했습니다.");return!r?.productsWithReasons||r.productsWithReasons.length===0?v.jsx("div",{style:{width:"100%"},children:v.jsx(Oi,{children:"추천 결과가 없습니다"})}):v.jsx(Dg,{children:v.jsxs(Ag,{children:[v.jsx(Us,{left:!0,onClick:()=>O("left"),children:"◀"}),v.jsx(jg,{children:v.jsxs(Cg,{ref:p,children:[g.map(({product:z,recommendReason:A})=>v.jsx(_g,{product:z,recommendReason:A},z.id)),m&&v.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"200px",height:"300px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"12px",margin:"0 8px"},children:v.jsx(ja,{type:"default",message:"더 많은 추천을 불러오는 중..."})})]})}),v.jsx(Us,{onClick:()=>O("right"),disabled:m,children:"▶"})]})})},uR=({userId:n,token:l})=>{const{data:r,isLoading:s}=Ry(n,l),c=Qe();return s?v.jsx("div",{style:{width:"100%"},children:v.jsx(Oi,{children:v.jsx(ja,{type:"enhanced",message:"리뷰 데이터를 불러오는 중..."})})}):(r?.length??0)<5?v.jsx("div",{style:{width:"100%"},children:v.jsxs(Oi,{children:["추천을 위해 상품 리뷰 또는 온보딩을 진행해 주세요",v.jsx(zg,{onClick:()=>c("/static/Onboarding"),children:"Onboarding"}),v.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"(온보딩을 완료했는데도 이 메세지가 나온다면 새로고침을 눌러주세요)"})]})}):v.jsx(sR,{userId:n,token:l})},oR=()=>{const{token:n,me:l}=Da(),r=Qe(),s=Ye();return!n||!l?v.jsx("div",{style:{width:"100%"},children:v.jsxs(Oi,{children:["로그인하고 맞춤 추천을 받아보세요!",v.jsx(zg,{onClick:()=>r("/static/Login",{state:{from:s.pathname}}),children:"login"})]})}):v.jsx(uR,{userId:l.userId,token:n})},cR=()=>v.jsxs(v.Fragment,{children:[v.jsx(QS,{}),v.jsx(dw,{}),v.jsx(Ta,{h:48}),v.jsxs(Mi,{children:[v.jsx("div",{style:{width:"100%"},children:v.jsx(dm,{children:"추천 상품"})}),v.jsx(Ic,{fallback:v.jsx("div",{children:"상품을 불러오는중 오류가 발생했습니다"}),children:v.jsx(oR,{})}),v.jsx(hm,{}),v.jsx("div",{style:{width:"100%"},children:v.jsx(dm,{children:"인기순"})}),v.jsx(Ic,{fallback:v.jsx("div",{children:"상품을 불러오는중 오류가 발생했습니다"}),children:v.jsx(w.Suspense,{fallback:v.jsx(Oi,{children:v.jsx(ja,{type:"enhanced",message:"인기 상품을 불러오고 있어요..."})}),children:v.jsx(V2,{})})}),v.jsx(hm,{})]}),v.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]}),fR=US`

  @font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-1Thin.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-2ExtraLight.woff2') format('woff2');
      font-weight: 200;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-3Light.woff2') format('woff2');
      font-weight: 300;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2');
      font-weight: 400;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2');
      font-weight: 500;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2') format('woff2');
      font-weight: 600;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2');
      font-weight: 700;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
      font-weight: 800;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-9Black.woff2') format('woff2');
      font-weight: 900;
      font-display: swap;
  }

  :root {
    font-family: 'Paperozi', sans-serif;
    background-color: ${nt.secondary};
  }


  body {
    margin: 0;

  }

  *{
    box-sizing: border-box;
    color:${nt.accent};
  }

  h2{
    color:${nt.primary}
  }
`,dR=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #cfcfcfff;
  position: relative;
`;T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: #cfcfcfff;
  position: relative;
  top: 0;
`;T.div`
  background: url("/chair-blur.jpg") no-repeat center;
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;const hR=T.div`
  position: relative;
  z-index: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 320px;
`,pR=T.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`,Dm=T.input`
  height: 45px;
  border: 2px solid rgba(0, 60, 120, 0); /* 기본은 투명 */
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid rgba(0, 60, 120, 0.3); /* 부드럽게 나타남 */
  }

  &:focus {
    outline: none; /* 포커스 기본 테두리 제거 */
    border-color: ${nt.mainDeepBlue}; /* 클릭/포커스 시 강조 */
    transform: scale(0.98);
  }
`,mR=T.button`
  height: 48px;
  background-color: ${nt.mainLightBlue};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0a77e5ff;
  }
`,gR=T.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  color: #dcdcdc;
`;T.span`
  color: #aaa;
`;const yR=T.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;T.pre`
  background: #f4f4f4;
  border: 1px dashed #bbb;
  padding: 12px;
  border-radius: 6px;
  margin-top: 12px;
  font-size: 12px;
  white-space: pre-wrap;
`;const vR=T.form`
  display: contents;
`;T.p`
  color: #ef4444;
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  padding: 8px;
  background: #fef2f2;
  border-radius: 4px;
  border: 1px solid #fecaca;
`;const bR=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${nt.secondary};
  position: relative;
`,Ty=T.h1`
  position: absolute;
  top: 0px;
  left: 30px;
  padding: 20px;
  font-weight: 900;
  text-align: left;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${nt.mainLightBlue};
  font-size: 32px;
`,xR=T.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`,SR=T.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Nc=T.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #444;
`,Bc=T.input`
  margin-top: 6px;
  min-width: 350px;
  height: 45px;
  padding: 0 12px;
  font-size: 14px;
  background-color: #e7e7e7ff;
  border: 2px solid rgba(0, 60, 120, 0); /* 기본은 투명 */
  border-radius: 4px;
  margin-bottom: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(0, 60, 120, 0.3);
  }

  &:focus {
    outline: none;
    border-color: ${nt.mainDeepBlue}; /* 포커스 시 강조 */
  }

  &:active {
    transform: scale(0.98); /* 클릭 감각 */
  }
`,wR=T.button`
  margin-top: 25px;
  background: ${nt.mainBlue};
  color: white;
  font-size: 14px;
  height: 45px;
  border: none;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #2675d0ff;
  }
`;T.div`
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({$type:n})=>n==="success"?"green":n==="error"?"red":"black"};
`;const ER=()=>{const[n,l]=w.useState(""),[r,s]=w.useState(""),c=Qe(),f=Ye(),d=Da(),m=Zl();w.useEffect(()=>{if(d.token&&d.me){const p=f.state?.from||"/static/";c(p,{replace:!0})}},[d.token,d.me,c,f.state]);const y=async p=>{p.preventDefault();try{await d.logIn(n,r),m.showSuccess("로그인에 성공했습니다!"),setTimeout(()=>{const g=f.state?.from||"/static/";c(g,{replace:!0})},1e3)}catch(g){m.showError(`로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.${g}`)}};return v.jsx(Vs,{children:v.jsxs(dR,{children:[v.jsx(Ty,{onClick:()=>c("/static/"),children:"L.B"}),v.jsxs(hR,{children:[v.jsx(pR,{children:"LOGIN"}),v.jsxs(vR,{onSubmit:y,children:[v.jsx(Dm,{type:"text",placeholder:"아이디 또는 이메일",value:n,onChange:p=>l(p.target.value),required:!0}),v.jsx(Dm,{type:"password",placeholder:"비밀번호",value:r,onChange:p=>s(p.target.value),required:!0}),v.jsx(mR,{type:"submit",disabled:d.loading,children:d.loading?"로그인 중...":"로그인"})]}),v.jsx(gR,{children:v.jsx(yR,{onClick:()=>c("/static/Signup"),children:"회원가입"})})]})]})})};function RR(){const{logIn:n,token:l,me:r}=Da(),[s,c]=w.useState("admin"),[f,d]=w.useState("admin@naver.com"),[m,y]=w.useState("password"),[p,g]=w.useState(""),[S,O]=w.useState(""),z=async()=>{g("⏳ 로그인 중..."),O("");try{await n(s,m),g("✅ 로그인 성공"),O(JSON.stringify({token:l,me:r},null,2))}catch(C){const L=C;g("❌ 로그인 실패"),O(L?.message||String(C))}},A=async()=>{g("⏳ 회원가입 중..."),O("");try{const C=await IE(s,f,m);g("✅ 회원가입 성공"),O(JSON.stringify(C,null,2))}catch(C){const L=C;g("❌ 회원가입 실패"),O(L?.response?.data?JSON.stringify(L.response.data,null,2):String(C))}},D=async()=>{g("⏳ /me 조회 중..."),O("");try{if(!l){g("❗ 토큰 없음. 로그인 먼저");return}const C=await Sy(l);g("✅ /me 성공"),O(JSON.stringify(C,null,2))}catch(C){const L=C;g("❌ /me 실패"),O(L?.response?.data?JSON.stringify(L.response.data,null,2):String(C))}};return v.jsxs("div",{style:{maxWidth:420,margin:"40px auto",padding:20,border:"1px solid #e5e7eb",borderRadius:10,background:"#fff"},children:[v.jsx("h1",{children:"로그인"}),v.jsx("input",{value:s,onChange:C=>c(C.target.value),placeholder:"아이디",style:{width:"100%",padding:10,marginBottom:10}}),v.jsx("input",{value:f,onChange:C=>d(C.target.value),placeholder:"이메일",style:{width:"100%",padding:10,marginBottom:10}}),v.jsx("input",{value:m,onChange:C=>y(C.target.value),placeholder:"비밀번호",type:"password",style:{width:"100%",padding:10,marginBottom:10}}),v.jsxs("div",{style:{display:"flex",gap:8},children:[v.jsx("button",{onClick:z,style:{flex:1,padding:10,background:"#6366f1",color:"#fff"},children:"로그인"}),v.jsx("button",{onClick:A,style:{flex:1,padding:10,background:"#0ea5e9",color:"#fff"},children:"회원가입"}),v.jsx("button",{onClick:D,style:{flex:1,padding:10,background:"#0ea5e9",color:"#fff"},children:"/me 조회"})]}),v.jsx("p",{children:p}),v.jsx("pre",{style:{background:"#0b1020",color:"#d1d5db",padding:10,borderRadius:6,overflow:"auto"},children:S})]})}const TR=T.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 0;
`,OR=T.div`
  margin: 5px;
`,AR=T.div`
  display: flex;
  align-items: flex-start;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 16px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #f8fafc;
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`,CR=T.div`
  flex: 0 0 120px;
  height: 160px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 0 0 100px;
    height: 140px;
  }

`,jR=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`,zR=T.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`,DR=T.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Mm=T.div`
  font-size: 14px;
  color: #555;
`,MR=T.div`
  font-size: 12px;
  font-weight: 700;
  color: #fae20a;
`,_R=T.span`
  font-size: 20px;
  font-weight: bold;
  color: ${nt.mainDeepBlue};
`,_m=T.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: calc(100% - 40px);
  border-left: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
`,UR=T.span`
  font-size: 13px;
  color: #555;
`;T.span`
  font-size: 11px;
  color: #fff;
  background: #ef4444;
  padding: 2px 6px;
  border-radius: 4px;
`;T.span`
  img {
    height: 16px;
  }
`;const NR={U:"-",B:"블루레이 (FHD, 1080p)",3:"3D 블루레이",4:"4K 블루레이 (UHD)"};function Oy(n){return n?NR[n]??n:"-"}function BR({product:n}){const l=Qe(),r=()=>{l(`/static/DetailPage/${n.movieId}`,{state:{product:n}})};return v.jsx(OR,{children:v.jsxs(AR,{onClick:r,children:[v.jsx(CR,{children:v.jsx(jR,{src:n.imageLink??void 0})}),v.jsxs(zR,{children:[v.jsx(DR,{children:n.blurayTitle}),v.jsxs(_R,{children:[n.price,"원"]}),v.jsx(Ta,{h:20}),v.jsxs(Mm,{children:[" 해상도 : ",Oy(n.quality)]}),v.jsxs(Mm,{children:[" 지역 코드 : ",n.regionCode?n.regionCode:"-"]}),n.isLimitedEdition&&v.jsx(MR,{children:"한정판!"})]}),v.jsx(_m,{}),v.jsx(_m,{children:v.jsx(UR,{children:n.siteName})})]})})}function LR(){const{keyWord:n}=Lb(),l=(n??"").trim(),{data:r,isLoading:s}=Fg(l),c=r??[];return l?s?v.jsx(ja,{}):c.length===0?v.jsx("div",{children:"검색 결과가 없습니다"}):v.jsx(TR,{children:c.map(f=>v.jsx(BR,{product:f},f.id))}):v.jsx("div",{children:"검색어가 없습니다"})}function qR(){return v.jsxs(v.Fragment,{children:[v.jsxs(Mi,{children:[v.jsx(Ta,{h:70}),v.jsx(Ic,{fallback:v.jsx("div",{children:" 오류 발생"}),children:v.jsx(w.Suspense,{fallback:v.jsx(ja,{}),children:v.jsx(LR,{})})})]}),v.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})}const HR=T.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px;
  background-color: white;
  border-radius: 20px;
  margin: 0 auto;
`,kR=T.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`,YR=T.div`
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,QR=T.div`
  width: 400px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`,GR=T.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`,Um=T.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a202c;
  line-height: 1.3;
`,$R=T.div`
  display: flex;
  align-items: baseline;

`,XR=T.span`
  font-size: 24px;
  font-weight: 700;
  color: ${nt.mainBlue};
`,KR=T.span`
  font-size: 14px;
  color: #64748b;
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
`,Nm=T.section`
  padding: 40px 0;
  border-top: 1px solid #e2e8f0;

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #1a202c;
    letter-spacing: 0.2px;
    padding-left: 20px;
  }
`,VR=T.div`
  font-size: 14px;
  color: #4a5568;
  line-height: 1.6;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;

`,ZR=T.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;

  th {
    width: 140px;
    text-align:center;
    padding: 16px 20px;
    font-weight: 600;
    font-size: 14px;
    color: #374151;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
  }

  td {
    padding: 16px 20px;
    font-size: 14px;
    color: #4a5568;
    border-bottom: 1px solid #f1f5f9;
    
    &:last-child {
      border-bottom: none;
    }
  }
`,FR=T.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`,JR=T.textarea`
  resize: none;
  min-height: 100px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  line-height: 1.6;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${nt.mainBlue};
  }

  &::placeholder {
    color: #94a3b8;
  }
`,PR=T.button`
  background: white;
  color: ${nt.mainBlue};
  border: none;
  padding: 10px;
  border-radius: 39% 20px 30% 36%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover {
    background: ${nt.mainBlue};
    color: white;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`,WR=T.div`
  margin-bottom: 12px;
  padding: 8px;
  border-bottom: 1px solid #eee;
  border-radius: 4px;
`,IR=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,tT=T.span`
  font-weight: bold;
`,eT=T.div`
  margin-bottom: 4px;
`,nT=T.div`
  font-size: 12px;
  color: #999;
`,aT=T.div`
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #666;
`,iT=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,lT=T.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;T.span`
  font-size: 20px;
  color: ${n=>n.filled?"#fbbf24":"#e2e8f0"};
  cursor: pointer;
  transition: color 0.2s ease;
`;const rT=T.span`
  font-size: 12px;
  color: #64748b;
`;function sT(n){return jf({queryKey:["getMovie",n],queryFn:()=>$2(n)})}function uT(n){return Zs({queryKey:["reviews","salesId",n],queryFn:()=>iR(n),staleTime:120*1e3,gcTime:300*1e3})}function Ay(){const n=Cf();return Q2({mutationFn:({review:l,token:r})=>aR(l,r),onSuccess:(l,r)=>{n.invalidateQueries({queryKey:["reviews","salesId",r.review.salesId]})}})}const Cy=({rating:n,size:l="medium",showScore:r=!0})=>{const c={small:"14px",medium:"16px",large:"18px"}[l],f=d=>n>=d?v.jsx("span",{style:{color:"#fbbf24",fontSize:c},children:"★"},d):n>=d-.5?v.jsxs("span",{style:{color:"#e2e8f0",fontSize:c,position:"relative",display:"inline-block"},children:["★",v.jsx("span",{style:{position:"absolute",left:"0",top:"0",width:"50%",overflow:"hidden",color:"#fbbf24"},children:"★"})]},d):v.jsx("span",{style:{color:"#e2e8f0",fontSize:c},children:"★"},d);return v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[v.jsx("div",{style:{display:"flex",alignItems:"center",gap:"2px"},children:[1,2,3,4,5].map(f)}),r&&v.jsxs("span",{style:{fontSize:"11px",color:"#64748b",fontWeight:"600",background:"#f1f5f9",padding:"2px 6px",borderRadius:"6px"},children:[n.toFixed(1),"점"]})]})};function oT(){const l=Ye().state?.product,{token:r}=Da(),s=!!l,{data:c}=sT(l?.movieId??0),{data:f,isLoading:d}=uT(l?.id??0),m=Ay(),[y,p]=w.useState(0),[g,S]=w.useState(""),O=async z=>{if(z.preventDefault(),!r){alert("로그인이 필요합니다.");return}if(y===0){alert("별점을 선택해주세요.");return}try{if(!l)return;await m.mutateAsync({review:{salesId:l.id,rating:y,reviewComment:g||null},token:r}),alert("리뷰가 등록되었습니다!"),p(0),S("")}catch(A){let D="리뷰 등록에 실패했습니다.";A instanceof Error&&(D+=`
에러: ${A.message}`),alert(D)}};return v.jsxs(v.Fragment,{children:[v.jsxs(Mi,{children:[v.jsx(Ta,{h:70}),v.jsxs(HR,{children:[v.jsxs(YR,{children:[v.jsx(QR,{children:s&&v.jsx(kR,{src:l.imageLink??""})}),v.jsxs(GR,{children:[v.jsx(Um,{children:s?l.blurayTitle:""}),v.jsx(Um,{children:c?.title??""}),v.jsx($R,{children:v.jsxs(XR,{children:[s?l.price:"","원"]})}),v.jsx(Ta,{h:4}),s&&v.jsx(KR,{onClick:()=>window.open(String(l.siteUrl),"_blank"),children:l.siteName})]})]}),v.jsxs(Nm,{children:[v.jsx("h2",{children:"작품 상세정보"}),v.jsx(ZR,{children:v.jsxs("tbody",{children:[v.jsxs("tr",{children:[v.jsx("th",{children:"영화 출시일"}),v.jsx("td",{children:c?.releaseDate||"-"})]}),v.jsxs("tr",{children:[v.jsx("th",{children:"해상도"}),v.jsx("td",{children:s?Oy(l.quality):"-"})]}),v.jsxs("tr",{children:[v.jsx("th",{children:"지역코드"}),v.jsx("td",{children:s?l.regionCode:"-"})]})]})})]}),v.jsxs(Nm,{children:[v.jsx("h2",{children:"리뷰"}),r?v.jsxs(FR,{onSubmit:O,children:[v.jsxs(iT,{children:[v.jsx("label",{style:{fontSize:"14px",fontWeight:"600"},children:"별점:"}),v.jsx(lT,{children:[1,2,3,4,5].map(z=>v.jsxs("span",{onClick:()=>{y===z?p(z-.5):(z-.5,p(z))},style:{fontSize:"20px",cursor:"pointer",transition:"all 0.2s ease",position:"relative",display:"inline-block"},children:[v.jsx("span",{style:{color:"#e2e8f0"},children:"★"}),y>=z?v.jsx("span",{style:{position:"absolute",left:"0",top:"0",color:"#fbbf24"},children:"★"}):y>=z-.5?v.jsx("span",{style:{position:"absolute",left:"0",top:"0",width:"50%",overflow:"hidden",color:"#fbbf24"},children:"★"}):null]},z))}),v.jsx(rT,{children:y>0?`${y}점`:"별점을 선택해주세요"})]}),v.jsx(JR,{placeholder:"리뷰를 작성해주세요...",value:g,onChange:z=>S(z.target.value)}),v.jsx(PR,{type:"submit",disabled:m.isPending,children:m.isPending?"등록 중...":"리뷰 등록"})]}):v.jsx(aT,{children:"리뷰를 작성하려면 로그인이 필요합니다."}),v.jsx(Ta,{h:20}),v.jsx(VR,{children:d?v.jsx("div",{children:"리뷰를 불러오는 중..."}):f&&f.length>0?v.jsx("div",{children:f.map((z,A)=>v.jsxs(WR,{children:[v.jsxs(IR,{children:[v.jsx(tT,{children:z.username||`사용자${z.userId}`}),v.jsx(Cy,{rating:z.rating||0,size:"small",showScore:!0})]}),z.reviewComment&&v.jsx(eT,{children:z.reviewComment}),v.jsx(nT,{children:z.createdAt?new Date(z.createdAt).toLocaleString("ko-KR"):""})]},A))}):"아직 등록된 리뷰가 없습니다."})]})]})]}),v.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})}const cT=({children:n})=>{const{token:l}=Da();return l?n:v.jsx(Pb,{to:"/static/Login",replace:!0})};T.header`
  padding: 20px 0;
  background: #fafafa;
`;T.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;T.a`
  color: ${nt.mainDeepBlue};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${nt.mainBlue};
    text-decoration: underline;
  }
`;const Bm=T.section`
  margin: 32px 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`,fT=T.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${nt.mainDeepBlue};
  margin: 0 0 16px 0;
  line-height: 1.5;
  letter-spacing: 0.2px;
  padding-left: 20px;
`,dT=T.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background: #fafafa;
    border-color: ${nt.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`,hT=T.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${nt.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  border: 2px solid ${nt.mainBlue}20;
  box-shadow: 0 2px 4px rgba(28, 118, 207, 0.15);

  &:hover {
    background: ${nt.mainDeepBlue};
  }
`,pT=T.div`
  flex: 1;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${nt.mainDeepBlue};
    margin: 0 0 8px 0;
    line-height: 1.3;
  }
  
  .email {
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
  }
`,mT=T.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`,gT=T.button`
  padding: 12px 20px;
  border: 2px solid ${nt.mainBlue};
  background: ${nt.mainBlue};
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: ${nt.mainBlue};
  }
`;T.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px;

  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;T.div`
  background: #fff;
  border-radius: 12px;
  height: 360px;
  display: flex;
  flex-direction: column;
  color: #666;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    border-color: ${nt.mainBlue}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    
    .card-image img {
      transform: scale(1.05);
    }
  }

  .card-image {
    flex-shrink: 0;
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-icon {
    font-size: 32px;
    margin-bottom: 8px;
    color: ${nt.mainBlue};
  }

  .card-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;const Lm=T.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  color: #666;
  border: 1px solid #f1f5f9;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #fafafa;
    border-color: ${nt.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  h3 {
    color: ${nt.mainDeepBlue};
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 12px 0;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }
`,yT=T.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {

    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
`,vT=T.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /* 작은 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    height: 2px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${nt.mainBlue};
    border-radius: 2px;
    transition: background 0.2s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${nt.mainDeepBlue};
  }

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,qm=T.button.withConfig({shouldForwardProp:n=>!["left"].includes(n)})`
  position: absolute;
  top: 0;
  bottom: 0;
  ${n=>n.left?"left: 0;":"right: 0;"}
  width: 50px;
  background: linear-gradient(90deg, ${n=>n.left?"rgba(28, 118, 207, 0.1)":"transparent"}, ${n=>n.left?"transparent":"rgba(28, 118, 207, 0.1)"});
  border: none;
  cursor: pointer;
  font-size: 20px;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  color: ${nt.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  &:hover {
    background: linear-gradient(90deg, ${n=>n.left?"rgba(28, 118, 207, 0.2)":"transparent"}, ${n=>n.left?"transparent":"rgba(28, 118, 207, 0.2)"});
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(28, 118, 207, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`,bT=T.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 100%;
`,xT=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  transition: transform 0.3s ease;
`,ST=T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
  border-radius: 12px 12px 0 0;
`,wT=T.div`
  padding: 16px;
  flex: 1;
`,ET=T.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1a202c;
  line-height: 1.3;
`,RT=T.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
`,TT=T.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
`,OT=T.div`
  font-size: 13px;
  color: #64748b;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,AT=T.div`
  font-size: 11px;
  color: #94a3b8;
  text-align: right;
  font-weight: 500;
  margin-top: auto;
`,CT=T.div`
  background: #fff;
  border-radius: 12px;
  height: 360px;
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  color: #666;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${nt.mainBlue}40;
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    
    &::before {
      left: 100%;
    }
    
    .card-image img {
      transform: scale(1.05);
    }
  }

  .card-image {
    flex-shrink: 0;
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-icon {
    font-size: 32px;
    margin-bottom: 8px;
    color: ${nt.mainBlue};
  }

  .card-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 320px;
    
    .card-image {
      height: 160px;
    }
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 300px;
    
    .card-image {
      height: 140px;
    }
  }
`;T.div`
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;T.h2`
  color: #64748b;
  margin-bottom: 16px;
`;T.p`
  color: #94a3b8;
  margin-bottom: 24px;
`;const jT=T.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
`,zT=T.div`
  text-align: center;
  padding: 20px;
  color: #64748b;
`,DT=()=>{const{logOut:n,me:l,token:r}=Da(),s=Qe(),c=w.useRef(null),{data:f,isLoading:d}=Ry(l?.userId||0,r||""),m=()=>{n(),s("/static/login")},y=p=>{if(c.current){const g=c.current.clientWidth;c.current.scrollBy({left:p==="right"?g:-g,behavior:"smooth"})}};return v.jsxs(v.Fragment,{children:[v.jsxs(Mi,{children:[v.jsx(Ta,{h:48}),v.jsxs(GS,{children:[v.jsx(Bm,{children:v.jsxs(dT,{children:[v.jsx(hT,{children:(l?.username||l?.usernameOrEmail||"사용자").charAt(0).toUpperCase()}),v.jsxs(pT,{children:[v.jsx("h1",{children:l?.username||l?.usernameOrEmail||"사용자"}),v.jsx("div",{className:"email",children:l?.email||""}),v.jsx(jT,{children:l?.role||"일반 사용자"}),v.jsx(mT,{children:v.jsx(gT,{onClick:m,children:"로그아웃"})})]})]})}),v.jsxs(Bm,{children:[v.jsx(fT,{children:"내가 리뷰한 상품"}),d?v.jsx(Lm,{children:v.jsx(zT,{children:"리뷰를 불러오는 중..."})}):f&&f.length>0?v.jsxs(yT,{children:[v.jsx(qm,{left:!0,onClick:()=>y("left"),children:"◀"}),v.jsx(vT,{ref:c,children:f.map((p,g)=>v.jsxs(CT,{onClick:()=>s(`/static/DetailPage/${p.product.id}`,{state:{product:p.product}}),children:[v.jsxs(bT,{children:[v.jsx(xT,{src:p.product.imageLink||"",alt:p.product.blurayTitle||""}),v.jsx(ST,{})]}),v.jsxs(wT,{children:[v.jsx(ET,{children:p.product.blurayTitle}),v.jsxs(RT,{children:[v.jsx(TT,{children:"내 평점:"}),v.jsx(Cy,{rating:p.review.rating||0,size:"medium",showScore:!0})]}),p.review.reviewComment&&v.jsxs(OT,{children:['"',p.review.reviewComment,'"']}),v.jsx(AT,{children:p.review.createdAt?new Date(p.review.createdAt).toLocaleDateString("ko-KR"):""})]})]},g))}),v.jsx(qm,{onClick:()=>y("right"),children:"▶"})]}):v.jsxs(Lm,{children:[v.jsx("h3",{children:"아직 리뷰한 상품이 없습니다"}),v.jsx("p",{children:"상품에 리뷰를 남기면 여기에 표시됩니다."})]})]})]})]}),v.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})},MT=()=>{const[n,l]=w.useState(""),[r,s]=w.useState(""),[c,f]=w.useState(""),d=Qe(),m=Zl(),y=async p=>{p.preventDefault();try{const g=await jt.post("/api/signup",{username:n,email:r,password:c});m.showSuccess(g.data||"회원가입이 완료되었습니다!"),setTimeout(()=>{d("/static/Login")},2e3)}catch(g){const S=g;S?.response?.data?m.showError(`에러: ${String(S.response.data)}`):m.showError("회원가입 중 오류가 발생했습니다.")}};return v.jsxs(Vs,{children:[v.jsxs(bR,{children:[v.jsx(Ty,{onClick:()=>d("/static/"),children:"L.B"}),v.jsx(xR,{children:"회원가입"}),v.jsxs(SR,{onSubmit:y,children:[v.jsxs(Nc,{children:["사용자명",v.jsx(Bc,{type:"text",value:n,onChange:p=>l(p.target.value),required:!0})]}),v.jsxs(Nc,{children:["이메일",v.jsx(Bc,{type:"email",value:r,onChange:p=>s(p.target.value),required:!0})]}),v.jsxs(Nc,{children:["비밀번호",v.jsx(Bc,{type:"password",value:c,onChange:p=>f(p.target.value),required:!0})]}),v.jsx(wR,{type:"submit",children:"회원가입"})]})]}),v.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})},_T=T.div`
  padding: 2rem;
  text-align: center;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,UT=T.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${nt.mainBlue};
  font-weight: 600;
`,NT=T.div`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`,BT=T.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  overflow: hidden;
  position: relative;
  background-color: white;
  border-radius: 20px;
`,LT=T.div`
  display: flex;
  gap: 24px;
  width: 200vw; /* 화면 너비의 2배로 설정 */
  animation: ${n=>n.direction==="right"?"flowRight":"flowLeft"} 60s linear infinite;
  margin-bottom: 20px;
  will-change: transform; /* GPU 가속을 위한 최적화 */
  transition: animation-play-state 0.3s ease;
  
  /* 호버 시 애니메이션 일시정지 */
  &:hover {
    animation-play-state: paused;
  }
  
  @keyframes flowRight {
    0% {
      transform: translate3d(-100vw, 0, 0);
    }
    100% {
      transform: translate3d(0vw, 0, 0);
    }
  }
  
  @keyframes flowLeft {
    0% {
      transform: translate3d(0vw, 0, 0);
    }
    100% {
      transform: translate3d(-100vw, 0, 0);
    }
  }
`,qT=T.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  background-color: white;
  border: 3px solid ${nt.mainBlue};
  color: ${nt.mainBlue};
  border-radius: 25px 38% 24px 22%;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.25s ease;
  min-width: 200px;
  
  &:hover{
    background-color: ${nt.mainBlue};
    color: white;
    border:none;
  }
  
  
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    color: white;
    border:none;
  }
`,HT=T.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
`,kT=T.div`
  padding: 3rem 2rem;
  background-color: ${nt.mainBlue};
  width: 100%;
  position: relative;
`,YT=T.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.1;
`,QT=T.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem 0;
  text-align: center;
`,GT=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 600px;
  margin: 0 auto 2rem;
`,$T=T.input`
  flex: 1;
  height: 48px;
  padding: 0 20px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 1rem;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
  
  &::placeholder {
    color: #9ca3af;
  }
`,XT=T.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;T.img`
  width: 24px;
  height: 24px;
`;const KT=T.div`
  padding: 2rem;
  background: white;
  width: 100%;
  animation: searchSectionFadeIn 0.6s ease-out;
  
  @keyframes searchSectionFadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,VT=T.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1.5rem;
  text-align: center;
`,ZT=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
  justify-items: center;
  max-width: 900px;
  margin: 0 auto;
  
  /* 검색 결과 등장 애니메이션 */
  animation: searchResultsFadeIn 0.8s ease-out;
  
  @keyframes searchResultsFadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Hm=T.div`
  text-align: center;
  color: #6b7280;
  font-size: 1.2rem;
  padding: 3rem 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
  font-weight: 500;
`,Uf=T.div`
  position: relative;
  width: 200px;
  height: 300px;
  background: #a2535370;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;

  /* 초기 상태 */
  opacity: 0;
  transform: translateY(30px) scale(0.8);

  /* 등장 애니메이션 */
  animation: cardSlideIn 0.8s ease-out forwards;
  animation-delay: ${n=>n.animationDelay}s;

  /* 애니메이션 완료 후 선택 상태 적용 */
  &.animation-complete {
    transform: ${n=>n.isSelected?"scale(0.95)":"scale(1)"};
    opacity: ${n=>n.isSelected?"0.8":"1"};
  }

  &:hover {
    transform: ${n=>n.isSelected?"translateY(-6px) scale(0.95)":"translateY(-8px) scale(1.05)"};
    z-index: 10;
    opacity: 1;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: ${n=>n.isSelected?"translateY(-4px) scale(0.9)":"translateY(-4px) scale(0.95)"};
    transition: all 0.1s ease;
  }

  @keyframes cardSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.8);
    }
    50% {
      opacity: 0.7;
      transform: translateY(-10px) scale(1.05);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

`,FT=T.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
`,JT=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Uf}:hover & {
    transform: scale(1.1);
  }
`,PT=T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(79, 70, 229, 0.1);
  z-index: 1;
  animation: overlayFadeIn 0.3s ease-out;
  
  @keyframes overlayFadeIn {
    0% {
      opacity: 0;
      background: rgba(79, 70, 229, 0);
    }
    100% {
      opacity: 1;
      background: rgba(79, 70, 229, 0.1);
    }
  }
`,WT=T.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: transparent;
  border-radius: 0 0 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  transition: all 0.3s ease;

  ${Uf}:hover & {
    background: linear-gradient(transparent, rgba(0, 132, 255, 0.6));
  }
`,IT=T.h3`
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,t4=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,e4=T.span`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`,n4=T.span`
  font-size: 12px;
  color: #e5e7eb;
  font-weight: 500;
`,a4=T.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${nt.mainBlue};
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  animation: checkmarkAppear 0.3s ease-out;
  
  @keyframes checkmarkAppear {
    0% {
      transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.2) rotate(22deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }
`,sf=rn.memo(({product:n,isSelected:l,onClick:r,animationDelay:s=0})=>{const c=w.useRef(null);return w.useEffect(()=>{const f=setTimeout(()=>{c.current&&c.current.classList.add("animation-complete")},s*1e3+600);return()=>clearTimeout(f)},[s]),v.jsxs(Uf,{ref:c,isSelected:l,onClick:r,animationDelay:s,children:[v.jsxs(FT,{children:[v.jsx(JT,{src:n.imageLink??"",alt:n.blurayTitle??""}),l&&v.jsx(PT,{})]}),v.jsxs(WT,{children:[v.jsx(IT,{children:n.blurayTitle}),v.jsxs(t4,{children:[v.jsxs(e4,{children:[n.price?.toLocaleString(),"원"]}),v.jsxs(n4,{children:["해상도: ",n.quality]})]})]}),l&&v.jsx(a4,{children:"✓"})]})});sf.displayName="OnboardingCard";const i4=()=>{const{data:n}=X2(60),[l,r]=w.useState([]),s=Qe(),c=Ye(),{token:f,me:d}=Da(),m=Ay(),[y,p]=w.useState(!1),{showToast:g}=Zl(),[S,O]=w.useState(""),[z,A]=w.useState(""),[D,C]=w.useState(!1);w.useEffect(()=>{const P=setTimeout(()=>{A(S)},500);return()=>clearTimeout(P)},[S]);const{data:L}=Fg(z&&D?z:""),q=w.useMemo(()=>{if(!n||n.length===0)return[];const P=[];for(let tt=0;tt<n.length;tt+=6)P.push(n.slice(tt,tt+6));return P.map((tt,vt)=>({products:[...tt,...tt,...tt,...tt,...tt,...tt,...tt,...tt],direction:vt%2===0?"right":"left"}))},[n]),$=w.useCallback(P=>{r(tt=>tt.includes(P)?tt.filter(vt=>vt!==P):tt.length<5?[...tt,P]:tt)},[]),J=w.useCallback(()=>{if(!S.trim()){C(!1);return}C(!0)},[S]),X=w.useCallback(P=>{P.key==="Enter"&&J()},[J]),I=w.useCallback(P=>{O(P.target.value),P.target.value.trim()||C(!1)},[]),K=async()=>{if(!f||!d){g("로그인이 필요합니다.","error"),s("/static/Login",{state:{from:c.pathname}});return}if(l.length<5){g("최소 5개의 영화를 선택해주세요.","warning");return}p(!0);try{let P=0;const tt=[];for(const vt of l)try{await m.mutateAsync({review:{salesId:vt,rating:5,reviewComment:null},token:f}),P+=1,await new Promise(_t=>setTimeout(_t,80))}catch{tt.push(vt)}tt.length===0?g("선호 영화가 등록되었습니다! 이제 맞춤 추천을 받아보세요.","success"):P>0?g(`일부만 등록되었습니다. 성공: ${P}, 실패: ${tt.length}`,"warning"):g("리뷰 생성에 모두 실패했습니다. 다시 시도해주세요.","error"),P>0&&s("/static")}finally{p(!1)}};return v.jsxs(Vs,{children:[v.jsxs(_T,{children:[v.jsx(UT,{children:"좋아하는 영화를 선택해주세요 (최소 5개)"}),v.jsxs(NT,{children:[l.length,"/5 선택됨"]}),v.jsxs(HT,{children:[v.jsxs(kT,{children:[v.jsx(YT,{children:"원하는 영화를 검색해보세요"}),v.jsx(QT,{children:"당신의 인생영화를 찾아보세요!"}),v.jsxs(GT,{children:[v.jsx($T,{type:"text",value:S,onChange:I,placeholder:"영화 제목을 입력하세요",onKeyDown:X}),v.jsx(XT,{onClick:J})]})]}),D&&v.jsxs(KT,{children:[v.jsx(VT,{children:"검색 결과"}),L?L.length===0?v.jsx(Hm,{children:"검색 결과가 없습니다"}):v.jsx(ZT,{children:L.map(P=>v.jsx(sf,{product:P,isSelected:l.includes(P.id),onClick:()=>$(P.id)},P.id))}):v.jsx(Hm,{children:"검색 중..."})]})]}),v.jsx(BT,{children:q.map((P,tt)=>v.jsx(LT,{direction:P.direction,rowIndex:tt,children:P.products.map((vt,_t)=>v.jsx(sf,{product:vt,isSelected:l.includes(vt.id),onClick:()=>$(vt.id),animationDelay:tt*.6+_t%6*.1},`${vt.id}-${_t}`))},tt))}),v.jsx(qT,{disabled:l.length<5||y,onClick:K,children:y?"리뷰 생성 중...":`완료 (${l.length}/5)`})]}),v.jsx(_i,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})};function l4(){return v.jsx(w.Suspense,{fallback:v.jsx(Vs,{children:v.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#fafafa"},children:v.jsx(ja,{type:"enhanced",message:"온보딩을 준비하고 있어요...",showProgress:!0})})}),children:v.jsx(i4,{})})}function r4(){return v.jsx(Ey,{children:v.jsx(PS,{children:v.jsxs(wx,{children:[v.jsx(fR,{}),v.jsx(WS,{}),v.jsxs(Ib,{children:[v.jsx(Tn,{path:"/static",element:v.jsx(cR,{})}),v.jsx(Tn,{path:"/static/Login",element:v.jsx(ER,{})}),v.jsx(Tn,{path:"/static/My",element:v.jsx(cT,{children:v.jsx(DT,{})})}),v.jsx(Tn,{path:"/static/LoginPage",element:v.jsx(RR,{})}),v.jsx(Tn,{path:"/static/Signup",element:v.jsx(MT,{})}),v.jsx(Tn,{path:"/static/SearchPage/:keyWord",element:v.jsx(qR,{})}),v.jsx(Tn,{path:"/static/DetailPage/:id",element:v.jsx(oT,{})}),v.jsx(Tn,{path:"/static/Onboarding",element:v.jsx(l4,{})})]})]})})})}const s4=new j2;sb.createRoot(document.getElementById("root")).render(v.jsx(w.StrictMode,{children:v.jsx(z2,{client:s4,children:v.jsx(Ey,{children:v.jsx(r4,{})})})}));
//# sourceMappingURL=index-tiJd60YL.js.map
